import type { SkyMesh } from './parse-mesh'
import * as THREE from 'three'

export function createMesh (data: SkyMesh, cubeRenderTarget?: THREE.WebGLCubeRenderTarget) {
  const geometry = new THREE.BufferGeometry()

  // const textureLoader = new THREE.TextureLoader()
  // const diffuseMap = await textureLoader.loadAsync('/FriendshipStatue.png')
  // const normalMap = await textureLoader.loadAsync('/FriendshipStatueSh.png')

  const options:THREE.MeshStandardMaterialParameters = {
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
  const material = new THREE.MeshStandardMaterial(options)
  // const material = new MeshBasicMaterial(options)

  geometry.setIndex(data.corners)
  // geometry.setIndex(indexBuffer.slice(5, 5 + faceCount * 3))

  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(data.uv, 2))
  // console.log({
  //   indices: indexBuffer.length,
  //   vertices: vertexBuffer.length
  // })
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(data.vertices, 3))
  // geometry.setAttribute('normal', new Float32BufferAttribute(normBuffer, 3))
  geometry.computeVertexNormals()
  // console.log(geometry)
  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}
