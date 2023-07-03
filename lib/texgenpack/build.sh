#!/bin/bash

emcc -g -sWASM=1 -sEXPORT_ES6=1 \
  -sEXPORTED_FUNCTIONS=_malloc,_int_sqrt,_fib,_match_astc_block_size,_set_texture_decoding_function,_draw_block4x4_etc2_punchthrough,_get_filename_type \
  -sEXPORTED_RUNTIME_METHODS=ccall,cwrap,stringToNewUTF8 \
  -fexceptions \
  zz_hello.c zz_greet.c astc.c etc2.c half_float.c compare.c dxtc.c bptc.c rgtc.c texture.c texgenpack.c

  # -sLINKABLE=1 -sEXPORT_ALL=1 \
  #-sEXPORTED_FUNCTIONS=determine_filename_type \
  # -s EXPORTED_FUNCTIONS=_int_sqrt \
  # -s EXPORTED_FUNCTIONS=_determine_filename_type \


## symlink WASM
# rm ../../public/a.out.wasm
# ln -s $(pwd)/a.out.wasm ../../public/a.out.wasm