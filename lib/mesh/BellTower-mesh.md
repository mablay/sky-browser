# Mesh File Structure

Example file: `BellTower_01.mesh`

| Section     | offset | byte length |
| ----------- | ------ | ----------- |
| File Header | 0      | 86          |
| lz4 buffer  | 86     | 195219      |

After decompressing the lz4 buffer we get the "uncompressed section"

## File Header

This sectio reveals the position and length of the compressed section.

```s
## imhex pattern
u32 numLods @ 0x44;
u32 compressedSize @ 0x4e;
u32 uncompressedSize @ 0x52;
u8 lz4buffer[compressedSize] @ 0x56;
```

## Compressed section

(after lz4 decompression)

```s
## ImHex patterm
u32 sharedVertexCount @ 0x74;
u32 cornerCount @ 0x78;
u32 pointCount @ 0x80;
u32 uvCount @ 0x74;
```

| Section         | offset | byte length | Comment           |
| --------------- | ------ | ----------- | ----------------- |
| File Header     | 0      | 179         |
| Vertex buffer   | 180    | 119776      | N x 4byte x 4comp |
| UV Buffer       | 119956 | 29944       | N x 2byte x 2comp |
| Normal buffer ? | 149900 | 119776      | N x 4byte x 4comp |
| index buffer    | 269676 | 36816       | M x 2byte x 3comp |
| ?               | 306492 | 54488       |

### Infos

number encoding in little endian.

vertexCount: 7486 (unique vertices)
cornerCount: 18408 (paritally reused vertices for faces)
faceCount = cornerCount / 3 = 6136

--- (side note)
miskData2 ~ 2 * vertexCount
miskData3 ~ 2 * vertexCount
miskData7 ~ 2 * faceCount

sb uvBufferOffset:    119955 | 119955
sb normBufferOffset:  149899 | 149899
---

```s
# Vertex Buffer
# x,y,z are vertex coordinates (last 32bits are unclear)
vertexCount * [x:float32][y:float32][z:float32][?:32bit]
= vertexCount * 16 Byte

# uvHeader
# unclear
vertexCount * [?:32bit]
= vertexCount * 4 Byte

# uvBuffer
# u,v coordinates for texture mapping
vertexCount * [u:float16][v:float16]
= vertexCount * 4 Byte

# Index Buffer - triangle vertex index
# i,j,k are each referencing a vertex
faceCount * [i:u16][j:u16][k:u16]
= faceCount * 6 Byte
```

### Questions

- what's the 4th 32bit value in the vertexBuffer
- what's in the uvHeader?
- which texture to use?

## Good Reads

* https://www.khronos.org/files/gltf20-reference-guide.pdf

