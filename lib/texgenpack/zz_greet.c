#include <emscripten.h>
#include "./zz_greet.h"

EMSCRIPTEN_KEEPALIVE

int int_sqrt(int x) {
  return sqrt(x);
}
