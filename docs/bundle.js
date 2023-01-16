(function () {
    'use strict';

    var n,
      l$2,
      u$2,
      t$1,
      o$2,
      r$2,
      f$2 = {},
      e$1 = [],
      c$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function s$2(n, l) {
      for (var u in l) n[u] = l[u];
      return n;
    }
    function a$2(n) {
      var l = n.parentNode;
      l && l.removeChild(n);
    }
    function h$2(l, u, i) {
      var t,
        o,
        r,
        f = {};
      for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
      if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
      return v$2(l, f, t, o, null);
    }
    function v$2(n, i, t, o, r) {
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
        __v: null == r ? ++u$2 : r
      };
      return null == r && null != l$2.vnode && l$2.vnode(f), f;
    }
    function p$2(n) {
      return n.children;
    }
    function d$2(n, l) {
      this.props = n, this.context = l;
    }
    function _$1(n, l) {
      if (null == l) return n.__ ? _$1(n.__, n.__.__k.indexOf(n) + 1) : null;
      for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
      return "function" == typeof n.type ? _$1(n) : null;
    }
    function k$2(n) {
      var l, u;
      if (null != (n = n.__) && null != n.__c) {
        for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
          n.__e = n.__c.base = u.__e;
          break;
        }
        return k$2(n);
      }
    }
    function b$1(n) {
      (!n.__d && (n.__d = !0) && t$1.push(n) && !g$2.__r++ || o$2 !== l$2.debounceRendering) && ((o$2 = l$2.debounceRendering) || setTimeout)(g$2);
    }
    function g$2() {
      for (var n; g$2.__r = t$1.length;) n = t$1.sort(function (n, l) {
        return n.__v.__b - l.__v.__b;
      }), t$1 = [], n.some(function (n) {
        var l, u, i, t, o, r;
        n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s$2({}, t)).__v = t.__v + 1, j$1(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _$1(t) : o, t.__h), z$2(u, t), t.__e != o && k$2(t)));
      });
    }
    function w$2(n, l, u, i, t, o, r, c, s, a) {
      var h,
        y,
        d,
        k,
        b,
        g,
        w,
        x = i && i.__k || e$1,
        C = x.length;
      for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v$2(null, k, null, null, k) : Array.isArray(k) ? v$2(p$2, {
        children: k
      }, null, null, null) : k.__b > 0 ? v$2(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {
        if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;else for (y = 0; y < C; y++) {
          if ((d = x[y]) && k.key == d.key && k.type === d.type) {
            x[y] = void 0;
            break;
          }
          d = null;
        }
        j$1(n, k, d = d || f$2, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m$1(k, s, n) : s = A$1(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _$1(d));
      }
      for (u.__e = g, h = C; h--;) null != x[h] && N$1(x[h], x[h]);
      if (w) for (h = 0; h < w.length; h++) M(w[h], w[++h], w[++h]);
    }
    function m$1(n, l, u) {
      for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m$1(i, l, u) : A$1(u, i, i, t, i.__e, l));
      return l;
    }
    function x$1(n, l) {
      return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
        x$1(n, l);
      }) : l.push(n)), l;
    }
    function A$1(n, l, u, i, t, o) {
      var r, f, e;
      if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
        for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
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
      "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c$2.test(l) ? u : u + "px";
    }
    function H$1(n, l, u, i, t) {
      var o;
      n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;else {
          if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
          if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
        }
      } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T$2 : I$1, o) : n.removeEventListener(l, o ? T$2 : I$1, o);else if ("dangerouslySetInnerHTML" !== l) {
        if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
          n[l] = null == u ? "" : u;
          break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
      }
    }
    function I$1(n) {
      this.l[n.type + !1](l$2.event ? l$2.event(n) : n);
    }
    function T$2(n) {
      this.l[n.type + !0](l$2.event ? l$2.event(n) : n);
    }
    function j$1(n, u, i, t, o, r, f, e, c) {
      var a,
        h,
        v,
        y,
        _,
        k,
        b,
        g,
        m,
        x,
        A,
        C,
        $,
        H,
        I,
        T = u.type;
      if (void 0 !== u.constructor) return null;
      null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l$2.__b) && a(u);
      try {
        n: if ("function" == typeof T) {
          if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d$2(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s$2({}, h.__s)), s$2(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
            if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
              for (h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
                n && (n.__ = u);
              }), A = 0; A < h._sb.length; A++) h.__h.push(h._sb[A]);
              h._sb = [], h.__h.length && f.push(h);
              break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
              h.componentDidUpdate(y, _, k);
            });
          }
          if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l$2.__r, $ = 0, "prototype" in T && T.prototype.render) {
            for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
            h._sb = [];
          } else do {
            h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
          } while (h.__d && ++$ < 25);
          h.state = h.__s, null != h.getChildContext && (t = s$2(s$2({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p$2 && null == a.key ? a.props.children : a, w$2(n, Array.isArray(I) ? I : [I], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
        } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L$1(i.__e, u, i, t, o, r, f, c);
        (a = l$2.diffed) && a(u);
      } catch (n) {
        u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l$2.__e(n, u, i);
      }
    }
    function z$2(n, u) {
      l$2.__c && l$2.__c(u, n), n.some(function (u) {
        try {
          n = u.__h, u.__h = [], n.some(function (n) {
            n.call(u);
          });
        } catch (n) {
          l$2.__e(n, u.__v);
        }
      });
    }
    function L$1(l, u, i, t, o, r, e, c) {
      var s,
        h,
        v,
        y = i.props,
        p = u.props,
        d = u.type,
        k = 0;
      if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
        l = s, r[k] = null;
        break;
      }
      if (null == l) {
        if (null === d) return document.createTextNode(p);
        l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
      }
      if (null === d) y === p || c && l.data === p || (l.data = p);else {
        if (r = r && n.call(l.childNodes), h = (y = i.props || f$2).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
          if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) y[l.attributes[k].name] = l.attributes[k].value;
          (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
        }
        if (C$1(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w$2(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _$1(i, 0), c), null != r) for (k = r.length; k--;) null != r[k] && a$2(r[k]);
        c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H$1(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H$1(l, "checked", k, y.checked, !1));
      }
      return l;
    }
    function M(n, u, i) {
      try {
        "function" == typeof n ? n(u) : n.current = u;
      } catch (n) {
        l$2.__e(n, i);
      }
    }
    function N$1(n, u, i) {
      var t, o;
      if (l$2.unmount && l$2.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
          t.componentWillUnmount();
        } catch (n) {
          l$2.__e(n, u);
        }
        t.base = t.__P = null, n.__c = void 0;
      }
      if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N$1(t[o], u, i || "function" != typeof n.type);
      i || null == n.__e || a$2(n.__e), n.__ = n.__e = n.__d = void 0;
    }
    function O(n, l, u) {
      return this.constructor(n, u);
    }
    function P(u, i, t) {
      var o, r, e;
      l$2.__ && l$2.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j$1(i, u = (!o && t || i).__k = h$2(p$2, null, [u]), r || f$2, f$2, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z$2(e, u);
    }
    function q$1(l, u, i) {
      var t,
        o,
        r,
        f = s$2({}, l.props);
      for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
      return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v$2(l.type, f, t || l.key, o || l.ref, null);
    }
    function B$2(n, l) {
      var u = {
        __c: l = "__cC" + r$2++,
        __: n,
        Consumer: function (n, l) {
          return n.children(l);
        },
        Provider: function (n) {
          var u, i;
          return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
            return i;
          }, this.shouldComponentUpdate = function (n) {
            this.props.value !== n.value && u.some(b$1);
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
    n = e$1.slice, l$2 = {
      __e: function (n, l, u, i) {
        for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {
          if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
        } catch (l) {
          n = l;
        }
        throw n;
      }
    }, u$2 = 0, d$2.prototype.setState = function (n, l) {
      var u;
      u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$2({}, this.state), "function" == typeof n && (n = n(s$2({}, u), this.props)), n && s$2(u, n), null != n && this.__v && (l && this._sb.push(l), b$1(this));
    }, d$2.prototype.forceUpdate = function (n) {
      this.__v && (this.__e = !0, n && this.__h.push(n), b$1(this));
    }, d$2.prototype.render = p$2, t$1 = [], g$2.__r = 0, r$2 = 0;

    var t,
      r$1,
      u$1,
      i$1,
      o$1 = 0,
      f$1 = [],
      c$1 = [],
      e = l$2.__b,
      a$1 = l$2.__r,
      v$1 = l$2.diffed,
      l$1 = l$2.__c,
      m = l$2.unmount;
    function d$1(t, u) {
      l$2.__h && l$2.__h(r$1, t, o$1 || u), o$1 = 0;
      var i = r$1.__H || (r$1.__H = {
        __: [],
        __h: []
      });
      return t >= i.__.length && i.__.push({
        __V: c$1
      }), i.__[t];
    }
    function p$1(n) {
      return o$1 = 1, y$1(B$1, n);
    }
    function y$1(n, u, i) {
      var o = d$1(t++, 2);
      if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B$1(void 0, u), function (n) {
        var t = o.__N ? o.__N[0] : o.__[0],
          r = o.t(t, n);
        t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
      }], o.__c = r$1, !r$1.u)) {
        r$1.u = !0;
        var f = r$1.shouldComponentUpdate;
        r$1.shouldComponentUpdate = function (n, t, r) {
          if (!o.__c.__H) return !0;
          var u = o.__c.__H.__.filter(function (n) {
            return n.__c;
          });
          if (u.every(function (n) {
            return !n.__N;
          })) return !f || f.call(this, n, t, r);
          var i = !1;
          return u.forEach(function (n) {
            if (n.__N) {
              var t = n.__[0];
              n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
            }
          }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
        };
      }
      return o.__N || o.__;
    }
    function h$1(u, i) {
      var o = d$1(t++, 3);
      !l$2.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r$1.__H.__h.push(o));
    }
    function s$1(u, i) {
      var o = d$1(t++, 4);
      !l$2.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r$1.__h.push(o));
    }
    function _(n) {
      return o$1 = 5, F$1(function () {
        return {
          current: n
        };
      }, []);
    }
    function A(n, t, r) {
      o$1 = 6, s$1(function () {
        return "function" == typeof n ? (n(t()), function () {
          return n(null);
        }) : n ? (n.current = t(), function () {
          return n.current = null;
        }) : void 0;
      }, null == r ? r : r.concat(n));
    }
    function F$1(n, r) {
      var u = d$1(t++, 7);
      return z$1(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
    }
    function T$1(n, t) {
      return o$1 = 8, F$1(function () {
        return n;
      }, t);
    }
    function q(n) {
      var u = r$1.context[n.__c],
        i = d$1(t++, 9);
      return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r$1)), u.props.value) : n.__;
    }
    function b() {
      for (var t; t = f$1.shift();) if (t.__P && t.__H) try {
        t.__H.__h.forEach(k$1), t.__H.__h.forEach(w$1), t.__H.__h = [];
      } catch (r) {
        t.__H.__h = [], l$2.__e(r, t.__v);
      }
    }
    l$2.__b = function (n) {
      r$1 = null, e && e(n);
    }, l$2.__r = function (n) {
      a$1 && a$1(n), t = 0;
      var i = (r$1 = n.__c).__H;
      i && (u$1 === r$1 ? (i.__h = [], r$1.__h = [], i.__.forEach(function (n) {
        n.__N && (n.__ = n.__N), n.__V = c$1, n.__N = n.i = void 0;
      })) : (i.__h.forEach(k$1), i.__h.forEach(w$1), i.__h = [])), u$1 = r$1;
    }, l$2.diffed = function (t) {
      v$1 && v$1(t);
      var o = t.__c;
      o && o.__H && (o.__H.__h.length && (1 !== f$1.push(o) && i$1 === l$2.requestAnimationFrame || ((i$1 = l$2.requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
        n.i && (n.__H = n.i), n.__V !== c$1 && (n.__ = n.__V), n.i = void 0, n.__V = c$1;
      })), u$1 = r$1 = null;
    }, l$2.__c = function (t, r) {
      r.some(function (t) {
        try {
          t.__h.forEach(k$1), t.__h = t.__h.filter(function (n) {
            return !n.__ || w$1(n);
          });
        } catch (u) {
          r.some(function (n) {
            n.__h && (n.__h = []);
          }), r = [], l$2.__e(u, t.__v);
        }
      }), l$1 && l$1(t, r);
    }, l$2.unmount = function (t) {
      m && m(t);
      var r,
        u = t.__c;
      u && u.__H && (u.__H.__.forEach(function (n) {
        try {
          k$1(n);
        } catch (n) {
          r = n;
        }
      }), u.__H = void 0, r && l$2.__e(r, u.__v));
    };
    var g$1 = "function" == typeof requestAnimationFrame;
    function j(n) {
      var t,
        r = function () {
          clearTimeout(u), g$1 && cancelAnimationFrame(t), setTimeout(n);
        },
        u = setTimeout(r, 100);
      g$1 && (t = requestAnimationFrame(r));
    }
    function k$1(n) {
      var t = r$1,
        u = n.__c;
      "function" == typeof u && (n.__c = void 0, u()), r$1 = t;
    }
    function w$1(n) {
      var t = r$1;
      n.__c = n.__(), r$1 = t;
    }
    function z$1(n, t) {
      return !n || n.length !== t.length || t.some(function (t, r) {
        return t !== n[r];
      });
    }
    function B$1(n, t) {
      return "function" == typeof t ? t(n) : t;
    }

    /**
     * Debug hook.
     *
     * Given a value or set of values, emits a console error if any of them change from one render to the next.
     *
     * Eventually, when useEvent lands, we hopefully won't need this.
     */
    function useEnsureStability(parentHookName, ...values) {
      const helperToEnsureStability = _([]);
      const shownError = _([]);
      useHelper(values.length, -1);
      values.forEach(useHelper);
      return;
      function useHelper(value, i) {
        const index = i + 1;
        // Make sure that the provided functions are perfectly stable across renders
        if (helperToEnsureStability.current[index] === undefined) helperToEnsureStability.current[index] = value;
        if (helperToEnsureStability.current[index] != value) {
          if (!shownError.current[index]) {
            /* eslint-disable no-debugger */
            debugger;
            console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i}-indexed argument (${i >= 0 ? JSON.stringify(values[i]) : "the number of supposedly stable elements"}).`);
            shownError.current[index] = true;
          }
        }
      }
    }
    function debounceRendering(f) {
      (l$2.debounceRendering ?? setTimeout)(f);
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
     * @param customDebounceRendering By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
     * @returns
     */
    function usePassiveState(onChange, getInitialValue, customDebounceRendering) {
      const valueRef = _(Unset$1);
      const reasonRef = _(Unset$1);
      const warningRef = _(false);
      const dependencyToCompareAgainst = _(Unset$1);
      const cleanupCallbackRef = _(undefined);
      // Make sure that the provided functions are perfectly stable across renders
      useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
      // Shared between "dependency changed" and "component unmounted".
      const onShouldCleanUp = T$1(() => {
        const cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback) cleanupCallback();
      }, []);
      // There are a couple places where we'd like to use our initial
      // value in place of having no value at all yet.
      // This is the shared code for that, used on mount and whenever
      // getValue is called.
      const tryEnsureValue = T$1(() => {
        if (valueRef.current === Unset$1 && getInitialValue != undefined) {
          try {
            const initialValue = getInitialValue();
            valueRef.current = initialValue;
            cleanupCallbackRef.current = onChange?.(initialValue, undefined, undefined) ?? undefined;
          } catch (ex) {
            // Exceptions are intentional to allow bailout (without exposing the Unset symbol)
          }
        }
      }, [/* getInitialValue and onChange intentionally omitted */]);
      const getValue = T$1(() => {
        if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
        // The first time we call getValue, if we haven't been given a value yet,
        // (and we were given an initial value to use)
        // return the initial value instead of nothing.
        if (valueRef.current === Unset$1) tryEnsureValue();
        return valueRef.current === Unset$1 ? undefined : valueRef.current;
      }, []);
      s$1(() => {
        // Make sure we've run our effect at least once on mount.
        // (If we have an initial value, of course)
        tryEnsureValue();
      }, []);
      // The actual code the user calls to (possibly) run a new effect.
      const setValue = T$1((arg, reason) => {
        // Regardless of anything else, figure out what our next value is about to be.
        const nextValue = arg instanceof Function ? arg(valueRef.current === Unset$1 ? undefined : valueRef.current) : arg;
        if (dependencyToCompareAgainst.current === Unset$1 && nextValue !== valueRef.current) {
          // This is the first request to change this value.
          // Evaluate the request immediately, then queue up the onChange function
          // Save our current value so that we can compare against it later
          // (if we flip back to this state, then we won't send the onChange function)
          dependencyToCompareAgainst.current = valueRef.current;
          // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately
          valueRef.current = nextValue;
          reasonRef.current = reason;
          // Schedule the actual check and invocation of onChange later to let effects settle
          (customDebounceRendering ?? debounceRendering)(() => {
            const nextReason = reasonRef.current;
            const nextDep = valueRef.current;
            const prevDep = dependencyToCompareAgainst.current;
            if (dependencyToCompareAgainst.current != valueRef.current) {
              warningRef.current = true;
              try {
                // Call any registered cleanup function
                onShouldCleanUp();
                cleanupCallbackRef.current = onChange?.(nextDep, prevDep === Unset$1 ? undefined : prevDep, nextReason) ?? undefined;
                valueRef.current = nextDep;
              } finally {
                // Allow the user to normally call getValue again
                warningRef.current = false;
              }
            }
            // We've finished with everything, so mark us as being on a clean slate again.
            dependencyToCompareAgainst.current = Unset$1;
          });
        }
        // Update the value immediately.
        // This will be checked against prevDep to see if we should actually call onChange
        valueRef.current = nextValue;
      }, []);
      return [getValue, setValue];
    }
    const Unset$1 = Symbol();
    function returnNull() {
      return null;
    }
    function returnZero() {
      return 0;
    }
    /**
     * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
     */
    function runImmediately(f) {
      f();
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
     *
     *
     * (This is here, in this particular file, to avoid circular dependencies
     * without also making a utilities file.
     * Once we can remove this hook, we can put this function back with useRandomId)
     */
    function generateRandomId(prefix) {
      return `${prefix ?? "id-"}${random64Bits().map(n => base64(n)).join("")}`;
    }
    const previousInputs = new Map();
    const toRun = new Map();
    // TODO: Whether this goes in options.diffed or options._commit
    // is a post-suspense question.
    // Right now, using options._commit has the problem of running
    // *after* refs are applied, but we need to come before even that
    // so `ref={someStableFunction}` works.
    // 
    // Also it's private.
    //
    // ...
    // Well, useEvent or whatever is finally, finally 4 years later finally here
    // which is cool and means we won't need this at all soon.
    // So for now we'll stick with diff to prevent any weirdness with
    // commit being private and all.
    const commitName = "diffed";
    const originalCommit = l$2[commitName];
    const newCommit = (...args) => {
      for (const [id, effectInfo] of toRun) {
        const oldInputs = previousInputs.get(id);
        if (argsChanged(oldInputs, effectInfo.inputs)) {
          effectInfo.cleanup?.();
          effectInfo.cleanup = effectInfo.effect();
          previousInputs.set(id, effectInfo.inputs);
        }
      }
      toRun.clear();
      originalCommit?.(...args);
    };
    l$2[commitName] = newCommit;
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
      /*(() => {
          const cleanup = useRef<void | (() => void) | null>(null);
          const prevArgsRef = useRef<Inputs>(null!);
          if (argsChanged(inputs, prevArgsRef.current)) {
              prevArgsRef.current = inputs!;
              if (cleanup.current)
                  cleanup.current();
              cleanup.current = effect();
          }
      })();*/
      const [id] = p$1(() => generateRandomId());
      if (effect) toRun.set(id, {
        effect,
        inputs,
        cleanup: null
      });else toRun.delete(id);
      h$1(() => {
        return () => {
          toRun.delete(id);
          previousInputs.delete(id);
        };
      }, [id]);
    }
    function argsChanged(oldArgs, newArgs) {
      return !!(!oldArgs || oldArgs.length !== newArgs?.length || newArgs?.some((arg, index) => arg !== oldArgs[index]));
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
      const ref = _(Unset);
      useBeforeLayoutEffect(() => {
        ref.current = value;
      }, [value]);
      return T$1(() => {
        if (ref.current === Unset) {
          throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
        }
        return ref.current;
      }, []);
    }
    /**
     * Like `useStableGetter`, but ***requires*** that everything in the object is also stable,
     * and in turn returns an object that itself is stable.
     * @param t
     * @returns
     */
    function useStableObject(t) {
      const e = Object.entries(t);
      useEnsureStability("useStableObject", e.length, ...e.map(([_k, v]) => v));
      return _(t).current;
    }

    /**
     * We keep track of which callbacks are stable with a WeakMap instead of, say, a symbol because
     * `useCallback` will return a function that's stable across *all* renders, meaning
     * we can't use our funny "`if` only works here because it doesn't break the rules of hooks" trick then.
     */
    const map = new WeakMap();
    function isStableGetter(obj) {
      return map.get(obj) ?? false;
    }
    function setIsStableGetter(obj) {
      map.set(obj, true);
      return obj;
    }
    /**
     * Alternate useCallback() which always returns the same (wrapped) function reference
     * so that it can be excluded from the dependency arrays of `useEffect` and friends.
     *
     * In general, just pass the function you want to be stable (but you can't use it during render,
     * so be careful!).  Alternatively, if you need a stable callback that **can** be used
     * during render, pass an empty dependency array and it'll act like `useCallback` with an
     * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
     * truly has no dependencies/only stable dependencies!!
     */
    //export function useStableCallback<T extends (..._args: any[]) => any>(fn: T, noDeps: []): Stable<T>;
    //export function useStableCallback<T extends (..._args: any[]) => any>(fn: T): Stable<T>;
    function useStableCallback(fn, noDeps) {
      useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter(fn));
      if (isStableGetter(fn)) return fn;
      if (noDeps == null) {
        const currentCallbackGetter = useStableGetter(fn);
        return setIsStableGetter(T$1((...args) => {
          return currentCallbackGetter()(...args);
        }, []));
      } else {
        console.assert(noDeps.length === 0);
        return setIsStableGetter(T$1(fn, []));
      }
    }

    function useMergedChildren(lhs, rhs) {
      if (lhs == null && rhs == null) {
        return undefined;
      } else if (lhs == null) {
        return rhs;
      } else if (rhs == null) {
        return lhs;
      } else {
        return h$2(p$2, {}, lhs, rhs);
      }
    }

    function r(e) {
      var t,
        f,
        n = "";
      if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
      return n;
    }
    function clsx() {
      for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
      return n;
    }

    /**
     * Given two sets of props, merges their `class` and `className` properties.
     * Duplicate classes are removed (order doesn't matter anyway).
     *
     * @param lhs Classes of the first component
     * @param rhs Classes of the second component
     * @returns A string representing all combined classes from both arguments.
     */
    function useMergedClasses(lhsClass, lhsClassName, rhsClass, rhsClassName) {
      // Note: For the sake of forward compatibility, this function is labelled as
      // a hook, but as it uses no other hooks it technically isn't one.
      if (lhsClass || rhsClass || lhsClassName || rhsClassName) {
        const lhsClasses = clsx(lhsClass, lhsClassName).split(" ");
        const rhsClasses = clsx(rhsClass, rhsClassName).split(" ");
        const allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)]);
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
        /* eslint-disable no-debugger */
        debugger;
        console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
      }
    }
    /**
     * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
     * @param lhs
     * @param rhs
     * @returns
     */
    function useMergedRefs(rhs, lhs) {
      if (lhs == null && rhs == null) {
        return undefined;
      } else if (lhs == null) {
        return rhs;
      } else if (rhs == null) {
        return lhs;
      } else {
        return combined;
      }
      function combined(current) {
        processRef(current, lhs);
        processRef(current, rhs);
      }
    }

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
      // Easy case, when there are no styles to merge return nothing.
      if (!lhs && !rhs) return undefined;
      if (typeof lhs != typeof rhs) {
        // Easy cases, when one is null and the other isn't.
        if (lhs && !rhs) return lhs;
        if (!lhs && rhs) return rhs;
        // They're both non-null but different types.
        // Convert the string type to an object bag type and run it again.
        if (lhs && rhs) {
          // (useMergedStyles isn't a true hook -- this isn't a violation)
          if (typeof lhs == "string") return useMergedStyles(styleStringToObject(lhs), rhs);
          if (typeof rhs == "string") return useMergedStyles(lhs, styleStringToObject(rhs));
        }
        // Logic???
        return undefined;
      }
      // They're both strings, just concatenate them.
      if (typeof lhs == "string") {
        return `${lhs};${rhs ?? ""}`;
      }
      // They're both objects, just merge them.
      return {
        ...(lhs ?? {}),
        ...(rhs ?? {})
      };
    }

    let log = console.warn;
    /**
     * Given two sets of props, merges them and returns the result.
     *
     * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
     * @param lhs2
     * @param rhs2
     * @returns
     */
    function useMergedProps(...allProps) {
      useEnsureStability("useMergedProps", allProps.length);
      let ret = {};
      for (let nextProps of allProps) {
        ret = useMergedProps2(ret, nextProps);
      }
      return ret;
    }
    const knowns = new Set(["children", "ref", "className", "class", "style"]);
    function mergeUnknown(key, lhsValue, rhsValue) {
      if (typeof lhsValue === "function" || typeof rhsValue === "function") {
        // They're both functions that can be merged (or one's a function and the other's null).
        // Not an *easy* case, but a well-defined one.
        const merged = mergeFunctions(lhsValue, rhsValue);
        return merged;
      } else {
        // Uh...we're here because one of them's null, right?
        if (lhsValue == null && rhsValue == null) {
          if (rhsValue === null && lhsValue === undefined) return rhsValue;else return lhsValue;
        }
        if (lhsValue == null) return rhsValue;else if (rhsValue == null) return lhsValue;else if (rhsValue == lhsValue) {
          // I mean, they're the same value at least
          // so we don't need to do anything.
          // Not really ideal though.
          return rhsValue;
        } else {
          // Ugh.
          // No good strategies here, just log it if requested
          log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
          return rhsValue;
        }
      }
    }
    /**
     * Helper function.
     *
     * This is one of the most commonly called functions in this and consumer libraries,
     * so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
     */
    function useMergedProps2(lhsAll, rhsAll) {
      const ret = {
        ref: useMergedRefs(lhsAll.ref, rhsAll.ref),
        style: useMergedStyles(lhsAll.style, rhsAll.style),
        className: useMergedClasses(lhsAll["class"], lhsAll.className, rhsAll["class"], rhsAll.className),
        children: useMergedChildren(lhsAll.children, rhsAll.children)
      };
      if (ret.ref === undefined) delete ret.ref;
      if (ret.style === undefined) delete ret.style;
      if (ret.className === undefined) delete ret.className;
      if (ret["class"] === undefined) delete ret["class"];
      if (ret.children === undefined) delete ret.children;
      for (const lhsKeyU in lhsAll) {
        const lhsKey = lhsKeyU;
        if (knowns.has(lhsKey)) continue;
        ret[lhsKey] = lhsAll[lhsKey];
      }
      for (const rhsKeyU in rhsAll) {
        const rhsKey = rhsKeyU;
        if (knowns.has(rhsKey)) continue;
        ret[rhsKey] = mergeUnknown(rhsKey, ret[rhsKey], rhsAll[rhsKey]);
      }
      return ret;
    }
    function mergeFunctions(lhs, rhs) {
      if (!lhs) return rhs;
      if (!rhs) return lhs;
      return (...args) => {
        const lv = lhs(...args);
        const rv = rhs(...args);
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
      let stableHandler = useStableCallback(handler ?? (() => {}));
      if (handler == null) stableHandler = null;
      h$1(() => {
        if (stableHandler) {
          target.addEventListener(type, stableHandler, options);
          return () => target.removeEventListener(type, stableHandler, options);
        }
      }, [target, type, stableHandler]);
    }

    /*
    export function useRefElementProps<E extends Element>(r: UseRefElementReturnType<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]): h.JSX.HTMLAttributes<E>[] {
        return [r.refElementReturn.propsStable, ...otherProps];
    }*/
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
      const {
        refElementParameters: {
          onElementChange,
          onMount,
          onUnmount
        }
      } = args;
      useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
      // Called (indirectly) by the ref that the element receives.
      const handler = T$1((e, prevValue) => {
        const cleanup = onElementChange?.(e, prevValue);
        if (prevValue) onUnmount?.(prevValue);
        if (e) onMount?.(e);
        return cleanup;
      }, []);
      // Let us store the actual (reference to) the element we capture
      const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
      const propsStable = _({
        ref: setElement
      });
      // Return both the element and the hook that modifies 
      // the props and allows us to actually find the element
      return {
        refElementReturn: {
          getElement,
          propsStable: propsStable.current
        }
      };
    }

    /**
     * Allows a parent component to access information about certain
     * child components once they have rendered.
     *
     * This hook is designed to be lightweight, in that the parent keeps no state
     * and runs no effects.  Each child *does* run an effect, but with no state
     * changes unless you explicitly request them.
     *
     *
     */
    function useManagedChildren(parentParameters) {
      const {
        managedChildrenParameters: {
          onAfterChildLayoutEffect,
          onChildrenMountChange,
          onChildCountChange
        },
        ...rest
      } = parentParameters;
      useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildCountChange);
      usePassiveState(onChildCountChange, returnZero, runImmediately);
      const getHighestIndex = T$1(() => {
        return managedChildrenArray.current.highestIndex;
      }, []);
      // All the information we have about our children is stored in this **stable** array.
      // Any mutations to this array **DO NOT** trigger any sort of a re-render.
      const managedChildrenArray = _({
        arr: [],
        rec: {},
        highestIndex: 0,
        lowestIndex: 0
      });
      // For indirect access to each child
      // Compare getManagedChildInfo
      // TODO: The primary use for this is flaggable closest fits
      // which needs to search all children for that closest fit.
      // It would be nice if there was something better for that.
      const forEachChild = T$1(f => {
        for (const child of managedChildrenArray.current.arr) {
          if (child) f(child);
        }
        for (const field in managedChildrenArray.current.rec) {
          const child = managedChildrenArray.current.rec[field];
          if (child) f(child);
        }
      }, []);
      // Retrieves the information associated with the child with the given index.
      // `undefined` if not child there, or it's unmounted.
      const getManagedChildInfo = T$1(index => {
        if (typeof index == "number") return managedChildrenArray.current.arr[index];else return managedChildrenArray.current.rec[index];
      }, []);
      // tl;dr this is a way to have run useLayoutEffect once after all N children
      // have mounted and run *their* useLayoutEffect, but also *without* re-rendering
      // ourselves because of having a `childCount` state or anything similar.
      //
      // When the child count ref updates, we want the parent to also run an effect
      // to maybe do something with all these children that just mounted.
      // The easiest way would be useEffect(..., [childCount]) but
      // that would require us having a childCount state, then calling
      // setChildCount and re-rendering every time children mount
      // (only one re-render at a time unless children are staggered, but still)
      // 
      // As an alternate solution, any time a child uses ULE on mount, it queues a microtask
      // to emulate running ULE on the parent. Only the first child will actually queue
      // the microtask (by checking hasRemoteULE first) so that the "effect" only
      // runs once. When it's done, hasRemoteULE is reset so it can run again if
      // more children mount/unmount.
      const hasRemoteULEChildMounted = _(null);
      const remoteULEChildChangedCausers = _(new Set());
      const remoteULEChildChanged = T$1(index => {
        if (remoteULEChildChangedCausers.current.size == 0) {
          if (!!onAfterChildLayoutEffect) {
            debounceRendering(() => {
              onAfterChildLayoutEffect?.(remoteULEChildChangedCausers.current);
              remoteULEChildChangedCausers.current.clear();
            });
          }
        }
        remoteULEChildChangedCausers.current.add(index);
        return () => {};
      }, [/* Must remain stable */]);
      const remoteULEChildMounted = T$1((index, mounted) => {
        if (!hasRemoteULEChildMounted.current) {
          hasRemoteULEChildMounted.current = {
            mounts: new Set(),
            unmounts: new Set()
          };
          if (onChildCountChange || onChildrenMountChange) {
            debounceRendering(() => {
              onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
              onChildCountChange?.(getChildren().getHighestIndex() + 1);
              hasRemoteULEChildMounted.current = null;
            });
          }
        }
        if (mounted) {
          if (typeof index == "number") managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
        } else {
          if (typeof index == "number") {
            delete managedChildrenArray.current.arr[index];
            let shave = 0;
            while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] === undefined) {
              ++shave;
            }
            managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
          } else delete managedChildrenArray.current.rec[index];
          if (typeof index == "number") managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
        }
        hasRemoteULEChildMounted.current[mounted ? "mounts" : "unmounts"].add(index);
      }, [/* Must remain stable */]);
      const managedChildren = useStableObject({
        ...{
          _: managedChildrenArray.current
        },
        forEach: forEachChild,
        getAt: getManagedChildInfo,
        getHighestIndex: getHighestIndex,
        arraySlice: T$1(() => {
          return managedChildrenArray.current.arr.slice();
        }, [])
      });
      const getChildren = T$1(() => managedChildren, []);
      return {
        context: useStableObject({
          managedChildContext: useStableObject({
            managedChildrenArray: managedChildrenArray.current,
            remoteULEChildMounted,
            remoteULEChildChanged,
            getChildren
          })
        }),
        managedChildrenReturn: {
          getChildren
        }
      };
    }
    function useManagedChild(info, managedChildParameters) {
      const {
        context: {
          managedChildContext: {
            getChildren,
            managedChildrenArray,
            remoteULEChildMounted,
            remoteULEChildChanged
          }
        }
      } = info;
      const index = managedChildParameters.index;
      // Any time our child props change, make that information available
      // the parent if they need it.
      // The parent can listen for all updates and only act on the ones it cares about,
      // and multiple children updating in the same tick will all be sent at once.
      s$1(() => {
        // Insert this information in-place
        if (typeof index == "number") {
          managedChildrenArray.arr[index] = {
            ...managedChildParameters
          };
        } else {
          managedChildrenArray.rec[index] = {
            ...managedChildParameters
          };
        }
        return remoteULEChildChanged(index);
      }, [...Object.entries(info).flat(9)]); // 9 is infinity, right? Sure. Unrelated: TODO.
      // When we mount, notify the parent via queueMicrotask
      // (every child does this, so everything's coordinated to only queue a single microtask per tick)
      // Do the same on unmount.
      // Note: It's important that this comes AFTER remoteULEChildChanged
      // so that remoteULEChildMounted has access to all the info on mount.
      s$1(() => {
        remoteULEChildMounted?.(index, true);
        return () => remoteULEChildMounted?.(index, false);
      }, [index]);
      return {
        managedChildReturn: {
          getChildren
        }
      };
    }

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
          this[_restoreInertedSiblings](this[_topElParents]);
          // Note we don't want to make these properties nullable on the class,
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
          }
          // Remove it from the stack, we'll bring it to the top.
          this.remove(element);
          this[_topChanged](element);
          this[_blockingElements].push(element);
        }
        remove(element) {
          const i = this[_blockingElements].indexOf(element);
          if (i === -1) {
            return false;
          }
          this[_blockingElements].splice(i, 1);
          // Top changed only if the removed element was the top element.
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
          const oldParents = this[_topElParents];
          // No new top, reset old top if any.
          if (!newTop) {
            this[_restoreInertedSiblings](oldParents);
            toKeepInert.clear();
            this[_topElParents] = [];
            return;
          }
          const newParents = this[_getParents](newTop);
          // New top is not contained in the main document!
          if (newParents[newParents.length - 1].parentNode !== document.body) {
            throw Error('Non-connected element cannot be a blocking element');
          }
          // Cast here because we know we'll call _inertSiblings on newParents
          // below.
          this[_topElParents] = newParents;
          const toSkip = this[_getDistributedChildren](newTop);
          // No previous top element.
          if (!oldParents.length) {
            this[_inertSiblings](newParents, toSkip, toKeepInert);
            return;
          }
          let i = oldParents.length - 1;
          let j = newParents.length - 1;
          // Find common parent. Index 0 is the element itself (so stop before it).
          while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
            i--;
            j--;
          }
          // If up the parents tree there are 2 elements that are siblings, swap
          // the inerted sibling.
          if (oldParents[i] !== newParents[j]) {
            this[_swapInertedSibling](oldParents[i], newParents[j]);
          }
          // Restore old parents siblings inertness.
          i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i));
          // Make new parents siblings inert.
          j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
        }
        /**
         * Swaps inertness between two sibling elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_swapInertedSibling](oldInert, newInert) {
          const siblingsToRestore = oldInert[_siblingsToRestore];
          // oldInert is not contained in siblings to restore, so we have to check
          // if it's inertable and if already inert.
          if (this[_isInertable](oldInert) && !oldInert.inert) {
            oldInert.inert = true;
            siblingsToRestore.add(oldInert);
          }
          // If newInert was already between the siblings to restore, it means it is
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
              const sibling = children[j];
              // Skip the input element, if not inertable or to be skipped.
              if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
                continue;
              }
              // Should be collected since already inerted.
              if (toKeepInert && sibling.inert) {
                toKeepInert.add(sibling);
              } else {
                sibling.inert = true;
                inertedSiblings.add(sibling);
              }
            }
            // Store the siblings that were inerted.
            element[_siblingsToRestore] = inertedSiblings;
            // Observe only immediate children mutations on the parent.
            const mo = new MutationObserver(this[_handleMutations].bind(this));
            element[_parentMO] = mo;
            let parentToObserve = parent;
            // If we're using the ShadyDOM polyfill, then our parent could be a
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
            const inertedSiblings = inertedChild[_siblingsToRestore];
            // To restore.
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
            }
            // To inert.
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
          let current = element;
          // Stop to body.
          while (current && current !== document.body) {
            // Skip shadow roots.
            if (current.nodeType === Node.ELEMENT_NODE) {
              parents.push(current);
            }
            // ShadowDom v1
            if (current.assignedSlot) {
              // Collect slots from deepest slot to top.
              while (current = current.assignedSlot) {
                parents.push(current);
              }
              // Continue the search on the top slot.
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
            }
            // No need to search for <content>.
          }

          return result;
        }
      }
      document.$blockingElements = new BlockingElementsImpl();
    })();

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
      }

      // Convenience function for converting NodeLists.
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
         * @param {!HTMLElement} rootElement The HTMLElement at the root of the inert subtree.
         * @param {!InertManager} inertManager The global singleton InertManager object.
         */
        function InertRoot(rootElement, inertManager) {
          _classCallCheck(this, InertRoot);

          /** @type {!InertManager} */
          this._inertManager = inertManager;

          /** @type {!HTMLElement} */
          this._rootElement = rootElement;

          /**
           * @type {!Set<!InertNode>}
           * All managed focusable nodes in this InertRoot's subtree.
           */
          this._managedNodes = new Set();

          // Make the subtree hidden from assistive technology
          if (this._rootElement.hasAttribute('aria-hidden')) {
            /** @type {?string} */
            this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
          } else {
            this._savedAriaHidden = null;
          }
          this._rootElement.setAttribute('aria-hidden', 'true');

          // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
          this._makeSubtreeUnfocusable(this._rootElement);

          // Watch for:
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
            }, this);

            // Note we cast the nulls to the ANY type here because:
            // 1) We want the class properties to be declared as non-null, or else we
            //    need even more casts throughout this code. All bets are off if an
            //    instance has been destroyed and a method is called.
            // 2) We don't want to cast "this", because we want type-aware optimizations
            //    to know which properties we're setting.
            this._observer = /** @type {?} */null;
            this._rootElement = /** @type {?} */null;
            this._managedNodes = /** @type {?} */null;
            this._inertManager = /** @type {?} */null;
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
                  root = /** @type {!ShadowRoot} */node;
                  break;
                }
                node = node.parentNode;
              }
              if (root) {
                activeElement = root.activeElement;
              }
            }
            if (startNode.contains(activeElement)) {
              activeElement.blur();
              // In IE11, if an element is already focused, and then set to tabindex=-1
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
            var element = /** @type {!HTMLElement} */node;

            // If a descendant inert root becomes un-inert, its descendants will still be inert because of
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
           * @param {!HTMLElement} node
           */
        }, {
          key: '_adoptInertRoot',
          value: function _adoptInertRoot(node) {
            var inertSubroot = this._inertManager.getInertRoot(node);

            // During initialisation this inert root may not have been registered yet,
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
              var target = /** @type {!HTMLElement} */record.target;
              if (record.type === 'childList') {
                // Manage added nodes
                slice.call(record.addedNodes).forEach(function (node) {
                  this._makeSubtreeUnfocusable(node);
                }, this);

                // Un-manage removed nodes
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

          /** @return {?string} */,

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
          this._destroyed = false;

          // Save any prior tabindex info and make this node untabbable
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
              var element = /** @type {!HTMLElement} */this._node;
              if (this._savedTabIndex !== null) {
                element.setAttribute('tabindex', this._savedTabIndex);
              } else {
                element.removeAttribute('tabindex');
              }

              // Use `delete` to restore native focus method.
              if (this._overrodeFocusMethod) {
                delete element.focus;
              }
            }

            // See note in InertRoot.destructor for why we cast these nulls to ANY.
            this._node = /** @type {?} */null;
            this._inertRoots = /** @type {?} */null;
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
            var element = /** @type {!HTMLElement} */this.node;
            if (matches.call(element, _focusableElementsString)) {
              if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
                return;
              }
              if (element.hasAttribute('tabindex')) {
                this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
              }
              element.setAttribute('tabindex', '-1');
              if (element.nodeType === Node.ELEMENT_NODE) {
                element.focus = function () {};
                this._overrodeFocusMethod = true;
              }
            } else if (element.hasAttribute('tabindex')) {
              this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
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
            return (/** @type {!InertNode} */this._destroyed
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

          /** @return {?number} */,

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
          this._observer = new MutationObserver(this._watchForInert.bind(this));

          // Add inert style.
          addInertStyle(document.head || document.body || document.documentElement);

          // Wait for document to be loaded.
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
          } else {
            this._onDocumentLoaded();
          }
        }

        /**
         * Set whether the given element should be an inert root or not.
         * @param {!HTMLElement} root
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
              this._inertRoots.set(root, inertRoot);
              // If not contained in the document, it must be in a shadowRoot.
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
            }, this);

            // Comment this out to use programmatic API only.
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
                  var target = /** @type {!HTMLElement} */record.target;
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
       * @param {(function (!HTMLElement))=} callback Callback to be called for each element traversed,
       *     before descending into child nodes.
       * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
       */

      function composedTreeWalk(node, callback, shadowRootAncestor) {
        if (node.nodeType == Node.ELEMENT_NODE) {
          var element = /** @type {!HTMLElement} */node;
          if (callback) {
            callback(element);
          }

          // Descend into node:
          // If it has a ShadowRoot, ignore all child elements - these will be picked
          // up by the <content> or <shadow> elements. Descend straight into the
          // ShadowRoot.
          var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
          if (shadowRoot) {
            composedTreeWalk(shadowRoot, callback);
            return;
          }

          // If it is a <content> element, descend into distributed elements - these
          // are elements from outside the shadow root which are rendered inside the
          // shadow DOM.
          if (element.localName == 'content') {
            var content = /** @type {!HTMLContentElement} */element;
            // Verifies if ShadowDom v0 is supported.
            var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
            for (var i = 0; i < distributedNodes.length; i++) {
              composedTreeWalk(distributedNodes[i], callback);
            }
            return;
          }

          // If it is a <slot> element, descend into assigned nodes - these
          // are elements from outside the shadow root which are rendered inside the
          // shadow DOM.
          if (element.localName == 'slot') {
            var slot = /** @type {!HTMLSlotElement} */element;
            // Verify if ShadowDom v1 is supported.
            var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({
              flatten: true
            }) : [];
            for (var _i = 0; _i < _distributedNodes.length; _i++) {
              composedTreeWalk(_distributedNodes[_i], callback);
            }
            return;
          }
        }

        // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
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
      if (!HTMLElement.prototype.hasOwnProperty('inert')) {
        /** @type {!InertManager} */
        var inertManager = new InertManager(document);
        Object.defineProperty(HTMLElement.prototype, 'inert', {
          enumerable: true,
          /** @this {!HTMLElement} */
          get: function get() {
            return this.hasAttribute('inert');
          },
          /** @this {!HTMLElement} */
          set: function set(inert) {
            inertManager.setInert(this, inert);
          }
        });
      }
    })();

    /**
     * Slightly enhanced version of `useState` that includes a getter that remains constant
     * (i.e. you can use it in `useEffect` and friends without it being a dependency).
     *
     * @param initialState
     * @returns
     */
    function useState(initialState) {
      // We keep both, but overrride the `setState` functionality
      const [state, setStateP] = p$1(initialState);
      const ref = _(state);
      // Hijack the normal setter function 
      // to also set our ref to the new value
      const setState = T$1(value => {
        if (typeof value === "function") {
          const callback = value;
          setStateP(prevValue => {
            const nextValue = callback(prevValue);
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

    B$2(null);

    function g(n, t) {
      for (var e in t) n[e] = t[e];
      return n;
    }
    function C(n, t) {
      for (var e in n) if ("__source" !== e && !(e in t)) return !0;
      for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
      return !1;
    }
    function w(n) {
      this.props = n;
    }
    function R(n, e) {
      function r(n) {
        var t = this.props.ref,
          r = t == n.ref;
        return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
      }
      function u(e) {
        return this.shouldComponentUpdate = r, h$2(n, e);
      }
      return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
    }
    (w.prototype = new d$2()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
      return C(this.props, n) || C(this.state, t);
    };
    var x = l$2.__b;
    l$2.__b = function (n) {
      n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), x && x(n);
    };
    var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    function k(n) {
      function t(t) {
        var e = g({}, t);
        return delete e.ref, n(e, t.ref || null);
      }
      return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
    }
    var T = l$2.__e;
    l$2.__e = function (n, t, e, r) {
      if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
      T(n, t, e, r);
    };
    var I = l$2.unmount;
    function L(n, t, e) {
      return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
        "function" == typeof n.__c && n.__c();
      }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
        return L(n, t, e);
      })), n;
    }
    function U(n, t, e) {
      return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
        return U(n, t, e);
      }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
    }
    function D() {
      this.__u = 0, this.t = null, this.__b = null;
    }
    function F(n) {
      var t = n.__.__c;
      return t && t.__a && t.__a(n);
    }
    function V() {
      this.u = null, this.o = null;
    }
    l$2.unmount = function (n) {
      var t = n.__c;
      t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
    }, (D.prototype = new d$2()).__c = function (n, t) {
      var e = t.__c,
        r = this;
      null == r.t && (r.t = []), r.t.push(e);
      var u = F(r.__v),
        o = !1,
        i = function () {
          o || (o = !0, e.__R = null, u ? u(l) : l());
        };
      e.__R = i;
      var l = function () {
          if (! --r.__u) {
            if (r.state.__a) {
              var n = r.state.__a;
              r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
            }
            var t;
            for (r.setState({
              __a: r.__b = null
            }); t = r.t.pop();) t.forceUpdate();
          }
        },
        c = !0 === t.__h;
      r.__u++ || c || r.setState({
        __a: r.__b = r.__v.__k[0]
      }), n.then(i, i);
    }, D.prototype.componentWillUnmount = function () {
      this.t = [];
    }, D.prototype.render = function (n, e) {
      if (this.__b) {
        if (this.__v.__k) {
          var r = document.createElement("div"),
            o = this.__v.__k[0].__c;
          this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
        }
        this.__b = null;
      }
      var i = e.__a && h$2(p$2, null, n.fallback);
      return i && (i.__h = null), [h$2(p$2, null, e.__a ? null : n.children), i];
    };
    var W = function (n, t, e) {
      if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
        for (; e.length > 3;) e.pop()();
        if (e[1] < e[0]) break;
        n.u = e = e[2];
      }
    };
    (V.prototype = new d$2()).__a = function (n) {
      var t = this,
        e = F(t.__v),
        r = t.o.get(n);
      return r[0]++, function (u) {
        var o = function () {
          t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
        };
        e ? e(o) : o();
      };
    }, V.prototype.render = function (n) {
      this.u = null, this.o = new Map();
      var t = x$1(n.children);
      n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
      for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
      return n.children;
    }, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
      var n = this;
      this.o.forEach(function (t, e) {
        W(n, e, t);
      });
    };
    var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
      B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      H = "undefined" != typeof document,
      Z = function (n) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
      };
    d$2.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
      Object.defineProperty(d$2.prototype, t, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + t];
        },
        set: function (n) {
          Object.defineProperty(this, t, {
            configurable: !0,
            writable: !0,
            value: n
          });
        }
      });
    });
    var G = l$2.event;
    function J() {}
    function K() {
      return this.cancelBubble;
    }
    function Q() {
      return this.defaultPrevented;
    }
    l$2.event = function (n) {
      return G && (n = G(n)), n.persist = J, n.isPropagationStopped = K, n.isDefaultPrevented = Q, n.nativeEvent = n;
    };
    var nn = {
        configurable: !0,
        get: function () {
          return this.class;
        }
      },
      tn = l$2.vnode;
    l$2.vnode = function (n) {
      var t = n.type,
        e = n.props,
        u = e;
      if ("string" == typeof t) {
        var o = -1 === t.indexOf("-");
        for (var i in u = {}, e) {
          var l = e[i];
          H && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Z(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && B.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
        }
        "select" == t && u.multiple && Array.isArray(u.value) && (u.value = x$1(e.children).forEach(function (n) {
          n.props.selected = -1 != u.value.indexOf(n.props.value);
        })), "select" == t && null != u.defaultValue && (u.value = x$1(e.children).forEach(function (n) {
          n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
        })), n.props = u, e.class != e.className && (nn.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", nn));
      }
      n.$$typeof = z, tn && tn(n);
    };
    var en = l$2.__r;
    l$2.__r = function (n) {
      en && en(n), n.__c;
    };

    /**
     * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
     * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
     */
    function forwardElementRef(Component) {
      const ForwardedComponent = k(Component);
      return ForwardedComponent;
    }

    const SwappableContext = B$2({
      getAnimateOnMount: () => false
    });

    function defaultClassBase(given) {
      return given ?? "ptl";
    }
    function getTimeoutDuration(element) {
      return Math.max(...window.getComputedStyle(element || document.body).getPropertyValue(`transition-duration`).split(",").map(str => {
        if (str.endsWith("ms")) return +str.substring(0, str.length - 2);
        if (str.endsWith("s")) return +str.substring(0, str.length - 1) * 1000;
        return 1000;
      }));
    }
    function parseState(nextState) {
      return nextState.split("-");
    }
    /**
     * Provide props that can be used to animate a transition.
     *
     * @param param0
     * @returns
     */
    function useTransition({
      show: v,
      animateOnMount: a,
      measure: m,
      classBase,
      exitVisibility: e,
      duration: d
    }) {
      const [isVisible, setIsVisible] = useState(false);
      const {
        getAnimateOnMount
      } = q(SwappableContext);
      classBase ||= defaultClassBase(classBase);
      e ||= "hidden";
      a ??= getAnimateOnMount();
      m ??= false;
      const getMeasure = useStableGetter(m);
      //const getDurationOverride = useStableGetter(d);
      useEnsureStability("useTransition", classBase);
      const getExitVisibility = useStableGetter(e);
      const {
        refElementReturn: {
          getElement,
          propsStable
        }
      } = useRefElement({
        refElementParameters: {}
      });
      const cssProperties = _({});
      const classNames = _(new Set([
      // This is removed during useLayoutEffect on the first render
      // (at least once `show` is non-null)
      `${classBase}-pending`]));
      const handleTransitionFinished = T$1(() => {
        const state = getState();
        console.assert(!!state);
        if (state) {
          const [direction, phase] = parseState(state);
          if (phase == "transition") {
            setState(`${direction}-finalize`);
            if (timeoutHandle.current > 0) {
              timeoutClearFunction.current?.(timeoutHandle.current);
              timeoutHandle.current = -1;
            }
          }
        }
      }, []);
      const otherProps = _({
        onTransitionEnd: e => {
          if (e.target == getElement() && e.elapsedTime) {
            handleTransitionFinished();
          }
        }
      });
      // The very first time 
      const hasMounted = _(false);
      /**
       * Sets the element's CSS class to match the given direction and phase.
       */
      const updateClasses = T$1((element, direction, phase) => {
        if (element == null) return;
        const exitVisibility = getExitVisibility();
        const allClassesToRemove = [`${classBase}-enter`, `${classBase}-exit`, `${classBase}-enter-init`, `${classBase}-enter-transition`, `${classBase}-enter-finalize`, `${classBase}-exit-init`, `${classBase}-exit-transition`, `${classBase}-exit-finalize`, `${classBase}-ev-${"inert"}`, `${classBase}-ev-${"removed"}`, `${classBase}-ev-${"hidden"}`, `${classBase}-ev-${"visible"}`, `${classBase}-pending`];
        const allClassesToAdd = [`${classBase}`, `${classBase}-${direction}`, `${classBase}-${direction}-${phase}`, `${classBase}-ev-${exitVisibility}`];
        //(measure ? allClassesToAdd : allClassesToRemove).push(`${classBase}-measure`);
        element.classList.remove(...allClassesToRemove);
        allClassesToRemove.map(v => classNames.current.delete(v));
        element.classList.add(...allClassesToAdd);
        allClassesToAdd.map(v => classNames.current.add(v));
      }, []);
      /**
       * Updates a single "measure" variable (or removes it)
       */
      const updateSizeProperty = T$1((element, varName, value) => {
        if (value != null) {
          value = `${value}px`;
          element.style.setProperty(varName, value);
          cssProperties.current[varName] = value;
        } else {
          element.style.removeProperty(varName);
          delete cssProperties.current[varName];
        }
      }, []);
      /**
       * Updates all "measure" variables (or removes them)
       */
      const updateSizeProperties = T$1((element, nextSize) => {
        updateSizeProperty(element, `--${classBase}-measure-top`, nextSize?.top);
        updateSizeProperty(element, `--${classBase}-measure-left`, nextSize?.left);
        updateSizeProperty(element, `--${classBase}-measure-width`, nextSize?.width);
        updateSizeProperty(element, `--${classBase}-measure-height`, nextSize?.height);
      }, []);
      /**
       * Adds the "measure" variupdateClassesables to the element if requested.
       */
      const measureElementAndUpdateProperties = T$1((element, measure) => {
        if (element) {
          let size = null;
          if (measure) {
            size = element.getBoundingClientRect();
          }
          updateSizeProperties(element, size);
        }
      }, []);
      // We use both useTimeout and requestAnimationFrame for timing certain things --
      // raf is used for changing from init to transition (would use queueMicrotask but it can't be cancelled)
      // setTimeout is used for changing from transition to finalize (as a backup in case transitionend doesn't fire)
      //
      // In order to avoid stale callbacks running (i.e. when we rapidly switch between visible and not)
      // we need to make sure we accurately cancel anything that can change our state on a delay.
      //
      // Also of note, we store "(f) => window.clearTimeout(f)" instead of just "window.clearTimeout" because
      // of the implicit window object -- problems with a missing `this` object and all that nonsense.
      const timeoutHandle = _(-1);
      const timeoutClearFunction = _(null);
      /**
       * Any time the state changes, there's some logic we need to run:
       *
       * * If we're changing to an `init` phase, update the classes, then wait a moment and then change to the `transition` phase.
       * * If we're changing to a `transition` phase, update the classes, then wait until the transition completes, then change to the `finalize` phase.
       *
       * Any change in state or classes/styles does not implicitly cause a re-render.
       */
      const onStateChange = T$1((nextState, prevState, reason) => {
        if (nextState == null) return;
        const [nextDirection, nextPhase] = parseState(nextState);
        setIsVisible(nextDirection == "enter" || nextDirection == "exit" && nextPhase != "finalize");
        const element = getElement();
        const measure = getMeasure();
        //const durationOverride = getDurationOverride();
        /*if (durationOverride != null) {
            cssProperties.current[`--${classBase}-duration`] = durationOverride + "ms";
            element?.style.setProperty(`--${classBase}-duration`, `${durationOverride}ms`);
        }*/
        if (measure && element && nextPhase == "init") {
          // We actually need all these reflows, either to make things like block-size work, or to make things like opacity work.
          element.classList.add(`${classBase}-measure`);
          updateClasses(element, nextDirection, "finalize");
          forceReflow(element); // By measuring the element below we implicitly reflow, but this is a reminder that it happens.
          measureElementAndUpdateProperties(element, measure);
          updateClasses(element, nextDirection, nextPhase);
          forceReflow(element);
          element.classList.remove(`${classBase}-measure`);
          forceReflow(element);
        } else {
          updateClasses(element, nextDirection, nextPhase);
          // TODO: Unnecessary reflow?
          // It might only be necessary when changing from -init to -transition
          if (element) forceReflow(element);
        }
        const exitVisibility = getExitVisibility();
        if (exitVisibility) {
          const inert = exitVisibility == "inert" && nextDirection == "exit" ? true : undefined;
          if (inert) otherProps.current.inert = true;else delete otherProps.current["inert"];
          if (element) element.inert = inert || false;
        }
        switch (nextPhase) {
          case "init":
            {
              if (timeoutHandle.current >= 0) timeoutClearFunction.current?.(timeoutHandle.current);
              timeoutHandle.current = requestAnimationFrame(() => {
                setState(`${nextDirection}-transition`);
              });
              timeoutClearFunction.current = f => cancelAnimationFrame(f);
              break;
            }
          case "transition":
            {
              if (timeoutHandle.current >= 0) timeoutClearFunction.current?.(timeoutHandle.current);
              timeoutHandle.current = setTimeout(() => {
                handleTransitionFinished();
              }, getTimeoutDuration(element) * 1.5);
              timeoutClearFunction.current = f => clearTimeout(f);
              break;
            }
          case "finalize":
            {
              // Nothing to do or schedule or anything -- we just update our classes and we're done.
              break;
            }
          default:
            {
              debugger; // Intentional
              console.log(`Invalid state used in transition: ${nextState}. Previous state was ${prevState ?? "null"}`);
              break;
            }
        }
      }, []);
      const [getState, setState] = usePassiveState(onStateChange, returnNull, runImmediately);
      // When we mount, and every time thereafter that `show` changes,
      // change our current state according to that `show` value.
      s$1(() => {
        // If `show` is null, then we don't change anything.
        if (v == null) return;
        // `show` is true or false (as opposed to null).
        // If this is our first time seeing a non-null value, 
        // then remove the class that indicates the no transition logic has started.
        // (Because this is useLayoutEffect, it will take effect before the class's effects are painted)
        if (!hasMounted.current) {
          classNames.current.delete(`${classBase}-pending`);
          const element = getElement();
          if (element) {
            element.classList.remove(`${classBase}-pending`);
            // Because the pending class often makes this hidden or d-none, 
            // force a reflow juuust to be safe.
            forceReflow(element);
          }
        }
        const currentState = getState();
        let nextPhase = "init";
        if (currentState) {
          const [currentDirection, currentPhase] = parseState(currentState);
          if (currentPhase != "finalize") nextPhase = "transition";
        }
        // Note: the setState change handler runs immediately with no debounce.
        if (v) {
          if (hasMounted.current || a) setState(`enter-${nextPhase}`);else setState("enter-finalize");
        } else {
          if (hasMounted.current || a) setState(`exit-${nextPhase}`);else setState("exit-finalize");
        }
        hasMounted.current = true;
      }, [v]);
      if (d != null) cssProperties.current[`--${classBase}-duration`] = d + "ms";else delete cssProperties.current[`--${classBase}-duration`];
      return {
        isVisible,
        props: useMergedProps(propsStable, {
          className: [...classNames.current, `${classBase}-ev-${e}`, `${classBase}-inline-direction-${"ltr"}`, `${classBase}-block-direction-${"ttb"}`].join(" "),
          style: cssProperties.current,
          ...otherProps.current
        })
      };
    }
    const IsVisibleContext = B$2(false);
    const Transitionable = R(forwardElementRef(function Transitionable({
      delayMountUntilShown,
      animateOnMount,
      duration,
      classBase,
      exitVisibility,
      measure,
      show,
      children,
      ...props
    }, ref) {
      const {
        props: transitionProps,
        isVisible
      } = useTransition({
        animateOnMount,
        classBase,
        duration,
        exitVisibility,
        measure,
        show
      });
      const childrenIsVnode = children && children.type && children.props;
      const finalProps = useMergedProps(props, transitionProps, {
        ...props,
        ref
      }, childrenIsVnode ? {
        ref: children.ref,
        ...children.props
      } : {});
      // No matter what delayMountUntilShown is,
      // once we've rendered our children once, 
      // ensure that we don't unmount them again and waste all that work.
      // (If you really need this you can just unmount the entire transition itself)
      const renderChildren = show || !delayMountUntilShown;
      const hasRenderedChildren = _(false);
      h$1(() => {
        if (renderChildren) hasRenderedChildren.current ||= true;
      }, [hasRenderedChildren.current ? false : renderChildren]);
      if (!renderChildren && !hasRenderedChildren.current) return null;
      const context = _({
        getAnimateOnMount: () => false
      }).current;
      let ret;
      if (childrenIsVnode) {
        ret = h$2(SwappableContext.Provider, {
          value: context
        }, q$1(children, finalProps));
      } else {
        ret = h$2(SwappableContext.Provider, {
          value: context
        }, h$2("span", {
          ...finalProps
        }, children));
      }
      return h$2(IsVisibleContext.Provider, {
        value: isVisible
      }, ret);
    }));
    function forceReflow(e) {
      // Try really hard to make sure this isn't optimized out by anything.
      // We need it for its document reflow side effect.
      e.getBoundingClientRect();
      e.style.opacity;
      e.style.transform;
      return e;
    }

    function createClipProps({
      classBase,
      clipMin,
      clipMinBlock,
      clipMinInline,
      clipOrigin,
      clipOriginBlock,
      clipOriginInline
    }) {
      classBase = defaultClassBase(classBase);
      return {
        className: clsx(`${classBase}-clip`),
        style: {
          [`--${classBase}-clip-origin-inline`]: clipOriginInline ?? clipOrigin ?? 0.5,
          [`--${classBase}-clip-origin-block`]: clipOriginBlock ?? clipOrigin ?? 0,
          [`--${classBase}-clip-min-inline`]: clipMinInline ?? clipMin ?? 1,
          [`--${classBase}-clip-min-block`]: clipMinBlock ?? clipMin ?? 0
        }
      };
    }
    R(forwardElementRef(function Clip({
      classBase,
      duration,
      delayMountUntilShown,
      clipOrigin,
      clipOriginInline,
      clipOriginBlock,
      clipMin,
      clipMinInline,
      clipMinBlock,
      show,
      animateOnMount,
      exitVisibility,
      ...rest
    }, ref) {
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createClipProps({
          classBase,
          clipMin,
          clipMinBlock,
          clipMinInline,
          clipOrigin,
          clipOriginBlock,
          clipOriginInline
        }))
      });
    }));

    /**
     * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
     * Be sure to merge these returned props with whatever the user passed in.
     */
    function createFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }) {
      classBase = defaultClassBase(classBase);
      return {
        className: `${classBase}-fade`,
        style: {
          [`--${classBase}-fade-min`]: fadeMin ?? 0,
          [`--${classBase}-fade-max`]: fadeMax ?? 1
        }
      };
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
    R(forwardElementRef(function Fade({
      classBase,
      duration,
      delayMountUntilShown,
      fadeMin,
      fadeMax,
      show,
      animateOnMount,
      exitVisibility,
      ...rest
    }, ref) {
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createFadeProps({
          classBase,
          fadeMax,
          fadeMin
        }))
      });
    }));

    R(forwardElementRef(function ClipFade({
      delayMountUntilShown,
      classBase,
      duration,
      fadeMin,
      fadeMax,
      show,
      animateOnMount,
      clipMin,
      clipMinBlock,
      clipMinInline,
      clipOrigin,
      clipOriginBlock,
      clipOriginInline,
      exitVisibility,
      ...rest
    }, ref) {
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createClipProps({
          classBase,
          clipMin,
          clipMinBlock,
          clipMinInline,
          clipOrigin,
          clipOriginBlock,
          clipOriginInline
        }), createFadeProps({
          classBase,
          fadeMax,
          fadeMin
        }))
      });
    }));

    /**
     * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
     * Be sure to merge these returned props with whatever the user passed in.
     *
     * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
     *
     * @example <Transitionable measure {...useCreateCollapseProps(...)} />
     */
    function createCollapseProps({
      classBase,
      minBlockSize
    }) {
      classBase = defaultClassBase(classBase);
      return {
        className: `${classBase}-collapse`,
        style: {
          [`--${classBase}-collapse-min-block`]: minBlockSize ?? 0
        }
      };
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
    R(forwardElementRef(function Collapse({
      classBase,
      show,
      duration,
      delayMountUntilShown,
      minBlockSize,
      animateOnMount,
      exitVisibility,
      ...rest
    }, ref) {
      return h$2(Transitionable, {
        measure: true,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createCollapseProps({
          classBase,
          minBlockSize
        }))
      });
    }));

    R(forwardElementRef(function CollapseFade({
      classBase,
      show,
      duration,
      animateOnMount,
      delayMountUntilShown,
      fadeMin,
      fadeMax,
      exitVisibility,
      minBlockSize,
      ...rest
    }, ref) {
      return h$2(Transitionable, {
        measure: true,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createFadeProps({
          classBase,
          fadeMin,
          fadeMax
        }), createCollapseProps({
          classBase,
          minBlockSize
        }))
      });
    }));

    /**
     * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
     */
    function createSlideProps({
      classBase,
      slideTargetInline,
      slideTargetBlock
    }) {
      classBase = defaultClassBase(classBase);
      return {
        className: `${classBase}-slide`,
        style: {
          [`--${classBase}-slide-target-inline`]: `${slideTargetInline ?? 0}`,
          [`--${classBase}-slide-target-block`]: `${slideTargetBlock ?? 0}`
        }
      };
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
    R(forwardElementRef(function Slide({
      classBase,
      duration,
      slideTargetInline,
      slideTargetBlock,
      show,
      animateOnMount,
      exitVisibility,
      delayMountUntilShown,
      ...rest
    }, ref) {
      //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createSlideProps({
          classBase,
          slideTargetBlock,
          slideTargetInline
        }))
      });
    }));
    // TODO: This logic was required for slides at one point to ensure that slideTargetInline={index - currentIndex} works right,
    // but it works without it now, so, like, we're good then? Which I'm okay with because I can't explain the logic here honestly.
    /*export function useSlideThing({ targetBlock, targetInline }: { targetInline?: number | null, targetBlock?: number | null }): { targetInline: number | undefined, targetBlock: number | undefined } {

        const lastValidTargetInline = useRef(targetInline ?? 1);
        const lastValidTargetBlock = useRef(targetBlock ?? 0);

        
        useEffect(() => { if (targetInline) lastValidTargetInline.current = targetInline; }, [targetInline]);
        useEffect(() => { if (targetBlock) lastValidTargetBlock.current = targetBlock; }, [targetBlock]);

        if (targetInline == 0)
            targetInline = lastValidTargetInline.current;
        if (targetBlock == 0)
            targetBlock = lastValidTargetBlock.current;

        targetInline ??= undefined;
        targetBlock ??= undefined;
        return { targetInline, targetBlock };
    }*/

    R(forwardElementRef(function SlideFade({
      classBase,
      delayMountUntilShown,
      duration,
      slideTargetBlock,
      slideTargetInline,
      show,
      animateOnMount,
      fadeMin,
      fadeMax,
      exitVisibility,
      ...rest
    }, ref) {
      //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createFadeProps({
          classBase,
          fadeMin,
          fadeMax
        }), createSlideProps({
          classBase,
          slideTargetBlock,
          slideTargetInline
        }))
      });
    }));

    /**
     * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
     */
    function createZoomProps({
      classBase,
      zoomOrigin,
      zoomOriginInline,
      zoomOriginBlock,
      zoomMin,
      zoomMinInline,
      zoomMinBlock
    }) {
      classBase = defaultClassBase(classBase);
      return {
        className: `${classBase}-zoom`,
        style: {
          [`--${classBase}-zoom-origin-inline`]: `${zoomOriginInline ?? zoomOrigin ?? 0.5}`,
          [`--${classBase}-zoom-origin-block`]: `${zoomOriginBlock ?? zoomOrigin ?? 0.5}`,
          [`--${classBase}-zoom-min-inline`]: `${zoomMinInline ?? zoomMin ?? 0}`,
          [`--${classBase}-zoom-min-block`]: `${zoomMinBlock ?? zoomMin ?? 0}`
        }
      };
    }
    /**
     * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
     * @see `Transitionable` `ZoomFade`
     */
    R(forwardElementRef(function Zoom({
      classBase,
      duration,
      delayMountUntilShown,
      zoomOrigin,
      zoomOriginInline,
      zoomOriginBlock,
      zoomMin,
      zoomMinInline,
      zoomMinBlock,
      show,
      animateOnMount,
      exitVisibility,
      ...rest
    }, ref) {
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps(createZoomProps({
          classBase,
          zoomOrigin,
          zoomOriginInline,
          zoomOriginBlock,
          zoomMin,
          zoomMinInline,
          zoomMinBlock
        }), {
          ...rest,
          ref
        })
      });
    }));

    R(forwardElementRef(function ZoomFade({
      classBase,
      duration,
      fadeMin,
      fadeMax,
      show,
      animateOnMount,
      delayMountUntilShown,
      zoomMin,
      zoomMinBlock,
      zoomMinInline,
      zoomOrigin,
      zoomOriginBlock,
      zoomOriginInline,
      exitVisibility,
      ...rest
    }, ref) {
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createZoomProps({
          classBase,
          zoomMin,
          zoomMinBlock,
          zoomMinInline,
          zoomOrigin,
          zoomOriginBlock,
          zoomOriginInline
        }), createFadeProps({
          classBase,
          fadeMax,
          fadeMin
        }))
      });
    }));

    R(forwardElementRef(function SlideZoom({
      classBase,
      duration,
      delayMountUntilShown,
      slideTargetBlock,
      slideTargetInline,
      show,
      animateOnMount,
      zoomMin,
      zoomMinBlock,
      zoomMinInline,
      zoomOrigin,
      zoomOriginBlock,
      zoomOriginInline,
      exitVisibility,
      ...rest
    }, ref) {
      //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createZoomProps({
          classBase,
          zoomMin,
          zoomMinBlock,
          zoomMinInline,
          zoomOrigin,
          zoomOriginBlock,
          zoomOriginInline
        }), createSlideProps({
          classBase,
          slideTargetBlock,
          slideTargetInline
        }))
      });
    }));

    R(forwardElementRef(function SlideZoomFade({
      classBase,
      duration,
      slideTargetBlock,
      slideTargetInline,
      show,
      animateOnMount,
      delayMountUntilShown,
      fadeMax,
      fadeMin,
      zoomMin,
      zoomMinBlock,
      zoomMinInline,
      zoomOrigin,
      zoomOriginBlock,
      zoomOriginInline,
      exitVisibility,
      ...rest
    }, ref) {
      //  ({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps({
          ref,
          ...rest
        }, createZoomProps({
          classBase,
          zoomMin,
          zoomMinBlock,
          zoomMinInline,
          zoomOrigin,
          zoomOriginBlock,
          zoomOriginInline
        }), createSlideProps({
          classBase,
          slideTargetBlock,
          slideTargetInline
        }), createFadeProps({
          classBase,
          fadeMax,
          fadeMin
        }))
      });
    }));

    /**
     * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
     */
    function createFlipProps({
      classBase,
      flipAngleInline,
      flipAngleBlock,
      perspective
    }) {
      classBase = defaultClassBase(classBase);
      return {
        className: `${classBase}-flip`,
        style: {
          [`--${classBase}-flip-angle-inline`]: `${flipAngleInline ?? 0}deg`,
          [`--${classBase}-flip-angle-block`]: `${flipAngleBlock ?? 0}deg`,
          [`--${classBase}-perspective`]: `${perspective ?? 800}px`
        }
      };
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
    R(forwardElementRef(function Flip({
      classBase,
      duration,
      delayMountUntilShown,
      flipAngleInline,
      flipAngleBlock,
      perspective,
      show,
      animateOnMount,
      exitVisibility,
      ...rest
    }, ref) {
      const lastValidTargetInline = _(flipAngleInline ?? 90);
      const lastValidTargetBlock = _(flipAngleBlock ?? 0);
      h$1(() => {
        if (flipAngleInline) lastValidTargetInline.current = flipAngleInline;
      }, [flipAngleInline]);
      h$1(() => {
        if (flipAngleBlock) lastValidTargetBlock.current = flipAngleBlock;
      }, [flipAngleBlock]);
      if (flipAngleInline == 0) flipAngleInline = lastValidTargetInline.current;
      if (flipAngleBlock == 0) flipAngleBlock = lastValidTargetBlock.current;
      return h$2(Transitionable, {
        measure: false,
        show: show,
        duration: duration,
        animateOnMount: animateOnMount,
        classBase: classBase,
        exitVisibility: exitVisibility,
        delayMountUntilShown: delayMountUntilShown,
        ...useMergedProps(createFlipProps({
          classBase,
          flipAngleInline,
          flipAngleBlock,
          perspective
        }), {
          ...rest,
          ref
        })
      });
    }));

    /**
     * Creates a set of props that implement a swap container.
     * Be sure to merge these returned props with whatever the user passed in.
     */
    function useCreateSwappableProps({
      inline,
      classBase
    }, otherProps) {
      classBase = defaultClassBase(classBase);
      return useMergedProps({
        className: clsx(`${classBase}-swap-container`, inline && `${classBase}-swap-container-inline`)
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
    const Swappable = R(forwardElementRef(function Swappable({
      children: c,
      classBase,
      inline,
      ...p
    }, ref) {
      const children = c;
      console.assert(!!children.type);
      inline ??= typeof children.type === "string" && inlineElements.has(children.type);
      const transitionProps = useCreateSwappableProps({
        classBase,
        inline
      }, {
        ...p,
        ref
      });
      const mergedWithChildren = useMergedProps(transitionProps, children.props);
      const animateOnMount = _(false);
      h$1(() => {
        animateOnMount.current = true;
      }, []);
      const contextValue = _({
        getAnimateOnMount: () => {
          return animateOnMount.current;
        }
      });
      return h$2(SwappableContext.Provider, {
        value: contextValue.current
      }, q$1(children, mergedWithChildren));
    }));
    // If "inline" isn't explicitly provided, we try to implicitly do it based on the child's tag.
    // Not perfect, but it's not supposed to be. `inline` is for perfect.
    const inlineElements = new Set(["a", "abbr", "acronym", "audio", "b", "bdi", "bdo", "big", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "mark", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "tt", "var", "video", "wbr"]);

    "undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.11.3", l$2, {
      Fragment: p$2,
      Component: d$2
    });

    var o = {};
    function a(e) {
      return e.type === p$2 ? "Fragment" : "function" == typeof e.type ? e.type.displayName || e.type.name : "string" == typeof e.type ? e.type : "#text";
    }
    var i = [],
      c = [];
    function s() {
      return i.length > 0 ? i[i.length - 1] : null;
    }
    var u = !1;
    function l(e) {
      return "function" == typeof e.type && e.type != p$2;
    }
    function f(n) {
      for (var e = [n], t = n; null != t.__o;) e.push(t.__o), t = t.__o;
      return e.reduce(function (n, e) {
        n += "  in " + a(e);
        var t = e.__source;
        return t ? n += " (at " + t.fileName + ":" + t.lineNumber + ")" : u || (u = !0, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n + "\n";
      }, "");
    }
    var p = "function" == typeof WeakMap;
    function d(n) {
      return n ? "function" == typeof n.type ? d(n.__) : n : {};
    }
    var h = d$2.prototype.setState;
    d$2.prototype.setState = function (n, e) {
      return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f(s())), h.call(this, n, e);
    };
    var v = d$2.prototype.forceUpdate;
    function y(n) {
      var e = n.props,
        t = a(n),
        o = "";
      for (var r in e) if (e.hasOwnProperty(r) && "children" !== r) {
        var i = e[r];
        "function" == typeof i && (i = "function " + (i.displayName || i.name) + "() {}"), i = Object(i) !== i || i.toString ? i + "" : Object.prototype.toString.call(i), o += " " + r + "=" + JSON.stringify(i);
      }
      var c = e.children;
      return "<" + t + o + (c && c.length ? ">..</" + t + ">" : " />");
    }
    d$2.prototype.forceUpdate = function (n) {
      return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f(s())) : null == this.__P && console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + f(this.__v)), v.call(this, n);
    }, function () {
      !function () {
        var n = l$2.__b,
          t = l$2.diffed,
          o = l$2.__,
          r = l$2.vnode,
          a = l$2.__r;
        l$2.diffed = function (n) {
          l(n) && c.pop(), i.pop(), t && t(n);
        }, l$2.__b = function (e) {
          l(e) && i.push(e), n && n(e);
        }, l$2.__ = function (n, e) {
          c = [], o && o(n, e);
        }, l$2.vnode = function (n) {
          n.__o = c.length > 0 ? c[c.length - 1] : null, r && r(n);
        }, l$2.__r = function (n) {
          l(n) && c.push(n), a && a(n);
        };
      }();
      var n = !1,
        t = l$2.__b,
        r = l$2.diffed,
        s = l$2.vnode,
        u = l$2.__e,
        h = l$2.__,
        v = l$2.__h,
        m = p ? {
          useEffect: new WeakMap(),
          useLayoutEffect: new WeakMap(),
          lazyPropTypes: new WeakMap()
        } : null,
        b = [];
      l$2.__e = function (n, e, t, o) {
        if (e && e.__c && "function" == typeof n.then) {
          var r = n;
          n = new Error("Missing Suspense. The throwing component was: " + a(e));
          for (var i = e; i; i = i.__) if (i.__c && i.__c.__c) {
            n = r;
            break;
          }
          if (n instanceof Error) throw n;
        }
        try {
          (o = o || {}).componentStack = f(e), u(n, e, t, o), "function" != typeof n.then && setTimeout(function () {
            throw n;
          });
        } catch (n) {
          throw n;
        }
      }, l$2.__ = function (n, e) {
        if (!e) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
        var t;
        switch (e.nodeType) {
          case 1:
          case 11:
          case 9:
            t = !0;
            break;
          default:
            t = !1;
        }
        if (!t) {
          var o = a(n);
          throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + e + " instead: render(<" + o + " />, " + e + ");");
        }
        h && h(n, e);
      }, l$2.__b = function (e) {
        var r = e.type,
          i = d(e.__);
        if (n = !0, void 0 === r) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + y(e) + "\n\n" + f(e));
        if (null != r && "object" == typeof r) {
          if (void 0 !== r.__k && void 0 !== r.__e) throw new Error("Invalid type passed to createElement(): " + r + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a(e) + " = " + y(r) + ";\n  let vnode = <My" + a(e) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f(e));
          throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r) ? "array" : r));
        }
        if ("thead" !== r && "tfoot" !== r && "tbody" !== r || "table" === i.type ? "tr" === r && "thead" !== i.type && "tfoot" !== i.type && "tbody" !== i.type && "table" !== i.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y(e) + "\n\n" + f(e)) : "td" === r && "tr" !== i.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y(e) + "\n\n" + f(e)) : "th" === r && "tr" !== i.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + y(e) + "\n\n" + f(e)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y(e) + "\n\n" + f(e)), void 0 !== e.ref && "function" != typeof e.ref && "object" != typeof e.ref && !("$$typeof" in e)) throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got [' + typeof e.ref + "] instead\n" + y(e) + "\n\n" + f(e));
        if ("string" == typeof e.type) for (var c in e.props) if ("o" === c[0] && "n" === c[1] && "function" != typeof e.props[c] && null != e.props[c]) throw new Error("Component's \"" + c + '" property should be a function, but got [' + typeof e.props[c] + "] instead\n" + y(e) + "\n\n" + f(e));
        if ("function" == typeof e.type && e.type.propTypes) {
          if ("Lazy" === e.type.displayName && m && !m.lazyPropTypes.has(e.type)) {
            var s = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
            try {
              var u = e.type();
              m.lazyPropTypes.set(e.type, !0), console.warn(s + "Component wrapped in lazy() is " + a(u));
            } catch (n) {
              console.warn(s + "We will log the wrapped component's name once it is loaded.");
            }
          }
          var l = e.props;
          e.type.__f && delete (l = function (n, e) {
            for (var t in e) n[t] = e[t];
            return n;
          }({}, l)).ref, function (n, e, t, r, a) {
            Object.keys(n).forEach(function (t) {
              var i;
              try {
                i = n[t](e, t, r, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (n) {
                i = n;
              }
              i && !(i.message in o) && (o[i.message] = !0, console.error("Failed prop type: " + i.message + (a && "\n" + a() || "")));
            });
          }(e.type.propTypes, l, 0, a(e), function () {
            return f(e);
          });
        }
        t && t(e);
      }, l$2.__h = function (e, t, o) {
        if (!e || !n) throw new Error("Hook can only be invoked from render methods.");
        v && v(e, t, o);
      };
      var w = function (n, e) {
          return {
            get: function () {
              var t = "get" + n + e;
              b && b.indexOf(t) < 0 && (b.push(t), console.warn("getting vnode." + n + " is deprecated, " + e));
            },
            set: function () {
              var t = "set" + n + e;
              b && b.indexOf(t) < 0 && (b.push(t), console.warn("setting vnode." + n + " is not allowed, " + e));
            }
          };
        },
        g = {
          nodeName: w("nodeName", "use vnode.type"),
          attributes: w("attributes", "use vnode.props"),
          children: w("children", "use vnode.props.children")
        },
        E = Object.create({}, g);
      l$2.vnode = function (n) {
        var e = n.props;
        if (null !== n.type && null != e && ("__source" in e || "__self" in e)) {
          var t = n.props = {};
          for (var o in e) {
            var r = e[o];
            "__source" === o ? n.__source = r : "__self" === o ? n.__self = r : t[o] = r;
          }
        }
        n.__proto__ = E, s && s(n);
      }, l$2.diffed = function (e) {
        if (e.__k && e.__k.forEach(function (n) {
          if (n && void 0 === n.type) {
            delete n.__, delete n.__b;
            var t = Object.keys(n).join(",");
            throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t + "}.\n\n" + f(e));
          }
        }), n = !1, r && r(e), null != e.__k) for (var t = [], o = 0; o < e.__k.length; o++) {
          var a = e.__k[o];
          if (a && null != a.key) {
            var i = a.key;
            if (-1 !== t.indexOf(i)) {
              console.error('Following component has two or more children with the same key attribute: "' + i + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + y(e) + "\n\n" + f(e));
              break;
            }
            t.push(i);
          }
        }
      };
    }();

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
      const [getUrl, setUrl] = usePassiveState(useStableCallback(onUrlChange), T$1(() => window.location.toString(), []));
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

    //export const RouterLevelContext = createContext(0);
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
    }
    // Not public -- just contains shared code for history modification.
    // This is what actually changes History and updates the window's URL.
    function setEntireHash(hash, action) {
      action ??= "push";
      hash = trimHash(hash);
      let oldURL = window.location.toString();
      let nextUrl = new URL(window.location.toString());
      nextUrl.hash = `#${hash}`;
      history[`${action}State`]({}, document.title, nextUrl);
      // Modifying history doesn't actually cause a hashchange event.
      window.dispatchEvent(new HashChangeEvent('hashchange', {
        oldURL,
        newURL: nextUrl.toString()
      }));
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
          return value ?? null;
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
      return value ?? null;
    }
    //export interface RouterChildInfo extends ManagedChildInfo<string> {
    //    notifyOfSiblingsHaveNoMatches(noMatches: boolean): void;
    //path: RouterPathType | null;
    //    matches: boolean | null;
    //}

    function useConsumeRouter({
      context,
      managedChildParameters,
      managedChildParameters: {
        index
      },
      consumeRouterParameters: {
        onLocalPathChange,
        localPath: wantedLocalPath
      }
    }) {
      const {
        routerContext: {
          level,
          notifyParentThatNonDefaultMatchHasChanged
        }
      } = context;
      const [anyMatchesAmongNonDefaultSiblings, setAnyMatchesAmongNonDefaultSiblings] = useState(null);
      const [pathWhenMatching, setPathWhenMatching] = useState(null);
      const {
        managedChildReturn
      } = useManagedChild({
        context,
        managedChildParameters
      }, {
        index,
        setAnyMatchesAmongNonDefaultSiblings: useStableCallback(anyMatches => {
          setAnyMatchesAmongNonDefaultSiblings(anyMatches);
          onLocalPathChange2(wantedLocalPath, anyMatches, getLocalPath());
        })
      });
      s$1(() => {
        onLocalPathChange2(wantedLocalPath, anyMatchesAmongNonDefaultSiblings, getLocalPath());
      }, [wantedLocalPath, anyMatchesAmongNonDefaultSiblings]);
      const onLocalPathChange2 = useStableCallback(function (wantedLocalPath, anyMatchesAmongNonDefaultSiblings, path) {
        const matches = pathCompare(wantedLocalPath, anyMatchesAmongNonDefaultSiblings, path);
        setMatches(matches);
        console.log(`${index}: onLocalPathChange2(wlp: ${(wantedLocalPath ?? "null").toString()}, amands: ${(anyMatchesAmongNonDefaultSiblings ?? "null").toString()}, p: ${path}): ${(matches ?? "null").toString()}`);
        if (matches) setPathWhenMatching(path);
        if (wantedLocalPath != null) {
          notifyParentThatNonDefaultMatchHasChanged(index, matches);
        } else {
          notifyParentThatNonDefaultMatchHasChanged(index, null);
        }
      });
      const [matches, setMatches] = useState(null);
      const [getLocalPath, setLocalPath] = useLocalPath({
        consumeRouterReturn: {
          level
        },
        localRouteParameters: {
          onLocalPathChange: useStableCallback((path, prev, reason) => {
            onLocalPathChange2(wantedLocalPath, anyMatchesAmongNonDefaultSiblings, path);
            onLocalPathChange?.(path, prev, reason);
          })
        }
      });
      return {
        managedChildReturn,
        consumeRouterReturn: {
          level,
          matches,
          getLocalPath,
          setLocalPath,
          pathWhenMatching
        }
      };
    }
    function useLocalPath({
      consumeRouterReturn: {
        level
      },
      localRouteParameters: {
        onLocalPathChange
      }
    }) {
      useEnsureStability("useLocalPath", level);
      const urlToPath = T$1(url => {
        const oldHashPath = normalizeHashToPath(trimHash(new URL(url).hash));
        return oldHashPath[level];
      }, []);
      const [getLocalPath, setLocalPath] = usePassiveState(useStableCallback(onLocalPathChange), T$1(() => {
        return urlToPath(window.location.href);
      }, [urlToPath]));
      // Any time the URL changes, inspect the hash
      // at our current level, and change our local copy of our path
      // in our passive state. This will trigger our callback if they're different.
      useUrl(url => {
        setLocalPath(urlToPath(url));
      });
      return [getLocalPath, setLocalPath];
    }
    function pathCompare(requestedLocalHash, anyMatchesAmongNonDefaultSiblings, localPath) {
      let matches;
      localPath ??= "";
      if (requestedLocalHash instanceof RegExp) matches = requestedLocalHash.test(localPath);else if (requestedLocalHash instanceof Function) matches = requestedLocalHash(localPath);else if (requestedLocalHash == null) matches = anyMatchesAmongNonDefaultSiblings == null ? null : !anyMatchesAmongNonDefaultSiblings;else matches = requestedLocalHash === localPath;
      return matches;
    }

    /**
     * Error class used when attemps to modify the root directory occur.
     */
    class RootRouterError extends Error {
      constructor() {
        super(`The root Router's path can only be pushed to and cannot be set or popped from.`);
      }
    }

    /**
     * Removes the directory at the current level, effectively returning
     * to the previous level.  You can also switch to a different
     * previous level if you would like.
     */
    function usePopLocalPath(level) {
      return T$1(function (dir, action = "push") {
        setEntireHash(popLocalPath(level, dir), action);
      }, [level]);
    }
    function popLocalPath(level, dir) {
      if (level < 0) throw new RootRouterError();
      const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
      let newHashPath = oldHashPath.slice(0, level).map(s => s ?? "");
      if (dir) {
        dir = trimHash(dir);
        newHashPath[newHashPath.length - 1] = dir;
      }
      return newHashPath.join("/");
    }

    /**
     * Adds a directory at one level deeper.
     */
    function usePushLocalPath(level) {
      return T$1(function pushLocalHash(dir, action = "push", keepTrailing) {
        dir = trimHash(dir);
        const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
        let newHashPath = oldHashPath.slice(0, keepTrailing ? undefined : level + 1).map(s => s ?? "");
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
      return T$1(function (dir, action = "push", keepTrailing) {
        setEntireHash(setLocalPath(level, dir, keepTrailing || false), action);
      }, [level]);
    }
    function setLocalPath(level, dir, keepTrailing) {
      if (level < 0) throw new RootRouterError();
      dir = trimHash(dir);
      const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
      let newHashPath = oldHashPath.slice(0, keepTrailing ? undefined : level + 1).map(s => s ?? "");
      newHashPath.splice(level, 1, dir);
      return newHashPath.join("/");
    }

    /**
     * Allows easy access to the controls at the current level.
     *
     * You can also get this information from a child <Router />
     * by passing in a ref (e.g. <Router ref={setControls} />).
     */
    function useRouterControls(level) {
      // This is the hash at this level specifically, 
      // so it contains no directory separators.
      const popLocalPath = usePopLocalPath(level);
      const pushLocalPath = usePushLocalPath(level);
      const setLocalPath = useSetLocalPath(level);
      return F$1(() => ({
        popLocalPath,
        pushLocalPath,
        setLocalPath
      }), [popLocalPath, pushLocalPath, setLocalPath]);
    }

    const RouterContext = B$2(null);
    //const RouterContext = createContext<RouterContextType | null>(null);
    /**
     * The "parent" part of a router.
     *
     * This is responsible for coordinating, among all children, which route to show.
     * This coordination is really only needed for the "default" pathway, which
     * needs to know as painlessly as possible whether any of its siblings are currently valid.
     *
     * It also increases the depth by one, starting at depth=-1 for the root router is *just* a parent.
     */
    function useProvideRouter({
      managedChildrenParameters
    }) {
      const {
        context,
        managedChildrenReturn
      } = useManagedChildren({
        managedChildrenParameters
      });
      const {
        routerContext: {
          level
        }
      } = q(RouterContext) ?? {
        routerContext: {
          level: -1
        }
      };
      const matchingIndices = _(new Set());
      const [getShowingDefault, setShowingDefault] = usePassiveState(useStableCallback(showingDefault => {
        managedChildrenReturn.getChildren().forEach(child => {
          child.setAnyMatchesAmongNonDefaultSiblings(!showingDefault);
        });
      }), returnNull);
      const onNonDefaultChildMatchChanged = useStableCallback((index, matches) => {
        matchingIndices.current[matches ? "add" : "delete"](index);
        setShowingDefault(matchingIndices.current.size == 0);
      });
      return {
        context: useStableObject({
          ...context,
          routerContext: useStableObject({
            level: level + 1,
            notifyParentThatNonDefaultMatchHasChanged: onNonDefaultChildMatchChanged
          })
        }),
        managedChildrenReturn
      };
    }

    /**
     * Allows you to conditionally hide/show content based on a path in the hash component of the URL.
     *
     * @param param0
     * @param ref
     * @returns
     */
    function Router({
      localPath,
      onLocalPathChange,
      children
    }, ref) {
      const context = q(RouterContext);
      const {
        context: contextFromParent,
        managedChildrenReturn
      } = useProvideRouter({
        managedChildrenParameters: {}
      });
      const index = F$1(() => (localPath ?? "<default>") + `-${Math.random()}`, [localPath]);
      let consumeRouterReturn = null;
      useEnsureStability("Router", !!context);
      if (context) {
        consumeRouterReturn = useConsumeRouter({
          consumeRouterParameters: {
            localPath,
            onLocalPathChange
          },
          context,
          managedChildParameters: {
            index
          }
        });
      }
      const {
        consumeRouterReturn: {
          level,
          matches,
          pathWhenMatching
        }
      } = consumeRouterReturn ?? {
        consumeRouterReturn: {
          level: -1,
          matches: null,
          pathWhenMatching: null
        }
      };
      const controls = useRouterControls(level);
      A(ref, () => ({
        level,
        matches,
        pathWhenMatching,
        ...controls
      }));
      return h$2(RouterContext.Provider, {
        value: contextFromParent
      }, children(level == -1 ? "/" : matches ? pathWhenMatching : null, useRouterControls(level)));
    }

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
      const [getSavedParamValue, setSavedParamValue] = usePassiveState(onParamValueChanged, T$1(() => {
        return parseParam(new URL(window.location.toString()), paramKey, type);
      }, []));
      const setParamWithHistory = useStableCallback((newParamValue, reason) => {
        let newParams = new URLSearchParams(new URL(window.location.toString()).searchParams);
        unparseParam(newParams, paramKey, newParamValue, type);
        let nextUrl = new URL(window.location.toString());
        nextUrl.search = prettyPrintParams(newParams);
        history[`${reason ?? "replace"}State`]({}, document.title, nextUrl);
      });
      // Any time the URL changes, it means the Search Param we care about might have changed.
      // Parse it out and save it.
      useUrl(useStableCallback(url => {
        const newParam = parseParam(new URL(url), paramKey, type);
        setSavedParamValue(newParam);
      }));
      return [parseParam(new URL(window.location.toString()), paramKey, type), setParamWithHistory, getSavedParamValue];
    }
    function prettyPrintParams(params) {
      const paramArray = [...params.entries()].filter((key, value) => value != null);
      if (paramArray.length == 0) return "";
      let queryString = paramArray.map(([key, value]) => {
        if (value === "" || value === true) return `${encodeURIComponent(key)}`;else return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }).join("&");
      return `?${queryString}`;
    }

    const Component = () => {
        const [url, setUrl] = useState("");
        useUrl(setUrl);
        const [example, setExample] = useSearchParams("example", "number");
        return (h$2(Router, { localPath: null }, (path, { pushLocalPath, popLocalPath, setLocalPath }) => path != null && h$2("div", null,
            h$2("p", null,
                "This is the current URL: ",
                h$2("code", null, url),
                "."),
            h$2("p", null, "This is content in the root router. It is always displayed, no matter what."),
            h$2("p", null,
                "The ",
                h$2("code", null, "Router"),
                " that's rendering this content cannot have path-related functions performed on it, since the path is always just implicitly ",
                h$2("code", null, "/"),
                "."),
            h$2("p", null, "Just beneath me is a child component that reads the first path after the root."),
            h$2("p", null,
                h$2("button", { onClick: () => { debugger; pushLocalPath("test1"); } }, "Push \"test1\"")),
            h$2("p", null,
                h$2("button", { onClick: () => popLocalPath() }, "Pop")),
            h$2("p", null,
                h$2("button", { onClick: () => setLocalPath("test1") }, "Set \"test1\"")),
            h$2("p", null,
                h$2("label", null,
                    "Search param example: ",
                    h$2("input", { value: example ?? undefined, type: "number", onInput: e => setExample(e.currentTarget.valueAsNumber) }))),
            h$2("hr", null),
            h$2(Swappable, null,
                h$2("div", null,
                    h$2(Level1, null))))));
    };
    function Level1() {
        //const [{ popLocalPath, pushLocalPath, setLocalPath }, setRouteControls] = useState<Partial<RouterControls>>({});
        return (h$2(p$2, null,
            h$2(Router, { localPath: null }, (path, { popLocalPath, pushLocalPath, setLocalPath }) => path != null && h$2("div", null,
                h$2("p", null,
                    "This is within the first-level child ",
                    h$2("code", null, "Router"),
                    " that displays ",
                    h$2("em", null, "default content"),
                    ". That is, if no other ",
                    h$2("code", null, "Router"),
                    " at this level matches (which is presumably true if you're reading this), then ",
                    h$2("em", null, "this"),
                    " ",
                    h$2("code", null, "Router"),
                    " will display."),
                h$2("p", null,
                    "The current path is: ",
                    h$2("code", null, path)),
                h$2("p", null,
                    "These buttons are hooked up to this ",
                    h$2("code", null, "Router"),
                    "'s ",
                    h$2("code", null, "ref"),
                    ", so they control this level in the path."),
                h$2("button", { onClick: () => { debugger; setLocalPath?.(""); } }, "(empty string)"),
                h$2("button", { onClick: () => { debugger; setLocalPath?.("test1"); } }, "test1"),
                h$2("button", { onClick: () => { debugger; setLocalPath?.("test2"); } }, "test2"))),
            h$2(Router, { localPath: "" }, (path) => path != null && h$2("div", null,
                h$2("p", null,
                    "This is within the first-level child ",
                    h$2("code", null, "Router"),
                    " that displays when the path is empty (this is different from the default path, taken when there is no match from anyone at this level)."),
                h$2("p", null,
                    "The current path is: ",
                    h$2("code", null, path))))));
    }
    /*
    function Test1() {


        const [{ popLocalPath: popHash1, pushLocalPath: pushHash1, setLocalPath: setHash1 }, setRouteControls] = useState<Partial<RouterControls>>({});

        return (
            <>
                <p>This is within the first-level child <code>Router</code> that displays when the path is <code>test1</code>.<Test1 /></p>
                <p>Level 1, Test1
                    <button onClick={() => { debugger; pushHash1?.("testa") }}>testA</button>
                    <Router ref={setRouteControls} localPath="testa">
                        <div>A</div>
                    </Router>
                </p>
            </>

        )
    }

    function Test2() {
        const [route0Controls, setRoute0Controls] = useState<RouterRefType | null>(null);
        const [route1Controls, setRoute1Controls] = useState<RouterRefType | null>(null);

        const [param, setParam] = useSearchParams("param", "boolean");
        console.log(param == null ? "<null>" : param);
        return (<>
            Test2: "{param == null ? "<null>" : param}".
            <Swappable>
                <span>
                    <Router ref={setRoute1Controls} localPath="">
                        <div>
                            Test2
                            <button onClick={() => route1Controls?.setLocalPath?.("testa")}>testA</button>
                        </div>
                    </Router>
                    <Router ref={setRoute1Controls} localPath="testa">
                        <div>
                            <div>A</div>
                            <label><input checked={param ?? false} type="checkbox" onInput={e => { e.preventDefault(); setParam(e.currentTarget.checked) }} />Checkbox</label>
                        </div>
                    </Router>
                </span>
            </Swappable>
        </>
        )
    }*/
    requestAnimationFrame(() => {
        P(h$2(Component, null), document.getElementById("root"));
    });

})();
