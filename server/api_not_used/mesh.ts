import { meshDir } from "../../config"
import { readMesh } from "../../lib/mesh/mesh-server"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const meshName = query.name
  const meshPath = `${meshDir}/${meshName}.mesh`
  console.log('[API.mesh] name:', meshPath)
  const mesh = readMesh(meshPath)
  return mesh
})