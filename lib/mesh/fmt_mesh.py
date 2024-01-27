# This is a noesis script
# I got it from Jonn in Discord
# https://richwhitehouse.com/index.php?content=inc_projects.php
# I assume this is the original author. Yet this script is not included in the repo.
# https://github.com/Durik256/Noesis-Plugins
# ---
# by Durik256
from inc_noesis import *

def registerNoesisTypes():
	handle = noesis.register("Sky: Children", ".mesh")
	noesis.setHandlerTypeCheck(handle, noepyCheckType)
	noesis.setHandlerLoadModel(handle, noepyLoadModel)
	#noesis.logPopup()
	return 1

def noepyCheckType(data):
    return 1
    
def noepyLoadModel(data, mdlList):
    if 'ZipPos' in rapi.getInputName():
        noepyLoadZipModel(data, mdlList)
        return 1
        
    bones = []
    if data[:4] == b'\x1F\x00\x00\x00':
        bs = NoeBitStream(data)
        h = bs.read('18IH')[17:] + bs.read('3I')
        print(h)
        data = rapi.decompLZ4(bs.read(h[3]), h[4])
        if h[1] == 1:
            binf = bs.read('20I')+bs.read('B')+bs.read('I')
            print(binf)
            for x in range(binf[17]):
                name = bs.read(64).replace(b'\x00', b'').decode('ascii', errors='ignore')
                mat = NoeMat44.fromBytes(bs.read(64)).toMat43().inverse()
                index = bs.readUInt()-1
                print(x,name,[index])
                bones.append(NoeBone(x,name,mat,None,index))

    bs = NoeBitStream(data)
    ctx = rapi.rpgCreateContext()
    bs.seek(116)
    inf0 = bs.read('8I') 
    print('inf0', inf0)
    inf1 = bs.read('3B') 
    print('inf1', inf1)
    inf2 = bs.read('7I')
    print('inf2', inf2)

    bs.seek(116)
    vnum = bs.readUInt() # u32 vertex count
    bs.seek(120)
    inum = bs.readUInt() # u32 face corner count
    bs.seek(128)
    unum = bs.readUInt() # u32 uv count (numPoints)
    
    print('vnum', vnum)
    print('inum', inum)
    print('unum', unum)
    
    vertex_buffer_start = 179
    bs.seek(vertex_buffer_start)
    print('vbuf_start:', bs.tell())
    vbuf = bs.read(vnum*16)
    print('vbuf_end:', bs.tell())
    
    bs.seek(vnum * 4,1)
    print('uvbuf_start:', bs.tell())
    #bs.seek(vnum * 8,1)
    
    uvbuf = bs.read(vnum * 16)
    
    if len(bones):
        print('wbuf_start:', bs.tell())
        wbuf = bs.read(vnum * 8)

    print('ibuf_start:', bs.tell())
    ibuf = bs.read(inum*2)
    
    rapi.rpgBindPositionBuffer(vbuf, noesis.RPGEODATA_FLOAT, 16)
    rapi.rpgBindUV1Buffer(uvbuf, noesis.RPGEODATA_HALFFLOAT, 16)
    rapi.rpgBindUV2BufferOfs(uvbuf, noesis.RPGEODATA_HALFFLOAT, 16, 4)
    rapi.rpgBindUVXBufferOfs(uvbuf, noesis.RPGEODATA_HALFFLOAT, 16, 2, 2, 8)
    rapi.rpgBindUVXBufferOfs(uvbuf, noesis.RPGEODATA_HALFFLOAT, 16, 3, 2, 12)
    
    if len(bones):
        bonemap = [i - 1 for i in range(len(bones)+1)]
        bonemap[0] = 0
        rapi.rpgSetBoneMap(bonemap)

        rapi.rpgBindBoneIndexBuffer(wbuf,noesis.RPGEODATA_UBYTE,8,4)
        rapi.rpgBindBoneWeightBufferOfs(wbuf,noesis.RPGEODATA_UBYTE,8,4,4)
    
    rapi.rpgCommitTriangles(ibuf, noesis.RPGEODATA_USHORT, inum, noesis.RPGEO_TRIANGLE)

    try:
        mdl = rapi.rpgConstructModel()
    except:
        mdl = NoeModel()
    
    mdl.setModelMaterials(NoeModelMaterials([], [NoeMaterial('default','')]))
    mdl.setBones(bones)
    mdlList.append(mdl)
    return 1
    
#just so that there are no errors
def noepyLoadZipModel(data, mdlList):
    bones = []
    if data[:4] == b'\x1F\x00\x00\x00':
        bs = NoeBitStream(data)
        h = bs.read('18IH')[17:] + bs.read('3I')
        print(h)
        data = rapi.decompLZ4(bs.read(h[3]), h[4])
        if h[1] == 1:
            binf = bs.read('20I')+bs.read('B')+bs.read('I')
            print(binf)
            for x in range(binf[17]):
                name = bs.read(64).replace(b'\x00', b'').decode('ascii', errors='ignore')
                mat = NoeMat44.fromBytes(bs.read(64)).toMat43().inverse()
                index = bs.readUInt()-1
                print(x,name,[index])
                bones.append(NoeBone(x,name,mat,None,index))

    bs = NoeBitStream(data)
    ctx = rapi.rpgCreateContext()

    bs.seek(116)
    vnum = bs.readUInt()
    bs.seek(120)
    inum = bs.readUInt()
    bs.seek(128)
    unum = bs.readUInt()
    print('vnum:',vnum, 'inum:',inum)
    bs.seek(179)
    if(len(bones)):
        bs.seek(vnum*8,1)
    print('ibuf_start:', bs.tell())
    ibuf = bs.read(inum*2)
    
    bs.seek(len(data)-vnum*4)#(vnum*8)-vnum
    print('vbuf_start:', bs.tell())
    vbuf = bs.read(vnum*4)
    vbuf = decompV(vbuf, vnum)

    rapi.rpgBindPositionBuffer(vbuf, noesis.RPGEODATA_FLOAT, 12)
    #rapi.rpgBindPositionBufferOfs(vbuf, noesis.RPGEODATA_UBYTE, 4,1)
    rapi.rpgCommitTriangles(ibuf, noesis.RPGEODATA_USHORT, inum, noesis.RPGEO_TRIANGLE)
    
    try:
        mdl = rapi.rpgConstructModel()
    except:
        mdl = NoeModel()
    
    mdl.setModelMaterials(NoeModelMaterials([], [NoeMaterial('default','')]))
    mdl.setBones(bones)
    mdlList.append(mdl)
    return 1
    
def decompV(vbuf, vnum):
    bs = NoeBitStream(vbuf)
    vbuf = b''
    for x in range(vnum):
        vbuf += unpack_bytes_to_vector3(bs)
    return vbuf

def unpack_bytes_to_vector3(bs):
    x, y, z, w = struct.unpack('<BBBB', bs.read(4))
    return noePack('3f', y, z, w)
