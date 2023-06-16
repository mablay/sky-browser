import * as THREE from 'three'

export function meshExampleScene () {
  const scene = new THREE.Scene()
  // scene.add(new THREE.AmbientLight('#FFF', 0.01))

  const upLight = new THREE.DirectionalLight('white', 1)
  upLight.position.set(-2, 20, -5)
  scene.add(upLight)

  const downLight = new THREE.DirectionalLight('#FDA', 0.1)
  downLight.position.set(2, -20, 5)
  scene.add(downLight)

  // env map
  // new THREE.TextureLoader().setPath('/').load('sky-children-of-the-light.jpg', function (texture) {
  // new RGBELoader().setPath('/').load('quarry_01_1k.hdr', function ( texture ) {
  
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 256 )
  cubeRenderTarget.texture.type = THREE.HalfFloatType;
  const cubeCamera = new THREE.CubeCamera( 1, 1000, cubeRenderTarget )

  return { scene, cubeCamera, cubeRenderTarget }
}

// export async function loadSkyMesh (name: string, cubeRenderTarget: THREE.WebGLCubeRenderTarget) {
//   const data = await $fetch(`/api/mesh?name=${name}`)
//   console.log('Mesh:', data)
//   const geometry = new THREE.BufferGeometry()
//   // const material = new THREE.MeshPhysicalMaterial({
//   //   color: '#FFF',
//   //   side: THREE.DoubleSide
//   // })

//   const material = new THREE.MeshStandardMaterial( {
//     envMap: cubeRenderTarget.texture,
//     roughness: 0.20,
//     metalness: 1
//   } );

//   // geometry.setIndex(data.indexBuffer.slice(-3970))
//   geometry.setIndex(data.indexBuffer)
//   console.log({
//     indices: data.indexBuffer.length,
//     vertices: data.vertexBuffer.length
//   })
//   geometry.setAttribute('position', new THREE.Float32BufferAttribute(data.vertexBuffer, 3))
//   geometry.computeVertexNormals()

//   return new THREE.Mesh(geometry, material)
// }