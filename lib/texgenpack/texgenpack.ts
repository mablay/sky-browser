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

  function decompress (filename: string, buffer: Uint8Array) {
    console.log('blob:', buffer.byteLength)

    m.FS.writeFile(filename, buffer)

    const filetype = getFilenameType(filename)
    
    // --- LOAD IMAGE > ---
    const allocFilename = m.stringToNewUTF8(filename)
    // void load_image(const char *filename, int filetype, Image *image)
    m._load_image(allocFilename, filetype, 0)
    m._free(allocFilename)
    // --- < LOAD IMAGE ---

    // const buf = m._malloc(buffer.byteLength)
    // m.HEAPU8.set(buffer, buf)
    // m.ccall('my_function', 'number', ['number'], [buf])
    // m._free(buf)

    // unsigned int *pixels;
    // int width;
    // int height;
    // int extended_width;
    // int extended_height;
    // int alpha_bits;			// 0 for no alpha, 1 if alpha is limited to 0 and 0xFF, 8 otherwise.
    // int nu_components;		// Indicates the number of components.
    // int bits_per_component;		// 8 or 16.
    // int is_signed;			// 1 if the components are signed, 0 if unsigned.
    // int srgb;			// Whether the image is stored in sRGB format.
    // int is_half_float;		// The image pixels are combinations of half-floats. The pixel size is 64-bit.
  
    return []
  }

  return {
    module: m,
    getFilenameType,
    matchAstcBlockSize,
    decompress
  }
}
