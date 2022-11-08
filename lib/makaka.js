import we from "react";
/*!
* makaka v0.1.0 
* https://github.com/make3waves/makaka
* (c) 2022 @make3waves
* Released under the MIT License.
*/
var U = function() {
  return U = Object.assign || function(h) {
    for (var c, s = 1, p = arguments.length; s < p; s++) {
      c = arguments[s];
      for (var f in c)
        Object.prototype.hasOwnProperty.call(c, f) && (h[f] = c[f]);
    }
    return h;
  }, U.apply(this, arguments);
};
function cr(i, h) {
  var c = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) && h.indexOf(s) < 0 && (c[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, s = Object.getOwnPropertySymbols(i); p < s.length; p++)
      h.indexOf(s[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[p]) && (c[s[p]] = i[s[p]]);
  return c;
}
var Ce = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  if (Oe)
    return A;
  Oe = 1;
  var i = we, h = Symbol.for("react.element"), c = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, p = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(g, v, O) {
    var _, T = {}, w = null, $ = null;
    O !== void 0 && (w = "" + O), v.key !== void 0 && (w = "" + v.key), v.ref !== void 0 && ($ = v.ref);
    for (_ in v)
      s.call(v, _) && !f.hasOwnProperty(_) && (T[_] = v[_]);
    if (g && g.defaultProps)
      for (_ in v = g.defaultProps, v)
        T[_] === void 0 && (T[_] = v[_]);
    return { $$typeof: h, type: g, key: w, ref: $, props: T, _owner: p.current };
  }
  return A.Fragment = c, A.jsx = E, A.jsxs = E, A;
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
var Te;
function dr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var i = we, h = Symbol.for("react.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Z = Symbol.iterator, xe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var j = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Fe = !1, Ae = !1, Ie = !1, Ne = !1, $e = !1, Q;
    Q = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === f || $e || e === p || e === O || e === _ || Ne || e === $ || Fe || Ae || Ie || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === T || e.$$typeof === E || e.$$typeof === g || e.$$typeof === v || e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case c:
          return "Portal";
        case f:
          return "Profiler";
        case p:
          return "StrictMode";
        case O:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return ee(r) + ".Consumer";
          case E:
            var t = e;
            return ee(t._context) + ".Provider";
          case v:
            return Ye(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case w: {
            var u = e, l = u._payload, o = u._init;
            try {
              return P(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, D = 0, re, te, ne, ae, ie, oe, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Le() {
      {
        if (D === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, ie = console.group, oe = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
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
    function Ve() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: re
            }),
            info: C({}, e, {
              value: te
            }),
            warn: C({}, e, {
              value: ne
            }),
            error: C({}, e, {
              value: ae
            }),
            group: C({}, e, {
              value: ie
            }),
            groupCollapsed: C({}, e, {
              value: oe
            }),
            groupEnd: C({}, e, {
              value: ue
            })
          });
        }
        D < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = j.ReactCurrentDispatcher, z;
    function W(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var B = !1, Y;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Me();
    }
    function le(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = q.current, q.current = null, Le();
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
`), y = n.stack.split(`
`), d = a.length - 1, b = y.length - 1; d >= 1 && b >= 0 && a[d] !== y[b]; )
            b--;
          for (; d >= 1 && b >= 0; d--, b--)
            if (a[d] !== y[b]) {
              if (d !== 1 || b !== 1)
                do
                  if (d--, b--, b < 0 || a[d] !== y[b]) {
                    var R = `
` + a[d].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, R), R;
                  }
                while (d >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        B = !1, q.current = l, Ve(), Error.prepareStackTrace = u;
      }
      var k = e ? e.displayName || e.name : "", Re = k ? W(k) : "";
      return typeof e == "function" && Y.set(e, Re), Re;
    }
    function Ue(e, r, t) {
      return le(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, qe(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case O:
          return W("Suspense");
        case _:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ue(e.render);
          case T:
            return L(e.type, r, t);
          case w: {
            var n = e, u = n._payload, l = n._init;
            try {
              return L(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, fe = {}, ce = j.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, u) {
      {
        var l = Function.call.bind(V);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              a = d;
            }
            a && !(a instanceof Error) && (M(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(u), m("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Be = Array.isArray;
    function J(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function de(e) {
      if (Ge(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ve(e);
    }
    var F = j.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, be, G;
    G = {};
    function He(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = P(F.current.type);
        G[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(F.current.type), e.ref), G[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          pe || (pe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          be || (be = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, u, l, o) {
      var a = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: l
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
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, u) {
      {
        var l, o = {}, a = null, y = null;
        t !== void 0 && (de(t), a = "" + t), Xe(r) && (de(r.key), a = "" + r.key), He(r) && (y = r.ref, Ze(r, u));
        for (l in r)
          V.call(r, l) && !Ke.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            o[l] === void 0 && (o[l] = d[l]);
        }
        if (a || y) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, b), y && er(o, b);
        }
        return rr(e, a, y, u, n, F.current, o);
      }
    }
    var K = j.ReactCurrentOwner, he = j.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function me() {
      {
        if (K.current) {
          var e = P(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function ar(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + P(e._owner.type) + "."), x(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && ge(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = ke(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), o; !(o = l.next()).done; )
              X(o.value) && ge(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var u = P(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    function Ee(e, r, t, n, u, l) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = nr(u);
          y ? a += y : a += me();
          var d;
          e === null ? d = "null" : J(e) ? d = "array" : e !== void 0 && e.$$typeof === h ? (d = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, a);
        }
        var b = tr(e, r, t, u, l);
        if (b == null)
          return b;
        if (o) {
          var R = r.children;
          if (R !== void 0)
            if (n)
              if (J(R)) {
                for (var k = 0; k < R.length; k++)
                  _e(R[k], e);
                Object.freeze && Object.freeze(R);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(R, e);
        }
        return e === s ? or(b) : ir(b), b;
      }
    }
    function ur(e, r, t) {
      return Ee(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ee(e, r, t, !1);
    }
    var lr = sr, fr = ur;
    I.Fragment = s, I.jsx = lr, I.jsxs = fr;
  }()), I;
}
(function(i) {
  process.env.NODE_ENV === "production" ? i.exports = vr() : i.exports = dr();
})(Ce);
const Pe = Ce.exports.jsx;
var je = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(i) {
  (function() {
    var h = {}.hasOwnProperty;
    function c() {
      for (var s = [], p = 0; p < arguments.length; p++) {
        var f = arguments[p];
        if (!!f) {
          var E = typeof f;
          if (E === "string" || E === "number")
            s.push(f);
          else if (Array.isArray(f)) {
            if (f.length) {
              var g = c.apply(null, f);
              g && s.push(g);
            }
          } else if (E === "object") {
            if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]")) {
              s.push(f.toString());
              continue;
            }
            for (var v in f)
              h.call(f, v) && f[v] && s.push(v);
          }
        }
      }
      return s.join(" ");
    }
    i.exports ? (c.default = c, i.exports = c) : window.classNames = c;
  })();
})(je);
const pr = je.exports;
var Se;
(function(i) {
  i.Large = "lg", i.Small = "sm";
})(Se || (Se = {}));
var N;
(function(i) {
  i.Primary = "primary", i.Default = "default", i.Danger = "danger", i.Link = "link";
})(N || (N = {}));
var br = function(i) {
  var h, c = i.btnType, s = i.className, p = i.disabled, f = i.size, E = i.children, g = i.href, v = cr(
    i,
    ["btnType", "className", "disabled", "size", "children", "href"]
  ), O = pr("btn", s, (h = {}, h["btn-".concat(c)] = c, h["btn-".concat(f)] = f, h.disabled = c === N.Link && p, h));
  return c === N.Link && g ? Pe("a", U({
    className: O,
    href: g
  }, v, {
    children: E
  })) : Pe("button", U({
    className: O,
    disabled: p
  }, v, {
    children: E
  }));
};
br.defaultProps = {
  disabled: !1,
  btnType: N.Default
};
export {
  br as Button
};
