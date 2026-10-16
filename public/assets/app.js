(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    r(i); new MutationObserver(i => { for (const l of i)
    if (l.type === "childList")
        for (const a of l.addedNodes)
            a.tagName === "LINK" && a.rel === "modulepreload" && r(a); }).observe(document, { childList: !0, subtree: !0 }); function n(i) { const l = {}; return i.integrity && (l.integrity = i.integrity), i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l; } function r(i) { if (i.ep)
    return; i.ep = !0; const l = n(i); fetch(i.href, l); } })();
function nd(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var Ro = { exports: {} }, wi = {}, _o = { exports: {} }, V = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr = Symbol.for("react.element"), rd = Symbol.for("react.portal"), id = Symbol.for("react.fragment"), ld = Symbol.for("react.strict_mode"), ad = Symbol.for("react.profiler"), sd = Symbol.for("react.provider"), od = Symbol.for("react.context"), ud = Symbol.for("react.forward_ref"), cd = Symbol.for("react.suspense"), dd = Symbol.for("react.memo"), fd = Symbol.for("react.lazy"), ps = Symbol.iterator;
function pd(e) { return e === null || typeof e != "object" ? null : (e = ps && e[ps] || e["@@iterator"], typeof e == "function" ? e : null); }
var Ao = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Io = Object.assign, Po = {};
function Rn(e, t, n) { this.props = e, this.context = t, this.refs = Po, this.updater = n || Ao; }
Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
Rn.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function Mo() { }
Mo.prototype = Rn.prototype;
function ca(e, t, n) { this.props = e, this.context = t, this.refs = Po, this.updater = n || Ao; }
var da = ca.prototype = new Mo;
da.constructor = ca;
Io(da, Rn.prototype);
da.isPureReactComponent = !0;
var ms = Array.isArray, Lo = Object.prototype.hasOwnProperty, fa = { current: null }, Uo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oo(e, t, n) { var r, i = {}, l = null, a = null; if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (l = "" + t.key), t)
        Lo.call(t, r) && !Uo.hasOwnProperty(r) && (i[r] = t[r]); var s = arguments.length - 2; if (s === 1)
    i.children = n;
else if (1 < s) {
    for (var u = Array(s), d = 0; d < s; d++)
        u[d] = arguments[d + 2];
    i.children = u;
} if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
        i[r] === void 0 && (i[r] = s[r]); return { $$typeof: gr, type: e, key: l, ref: a, props: i, _owner: fa.current }; }
function md(e, t) { return { $$typeof: gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function pa(e) { return typeof e == "object" && e !== null && e.$$typeof === gr; }
function hd(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var hs = /\/+/g;
function Bi(e, t) { return typeof e == "object" && e !== null && e.key != null ? hd("" + e.key) : t.toString(36); }
function Vr(e, t, n, r, i) { var l = typeof e; (l === "undefined" || l === "boolean") && (e = null); var a = !1; if (e === null)
    a = !0;
else
    switch (l) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object": switch (e.$$typeof) {
            case gr:
            case rd: a = !0;
        }
    } if (a)
    return a = e, i = i(a), e = r === "" ? "." + Bi(a, 0) : r, ms(i) ? (n = "", e != null && (n = e.replace(hs, "$&/") + "/"), Vr(i, t, n, "", function (d) { return d; })) : i != null && (pa(i) && (i = md(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(hs, "$&/") + "/") + e)), t.push(i)), 1; if (a = 0, r = r === "" ? "." : r + ":", ms(e))
    for (var s = 0; s < e.length; s++) {
        l = e[s];
        var u = r + Bi(l, s);
        a += Vr(l, t, n, u, i);
    }
else if (u = pd(e), typeof u == "function")
    for (e = u.call(e), s = 0; !(l = e.next()).done;)
        l = l.value, u = r + Bi(l, s++), a += Vr(l, t, n, u, i);
else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return a; }
function wr(e, t, n) { if (e == null)
    return e; var r = [], i = 0; return Vr(e, r, "", "", function (l) { return t.call(n, l, i++); }), r; }
function yd(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var xe = { current: null }, Dr = { transition: null }, gd = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: Dr, ReactCurrentOwner: fa };
function bo() { throw Error("act(...) is not supported in production builds of React."); }
V.Children = { map: wr, forEach: function (e, t, n) { wr(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return wr(e, function () { t++; }), t; }, toArray: function (e) { return wr(e, function (t) { return t; }) || []; }, only: function (e) { if (!pa(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
V.Component = Rn;
V.Fragment = id;
V.Profiler = ad;
V.PureComponent = ca;
V.StrictMode = ld;
V.Suspense = cd;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gd;
V.act = bo;
V.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = Io({}, e.props), i = e.key, l = e.ref, a = e._owner; if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, a = fa.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var s = e.type.defaultProps;
    for (u in t)
        Lo.call(t, u) && !Uo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
} var u = arguments.length - 2; if (u === 1)
    r.children = n;
else if (1 < u) {
    s = Array(u);
    for (var d = 0; d < u; d++)
        s[d] = arguments[d + 2];
    r.children = s;
} return { $$typeof: gr, type: e.type, key: i, ref: l, props: r, _owner: a }; };
V.createContext = function (e) { return e = { $$typeof: od, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: sd, _context: e }, e.Consumer = e; };
V.createElement = Oo;
V.createFactory = function (e) { var t = Oo.bind(null, e); return t.type = e, t; };
V.createRef = function () { return { current: null }; };
V.forwardRef = function (e) { return { $$typeof: ud, render: e }; };
V.isValidElement = pa;
V.lazy = function (e) { return { $$typeof: fd, _payload: { _status: -1, _result: e }, _init: yd }; };
V.memo = function (e, t) { return { $$typeof: dd, type: e, compare: t === void 0 ? null : t }; };
V.startTransition = function (e) { var t = Dr.transition; Dr.transition = {}; try {
    e();
}
finally {
    Dr.transition = t;
} };
V.unstable_act = bo;
V.useCallback = function (e, t) { return xe.current.useCallback(e, t); };
V.useContext = function (e) { return xe.current.useContext(e); };
V.useDebugValue = function () { };
V.useDeferredValue = function (e) { return xe.current.useDeferredValue(e); };
V.useEffect = function (e, t) { return xe.current.useEffect(e, t); };
V.useId = function () { return xe.current.useId(); };
V.useImperativeHandle = function (e, t, n) { return xe.current.useImperativeHandle(e, t, n); };
V.useInsertionEffect = function (e, t) { return xe.current.useInsertionEffect(e, t); };
V.useLayoutEffect = function (e, t) { return xe.current.useLayoutEffect(e, t); };
V.useMemo = function (e, t) { return xe.current.useMemo(e, t); };
V.useReducer = function (e, t, n) { return xe.current.useReducer(e, t, n); };
V.useRef = function (e) { return xe.current.useRef(e); };
V.useState = function (e) { return xe.current.useState(e); };
V.useSyncExternalStore = function (e, t, n) { return xe.current.useSyncExternalStore(e, t, n); };
V.useTransition = function () { return xe.current.useTransition(); };
V.version = "18.3.1";
_o.exports = V;
var P = _o.exports;
const Vo = nd(P); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var vd = P, kd = Symbol.for("react.element"), Sd = Symbol.for("react.fragment"), xd = Object.prototype.hasOwnProperty, wd = vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Do(e, t, n) { var r, i = {}, l = null, a = null; n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (a = t.ref); for (r in t)
    xd.call(t, r) && !zd.hasOwnProperty(r) && (i[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]); return { $$typeof: kd, type: e, key: l, ref: a, props: i, _owner: wd.current }; }
wi.Fragment = Sd;
wi.jsx = Do;
wi.jsxs = Do;
Ro.exports = wi;
var o = Ro.exports, hl = {}, Fo = { exports: {} }, Ue = {}, Ho = { exports: {} }, Bo = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(z, O) { var b = z.length; z.push(O); e: for (; 0 < b;) {
    var $ = b - 1 >>> 1, X = z[$];
    if (0 < i(X, O))
        z[$] = O, z[b] = X, b = $;
    else
        break e;
} } function n(z) { return z.length === 0 ? null : z[0]; } function r(z) { if (z.length === 0)
    return null; var O = z[0], b = z.pop(); if (b !== O) {
    z[0] = b;
    e: for (var $ = 0, X = z.length, ze = X >>> 1; $ < ze;) {
        var Ne = 2 * ($ + 1) - 1, Lt = z[Ne], je = Ne + 1, Ut = z[je];
        if (0 > i(Lt, b))
            je < X && 0 > i(Ut, Lt) ? (z[$] = Ut, z[je] = b, $ = je) : (z[$] = Lt, z[Ne] = b, $ = Ne);
        else if (je < X && 0 > i(Ut, b))
            z[$] = Ut, z[je] = b, $ = je;
        else
            break e;
    }
} return O; } function i(z, O) { var b = z.sortIndex - O.sortIndex; return b !== 0 ? b : z.id - O.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () { return l.now(); };
}
else {
    var a = Date, s = a.now();
    e.unstable_now = function () { return a.now() - s; };
} var u = [], d = [], h = 1, m = null, y = 3, S = !1, w = !1, k = !1, v = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function f(z) { for (var O = n(d); O !== null;) {
    if (O.callback === null)
        r(d);
    else if (O.startTime <= z)
        r(d), O.sortIndex = O.expirationTime, t(u, O);
    else
        break;
    O = n(d);
} } function g(z) { if (k = !1, f(z), !w)
    if (n(u) !== null)
        w = !0, ce(x);
    else {
        var O = n(d);
        O !== null && Mt(g, O.startTime - z);
    } } function x(z, O) { w = !1, k && (k = !1, p(T), T = -1), S = !0; var b = y; try {
    for (f(O), m = n(u); m !== null && (!(m.expirationTime > O) || z && !I());) {
        var $ = m.callback;
        if (typeof $ == "function") {
            m.callback = null, y = m.priorityLevel;
            var X = $(m.expirationTime <= O);
            O = e.unstable_now(), typeof X == "function" ? m.callback = X : m === n(u) && r(u), f(O);
        }
        else
            r(u);
        m = n(u);
    }
    if (m !== null)
        var ze = !0;
    else {
        var Ne = n(d);
        Ne !== null && Mt(g, Ne.startTime - O), ze = !1;
    }
    return ze;
}
finally {
    m = null, y = b, S = !1;
} } var N = !1, E = null, T = -1, _ = 5, A = -1; function I() { return !(e.unstable_now() - A < _); } function te() { if (E !== null) {
    var z = e.unstable_now();
    A = z;
    var O = !0;
    try {
        O = E(!0, z);
    }
    finally {
        O ? M() : (N = !1, E = null);
    }
}
else
    N = !1; } var M; if (typeof c == "function")
    M = function () { c(te); };
else if (typeof MessageChannel < "u") {
    var D = new MessageChannel, H = D.port2;
    D.port1.onmessage = te, M = function () { H.postMessage(null); };
}
else
    M = function () { v(te, 0); }; function ce(z) { E = z, N || (N = !0, M()); } function Mt(z, O) { T = v(function () { z(e.unstable_now()); }, O); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (z) { z.callback = null; }, e.unstable_continueExecution = function () { w || S || (w = !0, ce(x)); }, e.unstable_forceFrameRate = function (z) { 0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < z ? Math.floor(1e3 / z) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return y; }, e.unstable_getFirstCallbackNode = function () { return n(u); }, e.unstable_next = function (z) { switch (y) {
    case 1:
    case 2:
    case 3:
        var O = 3;
        break;
    default: O = y;
} var b = y; y = O; try {
    return z();
}
finally {
    y = b;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (z, O) { switch (z) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: z = 3;
} var b = y; y = z; try {
    return O();
}
finally {
    y = b;
} }, e.unstable_scheduleCallback = function (z, O, b) { var $ = e.unstable_now(); switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? $ + b : $) : b = $, z) {
    case 1:
        var X = -1;
        break;
    case 2:
        X = 250;
        break;
    case 5:
        X = 1073741823;
        break;
    case 4:
        X = 1e4;
        break;
    default: X = 5e3;
} return X = b + X, z = { id: h++, callback: O, priorityLevel: z, startTime: b, expirationTime: X, sortIndex: -1 }, b > $ ? (z.sortIndex = b, t(d, z), n(u) === null && z === n(d) && (k ? (p(T), T = -1) : k = !0, Mt(g, b - $))) : (z.sortIndex = X, t(u, z), w || S || (w = !0, ce(x))), z; }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function (z) { var O = y; return function () { var b = y; y = O; try {
    return z.apply(this, arguments);
}
finally {
    y = b;
} }; }; })(Bo);
Ho.exports = Bo;
var Nd = Ho.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var jd = P, Le = Nd;
function j(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var $o = new Set, er = {};
function qt(e, t) { wn(e, t), wn(e + "Capture", t); }
function wn(e, t) { for (er[e] = t, e = 0; e < t.length; e++)
    $o.add(t[e]); }
var ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yl = Object.prototype.hasOwnProperty, Ed = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ys = {}, gs = {};
function Td(e) { return yl.call(gs, e) ? !0 : yl.call(ys, e) ? !1 : Ed.test(e) ? gs[e] = !0 : (ys[e] = !0, !1); }
function Cd(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function Rd(e, t, n, r) { if (t === null || typeof t > "u" || Cd(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function we(e, t, n, r, i, l, a) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = a; }
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { me[e] = new we(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; me[t] = new we(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { me[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { me[e] = new we(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { me[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { me[e] = new we(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { me[e] = new we(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { me[e] = new we(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { me[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var ma = /[\-:]([a-z])/g;
function ha(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(ma, ha); me[t] = new we(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(ma, ha); me[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(ma, ha); me[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { me[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1); });
me.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { me[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function ya(e, t, n, r) { var i = me.hasOwnProperty(t) ? me[t] : null; (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rd(t, n, i, r) && (n = null), r || i === null ? Td(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var pt = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, zr = Symbol.for("react.element"), rn = Symbol.for("react.portal"), ln = Symbol.for("react.fragment"), ga = Symbol.for("react.strict_mode"), gl = Symbol.for("react.profiler"), Ko = Symbol.for("react.provider"), Wo = Symbol.for("react.context"), va = Symbol.for("react.forward_ref"), vl = Symbol.for("react.suspense"), kl = Symbol.for("react.suspense_list"), ka = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), Go = Symbol.for("react.offscreen"), vs = Symbol.iterator;
function In(e) { return e === null || typeof e != "object" ? null : (e = vs && e[vs] || e["@@iterator"], typeof e == "function" ? e : null); }
var ee = Object.assign, $i;
function Fn(e) {
    if ($i === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            $i = t && t[1] || "";
        }
    return `
` + $i + e;
}
var Ki = !1;
function Wi(e, t) {
    if (!e || Ki)
        return "";
    Ki = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                }
                catch (d) {
                    var r = d;
                }
                Reflect.construct(e, [], t);
            }
            else {
                try {
                    t.call();
                }
                catch (d) {
                    r = d;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (d) {
                r = d;
            }
            e();
        }
    }
    catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var i = d.stack.split(`
`), l = r.stack.split(`
`), a = i.length - 1, s = l.length - 1; 1 <= a && 0 <= s && i[a] !== l[s];)
                s--;
            for (; 1 <= a && 0 <= s; a--, s--)
                if (i[a] !== l[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--, s--, 0 > s || i[a] !== l[s]) {
                                var u = `
` + i[a].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                            }
                        while (1 <= a && 0 <= s);
                    break;
                }
        }
    }
    finally {
        Ki = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function _d(e) { switch (e.tag) {
    case 5: return Fn(e.type);
    case 16: return Fn("Lazy");
    case 13: return Fn("Suspense");
    case 19: return Fn("SuspenseList");
    case 0:
    case 2:
    case 15: return e = Wi(e.type, !1), e;
    case 11: return e = Wi(e.type.render, !1), e;
    case 1: return e = Wi(e.type, !0), e;
    default: return "";
} }
function Sl(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case ln: return "Fragment";
    case rn: return "Portal";
    case gl: return "Profiler";
    case ga: return "StrictMode";
    case vl: return "Suspense";
    case kl: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case Wo: return (e.displayName || "Context") + ".Consumer";
        case Ko: return (e._context.displayName || "Context") + ".Provider";
        case va:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ka: return t = e.displayName || null, t !== null ? t : Sl(e.type) || "Memo";
        case ht:
            t = e._payload, e = e._init;
            try {
                return Sl(e(t));
            }
            catch { }
    } return null; }
function Ad(e) { var t = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (t.displayName || "Context") + ".Consumer";
    case 10: return (t._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return t;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return Sl(t);
    case 8: return t === ga ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
} return null; }
function Rt(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function Yo(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function Id(e) { var t = Yo(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return i.call(this); }, set: function (a) { r = "" + a, l.call(this, a); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (a) { r = "" + a; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function Nr(e) { e._valueTracker || (e._valueTracker = Id(e)); }
function Qo(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = Yo(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function Xr(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch {
    return e.body;
} }
function xl(e, t) { var n = t.checked; return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked }); }
function ks(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = Rt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function Zo(e, t) { t = t.checked, t != null && ya(e, "checked", t, !1); }
function wl(e, t) { Zo(e, t); var n = Rt(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? zl(e, t.type, n) : t.hasOwnProperty("defaultValue") && zl(e, t.type, Rt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function Ss(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function zl(e, t, n) { (t !== "number" || Xr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var Hn = Array.isArray;
function yn(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + Rt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
            e[i].selected = !0, r && (e[i].defaultSelected = !0);
            return;
        }
        t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
} }
function Nl(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91)); return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function xs(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(j(92));
        if (Hn(n)) {
            if (1 < n.length)
                throw Error(j(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: Rt(n) }; }
function Xo(e, t) { var n = Rt(t.value), r = Rt(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function ws(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function qo(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function jl(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? qo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var jr, Jo = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, i); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (jr = jr || document.createElement("div"), jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = jr.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function tr(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var Kn = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Pd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kn).forEach(function (e) { Pd.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), Kn[t] = Kn[e]; }); });
function eu(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kn.hasOwnProperty(e) && Kn[e] ? ("" + t).trim() : t + "px"; }
function tu(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = eu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    } }
var Md = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function El(e, t) { if (t) {
    if (Md[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
            throw Error(j(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object")
        throw Error(j(62));
} }
function Tl(e, t) { if (e.indexOf("-") === -1)
    return typeof t.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var Cl = null;
function Sa(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var Rl = null, gn = null, vn = null;
function zs(e) { if (e = Sr(e)) {
    if (typeof Rl != "function")
        throw Error(j(280));
    var t = e.stateNode;
    t && (t = Ti(t), Rl(e.stateNode, e.type, t));
} }
function nu(e) { gn ? vn ? vn.push(e) : vn = [e] : gn = e; }
function ru() { if (gn) {
    var e = gn, t = vn;
    if (vn = gn = null, zs(e), t)
        for (e = 0; e < t.length; e++)
            zs(t[e]);
} }
function iu(e, t) { return e(t); }
function lu() { }
var Gi = !1;
function au(e, t, n) { if (Gi)
    return e(t, n); Gi = !0; try {
    return iu(e, t, n);
}
finally {
    Gi = !1, (gn !== null || vn !== null) && (lu(), ru());
} }
function nr(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = Ti(n); if (r === null)
    return null; n = r[t]; e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(j(231, t, typeof n)); return n; }
var _l = !1;
if (ut)
    try {
        var Pn = {};
        Object.defineProperty(Pn, "passive", { get: function () { _l = !0; } }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
    }
    catch {
        _l = !1;
    }
function Ld(e, t, n, r, i, l, a, s, u) { var d = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, d);
}
catch (h) {
    this.onError(h);
} }
var Wn = !1, qr = null, Jr = !1, Al = null, Ud = { onError: function (e) { Wn = !0, qr = e; } };
function Od(e, t, n, r, i, l, a, s, u) { Wn = !1, qr = null, Ld.apply(Ud, arguments); }
function bd(e, t, n, r, i, l, a, s, u) { if (Od.apply(this, arguments), Wn) {
    if (Wn) {
        var d = qr;
        Wn = !1, qr = null;
    }
    else
        throw Error(j(198));
    Jr || (Jr = !0, Al = d);
} }
function Jt(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function su(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function Ns(e) { if (Jt(e) !== e)
    throw Error(j(188)); }
function Vd(e) { var t = e.alternate; if (!t) {
    if (t = Jt(e), t === null)
        throw Error(j(188));
    return t !== e ? null : e;
} for (var n = e, r = t;;) {
    var i = n.return;
    if (i === null)
        break;
    var l = i.alternate;
    if (l === null) {
        if (r = i.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (i.child === l.child) {
        for (l = i.child; l;) {
            if (l === n)
                return Ns(i), e;
            if (l === r)
                return Ns(i), t;
            l = l.sibling;
        }
        throw Error(j(188));
    }
    if (n.return !== r.return)
        n = i, r = l;
    else {
        for (var a = !1, s = i.child; s;) {
            if (s === n) {
                a = !0, n = i, r = l;
                break;
            }
            if (s === r) {
                a = !0, r = i, n = l;
                break;
            }
            s = s.sibling;
        }
        if (!a) {
            for (s = l.child; s;) {
                if (s === n) {
                    a = !0, n = l, r = i;
                    break;
                }
                if (s === r) {
                    a = !0, r = l, n = i;
                    break;
                }
                s = s.sibling;
            }
            if (!a)
                throw Error(j(189));
        }
    }
    if (n.alternate !== r)
        throw Error(j(190));
} if (n.tag !== 3)
    throw Error(j(188)); return n.stateNode.current === n ? e : t; }
function ou(e) { return e = Vd(e), e !== null ? uu(e) : null; }
function uu(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = uu(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var cu = Le.unstable_scheduleCallback, js = Le.unstable_cancelCallback, Dd = Le.unstable_shouldYield, Fd = Le.unstable_requestPaint, ie = Le.unstable_now, Hd = Le.unstable_getCurrentPriorityLevel, xa = Le.unstable_ImmediatePriority, du = Le.unstable_UserBlockingPriority, ei = Le.unstable_NormalPriority, Bd = Le.unstable_LowPriority, fu = Le.unstable_IdlePriority, zi = null, nt = null;
function $d(e) { if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
        nt.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128);
    }
    catch { } }
var Qe = Math.clz32 ? Math.clz32 : Gd, Kd = Math.log, Wd = Math.LN2;
function Gd(e) { return e >>>= 0, e === 0 ? 32 : 31 - (Kd(e) / Wd | 0) | 0; }
var Er = 64, Tr = 4194304;
function Bn(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
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
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function ti(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, i = e.suspendedLanes, l = e.pingedLanes, a = n & 268435455; if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? r = Bn(s) : (l &= a, l !== 0 && (r = Bn(l)));
}
else
    a = n & ~i, a !== 0 ? r = Bn(a) : l !== 0 && (r = Bn(l)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & i) && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - Qe(t), i = 1 << n, r |= e[n], t &= ~i; return r; }
function Yd(e, t) { switch (e) {
    case 1:
    case 2:
    case 4: return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 2097152: return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function Qd(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
    var a = 31 - Qe(l), s = 1 << a, u = i[a];
    u === -1 ? (!(s & n) || s & r) && (i[a] = Yd(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s;
} }
function Il(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function pu() { var e = Er; return Er <<= 1, !(Er & 4194240) && (Er = 64), e; }
function Yi(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function vr(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n; }
function Zd(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - Qe(n), l = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l;
} }
function wa(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - Qe(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
} }
var B = 0;
function mu(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var hu, za, yu, gu, vu, Pl = !1, Cr = [], xt = null, wt = null, zt = null, rr = new Map, ir = new Map, gt = [], Xd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Es(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        xt = null;
        break;
    case "dragenter":
    case "dragleave":
        wt = null;
        break;
    case "mouseover":
    case "mouseout":
        zt = null;
        break;
    case "pointerover":
    case "pointerout":
        rr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": ir.delete(t.pointerId);
} }
function Mn(e, t, n, r, i, l) { return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }, t !== null && (t = Sr(t), t !== null && za(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e); }
function qd(e, t, n, r, i) { switch (t) {
    case "focusin": return xt = Mn(xt, e, t, n, r, i), !0;
    case "dragenter": return wt = Mn(wt, e, t, n, r, i), !0;
    case "mouseover": return zt = Mn(zt, e, t, n, r, i), !0;
    case "pointerover":
        var l = i.pointerId;
        return rr.set(l, Mn(rr.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture": return l = i.pointerId, ir.set(l, Mn(ir.get(l) || null, e, t, n, r, i)), !0;
} return !1; }
function ku(e) { var t = Dt(e.target); if (t !== null) {
    var n = Jt(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = su(n), t !== null) {
                e.blockedOn = t, vu(e.priority, function () { yu(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function Fr(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = Ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Cl = r, n.target.dispatchEvent(r), Cl = null;
    }
    else
        return t = Sr(n), t !== null && za(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function Ts(e, t, n) { Fr(e) && n.delete(t); }
function Jd() { Pl = !1, xt !== null && Fr(xt) && (xt = null), wt !== null && Fr(wt) && (wt = null), zt !== null && Fr(zt) && (zt = null), rr.forEach(Ts), ir.forEach(Ts); }
function Ln(e, t) { e.blockedOn === t && (e.blockedOn = null, Pl || (Pl = !0, Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Jd))); }
function lr(e) { function t(i) { return Ln(i, e); } if (0 < Cr.length) {
    Ln(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
        var r = Cr[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (xt !== null && Ln(xt, e), wt !== null && Ln(wt, e), zt !== null && Ln(zt, e), rr.forEach(t), ir.forEach(t), n = 0; n < gt.length; n++)
    r = gt[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < gt.length && (n = gt[0], n.blockedOn === null);)
    ku(n), n.blockedOn === null && gt.shift(); }
var kn = pt.ReactCurrentBatchConfig, ni = !0;
function ef(e, t, n, r) { var i = B, l = kn.transition; kn.transition = null; try {
    B = 1, Na(e, t, n, r);
}
finally {
    B = i, kn.transition = l;
} }
function tf(e, t, n, r) { var i = B, l = kn.transition; kn.transition = null; try {
    B = 4, Na(e, t, n, r);
}
finally {
    B = i, kn.transition = l;
} }
function Na(e, t, n, r) { if (ni) {
    var i = Ml(e, t, n, r);
    if (i === null)
        il(e, t, r, ri, n), Es(e, r);
    else if (qd(i, e, t, n, r))
        r.stopPropagation();
    else if (Es(e, r), t & 4 && -1 < Xd.indexOf(e)) {
        for (; i !== null;) {
            var l = Sr(i);
            if (l !== null && hu(l), l = Ml(e, t, n, r), l === null && il(e, t, r, ri, n), l === i)
                break;
            i = l;
        }
        i !== null && r.stopPropagation();
    }
    else
        il(e, t, r, null, n);
} }
var ri = null;
function Ml(e, t, n, r) { if (ri = null, e = Sa(r), e = Dt(e), e !== null)
    if (t = Jt(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = su(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return ri = e, null; }
function Su(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (Hd()) {
        case xa: return 1;
        case du: return 4;
        case ei:
        case Bd: return 16;
        case fu: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var kt = null, ja = null, Hr = null;
function xu() { if (Hr)
    return Hr; var e, t = ja, n = t.length, r, i = "value" in kt ? kt.value : kt.textContent, l = i.length; for (e = 0; e < n && t[e] === i[e]; e++)
    ; var a = n - e; for (r = 1; r <= a && t[n - r] === i[l - r]; r++)
    ; return Hr = i.slice(e, 1 < r ? 1 - r : void 0); }
function Br(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function Rr() { return !0; }
function Cs() { return !1; }
function Oe(e) { function t(n, r, i, l, a) { this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = a, this.currentTarget = null; for (var s in e)
    e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]); return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Rr : Cs, this.isPropagationStopped = Cs, this; } return ee(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Rr); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Rr); }, persist: function () { }, isPersistent: Rr }), t; }
var _n = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Ea = Oe(_n), kr = ee({}, _n, { view: 0, detail: 0 }), nf = Oe(kr), Qi, Zi, Un, Ni = ee({}, kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ta, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Un && (Un && e.type === "mousemove" ? (Qi = e.screenX - Un.screenX, Zi = e.screenY - Un.screenY) : Zi = Qi = 0, Un = e), Qi); }, movementY: function (e) { return "movementY" in e ? e.movementY : Zi; } }), Rs = Oe(Ni), rf = ee({}, Ni, { dataTransfer: 0 }), lf = Oe(rf), af = ee({}, kr, { relatedTarget: 0 }), Xi = Oe(af), sf = ee({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), of = Oe(sf), uf = ee({}, _n, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), cf = Oe(uf), df = ee({}, _n, { data: 0 }), _s = Oe(df), ff = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, pf = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, mf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hf(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = mf[e]) ? !!t[e] : !1; }
function Ta() { return hf; }
var yf = ee({}, kr, { key: function (e) { if (e.key) {
        var t = ff[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = Br(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pf[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ta, charCode: function (e) { return e.type === "keypress" ? Br(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? Br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), gf = Oe(yf), vf = ee({}, Ni, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), As = Oe(vf), kf = ee({}, kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ta }), Sf = Oe(kf), xf = ee({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wf = Oe(xf), zf = ee({}, Ni, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Nf = Oe(zf), jf = [9, 13, 27, 32], Ca = ut && "CompositionEvent" in window, Gn = null;
ut && "documentMode" in document && (Gn = document.documentMode);
var Ef = ut && "TextEvent" in window && !Gn, wu = ut && (!Ca || Gn && 8 < Gn && 11 >= Gn), Is = " ", Ps = !1;
function zu(e, t) { switch (e) {
    case "keyup": return jf.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Nu(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var an = !1;
function Tf(e, t) { switch (e) {
    case "compositionend": return Nu(t);
    case "keypress": return t.which !== 32 ? null : (Ps = !0, Is);
    case "textInput": return e = t.data, e === Is && Ps ? null : e;
    default: return null;
} }
function Cf(e, t) { if (an)
    return e === "compositionend" || !Ca && zu(e, t) ? (e = xu(), Hr = ja = kt = null, an = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return wu && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var Rf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ms(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Rf[e.type] : t === "textarea"; }
function ju(e, t, n, r) { nu(r), t = ii(t, "onChange"), 0 < t.length && (n = new Ea("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var Yn = null, ar = null;
function _f(e) { Uu(e, 0); }
function ji(e) { var t = un(e); if (Qo(t))
    return e; }
function Af(e, t) { if (e === "change")
    return t; }
var Eu = !1;
if (ut) {
    var qi;
    if (ut) {
        var Ji = "oninput" in document;
        if (!Ji) {
            var Ls = document.createElement("div");
            Ls.setAttribute("oninput", "return;"), Ji = typeof Ls.oninput == "function";
        }
        qi = Ji;
    }
    else
        qi = !1;
    Eu = qi && (!document.documentMode || 9 < document.documentMode);
}
function Us() { Yn && (Yn.detachEvent("onpropertychange", Tu), ar = Yn = null); }
function Tu(e) { if (e.propertyName === "value" && ji(ar)) {
    var t = [];
    ju(t, ar, e, Sa(e)), au(_f, t);
} }
function If(e, t, n) { e === "focusin" ? (Us(), Yn = t, ar = n, Yn.attachEvent("onpropertychange", Tu)) : e === "focusout" && Us(); }
function Pf(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ji(ar); }
function Mf(e, t) { if (e === "click")
    return ji(t); }
function Lf(e, t) { if (e === "input" || e === "change")
    return ji(t); }
function Uf(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var Xe = typeof Object.is == "function" ? Object.is : Uf;
function sr(e, t) { if (Xe(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yl.call(t, i) || !Xe(e[i], t[i]))
        return !1;
} return !0; }
function Os(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function bs(e, t) { var n = Os(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
            return { node: n, offset: t - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = Os(n);
} }
function Cu(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function Ru() { for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof t.contentWindow.location.href == "string";
    }
    catch {
        n = !1;
    }
    if (n)
        e = t.contentWindow;
    else
        break;
    t = Xr(e.document);
} return t; }
function Ra(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function Of(e) { var t = Ru(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && Cu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ra(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var i = n.textContent.length, l = Math.min(r.start, i);
            r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = bs(n, l);
            var a = bs(n, r);
            i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var bf = ut && "documentMode" in document && 11 >= document.documentMode, sn = null, Ll = null, Qn = null, Ul = !1;
function Vs(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; Ul || sn == null || sn !== Xr(r) || (r = sn, "selectionStart" in r && Ra(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Qn && sr(Qn, r) || (Qn = r, r = ii(Ll, "onSelect"), 0 < r.length && (t = new Ea("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = sn))); }
function _r(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var on = { animationend: _r("Animation", "AnimationEnd"), animationiteration: _r("Animation", "AnimationIteration"), animationstart: _r("Animation", "AnimationStart"), transitionend: _r("Transition", "TransitionEnd") }, el = {}, _u = {};
ut && (_u = document.createElement("div").style, "AnimationEvent" in window || (delete on.animationend.animation, delete on.animationiteration.animation, delete on.animationstart.animation), "TransitionEvent" in window || delete on.transitionend.transition);
function Ei(e) { if (el[e])
    return el[e]; if (!on[e])
    return e; var t = on[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in _u)
        return el[e] = t[n]; return e; }
var Au = Ei("animationend"), Iu = Ei("animationiteration"), Pu = Ei("animationstart"), Mu = Ei("transitionend"), Lu = new Map, Ds = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function At(e, t) { Lu.set(e, t), qt(t, [e]); }
for (var tl = 0; tl < Ds.length; tl++) {
    var nl = Ds[tl], Vf = nl.toLowerCase(), Df = nl[0].toUpperCase() + nl.slice(1);
    At(Vf, "on" + Df);
}
At(Au, "onAnimationEnd");
At(Iu, "onAnimationIteration");
At(Pu, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(Mu, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ff = new Set("cancel close invalid load scroll toggle".split(" ").concat($n));
function Fs(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, bd(r, t, void 0, e), e.currentTarget = null; }
function Uu(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
        var l = void 0;
        if (t)
            for (var a = r.length - 1; 0 <= a; a--) {
                var s = r[a], u = s.instance, d = s.currentTarget;
                if (s = s.listener, u !== l && i.isPropagationStopped())
                    break e;
                Fs(i, s, d), l = u;
            }
        else
            for (a = 0; a < r.length; a++) {
                if (s = r[a], u = s.instance, d = s.currentTarget, s = s.listener, u !== l && i.isPropagationStopped())
                    break e;
                Fs(i, s, d), l = u;
            }
    }
} if (Jr)
    throw e = Al, Jr = !1, Al = null, e; }
function Y(e, t) { var n = t[Fl]; n === void 0 && (n = t[Fl] = new Set); var r = e + "__bubble"; n.has(r) || (Ou(t, e, 2, !1), n.add(r)); }
function rl(e, t, n) { var r = 0; t && (r |= 4), Ou(n, e, r, t); }
var Ar = "_reactListening" + Math.random().toString(36).slice(2);
function or(e) { if (!e[Ar]) {
    e[Ar] = !0, $o.forEach(function (n) { n !== "selectionchange" && (Ff.has(n) || rl(n, !1, e), rl(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ar] || (t[Ar] = !0, rl("selectionchange", !1, t));
} }
function Ou(e, t, n, r) { switch (Su(t)) {
    case 1:
        var i = ef;
        break;
    case 4:
        i = tf;
        break;
    default: i = Na;
} n = i.bind(null, t, n, e), i = void 0, !_l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1); }
function il(e, t, n, r, i) { var l = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var a = r.tag;
        if (a === 3 || a === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || s.nodeType === 8 && s.parentNode === i)
                break;
            if (a === 4)
                for (a = r.return; a !== null;) {
                    var u = a.tag;
                    if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i))
                        return;
                    a = a.return;
                }
            for (; s !== null;) {
                if (a = Dt(s), a === null)
                    return;
                if (u = a.tag, u === 5 || u === 6) {
                    r = l = a;
                    continue e;
                }
                s = s.parentNode;
            }
        }
        r = r.return;
    } au(function () { var d = l, h = Sa(n), m = []; e: {
    var y = Lu.get(e);
    if (y !== void 0) {
        var S = Ea, w = e;
        switch (e) {
            case "keypress": if (Br(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                S = gf;
                break;
            case "focusin":
                w = "focus", S = Xi;
                break;
            case "focusout":
                w = "blur", S = Xi;
                break;
            case "beforeblur":
            case "afterblur":
                S = Xi;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                S = Rs;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                S = lf;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                S = Sf;
                break;
            case Au:
            case Iu:
            case Pu:
                S = of;
                break;
            case Mu:
                S = wf;
                break;
            case "scroll":
                S = nf;
                break;
            case "wheel":
                S = Nf;
                break;
            case "copy":
            case "cut":
            case "paste":
                S = cf;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": S = As;
        }
        var k = (t & 4) !== 0, v = !k && e === "scroll", p = k ? y !== null ? y + "Capture" : null : y;
        k = [];
        for (var c = d, f; c !== null;) {
            f = c;
            var g = f.stateNode;
            if (f.tag === 5 && g !== null && (f = g, p !== null && (g = nr(c, p), g != null && k.push(ur(c, g, f)))), v)
                break;
            c = c.return;
        }
        0 < k.length && (y = new S(y, w, null, n, h), m.push({ event: y, listeners: k }));
    }
} if (!(t & 7)) {
    e: {
        if (y = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", y && n !== Cl && (w = n.relatedTarget || n.fromElement) && (Dt(w) || w[ct]))
            break e;
        if ((S || y) && (y = h.window === h ? h : (y = h.ownerDocument) ? y.defaultView || y.parentWindow : window, S ? (w = n.relatedTarget || n.toElement, S = d, w = w ? Dt(w) : null, w !== null && (v = Jt(w), w !== v || w.tag !== 5 && w.tag !== 6) && (w = null)) : (S = null, w = d), S !== w)) {
            if (k = Rs, g = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = As, g = "onPointerLeave", p = "onPointerEnter", c = "pointer"), v = S == null ? y : un(S), f = w == null ? y : un(w), y = new k(g, c + "leave", S, n, h), y.target = v, y.relatedTarget = f, g = null, Dt(h) === d && (k = new k(p, c + "enter", w, n, h), k.target = f, k.relatedTarget = v, g = k), v = g, S && w)
                t: {
                    for (k = S, p = w, c = 0, f = k; f; f = nn(f))
                        c++;
                    for (f = 0, g = p; g; g = nn(g))
                        f++;
                    for (; 0 < c - f;)
                        k = nn(k), c--;
                    for (; 0 < f - c;)
                        p = nn(p), f--;
                    for (; c--;) {
                        if (k === p || p !== null && k === p.alternate)
                            break t;
                        k = nn(k), p = nn(p);
                    }
                    k = null;
                }
            else
                k = null;
            S !== null && Hs(m, y, S, k, !1), w !== null && v !== null && Hs(m, v, w, k, !0);
        }
    }
    e: {
        if (y = d ? un(d) : window, S = y.nodeName && y.nodeName.toLowerCase(), S === "select" || S === "input" && y.type === "file")
            var x = Af;
        else if (Ms(y))
            if (Eu)
                x = Lf;
            else {
                x = Pf;
                var N = If;
            }
        else
            (S = y.nodeName) && S.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (x = Mf);
        if (x && (x = x(e, d))) {
            ju(m, x, n, h);
            break e;
        }
        N && N(e, y, d), e === "focusout" && (N = y._wrapperState) && N.controlled && y.type === "number" && zl(y, "number", y.value);
    }
    switch (N = d ? un(d) : window, e) {
        case "focusin":
            (Ms(N) || N.contentEditable === "true") && (sn = N, Ll = d, Qn = null);
            break;
        case "focusout":
            Qn = Ll = sn = null;
            break;
        case "mousedown":
            Ul = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            Ul = !1, Vs(m, n, h);
            break;
        case "selectionchange": if (bf)
            break;
        case "keydown":
        case "keyup": Vs(m, n, h);
    }
    var E;
    if (Ca)
        e: {
            switch (e) {
                case "compositionstart":
                    var T = "onCompositionStart";
                    break e;
                case "compositionend":
                    T = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    T = "onCompositionUpdate";
                    break e;
            }
            T = void 0;
        }
    else
        an ? zu(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
    T && (wu && n.locale !== "ko" && (an || T !== "onCompositionStart" ? T === "onCompositionEnd" && an && (E = xu()) : (kt = h, ja = "value" in kt ? kt.value : kt.textContent, an = !0)), N = ii(d, T), 0 < N.length && (T = new _s(T, e, null, n, h), m.push({ event: T, listeners: N }), E ? T.data = E : (E = Nu(n), E !== null && (T.data = E)))), (E = Ef ? Tf(e, n) : Cf(e, n)) && (d = ii(d, "onBeforeInput"), 0 < d.length && (h = new _s("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: d }), h.data = E));
} Uu(m, t); }); }
function ur(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function ii(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var i = e, l = i.stateNode;
    i.tag === 5 && l !== null && (i = l, l = nr(e, n), l != null && r.unshift(ur(e, l, i)), l = nr(e, t), l != null && r.push(ur(e, l, i))), e = e.return;
} return r; }
function nn(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function Hs(e, t, n, r, i) { for (var l = t._reactName, a = []; n !== null && n !== r;) {
    var s = n, u = s.alternate, d = s.stateNode;
    if (u !== null && u === r)
        break;
    s.tag === 5 && d !== null && (s = d, i ? (u = nr(n, l), u != null && a.unshift(ur(n, u, s))) : i || (u = nr(n, l), u != null && a.push(ur(n, u, s)))), n = n.return;
} a.length !== 0 && e.push({ event: t, listeners: a }); }
var Hf = /\r\n?/g, Bf = /\u0000|\uFFFD/g;
function Bs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hf, `
`).replace(Bf, "");
}
function Ir(e, t, n) { if (t = Bs(t), Bs(e) !== t && n)
    throw Error(j(425)); }
function li() { }
var Ol = null, bl = null;
function Vl(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var Dl = typeof setTimeout == "function" ? setTimeout : void 0, $f = typeof clearTimeout == "function" ? clearTimeout : void 0, $s = typeof Promise == "function" ? Promise : void 0, Kf = typeof queueMicrotask == "function" ? queueMicrotask : typeof $s < "u" ? function (e) { return $s.resolve(null).then(e).catch(Wf); } : Dl;
function Wf(e) { setTimeout(function () { throw e; }); }
function ll(e, t) { var n = t, r = 0; do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), lr(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
} while (n); lr(t); }
function Nt(e) { for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
        break;
    if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
            break;
        if (t === "/$")
            return null;
    }
} return e; }
function Ks(e) { e = e.previousSibling; for (var t = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0)
                return e;
            t--;
        }
        else
            n === "/$" && t++;
    }
    e = e.previousSibling;
} return null; }
var An = Math.random().toString(36).slice(2), tt = "__reactFiber$" + An, cr = "__reactProps$" + An, ct = "__reactContainer$" + An, Fl = "__reactEvents$" + An, Gf = "__reactListeners$" + An, Yf = "__reactHandles$" + An;
function Dt(e) { var t = e[tt]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[ct] || n[tt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = Ks(e); e !== null;) {
                if (n = e[tt])
                    return n;
                e = Ks(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function Sr(e) { return e = e[tt] || e[ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function un(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(j(33)); }
function Ti(e) { return e[cr] || null; }
var Hl = [], cn = -1;
function It(e) { return { current: e }; }
function Q(e) { 0 > cn || (e.current = Hl[cn], Hl[cn] = null, cn--); }
function G(e, t) { cn++, Hl[cn] = e.current, e.current = t; }
var _t = {}, ve = It(_t), Re = It(!1), Wt = _t;
function zn(e, t) { var n = e.type.contextTypes; if (!n)
    return _t; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var i = {}, l; for (l in n)
    i[l] = t[l]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i; }
function _e(e) { return e = e.childContextTypes, e != null; }
function ai() { Q(Re), Q(ve); }
function Ws(e, t, n) { if (ve.current !== _t)
    throw Error(j(168)); G(ve, t), G(Re, n); }
function bu(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var i in r)
    if (!(i in t))
        throw Error(j(108, Ad(e) || "Unknown", i)); return ee({}, n, r); }
function si(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, Wt = ve.current, G(ve, e), G(Re, Re.current), !0; }
function Gs(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(j(169)); n ? (e = bu(e, t, Wt), r.__reactInternalMemoizedMergedChildContext = e, Q(Re), Q(ve), G(ve, e)) : Q(Re), G(Re, n); }
var lt = null, Ci = !1, al = !1;
function Vu(e) { lt === null ? lt = [e] : lt.push(e); }
function Qf(e) { Ci = !0, Vu(e); }
function Pt() { if (!al && lt !== null) {
    al = !0;
    var e = 0, t = B;
    try {
        var n = lt;
        for (B = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        lt = null, Ci = !1;
    }
    catch (i) {
        throw lt !== null && (lt = lt.slice(e + 1)), cu(xa, Pt), i;
    }
    finally {
        B = t, al = !1;
    }
} return null; }
var dn = [], fn = 0, oi = null, ui = 0, Ve = [], De = 0, Gt = null, at = 1, st = "";
function bt(e, t) { dn[fn++] = ui, dn[fn++] = oi, oi = e, ui = t; }
function Du(e, t, n) { Ve[De++] = at, Ve[De++] = st, Ve[De++] = Gt, Gt = e; var r = at; e = st; var i = 32 - Qe(r) - 1; r &= ~(1 << i), n += 1; var l = 32 - Qe(t) + i; if (30 < l) {
    var a = i - i % 5;
    l = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, at = 1 << 32 - Qe(t) + i | n << i | r, st = l + e;
}
else
    at = 1 << l | n << i | r, st = e; }
function _a(e) { e.return !== null && (bt(e, 1), Du(e, 1, 0)); }
function Aa(e) { for (; e === oi;)
    oi = dn[--fn], dn[fn] = null, ui = dn[--fn], dn[fn] = null; for (; e === Gt;)
    Gt = Ve[--De], Ve[De] = null, st = Ve[--De], Ve[De] = null, at = Ve[--De], Ve[De] = null; }
var Me = null, Pe = null, Z = !1, Ye = null;
function Fu(e, t) { var n = Fe(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function Ys(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, Pe = Nt(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, Pe = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Gt !== null ? { id: at, overflow: st } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Fe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, Pe = null, !0) : !1;
    default: return !1;
} }
function Bl(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function $l(e) { if (Z) {
    var t = Pe;
    if (t) {
        var n = t;
        if (!Ys(e, t)) {
            if (Bl(e))
                throw Error(j(418));
            t = Nt(n.nextSibling);
            var r = Me;
            t && Ys(e, t) ? Fu(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, Me = e);
        }
    }
    else {
        if (Bl(e))
            throw Error(j(418));
        e.flags = e.flags & -4097 | 2, Z = !1, Me = e;
    }
} }
function Qs(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; Me = e; }
function Pr(e) { if (e !== Me)
    return !1; if (!Z)
    return Qs(e), Z = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Vl(e.type, e.memoizedProps)), t && (t = Pe)) {
    if (Bl(e))
        throw Hu(), Error(j(418));
    for (; t;)
        Fu(e, t), t = Nt(t.nextSibling);
} if (Qs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(j(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        Pe = Nt(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        Pe = null;
    }
}
else
    Pe = Me ? Nt(e.stateNode.nextSibling) : null; return !0; }
function Hu() { for (var e = Pe; e;)
    e = Nt(e.nextSibling); }
function Nn() { Pe = Me = null, Z = !1; }
function Ia(e) { Ye === null ? Ye = [e] : Ye.push(e); }
var Zf = pt.ReactCurrentBatchConfig;
function On(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(j(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(j(147, e));
        var i = r, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function (a) { var s = i.refs; a === null ? delete s[l] : s[l] = a; }, t._stringRef = l, t);
    }
    if (typeof e != "string")
        throw Error(j(284));
    if (!n._owner)
        throw Error(j(290, e));
} return e; }
function Mr(e, t) { throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function Zs(e) { var t = e._init; return t(e._payload); }
function Bu(e) { function t(p, c) { if (e) {
    var f = p.deletions;
    f === null ? (p.deletions = [c], p.flags |= 16) : f.push(c);
} } function n(p, c) { if (!e)
    return null; for (; c !== null;)
    t(p, c), c = c.sibling; return null; } function r(p, c) { for (p = new Map; c !== null;)
    c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling; return p; } function i(p, c) { return p = Ct(p, c), p.index = 0, p.sibling = null, p; } function l(p, c, f) { return p.index = f, e ? (f = p.alternate, f !== null ? (f = f.index, f < c ? (p.flags |= 2, c) : f) : (p.flags |= 2, c)) : (p.flags |= 1048576, c); } function a(p) { return e && p.alternate === null && (p.flags |= 2), p; } function s(p, c, f, g) { return c === null || c.tag !== 6 ? (c = pl(f, p.mode, g), c.return = p, c) : (c = i(c, f), c.return = p, c); } function u(p, c, f, g) { var x = f.type; return x === ln ? h(p, c, f.props.children, g, f.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ht && Zs(x) === c.type) ? (g = i(c, f.props), g.ref = On(p, c, f), g.return = p, g) : (g = Zr(f.type, f.key, f.props, null, p.mode, g), g.ref = On(p, c, f), g.return = p, g); } function d(p, c, f, g) { return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = ml(f, p.mode, g), c.return = p, c) : (c = i(c, f.children || []), c.return = p, c); } function h(p, c, f, g, x) { return c === null || c.tag !== 7 ? (c = $t(f, p.mode, g, x), c.return = p, c) : (c = i(c, f), c.return = p, c); } function m(p, c, f) { if (typeof c == "string" && c !== "" || typeof c == "number")
    return c = pl("" + c, p.mode, f), c.return = p, c; if (typeof c == "object" && c !== null) {
    switch (c.$$typeof) {
        case zr: return f = Zr(c.type, c.key, c.props, null, p.mode, f), f.ref = On(p, null, c), f.return = p, f;
        case rn: return c = ml(c, p.mode, f), c.return = p, c;
        case ht:
            var g = c._init;
            return m(p, g(c._payload), f);
    }
    if (Hn(c) || In(c))
        return c = $t(c, p.mode, f, null), c.return = p, c;
    Mr(p, c);
} return null; } function y(p, c, f, g) { var x = c !== null ? c.key : null; if (typeof f == "string" && f !== "" || typeof f == "number")
    return x !== null ? null : s(p, c, "" + f, g); if (typeof f == "object" && f !== null) {
    switch (f.$$typeof) {
        case zr: return f.key === x ? u(p, c, f, g) : null;
        case rn: return f.key === x ? d(p, c, f, g) : null;
        case ht: return x = f._init, y(p, c, x(f._payload), g);
    }
    if (Hn(f) || In(f))
        return x !== null ? null : h(p, c, f, g, null);
    Mr(p, f);
} return null; } function S(p, c, f, g, x) { if (typeof g == "string" && g !== "" || typeof g == "number")
    return p = p.get(f) || null, s(c, p, "" + g, x); if (typeof g == "object" && g !== null) {
    switch (g.$$typeof) {
        case zr: return p = p.get(g.key === null ? f : g.key) || null, u(c, p, g, x);
        case rn: return p = p.get(g.key === null ? f : g.key) || null, d(c, p, g, x);
        case ht:
            var N = g._init;
            return S(p, c, f, N(g._payload), x);
    }
    if (Hn(g) || In(g))
        return p = p.get(f) || null, h(c, p, g, x, null);
    Mr(c, g);
} return null; } function w(p, c, f, g) { for (var x = null, N = null, E = c, T = c = 0, _ = null; E !== null && T < f.length; T++) {
    E.index > T ? (_ = E, E = null) : _ = E.sibling;
    var A = y(p, E, f[T], g);
    if (A === null) {
        E === null && (E = _);
        break;
    }
    e && E && A.alternate === null && t(p, E), c = l(A, c, T), N === null ? x = A : N.sibling = A, N = A, E = _;
} if (T === f.length)
    return n(p, E), Z && bt(p, T), x; if (E === null) {
    for (; T < f.length; T++)
        E = m(p, f[T], g), E !== null && (c = l(E, c, T), N === null ? x = E : N.sibling = E, N = E);
    return Z && bt(p, T), x;
} for (E = r(p, E); T < f.length; T++)
    _ = S(E, p, T, f[T], g), _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? T : _.key), c = l(_, c, T), N === null ? x = _ : N.sibling = _, N = _); return e && E.forEach(function (I) { return t(p, I); }), Z && bt(p, T), x; } function k(p, c, f, g) { var x = In(f); if (typeof x != "function")
    throw Error(j(150)); if (f = x.call(f), f == null)
    throw Error(j(151)); for (var N = x = null, E = c, T = c = 0, _ = null, A = f.next(); E !== null && !A.done; T++, A = f.next()) {
    E.index > T ? (_ = E, E = null) : _ = E.sibling;
    var I = y(p, E, A.value, g);
    if (I === null) {
        E === null && (E = _);
        break;
    }
    e && E && I.alternate === null && t(p, E), c = l(I, c, T), N === null ? x = I : N.sibling = I, N = I, E = _;
} if (A.done)
    return n(p, E), Z && bt(p, T), x; if (E === null) {
    for (; !A.done; T++, A = f.next())
        A = m(p, A.value, g), A !== null && (c = l(A, c, T), N === null ? x = A : N.sibling = A, N = A);
    return Z && bt(p, T), x;
} for (E = r(p, E); !A.done; T++, A = f.next())
    A = S(E, p, T, A.value, g), A !== null && (e && A.alternate !== null && E.delete(A.key === null ? T : A.key), c = l(A, c, T), N === null ? x = A : N.sibling = A, N = A); return e && E.forEach(function (te) { return t(p, te); }), Z && bt(p, T), x; } function v(p, c, f, g) { if (typeof f == "object" && f !== null && f.type === ln && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
    switch (f.$$typeof) {
        case zr:
            e: {
                for (var x = f.key, N = c; N !== null;) {
                    if (N.key === x) {
                        if (x = f.type, x === ln) {
                            if (N.tag === 7) {
                                n(p, N.sibling), c = i(N, f.props.children), c.return = p, p = c;
                                break e;
                            }
                        }
                        else if (N.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ht && Zs(x) === N.type) {
                            n(p, N.sibling), c = i(N, f.props), c.ref = On(p, N, f), c.return = p, p = c;
                            break e;
                        }
                        n(p, N);
                        break;
                    }
                    else
                        t(p, N);
                    N = N.sibling;
                }
                f.type === ln ? (c = $t(f.props.children, p.mode, g, f.key), c.return = p, p = c) : (g = Zr(f.type, f.key, f.props, null, p.mode, g), g.ref = On(p, c, f), g.return = p, p = g);
            }
            return a(p);
        case rn:
            e: {
                for (N = f.key; c !== null;) {
                    if (c.key === N)
                        if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                            n(p, c.sibling), c = i(c, f.children || []), c.return = p, p = c;
                            break e;
                        }
                        else {
                            n(p, c);
                            break;
                        }
                    else
                        t(p, c);
                    c = c.sibling;
                }
                c = ml(f, p.mode, g), c.return = p, p = c;
            }
            return a(p);
        case ht: return N = f._init, v(p, c, N(f._payload), g);
    }
    if (Hn(f))
        return w(p, c, f, g);
    if (In(f))
        return k(p, c, f, g);
    Mr(p, f);
} return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(p, c.sibling), c = i(c, f), c.return = p, p = c) : (n(p, c), c = pl(f, p.mode, g), c.return = p, p = c), a(p)) : n(p, c); } return v; }
var jn = Bu(!0), $u = Bu(!1), ci = It(null), di = null, pn = null, Pa = null;
function Ma() { Pa = pn = di = null; }
function La(e) { var t = ci.current; Q(ci), e._currentValue = t; }
function Kl(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function Sn(e, t) { di = e, Pa = pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null); }
function Be(e) { var t = e._currentValue; if (Pa !== e)
    if (e = { context: e, memoizedValue: t, next: null }, pn === null) {
        if (di === null)
            throw Error(j(308));
        pn = e, di.dependencies = { lanes: 0, firstContext: e };
    }
    else
        pn = pn.next = e; return t; }
var Ft = null;
function Ua(e) { Ft === null ? Ft = [e] : Ft.push(e); }
function Ku(e, t, n, r) { var i = t.interleaved; return i === null ? (n.next = n, Ua(t)) : (n.next = i.next, i.next = n), t.interleaved = n, dt(e, r); }
function dt(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var yt = !1;
function Oa(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function Wu(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function ot(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function jt(e, t, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, dt(e, n);
} return i = r.interleaved, i === null ? (t.next = t, Ua(r)) : (t.next = i.next, i.next = t), r.interleaved = t, dt(e, n); }
function $r(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wa(e, n);
} }
function Xs(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            l === null ? i = l = a : l = l.next = a, n = n.next;
        } while (n !== null);
        l === null ? i = l = t : l = l.next = t;
    }
    else
        i = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function fi(e, t, n, r) { var i = e.updateQueue; yt = !1; var l = i.firstBaseUpdate, a = i.lastBaseUpdate, s = i.shared.pending; if (s !== null) {
    i.shared.pending = null;
    var u = s, d = u.next;
    u.next = null, a === null ? l = d : a.next = d, a = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== a && (s === null ? h.firstBaseUpdate = d : s.next = d, h.lastBaseUpdate = u));
} if (l !== null) {
    var m = i.baseState;
    a = 0, h = d = u = null, s = l;
    do {
        var y = s.lane, S = s.eventTime;
        if ((r & y) === y) {
            h !== null && (h = h.next = { eventTime: S, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
            e: {
                var w = e, k = s;
                switch (y = t, S = n, k.tag) {
                    case 1:
                        if (w = k.payload, typeof w == "function") {
                            m = w.call(S, m, y);
                            break e;
                        }
                        m = w;
                        break e;
                    case 3: w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = k.payload, y = typeof w == "function" ? w.call(S, m, y) : w, y == null)
                            break e;
                        m = ee({}, m, y);
                        break e;
                    case 2: yt = !0;
                }
            }
            s.callback !== null && s.lane !== 0 && (e.flags |= 64, y = i.effects, y === null ? i.effects = [s] : y.push(s));
        }
        else
            S = { eventTime: S, lane: y, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, h === null ? (d = h = S, u = m) : h = h.next = S, a |= y;
        if (s = s.next, s === null) {
            if (s = i.shared.pending, s === null)
                break;
            y = s, s = y.next, y.next = null, i.lastBaseUpdate = y, i.shared.pending = null;
        }
    } while (!0);
    if (h === null && (u = m), i.baseState = u, i.firstBaseUpdate = d, i.lastBaseUpdate = h, t = i.shared.interleaved, t !== null) {
        i = t;
        do
            a |= i.lane, i = i.next;
        while (i !== t);
    }
    else
        l === null && (i.shared.lanes = 0);
    Qt |= a, e.lanes = a, e.memoizedState = m;
} }
function qs(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function")
                throw Error(j(191, i));
            i.call(r);
        }
    } }
var xr = {}, rt = It(xr), dr = It(xr), fr = It(xr);
function Ht(e) { if (e === xr)
    throw Error(j(174)); return e; }
function ba(e, t) { switch (G(fr, t), G(dr, e), G(rt, xr), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : jl(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = jl(t, e);
} Q(rt), G(rt, t); }
function En() { Q(rt), Q(dr), Q(fr); }
function Gu(e) { Ht(fr.current); var t = Ht(rt.current), n = jl(t, e.type); t !== n && (G(dr, e), G(rt, n)); }
function Va(e) { dr.current === e && (Q(rt), Q(dr)); }
var q = It(0);
function pi(e) { for (var t = e; t !== null;) {
    if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return t;
    }
    else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
            return t;
    }
    else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
    }
    if (t === e)
        break;
    for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
            return null;
        t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
} return null; }
var sl = [];
function Da() { for (var e = 0; e < sl.length; e++)
    sl[e]._workInProgressVersionPrimary = null; sl.length = 0; }
var Kr = pt.ReactCurrentDispatcher, ol = pt.ReactCurrentBatchConfig, Yt = 0, J = null, ae = null, oe = null, mi = !1, Zn = !1, pr = 0, Xf = 0;
function he() { throw Error(j(321)); }
function Fa(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n]))
        return !1; return !0; }
function Ha(e, t, n, r, i, l) { if (Yt = l, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Kr.current = e === null || e.memoizedState === null ? tp : np, e = n(r, i), Zn) {
    l = 0;
    do {
        if (Zn = !1, pr = 0, 25 <= l)
            throw Error(j(301));
        l += 1, oe = ae = null, t.updateQueue = null, Kr.current = rp, e = n(r, i);
    } while (Zn);
} if (Kr.current = hi, t = ae !== null && ae.next !== null, Yt = 0, oe = ae = J = null, mi = !1, t)
    throw Error(j(300)); return e; }
function Ba() { var e = pr !== 0; return pr = 0, e; }
function et() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return oe === null ? J.memoizedState = oe = e : oe = oe.next = e, oe; }
function $e() { if (ae === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = ae.next; var t = oe === null ? J.memoizedState : oe.next; if (t !== null)
    oe = t, ae = e;
else {
    if (e === null)
        throw Error(j(310));
    ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, oe === null ? J.memoizedState = oe = e : oe = oe.next = e;
} return oe; }
function mr(e, t) { return typeof t == "function" ? t(e) : t; }
function ul(e) { var t = $e(), n = t.queue; if (n === null)
    throw Error(j(311)); n.lastRenderedReducer = e; var r = ae, i = r.baseQueue, l = n.pending; if (l !== null) {
    if (i !== null) {
        var a = i.next;
        i.next = l.next, l.next = a;
    }
    r.baseQueue = i = l, n.pending = null;
} if (i !== null) {
    l = i.next, r = r.baseState;
    var s = a = null, u = null, d = l;
    do {
        var h = d.lane;
        if ((Yt & h) === h)
            u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
        else {
            var m = { lane: h, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null };
            u === null ? (s = u = m, a = r) : u = u.next = m, J.lanes |= h, Qt |= h;
        }
        d = d.next;
    } while (d !== null && d !== l);
    u === null ? a = r : u.next = s, Xe(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    i = e;
    do
        l = i.lane, J.lanes |= l, Qt |= l, i = i.next;
    while (i !== e);
}
else
    i === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function cl(e) { var t = $e(), n = t.queue; if (n === null)
    throw Error(j(311)); n.lastRenderedReducer = e; var r = n.dispatch, i = n.pending, l = t.memoizedState; if (i !== null) {
    n.pending = null;
    var a = i = i.next;
    do
        l = e(l, a.action), a = a.next;
    while (a !== i);
    Xe(l, t.memoizedState) || (Ce = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
} return [l, r]; }
function Yu() { }
function Qu(e, t) { var n = J, r = $e(), i = t(), l = !Xe(r.memoizedState, i); if (l && (r.memoizedState = i, Ce = !0), r = r.queue, $a(qu.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, hr(9, Xu.bind(null, n, r, i, t), void 0, null), ue === null)
        throw Error(j(349));
    Yt & 30 || Zu(n, t, i);
} return i; }
function Zu(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function Xu(e, t, n, r) { t.value = n, t.getSnapshot = r, Ju(t) && ec(e); }
function qu(e, t, n) { return n(function () { Ju(t) && ec(e); }); }
function Ju(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !Xe(e, n);
}
catch {
    return !0;
} }
function ec(e) { var t = dt(e, 1); t !== null && Ze(t, e, 1, -1); }
function Js(e) { var t = et(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: mr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ep.bind(null, J, e), [t.memoizedState, e]; }
function hr(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function tc() { return $e().memoizedState; }
function Wr(e, t, n, r) { var i = et(); J.flags |= e, i.memoizedState = hr(1 | t, n, void 0, r === void 0 ? null : r); }
function Ri(e, t, n, r) { var i = $e(); r = r === void 0 ? null : r; var l = void 0; if (ae !== null) {
    var a = ae.memoizedState;
    if (l = a.destroy, r !== null && Fa(r, a.deps)) {
        i.memoizedState = hr(t, n, l, r);
        return;
    }
} J.flags |= e, i.memoizedState = hr(1 | t, n, l, r); }
function eo(e, t) { return Wr(8390656, 8, e, t); }
function $a(e, t) { return Ri(2048, 8, e, t); }
function nc(e, t) { return Ri(4, 2, e, t); }
function rc(e, t) { return Ri(4, 4, e, t); }
function ic(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function lc(e, t, n) { return n = n != null ? n.concat([e]) : null, Ri(4, 4, ic.bind(null, t, e), n); }
function Ka() { }
function ac(e, t) { var n = $e(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Fa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function sc(e, t) { var n = $e(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Fa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function oc(e, t, n) { return Yt & 21 ? (Xe(n, t) || (n = pu(), J.lanes |= n, Qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n); }
function qf(e, t) { var n = B; B = n !== 0 && 4 > n ? n : 4, e(!0); var r = ol.transition; ol.transition = {}; try {
    e(!1), t();
}
finally {
    B = n, ol.transition = r;
} }
function uc() { return $e().memoizedState; }
function Jf(e, t, n) { var r = Tt(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cc(e))
    dc(t, n);
else if (n = Ku(e, t, n, r), n !== null) {
    var i = Se();
    Ze(n, e, r, i), fc(n, t, r);
} }
function ep(e, t, n) { var r = Tt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (cc(e))
    dc(t, i);
else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
        try {
            var a = t.lastRenderedState, s = l(a, n);
            if (i.hasEagerState = !0, i.eagerState = s, Xe(s, a)) {
                var u = t.interleaved;
                u === null ? (i.next = i, Ua(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
                return;
            }
        }
        catch { }
        finally { }
    n = Ku(e, t, i, r), n !== null && (i = Se(), Ze(n, e, r, i), fc(n, t, r));
} }
function cc(e) { var t = e.alternate; return e === J || t !== null && t === J; }
function dc(e, t) { Zn = mi = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function fc(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wa(e, n);
} }
var hi = { readContext: Be, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, tp = { readContext: Be, useCallback: function (e, t) { return et().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: Be, useEffect: eo, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, Wr(4194308, 4, ic.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Wr(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Wr(4, 2, e, t); }, useMemo: function (e, t) { var n = et(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = et(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Jf.bind(null, J, e), [r.memoizedState, e]; }, useRef: function (e) { var t = et(); return e = { current: e }, t.memoizedState = e; }, useState: Js, useDebugValue: Ka, useDeferredValue: function (e) { return et().memoizedState = e; }, useTransition: function () { var e = Js(!1), t = e[0]; return e = qf.bind(null, e[1]), et().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = J, i = et(); if (Z) {
        if (n === void 0)
            throw Error(j(407));
        n = n();
    }
    else {
        if (n = t(), ue === null)
            throw Error(j(349));
        Yt & 30 || Zu(r, t, n);
    } i.memoizedState = n; var l = { value: n, getSnapshot: t }; return i.queue = l, eo(qu.bind(null, r, l, e), [e]), r.flags |= 2048, hr(9, Xu.bind(null, r, l, n, t), void 0, null), n; }, useId: function () { var e = et(), t = ue.identifierPrefix; if (Z) {
        var n = st, r = at;
        n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = pr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = Xf++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, np = { readContext: Be, useCallback: ac, useContext: Be, useEffect: $a, useImperativeHandle: lc, useInsertionEffect: nc, useLayoutEffect: rc, useMemo: sc, useReducer: ul, useRef: tc, useState: function () { return ul(mr); }, useDebugValue: Ka, useDeferredValue: function (e) { var t = $e(); return oc(t, ae.memoizedState, e); }, useTransition: function () { var e = ul(mr)[0], t = $e().memoizedState; return [e, t]; }, useMutableSource: Yu, useSyncExternalStore: Qu, useId: uc, unstable_isNewReconciler: !1 }, rp = { readContext: Be, useCallback: ac, useContext: Be, useEffect: $a, useImperativeHandle: lc, useInsertionEffect: nc, useLayoutEffect: rc, useMemo: sc, useReducer: cl, useRef: tc, useState: function () { return cl(mr); }, useDebugValue: Ka, useDeferredValue: function (e) { var t = $e(); return ae === null ? t.memoizedState = e : oc(t, ae.memoizedState, e); }, useTransition: function () { var e = cl(mr)[0], t = $e().memoizedState; return [e, t]; }, useMutableSource: Yu, useSyncExternalStore: Qu, useId: uc, unstable_isNewReconciler: !1 };
function We(e, t) { if (e && e.defaultProps) {
    t = ee({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
function Wl(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var _i = { isMounted: function (e) { return (e = e._reactInternals) ? Jt(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = Se(), i = Tt(e), l = ot(r, i); l.payload = t, n != null && (l.callback = n), t = jt(e, l, i), t !== null && (Ze(t, e, i, r), $r(t, e, i)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = Se(), i = Tt(e), l = ot(r, i); l.tag = 1, l.payload = t, n != null && (l.callback = n), t = jt(e, l, i), t !== null && (Ze(t, e, i, r), $r(t, e, i)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = Se(), r = Tt(e), i = ot(n, r); i.tag = 2, t != null && (i.callback = t), t = jt(e, i, r), t !== null && (Ze(t, e, r, n), $r(t, e, r)); } };
function to(e, t, n, r, i, l, a) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, a) : t.prototype && t.prototype.isPureReactComponent ? !sr(n, r) || !sr(i, l) : !0; }
function pc(e, t, n) { var r = !1, i = _t, l = t.contextType; return typeof l == "object" && l !== null ? l = Be(l) : (i = _e(t) ? Wt : ve.current, r = t.contextTypes, l = (r = r != null) ? zn(e, i) : _t), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _i, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t; }
function no(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _i.enqueueReplaceState(t, t.state, null); }
function Gl(e, t, n, r) { var i = e.stateNode; i.props = n, i.state = e.memoizedState, i.refs = {}, Oa(e); var l = t.contextType; typeof l == "object" && l !== null ? i.context = Be(l) : (l = _e(t) ? Wt : ve.current, i.context = zn(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Wl(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && _i.enqueueReplaceState(i, i.state, null), fi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308); }
function Tn(e, t) {
    try {
        var n = "", r = t;
        do
            n += _d(r), r = r.return;
        while (r);
        var i = n;
    }
    catch (l) {
        i = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function dl(e, t, n) { return { value: e, source: null, stack: n ?? null, digest: t ?? null }; }
function Yl(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var ip = typeof WeakMap == "function" ? WeakMap : Map;
function mc(e, t, n) { n = ot(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { gi || (gi = !0, ia = r), Yl(e, t); }, n; }
function hc(e, t, n) { n = ot(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var i = t.value;
    n.payload = function () { return r(i); }, n.callback = function () { Yl(e, t); };
} var l = e.stateNode; return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function () { Yl(e, t), typeof r != "function" && (Et === null ? Et = new Set([this]) : Et.add(this)); var a = t.stack; this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" }); }), n; }
function ro(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new ip;
    var i = new Set;
    r.set(t, i);
}
else
    i = r.get(t), i === void 0 && (i = new Set, r.set(t, i)); i.has(n) || (i.add(n), e = vp.bind(null, e, t, n), t.then(e, e)); }
function io(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function lo(e, t, n, r, i) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ot(-1, 1), t.tag = 2, jt(n, t, 1))), n.lanes |= 1), e); }
var lp = pt.ReactCurrentOwner, Ce = !1;
function ke(e, t, n, r) { t.child = e === null ? $u(t, null, n, r) : jn(t, e.child, n, r); }
function ao(e, t, n, r, i) { n = n.render; var l = t.ref; return Sn(t, i), r = Ha(e, t, n, r, l, i), n = Ba(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ft(e, t, i)) : (Z && n && _a(t), t.flags |= 1, ke(e, t, r, i), t.child); }
function so(e, t, n, r, i) { if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Ja(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, yc(e, t, l, r, i)) : (e = Zr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
} if (l = e.child, !(e.lanes & i)) {
    var a = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : sr, n(a, r) && e.ref === t.ref)
        return ft(e, t, i);
} return t.flags |= 1, e = Ct(l, r), e.ref = t.ref, e.return = t, t.child = e; }
function yc(e, t, n, r, i) { if (e !== null) {
    var l = e.memoizedProps;
    if (sr(l, r) && e.ref === t.ref)
        if (Ce = !1, t.pendingProps = r = l, (e.lanes & i) !== 0)
            e.flags & 131072 && (Ce = !0);
        else
            return t.lanes = e.lanes, ft(e, t, i);
} return Ql(e, t, n, r, i); }
function gc(e, t, n) { var r = t.pendingProps, i = r.children, l = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(hn, Ie), Ie |= n;
    else {
        if (!(n & 1073741824))
            return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(hn, Ie), Ie |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, G(hn, Ie), Ie |= r;
    }
else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, G(hn, Ie), Ie |= r; return ke(e, t, i, n), t.child; }
function vc(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function Ql(e, t, n, r, i) { var l = _e(n) ? Wt : ve.current; return l = zn(t, l), Sn(t, i), n = Ha(e, t, n, r, l, i), r = Ba(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ft(e, t, i)) : (Z && r && _a(t), t.flags |= 1, ke(e, t, n, i), t.child); }
function oo(e, t, n, r, i) { if (_e(n)) {
    var l = !0;
    si(t);
}
else
    l = !1; if (Sn(t, i), t.stateNode === null)
    Gr(e, t), pc(t, n, r), Gl(t, n, r, i), r = !0;
else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var u = a.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Be(d) : (d = _e(n) ? Wt : ve.current, d = zn(t, d));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    m || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || u !== d) && no(t, a, r, d), yt = !1;
    var y = t.memoizedState;
    a.state = y, fi(t, r, a, i), u = t.memoizedState, s !== r || y !== u || Re.current || yt ? (typeof h == "function" && (Wl(t, n, h, r), u = t.memoizedState), (s = yt || to(t, n, s, r, y, u, d)) ? (m || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = d, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    a = t.stateNode, Wu(e, t), s = t.memoizedProps, d = t.type === t.elementType ? s : We(t.type, s), a.props = d, m = t.pendingProps, y = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = Be(u) : (u = _e(n) ? Wt : ve.current, u = zn(t, u));
    var S = n.getDerivedStateFromProps;
    (h = typeof S == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== m || y !== u) && no(t, a, r, u), yt = !1, y = t.memoizedState, a.state = y, fi(t, r, a, i);
    var w = t.memoizedState;
    s !== m || y !== w || Re.current || yt ? (typeof S == "function" && (Wl(t, n, S, r), w = t.memoizedState), (d = yt || to(t, n, d, r, y, w, u) || !1) ? (h || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, w, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, w, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), a.props = r, a.state = w, a.context = u, r = d) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
} return Zl(e, t, n, r, l, i); }
function Zl(e, t, n, r, i, l) { vc(e, t); var a = (t.flags & 128) !== 0; if (!r && !a)
    return i && Gs(t, n, !1), ft(e, t, l); r = t.stateNode, lp.current = t; var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && a ? (t.child = jn(t, e.child, null, l), t.child = jn(t, null, s, l)) : ke(e, t, s, l), t.memoizedState = r.state, i && Gs(t, n, !0), t.child; }
function kc(e) { var t = e.stateNode; t.pendingContext ? Ws(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ws(e, t.context, !1), ba(e, t.containerInfo); }
function uo(e, t, n, r, i) { return Nn(), Ia(i), t.flags |= 256, ke(e, t, n, r), t.child; }
var Xl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ql(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function Sc(e, t, n) { var r = t.pendingProps, i = q.current, l = !1, a = (t.flags & 128) !== 0, s; if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), G(q, i & 1), e === null)
    return $l(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, a = { mode: "hidden", children: a }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = a) : l = Pi(a, r, 0, null), e = $t(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = ql(n), t.memoizedState = Xl, e) : Wa(t, a)); if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null))
    return ap(e, t, a, r, s, i, n); if (l) {
    l = r.fallback, a = t.mode, i = e.child, s = i.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ct(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? l = Ct(s, l) : (l = $t(l, a, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, a = e.child.memoizedState, a = a === null ? ql(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, l.memoizedState = a, l.childLanes = e.childLanes & ~n, t.memoizedState = Xl, r;
} return l = e.child, e = l.sibling, r = Ct(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r; }
function Wa(e, t) { return t = Pi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function Lr(e, t, n, r) { return r !== null && Ia(r), jn(t, e.child, null, n), e = Wa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function ap(e, t, n, r, i, l, a) { if (n)
    return t.flags & 256 ? (t.flags &= -257, r = dl(Error(j(422))), Lr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = Pi({ mode: "visible", children: r.children }, i, 0, null), l = $t(l, i, a, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && jn(t, e.child, null, a), t.child.memoizedState = ql(a), t.memoizedState = Xl, l); if (!(t.mode & 1))
    return Lr(e, t, a, null); if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
        var s = r.dgst;
    return r = s, l = Error(j(419)), r = dl(l, r, void 0), Lr(e, t, a, r);
} if (s = (a & e.childLanes) !== 0, Ce || s) {
    if (r = ue, r !== null) {
        switch (a & -a) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default: i = 0;
        }
        i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, dt(e, i), Ze(r, e, i, -1));
    }
    return qa(), r = dl(Error(j(421))), Lr(e, t, a, r);
} return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = kp.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, Pe = Nt(i.nextSibling), Me = t, Z = !0, Ye = null, e !== null && (Ve[De++] = at, Ve[De++] = st, Ve[De++] = Gt, at = e.id, st = e.overflow, Gt = t), t = Wa(t, r.children), t.flags |= 4096, t); }
function co(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), Kl(e.return, t, n); }
function fl(e, t, n, r, i) { var l = e.memoizedState; l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i); }
function xc(e, t, n) { var r = t.pendingProps, i = r.revealOrder, l = r.tail; if (ke(e, t, r.children, n), r = q.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && co(e, n, t);
            else if (e.tag === 19)
                co(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if (G(q, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;)
                e = n.alternate, e !== null && pi(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), fl(t, !1, i, n, l);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && pi(e) === null) {
                    t.child = i;
                    break;
                }
                e = i.sibling, i.sibling = n, n = i, i = e;
            }
            fl(t, !0, n, null, l);
            break;
        case "together":
            fl(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function Gr(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2); }
function ft(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), Qt |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(j(153)); if (t.child !== null) {
    for (e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = Ct(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function sp(e, t, n) { switch (t.tag) {
    case 3:
        kc(t), Nn();
        break;
    case 5:
        Gu(t);
        break;
    case 1:
        _e(t.type) && si(t);
        break;
    case 4:
        ba(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        G(ci, r._currentValue), r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (G(q, q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Sc(e, t, n) : (G(q, q.current & 1), e = ft(e, t, n), e !== null ? e.sibling : null);
        G(q, q.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return xc(e, t, n);
            t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), G(q, q.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, gc(e, t, n);
} return ft(e, t, n); }
var wc, Jl, zc, Nc;
wc = function (e, t) { for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === t)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
Jl = function () { };
zc = function (e, t, n, r) { var i = e.memoizedProps; if (i !== r) {
    e = t.stateNode, Ht(rt.current);
    var l = null;
    switch (n) {
        case "input":
            i = xl(e, i), r = xl(e, r), l = [];
            break;
        case "select":
            i = ee({}, i, { value: void 0 }), r = ee({}, r, { value: void 0 }), l = [];
            break;
        case "textarea":
            i = Nl(e, i), r = Nl(e, r), l = [];
            break;
        default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = li);
    }
    El(n, r);
    var a;
    n = null;
    for (d in i)
        if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
            if (d === "style") {
                var s = i[d];
                for (a in s)
                    s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
            }
            else
                d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (er.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
    for (d in r) {
        var u = r[d];
        if (s = i != null ? i[d] : void 0, r.hasOwnProperty(d) && u !== s && (u != null || s != null))
            if (d === "style")
                if (s) {
                    for (a in s)
                        !s.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                    for (a in u)
                        u.hasOwnProperty(a) && s[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
                }
                else
                    n || (l || (l = []), l.push(d, n)), n = u;
            else
                d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (er.hasOwnProperty(d) ? (u != null && d === "onScroll" && Y("scroll", e), l || s === u || (l = [])) : (l = l || []).push(d, u));
    }
    n && (l = l || []).push("style", n);
    var d = l;
    (t.updateQueue = d) && (t.flags |= 4);
} };
Nc = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function bn(e, t) { if (!Z)
    switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function ye(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
else
    for (i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function op(e, t, n) { var r = t.pendingProps; switch (Aa(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return ye(t), null;
    case 1: return _e(t.type) && ai(), ye(t), null;
    case 3: return r = t.stateNode, En(), Q(Re), Q(ve), Da(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (sa(Ye), Ye = null))), Jl(e, t), ye(t), null;
    case 5:
        Va(t);
        var i = Ht(fr.current);
        if (n = t.type, e !== null && t.stateNode != null)
            zc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return ye(t), null;
            }
            if (e = Ht(rt.current), Pr(t)) {
                r = t.stateNode, n = t.type;
                var l = t.memoizedProps;
                switch (r[tt] = t, r[cr] = l, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        Y("cancel", r), Y("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Y("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < $n.length; i++)
                            Y($n[i], r);
                        break;
                    case "source":
                        Y("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Y("error", r), Y("load", r);
                        break;
                    case "details":
                        Y("toggle", r);
                        break;
                    case "input":
                        ks(r, l), Y("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!l.multiple }, Y("invalid", r);
                        break;
                    case "textarea": xs(r, l), Y("invalid", r);
                }
                El(n, l), i = null;
                for (var a in l)
                    if (l.hasOwnProperty(a)) {
                        var s = l[a];
                        a === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Ir(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Ir(r.textContent, s, e), i = ["children", "" + s]) : er.hasOwnProperty(a) && s != null && a === "onScroll" && Y("scroll", r);
                    }
                switch (n) {
                    case "input":
                        Nr(r), Ss(r, l, !0);
                        break;
                    case "textarea":
                        Nr(r), ws(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof l.onClick == "function" && (r.onclick = li);
                }
                r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = qo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[tt] = t, e[cr] = r, wc(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (a = Tl(n, r), n) {
                        case "dialog":
                            Y("cancel", e), Y("close", e), i = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Y("load", e), i = r;
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < $n.length; i++)
                                Y($n[i], e);
                            i = r;
                            break;
                        case "source":
                            Y("error", e), i = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Y("error", e), Y("load", e), i = r;
                            break;
                        case "details":
                            Y("toggle", e), i = r;
                            break;
                        case "input":
                            ks(e, r), i = xl(e, r), Y("invalid", e);
                            break;
                        case "option":
                            i = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, i = ee({}, r, { value: void 0 }), Y("invalid", e);
                            break;
                        case "textarea":
                            xs(e, r), i = Nl(e, r), Y("invalid", e);
                            break;
                        default: i = r;
                    }
                    El(n, i), s = i;
                    for (l in s)
                        if (s.hasOwnProperty(l)) {
                            var u = s[l];
                            l === "style" ? tu(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Jo(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && tr(e, u) : typeof u == "number" && tr(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (er.hasOwnProperty(l) ? u != null && l === "onScroll" && Y("scroll", e) : u != null && ya(e, l, u, a));
                        }
                    switch (n) {
                        case "input":
                            Nr(e), Ss(e, r, !1);
                            break;
                        case "textarea":
                            Nr(e), ws(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + Rt(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, l = r.value, l != null ? yn(e, !!r.multiple, l, !1) : r.defaultValue != null && yn(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof i.onClick == "function" && (e.onclick = li);
                    }
                    switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                }
                r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return ye(t), null;
    case 6:
        if (e && t.stateNode != null)
            Nc(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Ht(fr.current), Ht(rt.current), Pr(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[tt] = t, (l = r.nodeValue !== n) && (e = Me, e !== null))
                    switch (e.tag) {
                        case 3:
                            Ir(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && Ir(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                l && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[tt] = t, t.stateNode = r;
        }
        return ye(t), null;
    case 13:
        if (Q(q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Z && Pe !== null && t.mode & 1 && !(t.flags & 128))
                Hu(), Nn(), t.flags |= 98560, l = !1;
            else if (l = Pr(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!l)
                        throw Error(j(318));
                    if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                        throw Error(j(317));
                    l[tt] = t;
                }
                else
                    Nn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                ye(t), l = !1;
            }
            else
                Ye !== null && (sa(Ye), Ye = null), l = !0;
            if (!l)
                return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || q.current & 1 ? se === 0 && (se = 3) : qa())), t.updateQueue !== null && (t.flags |= 4), ye(t), null);
    case 4: return En(), Jl(e, t), e === null && or(t.stateNode.containerInfo), ye(t), null;
    case 10: return La(t.type._context), ye(t), null;
    case 17: return _e(t.type) && ai(), ye(t), null;
    case 19:
        if (Q(q), l = t.memoizedState, l === null)
            return ye(t), null;
        if (r = (t.flags & 128) !== 0, a = l.rendering, a === null)
            if (r)
                bn(l, !1);
            else {
                if (se !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (a = pi(e), a !== null) {
                            for (t.flags |= 128, bn(l, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                l = n, e = r, l.flags &= 14680066, a = l.alternate, a === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, e = a.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return G(q, q.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                l.tail !== null && ie() > Cn && (t.flags |= 128, r = !0, bn(l, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = pi(a), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), bn(l, !0), l.tail === null && l.tailMode === "hidden" && !a.alternate && !Z)
                        return ye(t), null;
                }
                else
                    2 * ie() - l.renderingStartTime > Cn && n !== 1073741824 && (t.flags |= 128, r = !0, bn(l, !1), t.lanes = 4194304);
            l.isBackwards ? (a.sibling = t.child, t.child = a) : (n = l.last, n !== null ? n.sibling = a : t.child = a, l.last = a);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ie(), t.sibling = null, n = q.current, G(q, r ? n & 1 | 2 : n & 1), t) : (ye(t), null);
    case 22:
    case 23: return Xa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ie & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(j(156, t.tag)); }
function up(e, t) { switch (Aa(t), t.tag) {
    case 1: return _e(t.type) && ai(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return En(), Q(Re), Q(ve), Da(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return Va(t), null;
    case 13:
        if (Q(q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Nn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return Q(q), null;
    case 4: return En(), null;
    case 10: return La(t.type._context), null;
    case 22:
    case 23: return Xa(), null;
    case 24: return null;
    default: return null;
} }
var Ur = !1, ge = !1, cp = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function mn(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            re(e, t, r);
        }
    else
        n.current = null; }
function ea(e, t, n) { try {
    n();
}
catch (r) {
    re(e, t, r);
} }
var fo = !1;
function dp(e, t) { if (Ol = ni, e = Ru(), Ra(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, l = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, l.nodeType;
                }
                catch {
                    n = null;
                    break e;
                }
                var a = 0, s = -1, u = -1, d = 0, h = 0, m = e, y = null;
                t: for (;;) {
                    for (var S; m !== n || i !== 0 && m.nodeType !== 3 || (s = a + i), m !== l || r !== 0 && m.nodeType !== 3 || (u = a + r), m.nodeType === 3 && (a += m.nodeValue.length), (S = m.firstChild) !== null;)
                        y = m, m = S;
                    for (;;) {
                        if (m === e)
                            break t;
                        if (y === n && ++d === i && (s = a), y === l && ++h === r && (u = a), (S = m.nextSibling) !== null)
                            break;
                        m = y, y = m.parentNode;
                    }
                    m = S;
                }
                n = s === -1 || u === -1 ? null : { start: s, end: u };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (bl = { focusedElem: e, selectionRange: n }, ni = !1, R = t; R !== null;)
    if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, R = e;
    else
        for (; R !== null;) {
            t = R;
            try {
                var w = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps, v = w.memoizedState, p = t.stateNode, c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? k : We(t.type, k), v);
                                p.__reactInternalSnapshotBeforeUpdate = c;
                            }
                            break;
                        case 3:
                            var f = t.stateNode.containerInfo;
                            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(j(163));
                    }
            }
            catch (g) {
                re(t, t.return, g);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, R = e;
                break;
            }
            R = t.return;
        } return w = fo, fo = !1, w; }
function Xn(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
        if ((i.tag & e) === e) {
            var l = i.destroy;
            i.destroy = void 0, l !== void 0 && ea(t, n, l);
        }
        i = i.next;
    } while (i !== r);
} }
function Ai(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function ta(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function jc(e) { var t = e.alternate; t !== null && (e.alternate = null, jc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[tt], delete t[cr], delete t[Fl], delete t[Gf], delete t[Yf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function Ec(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function po(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || Ec(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function na(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = li));
else if (r !== 4 && (e = e.child, e !== null))
    for (na(e, t, n), e = e.sibling; e !== null;)
        na(e, t, n), e = e.sibling; }
function ra(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (ra(e, t, n), e = e.sibling; e !== null;)
        ra(e, t, n), e = e.sibling; }
var fe = null, Ge = !1;
function mt(e, t, n) { for (n = n.child; n !== null;)
    Tc(e, t, n), n = n.sibling; }
function Tc(e, t, n) { if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
        nt.onCommitFiberUnmount(zi, n);
    }
    catch { } switch (n.tag) {
    case 5: ge || mn(n, t);
    case 6:
        var r = fe, i = Ge;
        fe = null, mt(e, t, n), fe = r, Ge = i, fe !== null && (Ge ? (e = fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : fe.removeChild(n.stateNode));
        break;
    case 18:
        fe !== null && (Ge ? (e = fe, n = n.stateNode, e.nodeType === 8 ? ll(e.parentNode, n) : e.nodeType === 1 && ll(e, n), lr(e)) : ll(fe, n.stateNode));
        break;
    case 4:
        r = fe, i = Ge, fe = n.stateNode.containerInfo, Ge = !0, mt(e, t, n), fe = r, Ge = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            i = r = r.next;
            do {
                var l = i, a = l.destroy;
                l = l.tag, a !== void 0 && (l & 2 || l & 4) && ea(n, t, a), i = i.next;
            } while (i !== r);
        }
        mt(e, t, n);
        break;
    case 1:
        if (!ge && (mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (s) {
                re(n, t, s);
            }
        mt(e, t, n);
        break;
    case 21:
        mt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, mt(e, t, n), ge = r) : mt(e, t, n);
        break;
    default: mt(e, t, n);
} }
function mo(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new cp), t.forEach(function (r) { var i = Sp.bind(null, e, r); n.has(r) || (n.add(r), r.then(i, i)); });
} }
function Ke(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var l = e, a = t, s = a;
            e: for (; s !== null;) {
                switch (s.tag) {
                    case 5:
                        fe = s.stateNode, Ge = !1;
                        break e;
                    case 3:
                        fe = s.stateNode.containerInfo, Ge = !0;
                        break e;
                    case 4:
                        fe = s.stateNode.containerInfo, Ge = !0;
                        break e;
                }
                s = s.return;
            }
            if (fe === null)
                throw Error(j(160));
            Tc(l, a, i), fe = null, Ge = !1;
            var u = i.alternate;
            u !== null && (u.return = null), i.return = null;
        }
        catch (d) {
            re(i, t, d);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        Cc(t, e), t = t.sibling; }
function Cc(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ke(t, e), Je(e), r & 4) {
            try {
                Xn(3, e, e.return), Ai(3, e);
            }
            catch (k) {
                re(e, e.return, k);
            }
            try {
                Xn(5, e, e.return);
            }
            catch (k) {
                re(e, e.return, k);
            }
        }
        break;
    case 1:
        Ke(t, e), Je(e), r & 512 && n !== null && mn(n, n.return);
        break;
    case 5:
        if (Ke(t, e), Je(e), r & 512 && n !== null && mn(n, n.return), e.flags & 32) {
            var i = e.stateNode;
            try {
                tr(i, "");
            }
            catch (k) {
                re(e, e.return, k);
            }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
            var l = e.memoizedProps, a = n !== null ? n.memoizedProps : l, s = e.type, u = e.updateQueue;
            if (e.updateQueue = null, u !== null)
                try {
                    s === "input" && l.type === "radio" && l.name != null && Zo(i, l), Tl(s, a);
                    var d = Tl(s, l);
                    for (a = 0; a < u.length; a += 2) {
                        var h = u[a], m = u[a + 1];
                        h === "style" ? tu(i, m) : h === "dangerouslySetInnerHTML" ? Jo(i, m) : h === "children" ? tr(i, m) : ya(i, h, m, d);
                    }
                    switch (s) {
                        case "input":
                            wl(i, l);
                            break;
                        case "textarea":
                            Xo(i, l);
                            break;
                        case "select":
                            var y = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!l.multiple;
                            var S = l.value;
                            S != null ? yn(i, !!l.multiple, S, !1) : y !== !!l.multiple && (l.defaultValue != null ? yn(i, !!l.multiple, l.defaultValue, !0) : yn(i, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    i[cr] = l;
                }
                catch (k) {
                    re(e, e.return, k);
                }
        }
        break;
    case 6:
        if (Ke(t, e), Je(e), r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            i = e.stateNode, l = e.memoizedProps;
            try {
                i.nodeValue = l;
            }
            catch (k) {
                re(e, e.return, k);
            }
        }
        break;
    case 3:
        if (Ke(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                lr(t.containerInfo);
            }
            catch (k) {
                re(e, e.return, k);
            }
        break;
    case 4:
        Ke(t, e), Je(e);
        break;
    case 13:
        Ke(t, e), Je(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Qa = ie())), r & 4 && mo(e);
        break;
    case 22:
        if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (d = ge) || h, Ke(t, e), ge = d) : Ke(t, e), Je(e), r & 8192) {
            if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1)
                for (R = e, h = e.child; h !== null;) {
                    for (m = R = h; R !== null;) {
                        switch (y = R, S = y.child, y.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Xn(4, y, y.return);
                                break;
                            case 1:
                                mn(y, y.return);
                                var w = y.stateNode;
                                if (typeof w.componentWillUnmount == "function") {
                                    r = y, n = y.return;
                                    try {
                                        t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                                    }
                                    catch (k) {
                                        re(r, n, k);
                                    }
                                }
                                break;
                            case 5:
                                mn(y, y.return);
                                break;
                            case 22: if (y.memoizedState !== null) {
                                yo(m);
                                continue;
                            }
                        }
                        S !== null ? (S.return = y, R = S) : yo(m);
                    }
                    h = h.sibling;
                }
            e: for (h = null, m = e;;) {
                if (m.tag === 5) {
                    if (h === null) {
                        h = m;
                        try {
                            i = m.stateNode, d ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = m.stateNode, u = m.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = eu("display", a));
                        }
                        catch (k) {
                            re(e, e.return, k);
                        }
                    }
                }
                else if (m.tag === 6) {
                    if (h === null)
                        try {
                            m.stateNode.nodeValue = d ? "" : m.memoizedProps;
                        }
                        catch (k) {
                            re(e, e.return, k);
                        }
                }
                else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m, m = m.child;
                    continue;
                }
                if (m === e)
                    break e;
                for (; m.sibling === null;) {
                    if (m.return === null || m.return === e)
                        break e;
                    h === m && (h = null), m = m.return;
                }
                h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
            }
        }
        break;
    case 19:
        Ke(t, e), Je(e), r & 4 && mo(e);
        break;
    case 21: break;
    default: Ke(t, e), Je(e);
} }
function Je(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if (Ec(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(j(160));
        }
        switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (tr(i, ""), r.flags &= -33);
                var l = po(e);
                ra(e, l, i);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo, s = po(e);
                na(e, s, a);
                break;
            default: throw Error(j(161));
        }
    }
    catch (u) {
        re(e, e.return, u);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function fp(e, t, n) { R = e, Rc(e); }
function Rc(e, t, n) { for (var r = (e.mode & 1) !== 0; R !== null;) {
    var i = R, l = i.child;
    if (i.tag === 22 && r) {
        var a = i.memoizedState !== null || Ur;
        if (!a) {
            var s = i.alternate, u = s !== null && s.memoizedState !== null || ge;
            s = Ur;
            var d = ge;
            if (Ur = a, (ge = u) && !d)
                for (R = i; R !== null;)
                    a = R, u = a.child, a.tag === 22 && a.memoizedState !== null ? go(i) : u !== null ? (u.return = a, R = u) : go(i);
            for (; l !== null;)
                R = l, Rc(l), l = l.sibling;
            R = i, Ur = s, ge = d;
        }
        ho(e);
    }
    else
        i.subtreeFlags & 8772 && l !== null ? (l.return = i, R = l) : ho(e);
} }
function ho(e) { for (; R !== null;) {
    var t = R;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ge || Ai(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ge)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var l = t.updateQueue;
                        l !== null && qs(t, l, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            qs(t, a, n);
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img": u.src && (n.src = u.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var h = d.memoizedState;
                                if (h !== null) {
                                    var m = h.dehydrated;
                                    m !== null && lr(m);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(j(163));
                }
            ge || t.flags & 512 && ta(t);
        }
        catch (y) {
            re(t, t.return, y);
        }
    }
    if (t === e) {
        R = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, R = n;
        break;
    }
    R = t.return;
} }
function yo(e) { for (; R !== null;) {
    var t = R;
    if (t === e) {
        R = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, R = n;
        break;
    }
    R = t.return;
} }
function go(e) { for (; R !== null;) {
    var t = R;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ai(4, t);
                }
                catch (u) {
                    re(t, n, u);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (u) {
                        re(t, i, u);
                    }
                }
                var l = t.return;
                try {
                    ta(t);
                }
                catch (u) {
                    re(t, l, u);
                }
                break;
            case 5:
                var a = t.return;
                try {
                    ta(t);
                }
                catch (u) {
                    re(t, a, u);
                }
        }
    }
    catch (u) {
        re(t, t.return, u);
    }
    if (t === e) {
        R = null;
        break;
    }
    var s = t.sibling;
    if (s !== null) {
        s.return = t.return, R = s;
        break;
    }
    R = t.return;
} }
var pp = Math.ceil, yi = pt.ReactCurrentDispatcher, Ga = pt.ReactCurrentOwner, He = pt.ReactCurrentBatchConfig, F = 0, ue = null, le = null, pe = 0, Ie = 0, hn = It(0), se = 0, yr = null, Qt = 0, Ii = 0, Ya = 0, qn = null, Te = null, Qa = 0, Cn = 1 / 0, it = null, gi = !1, ia = null, Et = null, Or = !1, St = null, vi = 0, Jn = 0, la = null, Yr = -1, Qr = 0;
function Se() { return F & 6 ? ie() : Yr !== -1 ? Yr : Yr = ie(); }
function Tt(e) { return e.mode & 1 ? F & 2 && pe !== 0 ? pe & -pe : Zf.transition !== null ? (Qr === 0 && (Qr = pu()), Qr) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Su(e.type)), e) : 1; }
function Ze(e, t, n, r) { if (50 < Jn)
    throw Jn = 0, la = null, Error(j(185)); vr(e, n, r), (!(F & 2) || e !== ue) && (e === ue && (!(F & 2) && (Ii |= n), se === 4 && vt(e, pe)), Ae(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Cn = ie() + 500, Ci && Pt())); }
function Ae(e, t) { var n = e.callbackNode; Qd(e, t); var r = ti(e, e === ue ? pe : 0); if (r === 0)
    n !== null && js(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && js(n), t === 1)
        e.tag === 0 ? Qf(vo.bind(null, e)) : Vu(vo.bind(null, e)), Kf(function () { !(F & 6) && Pt(); }), n = null;
    else {
        switch (mu(r)) {
            case 1:
                n = xa;
                break;
            case 4:
                n = du;
                break;
            case 16:
                n = ei;
                break;
            case 536870912:
                n = fu;
                break;
            default: n = ei;
        }
        n = Oc(n, _c.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function _c(e, t) { if (Yr = -1, Qr = 0, F & 6)
    throw Error(j(327)); var n = e.callbackNode; if (xn() && e.callbackNode !== n)
    return null; var r = ti(e, e === ue ? pe : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = ki(e, r);
else {
    t = r;
    var i = F;
    F |= 2;
    var l = Ic();
    (ue !== e || pe !== t) && (it = null, Cn = ie() + 500, Bt(e, t));
    do
        try {
            yp();
            break;
        }
        catch (s) {
            Ac(e, s);
        }
    while (!0);
    Ma(), yi.current = l, F = i, le !== null ? t = 0 : (ue = null, pe = 0, t = se);
} if (t !== 0) {
    if (t === 2 && (i = Il(e), i !== 0 && (r = i, t = aa(e, i))), t === 1)
        throw n = yr, Bt(e, 0), vt(e, r), Ae(e, ie()), n;
    if (t === 6)
        vt(e, r);
    else {
        if (i = e.current.alternate, !(r & 30) && !mp(i) && (t = ki(e, r), t === 2 && (l = Il(e), l !== 0 && (r = l, t = aa(e, l))), t === 1))
            throw n = yr, Bt(e, 0), vt(e, r), Ae(e, ie()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(j(345));
            case 2:
                Vt(e, Te, it);
                break;
            case 3:
                if (vt(e, r), (r & 130023424) === r && (t = Qa + 500 - ie(), 10 < t)) {
                    if (ti(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes, (i & r) !== r) {
                        Se(), e.pingedLanes |= e.suspendedLanes & i;
                        break;
                    }
                    e.timeoutHandle = Dl(Vt.bind(null, e, Te, it), t);
                    break;
                }
                Vt(e, Te, it);
                break;
            case 4:
                if (vt(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, i = -1; 0 < r;) {
                    var a = 31 - Qe(r);
                    l = 1 << a, a = t[a], a > i && (i = a), r &= ~l;
                }
                if (r = i, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * pp(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = Dl(Vt.bind(null, e, Te, it), r);
                    break;
                }
                Vt(e, Te, it);
                break;
            case 5:
                Vt(e, Te, it);
                break;
            default: throw Error(j(329));
        }
    }
} return Ae(e, ie()), e.callbackNode === n ? _c.bind(null, e) : null; }
function aa(e, t) { var n = qn; return e.current.memoizedState.isDehydrated && (Bt(e, t).flags |= 256), e = ki(e, t), e !== 2 && (t = Te, Te = n, t !== null && sa(t)), e; }
function sa(e) { Te === null ? Te = e : Te.push.apply(Te, e); }
function mp(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var i = n[r], l = i.getSnapshot;
                i = i.value;
                try {
                    if (!Xe(l(), i))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
    else {
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
} return !0; }
function vt(e, t) { for (t &= ~Ya, t &= ~Ii, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - Qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function vo(e) { if (F & 6)
    throw Error(j(327)); xn(); var t = ti(e, 0); if (!(t & 1))
    return Ae(e, ie()), null; var n = ki(e, t); if (e.tag !== 0 && n === 2) {
    var r = Il(e);
    r !== 0 && (t = r, n = aa(e, r));
} if (n === 1)
    throw n = yr, Bt(e, 0), vt(e, t), Ae(e, ie()), n; if (n === 6)
    throw Error(j(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vt(e, Te, it), Ae(e, ie()), null; }
function Za(e, t) { var n = F; F |= 1; try {
    return e(t);
}
finally {
    F = n, F === 0 && (Cn = ie() + 500, Ci && Pt());
} }
function Zt(e) { St !== null && St.tag === 0 && !(F & 6) && xn(); var t = F; F |= 1; var n = He.transition, r = B; try {
    if (He.transition = null, B = 1, e)
        return e();
}
finally {
    B = r, He.transition = n, F = t, !(F & 6) && Pt();
} }
function Xa() { Ie = hn.current, Q(hn); }
function Bt(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, $f(n)), le !== null)
    for (n = le.return; n !== null;) {
        var r = n;
        switch (Aa(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && ai();
                break;
            case 3:
                En(), Q(Re), Q(ve), Da();
                break;
            case 5:
                Va(r);
                break;
            case 4:
                En();
                break;
            case 13:
                Q(q);
                break;
            case 19:
                Q(q);
                break;
            case 10:
                La(r.type._context);
                break;
            case 22:
            case 23: Xa();
        }
        n = n.return;
    } if (ue = e, le = e = Ct(e.current, null), pe = Ie = t, se = 0, yr = null, Ya = Ii = Qt = 0, Te = qn = null, Ft !== null) {
    for (t = 0; t < Ft.length; t++)
        if (n = Ft[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, l = n.pending;
            if (l !== null) {
                var a = l.next;
                l.next = i, r.next = a;
            }
            n.pending = r;
        }
    Ft = null;
} return e; }
function Ac(e, t) { do {
    var n = le;
    try {
        if (Ma(), Kr.current = hi, mi) {
            for (var r = J.memoizedState; r !== null;) {
                var i = r.queue;
                i !== null && (i.pending = null), r = r.next;
            }
            mi = !1;
        }
        if (Yt = 0, oe = ae = J = null, Zn = !1, pr = 0, Ga.current = null, n === null || n.return === null) {
            se = 1, yr = t, le = null;
            break;
        }
        e: {
            var l = e, a = n.return, s = n, u = t;
            if (t = pe, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                var d = u, h = s, m = h.tag;
                if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                    var y = h.alternate;
                    y ? (h.updateQueue = y.updateQueue, h.memoizedState = y.memoizedState, h.lanes = y.lanes) : (h.updateQueue = null, h.memoizedState = null);
                }
                var S = io(a);
                if (S !== null) {
                    S.flags &= -257, lo(S, a, s, l, t), S.mode & 1 && ro(l, d, t), t = S, u = d;
                    var w = t.updateQueue;
                    if (w === null) {
                        var k = new Set;
                        k.add(u), t.updateQueue = k;
                    }
                    else
                        w.add(u);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        ro(l, d, t), qa();
                        break e;
                    }
                    u = Error(j(426));
                }
            }
            else if (Z && s.mode & 1) {
                var v = io(a);
                if (v !== null) {
                    !(v.flags & 65536) && (v.flags |= 256), lo(v, a, s, l, t), Ia(Tn(u, s));
                    break e;
                }
            }
            l = u = Tn(u, s), se !== 4 && (se = 2), qn === null ? qn = [l] : qn.push(l), l = a;
            do {
                switch (l.tag) {
                    case 3:
                        l.flags |= 65536, t &= -t, l.lanes |= t;
                        var p = mc(l, u, t);
                        Xs(l, p);
                        break e;
                    case 1:
                        s = u;
                        var c = l.type, f = l.stateNode;
                        if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Et === null || !Et.has(f)))) {
                            l.flags |= 65536, t &= -t, l.lanes |= t;
                            var g = hc(l, s, t);
                            Xs(l, g);
                            break e;
                        }
                }
                l = l.return;
            } while (l !== null);
        }
        Mc(n);
    }
    catch (x) {
        t = x, le === n && n !== null && (le = n = n.return);
        continue;
    }
    break;
} while (!0); }
function Ic() { var e = yi.current; return yi.current = hi, e === null ? hi : e; }
function qa() { (se === 0 || se === 3 || se === 2) && (se = 4), ue === null || !(Qt & 268435455) && !(Ii & 268435455) || vt(ue, pe); }
function ki(e, t) { var n = F; F |= 2; var r = Ic(); (ue !== e || pe !== t) && (it = null, Bt(e, t)); do
    try {
        hp();
        break;
    }
    catch (i) {
        Ac(e, i);
    }
while (!0); if (Ma(), F = n, yi.current = r, le !== null)
    throw Error(j(261)); return ue = null, pe = 0, se; }
function hp() { for (; le !== null;)
    Pc(le); }
function yp() { for (; le !== null && !Dd();)
    Pc(le); }
function Pc(e) { var t = Uc(e.alternate, e, Ie); e.memoizedProps = e.pendingProps, t === null ? Mc(e) : le = t, Ga.current = null; }
function Mc(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = up(n, t), n !== null) {
            n.flags &= 32767, le = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            se = 6, le = null;
            return;
        }
    }
    else if (n = op(n, t, Ie), n !== null) {
        le = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        le = t;
        return;
    }
    le = t = e;
} while (t !== null); se === 0 && (se = 5); }
function Vt(e, t, n) { var r = B, i = He.transition; try {
    He.transition = null, B = 1, gp(e, t, n, r);
}
finally {
    He.transition = i, B = r;
} return null; }
function gp(e, t, n, r) { do
    xn();
while (St !== null); if (F & 6)
    throw Error(j(327)); n = e.finishedWork; var i = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(j(177)); e.callbackNode = null, e.callbackPriority = 0; var l = n.lanes | n.childLanes; if (Zd(e, l), e === ue && (le = ue = null, pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Or || (Or = !0, Oc(ei, function () { return xn(), null; })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = He.transition, He.transition = null;
    var a = B;
    B = 1;
    var s = F;
    F |= 4, Ga.current = null, dp(e, n), Cc(n, e), Of(bl), ni = !!Ol, bl = Ol = null, e.current = n, fp(n), Fd(), F = s, B = a, He.transition = l;
}
else
    e.current = n; if (Or && (Or = !1, St = e, vi = i), l = e.pendingLanes, l === 0 && (Et = null), $d(n.stateNode), Ae(e, ie()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest }); if (gi)
    throw gi = !1, e = ia, ia = null, e; return vi & 1 && e.tag !== 0 && xn(), l = e.pendingLanes, l & 1 ? e === la ? Jn++ : (Jn = 0, la = e) : Jn = 0, Pt(), null; }
function xn() { if (St !== null) {
    var e = mu(vi), t = He.transition, n = B;
    try {
        if (He.transition = null, B = 16 > e ? 16 : e, St === null)
            var r = !1;
        else {
            if (e = St, St = null, vi = 0, F & 6)
                throw Error(j(331));
            var i = F;
            for (F |= 4, R = e.current; R !== null;) {
                var l = R, a = l.child;
                if (R.flags & 16) {
                    var s = l.deletions;
                    if (s !== null) {
                        for (var u = 0; u < s.length; u++) {
                            var d = s[u];
                            for (R = d; R !== null;) {
                                var h = R;
                                switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15: Xn(8, h, l);
                                }
                                var m = h.child;
                                if (m !== null)
                                    m.return = h, R = m;
                                else
                                    for (; R !== null;) {
                                        h = R;
                                        var y = h.sibling, S = h.return;
                                        if (jc(h), h === d) {
                                            R = null;
                                            break;
                                        }
                                        if (y !== null) {
                                            y.return = S, R = y;
                                            break;
                                        }
                                        R = S;
                                    }
                            }
                        }
                        var w = l.alternate;
                        if (w !== null) {
                            var k = w.child;
                            if (k !== null) {
                                w.child = null;
                                do {
                                    var v = k.sibling;
                                    k.sibling = null, k = v;
                                } while (k !== null);
                            }
                        }
                        R = l;
                    }
                }
                if (l.subtreeFlags & 2064 && a !== null)
                    a.return = l, R = a;
                else
                    e: for (; R !== null;) {
                        if (l = R, l.flags & 2048)
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15: Xn(9, l, l.return);
                            }
                        var p = l.sibling;
                        if (p !== null) {
                            p.return = l.return, R = p;
                            break e;
                        }
                        R = l.return;
                    }
            }
            var c = e.current;
            for (R = c; R !== null;) {
                a = R;
                var f = a.child;
                if (a.subtreeFlags & 2064 && f !== null)
                    f.return = a, R = f;
                else
                    e: for (a = c; R !== null;) {
                        if (s = R, s.flags & 2048)
                            try {
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15: Ai(9, s);
                                }
                            }
                            catch (x) {
                                re(s, s.return, x);
                            }
                        if (s === a) {
                            R = null;
                            break e;
                        }
                        var g = s.sibling;
                        if (g !== null) {
                            g.return = s.return, R = g;
                            break e;
                        }
                        R = s.return;
                    }
            }
            if (F = i, Pt(), nt && typeof nt.onPostCommitFiberRoot == "function")
                try {
                    nt.onPostCommitFiberRoot(zi, e);
                }
                catch { }
            r = !0;
        }
        return r;
    }
    finally {
        B = n, He.transition = t;
    }
} return !1; }
function ko(e, t, n) { t = Tn(n, t), t = mc(e, t, 1), e = jt(e, t, 1), t = Se(), e !== null && (vr(e, 1, t), Ae(e, t)); }
function re(e, t, n) { if (e.tag === 3)
    ko(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            ko(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Et === null || !Et.has(r))) {
                e = Tn(n, e), e = hc(t, e, 1), t = jt(t, e, 1), e = Se(), t !== null && (vr(t, 1, e), Ae(t, e));
                break;
            }
        }
        t = t.return;
    } }
function vp(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (pe & n) === n && (se === 4 || se === 3 && (pe & 130023424) === pe && 500 > ie() - Qa ? Bt(e, 0) : Ya |= n), Ae(e, t); }
function Lc(e, t) { t === 0 && (e.mode & 1 ? (t = Tr, Tr <<= 1, !(Tr & 130023424) && (Tr = 4194304)) : t = 1); var n = Se(); e = dt(e, t), e !== null && (vr(e, t, n), Ae(e, n)); }
function kp(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), Lc(e, n); }
function Sp(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(j(314));
} r !== null && r.delete(t), Lc(e, n); }
var Uc;
Uc = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current)
        Ce = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return Ce = !1, sp(e, t, n);
        Ce = !!(e.flags & 131072);
    }
else
    Ce = !1, Z && t.flags & 1048576 && Du(t, ui, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        Gr(e, t), e = t.pendingProps;
        var i = zn(t, ve.current);
        Sn(t, n), i = Ha(null, t, r, e, i, n);
        var l = Ba();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (l = !0, si(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Oa(t), i.updater = _i, t.stateNode = i, i._reactInternals = t, Gl(t, r, e, n), t = Zl(null, t, r, !0, l, n)) : (t.tag = 0, Z && l && _a(t), ke(null, t, i, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (Gr(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = wp(r), e = We(r, e), i) {
                case 0:
                    t = Ql(null, t, r, e, n);
                    break e;
                case 1:
                    t = oo(null, t, r, e, n);
                    break e;
                case 11:
                    t = ao(null, t, r, e, n);
                    break e;
                case 14:
                    t = so(null, t, r, We(r.type, e), n);
                    break e;
            }
            throw Error(j(306, r, ""));
        }
        return t;
    case 0: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : We(r, i), Ql(e, t, r, i, n);
    case 1: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : We(r, i), oo(e, t, r, i, n);
    case 3:
        e: {
            if (kc(t), e === null)
                throw Error(j(387));
            r = t.pendingProps, l = t.memoizedState, i = l.element, Wu(e, t), fi(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element, l.isDehydrated)
                if (l = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                    i = Tn(Error(j(423)), t), t = uo(e, t, r, n, i);
                    break e;
                }
                else if (r !== i) {
                    i = Tn(Error(j(424)), t), t = uo(e, t, r, n, i);
                    break e;
                }
                else
                    for (Pe = Nt(t.stateNode.containerInfo.firstChild), Me = t, Z = !0, Ye = null, n = $u(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (Nn(), r === i) {
                    t = ft(e, t, n);
                    break e;
                }
                ke(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return Gu(t), e === null && $l(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, a = i.children, Vl(r, i) ? a = null : l !== null && Vl(r, l) && (t.flags |= 32), vc(e, t), ke(e, t, a, n), t.child;
    case 6: return e === null && $l(t), null;
    case 13: return Sc(e, t, n);
    case 4: return ba(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = jn(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : We(r, i), ao(e, t, r, i, n);
    case 7: return ke(e, t, t.pendingProps, n), t.child;
    case 8: return ke(e, t, t.pendingProps.children, n), t.child;
    case 12: return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, a = i.value, G(ci, r._currentValue), r._currentValue = a, l !== null)
                if (Xe(l.value, a)) {
                    if (l.children === i.children && !Re.current) {
                        t = ft(e, t, n);
                        break e;
                    }
                }
                else
                    for (l = t.child, l !== null && (l.return = t); l !== null;) {
                        var s = l.dependencies;
                        if (s !== null) {
                            a = l.child;
                            for (var u = s.firstContext; u !== null;) {
                                if (u.context === r) {
                                    if (l.tag === 1) {
                                        u = ot(-1, n & -n), u.tag = 2;
                                        var d = l.updateQueue;
                                        if (d !== null) {
                                            d = d.shared;
                                            var h = d.pending;
                                            h === null ? u.next = u : (u.next = h.next, h.next = u), d.pending = u;
                                        }
                                    }
                                    l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Kl(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                u = u.next;
                            }
                        }
                        else if (l.tag === 10)
                            a = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (a = l.return, a === null)
                                throw Error(j(341));
                            a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Kl(a, n, t), a = l.sibling;
                        }
                        else
                            a = l.child;
                        if (a !== null)
                            a.return = l;
                        else
                            for (a = l; a !== null;) {
                                if (a === t) {
                                    a = null;
                                    break;
                                }
                                if (l = a.sibling, l !== null) {
                                    l.return = a.return, a = l;
                                    break;
                                }
                                a = a.return;
                            }
                        l = a;
                    }
            ke(e, t, i.children, n), t = t.child;
        }
        return t;
    case 9: return i = t.type, r = t.pendingProps.children, Sn(t, n), i = Be(i), r = r(i), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14: return r = t.type, i = We(r, t.pendingProps), i = We(r.type, i), so(e, t, r, i, n);
    case 15: return yc(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : We(r, i), Gr(e, t), t.tag = 1, _e(r) ? (e = !0, si(t)) : e = !1, Sn(t, n), pc(t, r, i), Gl(t, r, i, n), Zl(null, t, r, !0, e, n);
    case 19: return xc(e, t, n);
    case 22: return gc(e, t, n);
} throw Error(j(156, t.tag)); };
function Oc(e, t) { return cu(e, t); }
function xp(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function Fe(e, t, n, r) { return new xp(e, t, n, r); }
function Ja(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function wp(e) { if (typeof e == "function")
    return Ja(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === va)
        return 11;
    if (e === ka)
        return 14;
} return 2; }
function Ct(e, t) { var n = e.alternate; return n === null ? (n = Fe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function Zr(e, t, n, r, i, l) { var a = 2; if (r = e, typeof e == "function")
    Ja(e) && (a = 1);
else if (typeof e == "string")
    a = 5;
else
    e: switch (e) {
        case ln: return $t(n.children, i, l, t);
        case ga:
            a = 8, i |= 8;
            break;
        case gl: return e = Fe(12, n, t, i | 2), e.elementType = gl, e.lanes = l, e;
        case vl: return e = Fe(13, n, t, i), e.elementType = vl, e.lanes = l, e;
        case kl: return e = Fe(19, n, t, i), e.elementType = kl, e.lanes = l, e;
        case Go: return Pi(n, i, l, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case Ko:
                        a = 10;
                        break e;
                    case Wo:
                        a = 9;
                        break e;
                    case va:
                        a = 11;
                        break e;
                    case ka:
                        a = 14;
                        break e;
                    case ht:
                        a = 16, r = null;
                        break e;
                }
            throw Error(j(130, e == null ? e : typeof e, ""));
    } return t = Fe(a, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t; }
function $t(e, t, n, r) { return e = Fe(7, e, r, t), e.lanes = n, e; }
function Pi(e, t, n, r) { return e = Fe(22, e, r, t), e.elementType = Go, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function pl(e, t, n) { return e = Fe(6, e, null, t), e.lanes = n, e; }
function ml(e, t, n) { return t = Fe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function zp(e, t, n, r, i) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yi(0), this.expirationTimes = Yi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yi(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null; }
function es(e, t, n, r, i, l, a, s, u) { return e = new zp(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Fe(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oa(l), e; }
function Np(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: rn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function bc(e) { if (!e)
    return _t; e = e._reactInternals; e: {
    if (Jt(e) !== e || e.tag !== 1)
        throw Error(j(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (_e(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(j(171));
} if (e.tag === 1) {
    var n = e.type;
    if (_e(n))
        return bu(e, n, t);
} return t; }
function Vc(e, t, n, r, i, l, a, s, u) { return e = es(n, r, !0, e, i, l, a, s, u), e.context = bc(null), n = e.current, r = Se(), i = Tt(n), l = ot(r, i), l.callback = t ?? null, jt(n, l, i), e.current.lanes = i, vr(e, i, r), Ae(e, r), e; }
function Mi(e, t, n, r) { var i = t.current, l = Se(), a = Tt(i); return n = bc(n), t.context === null ? t.context = n : t.pendingContext = n, t = ot(l, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = jt(i, t, a), e !== null && (Ze(e, i, a, l), $r(e, i, a)), a; }
function Si(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function So(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function ts(e, t) { So(e, t), (e = e.alternate) && So(e, t); }
function jp() { return null; }
var Dc = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function ns(e) { this._internalRoot = e; }
Li.prototype.render = ns.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(j(409)); Mi(e, t, null, null); };
Li.prototype.unmount = ns.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zt(function () { Mi(null, e, null, null); }), t[ct] = null;
} };
function Li(e) { this._internalRoot = e; }
Li.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = gu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++)
        ;
    gt.splice(n, 0, e), n === 0 && ku(e);
} };
function rs(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function Ui(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function xo() { }
function Ep(e, t, n, r, i) { if (i) {
    if (typeof r == "function") {
        var l = r;
        r = function () { var d = Si(a); l.call(d); };
    }
    var a = Vc(t, r, e, 0, null, !1, !1, "", xo);
    return e._reactRootContainer = a, e[ct] = a.current, or(e.nodeType === 8 ? e.parentNode : e), Zt(), a;
} for (; i = e.lastChild;)
    e.removeChild(i); if (typeof r == "function") {
    var s = r;
    r = function () { var d = Si(u); s.call(d); };
} var u = es(e, 0, !1, null, null, !1, !1, "", xo); return e._reactRootContainer = u, e[ct] = u.current, or(e.nodeType === 8 ? e.parentNode : e), Zt(function () { Mi(t, u, n, r); }), u; }
function Oi(e, t, n, r, i) { var l = n._reactRootContainer; if (l) {
    var a = l;
    if (typeof i == "function") {
        var s = i;
        i = function () { var u = Si(a); s.call(u); };
    }
    Mi(t, a, e, i);
}
else
    a = Ep(n, t, e, i, r); return Si(a); }
hu = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Bn(t.pendingLanes);
            n !== 0 && (wa(t, n | 1), Ae(t, ie()), !(F & 6) && (Cn = ie() + 500, Pt()));
        }
        break;
    case 13: Zt(function () { var r = dt(e, 1); if (r !== null) {
        var i = Se();
        Ze(r, e, 1, i);
    } }), ts(e, 1);
} };
za = function (e) { if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
        var n = Se();
        Ze(t, e, 134217728, n);
    }
    ts(e, 134217728);
} };
yu = function (e) { if (e.tag === 13) {
    var t = Tt(e), n = dt(e, t);
    if (n !== null) {
        var r = Se();
        Ze(n, e, t, r);
    }
    ts(e, t);
} };
gu = function () { return B; };
vu = function (e, t) { var n = B; try {
    return B = e, t();
}
finally {
    B = n;
} };
Rl = function (e, t, n) { switch (t) {
    case "input":
        if (wl(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Ti(r);
                    if (!i)
                        throw Error(j(90));
                    Qo(r), wl(r, i);
                }
            }
        }
        break;
    case "textarea":
        Xo(e, n);
        break;
    case "select": t = n.value, t != null && yn(e, !!n.multiple, t, !1);
} };
iu = Za;
lu = Zt;
var Tp = { usingClientEntryPoint: !1, Events: [Sr, un, Ti, nu, ru, Za] }, Vn = { findFiberByHostInstance: Dt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cp = { bundleType: Vn.bundleType, version: Vn.version, rendererPackageName: Vn.rendererPackageName, rendererConfig: Vn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = ou(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: Vn.findFiberByHostInstance || jp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!br.isDisabled && br.supportsFiber)
        try {
            zi = br.inject(Cp), nt = br;
        }
        catch { }
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tp;
Ue.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!rs(t))
    throw Error(j(200)); return Np(e, t, null, n); };
Ue.createRoot = function (e, t) { if (!rs(e))
    throw Error(j(299)); var n = !1, r = "", i = Dc; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = es(e, 1, !1, null, null, n, !1, r, i), e[ct] = t.current, or(e.nodeType === 8 ? e.parentNode : e), new ns(t); };
Ue.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e))); return e = ou(t), e = e === null ? null : e.stateNode, e; };
Ue.flushSync = function (e) { return Zt(e); };
Ue.hydrate = function (e, t, n) { if (!Ui(t))
    throw Error(j(200)); return Oi(null, e, t, !0, n); };
Ue.hydrateRoot = function (e, t, n) { if (!rs(e))
    throw Error(j(405)); var r = n != null && n.hydratedSources || null, i = !1, l = "", a = Dc; if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Vc(t, null, e, 1, n ?? null, i, !1, l, a), e[ct] = t.current, or(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i); return new Li(t); };
Ue.render = function (e, t, n) { if (!Ui(t))
    throw Error(j(200)); return Oi(null, e, t, !1, n); };
Ue.unmountComponentAtNode = function (e) { if (!Ui(e))
    throw Error(j(40)); return e._reactRootContainer ? (Zt(function () { Oi(null, null, e, !1, function () { e._reactRootContainer = null, e[ct] = null; }); }), !0) : !1; };
Ue.unstable_batchedUpdates = Za;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Ui(n))
    throw Error(j(200)); if (e == null || e._reactInternals === void 0)
    throw Error(j(38)); return Oi(e, t, n, !1, r); };
Ue.version = "18.3.1-next-f1338f8080-20240426";
function Fc() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc);
    }
    catch (e) {
        console.error(e);
    } }
Fc(), Fo.exports = Ue;
var Rp = Fo.exports, wo = Rp;
hl.createRoot = wo.createRoot, hl.hydrateRoot = wo.hydrateRoot; /**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _p = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }; /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ap = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), W = (e, t) => { const n = P.forwardRef(({ color: r = "currentColor", size: i = 24, strokeWidth: l = 2, absoluteStrokeWidth: a, className: s = "", children: u, ...d }, h) => P.createElement("svg", { ref: h, ..._p, width: i, height: i, stroke: r, strokeWidth: a ? Number(l) * 24 / Number(i) : l, className: ["lucide", `lucide-${Ap(e)}`, s].join(" "), ...d }, [...t.map(([m, y]) => P.createElement(m, y)), ...Array.isArray(u) ? u : [u]])); return n.displayName = `${e}`, n; }; /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ip = W("AlertCircle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pp = W("Castle", [["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z", key: "109fe4" }], ["path", { d: "M18 11V4H6v7", key: "mon5oj" }], ["path", { d: "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4", key: "jdggr9" }], ["path", { d: "M22 11V9", key: "3zbp94" }], ["path", { d: "M2 11V9", key: "1x5rnq" }], ["path", { d: "M6 4V2", key: "1rsq15" }], ["path", { d: "M18 4V2", key: "1jsdo1" }], ["path", { d: "M10 4V2", key: "75d9ly" }], ["path", { d: "M14 4V2", key: "8nj3z6" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Mp = W("CheckCircle2", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bi = W("Clock", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xi = W("Download", [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }], ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const is = W("Film", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M7 3v18", key: "bbkbws" }], ["path", { d: "M3 7.5h4", key: "zfgn84" }], ["path", { d: "M3 12h18", key: "1i2n21" }], ["path", { d: "M3 16.5h4", key: "1230mu" }], ["path", { d: "M17 3v18", key: "in4fa5" }], ["path", { d: "M17 7.5h4", key: "myr1c1" }], ["path", { d: "M17 16.5h4", key: "go4c1d" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lp = W("Image", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Up = W("Key", [["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }], ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }], ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hc = W("Layers", [["path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z", key: "8b97xw" }], ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }], ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oa = W("Mic", [["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }], ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bc = W("Monitor", [["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }], ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Op = W("Music", [["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }], ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }], ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bp = W("Pause", [["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }], ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vi = W("Play", [["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ua = W("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const zo = W("RefreshCw", [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vp = W("RotateCcw", [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Dp = W("Sliders", [["line", { x1: "4", x2: "4", y1: "21", y2: "14", key: "1p332r" }], ["line", { x1: "4", x2: "4", y1: "10", y2: "3", key: "gb41h5" }], ["line", { x1: "12", x2: "12", y1: "21", y2: "12", key: "hf2csr" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "3", key: "1kfi7u" }], ["line", { x1: "20", x2: "20", y1: "21", y2: "16", key: "1lhrwl" }], ["line", { x1: "20", x2: "20", y1: "12", y2: "3", key: "16vvfq" }], ["line", { x1: "2", x2: "6", y1: "14", y2: "14", key: "1uebub" }], ["line", { x1: "10", x2: "14", y1: "8", y2: "8", key: "1yglbp" }], ["line", { x1: "18", x2: "22", y1: "16", y2: "16", key: "1jxqpz" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $c = W("Smartphone", [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }], ["path", { d: "M12 18h.01", key: "mhygvu" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Xt = W("Sparkles", [["path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z", key: "17u4zn" }], ["path", { d: "M5 3v4", key: "bklmnn" }], ["path", { d: "M19 17v4", key: "iiml17" }], ["path", { d: "M3 5h4", key: "nem4j1" }], ["path", { d: "M17 19h4", key: "lbex7p" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fp = W("Swords", [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }], ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }], ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }], ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }], ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Kc = W("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hp = W("Type", [["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }], ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wc = W("Upload", [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }], ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ls = W("Video", [["path", { d: "m22 8-6 4 6 4V8Z", key: "50v9me" }], ["rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2", key: "1rqjg6" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bp = W("Volume2", [["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }], ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }], ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Kt = W("Wand2", [["path", { d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z", key: "1bcowg" }], ["path", { d: "m14 7 3 3", key: "1r5n42" }], ["path", { d: "M5 6v4", key: "ilb8ba" }], ["path", { d: "M19 14v4", key: "blhpug" }], ["path", { d: "M10 2v2", key: "7u0qdc" }], ["path", { d: "M7 8H3", key: "zfb6yr" }], ["path", { d: "M21 16h-4", key: "1cnmox" }], ["path", { d: "M11 3H9", key: "1obp7u" }]]); /**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $p = W("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]);
function Kp({ appMode: e, setAppMode: t, aspectRatio: n, setAspectRatio: r, onExport: i, isExporting: l, exportProgress: a, scenesCount: s, onLoadMalazgirtProject: u, onLoadFatihProject: d, onLoadSaladinProject: h, activeProject: m, onOpenPromptStudio: y, onSaveProject: hS, onOpenProject: hO, onFitDurations: hF, isFitting: hFi, onOpenTools: hT }) { return o.jsxs("header", { className: "studio-header", children: [o.jsxs("div", { className: "brand-section", children: [o.jsx("div", { className: "brand-icon", children: o.jsx(is, { size: 22 }) }), o.jsxs("div", { children: [o.jsx("h1", { className: "brand-title", children: "AI Video Studio" }), o.jsx("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 2 }, children: o.jsx("span", { className: "brand-badge", children: "PC · v1.8" }) })] })] }), o.jsxs("div", { className: "header-center", children: [o.jsxs("button", { type: "button", className: "btn btn-sm", style: { background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)", color: "white", fontWeight: 700, boxShadow: "0 0 16px rgba(168, 85, 247, 0.45)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "7px 12px" }, onClick: y, title: "Herhangi bir prompt veya senaryo yapıştırarak 4K görselleri otomatik üret", children: [o.jsx(Kt, { size: 14, color: "#fef08a" }), o.jsx("span", { className: "btn-label", children: "Senaryo" })] }), o.jsxs("div", { className: "format-switcher", style: { background: "rgba(255, 255, 255, 0.05)" }, children: [o.jsxs("button", { className: `format-btn ${e === "multiScene" ? "active" : ""}`, onClick: () => t("multiScene"), type: "button", children: [o.jsx(Hc, { size: 15, color: "var(--accent-cyan)" }), "Stüdyo"] }), o.jsxs("button", { className: `format-btn ${e === "promptToVideo" ? "active" : ""}`, onClick: () => t("promptToVideo"), type: "button", children: [o.jsx(Kt, { size: 15, color: "var(--primary-light)" }), "Tek Prompt"] }), o.jsx("button", { className: `format-btn ${e === "longVideo" ? "active" : ""}`, onClick: () => t("longVideo"), type: "button", title: "5-10 dakikalık bölümlü belgesel videolar", children: "🎞️ Uzun Video" }), o.jsx("button", { className: `format-btn ${e === "shortVideo" ? "active" : ""}`, onClick: () => t("shortVideo"), type: "button", title: "Planlarındaki kısa videolar: Shorts / TikTok / Reels (9:16, ≤60 sn)", children: "📱 Kısa Video" })] }), o.jsxs("select", { className: "form-select header-preset-select", title: "Hazır tarih projelerini yükle", value: ["malazgirt", "fatih", "saladin"].includes(m) ? m : "", onChange: ev => { const pv = ev.target.value; pv === "malazgirt" ? u() : pv === "fatih" ? d() : pv === "saladin" && h(); }, children: [o.jsx("option", { value: "", children: "📚 Hazır Projeler…" }), o.jsx("option", { value: "malazgirt", children: "⚔️ 1071 Malazgirt Zaferi" }), o.jsx("option", { value: "fatih", children: "👑 1453 İstanbul'un Fethi" }), o.jsx("option", { value: "saladin", children: "🏰 1187 Kudüs – Selahaddin" })] }), e === "multiScene" && o.jsxs("div", { className: "format-switcher", title: "Video Boyut Formatı", children: [o.jsxs("button", { className: `format-btn ${n === "portrait" ? "active" : ""}`, onClick: () => r("portrait"), type: "button", title: "9:16 Dikey", children: [o.jsx($c, { size: 15 }), "9:16"] }), o.jsxs("button", { className: `format-btn ${n === "landscape" ? "active" : ""}`, onClick: () => r("landscape"), type: "button", title: "16:9 Yatay", children: [o.jsx(Bc, { size: 15 }), "16:9"] })] })] }), o.jsx("div", { className: "header-actions", children: e === "multiScene" && o.jsxs(o.Fragment, { children: [o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: hT, title: "AI senaryo, kanal markası, geçişler, müzik, kapak görseli ve YouTube metni", style: { borderColor: "rgba(168,85,247,0.6)" }, children: ["🧰", o.jsx("span", { className: "btn-label", children: " Araçlar" })] }), o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: hF, disabled: hFi || l || s === 0, title: "Her sahnenin süresini seslendirmenin uzunluğuna göre otomatik ayarla", children: hFi ? ["⏳", o.jsx("span", { className: "btn-label", children: " Ölçülüyor…" })] : ["⏱️", o.jsx("span", { className: "btn-label", children: " Sese Uydur" })] }), o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: hO, disabled: l, title: "Kayıtlı projeyi aç (Ctrl+O)", children: ["📂", o.jsx("span", { className: "btn-label", children: " Aç" })] }), o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: hS, disabled: l || s === 0, title: "Projeyi dosyaya kaydet (Ctrl+S)", children: ["💾", o.jsx("span", { className: "btn-label", children: " Kaydet" })] }), o.jsx("button", { className: "btn btn-primary", onClick: i, disabled: l || s === 0, title: "Tüm 120 Saniyelik Videoyu Bilgisayara İndir", children: l ? o.jsxs(o.Fragment, { children: [o.jsx(Xt, { size: 18, className: "animate-spin" }), "Render Ediliyor (", a, "%)"] }) : o.jsxs(o.Fragment, { children: [o.jsx(xi, { size: 18 }), "Dışa Aktar (", Xfmt, ")"] }) })] }) })] }); }
const No = ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1080&q=80", "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1080&q=80", "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1080&q=80", "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1080&q=80", "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1080&q=80", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1080&q=80", "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1080&q=80"];
function Gc(e, t = "cinematic") { const n = e.replace(/[^\w\sğüşıöçĞÜŞİÖÇ]/gi, " ").trim(), r = { cinematic: "cinematic lighting, ultra-detailed, 8k, photorealistic, atmospheric mist, anamorphic lens, 35mm photography", anime: "makoto shinkai style, vibrant colors, aesthetic anime scenery, studio ghibli lighting, masterpiece", cyberpunk: "cyberpunk neon city, futuristic hologram, rain reflection, volumetric smoke, octane render", nature: "national geographic style, epic wide shot, dramatic natural lighting, 4k landscape, majestic golden hour", dark_fantasy: "dark fantasy aesthetic, dramatic shadows, moody concept art, trending on artstation, mystical particles" }, i = r[t] || r.cinematic; return `${n}, ${i}, no text, masterpiece`; }
function Wp(e, t = "portrait", n = "cinematic", r = Math.floor(Math.random() * 1e5)) { const i = e.toLowerCase(); if (i.includes("selahaddin") || i.includes("saladin") || i.includes("büyük hedef"))
    return i.includes("çadır") || i.includes("zafer") || i.includes("guy") ? "/assets/saladin/scene_6.jpg" : i.includes("kapı") || i.includes("2 ekim") || i.includes("giriş") ? "/assets/saladin/scene_11.jpg" : i.includes("fetih") || i.includes("gün batımı") || i.includes("sunset") || i.includes("kubbet") ? "/assets/saladin/scene_12.jpg" : "/assets/saladin/scene_1.jpg"; if (i.includes("ordu") || i.includes("army") || i.includes("eyyubi"))
    return "/assets/saladin/scene_2.jpg"; if (i.includes("haçlı") || i.includes("crusader") || i.includes("guy") || i.includes("şövalye"))
    return "/assets/saladin/scene_3.jpg"; if (i.includes("hıttin") || i.includes("hattin") || i.includes("okçu"))
    return "/assets/saladin/scene_4.jpg"; if (i.includes("süvari") || i.includes("cavalry") || i.includes("hücum"))
    return "/assets/saladin/scene_5.jpg"; if (i.includes("kudüs") || i.includes("jerusalem") || i.includes("sur"))
    return i.includes("kuşatma") || i.includes("mancınık") ? "/assets/saladin/scene_9.jpg" : i.includes("balian") || i.includes("savunma") ? "/assets/saladin/scene_8.jpg" : "/assets/saladin/scene_7.jpg"; if (i.includes("balian") || i.includes("teslim") || i.includes("görüşme"))
    return "/assets/saladin/scene_10.jpg"; const l = Gc(e, n); return `https://image.pollinations.ai/prompt/${encodeURIComponent(l)}?width=${t === "portrait" ? 720 : 1280}&height=${t === "portrait" ? 1280 : 720}&seed=${r}&nologo=true&model=flux`; }
function Di(e) { return new Promise(t => { if (!e)
    return t({ img: null, success: !1 }); const n = new Image; !e.startsWith("/") && !e.startsWith("blob:") && (n.crossOrigin = "anonymous"), n.onload = () => t({ img: n, success: !0 }), n.onerror = () => { if (e.startsWith("/"))
    t({ img: null, success: !1 });
else {
    const r = No[Math.floor(Math.random() * No.length)], i = new Image;
    i.crossOrigin = "anonymous", i.onload = () => t({ img: i, success: !0, isFallback: !0 }), i.onerror = () => t({ img: null, success: !1 }), i.src = r;
} }, n.src = e; }); }
class Gp {
    constructor() { this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d", { alpha: !1 }); }
    async generateVideoFromPrompt(t, n = {}) { const { duration: r = 6, aspectRatio: i = "landscape", onProgress: l = () => { } } = n, a = i === "portrait" ? 1080 : 1920, s = i === "portrait" ? 1920 : 1080; this.canvas.width = a, this.canvas.height = s, l("Yapay zeka sahneyi tasarlıyor...", 15); const u = Gc(t, "cinematic"), d = Math.floor(Math.random() * 999999), h = `https://image.pollinations.ai/prompt/${encodeURIComponent(u)}?width=${a}&height=${s}&seed=${d}&nologo=true&model=flux`; l("Yapay zeka sahne görselini çiziyor...", 35); const y = (await Di(h)).img; l("Sinematik kamera ve hareket katmanları oluşturuluyor...", 60); const S = this.canvas.captureStream(60), k = ["video/mp4;codecs=avc1.640028", "video/mp4;codecs=avc1", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm", "video/mp4"].find(c => MediaRecorder.isTypeSupported(c)) || "video/webm", v = new MediaRecorder(S, { mimeType: k, videoBitsPerSecond: 12e6 }), p = []; return v.ondataavailable = c => { c.data.size > 0 && p.push(c.data); }, new Promise((c, f) => { v.onstop = async () => { const M = await fixWebmDuration(new Blob(p, { type: k }), r * 1e3), D = URL.createObjectURL(M), H = k.includes("mp4") ? "mp4" : "webm"; l("Video tamamlandı!", 100), c({ url: D, blob: M, filename: `ai_video_${Date.now()}.${H}` }); }, v.onerror = M => f(M), v.start(100); const x = r * 60; let N = 0; const E = t.toLowerCase(), T = E.includes("yağmur") || E.includes("rain"), _ = E.includes("ateş") || E.includes("fire") || E.includes("kıvılcım"), A = Array.from({ length: 65 }, () => ({ x: Math.random() * a, y: Math.random() * s, speed: 1 + Math.random() * 3, size: 1 + Math.random() * 2.5, alpha: .2 + Math.random() * .6 })), I = this.ctx, te = () => { if (N >= x) {
        v.stop();
        return;
    } const M = N / x; if (I.save(), I.fillStyle = "#07080c", I.fillRect(0, 0, a, s), y && y.complete) {
        const z = 1 + Math.sin(M * Math.PI * .5) * .14, O = Math.sin(M * Math.PI) * (a * .025), b = -M * (s * .02);
        I.translate(a / 2 + O, s / 2 + b), I.scale(z, z);
        const $ = y.width / y.height, X = a / s;
        let ze, Ne;
        $ > X ? (Ne = s, ze = s * $) : (ze = a, Ne = a / $), I.drawImage(y, -ze / 2, -Ne / 2, ze, Ne);
    } I.restore(), I.save(); const D = (M * 1.4 - .2) * a, H = I.createRadialGradient(D, s * .35, 10, D, s * .35, a * .45); H.addColorStop(0, "rgba(129, 140, 248, 0.18)"), H.addColorStop(.4, "rgba(6, 182, 212, 0.06)"), H.addColorStop(1, "rgba(0, 0, 0, 0)"), I.fillStyle = H, I.fillRect(0, 0, a, s), I.restore(), I.save(), A.forEach(z => { T ? (I.strokeStyle = `rgba(186, 230, 253, ${z.alpha * .7})`, I.lineWidth = 1.5, I.beginPath(), I.moveTo(z.x, z.y), I.lineTo(z.x - 3, z.y + 18), I.stroke(), z.y += z.speed * 8, z.x -= 1.2) : (I.fillStyle = _ ? `rgba(249, 115, 22, ${z.alpha})` : `rgba(255, 255, 255, ${z.alpha * .5})`, I.beginPath(), I.arc(z.x, z.y, z.size, 0, Math.PI * 2), I.fill(), z.y -= z.speed * .8, z.x += Math.sin(N * .05 + z.y) * .5), z.y > s && (z.y = 0), z.y < 0 && (z.y = s), z.x < 0 && (z.x = a), z.x > a && (z.x = 0); }), I.restore(), I.save(); const ce = I.createRadialGradient(a / 2, s / 2, a * .35, a / 2, s / 2, a * .75); ce.addColorStop(0, "rgba(0,0,0,0)"), ce.addColorStop(1, "rgba(0,0,0,0.55)"), I.fillStyle = ce, I.fillRect(0, 0, a, s), I.restore(), N++; const Mt = 60 + Math.floor(N / x * 38); l(`Video kareleri render ediliyor (${N}/${x})...`, Mt), requestAnimationFrame(te); }; te(); }); }
}
async function fixWebmDuration(t, n) { try {
    if (!t || !/webm/i.test(t.type) || !(n > 0))
        return t;
    const r = new Uint8Array(await t.slice(0, 65536).arrayBuffer()), i = (c, f) => { const g = r[c]; let x = 1, N = 128; for (; x <= 8 && !(g & N); x++, N >>= 1)
        ; let E = f ? g & N - 1 : g; for (let T = 1; T < x; T++)
        E = E * 256 + r[c + T]; return { len: x, value: E, unknown: f && E === Math.pow(2, 7 * x) - 1 }; };
    let l = 0;
    const a = i(l, !1);
    if (a.value !== 0x1A45DFA3)
        return t;
    const s = i(l + a.len, !0);
    l += a.len + s.len + s.value;
    const u = i(l, !1);
    if (u.value !== 0x18538067)
        return t;
    l += u.len + i(l + u.len, !0).len;
    for (; l < r.length - 12;) {
        const c = i(l, !1), f = i(l + c.len, !0), g = l + c.len + f.len;
        if (c.value === 0x1549A966) {
            let x = 1e6, N = g;
            for (; N < g + f.value;) {
                const H = i(N, !1), M = i(N + H.len, !0), D = N + H.len + M.len;
                if (H.value === 0x4489)
                    return t;
                if (H.value === 0x2AD7B1) {
                    x = 0;
                    for (let ce = 0; ce < M.value; ce++)
                        x = x * 256 + r[D + ce];
                }
                N = D + M.value;
            }
            const E = new Uint8Array(11);
            E[0] = 0x44, E[1] = 0x89, E[2] = 0x88, new DataView(E.buffer).setFloat64(3, n * 1e6 / x);
            const T = r.slice(g, g + f.value), _ = f.value + 11, A = new Uint8Array(8);
            A[0] = 1;
            for (let H = 7, M = _; H >= 1; H--, M = Math.floor(M / 256))
                A[H] = M % 256;
            return new Blob([r.slice(0, l + c.len), A, T, E, t.slice(g + f.value)], { type: t.type });
        }
        if (f.unknown)
            break;
        l = g + f.value;
    }
}
catch (r) {
    console.warn("WebM süre düzeltmesi atlandı:", r);
} return t; }
const Yp = new Gp, jo = [{ id: "wan-2.1", name: "Wan 2.1 (Önerilen - Sinematik & Fotogerçekçi)", provider: "replicate", modelString: "wavespeedai/wan-2.1-t2v-480p", description: "Yüksek kaliteli hareket, sinematik ışıklandırma ve fizik kurallarına uygun video üretimi." }, { id: "kling-v1", name: "Kling Video AI (Ultra Realizm)", provider: "replicate", modelString: "kling-ai/kling-v1", description: "Gerçekçi insan ve çevre hareketleri, sinematik kamera kontrolü." }, { id: "hunyuan-video", name: "Tencent HunyuanVideo (Açık Kaynak Lideri)", provider: "replicate", modelString: "tencent/hunyuan-video", description: "Büyük ölçekli açık kaynak video modeli, detaylı sahneler." }, { id: "fal-wan", name: "Fal.ai Wan 2.1 Video", provider: "fal", endpoint: "fal-ai/wan-2.1/text-to-video", description: "Fal.ai yüksek hızlı video sunucuları üzerinden üretim." }];
class Qp {
    async generateWithReplicate(t, n, r, i) { if (!t)
        throw new Error("Lütfen Replicate API anahtarınızı girin."); i && i("Yapay zeka modeline istek gönderiliyor...", 10); const l = await fetch("/api/ext?u=" + encodeURIComponent("https://api.replicate.com/v1/models/" + r + "/predictions"), { method: "POST", headers: { Authorization: `Bearer ${t.trim()}`, "Content-Type": "application/json", Prefer: "wait" }, body: JSON.stringify({ input: { prompt: n } }) }); if (!l.ok) {
        const d = await l.json().catch(() => ({}));
        throw new Error(d.detail || `Replicate API Hatası: ${l.statusText}`);
    } let a = await l.json(), s = 20; for (; a.status !== "succeeded" && a.status !== "failed" && a.status !== "canceled";) {
        await new Promise(h => setTimeout(h, 2500)), s = Math.min(95, s + 5), i && i(`Video render ediliyor... (${a.status})`, s);
        const d = await fetch("/api/ext?u=" + encodeURIComponent(a.urls.get), { headers: { Authorization: `Bearer ${t.trim()}` } });
        d.ok && (a = await d.json());
    } if (a.status === "failed")
        throw new Error(`Video üretimi başarısız oldu: ${a.error || "Bilinmeyen hata"}`); const u = Array.isArray(a.output) ? a.output[0] : a.output; if (!u)
        throw new Error("Model video çıktısı üretemedi."); return i && i("Video başarıyla oluşturuldu!", 100), u; }
    async generateWithFal(t, n, r, i) { var u, d; if (!t)
        throw new Error("Lütfen Fal.ai API anahtarınızı girin."); i && i("Fal.ai video motoru başlatılıyor...", 15); const l = await fetch("/api/ext?u=" + encodeURIComponent(`https://fal.run/${r}`), { method: "POST", headers: { Authorization: `Key ${t.trim()}`, "Content-Type": "application/json" }, body: JSON.stringify({ prompt: n }) }); if (!l.ok) {
        const h = await l.json().catch(() => ({}));
        throw new Error(h.detail || `Fal.ai Hatası: ${l.statusText}`);
    } const a = await l.json(), s = ((u = a.video) == null ? void 0 : u.url) || ((d = a.output) == null ? void 0 : d.url); if (!s)
        throw new Error("Fal.ai geçerli bir video URL çıktısı döndürmedi."); return i && i("Tamamlandı!", 100), s; }
}
const Eo = new Qp, To = ["Yağmurlu gecede neon ışıklı Tokyo caddesinde drift atan siyah spor araba, sinematik 8k, slow motion", "Sisli dağ zirvelerinin üzerinde uçan kartal, epik altın gün doğumu, 4k sinematik drone çekimi", "Mavi ve mor hologramlarla çevrili siberpunk yapay zeka robotu, fütüristik laboratuvar, fotogerçekçi", "Alevler ve kıvılcımlar arasında duran kararlı savaşçı, yağmur damlaları, epik sinematik ışıklandırma"];
function Zp({ onSwitchToMultiScene: e }) { const [t, n] = P.useState(To[0]), [r, i] = P.useState("landscape"), [l, a] = P.useState(6), [s, u] = P.useState("free"), [d, h] = P.useState(() => localStorage.getItem("replicate_api_key") || ""), [m, y] = P.useState("wan-2.1"), [S, w] = P.useState(!1), [k, v] = P.useState(""), [p, c] = P.useState(0), [f, g] = P.useState(""), [x, N] = P.useState(null), E = async () => { if (!t.trim()) {
    g("Lütfen video üretmek için bir prompt yazın.");
    return;
} g(""), w(!0), c(5), v("Yapay zeka motoru başlatılıyor..."); try {
    if (s === "free") {
        if (SX.api.quickVideo) {
            await SX.api.quickVideo(t, { aspect: r, shot: l, onProgress: (_, A) => { v(_), c(A); } });
            return;
        }
        const T = await Yp.generateVideoFromPrompt(t, { duration: l, aspectRatio: r, onProgress: (_, A) => { v(_), c(A); } });
        N(T);
    }
    else {
        if (!d.trim())
            throw new Error('Bulut modeli için lütfen API anahtarınızı girin veya "Ücretsiz Motor"u seçin.');
        localStorage.setItem("replicate_api_key", d);
        const T = jo.find(A => A.id === m) || jo[0];
        let _ = "";
        T.provider === "replicate" ? _ = await Eo.generateWithReplicate(d, t, T.modelString, (A, I) => { v(A), c(I); }) : _ = await Eo.generateWithFal(d, t, T.endpoint, (A, I) => { v(A), c(I); }), v("Video bilgisayara indiriliyor...", 97), N({ url: await (async () => { try {
            const A = await fetch("/api/ext?u=" + encodeURIComponent(_));
            return A.ok ? URL.createObjectURL(await A.blob()) : _;
        }
        catch {
            return _;
        } })(), filename: `ai_cloud_video_${Date.now()}.mp4` });
    }
}
catch (T) {
    console.error(T), g(T.message || "Video üretilirken bir hata oluştu.");
}
finally {
    w(!1);
} }; return o.jsxs("div", { style: { display: "grid", gridTemplateColumns: "460px 1fr", gap: 20, height: "calc(100vh - 64px)", padding: 20, overflow: "hidden" }, children: [o.jsxs("div", { className: "studio-panel", style: { height: "100%", overflowY: "auto" }, children: [o.jsxs("div", { className: "panel-header", children: [o.jsxs("span", { className: "panel-title", children: [o.jsx(Kt, { size: 18, color: "var(--primary-light)" }), "Prompttan Video Üretici"] }), o.jsxs("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: e, title: "Çok Sahneli Editöre Geç", children: [o.jsx(Hc, { size: 14 }), "Dublaj / Sahne Stüdyosu"] })] }), o.jsxs("div", { className: "panel-content", style: { gap: 16 }, children: [o.jsxs("div", { style: { background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [o.jsxs("div", { children: [o.jsx("div", { style: { fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-green)" }, children: "✓ %100 Ücretsiz & Anahtarsız Video Motoru Aktif" }), o.jsx("div", { style: { fontSize: "0.72rem", color: "var(--text-muted)", marginTop: 2 }, children: "Hiçbir API anahtarı veya kayıt gerektirmeden doğrudan üretir." })] }), o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", style: { fontSize: "0.7rem", padding: "4px 8px" }, onClick: () => u(s === "free" ? "cloud" : "free"), children: s === "free" ? "Bulut API Seç" : "Ücretsiz Motora Dön" })] }), o.jsxs("div", { className: "form-group", children: [o.jsxs("label", { className: "form-label", children: [o.jsx("span", { children: "Hazır İlham Promptları" }), o.jsx(Xt, { size: 14, color: "var(--accent-gold)" })] }), o.jsx("div", { className: "template-chips", children: To.map((T, _) => o.jsxs("button", { type: "button", className: "template-chip", onClick: () => n(T), children: [T.substring(0, 36), "..."] }, _)) })] }), o.jsxs("div", { className: "form-group", children: [o.jsx("label", { className: "form-label", htmlFor: "main-prompt-input", children: o.jsx("span", { style: { color: "white", fontWeight: 700 }, children: "Video Promptunuz (Yapay Zekaya Ne Çizdireceksiniz?)" }) }), o.jsx("textarea", { id: "main-prompt-input", className: "form-textarea", style: { minHeight: "110px", fontSize: "0.92rem" }, placeholder: "Görmek istediğiniz videoyu buraya Türkçe veya İngilizce yazın...", value: t, onChange: T => n(T.target.value) })] }), o.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }, children: [o.jsxs("div", { className: "form-group", children: [o.jsx("label", { className: "form-label", children: o.jsx("span", { children: "Video Formatı" }) }), o.jsxs("div", { style: { display: "flex", gap: 6 }, children: [o.jsxs("button", { type: "button", className: `btn btn-sm ${r === "landscape" ? "btn-primary" : "btn-secondary"}`, style: { flex: 1, padding: "7px 4px", fontSize: "0.75rem" }, onClick: () => i("landscape"), children: [o.jsx(Bc, { size: 13 }), "16:9 Yatay"] }), o.jsxs("button", { type: "button", className: `btn btn-sm ${r === "portrait" ? "btn-primary" : "btn-secondary"}`, style: { flex: 1, padding: "7px 4px", fontSize: "0.75rem" }, onClick: () => i("portrait"), children: [o.jsx($c, { size: 13 }), "9:16 Dikey"] })] })] }), o.jsxs("div", { className: "form-group", children: [o.jsx("label", { className: "form-label", children: o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 4 }, children: [o.jsx(bi, { size: 13 }), "Video Süresi"] }) }), o.jsxs("select", { className: "form-select", value: l, onChange: T => a(parseInt(T.target.value, 10)), children: [o.jsx("option", { value: 4, children: "4 Saniye" }), o.jsx("option", { value: 6, children: "6 Saniye (Önerilen)" }), o.jsx("option", { value: 8, children: "8 Saniye" }), o.jsx("option", { value: 10, children: "10 Saniye" })] })] })] }), s === "cloud" && o.jsxs("div", { className: "form-group", style: { background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.25)", borderRadius: 12, padding: 12 }, children: [o.jsx("label", { className: "form-label", style: { color: "var(--primary-light)" }, children: o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [o.jsx(Up, { size: 14 }), "Replicate / Fal API Anahtarı"] }) }), o.jsx("input", { type: "password", className: "form-input", placeholder: "r8_...", value: d, onChange: T => h(T.target.value) })] }), f && o.jsxs("div", { style: { background: "rgba(239, 68, 68, 0.15)", border: "1px solid var(--danger)", borderRadius: 10, padding: "10px 12px", color: "#fca5a5", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: 8 }, children: [o.jsx(Ip, { size: 16 }), o.jsx("span", { children: f })] }), o.jsx("button", { type: "button", className: "btn btn-primary", style: { width: "100%", padding: "14px", fontSize: "0.96rem", marginTop: 4 }, onClick: E, disabled: S, children: S ? o.jsxs(o.Fragment, { children: [o.jsx(Kt, { size: 18, className: "animate-spin" }), "Video Üretiliyor (", p, "%)"] }) : o.jsxs(o.Fragment, { children: [o.jsx(Kt, { size: 18 }), "Yazdığım Prompttan Video Üret"] }) }), S && o.jsxs("div", { style: { marginTop: 8 }, children: [o.jsx("div", { className: "progress-bar-container", children: o.jsx("div", { className: "progress-bar-fill", style: { width: `${p}%` } }) }), o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: "0.75rem", color: "var(--text-muted)" }, children: [o.jsx("span", { children: k }), o.jsxs("span", { children: ["%", p] })] })] })] })] }), o.jsxs("div", { className: "studio-panel", style: { height: "100%", display: "flex", flexDirection: "column" }, children: [o.jsxs("div", { className: "panel-header", children: [o.jsxs("span", { className: "panel-title", children: [o.jsx(Vi, { size: 18, color: "var(--accent-green)" }), "Üretilen Video Sonucu"] }), x && o.jsxs("a", { href: x.url, download: x.filename, className: "btn btn-primary btn-sm", children: [o.jsx(xi, { size: 14 }), "Videoyu İndir (.mp4)"] })] }), o.jsx("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle at center, rgba(30, 35, 55, 0.4) 0%, rgba(10, 12, 18, 0.8) 100%)", padding: 24, overflow: "hidden" }, children: x ? o.jsxs("div", { style: { width: "100%", maxHeight: "85%", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }, children: [o.jsx("video", { src: x.url, controls: !0, autoPlay: !0, loop: !0, style: { maxWidth: "100%", maxHeight: "62vh", borderRadius: 16, boxShadow: "0 20px 50px rgba(0,0,0,0.8)", border: "2px solid rgba(255,255,255,0.1)" } }), o.jsxs("a", { href: x.url, download: x.filename, className: "btn btn-primary", style: { padding: "12px 24px", fontSize: "0.95rem" }, children: [o.jsx(xi, { size: 18 }), "Videoyu Bilgisayara İndir (MP4)"] })] }) : o.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 16, color: "var(--text-muted)", textAlign: "center", maxWidth: 420 }, children: [o.jsx("div", { style: { width: 80, height: 80, borderRadius: "50%", background: "rgba(99, 102, 241, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)" }, children: o.jsx(ls, { size: 40 }) }), o.jsxs("div", { children: [o.jsx("h3", { style: { fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: 6 }, children: "Yazdığınız Prompttan Video Üretin" }), o.jsxs("p", { style: { fontSize: "0.88rem", lineHeight: 1.5 }, children: ["Soldaki kutuya istediğiniz video sahnesini yazın ve ", o.jsx("strong", { children: '"Yazdığım Prompttan Video Üret"' }), " butonuna basın. Hiçbir anahtar gerekmeden videonuz saniyeler içinde render edilir."] })] })] }) })] })] }); }
const Xp = [{ title: "⚔️ 1071 Malazgirt Zaferi (12 Sahne)", text: `SCENE 1 (00:00–00:10) — Alparslan ordusunu hazırlıyor
VISUAL: 1071 Anatolia, Sultan Alp Arslan reviewing Seljuk cavalry in an open plain at sunrise, cinematic tracking shot.
TURKISH NARRATION: "Yıl 1071. Sultan Alparslan, Bizans İmparatorluğu'nun büyük ordusuyla karşılaşmaya hazırlanıyordu."

SCENE 2 (00:10–00:20) — Bizans ordusu yürüyüşü
VISUAL: Emperor Romanos IV Diogenes leading Byzantine infantry and cavalry across the Anatolian landscape, wide aerial shot.
TURKISH NARRATION: "Bizans İmparatoru Romen Diyojen, Anadolu'daki Selçuklu ilerleyişini durdurmak için sefere çıkmıştı."

SCENE 3 (00:20–00:30) — Savaş Meclisi
VISUAL: Seljuk commanders studying the terrain inside a medieval command tent, dramatic torchlight.
TURKISH NARRATION: "Alparslan, ordusunu hazırladı. Savaşın kaderini yalnızca asker sayısı değil, taktikler belirleyecekti."

SCENE 4 (00:30–00:40) — Ordular Karşı Karşıya
VISUAL: Two medieval armies facing each other near Manzikert, dust blowing across the field, panoramic camera.
TURKISH NARRATION: "26 Ağustos 1071'de iki ordu Malazgirt yakınlarında karşı karşıya geldi."

SCENE 5 (00:40–00:50) — Atlı Okçuların Hücumu
VISUAL: Seljuk mounted archers riding swiftly across the plain and releasing arrows, dynamic camera.
TURKISH NARRATION: "Selçuklu atlı okçuları, hareketli saldırılarla Bizans birliklerini yıpratmaya başladı."

SCENE 6 (00:50–01:00) — Sahte Geri Çekilme (Turan Taktiği)
VISUAL: Seljuk cavalry conducting a coordinated feigned retreat while Byzantine troops pursue, sweeping aerial camera.
TURKISH NARRATION: "Selçuklu süvarileri geri çekiliyormuş gibi yaparak Bizans ordusunu peşlerinden sürükledi."

SCENE 7 (01:00–01:10) — Hilal Kuşatması
VISUAL: Seljuk horsemen closing around Byzantine formations, battlefield dust, intense cinematic action.
TURKISH NARRATION: "Bizans birlikleri ilerledikçe düzenleri bozuldu. Selçuklu kuvvetleri onları kuşatmaya başladı."

SCENE 8 (01:10–01:20) — Meydan Savaşı Kızışıyor
VISUAL: Byzantine and Seljuk cavalry clashing, shields and swords, realistic medieval combat.
TURKISH NARRATION: "Savaş şiddetlendi. Bizans ordusundaki çözülme, Selçukluların üstünlük kurmasını sağladı."

SCENE 9 (01:20–01:30) — Romen Diyojen Esir Düşüyor
VISUAL: Romanos IV being escorted under guard after the battle, solemn historical scene.
TURKISH NARRATION: "Bizans İmparatoru Romen Diyojen esir düştü. Bu, Bizans için ağır bir yenilgiydi."

SCENE 10 (01:30–01:40) — Alparslan'ın Zaferi
VISUAL: Victorious Seljuk camp at sunset, Alp Arslan standing among his commanders.
TURKISH NARRATION: "Alparslan'ın zaferi, Selçukluların Anadolu'daki siyasi ve askerî gücünü artırdı."

SCENE 11 (01:40–01:50) — Anadolu'nun Kapıları Açılıyor
VISUAL: Seljuk riders travelling through Anatolian valleys, grand sweeping landscape shot.
TURKISH NARRATION: "Malazgirt, Türklerin Anadolu'ya yerleşme sürecinde önemli bir dönüm noktası oldu."

SCENE 12 (01:50–02:00) — Ebedi Zafer
VISUAL: Epic sunset over medieval Anatolian plains, mounted Seljuk silhouette, slow aerial pullback.
TURKISH NARRATION: "1071 Malazgirt Zaferi, Anadolu'nun sonraki yüzyıllardaki tarihini derinden etkiledi."` }, { title: "👑 1453 İstanbul'un Fethi (12 Sahne)", text: `SCENE 1 (00:00–00:10): Young Sultan Mehmed II, 21 years old, stands on a hill overlooking Constantinople at sunrise.
VISUAL: Young Sultan Mehmed II overlooking Constantinople at dawn, thousands of Ottoman soldiers behind him.
TURKISH NARRATION: "Yıl 1453. Genç Sultan Mehmed, çağ açıp çağ kapatacak tarihi fethin hazırlıklarını tamamlamıştı."

SCENE 2 (00:10–00:20): Ottoman army marches toward Constantinople.
VISUAL: Massive Ottoman army marching towards the walls of Constantinople, banners waving.
TURKISH NARRATION: "Büyük Osmanlı ordusu kararlılıkla surlara doğru ilerliyordu."

SCENE 3 (00:20–00:30): Giant bombard cannons are prepared.
VISUAL: Ottoman soldiers and engineers loading massive stone cannonballs into giant Urban bombard cannons.
TURKISH NARRATION: "Devasa Şahi topları surlara karşı mevzilendirildi. Kuşatma başlıyordu."

SCENE 4 (00:30–00:40): Cannon bombardment against Theodosian Walls.
VISUAL: Giant cannons firing against Theodosian Walls, clouds of dust and flying stones.
TURKISH NARRATION: "Kuşatma başladığında dev topların gürültüsü tüm şehri sarstı."

SCENE 5 (00:40–00:50): Ships transported overland into Golden Horn.
VISUAL: Ottoman ships being hauled overland on greased wooden logs through Galata hills under moonlight.
TURKISH NARRATION: "Gemiler karadan yürütülerek Haliç'e indirildi ve savunma dengeleri altüst oldu."

SCENE 6 (00:50–01:00): Night assaults and defenders on the ramparts.
VISUAL: Night bombardment with flaming arrows and torches against the stone towers.
TURKISH NARRATION: "Gece gündüz süren taarruzlar surlarda büyük gedikler açtı."

SCENE 7 (01:00–01:10): Ulubatlı Hasan raising the banner.
VISUAL: Ottoman vanguard soldiers breaching the outer ramparts, Ottoman banner waving on the tower.
TURKISH NARRATION: "Tarihin dönüm noktası yaklaşıyordu. Surlarda ilk Osmanlı sancağı dalgalandı."

SCENE 8 (01:10–01:20): Final general assault on May 29.
VISUAL: 29 May 1453 morning assault, Janissaries pushing through St. Romanus gate.
TURKISH NARRATION: "29 Mayıs 1453 sabahı son büyük taarruzla surlar aşıldı."

SCENE 9 (01:20–01:30): Mehmed II enters the city.
VISUAL: Fatih Sultan Mehmed on his white horse entering through the city gates with dignity.
TURKISH NARRATION: "Fatih Sultan Mehmet, fethettiği kadim şehre vakar ve merhametle girdi."

SCENE 10 (01:30–01:40): Hagia Sophia protection.
VISUAL: Sultan Mehmed before Hagia Sophia guaranteeing protection to the citizens of the city.
TURKISH NARRATION: "Halka can ve mal güvenliği sağlandı, kadim mabetler koruma altına alındı."

SCENE 11 (01:40–01:50): New imperial capital.
VISUAL: Panoramic cinematic view of Istanbul skyline, Golden Horn at golden sunset.
TURKISH NARRATION: "Konstantinopolis artık cihan devleti Osmanlı'nın payitahtı İstanbul olmuştu."

SCENE 12 (01:50–02:00): Ebedi Miras
VISUAL: Majestic sunset over Istanbul, minarets and dome silhouettes, 4k cinematic aerial shot.
TURKISH NARRATION: "1453 İstanbul'un Fethi ile Orta Çağ kapandı, Yeni Çağ başladı."` }, { title: "🏰 1187 Kudüs & Selahaddin (12 Sahne)", text: `SCENE 1 (00:00–00:10): Sultan Saladin reviewing his forces before Jerusalem in 1187.
VISUAL: Sultan Saladin in desert dawn light before his cavalry, cinematic tracking shot.
TURKISH NARRATION: "Yıl 1187. Selahaddin Eyyubi, kutsal şehir Kudüs'ü geri almak için yola çıktı."

SCENE 2 (00:10–00:20): Battle of Hattin.
VISUAL: Horns of Hattin, sun blazing over the arid landscape, cavalry maneuvers.
TURKISH NARRATION: "Hıttin Savaşı'nda Haçlı ordusu mağlup edildi ve Kudüs'ün yolu açıldı."

SCENE 3 (00:20–00:30): Siege of Jerusalem begins.
VISUAL: Trebuchets and siege engines deployed outside the walls of Jerusalem.
TURKISH NARRATION: "Selahaddin'in ordusu kutsal şehrin surları önüne vardı."

SCENE 4 (00:30–00:40): Negotiations with Balian of Ibelin.
VISUAL: Saladin and Balian meeting in a tent under banners to agree upon peaceful surrender.
TURKISH NARRATION: "Kan dökülmemesi için görüşmeler yapıldı ve şehir barışla teslim alındı."

SCENE 5 (00:40–00:50): October 2, 1187 peaceful entrance.
VISUAL: Saladin entering the gates of Jerusalem with justice and dignity.
TURKISH NARRATION: "2 Ekim 1187'de Selahaddin Eyyubi Kudüs'e girdi ve adalet tesis edildi."

SCENE 6 (00:50–01:00): Dome of the Rock at sunset.
VISUAL: Golden sunset over the Dome of the Rock, majestic Middle East landscape.
TURKISH NARRATION: "Kudüs'ün fethi, tarihe hoşgörü ve merhametin simgesi olarak kazındı."` }, { title: "🇹🇷 1915 Çanakkale Zaferi (6 Sahne)", text: `1. Sahne: 1915 Çanakkale Boğazı, müttefik zırhlı donanması boğaza doğru ilerliyor.
Seslendirme: "Yıl 1915. Dünyanın en güçlü donanması Çanakkale Boğazı'na dayandı."

2. Sahne: Seyit Onbaşı 275 kiloluk top mermisini tek başına sırtlıyor ve namluya sürüyor.
Seslendirme: "Seyit Onbaşı, devasa mermiyi vatan aşkıyla sırtlayıp namluya sürdü."

3. Sahne: Ocean zırhlısı vurularak batıyor, boğaz sularında büyük patlamalar.
Seslendirme: "Nusret'in mayınları ve kıyı bataryaları tarihin akışını değiştirdi."

4. Sahne: Conkbayırı siperlerinde Mustafa Kemal ve Mehmetçik süngü hücumuna kalkıyor.
Seslendirme: "Anafartalar ve Conkbayırı'nda 'Ben size taarruzu değil, ölmeyi emrediyorum' sözü yankılandı."

5. Sahne: Düşman kuvvetleri Çanakkale'yi geçemeyerek çekilmek zorunda kalıyor.
Seslendirme: "Mehmetçiğin sarsılmaz imanı karşısında işgal güçleri geri çekildi."

6. Sahne: Çanakkale Şehitler Abidesi, dalgalanan Türk bayrağı ve ebedi zafer.
Seslendirme: "Çanakkale Geçilmez! Şehitlerimizin aziz hatırası milletimizin kalbinde sonsuza dek yaşayacak."` }];
function qp({ scenes: e, currentSceneIndex: t, onSelectScene: n, onUpdateScene: r, onAddScene: i, onDeleteScene: l, onRegenerateSceneImage: a, onPreviewSceneTTS: s, onGenerateFromRawPrompt: u, isGenerating: d, generationProgress: h = 0, generationStatusText: m = "", activeTab: y = "scenes", setActiveTab: S }) {
    const [w, k] = P.useState(y || "scenes"), [v, p] = P.useState(""), [c, f] = P.useState(12), [g, x] = P.useState(10), [N, E] = P.useState(null), T = P.useRef(null);
    Vo.useEffect(() => { y && y !== w && k(y); }, [y]);
    const _ = M => { k(M), S && S(M); }, A = () => { if (!v.trim()) {
        alert("Lütfen bir prompt veya senaryo metni yapıştırın.");
        return;
    } u && u(v, c, g); }, I = M => { p(M.text); }, te = M => { var H; const D = (H = M.target.files) == null ? void 0 : H[0]; if (D && N !== null) {
        const ce = URL.createObjectURL(D);
        r(N, { imageUrl: ce, videoUrl: null });
    } };
    return o.jsxs("div", { className: "studio-panel", children: [o.jsx("div", { className: "panel-header", style: { padding: "8px 12px" }, children: o.jsxs("div", { style: { display: "flex", gap: 6, width: "100%" }, children: [o.jsxs("button", { type: "button", className: `btn btn-sm ${w === "scenes" ? "btn-primary" : "btn-secondary"}`, style: { flex: 1, padding: "7px 10px", fontSize: "0.8rem" }, onClick: () => _("scenes"), children: [o.jsx(is, { size: 14 }), "Sahneler (", e.length, ")"] }), o.jsxs("button", { type: "button", className: `btn btn-sm ${w === "generator" ? "btn-primary" : "btn-secondary"}`, style: { flex: 1, padding: "7px 10px", fontSize: "0.8rem", background: w === "generator" ? "var(--grad-primary)" : "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)", border: w === "generator" ? "none" : "1px solid rgba(168, 85, 247, 0.4)", color: "white", fontWeight: 700 }, onClick: () => _("generator"), children: [o.jsx(Kt, { size: 14, color: "#fef08a" }), "✨ Senaryo & Görsel Stüdyosu"] })] }) }), o.jsx("input", { type: "file", ref: T, accept: "image/*,video/*", style: { display: "none" }, onChange: te }), o.jsxs("div", { className: "panel-content", style: { padding: "14px" }, children: [w === "generator" && o.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [o.jsxs("div", { style: { background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)", border: "1px solid rgba(168, 85, 247, 0.35)", borderRadius: 12, padding: "12px 14px" }, children: [o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6, fontWeight: 700, color: "white", fontSize: "0.88rem" }, children: [o.jsx(Xt, { size: 16, color: "var(--accent-gold)" }), "Sohbete Yazmadan Doğrudan Görselleri ve Videoyu Üretin!"] }), o.jsxs("div", { style: { fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 4, lineHeight: 1.4 }, children: ["İstediğiniz senaryoyu veya promptu aşağıdaki alana yapıştırın. Yapay zeka tüm sahneleri otomatik ayrıştırıp her sahne için ", o.jsx("strong", { children: "4K sinematik görselleri" }), " hazırlayacaktır."] })] }), o.jsxs("div", { className: "form-group", children: [o.jsxs("label", { className: "form-label", style: { fontSize: "0.78rem" }, children: [o.jsx("span", { children: "Hazır Örnek Senaryolar" }), o.jsx(Xt, { size: 13, color: "var(--accent-gold)" })] }), o.jsx("div", { className: "template-chips", children: Xp.map((M, D) => o.jsx("button", { type: "button", className: "template-chip", onClick: () => I(M), title: "Bu senaryoyu metin kutusuna kopyala", children: M.title }, D)) })] }), o.jsxs("div", { className: "form-group", children: [o.jsx("label", { className: "form-label", htmlFor: "prompt-script-input", style: { color: "white", fontWeight: 700 }, children: o.jsx("span", { children: "Senaryonuzu veya Promptunuzu Buraya Yapıştırın" }) }), o.jsx("textarea", { id: "prompt-script-input", className: "form-textarea", style: { minHeight: "170px", fontSize: "0.84rem", lineHeight: "1.45", fontFamily: "var(--font-mono)" }, placeholder: `Buraya istediğiniz senaryoyu yapıştırabilirsiniz.

Örnek 1 (Çok Sahneli):
SCENE 1 (00:00–00:10): Sultan Alparslan ordusunu topluyor...
VISUAL: 1071 Anadolu gün doğumu, Selçuklu süvarileri, 4k
TURKISH NARRATION: "Yıl 1071. Sultan Alparslan büyük orduyla karşılaşıyordu..."

Örnek 2 (Tek Başlık):
"Çanakkale Savaşı 1915, Seyit Onbaşı ve Anafartalar Zaferi"`, value: v, onChange: M => p(M.target.value) })] }), o.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }, children: [o.jsxs("div", { className: "form-group", children: [o.jsx("label", { className: "form-label", style: { fontSize: "0.76rem" }, children: o.jsx("span", { children: "Sahne Sayısı" }) }), o.jsxs("select", { className: "form-select", value: c, onChange: M => f(parseInt(M.target.value, 10)), style: { fontSize: "0.82rem" }, children: [o.jsx("option", { value: 3, children: "3 Sahne" }), o.jsx("option", { value: 4, children: "4 Sahne" }), o.jsx("option", { value: 6, children: "6 Sahne (60 sn)" }), o.jsx("option", { value: 8, children: "8 Sahne (80 sn)" }), o.jsx("option", { value: 12, children: "12 Sahne (120 sn - 4K Epik)" })] })] }), o.jsxs("div", { className: "form-group", children: [o.jsx("label", { className: "form-label", style: { fontSize: "0.76rem" }, children: o.jsx("span", { children: "Sahne Süresi" }) }), o.jsxs("select", { className: "form-select", value: g, onChange: M => x(parseFloat(M.target.value)), style: { fontSize: "0.82rem" }, children: [o.jsx("option", { value: 5, children: "5 Saniye (Hızlı)" }), o.jsx("option", { value: 8, children: "8 Saniye" }), o.jsx("option", { value: 10, children: "10 Saniye (Belgesel)" })] })] })] }), o.jsx("button", { type: "button", className: "btn btn-primary", style: { width: "100%", padding: "14px", fontSize: "0.96rem", fontWeight: 700, marginTop: 6 }, onClick: A, disabled: d || !v.trim(), children: d ? o.jsxs(o.Fragment, { children: [o.jsx(zo, { size: 18, className: "animate-spin" }), "Sahneler & Görseller Hazırlanıyor (", h, "%)"] }) : o.jsxs(o.Fragment, { children: [o.jsx(Kt, { size: 18 }), "🚀 Sahneleri ve Görselleri Otomatik Üret"] }) }), d && o.jsxs("div", { style: { marginTop: 4 }, children: [o.jsx("div", { className: "progress-bar-container", children: o.jsx("div", { className: "progress-bar-fill", style: { width: `${h}%` } }) }), o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: "0.74rem", color: "var(--text-muted)" }, children: [o.jsx("span", { children: m || "Görseller çözümleniyor..." }), o.jsxs("span", { children: ["%", h] })] })] })] }), w === "scenes" && o.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [o.jsxs("span", { style: { fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }, children: [e.length, " Sahne • Görsel ve Seslendirmeler:"] }), o.jsxs("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: i, title: "Yeni Sahne Ekle", children: [o.jsx(ua, { size: 14 }), "Sahne Ekle"] })] }), e.map((M, D) => o.jsxs("div", { style: { background: D === t ? "rgba(30, 38, 62, 0.95)" : "rgba(18, 22, 34, 0.75)", border: D === t ? "1.5px solid var(--primary)" : "1px solid var(--border-subtle)", borderRadius: 12, padding: 12, display: "flex", flexDirection: "column", gap: 10, transition: "all 0.2s ease", boxShadow: D === t ? "0 0 16px rgba(99, 102, 241, 0.25)" : "none" }, onClick: () => n(D), children: [o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [o.jsxs("span", { style: { background: D === t ? "var(--primary)" : "rgba(255,255,255,0.08)", color: "white", fontWeight: 800, fontSize: "0.75rem", padding: "2px 8px", borderRadius: 6 }, children: ["Sahne #", D + 1] }), o.jsxs("span", { style: { fontSize: "0.74rem", color: "var(--text-dim)", display: "flex", alignItems: "center", gap: 4 }, children: [o.jsx(bi, { size: 11 }), (M.duration || 10).toFixed(1), " sn"] })] }), o.jsx("div", { style: { display: "flex", gap: 6 }, children: e.length > 1 && o.jsx("button", { type: "button", style: { background: "none", border: "none", color: "var(--text-dim)", cursor: "pointer", padding: 2 }, onClick: H => { H.stopPropagation(), l(D); }, title: "Sahneyi Sil", children: o.jsx(Kc, { size: 13 }) }) })] }), o.jsxs("div", { style: { display: "grid", gridTemplateColumns: "80px 1fr", gap: 10, alignItems: "center" }, children: [o.jsx("div", { style: { height: 105, borderRadius: 8, overflow: "hidden", background: "#07080c", border: "1px solid var(--border-medium)", position: "relative" }, children: M.imageUrl ? o.jsx("img", { src: M.imageUrl, alt: `Sahne ${D + 1}`, style: { width: "100%", height: "100%", objectFit: "cover" } }) : M.videoUrl ? o.jsx("video", { src: M.videoUrl, muted: !0, playsInline: !0, style: { width: "100%", height: "100%", objectFit: "cover" } }) : o.jsx("div", { style: { display: "flex", height: "100%", alignItems: "center", justifyContent: "center", color: "var(--text-dim)" }, children: o.jsx(Lp, { size: 20 }) }) }), o.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [o.jsx("div", { style: { fontSize: "0.74rem", color: "var(--text-dim)", fontWeight: 600 }, children: "Görsel İşlemleri:" }), o.jsxs("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: [o.jsxs("button", { type: "button", className: "btn btn-secondary btn-sm", style: { padding: "4px 8px", fontSize: "0.7rem" }, onClick: H => { H.stopPropagation(), a(D); }, title: "Bu sahne için yapay zekadan yeni bir görsel üret / bul", children: [o.jsx(zo, { size: 11 }), "Görseli Yenile"] }), o.jsxs("button", { type: "button", className: "btn btn-secondary btn-sm", style: { padding: "4px 8px", fontSize: "0.7rem" }, onClick: H => { var ce; H.stopPropagation(), E(D), (ce = T.current) == null || ce.click(); }, title: "Bilgisayarınızdan özel bir görsel veya video seçin", children: [o.jsx(Wc, { size: 11 }), "PC'den Seç"] })] }), o.jsx("div", { style: { fontSize: "0.71rem", color: "var(--accent-cyan)", marginTop: 2 }, children: "✓ 4K Sinematik Hazır" })] })] }), o.jsxs("div", { className: "form-group", children: [o.jsx("label", { className: "form-label", style: { fontSize: "0.74rem", color: "var(--accent-cyan)" }, children: o.jsx("span", { children: "Sahne Görsel Promptu" }) }), o.jsx("textarea", { className: "form-textarea", style: { minHeight: "44px", fontSize: "0.8rem", padding: "6px 8px" }, placeholder: "Sahnenin görsel tanımı veya promptu...", value: M.visualPrompt || "", onChange: H => r(D, { visualPrompt: H.target.value }) })] }), o.jsxs("div", { className: "form-group", children: [o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [o.jsx("label", { className: "form-label", style: { fontSize: "0.74rem", color: "var(--accent-gold)" }, children: o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 4 }, children: [o.jsx(oa, { size: 12 }), "Türkçe Seslendirme Metni"] }) }), o.jsxs("button", { type: "button", className: "btn btn-secondary btn-sm", style: { padding: "2px 7px", fontSize: "0.68rem" }, onClick: H => { H.stopPropagation(), s(M.voiceText || M.text); }, title: "Bu sahneyi seslendir", children: [o.jsx(Vi, { size: 11 }), "Dinle"] })] }), o.jsx("textarea", { className: "form-textarea", style: { minHeight: "48px", fontSize: "0.82rem", padding: "6px 8px" }, placeholder: "Türkçe belgesel seslendirmesi...", value: M.voiceText || M.text || "", onChange: H => r(D, { voiceText: H.target.value, text: H.target.value }) })] })] }, M.id || D)), o.jsxs("button", { type: "button", className: "btn btn-secondary", style: { width: "100%", padding: "10px", marginTop: 4 }, onClick: i, children: [o.jsx(ua, { size: 16 }), "Yeni Sahne Ekle"] })] })] })] });
}
function Jp({ canvasRef: e, aspectRatio: t, isPlaying: n, onTogglePlay: r, onReset: i, currentTime: l, totalDuration: a, currentSceneIndex: s, totalScenes: u }) { const d = h => { const m = Math.floor(h / 60), y = Math.floor(h % 60); return `${m.toString().padStart(2, "0")}:${y.toString().padStart(2, "0")}`; }; return o.jsxs("div", { className: "player-container", children: [o.jsxs("div", { className: `viewport-wrapper ${t}`, children: [o.jsx("canvas", { ref: e, className: "video-canvas" }), u === 0 && o.jsxs("div", { style: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, color: "var(--text-muted)", textAlign: "center", padding: 24, background: "rgba(9, 10, 16, 0.7)" }, children: [o.jsx("div", { style: { width: 60, height: 60, borderRadius: "50%", background: "rgba(99, 102, 241, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)" }, children: o.jsx(Xt, { size: 30 }) }), o.jsxs("div", { children: [o.jsx("h3", { style: { fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: 4 }, children: "Stüdyo Önizleme Alanı" }), o.jsx("p", { style: { fontSize: "0.84rem", maxWidth: 300 }, children: 'Soldaki panelden metin girin veya hazır bir şablon seçerek "Sahneleri Üret" butonuna basın.' })] })] })] }), u > 0 && o.jsxs("div", { className: "player-controls-bar", children: [o.jsx("button", { type: "button", className: "btn btn-secondary btn-icon", onClick: i, title: "Başa Sar", children: o.jsx(Vp, { size: 16 }) }), o.jsx("button", { type: "button", className: "btn btn-primary btn-icon", onClick: r, title: n ? "Durdur" : "Oynat", style: { width: 44, height: 44 }, children: n ? o.jsx(bp, { size: 20 }) : o.jsx(Vi, { size: 20, style: { marginLeft: 2 } }) }), o.jsxs("div", { className: "time-display", children: [o.jsx("span", { children: d(l) }), o.jsx("span", { style: { margin: "0 4px", opacity: .5 }, children: "/" }), o.jsx("span", { children: d(a) })] }), o.jsx("div", { style: { display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.06)", padding: "4px 10px", borderRadius: 20, fontSize: "0.74rem", color: "var(--text-muted)" }, children: o.jsxs("span", { children: ["Sahne ", s + 1, "/", u] }) })] })] }); }
function em({ scenes: e, currentSceneIndex: t, onSelectScene: n, onAddScene: r, onDeleteScene: i, totalDuration: l }) { return o.jsxs("footer", { className: "studio-timeline", children: [o.jsxs("div", { className: "timeline-header", children: [o.jsxs("div", { className: "timeline-title", children: [o.jsx(is, { size: 15, color: "var(--primary-light)" }), o.jsx("span", { children: "Sinematik Video Zaman Çizelgesi" }), o.jsxs("span", { style: { fontSize: "0.74rem", color: "var(--text-dim)", textTransform: "none" }, children: ["(", e.length, " Video Sahnesi • Toplam: ", l.toFixed(1), " sn)"] })] }), o.jsxs("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: r, title: "Yeni Sahne Ekle", children: [o.jsx(ua, { size: 14 }), "Sahne Ekle"] })] }), o.jsxs("div", { className: "timeline-scenes", children: [e.map((a, s) => o.jsxs("div", { className: `scene-card ${s === t ? "active" : ""}`, onClick: () => n(s), children: [o.jsxs("div", { style: { position: "relative", overflow: "hidden", borderRadius: 6, height: 60, background: "#07090e" }, children: [a.videoUrl ? o.jsx("video", { src: a.videoUrl, className: "scene-thumb", muted: !0, playsInline: !0, style: { width: "100%", height: "100%", objectFit: "cover" } }) : o.jsx("img", { src: a.imageUrl || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80", alt: `Sahne ${s + 1}`, className: "scene-thumb", loading: "lazy" }), o.jsxs("span", { style: { position: "absolute", top: 4, right: 4, background: "rgba(0, 0, 0, 0.75)", borderRadius: 4, padding: "2px 5px", fontSize: "0.65rem", color: "var(--accent-cyan)", display: "flex", alignItems: "center", gap: 3 }, children: [o.jsx(ls, { size: 10 }), "Video"] })] }), o.jsxs("div", { className: "scene-meta", children: [o.jsxs("span", { style: { fontWeight: 800, color: s === t ? "var(--primary-light)" : "inherit" }, children: ["#", s + 1] }), o.jsxs("span", { className: "scene-duration", children: [o.jsx(bi, { size: 10, style: { display: "inline", marginRight: 3, verticalAlign: "middle" } }), (a.duration || 3.5).toFixed(1), "s"] })] }), o.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [o.jsxs("div", { className: "scene-text-preview", style: { color: "var(--accent-cyan)", fontSize: "0.71rem" }, title: `Video: ${a.visualPrompt || ""}`, children: ["🎬 ", a.visualPrompt || "(Video sahnesi)"] }), o.jsxs("div", { className: "scene-text-preview", style: { color: "var(--text-main)", fontSize: "0.73rem" }, title: `Ses: ${a.voiceText || a.text || ""}`, children: ["🎙️ ", a.voiceText || a.text || "(Ses metni yok)"] })] }), e.length > 1 && o.jsx("button", { type: "button", style: { position: "absolute", top: 6, left: 6, background: "rgba(0,0,0,0.65)", borderRadius: 4, border: "none", color: "var(--text-dim)", cursor: "pointer", padding: "3px 4px" }, onClick: u => { u.stopPropagation(), i(s); }, title: "Sahneyi Sil", children: o.jsx(Kc, { size: 11 }) })] }, a.id || s)), e.length === 0 && o.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", width: "100%", color: "var(--text-dim)", fontSize: "0.84rem" }, children: "Henüz sahne bulunmuyor. Yeni Sahne Ekle butonuna tıklayarak ekleyebilirsiniz." })] })] }); }
const Co = [{ id: "mountains_drone", title: "Epik Sisli Dağlar & Drone", category: "Doğa & Manzara", keywords: ["dağ", "sis", "zirve", "doğa", "manzara", "orman", "uçurum", "gökyüzü", "mountain", "nature"], url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80" }, { id: "fire_determination", title: "Ateş, Kıvılcım & Güç", category: "Motivasyon & Güç", keywords: ["ateş", "kıvılcım", "güç", "azim", "kararlılık", "savaşçı", "pes etme", "disiplin", "fire", "power"], url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", thumb: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80" }, { id: "cyberpunk_future", title: "Siberpunk & Yapay Zeka", category: "Teknoloji & Gelecek", keywords: ["teknoloji", "robot", "yapay zeka", "siberpunk", "gelecek", "neon", "şehir", "ai", "cyberpunk", "tech"], url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" }, { id: "open_road_journey", title: "Sonsuz Yol & Başarı", category: "Başarı & Yolculuk", keywords: ["yol", "başarı", "hedef", "ufuk", "gün batımı", "hız", "zafer", "road", "success", "journey"], url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", thumb: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80" }, { id: "snow_epic_quest", title: "Buzul Zirveler & Direniş", category: "Epik Mücadele", keywords: ["kar", "kış", "fırtına", "buzul", "direniş", "mücadele", "tırmanış", "snow", "storm", "climb"], url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80" }];
function tm(e) { return URL.createObjectURL(e); }
function nm({ subtitlesEnabled: e, setSubtitlesEnabled: t, subtitleStyle: n, setSubtitleStyle: r, bgmTrack: i, setBgmTrack: l, bgmVolume: a, setBgmVolume: s, speechRate: u, setSpeechRate: d, currentScene: h, currentSceneIndex: m, onUpdateScene: y, onPreviewSceneTTS: S, availableVoices: w, selectedVoiceURI: k, setSelectedVoiceURI: v, outroOn: qOn, setOutroOn: qSetOn, outroText: qText, setOutroText: qSetText, onPreviewOutro: qPrev, outroDefault: qDef }) { const p = P.useRef(null), c = f => { var x; const g = (x = f.target.files) == null ? void 0 : x[0]; if (g && m !== void 0) {
    const N = tm(g);
    y(m, { videoUrl: N, visualPrompt: `Özel Video: ${g.name}` });
} }; return o.jsxs("div", { className: "studio-panel", children: [o.jsxs("div", { className: "panel-header", children: [o.jsxs("span", { className: "panel-title", children: [o.jsx(Dp, { size: 18, color: "var(--accent-cyan)" }), "Video Ayarları & Sahne"] }), h && o.jsxs("span", { className: "brand-badge", style: { fontSize: "0.7rem" }, children: ["Sahne #", m + 1] })] }), o.jsx("input", { type: "file", ref: p, accept: "video/mp4,video/webm", style: { display: "none" }, onChange: c }), o.jsxs("div", { className: "panel-content", children: [h && o.jsxs("div", { style: { background: "rgba(255, 255, 255, 0.03)", padding: 12, borderRadius: 12, border: "1px solid var(--border-medium)", display: "flex", flexDirection: "column", gap: 10 }, children: [o.jsxs("div", { className: "form-group", children: [o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [o.jsx("label", { className: "form-label", style: { color: "var(--accent-cyan)", fontSize: "0.78rem" }, children: o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [o.jsx(ls, { size: 14 }), "Sinematik Video Sahnesi"] }) }), o.jsxs("button", { type: "button", className: "btn btn-secondary btn-sm", style: { padding: "2px 7px", fontSize: "0.68rem" }, onClick: () => { var f; return (f = p.current) == null ? void 0 : f.click(); }, title: "Bilgisayarınızdan video yükleyin", children: [o.jsx(Wc, { size: 11 }), "PC'den Video Yükle"] })] }), o.jsxs("select", { className: "form-select", style: { fontSize: "0.8rem", padding: "6px 8px" }, value: h.videoUrl || "", onChange: f => { const g = f.target.value, x = Co.find(N => N.url === g); y(m, { videoUrl: g, visualPrompt: x ? x.title : h.visualPrompt }); }, children: [o.jsx("option", { value: "", children: "-- Sinematik Kütüphaneden Seç --" }), Co.map(f => o.jsxs("option", { value: f.url, children: ["🎬 ", f.title] }, f.id))] }), o.jsx("input", { type: "text", className: "form-input", style: { fontSize: "0.78rem", padding: "6px 8px" }, placeholder: "Özel MP4 Video URL'si...", value: h.videoUrl || "", onChange: f => y(m, { videoUrl: f.target.value }) })] }), o.jsxs("div", { className: "form-group", children: [o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [o.jsx("label", { className: "form-label", style: { color: "var(--accent-gold)", fontSize: "0.78rem" }, children: o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [o.jsx(oa, { size: 14 }), "Seslendirme / Altyazı Metni"] }) }), o.jsxs("button", { type: "button", className: "btn btn-secondary btn-sm", style: { padding: "3px 8px", fontSize: "0.7rem" }, onClick: () => S(h.voiceText || h.text), title: "Seslendirmeyi Dinle", children: [o.jsx(Vi, { size: 11 }), "Dinle"] })] }), o.jsx("textarea", { className: "form-textarea", style: { minHeight: "60px", fontSize: "0.84rem" }, value: h.voiceText || h.text || "", onChange: f => y(m, { voiceText: f.target.value, text: f.target.value }), placeholder: "Örn: Zirve sadece sabredenlerindir..." })] }), o.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)" }, children: [o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 4 }, children: [o.jsx(bi, { size: 12 }), "Sahne Süresi:"] }), o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [o.jsx("input", { type: "range", min: "2", max: "30", step: "0.5", value: h.duration || 3.5, onChange: f => y(m, { duration: parseFloat(f.target.value) }), style: { width: "80px", accentColor: "var(--primary)" } }), o.jsxs("span", { style: { fontFamily: "var(--font-mono)", minWidth: "32px" }, children: [(h.duration || 3.5).toFixed(1), "s"] })] })] }), o.jsx(SceneTools, { scene: h, index: m, onUpdate: y }, h && h.id)] }), o.jsxs("div", { className: "form-group", children: [o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [o.jsx("label", { className: "form-label", style: { margin: 0 }, children: o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [o.jsx(Hp, { size: 14, color: "var(--accent-gold)" }), "Altyazılar"] }) }), o.jsx("button", { type: "button", className: `btn btn-sm ${e ? "btn-primary" : "btn-secondary"}`, style: { fontSize: "0.72rem", padding: "3px 8px" }, onClick: () => t(!e), children: e ? "✓ Altyazı Açık" : "✕ Altyazı Kapalı" })] }), e && o.jsxs("div", { className: "subtitle-styles-grid", style: { marginTop: 8 }, children: [o.jsx("button", { type: "button", className: `sub-style-btn ${n === "mrbeast" ? "active" : ""}`, onClick: () => r("mrbeast"), children: "🔥 MrBeast Tarzı" }), o.jsx("button", { type: "button", className: `sub-style-btn ${n === "neon" ? "active" : ""}`, onClick: () => r("neon"), children: "⚡ Neon Işıma" }), o.jsx("button", { type: "button", className: `sub-style-btn ${n === "cinematic" ? "active" : ""}`, onClick: () => r("cinematic"), children: "🎬 Sinematik" }), o.jsx("button", { type: "button", className: `sub-style-btn ${n === "minimal" ? "active" : ""}`, onClick: () => r("minimal"), children: "✨ Minimalist" })] })] }), o.jsxs("div", { className: "form-group", children: [o.jsx("label", { className: "form-label", htmlFor: "bgm-select", children: o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [o.jsx(Op, { size: 14, color: "var(--accent-pink)" }), "Arka Plan Müziği"] }) }), o.jsxs("select", { id: "bgm-select", className: "form-select", value: i, onChange: f => l(f.target.value), children: [o.jsx("option", { value: "motivational", children: "🏆 Epik Motivasyon Akoru" }), o.jsx("option", { value: "cinematic", children: "🌌 Derin Sinematik Atmosfer" }), o.jsx("option", { value: "lofi", children: "☕ Rahatlatıcı Lo-Fi" }), o.jsx("option", { value: "cyberpunk", children: "🌆 Siberpunk Synthwave" }), o.jsx("option", { value: "custom", children: SX.studio.musicName ? "📁 Kendi müziğim: " + SX.studio.musicName : "📁 Kendi müziğim (Araçlar › Müzik)" }), o.jsx("option", { value: "none", children: "🔇 Müzik Yok (Sessiz)" })] }), i !== "none" && o.jsxs("div", { style: { marginTop: 6, display: "flex", alignItems: "center", gap: 10 }, children: [o.jsx(Bp, { size: 14, color: "var(--text-muted)" }), o.jsx("input", { type: "range", min: "0", max: "1", step: "0.05", value: a, onChange: f => s(parseFloat(f.target.value)), style: { flex: 1, accentColor: "var(--primary)" }, title: "Müzik Ses Seviyesi" }), o.jsxs("span", { style: { fontSize: "0.74rem", color: "var(--text-dim)", minWidth: 32 }, children: [Math.round(a * 100), "%"] })] })] }), o.jsxs("div", { className: "form-group", style: { background: "rgba(220, 38, 38, 0.08)", border: "1px solid rgba(220, 38, 38, 0.35)", borderRadius: 12, padding: 12 }, children: [o.jsxs("label", { className: "form-label", style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, cursor: "pointer" }, children: [o.jsx("span", { style: { fontWeight: 700, color: "#fecaca" }, children: "🔔 Sona \"Abone Ol & Beğen\" ekle" }), o.jsx("input", { type: "checkbox", checked: qOn, onChange: ev => qSetOn(ev.target.checked), style: { width: 18, height: 18, accentColor: "#dc2626", cursor: "pointer" } })] }), qOn && o.jsx("textarea", { className: "form-textarea", style: { minHeight: 70, fontSize: "0.8rem", marginTop: 6 }, value: qText, onChange: ev => qSetText(ev.target.value), placeholder: "Kapanışta okunacak metin" }), qOn && o.jsxs("div", { style: { display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }, children: [o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: qPrev, children: "▶ Kapanışı Önizle" }), qText !== qDef && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: () => qSetText(qDef), children: "↺ Varsayılan metin" })] }), o.jsx("div", { style: { fontSize: "0.7rem", color: "var(--text-dim)", marginTop: 6 }, children: qOn ? "Her dışa aktarılan videonun sonuna otomatik eklenir." : "Kapalı — videolara kapanış eklenmez." })] }), o.jsxs("div", { className: "form-group", children: [o.jsx("label", { className: "form-label", htmlFor: "voice-select", children: o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [o.jsx(oa, { size: 14, color: "var(--accent-green)" }), "Seslendirici (TTS)"] }) }), o.jsx("select", { id: "voice-select", className: "form-select", value: k, onChange: f => v(f.target.value), children: [o.jsx("optgroup", { label: "Videoya kaydedilen sesler", children: [o.jsx("option", { value: "edge:tr-TR-AhmetNeural", children: "🎙️ Ahmet — Türkçe erkek (doğal, önerilen)" }, "edge:tr-TR-AhmetNeural"), o.jsx("option", { value: "edge:tr-TR-EmelNeural", children: "🎙️ Emel — Türkçe kadın (doğal)" }, "edge:tr-TR-EmelNeural"), o.jsx("option", { value: "google", children: "🎙️ Google Türkçe — kadın" }, "google"), o.jsx("option", { value: "edge:en-US-AndrewMultilingualNeural", children: "🌍 Andrew — çok dilli erkek (Türkçe okur)" }, "edge:en-US-AndrewMultilingualNeural"), o.jsx("option", { value: "edge:en-US-BrianMultilingualNeural", children: "🌍 Brian — çok dilli erkek (Türkçe okur)" }, "edge:en-US-BrianMultilingualNeural"), o.jsx("option", { value: "edge:de-DE-FlorianMultilingualNeural", children: "🌍 Florian — çok dilli erkek (Türkçe okur)" }, "edge:de-DE-FlorianMultilingualNeural"), o.jsx("option", { value: "edge:fr-FR-RemyMultilingualNeural", children: "🌍 Remy — çok dilli erkek (Türkçe okur)" }, "edge:fr-FR-RemyMultilingualNeural"), o.jsx("option", { value: "edge:en-US-AvaMultilingualNeural", children: "🌍 Ava — çok dilli kadın (Türkçe okur)" }, "edge:en-US-AvaMultilingualNeural"), o.jsx("option", { value: "edge:en-US-EmmaMultilingualNeural", children: "🌍 Emma — çok dilli kadın (Türkçe okur)" }, "edge:en-US-EmmaMultilingualNeural"), o.jsx("option", { value: "edge:de-DE-SeraphinaMultilingualNeural", children: "🌍 Seraphina — çok dilli kadın (Türkçe okur)" }, "edge:de-DE-SeraphinaMultilingualNeural"), o.jsx("option", { value: "edge:fr-FR-VivienneMultilingualNeural", children: "🌍 Vivienne — çok dilli kadın (Türkçe okur)" }, "edge:fr-FR-VivienneMultilingualNeural")] }, "g1"), o.jsx("optgroup", { label: "Sadece önizleme (Windows sesleri)", children: (w.length === 0 ? [o.jsx("option", { value: "", children: "Sistem Sesi (Türkçe)" }, "sys")] : w.map(f => o.jsxs("option", { value: f.voiceURI, children: ["Sistem: ", f.name, " (", f.lang, ")"] }, f.voiceURI))) }, "g2")] }), o.jsxs("div", { style: { marginTop: 8 }, children: [o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: 4 }, children: [o.jsx("span", { children: "Konuşma Hızı" }), o.jsxs("span", { children: [u.toFixed(1), "x"] })] }), o.jsx("input", { type: "range", min: "0.7", max: "1.5", step: "0.1", value: u, onChange: f => d(parseFloat(f.target.value)), style: { width: "100%", accentColor: "var(--primary)" } })] })] })] })] }); }
function rm({ isOpen: e, progress: t, downloadUrl: n, filename: r, onClose: i }) { return e ? o.jsx("div", { className: "export-overlay", children: o.jsxs("div", { className: "export-modal", children: [o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [o.jsx("h2", { style: { fontSize: "1.2rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: "white" }, children: n ? "Video Hazırlandı!" : "Video Oluşturuluyor..." }), n && o.jsx("button", { onClick: i, style: { background: "none", border: "none", color: "var(--text-dim)", cursor: "pointer" }, children: o.jsx($p, { size: 20 }) })] }), n ? o.jsxs(o.Fragment, { children: [o.jsx("div", { style: { display: "flex", justifyContent: "center", margin: "14px 0" }, children: o.jsx("div", { style: { width: 70, height: 70, borderRadius: "50%", background: "rgba(16, 185, 129, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-green)" }, children: o.jsx(Mp, { size: 36 }) }) }), o.jsx("p", { style: { color: "var(--text-main)", fontSize: "0.94rem", fontWeight: 600 }, children: "✓ Videonuz Türkçe seslendirmesi ve arka plan müziğiyle birlikte başarıyla kaydedildi!" }), o.jsxs("a", { href: n, download: r, className: "btn btn-primary", style: { width: "100%", padding: "14px", fontSize: "0.95rem" }, onClick: i, children: [o.jsx(xi, { size: 20 }), "Videoyu Bilgisayara Kaydet (", r, ")"] })] }) : o.jsxs(o.Fragment, { children: [o.jsx("div", { style: { display: "flex", justifyContent: "center", margin: "14px 0" }, children: o.jsx("div", { style: { width: 70, height: 70, borderRadius: "50%", background: "rgba(99, 102, 241, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)" }, children: o.jsx(Xt, { size: 34, className: "animate-spin" }) }) }), o.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6, margin: "6px 0 12px 0" }, children: [o.jsx("p", { style: { color: "white", fontWeight: 600, fontSize: "0.92rem" }, children: "🎙️ Türkçe Seslendirme & 🎵 Epik Müzik Videoya Ekleniyor..." }), o.jsx("p", { style: { color: "var(--text-muted)", fontSize: "0.82rem" }, children: "Her sahnenin Türkçe seslendirmesi ve sinematik orkestral müzik senkronize olarak videonun içine kaydediliyor." })] }), o.jsxs("div", { children: [o.jsx("div", { className: "progress-bar-container", children: o.jsx("div", { className: "progress-bar-fill", style: { width: `${t}%` } }) }), o.jsxs("div", { style: { marginTop: 8, fontSize: "0.85rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }, children: ["%", t, " Tamamlandı"] })] })] })] }) }) : null; }
const im = { scenes: [{ id: "malazgirt_scene_1", sceneNumber: 1, title: "ALPARSLAN ORDUSUNU HAZIRLIYOR (00:00–00:10)", duration: 10, imageUrl: "/assets/malazgirt/scene_1.jpg", visualPrompt: "1071 Anatolia, Sultan Alp Arslan reviewing Seljuk cavalry in an open plain at sunrise, cinematic tracking shot.", voiceText: "Yıl 1071. Sultan Alparslan, Bizans İmparatorluğu'nun büyük ordusuyla karşılaşmaya hazırlanıyordu." }, { id: "malazgirt_scene_2", sceneNumber: 2, title: "BİZANS ORDUSUNUN YÜRÜYÜŞÜ (00:10–00:20)", duration: 10, imageUrl: "/assets/malazgirt/scene_2.jpg", visualPrompt: "Emperor Romanos IV Diogenes leading Byzantine infantry and cavalry across the Anatolian landscape, wide aerial shot.", voiceText: "Bizans İmparatoru Romen Diyojen, Anadolu'daki Selçuklu ilerleyişini durdurmak için sefere çıkmıştı." }, { id: "malazgirt_scene_3", sceneNumber: 3, title: "SAVAŞ MECLİSİ (00:20–00:30)", duration: 10, imageUrl: "/assets/malazgirt/scene_3.jpg", visualPrompt: "Seljuk commanders studying the terrain inside a medieval command tent, dramatic torchlight.", voiceText: "Alparslan, ordusunu hazırladı. Savaşın kaderini yalnızca asker sayısı değil, uygulanacak taktikler belirleyecekti." }, { id: "malazgirt_scene_4", sceneNumber: 4, title: "ORDULAR KARŞI KARŞIYA (00:30–00:40)", duration: 10, imageUrl: "/assets/malazgirt/scene_4.jpg", visualPrompt: "Two medieval armies facing each other near Manzikert, dust blowing across the field, panoramic camera.", voiceText: "26 Ağustos 1071'de iki ordu Malazgirt yakınlarında karşı karşıya geldi." }, { id: "malazgirt_scene_5", sceneNumber: 5, title: "ATLI OKÇULARIN HÜCUMU (00:40–00:50)", duration: 10, imageUrl: "/assets/malazgirt/scene_5.jpg", visualPrompt: "Seljuk mounted archers riding swiftly across the plain and releasing arrows, dynamic camera.", voiceText: "Selçuklu atlı okçuları, hareketli saldırılarla Bizans birliklerini yıpratmaya başladı." }, { id: "malazgirt_scene_6", sceneNumber: 6, title: "SAHTE GERİ ÇEKİLME (TURAN TAKTİĞİ) (00:50–01:00)", duration: 10, imageUrl: "/assets/malazgirt/scene_6.jpg", visualPrompt: "Seljuk cavalry conducting a coordinated feigned retreat while Byzantine troops pursue, sweeping aerial camera.", voiceText: "Selçuklu süvarileri geri çekiliyormuş gibi yaparak Bizans ordusunu peşlerinden sürükledi." }, { id: "malazgirt_scene_7", sceneNumber: 7, title: "HİLAL KUŞATMASI (01:00–01:10)", duration: 10, imageUrl: "/assets/malazgirt/scene_7.jpg", visualPrompt: "Seljuk horsemen closing around Byzantine formations, battlefield dust, intense cinematic action.", voiceText: "Bizans birlikleri ilerledikçe düzenleri bozuldu. Selçuklu kuvvetleri onları kuşatmaya başladı." }, { id: "malazgirt_scene_8", sceneNumber: 8, title: "MEYDAN SAVAŞI KIZIŞIYOR (01:10–01:20)", duration: 10, imageUrl: "/assets/malazgirt/scene_8.jpg", visualPrompt: "Byzantine and Seljuk cavalry clashing, shields and swords, realistic non-graphic medieval combat.", voiceText: "Savaş şiddetlendi. Bizans ordusundaki çözülme, Selçukluların üstünlük kurmasını sağladı." }, { id: "malazgirt_scene_9", sceneNumber: 9, title: "ROMEN DİYOJEN ESİR ALINIYOR (01:20–01:30)", duration: 10, imageUrl: "/assets/malazgirt/scene_9.jpg", visualPrompt: "Romanos IV being escorted under guard after the battle, solemn historical scene.", voiceText: "Bizans İmparatoru Romen Diyojen esir düştü. Bu, Bizans için ağır bir yenilgiydi." }, { id: "malazgirt_scene_10", sceneNumber: 10, title: "ALPARSLAN'IN ZAFERİ (01:30–01:40)", duration: 10, imageUrl: "/assets/malazgirt/scene_10.jpg", visualPrompt: "Victorious Seljuk camp at sunset, Alp Arslan standing among his commanders.", voiceText: "Alparslan'ın zaferi, Selçukluların Anadolu'daki siyasi ve askerî gücünü artırdı." }, { id: "malazgirt_scene_11", sceneNumber: 11, title: "ANADOLU'NUN KAPILARI AÇILIYOR (01:40–01:50)", duration: 10, imageUrl: "/assets/malazgirt/scene_11.jpg", visualPrompt: "Seljuk riders travelling through Anatolian valleys, grand sweeping landscape shot.", voiceText: "Malazgirt, Türklerin Anadolu'ya yerleşme sürecinde önemli bir dönüm noktası oldu." }, { id: "malazgirt_scene_12", sceneNumber: 12, title: "1071 MALAZGİRT ZAFERİ (01:50–02:00)", duration: 10, imageUrl: "/assets/malazgirt/scene_12.jpg", visualPrompt: "Epic sunset over medieval Anatolian plains, mounted Seljuk silhouette, slow aerial pullback.", voiceText: "1071 Malazgirt Zaferi, Anadolu'nun sonraki yüzyıllardaki tarihini derinden etkiledi." }] }, lm = { scenes: [{ id: "fatih_scene_1", sceneNumber: 1, title: "GENÇ HÜKÜMDARIN VİZYONU (00:00–00:10)", duration: 10, imageUrl: "/assets/fatih1453/scene_1.jpg", visualPrompt: "Young Sultan Mehmed II, 21 years old, stands on a hill overlooking Constantinople at sunrise. Thousands of Ottoman soldiers stand behind him. His cloak moves in the wind. The camera slowly approaches his determined face.", voiceText: "Yıl 1453. Henüz 21 yaşındaki Fatih Sultan Mehmet, yüzyıllardır fethedilemeyen Konstantinopolis'i almak için büyük bir sefer başlattı." }, { id: "fatih_scene_2", sceneNumber: 2, title: "ORDU SURLARA İLERLİYOR (00:10–00:20)", duration: 10, imageUrl: "/assets/fatih1453/scene_2.jpg", visualPrompt: "A massive Ottoman army marches toward Constantinople. Thousands of cavalry and infantry soldiers carry historical Ottoman banners. Dust rises from the ground. Cinematic aerial camera movement reveals the enormous army.", voiceText: "Osmanlı ordusu şehrin önlerine ulaştı. Karşılarında devasa surlar, güçlü savunma hatları ve Bizans İmparatorluğu'nun son direnişi vardı." }, { id: "fatih_scene_3", sceneNumber: 3, title: "ŞAHİ TOPLARI HAZIRLANIYOR (00:20–00:30)", duration: 10, imageUrl: "/assets/fatih1453/scene_3.jpg", visualPrompt: "Ottoman soldiers prepare enormous medieval bombard cannons. Workers load heavy stone cannonballs. Close-up shots show the cannon mechanisms and soldiers preparing to fire.", voiceText: "Fatih, dönemin en güçlü kuşatma toplarını hazırlatmıştı. Bu dev silahlar, Konstantinopolis'in kalın surlarını yıkmak için kullanılacaktı." }, { id: "fatih_scene_4", sceneNumber: 4, title: "KUŞATMA BAŞLIYOR (00:30–00:40)", duration: 10, imageUrl: "/assets/fatih1453/scene_4.jpg", visualPrompt: "The Ottoman siege begins on April 6, 1453. Giant cannons fire against the massive Theodosian Walls. Explosions of dust and stone fill the battlefield. Byzantine defenders rush to reinforce damaged fortifications.", voiceText: "6 Nisan 1453'te kuşatma başladı. Osmanlı topları surları döverken, Bizans askerleri gedikleri kapatmak için gece gündüz çalışıyordu." }, { id: "fatih_scene_5", sceneNumber: 5, title: "HALİÇ'TEKİ DEV ZİNCİR (00:40–00:50)", duration: 10, imageUrl: "/assets/fatih1453/scene_5.jpg", visualPrompt: "Byzantine soldiers guard the entrance to the Golden Horn. A massive iron chain blocks Ottoman warships. The camera flies over the harbor, revealing medieval ships and Constantinople's defensive walls.", voiceText: "Ancak Haliç'in girişindeki dev zincir, Osmanlı donanmasının önünü kesiyordu. Fatih Sultan Mehmet beklenmedik bir plan hazırladı." }, { id: "fatih_scene_6", sceneNumber: 6, title: "GEMİLERİN KARADAN YÜRÜTÜLMESİ (00:50–01:00)", duration: 10, imageUrl: "/assets/fatih1453/scene_6.jpg", visualPrompt: "During the night, Ottoman sailors transport wooden warships across the hills above Galata using wooden tracks. Hundreds of workers pull ropes under torchlight. The camera follows the ships moving overland, then reveals Ottoman ships inside the Golden Horn at dawn.", voiceText: "Osmanlı gemileri, hazırlanan kızaklar üzerinde karadan taşındı. 22 Nisan sabahı Bizanslılar, Haliç'te Osmanlı gemilerini görünce şaşkına döndü." }, { id: "fatih_scene_7", sceneNumber: 7, title: "BİZANS'IN SON DİRENİŞİ (01:00–01:10)", duration: 10, imageUrl: "/assets/fatih1453/scene_7.jpg", visualPrompt: "Byzantine Emperor Constantine XI stands on the damaged city walls with armored soldiers. Smoke rises from the battlefield. The defenders prepare bows and swords while Ottoman cannons continue firing in the distance.", voiceText: "Bizans İmparatoru XI. Konstantinos teslim olmayı reddetti. Şehrin savunucuları, ağır bombardımana rağmen direnmeye devam ediyordu." }, { id: "fatih_scene_8", sceneNumber: 8, title: "SON SALDIRI EMRİ (01:10–01:20)", duration: 10, imageUrl: "/assets/fatih1453/scene_8.jpg", visualPrompt: "Sultan Mehmed II addresses Ottoman soldiers before the final assault. Thousands of soldiers stand with torches and banners in the darkness. Dramatic camera movement reveals their weapons and determined expressions.", voiceText: "Haftalar süren kuşatmanın ardından Fatih son saldırı için hazırlık yaptı. 29 Mayıs gecesi Osmanlı ordusu harekete geçti." }, { id: "fatih_scene_9", sceneNumber: 9, title: "29 MAYIS BÜYÜK TAARRUZ (01:20–01:30)", duration: 10, imageUrl: "/assets/fatih1453/scene_9.jpg", visualPrompt: "Before sunrise on May 29, Ottoman soldiers launch the final assault. Soldiers climb siege ladders, arrows fly through the air, and fierce fighting takes place near the damaged city walls. Dynamic cinematic camera movements capture the intense medieval battle without graphic violence.", voiceText: "Osmanlı askerleri dalgalar hâlinde surlara saldırdı. Çetin çatışmaların ardından savunma hatları çözüldü ve Osmanlı birlikleri şehre girmeye başladı." }, { id: "fatih_scene_10", sceneNumber: 10, title: "KONSTANTİNOPOLİS'İN DÜŞÜŞÜ (01:30–01:40)", duration: 10, imageUrl: "/assets/fatih1453/scene_10.jpg", visualPrompt: "Ottoman soldiers break through the Byzantine defenses and enter Constantinople. Historical Ottoman banners rise above the walls. The camera follows soldiers through the breached fortifications as sunlight illuminates the city.", voiceText: "29 Mayıs 1453'te Konstantinopolis fethedildi. Son Bizans İmparatoru XI. Konstantinos çatışmalarda hayatını kaybetti. Bizans İmparatorluğu sona erdi." }, { id: "fatih_scene_11", sceneNumber: 11, title: "FATİH ŞEHRE GİRİYOR (01:40–01:50)", duration: 10, imageUrl: "/assets/fatih1453/scene_11.jpg", visualPrompt: "Sultan Mehmed II enters Constantinople on horseback. Ottoman soldiers accompany him through medieval streets. Hagia Sophia appears in the distance. The camera slowly circles the young sultan in a majestic cinematic shot.", voiceText: "Fatih Sultan Mehmet, fethedilen şehre girdi. Konstantinopolis artık Osmanlı hâkimiyetindeydi ve imparatorluğun yeni başkenti olacaktı." }, { id: "fatih_scene_12", sceneNumber: 12, title: "1453 – İSTANBUL'UN FETHİ (01:50–02:00)", duration: 10, imageUrl: "/assets/fatih1453/scene_12.jpg", visualPrompt: "Epic aerial view of Constantinople in 1453 at sunset. Hagia Sophia dominates the skyline. The camera slowly rises above the ancient city, revealing the Bosphorus and the Golden Horn. End with a majestic cinematic shot and the title: 1453 – İSTANBUL'UN FETHİ.", voiceText: "İstanbul'un fethi, dünya tarihinde büyük bir dönüm noktası oldu. Fatih Sultan Mehmet'in adı, tarihin en önemli hükümdarları arasına yazıldı." }] }, am = { scenes: [{ id: "saladin_scene_1", sceneNumber: 1, title: "BÜYÜK HEDEF (00:00–00:10)", duration: 10, imageUrl: "/assets/saladin/scene_1.jpg", visualPrompt: "Cinematic close-up of Saladin in 1187, historical 12th-century Ayyubid Sultan, standing before his army at dawn, wind moving his cloak, determined expression, camera slowly pushes toward his face. Photorealistic medieval historical epic.", voiceText: "Yıl 1187. Kudüs yaklaşık 88 yıldır Haçlıların elindeydi. Selahaddin Eyyubi, bu hâkimiyete son vermek için harekete geçti." }, { id: "saladin_scene_2", sceneNumber: 2, title: "ORDU TOPLANIYOR (00:10–00:20)", duration: 10, imageUrl: "/assets/saladin/scene_2.jpg", visualPrompt: "Thousands of 12th-century Ayyubid soldiers and cavalry marching across dry Middle Eastern plains, fluttering yellow medieval banners, dust rising under horses, sweeping aerial camera moving over the army.", voiceText: "Selahaddin'in ordusu toplandı. Süvariler ve piyadeler, Kudüs Krallığı'nın güçlü Haçlı ordusuyla karşılaşmaya hazırlanıyordu." }, { id: "saladin_scene_3", sceneNumber: 3, title: "HAÇLILARIN YÜRÜYÜŞÜ (00:20–00:30)", duration: 10, imageUrl: "/assets/saladin/scene_3.jpg", visualPrompt: "Crusader King Guy of Lusignan leading exhausted medieval knights through a scorching dry landscape, heavy chainmail armor, red cross banners, harsh arid sunlight, heat haze, slow tracking shot.", voiceText: "Kudüs Kralı Guy de Lusignan, ordusuyla ilerledi. Fakat askerlerini yakıcı sıcak, susuzluk ve Selahaddin'in kuvvetleri bekliyordu." }, { id: "saladin_scene_4", sceneNumber: 4, title: "HITTİN SAVAŞI (00:30–00:40)", duration: 10, imageUrl: "/assets/saladin/scene_4.jpg", visualPrompt: "Battle of Hattin 1187, Ayyubid mounted archers encircling exhausted Crusader infantry, arid dry hills of Hattin, dust and battlefield smoke, wide overhead camera transitioning into battlefield tracking shot, intense realistic medieval combat.", voiceText: "4 Temmuz 1187. Hıttin'de Haçlı ordusu kuşatıldı. Susuz ve yorgun askerler, Selahaddin'in saldırıları karşısında zorlanıyordu." }, { id: "saladin_scene_5", sceneNumber: 5, title: "SÜVARİ HÜCUMU (00:40–00:50)", duration: 10, imageUrl: "/assets/saladin/scene_5.jpg", visualPrompt: "Fast-paced medieval cavalry charge, Ayyubid horsemen rushing across a dusty battlefield against Crusader knights, arrows flying overhead, swords clashing, dynamic low-angle tracking camera, realistic 12th-century armor.", voiceText: "Eyyubi süvarileri hücuma geçti. Oklar havada uçuştu, kılıçlar çarpıştı. Haçlı ordusunun safları birer birer çökmeye başladı." }, { id: "saladin_scene_6", sceneNumber: 6, title: "HITTİN ZAFERİ (00:50–01:00)", duration: 10, imageUrl: "/assets/saladin/scene_6.jpg", visualPrompt: "Aftermath of Battle of Hattin, victorious Saladin standing inside a medieval military command tent, captured Crusader King Guy escorted by guards, tense respectful atmosphere, warm torchlight, cinematic slow dolly shot.", voiceText: "Hıttin Savaşı, Selahaddin'in zaferiyle sonuçlandı. Kudüs Kralı Guy esir alındı. Artık Kudüs'e giden yol açılmıştı." }, { id: "saladin_scene_7", sceneNumber: 7, title: "KUDÜS'E YAKLAŞIM (01:00–01:10)", duration: 10, imageUrl: "/assets/saladin/scene_7.jpg", visualPrompt: "Ayyubid army arriving outside medieval Jerusalem in September 1187, towering ancient stone fortifications, siege equipment, thousands of soldiers, camera rising from mounted troops to reveal the sacred city skyline.", voiceText: "Selahaddin, diğer şehirleri ele geçirdikten sonra Kudüs'e yöneldi. Eylül ayında ordusu, kutsal şehrin surları önüne ulaştı." }, { id: "saladin_scene_8", sceneNumber: 8, title: "BALIAN KUDÜS'Ü SAVUNUYOR (01:10–01:20)", duration: 10, imageUrl: "/assets/saladin/scene_8.jpg", visualPrompt: "Balian of Ibelin standing on Jerusalem battlements in 1187, Crusader defenders preparing shields and bows, massive Muslim siege camp visible below, dramatic camera tracking along medieval stone walls.", voiceText: "Kudüs'ün savunmasını İbelinli Balian üstlenmişti. Surların üzerinde askerler hazırlanırken, kuşatma giderek şiddetlendi." }, { id: "saladin_scene_9", sceneNumber: 9, title: "KUŞATMA (01:20–01:30)", duration: 10, imageUrl: "/assets/saladin/scene_9.jpg", visualPrompt: "Medieval siege of Jerusalem 1187, Ayyubid stone-throwing trebuchets launching massive projectiles toward fortified stone walls, clouds of dust and flying debris, defenders sheltering behind battlements, dramatic ground-level camera movement.", voiceText: "Kuşatma makineleri surları dövmeye başladı. Selahaddin'in askerleri surlarda gedik açarken, şehrin savunması giderek zorlaşıyordu." }, { id: "saladin_scene_10", sceneNumber: 10, title: "TESLİM GÖRÜŞMELERİ (01:30–01:40)", duration: 10, imageUrl: "/assets/saladin/scene_10.jpg", visualPrompt: "Saladin and Balian of Ibelin negotiating the surrender of Jerusalem in 1187, inside medieval military tent, solemn diplomatic expressions, historical robes and chainmail, guards in background, slow cinematic camera orbit, warm realistic lighting.", voiceText: "Balian, Selahaddin'le teslimiyet şartlarını görüştü. Yapılan anlaşma sayesinde Kudüs, son bir büyük çatışmaya gerek kalmadan teslim edilecekti." }, { id: "saladin_scene_11", sceneNumber: 11, title: "2 EKİM 1187 (01:40–01:50)", duration: 10, imageUrl: "/assets/saladin/scene_11.jpg", visualPrompt: "October 2 1187, Saladin entering the ancient stone gates of Jerusalem with disciplined Ayyubid soldiers, yellow flags, medieval civilians watching with relief, dramatic golden sunlight piercing through ancient stone archways, sweeping cinematic tracking shot.", voiceText: "Ve 2 Ekim 1187'de Kudüs teslim edildi! Şehir, yaklaşık 88 yıl sonra yeniden Müslüman yönetimine geçmişti." }, { id: "saladin_scene_12", sceneNumber: 12, title: "TARİHİ FETİH (01:50–02:00)", duration: 10, imageUrl: "/assets/saladin/scene_12.jpg", visualPrompt: "Epic final scene, Saladin overlooking medieval Jerusalem and the iconic Dome of the Rock at sunset in 1187, cloak moving gently in the evening wind, camera slowly pulling back to reveal the ancient holy city, golden cinematic light, majestic historical documentary conclusion.", voiceText: "Bu fetih, Avrupa'da Üçüncü Haçlı Seferi'nin başlamasına yol açtı. Selahaddin Eyyubi ise tarihin unutulmaz hükümdarlarından biri oldu." }] };
function sm(e, t = 10, n = 12) {
    if (!e || !e.trim())
        return [];
    const r = lvNormScript(e.trim()), i = /(?:^|\n)[ \t]*(?:SCENE|SAHNE)\s*(\d+)[ \t:—–-]*(\([^)\n]+\))?([\s\S]*?)(?=\n[ \t]*(?:SCENE|SAHNE)\s*\d+|$)/gi, l = [...r.matchAll(i)];
    let a = [];
    const s = r.match(/(?:TURKISH NARRATION|TÜRKÇE SESLENDİRME|SESLENDİRME METNİ|SESLENDİRME)[\s:]*\n+([\s\S]+)$/i);
    if (s && (a = s[1].split(/\n\s*\n+/).map(k => k.trim()).filter(k => k.length > 5 && !k.toLowerCase().startsWith("scene") && !k.toLowerCase().startsWith("final"))), l.length > 0) {
        const k = [];
        if (l.forEach((v, p) => {
            const c = parseInt(v[1], 10) || p + 1;
            v[2];
            let f = v[3] ? v[3].trim() : "";
            f.includes("Final Production:") && (f = f.split(/Final Production:/i)[0].trim());
            let g = "", x = "", N = `SAHNE ${c}`;
            const E = f.split(`
`)[0];
            if (E.includes("—") || E.includes(" - ")) {
                const A = E.split(/[—\-]/);
                A[1] && (N = A[1].trim());
            }
            else
                E.trim() && !/^(GÖRSEL|VISUAL|PROMPT|SESLENDİRME|NARRATION|TURKISH)/i.test(E.trim()) && (N = E.trim().slice(0, 80));
            const T = f.match(/(?:^|\n)[ \t]*(?:VISUAL|GÖRSEL|PROMPT)[ \t]*:?[ \t]*([\s\S]+?)(?=\n[ \t]*(?:TURKISH NARRATION|NARRATION|TÜRKÇE SESLENDİRME|SESLENDİRME|SES|SCENE|SAHNE)\b|$)/i);
            T && (g = T[1].trim());
            const _ = f.match(/(?:^|\n)[ \t]*(?:TURKISH NARRATION|NARRATION|TÜRKÇE SESLENDİRME|SESLENDİRME|SES)[ \t]*:[ \t]*([\s\S]+?)(?=\n[ \t]*(?:VISUAL|GÖRSEL|PROMPT|SCENE|SAHNE)\b|$)/i);
            if (_ && (x = _[1].replace(/^[\s"“”']+|[\s"“”']+$/g, "").trim()), !g && !x) {
                const A = f.split(`
`).map(I => I.trim()).filter(I => I.length > 0);
                A.length === 1 ? (g = A[0], x = A[0]) : A.length >= 2 && (g = A[0], x = A.slice(1).join(" "));
            }
            else
                !x && a[p] ? x = a[p].replace(/^[\s"“”']+|[\s"“”']+$/g, "").trim() : !g && x && (g = x);
            k.push({ id: `custom_scene_${c}_${Date.now()}`, sceneNumber: c, title: N || `SAHNE ${c}`, duration: t, visualPrompt: g.replace(/["“”]/g, "").trim(), voiceText: x.replace(/["“”]/g, "").trim(), imageUrl: "" });
        }), k.length > 0)
            return k;
    }
    const u = /(?:^|\n)\s*(\d+)[\.)]\s*([^\n]+(?:\n(?!\d+[\.)])[^\n]+)*)/g, d = [...r.matchAll(u)];
    if (d.length >= 2)
        return d.map((k, v) => { const p = parseInt(k[1], 10) || v + 1, c = k[2].trim(); return { id: `custom_scene_${p}_${Date.now()}`, sceneNumber: p, title: `SAHNE ${p}`, duration: t, visualPrompt: c, voiceText: c, imageUrl: "" }; });
    const h = r.split(new RegExp("(?<=[.!?])\\s+|\\n\\s*\\n+")).map(k => k.trim()).filter(k => k.length > 8);
    if (h.length >= 3) {
        const k = Math.min(h.length, n);
        return h.slice(0, k).map((v, p) => ({ id: `custom_scene_${p + 1}_${Date.now()}`, sceneNumber: p + 1, title: `SAHNE ${p + 1}`, duration: t, visualPrompt: v, voiceText: v, imageUrl: "" }));
    }
    const m = r.replace(/[^\w\sğüşıöçĞÜŞİÖÇ]/gi, " ").trim(), y = [], S = n || 6, w = [{ prefix: "Başlangıç ve Hazırlık", textSuffix: "başlangıç aşaması, tarihsel hazırlıklar ve orduların toplanışı" }, { prefix: "Yürüyüş ve İlerleme", textSuffix: "büyük kuvvetlerin ilerleyişi, sancaklar ve stratejik mevzilenme" }, { prefix: "Karşılaşma ve Gerilim", textSuffix: "karşı karşıya gelinen an, gerilim ve stratejik hazırlıklar" }, { prefix: "İlk Çatışma ve Hücum", textSuffix: "ilk taarruz, atlı birliklerin hücumu ve taktik hamleler" }, { prefix: "Savaşın Şiddetlenmesi", textSuffix: "meydan mücadelesinin en kritik dakikaları, kalkanlar ve çatışma" }, { prefix: "Dönüm Noktası", textSuffix: "uygulanan zekice taktikle dengelerin değişmesi ve üstünlük" }, { prefix: "Kritik Hamle", textSuffix: "kararlı bir saldırıyla savunma hatlarının yarılması" }, { prefix: "Çözülme ve Geri Çekilme", textSuffix: "rakip safların çözülmesi ve kontrolün tamamen ele geçmesi" }, { prefix: "Son Taarruz", textSuffix: "son kararlı taarruz ve zaferin kesinleştiği an" }, { prefix: "Zafer Anı", textSuffix: "muzaffer komutanlar, dalgalanan bayraklar ve büyük zafer" }, { prefix: "Tarihe Geçen Başarı", textSuffix: "coğrafyaya ve milletin kaderine mühür vuran tarihi başarı" }, { prefix: "Tarihi Miras ve Zafer", textSuffix: "nesiller boyu unutulmayacak tarihi miras ve ebedi zafer" }];
    for (let k = 0; k < S; k++) {
        const v = w[k % w.length], p = k + 1;
        y.push({ id: `custom_scene_${p}_${Date.now()}`, sceneNumber: p, title: `${v.prefix} (SAHNE ${p})`, duration: t, visualPrompt: `${m}, ${v.textSuffix}, sinematik epik çekim, 4K, 9:16 dikey`, voiceText: `${m} mücadelesinde ${v.textSuffix.toLowerCase()}.`, imageUrl: "" });
    }
    return y;
}
const om = [{ keywords: ["alparslan", "alp arslan", "malazgirt", "romen diyojen", "romanos", "1071", "selçuklu", "seljuk"], basePath: "/assets/malazgirt/scene_" }, { keywords: ["fatih", "mehmed", "1453", "konstantinopolis", "istanbul", "şahi top", "haliç", "galata", "konstantinos"], basePath: "/assets/fatih1453/scene_" }, { keywords: ["selahaddin", "saladin", "1187", "kudüs", "jerusalem", "hıttin", "hattin", "balian", "lusignan"], basePath: "/assets/saladin/scene_" }];
function um(e) { if (!e)
    return ""; const t = /\b(cinematic|photorealistic|close-up|aerial|wide shot|shot|drone|camera|slowly|pushes|moves|4k|8k|ultra-detailed|epic|masterpiece|lighting|atmosphere|scene|sahne|sinematik|çekim|kamera|yakın çekim|detaylı|fotogerçekçi|görsel|prompt|years|old|stands|behind|look|around|toward|stands on|overlooking)\b/gi; return e.replace(t, " ").replace(/[^\w\sğüşıöçĞÜŞİÖÇ]/gi, " ").trim().split(/\s+/).filter(i => i.length > 2 && isNaN(i)).slice(0, 4).join(" "); }
async function cm(e) { var t, n, r, i, l, a, s, u, d, h; try {
    const m = um(e);
    if (!m)
        return null;
    const y = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(m)}&gsrlimit=5&prop=imageinfo&iiprop=url|mime&format=json&origin=*`, S = await fetch(y, { headers: { "User-Agent": "VideoCreatorStudio/1.0" } });
    if (S.ok) {
        const c = await S.json();
        if (c.query && c.query.pages) {
            const f = Object.values(c.query.pages);
            for (const g of f) {
                const x = (t = g.imageinfo) == null ? void 0 : t[0];
                if (x && x.url && ((n = x.mime) != null && n.includes("jpeg") || (r = x.mime) != null && r.includes("png") || (i = x.mime) != null && i.includes("jpg")))
                    return x.url;
            }
        }
    }
    const w = `https://tr.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(m)}&utf8=&format=json&origin=*`, k = await fetch(w, { headers: { "User-Agent": "VideoCreatorStudio/1.0" } });
    if (k.ok) {
        const c = await k.json();
        if ((a = (l = c.query) == null ? void 0 : l.search) != null && a[0]) {
            const f = c.query.search[0].title, g = `https://tr.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(f)}&prop=pageimages&piprop=original&format=json&origin=*`, x = await fetch(g, { headers: { "User-Agent": "VideoCreatorStudio/1.0" } });
            if (x.ok) {
                const N = await x.json(), E = Object.values(N.query.pages)[0];
                if ((s = E == null ? void 0 : E.original) != null && s.source)
                    return E.original.source;
            }
        }
    }
    const v = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(m)}&utf8=&format=json&origin=*`, p = await fetch(v, { headers: { "User-Agent": "VideoCreatorStudio/1.0" } });
    if (p.ok) {
        const c = await p.json();
        if ((d = (u = c.query) == null ? void 0 : u.search) != null && d[0]) {
            const f = c.query.search[0].title, g = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(f)}&prop=pageimages&piprop=original&format=json&origin=*`, x = await fetch(g, { headers: { "User-Agent": "VideoCreatorStudio/1.0" } });
            if (x.ok) {
                const N = await x.json(), E = Object.values(N.query.pages)[0];
                if ((h = E == null ? void 0 : E.original) != null && h.source)
                    return E.original.source;
            }
        }
    }
}
catch (m) {
    console.warn("Wikimedia search skipped:", m.message);
} return null; }
function dm(e, t = 1) { const n = document.createElement("canvas"); n.width = 1080, n.height = 1920; const r = n.getContext("2d"), i = [["#0f172a", "#1e293b", "#3b82f6", "#f59e0b"], ["#18181b", "#27272a", "#ef4444", "#f97316"], ["#052e16", "#14532d", "#10b981", "#fbbf24"], ["#2e1065", "#3b0764", "#8b5cf6", "#ec4899"], ["#451a03", "#78350f", "#f59e0b", "#fef08a"]], l = i[(t - 1) % i.length], a = r.createLinearGradient(0, 0, 0, 1920); a.addColorStop(0, l[0]), a.addColorStop(.5, l[1]), a.addColorStop(1, "#07080c"), r.fillStyle = a, r.fillRect(0, 0, 1080, 1920); const s = 550 + t * 70 % 500, u = r.createRadialGradient(540, s, 20, 540, s, 700); u.addColorStop(0, "rgba(255, 255, 255, 0.4)"), u.addColorStop(.2, l[2] + "44"), u.addColorStop(.6, l[3] + "22"), u.addColorStop(1, "transparent"), r.fillStyle = u, r.fillRect(0, 0, 1080, 1920); for (let d = 0; d < 4; d++) {
    r.fillStyle = `rgba(15, 23, 42, ${.4 + d * .2})`, r.beginPath(), r.moveTo(0, 1920);
    const h = 1100 + d * 150;
    r.lineTo(0, h);
    for (let m = 0; m <= 1080; m += 60) {
        const y = h + Math.sin((m + d * 120 + t * 90) * .008) * (80 - d * 15);
        r.lineTo(m, y);
    }
    r.lineTo(1080, 1920), r.closePath(), r.fill();
} r.fillStyle = "rgba(255, 255, 255, 0.6)"; for (let d = 0; d < 45; d++) {
    const h = Math.sin(d * 99 + t) * 540 + 540, m = Math.cos(d * 77 + t) * 960 + 960, y = (Math.sin(d * 33) + 1.5) * 2;
    r.beginPath(), r.arc(h, m, y, 0, Math.PI * 2), r.fill();
} return n.toDataURL("image/jpeg", .9); }
async function Yc(e, t = 1) { const n = (e || "").toLowerCase(); for (const i of om)
    if (i.keywords.some(l => n.includes(l))) {
        const l = Math.min(12, Math.max(1, t));
        return `${i.basePath}${l}.png`;
    } if (SX.studio.imageSource === "ai") {
    const u0 = sxImageUrl(e, Math.floor(Math.random() * 1e6)), q0 = await Di(u0);
    if (q0.success)
        return u0;
} const r = await cm(e); return r || dm(e, t); }
async function fm(e, t = () => { }) { const n = []; for (let r = 0; r < e.length; r++) {
    const i = e[r], l = i.sceneNumber || r + 1;
    t(`Sahne ${l}/${e.length} görseli hazırlanıyor...`, Math.floor(r / e.length * 100));
    let a = i.imageUrl;
    (!a || a.trim() === "") && (a = await Yc(i.visualPrompt || i.voiceText || i.title, l)), await Di(a), n.push({ ...i, imageUrl: a });
} return t("Tüm görseller hazırlandı!", 100), n; }
class pm {
    constructor() { this.audioCache = new Map; }
    splitIntoChunks(t, n = 130) { if (!t || !t.trim())
        return []; const r = t.replace(/["“”]/g, "").trim(), i = r.match(/[^.!?]+[.!?]*/g) || [r], l = []; for (const a of i) {
        const s = a.trim();
        if (s.length <= n)
            l.push(s);
        else {
            const u = s.split(/\s+/);
            let d = "";
            for (const h of u)
                (d + " " + h).length <= n ? d = d ? d + " " + h : h : (d && l.push(d), d = h);
            d && l.push(d);
        }
    } return l; }
    concatAudioBuffers(t, n) { if (!t || t.length === 0)
        return null; if (t.length === 1)
        return t[0]; const r = t.reduce((s, u) => s + u.length, 0), i = t[0].numberOfChannels || 1, l = t[0].sampleRate || 44100, a = n.createBuffer(i, r, l); for (let s = 0; s < i; s++) {
        const u = a.getChannelData(s);
        let d = 0;
        for (const h of t)
            u.set(h.getChannelData(Math.min(s, h.numberOfChannels - 1)), d), d += h.length;
    } return a; }
    createSilentBuffer(t, n = 1) { const b = t.createBuffer(1, Math.floor(t.sampleRate * n), t.sampleRate); b.__silent = !0; return b; }
    chime(t, n, r, i = 880) { try {
        [[i, 0], [i * 1.5, .07]].forEach(([l, a]) => { const s = t.createOscillator(), u = t.createGain(); s.type = "sine", s.frequency.setValueAtTime(l, r + a), u.gain.setValueAtTime(1e-4, r + a), u.gain.exponentialRampToValueAtTime(.22, r + a + .015), u.gain.exponentialRampToValueAtTime(1e-4, r + a + .35), s.connect(u), u.connect(n), s.start(r + a), s.stop(r + a + .4); });
    }
    catch { } }
    async fetchRecorded(t) { this.recCache = this.recCache || new Map; if (this.recCache.has(t))
        return this.recCache.get(t); try {
        const n = await sxDecodeDataUrl(t, this.getDecodeContext());
        return this.recCache.size > 40 && this.recCache.delete(this.recCache.keys().next().value), this.recCache.set(t, n), n;
    }
    catch (n) {
        return console.warn("Kayıt çözülemedi:", n), null;
    } }
    startCustomBGM(t, n, r, i) { if (!SX.musicBuffer)
        return () => { }; const l = t.createBufferSource(), a = t.createGain(); l.buffer = SX.musicBuffer, l.loop = !0, l.connect(a), a.connect(n), a.gain.setValueAtTime(1, i + Math.max(0, r - 2.5)), a.gain.linearRampToValueAtTime(1e-4, i + r), l.start(i), l.stop(i + r + .1); return () => { try {
        l.stop();
    }
    catch { } }; }
    scheduleDuck(t, n, r, i, l) { let a = 0; t.gain.setValueAtTime(n, r); for (let s = 0; s < i.length; s++) {
        const u = l[s];
        if (u && u.duration > .1 && !u.__silent) {
            const d = r + a + .3, h = d + u.duration;
            t.gain.setTargetAtTime(n * .3, Math.max(r, d - .25), .08), t.gain.setTargetAtTime(n, h + .15, .3);
        }
        a += i[s].duration || 10;
    } }
    getDecodeContext() { return this.decodeCtx || (this.decodeCtx = new OfflineAudioContext(1, 1, 44100)); }
    async measureScenes(t, n = () => { }) { const r = []; for (let i = 0; i < t.length; i++) {
        const l = t[i], a = (l.voiceText || l.text || "").trim();
        n(`Sahne ${i + 1}/${t.length} seslendirmesi ölçülüyor...`, Math.floor(i / t.length * 100));
        if (!a && !l.voiceAudio) {
            r.push(null);
            continue;
        }
        const u = l.voiceAudio ? await this.fetchRecorded(l.voiceAudio) : await this.fetchVoiceBuffer(a, this.getDecodeContext());
        r.push(u && !u.__silent ? u.duration : null);
    } return r; }
    async fetchVoiceBuffer(t, n) { if (!t || !t.trim())
        return this.createSilentBuffer(n, .5); const r0 = t.trim(), vo = Vg.voice || "google", ra = vo === "google" ? 1 : Vg.rate || 1, r = vo + "|" + ra + "|" + r0; if (this.audioCache.has(r))
        return this.audioCache.get(r); const i = this.splitIntoChunks(r0, vo === "google" ? 130 : 900), l = []; for (const s of i)
        try {
            const u = `/api/tts?q=${encodeURIComponent(s)}&tl=tr&voice=${encodeURIComponent(vo)}&rate=${ra}`, d = await fetch(u);
            if (d.ok) {
                const h = await d.arrayBuffer(), m = await n.decodeAudioData(h.slice(0));
                l.push(m);
            }
        }
        catch (u) {
            console.warn("TTS chunk fetch failed, skipping chunk:", s, u);
        } let a; return l.length > 0 ? a = this.concatAudioBuffers(l, n) : a = this.createSilentBuffer(n, 1), a.__silent || this.audioCache.set(r, a), a; }
    startProceduralBGM(t, n, r, i = "cinematic") { const l = { cinematic: [[110, 164.81, 220, 261.63], [87.31, 130.81, 174.61, 261.63], [130.81, 196, 261.63, 329.63], [98, 146.83, 196, 246.94]], motivational: [[130.81, 196, 261.63, 329.63], [146.83, 220, 261.63, 349.23], [174.61, 220, 261.63, 329.63], [196, 246.94, 293.66, 392]] }, a = l[i] || l.cinematic, s = 4, u = Math.ceil(r / s) + 2, d = []; for (let h = 0; h < u; h++) {
        const m = t.currentTime + h * s, y = a[h % a.length];
        y.forEach((S, w) => { const k = t.createOscillator(), v = t.createGain(), p = t.createBiquadFilter(); k.type = w === 0 ? "sine" : "triangle", k.frequency.setValueAtTime(S, m), p.type = "lowpass", p.frequency.setValueAtTime(500, m), v.gain.setValueAtTime(.001, m), v.gain.exponentialRampToValueAtTime(.08 / y.length, m + 1), v.gain.exponentialRampToValueAtTime(.001, m + s), k.connect(p), p.connect(v), v.connect(n), k.start(m), k.stop(m + s), d.push(k); });
    } return () => { d.forEach(h => { try {
        h.stop();
    }
    catch { } }); }; }
    async createSynchronizedSoundtrack(t, n = {}) { const { bgmTrack: r = "cinematic", bgmVolume: i = .3, onProgress: l = () => { } } = n, a = window.AudioContext || window.webkitAudioContext, s = new a; s.state === "suspended" && await s.resume(); const u = s.createMediaStreamDestination(), d = s.createGain(); d.gain.value = 1, d.connect(u); const h = s.createGain(); h.gain.value = i, h.connect(u); const m = []; for (let v = 0; v < t.length; v++) {
        const p = t[v], c = p.voiceText || p.text || "";
        l(`Sahne ${v + 1}/${t.length} seslendirmesi hazırlanıyor...`, Math.floor(v / t.length * 40));
        const f = p.voiceAudio ? await this.fetchRecorded(p.voiceAudio) : await this.fetchVoiceBuffer(c, s);
        m.push(f);
    } l("Tüm seslendirmeler hazırlandı, kayıt başlatılıyor...", 45); const S = [], w = t.reduce((v, p) => v + (p.duration || 10), 0); let k = () => { }; const begin = () => { const T0 = s.currentTime; let y = 0; for (let v = 0; v < t.length; v++) {
        const c = t[v].duration || 10, f = m[v];
        if (f && f.duration > .1) {
            const g = s.createBufferSource();
            g.buffer = f, g.connect(d), g.start(T0 + y + .3), S.push(g);
        }
        t[v].isIntro && this.chime(s, d, T0 + y + .3, 659.25), t[v].isOutro && (this.chime(s, d, T0 + y + 1.7, 880), this.chime(s, d, T0 + y + 2.6, 1046.5));
        y += c;
    } r === "custom" ? k = this.startCustomBGM(s, h, w, T0) : r !== "none" && (k = this.startProceduralBGM(s, h, w, r)), SX.studio.duck && r !== "none" && this.scheduleDuck(h, i, T0, t, m); }; return { stream: u.stream, audioCtx: s, totalDuration: w, begin, stop: () => { S.forEach(v => { try {
            v.stop();
        }
        catch { } }), k(); try {
            s.close();
        }
        catch { } } }; }
}
const mm = new pm;
const Xfmt = typeof MediaRecorder < "u" && (MediaRecorder.isTypeSupported("video/mp4;codecs=avc1,mp4a.40.2") || MediaRecorder.isTypeSupported("video/mp4;codecs=avc1.640028,mp4a.40.2")) ? "MP4" : "WebM";
const Vg = { mode: "audio", voice: "edge:tr-TR-AhmetNeural", rate: 1, ctx: null, src: null, token: 0,
    stop() { this.token++; if (this.src) {
        try {
            this.src.stop();
        }
        catch { }
        this.src = null;
    } },
    async play(t, off = 0) { this.stop(); const n = ++this.token; if (!this.ctx) {
        const r = window.AudioContext || window.webkitAudioContext;
        this.ctx = new r;
    } this.ctx.state === "suspended" && await this.ctx.resume(); const r = typeof t == "object" && t ? t.voiceAudio ? await mm.fetchRecorded(t.voiceAudio) : await mm.fetchVoiceBuffer(t.voiceText || t.text || "", this.ctx) : await mm.fetchVoiceBuffer(t, this.ctx); if (n !== this.token)
        return !0; if (!r || r.__silent)
        return !1; if (off >= r.duration)
        return !0; const i = this.ctx.createBufferSource(); i.buffer = r, i.connect(this.ctx.destination), i.start(0, Math.max(0, off)), this.src = i, Dn.duck(!0), i.onended = () => { this.src === i && Dn.duck(!1); }; return !0; } };
function sayTxt(t) { return typeof t == "object" && t ? t.voiceText || t.text || "" : t || ""; }
function say(t) { const n = sayTxt(t), r = typeof t == "object" && t && t.voiceAudio; if (!r && !n.trim())
    return; if (Vg.mode === "audio" || r) {
    be.stop(), Vg.play(t).then(i => { i || r || be.speak(n); }).catch(() => r || be.speak(n));
}
else
    Vg.stop(), be.speak(n); }
let sayTimer = null;
function sayLater(t, n) { clearTimeout(sayTimer), sayTimer = setTimeout(() => say(t), n); }
function sayAt(t, n) { clearTimeout(sayTimer); const r = typeof t == "object" && t && t.voiceAudio; if (!r && !sayTxt(t).trim())
    return; if (n < 0)
    return sayLater(t, -n * 1e3); Vg.mode === "audio" || r ? (be.stop(), Vg.play(t, n).catch(() => { })) : n < .5 && (Vg.stop(), be.speak(sayTxt(t))); }
function hush() { clearTimeout(sayTimer), Vg.stop(), be.stop(); }
class hm {
    constructor() { this.synth = typeof window < "u" ? window.speechSynthesis : null, this.voices = [], this.selectedVoice = null, this.rate = 1, this.pitch = 1, this.initVoices(); }
    initVoices() { if (!this.synth)
        return; const t = () => { this.voices = this.synth.getVoices(); const n = this.voices.find(r => r.lang.includes("tr") || r.lang.includes("TR")); n ? this.selectedVoice = n : this.voices.length > 0 && (this.selectedVoice = this.voices[0]); }; t(), this.synth.onvoiceschanged !== void 0 && (this.synth.onvoiceschanged = t); }
    getTurkishVoices() { return this.voices.filter(t => t.lang.includes("tr") || t.lang.includes("TR")); }
    getAllVoices() { return this.voices; }
    setVoice(t) { const n = this.voices.find(r => r.voiceURI === t); n && (this.selectedVoice = n); }
    estimateDuration(t) { if (!t || !t.trim())
        return 3.5; const n = t.trim().split(/\s+/).length, r = Math.max(3, (n * .45 + 1.2) / (this.rate || 1)); return parseFloat(r.toFixed(1)); }
    speak(t, n, r, i) { if (!this.synth) {
        n && n(), r && setTimeout(r, this.estimateDuration(t) * 1e3);
        return;
    } this.stop(); const l = new SpeechSynthesisUtterance(t); this.selectedVoice ? l.voice = this.selectedVoice : l.lang = "tr-TR", l.rate = this.rate, l.pitch = this.pitch, n && (l.onstart = n), r && (l.onend = r), i && (l.onboundary = i), l.onerror = a => { console.warn("TTS error or cancelled:", a), r && r(); }, this.synth.speak(l); }
    stop() { this.synth && this.synth.speaking && this.synth.cancel(); }
    pause() { this.synth && this.synth.speaking && this.synth.pause(); }
    resume() { this.synth && this.synth.paused && this.synth.resume(); }
}
const be = new hm;
class ym {
    constructor() { this.ctx = null, this.bgmGain = null, this.isPlaying = !1, this.currentTrack = "motivational", this.oscNodes = [], this.intervalId = null; }
    init() { if (!this.ctx && typeof window < "u") {
        const t = window.AudioContext || window.webkitAudioContext;
        this.ctx = new t, this.bgmGain = this.ctx.createGain(), this.bgmGain.gain.value = .25, this.bgmGain.connect(this.ctx.destination);
    } this.ctx && this.ctx.state === "suspended" && this.ctx.resume(); }
    setVolume(t) { this.bgmGain && this.bgmGain.gain.linearRampToValueAtTime(Math.max(0, Math.min(1, t)), this.ctx.currentTime + .1); }
    playBGM(t = "motivational", n = .25) { if (this.stopBGM(), t === "none")
        return; if (this.init(), this.currentTrack = t, this.isPlaying = !0, this.baseVol = n, this.setVolume(n), t === "custom") {
        if (SX.musicBuffer) {
            const s = this.ctx.createBufferSource();
            s.buffer = SX.musicBuffer, s.loop = !0, s.connect(this.bgmGain), s.start(), this.customSrc = s;
        }
        return;
    } const r = { motivational: [[130.81, 196, 261.63, 329.63], [146.83, 220, 261.63, 349.23], [174.61, 220, 261.63, 329.63], [196, 246.94, 293.66, 392]], cinematic: [[110, 164.81, 220, 261.63], [87.31, 130.81, 174.61, 261.63], [130.81, 196, 261.63, 329.63], [98, 146.83, 196, 246.94]], lofi: [[146.83, 174.61, 220, 261.63], [196, 246.94, 293.66, 349.23], [130.81, 164.81, 196, 246.94]], cyberpunk: [[73.42, 110, 146.83, 220], [65.41, 98, 130.81, 196], [55, 82.41, 110, 164.81]] }, i = r[t] || r.motivational; let l = 0; const a = () => { if (!this.isPlaying || !this.ctx)
        return; const s = i[l]; l = (l + 1) % i.length, s.forEach((u, d) => { const h = this.ctx.createOscillator(), m = this.ctx.createGain(), y = this.ctx.createBiquadFilter(); h.type = d === 0 ? "sine" : t === "cyberpunk" ? "sawtooth" : "triangle", h.frequency.setValueAtTime(u, this.ctx.currentTime), y.type = "lowpass", y.frequency.setValueAtTime(t === "cyberpunk" ? 800 : 450, this.ctx.currentTime); const S = this.ctx.currentTime, w = 4; m.gain.setValueAtTime(.001, S), m.gain.exponentialRampToValueAtTime(.08 / s.length, S + 1.2), m.gain.exponentialRampToValueAtTime(.001, S + w), h.connect(y), y.connect(m), m.connect(this.bgmGain), h.start(S), h.stop(S + w); }); }; a(), this.intervalId = setInterval(a, 3800); }
    duck(t) { if (!this.ctx || !this.bgmGain || !this.isPlaying || !SX.studio.duck)
        return; this.bgmGain.gain.cancelScheduledValues(this.ctx.currentTime), this.bgmGain.gain.setTargetAtTime((this.baseVol ?? .25) * (t ? .3 : 1), this.ctx.currentTime, t ? .08 : .35); }
    stopBGM() { if (this.customSrc) {
        try {
            this.customSrc.stop();
        }
        catch { }
        this.customSrc = null;
    } this.isPlaying = !1, this.intervalId && (clearInterval(this.intervalId), this.intervalId = null); }
    getDestinationStream() { this.ctx || this.init(); const t = this.ctx.createMediaStreamDestination(); return this.bgmGain && this.bgmGain.connect(t), t.stream; }
}
const Dn = new ym;
class gm {
    constructor(t, n = {}) { this.canvas = t, this.ctx = t.getContext("2d", { alpha: !1 }), this.aspectRatio = n.aspectRatio || "portrait", this.subtitleStyle = n.subtitleStyle || "mrbeast", this.width = this.aspectRatio === "portrait" ? 1080 : 1920, this.height = this.aspectRatio === "portrait" ? 1920 : 1080, this.canvas.width = this.width, this.canvas.height = this.height, this.subtitlesEnabled = n.subtitlesEnabled !== void 0 ? n.subtitlesEnabled : !0, this.loadedImages = new Map, this.loadedVideos = new Map, this.isRendering = !1; }
    setAspectRatio(t) { this.aspectRatio = t, this.width = t === "portrait" ? 1080 : 1920, this.height = t === "portrait" ? 1920 : 1080, this.canvas.width = this.width, this.canvas.height = this.height; }
    setSubtitleStyle(t) { this.subtitleStyle = t; }
    setSubtitlesEnabled(t) { this.subtitlesEnabled = t; }
    async preloadScenes(t) { for (const n of t)
        if (n.videoUrl && !this.loadedVideos.has(n.videoUrl) && await this.loadVideoElement(n.videoUrl), n.imageUrl && !this.loadedImages.has(n.imageUrl)) {
            const r = await Di(n.imageUrl);
            r.img && this.loadedImages.set(n.imageUrl, r.img);
        } }
    loadVideoElement(t) { return new Promise(n => { const r = document.createElement("video"); r.crossOrigin = "anonymous", r.muted = !0, r.loop = !0, r.playsInline = !0, r.preload = "auto"; let i = !1; const l = () => { i || (i = !0, this.loadedVideos.set(t, r), n(r)); }; r.onloadeddata = l, r.oncanplay = l, r.onerror = a => { console.warn("Video failed to load:", t, a), i || (i = !0, n(null)); }, setTimeout(() => { i || (i = !0, this.loadedVideos.set(t, r), n(r)); }, 3e3), r.src = t, r.load(); }); }
    playSceneVideo(t) { if (!t || !t.videoUrl)
        return; const n = this.loadedVideos.get(t.videoUrl); n && n.paused && n.play().catch(() => { }); }
    pauseAllVideos() { this.loadedVideos.forEach(t => { t.paused || t.pause(); }); }
    renderFrame(t, n = 0, r = 0) { var h, m, y; const { ctx: i, width: l, height: a } = this; if (!i || !t)
        return; if (t.isOutro)
        return this.drawOutro(n, t); if (t.isIntro)
        return this.drawIntro(n, t); i.fillStyle = "#07080c", i.fillRect(0, 0, l, a); let s = !1; if (t.videoUrl) {
        const S = this.loadedVideos.get(t.videoUrl);
        if (S && S.readyState >= 2) {
            i.save();
            const w = S.videoWidth || 1920, k = S.videoHeight || 1080, v = w / k, p = l / a;
            let c, f;
            v > p ? (f = a, c = a * v) : (c = l, f = l / v), i.translate(l / 2, a / 2), i.drawImage(S, -c / 2, -f / 2, c, f), i.restore(), s = !0;
        }
    } if (!s) {
        const S = this.loadedImages.get(t.imageUrl);
        if (S && S.complete) {
            i.save();
            const k = r % 2 === 0 ? 1 + n * .12 : 1.12 - n * .12, v = Math.sin(n * Math.PI) * (l * .03) * (r % 2 === 0 ? 1 : -1), p = Math.cos(n * Math.PI) * (a * .02);
            i.translate(l / 2 + v, a / 2 + p), i.scale(k, k);
            const c = S.width / S.height, f = l / a;
            let g, x;
            c > f ? (x = a, g = a * c) : (g = l, x = l / c), i.drawImage(S, -g / 2, -x / 2, g, x), i.restore(), s = !0;
        }
    } if (!s) {
        const S = i.createLinearGradient(0, 0, l, a);
        S.addColorStop(0, "#111827"), S.addColorStop(1, "#1e1b4b"), i.fillStyle = S, i.fillRect(0, 0, l, a);
    } i.save(); const u = i.createRadialGradient(l / 2, a / 2, l * .35, l / 2, a / 2, l * .75); u.addColorStop(0, "rgba(0,0,0,0.05)"), u.addColorStop(1, "rgba(0,0,0,0.55)"), i.fillStyle = u, i.fillRect(0, 0, l, a); const d = i.createLinearGradient(0, a * .55, 0, a); if (d.addColorStop(0, "rgba(0,0,0,0)"), d.addColorStop(1, "rgba(0,0,0,0.8)"), i.fillStyle = d, i.fillRect(0, a * .55, l, a * .45), i.restore(), this.subtitlesEnabled) {
        const S = t.voiceText || t.text || "";
        S && S.trim() && this.drawSubtitles(S, this.subtitleProgress(t, n));
    } if ((h = t.id) != null && /^(malazgirt|fatih|saladin)_scene_12$/.test(h)) {
        i.save();
        const S = Math.min(1, Math.max(0, (n - .15) * 2));
        if (S > 0) {
            i.globalAlpha = S, i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = "rgba(0, 0, 0, 0.65)";
            const w = l * .88, k = 175;
            i.beginPath(), i.roundRect(l / 2 - w / 2, a * .42 - k / 2, w, k, 20), i.fill(), i.strokeStyle = "rgba(245, 158, 11, 0.65)", i.lineWidth = 3, i.stroke(), i.shadowColor = "rgba(245, 158, 11, 0.9)", i.shadowBlur = 24, i.font = '900 60px "Outfit", "Inter", sans-serif';
            const v = i.createLinearGradient(l / 2 - 250, 0, l / 2 + 250, 0);
            v.addColorStop(0, "#fef08a"), v.addColorStop(.5, "#fbbf24"), v.addColorStop(1, "#f59e0b"), i.fillStyle = v;
            let p = "1071 – MALAZGİRT ZAFERİ", c = "SULTAN ALPARSLAN";
            (m = t.id) != null && m.includes("fatih") ? (p = "1453 – İSTANBUL'UN FETHİ", c = "FATİH SULTAN MEHMET") : (y = t.id) != null && y.includes("saladin") && (p = "1187 – KUDÜS'ÜN FETHİ", c = "SELAHADDİN EYYUBİ"), i.fillText(p, l / 2, a * .4), i.shadowBlur = 0, i.font = '700 28px "Outfit", "Inter", sans-serif', i.fillStyle = "#fef3c7", i.letterSpacing = "4px", i.fillText(c, l / 2, a * .455);
        }
        i.restore();
    } this.drawOverlays(t, n); }
    drawSubtitles(t, n) { const { ctx: r, width: i, height: l, subtitleStyle: a } = this, s = t.trim().split(/\s+/); if (s.length === 0)
        return; const u = Math.min(s.length - 1, Math.floor(n * s.length * 1.1)); r.save(); const d = this.aspectRatio === "portrait", h = d ? l * .72 : l * .82, m = d ? 54 : 48, y = i * .85; r.font = `800 ${m}px "Outfit", "Inter", sans-serif`, r.textAlign = "center", r.textBaseline = "middle"; const S = []; let w = [], k = 0; for (let f = 0; f < s.length; f++) {
        const g = s[f], x = r.measureText(g + " ");
        k + x.width > y && w.length > 0 ? (S.push(w), w = [{ word: g, index: f }], k = x.width) : (w.push({ word: g, index: f }), k += x.width);
    } w.length > 0 && S.push(w); const v = m * 1.35, p = S.length * v, c = h - p / 2; S.forEach((f, g) => { const x = c + g * v, N = f.map(_ => _.word).join(" "), E = r.measureText(N).width; let T = (i - E) / 2; f.forEach(({ word: _, index: A }) => { const I = _ + " ", te = r.measureText(I).width, M = T + te / 2, D = A === u; if (a === "mrbeast") {
        if (r.save(), D) {
            r.fillStyle = "#f59e0b";
            const H = te * .96, ce = m * 1.15;
            this.roundRect(r, T, x - ce / 2, H, ce, 8), r.fill(), r.fillStyle = "#000000", r.fillText(_, M - (te - r.measureText(_).width) / 2, x);
        }
        else
            r.strokeStyle = "#000000", r.lineWidth = 8, r.strokeText(_, M - (te - r.measureText(_).width) / 2, x), r.fillStyle = "#ffffff", r.fillText(_, M - (te - r.measureText(_).width) / 2, x);
        r.restore();
    }
    else
        a === "neon" ? (r.save(), D ? (r.shadowColor = "#06b6d4", r.shadowBlur = 24, r.fillStyle = "#22d3ee") : (r.shadowColor = "#a855f7", r.shadowBlur = 10, r.fillStyle = "#ffffff"), r.fillText(_, M - (te - r.measureText(_).width) / 2, x), r.restore()) : a === "cinematic" ? (r.save(), r.font = `600 ${m * .85}px "Inter", sans-serif`, r.shadowColor = "rgba(0,0,0,0.9)", r.shadowBlur = 12, r.fillStyle = D ? "#fbbf24" : "#f8fafc", r.fillText(_, M - (te - r.measureText(_).width) / 2, x), r.restore()) : (r.save(), r.fillStyle = D ? "#a5b4fc" : "#ffffff", r.fillText(_, M - (te - r.measureText(_).width) / 2, x), r.restore()); T += te; }); }), r.restore(); }
    drawOutro(p, t) { const c = this.ctx, W = this.width, H = this.height, D = t.duration || 5, T = p * D, u = Math.min(W, H) / 1080, cx = W / 2, portrait = H > W, cl = x => Math.min(1, Math.max(0, x)), back = x => { x = cl(x); const k = 1.70158; return 1 + (k + 1) * Math.pow(x - 1, 3) + k * Math.pow(x - 1, 2); }, eio = x => { x = cl(x); return x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }, F = '"Outfit", "Inter", sans-serif';
        c.save(), c.fillStyle = "#07080c", c.fillRect(0, 0, W, H);
        const img = this.loadedImages.get(t.imageUrl);
        if (img && img.complete && img.width) {
            c.filter = "blur(26px) brightness(0.38) saturate(1.25)";
            const ar = img.width / img.height, cr = W / H, z = 1.12 + p * .06;
            let dw, dh;
            ar > cr ? (dh = H * z, dw = dh * ar) : (dw = W * z, dh = dw / ar), c.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh), c.filter = "none";
        }
        else {
            const g = c.createLinearGradient(0, 0, W, H);
            g.addColorStop(0, "#1e1b4b"), g.addColorStop(1, "#450a0a"), c.fillStyle = g, c.fillRect(0, 0, W, H);
        }
        const vg = c.createRadialGradient(cx, H / 2, Math.min(W, H) * .2, cx, H / 2, Math.max(W, H) * .75);
        vg.addColorStop(0, "rgba(0,0,0,0)"), vg.addColorStop(1, "rgba(0,0,0,0.65)"), c.fillStyle = vg, c.fillRect(0, 0, W, H), c.textAlign = "center", c.textBaseline = "middle";
        const hA = cl(T / .5);
        c.globalAlpha = hA, c.font = `900 ${Math.round(76 * u)}px ${F}`, c.shadowColor = "rgba(0,0,0,0.85)", c.shadowBlur = 24 * u;
        const words = (t.headline || "ABONE OLMAYI VE LİKE ATMAYI UNUTMAYIN!").split(/\s+/), lines = [];
        let cur = "";
        for (const wd of words) {
            const tst = cur ? cur + " " + wd : wd;
            c.measureText(tst).width > W * .86 && cur ? (lines.push(cur), cur = wd) : cur = tst;
        }
        cur && lines.push(cur);
        const lh = 88 * u, hy = (portrait ? H * .25 : H * .2) - (lines.length - 1) * lh / 2 - (1 - eio(hA)) * 30 * u;
        lines.forEach((ln, ix) => { const gr = c.createLinearGradient(cx - 400 * u, 0, cx + 400 * u, 0); gr.addColorStop(0, "#ffffff"), gr.addColorStop(.5, "#fde68a"), gr.addColorStop(1, "#ffffff"), c.fillStyle = gr, c.fillText(ln, cx, hy + ix * lh); });
        c.shadowBlur = 0, c.globalAlpha = 1;
        const likeX = portrait ? cx : cx - 360 * u, likeY = portrait ? H * .44 : H * .56, btnW = 540 * u, btnH = 136 * u, btnX = portrait ? cx : cx + 90 * u, btnY = portrait ? H * .6 : H * .56, likeT = 1.7, subT = 2.6, bellT = 2.9;
        const ls = back((T - .35) / .45);
        if (ls > 0) {
            const liked = T >= likeT, bump = liked ? 1 + .2 * Math.sin(Math.PI * cl((T - likeT) / .3)) : 1, R = 100 * u * ls * bump;
            if (liked) {
                const bp = cl((T - likeT) / .6);
                c.globalAlpha = 1 - bp, c.strokeStyle = "#60a5fa", c.lineWidth = 8 * u;
                for (let k = 0; k < 10; k++) {
                    const an = k / 10 * Math.PI * 2, r1 = 110 * u + bp * 60 * u, r2 = r1 + 30 * u;
                    c.beginPath(), c.moveTo(likeX + Math.cos(an) * r1, likeY + Math.sin(an) * r1), c.lineTo(likeX + Math.cos(an) * r2, likeY + Math.sin(an) * r2), c.stroke();
                }
                c.globalAlpha = 1;
            }
            c.beginPath(), c.arc(likeX, likeY, R, 0, Math.PI * 2), c.fillStyle = liked ? "#2563eb" : "rgba(255,255,255,0.14)", c.shadowColor = liked ? "rgba(37,99,235,0.8)" : "rgba(0,0,0,0.5)", c.shadowBlur = 30 * u, c.fill(), c.shadowBlur = 0, c.lineWidth = 5 * u, c.strokeStyle = "rgba(255,255,255,0.9)", c.stroke(), c.font = `${Math.round(104 * u * ls * bump)}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`, c.fillStyle = "#ffffff", c.fillText("👍", likeX, likeY + 6 * u);
            c.font = `800 ${Math.round(34 * u)}px ${F}`, c.globalAlpha = cl((T - .6) / .4), c.fillStyle = liked ? "#93c5fd" : "#e5e7eb", c.fillText(liked ? "BEĞENİLDİ" : "BEĞEN", likeX, likeY + R + 40 * u), c.globalAlpha = 1;
        }
        const bs = back((T - .65) / .45);
        if (bs > 0) {
            const subd = T >= subT, bump = subd ? 1 + .12 * Math.sin(Math.PI * cl((T - subT) / .3)) : 1, w2 = btnW * bs * bump, h2 = btnH * bs * bump;
            c.beginPath(), c.roundRect(btnX - w2 / 2, btnY - h2 / 2, w2, h2, h2 / 2), c.fillStyle = subd ? "#3f3f46" : "#dc2626", c.shadowColor = subd ? "rgba(0,0,0,0.5)" : "rgba(220,38,38,0.75)", c.shadowBlur = 36 * u, c.fill(), c.shadowBlur = 0, c.fillStyle = "#ffffff", c.font = `900 ${Math.round((subd ? 46 : 56) * u * bs * bump)}px ${F}`, c.fillText(subd ? "ABONE OLUNDU ✓" : "ABONE OL", btnX, btnY + 3 * u);
            if (T >= bellT) {
                const bx = btnX + btnW / 2 + 80 * u, by = btnY, ba = Math.sin((T - bellT) * 16) * .45 * Math.max(0, 1 - (T - bellT) / 1.6), bsz = back((T - bellT) / .35);
                c.save(), c.translate(bx, by - 40 * u), c.rotate(ba), c.font = `${Math.round(92 * u * bsz)}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`, c.fillText("🔔", 0, 40 * u), c.restore();
            }
        }
        if (T > 1 && T < 3.4) {
            const path = [[W * .8, H * .9], [likeX + 30 * u, likeY + 40 * u], [btnX + 60 * u, btnY + 30 * u], [btnX + 60 * u, btnY + 30 * u]], seg = T < likeT ? 0 : T < subT - .3 ? 1 : 2, segT = seg === 0 ? (T - 1) / (likeT - 1) : seg === 1 ? (T - likeT - .15) / (subT - .3 - likeT - .15) : 1, a0 = path[seg], a1 = path[seg + 1], e2 = eio(segT), px = a0[0] + (a1[0] - a0[0]) * e2, py = a0[1] + (a1[1] - a0[1]) * e2, press = Math.abs(T - likeT) < .12 || Math.abs(T - subT) < .12 ? .85 : 1, k2 = 1.6 * u * press;
            c.globalAlpha = cl((T - 1) / .2) * cl((3.4 - T) / .3), c.save(), c.translate(px, py), c.scale(k2, k2), c.beginPath(), c.moveTo(0, 0), c.lineTo(0, 46), c.lineTo(12, 35), c.lineTo(21, 54), c.lineTo(29, 50), c.lineTo(20, 32), c.lineTo(35, 32), c.closePath(), c.fillStyle = "#ffffff", c.shadowColor = "rgba(0,0,0,0.6)", c.shadowBlur = 10, c.fill(), c.shadowBlur = 0, c.lineWidth = 2.5, c.strokeStyle = "#111827", c.stroke(), c.restore(), c.globalAlpha = 1;
        }
        const fa = cl((T - 3) / .5);
        fa > 0 && (c.globalAlpha = fa, c.font = `700 ${Math.round(38 * u)}px ${F}`, c.fillStyle = "#fef3c7", c.shadowColor = "rgba(0,0,0,0.8)", c.shadowBlur = 14 * u, c.fillText("🔔 Bildirimleri açmayı unutmayın!", cx, portrait ? H * .76 : H * .82), c.shadowBlur = 0, c.globalAlpha = 1);
        const fo = cl((T - (D - .45)) / .45);
        fo > 0 && (c.globalAlpha = fo, c.fillStyle = "#000000", c.fillRect(0, 0, W, H), c.globalAlpha = 1);
        c.restore(); }
    offscreen(n) { this._off = this._off || []; let q = this._off[n]; if (!q || q.cv.width !== this.width || q.cv.height !== this.height) {
        const cv = document.createElement("canvas");
        cv.width = this.width, cv.height = this.height, q = this._off[n] = { cv, ctx: cv.getContext("2d", { alpha: !1 }) };
    } return q; }
    renderAt(L, i, sec) { const sc = L[i]; if (!sc)
        return; const d = sc.duration || 10, tr = SX.studio.transition || "fade", TD = .7; if (tr === "none" || i === 0 || sec >= TD || !L[i - 1])
        return this.renderFrame(sc, Math.min(1, Math.max(0, sec / d)), i); const k = Math.max(0, sec) / TD, e = sxEase(k), A = this.offscreen(0), B = this.offscreen(1), main = this.ctx, W = this.width, H = this.height;
        this.ctx = A.ctx, this.renderFrame(L[i - 1], 1, i - 1), this.ctx = B.ctx, this.renderFrame(sc, Math.min(1, Math.max(0, sec / d)), i), this.ctx = main;
        const c = main;
        c.save(), c.globalAlpha = 1;
        if (tr === "black")
            k < .5 ? (c.drawImage(A.cv, 0, 0), c.fillStyle = `rgba(0,0,0,${k * 2})`) : (c.drawImage(B.cv, 0, 0), c.fillStyle = `rgba(0,0,0,${(1 - k) * 2})`), c.fillRect(0, 0, W, H);
        else if (tr === "slide")
            c.drawImage(A.cv, -W * e, 0), c.drawImage(B.cv, W * (1 - e), 0);
        else if (tr === "zoom") {
            c.drawImage(A.cv, 0, 0), c.globalAlpha = e;
            const z = 1.3 - .3 * e;
            c.translate(W / 2, H / 2), c.scale(z, z), c.drawImage(B.cv, -W / 2, -H / 2);
        }
        else if (tr === "flash")
            c.drawImage(k < .5 ? A.cv : B.cv, 0, 0), c.fillStyle = `rgba(255,255,255,${(1 - Math.abs(k - .5) * 2) * .95})`, c.fillRect(0, 0, W, H);
        else
            c.drawImage(A.cv, 0, 0), c.globalAlpha = e, c.drawImage(B.cv, 0, 0);
        c.restore(); }
    drawOverlays(t, n) { const st = SX.studio, c = this.ctx, W = this.width, H = this.height, u = Math.min(W, H) / 1080, F = '"Outfit", "Inter", sans-serif';
        if (t.captionStyle === "big" && t.caption && t.caption.trim())
            this.drawBigCaption(t, n);
        else if (st.captionsOn && t.caption && t.caption.trim()) {
            const T = n === 0 ? 1 : n * (t.duration || 10), a = sxClamp((T - .25) / .5) * sxClamp((5.2 - T) / .5);
            if (a > 0) {
                const portrait = H > W, x0 = 48 * u, y0 = portrait ? H * .09 : 64 * u, parts = t.caption.trim().split(/\s+[—–|]\s+/), main = parts[0], sub = parts.slice(1).join(" — ");
                c.save(), c.globalAlpha = a, c.font = `800 ${Math.round(46 * u)}px ${F}`;
                const w1 = c.measureText(main).width;
                c.font = `600 ${Math.round(31 * u)}px ${F}`;
                const w2 = sub ? c.measureText(sub).width : 0, bw = Math.max(w1, w2) + 62 * u, bh = sub ? 124 * u : 80 * u, k = Math.min(1, (W - 2 * x0) / bw), sl = (1 - sxEase((T - .25) / .5)) * -50 * u;
                c.translate(x0 + sl, y0), c.scale(k, k), c.fillStyle = "rgba(8,8,12,0.74)", c.beginPath(), c.roundRect(0, 0, bw, bh, 12 * u), c.fill(), c.fillStyle = "#f59e0b", c.fillRect(0, 0, 8 * u, bh), c.textAlign = "left", c.textBaseline = "middle", c.fillStyle = "#ffffff", c.font = `800 ${Math.round(46 * u)}px ${F}`, c.fillText(main, 30 * u, sub ? 42 * u : bh / 2), sub && (c.fillStyle = "#fcd34d", c.font = `600 ${Math.round(31 * u)}px ${F}`, c.fillText(sub, 30 * u, 90 * u)), c.restore();
            }
        }
        if (st.watermarkOn && (SX.logoImg || st.channelName.trim())) {
            const m = 34 * u, pos = st.logoPos || "tr", right = pos[1] === "r", bottom = pos[0] === "b";
            c.save(), c.globalAlpha = st.logoOpacity, c.shadowColor = "rgba(0,0,0,0.6)", c.shadowBlur = 12 * u;
            if (SX.logoImg) {
                const li = SX.logoImg, sz = st.logoSize * Math.min(W, H), k = sz / Math.max(li.width, li.height), w = li.width * k, h = li.height * k;
                c.drawImage(li, right ? W - w - m : m, bottom ? H - h - m - (H > W ? H * .06 : 0) : m, w, h);
            }
            else {
                c.font = `700 ${Math.round(30 * u)}px ${F}`, c.fillStyle = "#ffffff", c.textBaseline = bottom ? "bottom" : "top", c.textAlign = right ? "right" : "left";
                c.fillText("▶ " + st.channelName.trim(), right ? W - m : m, bottom ? H - m - (H > W ? H * .06 : 0) : m);
            }
            c.restore();
        } }
    drawBigCaption(t, n) { const c = this.ctx, W = this.width, H = this.height, u = Math.min(W, H) / 1080, T = n === 0 ? 1 : n * (t.duration || 7), txt = t.caption.trim().toLocaleUpperCase("tr-TR"), F = '"Outfit", "Inter", "Arial Black", sans-serif', pop = sxBack(T / .35), maxW = W * .86;
        let fs = 92 * u, lines = [];
        for (let k = 0; k < 10; k++) {
            c.font = `900 ${Math.round(fs)}px ${F}`, lines = sxWrap(c, txt, maxW);
            if (lines.length <= 3 && lines.every(l => c.measureText(l).width <= maxW)) break;
            fs *= .9;
        }
        lines = lines.slice(0, 3);
        const lh = fs * 1.12, y0 = (H > W ? H * .16 : H * .14) + (lines.length > 1 ? 0 : lh / 2), hi = t.shortSeries === "cocuk" ? "#fde047" : t.shortSeries === "icat" ? "#67e8f9" : "#fbbf24";
        c.save(), c.translate(W / 2, y0), c.scale(pop, pop), c.textAlign = "center", c.textBaseline = "middle", c.lineJoin = "round", c.font = `900 ${Math.round(fs)}px ${F}`;
        lines.forEach((ln, i) => { const y = (i - (lines.length - 1) / 2) * lh; c.lineWidth = fs * .2, c.strokeStyle = "rgba(0,0,0,0.92)", c.strokeText(ln, 0, y), c.fillStyle = i === lines.length - 1 && lines.length > 1 ? hi : (lines.length === 1 ? hi : "#ffffff"), c.fillText(ln, 0, y); });
        c.restore(); }
    drawIntro(p, t) { const c = this.ctx, W = this.width, H = this.height, u = Math.min(W, H) / 1080, T = p * (t.duration || 3), st = SX.studio, F = '"Outfit", "Inter", sans-serif';
        c.save();
        const g = c.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * .7);
        g.addColorStop(0, "#23205a"), g.addColorStop(1, "#05060a"), c.fillStyle = g, c.fillRect(0, 0, W, H), c.globalAlpha = .18 * sxClamp(T / .6);
        for (let k = 0; k < 14; k++) {
            const an = k / 14 * Math.PI * 2 + T * .22;
            c.fillStyle = k % 2 ? "#6366f1" : "#a855f7", c.beginPath(), c.moveTo(W / 2, H / 2), c.arc(W / 2, H / 2, Math.max(W, H), an, an + .11), c.closePath(), c.fill();
        }
        c.globalAlpha = 1;
        const li = SX.logoImg, name = st.channelName.trim(), sc = sxBack((T - .15) / .6), cy = H / 2 - (li && name ? 70 * u : 0);
        if (li && sc > 0) {
            const sz = 320 * u * sc, k = sz / Math.max(li.width, li.height);
            c.shadowColor = "rgba(168,85,247,0.85)", c.shadowBlur = 60 * u, c.drawImage(li, W / 2 - li.width * k / 2, cy - li.height * k / 2, li.width * k, li.height * k), c.shadowBlur = 0;
        }
        if (name) {
            const a = sxClamp((T - (li ? .6 : .2)) / .5), ty = li ? cy + 250 * u : H / 2;
            c.globalAlpha = a, c.textAlign = "center", c.textBaseline = "middle";
            let fs = 88 * u;
            c.font = `900 ${Math.round(fs)}px ${F}`;
            const mw = c.measureText(name).width;
            mw > W * .86 && (fs *= W * .86 / mw, c.font = `900 ${Math.round(fs)}px ${F}`);
            const gr = c.createLinearGradient(W / 2 - 400 * u, 0, W / 2 + 400 * u, 0);
            gr.addColorStop(0, "#ffffff"), gr.addColorStop(.5, "#fde68a"), gr.addColorStop(1, "#ffffff"), c.fillStyle = gr, c.shadowColor = "rgba(0,0,0,0.8)", c.shadowBlur = 22 * u, c.fillText(name, W / 2, ty + (1 - sxEase(a)) * 30 * u), c.shadowBlur = 0, c.globalAlpha = sxClamp((T - 1.1) / .5) * .8, c.font = `600 ${Math.round(32 * u)}px ${F}`, c.fillStyle = "#ffffff", c.fillText("s u n a r", W / 2, ty + 82 * u);
        }
        c.restore(); }
    subtitleProgress(t, n) { const vd = t.voiceDuration; if (!vd || vd <= 0)
        return n; const el = n * (t.duration || 10) - .3; return Math.min(1, Math.max(0, el / vd)) / 1.1; }
    roundRect(t, n, r, i, l, a) { t.beginPath(), t.moveTo(n + a, r), t.lineTo(n + i - a, r), t.quadraticCurveTo(n + i, r, n + i, r + a), t.lineTo(n + i, r + l - a), t.quadraticCurveTo(n + i, r + l, n + i - a, r + l), t.lineTo(n + a, r + l), t.quadraticCurveTo(n, r + l, n, r + l - a), t.lineTo(n, r + a), t.quadraticCurveTo(n, r, n + a, r), t.closePath(); }
    async exportVideo(t, n, r, onBegin) {
        await this.preloadScenes(t);
        const i = this.canvas.captureStream(60);
        n && n.getAudioTracks().length > 0 && n.getAudioTracks().forEach(d => i.addTrack(d));
        const a = ["video/mp4;codecs=avc1.640028,mp4a.40.2", "video/mp4;codecs=avc1,mp4a.40.2", "video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm", "video/mp4"].find(d => MediaRecorder.isTypeSupported(d)) || "video/webm",
            ext = a.includes("mp4") ? "mp4" : "webm", m = t.reduce((k, v) => k + (v.duration || 10), 0), long = m > 150;
        // Uzun videolar: parçalar doğrudan diske yazılır (bellek dolmaz)
        let recId = null;
        if (long) {
            try { recId = (await (await fetch("/api/rec/start", { method: "POST", body: JSON.stringify({ ext }) })).json()).id; } catch (e) { console.warn("Diske kayıt başlatılamadı, bellekte kaydedilecek:", e); }
        }
        const s = new MediaRecorder(i, { mimeType: a, videoBitsPerSecond: long ? 6e6 : 1e7, audioBitsPerSecond: 192e3 }), u = [];
        let q = Promise.resolve(), seq = 0, writeErr = null;
        s.ondataavailable = d => {
            if (!d.data.size) return;
            if (recId) { const blob = d.data, k = seq++; q = q.then(() => fetch(`/api/rec/append?id=${recId}&seq=${k}`, { method: "POST", body: blob })).then(x => { if (!x.ok) throw new Error("Diske yazılamadı"); }).catch(x => { writeErr = x; }); }
            else u.push(d.data);
        };
        return new Promise((d, h) => {
            s.onstop = async () => {
                this.pauseAllVideos();
                if (recId) {
                    try {
                        if (await q, writeErr) throw writeErr;
                        const dt = new Date(), pad = x => String(x).padStart(2, "0"), slug = (SX.studio.lastTopic || "video").toLocaleLowerCase("tr-TR").replace(/ı/g, "i").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 40) || "video", name = `${slug}_${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}_${pad(dt.getHours())}-${pad(dt.getMinutes())}.${ext}`, res = await (await fetch(`/api/rec/finish?id=${recId}&dur=${Math.round(m * 1e3)}&name=${encodeURIComponent(name)}`, { method: "POST" })).json();
                        if (!res.ok) throw new Error(res.error || "Kayıt tamamlanamadı");
                        return d({ blob: null, url: res.url, filename: res.name, savedPath: res.path });
                    } catch (x) { return h(x); }
                }
                const k = await fixWebmDuration(new Blob(u, { type: a }), m * 1e3);
                d({ blob: k, url: URL.createObjectURL(k), filename: `sinematik_video_${Date.now()}.${ext}` });
            };
            s.onerror = k => { this.pauseAllVideos(), h(k); };
            s.start(recId ? 1e3 : 100), onBegin && onBegin();
            const y = performance.now();
            let S = -1;
            t[0] && this.playSceneVideo(t[0]);
            const w = k => {
                const v = (k - y) / 1e3;
                if (v >= m) { s.stop(); return; }
                let p = v, c = 0;
                for (let N = 0; N < t.length; N++) { const E = t[N].duration || 10; if (p < E || N === t.length - 1) { c = N; break; } p -= E; }
                c !== S && (S = c, t[c] && this.playSceneVideo(t[c]));
                this.renderAt(t, c, p), r && r(Math.min(99, Math.round(v / m * 100))), requestAnimationFrame(w);
            };
            requestAnimationFrame(w);
        });
    }
}

/* ==================================================================================
 *  AI Video Studio v1.4 — Stüdyo eklentileri
 *  (marka, geçişler, üst yazılar, müzik, mikrofon, kapak, YouTube metni, AI senaryo)
 * ================================================================================== */

// ---------- IndexedDB (büyük veriler: otomatik kayıt, müzik) ----------
const IDB = {
    db: null,
    open() {
        return this.db || (this.db = new Promise((res, rej) => {
            const r = indexedDB.open("aivs", 1);
            r.onupgradeneeded = () => r.result.createObjectStore("kv");
            r.onsuccess = () => res(r.result);
            r.onerror = () => rej(r.error);
        }));
    },
    async get(k) {
        const db = await this.open();
        return new Promise((res, rej) => { const q = db.transaction("kv").objectStore("kv").get(k); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); });
    },
    async set(k, v) {
        const db = await this.open();
        return new Promise((res, rej) => { const tx = db.transaction("kv", "readwrite"); tx.objectStore("kv").put(v, k); tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error); });
    },
    async del(k) {
        const db = await this.open();
        return new Promise((res, rej) => { const tx = db.transaction("kv", "readwrite"); tx.objectStore("kv").delete(k); tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error); });
    }
};

// ---------- Stüdyo ayarları (kalıcı) ----------
const SX_DEFAULTS = {
    transition: "fade", captionsOn: !0, duck: !0,
    channelName: "", logo: "", logoPos: "tr", logoOpacity: .85, logoSize: .13, watermarkOn: !0, introOn: !0,
    imageSource: "ai", imageStyle: "cinematic", musicName: "", lastTopic: ""
};
const SX = {
    studio: (() => { try { return { ...SX_DEFAULTS, ...JSON.parse(localStorage.getItem("aivs_studio") || "{}") }; } catch { return { ...SX_DEFAULTS }; } })(),
    listeners: new Set(),
    logoImg: null,
    musicBuffer: null,
    api: {},
    set(patch) {
        this.studio = { ...this.studio, ...patch };
        try { localStorage.setItem("aivs_studio", JSON.stringify(this.studio)); } catch (e) { console.warn("Ayarlar kaydedilemedi:", e); }
        "logo" in patch && this.loadLogo();
        this.listeners.forEach(f => f(this.studio));
    },
    loadLogo() {
        if (!this.studio.logo) { this.logoImg = null; return; }
        const im = new Image();
        im.onload = () => { this.logoImg = im; this.listeners.forEach(f => f(this.studio)); };
        im.src = this.studio.logo;
    },
    hasBrand() { return !!(this.studio.channelName.trim() || this.studio.logo); }
};
SX.loadLogo();
function useStudio() {
    const [s, set] = P.useState(SX.studio);
    P.useEffect(() => { const f = v => set({ ...v }); SX.listeners.add(f); return () => SX.listeners.delete(f); }, []);
    return s;
}
// kayıtlı müziği yükle
(async () => {
    try {
        const m = await IDB.get("music");
        if (m && m.data) SX.musicBuffer = await new OfflineAudioContext(2, 1, 44100).decodeAudioData(m.data.slice(0));
    } catch (e) { console.warn("Müzik yüklenemedi:", e); }
})();

const SX_STYLES = {
    cinematic: ["🎬 Sinematik (gerçekçi)", "cinematic lighting, ultra-detailed, photorealistic, 8k, dramatic atmosphere, film still"],
    painting: ["🖼️ Yağlı boya tablo", "classical oil painting, epic historical painting, rich brush strokes, museum masterpiece"],
    miniature: ["📜 Osmanlı minyatürü", "ottoman miniature painting style, flat perspective, ornate gold details, illuminated manuscript"],
    documentary: ["📷 Belgesel fotoğraf", "documentary photography, natural light, realistic, national geographic style, 35mm"],
    cartoon: ["🧸 Çizgi film (çocuklar)", "colorful 3d cartoon style, pixar like, cute characters, soft lighting, kid friendly"],
    anime: ["✨ Anime", "anime style, studio ghibli inspired, vibrant colors, detailed background"],
    dark: ["🌑 Karanlık fantastik", "dark fantasy concept art, moody shadows, volumetric light, epic"]
};
function sxImageUrl(prompt, seed) {
    const st = SX_STYLES[SX.studio.imageStyle] || SX_STYLES.cinematic, portrait = (SX.api.aspect || "portrait") === "portrait";
    const clean = (prompt || "").replace(/["“”]/g, "").replace(/\s+/g, " ").trim().slice(0, 600);
    const full = `${clean}, ${st[1]}, no text, no watermark`;
    return `/api/img?w=${portrait ? 720 : 1280}&h=${portrait ? 1280 : 720}&seed=${seed}&prompt=${encodeURIComponent(full)}`;
}

// ---------- küçük yardımcılar ----------
const sxClamp = x => Math.min(1, Math.max(0, x));
const sxEase = x => { x = sxClamp(x); return x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; };
const sxBack = x => { x = sxClamp(x); const k = 1.70158; return 1 + (k + 1) * Math.pow(x - 1, 3) + k * Math.pow(x - 1, 2); };
function sxFmtTime(s) { s = Math.max(0, Math.floor(s)); const m = Math.floor(s / 60), r = s % 60; return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`; }
function sxCleanTitle(t) { return (t || "").replace(/\(\s*\d{1,2}:\d{2}\s*[–-]\s*\d{1,2}:\d{2}\s*\)/g, "").replace(/\bSAHNE\s*\d+\b/gi, "").replace(/[()]/g, "").replace(/\s+/g, " ").trim(); }
function sxTitleCase(t) { return t.toLocaleLowerCase("tr-TR").replace(/(^|\s)(\S)/g, (m, a, b) => a + b.toLocaleUpperCase("tr-TR")); }
function sxDownload(href, name) { const a = document.createElement("a"); a.href = href, a.download = name, document.body.appendChild(a), a.click(), a.remove(); }
function sxWrap(ctx, text, maxW) {
    const words = (text || "").split(/\s+/).filter(Boolean), lines = []; let cur = "";
    for (const w of words) { const t = cur ? cur + " " + w : w; ctx.measureText(t).width > maxW && cur ? (lines.push(cur), cur = w) : cur = t; }
    return cur && lines.push(cur), lines;
}
async function sxResizeImage(file, max = 320) {
    const url = URL.createObjectURL(file);
    try {
        const im = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
        const k = Math.min(1, max / Math.max(im.width, im.height)), c = document.createElement("canvas");
        c.width = Math.round(im.width * k), c.height = Math.round(im.height * k), c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
        return c.toDataURL("image/png");
    } finally { URL.revokeObjectURL(url); }
}
async function sxDecodeDataUrl(url, ctx) {
    const ab = await (await fetch(url)).arrayBuffer();
    return await (ctx || new OfflineAudioContext(1, 1, 44100)).decodeAudioData(ab);
}

// ---------- kapak görseli ----------
function sxDrawThumb(cv, o) {
    const c = cv.getContext("2d"), W = cv.width, H = cv.height, u = Math.min(W, H) / 720;
    c.fillStyle = "#0b0b10", c.fillRect(0, 0, W, H);
    if (o.img && o.img.width) {
        const ar = o.img.width / o.img.height, cr = W / H; let dw, dh;
        ar > cr ? (dh = H, dw = H * ar) : (dw = W, dh = W / ar);
        c.filter = "saturate(1.25) contrast(1.08)", c.drawImage(o.img, (W - dw) / 2, (H - dh) / 2, dw, dh), c.filter = "none";
    }
    const portrait = H > W, g = portrait ? c.createLinearGradient(0, H, 0, H * .35) : c.createLinearGradient(0, 0, W * .75, 0);
    g.addColorStop(0, "rgba(0,0,0,0.88)"), g.addColorStop(.55, "rgba(0,0,0,0.45)"), g.addColorStop(1, "rgba(0,0,0,0)"), c.fillStyle = g, c.fillRect(0, 0, W, H);
    const maxW = portrait ? W * .86 : W * .6, txt = (o.title || "").toLocaleUpperCase("tr-TR");
    let fs = Math.round((portrait ? 118 : 92) * u), lines = [];
    for (let k = 0; k < 14; k++) {
        c.font = `900 ${fs}px "Outfit", "Inter", "Arial Black", sans-serif`, lines = sxWrap(c, txt, maxW);
        if (lines.length <= 4 && lines.every(l => c.measureText(l).width <= maxW)) break;
        fs = Math.round(fs * .9);
    }
    lines = lines.slice(0, 4), c.textBaseline = "alphabetic", c.textAlign = portrait ? "center" : "left";
    const lh = fs * 1.05;
    const x = portrait ? W / 2 : 48 * u, y0 = portrait ? H * .9 - (lines.length - 1) * lh : H / 2 - (lines.length - 1) * lh / 2 + fs * .35;
    lines.forEach((ln, i) => {
        const y = y0 + i * lh, hi = i === lines.length - 1;
        c.lineJoin = "round", c.lineWidth = fs * .16, c.strokeStyle = "#000", c.strokeText(ln, x, y);
        c.fillStyle = hi ? o.color || "#facc15" : "#ffffff", c.fillText(ln, x, y);
    });
    if (o.badge) {
        c.font = `900 ${Math.round(34 * u)}px "Outfit", "Inter", sans-serif`;
        const bw = c.measureText(o.badge).width + 36 * u, bx = portrait ? W / 2 - bw / 2 : 48 * u, by = portrait ? H * .9 - (lines.length - 1) * lh - fs - 70 * u : y0 - fs - 46 * u;
        c.fillStyle = "#dc2626", c.beginPath(), c.roundRect(bx, by, bw, 58 * u, 10 * u), c.fill(), c.fillStyle = "#fff", c.textAlign = "left", c.fillText(o.badge, bx + 18 * u, by + 41 * u);
    }
    if (o.logo && SX.logoImg) {
        const s = 110 * u, li = SX.logoImg, k = s / Math.max(li.width, li.height);
        c.globalAlpha = .95, c.drawImage(li, W - li.width * k - 24 * u, 24 * u, li.width * k, li.height * k), c.globalAlpha = 1;
    }
}

// ---------- YouTube metin paketi ----------
const SX_STOP = new Set("ve ile bir bu şu o da de ki için gibi kadar daha çok en olan olarak sonra önce ama fakat ancak her hem ne mi mı mu mü ya veya yıl yılı yılında onun bunun büyük artık bütün tüm kendi böylece oldu olur oluyordu ediyordu idi iken diye bile şimdi sadece yalnızca the and".split(" "));
function sxYoutube({ scenes, project, outroOn, outroDur, portrait }) {
    const presets = { malazgirt: "1071 Malazgirt Zaferi", fatih: "1453 İstanbul'un Fethi", saladin: "1187 Kudüs'ün Fethi" };
    const st = SX.studio, first = scenes[0] || {};
    const ser = first.shortSeries || "", shortName = first.shortTitle ? first.shortTitle.replace(/\s*\((kısa|çocuklar için)\)\s*/gi, " ").trim() : "";
    const name = shortName || presets[project] || (st.lastTopic && sxTitleCase(st.lastTopic)) || sxTitleCase(sxCleanTitle(first.caption || first.title) || "Tarih Belgeseli");
    const baseTags = ser === "cocuk" ? ["çocuk", "çocuk videoları", "eğitici çocuk videoları", "okul öncesi", "çocuklar için"] : ser === "icat" ? ["icatlar", "bilim", "icat hikayeleri", "bilim tarihi"] : ["tarih", "belgesel", "türk tarihi", "tarih belgeseli"];
    const baseHash = ser === "cocuk" ? ["#çocuk", "#eğitici", "#çocukvideoları"] : ser === "icat" ? ["#icat", "#bilim", "#tarih"] : ["#tarih", "#belgesel"];
    const total = scenes.reduce((a, s) => a + (s.duration || 10), 0) + (outroOn ? outroDur : 0) + (st.introOn && SX.hasBrand() ? 3 : 0);
    const titles = ser === "cocuk" ? [name, `${name} 🎈`, `${name} | Çocuklar İçin Eğitici Video`, `${name} #shorts`] : ser ? [name, `${name} 🤯`, `${name} #shorts`, `Bunu biliyor muydun? ${name}`] : [`${name} | Bilinmeyen Gerçekler`, `${name}: Tarihi Değiştiren An`, `${name} Nasıl Yaşandı? (Belgesel)`, `${name} – ${scenes.length} Sahnede Tüm Hikâye`, portrait ? `${name} #shorts` : `${name} | Kısa Tarih Belgeseli`];
    // bölümler (YouTube: ilk 00:00, her bölüm en az 10 sn)
    const chapters = []; let t = 0;
    st.introOn && SX.hasBrand() && (chapters.push({ t: 0, name: "Giriş" }), t = 3);
    let acc = null;
    if (scenes.some(s => typeof s.chapter == "number")) {
        let last = -1;
        scenes.forEach(s => { s.chapter !== last && (chapters.push({ t, name: s.caption || `Bölüm ${s.chapter + 1}` }), last = s.chapter), t += s.duration || 10; });
    }
    (scenes.some(s => typeof s.chapter == "number") ? [] : scenes).forEach((s, i) => {
        const nm = sxCleanTitle(s.caption || s.title) || `Bölüm ${i + 1}`;
        if (!acc) acc = { t, name: nm, d: 0 };
        acc.d += s.duration || 10, t += s.duration || 10;
        if (acc.d >= 10) chapters.push(acc), acc = null;
    });
    acc && (chapters.length ? null : chapters.push(acc));
    outroOn && chapters.length && chapters.push({ t, name: "Kapanış" });
    if (chapters.length && chapters[0].t !== 0) chapters[0].t = 0;
    const chapterTxt = chapters.length >= 3 && !portrait ? "\n\n📌 Bölümler:\n" + chapters.map(c => `${sxFmtTime(c.t)} ${sxTitleCase(c.name)}`).join("\n") : "";
    // anahtar kelimeler
    const freq = new Map();
    scenes.map(s => (s.voiceText || "") + " " + (s.caption || "") + " " + (s.title || "")).join(" ").toLocaleLowerCase("tr-TR").replace(/[^a-zçğıöşü0-9\s]/gi, " ").split(/\s+/)
        .filter(w => w.length >= 5 && !SX_STOP.has(w) && isNaN(w)).forEach(w => freq.set(w, (freq.get(w) || 0) + 1));
    const proper = new Map();
    (name.replace(/[’']\S*/g, "").match(/[A-ZÇĞİÖŞÜ][a-zçğıöşü]{3,}/g) || []).forEach(w => { const k = w.toLocaleLowerCase("tr-TR"); SX_STOP.has(k) || proper.set(k, (proper.get(k) || 0) + 5); });
    scenes.forEach(s => ((s.voiceText || "") + " " + (s.caption || "")).replace(/[.!?]\s+\S+/g, " ").replace(/^\s*\S+/, " ").replace(/[’']\S*/g, "").match(/[A-ZÇĞİÖŞÜ][a-zçğıöşü]{3,}/g)?.forEach(w => { const k = w.toLocaleLowerCase("tr-TR"); SX_STOP.has(k) || proper.set(k, (proper.get(k) || 0) + 1); }));
    const kws = [...new Set([...[...proper.entries()].sort((a, b) => b[1] - a[1]).map(e => e[0]), ...[...freq.entries()].sort((a, b) => b[1] - a[1]).map(e => e[0])])].slice(0, 12);
    const tags = [...new Set([name.toLocaleLowerCase("tr-TR"), ...kws, ...baseTags, ...(ser ? [] : ["kısa belgesel"]), ...(portrait ? ["shorts"] : [])])].slice(0, 20);
    const nameTag = "#" + name.replace(/[^a-zA-ZçğıöşüÇĞİÖŞÜ0-9]/g, ""), hashtags = [...new Set([...(nameTag.length <= 26 ? [nameTag] : []), ...kws.slice(0, 4).map(k => "#" + k), ...baseHash, ...(portrait ? ["#shorts"] : [])])].join(" ");
    const intro = scenes.slice(0, 2).map(s => (s.voiceText || "").trim()).filter(Boolean).join(" ");
    const srcs = (first.sources || []).filter(Boolean), srcTxt = srcs.length ? "\n\n📚 Kaynaklar:\n" + srcs.map(x => "• " + x).join("\n") : "";
    const lead = ser ? intro : `${name} — ${total < 60 ? Math.round(total) + " saniyede" : Math.round(total / 60) + " dakikada"} tüm hikâye.\n\n${intro}`;
    const desc = `${lead}${chapterTxt}${srcTxt}\n\n🔔 Abone olmayı, videoyu beğenmeyi ve bildirimleri açmayı unutmayın!${st.channelName ? "\n📺 " + st.channelName : ""}\n\n${hashtags}`;
    const hook = (first.caption || "").trim(), social = `${hook ? hook.charAt(0).toLocaleUpperCase("tr-TR") + hook.slice(1).toLocaleLowerCase("tr-TR") + " " : ""}${name}${/[?!.]$/.test(name) ? "" : " 👀"}\n\n${hashtags.split(" ").slice(0, 6).join(" ")}`;
    return { titles, description: desc, tags: tags.join(", "), hashtags, social, kids: ser === "cocuk", total };
}

// ---------- sahne araçları (sağ panelde, sahne ayarlarının altında) ----------
function SceneTools({ scene, index, onUpdate }) {
    const studio = useStudio(), [rec, setRec] = P.useState(null), [secs, setSecs] = P.useState(0), [err, setErr] = P.useState(""), api = SX.api;
    P.useEffect(() => () => { rec && rec.stop(); }, [rec]);
    if (!scene) return null;
    const startRec = async () => {
        setErr("");
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: !0, noiseSuppression: !0 } });
            const mime = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find(m => MediaRecorder.isTypeSupported(m)) || "";
            const mr = new MediaRecorder(stream, mime ? { mimeType: mime, audioBitsPerSecond: 64e3 } : {}), chunks = [], t0 = Date.now();
            const tick = setInterval(() => setSecs((Date.now() - t0) / 1e3), 200);
            mr.ondataavailable = e => e.data.size && chunks.push(e.data);
            mr.onstop = () => {
                clearInterval(tick), stream.getTracks().forEach(t => t.stop()), setRec(null);
                const b = new Blob(chunks, { type: mr.mimeType || "audio/webm" }), fr = new FileReader();
                fr.onload = () => onUpdate(index, { voiceAudio: fr.result, voiceKey: null }), fr.readAsDataURL(b);
            };
            mr.start(200), setSecs(0), setRec(mr);
        } catch (e) { setErr("Mikrofon açılamadı: " + (e.message || e) + " (Windows Ayarlar › Gizlilik › Mikrofon izinlerini kontrol edin)"); }
    };
    const box = { marginTop: 10, padding: 10, borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", gap: 8 };
    return o.jsxs("div", { style: box, children: [
        o.jsx("label", { className: "form-label", style: { fontSize: "0.76rem", margin: 0 }, children: "🏷️ Üst yazı (tarih / yer kartı)" }),
        o.jsx("input", { type: "text", className: "form-input", style: { fontSize: "0.8rem", padding: "6px 8px" }, placeholder: "Örn: 26 Ağustos 1071 — Malazgirt Ovası", value: scene.caption || "", onChange: e => onUpdate(index, { caption: e.target.value }) }),
        o.jsx("label", { className: "form-label", style: { fontSize: "0.76rem", margin: "4px 0 0" }, children: "🎤 Kendi sesinle seslendir" }),
        o.jsxs("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }, children: [
            rec ? o.jsxs("button", { type: "button", className: "btn btn-sm", style: { background: "#dc2626", color: "#fff" }, onClick: () => rec.stop(), children: ["⏹ Durdur (", secs.toFixed(1), " sn)"] })
                : o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: startRec, children: scene.voiceAudio ? "🔴 Yeniden Kaydet" : "🔴 Kaydet" }),
            scene.voiceAudio && !rec && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: () => api.playScene && api.playScene(scene), children: "▶ Dinle" }),
            scene.voiceAudio && !rec && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: () => onUpdate(index, { voiceAudio: null, voiceKey: null }), children: "✕ Kaydı Sil" })
        ] }),
        scene.voiceAudio && o.jsx("div", { style: { fontSize: "0.7rem", color: "var(--accent-green)" }, children: "✓ Bu sahnede senin kaydın kullanılıyor (yapay ses yerine)." }),
        err && o.jsx("div", { style: { fontSize: "0.72rem", color: "#fca5a5" }, children: err }),
        o.jsx("label", { className: "form-label", style: { fontSize: "0.76rem", margin: "4px 0 0" }, children: "🧩 Sahne düzenle" }),
        o.jsxs("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: [
            o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", title: "Sahneyi sola taşı", disabled: index === 0, onClick: () => api.move && api.move(-1), children: "◀ Sola" }),
            o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", title: "Sahneyi sağa taşı", disabled: index >= (api.count || 1) - 1, onClick: () => api.move && api.move(1), children: "Sağa ▶" }),
            o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", title: "Sahnenin kopyasını oluştur", onClick: () => api.duplicate && api.duplicate(), children: "⧉ Çoğalt" }),
            o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", title: "Geri al (Ctrl+Z)", disabled: !api.canUndo, onClick: () => api.undo && api.undo(), children: "↶ Geri Al" }),
            o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", title: "Yinele (Ctrl+Y)", disabled: !api.canRedo, onClick: () => api.redo && api.redo(), children: "↷ Yinele" })
        ] })
    ] });
}

// ---------- Stüdyo Araçları penceresi ----------
function StudioTools({ open, onClose, scenes, aspect, project, currentIndex, onGenerate, onPreviewIntro, onApplyCaptions, setBgmTrack, outroOn, outroDur }) {
    const studio = useStudio(), [tab, setTab] = P.useState("ai");
    if (!open) return null;
    const tabs = [["ai", "🤖 AI Senaryo"], ["brand", "🎨 Kanal Markası"], ["fx", "🎞️ Geçiş & Yazılar"], ["music", "🎵 Müzik"], ["thumb", "🖼️ Kapak Görseli"], ["yt", "📝 YouTube Metni"]];
    return o.jsx("div", { className: "sx-overlay", onMouseDown: e => e.target === e.currentTarget && onClose(), children: o.jsxs("div", { className: "sx-modal", children: [
        o.jsxs("div", { className: "sx-head", children: [o.jsx("strong", { children: "🧰 Stüdyo Araçları" }), o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: onClose, children: "✕ Kapat" })] }),
        o.jsx("div", { className: "sx-tabs", children: tabs.map(([k, t]) => o.jsx("button", { type: "button", className: "sx-tab" + (tab === k ? " active" : ""), onClick: () => setTab(k), children: t }, k)) }),
        o.jsxs("div", { className: "sx-body", children: [
            tab === "ai" && o.jsx(SxAiTab, { onGenerate, onClose }),
            tab === "brand" && o.jsx(SxBrandTab, { studio, onPreviewIntro: () => { onClose(), setTimeout(onPreviewIntro, 50); } }),
            tab === "fx" && o.jsx(SxFxTab, { studio, onApplyCaptions }),
            tab === "music" && o.jsx(SxMusicTab, { studio, setBgmTrack }),
            tab === "thumb" && o.jsx(SxThumbTab, { scenes, aspect, project, currentIndex }),
            tab === "yt" && o.jsx(SxYtTab, { scenes, aspect, project, outroOn, outroDur })
        ] })
    ] }) });
}
function SxField({ label, children, hint }) {
    return o.jsxs("div", { className: "form-group", style: { marginBottom: 12 }, children: [o.jsx("label", { className: "form-label", children: label }), children, hint && o.jsx("div", { className: "sx-hint", children: hint })] });
}
function SxAiTab({ onGenerate, onClose }) {
    const [topic, setTopic] = P.useState(SX.studio.lastTopic || ""), [count, setCount] = P.useState(8), [dur, setDur] = P.useState(8), [tone, setTone] = P.useState("belgesel"),
        [text, setText] = P.useState(""), [busy, setBusy] = P.useState(!1), [err, setErr] = P.useState(""), studio = useStudio();
    const tones = { belgesel: "ciddi, bilgilendirici belgesel anlatımı", epik: "epik, heyecanlı, sinematik ve duygusal anlatım", cocuk: "çocuklar için sade, sıcak ve eğlenceli anlatım (7-12 yaş)", gizem: "merak uyandıran, gizemli ve sürükleyici anlatım" };
    const write = async () => {
        if (!topic.trim()) return setErr("Lütfen bir konu yazın.");
        setErr(""), setBusy(!0), SX.set({ lastTopic: topic.trim() });
        const words = Math.round(dur * 2.2);
        const prompt = `Konu: ${topic.trim()}\nSahne sayısı: ${count}\nAnlatım tonu: ${tones[tone]}\nHer sahnenin seslendirmesi yaklaşık ${dur} saniye sürmeli (en fazla ${words} kelime).\n\nKurallar:\n- Tarihi bilgiler doğru olsun; emin olmadığın tarih, isim ve sayıları yazma.\n- İlk sahne izleyiciyi yakalayan güçlü bir girişle başlasın, son sahne etkileyici bir kapanış yapsın.\n- GÖRSEL satırı İngilizce, ayrıntılı ve sinematik bir görsel tarifi olsun (kişiler, mekân, ışık, kamera açısı); görselde yazı olmasın.\n- SESLENDİRME satırı akıcı Türkçe olsun.\n\nYALNIZCA şu formatta yaz, başka hiçbir açıklama ekleme:\n\nSAHNE 1 — Kısa başlık\nGÖRSEL: ...\nSESLENDİRME: ...\n\nSAHNE 2 — Kısa başlık\nGÖRSEL: ...\nSESLENDİRME: ...`;
        try {
            const r = await fetch("/api/llm", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ system: "Sen YouTube ve TikTok için Türkçe tarih ve belgesel videoları yazan deneyimli bir senaristsin.", prompt }) });
            const t = await r.text();
            if (!r.ok) throw new Error(t || "Sunucu hatası");
            if (!/SAHNE\s*\d+/i.test(t)) throw new Error("Beklenen formatta senaryo gelmedi, tekrar deneyin.");
            setText(t.trim());
        } catch (e) { setErr("Senaryo yazılamadı: " + e.message + " (İnternet bağlantınızı kontrol edip tekrar deneyin.)"); }
        finally { setBusy(!1); }
    };
    return o.jsxs("div", { children: [
        o.jsx("p", { className: "sx-hint", style: { marginBottom: 12 }, children: "Konuyu yazın; yapay zeka sahneleri, görsel tariflerini ve Türkçe seslendirme metnini hazırlasın. Ücretsiz bir servis kullanılır, API anahtarı gerekmez." }),
        o.jsx(SxField, { label: "Video konusu", children: o.jsx("input", { className: "form-input", value: topic, placeholder: "Örn: Çanakkale Savaşı, Kanuni'nin Viyana Kuşatması, Piri Reis haritası…", onChange: e => setTopic(e.target.value), onKeyDown: e => e.key === "Enter" && !busy && write() }) }),
        o.jsxs("div", { className: "sx-grid3", children: [
            o.jsx(SxField, { label: "Sahne sayısı", children: o.jsx("select", { className: "form-select", value: count, onChange: e => setCount(+e.target.value), children: [4, 6, 8, 10, 12, 15].map(n => o.jsx("option", { value: n, children: n + " sahne" }, n)) }) }),
            o.jsx(SxField, { label: "Sahne süresi", children: o.jsx("select", { className: "form-select", value: dur, onChange: e => setDur(+e.target.value), children: [5, 6, 8, 10, 12].map(n => o.jsx("option", { value: n, children: n + " saniye" }, n)) }) }),
            o.jsx(SxField, { label: "Anlatım tonu", children: o.jsx("select", { className: "form-select", value: tone, onChange: e => setTone(e.target.value), children: [["belgesel", "📚 Belgesel"], ["epik", "⚔️ Epik"], ["gizem", "🕵️ Gizemli"], ["cocuk", "🧸 Çocuklar için"]].map(([k, t]) => o.jsx("option", { value: k, children: t }, k)) }) })
        ] }),
        o.jsx("div", { className: "sx-grid2", children: [
            o.jsx(SxField, { label: "Görsel kaynağı", children: o.jsxs("select", { className: "form-select", value: studio.imageSource, onChange: e => SX.set({ imageSource: e.target.value }), children: [o.jsx("option", { value: "ai", children: "🤖 Yapay zeka üretsin (ücretsiz)" }), o.jsx("option", { value: "web", children: "🌐 Wikipedia / hazır görseller" })] }) }, "a"),
            o.jsx(SxField, { label: "Görsel tarzı", children: o.jsx("select", { className: "form-select", value: studio.imageStyle, disabled: studio.imageSource !== "ai", onChange: e => SX.set({ imageStyle: e.target.value }), children: Object.entries(SX_STYLES).map(([k, v]) => o.jsx("option", { value: k, children: v[0] }, k)) }) }, "b")
        ] }),
        o.jsx("button", { type: "button", className: "btn btn-primary", style: { width: "100%" }, disabled: busy, onClick: write, children: busy ? "⏳ Senaryo yazılıyor… (30-60 sn sürebilir)" : "✍️ Senaryoyu Yaz" }),
        err && o.jsx("div", { className: "sx-err", children: err }),
        text && o.jsxs("div", { style: { marginTop: 14 }, children: [
            o.jsx(SxField, { label: "Senaryo (istediğiniz yeri düzeltebilirsiniz)", children: o.jsx("textarea", { className: "form-textarea", style: { minHeight: 240, fontSize: "0.8rem", fontFamily: "var(--font-mono)" }, value: text, onChange: e => setText(e.target.value) }) }),
            o.jsx("button", { type: "button", className: "btn btn-primary", style: { width: "100%" }, onClick: () => { onClose(), onGenerate(text, count, dur); }, children: "🎬 Sahneleri ve Görselleri Oluştur" }),
            o.jsx("div", { className: "sx-hint", children: studio.imageSource === "ai" ? "Her sahne için yapay zeka görsel çizer; sahne başına 5-20 saniye sürebilir." : "Görseller Wikipedia'dan aranır, bulunamazsa otomatik arka plan çizilir." })
        ] })
    ] });
}
function SxBrandTab({ studio, onPreviewIntro }) {
    const pick = async e => { const f = e.target.files && e.target.files[0]; f && SX.set({ logo: await sxResizeImage(f) }); e.target.value = ""; };
    return o.jsxs("div", { children: [
        o.jsx(SxField, { label: "Kanal adı", hint: "Giriş kartında, kapanışta ve logo yoksa köşedeki filigranda görünür.", children: o.jsx("input", { className: "form-input", value: studio.channelName, placeholder: "Örn: Tarih Defteri", onChange: e => SX.set({ channelName: e.target.value }) }) }),
        o.jsx(SxField, { label: "Kanal logosu", children: o.jsxs("div", { style: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }, children: [
            studio.logo && o.jsx("img", { src: studio.logo, alt: "logo", style: { width: 56, height: 56, objectFit: "contain", borderRadius: 10, background: "rgba(255,255,255,0.06)", padding: 4 } }),
            o.jsxs("label", { className: "btn btn-secondary btn-sm", style: { cursor: "pointer" }, children: [studio.logo ? "Logoyu Değiştir" : "📁 Logo Seç (PNG/JPG)", o.jsx("input", { type: "file", accept: "image/*", style: { display: "none" }, onChange: pick })] }),
            studio.logo && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: () => SX.set({ logo: "" }), children: "✕ Kaldır" })
        ] }) }),
        o.jsxs("div", { className: "sx-grid2", children: [
            o.jsx(SxField, { label: "Filigran (köşe logosu)", children: o.jsxs("label", { className: "sx-check", children: [o.jsx("input", { type: "checkbox", checked: studio.watermarkOn, onChange: e => SX.set({ watermarkOn: e.target.checked }) }), "Videoda göster"] }) }),
            o.jsx(SxField, { label: "Konum", children: o.jsx("select", { className: "form-select", value: studio.logoPos, onChange: e => SX.set({ logoPos: e.target.value }), children: [["tr", "↗ Sağ üst"], ["tl", "↖ Sol üst"], ["br", "↘ Sağ alt"], ["bl", "↙ Sol alt"]].map(([k, t]) => o.jsx("option", { value: k, children: t }, k)) }) })
        ] }),
        o.jsxs("div", { className: "sx-grid2", children: [
            o.jsx(SxField, { label: `Saydamlık: %${Math.round(studio.logoOpacity * 100)}`, children: o.jsx("input", { type: "range", min: .2, max: 1, step: .05, value: studio.logoOpacity, onChange: e => SX.set({ logoOpacity: +e.target.value }), style: { width: "100%", accentColor: "var(--primary)" } }) }),
            o.jsx(SxField, { label: `Boyut: %${Math.round(studio.logoSize * 100)}`, children: o.jsx("input", { type: "range", min: .06, max: .25, step: .01, value: studio.logoSize, onChange: e => SX.set({ logoSize: +e.target.value }), style: { width: "100%", accentColor: "var(--primary)" } }) })
        ] }),
        o.jsx(SxField, { label: "Giriş kartı (intro)", hint: "Videonun başına 3 saniyelik, logolu ve kanal adlı açılış ekler. Kanal adı veya logo girildiğinde çalışır.", children: o.jsxs("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: [
            o.jsxs("label", { className: "sx-check", children: [o.jsx("input", { type: "checkbox", checked: studio.introOn, onChange: e => SX.set({ introOn: e.target.checked }) }), "Her videonun başına ekle"] }),
            o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", disabled: !SX.hasBrand(), onClick: onPreviewIntro, children: "▶ Girişi Önizle" })
        ] }) })
    ] });
}
function SxFxTab({ studio, onApplyCaptions }) {
    const tr = [["fade", "🌫️ Yumuşak geçiş (crossfade)"], ["black", "⬛ Karartarak geçiş"], ["slide", "➡️ Kaydırma"], ["zoom", "🔍 Yakınlaşarak"], ["flash", "⚡ Işık patlaması"], ["none", "✂️ Sert kesme (geçiş yok)"]];
    return o.jsxs("div", { children: [
        o.jsx(SxField, { label: "Sahne geçişi", hint: "Sahneler arasında 0,7 saniyelik geçiş efekti. Önizlemede ve videoda uygulanır.", children: o.jsx("select", { className: "form-select", value: studio.transition, onChange: e => SX.set({ transition: e.target.value }), children: tr.map(([k, t]) => o.jsx("option", { value: k, children: t }, k)) }) }),
        o.jsx(SxField, { label: "Tarih / yer kartları (üst yazı)", hint: "Her sahnenin üst yazısını sağ paneldeki \"🏷️ Üst yazı\" kutusuna yazabilirsiniz. Sahnenin ilk 5 saniyesinde şık bir kart olarak görünür.", children: o.jsxs("div", { style: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }, children: [
            o.jsxs("label", { className: "sx-check", children: [o.jsx("input", { type: "checkbox", checked: studio.captionsOn, onChange: e => SX.set({ captionsOn: e.target.checked }) }), "Üst yazıları göster"] }),
            o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: onApplyCaptions, children: "Boş olanlara sahne başlığını yaz" })
        ] }) })
    ] });
}
function SxMusicTab({ studio, setBgmTrack }) {
    const [busy, setBusy] = P.useState(!1), [err, setErr] = P.useState("");
    const pick = async e => {
        const f = e.target.files && e.target.files[0]; e.target.value = "";
        if (!f) return;
        setBusy(!0), setErr("");
        try {
            const data = await f.arrayBuffer();
            SX.musicBuffer = await new OfflineAudioContext(2, 1, 44100).decodeAudioData(data.slice(0));
            await IDB.set("music", { name: f.name, data }), SX.set({ musicName: f.name }), setBgmTrack("custom");
        } catch (x) { setErr("Müzik dosyası okunamadı: " + (x.message || x)); }
        finally { setBusy(!1); }
    };
    return o.jsxs("div", { children: [
        o.jsx(SxField, { label: "Kendi müziğin", hint: "MP3, WAV, M4A veya OGG seçebilirsiniz. Müzik video boyunca döngüde çalar, sonunda yavaşça kısılır. YouTube'da sorun yaşamamak için telifsiz müzik kullanın (ör. YouTube Ses Kitaplığı).", children: o.jsxs("div", { style: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }, children: [
            o.jsxs("label", { className: "btn btn-secondary btn-sm", style: { cursor: "pointer" }, children: [busy ? "⏳ Yükleniyor…" : "📁 Müzik Dosyası Seç", o.jsx("input", { type: "file", accept: "audio/*", style: { display: "none" }, onChange: pick })] }),
            studio.musicName && o.jsxs("span", { style: { fontSize: "0.8rem", color: "var(--accent-green)" }, children: ["✓ ", studio.musicName] }),
            studio.musicName && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: () => setBgmTrack("custom"), children: "Bu müziği kullan" }),
            studio.musicName && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: async () => { SX.musicBuffer = null, await IDB.del("music").catch(() => { }), SX.set({ musicName: "" }), setBgmTrack("cinematic"); }, children: "✕ Kaldır" })
        ] }) }),
        err && o.jsx("div", { className: "sx-err", children: err }),
        o.jsx(SxField, { label: "Otomatik ses kısma", hint: "Seslendirme konuşurken müzik otomatik olarak kısılır, aralarda tekrar yükselir.", children: o.jsxs("label", { className: "sx-check", children: [o.jsx("input", { type: "checkbox", checked: studio.duck, onChange: e => SX.set({ duck: e.target.checked }) }), "Konuşurken müziği kıs"] }) })
    ] });
}
function SxThumbTab({ scenes, aspect, project, currentIndex }) {
    const cv = P.useRef(null), [idx, setIdx] = P.useState(Math.min(currentIndex || 0, Math.max(0, scenes.length - 1))), [fmt, setFmt] = P.useState(aspect === "portrait" ? "portrait" : "landscape"),
        presets = { malazgirt: "Malazgirt: Anadolu'nun Kapısı Açıldı", fatih: "İstanbul'un Fethi: Bir Çağ Kapandı", saladin: "Selahaddin Kudüs'ü Nasıl Aldı?" },
        [title, setTitle] = P.useState(presets[project] || (SX.studio.lastTopic ? sxTitleCase(SX.studio.lastTopic) : sxCleanTitle(scenes[0] && (scenes[0].caption || scenes[0].title)) || "Tarihin En Büyük Zaferi")),
        [color, setColor] = P.useState("#facc15"), [badge, setBadge] = P.useState(""), [logo, setLogo] = P.useState(!0), [img, setImg] = P.useState(null), studio = useStudio();
    P.useEffect(() => { const s = scenes[idx]; if (!s || !s.imageUrl) return setImg(null); Di(s.imageUrl).then(r => setImg(r.img)); }, [idx, scenes]);
    P.useEffect(() => { const c = cv.current; if (!c) return; c.width = fmt === "portrait" ? 1080 : 1280, c.height = fmt === "portrait" ? 1920 : 720, sxDrawThumb(c, { img, title, color, badge, logo }); }, [img, title, color, badge, logo, fmt, studio]);
    const save = () => { const nm = `kapak_${(title || "video").toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 40) || "video"}.png`; cv.current.toBlob(b => { if (!b) return alert("Kapak kaydedilemedi."); const u = URL.createObjectURL(b); sxDownload(u, nm), setTimeout(() => URL.revokeObjectURL(u), 4e3); }, "image/png"); };
    return o.jsxs("div", { className: "sx-thumb", children: [
        o.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [
            o.jsx(SxField, { label: "Başlık", hint: "Son satır renkli vurgulanır. Kısa ve çarpıcı başlıklar daha çok tıklanır.", children: o.jsx("textarea", { className: "form-textarea", style: { minHeight: 70 }, value: title, onChange: e => setTitle(e.target.value) }) }),
            o.jsxs("div", { className: "sx-grid2", children: [
                o.jsx(SxField, { label: "Arka plan sahnesi", children: o.jsx("select", { className: "form-select", value: idx, onChange: e => setIdx(+e.target.value), children: scenes.map((s, i) => o.jsx("option", { value: i, children: `Sahne ${i + 1}` }, i)) }) }),
                o.jsx(SxField, { label: "Format", children: o.jsxs("select", { className: "form-select", value: fmt, onChange: e => setFmt(e.target.value), children: [o.jsx("option", { value: "landscape", children: "YouTube (1280×720)" }), o.jsx("option", { value: "portrait", children: "Shorts / TikTok (1080×1920)" })] }) })
            ] }),
            o.jsxs("div", { className: "sx-grid2", children: [
                o.jsx(SxField, { label: "Vurgu rengi", children: o.jsx("div", { style: { display: "flex", gap: 6 }, children: ["#facc15", "#ef4444", "#22d3ee", "#4ade80", "#ffffff"].map(c => o.jsx("button", { type: "button", onClick: () => setColor(c), style: { width: 28, height: 28, borderRadius: 8, background: c, border: color === c ? "3px solid #fff" : "1px solid rgba(255,255,255,0.3)", cursor: "pointer" } }, c)) }) }),
                o.jsx(SxField, { label: "Etiket (isteğe bağlı)", children: o.jsx("input", { className: "form-input", value: badge, placeholder: "Örn: GERÇEK HİKÂYE", onChange: e => setBadge(e.target.value) }) })
            ] }),
            o.jsxs("label", { className: "sx-check", style: { marginBottom: 12 }, children: [o.jsx("input", { type: "checkbox", checked: logo, onChange: e => setLogo(e.target.checked) }), "Kanal logosunu ekle", !studio.logo && " (önce Kanal Markası'ndan logo seçin)"] }),
            o.jsx("button", { type: "button", className: "btn btn-primary", onClick: save, children: "💾 Kapağı PNG Olarak Kaydet" })
        ] }),
        o.jsx("div", { className: "sx-thumb-preview", children: o.jsx("canvas", { ref: cv, style: fmt === "portrait" ? { height: 420, width: "auto" } : { width: "100%", height: "auto" } }) })
    ] });
}
function SxYtTab({ scenes, aspect, project, outroOn, outroDur }) {
    const data = P.useMemo(() => sxYoutube({ scenes, project, outroOn, outroDur, portrait: aspect === "portrait" }), [scenes, project, outroOn, outroDur, aspect]),
        [copied, setCopied] = P.useState(""), copy = (k, t) => { navigator.clipboard.writeText(t).then(() => { setCopied(k), setTimeout(() => setCopied(""), 1500); }).catch(() => { }); };
    const all = `BAŞLIK ÖNERİLERİ:\n${data.titles.map((t, i) => `${i + 1}. ${t}`).join("\n")}\n\nYOUTUBE AÇIKLAMASI:\n${data.description}\n\nETİKETLER:\n${data.tags}\n\nTIKTOK / INSTAGRAM AÇIKLAMASI:\n${data.social}\n${data.kids ? "\nNOT: YouTube'da \"Çocuklara özel\" (Made for Kids) olarak işaretleyin.\n" : ""}`;
    const btn = (k, t) => o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: () => copy(k, t), children: copied === k ? "✓ Kopyalandı" : "📋 Kopyala" });
    return o.jsxs("div", { children: [
        o.jsx("p", { className: "sx-hint", style: { marginBottom: 10 }, children: "Sahnelerinizden otomatik hazırlandı. Bölümler (zaman damgaları) YouTube'da videonun bölümlere ayrılmasını sağlar." }),
        o.jsx(SxField, { label: "Başlık önerileri", children: o.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: data.titles.map((t, i) => o.jsxs("div", { className: "sx-line", children: [o.jsx("span", { children: t }), btn("t" + i, t)] }, i)) }) }),
        o.jsx(SxField, { label: "Açıklama", children: o.jsxs("div", { children: [o.jsx("textarea", { className: "form-textarea", readOnly: !0, style: { minHeight: 200, fontSize: "0.8rem" }, value: data.description }), o.jsx("div", { style: { marginTop: 6 }, children: btn("d", data.description) })] }) }),
        data.kids && o.jsx("div", { className: "sv-warn", style: { marginBottom: 10 }, children: "🧸 Bu bir çocuk videosu: YouTube'a yüklerken \"Çocuklara özel\" (Made for Kids) seçeneğini işaretleyin." }),
        aspect === "portrait" && data.total > 60 && o.jsx("div", { className: "sv-warn", style: { marginBottom: 10 }, children: `⏱️ Video yaklaşık ${Math.round(data.total)} saniye; Shorts/Reels için 60 saniyenin altında tutmak daha iyi sonuç verir.` }),
        o.jsx(SxField, { label: "TikTok / Instagram açıklaması", children: o.jsxs("div", { children: [o.jsx("textarea", { className: "form-textarea", readOnly: !0, style: { minHeight: 70, fontSize: "0.8rem" }, value: data.social }), o.jsx("div", { style: { marginTop: 6 }, children: btn("s", data.social) })] }) }),
        o.jsx(SxField, { label: "Etiketler (YouTube etiket kutusuna)", children: o.jsxs("div", { className: "sx-line", children: [o.jsx("span", { style: { fontSize: "0.78rem" }, children: data.tags }), btn("g", data.tags)] }) }),
        o.jsx("button", { type: "button", className: "btn btn-primary", onClick: () => { const u = URL.createObjectURL(new Blob([all], { type: "text/plain;charset=utf-8" })); sxDownload(u, "youtube_metni.txt"), setTimeout(() => URL.revokeObjectURL(u), 3e3); }, children: "📄 Hepsini .txt Olarak Kaydet" })
    ] });
}

/* ==================================================================================
 *  AI Video Studio v1.6 — Uzun Video Stüdyosu (5-10 dakika)
 *  Konu -> bölüm planı -> bölüm bölüm senaryo -> görseller -> stüdyo + dışa aktarma
 * ================================================================================== */
const LV_TONES = { belgesel: "ciddi, bilgilendirici belgesel anlatımı", epik: "epik, heyecanlı, sinematik ve duygusal anlatım", gizem: "merak uyandıran, gizemli ve sürükleyici anlatım", cocuk: "çocuklar için sade, sıcak ve eğlenceli anlatım (7-12 yaş)" };
const LV_SCENE_SEC = 9;

async function lvLLM(system, prompt, ms = 18e4) {
    const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), ms);
    try {
        const r = await fetch("/api/llm", { method: "POST", signal: ctl.signal, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ system, prompt }) });
        const t = await r.text();
        if (!r.ok) throw new Error(t || "Sunucu hatası");
        return t;
    } finally { clearTimeout(tm); }
}
function lvParseOutline(text) {
    text = String(text || "").replace(/\*\*|__/g, "").replace(/^[ \t]*#{1,6}[ \t]*/gm, "").replace(/^[ \t]*[-•][ \t]+/gm, "");
    const out = [], re = /(?:BÖLÜM|BOLUM|CHAPTER)\s*(\d+)\s*[—–:\-.]*\s*([^\n]*)\n+\s*(?:ÖZET|OZET|SUMMARY)\s*:\s*([\s\S]*?)(?=\n\s*(?:BÖLÜM|BOLUM|CHAPTER)\s*\d+|$)/gi;
    let m;
    while ((m = re.exec(text))) out.push({ title: m[2].replace(/[*#"“”]/g, "").trim() || `Bölüm ${m[1]}`, summary: m[3].replace(/[*#]/g, "").trim(), scenes: [], status: "plan" });
    return out;
}
// "... 3. sahnede ..." gibi anlatım içindeki ifadeler yeni sahne sanılmasın
function lvClean(text) {
    return text.split("\n").map(l => { const m = /^\s*\**\s*(?:SAHNE|SCENE)\s*\d+/i.exec(l), head = m ? m[0] : "", rest = l.slice(head.length); return head.replace(/\*/g, "") + (m ? rest.replace(/\*/g, "") : rest).replace(/(sahne|scene)(\s*\d)/gi, "$1\u2060$2"); }).join("\n");
}
function lvChapterCount(min) { return min <= 5 ? 6 : min <= 7 ? 8 : 10; }
function lvTotals(chs) {
    const sc = chs.reduce((a, c) => a + c.scenes.length, 0), sec = chs.reduce((a, c) => a + c.scenes.reduce((b, s) => b + (s.duration || LV_SCENE_SEC), 0), 0), img = chs.reduce((a, c) => a + c.scenes.filter(s => s.imageUrl).length, 0);
    return { sc, sec, img };
}

function LongStudio({ onSendToStudio }) {
    const studio = useStudio();
    const [job, setJob] = P.useState({ topic: "", minutes: 7, tone: "belgesel", aspect: "landscape", chapters: [], log: "" });
    const [busy, setBusy] = P.useState(""), [err, setErr] = P.useState(""), [prog, setProg] = P.useState(0), stopRef = P.useRef(!1), jobRef = P.useRef(job), loaded = P.useRef(!1);
    jobRef.current = job;
    const upd = patch => setJob(j => { const n = typeof patch == "function" ? patch(j) : { ...j, ...patch }; return jobRef.current = n, n; });
    P.useEffect(() => { IDB.get("longjob").then(j => { j && j.chapters && setJob(o => ({ ...o, ...j })); }).catch(() => { }).finally(() => { loaded.current = !0; }); }, []);
    P.useEffect(() => { if (!loaded.current) return; const t = setTimeout(() => IDB.set("longjob", job).catch(() => { }), 500); return () => clearTimeout(t); }, [job]);

    const T = lvTotals(job.chapters), targetSec = job.minutes * 60;
    const step = job.chapters.length === 0 ? 1 : job.chapters.some(c => c.scenes.length === 0) ? 2 : T.img < T.sc ? 3 : 4;

    const makeOutline = async () => {
        if (!job.topic.trim()) return setErr("Lütfen videonun konusunu yazın."), !1;
        setErr(""), setBusy("outline"), setProg(5), SX.set({ lastTopic: job.topic.trim() });
        try {
            const K = lvChapterCount(job.minutes);
            const txt = await lvLLM("Sen YouTube için uzun Türkçe tarih ve belgesel videoları planlayan deneyimli bir senaristsin.",
                `Konu: ${job.topic.trim()}\nToplam süre: yaklaşık ${job.minutes} dakika\nAnlatım tonu: ${LV_TONES[job.tone]}\n\n${K} bölümlük bir video planı yaz. İlk bölüm izleyiciyi yakalayan güçlü bir giriş, son bölüm etkileyici bir kapanış ve özet olsun. Bölümler kronolojik ve birbirini tekrar etmeyen şekilde ilerlesin. Tarihi bilgiler doğru olsun; emin olmadığın isim, tarih ve sayıları yazma.\n\nYALNIZCA şu formatta yaz:\n\nBÖLÜM 1 — Bölüm başlığı\nÖZET: Bu bölümde anlatılacakların 2-3 cümlelik özeti.\n\nBÖLÜM 2 — Bölüm başlığı\nÖZET: ...`);
            const chs = lvParseOutline(txt);
            if (chs.length < 3) throw new Error("Bölüm planı beklenen formatta gelmedi, tekrar deneyin.");
            return upd({ chapters: chs.slice(0, 12) }), setProg(100), chs.slice(0, 12);
        } catch (e) { return setErr("Bölüm planı oluşturulamadı: " + e.message), !1; }
        finally { setBusy(""); }
    };
    const writeChapters = async (chsIn) => {
        setErr(""), setBusy("scenes"), stopRef.current = !1;
        let chs = (chsIn || jobRef.current.chapters).map(c => ({ ...c }));
        const per = Math.max(3, Math.round(targetSec / chs.length / LV_SCENE_SEC)), words = Math.round(LV_SCENE_SEC * 2.3);
        try {
            for (let i = 0; i < chs.length; i++) {
                if (stopRef.current) break;
                if (chs[i].scenes.length) continue;
                setProg(Math.round(i / chs.length * 100)), upd({ log: `Bölüm ${i + 1}/${chs.length} yazılıyor: ${chs[i].title}` });
                const prev = i > 0 ? `Önceki bölüm: "${chs[i - 1].title}" — ${chs[i - 1].summary}` : "Bu, videonun açılış bölümüdür; ilk cümle merak uyandıran güçlü bir giriş olsun.";
                const next = i < chs.length - 1 ? `Sonraki bölüm: "${chs[i + 1].title}" (onun konusuna girme).` : "Bu, videonun son bölümüdür; etkileyici bir kapanış cümlesiyle bitir.";
                let scenes = [];
                for (let tryN = 0; tryN < 2 && scenes.length < 2; tryN++) {
                    try {
                        const txt = await lvLLM("Sen YouTube için Türkçe tarih ve belgesel videoları yazan deneyimli bir senaristsin.",
                            `Videonun konusu: ${job.topic.trim()}\nAnlatım tonu: ${LV_TONES[job.tone]}\nŞu an yazılacak bölüm (${i + 1}/${chs.length}): "${chs[i].title}" — ${chs[i].summary}\n${prev}\n${next}\n\nBu bölüm için ${per} sahne yaz. Her sahnenin seslendirmesi yaklaşık ${LV_SCENE_SEC} saniye (en fazla ${words} kelime) olsun ve bir önceki sahneden doğal şekilde devam etsin. Tarihi bilgiler doğru olsun.\nGÖRSEL satırı İngilizce, ayrıntılı, sinematik bir görsel tarifi olsun (kişiler, mekân, dönem kıyafetleri, ışık, kamera açısı); görselde yazı olmasın.\nSESLENDİRME satırı akıcı Türkçe olsun.\n\nYALNIZCA şu formatta yaz:\n\nSAHNE 1 — Kısa başlık\nGÖRSEL: ...\nSESLENDİRME: ...\n\nSAHNE 2 — Kısa başlık\nGÖRSEL: ...\nSESLENDİRME: ...`);
                        scenes = sm(lvClean(txt), LV_SCENE_SEC, per + 2).filter(s => s.voiceText && s.visualPrompt);
                    } catch (e) { if (tryN === 1) throw e; }
                }
                if (scenes.length < 2) throw new Error(`Bölüm ${i + 1} için sahneler yazılamadı.`);
                chs[i] = { ...chs[i], status: "written", scenes: scenes.map((s, k) => ({ ...s, id: `long_${Date.now()}_${i}_${k}`, chapter: i, duration: LV_SCENE_SEC, caption: k === 0 ? chs[i].title : "", imageUrl: "" })) };
                upd({ chapters: chs.map(c => ({ ...c })) });
            }
            return setProg(100), upd({ log: "" }), chs;
        } catch (e) { return setErr("Senaryo yazılamadı: " + e.message + " — \"Devam Et\" ile kaldığı yerden sürdürebilirsiniz."), !1; }
        finally { setBusy(""); }
    };
    const makeImages = async (chsIn) => {
        setErr(""), setBusy("images"), stopRef.current = !1;
        let chs = (chsIn || jobRef.current.chapters).map(c => ({ ...c, scenes: c.scenes.map(s => ({ ...s })) }));
        const all = chs.flatMap((c, ci) => c.scenes.map((s, si) => [ci, si])), todo = all.filter(([ci, si]) => !chs[ci].scenes[si].imageUrl), t0 = Date.now();
        try {
            for (let n = 0; n < todo.length; n++) {
                if (stopRef.current) break;
                const [ci, si] = todo[n], s = chs[ci].scenes[si], el = (Date.now() - t0) / 1e3, eta = n > 0 ? Math.round(el / n * (todo.length - n) / 60) : null;
                setProg(Math.round(n / todo.length * 100)), upd({ log: `Görsel ${n + 1}/${todo.length} çiziliyor — Bölüm ${ci + 1}${eta !== null ? ` · kalan ~${Math.max(1, eta)} dk` : ""}` });
                let url = await Yc(s.visualPrompt || s.voiceText || job.topic, si + 1);
                (await Di(url)).success || (url = dm(job.topic, si + 1));
                chs[ci].scenes[si] = { ...s, imageUrl: url };
                n % 2 === 0 && upd({ chapters: chs.map(c => ({ ...c, scenes: [...c.scenes] })) });
            }
            return upd({ chapters: chs.map(c => ({ ...c, scenes: [...c.scenes] })), log: "" }), setProg(100), chs;
        } catch (e) { return upd({ chapters: chs }), setErr("Görseller üretilirken hata: " + e.message), !1; }
        finally { setBusy(""); }
    };
    const send = (autoExport, chsIn) => {
        const chs = chsIn || jobRef.current.chapters, scenes = chs.flatMap(c => c.scenes).map((s, k) => ({ ...s, sceneNumber: k + 1 }));
        if (!scenes.length) return;
        onSendToStudio(scenes, { aspect: job.aspect, autoExport });
    };
    const runAll = async () => {
        let chs = jobRef.current.chapters;
        if (!chs.length && !(chs = await makeOutline())) return;
        if (stopRef.current) return;
        if (chs.some(c => !c.scenes.length) && !(chs = await writeChapters(chs))) return;
        if (stopRef.current) return;
        if (!(chs = await makeImages(chs)) || stopRef.current) return;
        send(!0, chs);
    };
    const reset = () => { confirm("Mevcut uzun video planı silinsin mi?") && (upd({ chapters: [], log: "" }), setErr(""), setProg(0)); };
    const editChapter = (i, patch) => upd(j => ({ ...j, chapters: j.chapters.map((c, k) => k === i ? { ...c, ...patch } : c) }));
    const delChapter = i => upd(j => ({ ...j, chapters: j.chapters.filter((c, k) => k !== i) }));
    const rewriteChapter = i => upd(j => ({ ...j, chapters: j.chapters.map((c, k) => k === i ? { ...c, scenes: [], status: "plan" } : c) }));

    const stepBox = (n, title, desc, action) => o.jsxs("div", { className: "lv-step" + (step === n ? " active" : step > n ? " done" : ""), children: [
        o.jsx("div", { className: "lv-step-num", children: step > n ? "✓" : n }),
        o.jsxs("div", { style: { flex: 1 }, children: [o.jsx("div", { className: "lv-step-title", children: title }), o.jsx("div", { className: "sx-hint", style: { marginTop: 2 }, children: desc }), action && o.jsx("div", { style: { marginTop: 8 }, children: action })] })
    ] });
    const dis = !!busy;
    const fmtMin = s => `${Math.floor(s / 60)} dk ${Math.round(s % 60)} sn`;

    return o.jsxs("div", { className: "lv-wrap", children: [
        o.jsxs("div", { className: "studio-panel lv-left", children: [
            o.jsx("div", { className: "panel-header", children: o.jsx("span", { className: "panel-title", children: "🎞️ Uzun Video Stüdyosu (5-10 dk)" }) }),
            o.jsxs("div", { className: "panel-content", style: { gap: 12 }, children: [
                o.jsx(SxField, { label: "Video konusu", children: o.jsx("textarea", { className: "form-textarea", style: { minHeight: 70 }, value: job.topic, disabled: dis || job.chapters.length > 0, placeholder: "Örn: Osmanlı İmparatorluğu'nun kuruluşu, Çanakkale Savaşı, Kanuni Sultan Süleyman'ın hayatı…", onChange: e => upd({ topic: e.target.value }) }) }),
                o.jsxs("div", { className: "sx-grid2", children: [
                    o.jsx(SxField, { label: "Hedef süre", children: o.jsx("select", { className: "form-select", value: job.minutes, disabled: dis || job.chapters.length > 0, onChange: e => upd({ minutes: +e.target.value }), children: [5, 6, 7, 8, 10].map(m => o.jsx("option", { value: m, children: `${m} dakika` }, m)) }) }),
                    o.jsx(SxField, { label: "Anlatım tonu", children: o.jsx("select", { className: "form-select", value: job.tone, disabled: dis, onChange: e => upd({ tone: e.target.value }), children: [["belgesel", "📚 Belgesel"], ["epik", "⚔️ Epik"], ["gizem", "🕵️ Gizemli"], ["cocuk", "🧸 Çocuklar için"]].map(([k, t]) => o.jsx("option", { value: k, children: t }, k)) }) })
                ] }),
                o.jsxs("div", { className: "sx-grid2", children: [
                    o.jsx(SxField, { label: "Format", children: o.jsx("select", { className: "form-select", value: job.aspect, disabled: dis, onChange: e => upd({ aspect: e.target.value }), children: [["landscape", "🖥️ YouTube 16:9"], ["portrait", "📱 Dikey 9:16"]].map(([k, t]) => o.jsx("option", { value: k, children: t }, k)) }) }),
                    o.jsx(SxField, { label: "Görsel tarzı", children: o.jsx("select", { className: "form-select", value: studio.imageStyle, disabled: dis, onChange: e => SX.set({ imageStyle: e.target.value, imageSource: "ai" }), children: Object.entries(SX_STYLES).map(([k, v]) => o.jsx("option", { value: k, children: v[0] }, k)) }) })
                ] }),
                o.jsx("button", { type: "button", className: "btn btn-primary", style: { width: "100%", padding: 13 }, disabled: dis, onClick: runAll, children: dis ? "⏳ Çalışıyor…" : T.sc && T.img === T.sc ? "🎬 Videoyu Oluştur" : job.chapters.length ? "▶ Kaldığı Yerden Devam Et (Otomatik)" : "🚀 Tümünü Otomatik Yap" }),
                o.jsx("div", { className: "sx-hint", children: "Tek tıkla: bölüm planı → senaryo → görseller → video. Dilerseniz aşağıdan adım adım ilerleyip her adımı düzenleyebilirsiniz." }),
                busy && o.jsxs("div", { children: [o.jsx("div", { className: "progress-bar-container", children: o.jsx("div", { className: "progress-bar-fill", style: { width: `${prog}%` } }) }), o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: 8, marginTop: 6, fontSize: "0.75rem", color: "var(--text-muted)" }, children: [o.jsx("span", { children: job.log || "Hazırlanıyor…" }), o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", style: { padding: "2px 8px" }, onClick: () => { stopRef.current = !0; }, children: "⏸ Durdur" })] })] }),
                err && o.jsx("div", { className: "sx-err", children: err }),
                o.jsxs("div", { className: "lv-steps", children: [
                    stepBox(1, "Bölüm planı", "Yapay zeka konuyu bölümlere ayırır. Başlık ve özetleri düzenleyebilirsiniz.", step === 1 && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", disabled: dis, onClick: makeOutline, children: "📋 Bölüm Planı Oluştur" })),
                    stepBox(2, "Senaryo", "Her bölüm için sahneler, görsel tarifleri ve Türkçe seslendirme yazılır.", step === 2 && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", disabled: dis, onClick: () => writeChapters(), children: "✍️ Senaryoyu Yaz" })),
                    stepBox(3, "Görseller", "Her sahne için yapay zeka görsel çizer. Uzun sürebilir; durdurup sonra devam edebilirsiniz.", step === 3 && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", disabled: dis, onClick: () => makeImages(), children: "🎨 Görselleri Üret" })),
                    stepBox(4, "Video", "Sahneler stüdyoya aktarılır; seslendirme, müzik, geçişler, logo ve kapanış eklenip video diske kaydedilir.", step === 4 && o.jsxs("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: [o.jsx("button", { type: "button", className: "btn btn-primary btn-sm", disabled: dis, onClick: () => send(!0), children: "🎬 Videoyu Oluştur" }), o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", disabled: dis, onClick: () => send(!1), children: "✏️ Önce Stüdyoda Düzenle" })] }))
                ] }),
                job.chapters.length > 0 && !dis && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: reset, children: "🗑️ Yeni Konu (planı sıfırla)" })
            ] })
        ] }),
        o.jsxs("div", { className: "studio-panel lv-right", children: [
            o.jsxs("div", { className: "panel-header", children: [
                o.jsx("span", { className: "panel-title", children: "📑 Bölümler ve Sahneler" }),
                o.jsxs("span", { className: "sx-hint", style: { margin: 0 }, children: [job.chapters.length, " bölüm · ", T.sc, " sahne · ", T.sc ? fmtMin(T.sec) : `hedef ${job.minutes} dk`, T.sc ? ` · ${T.img}/${T.sc} görsel` : ""] })
            ] }),
            o.jsx("div", { className: "lv-list", children: job.chapters.length === 0 ? o.jsxs("div", { className: "lv-empty", children: [o.jsx("div", { style: { fontSize: 44 }, children: "🎞️" }), o.jsx("h3", { children: "5-10 dakikalık belgesel videolar" }), o.jsx("p", { children: "Konuyu yazın ve \"Tümünü Otomatik Yap\"a basın. Yapay zeka videoyu bölümlere ayırır, her bölümü sahne sahne yazar, görselleri çizer ve videoyu seçtiğiniz sesle seslendirerek oluşturur." }), o.jsxs("p", { className: "sx-hint", children: ["10 dakikalık bir video yaklaşık 60-70 sahneden oluşur. Görsellerin çizilmesi 10-25 dakika, videonun kaydedilmesi video süresi kadar sürer. İşlem sırasında bilgisayarı uyku moduna almayın."] })] })
                : job.chapters.map((c, i) => o.jsxs("div", { className: "lv-chapter", children: [
                    o.jsxs("div", { className: "lv-ch-head", children: [
                        o.jsx("span", { className: "lv-ch-num", children: i + 1 }),
                        o.jsx("input", { className: "form-input lv-ch-title", value: c.title, disabled: dis, onChange: e => editChapter(i, { title: e.target.value }) }),
                        o.jsx("span", { className: "sx-hint", style: { margin: 0, whiteSpace: "nowrap" }, children: c.scenes.length ? `${c.scenes.length} sahne` : "yazılmadı" }),
                        c.scenes.length > 0 && !dis && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", title: "Bu bölümü yeniden yazdır", onClick: () => rewriteChapter(i), children: "↻" }),
                        !dis && o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", title: "Bölümü sil", onClick: () => delChapter(i), children: "✕" })
                    ] }),
                    c.scenes.length === 0 ? o.jsx("textarea", { className: "form-textarea", style: { minHeight: 48, fontSize: "0.78rem", marginTop: 6 }, value: c.summary, disabled: dis, onChange: e => editChapter(i, { summary: e.target.value }) })
                        : o.jsx("div", { className: "lv-scenes", children: c.scenes.map(s => o.jsxs("div", { className: "lv-scene", title: s.voiceText, children: [
                            s.imageUrl ? o.jsx("img", { src: s.imageUrl, alt: "" }) : o.jsx("div", { className: "lv-noimg", children: "🎨" }),
                            o.jsx("div", { className: "lv-scene-txt", children: s.voiceText })
                        ] }, s.id)) })
                ] }, i))
            })
        ] })
    ] });
}

// Yapay zeka çıktısındaki biçim farklarını (kalın yazı, başlık işaretleri, küçük harfli etiketler) temizler
function lvNormScript(t) {
    return String(t || "").replace(/\*\*|__/g, "").replace(/^[ \t]*#{1,6}[ \t]*/gm, "")
        .replace(/^[ \t]*(?:sahne|Sahne|SAHNE|scene|Scene|SCENE)[ \t]*(\d+)/gm, "SAHNE $1")
        .replace(/^[ \t]*(?:görsel|Görsel|GÖRSEL|GORSEL|visual|Visual|VISUAL|görsel tarifi|Görsel tarifi|GÖRSEL TARİFİ)[ \t]*:/gm, "GÖRSEL:")
        .replace(/^[ \t]*(?:seslendirme|Seslendirme|SESLENDİRME|SESLENDIRME|anlatım|Anlatım|ANLATIM|narration|Narration|NARRATION|türkçe seslendirme|Türkçe seslendirme|TÜRKÇE SESLENDİRME)[ \t]*:/gm, "SESLENDİRME:");
}

/* ==================================================================================
 *  AI Video Studio v1.7 — Kısa Video Stüdyosu (Shorts / TikTok / Reels, ≤60 sn)
 *  İçerik panosundaki kısa video planları + seriye göre hazır ayarlar
 * ================================================================================== */
const SV_SERIES = {
    tarih: { label: "🏛️ Tarih", voice: "edge:tr-TR-AhmetNeural", style: "painting", bgm: "cinematic", color: "#f59e0b",
        rules: "- 1. sahne ilk 2 saniyede izleyiciyi yakalayan bir kanca olsun (merak uyandıran bir soru ya da şaşırtıcı bir bilgi).\n- Videonun merkezinde tek bir şaşırtıcı bilgi olsun; gereksiz ayrıntıya girme.\n- Notlarda tartışmalı denen noktaları kesin gerçek gibi sunma (\"kaynaklara göre\", \"rivayete göre\" de).\n- Tarihi kişiler için uydurma alıntı yazma.\n- Son sahne akılda kalan kısa bir sonuç cümlesiyle bitsin.\n- GÖRSEL: İngilizce, dikey 9:16 kadraja uygun, dönem tablosu ya da sinematik tarihi sahne; görselde yazı olmasın." },
    icat: { label: "💡 İcat", voice: "edge:tr-TR-AhmetNeural", style: "cinematic", bgm: "cinematic", color: "#22d3ee",
        rules: "- 1. sahne ilk 2 saniyede izleyiciyi yakalayan bir kanca olsun (şaşırtıcı bir soru).\n- Videonun merkezinde tek bir şaşırtıcı bilgi olsun.\n- Notlarda doğrulanmamış denen iddiaları kullanma.\n- Son sahne akılda kalan kısa bir sonuç cümlesiyle bitsin.\n- GÖRSEL: İngilizce, dikey 9:16 kadraja uygun, dönemine uygun gerçekçi sahne; görselde yazı olmasın." },
    cocuk: { label: "🧸 Çocuk", voice: "edge:tr-TR-EmelNeural", style: "cartoon", bgm: "motivational", color: "#f472b6",
        rules: "- Hedef kitle 1-8 yaş: kısa ve basit cümleler (cümle başına en fazla 8 kelime), sıcak ve neşeli ton.\n- Tekrar eden eğlenceli bir nakarat kullan.\n- Korkutucu, üzücü ya da şiddet içeren hiçbir ayrıntı olmasın; marka/karakter adı kullanma.\n- Sayma, renk, şekil gibi öğretici öğeler ekle.\n- Son sahne çocuklara basit bir soru sorsun.\n- EKRAN yazısı en fazla 4 kelime olsun.\n- GÖRSEL: İngilizce, colorful cute 3D cartoon, kid friendly, soft lighting, no scary elements; görselde yazı olmasın." }
};
const SV_VOICES = [["edge:tr-TR-AhmetNeural", "Ahmet (erkek)"], ["edge:tr-TR-EmelNeural", "Emel (kadın)"], ["google", "Google (kadın)"], ["edge:en-US-BrianMultilingualNeural", "Brian (çok dilli erkek)"], ["edge:en-US-EmmaMultilingualNeural", "Emma (çok dilli kadın)"]];
const SV_STAGE = { fikir: "Fikir", arastirma: "Araştırma", uretim: "Üretim", kurgu: "Kurgu", hazir: "Hazır", yayinda: "Yayında" };

function svSceneCount(sec) { return Math.max(3, Math.round((sec - 6) / 7.5)); }
function svCleanNotes(t) {
    return String(t || "").replace(/https?:\/\/\S+/g, "").replace(/\n{3,}/g, "\n\n").trim().slice(0, 5000);
}
function svPrompt({ title, series, seconds, notes }) {
    const n = svSceneCount(seconds), w = series === "cocuk" ? 12 : 17, S = SV_SERIES[series] || SV_SERIES.tarih;
    return `Video başlığı: ${title}\nSeri: ${S.label.replace(/^\S+\s/, "")}\nHedef süre: yaklaşık ${seconds} saniye — tam ${n} sahne; her sahnenin seslendirmesi en fazla ${w} kelime.\n\n` +
        (notes ? `Doğrulanmış bilgiler ve notlar (YALNIZCA bunlara dayan; burada olmayan tarih, isim ve sayı ekleme):\n${svCleanNotes(notes)}\n\n` : "Tarihi bilgiler doğru olsun; emin olmadığın tarih, isim ve sayıları yazma.\n\n") +
        `Kurallar:\n${S.rules}\n- EKRAN satırı videoda büyük harflerle görünecek, en fazla 5 kelimelik kısa ve çarpıcı bir yazı olsun.\n- SESLENDİRME akıcı, konuşma dilinde Türkçe olsun.\n\nYALNIZCA şu formatta yaz, başka açıklama ekleme:\n\nSAHNE 1 — Kısa başlık\nEKRAN: ...\nGÖRSEL: ...\nSESLENDİRME: ...\n\nSAHNE 2 — Kısa başlık\nEKRAN: ...\nGÖRSEL: ...\nSESLENDİRME: ...`;
}
// SAHNE bloklarından EKRAN yazılarını çıkarır
function svScreens(text) {
    const t = lvNormScript(text), blocks = t.split(/\n(?=[ \t]*SAHNE\s*\d+)/i).filter(b => /^\s*SAHNE\s*\d+/i.test(b));
    return blocks.map(b => { const m = /^[ \t]*ekran(?:[ \t]+yaz[ıi]s[ıi])?[ \t]*:[ \t]*(.+)$/im.exec(b); return m ? m[1].replace(/["“”*]/g, "").trim() : ""; });
}
// EKRAN satırları seslendirmeye karışmasın diye ayrıştırmadan önce çıkarılır
function svStripScreens(text) { return lvNormScript(text).replace(/^[ \t]*ekran(?:[ \t]+yaz[ıi]s[ıi])?[ \t]*:.*$/gim, ""); }

function ShortStudio({ onSendToStudio }) {
    const studio = useStudio(), [plans, setPlans] = P.useState([]), [filter, setFilter] = P.useState("all"), [sel, setSel] = P.useState(null),
        [form, setForm] = P.useState({ title: "", series: "tarih", seconds: 45, notes: "", voice: SV_SERIES.tarih.voice, style: SV_SERIES.tarih.style, sources: [] }),
        [script, setScript] = P.useState(""), [busy, setBusy] = P.useState(""), [err, setErr] = P.useState(""), [log, setLog] = P.useState(""), [prog, setProg] = P.useState(0), drafts = P.useRef({});
    P.useEffect(() => {
        fetch("/plans.json").then(r => r.ok ? r.json() : { plans: [] }).then(d => setPlans(d.plans || [])).catch(() => setPlans([]));
        IDB.get("shortdrafts").then(d => { d && (drafts.current = d); }).catch(() => { });
    }, []);
    const saveDraft = (id, text) => { drafts.current = { ...drafts.current, [id]: text }, IDB.set("shortdrafts", drafts.current).catch(() => { }); };
    const pick = p => {
        const s = SV_SERIES[p.series] ? p.series : "tarih";
        setSel(p.id), setErr(""), setForm({ title: p.title, series: s, seconds: /60 sn|1 dakika|60 saniye/i.test(p.title) ? 60 : 45, notes: p.notes || "", voice: SV_SERIES[s].voice, style: SV_SERIES[s].style, sources: p.sources || [] }), setScript(drafts.current[p.id] || "");
    };
    const newOwn = () => { setSel("__own"), setErr(""), setForm({ title: "", series: "tarih", seconds: 45, notes: "", voice: SV_SERIES.tarih.voice, style: SV_SERIES.tarih.style, sources: [] }), setScript(drafts.current.__own || ""); };
    const setSeries = s => setForm(f => ({ ...f, series: s, voice: SV_SERIES[s].voice, style: SV_SERIES[s].style }));
    const write = async () => {
        if (!form.title.trim()) return setErr("Lütfen bir başlık/konu yazın."), null;
        setErr(""), setBusy("script"), setLog("Senaryo yazılıyor…"), setProg(15);
        try {
            const t = await lvLLM("Sen YouTube Shorts, TikTok ve Instagram Reels için Türkçe kısa video senaryoları yazan deneyimli bir senaristsin.", svPrompt(form), 12e4);
            const sc = sm(svStripScreens(t), 7, 20);
            if (sc.length < 2) throw new Error("Senaryo beklenen formatta gelmedi, tekrar deneyin.");
            const clean = lvNormScript(t).trim();
            return setScript(clean), saveDraft(sel || "__own", clean), setProg(100), clean;
        } catch (e) { return setErr("Senaryo yazılamadı: " + e.message), null; }
        finally { setBusy(""), setLog(""); }
    };
    const build = async (txt) => {
        const text = txt || script;
        if (!text.trim()) return;
        const base = sm(svStripScreens(text), 7, 20).filter(s => s.voiceText), screens = svScreens(text);
        if (base.length < 2) return setErr("Senaryoda en az 2 sahne olmalı (SAHNE / GÖRSEL / SESLENDİRME formatında).");
        setErr(""), setBusy("images");
        const oldStyle = SX.studio.imageStyle, oldSrc = SX.studio.imageSource, oldAspect = SX.api.aspect;
        SX.studio.imageStyle = form.style, SX.studio.imageSource = "ai", SX.api.aspect = "portrait";
        try {
            const scenes = [];
            for (let k = 0; k < base.length; k++) {
                setProg(Math.round(k / base.length * 100)), setLog(`Görsel ${k + 1}/${base.length} çiziliyor…`);
                let url = await Yc(base[k].visualPrompt || base[k].voiceText || form.title, k + 1);
                (await Di(url)).success || (url = dm(form.title, k + 1));
                scenes.push({ ...base[k], id: `short_${Date.now()}_${k}`, sceneNumber: k + 1, duration: 7, imageUrl: url, caption: screens[k] || "", captionStyle: "big", shortSeries: form.series, ...(k === 0 ? { sources: form.sources, shortTitle: form.title } : {}) });
            }
            SX.studio.imageStyle = oldStyle, SX.studio.imageSource = oldSrc;
            SX.set({ lastTopic: form.title.replace(/\s*\((kısa|çocuklar için)\)\s*/gi, " ").trim() });
            SX.api.applyShortPreset && SX.api.applyShortPreset({ voice: form.voice, bgm: SV_SERIES[form.series].bgm, subtitleStyle: "mrbeast" });
            setLog("Video oluşturuluyor…"), setProg(100);
            setTimeout(() => onSendToStudio(scenes, { aspect: "portrait", autoExport: !0 }), 150);
        } catch (e) { setErr("Görseller üretilemedi: " + e.message); }
        finally { SX.studio.imageStyle = oldStyle, SX.studio.imageSource = oldSrc, SX.api.aspect = oldAspect, setBusy(""); }
    };
    const oneClick = async () => { const t = script.trim() ? script : await write(); t && build(t); };
    const list = plans.filter(p => filter === "all" || p.series === filter), dis = !!busy, S = SV_SERIES[form.series], nScenes = script.trim() ? sm(svStripScreens(script), 7, 20).length : svSceneCount(form.seconds);
    return o.jsxs("div", { className: "lv-wrap sv-wrap", children: [
        o.jsxs("div", { className: "studio-panel lv-left", children: [
            o.jsxs("div", { className: "panel-header", children: [o.jsx("span", { className: "panel-title", children: "📱 Kısa Video Planlarım" }), o.jsx("span", { className: "sx-hint", style: { margin: 0 }, children: `${plans.length} plan` })] }),
            o.jsxs("div", { className: "panel-content", style: { gap: 8 }, children: [
                o.jsx("div", { className: "sv-filters", children: [["all", "Tümü"], ["tarih", "🏛️ Tarih"], ["icat", "💡 İcat"], ["cocuk", "🧸 Çocuk"]].map(([k, t]) => o.jsx("button", { type: "button", className: "sv-chip" + (filter === k ? " active" : ""), onClick: () => setFilter(k), children: t }, k)) }),
                o.jsx("button", { type: "button", className: "sv-plan" + (sel === "__own" ? " active" : ""), onClick: newOwn, disabled: dis, children: o.jsx("div", { className: "sv-plan-title", children: "✏️ Kendi konumu yazacağım" }) }),
                list.length === 0 && o.jsx("div", { className: "sx-hint", children: "Plan listesi bulunamadı." }),
                list.map(p => o.jsxs("button", { type: "button", className: "sv-plan" + (sel === p.id ? " active" : ""), disabled: dis, onClick: () => pick(p), children: [
                    o.jsxs("div", { className: "sv-plan-meta", children: [o.jsx("span", { className: "sv-badge", style: { background: (SV_SERIES[p.series] || SV_SERIES.tarih).color + "33", color: (SV_SERIES[p.series] || SV_SERIES.tarih).color }, children: (SV_SERIES[p.series] || SV_SERIES.tarih).label }), o.jsx("span", { children: p.date ? p.date.split("-").reverse().join(".") : "tarih yok" }), o.jsx("span", { children: SV_STAGE[p.stage] || p.stage }), drafts.current[p.id] && o.jsx("span", { style: { color: "var(--accent-green)" }, children: "✓ senaryo" })] }),
                    o.jsx("div", { className: "sv-plan-title", children: p.title })
                ] }, p.id))
            ] })
        ] }),
        o.jsxs("div", { className: "studio-panel lv-right", children: [
            o.jsxs("div", { className: "panel-header", children: [o.jsx("span", { className: "panel-title", children: "🎬 Kısa Video Oluştur (9:16, ≤60 sn)" }), sel && o.jsx("span", { className: "sx-hint", style: { margin: 0 }, children: `${nScenes} sahne · ~${form.seconds} sn + kapanış` })] }),
            !sel ? o.jsxs("div", { className: "lv-empty", children: [o.jsx("div", { style: { fontSize: 44 }, children: "📱" }), o.jsx("h3", { children: "Planlarındaki kısa videoları buradan üret" }), o.jsx("p", { children: "Soldan bir plan seç. Notlarındaki doğrulanmış bilgilerle senaryo yazılır; seriye uygun ses, görsel tarzı, ekran yazıları ve müzikle dikey video otomatik oluşturulur." }), o.jsx("p", { className: "sx-hint", children: "Kurallar: ilk 2 saniyede kanca, tek şaşırtıcı bilgi, büyük ekran yazıları. Çocuk serisinde kısa cümleler, neşeli ton ve sonda basit bir soru." })] })
                : o.jsxs("div", { className: "panel-content sv-form", style: { gap: 10, overflowY: "auto" }, children: [
                    o.jsx(SxField, { label: "Başlık / konu", children: o.jsx("input", { className: "form-input", value: form.title, disabled: dis, placeholder: "Örn: Hastings 1066 — tek bir gün İngiltere'yi nasıl değiştirdi?", onChange: e => setForm(f => ({ ...f, title: e.target.value })) }) }),
                    o.jsxs("div", { className: "sx-grid3", children: [
                        o.jsx(SxField, { label: "Seri", children: o.jsx("select", { className: "form-select", value: form.series, disabled: dis, onChange: e => setSeries(e.target.value), children: Object.entries(SV_SERIES).map(([k, v]) => o.jsx("option", { value: k, children: v.label }, k)) }) }),
                        o.jsx(SxField, { label: "Süre", children: o.jsx("select", { className: "form-select", value: form.seconds, disabled: dis, onChange: e => setForm(f => ({ ...f, seconds: +e.target.value })), children: [[30, "30 sn"], [45, "45 sn"], [60, "60 sn"]].map(([k, t]) => o.jsx("option", { value: k, children: t }, k)) }) }),
                        o.jsx(SxField, { label: "Seslendirici", children: o.jsx("select", { className: "form-select", value: form.voice, disabled: dis, onChange: e => setForm(f => ({ ...f, voice: e.target.value })), children: SV_VOICES.map(([k, t]) => o.jsx("option", { value: k, children: t }, k)) }) })
                    ] }),
                    o.jsx(SxField, { label: "Görsel tarzı", children: o.jsx("select", { className: "form-select", value: form.style, disabled: dis, onChange: e => setForm(f => ({ ...f, style: e.target.value })), children: Object.entries(SX_STYLES).map(([k, v]) => o.jsx("option", { value: k, children: v[0] }, k)) }) }),
                    o.jsx(SxField, { label: "Doğrulanmış bilgiler / notlar", hint: "Senaryo yalnızca bu bilgilere dayanarak yazılır. Panodaki araştırma notların otomatik geldi; istersen düzenle.", children: o.jsx("textarea", { className: "form-textarea", style: { minHeight: 90, fontSize: "0.78rem" }, value: form.notes, disabled: dis, onChange: e => setForm(f => ({ ...f, notes: e.target.value })) }) }),
                    form.series === "cocuk" && o.jsx("div", { className: "sv-warn", children: "🧸 Çocuk serisi: YouTube'a yüklerken \"Çocuklara özel\" (Made for Kids) olarak işaretlemeyi unutma." }),
                    o.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
                        o.jsx("button", { type: "button", className: "btn btn-primary", style: { flex: 1, minWidth: 220 }, disabled: dis, onClick: oneClick, children: dis ? "⏳ Çalışıyor…" : script.trim() ? "🎬 Görselleri Çiz ve Videoyu Oluştur" : "⚡ Tek Tıkla Kısa Video Oluştur" }),
                        o.jsx("button", { type: "button", className: "btn btn-secondary", disabled: dis, onClick: write, children: script.trim() ? "↻ Senaryoyu Yeniden Yaz" : "✍️ Önce Senaryoyu Göster" })
                    ] }),
                    busy && o.jsxs("div", { children: [o.jsx("div", { className: "progress-bar-container", children: o.jsx("div", { className: "progress-bar-fill", style: { width: `${prog}%` } }) }), o.jsx("div", { className: "sx-hint", children: log })] }),
                    err && o.jsx("div", { className: "sx-err", children: err }),
                    script.trim() && o.jsx(SxField, { label: "Senaryo (düzenleyebilirsin — EKRAN: ekranda büyük yazı, GÖRSEL: çizilecek resim, SESLENDİRME: okunacak metin)", children: o.jsx("textarea", { className: "form-textarea", style: { minHeight: 260, fontSize: "0.8rem", fontFamily: "var(--font-mono)" }, value: script, disabled: dis, onChange: e => { setScript(e.target.value), saveDraft(sel || "__own", e.target.value); } }) })
                ] })
        ] })
    ] });
}

// ===================================================================== v1.8: 3D Video Fabrikası
const FX_VOICES = [["edge:tr-TR-AhmetNeural", "Ahmet — Türkçe erkek (önerilen)"], ["edge:tr-TR-EmelNeural", "Emel — Türkçe kadın"], ["google", "Google Türkçe — kadın"], ["edge:en-US-AndrewMultilingualNeural", "Andrew — çok dilli erkek"], ["edge:en-US-BrianMultilingualNeural", "Brian — çok dilli erkek"], ["edge:de-DE-FlorianMultilingualNeural", "Florian — çok dilli erkek"], ["edge:fr-FR-RemyMultilingualNeural", "Remy — çok dilli erkek"], ["edge:en-US-AvaMultilingualNeural", "Ava — çok dilli kadın"], ["edge:en-US-EmmaMultilingualNeural", "Emma — çok dilli kadın"], ["edge:de-DE-SeraphinaMultilingualNeural", "Seraphina — çok dilli kadın"], ["edge:fr-FR-VivienneMultilingualNeural", "Vivienne — çok dilli kadın"]];
const FX_MUSIC = [["cinematic", "🌌", "Sinematik"], ["motivational", "🏆", "Epik"], ["lofi", "☕", "Lo-Fi"], ["cyberpunk", "🌆", "Synthwave"], ["custom", "📁", "Kendi müziğim"], ["none", "🔇", "Müzik yok"]];
const FX_SUBS = [["mrbeast", "🔥 MrBeast"], ["neon", "⚡ Neon"], ["cinematic", "🎬 Sinematik"], ["minimal", "✨ Minimal"]];
const fxH = P.createElement;
function fxReadImage(file) {
    return new Promise((res, rej) => { const fr = new FileReader(); fr.onerror = rej; fr.onload = () => { const im = new Image(); im.onload = () => { const k = Math.min(1, 1920 / Math.max(im.width, im.height)); if (k === 1 && file.size < 2.5e6) return res(fr.result); const c = document.createElement("canvas"); c.width = Math.round(im.width * k), c.height = Math.round(im.height * k); c.getContext("2d").drawImage(im, 0, 0, c.width, c.height); res(c.toDataURL("image/jpeg", .9)); }; im.onerror = () => res(fr.result); im.src = fr.result; }; fr.readAsDataURL(file); });
}
function FxField({ label, hint, children }) { return fxH("label", { className: "fx-field" }, fxH("span", null, label, hint ? fxH("em", null, hint) : null), children); }
function FxSceneEditor({ pr, index, onNav, onClose }) {
    const s = pr.scenes[index], n = pr.scenes.length;
    const [busy, setBusy] = P.useState(""), [url, setUrl] = P.useState(""), [showUrl, setShowUrl] = P.useState(!1), fileRef = P.useRef(null);
    const [vp, setVp] = P.useState(s ? s.visualPrompt || "" : ""), [dirty, setDirty] = P.useState(!1);
    P.useEffect(() => { setVp(s ? s.visualPrompt || "" : ""), setDirty(!1), setShowUrl(!1), setUrl(""); }, [index, s && s.id]);
    if (!s) return null;
    const up = (patch) => pr.onUpdate(index, patch);
    const redraw = async (prompt) => { const q = (prompt || s.visualPrompt || s.voiceText || s.title || "").trim(); if (!q) return; setBusy("draw"); try { let img = sxImageUrl(q, Math.floor(Math.random() * 1e6)); const ok = await Di(img); if (!ok.success) img = await Yc(q, s.sceneNumber || index + 1); up({ visualPrompt: q, imageUrl: img, videoUrl: null }), setDirty(!1); } catch (e) { alert("Görsel çizilemedi: " + e.message); } setBusy(""); };
    const onFile = async (e) => { const f = e.target.files && e.target.files[0]; e.target.value = ""; if (!f) return; if (f.type.startsWith("video/")) return up({ videoUrl: URL.createObjectURL(f), imageUrl: s.imageUrl || "" }); setBusy("file"); try { up({ imageUrl: await fxReadImage(f), videoUrl: null }); } catch { alert("Resim okunamadı."); } setBusy(""); };
    const move = (d) => { const j = index + d; if (j < 0 || j >= n) return; const a = [...pr.scenes]; [a[index], a[j]] = [a[j], a[index]]; pr.onSetScenes(a), onNav(j); };
    const dupe = () => { const a = [...pr.scenes]; a.splice(index + 1, 0, { ...s, id: `scene_${Date.now()}` }); pr.onSetScenes(a), onNav(index + 1); };
    const dur = +s.duration || 10;
    return fxH("div", { className: "fx-drawer" },
        fxH("div", { className: "fx-dhead" },
            fxH("div", null, fxH("small", null, "SAHNE ", String(index + 1).padStart(2, "0"), " / ", String(n).padStart(2, "0")), fxH("strong", null, s.title ? String(s.title).replace(/\s*\(\d\d:\d\d.*\)$/, "") : "Sahne " + (index + 1))),
            fxH("div", { className: "fx-dnav" }, fxH("button", { type: "button", disabled: index === 0, onClick: () => onNav(index - 1), title: "Önceki sahne" }, "‹"), fxH("button", { type: "button", disabled: index === n - 1, onClick: () => onNav(index + 1), title: "Sonraki sahne" }, "›"), fxH("button", { type: "button", onClick: onClose, title: "Kapat" }, "✕"))),
        fxH("div", { className: "fx-dbody" },
            fxH("div", { className: `fx-media ${pr.aspect}` },
                s.videoUrl ? fxH("video", { src: s.videoUrl, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : s.imageUrl ? fxH("img", { src: s.imageUrl, alt: "" }) : fxH("div", { className: "fx-empty" }, "Bu sahnede resim yok"),
                busy === "draw" && fxH("div", { className: "fx-busy" }, "🎨 Çiziliyor…")),
            fxH("div", { className: "fx-row" },
                fxH("button", { type: "button", className: "fx-btn primary", disabled: !!busy, onClick: () => redraw(vp) }, "🎨 Yeniden çiz"),
                fxH("button", { type: "button", className: "fx-btn", disabled: !!busy, onClick: () => fileRef.current && fileRef.current.click() }, "📁 Resim / video yükle"),
                fxH("button", { type: "button", className: "fx-btn", onClick: () => setShowUrl(!showUrl) }, "🔗")),
            fxH("input", { ref: fileRef, type: "file", accept: "image/*,video/*", style: { display: "none" }, onChange: onFile }),
            showUrl && fxH("div", { className: "fx-row" }, fxH("input", { className: "fx-input", placeholder: "https://… resim adresi", value: url, onChange: e => setUrl(e.target.value) }), fxH("button", { type: "button", className: "fx-btn", onClick: () => { url.trim() && (up({ imageUrl: url.trim(), videoUrl: null }), setShowUrl(!1)); } }, "Kullan")),
            fxH(FxField, { label: "Görsel promptu", hint: "ekranda ne görünsün?" },
                fxH("textarea", { className: "fx-input", rows: 3, value: vp, placeholder: "Örn: Sultan Alparslan ordusunun önünde, gün doğumu, sinematik", onChange: e => { setVp(e.target.value), setDirty(!0), up({ visualPrompt: e.target.value }); } })),
            dirty && fxH("button", { type: "button", className: "fx-btn primary wide", disabled: !!busy, onClick: () => redraw(vp) }, "🎨 Bu prompttan çiz"),
            fxH(FxField, { label: "Seslendirme metni", hint: "bu sahnede okunacak" },
                fxH("textarea", { className: "fx-input", rows: 4, value: s.voiceText || "", onChange: e => up({ voiceText: e.target.value }) })),
            fxH("div", { className: "fx-row" }, fxH("button", { type: "button", className: "fx-btn", onClick: () => pr.onPreviewTTS(s.voiceText) }, "🔊 Dinle"), fxH("span", { className: "fx-note" }, (s.voiceText || "").trim().split(/\s+/).filter(Boolean).length, " kelime · ~", Math.max(1, Math.round((s.voiceText || "").trim().split(/\s+/).filter(Boolean).length / 2.4)), " sn konuşma")),
            fxH(FxField, { label: "Ekran yazısı", hint: "isteğe bağlı" },
                fxH("input", { className: "fx-input", value: s.caption || "", placeholder: "Örn: 26 Ağustos 1071", onChange: e => up({ caption: e.target.value }) })),
            fxH(FxField, { label: "Sahne süresi", hint: dur.toFixed(dur % 1 ? 1 : 0) + " sn" },
                fxH("input", { type: "range", min: 2, max: 30, step: .5, value: dur, onChange: e => up({ duration: parseFloat(e.target.value) }) })),
            fxH("div", { className: "fx-chips" }, [3, 5, 8, 10, 15, 20].map(v => fxH("button", { key: v, type: "button", className: `fx-chip ${dur === v ? "on" : ""}`, onClick: () => up({ duration: v }) }, v, " sn")), fxH("button", { type: "button", className: "fx-chip", disabled: pr.isFitting, onClick: pr.onFit, title: "Tüm sahnelerin süresini seslendirmenin uzunluğuna göre ayarlar" }, pr.isFitting ? "Ölçülüyor…" : "🎯 Sese göre")),
            fxH("div", { className: "fx-row fx-actions" },
                fxH("button", { type: "button", className: "fx-btn", disabled: index === 0, onClick: () => move(-1) }, "← Öne al"),
                fxH("button", { type: "button", className: "fx-btn", disabled: index === n - 1, onClick: () => move(1) }, "Sona al →"),
                fxH("button", { type: "button", className: "fx-btn", onClick: dupe }, "⧉ Çoğalt"),
                fxH("button", { type: "button", className: "fx-btn danger", onClick: () => { if (n > 1 && !confirm("Sahne " + (index + 1) + " silinsin mi?")) return; pr.onDelete(index); onNav(Math.max(0, Math.min(index, n - 2))); } }, "🗑 Sil"))));
}
function FxStationPanel({ pr, kind, onClose, prompt, setPrompt, onOpenScene }) {
    const [cnt, setCnt] = P.useState(() => Math.max(3, Math.min(12, pr.scenes.length || 6))), [dur, setDur] = P.useState(8);
    const head = (t, sub) => fxH("div", { className: "fx-dhead" }, fxH("div", null, fxH("small", null, sub), fxH("strong", null, t)), fxH("div", { className: "fx-dnav" }, fxH("button", { type: "button", onClick: onClose, title: "Kapat" }, "✕")));
    let body = null;
    if (kind === "script") body = fxH("div", { className: "fx-dbody" },
        fxH(FxField, { label: "Videonun konusu ya da senaryosu", hint: "tek cümle de olur" },
            fxH("textarea", { className: "fx-input", rows: 7, value: prompt, placeholder: "Örn: Malazgirt Savaşı'nı çocukların anlayacağı dille anlat.\n\nYa da hazır senaryonu yapıştır:\nSahne 1: …\nGörsel: …\nSeslendirme: …", onChange: e => setPrompt(e.target.value) })),
        fxH("div", { className: "fx-grid2" },
            fxH(FxField, { label: "Sahne sayısı" }, fxH("select", { className: "fx-input", value: cnt, onChange: e => setCnt(+e.target.value) }, [3, 4, 5, 6, 8, 10, 12, 15, 20, 30, 40].map(v => fxH("option", { key: v, value: v }, v, " sahne")))),
            fxH(FxField, { label: "Sahne başı süre" }, fxH("select", { className: "fx-input", value: dur, onChange: e => setDur(+e.target.value) }, [4, 5, 6, 8, 10, 12, 15].map(v => fxH("option", { key: v, value: v }, v, " sn"))))),
        fxH("div", { className: "fx-note" }, "≈ ", Math.round(cnt * dur), " sn video · ", pr.aspect === "portrait" ? "9:16 dikey" : "16:9 yatay"),
        pr.isGenerating ? fxH("div", { className: "fx-progress" }, fxH("i", { style: { width: (pr.genProgress || 0) + "%" } }), fxH("span", null, pr.genStatus || "Çalışıyor…")) :
            fxH("button", { type: "button", className: "fx-btn primary wide", disabled: !prompt.trim(), onClick: () => { try { SX.set({ lastTopic: prompt.trim().split("\n")[0].slice(0, 80) }); } catch { } pr.onGenerate(prompt, cnt, dur); } }, "⚙️ Sahneleri üret"),
        pr.scenes.length > 0 && !pr.isGenerating && fxH("div", { className: "fx-note warn" }, "Üretmek mevcut ", pr.scenes.length, " sahnenin yerine yenilerini koyar."),
        fxH("div", { className: "fx-sep" }),
        fxH("div", { className: "fx-row" }, fxH("button", { type: "button", className: "fx-btn", onClick: () => { pr.onAdd(); setTimeout(() => onOpenScene(pr.scenes.length), 50); } }, "＋ Boş sahne ekle")));
    if (kind === "voice") body = fxH("div", { className: "fx-dbody" },
        fxH(FxField, { label: "Seslendirici" }, fxH("select", { className: "fx-input", value: pr.voice, onChange: e => pr.setVoice(e.target.value) }, FX_VOICES.map(([v, t]) => fxH("option", { key: v, value: v }, t)), !FX_VOICES.some(v => v[0] === pr.voice) && fxH("option", { value: pr.voice }, "Sistem sesi"))),
        fxH("div", { className: "fx-row" }, fxH("button", { type: "button", className: "fx-btn", onClick: () => pr.onPreviewTTS((pr.scenes[pr.currentIndex] || {}).voiceText || "Merhaba! Bu ses videonu seslendirecek.") }, "🔊 Sesi dene")),
        fxH(FxField, { label: "Konuşma hızı", hint: pr.rate.toFixed(1) + "×" }, fxH("input", { type: "range", min: .7, max: 1.5, step: .1, value: pr.rate, onChange: e => pr.setRate(parseFloat(e.target.value)) })),
        fxH("label", { className: "fx-switch" }, fxH("input", { type: "checkbox", checked: pr.subsOn, onChange: e => pr.setSubsOn(e.target.checked) }), fxH("span", null, "Altyazı göster")),
        pr.subsOn && fxH("div", { className: "fx-chips" }, FX_SUBS.map(([v, t]) => fxH("button", { key: v, type: "button", className: `fx-chip ${pr.subStyle === v ? "on" : ""}`, onClick: () => pr.setSubStyle(v) }, t))),
        fxH("label", { className: "fx-switch" }, fxH("input", { type: "checkbox", checked: pr.outroOn, onChange: e => pr.setOutroOn(e.target.checked) }), fxH("span", null, "Sona “Abone ol & beğen” kapanışı ekle")));
    if (kind === "music") body = fxH("div", { className: "fx-dbody" },
        fxH("div", { className: "fx-tiles" }, FX_MUSIC.map(([v, i, t]) => fxH("button", { key: v, type: "button", className: `fx-tile ${pr.bgm === v ? "on" : ""}`, onClick: () => pr.setBgm(v) }, fxH("b", null, i), t))),
        pr.bgm === "custom" && fxH("div", { className: "fx-note" }, "Kendi müziğini Araçlar › Müzik sekmesinden yükleyebilirsin."),
        fxH(FxField, { label: "Müzik seviyesi", hint: Math.round(pr.bgmVol * 100) + "%" }, fxH("input", { type: "range", min: 0, max: 1, step: .05, value: pr.bgmVol, onChange: e => pr.setBgmVol(parseFloat(e.target.value)) })),
        fxH("div", { className: "fx-note" }, "Konuşma sırasında müzik kendiliğinden kısılır."));
    if (kind === "export") body = fxH("div", { className: "fx-dbody" },
        fxH("div", { className: "fx-stats" }, fxH("div", null, fxH("b", null, pr.scenes.length), fxH("small", null, "sahne")), fxH("div", null, fxH("b", null, Math.round(pr.totalDuration)), fxH("small", null, "saniye")), fxH("div", null, fxH("b", null, pr.aspect === "portrait" ? "9:16" : "16:9"), fxH("small", null, "format"))),
        fxH("div", { className: "fx-chips" }, fxH("button", { type: "button", className: `fx-chip ${pr.aspect === "portrait" ? "on" : ""}`, onClick: () => pr.setAspect("portrait") }, "📱 9:16 Dikey"), fxH("button", { type: "button", className: `fx-chip ${pr.aspect === "landscape" ? "on" : ""}`, onClick: () => pr.setAspect("landscape") }, "🖥️ 16:9 Yatay")),
        fxH("div", { className: "fx-row" }, fxH("button", { type: "button", className: "fx-btn", disabled: !pr.scenes.length, onClick: pr.onTogglePlay }, pr.isPlaying ? "⏸ Durdur" : "▶ Önizle"), fxH("button", { type: "button", className: "fx-btn", onClick: pr.onReset }, "⏮ Başa sar"), fxH("button", { type: "button", className: "fx-btn", disabled: pr.isFitting || !pr.scenes.length, onClick: pr.onFit }, pr.isFitting ? "Ölçülüyor…" : "🎯 Süreleri sese uydur")),
        pr.isExporting ? fxH("div", { className: "fx-progress" }, fxH("i", { style: { width: (pr.exportProgress || 0) + "%" } }), fxH("span", null, "Video oluşturuluyor… %", Math.round(pr.exportProgress || 0))) :
            fxH("button", { type: "button", className: "fx-btn primary wide big", disabled: !pr.scenes.length, onClick: pr.onExport }, "🎬 Videoyu oluştur"),
        fxH("div", { className: "fx-note" }, "Oluştururken bu pencereyi açık ve önde tut."));
    const titles = { script: ["Senaryo", "İSTASYON 01 · PROMPT"], voice: ["Ses", "İSTASYON 03 · SESLENDİRME"], music: ["Müzik", "İSTASYON 04 · FON MÜZİĞİ"], export: ["Montaj", "İSTASYON 05 · ÇIKIŞ"] }[kind];
    return fxH("div", { className: "fx-drawer" }, head(titles[0], titles[1]), body);
}
function FactoryView(pr) {
    const host = P.useRef(null), api = P.useRef(null), pickRef = P.useRef(null);
    const [err, setErr] = P.useState(""), [ready, setReady] = P.useState(!1), [panel, setPanel] = P.useState(null), [cam, setCam] = P.useState("overview"), [monOpen, setMonOpen] = P.useState(!0);
    const [prompt, setPrompt] = P.useState(() => { try { return SX.studio.lastTopic || ""; } catch { return ""; } });
    pickRef.current = (kind, i) => { if (kind === "scene") { pr.onSelect(i), setPanel({ kind: "scene", index: i }); } else setPanel({ kind }); };
    P.useEffect(() => {
        let dead = !1;
        import("/assets/factory.js").then(m => { if (dead || !host.current) return; try { api.current = m.createFactory(host.current, { onPick: (k, i) => pickRef.current(k, i) }); setReady(!0); } catch (e) { setErr("3D görünüm açılamadı (" + e.message + "). Tarayıcıda donanım hızlandırmayı açıp sayfayı yenileyin ya da klasik görünüme geçin."); } })
            .catch(e => setErr("3D dosyaları yüklenemedi: " + e.message));
        return () => { dead = !0; api.current && api.current.dispose(), api.current = null; };
    }, []);
    P.useEffect(() => { api.current && api.current.update({ scenes: pr.scenes, current: pr.currentIndex, aspect: pr.aspect, prompt, playing: pr.isPlaying, busy: pr.isGenerating || pr.isExporting, progress: pr.isExporting ? pr.exportProgress : pr.genProgress, status: pr.isExporting ? "Video oluşturuluyor…" : pr.genStatus, total: pr.totalDuration }); });
    P.useEffect(() => { if (panel && panel.kind === "scene" && panel.index >= pr.scenes.length) setPanel(pr.scenes.length ? { kind: "scene", index: pr.scenes.length - 1 } : null); }, [pr.scenes.length]);
    P.useEffect(() => { const k = e => { if (e.key === "Escape") setPanel(null); }; window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
    const camTo = (c) => { setCam(c); api.current && api.current.setCamera(c); };
    const openScene = (i) => { if (i < 0) return; pr.onSelect(i), setPanel({ kind: "scene", index: i }); api.current && cam === "scene" && api.current.focusScene(i); };
    const n = pr.scenes.length;
    const insL = monOpen ? (pr.aspect === "portrait" ? 240 : 360) : 0, insR = panel ? 424 : 0;
    P.useEffect(() => { api.current && api.current.setInsets({ l: insL, r: insR, t: 100, b: 76 }); }, [insL, insR, ready]);
    const dockStyle = { left: `calc(${insL}px + (100% - ${insL + insR}px) / 2)`, maxWidth: `calc(100% - ${insL + insR + 30}px)` };
    return fxH("div", { className: `fx-root ${panel ? "has-panel" : ""}` },
        fxH("div", { className: "fx-scene", ref: host }),
        fxH("div", { className: "fx-vignette" }),
        fxH("div", { className: "fx-heading" }, fxH("i", null), "Video fabrikası", fxH("span", null, n, " SAHNE · ", Math.round(pr.totalDuration), " SN")),
        fxH("div", { className: "fx-hint" }, n ? "Bir sahneye ya da istasyona tıkla · sürükle: döndür · tekerlek: yakınlaş" : "Başlamak için soldaki SENARYO istasyonuna tıkla"),
        !ready && !err && fxH("div", { className: "fx-loading" }, "Fabrika kuruluyor…"),
        err && fxH("div", { className: "fx-error" }, fxH("p", null, err), fxH("button", { type: "button", className: "fx-btn", onClick: () => pr.setLayout("classic") }, "Klasik görünüme geç")),
        fxH("div", { className: `fx-monitor ${monOpen ? "" : "closed"} ${pr.aspect}` },
            fxH("div", { className: "fx-mhead" }, fxH("span", null, fxH("i", { className: pr.isPlaying ? "live" : "" }), "MONİTÖR"), fxH("button", { type: "button", onClick: () => setMonOpen(!monOpen), title: monOpen ? "Küçült" : "Aç" }, monOpen ? "–" : "+")),
            fxH("div", { className: "fx-mbody" }, fxH(Jp, { canvasRef: pr.canvasRef, aspectRatio: pr.aspect, isPlaying: pr.isPlaying, onTogglePlay: pr.onTogglePlay, onReset: pr.onReset, currentTime: pr.time, totalDuration: pr.totalDuration, currentSceneIndex: pr.currentIndex, totalScenes: n }))),
        fxH("div", { className: "fx-dock", style: dockStyle },
            fxH("nav", { className: "fx-bar", "aria-label": "Kamera" }, [["overview", "Genel"], ["side", "Yandan"], ["top", "Üstten"], ["scene", "Seçili sahne"]].map(([k, t]) => fxH("button", { key: k, type: "button", "aria-pressed": cam === k, onClick: () => camTo(k) }, t))),
            fxH("div", { className: "fx-strip" },
                pr.scenes.map((s, i) => fxH("button", { key: s.id || i, type: "button", className: `fx-thumb ${i === pr.currentIndex ? "on" : ""}`, onClick: () => openScene(i), title: (s.voiceText || "").slice(0, 120) }, s.imageUrl ? fxH("img", { src: s.imageUrl, alt: "" }) : fxH("span", { className: "noimg" }, "?"), fxH("b", null, i + 1), fxH("small", null, (+s.duration || 10), "s"))),
                fxH("button", { type: "button", className: "fx-thumb add", title: "Yeni sahne ekle", onClick: () => { pr.onAdd(); setTimeout(() => openScene(n), 60); } }, "＋")),
            fxH("div", { className: "fx-bar" },
                fxH("button", { type: "button", onClick: () => setPanel({ kind: "script" }) }, "✍️ Senaryo"),
                fxH("button", { type: "button", onClick: () => setPanel({ kind: "export" }), className: "accent" }, "🎬 Montaj"),
                fxH("button", { type: "button", onClick: () => pr.setLayout("classic"), title: "Eski düzenleyici görünümü" }, "☰ Klasik"))),
        panel && panel.kind === "scene" ? fxH(FxSceneEditor, { pr, index: panel.index, onNav: openScene, onClose: () => setPanel(null) }) :
            panel ? fxH(FxStationPanel, { pr, kind: panel.kind, onClose: () => setPanel(null), prompt, setPrompt, onOpenScene: openScene }) : null);
}

function vm() { const [e, t] = P.useState("multiScene"), [n, r] = P.useState("malazgirt"), [i, l] = P.useState("portrait"), [a, s] = P.useState(!1), [u, d] = P.useState("cinematic"), [h, m] = P.useState("cinematic"), [y, S] = P.useState(.35), [w, k] = P.useState(.95), [v, p] = P.useState([]), [c, f] = P.useState(0), [g, x] = P.useState(0), [N, E] = P.useState(!1), [T, _] = P.useState(!1), [A, I] = P.useState(0), [te, M] = P.useState(""), [D, H] = P.useState("scenes"), [ce, Mt] = P.useState([]), [z, O] = P.useState(() => { try {
    return localStorage.getItem("aivs_voice") || "edge:tr-TR-AhmetNeural";
}
catch {
    return "edge:tr-TR-AhmetNeural";
} }), [fitBusy, setFitBusy] = P.useState(!1), [b, $] = P.useState(!1), [X, ze] = P.useState(0), [Ne, Lt] = P.useState(!1), [je, Ut] = P.useState(null), Fi = P.useRef(null), [lay, setLayRaw] = P.useState(() => { try { return localStorage.getItem("aivs_layout") || "factory"; } catch { return "factory"; } }), setLay = x => { try { localStorage.setItem("aivs_layout", x); } catch { } setLayRaw(x); }, U = P.useRef(null), en = P.useRef(null), tn = P.useRef(0), vRef = P.useRef([]), cRef = P.useRef(0), nRef = P.useRef(!1), fileRef = P.useRef(null), hk = P.useRef({}); vRef.current = v, cRef.current = c, nRef.current = N;
const OUTRO_DEFAULT = "Videomuzu beğendiyseniz like atmayı ve kanalımıza abone olmayı unutmayın! Bildirimleri açarsanız yeni videolarımızdan ilk siz haberdar olursunuz.", [oOn, setOOn] = P.useState(() => { try {
    return localStorage.getItem("aivs_outro_on") !== "0";
}
catch {
    return !0;
} }), [oText, setOText] = P.useState(() => { try {
    return localStorage.getItem("aivs_outro_text") || OUTRO_DEFAULT;
}
catch {
    return OUTRO_DEFAULT;
} }), [oVd, setOVd] = P.useState(null), oDur = Math.max(5, oVd ? Math.ceil((oVd + 1.5) * 2) / 2 : 6), outroRaf = P.useRef(null), withOutro = L => oOn && L.length > 0 ? [...L, { id: "__outro", isOutro: !0, sceneNumber: L.length + 1, title: "Abone Ol & Beğen", duration: oDur, voiceText: oText, voiceDuration: oVd, imageUrl: (L[L.length - 1] || {}).imageUrl || "" }] : L, outroChimes = () => { try {
    if (!Vg.ctx) {
        const C = window.AudioContext || window.webkitAudioContext;
        Vg.ctx = new C;
    }
    const C = Vg.ctx.currentTime;
    mm.chime(Vg.ctx, Vg.ctx.destination, C + 1.7, 880), mm.chime(Vg.ctx, Vg.ctx.destination, C + 2.6, 1046.5);
}
catch { } };
P.useEffect(() => { try {
    localStorage.setItem("aivs_outro_on", oOn ? "1" : "0"), localStorage.setItem("aivs_outro_text", oText);
}
catch { } if (!oOn || !oText.trim())
    return; let C = !0; const L = setTimeout(async () => { const ne = await mm.measureScenes([{ voiceText: oText }]); C && setOVd(ne[0] || null); }, 700); return () => { C = !1, clearTimeout(L); }; }, [oOn, oText, z, w]); P.useEffect(() => { const C = () => { const ne = be.getTurkishVoices(), K = be.getAllVoices(), de = ne.length > 0 ? ne : K; if (Mt(de), de.length > 0 && !z) {
    const Ee = de.find(qe => qe.lang.includes("tr") && (qe.name.includes("Tolga") || qe.name.includes("Ahmet") || qe.name.includes("Male")));
    O(Ee ? Ee.voiceURI : de[0].voiceURI);
} }; C(); const L = setInterval(C, 800); return () => clearInterval(L); }, [z]), P.useEffect(() => { Vg.mode = z === "google" || (z || "").startsWith("edge:") ? "audio" : "system", Vg.voice = Vg.mode === "audio" ? z : "google", Vg.mode === "system" && z && be.setVoice(z); try {
    localStorage.setItem("aivs_voice", z);
}
catch { } }, [z]), P.useEffect(() => { be.rate = w, Vg.rate = Math.round(w * 100) / 100; }, [w]), P.useEffect(() => { if (!Fi.current || e !== "multiScene")
    return; U.current && U.current.canvas === Fi.current ? U.current.setAspectRatio(i) : U.current = new gm(Fi.current, { aspectRatio: i, subtitleStyle: u, subtitlesEnabled: a }); const C = U.current, L = vRef.current, ne = cRef.current; L.length > 0 && L[ne] && (C.renderFrame(L[ne], 0, ne), C.preloadScenes(L).then(() => { U.current === C && !nRef.current && L[ne] && C.renderFrame(L[ne], 0, ne); })); }, [i, e, lay]), P.useEffect(() => { if (U.current && (U.current.setSubtitleStyle(u), U.current.setSubtitlesEnabled(a), v.length > 0 && v[c])) {
    const C = v[c], L = C.duration || 10, ne = Math.min(1, (g - tn.current) / L);
    U.current.renderFrame(C, Math.max(0, ne), c);
} }, [u, a]); const as = async () => { _(!0), Ot(), r("malazgirt"), t("multiScene"), l("portrait"), m("cinematic"), s(!1); const C = im.scenes.map(L => ({ ...L, duration: 10, imageUrl: L.imageUrl || `/assets/malazgirt/scene_${L.sceneNumber}.jpg` })); p(C), f(0), U.current && (await U.current.preloadScenes(C), U.current.renderFrame(C[0], 0, 0)), _(!1); }, Qc = async () => { _(!0), Ot(), r("fatih"), t("multiScene"), l("portrait"), m("cinematic"), s(!1); const C = lm.scenes.map(L => ({ ...L, duration: 10, imageUrl: L.imageUrl || `/assets/fatih1453/scene_${L.sceneNumber}.jpg` })); p(C), f(0), U.current && (await U.current.preloadScenes(C), U.current.renderFrame(C[0], 0, 0)), _(!1); }, Zc = async () => { _(!0), Ot(), r("saladin"), t("multiScene"), l("portrait"), m("cinematic"), s(!1); const C = am.scenes.map(L => ({ ...L, duration: 10, imageUrl: L.imageUrl || `/assets/saladin/scene_${L.sceneNumber}.jpg` })); p(C), f(0), U.current && (await U.current.preloadScenes(C), U.current.renderFrame(C[0], 0, 0)), _(!1); }; P.useEffect(() => { (async () => { let C = null; try {
    C = await IDB.get("autosave");
}
catch { } if (!C)
    try {
        C = JSON.parse(localStorage.getItem("aivs_autosave") || "null");
    }
    catch { } C && Array.isArray(C.scenes) && C.scenes.length > 0 ? applyProject(C).catch(() => as()) : as(); })(); }, []);
const projectData = () => ({ app: "AIVideoStudio", version: 2, savedAt: new Date().toISOString(), project: n, aspectRatio: i, subtitlesEnabled: a, subtitleStyle: u, bgmTrack: h, bgmVolume: y, scenes: v }), applyProject = async C => { if (!C || !Array.isArray(C.scenes) || C.scenes.length === 0)
    throw new Error("Dosyada sahne bulunamadı."); Ot(); const L = C.scenes.map((K, de) => ({ ...K, id: K.id || `scene_${Date.now()}_${de}`, sceneNumber: K.sceneNumber || de + 1, duration: parseFloat(K.duration) || 10, imageUrl: K.imageUrl && K.imageUrl.startsWith("blob:") ? "" : K.imageUrl || "", videoUrl: K.videoUrl && K.videoUrl.startsWith("blob:") ? null : K.videoUrl || null })); r(C.project || "custom"), t("multiScene"), C.aspectRatio && l(C.aspectRatio), typeof C.subtitlesEnabled == "boolean" && s(C.subtitlesEnabled), C.subtitleStyle && d(C.subtitleStyle), C.bgmTrack && m(C.bgmTrack), typeof C.bgmVolume == "number" && S(C.bgmVolume), p(L), f(0), tn.current = 0, x(0), U.current && (await U.current.preloadScenes(L), U.current.renderFrame(L[0], 0, 0)); }, toDataUrl = async C => { if (!C || !C.startsWith("blob:"))
    return C; const L = await (await fetch(C)).blob(); return await new Promise((ne, K) => { const de = new FileReader; de.onload = () => ne(de.result), de.onerror = K, de.readAsDataURL(L); }); }, saveProject = async () => { if (v.length === 0)
    return; try {
    const C = projectData();
    C.scenes = await Promise.all(v.map(async K => ({ ...K, imageUrl: await toDataUrl(K.imageUrl), videoUrl: K.videoUrl ? await toDataUrl(K.videoUrl) : K.videoUrl })));
    const L = new Blob([JSON.stringify(C, null, 1)], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(L), ne.download = `${n === "custom" ? "proje" : n}_${new Date().toISOString().slice(0, 10)}.aivs.json`, document.body.appendChild(ne), ne.click(), ne.remove(), setTimeout(() => URL.revokeObjectURL(ne.href), 5e3);
}
catch (C) {
    alert("Proje kaydedilemedi: " + C.message);
} }, openProject = () => { fileRef.current && (fileRef.current.value = "", fileRef.current.click()); }, onProjectFile = async C => { const L = C.target.files && C.target.files[0]; if (L) {
    _(!0);
    try {
        await applyProject(JSON.parse(await L.text()));
    }
    catch (ne) {
        alert("Proje açılamadı: " + ne.message);
    }
    finally {
        _(!1);
    }
} }, fitDurations = async () => { if (v.length === 0 || fitBusy)
    return; Ot(), setFitBusy(!0); try {
    const C = await mm.measureScenes(v), L = C.filter(K => K).length;
    if (L === 0) {
        alert("Seslendirmeler alınamadı. İnternet bağlantınızı kontrol edip tekrar deneyin.");
        return;
    }
    const ne = v.map((K, de) => C[de] ? { ...K, voiceDuration: C[de], duration: Math.max(3, Math.ceil((C[de] + .8) * 2) / 2) } : K);
    p(ne), U.current && ne[0] && U.current.renderFrame(ne[0], 0, 0);
}
catch (C) {
    alert("Süreler ayarlanamadı: " + C.message);
}
finally {
    setFitBusy(!1);
} };
P.useEffect(() => { if (v.length === 0)
    return; const C = setTimeout(() => { try {
    const L = projectData();
    L.scenes = v.map(K => ({ ...K, imageUrl: K.imageUrl && K.imageUrl.startsWith("blob:") ? "" : K.imageUrl, videoUrl: K.videoUrl && K.videoUrl.startsWith("blob:") ? null : K.videoUrl })), IDB.set("autosave", L).catch(K => console.warn("Otomatik kayıt yapılamadı:", K));
}
catch (L) {
    console.warn("Otomatik kayıt yapılamadı:", L);
} }, 800); return () => clearTimeout(C); }, [v, n, i, a, u, h, y]);
P.useEffect(() => { if (v.length === 0)
    return; const vk = K => K.voiceAudio ? "rec:" + K.voiceAudio.length + ":" + K.voiceAudio.slice(-24) : `${Vg.voice}|${Vg.voice === "google" ? 1 : Vg.rate}|${(K.voiceText || K.text || "").trim()}`, todo = v.filter(K => ((K.voiceText || K.text || "").trim() || K.voiceAudio) && K.voiceKey !== vk(K)); if (todo.length === 0)
    return; let alive = !0; const tm = setTimeout(async () => { const res = await mm.measureScenes(todo); if (!alive)
    return; const mp = new Map; todo.forEach((K, de) => mp.set(K.id, { k: vk(K), d: res[de] })), p(prev => prev.map(K => { const r0 = mp.get(K.id); return !r0 || vk(K) !== r0.k ? K : r0.d ? { ...K, voiceKey: r0.k, voiceDuration: r0.d, duration: Math.max(K.duration || 10, Math.ceil((r0.d + .8) * 2) / 2) } : { ...K, voiceKey: r0.k, voiceDuration: null }; })); }, 700); return () => { alive = !1, clearTimeout(tm); }; }, [v, z, w]);
const previewOutro = () => { if (!U.current || v.length === 0)
    return; Ot(), outroRaf.current && cancelAnimationFrame(outroRaf.current); const C = withOutro(v).pop(); if (!C || !C.isOutro)
    return; const L = performance.now(), ne = C.duration; sayLater(C.voiceText, 300), outroChimes(); const K = de => { const Ee = (de - L) / 1e3; if (Ee >= ne || nRef.current) {
    outroRaf.current = null, nRef.current || U.current.renderFrame(vRef.current[cRef.current] || vRef.current[0], 0, cRef.current);
    return;
} U.current.renderFrame(C, Ee / ne, vRef.current.length), outroRaf.current = requestAnimationFrame(K); }; outroRaf.current = requestAnimationFrame(K); };
const [savedInfo, setSavedInfo] = P.useState(""), loadLong = (C, { aspect: L = "landscape", autoExport: ne = !1 } = {}) => { Ot(), l(L), r("custom"), p(C), f(0), tn.current = 0, x(0), autoExp.current = ne, t("multiScene"), ne || setTimeout(() => { U.current && U.current.preloadScenes(C).then(() => U.current.renderFrame(C[0], 0, 0)); }, 400); }, autoExp = P.useRef(!1), [toolsOpen, setToolsOpen] = P.useState(!1), hist = P.useRef({ stack: [], idx: -1, skip: !1 }), [histTick, setHistTick] = P.useState(0);
P.useEffect(() => { const C = hist.current; if (C.skip) {
    C.skip = !1;
    return;
} if (v.length === 0)
    return; const L = setTimeout(() => { C.stack = C.stack.slice(0, C.idx + 1), C.stack.push(v), C.stack.length > 60 && C.stack.shift(), C.idx = C.stack.length - 1, setHistTick(ne => ne + 1); }, 450); return () => clearTimeout(L); }, [v]);
const redraw = (C, L) => { setTimeout(() => { const ne = U.current, K = C || vRef.current, de = L ?? cRef.current; ne && K[de] && (ne.renderFrame(K[de], 0, de), ne.preloadScenes(K).then(() => { !nRef.current && K[de] && ne.renderFrame(K[de], 0, de); })); }, 0); }, histGo = C => { const L = hist.current, ne = L.idx + C; if (ne < 0 || ne >= L.stack.length)
    return; Ot(), L.idx = ne, L.skip = !0; const K = L.stack[ne], de = Math.min(cRef.current, K.length - 1); p(K), f(de), setHistTick(Ee => Ee + 1), redraw(K, de); }, dupScene = () => { const C = v[c]; if (!C)
    return; const L = [...v]; L.splice(c + 1, 0, { ...C, id: `scene_${Date.now()}_${Math.floor(Math.random() * 1e3)}` }), p(L), f(c + 1), redraw(L, c + 1); }, moveScene = C => { const L = c + C; if (L < 0 || L >= v.length)
    return; Ot(); const ne = [...v]; [ne[c], ne[L]] = [ne[L], ne[c]], p(ne), f(L), redraw(ne, L); }, applyCaptions = () => { const C = v.map(L => { if (L.caption && L.caption.trim())
    return L; const ne = sxCleanTitle(L.title); return ne && !/^sahne\s*\d*$/i.test(ne) ? { ...L, caption: sxTitleCase(ne) } : L; }); p(C), redraw(C); }, previewIntro = () => { if (!U.current || !SX.hasBrand())
    return; Ot(), outroRaf.current && cancelAnimationFrame(outroRaf.current); const C = { id: "__intro", isIntro: !0, duration: 3 }, L = performance.now(); try {
    Vg.ctx || (Vg.ctx = new (window.AudioContext || window.webkitAudioContext)), mm.chime(Vg.ctx, Vg.ctx.destination, Vg.ctx.currentTime + .3, 659.25);
}
catch { } const ne = K => { const de = (K - L) / 1e3; if (de >= 3 || nRef.current) {
    outroRaf.current = null, nRef.current || U.current.renderFrame(vRef.current[cRef.current] || vRef.current[0], 0, cRef.current);
    return;
} U.current.renderFrame(C, de / 3, 0), outroRaf.current = requestAnimationFrame(ne); }; outroRaf.current = requestAnimationFrame(ne); };
const quickVideo = async (C, { aspect: L = "portrait", shot: ne = 6, onProgress: K = () => { } } = {}) => { SX.api.aspect = L, K("Sahneler planlanıyor...", 8); let de = null; try {
    const Ee = new AbortController, qe = setTimeout(() => Ee.abort(), 6e4), ed = await fetch("/api/llm", { method: "POST", signal: Ee.signal, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ system: "Sen kısa sosyal medya videoları (YouTube Shorts, TikTok, Reels) için Türkçe senaryo yazan bir senaristsin.", prompt: `Kullanıcının fikri: "${C}"\n\nBu fikirden 3 sahnelik kısa ve etkileyici bir video planla. Her sahnenin seslendirmesi yaklaşık ${ne} saniye (en fazla ${Math.round(ne * 2.2)} kelime) olsun. GÖRSEL satırı İngilizce, ayrıntılı, sinematik bir görsel tarifi olsun ve kullanıcının fikrindeki ana unsurları korusun; görselde yazı olmasın. SESLENDİRME akıcı Türkçe olsun.\n\nYALNIZCA şu formatta yaz:\n\nSAHNE 1 — Kısa başlık\nGÖRSEL: ...\nSESLENDİRME: ...\n\nSAHNE 2 — Kısa başlık\nGÖRSEL: ...\nSESLENDİRME: ...\n\nSAHNE 3 — Kısa başlık\nGÖRSEL: ...\nSESLENDİRME: ...` }) });
    if (clearTimeout(qe), ed.ok) {
        const td = sm(await ed.text(), ne, 3);
        td.length >= 2 && td.every(nd => nd.visualPrompt) && (de = td.slice(0, 4));
    }
}
catch { } de || (de = ["wide establishing shot, epic scale", "medium shot, dynamic camera angle", "dramatic close-up, shallow depth of field"].map((Ee, qe) => ({ title: `SAHNE ${qe + 1}`, visualPrompt: `${C}, ${Ee}`, voiceText: qe === 0 ? C : "" }))); de = de.map((Ee, qe) => ({ ...Ee, id: `quick_${Date.now()}_${qe}`, sceneNumber: qe + 1, duration: ne, imageUrl: "" })); for (let Ee = 0; Ee < de.length; Ee++) {
    K(`Sahne ${Ee + 1}/${de.length} görseli çiziliyor (yapay zeka)...`, 15 + Math.floor(Ee / de.length * 75));
    let qe = await Yc(de[Ee].visualPrompt || C, Ee + 1);
    (await Di(qe)).success || (qe = dm(C, Ee + 1)), de[Ee].imageUrl = qe;
} K("Video hazırlanıyor...", 95), Ot(), l(L), r("custom"), p(de), f(0), tn.current = 0, x(0), autoExp.current = !0, t("multiScene"); };
SX.api = { aspect: i, count: v.length, quickVideo, applyShortPreset: C => { C.voice && O(C.voice), C.bgm && h !== "custom" && m(C.bgm), s(!0), C.subtitleStyle && d(C.subtitleStyle); }, duplicate: dupScene, move: moveScene, undo: () => histGo(-1), redo: () => histGo(1), canUndo: hist.current.idx > 0, canRedo: hist.current.idx < hist.current.stack.length - 1, playScene: C => say(C) };
P.useEffect(() => { Dn.baseVol = y, Dn.isPlaying && Dn.setVolume(y); }, [y]);
P.useEffect(() => SX.listeners.add(redrawOnStudio) && (() => SX.listeners.delete(redrawOnStudio)), []);
function redrawOnStudio() { const C = U.current, L = vRef.current[cRef.current]; C && L && !nRef.current && C.renderFrame(L, .5, cRef.current); }
P.useEffect(() => { if (!autoExp.current || e !== "multiScene" || v.length === 0 || !/^(quick|long|short)_/.test(String(v[0].id)))
    return; autoExp.current = !1; const C = setTimeout(() => { U.current && (U.current.preloadScenes(v).then(() => U.current.renderFrame(v[0], 0, 0)), Jc()); }, 400); }, [v, e]);
hk.current = { toggle: () => qc(), save: saveProject, open: openProject, undo: () => histGo(-1), redo: () => histGo(1) };
P.useEffect(() => { const C = L => { const ne = L.target && L.target.tagName, K = ne === "INPUT" || ne === "TEXTAREA" || ne === "SELECT" || L.target && L.target.isContentEditable; if ((L.ctrlKey || L.metaKey) && (L.key === "s" || L.key === "S"))
    L.preventDefault(), hk.current.save();
else if ((L.ctrlKey || L.metaKey) && (L.key === "o" || L.key === "O"))
    L.preventDefault(), hk.current.open();
else if ((L.ctrlKey || L.metaKey) && !K && (L.key === "z" || L.key === "Z") && !L.shiftKey)
    L.preventDefault(), hk.current.undo();
else if ((L.ctrlKey || L.metaKey) && !K && (L.key === "y" || L.key === "Y" || L.shiftKey && (L.key === "z" || L.key === "Z")))
    L.preventDefault(), hk.current.redo();
else if (L.code === "Space" && !K)
    L.preventDefault(), hk.current.toggle(); }; return window.addEventListener("keydown", C), () => window.removeEventListener("keydown", C); }, []); const Xc = async (C, L = 12, ne = 10) => { _(!0), M("Senaryo analiz ediliyor ve sahneler ayrıştırılıyor..."), I(10), Ot(); try {
    const K = sm(C, ne, L);
    if (!K || K.length === 0) {
        alert("Girilen metinden sahne oluşturulamadı. Lütfen geçerli bir senaryo veya prompt girin."), _(!1);
        return;
    }
    M(`${K.length} sahne bulundu. 4K görseller hazırlanıyor...`), I(20);
    const de = await fm(K, (Ee, qe) => { M(Ee), I(20 + Math.floor(qe * .75)); });
    p(de), f(0), r("custom"), U.current && (await U.current.preloadScenes(de), U.current.renderFrame(de[0], 0, 0)), I(100), M("Tüm sahneler ve görseller hazır!"), H("scenes");
}
catch (K) {
    console.error("Autonomous scene generation failed:", K), alert("Sahneler üretilirken bir hata oluştu: " + K.message);
}
finally {
    _(!1);
} }, ss = (C, L) => { if (!v[C])
    return; const ne = [...v], K = { ...ne[C], ...L }; ne[C] = K, p(ne), U.current && (L.imageUrl || L.videoUrl ? U.current.preloadScenes([K]).then(() => { C === c && U.current.renderFrame(K, 0, C); }) : C === c && U.current.renderFrame(K, 0, C)); }, Hi = async (C) => { const L = v[C]; if (!L)
    return; const ne = L.sceneNumber || C + 1, K = L.visualPrompt || L.voiceText || L.title, de = await Yc(K, ne), Ee = [...v]; Ee[C] = { ...L, imageUrl: de, videoUrl: null }, p(Ee), U.current && (await Di(de), C === c && U.current.renderFrame(Ee[C], 0, C)); }, os = C => { C && say(C); }, us = () => { const C = { id: `scene_${Date.now()}`, visualPrompt: "Medieval 12th century Middle East historical documentary scene, 9:16 vertical 4k", voiceText: "Tarihin altın sayfalarına kazınan büyük bir destan...", duration: 10 }; C.imageUrl = Wp(C.visualPrompt, i, "cinematic", Math.random() * 99999); const L = [...v, C]; p(L), U.current && U.current.preloadScenes([C]); }, cs = C => { if (v.length <= 1)
    return; const L = v.filter((ne, K) => K !== C); p(L), c >= L.length && f(L.length - 1); }, ds = v.reduce((C, L) => C + (L.duration || 10), 0) + (oOn && v.length > 0 ? oDur : 0); P.useEffect(() => { if (!N || v.length === 0 || e !== "multiScene") {
    en.current && cancelAnimationFrame(en.current), U.current && U.current.pauseAllVideos();
    return;
} const pv = withOutro(v); Dn.playBGM(h, y); let C = c, L = performance.now() - (g - tn.current) * 1e3; if (pv[C] && U.current) {
    U.current.playSceneVideo(pv[C]);
    const K = pv[C].voiceText || pv[C].text;
    sayAt(pv[C], (g - tn.current) - .3);
} const ne = K => { if (!U.current || pv.length === 0)
    return; const de = pv[C], Ee = de.duration || 10, qe = (K - L) / 1e3, ed = Math.min(1, qe / Ee); if (U.current.renderAt(pv, C, qe), x(tn.current + qe), qe >= Ee)
    if (C + 1 < pv.length) {
        C++, C < v.length && f(C), L = K, tn.current += Ee, U.current.playSceneVideo(pv[C]);
        const td = pv[C].voiceText || pv[C].text;
        sayLater(pv[C], 300), pv[C].isOutro && outroChimes();
    }
    else {
        Ot();
        return;
    } en.current = requestAnimationFrame(ne); }; return en.current = requestAnimationFrame(ne), () => { en.current && cancelAnimationFrame(en.current), hush(), Dn.stopBGM(), U.current && U.current.pauseAllVideos(); }; }, [N, e]); const qc = () => { v.length !== 0 && (N ? (E(!1), hush(), Dn.stopBGM(), U.current && U.current.pauseAllVideos()) : E(!0)); }, Ot = () => { E(!1), hush(), Dn.stopBGM(), U.current && U.current.pauseAllVideos(), x(0), f(0), tn.current = 0, U.current && v.length > 0 && U.current.renderFrame(v[0], 0, 0); }, fs = C => { N && (E(!1), hush(), Dn.stopBGM(), U.current && U.current.pauseAllVideos()), f(C); let L = 0; for (let ne = 0; ne < C; ne++)
    L += v[ne].duration || 10; tn.current = L, x(L), U.current && v[C] && U.current.renderFrame(v[C], 0, C); }, Jc = async () => { if (v.length === 0 || !U.current)
    return; Ot(), $(!0), ze(0), Ut(null), Lt(!0); let C = null; try {
    const vd = await mm.measureScenes(v, (de, Ee) => { ze(Math.floor(Ee * .2)); }), tv = v.map((de, Ee) => vd[Ee] ? { ...de, voiceDuration: vd[Ee], duration: Math.max(de.duration || 10, Math.ceil((vd[Ee] + .8) * 2) / 2) } : de);
    tv.some((de, Ee) => de.duration !== (v[Ee].duration || 10) || de.voiceDuration !== v[Ee].voiceDuration) && p(tv);
    const xv = withOutro(tv), xo = xv[xv.length - 1];
    if (xo && xo.isOutro) {
        tv[0] && tv[0].shortSeries && (xo.voiceText = tv[0].shortSeries === "cocuk" ? "Beğendiysen abone olmayı unutma! Hoşça kal!" : "Beğendiysen like at, abone olmayı unutma!", xo.headline = "BEĞEN VE ABONE OL!");
        const od = (await mm.measureScenes([xo]))[0];
        xo.voiceDuration = od, xo.duration = Math.max(5, od ? Math.ceil((od + 1.5) * 2) / 2 : 6);
    }
    SX.studio.introOn && SX.hasBrand() && !(tv[0] && tv[0].shortSeries) && xv.unshift({ id: "__intro", isIntro: !0, sceneNumber: 0, title: "Giriş", duration: 3, voiceText: "", imageUrl: "" });
    await U.current.preloadScenes(xv);
    C = await mm.createSynchronizedSoundtrack(xv, { bgmTrack: h, bgmVolume: y, onProgress: (de, Ee) => { ze(Math.min(30, 20 + Math.floor(Ee / 4))); } });
    const L = await U.current.exportVideo(xv, C.stream, de => { ze(30 + Math.floor(de * .68)); }, () => C.begin());
    C.stop();
    const ne = L.filename.split(".").pop();
    let K = "sinematik_video";
    n === "malazgirt" ? K = "1071_malazgirt_zaferi" : n === "fatih" ? K = "1453_istanbulun_fethi" : n === "saladin" && (K = "1187_kudus_selahaddin"), Ut({ url: L.url, filename: L.savedPath ? L.filename : `${K}_${Date.now()}.${ne}` }), ze(100), L.savedPath && setSavedInfo(L.savedPath);
}
catch (L) {
    console.error("Export failed:", L), C && C.stop(), alert("Video dışa aktarılırken bir hata oluştu: " + L.message), Lt(!1);
}
finally {
    $(!1);
} }; return o.jsxs("div", { className: "app-container", children: [o.jsx(Kp, { appMode: e, setAppMode: t, aspectRatio: i, setAspectRatio: l, onExport: Jc, isExporting: b, exportProgress: X, scenesCount: v.length, onLoadMalazgirtProject: as, onLoadFatihProject: Qc, onLoadSaladinProject: Zc, activeProject: n, onOpenPromptStudio: () => { t("multiScene"), H("generator"); }, onSaveProject: saveProject, onOpenProject: openProject, onFitDurations: fitDurations, isFitting: fitBusy, onOpenTools: () => setToolsOpen(!0) }), o.jsx(StudioTools, { open: toolsOpen, onClose: () => setToolsOpen(!1), scenes: v, aspect: i, project: n, currentIndex: c, onGenerate: (C, L, ne) => Xc(C, L, ne), onPreviewIntro: previewIntro, onApplyCaptions: applyCaptions, setBgmTrack: m, outroOn: oOn, outroDur: oDur }), o.jsx("input", { ref: fileRef, type: "file", accept: ".json,application/json", style: { display: "none" }, onChange: onProjectFile }), e === "promptToVideo" && o.jsx(Zp, { onSwitchToMultiScene: () => t("multiScene") }), e === "longVideo" && o.jsx(LongStudio, { onSendToStudio: loadLong }), e === "shortVideo" && o.jsx(ShortStudio, { onSendToStudio: loadLong }), savedInfo && o.jsxs("div", { className: "sx-toast", children: [o.jsxs("div", { children: [o.jsx("strong", { children: "✓ Video kaydedildi" }), o.jsx("div", { className: "sx-hint", style: { wordBreak: "break-all" }, children: savedInfo })] }), o.jsxs("div", { style: { display: "flex", gap: 6 }, children: [o.jsx("button", { type: "button", className: "btn btn-primary btn-sm", onClick: () => fetch("/api/reveal?p=" + encodeURIComponent(savedInfo), { method: "POST" }), children: "📂 Klasörde Göster" }), o.jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: () => setSavedInfo(""), children: "✕" })] })] }), e === "multiScene" && lay === "factory" && o.jsxs(o.Fragment, { children: [o.jsx(FactoryView, { scenes: v, currentIndex: c, onSelect: fs, onUpdate: ss, onSetScenes: p, onAdd: us, onDelete: cs, onPreviewTTS: os, onGenerate: (C, L, ne) => Xc(C, L, ne), isGenerating: T, genProgress: A, genStatus: te, canvasRef: Fi, aspect: i, setAspect: l, isPlaying: N, onTogglePlay: qc, onReset: Ot, time: g, totalDuration: ds, voice: z, setVoice: O, rate: w, setRate: k, subsOn: a, setSubsOn: s, subStyle: u, setSubStyle: d, bgm: h, setBgm: m, bgmVol: y, setBgmVol: S, outroOn: oOn, setOutroOn: setOOn, onExport: Jc, isExporting: b, exportProgress: X, onFit: fitDurations, isFitting: fitBusy, setLayout: setLay }), o.jsx(rm, { isOpen: Ne, progress: X, downloadUrl: je == null ? void 0 : je.url, filename: je == null ? void 0 : je.filename, onClose: () => Lt(!1) })] }), e === "multiScene" && lay !== "factory" && o.jsxs(o.Fragment, { children: [o.jsx("button", { type: "button", className: "fx-switch-btn", onClick: () => setLay("factory"), title: "3D Video Fabrikası görünümü", children: "🏭 3D Fabrika" }), o.jsxs("main", { className: "studio-main", children: [o.jsx(qp, { scenes: v, currentSceneIndex: c, onSelectScene: fs, onUpdateScene: ss, onAddScene: us, onDeleteScene: cs, onRegenerateSceneImage: Hi, onPreviewSceneTTS: os, onGenerateFromRawPrompt: Xc, isGenerating: T, generationProgress: A, generationStatusText: te, activeTab: D, setActiveTab: H }), o.jsx(Jp, { canvasRef: Fi, aspectRatio: i, isPlaying: N, onTogglePlay: qc, onReset: Ot, currentTime: g, totalDuration: ds, currentSceneIndex: c, totalScenes: v.length }), o.jsx(nm, { subtitlesEnabled: a, setSubtitlesEnabled: s, subtitleStyle: u, setSubtitleStyle: d, bgmTrack: h, setBgmTrack: m, bgmVolume: y, setBgmVolume: S, speechRate: w, setSpeechRate: k, currentScene: v[c], currentSceneIndex: c, onUpdateScene: ss, onRegenerateSceneImage: Hi, onPreviewSceneTTS: os, availableVoices: ce, selectedVoiceURI: z, setSelectedVoiceURI: O, outroOn: oOn, setOutroOn: setOOn, outroText: oText, setOutroText: setOText, onPreviewOutro: previewOutro, outroDefault: OUTRO_DEFAULT })] }), o.jsx(em, { scenes: v, currentSceneIndex: c, onSelectScene: fs, onRegenerateSceneImage: Hi, onAddScene: us, onDeleteScene: cs, totalDuration: ds }), o.jsx(rm, { isOpen: Ne, progress: X, downloadUrl: je == null ? void 0 : je.url, filename: je == null ? void 0 : je.filename, onClose: () => Lt(!1) })] })] }); }
hl.createRoot(document.getElementById("root")).render(o.jsx(Vo.StrictMode, { children: o.jsx(vm, {}) }));
