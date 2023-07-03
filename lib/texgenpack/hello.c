#include <emscripten.h>
// #include <math.h>

EMSCRIPTEN_KEEPALIVE


// emcc hello.cpp -sEXPORTED_FUNCTIONS=_int_sqrt -sEXPORTED_RUNTIME_METHODS=ccall,cwrap

// int int_sqrt(int x) {
//   return sqrt(x);
// }

int fib (int n) {
  if (n <= 0) {
    return 0;
  }
  int i, t, a = 0, b = 1;
  for (i = 1; i < n; i++) {
    t = a + b;
    a = b;
    b = t;
  }
  return b;
}