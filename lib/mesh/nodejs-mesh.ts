/* decompression in NodeJS works with a different dependency. */

import { decodeBlock } from "lz4"
import { parseMeshBody, parseMeshFileHeader, type SkyMeshFileHeader } from "./parse-mesh.js"

export function parseMeshFile (file: Buffer) {
  const view = new DataView(file.buffer)
  const header = parseMeshFileHeader(view)
  const body = decompressMeshFileBody(file, header)
  const skyMesh = parseMeshBody(body, header.version)
  return { header, skyMesh }
}

/** NodeJS implementation of lz4 decompression */
function decompressMeshFileBody (file: Buffer, header: SkyMeshFileHeader) {
  const compressedBuffer = file.subarray(0x56, 0x56 + header.compressedSize)
  const decompressedBuffer = Buffer.alloc(header.uncompressedSize)
  decodeBlock(compressedBuffer, decompressedBuffer, 0, header.compressedSize)
  return new DataView(decompressedBuffer.buffer)
}
