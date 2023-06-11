import * as THREE from 'three'
import { entities } from 'three-perspective'

export function meshExampleScene () {
  const scene = new THREE.Scene()
  // scene.add(new THREE.AmbientLight('#FFF', 0.01))

  const upLight = new THREE.DirectionalLight('white', 1)
  upLight.position.set(-2, 20, -5)
  scene.add(upLight)

  const downLight = new THREE.DirectionalLight('#FDA', 0.1)
  downLight.position.set(2, -20, 5)
  scene.add(downLight)

  return scene
}

export async function loadSkyMesh (name: string) {
  const data = await $fetch(`/api/mesh?name=${name}`)
  console.log('Mesh:', data)
  const geometry = new THREE.BufferGeometry()
  const material = new THREE.MeshPhysicalMaterial({
    color: '#FFF',
    side: THREE.DoubleSide
  })
  geometry.setIndex(data.indexBuffer)
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(data.vertexBuffer, 3))
  geometry.computeVertexNormals()
  return new THREE.Mesh(geometry, material)
}