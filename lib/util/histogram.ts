export function createStats () {
  /** histogram over all values of a byte at a particular sequence */
  const hist = new Map<number, number>()
  let count = 0
  let min = Number.POSITIVE_INFINITY
  let max = Number.NEGATIVE_INFINITY
  function push (value: number) {
    hist.set(value, (hist.get(value) ?? 0) + 1)
    min = Math.min(min, value)
    max = Math.max(max, value)
    count++
  }
  return {
    push,
    hist,
    get min () { return min },
    get max () { return max },
    get count () { return count },
  }
}

export function createHistogram (size: number) {
  /** array of histograms. One for each byte in the buffer */
  const stats = [...Array(size)].map(_ => createStats())
  function pushBuffer (buffer: Buffer) {
    for (let k = 0; k < buffer.byteLength; k++) {
      stats[k].push(buffer[k])
    }
  }
  return {
    stats,
    pushBuffer
  }
}
