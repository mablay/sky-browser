/*
Load `vgmstream-cli.js` in a web page, you will be able to call the
`callMain()` function from the browser developer console.
Parameters to vgmstream can be passed in an array:
`callMain(["-i", "input_file.pcm"])`.
Files can be accessed through Emscripten [File System API](https://emscripten.org/docs/api_reference/Filesystem-API.html) (`FS`).
*/

// import * as vgm from './vgmstream-cli-formated.js'

export interface AudioResource {
  bank: Uint8Array
  assets: Uint8Array
  streams: Uint8Array
}

export async function loadAudioBank (resource: AudioResource) {
  console.log('audio resource:', resource)
  const cliJs = await (await fetch('/wasm/vgmstream-cli.js')).text()
  const m = {}
  eval.bind(m)(cliJs)
  console.log('cli:', m)
  // console.log('vgm:', vgm)
  // vgm.callMain(['-i', 'input_file.pcm'])
}
