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

## More Notes

FileSize: 4_042_501 | 0x003DAF05

0x10    136      | 0x88
0x14    933681   | 0xE3F31
0x1C    933817   | 0xE3FB9 <-- looks good!
0x20    28429 (u16)
0x20    3108621 (u32)
0x28    4_042_438
0x2C    64
0xE3FB9 F1 73 BC 02 00 00 16 00 00 00 PropTikiTorchHandle_01

0x00000088 ~ Compressed buffer start
0x003DAEC5 ~ Compressed buffer end


136 + 28429 = 0x6F95


Test Buffer 0x70 - 0x70 + 933681 = 0xE3FA1 > 50 FC 9C 00 FB 00 9B  00 (P.......)
Test Buffer 0x70 - 0x70 + 933817 = 0xE4029 > 

Target Address:
* 0x000E3FB1
* 0x000E3FC3