import * as THREE from 'three'
import * as constants from 'three/src/constants.js'
import { entities } from 'three-perspective'
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js'

export async function loadKtx (url: string) {
  console.log('[ktx] load:', url)
  const loader = new KTXLoader()
  const compressedTexture = await loader.loadAsync(url)
  // format: 37493 = 0x9275 (TgcOfficePosters01.ktx) // no alpha | RGB
  // format: 37497 = 0x9279 (TGCLogoFlat.ktx) with alpha | RGBA
  // compressedTexture.format = constants.RGB_S3TC_DXT1_Format
  // compressedTexture.format = constants.RGBA_S3TC_DXT1_Format
  // compressedTexture.format = constants.RGB_S3TC_DXT1_Format
  console.log('[ktx] compressedTexture:', compressedTexture)
  // console.log('[ktx] mipmap:', compressedTexture.mipmaps)

  // three-perspective.js:434 THREE.WebGLRenderer: 
  // Attempt to load unsupported compressed texture format in .uploadTexture()

  return compressedTexture
}

export async function parseKtx (url: string) {
  const loader = new KTXLoader()
  const parsed = await fetch(url).then(res => res.arrayBuffer()).then(buffer => loader.parse(buffer, true))
  console.log('parsed:', parsed)
  return parsed
}

export function ktxExampleScene () {
  const scene = new THREE.Scene()
  const light = new THREE.HemisphereLight('white', 'brown')
  scene.add(light)
  const box = entities.createBox()
  scene.add(box)
  return scene
}

export async function ktxImage (url: string) {

  // texture
  const texture = await loadKtx(url)

  // pane
  const geometry = new THREE.PlaneGeometry(10, 10)
  const material = new THREE.MeshStandardMaterial({
    // color: 'grey',
    map: texture,
    side: THREE.DoubleSide
  })
  const plane = new THREE.Mesh(geometry, material)
  plane.position.set(0, 0, 1)
  plane.rotation.set(0, 0, 0)
  return plane
}
