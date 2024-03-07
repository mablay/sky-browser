# Mesh

Areas of interest, based on `FriendshiptStatue.mesh` (deflated).

N: numver of vertices
F: number of faces

| Data     | Bytes           | Items | Structure                          |
| -------- | --------------- | :---: | ---------------------------------- |
| vertices | 0x4E90 = N x 16 |   N   | float32, float32, float32, float32 |
| UVs      | 0x13A4 = N x 4  |   N   | float16, float16                   |
| normals  | 0x4E90 = N x 16 |   N   | float32, float32, float32, float32 |
| indices  | 0x28D4 = F x 6  |   F   | u16, u16, u16                      |
| misc2    | 0x09D2 = N x 2  |   N   | u16                                |
| misc3    | 0x09D2 = N x 2  |   N   | u16                                |
| misc7    | 0x1B38 = F x 4  |   F   | float32                            |

## Mesh Properties

Taking inspiration from [GLTF](https://www.khronos.org/files/gltf20-reference-guide.pdf), here are some properties that make sense in a mesh file.
If they are used in COTLs mesh format remains to be seen, but it might be helpful inspiration.

- vertices
- normals
- vertexColors
- faceIndices
- uvMappint
- bones
- skin / rigging
- animations

## UV Mapping Index

This is just an experiment on how I'd do such a mapping.

```pre
    1           2
     *---------*
     | \       |
     |   \     |
     |     \   |
     |       \ |
     *---------*
    3           4
```
Triangles:
  * [1, 2, 4, 1]
  * [1, 4, 3, 1]