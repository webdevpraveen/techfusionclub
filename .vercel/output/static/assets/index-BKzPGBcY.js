const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/routes-BWimgAqU.js",
      "assets/utils-Bu-ICgPr.js",
      "assets/CTABanner-DVwM-bl3.js",
      "assets/Section-Bzy8-56x.js",
      "assets/code-xml-C-7GT58U.js",
      "assets/events-8DByy2WG.js",
      "assets/github-CMjJcyRn.js",
      "assets/sparkles-BiSfzhY3.js",
      "assets/users-BuH1laL9.js",
      "assets/GlowCard-CKkiIY9F.js",
      "assets/gallery-Dkh1h4rB.js",
      "assets/about-BQ9ZY-Cw.js",
      "assets/building-2-bBqB05oK.js",
      "assets/alumni-D9GsiMtd.js",
      "assets/linkedin-IyalMxU_.js",
      "assets/gallery-B30rL9wq.js",
      "assets/EventCard-CWdJmYUD.js",
      "assets/governance-CXsE5b0W.js",
      "assets/join-DKx0ygOR.js",
      "assets/team-Bj8dXaEr.js",
      "assets/events.index-G5sr_uD1.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, n, r, t as i } from "./utils-Bu-ICgPr.js";
var a = t((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e) (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), S || ((S = !0), ie()));
        else {
          var t = n(l);
          t !== null && se(x, t.startTime - e);
        }
      }
    }
    var S = !1,
      C = -1,
      ee = 5,
      te = -1;
    function ne() {
      return g ? !0 : !(e.unstable_now() - te < ee);
    }
    function re() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        te = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ne());) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && se(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
          }
        } finally {
          i ? ie() : (S = !1);
        }
      }
    }
    var ie;
    if (typeof y == `function`)
      ie = function () {
        y(re);
      };
    else if (typeof MessageChannel < `u`) {
      var ae = new MessageChannel(),
        oe = ae.port2;
      ((ae.port1.onmessage = re),
        (ie = function () {
          oe.postMessage(null);
        }));
    } else
      ie = function () {
        _(re, 0);
      };
    function se(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (ee = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (v(C), (C = -1)) : (h = !0), se(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), S || ((S = !0), ie()))),
          r
        );
      }),
      (e.unstable_shouldYield = ne),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  o = t((e, t) => {
    t.exports = a();
  }),
  s = t((e) => {
    var t = r();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function i() {}
    var a = {
        d: {
          f: i,
          r: function () {
            throw Error(n(522));
          },
          D: i,
          C: i,
          L: i,
          m: i,
          X: i,
          S: i,
          M: i,
        },
        p: 0,
        findDOMNode: null,
      },
      o = Symbol.for(`react.portal`);
    function s(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: o,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function l(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
      (e.createPortal = function (e, t) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)) throw Error(n(299));
        return s(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = c.T,
          n = a.p;
        try {
          if (((c.T = null), (a.p = 2), e)) return e();
        } finally {
          ((c.T = t), (a.p = n), a.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t = typeof t == `string` ? (t === `use-credentials` ? t : ``) : void 0))
            : (t = null),
          a.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && a.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = l(n, t.crossOrigin),
            i = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? a.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: o,
              })
            : n === `script` &&
              a.d.X(e, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = l(t.as, t.crossOrigin);
              a.d.M(e, {
                crossOrigin: n,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? a.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
          var n = t.as,
            r = l(n, t.crossOrigin);
          a.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = l(t.as, t.crossOrigin);
            a.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else a.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        a.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return c.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return c.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.8`));
  }),
  c = t((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = s()));
  }),
  l = t((e) => {
    var t = o(),
      n = r(),
      i = c();
    function a(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function s(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function l(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function u(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function d(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function f(e) {
      if (l(e) !== e) throw Error(a(188));
    }
    function p(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = l(e)), t === null)) throw Error(a(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
          if (((r = i.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === o.child) {
          for (o = i.child; o;) {
            if (o === n) return (f(i), e);
            if (o === r) return (f(i), t);
            o = o.sibling;
          }
          throw Error(a(188));
        }
        if (n.return !== r.return) ((n = i), (r = o));
        else {
          for (var s = !1, c = i.child; c;) {
            if (c === n) {
              ((s = !0), (n = i), (r = o));
              break;
            }
            if (c === r) {
              ((s = !0), (r = i), (n = o));
              break;
            }
            c = c.sibling;
          }
          if (!s) {
            for (c = o.child; c;) {
              if (c === n) {
                ((s = !0), (n = o), (r = i));
                break;
              }
              if (c === r) {
                ((s = !0), (r = o), (n = i));
                break;
              }
              c = c.sibling;
            }
            if (!s) throw Error(a(189));
          }
        }
        if (n.alternate !== r) throw Error(a(190));
      }
      if (n.tag !== 3) throw Error(a(188));
      return n.stateNode.current === n ? e : t;
    }
    function m(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = m(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      ee = Symbol.for(`react.forward_ref`),
      te = Symbol.for(`react.suspense`),
      ne = Symbol.for(`react.suspense_list`),
      re = Symbol.for(`react.memo`),
      ie = Symbol.for(`react.lazy`),
      ae = Symbol.for(`react.activity`),
      oe = Symbol.for(`react.memo_cache_sentinel`),
      se = Symbol.iterator;
    function ce(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (se && e[se]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var le = Symbol.for(`react.client.reference`);
    function ue(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === le ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case te:
          return `Suspense`;
        case ne:
          return `SuspenseList`;
        case ae:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case ee:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case re:
            return ((t = e.displayName || null), t === null ? ue(e.type) || `Memo` : t);
          case ie:
            ((t = e._payload), (e = e._init));
            try {
              return ue(e(t));
            } catch {}
        }
      return null;
    }
    var de = Array.isArray,
      w = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      T = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      fe = { pending: !1, data: null, method: null, action: null },
      pe = [],
      me = -1;
    function he(e) {
      return { current: e };
    }
    function E(e) {
      0 > me || ((e.current = pe[me]), (pe[me] = null), me--);
    }
    function D(e, t) {
      (me++, (pe[me] = e.current), (e.current = t));
    }
    var O = he(null),
      ge = he(null),
      _e = he(null),
      ve = he(null);
    function ye(e, t) {
      switch ((D(_e, t), D(ge, e), D(O, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (E(O), D(O, e));
    }
    function be() {
      (E(O), E(ge), E(_e));
    }
    function xe(e) {
      e.memoizedState !== null && D(ve, e);
      var t = O.current,
        n = Hd(t, e.type);
      t !== n && (D(ge, e), D(O, n));
    }
    function Se(e) {
      (ge.current === e && (E(O), E(ge)), ve.current === e && (E(ve), (Qf._currentValue = fe)));
    }
    var Ce, we;
    function Te(e) {
      if (Ce === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((Ce = (t && t[1]) || ``),
            (we =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        Ce +
        e +
        we
      );
    }
    var Ee = !1;
    function De(e, t) {
      if (!e || Ee) return ``;
      Ee = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) && typeof n.catch == `function` && n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`) return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);) i++;
          if (r === c.length || i === l.length)
            for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Ee = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? Te(n) : ``;
    }
    function Oe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Te(e.type);
        case 16:
          return Te(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? Te(`Suspense Fallback`) : Te(`Suspense`);
        case 19:
          return Te(`SuspenseList`);
        case 0:
        case 15:
          return De(e.type, !1);
        case 11:
          return De(e.type.render, !1);
        case 1:
          return De(e.type, !0);
        case 31:
          return Te(`Activity`);
        default:
          return ``;
      }
    }
    function ke(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Oe(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ae = Object.prototype.hasOwnProperty,
      je = t.unstable_scheduleCallback,
      Me = t.unstable_cancelCallback,
      Ne = t.unstable_shouldYield,
      Pe = t.unstable_requestPaint,
      Fe = t.unstable_now,
      Ie = t.unstable_getCurrentPriorityLevel,
      Le = t.unstable_ImmediatePriority,
      Re = t.unstable_UserBlockingPriority,
      ze = t.unstable_NormalPriority,
      Be = t.unstable_LowPriority,
      Ve = t.unstable_IdlePriority,
      He = t.log,
      Ue = t.unstable_setDisableYieldValue,
      We = null,
      Ge = null;
    function Ke(e) {
      if ((typeof He == `function` && Ue(e), Ge && typeof Ge.setStrictMode == `function`))
        try {
          Ge.setStrictMode(We, e);
        } catch {}
    }
    var qe = Math.clz32 ? Math.clz32 : Xe,
      Je = Math.log,
      Ye = Math.LN2;
    function Xe(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Je(e) / Ye) | 0)) | 0);
    }
    var Ze = 256,
      Qe = 262144,
      $e = 4194304;
    function et(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function tt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = et(n)))
                : (i = et(o))
              : (i = et(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = et(n))) : (i = et(o)))
              : (i = et(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function nt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function rt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function it() {
      var e = $e;
      return (($e <<= 1), !($e & 62914560) && ($e = 4194304), e);
    }
    function at(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function ot(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function st(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - qe(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && ct(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function ct(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - qe(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function lt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - qe(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function ut(e, t) {
      var n = t & -t;
      return ((n = n & 42 ? 1 : dt(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0);
    }
    function dt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ft(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
    }
    function pt() {
      var e = T.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function mt(e, t) {
      var n = T.p;
      try {
        return ((T.p = e), t());
      } finally {
        T.p = n;
      }
    }
    var ht = Math.random().toString(36).slice(2),
      gt = `__reactFiber$` + ht,
      _t = `__reactProps$` + ht,
      vt = `__reactContainer$` + ht,
      yt = `__reactEvents$` + ht,
      bt = `__reactListeners$` + ht,
      xt = `__reactHandles$` + ht,
      St = `__reactResources$` + ht,
      Ct = `__reactMarker$` + ht;
    function wt(e) {
      (delete e[gt], delete e[_t], delete e[yt], delete e[bt], delete e[xt]);
    }
    function Tt(e) {
      var t = e[gt];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[vt] || n[gt])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = df(e); e !== null;) {
              if ((n = e[gt])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Et(e) {
      if ((e = e[gt] || e[vt])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function Dt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(a(33));
    }
    function Ot(e) {
      var t = e[St];
      return ((t ||= e[St] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function kt(e) {
      e[Ct] = !0;
    }
    var At = new Set(),
      jt = {};
    function Mt(e, t) {
      (Nt(e, t), Nt(e + `Capture`, t));
    }
    function Nt(e, t) {
      for (jt[e] = t, e = 0; e < t.length; e++) At.add(t[e]);
    }
    var Pt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Ft = {},
      It = {};
    function Lt(e) {
      return Ae.call(It, e)
        ? !0
        : Ae.call(Ft, e)
          ? !1
          : Pt.test(e)
            ? (It[e] = !0)
            : ((Ft[e] = !0), !1);
    }
    function Rt(e, t, n) {
      if (Lt(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
      }
    }
    function zt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Bt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Vt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Ht(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function Ut(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Wt(e) {
      if (!e._valueTracker) {
        var t = Ht(e) ? `checked` : `value`;
        e._valueTracker = Ut(e, t, `` + e[t]);
      }
    }
    function Gt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Ht(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Kt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var qt = /[\n"\\]/g;
    function Jt(e) {
      return e.replace(qt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Yt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + Vt(t))
            : e.value !== `` + Vt(t) && (e.value = `` + Vt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Zt(e, o, Vt(n))
          : Zt(e, o, Vt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + Vt(s))
          : e.removeAttribute(`name`));
    }
    function Xt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Wt(e);
          return;
        }
        ((n = n == null ? `` : `` + Vt(n)),
          (t = t == null ? n : `` + Vt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Wt(e));
    }
    function Zt(e, t, n) {
      (t === `number` && Kt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Qt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Vt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function $t(e, t, n) {
      if (t != null && ((t = `` + Vt(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Vt(n);
    }
    function en(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(a(92));
          if (de(r)) {
            if (1 < r.length) throw Error(a(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Vt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Wt(e));
    }
    function tn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var nn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function rn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || nn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function an(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(a(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var i in t) ((r = t[i]), t.hasOwnProperty(i) && n[i] !== r && rn(e, i, r));
      } else for (var o in t) t.hasOwnProperty(o) && rn(e, o, t[o]);
    }
    function on(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var sn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      cn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ln(e) {
      return cn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function un() {}
    var dn = null;
    function fn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var pn = null,
      mn = null;
    function hn(e) {
      var t = Et(e);
      if (t && (e = t.stateNode)) {
        var n = e[_t] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Yt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(`input[name="` + Jt(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = r[_t] || null;
                  if (!i) throw Error(a(90));
                  Yt(
                    r,
                    i.value,
                    i.defaultValue,
                    i.defaultValue,
                    i.checked,
                    i.defaultChecked,
                    i.type,
                    i.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Gt(r));
            }
            break a;
          case `textarea`:
            $t(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Qt(e, !!n.multiple, t, !1));
        }
      }
    }
    var gn = !1;
    function _n(e, t, n) {
      if (gn) return e(t, n);
      gn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((gn = !1),
          (pn !== null || mn !== null) &&
            (bu(), pn && ((t = pn), (e = mn), (mn = pn = null), hn(t), e)))
        )
          for (t = 0; t < e.length; t++) hn(e[t]);
      }
    }
    function vn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[_t] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(a(231, t, typeof n));
      return n;
    }
    var yn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      bn = !1;
    if (yn)
      try {
        var xn = {};
        (Object.defineProperty(xn, "passive", {
          get: function () {
            bn = !0;
          },
        }),
          window.addEventListener(`test`, xn, xn),
          window.removeEventListener(`test`, xn, xn));
      } catch {
        bn = !1;
      }
    var Sn = null,
      Cn = null,
      wn = null;
    function Tn() {
      if (wn) return wn;
      var e,
        t = Cn,
        n = t.length,
        r,
        i = `value` in Sn ? Sn.value : Sn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (wn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function En(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Dn() {
      return !0;
    }
    function On() {
      return !1;
    }
    function kn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented
          )
            ? Dn
            : On),
          (this.isPropagationStopped = On),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Dn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Dn));
          },
          persist: function () {},
          isPersistent: Dn,
        }),
        t
      );
    }
    var An = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      jn = kn(An),
      Mn = h({}, An, { view: 0, detail: 0 }),
      Nn = kn(Mn),
      Pn,
      Fn,
      In,
      Ln = h({}, Mn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Jn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== In &&
                (In && e.type === `mousemove`
                  ? ((Pn = e.screenX - In.screenX), (Fn = e.screenY - In.screenY))
                  : (Fn = Pn = 0),
                (In = e)),
              Pn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Fn;
        },
      }),
      Rn = kn(Ln),
      zn = kn(h({}, Ln, { dataTransfer: 0 })),
      Bn = kn(h({}, Mn, { relatedTarget: 0 })),
      Vn = kn(h({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Hn = kn(
        h({}, An, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      Un = kn(h({}, An, { data: 0 })),
      Wn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Gn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Kn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function qn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Kn[e]) ? !!t[e] : !1;
    }
    function Jn() {
      return qn;
    }
    var Yn = kn(
        h({}, Mn, {
          key: function (e) {
            if (e.key) {
              var t = Wn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = En(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Gn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Jn,
          charCode: function (e) {
            return e.type === `keypress` ? En(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? En(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Xn = kn(
        h({}, Ln, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Zn = kn(
        h({}, Mn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Jn,
        }),
      ),
      Qn = kn(h({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      $n = kn(
        h({}, Ln, {
          deltaX: function (e) {
            return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      er = kn(h({}, An, { newState: 0, oldState: 0 })),
      tr = [9, 13, 27, 32],
      nr = yn && `CompositionEvent` in window,
      rr = null;
    yn && `documentMode` in document && (rr = document.documentMode);
    var ir = yn && `TextEvent` in window && !rr,
      ar = yn && (!nr || (rr && 8 < rr && 11 >= rr)),
      or = ` `,
      sr = !1;
    function cr(e, t) {
      switch (e) {
        case `keyup`:
          return tr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function lr(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var ur = !1;
    function dr(e, t) {
      switch (e) {
        case `compositionend`:
          return lr(t);
        case `keypress`:
          return t.which === 32 ? ((sr = !0), or) : null;
        case `textInput`:
          return ((e = t.data), e === or && sr ? null : e);
        default:
          return null;
      }
    }
    function fr(e, t) {
      if (ur)
        return e === `compositionend` || (!nr && cr(e, t))
          ? ((e = Tn()), (wn = Cn = Sn = null), (ur = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return ar && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var pr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function mr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!pr[e.type] : t === `textarea`;
    }
    function hr(e, t, n, r) {
      (pn ? (mn ? mn.push(r) : (mn = [r])) : (pn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new jn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var gr = null,
      _r = null;
    function vr(e) {
      yd(e, 0);
    }
    function yr(e) {
      if (Gt(Dt(e))) return e;
    }
    function br(e, t) {
      if (e === `change`) return t;
    }
    var xr = !1;
    if (yn) {
      var Sr;
      if (yn) {
        var Cr = `oninput` in document;
        if (!Cr) {
          var wr = document.createElement(`div`);
          (wr.setAttribute(`oninput`, `return;`), (Cr = typeof wr.oninput == `function`));
        }
        Sr = Cr;
      } else Sr = !1;
      xr = Sr && (!document.documentMode || 9 < document.documentMode);
    }
    function Tr() {
      gr && (gr.detachEvent(`onpropertychange`, k), (_r = gr = null));
    }
    function k(e) {
      if (e.propertyName === `value` && yr(_r)) {
        var t = [];
        (hr(t, _r, e, fn(e)), _n(vr, t));
      }
    }
    function Er(e, t, n) {
      e === `focusin`
        ? (Tr(), (gr = t), (_r = n), gr.attachEvent(`onpropertychange`, k))
        : e === `focusout` && Tr();
    }
    function Dr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return yr(_r);
    }
    function Or(e, t) {
      if (e === `click`) return yr(t);
    }
    function kr(e, t) {
      if (e === `input` || e === `change`) return yr(t);
    }
    function Ar(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var jr = typeof Object.is == `function` ? Object.is : Ar;
    function Mr(e, t) {
      if (jr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ae.call(t, i) || !jr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Nr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Pr(e, t) {
      var n = Nr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Nr(n);
      }
    }
    function Fr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Fr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Ir(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Kt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Kt(e.document);
      }
      return t;
    }
    function Lr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Rr = yn && `documentMode` in document && 11 >= document.documentMode,
      zr = null,
      Br = null,
      Vr = null,
      Hr = !1;
    function Ur(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Hr ||
        zr == null ||
        zr !== Kt(r) ||
        ((r = zr),
        `selectionStart` in r && Lr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Vr && Mr(Vr, r)) ||
          ((Vr = r),
          (r = Ed(Br, `onSelect`)),
          0 < r.length &&
            ((t = new jn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = zr))));
    }
    function Wr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Gr = {
        animationend: Wr(`Animation`, `AnimationEnd`),
        animationiteration: Wr(`Animation`, `AnimationIteration`),
        animationstart: Wr(`Animation`, `AnimationStart`),
        transitionrun: Wr(`Transition`, `TransitionRun`),
        transitionstart: Wr(`Transition`, `TransitionStart`),
        transitioncancel: Wr(`Transition`, `TransitionCancel`),
        transitionend: Wr(`Transition`, `TransitionEnd`),
      },
      Kr = {},
      qr = {};
    yn &&
      ((qr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Gr.animationend.animation,
        delete Gr.animationiteration.animation,
        delete Gr.animationstart.animation),
      `TransitionEvent` in window || delete Gr.transitionend.transition);
    function Jr(e) {
      if (Kr[e]) return Kr[e];
      if (!Gr[e]) return e;
      var t = Gr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in qr) return (Kr[e] = t[n]);
      return e;
    }
    var Yr = Jr(`animationend`),
      Xr = Jr(`animationiteration`),
      Zr = Jr(`animationstart`),
      Qr = Jr(`transitionrun`),
      $r = Jr(`transitionstart`),
      ei = Jr(`transitioncancel`),
      ti = Jr(`transitionend`),
      ni = new Map(),
      ri =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    ri.push(`scrollEnd`);
    function ii(e, t) {
      (ni.set(e, t), Mt(t, [e]));
    }
    var ai =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      oi = [],
      si = 0,
      ci = 0;
    function li() {
      for (var e = si, t = (ci = si = 0); t < e;) {
        var n = oi[t];
        oi[t++] = null;
        var r = oi[t];
        oi[t++] = null;
        var i = oi[t];
        oi[t++] = null;
        var a = oi[t];
        if (((oi[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
        }
        a !== 0 && pi(n, i, a);
      }
    }
    function ui(e, t, n, r) {
      ((oi[si++] = e),
        (oi[si++] = t),
        (oi[si++] = n),
        (oi[si++] = r),
        (ci |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function di(e, t, n, r) {
      return (ui(e, t, n, r), mi(e));
    }
    function fi(e, t) {
      return (ui(e, null, null, t), mi(e));
    }
    function pi(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 && ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - qe(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function mi(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(a(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var hi = {};
    function gi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function _i(e, t, n, r) {
      return new gi(e, t, n, r);
    }
    function vi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function yi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = _i(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function bi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function xi(e, t, n, r, i, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) vi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, O.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (e) {
          case ae:
            return ((e = _i(31, n, t, i)), (e.elementType = ae), (e.lanes = o), e);
          case y:
            return Si(n.children, i, o, t);
          case b:
            ((s = 8), (i |= 24));
            break;
          case x:
            return ((e = _i(12, n, t, i | 2)), (e.elementType = x), (e.lanes = o), e);
          case te:
            return ((e = _i(13, n, t, i)), (e.elementType = te), (e.lanes = o), e);
          case ne:
            return ((e = _i(19, n, t, i)), (e.elementType = ne), (e.lanes = o), e);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case ee:
                  s = 11;
                  break a;
                case re:
                  s = 14;
                  break a;
                case ie:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29), (n = Error(a(130, e === null ? `null` : typeof e, ``))), (r = null));
        }
      return ((t = _i(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
    }
    function Si(e, t, n, r) {
      return ((e = _i(7, e, r, t)), (e.lanes = n), e);
    }
    function Ci(e, t, n) {
      return ((e = _i(6, e, null, t)), (e.lanes = n), e);
    }
    function wi(e) {
      var t = _i(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Ti(e, t, n) {
      return (
        (t = _i(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ei = new WeakMap();
    function Di(e, t) {
      if (typeof e == `object` && e) {
        var n = Ei.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: ke(t) }), Ei.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: ke(t) };
    }
    var Oi = [],
      ki = 0,
      Ai = null,
      ji = 0,
      Mi = [],
      Ni = 0,
      Pi = null,
      Fi = 1,
      Ii = ``;
    function Li(e, t) {
      ((Oi[ki++] = ji), (Oi[ki++] = Ai), (Ai = e), (ji = t));
    }
    function Ri(e, t, n) {
      ((Mi[Ni++] = Fi), (Mi[Ni++] = Ii), (Mi[Ni++] = Pi), (Pi = e));
      var r = Fi;
      e = Ii;
      var i = 32 - qe(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - qe(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Fi = (1 << (32 - qe(t) + i)) | (n << i) | r),
          (Ii = a + e));
      } else ((Fi = (1 << a) | (n << i) | r), (Ii = e));
    }
    function zi(e) {
      e.return !== null && (Li(e, 1), Ri(e, 1, 0));
    }
    function Bi(e) {
      for (; e === Ai;) ((Ai = Oi[--ki]), (Oi[ki] = null), (ji = Oi[--ki]), (Oi[ki] = null));
      for (; e === Pi;)
        ((Pi = Mi[--Ni]),
          (Mi[Ni] = null),
          (Ii = Mi[--Ni]),
          (Mi[Ni] = null),
          (Fi = Mi[--Ni]),
          (Mi[Ni] = null));
    }
    function Vi(e, t) {
      ((Mi[Ni++] = Fi), (Mi[Ni++] = Ii), (Mi[Ni++] = Pi), (Fi = t.id), (Ii = t.overflow), (Pi = e));
    }
    var Hi = null,
      A = null,
      j = !1,
      Ui = null,
      Wi = !1,
      Gi = Error(a(519));
    function Ki(e) {
      throw (
        Qi(
          Di(
            Error(
              a(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Gi
      );
    }
    function qi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[gt] = e), (t[_t] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Xt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), en(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = un),
            (t = !0))
          : (t = !1),
        t || Ki(e, !0));
    }
    function Ji(e) {
      for (Hi = e.return; Hi;)
        switch (Hi.tag) {
          case 5:
          case 31:
          case 13:
            Wi = !1;
            return;
          case 27:
          case 3:
            Wi = !0;
            return;
          default:
            Hi = Hi.return;
        }
    }
    function Yi(e) {
      if (e !== Hi) return !1;
      if (!j) return (Ji(e), (j = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = n === `form` || n === `button` || Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && A && Ki(e),
        Ji(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(a(317));
        A = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(a(317));
        A = uf(e);
      } else
        t === 27
          ? ((t = A), Zd(e.type) ? ((e = lf), (lf = null), (A = e)) : (A = t))
          : (A = Hi ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Xi() {
      ((A = Hi = null), (j = !1));
    }
    function Zi() {
      var e = Ui;
      return (e !== null && (Zl === null ? (Zl = e) : Zl.push.apply(Zl, e), (Ui = null)), e);
    }
    function Qi(e) {
      Ui === null ? (Ui = [e]) : Ui.push(e);
    }
    var $i = he(null),
      ea = null,
      ta = null;
    function na(e, t, n) {
      (D($i, t._currentValue), (t._currentValue = n));
    }
    function ra(e) {
      ((e._currentValue = $i.current), E($i));
    }
    function ia(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function aa(e, t, n, r) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null;) {
        var o = i.dependencies;
        if (o !== null) {
          var s = i.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = i;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ia(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (i.tag === 18) {
          if (((s = i.return), s === null)) throw Error(a(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ia(s, n, e),
            (s = null));
        } else s = i.child;
        if (s !== null) s.return = i;
        else
          for (s = i; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((i = s.sibling), i !== null)) {
              ((i.return = s.return), (s = i));
              break;
            }
            s = s.return;
          }
        i = s;
      }
    }
    function oa(e, t, n, r) {
      e = null;
      for (var i = t, o = !1; i !== null;) {
        if (!o) {
          if (i.flags & 524288) o = !0;
          else if (i.flags & 262144) break;
        }
        if (i.tag === 10) {
          var s = i.alternate;
          if (s === null) throw Error(a(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = i.type;
            jr(i.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (i === ve.current) {
          if (((s = i.alternate), s === null)) throw Error(a(387));
          s.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        i = i.return;
      }
      (e !== null && aa(t, e, n, r), (t.flags |= 262144));
    }
    function sa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!jr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ca(e) {
      ((ea = e), (ta = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function la(e) {
      return da(ea, e);
    }
    function ua(e, t) {
      return (ea === null && ca(e), da(e, t));
    }
    function da(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), ta === null)) {
        if (e === null) throw Error(a(308));
        ((ta = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
      } else ta = ta.next = t;
      return n;
    }
    var fa =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      pa = t.unstable_scheduleCallback,
      ma = t.unstable_NormalPriority,
      ha = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function ga() {
      return { controller: new fa(), data: new Map(), refCount: 0 };
    }
    function _a(e) {
      (e.refCount--,
        e.refCount === 0 &&
          pa(ma, function () {
            e.controller.abort();
          }));
    }
    var va = null,
      ya = 0,
      ba = 0,
      xa = null;
    function Sa(e, t) {
      if (va === null) {
        var n = (va = []);
        ((ya = 0),
          (ba = dd()),
          (xa = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ya++, t.then(Ca, Ca), t);
    }
    function Ca() {
      if (--ya === 0 && va !== null) {
        xa !== null && (xa.status = `fulfilled`);
        var e = va;
        ((va = null), (ba = 0), (xa = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function wa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Ta = w.S;
    w.S = function (e, t) {
      ((eu = Fe()),
        typeof t == `object` && t && typeof t.then == `function` && Sa(e, t),
        Ta !== null && Ta(e, t));
    };
    var Ea = he(null);
    function Da() {
      var e = Ea.current;
      return e === null ? K.pooledCache : e;
    }
    function Oa(e, t) {
      t === null ? D(Ea, Ea.current) : D(Ea, t.pool);
    }
    function ka() {
      var e = Da();
      return e === null ? null : { parent: ha._currentValue, pool: e };
    }
    var Aa = Error(a(460)),
      ja = Error(a(474)),
      Ma = Error(a(542)),
      Na = { then: function () {} };
    function Pa(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Fa(e, t, n) {
      switch (
        ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(un, un), (t = n)), t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), za(e), e);
        default:
          if (typeof t.status == `string`) t.then(un, un);
          else {
            if (((e = K), e !== null && 100 < e.shellSuspendCounter)) throw Error(a(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), za(e), e);
          }
          throw ((La = t), Aa);
      }
    }
    function Ia(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((La = e), Aa) : e;
      }
    }
    var La = null;
    function Ra() {
      if (La === null) throw Error(a(459));
      var e = La;
      return ((La = null), e);
    }
    function za(e) {
      if (e === Aa || e === Ma) throw Error(a(483));
    }
    var Ba = null,
      Va = 0;
    function Ha(e) {
      var t = Va;
      return ((Va += 1), Ba === null && (Ba = []), Fa(Ba, e, t));
    }
    function Ua(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Wa(e, t) {
      throw t.$$typeof === g
        ? Error(a(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            a(
              31,
              e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e,
            ),
          ));
    }
    function Ga(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling));
        return t;
      }
      function i(e, t) {
        return ((e = yi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ci(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var a = n.type;
        return a === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === a ||
                (typeof a == `object` && a && a.$$typeof === ie && Ia(a) === t.type))
            ? ((t = i(t, n.props)), Ua(t, n), (t.return = e), t)
            : ((t = xi(n.type, n.key, n.props, null, e.mode, r)), Ua(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ti(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, a) {
        return t === null || t.tag !== 7
          ? ((t = Si(n, e.mode, r, a)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = Ci(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = xi(t.type, t.key, t.props, null, e.mode, n)),
                Ua(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = Ti(t, e.mode, n)), (t.return = e), t);
            case ie:
              return ((t = Ia(t)), f(e, t, n));
          }
          if (de(t) || ce(t)) return ((t = Si(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Ha(t), n);
          if (t.$$typeof === C) return f(e, ua(e, t), n);
          Wa(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case ie:
              return ((n = Ia(n)), p(e, t, n, r));
          }
          if (de(n) || ce(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Ha(n), r);
          if (n.$$typeof === C) return p(e, t, ua(e, n), r);
          Wa(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return ((e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i));
            case v:
              return ((e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i));
            case ie:
              return ((r = Ia(r)), m(e, t, n, r, i));
          }
          if (de(r) || ce(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, Ha(r), i);
          if (r.$$typeof === C) return m(e, t, n, ua(t, r), i);
          Wa(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), j && Li(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null && ((a = o(d, a, h)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (j && Li(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e && g.alternate !== null && d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          j && Li(i, h),
          l
        );
      }
      function g(i, s, c, l) {
        if (c == null) throw Error(a(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(i, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(i, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(i, h), j && Li(i, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(i, v.value, l)),
              v !== null && ((s = o(v, s, g)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (j && Li(i, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, i, g, v.value, l)),
            v !== null &&
              (e && v.alternate !== null && h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(i, e);
            }),
          j && Li(i, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` && o && o.type === y && o.key === null && (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling), (c = i(r, o.props.children)), (c.return = e), (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` && l && l.$$typeof === ie && Ia(l) === r.type)
                    ) {
                      (n(e, r.sibling), (c = i(r, o.props)), Ua(c, o), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === y
                  ? ((c = Si(o.props.children, e.mode, c, o.key)), (c.return = e), (e = c))
                  : ((c = xi(o.type, o.key, o.props, null, e.mode, c)),
                    Ua(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling), (c = i(r, o.children || [])), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((c = Ti(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case ie:
              return ((o = Ia(o)), b(e, r, o, c));
          }
          if (de(o)) return h(e, r, o, c);
          if (ce(o)) {
            if (((l = ce(o)), typeof l != `function`)) throw Error(a(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, Ha(o), c);
          if (o.$$typeof === C) return b(e, r, ua(e, o), c);
          Wa(e, o);
        }
        return (typeof o == `string` && o !== ``) || typeof o == `number` || typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = i(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ci(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Va = 0;
          var i = b(e, t, n, r);
          return ((Ba = null), i);
        } catch (t) {
          if (t === Aa || t === Ma) throw t;
          var a = _i(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Ka = Ga(!0),
      qa = Ga(!1),
      Ja = !1;
    function Ya(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Xa(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Za(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Qa(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), G & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = mi(e)),
          pi(e, null, n),
          t
        );
      }
      return (ui(e, r, t, n), mi(e));
    }
    function $a(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), lt(e, n));
      }
    }
    function eo(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var M = !1;
    function to() {
      if (M) {
        var e = xa;
        if (e !== null) throw e;
      }
    }
    function no(e, t, n, r) {
      M = !1;
      var i = e.updateQueue;
      Ja = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (J & f) === f : (r & f) === f) {
            (f !== 0 && f === ba && (M = !0),
              u !== null &&
                (u = u.next =
                  { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload), (f = typeof m == `function` ? m.call(_, d, f) : m), f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  Ja = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = { lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Gl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function ro(e, t) {
      if (typeof e != `function`) throw Error(a(191, e));
      e.call(t);
    }
    function io(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) ro(n[e], t);
    }
    var ao = he(null),
      oo = he(0);
    function so(e, t) {
      ((e = Wl), D(oo, e), D(ao, t), (Wl = e | t.baseLanes));
    }
    function co() {
      (D(oo, Wl), D(ao, ao.current));
    }
    function lo() {
      ((Wl = oo.current), E(ao), E(oo));
    }
    var uo = he(null),
      fo = null;
    function po(e) {
      var t = e.alternate;
      (D(N, N.current & 1),
        D(uo, e),
        fo === null && (t === null || ao.current !== null || t.memoizedState !== null) && (fo = e));
    }
    function mo(e) {
      (D(N, N.current), D(uo, e), fo === null && (fo = e));
    }
    function ho(e) {
      e.tag === 22 ? (D(N, N.current), D(uo, e), fo === null && (fo = e)) : go(e);
    }
    function go() {
      (D(N, N.current), D(uo, uo.current));
    }
    function _o(e) {
      (E(uo), fo === e && (fo = null), E(N));
    }
    var N = he(0);
    function vo(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n))) return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var yo = 0,
      P = null,
      F = null,
      bo = null,
      xo = !1,
      So = !1,
      Co = !1,
      wo = 0,
      To = 0,
      Eo = null,
      Do = 0;
    function I() {
      throw Error(a(321));
    }
    function Oo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!jr(e[n], t[n])) return !1;
      return !0;
    }
    function ko(e, t, n, r, i, a) {
      return (
        (yo = a),
        (P = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (w.H = e === null || e.memoizedState === null ? Hs : V),
        (Co = !1),
        (a = n(r, i)),
        (Co = !1),
        So && (a = jo(t, n, r, i)),
        Ao(e),
        a
      );
    }
    function Ao(e) {
      w.H = Vs;
      var t = F !== null && F.next !== null;
      if (((yo = 0), (bo = F = P = null), (xo = !1), (To = 0), (Eo = null), t)) throw Error(a(300));
      e === null || H || ((e = e.dependencies), e !== null && sa(e) && (H = !0));
    }
    function jo(e, t, n, r) {
      P = e;
      var i = 0;
      do {
        if ((So && (Eo = null), (To = 0), (So = !1), 25 <= i)) throw Error(a(301));
        if (((i += 1), (bo = F = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((w.H = Us), (o = t(n, r)));
      } while (So);
      return o;
    }
    function L() {
      var e = w.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Lo(t) : t),
        (e = e.useState()[0]),
        (F === null ? null : F.memoizedState) !== e && (P.flags |= 1024),
        t
      );
    }
    function Mo() {
      var e = wo !== 0;
      return ((wo = 0), e);
    }
    function No(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Po(e) {
      if (xo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        xo = !1;
      }
      ((yo = 0), (bo = F = P = null), (So = !1), (To = wo = 0), (Eo = null));
    }
    function Fo() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (bo === null ? (P.memoizedState = bo = e) : (bo = bo.next = e), bo);
    }
    function R() {
      if (F === null) {
        var e = P.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = F.next;
      var t = bo === null ? P.memoizedState : bo.next;
      if (t !== null) ((bo = t), (F = e));
      else {
        if (e === null) throw P.alternate === null ? Error(a(467)) : Error(a(310));
        ((F = e),
          (e = {
            memoizedState: F.memoizedState,
            baseState: F.baseState,
            baseQueue: F.baseQueue,
            queue: F.queue,
            next: null,
          }),
          bo === null ? (P.memoizedState = bo = e) : (bo = bo.next = e));
      }
      return bo;
    }
    function Io() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Lo(e) {
      var t = To;
      return (
        (To += 1),
        Eo === null && (Eo = []),
        (e = Fa(Eo, e, t)),
        (t = P),
        (bo === null ? t.memoizedState : bo.next) === null &&
          ((t = t.alternate), (w.H = t === null || t.memoizedState === null ? Hs : V)),
        e
      );
    }
    function Ro(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Lo(e);
        if (e.$$typeof === C) return la(e);
      }
      throw Error(a(438, String(e)));
    }
    function zo(e) {
      var t = null,
        n = P.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = P.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Io()), (P.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = oe;
      return (t.index++, n);
    }
    function Bo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Vo(e) {
      return Ho(R(), F, e);
    }
    function Ho(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(a(311));
      r.lastRenderedReducer = n;
      var i = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (i !== null) {
          var s = i.next;
          ((i.next = o.next), (o.next = s));
        }
        ((t.baseQueue = i = o), (r.pending = null));
      }
      if (((o = e.baseState), i === null)) e.memoizedState = o;
      else {
        t = i.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (yo & f) === f : (J & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === ba && (d = !0));
            else if ((yo & p) === p) {
              ((u = u.next), p === ba && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (P.lanes |= p),
                (Gl |= p));
            ((f = u.action), Co && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (P.lanes |= f),
              (Gl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !jr(o, e.memoizedState) && ((H = !0), d && ((n = xa), n !== null)))
        )
          throw n;
        ((e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = o));
      }
      return (i === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Uo(e) {
      var t = R(),
        n = t.queue;
      if (n === null) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== i);
        (jr(o, t.memoizedState) || (H = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Wo(e, t, n) {
      var r = P,
        i = R(),
        o = j;
      if (o) {
        if (n === void 0) throw Error(a(407));
        n = n();
      } else n = t();
      var s = !jr((F || i).memoizedState, n);
      if (
        (s && ((i.memoizedState = n), (H = !0)),
        (i = i.queue),
        hs(qo.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || s || (bo !== null && bo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          us(9, { destroy: void 0 }, Ko.bind(null, r, i, n, t), null),
          K === null)
        )
          throw Error(a(349));
        o || yo & 127 || Go(r, t, n);
      }
      return n;
    }
    function Go(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = P.updateQueue),
        t === null
          ? ((t = Io()), (P.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Ko(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Jo(t) && Yo(e));
    }
    function qo(e, t, n) {
      return n(function () {
        Jo(t) && Yo(e);
      });
    }
    function Jo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !jr(e, n);
      } catch {
        return !0;
      }
    }
    function Yo(e) {
      var t = fi(e, 2);
      t !== null && hu(t, e, 2);
    }
    function Xo(e) {
      var t = Fo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), Co)) {
          Ke(!0);
          try {
            n();
          } finally {
            Ke(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Zo(e, t, n, r) {
      return ((e.baseState = n), Ho(e, F, typeof r == `function` ? r : Bo));
    }
    function Qo(e, t, n, r, i) {
      if (Rs(e)) throw Error(a(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: i,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (w.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), $o(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function $o(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = w.T,
          o = {};
        w.T = o;
        try {
          var s = n(i, r),
            c = w.S;
          (c !== null && c(o, s), es(e, t, s));
        } catch (n) {
          ns(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (w.T = a));
        }
      } else
        try {
          ((a = n(i, r)), es(e, t, a));
        } catch (n) {
          ns(e, t, n);
        }
    }
    function es(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              ts(e, t, n);
            },
            function (n) {
              return ns(e, t, n);
            },
          )
        : ts(e, t, n);
    }
    function ts(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        rs(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), $o(e, n))));
    }
    function ns(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), rs(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function rs(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function is(e, t) {
      return t;
    }
    function as(e, t) {
      if (j) {
        var n = K.formState;
        if (n !== null) {
          a: {
            var r = P;
            if (j) {
              if (A) {
                b: {
                  for (var i = A, a = Wi; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((A = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Ki(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Fo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: is,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Fs.bind(null, P, r)),
        (r.dispatch = n),
        (r = Xo(!1)),
        (a = Ls.bind(null, P, !1, r.queue)),
        (r = Fo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Qo.bind(null, P, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function os(e) {
      return ss(R(), F, e);
    }
    function ss(e, t, n) {
      if (
        ((t = Ho(e, t, is)[0]),
        (e = Vo(Bo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Lo(t);
        } catch (e) {
          throw e === Aa ? Ma : e;
        }
      else r = t;
      t = R();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((P.flags |= 2048), us(9, { destroy: void 0 }, cs.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function cs(e, t) {
      e.action = t;
    }
    function ls(e) {
      var t = R(),
        n = F;
      if (n !== null) return ss(t, n, e);
      (R(), (t = t.memoizedState), (n = R()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function us(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = P.updateQueue),
        t === null && ((t = Io()), (P.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ds() {
      return R().memoizedState;
    }
    function fs(e, t, n, r) {
      var i = Fo();
      ((P.flags |= e),
        (i.memoizedState = us(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)));
    }
    function ps(e, t, n, r) {
      var i = R();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      F !== null && r !== null && Oo(r, F.memoizedState.deps)
        ? (i.memoizedState = us(t, a, n, r))
        : ((P.flags |= e), (i.memoizedState = us(1 | t, a, n, r)));
    }
    function ms(e, t) {
      fs(8390656, 8, e, t);
    }
    function hs(e, t) {
      ps(2048, 8, e, t);
    }
    function gs(e) {
      P.flags |= 4;
      var t = P.updateQueue;
      if (t === null) ((t = Io()), (P.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function _s(e) {
      var t = R().memoizedState;
      return (
        gs({ ref: t, nextImpl: e }),
        function () {
          if (G & 2) throw Error(a(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function vs(e, t) {
      return ps(4, 2, e, t);
    }
    function ys(e, t) {
      return ps(4, 4, e, t);
    }
    function bs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function xs(e, t, n) {
      ((n = n == null ? null : n.concat([e])), ps(4, 4, bs.bind(null, t, e), n));
    }
    function Ss() {}
    function Cs(e, t) {
      var n = R();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && Oo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function ws(e, t) {
      var n = R();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && Oo(t, r[1])) return r[0];
      if (((r = e()), Co)) {
        Ke(!0);
        try {
          e();
        } finally {
          Ke(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Ts(e, t, n) {
      return n === void 0 || (yo & 1073741824 && !(J & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (P.lanes |= e), (Gl |= e), n);
    }
    function z(e, t, n, r) {
      return jr(n, t)
        ? n
        : ao.current === null
          ? !(yo & 42) || (yo & 1073741824 && !(J & 261930))
            ? ((H = !0), (e.memoizedState = n))
            : ((e = mu()), (P.lanes |= e), (Gl |= e), t)
          : ((e = Ts(e, n, r)), jr(e, t) || (H = !0), e);
    }
    function Es(e, t, n, r, i) {
      var a = T.p;
      T.p = a !== 0 && 8 > a ? a : 8;
      var o = w.T,
        s = {};
      ((w.T = s), Ls(e, !1, t, n));
      try {
        var c = i(),
          l = w.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Is(e, t, wa(c, r), pu(e))
            : Is(e, t, r, pu(e)));
      } catch (n) {
        Is(e, t, { then: function () {}, status: `rejected`, reason: n }, pu());
      } finally {
        ((T.p = a), o !== null && s.types !== null && (o.types = s.types), (w.T = o));
      }
    }
    function Ds() {}
    function Os(e, t, n, r) {
      if (e.tag !== 5) throw Error(a(476));
      var i = ks(e).queue;
      Es(
        e,
        i,
        t,
        fe,
        n === null
          ? Ds
          : function () {
              return (B(e), n(r));
            },
      );
    }
    function ks(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: fe,
        baseState: fe,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bo,
          lastRenderedState: fe,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Bo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function B(e) {
      var t = ks(e);
      (t.next === null && (t = e.alternate.memoizedState), Is(e, t.next.queue, {}, pu()));
    }
    function As() {
      return la(Qf);
    }
    function js() {
      return R().memoizedState;
    }
    function Ms() {
      return R().memoizedState;
    }
    function Ns(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu();
            e = Za(n);
            var r = Qa(t, e, n);
            (r !== null && (hu(r, t, n), $a(r, t, n)), (t = { cache: ga() }), (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ps(e, t, n) {
      var r = pu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Rs(e) ? zs(t, n) : ((n = di(e, t, n, r)), n !== null && (hu(n, e, r), Bs(n, t, r))));
    }
    function Fs(e, t, n) {
      Is(e, t, n, pu());
    }
    function Is(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Rs(e)) zs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), jr(s, o)))
              return (ui(e, t, i, 0), K === null && li(), !1);
          } catch {}
        if (((n = di(e, t, i, r)), n !== null)) return (hu(n, e, r), Bs(n, t, r), !0);
      }
      return !1;
    }
    function Ls(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Rs(e))
      ) {
        if (t) throw Error(a(479));
      } else ((t = di(e, n, r, 2)), t !== null && hu(t, e, 2));
    }
    function Rs(e) {
      var t = e.alternate;
      return e === P || (t !== null && t === P);
    }
    function zs(e, t) {
      So = xo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function Bs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), lt(e, n));
      }
    }
    var Vs = {
      readContext: la,
      use: Ro,
      useCallback: I,
      useContext: I,
      useEffect: I,
      useImperativeHandle: I,
      useLayoutEffect: I,
      useInsertionEffect: I,
      useMemo: I,
      useReducer: I,
      useRef: I,
      useState: I,
      useDebugValue: I,
      useDeferredValue: I,
      useTransition: I,
      useSyncExternalStore: I,
      useId: I,
      useHostTransitionStatus: I,
      useFormState: I,
      useActionState: I,
      useOptimistic: I,
      useMemoCache: I,
      useCacheRefresh: I,
    };
    Vs.useEffectEvent = I;
    var Hs = {
        readContext: la,
        use: Ro,
        useCallback: function (e, t) {
          return ((Fo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: la,
        useEffect: ms,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])), fs(4194308, 4, bs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return fs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          fs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Fo();
          t = t === void 0 ? null : t;
          var r = e();
          if (Co) {
            Ke(!0);
            try {
              e();
            } finally {
              Ke(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Fo();
          if (n !== void 0) {
            var i = n(t);
            if (Co) {
              Ke(!0);
              try {
                n(t);
              } finally {
                Ke(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ps.bind(null, P, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Fo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Xo(e);
          var t = e.queue,
            n = Fs.bind(null, P, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: Ss,
        useDeferredValue: function (e, t) {
          return Ts(Fo(), e, t);
        },
        useTransition: function () {
          var e = Xo(!1);
          return ((e = Es.bind(null, P, e.queue, !0, !1)), (Fo().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, n) {
          var r = P,
            i = Fo();
          if (j) {
            if (n === void 0) throw Error(a(407));
            n = n();
          } else {
            if (((n = t()), K === null)) throw Error(a(349));
            J & 127 || Go(r, t, n);
          }
          i.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (i.queue = o),
            ms(qo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            us(9, { destroy: void 0 }, Ko.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Fo(),
            t = K.identifierPrefix;
          if (j) {
            var n = Ii,
              r = Fi;
            ((n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = wo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = Do++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: As,
        useFormState: as,
        useActionState: as,
        useOptimistic: function (e) {
          var t = Fo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return ((t.queue = n), (t = Ls.bind(null, P, !0, n)), (n.dispatch = t), [e, t]);
        },
        useMemoCache: zo,
        useCacheRefresh: function () {
          return (Fo().memoizedState = Ns.bind(null, P));
        },
        useEffectEvent: function (e) {
          var t = Fo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (G & 2) throw Error(a(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      V = {
        readContext: la,
        use: Ro,
        useCallback: Cs,
        useContext: la,
        useEffect: hs,
        useImperativeHandle: xs,
        useInsertionEffect: vs,
        useLayoutEffect: ys,
        useMemo: ws,
        useReducer: Vo,
        useRef: ds,
        useState: function () {
          return Vo(Bo);
        },
        useDebugValue: Ss,
        useDeferredValue: function (e, t) {
          return z(R(), F.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Vo(Bo)[0],
            t = R().memoizedState;
          return [typeof e == `boolean` ? e : Lo(e), t];
        },
        useSyncExternalStore: Wo,
        useId: js,
        useHostTransitionStatus: As,
        useFormState: os,
        useActionState: os,
        useOptimistic: function (e, t) {
          return Zo(R(), F, e, t);
        },
        useMemoCache: zo,
        useCacheRefresh: Ms,
      };
    V.useEffectEvent = _s;
    var Us = {
      readContext: la,
      use: Ro,
      useCallback: Cs,
      useContext: la,
      useEffect: hs,
      useImperativeHandle: xs,
      useInsertionEffect: vs,
      useLayoutEffect: ys,
      useMemo: ws,
      useReducer: Uo,
      useRef: ds,
      useState: function () {
        return Uo(Bo);
      },
      useDebugValue: Ss,
      useDeferredValue: function (e, t) {
        var n = R();
        return F === null ? Ts(n, e, t) : z(n, F.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Uo(Bo)[0],
          t = R().memoizedState;
        return [typeof e == `boolean` ? e : Lo(e), t];
      },
      useSyncExternalStore: Wo,
      useId: js,
      useHostTransitionStatus: As,
      useFormState: ls,
      useActionState: ls,
      useOptimistic: function (e, t) {
        var n = R();
        return F === null ? ((n.baseState = e), [e, n.queue.dispatch]) : Zo(n, F, e, t);
      },
      useMemoCache: zo,
      useCacheRefresh: Ms,
    };
    Us.useEffectEvent = _s;
    function Ws(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Gs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Za(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Qa(e, i, r)),
          t !== null && (hu(t, e, r), $a(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Za(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Qa(e, i, r)),
          t !== null && (hu(t, e, r), $a(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pu(),
          r = Za(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Qa(e, r, n)),
          t !== null && (hu(t, e, n), $a(t, e, n)));
      },
    };
    function Ks(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Mr(n, r) || !Mr(i, a)
            : !0
      );
    }
    function qs(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Gs.enqueueReplaceState(t, t.state, null));
    }
    function Js(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e)) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Ys(e) {
      ai(e);
    }
    function Xs(e) {
      console.error(e);
    }
    function Zs(e) {
      ai(e);
    }
    function Qs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function $s(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ec(e, t, n) {
      return (
        (n = Za(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Qs(e, t);
        }),
        n
      );
    }
    function tc(e) {
      return ((e = Za(e)), (e.tag = 3), e);
    }
    function nc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            $s(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          ($s(t, n, r),
            typeof i != `function` && (ru === null ? (ru = new Set([this])) : ru.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function rc(e, t, n, r, i) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && oa(t, n, i, !0), (n = uo.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                fo === null ? Du() : n.alternate === null && X === 0 && (X = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = i),
                r === Na
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, i)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Na
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, i)),
                !1
              );
          }
          throw Error(a(435, n.tag));
        }
        return (Gu(e, r, i), Du(), !1);
      }
      if (j)
        return (
          (t = uo.current),
          t === null
            ? (r !== Gi && ((t = Error(a(423), { cause: r })), Qi(Di(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (i &= -i),
              (e.lanes |= i),
              (r = Di(r, n)),
              (i = ec(e.stateNode, r, i)),
              eo(e, i),
              X !== 4 && (X = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = i),
              r !== Gi && ((e = Error(a(422), { cause: r })), Qi(Di(e, n)))),
          !1
        );
      var o = Error(a(520), { cause: r });
      if (((o = Di(o, n)), Xl === null ? (Xl = [o]) : Xl.push(o), X !== 4 && (X = 2), t === null))
        return !0;
      ((r = Di(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = i & -i),
              (n.lanes |= e),
              (e = ec(n.stateNode, r, e)),
              eo(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (ru === null || !ru.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (i &= -i),
                (n.lanes |= i),
                (i = tc(i)),
                nc(i, e, n, r),
                eo(n, i),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var ic = Error(a(461)),
      H = !1;
    function ac(e, t, n, r) {
      t.child = e === null ? qa(t, null, n, r) : Ka(t, e.child, n, r);
    }
    function oc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ca(t),
        (r = ko(e, t, n, o, a, i)),
        (s = Mo()),
        e !== null && !H
          ? (No(e, t, i), Ac(e, t, i))
          : (j && s && zi(t), (t.flags |= 1), ac(e, t, r, i), t.child)
      );
    }
    function sc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !vi(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), cc(e, t, a, r, i))
          : ((e = xi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !jc(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? Mr : n), n(o, r) && e.ref === t.ref))
          return Ac(e, t, i);
      }
      return ((t.flags |= 1), (e = yi(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function cc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Mr(a, r) && e.ref === t.ref) {
          if (((H = !1), (t.pendingProps = r = a), jc(e, i))) e.flags & 131072 && (H = !0);
          else return ((t.lanes = e.lanes), Ac(e, t, i));
        }
      }
      return gc(e, t, n, r, i);
    }
    function lc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return dc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Oa(t, a === null ? null : a.cachePool),
            a === null ? co() : so(t, a),
            ho(t));
        else return ((r = t.lanes = 536870912), dc(e, t, a === null ? n : a.baseLanes | n, n, r));
      } else
        a === null
          ? (e !== null && Oa(t, null), co(), go(t))
          : (Oa(t, a.cachePool), so(t, a), go(t), (t.memoizedState = null));
      return (ac(e, t, i, n), t.child);
    }
    function uc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function dc(e, t, n, r, i) {
      var a = Da();
      return (
        (a = a === null ? null : { parent: ha._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Oa(t, null),
        co(),
        ho(t),
        e !== null && oa(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function fc(e, t) {
      return (
        (t = Tc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function pc(e, t, n) {
      return (
        Ka(t, e.child, null, n),
        (e = fc(t, t.pendingProps)),
        (e.flags |= 2),
        _o(t),
        (t.memoizedState = null),
        e
      );
    }
    function mc(e, t, n) {
      var r = t.pendingProps,
        i = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (j) {
          if (r.mode === `hidden`) return ((e = fc(t, r)), (t.lanes = 536870912), uc(null, e));
          if (
            (mo(t),
            (e = A)
              ? ((e = rf(e, Wi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Hi = t),
                  (A = null)))
              : (e = null),
            e === null)
          )
            throw Ki(t);
          return ((t.lanes = 536870912), null);
        }
        return fc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((mo(t), i)) {
          if (t.flags & 256) ((t.flags &= -257), (t = pc(e, t, n)));
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(a(558));
        } else if ((H || oa(e, t, n, !1), (i = (n & e.childLanes) !== 0), H || i)) {
          if (((r = K), r !== null && ((s = ut(r, n)), s !== 0 && s !== o.retryLane)))
            throw ((o.retryLane = s), fi(e, s), hu(r, e, s), ic);
          (Du(), (t = pc(e, t, n)));
        } else
          ((e = o.treeContext),
            (A = cf(s.nextSibling)),
            (Hi = t),
            (j = !0),
            (Ui = null),
            (Wi = !1),
            e !== null && Vi(t, e),
            (t = fc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = yi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function hc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(a(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function gc(e, t, n, r, i) {
      return (
        ca(t),
        (n = ko(e, t, n, r, void 0, i)),
        (r = Mo()),
        e !== null && !H
          ? (No(e, t, i), Ac(e, t, i))
          : (j && r && zi(t), (t.flags |= 1), ac(e, t, n, i), t.child)
      );
    }
    function _c(e, t, n, r, i, a) {
      return (
        ca(t),
        (t.updateQueue = null),
        (n = jo(t, r, n, i)),
        Ao(e),
        (r = Mo()),
        e !== null && !H
          ? (No(e, t, a), Ac(e, t, a))
          : (j && r && zi(t), (t.flags |= 1), ac(e, t, n, a), t.child)
      );
    }
    function vc(e, t, n, r, i) {
      if ((ca(t), t.stateNode === null)) {
        var a = hi,
          o = n.contextType;
        (typeof o == `object` && o && (a = la(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Gs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ya(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? la(o) : hi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Ws(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Gs.enqueueReplaceState(a, a.state, null),
            no(t, r, a, i),
            to(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Js(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = hi), typeof u == `object` && u && (o = la(u)));
        var d = n.getDerivedStateFromProps;
        ((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && qs(t, a, r, o)),
          (Ja = !1));
        var f = t.memoizedState;
        ((a.state = f),
          no(t, r, a, i),
          to(),
          (l = t.memoizedState),
          s || f !== l || Ja
            ? (typeof d == `function` && (Ws(t, n, d, r), (l = t.memoizedState)),
              (c = Ja || Ks(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` && (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), (r = !1)));
      } else {
        ((a = t.stateNode),
          Xa(e, t),
          (o = t.memoizedProps),
          (u = Js(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = hi),
          typeof l == `object` && l && (c = la(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && qs(t, a, r, c)),
          (Ja = !1),
          (f = t.memoizedState),
          (a.state = f),
          no(t, r, a, i),
          to());
        var p = t.memoizedState;
        o !== d || f !== p || Ja || (e !== null && e.dependencies !== null && sa(e.dependencies))
          ? (typeof s == `function` && (Ws(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ja ||
              Ks(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && sa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        hc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ka(t, e.child, null, i)), (t.child = Ka(t, null, n, i)))
              : ac(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Ac(e, t, i)),
        e
      );
    }
    function yc(e, t, n, r) {
      return (Xi(), (t.flags |= 256), ac(e, t, n, r), t.child);
    }
    var bc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function xc(e) {
      return { baseLanes: e, cachePool: ka() };
    }
    function Sc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Jl), e);
    }
    function Cc(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(N.current & 2)),
        s && ((i = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (j) {
          if (
            (i ? po(t) : go(t),
            (e = A)
              ? ((e = rf(e, Wi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Hi = t),
                  (A = null)))
              : (e = null),
            e === null)
          )
            throw Ki(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          i
            ? (go(t),
              (i = t.mode),
              (c = Tc({ mode: `hidden`, children: c }, i)),
              (r = Si(r, i, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = xc(n)),
              (r.childLanes = Sc(e, s, n)),
              (t.memoizedState = bc),
              uc(null, r))
            : (po(t), wc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (po(t), (t.flags &= -257), (t = Ec(e, t, n)))
            : t.memoizedState === null
              ? (go(t),
                (c = r.fallback),
                (i = t.mode),
                (r = Tc({ mode: `visible`, children: r.children }, i)),
                (c = Si(c, i, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ka(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = xc(n)),
                (r.childLanes = Sc(e, s, n)),
                (t.memoizedState = bc),
                (t = uc(null, r)))
              : (go(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((po(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(a(419))),
            (r.stack = ``),
            (r.digest = s),
            Qi({ value: r, source: null, stack: null }),
            (t = Ec(e, t, n)));
        } else if ((H || oa(e, t, n, !1), (s = (n & e.childLanes) !== 0), H || s)) {
          if (((s = K), s !== null && ((r = ut(s, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), fi(e, r), hu(s, e, r), ic);
          (af(c) || Du(), (t = Ec(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (A = cf(c.nextSibling)),
              (Hi = t),
              (j = !0),
              (Ui = null),
              (Wi = !1),
              e !== null && Vi(t, e),
              (t = wc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return i
        ? (go(t),
          (c = r.fallback),
          (i = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = yi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = Si(c, i, n, null)), (c.flags |= 2)) : (c = yi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          uc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = xc(n))
            : ((i = c.cachePool),
              i === null
                ? (i = ka())
                : ((l = ha._currentValue), (i = i.parent === l ? i : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: i })),
          (r.memoizedState = c),
          (r.childLanes = Sc(e, s, n)),
          (t.memoizedState = bc),
          uc(e.child, r))
        : (po(t),
          (n = e.child),
          (e = n.sibling),
          (n = yi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function wc(e, t) {
      return ((t = Tc({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function Tc(e, t) {
      return ((e = _i(22, e, null, t)), (e.lanes = 0), e);
    }
    function Ec(e, t, n) {
      return (
        Ka(t, e.child, null, n),
        (e = wc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Dc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ia(e.return, t, n));
    }
    function Oc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function kc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = N.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        D(N, o),
        ac(e, t, r, n),
        (r = j ? ji : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Dc(e, n, t);
          else if (e.tag === 19) Dc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate), e !== null && vo(e) === null && (i = n), (n = n.sibling));
          ((n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Oc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && vo(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Oc(t, !0, n, null, a, r);
          break;
        case `together`:
          Oc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ac(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (Gl |= t.lanes), (n & t.childLanes) === 0)
      ) {
        if (e !== null) {
          if ((oa(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(a(153));
      if (t.child !== null) {
        for (e = t.child, n = yi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
          ((e = e.sibling), (n = n.sibling = yi(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function jc(e, t) {
      return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && sa(e)));
    }
    function Mc(e, t, n) {
      switch (t.tag) {
        case 3:
          (ye(t, t.stateNode.containerInfo), na(t, ha, e.memoizedState.cache), Xi());
          break;
        case 27:
        case 5:
          xe(t);
          break;
        case 4:
          ye(t, t.stateNode.containerInfo);
          break;
        case 10:
          na(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), mo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (po(t), (e = Ac(e, t, n)), e === null ? null : e.sibling)
                : Cc(e, t, n)
              : (po(t), (t.flags |= 128), null);
          po(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0), (r ||= (oa(e, t, n, !1), (n & t.childLanes) !== 0)), i)
          ) {
            if (r) return kc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            D(N, N.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), lc(e, t, n, t.pendingProps));
        case 24:
          na(t, ha, e.memoizedState.cache);
      }
      return Ac(e, t, n);
    }
    function Nc(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) H = !0;
        else {
          if (!jc(e, n) && !(t.flags & 128)) return ((H = !1), Mc(e, t, n));
          H = !!(e.flags & 131072);
        }
      } else ((H = !1), j && t.flags & 1048576 && Ri(t, ji, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Ia(t.elementType)), (t.type = e), typeof e == `function`))
              vi(e)
                ? ((r = Js(e, r)), (t.tag = 1), (t = vc(null, t, e, r, n)))
                : ((t.tag = 0), (t = gc(null, t, e, r, n)));
            else {
              if (e != null) {
                var i = e.$$typeof;
                if (i === ee) {
                  ((t.tag = 11), (t = oc(null, t, e, r, n)));
                  break a;
                }
                if (i === re) {
                  ((t.tag = 14), (t = sc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = ue(e) || e), Error(a(306, t, ``)));
            }
          }
          return t;
        case 0:
          return gc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (i = Js(r, t.pendingProps)), vc(e, t, r, i, n));
        case 3:
          a: {
            if ((ye(t, t.stateNode.containerInfo), e === null)) throw Error(a(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((i = o.element), Xa(e, t), no(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              na(t, ha, r),
              r !== o.cache && aa(t, [ha], n, !0),
              to(),
              (r = s.element),
              o.isDehydrated)
            ) {
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = yc(e, t, r, n);
                break a;
              }
              if (r !== i) {
                ((i = Di(Error(a(424)), t)), Qi(i), (t = yc(e, t, r, n)));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (
                A = cf(e.firstChild),
                  Hi = t,
                  j = !0,
                  Ui = null,
                  Wi = !0,
                  n = qa(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            } else {
              if ((Xi(), r === i)) {
                t = Ac(e, t, n);
                break a;
              }
              ac(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            hc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : j ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(_e.current).createElement(n)),
                  (r[gt] = t),
                  (r[_t] = e),
                  Pd(r, n, e),
                  kt(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            xe(t),
            e === null &&
              j &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, _e.current)),
              (Hi = t),
              (Wi = !0),
              (i = A),
              Zd(t.type) ? ((lf = i), (A = cf(r.firstChild))) : (A = i)),
            ac(e, t, t.pendingProps.children, n),
            hc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              j &&
              ((i = r = A) &&
                ((r = tf(r, t.type, t.pendingProps, Wi)),
                r === null
                  ? (i = !1)
                  : ((t.stateNode = r), (Hi = t), (A = cf(r.firstChild)), (Wi = !1), (i = !0))),
              i || Ki(t)),
            xe(t),
            (i = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(i, o) ? (r = null) : s !== null && Ud(i, s) && (t.flags |= 32),
            t.memoizedState !== null && ((i = ko(e, t, L, null, null, n)), (Qf._currentValue = i)),
            hc(e, t),
            ac(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              j &&
              ((e = n = A) &&
                ((n = nf(n, t.pendingProps, Wi)),
                n === null ? (e = !1) : ((t.stateNode = n), (Hi = t), (A = null), (e = !0))),
              e || Ki(t)),
            null
          );
        case 13:
          return Cc(e, t, n);
        case 4:
          return (
            ye(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ka(t, null, r, n)) : ac(e, t, r, n),
            t.child
          );
        case 11:
          return oc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (ac(e, t, t.pendingProps, n), t.child);
        case 8:
          return (ac(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (ac(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return ((r = t.pendingProps), na(t, t.type, r.value), ac(e, t, r.children, n), t.child);
        case 9:
          return (
            (i = t.type._context),
            (r = t.pendingProps.children),
            ca(t),
            (i = la(i)),
            (r = r(i)),
            (t.flags |= 1),
            ac(e, t, r, n),
            t.child
          );
        case 14:
          return sc(e, t, t.type, t.pendingProps, n);
        case 15:
          return cc(e, t, t.type, t.pendingProps, n);
        case 19:
          return kc(e, t, n);
        case 31:
          return mc(e, t, n);
        case 22:
          return lc(e, t, n, t.pendingProps);
        case 24:
          return (
            ca(t),
            (r = la(ha)),
            e === null
              ? ((i = Da()),
                i === null &&
                  ((i = K),
                  (o = ga()),
                  (i.pooledCache = o),
                  o.refCount++,
                  o !== null && (i.pooledCacheLanes |= n),
                  (i = o)),
                (t.memoizedState = { parent: r, cache: i }),
                Ya(t),
                na(t, ha, i))
              : ((e.lanes & n) !== 0 && (Xa(e, t), no(t, null, null, n), to()),
                (i = e.memoizedState),
                (o = t.memoizedState),
                i.parent === r
                  ? ((r = o.cache), na(t, ha, r), r !== i.cache && aa(t, [ha], n, !0))
                  : ((i = { parent: r, cache: r }),
                    (t.memoizedState = i),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                    na(t, ha, r))),
            ac(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(a(156, t.tag));
    }
    function Pc(e) {
      e.flags |= 4;
    }
    function Fc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((La = Na), ja);
        }
      } else e.flags &= -16777217;
    }
    function Ic(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t))) {
        if (wu()) e.flags |= 8192;
        else throw ((La = Na), ja);
      }
    }
    function Lc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : it()), (e.lanes |= t), (Yl |= t)));
    }
    function Rc(e, t) {
      if (!j)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;) (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;) (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function U(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function zc(e, t, n) {
      var r = t.pendingProps;
      switch ((Bi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (U(t), null);
        case 1:
          return (U(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ra(ha),
            be(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Yi(t)
                ? Pc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Zi())),
            U(t),
            null
          );
        case 26:
          var i = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Pc(t), o === null ? (U(t), Fc(t, i, null, r, n)) : (U(t), Ic(t, o)))
              : o
                ? o === e.memoizedState
                  ? (U(t), (t.flags &= -16777217))
                  : (Pc(t), U(t), Ic(t, o))
                : ((e = e.memoizedProps), e !== r && Pc(t), U(t), Fc(t, i, e, r, n)),
            null
          );
        case 27:
          if ((Se(t), (n = _e.current), (i = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(a(166));
              return (U(t), null);
            }
            ((e = O.current), Yi(t) ? qi(t, e) : ((e = ff(i, r, n)), (t.stateNode = e), Pc(t)));
          }
          return (U(t), null);
        case 5:
          if ((Se(t), (i = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(a(166));
              return (U(t), null);
            }
            if (((o = O.current), Yi(t))) qi(t, o);
            else {
              var s = Bd(_e.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                  break;
                case 2:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                  break;
                default:
                  switch (i) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                      break;
                    case `math`:
                      o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(i, { is: r.is })
                          : s.createElement(i);
                  }
              }
              ((o[gt] = t), (o[_t] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Pd(o, i, r), i)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Pc(t);
            }
          }
          return (
            U(t),
            Fc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Pc(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(a(166));
            if (((e = _e.current), Yi(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (i = Hi), i !== null))
                switch (i.tag) {
                  case 27:
                  case 5:
                    r = i.memoizedProps;
                }
              ((e[gt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Ki(t, !0));
            } else ((e = Bd(e).createTextNode(r)), (e[gt] = t), (t.stateNode = e));
          }
          return (U(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Yi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(a(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
                  throw Error(a(557));
                e[gt] = t;
              } else (Xi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (U(t), (e = !1));
            } else
              ((n = Zi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (_o(t), t) : (_o(t), null);
            if (t.flags & 128) throw Error(a(558));
          }
          return (U(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((i = Yi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!i) throw Error(a(318));
                if (((i = t.memoizedState), (i = i === null ? null : i.dehydrated), !i))
                  throw Error(a(317));
                i[gt] = t;
              } else (Xi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (U(t), (i = !1));
            } else
              ((i = Zi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
                (i = !0));
            if (!i) return t.flags & 256 ? (_o(t), t) : (_o(t), null);
          }
          return (
            _o(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (i = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (i = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== i && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Lc(t, t.updateQueue),
                U(t),
                null)
          );
        case 4:
          return (be(), e === null && Sd(t.stateNode.containerInfo), U(t), null);
        case 10:
          return (ra(t.type), U(t), null);
        case 19:
          if ((E(N), (r = t.memoizedState), r === null)) return (U(t), null);
          if (((i = !!(t.flags & 128)), (o = r.rendering), o === null)) {
            if (i) Rc(r, !1);
            else {
              if (X !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = vo(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Rc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Lc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (bi(n, e), (n = n.sibling));
                    return (D(N, (N.current & 1) | 2), j && Li(t, r.treeForkCount), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Fe() > tu &&
                ((t.flags |= 128), (i = !0), Rc(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!i) {
              if (((e = vo(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Lc(t, e),
                  Rc(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !o.alternate && !j)
                )
                  return (U(t), null);
              } else
                2 * Fe() - r.renderingStartTime > tu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (i = !0), Rc(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last), e === null ? (t.child = o) : (e.sibling = o), (r.last = o));
          }
          return r.tail === null
            ? (U(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Fe()),
              (e.sibling = null),
              (n = N.current),
              D(N, i ? (n & 1) | 2 : n & 1),
              j && Li(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            _o(t),
            lo(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 && !(t.flags & 128) && (U(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : U(t),
            (n = t.updateQueue),
            n !== null && Lc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && E(Ea),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ra(ha),
            U(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(a(156, t.tag));
    }
    function Bc(e, t) {
      switch ((Bi(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
          return (
            ra(ha),
            be(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (Se(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((_o(t), t.alternate === null)) throw Error(a(340));
            Xi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 13:
          if ((_o(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(a(340));
            Xi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (E(N), null);
        case 4:
          return (be(), null);
        case 10:
          return (ra(t.type), null);
        case 22:
        case 23:
          return (
            _o(t),
            lo(),
            e !== null && E(Ea),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (ra(ha), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Vc(e, t) {
      switch ((Bi(t), t.tag)) {
        case 3:
          (ra(ha), be());
          break;
        case 26:
        case 27:
        case 5:
          Se(t);
          break;
        case 4:
          be();
          break;
        case 31:
          t.memoizedState !== null && _o(t);
          break;
        case 13:
          _o(t);
          break;
        case 19:
          E(N);
          break;
        case 10:
          ra(t.type);
          break;
        case 22:
        case 23:
          (_o(t), lo(), e !== null && E(Ea));
          break;
        case 24:
          ra(ha);
      }
    }
    function Hc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Uc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Wc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          io(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Gc(e, t, n) {
      ((n.props = Js(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Kc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function qc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
      }
    }
    function Jc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Yc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[_t] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Xc(e) {
      return (
        e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Zd(e.type)) || e.tag === 4
      );
    }
    function Zc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Xc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if ((e.tag === 27 && Zd(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = un)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for (Qc(e, t, n), e = e.sibling; e !== null;) (Qc(e, t, n), (e = e.sibling));
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for ($c(e, t, n), e = e.sibling; e !== null;) ($c(e, t, n), (e = e.sibling));
    }
    function el(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[gt] = e), (t[_t] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var tl = !1,
      nl = !1,
      rl = !1,
      il = typeof WeakSet == `function` ? WeakSet : Set,
      al = null;
    function ol(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Ir(e)), Lr(e))) {
        if (`selectionStart` in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var i = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (i !== 0 && f.nodeType !== 3) || (c = s + i),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === i && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (zd = { focusedElem: e, selectionRange: n }, sp = !1, al = t; al !== null;)
        if (((t = al), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (al = e));
        else
          for (; al !== null;) {
            switch (((t = al), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (e & 4 && ((e = t.updateQueue), (e = e === null ? null : e.events), e !== null))
                  for (n = 0; n < e.length; n++) ((i = e[n]), (i.ref.impl = i.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (i = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Js(n.type, i);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(a(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (al = e));
              break;
            }
            al = t.return;
          }
    }
    function sl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (xl(e, n), r & 4 && Hc(5, n));
          break;
        case 1:
          if ((xl(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Js(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          }
          (r & 64 && Wc(n), r & 512 && Kc(n, n.return));
          break;
        case 3:
          if ((xl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              io(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && el(n);
        case 26:
        case 5:
          (xl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return));
          break;
        case 12:
          xl(e, n);
          break;
        case 31:
          (xl(e, n), r & 4 && fl(e, n));
          break;
        case 13:
          (xl(e, n),
            r & 4 && pl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated), e !== null && ((n = Ju.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || tl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || nl), (i = tl));
            var a = nl;
            ((tl = r),
              (nl = t) && !a ? Cl(e, n, !!(n.subtreeFlags & 8772)) : xl(e, n),
              (tl = i),
              (nl = a));
          }
          break;
        case 30:
          break;
        default:
          xl(e, n);
      }
    }
    function cl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), cl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && wt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var W = null,
      ll = !1;
    function ul(e, t, n) {
      for (n = n.child; n !== null;) (dl(e, t, n), (n = n.sibling));
    }
    function dl(e, t, n) {
      if (Ge && typeof Ge.onCommitFiberUnmount == `function`)
        try {
          Ge.onCommitFiberUnmount(We, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (nl || qc(n, t),
            ul(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          nl || qc(n, t);
          var r = W,
            i = ll;
          (Zd(n.type) && ((W = n.stateNode), (ll = !1)),
            ul(e, t, n),
            pf(n.stateNode),
            (W = r),
            (ll = i));
          break;
        case 5:
          nl || qc(n, t);
        case 6:
          if (((r = W), (i = ll), (W = null), ul(e, t, n), (W = r), (ll = i), W !== null)) {
            if (ll)
              try {
                (W.nodeType === 9
                  ? W.body
                  : W.nodeName === `HTML`
                    ? W.ownerDocument.body
                    : W
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                W.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          }
          break;
        case 18:
          W !== null &&
            (ll
              ? ((e = W),
                Qd(
                  e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(W, n.stateNode));
          break;
        case 4:
          ((r = W),
            (i = ll),
            (W = n.stateNode.containerInfo),
            (ll = !0),
            ul(e, t, n),
            (W = r),
            (ll = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Uc(2, n, t), nl || Uc(4, n, t), ul(e, t, n));
          break;
        case 1:
          (nl ||
            (qc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Gc(n, t, r)),
            ul(e, t, n));
          break;
        case 21:
          ul(e, t, n);
          break;
        case 22:
          ((nl = (r = nl) || n.memoizedState !== null), ul(e, t, n), (nl = r));
          break;
        default:
          ul(e, t, n);
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function pl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function ml(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new il()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new il()),
            t
          );
        default:
          throw Error(a(435, e.tag));
      }
    }
    function hl(e, t) {
      var n = ml(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function gl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((W = c.stateNode), (ll = !1));
                  break a;
                }
                break;
              case 5:
                ((W = c.stateNode), (ll = !1));
                break a;
              case 3:
              case 4:
                ((W = c.stateNode.containerInfo), (ll = !0));
                break a;
            }
            c = c.return;
          }
          if (W === null) throw Error(a(160));
          (dl(o, s, i),
            (W = null),
            (ll = !1),
            (o = i.alternate),
            o !== null && (o.return = null),
            (i.return = null));
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (vl(t, e), (t = t.sibling));
    }
    var _l = null;
    function vl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (gl(t, e), yl(e), r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return)));
          break;
        case 1:
          (gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            r & 64 &&
              tl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var i = _l;
          if ((gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 4)) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null)) {
              if (r === null) {
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i));
                    b: switch (r) {
                      case `title`:
                        ((o = i.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[Ct] ||
                            o[gt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = i.createElement(r)),
                            i.head.insertBefore(o, i.querySelector(`head > title`))),
                          Pd(o, r, n),
                          (o[gt] = e),
                          kt(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, i).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === `` ? null : n.href) &&
                                o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null ? null : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = i.createElement(r)), Pd(o, r, n), i.head.appendChild(o));
                        break;
                      case `meta`:
                        if ((s = Vf(`meta`, `content`, i).get(r + (n.content || ``)))) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = i.createElement(r)), Pd(o, r, n), i.head.appendChild(o));
                        break;
                      default:
                        throw Error(a(468, r));
                    }
                    ((o[gt] = e), kt(o), (r = o));
                  }
                  e.stateNode = r;
                } else Hf(i, e.type, e.stateNode);
              } else e.stateNode = If(i, r, e.memoizedProps);
            } else
              o === r
                ? r === null && e.stateNode !== null && Yc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null ? Hf(i, e.type, e.stateNode) : If(i, r, e.memoizedProps));
          }
          break;
        case 27:
          (gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if ((gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), e.flags & 32)) {
            i = e.stateNode;
            try {
              tn(i, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((i = e.memoizedProps), Yc(e, i, n === null ? i : n.memoizedProps)),
            r & 1024 && (rl = !0));
          break;
        case 6:
          if ((gl(t, e), yl(e), r & 4)) {
            if (e.stateNode === null) throw Error(a(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (i = _l),
            (_l = gf(t.containerInfo)),
            gl(t, e),
            (_l = i),
            yl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          rl && ((rl = !1), bl(e));
          break;
        case 4:
          ((r = _l), (_l = gf(e.stateNode.containerInfo)), gl(t, e), yl(e), (_l = r));
          break;
        case 12:
          (gl(t, e), yl(e));
          break;
        case 31:
          (gl(t, e),
            yl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 13:
          (gl(t, e),
            yl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              ($l = Fe()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 22:
          i = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = tl,
            d = nl;
          if (((tl = u || i), (nl = d || l), gl(t, e), (nl = d), (tl = u), yl(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                i && (n === null || l || tl || nl || Sl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), i))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                      c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = i ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    i ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((n = r.retryQueue), n !== null && ((r.retryQueue = null), hl(e, n))));
          break;
        case 19:
          (gl(t, e),
            yl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (gl(t, e), yl(e));
      }
    }
    function yl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Xc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(a(160));
          switch (n.tag) {
            case 27:
              var i = n.stateNode;
              $c(e, Zc(e), i);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (tn(o, ``), (n.flags &= -33)), $c(e, Zc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Qc(e, Zc(e), s);
              break;
            default:
              throw Error(a(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function bl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (bl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
        }
    }
    function xl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (sl(e, t.alternate, t), (t = t.sibling));
    }
    function Sl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Uc(4, t, t.return), Sl(t));
            break;
          case 1:
            qc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Gc(t, t.return, n), Sl(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (qc(t, t.return), Sl(t));
            break;
          case 22:
            t.memoizedState === null && Sl(t);
            break;
          case 30:
            Sl(t);
            break;
          default:
            Sl(t);
        }
        e = e.sibling;
      }
    }
    function Cl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Cl(i, a, n), Hc(4, a));
            break;
          case 1:
            if ((Cl(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) ro(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Wc(a), Kc(a, a.return));
            break;
          case 27:
            el(a);
          case 26:
          case 5:
            (Cl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return));
            break;
          case 12:
            Cl(i, a, n);
            break;
          case 31:
            (Cl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 13:
            (Cl(i, a, n), n && o & 4 && pl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Cl(i, a, n), Kc(a, a.return));
            break;
          case 30:
            break;
          default:
            Cl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function wl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && _a(n)));
    }
    function Tl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && _a(e)));
    }
    function El(e, t, n, r) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (Dl(e, t, n, r), (t = t.sibling));
    }
    function Dl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (El(e, t, n, r), i & 2048 && Hc(9, t));
          break;
        case 1:
          El(e, t, n, r);
          break;
        case 3:
          (El(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && _a(e))));
          break;
        case 12:
          if (i & 2048) {
            (El(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
            } catch (e) {
              Z(t, t.return, e);
            }
          } else El(e, t, n, r);
          break;
        case 31:
          El(e, t, n, r);
          break;
        case 13:
          El(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? El(e, t, n, r)
                : ((a._visibility |= 2), Ol(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
                ? El(e, t, n, r)
                : kl(e, t),
            i & 2048 && wl(o, t));
          break;
        case 24:
          (El(e, t, n, r), i & 2048 && Tl(t.alternate, t));
          break;
        default:
          El(e, t, n, r);
      }
    }
    function Ol(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Ol(a, o, s, c, i), Hc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Ol(a, o, s, c, i))
              : u._visibility & 2
                ? Ol(a, o, s, c, i)
                : kl(a, o),
              i && l & 2048 && wl(o.alternate, o));
            break;
          case 24:
            (Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o));
            break;
          default:
            Ol(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function kl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (kl(n, r), i & 2048 && wl(r.alternate, r));
              break;
            case 24:
              (kl(n, r), i & 2048 && Tl(r.alternate, r));
              break;
            default:
              kl(n, r);
          }
          t = t.sibling;
        }
    }
    var Al = 8192;
    function jl(e, t, n) {
      if (e.subtreeFlags & Al) for (e = e.child; e !== null;) (Ml(e, t, n), (e = e.sibling));
    }
    function Ml(e, t, n) {
      switch (e.tag) {
        case 26:
          (jl(e, t, n),
            e.flags & Al &&
              e.memoizedState !== null &&
              Gf(n, _l, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          jl(e, t, n);
          break;
        case 3:
        case 4:
          var r = _l;
          ((_l = gf(e.stateNode.containerInfo)), jl(e, t, n), (_l = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Al), (Al = 16777216), jl(e, t, n), (Al = r))
              : jl(e, t, n));
          break;
        default:
          jl(e, t, n);
      }
    }
    function Nl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Pl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Ll(r, e));
          }
        Nl(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Fl(e), (e = e.sibling));
    }
    function Fl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Pl(e), e.flags & 2048 && Uc(9, e, e.return));
          break;
        case 3:
          Pl(e);
          break;
        case 12:
          Pl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Il(e))
            : Pl(e);
          break;
        default:
          Pl(e);
      }
    }
    function Il(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Ll(r, e));
          }
        Nl(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Uc(8, t, t.return), Il(t));
            break;
          case 22:
            ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Il(t)));
            break;
          default:
            Il(t);
        }
        e = e.sibling;
      }
    }
    function Ll(e, t) {
      for (; al !== null;) {
        var n = al;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Uc(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            _a(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (al = r));
        else
          a: for (n = e; al !== null;) {
            r = al;
            var i = r.sibling,
              a = r.return;
            if ((cl(r), r === n)) {
              al = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (al = i));
              break a;
            }
            al = a;
          }
      }
    }
    var Rl = {
        getCacheForType: function (e) {
          var t = la(ha),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return la(ha).controller.signal;
        },
      },
      zl = typeof WeakMap == `function` ? WeakMap : Map,
      G = 0,
      K = null,
      q = null,
      J = 0,
      Y = 0,
      Bl = null,
      Vl = !1,
      Hl = !1,
      Ul = !1,
      Wl = 0,
      X = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = null,
      Zl = null,
      Ql = !1,
      $l = 0,
      eu = 0,
      tu = 1 / 0,
      nu = null,
      ru = null,
      iu = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null;
    function pu() {
      return G & 2 && J !== 0 ? J & -J : w.T === null ? pt() : dd();
    }
    function mu() {
      if (Jl === 0) {
        if (!(J & 536870912) || j) {
          var e = Qe;
          ((Qe <<= 1), !(Qe & 3932160) && (Qe = 262144), (Jl = e));
        } else Jl = 536870912;
      }
      return ((e = uo.current), e !== null && (e.flags |= 32), Jl);
    }
    function hu(e, t, n) {
      (((e === K && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, J, Jl, !1)),
        ot(e, n),
        (!(G & 2) || e !== K) &&
          (e === K && (!(G & 2) && (Kl |= n), X === 4 && yu(e, J, Jl, !1)), rd(e)));
    }
    function gu(e, t, n) {
      if (G & 6) throw Error(a(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || nt(e, t),
        i = r ? Au(e, t) : Ou(e, t, !0),
        o = r;
      do {
        if (i === 0) {
          Hl && !r && yu(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !vu(n))) {
          ((i = Ou(e, t, !1)), (o = !1));
          continue;
        }
        if (i === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
          else
            ((s = e.pendingLanes & -536870913),
              (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              i = Xl;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)) {
                if (Ul && !l) {
                  ((c.errorRecoveryDisabledLanes |= o), (Kl |= o), (i = 4));
                  break a;
                }
                ((o = Zl), (Zl = i), o !== null && (Zl === null ? (Zl = o) : Zl.push.apply(Zl, o)));
              }
              i = s;
            }
            if (((o = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (Su(e, 0), yu(e, t, 0, !0));
          break;
        }
        a: {
          switch (((r = e), (o = i), o)) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              yu(r, t, Jl, !Vl);
              break a;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((t & 62914560) === t && ((i = $l + 300 - Fe()), 10 < i)) {
            if ((yu(r, t, Jl, !Vl), tt(r, 0, !0) !== 0)) break a;
            ((su = t),
              (r.timeoutHandle = Kd(
                _u.bind(null, r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, o, `Throttled`, -0, 0),
                i,
              )));
            break a;
          }
          _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, o, null, -0, 0);
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (((e.timeoutHandle = -1), (d = t.subtreeFlags), d & 8192 || (d & 16785408) == 16785408)) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: un,
        }),
          Ml(t, a, d));
        var m = (a & 62914560) === a ? $l - Fe() : (a & 4194048) === a ? eu - Fe() : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((su = a),
            (e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p))),
            yu(e, a, o, !l));
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!jr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      ((t &= ~ql),
        (t &= ~Kl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - qe(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && ct(e, n, t);
    }
    function bu() {
      return G & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (q !== null) {
        if (Y === 0) var e = q.return;
        else ((e = q), (ta = ea = null), Po(e), (Ba = null), (Va = 0), (e = q));
        for (; e !== null;) (Vc(e.alternate, e), (e = e.return));
        q = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (K = e),
        (q = n = yi(e.current, null)),
        (J = t),
        (Y = 0),
        (Bl = null),
        (Vl = !1),
        (Hl = nt(e, t)),
        (Ul = !1),
        (Yl = Jl = ql = Kl = Gl = X = 0),
        (Zl = Xl = null),
        (Ql = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - qe(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Wl = t), li(), n);
    }
    function Cu(e, t) {
      ((P = null),
        (w.H = Vs),
        t === Aa || t === Ma
          ? ((t = Ra()), (Y = 3))
          : t === ja
            ? ((t = Ra()), (Y = 4))
            : (Y = t === ic ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (Bl = t),
        q === null && ((X = 1), Qs(e, Di(t, e.current))));
    }
    function wu() {
      var e = uo.current;
      return e === null
        ? !0
        : (J & 4194048) === J
          ? fo === null
          : (J & 62914560) === J || J & 536870912
            ? e === fo
            : !1;
    }
    function Tu() {
      var e = w.H;
      return ((w.H = Vs), e === null ? Vs : e);
    }
    function Eu() {
      var e = w.A;
      return ((w.A = Rl), e);
    }
    function Du() {
      ((X = 4),
        Vl || ((J & 4194048) !== J && uo.current !== null) || (Hl = !0),
        (!(Gl & 134217727) && !(Kl & 134217727)) || K === null || yu(K, J, Jl, !1));
    }
    function Ou(e, t, n) {
      var r = G;
      G |= 2;
      var i = Tu(),
        a = Eu();
      ((K !== e || J !== t) && ((nu = null), Su(e, t)), (t = !1));
      var o = X;
      a: do
        try {
          if (Y !== 0 && q !== null) {
            var s = q,
              c = Bl;
            switch (Y) {
              case 8:
                (xu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                uo.current === null && (t = !0);
                var l = Y;
                if (((Y = 0), (Bl = null), Pu(e, s, c, l), n && Hl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = Y), (Y = 0), (Bl = null), Pu(e, s, c, l));
            }
          }
          (ku(), (o = X));
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (ta = ea = null),
        (G = r),
        (w.H = i),
        (w.A = a),
        q === null && ((K = null), (J = 0), li()),
        o
      );
    }
    function ku() {
      for (; q !== null;) Mu(q);
    }
    function Au(e, t) {
      var n = G;
      G |= 2;
      var r = Tu(),
        i = Eu();
      K !== e || J !== t ? ((nu = null), (tu = Fe() + 500), Su(e, t)) : (Hl = nt(e, t));
      a: do
        try {
          if (Y !== 0 && q !== null) {
            t = q;
            var o = Bl;
            b: switch (Y) {
              case 1:
                ((Y = 0), (Bl = null), Pu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (Pa(o)) {
                  ((Y = 0), (Bl = null), Nu(t));
                  break;
                }
                ((t = function () {
                  ((Y !== 2 && Y !== 9) || K !== e || (Y = 7), rd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                Y = 7;
                break a;
              case 4:
                Y = 5;
                break a;
              case 7:
                Pa(o) ? ((Y = 0), (Bl = null), Nu(t)) : ((Y = 0), (Bl = null), Pu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (q.tag) {
                  case 26:
                    s = q.memoizedState;
                  case 5:
                  case 27:
                    var c = q;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ((Y = 0), (Bl = null));
                      var l = c.sibling;
                      if (l !== null) q = l;
                      else {
                        var u = c.return;
                        u === null ? (q = null) : ((q = u), Fu(u));
                      }
                      break b;
                    }
                }
                ((Y = 0), (Bl = null), Pu(e, t, o, 5));
                break;
              case 6:
                ((Y = 0), (Bl = null), Pu(e, t, o, 6));
                break;
              case 8:
                (xu(), (X = 6));
                break a;
              default:
                throw Error(a(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        (ta = ea = null),
        (w.H = r),
        (w.A = i),
        (G = n),
        q === null ? ((K = null), (J = 0), li(), X) : 0
      );
    }
    function ju() {
      for (; q !== null && !Ne();) Mu(q);
    }
    function Mu(e) {
      var t = Nc(e.alternate, e, Wl);
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (q = t));
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = _c(n, t, t.pendingProps, t.type, void 0, J);
          break;
        case 11:
          t = _c(n, t, t.pendingProps, t.type.render, t.ref, J);
          break;
        case 5:
          Po(t);
        default:
          (Vc(n, t), (t = q = bi(t, Wl)), (t = Nc(n, t, Wl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (q = t));
    }
    function Pu(e, t, n, r) {
      ((ta = ea = null), Po(t), (Ba = null), (Va = 0));
      var i = t.return;
      try {
        if (rc(e, i, t, n, J)) {
          ((X = 1), Qs(e, Di(n, e.current)), (q = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((q = i), t);
        ((X = 1), Qs(e, Di(n, e.current)), (q = null));
        return;
      }
      t.flags & 32768
        ? (j || r === 1
            ? (e = !0)
            : Hl || J & 536870912
              ? (e = !1)
              : ((Vl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = uo.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Vl);
          return;
        }
        e = t.return;
        var n = zc(t.alternate, t, Wl);
        if (n !== null) {
          q = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          q = t;
          return;
        }
        q = t = e;
      } while (t !== null);
      X === 0 && (X = 5);
    }
    function Iu(e, t) {
      do {
        var n = Bc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (q = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          q = e;
          return;
        }
        q = e = n;
      } while (e !== null);
      ((X = 6), (q = null));
    }
    function Lu(e, t, n, r, i, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (iu !== 0);
      if (G & 6) throw Error(a(327));
      if (t !== null) {
        if (t === e.current) throw Error(a(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ci),
          st(e, n, o, s, c, l),
          e === K && ((q = K = null), (J = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = o),
          (lu = i),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(ze, function () {
                return (Uu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = w.T), (w.T = null), (i = T.p), (T.p = 2), (s = G), (G |= 4));
          try {
            ol(e, t, n);
          } finally {
            ((G = s), (T.p = i), (w.T = r));
          }
        }
        ((iu = 1), Ru(), zu(), Bu());
      }
    }
    function Ru() {
      if (iu === 1) {
        iu = 0;
        var e = au,
          t = ou,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          ((n = w.T), (w.T = null));
          var r = T.p;
          T.p = 2;
          var i = G;
          G |= 4;
          try {
            vl(t, e);
            var a = zd,
              o = Ir(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (o !== s && s && s.ownerDocument && Fr(s.ownerDocument.documentElement, s)) {
              if (c !== null && Lr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l), (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Pr(s, h),
                      v = Pr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                var b = d[s];
                ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((G = i), (T.p = r), (w.T = n));
          }
        }
        ((e.current = t), (iu = 2));
      }
    }
    function zu() {
      if (iu === 2) {
        iu = 0;
        var e = au,
          t = ou,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = w.T), (w.T = null));
          var r = T.p;
          T.p = 2;
          var i = G;
          G |= 4;
          try {
            sl(e, t.alternate, t);
          } finally {
            ((G = i), (T.p = r), (w.T = n));
          }
        }
        iu = 3;
      }
    }
    function Bu() {
      if (iu === 4 || iu === 3) {
        ((iu = 0), Pe());
        var e = au,
          t = ou,
          n = su,
          r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (iu = 5)
          : ((iu = 0), (ou = au = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ru = null),
          ft(n),
          (t = t.stateNode),
          Ge && typeof Ge.onCommitFiberRoot == `function`)
        )
          try {
            Ge.onCommitFiberRoot(We, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = w.T), (i = T.p), (T.p = 2), (w.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((w.T = t), (T.p = i));
          }
        }
        (su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === fu ? du++ : ((du = 0), (fu = e))) : (du = 0),
          id(0, !1));
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), _a(t)));
    }
    function Hu() {
      return (Ru(), zu(), Bu(), Uu());
    }
    function Uu() {
      if (iu !== 5) return !1;
      var e = au,
        t = cu;
      cu = 0;
      var n = ft(su),
        r = w.T,
        i = T.p;
      try {
        ((T.p = 32 > n ? 32 : n), (w.T = null), (n = lu), (lu = null));
        var o = au,
          s = su;
        if (((iu = 0), (ou = au = null), (su = 0), G & 6)) throw Error(a(331));
        var c = G;
        if (
          ((G |= 4),
          Fl(o.current),
          Dl(o, o.current, s, n),
          (G = c),
          id(0, !1),
          Ge && typeof Ge.onPostCommitFiberRoot == `function`)
        )
          try {
            Ge.onPostCommitFiberRoot(We, o);
          } catch {}
        return !0;
      } finally {
        ((T.p = i), (w.T = r), Vu(e, t));
      }
    }
    function Wu(e, t, n) {
      ((t = Di(n, t)),
        (t = ec(e.stateNode, t, 2)),
        (e = Qa(e, t, 2)),
        e !== null && (ot(e, 2), rd(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (ru === null || !ru.has(r)))
            ) {
              ((e = Di(n, e)),
                (n = tc(2)),
                (r = Qa(t, n, 2)),
                r !== null && (nc(n, r, t, e), ot(r, 2), rd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new zl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || ((Ul = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        K === e &&
          (J & n) === n &&
          (X === 4 || (X === 3 && (J & 62914560) === J && 300 > Fe() - $l)
            ? !(G & 2) && Su(e, 0)
            : (ql |= n),
          Yl === J && (Yl = 0)),
        rd(e));
    }
    function qu(e, t) {
      (t === 0 && (t = it()), (e = fi(e, t)), e !== null && (ot(e, t), rd(e)));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), qu(e, n));
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            i = e.memoizedState;
          i !== null && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(a(314));
      }
      (r !== null && r.delete(t), qu(e, n));
    }
    function Xu(e, t) {
      return je(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      (e !== Qu && e.next === null && (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()));
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null;) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - qe(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                ((a = J),
                  (a = tt(
                    r,
                    r === K ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || nt(r, a) || ((n = !0), ld(r, a)));
            }
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = Fe(), n = null, r = Zu; r !== null;) {
        var i = r.next,
          a = sd(r, t);
        (a === 0
          ? ((r.next = null), n === null ? (Zu = i) : (n.next = i), i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i));
      }
      ((iu !== 0 && iu !== 5) || id(e, !1), nd !== 0 && (nd = 0));
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - qe(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = rt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = K),
        (n = J),
        (n = tt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Me(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || nt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Me(r), ft(n))) {
          case 2:
          case 8:
            n = Re;
            break;
          case 32:
            n = ze;
            break;
          case 268435456:
            n = Ve;
            break;
          default:
            n = ze;
        }
        return (
          (r = cd.bind(null, e)),
          (n = je(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Me(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (iu !== 0 && iu !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = J;
      return (
        (r = tt(e, e === K ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, Fe()),
            e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(function () {
        G & 6 ? je(Le, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = ba;
        (e === 0 && ((e = Ze), (Ze <<= 1), !(Ze & 261888) && (Ze = 256)), (nd = e));
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : ln(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[_t] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[_t] || null) ? fd(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new jn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Os(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Os(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < ri.length; hd++) {
      var gd = ri[hd];
      ii(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    (ii(Yr, `onAnimationEnd`),
      ii(Xr, `onAnimationIteration`),
      ii(Zr, `onAnimationStart`),
      ii(`dblclick`, `onDoubleClick`),
      ii(`focusin`, `onFocus`),
      ii(`focusout`, `onBlur`),
      ii(Qr, `onTransitionRun`),
      ii($r, `onTransitionStart`),
      ii(ei, `onTransitionCancel`),
      ii(ti, `onTransitionEnd`),
      Nt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Nt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Nt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Nt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Mt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(` `),
      ),
      Mt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Mt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Mt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      Mt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Mt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `),
      ));
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d),
      );
    function yd(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped())) break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[yt];
      n === void 0 && (n = t[yt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Cd(n, e, r, t));
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        ((e[xd] = !0),
          At.forEach(function (t) {
            t !== `selectionchange` && (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !bn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i) break;
            if (o === 4)
              for (o = r.return; o !== null;) {
                var c = o.tag;
                if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) return;
                o = o.return;
              }
            for (; s !== null;) {
              if (((o = Tt(s)), o === null)) return;
              if (((c = o.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      _n(function () {
        var r = a,
          i = fn(n),
          o = [];
        a: {
          var s = ni.get(e);
          if (s !== void 0) {
            var c = jn,
              u = e;
            switch (e) {
              case `keypress`:
                if (En(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                c = Yn;
                break;
              case `focusin`:
                ((u = `focus`), (c = Bn));
                break;
              case `focusout`:
                ((u = `blur`), (c = Bn));
                break;
              case `beforeblur`:
              case `afterblur`:
                c = Bn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c = Rn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c = zn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c = Zn;
                break;
              case Yr:
              case Xr:
              case Zr:
                c = Vn;
                break;
              case ti:
                c = Qn;
                break;
              case `scroll`:
              case `scrollend`:
                c = Nn;
                break;
              case `wheel`:
                c = $n;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c = Hn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c = Xn;
                break;
              case `toggle`:
              case `beforetoggle`:
                c = er;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (s === null ? null : s + `Capture`) : s;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = vn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length && ((s = new c(s, u, null, n, i)), o.push({ event: s, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              s && n !== dn && (u = n.relatedTarget || n.fromElement) && (Tt(u) || u[vt]))
            )
              break a;
            if (
              (c || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              c
                ? ((u = n.relatedTarget || n.toElement),
                  (c = r),
                  (u = u ? Tt(u) : null),
                  u !== null &&
                    ((f = l(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((c = null), (u = r)),
              c !== u)
            ) {
              if (
                ((d = Rn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Xn), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = c == null ? s : Dt(c)),
                (h = u == null ? s : Dt(u)),
                (s = new d(g, m + `leave`, c, n, i)),
                (s.target = f),
                (s.relatedTarget = h),
                (g = null),
                Tt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                c && u)
              )
                b: {
                  for (d = Dd, p = c, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g;) ((p = d(p)), h--);
                  for (; 0 < g - h;) ((m = d(m)), g--);
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (c !== null && Od(o, s, c, d, !1), u !== null && f !== null && Od(o, f, u, d, !0));
            }
          }
          a: {
            if (
              ((s = r ? Dt(r) : window),
              (c = s.nodeName && s.nodeName.toLowerCase()),
              c === `select` || (c === `input` && s.type === `file`))
            )
              var v = br;
            else if (mr(s)) {
              if (xr) v = kr;
              else {
                v = Dr;
                var y = Er;
              }
            } else
              ((c = s.nodeName),
                !c || c.toLowerCase() !== `input` || (s.type !== `checkbox` && s.type !== `radio`)
                  ? r && on(r.elementType) && (v = br)
                  : (v = Or));
            if ((v &&= v(e, r))) {
              hr(o, v, n, i);
              break a;
            }
            (y && y(e, s, r),
              e === `focusout` &&
                r &&
                s.type === `number` &&
                r.memoizedProps.value != null &&
                Zt(s, `number`, s.value));
          }
          switch (((y = r ? Dt(r) : window), e)) {
            case `focusin`:
              (mr(y) || y.contentEditable === `true`) && ((zr = y), (Br = r), (Vr = null));
              break;
            case `focusout`:
              Vr = Br = zr = null;
              break;
            case `mousedown`:
              Hr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Hr = !1), Ur(o, n, i));
              break;
            case `selectionchange`:
              if (Rr) break;
            case `keydown`:
            case `keyup`:
              Ur(o, n, i);
          }
          var b;
          if (nr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            ur
              ? cr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
          (x &&
            (ar &&
              n.locale !== `ko` &&
              (ur || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && ur && (b = Tn())
                : ((Sn = i), (Cn = `value` in Sn ? Sn.value : Sn.textContent), (ur = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Un(x, e, null, n, i)),
              o.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = lr(n)), b !== null && (x.data = b)))),
            (b = ir ? dr(e, n) : fr(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Un(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: y, listeners: x }),
                (y.data = b))),
            md(o, e, r, n, i));
        }
        yd(o, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = vn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = vn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = vn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = vn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t);
    }
    function $(e, t, n, r, i, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || tn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && tn(e, `` + r);
          break;
        case `className`:
          zt(e, `class`, r);
          break;
        case `tabIndex`:
          zt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          zt(e, n, r);
          break;
        case `style`:
          an(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            zt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = ln(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, i.name, i, null),
                  $(e, t, `formEncType`, i.formEncType, i, null),
                  $(e, t, `formMethod`, i.formMethod, i, null),
                  $(e, t, `formTarget`, i.formTarget, i, null))
                : ($(e, t, `encType`, i.encType, i, null),
                  $(e, t, `method`, i.method, i, null),
                  $(e, t, `target`, i.target, i, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = ln(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = un);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(a(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = ln(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Rt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Bt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Bt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Bt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Bt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Rt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = sn.get(n) || n), Rt(e, n, r));
      }
    }
    function Nd(e, t, n, r, i, o) {
      switch (n) {
        case `style`:
          an(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(a(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? tn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && tn(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = un);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!jt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((i = n.endsWith(`Capture`)),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                (o = e[_t] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, i),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, i));
                break a;
              }
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : Rt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            i = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    i = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(a(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (i && $(e, t, `srcSet`, n.srcSet, n, null), r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = i = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    i = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(a(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Xt(e, o, c, l, u, s, i, !1);
          return;
        case `select`:
          for (i in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(i) && ((c = n[i]), c != null))
              switch (i) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, i, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Qt(e, !!r, n, !0) : Qt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = i = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  i = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(a(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          en(e, r, i, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(a(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (on(t)) {
            for (d in n)
              n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var i = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  i = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(a(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Yt(e, s, c, l, u, d, o, i);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (i in r)
            if (((o = r[i]), (l = n[i]), r.hasOwnProperty(i) && (o != null || l != null)))
              switch (i) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, i, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? Qt(e, !!n, n ? [] : ``, !1) : Qt(e, !!n, t, !0))
              : Qt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (((i = n[c]), n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)))
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, i);
              }
          for (s in r)
            if (((i = r[s]), (o = n[s]), r.hasOwnProperty(s) && (i != null || o != null)))
              switch (s) {
                case `value`:
                  p = i;
                  break;
                case `defaultValue`:
                  m = i;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (i != null) throw Error(a(91));
                  break;
                default:
                  i !== o && $(e, t, s, i, r, o);
              }
          $t(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]), (m = n[l]), r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected = p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(a(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (on(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) || p === m || (p == null && m == null) || $(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && Id(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate` ? e !== Wd && ((Wd = e), !0) : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[Ct] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display), (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        ) {
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        }
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), wt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[Ct])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !== (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`);
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(a(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(a(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(a(454));
          return e;
        default:
          throw Error(a(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      wt(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = T.d;
    T.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = Et(e);
      t !== null && t.tag === 5 && t.type === `form` ? B(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Jt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Pd(t, `link`, e), kt(t), r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Jt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Jt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Jt(n.imageSizes) + `"]`))
          : (i += `[href="` + Jt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = h(
            { rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)), Pd(t, `link`, e), kt(t), r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + Jt(r) + `"][href="` + Jt(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)), mf.set(a, e), n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)), Pd(r, `link`, e), kt(r), n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = Ot(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (kt(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = Ot(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            kt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = Ot(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            kt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var i = (i = _e.current) ? gf(i) : null;
      if (!i) throw Error(a(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = Ot(i).hoistableStyles),
              (r = n.get(t)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = Ot(i).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((i = i.ownerDocument || i),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = i.querySelector(jf(e))) && !o._p && ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(i, e, n, s.state))),
              t && r === null)
            )
              throw Error(a(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(a(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = Ot(i).hoistableScripts),
                (r = n.get(t)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(a(444, e));
      }
    }
    function Af(e) {
      return `href="` + Jt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          kt(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + Jt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Jt(n.href) + `"]`);
            if (r) return ((t.instance = r), kt(r), r);
            var i = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              kt(r),
              Pd(r, `style`, i),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            i = Af(n.href);
            var o = e.querySelector(jf(i));
            if (o) return ((t.state.loading |= 4), (t.instance = o), kt(o), o);
            ((r = Mf(n)),
              (i = mf.get(i)) && Rf(r, i),
              (o = (e.ownerDocument || e).createElement(`link`)),
              kt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Pf(n.src)),
              (i = e.querySelector(Ff(o)))
                ? ((t.instance = i), kt(i), i)
                : ((r = n),
                  (i = mf.get(o)) && ((r = h({}, n)), zf(r, i)),
                  (e = e.ownerDocument || e),
                  (i = e.createElement(`script`)),
                  kt(i),
                  Pd(i, `link`, r),
                  e.head.appendChild(i),
                  (t.instance = i))
            );
          case `void`:
            return null;
          default:
            throw Error(a(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[Ct] || a[gt] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return ((e = t.disabled), typeof t.precedence == `string` && e == null);
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              kt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            kt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++, (Yf = new Map()), t.forEach(Zf, e), (Yf = null), Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: fe,
      _currentValue2: fe,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = at(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = at(0)),
        (this.hiddenUpdates = at(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = _i(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ga()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ya(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = hi), e) : hi;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Za(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Qa(e, r, t)),
        n !== null && (hu(n, e, t), $a(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = fi(e, 67108864);
        (t !== null && hu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = dt(t);
        var n = fi(e, t);
        (n !== null && hu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = T.p;
      try {
        ((T.p = 2), up(e, t, n, r));
      } finally {
        ((T.p = a), (w.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = T.p;
      try {
        ((T.p = 8), up(e, t, n, r));
      } finally {
        ((T.p = a), (w.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null;) {
            var a = Et(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = et(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - qe(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (rd(a), !(G & 6) && ((tu = Fe() + 500), id(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = fi(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = fn(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = Tt(e)), e !== null)) {
        var t = l(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = u(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = d(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Ie()) {
            case Le:
              return 2;
            case Re:
              return 8;
            case ze:
            case Be:
              return 32;
            case Ve:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Et(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function Ep(e) {
      var t = Tt(e.target);
      if (t !== null) {
        var n = l(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = u(n)), t !== null)) {
              ((e.blockedOn = t),
                mt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = d(n)), t !== null)) {
              ((e.blockedOn = t),
                mt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((dn = r), n.target.dispatchEvent(r), (dn = null));
        } else return ((t = Et(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp || ((hp = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = Et(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Os(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null);)
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[_t] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[_t] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(a(409));
        var n = t.current;
        np(n, pu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), bu(), (t[vt] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = pt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.8`) throw Error(a(527, Lp, `19.2.8`));
    T.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(a(188))
          : ((e = Object.keys(e).join(`,`)), Error(a(268, e)));
      return ((e = p(t)), (e = e === null ? null : m(e)), (e = e === null ? null : e.stateNode), e);
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: w,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((We = zp.inject(Rp)), (Ge = zp));
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(a(299));
      var r = !1,
        i = ``,
        o = Ys,
        c = Xs,
        l = Zs,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = ep(e, 1, !0, t, n ?? null, r, i, u, o, c, l, Pp)),
        (t.context = tp(null)),
        (n = t.current),
        (r = pu()),
        (r = dt(r)),
        (i = Za(r)),
        (i.callback = null),
        Qa(n, i, r),
        (n = r),
        (t.current.lanes = n),
        ot(t, n),
        rd(t),
        (e[vt] = t.current),
        Sd(e),
        new Ip(t)
      );
    };
  }),
  u = t((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = l()));
  }),
  d = `__TSS_CONTEXT`,
  f = Symbol.for(`TSS_SERVER_FUNCTION`),
  p = `application/x-tss-framed`,
  m = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 };
`${p}`;
var h = /;\s*v=(\d+)/;
function g(e) {
  let t = e.match(h);
  return t ? parseInt(t[1], 10) : void 0;
}
function _(e) {
  let t = g(e);
  if (t !== void 0 && t !== 1)
    throw Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var v = () => window.__TSS_START_OPTIONS__;
function y(e) {
  return e[e.length - 1];
}
function b(e) {
  return typeof e == `function`;
}
function x(e, t) {
  return b(e) ? e(t) : e;
}
var S = Object.prototype.hasOwnProperty,
  C = Object.prototype.propertyIsEnumerable;
function ee(e) {
  for (let t in e) if (S.call(e, t)) return !0;
  return !1;
}
var te = () => Object.create(null),
  ne = (e, t) => re(e, t, te);
function re(e, t, n = () => ({}), r = 0) {
  if (e === t) return e;
  if (r > 500) return t;
  let i = t,
    a = se(e) && se(i);
  if (!a && !(ae(e) && ae(i))) return i;
  let o = a ? e : ie(e);
  if (!o) return i;
  let s = a ? i : ie(i);
  if (!s) return i;
  let c = o.length,
    l = s.length,
    u = a ? Array(l) : n(),
    d = 0;
  for (let t = 0; t < l; t++) {
    let o = a ? t : s[t],
      l = e[o],
      f = i[o];
    if (l === f) {
      ((u[o] = l), (a ? t < c : S.call(e, o)) && d++);
      continue;
    }
    if (l === null || f === null || typeof l != `object` || typeof f != `object`) {
      u[o] = f;
      continue;
    }
    let p = re(l, f, n, r + 1);
    ((u[o] = p), p === l && d++);
  }
  return c === l && d === c ? e : u;
}
function ie(e) {
  let t = Object.getOwnPropertyNames(e);
  for (let n of t) if (!C.call(e, n)) return !1;
  let n = Object.getOwnPropertySymbols(e);
  if (n.length === 0) return t;
  let r = t;
  for (let t of n) {
    if (!C.call(e, t)) return !1;
    r.push(t);
  }
  return r;
}
function ae(e) {
  if (!oe(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!oe(n) || !n.hasOwnProperty(`isPrototypeOf`));
}
function oe(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function se(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ce(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let r = 0, i = e.length; r < i; r++) if (!ce(e[r], t[r], n)) return !1;
    return !0;
  }
  if (ae(e) && ae(t)) {
    let r = n?.ignoreUndefined ?? !0;
    if (n?.partial) {
      for (let i in t) if ((!r || t[i] !== void 0) && !ce(e[i], t[i], n)) return !1;
      return !0;
    }
    let i = 0;
    if (!r) i = Object.keys(e).length;
    else for (let t in e) e[t] !== void 0 && i++;
    let a = 0;
    for (let o in t) if ((!r || t[o] !== void 0) && (a++, a > i || !ce(e[o], t[o], n))) return !1;
    return i === a;
  }
  return !1;
}
function le(e) {
  return typeof e?.message == `string`
    ? e.message.startsWith(`Failed to fetch dynamically imported module`) ||
        e.message.startsWith(`error loading dynamically imported module`) ||
        e.message.startsWith(`Importing a module script failed`)
    : !1;
}
var ue = /[\x00-\x1f\x7f"<>`{}]/g;
function de(e) {
  return e.replace(ue, (e) => `%` + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, `0`));
}
function w(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
      try {
        return decodeURI(e);
      } catch {
        return e;
      }
    });
  }
  return de(t);
}
var T = [`http:`, `https:`, `mailto:`, `tel:`];
function fe(e, t) {
  if (!e) return !1;
  try {
    let n = new URL(e);
    return !t.has(n.protocol);
  } catch {
    return !1;
  }
}
var pe = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  me = /[&><\u2028\u2029]/g;
function he(e) {
  return e.replace(me, (e) => pe[e]);
}
function E(e) {
  if (!e || (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith(`//`)))
    return { path: e, handledProtocolRelativeURL: !1 };
  let t = /%25|%5C/gi,
    n = 0,
    r = ``,
    i;
  for (; (i = t.exec(e)) !== null;) ((r += w(e.slice(n, i.index)) + i[0]), (n = t.lastIndex));
  r += w(n ? e.slice(n) : e);
  let a = !1;
  return (
    r.startsWith(`//`) && ((a = !0), (r = `/` + r.replace(/^\/+/, ``))),
    { path: r, handledProtocolRelativeURL: a }
  );
}
function D(e) {
  return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function O(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function ge() {
  throw Error(`Invariant failed`);
}
function _e(e) {
  let t = new Map(),
    n,
    r,
    i = (e) => {
      e.next &&
        (e.prev
          ? ((e.prev.next = e.next),
            (e.next.prev = e.prev),
            (e.next = void 0),
            r && ((r.next = e), (e.prev = r)))
          : ((e.next.prev = void 0),
            (n = e.next),
            (e.next = void 0),
            r && ((e.prev = r), (r.next = e))),
        (r = e));
    };
  return {
    get(e) {
      let n = t.get(e);
      if (n) return (i(n), n.value);
    },
    set(a, o) {
      if (t.size >= e && n) {
        let e = n;
        (t.delete(e.key),
          e.next && ((n = e.next), (e.next.prev = void 0)),
          e === r && (r = void 0));
      }
      let s = t.get(a);
      if (s) ((s.value = o), i(s));
      else {
        let e = { key: a, value: o, prev: r };
        (r && (r.next = e), (r = e), (n ||= e), t.set(a, e));
      }
    },
    clear() {
      (t.clear(), (n = void 0), (r = void 0));
    },
  };
}
var ve = 4,
  ye = 5;
function be(e) {
  let t = e.indexOf(`{`);
  if (t === -1) return null;
  let n = e.indexOf(`}`, t);
  return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function xe(e, t, n = new Uint16Array(6)) {
  let r = e.indexOf(`/`, t),
    i = r === -1 ? e.length : r,
    a = e.substring(t, i);
  if (!a || !a.includes(`$`))
    return ((n[0] = 0), (n[1] = t), (n[2] = t), (n[3] = i), (n[4] = i), (n[5] = i), n);
  if (a === `$`) {
    let r = e.length;
    return ((n[0] = 2), (n[1] = t), (n[2] = t), (n[3] = r), (n[4] = r), (n[5] = r), n);
  }
  if (a.charCodeAt(0) === 36)
    return ((n[0] = 1), (n[1] = t), (n[2] = t + 1), (n[3] = i), (n[4] = i), (n[5] = i), n);
  let o = be(a);
  if (o) {
    let [r, s] = o,
      c = a.charCodeAt(r + 1);
    if (c === 45) {
      if (r + 2 < a.length && a.charCodeAt(r + 2) === 36) {
        let e = r + 3,
          a = s;
        if (e < a)
          return (
            (n[0] = 3),
            (n[1] = t + r),
            (n[2] = t + e),
            (n[3] = t + a),
            (n[4] = t + s + 1),
            (n[5] = i),
            n
          );
      }
    } else if (c === 36) {
      let a = r + 1,
        o = r + 2;
      return o === s
        ? ((n[0] = 2),
          (n[1] = t + r),
          (n[2] = t + a),
          (n[3] = t + o),
          (n[4] = t + s + 1),
          (n[5] = e.length),
          n)
        : ((n[0] = 1),
          (n[1] = t + r),
          (n[2] = t + o),
          (n[3] = t + s),
          (n[4] = t + s + 1),
          (n[5] = i),
          n);
    }
  }
  return ((n[0] = 0), (n[1] = t), (n[2] = t), (n[3] = i), (n[4] = i), (n[5] = i), n);
}
function Se(e, t, n, r, i, a, o, s) {
  s?.(n);
  let c = r;
  {
    let r = n.fullPath ?? n.from,
      s = n.options,
      l = r.length,
      u = s?.caseSensitive ?? e,
      d = s?.params?.parse ?? s?.parseParams;
    for (; c < l;) {
      let e = xe(r, c, t),
        n,
        s = c,
        l = e[5];
      ((c = l + 1), a++);
      let f = e[0];
      switch (f) {
        case 0: {
          let t = r.substring(e[2], e[3]),
            o = t,
            s;
          u
            ? (s = i.static ??= new Map())
            : ((o = t.toLowerCase()), (s = i.staticInsensitive ??= new Map()));
          let c = s.get(o);
          if (c) n = c;
          else {
            let e = we(r);
            ((e.parent = i), (e.depth = a), (n = e), s.set(o, e));
          }
          break;
        }
        case 1:
        case 3:
        case 2: {
          let t = r.substring(s, e[1]),
            c = r.substring(e[4], l),
            p = u && !!(t || c),
            m = t ? (p ? t : t.toLowerCase()) : void 0,
            h = c ? (p ? c : c.toLowerCase()) : void 0,
            g = f === 1 ? i.dynamic : f === 3 ? i.optional : i.wildcard,
            _ =
              f !== 2 &&
              !d &&
              g?.find((e) => !e.parse && e.caseSensitive === p && e.prefix === m && e.suffix === h);
          if (_) n = _;
          else {
            let e = Te(f, r, p, m, h);
            ((n = e), (e.parent = i), (e.depth = a));
            let t;
            ((t =
              f === 1 ? (i.dynamic ??= []) : f === 3 ? (i.optional ??= []) : (i.wildcard ??= [])),
              t.push(e),
              t.length === 2 && o?.push(t));
          }
          break;
        }
      }
      i = n;
    }
    if (d && n.children && !n.isRoot && n.id && n.id.charCodeAt(n.id.lastIndexOf(`/`) + 1) === 95) {
      let e = we(r);
      ((e.kind = ye),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.pathless ??= []),
        i.pathless.push(e),
        (i = e));
    }
    let f = (n.path || !n.children) && !n.isRoot;
    if (f && r.endsWith(`/`)) {
      let e = we(r);
      ((e.kind = ve), (e.parent = i), a++, (e.depth = a), (i.index = e), (i = e));
    }
    ((i.parse = d ?? null),
      (i.priority = s?.params?.priority ?? 0),
      f && !i.route && ((i.route = n), (i.fullPath = r)));
  }
  if (n.children) for (let r of n.children) Se(e, t, r, c, i, a, o, s);
}
function Ce(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority)) return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function we(e) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: e,
    parent: null,
    parse: null,
    priority: 0,
  };
}
function Te(e, t, n, r, i) {
  return {
    kind: e,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: t,
    parent: null,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  };
}
function Ee(e, t) {
  let n = we(`/`),
    r = new Uint16Array(6),
    i = [];
  for (let t of e) Se(!1, r, t, 1, n, 0, i);
  for (let e of i) e.sort(Ce);
  ((t.masksTree = n), (t.flatCache = _e(1e3)));
}
function De(e, t) {
  e ||= `/`;
  let n = t.flatCache.get(e);
  if (n) return n;
  let r = Me(e, t.masksTree);
  return (t.flatCache.set(e, r), r);
}
function Oe(e, t, n, r, i) {
  ((e ||= `/`), (r ||= `/`));
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a);
  return (
    o || ((o = we(`/`)), Se(t, new Uint16Array(6), { from: e }, 1, o, 0), i.singleCache.set(a, o)),
    Me(r, o, n)
  );
}
function ke(e, t, n = !1) {
  let r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r);
  if (i !== void 0) return i;
  e ||= `/`;
  let a;
  try {
    a = Me(e, t.segmentTree, n);
  } catch (e) {
    if (e instanceof URIError) a = null;
    else throw e;
  }
  return (a && (a.branch = Pe(a.route)), t.matchCache.set(r, a), a);
}
function Ae(e) {
  return e === `/` ? e : e.replace(/\/{1,}$/, ``);
}
function je(e, t = !1, n) {
  let r = we(e.fullPath),
    i = new Uint16Array(6),
    a = [],
    o = {},
    s = {},
    c = 0;
  Se(t, i, e, 1, r, 0, a, (e) => {
    if ((n?.(e, c), e.id in o && ge(), (o[e.id] = e), c !== 0 && e.path)) {
      let t = Ae(e.fullPath);
      (!s[t] || e.fullPath.endsWith(`/`)) && (s[t] = e);
    }
    c++;
  });
  for (let e of a) e.sort(Ce);
  return {
    processedTree: {
      segmentTree: r,
      singleCache: _e(1e3),
      matchCache: _e(1e3),
      flatCache: null,
      masksTree: null,
    },
    routesById: o,
    routesByPath: s,
  };
}
function Me(e, t, n = !1) {
  let r = e.split(`/`),
    i = Ie(e, r, t, n);
  if (!i) return null;
  let [a] = Ne(e, r, i);
  return { route: i.node.route, rawParams: a };
}
function Ne(e, t, n) {
  let r = Fe(n.node),
    i = null,
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.segment ?? 0;
  for (; s < r.length; o++, s++, c++, l++) {
    let u = r[s];
    if (u.kind === ve) break;
    if (u.kind === ye) {
      (l--, o--, c--);
      continue;
    }
    let d = t[o],
      f = c;
    if ((d && (c += d.length), u.kind === 1)) {
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0;
      if (e.charCodeAt(t) === 123) {
        let n = u.suffix?.length ?? 0,
          r = e.substring(t + 2, e.length - n - 1),
          i = d.substring(t, d.length - n);
        a[r] = decodeURIComponent(i);
      } else {
        let t = e.substring(1);
        a[t] = decodeURIComponent(d);
      }
    } else if (u.kind === 3) {
      if (n.skipped & (1 << s)) {
        (o--, (c = f - 1));
        continue;
      }
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0,
        r = u.suffix?.length ?? 0,
        p = e.substring(t + 3, e.length - r - 1),
        m = u.suffix || u.prefix ? d.substring(t, d.length - r) : d;
      m && (a[p] = decodeURIComponent(m));
    } else if (u.kind === 2) {
      let t = u,
        n = e.substring(f + (t.prefix?.length ?? 0), e.length - (t.suffix?.length ?? 0)),
        r = decodeURIComponent(n);
      ((a[`*`] = r), (a._splat = r));
      break;
    }
  }
  return (
    n.rawParams && Object.assign(a, n.rawParams),
    [a, { part: o, node: s, path: c, segment: l }]
  );
}
function Pe(e) {
  let t = [e];
  for (; e.parentRoute;) ((e = e.parentRoute), t.push(e));
  return (t.reverse(), t);
}
function Fe(e) {
  let t = Array(e.depth + 1);
  do ((t[e.depth] = e), (e = e.parent));
  while (e);
  return t;
}
function Ie(e, t, n, r) {
  if (e === `/` && n.index) return { node: n.index, skipped: 0 };
  let i = !y(t),
    a = i && e !== `/`,
    o = t.length - +!!i,
    s = [{ node: n, index: 1, skipped: 0, statics: 0, dynamics: 0, optionals: 0 }],
    c = null,
    l = null;
  for (; s.length;) {
    let n = s.pop(),
      { node: i, index: u, skipped: d, statics: f, dynamics: p, optionals: m } = n,
      { extract: h, rawParams: g } = n;
    if (i.kind === 2 && i.route && !Be(l, n)) continue;
    if (i.parse) {
      if (!ze(e, t, n)) continue;
      ((g = n.rawParams), (h = n.extract));
    }
    r && i.route && i.kind !== ve && Be(c, n) && (c = n);
    let _ = u === o;
    if (
      _ &&
      (i.route && (!a || i.kind === ve || i.kind === 2) && Be(l, n) && (l = n),
      !i.optional && !i.wildcard && !i.index && !i.pathless)
    )
      continue;
    let v = _ ? void 0 : t[u],
      y;
    if (_ && i.index) {
      let n = {
          node: i.index,
          index: u,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        },
        r = !0;
      if ((i.index.parse && (ze(e, t, n) || (r = !1)), r)) {
        if (!p && !m && !d && Re(f, o)) return n;
        Be(l, n) && (l = n);
      }
    }
    if (i.wildcard)
      for (let e = i.wildcard.length - 1; e >= 0; e--) {
        let n = i.wildcard[e],
          { prefix: r, suffix: a } = n;
        if (!(r && (_ || !(n.caseSensitive ? v : (y ??= v.toLowerCase())).startsWith(r)))) {
          if (a) {
            if (_) continue;
            let e = t.slice(u).join(`/`).slice(-a.length);
            if ((n.caseSensitive ? e : e.toLowerCase()) !== a) continue;
          }
          s.push({
            node: n,
            index: o,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m,
            extract: h,
            rawParams: g,
          });
        }
      }
    if (i.optional) {
      let e = d | (1 << (i.depth + 1));
      for (let t = i.optional.length - 1; t >= 0; t--) {
        let n = i.optional[t];
        s.push({
          node: n,
          index: u,
          skipped: e,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
      if (!_)
        for (let e = i.optional.length - 1; e >= 0; e--) {
          let t = i.optional[e],
            { prefix: n, suffix: r } = t;
          if (n || r) {
            let e = t.caseSensitive ? v : (y ??= v.toLowerCase());
            if ((n && !e.startsWith(n)) || (r && !e.endsWith(r))) continue;
          }
          s.push({
            node: t,
            index: u + 1,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m + Le(o, u),
            extract: h,
            rawParams: g,
          });
        }
    }
    if (!_ && i.dynamic && v)
      for (let e = i.dynamic.length - 1; e >= 0; e--) {
        let t = i.dynamic[e],
          { prefix: n, suffix: r } = t;
        if (n || r) {
          let e = t.caseSensitive ? v : (y ??= v.toLowerCase());
          if ((n && !e.startsWith(n)) || (r && !e.endsWith(r))) continue;
        }
        s.push({
          node: t,
          index: u + 1,
          skipped: d,
          statics: f,
          dynamics: p + Le(o, u),
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
    if (!_ && i.staticInsensitive) {
      let e = i.staticInsensitive.get((y ??= v.toLowerCase()));
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          statics: f + Le(o, u),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
    }
    if (!_ && i.static) {
      let e = i.static.get(v);
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          statics: f + Le(o, u),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
    }
    if (i.pathless)
      for (let e = i.pathless.length - 1; e >= 0; e--) {
        let t = i.pathless[e];
        s.push({
          node: t,
          index: u,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
  }
  if (l) return l;
  if (r && c) {
    let n = c.index;
    for (let e = 0; e < c.index; e++) n += t[e].length;
    let r = n === e.length ? `/` : e.slice(n);
    return ((c.rawParams ??= Object.create(null)), (c.rawParams[`**`] = decodeURIComponent(r)), c);
  }
  return null;
}
function Le(e, t) {
  return 2 ** (e - t - 1);
}
function Re(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function ze(e, t, n) {
  let r, i;
  try {
    [r, i] = Ne(e, t, n);
  } catch {
    return null;
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0;
  try {
    if (n.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function Be(e, t) {
  return (
    !e ||
    t.statics > e.statics ||
    (t.statics === e.statics &&
      (t.dynamics > e.dynamics ||
        (t.dynamics === e.dynamics &&
          (t.optionals > e.optionals ||
            (t.optionals === e.optionals &&
              ((t.node.kind === ve) > (e.node.kind === ve) ||
                ((t.node.kind === ve) == (e.node.kind === ve) && t.node.depth > e.node.depth)))))))
  );
}
function Ve(e) {
  return He(e.filter((e) => e !== void 0).join(`/`));
}
function He(e) {
  return e.replace(/\/{2,}/g, `/`);
}
function Ue(e) {
  return e === `/` ? e : e.replace(/^\/{1,}/, ``);
}
function We(e) {
  let t = e.length;
  return t > 1 && e[t - 1] === `/` ? e.replace(/\/{1,}$/, ``) : e;
}
function Ge(e) {
  return We(Ue(e));
}
function Ke(e, t) {
  return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e;
}
function qe(e, t, n) {
  return Ke(e, n) === Ke(t, n);
}
function Je({ base: e, to: t, trailingSlash: n = `never`, cache: r }) {
  let i = t.startsWith(`/`),
    a = !i && t === `.`,
    o;
  if (r) {
    o = i ? t : a ? e : e + `\0` + t;
    let n = r.get(o);
    if (n) return n;
  }
  let s;
  if (a) s = e.split(`/`);
  else if (i) s = t.split(`/`);
  else {
    for (s = e.split(`/`); s.length > 1 && y(s) === ``;) s.pop();
    let n = t.split(`/`);
    for (let e = 0, t = n.length; e < t; e++) {
      let r = n[e];
      r === ``
        ? e
          ? e === t - 1 && s.push(r)
          : (s = [r])
        : r === `..`
          ? s.pop()
          : r === `.` || s.push(r);
    }
  }
  s.length > 1 && (y(s) === `` ? n === `never` && s.pop() : n === `always` && s.push(``));
  let c = He(s.join(`/`)) || `/`;
  return (o && r && r.set(o, c), c);
}
function Ye(e) {
  let t = new Map(e.map((e) => [encodeURIComponent(e), e])),
    n = Array.from(t.keys())
      .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`))
      .join(`|`),
    r = new RegExp(n, `g`);
  return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function Xe(e, t, n) {
  let r = t[e];
  return typeof r == `string`
    ? e === `_splat`
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(r)
        ? r
        : r
            .split(`/`)
            .map((e) => Qe(e, n))
            .join(`/`)
      : Qe(r, n)
    : r;
}
function Ze({ path: e, params: t, decoder: n, ...r }) {
  let i = !1,
    a = Object.create(null);
  if (!e || e === `/`) return { interpolatedPath: `/`, usedParams: a, isMissingParams: i };
  if (!e.includes(`$`)) return { interpolatedPath: e, usedParams: a, isMissingParams: i };
  let o = e.length,
    s = 0,
    c,
    l = ``;
  for (; s < o;) {
    let r = s;
    c = xe(e, r, c);
    let o = c[5];
    if (((s = o + 1), r === o)) continue;
    let u = c[0];
    if (u === 0) {
      l += `/` + e.substring(r, o);
      continue;
    }
    if (u === 2) {
      let s = t._splat;
      ((a._splat = s), (a[`*`] = s));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o);
      if (!s) {
        ((i = !0), (u || d) && (l += `/` + u + d));
        continue;
      }
      let f = Xe(`_splat`, t, n);
      l += `/` + u + f + d;
      continue;
    }
    if (u === 1) {
      let s = e.substring(c[2], c[3]);
      (!i && !(s in t) && (i = !0), (a[s] = t[s]));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = Xe(s, t, n) ?? `undefined`;
      l += `/` + u + f + d;
      continue;
    }
    if (u === 3) {
      let i = e.substring(c[2], c[3]),
        s = t[i];
      if (s == null) continue;
      a[i] = s;
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = Xe(i, t, n) ?? ``;
      l += `/` + u + f + d;
      continue;
    }
  }
  return (
    e.endsWith(`/`) && (l += `/`),
    { usedParams: a, interpolatedPath: l || `/`, isMissingParams: i }
  );
}
function Qe(e, t) {
  let n = encodeURIComponent(e);
  return t?.(n) ?? n;
}
function $e(e) {
  return e?.isNotFound === !0;
}
function et() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var tt = `tsr-scroll-restoration-v1_3`,
  nt = et();
function rt() {
  try {
    return JSON.parse(nt?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
function it() {
  try {
    nt?.setItem(tt, JSON.stringify(at));
  } catch {}
}
var at = rt(),
  ot = `data-scroll-restoration-id`,
  st = (e) => e.state.__TSR_key || e.href;
function ct(e) {
  let t = e.getAttribute(ot);
  if (t) return `[${ot}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode);) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling);) e++;
    let a = `${r.localName}:nth-child(${e})`;
    ((n = n ? `${a} > ${n}` : a), (r = i));
  }
  return n;
}
var lt = !1,
  ut = `window`;
function dt(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function ft(e) {
  let t = new Set();
  for (let n of e) {
    if (n === ut) continue;
    let e = dt(n);
    e && t.add(e);
  }
  return t;
}
function pt(e, t) {
  let n = t ?? e.options.scrollRestoration,
    r = e._scroll;
  n && (r.restoring = !0);
  let i = e.options.getScrollRestorationKey || st,
    a = new Set(),
    o = (e) => {
      let t = (at[e] ||= {});
      for (let e of a)
        e === document
          ? (t[ut] = { scrollX, scrollY })
          : e.isConnected && (t[ct(e)] = { scrollX: e.scrollLeft, scrollY: e.scrollTop });
    };
  (n &&
    !r.restoration &&
    ((r.restoration = !0),
    (lt = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(
      `scroll`,
      (e) => {
        lt || a.add(e.target);
      },
      !0,
    ),
    e.subscribe(`onBeforeLoad`, (e) => {
      (e.fromLocation && o(i(e.fromLocation)), a.clear());
    }),
    addEventListener(`pagehide`, () => {
      (o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get())), it());
    })),
    !r.reset &&
      ((r.reset = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.next,
          c = r.hash,
          l;
        if (
          (a.clear(),
          (r.next = !0),
          (r.hash = !1),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        let u = i(t.toLocation),
          d = t.fromLocation && i(t.fromLocation);
        if (r.restoring && d && d !== u) {
          let e = at[d];
          if (e) {
            let t = at[u];
            for (let n in e) {
              if (n === ut) {
                if (s) continue;
              } else {
                let e = dt(n);
                if (!e || (s && o && ((l ??= ft(o)), l.has(e)))) continue;
              }
              ((t ||= at[u] = {}), (t[n] ??= e[n]));
            }
          }
        }
        lt = !0;
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1;
          if (s) {
            !e && o && (l ??= ft(o));
            let t = e && i && c,
              s = r.restoring ? at[u] : void 0;
            if (s)
              for (let e in s) {
                let { scrollX: r, scrollY: i } = s[e];
                if (e === ut) {
                  if (t) continue;
                  (scrollTo({ top: i, left: r, behavior: n }), (a = !0));
                } else {
                  let t = dt(e);
                  t && ((t.scrollLeft = r), (t.scrollTop = i), l?.delete(t));
                }
              }
            if (!e) {
              let e = { top: 0, left: 0, behavior: n };
              if ((a || scrollTo(e), l)) for (let t of l) t.scrollTo(e);
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i);
        } finally {
          lt = !1;
        }
      })));
}
function mt(e, t = String) {
  let n = new URLSearchParams();
  for (let r in e) {
    let i = e[r];
    i !== void 0 && n.set(r, t(i));
  }
  return n.toString();
}
function ht(e) {
  return e ? (e === `false` ? !1 : e === `true` ? !0 : e * 0 == 0 && +e + `` === e ? +e : e) : ``;
}
function gt(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null ? (n[e] = ht(r)) : Array.isArray(t) ? t.push(ht(r)) : (n[e] = [t, ht(r)]);
  }
  return n;
}
var _t = yt(JSON.parse),
  vt = bt(JSON.stringify, JSON.parse);
function yt(e) {
  return (t) => {
    t[0] === `?` && (t = t.substring(1));
    let n = gt(t);
    for (let t in n) {
      let r = n[t];
      if (typeof r == `string`)
        try {
          n[t] = e(r);
        } catch {}
    }
    return n;
  };
}
function bt(e, t) {
  let n = typeof t == `function`;
  function r(r) {
    if (typeof r == `object` && r)
      try {
        return e(r);
      } catch {}
    else if (n && typeof r == `string`)
      try {
        return (t(r), e(r));
      } catch {}
    return r;
  }
  return (e) => {
    let t = mt(e, r);
    return t ? `?${t}` : ``;
  };
}
var xt = `__root__`;
function St(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == `string`)
  )
    try {
      (new URL(e.href), (e.reloadDocument = !0));
    } catch {}
  let t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  let n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function Ct(e) {
  return e instanceof Response && !!e.options;
}
function wt(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return St(e);
}
function Tt(e) {
  return e
    .replaceAll(`\0`, `/`)
    .replaceAll(`�`, `/`)
    .replace(/~([~0r])/g, (e, t) => (t === `0` ? `\0` : t === `r` ? `�` : t));
}
function Et(e) {
  return {
    input: ({ url: t }) => {
      for (let n of e) t = Ot(n, t);
      return t;
    },
    output: ({ url: t }) => {
      for (let n = e.length - 1; n >= 0; n--) t = kt(e[n], t);
      return t;
    },
  };
}
function Dt(e) {
  let t = Ge(e.basepath),
    n = `/${t}`,
    r = e.caseSensitive ? n : n.toLowerCase(),
    i = `${r}/`;
  return {
    input: ({ url: t }) => {
      let a = e.caseSensitive ? t.pathname : t.pathname.toLowerCase();
      return (
        a === r ? (t.pathname = `/`) : a.startsWith(i) && (t.pathname = t.pathname.slice(n.length)),
        t
      );
    },
    output: ({ url: e }) => ((e.pathname = Ve([`/`, t, e.pathname])), e),
  };
}
function Ot(e, t) {
  let n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function kt(e, t) {
  let n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function At(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i } = t,
    a = new Map(),
    o = n(`idle`),
    s = n(e),
    c = n(void 0),
    l = n([]),
    u = r(() => l.get().map((e) => a.get(e).get())),
    d = r(() => ({
      status: o.get(),
      isLoading: o.get() === `pending`,
      matches: u.get(),
      location: s.get(),
      resolvedLocation: c.get(),
    }));
  function f(e) {
    let t = a.get(e);
    return (t || ((t = n(void 0)), a.set(e, t)), t);
  }
  let p = {
    status: o,
    location: s,
    resolvedLocation: c,
    ids: l,
    matches: u,
    byRoute: a,
    __store: d,
    getMatchStore: f,
    setMatches: m,
  };
  function m(e) {
    let t = l.get(),
      n = e.map((e) => e.routeId);
    i(() => {
      O(t, n) || l.set(n);
      for (let e of t) n.includes(e) || a.get(e).set(() => void 0);
      for (let t of e) {
        let e = f(t.routeId);
        e.get() !== t && e.set(t);
      }
    });
  }
  return p;
}
var jt = `__TSR_index`,
  Mt = `popstate`,
  Nt = `beforeunload`;
function Pt(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      ((t = e.getLocation()), n.forEach((e) => e({ location: t, action: r })));
    },
    i = (n) => {
      (e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = Rt(i.path, i.state);
          if (await n.blockerFn({ currentLocation: t, nextLocation: r, action: i.type })) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      let s = t.state[jt];
      ((i = Ft(s + 1, i)),
        a({
          task: () => {
            (e.pushState(n, i), r({ type: `PUSH` }));
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        }));
    },
    replace: (n, i, o) => {
      let s = t.state[jt];
      ((i = Ft(s, i)),
        a({
          task: () => {
            (e.replaceState(n, i), r({ type: `REPLACE` }));
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        }));
    },
    go: (t, n) => {
      a({
        task: () => {
          (e.go(t), i({ type: `GO`, index: t }));
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          (e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` }));
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          (e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` }));
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[jt] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      let n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
  };
}
function Ft(e, t) {
  t ||= {};
  let n = zt();
  return { ...t, key: n, __TSR_key: n, [jt]: e };
}
function It(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = e?.createHref ?? ((e) => e),
    c =
      e?.parseLocation ??
      (() => Rt(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = zt();
    t.history.replaceState({ [jt]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _ = () => {
      g &&
        ((S._ignoreSubscribers = !0),
        (g[2] ? t.history.pushState : t.history.replaceState)(g[1], ``, g[0]),
        (S._ignoreSubscribers = !1),
        (g = void 0),
        (u = void 0));
    },
    v = (e, t, n) => {
      let r = s(t),
        i = !!g;
      (i || (u = l), (l = Rt(t, n)), (g = [r, n, g?.[2] || e]), i || queueMicrotask(() => _()));
    },
    y = (e) => {
      ((l = c()), S.notify({ type: e }));
    },
    b = async () => {
      if (f) {
        f = !1;
        return;
      }
      let e = c(),
        n = e.state[jt] - l.state[jt],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        let n = a();
        if (typeof document < `u` && n.length) {
          for (let r of n)
            if (await r.blockerFn({ currentLocation: l, nextLocation: e, action: s })) {
              ((f = !0), t.history.go(1), S.notify(u));
              return;
            }
        }
      }
      ((l = c()), S.notify(u));
    },
    x = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return (e.preventDefault(), (e.returnValue = ``));
    },
    S = Pt({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => v(!0, e, t),
      replaceState: (e, t) => v(!1, e, t),
      back: (e) => (e && (p = !0), (m = !0), t.history.back()),
      forward: (e) => {
        (e && (p = !0), (m = !0), t.history.forward());
      },
      go: (e) => {
        ((d = !0), t.history.go(e));
      },
      createHref: (e) => s(e),
      flush: _,
      destroy: () => {
        ((t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Nt, x, { capture: !0 }),
          t.removeEventListener(Mt, b));
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(Nt, x, { capture: !0 }),
    t.addEventListener(Mt, b),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e);
      return (S._ignoreSubscribers || y(`PUSH`), r);
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e);
      return (S._ignoreSubscribers || y(`REPLACE`), n);
    }),
    S
  );
}
function Lt(e) {
  let t = e.replace(/[\x00-\x1f\x7f]/g, ``);
  return (t.startsWith(`//`) && (t = `/` + t.replace(/^\/+/, ``)), t);
}
function Rt(e, t) {
  let n = Lt(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`),
    a = zt();
  return {
    href: n,
    pathname: n.substring(0, r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t || { [jt]: 0, key: a, __TSR_key: a },
  };
}
function zt() {
  return (Math.random() + 1).toString(36).substring(7);
}
function Bt(e) {
  return (
    e.options.loader ||
    e.options.beforeLoad ||
    e.lazyFn ||
    e.options.component?.preload ||
    e.options.pendingComponent?.preload
  );
}
function Vt(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function Ht(e, t) {
  return {
    fromLocation: t,
    toLocation: e,
    pathChanged: t?.pathname !== e.pathname,
    hrefChanged: t?.href !== e.href,
    hashChanged: t?.hash !== e.hash,
  };
}
function Ut({ key: e, __TSR_key: t, __TSR_index: n, __hashScrollIntoViewOptions: r, ...i }) {
  return i;
}
function Wt(e, t, n, r) {
  for (let i of t) {
    if (r?.() === !1) return;
    n.some((e) => e.routeId === i.routeId) || e.routesById[i.routeId].options.onLeave?.(i);
  }
  for (let i of n) {
    if (r?.() === !1) return;
    e.routesById[i.routeId].options[
      t.some((e) => e.routeId === i.routeId) ? `onStay` : `onEnter`
    ]?.(i);
  }
}
var Gt = class {
    constructor(e, t) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this._scroll = { next: !0 }),
        (this.subscribers = new Set()),
        (this._cache = new Map()),
        (this._committed = []),
        (this.routeBranchCache = new WeakMap()),
        (this.lightweightCache = new WeakMap()),
        (this.startTransition = async (e) => (e(), !1)),
        (this.update = (e) => {
          let t = this.options,
            n = this.basepath ?? t?.basepath ?? `/`,
            r = this.basepath === void 0,
            i = t?.rewrite;
          if (
            ((this.options = { ...t, ...e }),
            (this.isServer = this.options.isServer ?? !1 ?? typeof document > `u`),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = Ye(this.options.pathParamsAllowedCharacters)),
            (!this.history || (this.options.history && this.options.history !== this.history)) &&
              (this.history = this.options.history ? this.options.history : It()),
            (this.origin = this.options.origin),
            (this.origin ||=
              window?.origin && window.origin !== `null` ? window.origin : `http://localhost`),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let e;
            ((this.resolvePathCache = _e(1e3)), (e = this.buildRouteTree()), this.setRoutes(e));
          }
          if (!this.stores && this.latestLocation) {
            let e = this.getStoreConfig(this);
            ((this.batch = e.batch), (this.stores = At(this.latestLocation, e)), pt(this));
          }
          let a = this.options.basepath ?? `/`,
            o = this.options.rewrite;
          if (r || n !== a || i !== o) {
            this.basepath = a;
            let e = [],
              t = Ge(a);
            (t && t !== `/` && e.push(Dt({ basepath: a })),
              o && e.push(o),
              (this.rewrite = e.length === 0 ? void 0 : e.length === 1 ? e[0] : Et(e)),
              this.history && this.updateLatestLocation(),
              this.stores && this.stores.location.set(this.latestLocation));
          }
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
        }),
        (this.buildRouteTree = () => {
          let e = je(this.routeTree, this.options.caseSensitive, (e, t) => {
            e.init({ originalIndex: t });
          });
          return (this.options.routeMasks && Ee(this.options.routeMasks, e.processedTree), e);
        }),
        (this.subscribe = (e, t) => {
          let n = { eventType: e, fn: t };
          return (
            this.subscribers.add(n),
            () => {
              this.subscribers.delete(n);
            }
          );
        }),
        (this.emit = (e) => {
          for (let t of this.subscribers)
            if (t.eventType === e.type)
              try {
                t.fn(e);
              } catch (e) {
                console.error(e);
              }
        }),
        (this.parseLocation = (e, t) => {
          let n = ({ pathname: e, search: n, hash: r, href: i, state: a }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
                let i = this.options.parseSearch(n),
                  o = this.options.stringifySearch(i);
                return {
                  href: e + o + r,
                  publicHref: e + o + r,
                  pathname: E(e).path,
                  external: !1,
                  searchStr: o,
                  search: ne(t?.search, i),
                  hash: E(r.slice(1)).path,
                  state: re(t?.state, a),
                };
              }
              let o = new URL(i, this.origin),
                s = Ot(this.rewrite, o),
                c = this.options.parseSearch(s.search),
                l = this.options.stringifySearch(c);
              return (
                (s.search = l),
                {
                  href: s.href.replace(s.origin, ``),
                  publicHref: i,
                  pathname: E(s.pathname).path,
                  external: !!this.rewrite && s.origin !== this.origin,
                  searchStr: l,
                  search: ne(t?.search, c),
                  hash: E(s.hash.slice(1)).path,
                  state: re(t?.state, a),
                }
              );
            },
            r = n(e),
            { __tempLocation: i, __tempKey: a } = r.state;
          if (i && (!a || a === this.tempLocationKey)) {
            let e = n(i);
            return (
              (e.state.key = r.state.key),
              (e.state.__TSR_key = r.state.__TSR_key),
              delete e.state.__tempLocation,
              { ...e, maskedLocation: r }
            );
          }
          return r;
        }),
        (this.resolvePathWithBase = (e, t) =>
          Je({
            base: e,
            to: t.includes(`//`) ? He(t) : t,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (e, t, n) =>
          typeof e == `string`
            ? this.matchRoutesInternal({ pathname: e, search: t }, n)
            : this.matchRoutesInternal(e, t)),
        (this.getMatchedRoutes = (e) => {
          let t = Object.create(null),
            n = ke(We(e), this.processedTree, !0);
          return (
            n && Object.assign(t, n.rawParams),
            [n?.branch || [this.routesById.__root__], t, n?.route]
          );
        }),
        (this.buildLocation = (e) => {
          let t = (t = {}) => {
              let n = t._fromLocation || this._pendingLocation || this.latestLocation,
                r = this.matchRoutesLightweight(n);
              t.from;
              let i = t.unsafeRelative === `path` ? n.pathname : (t.from ?? r[1]),
                a = t.to ? `${t.to}` : void 0,
                o = r[2],
                s = Object.assign(Object.create(null), r[3]),
                c = a?.charCodeAt(0) === 47 ? `/` : this.resolvePathWithBase(i, `.`),
                l = a ? this.resolvePathWithBase(c, a) : c,
                u = Zt(t.params, s),
                d = this.routesByPath[We(l)],
                f;
              if (d) f = this.getRouteBranch(d);
              else if (l.includes(`$`)) f = [];
              else {
                let [e, t, n] = this.getMatchedRoutes(l);
                ((f = e),
                  this.options.notFoundRoute &&
                    (!n || (n.path !== `/` && t[`**`])) &&
                    (f = [...f, this.options.notFoundRoute]));
              }
              if (f.length && ee(u))
                for (let e of f) {
                  let t = e.options.params?.stringify ?? e.options.stringifyParams;
                  if (t)
                    try {
                      Object.assign(u, t(u));
                    } catch {}
                }
              let p = e.leaveParams
                  ? l
                  : E(
                      Ze({
                        path: l,
                        params: u,
                        decoder: this.pathParamsDecoder,
                        server: this.isServer,
                      }).interpolatedPath,
                    ).path,
                m = o;
              if (e._includeValidateSearch && this.options.search?.strict) {
                let e = {};
                (f.forEach((t) => {
                  if (t.options.validateSearch)
                    try {
                      Object.assign(e, Jt(t.options.validateSearch, { ...e, ...m }));
                    } catch {}
                }),
                  (m = e));
              }
              ((m = Yt(m, t, f, e._includeValidateSearch)), (m = ne(o, m)));
              let h = this.options.stringifySearch(m),
                g = t.hash === !0 ? n.hash : t.hash ? x(t.hash, n.hash) : void 0,
                _ = g ? `#${g}` : ``,
                v = t.state === !0 ? n.state : t.state ? x(t.state, n.state) : {};
              v = re(n.state, v);
              let y = `${p}${h}${_}`,
                b,
                S,
                C = !1;
              if (this.rewrite) {
                let e = new URL(y, this.origin),
                  t = kt(this.rewrite, e);
                ((b = e.href.replace(e.origin, ``)),
                  t.origin === this.origin
                    ? (S = t.pathname + t.search + t.hash)
                    : ((S = t.href), (C = !0)));
              } else ((b = D(y)), (S = b));
              return {
                publicHref: S,
                href: b,
                pathname: p,
                search: m,
                searchStr: h,
                state: v,
                hash: g ?? ``,
                external: C,
                unmaskOnReload: t.unmaskOnReload,
              };
            },
            n = (n = {}, r) => {
              let i = t(n),
                a = r ? t(r) : void 0;
              if (!a) {
                let n = Object.create(null);
                if (this.options.routeMasks) {
                  let o = De(i.pathname, this.processedTree);
                  if (o) {
                    Object.assign(n, o.rawParams);
                    let { from: i, params: s, ...c } = o.route,
                      l = Zt(s, n);
                    ((r = { from: e.from, ...c, params: l }), (a = t(r)));
                  }
                }
              }
              return (a && (i.maskedLocation = a), i);
            };
          return e.mask ? n(e, { from: e.from, ...e.mask }) : n(e);
        }),
        (this.commitLocation = async ({ viewTransition: e, ignoreBlocker: t, ...n }) => {
          let r,
            i =
              We(this.latestLocation.href) === We(n.href) &&
              ce(Ut(n.state), Ut(this.latestLocation.state)),
            a = this._commitPromise,
            o,
            s = new Promise((e) => {
              o = e;
            });
          if (
            ((s.resolve = () => {
              (o(), a?.resolve());
            }),
            (this._commitPromise = s),
            i)
          )
            this.load();
          else {
            let { maskedLocation: i, hashScrollIntoView: a, ...o } = n;
            (i &&
              ((o = {
                ...i,
                state: {
                  ...i.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...o,
                    search: o.searchStr,
                    state: {
                      ...o.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (o.state.__tempKey = this.tempLocationKey)),
              (o.state.__hashScrollIntoViewOptions =
                a ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = e),
              (r = n.replace ? `REPLACE` : `PUSH`),
              this.history[r === `REPLACE` ? `replace` : `push`](o.publicHref, o.state, {
                ignoreBlocker: t,
              }),
              this.history.subscribers.size || this.load({ action: { type: r } }));
          }
          return ((this._scroll.next = n.resetScroll ?? !0), this._commitPromise);
        }),
        (this.buildAndCommitLocation = ({
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          viewTransition: r,
          ignoreBlocker: i,
          _redirects: a,
          href: o,
          ...s
        } = {}) => {
          if (o) {
            let t = this.history.location.state.__TSR_index,
              n = Rt(o, { __TSR_index: e ? t : t + 1 }),
              r = new URL(n.pathname, this.origin);
            ((s.to = Ot(this.rewrite, r).pathname),
              (s.search = this.options.parseSearch(n.search)),
              (s.hash = n.hash.slice(1)));
          }
          let c = this.buildLocation({ ...s, _includeValidateSearch: !0 });
          (a && (c._redirects = a), (this._pendingLocation = c));
          let l = this.commitLocation({
            ...c,
            viewTransition: r,
            replace: e,
            resetScroll: t,
            hashScrollIntoView: n,
            ignoreBlocker: i,
          });
          return (
            queueMicrotask(() => {
              this._pendingLocation === c && (this._pendingLocation = void 0);
            }),
            l
          );
        }),
        (this.navigate = async ({ to: e, reloadDocument: t, href: n, publicHref: r, ...i }) => {
          let a = !1;
          if (n)
            try {
              (new URL(`${n}`), (a = !0));
            } catch {}
          if ((a && !t && (t = !0), t)) {
            if (e !== void 0 || !n) {
              let t = this.buildLocation({ to: e, ...i });
              ((n ??= t.publicHref), (r ??= t.publicHref));
            }
            let t = !a && r ? r : n;
            if (fe(t, this.protocolAllowlist)) return;
            if (!i.ignoreBlocker) {
              let e = this.history.getBlockers?.() ?? [];
              for (let t of e)
                if (
                  t?.blockerFn &&
                  (await t.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: `PUSH`,
                  }))
                )
                  return;
            }
            i.replace ? window.location.replace(t) : (window.location.href = t);
            return;
          }
          return this.buildAndCommitLocation({ ...i, href: n, to: e, _isNavigate: !0 });
        }),
        (this.load = async (e) => {
          (this.updateLatestLocation(),
            e?.action &&
              (this._scroll.hash = e.action.type === `PUSH` || e.action.type === `REPLACE`),
            await Jn(this, e));
        }),
        (this.startViewTransition = (e) => {
          let t = this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            t && typeof document.startViewTransition == `function`)
          ) {
            let n;
            if (
              typeof t == `object` &&
              window.CSS?.supports?.(`selector(:active-view-transition-type(a))`)
            ) {
              let r = this.latestLocation,
                i = this.stores.resolvedLocation.get(),
                a = typeof t.types == `function` ? t.types(Ht(r, i)) : t.types;
              if (a === !1) return e();
              n = { update: e, types: a };
            } else n = e;
            return document.startViewTransition(n).updateCallbackDone;
          }
          return e();
        }),
        (this.invalidate = (e) => {
          let t = this._committed,
            n = e?.filter,
            r = this._preloads,
            i = new Set(
              [
                ...t,
                ...this._cache.values(),
                ...[...(r?.values() ?? [])].flat(),
                ...(this._tx?.[3] ?? []),
              ]
                .filter((e) => !n || n(e))
                .map((e) => e.id),
            ),
            a = [];
          for (let [e, t] of r ?? []) t.some((e) => i.has(e.id)) && (r.delete(e), a.push(e));
          let o = (t) => {
            if (i.has(t.id)) {
              let n = this.routesById[t.routeId],
                r = {
                  ...t,
                  invalid: !0,
                  ...((e?.forcePending || t.status === `error` || t.status === `notFound`) && Bt(n)
                    ? { status: `pending`, error: void 0 }
                    : void 0),
                };
              return ((t._flight = void 0), r);
            }
            return t;
          };
          this._committed = t.map(o);
          for (let [t, n] of this._cache)
            i.has(t) && ((n.invalid = !0), e?.forcePending && (n.status = `pending`));
          for (let e of i) this._flights?.delete(e);
          for (let e of a) e.abort();
          return ((this.shouldViewTransition = !1), this.load({ sync: e?.sync }));
        }),
        (this.resolveRedirect = (e) => {
          let t = e.headers.get(`Location`);
          if (!e.options.href || e.options._builtLocation) {
            let t = (e.options._builtLocation ?? this.buildLocation(e.options)).publicHref || `/`;
            ((e.options.href = t), e.headers.set(`Location`, t));
          } else if (t)
            try {
              let n = new URL(t);
              if (this.origin && n.origin === this.origin) {
                let t = n.pathname + n.search + n.hash;
                ((e.options.href = t), e.headers.set(`Location`, t));
              }
            } catch {}
          if (
            e.options.href &&
            !e.options._builtLocation &&
            fe(e.options.href, this.protocolAllowlist)
          )
            throw Error(`Redirect blocked: unsafe protocol`);
          return (e.headers.get(`Location`) || e.headers.set(`Location`, e.options.href), e);
        }),
        (this.clearCache = (e) => {
          let t = this._cache,
            n = this._preloads,
            r = e?.filter,
            i = [],
            a = [];
          for (let [e, n] of t) (!r || r(n)) && (a.push(e), i.push(n));
          let o = [];
          for (let [e, t] of n ?? []) (!r || t.some(r)) && (o.push(e), i.push(...t));
          for (let e of a) t.delete(e);
          for (let e of o) n.delete(e);
          for (let e of i) {
            let t = e._flight;
            ((e._flight = void 0),
              t &&
                !--t[2] &&
                (this._flights?.get(e.id) === t && this._flights.delete(e.id), o.push(t[1])));
          }
          for (let e of o) e.abort();
        }),
        (this.loadRouteChunk = tn),
        (this.preloadRoute = (e) => Yn(this, e)),
        (this.matchRoute = (e, t) => {
          let n = {
              ...e,
              to: e.to ? this.resolvePathWithBase(e.from || ``, e.to) : void 0,
              params: e.params || {},
              leaveParams: !0,
            },
            r = this.buildLocation(n),
            i = this.stores.status.get() === `pending`;
          if (t?.pending && !i) return !1;
          let a =
              (t?.pending ?? !i)
                ? this.latestLocation
                : this.stores.resolvedLocation.get() || this.stores.location.get(),
            o = Oe(
              r.pathname,
              t?.caseSensitive ?? !1,
              t?.fuzzy ?? !1,
              a.pathname,
              this.processedTree,
            );
          return !o || (e.params && !ce(o.rawParams, e.params, { partial: !0 }))
            ? !1
            : (t?.includeSearch ?? !0)
              ? ce(a.search, r.search, { partial: !0 })
                ? o.rawParams
                : !1
              : o.rawParams;
        }),
        (this.getStoreConfig = t),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? `fuzzy`,
          stringifySearch: e.stringifySearch ?? vt,
          parseSearch: e.parseSearch ?? _t,
          protocolAllowlist: e.protocolAllowlist ?? T,
        }),
        (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: t, processedTree: n }) {
      ((this.routesById = e), (this.routesByPath = t), (this.processedTree = n));
      let r = this.options.notFoundRoute;
      r && (r.init({ originalIndex: 99999999999 }), (this.routesById[r.id] = r));
    }
    getRouteBranch(e) {
      let t = this.routeBranchCache.get(e);
      return (t || ((t = Pe(e)), this.routeBranchCache.set(e, t)), t);
    }
    matchRoutesInternal(e, t) {
      let [n, r, i] = this.getMatchedRoutes(e.pathname),
        a = n,
        o = !1;
      (i ? i.path !== `/` && r[`**`] : We(e.pathname)) &&
        (this.options.notFoundRoute ? (a = [...a, this.options.notFoundRoute]) : (o = !0));
      let s = o ? Xt(this.options.notFoundMode, a) : void 0,
        c = Array(a.length),
        l = this._committed,
        u = (e, t) => {
          let n = l[t];
          return n?.routeId === e.id
            ? n
            : e === this.options.notFoundRoute
              ? l.find((t) => t.routeId === e.id)
              : void 0;
        },
        d;
      for (let n = 0; n < a.length; n++) {
        let i = a[n],
          o = c[n - 1],
          l,
          f,
          p;
        {
          let n = o?.search ?? e.search,
            r = o?._strictSearch ?? void 0;
          try {
            let e = Jt(i.options.validateSearch, { ...n }) ?? void 0;
            ((l = { ...n, ...e }), (f = { ...r, ...e }));
          } catch (e) {
            let r = e;
            if ((e instanceof Kt || (r = new Kt(e.message, { cause: e })), t?.throwOnError))
              throw r;
            ((l = n), (f = {}), (p = r));
          }
        }
        let m = ``,
          h = ``;
        try {
          ((m = i.options.loaderDeps?.({ search: l }) ?? ``), (h = (m && JSON.stringify(m)) || ``));
        } catch (e) {
          if (t?.throwOnError) throw e;
          p ??= e;
        }
        let { interpolatedPath: g, usedParams: _ } = Ze({
            path: i.fullPath,
            params: r,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          v = i.id + g + h,
          y = u(i, n),
          b = this._cache.get(v) ?? (y?.id === v ? y : void 0);
        d = b?._strictParams ?? Object.assign(_, d);
        let x;
        if (!b)
          try {
            Qt(i, d);
          } catch (e) {
            if (((x = $e(e) || Ct(e) ? e : new qt(e.message, { cause: e })), t?.throwOnError))
              throw x;
          }
        let S = y ? `stay` : `enter`,
          C;
        if (b)
          C = {
            ...b,
            cause: S,
            search: ne(y ? y.search : b.search, l),
            _strictSearch: f,
            searchError: p,
          };
        else {
          let e = Bt(i) ? `pending` : `success`;
          C = {
            id: v,
            ssr: i.options.ssr,
            index: n,
            routeId: i.id,
            params: y?.params ?? d,
            _strictParams: d,
            pathname: g,
            updatedAt: Date.now(),
            search: y ? ne(y.search, l) : l,
            _strictSearch: f,
            searchError: p,
            status: e,
            isFetching: !1,
            error: void 0,
            paramsError: x,
            context: {},
            abortController: t?._controller ?? new AbortController(),
            cause: S,
            loaderDeps: y ? re(y.loaderDeps, m) : m,
            invalid: !1,
            preload: !1,
            staticData: i.options.staticData || {},
            fullPath: i.fullPath,
          };
        }
        let ee = s === i.id;
        (C._notFound && !ee && (C.error = void 0), (C._notFound = ee), (c[n] = C));
      }
      for (let e = 0; e < c.length; e++) {
        let n = c[e];
        ((n.params = n.cause === `stay` ? ne(n.params, d) : d), t?._controller && (n.context = {}));
      }
      return c;
    }
    matchRoutesLightweight(e) {
      let t = y(this.stores.ids.get()),
        n = t ? this.stores.byRoute.get(t).get() : void 0,
        r = n?.id,
        i = this.lightweightCache.get(e);
      if (i && i[0] === r) return i[1];
      let [a, o] = this.getMatchedRoutes(e.pathname),
        s = y(a),
        c = { ...e.search };
      for (let e of a)
        try {
          Object.assign(c, Jt(e.options.validateSearch, c));
        } catch {}
      let l = n && n.routeId === s.id && n.pathname === e.pathname,
        u;
      if (l) u = n.params;
      else {
        let e = Object.assign(Object.create(null), o);
        for (let t of a)
          try {
            Qt(t, e);
          } catch {}
        u = e;
      }
      let d = [a, s.fullPath, c, u];
      return (this.lightweightCache.set(e, [r, d]), d);
    }
  },
  Kt = class extends Error {},
  qt = class extends Error {};
function Jt(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new Kt(`Async validation not supported`);
    if (n.issues) throw new Kt(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function Yt(e, t, n, r) {
  let i = [];
  for (let e of n) {
    let t = e.options;
    `search` in t
      ? t.search?.middlewares && i.push(...t.search.middlewares)
      : (t.preSearchFilters || t.postSearchFilters) &&
        i.push(({ search: e, next: n }) => {
          let r = n(t.preSearchFilters ? t.preSearchFilters.reduce((e, t) => t(e), e) : e);
          return t.postSearchFilters ? t.postSearchFilters.reduce((e, t) => t(e), r) : r;
        });
    let n = t.validateSearch;
    n &&
      i.push(({ search: e, next: t, meta: i }) => {
        let a = t(e);
        if (r)
          try {
            let e = Jt(n, a);
            if (i && e) for (let t in e) t in a || (i.defaulted ||= new Map()).set(t, e[t]);
            return { ...a, ...e };
          } catch {}
        return a;
      });
  }
  let a = (e, n, r) => {
    if (e >= i.length) {
      if (!t.search) return {};
      if (t.search === !0) return n;
      let e = x(t.search, n);
      return (r && (r.explicit = e), e);
    }
    return i[e]({
      search: n,
      next: (t, n) => {
        if (n) {
          let n = r || {};
          return { search: a(e + 1, t, n), meta: n };
        }
        return a(e + 1, t, r);
      },
      meta: r,
    });
  };
  return a(0, e);
}
function Xt(e, t) {
  if (e !== `root`) {
    let e;
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (r.options.notFoundComponent) return r.id;
      e ||= r.children && r.id;
    }
    if (e) return e;
  }
  return xt;
}
function Zt(e, t) {
  return e === !1 || e === null
    ? Object.create(null)
    : (e ?? !0) === !0
      ? t
      : Object.assign(t, x(e, t));
}
function Qt(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams;
  n && Object.assign(t, n(t));
}
function $t(e, t) {
  return e.options[t]?.preload?.();
}
function en(e, t) {
  let n = $t(e, `component`),
    r = $t(e, `pendingComponent`),
    i = t && r ? r.then(t) : r;
  return (t && !r && t(), n && i ? Promise.all([n, i]).then(() => {}) : (n ?? i));
}
function tn(e, t, n) {
  let r = () => (t === !1 ? void 0 : t ? $t(e, t) : en(e, n)),
    i = e._lazy;
  if (i) return i === !0 ? r() : i.then(r);
  if (!e.lazyFn) return r();
  let a = e.lazyFn().then(
    (t) => {
      {
        let { id: n, ...r } = t.options;
        (Object.assign(e.options, r), (e._lazy = !0));
      }
    },
    (t) => {
      throw ((e._lazy = void 0), t);
    },
  );
  return ((e._lazy = a), a.then(r));
}
function nn(e) {
  let t = e.findIndex((e) => e.status !== `success` || e._notFound) + 1;
  return t && t < e.length ? e.slice(0, t) : e;
}
function rn(e) {
  let t = e.length;
  for (let n = 0; n < t; n++) {
    let r = e[n];
    if (r._assetEnd !== void 0) {
      t = Math.min(t, Math.max(n + 1, r._assetEnd));
      continue;
    }
    if (r.status !== `success` || r._notFound) {
      t = n + 1;
      break;
    }
  }
  return t < e.length ? e.slice(0, t) : e;
}
var an = 0,
  on = 1,
  sn = 2,
  cn = 3,
  ln = 4;
function un(e) {
  return typeof e[0] == `number`;
}
function dn(e, t) {
  return t.aborted
    ? Promise.race([Promise.reject(t), e])
    : new Promise((n, r) => {
        let i = () => r(t);
        (t.addEventListener(`abort`, i, { once: !0 }),
          Promise.resolve(e)
            .then(n, r)
            .finally(() => t.removeEventListener(`abort`, i)));
      });
}
function fn(e, t) {
  return e.routesById[t.routeId];
}
function pn(e, t, n) {
  return Ct(e)
    ? [cn, e]
    : $e(e)
      ? ((e.routeId ||= n), [sn, e])
      : (t && typeof e?.then == `function` && (e = Error(`A Promise was thrown`, { cause: e })),
        t ? [on, e] : [an, e]);
}
function mn(e, t) {
  let n = pn(t, !0, e.id);
  if (n[0] !== on) return n;
  try {
    e.options.onError?.(n[1]);
  } catch (t) {
    n = pn(t, !0, e.id);
  }
  return n;
}
function hn(e, t, n) {
  return n[0].signal.aborted || !n[2]() ? (n[0].abort(), [ln]) : mn(e, t);
}
function gn(e, t) {
  return (n) => e.navigate({ ...n, _fromLocation: t });
}
async function _n(e, t, n, r, i) {
  let [a, o] = t,
    s = n[0].signal,
    c = !!n[4];
  for (let t = n[7] ?? 0; t < r; t++) {
    let r = o[t],
      i = fn(e, r);
    r.abortController = n[0];
    let l = o[t - 1]?.context ?? e.options.context ?? {},
      u = {
        params: r.params,
        location: a,
        navigate: gn(e, a),
        buildLocation: e.buildLocation,
        cause: c ? `preload` : r.cause,
        abortController: n[0],
        preload: c,
        matches: o,
        routeId: i.id,
      },
      d = l;
    try {
      let e = r._ctx;
      (!e &&
        i.options.context &&
        (e = r._ctx = i.options.context({ ...u, deps: r.loaderDeps, context: l }) || {}),
        (d = { ...l, ...e }),
        (r.context = d));
    } catch (a) {
      return (yn(e, r), [t, hn(i, a, n)]);
    }
    if (s.aborted || !n[2]()) return (n[0].abort(), [t, [ln]]);
    let f = r.paramsError ?? r.searchError;
    if (f !== void 0) return (yn(e, r), [t, hn(i, f, n)]);
    let p = i.options.beforeLoad;
    if (!p) continue;
    let m = { ...u, search: r.search, context: d, ...e.options.additionalContext },
      h = r.status;
    (h === `success` && (r.status = `pending`), n[8]?.());
    try {
      wn(e, r, `beforeLoad`, n[0]);
      let a = await dn(p(m), s);
      if (!n[2]()) return (n[0].abort(), [t, [ln]]);
      let o = pn(a, !1, i.id);
      if (o[0] !== an) return (yn(e, r), [t, o]);
      r.context = { ...d, ...a };
    } catch (a) {
      return (yn(e, r), [t, hn(i, a, n)]);
    } finally {
      (h === `success` && r.status === `pending` && (r.status = `success`), wn(e, r, !1, n[0]));
    }
  }
  i();
}
function vn(e, t, n) {
  if (!(!n || --n[2])) {
    if (e._flights?.get(t.id) === n) {
      let n = e._tx;
      if (
        n &&
        !n[0].signal.aborted &&
        !n[3].includes(t) &&
        n[3].some((e) => e.id === t.id) &&
        n[3].some((e) => e.isFetching === `beforeLoad`)
      )
        return;
      e._flights.delete(t.id);
    }
    return n[1];
  }
}
function yn(e, t) {
  let n = t._flight;
  ((t._flight = void 0), vn(e, t, n)?.abort());
}
function bn(e, t, n) {
  let r = [];
  for (let i of t)
    if (!n?.includes(i)) {
      let t = i._flight;
      i._flight = void 0;
      let n = vn(e, i, t);
      n && r.push(n);
    }
  for (let e of r) e.abort();
}
function xn(e, t, n) {
  let r = [];
  for (let i of t)
    if (!n.includes(i)) {
      let t = i._flight;
      if (
        ((i._flight = void 0),
        t?.[2] === 1 && e._flights?.get(i.id) === t && n.some((e) => e.id === i.id))
      )
        t[2] = 0;
      else {
        let n = vn(e, i, t);
        n && r.push(n);
      }
    }
  for (let e of r) e.abort();
}
function Sn(e) {
  let t = [];
  for (let [n, r] of e._flights ?? []) r[2] || (e._flights.delete(n), t.push(r[1]));
  for (let e of t) e.abort();
}
function Cn(e) {
  for (let t of e) {
    let e = t._flight;
    e && e[2]++;
  }
}
function wn(e, t, n, r) {
  if (((t.isFetching = n), r && e._tx?.[0] !== r)) return;
  let i = e.stores.byRoute.get(t.routeId),
    a = i?.get();
  a?.id === t.id && i.set({ ...a, isFetching: n });
}
function Tn(e, t, n, r, i, a, o) {
  let s = t[0];
  return {
    params: n.params,
    location: s,
    navigate: gn(e, s),
    cause: o ? `preload` : n.cause,
    abortController: i,
    preload: o,
    deps: n.loaderDeps,
    parentMatchPromise: a,
    context: n.context,
    route: r,
    ...e.options.additionalContext,
  };
}
async function En(e, t, n, r, i, a, o, s) {
  let c = s.signal;
  if (c.aborted) return [ln];
  if (!i) return [an, void 0];
  let l = n._flight;
  wn(e, n, `loader`, s);
  try {
    if (!l) {
      let s = new AbortController();
      ((l = [
        Promise.resolve()
          .then(() => i(Tn(e, t, n, r, s, a, o)))
          .then(
            (e) => pn(e, !1, r.id),
            (e) => pn(e, !0, r.id),
          )
          .then(
            (t) => (
              t[0] !== an &&
                e._flights?.get(n.id) === l &&
                (e._flights.delete(n.id), l[2] || s.abort()),
              t[0] === on && l[2] ? mn(r, t[1]) : t
            ),
          ),
        s,
        1,
      ]),
        (e._flights ??= new Map()).set(n.id, l));
    }
    return ((n._flight = l), (n.abortController = l[1]), await dn(l[0], c));
  } catch (t) {
    if (t !== c) throw t;
    return (yn(e, n), [ln]);
  } finally {
    wn(e, n, !1, s);
  }
}
function Dn(e, t, n) {
  t[0] === an
    ? ((e.loaderData = t[1]),
      (e.error = void 0),
      (e.status = `success`),
      (e.invalid = !1),
      (e.updatedAt = Date.now()),
      (e.preload = n))
    : t[0] !== cn && ((e.status = `success`), (e.error = void 0), (e.invalid = !0));
}
function On(e, t, n) {
  let r = e._cache.get(t.id);
  if (r !== n || e._committed.some((e) => e.id === t.id && e._flight === t._flight)) return;
  let i = { ...t, _notFound: void 0, context: {} };
  (i._flight && i._flight[2]++, e._cache.set(t.id, i), r && yn(e, r));
}
function kn(e, t) {
  return t[0] === on || t[0] === sn
    ? { ...e, status: t[0] === on ? `error` : `notFound`, error: t[1], _flight: void 0 }
    : e;
}
function An(e, t, n, r, i, a) {
  let o = t[1][n],
    s = fn(e, o),
    c = !!a[4],
    l = c ? e._cache.get(o.id) : void 0,
    u,
    d = !1,
    f;
  try {
    if (
      (o.status === `success` &&
        ((u = s.options.shouldReload),
        typeof u == `function` && (u = u(Tn(e, t, o, s, a[0], i, c))),
        a[2]() || (a[0].abort(), (f = [ln]))),
      !f)
    ) {
      if (o.status !== `success`) d = !0;
      else {
        let t =
          a[4] || o.preload
            ? (s.options.preloadStaleTime ?? e.options.defaultPreloadStaleTime ?? 3e4)
            : (s.options.staleTime ?? e.options.defaultStaleTime ?? 0);
        d = !!(
          o.invalid ||
          u ||
          (u === void 0 &&
            Date.now() - o.updatedAt >= t &&
            (a[6] ||
              o.cause === `enter` ||
              a[3].some((e) => e.routeId === o.routeId && e.id !== o.id)))
        );
      }
    }
  } catch (t) {
    ((o.invalid = !0), yn(e, o), (f = hn(s, t, a)));
  }
  let p = s.options.loader,
    m = typeof p == `function` ? p : p?.handler,
    h = (!c || s.options.preload !== !1) && p ? e._flights?.get(o.id) : void 0;
  h === o._flight || f
    ? (h = void 0)
    : h && !d && !c && u === void 0
      ? (d = !0)
      : d || (h = void 0);
  let g = !!(
      p &&
      d &&
      o.status === `success` &&
      !c &&
      !a[5] &&
      ((typeof p == `function` ? void 0 : p?.staleReloadMode) ??
        e.options.defaultStaleReloadMode) !== `blocking`
    ),
    _ = d && (!c || s.options.preload !== !1),
    v = _ && !g && (o.status !== `success` || !!p),
    y = s.lazyFn && s._lazy !== !0 ? a[8] : void 0;
  if ((_ && !p && ((o.invalid = !1), (o.updatedAt = Date.now())), h && h[2]++, v)) {
    let t = o._flight;
    ((o._flight = h),
      vn(e, o, t)?.abort(),
      o.status === `success` && (o.status = `pending`),
      a[8]?.());
  }
  _ || (o.isFetching = !1);
  let b = (
      f
        ? Promise.resolve(f)
        : v
          ? En(e, t, o, s, m, i, c, a[0])
          : Promise.resolve([an, o.loaderData])
    ).then(
      (t) => (
        v &&
          (Dn(o, t, c),
          t[0] === an && (c && p && !a[0].signal.aborted && On(e, o, l), (o.status = `pending`))),
        t
      ),
    ),
    x = dn(
      Promise.resolve().then(() => tn(s, void 0, y)),
      a[0].signal,
    )
      .then(
        () => void 0,
        (e) => [n, hn(s, e, a)],
      )
      .then((e) =>
        b.then(
          (t) => (
            v &&
              !e &&
              t[0] === an &&
              o.status === `pending` &&
              a[2]() &&
              ((o.status = `success`), a[8]?.()),
            e
          ),
        ),
      );
  if ((r.push([n, b, x]), !g)) return b.then((e) => kn(o, e));
  let S = { ...o, status: `pending`, preload: !1, _flight: h };
  ((o.invalid = !1), (o.isFetching = `loader`));
  let C = En(e, t, S, s, m, i, !1, a[0]).then((e) => ((o.isFetching = !1), Dn(S, e, !1), e));
  return ((t[2] ??= []).push([n, C, x, S]), C.then((e) => kn(S, e)));
}
async function jn(e, t, n, r, i = 0) {
  let a = n?.[1][1],
    o = a?.routeId ? t.findIndex((e) => e.routeId === a.routeId) : (n?.[0] ?? t.length - 1);
  o < 0 && (o = 0);
  for (let n = o; n >= 0; n--) {
    let i = fn(e, t[n]),
      a = tn(i, !1);
    if (a)
      try {
        await dn(a, r);
      } catch (e) {
        if (e === r) throw e;
      }
    if (i.options.notFoundComponent) return n;
  }
  return a?.routeId ? o : i;
}
function Mn(e, t) {
  t[2] &&=
    (bn(
      e,
      t[2].map((e) => e[3]),
    ),
    void 0);
}
async function Nn(e, t, n, r) {
  let i;
  try {
    await Promise.all(
      e.map((e) =>
        e[1].then(async (t) => {
          let a = e[0];
          if (!(r && a >= (await r))) {
            if (t[0] >= cn) throw [a, t];
            !i &&
              t[0] !== an &&
              ((i = [a, t]),
              await Promise.all(
                (n ?? []).map((e) => {
                  if (!(e[0] <= a))
                    return e[1].then((t) => {
                      if (t[0] === cn) throw [e[0], t];
                    });
                }),
              ));
          }
        }),
      ),
    );
  } catch (e) {
    return e;
  }
  return t ?? i;
}
async function Pn(e, t, n, r, i, a, o) {
  let s = t[1],
    c = await a,
    l = !1,
    u = s.findIndex((e) => e._notFound),
    d = (t) => (t[1][0] === sn ? jn(e, s, t, r.signal) : t[0]),
    f = u < 0 ? s.length : u;
  if ((c?.[1][0] ?? 0) >= cn) f = 0;
  else if (c) {
    f = c[2] ??= await d(c);
    for (let e of n) {
      if (e[0] >= f) break;
      let t = await e[1];
      if (t[0] !== an && t[0] < cn && !(`loaderData` in s[e[0]])) {
        ((c = [e[0], t]), (f = c[2] = await d(c)));
        break;
      }
    }
  }
  for (let e of n) {
    if (e[0] >= f) break;
    let t = await e[2];
    if (t) {
      c = t;
      break;
    }
  }
  if ((c?.[1][0] ?? 0) >= cn) {
    let n = c[1];
    if (n[0] !== cn || n[1].options.reloadDocument || i < 20) return (Mn(e, t), n);
    ((l = !0), (c = [0, [on, Error(`Too many redirects`)]]));
  }
  let p = c ? (c[2] ?? (await d(c))) : u;
  if (p >= 0) {
    let i = c?.[1],
      a = i?.[0],
      u = s[p],
      d = i?.[1],
      f = () => {
        i &&
          ((u._notFound = void 0),
          a === on
            ? (u.status = `error`)
            : ((d.routeId = u.routeId),
              u.routeId === e.routeTree.id
                ? ((u.status = `success`), (u._notFound = !0))
                : (u.status = `notFound`)),
          (u.error = d),
          (u.isFetching = !1));
      };
    f();
    try {
      await dn(
        i
          ? Promise.resolve().then(() =>
              tn(fn(e, u), a === on ? `errorComponent` : `notFoundComponent`),
            )
          : Promise.all([tn(fn(e, u)), tn(fn(e, u), `notFoundComponent`)]),
        r.signal,
      );
    } catch (n) {
      if (n === r.signal) return (Mn(e, t), [ln]);
    }
    i
      ? l &&
        (r.abort(),
        await Promise.all([
          ...n.map((e) => e[1]),
          ...n.map((e) => e[2]),
          ...(t[2] ?? []).map((e) => e[1]),
        ]),
        Mn(e, t),
        bn(e, s),
        f())
      : ((u.status = `success`), o?.());
  }
  return t;
}
async function Fn(e, t, n, r = 0, i = t[1].length) {
  let a = t[1];
  for (let t = r; t < i; t++) {
    let r = a[t],
      i = fn(e, r).options;
    if (i.head || i.scripts)
      try {
        let t = {
            ssr: e.options.ssr,
            matches: a,
            match: r,
            params: r.params,
            loaderData: r.loaderData,
          },
          [o, s] = await dn(Promise.all([i.head?.(t), i.scripts?.(t)]), n);
        ((r.meta = o?.meta),
          (r.links = o?.links),
          (r.headScripts = o?.scripts),
          (r.styles = o?.styles),
          (r.scripts = s));
      } catch (e) {
        if (e === n) break;
        console.error(e);
      }
    if (r.status !== `success` || r._notFound) break;
  }
  return t;
}
async function In(e, t, n, r) {
  let i = [t, n],
    a = n.findIndex((e) => e._notFound);
  if (e.options.notFoundMode !== `root` && a >= 0) {
    let t = await jn(e, i[1], void 0, r[0].signal, a);
    (t !== a && ((n[a]._notFound = void 0), (n[t]._notFound = !0)), (a = t));
  }
  let o = a < 0 ? n.length : a + 1,
    s = [],
    c = r[7] ?? 0,
    l = c ? Promise.resolve(i[1][c - 1]) : void 0,
    u = () => {
      for (let t = c; t < o && !r[0].signal.aborted; t++) l = An(e, i, t, s, l, r);
    },
    d = await _n(e, i, r, o, u);
  (d &&
    ((r[5] = !0),
    (o = d[0]),
    d[1][0] === sn
      ? ((d[2] = await jn(e, i[1], d, r[0].signal)), (o = Math.min(o, d[2] + 1)))
      : d[1][0] >= cn && (o = 0),
    u()),
    r[2]() && !r[4] && Sn(e));
  let f;
  try {
    let t = Pn(e, i, s, r[0], r[1], Nn(s, d, i[2]), r[8]);
    (i[2]?.length &&
      (i[3] = Nn(
        i[2],
        void 0,
        void 0,
        t.then(
          (e) => (un(e) ? 0 : nn(e[1]).length),
          () => 0,
        ),
      )),
      (f = await t));
  } catch (t) {
    throw (Mn(e, i), t);
  }
  return un(f) ? f : Fn(e, f, r[0].signal, r[7] === f[1].length ? r[7] : 0);
}
function Ln(e, t) {
  let n = e.stores.matches.get();
  for (let r = 0; r < t.length; r++) {
    let i = t[r],
      a = i.status === `success`,
      o = a && n[r]?.id === i.id && n[r]?.status === `pending`;
    if (a && !o) continue;
    let s = fn(e, i),
      c = o || i.invalid ? 0 : (s.options.pendingMs ?? e.options.defaultPendingMs),
      l = s.options.pendingComponent ?? e.options.defaultPendingComponent;
    return l && typeof c == `number` && c !== 1 / 0
      ? [c, r, s.options.pendingMinMs ?? e.options.defaultPendingMinMs ?? 0, l]
      : void 0;
  }
}
function Rn(e, t) {
  if (e._tx !== t) return;
  let n = e._pending,
    r = !1,
    i = n?.[0][3][n[1]]?.id;
  n?.[0] !== t &&
    (n && t[3][n[1]]?.id === i
      ? ((n[0] = t), (r = !0))
      : (clearTimeout(n?.[3]), (e._pending = n = void 0)));
  let a = Ln(e, t[3]);
  if (!a) return;
  let [o, s, c, l] = a,
    u = t[3][s].id;
  if (!n || n[1] !== s || i !== u) {
    clearTimeout(n?.[3]);
    let r = e.stores.matches.get()[s],
      i = r?.id === u && r.status === `pending`;
    e._pending = n = [
      t,
      s,
      i ? Date.now() + c : t[4] + o,
      void 0,
      i ? Promise.resolve(!0) : void 0,
      l,
    ];
  }
  if (n[4] && !r && n[5] === l) return;
  if (((n[5] = l), !n[4])) {
    clearTimeout(n[3]);
    let r = n[2] - Date.now();
    if (r > 0) {
      n[3] = setTimeout(() => {
        Rn(e, t);
      }, r);
      return;
    }
    n[2] = 0;
  }
  let d = t[3].map((e) => ({ ...e, _flight: void 0 }));
  d[s].status = `pending`;
  let f = e
    .startTransition(() => e.stores.setMatches(d), d)
    .then((t) => (t && e._pending === n && n[4] === f && !n[2] && (n[2] = Date.now() + c), t));
  n[4] = f;
}
function zn(e, t) {
  let n = e._pending;
  n?.[0] === t && (clearTimeout(n[3]), (e._pending = void 0));
}
function Bn(e, t) {
  ((e._committed = t), e.stores.setMatches(t));
}
function Vn(e, t) {
  (bn(e, t[1]), Mn(e, t));
}
function Hn(e, t, n, r) {
  let i = e._committed,
    a = e._cache;
  for (let e of n) ((e.preload = !1), r && (e._assetEnd = void 0));
  let o = nn(n).length,
    s = new Map(),
    c = Date.now();
  for (let t of [...i, ...a.values()]) {
    if (
      t.status !== `success` ||
      n.some((e, n) => e.id === t.id && (n < o || e.status === `success`))
    )
      continue;
    let r = fn(e, t);
    !r.options.loader ||
      c - t.updatedAt >=
        (t.preload
          ? (r.options.preloadGcTime ?? e.options.defaultPreloadGcTime ?? 3e5)
          : (r.options.gcTime ?? e.options.defaultGcTime ?? 3e5)) ||
      s.set(t.id, a.get(t.id) === t ? t : { ...t, _flight: void 0, isFetching: !1, context: {} });
  }
  ((t[3] = []),
    (e._cache = s),
    Bn(e, n),
    bn(e, [...a.values(), ...i], [...n, ...s.values()]),
    Wt(e, i, n, () => e._tx === t));
}
async function Un(e, t) {
  let n = e._tx;
  for (; n && n !== t;) {
    if ((await n[5], e._tx === n)) return;
    n = e._tx;
  }
}
async function Wn(e, t, n) {
  await e.navigate({ ...n.options, replace: !0, ignoreBlocker: !0, _redirects: t[1] + 1 });
}
function Gn(e, t) {
  (zn(e, t),
    t[0].abort(),
    bn(e, t[3]),
    (t[3] = []),
    e._tx === t &&
      (e.batch(() => {
        (e.stores.status.set(`idle`), e.stores.setMatches(e._committed));
      }),
      e._tx === t && (e._commitPromise?.resolve(), (e._commitPromise = void 0))));
}
async function Kn(e, t, n, r, i) {
  let a = n.map((e) => ({ ...e }));
  Cn(a);
  for (let t of r) (yn(e, a[t[0]]), (a[t[0]] = t[3]));
  let o = [t[2], a],
    s;
  try {
    s = await Pn(e, o, r, t[0], t[1], i);
  } catch (t) {
    throw (bn(e, a), t);
  }
  if (un(s)) {
    (bn(e, a), s[0] === cn && e._tx === t && e._committed === n && (await Wn(e, t, s[1])));
    return;
  }
  let c = await Fn(e, s, t[0].signal);
  if (e._tx !== t || e._committed !== n) {
    bn(e, c[1]);
    return;
  }
  for (let t of c[1]) {
    let n = e._cache.get(t.id);
    n?._flight && n._flight === t._flight && (e._cache.delete(t.id), yn(e, n));
  }
  (Bn(e, c[1]), bn(e, n, c[1]));
}
async function qn(e, t, n, r, i, a) {
  let o = [t[0], t[1], () => e._tx === t && !!t[3].length, e._committed, void 0, i, n, a, r],
    s = await In(e, t[2], t[3], o);
  if (un(s)) {
    s[0] === cn && e._tx === t
      ? (zn(e, t), bn(e, t[3]), (t[3] = []), e._tx === t && (await Wn(e, t, s[1])))
      : Gn(e, t);
    return;
  }
  let c = e._pending;
  if (c?.[0] === t && (clearTimeout(c[3]), c[4])) {
    let n = t[0].signal,
      r = !1;
    try {
      r = await dn(c[4], n);
    } catch (e) {
      if (e !== n) throw e;
    }
    if (r && e._pending === c && c[0] === t) {
      let e = c[2] - Date.now();
      if (e > 0) {
        try {
          await dn(
            new Promise((t) => {
              c[3] = setTimeout(t, e);
            }),
            n,
          );
        } catch {}
        clearTimeout(c[3]);
      }
    }
  }
  if (e._tx !== t) {
    (zn(e, t), Vn(e, s));
    return;
  }
  let l = t[2],
    u = Ht(l, e.stores.resolvedLocation.get()),
    d = s[2];
  await e.startViewTransition(async () => {
    if (e._tx !== t) {
      Vn(e, s);
      return;
    }
    let n = await e.startTransition(() => {
      (zn(e, t),
        Hn(e, t, s[1], a),
        e._tx === t &&
          (e.emit({ type: `onLoad`, ...u }),
          e._tx === t && e.emit({ type: `onBeforeRouteMount`, ...u })));
    }, s[1]);
    if (e._tx !== t) {
      Mn(e, s);
      return;
    }
    (d?.length && Kn(e, t, s[1], d, s[3]).catch(console.error),
      e.batch(() => {
        (e.stores.resolvedLocation.set(l),
          e.stores.status.set(`idle`),
          e._tx === t && e.emit({ type: `onResolved`, ...u }),
          n && e._tx === t && e.emit({ type: `onRendered`, ...u }));
      }),
      e._tx === t && (e._commitPromise?.resolve(), (e._commitPromise = void 0)));
  });
}
async function Jn(e, t) {
  let n = e._tx,
    r = e.stores.resolvedLocation.get(),
    i = r ?? e.stores.location.get(),
    a = e.latestLocation,
    o = e._pendingLocation,
    s = o?.href === a.href ? (o._redirects ?? 0) : 0,
    c = e._handoff,
    l = c?.[0](),
    u = new AbortController(),
    d = e._preflight;
  if (((e._preflight = u), l || c?.[1](), d?.abort(), u.signal.aborted)) {
    await Un(e, n);
    return;
  }
  let f = Ht(a, r);
  if (
    (e.emit({ type: `onBeforeNavigate`, ...f }),
    u.signal.aborted || e.emit({ type: `onBeforeLoad`, ...f }),
    u.signal.aborted)
  ) {
    await Un(e, n);
    return;
  }
  let p = i.href === a.href,
    m,
    h = u;
  try {
    ((m = e.matchRoutes(a, { _controller: u })), Cn(m));
  } catch (t) {
    if ((u.abort(), !Ct(t))) {
      (await Un(e), e._commitPromise?.resolve(), (e._commitPromise = void 0));
      return;
    }
    (await e.navigate({ ...t.options, replace: !0, ignoreBlocker: !0 }), await Un(e, n));
    return;
  }
  let g = l ? c[1](m) : void 0;
  if ((g ? (h = l) : l?.abort(), u.signal.aborted)) {
    (bn(e, m), await Un(e, n));
    return;
  }
  e._preflight = void 0;
  let _ = [
    h,
    s,
    a,
    m,
    Date.now(),
    Promise.resolve()
      .then(() => qn(e, _, p, () => Rn(e, _), t?.sync, g))
      .catch(() => {
        e._tx === _ && Gn(e, _);
      }),
  ];
  if (((e._tx = _), n)) {
    for (let t of e.stores.matches.get()) {
      if (e._tx !== _) break;
      t.isFetching && wn(e, t, !1);
    }
    (n[0].abort(), xn(e, n[3], _[3]));
  }
  if (e._tx !== _) {
    (bn(e, _[3]), (_[3] = []), await Un(e, _));
    return;
  }
  (e.batch(() => {
    (e.stores.status.set(`pending`), e.stores.location.set(a));
  }),
    Rn(e, _));
  try {
    await _[5];
  } finally {
    await Un(e, _);
  }
}
async function Yn(e, t, n = 0) {
  if (n > 20) return;
  let r = t._builtLocation ?? e.buildLocation(t),
    i = e._committed,
    a = new AbortController(),
    o;
  try {
    ((o = e.matchRoutes(r, { _controller: a })), Cn(o));
  } catch (e) {
    (a.abort(), $e(e) || console.error(e));
    return;
  }
  (e._preloads ??= new Map()).set(a, o);
  let s;
  try {
    let t;
    try {
      t = await In(e, r, o, [a, n, () => !0, i, !0]);
    } finally {
      ((s = e._preloads.delete(a)), bn(e, o), a.abort());
    }
    if (!un(t)) return t[1];
    if (s && t[0] === cn && !t[1].options.reloadDocument)
      return Yn(e, { ...t[1].options, _fromLocation: r }, n + 1);
  } catch (e) {
    $e(e) || console.error(e);
  }
}
async function Xn(e) {
  let t = window.$_TSR,
    n = e.options.serializationAdapters;
  (n?.length &&
    ((t.t = new Map(n.map((e) => [e.key, e.fromSerializable]))), t.buffer.forEach((e) => e())),
    (t.initialized = !0));
  let r = t.router;
  ((e.ssr = { manifest: r.manifest }),
    (e.options.ssr = { nonce: document.querySelector(`meta[property="csp-nonce"]`)?.content }));
  let i = r.matches,
    a = new AbortController(),
    o = e._preflight;
  ((e._preflight = a), o?.abort());
  let s = () => e._preflight === a,
    c,
    l,
    u,
    d;
  try {
    if ((await dn(e.options.hydrate?.(r.dehydratedData), a.signal), !s())) return;
    let t = e.history.location;
    ((u = t.href),
      (d = t.state),
      e.updateLatestLocation(),
      (c = e.latestLocation),
      e.stores.location.set(c),
      (l = e.matchRoutes(c, { _controller: a })));
  } catch (t) {
    if ((s() && (e._preflight = void 0), a.abort(t), t !== a.signal)) throw t;
  }
  if (!s()) return;
  let f = [],
    p,
    m = 0,
    h = (t) => {
      m = Math.min(m, t + 1);
      let n = f.splice(t);
      for (let t of n)
        fn(e, t).options.loader &&
          (t.status === `success` || (!t.invalid && `loaderData` in t)) &&
          On(e, { ...t, status: `success`, error: void 0, preload: !0 }, e._cache.get(t.id));
      bn(e, n);
    },
    g = i.length > l.length ? l.findIndex((e) => e._notFound) + 1 : i.length,
    _ = !1;
  for (let t = 0; t < g; t++) {
    let n = l[t],
      r = i[t];
    if (typeof r.i != `string` || Tt(r.i) !== n.id) {
      p ??= t;
      break;
    }
    m = t + 1;
    let a = fn(e, n);
    if (
      ((`l` in r || (r.s === `success` && r.e === void 0 && a.options.loader)) &&
        (n.loaderData = r.l),
      (n.status = r.s),
      (n.ssr = r.ssr),
      (a.options.ssr = n.ssr),
      (n.updatedAt = r.u),
      (n.error = r.e),
      (n._notFound ||= r.g),
      n.status === `error` || n.status === `notFound` || n._notFound)
    ) {
      ((_ = !0), f.push(n), (n.ssr === !1 || n.ssr === `data-only`) && (p ??= t));
      break;
    }
    if (n.status === `pending`) {
      p ??= t;
      break;
    }
    (f.push(n), n.ssr === `data-only` && (p ??= t));
  }
  !_ && f.length === g && g < l.length && (p = g);
  let v = f.map(async (t) => {
      try {
        let n = fn(e, t);
        return (
          t._notFound
            ? await Promise.all([tn(n), tn(n, `notFoundComponent`)])
            : await tn(
                n,
                t.status === `error`
                  ? `errorComponent`
                  : t.status === `notFound`
                    ? `notFoundComponent`
                    : void 0,
              ),
          !0
        );
      } catch {
        return !1;
      }
    }),
    y = 0;
  try {
    for (; y < v.length && (await dn(v[y], a.signal));) y++;
  } catch {
    return;
  }
  if (!s()) return;
  y < f.length && h(y);
  let b = Math.max(p === f.length ? f.length + 1 : f.length, y < v.length ? y : m);
  for (let t = 0; t < b; t++) {
    let n = l[t],
      r = fn(e, n),
      o = l[t - 1]?.context ?? e.options.context ?? {},
      u;
    if (r.options.context) {
      try {
        u = n._ctx =
          r.options.context({
            deps: n.loaderDeps,
            params: n.params,
            context: o,
            location: c,
            navigate: gn(e, c),
            buildLocation: e.buildLocation,
            cause: n.cause,
            abortController: a,
            preload: !1,
            matches: l,
            routeId: r.id,
          }) || {};
      } catch {
        if (!s()) return;
        if (n.status !== `error` && n.status !== `notFound` && !n._notFound) {
          h(t);
          break;
        }
      }
      if (!s()) return;
    }
    n.context = { ...o, ...u, ...(f[t] && i[t].b) };
  }
  if ((await Fn(e, [c, l], a.signal, 0, m), !s())) return;
  let x = p !== void 0 || f.length < g,
    S = _ && f.length === g ? l : f,
    C = x ? l : S,
    ee;
  if (x && p !== void 0) {
    let e = C[p];
    ((ee = e.ssr === `data-only` && m > p + 1 ? m : void 0),
      (C = C.slice()),
      (C[p] = {
        ...e,
        status: `pending`,
        ssr: e.ssr === `data-only` && `data-only`,
        _assetEnd: ee,
      }));
  }
  let te = () => {
      let t = e.history.location;
      return x &&
        !e._tx &&
        t.href === u &&
        t.state === d &&
        e._committed === S &&
        S.length &&
        !a.signal.aborted
        ? a
        : void 0;
    },
    ne = [
      te,
      (t) => {
        if (e._handoff !== ne) return;
        e._handoff = void 0;
        let n = S.length;
        if (!t || !te() || S.some((e, n) => e.id !== t[n]?.id)) {
          a.abort();
          return;
        }
        let r = ee;
        if (r !== void 0) {
          for (let e = n; e < r; e++)
            if (l[e]?.id !== t[e]?.id) {
              r = e > p + 1 ? e : void 0;
              break;
            }
        }
        let i = S.map((e) => ({ ...e }));
        (r !== void 0 && (i[p]._assetEnd = r), bn(e, t.splice(0, n, ...i)));
        for (let e = n; e < t.length; e++) {
          let n = t[e],
            r = l[e];
          (r?.id === n.id && r._ctx && (n._ctx = r._ctx), (n.abortController = a));
        }
        return n;
      },
    ];
  ((e._committed = S),
    (e._handoff = ne),
    (e._preflight = void 0),
    e.batch(() => {
      (e.stores.setMatches(C),
        e.stores.status.set(`idle`),
        x || e.stores.resolvedLocation.set(e.stores.location.get()));
    }));
}
var Zn = Symbol.for(`TSR_DEFERRED_PROMISE`);
function Qn(e, t) {
  let n = e;
  return n[Zn]
    ? n
    : ((n[Zn] = { status: `pending` }),
      n
        .then((e) => {
          ((n[Zn].status = `success`), (n[Zn].data = e));
        })
        .catch((e) => {
          ((n[Zn].status = `error`),
            (n[Zn].error = { data: (t?.serializeError ?? Vt)(e), __isServerError: !0 }));
        }),
      n);
}
var $n = `Error preloading route! ☝️`;
function er(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function tr(e) {
  return e?.scriptFormat ?? `module`;
}
function nr(e, t, n) {
  let r = rr(t),
    i = er(n, `script`) ?? r.crossOrigin;
  return {
    ...(tr(e) === `iife` ? { rel: `preload`, as: `script` } : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function rr(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function ir(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  let n = new Set();
  for (let r of t) {
    let t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function ar(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
var or = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          this.originalIndex = e.originalIndex;
          let t = this.options,
            n = !t?.path && !t?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = xt) : this.parentRoute || ge());
          let r = n ? xt : t?.path;
          r && r !== `/` && (r = Ue(r));
          let i = t?.id || r,
            a = n ? xt : Ve([this.parentRoute.id === `__root__` ? `` : this.parentRoute.id, i]);
          (r === `__root__` && (r = `/`), a !== `__root__` && (a = Ve([`/`, a])));
          let o = a === `__root__` ? `/` : Ve([this.parentRoute.fullPath, r]);
          ((this._path = r), (this._id = a), (this._fullPath = o), (this._to = We(o)));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => St({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  sr = class extends or {
    constructor(e) {
      super(e);
    }
  },
  cr = Symbol.asyncIterator,
  lr = Symbol.hasInstance,
  ur = Symbol.isConcatSpreadable,
  dr = Symbol.iterator,
  fr = Symbol.match,
  pr = Symbol.matchAll,
  mr = Symbol.replace,
  hr = Symbol.search,
  gr = Symbol.species,
  _r = Symbol.split,
  vr = Symbol.toPrimitive,
  yr = Symbol.toStringTag,
  br = Symbol.unscopables,
  xr = {
    [cr]: 0,
    [lr]: 1,
    [ur]: 2,
    [dr]: 3,
    [fr]: 4,
    [pr]: 5,
    [mr]: 6,
    [hr]: 7,
    [gr]: 8,
    [_r]: 9,
    [vr]: 10,
    [yr]: 11,
    [br]: 12,
  },
  Sr = {
    0: cr,
    1: lr,
    2: ur,
    3: dr,
    4: fr,
    5: pr,
    6: mr,
    7: hr,
    8: gr,
    9: _r,
    10: vr,
    11: yr,
    12: br,
  },
  Cr = { 2: !0, 3: !1, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  wr = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  Tr = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function k(e, t, n, r, i, a, o, s, c, l, u, d) {
  return { t: e, i: t, s: n, c: r, m: i, p: a, e: o, a: s, f: c, b: l, o: u, l: d };
}
function Er(e) {
  return k(2, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
var Dr = Er(2),
  Or = Er(3),
  kr = Er(1),
  Ar = Er(0),
  jr = Er(4),
  Mr = Er(5),
  Nr = Er(6),
  Pr = Er(7);
function Fr(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return;
  }
}
function Ir(e) {
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    ((r = Fr(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1)));
  return (n === 0 ? (t = e) : (t += e.slice(n)), t);
}
function Lr(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function Rr(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Lr);
}
var zr = `__SEROVAL_REFS__`,
  Br = new Map(),
  Vr = new Map();
function Hr(e) {
  return Br.has(e);
}
function Ur(e) {
  return Vr.has(e);
}
function Wr(e) {
  if (Hr(e)) return Br.get(e);
  throw new Ni(e);
}
function Gr(e) {
  if (Ur(e)) return Vr.get(e);
  throw new Pi(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, zr, {
      value: Vr,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, zr, {
        value: Vr,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, zr, {
          value: Vr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, zr, {
          value: Vr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Kr(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function qr(e) {
  let t = wr[Kr(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function Jr(e, t) {
  let n = qr(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    ((o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack` ? t & 4 && ((n ||= {}), (n[o] = e[o])) : ((n ||= {}), (n[o] = e[o]))));
  return n;
}
function Yr(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : +!Object.isExtensible(e);
}
function Xr(e) {
  switch (e) {
    case 1 / 0:
      return Mr;
    case -1 / 0:
      return Nr;
  }
  return e === e
    ? Object.is(e, -0)
      ? jr
      : k(0, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
    : Pr;
}
function Zr(e) {
  return k(
    1,
    void 0,
    Ir(e),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Qr(e) {
  return k(
    3,
    void 0,
    `` + e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function $r(e) {
  return k(4, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function ei(e, t) {
  let n = t.valueOf();
  return k(
    5,
    e,
    n === n ? t.toISOString() : ``,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ti(e, t, n) {
  return k(36, e, n.toString(), t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function ni(e, t) {
  return k(
    6,
    e,
    void 0,
    Ir(t.source),
    t.flags,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ri(e, t) {
  return k(17, e, xr[t], void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function ii(e, t) {
  return k(
    18,
    e,
    Ir(Wr(t)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ai(e, t, n) {
  return k(25, e, n, Ir(t), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function oi(e, t, n) {
  return k(9, e, void 0, void 0, void 0, void 0, void 0, n, void 0, void 0, Yr(t), void 0);
}
function si(e, t) {
  return k(21, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function ci(e, t, n) {
  return k(
    15,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function li(e, t, n) {
  return k(
    16,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function ui(e, t, n) {
  return k(
    20,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.byteLength,
  );
}
function di(e, t, n) {
  return k(13, e, Kr(t), void 0, Ir(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0);
}
function fi(e, t, n) {
  return k(14, e, Kr(t), void 0, Ir(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0);
}
function pi(e, t) {
  return k(7, e, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, void 0);
}
function mi(e, t) {
  return k(
    28,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function hi(e, t) {
  return k(
    30,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function gi(e, t, n) {
  return k(31, e, void 0, void 0, void 0, void 0, void 0, n, t, void 0, void 0, void 0);
}
function _i(e, t) {
  return k(32, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function vi(e, t) {
  return k(33, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function yi(e, t) {
  return k(34, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function bi(e, t, n, r) {
  return k(35, e, n, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, r);
}
var { toString: xi } = Object.prototype,
  Si = { parsing: 1, serialization: 2, deserialization: 3 };
function Ci(e) {
  return `Seroval Error (step: ${Si[e]})`;
}
var wi = (e, t) => Ci(e),
  Ti = class extends Error {
    constructor(e, t) {
      (super(wi(e, t)), (this.cause = t));
    }
  },
  Ei = class extends Ti {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  Di = class extends Ti {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function Oi(e) {
  return `Seroval Error (specific: ${e})`;
}
var ki = class extends Error {
    constructor(e) {
      (super(Oi(1)), (this.value = e));
    }
  },
  Ai = class extends Error {
    constructor(e) {
      super(Oi(2));
    }
  },
  ji = class extends Error {
    constructor(e) {
      super(Oi(3));
    }
  },
  Mi = class extends Error {
    constructor(e) {
      super(Oi(4));
    }
  },
  Ni = class extends Error {
    constructor(e) {
      (super(Oi(5)), (this.value = e));
    }
  },
  Pi = class extends Error {
    constructor(e) {
      super(Oi(6));
    }
  },
  Fi = class extends Error {
    constructor(e) {
      super(Oi(7));
    }
  },
  Ii = class extends Error {
    constructor(e) {
      super(Oi(8));
    }
  },
  Li = class extends Error {
    constructor(e) {
      super(Oi(9));
    }
  },
  Ri = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  zi = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        ((e.s = t), (e.f = n));
      })),
      e
    );
  },
  Bi = () => {
    let e = [],
      t = [],
      n = !0,
      r = !1,
      i = 0,
      a = {
        flush(e, n, r) {
          for (r = 0; r < i; r++) t[r] && t[r][n](e);
        },
        up(t, i, a, o) {
          for (i = 0, a = e.length; i < a; i++)
            ((o = e[i]), !n && i === a - 1 ? t[r ? `return` : `throw`](o) : t.next(o));
        },
        on(e, r) {
          return (
            n && ((r = i++), (t[r] = e)),
            a.up(e),
            () => {
              n && ((t[r] = t[i]), (t[i--] = void 0));
            }
          );
        },
      };
    return {
      __SEROVAL_STREAM__: !0,
      on(e) {
        return a.on(e);
      },
      next(t) {
        n && (e.push(t), a.flush(t, `next`));
      },
      throw(i) {
        n && (e.push(i), a.flush(i, `throw`), (n = !1), (r = !1), (t.length = 0));
      },
      return(i) {
        n && (e.push(i), a.flush(i, `return`), (n = !1), (r = !0), (t.length = 0));
      },
    };
  },
  Vi = (e) => (t) => () => {
    let n = 0,
      r = {
        [e]() {
          return r;
        },
        next() {
          if (n > t.d) return { done: !0, value: void 0 };
          let e = n++,
            r = t.v[e];
          if (e === t.t) throw r;
          return { done: e === t.d, value: r };
        },
      };
    return r;
  },
  Hi = (e, t) => (n) => () => {
    let r = 0,
      i = -1,
      a = !1,
      o = [],
      s = [],
      c = {
        finalize(e = 0, t = s.length) {
          for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
        },
      };
    n.on({
      next(e) {
        let t = s.shift();
        (t && t.s({ done: !1, value: e }), o.push(e));
      },
      throw(e) {
        let t = s.shift();
        (t && t.f(e), c.finalize(), (i = o.length), (a = !0), o.push(e));
      },
      return(e) {
        let t = s.shift();
        (t && t.s({ done: !0, value: e }), c.finalize(), (i = o.length), o.push(e));
      },
    });
    let l = {
      [e]() {
        return l;
      },
      next() {
        if (i === -1) {
          let e = r++;
          if (e >= o.length) {
            let e = t();
            return (s.push(e), e.p);
          }
          return { done: !1, value: o[e] };
        }
        if (r > i) return { done: !0, value: void 0 };
        let e = r++,
          n = o[e];
        if (e !== i) return { done: !1, value: n };
        if (a) throw n;
        return { done: !0, value: n };
      },
    };
    return l;
  },
  A = (e) => {
    let t = atob(e),
      n = t.length,
      r = new Uint8Array(n);
    for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
    return r.buffer;
  };
function j(e) {
  return `__SEROVAL_SEQUENCE__` in e;
}
function Ui(e, t, n) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t, d: n };
}
function Wi(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[dr]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      ((n = t.length), t.push(e));
    }
  return Ui(t, n, r);
}
var Gi = Vi(dr);
function Ki(e) {
  return Gi(e);
}
var qi = {},
  Ji = {},
  Yi = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function Xi(e) {
  return `__SEROVAL_STREAM__` in e;
}
function Zi() {
  return Bi();
}
function Qi(e) {
  let t = Zi(),
    n = e[cr]();
  async function r() {
    try {
      let e = await n.next();
      e.done ? t.return(e.value) : (t.next(e.value), await r());
    } catch (e) {
      t.throw(e);
    }
  }
  return (r().catch(() => {}), t);
}
var $i = Hi(cr, zi);
function ea(e) {
  return $i(e);
}
async function ta(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function na(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 127 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
  };
}
function ra(e, t) {
  e.marked.add(t);
}
function ia(e, t) {
  let n = e.refs.size;
  return (e.refs.set(t, n), n);
}
function aa(e, t) {
  let n = e.refs.get(t);
  return n == null ? { type: 0, value: ia(e, t) } : (ra(e, n), { type: 1, value: $r(n) });
}
function oa(e, t) {
  let n = aa(e, t);
  return n.type === 1 ? n : Hr(t) ? { type: 2, value: ii(n.value, t) } : n;
}
function sa(e, t) {
  let n = oa(e, t);
  if (n.type !== 0) return n.value;
  if (t in xr) return ri(n.value, t);
  throw new ki(t);
}
function ca(e, t) {
  let n = aa(e, Yi[t]);
  return n.type === 1
    ? n.value
    : k(26, n.value, t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function la(e) {
  let t = aa(e, qi);
  return t.type === 1
    ? t.value
    : k(
        27,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        sa(e, dr),
        void 0,
        void 0,
        void 0,
      );
}
function ua(e) {
  let t = aa(e, Ji);
  return t.type === 1
    ? t.value
    : k(
        29,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        [ca(e, 1), sa(e, cr)],
        void 0,
        void 0,
        void 0,
        void 0,
      );
}
function da(e, t, n, r) {
  return k(
    n ? 11 : 10,
    e,
    void 0,
    void 0,
    void 0,
    r,
    void 0,
    void 0,
    void 0,
    void 0,
    Yr(t),
    void 0,
  );
}
function fa(e, t, n, r) {
  return k(
    8,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    { k: n, v: r },
    void 0,
    ca(e, 0),
    void 0,
    void 0,
    void 0,
  );
}
function pa(e, t, n) {
  let r = new Uint8Array(n),
    i = ``;
  for (let e = 0, t = r.length; e < t; e++) i += String.fromCharCode(r[e]);
  return k(
    19,
    t,
    Ir(btoa(i)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    ca(e, 5),
    void 0,
    void 0,
    void 0,
  );
}
function ma(e, t) {
  return { base: na(e, t), child: void 0 };
}
var ha = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return Fa(this._p, this.depth, e);
  }
};
async function ga(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++) i in n ? (r[i] = await Fa(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function _a(e, t, n, r) {
  return oi(n, r, await ga(e, t, r));
}
async function va(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++) (i.push(Ir(r[n][0])), a.push(await Fa(e, t, r[n][1])));
  return (
    dr in n && (i.push(sa(e.base, dr)), a.push(mi(la(e.base), await Fa(e, t, Wi(n))))),
    cr in n && (i.push(sa(e.base, cr)), a.push(hi(ua(e.base), await Fa(e, t, Qi(n))))),
    yr in n && (i.push(sa(e.base, yr)), a.push(Zr(n[yr]))),
    ur in n && (i.push(sa(e.base, ur)), a.push(n[ur] ? Dr : Or)),
    { k: i, v: a }
  );
}
async function ya(e, t, n, r, i) {
  return da(n, r, i, await va(e, t, r));
}
async function ba(e, t, n, r) {
  return si(n, await Fa(e, t, r.valueOf()));
}
async function xa(e, t, n, r) {
  return ci(n, r, await Fa(e, t, r.buffer));
}
async function Sa(e, t, n, r) {
  return li(n, r, await Fa(e, t, r.buffer));
}
async function Ca(e, t, n, r) {
  return ui(n, r, await Fa(e, t, r.buffer));
}
async function wa(e, t, n, r) {
  let i = Jr(r, e.base.features);
  return di(n, r, i ? await va(e, t, i) : void 0);
}
async function Ta(e, t, n, r) {
  let i = Jr(r, e.base.features);
  return fi(n, r, i ? await va(e, t, i) : void 0);
}
async function Ea(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries()) (i.push(await Fa(e, t, n)), a.push(await Fa(e, t, o)));
  return fa(e.base, n, i, a);
}
async function Da(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await Fa(e, t, n));
  return pi(n, i);
}
async function Oa(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return ai(n, o.tag, await o.parse.async(r, new ha(e, t), { id: n }));
    }
}
async function ka(e, t, n, r) {
  let [i, a] = await ta(r);
  return k(
    12,
    n,
    i,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    await Fa(e, t, a),
    void 0,
    void 0,
    void 0,
  );
}
function Aa(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        (ra(this.base, t),
          Fa(this, e, n).then(
            (e) => {
              a.push(_i(t, e));
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      throw: (n) => {
        (ra(this.base, t),
          Fa(this, e, n).then(
            (e) => {
              (a.push(vi(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      return: (n) => {
        (ra(this.base, t),
          Fa(this, e, n).then(
            (e) => {
              (a.push(yi(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
    });
}
async function ja(e, t, n, r) {
  return gi(n, ca(e.base, 4), await new Promise(Aa.bind(e, t, n, r)));
}
async function Ma(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await Fa(e, t, r.v[n]);
  return bi(n, i, r.t, r.d);
}
async function Na(e, t, n, r) {
  if (Array.isArray(r)) return _a(e, t, n, r);
  if (Xi(r)) return ja(e, t, n, r);
  if (j(r)) return Ma(e, t, n, r);
  let i = r.constructor;
  if (i !== void 0 && typeof i != `function`) {
    let e = Object.getPrototypeOf(r);
    i = e === null ? void 0 : e.constructor;
  }
  if (i === Ri) return Fa(e, t, r.replacement);
  let a = await Oa(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return ya(e, t, n, r, !1);
    case void 0:
      return ya(e, t, n, r, !0);
    case Date:
      return ei(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return wa(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return ba(e, t, n, r);
    case ArrayBuffer:
      return pa(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return xa(e, t, n, r);
    case DataView:
      return Ca(e, t, n, r);
    case Map:
      return Ea(e, t, n, r);
    case Set:
      return Da(e, t, n, r);
  }
  if (i === Promise || r instanceof Promise) return ka(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return ni(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return Sa(e, t, n, r);
      default:
        break;
    }
  if (o & 1 && typeof AggregateError < `u` && (i === AggregateError || r instanceof AggregateError))
    return Ta(e, t, n, r);
  if (o & 64 && typeof Temporal < `u`)
    switch (i) {
      case Temporal.Instant:
        return ti(n, 0, r);
      case Temporal.Duration:
        return ti(n, 1, r);
      case Temporal.PlainDate:
        return ti(n, 2, r);
      case Temporal.PlainDateTime:
        return ti(n, 3, r);
      case Temporal.PlainMonthDay:
        return ti(n, 4, r);
      case Temporal.PlainTime:
        return ti(n, 5, r);
      case Temporal.PlainYearMonth:
        return ti(n, 6, r);
      case Temporal.ZonedDateTime:
        return ti(n, 7, r);
      default:
        break;
    }
  if (r instanceof Error) return wa(e, t, n, r);
  if (dr in r || cr in r) return ya(e, t, n, r, !!i);
  throw new ki(r);
}
async function Pa(e, t, n) {
  let r = oa(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await Oa(e, t, r.value, n);
  if (i) return i;
  throw new ki(n);
}
async function Fa(e, t, n) {
  if (t >= e.base.depthLimit) throw new Li(e.base.depthLimit);
  switch (typeof n) {
    case `boolean`:
      return n ? Dr : Or;
    case `undefined`:
      return kr;
    case `string`:
      return Zr(n);
    case `number`:
      return Xr(n);
    case `bigint`:
      return Qr(n);
    case `object`:
      if (n) {
        let r = oa(e.base, n);
        return r.type === 0 ? await Na(e, t + 1, r.value, n) : r.value;
      }
      return Ar;
    case `symbol`:
      return sa(e.base, n);
    case `function`:
      return Pa(e, t, n);
    default:
      throw new ki(n);
  }
}
async function Ia(e, t) {
  try {
    return await Fa(e, 0, t);
  } catch (e) {
    throw e instanceof Ei ? e : new Ei(e);
  }
}
function La(e) {
  return e;
}
function Ra(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && Ra(e, r.extends));
  }
}
function za(e) {
  if (e) {
    let t = new Set();
    return (Ra(t, e), [...t]);
  }
}
function Ba(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new Fi(e);
  }
}
function Va(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function Ha(e) {
  switch (e) {
    case cr:
    case ur:
    case yr:
    case dr:
      return !0;
    default:
      return !1;
  }
}
var Ua = 1e6,
  Wa = 1e4,
  Ga = 2e4;
function Ka(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var qa = 1e3;
function Ja(e, t) {
  let n = t.refs || new Map();
  return (
    `types` in n || Object.assign(n, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: n,
      features: t.features ?? 127 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || qa,
    }
  );
}
function Ya(e) {
  return { mode: 2, base: Ja(2, e), child: void 0 };
}
var Xa = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return L(this._p, this.depth, e);
  }
};
function Za(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t)) throw new Ii({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function Qa(e) {
  return !!e && typeof e == `object` && `then` in e && typeof e.then == `function`;
}
function $a(e, t, n) {
  return (Za(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n);
}
function eo(e, t, n) {
  return (Za(e.base, t), e.base.refs.set(t, n), n);
}
function M(e, t, n) {
  return e.mode === 1 ? $a(e, t, n) : eo(e, t, n);
}
function to(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new Ii(e);
}
function no(e, t) {
  return M(e, t.i, Gr(Rr(t.s)));
}
function ro(e, t, n) {
  let r = n.a,
    i = r.length,
    a = M(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) ((o = r[n]), o && (a[n] = L(e, t, o)));
  return (Ka(a, n.o), a);
}
function io(e, t, n) {
  Va(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, { value: n, configurable: !0, enumerable: !0, writable: !0 });
}
function ao(e, t, n, r, i) {
  if (typeof r == `string`) io(n, Rr(r), L(e, t, i));
  else {
    let a = L(e, t, r);
    switch (typeof a) {
      case `string`:
        io(n, a, L(e, t, i));
        break;
      case `symbol`:
        Ha(a) && (n[a] = L(e, t, i));
        break;
      default:
        throw new Ii(r);
    }
  }
}
function oo(e, t, n) {
  e.base.refs.types.set(t, n);
}
function so(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new Ii(t);
}
function co(e, t, n, r) {
  let i = n.k;
  if (i.length > 0) for (let a = 0, o = n.v, s = i.length; a < s; a++) ao(e, t, r, i[a], o[a]);
  return r;
}
function lo(e, t, n) {
  let r = M(e, n.i, n.t === 10 ? {} : Object.create(null));
  return (co(e, t, n.p, r), Ka(r, n.o), r);
}
function uo(e, t) {
  return M(e, t.i, new Date(t.s));
}
function fo(e, t) {
  if (!(e.base.features & 64)) throw new Ai(t);
  let n;
  switch (t.c) {
    case 0:
      n = Temporal.Instant.from(t.s);
      break;
    case 1:
      n = Temporal.Duration.from(t.s);
      break;
    case 2:
      n = Temporal.PlainDate.from(t.s);
      break;
    case 3:
      n = Temporal.PlainDateTime.from(t.s);
      break;
    case 4:
      n = Temporal.PlainMonthDay.from(t.s);
      break;
    case 5:
      n = Temporal.PlainTime.from(t.s);
      break;
    case 6:
      n = Temporal.PlainYearMonth.from(t.s);
      break;
    case 7:
      n = Temporal.ZonedDateTime.from(t.s);
      break;
    default:
      throw new Ii(t);
  }
  return M(e, t.i, n);
}
function po(e, t) {
  if (e.base.features & 32) {
    let n = Rr(t.c);
    if (n.length > Ga) throw new Ii(t);
    return M(e, t.i, new RegExp(n, t.m));
  }
  throw new Ai(t);
}
function mo(e, t, n) {
  let r = M(e, n.i, new Set());
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(L(e, t, a[i]));
  return r;
}
function ho(e, t, n) {
  let r = M(e, n.i, new Map());
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(L(e, t, a[i]), L(e, t, o[i]));
  return r;
}
function go(e, t) {
  if (t.s.length > Ua) throw new Ii(t);
  return M(e, t.i, A(Rr(t.s)));
}
function _o(e, t, n) {
  let r = Ba(n.c),
    i = L(e, t, n.f),
    a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new Ii(n);
  return M(e, n.i, new r(i, a, n.l));
}
function N(e, t, n) {
  let r = L(e, t, n.f),
    i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new Ii(n);
  return M(e, n.i, new DataView(r, i, n.l));
}
function vo(e, t, n, r) {
  if (n.p) {
    let i = co(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function yo(e, t, n) {
  return vo(e, t, n, M(e, n.i, AggregateError([], Rr(n.m))));
}
function P(e, t, n) {
  let r = to(n, Tr, n.s);
  return vo(e, t, n, M(e, n.i, new r(Rr(n.m))));
}
function F(e, t, n) {
  let r = zi(),
    i = M(e, n.i, r.p),
    a = L(e, t, n.f);
  if (Qa(a)) throw new Ii(n.f);
  return (n.s ? r.s(a) : r.f(a), i);
}
function bo(e, t, n) {
  return M(e, n.i, Object(L(e, t, n.f)));
}
function xo(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = Rr(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i) return M(e, n.i, o.deserialize(n.s, new Xa(e, t), { id: n.i }));
    }
  }
  throw new ji(n.c);
}
function So(e, t) {
  let n = M(e, t.i, M(e, t.s, zi()).p);
  return (oo(e, t.s, 22), n);
}
function Co(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    so(e, n, n.i, 22);
    let i = L(e, t, n.a[1]);
    if (Qa(i)) throw new Ii(n.a[1]);
    n.t === 23 ? r.s(i) : r.f(i);
    return;
  }
  throw new Mi(`Promise`);
}
function wo(e, t, n) {
  return (L(e, t, n.a[0]), Ki(L(e, t, n.a[1])));
}
function To(e, t, n) {
  return (L(e, t, n.a[0]), ea(L(e, t, n.a[1])));
}
function Eo(e, t, n) {
  let r = M(e, n.i, Zi());
  oo(e, n.i, 31);
  let i = n.a,
    a = i.length;
  if (a) for (let n = 0; n < a; n++) L(e, t, i[n]);
  return r;
}
function Do(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (so(e, n, n.i, 31), r.next(L(e, t, n.f)));
    return;
  }
  throw new Mi(`Stream`);
}
function I(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (so(e, n, n.i, 31), r.throw(L(e, t, n.f)));
    return;
  }
  throw new Mi(`Stream`);
}
function Oo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (so(e, n, n.i, 31), r.return(L(e, t, n.f)));
    return;
  }
  throw new Mi(`Stream`);
}
function ko(e, t, n) {
  L(e, t, n.f);
}
function Ao(e, t, n) {
  L(e, t, n.a[1]);
}
function jo(e, t, n) {
  let r = M(e, n.i, Ui([], n.s, n.l));
  for (let i = 0, a = n.a.length; i < a; i++) r.v[i] = L(e, t, n.a[i]);
  return r;
}
function L(e, t, n) {
  if (t > e.base.depthLimit) throw new Li(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return to(n, Cr, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return Rr(String(n.s));
    case 3:
      if (String(n.s).length > Wa) throw new Ii(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return no(e, n);
    case 9:
      return ro(e, t, n);
    case 10:
    case 11:
      return lo(e, t, n);
    case 5:
      return uo(e, n);
    case 6:
      return po(e, n);
    case 7:
      return mo(e, t, n);
    case 8:
      return ho(e, t, n);
    case 19:
      return go(e, n);
    case 16:
    case 15:
      return _o(e, t, n);
    case 20:
      return N(e, t, n);
    case 14:
      return yo(e, t, n);
    case 13:
      return P(e, t, n);
    case 12:
      return F(e, t, n);
    case 17:
      return to(n, Sr, n.s);
    case 21:
      return bo(e, t, n);
    case 25:
      return xo(e, t, n);
    case 22:
      return So(e, n);
    case 23:
    case 24:
      return Co(e, t, n);
    case 28:
      return wo(e, t, n);
    case 30:
      return To(e, t, n);
    case 31:
      return Eo(e, t, n);
    case 32:
      return Do(e, t, n);
    case 33:
      return I(e, t, n);
    case 34:
      return Oo(e, t, n);
    case 27:
      return ko(e, t, n);
    case 29:
      return Ao(e, t, n);
    case 35:
      return jo(e, t, n);
    case 36:
      return fo(e, n);
    default:
      throw new Ai(n);
  }
}
function Mo(e, t) {
  try {
    return L(e, 0, t);
  } catch (e) {
    throw new Di(e);
  }
}
function No(e, t) {
  return Mo(
    Ya({
      plugins: za(t.plugins),
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  );
}
async function Po(e, t = {}) {
  let n = ma(1, { plugins: za(t.plugins), disabledFeatures: t.disabledFeatures });
  return { t: await Ia(n, e), f: n.base.features, m: Array.from(n.base.marked) };
}
function Fo(e) {
  return e;
}
function R(e) {
  return La({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n, r) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n, r) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var Io = class {
    constructor(e, t) {
      ((this.stream = e), (this.hint = t?.hint ?? `binary`));
    }
  },
  Lo = globalThis.Buffer,
  Ro = !!Lo && typeof Lo.from == `function`;
function zo(e) {
  if (e.length === 0) return ``;
  if (Ro) return Lo.from(e).toString(`base64`);
  let t = 32768,
    n = [];
  for (let r = 0; r < e.length; r += t) {
    let i = e.subarray(r, r + t);
    n.push(String.fromCharCode.apply(null, i));
  }
  return btoa(n.join(``));
}
function Bo(e) {
  if (e.length === 0) return new Uint8Array();
  if (Ro) {
    let t = Lo.from(e, `base64`);
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
var Vo = Object.create(null),
  Ho = Object.create(null),
  Uo = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(Bo(e));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Wo = new TextEncoder(),
  Go = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              typeof e == `string` ? t.enqueue(Wo.encode(e)) : t.enqueue(Bo(e.$b64));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Ko = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`,
  qo = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function Jo(e) {
  let t = Zi(),
    n = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: r } = await n.read();
          if (e) {
            t.return(void 0);
            break;
          }
          t.next(zo(r));
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
function Yo(e) {
  let t = Zi(),
    n = e.getReader(),
    r = new TextDecoder(`utf-8`, { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: i } = await n.read();
          if (e) {
            try {
              let e = r.decode();
              e.length > 0 && t.next(e);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            let e = r.decode(i, { stream: !0 });
            e.length > 0 && t.next(e);
          } catch {
            t.next({ $b64: zo(i) });
          }
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
var Xo = La({
  tag: `tss/RawStream`,
  extends: [
    La({
      tag: `tss/RawStreamFactory`,
      test(e) {
        return e === Vo;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Ko;
      },
      deserialize(e, t, n) {
        return Vo;
      },
    }),
    La({
      tag: `tss/RawStreamFactoryText`,
      test(e) {
        return e === Ho;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return qo;
      },
      deserialize(e, t, n) {
        return Ho;
      },
    }),
  ],
  test(e) {
    return e instanceof Io;
  },
  parse: {
    sync(e, t, n) {
      let r = e.hint === `text` ? Ho : Vo;
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(Zi()) };
    },
    async async(e, t, n) {
      let r = e.hint === `text` ? Ho : Vo,
        i = e.hint === `text` ? Yo(e.stream) : Jo(e.stream);
      return { hint: await t.parse(e.hint), factory: await t.parse(r), stream: await t.parse(i) };
    },
    stream(e, t, n) {
      let r = e.hint === `text` ? Ho : Vo,
        i = e.hint === `text` ? Yo(e.stream) : Jo(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(i) };
    },
  },
  serialize(e, t, n) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t, n) {
    let r = t.deserialize(e.stream);
    return t.deserialize(e.hint) === `text` ? Go(r) : Uo(r);
  },
});
function Zo(e) {
  return La({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize() {
      throw Error(
        `RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`,
      );
    },
    deserialize(t, n, r) {
      return e(typeof n?.deserialize == `function` ? n.deserialize(t.streamId) : t.streamId);
    },
  });
}
var Qo = La({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  $o = {},
  es = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  ts = La({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === $o;
    },
    parse: {
      sync() {
        return $o;
      },
      async async() {
        return await Promise.resolve($o);
      },
      stream() {
        return $o;
      },
    },
    serialize() {
      return es.toString();
    },
    deserialize() {
      return $o;
    },
  });
async function ns(e, t) {
  try {
    let n = await t.read();
    n.done ? (e.return(n.value), t.releaseLock()) : (e.next(n.value), await ns(e, t));
  } catch (t) {
    e.throw(t);
  }
}
function rs(e) {
  (e.cancel().catch(() => {}), e.releaseLock());
}
function is(e) {
  let t = Zi(),
    n = e.getReader(),
    r = rs.bind(null, n);
  return (ns(t, n).catch(r), [t, r]);
}
var as = [
  Qo,
  Xo,
  La({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [ts],
    test(e) {
      return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse($o), stream: t.parse(Zi()) };
      },
      async async(e, t) {
        return { factory: await t.parse($o), stream: await t.parse(is(e)[0]) };
      },
      stream(e, t) {
        let [n, r] = is(e);
        return (t.addCleanup(r), { factory: t.parse($o), stream: t.parse(n) });
      },
    },
    serialize(e, t) {
      return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
    },
    deserialize(e, t) {
      return es(t.deserialize(e.stream));
    },
  }),
];
function os() {
  return [...(v()?.serializationAdapters?.map(R) ?? []), ...as];
}
var ss = new TextDecoder(),
  cs = new Uint8Array(),
  ls = 16777216,
  us = 33554432,
  ds = 1024,
  fs = 1e5;
function ps(e) {
  let t = new Map(),
    n = new Map(),
    r = new Set(),
    i = !1,
    a = null,
    o = 0,
    s,
    c = new ReadableStream({
      start(e) {
        s = e;
      },
      cancel() {
        i = !0;
        try {
          a?.cancel();
        } catch {}
        (t.forEach((e) => {
          try {
            e.error(Error(`Framed response cancelled`));
          } catch {}
        }),
          t.clear(),
          n.clear(),
          r.clear());
      },
    });
  function l(e) {
    let i = n.get(e);
    if (i) return i;
    if (r.has(e))
      return new ReadableStream({
        start(e) {
          e.close();
        },
      });
    if (n.size >= ds) throw Error(`Too many raw streams in framed response (max ${ds})`);
    let a = new ReadableStream({
      start(n) {
        t.set(e, n);
      },
      cancel() {
        (r.add(e), t.delete(e), n.delete(e));
      },
    });
    return (n.set(e, a), a);
  }
  function u(e) {
    return (l(e), t.get(e));
  }
  return (
    (async () => {
      let n = e.getReader();
      a = n;
      let c = [],
        l = 0;
      function d() {
        if (l < 9) return null;
        let e = c[0];
        if (e.length >= 9)
          return {
            type: e[0],
            streamId: ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            length: ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0,
          };
        let t = new Uint8Array(9),
          n = 0,
          r = 9;
        for (let e = 0; e < c.length && r > 0; e++) {
          let i = c[e],
            a = Math.min(i.length, r);
          (t.set(i.subarray(0, a), n), (n += a), (r -= a));
        }
        return {
          type: t[0],
          streamId: ((t[1] << 24) | (t[2] << 16) | (t[3] << 8) | t[4]) >>> 0,
          length: ((t[5] << 24) | (t[6] << 16) | (t[7] << 8) | t[8]) >>> 0,
        };
      }
      function f(e) {
        if (e === 0) return cs;
        let t = c[0];
        if (t && t.length >= e) {
          let n = t.subarray(0, e);
          return (t.length === e ? c.shift() : (c[0] = t.subarray(e)), (l -= e), n);
        }
        let n = new Uint8Array(e),
          r = 0,
          i = e;
        for (; i > 0 && c.length > 0;) {
          let e = c[0];
          if (!e) break;
          let t = Math.min(e.length, i);
          (n.set(e.subarray(0, t), r),
            (r += t),
            (i -= t),
            t === e.length ? c.shift() : (c[0] = e.subarray(t)));
        }
        return ((l -= e), n);
      }
      try {
        for (;;) {
          let { done: e, value: a } = await n.read();
          if (i || e) break;
          if (a) {
            if (l + a.length > us) throw Error(`Framed response buffer exceeded ${us} bytes`);
            for (c.push(a), l += a.length; ;) {
              let e = d();
              if (!e) break;
              let { type: n, streamId: i, length: a } = e;
              if (n !== m.JSON && n !== m.CHUNK && n !== m.END && n !== m.ERROR)
                throw Error(`Unknown frame type: ${n}`);
              if (n === m.JSON) {
                if (i !== 0) throw Error(`Invalid JSON frame streamId (expected 0)`);
              } else if (i === 0) throw Error(`Invalid raw frame streamId (expected non-zero)`);
              if (a > ls) throw Error(`Frame payload too large: ${a} bytes (max ${ls})`);
              let c = 9 + a;
              if (l < c) break;
              if (++o > fs) throw Error(`Too many frames in framed response (max ${fs})`);
              f(9);
              let p = f(a);
              switch (n) {
                case m.JSON:
                  try {
                    s.enqueue(ss.decode(p));
                  } catch {}
                  break;
                case m.CHUNK: {
                  let e = u(i);
                  e && e.enqueue(p);
                  break;
                }
                case m.END: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    try {
                      e.close();
                    } catch {}
                    t.delete(i);
                  }
                  break;
                }
                case m.ERROR: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    let n = ss.decode(p);
                    (e.error(Error(n)), t.delete(i));
                  }
                  break;
                }
              }
            }
          }
        }
        if (l !== 0) throw Error(`Incomplete frame at end of framed response`);
        try {
          s.close();
        } catch {}
        (t.forEach((e) => {
          try {
            e.close();
          } catch {}
        }),
          t.clear());
      } catch (e) {
        try {
          s.error(e);
        } catch {}
        (t.forEach((t) => {
          try {
            t.error(e);
          } catch {}
        }),
          t.clear());
      } finally {
        try {
          n.releaseLock();
        } catch {}
        a = null;
      }
    })(),
    { getOrCreateStream: l, jsonChunks: c }
  );
}
var ms = null;
async function hs(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var gs = Object.prototype.hasOwnProperty;
function _s(e) {
  for (let t in e) if (gs.call(e, t)) return !0;
  return !1;
}
async function vs(e, t, n) {
  ms ||= os();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData ? `formData` : `payload`,
    o = r.headers ? new Headers(r.headers) : new Headers();
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a === `payload` && o.set(`accept`, `${p}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a === `formData`) throw Error(`FormData is not supported with GET requests`);
    let t = await ys(r);
    if (t !== void 0) {
      let n = mt({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  return (
    r.method === `POST` &&
      ((s = await xs(r)), typeof s == `string` && o.set(`content-type`, `application/json`)),
    await Ss(async () => i(e, { method: r.method, headers: o, signal: r.signal, body: s }))
  );
}
async function ys(e) {
  let t = !1,
    n = {};
  if (
    (e.data !== void 0 && ((t = !0), (n.data = e.data)),
    e.context && _s(e.context) && ((t = !0), (n.context = e.context)),
    t)
  )
    return bs(n);
}
async function bs(e) {
  return JSON.stringify(await Promise.resolve(Po(e, { plugins: ms })));
}
async function xs(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && _s(e.context) && (t = await bs(e.context)),
      t !== void 0 && e.data.set(d, t),
      e.data
    );
  }
  let t = await ys(e);
  if (t) return t;
}
async function Ss(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw (console.log(e), e);
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let n = t.headers.get(`content-type`);
  if ((n || ge(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (n.includes(`application/x-tss-framed`)) {
      if ((_(n), !t.body)) throw Error(`No response body for framed response`);
      let { getOrCreateStream: r, jsonChunks: i } = ps(t.body),
        a = [Zo(r), ...(ms || [])],
        o = new Map();
      e = await Cs({
        jsonStream: i,
        onMessage: (e) => No(e, { refs: o, plugins: a }),
        onError(e, t) {
          console.error(e, t);
        },
      });
    } else if (n.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      try {
        e = No(n, { plugins: ms });
      } finally {
      }
      await hs(r);
    }
    if ((e || ge(), e instanceof Error)) throw e;
    return e;
  }
  if (n.includes(`application/json`)) {
    let e = await t.json(),
      n = wt(e);
    if (n) throw n;
    if ($e(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function Cs({ jsonStream: e, onMessage: t, onError: n }) {
  let r = e.getReader(),
    { value: i, done: a } = await r.read();
  if (a || !i) throw Error(`Stream ended before first object`);
  let o = JSON.parse(i),
    s = !1,
    c = (async () => {
      try {
        for (;;) {
          let { value: e, done: i } = await r.read();
          if (i) break;
          if (e)
            try {
              let n = [];
              try {
                t(JSON.parse(e));
              } finally {
              }
              await hs(n);
            } catch (t) {
              n?.(`Invalid JSON: ${e}`, t);
            }
        }
      } catch (e) {
        s || n?.(`Stream processing error:`, e);
      }
    })(),
    l,
    u = [];
  try {
    l = t(o);
  } catch (e) {
    throw ((s = !0), r.cancel().catch(() => {}), e);
  }
  return (
    await hs(u),
    Promise.resolve(l).catch(() => {
      ((s = !0), r.cancel().catch(() => {}));
    }),
    c.finally(() => {
      try {
        r.releaseLock();
      } catch {}
    }),
    l
  );
}
function ws(e) {
  let t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = v()?.serverFns?.fetch;
      return vs(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [f]: !0 },
  );
}
var Ts = Fo({
    key: `$TSS/serverfn`,
    test: (e) => (typeof e != `function` || !(f in e) ? !1 : !!e[f]),
    toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
    fromSerializable: ({ functionId: e }) => ws(e),
  }),
  z = e(r(), 1),
  Es = z.use,
  Ds = z.useLayoutEffect;
function Os(e, t, n = {}, r) {
  z.useEffect(() => {
    if (!e.current || r || typeof IntersectionObserver != `function`) return;
    let i = new IntersectionObserver(([e]) => {
      t(e);
    }, n);
    return (
      i.observe(e.current),
      () => {
        i.disconnect();
      }
    );
  }, [t, r, n, e]);
}
function ks(e) {
  let t = z.useRef(null);
  return (z.useImperativeHandle(e, () => t.current, []), t);
}
var B = n();
function As({ promise: e }) {
  if (Es) return Es(e);
  let t = Qn(e);
  if (t[Zn].status === `pending`) throw t;
  if (t[Zn].status === `error`) throw t[Zn].error;
  return t[Zn].data;
}
function js(e) {
  let t = (0, B.jsx)(Ms, { ...e });
  return e.fallback ? (0, B.jsx)(z.Suspense, { fallback: e.fallback, children: t }) : t;
}
function Ms(e) {
  let t = As(e);
  return e.children(t);
}
function Ns(e) {
  return (0, B.jsx)(Ps, { ...e });
}
var Ps = class extends z.Component {
  constructor(...e) {
    (super(...e),
      (this.state = { error: null }),
      (this.reset = () => {
        this.setState({ error: null });
      }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey();
    return t.error && t.resetKey !== n ? { resetKey: n, error: null } : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  componentDidCatch(e, t) {
    this.props.onCatch?.(e, t);
  }
  render() {
    let e = this.state.error;
    return e
      ? z.createElement(this.props.errorComponent ?? Fs, { error: e, reset: this.reset })
      : this.props.children;
  }
};
function Fs({ error: e }) {
  let [t, n] = z.useState(!1);
  return (0, B.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, B.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, B.jsx)(`strong`, { style: { fontSize: `1rem` }, children: `Something went wrong!` }),
          (0, B.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, B.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, B.jsx)(`div`, {
            children: (0, B.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e.message ? (0, B.jsx)(`code`, { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function Is({ children: e, fallback: t = null }) {
  return (0, B.jsx)(z.Fragment, { children: Ls() ? e : t });
}
function Ls() {
  return z.useSyncExternalStore(
    Rs,
    () => !0,
    () => !1,
  );
}
function Rs() {
  return () => {};
}
var zs = z.createContext(null);
function Bs(e) {
  return z.useContext(zs);
}
var Vs = z.createContext(void 0),
  Hs = z.createContext(void 0),
  V = ((e) => (
    (e[(e.None = 0)] = `None`),
    (e[(e.Mutable = 1)] = `Mutable`),
    (e[(e.Watching = 2)] = `Watching`),
    (e[(e.RecursedCheck = 4)] = `RecursedCheck`),
    (e[(e.Recursed = 8)] = `Recursed`),
    (e[(e.Dirty = 16)] = `Dirty`),
    (e[(e.Pending = 32)] = `Pending`),
    e
  ))(V || {});
function Us({ update: e, notify: t, unwatched: n }) {
  return { link: r, unlink: i, propagate: a, checkDirty: o, shallowPropagate: s };
  function r(e, t, n) {
    let r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    let i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      ((i.version = n), (t.depsTail = i));
      return;
    }
    let a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    let o =
      (t.depsTail =
      e.subsTail =
        { version: n, dep: e, sub: t, prevDep: r, nextDep: i, prevSub: a, nextSub: void 0 });
    (i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o));
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs;
        if (t !== void 0) {
          let i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0;)
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      let o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs;
          (e.nextSub !== void 0 && s(e), (a = !0));
        }
      } else if ((c & 33) == 33) {
        ((t.nextSub !== void 0 || t.prevSub !== void 0) && (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i);
        continue;
      }
      if (!a) {
        let e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--;) {
        let i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            (o && s(i), (n = t.sub));
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        let c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0;) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function Ws(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var Gs = [],
  Ks = 0,
  {
    link: qs,
    unlink: Js,
    propagate: Ys,
    checkDirty: Xs,
    shallowPropagate: Zs,
  } = Us({
    update(e) {
      return e._update();
    },
    notify(e) {
      ((Gs[$s++] = e), (e.flags &= ~V.Watching));
    },
    unwatched(e) {
      e.depsTail !== void 0 && ((e.depsTail = void 0), (e.flags = V.Mutable | V.Dirty), rc(e));
    },
  }),
  Qs = 0,
  $s = 0,
  ec,
  tc = 0;
function nc(e) {
  try {
    (++tc, e());
  } finally {
    --tc || ic();
  }
}
function rc(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0;) n = Js(n, e);
}
function ic() {
  if (!(tc > 0)) {
    for (; Qs < $s;) {
      let e = Gs[Qs];
      ((Gs[Qs++] = void 0), e.notify());
    }
    ((Qs = 0), ($s = 0));
  }
}
function H(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: n ? V.None : V.Mutable,
      get() {
        return (ec !== void 0 && qs(i, ec, Ks), i._snapshot);
      },
      subscribe(e) {
        let t = Ws(e),
          n = { current: !1 },
          r = ac(() => {
            (i.get(), n.current ? t.next?.(i._snapshot) : (n.current = !0));
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        let a = ec,
          o = t?.compare ?? Object.is;
        if (n) ((ec = i), ++Ks, (i.depsTail = void 0));
        else if (e === void 0) return !1;
        n && (i.flags = V.Mutable | V.RecursedCheck);
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          ((ec = a), n && (i.flags &= ~V.RecursedCheck), rc(i));
        }
      },
    };
  return (
    n
      ? ((i.flags = V.Mutable | V.Dirty),
        (i.get = function () {
          let e = i.flags;
          if (e & V.Dirty || (e & V.Pending && Xs(i.deps, i))) {
            if (i._update()) {
              let e = i.subs;
              e !== void 0 && Zs(e);
            }
          } else e & V.Pending && (i.flags = e & ~V.Pending);
          return (ec !== void 0 && qs(i, ec, Ks), i._snapshot);
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (Ys(e), Zs(e), ic());
          }
        }),
    i
  );
}
function ac(e) {
  let t = () => {
      let t = ec;
      ((ec = n), ++Ks, (n.depsTail = void 0), (n.flags = V.Watching | V.RecursedCheck));
      try {
        return e();
      } finally {
        ((ec = t), (n.flags &= ~V.RecursedCheck), rc(n));
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: V.Watching | V.RecursedCheck,
      notify() {
        let e = this.flags;
        e & V.Dirty || (e & V.Pending && Xs(this.deps, this)) ? t() : (this.flags = V.Watching);
      },
      stop() {
        ((this.flags = V.None), (this.depsTail = void 0), rc(this));
      },
    };
  return (t(), n);
}
var oc = t((e) => {
    var t = r();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : n,
      a = t.useState,
      o = t.useEffect,
      s = t.useLayoutEffect,
      c = t.useDebugValue;
    function l(e, t) {
      var n = t(),
        r = a({ inst: { value: n, getSnapshot: t } }),
        i = r[0].inst,
        l = r[1];
      return (
        s(
          function () {
            ((i.value = n), (i.getSnapshot = t), u(i) && l({ inst: i }));
          },
          [e, n, t],
        ),
        o(
          function () {
            return (
              u(i) && l({ inst: i }),
              e(function () {
                u(i) && l({ inst: i });
              })
            );
          },
          [e],
        ),
        c(n),
        n
      );
    }
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !i(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` || window.document === void 0 || window.document.createElement === void 0
        ? d
        : l;
    e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  sc = t((e, t) => {
    t.exports = oc();
  }),
  cc = t((e) => {
    var t = r(),
      n = sc();
    function i(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var a = typeof Object.is == `function` ? Object.is : i,
      o = n.useSyncExternalStore,
      s = t.useRef,
      c = t.useEffect,
      l = t.useMemo,
      u = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
      var d = s(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = l(
        function () {
          function e(e) {
            if (!o) {
              if (((o = !0), (s = e), (e = r(e)), i !== void 0 && f.hasValue)) {
                var t = f.value;
                if (i(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), a(s, e))) return t;
            var n = r(e);
            return i !== void 0 && i(t, n) ? ((s = e), t) : ((s = e), (c = n));
          }
          var o = !1,
            s,
            c,
            l = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            l === null
              ? void 0
              : function () {
                  return e(l());
                },
          ];
        },
        [t, n, r, i],
      );
      var p = o(e, d[0], d[1]);
      return (
        c(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        u(p),
        p
      );
    };
  }),
  lc = t((e, t) => {
    t.exports = cc();
  })();
function uc(e, t) {
  return e === t;
}
function dc(e, t, n = uc) {
  let r = (0, z.useCallback)(
      (t) => {
        if (!e) return () => {};
        let { unsubscribe: n } = e.subscribe(t);
        return n;
      },
      [e],
    ),
    i = (0, z.useCallback)(() => e?.get(), [e]);
  return (0, lc.useSyncExternalStoreWithSelector)(r, i, i, t, n);
}
var fc = {};
function pc(e, t) {
  let n = z.useRef();
  return (r) => {
    let i = e?.select ? e.select(r) : r;
    return (e?.structuralSharing ?? t.options.defaultStructuralSharing)
      ? (n.current = re(n.current, i))
      : i;
  };
}
function mc(e) {
  let t = Bs(),
    n = z.useContext(e.from ? Hs : Vs),
    r = e.from ?? n,
    i = t.stores.getMatchStore(r),
    a = pc(e, t),
    o = dc(i, (e) => (e ? a(e) : fc));
  if (o !== fc) return o;
  (e.shouldThrow ?? !0) && ge();
}
function hc(e) {
  return mc({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function gc(e) {
  let { select: t, ...n } = e;
  return mc({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function _c(e) {
  return mc({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      let n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function vc(e) {
  return mc({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function yc(e) {
  let t = Bs();
  return z.useCallback((n) => t.navigate({ ...n, from: n.from ?? e?.from }), [e?.from, t]);
}
function bc(e) {
  return mc({ ...e, select: (t) => (e.select ? e.select(t.context) : t.context) });
}
var xc = c();
function Sc(e, t) {
  let n = Bs(),
    r = ks(t),
    {
      activeProps: i,
      inactiveProps: a,
      activeOptions: o,
      to: s,
      preload: c,
      preloadDelay: l,
      preloadIntentProximity: u,
      hashScrollIntoView: d,
      replace: f,
      startTransition: p,
      resetScroll: m,
      viewTransition: h,
      children: g,
      target: _,
      disabled: v,
      style: y,
      className: b,
      onClick: S,
      onBlur: C,
      onFocus: ee,
      onMouseEnter: te,
      onMouseLeave: ne,
      onTouchStart: re,
      ignoreBlocker: ie,
      params: ae,
      search: oe,
      hash: se,
      state: le,
      mask: ue,
      reloadDocument: de,
      unsafeRelative: w,
      from: T,
      _fromLocation: pe,
      ...me
    } = e,
    he = Ls(),
    E = z.useMemo(
      () => e,
      [
        n,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        e.search,
        e.params,
        e.state,
        e.mask,
        e.unsafeRelative,
      ],
    ),
    D = dc(
      n.stores.location,
      (e) => e,
      (e, t) => e.href === t.href,
    ),
    O = z.useMemo(() => {
      let e = { _fromLocation: D, ...E };
      return n.buildLocation(e);
    }, [n, D, E]),
    ge = O.maskedLocation ? O.maskedLocation.publicHref : O.publicHref,
    _e = O.maskedLocation ? O.maskedLocation.external : O.external,
    ve = z.useMemo(() => jc(ge, _e, n.history, v), [v, _e, ge, n.history]),
    ye = z.useMemo(() => {
      if (ve?.external) return fe(ve.href, n.protocolAllowlist) ? void 0 : ve.href;
      if (!Mc(s) && typeof s == `string` && s.indexOf(`:`) !== -1)
        try {
          return (new URL(s), fe(s, n.protocolAllowlist) ? void 0 : s);
        } catch {}
    }, [s, ve, n.protocolAllowlist]),
    be = z.useMemo(() => {
      if (ye) return !1;
      if (o?.exact) {
        if (!qe(D.pathname, O.pathname, n.basepath)) return !1;
      } else {
        let e = Ke(D.pathname, n.basepath),
          t = Ke(O.pathname, n.basepath);
        if (!(e.startsWith(t) && (e.length === t.length || e[t.length] === `/`))) return !1;
      }
      return (o?.includeSearch ?? !0) &&
        !ce(D.search, O.search, { partial: !o?.exact, ignoreUndefined: !o?.explicitUndefined })
        ? !1
        : !o?.includeHash || (he && D.hash === O.hash);
    }, [
      o?.exact,
      o?.explicitUndefined,
      o?.includeHash,
      o?.includeSearch,
      D,
      ye,
      he,
      O.hash,
      O.pathname,
      O.search,
      n.basepath,
    ]),
    xe = be ? (x(i, {}) ?? wc) : Cc,
    Se = be ? Cc : (x(a, {}) ?? Cc),
    Ce = [b, xe.className, Se.className].filter(Boolean).join(` `),
    we = (y || xe.style || Se.style) && { ...y, ...xe.style, ...Se.style },
    [Te, Ee] = z.useState(!1),
    De = z.useRef(!1),
    Oe = e.reloadDocument || ye ? !1 : (c ?? n.options.defaultPreload),
    ke = l ?? n.options.defaultPreloadDelay ?? 0,
    Ae = z.useCallback(() => {
      n.preloadRoute({ ...E, _builtLocation: O }).catch((e) => {
        (console.warn(e), console.warn($n));
      });
    }, [n, E, O]);
  (Os(
    r,
    z.useCallback(
      (e) => {
        e?.isIntersecting && Ae();
      },
      [Ae],
    ),
    kc,
    !!v || Oe !== `viewport`,
  ),
    z.useEffect(() => {
      De.current || (!v && Oe === `render` && (Ae(), (De.current = !0)));
    }, [v, Ae, Oe]));
  let je = (e) => {
    let t = e.currentTarget.getAttribute(`target`),
      r = _ === void 0 ? t : _;
    if (!v && !Pc(e) && !e.defaultPrevented && (!r || r === `_self`) && e.button === 0) {
      (e.preventDefault(),
        (0, xc.flushSync)(() => {
          Ee(!0);
        }));
      let t = n.subscribe(`onResolved`, () => {
        (t(), Ee(!1));
      });
      n.navigate({
        ...E,
        replace: f,
        resetScroll: m,
        hashScrollIntoView: d,
        startTransition: p,
        viewTransition: h,
        ignoreBlocker: ie,
      });
    }
  };
  if (ye)
    return {
      ...me,
      ref: r,
      href: ye,
      ...(g && { children: g }),
      ...(_ && { target: _ }),
      ...(v && { disabled: v }),
      ...(y && { style: y }),
      ...(b && { className: b }),
      ...(S && { onClick: S }),
      ...(C && { onBlur: C }),
      ...(ee && { onFocus: ee }),
      ...(te && { onMouseEnter: te }),
      ...(ne && { onMouseLeave: ne }),
      ...(re && { onTouchStart: re }),
    };
  let Me = (e) => {
      if (v || Oe !== `intent`) return;
      if (!ke) {
        Ae();
        return;
      }
      let t = e.currentTarget;
      if (Oc.has(t)) return;
      let n = setTimeout(() => {
        (Oc.delete(t), Ae());
      }, ke);
      Oc.set(t, n);
    },
    Ne = (e) => {
      v || Oe !== `intent` || Ae();
    },
    Pe = (e) => {
      if (v || !Oe || !ke) return;
      let t = e.currentTarget,
        n = Oc.get(t);
      n && (clearTimeout(n), Oc.delete(t));
    };
  return {
    ...me,
    ...xe,
    ...Se,
    href: ve?.href,
    ref: r,
    onClick: Ac([S, je]),
    onBlur: Ac([C, Pe]),
    onFocus: Ac([ee, Me]),
    onMouseEnter: Ac([te, Me]),
    onMouseLeave: Ac([ne, Pe]),
    onTouchStart: Ac([re, Ne]),
    disabled: !!v,
    target: _,
    ...(we && { style: we }),
    ...(Ce && { className: Ce }),
    ...(v && Tc),
    ...(be && Ec),
    ...(he && Te && Dc),
  };
}
var Cc = {},
  wc = { className: `active` },
  Tc = { role: `link`, "aria-disabled": !0 },
  Ec = { "data-status": `active`, "aria-current": `page` },
  Dc = { "data-transitioning": `transitioning` },
  Oc = new WeakMap(),
  kc = { rootMargin: `100px` },
  Ac = (e) => (t) => {
    for (let n of e)
      if (n) {
        if (t.defaultPrevented) return;
        n(t);
      }
  };
function jc(e, t, n, r) {
  if (!r) return t ? { href: e, external: !0 } : { href: n.createHref(e) || `/`, external: !1 };
}
function Mc(e) {
  if (typeof e != `string`) return !1;
  let t = e.charCodeAt(0);
  return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var Nc = z.forwardRef((e, t) => {
  let { _asChild: n, ...r } = e,
    { type: i, ...a } = Sc(r, t),
    o =
      typeof r.children == `function`
        ? r.children({ isActive: a[`data-status`] === `active` })
        : r.children;
  if (!n) {
    let { disabled: e, ...t } = a;
    return z.createElement(`a`, t, o);
  }
  return z.createElement(n, a, o);
});
function Pc(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Fc = class extends or {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        mc({ select: e?.select, from: this.id, structuralSharing: e?.structuralSharing })),
      (this.useRouteContext = (e) => bc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        vc({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useParams = (e) =>
        _c({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (e) => gc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => hc({ ...e, from: this.id })),
      (this.useNavigate = () => yc({ from: this.fullPath })),
      (this.Link = z.forwardRef((e, t) => (0, B.jsx)(Nc, { ref: t, from: this.fullPath, ...e }))));
  }
};
function Ic(e) {
  return new Fc(e);
}
function Lc() {
  return (e) => U(e);
}
var Rc = class extends sr {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        mc({ select: e?.select, from: this.id, structuralSharing: e?.structuralSharing })),
      (this.useRouteContext = (e) => bc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        vc({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useParams = (e) =>
        _c({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (e) => gc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => hc({ ...e, from: this.id })),
      (this.useNavigate = () => yc({ from: this.fullPath })),
      (this.Link = z.forwardRef((e, t) => (0, B.jsx)(Nc, { ref: t, from: this.fullPath, ...e }))));
  }
};
function U(e) {
  return new Rc(e);
}
function zc(e) {
  return (e) => {
    let t = Ic(e);
    return ((t.isRoot = !1), t);
  };
}
function Bc(e, t) {
  let n,
    r,
    i,
    a = () => (
      (n ||=
        ((i = void 0),
        e()
          .then((e) => {
            ((n = void 0), (r = e[t ?? `default`]));
          })
          .catch((e) => {
            ((n = void 0), (i = e));
          }))),
      n
    ),
    o = function (e) {
      if (i) {
        if (le(i) && typeof sessionStorage < `u`) {
          let e = `tanstack_router_reload:${i.message}`;
          if (!sessionStorage.getItem(e))
            throw (sessionStorage.setItem(e, `1`), window.location.reload(), new Promise(() => {}));
        }
        throw i;
      }
      if (!r) {
        if (Es) Es(a());
        else throw a();
      }
      return z.createElement(r, e);
    };
  return ((o.preload = a), o);
}
function Vc(e) {
  let t = Bs(),
    n = `not-found-${dc(t.stores.location, (e) => e.pathname)}-${dc(t.stores.status, (e) => e)}`;
  return (0, B.jsx)(Ns, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if ($e(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if ($e(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function Hc() {
  return (0, B.jsx)(`p`, { children: `Not Found` });
}
function Uc(e) {
  return (0, B.jsx)(B.Fragment, { children: e.children });
}
function Wc(e, t, n) {
  return t.options.notFoundComponent
    ? (0, B.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, B.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, B.jsx)(Hc, {});
}
function Gc(e, t) {
  let n = t?.options.pendingComponent ?? e.options.defaultPendingComponent;
  return n ? (0, B.jsx)(n, {}) : null;
}
var Kc = (e, t) => e[0] === t[0] && e[1] === t[1],
  qc = z.memo(function ({ routeId: e }) {
    let t = Bs();
    return (0, B.jsx)(Jc, { router: t, match: dc(t.stores.getMatchStore(e), (e) => e) });
  });
function Jc({ router: e, match: t }) {
  let n = e.routesById[t.routeId],
    r = Gc(e, n),
    i = n.options.errorComponent ?? e.options.defaultErrorComponent,
    a = n.options.onCatch ?? e.options.defaultOnCatch,
    o = n.isRoot
      ? (n.options.notFoundComponent ?? e.options.notFoundRoute?.options.component)
      : n.options.notFoundComponent,
    s = t.ssr === !1 || t.ssr === `data-only`,
    c =
      (n.options.wrapInSuspense ?? r ?? (n.options.errorComponent?.preload || s)) ? z.Suspense : Uc,
    l = i ? Ns : Uc,
    u = o ? Vc : Uc;
  return (0, B.jsxs)(n.isRoot ? (n.options.shellComponent ?? Uc) : Uc, {
    children: [
      (0, B.jsx)(Vs.Provider, {
        value: t.routeId,
        children: (0, B.jsx)(c, {
          fallback: r,
          children: (0, B.jsx)(l, {
            getResetKey: () => t,
            errorComponent: i,
            onCatch: (e, n) => {
              if ($e(e)) throw ((e.routeId ??= t.routeId), e);
              a?.(e, n);
            },
            children: (0, B.jsx)(u, {
              fallback: (e) => {
                if (((e.routeId ??= t.routeId), e.routeId !== t.routeId)) throw e;
                return z.createElement(o, e);
              },
              children: s
                ? (0, B.jsx)(Is, { fallback: r, children: (0, B.jsx)(Yc, { match: t }) })
                : (0, B.jsx)(Yc, { match: t }),
            }),
          }),
        }),
      }),
      null,
    ],
  });
}
var Yc = z.memo(function ({ match: e }) {
    let t = Bs(),
      n = e.routeId,
      r = t.routesById[n],
      i = z.useMemo(() => {
        let i = (r.options.remountDeps ?? t.options.defaultRemountDeps)?.({
          routeId: n,
          loaderDeps: e.loaderDeps,
          params: e._strictParams,
          search: e._strictSearch,
        });
        return i ? JSON.stringify(i) : void 0;
      }, [
        n,
        e.loaderDeps,
        e._strictParams,
        e._strictSearch,
        r.options.remountDeps,
        t.options.defaultRemountDeps,
      ]),
      a = z.useMemo(() => {
        let e = r.options.component ?? t.options.defaultComponent;
        return e ? (0, B.jsx)(e, {}, i) : (0, B.jsx)(Xc, {});
      }, [i, r.options.component, t.options.defaultComponent]);
    if (e.status === `pending`) {
      if (t._tx) throw t._tx[5];
      return Gc(t, r);
    }
    if (e.status === `notFound`) return Wc(t, r, e.error);
    if (e.status === `error`) throw e.error;
    return a;
  }),
  Xc = z.memo(function () {
    let e = Bs(),
      t = z.useContext(Vs),
      n,
      r,
      i;
    {
      let a = e.stores.getMatchStore(t);
      (([n, r] = dc(a, (e) => [!!e._notFound, e.error], Kc)),
        (i = dc(e.stores.ids, (e) => e[e.indexOf(t) + 1])));
    }
    if (n) return Wc(e, e.routesById[t], r);
    if (!i) return null;
    let a = (0, B.jsx)(qc, { routeId: i });
    return t === `__root__` ? (0, B.jsx)(z.Suspense, { fallback: Gc(e), children: a }) : a;
  });
function Zc(e, t) {
  let n = e[1];
  ((e.length = 0), n?.(t));
}
function Qc({ t: e }) {
  let t = Bs(),
    n = (t._rendered ??= []);
  return (
    (t.startTransition = (r, i) =>
      new Promise((a, o) => {
        (Zc(n, !1),
          n.push(i, a),
          e(t),
          z.startTransition(() => {
            try {
              r();
            } catch (e) {
              (n[1] === a && (n.length = 0), o(e));
            }
          }));
      })),
    Ds(() => {
      let e = t.history.subscribe(t.load);
      t.updateLatestLocation();
      let r = t.latestLocation,
        i = t.buildLocation({
          to: r.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      if (We(r.publicHref) !== We(i.publicHref))
        return (t.commitLocation({ ...i, replace: !0, ignoreBlocker: !0 }), e);
      let a = t.stores.resolvedLocation.get();
      return (
        a?.href === r.href && a.state.__TSR_key === r.state.__TSR_key
          ? n.push(t.stores.matches.get(), (e) => {
              e && t.emit({ type: `onRendered`, ...Ht(a, a) });
            })
          : t._tx || t.load().catch(console.error),
        e
      );
    }, [t, t.history]),
    null
  );
}
function $c() {
  let e = Bs(),
    t = e.routesById[xt],
    n = Gc(e, t),
    r = e.ssr ? Uc : z.Suspense,
    i = (0, B.jsxs)(B.Fragment, {
      children: [
        (0, B.jsx)(Qc, { t: z.useState()[1] }),
        (0, B.jsx)(r, { fallback: n, children: (0, B.jsx)(el, {}) }),
      ],
    });
  return e.options.InnerWrap ? (0, B.jsx)(e.options.InnerWrap, { children: i }) : i;
}
function el() {
  let e = Bs(),
    t = e._rendered,
    n = dc(e.stores.matches, (e) => t[0] ?? e),
    r = n[0],
    i = r?.routeId;
  Ds(() => {
    t[0] === n && Zc(t, !0);
  }, [t, n]);
  let a = i ? (0, B.jsx)(qc, { routeId: i }) : null;
  return (0, B.jsx)(Vs.Provider, {
    value: i,
    children: e.options.disableGlobalCatchBoundary
      ? a
      : (0, B.jsx)(Ns, { getResetKey: () => r, onCatch: void 0, children: a }),
  });
}
var tl = (e) => ({ createMutableStore: H, createReadonlyStore: H, batch: nc }),
  nl = (e) => new rl(e),
  rl = class extends Gt {
    constructor(e) {
      super(e, tl);
    }
  };
function il({ router: e, children: t, ...n }) {
  ee(n) && e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } });
  let r = (0, B.jsx)(zs.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, B.jsx)(e.options.Wrap, { children: r }) : r;
}
function al({ router: e, ...t }) {
  return (0, B.jsx)(il, { router: e, ...t, children: (0, B.jsx)($c, {}) });
}
function ol(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function sl(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e;
  switch (e.tag) {
    case `title`:
      return (0, B.jsx)(`title`, { ...t, suppressHydrationWarning: !0, children: n });
    case `meta`:
      return (0, B.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, B.jsx)(`link`, {
        ...t,
        precedence: t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return (
        e.inlineCss,
        (0, B.jsx)(`style`, { ...t, dangerouslySetInnerHTML: { __html: n }, nonce: r })
      );
    case `script`:
      return (0, B.jsx)(cl, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function cl({ attrs: e, children: t, preventScriptHoist: n }) {
  Bs();
  let r = Ls(),
    i =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (z.useEffect(() => {
      if (!i) {
        if (e?.src) {
          let t = (() => {
            try {
              let t = document.baseURI || window.location.href;
              return new URL(e.src, t).href;
            } catch {
              return e.src;
            }
          })();
          for (let e of document.querySelectorAll(`script[src]`)) if (e.src === t) return;
          let n = document.createElement(`script`);
          return (ol(n, e), document.head.appendChild(n), () => n.remove());
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (let e of document.querySelectorAll(`script:not([src])`)) {
            if (!(e instanceof HTMLScriptElement)) continue;
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          let i = document.createElement(`script`);
          return ((i.textContent = t), ol(i, e), document.head.appendChild(i), () => i.remove());
        }
      }
    }, [e, t, i]),
    i && typeof t == `string`)
  )
    return (0, B.jsx)(`script`, {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: t },
    });
  if (!r) {
    if (e?.src) return (0, B.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, B.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: { __html: t },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
function W(e, t, n, r) {
  n = rn(n);
  let i = n.map((e) => e.meta).filter((e) => e !== void 0),
    a = [],
    o = {},
    s;
  for (let e = i.length - 1; e >= 0; e--) {
    let n = i[e];
    for (let e = n.length - 1; e >= 0; e--) {
      let r = n[e];
      if (r) {
        if (r.title) s ||= { tag: `title`, children: r.title };
        else if (`script:ld+json` in r)
          try {
            let e = JSON.stringify(r[`script:ld+json`]);
            a.push({ tag: `script`, attrs: { type: `application/ld+json` }, children: he(e) });
          } catch {}
        else {
          let e = r.name ?? r.property;
          if (e) {
            if (o[e]) continue;
            o[e] = !0;
          }
          a.push({ tag: `meta`, attrs: { ...r, nonce: t } });
        }
      }
    }
  }
  (s && a.push(s),
    t && a.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: t } }),
    a.reverse());
  let c = n
      .flatMap((e) => e.links ?? [])
      .filter((e) => e !== void 0)
      .map((e) => ({ tag: `link`, attrs: { ...e, nonce: t } })),
    l = e.ssr?.manifest,
    u = [];
  l &&
    (n.forEach((e) => {
      l.routes[e.routeId]?.css?.forEach((e) => {
        let n = ar(e);
        u.push({
          tag: `link`,
          attrs: {
            rel: `stylesheet`,
            ...n,
            crossOrigin: er(r, `stylesheet`) ?? n.crossOrigin,
            suppressHydrationWarning: !0,
            nonce: t,
          },
        });
      });
    }),
    l.inlineStyle &&
      u.push({
        tag: `style`,
        attrs: { ...l.inlineStyle.attrs, nonce: t },
        children: l.inlineStyle.children,
        inlineCss: !0,
      }));
  let d = [];
  l &&
    n.forEach((e) => {
      l.routes[e.routeId]?.preloads?.forEach((e) => {
        d.push({ tag: `link`, attrs: { ...nr(l, e, r), nonce: t } });
      });
    });
  let f = n
      .flatMap((e) => e.styles ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...n }) => ({ tag: `style`, attrs: { ...n, nonce: t }, children: e })),
    p = n
      .flatMap((e) => e.headScripts ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...n }) => ({ tag: `script`, attrs: { ...n, nonce: t }, children: e })),
    m = [];
  return (ir(m, a), m.push(...d), ir(m, c), m.push(...u), ir(m, f), ir(m, p), m);
}
var ll = (e) => {
  let t = Bs(),
    n = t.options.ssr?.nonce,
    r = z.useCallback((r) => W(t, n, r, e), [e, n, t]);
  return dc(t.stores.matches, r, ce);
};
function ul(e) {
  let t = ll(e.assetCrossOrigin),
    n = Bs().options.ssr?.nonce;
  return (0, B.jsx)(B.Fragment, {
    children: t.map((e) =>
      (0, z.createElement)(sl, { ...e, key: `tsr-meta-${JSON.stringify(e)}`, nonce: n }),
    ),
  });
}
var dl = () => {
  let e = Bs(),
    t = e.options.ssr?.nonce;
  return fl(
    e,
    dc(
      e.stores.matches,
      (n) => {
        n = rn(n);
        let r = n
            .flatMap((e) => e.scripts ?? [])
            .filter(Boolean)
            .map(({ children: e, ...n }) => ({
              tag: `script`,
              attrs: { ...n, suppressHydrationWarning: !0, nonce: t },
              children: e,
            })),
          i = e.ssr?.manifest;
        if (!i) return r;
        for (let e of n) {
          let n = i.routes[e.routeId]?.scripts;
          if (n)
            for (let e of n)
              r.push({
                tag: `script`,
                attrs: { ...e.attrs, nonce: t },
                children: e.children,
                ...(typeof e.attrs?.src == `string` ? { preventScriptHoist: !0 } : {}),
              });
        }
        return r;
      },
      ce,
    ),
  );
};
function fl(e, t) {
  return (0, B.jsx)(B.Fragment, {
    children: t.map((e, t) => (0, z.createElement)(sl, { ...e, key: `tsr-scripts-${e.tag}-${t}` })),
  });
}
var pl = (e, t) => {
  let n = { type: `request`, ...(t || e) },
    r = (e) => pl({}, Object.assign(n, { validator: e, inputValidator: e }));
  return {
    options: n,
    middleware: (e) => pl({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => pl({}, Object.assign(n, { client: e })),
    server: (e) => pl({}, Object.assign(n, { server: e })),
  };
};
function ml(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && ml(e, r.extends));
  }
}
var hl = (e) => ({
    getOptions: async () => {
      let t = await e();
      if (t.serializationAdapters) {
        let e = new Set();
        (ml(e, t.serializationAdapters), (t.serializationAdapters = Array.from(e)));
      }
      return t;
    },
    createMiddleware: pl,
  }),
  gl = pl(),
  _l = void 0,
  vl = hl(() => ({ requestMiddleware: [gl, _l] })),
  yl = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  bl = new (class extends yl {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  xl = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Sl = new (class {
    #e = xl;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function Cl(e) {
  setTimeout(e, 0);
}
var wl = typeof window > `u` || `Deno` in globalThis;
function Tl() {}
function El(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Dl(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Ol(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function kl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Al(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function jl(e, t) {
  let { type: n = `all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Nl(o, t.options)) return !1;
    } else if (!Fl(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Ml(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Pl(t.options.mutationKey) !== Pl(a)) return !1;
    } else if (!Fl(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Nl(e, t) {
  return (t?.queryKeyHashFn || Pl)(e);
}
function Pl(e) {
  return JSON.stringify(e, (e, t) =>
    zl(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Fl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!Fl(e[n], t[n])) return !1;
      return !0;
    }
    let n = Object.keys(t);
    for (let r of n) if (!Fl(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var Il = Object.prototype.hasOwnProperty;
function Ll(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = Rl(e) && Rl(t);
  if (!r && !(zl(e) && zl(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : Il.call(e, o)) && c++);
      continue;
    }
    if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
      s[o] = d;
      continue;
    }
    let f = Ll(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function Rl(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function zl(e) {
  if (!G(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !G(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function G(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function K(e) {
  return new Promise((t) => {
    Sl.setTimeout(t, e);
  });
}
function q(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : Ll(e, t);
}
function J(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Y(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Bl = Symbol();
function Vl(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Bl
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Hl(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r ? i : ((r = !0), i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }), i)
      ),
    }),
    e
  );
}
var Ul = (() => {
  let e = () => wl;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function Wl() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var X = Cl;
function Gl() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = X,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var Kl = Gl(),
  ql = new (class extends yl {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t), window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function Jl(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Yl(e) {
  return (e ?? `online`) !== `online` || ql.isOnline();
}
var Xl = class extends Error {
  constructor(e) {
    (super(`CancelledError`), (this.revert = e?.revert), (this.silent = e?.silent));
  }
};
function Zl(e) {
  let t = !1,
    n = 0,
    r,
    i = Wl(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new Xl(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () => bl.isFocused() && (e.networkMode === `always` || ql.isOnline()) && e.canRun(),
    u = () => Yl(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (Ul.isServer() ? 0 : 3),
            o = e.retryDelay ?? Jl,
            s = typeof o == `function` ? o(n, r) : o,
            c = i === !0 || (typeof i == `number` && n < i) || (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            K(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var Ql = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      Dl(this.gcTime) &&
        (this.#e = Sl.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (Ul.isServer() ? 1 / 0 : 3e5));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (Sl.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function $l(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Hl(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = Vl(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? Y : J;
              return { pages: c(e.pages, o, s), pageParams: c(e.pageParams, r, s) };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? tu : eu,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : eu(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              n,
            )
        : l;
    },
  };
}
function eu(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function tu(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var nu = class extends Ql {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = au(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = au(this.options);
      e.data !== void 0 && (this.setState(iu(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === `idle` && this.#r.remove(this);
  }
  setData(e, t) {
    let n = q(this.state.data, e, this.options);
    return (
      this.#l({ data: n, type: `success`, dataUpdatedAt: t?.updatedAt, manual: t?.manual }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(Tl).catch(Tl) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => Al(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Bl || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => kl(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !Ol(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a && (this.#s || this.#c() ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return this.state.fetchStatus === `paused` && this.state.status === `pending`;
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = Vl(this.options, t),
          n = (() => {
            let e = { client: this.#i, queryKey: this.queryKey, meta: this.meta };
            return (r(e), e);
          })();
        return ((this.#s = !1), this.options.persister ? this.options.persister(e, n, this) : e(n));
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite` ? $l(this.options.pages) : this.options.behavior)?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` || this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = Zl({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          (e instanceof Xl && e.revert && this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort());
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof Xl) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return { ...t, ...ru(t.data, this.options), fetchMeta: e.meta ?? null };
        case `success`:
          let n = {
            ...t,
            ...iu(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      Kl.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function ru(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Yl(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function iu(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function au(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var ou = class extends Ql {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || su()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length || (this.state.status === `pending` ? this.scheduleGc() : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = { client: this.#e, meta: this.options.meta, mutationKey: this.options.mutationKey };
    this.#r = Zl({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate && (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      Kl.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function su() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var cu = class extends yl {
  constructor(e = {}) {
    (super(), (this.config = e), (this.#e = new Set()), (this.#t = new Map()), (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new ou({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = lu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = lu(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n) {
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
        }
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = lu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    }
    return !0;
  }
  runNext(e) {
    let t = lu(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    Kl.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => Ml(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Ml(e, t));
  }
  notify(e) {
    Kl.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return Kl.batch(() => Promise.all(e.map((e) => e.continue().catch(Tl))));
  }
};
function lu(e) {
  return e.options.scope?.id;
}
var uu = class extends yl {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Nl(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new nu({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      Kl.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => jl(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => jl(e, t)) : t;
    }
    notify(e) {
      Kl.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      Kl.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      Kl.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  du = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new uu()),
        (this.#t = e.mutationCache || new cu()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = bl.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = ql.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 && (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale && n.isStaleByTime(kl(t.staleTime, n)) && this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = El(t, i);
      if (a !== void 0) return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return Kl.batch(() =>
        this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      Kl.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return Kl.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = Kl.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(Tl).catch(Tl);
    }
    invalidateQueries(e, t = {}) {
      return Kl.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? `active` }, t)
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = Kl.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(Tl)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(Tl);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(kl(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Tl).catch(Tl);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Tl).catch(Tl);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return ql.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(Pl(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Fl(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(Pl(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Fl(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = { ...this.#n.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
      return (
        (t.queryHash ||= Nl(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === Bl && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  fu = z.createContext(void 0),
  pu = ({ client: e, children: t }) => (
    z.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, B.jsx)(fu.Provider, { value: e, children: t })
  ),
  mu = `/assets/styles-DuWAuJrL.css`;
function hu() {
  let e = (0, z.useRef)(null),
    t = (0, z.useRef)(null),
    [n, r] = (0, z.useState)(`default`),
    [a, o] = (0, z.useState)(!0);
  return (
    (0, z.useEffect)(() => {
      if (typeof window > `u`) return;
      let e = () => {
        let e = window.matchMedia(`(hover: hover) and (pointer: fine)`).matches;
        (o(!e),
          e
            ? document.documentElement.classList.add(`has-custom-cursor`)
            : document.documentElement.classList.remove(`has-custom-cursor`));
      };
      e();
      let t = window.matchMedia(`(pointer: fine)`);
      return (
        t.addEventListener(`change`, e),
        () => {
          (t.removeEventListener(`change`, e),
            document.documentElement.classList.remove(`has-custom-cursor`));
        }
      );
    }, []),
    (0, z.useEffect)(() => {
      if (a) return;
      let n = -100,
        i = -100,
        o = n,
        s = i,
        c = !1,
        l,
        u = !1,
        d = !1,
        f = 0,
        p = 0,
        m = () => {
          let t = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ? 1 : 0.2;
          ((o += (n - o) * t),
            (s += (i - s) * t),
            e.current &&
              (e.current.style.transform = `translate3d(${o}px, ${s}px, 0) translate(-50%, -50%)`),
            Math.abs(n - o) > 0.1 || Math.abs(i - s) > 0.1
              ? (l = requestAnimationFrame(m))
              : (c = !1));
        },
        h = (e, t) => {
          let n = e.target;
          if (n) {
            if (t || u) {
              r(d ? `drag` : `grab`);
              return;
            }
            if (n.closest(`[data-cursor="view"]`)) {
              r(`view`);
              return;
            }
            if (
              n.closest(
                `a, button, [role='button'], input, textarea, select, summary, [tabindex]:not([tabindex='-1'])`,
              )
            ) {
              r(`interactive`);
              return;
            }
            r(`default`);
          }
        },
        g = (e) => {
          e.pointerType !== `touch` &&
            ((n = e.clientX),
            (i = e.clientY),
            t.current &&
              (t.current.style.transform = `translate3d(${n}px, ${i}px, 0) translate(-50%, -50%)`),
            c || ((c = !0), (l = requestAnimationFrame(m))),
            u && !d && Math.hypot(n - f, i - p) > 5 && (d = !0),
            h(e));
        },
        _ = (e) => {
          e.pointerType !== `touch` &&
            e.button === 0 &&
            ((u = !0),
            (d = !1),
            (f = e.clientX),
            (p = e.clientY),
            h(e, !0),
            t.current &&
              (t.current.classList.add(`click-pulse`),
              setTimeout(() => {
                t.current && t.current.classList.remove(`click-pulse`);
              }, 150)));
        },
        v = (e) => {
          e.pointerType !== `touch` && ((u = !1), (d = !1), h(e));
        },
        y = () => {
          (e.current && (e.current.style.opacity = `1`),
            t.current && (t.current.style.opacity = `1`));
        },
        b = () => {
          (e.current && (e.current.style.opacity = `0`),
            t.current && (t.current.style.opacity = `0`));
        };
      return (
        window.addEventListener(`pointermove`, g),
        window.addEventListener(`pointerdown`, _),
        window.addEventListener(`pointerup`, v),
        document.addEventListener(`mouseenter`, y),
        document.addEventListener(`mouseleave`, b),
        () => {
          (window.removeEventListener(`pointermove`, g),
            window.removeEventListener(`pointerdown`, _),
            window.removeEventListener(`pointerup`, v),
            document.removeEventListener(`mouseenter`, y),
            document.removeEventListener(`mouseleave`, b),
            cancelAnimationFrame(l));
        }
      );
    }, [a]),
    a
      ? null
      : (0, B.jsxs)(`div`, {
          className: `custom-cursor-container`,
          style: {
            pointerEvents: `none`,
            zIndex: 9999,
            position: `fixed`,
            inset: 0,
            overflow: `hidden`,
          },
          children: [
            (0, B.jsx)(`div`, {
              ref: t,
              className: i(
                `custom-cursor-dot`,
                n === `interactive` && `is-interactive`,
                n === `view` && `is-view`,
                (n === `grab` || n === `drag`) && `is-grab`,
              ),
            }),
            (0, B.jsx)(`div`, {
              ref: e,
              className: i(
                `custom-cursor-ring`,
                n === `interactive` && `is-interactive`,
                n === `view` && `is-view`,
                n === `grab` && `is-grab`,
                n === `drag` && `is-drag`,
              ),
              children: (0, B.jsxs)(`div`, {
                className: `custom-cursor-label`,
                children: [
                  n === `view` && `VIEW`,
                  n === `grab` && `GRAB`,
                  n === `drag` && `← DRAG →`,
                ],
              }),
            }),
          ],
        })
  );
}
var gu = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  _u = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  vu = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  yu = (e) => {
    let t = vu(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  bu = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  xu = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  Su = (0, z.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, z.createElement)(
        `svg`,
        {
          ref: c,
          ...bu,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: gu(`lucide`, i),
          ...(!a && !xu(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [...o.map(([e, t]) => (0, z.createElement)(e, t)), ...(Array.isArray(a) ? a : [a])],
      ),
  ),
  Cu = (e, t) => {
    let n = (0, z.forwardRef)(({ className: n, ...r }, i) =>
      (0, z.createElement)(Su, {
        ref: i,
        iconNode: t,
        className: gu(`lucide-${_u(yu(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = yu(e)), n);
  },
  wu = Cu(`external-link`, [
    [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
    [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
    [`path`, { d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`, key: `a6xqqp` }],
  ]),
  Tu = Cu(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [`rect`, { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` }],
  ]),
  Eu = Cu(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  Du = Cu(`moon`, [
    [
      `path`,
      {
        d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
        key: `kfwtm`,
      },
    ],
  ]),
  Ou = Cu(`sun`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M12 2v2`, key: `tus03m` }],
    [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
    [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
    [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
    [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
    [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
    [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
    [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
  ]),
  ku = Cu(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  Au = (0, z.createContext)(void 0);
function ju() {
  if (typeof window < `u`) {
    let e = document.documentElement.classList;
    if (e.contains(`dark`)) return `dark`;
    if (e.contains(`light`)) return `light`;
    let t = localStorage.getItem(`tf-theme`);
    if (t === `light` || t === `dark`) return t;
  }
  return `light`;
}
function Mu({ children: e }) {
  let [t, n] = (0, z.useState)(ju);
  return (
    (0, z.useEffect)(() => {
      let e = document.documentElement;
      (e.classList.remove(`dark`, `light`),
        e.classList.add(t),
        localStorage.setItem(`tf-theme`, t));
    }, [t]),
    (0, B.jsx)(Au.Provider, {
      value: {
        theme: t,
        setTheme: (e) => {
          n(e);
        },
        toggleTheme: () => {
          n((e) => (e === `dark` ? `light` : `dark`));
        },
      },
      children: e,
    })
  );
}
function Nu() {
  let e = (0, z.useContext)(Au);
  if (!e) throw Error(`useTheme must be used within a ThemeProvider`);
  return e;
}
function Pu({ className: e }) {
  let { theme: t } = Nu(),
    n = t === `light`,
    r = n ? `/images/branding/techfusionlogolight.webp` : `/images/branding/techfusionlogo.webp`;
  return (0, B.jsx)(`img`, {
    src: r,
    srcSet: `${n ? `/images/branding/techfusionlogolight-sm.webp` : `/images/branding/techfusionlogo-sm.webp`} 256w, ${r} 512w`,
    sizes: `(max-width: 640px) 256px, 512px`,
    alt: `Tech Fusion Club Logo`,
    width: 160,
    height: 160,
    className: i(`h-10 w-auto object-contain transition-all duration-300`, e),
  });
}
var Fu = [
  { to: `/`, label: `Home` },
  { to: `/about`, label: `About` },
  { to: `/governance`, label: `Governance` },
  { to: `/events`, label: `Events` },
  { to: `/team`, label: `Team` },
  { to: `/alumni`, label: `Alumni` },
  { to: `/gallery`, label: `Gallery` },
];
function Iu() {
  let [e, t] = (0, z.useState)(!1),
    [n, r] = (0, z.useState)(!1),
    { theme: a, toggleTheme: o } = Nu();
  return (
    (0, z.useEffect)(() => {
      let e = () => r(window.scrollY > 12);
      return (
        e(),
        window.addEventListener(`scroll`, e, { passive: !0 }),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, z.useEffect)(
      () => (
        (document.body.style.overflow = e ? `hidden` : ``),
        () => {
          document.body.style.overflow = ``;
        }
      ),
      [e],
    ),
    (0, B.jsxs)(`header`, {
      className: i(
        `fixed inset-x-0 top-0 z-50 transition-all duration-500`,
        n
          ? `glass-strong border-b border-border/80 shadow-2xl backdrop-blur-2xl`
          : `border-b border-transparent bg-background/20 backdrop-blur-md`,
      ),
      children: [
        (0, B.jsxs)(`nav`, {
          "aria-label": `Primary`,
          className: `mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8`,
          children: [
            (0, B.jsxs)(Nc, {
              to: `/`,
              className: `group flex items-center gap-3`,
              onClick: () => t(!1),
              children: [
                (0, B.jsx)(Pu, {
                  className: `h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105`,
                }),
                (0, B.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, B.jsx)(`span`, {
                      className: `font-display text-xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-glow to-accent drop-shadow-[0_0_12px_rgba(217,72,15,0.4)] sm:text-2xl`,
                      children: `TECH FUSION`,
                    }),
                    (0, B.jsx)(`span`, {
                      className: `font-mono text-[9px] uppercase tracking-[0.35em] text-primary-glow font-bold -mt-1`,
                      children: `CLUB`,
                    }),
                  ],
                }),
              ],
            }),
            (0, B.jsx)(`ul`, {
              className: `hidden items-center gap-1 lg:flex`,
              children: Fu.map((e) =>
                (0, B.jsx)(
                  `li`,
                  {
                    children:
                      `external` in e && e.external
                        ? (0, B.jsxs)(`a`, {
                            href: e.href,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `electric-link inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-primary-glow transition-colors hover:text-foreground xl:px-4`,
                            children: [e.label, (0, B.jsx)(wu, { className: `size-3` })],
                          })
                        : (0, B.jsx)(Nc, {
                            to: `to` in e ? e.to : `/`,
                            activeOptions: { exact: (`to` in e ? e.to : `/`) === `/` },
                            activeProps: { className: `text-foreground font-semibold` },
                            className: `electric-link rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground xl:px-4`,
                            children: e.label,
                          }),
                  },
                  `to` in e ? e.to : e.href,
                ),
              ),
            }),
            (0, B.jsxs)(`div`, {
              className: `flex items-center gap-2 sm:gap-3`,
              children: [
                (0, B.jsx)(`button`, {
                  type: `button`,
                  onClick: o,
                  "aria-label": `Switch to ${a === `dark` ? `light` : `dark`} theme`,
                  title: `Switch to ${a === `dark` ? `light` : `dark`} theme`,
                  className: `glass hover:bg-surface-strong relative inline-flex size-10 items-center justify-center rounded-full text-foreground transition-transform duration-300 hover:scale-110 border border-border`,
                  children:
                    a === `dark`
                      ? (0, B.jsx)(Ou, {
                          className: `size-5 text-amber-400 transition-all duration-300`,
                        })
                      : (0, B.jsx)(Du, {
                          className: `size-5 text-indigo-600 transition-all duration-300`,
                        }),
                }),
                (0, B.jsxs)(Nc, {
                  to: `/join`,
                  className: `group pulse-glow relative hidden overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:inline-flex`,
                  children: [
                    (0, B.jsx)(`span`, { className: `relative z-10`, children: `Join the Club` }),
                    (0, B.jsx)(`span`, {
                      className: `pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-primary-foreground/25 opacity-0 group-hover:animate-sheen group-hover:opacity-100`,
                    }),
                  ],
                }),
                (0, B.jsx)(`button`, {
                  type: `button`,
                  onClick: () => t((e) => !e),
                  "aria-expanded": e,
                  "aria-controls": `mobile-nav`,
                  "aria-label": e ? `Close menu` : `Open menu`,
                  className: `glass inline-flex size-10 items-center justify-center rounded-full text-foreground lg:hidden`,
                  children: e
                    ? (0, B.jsx)(ku, { className: `size-5` })
                    : (0, B.jsx)(Eu, { className: `size-5` }),
                }),
              ],
            }),
          ],
        }),
        (0, B.jsxs)(`div`, {
          id: `mobile-nav`,
          hidden: !e,
          className: `glass-strong border-t px-5 pb-8 pt-4 lg:hidden`,
          children: [
            (0, B.jsx)(`ul`, {
              className: `flex flex-col`,
              children: Fu.map((e) =>
                (0, B.jsx)(
                  `li`,
                  {
                    children:
                      `external` in e && e.external
                        ? (0, B.jsxs)(`a`, {
                            href: e.href,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            onClick: () => t(!1),
                            className: `flex items-center justify-between border-b border-border/60 py-3.5 font-display text-lg font-semibold text-primary-glow`,
                            children: [
                              (0, B.jsx)(`span`, { children: e.label }),
                              (0, B.jsx)(wu, { className: `size-4` }),
                            ],
                          })
                        : (0, B.jsx)(Nc, {
                            to: `to` in e ? e.to : `/`,
                            onClick: () => t(!1),
                            activeOptions: { exact: (`to` in e ? e.to : `/`) === `/` },
                            activeProps: { className: `text-primary-glow` },
                            className: `block border-b border-border/60 py-3.5 font-display text-lg font-semibold text-muted-foreground`,
                            children: e.label,
                          }),
                  },
                  `to` in e ? e.to : e.href,
                ),
              ),
            }),
            (0, B.jsx)(Nc, {
              to: `/join`,
              onClick: () => t(!1),
              className: `mt-6 block rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground`,
              children: `Join the Club`,
            }),
          ],
        }),
      ],
    })
  );
}
var Lu = {
    name: `Tech Fusion Club`,
    shortName: `Tech Fusion`,
    initials: `TF`,
    tagline: `Where ideas fuse into technology.`,
    university: `Shri Ramswaroop Memorial University (SRMU)`,
    foundedYear: 2019,
    email: `techfusionclub@srmu.ac.in`,
    coordinatorEmail: `techfusionclub@srmu.ac.in`,
    registrationFormUrl: `https://viveka.techfusion.club`,
    formspreeId: ``,
    socials: [
      { label: `Instagram`, href: `https://www.instagram.com/techfusionclub_srmu/` },
      { label: `LinkedIn`, href: `https://www.linkedin.com/in/techfusion-club/` },
      {
        label: `Facebook`,
        href: `https://www.facebook.com/people/Techfusion-Club/100088111141332/`,
      },
      { label: `GitHub`, href: `https://github.com/webdevpraveen/techfusionclub` },
    ],
    mission: `Tech Fusion Club exists to turn curiosity into shipped work. We give SRMU students a platform to learn in public, build with peers across engineering domains, and graduate with a portfolio of real production projects.`,
    vision: `To be the campus benchmark for student-led engineering at Shri Ramswaroop Memorial University — a club whose members drive university hackathons, open-source initiatives, and tech fest execution.`,
  },
  Ru = [
    { label: `Active members`, value: 320, suffix: `+` },
    { label: `Events hosted`, value: 500, suffix: `+` },
    { label: `Years active`, value: 7, prefix: `0` },
    { label: `Workshops conducted`, value: 800, suffix: `+` },
  ],
  zu = [
    {
      slug: `web-dev`,
      name: `Web Development`,
      blurb: `Product-grade front ends and APIs — from accessibility fundamentals to shipping to real users.`,
      stack: [`React`, `TypeScript`, `Node`, `Postgres`],
    },
    {
      slug: `ai-ml`,
      name: `AI / ML`,
      blurb: `Applied machine learning: model training, evaluation, and putting inference behind a usable interface.`,
      stack: [`PyTorch`, `scikit-learn`, `LLM APIs`, `Pandas`],
    },
    {
      slug: `cybersecurity`,
      name: `Cybersecurity`,
      blurb: `CTF practice, secure-by-default engineering, and responsible disclosure culture on campus.`,
      stack: [`Burp Suite`, `Wireshark`, `Linux`, `Cryptography`],
    },
    {
      slug: `app-dev`,
      name: `App Development`,
      blurb: `Cross-platform mobile builds, offline-first data, and store-ready release pipelines.`,
      stack: [`Flutter`, `React Native`, `Kotlin`, `Firebase`],
    },
    {
      slug: `cloud`,
      name: `Cloud & DevOps`,
      blurb: `Containers, CI/CD, and infrastructure-as-code — how software actually gets deployed.`,
      stack: [`Docker`, `GitHub Actions`, `AWS`, `Terraform`],
    },
    {
      slug: `design`,
      name: `Design`,
      blurb: `Interface craft and design systems: research, prototyping, motion, and visual identity work.`,
      stack: [`Figma`, `Design tokens`, `Prototyping`, `Branding`],
    },
  ],
  Bu = [
    {
      title: `Innovation`,
      body: `We prefer an unfinished original idea to a polished copy. Experiments are budgeted for, and failure is documented rather than hidden.`,
    },
    {
      title: `Collaboration`,
      body: `Every project pairs juniors with seniors across domains. Nobody ships alone, and nobody carries a team alone either.`,
    },
    {
      title: `Learning in public`,
      body: `Notes, repos, and recordings from every session stay open so knowledge outlives the batch that created it.`,
    },
    {
      title: `Craft`,
      body: `Working is the baseline, not the goal. We care about performance, accessibility, and the details a user actually feels.`,
    },
  ],
  Vu = [
    {
      year: `2019`,
      title: `Club founded`,
      body: `Nine students and one faculty advisor start a weekly build night in the CS department lab.`,
    },
    {
      year: `2020`,
      title: `First online cohort`,
      body: `Sessions move fully remote; the 6-week web development bootcamp reaches 140 students.`,
    },
    {
      year: `2021`,
      title: `Domain structure introduced`,
      body: `The club splits into specialised domains with student leads, formalising the mentorship ladder.`,
    },
    {
      year: `2022`,
      title: `Viveka 1.0 fest, edition one`,
      body: `First flagship 36-hour annual tech fest with 400+ registrations and four industry sponsors.`,
    },
    {
      year: `2024`,
      title: `Open-source initiative`,
      body: `Members land 60+ merged pull requests across public repositories during Hacktoberfest.`,
    },
    {
      year: `2026`,
      title: `320 members strong`,
      body: `Six active domains, a year-round event calendar, and an alumni network across ten companies.`,
    },
  ],
  Hu = {
    name: `Er. Abhishek Kumar Saxena`,
    designation: `Assistant Director, IQAC & Head Technical Society, SRMU`,
    photo: `https://www.vivekatheintelligence.in/abhishek.jpg`,
    email: `abhishek.saxena@srmu.ac.in`,
    message: `What sets Tech Fusion apart is continuity and hands-on building. Students do not simply attend a workshop and leave — they build real products and return as mentors. My role is to empower our student leads, foster university-wide technical excellence, and ensure every batch steps into industry with production-ready skills.`,
  },
  Uu = [
    { to: `/about`, label: `About` },
    { to: `/governance`, label: `Governance` },
    { to: `/events`, label: `Events` },
    { href: `https://viveka.techfusion.club`, label: `Viveka 6.0 Fest`, external: !0 },
    { to: `/team`, label: `Team` },
  ],
  Wu = [
    { to: `/gallery`, label: `Gallery` },
    { to: `/alumni`, label: `Alumni` },
    { to: `/join`, label: `Join Us` },
  ];
function Z() {
  return (0, B.jsx)(`footer`, {
    className: `border-t border-border/70 px-5 pb-10 pt-16 sm:px-8 sm:pt-20`,
    children: (0, B.jsxs)(`div`, {
      className: `mx-auto w-full max-w-7xl`,
      children: [
        (0, B.jsxs)(`div`, {
          className: `grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]`,
          children: [
            (0, B.jsxs)(`div`, {
              children: [
                (0, B.jsxs)(Nc, {
                  to: `/`,
                  className: `group flex items-center gap-3`,
                  children: [
                    (0, B.jsx)(Pu, { className: `h-10 sm:h-12 w-auto` }),
                    (0, B.jsxs)(`div`, {
                      className: `flex flex-col`,
                      children: [
                        (0, B.jsx)(`span`, {
                          className: `font-display text-base font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-glow to-accent drop-shadow-[0_0_10px_rgba(217,72,15,0.4)]`,
                          children: `TECH FUSION`,
                        }),
                        (0, B.jsx)(`span`, {
                          className: `font-mono text-[8px] uppercase tracking-[0.3em] text-primary-glow font-bold -mt-0.5`,
                          children: `CLUB`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, B.jsxs)(`p`, {
                  className: `mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground`,
                  children: [
                    Lu.tagline,
                    ` A student-led technical club at `,
                    Lu.university,
                    `, active since`,
                    ` `,
                    Lu.foundedYear,
                    `.`,
                  ],
                }),
              ],
            }),
            (0, B.jsxs)(`nav`, {
              "aria-label": `Footer quick links`,
              children: [
                (0, B.jsx)(`h2`, {
                  className: `font-mono text-[11px] uppercase tracking-[0.2em] text-foreground`,
                  children: `Explore`,
                }),
                (0, B.jsx)(`ul`, {
                  className: `mt-4 space-y-3 text-sm text-muted-foreground`,
                  children: Uu.map((e) =>
                    (0, B.jsx)(
                      `li`,
                      {
                        children:
                          `external` in e && e.external
                            ? (0, B.jsxs)(`a`, {
                                href: e.href,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                className: `inline-flex items-center gap-1 transition-colors hover:text-primary-glow text-primary-glow font-semibold`,
                                children: [e.label, (0, B.jsx)(wu, { className: `size-3` })],
                              })
                            : (0, B.jsx)(Nc, {
                                to: `to` in e ? e.to : `/`,
                                className: `transition-colors hover:text-primary-glow`,
                                children: e.label,
                              }),
                      },
                      `to` in e ? e.to : e.href,
                    ),
                  ),
                }),
              ],
            }),
            (0, B.jsxs)(`nav`, {
              "aria-label": `Footer secondary links`,
              children: [
                (0, B.jsx)(`h2`, {
                  className: `font-mono text-[11px] uppercase tracking-[0.2em] text-foreground`,
                  children: `More`,
                }),
                (0, B.jsx)(`ul`, {
                  className: `mt-4 space-y-3 text-sm text-muted-foreground`,
                  children: Wu.map((e) =>
                    (0, B.jsx)(
                      `li`,
                      {
                        children: (0, B.jsx)(Nc, {
                          to: e.to,
                          className: `transition-colors hover:text-primary-glow`,
                          children: e.label,
                        }),
                      },
                      e.to,
                    ),
                  ),
                }),
              ],
            }),
            (0, B.jsxs)(`div`, {
              children: [
                (0, B.jsx)(`h2`, {
                  className: `font-mono text-[11px] uppercase tracking-[0.2em] text-foreground`,
                  children: `Get in touch`,
                }),
                (0, B.jsxs)(`a`, {
                  href: `mailto:${Lu.email}`,
                  className: `mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-glow`,
                  children: [(0, B.jsx)(Tu, { className: `size-4 shrink-0` }), Lu.email],
                }),
                (0, B.jsx)(`ul`, {
                  className: `mt-6 flex flex-wrap gap-2`,
                  children: Lu.socials.map((e) =>
                    (0, B.jsx)(
                      `li`,
                      {
                        children: (0, B.jsx)(`a`, {
                          href: e.href,
                          target: `_blank`,
                          rel: `noreferrer noopener`,
                          className: `glass inline-flex rounded-full px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary-glow`,
                          children: e.label,
                        }),
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        (0, B.jsx)(`div`, { className: `divider-glow mt-14` }),
        (0, B.jsxs)(`div`, {
          className: `flex flex-col gap-3 pt-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:justify-between sm:text-left`,
          children: [
            (0, B.jsxs)(`p`, { children: [`© `, new Date().getFullYear(), ` `, Lu.name] }),
            (0, B.jsx)(`p`, { children: `Built by students, for students` }),
          ],
        }),
      ],
    }),
  });
}
function Gu() {
  return (0, B.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, B.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, B.jsx)(`h1`, { className: `text-7xl font-bold text-foreground`, children: `404` }),
        (0, B.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Page not found`,
        }),
        (0, B.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `The page you're looking for doesn't exist or has been moved.`,
        }),
        (0, B.jsx)(`div`, {
          className: `mt-6`,
          children: (0, B.jsx)(Nc, {
            to: `/`,
            className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
            children: `Go home`,
          }),
        }),
      ],
    }),
  });
}
function Ku({ error: e, reset: t }) {
  console.error(e);
  let n = Bs();
  return (0, B.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, B.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, B.jsx)(`h1`, {
          className: `text-xl font-semibold tracking-tight text-foreground`,
          children: `This page didn't load`,
        }),
        (0, B.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `Something went wrong on our end. You can try refreshing or head back home.`,
        }),
        (0, B.jsxs)(`div`, {
          className: `mt-6 flex flex-wrap justify-center gap-2`,
          children: [
            (0, B.jsx)(`button`, {
              onClick: () => {
                (n.invalidate(), t());
              },
              className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
              children: `Try again`,
            }),
            (0, B.jsx)(`a`, {
              href: `/`,
              className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,
              children: `Go home`,
            }),
          ],
        }),
      ],
    }),
  });
}
var qu = Lc()({
  head: () => ({
    meta: [
      { charSet: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { title: `Tech Fusion Club (TFC) | SRMU Technical Club by WebDevPraveen` },
      {
        name: `description`,
        content: `Tech Fusion Club (TFC) is the premier student-led technical club at SRMU. We organize Viveka, engineering hackathons, tech workshops, and coding events. Founded by Praveen Singh (webdevpraveen).`,
      },
      {
        name: `keywords`,
        content: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tech club, coding club srmu, technical events, hackathon, student community`,
      },
      { name: `author`, content: `Praveen Singh (webdevpraveen)` },
      {
        name: `robots`,
        content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
      },
      { property: `og:site_name`, content: `Tech Fusion Club SRMU` },
      { property: `og:type`, content: `website` },
      { property: `og:title`, content: `Tech Fusion Club (TFC) SRMU | Viveka & Tech Events` },
      {
        property: `og:description`,
        content: `Join the official Tech Fusion Club at SRMU. We host the Viveka fest, hackathons, and web development workshops. Lead by Praveen Singh (webdevpraveen).`,
      },
      {
        property: `og:image`,
        content: `https://techfusionclub.vercel.app/images/branding/og-preview.jpg`,
      },
      { name: `twitter:card`, content: `summary_large_image` },
      { name: `twitter:title`, content: `Tech Fusion Club (TFC) SRMU` },
      {
        name: `twitter:description`,
        content: `The premier student tech community at SRMU. Viveka fest, hackathons & more.`,
      },
    ],
    links: [
      { rel: `stylesheet`, href: mu },
      { rel: `preconnect`, href: `https://fonts.googleapis.com` },
      { rel: `preconnect`, href: `https://fonts.gstatic.com`, crossOrigin: `anonymous` },
      { rel: `icon`, href: `/favicon.ico`, type: `image/x-icon` },
      { rel: `canonical`, href: `https://techfusionclub.vercel.app` },
    ],
    scripts: [
      {
        type: `application/ld+json`,
        children: JSON.stringify({
          "@context": `https://schema.org`,
          "@type": `Organization`,
          name: `Tech Fusion Club`,
          alternateName: [`TFC SRMU`, `Tech Fusion Club SRMU`],
          url: `https://techfusionclub.vercel.app`,
          logo: `https://techfusionclub.vercel.app/images/branding/techfusionlogo.png`,
          description: `Student-led technical club running workshops, hackathons and the Viveka annual fest at SRMU.`,
          foundingDate: `2019`,
          founder: { "@type": `Person`, name: `Praveen Singh`, alternateName: `webdevpraveen` },
          email: `techfusionclub@srmu.ac.in`,
          sameAs: [`https://github.com/webdevpraveen`, `https://www.linkedin.com/in/webdevpraveen`],
          keywords: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu`,
        }),
      },
    ],
  }),
  shellComponent: Ju,
  component: Yu,
  notFoundComponent: Gu,
  errorComponent: Ku,
});
function Ju({ children: e }) {
  return (0, B.jsxs)(`html`, {
    lang: `en`,
    suppressHydrationWarning: !0,
    children: [
      (0, B.jsxs)(`head`, {
        children: [
          (0, B.jsx)(ul, {}),
          (0, B.jsx)(`link`, {
            rel: `preload`,
            as: `style`,
            href: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap`,
          }),
          (0, B.jsx)(`link`, {
            rel: `stylesheet`,
            href: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap`,
            media: `print`,
            onLoad: `this.media='all'`,
          }),
          (0, B.jsx)(`noscript`, {
            children: (0, B.jsx)(`link`, {
              rel: `stylesheet`,
              href: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap`,
            }),
          }),
          (0, B.jsx)(`script`, {
            dangerouslySetInnerHTML: {
              __html: `(function(){try{var t=localStorage.getItem("tf-theme");if(t==="dark"||t==="light"){document.documentElement.className=t}else{document.documentElement.className="light"}}catch(e){document.documentElement.className="light"}})()`,
            },
          }),
        ],
      }),
      (0, B.jsxs)(`body`, { children: [e, (0, B.jsx)(dl, {})] }),
    ],
  });
}
function Yu() {
  let { queryClient: e } = qu.useRouteContext();
  return (0, B.jsx)(Mu, {
    children: (0, B.jsxs)(pu, {
      client: e,
      children: [
        (0, B.jsx)(`a`, {
          href: `#main`,
          className: `sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-foreground`,
          children: `Skip to content`,
        }),
        (0, B.jsx)(hu, {}),
        (0, B.jsx)(Iu, {}),
        (0, B.jsx)(`main`, {
          id: `main`,
          className: `pt-16 sm:pt-20`,
          children: (0, B.jsx)(Xc, {}),
        }),
        (0, B.jsx)(Z, {}),
      ],
    }),
  });
}
var Xu = `modulepreload`,
  Zu = function (e) {
    return `/` + e;
  },
  Qu = {},
  $u = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve ? import.meta.resolve(e) : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = Zu(t, n)), (t = s(t)), t in Qu)) return;
          Qu[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : Xu),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`))));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  ed = zc(`/`)({
    head: () => ({
      meta: [
        { title: `Tech Fusion Club (TFC SRMU) | Coding, Viveka Fest & WebDevPraveen` },
        {
          name: `description`,
          content: `Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest. Founded by Praveen Singh (webdevpraveen).`,
        },
        {
          name: `keywords`,
          content: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, engineering club, tech community`,
        },
        { property: `og:title`, content: `Tech Fusion Club (TFC SRMU) | Viveka Fest & Coding` },
        {
          property: `og:description`,
          content: `Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.`,
        },
        { name: `twitter:title`, content: `Tech Fusion Club (TFC SRMU)` },
        {
          name: `twitter:description`,
          content: `Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.`,
        },
        { property: `og:url`, content: `/` },
      ],
      links: [{ rel: `canonical`, href: `/` }],
    }),
    component: Bc(
      () =>
        $u(
          () => import(`./routes-BWimgAqU.js`),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        ),
      `component`,
    ),
  }),
  td = zc(`/about`)({
    head: () => ({
      meta: [
        { title: `About Tech Fusion Club (TFC) | SRMU Coding Club by WebDevPraveen` },
        {
          name: `description`,
          content: `Discover Tech Fusion Club (TFC) at Shri Ramswaroop Memorial University (SRMU). Founded by Praveen Singh (webdevpraveen), we host Viveka fest, hackathons, and coding events.`,
        },
        {
          name: `keywords`,
          content: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, coding club srmu, tech fusion srmu`,
        },
        { property: `og:title`, content: `About Tech Fusion Club (TFC) | SRMU Coding Club` },
        {
          property: `og:description`,
          content: `Discover Tech Fusion Club (TFC) at Shri Ramswaroop Memorial University (SRMU). Founded by Praveen Singh (webdevpraveen), we host Viveka fest, hackathons, and coding events.`,
        },
        { property: `og:url`, content: `https://techfusionclub.vercel.app/about` },
        { name: `twitter:title`, content: `About Tech Fusion Club (TFC SRMU)` },
        {
          name: `twitter:description`,
          content: `Discover Tech Fusion Club (TFC) at SRMU. Founded by Praveen Singh (webdevpraveen), we host Viveka fest and hackathons.`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://techfusionclub.vercel.app/about` }],
    }),
    component: Bc(
      () => $u(() => import(`./about-BQ9ZY-Cw.js`), __vite__mapDeps([11, 1, 2, 3, 4, 12])),
      `component`,
    ),
  }),
  nd = zc(`/alumni`)({
    head: () => ({
      meta: [
        { title: `Alumni Network | Tech Fusion Club (TFC) SRMU` },
        {
          name: `description`,
          content: `Explore the successful alumni network of Tech Fusion Club (TFC) at SRMU. Past leaders, members, and tech professionals who built Viveka and the club's legacy alongside Praveen Singh (webdevpraveen).`,
        },
        {
          name: `keywords`,
          content: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tfc alumni, srmu alumni`,
        },
        { property: `og:title`, content: `Alumni Network | Tech Fusion Club (TFC) SRMU` },
        {
          property: `og:description`,
          content: `Explore the successful alumni network of Tech Fusion Club (TFC) at SRMU. Past leaders who built Viveka.`,
        },
        { property: `og:url`, content: `https://techfusionclub.vercel.app/alumni` },
        { name: `twitter:title`, content: `Alumni | Tech Fusion Club SRMU` },
        {
          name: `twitter:description`,
          content: `Explore the successful alumni network of Tech Fusion Club (TFC) at SRMU. Past leaders who built Viveka.`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://techfusionclub.vercel.app/alumni` }],
    }),
    component: Bc(
      () => $u(() => import(`./alumni-D9GsiMtd.js`), __vite__mapDeps([13, 1, 2, 3, 6, 14, 9])),
      `component`,
    ),
  }),
  rd = zc(`/gallery`)({
    head: () => ({
      meta: [
        { title: `Event Gallery | Tech Fusion Club (TFC) SRMU` },
        {
          name: `description`,
          content: `Photos from Tech Fusion Club (TFC) workshops, engineering hackathons, and the Viveka fest at SRMU. WebDevPraveen and the tech community in action.`,
        },
        {
          name: `keywords`,
          content: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tfc gallery, srmu tech events`,
        },
        { property: `og:title`, content: `Event Gallery | Tech Fusion Club (TFC) SRMU` },
        {
          property: `og:description`,
          content: `Photos from Tech Fusion Club (TFC) workshops and the Viveka fest.`,
        },
        { property: `og:url`, content: `https://techfusionclub.vercel.app/gallery` },
        { name: `twitter:title`, content: `Event Gallery | Tech Fusion Club SRMU` },
        {
          name: `twitter:description`,
          content: `Photos from Tech Fusion Club (TFC) workshops and the Viveka fest.`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://techfusionclub.vercel.app/gallery` }],
    }),
    component: Bc(
      () => $u(() => import(`./gallery-B30rL9wq.js`), __vite__mapDeps([15, 1, 3, 16, 5, 8, 10])),
      `component`,
    ),
  }),
  id = zc(`/governance`)({
    head: () => ({
      meta: [
        { title: `Governance | Tech Fusion Club (TFC) SRMU` },
        {
          name: `description`,
          content: `Meet the visionary patrons, registrar, and faculty coordinators governing Tech Fusion Club (TFC) at Shri Ramswaroop Memorial University (SRMU). Powering Viveka fest and tech communities.`,
        },
        {
          name: `keywords`,
          content: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tfc governance, srmu faculty`,
        },
        { property: `og:title`, content: `Governance | Tech Fusion Club (TFC) SRMU` },
        {
          property: `og:description`,
          content: `Meet the visionary patrons, registrar, and faculty coordinators governing Tech Fusion Club (TFC) at SRMU.`,
        },
        { property: `og:url`, content: `https://techfusionclub.vercel.app/governance` },
        { name: `twitter:title`, content: `Governance | Tech Fusion Club SRMU` },
        {
          name: `twitter:description`,
          content: `Meet the visionary patrons, registrar, and faculty coordinators governing Tech Fusion Club (TFC) at SRMU.`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://techfusionclub.vercel.app/governance` }],
    }),
    component: Bc(
      () =>
        $u(() => import(`./governance-CXsE5b0W.js`), __vite__mapDeps([17, 1, 2, 3, 12, 14, 7, 8])),
      `component`,
    ),
  }),
  ad = zc(`/join`)({
    head: () => ({
      meta: [
        { title: `Join Tech Fusion Club (TFC) SRMU | Tech Community` },
        {
          name: `description`,
          content: `Apply to join Tech Fusion Club (TFC) at SRMU. Get mentored, participate in Viveka hackathons, and learn web development with Praveen Singh (webdevpraveen).`,
        },
        {
          name: `keywords`,
          content: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, join tech club, srmu coding community`,
        },
        { property: `og:title`, content: `Join Tech Fusion Club (TFC) SRMU` },
        {
          property: `og:description`,
          content: `Apply to join Tech Fusion Club (TFC) at SRMU. Participate in Viveka hackathons.`,
        },
        { property: `og:url`, content: `https://techfusionclub.vercel.app/join` },
        { name: `twitter:title`, content: `Join Tech Fusion Club SRMU` },
        {
          name: `twitter:description`,
          content: `Apply to join Tech Fusion Club (TFC) at SRMU. Participate in Viveka hackathons.`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://techfusionclub.vercel.app/join` }],
    }),
    component: Bc(
      () => $u(() => import(`./join-DKx0ygOR.js`), __vite__mapDeps([18, 1, 3])),
      `component`,
    ),
  }),
  od = zc(`/team`)({
    head: () => ({
      meta: [
        { title: `Core Team | Tech Fusion Club (TFC) SRMU | WebDevPraveen` },
        {
          name: `description`,
          content: `Meet the core team of Tech Fusion Club (TFC) at SRMU. Faculty Coordinators, General Secretaries, and department heads driving Viveka fest and tech events. Founded by Praveen Singh (webdevpraveen).`,
        },
        {
          name: `keywords`,
          content: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tech fusion team, coding club leaders`,
        },
        { property: `og:title`, content: `Core Team | Tech Fusion Club (TFC) SRMU` },
        {
          property: `og:description`,
          content: `Meet the core team of Tech Fusion Club (TFC) at SRMU. Driving Viveka fest and tech events.`,
        },
        { property: `og:url`, content: `https://techfusionclub.vercel.app/team` },
        { name: `twitter:title`, content: `Team | Tech Fusion Club (TFC SRMU)` },
        {
          name: `twitter:description`,
          content: `Meet the core team of Tech Fusion Club (TFC) at SRMU. Driving Viveka fest and tech events.`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://techfusionclub.vercel.app/team` }],
    }),
    component: Bc(
      () => $u(() => import(`./team-Bj8dXaEr.js`), __vite__mapDeps([19, 1, 2, 3, 6, 14])),
      `component`,
    ),
  }),
  sd = zc(`/events/`)({
    head: () => ({
      meta: [
        { title: `Events & Hackathons | Tech Fusion Club (TFC) SRMU` },
        {
          name: `description`,
          content: `Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU. Web development, AI/ML coding events hosted by Praveen Singh (webdevpraveen).`,
        },
        {
          name: `keywords`,
          content: `Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tech events, hackathon srmu, coding workshops`,
        },
        { property: `og:title`, content: `Events & Hackathons | Tech Fusion Club SRMU` },
        {
          property: `og:description`,
          content: `Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU.`,
        },
        { property: `og:url`, content: `https://techfusionclub.vercel.app/events` },
        { name: `twitter:title`, content: `Tech Fusion Club (TFC) Events` },
        {
          name: `twitter:description`,
          content: `Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU.`,
        },
      ],
      links: [{ rel: `canonical`, href: `https://techfusionclub.vercel.app/events` }],
    }),
    component: Bc(
      () =>
        $u(() => import(`./events.index-G5sr_uD1.js`), __vite__mapDeps([20, 1, 2, 3, 5, 16, 8])),
      `component`,
    ),
  }),
  cd = {
    IndexRoute: ed.update({ id: `/`, path: `/`, getParentRoute: () => qu }),
    AboutRoute: td.update({ id: `/about`, path: `/about`, getParentRoute: () => qu }),
    AlumniRoute: nd.update({ id: `/alumni`, path: `/alumni`, getParentRoute: () => qu }),
    GalleryRoute: rd.update({ id: `/gallery`, path: `/gallery`, getParentRoute: () => qu }),
    GovernanceRoute: id.update({
      id: `/governance`,
      path: `/governance`,
      getParentRoute: () => qu,
    }),
    JoinRoute: ad.update({ id: `/join`, path: `/join`, getParentRoute: () => qu }),
    TeamRoute: od.update({ id: `/team`, path: `/team`, getParentRoute: () => qu }),
    EventsIndexRoute: sd.update({ id: `/events/`, path: `/events/`, getParentRoute: () => qu }),
  },
  ld = qu._addFileChildren(cd),
  ud = () =>
    nl({
      routeTree: ld,
      context: { queryClient: new du() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
async function dd() {
  let e = await ud(),
    t;
  if (vl) {
    let n = await vl.getOptions();
    ((n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr));
  } else ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }));
  return (
    t.push(Ts),
    e.options.serializationAdapters && t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.ids.get().length || (await Xn(e)),
    e
  );
}
var fd = dd;
function pd() {
  return fd().finally(() => window.$_TSR?.h());
}
var md;
function hd() {
  return (
    (md ||= pd()),
    (0, B.jsx)(js, { promise: md, children: (e) => (0, B.jsx)(al, { router: e }) })
  );
}
var gd = u();
(0, z.startTransition)(() => {
  (0, gd.hydrateRoot)(document, (0, B.jsx)(z.StrictMode, { children: (0, B.jsx)(hd, {}) }));
});
export {
  Vu as a,
  ku as c,
  Nc as d,
  Ru as i,
  wu as l,
  zu as n,
  Bu as o,
  Hu as r,
  Pu as s,
  Lu as t,
  Cu as u,
};
