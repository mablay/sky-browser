import { meshPath } from "../../config"
import { readMesh } from "../../lib/mesh-server"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const name = query.name
  console.log('[API.mesh] name:', name)
  const mesh = readMesh(meshPath)
  return mesh
})