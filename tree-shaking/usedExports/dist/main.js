/*! For license information please see main.js.LICENSE.txt */
(() => {
  'use strict';
  var e,
    r = {
      './tree-shaking/usedExports/src/cube.js': (e, r, s) => {
        console.log('===== cube =====');
      },
      './tree-shaking/usedExports/src/square.js': (e, r, s) => {
        function t(e) {
          return e * e;
        }
        s.d(r, { square: () => t });
      },
    },
    s = {};
  function t(e) {
    var o = s[e];
    if (void 0 !== o) return o.exports;
    var u = (s[e] = { exports: {} });
    return r[e](u, u.exports, t), u.exports;
  }
  (t.d = (e, r) => {
    for (var s in r) t.o(r, s) && !t.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: r[s] });
  }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = t('./tree-shaking/usedExports/src/square.js')),
    t('./tree-shaking/usedExports/src/cube.js'),
    (0, e.square)(5);
})();
