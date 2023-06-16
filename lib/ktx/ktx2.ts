import { DataTexture } from 'three'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'

export async function loadKtx2 (url: string, renderer: THREE.WebGLRenderer) {
  const loader = new KTX2Loader()
  loader.setTranscoderPath('examples/jsm/libs/basis/')
  console.log('renderer:', renderer)
  loader.detectSupport(renderer)
  const compressedTexture = await loader.loadAsync(url)

  // console.log('[ktx] compressedTexture:', compressedTexture)
  // return compressedTexture

  const { data, width, height } = compressedTexture.mipmaps[0]

  const texture = new DataTexture(data, width, height)
  texture.needsUpdate = true
  console.log('[ktx] texture:', texture)
  return texture

}