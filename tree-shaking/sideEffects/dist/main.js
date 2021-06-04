/*! For license information please see main.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      './tree-shaking/sideEffects/src/square.js': (e, r, t) => {
        function s(e) {
          return e * e;
        }
        t.d(r, { square: () => s });
      },
    },
    r = {};
  function t(s) {
    var o = r[s];
    if (void 0 !== o) return o.exports;
    var a = (r[s] = { exports: {} });
    return e[s](a, a.exports, t), a.exports;
  }
  (t.d = (e, r) => {
    for (var s in r) t.o(r, s) && !t.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: r[s] });
  }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (0, t('./tree-shaking/sideEffects/src/square.js').square)(5);
})();
