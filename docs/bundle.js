(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var preact = createCommonjsModule(function (module, exports) {
	  var n,
	      l,
	      u,
	      t,
	      i,
	      o,
	      r,
	      f,
	      e = {},
	      c = [],
	      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

	  function a(n, l) {
	    for (var u in l) n[u] = l[u];

	    return n;
	  }

	  function p(n) {
	    var l = n.parentNode;
	    l && l.removeChild(n);
	  }

	  function v(l, u, t) {
	    var i,
	        o,
	        r,
	        f = {};

	    for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

	    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
	    return h(l, f, i, o, null);
	  }

	  function h(n, t, i, o, r) {
	    var f = {
	      type: n,
	      props: t,
	      key: i,
	      ref: o,
	      __k: null,
	      __: null,
	      __b: 0,
	      __e: null,
	      __d: void 0,
	      __c: null,
	      __h: null,
	      constructor: void 0,
	      __v: null == r ? ++u : r
	    };
	    return null == r && null != l.vnode && l.vnode(f), f;
	  }

	  function y(n) {
	    return n.children;
	  }

	  function d(n, l) {
	    this.props = n, this.context = l;
	  }

	  function _(n, l) {
	    if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

	    for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

	    return "function" == typeof n.type ? _(n) : null;
	  }

	  function k(n) {
	    var l, u;

	    if (null != (n = n.__) && null != n.__c) {
	      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
	        n.__e = n.__c.base = u.__e;
	        break;
	      }

	      return k(n);
	    }
	  }

	  function x(n) {
	    (!n.__d && (n.__d = !0) && i.push(n) && !b.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(b);
	  }

	  function b() {
	    for (var n; b.__r = i.length;) n = i.sort(function (n, l) {
	      return n.__v.__b - l.__v.__b;
	    }), i = [], n.some(function (n) {
	      var l, u, t, i, o, r;
	      n.__d && (o = (i = (l = n).__v).__e, (r = l.__P) && (u = [], (t = a({}, i)).__v = i.__v + 1, I(r, i, t, l.__n, void 0 !== r.ownerSVGElement, null != i.__h ? [o] : null, u, null == o ? _(i) : o, i.__h), T(u, i), i.__e != o && k(i)));
	    });
	  }

	  function m(n, l, u, t, i, o, r, f, s, a) {
	    var p,
	        v,
	        d,
	        k,
	        x,
	        b,
	        m,
	        A = t && t.__k || c,
	        P = A.length;

	    for (u.__k = [], p = 0; p < l.length; p++) if (null != (k = u.__k[p] = null == (k = l[p]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? h(null, k, null, null, k) : Array.isArray(k) ? h(y, {
	      children: k
	    }, null, null, null) : k.__b > 0 ? h(k.type, k.props, k.key, null, k.__v) : k)) {
	      if (k.__ = u, k.__b = u.__b + 1, null === (d = A[p]) || d && k.key == d.key && k.type === d.type) A[p] = void 0;else for (v = 0; v < P; v++) {
	        if ((d = A[v]) && k.key == d.key && k.type === d.type) {
	          A[v] = void 0;
	          break;
	        }

	        d = null;
	      }
	      I(n, k, d = d || e, i, o, r, f, s, a), x = k.__e, (v = k.ref) && d.ref != v && (m || (m = []), d.ref && m.push(d.ref, null, k), m.push(v, k.__c || x, k)), null != x ? (null == b && (b = x), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = g(k, s, n) : s = w(n, k, d, A, x, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d));
	    }

	    for (u.__e = b, p = P; p--;) null != A[p] && ("function" == typeof u.type && null != A[p].__e && A[p].__e == u.__d && (u.__d = _(t, p + 1)), L(A[p], A[p]));

	    if (m) for (p = 0; p < m.length; p++) z(m[p], m[++p], m[++p]);
	  }

	  function g(n, l, u) {
	    for (var t, i = n.__k, o = 0; i && o < i.length; o++) (t = i[o]) && (t.__ = n, l = "function" == typeof t.type ? g(t, l, u) : w(u, t, t, i, t.__e, l));

	    return l;
	  }

	  function w(n, l, u, t, i, o) {
	    var r, f, e;
	    if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || i != o || null == i.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(i), r = null;else {
	      for (f = o, e = 0; (f = f.nextSibling) && e < t.length; e += 2) if (f == i) break n;

	      n.insertBefore(i, o), r = o;
	    }
	    return void 0 !== r ? r : i.nextSibling;
	  }

	  function A(n, l, u, t, i) {
	    var o;

	    for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], t);

	    for (o in l) i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], t);
	  }

	  function P(n, l, u) {
	    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s.test(l) ? u : u + "px";
	  }

	  function C(n, l, u, t, i) {
	    var o;

	    n: if ("style" === l) {
	      if ("string" == typeof u) n.style.cssText = u;else {
	        if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || P(n.style, l, "");
	        if (u) for (l in u) t && u[l] === t[l] || P(n.style, l, u[l]);
	      }
	    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t || n.addEventListener(l, o ? H : $, o) : n.removeEventListener(l, o ? H : $, o);else if ("dangerouslySetInnerHTML" !== l) {
	      if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
	        n[l] = null == u ? "" : u;
	        break n;
	      } catch (n) {}
	      "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
	    }
	  }

	  function $(n) {
	    this.l[n.type + !1](l.event ? l.event(n) : n);
	  }

	  function H(n) {
	    this.l[n.type + !0](l.event ? l.event(n) : n);
	  }

	  function I(n, u, t, i, o, r, f, e, c) {
	    var s,
	        p,
	        v,
	        h,
	        _,
	        k,
	        x,
	        b,
	        g,
	        w,
	        A,
	        P = u.type;

	    if (void 0 !== u.constructor) return null;
	    null != t.__h && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [e]), (s = l.__b) && s(u);

	    try {
	      n: if ("function" == typeof P) {
	        if (b = u.props, g = (s = P.contextType) && i[s.__c], w = s ? g ? g.props.value : s.__ : i, t.__c ? x = (p = u.__c = t.__c).__ = p.__E : ("prototype" in P && P.prototype.render ? u.__c = p = new P(b, w) : (u.__c = p = new d(b, w), p.constructor = P, p.render = M), g && g.sub(p), p.props = b, p.state || (p.state = {}), p.context = w, p.__n = i, v = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != P.getDerivedStateFromProps && (p.__s == p.state && (p.__s = a({}, p.__s)), a(p.__s, P.getDerivedStateFromProps(b, p.__s))), h = p.props, _ = p.state, v) null == P.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);else {
	          if (null == P.getDerivedStateFromProps && b !== h && null != p.componentWillReceiveProps && p.componentWillReceiveProps(b, w), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(b, p.__s, w) || u.__v === t.__v) {
	            p.props = b, p.state = p.__s, u.__v !== t.__v && (p.__d = !1), p.__v = u, u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) {
	              n && (n.__ = u);
	            }), p.__h.length && f.push(p);
	            break n;
	          }

	          null != p.componentWillUpdate && p.componentWillUpdate(b, p.__s, w), null != p.componentDidUpdate && p.__h.push(function () {
	            p.componentDidUpdate(h, _, k);
	          });
	        }
	        p.context = w, p.props = b, p.state = p.__s, (s = l.__r) && s(u), p.__d = !1, p.__v = u, p.__P = n, s = p.render(p.props, p.state, p.context), p.state = p.__s, null != p.getChildContext && (i = a(a({}, i), p.getChildContext())), v || null == p.getSnapshotBeforeUpdate || (k = p.getSnapshotBeforeUpdate(h, _)), A = null != s && s.type === y && null == s.key ? s.props.children : s, m(n, Array.isArray(A) ? A : [A], u, t, i, o, r, f, e, c), p.base = u.__e, u.__h = null, p.__h.length && f.push(p), x && (p.__E = p.__ = null), p.__e = !1;
	      } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = j(t.__e, u, t, i, o, r, f, c);

	      (s = l.diffed) && s(u);
	    } catch (n) {
	      u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, t);
	    }
	  }

	  function T(n, u) {
	    l.__c && l.__c(u, n), n.some(function (u) {
	      try {
	        n = u.__h, u.__h = [], n.some(function (n) {
	          n.call(u);
	        });
	      } catch (n) {
	        l.__e(n, u.__v);
	      }
	    });
	  }

	  function j(l, u, t, i, o, r, f, c) {
	    var s,
	        a,
	        v,
	        h = t.props,
	        y = u.props,
	        d = u.type,
	        k = 0;
	    if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
	      l = s, r[k] = null;
	      break;
	    }

	    if (null == l) {
	      if (null === d) return document.createTextNode(y);
	      l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, y.is && y), r = null, c = !1;
	    }

	    if (null === d) h === y || c && l.data === y || (l.data = y);else {
	      if (r = r && n.call(l.childNodes), a = (h = t.props || e).dangerouslySetInnerHTML, v = y.dangerouslySetInnerHTML, !c) {
	        if (null != r) for (h = {}, k = 0; k < l.attributes.length; k++) h[l.attributes[k].name] = l.attributes[k].value;
	        (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
	      }

	      if (A(l, y, h, o, c), v) u.__k = [];else if (k = u.props.children, m(l, Array.isArray(k) ? k : [k], u, t, i, o && "foreignObject" !== d, r, f, r ? r[0] : t.__k && _(t, 0), c), null != r) for (k = r.length; k--;) null != r[k] && p(r[k]);
	      c || ("value" in y && void 0 !== (k = y.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== h.value) && C(l, "value", k, h.value, !1), "checked" in y && void 0 !== (k = y.checked) && k !== l.checked && C(l, "checked", k, h.checked, !1));
	    }
	    return l;
	  }

	  function z(n, u, t) {
	    try {
	      "function" == typeof n ? n(u) : n.current = u;
	    } catch (n) {
	      l.__e(n, t);
	    }
	  }

	  function L(n, u, t) {
	    var i, o;

	    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || z(i, null, u)), null != (i = n.__c)) {
	      if (i.componentWillUnmount) try {
	        i.componentWillUnmount();
	      } catch (n) {
	        l.__e(n, u);
	      }
	      i.base = i.__P = null;
	    }

	    if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && L(i[o], u, "function" != typeof n.type);
	    t || null == n.__e || p(n.__e), n.__e = n.__d = void 0;
	  }

	  function M(n, l, u) {
	    return this.constructor(n, u);
	  }

	  function N(u, t, i) {
	    var o, r, f;
	    l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], I(t, u = (!o && i || t).__k = v(y, null, [u]), r || e, e, void 0 !== t.ownerSVGElement, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o), T(f, u);
	  }

	  n = c.slice, l = {
	    __e: function (n, l, u, t) {
	      for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
	        if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
	      } catch (l) {
	        n = l;
	      }

	      throw n;
	    }
	  }, u = 0, t = function (n) {
	    return null != n && void 0 === n.constructor;
	  }, d.prototype.setState = function (n, l) {
	    var u;
	    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(a({}, u), this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), x(this));
	  }, d.prototype.forceUpdate = function (n) {
	    this.__v && (this.__e = !0, n && this.__h.push(n), x(this));
	  }, d.prototype.render = y, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0, f = 0, exports.render = N, exports.hydrate = function n(l, u) {
	    N(l, u, n);
	  }, exports.createElement = v, exports.h = v, exports.Fragment = y, exports.createRef = function () {
	    return {
	      current: null
	    };
	  }, exports.isValidElement = t, exports.Component = d, exports.cloneElement = function (l, u, t) {
	    var i,
	        o,
	        r,
	        f = a({}, l.props);

	    for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

	    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), h(l.type, f, i || l.key, o || l.ref, null);
	  }, exports.createContext = function (n, l) {
	    var u = {
	      __c: l = "__cC" + f++,
	      __: n,
	      Consumer: function (n, l) {
	        return n.children(l);
	      },
	      Provider: function (n) {
	        var u, t;
	        return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function () {
	          return t;
	        }, this.shouldComponentUpdate = function (n) {
	          this.props.value !== n.value && u.some(x);
	        }, this.sub = function (n) {
	          u.push(n);
	          var l = n.componentWillUnmount;

	          n.componentWillUnmount = function () {
	            u.splice(u.indexOf(n), 1), l && l.call(n);
	          };
	        }), n.children;
	      }
	    };
	    return u.Provider.__ = u.Consumer.contextType = u;
	  }, exports.toChildArray = function n(l, u) {
	    return u = u || [], null == l || "boolean" == typeof l || (Array.isArray(l) ? l.some(function (l) {
	      n(l, u);
	    }) : u.push(l)), u;
	  }, exports.options = l;
	});

	createCommonjsModule(function (module, exports) {
	  "undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.7.1", preact.options, {
	    Fragment: preact.Fragment,
	    Component: preact.Component
	  }), exports.addHookName = function (e, o) {
	    return preact.options.__a && preact.options.__a(o), e;
	  };
	});

	createCommonjsModule(function (module, exports) {
	  var n = preact;
	  var e = {};

	  function t(e) {
	    return e.type === n.Fragment ? "Fragment" : "function" == typeof e.type ? e.type.displayName || e.type.name : "string" == typeof e.type ? e.type : "#text";
	  }

	  var o = [],
	      r = [];

	  function a() {
	    return o.length > 0 ? o[o.length - 1] : null;
	  }

	  var i = !1;

	  function s(e) {
	    return "function" == typeof e.type && e.type != n.Fragment;
	  }

	  function c(n) {
	    for (var e = [n], o = n; null != o.__o;) e.push(o.__o), o = o.__o;

	    return e.reduce(function (n, e) {
	      n += "  in " + t(e);
	      var o = e.__source;
	      return o ? n += " (at " + o.fileName + ":" + o.lineNumber + ")" : i || (i = !0, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n + "\n";
	    }, "");
	  }

	  var l = "function" == typeof WeakMap,
	      u = n.Component.prototype.setState;

	  n.Component.prototype.setState = function (n, e) {
	    return null == this.__v ? null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + c(a())) : null == this.__P && console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + c(this.__v)), u.call(this, n, e);
	  };

	  var f = n.Component.prototype.forceUpdate;

	  function p(n) {
	    var e = n.props,
	        o = t(n),
	        r = "";

	    for (var a in e) if (e.hasOwnProperty(a) && "children" !== a) {
	      var i = e[a];
	      "function" == typeof i && (i = "function " + (i.displayName || i.name) + "() {}"), i = Object(i) !== i || i.toString ? i + "" : Object.prototype.toString.call(i), r += " " + a + "=" + JSON.stringify(i);
	    }

	    var s = e.children;
	    return "<" + o + r + (s && s.length ? ">..</" + o + ">" : " />");
	  }

	  n.Component.prototype.forceUpdate = function (n) {
	    return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + c(a())) : null == this.__P && console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + c(this.__v)), f.call(this, n);
	  }, function () {
	    !function () {
	      var e = n.options.__b,
	          t = n.options.diffed,
	          a = n.options.__,
	          i = n.options.vnode,
	          c = n.options.__r;
	      n.options.diffed = function (n) {
	        s(n) && r.pop(), o.pop(), t && t(n);
	      }, n.options.__b = function (n) {
	        s(n) && o.push(n), e && e(n);
	      }, n.options.__ = function (n, e) {
	        r = [], a && a(n, e);
	      }, n.options.vnode = function (n) {
	        n.__o = r.length > 0 ? r[r.length - 1] : null, i && i(n);
	      }, n.options.__r = function (n) {
	        s(n) && r.push(n), c && c(n);
	      };
	    }();
	    var a = !1,
	        i = n.options.__b,
	        u = n.options.diffed,
	        f = n.options.vnode,
	        d = n.options.__e,
	        h = n.options.__,
	        y = n.options.__h,
	        v = l ? {
	      useEffect: new WeakMap(),
	      useLayoutEffect: new WeakMap(),
	      lazyPropTypes: new WeakMap()
	    } : null,
	        m = [];
	    n.options.__e = function (n, e, o, r) {
	      if (e && e.__c && "function" == typeof n.then) {
	        var a = n;
	        n = new Error("Missing Suspense. The throwing component was: " + t(e));

	        for (var i = e; i; i = i.__) if (i.__c && i.__c.__c) {
	          n = a;
	          break;
	        }

	        if (n instanceof Error) throw n;
	      }

	      try {
	        (r = r || {}).componentStack = c(e), d(n, e, o, r), "function" != typeof n.then && setTimeout(function () {
	          throw n;
	        });
	      } catch (n) {
	        throw n;
	      }
	    }, n.options.__ = function (n, e) {
	      if (!e) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
	      var o;

	      switch (e.nodeType) {
	        case 1:
	        case 11:
	        case 9:
	          o = !0;
	          break;

	        default:
	          o = !1;
	      }

	      if (!o) {
	        var r = t(n);
	        throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + e + " instead: render(<" + r + " />, " + e + ");");
	      }

	      h && h(n, e);
	    }, n.options.__b = function (n) {
	      var o = n.type,
	          r = function n(e) {
	        return e ? "function" == typeof e.type ? n(e.__) : e : {};
	      }(n.__);

	      if (a = !0, void 0 === o) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + p(n) + "\n\n" + c(n));

	      if (null != o && "object" == typeof o) {
	        if (void 0 !== o.__k && void 0 !== o.__e) throw new Error("Invalid type passed to createElement(): " + o + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + t(n) + " = " + p(o) + ";\n  let vnode = <My" + t(n) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + c(n));
	        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(o) ? "array" : o));
	      }

	      if ("thead" !== o && "tfoot" !== o && "tbody" !== o || "table" === r.type ? "tr" === o && "thead" !== r.type && "tfoot" !== r.type && "tbody" !== r.type && "table" !== r.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + p(n) + "\n\n" + c(n)) : "td" === o && "tr" !== r.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + p(n) + "\n\n" + c(n)) : "th" === o && "tr" !== r.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + p(n) + "\n\n" + c(n)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + p(n) + "\n\n" + c(n)), void 0 !== n.ref && "function" != typeof n.ref && "object" != typeof n.ref && !("$$typeof" in n)) throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got [' + typeof n.ref + "] instead\n" + p(n) + "\n\n" + c(n));
	      if ("string" == typeof n.type) for (var s in n.props) if ("o" === s[0] && "n" === s[1] && "function" != typeof n.props[s] && null != n.props[s]) throw new Error("Component's \"" + s + '" property should be a function, but got [' + typeof n.props[s] + "] instead\n" + p(n) + "\n\n" + c(n));

	      if ("function" == typeof n.type && n.type.propTypes) {
	        if ("Lazy" === n.type.displayName && v && !v.lazyPropTypes.has(n.type)) {
	          var l = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";

	          try {
	            var u = n.type();
	            v.lazyPropTypes.set(n.type, !0), console.warn(l + "Component wrapped in lazy() is " + t(u));
	          } catch (n) {
	            console.warn(l + "We will log the wrapped component's name once it is loaded.");
	          }
	        }

	        var f = n.props;
	        n.type.__f && delete (f = function (n, e) {
	          for (var t in e) n[t] = e[t];

	          return n;
	        }({}, f)).ref, function (n, t, o, r, a) {
	          Object.keys(n).forEach(function (o) {
	            var i;

	            try {
	              i = n[o](t, o, r, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
	            } catch (n) {
	              i = n;
	            }

	            !i || i.message in e || (e[i.message] = !0, console.error("Failed prop type: " + i.message + (a && "\n" + a() || "")));
	          });
	        }(n.type.propTypes, f, 0, t(n), function () {
	          return c(n);
	        });
	      }

	      i && i(n);
	    }, n.options.__h = function (n, e, t) {
	      if (!n || !a) throw new Error("Hook can only be invoked from render methods.");
	      y && y(n, e, t);
	    };

	    var b = function (n, e) {
	      return {
	        get: function () {
	          var t = "get" + n + e;
	          m && m.indexOf(t) < 0 && (m.push(t), console.warn("getting vnode." + n + " is deprecated, " + e));
	        },
	        set: function () {
	          var t = "set" + n + e;
	          m && m.indexOf(t) < 0 && (m.push(t), console.warn("setting vnode." + n + " is not allowed, " + e));
	        }
	      };
	    },
	        w = {
	      nodeName: b("nodeName", "use vnode.type"),
	      attributes: b("attributes", "use vnode.props"),
	      children: b("children", "use vnode.props.children")
	    },
	        g = Object.create({}, w);

	    n.options.vnode = function (n) {
	      var e = n.props;

	      if (null !== n.type && null != e && ("__source" in e || "__self" in e)) {
	        var t = n.props = {};

	        for (var o in e) {
	          var r = e[o];
	          "__source" === o ? n.__source = r : "__self" === o ? n.__self = r : t[o] = r;
	        }
	      }

	      n.__proto__ = g, f && f(n);
	    }, n.options.diffed = function (n) {
	      if (n.__k && n.__k.forEach(function (e) {
	        if (e && void 0 === e.type) {
	          delete e.__, delete e.__b;
	          var t = Object.keys(e).join(",");
	          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t + "}.\n\n" + c(n));
	        }
	      }), a = !1, u && u(n), null != n.__k) for (var e = [], t = 0; t < n.__k.length; t++) {
	        var o = n.__k[t];

	        if (o && null != o.key) {
	          var r = o.key;

	          if (-1 !== e.indexOf(r)) {
	            console.error('Following component has two or more children with the same key attribute: "' + r + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + p(n) + "\n\n" + c(n));
	            break;
	          }

	          e.push(r);
	        }
	      }
	    };
	  }(), exports.resetPropWarnings = function () {
	    e = {};
	  };
	});

	var n,
	    l$1,
	    u$1,
	    t$1,
	    o$1,
	    r$1,
	    f$1,
	    e$1 = {},
	    c$1 = [],
	    s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

	function a$1(n, l) {
	  for (var u in l) n[u] = l[u];

	  return n;
	}

	function h$1(n) {
	  var l = n.parentNode;
	  l && l.removeChild(n);
	}

	function v$1(l, u, i) {
	  var t,
	      o,
	      r,
	      f = {};

	  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

	  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
	  return y$1(l, f, t, o, null);
	}

	function y$1(n, i, t, o, r) {
	  var f = {
	    type: n,
	    props: i,
	    key: t,
	    ref: o,
	    __k: null,
	    __: null,
	    __b: 0,
	    __e: null,
	    __d: void 0,
	    __c: null,
	    __h: null,
	    constructor: void 0,
	    __v: null == r ? ++u$1 : r
	  };
	  return null == r && null != l$1.vnode && l$1.vnode(f), f;
	}

	function d$1(n) {
	  return n.children;
	}

	function _$1(n, l) {
	  this.props = n, this.context = l;
	}

	function k$1(n, l) {
	  if (null == l) return n.__ ? k$1(n.__, n.__.__k.indexOf(n) + 1) : null;

	  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

	  return "function" == typeof n.type ? k$1(n) : null;
	}

	function b$1(n) {
	  var l, u;

	  if (null != (n = n.__) && null != n.__c) {
	    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
	      n.__e = n.__c.base = u.__e;
	      break;
	    }

	    return b$1(n);
	  }
	}

	function m$1(n) {
	  (!n.__d && (n.__d = !0) && t$1.push(n) && !g$1.__r++ || r$1 !== l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)(g$1);
	}

	function g$1() {
	  for (var n; g$1.__r = t$1.length;) n = t$1.sort(function (n, l) {
	    return n.__v.__b - l.__v.__b;
	  }), t$1 = [], n.some(function (n) {
	    var l, u, i, t, o, r;
	    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = a$1({}, t)).__v = t.__v + 1, j$2(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? k$1(t) : o, t.__h), z$1(u, t), t.__e != o && b$1(t)));
	  });
	}

	function w$2(n, l, u, i, t, o, r, f, s, a) {
	  var h,
	      v,
	      p,
	      _,
	      b,
	      m,
	      g,
	      w = i && i.__k || c$1,
	      A = w.length;

	  for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y$1(null, _, null, null, _) : Array.isArray(_) ? y$1(d$1, {
	    children: _
	  }, null, null, null) : _.__b > 0 ? y$1(_.type, _.props, _.key, null, _.__v) : _)) {
	    if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {
	      if ((p = w[v]) && _.key == p.key && _.type === p.type) {
	        w[v] = void 0;
	        break;
	      }

	      p = null;
	    }
	    j$2(n, _, p = p || e$1, t, o, r, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x$2(_, s, n) : s = P$1(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k$1(p));
	  }

	  for (u.__e = m, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k$1(i, h + 1)), N(w[h], w[h]));

	  if (g) for (h = 0; h < g.length; h++) M$2(g[h], g[++h], g[++h]);
	}

	function x$2(n, l, u) {
	  for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? x$2(i, l, u) : P$1(u, i, i, t, i.__e, l));

	  return l;
	}

	function A$2(n, l) {
	  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
	    A$2(n, l);
	  }) : l.push(n)), l;
	}

	function P$1(n, l, u, i, t, o) {
	  var r, f, e;
	  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
	    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

	    n.insertBefore(t, o), r = o;
	  }
	  return void 0 !== r ? r : t.nextSibling;
	}

	function C$1(n, l, u, i, t) {
	  var o;

	  for (o in u) "children" === o || "key" === o || o in l || H$1(n, o, null, u[o], i);

	  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H$1(n, o, l[o], u[o], i);
	}

	function $(n, l, u) {
	  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s$1.test(l) ? u : u + "px";
	}

	function H$1(n, l, u, i, t) {
	  var o;

	  n: if ("style" === l) {
	    if ("string" == typeof u) n.style.cssText = u;else {
	      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
	      if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
	    }
	  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T$1 : I, o) : n.removeEventListener(l, o ? T$1 : I, o);else if ("dangerouslySetInnerHTML" !== l) {
	    if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
	      n[l] = null == u ? "" : u;
	      break n;
	    } catch (n) {}
	    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
	  }
	}

	function I(n) {
	  this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
	}

	function T$1(n) {
	  this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
	}

	function j$2(n, u, i, t, o, r, f, e, c) {
	  var s,
	      h,
	      v,
	      y,
	      p,
	      k,
	      b,
	      m,
	      g,
	      x,
	      A,
	      P = u.type;
	  if (void 0 !== u.constructor) return null;
	  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (s = l$1.__b) && s(u);

	  try {
	    n: if ("function" == typeof P) {
	      if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _$1(m, x), h.constructor = P, h.render = O$1), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a$1({}, h.__s)), a$1(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
	        if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {
	          h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
	            n && (n.__ = u);
	          }), h.__h.length && f.push(h);
	          break n;
	        }

	        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
	          h.componentDidUpdate(y, p, k);
	        });
	      }
	      h.context = x, h.props = m, h.state = h.__s, (s = l$1.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a$1(a$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d$1 && null == s.key ? s.props.children : s, w$2(n, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
	    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L$1(i.__e, u, i, t, o, r, f, c);

	    (s = l$1.diffed) && s(u);
	  } catch (n) {
	    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l$1.__e(n, u, i);
	  }
	}

	function z$1(n, u) {
	  l$1.__c && l$1.__c(u, n), n.some(function (u) {
	    try {
	      n = u.__h, u.__h = [], n.some(function (n) {
	        n.call(u);
	      });
	    } catch (n) {
	      l$1.__e(n, u.__v);
	    }
	  });
	}

	function L$1(l, u, i, t, o, r, f, c) {
	  var s,
	      a,
	      v,
	      y = i.props,
	      p = u.props,
	      d = u.type,
	      _ = 0;
	  if ("svg" === d && (o = !0), null != r) for (; _ < r.length; _++) if ((s = r[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
	    l = s, r[_] = null;
	    break;
	  }

	  if (null == l) {
	    if (null === d) return document.createTextNode(p);
	    l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
	  }

	  if (null === d) y === p || c && l.data === p || (l.data = p);else {
	    if (r = r && n.call(l.childNodes), a = (y = i.props || e$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
	      if (null != r) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
	      (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
	    }

	    if (C$1(l, p, y, o, c), v) u.__k = [];else if (_ = u.props.children, w$2(l, Array.isArray(_) ? _ : [_], u, i, t, o && "foreignObject" !== d, r, f, r ? r[0] : i.__k && k$1(i, 0), c), null != r) for (_ = r.length; _--;) null != r[_] && h$1(r[_]);
	    c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_ || "option" === d && _ !== y.value) && H$1(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H$1(l, "checked", _, y.checked, !1));
	  }
	  return l;
	}

	function M$2(n, u, i) {
	  try {
	    "function" == typeof n ? n(u) : n.current = u;
	  } catch (n) {
	    l$1.__e(n, i);
	  }
	}

	function N(n, u, i) {
	  var t, o;

	  if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M$2(t, null, u)), null != (t = n.__c)) {
	    if (t.componentWillUnmount) try {
	      t.componentWillUnmount();
	    } catch (n) {
	      l$1.__e(n, u);
	    }
	    t.base = t.__P = null;
	  }

	  if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, "function" != typeof n.type);
	  i || null == n.__e || h$1(n.__e), n.__e = n.__d = void 0;
	}

	function O$1(n, l, u) {
	  return this.constructor(n, u);
	}

	function S$1(u, i, t) {
	  var o, r, f;
	  l$1.__ && l$1.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j$2(i, u = (!o && t || i).__k = v$1(d$1, null, [u]), r || e$1, e$1, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, f, !o && t ? t : r ? r.__e : i.firstChild, o), z$1(f, u);
	}

	function B(l, u, i) {
	  var t,
	      o,
	      r,
	      f = a$1({}, l.props);

	  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

	  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), y$1(l.type, f, t || l.key, o || l.ref, null);
	}

	function D(n, l) {
	  var u = {
	    __c: l = "__cC" + f$1++,
	    __: n,
	    Consumer: function (n, l) {
	      return n.children(l);
	    },
	    Provider: function (n) {
	      var u, i;
	      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
	        return i;
	      }, this.shouldComponentUpdate = function (n) {
	        this.props.value !== n.value && u.some(m$1);
	      }, this.sub = function (n) {
	        u.push(n);
	        var l = n.componentWillUnmount;

	        n.componentWillUnmount = function () {
	          u.splice(u.indexOf(n), 1), l && l.call(n);
	        };
	      }), n.children;
	    }
	  };
	  return u.Provider.__ = u.Consumer.contextType = u;
	}

	n = c$1.slice, l$1 = {
	  __e: function (n, l, u, i) {
	    for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {
	      if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
	    } catch (l) {
	      n = l;
	    }

	    throw n;
	  }
	}, u$1 = 0, _$1.prototype.setState = function (n, l) {
	  var u;
	  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), "function" == typeof n && (n = n(a$1({}, u), this.props)), n && a$1(u, n), null != n && this.__v && (l && this.__h.push(l), m$1(this));
	}, _$1.prototype.forceUpdate = function (n) {
	  this.__v && (this.__e = !0, n && this.__h.push(n), m$1(this));
	}, _$1.prototype.render = d$1, t$1 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$1.__r = 0, f$1 = 0;

	"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.7.1", l$1, {
	  Fragment: d$1,
	  Component: _$1
	});

	var t,
	    u,
	    r,
	    o = 0,
	    i = [],
	    c = l$1.__b,
	    f = l$1.__r,
	    e = l$1.diffed,
	    a = l$1.__c,
	    v = l$1.unmount;

	function l(t, r) {
	  l$1.__h && l$1.__h(u, t, o || r), o = 0;
	  var i = u.__H || (u.__H = {
	    __: [],
	    __h: []
	  });
	  return t >= i.__.length && i.__.push({}), i.__[t];
	}

	function m(n) {
	  return o = 1, p(w$1, n);
	}

	function p(n, r, o) {
	  var i = l(t++, 2);
	  return i.t = n, i.__c || (i.__ = [o ? o(r) : w$1(void 0, r), function (n) {
	    var t = i.t(i.__[0], n);
	    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
	  }], i.__c = u), i.__;
	}

	function y(r, o) {
	  var i = l(t++, 3);
	  !l$1.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
	}

	function d(r, o) {
	  var i = l(t++, 4);
	  !l$1.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
	}

	function h(n) {
	  return o = 5, _(function () {
	    return {
	      current: n
	    };
	  }, []);
	}

	function s(n, t, u) {
	  o = 6, d(function () {
	    return "function" == typeof n ? (n(t()), function () {
	      return n(null);
	    }) : n ? (n.current = t(), function () {
	      return n.current = null;
	    }) : void 0;
	  }, null == u ? u : u.concat(n));
	}

	function _(n, u) {
	  var r = l(t++, 7);
	  return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
	}

	function A$1(n, t) {
	  return o = 8, _(function () {
	    return n;
	  }, t);
	}

	function F(n) {
	  var r = u.context[n.__c],
	      o = l(t++, 9);
	  return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
	}

	function x$1() {
	  for (var t; t = i.shift();) if (t.__P) try {
	    t.__H.__h.forEach(g), t.__H.__h.forEach(j$1), t.__H.__h = [];
	  } catch (u) {
	    t.__H.__h = [], l$1.__e(u, t.__v);
	  }
	}

	l$1.__b = function (n) {
	  u = null, c && c(n);
	}, l$1.__r = function (n) {
	  f && f(n), t = 0;
	  var r = (u = n.__c).__H;
	  r && (r.__h.forEach(g), r.__h.forEach(j$1), r.__h = []);
	}, l$1.diffed = function (t) {
	  e && e(t);
	  var o = t.__c;
	  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === l$1.requestAnimationFrame || ((r = l$1.requestAnimationFrame) || function (n) {
	    var t,
	        u = function () {
	      clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
	    },
	        r = setTimeout(u, 100);

	    b && (t = requestAnimationFrame(u));
	  })(x$1)), u = null;
	}, l$1.__c = function (t, u) {
	  u.some(function (t) {
	    try {
	      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
	        return !n.__ || j$1(n);
	      });
	    } catch (r) {
	      u.some(function (n) {
	        n.__h && (n.__h = []);
	      }), u = [], l$1.__e(r, t.__v);
	    }
	  }), a && a(t, u);
	}, l$1.unmount = function (t) {
	  v && v(t);
	  var u,
	      r = t.__c;
	  r && r.__H && (r.__H.__.forEach(function (n) {
	    try {
	      g(n);
	    } catch (n) {
	      u = n;
	    }
	  }), u && l$1.__e(u, r.__v));
	};
	var b = "function" == typeof requestAnimationFrame;

	function g(n) {
	  var t = u,
	      r = n.__c;
	  "function" == typeof r && (n.__c = void 0, r()), u = t;
	}

	function j$1(n) {
	  var t = u;
	  n.__c = n.__(), u = t;
	}

	function k(n, t) {
	  return !n || n.length !== t.length || t.some(function (t, u) {
	    return t !== n[u];
	  });
	}

	function w$1(n, t) {
	  return "function" == typeof t ? t(n) : t;
	}

	/**
	 * Debug hook.
	 *
	 * Given a value or set of values, emits a console error if any of them change from one render to the next.
	 */

	function useEnsureStability() {
	  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
	    values[_key] = arguments[_key];
	  }

	  useHelper(values.length, 0);
	  values.forEach(useHelper);
	  return;

	  function useHelper(value, index) {
	    // Make sure that the provided functions are perfectly stable across renders
	    const helperToEnsureStability = h(value);
	    const shownError = h(false);

	    if (helperToEnsureStability.current != value) {
	      if (!shownError.current) {
	        console.error(`This hook requires some or all of its arguments remain stable across each render; please check the ${index}-indexed value that was checked.`);
	        debugger;
	        shownError.current = true;
	      }
	    }
	  }
	}
	/**
	 * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
	 *
	 * To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
	 *
	 * To summarize, it's like a `useState`-`useEffect` mashup:
	 *
	 * 1. It's like `useState`, except this version of `setState` doesn't re-render the whole component
	 * 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function
	 * 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering
	 * 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`
	 *
	 * Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.
	 *
	 * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
	 * @param getInitialValue If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
	 * @returns
	 */

	function usePassiveState(onChange, getInitialValue) {
	  const valueRef = h(Unset$1);
	  const warningRef = h(false);
	  const cleanupCallbackRef = h(undefined); // Make sure that the provided functions are perfectly stable across renders

	  useEnsureStability(onChange, getInitialValue); // Shared between "dependency changed" and "component unmounted".

	  const onShouldCleanUp = A$1(() => {
	    let cleanupCallback = cleanupCallbackRef.current;
	    if (cleanupCallback) cleanupCallback();
	  }, []); // There are a couple places where we'd like to use our initial
	  // value in place of having no value at all yet.
	  // This is the shared code for that, used on mount and whenever
	  // getValue is called.

	  const tryEnsureValue = A$1(() => {
	    if (valueRef.current === Unset$1 && getInitialValue != undefined) {
	      try {
	        var _onChange;

	        const initialValue = getInitialValue();
	        valueRef.current = initialValue;
	        cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined)) !== null && _onChange !== void 0 ? _onChange : undefined;
	      } catch (ex) {// Exceptions are intentional to allow bailout (without exposing the Unset symbol)
	      }
	    }
	  }, [
	    /* getInitialValue and onChange intentionally omitted */
	  ]);
	  const getValue = A$1(() => {
	    if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component."); // The first time we call getValue, if we haven't been given a value yet,
	    // (and we were given an initial value to use)
	    // return the initial value instead of nothing.

	    if (valueRef.current === Unset$1) tryEnsureValue();
	    return valueRef.current === Unset$1 ? undefined : valueRef.current;
	  }, []);
	  d(() => {
	    // Make sure we've run our effect at least once on mount.
	    // (If we have an initial value, of course)
	    tryEnsureValue();
	  }, []); // The actual code the user calls to (possibly) run a new effect.

	  const setValue = A$1(arg => {
	    const prevDep = valueRef.current === Unset$1 ? undefined : getValue();
	    const dep = arg instanceof Function ? arg(prevDep) : arg;

	    if (dep !== valueRef.current) {
	      var _onChange2;

	      // Indicate to the user that they shouldn't call getValue during onChange
	      warningRef.current = true; // Call any registerd cleanup function

	      onShouldCleanUp();
	      cleanupCallbackRef.current = (_onChange2 = onChange === null || onChange === void 0 ? void 0 : onChange(dep, prevDep)) !== null && _onChange2 !== void 0 ? _onChange2 : undefined;
	      valueRef.current = dep; // Allow the user to normally call getValue again

	      warningRef.current = false;
	    }
	  }, []);
	  return [getValue, setValue];
	}
	const Unset$1 = Symbol();

	function useMergedChildren(lhsProps, rhsProps) {
	  const lhs = lhsProps === null || lhsProps === void 0 ? void 0 : lhsProps.children;
	  const rhs = rhsProps === null || rhsProps === void 0 ? void 0 : rhsProps.children;

	  if (lhs == null && rhs == null) {
	    return undefined;
	  } else if (lhs == null) {
	    return rhs;
	  } else if (rhs == null) {
	    return lhs;
	  } else {
	    let ret = v$1(d$1, {}, lhs, rhs);
	    return ret;
	  }
	}

	function toVal(mix) {
	  var k,
	      y,
	      str = '';

	  if (typeof mix === 'string' || typeof mix === 'number') {
	    str += mix;
	  } else if (typeof mix === 'object') {
	    if (Array.isArray(mix)) {
	      for (k = 0; k < mix.length; k++) {
	        if (mix[k]) {
	          if (y = toVal(mix[k])) {
	            str && (str += ' ');
	            str += y;
	          }
	        }
	      }
	    } else {
	      for (k in mix) {
	        if (mix[k]) {
	          str && (str += ' ');
	          str += k;
	        }
	      }
	    }
	  }

	  return str;
	}

	function clsx () {
	  var i = 0,
	      tmp,
	      x,
	      str = '';

	  while (i < arguments.length) {
	    if (tmp = arguments[i++]) {
	      if (x = toVal(tmp)) {
	        str && (str += ' ');
	        str += x;
	      }
	    }
	  }

	  return str;
	}

	/**
	 * Given two sets of props, merges their `class` and `className` properties.
	 * Duplicate classes are removed (order doesn't matter anyway).
	 *
	 * @param lhs Classes of the first component
	 * @param rhs Classes of the second component
	 * @returns A string representing all combined classes from both arguments.
	 */

	function useMergedClasses(lhs, rhs) {
	  // Note: For the sake of forward compatibility, this function is labelled as
	  // a hook, but as it uses no other hooks it technically isn't one.
	  return mergeClasses(lhs, rhs);
	}

	function mergeClasses(lhs, rhs) {
	  const lhsClass = lhs === null || lhs === void 0 ? void 0 : lhs.class;
	  const lhsClassName = lhs === null || lhs === void 0 ? void 0 : lhs.className;
	  const rhsClass = rhs === null || rhs === void 0 ? void 0 : rhs.class;
	  const rhsClassName = rhs === null || rhs === void 0 ? void 0 : rhs.className;

	  if (lhsClass || rhsClass || lhsClassName || rhsClassName) {
	    let lhsClasses = clsx(lhsClass, lhsClassName).split(" ");
	    let rhsClasses = clsx(rhsClass, rhsClassName).split(" ");
	    let allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)]);
	    return Array.from(allClasses).join(" ");
	  } else {
	    return undefined;
	  }
	}

	function processRef(instance, ref) {
	  if (typeof ref === "function") {
	    ref(instance);
	  } else if (ref != null) {
	    ref.current = instance;
	  } else {
	    debugger; // Intentional

	    console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
	  }
	}
	/**
	 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
	 * @param lhs
	 * @param rhs
	 * @returns
	 */


	function useMergedRefs() {
	  return function (lhsProps, rhsProps) {
	    const lhs = lhsProps === null || lhsProps === void 0 ? void 0 : lhsProps.ref;
	    const rhs = rhsProps === null || rhsProps === void 0 ? void 0 : rhsProps.ref;
	    let combined = A$1(current => {
	      processRef(current, lhs);
	      processRef(current, rhs);
	    }, [lhs, rhs]);

	    if (lhs == null && rhs == null) {
	      return undefined;
	    } else if (lhs == null) {
	      return rhs;
	    } else if (rhs == null) {
	      return lhs;
	    } else {
	      return combined;
	    }
	  };
	}
	/*
	function typetest<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {

	    const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	    function acceptsRef(ref: Ref<any>) { }
	    function acceptsOptionalRef(ref: Ref<any> | undefined) { }

	    const c = [
	        useMergedRefs<HTMLInputElement>()(undefined, undefined),
	        useMergedRefs<HTMLInputElement>()({}, undefined),
	        useMergedRefs<HTMLInputElement>()(props, undefined),
	        useMergedRefs<HTMLInputElement>()(undefined, props),
	        useMergedRefs<HTMLInputElement>()(props, props),
	        useMergedRefs<HTMLInputElement>()({ ref }, props),
	        useMergedRefs<HTMLInputElement>()({ ref }, { ref: undefined }),
	        useMergedRefs<HTMLInputElement>()({ ref: undefined }, { ref }),
	        useMergedRefs<HTMLInputElement>()({ ref }, { ref }),
	    ] as const;

	    /// @ts-expect-error
	    acceptsRef(c[0]);
	    /// @ts-expect-error
	    acceptsRef(c[1]);

	    acceptsOptionalRef(c[2]);
	    acceptsOptionalRef(c[3]);
	    acceptsOptionalRef(c[4]);

	    /// @ts-expect-error TODO
	    acceptsRef(c[5]);
	    acceptsRef(c[6]);
	    acceptsRef(c[7]);
	    acceptsRef(c[8]);
	}
	*/

	function styleStringToObject(style) {
	  // TODO: This sucks D:
	  return Object.fromEntries(style.split(";").map(statement => statement.split(":")));
	}
	/**
	 * Merges two style objects, returning the result.
	 *
	 * @param style The user-given style prop for this component
	 * @param obj The CSS properties you want added to the user-given style
	 * @returns A CSS object containing the properties of both objects.
	 */


	function useMergedStyles(lhs, rhs) {
	  var _lhs$style, _rhs$style2;

	  // Easy case, when there are no styles to merge return nothing.
	  if (!(lhs !== null && lhs !== void 0 && lhs.style) && !(rhs !== null && rhs !== void 0 && rhs.style)) return undefined;

	  if (typeof lhs != typeof rhs) {
	    // Easy cases, when one is null and the other isn't.
	    if (lhs !== null && lhs !== void 0 && lhs.style && !(rhs !== null && rhs !== void 0 && rhs.style)) return lhs.style;
	    if (!(lhs !== null && lhs !== void 0 && lhs.style) && rhs !== null && rhs !== void 0 && rhs.style) return rhs.style; // They're both non-null but different types.
	    // Convert the string type to an object bag type and run it again.

	    if (lhs !== null && lhs !== void 0 && lhs.style && rhs !== null && rhs !== void 0 && rhs.style) {
	      // (useMergedStyles isn't a true hook -- this isn't a violation)
	      if (typeof (lhs === null || lhs === void 0 ? void 0 : lhs.style) == "string") return useMergedStyles({
	        style: styleStringToObject(lhs === null || lhs === void 0 ? void 0 : lhs.style)
	      }, rhs);
	      if (typeof (rhs === null || rhs === void 0 ? void 0 : rhs.style) == "string") return useMergedStyles(lhs, {
	        style: styleStringToObject(rhs === null || rhs === void 0 ? void 0 : rhs.style)
	      });
	    } // Logic???


	    return undefined;
	  } // They're both strings, just concatenate them.


	  if (typeof (lhs === null || lhs === void 0 ? void 0 : lhs.style) == "string") {
	    var _rhs$style;

	    return `${lhs.style};${(_rhs$style = rhs === null || rhs === void 0 ? void 0 : rhs.style) !== null && _rhs$style !== void 0 ? _rhs$style : ""}`;
	  } // They're both objects, just merge them.


	  return { ...((_lhs$style = lhs === null || lhs === void 0 ? void 0 : lhs.style) !== null && _lhs$style !== void 0 ? _lhs$style : {}),
	    ...((_rhs$style2 = rhs === null || rhs === void 0 ? void 0 : rhs.style) !== null && _rhs$style2 !== void 0 ? _rhs$style2 : {})
	  };
	}

	let log = str => {
	  debugger;
	  console.warn(`Trying to merge two props with the same name: ${str}`);
	  /* Intentional */
	};
	/**
	 * Given two sets of props, merges them and returns the result.
	 *
	 * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
	 * @param lhs2
	 * @param rhs2
	 * @returns
	 */

	function useMergedProps() {
	  return function (lhs2, rhs2) {
	    // First, put in all the properties that are easy to reason about
	    // and all lhs props. We're going to merge in rhs just after.
	    const {
	      children: lhsChildren,
	      class: lhsClass,
	      className: lhsClassName,
	      style: lhsStyle,
	      ref: lhsRef,
	      ...lhs
	    } = lhs2;
	    const {
	      children: rhsChildren,
	      class: rhsClass,
	      className: rhsClassName,
	      style: rhsStyle,
	      ref: rhsRef,
	      ...rhs
	    } = rhs2;
	    let ret = { ...lhs,
	      ref: useMergedRefs()(lhs2, rhs2),
	      style: useMergedStyles(lhs2, rhs2),
	      className: useMergedClasses(lhs2, rhs2),
	      children: useMergedChildren(lhs2, rhs2)
	    };
	    if (ret.ref === undefined) delete ret.ref;
	    if (ret.style === undefined) delete ret.style;
	    if (ret.className === undefined) delete ret.className;
	    if (ret.children === undefined) delete ret.children; // Now, do *everything* else
	    // Merge every remaining existing entry in lhs with what we've already put in ret.
	    //const lhsEntries = Object.entries(lhs) as [keyof T, T[keyof T]][];

	    const rhsEntries = Object.entries(rhs);

	    for (const [rhsKey, rhsValue] of rhsEntries) {
	      const lhsValue = lhs[rhsKey];

	      if (typeof lhsValue === "function" || typeof rhsValue === "function") {
	        // They're both functions that can be merged (or one's a function and the other's null).
	        // Not an *easy* case, but a well-defined one.
	        const merged = mergeFunctions(lhsValue, rhsValue);
	        ret[rhsKey] = merged;
	      } else {
	        // Uh...we're here because one of them's null, right?
	        if (lhsValue == null && rhsValue == null) {
	          if (rhsValue === null && lhsValue === undefined) ret[rhsKey] = rhsValue;else ret[rhsKey] = lhsValue;
	        }

	        if (lhsValue == null) ret[rhsKey] = rhsValue;else if (rhsValue == null) ret[rhsKey] = lhsValue;else if (rhsValue == lhsValue) ; else {
	          var _log;

	          // Ugh.
	          // No good strategies here, just log it if requested
	          (_log = log) === null || _log === void 0 ? void 0 : _log(`Could not merge incompatible prop "${rhsKey}" (type: ${typeof rhsValue}, values: [${lhsValue}, ${rhsValue}])`);
	          ret[rhsKey] = rhsValue;
	        }
	      }
	    }

	    return ret;
	  };
	}

	function mergeFunctions(lhs, rhs) {
	  if (!lhs) return rhs;
	  if (!rhs) return lhs;
	  return function () {
	    let lv = lhs(...arguments);
	    let rv = rhs(...arguments);
	    if (lv instanceof Promise || rv instanceof Promise) return Promise.all([lv, rv]);
	  };
	}
	/*
	function test<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {

	    const id0: GenericGet<{}, "id", string> = "";
	    const id3: GenericGet<{ id: undefined }, "id", string> = undefined;
	    const id4: GenericGet<{ id: undefined }, "id", string> = undefined;
	    const id5: GenericGet<{ id: undefined }, "id", string> = undefined;
	    const id6: GenericGet<{ id: undefined }, "id", string> = undefined;
	    //const id2: ZipSingle<string | undefined, string | undefined> = undefined;
	    const id1: ZipObject<{ id: undefined }, { id: string }> = { id: undefined };

	    type M1 = GenericGet<P, "style", string>;
	    type M2 = GenericGet<{}, "style", string>;
	    const m1: M1 = "";
	    const m2: M1 = undefined;
	    /// @ts-expect-error    Because number isn't assignable to string
	    const m3: M1 = 0;

	    const m4: M2 = "";
	    const m5: M2 = undefined;
	    /// @ts-expect-error    Because number isn't assignable to string
	    const m6: M2 = 0;

	    const p1: MergedProps<HTMLInputElement, {}, { id: string }> = useMergedProps<HTMLInputElement>()({}, { id: "string" });
	    const p2: MergedProps<HTMLInputElement, { id: undefined }, { id: string }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: "string" });
	    const p3: MergedProps<HTMLInputElement, { id: undefined }, { id: undefined }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: undefined });
	    const p4: MergedProps<HTMLInputElement, {}, {}> = useMergedProps<HTMLInputElement>()({}, {});
	    const p5 = useMergedProps<HTMLInputElement>()(props, {});
	    const p6 = useMergedProps<HTMLInputElement>()(props, { id: undefined });
	    const p7 = useMergedProps<HTMLInputElement>()(props, { id: "string" });


	    p1.id?.concat("");
	    p2.id?.concat("");
	    /// @ts-expect-error    id can't be anything but undefined
	    p3.id?.concat("");
	    /// @ts-expect-error    id can't be anything but undefined
	    p4.id?.concat("");


	    p5.id?.concat("");
	    p6.id?.concat("");
	    p7.id?.concat("");

	    /// @ts-expect-error    id must contain undefined
	    p5.id.concat("");
	    /// @ts-expect-error    id must contain undefined
	    p6.id.concat("");
	    /// @ts-expect-error    id must contain undefined
	    p7.id.concat("");


	    if (p5.allowFullScreen === undefined) {}
	    else if (p5.allowFullScreen === false) {}
	    else if (p5.allowFullScreen === true) {}
	    else {
	        acceptsNever(p5.allowFullScreen);
	    }


	    if (p6.allowFullScreen === undefined) {}
	    else if (p6.allowFullScreen === false) {}
	    else if (p6.allowFullScreen === true) {}
	    else {
	        acceptsNever(p6.allowFullScreen);
	    }


	    if (p7.allowFullScreen === undefined) {}
	    else if (p7.allowFullScreen === false) {}
	    else if (p7.allowFullScreen === true) {}
	    else {
	        acceptsNever(p7.allowFullScreen);
	    }


	    // Make sure it works recursively
	    const r1a = useMergedProps<HTMLInputElement>()({}, p1);
	    const r1b = useMergedProps<HTMLInputElement>()(props, p1);
	    const r2a = useMergedProps<HTMLInputElement>()({}, p2);
	    const r2b = useMergedProps<HTMLInputElement>()(props, p2);
	    const r3a = useMergedProps<HTMLInputElement>()({}, p3);
	    const r3b = useMergedProps<HTMLInputElement>()(props, p3);
	    const r4a = useMergedProps<HTMLInputElement>()({}, p4);
	    const r4b = useMergedProps<HTMLInputElement>()(props, p4);
	    const r5a = useMergedProps<HTMLInputElement>()({}, p5);
	    const r5b = useMergedProps<HTMLInputElement>()(props, p5);
	    const r6a = useMergedProps<HTMLInputElement>()({}, p6);
	    const r6b = useMergedProps<HTMLInputElement>()(props, p6);
	    const r7a = useMergedProps<HTMLInputElement>()({}, p7);
	    const r7b = useMergedProps<HTMLInputElement>()(props, p7);


	    r1a.id?.concat("");
	    r1b.id?.concat("");
	    r2a.id?.concat("");
	    r2b.id?.concat("");
	    // @ts-expect-error    id can't be anything but undefined
	    r3a.id?.concat("");
	    r3b.id?.concat("");
	    /// @ts-expect-error    id can't be anything but undefined
	    r4a.id?.concat("");
	    r4b.id?.concat("");


	    r5a.id?.concat("");
	    r5b.id?.concat("");
	    r6a.id?.concat("");
	    r6b.id?.concat("");
	    r7a.id?.concat("");
	    r7b.id?.concat("");

	    /// @ts-expect-error    id must contain undefined
	    r5a.id.concat("");
	    /// @ts-expect-error    id must contain undefined
	    r5b.id.concat("");
	    /// @ts-expect-error    id must contain undefined
	    r6a.id.concat("");
	    /// @ts-expect-error    id must contain undefined
	    r6b.id.concat("");
	    /// @ts-expect-error    id must contain undefined
	    r7a.id.concat("");
	    /// @ts-expect-error    id must contain undefined
	    r7b.id.concat("");


	    if (r5a.allowFullScreen === undefined) {}
	    else if (r5a.allowFullScreen === false) {}
	    else if (r5a.allowFullScreen === true) {}
	    else {
	        acceptsNever(r5a.allowFullScreen);
	    }


	    if (r5b.allowFullScreen === undefined) {}
	    else if (r5b.allowFullScreen === false) {}
	    else if (r5b.allowFullScreen === true) {}
	    else {
	        acceptsNever(r5b.allowFullScreen);
	    }


	    if (r6a.allowFullScreen === undefined) {}
	    else if (r6a.allowFullScreen === false) {}
	    else if (r6a.allowFullScreen === true) {}
	    else {
	        acceptsNever(r6a.allowFullScreen);
	    }


	    if (r6b.allowFullScreen === undefined) {}
	    else if (r6b.allowFullScreen === false) {}
	    else if (r6b.allowFullScreen === true) {}
	    else {
	        acceptsNever(r6b.allowFullScreen);
	    }


	    if (r7a.allowFullScreen === undefined) {}
	    else if (r7a.allowFullScreen === false) {}
	    else if (r7a.allowFullScreen === true) {}
	    else {
	        acceptsNever(r7a.allowFullScreen);
	    }


	    if (r7b.allowFullScreen === undefined) {}
	    else if (r7b.allowFullScreen === false) {}
	    else if (r7b.allowFullScreen === true) {}
	    else {
	        acceptsNever(r7b.allowFullScreen);
	    }

	}
	function acceptsNever(n: never) {}
	*/

	function returnNull$1() {
	  return null;
	}
	/**
	 * Allows accessing the element a ref references as soon as it does so.
	 * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement,
	 * adding a RefCallback and merging it with any existing ref that existed on the props.
	 *
	 * Don't forget to provide the Element as the type argument!
	 *
	 * @returns The element, and the sub-hook that makes it retrievable.
	 */


	function useRefElement(args) {
	  const onElementChange = args === null || args === void 0 ? void 0 : args.onElementChange; // Let us store the actual (reference to) the element we capture

	  const [getElement, setElement] = usePassiveState(onElementChange, returnNull$1); // Create a RefCallback that's fired when mounted 
	  // and that notifies us of our element when we have it

	  const myRef = A$1(e => {
	    if (e) setElement(() => e);
	  }, []);
	  const useRefElementProps = A$1(props => useMergedProps()({
	    ref: myRef
	  }, props), []); // Return both the element and the hook that modifies 
	  // the props and allows us to actually find the element

	  return {
	    useRefElementProps,
	    getElement
	  };
	}

	function returnNull() {
	  return null;
	}

	function useElementSize(_ref) {
	  let {
	    getObserveBox,
	    onSizeChange
	  } = _ref;
	  useEnsureStability(getObserveBox, onSizeChange);
	  const [getSize, setSize] = usePassiveState(onSizeChange, returnNull);
	  const currentObserveBox = h(undefined);
	  const needANewObserver = A$1((element, observeBox) => {
	    if (element) {
	      const document = element.ownerDocument;
	      const window = document.defaultView;

	      const handleUpdate = () => {
	        if (element.isConnected) {
	          const {
	            clientWidth,
	            scrollWidth,
	            offsetWidth,
	            clientHeight,
	            scrollHeight,
	            offsetHeight,
	            clientLeft,
	            scrollLeft,
	            offsetLeft,
	            clientTop,
	            scrollTop,
	            offsetTop
	          } = element;
	          setSize({
	            clientWidth,
	            scrollWidth,
	            offsetWidth,
	            clientHeight,
	            scrollHeight,
	            offsetHeight,
	            clientLeft,
	            scrollLeft,
	            offsetLeft,
	            clientTop,
	            scrollTop,
	            offsetTop
	          });
	        }
	      };

	      if (window && "ResizeObserver" in window) {
	        const observer = new ResizeObserver(entries => {
	          handleUpdate();
	        });
	        observer.observe(element, {
	          box: observeBox
	        });
	        return () => observer.disconnect();
	      } else {
	        document.addEventListener("resize", handleUpdate, {
	          passive: true
	        });
	        return () => document.removeEventListener("resize", handleUpdate);
	      }
	    }
	  }, []);
	  const {
	    getElement,
	    useRefElementProps
	  } = useRefElement({
	    onElementChange: A$1(e => needANewObserver(e, getObserveBox === null || getObserveBox === void 0 ? void 0 : getObserveBox()), [])
	  });
	  y(() => {
	    if (getObserveBox) {
	      if (currentObserveBox.current !== getObserveBox()) needANewObserver(getElement(), getObserveBox());
	    }
	  });
	  return {
	    getElement,
	    getSize,
	    useElementSizeProps: useRefElementProps
	  };
	}

	function capitalize(str) {
	  return str[0].toUpperCase() + str.substr(1);
	}
	/**
	 * Inspects the element's style and determines the logical direction that text flows.
	 *
	 * Certain CSS properties, like `block-size`, respect the current writing mode and text direction.
	 * But `transform`, `clip`, etc. don't.
	 *
	 * This is provided so that CSS properties can consistently use those logical properties.
	 *
	 * See https://drafts.csswg.org/css-writing-modes/#logical-to-physical
	 *
	 * @returns An object containing the following functions:
	 * * `getLogicalDirection`: retrieves a `LogicalDirectionInfo` representing the current state of the element. (Function is constant between renders)
	 * * `convertElementSize`: When used in conjunction with `useElementSize`, allows you to retrieve the logical size of an element instead of the physical size.
	 * * `convertToLogicalOrientation`: Based on the current direction, converts "horizontal" or "vertical" to "inline" or "block".
	 * * `convertToPhysicalOrientation`:  Based on the current direction, converts "inline" or "block" to "horizontal" or "vertical".
	 */


	function useLogicalDirection(_ref) {
	  let {
	    onLogicalDirectionChange
	  } = _ref;
	  useEnsureStability(onLogicalDirectionChange);
	  const [getComputedStyles, setComputedStyles] = usePassiveState(null);
	  const {
	    getElement,
	    useRefElementProps
	  } = useRefElement({
	    onElementChange: A$1(element => {
	      if (element) {
	        setComputedStyles(window.getComputedStyle(element));
	      }
	    }, [])
	  }); // TODO: There's no way to refresh which writing mode we have once mounted.
	  //   A. There's no way to watch for CSS style changes
	  //   B. Calling getComputedStyle after every render for every element gets expensive fast and
	  //   C. Is not necessary for most use cases that will never switch writing-mode within a single component
	  //      (Those that do will need to mount and unmount the component that uses it)
	  //
	  // As a solution, here's a cheap workaround that checks when the element's size has changed,
	  // and if so, tests if the writing mode has changed too.
	  //
	  // This will work for at least some number of cases, but a better solution is still needed.

	  const {
	    useElementSizeProps
	  } = useElementSize({
	    onSizeChange: A$1(_ => onLogicalDirectionChange === null || onLogicalDirectionChange === void 0 ? void 0 : onLogicalDirectionChange(getLogicalDirectionInfo()), [])
	  });
	  const getLogicalDirectionInfo = A$1(() => {
	    const computedStyles = getComputedStyles();

	    if (computedStyles) {
	      let w = computedStyles.writingMode;
	      let d = computedStyles.direction;
	      let t = computedStyles.textOrientation;
	      if (t == "upright") d = "ltr";
	      return { ...WritingModes[w || "horizontal-tb"][d || "ltr"]
	      };
	    }

	    return null;
	  }, []); //const [getLogicalDirectionInfo, setLogicalDirectionInfo] = usePassiveState<LogicalDirectionInfo>(onLogicalDirectionChange);

	  const convertToLogicalOrientation = A$1((elementOrientation, direction) => {
	    var _direction, _direction2;

	    (_direction = direction) !== null && _direction !== void 0 ? _direction : direction = getLogicalDirectionInfo();
	    if (((_direction2 = direction) === null || _direction2 === void 0 ? void 0 : _direction2.inlineOrientation) === elementOrientation) return "inline";
	    return "block";
	  }, []);
	  const convertToPhysicalSide = A$1((side, direction) => {
	    var _direction3, _direction$blockDirec, _direction4, _direction$blockDirec2, _direction5, _direction$inlineDire, _direction6, _direction$inlineDire2, _direction7;

	    (_direction3 = direction) !== null && _direction3 !== void 0 ? _direction3 : direction = getLogicalDirectionInfo();

	    switch (side) {
	      case "block-start":
	        return M$1[((_direction$blockDirec = (_direction4 = direction) === null || _direction4 === void 0 ? void 0 : _direction4.blockDirection) !== null && _direction$blockDirec !== void 0 ? _direction$blockDirec : "ttb")[0]];

	      case "block-end":
	        return M$1[((_direction$blockDirec2 = (_direction5 = direction) === null || _direction5 === void 0 ? void 0 : _direction5.blockDirection) !== null && _direction$blockDirec2 !== void 0 ? _direction$blockDirec2 : "ttb")[2]];

	      case "inline-start":
	        return M$1[((_direction$inlineDire = (_direction6 = direction) === null || _direction6 === void 0 ? void 0 : _direction6.inlineDirection) !== null && _direction$inlineDire !== void 0 ? _direction$inlineDire : "ltr")[0]];

	      case "inline-end":
	        return M$1[((_direction$inlineDire2 = (_direction7 = direction) === null || _direction7 === void 0 ? void 0 : _direction7.inlineDirection) !== null && _direction$inlineDire2 !== void 0 ? _direction$inlineDire2 : "ltr")[2]];
	    }
	  }, []);
	  const convertToLogicalSide = A$1((side, direction) => {
	    var _direction8, _direction9, _direction10;

	    (_direction8 = direction) !== null && _direction8 !== void 0 ? _direction8 : direction = getLogicalDirectionInfo();

	    if (((_direction9 = direction) === null || _direction9 === void 0 ? void 0 : _direction9.inlineOrientation) === "vertical") {
	      switch (side) {
	        case "top":
	          return direction.inlineDirection === "ttb" ? "inline-start" : "inline-end";

	        case "bottom":
	          return direction.inlineDirection === "btt" ? "inline-start" : "inline-end";

	        case "left":
	          return direction.blockDirection === "ltr" ? "block-start" : "block-end";

	        case "right":
	          return direction.blockDirection === "rtl" ? "block-start" : "block-end";
	      }
	    } else if (((_direction10 = direction) === null || _direction10 === void 0 ? void 0 : _direction10.inlineOrientation) === "horizontal") {
	      switch (side) {
	        case "top":
	          return direction.blockDirection === "ttb" ? "block-start" : "block-end";

	        case "bottom":
	          return direction.blockDirection === "btt" ? "block-start" : "block-end";

	        case "left":
	          return direction.inlineDirection === "ltr" ? "inline-start" : "inline-end";

	        case "right":
	          return direction.inlineDirection === "rtl" ? "inline-start" : "inline-end";
	      }
	    }

	    debugger;
	    console.assert(false);
	    return "inline-start";
	  }, []);
	  const convertToPhysicalOrientation = A$1((elementOrientation, direction) => {
	    var _direction11;

	    (_direction11 = direction) !== null && _direction11 !== void 0 ? _direction11 : direction = getLogicalDirectionInfo();

	    if (elementOrientation == "inline") {
	      var _direction12;

	      if (((_direction12 = direction) === null || _direction12 === void 0 ? void 0 : _direction12.inlineOrientation) == "horizontal") return "horizontal";
	      return "vertical";
	    } else {
	      var _direction13;

	      if (((_direction13 = direction) === null || _direction13 === void 0 ? void 0 : _direction13.blockOrientation) == "vertical") return "vertical";
	      return "horizontal";
	    }
	  }, []);
	  const convertElementSize = A$1((elementSize, direction) => {
	    var _direction14;

	    (_direction14 = direction) !== null && _direction14 !== void 0 ? _direction14 : direction = getLogicalDirectionInfo();

	    if (direction) {
	      const {
	        inlineSize,
	        blockSize,
	        inlineDirection,
	        blockDirection
	      } = direction; // Size is relatively simple

	      let clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
	      let clientBlockSize = elementSize[`client${capitalize(blockSize)}`];
	      let offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
	      let offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];
	      let scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
	      let scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`]; // Position requires us to sometimes use one property (like `left`)
	      // or sometimes two (like `left` + `width`)

	      function getPhysicalLeftTop(dir) {
	        if (dir === "ltr" || dir == "rtl") return "left";
	        return "top";
	      }

	      function getPhysicalRightBottom(dir) {
	        if (dir === "rtl") return "width";
	        if (dir === "btt") return "height";
	        return null;
	      }

	      const f1 = getPhysicalLeftTop(inlineDirection);
	      const f2 = getPhysicalRightBottom(inlineDirection);
	      const f3 = getPhysicalLeftTop(blockDirection);
	      const f4 = getPhysicalRightBottom(blockDirection);
	      let clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`client${capitalize(f2)}`]);
	      let scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`scroll${capitalize(f2)}`]);
	      let offsetInlineInset = elementSize[`offset${capitalize(f1)}`] == undefined ? undefined : elementSize[`offset${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]);
	      let clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
	      let scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
	      let offsetBlockInset = elementSize[`offset${capitalize(f3)}`] == undefined ? undefined : elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]);
	      return {
	        clientInlineSize,
	        scrollInlineSize,
	        offsetInlineSize,
	        clientBlockSize,
	        scrollBlockSize,
	        offsetBlockSize,
	        clientInlineInset,
	        scrollInlineInset,
	        offsetInlineInset,
	        clientBlockInset,
	        scrollBlockInset,
	        offsetBlockInset
	      };
	    }

	    return null;
	  }, []);
	  return {
	    useLogicalDirectionProps: A$1(props => useRefElementProps(useElementSizeProps(props)), []),
	    getElement,
	    getLogicalDirectionInfo,
	    convertToLogicalSize: convertElementSize,
	    convertToLogicalOrientation,
	    convertToPhysicalOrientation,
	    convertToLogicalSide,
	    convertToPhysicalSide
	  };
	} // Helper for extracting info from "ltr", "ttb", etc.

	const M$1 = {
	  t: "top",
	  b: "bottom",
	  l: "left",
	  r: "right"
	};
	const HorizontalTbLtr = {
	  inlineDirection: "ltr",
	  blockDirection: "ttb",
	  inlineOrientation: "horizontal",
	  blockOrientation: "vertical",
	  inlineSize: "width",
	  blockSize: "height",
	  leftRightDirection: "ltr",
	  overUnderDirection: "ttb"
	};
	const HorizontalTbRtl = { ...HorizontalTbLtr,
	  inlineDirection: "rtl"
	};
	const VerticalRlLtr = {
	  inlineDirection: "ttb",
	  blockDirection: "rtl",
	  inlineOrientation: "vertical",
	  blockOrientation: "horizontal",
	  inlineSize: "height",
	  blockSize: "width",
	  leftRightDirection: "ttb",
	  overUnderDirection: "rtl"
	};
	const VerticalRlRtl = { ...VerticalRlLtr,
	  inlineDirection: "btt"
	};
	const SidewaysRlLtr = { ...VerticalRlLtr
	};
	const SidewaysRlRtl = { ...VerticalRlRtl
	};
	const VerticalLrLtr = { ...VerticalRlLtr,
	  blockDirection: "ltr"
	};
	const VerticalLrRtl = { ...VerticalRlRtl,
	  blockDirection: "ltr"
	};
	const SidewaysLtLtr = { ...VerticalLrLtr,
	  inlineDirection: "btt",
	  leftRightDirection: "btt",
	  overUnderDirection: "ltr"
	};
	const SidewaysLtRtl = { ...SidewaysLtLtr,
	  inlineDirection: "ttb"
	};
	const HorizontalTb = {
	  ltr: HorizontalTbLtr,
	  rtl: HorizontalTbRtl
	};
	const VerticalRl = {
	  ltr: VerticalRlLtr,
	  rtl: VerticalRlRtl
	};
	const VerticalLr = {
	  ltr: VerticalLrLtr,
	  rtl: VerticalLrRtl
	};
	const SidewaysRl = {
	  ltr: SidewaysRlLtr,
	  rtl: SidewaysRlRtl
	};
	const SidewaysLr = {
	  ltr: SidewaysLtLtr,
	  rtl: SidewaysLtRtl
	};
	const WritingModes = {
	  "horizontal-tb": HorizontalTb,
	  "vertical-lr": VerticalLr,
	  "vertical-rl": VerticalRl,
	  "sideways-lr": SidewaysLr,
	  "sideways-rl": SidewaysRl
	};

	/**
	 * Slightly enhanced version of `useState` that includes a getter that remains constant
	 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
	 *
	 * @param initialState
	 * @returns
	 */

	function useState(initialState) {
	  // We keep both, but overrride the `setState` functionality
	  const [state, setStateP] = m(initialState);
	  const ref = h(state); // Hijack the normal setter function 
	  // to also set our ref to the new value

	  const setState = A$1(value => {
	    if (typeof value === "function") {
	      let callback = value;
	      setStateP(prevValue => {
	        let nextValue = callback(prevValue);
	        ref.current = nextValue;
	        return nextValue;
	      });
	    } else {
	      ref.current = value;
	      setStateP(value);
	    }
	  }, []);

	  const getState = () => {
	    return ref.current;
	  };

	  console.assert(ref.current === state || typeof state === "number" && isNaN(state));
	  return [state, setState, getState];
	}

	const Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";

	function base64(value) {
	  return Table[value];
	}

	function random6Bits() {
	  return Math.floor(Math.random() * 0b1000000);
	}

	function random64Bits() {
	  return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()];
	}
	/**
	 * Returns a randomly-generated ID with an optional prefix.
	 * Note that if the prefix is *explicitly* set to "", then
	 * IDs that are not valid under HTML4 may be generated. Oh no.
	 */


	function generateRandomId(prefix) {
	  return `${prefix !== null && prefix !== void 0 ? prefix : "id-"}${random64Bits().map(n => base64(n)).join("")}`;
	}

	const previousInputs = new Map();
	const toRun = new Map();
	const commitName = "__c" in l$1 ? "__c" : "commit" in l$1 ? "commit" : "_commit" in l$1 ? "_commit" : "__c"; // TODO: Whether this goes in options.diffed or options._commit
	// is a post-suspense question.
	// Right now, using options._commit has the problem of running
	// *after* refs are applied, but we need to come before even that
	// so `ref={someStableFunction}` works.
	// 
	// Also it's private.

	const originalCommit = l$1[commitName];

	const newCommit = (vnode, commitQueue) => {
	  for (let [id, effectInfo] of toRun) {
	    const oldInputs = previousInputs.get(id);

	    if (argsChanged(oldInputs, effectInfo.inputs)) {
	      var _effectInfo$cleanup;

	      (_effectInfo$cleanup = effectInfo.cleanup) === null || _effectInfo$cleanup === void 0 ? void 0 : _effectInfo$cleanup.call(effectInfo);
	      effectInfo.cleanup = effectInfo.effect();
	      previousInputs.set(id, effectInfo.inputs);
	    }
	  }

	  toRun.clear();
	  originalCommit === null || originalCommit === void 0 ? void 0 : originalCommit(vnode, commitQueue);
	};

	l$1[commitName] = newCommit;
	/**
	 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
	 *
	 * Every render, we send the arguments to be evaluated after diffing has completed,
	 * which happens before.
	 *
	 * @param effect
	 * @param inputs
	 */

	function useBeforeLayoutEffect(effect, inputs) {
	  const [id] = m(() => generateRandomId());
	  toRun.set(id, {
	    effect,
	    inputs,
	    cleanup: null
	  });
	  y(() => {
	    return () => {
	      toRun.delete(id);
	      previousInputs.delete(id);
	    };
	  }, [id]);
	}

	function argsChanged(oldArgs, newArgs) {
	  return !!(!oldArgs || oldArgs.length !== (newArgs === null || newArgs === void 0 ? void 0 : newArgs.length) || newArgs !== null && newArgs !== void 0 && newArgs.some((arg, index) => arg !== oldArgs[index]));
	}

	const Unset = Symbol("unset");
	/**
	 * Given an input value, returns a constant getter function that can be used
	 * inside of `useEffect` and friends without including it in the dependency array.
	 *
	 * This uses `options.diffed` in order to run before everything, even
	 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
	 *
	 * @param value
	 * @returns
	 */

	function useStableGetter(value) {
	  const ref = h(Unset);
	  useBeforeLayoutEffect(() => {
	    ref.current = value;
	  }, [value]);
	  return A$1(() => {
	    if (ref.current === Unset) {
	      throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
	    }

	    return ref.current;
	  }, []);
	}

	/**
	 * Alternate useCallback() which always returns the same (wrapped) function reference
	 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
	 *
	 * Do not use during the render phase!  `useLayoutEffect` is fine though.
	 */

	function useStableCallback(fn) {
	  const currentCallbackGetter = useStableGetter(fn);
	  return A$1(function () {
	    return currentCallbackGetter()(...arguments);
	  }, []);
	}

	/**
	 * Wrap the native `useEffect` to add arguments
	 * that allow accessing the previous value as the first argument,
	 * as well as the changes that caused the hook to be called as the second argument.
	 *
	 * @param effect
	 * @param inputs
	 * @param impl You can choose whether to use `useEffect` or `useLayoutEffect` by
	 * passing one of them as this argument. By default, it's `useEffect`.
	 */

	function useEffect(effect, inputs) {
	  let impl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : y;
	  const prevInputs = h(undefined);

	  const effect2 = () => {
	    let changes = [];

	    if (inputs && prevInputs.current) {
	      for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
	        if (prevInputs.current[i] != inputs[i]) changes[i] = {
	          from: prevInputs.current[i],
	          to: inputs[i]
	        };
	      }
	    }

	    const ret = effect(prevInputs.current, changes);
	    prevInputs.current = inputs;
	    return ret;
	  };

	  impl(effect2, inputs);
	}

	/**
	 * Wrap the native `useLayoutEffect` to add arguments
	 * that allow accessing the previous value as the first argument,
	 * as well as the changes that caused the hook to be called as the second argument.
	 *
	 * @param effect
	 * @param inputs
	 */

	function useLayoutEffect(effect, inputs) {
	  return useEffect(effect, inputs, d);
	}

	/**
	 * Allows a parent component to access information about certain
	 * child components once they have rendered.
	 *
	 * This hook is slightly more complicated in that it returns both a
	 * prop-modifying hook, but also a hook that each child will need
	 * to use: `useManagedChild`.  It's stable across renders, so just
	 * toss it into a `Context` so the children can have access to it.
	 * This function registers the child with the parent and provides
	 * it with any requested information, but doesn't do anything else
	 * until it unmounts and retracts that information.
	 */

	function useChildManager() {
	  // This is blindly updated any time a child mounts or unmounts itself.
	  // Used to make sure that any time the array of managed children updates,
	  // we also re-render.
	  const [childUpdateIndex, setChildUpdateIndex] = useState(0);
	  const [totalChildrenMounted, setTotalChildrenMounted, getTotalChildrenMounted] = useState(0);
	  const [totalChildrenUnounted, setTotalChildrenUnounted, getTotalChildrenUnounted] = useState(0);
	  const childrenCurrentlyMounted = totalChildrenMounted - totalChildrenUnounted;
	  const managedChildren = h([]
	  /** TODO: Any problems caused by using an array when it should be an object? */
	  );
	  const mountedChildren = h([]);
	  const mountOrder = h(new Map());
	  const indicesByElement = h(new Map());
	  const deletedIndices = h(new Set()); // Used to keep track of indices that have "over-mounted" and by how much.
	  // We need this so that we don't erase saved information when a component
	  // "overmounts" over another which then, correctly, switches *itself* to something else.
	  // In general, this should only happen when components are swapping between indices.
	  // By the time they're done, this map should be all 0s again, at which point
	  // it's okay to actually run the unmount code.
	  // 
	  // TODO: throw a console.assert somewhere to make up for the lost 
	  // "are you sure you want to overwrite this child's index!" assertion.
	  // Namely, is this map all 0s when the parent element re-renders? 
	  // Probably not because of setChildUpdateIndex

	  const overmountCount = h(new Map());
	  const getMountIndex = A$1(index => {
	    return mountOrder.current.get(index);
	  }, []);
	  const useManagedChild = A$1(info => {
	    const {
	      getElement,
	      useRefElementProps
	    } = useRefElement({
	      onElementChange: A$1(element => {
	        if (element) {
	          indicesByElement.current.set(element, info.index);
	          deletedIndices.current.delete(info.index);

	          if (managedChildren.current[info.index] != undefined) {
	            var _overmountCount$curre;

	            overmountCount.current.set(info.index, ((_overmountCount$curre = overmountCount.current.get(info.index)) !== null && _overmountCount$curre !== void 0 ? _overmountCount$curre : 0) + 1);
	          }

	          setChildUpdateIndex(c => ++c);
	          managedChildren.current[info.index] = { ...info
	          };
	          return () => {
	            var _overmountCount$curre2;

	            setChildUpdateIndex(c => ++c);

	            if (((_overmountCount$curre2 = overmountCount.current.get(info.index)) !== null && _overmountCount$curre2 !== void 0 ? _overmountCount$curre2 : 0) > 0) {
	              var _overmountCount$curre3;

	              overmountCount.current.set(info.index, ((_overmountCount$curre3 = overmountCount.current.get(info.index)) !== null && _overmountCount$curre3 !== void 0 ? _overmountCount$curre3 : 0) - 1);
	            } else {
	              delete managedChildren.current[info.index];
	              deletedIndices.current.add(info.index);

	              if (typeof info.index === "number") {
	                while (managedChildren.current.length && managedChildren.current[managedChildren.current.length - 1] === undefined) managedChildren.current.length -= 1;
	              }

	              indicesByElement.current.delete(element);
	            }
	          };
	        }
	      }, [])
	    });
	    useLayoutEffect(() => {
	      let index = getTotalChildrenMounted();
	      mountOrder.current.set(info.index, index);
	      mountedChildren.current[index] = info;
	      setTotalChildrenMounted(t => ++t);
	      return () => {
	        mountOrder.current.delete(info.index);
	        mountedChildren.current[index] = null;
	        setTotalChildrenUnounted(t => ++t);
	      };
	    }, [info.index]); // Any time our child props change, make that information available generally.
	    // *Don't re-render*, otherwise we'd be stuck in an
	    // infinite loop every time an anonymous function is passed.
	    // It comes in from the props so the child was already updated by it --
	    // we don't need the parent to re-render every single child any time
	    // "onClick" updates or whatever.  The relevant child already knows,
	    // and that's what matters.

	    useLayoutEffect(() => {
	      if (managedChildren.current[info.index] != undefined) managedChildren.current[info.index] = { ...info
	      };
	    }, [...Object.entries(info).flat()]);
	    return {
	      getElement,
	      useManagedChildProps: useRefElementProps
	    };
	  }, []);
	  return {
	    useManagedChild,
	    childCount: childrenCurrentlyMounted,
	    managedChildren: managedChildren.current,
	    mountedChildren: mountedChildren.current,
	    indicesByElement: indicesByElement.current,
	    totalChildrenMounted,
	    totalChildrenUnounted,
	    getMountIndex,
	    deletedIndices: deletedIndices.current
	  };
	}

	D(null);

	/**
	 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
	 *
	 * Due to typing limitations, this function must be called like this:
	 *
	 * `useEventHandler(element, "input")<InputEvent>(e => {})`
	 *
	 * The type argument is optional, but narrows down the type from "a union of all events" to whatever you specify, and errors if it doesn't exist.
	 *
	 * There is a separate version that attaches event handlers to a set of props.
	 * It takes different event string types (onEvent vs onevent).
	 *
	 * @param target A *non-Preact* node to attach the event to.
	 * @returns
	 * *
	 */

	function useGlobalHandler(target, type, handler, options) {
	  // Note to self: The typing doesn't improve even if this is split up into a sub-function.
	  // No matter what, it seems impossible to get the handler's event object typed perfectly.
	  // It seems like it's guaranteed to always be a union of all available tupes.
	  // Again, no matter what combination of sub- or sub-sub-functions used.
	  let stableHandler = useStableCallback(handler !== null && handler !== void 0 ? handler : () => {});
	  if (handler == null) stableHandler = null;
	  y(() => {
	    if (stableHandler) {
	      target.addEventListener(type, stableHandler, options);
	      return () => target.removeEventListener(type, stableHandler, options);
	    }
	  }, [target, type, stableHandler]);
	}

	createCommonjsModule(function (module, exports) {
	  (function (global, factory) {
	    factory() ;
	  })(commonjsGlobal, function () {

	    var _createClass = function () {
	      function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	          var descriptor = props[i];
	          descriptor.enumerable = descriptor.enumerable || false;
	          descriptor.configurable = true;
	          if ("value" in descriptor) descriptor.writable = true;
	          Object.defineProperty(target, descriptor.key, descriptor);
	        }
	      }

	      return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);
	        if (staticProps) defineProperties(Constructor, staticProps);
	        return Constructor;
	      };
	    }();

	    function _classCallCheck(instance, Constructor) {
	      if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	      }
	    }
	    /**
	     * This work is licensed under the W3C Software and Document License
	     * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
	     */


	    (function () {
	      // Return early if we're not running inside of the browser.
	      if (typeof window === 'undefined') {
	        return;
	      } // Convenience function for converting NodeLists.

	      /** @type {typeof Array.prototype.slice} */


	      var slice = Array.prototype.slice;
	      /**
	       * IE has a non-standard name for "matches".
	       * @type {typeof Element.prototype.matches}
	       */

	      var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
	      /** @type {string} */

	      var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');
	      /**
	       * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
	       * attribute.
	       *
	       * Its main functions are:
	       *
	       * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
	       *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
	       *   each focusable node in the subtree with the singleton `InertManager` which manages all known
	       *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
	       *   instance exists for each focusable node which has at least one inert root as an ancestor.
	       *
	       * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
	       *   attribute is removed from the root node). This is handled in the destructor, which calls the
	       *   `deregister` method on `InertManager` for each managed inert node.
	       */


	      var InertRoot = function () {
	        /**
	         * @param {!Element} rootElement The Element at the root of the inert subtree.
	         * @param {!InertManager} inertManager The global singleton InertManager object.
	         */
	        function InertRoot(rootElement, inertManager) {
	          _classCallCheck(this, InertRoot);
	          /** @type {!InertManager} */


	          this._inertManager = inertManager;
	          /** @type {!Element} */

	          this._rootElement = rootElement;
	          /**
	           * @type {!Set<!InertNode>}
	           * All managed focusable nodes in this InertRoot's subtree.
	           */

	          this._managedNodes = new Set(); // Make the subtree hidden from assistive technology

	          if (this._rootElement.hasAttribute('aria-hidden')) {
	            /** @type {?string} */
	            this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
	          } else {
	            this._savedAriaHidden = null;
	          }

	          this._rootElement.setAttribute('aria-hidden', 'true'); // Make all focusable elements in the subtree unfocusable and add them to _managedNodes


	          this._makeSubtreeUnfocusable(this._rootElement); // Watch for:
	          // - any additions in the subtree: make them unfocusable too
	          // - any removals from the subtree: remove them from this inert root's managed nodes
	          // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
	          //   element, make that node a managed node.


	          this._observer = new MutationObserver(this._onMutation.bind(this));

	          this._observer.observe(this._rootElement, {
	            attributes: true,
	            childList: true,
	            subtree: true
	          });
	        }
	        /**
	         * Call this whenever this object is about to become obsolete.  This unwinds all of the state
	         * stored in this object and updates the state of all of the managed nodes.
	         */


	        _createClass(InertRoot, [{
	          key: 'destructor',
	          value: function destructor() {
	            this._observer.disconnect();

	            if (this._rootElement) {
	              if (this._savedAriaHidden !== null) {
	                this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
	              } else {
	                this._rootElement.removeAttribute('aria-hidden');
	              }
	            }

	            this._managedNodes.forEach(function (inertNode) {
	              this._unmanageNode(inertNode.node);
	            }, this); // Note we cast the nulls to the ANY type here because:
	            // 1) We want the class properties to be declared as non-null, or else we
	            //    need even more casts throughout this code. All bets are off if an
	            //    instance has been destroyed and a method is called.
	            // 2) We don't want to cast "this", because we want type-aware optimizations
	            //    to know which properties we're setting.


	            this._observer =
	            /** @type {?} */
	            null;
	            this._rootElement =
	            /** @type {?} */
	            null;
	            this._managedNodes =
	            /** @type {?} */
	            null;
	            this._inertManager =
	            /** @type {?} */
	            null;
	          }
	          /**
	           * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
	           */

	        }, {
	          key: '_makeSubtreeUnfocusable',

	          /**
	           * @param {!Node} startNode
	           */
	          value: function _makeSubtreeUnfocusable(startNode) {
	            var _this2 = this;

	            composedTreeWalk(startNode, function (node) {
	              return _this2._visitNode(node);
	            });
	            var activeElement = document.activeElement;

	            if (!document.body.contains(startNode)) {
	              // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
	              var node = startNode;
	              /** @type {!ShadowRoot|undefined} */

	              var root = undefined;

	              while (node) {
	                if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
	                  root =
	                  /** @type {!ShadowRoot} */
	                  node;
	                  break;
	                }

	                node = node.parentNode;
	              }

	              if (root) {
	                activeElement = root.activeElement;
	              }
	            }

	            if (startNode.contains(activeElement)) {
	              activeElement.blur(); // In IE11, if an element is already focused, and then set to tabindex=-1
	              // calling blur() will not actually move the focus.
	              // To work around this we call focus() on the body instead.

	              if (activeElement === document.activeElement) {
	                document.body.focus();
	              }
	            }
	          }
	          /**
	           * @param {!Node} node
	           */

	        }, {
	          key: '_visitNode',
	          value: function _visitNode(node) {
	            if (node.nodeType !== Node.ELEMENT_NODE) {
	              return;
	            }

	            var element =
	            /** @type {!Element} */
	            node; // If a descendant inert root becomes un-inert, its descendants will still be inert because of
	            // this inert root, so all of its managed nodes need to be adopted by this InertRoot.

	            if (element !== this._rootElement && element.hasAttribute('inert')) {
	              this._adoptInertRoot(element);
	            }

	            if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
	              this._manageNode(element);
	            }
	          }
	          /**
	           * Register the given node with this InertRoot and with InertManager.
	           * @param {!Node} node
	           */

	        }, {
	          key: '_manageNode',
	          value: function _manageNode(node) {
	            var inertNode = this._inertManager.register(node, this);

	            this._managedNodes.add(inertNode);
	          }
	          /**
	           * Unregister the given node with this InertRoot and with InertManager.
	           * @param {!Node} node
	           */

	        }, {
	          key: '_unmanageNode',
	          value: function _unmanageNode(node) {
	            var inertNode = this._inertManager.deregister(node, this);

	            if (inertNode) {
	              this._managedNodes['delete'](inertNode);
	            }
	          }
	          /**
	           * Unregister the entire subtree starting at `startNode`.
	           * @param {!Node} startNode
	           */

	        }, {
	          key: '_unmanageSubtree',
	          value: function _unmanageSubtree(startNode) {
	            var _this3 = this;

	            composedTreeWalk(startNode, function (node) {
	              return _this3._unmanageNode(node);
	            });
	          }
	          /**
	           * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
	           * @param {!Element} node
	           */

	        }, {
	          key: '_adoptInertRoot',
	          value: function _adoptInertRoot(node) {
	            var inertSubroot = this._inertManager.getInertRoot(node); // During initialisation this inert root may not have been registered yet,
	            // so register it now if need be.


	            if (!inertSubroot) {
	              this._inertManager.setInert(node, true);

	              inertSubroot = this._inertManager.getInertRoot(node);
	            }

	            inertSubroot.managedNodes.forEach(function (savedInertNode) {
	              this._manageNode(savedInertNode.node);
	            }, this);
	          }
	          /**
	           * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
	           * @param {!Array<!MutationRecord>} records
	           * @param {!MutationObserver} self
	           */

	        }, {
	          key: '_onMutation',
	          value: function _onMutation(records, self) {
	            records.forEach(function (record) {
	              var target =
	              /** @type {!Element} */
	              record.target;

	              if (record.type === 'childList') {
	                // Manage added nodes
	                slice.call(record.addedNodes).forEach(function (node) {
	                  this._makeSubtreeUnfocusable(node);
	                }, this); // Un-manage removed nodes

	                slice.call(record.removedNodes).forEach(function (node) {
	                  this._unmanageSubtree(node);
	                }, this);
	              } else if (record.type === 'attributes') {
	                if (record.attributeName === 'tabindex') {
	                  // Re-initialise inert node if tabindex changes
	                  this._manageNode(target);
	                } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
	                  // If a new inert root is added, adopt its managed nodes and make sure it knows about the
	                  // already managed nodes from this inert subroot.
	                  this._adoptInertRoot(target);

	                  var inertSubroot = this._inertManager.getInertRoot(target);

	                  this._managedNodes.forEach(function (managedNode) {
	                    if (target.contains(managedNode.node)) {
	                      inertSubroot._manageNode(managedNode.node);
	                    }
	                  });
	                }
	              }
	            }, this);
	          }
	        }, {
	          key: 'managedNodes',
	          get: function get() {
	            return new Set(this._managedNodes);
	          }
	          /** @return {boolean} */

	        }, {
	          key: 'hasSavedAriaHidden',
	          get: function get() {
	            return this._savedAriaHidden !== null;
	          }
	          /** @param {?string} ariaHidden */

	        }, {
	          key: 'savedAriaHidden',
	          set: function set(ariaHidden) {
	            this._savedAriaHidden = ariaHidden;
	          }
	          /** @return {?string} */
	          ,
	          get: function get() {
	            return this._savedAriaHidden;
	          }
	        }]);

	        return InertRoot;
	      }();
	      /**
	       * `InertNode` initialises and manages a single inert node.
	       * A node is inert if it is a descendant of one or more inert root elements.
	       *
	       * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
	       * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
	       * is intrinsically focusable or not.
	       *
	       * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
	       * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
	       * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
	       * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
	       * or removes the `tabindex` attribute if the element is intrinsically focusable.
	       */


	      var InertNode = function () {
	        /**
	         * @param {!Node} node A focusable element to be made inert.
	         * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
	         */
	        function InertNode(node, inertRoot) {
	          _classCallCheck(this, InertNode);
	          /** @type {!Node} */


	          this._node = node;
	          /** @type {boolean} */

	          this._overrodeFocusMethod = false;
	          /**
	           * @type {!Set<!InertRoot>} The set of descendant inert roots.
	           *    If and only if this set becomes empty, this node is no longer inert.
	           */

	          this._inertRoots = new Set([inertRoot]);
	          /** @type {?number} */

	          this._savedTabIndex = null;
	          /** @type {boolean} */

	          this._destroyed = false; // Save any prior tabindex info and make this node untabbable

	          this.ensureUntabbable();
	        }
	        /**
	         * Call this whenever this object is about to become obsolete.
	         * This makes the managed node focusable again and deletes all of the previously stored state.
	         */


	        _createClass(InertNode, [{
	          key: 'destructor',
	          value: function destructor() {
	            this._throwIfDestroyed();

	            if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
	              var element =
	              /** @type {!Element} */
	              this._node;

	              if (this._savedTabIndex !== null) {
	                element.setAttribute('tabindex', this._savedTabIndex);
	              } else {
	                element.removeAttribute('tabindex');
	              } // Use `delete` to restore native focus method.


	              if (this._overrodeFocusMethod) {
	                delete element.focus;
	              }
	            } // See note in InertRoot.destructor for why we cast these nulls to ANY.


	            this._node =
	            /** @type {?} */
	            null;
	            this._inertRoots =
	            /** @type {?} */
	            null;
	            this._destroyed = true;
	          }
	          /**
	           * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
	           * If the object has been destroyed, any attempt to access it will cause an exception.
	           */

	        }, {
	          key: '_throwIfDestroyed',

	          /**
	           * Throw if user tries to access destroyed InertNode.
	           */
	          value: function _throwIfDestroyed() {
	            if (this.destroyed) {
	              throw new Error('Trying to access destroyed InertNode');
	            }
	          }
	          /** @return {boolean} */

	        }, {
	          key: 'ensureUntabbable',

	          /** Save the existing tabindex value and make the node untabbable and unfocusable */
	          value: function ensureUntabbable() {
	            if (this.node.nodeType !== Node.ELEMENT_NODE) {
	              return;
	            }

	            var element =
	            /** @type {!Element} */
	            this.node;

	            if (matches.call(element, _focusableElementsString)) {
	              if (
	              /** @type {!HTMLElement} */
	              element.tabIndex === -1 && this.hasSavedTabIndex) {
	                return;
	              }

	              if (element.hasAttribute('tabindex')) {
	                this._savedTabIndex =
	                /** @type {!HTMLElement} */
	                element.tabIndex;
	              }

	              element.setAttribute('tabindex', '-1');

	              if (element.nodeType === Node.ELEMENT_NODE) {
	                element.focus = function () {};

	                this._overrodeFocusMethod = true;
	              }
	            } else if (element.hasAttribute('tabindex')) {
	              this._savedTabIndex =
	              /** @type {!HTMLElement} */
	              element.tabIndex;
	              element.removeAttribute('tabindex');
	            }
	          }
	          /**
	           * Add another inert root to this inert node's set of managing inert roots.
	           * @param {!InertRoot} inertRoot
	           */

	        }, {
	          key: 'addInertRoot',
	          value: function addInertRoot(inertRoot) {
	            this._throwIfDestroyed();

	            this._inertRoots.add(inertRoot);
	          }
	          /**
	           * Remove the given inert root from this inert node's set of managing inert roots.
	           * If the set of managing inert roots becomes empty, this node is no longer inert,
	           * so the object should be destroyed.
	           * @param {!InertRoot} inertRoot
	           */

	        }, {
	          key: 'removeInertRoot',
	          value: function removeInertRoot(inertRoot) {
	            this._throwIfDestroyed();

	            this._inertRoots['delete'](inertRoot);

	            if (this._inertRoots.size === 0) {
	              this.destructor();
	            }
	          }
	        }, {
	          key: 'destroyed',
	          get: function get() {
	            return (
	              /** @type {!InertNode} */
	              this._destroyed
	            );
	          }
	        }, {
	          key: 'hasSavedTabIndex',
	          get: function get() {
	            return this._savedTabIndex !== null;
	          }
	          /** @return {!Node} */

	        }, {
	          key: 'node',
	          get: function get() {
	            this._throwIfDestroyed();

	            return this._node;
	          }
	          /** @param {?number} tabIndex */

	        }, {
	          key: 'savedTabIndex',
	          set: function set(tabIndex) {
	            this._throwIfDestroyed();

	            this._savedTabIndex = tabIndex;
	          }
	          /** @return {?number} */
	          ,
	          get: function get() {
	            this._throwIfDestroyed();

	            return this._savedTabIndex;
	          }
	        }]);

	        return InertNode;
	      }();
	      /**
	       * InertManager is a per-document singleton object which manages all inert roots and nodes.
	       *
	       * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
	       * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
	       * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
	       * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
	       * is created for each such node, via the `_managedNodes` map.
	       */


	      var InertManager = function () {
	        /**
	         * @param {!Document} document
	         */
	        function InertManager(document) {
	          _classCallCheck(this, InertManager);

	          if (!document) {
	            throw new Error('Missing required argument; InertManager needs to wrap a document.');
	          }
	          /** @type {!Document} */


	          this._document = document;
	          /**
	           * All managed nodes known to this InertManager. In a map to allow looking up by Node.
	           * @type {!Map<!Node, !InertNode>}
	           */

	          this._managedNodes = new Map();
	          /**
	           * All inert roots known to this InertManager. In a map to allow looking up by Node.
	           * @type {!Map<!Node, !InertRoot>}
	           */

	          this._inertRoots = new Map();
	          /**
	           * Observer for mutations on `document.body`.
	           * @type {!MutationObserver}
	           */

	          this._observer = new MutationObserver(this._watchForInert.bind(this)); // Add inert style.

	          addInertStyle(document.head || document.body || document.documentElement); // Wait for document to be loaded.

	          if (document.readyState === 'loading') {
	            document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
	          } else {
	            this._onDocumentLoaded();
	          }
	        }
	        /**
	         * Set whether the given element should be an inert root or not.
	         * @param {!Element} root
	         * @param {boolean} inert
	         */


	        _createClass(InertManager, [{
	          key: 'setInert',
	          value: function setInert(root, inert) {
	            if (inert) {
	              if (this._inertRoots.has(root)) {
	                // element is already inert
	                return;
	              }

	              var inertRoot = new InertRoot(root, this);
	              root.setAttribute('inert', '');

	              this._inertRoots.set(root, inertRoot); // If not contained in the document, it must be in a shadowRoot.
	              // Ensure inert styles are added there.


	              if (!this._document.body.contains(root)) {
	                var parent = root.parentNode;

	                while (parent) {
	                  if (parent.nodeType === 11) {
	                    addInertStyle(parent);
	                  }

	                  parent = parent.parentNode;
	                }
	              }
	            } else {
	              if (!this._inertRoots.has(root)) {
	                // element is already non-inert
	                return;
	              }

	              var _inertRoot = this._inertRoots.get(root);

	              _inertRoot.destructor();

	              this._inertRoots['delete'](root);

	              root.removeAttribute('inert');
	            }
	          }
	          /**
	           * Get the InertRoot object corresponding to the given inert root element, if any.
	           * @param {!Node} element
	           * @return {!InertRoot|undefined}
	           */

	        }, {
	          key: 'getInertRoot',
	          value: function getInertRoot(element) {
	            return this._inertRoots.get(element);
	          }
	          /**
	           * Register the given InertRoot as managing the given node.
	           * In the case where the node has a previously existing inert root, this inert root will
	           * be added to its set of inert roots.
	           * @param {!Node} node
	           * @param {!InertRoot} inertRoot
	           * @return {!InertNode} inertNode
	           */

	        }, {
	          key: 'register',
	          value: function register(node, inertRoot) {
	            var inertNode = this._managedNodes.get(node);

	            if (inertNode !== undefined) {
	              // node was already in an inert subtree
	              inertNode.addInertRoot(inertRoot);
	            } else {
	              inertNode = new InertNode(node, inertRoot);
	            }

	            this._managedNodes.set(node, inertNode);

	            return inertNode;
	          }
	          /**
	           * De-register the given InertRoot as managing the given inert node.
	           * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
	           * node from the InertManager's set of managed nodes if it is destroyed.
	           * If the node is not currently managed, this is essentially a no-op.
	           * @param {!Node} node
	           * @param {!InertRoot} inertRoot
	           * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
	           */

	        }, {
	          key: 'deregister',
	          value: function deregister(node, inertRoot) {
	            var inertNode = this._managedNodes.get(node);

	            if (!inertNode) {
	              return null;
	            }

	            inertNode.removeInertRoot(inertRoot);

	            if (inertNode.destroyed) {
	              this._managedNodes['delete'](node);
	            }

	            return inertNode;
	          }
	          /**
	           * Callback used when document has finished loading.
	           */

	        }, {
	          key: '_onDocumentLoaded',
	          value: function _onDocumentLoaded() {
	            // Find all inert roots in document and make them actually inert.
	            var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
	            inertElements.forEach(function (inertElement) {
	              this.setInert(inertElement, true);
	            }, this); // Comment this out to use programmatic API only.

	            this._observer.observe(this._document.body || this._document.documentElement, {
	              attributes: true,
	              subtree: true,
	              childList: true
	            });
	          }
	          /**
	           * Callback used when mutation observer detects attribute changes.
	           * @param {!Array<!MutationRecord>} records
	           * @param {!MutationObserver} self
	           */

	        }, {
	          key: '_watchForInert',
	          value: function _watchForInert(records, self) {
	            var _this = this;

	            records.forEach(function (record) {
	              switch (record.type) {
	                case 'childList':
	                  slice.call(record.addedNodes).forEach(function (node) {
	                    if (node.nodeType !== Node.ELEMENT_NODE) {
	                      return;
	                    }

	                    var inertElements = slice.call(node.querySelectorAll('[inert]'));

	                    if (matches.call(node, '[inert]')) {
	                      inertElements.unshift(node);
	                    }

	                    inertElements.forEach(function (inertElement) {
	                      this.setInert(inertElement, true);
	                    }, _this);
	                  }, _this);
	                  break;

	                case 'attributes':
	                  if (record.attributeName !== 'inert') {
	                    return;
	                  }

	                  var target =
	                  /** @type {!Element} */
	                  record.target;
	                  var inert = target.hasAttribute('inert');

	                  _this.setInert(target, inert);

	                  break;
	              }
	            }, this);
	          }
	        }]);

	        return InertManager;
	      }();
	      /**
	       * Recursively walk the composed tree from |node|.
	       * @param {!Node} node
	       * @param {(function (!Element))=} callback Callback to be called for each element traversed,
	       *     before descending into child nodes.
	       * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
	       */


	      function composedTreeWalk(node, callback, shadowRootAncestor) {
	        if (node.nodeType == Node.ELEMENT_NODE) {
	          var element =
	          /** @type {!Element} */
	          node;

	          if (callback) {
	            callback(element);
	          } // Descend into node:
	          // If it has a ShadowRoot, ignore all child elements - these will be picked
	          // up by the <content> or <shadow> elements. Descend straight into the
	          // ShadowRoot.


	          var shadowRoot =
	          /** @type {!HTMLElement} */
	          element.shadowRoot;

	          if (shadowRoot) {
	            composedTreeWalk(shadowRoot, callback);
	            return;
	          } // If it is a <content> element, descend into distributed elements - these
	          // are elements from outside the shadow root which are rendered inside the
	          // shadow DOM.


	          if (element.localName == 'content') {
	            var content =
	            /** @type {!HTMLContentElement} */
	            element; // Verifies if ShadowDom v0 is supported.

	            var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];

	            for (var i = 0; i < distributedNodes.length; i++) {
	              composedTreeWalk(distributedNodes[i], callback);
	            }

	            return;
	          } // If it is a <slot> element, descend into assigned nodes - these
	          // are elements from outside the shadow root which are rendered inside the
	          // shadow DOM.


	          if (element.localName == 'slot') {
	            var slot =
	            /** @type {!HTMLSlotElement} */
	            element; // Verify if ShadowDom v1 is supported.

	            var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({
	              flatten: true
	            }) : [];

	            for (var _i = 0; _i < _distributedNodes.length; _i++) {
	              composedTreeWalk(_distributedNodes[_i], callback);
	            }

	            return;
	          }
	        } // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
	        // element, nor a <shadow> element recurse normally.


	        var child = node.firstChild;

	        while (child != null) {
	          composedTreeWalk(child, callback);
	          child = child.nextSibling;
	        }
	      }
	      /**
	       * Adds a style element to the node containing the inert specific styles
	       * @param {!Node} node
	       */


	      function addInertStyle(node) {
	        if (node.querySelector('style#inert-style, link#inert-style')) {
	          return;
	        }

	        var style = document.createElement('style');
	        style.setAttribute('id', 'inert-style');
	        style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
	        node.appendChild(style);
	      }

	      if (!Element.prototype.hasOwnProperty('inert')) {
	        /** @type {!InertManager} */
	        var inertManager = new InertManager(document);
	        Object.defineProperty(Element.prototype, 'inert', {
	          enumerable: true,

	          /** @this {!Element} */
	          get: function get() {
	            return this.hasAttribute('inert');
	          },

	          /** @this {!Element} */
	          set: function set(inert) {
	            inertManager.setInert(this, inert);
	          }
	        });
	      }
	    })();
	  });
	});

	/**
	 * @license
	 * Copyright 2016 Google Inc. All rights reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	(() => {
	  var _a, _b, _c;
	  /* Symbols for private properties */


	  const _blockingElements = Symbol();

	  const _alreadyInertElements = Symbol();

	  const _topElParents = Symbol();

	  const _siblingsToRestore = Symbol();

	  const _parentMO = Symbol();
	  /* Symbols for private static methods */


	  const _topChanged = Symbol();

	  const _swapInertedSibling = Symbol();

	  const _inertSiblings = Symbol();

	  const _restoreInertedSiblings = Symbol();

	  const _getParents = Symbol();

	  const _getDistributedChildren = Symbol();

	  const _isInertable = Symbol();

	  const _handleMutations = Symbol();

	  class BlockingElementsImpl {
	    constructor() {
	      /**
	       * The blocking elements.
	       */
	      this[_a] = [];
	      /**
	       * Used to keep track of the parents of the top element, from the element
	       * itself up to body. When top changes, the old top might have been removed
	       * from the document, so we need to memoize the inerted parents' siblings
	       * in order to restore their inerteness when top changes.
	       */

	      this[_b] = [];
	      /**
	       * Elements that are already inert before the first blocking element is
	       * pushed.
	       */

	      this[_c] = new Set();
	    }

	    destructor() {
	      // Restore original inertness.
	      this[_restoreInertedSiblings](this[_topElParents]); // Note we don't want to make these properties nullable on the class,
	      // since then we'd need non-null casts in many places. Calling a method on
	      // a BlockingElements instance after calling destructor will result in an
	      // exception.


	      const nullable = this;
	      nullable[_blockingElements] = null;
	      nullable[_topElParents] = null;
	      nullable[_alreadyInertElements] = null;
	    }

	    get top() {
	      const elems = this[_blockingElements];
	      return elems[elems.length - 1] || null;
	    }

	    push(element) {
	      if (!element || element === this.top) {
	        return;
	      } // Remove it from the stack, we'll bring it to the top.


	      this.remove(element);

	      this[_topChanged](element);

	      this[_blockingElements].push(element);
	    }

	    remove(element) {
	      const i = this[_blockingElements].indexOf(element);

	      if (i === -1) {
	        return false;
	      }

	      this[_blockingElements].splice(i, 1); // Top changed only if the removed element was the top element.


	      if (i === this[_blockingElements].length) {
	        this[_topChanged](this.top);
	      }

	      return true;
	    }

	    pop() {
	      const top = this.top;
	      top && this.remove(top);
	      return top;
	    }

	    has(element) {
	      return this[_blockingElements].indexOf(element) !== -1;
	    }
	    /**
	     * Sets `inert` to all document elements except the new top element, its
	     * parents, and its distributed content.
	     */


	    [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
	      const toKeepInert = this[_alreadyInertElements];
	      const oldParents = this[_topElParents]; // No new top, reset old top if any.

	      if (!newTop) {
	        this[_restoreInertedSiblings](oldParents);

	        toKeepInert.clear();
	        this[_topElParents] = [];
	        return;
	      }

	      const newParents = this[_getParents](newTop); // New top is not contained in the main document!


	      if (newParents[newParents.length - 1].parentNode !== document.body) {
	        throw Error('Non-connected element cannot be a blocking element');
	      } // Cast here because we know we'll call _inertSiblings on newParents
	      // below.


	      this[_topElParents] = newParents;

	      const toSkip = this[_getDistributedChildren](newTop); // No previous top element.


	      if (!oldParents.length) {
	        this[_inertSiblings](newParents, toSkip, toKeepInert);

	        return;
	      }

	      let i = oldParents.length - 1;
	      let j = newParents.length - 1; // Find common parent. Index 0 is the element itself (so stop before it).

	      while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
	        i--;
	        j--;
	      } // If up the parents tree there are 2 elements that are siblings, swap
	      // the inerted sibling.


	      if (oldParents[i] !== newParents[j]) {
	        this[_swapInertedSibling](oldParents[i], newParents[j]);
	      } // Restore old parents siblings inertness.


	      i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i)); // Make new parents siblings inert.

	      j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
	    }
	    /**
	     * Swaps inertness between two sibling elements.
	     * Sets the property `inert` over the attribute since the inert spec
	     * doesn't specify if it should be reflected.
	     * https://html.spec.whatwg.org/multipage/interaction.html#inert
	     */


	    [_swapInertedSibling](oldInert, newInert) {
	      const siblingsToRestore = oldInert[_siblingsToRestore]; // oldInert is not contained in siblings to restore, so we have to check
	      // if it's inertable and if already inert.

	      if (this[_isInertable](oldInert) && !oldInert.inert) {
	        oldInert.inert = true;
	        siblingsToRestore.add(oldInert);
	      } // If newInert was already between the siblings to restore, it means it is
	      // inertable and must be restored.


	      if (siblingsToRestore.has(newInert)) {
	        newInert.inert = false;
	        siblingsToRestore.delete(newInert);
	      }

	      newInert[_parentMO] = oldInert[_parentMO];
	      newInert[_siblingsToRestore] = siblingsToRestore;
	      oldInert[_parentMO] = undefined;
	      oldInert[_siblingsToRestore] = undefined;
	    }
	    /**
	     * Restores original inertness to the siblings of the elements.
	     * Sets the property `inert` over the attribute since the inert spec
	     * doesn't specify if it should be reflected.
	     * https://html.spec.whatwg.org/multipage/interaction.html#inert
	     */


	    [_restoreInertedSiblings](elements) {
	      for (const element of elements) {
	        const mo = element[_parentMO];
	        mo.disconnect();
	        element[_parentMO] = undefined;
	        const siblings = element[_siblingsToRestore];

	        for (const sibling of siblings) {
	          sibling.inert = false;
	        }

	        element[_siblingsToRestore] = undefined;
	      }
	    }
	    /**
	     * Inerts the siblings of the elements except the elements to skip. Stores
	     * the inerted siblings into the element's symbol `_siblingsToRestore`.
	     * Pass `toKeepInert` to collect the already inert elements.
	     * Sets the property `inert` over the attribute since the inert spec
	     * doesn't specify if it should be reflected.
	     * https://html.spec.whatwg.org/multipage/interaction.html#inert
	     */


	    [_inertSiblings](elements, toSkip, toKeepInert) {
	      for (const element of elements) {
	        // Assume element is not a Document, so it must have a parentNode.
	        const parent = element.parentNode;
	        const children = parent.children;
	        const inertedSiblings = new Set();

	        for (let j = 0; j < children.length; j++) {
	          const sibling = children[j]; // Skip the input element, if not inertable or to be skipped.

	          if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
	            continue;
	          } // Should be collected since already inerted.


	          if (toKeepInert && sibling.inert) {
	            toKeepInert.add(sibling);
	          } else {
	            sibling.inert = true;
	            inertedSiblings.add(sibling);
	          }
	        } // Store the siblings that were inerted.


	        element[_siblingsToRestore] = inertedSiblings; // Observe only immediate children mutations on the parent.

	        const mo = new MutationObserver(this[_handleMutations].bind(this));
	        element[_parentMO] = mo;
	        let parentToObserve = parent; // If we're using the ShadyDOM polyfill, then our parent could be a
	        // shady root, which is an object that acts like a ShadowRoot, but isn't
	        // actually a node in the real DOM. Observe the real DOM parent instead.

	        const maybeShadyRoot = parentToObserve;

	        if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
	          parentToObserve = maybeShadyRoot.host;
	        }

	        mo.observe(parentToObserve, {
	          childList: true
	        });
	      }
	    }
	    /**
	     * Handles newly added/removed nodes by toggling their inertness.
	     * It also checks if the current top Blocking Element has been removed,
	     * notifying and removing it.
	     */


	    [_handleMutations](mutations) {
	      const parents = this[_topElParents];
	      const toKeepInert = this[_alreadyInertElements];

	      for (const mutation of mutations) {
	        // If the target is a shadowRoot, get its host as we skip shadowRoots when
	        // computing _topElParents.
	        const target = mutation.target.host || mutation.target;
	        const idx = target === document.body ? parents.length : parents.indexOf(target);
	        const inertedChild = parents[idx - 1];
	        const inertedSiblings = inertedChild[_siblingsToRestore]; // To restore.

	        for (let i = 0; i < mutation.removedNodes.length; i++) {
	          const sibling = mutation.removedNodes[i];

	          if (sibling === inertedChild) {
	            console.info('Detected removal of the top Blocking Element.');
	            this.pop();
	            return;
	          }

	          if (inertedSiblings.has(sibling)) {
	            sibling.inert = false;
	            inertedSiblings.delete(sibling);
	          }
	        } // To inert.


	        for (let i = 0; i < mutation.addedNodes.length; i++) {
	          const sibling = mutation.addedNodes[i];

	          if (!this[_isInertable](sibling)) {
	            continue;
	          }

	          if (toKeepInert && sibling.inert) {
	            toKeepInert.add(sibling);
	          } else {
	            sibling.inert = true;
	            inertedSiblings.add(sibling);
	          }
	        }
	      }
	    }
	    /**
	     * Returns if the element is inertable.
	     */


	    [_isInertable](element) {
	      return false === /^(style|template|script)$/.test(element.localName);
	    }
	    /**
	     * Returns the list of newParents of an element, starting from element
	     * (included) up to `document.body` (excluded).
	     */


	    [_getParents](element) {
	      const parents = [];
	      let current = element; // Stop to body.

	      while (current && current !== document.body) {
	        // Skip shadow roots.
	        if (current.nodeType === Node.ELEMENT_NODE) {
	          parents.push(current);
	        } // ShadowDom v1


	        if (current.assignedSlot) {
	          // Collect slots from deepest slot to top.
	          while (current = current.assignedSlot) {
	            parents.push(current);
	          } // Continue the search on the top slot.


	          current = parents.pop();
	          continue;
	        }

	        current = current.parentNode || current.host;
	      }

	      return parents;
	    }
	    /**
	     * Returns the distributed children of the element's shadow root.
	     * Returns null if the element doesn't have a shadow root.
	     */


	    [_getDistributedChildren](element) {
	      const shadowRoot = element.shadowRoot;

	      if (!shadowRoot) {
	        return null;
	      }

	      const result = new Set();
	      let i;
	      let j;
	      let nodes;
	      const slots = shadowRoot.querySelectorAll('slot');

	      if (slots.length && slots[0].assignedNodes) {
	        for (i = 0; i < slots.length; i++) {
	          nodes = slots[i].assignedNodes({
	            flatten: true
	          });

	          for (j = 0; j < nodes.length; j++) {
	            if (nodes[j].nodeType === Node.ELEMENT_NODE) {
	              result.add(nodes[j]);
	            }
	          }
	        } // No need to search for <content>.

	      }

	      return result;
	    }

	  }

	  document.$blockingElements = new BlockingElementsImpl();
	})();

	function C(n, t) {
	  for (var e in t) n[e] = t[e];

	  return n;
	}

	function S(n, t) {
	  for (var e in n) if ("__source" !== e && !(e in t)) return !0;

	  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;

	  return !1;
	}

	function E(n) {
	  this.props = n;
	}

	(E.prototype = new _$1()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
	  return S(this.props, n) || S(this.state, t);
	};
	var w = l$1.__b;

	l$1.__b = function (n) {
	  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), w && w(n);
	};

	var R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

	function x(n) {
	  function t(t) {
	    var e = C({}, t);
	    return delete e.ref, n(e, t.ref || null);
	  }

	  return t.$$typeof = R, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
	}

	var A = l$1.__e;

	l$1.__e = function (n, t, e, r) {
	  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
	  A(n, t, e, r);
	};

	var O = l$1.unmount;

	function L() {
	  this.__u = 0, this.t = null, this.__b = null;
	}

	function U(n) {
	  var t = n.__.__c;
	  return t && t.__e && t.__e(n);
	}

	function M() {
	  this.u = null, this.o = null;
	}

	l$1.unmount = function (n) {
	  var t = n.__c;
	  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
	}, (L.prototype = new _$1()).__c = function (n, t) {
	  var e = t.__c,
	      r = this;
	  null == r.t && (r.t = []), r.t.push(e);

	  var u = U(r.__v),
	      o = !1,
	      i = function () {
	    o || (o = !0, e.__R = null, u ? u(l) : l());
	  };

	  e.__R = i;

	  var l = function () {
	    if (! --r.__u) {
	      if (r.state.__e) {
	        var n = r.state.__e;

	        r.__v.__k[0] = function n(t, e, r) {
	          return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
	            return n(t, e, r);
	          }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
	        }(n, n.__c.__P, n.__c.__O);
	      }

	      var t;

	      for (r.setState({
	        __e: r.__b = null
	      }); t = r.t.pop();) t.forceUpdate();
	    }
	  },
	      f = !0 === t.__h;

	  r.__u++ || f || r.setState({
	    __e: r.__b = r.__v.__k[0]
	  }), n.then(i, i);
	}, L.prototype.componentWillUnmount = function () {
	  this.t = [];
	}, L.prototype.render = function (n, t) {
	  if (this.__b) {
	    if (this.__v.__k) {
	      var e = document.createElement("div"),
	          r = this.__v.__k[0].__c;

	      this.__v.__k[0] = function n(t, e, r) {
	        return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (n) {
	          "function" == typeof n.__c && n.__c();
	        }), t.__c.__H = null), null != (t = C({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
	          return n(t, e, r);
	        })), t;
	      }(this.__b, e, r.__O = r.__P);
	    }

	    this.__b = null;
	  }

	  var u = t.__e && v$1(d$1, null, n.fallback);
	  return u && (u.__h = null), [v$1(d$1, null, t.__e ? null : n.children), u];
	};

	var T = function (n, t, e) {
	  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
	    for (; e.length > 3;) e.pop()();

	    if (e[1] < e[0]) break;
	    n.u = e = e[2];
	  }
	};

	(M.prototype = new _$1()).__e = function (n) {
	  var t = this,
	      e = U(t.__v),
	      r = t.o.get(n);
	  return r[0]++, function (u) {
	    var o = function () {
	      t.props.revealOrder ? (r.push(u), T(t, n, r)) : u();
	    };

	    e ? e(o) : o();
	  };
	}, M.prototype.render = function (n) {
	  this.u = null, this.o = new Map();
	  var t = A$2(n.children);
	  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

	  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);

	  return n.children;
	}, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function () {
	  var n = this;
	  this.o.forEach(function (t, e) {
	    T(n, e, t);
	  });
	};

	var P = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
	    V = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	    j = "undefined" != typeof document,
	    z = function (n) {
	  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
	};

	_$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
	  Object.defineProperty(_$1.prototype, n, {
	    configurable: !0,
	    get: function () {
	      return this["UNSAFE_" + n];
	    },
	    set: function (t) {
	      Object.defineProperty(this, n, {
	        configurable: !0,
	        writable: !0,
	        value: t
	      });
	    }
	  });
	});
	var H = l$1.event;

	function Z() {}

	function Y() {
	  return this.cancelBubble;
	}

	function q() {
	  return this.defaultPrevented;
	}

	l$1.event = function (n) {
	  return H && (n = H(n)), n.persist = Z, n.isPropagationStopped = Y, n.isDefaultPrevented = q, n.nativeEvent = n;
	};

	var J = {
	  configurable: !0,
	  get: function () {
	    return this.class;
	  }
	},
	    K = l$1.vnode;

	l$1.vnode = function (n) {
	  var t = n.type,
	      e = n.props,
	      r = e;

	  if ("string" == typeof t) {
	    var u = -1 === t.indexOf("-");

	    for (var o in r = {}, e) {
	      var i = e[o];
	      j && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : u && V.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
	    }

	    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = A$2(e.children).forEach(function (n) {
	      n.props.selected = -1 != r.value.indexOf(n.props.value);
	    })), "select" == t && null != r.defaultValue && (r.value = A$2(e.children).forEach(function (n) {
	      n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
	    })), n.props = r, e.class != e.className && (J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", J));
	  }

	  n.$$typeof = P, K && K(n);
	};

	var Q = l$1.__r;

	l$1.__r = function (n) {
	  Q && Q(n);
	};

	/**
	 * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
	 * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
	 */

	function forwardElementRef(Component) {
	  const ForwardedComponent = x(Component);
	  return ForwardedComponent;
	}

	function getClassName(classBase, show, phase) {
	  if (phase) return `${classBase || "transition"}-${show}-${phase}`;else return `${classBase || "transition"}-${show}`;
	}

	function forceReflow(e) {
	  // Try really hard to make sure this isn't optimized out by anything.
	  // We need it for its document reflow side effect.
	  e.getBoundingClientRect();
	  return e;
	}
	/**
	 * A hook that adds & removes class names in a way that facilitates proper transitions.
	 *
	 * The first argument contains the props related directly to the transition.
	 *
	 * The second argument contains any other props you might want merged into the final product (these are not read or manipulated or anything -- it's purely shorthand and can be omitted with `{}` and then your own `useMergedProps`).
	 */


	function useCreateTransitionableProps(_ref, otherProps) {
	  var _classBase;

	  let {
	    measure,
	    animateOnMount,
	    classBase,
	    onTransitionUpdate,
	    exitVisibility,
	    duration,
	    show,
	    ref
	  } = _ref;
	  (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
	  const {
	    getElement,
	    useRefElementProps
	  } = useRefElement({});
	  const [phase, setPhase] = m(animateOnMount ? "init" : null);
	  const [direction, setDirection] = m(show == null ? null : show ? "enter" : "exit");
	  const [surfaceWidth, setSurfaceWidth] = m(null);
	  const [surfaceHeight, setSurfaceHeight] = m(null);
	  const [surfaceX, setSurfaceX] = m(null);
	  const [surfaceY, setSurfaceY] = m(null);
	  const [transitioningWidth, setTransitioningWidth] = m(null);
	  const [transitioningHeight, setTransitioningHeight] = m(null);
	  const [transitioningX, setTransitioningX] = m(null);
	  const [transitioningY, setTransitioningY] = m(null);
	  const [logicalDirectionInfo, setLogicalDirectionInfo] = m(null);
	  const {
	    getLogicalDirectionInfo,
	    useLogicalDirectionProps
	  } = useLogicalDirection({
	    onLogicalDirectionChange: setLogicalDirectionInfo
	  });
	  const onTransitionUpdateRef = h(onTransitionUpdate);
	  const phaseRef = h(phase);
	  const directionRef = h(direction);
	  const durationRef = h(duration);
	  const tooEarlyTimeoutRef = h(null);
	  const tooEarlyValueRef = h(true);
	  const tooLateTimeoutRef = h(null);
	  const onTransitionEnd = A$1(e => {
	    if (e.target === getElement() && tooEarlyValueRef.current == false) {
	      setPhase("finalize");
	    }
	  }, []);
	  d(() => {
	    onTransitionUpdateRef.current = onTransitionUpdate;
	  }, [onTransitionUpdate]);
	  d(() => {
	    phaseRef.current = phase;
	  }, [phase]);
	  d(() => {
	    directionRef.current = direction;
	  }, [direction]);
	  d(() => {
	    durationRef.current = duration;
	  }, [duration]);
	  d(() => {
	    var _onTransitionUpdateRe;

	    if (direction && phase) (_onTransitionUpdateRe = onTransitionUpdateRef.current) === null || _onTransitionUpdateRe === void 0 ? void 0 : _onTransitionUpdateRe.call(onTransitionUpdateRef, direction, phase);
	  }, [direction, phase]); // Every time the phase changes to "transition", add our transition timeout timeouts
	  // to catch any time onTransitionEnd fails to report for whatever reason to be safe

	  d(() => {
	    if (phase == "transition") {
	      var _durationRef$current;

	      const timeoutDuration = (_durationRef$current = durationRef.current) !== null && _durationRef$current !== void 0 ? _durationRef$current : 1000;
	      tooEarlyTimeoutRef.current = window.setTimeout(() => {
	        tooEarlyValueRef.current = false;
	        tooEarlyTimeoutRef.current = null;
	      }, 50);
	      tooLateTimeoutRef.current = window.setTimeout(() => {
	        tooEarlyValueRef.current = true;
	        tooLateTimeoutRef.current = null;
	        setPhase("finalize");
	      }, timeoutDuration);
	    }

	    return () => {
	      if (tooEarlyTimeoutRef.current) clearTimeout(tooEarlyTimeoutRef.current);
	      if (tooLateTimeoutRef.current) clearTimeout(tooLateTimeoutRef.current);
	    };
	  }, [phase]); // Any time "show" changes, update our direction and phase.
	  // In addition, measure the size of the element if requested.

	  d(() => {
	    const element = getElement();

	    if (element && show != null) {
	      const previousPhase = phaseRef.current; // Swap our direction

	      if (show) setDirection("enter");else setDirection("exit");
	      setPhase(previousPhase === null ? "finalize" : "init");

	      if (measure) {
	        let currentSizeWithTransition = element.getBoundingClientRect();
	        {
	          const {
	            x,
	            y,
	            width,
	            height
	          } = currentSizeWithTransition;
	          setTransitioningX(x + "px");
	          setTransitioningY(y + "px");
	          setTransitioningWidth(width + "px");
	          setTransitioningHeight(height + "px");
	        }

	        if (previousPhase === "finalize") {
	          // We're going to be messing with the actual element's class, 
	          // so we'll want an easy way to restore it later.
	          const backup = element.className;
	          element.classList.add(`${classBase}-measure`);
	          element.classList.remove(`${classBase}-enter`, `${classBase}-enter-init`, `${classBase}-enter-transition`, `${classBase}-enter-finalize`, `${classBase}-exit`, `${classBase}-exit-init`, `${classBase}-exit-transition`, `${classBase}-exit-finalize`);
	          forceReflow(element);
	          const sizeWithoutTransition = element.getBoundingClientRect();
	          const {
	            x,
	            y,
	            width,
	            height
	          } = sizeWithoutTransition;
	          setSurfaceX(x + "px");
	          setSurfaceY(y + "px");
	          setSurfaceWidth(width + "px");
	          setSurfaceHeight(height + "px");
	          element.className = backup;
	          forceReflow(element);
	        }
	      }
	    }
	  }, [show, measure, classBase]); // Any time the phase changes to init, immediately before the screen is painted,
	  // change the phase to "transition" and re-render ().

	  d(() => {
	    const element = getElement();

	    if (element && directionRef.current != null) {
	      var _classBase2;

	      (_classBase2 = classBase) !== null && _classBase2 !== void 0 ? _classBase2 : classBase = "transition";

	      if (phase === "init") {
	        // Preact just finished rendering init
	        // Now set our transition style.
	        setPhase("transition");

	        if (measure) {
	          forceReflow(element);
	        }
	      }
	    }
	  }, [phase, measure]);
	  const inlineDirection = logicalDirectionInfo === null || logicalDirectionInfo === void 0 ? void 0 : logicalDirectionInfo.inlineDirection;
	  const blockDirection = logicalDirectionInfo === null || logicalDirectionInfo === void 0 ? void 0 : logicalDirectionInfo.blockDirection;
	  const writingModeIsHorizontal = inlineDirection == "rtl" || inlineDirection == "ltr";
	  const surfaceInlineInset = writingModeIsHorizontal ? surfaceX : surfaceY;
	  const surfaceBlockInset = writingModeIsHorizontal ? surfaceY : surfaceX;
	  const surfaceInlineSize = writingModeIsHorizontal ? surfaceWidth : surfaceHeight;
	  const surfaceBlockSize = writingModeIsHorizontal ? surfaceHeight : surfaceWidth;
	  const transitioningInlineInset = writingModeIsHorizontal ? transitioningX : transitioningY;
	  const transitioningBlockInset = writingModeIsHorizontal ? transitioningY : transitioningX;
	  const transitioningInlineSize = writingModeIsHorizontal ? transitioningWidth : transitioningHeight;
	  const transitioningBlockSize = writingModeIsHorizontal ? transitioningHeight : transitioningWidth;
	  let almostDone = useRefElementProps(useLogicalDirectionProps({
	    ref,
	    style: removeEmpty({
	      [`--${classBase}-duration`]: duration,
	      [`--${classBase}-surface-x`]: surfaceX,
	      [`--${classBase}-surface-y`]: surfaceY,
	      [`--${classBase}-surface-width`]: surfaceWidth,
	      [`--${classBase}-surface-height`]: surfaceHeight,
	      [`--${classBase}-surface-inline-inset`]: surfaceInlineInset,
	      [`--${classBase}-surface-block-inset`]: surfaceBlockInset,
	      [`--${classBase}-surface-inline-size`]: surfaceInlineSize,
	      [`--${classBase}-surface-block-size`]: surfaceBlockSize,
	      [`--${classBase}-transitioning-x`]: transitioningX,
	      [`--${classBase}-transitioning-y`]: transitioningY,
	      [`--${classBase}-transitioning-width`]: transitioningWidth,
	      [`--${classBase}-transitioning-height`]: transitioningHeight,
	      [`--${classBase}-transitioning-inline-inset`]: transitioningInlineInset,
	      [`--${classBase}-transitioning-block-inset`]: transitioningBlockInset,
	      [`--${classBase}-transitioning-inline-size`]: transitioningInlineSize,
	      [`--${classBase}-transitioning-block-size`]: transitioningBlockSize
	    }),
	    onTransitionEnd,
	    ...{
	      "aria-hidden": show ? undefined : "true"
	    },
	    className: clsx(direction && getClassName(classBase, direction), direction && phase && getClassName(classBase, direction, phase), exitVisibility == "removed" && `${classBase}-removed-on-exit`, exitVisibility == "visible" && `${classBase}-visible-on-exit`, `${classBase}-inline-direction-${inlineDirection !== null && inlineDirection !== void 0 ? inlineDirection : "ltr"}`, `${classBase}-block-direction-${blockDirection !== null && blockDirection !== void 0 ? blockDirection : "ttb"}`)
	  }));
	  return useMergedProps()(almostDone, otherProps);
	}

	function removeEmpty(obj) {
	  return Object.fromEntries(Object.entries(obj).filter(_ref2 => {
	    let [_, v] = _ref2;
	    return v != null;
	  }));
	}
	/**
	 * A component that *wraps an HTMLElement or other ref-forwarding component* and allows it to use CSS to transition in/out.
	 * Combines the props passed to it, the props its child has, and the props needed for the CSS transition, and passes them
	 * all to the child element you provide.
	 *
	 * This is the most general component that others use as a base. By default, this component by itself doesn't actually add any CSS classes that animate anything (like opacity, for example).
	 * It adds classes like `transition-enter-finalize`, but you need to provide the additional e.g. `fade` class that reacts to it.
	 *
	 * Use this if the other, more specialized Transition components don't fit your needs.
	 *
	 * @example `<Transitionable show={show} {...useCreateFadeProps(...)}><div>{children}</div></Transitionable>`
	 * @example `<Transitionable show={show}><div {...useCreateFadeProps(...)}>{children}</div></Transitionable>`
	 */


	const Transitionable = forwardElementRef(function Transition(_ref3, r) {
	  let {
	    children: child,
	    duration,
	    classBase,
	    measure,
	    exitVisibility,
	    show,
	    onTransitionUpdate,
	    animateOnMount,
	    childMountBehavior,
	    ...props
	  } = _ref3;
	  const [hasShownOnce, setHasShownOnce] = m(false);
	  const shouldSetHasShownOnce = hasShownOnce === false && childMountBehavior === "mount-on-show" && show === true;
	  y(() => {
	    if (shouldSetHasShownOnce) setHasShownOnce(true);
	  }, [shouldSetHasShownOnce]);
	  if (childMountBehavior === "mount-when-showing" && !show) child = v$1("div", null);
	  if (childMountBehavior === "mount-on-show" && !show && hasShownOnce === false) child = v$1("div", null);

	  if (!childIsVNode(child)) {
	    throw new Error("A Transitionable component must have exactly one component child (e.g. a <div>, but not \"a string\").");
	  }

	  const transitionProps = useCreateTransitionableProps({
	    classBase,
	    duration,
	    measure,
	    show,
	    animateOnMount,
	    onTransitionUpdate,
	    ref: r,
	    exitVisibility
	  }, props);
	  const mergedWithChildren = useMergedProps()(transitionProps, { ...child.props,
	    ref: child.ref
	  });
	  return B(child, mergedWithChildren);
	});

	function childIsVNode(child) {
	  if (!child) return false;

	  if (Array.isArray(child)) {
	    return false;
	  }

	  if (typeof child != "object") return false;
	  return "props" in child;
	}

	/**
	 * Creates a set of props that implement a Clip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
	 * Be sure to merge these returned props with whatever the user passed in.
	 */

	function useCreateClipProps(_ref, otherProps) {
	  var _classBase, _ref2, _ref3, _ref4, _ref5;

	  let {
	    classBase,
	    clipOrigin,
	    clipOriginInline,
	    clipOriginBlock,
	    clipMin,
	    clipMinInline,
	    clipMinBlock
	  } = _ref;
	  (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
	  return useMergedProps()({
	    className: clsx(`${classBase}-clip`),
	    classBase,
	    style: {
	      [`--${classBase}-clip-origin-inline`]: (_ref2 = clipOriginInline !== null && clipOriginInline !== void 0 ? clipOriginInline : clipOrigin) !== null && _ref2 !== void 0 ? _ref2 : 0.5,
	      [`--${classBase}-clip-origin-block`]: (_ref3 = clipOriginBlock !== null && clipOriginBlock !== void 0 ? clipOriginBlock : clipOrigin) !== null && _ref3 !== void 0 ? _ref3 : 0,
	      [`--${classBase}-clip-min-inline`]: (_ref4 = clipMinInline !== null && clipMinInline !== void 0 ? clipMinInline : clipMin) !== null && _ref4 !== void 0 ? _ref4 : 1,
	      [`--${classBase}-clip-min-block`]: (_ref5 = clipMinBlock !== null && clipMinBlock !== void 0 ? clipMinBlock : clipMin) !== null && _ref5 !== void 0 ? _ref5 : 0
	    }
	  }, otherProps);
	}
	const Clip = forwardElementRef(function Clip(_ref6, ref) {
	  let {
	    classBase,
	    clipOrigin,
	    clipOriginInline,
	    clipOriginBlock,
	    clipMin,
	    clipMinInline,
	    clipMinBlock,
	    show,
	    ...rest
	  } = _ref6;
	  return v$1(Transitionable, {
	    show: show,
	    ...useCreateClipProps({
	      classBase,
	      clipOrigin,
	      clipOriginInline,
	      clipOriginBlock,
	      clipMin,
	      clipMinInline,
	      clipMinBlock
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
	 * Be sure to merge these returned props with whatever the user passed in.
	 */

	function useCreateFadeProps(_ref, otherProps) {
	  var _classBase;

	  let {
	    classBase,
	    fadeMin,
	    fadeMax
	  } = _ref;
	  (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
	  return useMergedProps()({
	    className: `${classBase}-fade`,
	    classBase,
	    style: {
	      [`--${classBase}-fade-min`]: fadeMin !== null && fadeMin !== void 0 ? fadeMin : 0,
	      [`--${classBase}-fade-max`]: fadeMax !== null && fadeMax !== void 0 ? fadeMax : 1
	    }
	  }, otherProps);
	}
	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Fade effect.
	 *
	 * Note that while it is absolutely possible to wrap another transition with `<Fade>`,
	 * there will be some duplicate code run as two `<Transitionable>` components end up operating on the same element.
	 * It's generally recommended to either use the components that include a combined fade effect,
	 * or just directly a `<Transitionable>` on your own.
	 *
	 * @see `Transitionable`
	 */

	forwardElementRef(function Fade(_ref2, ref) {
	  let {
	    classBase,
	    fadeMin,
	    fadeMax,
	    show,
	    ...rest
	  } = _ref2;
	  return v$1(Transitionable, {
	    show: show,
	    ...useCreateFadeProps({
	      classBase,
	      fadeMin,
	      fadeMax
	    }, { ...rest,
	      ref
	    })
	  });
	});

	forwardElementRef(function ClipFade(_ref, ref) {
	  let {
	    classBase,
	    fadeMin,
	    fadeMax,
	    show,
	    ...rest
	  } = _ref;
	  return v$1(Clip, {
	    show: show,
	    ...useCreateFadeProps({
	      classBase,
	      fadeMin,
	      fadeMax
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
	 * Be sure to merge these returned props with whatever the user passed in.
	 *
	 * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
	 *
	 * @example <Transitionable measure {...useCreateCollapseProps(...)} />
	 */

	function useCreateCollapseProps(_ref, otherProps) {
	  var _classBase;

	  let {
	    classBase,
	    minBlockSize
	  } = _ref;
	  (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
	  return useMergedProps()({
	    classBase,
	    measure: true,
	    className: `${classBase}-collapse`,
	    style: {
	      [`--${classBase}-collapse-min-block`]: minBlockSize !== null && minBlockSize !== void 0 ? minBlockSize : 0
	    }
	  }, otherProps);
	}
	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Collapse effect.
	 *
	 * *Important*: This component is *not* efficient for the browser to animate!
	 * Make sure you do testing on lower power devices, or prefer a lighter
	 * alternative, like `<Clip>`.
	 *
	 * @see `Transitionable`
	 */

	const Collapse = forwardElementRef(function Collapse(_ref2, ref) {
	  let {
	    classBase,
	    show,
	    minBlockSize,
	    ...rest
	  } = _ref2;
	  return v$1(Transitionable, {
	    show: show,
	    ...useCreateCollapseProps({
	      classBase,
	      minBlockSize
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with both Collapse and Fade effects.
	 *
	 * @see `Transitionable` `Collapse` `Fade`
	 */

	forwardElementRef(function CollapseFade(_ref, ref) {
	  let {
	    classBase,
	    fadeMin,
	    fadeMax,
	    show,
	    ...rest
	  } = _ref;
	  return v$1(Collapse, {
	    show: show,
	    ...useCreateFadeProps({
	      classBase,
	      fadeMin,
	      fadeMax
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
	 */

	function useCreateSlideProps(_ref, otherProps) {
	  var _classBase, _slideTargetInline, _slideTargetBlock, _slideTargetInline2, _slideTargetBlock2;

	  let {
	    classBase,
	    slideTargetInline,
	    slideTargetBlock
	  } = _ref;
	  (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
	  const lastValidTargetInline = h((_slideTargetInline = slideTargetInline) !== null && _slideTargetInline !== void 0 ? _slideTargetInline : 1);
	  const lastValidTargetBlock = h((_slideTargetBlock = slideTargetBlock) !== null && _slideTargetBlock !== void 0 ? _slideTargetBlock : 0);
	  y(() => {
	    if (slideTargetInline) lastValidTargetInline.current = slideTargetInline;
	  }, [slideTargetInline]);
	  y(() => {
	    if (slideTargetBlock) lastValidTargetBlock.current = slideTargetBlock;
	  }, [slideTargetBlock]);
	  if (slideTargetInline == 0) slideTargetInline = lastValidTargetInline.current;
	  if (slideTargetBlock == 0) slideTargetBlock = lastValidTargetBlock.current;
	  return useMergedProps()({
	    className: `${classBase}-slide`,
	    classBase,
	    style: {
	      [`--${classBase}-slide-target-inline`]: `${(_slideTargetInline2 = slideTargetInline) !== null && _slideTargetInline2 !== void 0 ? _slideTargetInline2 : 0}`,
	      [`--${classBase}-slide-target-block`]: `${(_slideTargetBlock2 = slideTargetBlock) !== null && _slideTargetBlock2 !== void 0 ? _slideTargetBlock2 : 0}`
	    }
	  }, otherProps);
	}
	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Slide effect.
	 *
	 * Provide the direction the element will travel in with `slideInline` and `slideBlock`,
	 * with `1` being `100%` of the element's width or height.
	 *
	 * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
	 * which allows for convenient setups inside of a `SwapContainer`
	 * (`slideInline={index - selectedIndex}` or similar.)
	 *
	 * @see `Transitionable`
	 */

	const Slide = forwardElementRef(function Slide(_ref2, ref) {
	  let {
	    classBase,
	    slideTargetInline,
	    slideTargetBlock,
	    show,
	    ...rest
	  } = _ref2;
	  return v$1(Transitionable, {
	    show: show,
	    ...useCreateSlideProps({
	      classBase,
	      slideTargetInline,
	      slideTargetBlock
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with both Slide and Fade effects.
	 *
	 * `slideInline={(index - selectedIndex) / 10}` would make the element look like it fades out before it travels to its target destination.
	 *
	 * @see `Transitionable` `Zoom`
	 */

	forwardElementRef(function SlideFade(_ref, ref) {
	  let {
	    classBase,
	    fadeMin,
	    fadeMax,
	    show,
	    ...rest
	  } = _ref;
	  return v$1(Slide, {
	    show: show,
	    ...useCreateFadeProps({
	      classBase,
	      fadeMin,
	      fadeMax
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
	 */

	function useCreateZoomProps(_ref, otherProps) {
	  var _classBase, _ref2, _ref3, _ref4, _ref5;

	  let {
	    classBase,
	    zoomOrigin,
	    zoomOriginInline,
	    zoomOriginBlock,
	    zoomMin,
	    zoomMinInline,
	    zoomMinBlock
	  } = _ref;
	  (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
	  return useMergedProps()({
	    className: `${classBase}-zoom`,
	    classBase,
	    style: {
	      [`--${classBase}-zoom-origin-inline`]: `${(_ref2 = zoomOriginInline !== null && zoomOriginInline !== void 0 ? zoomOriginInline : zoomOrigin) !== null && _ref2 !== void 0 ? _ref2 : 0.5}`,
	      [`--${classBase}-zoom-origin-block`]: `${(_ref3 = zoomOriginBlock !== null && zoomOriginBlock !== void 0 ? zoomOriginBlock : zoomOrigin) !== null && _ref3 !== void 0 ? _ref3 : 0.5}`,
	      [`--${classBase}-zoom-min-inline`]: `${(_ref4 = zoomMinInline !== null && zoomMinInline !== void 0 ? zoomMinInline : zoomMin) !== null && _ref4 !== void 0 ? _ref4 : 0}`,
	      [`--${classBase}-zoom-min-block`]: `${(_ref5 = zoomMinBlock !== null && zoomMinBlock !== void 0 ? zoomMinBlock : zoomMin) !== null && _ref5 !== void 0 ? _ref5 : 0}`
	    }
	  }, otherProps);
	}
	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
	 * @see `Transitionable` `ZoomFade`
	 */

	const Zoom = forwardElementRef(function Zoom(_ref6, ref) {
	  let {
	    classBase,
	    zoomOrigin,
	    zoomOriginInline,
	    zoomOriginBlock,
	    zoomMin,
	    zoomMinInline,
	    zoomMinBlock,
	    show,
	    ...rest
	  } = _ref6;
	  return v$1(Transitionable, {
	    show: show,
	    ...useCreateZoomProps({
	      classBase,
	      zoomOrigin,
	      zoomOriginInline,
	      zoomOriginBlock,
	      zoomMin,
	      zoomMinInline,
	      zoomMinBlock
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with both Zoom and Fade effects.
	 *
	 * This is an ideal time to use the minimum size Zoom properties.
	 *
	 * @see `Transitionable` `Zoom`
	 */

	forwardElementRef(function ZoomFade(_ref, ref) {
	  let {
	    classBase,
	    fadeMin,
	    fadeMax,
	    show,
	    ...rest
	  } = _ref;
	  return v$1(Zoom, {
	    show: show,
	    ...useCreateFadeProps({
	      classBase,
	      fadeMin,
	      fadeMax
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with both Slide and Zoom effects.
	 *
	 * Probably best combined with `useCreateFadeProps` (or just using a `SlideZoomFade`?).
	 *
	 * @see `Transitionable` `SlideFadeZoom` `Zoom` `Fade`
	 */

	const SlideZoom = forwardElementRef(function SlideZoom(_ref, ref) {
	  let {
	    classBase,
	    zoomMin,
	    zoomMinInline,
	    zoomMinBlock,
	    zoomOrigin,
	    zoomOriginInline,
	    zoomOriginBlock,
	    show,
	    ...rest
	  } = _ref;
	  return v$1(Slide, {
	    show: show,
	    ...useCreateZoomProps({
	      classBase,
	      zoomMin,
	      zoomMinInline,
	      zoomMinBlock,
	      zoomOrigin,
	      zoomOriginInline,
	      zoomOriginBlock
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with Zoom, Slide, and Fade effects.
	 *
	 * Note that this is basically just shorthand for some prop creation and prop merging functions.
	 *
	 * @see `Transitionable` `Slide` `Zoom` `Fade`
	 */

	forwardElementRef(function SlideZoomFade(_ref, ref) {
	  let {
	    classBase,
	    fadeMin,
	    fadeMax,
	    show,
	    ...rest
	  } = _ref;
	  return v$1(SlideZoom, {
	    show: show,
	    ...useCreateFadeProps({
	      classBase,
	      fadeMin,
	      fadeMax
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
	 */

	function useCreateFlipProps(_ref, otherProps) {
	  var _classBase, _flipAngleInline, _flipAngleBlock, _flipAngleInline2, _flipAngleBlock2;

	  let {
	    classBase,
	    flipAngleInline,
	    flipAngleBlock,
	    perspective
	  } = _ref;
	  (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
	  const lastValidTargetInline = h((_flipAngleInline = flipAngleInline) !== null && _flipAngleInline !== void 0 ? _flipAngleInline : 180);
	  const lastValidTargetBlock = h((_flipAngleBlock = flipAngleBlock) !== null && _flipAngleBlock !== void 0 ? _flipAngleBlock : 0);
	  y(() => {
	    if (flipAngleInline) lastValidTargetInline.current = flipAngleInline;
	  }, [flipAngleInline]);
	  y(() => {
	    if (flipAngleBlock) lastValidTargetBlock.current = flipAngleBlock;
	  }, [flipAngleBlock]);
	  if (flipAngleInline == 0) flipAngleInline = lastValidTargetInline.current;
	  if (flipAngleBlock == 0) flipAngleBlock = lastValidTargetBlock.current;
	  return useMergedProps()({
	    className: `${classBase}-flip`,
	    classBase,
	    style: {
	      [`--${classBase}-flip-angle-inline`]: `${(_flipAngleInline2 = flipAngleInline) !== null && _flipAngleInline2 !== void 0 ? _flipAngleInline2 : 0}deg`,
	      [`--${classBase}-flip-angle-block`]: `${(_flipAngleBlock2 = flipAngleBlock) !== null && _flipAngleBlock2 !== void 0 ? _flipAngleBlock2 : 0}deg`,
	      [`--${classBase}-perspective`]: `${perspective !== null && perspective !== void 0 ? perspective : 800}px`
	    }
	  }, otherProps);
	}
	/**
	 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Flip effect.
	 *
	 * Provide the direction the element will travel in with `flipInline` and `flipBlock`,
	 * with `1` being `100%` of the element's width or height.
	 *
	 * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
	 * which allows for convenient setups inside of a `SwapContainer`
	 * (`flipInline={index - selectedIndex}` or similar.)
	 *
	 * @see `Transitionable`
	 */

	forwardElementRef(function Flip(_ref2, ref) {
	  let {
	    classBase,
	    flipAngleInline,
	    flipAngleBlock,
	    perspective,
	    show,
	    ...rest
	  } = _ref2;
	  return v$1(Transitionable, {
	    show: show,
	    ...useCreateFlipProps({
	      classBase,
	      flipAngleInline,
	      flipAngleBlock,
	      perspective
	    }, { ...rest,
	      ref
	    })
	  });
	});

	/**
	 * Creates a set of props that implement a swap container.
	 * Be sure to merge these returned props with whatever the user passed in.
	 */

	function useCreateSwappableProps(_ref, otherProps) {
	  let {
	    inline,
	    classBase
	  } = _ref;
	  return useMergedProps()({
	    className: clsx(`${classBase !== null && classBase !== void 0 ? classBase : "transition"}-swap-container`, inline && `${classBase !== null && classBase !== void 0 ? classBase : "transition"}-swap-container-inline`)
	  }, otherProps);
	}
	/**
	 * Allows a set of child <Transitionable> components to animate in & out in-place. Very useful for, e.g., tab panels.
	 *
	 * You must manage each child `<Transitionable>` component's `show` prop -- this component *does not* manage any sort of state in that regard.
	 *
	 * Like `<Transitionable>`, *this wraps an HTMLElement (or other ref-forwarding component)*. This will be your container that holds each `<Transitionable>` (or component that uses it). Strictly speaking it could be anything, not a `<Transitionable>`, but if it doesnt't transition out then it's just going to be hanging around 100% of the time.
	 *
	 * Long way of saying, if you get a cryptic error with this component, make sure it has a single `<div>` child or something.
	 * @param param0
	 * @returns
	 */

	const Swappable = forwardElementRef(function Swappable(_ref2, ref) {
	  var _inline;

	  let {
	    children,
	    classBase,
	    inline,
	    ...p
	  } = _ref2;
	  (_inline = inline) !== null && _inline !== void 0 ? _inline : inline = typeof children.type === "string" && inlineElements.has(children.type);
	  const transitionProps = useCreateSwappableProps({
	    classBase,
	    inline
	  }, { ...p,
	    ref
	  });
	  const mergedWithChildren = useMergedProps()(transitionProps, children.props);
	  return B(children, mergedWithChildren);
	}); // If "inline" isn't explicitly provided, we try to implicitly do it based on the child's tag.
	// Not perfect, but it's not supposed to be. `inline` is for perfect.

	const inlineElements = new Set(["a", "abbr", "acronym", "audio", "b", "bdi", "bdo", "big", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "mark", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "tt", "var", "video", "wbr"]);

	/**
	 * Internal helper to trim the crusts off of a hash path.
	 * @param hash
	 * @returns
	 */

	function trimHash(hash) {
	  if (hash.startsWith("#")) hash = hash.substr(1);
	  if (hash.startsWith("/")) hash = hash.substr(1);
	  if (hash.endsWith("/")) hash = hash.substr(0, hash.length - 1);
	  return hash;
	}
	function normalizeHashToPath(hash) {
	  hash = trimHash(hash);
	  return hash.split("/");
	} // Not public -- just contains shared code for history modification.
	// This is what actually changes History and updates the window's URL.

	function useSetEntireHash() {
	  return A$1((hash, action) => {
	    var _action;

	    (_action = action) !== null && _action !== void 0 ? _action : action = "push";
	    hash = trimHash(hash);
	    let oldURL = window.location.toString();
	    let nextUrl = new URL(window.location.toString());
	    nextUrl.hash = `#${hash}`;
	    history[`${action}State`]({}, document.title, nextUrl); // Modifying history doesn't actually cause a hashchange event.

	    window.dispatchEvent(new HashChangeEvent('hashchange', {
	      oldURL,
	      newURL: nextUrl.toString()
	    }));
	  }, []);
	}
	/**
	 * Modifies the given Search Params object to have its key be set to the given value.
	 *
	 * Specifically for boolean types this ensures that the param is simply existant/non-existant,
	 * but for other types this is pretty straightforward.
	 * @param params
	 * @param key
	 * @param value
	 * @param type
	 */

	function unparseParam(params, key, value, type) {
	  if (type === "boolean") {
	    if (value === true) {
	      params.set(key, "");
	    } else {
	      params.delete(key);
	    }
	  } else {
	    params.set(key, `${value}`);
	  }
	}
	/**
	 * Parses the requested Search Param from the given URL.
	 *
	 * The type will be automatically parsed with special handling for booleans
	 */

	function parseParam(url, key, type) {
	  let value = url.searchParams.get(key);

	  switch (type) {
	    case "string":
	      return value !== null && value !== void 0 ? value : null;

	    case "boolean":
	      return value != null;

	    case "number":
	      if (value == null) return null;
	      let parsed = +value;
	      if (isFinite(parsed)) return parsed;
	      return null;

	    case "bigint":
	      if (value == null) return null;

	      try {
	        return BigInt(value);
	      } catch (ex) {
	        return null;
	      }

	  }

	  return value !== null && value !== void 0 ? value : null;
	}

	/**
	 * Removes the directory at the current level, effectively returning
	 * to the previous level.  You can also switch to a different
	 * previous level if you would like.
	 */

	function usePopLocalPath(level) {
	  const setEntireHash = useSetEntireHash();
	  return A$1(function popLocalHash(dir) {
	    let action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "push";
	    const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
	    let newHashPath = oldHashPath.slice(0, level).map(s => s !== null && s !== void 0 ? s : "");

	    if (dir) {
	      dir = trimHash(dir);
	      newHashPath[newHashPath.length - 1] = dir;
	    }

	    setEntireHash(newHashPath.join("/"), action);
	  }, [level]);
	}

	/**
	 * Adds a directory at one level deeper.
	 */

	function usePushLocalPath(level) {
	  const setEntireHash = useSetEntireHash(); //const level = useContext(RouterLevelContext);

	  return A$1(function pushLocalHash(dir) {
	    let action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "push";
	    let keepTrailing = arguments.length > 2 ? arguments[2] : undefined;
	    dir = trimHash(dir);
	    const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
	    let newHashPath = oldHashPath.slice(0, keepTrailing ? undefined : level + 1).map(s => s !== null && s !== void 0 ? s : "");
	    newHashPath.splice(level + 1, 1, dir);
	    setEntireHash(newHashPath.join("/"), action);
	  }, [level]);
	}

	/**
	 * Replaces the directory at the current level with a new one. You can
	 * choose whether or not any trailing paths are kept -- by default this is false.
	 * @returns
	 */

	function useSetLocalPath(level) {
	  const setEntireHash = useSetEntireHash();
	  return A$1(function setLocalHash(dir) {
	    let action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "push";
	    let keepTrailing = arguments.length > 2 ? arguments[2] : undefined;
	    dir = trimHash(dir);
	    const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
	    let newHashPath = oldHashPath.slice(0, keepTrailing ? undefined : level + 1).map(s => s !== null && s !== void 0 ? s : "");
	    newHashPath.splice(level, 1, dir);
	    setEntireHash(newHashPath.join("/"), action);
	  }, [level]);
	}

	/**
	 * Relatively low-level hook that allows you to inspect
	 * when the entire URL changes, either because the hash changed,
	 * or because the Back/Forward browser buttons were pressed.
	 *
	 * (Changing query parameters reloads the page and so isn't
	 * tracked, unless of course it's because of the browser
	 * navigating back/forwards).
	 *
	 * In general, you'll want to inspect a specific directory of
	 * a path, or a specific query parameter value, not the
	 * entire URL.
	 */

	function useUrl(onUrlChange) {
	  const [getUrl, setUrl] = usePassiveState(useStableCallback(onUrlChange), useStableCallback(() => window.location.toString()));
	  useGlobalHandler(window, "hashchange", e => {
	    setUrl(window.location.toString());
	  });
	  useGlobalHandler(window, "popstate", e => {
	    // https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event#the_history_stack
	    // TODO: If this assert never fires, it's *probably* fine??
	    console.assert(window.location.toString() === document.location.toString());
	    setUrl(window.location.toString());
	  });
	  return [getUrl, setUrl];
	}

	/**
	 * `useEffect`, but the effect runs whenever the local directory changes.
	 * @param callback Same as `useEffect`'s callback
	 */

	function useLocalPath(level, callback) {
	  //const level = useContext(RouterLevelContext);
	  const [getLocalPath, setLocalPath] = usePassiveState(callback);
	  useUrl(url => {
	    var _newHashPath$level;

	    const newHashPath = normalizeHashToPath(trimHash(new URL(url).hash));
	    setLocalPath((_newHashPath$level = newHashPath[level]) !== null && _newHashPath$level !== void 0 ? _newHashPath$level : null);
	  });
	  return [getLocalPath, setLocalPath];
	}

	const RouterContext = D(null);

	function returnFalse() {
	  return false;
	}
	/**
	 * The "parent" part of a router.
	 *
	 * This is responsible for coordinating, among all children, which route to show.
	 * This coordination is really only needed for the "default" pathway, which
	 * needs to know as painlessly as possible whether any of its siblings are currently valid.
	 *
	 * It also increases the depth by one, starting at depth=-1 for the root router is *just* a parent.
	 */


	function useRouterProvider() {
	  var _useContext;

	  const level = (_useContext = F(RouterContext)) === null || _useContext === void 0 ? void 0 : _useContext.level;
	  const {
	    useManagedChild: useRouterChild,
	    mountedChildren
	  } = useChildManager(); // Any time the number of matching children changes to or from 0,
	  // we notify all children so that they can show/hide themselves accordingly
	  // depending on if they are a "default" router or not.

	  const onChildrenMatchCountChange = A$1(anyMatches => {
	    for (let child of mountedChildren) {
	      child === null || child === void 0 ? void 0 : child.notifyOfSiblingsHaveNoMatches(!anyMatches);
	    }
	  }, []);
	  const [anyMatchesAmongChildren, setAnyMatchesAmongChildren] = usePassiveState(onChildrenMatchCountChange, returnFalse); // Keep track of the number of children currently matching

	  const matchIndices = h(new Set());
	  const matchChangeHandler = A$1((index, matches) => {
	    if (matches) {
	      matchIndices.current.add(index);
	    } else {
	      matchIndices.current.delete(index);
	    }

	    setAnyMatchesAmongChildren(matchIndices.current.size != 0);
	  }, []);
	  return _(() => ({
	    matchChangeHandler,
	    useRouterChild,
	    level: (level !== null && level !== void 0 ? level : -2) + 1
	  }), [matchChangeHandler, level, useRouterChild]);
	}

	/**
	 * Allows easy access to the controls at the current level.
	 *
	 * You can also get this information from a child <Router />
	 * by passing in a ref (e.g. <Router ref={setControls} />).
	 */

	function useRouterControls() {
	  const {
	    level,
	    matchChangeHandler,
	    useRouterChild
	  } = F(RouterContext); // This is the hash at this level specifically, 
	  // so it contains no directory separators.

	  const popLocalPath = usePopLocalPath(level);
	  const setLocalPath = useSetLocalPath(level);
	  const pushLocalPath = usePushLocalPath(level);
	  const [getLocalPath] = useLocalPath(level);
	  return _(() => ({
	    getLocalPath,
	    popLocalPath,
	    pushLocalPath,
	    setLocalPath,
	    level
	  }), [level, getLocalPath, popLocalPath, pushLocalPath, setLocalPath]);
	}

	/**
	 * Inspects the local path at this level and returns wither or not
	 * it is a match for the given criteria.
	 *
	 * @param requestedLocalHash A string to match against exactly, a `RegExp` to `.test` with, or a function that returns true if the comparison should be considered a match.
	 */

	function useLocalPathMatches(level, requestedLocalHash) {
	  const [matches, setMatches] = m(false);
	  useLocalPath(level, A$1(localPath => {
	    var _localPath;

	    let matches;
	    (_localPath = localPath) !== null && _localPath !== void 0 ? _localPath : localPath = "";
	    if (requestedLocalHash instanceof RegExp) matches = requestedLocalHash.test(localPath);else if (requestedLocalHash instanceof Function) matches = requestedLocalHash(localPath);else matches = requestedLocalHash === localPath;
	    setMatches(matches);
	  }, []));
	  return matches;
	}

	/**
	 * The "child" part of a router.
	 *
	 * This is responsible for observing the current directory in the hash,
	 * and notifying the parent any time it becomes valid/invalid, because
	 * if this path and all its siblings are invalid at the same time,
	 * the default path is allowed to be shown.
	 */

	function useRouterConsumer(_ref) {
	  let {
	    localPath
	  } = _ref;
	  const {
	    level,
	    matchChangeHandler,
	    useRouterChild
	  } = F(RouterContext);
	  const [siblingsHaveNoMatches, setSiblingsHaveNoMatches] = useState(false);
	  const index = _(() => (localPath !== null && localPath !== void 0 ? localPath : "") + `-${Math.random()}`, [localPath !== null && localPath !== void 0 ? localPath : ""]);
	  let matches = useLocalPathMatches(level, localPath !== null && localPath !== void 0 ? localPath : "");
	  const contextFromParent = F(RouterContext); // Any time our match status changes, notify the parent.
	  // This is how siblingsHaveNoMatches changes.

	  useEffect(() => {
	    matchChangeHandler === null || matchChangeHandler === void 0 ? void 0 : matchChangeHandler(index, matches);
	    return () => matchChangeHandler === null || matchChangeHandler === void 0 ? void 0 : matchChangeHandler(index, false);
	  }, [matchChangeHandler, index, matches]); // Handle some special cases related to matching:

	  if (contextFromParent == null || contextFromParent.level < 0) {
	    // The root-most router always displays, because
	    // it's mostly here as a formality for context management anyway.
	    matches = true;
	    console.assert(!localPath, `The root Router always displays and will ignore the path "${localPath}".`);
	  } else if (localPath == null) {
	    // If this is a "default" router, then we show only if
	    // our parent Router has told us that none of our
	    // sibling routers are currently displaying.
	    matches = siblingsHaveNoMatches;
	  } // Collect some things that the <Component /> will need to display itself.


	  const infoFromParent = useRouterChild === null || useRouterChild === void 0 ? void 0 : useRouterChild({
	    index,
	    notifyOfSiblingsHaveNoMatches: setSiblingsHaveNoMatches
	  });
	  const useManagedChildProps2 = infoFromParent === null || infoFromParent === void 0 ? void 0 : infoFromParent.useManagedChildProps;
	  const getElement2 = infoFromParent === null || infoFromParent === void 0 ? void 0 : infoFromParent.getElement;
	  const useManagedChildProps = A$1(props => {
	    var _useManagedChildProps;

	    return (_useManagedChildProps = useManagedChildProps2 === null || useManagedChildProps2 === void 0 ? void 0 : useManagedChildProps2(props)) !== null && _useManagedChildProps !== void 0 ? _useManagedChildProps : props;
	  }, []);
	  const getElement = A$1(() => {
	    var _getElement;

	    return (_getElement = getElement2 === null || getElement2 === void 0 ? void 0 : getElement2()) !== null && _getElement !== void 0 ? _getElement : null;
	  }, []);
	  return {
	    useManagedChildProps,
	    getElement,
	    matches,
	    level,
	    siblingsHaveNoMatches
	  };
	}

	const RouterProvider = x(RouterProviderImpl);

	function RouterProviderImpl(_ref2) {
	  let {
	    children
	  } = _ref2;
	  const {
	    level,
	    matchChangeHandler,
	    useRouterChild
	  } = useRouterProvider();
	  return v$1(RouterContext.Provider, {
	    value: _(() => ({
	      level,
	      matchChangeHandler,
	      useRouterChild
	    }), [level, matchChangeHandler, useRouterChild])
	  }, children);
	}

	const RouterConsumer = x(RouterConsumerImpl);

	function RouterConsumerImpl(_ref3, ref) {
	  var _ref4;

	  let {
	    Transition,
	    children,
	    localPath,
	    ...rest
	  } = _ref3;
	  const {
	    useManagedChildProps,
	    getElement,
	    matches
	  } = useRouterConsumer({
	    localPath
	  });
	  const backupRef = h(null);
	  (_ref4 = ref) !== null && _ref4 !== void 0 ? _ref4 : ref = backupRef;
	  const {
	    getLocalPath,
	    popLocalPath,
	    pushLocalPath,
	    setLocalPath: setLocalPath,
	    level
	  } = useRouterControls();
	  s(ref, () => ({
	    level,
	    getElement,
	    getLocalPath,
	    popLocalPath,
	    pushLocalPath,
	    setLocalPath
	  }), [level, getElement, getLocalPath, popLocalPath, pushLocalPath, setLocalPath]);
	  let TransitionImpl = Transition;
	  const DefaultTransition = F(RouterTransitionContext);

	  if (!TransitionImpl) {
	    TransitionImpl = DefaultTransition;
	  }

	  return v$1(TransitionImpl, {
	    show: matches,
	    ...rest
	  }, v$1("div", { ...useManagedChildProps({
	      className: "router",
	      "data-level": `${level}`,
	      'data-path': typeof localPath == "string" ? localPath : undefined,
	      children
	    })
	  }));
	}

	function RouterImpl(props, ref) {
	  return v$1(RouterProvider, null, v$1(RouterConsumer, { ...props,
	    ref: ref
	  }));
	}

	const Router = x(RouterImpl); // Extremely simple "transition" that just swaps children in and out without animating them.

	const DefaultTransition = x(function DefaultTransition(_ref5, ref) {
	  let {
	    show,
	    children,
	    ...rest
	  } = _ref5;
	  if (show) return v$1(d$1, null, B(children, useMergedProps()({
	    ref,
	    ...children.props
	  }, rest)));
	  return null;
	});
	const RouterTransitionContext = D(DefaultTransition);

	/**
	 * Provides access to the requested Search Param's value
	 *
	 * Note that while this function is like usePassiveState (itself like useState and useEffect combined),
	 * the `setState` return function is, due to browser limitations, not syncronous, but that's
	 * like most calls to `setState` anyway I guess?
	 *
	 * @param paramKey The name of the URL search parameter to reference
	 * @param type The type of data encode/decode (`"string"` | `"boolean"` | `"number"` | `"bigint"`)
	 * @param onParamValueChanged Will be called any time the requested Search Parameter's value changes.
	 */

	function useSearchParams(paramKey, type, onParamValueChanged) {
	  // We keep a local copy of our current Search Param value
	  // because changing it is actually an asyncronous operation
	  // and we can't know when it ends aside from just "did the URL change or not"
	  // so we might as well keep this state around locally to compensate.
	  const [savedParamValue, setSavedParamValue] = m(null);
	  const onParamValueChangedStable = useStableCallback(onParamValueChanged !== null && onParamValueChanged !== void 0 ? onParamValueChanged : () => {});
	  y(() => {
	    return onParamValueChangedStable(savedParamValue);
	  }, [savedParamValue]);
	  const setParamWithHistory = useStableCallback((newParamValue, reason) => {
	    let newParams = new URLSearchParams(new URL(window.location.toString()).searchParams);
	    unparseParam(newParams, paramKey, newParamValue, type);
	    let nextUrl = new URL(window.location.toString());
	    nextUrl.search = prettyPrintParams(newParams);
	    history[`${reason !== null && reason !== void 0 ? reason : "replace"}State`]({}, document.title, nextUrl); // Changing the Search Params won't fire a hashchange event (I mean, obviously I guess, but)
	    // so instead we need to forcibly have a popstate event fire, as the only one we can use here.
	    //
	    // We do that by just pushing another copy of our destination to the history stack
	    // and immediatly returning to it.

	    history.pushState({}, document.title, nextUrl);
	    history.back();
	  }); // Any time the URL changes, it means the Search Param we care about might have changed.
	  // Parse it out and save it.

	  useUrl(useStableCallback(url => {
	    const newParam = parseParam(new URL(url), paramKey, type);
	    setSavedParamValue(newParam);
	  }));
	  return [savedParamValue, setParamWithHistory];
	}

	function prettyPrintParams(params) {
	  const paramArray = [...params.entries()].filter((key, value) => value != null);
	  if (paramArray.length == 0) return "";
	  let queryString = paramArray.map(_ref => {
	    let [key, value] = _ref;
	    if (value === "" || value === true) return `${encodeURIComponent(key)}`;else return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
	  }).join("&");
	  return `?${queryString}`;
	}

	const Component = () => {
	    const [{ popLocalPath: popLocalHash, pushLocalPath: pushLocalHash, setLocalPath: setLocalHash, getLocalPath: getLocalHash }, setRouteControls] = useState({});
	    return (v$1(Router, { ref: setRouteControls },
	        v$1(Level0, null)));
	};
	function Level0() {
	    useState(null);
	    return (v$1("div", { class: "level" },
	        "This is within level 0.",
	        v$1("div", { class: "level" },
	            "This is just outside level 1.",
	            v$1(Swappable, null,
	                v$1("div", null,
	                    v$1(Level1, null))))));
	}
	function Level1() {
	    const [{ popLocalPath: popLocalHash, pushLocalPath: pushLocalHash, setLocalPath: setLocalHash, getLocalPath: getLocalHash }, setRouteControls] = useState({});
	    return (v$1(d$1, null,
	        v$1(Router, { localPath: "", ref: setRouteControls },
	            v$1("div", null, "Within level 1, at level 0's default path"),
	            v$1("button", { onClick: () => setLocalHash?.("test1") }, "test1"),
	            v$1("button", { onClick: () => setLocalHash?.("test2") }, "test2")),
	        v$1(Router, { localPath: "test1" },
	            v$1("div", null, "Within level 1, at level 0's test1 path"),
	            v$1("div", null,
	                v$1(Test1, null))),
	        v$1(Router, { localPath: "test2" },
	            v$1("div", null, "Within level 1, at level 0's test2 path"),
	            v$1("div", null,
	                v$1(Test2, null)))));
	}
	function Test1() {
	    const [{ popLocalPath: popHash1, pushLocalPath: pushHash1, setLocalPath: setHash1 }, setRouteControls] = useState({});
	    return (v$1("div", { class: "level" },
	        "Level 1, Test1",
	        v$1("button", { onClick: () => { debugger; pushHash1?.("testa"); } }, "testA"),
	        v$1(Router, { ref: setRouteControls, localPath: "testa" }, "A")));
	}
	function Test2() {
	    useState(null);
	    const [route1Controls, setRoute1Controls] = useState(null);
	    const [param, setParam] = useSearchParams("param", "boolean");
	    console.log(param == null ? "<null>" : param);
	    return (v$1(d$1, null,
	        "Test2: \"",
	        param == null ? "<null>" : param,
	        "\".",
	        v$1(Swappable, null,
	            v$1("span", null,
	                v$1(Router, { ref: setRoute1Controls, localPath: "" },
	                    "Test2",
	                    v$1("button", { onClick: () => route1Controls?.setLocalPath?.("testa") }, "testA")),
	                v$1(Router, { ref: setRoute1Controls, localPath: "testa" },
	                    v$1("div", null, "A"),
	                    v$1("label", null,
	                        v$1("input", { checked: param ?? false, type: "checkbox", onInput: e => { e.preventDefault(); setParam(e.currentTarget.checked); } }),
	                        "Checkbox"))))));
	}
	requestAnimationFrame(() => {
	    S$1(v$1(Component, null), document.getElementById("root"));
	});

})();
