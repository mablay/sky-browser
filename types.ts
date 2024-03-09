/* since lz4js didn't bring their own type definitions
 * here's a patch for its decompressBlock function */
declare module 'lz4js' {
  function decompressBlock (
    src: ArrayLike<number>,
    dst: ArrayLike<number>,
    sIndex: number,
    sLength: number,
    dIndex: number
  ): number
}

declare module 'vblob' {
  const FileReader: any
}
