// @ts-ignore
import { decompressBlock } from 'lz4js'
import { ZipReader, type Entry, BlobReader, BlobWriter } from '@zip.js/zip.js'
import { BufferGeometry, Float32BufferAttribute, Line, LineBasicMaterial, Mesh, MeshBasicMaterial, MeshStandardMaterial, MeshStandardMaterialParameters, ObjectSpaceNormalMap, Points, PointsMaterial, TangentSpaceNormalMap, TextureLoader, Vector2 } from 'three'
import { fileDrop } from '~/lib/file-drop'
import { ktxImage } from '~/lib/ktx/ktx'
import { useTexgenpack } from '~/lib/texgenpack/texgenpack'
import { defaultImageName, defaultMeshName } from '~/config'
import { getFloat16 } from '@petamoriken/float16'

export type Asset = {
  name: string
  type: 'mesh' | 'image'
  entry: Entry
}

export default function useAssets () {
  const assets = useState<Entry[]>('assets', () => [])
  /** selected mesh name */
  const meshName = useState<string>('meshName', () => defaultMeshName)
  const imageName = useState<string>('imageName', () => defaultImageName)

  const meshes = computed(() => {
    const arr:Asset[] = []
    for (const asset of assets.value) {
      if (!asset.filename.endsWith('.mesh')) continue
      const filename = asset.filename.split('/').pop()
      if (!filename) continue
      const name = filename?.substring(0, filename.length - 5)
      arr.push({
        name,
        type: 'mesh',
        entry: asset
      })
    }
    return arr
  })

  const images = computed(() => {
    const arr:Asset[] = []
    for (const asset of assets.value) {
      if (!asset.filename.endsWith('.ktx')) continue
      const filename = asset.filename.split('/').pop()
      if (!filename) continue
      const name = filename?.substring(0, filename.length - 4)
      arr.push({
        name,
        type: 'image',
        entry: toRaw(asset)
      })
    }
    return arr
  })

  const selectedMeshAsset = computed(() => {
    if (!meshName.value || !meshes.value?.length) return
    return meshes.value.find(mesh => meshName.value === mesh.name)
  })

  const selectedImageAsset = computed(() => {
    if (!imageName.value || !images.value?.length) return
    return images.value.find(image => imageName.value === image.name)
  })

  function dropApk (event: DragEvent) {
    const files = fileDrop(event)
    const file = files[0]
    if (!file || !file.name.toLowerCase().endsWith('.apk')) {
      throw new Error('Drop a single APK!')
    }
    const zipReader = new ZipReader(new BlobReader(file))
    console.log('zipFileReader:', zipReader)
    // let offset = 0
    const entries:Entry[] = []
    zipReader.getEntries().then(async iterator => {
      for (const entry of iterator) {
        // offset += entry.compressedSize
        // const progress = offset / file.size
        entries.push(entry)
      }
      console.log('Parsed APK with %d entries', entries.length)  
      assets.value = entries
    }).catch(console.error)
  }

  async function loadMesh (entry: Entry, cubeRenderTarget?: THREE.WebGLCubeRenderTarget) {
    const { indexBuffer, vertexBuffer, normBuffer, faceCount, rawUV } = await parseMeshEntry(entry)

    const geometry = new BufferGeometry()

    const textureLoader = new TextureLoader()
    const diffuseMap = await textureLoader.loadAsync('/FriendshipStatue.png')
    const normalMap = await textureLoader.loadAsync('/FriendshipStatueSh.png')

    const options:MeshStandardMaterialParameters = {
      roughness: 0.20,
      metalness: 1.0,
      // map: diffuseMap,
      // normalMap,
      // normalMapType: TangentSpaceNormalMap,
      // normalScale: new Vector2(1, 1),
      color: 'white',
    }
    if (cubeRenderTarget) {
      options.envMap = cubeRenderTarget.texture
      options.envMapIntensity = 1
    }
    const material = new MeshStandardMaterial(options)
    // const material = new MeshBasicMaterial(options)
  
    geometry.setIndex(indexBuffer)
    // geometry.setIndex(indexBuffer.slice(5, 5 + faceCount * 3))

    geometry.setAttribute('uv', new Float32BufferAttribute(rawUV, 2))
    // console.log({
    //   indices: indexBuffer.length,
    //   vertices: vertexBuffer.length
    // })
    geometry.setAttribute('position', new Float32BufferAttribute(vertexBuffer, 3))
    // geometry.setAttribute('normal', new Float32BufferAttribute(normBuffer, 3))
    geometry.computeVertexNormals()
    // console.log(geometry)
    const mesh = new Mesh(geometry, material)


    /* Point Cloud */
    /*
    const pointGeo = new BufferGeometry()
    pointGeo.setAttribute('position', new Float32BufferAttribute(uvPoints, 3))
    const pointMat = new PointsMaterial({
      color: 0xFF0000,
      size: 0.1,
      sizeAttenuation: true
    })
    const cloud = new Points(pointGeo, pointMat)
    // const pointMat = new LineBasicMaterial({ color: '0xFFFFFF', linewidth: 0.1 })
    // const cloud = new Line(pointGeo, pointMat)
    mesh.add(cloud)
    cloud.position.set(0, 1, 0)
    */

    return mesh
  }

  async function loadImage (entry: Entry) {
    const texgenPromise = useTexgenpack()

    const texgen = await texgenPromise
    const filename = entry.filename.split('/').pop()
    console.log('filename:', entry.filename)
    if (!filename) throw new Error('Missing filename!')
    const blobWriter = new BlobWriter()
    const arrayBuffer = await entry.getData!(blobWriter).then(blob => blob.arrayBuffer())
    // fetch(srcUrl).then(res => res.arrayBuffer())
    console.log('file:', arrayBuffer)
  
    const imgBuffer = texgen.decompress(filename, new Uint8Array(arrayBuffer))
    const dstUrl = URL.createObjectURL(new Blob([imgBuffer]))
  
    const imageMesh = await ktxImage(dstUrl)
    // URL.revokeObjectURL(dstUrl)

    return imageMesh
  }

  async function loadImageList () {
    const list = await $fetch('/api/images')
    if (list.length === 0) return
    // remove existing images
    assets.value = assets.value.filter(asset => !asset.filename.endsWith('.ktx'))
    assets.value = <any>list
  }

  return {
    assets,
    meshes,
    images,
    meshName,
    imageName,
    selectedMeshAsset,
    selectedImageAsset,
    dropApk,
    loadMesh,
    loadImage,
    loadImageList,
  }
}

