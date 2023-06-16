export function fileDrop (event: DragEvent) {
  if (event.dataTransfer === null) return []
  const files:File[] = []
  if (event.dataTransfer.items) {
    for (const item of event.dataTransfer.items) {
      if (item.kind !== 'file') continue
      const file = item.getAsFile()
      if (file === null) continue
      files.push(file)
    }
  } else {
    for (const file of event.dataTransfer.files) {
      files.push(file)
    }
  }
  return files
}
