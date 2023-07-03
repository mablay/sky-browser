# TexGenPack

## Setup

[texgenpack](https://github.com/hglm/texgenpack) is a command line tool and library written in C.

I tired it out and figured, it might support textures used in Sky and the dependencies it requires
can be stripped if we limit the library to decoding and exclude GUI and compression features.

[emscripten](https://emscripten.org) is used to compile the feature reduced texgenpack library to WASM.

## Helping Articles

These articles helped understand how to compile C code to WASM and use it as ES6 module in the browser.

[Emscripting a C library to Wasm](https://web.dev/emscripting-a-c-library/)
and
[Calling compiled C functions from JavaScript using ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#interacting-with-code-ccall-cwrap)
didn't explain how to load the `a.out.js` as ES6 module.

[WASM as ES6 module](http://philiplassen.com/2021/08/11/node-es6-emscripten.html)

```sh
emcc increment.c -o increment.mjs \
  -s EXPORT_ES6=1 \  # <-- I was missing this part
  -s MODULARIZE=1 \
  -s EXPORT_NAME=loadWASM \
  -s EXPORTED_FUNCTIONS="[_increment]"
```

...should have read the `emcc` syntax first 😊

### VSC IntelliSense + Emscriptten

On Mac, my `emscripten.h` was unknown to Intellisense and I needed to add it to the C/C++ config PATH.

```pre
${workspaceFolder}/**
/usr/local/Cellar/emscripten/3.1.42/libexec/system/include/
```
