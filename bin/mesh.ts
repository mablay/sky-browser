/* CLI script to parse a .mesh file */
import { Scene } from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { createReadStream, readFileSync, writeFileSync } from "fs"
import { parseMeshFile } from "../lib/mesh/nodejs-mesh"
import { createMesh } from "../lib/mesh/three-mesh"
import { FileReader } from 'vblob'
import { basename, join } from 'path'
import { ZipReader, type Entry } from "@zip.js/zip.js"
import { WritableStream } from 'node:stream/web'
const { ReadableStream } = require('node:stream/web');

// inject FileReader for GLTF exporter
globalThis.FileReader = FileReader

const red = (text: string) => `\x1b[31m${text}\x1b[0m`

const path = process.argv[2]
const dst = process.argv[3]

if (!path || !dst) {
  console.warn('Required arguments: input, output')
  console.warn('  choose an input path to either a .mesh or a .apk file')
  console.warn('  the output folder will be used to write .gltf file(s)')
  process.exit(1)
}

if (path.endsWith('.mesh')) {
  const file = readFileSync(path)
  const filename = basename(path, '.mesh')
  extractGltf(file, join(dst, `${filename}.gltf`)).catch(console.error)
}

if (path.endsWith('.apk')) {
  extractApk(path, dst).catch(console.error)
}

async function extractApk (apkPath: string, outDir: string) {
  console.log('scanning APK...')
  let success = 0
  let fail = 0
  const rs = createReadStream(path)
  const readable = ReadableStream.from(rs)
  const zipReader = new ZipReader<Entry>(readable)
  const apk = zipReader.getEntriesGenerator()
  for await (const entry of apk) {
    if (!entry.filename.endsWith('.mesh')) continue
    if (entry.getData === undefined) continue
    // console.log(entry.filename, entry.directory, entry.uncompressedSize)
    const chunks: any[] = []
    const ws = new WritableStream({
      write (data) {
        chunks.push(data)
      }
    })
    const data = await entry.getData(ws)
    const file = Buffer.concat(chunks)
    const dstPath = join(outDir, `${basename(entry.filename, '.mesh')}.gltf`)
    try {
      await extractGltf(file, dstPath)
      console.log('✅', dstPath)
      success++
    } catch (error: any) {
      console.error('❌', dstPath, red(error.message))
      fail++
    }
  }
  console.log('Total mesh files:  ', success + fail)
  console.log('Extracted files:   ', success)
  console.log('Failed extractions:', fail)
}

/**
 * @param file mesh file buffer
 * @param path output path to `.gltf` file.
 */
async function extractGltf (file: Buffer, path: string) {
  const { header, skyMesh } = parseMeshFile(file)

  // logSection('vertices')
  // logSection('normals', 2)
  // logSection('uv', 2)
  // logSection('index')
  
  // function logSection (prop: 'vertices' | 'normals' | 'uv' | 'index', cols = 3) {
  //   const data = skyMesh[prop]
  //   console.log(prop, data.length / cols)
  //   console.log('   ', data.slice(0, cols), '...')
  //   console.log('   ', data.slice(data.length - cols))
  //   console.log('    min:', Math.min.apply(null, data.filter(x => !Number.isNaN(x))), 'max:', Math.max.apply(null, data.filter(x => !Number.isNaN(x))))
  //   console.log('')
  // }
  
  const mesh = await createMesh(skyMesh)
  mesh.geometry.computeBoundingSphere()
  if (!mesh.geometry.boundingSphere?.radius) {
    throw new Error('Mesh parsing failed!')
  }
  mesh.name = basename(path, '.gltf')
  
  const scene = new Scene()
  scene.add(mesh)
  const exporter = new GLTFExporter()
  
  const options = { binary: true }
  const gltf = await exporter.parseAsync(mesh, options)
  if (!(gltf instanceof ArrayBuffer)) {
    throw new Error('Unexpected GLTF data type!')
  }
  const buffer = Buffer.from(gltf)
  writeFileSync(path, buffer)  
}
