# KTX

Sky image assets mostly use the [KTX v1 file format](https://registry.khronos.org/KTX/specs/1.0/ktxspec.v1.html).

KTX files contain image meta data and multiple levels of compressed mipmapped images.

This allows the GPU to keep a low memory footprint. Even if many textures are loaded.

We're operating on Skys android app assets. Android supports ETC2 compression, which is
a well defined OpenGL standard, but not supported by common browsers as of mid 2023.

So we need to transcode the images before we can use them.

[webglreport](https://webglreport.com/?v=2) shows browser WebGL extension support.

*	[WEBGL_compressed_texture_s3tc](https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc)
* [WEBGL_compressed_texture_s3tc_srgb](https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb)

Seem to be supported in Chrome, Safari and Firefox on MacOS.

## Input

File format: KTXv1
Mipmapping: yes
Compression: yes
Formats:

| code   | name                             | occurrence |
| ------ | -------------------------------- | ---------- |
| 0x9279 | COMPRESSED_SRGB8_ALPHA8_ETC2_EAC | 262        |
| 0x9275 | COMPRESSED_SRGB8_ETC2            | 174        |
| 0x9278 | COMPRESSED_RGBA8_ETC2_EAC        | 41         |
| 0x9274 | COMPRESSED_RGB8_ETC2             | 18         |
| 0x9270 | COMPRESSED_R11_EAC               | 21         |
| 0x8058 | RGBA8                            | 1          |

## Output

File format: KTXv2 | DTX


## Further reading

* [Article about texture compression and patents](http://www.colecovision.eu/graphics/texture_compression.pdf)

## Desktop browser support for ETC2

AFAIU, ETC2 is common for mobile android devices. But not for desktop environments.

CLI tools like kram can transcode ETC2 to SRGB. But it's rather large.

Going down the rabbit hole, here are some repositories I came across that seem smaller and more specialized in the matter.


* [kram](https://github.com/alecazam/kram) Encode/decode/info to KTX/KTX2/DDS files with LDR/HDR and BC/ASTC/ETC2. Mac/Win C++11 too, Mac viewer, and scripts for batch processing textures.
* [texgenpack](https://github.com/hglm/texgenpack) Compress, decompress and convert texure files using a genetic algorithm. Supports KTX, DDS, ETC2, BC6/BC7 etc.
* [detex](https://github.com/hglm/detex) Low-level library for decompression and manipulation of texture blocks compressed using formats such as BC1/DXT1/S3TC, BC2-BC3, BC4/RGTC1, BC5/RGTC2, BC6 (BPTC_FLOAT), BC7 (BPTC), ETC1 and the ETC2 family, loading of KTX and DDS files, and conversion between pixel formats

Summary

* kram is quite mighty but beyond me to port to anything browser compatible.
* detex is feather light but lacks support for all the differnt ktx image formats sky uses.
* after stripping texgenpack of its GUI and compression features it's also without heavy 
  dependencies and seems to support more image formats than detex

## Emscripten + TexGenPack

Working with texgenpack on a mac required me to switch to a linux container and operate from there.
