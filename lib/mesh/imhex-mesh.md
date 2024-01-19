# ImHex Patterns for Meshes

The following pattern works on a decompressed buffer of a mesh.
Yet it is an incomplete decoding.

```c++
#include <std/string.pat>
using float16 = u16 [[format]];

u32 vertexCount @ 0x74;
u32 cornerCount @ 0x78;
u32 pointCount @ 0x80;

// vertices
float vertexBuffer[vertexCount * 4] @ 0xB3;

// UV coordinates
u32 uvOffset = addressof(vertexBuffer) + sizeof(vertexBuffer);
u32 uvBuffer[vertexCount] @ uvOffset;

// normal vectors?
u32 normalOffset = uvOffset + sizeof(uvBuffer);
float16 normalBuffer[vertexCount * 8] @ normalOffset;

// face indices
u32 faceCount = cornerCount / 3;
u32 idxbufOffset = normalOffset + sizeof(normalBuffer);
u16 indexBuffer[faceCount * 3] @ idxbufOffset;

std::print("faceCount: {}", faceCount);
std::print("cornerCount{}", cornerCount);
std::print("pointCount: {}", pointCount);
std::print("vertexCount{}", vertexCount);
```
