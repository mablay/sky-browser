#!/bin/bash

emcc -s WASM=1 -s EXPORT_ES6=1 -s EXPORTED_FUNCTIONS=_fib -s "EXPORTED_RUNTIME_METHODS=['ccall', 'cwrap']" hello.c