async function parseMeshEntry (entry: Entry) {
  const blobWriter = new BlobWriter()
  const arrayBuffer = await entry.getData!(blobWriter).then(blob => blob.arrayBuffer())
  const view = new DataView(arrayBuffer)

  // read params from file
  const uncompressedSize = view.getUint32(0x52, true)
  const compressedSize = view.getUint32(0x4e, true)
  const numLods = view.getUint32(0x44, true)
  console.log({
    compressedSize,
    uncompressedSize,
    numLods
  })

  const src = new Uint8Array(arrayBuffer.slice(0x56, 0x56 + compressedSize))
  const dest = new Uint8Array(uncompressedSize)
  decompressBlock(src, dest, 0, compressedSize, 0)
  const meshData = parseMesh(new DataView(dest.buffer))

  return {
    compressedSize,
    uncompressedSize,
    numLods,
    ...meshData
  }

}

function parseMesh (view: DataView) {
  // read params from decompressed buffer
  const vertexCount = view.getUint32(0x74, true)
  const cornerCount = view.getUint32(0x78, true)
  const pointCount = view.getUint32(0x80, true) // purpose?
  const uvCount = view.getUint32(0x74, true)
  console.log({
    vertexCount,
    cornerCount,
    pointCount,
    uvCount
  })

  // build vertex buffer
  const vertexBuffer:number[] = []
  let offset = 0xb3
  for (let i = 0; i < vertexCount; i++) {
    // little endian
    const x = view.getFloat32(offset + 0, true)
    const y = view.getFloat32(offset + 4, true)
    const z = view.getFloat32(offset + 8, true)
    offset += 16
    vertexBuffer.push(x, y, z)
  }

  // build uv buffer
  // console.log('uvBufferOffset:', offset)
  const normBuffer:number[] = []
  for (let i = 0; i < uvCount; i++) {
    const u1 = getFloat16(view, offset + 0, true)
    const v1 = getFloat16(view, offset + 2, true)
    const u2 = view.getUint16(offset + 0, false)
    const v2 = view.getUint16(offset + 2, false)
    offset += 4
    normBuffer.push(u2, v1, 0)
  }
  // console.log('uvBuffer:', uvBuffer)
  // const uvHeaderSize = uvCount * 4
  // offset += uvHeaderSize

  // build norm buffer
  // console.log('normBufferOffset:', offset)
  const rawUV:number[][] = []
  const uvPoints: number[] = []
  // const normBuffer:number[] = []
  for (let i = 0; i < uvCount; i++) {
    rawUV.push([
      getFloat16(view, offset + 0, true),
      1-getFloat16(view, offset + 2, true),
      // 0,
      // getFloat16(view, offset + 4, true),
      // getFloat16(view, offset + 6, true),
      // // 0,
      // getFloat16(view, offset + 8, true),
      // getFloat16(view, offset + 10, true),
      // // 0,
      // getFloat16(view, offset + 12, true),
      // getFloat16(view, offset + 14, true),
      // // 0,
    ])

    uvPoints.push(
      getFloat16(view, offset + 0, true),
      -getFloat16(view, offset + 2, true),
      0, // -1.5,
      1 + getFloat16(view, offset + 4, true),
      -getFloat16(view, offset + 6, true),
      -1, // -1.5,
      -1 + getFloat16(view, offset + 8, true),
      -getFloat16(view, offset + 10, true),
      -2, // -1.5,
      -2 + getFloat16(view, offset + 12, true),
      -getFloat16(view, offset + 14, true),
      -3, // -1.5,
    )
    // let z = view.getFloat32(offset + 8, true)
    const z = 0
    // unknown 4th component
    offset += 16
  }

  // build index buffer
  const indexBuffer: number[] = []
  const faceCount = Math.floor(cornerCount / 3)
  // offset += faceCount * 6 - 1676 // 0x10887
  const indexBufferStart = offset.toString(16) // view.buffer.slice(offset, offset + 20) // 0x108A1
  for (let i = 0; i < faceCount; i++) {
    const v1 = view.getUint16(offset + 0, true)
    const v2 = view.getUint16(offset + 2, true)
    const v3 = view.getUint16(offset + 4, true)
    offset += 6
    indexBuffer.push(v1, v2, v3)
  }

  // const uvBuffer = indexBuffer.flatMap(i => rawUV[i])
  console.log('UV::', {
    uvCount,
    indexBufferLen: indexBuffer.length,
    indexBufferStart,
    rawUVLen: rawUV.length,
    // uvBufferLen: uvBuffer.length,
    max: Math.max(...indexBuffer),
    min: Math.min(...indexBuffer),
  })
  // const normBuffer = rawUV

  // console.log({
  //   vertexBuffer,
  //   indexBuffer
  // })

  return {
    vertexCount,
    cornerCount,
    faceCount,
    pointCount,
    uvCount,
    vertexBuffer,
    indexBuffer,
    normBuffer,
    // uvBuffer,
    uvPoints,
    rawUV: rawUV.flat()
  }  
}