import * as THREE from 'three'
import * as constants from 'three/src/constants.js'
import { entities } from 'three-perspective'
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js'
import { loadKtx2 } from './ktx2'
// import *  as libktx from '@/lib/libktx'

export async function loadKtx (url: string) {
  console.log('[ktx] load:', url)
  const loader = new KTXLoader()
  const compressedTexture = await loader.loadAsync(url)

  console.log('[ktx] compressedTexture:', compressedTexture)
  // return compressedTexture

  const { data, width, height } = compressedTexture.mipmaps[0]

  const texture = new THREE.DataTexture(data, width, height)
  texture.needsUpdate = true
  console.log('[ktx] texture:', texture)
  return texture

}

export async function parseKtx (url: string) {
  const loader = new KTXLoader()
  const parsed = await $fetch(url).then((res: any) => res.arrayBuffer()).then(buffer => loader.parse(buffer, true))
  console.log('parsed:', parsed)
  return parsed
}

export function ktxExampleScene () {
  const scene = new THREE.Scene()
  const light = new THREE.HemisphereLight('white', 'brown')
  scene.add(light)
  // const box = entities.createBox()
  // scene.add(box)
  return scene
}

export async function ktxImage (url: string, renderer: THREE.WebGLRenderer) {

  const texture = await loadKtx(url)

  // pane
  const geometry = new THREE.PlaneGeometry(10, 10)
  const material = new THREE.MeshStandardMaterial({
    // color: 'grey',
    transparent: true,
    map: texture,
    side: THREE.DoubleSide
  })
  const plane = new THREE.Mesh(geometry, material)
  plane.position.set(0, 0, 1)
  plane.rotation.set(Math.PI, 0, 0)
  return plane
}
