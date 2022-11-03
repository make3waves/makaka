import Oe from "react";
var Se = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(g) {
  (function() {
    var m = {}.hasOwnProperty;
    function _() {
      for (var d = [], R = 0; R < arguments.length; R++) {
        var f = arguments[R];
        if (!!f) {
          var y = typeof f;
          if (y === "string" || y === "number")
            d.push(f);
          else if (Array.isArray(f)) {
            if (f.length) {
              var b = _.apply(null, f);
              b && d.push(b);
            }
          } else if (y === "object") {
            if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]")) {
              d.push(f.toString());
              continue;
            }
            for (var s in f)
              m.call(f, s) && f[s] && d.push(s);
          }
        }
      }
      return d.join(" ");
    }
    g.exports ? (_.default = _, g.exports = _) : window.classNames = _;
  })();
})(Se);
const sr = Se.exports;
var we = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function lr() {
  if (_e)
    return A;
  _e = 1;
  var g = Oe, m = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, R = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(b, s, C) {
    var h, T = {}, w = null, $ = null;
    C !== void 0 && (w = "" + C), s.key !== void 0 && (w = "" + s.key), s.ref !== void 0 && ($ = s.ref);
    for (h in s)
      d.call(s, h) && !f.hasOwnProperty(h) && (T[h] = s[h]);
    if (b && b.defaultProps)
      for (h in s = b.defaultProps, s)
        T[h] === void 0 && (T[h] = s[h]);
    return { $$typeof: m, type: b, key: w, ref: $, props: T, _owner: R.current };
  }
  return A.Fragment = _, A.jsx = y, A.jsxs = y, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function fr() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    var g = Oe, m = Symbol.for("react.element"), _ = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), b = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), H = Symbol.iterator, Pe = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var x = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var je = !1, ke = !1, De = !1, Fe = !1, Ae = !1, X;
    X = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === f || Ae || e === R || e === C || e === h || Fe || e === $ || je || ke || De || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === T || e.$$typeof === y || e.$$typeof === b || e.$$typeof === s || e.$$typeof === X || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Z(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case _:
          return "Portal";
        case f:
          return "Profiler";
        case R:
          return "StrictMode";
        case C:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return Z(r) + ".Consumer";
          case y:
            var t = e;
            return Z(t._context) + ".Provider";
          case s:
            return $e(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case w: {
            var i = e, u = i._payload, o = i._init;
            try {
              return O(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, D = 0, Q, ee, re, te, ne, ae, oe;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function Ne() {
      {
        if (D === 0) {
          Q = console.log, ee = console.info, re = console.warn, te = console.error, ne = console.group, ae = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function We() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: Q
            }),
            info: P({}, e, {
              value: ee
            }),
            warn: P({}, e, {
              value: re
            }),
            error: P({}, e, {
              value: te
            }),
            group: P({}, e, {
              value: ne
            }),
            groupCollapsed: P({}, e, {
              value: ae
            }),
            groupEnd: P({}, e, {
              value: oe
            })
          });
        }
        D < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = x.ReactCurrentDispatcher, U;
    function N(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = !1, W;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ye();
    }
    function ue(e, r) {
      if (!e || B)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = M.current, M.current = null, Ne();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (S) {
              n = S;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var a = S.stack.split(`
`), p = n.stack.split(`
`), l = a.length - 1, c = p.length - 1; l >= 1 && c >= 0 && a[l] !== p[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== p[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== p[c]) {
                    var E = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, E), E;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        B = !1, M.current = u, We(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", ge = k ? N(k) : "";
      return typeof e == "function" && W.set(e, ge), ge;
    }
    function Le(e, r, t) {
      return ue(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Ve(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case C:
          return N("Suspense");
        case h:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Le(e.render);
          case T:
            return Y(e.type, r, t);
          case w: {
            var n = e, i = n._payload, u = n._init;
            try {
              return Y(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, se = {}, le = x.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, i) {
      {
        var u = Function.call.bind(L);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (V(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in se) && (se[a.message] = !0, V(i), v("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ue = Array.isArray;
    function q(e) {
      return Ue(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return fe(e), !1;
      } catch {
        return !0;
      }
    }
    function fe(e) {
      return "" + e;
    }
    function ce(e) {
      if (qe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), fe(e);
    }
    var F = x.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, ve, J;
    J = {};
    function ze(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = O(F.current.type);
        J[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(F.current.type), e.ref), J[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          de || (de = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          ve || (ve = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, i, u, o) {
      var a = {
        $$typeof: m,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (ce(t), a = "" + t), Ge(r) && (ce(r.key), a = "" + r.key), ze(r) && (p = r.ref, Ke(r, i));
        for (u in r)
          L.call(r, u) && !Je.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (a || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, c), p && Xe(o, c);
        }
        return Ze(e, a, p, i, n, F.current, o);
      }
    }
    var z = x.ReactCurrentOwner, pe = x.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function be() {
      {
        if (z.current) {
          var e = O(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var he = {};
    function rr(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (he[t])
          return;
        he[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + O(e._owner.type) + "."), j(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && me(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ce(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              K(o.value) && me(o.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = O(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Ee(e, r, t, n, i, u) {
      {
        var o = Ie(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = er(i);
          p ? a += p : a += be();
          var l;
          e === null ? l = "null" : q(e) ? l = "array" : e !== void 0 && e.$$typeof === m ? (l = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = Qe(e, r, t, i, u);
        if (c == null)
          return c;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (q(E)) {
                for (var k = 0; k < E.length; k++)
                  ye(E[k], e);
                Object.freeze && Object.freeze(E);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(E, e);
        }
        return e === d ? nr(c) : tr(c), c;
      }
    }
    function ar(e, r, t) {
      return Ee(e, r, t, !0);
    }
    function or(e, r, t) {
      return Ee(e, r, t, !1);
    }
    var ir = or, ur = ar;
    I.Fragment = d, I.jsx = ir, I.jsxs = ur;
  }()), I;
}
(function(g) {
  process.env.NODE_ENV === "production" ? g.exports = lr() : g.exports = fr();
})(we);
const Te = we.exports.jsx, cr = (g) => {
  const {
    btnType: m,
    className: _,
    disabled: d,
    size: R,
    children: f,
    href: y,
    ...b
  } = g, s = sr("btn", _, {
    [`btn-${m}`]: m,
    [`btn-${R}`]: R,
    disabled: m === "link" && d
  });
  return m === "link" && y ? /* @__PURE__ */ Te("a", {
    className: s,
    href: y,
    ...b,
    children: f
  }) : /* @__PURE__ */ Te("button", {
    className: s,
    disabled: d,
    ...b,
    children: f
  });
};
cr.defaultProps = {
  disabled: !1,
  btnType: "default"
};
export {
  cr as Button
};
