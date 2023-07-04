import initModule from './a.out.js'

export async function useTexgenpack () {
  const m = await initModule()

  function getFilenameType (filename: string) {
    const allocFilename = m.stringToNewUTF8(filename)
    // int get_filename_type (char *filename)
    const type = <number>m._get_filename_type(allocFilename)
    m._free(allocFilename)
    return type
  }

  function matchAstcBlockSize (width: number, height: number) {
    return m._match_astc_block_size(width, height)
  }

  // function loadImage (filename: string, image: Uint8Array) {
  //   const buf = m._malloc(u8Array.length)
  //   m.HEAPU8.set(u8Array, buf)
  //   m.ccall('my_function', 'number', ['number'], [buf])
  //   m._free(buf)
  // }

  /** the filename is important, because it's used to determine the input type */
  function decompress (srcFilename: string, srcBuffer: Uint8Array) {
    console.log('FS.writeFile:', srcFilename, '| bytes:', srcBuffer.byteLength)
    const dstFilename = 'out-'.concat(srcFilename)

    /// write input file to MEMFS
    m.FS.writeFile(srcFilename, srcBuffer)
    
    // --- LOAD IMAGE > ---
    const allocSrcFilename = m.stringToNewUTF8(srcFilename)
    const allocDstFilename = m.stringToNewUTF8(dstFilename)

    m._decompress(allocSrcFilename, allocDstFilename)

    m._free(allocSrcFilename)
    m._free(allocDstFilename)
    // --- < LOAD IMAGE ---
    
    /// read output file from MEMFS
    const dstFile = m.FS.readFile(dstFilename)
    m.FS.unlink(srcFilename)
    m.FS.unlink(dstFilename)

    return dstFile
  }

  return {
    module: m,
    getFilenameType,
    matchAstcBlockSize,
    decompress
  }
}
