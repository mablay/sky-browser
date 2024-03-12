import { getFloat16 } from '@petamoriken/float16'

export type Cursor = ReturnType<typeof createCursor>

export function createCursor (view: DataView, offset = 0) {
  return {
    view,
    get offset () { return offset },
    set offset (value: number) { offset = value },
    skip: (bytes: number) => offset += bytes,
    readUint32 (littleEndian = true) {
      const value = view.getUint32(offset, littleEndian)
      offset += 4
      return value
    },
    readFloat32 (littleEndian = true) {
      const value = view.getFloat32(offset, littleEndian)
      offset += 4
      return value
    },
    readUint16 (littleEndian = true) {
      const value = view.getUint16(offset, littleEndian)
      offset += 2
      return value
    },
    readFloat16 (littleEndian = true) {
      const value = getFloat16(view, offset, littleEndian)
      offset += 2
      return value
    },
    readUint8 () {
      const value = view.getUint8(offset)
      offset += 1
      return value
    },
    slice (start: number, end: number) {
      const buffer = view.buffer.slice(start, end)
      offset += (end - start)
      return buffer
    }
  }
}
