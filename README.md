# Sky Browser

Web based explorer for Sky assets.

This is a colaborative effort. All the hard work has been done by others.

I'm just bringing it to the browser.

This project is lacking properly documentation.

Checkout the demo for now.

---

## Credits

* TGC for their wonderful work
* Lukas & Chara for RE insights
* longbyte1 for the mesh decode script
* DancingTwix, Alturus, LivingMaize
  for infos in Discord and Forums
* Gred Zaal & Jarod Guest from polyhaven.com
  for their 3D sky background image

Relevant JS libraries:

* three
* lz4js
* @zip.js/zip.js
* vue3
* nuxt3
* kram (will be used for Textures)

## Reads

- https://www.vg-resource.com/thread-39211.html
- https://github.com/oldmud0/SkyEngineTools

## Extract Images

Sky textures are compressed ETC2 mipmapped textures stored in loose KTX files.

So far, I saw assets with these two ETC2 formats:

| code   | name                             | occurrence |
| ------ | -------------------------------- | ---------- |
| 0x9279 | COMPRESSED_SRGB8_ALPHA8_ETC2_EAC | 262        |
| 0x9275 | COMPRESSED_SRGB8_ETC2            | 174        |
| 0x9278 | COMPRESSED_RGBA8_ETC2_EAC        | 41         |
| 0x9274 | COMPRESSED_RGB8_ETC2             | 18         |
| 0x9270 | COMPRESSED_R11_EAC               | 21         |
| 0x8058 | RGBA8                            | 1          |

Stats can be produced using this command

```
# in the sky APK folder
cd assets/Data/Images/Bin/ETC2
ls -1 | xargs -I {} ktxinfo {} | grep glInternalformat
```

[read more...](./lib/ktx/README.md)

## See browser compatibility

* [using extensions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Using_Extensions)
* [compressed_texture_etc](https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_etc)

```js
document.createElement("canvas").getContext("webgl2").getSupportedExtensions()
document.createElement("canvas").getContext("webgl2").getExtension("WEBGL_compressed_texture_etc")
```

As of June 2023: Chrome and Firefox don't seem to support "WEBGL_compressed_texture_etc"


Specs

- [KTX File Format](https://registry.khronos.org/KTX/specs/2.0/ktxspec.v2.html)
- [WebGL ETC Extension](https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/)
- [ETC "crunch" compression explained](https://blog.unity.com/technology/crunch-compression-of-etc-textures)
- [texture format support by platform](https://docs.unity3d.com/Manual/class-TextureImporterOverride.html)
- [good read on texture compression](https://godotengine.org/article/betsy-gpu-texture-compressor/)

Judging by platform support and what I read from supported browser extensions on compressed textures, ETC2 will not fly out of the box in todays webkit browsers.

So it's either: userland support or transpile offline.

Libraries & tools

- libktx: [KTX-Softare](https://github.com/KhronosGroup/KTX-Software/tree/main/interface/js_binding) also has a [WASM binding example](https://github.khronos.org/KTX-Software/libktx_js.html). <= didn't work with ETC2 (0x9275, 0x9279)
- mesa [etc2_unpack_rgba8](https://github.com/Mesa3D/mesa/blob/main/src/mesa/main/texcompress_etc.c#L767) <= C/C++ code. Not tested yet.
- [basisu](https://github.com/BinomialLLC/basis_universal)


---

### KRAM v1.6.50

https://github.com/alecazam/kram

```sh
./kram decode -v -i TgcOfficePosters02.ktx -o TgcOfficePosters03.ktx
```

Wow! this actually worked. The resulting .ktx file is

* ktx version 1
* uncompressed

That causes an issue in the browser which expects ktx content to be compressed.
But opening it in inspector-binary showed raw RGB data inside the ktx file. Nice!

## Extract Meshes

[read more...](./lib/mesh/README.md)



## Extract Levels

Not sure if it's helpful, but here's a spec for [FBX](https://code.blender.org/2013/08/fbx-binary-file-format-specification/).
