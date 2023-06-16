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