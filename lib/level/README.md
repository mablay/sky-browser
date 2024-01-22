# Level Data

Looking at CandleSpace/Objects.level.bin

## Regions of Interest

### File Header

<header><floats>
0x000000 | TGCL                     | header
0x000004 | XX XX 00 00  XX XX 00 00 | float region
...
0x006FE8 | AttachBeacon 00 setHair  | Names
...
0x00B893 | BstNode_123 ...          | Nodes
...
0x0B4A2B | AutoClump123 ...         | AutoClump
...
0x0BE08F | XX                       | LastByte

### Dense Text

offset: AttachBeacon
