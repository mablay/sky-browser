import initModule from './a.out.js'

export async function useTexgenpack () {
  const m = await initModule()

  function getFilenameType (filename: string) {
    const str = m.stringToNewUTF8('foo.ktx')
    m._free(filename)
    return str
  }

  function matchAstcBlockSize (width: number, height: number) {
    return m._match_astc_block_size(width, height)
  }

  return {
    module: m,
    getFilenameType,
    matchAstcBlockSize
  }
}
