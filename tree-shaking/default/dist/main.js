/*! For license information please see main.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      './tree-shaking/default/src/cube.js': (e, r, t) => {
        function o(e) {
          return e * e * e;
        }
        t.r(r), t.d(r, { cube: () => o }), console.log('===== cube =====');
      },
      './tree-shaking/default/src/square.js': (e, r, t) => {
        function o(e) {
          return e * e;
        }
        t.r(r), t.d(r, { square: () => o });
      },
    },
    r = {};
  function t(o) {
    var u = r[o];
    if (void 0 !== u) return u.exports;
    var a = (r[o] = { exports: {} });
    return e[o](a, a.exports, t), a.exports;
  }
  (t.d = (e, r) => {
    for (var o in r) t.o(r, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
  }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var o = {};
  (() => {
    t.r(o);
    var e = t('./tree-shaking/default/src/square.js');
    t('./tree-shaking/default/src/cube.js'), (0, e.square)(5);
  })();
})();
