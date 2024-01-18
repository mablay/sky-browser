# ImHex Patterns for Meshes

The following pattern works on a decompressed buffer of a mesh.
Yet it is an incomplete decoding.

```c++
#include <std/string.pat>

u32 sharedVertexCount @ 0x74;
u32 totalVertexCount @ 0x78;
u32 pointCount @ 0x80;
u32 uvCount @ 0x74;

float vertexBuffer[sharedVertexCount * 4] @ 0xB3;

// u32 uvOffset = 0xB3 + sharedVertexCount * 16 + uvCount * 4 - 4;
u32 uvHeaderOffset = addressof(vertexBuffer) + sizeof(vertexBuffer);

u32 uvHeader[uvCount] @ uvHeaderOffset;

u32 uvOffset = uvHeaderOffset + sizeof(uvHeader);

using float16 = u16 [[format]];
float16 uvBuffer[uvCount * 8] @ uvOffset;

u32 faceCount = totalVertexCount / 3;

u32 idxbufOffset = uvOffset + sizeof(uvBuffer);

u16 indexBuffer[faceCount * 3] @ idxbufOffset;


std::print("faceCount: {}", faceCount);
std::print("pointCount: {}", pointCount);
std::print("sharedVertexCount: {}", sharedVertexCount);
std::print("totalVertexCount: {}", totalVertexCount);
```
