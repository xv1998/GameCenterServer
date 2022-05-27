/**
 * generator简单实现
 */

function generator(cb) {
  return (function () {
    let object = {
      next: 0,
      stop: function () {},
    };
    return {
      next: function () {
        let ret = cb(object);
        if (ret === undefined) return { value: undefined, done: true };
        return {
          value: ret,
          done: false,
        };
      },
    };
  })();
}

function* test() {
  let a = 1 + 2;
  yield 2;
  yield 3;
}

// babel 编码过的test
function test() {
  let a;
  return generator(function (_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          a = 1 + 2;
          _context.next = 4;
          return 2;
        case 4:
          _context.next = 6;
          return 3;
        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}
