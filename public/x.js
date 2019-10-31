!function (t, e) {
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = t.document ? e(t, !0)  : function (t) {
    if (!t.document) throw new Error('jQuery requires a window with a document');
    return e(t)
  }
   : e(t)
}('undefined' != typeof window ? window : this, function (t, e) {
  function r(t) {
    var e = !!t && 'length' in t && t.length,
    r = ot.type(t);
    return 'function' !== r && !ot.isWindow(t) && ('array' === r || 0 === e || 'number' == typeof e && e > 0 && e - 1 in t)
  }
  function n(t, e, r) {
    if (ot.isFunction(e)) return ot.grep(t, function (t, n) {
      return !!e.call(t, n, t) !== r
    });
    if (e.nodeType) return ot.grep(t, function (t) {
      return t === e !== r
    });
    if ('string' == typeof e) {
      if (mt.test(e)) return ot.filter(e, t, r);
      e = ot.filter(e, t)
    }
    return ot.grep(t, function (t) {
      return K.call(e, t) > - 1 !== r
    })
  }
  function i(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t
  }
  function o(t) {
    var e = {
    };
    return ot.each(t.match(bt) || [
    ], function (t, r) {
      e[r] = !0
    }),
    e
  }
  function s() {
    $.removeEventListener('DOMContentLoaded', s),
    t.removeEventListener('load', s),
    ot.ready()
  }
  function a() {
    this.expando = ot.expando + a.uid++
  }
  function l(t, e, r) {
    var n;
    if (void 0 === r && 1 === t.nodeType) if (n = 'data-' + e.replace(kt, '-$&').toLowerCase(), r = t.getAttribute(n), 'string' == typeof r) {
      try {
        r = 'true' === r || 'false' !== r && ('null' === r ? null : + r + '' === r ? + r : Rt.test(r) ? ot.parseJSON(r)  : r)
      } catch (t) {
      }
      Mt.set(t, e, r)
    } else r = void 0;
    return r
  }
  function u(t, e, r, n) {
    var i,
    o = 1,
    s = 20,
    a = n ? function () {
      return n.cur()
    }
     : function () {
      return ot.css(t, e, '')
    },
    l = a(),
    u = r && r[3] || (ot.cssNumber[e] ? '' : 'px'),
    h = (ot.cssNumber[e] || 'px' !== u && + l) && Dt.exec(ot.css(t, e));
    if (h && h[3] !== u) {
      u = u || h[3],
      r = r || [
      ],
      h = + l || 1;
      do o = o || '.5',
      h /= o,
      ot.style(t, e, h + u);
      while (o !== (o = a() / l) && 1 !== o && --s)
    }
    return r && (h = + h || + l || 0, i = r[1] ? h + (r[1] + 1) * r[2] : + r[2], n && (n.unit = u, n.start = h, n.end = i)),
    i
  }
  function h(t, e) {
    var r = 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e || '*')  : 'undefined' != typeof t.querySelectorAll ? t.querySelectorAll(e || '*')  : [
    ];
    return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], r)  : r
  }
  function c(t, e) {
    for (var r = 0, n = t.length; r < n; r++) Ct.set(t[r], 'globalEval', !e || Ct.get(e[r], 'globalEval'))
  }
  function p(t, e, r, n, i) {
    for (var o, s, a, l, u, p, f = e.createDocumentFragment(), d = [
    ], m = 0, g = t.length; m < g; m++) if (o = t[m], o || 0 === o) if ('object' === ot.type(o)) ot.merge(d, o.nodeType ? [
      o
    ] : o);
     else if (Ft.test(o)) {
      for (s = s || f.appendChild(e.createElement('div')), a = (Nt.exec(o) || [
        '',
        ''
      ]) [1].toLowerCase(), l = Lt[a] || Lt._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], p = l[0]; p--; ) s = s.lastChild;
      ot.merge(d, s.childNodes),
      s = f.firstChild,
      s.textContent = ''
    } else d.push(e.createTextNode(o));
    for (f.textContent = '', m = 0; o = d[m++]; ) if (n && ot.inArray(o, n) > - 1) i && i.push(o);
     else if (u = ot.contains(o.ownerDocument, o), s = h(f.appendChild(o), 'script'), u && c(s), r) for (p = 0; o = s[p++]; ) It.test(o.type || '') && r.push(o);
    return f
  }
  function f() {
    return !0
  }
  function d() {
    return !1
  }
  function m() {
    try {
      return $.activeElement
    } catch (t) {
    }
  }
  function g(t, e, r, n, i, o) {
    var s,
    a;
    if ('object' == typeof e) {
      'string' != typeof r && (n = n || r, r = void 0);
      for (a in e) g(t, a, r, n, e[a], o);
      return t
    }
    if (null == n && null == i ? (i = r, n = r = void 0)  : null == i && ('string' == typeof r ? (i = n, n = void 0)  : (i = n, n = r, r = void 0)), i === !1) i = d;
     else if (!i) return t;
    return 1 === o && (s = i, i = function (t) {
      return ot().off(t),
      s.apply(this, arguments)
    }, i.guid = s.guid || (s.guid = ot.guid++)),
    t.each(function () {
      ot.event.add(this, e, i, n, r)
    })
  }
  function y(t, e) {
    return ot.nodeName(t, 'table') && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, 'tr') ? t.getElementsByTagName('tbody') [0] || t.appendChild(t.ownerDocument.createElement('tbody'))  : t
  }
  function v(t) {
    return t.type = (null !== t.getAttribute('type')) + '/' + t.type,
    t
  }
  function _(t) {
    var e = qt.exec(t.type);
    return e ? t.type = e[1] : t.removeAttribute('type'),
    t
  }
  function x(t, e) {
    var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u;
    if (1 === e.nodeType) {
      if (Ct.hasData(t) && (o = Ct.access(t), s = Ct.set(e, o), u = o.events)) {
        delete s.handle,
        s.events = {
        };
        for (i in u) for (r = 0, n = u[i].length; r < n; r++) ot.event.add(e, i, u[i][r])
      }
      Mt.hasData(t) && (a = Mt.access(t), l = ot.extend({
      }, a), Mt.set(e, l))
    }
  }
  function b(t, e) {
    var r = e.nodeName.toLowerCase();
    'input' === r && Ot.test(t.type) ? e.checked = t.checked : 'input' !== r && 'textarea' !== r || (e.defaultValue = t.defaultValue)
  }
  function w(t, e, r, n) {
    e = J.apply([], e);
    var i,
    o,
    s,
    a,
    l,
    u,
    c = 0,
    f = t.length,
    d = f - 1,
    m = e[0],
    g = ot.isFunction(m);
    if (g || f > 1 && 'string' == typeof m && !nt.checkClone && Gt.test(m)) return t.each(function (i) {
      var o = t.eq(i);
      g && (e[0] = m.call(this, i, o.html())),
      w(o, e, r, n)
    });
    if (f && (i = p(e, t[0].ownerDocument, !1, t, n), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || n)) {
      for (s = ot.map(h(i, 'script'), v), a = s.length; c < f; c++) l = i,
      c !== d && (l = ot.clone(l, !0, !0), a && ot.merge(s, h(l, 'script'))),
      r.call(t[c], l, c);
      if (a) for (u = s[s.length - 1].ownerDocument, ot.map(s, _), c = 0; c < a; c++) l = s[c],
      It.test(l.type || '') && !Ct.access(l, 'globalEval') && ot.contains(u, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src)  : ot.globalEval(l.textContent.replace(Wt, '')))
    }
    return t
  }
  function T(t, e, r) {
    for (var n, i = e ? ot.filter(e, t)  : t, o = 0; null != (n = i[o]); o++) r || 1 !== n.nodeType || ot.cleanData(h(n)),
    n.parentNode && (r && ot.contains(n.ownerDocument, n) && c(h(n, 'script')), n.parentNode.removeChild(n));
    return t
  }
  function S(t, e) {
    var r = ot(e.createElement(t)).appendTo(e.body),
    n = ot.css(r[0], 'display');
    return r.detach(),
    n
  }
  function C(t) {
    var e = $,
    r = Vt[t];
    return r || (r = S(t, e), 'none' !== r && r || (zt = (zt || ot('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(e.documentElement), e = zt[0].contentDocument, e.write(), e.close(), r = S(t, e), zt.detach()), Vt[t] = r),
    r
  }
  function M(t, e, r) {
    var n,
    i,
    o,
    s,
    a = t.style;
    return r = r || Zt(t),
    s = r ? r.getPropertyValue(e) || r[e] : void 0,
    '' !== s && void 0 !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)),
    r && !nt.pixelMarginRight() && $t.test(s) && Xt.test(e) && (n = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = r.width, a.width = n, a.minWidth = i, a.maxWidth = o),
    void 0 !== s ? s + '' : s
  }
  function R(t, e) {
    return {
      get: function () {
        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
      }
    }
  }
  function k(t) {
    if (t in ne) return t;
    for (var e = t[0].toUpperCase() + t.slice(1), r = re.length; r--; ) if (t = re[r] + e, t in ne) return t
  }
  function P(t, e, r) {
    var n = Dt.exec(e);
    return n ? Math.max(0, n[2] - (r || 0)) + (n[3] || 'px')  : e
  }
  function D(t, e, r, n, i) {
    for (var o = r === (n ? 'border' : 'content') ? 4 : 'width' === e ? 1 : 0, s = 0; o < 4; o += 2) 'margin' === r && (s += ot.css(t, r + At[o], !0, i)),
    n ? ('content' === r && (s -= ot.css(t, 'padding' + At[o], !0, i)), 'margin' !== r && (s -= ot.css(t, 'border' + At[o] + 'Width', !0, i)))  : (s += ot.css(t, 'padding' + At[o], !0, i), 'padding' !== r && (s += ot.css(t, 'border' + At[o] + 'Width', !0, i)));
    return s
  }
  function A(t, e, r) {
    var n = !0,
    i = 'width' === e ? t.offsetWidth : t.offsetHeight,
    o = Zt(t),
    s = 'border-box' === ot.css(t, 'boxSizing', !1, o);
    if (i <= 0 || null == i) {
      if (i = M(t, e, o), (i < 0 || null == i) && (i = t.style[e]), $t.test(i)) return i;
      n = s && (nt.boxSizingReliable() || i === t.style[e]),
      i = parseFloat(i) || 0
    }
    return i + D(t, e, r || (s ? 'border' : 'content'), n, o) + 'px'
  }
  function E(t, e) {
    for (var r, n, i, o = [
    ], s = 0, a = t.length; s < a; s++) n = t[s],
    n.style && (o[s] = Ct.get(n, 'olddisplay'), r = n.style.display, e ? (o[s] || 'none' !== r || (n.style.display = ''), '' === n.style.display && Et(n) && (o[s] = Ct.access(n, 'olddisplay', C(n.nodeName))))  : (i = Et(n), 'none' === r && i || Ct.set(n, 'olddisplay', i ? r : ot.css(n, 'display'))));
    for (s = 0; s < a; s++) n = t[s],
    n.style && (e && 'none' !== n.style.display && '' !== n.style.display || (n.style.display = e ? o[s] || '' : 'none'));
    return t
  }
  function O(t, e, r, n, i) {
    return new O.prototype.init(t, e, r, n, i)
  }
  function N() {
    return t.setTimeout(function () {
      ie = void 0
    }),
    ie = ot.now()
  }
  function I(t, e) {
    var r,
    n = 0,
    i = {
      height: t
    };
    for (e = e ? 1 : 0; n < 4; n += 2 - e) r = At[n],
    i['margin' + r] = i['padding' + r] = t;
    return e && (i.opacity = i.width = t),
    i
  }
  function L(t, e, r) {
    for (var n, i = (B.tweeners[e] || [
    ]).concat(B.tweeners['*']), o = 0, s = i.length; o < s; o++) if (n = i[o].call(r, e, t)) return n
  }
  function F(t, e, r) {
    var n,
    i,
    o,
    s,
    a,
    l,
    u,
    h,
    c = this,
    p = {
    },
    f = t.style,
    d = t.nodeType && Et(t),
    m = Ct.get(t, 'fxshow');
    r.queue || (a = ot._queueHooks(t, 'fx'), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
      a.unqueued || l()
    }), a.unqueued++, c.always(function () {
      c.always(function () {
        a.unqueued--,
        ot.queue(t, 'fx').length || a.empty.fire()
      })
    })),
    1 === t.nodeType && ('height' in e || 'width' in e) && (r.overflow = [
      f.overflow,
      f.overflowX,
      f.overflowY
    ], u = ot.css(t, 'display'), h = 'none' === u ? Ct.get(t, 'olddisplay') || C(t.nodeName)  : u, 'inline' === h && 'none' === ot.css(t, 'float') && (f.display = 'inline-block')),
    r.overflow && (f.overflow = 'hidden', c.always(function () {
      f.overflow = r.overflow[0],
      f.overflowX = r.overflow[1],
      f.overflowY = r.overflow[2]
    }));
    for (n in e) if (i = e[n], se.exec(i)) {
      if (delete e[n], o = o || 'toggle' === i, i === (d ? 'hide' : 'show')) {
        if ('show' !== i || !m || void 0 === m[n]) continue;
        d = !0
      }
      p[n] = m && m[n] || ot.style(t, n)
    } else u = void 0;
    if (ot.isEmptyObject(p)) 'inline' === ('none' === u ? C(t.nodeName)  : u) && (f.display = u);
     else {
      m ? 'hidden' in m && (d = m.hidden)  : m = Ct.access(t, 'fxshow', {
      }),
      o && (m.hidden = !d),
      d ? ot(t).show()  : c.done(function () {
        ot(t).hide()
      }),
      c.done(function () {
        var e;
        Ct.remove(t, 'fxshow');
        for (e in p) ot.style(t, e, p[e])
      });
      for (n in p) s = L(d ? m[n] : 0, n, c),
      n in m || (m[n] = s.start, d && (s.end = s.start, s.start = 'width' === n || 'height' === n ? 1 : 0))
    }
  }
  function U(t, e) {
    var r,
    n,
    i,
    o,
    s;
    for (r in t) if (n = ot.camelCase(r), i = e[n], o = t[r], ot.isArray(o) && (i = o[1], o = t[r] = o[0]), r !== n && (t[n] = o, delete t[r]), s = ot.cssHooks[n], s && 'expand' in s) {
      o = s.expand(o),
      delete t[n];
      for (r in o) r in t || (t[r] = o[r], e[r] = i)
    } else e[n] = i
  }
  function B(t, e, r) {
    var n,
    i,
    o = 0,
    s = B.prefilters.length,
    a = ot.Deferred().always(function () {
      delete l.elem
    }),
    l = function () {
      if (i) return !1;
      for (var e = ie || N(), r = Math.max(0, u.startTime + u.duration - e), n = r / u.duration || 0, o = 1 - n, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(o);
      return a.notifyWith(t, [
        u,
        o,
        r
      ]),
      o < 1 && l ? r : (a.resolveWith(t, [
        u
      ]), !1)
    },
    u = a.promise({
      elem: t,
      props: ot.extend({
      }, e),
      opts: ot.extend(!0, {
        specialEasing: {
        },
        easing: ot.easing._default
      }, r),
      originalProperties: e,
      originalOptions: r,
      startTime: ie || N(),
      duration: r.duration,
      tweens: [
      ],
      createTween: function (e, r) {
        var n = ot.Tween(t, u.opts, e, r, u.opts.specialEasing[e] || u.opts.easing);
        return u.tweens.push(n),
        n
      },
      stop: function (e) {
        var r = 0,
        n = e ? u.tweens.length : 0;
        if (i) return this;
        for (i = !0; r < n; r++) u.tweens[r].run(1);
        return e ? (a.notifyWith(t, [
          u,
          1,
          0
        ]), a.resolveWith(t, [
          u,
          e
        ]))  : a.rejectWith(t, [
          u,
          e
        ]),
        this
      }
    }),
    h = u.props;
    for (U(h, u.opts.specialEasing); o < s; o++) if (n = B.prefilters[o].call(u, t, h, u.opts)) return ot.isFunction(n.stop) && (ot._queueHooks(u.elem, u.opts.queue).stop = ot.proxy(n.stop, n)),
    n;
    return ot.map(h, L, u),
    ot.isFunction(u.opts.start) && u.opts.start.call(t, u),
    ot.fx.timer(ot.extend(l, {
      elem: t,
      anim: u,
      queue: u.opts.queue
    })),
    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
  }
  function H(t) {
    return t.getAttribute && t.getAttribute('class') || ''
  }
  function j(t) {
    return function (e, r) {
      'string' != typeof e && (r = e, e = '*');
      var n,
      i = 0,
      o = e.toLowerCase().match(bt) || [
      ];
      if (ot.isFunction(r)) for (; n = o[i++]; ) '+' === n[0] ? (n = n.slice(1) || '*', (t[n] = t[n] || [
      ]).unshift(r))  : (t[n] = t[n] || [
      ]).push(r)
    }
  }
  function Y(t, e, r, n) {
    function i(a) {
      var l;
      return o[a] = !0,
      ot.each(t[a] || [
      ], function (t, a) {
        var u = a(e, r, n);
        return 'string' != typeof u || s || o[u] ? s ? !(l = u)  : void 0 : (e.dataTypes.unshift(u), i(u), !1)
      }),
      l
    }
    var o = {
    },
    s = t === Me;
    return i(e.dataTypes[0]) || !o['*'] && i('*')
  }
  function G(t, e) {
    var r,
    n,
    i = ot.ajaxSettings.flatOptions || {
    };
    for (r in e) void 0 !== e[r] && ((i[r] ? t : n || (n = {
    })) [r] = e[r]);
    return n && ot.extend(!0, t, n),
    t
  }
  function q(t, e, r) {
    for (var n, i, o, s, a = t.contents, l = t.dataTypes; '*' === l[0]; ) l.shift(),
    void 0 === n && (n = t.mimeType || e.getResponseHeader('Content-Type'));
    if (n) for (i in a) if (a[i] && a[i].test(n)) {
      l.unshift(i);
      break
    }
    if (l[0] in r) o = l[0];
     else {
      for (i in r) {
        if (!l[0] || t.converters[i + ' ' + l[0]]) {
          o = i;
          break
        }
        s || (s = i)
      }
      o = o || s
    }
    if (o) return o !== l[0] && l.unshift(o),
    r[o]
  }
  function W(t, e, r, n) {
    var i,
    o,
    s,
    a,
    l,
    u = {
    },
    h = t.dataTypes.slice();
    if (h[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
    for (o = h.shift(); o; ) if (t.responseFields[o] && (r[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift()) if ('*' === o) o = l;
     else if ('*' !== l && l !== o) {
      if (s = u[l + ' ' + o] || u['* ' + o], !s) for (i in u) if (a = i.split(' '), a[1] === o && (s = u[l + ' ' + a[0]] || u['* ' + a[0]])) {
        s === !0 ? s = u[i] : u[i] !== !0 && (o = a[0], h.unshift(a[1]));
        break
      }
      if (s !== !0) if (s && t.throws) e = s(e);
       else try {
        e = s(e)
      } catch (t) {
        return {
          state: 'parsererror',
          error: s ? t : 'No conversion from ' + l + ' to ' + o
        }
      }
    }
    return {
      state: 'success',
      data: e
    }
  }
  function z(t, e, r, n) {
    var i;
    if (ot.isArray(e)) ot.each(e, function (e, i) {
      r || De.test(t) ? n(t, i)  : z(t + '[' + ('object' == typeof i && null != i ? e : '') + ']', i, r, n)
    });
     else if (r || 'object' !== ot.type(e)) n(t, e);
     else for (i in e) z(t + '[' + i + ']', e[i], r, n)
  }
  function V(t) {
    return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
  }
  var X = [
  ],
  $ = t.document,
  Z = X.slice,
  J = X.concat,
  Q = X.push,
  K = X.indexOf,
  tt = {
  },
  et = tt.toString,
  rt = tt.hasOwnProperty,
  nt = {
  },
  it = '2.2.4',
  ot = function (t, e) {
    return new ot.fn.init(t, e)
  },
  st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  at = /^-ms-/,
  lt = /-([\da-z])/gi,
  ut = function (t, e) {
    return e.toUpperCase()
  };
  ot.fn = ot.prototype = {
    jquery: it,
    constructor: ot,
    selector: '',
    length: 0,
    toArray: function () {
      return Z.call(this)
    },
    get: function (t) {
      return null != t ? t < 0 ? this[t + this.length] : this[t] : Z.call(this)
    },
    pushStack: function (t) {
      var e = ot.merge(this.constructor(), t);
      return e.prevObject = this,
      e.context = this.context,
      e
    },
    each: function (t) {
      return ot.each(this, t)
    },
    map: function (t) {
      return this.pushStack(ot.map(this, function (e, r) {
        return t.call(e, r, e)
      }))
    },
    slice: function () {
      return this.pushStack(Z.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq( - 1)
    },
    eq: function (t) {
      var e = this.length,
      r = + t + (t < 0 ? e : 0);
      return this.pushStack(r >= 0 && r < e ? [
        this[r]
      ] : [
      ])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: Q,
    sort: X.sort,
    splice: X.splice
  },
  ot.extend = ot.fn.extend = function () {
    var t,
    e,
    r,
    n,
    i,
    o,
    s = arguments[0] || {
    },
    a = 1,
    l = arguments.length,
    u = !1;
    for ('boolean' == typeof s && (u = s, s = arguments[a] || {
    }, a++), 'object' == typeof s || ot.isFunction(s) || (s = {
    }), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) r = s[e],
    n = t[e],
    s !== n && (u && n && (ot.isPlainObject(n) || (i = ot.isArray(n))) ? (i ? (i = !1, o = r && ot.isArray(r) ? r : [
    ])  : o = r && ot.isPlainObject(r) ? r : {
    }, s[e] = ot.extend(u, o, n))  : void 0 !== n && (s[e] = n));
    return s
  },
  ot.extend({
    expando: 'jQuery' + (it + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (t) {
      throw new Error(t)
    },
    noop: function () {
    },
    isFunction: function (t) {
      return 'function' === ot.type(t)
    },
    isArray: Array.isArray,
    isWindow: function (t) {
      return null != t && t === t.window
    },
    isNumeric: function (t) {
      var e = t && t.toString();
      return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
    },
    isPlainObject: function (t) {
      var e;
      if ('object' !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
      if (t.constructor && !rt.call(t, 'constructor') && !rt.call(t.constructor.prototype || {
      }, 'isPrototypeOf')) return !1;
      for (e in t);
      return void 0 === e || rt.call(t, e)
    },
    isEmptyObject: function (t) {
      var e;
      for (e in t) return !1;
      return !0
    },
    type: function (t) {
      return null == t ? t + '' : 'object' == typeof t || 'function' == typeof t ? tt[et.call(t)] || 'object' : typeof t
    },
    globalEval: function (t) {
      var e,
      r = eval;
      t = ot.trim(t),
      t && (1 === t.indexOf('use strict') ? (e = $.createElement('script'), e.text = t, $.head.appendChild(e).parentNode.removeChild(e))  : r(t))
    },
    camelCase: function (t) {
      return t.replace(at, 'ms-').replace(lt, ut)
    },
    nodeName: function (t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    },
    each: function (t, e) {
      var n,
      i = 0;
      if (r(t)) for (n = t.length; i < n && e.call(t[i], i, t[i]) !== !1; i++);
       else for (i in t) if (e.call(t[i], i, t[i]) === !1) break;
      return t
    },
    trim: function (t) {
      return null == t ? '' : (t + '').replace(st, '')
    },
    makeArray: function (t, e) {
      var n = e || [
      ];
      return null != t && (r(Object(t)) ? ot.merge(n, 'string' == typeof t ? [
        t
      ] : t)  : Q.call(n, t)),
      n
    },
    inArray: function (t, e, r) {
      return null == e ? - 1 : K.call(e, t, r)
    },
    merge: function (t, e) {
      for (var r = + e.length, n = 0, i = t.length; n < r; n++) t[i++] = e[n];
      return t.length = i,
      t
    },
    grep: function (t, e, r) {
      for (var n, i = [
      ], o = 0, s = t.length, a = !r; o < s; o++) n = !e(t[o], o),
      n !== a && i.push(t[o]);
      return i
    },
    map: function (t, e, n) {
      var i,
      o,
      s = 0,
      a = [
      ];
      if (r(t)) for (i = t.length; s < i; s++) o = e(t[s], s, n),
      null != o && a.push(o);
       else for (s in t) o = e(t[s], s, n),
      null != o && a.push(o);
      return J.apply([], a)
    },
    guid: 1,
    proxy: function (t, e) {
      var r,
      n,
      i;
      if ('string' == typeof e && (r = t[e], e = t, t = r), ot.isFunction(t)) return n = Z.call(arguments, 2),
      i = function () {
        return t.apply(e || this, n.concat(Z.call(arguments)))
      },
      i.guid = t.guid = t.guid || ot.guid++,
      i
    },
    now: Date.now,
    support: nt
  }),
  'function' == typeof Symbol && (ot.fn[Symbol.iterator] = X[Symbol.iterator]),
  ot.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (t, e) {
    tt['[object ' + e + ']'] = e.toLowerCase()
  });
  var ht = function (t) {
    function e(t, e, r, n) {
      var i,
      o,
      s,
      a,
      l,
      u,
      c,
      f,
      d = e && e.ownerDocument,
      m = e ? e.nodeType : 9;
      if (r = r || [
      ], 'string' != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return r;
      if (!n && ((e ? e.ownerDocument || e : H) !== E && A(e), e = e || E, N)) {
        if (11 !== m && (u = yt.exec(t))) if (i = u[1]) {
          if (9 === m) {
            if (!(s = e.getElementById(i))) return r;
            if (s.id === i) return r.push(s),
            r
          } else if (d && (s = d.getElementById(i)) && U(e, s) && s.id === i) return r.push(s),
          r
        } else {
          if (u[2]) return Q.apply(r, e.getElementsByTagName(t)),
          r;
          if ((i = u[3]) && b.getElementsByClassName && e.getElementsByClassName) return Q.apply(r, e.getElementsByClassName(i)),
          r
        }
        if (b.qsa && !W[t + ' '] && (!I || !I.test(t))) {
          if (1 !== m) d = e,
          f = t;
           else if ('object' !== e.nodeName.toLowerCase()) {
            for ((a = e.getAttribute('id')) ? a = a.replace(_t, '\\$&')  : e.setAttribute('id', a = B), c = C(t), o = c.length, l = pt.test(a) ? '#' + a : '[id=\'' + a + '\']'; o--; ) c[o] = l + ' ' + p(c[o]);
            f = c.join(','),
            d = vt.test(t) && h(e.parentNode) || e
          }
          if (f) try {
            return Q.apply(r, d.querySelectorAll(f)),
            r
          } catch (t) {
          } finally {
            a === B && e.removeAttribute('id')
          }
        }
      }
      return R(t.replace(at, '$1'), e, r, n)
    }
    function r() {
      function t(r, n) {
        return e.push(r + ' ') > w.cacheLength && delete t[e.shift()],
        t[r + ' '] = n
      }
      var e = [
      ];
      return t
    }
    function n(t) {
      return t[B] = !0,
      t
    }
    function i(t) {
      var e = E.createElement('div');
      try {
        return !!t(e)
      } catch (t) {
        return !1
      } finally {
        e.parentNode && e.parentNode.removeChild(e),
        e = null
      }
    }
    function o(t, e) {
      for (var r = t.split('|'), n = r.length; n--; ) w.attrHandle[r[n]] = e
    }
    function s(t, e) {
      var r = e && t,
      n = r && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
      if (n) return n;
      if (r) for (; r = r.nextSibling; ) if (r === e) return - 1;
      return t ? 1 : - 1
    }
    function a(t) {
      return function (e) {
        var r = e.nodeName.toLowerCase();
        return 'input' === r && e.type === t
      }
    }
    function l(t) {
      return function (e) {
        var r = e.nodeName.toLowerCase();
        return ('input' === r || 'button' === r) && e.type === t
      }
    }
    function u(t) {
      return n(function (e) {
        return e = + e,
        n(function (r, n) {
          for (var i, o = t([], r.length, e), s = o.length; s--; ) r[i = o[s]] && (r[i] = !(n[i] = r[i]))
        })
      })
    }
    function h(t) {
      return t && 'undefined' != typeof t.getElementsByTagName && t
    }
    function c() {
    }
    function p(t) {
      for (var e = 0, r = t.length, n = ''; e < r; e++) n += t[e].value;
      return n
    }
    function f(t, e, r) {
      var n = e.dir,
      i = r && 'parentNode' === n,
      o = Y++;
      return e.first ? function (e, r, o) {
        for (; e = e[n]; ) if (1 === e.nodeType || i) return t(e, r, o)
      }
       : function (e, r, s) {
        var a,
        l,
        u,
        h = [
          j,
          o
        ];
        if (s) {
          for (; e = e[n]; ) if ((1 === e.nodeType || i) && t(e, r, s)) return !0
        } else for (; e = e[n]; ) if (1 === e.nodeType || i) {
          if (u = e[B] || (e[B] = {
          }), l = u[e.uniqueID] || (u[e.uniqueID] = {
          }), (a = l[n]) && a[0] === j && a[1] === o) return h[2] = a[2];
          if (l[n] = h, h[2] = t(e, r, s)) return !0
        }
      }
    }
    function d(t) {
      return t.length > 1 ? function (e, r, n) {
        for (var i = t.length; i--; ) if (!t[i](e, r, n)) return !1;
        return !0
      }
       : t[0]
    }
    function m(t, r, n) {
      for (var i = 0, o = r.length; i < o; i++) e(t, r[i], n);
      return n
    }
    function g(t, e, r, n, i) {
      for (var o, s = [
      ], a = 0, l = t.length, u = null != e; a < l; a++) (o = t[a]) && (r && !r(o, n, i) || (s.push(o), u && e.push(a)));
      return s
    }
    function y(t, e, r, i, o, s) {
      return i && !i[B] && (i = y(i)),
      o && !o[B] && (o = y(o, s)),
      n(function (n, s, a, l) {
        var u,
        h,
        c,
        p = [
        ],
        f = [
        ],
        d = s.length,
        y = n || m(e || '*', a.nodeType ? [
          a
        ] : a, [
        ]),
        v = !t || !n && e ? y : g(y, p, t, a, l),
        _ = r ? o || (n ? t : d || i) ? [
        ] : s : v;
        if (r && r(v, _, a, l), i) for (u = g(_, f), i(u, [
        ], a, l), h = u.length; h--; ) (c = u[h]) && (_[f[h]] = !(v[f[h]] = c));
        if (n) {
          if (o || t) {
            if (o) {
              for (u = [
              ], h = _.length; h--; ) (c = _[h]) && u.push(v[h] = c);
              o(null, _ = [
              ], u, l)
            }
            for (h = _.length; h--; ) (c = _[h]) && (u = o ? tt(n, c)  : p[h]) > - 1 && (n[u] = !(s[u] = c))
          }
        } else _ = g(_ === s ? _.splice(d, _.length)  : _),
        o ? o(null, s, _, l)  : Q.apply(s, _)
      })
    }
    function v(t) {
      for (var e, r, n, i = t.length, o = w.relative[t[0].type], s = o || w.relative[' '], a = o ? 1 : 0, l = f(function (t) {
        return t === e
      }, s, !0), u = f(function (t) {
        return tt(e, t) > - 1
      }, s, !0), h = [
        function (t, r, n) {
          var i = !o && (n || r !== k) || ((e = r).nodeType ? l(t, r, n)  : u(t, r, n));
          return e = null,
          i
        }
      ]; a < i; a++) if (r = w.relative[t[a].type]) h = [
        f(d(h), r)
      ];
       else {
        if (r = w.filter[t[a].type].apply(null, t[a].matches), r[B]) {
          for (n = ++a; n < i && !w.relative[t[n].type]; n++);
          return y(a > 1 && d(h), a > 1 && p(t.slice(0, a - 1).concat({
            value: ' ' === t[a - 2].type ? '*' : ''
          })).replace(at, '$1'), r, a < n && v(t.slice(a, n)), n < i && v(t = t.slice(n)), n < i && p(t))
        }
        h.push(r)
      }
      return d(h)
    }
    function _(t, r) {
      var i = r.length > 0,
      o = t.length > 0,
      s = function (n, s, a, l, u) {
        var h,
        c,
        p,
        f = 0,
        d = '0',
        m = n && [
        ],
        y = [
        ],
        v = k,
        _ = n || o && w.find.TAG('*', u),
        x = j += null == v ? 1 : Math.random() || 0.1,
        b = _.length;
        for (u && (k = s === E || s || u); d !== b && null != (h = _[d]); d++) {
          if (o && h) {
            for (c = 0, s || h.ownerDocument === E || (A(h), a = !N); p = t[c++]; ) if (p(h, s || E, a)) {
              l.push(h);
              break
            }
            u && (j = x)
          }
          i && ((h = !p && h) && f--, n && m.push(h))
        }
        if (f += d, i && d !== f) {
          for (c = 0; p = r[c++]; ) p(m, y, s, a);
          if (n) {
            if (f > 0) for (; d--; ) m[d] || y[d] || (y[d] = Z.call(l));
            y = g(y)
          }
          Q.apply(l, y),
          u && !n && y.length > 0 && f + r.length > 1 && e.uniqueSort(l)
        }
        return u && (j = x, k = v),
        m
      };
      return i ? n(s)  : s
    }
    var x,
    b,
    w,
    T,
    S,
    C,
    M,
    R,
    k,
    P,
    D,
    A,
    E,
    O,
    N,
    I,
    L,
    F,
    U,
    B = 'sizzle' + 1 * new Date,
    H = t.document,
    j = 0,
    Y = 0,
    G = r(),
    q = r(),
    W = r(),
    z = function (t, e) {
      return t === e && (D = !0),
      0
    },
    V = 1 << 31,
    X = {
    }.hasOwnProperty,
    $ = [
    ],
    Z = $.pop,
    J = $.push,
    Q = $.push,
    K = $.slice,
    tt = function (t, e) {
      for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
      return - 1
    },
    et = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
    rt = '[\\x20\\t\\r\\n\\f]',
    nt = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
    it = '\\[' + rt + '*(' + nt + ')(?:' + rt + '*([*^$|!~]?=)' + rt + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + nt + '))|)' + rt + '*\\]',
    ot = ':(' + nt + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + it + ')*)|.*)\\)|)',
    st = new RegExp(rt + '+', 'g'),
    at = new RegExp('^' + rt + '+|((?:^|[^\\\\])(?:\\\\.)*)' + rt + '+$', 'g'),
    lt = new RegExp('^' + rt + '*,' + rt + '*'),
    ut = new RegExp('^' + rt + '*([>+~]|' + rt + ')' + rt + '*'),
    ht = new RegExp('=' + rt + '*([^\\]\'"]*?)' + rt + '*\\]', 'g'),
    ct = new RegExp(ot),
    pt = new RegExp('^' + nt + '$'),
    ft = {
      ID: new RegExp('^#(' + nt + ')'),
      CLASS: new RegExp('^\\.(' + nt + ')'),
      TAG: new RegExp('^(' + nt + '|[*])'),
      ATTR: new RegExp('^' + it),
      PSEUDO: new RegExp('^' + ot),
      CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + rt + '*(even|odd|(([+-]|)(\\d*)n|)' + rt + '*(?:([+-]|)' + rt + '*(\\d+)|))' + rt + '*\\)|)', 'i'),
      bool: new RegExp('^(?:' + et + ')$', 'i'),
      needsContext: new RegExp('^' + rt + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + rt + '*((?:-\\d)?\\d*)' + rt + '*\\)|)(?=[^-]|$)', 'i')
    },
    dt = /^(?:input|select|textarea|button)$/i,
    mt = /^h\d$/i,
    gt = /^[^{]+\{\s*\[native \w/,
    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    vt = /[+~]/,
    _t = /'|\\/g,
    xt = new RegExp('\\\\([\\da-f]{1,6}' + rt + '?|(' + rt + ')|.)', 'ig'),
    bt = function (t, e, r) {
      var n = '0x' + e - 65536;
      return n !== n || r ? e : n < 0 ? String.fromCharCode(n + 65536)  : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
    },
    wt = function () {
      A()
    };
    try {
      Q.apply($ = K.call(H.childNodes), H.childNodes),
      $[H.childNodes.length].nodeType
    } catch (t) {
      Q = {
        apply: $.length ? function (t, e) {
          J.apply(t, K.call(e))
        }
         : function (t, e) {
          for (var r = t.length, n = 0; t[r++] = e[n++]; );
          t.length = r - 1
        }
      }
    }
    b = e.support = {
    },
    S = e.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && 'HTML' !== e.nodeName
    },
    A = e.setDocument = function (t) {
      var e,
      r,
      n = t ? t.ownerDocument || t : H;
      return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, O = E.documentElement, N = !S(E), (r = E.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener('unload', wt, !1)  : r.attachEvent && r.attachEvent('onunload', wt)), b.attributes = i(function (t) {
        return t.className = 'i',
        !t.getAttribute('className')
      }), b.getElementsByTagName = i(function (t) {
        return t.appendChild(E.createComment('')),
        !t.getElementsByTagName('*').length
      }), b.getElementsByClassName = gt.test(E.getElementsByClassName), b.getById = i(function (t) {
        return O.appendChild(t).id = B,
        !E.getElementsByName || !E.getElementsByName(B).length
      }), b.getById ? (w.find.ID = function (t, e) {
        if ('undefined' != typeof e.getElementById && N) {
          var r = e.getElementById(t);
          return r ? [
            r
          ] : [
          ]
        }
      }, w.filter.ID = function (t) {
        var e = t.replace(xt, bt);
        return function (t) {
          return t.getAttribute('id') === e
        }
      })  : (delete w.find.ID, w.filter.ID = function (t) {
        var e = t.replace(xt, bt);
        return function (t) {
          var r = 'undefined' != typeof t.getAttributeNode && t.getAttributeNode('id');
          return r && r.value === e
        }
      }), w.find.TAG = b.getElementsByTagName ? function (t, e) {
        return 'undefined' != typeof e.getElementsByTagName ? e.getElementsByTagName(t)  : b.qsa ? e.querySelectorAll(t)  : void 0
      }
       : function (t, e) {
        var r,
        n = [
        ],
        i = 0,
        o = e.getElementsByTagName(t);
        if ('*' === t) {
          for (; r = o[i++]; ) 1 === r.nodeType && n.push(r);
          return n
        }
        return o
      }, w.find.CLASS = b.getElementsByClassName && function (t, e) {
        if ('undefined' != typeof e.getElementsByClassName && N) return e.getElementsByClassName(t)
      }, L = [
      ], I = [
      ], (b.qsa = gt.test(E.querySelectorAll)) && (i(function (t) {
        O.appendChild(t).innerHTML = '<a id=\'' + B + '\'></a><select id=\'' + B + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>',
        t.querySelectorAll('[msallowcapture^=\'\']').length && I.push('[*^$]=' + rt + '*(?:\'\'|"")'),
        t.querySelectorAll('[selected]').length || I.push('\\[' + rt + '*(?:value|' + et + ')'),
        t.querySelectorAll('[id~=' + B + '-]').length || I.push('~='),
        t.querySelectorAll(':checked').length || I.push(':checked'),
        t.querySelectorAll('a#' + B + '+*').length || I.push('.#.+[+~]')
      }), i(function (t) {
        var e = E.createElement('input');
        e.setAttribute('type', 'hidden'),
        t.appendChild(e).setAttribute('name', 'D'),
        t.querySelectorAll('[name=d]').length && I.push('name' + rt + '*[*^$|!~]?='),
        t.querySelectorAll(':enabled').length || I.push(':enabled', ':disabled'),
        t.querySelectorAll('*,:x'),
        I.push(',.*:')
      })), (b.matchesSelector = gt.test(F = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (t) {
        b.disconnectedMatch = F.call(t, 'div'),
        F.call(t, '[s!=\'\']:x'),
        L.push('!=', ot)
      }), I = I.length && new RegExp(I.join('|')), L = L.length && new RegExp(L.join('|')), e = gt.test(O.compareDocumentPosition), U = e || gt.test(O.contains) ? function (t, e) {
        var r = 9 === t.nodeType ? t.documentElement : t,
        n = e && e.parentNode;
        return t === n || !(!n || 1 !== n.nodeType || !(r.contains ? r.contains(n)  : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
      }
       : function (t, e) {
        if (e) for (; e = e.parentNode; ) if (e === t) return !0;
        return !1
      }, z = e ? function (t, e) {
        if (t === e) return D = !0,
        0;
        var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
        return r ? r : (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e)  : 1, 1 & r || !b.sortDetached && e.compareDocumentPosition(t) === r ? t === E || t.ownerDocument === H && U(H, t) ? - 1 : e === E || e.ownerDocument === H && U(H, e) ? 1 : P ? tt(P, t) - tt(P, e)  : 0 : 4 & r ? - 1 : 1)
      }
       : function (t, e) {
        if (t === e) return D = !0,
        0;
        var r,
        n = 0,
        i = t.parentNode,
        o = e.parentNode,
        a = [
          t
        ],
        l = [
          e
        ];
        if (!i || !o) return t === E ? - 1 : e === E ? 1 : i ? - 1 : o ? 1 : P ? tt(P, t) - tt(P, e)  : 0;
        if (i === o) return s(t, e);
        for (r = t; r = r.parentNode; ) a.unshift(r);
        for (r = e; r = r.parentNode; ) l.unshift(r);
        for (; a[n] === l[n]; ) n++;
        return n ? s(a[n], l[n])  : a[n] === H ? - 1 : l[n] === H ? 1 : 0
      }, E)  : E
    },
    e.matches = function (t, r) {
      return e(t, null, null, r)
    },
    e.matchesSelector = function (t, r) {
      if ((t.ownerDocument || t) !== E && A(t), r = r.replace(ht, '=\'$1\']'), b.matchesSelector && N && !W[r + ' '] && (!L || !L.test(r)) && (!I || !I.test(r))) try {
        var n = F.call(t, r);
        if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
      } catch (t) {
      }
      return e(r, E, null, [
        t
      ]).length > 0
    },
    e.contains = function (t, e) {
      return (t.ownerDocument || t) !== E && A(t),
      U(t, e)
    },
    e.attr = function (t, e) {
      (t.ownerDocument || t) !== E && A(t);
      var r = w.attrHandle[e.toLowerCase()],
      n = r && X.call(w.attrHandle, e.toLowerCase()) ? r(t, e, !N)  : void 0;
      return void 0 !== n ? n : b.attributes || !N ? t.getAttribute(e)  : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
    },
    e.error = function (t) {
      throw new Error('Syntax error, unrecognized expression: ' + t)
    },
    e.uniqueSort = function (t) {
      var e,
      r = [
      ],
      n = 0,
      i = 0;
      if (D = !b.detectDuplicates, P = !b.sortStable && t.slice(0), t.sort(z), D) {
        for (; e = t[i++]; ) e === t[i] && (n = r.push(i));
        for (; n--; ) t.splice(r[n], 1)
      }
      return P = null,
      t
    },
    T = e.getText = function (t) {
      var e,
      r = '',
      n = 0,
      i = t.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) r += T(t)
        } else if (3 === i || 4 === i) return t.nodeValue
      } else for (; e = t[n++]; ) r += T(e);
      return r
    },
    w = e.selectors = {
      cacheLength: 50,
      createPseudo: n,
      match: ft,
      attrHandle: {
      },
      find: {
      },
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': {
          dir: 'parentNode'
        },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': {
          dir: 'previousSibling'
        }
      },
      preFilter: {
        ATTR: function (t) {
          return t[1] = t[1].replace(xt, bt),
          t[3] = (t[3] || t[4] || t[5] || '').replace(xt, bt),
          '~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
          t.slice(0, 4)
        },
        CHILD: function (t) {
          return t[1] = t[1].toLowerCase(),
          'nth' === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = + (t[4] ? t[5] + (t[6] || 1)  : 2 * ('even' === t[3] || 'odd' === t[3])), t[5] = + (t[7] + t[8] || 'odd' === t[3]))  : t[3] && e.error(t[0]),
          t
        },
        PSEUDO: function (t) {
          var e,
          r = !t[6] && t[2];
          return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || '' : r && ct.test(r) && (e = C(r, !0)) && (e = r.indexOf(')', r.length - e) - r.length) && (t[0] = t[0].slice(0, e), t[2] = r.slice(0, e)), t.slice(0, 3))
        }
      },
      filter: {
        TAG: function (t) {
          var e = t.replace(xt, bt).toLowerCase();
          return '*' === t ? function () {
            return !0
          }
           : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e
          }
        },
        CLASS: function (t) {
          var e = G[t + ' '];
          return e || (e = new RegExp('(^|' + rt + ')' + t + '(' + rt + '|$)')) && G(t, function (t) {
            return e.test('string' == typeof t.className && t.className || 'undefined' != typeof t.getAttribute && t.getAttribute('class') || '')
          })
        },
        ATTR: function (t, r, n) {
          return function (i) {
            var o = e.attr(i, t);
            return null == o ? '!=' === r : !r || (o += '', '=' === r ? o === n : '!=' === r ? o !== n : '^=' === r ? n && 0 === o.indexOf(n)  : '*=' === r ? n && o.indexOf(n) > - 1 : '$=' === r ? n && o.slice( - n.length) === n : '~=' === r ? (' ' + o.replace(st, ' ') + ' ').indexOf(n) > - 1 : '|=' === r && (o === n || o.slice(0, n.length + 1) === n + '-'))
          }
        },
        CHILD: function (t, e, r, n, i) {
          var o = 'nth' !== t.slice(0, 3),
          s = 'last' !== t.slice( - 4),
          a = 'of-type' === e;
          return 1 === n && 0 === i ? function (t) {
            return !!t.parentNode
          }
           : function (e, r, l) {
            var u,
            h,
            c,
            p,
            f,
            d,
            m = o !== s ? 'nextSibling' : 'previousSibling',
            g = e.parentNode,
            y = a && e.nodeName.toLowerCase(),
            v = !l && !a,
            _ = !1;
            if (g) {
              if (o) {
                for (; m; ) {
                  for (p = e; p = p[m]; ) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  d = m = 'only' === t && !d && 'nextSibling'
                }
                return !0
              }
              if (d = [
                s ? g.firstChild : g.lastChild
              ], s && v) {
                for (p = g, c = p[B] || (p[B] = {
                }), h = c[p.uniqueID] || (c[p.uniqueID] = {
                }), u = h[t] || [
                ], f = u[0] === j && u[1], _ = f && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (_ = f = 0) || d.pop(); ) if (1 === p.nodeType && ++_ && p === e) {
                  h[t] = [
                    j,
                    f,
                    _
                  ];
                  break
                }
              } else if (v && (p = e, c = p[B] || (p[B] = {
              }), h = c[p.uniqueID] || (c[p.uniqueID] = {
              }), u = h[t] || [
              ], f = u[0] === j && u[1], _ = f), _ === !1) for (; (p = ++f && p && p[m] || (_ = f = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++_ || (v && (c = p[B] || (p[B] = {
              }), h = c[p.uniqueID] || (c[p.uniqueID] = {
              }), h[t] = [
                j,
                _
              ]), p !== e)); );
              return _ -= i,
              _ === n || _ % n === 0 && _ / n >= 0
            }
          }
        },
        PSEUDO: function (t, r) {
          var i,
          o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error('unsupported pseudo: ' + t);
          return o[B] ? o(r)  : o.length > 1 ? (i = [
            t,
            t,
            '',
            r
          ], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
            for (var n, i = o(t, r), s = i.length; s--; ) n = tt(t, i[s]),
            t[n] = !(e[n] = i[s])
          })  : function (t) {
            return o(t, 0, i)
          })  : o
        }
      },
      pseudos: {
        not: n(function (t) {
          var e = [
          ],
          r = [
          ],
          i = M(t.replace(at, '$1'));
          return i[B] ? n(function (t, e, r, n) {
            for (var o, s = i(t, null, n, [
            ]), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o))
          })  : function (t, n, o) {
            return e[0] = t,
            i(e, null, o, r),
            e[0] = null,
            !r.pop()
          }
        }),
        has: n(function (t) {
          return function (r) {
            return e(t, r).length > 0
          }
        }),
        contains: n(function (t) {
          return t = t.replace(xt, bt),
          function (e) {
            return (e.textContent || e.innerText || T(e)).indexOf(t) > - 1
          }
        }),
        lang: n(function (t) {
          return pt.test(t || '') || e.error('unsupported lang: ' + t),
          t = t.replace(xt, bt).toLowerCase(),
          function (e) {
            var r;
            do if (r = N ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')) return r = r.toLowerCase(),
            r === t || 0 === r.indexOf(t + '-');
            while ((e = e.parentNode) && 1 === e.nodeType);
            return !1
          }
        }),
        target: function (e) {
          var r = t.location && t.location.hash;
          return r && r.slice(1) === e.id
        },
        root: function (t) {
          return t === O
        },
        focus: function (t) {
          return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
        },
        enabled: function (t) {
          return t.disabled === !1
        },
        disabled: function (t) {
          return t.disabled === !0
        },
        checked: function (t) {
          var e = t.nodeName.toLowerCase();
          return 'input' === e && !!t.checked || 'option' === e && !!t.selected
        },
        selected: function (t) {
          return t.parentNode && t.parentNode.selectedIndex,
          t.selected === !0
        },
        empty: function (t) {
          for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
          return !0
        },
        parent: function (t) {
          return !w.pseudos.empty(t)
        },
        header: function (t) {
          return mt.test(t.nodeName)
        },
        input: function (t) {
          return dt.test(t.nodeName)
        },
        button: function (t) {
          var e = t.nodeName.toLowerCase();
          return 'input' === e && 'button' === t.type || 'button' === e
        },
        text: function (t) {
          var e;
          return 'input' === t.nodeName.toLowerCase() && 'text' === t.type && (null == (e = t.getAttribute('type')) || 'text' === e.toLowerCase())
        },
        first: u(function () {
          return [0]
        }),
        last: u(function (t, e) {
          return [e - 1]
        }),
        eq: u(function (t, e, r) {
          return [r < 0 ? r + e : r]
        }),
        even: u(function (t, e) {
          for (var r = 0; r < e; r += 2) t.push(r);
          return t
        }),
        odd: u(function (t, e) {
          for (var r = 1; r < e; r += 2) t.push(r);
          return t
        }),
        lt: u(function (t, e, r) {
          for (var n = r < 0 ? r + e : r; --n >= 0; ) t.push(n);
          return t
        }),
        gt: u(function (t, e, r) {
          for (var n = r < 0 ? r + e : r; ++n < e; ) t.push(n);
          return t
        })
      }
    },
    w.pseudos.nth = w.pseudos.eq;
    for (x in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) w.pseudos[x] = a(x);
    for (x in {
      submit: !0,
      reset: !0
    }) w.pseudos[x] = l(x);
    return c.prototype = w.filters = w.pseudos,
    w.setFilters = new c,
    C = e.tokenize = function (t, r) {
      var n,
      i,
      o,
      s,
      a,
      l,
      u,
      h = q[t + ' '];
      if (h) return r ? 0 : h.slice(0);
      for (a = t, l = [
      ], u = w.preFilter; a; ) {
        n && !(i = lt.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [
        ])),
        n = !1,
        (i = ut.exec(a)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(at, ' ')
        }), a = a.slice(n.length));
        for (s in w.filter) !(i = ft[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(), o.push({
          value: n,
          type: s,
          matches: i
        }), a = a.slice(n.length));
        if (!n) break
      }
      return r ? a.length : a ? e.error(t)  : q(t, l).slice(0)
    },
    M = e.compile = function (t, e) {
      var r,
      n = [
      ],
      i = [
      ],
      o = W[t + ' '];
      if (!o) {
        for (e || (e = C(t)), r = e.length; r--; ) o = v(e[r]),
        o[B] ? n.push(o)  : i.push(o);
        o = W(t, _(i, n)),
        o.selector = t
      }
      return o
    },
    R = e.select = function (t, e, r, n) {
      var i,
      o,
      s,
      a,
      l,
      u = 'function' == typeof t && t,
      c = !n && C(t = u.selector || t);
      if (r = r || [
      ], 1 === c.length) {
        if (o = c[0] = c[0].slice(0), o.length > 2 && 'ID' === (s = o[0]).type && b.getById && 9 === e.nodeType && N && w.relative[o[1].type]) {
          if (e = (w.find.ID(s.matches[0].replace(xt, bt), e) || [
          ]) [0], !e) return r;
          u && (e = e.parentNode),
          t = t.slice(o.shift().value.length)
        }
        for (i = ft.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !w.relative[a = s.type]); ) if ((l = w.find[a]) && (n = l(s.matches[0].replace(xt, bt), vt.test(o[0].type) && h(e.parentNode) || e))) {
          if (o.splice(i, 1), t = n.length && p(o), !t) return Q.apply(r, n),
          r;
          break
        }
      }
      return (u || M(t, c)) (n, e, !N, r, !e || vt.test(t) && h(e.parentNode) || e),
      r
    },
    b.sortStable = B.split('').sort(z).join('') === B,
    b.detectDuplicates = !!D,
    A(),
    b.sortDetached = i(function (t) {
      return 1 & t.compareDocumentPosition(E.createElement('div'))
    }),
    i(function (t) {
      return t.innerHTML = '<a href=\'#\'></a>',
      '#' === t.firstChild.getAttribute('href')
    }) || o('type|href|height|width', function (t, e, r) {
      if (!r) return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2)
    }),
    b.attributes && i(function (t) {
      return t.innerHTML = '<input/>',
      t.firstChild.setAttribute('value', ''),
      '' === t.firstChild.getAttribute('value')
    }) || o('value', function (t, e, r) {
      if (!r && 'input' === t.nodeName.toLowerCase()) return t.defaultValue
    }),
    i(function (t) {
      return null == t.getAttribute('disabled')
    }) || o(et, function (t, e, r) {
      var n;
      if (!r) return t[e] === !0 ? e.toLowerCase()  : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
    }),
    e
  }(t);
  ot.find = ht,
  ot.expr = ht.selectors,
  ot.expr[':'] = ot.expr.pseudos,
  ot.uniqueSort = ot.unique = ht.uniqueSort,
  ot.text = ht.getText,
  ot.isXMLDoc = ht.isXML,
  ot.contains = ht.contains;
  var ct = function (t, e, r) {
    for (var n = [
    ], i = void 0 !== r; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
      if (i && ot(t).is(r)) break;
      n.push(t)
    }
    return n
  },
  pt = function (t, e) {
    for (var r = [
    ]; t; t = t.nextSibling) 1 === t.nodeType && t !== e && r.push(t);
    return r
  },
  ft = ot.expr.match.needsContext,
  dt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
  mt = /^.[^:#\[\.,]*$/;
  ot.filter = function (t, e, r) {
    var n = e[0];
    return r && (t = ':not(' + t + ')'),
    1 === e.length && 1 === n.nodeType ? ot.find.matchesSelector(n, t) ? [
      n
    ] : [
    ] : ot.find.matches(t, ot.grep(e, function (t) {
      return 1 === t.nodeType
    }))
  },
  ot.fn.extend({
    find: function (t) {
      var e,
      r = this.length,
      n = [
      ],
      i = this;
      if ('string' != typeof t) return this.pushStack(ot(t).filter(function () {
        for (e = 0; e < r; e++) if (ot.contains(i[e], this)) return !0
      }));
      for (e = 0; e < r; e++) ot.find(t, i[e], n);
      return n = this.pushStack(r > 1 ? ot.unique(n)  : n),
      n.selector = this.selector ? this.selector + ' ' + t : t,
      n
    },
    filter: function (t) {
      return this.pushStack(n(this, t || [
      ], !1))
    },
    not: function (t) {
      return this.pushStack(n(this, t || [
      ], !0))
    },
    is: function (t) {
      return !!n(this, 'string' == typeof t && ft.test(t) ? ot(t)  : t || [
      ], !1).length
    }
  });
  var gt,
  yt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  vt = ot.fn.init = function (t, e, r) {
    var n,
    i;
    if (!t) return this;
    if (r = r || gt, 'string' == typeof t) {
      if (n = '<' === t[0] && '>' === t[t.length - 1] && t.length >= 3 ? [
        null,
        t,
        null
      ] : yt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || r).find(t)  : this.constructor(e).find(t);
      if (n[1]) {
        if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : $, !0)), dt.test(n[1]) && ot.isPlainObject(e)) for (n in e) ot.isFunction(this[n]) ? this[n](e[n])  : this.attr(n, e[n]);
        return this
      }
      return i = $.getElementById(n[2]),
      i && i.parentNode && (this.length = 1, this[0] = i),
      this.context = $,
      this.selector = t,
      this
    }
    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this)  : ot.isFunction(t) ? void 0 !== r.ready ? r.ready(t)  : t(ot)  : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
  };
  vt.prototype = ot.fn,
  gt = ot($);
  var _t = /^(?:parents|prev(?:Until|All))/,
  xt = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  ot.fn.extend({
    has: function (t) {
      var e = ot(t, this),
      r = e.length;
      return this.filter(function () {
        for (var t = 0; t < r; t++) if (ot.contains(this, e[t])) return !0
      })
    },
    closest: function (t, e) {
      for (var r, n = 0, i = this.length, o = [
      ], s = ft.test(t) || 'string' != typeof t ? ot(t, e || this.context)  : 0; n < i; n++) for (r = this[n]; r && r !== e; r = r.parentNode) if (r.nodeType < 11 && (s ? s.index(r) > - 1 : 1 === r.nodeType && ot.find.matchesSelector(r, t))) {
        o.push(r);
        break
      }
      return this.pushStack(o.length > 1 ? ot.uniqueSort(o)  : o)
    },
    index: function (t) {
      return t ? 'string' == typeof t ? K.call(ot(t), this[0])  : K.call(this, t.jquery ? t[0] : t)  : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
    },
    add: function (t, e) {
      return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
  }),
  ot.each({
    parent: function (t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null
    },
    parents: function (t) {
      return ct(t, 'parentNode')
    },
    parentsUntil: function (t, e, r) {
      return ct(t, 'parentNode', r)
    },
    next: function (t) {
      return i(t, 'nextSibling')
    },
    prev: function (t) {
      return i(t, 'previousSibling')
    },
    nextAll: function (t) {
      return ct(t, 'nextSibling')
    },
    prevAll: function (t) {
      return ct(t, 'previousSibling')
    },
    nextUntil: function (t, e, r) {
      return ct(t, 'nextSibling', r)
    },
    prevUntil: function (t, e, r) {
      return ct(t, 'previousSibling', r)
    },
    siblings: function (t) {
      return pt((t.parentNode || {
      }).firstChild, t)
    },
    children: function (t) {
      return pt(t.firstChild)
    },
    contents: function (t) {
      return t.contentDocument || ot.merge([], t.childNodes)
    }
  }, function (t, e) {
    ot.fn[t] = function (r, n) {
      var i = ot.map(this, e, r);
      return 'Until' !== t.slice( - 5) && (n = r),
      n && 'string' == typeof n && (i = ot.filter(n, i)),
      this.length > 1 && (xt[t] || ot.uniqueSort(i), _t.test(t) && i.reverse()),
      this.pushStack(i)
    }
  });
  var bt = /\S+/g;
  ot.Callbacks = function (t) {
    t = 'string' == typeof t ? o(t)  : ot.extend({
    }, t);
    var e,
    r,
    n,
    i,
    s = [
    ],
    a = [
    ],
    l = - 1,
    u = function () {
      for (i = t.once, n = e = !0; a.length; l = - 1) for (r = a.shift(); ++l < s.length; ) s[l].apply(r[0], r[1]) === !1 && t.stopOnFalse && (l = s.length, r = !1);
      t.memory || (r = !1),
      e = !1,
      i && (s = r ? [
      ] : '')
    },
    h = {
      add: function () {
        return s && (r && !e && (l = s.length - 1, a.push(r)), function e(r) {
          ot.each(r, function (r, n) {
            ot.isFunction(n) ? t.unique && h.has(n) || s.push(n)  : n && n.length && 'string' !== ot.type(n) && e(n)
          })
        }(arguments), r && !e && u()),
        this
      },
      remove: function () {
        return ot.each(arguments, function (t, e) {
          for (var r; (r = ot.inArray(e, s, r)) > - 1; ) s.splice(r, 1),
          r <= l && l--
        }),
        this
      },
      has: function (t) {
        return t ? ot.inArray(t, s) > - 1 : s.length > 0
      },
      empty: function () {
        return s && (s = [
        ]),
        this
      },
      disable: function () {
        return i = a = [
        ],
        s = r = '',
        this
      },
      disabled: function () {
        return !s
      },
      lock: function () {
        return i = a = [
        ],
        r || (s = r = ''),
        this
      },
      locked: function () {
        return !!i
      },
      fireWith: function (t, r) {
        return i || (r = r || [
        ], r = [
          t,
          r.slice ? r.slice()  : r
        ], a.push(r), e || u()),
        this
      },
      fire: function () {
        return h.fireWith(this, arguments),
        this
      },
      fired: function () {
        return !!n
      }
    };
    return h
  },
  ot.extend({
    Deferred: function (t) {
      var e = [
        ['resolve',
        'done',
        ot.Callbacks('once memory'),
        'resolved'],
        [
          'reject',
          'fail',
          ot.Callbacks('once memory'),
          'rejected'
        ],
        [
          'notify',
          'progress',
          ot.Callbacks('memory')
        ]
      ],
      r = 'pending',
      n = {
        state: function () {
          return r
        },
        always: function () {
          return i.done(arguments).fail(arguments),
          this
        },
        then: function () {
          var t = arguments;
          return ot.Deferred(function (r) {
            ot.each(e, function (e, o) {
              var s = ot.isFunction(t[e]) && t[e];
              i[o[1]](function () {
                var t = s && s.apply(this, arguments);
                t && ot.isFunction(t.promise) ? t.promise().progress(r.notify).done(r.resolve).fail(r.reject)  : r[o[0] + 'With'](this === n ? r.promise()  : this, s ? [
                  t
                ] : arguments)
              })
            }),
            t = null
          }).promise()
        },
        promise: function (t) {
          return null != t ? ot.extend(t, n)  : n
        }
      },
      i = {
      };
      return n.pipe = n.then,
      ot.each(e, function (t, o) {
        var s = o[2],
        a = o[3];
        n[o[1]] = s.add,
        a && s.add(function () {
          r = a
        }, e[1 ^ t][2].disable, e[2][2].lock),
        i[o[0]] = function () {
          return i[o[0] + 'With'](this === i ? n : this, arguments),
          this
        },
        i[o[0] + 'With'] = s.fireWith
      }),
      n.promise(i),
      t && t.call(i, i),
      i
    },
    when: function (t) {
      var e,
      r,
      n,
      i = 0,
      o = Z.call(arguments),
      s = o.length,
      a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0,
      l = 1 === a ? t : ot.Deferred(),
      u = function (t, r, n) {
        return function (i) {
          r[t] = this,
          n[t] = arguments.length > 1 ? Z.call(arguments)  : i,
          n === e ? l.notifyWith(r, n)  : --a || l.resolveWith(r, n)
        }
      };
      if (s > 1) for (e = new Array(s), r = new Array(s), n = new Array(s); i < s; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().progress(u(i, r, e)).done(u(i, n, o)).fail(l.reject)  : --a;
      return a || l.resolveWith(n, o),
      l.promise()
    }
  });
  var wt;
  ot.fn.ready = function (t) {
    return ot.ready.promise().done(t),
    this
  },
  ot.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (t) {
      t ? ot.readyWait++ : ot.ready(!0)
    },
    ready: function (t) {
      (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (wt.resolveWith($, [
        ot
      ]), ot.fn.triggerHandler && (ot($).triggerHandler('ready'), ot($).off('ready'))))
    }
  }),
  ot.ready.promise = function (e) {
    return wt || (wt = ot.Deferred(), 'complete' === $.readyState || 'loading' !== $.readyState && !$.documentElement.doScroll ? t.setTimeout(ot.ready)  : ($.addEventListener('DOMContentLoaded', s), t.addEventListener('load', s))),
    wt.promise(e)
  },
  ot.ready.promise();
  var Tt = function (t, e, r, n, i, o, s) {
    var a = 0,
    l = t.length,
    u = null == r;
    if ('object' === ot.type(r)) {
      i = !0;
      for (a in r) Tt(t, e, a, r[a], !0, o, s)
    } else if (void 0 !== n && (i = !0, ot.isFunction(n) || (s = !0), u && (s ? (e.call(t, n), e = null)  : (u = e, e = function (t, e, r) {
      return u.call(ot(t), r)
    })), e)) for (; a < l; a++) e(t[a], r, s ? n : n.call(t[a], a, e(t[a], r)));
    return i ? t : u ? e.call(t)  : l ? e(t[0], r)  : o
  },
  St = function (t) {
    return 1 === t.nodeType || 9 === t.nodeType || ! + t.nodeType
  };
  a.uid = 1,
  a.prototype = {
    register: function (t, e) {
      var r = e || {
      };
      return t.nodeType ? t[this.expando] = r : Object.defineProperty(t, this.expando, {
        value: r,
        writable: !0,
        configurable: !0
      }),
      t[this.expando]
    },
    cache: function (t) {
      if (!St(t)) return {
      };
      var e = t[this.expando];
      return e || (e = {
      }, St(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
        value: e,
        configurable: !0
      }))),
      e
    },
    set: function (t, e, r) {
      var n,
      i = this.cache(t);
      if ('string' == typeof e) i[e] = r;
       else for (n in e) i[n] = e[n];
      return i
    },
    get: function (t, e) {
      return void 0 === e ? this.cache(t)  : t[this.expando] && t[this.expando][e]
    },
    access: function (t, e, r) {
      var n;
      return void 0 === e || e && 'string' == typeof e && void 0 === r ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, ot.camelCase(e)))  : (this.set(t, e, r), void 0 !== r ? r : e)
    },
    remove: function (t, e) {
      var r,
      n,
      i,
      o = t[this.expando];
      if (void 0 !== o) {
        if (void 0 === e) this.register(t);
         else {
          ot.isArray(e) ? n = e.concat(e.map(ot.camelCase))  : (i = ot.camelCase(e), e in o ? n = [
            e,
            i
          ] : (n = i, n = n in o ? [
            n
          ] : n.match(bt) || [
          ])),
          r = n.length;
          for (; r--; ) delete o[n[r]]
        }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
      }
    },
    hasData: function (t) {
      var e = t[this.expando];
      return void 0 !== e && !ot.isEmptyObject(e)
    }
  };
  var Ct = new a,
  Mt = new a,
  Rt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  kt = /[A-Z]/g;
  ot.extend({
    hasData: function (t) {
      return Mt.hasData(t) || Ct.hasData(t)
    },
    data: function (t, e, r) {
      return Mt.access(t, e, r)
    },
    removeData: function (t, e) {
      Mt.remove(t, e)
    },
    _data: function (t, e, r) {
      return Ct.access(t, e, r)
    },
    _removeData: function (t, e) {
      Ct.remove(t, e)
    }
  }),
  ot.fn.extend({
    data: function (t, e) {
      var r,
      n,
      i,
      o = this[0],
      s = o && o.attributes;
      if (void 0 === t) {
        if (this.length && (i = Mt.get(o), 1 === o.nodeType && !Ct.get(o, 'hasDataAttrs'))) {
          for (r = s.length; r--; ) s[r] && (n = s[r].name, 0 === n.indexOf('data-') && (n = ot.camelCase(n.slice(5)), l(o, n, i[n])));
          Ct.set(o, 'hasDataAttrs', !0)
        }
        return i
      }
      return 'object' == typeof t ? this.each(function () {
        Mt.set(this, t)
      })  : Tt(this, function (e) {
        var r,
        n;
        if (o && void 0 === e) {
          if (r = Mt.get(o, t) || Mt.get(o, t.replace(kt, '-$&').toLowerCase()), void 0 !== r) return r;
          if (n = ot.camelCase(t), r = Mt.get(o, n), void 0 !== r) return r;
          if (r = l(o, n, void 0), void 0 !== r) return r
        } else n = ot.camelCase(t),
        this.each(function () {
          var r = Mt.get(this, n);
          Mt.set(this, n, e),
          t.indexOf('-') > - 1 && void 0 !== r && Mt.set(this, t, e)
        })
      }, null, e, arguments.length > 1, null, !0)
    },
    removeData: function (t) {
      return this.each(function () {
        Mt.remove(this, t)
      })
    }
  }),
  ot.extend({
    queue: function (t, e, r) {
      var n;
      if (t) return e = (e || 'fx') + 'queue',
      n = Ct.get(t, e),
      r && (!n || ot.isArray(r) ? n = Ct.access(t, e, ot.makeArray(r))  : n.push(r)),
      n || [
      ]
    },
    dequeue: function (t, e) {
      e = e || 'fx';
      var r = ot.queue(t, e),
      n = r.length,
      i = r.shift(),
      o = ot._queueHooks(t, e),
      s = function () {
        ot.dequeue(t, e)
      };
      'inprogress' === i && (i = r.shift(), n--),
      i && ('fx' === e && r.unshift('inprogress'), delete o.stop, i.call(t, s, o)),
      !n && o && o.empty.fire()
    },
    _queueHooks: function (t, e) {
      var r = e + 'queueHooks';
      return Ct.get(t, r) || Ct.access(t, r, {
        empty: ot.Callbacks('once memory').add(function () {
          Ct.remove(t, [
            e + 'queue',
            r
          ])
        })
      })
    }
  }),
  ot.fn.extend({
    queue: function (t, e) {
      var r = 2;
      return 'string' != typeof t && (e = t, t = 'fx', r--),
      arguments.length < r ? ot.queue(this[0], t)  : void 0 === e ? this : this.each(function () {
        var r = ot.queue(this, t, e);
        ot._queueHooks(this, t),
        'fx' === t && 'inprogress' !== r[0] && ot.dequeue(this, t)
      })
    },
    dequeue: function (t) {
      return this.each(function () {
        ot.dequeue(this, t)
      })
    },
    clearQueue: function (t) {
      return this.queue(t || 'fx', [
      ])
    },
    promise: function (t, e) {
      var r,
      n = 1,
      i = ot.Deferred(),
      o = this,
      s = this.length,
      a = function () {
        --n || i.resolveWith(o, [
          o
        ])
      };
      for ('string' != typeof t && (e = t, t = void 0), t = t || 'fx'; s--; ) r = Ct.get(o[s], t + 'queueHooks'),
      r && r.empty && (n++, r.empty.add(a));
      return a(),
      i.promise(e)
    }
  });
  var Pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  Dt = new RegExp('^(?:([+-])=|)(' + Pt + ')([a-z%]*)$', 'i'),
  At = [
    'Top',
    'Right',
    'Bottom',
    'Left'
  ],
  Et = function (t, e) {
    return t = e || t,
    'none' === ot.css(t, 'display') || !ot.contains(t.ownerDocument, t)
  },
  Ot = /^(?:checkbox|radio)$/i,
  Nt = /<([\w:-]+)/,
  It = /^$|\/(?:java|ecma)script/i,
  Lt = {
    option: [
      1,
      '<select multiple=\'multiple\'>',
      '</select>'
    ],
    thead: [
      1,
      '<table>',
      '</table>'
    ],
    col: [
      2,
      '<table><colgroup>',
      '</colgroup></table>'
    ],
    tr: [
      2,
      '<table><tbody>',
      '</tbody></table>'
    ],
    td: [
      3,
      '<table><tbody><tr>',
      '</tr></tbody></table>'
    ],
    _default: [
      0,
      '',
      ''
    ]
  };
  Lt.optgroup = Lt.option,
  Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead,
  Lt.th = Lt.td;
  var Ft = /<|&#?\w+;/;
  !function () {
    var t = $.createDocumentFragment(),
    e = t.appendChild($.createElement('div')),
    r = $.createElement('input');
    r.setAttribute('type', 'radio'),
    r.setAttribute('checked', 'checked'),
    r.setAttribute('name', 't'),
    e.appendChild(r),
    nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
    e.innerHTML = '<textarea>x</textarea>',
    nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var Ut = /^key/,
  Bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  Ht = /^([^.]*)(?:\.(.+)|)/;
  ot.event = {
    global: {
    },
    add: function (t, e, r, n, i) {
      var o,
      s,
      a,
      l,
      u,
      h,
      c,
      p,
      f,
      d,
      m,
      g = Ct.get(t);
      if (g) for (r.handler && (o = r, r = o.handler, i = o.selector), r.guid || (r.guid = ot.guid++), (l = g.events) || (l = g.events = {
      }), (s = g.handle) || (s = g.handle = function (e) {
        return 'undefined' != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments)  : void 0
      }), e = (e || '').match(bt) || [
        ''
      ], u = e.length; u--; ) a = Ht.exec(e[u]) || [
      ],
      f = m = a[1],
      d = (a[2] || '').split('.').sort(),
      f && (c = ot.event.special[f] || {
      }, f = (i ? c.delegateType : c.bindType) || f, c = ot.event.special[f] || {
      }, h = ot.extend({
        type: f,
        origType: m,
        data: n,
        handler: r,
        guid: r.guid,
        selector: i,
        needsContext: i && ot.expr.match.needsContext.test(i),
        namespace: d.join('.')
      }, o), (p = l[f]) || (p = l[f] = [
      ], p.delegateCount = 0, c.setup && c.setup.call(t, n, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s)), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = r.guid)), i ? p.splice(p.delegateCount++, 0, h)  : p.push(h), ot.event.global[f] = !0)
    },
    remove: function (t, e, r, n, i) {
      var o,
      s,
      a,
      l,
      u,
      h,
      c,
      p,
      f,
      d,
      m,
      g = Ct.hasData(t) && Ct.get(t);
      if (g && (l = g.events)) {
        for (e = (e || '').match(bt) || [
          ''
        ], u = e.length; u--; ) if (a = Ht.exec(e[u]) || [
        ], f = m = a[1], d = (a[2] || '').split('.').sort(), f) {
          for (c = ot.event.special[f] || {
          }, f = (n ? c.delegateType : c.bindType) || f, p = l[f] || [
          ], a = a[2] && new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'), s = o = p.length; o--; ) h = p[o],
          !i && m !== h.origType || r && r.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ('**' !== n || !h.selector) || (p.splice(o, 1), h.selector && p.delegateCount--, c.remove && c.remove.call(t, h));
          s && !p.length && (c.teardown && c.teardown.call(t, d, g.handle) !== !1 || ot.removeEvent(t, f, g.handle), delete l[f])
        } else for (f in l) ot.event.remove(t, f + e[u], r, n, !0);
        ot.isEmptyObject(l) && Ct.remove(t, 'handle events')
      }
    },
    dispatch: function (t) {
      t = ot.event.fix(t);
      var e,
      r,
      n,
      i,
      o,
      s = [
      ],
      a = Z.call(arguments),
      l = (Ct.get(this, 'events') || {
      }) [t.type] || [
      ],
      u = ot.event.special[t.type] || {
      };
      if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
        for (s = ot.event.handlers.call(this, t, l), e = 0; (i = s[e++]) && !t.isPropagationStopped(); ) for (t.currentTarget = i.elem, r = 0; (o = i.handlers[r++]) && !t.isImmediatePropagationStopped(); ) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, n = ((ot.event.special[o.origType] || {
        }).handle || o.handler).apply(i.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, t),
        t.result
      }
    },
    handlers: function (t, e) {
      var r,
      n,
      i,
      o,
      s = [
      ],
      a = e.delegateCount,
      l = t.target;
      if (a && l.nodeType && ('click' !== t.type || isNaN(t.button) || t.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || 'click' !== t.type)) {
        for (n = [
        ], r = 0; r < a; r++) o = e[r],
        i = o.selector + ' ',
        void 0 === n[i] && (n[i] = o.needsContext ? ot(i, this).index(l) > - 1 : ot.find(i, this, null, [
          l
        ]).length),
        n[i] && n.push(o);
        n.length && s.push({
          elem: l,
          handlers: n
        })
      }
      return a < e.length && s.push({
        elem: this,
        handlers: e.slice(a)
      }),
      s
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {
    },
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
        t
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (t, e) {
        var r,
        n,
        i,
        o = e.button;
        return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || $, n = r.documentElement, i = r.body, t.pageX = e.clientX + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)),
        t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
        t
      }
    },
    fix: function (t) {
      if (t[ot.expando]) return t;
      var e,
      r,
      n,
      i = t.type,
      o = t,
      s = this.fixHooks[i];
      for (s || (this.fixHooks[i] = s = Bt.test(i) ? this.mouseHooks : Ut.test(i) ? this.keyHooks : {
      }), n = s.props ? this.props.concat(s.props)  : this.props, t = new ot.Event(o), e = n.length; e--; ) r = n[e],
      t[r] = o[r];
      return t.target || (t.target = $),
      3 === t.target.nodeType && (t.target = t.target.parentNode),
      s.filter ? s.filter(t, o)  : t
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== m() && this.focus) return this.focus(),
          !1
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === m() && this.blur) return this.blur(),
          !1
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if ('checkbox' === this.type && this.click && ot.nodeName(this, 'input')) return this.click(),
          !1
        },
        _default: function (t) {
          return ot.nodeName(t.target, 'a')
        }
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
        }
      }
    }
  },
  ot.removeEvent = function (t, e, r) {
    t.removeEventListener && t.removeEventListener(e, r)
  },
  ot.Event = function (t, e) {
    return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : d)  : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void (this[ot.expando] = !0))  : new ot.Event(t, e)
  },
  ot.Event.prototype = {
    constructor: ot.Event,
    isDefaultPrevented: d,
    isPropagationStopped: d,
    isImmediatePropagationStopped: d,
    isSimulated: !1,
    preventDefault: function () {
      var t = this.originalEvent;
      this.isDefaultPrevented = f,
      t && !this.isSimulated && t.preventDefault()
    },
    stopPropagation: function () {
      var t = this.originalEvent;
      this.isPropagationStopped = f,
      t && !this.isSimulated && t.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = f,
      t && !this.isSimulated && t.stopImmediatePropagation(),
      this.stopPropagation()
    }
  },
  ot.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (t, e) {
    ot.event.special[t] = {
      delegateType: e,
      bindType: e,
      handle: function (t) {
        var r,
        n = this,
        i = t.relatedTarget,
        o = t.handleObj;
        return i && (i === n || ot.contains(n, i)) || (t.type = o.origType, r = o.handler.apply(this, arguments), t.type = e),
        r
      }
    }
  }),
  ot.fn.extend({
    on: function (t, e, r, n) {
      return g(this, t, e, r, n)
    },
    one: function (t, e, r, n) {
      return g(this, t, e, r, n, 1)
    },
    off: function (t, e, r) {
      var n,
      i;
      if (t && t.preventDefault && t.handleObj) return n = t.handleObj,
      ot(t.delegateTarget).off(n.namespace ? n.origType + '.' + n.namespace : n.origType, n.selector, n.handler),
      this;
      if ('object' == typeof t) {
        for (i in t) this.off(i, e, t[i]);
        return this
      }
      return e !== !1 && 'function' != typeof e || (r = e, e = void 0),
      r === !1 && (r = d),
      this.each(function () {
        ot.event.remove(this, t, r, e)
      })
    }
  });
  var jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
  Yt = /<script|<style|<link/i,
  Gt = /checked\s*(?:[^=]|=\s*.checked.)/i,
  qt = /^true\/(.*)/,
  Wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ot.extend({
    htmlPrefilter: function (t) {
      return t.replace(jt, '<$1></$2>')
    },
    clone: function (t, e, r) {
      var n,
      i,
      o,
      s,
      a = t.cloneNode(!0),
      l = ot.contains(t.ownerDocument, t);
      if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t))) for (s = h(a), o = h(t), n = 0, i = o.length; n < i; n++) b(o[n], s[n]);
      if (e) if (r) for (o = o || h(t), s = s || h(a), n = 0, i = o.length; n < i; n++) x(o[n], s[n]);
       else x(t, a);
      return s = h(a, 'script'),
      s.length > 0 && c(s, !l && h(t, 'script')),
      a
    },
    cleanData: function (t) {
      for (var e, r, n, i = ot.event.special, o = 0; void 0 !== (r = t[o]); o++) if (St(r)) {
        if (e = r[Ct.expando]) {
          if (e.events) for (n in e.events) i[n] ? ot.event.remove(r, n)  : ot.removeEvent(r, n, e.handle);
          r[Ct.expando] = void 0
        }
        r[Mt.expando] && (r[Mt.expando] = void 0)
      }
    }
  }),
  ot.fn.extend({
    domManip: w,
    detach: function (t) {
      return T(this, t, !0)
    },
    remove: function (t) {
      return T(this, t)
    },
    text: function (t) {
      return Tt(this, function (t) {
        return void 0 === t ? ot.text(this)  : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
        })
      }, null, t, arguments.length)
    },
    append: function () {
      return w(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = y(this, t);
          e.appendChild(t)
        }
      })
    },
    prepend: function () {
      return w(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = y(this, t);
          e.insertBefore(t, e.firstChild)
        }
      })
    },
    before: function () {
      return w(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this)
      })
    },
    after: function () {
      return w(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
      })
    },
    empty: function () {
      for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(h(t, !1)), t.textContent = '');
      return this
    },
    clone: function (t, e) {
      return t = null != t && t,
      e = null == e ? t : e,
      this.map(function () {
        return ot.clone(this, t, e)
      })
    },
    html: function (t) {
      return Tt(this, function (t) {
        var e = this[0] || {
        },
        r = 0,
        n = this.length;
        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
        if ('string' == typeof t && !Yt.test(t) && !Lt[(Nt.exec(t) || [
          '',
          ''
        ]) [1].toLowerCase()]) {
          t = ot.htmlPrefilter(t);
          try {
            for (; r < n; r++) e = this[r] || {
            },
            1 === e.nodeType && (ot.cleanData(h(e, !1)), e.innerHTML = t);
            e = 0
          } catch (t) {
          }
        }
        e && this.empty().append(t)
      }, null, t, arguments.length)
    },
    replaceWith: function () {
      var t = [
      ];
      return w(this, arguments, function (e) {
        var r = this.parentNode;
        ot.inArray(this, t) < 0 && (ot.cleanData(h(this)), r && r.replaceChild(e, this))
      }, t)
    }
  }),
  ot.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (t, e) {
    ot.fn[t] = function (t) {
      for (var r, n = [
      ], i = ot(t), o = i.length - 1, s = 0; s <= o; s++) r = s === o ? this : this.clone(!0),
      ot(i[s]) [e](r),
      Q.apply(n, r.get());
      return this.pushStack(n)
    }
  });
  var zt,
  Vt = {
    HTML: 'block',
    BODY: 'block'
  },
  Xt = /^margin/,
  $t = new RegExp('^(' + Pt + ')(?!px)[a-z%]+$', 'i'),
  Zt = function (e) {
    var r = e.ownerDocument.defaultView;
    return r && r.opener || (r = t),
    r.getComputedStyle(e)
  },
  Jt = function (t, e, r, n) {
    var i,
    o,
    s = {
    };
    for (o in e) s[o] = t.style[o],
    t.style[o] = e[o];
    i = r.apply(t, n || [
    ]);
    for (o in e) t.style[o] = s[o];
    return i
  },
  Qt = $.documentElement;
  !function () {
    function e() {
      a.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%',
      a.innerHTML = '',
      Qt.appendChild(s);
      var e = t.getComputedStyle(a);
      r = '1%' !== e.top,
      o = '2px' === e.marginLeft,
      n = '4px' === e.width,
      a.style.marginRight = '50%',
      i = '4px' === e.marginRight,
      Qt.removeChild(s)
    }
    var r,
    n,
    i,
    o,
    s = $.createElement('div'),
    a = $.createElement('div');
    a.style && (a.style.backgroundClip = 'content-box', a.cloneNode(!0).style.backgroundClip = '', nt.clearCloneStyle = 'content-box' === a.style.backgroundClip, s.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', s.appendChild(a), ot.extend(nt, {
      pixelPosition: function () {
        return e(),
        r
      },
      boxSizingReliable: function () {
        return null == n && e(),
        n
      },
      pixelMarginRight: function () {
        return null == n && e(),
        i
      },
      reliableMarginLeft: function () {
        return null == n && e(),
        o
      },
      reliableMarginRight: function () {
        var e,
        r = a.appendChild($.createElement('div'));
        return r.style.cssText = a.style.cssText = '-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0',
        r.style.marginRight = r.style.width = '0',
        a.style.width = '1px',
        Qt.appendChild(s),
        e = !parseFloat(t.getComputedStyle(r).marginRight),
        Qt.removeChild(s),
        a.removeChild(r),
        e
      }
    }))
  }();
  var Kt = /^(none|table(?!-c[ea]).+)/,
  te = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
  },
  ee = {
    letterSpacing: '0',
    fontWeight: '400'
  },
  re = [
    'Webkit',
    'O',
    'Moz',
    'ms'
  ],
  ne = $.createElement('div').style;
  ot.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var r = M(t, 'opacity');
            return '' === r ? '1' : r
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: 'cssFloat'
    },
    style: function (t, e, r, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var i,
        o,
        s,
        a = ot.camelCase(e),
        l = t.style;
        return e = ot.cssProps[a] || (ot.cssProps[a] = k(a) || a),
        s = ot.cssHooks[e] || ot.cssHooks[a],
        void 0 === r ? s && 'get' in s && void 0 !== (i = s.get(t, !1, n)) ? i : l[e] : (o = typeof r, 'string' === o && (i = Dt.exec(r)) && i[1] && (r = u(t, e, i), o = 'number'), null != r && r === r && ('number' === o && (r += i && i[3] || (ot.cssNumber[a] ? '' : 'px')), nt.clearCloneStyle || '' !== r || 0 !== e.indexOf('background') || (l[e] = 'inherit'), s && 'set' in s && void 0 === (r = s.set(t, r, n)) || (l[e] = r)), void 0)
      }
    },
    css: function (t, e, r, n) {
      var i,
      o,
      s,
      a = ot.camelCase(e);
      return e = ot.cssProps[a] || (ot.cssProps[a] = k(a) || a),
      s = ot.cssHooks[e] || ot.cssHooks[a],
      s && 'get' in s && (i = s.get(t, !0, r)),
      void 0 === i && (i = M(t, e, n)),
      'normal' === i && e in ee && (i = ee[e]),
      '' === r || r ? (o = parseFloat(i), r === !0 || isFinite(o) ? o || 0 : i)  : i
    }
  }),
  ot.each(['height',
  'width'], function (t, e) {
    ot.cssHooks[e] = {
      get: function (t, r, n) {
        if (r) return Kt.test(ot.css(t, 'display')) && 0 === t.offsetWidth ? Jt(t, te, function () {
          return A(t, e, n)
        })  : A(t, e, n)
      },
      set: function (t, r, n) {
        var i,
        o = n && Zt(t),
        s = n && D(t, e, n, 'border-box' === ot.css(t, 'boxSizing', !1, o), o);
        return s && (i = Dt.exec(r)) && 'px' !== (i[3] || 'px') && (t.style[e] = r, r = ot.css(t, e)),
        P(t, r, s)
      }
    }
  }),
  ot.cssHooks.marginLeft = R(nt.reliableMarginLeft, function (t, e) {
    if (e) return (parseFloat(M(t, 'marginLeft')) || t.getBoundingClientRect().left - Jt(t, {
      marginLeft: 0
    }, function () {
      return t.getBoundingClientRect().left
    })) + 'px'
  }),
  ot.cssHooks.marginRight = R(nt.reliableMarginRight, function (t, e) {
    if (e) return Jt(t, {
      display: 'inline-block'
    }, M, [
      t,
      'marginRight'
    ])
  }),
  ot.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (t, e) {
    ot.cssHooks[t + e] = {
      expand: function (r) {
        for (var n = 0, i = {
        }, o = 'string' == typeof r ? r.split(' ')  : [
          r
        ]; n < 4; n++) i[t + At[n] + e] = o[n] || o[n - 2] || o[0];
        return i
      }
    },
    Xt.test(t) || (ot.cssHooks[t + e].set = P)
  }),
  ot.fn.extend({
    css: function (t, e) {
      return Tt(this, function (t, e, r) {
        var n,
        i,
        o = {
        },
        s = 0;
        if (ot.isArray(e)) {
          for (n = Zt(t), i = e.length; s < i; s++) o[e[s]] = ot.css(t, e[s], !1, n);
          return o
        }
        return void 0 !== r ? ot.style(t, e, r)  : ot.css(t, e)
      }, t, e, arguments.length > 1)
    },
    show: function () {
      return E(this, !0)
    },
    hide: function () {
      return E(this)
    },
    toggle: function (t) {
      return 'boolean' == typeof t ? t ? this.show()  : this.hide()  : this.each(function () {
        Et(this) ? ot(this).show()  : ot(this).hide()
      })
    }
  }),
  ot.Tween = O,
  O.prototype = {
    constructor: O,
    init: function (t, e, r, n, i, o) {
      this.elem = t,
      this.prop = r,
      this.easing = i || ot.easing._default,
      this.options = e,
      this.start = this.now = this.cur(),
      this.end = n,
      this.unit = o || (ot.cssNumber[r] ? '' : 'px')
    },
    cur: function () {
      var t = O.propHooks[this.prop];
      return t && t.get ? t.get(this)  : O.propHooks._default.get(this)
    },
    run: function (t) {
      var e,
      r = O.propHooks[this.prop];
      return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)  : this.pos = e = t,
      this.now = (this.end - this.start) * e + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      r && r.set ? r.set(this)  : O.propHooks._default.set(this),
      this
    }
  },
  O.prototype.init.prototype = O.prototype,
  O.propHooks = {
    _default: {
      get: function (t) {
        var e;
        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ''), e && 'auto' !== e ? e : 0)
      },
      set: function (t) {
        ot.fx.step[t.prop] ? ot.fx.step[t.prop](t)  : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
      }
    }
  },
  O.propHooks.scrollTop = O.propHooks.scrollLeft = {
    set: function (t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }
  },
  ot.easing = {
    linear: function (t) {
      return t
    },
    swing: function (t) {
      return 0.5 - Math.cos(t * Math.PI) / 2
    },
    _default: 'swing'
  },
  ot.fx = O.prototype.init,
  ot.fx.step = {
  };
  var ie,
  oe,
  se = /^(?:toggle|show|hide)$/,
  ae = /queueHooks$/;
  ot.Animation = ot.extend(B, {
    tweeners: {
      '*': [
        function (t, e) {
          var r = this.createTween(t, e);
          return u(r.elem, t, Dt.exec(e), r),
          r
        }
      ]
    },
    tweener: function (t, e) {
      ot.isFunction(t) ? (e = t, t = [
        '*'
      ])  : t = t.match(bt);
      for (var r, n = 0, i = t.length; n < i; n++) r = t[n],
      B.tweeners[r] = B.tweeners[r] || [
      ],
      B.tweeners[r].unshift(e)
    },
    prefilters: [
      F
    ],
    prefilter: function (t, e) {
      e ? B.prefilters.unshift(t)  : B.prefilters.push(t)
    }
  }),
  ot.speed = function (t, e, r) {
    var n = t && 'object' == typeof t ? ot.extend({
    }, t)  : {
      complete: r || !r && e || ot.isFunction(t) && t,
      duration: t,
      easing: r && e || e && !ot.isFunction(e) && e
    };
    return n.duration = ot.fx.off ? 0 : 'number' == typeof n.duration ? n.duration : n.duration in ot.fx.speeds ? ot.fx.speeds[n.duration] : ot.fx.speeds._default,
    null != n.queue && n.queue !== !0 || (n.queue = 'fx'),
    n.old = n.complete,
    n.complete = function () {
      ot.isFunction(n.old) && n.old.call(this),
      n.queue && ot.dequeue(this, n.queue)
    },
    n
  },
  ot.fn.extend({
    fadeTo: function (t, e, r, n) {
      return this.filter(Et).css('opacity', 0).show().end().animate({
        opacity: e
      }, t, r, n)
    },
    animate: function (t, e, r, n) {
      var i = ot.isEmptyObject(t),
      o = ot.speed(e, r, n),
      s = function () {
        var e = B(this, ot.extend({
        }, t), o);
        (i || Ct.get(this, 'finish')) && e.stop(!0)
      };
      return s.finish = s,
      i || o.queue === !1 ? this.each(s)  : this.queue(o.queue, s)
    },
    stop: function (t, e, r) {
      var n = function (t) {
        var e = t.stop;
        delete t.stop,
        e(r)
      };
      return 'string' != typeof t && (r = e, e = t, t = void 0),
      e && t !== !1 && this.queue(t || 'fx', [
      ]),
      this.each(function () {
        var e = !0,
        i = null != t && t + 'queueHooks',
        o = ot.timers,
        s = Ct.get(this);
        if (i) s[i] && s[i].stop && n(s[i]);
         else for (i in s) s[i] && s[i].stop && ae.test(i) && n(s[i]);
        for (i = o.length; i--; ) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(r), e = !1, o.splice(i, 1));
        !e && r || ot.dequeue(this, t)
      })
    },
    finish: function (t) {
      return t !== !1 && (t = t || 'fx'),
      this.each(function () {
        var e,
        r = Ct.get(this),
        n = r[t + 'queue'],
        i = r[t + 'queueHooks'],
        o = ot.timers,
        s = n ? n.length : 0;
        for (r.finish = !0, ot.queue(this, t, [
        ]), i && i.stop && i.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
        for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete r.finish
      })
    }
  }),
  ot.each(['toggle',
  'show',
  'hide'], function (t, e) {
    var r = ot.fn[e];
    ot.fn[e] = function (t, n, i) {
      return null == t || 'boolean' == typeof t ? r.apply(this, arguments)  : this.animate(I(e, !0), t, n, i)
    }
  }),
  ot.each({
    slideDown: I('show'),
    slideUp: I('hide'),
    slideToggle: I('toggle'),
    fadeIn: {
      opacity: 'show'
    },
    fadeOut: {
      opacity: 'hide'
    },
    fadeToggle: {
      opacity: 'toggle'
    }
  }, function (t, e) {
    ot.fn[t] = function (t, r, n) {
      return this.animate(e, t, r, n)
    }
  }),
  ot.timers = [
  ],
  ot.fx.tick = function () {
    var t,
    e = 0,
    r = ot.timers;
    for (ie = ot.now(); e < r.length; e++) t = r[e],
    t() || r[e] !== t || r.splice(e--, 1);
    r.length || ot.fx.stop(),
    ie = void 0
  },
  ot.fx.timer = function (t) {
    ot.timers.push(t),
    t() ? ot.fx.start()  : ot.timers.pop()
  },
  ot.fx.interval = 13,
  ot.fx.start = function () {
    oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
  },
  ot.fx.stop = function () {
    t.clearInterval(oe),
    oe = null
  },
  ot.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  ot.fn.delay = function (e, r) {
    return e = ot.fx ? ot.fx.speeds[e] || e : e,
    r = r || 'fx',
    this.queue(r, function (r, n) {
      var i = t.setTimeout(r, e);
      n.stop = function () {
        t.clearTimeout(i)
      }
    })
  },
  function () {
    var t = $.createElement('input'),
    e = $.createElement('select'),
    r = e.appendChild($.createElement('option'));
    t.type = 'checkbox',
    nt.checkOn = '' !== t.value,
    nt.optSelected = r.selected,
    e.disabled = !0,
    nt.optDisabled = !r.disabled,
    t = $.createElement('input'),
    t.value = 't',
    t.type = 'radio',
    nt.radioValue = 't' === t.value
  }();
  var le,
  ue = ot.expr.attrHandle;
  ot.fn.extend({
    attr: function (t, e) {
      return Tt(this, ot.attr, t, e, arguments.length > 1)
    },
    removeAttr: function (t) {
      return this.each(function () {
        ot.removeAttr(this, t)
      })
    }
  }),
  ot.extend({
    attr: function (t, e, r) {
      var n,
      i,
      o = t.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 'undefined' == typeof t.getAttribute ? ot.prop(t, e, r)  : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)), void 0 !== r ? null === r ? void ot.removeAttr(t, e)  : i && 'set' in i && void 0 !== (n = i.set(t, r, e)) ? n : (t.setAttribute(e, r + ''), r)  : i && 'get' in i && null !== (n = i.get(t, e)) ? n : (n = ot.find.attr(t, e), null == n ? void 0 : n))
    },
    attrHooks: {
      type: {
        set: function (t, e) {
          if (!nt.radioValue && 'radio' === e && ot.nodeName(t, 'input')) {
            var r = t.value;
            return t.setAttribute('type', e),
            r && (t.value = r),
            e
          }
        }
      }
    },
    removeAttr: function (t, e) {
      var r,
      n,
      i = 0,
      o = e && e.match(bt);
      if (o && 1 === t.nodeType) for (; r = o[i++]; ) n = ot.propFix[r] || r,
      ot.expr.match.bool.test(r) && (t[n] = !1),
      t.removeAttribute(r)
    }
  }),
  le = {
    set: function (t, e, r) {
      return e === !1 ? ot.removeAttr(t, r)  : t.setAttribute(r, r),
      r
    }
  },
  ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var r = ue[e] || ot.find.attr;
    ue[e] = function (t, e, n) {
      var i,
      o;
      return n || (o = ue[e], ue[e] = i, i = null != r(t, e, n) ? e.toLowerCase()  : null, ue[e] = o),
      i
    }
  });
  var he = /^(?:input|select|textarea|button)$/i,
  ce = /^(?:a|area)$/i;
  ot.fn.extend({
    prop: function (t, e) {
      return Tt(this, ot.prop, t, e, arguments.length > 1)
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[ot.propFix[t] || t]
      })
    }
  }),
  ot.extend({
    prop: function (t, e, r) {
      var n,
      i,
      o = t.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, i = ot.propHooks[e]),
      void 0 !== r ? i && 'set' in i && void 0 !== (n = i.set(t, r, e)) ? n : t[e] = r : i && 'get' in i && null !== (n = i.get(t, e)) ? n : t[e]
    },
    propHooks: {
      tabIndex: {
        get: function (t) {
          var e = ot.find.attr(t, 'tabindex');
          return e ? parseInt(e, 10)  : he.test(t.nodeName) || ce.test(t.nodeName) && t.href ? 0 : - 1
        }
      }
    },
    propFix: {
      for : 'htmlFor',
      class: 'className'
    }
  }),
  nt.optSelected || (ot.propHooks.selected = {
    get: function (t) {
      var e = t.parentNode;
      return e && e.parentNode && e.parentNode.selectedIndex,
      null
    },
    set: function (t) {
      var e = t.parentNode;
      e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
    }
  }),
  ot.each(['tabIndex',
  'readOnly',
  'maxLength',
  'cellSpacing',
  'cellPadding',
  'rowSpan',
  'colSpan',
  'useMap',
  'frameBorder',
  'contentEditable'], function () {
    ot.propFix[this.toLowerCase()] = this
  });
  var pe = /[\t\r\n\f]/g;
  ot.fn.extend({
    addClass: function (t) {
      var e,
      r,
      n,
      i,
      o,
      s,
      a,
      l = 0;
      if (ot.isFunction(t)) return this.each(function (e) {
        ot(this).addClass(t.call(this, e, H(this)))
      });
      if ('string' == typeof t && t) for (e = t.match(bt) || [
      ]; r = this[l++]; ) if (i = H(r), n = 1 === r.nodeType && (' ' + i + ' ').replace(pe, ' ')) {
        for (s = 0; o = e[s++]; ) n.indexOf(' ' + o + ' ') < 0 && (n += o + ' ');
        a = ot.trim(n),
        i !== a && r.setAttribute('class', a)
      }
      return this
    },
    removeClass: function (t) {
      var e,
      r,
      n,
      i,
      o,
      s,
      a,
      l = 0;
      if (ot.isFunction(t)) return this.each(function (e) {
        ot(this).removeClass(t.call(this, e, H(this)))
      });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof t && t) for (e = t.match(bt) || [
      ]; r = this[l++]; ) if (i = H(r), n = 1 === r.nodeType && (' ' + i + ' ').replace(pe, ' ')) {
        for (s = 0; o = e[s++]; ) for (; n.indexOf(' ' + o + ' ') > - 1; ) n = n.replace(' ' + o + ' ', ' ');
        a = ot.trim(n),
        i !== a && r.setAttribute('class', a)
      }
      return this
    },
    toggleClass: function (t, e) {
      var r = typeof t;
      return 'boolean' == typeof e && 'string' === r ? e ? this.addClass(t)  : this.removeClass(t)  : ot.isFunction(t) ? this.each(function (r) {
        ot(this).toggleClass(t.call(this, r, H(this), e), e)
      })  : this.each(function () {
        var e,
        n,
        i,
        o;
        if ('string' === r) for (n = 0, i = ot(this), o = t.match(bt) || [
        ]; e = o[n++]; ) i.hasClass(e) ? i.removeClass(e)  : i.addClass(e);
         else void 0 !== t && 'boolean' !== r || (e = H(this), e && Ct.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || t === !1 ? '' : Ct.get(this, '__className__') || ''))
      })
    },
    hasClass: function (t) {
      var e,
      r,
      n = 0;
      for (e = ' ' + t + ' '; r = this[n++]; ) if (1 === r.nodeType && (' ' + H(r) + ' ').replace(pe, ' ').indexOf(e) > - 1) return !0;
      return !1
    }
  });
  var fe = /\r/g,
  de = /[\x20\t\r\n\f]+/g;
  ot.fn.extend({
    val: function (t) {
      var e,
      r,
      n,
      i = this[0];
      {
        if (arguments.length) return n = ot.isFunction(t),
        this.each(function (r) {
          var i;
          1 === this.nodeType && (i = n ? t.call(this, r, ot(this).val())  : t, null == i ? i = '' : 'number' == typeof i ? i += '' : ot.isArray(i) && (i = ot.map(i, function (t) {
            return null == t ? '' : t + ''
          })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && 'set' in e && void 0 !== e.set(this, i, 'value') || (this.value = i))
        });
        if (i) return e = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()],
        e && 'get' in e && void 0 !== (r = e.get(i, 'value')) ? r : (r = i.value, 'string' == typeof r ? r.replace(fe, '')  : null == r ? '' : r)
      }
    }
  }),
  ot.extend({
    valHooks: {
      option: {
        get: function (t) {
          var e = ot.find.attr(t, 'value');
          return null != e ? e : ot.trim(ot.text(t)).replace(de, ' ')
        }
      },
      select: {
        get: function (t) {
          for (var e, r, n = t.options, i = t.selectedIndex, o = 'select-one' === t.type || i < 0, s = o ? null : [
          ], a = o ? i + 1 : n.length, l = i < 0 ? a : o ? i : 0; l < a; l++) if (r = n[l], (r.selected || l === i) && (nt.optDisabled ? !r.disabled : null === r.getAttribute('disabled')) && (!r.parentNode.disabled || !ot.nodeName(r.parentNode, 'optgroup'))) {
            if (e = ot(r).val(), o) return e;
            s.push(e)
          }
          return s
        },
        set: function (t, e) {
          for (var r, n, i = t.options, o = ot.makeArray(e), s = i.length; s--; ) n = i[s],
          (n.selected = ot.inArray(ot.valHooks.option.get(n), o) > - 1) && (r = !0);
          return r || (t.selectedIndex = - 1),
          o
        }
      }
    }
  }),
  ot.each(['radio',
  'checkbox'], function () {
    ot.valHooks[this] = {
      set: function (t, e) {
        if (ot.isArray(e)) return t.checked = ot.inArray(ot(t).val(), e) > - 1
      }
    },
    nt.checkOn || (ot.valHooks[this].get = function (t) {
      return null === t.getAttribute('value') ? 'on' : t.value
    })
  });
  var me = /^(?:focusinfocus|focusoutblur)$/;
  ot.extend(ot.event, {
    trigger: function (e, r, n, i) {
      var o,
      s,
      a,
      l,
      u,
      h,
      c,
      p = [
        n || $
      ],
      f = rt.call(e, 'type') ? e.type : e,
      d = rt.call(e, 'namespace') ? e.namespace.split('.')  : [
      ];
      if (s = a = n = n || $, 3 !== n.nodeType && 8 !== n.nodeType && !me.test(f + ot.event.triggered) && (f.indexOf('.') > - 1 && (d = f.split('.'), f = d.shift(), d.sort()), u = f.indexOf(':') < 0 && 'on' + f, e = e[ot.expando] ? e : new ot.Event(f, 'object' == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join('.'), e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)')  : null, e.result = void 0, e.target || (e.target = n), r = null == r ? [
        e
      ] : ot.makeArray(r, [
        e
      ]), c = ot.event.special[f] || {
      }, i || !c.trigger || c.trigger.apply(n, r) !== !1)) {
        if (!i && !c.noBubble && !ot.isWindow(n)) {
          for (l = c.delegateType || f, me.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s),
          a = s;
          a === (n.ownerDocument || $) && p.push(a.defaultView || a.parentWindow || t)
        }
        for (o = 0; (s = p[o++]) && !e.isPropagationStopped(); ) e.type = o > 1 ? l : c.bindType || f,
        h = (Ct.get(s, 'events') || {
        }) [e.type] && Ct.get(s, 'handle'),
        h && h.apply(s, r),
        h = u && s[u],
        h && h.apply && St(s) && (e.result = h.apply(s, r), e.result === !1 && e.preventDefault());
        return e.type = f,
        i || e.isDefaultPrevented() || c._default && c._default.apply(p.pop(), r) !== !1 || !St(n) || u && ot.isFunction(n[f]) && !ot.isWindow(n) && (a = n[u], a && (n[u] = null), ot.event.triggered = f, n[f](), ot.event.triggered = void 0, a && (n[u] = a)),
        e.result
      }
    },
    simulate: function (t, e, r) {
      var n = ot.extend(new ot.Event, r, {
        type: t,
        isSimulated: !0
      });
      ot.event.trigger(n, null, e)
    }
  }),
  ot.fn.extend({
    trigger: function (t, e) {
      return this.each(function () {
        ot.event.trigger(t, e, this)
      })
    },
    triggerHandler: function (t, e) {
      var r = this[0];
      if (r) return ot.event.trigger(t, e, r, !0)
    }
  }),
  ot.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (t, e) {
    ot.fn[e] = function (t, r) {
      return arguments.length > 0 ? this.on(e, null, t, r)  : this.trigger(e)
    }
  }),
  ot.fn.extend({
    hover: function (t, e) {
      return this.mouseenter(t).mouseleave(e || t)
    }
  }),
  nt.focusin = 'onfocusin' in t,
  nt.focusin || ot.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (t, e) {
    var r = function (t) {
      ot.event.simulate(e, t.target, ot.event.fix(t))
    };
    ot.event.special[e] = {
      setup: function () {
        var n = this.ownerDocument || this,
        i = Ct.access(n, e);
        i || n.addEventListener(t, r, !0),
        Ct.access(n, e, (i || 0) + 1)
      },
      teardown: function () {
        var n = this.ownerDocument || this,
        i = Ct.access(n, e) - 1;
        i ? Ct.access(n, e, i)  : (n.removeEventListener(t, r, !0), Ct.remove(n, e))
      }
    }
  });
  var ge = t.location,
  ye = ot.now(),
  ve = /\?/;
  ot.parseJSON = function (t) {
    return JSON.parse(t + '')
  },
  ot.parseXML = function (e) {
    var r;
    if (!e || 'string' != typeof e) return null;
    try {
      r = (new t.DOMParser).parseFromString(e, 'text/xml')
    } catch (t) {
      r = void 0
    }
    return r && !r.getElementsByTagName('parsererror').length || ot.error('Invalid XML: ' + e),
    r
  };
  var _e = /#.*$/,
  xe = /([?&])_=[^&]*/,
  be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
  we = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  Te = /^(?:GET|HEAD)$/,
  Se = /^\/\//,
  Ce = {
  },
  Me = {
  },
  Re = '*/'.concat('*'),
  ke = $.createElement('a');
  ke.href = ge.href,
  ot.extend({
    active: 0,
    lastModified: {
    },
    etag: {
    },
    ajaxSettings: {
      url: ge.href,
      type: 'GET',
      isLocal: we.test(ge.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Re,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': ot.parseJSON,
        'text xml': ot.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (t, e) {
      return e ? G(G(t, ot.ajaxSettings), e)  : G(ot.ajaxSettings, t)
    },
    ajaxPrefilter: j(Ce),
    ajaxTransport: j(Me),
    ajax: function (e, r) {
      function n(e, r, n, a) {
        var u,
        c,
        v,
        _,
        b,
        T = r;
        2 !== x && (x = 2, l && t.clearTimeout(l), i = void 0, s = a || '', w.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (_ = q(p, w, n)), _ = W(p, _, w, u), u ? (p.ifModified && (b = w.getResponseHeader('Last-Modified'), b && (ot.lastModified[o] = b), b = w.getResponseHeader('etag'), b && (ot.etag[o] = b)), 204 === e || 'HEAD' === p.type ? T = 'nocontent' : 304 === e ? T = 'notmodified' : (T = _.state, c = _.data, v = _.error, u = !v))  : (v = T, !e && T || (T = 'error', e < 0 && (e = 0))), w.status = e, w.statusText = (r || T) + '', u ? m.resolveWith(f, [
          c,
          T,
          w
        ])  : m.rejectWith(f, [
          w,
          T,
          v
        ]), w.statusCode(y), y = void 0, h && d.trigger(u ? 'ajaxSuccess' : 'ajaxError', [
          w,
          p,
          u ? c : v
        ]), g.fireWith(f, [
          w,
          T
        ]), h && (d.trigger('ajaxComplete', [
          w,
          p
        ]), --ot.active || ot.event.trigger('ajaxStop')))
      }
      'object' == typeof e && (r = e, e = void 0),
      r = r || {
      };
      var i,
      o,
      s,
      a,
      l,
      u,
      h,
      c,
      p = ot.ajaxSetup({
      }, r),
      f = p.context || p,
      d = p.context && (f.nodeType || f.jquery) ? ot(f)  : ot.event,
      m = ot.Deferred(),
      g = ot.Callbacks('once memory'),
      y = p.statusCode || {
      },
      v = {
      },
      _ = {
      },
      x = 0,
      b = 'canceled',
      w = {
        readyState: 0,
        getResponseHeader: function (t) {
          var e;
          if (2 === x) {
            if (!a) for (a = {
            }; e = be.exec(s); ) a[e[1].toLowerCase()] = e[2];
            e = a[t.toLowerCase()]
          }
          return null == e ? null : e
        },
        getAllResponseHeaders: function () {
          return 2 === x ? s : null
        },
        setRequestHeader: function (t, e) {
          var r = t.toLowerCase();
          return x || (t = _[r] = _[r] || t, v[t] = e),
          this
        },
        overrideMimeType: function (t) {
          return x || (p.mimeType = t),
          this
        },
        statusCode: function (t) {
          var e;
          if (t) if (x < 2) for (e in t) y[e] = [
            y[e],
            t[e]
          ];
           else w.always(t[w.status]);
          return this
        },
        abort: function (t) {
          var e = t || b;
          return i && i.abort(e),
          n(0, e),
          this
        }
      };
      if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || ge.href) + '').replace(_e, '').replace(Se, ge.protocol + '//'), p.type = r.method || r.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || '*').toLowerCase().match(bt) || [
        ''
      ], null == p.crossDomain) {
        u = $.createElement('a');
        try {
          u.href = p.url,
          u.href = u.href,
          p.crossDomain = ke.protocol + '//' + ke.host != u.protocol + '//' + u.host
        } catch (t) {
          p.crossDomain = !0
        }
      }
      if (p.data && p.processData && 'string' != typeof p.data && (p.data = ot.param(p.data, p.traditional)), Y(Ce, p, r, w), 2 === x) return w;
      h = ot.event && p.global,
      h && 0 === ot.active++ && ot.event.trigger('ajaxStart'),
      p.type = p.type.toUpperCase(),
      p.hasContent = !Te.test(p.type),
      o = p.url,
      p.hasContent || (p.data && (o = p.url += (ve.test(o) ? '&' : '?') + p.data, delete p.data), p.cache === !1 && (p.url = xe.test(o) ? o.replace(xe, '$1_=' + ye++)  : o + (ve.test(o) ? '&' : '?') + '_=' + ye++)),
      p.ifModified && (ot.lastModified[o] && w.setRequestHeader('If-Modified-Since', ot.lastModified[o]), ot.etag[o] && w.setRequestHeader('If-None-Match', ot.etag[o])),
      (p.data && p.hasContent && p.contentType !== !1 || r.contentType) && w.setRequestHeader('Content-Type', p.contentType),
      w.setRequestHeader('Accept', p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Re + '; q=0.01' : '')  : p.accepts['*']);
      for (c in p.headers) w.setRequestHeader(c, p.headers[c]);
      if (p.beforeSend && (p.beforeSend.call(f, w, p) === !1 || 2 === x)) return w.abort();
      b = 'abort';
      for (c in {
        success: 1,
        error: 1,
        complete: 1
      }) w[c](p[c]);
      if (i = Y(Me, p, r, w)) {
        if (w.readyState = 1, h && d.trigger('ajaxSend', [
          w,
          p
        ]), 2 === x) return w;
        p.async && p.timeout > 0 && (l = t.setTimeout(function () {
          w.abort('timeout')
        }, p.timeout));
        try {
          x = 1,
          i.send(v, n)
        } catch (t) {
          if (!(x < 2)) throw t;
          n( - 1, t)
        }
      } else n( - 1, 'No Transport');
      return w
    },
    getJSON: function (t, e, r) {
      return ot.get(t, e, r, 'json')
    },
    getScript: function (t, e) {
      return ot.get(t, void 0, e, 'script')
    }
  }),
  ot.each(['get',
  'post'], function (t, e) {
    ot[e] = function (t, r, n, i) {
      return ot.isFunction(r) && (i = i || n, n = r, r = void 0),
      ot.ajax(ot.extend({
        url: t,
        type: e,
        dataType: i,
        data: r,
        success: n
      }, ot.isPlainObject(t) && t))
    }
  }),
  ot._evalUrl = function (t) {
    return ot.ajax({
      url: t,
      type: 'GET',
      dataType: 'script',
      async: !1,
      global: !1,
      throws: !0
    })
  },
  ot.fn.extend({
    wrapAll: function (t) {
      var e;
      return ot.isFunction(t) ? this.each(function (e) {
        ot(this).wrapAll(t.call(this, e))
      })  : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
        return t
      }).append(this)), this)
    },
    wrapInner: function (t) {
      return ot.isFunction(t) ? this.each(function (e) {
        ot(this).wrapInner(t.call(this, e))
      })  : this.each(function () {
        var e = ot(this),
        r = e.contents();
        r.length ? r.wrapAll(t)  : e.append(t)
      })
    },
    wrap: function (t) {
      var e = ot.isFunction(t);
      return this.each(function (r) {
        ot(this).wrapAll(e ? t.call(this, r)  : t)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        ot.nodeName(this, 'body') || ot(this).replaceWith(this.childNodes)
      }).end()
    }
  }),
  ot.expr.filters.hidden = function (t) {
    return !ot.expr.filters.visible(t)
  },
  ot.expr.filters.visible = function (t) {
    return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
  };
  var Pe = /%20/g,
  De = /\[\]$/,
  Ae = /\r?\n/g,
  Ee = /^(?:submit|button|image|reset|file)$/i,
  Oe = /^(?:input|select|textarea|keygen)/i;
  ot.param = function (t, e) {
    var r,
    n = [
    ],
    i = function (t, e) {
      e = ot.isFunction(e) ? e()  : null == e ? '' : e,
      n[n.length] = encodeURIComponent(t) + '=' + encodeURIComponent(e)
    };
    if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function () {
      i(this.name, this.value)
    });
     else for (r in t) z(r, t[r], e, i);
    return n.join('&').replace(Pe, '+')
  },
  ot.fn.extend({
    serialize: function () {
      return ot.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var t = ot.prop(this, 'elements');
        return t ? ot.makeArray(t)  : this
      }).filter(function () {
        var t = this.type;
        return this.name && !ot(this).is(':disabled') && Oe.test(this.nodeName) && !Ee.test(t) && (this.checked || !Ot.test(t))
      }).map(function (t, e) {
        var r = ot(this).val();
        return null == r ? null : ot.isArray(r) ? ot.map(r, function (t) {
          return {
            name: e.name,
            value: t.replace(Ae, '\r\n')
          }
        })  : {
          name: e.name,
          value: r.replace(Ae, '\r\n')
        }
      }).get()
    }
  }),
  ot.ajaxSettings.xhr = function () {
    try {
      return new t.XMLHttpRequest
    } catch (t) {
    }
  };
  var Ne = {
    0: 200,
    1223: 204
  },
  Ie = ot.ajaxSettings.xhr();
  nt.cors = !!Ie && 'withCredentials' in Ie,
  nt.ajax = Ie = !!Ie,
  ot.ajaxTransport(function (e) {
    var r,
    n;
    if (nt.cors || Ie && !e.crossDomain) return {
      send: function (i, o) {
        var s,
        a = e.xhr();
        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
        e.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
        for (s in i) a.setRequestHeader(s, i[s]);
        r = function (t) {
          return function () {
            r && (r = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, 'abort' === t ? a.abort()  : 'error' === t ? 'number' != typeof a.status ? o(0, 'error')  : o(a.status, a.statusText)  : o(Ne[a.status] || a.status, a.statusText, 'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText ? {
              binary: a.response
            }
             : {
              text: a.responseText
            }, a.getAllResponseHeaders()))
          }
        },
        a.onload = r(),
        n = a.onerror = r('error'),
        void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
          4 === a.readyState && t.setTimeout(function () {
            r && n()
          })
        },
        r = r('abort');
        try {
          a.send(e.hasContent && e.data || null)
        } catch (t) {
          if (r) throw t
        }
      },
      abort: function () {
        r && r()
      }
    }
  }),
  ot.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      'text script': function (t) {
        return ot.globalEval(t),
        t
      }
    }
  }),
  ot.ajaxPrefilter('script', function (t) {
    void 0 === t.cache && (t.cache = !1),
    t.crossDomain && (t.type = 'GET')
  }),
  ot.ajaxTransport('script', function (t) {
    if (t.crossDomain) {
      var e,
      r;
      return {
        send: function (n, i) {
          e = ot('<script>').prop({
            charset: t.scriptCharset,
            src: t.url
          }).on('load error', r = function (t) {
            e.remove(),
            r = null,
            t && i('error' === t.type ? 404 : 200, t.type)
          }),
          $.head.appendChild(e[0])
        },
        abort: function () {
          r && r()
        }
      }
    }
  });
  var Le = [
  ],
  Fe = /(=)\?(?=&|$)|\?\?/;
  ot.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var t = Le.pop() || ot.expando + '_' + ye++;
      return this[t] = !0,
      t
    }
  }),
  ot.ajaxPrefilter('json jsonp', function (e, r, n) {
    var i,
    o,
    s,
    a = e.jsonp !== !1 && (Fe.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && Fe.test(e.data) && 'data');
    if (a || 'jsonp' === e.dataTypes[0]) return i = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback()  : e.jsonpCallback,
    a ? e[a] = e[a].replace(Fe, '$1' + i)  : e.jsonp !== !1 && (e.url += (ve.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
    e.converters['script json'] = function () {
      return s || ot.error(i + ' was not called'),
      s[0]
    },
    e.dataTypes[0] = 'json',
    o = t[i],
    t[i] = function () {
      s = arguments
    },
    n.always(function () {
      void 0 === o ? ot(t).removeProp(i)  : t[i] = o,
      e[i] && (e.jsonpCallback = r.jsonpCallback, Le.push(i)),
      s && ot.isFunction(o) && o(s[0]),
      s = o = void 0
    }),
    'script'
  }),
  ot.parseHTML = function (t, e, r) {
    if (!t || 'string' != typeof t) return null;
    'boolean' == typeof e && (r = e, e = !1),
    e = e || $;
    var n = dt.exec(t),
    i = !r && [
    ];
    return n ? [
      e.createElement(n[1])
    ] : (n = p([t], e, i), i && i.length && ot(i).remove(), ot.merge([], n.childNodes))
  };
  var Ue = ot.fn.load;
  ot.fn.load = function (t, e, r) {
    if ('string' != typeof t && Ue) return Ue.apply(this, arguments);
    var n,
    i,
    o,
    s = this,
    a = t.indexOf(' ');
    return a > - 1 && (n = ot.trim(t.slice(a)), t = t.slice(0, a)),
    ot.isFunction(e) ? (r = e, e = void 0)  : e && 'object' == typeof e && (i = 'POST'),
    s.length > 0 && ot.ajax({
      url: t,
      type: i || 'GET',
      dataType: 'html',
      data: e
    }).done(function (t) {
      o = arguments,
      s.html(n ? ot('<div>').append(ot.parseHTML(t)).find(n)  : t)
    }).always(r && function (t, e) {
      s.each(function () {
        r.apply(this, o || [
          t.responseText,
          e,
          t
        ])
      })
    }),
    this
  },
  ot.each(['ajaxStart',
  'ajaxStop',
  'ajaxComplete',
  'ajaxError',
  'ajaxSuccess',
  'ajaxSend'], function (t, e) {
    ot.fn[e] = function (t) {
      return this.on(e, t)
    }
  }),
  ot.expr.filters.animated = function (t) {
    return ot.grep(ot.timers, function (e) {
      return t === e.elem
    }).length
  },
  ot.offset = {
    setOffset: function (t, e, r) {
      var n,
      i,
      o,
      s,
      a,
      l,
      u,
      h = ot.css(t, 'position'),
      c = ot(t),
      p = {
      };
      'static' === h && (t.style.position = 'relative'),
      a = c.offset(),
      o = ot.css(t, 'top'),
      l = ot.css(t, 'left'),
      u = ('absolute' === h || 'fixed' === h) && (o + l).indexOf('auto') > - 1,
      u ? (n = c.position(), s = n.top, i = n.left)  : (s = parseFloat(o) || 0, i = parseFloat(l) || 0),
      ot.isFunction(e) && (e = e.call(t, r, ot.extend({
      }, a))),
      null != e.top && (p.top = e.top - a.top + s),
      null != e.left && (p.left = e.left - a.left + i),
      'using' in e ? e.using.call(t, p)  : c.css(p)
    }
  },
  ot.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        ot.offset.setOffset(this, t, e)
      });
      var e,
      r,
      n = this[0],
      i = {
        top: 0,
        left: 0
      },
      o = n && n.ownerDocument;
      if (o) return e = o.documentElement,
      ot.contains(e, n) ? (i = n.getBoundingClientRect(), r = V(o), {
        top: i.top + r.pageYOffset - e.clientTop,
        left: i.left + r.pageXOffset - e.clientLeft
      })  : i
    },
    position: function () {
      if (this[0]) {
        var t,
        e,
        r = this[0],
        n = {
          top: 0,
          left: 0
        };
        return 'fixed' === ot.css(r, 'position') ? e = r.getBoundingClientRect()  : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], 'html') || (n = t.offset()), n.top += ot.css(t[0], 'borderTopWidth', !0), n.left += ot.css(t[0], 'borderLeftWidth', !0)),
        {
          top: e.top - n.top - ot.css(r, 'marginTop', !0),
          left: e.left - n.left - ot.css(r, 'marginLeft', !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var t = this.offsetParent; t && 'static' === ot.css(t, 'position'); ) t = t.offsetParent;
        return t || Qt
      })
    }
  }),
  ot.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (t, e) {
    var r = 'pageYOffset' === e;
    ot.fn[t] = function (n) {
      return Tt(this, function (t, n, i) {
        var o = V(t);
        return void 0 === i ? o ? o[e] : t[n] : void (o ? o.scrollTo(r ? o.pageXOffset : i, r ? i : o.pageYOffset)  : t[n] = i)
      }, t, n, arguments.length)
    }
  }),
  ot.each(['top',
  'left'], function (t, e) {
    ot.cssHooks[e] = R(nt.pixelPosition, function (t, r) {
      if (r) return r = M(t, e),
      $t.test(r) ? ot(t).position() [e] + 'px' : r
    })
  }),
  ot.each({
    Height: 'height',
    Width: 'width'
  }, function (t, e) {
    ot.each({
      padding: 'inner' + t,
      content: e,
      '': 'outer' + t
    }, function (r, n) {
      ot.fn[n] = function (n, i) {
        var o = arguments.length && (r || 'boolean' != typeof n),
        s = r || (n === !0 || i === !0 ? 'margin' : 'border');
        return Tt(this, function (e, r, n) {
          var i;
          return ot.isWindow(e) ? e.document.documentElement['client' + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body['scroll' + t], i['scroll' + t], e.body['offset' + t], i['offset' + t], i['client' + t]))  : void 0 === n ? ot.css(e, r, s)  : ot.style(e, r, n, s)
        }, e, o ? n : void 0, o, null)
      }
    })
  }),
  ot.fn.extend({
    bind: function (t, e, r) {
      return this.on(t, null, e, r)
    },
    unbind: function (t, e) {
      return this.off(t, null, e)
    },
    delegate: function (t, e, r, n) {
      return this.on(e, t, r, n)
    },
    undelegate: function (t, e, r) {
      return 1 === arguments.length ? this.off(t, '**')  : this.off(e, t || '**', r)
    },
    size: function () {
      return this.length
    }
  }),
  ot.fn.andSelf = ot.fn.addBack,
  'function' == typeof define && define.amd && define('jquery', [
  ], function () {
    return ot
  });
  var Be = t.jQuery,
  He = t.$;
  return ot.noConflict = function (e) {
    return t.$ === ot && (t.$ = He),
    e && t.jQuery === ot && (t.jQuery = Be),
    ot
  },
  e || (t.jQuery = t.$ = ot),
  ot
}),
function (t) {
  var e = t(window);
  t.fn.visible = function (t, r, n) {
    if (!(this.length < 1)) {
      var i = this.length > 1 ? this.eq(0)  : this,
      o = i.get(0),
      s = e.width(),
      a = e.height(),
      n = n ? n : 'both',
      l = r !== !0 || o.offsetWidth * o.offsetHeight;
      if ('function' == typeof o.getBoundingClientRect) {
        var u = o.getBoundingClientRect(),
        h = u.top >= 0 && u.top < a,
        c = u.bottom > 0 && u.bottom <= a,
        p = u.left >= 0 && u.left < s,
        f = u.right > 0 && u.right <= s,
        d = t ? h || c : h && c,
        m = t ? p || f : p && f;
        if ('both' === n) return l && d && m;
        if ('vertical' === n) return l && d;
        if ('horizontal' === n) return l && m
      } else {
        var g = e.scrollTop(),
        y = g + a,
        v = e.scrollLeft(),
        _ = v + s,
        x = i.offset(),
        b = x.top,
        w = b + i.height(),
        T = x.left,
        S = T + i.width(),
        C = t === !0 ? w : b,
        M = t === !0 ? b : w,
        R = t === !0 ? S : T,
        k = t === !0 ? T : S;
        if ('both' === n) return !!l && M <= y && C >= g && k <= _ && R >= v;
        if ('vertical' === n) return !!l && M <= y && C >= g;
        if ('horizontal' === n) return !!l && k <= _ && R >= v
      }
    }
  }
}(jQuery),
function () {
  function t(t) {
    function e(e, r, n, i, o, s) {
      for (; o >= 0 && o < s; o += t) {
        var a = i ? i[o] : o;
        n = r(n, e[a], a, e)
      }
      return n
    }
    return function (r, n, i, o) {
      n = _(n, o, 4);
      var s = !M(r) && v.keys(r),
      a = (s || r).length,
      l = t > 0 ? 0 : a - 1;
      return arguments.length < 3 && (i = r[s ? s[l] : l], l += t),
      e(r, n, i, s, l, a)
    }
  }
  function e(t) {
    return function (e, r, n) {
      r = x(r, n);
      for (var i = C(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t) if (r(e[o], o, e)) return o;
      return - 1
    }
  }
  function r(t, e, r) {
    return function (n, i, o) {
      var s = 0,
      a = C(n);
      if ('number' == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s)  : a = o >= 0 ? Math.min(o + 1, a)  : o + a + 1;
       else if (r && o && a) return o = r(n, i),
      n[o] === i ? o : - 1;
      if (i !== i) return o = e(h.call(n, s, a), v.isNaN),
      o >= 0 ? o + s : - 1;
      for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t) if (n[o] === i) return o;
      return - 1
    }
  }
  function n(t, e) {
    var r = A.length,
    n = t.constructor,
    i = v.isFunction(n) && n.prototype || a,
    o = 'constructor';
    for (v.has(t, o) && !v.contains(e, o) && e.push(o); r--; ) o = A[r],
    o in t && t[o] !== i[o] && !v.contains(e, o) && e.push(o)
  }
  var i = this,
  o = i._,
  s = Array.prototype,
  a = Object.prototype,
  l = Function.prototype,
  u = s.push,
  h = s.slice,
  c = a.toString,
  p = a.hasOwnProperty,
  f = Array.isArray,
  d = Object.keys,
  m = l.bind,
  g = Object.create,
  y = function () {
  },
  v = function (t) {
    return t instanceof v ? t : this instanceof v ? void (this._wrapped = t)  : new v(t)
  };
  'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = v), exports._ = v)  : i._ = v,
  v.VERSION = '1.8.3';
  var _ = function (t, e, r) {
    if (void 0 === e) return t;
    switch (null == r ? 3 : r) {
      case 1:
        return function (r) {
          return t.call(e, r)
        };
      case 2:
        return function (r, n) {
          return t.call(e, r, n)
        };
      case 3:
        return function (r, n, i) {
          return t.call(e, r, n, i)
        };
      case 4:
        return function (r, n, i, o) {
          return t.call(e, r, n, i, o)
        }
    }
    return function () {
      return t.apply(e, arguments)
  }
},
x = function (t, e, r) {
  return null == t ? v.identity : v.isFunction(t) ? _(t, e, r)  : v.isObject(t) ? v.matcher(t)  : v.property(t)
};
v.iteratee = function (t, e) {
  return x(t, e, 1 / 0)
};
var b = function (t, e) {
  return function (r) {
    var n = arguments.length;
    if (n < 2 || null == r) return r;
    for (var i = 1; i < n; i++) for (var o = arguments[i], s = t(o), a = s.length, l = 0; l < a; l++) {
      var u = s[l];
      e && void 0 !== r[u] || (r[u] = o[u])
    }
    return r
  }
},
w = function (t) {
  if (!v.isObject(t)) return {
  };
  if (g) return g(t);
  y.prototype = t;
  var e = new y;
  return y.prototype = null,
  e
},
T = function (t) {
  return function (e) {
    return null == e ? void 0 : e[t]
  }
},
S = Math.pow(2, 53) - 1,
C = T('length'),
M = function (t) {
  var e = C(t);
  return 'number' == typeof e && e >= 0 && e <= S
};
v.each = v.forEach = function (t, e, r) {
  e = _(e, r);
  var n,
  i;
  if (M(t)) for (n = 0, i = t.length; n < i; n++) e(t[n], n, t);
   else {
    var o = v.keys(t);
    for (n = 0, i = o.length; n < i; n++) e(t[o[n]], o[n], t)
  }
  return t
},
v.map = v.collect = function (t, e, r) {
  e = x(e, r);
  for (var n = !M(t) && v.keys(t), i = (n || t).length, o = Array(i), s = 0; s < i; s++) {
    var a = n ? n[s] : s;
    o[s] = e(t[a], a, t)
  }
  return o
},
v.reduce = v.foldl = v.inject = t(1),
v.reduceRight = v.foldr = t( - 1),
v.find = v.detect = function (t, e, r) {
  var n;
  if (n = M(t) ? v.findIndex(t, e, r)  : v.findKey(t, e, r), void 0 !== n && n !== - 1) return t[n]
},
v.filter = v.select = function (t, e, r) {
  var n = [
  ];
  return e = x(e, r),
  v.each(t, function (t, r, i) {
    e(t, r, i) && n.push(t)
  }),
  n
},
v.reject = function (t, e, r) {
  return v.filter(t, v.negate(x(e)), r)
},
v.every = v.all = function (t, e, r) {
  e = x(e, r);
  for (var n = !M(t) && v.keys(t), i = (n || t).length, o = 0; o < i; o++) {
    var s = n ? n[o] : o;
    if (!e(t[s], s, t)) return !1
  }
  return !0
},
v.some = v.any = function (t, e, r) {
  e = x(e, r);
  for (var n = !M(t) && v.keys(t), i = (n || t).length, o = 0; o < i; o++) {
    var s = n ? n[o] : o;
    if (e(t[s], s, t)) return !0
  }
  return !1
},
v.contains = v.includes = v.include = function (t, e, r, n) {
  return M(t) || (t = v.values(t)),
  ('number' != typeof r || n) && (r = 0),
  v.indexOf(t, e, r) >= 0
},
v.invoke = function (t, e) {
  var r = h.call(arguments, 2),
  n = v.isFunction(e);
  return v.map(t, function (t) {
    var i = n ? e : t[e];
    return null == i ? i : i.apply(t, r)
  })
},
v.pluck = function (t, e) {
  return v.map(t, v.property(e))
},
v.where = function (t, e) {
  return v.filter(t, v.matcher(e))
},
v.findWhere = function (t, e) {
  return v.find(t, v.matcher(e))
},
v.max = function (t, e, r) {
  var n,
  i,
  o = - (1 / 0),
  s = - (1 / 0);
  if (null == e && null != t) {
    t = M(t) ? t : v.values(t);
    for (var a = 0, l = t.length; a < l; a++) n = t[a],
    n > o && (o = n)
  } else e = x(e, r),
  v.each(t, function (t, r, n) {
    i = e(t, r, n),
    (i > s || i === - (1 / 0) && o === - (1 / 0)) && (o = t, s = i)
  });
  return o
},
v.min = function (t, e, r) {
  var n,
  i,
  o = 1 / 0,
  s = 1 / 0;
  if (null == e && null != t) {
    t = M(t) ? t : v.values(t);
    for (var a = 0, l = t.length; a < l; a++) n = t[a],
    n < o && (o = n)
  } else e = x(e, r),
  v.each(t, function (t, r, n) {
    i = e(t, r, n),
    (i < s || i === 1 / 0 && o === 1 / 0) && (o = t, s = i)
  });
  return o
},
v.shuffle = function (t) {
  for (var e, r = M(t) ? t : v.values(t), n = r.length, i = Array(n), o = 0; o < n; o++) e = v.random(0, o),
  e !== o && (i[o] = i[e]),
  i[e] = r[o];
  return i
},
v.sample = function (t, e, r) {
  return null == e || r ? (M(t) || (t = v.values(t)), t[v.random(t.length - 1)])  : v.shuffle(t).slice(0, Math.max(0, e))
},
v.sortBy = function (t, e, r) {
  return e = x(e, r),
  v.pluck(v.map(t, function (t, r, n) {
    return {
      value: t,
      index: r,
      criteria: e(t, r, n)
    }
  }).sort(function (t, e) {
    var r = t.criteria,
    n = e.criteria;
    if (r !== n) {
      if (r > n || void 0 === r) return 1;
      if (r < n || void 0 === n) return - 1
    }
    return t.index - e.index
  }), 'value')
};
var R = function (t) {
  return function (e, r, n) {
    var i = {
    };
    return r = x(r, n),
    v.each(e, function (n, o) {
      var s = r(n, o, e);
      t(i, n, s)
    }),
    i
  }
};
v.groupBy = R(function (t, e, r) {
  v.has(t, r) ? t[r].push(e)  : t[r] = [
    e
  ]
}),
v.indexBy = R(function (t, e, r) {
  t[r] = e
}),
v.countBy = R(function (t, e, r) {
  v.has(t, r) ? t[r]++ : t[r] = 1
}),
v.toArray = function (t) {
  return t ? v.isArray(t) ? h.call(t)  : M(t) ? v.map(t, v.identity)  : v.values(t)  : [
  ]
},
v.size = function (t) {
  return null == t ? 0 : M(t) ? t.length : v.keys(t).length
},
v.partition = function (t, e, r) {
  e = x(e, r);
  var n = [
  ],
  i = [
  ];
  return v.each(t, function (t, r, o) {
    (e(t, r, o) ? n : i).push(t)
  }),
  [
    n,
    i
  ]
},
v.first = v.head = v.take = function (t, e, r) {
  if (null != t) return null == e || r ? t[0] : v.initial(t, t.length - e)
},
v.initial = function (t, e, r) {
  return h.call(t, 0, Math.max(0, t.length - (null == e || r ? 1 : e)))
},
v.last = function (t, e, r) {
  if (null != t) return null == e || r ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e))
},
v.rest = v.tail = v.drop = function (t, e, r) {
  return h.call(t, null == e || r ? 1 : e)
},
v.compact = function (t) {
  return v.filter(t, v.identity)
};
var k = function (t, e, r, n) {
  for (var i = [
  ], o = 0, s = n || 0, a = C(t); s < a; s++) {
    var l = t[s];
    if (M(l) && (v.isArray(l) || v.isArguments(l))) {
      e || (l = k(l, e, r));
      var u = 0,
      h = l.length;
      for (i.length += h; u < h; ) i[o++] = l[u++]
    } else r || (i[o++] = l)
  }
  return i
};
v.flatten = function (t, e) {
  return k(t, e, !1)
},
v.without = function (t) {
  return v.difference(t, h.call(arguments, 1))
},
v.uniq = v.unique = function (t, e, r, n) {
  v.isBoolean(e) || (n = r, r = e, e = !1),
  null != r && (r = x(r, n));
  for (var i = [
  ], o = [
  ], s = 0, a = C(t); s < a; s++) {
    var l = t[s],
    u = r ? r(l, s, t)  : l;
    e ? (s && o === u || i.push(l), o = u)  : r ? v.contains(o, u) || (o.push(u), i.push(l))  : v.contains(i, l) || i.push(l)
  }
  return i
},
v.union = function () {
  return v.uniq(k(arguments, !0, !0))
},
v.intersection = function (t) {
  for (var e = [
  ], r = arguments.length, n = 0, i = C(t); n < i; n++) {
    var o = t[n];
    if (!v.contains(e, o)) {
      for (var s = 1; s < r && v.contains(arguments[s], o); s++);
      s === r && e.push(o)
    }
  }
  return e
},
v.difference = function (t) {
  var e = k(arguments, !0, !0, 1);
  return v.filter(t, function (t) {
    return !v.contains(e, t)
  })
},
v.zip = function () {
  return v.unzip(arguments)
},
v.unzip = function (t) {
  for (var e = t && v.max(t, C).length || 0, r = Array(e), n = 0; n < e; n++) r[n] = v.pluck(t, n);
  return r
},
v.object = function (t, e) {
  for (var r = {
  }, n = 0, i = C(t); n < i; n++) e ? r[t[n]] = e[n] : r[t[n][0]] = t[n][1];
  return r
},
v.findIndex = e(1),
v.findLastIndex = e( - 1),
v.sortedIndex = function (t, e, r, n) {
  r = x(r, n, 1);
  for (var i = r(e), o = 0, s = C(t); o < s; ) {
    var a = Math.floor((o + s) / 2);
    r(t[a]) < i ? o = a + 1 : s = a
  }
  return o
},
v.indexOf = r(1, v.findIndex, v.sortedIndex),
v.lastIndexOf = r( - 1, v.findLastIndex),
v.range = function (t, e, r) {
  null == e && (e = t || 0, t = 0),
  r = r || 1;
  for (var n = Math.max(Math.ceil((e - t) / r), 0), i = Array(n), o = 0; o < n; o++, t += r) i[o] = t;
  return i
};
var P = function (t, e, r, n, i) {
  if (!(n instanceof e)) return t.apply(r, i);
  var o = w(t.prototype),
  s = t.apply(o, i);
  return v.isObject(s) ? s : o
};
v.bind = function (t, e) {
  if (m && t.bind === m) return m.apply(t, h.call(arguments, 1));
  if (!v.isFunction(t)) throw new TypeError('Bind must be called on a function');
  var r = h.call(arguments, 2),
  n = function () {
    return P(t, n, e, this, r.concat(h.call(arguments)))
  };
  return n
},
v.partial = function (t) {
  var e = h.call(arguments, 1),
  r = function () {
    for (var n = 0, i = e.length, o = Array(i), s = 0; s < i; s++) o[s] = e[s] === v ? arguments[n++] : e[s];
    for (; n < arguments.length; ) o.push(arguments[n++]);
    return P(t, r, this, this, o)
  };
  return r
},
v.bindAll = function (t) {
  var e,
  r,
  n = arguments.length;
  if (n <= 1) throw new Error('bindAll must be passed function names');
  for (e = 1; e < n; e++) r = arguments[e],
  t[r] = v.bind(t[r], t);
  return t
},
v.memoize = function (t, e) {
  var r = function (n) {
    var i = r.cache,
    o = '' + (e ? e.apply(this, arguments)  : n);
    return v.has(i, o) || (i[o] = t.apply(this, arguments)),
    i[o]
  };
  return r.cache = {
  },
  r
},
v.delay = function (t, e) {
  var r = h.call(arguments, 2);
  return setTimeout(function () {
    return t.apply(null, r)
  }, e)
},
v.defer = v.partial(v.delay, v, 1),
v.throttle = function (t, e, r) {
  var n,
  i,
  o,
  s = null,
  a = 0;
  r || (r = {
  });
  var l = function () {
    a = r.leading === !1 ? 0 : v.now(),
    s = null,
    o = t.apply(n, i),
    s || (n = i = null)
  };
  return function () {
    var u = v.now();
    a || r.leading !== !1 || (a = u);
    var h = e - (u - a);
    return n = this,
    i = arguments,
    h <= 0 || h > e ? (s && (clearTimeout(s), s = null), a = u, o = t.apply(n, i), s || (n = i = null))  : s || r.trailing === !1 || (s = setTimeout(l, h)),
    o
  }
},
v.debounce = function (t, e, r) {
  var n,
  i,
  o,
  s,
  a,
  l = function () {
    var u = v.now() - s;
    u < e && u >= 0 ? n = setTimeout(l, e - u)  : (n = null, r || (a = t.apply(o, i), n || (o = i = null)))
  };
  return function () {
    o = this,
    i = arguments,
    s = v.now();
    var u = r && !n;
    return n || (n = setTimeout(l, e)),
    u && (a = t.apply(o, i), o = i = null),
    a
  }
},
v.wrap = function (t, e) {
  return v.partial(e, t)
},
v.negate = function (t) {
  return function () {
    return !t.apply(this, arguments)
  }
},
v.compose = function () {
  var t = arguments,
  e = t.length - 1;
  return function () {
    for (var r = e, n = t[e].apply(this, arguments); r--; ) n = t[r].call(this, n);
    return n
  }
},
v.after = function (t, e) {
  return function () {
    if (--t < 1) return e.apply(this, arguments)
  }
},
v.before = function (t, e) {
  var r;
  return function () {
    return --t > 0 && (r = e.apply(this, arguments)),
    t <= 1 && (e = null),
    r
  }
},
v.once = v.partial(v.before, 2);
var D = !{
  toString: null
}.propertyIsEnumerable('toString'),
A = [
  'valueOf',
  'isPrototypeOf',
  'toString',
  'propertyIsEnumerable',
  'hasOwnProperty',
  'toLocaleString'
];
v.keys = function (t) {
  if (!v.isObject(t)) return [];
  if (d) return d(t);
  var e = [
  ];
  for (var r in t) v.has(t, r) && e.push(r);
  return D && n(t, e),
  e
},
v.allKeys = function (t) {
  if (!v.isObject(t)) return [];
  var e = [
  ];
  for (var r in t) e.push(r);
  return D && n(t, e),
  e
},
v.values = function (t) {
  for (var e = v.keys(t), r = e.length, n = Array(r), i = 0; i < r; i++) n[i] = t[e[i]];
  return n
},
v.mapObject = function (t, e, r) {
  e = x(e, r);
  for (var n, i = v.keys(t), o = i.length, s = {
  }, a = 0; a < o; a++) n = i[a],
  s[n] = e(t[n], n, t);
  return s
},
v.pairs = function (t) {
  for (var e = v.keys(t), r = e.length, n = Array(r), i = 0; i < r; i++) n[i] = [
    e[i],
    t[e[i]]
  ];
  return n
},
v.invert = function (t) {
  for (var e = {
  }, r = v.keys(t), n = 0, i = r.length; n < i; n++) e[t[r[n]]] = r[n];
  return e
},
v.functions = v.methods = function (t) {
  var e = [
  ];
  for (var r in t) v.isFunction(t[r]) && e.push(r);
  return e.sort()
},
v.extend = b(v.allKeys),
v.extendOwn = v.assign = b(v.keys),
v.findKey = function (t, e, r) {
  e = x(e, r);
  for (var n, i = v.keys(t), o = 0, s = i.length; o < s; o++) if (n = i[o], e(t[n], n, t)) return n
},
v.pick = function (t, e, r) {
  var n,
  i,
  o = {
  },
  s = t;
  if (null == s) return o;
  v.isFunction(e) ? (i = v.allKeys(s), n = _(e, r))  : (i = k(arguments, !1, !1, 1), n = function (t, e, r) {
    return e in r
  }, s = Object(s));
  for (var a = 0, l = i.length; a < l; a++) {
    var u = i[a],
    h = s[u];
    n(h, u, s) && (o[u] = h)
  }
  return o
},
v.omit = function (t, e, r) {
  if (v.isFunction(e)) e = v.negate(e);
   else {
    var n = v.map(k(arguments, !1, !1, 1), String);
    e = function (t, e) {
      return !v.contains(n, e)
    }
  }
  return v.pick(t, e, r)
},
v.defaults = b(v.allKeys, !0),
v.create = function (t, e) {
  var r = w(t);
  return e && v.extendOwn(r, e),
  r
},
v.clone = function (t) {
  return v.isObject(t) ? v.isArray(t) ? t.slice()  : v.extend({
  }, t)  : t
},
v.tap = function (t, e) {
  return e(t),
  t
},
v.isMatch = function (t, e) {
  var r = v.keys(e),
  n = r.length;
  if (null == t) return !n;
  for (var i = Object(t), o = 0; o < n; o++) {
    var s = r[o];
    if (e[s] !== i[s] || !(s in i)) return !1
  }
  return !0
};
var E = function (t, e, r, n) {
  if (t === e) return 0 !== t || 1 / t === 1 / e;
  if (null == t || null == e) return t === e;
  t instanceof v && (t = t._wrapped),
  e instanceof v && (e = e._wrapped);
  var i = c.call(t);
  if (i !== c.call(e)) return !1;
  switch (i) {
    case '[object RegExp]':
    case '[object String]':
      return '' + t == '' + e;
    case '[object Number]':
      return + t !== + t ? + e !== + e : 0 === + t ? 1 / + t === 1 / e : + t === + e;
    case '[object Date]':
    case '[object Boolean]':
      return + t === + e
  }
  var o = '[object Array]' === i;
  if (!o) {
    if ('object' != typeof t || 'object' != typeof e) return !1;
    var s = t.constructor,
    a = e.constructor;
    if (s !== a && !(v.isFunction(s) && s instanceof s && v.isFunction(a) && a instanceof a) && 'constructor' in t && 'constructor' in e) return !1
}
r = r || [
],
n = n || [
];
for (var l = r.length; l--; ) if (r[l] === t) return n[l] === e;
if (r.push(t), n.push(e), o) {
  if (l = t.length, l !== e.length) return !1;
  for (; l--; ) if (!E(t[l], e[l], r, n)) return !1
} else {
var u,
h = v.keys(t);
if (l = h.length, v.keys(e).length !== l) return !1;
for (; l--; ) if (u = h[l], !v.has(e, u) || !E(t[u], e[u], r, n)) return !1
}
return r.pop(),
n.pop(),
!0
};
v.isEqual = function (t, e) {
return E(t, e)
},
v.isEmpty = function (t) {
return null == t || (M(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length : 0 === v.keys(t).length)
},
v.isElement = function (t) {
return !(!t || 1 !== t.nodeType)
},
v.isArray = f || function (t) {
return '[object Array]' === c.call(t)
},
v.isObject = function (t) {
var e = typeof t;
return 'function' === e || 'object' === e && !!t
},
v.each(['Arguments',
'Function',
'String',
'Number',
'Date',
'RegExp',
'Error'], function (t) {
v['is' + t] = function (e) {
return c.call(e) === '[object ' + t + ']'
}
}),
v.isArguments(arguments) || (v.isArguments = function (t) {
return v.has(t, 'callee')
}),
'function' != typeof /./ && 'object' != typeof Int8Array && (v.isFunction = function (t) {
return 'function' == typeof t || !1
}),
v.isFinite = function (t) {
return isFinite(t) && !isNaN(parseFloat(t))
},
v.isNaN = function (t) {
return v.isNumber(t) && t !== + t
},
v.isBoolean = function (t) {
return t === !0 || t === !1 || '[object Boolean]' === c.call(t)
},
v.isNull = function (t) {
return null === t
},
v.isUndefined = function (t) {
return void 0 === t
},
v.has = function (t, e) {
return null != t && p.call(t, e)
},
v.noConflict = function () {
return i._ = o,
this
},
v.identity = function (t) {
return t
},
v.constant = function (t) {
return function () {
return t
}
},
v.noop = function () {
},
v.property = T,
v.propertyOf = function (t) {
return null == t ? function () {
}
 : function (e) {
return t[e]
}
},
v.matcher = v.matches = function (t) {
return t = v.extendOwn({
}, t),
function (e) {
return v.isMatch(e, t)
}
},
v.times = function (t, e, r) {
var n = Array(Math.max(0, t));
e = _(e, r, 1);
for (var i = 0; i < t; i++) n[i] = e(i);
return n
},
v.random = function (t, e) {
return null == e && (e = t, t = 0),
t + Math.floor(Math.random() * (e - t + 1))
},
v.now = Date.now || function () {
return (new Date).getTime()
};
var O = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;',
'\'': '&#x27;',
'`': '&#x60;'
},
N = v.invert(O),
I = function (t) {
var e = function (e) {
return t[e]
},
r = '(?:' + v.keys(t).join('|') + ')',
n = RegExp(r),
i = RegExp(r, 'g');
return function (t) {
return t = null == t ? '' : '' + t,
n.test(t) ? t.replace(i, e)  : t
}
};
v.escape = I(O),
v.unescape = I(N),
v.result = function (t, e, r) {
var n = null == t ? void 0 : t[e];
return void 0 === n && (n = r),
v.isFunction(n) ? n.call(t)  : n
};
var L = 0;
v.uniqueId = function (t) {
var e = ++L + '';
return t ? t + e : e
},
v.templateSettings = {
evaluate: /<%([\s\S]+?)%>/g,
interpolate: /<%=([\s\S]+?)%>/g,
escape: /<%-([\s\S]+?)%>/g
};
var F = /(.)^/,
U = {
'\'': '\'',
'\\': '\\',
'\r': 'r',
'\n': 'n',
' ': 'u2028',
' ': 'u2029'
},
B = /\\|'|\r|\n|\u2028|\u2029/g,
H = function (t) {
return '\\' + U[t]
};
v.template = function (t, e, r) {
!e && r && (e = r),
e = v.defaults({
}, e, v.templateSettings);
var n = RegExp([(e.escape || F).source,
(e.interpolate || F).source,
(e.evaluate || F).source].join('|') + '|$', 'g'),
i = 0,
o = '__p+=\'';
t.replace(n, function (e, r, n, s, a) {
return o += t.slice(i, a).replace(B, H),
i = a + e.length,
r ? o += '\'+\n((__t=(' + r + '))==null?\'\':_.escape(__t))+\n\'' : n ? o += '\'+\n((__t=(' + n + '))==null?\'\':__t)+\n\'' : s && (o += '\';\n' + s + '\n__p+=\''),
e
}),
o += '\';\n',
e.variable || (o = 'with(obj||{}){\n' + o + '}\n'),
o = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' + o + 'return __p;\n';
try {
var s = new Function(e.variable || 'obj', '_', o)
} catch (t) {
throw t.source = o,
t
}
var a = function (t) {
return s.call(this, t, v)
},
l = e.variable || 'obj';
return a.source = 'function(' + l + '){\n' + o + '}',
a
},
v.chain = function (t) {
var e = v(t);
return e._chain = !0,
e
};
var j = function (t, e) {
return t._chain ? v(e).chain()  : e
};
v.mixin = function (t) {
v.each(v.functions(t), function (e) {
var r = v[e] = t[e];
v.prototype[e] = function () {
var t = [
  this._wrapped
];
return u.apply(t, arguments),
j(this, r.apply(v, t))
}
})
},
v.mixin(v),
v.each(['pop',
'push',
'reverse',
'shift',
'sort',
'splice',
'unshift'], function (t) {
var e = s[t];
v.prototype[t] = function () {
var r = this._wrapped;
return e.apply(r, arguments),
'shift' !== t && 'splice' !== t || 0 !== r.length || delete r[0],
j(this, r)
}
}),
v.each(['concat',
'join',
'slice'], function (t) {
var e = s[t];
v.prototype[t] = function () {
return j(this, e.apply(this._wrapped, arguments))
}
}),
v.prototype.value = function () {
return this._wrapped
},
v.prototype.valueOf = v.prototype.toJSON = v.prototype.value,
v.prototype.toString = function () {
return '' + this._wrapped
},
'function' == typeof define && define.amd && define('underscore', [
], function () {
return v
})
}.call(this),
function (t, e) {
'object' == typeof exports && 'undefined' != typeof module ? module.exports = e()  : 'function' == typeof define && define.amd ? define(e)  : t.moment = e()
}(this, function () {
'use strict';
function t() {
return fn.apply(null, arguments)
}
function e(t) {
fn = t
}
function r(t) {
return t instanceof Array || '[object Array]' === Object.prototype.toString.call(t)
}
function n(t) {
return null != t && '[object Object]' === Object.prototype.toString.call(t)
}
function i(t) {
var e;
for (e in t) return !1;
return !0
}
function o(t) {
return t instanceof Date || '[object Date]' === Object.prototype.toString.call(t)
}
function s(t, e) {
var r,
n = [
];
for (r = 0; r < t.length; ++r) n.push(e(t[r], r));
return n
}
function a(t, e) {
return Object.prototype.hasOwnProperty.call(t, e)
}
function l(t, e) {
for (var r in e) a(e, r) && (t[r] = e[r]);
return a(e, 'toString') && (t.toString = e.toString),
a(e, 'valueOf') && (t.valueOf = e.valueOf),
t
}
function u(t, e, r, n) {
return ge(t, e, r, n, !0).utc()
}
function h() {
return {
empty: !1,
unusedTokens: [
],
unusedInput: [
],
overflow: - 2,
charsLeftOver: 0,
nullInput: !1,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1,
parsedDateParts: [
],
meridiem: null
}
}
function c(t) {
return null == t._pf && (t._pf = h()),
t._pf
}
function p(t) {
if (null == t._isValid) {
var e = c(t),
r = dn.call(e.parsedDateParts, function (t) {
return null != t
}),
n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && r);
if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
t._isValid = n
}
return t._isValid
}
function f(t) {
var e = u(NaN);
return null != t ? l(c(e), t)  : c(e).userInvalidated = !0,
e
}
function d(t) {
return void 0 === t
}
function m(t, e) {
var r,
n,
i;
if (d(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), d(e._i) || (t._i = e._i), d(e._f) || (t._f = e._f), d(e._l) || (t._l = e._l), d(e._strict) || (t._strict = e._strict), d(e._tzm) || (t._tzm = e._tzm), d(e._isUTC) || (t._isUTC = e._isUTC), d(e._offset) || (t._offset = e._offset), d(e._pf) || (t._pf = c(e)), d(e._locale) || (t._locale = e._locale), mn.length > 0) for (r in mn) n = mn[r],
i = e[n],
d(i) || (t[n] = i);
return t
}
function g(e) {
m(this, e),
this._d = new Date(null != e._d ? e._d.getTime()  : NaN),
gn === !1 && (gn = !0, t.updateOffset(this), gn = !1)
}
function y(t) {
return t instanceof g || null != t && null != t._isAMomentObject
}
function v(t) {
return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
}
function _(t) {
var e = + t,
r = 0;
return 0 !== e && isFinite(e) && (r = v(e)),
r
}
function x(t, e, r) {
var n,
i = Math.min(t.length, e.length),
o = Math.abs(t.length - e.length),
s = 0;
for (n = 0; n < i; n++) (r && t[n] !== e[n] || !r && _(t[n]) !== _(e[n])) && s++;
return s + o
}
function b(e) {
t.suppressDeprecationWarnings === !1 && 'undefined' != typeof console && console.warn && console.warn('Deprecation warning: ' + e)
}
function w(e, r) {
var n = !0;
return l(function () {
if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
for (var i, o = [
], s = 0; s < arguments.length; s++) {
  if (i = '', 'object' == typeof arguments[s]) {
    i += '\n[' + s + '] ';
    for (var a in arguments[0]) i += a + ': ' + arguments[0][a] + ', ';
    i = i.slice(0, - 2)
  } else i = arguments[s];
  o.push(i)
}
b(e + '\nArguments: ' + Array.prototype.slice.call(o).join('') + '\n' + (new Error).stack),
n = !1
}
return r.apply(this, arguments)
}, r)
}
function T(e, r) {
null != t.deprecationHandler && t.deprecationHandler(e, r),
yn[e] || (b(r), yn[e] = !0)
}
function S(t) {
return t instanceof Function || '[object Function]' === Object.prototype.toString.call(t)
}
function C(t) {
var e,
r;
for (r in t) e = t[r],
S(e) ? this[r] = e : this['_' + r] = e;
this._config = t,
this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source)
}
function M(t, e) {
var r,
i = l({
}, t);
for (r in e) a(e, r) && (n(t[r]) && n(e[r]) ? (i[r] = {
}, l(i[r], t[r]), l(i[r], e[r]))  : null != e[r] ? i[r] = e[r] : delete i[r]);
for (r in t) a(t, r) && !a(e, r) && n(t[r]) && (i[r] = l({
}, i[r]));
return i
}
function R(t) {
null != t && this.set(t)
}
function k(t, e, r) {
var n = this._calendar[t] || this._calendar.sameElse;
return S(n) ? n.call(e, r)  : n
}
function P(t) {
var e = this._longDateFormat[t],
r = this._longDateFormat[t.toUpperCase()];
return e || !r ? e : (this._longDateFormat[t] = r.replace(/MMMM|MM|DD|dddd/g, function (t) {
return t.slice(1)
}), this._longDateFormat[t])
}
function D() {
return this._invalidDate
}
function A(t) {
return this._ordinal.replace('%d', t)
}
function E(t, e, r, n) {
var i = this._relativeTime[r];
return S(i) ? i(t, e, r, n)  : i.replace(/%d/i, t)
}
function O(t, e) {
var r = this._relativeTime[t > 0 ? 'future' : 'past'];
return S(r) ? r(e)  : r.replace(/%s/i, e)
}
function N(t, e) {
var r = t.toLowerCase();
Mn[r] = Mn[r + 's'] = Mn[e] = t
}
function I(t) {
return 'string' == typeof t ? Mn[t] || Mn[t.toLowerCase()] : void 0
}
function L(t) {
var e,
r,
n = {
};
for (r in t) a(t, r) && (e = I(r), e && (n[e] = t[r]));
return n
}
function F(t, e) {
Rn[t] = e
}
function U(t) {
var e = [
];
for (var r in t) e.push({
unit: r,
priority: Rn[r]
});
return e.sort(function (t, e) {
return t.priority - e.priority
}),
e
}
function B(e, r) {
return function (n) {
return null != n ? (j(this, e, n), t.updateOffset(this, r), this)  : H(this, e)
}
}
function H(t, e) {
return t.isValid() ? t._d['get' + (t._isUTC ? 'UTC' : '') + e]()  : NaN
}
function j(t, e, r) {
t.isValid() && t._d['set' + (t._isUTC ? 'UTC' : '') + e](r)
}
function Y(t) {
return t = I(t),
S(this[t]) ? this[t]()  : this
}
function G(t, e) {
if ('object' == typeof t) {
t = L(t);
for (var r = U(t), n = 0; n < r.length; n++) this[r[n].unit](t[r[n].unit])
} else if (t = I(t), S(this[t])) return this[t](e);
return this
}
function q(t, e, r) {
var n = '' + Math.abs(t),
i = e - n.length,
o = t >= 0;
return (o ? r ? '+' : '' : '-') + Math.pow(10, Math.max(0, i)).toString().substr(1) + n
}
function W(t, e, r, n) {
var i = n;
'string' == typeof n && (i = function () {
return this[n]()
}),
t && (An[t] = i),
e && (An[e[0]] = function () {
return q(i.apply(this, arguments), e[1], e[2])
}),
r && (An[r] = function () {
return this.localeData().ordinal(i.apply(this, arguments), t)
})
}
function z(t) {
return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, '')  : t.replace(/\\/g, '')
}
function V(t) {
var e,
r,
n = t.match(kn);
for (e = 0, r = n.length; e < r; e++) An[n[e]] ? n[e] = An[n[e]] : n[e] = z(n[e]);
return function (e) {
var i,
o = '';
for (i = 0; i < r; i++) o += n[i] instanceof Function ? n[i].call(e, t)  : n[i];
return o
}
}
function X(t, e) {
return t.isValid() ? (e = $(e, t.localeData()), Dn[e] = Dn[e] || V(e), Dn[e](t))  : t.localeData().invalidDate()
}
function $(t, e) {
function r(t) {
return e.longDateFormat(t) || t
}
var n = 5;
for (Pn.lastIndex = 0; n >= 0 && Pn.test(t); ) t = t.replace(Pn, r),
Pn.lastIndex = 0,
n -= 1;
return t
}
function Z(t, e, r) {
$n[t] = S(e) ? e : function (t, n) {
return t && r ? r : e
}
}
function J(t, e) {
return a($n, t) ? $n[t](e._strict, e._locale)  : new RegExp(Q(t))
}
function Q(t) {
return K(t.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, r, n, i) {
return e || r || n || i
}))
}
function K(t) {
return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}
function tt(t, e) {
var r,
n = e;
for ('string' == typeof t && (t = [
t
]), 'number' == typeof e && (n = function (t, r) {
r[e] = _(t)
}), r = 0; r < t.length; r++) Zn[t[r]] = n
}
function et(t, e) {
tt(t, function (t, r, n, i) {
n._w = n._w || {
},
e(t, n._w, n, i)
})
}
function rt(t, e, r) {
null != e && a(Zn, t) && Zn[t](e, r._a, r, t)
}
function nt(t, e) {
return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
}
function it(t, e) {
return t ? r(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || si).test(e) ? 'format' : 'standalone'][t.month()] : this._months
}
function ot(t, e) {
return t ? r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[si.test(e) ? 'format' : 'standalone'][t.month()] : this._monthsShort
}
function st(t, e, r) {
var n,
i,
o,
s = t.toLocaleLowerCase();
if (!this._monthsParse) for (this._monthsParse = [
], this._longMonthsParse = [
], this._shortMonthsParse = [
], n = 0; n < 12; ++n) o = u([2000,
n]),
this._shortMonthsParse[n] = this.monthsShort(o, '').toLocaleLowerCase(),
this._longMonthsParse[n] = this.months(o, '').toLocaleLowerCase();
return r ? 'MMM' === e ? (i = _n.call(this._shortMonthsParse, s), i !== - 1 ? i : null)  : (i = _n.call(this._longMonthsParse, s), i !== - 1 ? i : null)  : 'MMM' === e ? (i = _n.call(this._shortMonthsParse, s), i !== - 1 ? i : (i = _n.call(this._longMonthsParse, s), i !== - 1 ? i : null))  : (i = _n.call(this._longMonthsParse, s), i !== - 1 ? i : (i = _n.call(this._shortMonthsParse, s), i !== - 1 ? i : null))
}
function at(t, e, r) {
var n,
i,
o;
if (this._monthsParseExact) return st.call(this, t, e, r);
for (this._monthsParse || (this._monthsParse = [
], this._longMonthsParse = [
], this._shortMonthsParse = [
]), n = 0; n < 12; n++) {
if (i = u([2000,
n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp('^' + this.months(i, '').replace('.', '') + '$', 'i'), this._shortMonthsParse[n] = new RegExp('^' + this.monthsShort(i, '').replace('.', '') + '$', 'i')), r || this._monthsParse[n] || (o = '^' + this.months(i, '') + '|^' + this.monthsShort(i, ''), this._monthsParse[n] = new RegExp(o.replace('.', ''), 'i')), r && 'MMMM' === e && this._longMonthsParse[n].test(t)) return n;
if (r && 'MMM' === e && this._shortMonthsParse[n].test(t)) return n;
if (!r && this._monthsParse[n].test(t)) return n
}
}
function lt(t, e) {
var r;
if (!t.isValid()) return t;
if ('string' == typeof e) if (/^\d+$/.test(e)) e = _(e);
 else if (e = t.localeData().monthsParse(e), 'number' != typeof e) return t;
return r = Math.min(t.date(), nt(t.year(), e)),
t._d['set' + (t._isUTC ? 'UTC' : '') + 'Month'](e, r),
t
}
function ut(e) {
return null != e ? (lt(this, e), t.updateOffset(this, !0), this)  : H(this, 'Month')
}
function ht() {
return nt(this.year(), this.month())
}
function ct(t) {
return this._monthsParseExact ? (a(this, '_monthsRegex') || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex)  : (a(this, '_monthsShortRegex') || (this._monthsShortRegex = ui), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
}
function pt(t) {
return this._monthsParseExact ? (a(this, '_monthsRegex') || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex)  : (a(this, '_monthsRegex') || (this._monthsRegex = hi), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
}
function ft() {
function t(t, e) {
return e.length - t.length
}
var e,
r,
n = [
],
i = [
],
o = [
];
for (e = 0; e < 12; e++) r = u([2000,
e]),
n.push(this.monthsShort(r, '')),
i.push(this.months(r, '')),
o.push(this.months(r, '')),
o.push(this.monthsShort(r, ''));
for (n.sort(t), i.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = K(n[e]),
i[e] = K(i[e]);
for (e = 0; e < 24; e++) o[e] = K(o[e]);
this._monthsRegex = new RegExp('^(' + o.join('|') + ')', 'i'),
this._monthsShortRegex = this._monthsRegex,
this._monthsStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i'),
this._monthsShortStrictRegex = new RegExp('^(' + n.join('|') + ')', 'i')
}
function dt(t) {
return mt(t) ? 366 : 365
}
function mt(t) {
return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
}
function gt() {
return mt(this.year())
}
function yt(t, e, r, n, i, o, s) {
var a = new Date(t, e, r, n, i, o, s);
return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t),
a
}
function vt(t) {
var e = new Date(Date.UTC.apply(null, arguments));
return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t),
e
}
function _t(t, e, r) {
var n = 7 + e - r,
i = (7 + vt(t, 0, n).getUTCDay() - e) % 7;
return - i + n - 1
}
function xt(t, e, r, n, i) {
var o,
s,
a = (7 + r - n) % 7,
l = _t(t, n, i),
u = 1 + 7 * (e - 1) + a + l;
return u <= 0 ? (o = t - 1, s = dt(o) + u)  : u > dt(t) ? (o = t + 1, s = u - dt(t))  : (o = t, s = u),
{
year: o,
dayOfYear: s
}
}
function bt(t, e, r) {
var n,
i,
o = _t(t.year(), e, r),
s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
return s < 1 ? (i = t.year() - 1, n = s + wt(i, e, r))  : s > wt(t.year(), e, r) ? (n = s - wt(t.year(), e, r), i = t.year() + 1)  : (i = t.year(), n = s),
{
week: n,
year: i
}
}
function wt(t, e, r) {
var n = _t(t, e, r),
i = _t(t + 1, e, r);
return (dt(t) - n + i) / 7
}
function Tt(t) {
return bt(t, this._week.dow, this._week.doy).week
}
function St() {
return this._week.dow
}
function Ct() {
return this._week.doy
}
function Mt(t) {
var e = this.localeData().week(this);
return null == t ? e : this.add(7 * (t - e), 'd')
}
function Rt(t) {
var e = bt(this, 1, 4).week;
return null == t ? e : this.add(7 * (t - e), 'd')
}
function kt(t, e) {
return 'string' != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), 'number' == typeof t ? t : null)  : parseInt(t, 10)
}
function Pt(t, e) {
return 'string' == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
}
function Dt(t, e) {
return t ? r(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? 'format' : 'standalone'][t.day()] : this._weekdays
}
function At(t) {
return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
}
function Et(t) {
return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
}
function Ot(t, e, r) {
var n,
i,
o,
s = t.toLocaleLowerCase();
if (!this._weekdaysParse) for (this._weekdaysParse = [
], this._shortWeekdaysParse = [
], this._minWeekdaysParse = [
], n = 0; n < 7; ++n) o = u([2000,
1]).day(n),
this._minWeekdaysParse[n] = this.weekdaysMin(o, '').toLocaleLowerCase(),
this._shortWeekdaysParse[n] = this.weekdaysShort(o, '').toLocaleLowerCase(),
this._weekdaysParse[n] = this.weekdays(o, '').toLocaleLowerCase();
return r ? 'dddd' === e ? (i = _n.call(this._weekdaysParse, s), i !== - 1 ? i : null)  : 'ddd' === e ? (i = _n.call(this._shortWeekdaysParse, s), i !== - 1 ? i : null)  : (i = _n.call(this._minWeekdaysParse, s), i !== - 1 ? i : null)  : 'dddd' === e ? (i = _n.call(this._weekdaysParse, s), i !== - 1 ? i : (i = _n.call(this._shortWeekdaysParse, s), i !== - 1 ? i : (i = _n.call(this._minWeekdaysParse, s), i !== - 1 ? i : null)))  : 'ddd' === e ? (i = _n.call(this._shortWeekdaysParse, s), i !== - 1 ? i : (i = _n.call(this._weekdaysParse, s), i !== - 1 ? i : (i = _n.call(this._minWeekdaysParse, s), i !== - 1 ? i : null)))  : (i = _n.call(this._minWeekdaysParse, s), i !== - 1 ? i : (i = _n.call(this._weekdaysParse, s), i !== - 1 ? i : (i = _n.call(this._shortWeekdaysParse, s), i !== - 1 ? i : null)))
}
function Nt(t, e, r) {
var n,
i,
o;
if (this._weekdaysParseExact) return Ot.call(this, t, e, r);
for (this._weekdaysParse || (this._weekdaysParse = [
], this._minWeekdaysParse = [
], this._shortWeekdaysParse = [
], this._fullWeekdaysParse = [
]), n = 0; n < 7; n++) {
if (i = u([2000,
1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp('^' + this.weekdays(i, '').replace('.', '.?') + '$', 'i'), this._shortWeekdaysParse[n] = new RegExp('^' + this.weekdaysShort(i, '').replace('.', '.?') + '$', 'i'), this._minWeekdaysParse[n] = new RegExp('^' + this.weekdaysMin(i, '').replace('.', '.?') + '$', 'i')), this._weekdaysParse[n] || (o = '^' + this.weekdays(i, '') + '|^' + this.weekdaysShort(i, '') + '|^' + this.weekdaysMin(i, ''), this._weekdaysParse[n] = new RegExp(o.replace('.', ''), 'i')), r && 'dddd' === e && this._fullWeekdaysParse[n].test(t)) return n;
if (r && 'ddd' === e && this._shortWeekdaysParse[n].test(t)) return n;
if (r && 'dd' === e && this._minWeekdaysParse[n].test(t)) return n;
if (!r && this._weekdaysParse[n].test(t)) return n
}
}
function It(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = this._isUTC ? this._d.getUTCDay()  : this._d.getDay();
return null != t ? (t = kt(t, this.localeData()), this.add(t - e, 'd'))  : e
}
function Lt(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == t ? e : this.add(t - e, 'd')
}
function Ft(t) {
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
var e = Pt(t, this.localeData());
return this.day(this.day() % 7 ? e : e - 7)
}
return this.day() || 7
}
function Ut(t) {
return this._weekdaysParseExact ? (a(this, '_weekdaysRegex') || jt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex)  : (a(this, '_weekdaysRegex') || (this._weekdaysRegex = gi), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
}
function Bt(t) {
return this._weekdaysParseExact ? (a(this, '_weekdaysRegex') || jt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)  : (a(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = yi), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
}
function Ht(t) {
return this._weekdaysParseExact ? (a(this, '_weekdaysRegex') || jt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)  : (a(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = vi), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}
function jt() {
function t(t, e) {
return e.length - t.length
}
var e,
r,
n,
i,
o,
s = [
],
a = [
],
l = [
],
h = [
];
for (e = 0; e < 7; e++) r = u([2000,
1]).day(e),
n = this.weekdaysMin(r, ''),
i = this.weekdaysShort(r, ''),
o = this.weekdays(r, ''),
s.push(n),
a.push(i),
l.push(o),
h.push(n),
h.push(i),
h.push(o);
for (s.sort(t), a.sort(t), l.sort(t), h.sort(t), e = 0; e < 7; e++) a[e] = K(a[e]),
l[e] = K(l[e]),
h[e] = K(h[e]);
this._weekdaysRegex = new RegExp('^(' + h.join('|') + ')', 'i'),
this._weekdaysShortRegex = this._weekdaysRegex,
this._weekdaysMinRegex = this._weekdaysRegex,
this._weekdaysStrictRegex = new RegExp('^(' + l.join('|') + ')', 'i'),
this._weekdaysShortStrictRegex = new RegExp('^(' + a.join('|') + ')', 'i'),
this._weekdaysMinStrictRegex = new RegExp('^(' + s.join('|') + ')', 'i')
}
function Yt() {
return this.hours() % 12 || 12
}
function Gt() {
return this.hours() || 24
}
function qt(t, e) {
W(t, 0, 0, function () {
return this.localeData().meridiem(this.hours(), this.minutes(), e)
})
}
function Wt(t, e) {
return e._meridiemParse
}
function zt(t) {
return 'p' === (t + '').toLowerCase().charAt(0)
}
function Vt(t, e, r) {
return t > 11 ? r ? 'pm' : 'PM' : r ? 'am' : 'AM'
}
function Xt(t) {
return t ? t.toLowerCase().replace('_', '-')  : t
}
function $t(t) {
for (var e, r, n, i, o = 0; o < t.length; ) {
for (i = Xt(t[o]).split('-'), e = i.length, r = Xt(t[o + 1]), r = r ? r.split('-')  : null; e > 0; ) {
if (n = Zt(i.slice(0, e).join('-'))) return n;
if (r && r.length >= e && x(i, r, !0) >= e - 1) break;
e--
}
o++
}
return null
}
function Zt(t) {
var e = null;
if (!Ti[t] && 'undefined' != typeof module && module && module.exports) try {
e = _i._abbr,
require('./locale/' + t),
Jt(e)
} catch (t) {
}
return Ti[t]
}
function Jt(t, e) {
var r;
return t && (r = d(e) ? te(t)  : Qt(t, e), r && (_i = r)),
_i._abbr
}
function Qt(t, e) {
if (null !== e) {
var r = wi;
return e.abbr = t,
null != Ti[t] ? (T('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'), r = Ti[t]._config)  : null != e.parentLocale && (null != Ti[e.parentLocale] ? r = Ti[e.parentLocale]._config : T('parentLocaleUndefined', 'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/')),
Ti[t] = new R(M(r, e)),
Jt(t),
Ti[t]
}
return delete Ti[t],
null
}
function Kt(t, e) {
if (null != e) {
var r,
n = wi;
null != Ti[t] && (n = Ti[t]._config),
e = M(n, e),
r = new R(e),
r.parentLocale = Ti[t],
Ti[t] = r,
Jt(t)
} else null != Ti[t] && (null != Ti[t].parentLocale ? Ti[t] = Ti[t].parentLocale : null != Ti[t] && delete Ti[t]);
return Ti[t]
}
function te(t) {
var e;
if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return _i;
if (!r(t)) {
if (e = Zt(t)) return e;
t = [
t
]
}
return $t(t)
}
function ee() {
return vn(Ti)
}
function re(t) {
var e,
r = t._a;
return r && c(t).overflow === - 2 && (e = r[Qn] < 0 || r[Qn] > 11 ? Qn : r[Kn] < 1 || r[Kn] > nt(r[Jn], r[Qn]) ? Kn : r[ti] < 0 || r[ti] > 24 || 24 === r[ti] && (0 !== r[ei] || 0 !== r[ri] || 0 !== r[ni]) ? ti : r[ei] < 0 || r[ei] > 59 ? ei : r[ri] < 0 || r[ri] > 59 ? ri : r[ni] < 0 || r[ni] > 999 ? ni : - 1, c(t)._overflowDayOfYear && (e < Jn || e > Kn) && (e = Kn), c(t)._overflowWeeks && e === - 1 && (e = ii), c(t)._overflowWeekday && e === - 1 && (e = oi), c(t).overflow = e),
t
}
function ne(t) {
var e,
r,
n,
i,
o,
s,
a = t._i,
l = Si.exec(a) || Ci.exec(a);
if (l) {
for (c(t).iso = !0, e = 0, r = Ri.length; e < r; e++) if (Ri[e][1].exec(l[1])) {
i = Ri[e][0],
n = Ri[e][2] !== !1;
break
}
if (null == i) return void (t._isValid = !1);
if (l[3]) {
for (e = 0, r = ki.length; e < r; e++) if (ki[e][1].exec(l[3])) {
  o = (l[2] || ' ') + ki[e][0];
  break
}
if (null == o) return void (t._isValid = !1)
}
if (!n && null != o) return void (t._isValid = !1);
if (l[4]) {
if (!Mi.exec(l[4])) return void (t._isValid = !1);
s = 'Z'
}
t._f = i + (o || '') + (s || ''),
ue(t)
} else t._isValid = !1
}
function ie(e) {
var r = Pi.exec(e._i);
return null !== r ? void (e._d = new Date(( + r[1])))  : (ne(e), void (e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
}
function oe(t, e, r) {
return null != t ? t : null != e ? e : r
}
function se(e) {
var r = new Date(t.now());
return e._useUTC ? [
r.getUTCFullYear(),
r.getUTCMonth(),
r.getUTCDate()
] : [
r.getFullYear(),
r.getMonth(),
r.getDate()
]
}
function ae(t) {
var e,
r,
n,
i,
o = [
];
if (!t._d) {
for (n = se(t), t._w && null == t._a[Kn] && null == t._a[Qn] && le(t), t._dayOfYear && (i = oe(t._a[Jn], n[Jn]), t._dayOfYear > dt(i) && (c(t)._overflowDayOfYear = !0), r = vt(i, 0, t._dayOfYear), t._a[Qn] = r.getUTCMonth(), t._a[Kn] = r.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = o[e] = n[e];
for (; e < 7; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
24 === t._a[ti] && 0 === t._a[ei] && 0 === t._a[ri] && 0 === t._a[ni] && (t._nextDay = !0, t._a[ti] = 0),
t._d = (t._useUTC ? vt : yt).apply(null, o),
null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
t._nextDay && (t._a[ti] = 24)
}
}
function le(t) {
var e,
r,
n,
i,
o,
s,
a,
l;
e = t._w,
null != e.GG || null != e.W || null != e.E ? (o = 1, s = 4, r = oe(e.GG, t._a[Jn], bt(ye(), 1, 4).year), n = oe(e.W, 1), i = oe(e.E, 1), (i < 1 || i > 7) && (l = !0))  : (o = t._locale._week.dow, s = t._locale._week.doy, r = oe(e.gg, t._a[Jn], bt(ye(), o, s).year), n = oe(e.w, 1), null != e.d ? (i = e.d, (i < 0 || i > 6) && (l = !0))  : null != e.e ? (i = e.e + o, (e.e < 0 || e.e > 6) && (l = !0))  : i = o),
n < 1 || n > wt(r, o, s) ? c(t)._overflowWeeks = !0 : null != l ? c(t)._overflowWeekday = !0 : (a = xt(r, n, i, o, s), t._a[Jn] = a.year, t._dayOfYear = a.dayOfYear)
}
function ue(e) {
if (e._f === t.ISO_8601) return void ne(e);
e._a = [
],
c(e).empty = !0;
var r,
n,
i,
o,
s,
a = '' + e._i,
l = a.length,
u = 0;
for (i = $(e._f, e._locale).match(kn) || [
], r = 0; r < i.length; r++) o = i[r],
n = (a.match(J(o, e)) || [
]) [0],
n && (s = a.substr(0, a.indexOf(n)), s.length > 0 && c(e).unusedInput.push(s), a = a.slice(a.indexOf(n) + n.length), u += n.length),
An[o] ? (n ? c(e).empty = !1 : c(e).unusedTokens.push(o), rt(o, n, e))  : e._strict && !n && c(e).unusedTokens.push(o);
c(e).charsLeftOver = l - u,
a.length > 0 && c(e).unusedInput.push(a),
e._a[ti] <= 12 && c(e).bigHour === !0 && e._a[ti] > 0 && (c(e).bigHour = void 0),
c(e).parsedDateParts = e._a.slice(0),
c(e).meridiem = e._meridiem,
e._a[ti] = he(e._locale, e._a[ti], e._meridiem),
ae(e),
re(e)
}
function he(t, e, r) {
var n;
return null == r ? e : null != t.meridiemHour ? t.meridiemHour(e, r)  : null != t.isPM ? (n = t.isPM(r), n && e < 12 && (e += 12), n || 12 !== e || (e = 0), e)  : e
}
function ce(t) {
var e,
r,
n,
i,
o;
if (0 === t._f.length) return c(t).invalidFormat = !0,
void (t._d = new Date(NaN));
for (i = 0; i < t._f.length; i++) o = 0,
e = m({
}, t),
null != t._useUTC && (e._useUTC = t._useUTC),
e._f = t._f[i],
ue(e),
p(e) && (o += c(e).charsLeftOver, o += 10 * c(e).unusedTokens.length, c(e).score = o, (null == n || o < n) && (n = o, r = e));
l(t, r || e)
}
function pe(t) {
if (!t._d) {
var e = L(t._i);
t._a = s([e.year,
e.month,
e.day || e.date,
e.hour,
e.minute,
e.second,
e.millisecond], function (t) {
return t && parseInt(t, 10)
}),
ae(t)
}
}
function fe(t) {
var e = new g(re(de(t)));
return e._nextDay && (e.add(1, 'd'), e._nextDay = void 0),
e
}
function de(t) {
var e = t._i,
n = t._f;
return t._locale = t._locale || te(t._l),
null === e || void 0 === n && '' === e ? f({
nullInput: !0
})  : ('string' == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new g(re(e))  : (r(n) ? ce(t)  : o(e) ? t._d = e : n ? ue(t)  : me(t), p(t) || (t._d = null), t))
}
function me(e) {
var n = e._i;
void 0 === n ? e._d = new Date(t.now())  : o(n) ? e._d = new Date(n.valueOf())  : 'string' == typeof n ? ie(e)  : r(n) ? (e._a = s(n.slice(0), function (t) {
return parseInt(t, 10)
}), ae(e))  : 'object' == typeof n ? pe(e)  : 'number' == typeof n ? e._d = new Date(n)  : t.createFromInputFallback(e)
}
function ge(t, e, o, s, a) {
var l = {
};
return 'boolean' == typeof o && (s = o, o = void 0),
(n(t) && i(t) || r(t) && 0 === t.length) && (t = void 0),
l._isAMomentObject = !0,
l._useUTC = l._isUTC = a,
l._l = o,
l._i = t,
l._f = e,
l._strict = s,
fe(l)
}
function ye(t, e, r, n) {
return ge(t, e, r, n, !1)
}
function ve(t, e) {
var n,
i;
if (1 === e.length && r(e[0]) && (e = e[0]), !e.length) return ye();
for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
return n
}
function _e() {
var t = [
].slice.call(arguments, 0);
return ve('isBefore', t)
}
function xe() {
var t = [
].slice.call(arguments, 0);
return ve('isAfter', t)
}
function be(t) {
var e = L(t),
r = e.year || 0,
n = e.quarter || 0,
i = e.month || 0,
o = e.week || 0,
s = e.day || 0,
a = e.hour || 0,
l = e.minute || 0,
u = e.second || 0,
h = e.millisecond || 0;
this._milliseconds = + h + 1000 * u + 60000 * l + 1000 * a * 60 * 60,
this._days = + s + 7 * o,
this._months = + i + 3 * n + 12 * r,
this._data = {
},
this._locale = te(),
this._bubble()
}
function we(t) {
return t instanceof be
}
function Te(t) {
return t < 0 ? Math.round( - 1 * t) * - 1 : Math.round(t)
}
function Se(t, e) {
W(t, 0, 0, function () {
var t = this.utcOffset(),
r = '+';
return t < 0 && (t = - t, r = '-'),
r + q(~~(t / 60), 2) + e + q(~~t % 60, 2)
})
}
function Ce(t, e) {
var r = (e || '').match(t) || [
],
n = r[r.length - 1] || [
],
i = (n + '').match(Oi) || [
'-',
0,
0
],
o = + (60 * i[1]) + _(i[2]);
return '+' === i[0] ? o : - o
}
function Me(e, r) {
var n,
i;
return r._isUTC ? (n = r.clone(), i = (y(e) || o(e) ? e.valueOf()  : ye(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), t.updateOffset(n, !1), n)  : ye(e).local()
}
function Re(t) {
return 15 * - Math.round(t._d.getTimezoneOffset() / 15)
}
function ke(e, r) {
var n,
i = this._offset || 0;
return this.isValid() ? null != e ? ('string' == typeof e ? e = Ce(zn, e)  : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && r && (n = Re(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, 'm'), i !== e && (!r || this._changeInProgress ? qe(this, Be(e - i, 'm'), 1, !1)  : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this)  : this._isUTC ? i : Re(this)  : null != e ? this : NaN
}
function Pe(t, e) {
return null != t ? ('string' != typeof t && (t = - t), this.utcOffset(t, e), this)  : - this.utcOffset()
}
function De(t) {
return this.utcOffset(0, t)
}
function Ae(t) {
return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Re(this), 'm')),
this
}
function Ee() {
if (this._tzm) this.utcOffset(this._tzm);
 else if ('string' == typeof this._i) {
var t = Ce(Wn, this._i);
0 === t ? this.utcOffset(0, !0)  : this.utcOffset(Ce(Wn, this._i))
}
return this
}
function Oe(t) {
return !!this.isValid() && (t = t ? ye(t).utcOffset()  : 0, (this.utcOffset() - t) % 60 === 0)
}
function Ne() {
return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}
function Ie() {
if (!d(this._isDSTShifted)) return this._isDSTShifted;
var t = {
};
if (m(t, this), t = de(t), t._a) {
var e = t._isUTC ? u(t._a)  : ye(t._a);
this._isDSTShifted = this.isValid() && x(t._a, e.toArray()) > 0
} else this._isDSTShifted = !1;
return this._isDSTShifted
}
function Le() {
return !!this.isValid() && !this._isUTC
}
function Fe() {
return !!this.isValid() && this._isUTC
}
function Ue() {
return !!this.isValid() && (this._isUTC && 0 === this._offset)
}
function Be(t, e) {
var r,
n,
i,
o = t,
s = null;
return we(t) ? o = {
ms: t._milliseconds,
d: t._days,
M: t._months
}
 : 'number' == typeof t ? (o = {
}, e ? o[e] = t : o.milliseconds = t)  : (s = Ni.exec(t)) ? (r = '-' === s[1] ? - 1 : 1, o = {
y: 0,
d: _(s[Kn]) * r,
h: _(s[ti]) * r,
m: _(s[ei]) * r,
s: _(s[ri]) * r,
ms: _(Te(1000 * s[ni])) * r
})  : (s = Ii.exec(t)) ? (r = '-' === s[1] ? - 1 : 1, o = {
y: He(s[2], r),
M: He(s[3], r),
w: He(s[4], r),
d: He(s[5], r),
h: He(s[6], r),
m: He(s[7], r),
s: He(s[8], r)
})  : null == o ? o = {
}
 : 'object' == typeof o && ('from' in o || 'to' in o) && (i = Ye(ye(o.from), ye(o.to)), o = {
}, o.ms = i.milliseconds, o.M = i.months),
n = new be(o),
we(t) && a(t, '_locale') && (n._locale = t._locale),
n
}
function He(t, e) {
var r = t && parseFloat(t.replace(',', '.'));
return (isNaN(r) ? 0 : r) * e
}
function je(t, e) {
var r = {
milliseconds: 0,
months: 0
};
return r.months = e.month() - t.month() + 12 * (e.year() - t.year()),
t.clone().add(r.months, 'M').isAfter(e) && --r.months,
r.milliseconds = + e - + t.clone().add(r.months, 'M'),
r
}
function Ye(t, e) {
var r;
return t.isValid() && e.isValid() ? (e = Me(e, t), t.isBefore(e) ? r = je(t, e)  : (r = je(e, t), r.milliseconds = - r.milliseconds, r.months = - r.months), r)  : {
milliseconds: 0,
months: 0
}
}
function Ge(t, e) {
return function (r, n) {
var i,
o;
return null === n || isNaN( + n) || (T(e, 'moment().' + e + '(period, number) is deprecated. Please use moment().' + e + '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'), o = r, r = n, n = o),
r = 'string' == typeof r ? + r : r,
i = Be(r, n),
qe(this, i, t),
this
}
}
function qe(e, r, n, i) {
var o = r._milliseconds,
s = Te(r._days),
a = Te(r._months);
e.isValid() && (i = null == i || i, o && e._d.setTime(e._d.valueOf() + o * n), s && j(e, 'Date', H(e, 'Date') + s * n), a && lt(e, H(e, 'Month') + a * n), i && t.updateOffset(e, s || a))
}
function We(t, e) {
var r = t.diff(e, 'days', !0);
return r < - 6 ? 'sameElse' : r < - 1 ? 'lastWeek' : r < 0 ? 'lastDay' : r < 1 ? 'sameDay' : r < 2 ? 'nextDay' : r < 7 ? 'nextWeek' : 'sameElse'
}
function ze(e, r) {
var n = e || ye(),
i = Me(n, this).startOf('day'),
o = t.calendarFormat(this, i) || 'sameElse',
s = r && (S(r[o]) ? r[o].call(this, n)  : r[o]);
return this.format(s || this.localeData().calendar(o, this, ye(n)))
}
function Ve() {
return new g(this)
}
function Xe(t, e) {
var r = y(t) ? t : ye(t);
return !(!this.isValid() || !r.isValid()) && (e = I(d(e) ? 'millisecond' : e), 'millisecond' === e ? this.valueOf() > r.valueOf()  : r.valueOf() < this.clone().startOf(e).valueOf())
}
function $e(t, e) {
var r = y(t) ? t : ye(t);
return !(!this.isValid() || !r.isValid()) && (e = I(d(e) ? 'millisecond' : e), 'millisecond' === e ? this.valueOf() < r.valueOf()  : this.clone().endOf(e).valueOf() < r.valueOf())
}
function Ze(t, e, r, n) {
return n = n || '()',
('(' === n[0] ? this.isAfter(t, r)  : !this.isBefore(t, r)) && (')' === n[1] ? this.isBefore(e, r)  : !this.isAfter(e, r))
}
function Je(t, e) {
var r,
n = y(t) ? t : ye(t);
return !(!this.isValid() || !n.isValid()) && (e = I(e || 'millisecond'), 'millisecond' === e ? this.valueOf() === n.valueOf()  : (r = n.valueOf(), this.clone().startOf(e).valueOf() <= r && r <= this.clone().endOf(e).valueOf()))
}
function Qe(t, e) {
return this.isSame(t, e) || this.isAfter(t, e)
}
function Ke(t, e) {
return this.isSame(t, e) || this.isBefore(t, e)
}
function tr(t, e, r) {
var n,
i,
o,
s;
return this.isValid() ? (n = Me(t, this), n.isValid() ? (i = 60000 * (n.utcOffset() - this.utcOffset()), e = I(e), 'year' === e || 'month' === e || 'quarter' === e ? (s = er(this, n), 'quarter' === e ? s /= 3 : 'year' === e && (s /= 12))  : (o = this - n, s = 'second' === e ? o / 1000 : 'minute' === e ? o / 60000 : 'hour' === e ? o / 3600000 : 'day' === e ? (o - i) / 86400000 : 'week' === e ? (o - i) / 604800000 : o), r ? s : v(s))  : NaN)  : NaN
}
function er(t, e) {
var r,
n,
i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
o = t.clone().add(i, 'months');
return e - o < 0 ? (r = t.clone().add(i - 1, 'months'), n = (e - o) / (o - r))  : (r = t.clone().add(i + 1, 'months'), n = (e - o) / (r - o)),
- (i + n) || 0
}
function rr() {
return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
}
function nr() {
var t = this.clone().utc();
return 0 < t.year() && t.year() <= 9999 ? S(Date.prototype.toISOString) ? this.toDate().toISOString()  : X(t, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')  : X(t, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
}
function ir(e) {
e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
var r = X(this, e);
return this.localeData().postformat(r)
}
function or(t, e) {
return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? Be({
to: this,
from: t
}).locale(this.locale()).humanize(!e)  : this.localeData().invalidDate()
}
function sr(t) {
return this.from(ye(), t)
}
function ar(t, e) {
return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? Be({
from: this,
to: t
}).locale(this.locale()).humanize(!e)  : this.localeData().invalidDate()
}
function lr(t) {
return this.to(ye(), t)
}
function ur(t) {
var e;
return void 0 === t ? this._locale._abbr : (e = te(t), null != e && (this._locale = e), this)
}
function hr() {
return this._locale
}
function cr(t) {
switch (t = I(t)) {
case 'year':
this.month(0);
case 'quarter':
case 'month':
this.date(1);
case 'week':
case 'isoWeek':
case 'day':
case 'date':
this.hours(0);
case 'hour':
this.minutes(0);
case 'minute':
this.seconds(0);
case 'second':
this.milliseconds(0)
}
return 'week' === t && this.weekday(0),
'isoWeek' === t && this.isoWeekday(1),
'quarter' === t && this.month(3 * Math.floor(this.month() / 3)),
this
}
function pr(t) {
return t = I(t),
void 0 === t || 'millisecond' === t ? this : ('date' === t && (t = 'day'), this.startOf(t).add(1, 'isoWeek' === t ? 'week' : t).subtract(1, 'ms'))
}
function fr() {
return this._d.valueOf() - 60000 * (this._offset || 0)
}
function dr() {
return Math.floor(this.valueOf() / 1000)
}
function mr() {
return new Date(this.valueOf())
}
function gr() {
var t = this;
return [t.year(),
t.month(),
t.date(),
t.hour(),
t.minute(),
t.second(),
t.millisecond()]
}
function yr() {
var t = this;
return {
years: t.year(),
months: t.month(),
date: t.date(),
hours: t.hours(),
minutes: t.minutes(),
seconds: t.seconds(),
milliseconds: t.milliseconds()
}
}
function vr() {
return this.isValid() ? this.toISOString()  : null
}
function _r() {
return p(this)
}
function xr() {
return l({
}, c(this))
}
function br() {
return c(this).overflow
}
function wr() {
return {
input: this._i,
format: this._f,
locale: this._locale,
isUTC: this._isUTC,
strict: this._strict
}
}
function Tr(t, e) {
W(0, [
t,
t.length
], 0, e)
}
function Sr(t) {
return kr.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
}
function Cr(t) {
return kr.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
}
function Mr() {
return wt(this.year(), 1, 4)
}
function Rr() {
var t = this.localeData()._week;
return wt(this.year(), t.dow, t.doy)
}
function kr(t, e, r, n, i) {
var o;
return null == t ? bt(this, n, i).year : (o = wt(t, n, i), e > o && (e = o), Pr.call(this, t, e, r, n, i))
}
function Pr(t, e, r, n, i) {
var o = xt(t, e, r, n, i),
s = vt(o.year, 0, o.dayOfYear);
return this.year(s.getUTCFullYear()),
this.month(s.getUTCMonth()),
this.date(s.getUTCDate()),
this
}
function Dr(t) {
return null == t ? Math.ceil((this.month() + 1) / 3)  : this.month(3 * (t - 1) + this.month() % 3)
}
function Ar(t) {
var e = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 86400000) + 1;
return null == t ? e : this.add(t - e, 'd')
}
function Er(t, e) {
e[ni] = _(1000 * ('0.' + t))
}
function Or() {
return this._isUTC ? 'UTC' : ''
}
function Nr() {
return this._isUTC ? 'Coordinated Universal Time' : ''
}
function Ir(t) {
return ye(1000 * t)
}
function Lr() {
return ye.apply(null, arguments).parseZone()
}
function Fr(t) {
return t
}
function Ur(t, e, r, n) {
var i = te(),
o = u().set(n, e);
return i[r](o, t)
}
function Br(t, e, r) {
if ('number' == typeof t && (e = t, t = void 0), t = t || '', null != e) return Ur(t, e, r, 'month');
var n,
i = [
];
for (n = 0; n < 12; n++) i[n] = Ur(t, n, r, 'month');
return i
}
function Hr(t, e, r, n) {
'boolean' == typeof t ? ('number' == typeof e && (r = e, e = void 0), e = e || '')  : (e = t, r = e, t = !1, 'number' == typeof e && (r = e, e = void 0), e = e || '');
var i = te(),
o = t ? i._week.dow : 0;
if (null != r) return Ur(e, (r + o) % 7, n, 'day');
var s,
a = [
];
for (s = 0; s < 7; s++) a[s] = Ur(e, (s + o) % 7, n, 'day');
return a
}
function jr(t, e) {
return Br(t, e, 'months')
}
function Yr(t, e) {
return Br(t, e, 'monthsShort')
}
function Gr(t, e, r) {
return Hr(t, e, r, 'weekdays')
}
function qr(t, e, r) {
return Hr(t, e, r, 'weekdaysShort')
}
function Wr(t, e, r) {
return Hr(t, e, r, 'weekdaysMin')
}
function zr() {
var t = this._data;
return this._milliseconds = Vi(this._milliseconds),
this._days = Vi(this._days),
this._months = Vi(this._months),
t.milliseconds = Vi(t.milliseconds),
t.seconds = Vi(t.seconds),
t.minutes = Vi(t.minutes),
t.hours = Vi(t.hours),
t.months = Vi(t.months),
t.years = Vi(t.years),
this
}
function Vr(t, e, r, n) {
var i = Be(e, r);
return t._milliseconds += n * i._milliseconds,
t._days += n * i._days,
t._months += n * i._months,
t._bubble()
}
function Xr(t, e) {
return Vr(this, t, e, 1)
}
function $r(t, e) {
return Vr(this, t, e, - 1)
}
function Zr(t) {
return t < 0 ? Math.floor(t)  : Math.ceil(t)
}
function Jr() {
var t,
e,
r,
n,
i,
o = this._milliseconds,
s = this._days,
a = this._months,
l = this._data;
return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 86400000 * Zr(Kr(a) + s), s = 0, a = 0),
l.milliseconds = o % 1000,
t = v(o / 1000),
l.seconds = t % 60,
e = v(t / 60),
l.minutes = e % 60,
r = v(e / 60),
l.hours = r % 24,
s += v(r / 24),
i = v(Qr(s)),
a += i,
s -= Zr(Kr(i)),
n = v(a / 12),
a %= 12,
l.days = s,
l.months = a,
l.years = n,
this
}
function Qr(t) {
return 4800 * t / 146097
}
function Kr(t) {
return 146097 * t / 4800
}
function tn(t) {
var e,
r,
n = this._milliseconds;
if (t = I(t), 'month' === t || 'year' === t) return e = this._days + n / 86400000,
r = this._months + Qr(e),
'month' === t ? r : r / 12;
switch (e = this._days + Math.round(Kr(this._months)), t) {
case 'week':
return e / 7 + n / 604800000;
case 'day':
return e + n / 86400000;
case 'hour':
return 24 * e + n / 3600000;
case 'minute':
return 1440 * e + n / 60000;
case 'second':
return 86400 * e + n / 1000;
case 'millisecond':
return Math.floor(86400000 * e) + n;
default:
throw new Error('Unknown unit ' + t)
}
}
function en() {
return this._milliseconds + 86400000 * this._days + this._months % 12 * 2592000000 + 31536000000 * _(this._months / 12)
}
function rn(t) {
return function () {
return this.as(t)
}
}
function nn(t) {
return t = I(t),
this[t + 's']()
}
function on(t) {
return function () {
return this._data[t]
}
}
function sn() {
return v(this.days() / 7)
}
function an(t, e, r, n, i) {
return i.relativeTime(e || 1, !!r, t, n)
}
function ln(t, e, r) {
var n = Be(t).abs(),
i = uo(n.as('s')),
o = uo(n.as('m')),
s = uo(n.as('h')),
a = uo(n.as('d')),
l = uo(n.as('M')),
u = uo(n.as('y')),
h = i < ho.s && [
's',
i
] || o <= 1 && [
'm'
] || o < ho.m && [
'mm',
o
] || s <= 1 && [
'h'
] || s < ho.h && [
'hh',
s
] || a <= 1 && [
'd'
] || a < ho.d && [
'dd',
a
] || l <= 1 && [
'M'
] || l < ho.M && [
'MM',
l
] || u <= 1 && [
'y'
] || [
'yy',
u
];
return h[2] = e,
h[3] = + t > 0,
h[4] = r,
an.apply(null, h)
}
function un(t) {
return void 0 === t ? uo : 'function' == typeof t && (uo = t, !0)
}
function hn(t, e) {
return void 0 !== ho[t] && (void 0 === e ? ho[t] : (ho[t] = e, !0))
}
function cn(t) {
var e = this.localeData(),
r = ln(this, !t, e);
return t && (r = e.pastFuture( + this, r)),
e.postformat(r)
}
function pn() {
var t,
e,
r,
n = co(this._milliseconds) / 1000,
i = co(this._days),
o = co(this._months);
t = v(n / 60),
e = v(t / 60),
n %= 60,
t %= 60,
r = v(o / 12),
o %= 12;
var s = r,
a = o,
l = i,
u = e,
h = t,
c = n,
p = this.asSeconds();
return p ? (p < 0 ? '-' : '') + 'P' + (s ? s + 'Y' : '') + (a ? a + 'M' : '') + (l ? l + 'D' : '') + (u || h || c ? 'T' : '') + (u ? u + 'H' : '') + (h ? h + 'M' : '') + (c ? c + 'S' : '')  : 'P0D'
}
var fn,
dn;
dn = Array.prototype.some ? Array.prototype.some : function (t) {
for (var e = Object(this), r = e.length >>> 0, n = 0; n < r; n++) if (n in e && t.call(this, e[n], n, e)) return !0;
return !1
};
var mn = t.momentProperties = [
],
gn = !1,
yn = {
};
t.suppressDeprecationWarnings = !1,
t.deprecationHandler = null;
var vn;
vn = Object.keys ? Object.keys : function (t) {
var e,
r = [
];
for (e in t) a(t, e) && r.push(e);
return r
};
var _n,
xn = {
sameDay: '[Today at] LT',
nextDay: '[Tomorrow at] LT',
nextWeek: 'dddd [at] LT',
lastDay: '[Yesterday at] LT',
lastWeek: '[Last] dddd [at] LT',
sameElse: 'L'
},
bn = {
LTS: 'h:mm:ss A',
LT: 'h:mm A',
L: 'MM/DD/YYYY',
LL: 'MMMM D, YYYY',
LLL: 'MMMM D, YYYY h:mm A',
LLLL: 'dddd, MMMM D, YYYY h:mm A'
},
wn = 'Invalid date',
Tn = '%d',
Sn = /\d{1,2}/,
Cn = {
future: 'in %s',
past: '%s ago',
s: 'a few seconds',
m: 'a minute',
mm: '%d minutes',
h: 'an hour',
hh: '%d hours',
d: 'a day',
dd: '%d days',
M: 'a month',
MM: '%d months',
y: 'a year',
yy: '%d years'
},
Mn = {
},
Rn = {
},
kn = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
Pn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
Dn = {
},
An = {
},
En = /\d/,
On = /\d\d/,
Nn = /\d{3}/,
In = /\d{4}/,
Ln = /[+-]?\d{6}/,
Fn = /\d\d?/,
Un = /\d\d\d\d?/,
Bn = /\d\d\d\d\d\d?/,
Hn = /\d{1,3}/,
jn = /\d{1,4}/,
Yn = /[+-]?\d{1,6}/,
Gn = /\d+/,
qn = /[+-]?\d+/,
Wn = /Z|[+-]\d\d:?\d\d/gi,
zn = /Z|[+-]\d\d(?::?\d\d)?/gi,
Vn = /[+-]?\d+(\.\d{1,3})?/,
Xn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
$n = {
},
Zn = {
},
Jn = 0,
Qn = 1,
Kn = 2,
ti = 3,
ei = 4,
ri = 5,
ni = 6,
ii = 7,
oi = 8;
_n = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
var e;
for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
return - 1
},
W('M', [
'MM',
2
], 'Mo', function () {
return this.month() + 1
}),
W('MMM', 0, 0, function (t) {
return this.localeData().monthsShort(this, t)
}),
W('MMMM', 0, 0, function (t) {
return this.localeData().months(this, t)
}),
N('month', 'M'),
F('month', 8),
Z('M', Fn),
Z('MM', Fn, On),
Z('MMM', function (t, e) {
return e.monthsShortRegex(t)
}),
Z('MMMM', function (t, e) {
return e.monthsRegex(t)
}),
tt(['M',
'MM'], function (t, e) {
e[Qn] = _(t) - 1
}),
tt(['MMM',
'MMMM'], function (t, e, r, n) {
var i = r._locale.monthsParse(t, n, r._strict);
null != i ? e[Qn] = i : c(r).invalidMonth = t
});
var si = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
ai = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
li = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
ui = Xn,
hi = Xn;
W('Y', 0, 0, function () {
var t = this.year();
return t <= 9999 ? '' + t : '+' + t
}),
W(0, [
'YY',
2
], 0, function () {
return this.year() % 100
}),
W(0, [
'YYYY',
4
], 0, 'year'),
W(0, [
'YYYYY',
5
], 0, 'year'),
W(0, [
'YYYYYY',
6,
!0
], 0, 'year'),
N('year', 'y'),
F('year', 1),
Z('Y', qn),
Z('YY', Fn, On),
Z('YYYY', jn, In),
Z('YYYYY', Yn, Ln),
Z('YYYYYY', Yn, Ln),
tt(['YYYYY',
'YYYYYY'], Jn),
tt('YYYY', function (e, r) {
r[Jn] = 2 === e.length ? t.parseTwoDigitYear(e)  : _(e)
}),
tt('YY', function (e, r) {
r[Jn] = t.parseTwoDigitYear(e)
}),
tt('Y', function (t, e) {
e[Jn] = parseInt(t, 10)
}),
t.parseTwoDigitYear = function (t) {
return _(t) + (_(t) > 68 ? 1900 : 2000)
};
var ci = B('FullYear', !0);
W('w', [
'ww',
2
], 'wo', 'week'),
W('W', [
'WW',
2
], 'Wo', 'isoWeek'),
N('week', 'w'),
N('isoWeek', 'W'),
F('week', 5),
F('isoWeek', 5),
Z('w', Fn),
Z('ww', Fn, On),
Z('W', Fn),
Z('WW', Fn, On),
et(['w',
'ww',
'W',
'WW'], function (t, e, r, n) {
e[n.substr(0, 1)] = _(t)
});
var pi = {
dow: 0,
doy: 6
};
W('d', 0, 'do', 'day'),
W('dd', 0, 0, function (t) {
return this.localeData().weekdaysMin(this, t)
}),
W('ddd', 0, 0, function (t) {
return this.localeData().weekdaysShort(this, t)
}),
W('dddd', 0, 0, function (t) {
return this.localeData().weekdays(this, t)
}),
W('e', 0, 0, 'weekday'),
W('E', 0, 0, 'isoWeekday'),
N('day', 'd'),
N('weekday', 'e'),
N('isoWeekday', 'E'),
F('day', 11),
F('weekday', 11),
F('isoWeekday', 11),
Z('d', Fn),
Z('e', Fn),
Z('E', Fn),
Z('dd', function (t, e) {
return e.weekdaysMinRegex(t)
}),
Z('ddd', function (t, e) {
return e.weekdaysShortRegex(t)
}),
Z('dddd', function (t, e) {
return e.weekdaysRegex(t)
}),
et(['dd',
'ddd',
'dddd'], function (t, e, r, n) {
var i = r._locale.weekdaysParse(t, n, r._strict);
null != i ? e.d = i : c(r).invalidWeekday = t
}),
et(['d',
'e',
'E'], function (t, e, r, n) {
e[n] = _(t)
});
var fi = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
di = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
mi = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
gi = Xn,
yi = Xn,
vi = Xn;
W('H', [
'HH',
2
], 0, 'hour'),
W('h', [
'hh',
2
], 0, Yt),
W('k', [
'kk',
2
], 0, Gt),
W('hmm', 0, 0, function () {
return '' + Yt.apply(this) + q(this.minutes(), 2)
}),
W('hmmss', 0, 0, function () {
return '' + Yt.apply(this) + q(this.minutes(), 2) + q(this.seconds(), 2)
}),
W('Hmm', 0, 0, function () {
return '' + this.hours() + q(this.minutes(), 2)
}),
W('Hmmss', 0, 0, function () {
return '' + this.hours() + q(this.minutes(), 2) + q(this.seconds(), 2)
}),
qt('a', !0),
qt('A', !1),
N('hour', 'h'),
F('hour', 13),
Z('a', Wt),
Z('A', Wt),
Z('H', Fn),
Z('h', Fn),
Z('HH', Fn, On),
Z('hh', Fn, On),
Z('hmm', Un),
Z('hmmss', Bn),
Z('Hmm', Un),
Z('Hmmss', Bn),
tt(['H',
'HH'], ti),
tt(['a',
'A'], function (t, e, r) {
r._isPm = r._locale.isPM(t),
r._meridiem = t
}),
tt(['h',
'hh'], function (t, e, r) {
e[ti] = _(t),
c(r).bigHour = !0
}),
tt('hmm', function (t, e, r) {
var n = t.length - 2;
e[ti] = _(t.substr(0, n)),
e[ei] = _(t.substr(n)),
c(r).bigHour = !0
}),
tt('hmmss', function (t, e, r) {
var n = t.length - 4,
i = t.length - 2;
e[ti] = _(t.substr(0, n)),
e[ei] = _(t.substr(n, 2)),
e[ri] = _(t.substr(i)),
c(r).bigHour = !0
}),
tt('Hmm', function (t, e, r) {
var n = t.length - 2;
e[ti] = _(t.substr(0, n)),
e[ei] = _(t.substr(n))
}),
tt('Hmmss', function (t, e, r) {
var n = t.length - 4,
i = t.length - 2;
e[ti] = _(t.substr(0, n)),
e[ei] = _(t.substr(n, 2)),
e[ri] = _(t.substr(i))
});
var _i,
xi = /[ap]\.?m?\.?/i,
bi = B('Hours', !0),
wi = {
calendar: xn,
longDateFormat: bn,
invalidDate: wn,
ordinal: Tn,
ordinalParse: Sn,
relativeTime: Cn,
months: ai,
monthsShort: li,
week: pi,
weekdays: fi,
weekdaysMin: mi,
weekdaysShort: di,
meridiemParse: xi
},
Ti = {
},
Si = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
Ci = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
Mi = /Z|[+-]\d\d(?::?\d\d)?/,
Ri = [
['YYYYYY-MM-DD',
/[+-]\d{6}-\d\d-\d\d/],
[
'YYYY-MM-DD',
/\d{4}-\d\d-\d\d/
],
[
'GGGG-[W]WW-E',
/\d{4}-W\d\d-\d/
],
[
'GGGG-[W]WW',
/\d{4}-W\d\d/,
!1
],
[
'YYYY-DDD',
/\d{4}-\d{3}/
],
[
'YYYY-MM',
/\d{4}-\d\d/,
!1
],
[
'YYYYYYMMDD',
/[+-]\d{10}/
],
[
'YYYYMMDD',
/\d{8}/
],
[
'GGGG[W]WWE',
/\d{4}W\d{3}/
],
[
'GGGG[W]WW',
/\d{4}W\d{2}/,
!1
],
[
'YYYYDDD',
/\d{7}/
]
],
ki = [
['HH:mm:ss.SSSS',
/\d\d:\d\d:\d\d\.\d+/],
[
'HH:mm:ss,SSSS',
/\d\d:\d\d:\d\d,\d+/
],
[
'HH:mm:ss',
/\d\d:\d\d:\d\d/
],
[
'HH:mm',
/\d\d:\d\d/
],
[
'HHmmss.SSSS',
/\d\d\d\d\d\d\.\d+/
],
[
'HHmmss,SSSS',
/\d\d\d\d\d\d,\d+/
],
[
'HHmmss',
/\d\d\d\d\d\d/
],
[
'HHmm',
/\d\d\d\d/
],
[
'HH',
/\d\d/
]
],
Pi = /^\/?Date\((\-?\d+)/i;
t.createFromInputFallback = w('value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (t) {
t._d = new Date(t._i + (t._useUTC ? ' UTC' : ''))
}),
t.ISO_8601 = function () {
};
var Di = w('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
var t = ye.apply(null, arguments);
return this.isValid() && t.isValid() ? t < this ? this : t : f()
}),
Ai = w('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
var t = ye.apply(null, arguments);
return this.isValid() && t.isValid() ? t > this ? this : t : f()
}),
Ei = function () {
return Date.now ? Date.now()  : + new Date
};
Se('Z', ':'),
Se('ZZ', ''),
Z('Z', zn),
Z('ZZ', zn),
tt(['Z',
'ZZ'], function (t, e, r) {
r._useUTC = !0,
r._tzm = Ce(zn, t)
});
var Oi = /([\+\-]|\d\d)/gi;
t.updateOffset = function () {
};
var Ni = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
Ii = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
Be.fn = be.prototype;
var Li = Ge(1, 'add'),
Fi = Ge( - 1, 'subtract');
t.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ',
t.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
var Ui = w('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (t) {
return void 0 === t ? this.localeData()  : this.locale(t)
});
W(0, [
'gg',
2
], 0, function () {
return this.weekYear() % 100
}),
W(0, [
'GG',
2
], 0, function () {
return this.isoWeekYear() % 100
}),
Tr('gggg', 'weekYear'),
Tr('ggggg', 'weekYear'),
Tr('GGGG', 'isoWeekYear'),
Tr('GGGGG', 'isoWeekYear'),
N('weekYear', 'gg'),
N('isoWeekYear', 'GG'),
F('weekYear', 1),
F('isoWeekYear', 1),
Z('G', qn),
Z('g', qn),
Z('GG', Fn, On),
Z('gg', Fn, On),
Z('GGGG', jn, In),
Z('gggg', jn, In),
Z('GGGGG', Yn, Ln),
Z('ggggg', Yn, Ln),
et(['gggg',
'ggggg',
'GGGG',
'GGGGG'], function (t, e, r, n) {
e[n.substr(0, 2)] = _(t)
}),
et(['gg',
'GG'], function (e, r, n, i) {
r[i] = t.parseTwoDigitYear(e)
}),
W('Q', 0, 'Qo', 'quarter'),
N('quarter', 'Q'),
F('quarter', 7),
Z('Q', En),
tt('Q', function (t, e) {
e[Qn] = 3 * (_(t) - 1)
}),
W('D', [
'DD',
2
], 'Do', 'date'),
N('date', 'D'),
F('date', 9),
Z('D', Fn),
Z('DD', Fn, On),
Z('Do', function (t, e) {
return t ? e._ordinalParse : e._ordinalParseLenient
}),
tt(['D',
'DD'], Kn),
tt('Do', function (t, e) {
e[Kn] = _(t.match(Fn) [0], 10)
});
var Bi = B('Date', !0);
W('DDD', [
'DDDD',
3
], 'DDDo', 'dayOfYear'),
N('dayOfYear', 'DDD'),
F('dayOfYear', 4),
Z('DDD', Hn),
Z('DDDD', Nn),
tt(['DDD',
'DDDD'], function (t, e, r) {
r._dayOfYear = _(t)
}),
W('m', [
'mm',
2
], 0, 'minute'),
N('minute', 'm'),
F('minute', 14),
Z('m', Fn),
Z('mm', Fn, On),
tt(['m',
'mm'], ei);
var Hi = B('Minutes', !1);
W('s', [
'ss',
2
], 0, 'second'),
N('second', 's'),
F('second', 15),
Z('s', Fn),
Z('ss', Fn, On),
tt(['s',
'ss'], ri);
var ji = B('Seconds', !1);
W('S', 0, 0, function () {
return ~~(this.millisecond() / 100)
}),
W(0, [
'SS',
2
], 0, function () {
return ~~(this.millisecond() / 10)
}),
W(0, [
'SSS',
3
], 0, 'millisecond'),
W(0, [
'SSSS',
4
], 0, function () {
return 10 * this.millisecond()
}),
W(0, [
'SSSSS',
5
], 0, function () {
return 100 * this.millisecond()
}),
W(0, [
'SSSSSS',
6
], 0, function () {
return 1000 * this.millisecond()
}),
W(0, [
'SSSSSSS',
7
], 0, function () {
return 10000 * this.millisecond()
}),
W(0, [
'SSSSSSSS',
8
], 0, function () {
return 100000 * this.millisecond()
}),
W(0, [
'SSSSSSSSS',
9
], 0, function () {
return 1000000 * this.millisecond()
}),
N('millisecond', 'ms'),
F('millisecond', 16),
Z('S', Hn, En),
Z('SS', Hn, On),
Z('SSS', Hn, Nn);
var Yi;
for (Yi = 'SSSS'; Yi.length <= 9; Yi += 'S') Z(Yi, Gn);
for (Yi = 'S'; Yi.length <= 9; Yi += 'S') tt(Yi, Er);
var Gi = B('Milliseconds', !1);
W('z', 0, 0, 'zoneAbbr'),
W('zz', 0, 0, 'zoneName');
var qi = g.prototype;
qi.add = Li,
qi.calendar = ze,
qi.clone = Ve,
qi.diff = tr,
qi.endOf = pr,
qi.format = ir,
qi.from = or,
qi.fromNow = sr,
qi.to = ar,
qi.toNow = lr,
qi.get = Y,
qi.invalidAt = br,
qi.isAfter = Xe,
qi.isBefore = $e,
qi.isBetween = Ze,
qi.isSame = Je,
qi.isSameOrAfter = Qe,
qi.isSameOrBefore = Ke,
qi.isValid = _r,
qi.lang = Ui,
qi.locale = ur,
qi.localeData = hr,
qi.max = Ai,
qi.min = Di,
qi.parsingFlags = xr,
qi.set = G,
qi.startOf = cr,
qi.subtract = Fi,
qi.toArray = gr,
qi.toObject = yr,
qi.toDate = mr,
qi.toISOString = nr,
qi.toJSON = vr,
qi.toString = rr,
qi.unix = dr,
qi.valueOf = fr,
qi.creationData = wr,
qi.year = ci,
qi.isLeapYear = gt,
qi.weekYear = Sr,
qi.isoWeekYear = Cr,
qi.quarter = qi.quarters = Dr,
qi.month = ut,
qi.daysInMonth = ht,
qi.week = qi.weeks = Mt,
qi.isoWeek = qi.isoWeeks = Rt,
qi.weeksInYear = Rr,
qi.isoWeeksInYear = Mr,
qi.date = Bi,
qi.day = qi.days = It,
qi.weekday = Lt,
qi.isoWeekday = Ft,
qi.dayOfYear = Ar,
qi.hour = qi.hours = bi,
qi.minute = qi.minutes = Hi,
qi.second = qi.seconds = ji,
qi.millisecond = qi.milliseconds = Gi,
qi.utcOffset = ke,
qi.utc = De,
qi.local = Ae,
qi.parseZone = Ee,
qi.hasAlignedHourOffset = Oe,
qi.isDST = Ne,
qi.isLocal = Le,
qi.isUtcOffset = Fe,
qi.isUtc = Ue,
qi.isUTC = Ue,
qi.zoneAbbr = Or,
qi.zoneName = Nr,
qi.dates = w('dates accessor is deprecated. Use date instead.', Bi),
qi.months = w('months accessor is deprecated. Use month instead', ut),
qi.years = w('years accessor is deprecated. Use year instead', ci),
qi.zone = w('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', Pe),
qi.isDSTShifted = w('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', Ie);
var Wi = qi,
zi = R.prototype;
zi.calendar = k,
zi.longDateFormat = P,
zi.invalidDate = D,
zi.ordinal = A,
zi.preparse = Fr,
zi.postformat = Fr,
zi.relativeTime = E,
zi.pastFuture = O,
zi.set = C,
zi.months = it,
zi.monthsShort = ot,
zi.monthsParse = at,
zi.monthsRegex = pt,
zi.monthsShortRegex = ct,
zi.week = Tt,
zi.firstDayOfYear = Ct,
zi.firstDayOfWeek = St,
zi.weekdays = Dt,
zi.weekdaysMin = Et,
zi.weekdaysShort = At,
zi.weekdaysParse = Nt,
zi.weekdaysRegex = Ut,
zi.weekdaysShortRegex = Bt,
zi.weekdaysMinRegex = Ht,
zi.isPM = zt,
zi.meridiem = Vt,
Jt('en', {
ordinalParse: /\d{1,2}(th|st|nd|rd)/,
ordinal: function (t) {
var e = t % 10,
r = 1 === _(t % 100 / 10) ? 'th' : 1 === e ? 'st' : 2 === e ? 'nd' : 3 === e ? 'rd' : 'th';
return t + r
}
}),
t.lang = w('moment.lang is deprecated. Use moment.locale instead.', Jt),
t.langData = w('moment.langData is deprecated. Use moment.localeData instead.', te);
var Vi = Math.abs,
Xi = rn('ms'),
$i = rn('s'),
Zi = rn('m'),
Ji = rn('h'),
Qi = rn('d'),
Ki = rn('w'),
to = rn('M'),
eo = rn('y'),
ro = on('milliseconds'),
no = on('seconds'),
io = on('minutes'),
oo = on('hours'),
so = on('days'),
ao = on('months'),
lo = on('years'),
uo = Math.round,
ho = {
s: 45,
m: 45,
h: 22,
d: 26,
M: 11
},
co = Math.abs,
po = be.prototype;
po.abs = zr,
po.add = Xr,
po.subtract = $r,
po.as = tn,
po.asMilliseconds = Xi,
po.asSeconds = $i,
po.asMinutes = Zi,
po.asHours = Ji,
po.asDays = Qi,
po.asWeeks = Ki,
po.asMonths = to,
po.asYears = eo,
po.valueOf = en,
po._bubble = Jr,
po.get = nn,
po.milliseconds = ro,
po.seconds = no,
po.minutes = io,
po.hours = oo,
po.days = so,
po.weeks = sn,
po.months = ao,
po.years = lo,
po.humanize = cn,
po.toISOString = pn,
po.toString = pn,
po.toJSON = pn,
po.locale = ur,
po.localeData = hr,
po.toIsoString = w('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', pn),
po.lang = Ui,
W('X', 0, 0, 'unix'),
W('x', 0, 0, 'valueOf'),
Z('x', qn),
Z('X', Vn),
tt('X', function (t, e, r) {
r._d = new Date(1000 * parseFloat(t, 10))
}),
tt('x', function (t, e, r) {
r._d = new Date(_(t))
}),
t.version = '2.15.1',
e(ye),
t.fn = Wi,
t.min = _e,
t.max = xe,
t.now = Ei,
t.utc = u,
t.unix = Ir,
t.months = jr,
t.isDate = o,
t.locale = Jt,
t.invalid = f,
t.duration = Be,
t.isMoment = y,
t.weekdays = Gr,
t.parseZone = Lr,
t.localeData = te,
t.isDuration = we,
t.monthsShort = Yr,
t.weekdaysMin = Wr,
t.defineLocale = Qt,
t.updateLocale = Kt,
t.locales = ee,
t.weekdaysShort = qr,
t.normalizeUnits = I,
t.relativeTimeRounding = un,
t.relativeTimeThreshold = hn,
t.calendarFormat = We,
t.prototype = Wi;
var fo = t;
return fo
}),
+ function (t) {
'use strict';
function e(e) {
return this.each(function () {
var r = t(this),
i = r.data('bs.alert');
i || r.data('bs.alert', i = new n(this)),
'string' == typeof e && i[e].call(r)
})
}
var r = '[data-dismiss="alert"]',
n = function (e) {
t(e).on('click', r, this.close)
};
n.VERSION = '3.3.7',
n.TRANSITION_DURATION = 150,
n.prototype.close = function (e) {
function r() {
s.detach().trigger('closed.bs.alert').remove()
}
var i = t(this),
o = i.attr('data-target');
o || (o = i.attr('href'), o = o && o.replace(/.*(?=#[^\s]*$)/, ''));
var s = t('#' === o ? [
] : o);
e && e.preventDefault(),
s.length || (s = i.closest('.alert')),
s.trigger(e = t.Event('close.bs.alert')),
e.isDefaultPrevented() || (s.removeClass('in'), t.support.transition && s.hasClass('fade') ? s.one('bsTransitionEnd', r).emulateTransitionEnd(n.TRANSITION_DURATION)  : r())
};
var i = t.fn.alert;
t.fn.alert = e,
t.fn.alert.Constructor = n,
t.fn.alert.noConflict = function () {
return t.fn.alert = i,
this
},
t(document).on('click.bs.alert.data-api', r, n.prototype.close)
}(jQuery),
+ function (t) {
'use strict';
function e(e) {
return this.each(function () {
var n = t(this),
i = n.data('bs.button'),
o = 'object' == typeof e && e;
i || n.data('bs.button', i = new r(this, o)),
'toggle' == e ? i.toggle()  : e && i.setState(e)
})
}
var r = function (e, n) {
this.$element = t(e),
this.options = t.extend({
}, r.DEFAULTS, n),
this.isLoading = !1
};
r.VERSION = '3.3.7',
r.DEFAULTS = {
loadingText: 'loading...'
},
r.prototype.setState = function (e) {
var r = 'disabled',
n = this.$element,
i = n.is('input') ? 'val' : 'html',
o = n.data();
e += 'Text',
null == o.resetText && n.data('resetText', n[i]()),
setTimeout(t.proxy(function () {
n[i](null == o[e] ? this.options[e] : o[e]),
'loadingText' == e ? (this.isLoading = !0, n.addClass(r).attr(r, r).prop(r, !0))  : this.isLoading && (this.isLoading = !1, n.removeClass(r).removeAttr(r).prop(r, !1))
}, this), 0)
},
r.prototype.toggle = function () {
var t = !0,
e = this.$element.closest('[data-toggle="buttons"]');
if (e.length) {
var r = this.$element.find('input');
'radio' == r.prop('type') ? (r.prop('checked') && (t = !1), e.find('.active').removeClass('active'), this.$element.addClass('active'))  : 'checkbox' == r.prop('type') && (r.prop('checked') !== this.$element.hasClass('active') && (t = !1), this.$element.toggleClass('active')),
r.prop('checked', this.$element.hasClass('active')),
t && r.trigger('change')
} else this.$element.attr('aria-pressed', !this.$element.hasClass('active')),
this.$element.toggleClass('active')
};
var n = t.fn.button;
t.fn.button = e,
t.fn.button.Constructor = r,
t.fn.button.noConflict = function () {
return t.fn.button = n,
this
},
t(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (r) {
var n = t(r.target).closest('.btn');
e.call(n, 'toggle'),
t(r.target).is('input[type="radio"], input[type="checkbox"]') || (r.preventDefault(), n.is('input,button') ? n.trigger('focus')  : n.find('input:visible,button:visible').first().trigger('focus'))
}).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
t(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
})
}(jQuery),
+ function (t) {
'use strict';
function e() {
var t = document.createElement('bootstrap'),
e = {
WebkitTransition: 'webkitTransitionEnd',
MozTransition: 'transitionend',
OTransition: 'oTransitionEnd otransitionend',
transition: 'transitionend'
};
for (var r in e) if (void 0 !== t.style[r]) return {
end: e[r]
};
return !1
}
t.fn.emulateTransitionEnd = function (e) {
var r = !1,
n = this;
t(this).one('bsTransitionEnd', function () {
r = !0
});
var i = function () {
r || t(n).trigger(t.support.transition.end)
};
return setTimeout(i, e),
this
},
t(function () {
t.support.transition = e(),
t.support.transition && (t.event.special.bsTransitionEnd = {
bindType: t.support.transition.end,
delegateType: t.support.transition.end,
handle: function (e) {
if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
}
})
})
}(jQuery),
+ function (t) {
'use strict';
function e(e) {
var r,
n = e.attr('data-target') || (r = e.attr('href')) && r.replace(/.*(?=#[^\s]+$)/, '');
return t(n)
}
function r(e) {
return this.each(function () {
var r = t(this),
i = r.data('bs.collapse'),
o = t.extend({
}, n.DEFAULTS, r.data(), 'object' == typeof e && e);
!i && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
i || r.data('bs.collapse', i = new n(this, o)),
'string' == typeof e && i[e]()
})
}
var n = function (e, r) {
this.$element = t(e),
this.options = t.extend({
}, n.DEFAULTS, r),
this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
this.transitioning = null,
this.options.parent ? this.$parent = this.getParent()  : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
this.options.toggle && this.toggle()
};
n.VERSION = '3.3.7',
n.TRANSITION_DURATION = 350,
n.DEFAULTS = {
toggle: !0
},
n.prototype.dimension = function () {
var t = this.$element.hasClass('width');
return t ? 'width' : 'height'
},
n.prototype.show = function () {
if (!this.transitioning && !this.$element.hasClass('in')) {
var e,
i = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');
if (!(i && i.length && (e = i.data('bs.collapse'), e && e.transitioning))) {
var o = t.Event('show.bs.collapse');
if (this.$element.trigger(o), !o.isDefaultPrevented()) {
  i && i.length && (r.call(i, 'hide'), e || i.data('bs.collapse', null));
  var s = this.dimension();
  this.$element.removeClass('collapse').addClass('collapsing') [s](0).attr('aria-expanded', !0),
  this.$trigger.removeClass('collapsed').attr('aria-expanded', !0),
  this.transitioning = 1;
  var a = function () {
    this.$element.removeClass('collapsing').addClass('collapse in') [s](''),
    this.transitioning = 0,
    this.$element.trigger('shown.bs.collapse')
  };
  if (!t.support.transition) return a.call(this);
  var l = t.camelCase(['scroll',
  s].join('-'));
  this.$element.one('bsTransitionEnd', t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION) [s](this.$element[0][l])
}
}
}
},
n.prototype.hide = function () {
if (!this.transitioning && this.$element.hasClass('in')) {
var e = t.Event('hide.bs.collapse');
if (this.$element.trigger(e), !e.isDefaultPrevented()) {
var r = this.dimension();
this.$element[r](this.$element[r]()) [0].offsetHeight,
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', !1),
this.$trigger.addClass('collapsed').attr('aria-expanded', !1),
this.transitioning = 1;
var i = function () {
  this.transitioning = 0,
  this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')
};
return t.support.transition ? void this.$element[r](0).one('bsTransitionEnd', t.proxy(i, this)).emulateTransitionEnd(n.TRANSITION_DURATION)  : i.call(this)
}
}
},
n.prototype.toggle = function () {
this[this.$element.hasClass('in') ? 'hide' : 'show']()
},
n.prototype.getParent = function () {
return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (r, n) {
var i = t(n);
this.addAriaAndCollapsedClass(e(i), i)
}, this)).end()
},
n.prototype.addAriaAndCollapsedClass = function (t, e) {
var r = t.hasClass('in');
t.attr('aria-expanded', r),
e.toggleClass('collapsed', !r).attr('aria-expanded', r)
};
var i = t.fn.collapse;
t.fn.collapse = r,
t.fn.collapse.Constructor = n,
t.fn.collapse.noConflict = function () {
return t.fn.collapse = i,
this
},
t(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (n) {
var i = t(this);
i.attr('data-target') || n.preventDefault();
var o = e(i),
s = o.data('bs.collapse'),
a = s ? 'toggle' : i.data();
r.call(o, a)
})
}(jQuery),
+ function (t) {
'use strict';
function e(e) {
var r = e.attr('data-target');
r || (r = e.attr('href'), r = r && /#[A-Za-z]/.test(r) && r.replace(/.*(?=#[^\s]*$)/, ''));
var n = r && t(r);
return n && n.length ? n : e.parent()
}
function r(r) {
r && 3 === r.which || (t(i).remove(), t(o).each(function () {
var n = t(this),
i = e(n),
o = {
relatedTarget: this
};
i.hasClass('open') && (r && 'click' == r.type && /input|textarea/i.test(r.target.tagName) && t.contains(i[0], r.target) || (i.trigger(r = t.Event('hide.bs.dropdown', o)), r.isDefaultPrevented() || (n.attr('aria-expanded', 'false'), i.removeClass('open').trigger(t.Event('hidden.bs.dropdown', o)))))
}))
}
function n(e) {
return this.each(function () {
var r = t(this),
n = r.data('bs.dropdown');
n || r.data('bs.dropdown', n = new s(this)),
'string' == typeof e && n[e].call(r)
})
}
var i = '.dropdown-backdrop',
o = '[data-toggle="dropdown"]',
s = function (e) {
t(e).on('click.bs.dropdown', this.toggle)
};
s.VERSION = '3.3.7',
s.prototype.toggle = function (n) {
var i = t(this);
if (!i.is('.disabled, :disabled')) {
var o = e(i),
s = o.hasClass('open');
if (r(), !s) {
'ontouchstart' in document.documentElement && !o.closest('.navbar-nav').length && t(document.createElement('div')).addClass('dropdown-backdrop').insertAfter(t(this)).on('click', r);
var a = {
  relatedTarget: this
};
if (o.trigger(n = t.Event('show.bs.dropdown', a)), n.isDefaultPrevented()) return;
i.trigger('focus').attr('aria-expanded', 'true'),
o.toggleClass('open').trigger(t.Event('shown.bs.dropdown', a))
}
return !1
}
},
s.prototype.keydown = function (r) {
if (/(38|40|27|32)/.test(r.which) && !/input|textarea/i.test(r.target.tagName)) {
var n = t(this);
if (r.preventDefault(), r.stopPropagation(), !n.is('.disabled, :disabled')) {
var i = e(n),
s = i.hasClass('open');
if (!s && 27 != r.which || s && 27 == r.which) return 27 == r.which && i.find(o).trigger('focus'),
n.trigger('click');
var a = ' li:not(.disabled):visible a',
l = i.find('.dropdown-menu' + a);
if (l.length) {
  var u = l.index(r.target);
  38 == r.which && u > 0 && u--,
  40 == r.which && u < l.length - 1 && u++,
  ~u || (u = 0),
  l.eq(u).trigger('focus')
}
}
}
};
var a = t.fn.dropdown;
t.fn.dropdown = n,
t.fn.dropdown.Constructor = s,
t.fn.dropdown.noConflict = function () {
return t.fn.dropdown = a,
this
},
t(document).on('click.bs.dropdown.data-api', r).on('click.bs.dropdown.data-api', '.dropdown form', function (t) {
t.stopPropagation()
}).on('click.bs.dropdown.data-api', o, s.prototype.toggle).on('keydown.bs.dropdown.data-api', o, s.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', s.prototype.keydown)
}(jQuery),
+ function (t) {
'use strict';
function e(e) {
return this.each(function () {
var n = t(this),
i = n.data('bs.tooltip'),
o = 'object' == typeof e && e;
!i && /destroy|hide/.test(e) || (i || n.data('bs.tooltip', i = new r(this, o)), 'string' == typeof e && i[e]())
})
}
var r = function (t, e) {
this.type = null,
this.options = null,
this.enabled = null,
this.timeout = null,
this.hoverState = null,
this.$element = null,
this.inState = null,
this.init('tooltip', t, e)
};
r.VERSION = '3.3.7',
r.TRANSITION_DURATION = 150,
r.DEFAULTS = {
animation: !0,
placement: 'top',
selector: !1,
template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
trigger: 'hover focus',
title: '',
delay: 0,
html: !1,
container: !1,
viewport: {
selector: 'body',
padding: 0
}
},
r.prototype.init = function (e, r, n) {
if (this.enabled = !0, this.type = e, this.$element = t(r), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element)  : this.options.viewport.selector || this.options.viewport), this.inState = {
click: !1,
hover: !1,
focus: !1
}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
for (var i = this.options.trigger.split(' '), o = i.length; o--; ) {
var s = i[o];
if ('click' == s) this.$element.on('click.' + this.type, this.options.selector, t.proxy(this.toggle, this));
 else if ('manual' != s) {
var a = 'hover' == s ? 'mouseenter' : 'focusin',
l = 'hover' == s ? 'mouseleave' : 'focusout';
this.$element.on(a + '.' + this.type, this.options.selector, t.proxy(this.enter, this)),
this.$element.on(l + '.' + this.type, this.options.selector, t.proxy(this.leave, this))
}
}
this.options.selector ? this._options = t.extend({
}, this.options, {
trigger: 'manual',
selector: ''
})  : this.fixTitle()
},
r.prototype.getDefaults = function () {
return r.DEFAULTS
},
r.prototype.getOptions = function (e) {
return e = t.extend({
}, this.getDefaults(), this.$element.data(), e),
e.delay && 'number' == typeof e.delay && (e.delay = {
show: e.delay,
hide: e.delay
}),
e
},
r.prototype.getDelegateOptions = function () {
var e = {
},
r = this.getDefaults();
return this._options && t.each(this._options, function (t, n) {
r[t] != n && (e[t] = n)
}),
e
},
r.prototype.enter = function (e) {
var r = e instanceof this.constructor ? e : t(e.currentTarget).data('bs.' + this.type);
return r || (r = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data('bs.' + this.type, r)),
e instanceof t.Event && (r.inState['focusin' == e.type ? 'focus' : 'hover'] = !0),
r.tip().hasClass('in') || 'in' == r.hoverState ? void (r.hoverState = 'in')  : (clearTimeout(r.timeout), r.hoverState = 'in', r.options.delay && r.options.delay.show ? void (r.timeout = setTimeout(function () {
'in' == r.hoverState && r.show()
}, r.options.delay.show))  : r.show())
},
r.prototype.isInStateTrue = function () {
for (var t in this.inState) if (this.inState[t]) return !0;
return !1
},
r.prototype.leave = function (e) {
var r = e instanceof this.constructor ? e : t(e.currentTarget).data('bs.' + this.type);
if (r || (r = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data('bs.' + this.type, r)), e instanceof t.Event && (r.inState['focusout' == e.type ? 'focus' : 'hover'] = !1), !r.isInStateTrue()) return clearTimeout(r.timeout),
r.hoverState = 'out',
r.options.delay && r.options.delay.hide ? void (r.timeout = setTimeout(function () {
'out' == r.hoverState && r.hide()
}, r.options.delay.hide))  : r.hide()
},
r.prototype.show = function () {
var e = t.Event('show.bs.' + this.type);
if (this.hasContent() && this.enabled) {
this.$element.trigger(e);
var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
if (e.isDefaultPrevented() || !n) return;
var i = this,
o = this.tip(),
s = this.getUID(this.type);
this.setContent(),
o.attr('id', s),
this.$element.attr('aria-describedby', s),
this.options.animation && o.addClass('fade');
var a = 'function' == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0])  : this.options.placement,
l = /\s?auto?\s?/i,
u = l.test(a);
u && (a = a.replace(l, '') || 'top'),
o.detach().css({
top: 0,
left: 0,
display: 'block'
}).addClass(a).data('bs.' + this.type, this),
this.options.container ? o.appendTo(this.options.container)  : o.insertAfter(this.$element),
this.$element.trigger('inserted.bs.' + this.type);
var h = this.getPosition(),
c = o[0].offsetWidth,
p = o[0].offsetHeight;
if (u) {
var f = a,
d = this.getPosition(this.$viewport);
a = 'bottom' == a && h.bottom + p > d.bottom ? 'top' : 'top' == a && h.top - p < d.top ? 'bottom' : 'right' == a && h.right + c > d.width ? 'left' : 'left' == a && h.left - c < d.left ? 'right' : a,
o.removeClass(f).addClass(a)
}
var m = this.getCalculatedOffset(a, h, c, p);
this.applyPlacement(m, a);
var g = function () {
var t = i.hoverState;
i.$element.trigger('shown.bs.' + i.type),
i.hoverState = null,
'out' == t && i.leave(i)
};
t.support.transition && this.$tip.hasClass('fade') ? o.one('bsTransitionEnd', g).emulateTransitionEnd(r.TRANSITION_DURATION)  : g()
}
},
r.prototype.applyPlacement = function (e, r) {
var n = this.tip(),
i = n[0].offsetWidth,
o = n[0].offsetHeight,
s = parseInt(n.css('margin-top'), 10),
a = parseInt(n.css('margin-left'), 10);
isNaN(s) && (s = 0),
isNaN(a) && (a = 0),
e.top += s,
e.left += a,
t.offset.setOffset(n[0], t.extend({
using: function (t) {
n.css({
  top: Math.round(t.top),
  left: Math.round(t.left)
})
}
}, e), 0),
n.addClass('in');
var l = n[0].offsetWidth,
u = n[0].offsetHeight;
'top' == r && u != o && (e.top = e.top + o - u);
var h = this.getViewportAdjustedDelta(r, e, l, u);
h.left ? e.left += h.left : e.top += h.top;
var c = /top|bottom/.test(r),
p = c ? 2 * h.left - i + l : 2 * h.top - o + u,
f = c ? 'offsetWidth' : 'offsetHeight';
n.offset(e),
this.replaceArrow(p, n[0][f], c)
},
r.prototype.replaceArrow = function (t, e, r) {
this.arrow().css(r ? 'left' : 'top', 50 * (1 - t / e) + '%').css(r ? 'top' : 'left', '')
},
r.prototype.setContent = function () {
var t = this.tip(),
e = this.getTitle();
t.find('.tooltip-inner') [this.options.html ? 'html' : 'text'](e),
t.removeClass('fade in top bottom left right')
},
r.prototype.hide = function (e) {
function n() {
'in' != i.hoverState && o.detach(),
i.$element && i.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + i.type),
e && e()
}
var i = this,
o = t(this.$tip),
s = t.Event('hide.bs.' + this.type);
if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass('in'),
t.support.transition && o.hasClass('fade') ? o.one('bsTransitionEnd', n).emulateTransitionEnd(r.TRANSITION_DURATION)  : n(),
this.hoverState = null,
this
},
r.prototype.fixTitle = function () {
var t = this.$element;
(t.attr('title') || 'string' != typeof t.attr('data-original-title')) && t.attr('data-original-title', t.attr('title') || '').attr('title', '')
},
r.prototype.hasContent = function () {
return this.getTitle()
},
r.prototype.getPosition = function (e) {
e = e || this.$element;
var r = e[0],
n = 'BODY' == r.tagName,
i = r.getBoundingClientRect();
null == i.width && (i = t.extend({
}, i, {
width: i.right - i.left,
height: i.bottom - i.top
}));
var o = window.SVGElement && r instanceof window.SVGElement,
s = n ? {
top: 0,
left: 0
}
 : o ? null : e.offset(),
a = {
scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
},
l = n ? {
width: t(window).width(),
height: t(window).height()
}
 : null;
return t.extend({
}, i, a, l, s)
},
r.prototype.getCalculatedOffset = function (t, e, r, n) {
return 'bottom' == t ? {
top: e.top + e.height,
left: e.left + e.width / 2 - r / 2
}
 : 'top' == t ? {
top: e.top - n,
left: e.left + e.width / 2 - r / 2
}
 : 'left' == t ? {
top: e.top + e.height / 2 - n / 2,
left: e.left - r
}
 : {
top: e.top + e.height / 2 - n / 2,
left: e.left + e.width
}
},
r.prototype.getViewportAdjustedDelta = function (t, e, r, n) {
var i = {
top: 0,
left: 0
};
if (!this.$viewport) return i;
var o = this.options.viewport && this.options.viewport.padding || 0,
s = this.getPosition(this.$viewport);
if (/right|left/.test(t)) {
var a = e.top - o - s.scroll,
l = e.top + o - s.scroll + n;
a < s.top ? i.top = s.top - a : l > s.top + s.height && (i.top = s.top + s.height - l)
} else {
var u = e.left - o,
h = e.left + o + r;
u < s.left ? i.left = s.left - u : h > s.right && (i.left = s.left + s.width - h)
}
return i
},
r.prototype.getTitle = function () {
var t,
e = this.$element,
r = this.options;
return t = e.attr('data-original-title') || ('function' == typeof r.title ? r.title.call(e[0])  : r.title)
},
r.prototype.getUID = function (t) {
do t += ~~(1000000 * Math.random());
while (document.getElementById(t));
return t
},
r.prototype.tip = function () {
if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
return this.$tip
},
r.prototype.arrow = function () {
return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
},
r.prototype.enable = function () {
this.enabled = !0
},
r.prototype.disable = function () {
this.enabled = !1
},
r.prototype.toggleEnabled = function () {
this.enabled = !this.enabled
},
r.prototype.toggle = function (e) {
var r = this;
e && (r = t(e.currentTarget).data('bs.' + this.type), r || (r = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data('bs.' + this.type, r))),
e ? (r.inState.click = !r.inState.click, r.isInStateTrue() ? r.enter(r)  : r.leave(r))  : r.tip().hasClass('in') ? r.leave(r)  : r.enter(r)
},
r.prototype.destroy = function () {
var t = this;
clearTimeout(this.timeout),
this.hide(function () {
t.$element.off('.' + t.type).removeData('bs.' + t.type),
t.$tip && t.$tip.detach(),
t.$tip = null,
t.$arrow = null,
t.$viewport = null,
t.$element = null
})
};
var n = t.fn.tooltip;
t.fn.tooltip = e,
t.fn.tooltip.Constructor = r,
t.fn.tooltip.noConflict = function () {
return t.fn.tooltip = n,
this
}
}(jQuery),
+ function (t) {
'use strict';
function e(e) {
return this.each(function () {
var n = t(this),
i = n.data('bs.tab');
i || n.data('bs.tab', i = new r(this)),
'string' == typeof e && i[e]()
})
}
var r = function (e) {
this.element = t(e)
};
r.VERSION = '3.3.7',
r.TRANSITION_DURATION = 150,
r.prototype.show = function () {
var e = this.element,
r = e.closest('ul:not(.dropdown-menu)'),
n = e.data('target');
if (n || (n = e.attr('href'), n = n && n.replace(/.*(?=#[^\s]*$)/, '')), !e.parent('li').hasClass('active')) {
var i = r.find('.active:last a'),
o = t.Event('hide.bs.tab', {
relatedTarget: e[0]
}),
s = t.Event('show.bs.tab', {
relatedTarget: i[0]
});
if (i.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
var a = t(n);
this.activate(e.closest('li'), r),
this.activate(a, a.parent(), function () {
  i.trigger({
    type: 'hidden.bs.tab',
    relatedTarget: e[0]
  }),
  e.trigger({
    type: 'shown.bs.tab',
    relatedTarget: i[0]
  })
})
}
}
},
r.prototype.activate = function (e, n, i) {
function o() {
s.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !1),
e.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', !0),
a ? (e[0].offsetWidth, e.addClass('in'))  : e.removeClass('fade'),
e.parent('.dropdown-menu').length && e.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !0),
i && i()
}
var s = n.find('> .active'),
a = i && t.support.transition && (s.length && s.hasClass('fade') || !!n.find('> .fade').length);
s.length && a ? s.one('bsTransitionEnd', o).emulateTransitionEnd(r.TRANSITION_DURATION)  : o(),
s.removeClass('in')
};
var n = t.fn.tab;
t.fn.tab = e,
t.fn.tab.Constructor = r,
t.fn.tab.noConflict = function () {
return t.fn.tab = n,
this
};
var i = function (r) {
r.preventDefault(),
e.call(t(this), 'show')
};
t(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', i).on('click.bs.tab.data-api', '[data-toggle="pill"]', i)
}(jQuery),
function (t, e) {
function r(t, e) {
return Object.prototype.hasOwnProperty.call(t, e)
}
function n(t) {
return 'undefined' == typeof t
}
var i = {
},
o = t.TraceKit,
s = [
].slice,
a = '?';
i.noConflict = function () {
return t.TraceKit = o,
i
},
i.wrap = function (t) {
function e() {
try {
return t.apply(this, arguments)
} catch (t) {
throw i.report(t),
t
}
}
return e
},
i.report = function () {
function e(t) {
l(),
p.push(t)
}
function n(t) {
for (var e = p.length - 1; e >= 0; --e) p[e] === t && p.splice(e, 1)
}
function o(t, e) {
var n = null;
if (!e || i.collectWindowErrors) {
for (var o in p) if (r(p, o)) try {
  p[o].apply(null, [
    t
  ].concat(s.call(arguments, 2)))
} catch (t) {
  n = t
}
if (n) throw n
}
}
function a(t, e, r, n, s) {
var a = null;
if (s) a = i.computeStackTrace(s);
 else if (d) i.computeStackTrace.augmentStackTraceWithInitialElement(d, e, r, t),
a = d,
d = null,
f = null;
 else {
var l = {
  url: e,
  line: r,
  column: n
};
l.func = i.computeStackTrace.guessFunctionName(l.url, l.line),
l.context = i.computeStackTrace.gatherContext(l.url, l.line),
a = {
  mode: 'onerror',
  message: t,
  url: document.location.href,
  stack: [
    l
  ],
  useragent: navigator.userAgent
}
}
return o(a, 'from window.onerror'),
!!h && h.apply(this, arguments)
}
function l() {
c !== !0 && (h = t.onerror, t.onerror = a, c = !0)
}
function u(e) {
var r = s.call(arguments, 1);
if (d) {
if (f === e) return;
var n = d;
d = null,
f = null,
o.apply(null, [
  n,
  null
].concat(r))
}
var a = i.computeStackTrace(e);
throw d = a,
f = e,
t.setTimeout(function () {
f === e && (d = null, f = null, o.apply(null, [
  a,
  null
].concat(r)))
}, a.incomplete ? 2000 : 0),
e
}
var h,
c,
p = [
],
f = null,
d = null;
return u.subscribe = e,
u.unsubscribe = n,
u
}(),
i.computeStackTrace = function () {
function e(e) {
if ('string' != typeof e) return [];
if (!i.remoteFetching) return '';
try {
var r = function () {
  try {
    return new t.XMLHttpRequest
  } catch (e) {
    return new t.ActiveXObject('Microsoft.XMLHTTP')
  }
},
n = r();
return n.open('GET', e, !1),
n.send(''),
n.responseText
} catch (t) {
return ''
}
}
function o(t) {
if (!r(w, t)) {
var n = '';
t = t || '',
t.indexOf && t.indexOf(document.domain) !== - 1 && (n = e(t)),
w[t] = n ? n.split('\n')  : [
]
}
return w[t]
}
function s(t, e) {
var r,
i = /function ([^(]*)\(([^)]*)\)/,
s = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
l = '',
u = 10,
h = o(t);
if (!h.length) return a;
for (var c = 0; c < u; ++c) if (l = h[e - c] + l, !n(l)) {
if (r = s.exec(l)) return r[1];
if (r = i.exec(l)) return r[1]
}
return a
}
function l(t, e) {
var r = o(t);
if (!r.length) return null;
var s = [
],
a = Math.floor(i.linesOfContext / 2),
l = a + i.linesOfContext % 2,
u = Math.max(0, e - a - 1),
h = Math.min(r.length, e + l - 1);
e -= 1;
for (var c = u; c < h; ++c) n(r[c]) || s.push(r[c]);
return s.length > 0 ? s : null
}
function u(t) {
return t.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, '\\$&')
}
function h(t) {
return u(t).replace('<', '(?:<|&lt;)').replace('>', '(?:>|&gt;)').replace('&', '(?:&|&amp;)').replace('"', '(?:"|&quot;)').replace(/\s+/g, '\\s+')
}
function c(t, e) {
for (var r, n, i = 0, s = e.length; i < s; ++i) if ((r = o(e[i])).length && (r = r.join('\n'), n = t.exec(r))) return {
url: e[i],
line: r.substring(0, n.index).split('\n').length,
column: n.index - r.lastIndexOf('\n', n.index) - 1
};
return null
}
function p(t, e, r) {
var n,
i = o(e),
s = new RegExp('\\b' + u(t) + '\\b');
return r -= 1,
i && i.length > r && (n = s.exec(i[r])) ? n.index : null
}
function f(e) {
for (var r, n, i, o, s = [
t.location.href
], a = document.getElementsByTagName('script'), l = '' + e, p = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, f = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, d = 0; d < a.length; ++d) {
var m = a[d];
m.src && s.push(m.src)
}
if (i = p.exec(l)) {
var g = i[1] ? '\\s+' + i[1] : '',
y = i[2].split(',').join('\\s*,\\s*');
r = u(i[3]).replace(/;$/, ';?'),
n = new RegExp('function' + g + '\\s*\\(\\s*' + y + '\\s*\\)\\s*{\\s*' + r + '\\s*}')
} else n = new RegExp(u(l).replace(/\s+/g, '\\s+'));
if (o = c(n, s)) return o;
if (i = f.exec(l)) {
var v = i[1];
if (r = h(i[2]), n = new RegExp('on' + v + '=[\\\'"]\\s*' + r + '\\s*[\\\'"]', 'i'), o = c(n, s[0])) return o;
if (n = new RegExp(r), o = c(n, s)) return o
}
return null
}
function d(t) {
if (!t.stack) return null;
for (var e, r, n = /^\s*at (.*?) ?\(?((?:file|http|https|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/i, i = /^\s*(.*?)(?:\((.*?)\))?@?((?:file|http|https|chrome):.*?):(\d+)(?::(\d+))?\s*$/i, o = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i, u = t.stack.split('\n'), h = [
], c = /^(.*) is undefined$/.exec(t.message), f = 0, d = u.length; f < d; ++f) {
if (e = i.exec(u[f])) r = {
  url: e[3],
  func: e[1] || a,
  args: e[2] ? e[2].split(',')  : '',
  line: + e[4],
  column: e[5] ? + e[5] : null
};
 else if (e = n.exec(u[f])) r = {
  url: e[2],
  func: e[1] || a,
  line: + e[3],
  column: e[4] ? + e[4] : null
};
 else {
  if (!(e = o.exec(u[f]))) continue;
  r = {
    url: e[2],
    func: e[1] || a,
    line: + e[3],
    column: e[4] ? + e[4] : null
  }
}
!r.func && r.line && (r.func = s(r.url, r.line)),
r.line && (r.context = l(r.url, r.line)),
h.push(r)
}
return h[0] && h[0].line && !h[0].column && c ? h[0].column = p(c[1], h[0].url, h[0].line)  : h[0].column || 'undefined' == typeof t.columnNumber || (h[0].column = t.columnNumber + 1),
h.length ? {
mode: 'stack',
name: t.name,
message: t.message,
url: document.location.href,
stack: h,
useragent: navigator.userAgent
}
 : null
}
function m(t) {
for (var e, r = t.stacktrace, n = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i, i = null !== r ? r.split('\n')  : r, o = [
], a = 0, u = i.length; a < u; a += 2) if (e = n.exec(i[a])) {
var h = {
  line: + e[1],
  column: + e[2],
  func: e[3] || e[4],
  args: e[5] ? e[5].split(',')  : [
  ],
  url: e[6]
};
if (!h.func && h.line && (h.func = s(h.url, h.line)), h.line) try {
  h.context = l(h.url, h.line)
} catch (t) {
}
h.context || (h.context = [
  i[a + 1]
]),
o.push(h)
}
return o.length ? {
mode: 'stacktrace',
name: t.name,
message: t.message,
url: document.location.href,
stack: o,
useragent: navigator.userAgent
}
 : null
}
function g(e) {
var n = e.message.split('\n');
if (n.length < 4) return null;
var i,
a,
u,
p,
f = /^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,
d = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,
m = /^\s*Line (\d+) of function script\s*$/i,
g = [
],
y = document.getElementsByTagName('script'),
v = [
];
for (a in y) r(y, a) && !y[a].src && v.push(y[a]);
for (a = 2, u = n.length; a < u; a += 2) {
var _ = null;
if (i = f.exec(n[a])) _ = {
  url: i[2],
  func: i[3],
  line: + i[1]
};
 else if (i = d.exec(n[a])) {
  _ = {
    url: i[3],
    func: i[4]
  };
  var x = + i[1],
  b = v[i[2] - 1];
  if (b && (p = o(_.url))) {
    p = p.join('\n');
    var w = p.indexOf(b.innerText);
    w >= 0 && (_.line = x + p.substring(0, w).split('\n').length)
  }
} else if (i = m.exec(n[a])) {
  var T = t.location.href.replace(/#.*$/, ''),
  S = i[1],
  C = new RegExp(h(n[a + 1]));
  p = c(C, [
    T
  ]),
  _ = {
    url: T,
    line: p ? p.line : S,
    func: ''
  }
}
if (_) {
  _.func || (_.func = s(_.url, _.line));
  var M = l(_.url, _.line),
  R = M ? M[Math.floor(M.length / 2)] : null;
  M && R.replace(/^\s*/, '') === n[a + 1].replace(/^\s*/, '') ? _.context = M : _.context = [
    n[a + 1]
  ],
  g.push(_)
}
}
return g.length ? {
mode: 'multiline',
name: e.name,
message: n[0],
url: document.location.href,
stack: g,
useragent: navigator.userAgent
}
 : null
}
function y(t, e, r, n) {
var i = {
url: e,
line: r
};
if (i.url && i.line) {
t.incomplete = !1,
i.func || (i.func = s(i.url, i.line)),
i.context || (i.context = l(i.url, i.line));
var o = / '([^']+)' /.exec(n);
if (o && (i.column = p(o[1], i.url, i.line)), t.stack.length > 0 && t.stack[0].url === i.url) {
  if (t.stack[0].line === i.line) return !1;
  if (!t.stack[0].line && t.stack[0].func === i.func) return t.stack[0].line = i.line,
  t.stack[0].context = i.context,
  !1
}
return t.stack.unshift(i),
t.partial = !0,
!0
}
return t.incomplete = !0,
!1
}
function v(t, e) {
for (var r, n, o, l = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, u = [
], h = {
}, c = !1, d = v.caller; d && !c; d = d.caller) if (d !== _ && d !== i.report) {
if (n = {
  url: null,
  func: a,
  line: null,
  column: null
}, d.name ? n.func = d.name : (r = l.exec(d.toString())) && (n.func = r[1]), 'undefined' == typeof n.func) try {
  n.func = r.input.substring(0, r.input.indexOf('{'))
} catch (t) {
}
if (o = f(d)) {
  n.url = o.url,
  n.line = o.line,
  n.func === a && (n.func = s(n.url, n.line));
  var m = / '([^']+)' /.exec(t.message || t.description);
  m && (n.column = p(m[1], o.url, o.line))
}
h['' + d] ? c = !0 : h['' + d] = !0,
u.push(n)
}
e && u.splice(0, e);
var g = {
mode: 'callers',
name: t.name,
message: t.message,
url: document.location.href,
stack: u,
useragent: navigator.userAgent
};
return y(g, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description),
g
}
function _(t, e) {
var r = null;
e = null == e ? 0 : + e;
try {
if (r = m(t)) return r
} catch (t) {
if (b) throw t
}
try {
if (r = d(t)) return r
} catch (t) {
if (b) throw t
}
try {
if (r = g(t)) return r
} catch (t) {
if (b) throw t
}
try {
if (r = v(t, e + 1)) return r
} catch (t) {
if (b) throw t
}
return {
mode: 'failed'
}
}
function x(t) {
t = (null == t ? 0 : + t) + 1;
try {
throw new Error
} catch (e) {
return _(e, t + 1)
}
}
var b = !1,
w = {
};
return _.augmentStackTraceWithInitialElement = y,
_.guessFunctionName = s,
_.gatherContext = l,
_.ofCaller = x,
_
}(),
i.extendToAsynchronousCallbacks = function () {
var e = function (e) {
var r = t[e];
t[e] = function () {
var t = s.call(arguments),
e = t[0];
return 'function' == typeof e && (t[0] = i.wrap(e)),
r.apply ? r.apply(this, t)  : r(t[0], t[1])
}
};
e('setTimeout'),
e('setInterval')
},
i.remoteFetching || (i.remoteFetching = !0),
i.collectWindowErrors || (i.collectWindowErrors = !0),
(!i.linesOfContext || i.linesOfContext < 1) && (i.linesOfContext = 11),
t.TraceKit = i
}(window);
var raygunFactory = function (t, e, r) {
function n(t) {
var e = t,
r = t.split('//') [1];
if (r) {
var n = r.indexOf('?'),
i = r.toString().substring(0, n),
o = i.split('/').slice(0, 4).join('/'),
s = i.substring(0, 48);
e = o.length < s.length ? o : s,
e !== i && (e += '..')
}
return e
}
function i(t, e, i, o) {
var s = 'AJAX Error: ' + (e.statusText || 'unknown') + ' ' + (i.type || 'unknown') + ' ' + (n(i.url) || 'unknown');
(!L || 0 !== e.status && e.getAllResponseHeaders()) && tt.send(o || t.type, {
status: e.status,
statusText: e.statusText,
type: i.type,
url: i.url,
ajaxErrorMessage: s,
contentType: i.contentType,
requestData: i.data && i.data.slice ? i.data.slice(0, 10240)  : r,
responseData: e.responseText && e.responseText.slice ? e.responseText.slice(0, 10240)  : r,
activeTarget: t.target && t.target.activeElement && t.target.activeElement.outerHTML && t.target.activeElement.outerHTML.slice ? t.target.activeElement.outerHTML.slice(0, 10240)  : r
})
}
function o() {
return !(!T || '' === T) || (et.log('Raygun API key has not been configured, make sure you call Raygun.init(yourApiKey)'), !1)
}
function s(t, e) {
var r,
n = {
};
for (r in t) n[r] = t[r];
for (r in e) n[r] = e[r];
return n
}
function a(t, e) {
return null != e ? t.concat(e)  : t
}
function l(t, e) {
for (var r = 0; r < t.length; r++) e.call(null, r, t[r])
}
function u(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return !0
}
function h() {
return Math.floor(9007199254740992 * Math.random())
}
function c() {
var e = document.documentElement,
r = document.getElementsByTagName('body') [0],
n = t.innerWidth || e.clientWidth || r.clientWidth,
i = t.innerHeight || e.clientHeight || r.clientHeight;
return {
width: n,
height: i
}
}
function p(t, e) {
var r = (new Date).toJSON();
try {
var n = 'raygunjs=' + r + '=' + h();
'undefined' == typeof localStorage[n] && (localStorage[n] = JSON.stringify({
url: t,
data: e
}))
} catch (t) {
et.log('Raygun4JS: LocalStorage full, cannot save exception')
}
}
function f() {
try {
return 'localStorage' in t && null !== t.localStorage
} catch (t) {
return !1
}
}
function d() {
if (f() && localStorage && localStorage.length > 0) for (var t in localStorage) if ('raygunjs=' === t.substring(0, 9)) try {
var e = JSON.parse(localStorage[t]);
w(e.url, e.data),
localStorage.removeItem(t)
} catch (t) {
et.log('Raygun4JS: Unable to send saved error')
}
}
function m(t) {
'function' == typeof D && D(t)
}
function g() {
if (!S && !H) {
var t,
e = 'raygun4js-userid',
r = et.readCookie(e);
r ? t = r : (t = et.getUuid(), et.createCookie(e, t, 744)),
tt.setUser(t, !0, null, null, null, t)
}
}
function y(t, e) {
if (M) for (var r = 0; r < M.length; r++) if ('object' == typeof M[r] && 'function' == typeof M[r].exec) {
if (null !== M[r].exec(t)) return '[removed by filter]'
} else if (M[r] === t) return '[removed by filter]';
return e
}
function v(t, e) {
if (null == t) return t;
if ('[object Object]' !== Object.prototype.toString.call(t)) return t;
var r = {
};
for (var n in t) {
var i = t[n];
'[object Object]' === Object.prototype.toString.call(i) ? 'Details' !== e || 'Client' !== n ? r[n] = v(y(n, i), n)  : r[n] = i : '[object Function]' !== Object.prototype.toString.call(i) && ('undefined' != typeof e ? r[n] = y(n, i)  : 'OccurredOn' === n && (r[n] = i))
}
return r
}
function _(e, n) {
var i = [
],
o = {
};
if (B) {
if (!e.stack || !e.stack.length) return void et.log('Raygun4JS: Cancelling send due to null stacktrace');
var s = et.parseUrl('domain'),
a = 'Script error',
h = e.message || n.status || a;
if (h.substring(0, a.length) === a && null !== e.stack[0].url && e.stack[0].url.indexOf(s) === - 1 && (0 === e.stack[0].line || '?' === e.stack[0].func)) return void et.log('Raygun4JS: cancelling send due to third-party script error with no stacktrace and message');
if (null !== e.stack[0].url && e.stack[0].url.indexOf(s) === - 1) {
var p = !1;
for (var f in z) e.stack[0].url.indexOf(z[f]) > - 1 && (p = !0);
if (!p) return void et.log('Raygun4JS: cancelling send due to error on non-origin, non-whitelisted domain')
}
}
if (X instanceof Array) for (var d in X) if (X.hasOwnProperty(d) && t.location.hostname && t.location.hostname.match(X[d])) return void et.log('Raygun4JS: cancelling send as error originates from an excluded hostname');
if ($ instanceof Array) for (var m in $) if ($.hasOwnProperty(m) && navigator.userAgent.match($[m])) return void et.log('Raygun4JS: cancelling send as error originates from an excluded user agent');
e.stack && e.stack.length && l(e.stack, function (t, e) {
i.push({
LineNumber: e.line,
ColumnNumber: e.column,
ClassName: 'line ' + e.line + ', column ' + e.column,
FileName: e.url,
MethodName: e.func || '[anonymous]'
})
});
var g = et.parseUrl('?');
g.length > 0 && l(g.split('&'), function (t, e) {
var r = e.split('=');
if (r && 2 === r.length) {
var n = decodeURIComponent(r[0]),
i = y(n, r[1]);
o[n] = i
}
}),
n === r && (n = {
}),
u(n.customData) && ('function' == typeof q ? n.customData = q()  : n.customData = q),
u(n.tags) && ('function' == typeof W ? n.tags = W()  : n.tags = W);
var _,
b = t.screen || {
width: c().width,
height: c().height,
colorDepth: 8
},
w = n.customData && n.customData.ajaxErrorMessage;
_ = 'customData' === Z ? v(n.customData, 'UserCustomData')  : n.customData;
try {
JSON.stringify(_)
} catch (t) {
var T = 'Cannot add custom data; may contain circular reference';
_ = {
error: T
},
et.log('Raygun4JS: ' + T)
}
var M = w || e.message || n.status || 'Script error';
M && 'string' == typeof M && (M = M.substring(0, 512));
var P = {
OccurredOn: new Date,
Details: {
Error: {
  ClassName: e.name,
  Message: M,
  StackTrace: i
},
Environment: {
  UtcOffset: (new Date).getTimezoneOffset() / - 60,
  'User-Language': navigator.userLanguage,
  'Document-Mode': document.documentMode,
  'Browser-Width': c().width,
  'Browser-Height': c().height,
  'Screen-Width': b.width,
  'Screen-Height': b.height,
  'Color-Depth': b.colorDepth,
  Browser: navigator.appCodeName,
  'Browser-Name': navigator.appName,
  'Browser-Version': navigator.appVersion,
  Platform: navigator.platform
},
Client: {
  Name: 'raygun-js',
  Version: '2.4.0'
},
UserCustomData: _,
Tags: n.tags,
Request: {
  Url: [
    location.protocol,
    '//',
    location.host,
    location.pathname,
    location.hash
  ].join(''),
  QueryString: o,
  Headers: {
    'User-Agent': navigator.userAgent,
    Referer: document.referrer,
    Host: document.domain
  }
},
Version: C || 'Not supplied'
}
};
if (P.Details.User = S, 'all' === Z && (P = v(P)), 'function' == typeof k && (et.log('Raygun4JS: calling custom grouping key'), P.Details.GroupingKey = k(P, e, n)), 'function' == typeof R) {
var D = R(P);
D && x(D)
} else x(P)
}
function x(t) {
if (o()) {
et.log('Sending exception data to Raygun:', t);
var e = V + '/entries?apikey=' + encodeURIComponent(T);
w(e, JSON.stringify(t))
}
}
function b(e, r) {
var n;
return n = new t.XMLHttpRequest,
'withCredentials' in n ? n.open(e, r, !0)  : t.XDomainRequest && (I && (r = r.slice(6)), n = new t.XDomainRequest, n.open(e, r)),
n.timeout = 10000,
n
}
function w(e, r) {
var n = b('POST', e, r);
return 'function' == typeof P && P(n),
'withCredentials' in n ? (n.onreadystatechange = function () {
4 === n.readyState && (202 === n.status ? d()  : U && 403 !== n.status && 400 !== n.status && 429 !== n.status && p(e, r))
}, n.onload = function () {
et.log('posted to Raygun'),
m(this)
})  : t.XDomainRequest && (n.ontimeout = function () {
U && (et.log('Raygun: saved locally'), p(e, r))
}, n.onload = function () {
et.log('posted to Raygun'),
d(),
m(this)
}),
n.onerror = function () {
et.log('failed to post to Raygun'),
m(this)
},
n ? void n.send(r)  : void et.log('CORS not supported')
}
var T,
S,
C,
M,
R,
k,
P,
D,
A,
E = TraceKit,
O = t.Raygun,
N = !1,
I = !1,
L = !1,
F = !1,
U = !1,
B = !1,
H = !1,
j = !1,
Y = !0,
G = !1,
q = {
},
W = [
],
z = [
],
V = 'https://api.raygun.io',
X = null,
$ = null,
Z = 'customData',
J = null,
Q = null,
K = !0,
tt = {
noConflict: function () {
return t.Raygun = O,
tt
},
constructNewRaygun: function () {
var e = t.raygunFactory(t, t.jQuery);
return t.raygunJsUrlFactory(t, e),
e
},
init: function (n, i, o) {
if (T = n, E.remoteFetching = !1, o && (q = o), e && (A = e(document)), i && (I = i.allowInsecureSubmissions || !1, L = i.ignoreAjaxAbort || !1, F = i.ignoreAjaxError || !1, H = i.disableAnonymousUserTracking || !1, j = i.disableErrorTracking || !1, Y = i.disablePulse === r || i.disablePulse, X = i.excludedHostnames || !1, $ = i.excludedUserAgents || !1, Q = i.pulseMaxVirtualPageDuration || null, K = i.pulseIgnoreUrlCasing || !1, i.apiUrl && (V = i.apiUrl), 'undefined' != typeof i.wrapAsynchronousCallbacks && (G = i.wrapAsynchronousCallbacks), i.debugMode && (N = i.debugMode), i.ignore3rdPartyErrors && (B = !0), i.apiEndpoint && (V = i.apiEndpoint)), g(), tt.RealUserMonitoring !== r && !Y) {
var s = function () {
  J = new tt.RealUserMonitoring(T, V, w, S, C, X, $, N, Q, K),
  J.attach()
};
i && 'onLoad' === i.from ? s()  : t.addEventListener ? t.addEventListener('load', s)  : t.attachEvent('onload', s)
}
return d(),
tt
},
withCustomData: function (t) {
return q = t,
tt
},
withTags: function (t) {
return W = t,
tt
},
attach: function () {
return !o() || j ? tt : (t.RaygunObject && t[t.RaygunObject] && t[t.RaygunObject].q && (t.onerror = null), E.report.subscribe(_), G && E.extendToAsynchronousCallbacks(), A && A.ajaxError && !F && A.ajaxError(i), tt)
},
detach: function () {
return E.report.unsubscribe(_),
A && A.unbind('ajaxError', i),
tt
},
send: function (t, e, r) {
if (j) return et.log('Error not sent due to disabled error tracking'),
tt;
try {
_(E.computeStackTrace(t), {
  customData: 'function' == typeof q ? s(q(), e)  : s(q, e),
  tags: 'function' == typeof W ? a(W(), r)  : a(W, r)
})
} catch (e) {
if (t !== e) throw e
}
return tt
},
setUser: function (t, e, n, i, o, s) {
return S = {
Identifier: t
},
'boolean' == typeof e && (S.IsAnonymous = e),
n && (S.Email = n),
i && (S.FullName = i),
o && (S.FirstName = o),
s && (S.UUID = s),
J !== r && null !== J && J.setUser(S),
tt
},
resetAnonymousUser: function () {
et.clearCookie('raygun4js-userid')
},
setVersion: function (t) {
return C = t,
tt
},
saveIfOffline: function (t) {
return 'undefined' != typeof t && 'boolean' == typeof t && (U = t),
tt
},
filterSensitiveData: function (t) {
return M = t,
tt
},
setFilterScope: function (t) {
return 'customData' !== t && 'all' !== t || (Z = t),
tt
},
whitelistCrossOriginDomains: function (t) {
return z = t,
tt
},
onBeforeSend: function (t) {
return R = t,
tt
},
groupingKey: function (t) {
return k = t,
tt
},
onBeforeXHR: function (t) {
return P = t,
tt
},
onAfterSend: function (t) {
return D = t,
tt
},
endSession: function () {
tt.RealUserMonitoring !== r && J && J.endSession()
},
trackEvent: function (t, e) {
tt.RealUserMonitoring !== r && J && 'pageView' === t && e.path && J.virtualPageLoaded(e.path)
}
},
et = tt._private = tt._private || {
},
rt = tt._seal = tt._seal || function () {
delete tt._private,
delete tt._seal,
delete tt._unseal
},
nt = tt._unseal = tt._unseal || function () {
tt._private = et,
tt._seal = rt,
tt._unseal = nt
};
return et.getUuid = function () {
function t(t) {
var e = (Math.random().toString(16) + '000000000').substr(2, 8);
return t ? '-' + e.substr(0, 4) + '-' + e.substr(4, 4)  : e
}
return t() + t(!0) + t(!0) + t()
},
et.createCookie = function (t, e, r) {
var n;
if (r) {
var i = new Date;
i.setTime(i.getTime() + 60 * r * 60 * 1000),
n = '; expires=' + i.toGMTString()
} else n = '';
document.cookie = t + '=' + e + n + '; path=/'
},
et.readCookie = function (t) {
for (var e = t + '=', r = document.cookie.split(';'), n = 0; n < r.length; n++) {
for (var i = r[n]; ' ' === i.charAt(0); ) i = i.substring(1, i.length);
if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
}
return null
},
et.clearCookie = function (t) {
et.createCookie(t, '', - 1)
},
et.log = function (e, r) {
t.console && t.console.log && N && (t.console.log(e), r && t.console.log(r))
},
t.Raygun || (t.Raygun = tt),
Date.prototype.toISOString || !function () {
function t(t) {
var e = String(t);
return 1 === e.length && (e = '0' + e),
e
}
Date.prototype.toISOString = function () {
return this.getUTCFullYear() + '-' + t(this.getUTCMonth() + 1) + '-' + t(this.getUTCDate()) + 'T' + t(this.getUTCHours()) + ':' + t(this.getUTCMinutes()) + ':' + t(this.getUTCSeconds()) + '.' + String((this.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) + 'Z'
}
}(),
Function.prototype.bind || (Function.prototype.bind = function (t) {
if ('function' != typeof this) throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
var e = Array.prototype.slice.call(arguments, 1),
r = this,
n = function () {
},
i = function () {
return r.apply(this instanceof n && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
};
return n.prototype = this.prototype,
i.prototype = new n,
i
}),
tt
};
window.__instantiatedRaygun = raygunFactory(window, window.jQuery);
var raygunRumFactory = function (t, e, r) {
r.RealUserMonitoring = function (e, r, n, i, o, s, a, l, u, h) {
function c(t) {
var e = encodeURIComponent(t).match(/%[89ABab]/g);
return t.length + (e ? e.length : 0)
}
function p(t) {
var e = m(P.cookieName),
r = null === e,
n = 'string' == typeof exisitingCookie && e.length > 0 && e.indexOf('timestamp') === - 1,
i = null;
if (!r && !n) {
var o = new Date(d(e, 'timestamp')),
s = new Date(new Date - 1800000);
i = o < s
}
if (r || n || i) P.sessionId = R(32),
f(P.cookieName, P.sessionId),
t(!0);
 else {
var a = m(P.cookieName),
l = d(a, 'id');
'undefined' === l ? (P.sessionId = R(32), f(P.cookieName, P.sessionId), t(!0))  : (P.sessionId = l, t(!1))
}
}
function f(t, e, r) {
var n,
i;
if (r) {
var o = new Date;
o.setTime(o.getTime() + 60 * r * 60 * 1000),
n = '; expires=' + o.toGMTString()
} else n = '';
i = (new Date).toISOString(),
document.cookie = t + '=id|' + e + '&timestamp|' + i + n + '; path=/'
}
function d(t, e) {
var r = t.split(/[|&]/);
return 'id' === e ? r[1] : 'timestamp' === e ? r[3] : void 0
}
function m(t) {
for (var e = t + '=', r = document.cookie.split(';'), n = 0; n < r.length; n++) {
for (var i = r[n]; ' ' === i.charAt(0); ) i = i.substring(1, i.length);
if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
}
return null
}
function g() {
var t,
e = m(P.cookieName);
if (e) {
var r = new Date(d(e, 'timestamp')),
n = new Date(new Date - 1800000);
t = r < n
} else t = !0;
t && (P.sessionId = R(32)),
f(P.cookieName, P.sessionId),
t && P.pageLoaded(!0)
}
function y(t) {
return Math.min(t, 300000)
}
function v(t) {
for (var e in t) isNaN(t[e]) && 'string' != typeof t[e] && (t[e] = 0);
return t
}
function _(e, r) {
var n;
return n = 'object' == typeof t.performance && 'function' == typeof t.performance.now ? t.performance.now()  : 0,
{
t: 'v',
du: Math.min(P.maxVirtualPageDuration, n - (e || r)),
o: Math.min(P.maxVirtualPageDuration, n - r)
}
}
function x(t, e) {
var r = {
du: t.duration,
t: 'p'
};
return r.a = e + t.fetchStart,
t.domainLookupStart && t.domainLookupStart > 0 && (r.b = e + t.domainLookupStart - r.a),
t.domainLookupEnd && t.domainLookupEnd > 0 && (r.c = e + t.domainLookupEnd - r.a),
t.connectStart && t.connectStart > 0 && (r.d = e + t.connectStart - r.a),
t.connectEnd && t.connectEnd > 0 && (r.e = e + t.connectEnd - r.a),
t.responseStart && t.responseStart > 0 && (r.f = e + t.responseStart - r.a),
t.responseEnd && t.responseEnd > 0 && (r.g = e + t.responseEnd - r.a),
t.domLoading && t.domLoading > 0 && (r.h = e + t.domLoading - r.a),
t.domInteractive && t.domInteractive > 0 && (r.i = e + t.domInteractive - r.a),
t.domContentLoadedEventEnd && t.domContentLoadedEventEnd > 0 && (r.j = e + t.domContentLoadedEventEnd - r.a),
t.domComplete && t.domComplete > 0 && (r.k = y(e + t.domComplete - r.a)),
t.loadEventStart && t.loadEventStart > 0 && (r.l = e + t.loadEventStart - r.a),
t.loadEventEnd && t.loadEventEnd > 0 && (r.m = e + t.loadEventEnd - r.a),
t.secureConnectionStart && t.secureConnectionStart > 0 && (r.n = e + (t.secureConnectionStart - t.connectStart) - r.a),
r = v(r)
}
function b(t, e) {
var r = {
du: y(t.duration).toFixed(2),
t: 'xmlhttprequest' === t.initiatorType ? 'x' : 0 === t.duration ? 'e' : 'c',
a: (e + t.fetchStart).toFixed(2)
};
return t.domainLookupStart && t.domainLookupStart > 0 && (r.b = e + t.domainLookupStart - r.a),
t.domainLookupEnd && t.domainLookupEnd > 0 && (r.c = e + t.domainLookupEnd - r.a),
t.connectStart && t.connectStart > 0 && (r.d = e + t.connectStart - r.a),
t.connectEnd && t.connectEnd > 0 && (r.e = e + t.connectEnd - r.a),
t.responseStart && t.responseStart > 0 && (r.f = e + t.responseStart - r.a),
t.responseEnd && t.responseEnd > 0 && (r.g = e + t.responseEnd - r.a),
t.secureConnectionStart && t.secureConnectionStart > 0 && (r.n = e + (t.secureConnectionStart - t.connectStart) - r.a),
r = v(r)
}
function w() {
var e = t.location.pathname;
return P.ignoreUrlCasing && (e = e.toLowerCase()),
{
url: t.location.protocol + '//' + t.location.host + e,
userAgent: navigator.userAgent,
timing: x(t.performance.timing, 0),
size: 0
}
}
function T(e, r, n) {
return P.ignoreUrlCasing && (e = e.toLowerCase()),
{
url: t.location.protocol + '//' + t.location.host + e,
userAgent: navigator.userAgent,
timing: _(r, n),
size: 0
}
}
function S(e, r) {
var n = e.name.split('?') [0];
return P.ignoreUrlCasing && (n = n.toLowerCase()),
{
url: n,
timing: b(e, r ? 0 : t.performance.timing.navigationStart),
size: e.decodedBodySize || 0
}
}
function C(e, r) {
if (void 0 !== t.performance && t.performance.getEntries) try {
for (var n = t.performance.getEntries(), i = P.offset; i < n.length; i++) {
  var o = n[i].name.split('?') [0];
  0 !== o.indexOf(P.apiUrl) && (o.indexOf('favicon.ico') > 0 || 0 !== o.indexOf('about:blank') && ('j' === o[0] && 1 === o.indexOf('avascript:') || 0 !== o.indexOf('chrome-extension://') && 0 !== o.indexOf('res://') && 0 !== o.indexOf('file://') && e.push(S(n[i], r))))
}
P.offset = n.length
} catch (t) {
}
}
function M(e, r, n) {
if (void 0 === t.performance || void 0 === t.performance.timing || void 0 === t.performance.timing.fetchStart || isNaN(t.performance.timing.fetchStart)) return null;
var i = [
];
if (r && (n && i.push(w()), C(i)), e) {
P.pendingVirtualPage && (i.push(P.pendingVirtualPage), C(i, !0));
var o = null == P.pendingVirtualPage;
if (P.pendingVirtualPage = T(e, P.previousVirtualPageLoadTimestamp, P.initalStaticPageLoadTimestamp), !o && i.length > 0) return i
}
return i
}
function R(t) {
return Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1)
}
function k(e, r) {
t.console && t.console.log && P.debugMode && (t.console.log(e), r && t.console.log(r))
}
var P = this,
D = {
};
this.cookieName = 'raygun4js-sid',
this.apiKey = e,
this.apiUrl = r,
this.debugMode = l,
this.excludedHostNames = s,
this.excludedUserAgents = a,
this.maxVirtualPageDuration = u || 1800000,
this.ignoreUrlCasing = h,
this.makePostCorsRequest = function (e, r) {
if (P.excludedUserAgents instanceof Array) for (var i in P.excludedUserAgents) if (P.excludedUserAgents.hasOwnProperty(i) && navigator.userAgent.match(P.excludedUserAgents[i])) return void (P.debugMode && k('Raygun4JS: cancelling send as error originates from an excluded user agent'));
if (P.excludedHostNames instanceof Array) for (var o in P.excludedHostNames) if (P.excludedHostNames.hasOwnProperty(o) && t.location.hostname && t.location.hostname.match(P.excludedHostNames[o])) return void k('Raygun4JS: cancelling send as error originates from an excluded hostname');
n(e, r)
},
this.sessionId = null,
this.virtualPage = null,
this.user = i,
this.version = o,
this.heartBeatInterval = null,
this.offset = 0,
this.attach = function () {
p(function (t) {
P.pageLoaded(t)
});
var e = function () {
this.updateCookieTimestamp()
}.bind(D),
r = function () {
var t = [
];
if (C(t), P.pendingVirtualPage && (t.push(P.pendingVirtualPage), C(t, !0)), t.length > 0) {
  var e = {
    eventData: [
      {
        sessionId: P.sessionId,
        timestamp: (new Date).toISOString(),
        type: 'web_request_timing',
        user: P.user,
        version: P.version || 'Not supplied',
        device: navigator.userAgent,
        data: JSON.stringify(t)
      }
    ]
  };
  P.makePostCorsRequest(P.apiUrl + '/events?apikey=' + encodeURIComponent(P.apiKey), JSON.stringify(e))
}
},
n = function () {
'visible' === document.visibilityState && this.updateCookieTimestamp()
}.bind(D);
t.addEventListener ? (t.addEventListener('click', e), document.addEventListener('visibilitychange', n), t.addEventListener('beforeunload', r))  : t.attachEvent && document.attachEvent('onclick', e)
},
this.pageLoaded = function (e) {
if (e) {
var r = {
  eventData: [
    {
      sessionId: P.sessionId,
      timestamp: (new Date).toISOString(),
      type: 'session_start',
      user: P.user,
      version: P.version || 'Not supplied',
      device: navigator.userAgent
    }
  ]
};
P.makePostCorsRequest(P.apiUrl + '/events?apikey=' + encodeURIComponent(P.apiKey), JSON.stringify(r))
}
P.sendPerformance(!0, !0),
P.heartBeat(),
'object' == typeof t.performance && 'function' == typeof t.performance.now ? P.initalStaticPageLoadTimestamp = t.performance.now()  : P.initalStaticPageLoadTimestamp = 0
},
this.setUser = function (t) {
P.user = t
},
this.endSession = function () {
var t = {
eventData: [
  {
    sessionId: P.sessionId,
    timestamp: (new Date).toISOString(),
    type: 'session_end'
  }
]
};
P.makePostCorsRequest(P.apiUrl + '/events?apikey=' + encodeURIComponent(P.apiKey), JSON.stringify(t))
},
this.heartBeat = function () {
P.heartBeatInterval = setInterval(function () {
var t,
e = [
];
if (C(e, P.virtualPage), e.length > 0) {
  var r = JSON.stringify(e);
  c(r) < 128000 && (t = {
    eventData: [
      {
        sessionId: P.sessionId,
        timestamp: (new Date).toISOString(),
        type: 'web_request_timing',
        user: P.user,
        version: P.version || 'Not supplied',
        device: navigator.userAgent,
        data: r
      }
    ]
  })
}
void 0 !== t && P.makePostCorsRequest(P.apiUrl + '/events?apikey=' + encodeURIComponent(P.apiKey), JSON.stringify(t))
}, 30000)
},
this.virtualPageLoaded = function (e) {
var r = null == this.virtualPage;
'string' == typeof e && (e.length > 0 && '/' !== e[0] && (e += '/'), this.virtualPage = e),
r ? this.sendPerformance(!0, !1)  : this.sendPerformance(!1, !1),
'string' == typeof e && ('object' == typeof t.performance && 'function' == typeof t.performance.now ? this.previousVirtualPageLoadTimestamp = t.performance.now()  : this.previousVirtualPageLoadTimestamp = 0)
},
this.sendPerformance = function (t, e) {
var r = M(this.virtualPage, t, e);
if (null !== r) {
var n = {
  eventData: [
    {
      sessionId: P.sessionId,
      timestamp: (new Date).toISOString(),
      type: 'web_request_timing',
      user: P.user,
      version: P.version || 'Not supplied',
      device: navigator.userAgent,
      data: JSON.stringify(r)
    }
  ]
};
P.makePostCorsRequest(P.apiUrl + '/events?apikey=' + encodeURIComponent(P.apiKey), JSON.stringify(n))
}
},
D.updateCookieTimestamp = g
}
};
raygunRumFactory(window, window.jQuery, window.__instantiatedRaygun);
var raygunJsUrlFactory = function (t, e) {
e._private.parseUrl = function (e, r) {
function n(t) {
return !isNaN(parseFloat(t)) && isFinite(t)
}
return function (e, r) {
var i = r || t.location.toString();
if (!e) return i;
e = e.toString(),
'//' === i.substring(0, 2) ? i = 'http:' + i : 1 === i.split('://').length && (i = 'http://' + i),
r = i.split('/');
var o = {
auth: ''
},
s = r[2].split('@');
1 === s.length ? s = s[0].split(':')  : (o.auth = s[0], s = s[1].split(':')),
o.protocol = r[0],
o.hostname = s[0],
o.port = s[1] || ('https' === o.protocol.split(':') [0].toLowerCase() ? '443' : '80'),
o.pathname = (r.length > 3 ? '/' : '') + r.slice(3, r.length).join('/').split('?') [0].split('#') [0];
var a = o.pathname;
'/' === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
var l = o.hostname,
u = l.split('.'),
h = a.split('/');
if ('hostname' === e) return l;
if ('domain' === e) return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(l) ? l : u.slice( - 2).join('.');
if ('sub' === e) return u.slice(0, u.length - 2).join('.');
if ('port' === e) return o.port;
if ('protocol' === e) return o.protocol.split(':') [0];
if ('auth' === e) return o.auth;
if ('user' === e) return o.auth.split(':') [0];
if ('pass' === e) return o.auth.split(':') [1] || '';
if ('path' === e) return o.pathname;
if ('.' === e.charAt(0)) {
if (e = e.substring(1), n(e)) return e = parseInt(e, 10),
u[e < 0 ? u.length + e : e - 1] || ''
} else {
if (n(e)) return e = parseInt(e, 10),
h[e < 0 ? h.length + e : e] || '';
if ('file' === e) return h.slice( - 1) [0];
if ('filename' === e) return h.slice( - 1) [0].split('.') [0];
if ('fileext' === e) return h.slice( - 1) [0].split('.') [1] || '';
if ('?' === e.charAt(0) || '#' === e.charAt(0)) {
  var c = i,
  p = null;
  if ('?' === e.charAt(0) ? c = (c.split('?') [1] || '').split('#') [0] : '#' === e.charAt(0) && (c = c.split('#') [1] || ''), !e.charAt(1)) return c;
  e = e.substring(1),
  c = c.split('&');
  for (var f = 0, d = c.length; f < d; f++) if (p = c[f].split('='), p[0] === e) return p[1] || '';
  return null
}
}
return ''
}(e, r)
}
};
raygunJsUrlFactory(window, window.__instantiatedRaygun),
window.__instantiatedRaygun._seal(),
function (t, e) {
if (t.RaygunObject && t[t.RaygunObject]) {
var r,
n,
i,
o,
s,
a,
l = t[t.RaygunObject].o,
u = !1,
h = [
],
c = [
'function (b,c,d,f,g){',
'||(g=new Error(b)),a[e].q=a[e].q||[]'
];
r = t[t.RaygunObject].q;
var p = e,
f = [
'trackEvent',
'send'
],
d = function (t) {
for (var e in l) {
var r = l[e];
r && (f.indexOf(r[0]) === - 1 ? m(r)  : t && h.push(r))
}
},
m = function (t) {
var e = t[0],
r = t[1];
if (e) switch (e) {
case 'noConflict':
  a = r;
  break;
case 'apiKey':
  n = r,
  u = !0;
  break;
case 'options':
  i = r;
  break;
case 'attach':
case 'enableCrashReporting':
  o = r,
  u = !0;
  break;
case 'enablePulse':
  s = r,
  u = !0;
  break;
case 'detach':
  p.detach();
  break;
case 'getRaygunInstance':
  return p;
case 'setUser':
  p.setUser(r.identifier, r.isAnonymous, r.email, r.fullName, r.firstName, r.uuid);
  break;
case 'onBeforeSend':
  p.onBeforeSend(r);
  break;
case 'onBeforeXHR':
  p.onBeforeXHR(r);
  break;
case 'onAfterSend':
  p.onAfterSend(r);
  break;
case 'withCustomData':
  p.withCustomData(r);
  break;
case 'withTags':
  p.withTags(r);
  break;
case 'setVersion':
  p.setVersion(r);
  break;
case 'filterSensitiveData':
  p.filterSensitiveData(r);
  break;
case 'setFilterScope':
  p.setFilterScope(r);
  break;
case 'whitelistCrossOriginDomains':
  p.whitelistCrossOriginDomains(r);
  break;
case 'saveIfOffline':
  'boolean' == typeof r && p.saveIfOffline(r);
  break;
case 'groupingKey':
  p.groupingKey(r);
  break;
case 'send':
  var l,
  h,
  c;
  r.error ? (l = r.error, r.tags && (h = r.tags), r.customData && (c = r.customData))  : l = r,
  p.send(l, c, h);
  break;
case 'trackEvent':
  r.type && r.path && p.trackEvent(r.type, {
    path: r.path
  })
}
};
d(!0);
var g = function () {
if (u || d(!1), a && (p = e.noConflict()), n && (i || (i = {
}), s && (i.disablePulse = !1), i.from = 'onLoad', p.init(n, i, null)), o) {
p.attach(),
r = t[t.RaygunObject].q;
for (var l in r) p.send(r[l].e, {
  handler: 'From Raygun4JS snippet global error handler'
})
} else if ('function' == typeof t.onerror) {
var f = t.onerror.toString();
f.indexOf(c[0]) !== - 1 && f.indexOf(c[1]) !== - 1 && (t.onerror = null)
}
for (var g in h) m(h[g]);
h = [
],
t[t.RaygunObject] = function () {
return m(arguments)
},
t[t.RaygunObject].q = r
};
'complete' === document.readyState ? g()  : t.addEventListener ? t.addEventListener('load', g)  : t.attachEvent('onload', g)
}
}(window, window.__instantiatedRaygun);
try {
delete window.__instantiatedRaygun
} catch (t) {
window.__instantiatedRaygun = void 0
}
var _gsScope = 'undefined' != typeof module && module.exports && 'undefined' != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [
])).push(function () {
'use strict';
_gsScope._gsDefine('TweenMax', [
'core.Animation',
'core.SimpleTimeline',
'TweenLite'
], function (t, e, r) {
var n = function (t) {
var e,
r = [
],
n = t.length;
for (e = 0; e !== n; r.push(t[e++]));
return r
},
i = function (t, e, r) {
var n,
i,
o = t.cycle;
for (n in o) i = o[n],
t[n] = 'function' == typeof i ? i(r, e[r])  : i[r % i.length];
delete t.cycle
},
o = function (t, e, n) {
r.call(this, t, e, n),
this._cycle = 0,
this._yoyo = this.vars.yoyo === !0,
this._repeat = this.vars.repeat || 0,
this._repeatDelay = this.vars.repeatDelay || 0,
this._dirty = !0,
this.render = o.prototype.render
},
s = 1e-10,
a = r._internals,
l = a.isSelector,
u = a.isArray,
h = o.prototype = r.to({
}, 0.1, {
}),
c = [
];
o.version = '1.19.0',
h.constructor = o,
h.kill()._gc = !1,
o.killTweensOf = o.killDelayedCallsTo = r.killTweensOf,
o.getTweensOf = r.getTweensOf,
o.lagSmoothing = r.lagSmoothing,
o.ticker = r.ticker,
o.render = r.render,
h.invalidate = function () {
return this._yoyo = this.vars.yoyo === !0,
this._repeat = this.vars.repeat || 0,
this._repeatDelay = this.vars.repeatDelay || 0,
this._uncache(!0),
r.prototype.invalidate.call(this)
},
h.updateTo = function (t, e) {
var n,
i = this.ratio,
o = this.vars.immediateRender || t.immediateRender;
e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1)  : this._timeline.insert(this, this._startTime - this._delay));
for (n in t) this.vars[n] = t[n];
if (this._initted || o) if (e) this._initted = !1,
o && this.render(0, !0, !0);
 else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && r._onPluginEvent('_onDisable', this), this._time / this._duration > 0.998) {
var s = this._totalTime;
this.render(0, !0, !1),
this._initted = !1,
this.render(s, !0, !1)
} else if (this._initted = !1, this._init(), this._time > 0 || o) for (var a, l = 1 / (1 - i), u = this._firstPT; u; ) a = u.s + u.c,
u.c *= l,
u.s = a - u.c,
u = u._next;
return this
},
h.render = function (t, e, r) {
this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
var n,
i,
o,
l,
u,
h,
c,
p,
f = this._dirty ? this.totalDuration()  : this._totalDuration,
d = this._time,
m = this._totalTime,
g = this._cycle,
y = this._duration,
v = this._rawPrevTime;
if (t >= f - 1e-7 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0)  : 0)  : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1)  : 1), this._reversed || (n = !0, i = 'onComplete', r = r || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (t = 0), (v < 0 || t <= 0 && t >= - 1e-7 || v === s && 'isPause' !== this.data) && v !== t && (r = !0, v > s && (i = 'onReverseComplete')), this._rawPrevTime = p = !e || t || v === t ? t : s))  : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0)  : 0, (0 !== m || 0 === y && v > 0) && (i = 'onReverseComplete', n = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || r) && (v >= 0 && (r = !0), this._rawPrevTime = p = !e || t || v === t ? t : s)), this._initted || (r = !0))  : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / y, h = this._easeType, c = this._easePower, (1 === h || 3 === h && u >= 0.5) && (u = 1 - u), 3 === h && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), 1 === h ? this.ratio = 1 - u : 2 === h ? this.ratio = u : this._time / y < 0.5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2)  : this.ratio = this._ease.getRatio(this._time / y)), d === this._time && !r && g === this._cycle) return void (m !== this._totalTime && this._onUpdate && (e || this._callback('onUpdate')));
if (!this._initted) {
if (this._init(), !this._initted || this._gc) return;
if (!r && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d,
this._totalTime = m,
this._rawPrevTime = v,
this._cycle = g,
a.lazyTweens.push(this),
void (this._lazy = [
  t,
  e
]);
this._time && !n ? this.ratio = this._ease.getRatio(this._time / y)  : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
}
for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, r)  : i || (i = '_dummyGS')), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback('onStart'))), o = this._firstPT; o; ) o.f ? o.t[o.p](o.c * this.ratio + o.s)  : o.t[o.p] = o.c * this.ratio + o.s,
o = o._next;
this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, r), e || (this._totalTime !== m || i) && this._callback('onUpdate')),
this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback('onRepeat')),
i && (this._gc && !r || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, r), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[i] && this._callback(i), 0 === y && this._rawPrevTime === s && p !== s && (this._rawPrevTime = 0)))
},
o.to = function (t, e, r) {
return new o(t, e, r)
},
o.from = function (t, e, r) {
return r.runBackwards = !0,
r.immediateRender = 0 != r.immediateRender,
new o(t, e, r)
},
o.fromTo = function (t, e, r, n) {
return n.startAt = r,
n.immediateRender = 0 != n.immediateRender && 0 != r.immediateRender,
new o(t, e, n)
},
o.staggerTo = o.allTo = function (t, e, s, a, h, p, f) {
a = a || 0;
var d,
m,
g,
y,
v = 0,
_ = [
],
x = function () {
s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments),
h.apply(f || s.callbackScope || this, p || c)
},
b = s.cycle,
w = s.startAt && s.startAt.cycle;
for (u(t) || ('string' == typeof t && (t = r.selector(t) || t), l(t) && (t = n(t))), t = t || [
], a < 0 && (t = n(t), t.reverse(), a *= - 1), d = t.length - 1, g = 0; g <= d; g++) {
m = {
};
for (y in s) m[y] = s[y];
if (b && (i(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), w) {
  w = m.startAt = {
  };
  for (y in s.startAt) w[y] = s.startAt[y];
  i(m.startAt, t, g)
}
m.delay = v + (m.delay || 0),
g === d && h && (m.onComplete = x),
_[g] = new o(t[g], e, m),
v += a
}
return _
},
o.staggerFrom = o.allFrom = function (t, e, r, n, i, s, a) {
return r.runBackwards = !0,
r.immediateRender = 0 != r.immediateRender,
o.staggerTo(t, e, r, n, i, s, a)
},
o.staggerFromTo = o.allFromTo = function (t, e, r, n, i, s, a, l) {
return n.startAt = r,
n.immediateRender = 0 != n.immediateRender && 0 != r.immediateRender,
o.staggerTo(t, e, n, i, s, a, l)
},
o.delayedCall = function (t, e, r, n, i) {
return new o(e, 0, {
delay: t,
onComplete: e,
onCompleteParams: r,
callbackScope: n,
onReverseComplete: e,
onReverseCompleteParams: r,
immediateRender: !1,
useFrames: i,
overwrite: 0
})
},
o.set = function (t, e) {
return new o(t, 0, e)
},
o.isTweening = function (t) {
return r.getTweensOf(t, !0).length > 0
};
var p = function (t, e) {
for (var n = [
], i = 0, o = t._first; o; ) o instanceof r ? n[i++] = o : (e && (n[i++] = o), n = n.concat(p(o, e)), i = n.length),
o = o._next;
return n
},
f = o.getAllTweens = function (e) {
return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
};
o.killAll = function (t, r, n, i) {
null == r && (r = !0),
null == n && (n = !0);
var o,
s,
a,
l = f(0 != i),
u = l.length,
h = r && n && i;
for (a = 0; a < u; a++) s = l[a],
(h || s instanceof e || (o = s.target === s.vars.onComplete) && n || r && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration())  : s._enabled(!1, !1))
},
o.killChildTweensOf = function (t, e) {
if (null != t) {
var i,
s,
h,
c,
p,
f = a.tweenLookup;
if ('string' == typeof t && (t = r.selector(t) || t), l(t) && (t = n(t)), u(t)) for (c = t.length; --c > - 1; ) o.killChildTweensOf(t[c], e);
 else {
  i = [
  ];
  for (h in f) for (s = f[h].target.parentNode; s; ) s === t && (i = i.concat(f[h].tweens)),
  s = s.parentNode;
  for (p = i.length, c = 0; c < p; c++) e && i[c].totalTime(i[c].totalDuration()),
  i[c]._enabled(!1, !1)
}
}
};
var d = function (t, r, n, i) {
r = r !== !1,
n = n !== !1,
i = i !== !1;
for (var o, s, a = f(i), l = r && n && i, u = a.length; --u > - 1; ) s = a[u],
(l || s instanceof e || (o = s.target === s.vars.onComplete) && n || r && !o) && s.paused(t)
};
return o.pauseAll = function (t, e, r) {
d(!0, t, e, r)
},
o.resumeAll = function (t, e, r) {
d(!1, t, e, r)
},
o.globalTimeScale = function (e) {
var n = t._rootTimeline,
i = r.ticker.time;
return arguments.length ? (e = e || s, n._startTime = i - (i - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, i = r.ticker.frame, n._startTime = i - (i - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e)  : n._timeScale
},
h.progress = function (t, e) {
return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e)  : this._time / this.duration()
},
h.totalProgress = function (t, e) {
return arguments.length ? this.totalTime(this.totalDuration() * t, e)  : this._totalTime / this.totalDuration()
},
h.time = function (t, e) {
return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)  : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e))  : this._time
},
h.duration = function (e) {
return arguments.length ? t.prototype.duration.call(this, e)  : this._duration
},
h.totalDuration = function (t) {
return arguments.length ? this._repeat === - 1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))  : (this._dirty && (this._totalDuration = this._repeat === - 1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
},
h.repeat = function (t) {
return arguments.length ? (this._repeat = t, this._uncache(!0))  : this._repeat
},
h.repeatDelay = function (t) {
return arguments.length ? (this._repeatDelay = t, this._uncache(!0))  : this._repeatDelay
},
h.yoyo = function (t) {
return arguments.length ? (this._yoyo = t, this)  : this._yoyo
},
o
}, !0),
_gsScope._gsDefine('TimelineLite', [
'core.Animation',
'core.SimpleTimeline',
'TweenLite'
], function (t, e, r) {
var n = function (t) {
e.call(this, t),
this._labels = {
},
this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
this.smoothChildTiming = this.vars.smoothChildTiming === !0,
this._sortChildren = !0,
this._onUpdate = this.vars.onUpdate;
var r,
n,
i = this.vars;
for (n in i) r = i[n],
l(r) && r.join('').indexOf('{self}') !== - 1 && (i[n] = this._swapSelfInParams(r));
l(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
},
i = 1e-10,
o = r._internals,
s = n._internals = {
},
a = o.isSelector,
l = o.isArray,
u = o.lazyTweens,
h = o.lazyRender,
c = _gsScope._gsDefine.globals,
p = function (t) {
var e,
r = {
};
for (e in t) r[e] = t[e];
return r
},
f = function (t, e, r) {
var n,
i,
o = t.cycle;
for (n in o) i = o[n],
t[n] = 'function' == typeof i ? i.call(e[r], r)  : i[r % i.length];
delete t.cycle
},
d = s.pauseCallback = function () {
},
m = function (t) {
var e,
r = [
],
n = t.length;
for (e = 0; e !== n; r.push(t[e++]));
return r
},
g = n.prototype = new e;
return n.version = '1.19.0',
g.constructor = n,
g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
g.to = function (t, e, n, i) {
var o = n.repeat && c.TweenMax || r;
return e ? this.add(new o(t, e, n), i)  : this.set(t, n, i)
},
g.from = function (t, e, n, i) {
return this.add((n.repeat && c.TweenMax || r).from(t, e, n), i)
},
g.fromTo = function (t, e, n, i, o) {
var s = i.repeat && c.TweenMax || r;
return e ? this.add(s.fromTo(t, e, n, i), o)  : this.set(t, i, o)
},
g.staggerTo = function (t, e, i, o, s, l, u, h) {
var c,
d,
g = new n({
onComplete: l,
onCompleteParams: u,
callbackScope: h,
smoothChildTiming: this.smoothChildTiming
}),
y = i.cycle;
for ('string' == typeof t && (t = r.selector(t) || t), t = t || [
], a(t) && (t = m(t)), o = o || 0, o < 0 && (t = m(t), t.reverse(), o *= - 1), d = 0; d < t.length; d++) c = p(i),
c.startAt && (c.startAt = p(c.startAt), c.startAt.cycle && f(c.startAt, t, d)),
y && (f(c, t, d), null != c.duration && (e = c.duration, delete c.duration)),
g.to(t[d], e, c, d * o);
return this.add(g, s)
},
g.staggerFrom = function (t, e, r, n, i, o, s, a) {
return r.immediateRender = 0 != r.immediateRender,
r.runBackwards = !0,
this.staggerTo(t, e, r, n, i, o, s, a)
},
g.staggerFromTo = function (t, e, r, n, i, o, s, a, l) {
return n.startAt = r,
n.immediateRender = 0 != n.immediateRender && 0 != r.immediateRender,
this.staggerTo(t, e, n, i, o, s, a, l)
},
g.call = function (t, e, n, i) {
return this.add(r.delayedCall(0, t, e, n), i)
},
g.set = function (t, e, n) {
return n = this._parseTimeOrLabel(n, 0, !0),
null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
this.add(new r(t, 0, e), n)
},
n.exportRoot = function (t, e) {
t = t || {
},
null == t.smoothChildTiming && (t.smoothChildTiming = !0);
var i,
o,
s = new n(t),
a = s._timeline;
for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, i = a._first; i; ) o = i._next,
e && i instanceof r && i.target === i.vars.onComplete || s.add(i, i._startTime - i._delay),
i = o;
return a.add(s, 0),
s
},
g.add = function (i, o, s, a) {
var u,
h,
c,
p,
f,
d;
if ('number' != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, i)), !(i instanceof t)) {
if (i instanceof Array || i && i.push && l(i)) {
  for (s = s || 'normal', a = a || 0, u = o, h = i.length, c = 0; c < h; c++) l(p = i[c]) && (p = new n({
    tweens: p
  })),
  this.add(p, u),
  'string' != typeof p && 'function' != typeof p && ('sequence' === s ? u = p._startTime + p.totalDuration() / p._timeScale : 'start' === s && (p._startTime -= p.delay())),
  u += a;
  return this._uncache(!0)
}
if ('string' == typeof i) return this.addLabel(i, o);
if ('function' != typeof i) throw 'Cannot add ' + i + ' into the timeline; it is not a tween, timeline, function, or string.';
i = r.delayedCall(0, i)
}
if (e.prototype.add.call(this, i, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (f = this, d = f.rawTime() > i._startTime; f._timeline; ) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0)  : f._gc && f._enabled(!0, !1),
f = f._timeline;
return this
},
g.remove = function (e) {
if (e instanceof t) {
this._remove(e, !1);
var r = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
return e._startTime = (e._paused ? e._pauseTime : r._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
this
}
if (e instanceof Array || e && e.push && l(e)) {
for (var n = e.length; --n > - 1; ) this.remove(e[n]);
return this
}
return 'string' == typeof e ? this.removeLabel(e)  : this.kill(null, e)
},
g._remove = function (t, r) {
e.prototype._remove.call(this, t, r);
var n = this._last;
return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration)  : this._time = this._totalTime = this._duration = this._totalDuration = 0,
this
},
g.append = function (t, e) {
return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
},
g.insert = g.insertMultiple = function (t, e, r, n) {
return this.add(t, e || 0, r, n)
},
g.appendMultiple = function (t, e, r, n) {
return this.add(t, this._parseTimeOrLabel(null, e, !0, t), r, n)
},
g.addLabel = function (t, e) {
return this._labels[t] = this._parseTimeOrLabel(e),
this
},
g.addPause = function (t, e, n, i) {
var o = r.delayedCall(0, d, n, i || this);
return o.vars.onComplete = o.vars.onReverseComplete = e,
o.data = 'isPause',
this._hasPause = !0,
this.add(o, t)
},
g.removeLabel = function (t) {
return delete this._labels[t],
this
},
g.getLabelTime = function (t) {
return null != this._labels[t] ? this._labels[t] : - 1
},
g._parseTimeOrLabel = function (e, r, n, i) {
var o;
if (i instanceof t && i.timeline === this) this.remove(i);
 else if (i && (i instanceof Array || i.push && l(i))) for (o = i.length; --o > - 1; ) i[o] instanceof t && i[o].timeline === this && this.remove(i[o]);
if ('string' == typeof r) return this._parseTimeOrLabel(r, n && 'number' == typeof e && null == this._labels[r] ? e - this.duration()  : 0, n);
if (r = r || 0, 'string' != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
 else {
if (o = e.indexOf('='), o === - 1) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + r : r : this._labels[e] + r;
r = parseInt(e.charAt(o - 1) + '1', 10) * Number(e.substr(o + 1)),
e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n)  : this.duration()
}
return Number(e) + r
},
g.seek = function (t, e) {
return this.totalTime('number' == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
},
g.stop = function () {
return this.paused(!0)
},
g.gotoAndPlay = function (t, e) {
return this.play(t, e)
},
g.gotoAndStop = function (t, e) {
return this.pause(t, e)
},
g.render = function (t, e, r) {
this._gc && this._enabled(!0, !1);
var n,
o,
s,
a,
l,
c,
p,
f = this._dirty ? this.totalDuration()  : this._totalDuration,
d = this._time,
m = this._startTime,
g = this._timeScale,
y = this._paused;
if (t >= f - 1e-7) this._totalTime = this._time = f,
this._reversed || this._hasPausedChild() || (o = !0, a = 'onComplete', l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= - 1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === i) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > i && (a = 'onReverseComplete'))),
this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : i,
t = f + 0.0001;
 else if (t < 1e-7) if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== i && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = 'onReverseComplete', o = this._reversed), t < 0) this._active = !1,
this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, a = 'onReverseComplete')  : this._rawPrevTime >= 0 && this._first && (l = !0),
this._rawPrevTime = t;
 else {
if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : i, 0 === t && o) for (n = this._first; n && 0 === n._startTime; ) n._duration || (o = !1),
n = n._next;
t = 0,
this._initted || (l = !0)
} else {
if (this._hasPause && !this._forcingPlayhead && !e) {
  if (t >= d) for (n = this._first; n && n._startTime <= t && !c; ) n._duration || 'isPause' !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n),
  n = n._next;
   else for (n = this._last; n && n._startTime >= t && !c; ) n._duration || 'isPause' === n.data && n._rawPrevTime > 0 && (c = n),
  n = n._prev;
  c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
}
this._totalTime = this._time = this._rawPrevTime = t
}
if (this._time !== d && this._first || r || l || c) {
if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback('onStart')), p = this._time, p >= d) for (n = this._first; n && (s = n._next, p === this._time && (!this._paused || y)); ) (n._active || n._startTime <= p && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration()  : n._totalDuration) - (t - n._startTime) * n._timeScale, e, r)  : n.render((t - n._startTime) * n._timeScale, e, r)),
n = s;
 else for (n = this._last; n && (s = n._prev, p === this._time && (!this._paused || y)); ) {
  if (n._active || n._startTime <= d && !n._paused && !n._gc) {
    if (c === n) {
      for (c = n._prev; c && c.endTime() > this._time; ) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, r),
      c = c._prev;
      c = null,
      this.pause()
    }
    n._reversed ? n.render((n._dirty ? n.totalDuration()  : n._totalDuration) - (t - n._startTime) * n._timeScale, e, r)  : n.render((t - n._startTime) * n._timeScale, e, r)
  }
  n = s
}
this._onUpdate && (e || (u.length && h(), this._callback('onUpdate'))),
a && (this._gc || m !== this._startTime && g === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (o && (u.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
}
},
g._hasPausedChild = function () {
for (var t = this._first; t; ) {
if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
t = t._next
}
return !1
},
g.getChildren = function (t, e, n, i) {
i = i || - 9999999999;
for (var o = [
], s = this._first, a = 0; s; ) s._startTime < i || (s instanceof r ? e !== !1 && (o[a++] = s)  : (n !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))),
s = s._next;
return o
},
g.getTweensOf = function (t, e) {
var n,
i,
o = this._gc,
s = [
],
a = 0;
for (o && this._enabled(!0, !0), n = r.getTweensOf(t), i = n.length; --i > - 1; ) (n[i].timeline === this || e && this._contains(n[i])) && (s[a++] = n[i]);
return o && this._enabled(!1, !0),
s
},
g.recent = function () {
return this._recent
},
g._contains = function (t) {
for (var e = t.timeline; e; ) {
if (e === this) return !0;
e = e.timeline
}
return !1
},
g.shiftChildren = function (t, e, r) {
r = r || 0;
for (var n, i = this._first, o = this._labels; i; ) i._startTime >= r && (i._startTime += t),
i = i._next;
if (e) for (n in o) o[n] >= r && (o[n] += t);
return this._uncache(!0)
},
g._kill = function (t, e) {
if (!t && !e) return this._enabled(!1, !1);
for (var r = e ? this.getTweensOf(e)  : this.getChildren(!0, !0, !1), n = r.length, i = !1; --n > - 1; ) r[n]._kill(t, e) && (i = !0);
return i
},
g.clear = function (t) {
var e = this.getChildren(!1, !0, !0),
r = e.length;
for (this._time = this._totalTime = 0; --r > - 1; ) e[r]._enabled(!1, !1);
return t !== !1 && (this._labels = {
}),
this._uncache(!0)
},
g.invalidate = function () {
for (var e = this._first; e; ) e.invalidate(),
e = e._next;
return t.prototype.invalidate.call(this)
},
g._enabled = function (t, r) {
if (t === this._gc) for (var n = this._first; n; ) n._enabled(t, !0),
n = n._next;
return e.prototype._enabled.call(this, t, r)
},
g.totalTime = function (e, r, n) {
this._forcingPlayhead = !0;
var i = t.prototype.totalTime.apply(this, arguments);
return this._forcingPlayhead = !1,
i
},
g.duration = function (t) {
return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this)  : (this._dirty && this.totalDuration(), this._duration)
},
g.totalDuration = function (t) {
if (!arguments.length) {
if (this._dirty) {
  for (var e, r, n = 0, i = this._last, o = 999999999999; i; ) e = i._prev,
  i._dirty && i.totalDuration(),
  i._startTime > o && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay)  : o = i._startTime,
  i._startTime < 0 && !i._paused && (n -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren( - i._startTime, !1, - 9999999999), o = 0),
  r = i._startTime + i._totalDuration / i._timeScale,
  r > n && (n = r),
  i = e;
  this._duration = this._totalDuration = n,
  this._dirty = !1
}
return this._totalDuration
}
return t && this.totalDuration() ? this.timeScale(this._totalDuration / t)  : this
},
g.paused = function (e) {
if (!e) for (var r = this._first, n = this._time; r; ) r._startTime === n && 'isPause' === r.data && (r._rawPrevTime = 0),
r = r._next;
return t.prototype.paused.apply(this, arguments)
},
g.usesFrames = function () {
for (var e = this._timeline; e._timeline; ) e = e._timeline;
return e === t._rootFramesTimeline
},
g.rawTime = function () {
return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
},
n
}, !0),
_gsScope._gsDefine('TimelineMax', [
'TimelineLite',
'TweenLite',
'easing.Ease'
], function (t, e, r) {
var n = function (e) {
t.call(this, e),
this._repeat = this.vars.repeat || 0,
this._repeatDelay = this.vars.repeatDelay || 0,
this._cycle = 0,
this._yoyo = this.vars.yoyo === !0,
this._dirty = !0
},
i = 1e-10,
o = e._internals,
s = o.lazyTweens,
a = o.lazyRender,
l = _gsScope._gsDefine.globals,
u = new r(null, null, 1, 0),
h = n.prototype = new t;
return h.constructor = n,
h.kill()._gc = !1,
n.version = '1.19.0',
h.invalidate = function () {
return this._yoyo = this.vars.yoyo === !0,
this._repeat = this.vars.repeat || 0,
this._repeatDelay = this.vars.repeatDelay || 0,
this._uncache(!0),
t.prototype.invalidate.call(this)
},
h.addCallback = function (t, r, n, i) {
return this.add(e.delayedCall(0, t, n, i), r)
},
h.removeCallback = function (t, e) {
if (t) if (null == e) this._kill(null, t);
 else for (var r = this.getTweensOf(t, !1), n = r.length, i = this._parseTimeOrLabel(e); --n > - 1; ) r[n]._startTime === i && r[n]._enabled(!1, !1);
return this
},
h.removePause = function (e) {
return this.removeCallback(t._internals.pauseCallback, e)
},
h.tweenTo = function (t, r) {
r = r || {
};
var n,
i,
o,
s = {
ease: u,
useFrames: this.usesFrames(),
immediateRender: !1
},
a = r.repeat && l.TweenMax || e;
for (i in r) s[i] = r[i];
return s.time = this._parseTimeOrLabel(t),
n = Math.abs(Number(s.time) - this._time) / this._timeScale || 0.001,
o = new a(this, n, s),
s.onStart = function () {
o.target.paused(!0),
o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale),
r.onStart && o._callback('onStart')
},
o
},
h.tweenFromTo = function (t, e, r) {
r = r || {
},
t = this._parseTimeOrLabel(t),
r.startAt = {
onComplete: this.seek,
onCompleteParams: [
  t
],
callbackScope: this
},
r.immediateRender = r.immediateRender !== !1;
var n = this.tweenTo(e, r);
return n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001)
},
h.render = function (t, e, r) {
this._gc && this._enabled(!0, !1);
var n,
o,
l,
u,
h,
c,
p,
f,
d = this._dirty ? this.totalDuration()  : this._totalDuration,
m = this._duration,
g = this._time,
y = this._totalTime,
v = this._startTime,
_ = this._timeScale,
x = this._rawPrevTime,
b = this._paused,
w = this._cycle;
if (t >= d - 1e-7) this._locked || (this._totalTime = d, this._cycle = this._repeat),
this._reversed || this._hasPausedChild() || (o = !0, u = 'onComplete', h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= - 1e-7 || x < 0 || x === i) && x !== t && this._first && (h = !0, x > i && (u = 'onReverseComplete'))),
this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : i,
this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 0.0001);
 else if (t < 1e-7) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && x !== i && (x > 0 || t < 0 && x >= 0) && !this._locked) && (u = 'onReverseComplete', o = this._reversed), t < 0) this._active = !1,
this._timeline.autoRemoveChildren && this._reversed ? (h = o = !0, u = 'onReverseComplete')  : x >= 0 && this._first && (h = !0),
this._rawPrevTime = t;
 else {
if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : i, 0 === t && o) for (n = this._first; n && 0 === n._startTime; ) n._duration || (o = !1),
n = n._next;
t = 0,
this._initted || (h = !0)
} else if (0 === m && x < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = m + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && y <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 0.0001)  : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
if (t = this._time, t >= g) for (n = this._first; n && n._startTime <= t && !p; ) n._duration || 'isPause' !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (p = n),
n = n._next;
 else for (n = this._last; n && n._startTime >= t && !p; ) n._duration || 'isPause' === n.data && n._rawPrevTime > 0 && (p = n),
n = n._prev;
p && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
}
if (this._cycle !== w && !this._locked) {
var T = this._yoyo && 0 !== (1 & w),
S = T === (this._yoyo && 0 !== (1 & this._cycle)),
C = this._totalTime,
M = this._cycle,
R = this._rawPrevTime,
k = this._time;
if (this._totalTime = w * m, this._cycle < w ? T = !T : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? x - 0.0001 : x, this._cycle = w, this._locked = !0, g = T ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this.vars.onRepeat && this._callback('onRepeat'), g !== this._time) return;
if (S && (g = T ? m + 0.0001 : - 0.0001, this.render(g, !0, !1)), this._locked = !1, this._paused && !b) return;
this._time = k,
this._totalTime = C,
this._cycle = M,
this._rawPrevTime = R
}
if (!(this._time !== g && this._first || r || h || p)) return void (y !== this._totalTime && this._onUpdate && (e || this._callback('onUpdate')));
if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== y && t > 0 && (this._active = !0), 0 === y && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback('onStart')), f = this._time, f >= g) for (n = this._first; n && (l = n._next, f === this._time && (!this._paused || b)); ) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (p === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration()  : n._totalDuration) - (t - n._startTime) * n._timeScale, e, r)  : n.render((t - n._startTime) * n._timeScale, e, r)),
n = l;
 else for (n = this._last; n && (l = n._prev, f === this._time && (!this._paused || b)); ) {
if (n._active || n._startTime <= g && !n._paused && !n._gc) {
  if (p === n) {
    for (p = n._prev; p && p.endTime() > this._time; ) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, r),
    p = p._prev;
    p = null,
    this.pause()
  }
  n._reversed ? n.render((n._dirty ? n.totalDuration()  : n._totalDuration) - (t - n._startTime) * n._timeScale, e, r)  : n.render((t - n._startTime) * n._timeScale, e, r)
}
n = l
}
this._onUpdate && (e || (s.length && a(), this._callback('onUpdate'))),
u && (this._locked || this._gc || v !== this._startTime && _ === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (o && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
},
h.getActive = function (t, e, r) {
null == t && (t = !0),
null == e && (e = !0),
null == r && (r = !1);
var n,
i,
o = [
],
s = this.getChildren(t, e, r),
a = 0,
l = s.length;
for (n = 0; n < l; n++) i = s[n],
i.isActive() && (o[a++] = i);
return o
},
h.getLabelAfter = function (t) {
t || 0 !== t && (t = this._time);
var e,
r = this.getLabelsArray(),
n = r.length;
for (e = 0; e < n; e++) if (r[e].time > t) return r[e].name;
return null
},
h.getLabelBefore = function (t) {
null == t && (t = this._time);
for (var e = this.getLabelsArray(), r = e.length; --r > - 1; ) if (e[r].time < t) return e[r].name;
return null
},
h.getLabelsArray = function () {
var t,
e = [
],
r = 0;
for (t in this._labels) e[r++] = {
time: this._labels[t],
name: t
};
return e.sort(function (t, e) {
return t.time - e.time
}),
e
},
h.progress = function (t, e) {
return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e)  : this._time / this.duration()
},
h.totalProgress = function (t, e) {
return arguments.length ? this.totalTime(this.totalDuration() * t, e)  : this._totalTime / this.totalDuration()
},
h.totalDuration = function (e) {
return arguments.length ? this._repeat !== - 1 && e ? this.timeScale(this.totalDuration() / e)  : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = this._repeat === - 1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
},
h.time = function (t, e) {
return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)  : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e))  : this._time
},
h.repeat = function (t) {
return arguments.length ? (this._repeat = t, this._uncache(!0))  : this._repeat
},
h.repeatDelay = function (t) {
return arguments.length ? (this._repeatDelay = t, this._uncache(!0))  : this._repeatDelay
},
h.yoyo = function (t) {
return arguments.length ? (this._yoyo = t, this)  : this._yoyo
},
h.currentLabel = function (t) {
return arguments.length ? this.seek(t, !0)  : this.getLabelBefore(this._time + 1e-8)
},
n
}, !0),
function () {
var t = 180 / Math.PI,
e = [
],
r = [
],
n = [
],
i = {
},
o = _gsScope._gsDefine.globals,
s = function (t, e, r, n) {
r === n && (r = n - (n - e) / 1000000),
t === e && (e = t + (r - t) / 1000000),
this.a = t,
this.b = e,
this.c = r,
this.d = n,
this.da = n - t,
this.ca = r - t,
this.ba = e - t
},
a = ',x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,',
l = function (t, e, r, n) {
var i = {
a: t
},
o = {
},
s = {
},
a = {
c: n
},
l = (t + e) / 2,
u = (e + r) / 2,
h = (r + n) / 2,
c = (l + u) / 2,
p = (u + h) / 2,
f = (p - c) / 8;
return i.b = l + (t - l) / 4,
o.b = c + f,
i.c = o.a = (i.b + o.b) / 2,
o.c = s.a = (c + p) / 2,
s.b = p - f,
a.b = h + (n - h) / 4,
s.c = a.a = (s.b + a.b) / 2,
[
i,
o,
s,
a
]
},
u = function (t, i, o, s, a) {
var u,
h,
c,
p,
f,
d,
m,
g,
y,
v,
_,
x,
b,
w = t.length - 1,
T = 0,
S = t[0].a;
for (u = 0; u < w; u++) f = t[T],
h = f.a,
c = f.d,
p = t[T + 1].d,
a ? (_ = e[u], x = r[u], b = (x + _) * i * 0.25 / (s ? 0.5 : n[u] || 0.5), d = c - (c - h) * (s ? 0.5 * i : 0 !== _ ? b / _ : 0), m = c + (p - c) * (s ? 0.5 * i : 0 !== x ? b / x : 0), g = c - (d + ((m - d) * (3 * _ / (_ + x) + 0.5) / 4 || 0)))  : (d = c - (c - h) * i * 0.5, m = c + (p - c) * i * 0.5, g = c - (d + m) / 2),
d += g,
m += g,
f.c = y = d,
0 !== u ? f.b = S : f.b = S = f.a + 0.6 * (f.c - f.a),
f.da = c - h,
f.ca = y - h,
f.ba = S - h,
o ? (v = l(h, S, y, c), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4)  : T++,
S = m;
f = t[T],
f.b = S,
f.c = S + 0.4 * (f.d - S),
f.da = f.d - f.a,
f.ca = f.c - f.a,
f.ba = S - f.a,
o && (v = l(f.a, S, f.c, f.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
},
h = function (t, n, i, o) {
var a,
l,
u,
h,
c,
p,
f = [
];
if (o) for (t = [
o
].concat(t), l = t.length; --l > - 1; ) 'string' == typeof (p = t[l][n]) && '=' === p.charAt(1) && (t[l][n] = o[n] + Number(p.charAt(0) + p.substr(2)));
if (a = t.length - 2, a < 0) return f[0] = new s(t[0][n], 0, 0, t[a < - 1 ? 0 : 1][n]),
f;
for (l = 0; l < a; l++) u = t[l][n],
h = t[l + 1][n],
f[l] = new s(u, 0, 0, h),
i && (c = t[l + 2][n], e[l] = (e[l] || 0) + (h - u) * (h - u), r[l] = (r[l] || 0) + (c - h) * (c - h));
return f[l] = new s(t[l][n], 0, 0, t[l + 1][n]),
f
},
c = function (t, o, s, l, c, p) {
var f,
d,
m,
g,
y,
v,
_,
x,
b = {
},
w = [
],
T = p || t[0];
c = 'string' == typeof c ? ',' + c + ',' : a,
null == o && (o = 1);
for (d in t[0]) w.push(d);
if (t.length > 1) {
for (x = t[t.length - 1], _ = !0, f = w.length; --f > - 1; ) if (d = w[f], Math.abs(T[d] - x[d]) > 0.05) {
  _ = !1;
  break
}
_ && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
}
for (e.length = r.length = n.length = 0, f = w.length; --f > - 1; ) d = w[f],
i[d] = c.indexOf(',' + d + ',') !== - 1,
b[d] = h(t, d, i[d], p);
for (f = e.length; --f > - 1; ) e[f] = Math.sqrt(e[f]),
r[f] = Math.sqrt(r[f]);
if (!l) {
for (f = w.length; --f > - 1; ) if (i[d]) for (m = b[w[f]], v = m.length - 1, g = 0; g < v; g++) y = m[g + 1].da / r[g] + m[g].da / e[g] || 0,
n[g] = (n[g] || 0) + y * y;
for (f = n.length; --f > - 1; ) n[f] = Math.sqrt(n[f])
}
for (f = w.length, g = s ? 4 : 1; --f > - 1; ) d = w[f],
m = b[d],
u(m, o, s, l, i[d]),
_ && (m.splice(0, g), m.splice(m.length - g, g));
return b
},
p = function (t, e, r) {
e = e || 'soft';
var n,
i,
o,
a,
l,
u,
h,
c,
p,
f,
d,
m = {
},
g = 'cubic' === e ? 3 : 2,
y = 'soft' === e,
v = [
];
if (y && r && (t = [
r
].concat(t)), null == t || t.length < g + 1) throw 'invalid Bezier data';
for (p in t[0]) v.push(p);
for (u = v.length; --u > - 1; ) {
for (p = v[u], m[p] = l = [
], f = 0, c = t.length, h = 0; h < c; h++) n = null == r ? t[h][p] : 'string' == typeof (d = t[h][p]) && '=' === d.charAt(1) ? r[p] + Number(d.charAt(0) + d.substr(2))  : Number(d),
y && h > 1 && h < c - 1 && (l[f++] = (n + l[f - 2]) / 2),
l[f++] = n;
for (c = f - g + 1, f = 0, h = 0; h < c; h += g) n = l[h],
i = l[h + 1],
o = l[h + 2],
a = 2 === g ? 0 : l[h + 3],
l[f++] = d = 3 === g ? new s(n, i, o, a)  : new s(n, (2 * i + n) / 3, (2 * i + o) / 3, o);
l.length = f
}
return m
},
f = function (t, e, r) {
for (var n, i, o, s, a, l, u, h, c, p, f, d = 1 / r, m = t.length; --m > - 1; ) for (p = t[m], o = p.a, s = p.d - o, a = p.c - o, l = p.b - o, n = i = 0, h = 1; h <= r; h++) u = d * h,
c = 1 - u,
n = i - (i = (u * u * s + 3 * c * (u * a + c * l)) * u),
f = m * r + h - 1,
e[f] = (e[f] || 0) + n * n
},
d = function (t, e) {
e = e >> 0 || 6;
var r,
n,
i,
o,
s = [
],
a = [
],
l = 0,
u = 0,
h = e - 1,
c = [
],
p = [
];
for (r in t) f(t[r], s, e);
for (i = s.length, n = 0; n < i; n++) l += Math.sqrt(s[n]),
o = n % e,
p[o] = l,
o === h && (u += l, o = n / e >> 0, c[o] = p, a[o] = u, l = 0, p = [
]);
return {
length: u,
lengths: a,
segments: c
}
},
m = _gsScope._gsDefine.plugin({
propName: 'bezier',
priority: - 1,
version: '1.3.7',
API: 2,
global: !0,
init: function (t, e, r) {
this._target = t,
e instanceof Array && (e = {
  values: e
}),
this._func = {
},
this._mod = {
},
this._props = [
],
this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
var n,
i,
o,
s,
a,
l = e.values || [
],
u = {
},
h = l[0],
f = e.autoRotate || r.vars.orientToBezier;
this._autoRotate = f ? f instanceof Array ? f : [
  ['x',
  'y',
  'rotation',
  f === !0 ? 0 : Number(f) || 0]
] : null;
for (n in h) this._props.push(n);
for (o = this._props.length; --o > - 1; ) n = this._props[o],
this._overwriteProps.push(n),
i = this._func[n] = 'function' == typeof t[n],
u[n] = i ? t[n.indexOf('set') || 'function' != typeof t['get' + n.substr(3)] ? n : 'get' + n.substr(3)]()  : parseFloat(t[n]),
a || u[n] !== l[0][n] && (a = u);
if (this._beziers = 'cubic' !== e.type && 'quadratic' !== e.type && 'soft' !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, 'thruBasic' === e.type, e.correlate, a)  : p(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
  var m = d(this._beziers, this._timeRes);
  this._length = m.length,
  this._lengths = m.lengths,
  this._segments = m.segments,
  this._l1 = this._li = this._s1 = this._si = 0,
  this._l2 = this._lengths[0],
  this._curSeg = this._segments[0],
  this._s2 = this._curSeg[0],
  this._prec = 1 / this._curSeg.length
}
if (f = this._autoRotate) for (this._initialRotations = [
], f[0] instanceof Array || (this._autoRotate = f = [
  f
]), o = f.length; --o > - 1; ) {
  for (s = 0; s < 3; s++) n = f[o][s],
  this._func[n] = 'function' == typeof t[n] && t[n.indexOf('set') || 'function' != typeof t['get' + n.substr(3)] ? n : 'get' + n.substr(3)];
  n = f[o][2],
  this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target)  : this._target[n]) || 0,
  this._overwriteProps.push(n)
}
return this._startRatio = r.vars.runBackwards ? 1 : 0,
!0
},
set: function (e) {
var r,
n,
i,
o,
s,
a,
l,
u,
h,
c,
p = this._segCount,
f = this._func,
d = this._target,
m = e !== this._startRatio;
if (this._timeRes) {
  if (h = this._lengths, c = this._curSeg, e *= this._length, i = this._li, e > this._l2 && i < p - 1) {
    for (u = p - 1; i < u && (this._l2 = h[++i]) <= e; );
    this._l1 = h[i - 1],
    this._li = i,
    this._curSeg = c = this._segments[i],
    this._s2 = c[this._s1 = this._si = 0]
  } else if (e < this._l1 && i > 0) {
    for (; i > 0 && (this._l1 = h[--i]) >= e; );
    0 === i && e < this._l1 ? this._l1 = 0 : i++,
    this._l2 = h[i],
    this._li = i,
    this._curSeg = c = this._segments[i],
    this._s1 = c[(this._si = c.length - 1) - 1] || 0,
    this._s2 = c[this._si]
  }
  if (r = i, e -= this._l1, i = this._si, e > this._s2 && i < c.length - 1) {
    for (u = c.length - 1; i < u && (this._s2 = c[++i]) <= e; );
    this._s1 = c[i - 1],
    this._si = i
  } else if (e < this._s1 && i > 0) {
    for (; i > 0 && (this._s1 = c[--i]) >= e; );
    0 === i && e < this._s1 ? this._s1 = 0 : i++,
    this._s2 = c[i],
    this._si = i
  }
  a = (i + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
} else r = e < 0 ? 0 : e >= 1 ? p - 1 : p * e >> 0,
a = (e - r * (1 / p)) * p;
for (n = 1 - a, i = this._props.length; --i > - 1; ) o = this._props[i],
s = this._beziers[o][r],
l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a,
this._mod[o] && (l = this._mod[o](l, d)),
f[o] ? d[o](l)  : d[o] = l;
if (this._autoRotate) {
  var g,
  y,
  v,
  _,
  x,
  b,
  w,
  T = this._autoRotate;
  for (i = T.length; --i > - 1; ) o = T[i][2],
  b = T[i][3] || 0,
  w = T[i][4] === !0 ? 1 : t,
  s = this._beziers[T[i][0]],
  g = this._beziers[T[i][1]],
  s && g && (s = s[r], g = g[r], y = s.a + (s.b - s.a) * a, _ = s.b + (s.c - s.b) * a, y += (_ - y) * a, _ += (s.c + (s.d - s.c) * a - _) * a, v = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, v += (x - v) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - v, _ - y) * w + b : this._initialRotations[i], this._mod[o] && (l = this._mod[o](l, d)), f[o] ? d[o](l)  : d[o] = l)
}
}
}),
g = m.prototype;
m.bezierThrough = c,
m.cubicToQuadratic = l,
m._autoCSS = !0,
m.quadraticToCubic = function (t, e, r) {
return new s(t, (2 * e + t) / 3, (2 * e + r) / 3, r)
},
m._cssRegister = function () {
var t = o.CSSPlugin;
if (t) {
var e = t._internals,
r = e._parseToProxy,
n = e._setPluginRatio,
i = e.CSSPropTween;
e._registerComplexSpecialProp('bezier', {
  parser: function (t, e, o, s, a, l) {
    e instanceof Array && (e = {
      values: e
    }),
    l = new m;
    var u,
    h,
    c,
    p = e.values,
    f = p.length - 1,
    d = [
    ],
    g = {
    };
    if (f < 0) return a;
    for (u = 0; u <= f; u++) c = r(t, p[u], s, a, l, f !== u),
    d[u] = c.end;
    for (h in e) g[h] = e[h];
    return g.values = d,
    a = new i(t, 'bezier', 0, 0, c.pt, 2),
    a.data = c,
    a.plugin = l,
    a.setRatio = n,
    0 === g.autoRotate && (g.autoRotate = !0),
    !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != c.end.left ? [
      ['left',
      'top',
      'rotation',
      u,
      !1]
    ] : null != c.end.x && [
      ['x',
      'y',
      'rotation',
      u,
      !1]
    ]),
    g.autoRotate && (s._transform || s._enableTransforms(!1), c.autoRotate = s._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, s._overwriteProps.push('rotation')),
    l._onInitTween(c.proxy, g, s._tween),
    a
  }
})
}
},
g._mod = function (t) {
for (var e, r = this._overwriteProps, n = r.length; --n > - 1; ) e = t[r[n]],
e && 'function' == typeof e && (this._mod[r[n]] = e)
},
g._kill = function (t) {
var e,
r,
n = this._props;
for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], r = n.length; --r > - 1; ) n[r] === e && n.splice(r, 1);
if (n = this._autoRotate) for (r = n.length; --r > - 1; ) t[n[r][2]] && n.splice(r, 1);
return this._super._kill.call(this, t)
}
}(),
_gsScope._gsDefine('plugins.CSSPlugin', [
'plugins.TweenPlugin',
'TweenLite'
], function (t, e) {
var r,
n,
i,
o,
s = function () {
t.call(this, 'css'),
this._overwriteProps.length = 0,
this.setRatio = s.prototype.setRatio
},
a = _gsScope._gsDefine.globals,
l = {
},
u = s.prototype = new t('css');
u.constructor = s,
s.version = '1.19.0',
s.API = 2,
s.defaultTransformPerspective = 0,
s.defaultSkewType = 'compensated',
s.defaultSmoothOrigin = !0,
u = 'px',
s.suffixMap = {
top: u,
right: u,
bottom: u,
left: u,
width: u,
height: u,
fontSize: u,
padding: u,
margin: u,
perspective: u,
lineHeight: ''
};
var h,
c,
p,
f,
d,
m,
g,
y,
v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
_ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
w = /(?:\d|\-|\+|=|#|\.)*/g,
T = /opacity *= *([^)]*)/i,
S = /opacity:([^;]*)/i,
C = /alpha\(opacity *=.+?\)/i,
M = /^(rgb|hsl)/,
R = /([A-Z])/g,
k = /-([a-z])/gi,
P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
D = function (t, e) {
return e.toUpperCase()
},
A = /(?:Left|Right|Width)/i,
E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
N = /,(?=[^\)]*(?:\(|$))/gi,
I = /[\s,\(]/i,
L = Math.PI / 180,
F = 180 / Math.PI,
U = {
},
B = document,
H = function (t) {
return B.createElementNS ? B.createElementNS('http://www.w3.org/1999/xhtml', t)  : B.createElement(t)
},
j = H('div'),
Y = H('img'),
G = s._internals = {
_specialProps: l
},
q = navigator.userAgent,
W = function () {
var t = q.indexOf('Android'),
e = H('a');
return p = q.indexOf('Safari') !== - 1 && q.indexOf('Chrome') === - 1 && (t === - 1 || Number(q.substr(t + 8, 1)) > 3),
d = p && Number(q.substr(q.indexOf('Version/') + 8, 1)) < 6,
f = q.indexOf('Firefox') !== - 1,
(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (m = parseFloat(RegExp.$1)),
!!e && (e.style.cssText = 'top:1px;opacity:.55;', /^0.55/.test(e.style.opacity))
}(),
z = function (t) {
return T.test('string' == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || '') ? parseFloat(RegExp.$1) / 100 : 1
},
V = function (t) {
window.console && console.log(t)
},
X = '',
$ = '',
Z = function (t, e) {
e = e || j;
var r,
n,
i = e.style;
if (void 0 !== i[t]) return t;
for (t = t.charAt(0).toUpperCase() + t.substr(1), r = [
'O',
'Moz',
'ms',
'Ms',
'Webkit'
], n = 5; --n > - 1 && void 0 === i[r[n] + t]; );
return n >= 0 ? ($ = 3 === n ? 'ms' : r[n], X = '-' + $.toLowerCase() + '-', $ + t)  : null
},
J = B.defaultView ? B.defaultView.getComputedStyle : function () {
},
Q = s.getStyle = function (t, e, r, n, i) {
var o;
return W || 'opacity' !== e ? (!n && t.style[e] ? o = t.style[e] : (r = r || J(t)) ? o = r[e] || r.getPropertyValue(e) || r.getPropertyValue(e.replace(R, '-$1').toLowerCase())  : t.currentStyle && (o = t.currentStyle[e]), null == i || o && 'none' !== o && 'auto' !== o && 'auto auto' !== o ? o : i)  : z(t)
},
K = G.convertToPixels = function (t, r, n, i, o) {
if ('px' === i || !i) return n;
if ('auto' === i || !n) return 0;
var a,
l,
u,
h = A.test(r),
c = t,
p = j.style,
f = n < 0,
d = 1 === n;
if (f && (n = - n), d && (n *= 100), '%' === i && r.indexOf('border') !== - 1) a = n / 100 * (h ? t.clientWidth : t.clientHeight);
 else {
if (p.cssText = 'border:0 solid red;position:' + Q(t, 'position') + ';line-height:0;', '%' !== i && c.appendChild && 'v' !== i.charAt(0) && 'rem' !== i) p[h ? 'borderLeftWidth' : 'borderTopWidth'] = n + i;
 else {
  if (c = t.parentNode || B.body, l = c._gsCache, u = e.ticker.frame, l && h && l.time === u) return l.width * n / 100;
  p[h ? 'width' : 'height'] = n + i
}
c.appendChild(j),
a = parseFloat(j[h ? 'offsetWidth' : 'offsetHeight']),
c.removeChild(j),
h && '%' === i && s.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {
}, l.time = u, l.width = a / n * 100),
0 !== a || o || (a = K(t, r, n, i, !0))
}
return d && (a /= 100),
f ? - a : a
},
tt = G.calculateOffset = function (t, e, r) {
if ('absolute' !== Q(t, 'position', r)) return 0;
var n = 'left' === e ? 'Left' : 'Top',
i = Q(t, 'margin' + n, r);
return t['offset' + n] - (K(t, e, parseFloat(i), i.replace(w, '')) || 0)
},
et = function (t, e) {
var r,
n,
i,
o = {
};
if (e = e || J(t, null)) if (r = e.length) for (; --r > - 1; ) i = e[r],
i.indexOf('-transform') !== - 1 && kt !== i || (o[i.replace(k, D)] = e.getPropertyValue(i));
 else for (r in e) r.indexOf('Transform') !== - 1 && Rt !== r || (o[r] = e[r]);
 else if (e = t.currentStyle || t.style) for (r in e) 'string' == typeof r && void 0 === o[r] && (o[r.replace(k, D)] = e[r]);
return W || (o.opacity = z(t)),
n = jt(t, e, !1),
o.rotation = n.rotation,
o.skewX = n.skewX,
o.scaleX = n.scaleX,
o.scaleY = n.scaleY,
o.x = n.x,
o.y = n.y,
Dt && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ),
o.filters && delete o.filters,
o
},
rt = function (t, e, r, n, i) {
var o,
s,
a,
l = {
},
u = t.style;
for (s in r) 'cssText' !== s && 'length' !== s && isNaN(s) && (e[s] !== (o = r[s]) || i && i[s]) && s.indexOf('Origin') === - 1 && ('number' != typeof o && 'string' != typeof o || (l[s] = 'auto' !== o || 'left' !== s && 'top' !== s ? '' !== o && 'auto' !== o && 'none' !== o || 'string' != typeof e[s] || '' === e[s].replace(b, '') ? o : 0 : tt(t, s), void 0 !== u[s] && (a = new yt(u, s, u[s], a))));
if (n) for (s in n) 'className' !== s && (l[s] = n[s]);
return {
difs: l,
firstMPT: a
}
},
nt = {
width: [
'Left',
'Right'
],
height: [
'Top',
'Bottom'
]
},
it = [
'marginLeft',
'marginRight',
'marginTop',
'marginBottom'
],
ot = function (t, e, r) {
if ('svg' === (t.nodeName + '').toLowerCase()) return (r || J(t)) [e] || 0;
if (t.getBBox && Ut(t)) return t.getBBox() [e] || 0;
var n = parseFloat('width' === e ? t.offsetWidth : t.offsetHeight),
i = nt[e],
o = i.length;
for (r = r || J(t, null); --o > - 1; ) n -= parseFloat(Q(t, 'padding' + i[o], r, !0)) || 0,
n -= parseFloat(Q(t, 'border' + i[o] + 'Width', r, !0)) || 0;
return n
},
st = function (t, e) {
if ('contain' === t || 'auto' === t || 'auto auto' === t) return t + ' ';
null != t && '' !== t || (t = '0 0');
var r,
n = t.split(' '),
i = t.indexOf('left') !== - 1 ? '0%' : t.indexOf('right') !== - 1 ? '100%' : n[0],
o = t.indexOf('top') !== - 1 ? '0%' : t.indexOf('bottom') !== - 1 ? '100%' : n[1];
if (n.length > 3 && !e) {
for (n = t.split(', ').join(',').split(','), t = [
], r = 0; r < n.length; r++) t.push(st(n[r]));
return t.join(',')
}
return null == o ? o = 'center' === i ? '50%' : '0' : 'center' === o && (o = '50%'),
('center' === i || isNaN(parseFloat(i)) && (i + '').indexOf('=') === - 1) && (i = '50%'),
t = i + ' ' + o + (n.length > 2 ? ' ' + n[2] : ''),
e && (e.oxp = i.indexOf('%') !== - 1, e.oyp = o.indexOf('%') !== - 1, e.oxr = '=' === i.charAt(1), e.oyr = '=' === o.charAt(1), e.ox = parseFloat(i.replace(b, '')), e.oy = parseFloat(o.replace(b, '')), e.v = t),
e || t
},
at = function (t, e) {
return 'function' == typeof t && (t = t(y, g)),
'string' == typeof t && '=' === t.charAt(1) ? parseInt(t.charAt(0) + '1', 10) * parseFloat(t.substr(2))  : parseFloat(t) - parseFloat(e) || 0
},
lt = function (t, e) {
return 'function' == typeof t && (t = t(y, g)),
null == t ? e : 'string' == typeof t && '=' === t.charAt(1) ? parseInt(t.charAt(0) + '1', 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
},
ut = function (t, e, r, n) {
var i,
o,
s,
a,
l,
u = 0.000001;
return 'function' == typeof t && (t = t(y, g)),
null == t ? a = e : 'number' == typeof t ? a = t : (i = 360, o = t.split('_'), l = '=' === t.charAt(1), s = (l ? parseInt(t.charAt(0) + '1', 10) * parseFloat(o[0].substr(2))  : parseFloat(o[0])) * (t.indexOf('rad') === - 1 ? 1 : F) - (l ? 0 : e), o.length && (n && (n[r] = e + s), t.indexOf('short') !== - 1 && (s %= i, s !== s % (i / 2) && (s = s < 0 ? s + i : s - i)), t.indexOf('_cw') !== - 1 && s < 0 ? s = (s + 9999999999 * i) % i - (s / i | 0) * i : t.indexOf('ccw') !== - 1 && s > 0 && (s = (s - 9999999999 * i) % i - (s / i | 0) * i)), a = e + s),
a < u && a > - u && (a = 0),
a
},
ht = {
aqua: [
0,
255,
255
],
lime: [
0,
255,
0
],
silver: [
192,
192,
192
],
black: [
0,
0,
0
],
maroon: [
128,
0,
0
],
teal: [
0,
128,
128
],
blue: [
0,
0,
255
],
navy: [
0,
0,
128
],
white: [
255,
255,
255
],
fuchsia: [
255,
0,
255
],
olive: [
128,
128,
0
],
yellow: [
255,
255,
0
],
orange: [
255,
165,
0
],
gray: [
128,
128,
128
],
purple: [
128,
0,
128
],
green: [
0,
128,
0
],
red: [
255,
0,
0
],
pink: [
255,
192,
203
],
cyan: [
0,
255,
255
],
transparent: [
255,
255,
255,
0
]
},
ct = function (t, e, r) {
return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t,
255 * (6 * t < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + 0.5 | 0
},
pt = s.parseColor = function (t, e) {
var r,
n,
i,
o,
s,
a,
l,
u,
h,
c,
p;
if (t) if ('number' == typeof t) r = [
t >> 16,
t >> 8 & 255,
255 & t
];
 else {
if (',' === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ht[t]) r = ht[t];
 else if ('#' === t.charAt(0)) 4 === t.length && (n = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = '#' + n + n + i + i + o + o),
t = parseInt(t.substr(1), 16),
r = [
  t >> 16,
  t >> 8 & 255,
  255 & t
];
 else if ('hsl' === t.substr(0, 3)) if (r = p = t.match(v), e) {
  if (t.indexOf('=') !== - 1) return t.match(_)
} else s = Number(r[0]) % 360 / 360,
a = Number(r[1]) / 100,
l = Number(r[2]) / 100,
i = l <= 0.5 ? l * (a + 1)  : l + a - l * a,
n = 2 * l - i,
r.length > 3 && (r[3] = Number(t[3])),
r[0] = ct(s + 1 / 3, n, i),
r[1] = ct(s, n, i),
r[2] = ct(s - 1 / 3, n, i);
 else r = t.match(v) || ht.transparent;
r[0] = Number(r[0]),
r[1] = Number(r[1]),
r[2] = Number(r[2]),
r.length > 3 && (r[3] = Number(r[3]))
} else r = ht.black;
return e && !p && (n = r[0] / 255, i = r[1] / 255, o = r[2] / 255, u = Math.max(n, i, o), h = Math.min(n, i, o), l = (u + h) / 2, u === h ? s = a = 0 : (c = u - h, a = l > 0.5 ? c / (2 - u - h)  : c / (u + h), s = u === n ? (i - o) / c + (i < o ? 6 : 0)  : u === i ? (o - n) / c + 2 : (n - i) / c + 4, s *= 60), r[0] = s + 0.5 | 0, r[1] = 100 * a + 0.5 | 0, r[2] = 100 * l + 0.5 | 0),
r
},
ft = function (t, e) {
var r,
n,
i,
o = t.match(dt) || [
],
s = 0,
a = o.length ? '' : t;
for (r = 0; r < o.length; r++) n = o[r],
i = t.substr(s, t.indexOf(n, s) - s),
s += i.length + n.length,
n = pt(n, e),
3 === n.length && n.push(1),
a += i + (e ? 'hsla(' + n[0] + ',' + n[1] + '%,' + n[2] + '%,' + n[3] : 'rgba(' + n.join(',')) + ')';
return a + t.substr(s)
},
dt = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b';
for (u in ht) dt += '|' + u + '\\b';
dt = new RegExp(dt + ')', 'gi'),
s.colorStringFilter = function (t) {
var e,
r = t[0] + t[1];
dt.test(r) && (e = r.indexOf('hsl(') !== - 1 || r.indexOf('hsla(') !== - 1, t[0] = ft(t[0], e), t[1] = ft(t[1], e)),
dt.lastIndex = 0
},
e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
var mt = function (t, e, r, n) {
if (null == t) return function (t) {
return t
};
var i,
o = e ? (t.match(dt) || [
''
]) [0] : '',
s = t.split(o).join('').match(x) || [
],
a = t.substr(0, t.indexOf(s[0])),
l = ')' === t.charAt(t.length - 1) ? ')' : '',
u = t.indexOf(' ') !== - 1 ? ' ' : ',',
h = s.length,
c = h > 0 ? s[0].replace(v, '')  : '';
return h ? i = e ? function (t) {
var e,
p,
f,
d;
if ('number' == typeof t) t += c;
 else if (n && N.test(t)) {
  for (d = t.replace(N, '|').split('|'), f = 0; f < d.length; f++) d[f] = i(d[f]);
  return d.join(',')
}
if (e = (t.match(dt) || [
  o
]) [0], p = t.split(e).join('').match(x) || [
], f = p.length, h > f--) for (; ++f < h; ) p[f] = r ? p[(f - 1) / 2 | 0] : s[f];
return a + p.join(u) + u + e + l + (t.indexOf('inset') !== - 1 ? ' inset' : '')
}
 : function (t) {
var e,
o,
p;
if ('number' == typeof t) t += c;
 else if (n && N.test(t)) {
  for (o = t.replace(N, '|').split('|'), p = 0; p < o.length; p++) o[p] = i(o[p]);
  return o.join(',')
}
if (e = t.match(x) || [
], p = e.length, h > p--) for (; ++p < h; ) e[p] = r ? e[(p - 1) / 2 | 0] : s[p];
return a + e.join(u) + l
}
 : function (t) {
return t
}
},
gt = function (t) {
return t = t.split(','),
function (e, r, n, i, o, s, a) {
var l,
u = (r + '').split(' ');
for (a = {
}, l = 0; l < 4; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
return i.parse(e, a, o, s)
}
},
yt = (G._setPluginRatio = function (t) {
this.plugin.setRatio(t);
for (var e, r, n, i, o, s = this.data, a = s.proxy, l = s.firstMPT, u = 0.000001; l; ) e = a[l.v],
l.r ? e = Math.round(e)  : e < u && e > - u && (e = 0),
l.t[l.p] = e,
l = l._next;
if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t)  : a.rotation), 1 === t || 0 === t) for (l = s.firstMPT, o = 1 === t ? 'e' : 'b'; l; ) {
if (r = l.t, r.type) {
  if (1 === r.type) {
    for (i = r.xs0 + r.s + r.xs1, n = 1; n < r.l; n++) i += r['xn' + n] + r['xs' + (n + 1)];
    r[o] = i
  }
} else r[o] = r.s + r.xs0;
l = l._next
}
}, function (t, e, r, n, i) {
this.t = t,
this.p = e,
this.v = r,
this.r = i,
n && (n._prev = this, this._next = n)
}),
vt = (G._parseToProxy = function (t, e, r, n, i, o) {
var s,
a,
l,
u,
h,
c = n,
p = {
},
f = {
},
d = r._transform,
m = U;
for (r._transform = null, U = e, n = h = r.parse(t, e, n, i), U = m, o && (r._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c; ) {
if (n.type <= 1 && (a = n.p, f[a] = n.s + n.c, p[a] = n.s, o || (u = new yt(n, 's', a, u, n.r), n.c = 0), 1 === n.type)) for (s = n.l; --s > 0; ) l = 'xn' + s,
a = n.p + '_' + l,
f[a] = n.data[l],
p[a] = n[l],
o || (u = new yt(n, l, a, u, n.rxp[l]));
n = n._next
}
return {
proxy: p,
end: f,
firstMPT: u,
pt: h
}
}, G.CSSPropTween = function (t, e, n, i, s, a, l, u, h, c, p) {
this.t = t,
this.p = e,
this.s = n,
this.c = i,
this.n = l || e,
t instanceof vt || o.push(this.n),
this.r = u,
this.type = a || 0,
h && (this.pr = h, r = !0),
this.b = void 0 === c ? n : c,
this.e = void 0 === p ? n + i : p,
s && (this._next = s, s._prev = this)
}),
_t = function (t, e, r, n, i, o) {
var s = new vt(t, e, r, n - r, i, ( - 1), o);
return s.b = r,
s.e = s.xs0 = n,
s
},
xt = s.parseComplex = function (t, e, r, n, i, o, a, l, u, c) {
r = r || o || '',
'function' == typeof n && (n = n(y, g)),
a = new vt(t, e, 0, 0, a, c ? 2 : 1, null, (!1), l, r, n),
n += '',
i && dt.test(n + r) && (n = [
r,
n
], s.colorStringFilter(n), r = n[0], n = n[1]);
var p,
f,
d,
m,
x,
b,
w,
T,
S,
C,
M,
R,
k,
P = r.split(', ').join(',').split(' '),
D = n.split(', ').join(',').split(' '),
A = P.length,
E = h !== !1;
for (n.indexOf(',') === - 1 && r.indexOf(',') === - 1 || (P = P.join(' ').replace(N, ', ').split(' '), D = D.join(' ').replace(N, ', ').split(' '), A = P.length), A !== D.length && (P = (o || '').split(' '), A = P.length), a.plugin = u, a.setRatio = c, dt.lastIndex = 0, p = 0; p < A; p++) if (m = P[p], x = D[p], T = parseFloat(m), T || 0 === T) a.appendXtra('', T, at(x, T), x.replace(_, ''), E && x.indexOf('px') !== - 1, !0);
 else if (i && dt.test(m)) R = x.indexOf(')') + 1,
R = ')' + (R ? x.substr(R)  : ''),
k = x.indexOf('hsl') !== - 1 && W,
m = pt(m, k),
x = pt(x, k),
S = m.length + x.length > 6,
S && !W && 0 === x[3] ? (a['xs' + a.l] += a.l ? ' transparent' : 'transparent', a.e = a.e.split(D[p]).join('transparent'))  : (W || (S = !1), k ? a.appendXtra(S ? 'hsla(' : 'hsl(', m[0], at(x[0], m[0]), ',', !1, !0).appendXtra('', m[1], at(x[1], m[1]), '%,', !1).appendXtra('', m[2], at(x[2], m[2]), S ? '%,' : '%' + R, !1)  : a.appendXtra(S ? 'rgba(' : 'rgb(', m[0], x[0] - m[0], ',', !0, !0).appendXtra('', m[1], x[1] - m[1], ',', !0).appendXtra('', m[2], x[2] - m[2], S ? ',' : R, !0), S && (m = m.length < 4 ? 1 : m[3], a.appendXtra('', m, (x.length < 4 ? 1 : x[3]) - m, R, !1))),
dt.lastIndex = 0;
 else if (b = m.match(v)) {
if (w = x.match(_), !w || w.length !== b.length) return a;
for (d = 0, f = 0; f < b.length; f++) M = b[f],
C = m.indexOf(M, d),
a.appendXtra(m.substr(d, C - d), Number(M), at(w[f], M), '', E && 'px' === m.substr(C + M.length, 2), 0 === f),
d = C + M.length;
a['xs' + a.l] += m.substr(d)
} else a['xs' + a.l] += a.l || a['xs' + a.l] ? ' ' + x : x;
if (n.indexOf('=') !== - 1 && a.data) {
for (R = a.xs0 + a.data.s, p = 1; p < a.l; p++) R += a['xs' + p] + a.data['xn' + p];
a.e = R + a['xs' + p]
}
return a.l || (a.type = - 1, a.xs0 = a.e),
a.xfirst || a
},
bt = 9;
for (u = vt.prototype, u.l = u.pr = 0; --bt > 0; ) u['xn' + bt] = 0,
u['xs' + bt] = '';
u.xs0 = '',
u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null,
u.appendXtra = function (t, e, r, n, i, o) {
var s = this,
a = s.l;
return s['xs' + a] += o && (a || s['xs' + a]) ? ' ' + t : t || '',
r || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s['xs' + s.l] = n || '', a > 0 ? (s.data['xn' + a] = e + r, s.rxp['xn' + a] = i, s['xn' + a] = e, s.plugin || (s.xfirst = new vt(s, 'xn' + a, e, r, s.xfirst || s, 0, s.n, i, s.pr), s.xfirst.xs0 = 0), s)  : (s.data = {
s: e + r
}, s.rxp = {
}, s.s = e, s.c = r, s.r = i, s))  : (s['xs' + a] += e + (n || ''), s)
};
var wt = function (t, e) {
e = e || {
},
this.p = e.prefix ? Z(t) || t : t,
l[t] = l[this.p] = this,
this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi),
e.parser && (this.parse = e.parser),
this.clrs = e.color,
this.multi = e.multi,
this.keyword = e.keyword,
this.dflt = e.defaultValue,
this.pr = e.priority || 0
},
Tt = G._registerComplexSpecialProp = function (t, e, r) {
'object' != typeof e && (e = {
parser: r
});
var n,
i,
o = t.split(','),
s = e.defaultValue;
for (r = r || [
s
], n = 0; n < o.length; n++) e.prefix = 0 === n && e.prefix,
e.defaultValue = r[n] || s,
i = new wt(o[n], e)
},
St = G._registerPluginProp = function (t) {
if (!l[t]) {
var e = t.charAt(0).toUpperCase() + t.substr(1) + 'Plugin';
Tt(t, {
  parser: function (t, r, n, i, o, s, u) {
    var h = a.com.greensock.plugins[e];
    return h ? (h._cssRegister(), l[n].parse(t, r, n, i, o, s, u))  : (V('Error: ' + e + ' js file not loaded.'), o)
  }
})
}
};
u = wt.prototype,
u.parseComplex = function (t, e, r, n, i, o) {
var s,
a,
l,
u,
h,
c,
p = this.keyword;
if (this.multi && (N.test(r) || N.test(e) ? (a = e.replace(N, '|').split('|'), l = r.replace(N, '|').split('|'))  : p && (a = [
e
], l = [
r
])), l) {
for (u = l.length > a.length ? l.length : a.length, s = 0; s < u; s++) e = a[s] = a[s] || this.dflt,
r = l[s] = l[s] || this.dflt,
p && (h = e.indexOf(p), c = r.indexOf(p), h !== c && (c === - 1 ? a[s] = a[s].split(p).join('')  : h === - 1 && (a[s] += ' ' + p)));
e = a.join(', '),
r = l.join(', ')
}
return xt(t, this.p, e, r, this.clrs, this.dflt, n, this.pr, i, o)
},
u.parse = function (t, e, r, n, o, s, a) {
return this.parseComplex(t.style, this.format(Q(t, this.p, i, !1, this.dflt)), this.format(e), o, s)
},
s.registerSpecialProp = function (t, e, r) {
Tt(t, {
parser: function (t, n, i, o, s, a, l) {
  var u = new vt(t, i, 0, 0, s, 2, i, (!1), r);
  return u.plugin = a,
  u.setRatio = e(t, n, o._tween, i),
  u
},
priority: r
})
},
s.useSVGTransformAttr = p || f;
var Ct,
Mt = 'scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent'.split(','),
Rt = Z('transform'),
kt = X + 'transform',
Pt = Z('transformOrigin'),
Dt = null !== Z('perspective'),
At = G.Transform = function () {
this.perspective = parseFloat(s.defaultTransformPerspective) || 0,
this.force3D = !(s.defaultForce3D === !1 || !Dt) && (s.defaultForce3D || 'auto')
},
Et = window.SVGElement,
Ot = function (t, e, r) {
var n,
i = B.createElementNS('http://www.w3.org/2000/svg', t),
o = /([a-z])([A-Z])/g;
for (n in r) i.setAttributeNS(null, n.replace(o, '$1-$2').toLowerCase(), r[n]);
return e.appendChild(i),
i
},
Nt = B.documentElement,
It = function () {
var t,
e,
r,
n = m || /Android/i.test(q) && !window.chrome;
return B.createElementNS && !n && (t = Ot('svg', Nt), e = Ot('rect', t, {
width: 100,
height: 50,
x: 100
}), r = e.getBoundingClientRect().width, e.style[Pt] = '50% 50%', e.style[Rt] = 'scaleX(0.5)', n = r === e.getBoundingClientRect().width && !(f && Dt), Nt.removeChild(t)),
n
}(),
Lt = function (t, e, r, n, i, o) {
var a,
l,
u,
h,
c,
p,
f,
d,
m,
g,
y,
v,
_,
x,
b = t._gsTransform,
w = Ht(t, !0);
b && (_ = b.xOrigin, x = b.yOrigin),
(!n || (a = n.split(' ')).length < 2) && (f = t.getBBox(), e = st(e).split(' '), a = [
(e[0].indexOf('%') !== - 1 ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x,
(e[1].indexOf('%') !== - 1 ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y
]),
r.xOrigin = h = parseFloat(a[0]),
r.yOrigin = c = parseFloat(a[1]),
n && w !== Bt && (p = w[0], f = w[1], d = w[2], m = w[3], g = w[4], y = w[5], v = p * m - f * d, l = h * (m / v) + c * ( - d / v) + (d * y - m * g) / v, u = h * ( - f / v) + c * (p / v) - (p * y - f * g) / v, h = r.xOrigin = a[0] = l, c = r.yOrigin = a[1] = u),
b && (o && (r.xOffset = b.xOffset, r.yOffset = b.yOffset, b = r), i || i !== !1 && s.defaultSmoothOrigin !== !1 ? (l = h - _, u = c - x, b.xOffset += l * w[0] + u * w[2] - l, b.yOffset += l * w[1] + u * w[3] - u)  : b.xOffset = b.yOffset = 0),
o || t.setAttribute('data-svg-origin', a.join(' '))
},
Ft = function (t) {
try {
return t.getBBox()
} catch (t) {
}
},
Ut = function (t) {
return !!(Et && t.getBBox && t.getCTM && Ft(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
},
Bt = [
1,
0,
0,
1,
0,
0
],
Ht = function (t, e) {
var r,
n,
i,
o,
s,
a,
l = t._gsTransform || new At,
u = 100000,
h = t.style;
if (Rt ? n = Q(t, kt, null, !0)  : t.currentStyle && (n = t.currentStyle.filter.match(E), n = n && 4 === n.length ? [
n[0].substr(4),
Number(n[2].substr(4)),
Number(n[1].substr(4)),
n[3].substr(4),
l.x || 0,
l.y || 0
].join(',')  : ''), r = !n || 'none' === n || 'matrix(1, 0, 0, 1, 0, 0)' === n, r && Rt && ((a = 'none' === J(t).display) || !t.parentNode) && (a && (o = h.display, h.display = 'block'), t.parentNode || (s = 1, Nt.appendChild(t)), n = Q(t, kt, null, !0), r = !n || 'none' === n || 'matrix(1, 0, 0, 1, 0, 0)' === n, o ? h.display = o : a && Wt(h, 'display'), s && Nt.removeChild(t)), (l.svg || t.getBBox && Ut(t)) && (r && (h[Rt] + '').indexOf('matrix') !== - 1 && (n = h[Rt], r = 0), i = t.getAttribute('transform'), r && i && (i.indexOf('matrix') !== - 1 ? (n = i, r = 0)  : i.indexOf('translate') !== - 1 && (n = 'matrix(1,0,0,1,' + i.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(',') + ')', r = 0))), r) return Bt;
for (i = (n || '').match(v) || [
], bt = i.length; --bt > - 1; ) o = Number(i[bt]),
i[bt] = (s = o - (o |= 0)) ? (s * u + (s < 0 ? - 0.5 : 0.5) | 0) / u + o : o;
return e && i.length > 6 ? [
i[0],
i[1],
i[4],
i[5],
i[12],
i[13]
] : i
},
jt = G.getTransform = function (t, r, n, i) {
if (t._gsTransform && n && !i) return t._gsTransform;
var o,
a,
l,
u,
h,
c,
p = n ? t._gsTransform || new At : new At,
f = p.scaleX < 0,
d = 0.00002,
m = 100000,
g = Dt ? parseFloat(Q(t, Pt, r, !1, '0 0 0').split(' ') [2]) || p.zOrigin || 0 : 0,
y = parseFloat(s.defaultTransformPerspective) || 0;
if (p.svg = !(!t.getBBox || !Ut(t)), p.svg && (Lt(t, Q(t, Pt, r, !1, '50% 50%') + '', p, t.getAttribute('data-svg-origin')), Ct = s.useSVGTransformAttr || It), o = Ht(t), o !== Bt) {
if (16 === o.length) {
  var v,
  _,
  x,
  b,
  w,
  T = o[0],
  S = o[1],
  C = o[2],
  M = o[3],
  R = o[4],
  k = o[5],
  P = o[6],
  D = o[7],
  A = o[8],
  E = o[9],
  O = o[10],
  N = o[12],
  I = o[13],
  L = o[14],
  U = o[11],
  B = Math.atan2(P, O);
  p.zOrigin && (L = - p.zOrigin, N = A * L - o[12], I = E * L - o[13], L = O * L + p.zOrigin - o[14]),
  p.rotationX = B * F,
  B && (b = Math.cos( - B), w = Math.sin( - B), v = R * b + A * w, _ = k * b + E * w, x = P * b + O * w, A = R * - w + A * b, E = k * - w + E * b, O = P * - w + O * b, U = D * - w + U * b, R = v, k = _, P = x),
  B = Math.atan2( - C, O),
  p.rotationY = B * F,
  B && (b = Math.cos( - B), w = Math.sin( - B), v = T * b - A * w, _ = S * b - E * w, x = C * b - O * w, E = S * w + E * b, O = C * w + O * b, U = M * w + U * b, T = v, S = _, C = x),
  B = Math.atan2(S, T),
  p.rotation = B * F,
  B && (b = Math.cos( - B), w = Math.sin( - B), T = T * b + R * w, _ = S * b + k * w, k = S * - w + k * b, P = C * - w + P * b, S = _),
  p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY),
  p.scaleX = (Math.sqrt(T * T + S * S) * m + 0.5 | 0) / m,
  p.scaleY = (Math.sqrt(k * k + E * E) * m + 0.5 | 0) / m,
  p.scaleZ = (Math.sqrt(P * P + O * O) * m + 0.5 | 0) / m,
  p.rotationX || p.rotationY ? p.skewX = 0 : (p.skewX = R || k ? Math.atan2(R, k) * F + p.rotation : p.skewX || 0, Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (f ? (p.scaleX *= - 1, p.skewX += p.rotation <= 0 ? 180 : - 180, p.rotation += p.rotation <= 0 ? 180 : - 180)  : (p.scaleY *= - 1, p.skewX += p.skewX <= 0 ? 180 : - 180))),
  p.perspective = U ? 1 / (U < 0 ? - U : U)  : 0,
  p.x = N,
  p.y = I,
  p.z = L,
  p.svg && (p.x -= p.xOrigin - (p.xOrigin * T - p.yOrigin * R), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * k))
} else if (!Dt || i || !o.length || p.x !== o[4] || p.y !== o[5] || !p.rotationX && !p.rotationY) {
  var H = o.length >= 6,
  j = H ? o[0] : 1,
  Y = o[1] || 0,
  G = o[2] || 0,
  q = H ? o[3] : 1;
  p.x = o[4] || 0,
  p.y = o[5] || 0,
  l = Math.sqrt(j * j + Y * Y),
  u = Math.sqrt(q * q + G * G),
  h = j || Y ? Math.atan2(Y, j) * F : p.rotation || 0,
  c = G || q ? Math.atan2(G, q) * F + h : p.skewX || 0,
  Math.abs(c) > 90 && Math.abs(c) < 270 && (f ? (l *= - 1, c += h <= 0 ? 180 : - 180, h += h <= 0 ? 180 : - 180)  : (u *= - 1, c += c <= 0 ? 180 : - 180)),
  p.scaleX = l,
  p.scaleY = u,
  p.rotation = h,
  p.skewX = c,
  Dt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = y, p.scaleZ = 1),
  p.svg && (p.x -= p.xOrigin - (p.xOrigin * j + p.yOrigin * G), p.y -= p.yOrigin - (p.xOrigin * Y + p.yOrigin * q))
}
p.zOrigin = g;
for (a in p) p[a] < d && p[a] > - d && (p[a] = 0)
}
return n && (t._gsTransform = p, p.svg && (Ct && t.style[Rt] ? e.delayedCall(0.001, function () {
Wt(t.style, Rt)
})  : !Ct && t.getAttribute('transform') && e.delayedCall(0.001, function () {
t.removeAttribute('transform')
}))),
p
},
Yt = function (t) {
var e,
r,
n = this.data,
i = - n.rotation * L,
o = i + n.skewX * L,
s = 100000,
a = (Math.cos(i) * n.scaleX * s | 0) / s,
l = (Math.sin(i) * n.scaleX * s | 0) / s,
u = (Math.sin(o) * - n.scaleY * s | 0) / s,
h = (Math.cos(o) * n.scaleY * s | 0) / s,
c = this.t.style,
p = this.t.currentStyle;
if (p) {
r = l,
l = - u,
u = - r,
e = p.filter,
c.filter = '';
var f,
d,
g = this.t.offsetWidth,
y = this.t.offsetHeight,
v = 'absolute' !== p.position,
_ = 'progid:DXImageTransform.Microsoft.Matrix(M11=' + a + ', M12=' + l + ', M21=' + u + ', M22=' + h,
x = n.x + g * n.xPercent / 100,
b = n.y + y * n.yPercent / 100;
if (null != n.ox && (f = (n.oxp ? g * n.ox * 0.01 : n.ox) - g / 2, d = (n.oyp ? y * n.oy * 0.01 : n.oy) - y / 2, x += f - (f * a + d * l), b += d - (f * u + d * h)), v ? (f = g / 2, d = y / 2, _ += ', Dx=' + (f - (f * a + d * l) + x) + ', Dy=' + (d - (f * u + d * h) + b) + ')')  : _ += ', sizingMethod=\'auto expand\')', e.indexOf('DXImageTransform.Microsoft.Matrix(') !== - 1 ? c.filter = e.replace(O, _)  : c.filter = _ + ' ' + e, 0 !== t && 1 !== t || 1 === a && 0 === l && 0 === u && 1 === h && (v && _.indexOf('Dx=0, Dy=0') === - 1 || T.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf('Alpha')) === - 1 && c.removeAttribute('filter')), !v) {
  var S,
  C,
  M,
  R = m < 8 ? 1 : - 1;
  for (f = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((a < 0 ? - a : a) * g + (l < 0 ? - l : l) * y)) / 2 + x), n.ieOffsetY = Math.round((y - ((h < 0 ? - h : h) * y + (u < 0 ? - u : u) * g)) / 2 + b), bt = 0; bt < 4; bt++) C = it[bt],
  S = p[C],
  r = S.indexOf('px') !== - 1 ? parseFloat(S)  : K(this.t, C, parseFloat(S), S.replace(w, '')) || 0,
  M = r !== n[C] ? bt < 2 ? - n.ieOffsetX : - n.ieOffsetY : bt < 2 ? f - n.ieOffsetX : d - n.ieOffsetY,
  c[C] = (n[C] = Math.round(r - M * (0 === bt || 2 === bt ? 1 : R))) + 'px'
}
}
},
Gt = G.set3DTransformRatio = G.setTransformRatio = function (t) {
var e,
r,
n,
i,
o,
s,
a,
l,
u,
h,
c,
p,
d,
m,
g,
y,
v,
_,
x,
b,
w,
T,
S,
C = this.data,
M = this.t.style,
R = C.rotation,
k = C.rotationX,
P = C.rotationY,
D = C.scaleX,
A = C.scaleY,
E = C.scaleZ,
O = C.x,
N = C.y,
I = C.z,
F = C.svg,
U = C.perspective,
B = C.force3D;
if (((1 === t || 0 === t) && 'auto' === B && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !B) && !I && !U && !P && !k && 1 === E || Ct && F || !Dt) return void (R || C.skewX || F ? (R *= L, T = C.skewX * L, S = 100000, e = Math.cos(R) * D, i = Math.sin(R) * D, r = Math.sin(R - T) * - A, o = Math.cos(R - T) * A, T && 'simple' === C.skewType && (v = Math.tan(T - C.skewY * L), v = Math.sqrt(1 + v * v), r *= v, o *= v, C.skewY && (v = Math.tan(C.skewY * L), v = Math.sqrt(1 + v * v), e *= v, i *= v)), F && (O += C.xOrigin - (C.xOrigin * e + C.yOrigin * r) + C.xOffset, N += C.yOrigin - (C.xOrigin * i + C.yOrigin * o) + C.yOffset, Ct && (C.xPercent || C.yPercent) && (m = this.t.getBBox(), O += 0.01 * C.xPercent * m.width, N += 0.01 * C.yPercent * m.height), m = 0.000001, O < m && O > - m && (O = 0), N < m && N > - m && (N = 0)), x = (e * S | 0) / S + ',' + (i * S | 0) / S + ',' + (r * S | 0) / S + ',' + (o * S | 0) / S + ',' + O + ',' + N + ')', F && Ct ? this.t.setAttribute('transform', 'matrix(' + x)  : M[Rt] = (C.xPercent || C.yPercent ? 'translate(' + C.xPercent + '%,' + C.yPercent + '%) matrix(' : 'matrix(') + x)  : M[Rt] = (C.xPercent || C.yPercent ? 'translate(' + C.xPercent + '%,' + C.yPercent + '%) matrix(' : 'matrix(') + D + ',0,0,' + A + ',' + O + ',' + N + ')');
if (f && (m = 0.0001, D < m && D > - m && (D = E = 0.00002), A < m && A > - m && (A = E = 0.00002), !U || C.z || C.rotationX || C.rotationY || (U = 0)), R || C.skewX) R *= L,
g = e = Math.cos(R),
y = i = Math.sin(R),
C.skewX && (R -= C.skewX * L, g = Math.cos(R), y = Math.sin(R), 'simple' === C.skewType && (v = Math.tan((C.skewX - C.skewY) * L), v = Math.sqrt(1 + v * v), g *= v, y *= v, C.skewY && (v = Math.tan(C.skewY * L), v = Math.sqrt(1 + v * v), e *= v, i *= v))),
r = - y,
o = g;
 else {
if (!(P || k || 1 !== E || U || F)) return void (M[Rt] = (C.xPercent || C.yPercent ? 'translate(' + C.xPercent + '%,' + C.yPercent + '%) translate3d(' : 'translate3d(') + O + 'px,' + N + 'px,' + I + 'px)' + (1 !== D || 1 !== A ? ' scale(' + D + ',' + A + ')' : ''));
e = o = 1,
r = i = 0
}
u = 1,
n = s = a = l = h = c = 0,
p = U ? - 1 / U : 0,
d = C.zOrigin,
m = 0.000001,
b = ',',
w = '0',
R = P * L,
R && (g = Math.cos(R), y = Math.sin(R), a = - y, h = p * - y, n = e * y, s = i * y, u = g, p *= g, e *= g, i *= g),
R = k * L,
R && (g = Math.cos(R), y = Math.sin(R), v = r * g + n * y, _ = o * g + s * y, l = u * y, c = p * y, n = r * - y + n * g, s = o * - y + s * g, u *= g, p *= g, r = v, o = _),
1 !== E && (n *= E, s *= E, u *= E, p *= E),
1 !== A && (r *= A, o *= A, l *= A, c *= A),
1 !== D && (e *= D, i *= D, a *= D, h *= D),
(d || F) && (d && (O += n * - d, N += s * - d, I += u * - d + d), F && (O += C.xOrigin - (C.xOrigin * e + C.yOrigin * r) + C.xOffset, N += C.yOrigin - (C.xOrigin * i + C.yOrigin * o) + C.yOffset), O < m && O > - m && (O = w), N < m && N > - m && (N = w), I < m && I > - m && (I = 0)),
x = C.xPercent || C.yPercent ? 'translate(' + C.xPercent + '%,' + C.yPercent + '%) matrix3d(' : 'matrix3d(',
x += (e < m && e > - m ? w : e) + b + (i < m && i > - m ? w : i) + b + (a < m && a > - m ? w : a),
x += b + (h < m && h > - m ? w : h) + b + (r < m && r > - m ? w : r) + b + (o < m && o > - m ? w : o),
k || P || 1 !== E ? (x += b + (l < m && l > - m ? w : l) + b + (c < m && c > - m ? w : c) + b + (n < m && n > - m ? w : n), x += b + (s < m && s > - m ? w : s) + b + (u < m && u > - m ? w : u) + b + (p < m && p > - m ? w : p) + b)  : x += ',0,0,0,0,1,0,',
x += O + b + N + b + I + b + (U ? 1 + - I / U : 1) + ')',
M[Rt] = x
};
u = At.prototype,
u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0,
u.scaleX = u.scaleY = u.scaleZ = 1,
Tt('transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin', {
parser: function (t, e, r, n, o, a, l) {
if (n._lastParsedTransform === l) return o;
n._lastParsedTransform = l;
var u;
'function' == typeof l[r] && (u = l[r], l[r] = e);
var h,
c,
p,
f,
d,
m,
v,
_,
x,
b = t._gsTransform,
w = t.style,
T = 0.000001,
S = Mt.length,
C = l,
M = {
},
R = 'transformOrigin',
k = jt(t, i, !0, C.parseTransform),
P = C.transform && ('function' == typeof C.transform ? C.transform(y, g)  : C.transform);
if (n._transform = k, P && 'string' == typeof P && Rt) c = j.style,
c[Rt] = P,
c.display = 'block',
c.position = 'absolute',
B.body.appendChild(j),
h = jt(j, null, !1),
k.svg && (m = k.xOrigin, v = k.yOrigin, h.x -= k.xOffset, h.y -= k.yOffset, (C.transformOrigin || C.svgOrigin) && (P = {
}, Lt(t, st(C.transformOrigin), P, C.svgOrigin, C.smoothOrigin, !0), m = P.xOrigin, v = P.yOrigin, h.x -= P.xOffset - k.xOffset, h.y -= P.yOffset - k.yOffset), (m || v) && (_ = Ht(j, !0), h.x -= m - (m * _[0] + v * _[2]), h.y -= v - (m * _[1] + v * _[3]))),
B.body.removeChild(j),
h.perspective || (h.perspective = k.perspective),
null != C.xPercent && (h.xPercent = lt(C.xPercent, k.xPercent)),
null != C.yPercent && (h.yPercent = lt(C.yPercent, k.yPercent));
 else if ('object' == typeof C) {
  if (h = {
    scaleX: lt(null != C.scaleX ? C.scaleX : C.scale, k.scaleX),
    scaleY: lt(null != C.scaleY ? C.scaleY : C.scale, k.scaleY),
    scaleZ: lt(C.scaleZ, k.scaleZ),
    x: lt(C.x, k.x),
    y: lt(C.y, k.y),
    z: lt(C.z, k.z),
    xPercent: lt(C.xPercent, k.xPercent),
    yPercent: lt(C.yPercent, k.yPercent),
    perspective: lt(C.transformPerspective, k.perspective)
  }, d = C.directionalRotation, null != d) if ('object' == typeof d) for (c in d) C[c] = d[c];
   else C.rotation = d;
  'string' == typeof C.x && C.x.indexOf('%') !== - 1 && (h.x = 0, h.xPercent = lt(C.x, k.xPercent)),
  'string' == typeof C.y && C.y.indexOf('%') !== - 1 && (h.y = 0, h.yPercent = lt(C.y, k.yPercent)),
  h.rotation = ut('rotation' in C ? C.rotation : 'shortRotation' in C ? C.shortRotation + '_short' : 'rotationZ' in C ? C.rotationZ : k.rotation - k.skewY, k.rotation - k.skewY, 'rotation', M),
  Dt && (h.rotationX = ut('rotationX' in C ? C.rotationX : 'shortRotationX' in C ? C.shortRotationX + '_short' : k.rotationX || 0, k.rotationX, 'rotationX', M), h.rotationY = ut('rotationY' in C ? C.rotationY : 'shortRotationY' in C ? C.shortRotationY + '_short' : k.rotationY || 0, k.rotationY, 'rotationY', M)),
  h.skewX = ut(C.skewX, k.skewX - k.skewY),
  (h.skewY = ut(C.skewY, k.skewY)) && (h.skewX += h.skewY, h.rotation += h.skewY)
}
for (Dt && null != C.force3D && (k.force3D = C.force3D, f = !0), k.skewType = C.skewType || k.skewType || s.defaultSkewType, p = k.force3D || k.z || k.rotationX || k.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == C.scale || (h.scaleZ = 1); --S > - 1; ) x = Mt[S],
P = h[x] - k[x],
(P > T || P < - T || null != C[x] || null != U[x]) && (f = !0, o = new vt(k, x, k[x], P, o), x in M && (o.e = M[x]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
return P = C.transformOrigin,
k.svg && (P || C.svgOrigin) && (m = k.xOffset, v = k.yOffset, Lt(t, st(P), h, C.svgOrigin, C.smoothOrigin), o = _t(k, 'xOrigin', (b ? k : h).xOrigin, h.xOrigin, o, R), o = _t(k, 'yOrigin', (b ? k : h).yOrigin, h.yOrigin, o, R), m === k.xOffset && v === k.yOffset || (o = _t(k, 'xOffset', b ? m : k.xOffset, k.xOffset, o, R), o = _t(k, 'yOffset', b ? v : k.yOffset, k.yOffset, o, R)), P = Ct ? null : '0px 0px'),
(P || Dt && p && k.zOrigin) && (Rt ? (f = !0, x = Pt, P = (P || Q(t, x, i, !1, '50% 50%')) + '', o = new vt(w, x, 0, 0, o, ( - 1), R), o.b = w[x], o.plugin = a, Dt ? (c = k.zOrigin, P = P.split(' '), k.zOrigin = (P.length > 2 && (0 === c || '0px' !== P[2]) ? parseFloat(P[2])  : c) || 0, o.xs0 = o.e = P[0] + ' ' + (P[1] || '50%') + ' 0px', o = new vt(k, 'zOrigin', 0, 0, o, ( - 1), o.n), o.b = c, o.xs0 = o.e = k.zOrigin)  : o.xs0 = o.e = P)  : st(P + '', k)),
f && (n._transformType = k.svg && Ct || !p && 3 !== this._transformType ? 2 : 3),
u && (l[r] = u),
o
},
prefix: !0
}),
Tt('boxShadow', {
defaultValue: '0px 0px 0px 0px #999',
prefix: !0,
color: !0,
multi: !0,
keyword: 'inset'
}),
Tt('borderRadius', {
defaultValue: '0px',
parser: function (t, e, r, o, s, a) {
e = this.format(e);
var l,
u,
h,
c,
p,
f,
d,
m,
g,
y,
v,
_,
x,
b,
w,
T,
S = [
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomRightRadius',
  'borderBottomLeftRadius'
],
C = t.style;
for (g = parseFloat(t.offsetWidth), y = parseFloat(t.offsetHeight), l = e.split(' '), u = 0; u < S.length; u++) this.p.indexOf('border') && (S[u] = Z(S[u])),
p = c = Q(t, S[u], i, !1, '0px'),
p.indexOf(' ') !== - 1 && (c = p.split(' '), p = c[0], c = c[1]),
f = h = l[u],
d = parseFloat(p),
_ = p.substr((d + '').length),
x = '=' === f.charAt(1),
x ? (m = parseInt(f.charAt(0) + '1', 10), f = f.substr(2), m *= parseFloat(f), v = f.substr((m + '').length - (m < 0 ? 1 : 0)) || '')  : (m = parseFloat(f), v = f.substr((m + '').length)),
'' === v && (v = n[r] || _),
v !== _ && (b = K(t, 'borderLeft', d, _), w = K(t, 'borderTop', d, _), '%' === v ? (p = b / g * 100 + '%', c = w / y * 100 + '%')  : 'em' === v ? (T = K(t, 'borderLeft', 1, 'em'), p = b / T + 'em', c = w / T + 'em')  : (p = b + 'px', c = w + 'px'), x && (f = parseFloat(p) + m + v, h = parseFloat(c) + m + v)),
s = xt(C, S[u], p + ' ' + c, f + ' ' + h, !1, '0px', s);
return s
},
prefix: !0,
formatter: mt('0px 0px 0px 0px', !1, !0)
}),
Tt('borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius', {
defaultValue: '0px',
parser: function (t, e, r, n, o, s) {
return xt(t.style, r, this.format(Q(t, r, i, !1, '0px 0px')), this.format(e), !1, '0px', o)
},
prefix: !0,
formatter: mt('0px 0px', !1, !0)
}),
Tt('backgroundPosition', {
defaultValue: '0 0',
parser: function (t, e, r, n, o, s) {
var a,
l,
u,
h,
c,
p,
f = 'background-position',
d = i || J(t, null),
g = this.format((d ? m ? d.getPropertyValue(f + '-x') + ' ' + d.getPropertyValue(f + '-y')  : d.getPropertyValue(f)  : t.currentStyle.backgroundPositionX + ' ' + t.currentStyle.backgroundPositionY) || '0 0'),
y = this.format(e);
if (g.indexOf('%') !== - 1 != (y.indexOf('%') !== - 1) && y.split(',').length < 2 && (p = Q(t, 'backgroundImage').replace(P, ''), p && 'none' !== p)) {
  for (a = g.split(' '), l = y.split(' '), Y.setAttribute('src', p), u = 2; --u > - 1; ) g = a[u],
  h = g.indexOf('%') !== - 1,
  h !== (l[u].indexOf('%') !== - 1) && (c = 0 === u ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, a[u] = h ? parseFloat(g) / 100 * c + 'px' : parseFloat(g) / c * 100 + '%');
  g = a.join(' ')
}
return this.parseComplex(t.style, g, y, o, s)
},
formatter: st
}),
Tt('backgroundSize', {
defaultValue: '0 0',
formatter: function (t) {
return t += '',
st(t.indexOf(' ') === - 1 ? t + ' ' + t : t)
}
}),
Tt('perspective', {
defaultValue: '0px',
prefix: !0
}),
Tt('perspectiveOrigin', {
defaultValue: '50% 50%',
prefix: !0
}),
Tt('transformStyle', {
prefix: !0
}),
Tt('backfaceVisibility', {
prefix: !0
}),
Tt('userSelect', {
prefix: !0
}),
Tt('margin', {
parser: gt('marginTop,marginRight,marginBottom,marginLeft')
}),
Tt('padding', {
parser: gt('paddingTop,paddingRight,paddingBottom,paddingLeft')
}),
Tt('clip', {
defaultValue: 'rect(0px,0px,0px,0px)',
parser: function (t, e, r, n, o, s) {
var a,
l,
u;
return m < 9 ? (l = t.currentStyle, u = m < 8 ? ' ' : ',', a = 'rect(' + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ')', e = this.format(e).split(',').join(u))  : (a = this.format(Q(t, this.p, i, !1, this.dflt)), e = this.format(e)),
this.parseComplex(t.style, a, e, o, s)
}
}),
Tt('textShadow', {
defaultValue: '0px 0px 0px #999',
color: !0,
multi: !0
}),
Tt('autoRound,strictUnits', {
parser: function (t, e, r, n, i) {
return i
}
}),
Tt('border', {
defaultValue: '0px solid #000',
parser: function (t, e, r, n, o, s) {
var a = Q(t, 'borderTopWidth', i, !1, '0px'),
l = this.format(e).split(' '),
u = l[0].replace(w, '');
return 'px' !== u && (a = parseFloat(a) / K(t, 'borderTopWidth', 1, u) + u),
this.parseComplex(t.style, this.format(a + ' ' + Q(t, 'borderTopStyle', i, !1, 'solid') + ' ' + Q(t, 'borderTopColor', i, !1, '#000')), l.join(' '), o, s)
},
color: !0,
formatter: function (t) {
var e = t.split(' ');
return e[0] + ' ' + (e[1] || 'solid') + ' ' + (t.match(dt) || [
  '#000'
]) [0]
}
}),
Tt('borderWidth', {
parser: gt('borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth')
}),
Tt('float,cssFloat,styleFloat', {
parser: function (t, e, r, n, i, o) {
var s = t.style,
a = 'cssFloat' in s ? 'cssFloat' : 'styleFloat';
return new vt(s, a, 0, 0, i, ( - 1), r, (!1), 0, s[a], e)
}
});
var qt = function (t) {
var e,
r = this.t,
n = r.filter || Q(this.data, 'filter') || '',
i = this.s + this.c * t | 0;
100 === i && (n.indexOf('atrix(') === - 1 && n.indexOf('radient(') === - 1 && n.indexOf('oader(') === - 1 ? (r.removeAttribute('filter'), e = !Q(this.data, 'filter'))  : (r.filter = n.replace(C, ''), e = !0)),
e || (this.xn1 && (r.filter = n = n || 'alpha(opacity=' + i + ')'), n.indexOf('pacity') === - 1 ? 0 === i && this.xn1 || (r.filter = n + ' alpha(opacity=' + i + ')')  : r.filter = n.replace(T, 'opacity=' + i))
};
Tt('opacity,alpha,autoAlpha', {
defaultValue: '1',
parser: function (t, e, r, n, o, s) {
var a = parseFloat(Q(t, 'opacity', i, !1, '1')),
l = t.style,
u = 'autoAlpha' === r;
return 'string' == typeof e && '=' === e.charAt(1) && (e = ('-' === e.charAt(0) ? - 1 : 1) * parseFloat(e.substr(2)) + a),
u && 1 === a && 'hidden' === Q(t, 'visibility', i) && 0 !== e && (a = 0),
W ? o = new vt(l, 'opacity', a, e - a, o)  : (o = new vt(l, 'opacity', 100 * a, 100 * (e - a), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = 'alpha(opacity=' + o.s + ')', o.e = 'alpha(opacity=' + (o.s + o.c) + ')', o.data = t, o.plugin = s, o.setRatio = qt),
u && (o = new vt(l, 'visibility', 0, 0, o, ( - 1), null, (!1), 0, 0 !== a ? 'inherit' : 'hidden', 0 === e ? 'hidden' : 'inherit'), o.xs0 = 'inherit', n._overwriteProps.push(o.n), n._overwriteProps.push(r)),
o
}
});
var Wt = function (t, e) {
e && (t.removeProperty ? ('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6) || (e = '-' + e), t.removeProperty(e.replace(R, '-$1').toLowerCase()))  : t.removeAttribute(e))
},
zt = function (t) {
if (this.t._gsClassPT = this, 1 === t || 0 === t) {
this.t.setAttribute('class', 0 === t ? this.b : this.e);
for (var e = this.data, r = this.t.style; e; ) e.v ? r[e.p] = e.v : Wt(r, e.p),
e = e._next;
1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
} else this.t.getAttribute('class') !== this.e && this.t.setAttribute('class', this.e)
};
Tt('className', {
parser: function (t, e, n, o, s, a, l) {
var u,
h,
c,
p,
f,
d = t.getAttribute('class') || '',
m = t.style.cssText;
if (s = o._classNamePT = new vt(t, n, 0, 0, s, 2), s.setRatio = zt, s.pr = - 11, r = !0, s.b = d, h = et(t, i), c = t._gsClassPT) {
  for (p = {
  }, f = c.data; f; ) p[f.p] = 1,
  f = f._next;
  c.setRatio(1)
}
return t._gsClassPT = s,
s.e = '=' !== e.charAt(1) ? e : d.replace(new RegExp('(?:\\s|^)' + e.substr(2) + '(?![\\w-])'), '') + ('+' === e.charAt(0) ? ' ' + e.substr(2)  : ''),
t.setAttribute('class', s.e),
u = rt(t, h, et(t), l, p),
t.setAttribute('class', d),
s.data = u.firstMPT,
t.style.cssText = m,
s = s.xfirst = o.parse(t, u.difs, s, a)
}
});
var Vt = function (t) {
if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && 'isFromStart' !== this.data.data) {
var e,
r,
n,
i,
o,
s = this.t.style,
a = l.transform.parse;
if ('all' === this.e) s.cssText = '',
i = !0;
 else for (e = this.e.split(' ').join('').split(','), n = e.length; --n > - 1; ) r = e[n],
l[r] && (l[r].parse === a ? i = !0 : r = 'transformOrigin' === r ? Pt : l[r].p),
Wt(s, r);
i && (Wt(s, Rt), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute('data-svg-origin'), this.t.removeAttribute('transform')), delete this.t._gsTransform))
}
};
for (Tt('clearProps', {
parser: function (t, e, n, i, o) {
return o = new vt(t, n, 0, 0, o, 2),
o.setRatio = Vt,
o.e = e,
o.pr = - 10,
o.data = i._tween,
r = !0,
o
}
}), u = 'bezier,throwProps,physicsProps,physics2D'.split(','), bt = u.length; bt--; ) St(u[bt]);
u = s.prototype,
u._firstPT = u._lastParsedTransform = u._transform = null,
u._onInitTween = function (t, e, a, u) {
if (!t.nodeType) return !1;
this._target = g = t,
this._tween = a,
this._vars = e,
y = u,
h = e.autoRound,
r = !1,
n = e.suffixMap || s.suffixMap,
i = J(t, ''),
o = this._overwriteProps;
var f,
m,
v,
_,
x,
b,
w,
T,
C,
M = t.style;
if (c && '' === M.zIndex && (f = Q(t, 'zIndex', i), 'auto' !== f && '' !== f || this._addLazySet(M, 'zIndex', 0)), 'string' == typeof e && (_ = M.cssText, f = et(t, i), M.cssText = _ + ';' + e, f = rt(t, f, et(t)).difs, !W && S.test(e) && (f.opacity = parseFloat(RegExp.$1)), e = f, M.cssText = _), e.className ? this._firstPT = m = l.className.parse(t, e.className, 'className', this, null, null, e)  : this._firstPT = m = this.parse(t, e, null), this._transformType) {
for (C = 3 === this._transformType, Rt ? p && (c = !0, '' === M.zIndex && (w = Q(t, 'zIndex', i), 'auto' !== w && '' !== w || this._addLazySet(M, 'zIndex', 0)), d && this._addLazySet(M, 'WebkitBackfaceVisibility', this._vars.WebkitBackfaceVisibility || (C ? 'visible' : 'hidden')))  : M.zoom = 1, v = m; v && v._next; ) v = v._next;
T = new vt(t, 'transform', 0, 0, null, 2),
this._linkCSSP(T, null, v),
T.setRatio = Rt ? Gt : Yt,
T.data = this._transform || jt(t, i, !0),
T.tween = a,
T.pr = - 1,
o.pop()
}
if (r) {
for (; m; ) {
  for (b = m._next, v = _; v && v.pr > m.pr; ) v = v._next;
  (m._prev = v ? v._prev : x) ? m._prev._next = m : _ = m,
  (m._next = v) ? v._prev = m : x = m,
  m = b
}
this._firstPT = _
}
return !0
},
u.parse = function (t, e, r, o) {
var s,
a,
u,
c,
p,
f,
d,
m,
v,
_,
x = t.style;
for (s in e) f = e[s],
'function' == typeof f && (f = f(y, g)),
a = l[s],
a ? r = a.parse(t, f, s, this, r, o, e)  : (p = Q(t, s, i) + '', v = 'string' == typeof f, 'color' === s || 'fill' === s || 'stroke' === s || s.indexOf('Color') !== - 1 || v && M.test(f) ? (v || (f = pt(f), f = (f.length > 3 ? 'rgba(' : 'rgb(') + f.join(',') + ')'), r = xt(x, s, p, f, !0, 'transparent', r, 0, o))  : v && I.test(f) ? r = xt(x, s, p, f, !0, null, r, 0, o)  : (u = parseFloat(p), d = u || 0 === u ? p.substr((u + '').length)  : '', '' !== p && 'auto' !== p || ('width' === s || 'height' === s ? (u = ot(t, s, i), d = 'px')  : 'left' === s || 'top' === s ? (u = tt(t, s, i), d = 'px')  : (u = 'opacity' !== s ? 0 : 1, d = '')), _ = v && '=' === f.charAt(1), _ ? (c = parseInt(f.charAt(0) + '1', 10), f = f.substr(2), c *= parseFloat(f), m = f.replace(w, ''))  : (c = parseFloat(f), m = v ? f.replace(w, '')  : ''), '' === m && (m = s in n ? n[s] : d), f = c || 0 === c ? (_ ? c + u : c) + m : e[s], d !== m && '' !== m && (c || 0 === c) && u && (u = K(t, s, u, d), '%' === m ? (u /= K(t, s, 100, '%') / 100, e.strictUnits !== !0 && (p = u + '%'))  : 'em' === m || 'rem' === m || 'vw' === m || 'vh' === m ? u /= K(t, s, 1, m)  : 'px' !== m && (c = K(t, s, c, m), m = 'px'), _ && (c || 0 === c) && (f = c + u + m)), _ && (c += u), !u && 0 !== u || !c && 0 !== c ? void 0 !== x[s] && (f || f + '' != 'NaN' && null != f) ? (r = new vt(x, s, c || u || 0, 0, r, ( - 1), s, (!1), 0, p, f), r.xs0 = 'none' !== f || 'display' !== s && s.indexOf('Style') === - 1 ? f : p)  : V('invalid ' + s + ' tween value: ' + e[s])  : (r = new vt(x, s, u, c - u, r, 0, s, h !== !1 && ('px' === m || 'zIndex' === s), 0, p, f), r.xs0 = m))),
o && r && !r.plugin && (r.plugin = o);
return r
},
u.setRatio = function (t) {
var e,
r,
n,
i = this._firstPT,
o = 0.000001;
if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === - 0.000001) for (; i; ) {
if (e = i.c * t + i.s, i.r ? e = Math.round(e)  : e < o && e > - o && (e = 0), i.type) if (1 === i.type) if (n = i.l, 2 === n) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2;
 else if (3 === n) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
 else if (4 === n) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
 else if (5 === n) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
 else {
  for (r = i.xs0 + e + i.xs1, n = 1; n < i.l; n++) r += i['xn' + n] + i['xs' + (n + 1)];
  i.t[i.p] = r
} else i.type === - 1 ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(t);
 else i.t[i.p] = e + i.xs0;
i = i._next
} else for (; i; ) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(t),
i = i._next;
 else for (; i; ) {
if (2 !== i.type) if (i.r && i.type !== - 1) if (e = Math.round(i.s + i.c), i.type) {
  if (1 === i.type) {
    for (n = i.l, r = i.xs0 + e + i.xs1, n = 1; n < i.l; n++) r += i['xn' + n] + i['xs' + (n + 1)];
    i.t[i.p] = r
  }
} else i.t[i.p] = e + i.xs0;
 else i.t[i.p] = i.e;
 else i.setRatio(t);
i = i._next
}
},
u._enableTransforms = function (t) {
this._transform = this._transform || jt(this._target, i, !0),
this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
};
var Xt = function (t) {
this.t[this.p] = this.e,
this.data._linkCSSP(this, this._next, null, !0)
};
u._addLazySet = function (t, e, r) {
var n = this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2);
n.e = r,
n.setRatio = Xt,
n.data = this
},
u._linkCSSP = function (t, e, r, n) {
return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), r ? r._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = r),
t
},
u._mod = function (t) {
for (var e = this._firstPT; e; ) 'function' == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
e = e._next
},
u._kill = function (e) {
var r,
n,
i,
o = e;
if (e.autoAlpha || e.alpha) {
o = {
};
for (n in e) o[n] = e[n];
o.opacity = 1,
o.autoAlpha && (o.visibility = 1)
}
for (e.className && (r = this._classNamePT) && (i = r.xfirst, i && i._prev ? this._linkCSSP(i._prev, r._next, i._prev._prev)  : i === this._firstPT && (this._firstPT = r._next), r._next && this._linkCSSP(r._next, r._next._next, i._prev), this._classNamePT = null), r = this._firstPT; r; ) r.plugin && r.plugin !== n && r.plugin._kill && (r.plugin._kill(e), n = r.plugin),
r = r._next;
return t.prototype._kill.call(this, o)
};
var $t = function (t, e, r) {
var n,
i,
o,
s;
if (t.slice) for (i = t.length; --i > - 1; ) $t(t[i], e, r);
 else for (n = t.childNodes, i = n.length; --i > - 1; ) o = n[i],
s = o.type,
o.style && (e.push(et(o)), r && r.push(o)),
1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || $t(o, e, r)
};
return s.cascadeTo = function (t, r, n) {
var i,
o,
s,
a,
l = e.to(t, r, n),
u = [
l
],
h = [
],
c = [
],
p = [
],
f = e._internals.reservedProps;
for (t = l._targets || l.target, $t(t, h, p), l.render(r, !0, !0), $t(t, c), l.render(0, !0, !0), l._enabled(!0), i = p.length; --i > - 1; ) if (o = rt(p[i], h[i], c[i]), o.firstMPT) {
o = o.difs;
for (s in n) f[s] && (o[s] = n[s]);
a = {
};
for (s in o) a[s] = h[i][s];
u.push(e.fromTo(p[i], r, a, o))
}
return u
},
t.activate([s]),
s
}, !0),
function () {
var t = _gsScope._gsDefine.plugin({
propName: 'roundProps',
version: '1.6.0',
priority: - 1,
API: 2,
init: function (t, e, r) {
return this._tween = r,
!0
}
}),
e = function (t) {
for (; t; ) t.f || t.blob || (t.m = Math.round),
t = t._next
},
r = t.prototype;
r._onInitAllProps = function () {
for (var t, r, n, i = this._tween, o = i.vars.roundProps.join ? i.vars.roundProps : i.vars.roundProps.split(','), s = o.length, a = {
}, l = i._propLookup.roundProps; --s > - 1; ) a[o[s]] = Math.round;
for (s = o.length; --s > - 1; ) for (t = o[s], r = i._firstPT; r; ) n = r._next,
r.pg ? r.t._mod(a)  : r.n === t && (2 === r.f && r.t ? e(r.t._firstPT)  : (this._add(r.t, t, r.s, r.c), n && (n._prev = r._prev), r._prev ? r._prev._next = n : i._firstPT === r && (i._firstPT = n), r._next = r._prev = null, i._propLookup[t] = l)),
r = n;
return !1
},
r._add = function (t, e, r, n) {
this._addTween(t, e, r, r + n, e, Math.round),
this._overwriteProps.push(e)
}
}(),
function () {
_gsScope._gsDefine.plugin({
propName: 'attr',
API: 2,
version: '0.6.0',
init: function (t, e, r, n) {
var i,
o;
if ('function' != typeof t.setAttribute) return !1;
for (i in e) o = e[i],
'function' == typeof o && (o = o(n, t)),
this._addTween(t, 'setAttribute', t.getAttribute(i) + '', o + '', i, !1, i),
this._overwriteProps.push(i);
return !0
}
})
}(),
_gsScope._gsDefine.plugin({
propName: 'directionalRotation',
version: '0.3.0',
API: 2,
init: function (t, e, r, n) {
'object' != typeof e && (e = {
rotation: e
}),
this.finals = {
};
var i,
o,
s,
a,
l,
u,
h = e.useRadians === !0 ? 2 * Math.PI : 360,
c = 0.000001;
for (i in e) 'useRadians' !== i && (a = e[i], 'function' == typeof a && (a = a(n, t)), u = (a + '').split('_'), o = u[0], s = parseFloat('function' != typeof t[i] ? t[i] : t[i.indexOf('set') || 'function' != typeof t['get' + i.substr(3)] ? i : 'get' + i.substr(3)]()), a = this.finals[i] = 'string' == typeof o && '=' === o.charAt(1) ? s + parseInt(o.charAt(0) + '1', 10) * Number(o.substr(2))  : Number(o) || 0, l = a - s, u.length && (o = u.join('_'), o.indexOf('short') !== - 1 && (l %= h, l !== l % (h / 2) && (l = l < 0 ? l + h : l - h)), o.indexOf('_cw') !== - 1 && l < 0 ? l = (l + 9999999999 * h) % h - (l / h | 0) * h : o.indexOf('ccw') !== - 1 && l > 0 && (l = (l - 9999999999 * h) % h - (l / h | 0) * h)), (l > c || l < - c) && (this._addTween(t, i, s, s + l, i), this._overwriteProps.push(i)));
return !0
},
set: function (t) {
var e;
if (1 !== t) this._super.setRatio.call(this, t);
 else for (e = this._firstPT; e; ) e.f ? e.t[e.p](this.finals[e.p])  : e.t[e.p] = this.finals[e.p],
e = e._next
}
})._autoCSS = !0,
_gsScope._gsDefine('easing.Back', [
'easing.Ease'
], function (t) {
var e,
r,
n,
i = _gsScope.GreenSockGlobals || _gsScope,
o = i.com.greensock,
s = 2 * Math.PI,
a = Math.PI / 2,
l = o._class,
u = function (e, r) {
var n = l('easing.' + e, function () {
}, !0),
i = n.prototype = new t;
return i.constructor = n,
i.getRatio = r,
n
},
h = t.register || function () {
},
c = function (t, e, r, n, i) {
var o = l('easing.' + t, {
easeOut: new e,
easeIn: new r,
easeInOut: new n
}, !0);
return h(o, t),
o
},
p = function (t, e, r) {
this.t = t,
this.v = e,
r && (this.next = r, r.prev = this, this.c = r.v - e, this.gap = r.t - t)
},
f = function (e, r) {
var n = l('easing.' + e, function (t) {
this._p1 = t || 0 === t ? t : 1.70158,
this._p2 = 1.525 * this._p1
}, !0),
i = n.prototype = new t;
return i.constructor = n,
i.getRatio = r,
i.config = function (t) {
return new n(t)
},
n
},
d = c('Back', f('BackOut', function (t) {
return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
}), f('BackIn', function (t) {
return t * t * ((this._p1 + 1) * t - this._p1)
}), f('BackInOut', function (t) {
return (t *= 2) < 1 ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)  : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
})),
m = l('easing.SlowMo', function (t, e, r) {
e = e || 0 === e ? e : 0.7,
null == t ? t = 0.7 : t > 1 && (t = 1),
this._p = 1 !== t ? e : 0,
this._p1 = (1 - t) / 2,
this._p2 = t,
this._p3 = this._p1 + this._p2,
this._calcEnd = r === !0
}, !0),
g = m.prototype = new t;
return g.constructor = m,
g.getRatio = function (t) {
var e = t + (0.5 - t) * this._p;
return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
},
m.ease = new m(0.7, 0.7),
g.config = m.config = function (t, e, r) {
return new m(t, e, r)
},
e = l('easing.SteppedEase', function (t) {
t = t || 1,
this._p1 = 1 / t,
this._p2 = t + 1
}, !0),
g = e.prototype = new t,
g.constructor = e,
g.getRatio = function (t) {
return t < 0 ? t = 0 : t >= 1 && (t = 0.999999999),
(this._p2 * t >> 0) * this._p1
},
g.config = e.config = function (t) {
return new e(t)
},
r = l('easing.RoughEase', function (e) {
e = e || {
};
for (var r, n, i, o, s, a, l = e.taper || 'none', u = [
], h = 0, c = 0 | (e.points || 20), f = c, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, y = 'number' == typeof e.strength ? 0.4 * e.strength : 0.4; --f > - 1; ) r = d ? Math.random()  : 1 / c * f,
n = g ? g.getRatio(r)  : r,
'none' === l ? i = y : 'out' === l ? (o = 1 - r, i = o * o * y)  : 'in' === l ? i = r * r * y : r < 0.5 ? (o = 2 * r, i = o * o * 0.5 * y)  : (o = 2 * (1 - r), i = o * o * 0.5 * y),
d ? n += Math.random() * i - 0.5 * i : f % 2 ? n += 0.5 * i : n -= 0.5 * i,
m && (n > 1 ? n = 1 : n < 0 && (n = 0)),
u[h++] = {
x: r,
y: n
};
for (u.sort(function (t, e) {
return t.x - e.x
}), a = new p(1, 1, null), f = c; --f > - 1; ) s = u[f],
a = new p(s.x, s.y, a);
this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
}, !0),
g = r.prototype = new t,
g.constructor = r,
g.getRatio = function (t) {
var e = this._prev;
if (t > e.t) {
for (; e.next && t >= e.t; ) e = e.next;
e = e.prev
} else for (; e.prev && t <= e.t; ) e = e.prev;
return this._prev = e,
e.v + (t - e.t) / e.gap * e.c
},
g.config = function (t) {
return new r(t)
},
r.ease = new r,
c('Bounce', u('BounceOut', function (t) {
return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
}), u('BounceIn', function (t) {
return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)  : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)  : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)
}), u('BounceInOut', function (t) {
var e = t < 0.5;
return t = e ? 1 - 2 * t : 2 * t - 1,
t = t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375,
e ? 0.5 * (1 - t)  : 0.5 * t + 0.5
})),
c('Circ', u('CircOut', function (t) {
return Math.sqrt(1 - (t -= 1) * t)
}), u('CircIn', function (t) {
return - (Math.sqrt(1 - t * t) - 1)
}), u('CircInOut', function (t) {
return (t *= 2) < 1 ? - 0.5 * (Math.sqrt(1 - t * t) - 1)  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
})),
n = function (e, r, n) {
var i = l('easing.' + e, function (t, e) {
this._p1 = t >= 1 ? t : 1,
this._p2 = (e || n) / (t < 1 ? t : 1),
this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0),
this._p2 = s / this._p2
}, !0),
o = i.prototype = new t;
return o.constructor = i,
o.getRatio = r,
o.config = function (t, e) {
return new i(t, e)
},
i
},
c('Elastic', n('ElasticOut', function (t) {
return this._p1 * Math.pow(2, - 10 * t) * Math.sin((t - this._p3) * this._p2) + 1
}, 0.3), n('ElasticIn', function (t) {
return - (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
}, 0.3), n('ElasticInOut', function (t) {
return (t *= 2) < 1 ? - 0.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))  : this._p1 * Math.pow(2, - 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * 0.5 + 1
}, 0.45)),
c('Expo', u('ExpoOut', function (t) {
return 1 - Math.pow(2, - 10 * t)
}), u('ExpoIn', function (t) {
return Math.pow(2, 10 * (t - 1)) - 0.001
}), u('ExpoInOut', function (t) {
return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1))  : 0.5 * (2 - Math.pow(2, - 10 * (t - 1)))
})),
c('Sine', u('SineOut', function (t) {
return Math.sin(t * a)
}), u('SineIn', function (t) {
return - Math.cos(t * a) + 1
}), u('SineInOut', function (t) {
return - 0.5 * (Math.cos(Math.PI * t) - 1)
})),
l('easing.EaseLookup', {
find: function (e) {
return t.map[e]
}
}, !0),
h(i.SlowMo, 'SlowMo', 'ease,'),
h(r, 'RoughEase', 'ease,'),
h(e, 'SteppedEase', 'ease,'),
d
}, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop() (),
function (t, e) {
'use strict';
var r = {
},
n = t.GreenSockGlobals = t.GreenSockGlobals || t;
if (!n.TweenLite) {
var i,
o,
s,
a,
l,
u = function (t) {
var e,
r = t.split('.'),
i = n;
for (e = 0; e < r.length; e++) i[r[e]] = i = i[r[e]] || {
};
return i
},
h = u('com.greensock'),
c = 1e-10,
p = function (t) {
var e,
r = [
],
n = t.length;
for (e = 0; e !== n; r.push(t[e++]));
return r
},
f = function () {
},
d = function () {
var t = Object.prototype.toString,
e = t.call([]);
return function (r) {
return null != r && (r instanceof Array || 'object' == typeof r && !!r.push && t.call(r) === e)
}
}(),
m = {
},
g = function (i, o, s, a) {
this.sc = m[i] ? m[i].sc : [
],
m[i] = this,
this.gsClass = null,
this.func = s;
var l = [
];
this.check = function (h) {
for (var c, p, f, d, y, v = o.length, _ = v; --v > - 1; ) (c = m[o[v]] || new g(o[v], [
])).gsClass ? (l[v] = c.gsClass, _--)  : h && c.sc.push(this);
if (0 === _ && s) {
  if (p = ('com.greensock.' + i).split('.'), f = p.pop(), d = u(p.join('.')) [f] = this.gsClass = s.apply(s, l), a) if (n[f] = r[f] = d, y = 'undefined' != typeof module && module.exports, !y && 'function' == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + '/' : '') + i.split('.').pop(), [
  ], function () {
    return d
  });
   else if (y) if (i === e) {
    module.exports = r[e] = d;
    for (v in r) d[v] = r[v]
  } else r[e] && (r[e][f] = d);
  for (v = 0; v < this.sc.length; v++) this.sc[v].check()
}
},
this.check(!0)
},
y = t._gsDefine = function (t, e, r, n) {
return new g(t, e, r, n)
},
v = h._class = function (t, e, r) {
return e = e || function () {
},
y(t, [
], function () {
return e
}, r),
e
};
y.globals = n;
var _ = [
0,
0,
1,
1
],
x = v('easing.Ease', function (t, e, r, n) {
this._func = t,
this._type = r || 0,
this._power = n || 0,
this._params = e ? _.concat(e)  : _
}, !0),
b = x.map = {
},
w = x.register = function (t, e, r, n) {
for (var i, o, s, a, l = e.split(','), u = l.length, c = (r || 'easeIn,easeOut,easeInOut').split(','); --u > - 1; ) for (o = l[u], i = n ? v('easing.' + o, null, !0)  : h.easing[o] || {
}, s = c.length; --s > - 1; ) a = c[s],
b[o + '.' + a] = b[a + o] = i[a] = t.getRatio ? t : t[a] || new t
};
for (s = x.prototype, s._calcEnd = !1, s.getRatio = function (t) {
if (this._func) return this._params[0] = t,
this._func.apply(null, this._params);
var e = this._type,
r = this._power,
n = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
return 1 === r ? n *= n : 2 === r ? n *= n * n : 3 === r ? n *= n * n * n : 4 === r && (n *= n * n * n * n),
1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2
}, i = [
'Linear',
'Quad',
'Cubic',
'Quart',
'Quint,Strong'
], o = i.length; --o > - 1; ) s = i[o] + ',Power' + o,
w(new x(null, null, 1, o), s, 'easeOut', !0),
w(new x(null, null, 2, o), s, 'easeIn' + (0 === o ? ',easeNone' : '')),
w(new x(null, null, 3, o), s, 'easeInOut');
b.linear = h.easing.Linear.easeIn,
b.swing = h.easing.Quad.easeInOut;
var T = v('events.EventDispatcher', function (t) {
this._listeners = {
},
this._eventTarget = t || this
});
s = T.prototype,
s.addEventListener = function (t, e, r, n, i) {
i = i || 0;
var o,
s,
u = this._listeners[t],
h = 0;
for (this !== a || l || a.wake(), null == u && (this._listeners[t] = u = [
]), s = u.length; --s > - 1; ) o = u[s],
o.c === e && o.s === r ? u.splice(s, 1)  : 0 === h && o.pr < i && (h = s + 1);
u.splice(h, 0, {
c: e,
s: r,
up: n,
pr: i
})
},
s.removeEventListener = function (t, e) {
var r,
n = this._listeners[t];
if (n) for (r = n.length; --r > - 1; ) if (n[r].c === e) return void n.splice(r, 1)
},
s.dispatchEvent = function (t) {
var e,
r,
n,
i = this._listeners[t];
if (i) for (e = i.length, e > 1 && (i = i.slice(0)), r = this._eventTarget; --e > - 1; ) n = i[e],
n && (n.up ? n.c.call(n.s || r, {
type: t,
target: r
})  : n.c.call(n.s || r))
};
var S = t.requestAnimationFrame,
C = t.cancelAnimationFrame,
M = Date.now || function () {
return (new Date).getTime()
},
R = M();
for (i = [
'ms',
'moz',
'webkit',
'o'
], o = i.length; --o > - 1 && !S; ) S = t[i[o] + 'RequestAnimationFrame'],
C = t[i[o] + 'CancelAnimationFrame'] || t[i[o] + 'CancelRequestAnimationFrame'];
v('Ticker', function (t, e) {
var r,
n,
i,
o,
s,
u = this,
h = M(),
p = !(e === !1 || !S) && 'auto',
d = 500,
m = 33,
g = 'tick',
y = function (t) {
var e,
a,
l = M() - R;
l > d && (h += l - m),
R += l,
u.time = (R - h) / 1000,
e = u.time - s,
(!r || e > 0 || t === !0) && (u.frame++, s += e + (e >= o ? 0.004 : o - e), a = !0),
t !== !0 && (i = n(y)),
a && u.dispatchEvent(g)
};
T.call(u),
u.time = u.frame = 0,
u.tick = function () {
y(!0)
},
u.lagSmoothing = function (t, e) {
d = t || 1 / c,
m = Math.min(e, d, 0)
},
u.sleep = function () {
null != i && (p && C ? C(i)  : clearTimeout(i), n = f, i = null, u === a && (l = !1))
},
u.wake = function (t) {
null !== i ? u.sleep()  : t ? h += - R + (R = M())  : u.frame > 10 && (R = M() - d + 5),
n = 0 === r ? f : p && S ? S : function (t) {
  return setTimeout(t, 1000 * (s - u.time) + 1 | 0)
},
u === a && (l = !0),
y(2)
},
u.fps = function (t) {
return arguments.length ? (r = t, o = 1 / (r || 60), s = this.time + o, void u.wake())  : r
},
u.useRAF = function (t) {
return arguments.length ? (u.sleep(), p = t, void u.fps(r))  : p
},
u.fps(t),
setTimeout(function () {
'auto' === p && u.frame < 5 && 'hidden' !== document.visibilityState && u.useRAF(!1)
}, 1500)
}),
s = h.Ticker.prototype = new h.events.EventDispatcher,
s.constructor = h.Ticker;
var k = v('core.Animation', function (t, e) {
if (this.vars = e = e || {
}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, V) {
l || a.wake();
var r = this.vars.useFrames ? z : V;
r.add(this, r._time),
this.vars.paused && this.paused(!0)
}
});
a = k.ticker = new h.Ticker,
s = k.prototype,
s._dirty = s._gc = s._initted = s._paused = !1,
s._totalTime = s._time = 0,
s._rawPrevTime = - 1,
s._next = s._last = s._onUpdate = s._timeline = s.timeline = null,
s._paused = !1;
var P = function () {
l && M() - R > 2000 && a.wake(),
setTimeout(P, 2000)
};
P(),
s.play = function (t, e) {
return null != t && this.seek(t, e),
this.reversed(!1).paused(!1)
},
s.pause = function (t, e) {
return null != t && this.seek(t, e),
this.paused(!0)
},
s.resume = function (t, e) {
return null != t && this.seek(t, e),
this.paused(!1)
},
s.seek = function (t, e) {
return this.totalTime(Number(t), e !== !1)
},
s.restart = function (t, e) {
return this.reversed(!1).paused(!1).totalTime(t ? - this._delay : 0, e !== !1, !0)
},
s.reverse = function (t, e) {
return null != t && this.seek(t || this.totalDuration(), e),
this.reversed(!0).paused(!1)
},
s.render = function (t, e, r) {
},
s.invalidate = function () {
return this._time = this._totalTime = 0,
this._initted = this._gc = !1,
this._rawPrevTime = - 1,
!this._gc && this.timeline || this._enabled(!0),
this
},
s.isActive = function () {
var t,
e = this._timeline,
r = this._startTime;
return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= r && t < r + this.totalDuration() / this._timeScale
},
s._enabled = function (t, e) {
return l || a.wake(),
this._gc = !t,
this._active = this.isActive(),
e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay)  : !t && this.timeline && this._timeline._remove(this, !0)),
!1
},
s._kill = function (t, e) {
return this._enabled(!1, !1)
},
s.kill = function (t, e) {
return this._kill(t, e),
this
},
s._uncache = function (t) {
for (var e = t ? this : this.timeline; e; ) e._dirty = !0,
e = e.timeline;
return this
},
s._swapSelfInParams = function (t) {
for (var e = t.length, r = t.concat(); --e > - 1; ) '{self}' === t[e] && (r[e] = this);
return r
},
s._callback = function (t) {
var e = this.vars,
r = e[t],
n = e[t + 'Params'],
i = e[t + 'Scope'] || e.callbackScope || this,
o = n ? n.length : 0;
switch (o) {
case 0:
  r.call(i);
  break;
case 1:
  r.call(i, n[0]);
  break;
case 2:
  r.call(i, n[0], n[1]);
  break;
default:
  r.apply(i, n)
}
},
s.eventCallback = function (t, e, r, n) {
if ('on' === (t || '').substr(0, 2)) {
var i = this.vars;
if (1 === arguments.length) return i[t];
null == e ? delete i[t] : (i[t] = e, i[t + 'Params'] = d(r) && r.join('').indexOf('{self}') !== - 1 ? this._swapSelfInParams(r)  : r, i[t + 'Scope'] = n),
'onUpdate' === t && (this._onUpdate = e)
}
return this
},
s.delay = function (t) {
return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this)  : this._delay
},
s.duration = function (t) {
return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this)  : (this._dirty = !1, this._duration)
},
s.totalDuration = function (t) {
return this._dirty = !1,
arguments.length ? this.duration(t)  : this._totalDuration
},
s.time = function (t, e) {
return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e))  : this._time
},
s.totalTime = function (t, e, r) {
if (l || a.wake(), !arguments.length) return this._totalTime;
if (this._timeline) {
if (t < 0 && !r && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
  this._dirty && this.totalDuration();
  var n = this._totalDuration,
  i = this._timeline;
  if (t > n && !r && (t = n), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? n - t : t) / this._timeScale, i._dirty || this._uncache(!1), i._timeline) for (; i._timeline; ) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0),
  i = i._timeline
}
this._gc && this._enabled(!0, !1),
this._totalTime === t && 0 !== this._duration || (N.length && $(), this.render(t, e, !1), N.length && $())
}
return this
},
s.progress = s.totalProgress = function (t, e) {
var r = this.duration();
return arguments.length ? this.totalTime(r * t, e)  : r ? this._time / r : this.ratio
},
s.startTime = function (t) {
return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this)  : this._startTime
},
s.endTime = function (t) {
return this._startTime + (0 != t ? this.totalDuration()  : this.duration()) / this._timeScale
},
s.timeScale = function (t) {
if (!arguments.length) return this._timeScale;
if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
var e = this._pauseTime,
r = e || 0 === e ? e : this._timeline.totalTime();
this._startTime = r - (r - this._startTime) * this._timeScale / t
}
return this._timeScale = t,
this._uncache(!1)
},
s.reversed = function (t) {
return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)  : this._reversed
},
s.paused = function (t) {
if (!arguments.length) return this._paused;
var e,
r,
n = this._timeline;
return t != this._paused && n && (l || t || a.wake(), e = n.rawTime(), r = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== r && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))),
this._gc && !t && this._enabled(!0, !1),
this
};
var D = v('core.SimpleTimeline', function (t) {
k.call(this, 0, t),
this.autoRemoveChildren = this.smoothChildTiming = !0
});
s = D.prototype = new k,
s.constructor = D,
s.kill()._gc = !1,
s._first = s._last = s._recent = null,
s._sortChildren = !1,
s.add = s.insert = function (t, e, r, n) {
var i,
o;
if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (o = t._startTime; i && i._startTime > o; ) i = i._prev;
return i ? (t._next = i._next, i._next = t)  : (t._next = this._first, this._first = t),
t._next ? t._next._prev = t : this._last = t,
t._prev = i,
this._recent = t,
this._timeline && this._uncache(!0),
this
},
s._remove = function (t, e) {
return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)),
this
},
s.render = function (t, e, r) {
var n,
i = this._first;
for (this._totalTime = this._time = this._rawPrevTime = t; i; ) n = i._next,
(i._active || t >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration()  : i._totalDuration) - (t - i._startTime) * i._timeScale, e, r)  : i.render((t - i._startTime) * i._timeScale, e, r)),
i = n
},
s.rawTime = function () {
return l || a.wake(),
this._totalTime
};
var A = v('TweenLite', function (e, r, n) {
if (k.call(this, r, n), this.render = A.prototype.render, null == e) throw 'Cannot tween a null target.';
this.target = e = 'string' != typeof e ? e : A.selector(e) || e;
var i,
o,
s,
a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
l = this.vars.overwrite;
if (this._overwrite = l = null == l ? W[A.defaultOverwrite] : 'number' == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && d(e)) && 'number' != typeof e[0]) for (this._targets = s = p(e), this._propLookup = [
], this._siblings = [
], i = 0; i < s.length; i++) o = s[i],
o ? 'string' != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(i--, 1), this._targets = s = s.concat(p(o)))  : (this._siblings[i] = Z(o, this, !1), 1 === l && this._siblings[i].length > 1 && Q(o, this, null, 1, this._siblings[i]))  : (o = s[i--] = A.selector(o), 'string' == typeof o && s.splice(i + 1, 1))  : s.splice(i--, 1);
 else this._propLookup = {
},
this._siblings = Z(e, this, !1),
1 === l && this._siblings.length > 1 && Q(e, this, null, 1, this._siblings);
(this.vars.immediateRender || 0 === r && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = - c, this.render(Math.min(0, - this._delay)))
}, !0),
E = function (e) {
return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
},
O = function (t, e) {
var r,
n = {
};
for (r in t) q[r] || r in e && 'transform' !== r && 'x' !== r && 'y' !== r && 'width' !== r && 'height' !== r && 'className' !== r && 'border' !== r || !(!j[r] || j[r] && j[r]._autoCSS) || (n[r] = t[r], delete t[r]);
t.css = n
};
s = A.prototype = new k,
s.constructor = A,
s.kill()._gc = !1,
s.ratio = 0,
s._firstPT = s._targets = s._overwrittenProps = s._startAt = null,
s._notifyPluginsOfEnabled = s._lazy = !1,
A.version = '1.19.0',
A.defaultEase = s._ease = new x(null, null, 1, 1),
A.defaultOverwrite = 'auto',
A.ticker = a,
A.autoSleep = 120,
A.lagSmoothing = function (t, e) {
a.lagSmoothing(t, e)
},
A.selector = t.$ || t.jQuery || function (e) {
var r = t.$ || t.jQuery;
return r ? (A.selector = r, r(e))  : 'undefined' == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e)  : document.getElementById('#' === e.charAt(0) ? e.substr(1)  : e)
};
var N = [
],
I = {
},
L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
F = function (t) {
for (var e, r = this._firstPT, n = 0.000001; r; ) e = r.blob ? t ? this.join('')  : this.start : r.c * t + r.s,
r.m ? e = r.m(e, this._target || r.t)  : e < n && e > - n && (e = 0),
r.f ? r.fp ? r.t[r.p](r.fp, e)  : r.t[r.p](e)  : r.t[r.p] = e,
r = r._next
},
U = function (t, e, r, n) {
var i,
o,
s,
a,
l,
u,
h,
c = [
t,
e
],
p = 0,
f = '',
d = 0;
for (c.start = t, r && (r(c), t = c[0], e = c[1]), c.length = 0, i = t.match(L) || [
], o = e.match(L) || [
], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), l = o.length, a = 0; a < l; a++) h = o[a],
u = e.substr(p, e.indexOf(h, p) - p),
f += u || !a ? u : ',',
p += u.length,
d ? d = (d + 1) % 5 : 'rgba(' === u.substr( - 5) && (d = 1),
h === i[a] || i.length <= a ? f += h : (f && (c.push(f), f = ''), s = parseFloat(i[a]), c.push(s), c._firstPT = {
_next: c._firstPT,
t: c,
p: c.length - 1,
s: s,
c: ('=' === h.charAt(1) ? parseInt(h.charAt(0) + '1', 10) * parseFloat(h.substr(2))  : parseFloat(h) - s) || 0,
f: 0,
m: d && d < 4 ? Math.round : 0
}),
p += h.length;
return f += e.substr(p),
f && c.push(f),
c.setRatio = F,
c
},
B = function (t, e, r, n, i, o, s, a, l) {
'function' == typeof n && (n = n(l || 0, t));
var u,
h,
c = 'get' === r ? t[e] : r,
p = typeof t[e],
f = 'string' == typeof n && '=' === n.charAt(1),
d = {
t: t,
p: e,
s: c,
f: 'function' === p,
pg: 0,
n: i || e,
m: o ? 'function' == typeof o ? o : Math.round : 0,
pr: 0,
c: f ? parseInt(n.charAt(0) + '1', 10) * parseFloat(n.substr(2))  : parseFloat(n) - c || 0
};
if ('number' !== p && ('function' === p && 'get' === r && (h = e.indexOf('set') || 'function' != typeof t['get' + e.substr(3)] ? e : 'get' + e.substr(3), d.s = c = s ? t[h](s)  : t[h]()), 'string' == typeof c && (s || isNaN(c)) ? (d.fp = s, u = U(c, n, a || A.defaultStringFilter, d), d = {
t: u,
p: 'setRatio',
s: 0,
c: 1,
f: 2,
pg: 0,
n: i || e,
pr: 0,
m: 0
})  : f || (d.s = parseFloat(c), d.c = parseFloat(n) - d.s || 0)), d.c) return (d._next = this._firstPT) && (d._next._prev = d),
this._firstPT = d,
d
},
H = A._internals = {
isArray: d,
isSelector: E,
lazyTweens: N,
blobDif: U
},
j = A._plugins = {
},
Y = H.tweenLookup = {
},
G = 0,
q = H.reservedProps = {
ease: 1,
delay: 1,
overwrite: 1,
onComplete: 1,
onCompleteParams: 1,
onCompleteScope: 1,
useFrames: 1,
runBackwards: 1,
startAt: 1,
onUpdate: 1,
onUpdateParams: 1,
onUpdateScope: 1,
onStart: 1,
onStartParams: 1,
onStartScope: 1,
onReverseComplete: 1,
onReverseCompleteParams: 1,
onReverseCompleteScope: 1,
onRepeat: 1,
onRepeatParams: 1,
onRepeatScope: 1,
easeParams: 1,
yoyo: 1,
immediateRender: 1,
repeat: 1,
repeatDelay: 1,
data: 1,
paused: 1,
reversed: 1,
autoCSS: 1,
lazy: 1,
onOverwrite: 1,
callbackScope: 1,
stringFilter: 1,
id: 1
},
W = {
none: 0,
all: 1,
auto: 2,
concurrent: 3,
allOnStart: 4,
preexisting: 5,
true: 1,
false: 0
},
z = k._rootFramesTimeline = new D,
V = k._rootTimeline = new D,
X = 30,
$ = H.lazyRender = function () {
var t,
e = N.length;
for (I = {
}; --e > - 1; ) t = N[e],
t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
N.length = 0
};
V._startTime = a.time,
z._startTime = a.frame,
V._active = z._active = !0,
setTimeout($, 1),
k._updateRoot = A.render = function () {
var t,
e,
r;
if (N.length && $(), V.render((a.time - V._startTime) * V._timeScale, !1, !1), z.render((a.frame - z._startTime) * z._timeScale, !1, !1), N.length && $(), a.frame >= X) {
X = a.frame + (parseInt(A.autoSleep, 10) || 120);
for (r in Y) {
  for (e = Y[r].tweens, t = e.length; --t > - 1; ) e[t]._gc && e.splice(t, 1);
  0 === e.length && delete Y[r]
}
if (r = V._first, (!r || r._paused) && A.autoSleep && !z._first && 1 === a._listeners.tick.length) {
  for (; r && r._paused; ) r = r._next;
  r || a.sleep()
}
}
},
a.addEventListener('tick', k._updateRoot);
var Z = function (t, e, r) {
var n,
i,
o = t._gsTweenID;
if (Y[o || (t._gsTweenID = o = 't' + G++)] || (Y[o] = {
target: t,
tweens: [
]
}), e && (n = Y[o].tweens, n[i = n.length] = e, r)) for (; --i > - 1; ) n[i] === e && n.splice(i, 1);
return Y[o].tweens
},
J = function (t, e, r, n) {
var i,
o,
s = t.vars.onOverwrite;
return s && (i = s(t, e, r, n)),
s = A.onOverwrite,
s && (o = s(t, e, r, n)),
i !== !1 && o !== !1
},
Q = function (t, e, r, n, i) {
var o,
s,
a,
l;
if (1 === n || n >= 4) {
for (l = i.length, o = 0; o < l; o++) if ((a = i[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
 else if (5 === n) break;
return s
}
var u,
h = e._startTime + c,
p = [
],
f = 0,
d = 0 === e._duration;
for (o = i.length; --o > - 1; ) (a = i[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || K(e, 0, d), 0 === K(a, u, d) && (p[f++] = a))  : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((d || !a._initted) && h - a._startTime <= 2e-10 || (p[f++] = a)));
for (o = f; --o > - 1; ) if (a = p[o], 2 === n && a._kill(r, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
if (2 !== n && !J(a, e)) continue;
a._enabled(!1, !1) && (s = !0)
}
return s
},
K = function (t, e, r) {
for (var n = t._timeline, i = n._timeScale, o = t._startTime; n._timeline; ) {
if (o += n._startTime, i *= n._timeScale, n._paused) return - 100;
n = n._timeline
}
return o /= i,
o > e ? o - e : r && o === e || !t._initted && o - e < 2 * c ? c : (o += t.totalDuration() / t._timeScale / i) > e + c ? 0 : o - e - c
};
s._init = function () {
var t,
e,
r,
n,
i,
o,
s = this.vars,
a = this._overwrittenProps,
l = this._duration,
u = !!s.immediateRender,
h = s.ease;
if (s.startAt) {
this._startAt && (this._startAt.render( - 1, !0), this._startAt.kill()),
i = {
};
for (n in s.startAt) i[n] = s.startAt[n];
if (i.overwrite = !1, i.immediateRender = !0, i.lazy = u && s.lazy !== !1, i.startAt = i.delay = null, this._startAt = A.to(this.target, 0, i), u) if (this._time > 0) this._startAt = null;
 else if (0 !== l) return
} else if (s.runBackwards && 0 !== l) if (this._startAt) this._startAt.render( - 1, !0),
this._startAt.kill(),
this._startAt = null;
 else {
0 !== this._time && (u = !1),
r = {
};
for (n in s) q[n] && 'autoCSS' !== n || (r[n] = s[n]);
if (r.overwrite = 0, r.data = 'isFromStart', r.lazy = u && s.lazy !== !1, r.immediateRender = u, this._startAt = A.to(this.target, 0, r), u) {
  if (0 === this._time) return
} else this._startAt._init(),
this._startAt._enabled(!1),
this.vars.immediateRender && (this._startAt = null)
}
if (this._ease = h = h ? h instanceof x ? h : 'function' == typeof h ? new x(h, s.easeParams)  : b[h] || A.defaultEase : A.defaultEase, s.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {
}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
 else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
if (e && A._onPluginEvent('_onInitAllProps', this), a && (this._firstPT || 'function' != typeof this.target && this._enabled(!1, !1)), s.runBackwards) for (r = this._firstPT; r; ) r.s += r.c,
r.c = - r.c,
r = r._next;
this._onUpdate = s.onUpdate,
this._initted = !0
},
s._initProps = function (e, r, n, i, o) {
var s,
a,
l,
u,
h,
c;
if (null == e) return !1;
I[e._gsTweenID] && $(),
this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && O(this.vars, e);
for (s in this.vars) if (c = this.vars[s], q[s]) c && (c instanceof Array || c.push && d(c)) && c.join('').indexOf('{self}') !== - 1 && (this.vars[s] = c = this._swapSelfInParams(c, this));
 else if (j[s] && (u = new j[s])._onInitTween(e, this.vars[s], this, o)) {
for (this._firstPT = h = {
  _next: this._firstPT,
  t: u,
  p: 'setRatio',
  s: 0,
  c: 1,
  f: 1,
  n: s,
  pg: 1,
  pr: u._priority,
  m: 0
}, a = u._overwriteProps.length; --a > - 1; ) r[u._overwriteProps[a]] = this._firstPT;
(u._priority || u._onInitAllProps) && (l = !0),
(u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0),
h._next && (h._next._prev = h)
} else r[s] = B.call(this, e, s, 'get', c, s, 0, null, this.vars.stringFilter, o);
return i && this._kill(i, e) ? this._initProps(e, r, n, i, o)  : this._overwrite > 1 && this._firstPT && n.length > 1 && Q(e, this, r, this._overwrite, n) ? (this._kill(r, e), this._initProps(e, r, n, i, o))  : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), l)
},
s.render = function (t, e, r) {
var n,
i,
o,
s,
a = this._time,
l = this._duration,
u = this._rawPrevTime;
if (t >= l - 1e-7) this._totalTime = this._time = l,
this.ratio = this._ease._calcEnd ? this._ease.getRatio(1)  : 1,
this._reversed || (n = !0, i = 'onComplete', r = r || this._timeline.autoRemoveChildren),
0 === l && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (t = 0), (u < 0 || t <= 0 && t >= - 1e-7 || u === c && 'isPause' !== this.data) && u !== t && (r = !0, u > c && (i = 'onReverseComplete')), this._rawPrevTime = s = !e || t || u === t ? t : c);
 else if (t < 1e-7) this._totalTime = this._time = 0,
this.ratio = this._ease._calcEnd ? this._ease.getRatio(0)  : 0,
(0 !== a || 0 === l && u > 0) && (i = 'onReverseComplete', n = this._reversed),
t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || r) && (u >= 0 && (u !== c || 'isPause' !== this.data) && (r = !0), this._rawPrevTime = s = !e || t || u === t ? t : c)),
this._initted || (r = !0);
 else if (this._totalTime = this._time = t, this._easeType) {
var h = t / l,
p = this._easeType,
f = this._easePower;
(1 === p || 3 === p && h >= 0.5) && (h = 1 - h),
3 === p && (h *= 2),
1 === f ? h *= h : 2 === f ? h *= h * h : 3 === f ? h *= h * h * h : 4 === f && (h *= h * h * h * h),
1 === p ? this.ratio = 1 - h : 2 === p ? this.ratio = h : t / l < 0.5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2
} else this.ratio = this._ease.getRatio(t / l);
if (this._time !== a || r) {
if (!this._initted) {
  if (this._init(), !this._initted || this._gc) return;
  if (!r && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a,
  this._rawPrevTime = u,
  N.push(this),
  void (this._lazy = [
    t,
    e
  ]);
  this._time && !n ? this.ratio = this._ease.getRatio(this._time / l)  : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
}
for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, r)  : i || (i = '_dummyGS')), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback('onStart'))), o = this._firstPT; o; ) o.f ? o.t[o.p](o.c * this.ratio + o.s)  : o.t[o.p] = o.c * this.ratio + o.s,
o = o._next;
this._onUpdate && (t < 0 && this._startAt && t !== - 0.0001 && this._startAt.render(t, e, r), e || (this._time !== a || n || r) && this._callback('onUpdate')),
i && (this._gc && !r || (t < 0 && this._startAt && !this._onUpdate && t !== - 0.0001 && this._startAt.render(t, e, r), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[i] && this._callback(i), 0 === l && this._rawPrevTime === c && s !== c && (this._rawPrevTime = 0)))
}
},
s._kill = function (t, e, r) {
if ('all' === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1,
this._enabled(!1, !1);
e = 'string' != typeof e ? e || this._targets || this.target : A.selector(e) || e;
var n,
i,
o,
s,
a,
l,
u,
h,
c,
p = r && this._time && r._startTime === this._startTime && this._timeline === r._timeline;
if ((d(e) || E(e)) && 'number' != typeof e[0]) for (n = e.length; --n > - 1; ) this._kill(t, e[n], r) && (l = !0);
 else {
if (this._targets) {
  for (n = this._targets.length; --n > - 1; ) if (e === this._targets[n]) {
    a = this._propLookup[n] || {
    },
    this._overwrittenProps = this._overwrittenProps || [
    ],
    i = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {
    }
     : 'all';
    break
  }
} else {
  if (e !== this.target) return !1;
  a = this._propLookup,
  i = this._overwrittenProps = t ? this._overwrittenProps || {
  }
   : 'all'
}
if (a) {
  if (u = t || a, h = t !== i && 'all' !== i && t !== a && ('object' != typeof t || !t._tempKill), r && (A.onOverwrite || this.vars.onOverwrite)) {
    for (o in u) a[o] && (c || (c = [
    ]), c.push(o));
    if ((c || !t) && !J(this, r, e, c)) return !1
  }
  for (o in u) (s = a[o]) && (p && (s.f ? s.t[s.p](s.s)  : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]),
  h && (i[o] = 1);
  !this._firstPT && this._initted && this._enabled(!1, !1)
}
}
return l
},
s.invalidate = function () {
return this._notifyPluginsOfEnabled && A._onPluginEvent('_onDisable', this),
this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
this._propLookup = this._targets ? {
}
 : [
],
k.prototype.invalidate.call(this),
this.vars.immediateRender && (this._time = - c, this.render(Math.min(0, - this._delay))),
this
},
s._enabled = function (t, e) {
if (l || a.wake(), t && this._gc) {
var r,
n = this._targets;
if (n) for (r = n.length; --r > - 1; ) this._siblings[r] = Z(n[r], this, !0);
 else this._siblings = Z(this.target, this, !0)
}
return k.prototype._enabled.call(this, t, e),
!(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? '_onEnable' : '_onDisable', this)
},
A.to = function (t, e, r) {
return new A(t, e, r)
},
A.from = function (t, e, r) {
return r.runBackwards = !0,
r.immediateRender = 0 != r.immediateRender,
new A(t, e, r)
},
A.fromTo = function (t, e, r, n) {
return n.startAt = r,
n.immediateRender = 0 != n.immediateRender && 0 != r.immediateRender,
new A(t, e, n)
},
A.delayedCall = function (t, e, r, n, i) {
return new A(e, 0, {
delay: t,
onComplete: e,
onCompleteParams: r,
callbackScope: n,
onReverseComplete: e,
onReverseCompleteParams: r,
immediateRender: !1,
lazy: !1,
useFrames: i,
overwrite: 0
})
},
A.set = function (t, e) {
return new A(t, 0, e)
},
A.getTweensOf = function (t, e) {
if (null == t) return [];
t = 'string' != typeof t ? t : A.selector(t) || t;
var r,
n,
i,
o;
if ((d(t) || E(t)) && 'number' != typeof t[0]) {
for (r = t.length, n = [
]; --r > - 1; ) n = n.concat(A.getTweensOf(t[r], e));
for (r = n.length; --r > - 1; ) for (o = n[r], i = r; --i > - 1; ) o === n[i] && n.splice(r, 1)
} else for (n = Z(t).concat(), r = n.length; --r > - 1; ) (n[r]._gc || e && !n[r].isActive()) && n.splice(r, 1);
return n
},
A.killTweensOf = A.killDelayedCallsTo = function (t, e, r) {
'object' == typeof e && (r = e, e = !1);
for (var n = A.getTweensOf(t, e), i = n.length; --i > - 1; ) n[i]._kill(r, t)
};
var tt = v('plugins.TweenPlugin', function (t, e) {
this._overwriteProps = (t || '').split(','),
this._propName = this._overwriteProps[0],
this._priority = e || 0,
this._super = tt.prototype
}, !0);
if (s = tt.prototype, tt.version = '1.19.0', tt.API = 2, s._firstPT = null, s._addTween = B, s.setRatio = F, s._kill = function (t) {
var e,
r = this._overwriteProps,
n = this._firstPT;
if (null != t[this._propName]) this._overwriteProps = [
];
 else for (e = r.length; --e > - 1; ) null != t[r[e]] && r.splice(e, 1);
for (; n; ) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null)  : this._firstPT === n && (this._firstPT = n._next)),
n = n._next;
return !1
}, s._mod = s._roundProps = function (t) {
for (var e, r = this._firstPT; r; ) e = t[this._propName] || null != r.n && t[r.n.split(this._propName + '_').join('')],
e && 'function' == typeof e && (2 === r.f ? r.t._applyPT.m = e : r.m = e),
r = r._next
}, A._onPluginEvent = function (t, e) {
var r,
n,
i,
o,
s,
a = e._firstPT;
if ('_onInitAllProps' === t) {
for (; a; ) {
  for (s = a._next, n = i; n && n.pr > a.pr; ) n = n._next;
  (a._prev = n ? n._prev : o) ? a._prev._next = a : i = a,
  (a._next = n) ? n._prev = a : o = a,
  a = s
}
a = e._firstPT = i
}
for (; a; ) a.pg && 'function' == typeof a.t[t] && a.t[t]() && (r = !0),
a = a._next;
return r
}, tt.activate = function (t) {
for (var e = t.length; --e > - 1; ) t[e].API === tt.API && (j[(new t[e])._propName] = t[e]);
return !0
}, y.plugin = function (t) {
if (!(t && t.propName && t.init && t.API)) throw 'illegal plugin definition.';
var e,
r = t.propName,
n = t.priority || 0,
i = t.overwriteProps,
o = {
init: '_onInitTween',
set: 'setRatio',
kill: '_kill',
round: '_mod',
mod: '_mod',
initAll: '_onInitAllProps'
},
s = v('plugins.' + r.charAt(0).toUpperCase() + r.substr(1) + 'Plugin', function () {
tt.call(this, r, n),
this._overwriteProps = i || [
]
}, t.global === !0),
a = s.prototype = new tt(r);
a.constructor = s,
s.API = t.API;
for (e in o) 'function' == typeof t[e] && (a[o[e]] = t[e]);
return s.version = t.version,
tt.activate([s]),
s
}, i = t._gsQueue) {
for (o = 0; o < i.length; o++) i[o]();
for (s in m) m[s].func || t.console.log('GSAP encountered missing dependency: ' + s)
}
l = !1
}
}('undefined' != typeof module && module.exports && 'undefined' != typeof global ? global : this || window, 'TweenMax'),
function (t) {
if ('object' == typeof exports && 'undefined' != typeof module) module.exports = t();
 else if ('function' == typeof define && define.amd) define([], t);
 else {
var e;
e = 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this,
e.p5 = t()
}
}(function () {
var define,
module,
exports;
return function t(e, r, n) {
function i(s, a) {
if (!r[s]) {
if (!e[s]) {
  var l = 'function' == typeof require && require;
  if (!a && l) return l(s, !0);
  if (o) return o(s, !0);
  var u = new Error('Cannot find module \'' + s + '\'');
  throw u.code = 'MODULE_NOT_FOUND',
  u
}
var h = r[s] = {
  exports: {
  }
};
e[s][0].call(h.exports, function (t) {
  var r = e[s][1][t];
  return i(r ? r : t)
}, h, h.exports, t, e, r, n)
}
return r[s].exports
}
for (var o = 'function' == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
return i
}({
1: [
function (t, e, r) {
},
{
}
],
2: [
function (t, e, r) {
'use strict';
r.argument = function (t, e) {
  if (!t) throw new Error(e)
},
r.assert = r.argument
},
{
}
],
3: [
function (t, e, r) {
'use strict';
function n(t, e, r, n, i) {
  t.beginPath(),
  t.moveTo(e, r),
  t.lineTo(n, i),
  t.stroke()
}
r.line = n
},
{
}
],
4: [
function (t, e, r) {
'use strict';
function n(t) {
  this.font = t
}
function i(t) {
  this.cmap = t
}
function o(t, e) {
  this.encoding = t,
  this.charset = e
}
function s(t) {
  var e;
  switch (t.version) {
    case 1:
      this.names = r.standardNames.slice();
      break;
    case 2:
      for (this.names = new Array(t.numberOfGlyphs), e = 0; e < t.numberOfGlyphs; e++) t.glyphNameIndex[e] < r.standardNames.length ? this.names[e] = r.standardNames[t.glyphNameIndex[e]] : this.names[e] = t.names[t.glyphNameIndex[e] - r.standardNames.length];
      break;
    case 2.5:
      for (this.names = new Array(t.numberOfGlyphs), e = 0; e < t.numberOfGlyphs; e++) this.names[e] = r.standardNames[e + t.glyphNameIndex[e]];
      break;
    case 3:
      this.names = [
      ]
  }
}
function a(t) {
  for (var e, r = t.tables.cmap.glyphIndexMap, n = Object.keys(r), i = 0; i < n.length; i += 1) {
    var o = n[i],
    s = r[o];
    e = t.glyphs.get(s),
    e.addUnicode(parseInt(o))
  }
  for (i = 0; i < t.glyphs.length; i += 1) e = t.glyphs.get(i),
  t.cffEncoding ? e.name = t.cffEncoding.charset[i] : e.name = t.glyphNames.glyphIndexToName(i)
}
var l = [
  '.notdef',
  'space',
  'exclam',
  'quotedbl',
  'numbersign',
  'dollar',
  'percent',
  'ampersand',
  'quoteright',
  'parenleft',
  'parenright',
  'asterisk',
  'plus',
  'comma',
  'hyphen',
  'period',
  'slash',
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'colon',
  'semicolon',
  'less',
  'equal',
  'greater',
  'question',
  'at',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'bracketleft',
  'backslash',
  'bracketright',
  'asciicircum',
  'underscore',
  'quoteleft',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'braceleft',
  'bar',
  'braceright',
  'asciitilde',
  'exclamdown',
  'cent',
  'sterling',
  'fraction',
  'yen',
  'florin',
  'section',
  'currency',
  'quotesingle',
  'quotedblleft',
  'guillemotleft',
  'guilsinglleft',
  'guilsinglright',
  'fi',
  'fl',
  'endash',
  'dagger',
  'daggerdbl',
  'periodcentered',
  'paragraph',
  'bullet',
  'quotesinglbase',
  'quotedblbase',
  'quotedblright',
  'guillemotright',
  'ellipsis',
  'perthousand',
  'questiondown',
  'grave',
  'acute',
  'circumflex',
  'tilde',
  'macron',
  'breve',
  'dotaccent',
  'dieresis',
  'ring',
  'cedilla',
  'hungarumlaut',
  'ogonek',
  'caron',
  'emdash',
  'AE',
  'ordfeminine',
  'Lslash',
  'Oslash',
  'OE',
  'ordmasculine',
  'ae',
  'dotlessi',
  'lslash',
  'oslash',
  'oe',
  'germandbls',
  'onesuperior',
  'logicalnot',
  'mu',
  'trademark',
  'Eth',
  'onehalf',
  'plusminus',
  'Thorn',
  'onequarter',
  'divide',
  'brokenbar',
  'degree',
  'thorn',
  'threequarters',
  'twosuperior',
  'registered',
  'minus',
  'eth',
  'multiply',
  'threesuperior',
  'copyright',
  'Aacute',
  'Acircumflex',
  'Adieresis',
  'Agrave',
  'Aring',
  'Atilde',
  'Ccedilla',
  'Eacute',
  'Ecircumflex',
  'Edieresis',
  'Egrave',
  'Iacute',
  'Icircumflex',
  'Idieresis',
  'Igrave',
  'Ntilde',
  'Oacute',
  'Ocircumflex',
  'Odieresis',
  'Ograve',
  'Otilde',
  'Scaron',
  'Uacute',
  'Ucircumflex',
  'Udieresis',
  'Ugrave',
  'Yacute',
  'Ydieresis',
  'Zcaron',
  'aacute',
  'acircumflex',
  'adieresis',
  'agrave',
  'aring',
  'atilde',
  'ccedilla',
  'eacute',
  'ecircumflex',
  'edieresis',
  'egrave',
  'iacute',
  'icircumflex',
  'idieresis',
  'igrave',
  'ntilde',
  'oacute',
  'ocircumflex',
  'odieresis',
  'ograve',
  'otilde',
  'scaron',
  'uacute',
  'ucircumflex',
  'udieresis',
  'ugrave',
  'yacute',
  'ydieresis',
  'zcaron',
  'exclamsmall',
  'Hungarumlautsmall',
  'dollaroldstyle',
  'dollarsuperior',
  'ampersandsmall',
  'Acutesmall',
  'parenleftsuperior',
  'parenrightsuperior',
  '266 ff',
  'onedotenleader',
  'zerooldstyle',
  'oneoldstyle',
  'twooldstyle',
  'threeoldstyle',
  'fouroldstyle',
  'fiveoldstyle',
  'sixoldstyle',
  'sevenoldstyle',
  'eightoldstyle',
  'nineoldstyle',
  'commasuperior',
  'threequartersemdash',
  'periodsuperior',
  'questionsmall',
  'asuperior',
  'bsuperior',
  'centsuperior',
  'dsuperior',
  'esuperior',
  'isuperior',
  'lsuperior',
  'msuperior',
  'nsuperior',
  'osuperior',
  'rsuperior',
  'ssuperior',
  'tsuperior',
  'ff',
  'ffi',
  'ffl',
  'parenleftinferior',
  'parenrightinferior',
  'Circumflexsmall',
  'hyphensuperior',
  'Gravesmall',
  'Asmall',
  'Bsmall',
  'Csmall',
  'Dsmall',
  'Esmall',
  'Fsmall',
  'Gsmall',
  'Hsmall',
  'Ismall',
  'Jsmall',
  'Ksmall',
  'Lsmall',
  'Msmall',
  'Nsmall',
  'Osmall',
  'Psmall',
  'Qsmall',
  'Rsmall',
  'Ssmall',
  'Tsmall',
  'Usmall',
  'Vsmall',
  'Wsmall',
  'Xsmall',
  'Ysmall',
  'Zsmall',
  'colonmonetary',
  'onefitted',
  'rupiah',
  'Tildesmall',
  'exclamdownsmall',
  'centoldstyle',
  'Lslashsmall',
  'Scaronsmall',
  'Zcaronsmall',
  'Dieresissmall',
  'Brevesmall',
  'Caronsmall',
  'Dotaccentsmall',
  'Macronsmall',
  'figuredash',
  'hypheninferior',
  'Ogoneksmall',
  'Ringsmall',
  'Cedillasmall',
  'questiondownsmall',
  'oneeighth',
  'threeeighths',
  'fiveeighths',
  'seveneighths',
  'onethird',
  'twothirds',
  'zerosuperior',
  'foursuperior',
  'fivesuperior',
  'sixsuperior',
  'sevensuperior',
  'eightsuperior',
  'ninesuperior',
  'zeroinferior',
  'oneinferior',
  'twoinferior',
  'threeinferior',
  'fourinferior',
  'fiveinferior',
  'sixinferior',
  'seveninferior',
  'eightinferior',
  'nineinferior',
  'centinferior',
  'dollarinferior',
  'periodinferior',
  'commainferior',
  'Agravesmall',
  'Aacutesmall',
  'Acircumflexsmall',
  'Atildesmall',
  'Adieresissmall',
  'Aringsmall',
  'AEsmall',
  'Ccedillasmall',
  'Egravesmall',
  'Eacutesmall',
  'Ecircumflexsmall',
  'Edieresissmall',
  'Igravesmall',
  'Iacutesmall',
  'Icircumflexsmall',
  'Idieresissmall',
  'Ethsmall',
  'Ntildesmall',
  'Ogravesmall',
  'Oacutesmall',
  'Ocircumflexsmall',
  'Otildesmall',
  'Odieresissmall',
  'OEsmall',
  'Oslashsmall',
  'Ugravesmall',
  'Uacutesmall',
  'Ucircumflexsmall',
  'Udieresissmall',
  'Yacutesmall',
  'Thornsmall',
  'Ydieresissmall',
  '001.000',
  '001.001',
  '001.002',
  '001.003',
  'Black',
  'Bold',
  'Book',
  'Light',
  'Medium',
  'Regular',
  'Roman',
  'Semibold'
],
u = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'space',
  'exclam',
  'quotedbl',
  'numbersign',
  'dollar',
  'percent',
  'ampersand',
  'quoteright',
  'parenleft',
  'parenright',
  'asterisk',
  'plus',
  'comma',
  'hyphen',
  'period',
  'slash',
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'colon',
  'semicolon',
  'less',
  'equal',
  'greater',
  'question',
  'at',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'bracketleft',
  'backslash',
  'bracketright',
  'asciicircum',
  'underscore',
  'quoteleft',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'braceleft',
  'bar',
  'braceright',
  'asciitilde',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'exclamdown',
  'cent',
  'sterling',
  'fraction',
  'yen',
  'florin',
  'section',
  'currency',
  'quotesingle',
  'quotedblleft',
  'guillemotleft',
  'guilsinglleft',
  'guilsinglright',
  'fi',
  'fl',
  '',
  'endash',
  'dagger',
  'daggerdbl',
  'periodcentered',
  '',
  'paragraph',
  'bullet',
  'quotesinglbase',
  'quotedblbase',
  'quotedblright',
  'guillemotright',
  'ellipsis',
  'perthousand',
  '',
  'questiondown',
  '',
  'grave',
  'acute',
  'circumflex',
  'tilde',
  'macron',
  'breve',
  'dotaccent',
  'dieresis',
  '',
  'ring',
  'cedilla',
  '',
  'hungarumlaut',
  'ogonek',
  'caron',
  'emdash',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'AE',
  '',
  'ordfeminine',
  '',
  '',
  '',
  '',
  'Lslash',
  'Oslash',
  'OE',
  'ordmasculine',
  '',
  '',
  '',
  '',
  '',
  'ae',
  '',
  '',
  '',
  'dotlessi',
  '',
  '',
  'lslash',
  'oslash',
  'oe',
  'germandbls'
],
h = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'space',
  'exclamsmall',
  'Hungarumlautsmall',
  '',
  'dollaroldstyle',
  'dollarsuperior',
  'ampersandsmall',
  'Acutesmall',
  'parenleftsuperior',
  'parenrightsuperior',
  'twodotenleader',
  'onedotenleader',
  'comma',
  'hyphen',
  'period',
  'fraction',
  'zerooldstyle',
  'oneoldstyle',
  'twooldstyle',
  'threeoldstyle',
  'fouroldstyle',
  'fiveoldstyle',
  'sixoldstyle',
  'sevenoldstyle',
  'eightoldstyle',
  'nineoldstyle',
  'colon',
  'semicolon',
  'commasuperior',
  'threequartersemdash',
  'periodsuperior',
  'questionsmall',
  '',
  'asuperior',
  'bsuperior',
  'centsuperior',
  'dsuperior',
  'esuperior',
  '',
  '',
  'isuperior',
  '',
  '',
  'lsuperior',
  'msuperior',
  'nsuperior',
  'osuperior',
  '',
  '',
  'rsuperior',
  'ssuperior',
  'tsuperior',
  '',
  'ff',
  'fi',
  'fl',
  'ffi',
  'ffl',
  'parenleftinferior',
  '',
  'parenrightinferior',
  'Circumflexsmall',
  'hyphensuperior',
  'Gravesmall',
  'Asmall',
  'Bsmall',
  'Csmall',
  'Dsmall',
  'Esmall',
  'Fsmall',
  'Gsmall',
  'Hsmall',
  'Ismall',
  'Jsmall',
  'Ksmall',
  'Lsmall',
  'Msmall',
  'Nsmall',
  'Osmall',
  'Psmall',
  'Qsmall',
  'Rsmall',
  'Ssmall',
  'Tsmall',
  'Usmall',
  'Vsmall',
  'Wsmall',
  'Xsmall',
  'Ysmall',
  'Zsmall',
  'colonmonetary',
  'onefitted',
  'rupiah',
  'Tildesmall',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'exclamdownsmall',
  'centoldstyle',
  'Lslashsmall',
  '',
  '',
  'Scaronsmall',
  'Zcaronsmall',
  'Dieresissmall',
  'Brevesmall',
  'Caronsmall',
  '',
  'Dotaccentsmall',
  '',
  '',
  'Macronsmall',
  '',
  '',
  'figuredash',
  'hypheninferior',
  '',
  '',
  'Ogoneksmall',
  'Ringsmall',
  'Cedillasmall',
  '',
  '',
  '',
  'onequarter',
  'onehalf',
  'threequarters',
  'questiondownsmall',
  'oneeighth',
  'threeeighths',
  'fiveeighths',
  'seveneighths',
  'onethird',
  'twothirds',
  '',
  '',
  'zerosuperior',
  'onesuperior',
  'twosuperior',
  'threesuperior',
  'foursuperior',
  'fivesuperior',
  'sixsuperior',
  'sevensuperior',
  'eightsuperior',
  'ninesuperior',
  'zeroinferior',
  'oneinferior',
  'twoinferior',
  'threeinferior',
  'fourinferior',
  'fiveinferior',
  'sixinferior',
  'seveninferior',
  'eightinferior',
  'nineinferior',
  'centinferior',
  'dollarinferior',
  'periodinferior',
  'commainferior',
  'Agravesmall',
  'Aacutesmall',
  'Acircumflexsmall',
  'Atildesmall',
  'Adieresissmall',
  'Aringsmall',
  'AEsmall',
  'Ccedillasmall',
  'Egravesmall',
  'Eacutesmall',
  'Ecircumflexsmall',
  'Edieresissmall',
  'Igravesmall',
  'Iacutesmall',
  'Icircumflexsmall',
  'Idieresissmall',
  'Ethsmall',
  'Ntildesmall',
  'Ogravesmall',
  'Oacutesmall',
  'Ocircumflexsmall',
  'Otildesmall',
  'Odieresissmall',
  'OEsmall',
  'Oslashsmall',
  'Ugravesmall',
  'Uacutesmall',
  'Ucircumflexsmall',
  'Udieresissmall',
  'Yacutesmall',
  'Thornsmall',
  'Ydieresissmall'
],
c = [
  '.notdef',
  '.null',
  'nonmarkingreturn',
  'space',
  'exclam',
  'quotedbl',
  'numbersign',
  'dollar',
  'percent',
  'ampersand',
  'quotesingle',
  'parenleft',
  'parenright',
  'asterisk',
  'plus',
  'comma',
  'hyphen',
  'period',
  'slash',
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'colon',
  'semicolon',
  'less',
  'equal',
  'greater',
  'question',
  'at',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'bracketleft',
  'backslash',
  'bracketright',
  'asciicircum',
  'underscore',
  'grave',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'braceleft',
  'bar',
  'braceright',
  'asciitilde',
  'Adieresis',
  'Aring',
  'Ccedilla',
  'Eacute',
  'Ntilde',
  'Odieresis',
  'Udieresis',
  'aacute',
  'agrave',
  'acircumflex',
  'adieresis',
  'atilde',
  'aring',
  'ccedilla',
  'eacute',
  'egrave',
  'ecircumflex',
  'edieresis',
  'iacute',
  'igrave',
  'icircumflex',
  'idieresis',
  'ntilde',
  'oacute',
  'ograve',
  'ocircumflex',
  'odieresis',
  'otilde',
  'uacute',
  'ugrave',
  'ucircumflex',
  'udieresis',
  'dagger',
  'degree',
  'cent',
  'sterling',
  'section',
  'bullet',
  'paragraph',
  'germandbls',
  'registered',
  'copyright',
  'trademark',
  'acute',
  'dieresis',
  'notequal',
  'AE',
  'Oslash',
  'infinity',
  'plusminus',
  'lessequal',
  'greaterequal',
  'yen',
  'mu',
  'partialdiff',
  'summation',
  'product',
  'pi',
  'integral',
  'ordfeminine',
  'ordmasculine',
  'Omega',
  'ae',
  'oslash',
  'questiondown',
  'exclamdown',
  'logicalnot',
  'radical',
  'florin',
  'approxequal',
  'Delta',
  'guillemotleft',
  'guillemotright',
  'ellipsis',
  'nonbreakingspace',
  'Agrave',
  'Atilde',
  'Otilde',
  'OE',
  'oe',
  'endash',
  'emdash',
  'quotedblleft',
  'quotedblright',
  'quoteleft',
  'quoteright',
  'divide',
  'lozenge',
  'ydieresis',
  'Ydieresis',
  'fraction',
  'currency',
  'guilsinglleft',
  'guilsinglright',
  'fi',
  'fl',
  'daggerdbl',
  'periodcentered',
  'quotesinglbase',
  'quotedblbase',
  'perthousand',
  'Acircumflex',
  'Ecircumflex',
  'Aacute',
  'Edieresis',
  'Egrave',
  'Iacute',
  'Icircumflex',
  'Idieresis',
  'Igrave',
  'Oacute',
  'Ocircumflex',
  'apple',
  'Ograve',
  'Uacute',
  'Ucircumflex',
  'Ugrave',
  'dotlessi',
  'circumflex',
  'tilde',
  'macron',
  'breve',
  'dotaccent',
  'ring',
  'cedilla',
  'hungarumlaut',
  'ogonek',
  'caron',
  'Lslash',
  'lslash',
  'Scaron',
  'scaron',
  'Zcaron',
  'zcaron',
  'brokenbar',
  'Eth',
  'eth',
  'Yacute',
  'yacute',
  'Thorn',
  'thorn',
  'minus',
  'multiply',
  'onesuperior',
  'twosuperior',
  'threesuperior',
  'onehalf',
  'onequarter',
  'threequarters',
  'franc',
  'Gbreve',
  'gbreve',
  'Idotaccent',
  'Scedilla',
  'scedilla',
  'Cacute',
  'cacute',
  'Ccaron',
  'ccaron',
  'dcroat'
];
n.prototype.charToGlyphIndex = function (t) {
  var e = t.charCodeAt(0),
  r = this.font.glyphs;
  if (!r) return null;
  for (var n = 0; n < r.length; n += 1) for (var i = r.get(n), o = 0; o < i.unicodes.length; o += 1) if (i.unicodes[o] === e) return n
},
i.prototype.charToGlyphIndex = function (t) {
  return this.cmap.glyphIndexMap[t.charCodeAt(0)] || 0
},
o.prototype.charToGlyphIndex = function (t) {
  var e = t.charCodeAt(0),
  r = this.encoding[e];
  return this.charset.indexOf(r)
},
s.prototype.nameToGlyphIndex = function (t) {
  return this.names.indexOf(t)
},
s.prototype.glyphIndexToName = function (t) {
  return this.names[t]
},
r.cffStandardStrings = l,
r.cffStandardEncoding = u,
r.cffExpertEncoding = h,
r.standardNames = c,
r.DefaultEncoding = n,
r.CmapEncoding = i,
r.CffEncoding = o,
r.GlyphNames = s,
r.addGlyphNames = a
},
{
}
],
5: [
function (t, e, r) {
  'use strict';
  function n(t) {
    t = t || {
    },
    this.familyName = t.familyName || ' ',
    this.styleName = t.styleName || ' ',
    this.designer = t.designer || ' ',
    this.designerURL = t.designerURL || ' ',
    this.manufacturer = t.manufacturer || ' ',
    this.manufacturerURL = t.manufacturerURL || ' ',
    this.license = t.license || ' ',
    this.licenseURL = t.licenseURL || ' ',
    this.version = t.version || 'Version 0.1',
    this.description = t.description || ' ',
    this.copyright = t.copyright || ' ',
    this.trademark = t.trademark || ' ',
    this.unitsPerEm = t.unitsPerEm || 1000,
    this.ascender = t.ascender,
    this.descender = t.descender,
    this.supported = !0,
    this.glyphs = new a.GlyphSet(this, t.glyphs || [
    ]),
    this.encoding = new s.DefaultEncoding(this),
    this.tables = {
    }
  }
  var i = t('./path'),
  o = t('./tables/sfnt'),
  s = t('./encoding'),
  a = t('./glyphset');
  n.prototype.hasChar = function (t) {
    return null !== this.encoding.charToGlyphIndex(t)
  },
  n.prototype.charToGlyphIndex = function (t) {
    return this.encoding.charToGlyphIndex(t)
  },
  n.prototype.charToGlyph = function (t) {
    var e = this.charToGlyphIndex(t),
    r = this.glyphs.get(e);
    return r || (r = this.glyphs.get(0)),
    r
  },
  n.prototype.stringToGlyphs = function (t) {
    for (var e = [
    ], r = 0; r < t.length; r += 1) {
      var n = t[r];
      e.push(this.charToGlyph(n))
    }
    return e
  },
  n.prototype.nameToGlyphIndex = function (t) {
    return this.glyphNames.nameToGlyphIndex(t)
  },
  n.prototype.nameToGlyph = function (t) {
    var e = this.nametoGlyphIndex(t),
    r = this.glyphs.get(e);
    return r || (r = this.glyphs.get(0)),
    r
  },
  n.prototype.glyphIndexToName = function (t) {
    return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(t)  : ''
  },
  n.prototype.getKerningValue = function (t, e) {
    t = t.index || t,
    e = e.index || e;
    var r = this.getGposKerningValue;
    return r ? r(t, e)  : this.kerningPairs[t + ',' + e] || 0
  },
  n.prototype.forEachGlyph = function (t, e, r, n, i, o) {
    if (this.supported) {
      e = void 0 !== e ? e : 0,
      r = void 0 !== r ? r : 0,
      n = void 0 !== n ? n : 72,
      i = i || {
      };
      for (var s = void 0 === i.kerning || i.kerning, a = 1 / this.unitsPerEm * n, l = this.stringToGlyphs(t), u = 0; u < l.length; u += 1) {
        var h = l[u];
        if (o(h, e, r, n, i), h.advanceWidth && (e += h.advanceWidth * a), s && u < l.length - 1) {
          var c = this.getKerningValue(h, l[u + 1]);
          e += c * a
        }
      }
    }
  },
  n.prototype.getPath = function (t, e, r, n, o) {
    var s = new i.Path;
    return this.forEachGlyph(t, e, r, n, o, function (t, e, r, n) {
      var i = t.getPath(e, r, n);
      s.extend(i)
    }),
    s
  },
  n.prototype.draw = function (t, e, r, n, i, o) {
    this.getPath(e, r, n, i, o).draw(t)
  },
  n.prototype.drawPoints = function (t, e, r, n, i, o) {
    this.forEachGlyph(e, r, n, i, o, function (e, r, n, i) {
      e.drawPoints(t, r, n, i)
    })
  },
  n.prototype.drawMetrics = function (t, e, r, n, i, o) {
    this.forEachGlyph(e, r, n, i, o, function (e, r, n, i) {
      e.drawMetrics(t, r, n, i)
    })
  },
  n.prototype.validate = function () {
    function t(t, e) {
      t || r.push(e)
    }
    function e(e) {
      t(n[e] && n[e].trim().length > 0, 'No ' + e + ' specified.')
    }
    var r = [
    ],
    n = this;
    e('familyName'),
    e('weightName'),
    e('manufacturer'),
    e('copyright'),
    e('version'),
    t(this.unitsPerEm > 0, 'No unitsPerEm specified.')
  },
  n.prototype.toTables = function () {
    return o.fontToTable(this)
  },
  n.prototype.toBuffer = function () {
    for (var t = this.toTables(), e = t.encode(), r = new ArrayBuffer(e.length), n = new Uint8Array(r), i = 0; i < e.length; i++) n[i] = e[i];
    return r
  },
  n.prototype.download = function () {
    var t = this.familyName.replace(/\s/g, '') + '-' + this.styleName + '.otf',
    e = this.toBuffer();
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem,
    window.requestFileSystem(window.TEMPORARY, e.byteLength, function (r) {
      r.root.getFile(t, {
        create: !0
      }, function (t) {
        t.createWriter(function (r) {
          var n = new DataView(e),
          i = new Blob([n], {
            type: 'font/opentype'
          });
          r.write(i),
          r.addEventListener('writeend', function () {
            location.href = t.toURL()
          }, !1)
        })
      })
    }, function (t) {
      throw t
    })
  },
  r.Font = n
},
{
  './encoding': 4,
  './glyphset': 7,
  './path': 10,
  './tables/sfnt': 25
}
],
6: [
function (t, e, r) {
  'use strict';
  function n(t, e) {
    var r = e || {
      commands: [
      ]
    };
    return {
      configurable: !0,
      get: function () {
        return 'function' == typeof r && (r = r()),
        r
      },
      set: function (t) {
        r = t
      }
    }
  }
  function i(t) {
    this.bindConstructorValues(t)
  }
  var o = t('./check'),
  s = t('./draw'),
  a = t('./path');
  i.prototype.bindConstructorValues = function (t) {
    this.index = t.index || 0,
    this.name = t.name || null,
    this.unicode = t.unicode || void 0,
    this.unicodes = t.unicodes || void 0 !== t.unicode ? [
      t.unicode
    ] : [
    ],
    t.xMin && (this.xMin = t.xMin),
    t.yMin && (this.yMin = t.yMin),
    t.xMax && (this.xMax = t.xMax),
    t.yMax && (this.yMax = t.yMax),
    t.advanceWidth && (this.advanceWidth = t.advanceWidth),
    Object.defineProperty(this, 'path', n(this, t.path))
  },
  i.prototype.addUnicode = function (t) {
    0 === this.unicodes.length && (this.unicode = t),
    this.unicodes.push(t)
  },
  i.prototype.getPath = function (t, e, r) {
    t = void 0 !== t ? t : 0,
    e = void 0 !== e ? e : 0,
    r = void 0 !== r ? r : 72;
    for (var n = 1 / this.path.unitsPerEm * r, i = new a.Path, o = this.path.commands, s = 0; s < o.length; s += 1) {
      var l = o[s];
      'M' === l.type ? i.moveTo(t + l.x * n, e + - l.y * n)  : 'L' === l.type ? i.lineTo(t + l.x * n, e + - l.y * n)  : 'Q' === l.type ? i.quadraticCurveTo(t + l.x1 * n, e + - l.y1 * n, t + l.x * n, e + - l.y * n)  : 'C' === l.type ? i.curveTo(t + l.x1 * n, e + - l.y1 * n, t + l.x2 * n, e + - l.y2 * n, t + l.x * n, e + - l.y * n)  : 'Z' === l.type && i.closePath()
    }
    return i
  },
  i.prototype.getContours = function () {
    if (void 0 === this.points) return [];
    for (var t = [
    ], e = [
    ], r = 0; r < this.points.length; r += 1) {
      var n = this.points[r];
      e.push(n),
      n.lastPointOfContour && (t.push(e), e = [
      ])
    }
    return o.argument(0 === e.length, 'There are still points left in the current contour.'),
    t
  },
  i.prototype.getMetrics = function () {
    for (var t = this.path.commands, e = [
    ], r = [
    ], n = 0; n < t.length; n += 1) {
      var i = t[n];
      'Z' !== i.type && (e.push(i.x), r.push(i.y)),
      'Q' !== i.type && 'C' !== i.type || (e.push(i.x1), r.push(i.y1)),
      'C' === i.type && (e.push(i.x2), r.push(i.y2))
    }
    var o = {
      xMin: Math.min.apply(null, e),
      yMin: Math.min.apply(null, r),
      xMax: Math.max.apply(null, e),
      yMax: Math.max.apply(null, r),
      leftSideBearing: 0
    };
    return o.rightSideBearing = this.advanceWidth - o.leftSideBearing - (o.xMax - o.xMin),
    o
  },
  i.prototype.draw = function (t, e, r, n) {
    this.getPath(e, r, n).draw(t)
  },
  i.prototype.drawPoints = function (t, e, r, n) {
    function i(e, r, n, i) {
      var o = 2 * Math.PI;
      t.beginPath();
      for (var s = 0; s < e.length; s += 1) t.moveTo(r + e[s].x * i, n + e[s].y * i),
      t.arc(r + e[s].x * i, n + e[s].y * i, 2, 0, o, !1);
      t.closePath(),
      t.fill()
    }
    e = void 0 !== e ? e : 0,
    r = void 0 !== r ? r : 0,
    n = void 0 !== n ? n : 24;
    for (var o = 1 / this.path.unitsPerEm * n, s = [
    ], a = [
    ], l = this.path, u = 0; u < l.commands.length; u += 1) {
      var h = l.commands[u];
      void 0 !== h.x && s.push({
        x: h.x,
        y: - h.y
      }),
      void 0 !== h.x1 && a.push({
        x: h.x1,
        y: - h.y1
      }),
      void 0 !== h.x2 && a.push({
        x: h.x2,
        y: - h.y2
      })
    }
    t.fillStyle = 'blue',
    i(s, e, r, o),
    t.fillStyle = 'red',
    i(a, e, r, o)
  },
  i.prototype.drawMetrics = function (t, e, r, n) {
    var i;
    e = void 0 !== e ? e : 0,
    r = void 0 !== r ? r : 0,
    n = void 0 !== n ? n : 24,
    i = 1 / this.path.unitsPerEm * n,
    t.lineWidth = 1,
    t.strokeStyle = 'black',
    s.line(t, e, - 10000, e, 10000),
    s.line(t, - 10000, r, 10000, r);
    var o = this.xMin || 0,
    a = this.yMin || 0,
    l = this.xMax || 0,
    u = this.yMax || 0,
    h = this.advanceWidth || 0;
    t.strokeStyle = 'blue',
    s.line(t, e + o * i, - 10000, e + o * i, 10000),
    s.line(t, e + l * i, - 10000, e + l * i, 10000),
    s.line(t, - 10000, r + - a * i, 10000, r + - a * i),
    s.line(t, - 10000, r + - u * i, 10000, r + - u * i),
    t.strokeStyle = 'green',
    s.line(t, e + h * i, - 10000, e + h * i, 10000)
  },
  r.Glyph = i
},
{
  './check': 2,
  './draw': 3,
  './path': 10
}
],
7: [
function (t, e, r) {
  'use strict';
  function n(t, e) {
    if (this.font = t, this.glyphs = {
    }, Array.isArray(e)) for (var r = 0; r < e.length; r++) this.glyphs[r] = e[r];
    this.length = e && e.length || 0
  }
  function i(t, e) {
    return new a.Glyph({
      index: e,
      font: t
    })
  }
  function o(t, e, r, n, i, o) {
    return function () {
      var s = new a.Glyph({
        index: e,
        font: t
      });
      return s.path = function () {
        r(s, n, i);
        var e = o(t.glyphs, s);
        return e.unitsPerEm = t.unitsPerEm,
        e
      },
      s
    }
  }
  function s(t, e, r, n) {
    return function () {
      var i = new a.Glyph({
        index: e,
        font: t
      });
      return i.path = function () {
        var e = r(t, i, n);
        return e.unitsPerEm = t.unitsPerEm,
        e
      },
      i
    }
  }
  var a = t('./glyph');
  n.prototype.get = function (t) {
    return 'function' == typeof this.glyphs[t] && (this.glyphs[t] = this.glyphs[t]()),
    this.glyphs[t]
  },
  n.prototype.push = function (t, e) {
    this.glyphs[t] = e,
    this.length++
  },
  r.GlyphSet = n,
  r.glyphLoader = i,
  r.ttfGlyphLoader = o,
  r.cffGlyphLoader = s
},
{
  './glyph': 6
}
],
8: [
function (t, e, r) {
  'use strict';
  function n(t) {
    for (var e = new ArrayBuffer(t.length), r = new Uint8Array(e), n = 0; n < t.length; n += 1) r[n] = t[n];
    return e
  }
  function i(e, r) {
    var i = t('fs');
    i.readFile(e, function (t, e) {
      return t ? r(t.message)  : void r(null, n(e))
    })
  }
  function o(t, e) {
    var r = new XMLHttpRequest;
    r.open('get', t, !0),
    r.responseType = 'arraybuffer',
    r.onload = function () {
      return 200 !== r.status ? e('Font could not be loaded: ' + r.statusText)  : e(null, r.response)
    },
    r.send()
  }
  function s(t) {
    var e,
    r,
    n,
    i,
    o,
    s,
    a,
    h = new u.Font,
    p = new DataView(t, 0),
    M = c.getFixed(p, 0);
    if (1 === M) h.outlinesFormat = 'truetype';
     else {
      if (M = c.getTag(p, 0), 'OTTO' !== M) throw new Error('Unsupported OpenType version ' + M);
      h.outlinesFormat = 'cff'
    }
    for (var R = c.getUShort(p, 4), k = 12, P = 0; P < R; P += 1) {
      var D = c.getTag(p, k),
      A = c.getULong(p, k + 8);
      switch (D) {
        case 'cmap':
          h.tables.cmap = f.parse(p, A),
          h.encoding = new l.CmapEncoding(h.tables.cmap),
          h.encoding || (h.supported = !1);
          break;
        case 'head':
          h.tables.head = y.parse(p, A),
          h.unitsPerEm = h.tables.head.unitsPerEm,
          e = h.tables.head.indexToLocFormat;
          break;
        case 'hhea':
          h.tables.hhea = v.parse(p, A),
          h.ascender = h.tables.hhea.ascender,
          h.descender = h.tables.hhea.descender,
          h.numberOfHMetrics = h.tables.hhea.numberOfHMetrics;
          break;
        case 'hmtx':
          r = A;
          break;
        case 'maxp':
          h.tables.maxp = w.parse(p, A),
          h.numGlyphs = h.tables.maxp.numGlyphs;
          break;
        case 'name':
          h.tables.name = T.parse(p, A),
          h.familyName = h.tables.name.fontFamily,
          h.styleName = h.tables.name.fontSubfamily;
          break;
        case 'OS/2':
          h.tables.os2 = S.parse(p, A);
          break;
        case 'post':
          h.tables.post = C.parse(p, A),
          h.glyphNames = new l.GlyphNames(h.tables.post);
          break;
        case 'glyf':
          n = A;
          break;
        case 'loca':
          i = A;
          break;
        case 'CFF ':
          o = A;
          break;
        case 'kern':
          s = A;
          break;
        case 'GPOS':
          a = A
      }
      k += 16
    }
    if (n && i) {
      var E = 0 === e,
      O = b.parse(p, i, h.numGlyphs, E);
      h.glyphs = m.parse(p, n, O, h),
      _.parse(p, r, h.numberOfHMetrics, h.numGlyphs, h.glyphs),
      l.addGlyphNames(h)
    } else o ? (d.parse(p, o, h), l.addGlyphNames(h))  : h.supported = !1;
    return h.supported && (s ? h.kerningPairs = x.parse(p, s)  : h.kerningPairs = {
    }, a && g.parse(p, a, h)),
    h
  }
  function a(t, e) {
    var r = 'undefined' == typeof window,
    n = r ? i : o;
    n(t, function (t, r) {
      if (t) return e(t);
      var n = s(r);
      return n.supported ? e(null, n)  : e('Font is not supported (is this a Postscript font?)')
    })
  }
  var l = t('./encoding'),
  u = t('./font'),
  h = t('./glyph'),
  c = t('./parse'),
  p = t('./path'),
  f = t('./tables/cmap'),
  d = t('./tables/cff'),
  m = t('./tables/glyf'),
  g = t('./tables/gpos'),
  y = t('./tables/head'),
  v = t('./tables/hhea'),
  _ = t('./tables/hmtx'),
  x = t('./tables/kern'),
  b = t('./tables/loca'),
  w = t('./tables/maxp'),
  T = t('./tables/name'),
  S = t('./tables/os2'),
  C = t('./tables/post');
  r._parse = c,
  r.Font = u.Font,
  r.Glyph = h.Glyph,
  r.Path = p.Path,
  r.parse = s,
  r.load = a
},
{
  './encoding': 4,
  './font': 5,
  './glyph': 6,
  './parse': 9,
  './path': 10,
  './tables/cff': 12,
  './tables/cmap': 13,
  './tables/glyf': 14,
  './tables/gpos': 15,
  './tables/head': 16,
  './tables/hhea': 17,
  './tables/hmtx': 18,
  './tables/kern': 19,
  './tables/loca': 20,
  './tables/maxp': 21,
  './tables/name': 22,
  './tables/os2': 23,
  './tables/post': 24,
  fs: 1
}
],
9: [
  function (t, e, r) {
    'use strict';
    function n(t, e) {
      this.data = t,
      this.offset = e,
      this.relativeOffset = 0
    }
    r.getByte = function (t, e) {
      return t.getUint8(e)
    },
    r.getCard8 = r.getByte,
    r.getUShort = function (t, e) {
      return t.getUint16(e, !1)
    },
    r.getCard16 = r.getUShort,
    r.getShort = function (t, e) {
      return t.getInt16(e, !1)
    },
    r.getULong = function (t, e) {
      return t.getUint32(e, !1)
    },
    r.getFixed = function (t, e) {
      var r = t.getInt16(e, !1),
      n = t.getUint16(e + 2, !1);
      return r + n / 65535
    },
    r.getTag = function (t, e) {
      for (var r = '', n = e; n < e + 4; n += 1) r += String.fromCharCode(t.getInt8(n));
      return r
    },
    r.getOffset = function (t, e, r) {
      for (var n = 0, i = 0; i < r; i += 1) n <<= 8,
      n += t.getUint8(e + i);
      return n
    },
    r.getBytes = function (t, e, r) {
      for (var n = [
      ], i = e; i < r; i += 1) n.push(t.getUint8(i));
      return n
    },
    r.bytesToString = function (t) {
      for (var e = '', r = 0; r < t.length; r += 1) e += String.fromCharCode(t[r]);
      return e
    };
    var i = {
      byte: 1,
      uShort: 2,
      short: 2,
      uLong: 4,
      fixed: 4,
      longDateTime: 8,
      tag: 4
    };
    n.prototype.parseByte = function () {
      var t = this.data.getUint8(this.offset + this.relativeOffset);
      return this.relativeOffset += 1,
      t
    },
    n.prototype.parseChar = function () {
      var t = this.data.getInt8(this.offset + this.relativeOffset);
      return this.relativeOffset += 1,
      t
    },
    n.prototype.parseCard8 = n.prototype.parseByte,
    n.prototype.parseUShort = function () {
      var t = this.data.getUint16(this.offset + this.relativeOffset);
      return this.relativeOffset += 2,
      t
    },
    n.prototype.parseCard16 = n.prototype.parseUShort,
    n.prototype.parseSID = n.prototype.parseUShort,
    n.prototype.parseOffset16 = n.prototype.parseUShort,
    n.prototype.parseShort = function () {
      var t = this.data.getInt16(this.offset + this.relativeOffset);
      return this.relativeOffset += 2,
      t
    },
    n.prototype.parseF2Dot14 = function () {
      var t = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
      return this.relativeOffset += 2,
      t
    },
    n.prototype.parseULong = function () {
      var t = r.getULong(this.data, this.offset + this.relativeOffset);
      return this.relativeOffset += 4,
      t
    },
    n.prototype.parseFixed = function () {
      var t = r.getFixed(this.data, this.offset + this.relativeOffset);
      return this.relativeOffset += 4,
      t
    },
    n.prototype.parseOffset16List = n.prototype.parseUShortList = function (t) {
      for (var e = new Array(t), n = this.data, i = this.offset + this.relativeOffset, o = 0; o < t; o++) e[o] = r.getUShort(n, i),
      i += 2;
      return this.relativeOffset += 2 * t,
      e
    },
    n.prototype.parseString = function (t) {
      var e = this.data,
      r = this.offset + this.relativeOffset,
      n = '';
      this.relativeOffset += t;
      for (var i = 0; i < t; i++) n += String.fromCharCode(e.getUint8(r + i));
      return n
    },
    n.prototype.parseTag = function () {
      return this.parseString(4)
    },
    n.prototype.parseLongDateTime = function () {
      var t = r.getULong(this.data, this.offset + this.relativeOffset + 4);
      return this.relativeOffset += 8,
      t
    },
    n.prototype.parseFixed = function () {
      var t = r.getULong(this.data, this.offset + this.relativeOffset);
      return this.relativeOffset += 4,
      t / 65536
    },
    n.prototype.parseVersion = function () {
      var t = r.getUShort(this.data, this.offset + this.relativeOffset),
      e = r.getUShort(this.data, this.offset + this.relativeOffset + 2);
      return this.relativeOffset += 4,
      t + e / 4096 / 10
    },
    n.prototype.skip = function (t, e) {
      void 0 === e && (e = 1),
      this.relativeOffset += i[t] * e
    },
    r.Parser = n
  },
  {
  }
],
10: [
  function (t, e, r) {
    'use strict';
    function n() {
      this.commands = [
      ],
      this.fill = 'black',
      this.stroke = null,
      this.strokeWidth = 1
    }
    n.prototype.moveTo = function (t, e) {
      this.commands.push({
        type: 'M',
        x: t,
        y: e
      })
    },
    n.prototype.lineTo = function (t, e) {
      this.commands.push({
        type: 'L',
        x: t,
        y: e
      })
    },
    n.prototype.curveTo = n.prototype.bezierCurveTo = function (t, e, r, n, i, o) {
      this.commands.push({
        type: 'C',
        x1: t,
        y1: e,
        x2: r,
        y2: n,
        x: i,
        y: o
      })
    },
    n.prototype.quadTo = n.prototype.quadraticCurveTo = function (t, e, r, n) {
      this.commands.push({
        type: 'Q',
        x1: t,
        y1: e,
        x: r,
        y: n
      })
    },
    n.prototype.close = n.prototype.closePath = function () {
      this.commands.push({
        type: 'Z'
      })
    },
    n.prototype.extend = function (t) {
      t.commands && (t = t.commands),
      Array.prototype.push.apply(this.commands, t)
    },
    n.prototype.draw = function (t) {
      t.beginPath();
      for (var e = 0; e < this.commands.length; e += 1) {
        var r = this.commands[e];
        'M' === r.type ? t.moveTo(r.x, r.y)  : 'L' === r.type ? t.lineTo(r.x, r.y)  : 'C' === r.type ? t.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y)  : 'Q' === r.type ? t.quadraticCurveTo(r.x1, r.y1, r.x, r.y)  : 'Z' === r.type && t.closePath()
      }
      this.fill && (t.fillStyle = this.fill, t.fill()),
      this.stroke && (t.strokeStyle = this.stroke, t.lineWidth = this.strokeWidth, t.stroke())
    },
    n.prototype.toPathData = function (t) {
      function e(e) {
        return Math.round(e) === e ? '' + Math.round(e)  : e.toFixed(t)
      }
      function r() {
        for (var t = '', r = 0; r < arguments.length; r += 1) {
          var n = arguments[r];
          n >= 0 && r > 0 && (t += ' '),
          t += e(n)
        }
        return t
      }
      t = void 0 !== t ? t : 2;
      for (var n = '', i = 0; i < this.commands.length; i += 1) {
        var o = this.commands[i];
        'M' === o.type ? n += 'M' + r(o.x, o.y)  : 'L' === o.type ? n += 'L' + r(o.x, o.y)  : 'C' === o.type ? n += 'C' + r(o.x1, o.y1, o.x2, o.y2, o.x, o.y)  : 'Q' === o.type ? n += 'Q' + r(o.x1, o.y1, o.x, o.y)  : 'Z' === o.type && (n += 'Z')
      }
      return n
    },
    n.prototype.toSVG = function (t) {
      var e = '<path d="';
      return e += this.toPathData(t),
      e += '"',
      this.fill & 'black' !== this.fill && (e += null === this.fill ? ' fill="none"' : ' fill="' + this.fill + '"'),
      this.stroke && (e += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'),
      e += '/>'
    },
    r.Path = n
  },
  {
  }
],
11: [
  function (t, e, r) {
    'use strict';
    function n(t, e, r) {
      var n;
      for (n = 0; n < e.length; n += 1) {
        var i = e[n];
        this[i.name] = i.value
      }
      if (this.tableName = t, this.fields = e, r) {
        var o = Object.keys(r);
        for (n = 0; n < o.length; n += 1) {
          var s = o[n],
          a = r[s];
          void 0 !== this[s] && (this[s] = a)
        }
      }
    }
    var i = t('./check'),
    o = t('./types').encode,
    s = t('./types').sizeOf;
    n.prototype.sizeOf = function () {
      for (var t = 0, e = 0; e < this.fields.length; e += 1) {
        var r = this.fields[e],
        n = this[r.name];
        if (void 0 === n && (n = r.value), 'function' == typeof n.sizeOf) t += n.sizeOf();
         else {
          var o = s[r.type];
          i.assert('function' == typeof o, 'Could not find sizeOf function for field' + r.name),
          t += o(n)
        }
      }
      return t
    },
    n.prototype.encode = function () {
      return o.TABLE(this)
    },
    r.Table = n
  },
  {
    './check': 2,
    './types': 26
  }
],
12: [
  function (t, e, r) {
    'use strict';
    function n(t, e) {
      if (t === e) return !0;
      if (Array.isArray(t) && Array.isArray(e)) {
        if (t.length !== e.length) return !1;
        for (var r = 0; r < t.length; r += 1) if (!n(t[r], e[r])) return !1;
        return !0
      }
      return !1
    }
    function i(t, e, r) {
      var n,
      i,
      o,
      s = [
      ],
      a = [
      ],
      l = I.getCard16(t, e);
      if (0 !== l) {
        var u = I.getByte(t, e + 2);
        i = e + (l + 1) * u + 2;
        var h = e + 3;
        for (n = 0; n < l + 1; n += 1) s.push(I.getOffset(t, h, u)),
        h += u;
        o = i + s[l]
      } else o = e + 2;
      for (n = 0; n < s.length - 1; n += 1) {
        var c = I.getBytes(t, i + s[n], i + s[n + 1]);
        r && (c = r(c)),
        a.push(c)
      }
      return {
        objects: a,
        startOffset: e,
        endOffset: o
      }
    }
    function o(t) {
      for (var e = '', r = 15, n = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '.',
        'E',
        'E-',
        null,
        '-'
      ]; ; ) {
        var i = t.parseByte(),
        o = i >> 4,
        s = 15 & i;
        if (o === r) break;
        if (e += n[o], s === r) break;
        e += n[s]
      }
      return parseFloat(e)
    }
    function s(t, e) {
      var r,
      n,
      i,
      s;
      if (28 === e) return r = t.parseByte(),
      n = t.parseByte(),
      r << 8 | n;
      if (29 === e) return r = t.parseByte(),
      n = t.parseByte(),
      i = t.parseByte(),
      s = t.parseByte(),
      r << 24 | n << 16 | i << 8 | s;
      if (30 === e) return o(t);
      if (e >= 32 && e <= 246) return e - 139;
      if (e >= 247 && e <= 250) return r = t.parseByte(),
      256 * (e - 247) + r + 108;
      if (e >= 251 && e <= 254) return r = t.parseByte(),
      256 * - (e - 251) - r - 108;
      throw new Error('Invalid b0 ' + e)
    }
    function a(t) {
      for (var e = {
      }, r = 0; r < t.length; r += 1) {
        var n,
        i = t[r][0],
        o = t[r][1];
        if (n = 1 === o.length ? o[0] : o, e.hasOwnProperty(i)) throw new Error('Object ' + e + ' already has key ' + i);
        e[i] = n
      }
      return e
    }
    function l(t, e, r) {
      e = void 0 !== e ? e : 0;
      var n = new I.Parser(t, e),
      i = [
      ],
      o = [
      ];
      for (r = void 0 !== r ? r : t.length; n.relativeOffset < r; ) {
        var l = n.parseByte();
        l <= 21 ? (12 === l && (l = 1200 + n.parseByte()), i.push([l,
        o]), o = [
        ])  : o.push(s(n, l))
      }
      return a(i)
    }
    function u(t, e) {
      return e = e <= 390 ? O.cffStandardStrings[e] : t[e - 391]
    }
    function h(t, e, r) {
      for (var n = {
      }, i = 0; i < e.length; i += 1) {
        var o = e[i],
        s = t[o.op];
        void 0 === s && (s = void 0 !== o.value ? o.value : null),
        'SID' === o.type && (s = u(r, s)),
        n[o.name] = s
      }
      return n
    }
    function c(t, e) {
      var r = {
      };
      return r.formatMajor = I.getCard8(t, e),
      r.formatMinor = I.getCard8(t, e + 1),
      r.size = I.getCard8(t, e + 2),
      r.offsetSize = I.getCard8(t, e + 3),
      r.startOffset = e,
      r.endOffset = e + 4,
      r
    }
    function p(t, e) {
      var r = l(t, 0, t.byteLength);
      return h(r, U, e)
    }
    function f(t, e, r, n) {
      var i = l(t, e, r);
      return h(i, B, n)
    }
    function d(t, e, r, n) {
      var i,
      o,
      s,
      a = new I.Parser(t, e);
      r -= 1;
      var l = [
        '.notdef'
      ],
      h = a.parseCard8();
      if (0 === h) for (i = 0; i < r; i += 1) o = a.parseSID(),
      l.push(u(n, o));
       else if (1 === h) for (; l.length <= r; ) for (o = a.parseSID(), s = a.parseCard8(), i = 0; i <= s; i += 1) l.push(u(n, o)),
      o += 1;
       else {
        if (2 !== h) throw new Error('Unknown charset format ' + h);
        for (; l.length <= r; ) for (o = a.parseSID(), s = a.parseCard16(), i = 0; i <= s; i += 1) l.push(u(n, o)),
        o += 1
      }
      return l
    }
    function m(t, e, r) {
      var n,
      i,
      o = {
      },
      s = new I.Parser(t, e),
      a = s.parseCard8();
      if (0 === a) {
        var l = s.parseCard8();
        for (n = 0; n < l; n += 1) i = s.parseCard8(),
        o[i] = n
      } else {
        if (1 !== a) throw new Error('Unknown encoding format ' + a);
        var u = s.parseCard8();
        for (i = 1, n = 0; n < u; n += 1) for (var h = s.parseCard8(), c = s.parseCard8(), p = h; p <= h + c; p += 1) o[p] = i,
        i += 1
      }
      return new O.CffEncoding(o, r)
    }
    function g(t, e, r) {
      function n(t, e) {
        m && h.closePath(),
        h.moveTo(t, e),
        m = !0
      }
      function i() {
        var e;
        e = c.length % 2 !== 0,
        e && !f && (d = c.shift() + t.nominalWidthX),
        p += c.length >> 1,
        c.length = 0,
        f = !0
      }
      function o(r) {
        for (var v, _, x, b, w, T, S, C, M, R, k, P, D = 0; D < r.length; ) {
          var A = r[D];
          switch (D += 1, A) {
            case 1:
              i();
              break;
            case 3:
              i();
              break;
            case 4:
              c.length > 1 && !f && (d = c.shift() + t.nominalWidthX, f = !0),
              y += c.pop(),
              n(g, y);
              break;
            case 5:
              for (; c.length > 0; ) g += c.shift(),
              y += c.shift(),
              h.lineTo(g, y);
              break;
            case 6:
              for (; c.length > 0 && (g += c.shift(), h.lineTo(g, y), 0 !== c.length); ) y += c.shift(),
              h.lineTo(g, y);
              break;
            case 7:
              for (; c.length > 0 && (y += c.shift(), h.lineTo(g, y), 0 !== c.length); ) g += c.shift(),
              h.lineTo(g, y);
              break;
            case 8:
              for (; c.length > 0; ) s = g + c.shift(),
              a = y + c.shift(),
              l = s + c.shift(),
              u = a + c.shift(),
              g = l + c.shift(),
              y = u + c.shift(),
              h.curveTo(s, a, l, u, g, y);
              break;
            case 10:
              w = c.pop() + t.subrsBias,
              T = t.subrs[w],
              T && o(T);
              break;
            case 11:
              return;
            case 12:
              switch (A = r[D], D += 1, A) {
                case 35:
                  s = g + c.shift(),
                  a = y + c.shift(),
                  l = s + c.shift(),
                  u = a + c.shift(),
                  S = l + c.shift(),
                  C = u + c.shift(),
                  M = S + c.shift(),
                  R = C + c.shift(),
                  k = M + c.shift(),
                  P = R + c.shift(),
                  g = k + c.shift(),
                  y = P + c.shift(),
                  c.shift(),
                  h.curveTo(s, a, l, u, S, C),
                  h.curveTo(M, R, k, P, g, y);
                  break;
                case 34:
                  s = g + c.shift(),
                  a = y,
                  l = s + c.shift(),
                  u = a + c.shift(),
                  S = l + c.shift(),
                  C = u,
                  M = S + c.shift(),
                  R = u,
                  k = M + c.shift(),
                  P = y,
                  g = k + c.shift(),
                  h.curveTo(s, a, l, u, S, C),
                  h.curveTo(M, R, k, P, g, y);
                  break;
                case 36:
                  s = g + c.shift(),
                  a = y + c.shift(),
                  l = s + c.shift(),
                  u = a + c.shift(),
                  S = l + c.shift(),
                  C = u,
                  M = S + c.shift(),
                  R = u,
                  k = M + c.shift(),
                  P = R + c.shift(),
                  g = k + c.shift(),
                  h.curveTo(s, a, l, u, S, C),
                  h.curveTo(M, R, k, P, g, y);
                  break;
                case 37:
                  s = g + c.shift(),
                  a = y + c.shift(),
                  l = s + c.shift(),
                  u = a + c.shift(),
                  S = l + c.shift(),
                  C = u + c.shift(),
                  M = S + c.shift(),
                  R = C + c.shift(),
                  k = M + c.shift(),
                  P = R + c.shift(),
                  Math.abs(k - g) > Math.abs(P - y) ? g = k + c.shift()  : y = P + c.shift(),
                  h.curveTo(s, a, l, u, S, C),
                  h.curveTo(M, R, k, P, g, y);
                  break;
                default:
                  console.log('Glyph ' + e.index + ': unknown operator 1200' + A),
                  c.length = 0
              }
              break;
            case 14:
              c.length > 0 && !f && (d = c.shift() + t.nominalWidthX, f = !0),
              m && (h.closePath(), m = !1);
              break;
            case 18:
              i();
              break;
            case 19:
            case 20:
              i(),
              D += p + 7 >> 3;
              break;
            case 21:
              c.length > 2 && !f && (d = c.shift() + t.nominalWidthX, f = !0),
              y += c.pop(),
              g += c.pop(),
              n(g, y);
              break;
            case 22:
              c.length > 1 && !f && (d = c.shift() + t.nominalWidthX, f = !0),
              g += c.pop(),
              n(g, y);
              break;
            case 23:
              i();
              break;
            case 24:
              for (; c.length > 2; ) s = g + c.shift(),
              a = y + c.shift(),
              l = s + c.shift(),
              u = a + c.shift(),
              g = l + c.shift(),
              y = u + c.shift(),
              h.curveTo(s, a, l, u, g, y);
              g += c.shift(),
              y += c.shift(),
              h.lineTo(g, y);
              break;
            case 25:
              for (; c.length > 6; ) g += c.shift(),
              y += c.shift(),
              h.lineTo(g, y);
              s = g + c.shift(),
              a = y + c.shift(),
              l = s + c.shift(),
              u = a + c.shift(),
              g = l + c.shift(),
              y = u + c.shift(),
              h.curveTo(s, a, l, u, g, y);
              break;
            case 26:
              for (c.length % 2 && (g += c.shift()); c.length > 0; ) s = g,
              a = y + c.shift(),
              l = s + c.shift(),
              u = a + c.shift(),
              g = l,
              y = u + c.shift(),
              h.curveTo(s, a, l, u, g, y);
              break;
            case 27:
              for (c.length % 2 && (y += c.shift()); c.length > 0; ) s = g + c.shift(),
              a = y,
              l = s + c.shift(),
              u = a + c.shift(),
              g = l + c.shift(),
              y = u,
              h.curveTo(s, a, l, u, g, y);
              break;
            case 28:
              v = r[D],
              _ = r[D + 1],
              c.push((v << 24 | _ << 16) >> 16),
              D += 2;
              break;
            case 29:
              w = c.pop() + t.gsubrsBias,
              T = t.gsubrs[w],
              T && o(T);
              break;
            case 30:
              for (; c.length > 0 && (s = g, a = y + c.shift(), l = s + c.shift(), u = a + c.shift(), g = l + c.shift(), y = u + (1 === c.length ? c.shift()  : 0), h.curveTo(s, a, l, u, g, y), 0 !== c.length); ) s = g + c.shift(),
              a = y,
              l = s + c.shift(),
              u = a + c.shift(),
              y = u + c.shift(),
              g = l + (1 === c.length ? c.shift()  : 0),
              h.curveTo(s, a, l, u, g, y);
              break;
            case 31:
              for (; c.length > 0 && (s = g + c.shift(), a = y, l = s + c.shift(), u = a + c.shift(), y = u + c.shift(), g = l + (1 === c.length ? c.shift()  : 0), h.curveTo(s, a, l, u, g, y), 0 !== c.length); ) s = g,
              a = y + c.shift(),
              l = s + c.shift(),
              u = a + c.shift(),
              g = l + c.shift(),
              y = u + (1 === c.length ? c.shift()  : 0),
              h.curveTo(s, a, l, u, g, y);
              break;
            default:
              A < 32 ? console.log('Glyph ' + e.index + ': unknown operator ' + A)  : A < 247 ? c.push(A - 139)  : A < 251 ? (v = r[D], D += 1, c.push(256 * (A - 247) + v + 108))  : A < 255 ? (v = r[D], D += 1, c.push(256 * - (A - 251) - v - 108))  : (v = r[D], _ = r[D + 1], x = r[D + 2], b = r[D + 3], D += 4, c.push((v << 24 | _ << 16 | x << 8 | b) / 65536))
            }
        }
      }
      var s,
      a,
      l,
      u,
      h = new L.Path,
      c = [
      ],
      p = 0,
      f = !1,
      d = t.defaultWidthX,
      m = !1,
      g = 0,
      y = 0;
      return o(r),
      e.advanceWidth = d,
      h
    }
    function y(t) {
      var e;
      return e = t.length < 1240 ? 107 : t.length < 33900 ? 1131 : 32768
    }
    function v(t, e, r) {
      r.tables.cff = {
      };
      var n = c(t, e),
      o = i(t, n.endOffset, I.bytesToString),
      s = i(t, o.endOffset),
      a = i(t, s.endOffset, I.bytesToString),
      l = i(t, a.endOffset);
      r.gsubrs = l.objects,
      r.gsubrsBias = y(r.gsubrs);
      var u = new DataView(new Uint8Array(s.objects[0]).buffer),
      h = p(u, a.objects);
      r.tables.cff.topDict = h;
      var v = e + h.private[1],
      _ = f(t, v, h.private[0], a.objects);
      if (r.defaultWidthX = _.defaultWidthX, r.nominalWidthX = _.nominalWidthX, 0 !== _.subrs) {
        var x = v + _.subrs,
        b = i(t, x);
        r.subrs = b.objects,
        r.subrsBias = y(r.subrs)
      } else r.subrs = [
      ],
      r.subrsBias = 0;
      var w = i(t, e + h.charStrings);
      r.nGlyphs = w.objects.length;
      var T = d(t, e + h.charset, r.nGlyphs, a.objects);
      0 === h.encoding ? r.cffEncoding = new O.CffEncoding(O.cffStandardEncoding, T)  : 1 === h.encoding ? r.cffEncoding = new O.CffEncoding(O.cffExpertEncoding, T)  : r.cffEncoding = m(t, e + h.encoding, T),
      r.encoding = r.encoding || r.cffEncoding,
      r.glyphs = new N.GlyphSet(r);
      for (var S = 0; S < r.nGlyphs; S += 1) {
        var C = w.objects[S];
        r.glyphs.push(S, N.cffGlyphLoader(r, S, g, C))
      }
    }
    function _(t, e) {
      var r,
      n = O.cffStandardStrings.indexOf(t);
      return n >= 0 && (r = n),
      n = e.indexOf(t),
      n >= 0 ? r = n + O.cffStandardStrings.length : (r = O.cffStandardStrings.length + e.length, e.push(t)),
      r
    }
    function x() {
      return new F.Table('Header', [
        {
          name: 'major',
          type: 'Card8',
          value: 1
        },
        {
          name: 'minor',
          type: 'Card8',
          value: 0
        },
        {
          name: 'hdrSize',
          type: 'Card8',
          value: 4
        },
        {
          name: 'major',
          type: 'Card8',
          value: 1
        }
      ])
    }
    function b(t) {
      var e = new F.Table('Name INDEX', [
        {
          name: 'names',
          type: 'INDEX',
          value: [
          ]
        }
      ]);
      e.names = [
      ];
      for (var r = 0; r < t.length; r += 1) e.names.push({
        name: 'name_' + r,
        type: 'NAME',
        value: t[r]
      });
      return e
    }
    function w(t, e, r) {
      for (var i = {
      }, o = 0; o < t.length; o += 1) {
        var s = t[o],
        a = e[s.name];
        void 0 === a || n(a, s.value) || ('SID' === s.type && (a = _(a, r)), i[s.op] = {
          name: s.name,
          type: s.type,
          value: a
        })
      }
      return i
    }
    function T(t, e) {
      var r = new F.Table('Top DICT', [
        {
          name: 'dict',
          type: 'DICT',
          value: {
          }
        }
      ]);
      return r.dict = w(U, t, e),
      r
    }
    function S(t) {
      var e = new F.Table('Top DICT INDEX', [
        {
          name: 'topDicts',
          type: 'INDEX',
          value: [
          ]
        }
      ]);
      return e.topDicts = [
        {
          name: 'topDict_0',
          type: 'TABLE',
          value: t
        }
      ],
      e
    }
    function C(t) {
      var e = new F.Table('String INDEX', [
        {
          name: 'strings',
          type: 'INDEX',
          value: [
          ]
        }
      ]);
      e.strings = [
      ];
      for (var r = 0; r < t.length; r += 1) e.strings.push({
        name: 'string_' + r,
        type: 'STRING',
        value: t[r]
      });
      return e
    }
    function M() {
      return new F.Table('Global Subr INDEX', [
        {
          name: 'subrs',
          type: 'INDEX',
          value: [
          ]
        }
      ])
    }
    function R(t, e) {
      for (var r = new F.Table('Charsets', [
        {
          name: 'format',
          type: 'Card8',
          value: 0
        }
      ]), n = 0; n < t.length; n += 1) {
        var i = t[n],
        o = _(i, e);
        r.fields.push({
          name: 'glyph_' + n,
          type: 'SID',
          value: o
        })
      }
      return r
    }
    function k(t) {
      var e = [
      ],
      r = t.path;
      e.push({
        name: 'width',
        type: 'NUMBER',
        value: t.advanceWidth
      });
      for (var n = 0, i = 0, o = 0; o < r.commands.length; o += 1) {
        var s,
        a,
        l = r.commands[o];
        if ('Q' === l.type) {
          var u = 1 / 3,
          h = 2 / 3;
          l = {
            type: 'C',
            x: l.x,
            y: l.y,
            x1: u * n + h * l.x1,
            y1: u * i + h * l.y1,
            x2: u * l.x + h * l.x1,
            y2: u * l.y + h * l.y1
          }
        }
        if ('M' === l.type) s = Math.round(l.x - n),
        a = Math.round(l.y - i),
        e.push({
          name: 'dx',
          type: 'NUMBER',
          value: s
        }),
        e.push({
          name: 'dy',
          type: 'NUMBER',
          value: a
        }),
        e.push({
          name: 'rmoveto',
          type: 'OP',
          value: 21
        }),
        n = Math.round(l.x),
        i = Math.round(l.y);
         else if ('L' === l.type) s = Math.round(l.x - n),
        a = Math.round(l.y - i),
        e.push({
          name: 'dx',
          type: 'NUMBER',
          value: s
        }),
        e.push({
          name: 'dy',
          type: 'NUMBER',
          value: a
        }),
        e.push({
          name: 'rlineto',
          type: 'OP',
          value: 5
        }),
        n = Math.round(l.x),
        i = Math.round(l.y);
         else if ('C' === l.type) {
          var c = Math.round(l.x1 - n),
          p = Math.round(l.y1 - i),
          f = Math.round(l.x2 - l.x1),
          d = Math.round(l.y2 - l.y1);
          s = Math.round(l.x - l.x2),
          a = Math.round(l.y - l.y2),
          e.push({
            name: 'dx1',
            type: 'NUMBER',
            value: c
          }),
          e.push({
            name: 'dy1',
            type: 'NUMBER',
            value: p
          }),
          e.push({
            name: 'dx2',
            type: 'NUMBER',
            value: f
          }),
          e.push({
            name: 'dy2',
            type: 'NUMBER',
            value: d
          }),
          e.push({
            name: 'dx',
            type: 'NUMBER',
            value: s
          }),
          e.push({
            name: 'dy',
            type: 'NUMBER',
            value: a
          }),
          e.push({
            name: 'rrcurveto',
            type: 'OP',
            value: 8
          }),
          n = Math.round(l.x),
          i = Math.round(l.y)
        }
      }
      return e.push({
        name: 'endchar',
        type: 'OP',
        value: 14
      }),
      e
    }
    function P(t) {
      for (var e = new F.Table('CharStrings INDEX', [
        {
          name: 'charStrings',
          type: 'INDEX',
          value: [
          ]
        }
      ]), r = 0; r < t.length; r += 1) {
        var n = t.get(r),
        i = k(n);
        e.charStrings.push({
          name: n.name,
          type: 'CHARSTRING',
          value: i
        })
      }
      return e
    }
    function D(t, e) {
      var r = new F.Table('Private DICT', [
        {
          name: 'dict',
          type: 'DICT',
          value: {
          }
        }
      ]);
      return r.dict = w(B, t, e),
      r
    }
    function A(t) {
      var e = new F.Table('Private DICT INDEX', [
        {
          name: 'privateDicts',
          type: 'INDEX',
          value: [
          ]
        }
      ]);
      return e.privateDicts = [
        {
          name: 'privateDict_0',
          type: 'TABLE',
          value: t
        }
      ],
      e
    }
    function E(t, e) {
      for (var r, n = new F.Table('CFF ', [
        {
          name: 'header',
          type: 'TABLE'
        },
        {
          name: 'nameIndex',
          type: 'TABLE'
        },
        {
          name: 'topDictIndex',
          type: 'TABLE'
        },
        {
          name: 'stringIndex',
          type: 'TABLE'
        },
        {
          name: 'globalSubrIndex',
          type: 'TABLE'
        },
        {
          name: 'charsets',
          type: 'TABLE'
        },
        {
          name: 'charStringsIndex',
          type: 'TABLE'
        },
        {
          name: 'privateDictIndex',
          type: 'TABLE'
        }
      ]), i = 1 / e.unitsPerEm, o = {
        version: e.version,
        fullName: e.fullName,
        familyName: e.familyName,
        weight: e.weightName,
        fontMatrix: [
          i,
          0,
          0,
          i,
          0,
          0
        ],
        charset: 999,
        encoding: 0,
        charStrings: 999,
        private: [
          0,
          999
        ]
      }, s = {
      }, a = [
      ], l = 1; l < t.length; l += 1) r = t.get(l),
      a.push(r.name);
      var u = [
      ];
      n.header = x(),
      n.nameIndex = b([e.postScriptName]);
      var h = T(o, u);
      n.topDictIndex = S(h),
      n.globalSubrIndex = M(),
      n.charsets = R(a, u),
      n.charStringsIndex = P(t);
      var c = D(s, u);
      n.privateDictIndex = A(c),
      n.stringIndex = C(u);
      var p = n.header.sizeOf() + n.nameIndex.sizeOf() + n.topDictIndex.sizeOf() + n.stringIndex.sizeOf() + n.globalSubrIndex.sizeOf();
      return o.charset = p,
      o.encoding = 0,
      o.charStrings = o.charset + n.charsets.sizeOf(),
      o.private[1] = o.charStrings + n.charStringsIndex.sizeOf(),
      h = T(o, u),
      n.topDictIndex = S(h),
      n
    }
    var O = t('../encoding'),
    N = t('../glyphset'),
    I = t('../parse'),
    L = t('../path'),
    F = t('../table'),
    U = [
      {
        name: 'version',
        op: 0,
        type: 'SID'
      },
      {
        name: 'notice',
        op: 1,
        type: 'SID'
      },
      {
        name: 'copyright',
        op: 1200,
        type: 'SID'
      },
      {
        name: 'fullName',
        op: 2,
        type: 'SID'
      },
      {
        name: 'familyName',
        op: 3,
        type: 'SID'
      },
      {
        name: 'weight',
        op: 4,
        type: 'SID'
      },
      {
        name: 'isFixedPitch',
        op: 1201,
        type: 'number',
        value: 0
      },
      {
        name: 'italicAngle',
        op: 1202,
        type: 'number',
        value: 0
      },
      {
        name: 'underlinePosition',
        op: 1203,
        type: 'number',
        value: - 100
      },
      {
        name: 'underlineThickness',
        op: 1204,
        type: 'number',
        value: 50
      },
      {
        name: 'paintType',
        op: 1205,
        type: 'number',
        value: 0
      },
      {
        name: 'charstringType',
        op: 1206,
        type: 'number',
        value: 2
      },
      {
        name: 'fontMatrix',
        op: 1207,
        type: [
          'real',
          'real',
          'real',
          'real',
          'real',
          'real'
        ],
        value: [
          0.001,
          0,
          0,
          0.001,
          0,
          0
        ]
      },
      {
        name: 'uniqueId',
        op: 13,
        type: 'number'
      },
      {
        name: 'fontBBox',
        op: 5,
        type: [
          'number',
          'number',
          'number',
          'number'
        ],
        value: [
          0,
          0,
          0,
          0
        ]
      },
      {
        name: 'strokeWidth',
        op: 1208,
        type: 'number',
        value: 0
      },
      {
        name: 'xuid',
        op: 14,
        type: [
        ],
        value: null
      },
      {
        name: 'charset',
        op: 15,
        type: 'offset',
        value: 0
      },
      {
        name: 'encoding',
        op: 16,
        type: 'offset',
        value: 0
      },
      {
        name: 'charStrings',
        op: 17,
        type: 'offset',
        value: 0
      },
      {
        name: 'private',
        op: 18,
        type: [
          'number',
          'offset'
        ],
        value: [
          0,
          0
        ]
      }
    ],
    B = [
      {
        name: 'subrs',
        op: 19,
        type: 'offset',
        value: 0
      },
      {
        name: 'defaultWidthX',
        op: 20,
        type: 'number',
        value: 0
      },
      {
        name: 'nominalWidthX',
        op: 21,
        type: 'number',
        value: 0
      }
    ];
    r.parse = v,
    r.make = E
  },
  {
    '../encoding': 4,
    '../glyphset': 7,
    '../parse': 9,
    '../path': 10,
    '../table': 11
  }
  ],
  13: [
    function (t, e, r) {
      'use strict';
      function n(t, e) {
        var r,
        n = {
        };
        n.version = l.getUShort(t, e),
        a.argument(0 === n.version, 'cmap table version should be 0.'),
        n.numTables = l.getUShort(t, e + 2);
        var i = - 1;
        for (r = 0; r < n.numTables; r += 1) {
          var o = l.getUShort(t, e + 4 + 8 * r),
          s = l.getUShort(t, e + 4 + 8 * r + 2);
          if (3 === o && (1 === s || 0 === s)) {
            i = l.getULong(t, e + 4 + 8 * r + 4);
            break
          }
        }
        if (i === - 1) return null;
        var u = new l.Parser(t, e + i);
        n.format = u.parseUShort(),
        a.argument(4 === n.format, 'Only format 4 cmap tables are supported.'),
        n.length = u.parseUShort(),
        n.language = u.parseUShort();
        var h;
        n.segCount = h = u.parseUShort() >> 1,
        u.skip('uShort', 3),
        n.glyphIndexMap = {
        };
        var c = new l.Parser(t, e + i + 14),
        p = new l.Parser(t, e + i + 16 + 2 * h),
        f = new l.Parser(t, e + i + 16 + 4 * h),
        d = new l.Parser(t, e + i + 16 + 6 * h),
        m = e + i + 16 + 8 * h;
        for (r = 0; r < h - 1; r += 1) for (var g, y = c.parseUShort(), v = p.parseUShort(), _ = f.parseShort(), x = d.parseUShort(), b = v; b <= y; b += 1) 0 !== x ? (m = d.offset + d.relativeOffset - 2, m += x, m += 2 * (b - v), g = l.getUShort(t, m), 0 !== g && (g = g + _ & 65535))  : g = b + _ & 65535,
        n.glyphIndexMap[b] = g;
        return n
      }
      function i(t, e, r) {
        t.segments.push({
          end: e,
          start: e,
          delta: - (e - r),
          offset: 0
        })
      }
      function o(t) {
        t.segments.push({
          end: 65535,
          start: 65535,
          delta: 1,
          offset: 0
        })
      }
      function s(t) {
        var e,
        r = new u.Table('cmap', [
          {
            name: 'version',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'numTables',
            type: 'USHORT',
            value: 1
          },
          {
            name: 'platformID',
            type: 'USHORT',
            value: 3
          },
          {
            name: 'encodingID',
            type: 'USHORT',
            value: 1
          },
          {
            name: 'offset',
            type: 'ULONG',
            value: 12
          },
          {
            name: 'format',
            type: 'USHORT',
            value: 4
          },
          {
            name: 'length',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'language',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'segCountX2',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'searchRange',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'entrySelector',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'rangeShift',
            type: 'USHORT',
            value: 0
          }
        ]);
        for (r.segments = [
        ], e = 0; e < t.length; e += 1) {
          for (var n = t.get(e), s = 0; s < n.unicodes.length; s += 1) i(r, n.unicodes[s], e);
          r.segments = r.segments.sort(function (t, e) {
            return t.start - e.start
          })
        }
        o(r);
        var a;
        a = r.segments.length,
        r.segCountX2 = 2 * a,
        r.searchRange = 2 * Math.pow(2, Math.floor(Math.log(a) / Math.log(2))),
        r.entrySelector = Math.log(r.searchRange / 2) / Math.log(2),
        r.rangeShift = r.segCountX2 - r.searchRange;
        var l = [
        ],
        h = [
        ],
        c = [
        ],
        p = [
        ],
        f = [
        ];
        for (e = 0; e < a; e += 1) {
          var d = r.segments[e];
          l = l.concat({
            name: 'end_' + e,
            type: 'USHORT',
            value: d.end
          }),
          h = h.concat({
            name: 'start_' + e,
            type: 'USHORT',
            value: d.start
          }),
          c = c.concat({
            name: 'idDelta_' + e,
            type: 'SHORT',
            value: d.delta
          }),
          p = p.concat({
            name: 'idRangeOffset_' + e,
            type: 'USHORT',
            value: d.offset
          }),
          void 0 !== d.glyphId && (f = f.concat({
            name: 'glyph_' + e,
            type: 'USHORT',
            value: d.glyphId
          }))
        }
        return r.fields = r.fields.concat(l),
        r.fields.push({
          name: 'reservedPad',
          type: 'USHORT',
          value: 0
        }),
        r.fields = r.fields.concat(h),
        r.fields = r.fields.concat(c),
        r.fields = r.fields.concat(p),
        r.fields = r.fields.concat(f),
        r.length = 14 + 2 * l.length + 2 + 2 * h.length + 2 * c.length + 2 * p.length + 2 * f.length,
        r
      }
      var a = t('../check'),
      l = t('../parse'),
      u = t('../table');
      r.parse = n,
      r.make = s
    },
    {
      '../check': 2,
      '../parse': 9,
      '../table': 11
    }
  ],
  14: [
    function (t, e, r) {
      'use strict';
      function n(t, e, r, n, i) {
        var o;
        return (e & n) > 0 ? (o = t.parseByte(), 0 === (e & i) && (o = - o), o = r + o)  : o = (e & i) > 0 ? r : r + t.parseShort(),
        o
      }
      function i(t, e, r) {
        var i = new p.Parser(e, r);
        t.numberOfContours = i.parseShort(),
        t.xMin = i.parseShort(),
        t.yMin = i.parseShort(),
        t.xMax = i.parseShort(),
        t.yMax = i.parseShort();
        var o,
        s;
        if (t.numberOfContours > 0) {
          var a,
          l = t.endPointIndices = [
          ];
          for (a = 0; a < t.numberOfContours; a += 1) l.push(i.parseUShort());
          for (t.instructionLength = i.parseUShort(), t.instructions = [
          ], a = 0; a < t.instructionLength; a += 1) t.instructions.push(i.parseByte());
          var u = l[l.length - 1] + 1;
          for (o = [
          ], a = 0; a < u; a += 1) if (s = i.parseByte(), o.push(s), (8 & s) > 0) for (var c = i.parseByte(), f = 0; f < c; f += 1) o.push(s),
          a += 1;
          if (h.argument(o.length === u, 'Bad flags.'), l.length > 0) {
            var d,
            m = [
            ];
            if (u > 0) {
              for (a = 0; a < u; a += 1) s = o[a],
              d = {
              },
              d.onCurve = !!(1 & s),
              d.lastPointOfContour = l.indexOf(a) >= 0,
              m.push(d);
              var g = 0;
              for (a = 0; a < u; a += 1) s = o[a],
              d = m[a],
              d.x = n(i, s, g, 2, 16),
              g = d.x;
              var y = 0;
              for (a = 0; a < u; a += 1) s = o[a],
              d = m[a],
              d.y = n(i, s, y, 4, 32),
              y = d.y
            }
            t.points = m
          } else t.points = [
          ]
        } else if (0 === t.numberOfContours) t.points = [
        ];
         else {
          t.isComposite = !0,
          t.points = [
          ],
          t.components = [
          ];
          for (var v = !0; v; ) {
            o = i.parseUShort();
            var _ = {
              glyphIndex: i.parseUShort(),
              xScale: 1,
              scale01: 0,
              scale10: 0,
              yScale: 1,
              dx: 0,
              dy: 0
            };
            (1 & o) > 0 ? (_.dx = i.parseShort(), _.dy = i.parseShort())  : (_.dx = i.parseChar(), _.dy = i.parseChar()),
            (8 & o) > 0 ? _.xScale = _.yScale = i.parseF2Dot14()  : (64 & o) > 0 ? (_.xScale = i.parseF2Dot14(), _.yScale = i.parseF2Dot14())  : (128 & o) > 0 && (_.xScale = i.parseF2Dot14(), _.scale01 = i.parseF2Dot14(), _.scale10 = i.parseF2Dot14(), _.yScale = i.parseF2Dot14()),
            t.components.push(_),
            v = !!(32 & o)
          }
        }
      }
      function o(t, e) {
        for (var r = [
        ], n = 0; n < t.length; n += 1) {
          var i = t[n],
          o = {
            x: e.xScale * i.x + e.scale01 * i.y + e.dx,
            y: e.scale10 * i.x + e.yScale * i.y + e.dy,
            onCurve: i.onCurve,
            lastPointOfContour: i.lastPointOfContour
          };
          r.push(o)
        }
        return r
      }
      function s(t) {
        for (var e = [
        ], r = [
        ], n = 0; n < t.length; n += 1) {
          var i = t[n];
          r.push(i),
          i.lastPointOfContour && (e.push(r), r = [
          ])
        }
        return h.argument(0 === r.length, 'There are still points left in the current contour.'),
        e
      }
      function a(t) {
        var e = new f.Path;
        if (!t) return e;
        for (var r = s(t), n = 0; n < r.length; n += 1) {
          var i,
          o,
          a = r[n],
          l = a[0],
          u = a[a.length - 1];
          l.onCurve ? (i = null, o = !0)  : (l = u.onCurve ? u : {
            x: (l.x + u.x) / 2,
            y: (l.y + u.y) / 2
          }, i = l, o = !1),
          e.moveTo(l.x, l.y);
          for (var h = o ? 1 : 0; h < a.length; h += 1) {
            var c = a[h],
            p = 0 === h ? l : a[h - 1];
            if (p.onCurve && c.onCurve) e.lineTo(c.x, c.y);
             else if (p.onCurve && !c.onCurve) i = c;
             else if (p.onCurve || c.onCurve) {
              if (p.onCurve || !c.onCurve) throw new Error('Invalid state.');
              e.quadraticCurveTo(i.x, i.y, c.x, c.y),
              i = null
            } else {
              var d = {
                x: (p.x + c.x) / 2,
                y: (p.y + c.y) / 2
              };
              e.quadraticCurveTo(p.x, p.y, d.x, d.y),
              i = c
            }
          }
          l !== u && (i ? e.quadraticCurveTo(i.x, i.y, l.x, l.y)  : e.lineTo(l.x, l.y))
        }
        return e.closePath(),
        e
      }
      function l(t, e) {
        if (e.isComposite) for (var r = 0; r < e.components.length; r += 1) {
          var n = e.components[r],
          i = t.get(n.glyphIndex);
          if (i.points) {
            var s = o(i.points, n);
            e.points = e.points.concat(s)
          }
        }
        return a(e.points)
      }
      function u(t, e, r, n) {
        var o,
        s = new c.GlyphSet(n);
        for (o = 0; o < r.length - 1; o += 1) {
          var a = r[o],
          u = r[o + 1];
          a !== u ? s.push(o, c.ttfGlyphLoader(n, o, i, t, e + a, l))  : s.push(o, c.glyphLoader(n, o))
        }
        return s
      }
      var h = t('../check'),
      c = t('../glyphset'),
      p = t('../parse'),
      f = t('../path');
      r.parse = u
    },
    {
      '../check': 2,
      '../glyphset': 7,
      '../parse': 9,
      '../path': 10
    }
  ],
  15: [
    function (t, e, r) {
      'use strict';
      function n(t, e) {
        for (var r = new h.Parser(t, e), n = r.parseUShort(), i = [
        ], o = 0; o < n; o++) i[r.parseTag()] = {
          offset: r.parseUShort()
        };
        return i
      }
      function i(t, e) {
        var r = new h.Parser(t, e),
        n = r.parseUShort(),
        i = r.parseUShort();
        if (1 === n) return r.parseUShortList(i);
        if (2 === n) {
          for (var o = [
          ]; i--; ) for (var s = r.parseUShort(), a = r.parseUShort(), l = r.parseUShort(), u = s; u <= a; u++) o[l++] = u;
          return o
        }
      }
      function o(t, e) {
        var r = new h.Parser(t, e),
        n = r.parseUShort();
        if (1 === n) {
          var i = r.parseUShort(),
          o = r.parseUShort(),
          s = r.parseUShortList(o);
          return function (t) {
            return s[t - i] || 0
          }
        }
        if (2 === n) {
          for (var a = r.parseUShort(), l = [
          ], u = [
          ], c = [
          ], p = 0; p < a; p++) l[p] = r.parseUShort(),
          u[p] = r.parseUShort(),
          c[p] = r.parseUShort();
          return function (t) {
            for (var e = 0, r = l.length - 1; e < r; ) {
              var n = e + r + 1 >> 1;
              t < l[n] ? r = n - 1 : e = n
            }
            return l[e] <= t && t <= u[e] ? c[e] || 0 : 0
          }
        }
      }
      function s(t, e) {
        var r,
        n,
        s = new h.Parser(t, e),
        a = s.parseUShort(),
        l = s.parseUShort(),
        u = i(t, e + l),
        c = s.parseUShort(),
        p = s.parseUShort();
        if (4 === c && 0 === p) {
          var f = {
          };
          if (1 === a) {
            for (var d = s.parseUShort(), m = [
            ], g = s.parseOffset16List(d), y = 0; y < d; y++) {
              var v = g[y],
              _ = f[v];
              if (!_) {
                _ = {
                },
                s.relativeOffset = v;
                for (var x = s.parseUShort(); x--; ) {
                  var b = s.parseUShort();
                  c && (r = s.parseShort()),
                  p && (n = s.parseShort()),
                  _[b] = r
                }
              }
              m[u[y]] = _
            }
            return function (t, e) {
              var r = m[t];
              if (r) return r[e]
            }
          }
          if (2 === a) {
            for (var w = s.parseUShort(), T = s.parseUShort(), S = s.parseUShort(), C = s.parseUShort(), M = o(t, e + w), R = o(t, e + T), k = [
            ], P = 0; P < S; P++) for (var D = k[P] = [
            ], A = 0; A < C; A++) c && (r = s.parseShort()),
            p && (n = s.parseShort()),
            D[A] = r;
            var E = {
            };
            for (P = 0; P < u.length; P++) E[u[P]] = 1;
            return function (t, e) {
              if (E[t]) {
                var r = M(t),
                n = R(e),
                i = k[r];
                return i ? i[n] : void 0
              }
            }
          }
        }
      }
      function a(t, e) {
        var r = new h.Parser(t, e),
        n = r.parseUShort(),
        i = r.parseUShort(),
        o = 16 & i,
        a = r.parseUShort(),
        l = r.parseOffset16List(a),
        u = {
          lookupType: n,
          lookupFlag: i,
          markFilteringSet: o ? r.parseUShort()  : - 1
        };
        if (2 === n) {
          for (var c = [
          ], p = 0; p < a; p++) c.push(s(t, e + l[p]));
          u.getKerningValue = function (t, e) {
            for (var r = c.length; r--; ) {
              var n = c[r](t, e);
              if (void 0 !== n) return n
            }
            return 0
          }
        }
        return u
      }
      function l(t, e, r) {
        var i = new h.Parser(t, e),
        o = i.parseFixed();
        u.argument(1 === o, 'Unsupported GPOS table version.'),
        n(t, e + i.parseUShort()),
        n(t, e + i.parseUShort());
        var s = i.parseUShort();
        i.relativeOffset = s;
        for (var l = i.parseUShort(), c = i.parseOffset16List(l), p = e + s, f = 0; f < l; f++) {
          var d = a(t, p + c[f]);
          2 !== d.lookupType || r.getGposKerningValue || (r.getGposKerningValue = d.getKerningValue)
        }
      }
      var u = t('../check'),
      h = t('../parse');
      r.parse = l
    },
    {
      '../check': 2,
      '../parse': 9
    }
  ],
  16: [
    function (t, e, r) {
      'use strict';
      function n(t, e) {
        var r = {
        },
        n = new s.Parser(t, e);
        return r.version = n.parseVersion(),
        r.fontRevision = Math.round(1000 * n.parseFixed()) / 1000,
        r.checkSumAdjustment = n.parseULong(),
        r.magicNumber = n.parseULong(),
        o.argument(1594834165 === r.magicNumber, 'Font header has wrong magic number.'),
        r.flags = n.parseUShort(),
        r.unitsPerEm = n.parseUShort(),
        r.created = n.parseLongDateTime(),
        r.modified = n.parseLongDateTime(),
        r.xMin = n.parseShort(),
        r.yMin = n.parseShort(),
        r.xMax = n.parseShort(),
        r.yMax = n.parseShort(),
        r.macStyle = n.parseUShort(),
        r.lowestRecPPEM = n.parseUShort(),
        r.fontDirectionHint = n.parseShort(),
        r.indexToLocFormat = n.parseShort(),
        r.glyphDataFormat = n.parseShort(),
        r
      }
      function i(t) {
        return new a.Table('head', [
          {
            name: 'version',
            type: 'FIXED',
            value: 65536
          },
          {
            name: 'fontRevision',
            type: 'FIXED',
            value: 65536
          },
          {
            name: 'checkSumAdjustment',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'magicNumber',
            type: 'ULONG',
            value: 1594834165
          },
          {
            name: 'flags',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'unitsPerEm',
            type: 'USHORT',
            value: 1000
          },
          {
            name: 'created',
            type: 'LONGDATETIME',
            value: 0
          },
          {
            name: 'modified',
            type: 'LONGDATETIME',
            value: 0
          },
          {
            name: 'xMin',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'yMin',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'xMax',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'yMax',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'macStyle',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'lowestRecPPEM',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'fontDirectionHint',
            type: 'SHORT',
            value: 2
          },
          {
            name: 'indexToLocFormat',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'glyphDataFormat',
            type: 'SHORT',
            value: 0
          }
        ], t)
      }
      var o = t('../check'),
      s = t('../parse'),
      a = t('../table');
      r.parse = n,
      r.make = i
    },
    {
      '../check': 2,
      '../parse': 9,
      '../table': 11
    }
  ],
  17: [
    function (t, e, r) {
      'use strict';
      function n(t, e) {
        var r = {
        },
        n = new o.Parser(t, e);
        return r.version = n.parseVersion(),
        r.ascender = n.parseShort(),
        r.descender = n.parseShort(),
        r.lineGap = n.parseShort(),
        r.advanceWidthMax = n.parseUShort(),
        r.minLeftSideBearing = n.parseShort(),
        r.minRightSideBearing = n.parseShort(),
        r.xMaxExtent = n.parseShort(),
        r.caretSlopeRise = n.parseShort(),
        r.caretSlopeRun = n.parseShort(),
        r.caretOffset = n.parseShort(),
        n.relativeOffset += 8,
        r.metricDataFormat = n.parseShort(),
        r.numberOfHMetrics = n.parseUShort(),
        r
      }
      function i(t) {
        return new s.Table('hhea', [
          {
            name: 'version',
            type: 'FIXED',
            value: 65536
          },
          {
            name: 'ascender',
            type: 'FWORD',
            value: 0
          },
          {
            name: 'descender',
            type: 'FWORD',
            value: 0
          },
          {
            name: 'lineGap',
            type: 'FWORD',
            value: 0
          },
          {
            name: 'advanceWidthMax',
            type: 'UFWORD',
            value: 0
          },
          {
            name: 'minLeftSideBearing',
            type: 'FWORD',
            value: 0
          },
          {
            name: 'minRightSideBearing',
            type: 'FWORD',
            value: 0
          },
          {
            name: 'xMaxExtent',
            type: 'FWORD',
            value: 0
          },
          {
            name: 'caretSlopeRise',
            type: 'SHORT',
            value: 1
          },
          {
            name: 'caretSlopeRun',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'caretOffset',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'reserved1',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'reserved2',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'reserved3',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'reserved4',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'metricDataFormat',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'numberOfHMetrics',
            type: 'USHORT',
            value: 0
          }
        ], t)
      }
      var o = t('../parse'),
      s = t('../table');
      r.parse = n,
      r.make = i
    },
    {
      '../parse': 9,
      '../table': 11
    }
  ],
  18: [
    function (t, e, r) {
      'use strict';
      function n(t, e, r, n, i) {
        for (var s, a, l = new o.Parser(t, e), u = 0; u < n; u += 1) {
          u < r && (s = l.parseUShort(), a = l.parseShort());
          var h = i.get(u);
          h.advanceWidth = s,
          h.leftSideBearing = a
        }
      }
      function i(t) {
        for (var e = new s.Table('hmtx', [
        ]), r = 0; r < t.length; r += 1) {
          var n = t.get(r),
          i = n.advanceWidth || 0,
          o = n.leftSideBearing || 0;
          e.fields.push({
            name: 'advanceWidth_' + r,
            type: 'USHORT',
            value: i
          }),
          e.fields.push({
            name: 'leftSideBearing_' + r,
            type: 'SHORT',
            value: o
          })
        }
        return e
      }
      var o = t('../parse'),
      s = t('../table');
      r.parse = n,
      r.make = i
    },
    {
      '../parse': 9,
      '../table': 11
    }
  ],
  19: [
    function (t, e, r) {
      'use strict';
      function n(t, e) {
        var r = {
        },
        n = new o.Parser(t, e),
        s = n.parseUShort();
        i.argument(0 === s, 'Unsupported kern table version.'),
        n.skip('uShort', 1);
        var a = n.parseUShort();
        i.argument(0 === a, 'Unsupported kern sub-table version.'),
        n.skip('uShort', 2);
        var l = n.parseUShort();
        n.skip('uShort', 3);
        for (var u = 0; u < l; u += 1) {
          var h = n.parseUShort(),
          c = n.parseUShort(),
          p = n.parseShort();
          r[h + ',' + c] = p
        }
        return r
      }
      var i = t('../check'),
      o = t('../parse');
      r.parse = n
    },
    {
      '../check': 2,
      '../parse': 9
    }
  ],
  20: [
    function (t, e, r) {
      'use strict';
      function n(t, e, r, n) {
        for (var o = new i.Parser(t, e), s = n ? o.parseUShort : o.parseULong, a = [
        ], l = 0; l < r + 1; l += 1) {
          var u = s.call(o);
          n && (u *= 2),
          a.push(u)
        }
        return a
      }
      var i = t('../parse');
      r.parse = n
    },
    {
      '../parse': 9
    }
  ],
  21: [
    function (t, e, r) {
      'use strict';
      function n(t, e) {
        var r = {
        },
        n = new o.Parser(t, e);
        return r.version = n.parseVersion(),
        r.numGlyphs = n.parseUShort(),
        1 === r.version && (r.maxPoints = n.parseUShort(), r.maxContours = n.parseUShort(), r.maxCompositePoints = n.parseUShort(), r.maxCompositeContours = n.parseUShort(), r.maxZones = n.parseUShort(), r.maxTwilightPoints = n.parseUShort(), r.maxStorage = n.parseUShort(), r.maxFunctionDefs = n.parseUShort(), r.maxInstructionDefs = n.parseUShort(), r.maxStackElements = n.parseUShort(), r.maxSizeOfInstructions = n.parseUShort(), r.maxComponentElements = n.parseUShort(), r.maxComponentDepth = n.parseUShort()),
        r
      }
      function i(t) {
        return new s.Table('maxp', [
          {
            name: 'version',
            type: 'FIXED',
            value: 20480
          },
          {
            name: 'numGlyphs',
            type: 'USHORT',
            value: t
          }
        ])
      }
      var o = t('../parse'),
      s = t('../table');
      r.parse = n,
      r.make = i
    },
    {
      '../parse': 9,
      '../table': 11
    }
  ],
  22: [
    function (t, e, r) {
      'use strict';
      function n(t, e) {
        var r = {
        },
        n = new u.Parser(t, e);
        r.format = n.parseUShort();
        for (var i = n.parseUShort(), o = n.offset + n.parseUShort(), s = 0, a = 0; a < i; a++) {
          var l = n.parseUShort(),
          h = n.parseUShort(),
          p = n.parseUShort(),
          f = n.parseUShort(),
          d = c[f],
          m = n.parseUShort(),
          g = n.parseUShort();
          if (3 === l && 1 === h && 1033 === p) {
            for (var y = [
            ], v = m / 2, _ = 0; _ < v; _++, g += 2) y[_] = u.getShort(t, o + g);
            var x = String.fromCharCode.apply(null, y);
            d ? r[d] = x : (s++, r['unknown' + s] = x)
          }
        }
        return 1 === r.format && (r.langTagCount = n.parseUShort()),
        r
      }
      function i(t, e, r, n, i, o) {
        return new h.Table('NameRecord', [
          {
            name: 'platformID',
            type: 'USHORT',
            value: t
          },
          {
            name: 'encodingID',
            type: 'USHORT',
            value: e
          },
          {
            name: 'languageID',
            type: 'USHORT',
            value: r
          },
          {
            name: 'nameID',
            type: 'USHORT',
            value: n
          },
          {
            name: 'length',
            type: 'USHORT',
            value: i
          },
          {
            name: 'offset',
            type: 'USHORT',
            value: o
          }
        ])
      }
      function o(t, e, r, n) {
        var o = l.STRING(r);
        return t.records.push(i(1, 0, 0, e, o.length, n)),
        t.strings.push(o),
        n += o.length
      }
      function s(t, e, r, n) {
        var o = l.UTF16(r);
        return t.records.push(i(3, 1, 1033, e, o.length, n)),
        t.strings.push(o),
        n += o.length
      }
      function a(t) {
        var e = new h.Table('name', [
          {
            name: 'format',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'count',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'stringOffset',
            type: 'USHORT',
            value: 0
          }
        ]);
        e.records = [
        ],
        e.strings = [
        ];
        var r,
        n,
        i = 0;
        for (r = 0; r < c.length; r += 1) void 0 !== t[c[r]] && (n = t[c[r]], i = o(e, r, n, i));
        for (r = 0; r < c.length; r += 1) void 0 !== t[c[r]] && (n = t[c[r]], i = s(e, r, n, i));
        for (e.count = e.records.length, e.stringOffset = 6 + 12 * e.count, r = 0; r < e.records.length; r += 1) e.fields.push({
          name: 'record_' + r,
          type: 'TABLE',
          value: e.records[r]
        });
        for (r = 0; r < e.strings.length; r += 1) e.fields.push({
          name: 'string_' + r,
          type: 'LITERAL',
          value: e.strings[r]
        });
        return e
      }
      var l = t('../types').encode,
      u = t('../parse'),
      h = t('../table'),
      c = [
        'copyright',
        'fontFamily',
        'fontSubfamily',
        'uniqueID',
        'fullName',
        'version',
        'postScriptName',
        'trademark',
        'manufacturer',
        'designer',
        'description',
        'manufacturerURL',
        'designerURL',
        'licence',
        'licenceURL',
        'reserved',
        'preferredFamily',
        'preferredSubfamily',
        'compatibleFullName',
        'sampleText',
        'postScriptFindFontName',
        'wwsFamily',
        'wwsSubfamily'
      ];
      r.parse = n,
      r.make = a
    },
    {
      '../parse': 9,
      '../table': 11,
      '../types': 26
    }
  ],
  23: [
    function (t, e, r) {
      'use strict';
      function n(t) {
        for (var e = 0; e < l.length; e += 1) {
          var r = l[e];
          if (t >= r.begin && t < r.end) return e
        }
        return - 1
      }
      function i(t, e) {
        var r = {
        },
        n = new s.Parser(t, e);
        r.version = n.parseUShort(),
        r.xAvgCharWidth = n.parseShort(),
        r.usWeightClass = n.parseUShort(),
        r.usWidthClass = n.parseUShort(),
        r.fsType = n.parseUShort(),
        r.ySubscriptXSize = n.parseShort(),
        r.ySubscriptYSize = n.parseShort(),
        r.ySubscriptXOffset = n.parseShort(),
        r.ySubscriptYOffset = n.parseShort(),
        r.ySuperscriptXSize = n.parseShort(),
        r.ySuperscriptYSize = n.parseShort(),
        r.ySuperscriptXOffset = n.parseShort(),
        r.ySuperscriptYOffset = n.parseShort(),
        r.yStrikeoutSize = n.parseShort(),
        r.yStrikeoutPosition = n.parseShort(),
        r.sFamilyClass = n.parseShort(),
        r.panose = [
        ];
        for (var i = 0; i < 10; i++) r.panose[i] = n.parseByte();
        return r.ulUnicodeRange1 = n.parseULong(),
        r.ulUnicodeRange2 = n.parseULong(),
        r.ulUnicodeRange3 = n.parseULong(),
        r.ulUnicodeRange4 = n.parseULong(),
        r.achVendID = String.fromCharCode(n.parseByte(), n.parseByte(), n.parseByte(), n.parseByte()),
        r.fsSelection = n.parseUShort(),
        r.usFirstCharIndex = n.parseUShort(),
        r.usLastCharIndex = n.parseUShort(),
        r.sTypoAscender = n.parseShort(),
        r.sTypoDescender = n.parseShort(),
        r.sTypoLineGap = n.parseShort(),
        r.usWinAscent = n.parseUShort(),
        r.usWinDescent = n.parseUShort(),
        r.version >= 1 && (r.ulCodePageRange1 = n.parseULong(), r.ulCodePageRange2 = n.parseULong()),
        r.version >= 2 && (r.sxHeight = n.parseShort(), r.sCapHeight = n.parseShort(), r.usDefaultChar = n.parseUShort(), r.usBreakChar = n.parseUShort(), r.usMaxContent = n.parseUShort()),
        r
      }
      function o(t) {
        return new a.Table('OS/2', [
          {
            name: 'version',
            type: 'USHORT',
            value: 3
          },
          {
            name: 'xAvgCharWidth',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'usWeightClass',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'usWidthClass',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'fsType',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'ySubscriptXSize',
            type: 'SHORT',
            value: 650
          },
          {
            name: 'ySubscriptYSize',
            type: 'SHORT',
            value: 699
          },
          {
            name: 'ySubscriptXOffset',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'ySubscriptYOffset',
            type: 'SHORT',
            value: 140
          },
          {
            name: 'ySuperscriptXSize',
            type: 'SHORT',
            value: 650
          },
          {
            name: 'ySuperscriptYSize',
            type: 'SHORT',
            value: 699
          },
          {
            name: 'ySuperscriptXOffset',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'ySuperscriptYOffset',
            type: 'SHORT',
            value: 479
          },
          {
            name: 'yStrikeoutSize',
            type: 'SHORT',
            value: 49
          },
          {
            name: 'yStrikeoutPosition',
            type: 'SHORT',
            value: 258
          },
          {
            name: 'sFamilyClass',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'bFamilyType',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'bSerifStyle',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'bWeight',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'bProportion',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'bContrast',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'bStrokeVariation',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'bArmStyle',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'bLetterform',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'bMidline',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'bXHeight',
            type: 'BYTE',
            value: 0
          },
          {
            name: 'ulUnicodeRange1',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'ulUnicodeRange2',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'ulUnicodeRange3',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'ulUnicodeRange4',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'achVendID',
            type: 'CHARARRAY',
            value: 'XXXX'
          },
          {
            name: 'fsSelection',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'usFirstCharIndex',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'usLastCharIndex',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'sTypoAscender',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'sTypoDescender',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'sTypoLineGap',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'usWinAscent',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'usWinDescent',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'ulCodePageRange1',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'ulCodePageRange2',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'sxHeight',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'sCapHeight',
            type: 'SHORT',
            value: 0
          },
          {
            name: 'usDefaultChar',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'usBreakChar',
            type: 'USHORT',
            value: 0
          },
          {
            name: 'usMaxContext',
            type: 'USHORT',
            value: 0
          }
        ], t)
      }
      var s = t('../parse'),
      a = t('../table'),
      l = [
        {
          begin: 0,
          end: 127
        },
        {
          begin: 128,
          end: 255
        },
        {
          begin: 256,
          end: 383
        },
        {
          begin: 384,
          end: 591
        },
        {
          begin: 592,
          end: 687
        },
        {
          begin: 688,
          end: 767
        },
        {
          begin: 768,
          end: 879
        },
        {
          begin: 880,
          end: 1023
        },
        {
          begin: 11392,
          end: 11519
        },
        {
          begin: 1024,
          end: 1279
        },
        {
          begin: 1328,
          end: 1423
        },
        {
          begin: 1424,
          end: 1535
        },
        {
          begin: 42240,
          end: 42559
        },
        {
          begin: 1536,
          end: 1791
        },
        {
          begin: 1984,
          end: 2047
        },
        {
          begin: 2304,
          end: 2431
        },
        {
          begin: 2432,
          end: 2559
        },
        {
          begin: 2560,
          end: 2687
        },
        {
          begin: 2688,
          end: 2815
        },
        {
          begin: 2816,
          end: 2943
        },
        {
          begin: 2944,
          end: 3071
        },
        {
          begin: 3072,
          end: 3199
        },
        {
          begin: 3200,
          end: 3327
        },
        {
          begin: 3328,
          end: 3455
        },
        {
          begin: 3584,
          end: 3711
        },
        {
          begin: 3712,
          end: 3839
        },
        {
          begin: 4256,
          end: 4351
        },
        {
          begin: 6912,
          end: 7039
        },
        {
          begin: 4352,
          end: 4607
        },
        {
          begin: 7680,
          end: 7935
        },
        {
          begin: 7936,
          end: 8191
        },
        {
          begin: 8192,
          end: 8303
        },
        {
          begin: 8304,
          end: 8351
        },
        {
          begin: 8352,
          end: 8399
        },
        {
          begin: 8400,
          end: 8447
        },
        {
          begin: 8448,
          end: 8527
        },
        {
          begin: 8528,
          end: 8591
        },
        {
          begin: 8592,
          end: 8703
        },
        {
          begin: 8704,
          end: 8959
        },
        {
          begin: 8960,
          end: 9215
        },
        {
          begin: 9216,
          end: 9279
        },
        {
          begin: 9280,
          end: 9311
        },
        {
          begin: 9312,
          end: 9471
        },
        {
          begin: 9472,
          end: 9599
        },
        {
          begin: 9600,
          end: 9631
        },
        {
          begin: 9632,
          end: 9727
        },
        {
          begin: 9728,
          end: 9983
        },
        {
          begin: 9984,
          end: 10175
        },
        {
          begin: 12288,
          end: 12351
        },
        {
          begin: 12352,
          end: 12447
        },
        {
          begin: 12448,
          end: 12543
        },
        {
          begin: 12544,
          end: 12591
        },
        {
          begin: 12592,
          end: 12687
        },
        {
          begin: 43072,
          end: 43135
        },
        {
          begin: 12800,
          end: 13055
        },
        {
          begin: 13056,
          end: 13311
        },
        {
          begin: 44032,
          end: 55215
        },
        {
          begin: 55296,
          end: 57343
        },
        {
          begin: 67840,
          end: 67871
        },
        {
          begin: 19968,
          end: 40959
        },
        {
          begin: 57344,
          end: 63743
        },
        {
          begin: 12736,
          end: 12783
        },
        {
          begin: 64256,
          end: 64335
        },
        {
          begin: 64336,
          end: 65023
        },
        {
          begin: 65056,
          end: 65071
        },
        {
          begin: 65040,
          end: 65055
        },
        {
          begin: 65104,
          end: 65135
        },
        {
          begin: 65136,
          end: 65279
        },
        {
          begin: 65280,
          end: 65519
        },
        {
          begin: 65520,
          end: 65535
        },
        {
          begin: 3840,
          end: 4095
        },
        {
          begin: 1792,
          end: 1871
        },
        {
          begin: 1920,
          end: 1983
        },
        {
          begin: 3456,
          end: 3583
        },
        {
          begin: 4096,
          end: 4255
        },
        {
          begin: 4608,
          end: 4991
        },
        {
          begin: 5024,
          end: 5119
        },
        {
          begin: 5120,
          end: 5759
        },
        {
          begin: 5760,
          end: 5791
        },
        {
          begin: 5792,
          end: 5887
        },
        {
          begin: 6016,
          end: 6143
        },
        {
          begin: 6144,
          end: 6319
        },
        {
          begin: 10240,
          end: 10495
        },
        {
          begin: 40960,
          end: 42127
        },
        {
          begin: 5888,
          end: 5919
        },
        {
          begin: 66304,
          end: 66351
        },
        {
          begin: 66352,
          end: 66383
        },
        {
          begin: 66560,
          end: 66639
        },
        {
          begin: 118784,
          end: 119039
        },
        {
          begin: 119808,
          end: 120831
        },
        {
          begin: 1044480,
          end: 1048573
        },
        {
          begin: 65024,
          end: 65039
        },
        {
          begin: 917504,
          end: 917631
        },
        {
          begin: 6400,
          end: 6479
        },
        {
          begin: 6480,
          end: 6527
        },
        {
          begin: 6528,
          end: 6623
        },
        {
          begin: 6656,
          end: 6687
        },
        {
          begin: 11264,
          end: 11359
        },
        {
          begin: 11568,
          end: 11647
        },
        {
          begin: 19904,
          end: 19967
        },
        {
          begin: 43008,
          end: 43055
        },
        {
          begin: 65536,
          end: 65663
        },
        {
          begin: 65856,
          end: 65935
        },
        {
          begin: 66432,
          end: 66463
        },
        {
          begin: 66464,
          end: 66527
        },
        {
          begin: 66640,
          end: 66687
        },
        {
          begin: 66688,
          end: 66735
        },
        {
          begin: 67584,
          end: 67647
        },
        {
          begin: 68096,
          end: 68191
        },
        {
          begin: 119552,
          end: 119647
        },
        {
          begin: 73728,
          end: 74751
        },
        {
          begin: 119648,
          end: 119679
        },
        {
          begin: 7040,
          end: 7103
        },
        {
          begin: 7168,
          end: 7247
        },
        {
          begin: 7248,
          end: 7295
        },
        {
          begin: 43136,
          end: 43231
        },
        {
          begin: 43264,
          end: 43311
        },
        {
          begin: 43312,
          end: 43359
        },
        {
          begin: 43520,
          end: 43615
        },
        {
          begin: 65936,
          end: 65999
        },
        {
          begin: 66000,
          end: 66047
        },
        {
          begin: 66208,
          end: 66271
        },
        {
          begin: 127024,
          end: 127135
        }
      ];
      r.unicodeRanges = l,
      r.getUnicodeRange = n,
      r.parse = i,
      r.make = o
    },
    {
      '../parse': 9,
      '../table': 11
    }
  ],
  24: [
    function (t, e, r) {
      'use strict';
      function n(t, e) {
        var r,
        n = {
        },
        i = new s.Parser(t, e);
        switch (n.version = i.parseVersion(), n.italicAngle = i.parseFixed(), n.underlinePosition = i.parseShort(), n.underlineThickness = i.parseShort(), n.isFixedPitch = i.parseULong(), n.minMemType42 = i.parseULong(), n.maxMemType42 = i.parseULong(), n.minMemType1 = i.parseULong(), n.maxMemType1 = i.parseULong(), n.version) {
          case 1:
            n.names = o.standardNames.slice();
            break;
          case 2:
            for (n.numberOfGlyphs = i.parseUShort(), n.glyphNameIndex = new Array(n.numberOfGlyphs), r = 0; r < n.numberOfGlyphs; r++) n.glyphNameIndex[r] = i.parseUShort();
            for (n.names = [
            ], r = 0; r < n.numberOfGlyphs; r++) if (n.glyphNameIndex[r] >= o.standardNames.length) {
              var a = i.parseChar();
              n.names.push(i.parseString(a))
            }
            break;
          case 2.5:
            for (n.numberOfGlyphs = i.parseUShort(), n.offset = new Array(n.numberOfGlyphs), r = 0; r < n.numberOfGlyphs; r++) n.offset[r] = i.parseChar()
        }
        return n
      }
      function i() {
        return new a.Table('post', [
          {
            name: 'version',
            type: 'FIXED',
            value: 196608
          },
          {
            name: 'italicAngle',
            type: 'FIXED',
            value: 0
          },
          {
            name: 'underlinePosition',
            type: 'FWORD',
            value: 0
          },
          {
            name: 'underlineThickness',
            type: 'FWORD',
            value: 0
          },
          {
            name: 'isFixedPitch',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'minMemType42',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'maxMemType42',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'minMemType1',
            type: 'ULONG',
            value: 0
          },
          {
            name: 'maxMemType1',
            type: 'ULONG',
            value: 0
          }
        ])
      }
      var o = t('../encoding'),
      s = t('../parse'),
      a = t('../table');
      r.parse = n,
      r.make = i
    },
    {
      '../encoding': 4,
      '../parse': 9,
      '../table': 11
    }
    ],
    25: [
      function (t, e, r) {
        'use strict';
        function n(t) {
          return Math.log(t) / Math.log(2) | 0
        }
        function i(t) {
          for (; t.length % 4 !== 0; ) t.push(0);
          for (var e = 0, r = 0; r < t.length; r += 4) e += (t[r] << 24) + (t[r + 1] << 16) + (t[r + 2] << 8) + t[r + 3];
          return e %= Math.pow(2, 32)
        }
        function o(t, e, r, n) {
          return new c.Table('Table Record', [
            {
              name: 'tag',
              type: 'TAG',
              value: void 0 !== t ? t : ''
            },
            {
              name: 'checkSum',
              type: 'ULONG',
              value: void 0 !== e ? e : 0
            },
            {
              name: 'offset',
              type: 'ULONG',
              value: void 0 !== r ? r : 0
            },
            {
              name: 'length',
              type: 'ULONG',
              value: void 0 !== n ? n : 0
            }
          ])
        }
        function s(t) {
          var e = new c.Table('sfnt', [
            {
              name: 'version',
              type: 'TAG',
              value: 'OTTO'
            },
            {
              name: 'numTables',
              type: 'USHORT',
              value: 0
            },
            {
              name: 'searchRange',
              type: 'USHORT',
              value: 0
            },
            {
              name: 'entrySelector',
              type: 'USHORT',
              value: 0
            },
            {
              name: 'rangeShift',
              type: 'USHORT',
              value: 0
            }
          ]);
          e.tables = t,
          e.numTables = t.length;
          var r = Math.pow(2, n(e.numTables));
          e.searchRange = 16 * r,
          e.entrySelector = n(r),
          e.rangeShift = 16 * e.numTables - e.searchRange;
          for (var s = [
          ], a = [
          ], l = e.sizeOf() + o().sizeOf() * e.numTables; l % 4 !== 0; ) l += 1,
          a.push({
            name: 'padding',
            type: 'BYTE',
            value: 0
          });
          for (var u = 0; u < t.length; u += 1) {
            var p = t[u];
            h.argument(4 === p.tableName.length, 'Table name' + p.tableName + ' is invalid.');
            var f = p.sizeOf(),
            d = o(p.tableName, i(p.encode()), l, f);
            for (s.push({
              name: d.tag + ' Table Record',
              type: 'TABLE',
              value: d
            }), a.push({
              name: p.tableName + ' table',
              type: 'TABLE',
              value: p
            }), l += f, h.argument(!isNaN(l), 'Something went wrong calculating the offset.'); l % 4 !== 0; ) l += 1,
            a.push({
              name: 'padding',
              type: 'BYTE',
              value: 0
            })
          }
          return s.sort(function (t, e) {
            return t.value.tag > e.value.tag ? 1 : - 1
          }),
          e.fields = e.fields.concat(s),
          e.fields = e.fields.concat(a),
          e
        }
        function a(t, e, r) {
          for (var n = 0; n < e.length; n += 1) {
            var i = t.charToGlyphIndex(e[n]);
            if (i > 0) {
              var o = t.glyphs.get(i);
              return o.getMetrics()
            }
          }
          return r
        }
        function l(t) {
          for (var e = 0, r = 0; r < t.length; r += 1) e += t[r];
          return e / t.length
        }
        function u(t) {
          for (var e, r = [
          ], n = [
          ], o = [
          ], u = [
          ], h = [
          ], c = [
          ], b = [
          ], w = 0, T = 0, S = 0, C = 0, M = 0, R = 0; R < t.glyphs.length; R += 1) {
            var k = t.glyphs.get(R),
            P = 0 | k.unicode;
            (e > P || null === e) && (e = P),
            w < P && (w = P);
            var D = _.getUnicodeRange(P);
            if (D < 32) T |= 1 << D;
             else if (D < 64) S |= 1 << D - 32;
             else if (D < 96) C |= 1 << D - 64;
             else {
              if (!(D < 123)) throw new Error('Unicode ranges bits > 123 are reserved for internal usage');
              M |= 1 << D - 96
            }
            if ('.notdef' !== k.name) {
              var A = k.getMetrics();
              r.push(A.xMin),
              n.push(A.yMin),
              o.push(A.xMax),
              u.push(A.yMax),
              c.push(A.leftSideBearing),
              b.push(A.rightSideBearing),
              h.push(k.advanceWidth)
            }
          }
          var E = {
            xMin: Math.min.apply(null, r),
            yMin: Math.min.apply(null, n),
            xMax: Math.max.apply(null, o),
            yMax: Math.max.apply(null, u),
            advanceWidthMax: Math.max.apply(null, h),
            advanceWidthAvg: l(h),
            minLeftSideBearing: Math.min.apply(null, c),
            maxLeftSideBearing: Math.max.apply(null, c),
            minRightSideBearing: Math.min.apply(null, b)
          };
          E.ascender = void 0 !== t.ascender ? t.ascender : E.yMax,
          E.descender = void 0 !== t.descender ? t.descender : E.yMin;
          var O = d.make({
            unitsPerEm: t.unitsPerEm,
            xMin: E.xMin,
            yMin: E.yMin,
            xMax: E.xMax,
            yMax: E.yMax
          }),
          N = m.make({
            ascender: E.ascender,
            descender: E.descender,
            advanceWidthMax: E.advanceWidthMax,
            minLeftSideBearing: E.minLeftSideBearing,
            minRightSideBearing: E.minRightSideBearing,
            xMaxExtent: E.maxLeftSideBearing + (E.xMax - E.xMin),
            numberOfHMetrics: t.glyphs.length
          }),
          I = y.make(t.glyphs.length),
          L = _.make({
            xAvgCharWidth: Math.round(E.advanceWidthAvg),
            usWeightClass: 500,
            usWidthClass: 5,
            usFirstCharIndex: e,
            usLastCharIndex: w,
            ulUnicodeRange1: T,
            ulUnicodeRange2: S,
            ulUnicodeRange3: C,
            ulUnicodeRange4: M,
            sTypoAscender: E.ascender,
            sTypoDescender: E.descender,
            sTypoLineGap: 0,
            usWinAscent: E.ascender,
            usWinDescent: - E.descender,
            sxHeight: a(t, 'xyvw', {
              yMax: 0
            }).yMax,
            sCapHeight: a(t, 'HIKLEFJMNTZBDPRAGOQSUVWXY', E).yMax,
            usBreakChar: t.hasChar(' ') ? 32 : 0
          }),
          F = g.make(t.glyphs),
          U = p.make(t.glyphs),
          B = t.familyName + ' ' + t.styleName,
          H = t.familyName.replace(/\s/g, '') + '-' + t.styleName,
          j = v.make({
            copyright: t.copyright,
            fontFamily: t.familyName,
            fontSubfamily: t.styleName,
            uniqueID: t.manufacturer + ':' + B,
            fullName: B,
            version: t.version,
            postScriptName: H,
            trademark: t.trademark,
            manufacturer: t.manufacturer,
            designer: t.designer,
            description: t.description,
            manufacturerURL: t.manufacturerURL,
            designerURL: t.designerURL,
            license: t.license,
            licenseURL: t.licenseURL,
            preferredFamily: t.familyName,
            preferredSubfamily: t.styleName
          }),
          Y = x.make(),
          G = f.make(t.glyphs, {
            version: t.version,
            fullName: B,
            familyName: t.familyName,
            weightName: t.styleName,
            postScriptName: H,
            unitsPerEm: t.unitsPerEm
          }),
          q = [
            O,
            N,
            I,
            L,
            j,
            U,
            Y,
            G,
            F
          ],
          W = s(q),
          z = W.encode(),
          V = i(z),
          X = W.fields,
          $ = !1;
          for (R = 0; R < X.length; R += 1) if ('head table' === X[R].name) {
            X[R].value.checkSumAdjustment = 2981146554 - V,
            $ = !0;
            break
          }
          if (!$) throw new Error('Could not find head table with checkSum to adjust.');
          return W
        }
        var h = t('../check'),
        c = t('../table'),
        p = t('./cmap'),
        f = t('./cff'),
        d = t('./head'),
        m = t('./hhea'),
        g = t('./hmtx'),
        y = t('./maxp'),
        v = t('./name'),
        _ = t('./os2'),
        x = t('./post');
        r.computeCheckSum = i,
        r.make = s,
        r.fontToTable = u
      },
      {
        '../check': 2,
        '../table': 11,
        './cff': 12,
        './cmap': 13,
        './head': 16,
        './hhea': 17,
        './hmtx': 18,
        './maxp': 21,
        './name': 22,
        './os2': 23,
        './post': 24
      }
    ],
    26: [
      function (t, e, r) {
        'use strict';
        function n(t) {
          return function () {
            return t
          }
        }
        var i = t('./check'),
        o = 32768,
        s = 2147483648,
        a = {
        },
        l = {
        },
        u = {
        };
        l.BYTE = function (t) {
          return i.argument(t >= 0 && t <= 255, 'Byte value should be between 0 and 255.'),
          [
            t
          ]
        },
        u.BYTE = n(1),
        l.CHAR = function (t) {
          return [t.charCodeAt(0)]
        },
        u.BYTE = n(1),
        l.CHARARRAY = function (t) {
          for (var e = [
          ], r = 0; r < t.length; r += 1) e.push(t.charCodeAt(r));
          return e
        },
        u.CHARARRAY = function (t) {
          return t.length
        },
        l.USHORT = function (t) {
          return [t >> 8 & 255,
          255 & t]
        },
        u.USHORT = n(2),
        l.SHORT = function (t) {
          return t >= o && (t = - (2 * o - t)),
          [
            t >> 8 & 255,
            255 & t
          ]
        },
        u.SHORT = n(2),
        l.UINT24 = function (t) {
          return [t >> 16 & 255,
          t >> 8 & 255,
          255 & t]
        },
        u.UINT24 = n(3),
        l.ULONG = function (t) {
          return [t >> 24 & 255,
          t >> 16 & 255,
          t >> 8 & 255,
          255 & t]
        },
        u.ULONG = n(4),
        l.LONG = function (t) {
          return t >= s && (t = - (2 * s - t)),
          [
            t >> 24 & 255,
            t >> 16 & 255,
            t >> 8 & 255,
            255 & t
          ]
        },
        u.LONG = n(4),
        l.FIXED = l.ULONG,
        u.FIXED = u.ULONG,
        l.FWORD = l.SHORT,
        u.FWORD = u.SHORT,
        l.UFWORD = l.USHORT,
        u.UFWORD = u.USHORT,
        l.LONGDATETIME = function () {
          return [0,
          0,
          0,
          0,
          0,
          0,
          0,
          0]
        },
        u.LONGDATETIME = n(8),
        l.TAG = function (t) {
          return i.argument(4 === t.length, 'Tag should be exactly 4 ASCII characters.'),
          [
            t.charCodeAt(0),
            t.charCodeAt(1),
            t.charCodeAt(2),
            t.charCodeAt(3)
          ]
        },
        u.TAG = n(4),
        l.Card8 = l.BYTE,
        u.Card8 = u.BYTE,
        l.Card16 = l.USHORT,
        u.Card16 = u.USHORT,
        l.OffSize = l.BYTE,
        u.OffSize = u.BYTE,
        l.SID = l.USHORT,
        u.SID = u.USHORT,
        l.NUMBER = function (t) {
          return t >= - 107 && t <= 107 ? [
            t + 139
          ] : t >= 108 && t <= 1131 ? (t -= 108, [
            (t >> 8) + 247,
            255 & t
          ])  : t >= - 1131 && t <= - 108 ? (t = - t - 108, [
            (t >> 8) + 251,
            255 & t
          ])  : t >= - 32768 && t <= 32767 ? l.NUMBER16(t)  : l.NUMBER32(t)
        },
        u.NUMBER = function (t) {
          return l.NUMBER(t).length
        },
        l.NUMBER16 = function (t) {
          return [28,
          t >> 8 & 255,
          255 & t]
        },
        u.NUMBER16 = n(2),
        l.NUMBER32 = function (t) {
          return [29,
          t >> 24 & 255,
          t >> 16 & 255,
          t >> 8 & 255,
          255 & t]
        },
        u.NUMBER32 = n(4),
        l.REAL = function (t) {
          var e = t.toString(),
          r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);
          if (r) {
            var n = parseFloat('1e' + ((r[2] ? + r[2] : 0) + r[1].length));
            e = (Math.round(t * n) / n).toString()
          }
          var i,
          o,
          s = '';
          for (i = 0, o = e.length; i < o; i += 1) {
            var a = e[i];
            s += 'e' === a ? '-' === e[++i] ? 'c' : 'b' : '.' === a ? 'a' : '-' === a ? 'e' : a
          }
          s += 1 & s.length ? 'f' : 'ff';
          var l = [
            30
          ];
          for (i = 0, o = s.length; i < o; i += 2) l.push(parseInt(s.substr(i, 2), 16));
          return l
        },
        u.REAL = function (t) {
          return l.REAL(t).length
        },
        l.NAME = l.CHARARRAY,
        u.NAME = u.CHARARRAY,
        l.STRING = l.CHARARRAY,
        u.STRING = u.CHARARRAY,
        l.UTF16 = function (t) {
          for (var e = [
          ], r = 0; r < t.length; r += 1) e.push(0),
          e.push(t.charCodeAt(r));
          return e
        },
        u.UTF16 = function (t) {
          return 2 * t.length
        },
        l.INDEX = function (t) {
          var e,
          r = 1,
          n = [
            r
          ],
          i = [
          ],
          o = 0;
          for (e = 0; e < t.length; e += 1) {
            var s = l.OBJECT(t[e]);
            Array.prototype.push.apply(i, s),
            o += s.length,
            r += s.length,
            n.push(r)
          }
          if (0 === i.length) return [0,
          0];
          var a = [
          ],
          u = 1 + Math.floor(Math.log(o) / Math.log(2)) / 8 | 0,
          h = [
            void 0,
            l.BYTE,
            l.USHORT,
            l.UINT24,
            l.ULONG
          ][u];
          for (e = 0; e < n.length; e += 1) {
            var c = h(n[e]);
            Array.prototype.push.apply(a, c)
          }
          return Array.prototype.concat(l.Card16(t.length), l.OffSize(u), a, i)
        },
        u.INDEX = function (t) {
          return l.INDEX(t).length
        },
        l.DICT = function (t) {
          for (var e = [
          ], r = Object.keys(t), n = r.length, i = 0; i < n; i += 1) {
            var o = parseInt(r[i], 0),
            s = t[o];
            e = e.concat(l.OPERAND(s.value, s.type)),
            e = e.concat(l.OPERATOR(o))
          }
          return e
        },
        u.DICT = function (t) {
          return l.DICT(t).length
        },
        l.OPERATOR = function (t) {
          return t < 1200 ? [
            t
          ] : [
            12,
            t - 1200
          ]
        },
        l.OPERAND = function (t, e) {
          var r = [
          ];
          if (Array.isArray(e)) for (var n = 0; n < e.length; n += 1) i.argument(t.length === e.length, 'Not enough arguments given for type' + e),
          r = r.concat(l.OPERAND(t[n], e[n]));
           else if ('SID' === e) r = r.concat(l.NUMBER(t));
           else if ('offset' === e) r = r.concat(l.NUMBER32(t));
           else if ('number' === e) r = r.concat(l.NUMBER(t));
           else {
            if ('real' !== e) throw new Error('Unknown operand type ' + e);
            r = r.concat(l.REAL(t))
          }
          return r
        },
        l.OP = l.BYTE,
        u.OP = u.BYTE;
        var h = 'function' == typeof WeakMap && new WeakMap;
        l.CHARSTRING = function (t) {
          if (h && h.has(t)) return h.get(t);
          for (var e = [
          ], r = t.length, n = 0; n < r; n += 1) {
            var i = t[n];
            e = e.concat(l[i.type](i.value))
          }
          return h && h.set(t, e),
          e
        },
        u.CHARSTRING = function (t) {
          return l.CHARSTRING(t).length
        },
        l.OBJECT = function (t) {
          var e = l[t.type];
          return i.argument(void 0 !== e, 'No encoding function for type ' + t.type),
          e(t.value)
        },
        l.TABLE = function (t) {
          for (var e = [
          ], r = t.fields.length, n = 0; n < r; n += 1) {
            var o = t.fields[n],
            s = l[o.type];
            i.argument(void 0 !== s, 'No encoding function for field type ' + o.type);
            var a = t[o.name];
            void 0 === a && (a = o.value);
            var u = s(a);
            e = e.concat(u)
          }
          return e
        },
        l.LITERAL = function (t) {
          return t
        },
        u.LITERAL = function (t) {
          return t.length
        },
        r.decode = a,
        r.encode = l,
        r.sizeOf = u
      },
      {
        './check': 2
      }
    ],
    27: [
      function (_dereq_, module, exports) {
        !function (t, e, r) {
          'undefined' != typeof module && module.exports ? module.exports = r()  : 'function' == typeof define && define.amd ? define(r)  : e[t] = r()
        }('reqwest', this, function () {
          function succeed(t) {
            var e = protocolRe.exec(t.url);
            return e = e && e[1] || window.location.protocol,
            httpsRe.test(e) ? twoHundo.test(t.request.status)  : !!t.request.response
          }
          function handleReadyState(t, e, r) {
            return function () {
              return t._aborted ? r(t.request)  : t._timedOut ? r(t.request, 'Request is aborted: timeout')  : void (t.request && 4 == t.request[readyState] && (t.request.onreadystatechange = noop, succeed(t) ? e(t.request)  : r(t.request)))
            }
          }
          function setHeaders(t, e) {
            var r,
            n = e.headers || {
            };
            n.Accept = n.Accept || defaultHeaders.accept[e.type] || defaultHeaders.accept['*'];
            var i = 'function' == typeof FormData && e.data instanceof FormData;
            e.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith),
            n[contentType] || i || (n[contentType] = e.contentType || defaultHeaders.contentType);
            for (r in n) n.hasOwnProperty(r) && 'setRequestHeader' in t && t.setRequestHeader(r, n[r])
          }
          function setCredentials(t, e) {
            'undefined' != typeof e.withCredentials && 'undefined' != typeof t.withCredentials && (t.withCredentials = !!e.withCredentials)
          }
          function generalCallback(t) {
            lastValue = t
          }
          function urlappend(t, e) {
            return t + (/\?/.test(t) ? '&' : '?') + e
          }
          function handleJsonp(t, e, r, n) {
            var i = uniqid++,
            o = t.jsonpCallback || 'callback',
            s = t.jsonpCallbackName || reqwest.getcallbackPrefix(i),
            a = new RegExp('((^|\\?|&)' + o + ')=([^&]+)'),
            l = n.match(a),
            u = doc.createElement('script'),
            h = 0,
            c = navigator.userAgent.indexOf('MSIE 10.0') !== - 1;
            return l ? '?' === l[3] ? n = n.replace(a, '$1=' + s)  : s = l[3] : n = urlappend(n, o + '=' + s),
            win[s] = generalCallback,
            u.type = 'text/javascript',
            u.src = n,
            u.async = !0,
            'undefined' == typeof u.onreadystatechange || c || (u.htmlFor = u.id = '_reqwest_' + i),
            u.onload = u.onreadystatechange = function () {
              return !(u[readyState] && 'complete' !== u[readyState] && 'loaded' !== u[readyState] || h) && (u.onload = u.onreadystatechange = null, u.onclick && u.onclick(), e(lastValue), lastValue = void 0, head.removeChild(u), void (h = 1))
            },
            head.appendChild(u),
            {
              abort: function () {
                u.onload = u.onreadystatechange = null,
                r({
                }, 'Request is aborted: timeout', {
                }),
                lastValue = void 0,
                head.removeChild(u),
                h = 1
              }
            }
          }
          function getRequest(t, e) {
            var r,
            n = this.o,
            i = (n.method || 'GET').toUpperCase(),
            o = 'string' == typeof n ? n : n.url,
            s = n.processData !== !1 && n.data && 'string' != typeof n.data ? reqwest.toQueryString(n.data)  : n.data || null,
            a = !1;
            return 'jsonp' != n.type && 'GET' != i || !s || (o = urlappend(o, s), s = null),
            'jsonp' == n.type ? handleJsonp(n, t, e, o)  : (r = n.xhr && n.xhr(n) || xhr(n), r.open(i, o, n.async !== !1), setHeaders(r, n), setCredentials(r, n), win[xDomainRequest] && r instanceof win[xDomainRequest] ? (r.onload = t, r.onerror = e, r.onprogress = function () {
            }, a = !0)  : r.onreadystatechange = handleReadyState(this, t, e), n.before && n.before(r), a ? setTimeout(function () {
              r.send(s)
            }, 200)  : r.send(s), r)
          }
          function Reqwest(t, e) {
            this.o = t,
            this.fn = e,
            init.apply(this, arguments)
          }
          function setType(t) {
            return t.match('json') ? 'json' : t.match('javascript') ? 'js' : t.match('text') ? 'html' : t.match('xml') ? 'xml' : void 0
          }
          function init(o, fn) {
            function complete(t) {
              for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0; ) self._completeHandlers.shift() (t)
            }
            function success(resp) {
              var type = o.type || resp && setType(resp.getResponseHeader('Content-Type'));
              resp = 'jsonp' !== type ? self.request : resp;
              var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
              r = filteredResponse;
              try {
                resp.responseText = r
              } catch (t) {
              }
              if (r) switch (type) {
                case 'json':
                  try {
                    resp = win.JSON ? win.JSON.parse(r)  : eval('(' + r + ')')
                  } catch (t) {
                    return error(resp, 'Could not parse JSON in response', t)
                  }
                  break;
                case 'js':
                  resp = eval(r);
                  break;
                case 'html':
                  resp = r;
                  break;
                case 'xml':
                  resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
              }
              for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0; ) resp = self._fulfillmentHandlers.shift() (resp);
              complete(resp)
            }
            function timedOut() {
              self._timedOut = !0,
              self.request.abort()
            }
            function error(t, e, r) {
              for (t = self.request, self._responseArgs.resp = t, self._responseArgs.msg = e, self._responseArgs.t = r, self._erred = !0; self._errorHandlers.length > 0; ) self._errorHandlers.shift() (t, e, r);
              complete(t)
            }
            this.url = 'string' == typeof o ? o : o.url,
            this.timeout = null,
            this._fulfilled = !1,
            this._successHandler = function () {
            },
            this._fulfillmentHandlers = [
            ],
            this._errorHandlers = [
            ],
            this._completeHandlers = [
            ],
            this._erred = !1,
            this._responseArgs = {
            };
            var self = this;
            fn = fn || function () {
            },
            o.timeout && (this.timeout = setTimeout(function () {
              timedOut()
            }, o.timeout)),
            o.success && (this._successHandler = function () {
              o.success.apply(o, arguments)
            }),
            o.error && this._errorHandlers.push(function () {
              o.error.apply(o, arguments)
            }),
            o.complete && this._completeHandlers.push(function () {
              o.complete.apply(o, arguments)
            }),
            this.request = getRequest.call(this, success, error)
          }
          function reqwest(t, e) {
            return new Reqwest(t, e)
          }
          function normalize(t) {
            return t ? t.replace(/\r?\n/g, '\r\n')  : ''
          }
          function serial(t, e) {
            var r,
            n,
            i,
            o,
            s = t.name,
            a = t.tagName.toLowerCase(),
            l = function (t) {
              t && !t.disabled && e(s, normalize(t.attributes.value && t.attributes.value.specified ? t.value : t.text))
            };
            if (!t.disabled && s) switch (a) {
              case 'input':
                /reset|button|image|file/i.test(t.type) || (r = /checkbox/i.test(t.type), n = /radio/i.test(t.type), i = t.value, (!(r || n) || t.checked) && e(s, normalize(r && '' === i ? 'on' : i)));
                break;
              case 'textarea':
                e(s, normalize(t.value));
                break;
              case 'select':
                if ('select-one' === t.type.toLowerCase()) l(t.selectedIndex >= 0 ? t.options[t.selectedIndex] : null);
                 else for (o = 0; t.length && o < t.length; o++) t.options[o].selected && l(t.options[o])
            }
          }
          function eachFormElement() {
            var t,
            e,
            r = this,
            n = function (t, e) {
              var n,
              i,
              o;
              for (n = 0; n < e.length; n++) for (o = t[byTag](e[n]), i = 0; i < o.length; i++) serial(o[i], r)
            };
            for (e = 0; e < arguments.length; e++) t = arguments[e],
            /input|select|textarea/i.test(t.tagName) && serial(t, r),
            n(t, [
              'input',
              'select',
              'textarea'
            ])
          }
          function serializeQueryString() {
            return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
          }
          function serializeHash() {
            var t = {
            };
            return eachFormElement.apply(function (e, r) {
              e in t ? (t[e] && !isArray(t[e]) && (t[e] = [
                t[e]
              ]), t[e].push(r))  : t[e] = r
            }, arguments),
            t
          }
          function buildParams(t, e, r, n) {
            var i,
            o,
            s,
            a = /\[\]$/;
            if (isArray(e)) for (o = 0; e && o < e.length; o++) s = e[o],
            r || a.test(t) ? n(t, s)  : buildParams(t + '[' + ('object' == typeof s ? o : '') + ']', s, r, n);
             else if (e && '[object Object]' === e.toString()) for (i in e) buildParams(t + '[' + i + ']', e[i], r, n);
             else n(t, e)
          }
          var win = window,
          doc = document,
          httpsRe = /^http/,
          protocolRe = /(^\w+):\/\//,
          twoHundo = /^(20\d|1223)$/,
          byTag = 'getElementsByTagName',
          readyState = 'readyState',
          contentType = 'Content-Type',
          requestedWith = 'X-Requested-With',
          head = doc[byTag]('head') [0],
          uniqid = 0,
          callbackPrefix = 'reqwest_' + + new Date,
          lastValue,
          xmlHttpRequest = 'XMLHttpRequest',
          xDomainRequest = 'XDomainRequest',
          noop = function () {
          },
          isArray = 'function' == typeof Array.isArray ? Array.isArray : function (t) {
            return t instanceof Array
          },
          defaultHeaders = {
            contentType: 'application/x-www-form-urlencoded',
            requestedWith: xmlHttpRequest,
            accept: {
              '*': 'text/javascript, text/html, application/xml, text/xml, */*',
              xml: 'application/xml, text/xml',
              html: 'text/html',
              text: 'text/plain',
              json: 'application/json, text/javascript',
              js: 'application/javascript, text/javascript'
            }
          },
          xhr = function (t) {
            if (t.crossOrigin === !0) {
              var e = win[xmlHttpRequest] ? new XMLHttpRequest : null;
              if (e && 'withCredentials' in e) return e;
              if (win[xDomainRequest]) return new XDomainRequest;
              throw new Error('Browser does not support cross-origin requests')
            }
            return win[xmlHttpRequest] ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP')
          },
          globalSetupOptions = {
            dataFilter: function (t) {
              return t
            }
          };
          return Reqwest.prototype = {
            abort: function () {
              this._aborted = !0,
              this.request.abort()
            },
            retry: function () {
              init.call(this, this.o, this.fn)
            },
            then: function (t, e) {
              return t = t || function () {
              },
              e = e || function () {
              },
              this._fulfilled ? this._responseArgs.resp = t(this._responseArgs.resp)  : this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)  : (this._fulfillmentHandlers.push(t), this._errorHandlers.push(e)),
              this
            },
            always: function (t) {
              return this._fulfilled || this._erred ? t(this._responseArgs.resp)  : this._completeHandlers.push(t),
              this
            },
            fail: function (t) {
              return this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)  : this._errorHandlers.push(t),
              this
            },
            catch : function (t) {
              return this.fail(t)
            }
          },
          reqwest.serializeArray = function () {
            var t = [
            ];
            return eachFormElement.apply(function (e, r) {
              t.push({
                name: e,
                value: r
              })
            }, arguments),
            t
          },
          reqwest.serialize = function () {
            if (0 === arguments.length) return '';
            var t,
            e,
            r = Array.prototype.slice.call(arguments, 0);
            return t = r.pop(),
            t && t.nodeType && r.push(t) && (t = null),
            t && (t = t.type),
            e = 'map' == t ? serializeHash : 'array' == t ? reqwest.serializeArray : serializeQueryString,
            e.apply(null, r)
          },
          reqwest.toQueryString = function (t, e) {
            var r,
            n,
            i = e || !1,
            o = [
            ],
            s = encodeURIComponent,
            a = function (t, e) {
              e = 'function' == typeof e ? e()  : null == e ? '' : e,
              o[o.length] = s(t) + '=' + s(e)
            };
            if (isArray(t)) for (n = 0; t && n < t.length; n++) a(t[n].name, t[n].value);
             else for (r in t) t.hasOwnProperty(r) && buildParams(r, t[r], i, a);
            return o.join('&').replace(/%20/g, '+')
          },
          reqwest.getcallbackPrefix = function () {
            return callbackPrefix
          },
          reqwest.compat = function (t, e) {
            return t && (t.type && (t.method = t.type) && delete t.type, t.dataType && (t.type = t.dataType), t.jsonpCallback && (t.jsonpCallbackName = t.jsonpCallback) && delete t.jsonpCallback, t.jsonp && (t.jsonpCallback = t.jsonp)),
            new Reqwest(t, e)
          },
          reqwest.ajaxSetup = function (t) {
            t = t || {
            };
            for (var e in t) globalSetupOptions[e] = t[e]
          },
          reqwest
        })
      }, {
      }
      ],
      28: [
        function (t, e, r) {
          'use strict';
          var n = t('../core/core');
          n.prototype.camera = function (t, e, r) {
            for (var n = new Array(arguments.length), i = 0; i < n.length; ++i) n[i] = arguments[i];
            this._validateParameters('camera', n, [
              'Number',
              'Number',
              'Number'
            ]),
            this._renderer.translate( - t, - e, - r)
          },
          n.prototype.perspective = function (t, e, r, i) {
            for (var o = new Array(arguments.length), s = 0; s < o.length; ++s) o[s] = arguments[s];
            this._validateParameters('perspective', o, [
              'Number',
              'Number',
              'Number',
              'Number'
            ]),
            this._renderer.uPMatrix = n.Matrix.identity(),
            this._renderer.uPMatrix.perspective(t, e, r, i),
            this._renderer._setCamera = !0
          },
          n.prototype.ortho = function (t, e, r, i, o, s) {
            for (var a = new Array(arguments.length), l = 0; l < a.length; ++l) a[l] = arguments[l];
            this._validateParameters('ortho', a, [
              'Number',
              'Number',
              'Number',
              'Number',
              'Number',
              'Number'
            ]),
            t /= this.width,
            e /= this.width,
            i /= this.height,
            r /= this.height,
            this._renderer.uPMatrix = n.Matrix.identity(),
            this._renderer.uPMatrix.ortho(t, e, r, i, o, s),
            this._renderer._setCamera = !0
          },
          e.exports = n
        },
        {
          '../core/core': 49
        }
      ],
      29: [
        function (t, e, r) {
          'use strict';
          var n = t('../core/core');
          n.prototype.orbitControl = function () {
            return this.mouseIsPressed && (this.rotateY((this.mouseX - this.width / 2) / (this.width / 2)), this.rotateX((this.mouseY - this.height / 2) / (this.width / 2))),
            this
          },
          e.exports = n
        },
        {
          '../core/core': 49
        }
      ],
      30: [
        function (t, e, r) {
          'use strict';
          var n = t('../core/core');
          n.prototype.ambientLight = function (t, e, r, n) {
            var i = this._renderer.GL,
            o = this._renderer._getShader('lightVert', 'lightTextureFrag');
            i.useProgram(o),
            o.uAmbientColor = i.getUniformLocation(o, 'uAmbientColor[' + this._renderer.ambientLightCount + ']');
            var s = this._renderer._pInst.color.apply(this._renderer._pInst, arguments),
            a = s._array;
            return i.uniform3f(o.uAmbientColor, a[0], a[1], a[2]),
            o.uMaterialColor = i.getUniformLocation(o, 'uMaterialColor'),
            i.uniform4f(o.uMaterialColor, 1, 1, 1, 1),
            this._renderer.ambientLightCount++,
            o.uAmbientLightCount = i.getUniformLocation(o, 'uAmbientLightCount'),
            i.uniform1i(o.uAmbientLightCount, this._renderer.ambientLightCount),
            this
          },
          n.prototype.directionalLight = function (t, e, r, n, i, o, s) {
            var a = this._renderer.GL,
            l = this._renderer._getShader('lightVert', 'lightTextureFrag');
            a.useProgram(l),
            l.uDirectionalColor = a.getUniformLocation(l, 'uDirectionalColor[' + this._renderer.directionalLightCount + ']');
            var u = this._renderer._pInst.color.apply(this._renderer._pInst, [
              t,
              e,
              r
            ]),
            h = u._array;
            a.uniform3f(l.uDirectionalColor, h[0], h[1], h[2]);
            var c,
            p,
            f;
            if ('number' == typeof arguments[arguments.length - 1]) c = arguments[arguments.length - 3],
            p = arguments[arguments.length - 2],
            f = arguments[arguments.length - 1];
             else try {
              c = arguments[arguments.length - 1].x,
              p = arguments[arguments.length - 1].y,
              f = arguments[arguments.length - 1].z
            } catch (t) {
              throw t
            }
            return l.uLightingDirection = a.getUniformLocation(l, 'uLightingDirection[' + this._renderer.directionalLightCount + ']'),
            a.uniform3f(l.uLightingDirection, c, p, f),
            l.uMaterialColor = a.getUniformLocation(l, 'uMaterialColor'),
            a.uniform4f(l.uMaterialColor, 1, 1, 1, 1),
            this._renderer.directionalLightCount++,
            l.uDirectionalLightCount = a.getUniformLocation(l, 'uDirectionalLightCount'),
            a.uniform1i(l.uDirectionalLightCount, this._renderer.directionalLightCount),
            this
          },
          n.prototype.pointLight = function (t, e, r, n, i, o, s) {
            var a = this._renderer.GL,
            l = this._renderer._getShader('lightVert', 'lightTextureFrag');
            a.useProgram(l),
            l.uPointLightColor = a.getUniformLocation(l, 'uPointLightColor[' + this._renderer.pointLightCount + ']');
            var u = this._renderer._pInst.color.apply(this._renderer._pInst, [
              t,
              e,
              r
            ]),
            h = u._array;
            a.uniform3f(l.uPointLightColor, h[0], h[1], h[2]);
            var c,
            p,
            f;
            if ('number' == typeof arguments[arguments.length - 1]) c = arguments[arguments.length - 3],
            p = arguments[arguments.length - 2],
            f = arguments[arguments.length - 1];
             else try {
              c = arguments[arguments.length - 1].x,
              p = arguments[arguments.length - 1].y,
              f = arguments[arguments.length - 1].z
            } catch (t) {
              throw t
            }
            return l.uPointLightLocation = a.getUniformLocation(l, 'uPointLightLocation[' + this._renderer.pointLightCount + ']'),
            a.uniform3f(l.uPointLightLocation, c, p, f),
            l.uMaterialColor = a.getUniformLocation(l, 'uMaterialColor'),
            a.uniform4f(l.uMaterialColor, 1, 1, 1, 1),
            this._renderer.pointLightCount++,
            l.uPointLightCount = a.getUniformLocation(l, 'uPointLightCount'),
            a.uniform1i(l.uPointLightCount, this._renderer.pointLightCount),
            this
          },
          e.exports = n
        },
        {
          '../core/core': 49
        }
      ],
      31: [
        function (t, e, r) {
          'use strict';
          function n(t, e) {
            for (var r = {
              v: [
              ],
              vt: [
              ],
              vn: [
              ]
            }, n = {
            }, o = 0; o < e.length; ++o) {
              var s = e[o].trim().split(/\b\s+/);
              if (s.length > 0) if ('v' === s[0] || 'vn' === s[0]) {
                var a = new i.Vector(parseFloat(s[1]), parseFloat(s[2]), parseFloat(s[3]));
                r[s[0]].push(a)
              } else if ('vt' === s[0]) {
                var l = [
                  parseFloat(s[1]),
                  parseFloat(s[2])
                ];
                r[s[0]].push(l)
              } else if ('f' === s[0]) for (var u = 3; u < s.length; ++u) {
                for (var h = [
                ], c = [
                  1,
                  u - 1,
                  u
                ], p = 0; p < c.length; ++p) {
                  var f = s[c[p]],
                  d = 0;
                  if (void 0 !== n[f]) d = n[f];
                   else {
                    for (var m = f.split('/'), g = 0; g < m.length; g++) m[g] = parseInt(m[g]) - 1;
                    d = n[f] = t.vertices.length,
                    t.vertices.push(r.v[m[0]].copy()),
                    r.vt[m[1]] ? t.uvs.push(r.vt[m[1]].slice())  : t.uvs.push([0,
                    0]),
                    r.vn[m[2]] && t.vertexNormals.push(r.vn[m[2]].copy())
                  }
                  h.push(d)
                }
                t.faces.push(h)
              }
            }
            return 0 === t.vertexNormals.length && t.computeNormals(),
            t
          }
          var i = t('../core/core');
          t('./p5.Geometry'),
          i.prototype.loadModel = function (t) {
            var e = new i.Geometry;
            return e.gid = t,
            this.loadStrings(t, function (t) {
              n(e, t)
            }.bind(this)),
            e
          },
          i.prototype.model = function (t) {
            t.vertices.length > 0 && (this._renderer.geometryInHash(t.gid) || this._renderer.createBuffers(t.gid, t), this._renderer.drawBuffers(t.gid))
          },
          e.exports = i
        },
        {
          '../core/core': 49,
          './p5.Geometry': 33
        }
      ],
      32: [
        function (t, e, r) {
          'use strict';
          function n(t) {
            return 0 === (t & t - 1)
          }
          var i = t('../core/core');
          i.prototype.normalMaterial = function () {
            return this._renderer._getShader('normalVert', 'normalFrag'),
            this
          },
          i.prototype.texture = function (t) {
            var e = this._renderer.GL,
            r = this._renderer._getShader('lightVert', 'lightTextureFrag');
            if (e.useProgram(r), t instanceof i.Image) {
              if (!t.isTexture) {
                var o = e.createTexture();
                t.createTexture(o),
                e.bindTexture(e.TEXTURE_2D, o),
                e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, 1),
                t._setProperty('isTexture', !0)
              }
              t.loadPixels();
              var s = new Uint8Array(t.pixels);
              e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t.width, t.height, 0, e.RGBA, e.UNSIGNED_BYTE, s)
            } else if (t instanceof i.MediaElement) {
              if (!t.loadedmetadata) return;
              e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.elt)
            }
            return n(t.width) && n(t.height) ? e.generateMipmap(e.TEXTURE_2D)  : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)),
            e.uniform1i(e.getUniformLocation(r, 'uSampler'), 0),
            e.uniform1i(e.getUniformLocation(r, 'isTexture'), !0),
            this
          },
          i.prototype.ambientMaterial = function (t, e, r, n) {
            var i = this._renderer.GL,
            o = this._renderer._getShader('lightVert', 'lightTextureFrag');
            i.useProgram(o),
            o.uMaterialColor = i.getUniformLocation(o, 'uMaterialColor');
            var s = this._renderer._applyColorBlend(t, e, r, n);
            return i.uniform4f(o.uMaterialColor, s[0], s[1], s[2], s[3]),
            o.uSpecular = i.getUniformLocation(o, 'uSpecular'),
            i.uniform1i(o.uSpecular, !1),
            i.uniform1i(i.getUniformLocation(o, 'isTexture'), !1),
            this
          },
          i.prototype.specularMaterial = function (t, e, r, n) {
            var i = this._renderer.GL,
            o = this._renderer._getShader('lightVert', 'lightTextureFrag');
            i.useProgram(o),
            i.uniform1i(i.getUniformLocation(o, 'isTexture'), !1),
            o.uMaterialColor = i.getUniformLocation(o, 'uMaterialColor');
            var s = this._renderer._applyColorBlend(t, e, r, n);
            return i.uniform4f(o.uMaterialColor, s[0], s[1], s[2], s[3]),
            o.uSpecular = i.getUniformLocation(o, 'uSpecular'),
            i.uniform1i(o.uSpecular, !0),
            this
          },
          i.Renderer3D.prototype._applyColorBlend = function (t, e, r, n) {
            var i = this.GL,
            o = this._pInst.color.apply(this._pInst, arguments),
            s = o._array;
            return s[s.length - 1] < 1 ? (i.depthMask(!1), i.enable(i.BLEND), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA))  : (i.depthMask(!0), i.disable(i.BLEND)),
            s
          },
          e.exports = i
        },
        {
          '../core/core': 49
        }
      ],
      33: [
        function (t, e, r) {
          'use strict';
          var n = t('../core/core');
          n.Geometry = function (t, e, r) {
            return this.vertices = [
            ],
            this.vertexNormals = [
            ],
            this.faces = [
            ],
            this.uvs = [
            ],
            this.detailX = void 0 !== t ? t : 1,
            this.detailY = void 0 !== e ? e : 1,
            r instanceof Function && r.call(this),
            this
          },
          n.Geometry.prototype.computeFaces = function () {
            for (var t, e, r, n, i = this.detailX + 1, o = 0; o < this.detailY; o++) for (var s = 0; s < this.detailX; s++) t = o * i + s,
            e = o * i + s + 1,
            r = (o + 1) * i + s + 1,
            n = (o + 1) * i + s,
            this.faces.push([t,
            e,
            n]),
            this.faces.push([n,
            e,
            r]);
            return this
          },
          n.Geometry.prototype._getFaceNormal = function (t, e) {
            var r = this.faces[t],
            i = this.vertices[r[e % 3]],
            o = this.vertices[r[(e + 1) % 3]],
            s = this.vertices[r[(e + 2) % 3]],
            a = n.Vector.cross(n.Vector.sub(o, i), n.Vector.sub(s, i)),
            l = n.Vector.mag(a) / (n.Vector.mag(n.Vector.sub(o, i)) * n.Vector.mag(n.Vector.sub(s, i)));
            return a = a.normalize(),
            a.mult(Math.asin(l))
          },
          n.Geometry.prototype.computeNormals = function () {
            for (var t = 0; t < this.vertices.length; t++) {
              for (var e = new n.Vector, r = 0; r < this.faces.length; r++) this.faces[r][0] !== t && this.faces[r][1] !== t && this.faces[r][2] !== t || (e = e.add(this._getFaceNormal(r, t)));
              e = e.normalize(),
              this.vertexNormals.push(e)
            }
          },
          n.Geometry.prototype.averageNormals = function () {
            for (var t = 0; t <= this.detailY; t++) {
              var e = this.detailX + 1,
              r = n.Vector.add(this.vertexNormals[t * e], this.vertexNormals[t * e + this.detailX]);
              r = n.Vector.div(r, 2),
              this.vertexNormals[t * e] = r,
              this.vertexNormals[t * e + this.detailX] = r
            }
            return this
          },
          n.Geometry.prototype.averagePoleNormals = function () {
            for (var t = new n.Vector(0, 0, 0), e = 0; e < this.detailX; e++) t.add(this.vertexNormals[e]);
            for (t = n.Vector.div(t, this.detailX), e = 0; e < this.detailX; e++) this.vertexNormals[e] = t;
            for (t = new n.Vector(0, 0, 0), e = this.vertices.length - 1; e > this.vertices.length - 1 - this.detailX; e--) t.add(this.vertexNormals[e]);
            for (t = n.Vector.div(t, this.detailX), e = this.vertices.length - 1; e > this.vertices.length - 1 - this.detailX; e--) this.vertexNormals[e] = t;
            return this
          },
          e.exports = n.Geometry
        },
        {
          '../core/core': 49
        }
      ],
      34: [
        function (t, e, r) {
          'use strict';
          var n = t('../core/core'),
          i = t('../math/polargeometry'),
          o = t('../core/constants'),
          s = 'undefined' != typeof Float32Array ? Float32Array : Array;
          n.Matrix = function () {
            for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
            return t[0] instanceof n ? (this.p5 = t[0], 'mat3' === t[1] ? this.mat3 = t[2] || new s([1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1])  : this.mat4 = t[1] || new s([1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1]))  : 'mat3' === t[0] ? this.mat3 = t[1] || new s([1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1])  : this.mat4 = t[0] || new s([1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1]),
            this
          },
          n.Matrix.prototype.set = function (t) {
            return t instanceof n.Matrix ? (this.mat4 = t.mat4, this)  : t instanceof s ? (this.mat4 = t, this)  : this
          },
          n.Matrix.prototype.get = function () {
            return new n.Matrix(this.mat4)
          },
          n.Matrix.prototype.copy = function () {
            var t = new n.Matrix;
            return t.mat4[0] = this.mat4[0],
            t.mat4[1] = this.mat4[1],
            t.mat4[2] = this.mat4[2],
            t.mat4[3] = this.mat4[3],
            t.mat4[4] = this.mat4[4],
            t.mat4[5] = this.mat4[5],
            t.mat4[6] = this.mat4[6],
            t.mat4[7] = this.mat4[7],
            t.mat4[8] = this.mat4[8],
            t.mat4[9] = this.mat4[9],
            t.mat4[10] = this.mat4[10],
            t.mat4[11] = this.mat4[11],
            t.mat4[12] = this.mat4[12],
            t.mat4[13] = this.mat4[13],
            t.mat4[14] = this.mat4[14],
            t.mat4[15] = this.mat4[15],
            t
          },
          n.Matrix.identity = function () {
            return new n.Matrix
          },
          n.Matrix.prototype.transpose = function (t) {
            var e,
            r,
            i,
            o,
            a,
            l;
            return t instanceof n.Matrix ? (e = t.mat4[1], r = t.mat4[2], i = t.mat4[3], o = t.mat4[6], a = t.mat4[7], l = t.mat4[11], this.mat4[0] = t.mat4[0], this.mat4[1] = t.mat4[4], this.mat4[2] = t.mat4[8], this.mat4[3] = t.mat4[12], this.mat4[4] = e, this.mat4[5] = t.mat4[5], this.mat4[6] = t.mat4[9], this.mat4[7] = t.mat4[13], this.mat4[8] = r, this.mat4[9] = o, this.mat4[10] = t.mat4[10], this.mat4[11] = t.mat4[14], this.mat4[12] = i, this.mat4[13] = a, this.mat4[14] = l, this.mat4[15] = t.mat4[15])  : t instanceof s && (e = t[1], r = t[2], i = t[3], o = t[6], a = t[7], l = t[11], this.mat4[0] = t[0], this.mat4[1] = t[4], this.mat4[2] = t[8], this.mat4[3] = t[12], this.mat4[4] = e, this.mat4[5] = t[5], this.mat4[6] = t[9], this.mat4[7] = t[13], this.mat4[8] = r, this.mat4[9] = o, this.mat4[10] = t[10], this.mat4[11] = t[14], this.mat4[12] = i, this.mat4[13] = a, this.mat4[14] = l, this.mat4[15] = t[15]),
            this
          },
          n.Matrix.prototype.invert = function (t) {
            var e,
            r,
            i,
            o,
            a,
            l,
            u,
            h,
            c,
            p,
            f,
            d,
            m,
            g,
            y,
            v;
            t instanceof n.Matrix ? (e = t.mat4[0], r = t.mat4[1], i = t.mat4[2], o = t.mat4[3], a = t.mat4[4], l = t.mat4[5], u = t.mat4[6], h = t.mat4[7], c = t.mat4[8], p = t.mat4[9], f = t.mat4[10], d = t.mat4[11], m = t.mat4[12], g = t.mat4[13], y = t.mat4[14], v = t.mat4[15])  : t instanceof s && (e = t[0], r = t[1], i = t[2], o = t[3], a = t[4], l = t[5], u = t[6], h = t[7], c = t[8], p = t[9], f = t[10], d = t[11], m = t[12], g = t[13], y = t[14], v = t[15]);
            var _ = e * l - r * a,
            x = e * u - i * a,
            b = e * h - o * a,
            w = r * u - i * l,
            T = r * h - o * l,
            S = i * h - o * u,
            C = c * g - p * m,
            M = c * y - f * m,
            R = c * v - d * m,
            k = p * y - f * g,
            P = p * v - d * g,
            D = f * v - d * y,
            A = _ * D - x * P + b * k + w * R - T * M + S * C;
            return A ? (A = 1 / A, this.mat4[0] = (l * D - u * P + h * k) * A, this.mat4[1] = (i * P - r * D - o * k) * A, this.mat4[2] = (g * S - y * T + v * w) * A, this.mat4[3] = (f * T - p * S - d * w) * A, this.mat4[4] = (u * R - a * D - h * M) * A, this.mat4[5] = (e * D - i * R + o * M) * A, this.mat4[6] = (y * b - m * S - v * x) * A, this.mat4[7] = (c * S - f * b + d * x) * A, this.mat4[8] = (a * P - l * R + h * C) * A, this.mat4[9] = (r * R - e * P - o * C) * A, this.mat4[10] = (m * T - g * b + v * _) * A, this.mat4[11] = (p * b - c * T - d * _) * A, this.mat4[12] = (l * M - a * k - u * C) * A, this.mat4[13] = (e * k - r * M + i * C) * A, this.mat4[14] = (g * x - m * w - y * _) * A, this.mat4[15] = (c * w - p * x + f * _) * A, this)  : null
          },
          n.Matrix.prototype.invert3x3 = function () {
            var t = this.mat3[0],
            e = this.mat3[1],
            r = this.mat3[2],
            n = this.mat3[3],
            i = this.mat3[4],
            o = this.mat3[5],
            s = this.mat3[6],
            a = this.mat3[7],
            l = this.mat3[8],
            u = l * i - o * a,
            h = - l * n + o * s,
            c = a * n - i * s,
            p = t * u + e * h + r * c;
            return p ? (p = 1 / p, this.mat3[0] = u * p, this.mat3[1] = ( - l * e + r * a) * p, this.mat3[2] = (o * e - r * i) * p, this.mat3[3] = h * p, this.mat3[4] = (l * t - r * s) * p, this.mat3[5] = ( - o * t + r * n) * p, this.mat3[6] = c * p, this.mat3[7] = ( - a * t + e * s) * p, this.mat3[8] = (i * t - e * n) * p, this)  : null
          },
          n.Matrix.prototype.transpose3x3 = function (t) {
            var e = t[1],
            r = t[2],
            n = t[5];
            return this.mat3[1] = t[3],
            this.mat3[2] = t[6],
            this.mat3[3] = e,
            this.mat3[5] = t[7],
            this.mat3[6] = r,
            this.mat3[7] = n,
            this
          },
          n.Matrix.prototype.inverseTranspose = function (t) {
            return void 0 === this.mat3 ? console.error('sorry, this function only works with mat3')  : (this.mat3[0] = t.mat4[0], this.mat3[1] = t.mat4[1], this.mat3[2] = t.mat4[2], this.mat3[3] = t.mat4[4], this.mat3[4] = t.mat4[5], this.mat3[5] = t.mat4[6], this.mat3[6] = t.mat4[8], this.mat3[7] = t.mat4[9], this.mat3[8] = t.mat4[10]),
            this.invert3x3().transpose3x3(this.mat3),
            this
          },
          n.Matrix.prototype.determinant = function () {
            var t = this.mat4[0] * this.mat4[5] - this.mat4[1] * this.mat4[4],
            e = this.mat4[0] * this.mat4[6] - this.mat4[2] * this.mat4[4],
            r = this.mat4[0] * this.mat4[7] - this.mat4[3] * this.mat4[4],
            n = this.mat4[1] * this.mat4[6] - this.mat4[2] * this.mat4[5],
            i = this.mat4[1] * this.mat4[7] - this.mat4[3] * this.mat4[5],
            o = this.mat4[2] * this.mat4[7] - this.mat4[3] * this.mat4[6],
            s = this.mat4[8] * this.mat4[13] - this.mat4[9] * this.mat4[12],
            a = this.mat4[8] * this.mat4[14] - this.mat4[10] * this.mat4[12],
            l = this.mat4[8] * this.mat4[15] - this.mat4[11] * this.mat4[12],
            u = this.mat4[9] * this.mat4[14] - this.mat4[10] * this.mat4[13],
            h = this.mat4[9] * this.mat4[15] - this.mat4[11] * this.mat4[13],
            c = this.mat4[10] * this.mat4[15] - this.mat4[11] * this.mat4[14];
            return t * c - e * h + r * u + n * l - i * a + o * s
          },
          n.Matrix.prototype.mult = function (t) {
            var e = new s(16),
            r = new s(16);
            t instanceof n.Matrix ? r = t.mat4 : t instanceof s && (r = t);
            var i = this.mat4[0],
            o = this.mat4[1],
            a = this.mat4[2],
            l = this.mat4[3];
            return e[0] = i * r[0] + o * r[4] + a * r[8] + l * r[12],
            e[1] = i * r[1] + o * r[5] + a * r[9] + l * r[13],
            e[2] = i * r[2] + o * r[6] + a * r[10] + l * r[14],
            e[3] = i * r[3] + o * r[7] + a * r[11] + l * r[15],
            i = this.mat4[4],
            o = this.mat4[5],
            a = this.mat4[6],
            l = this.mat4[7],
            e[4] = i * r[0] + o * r[4] + a * r[8] + l * r[12],
            e[5] = i * r[1] + o * r[5] + a * r[9] + l * r[13],
            e[6] = i * r[2] + o * r[6] + a * r[10] + l * r[14],
            e[7] = i * r[3] + o * r[7] + a * r[11] + l * r[15],
            i = this.mat4[8],
            o = this.mat4[9],
            a = this.mat4[10],
            l = this.mat4[11],
            e[8] = i * r[0] + o * r[4] + a * r[8] + l * r[12],
            e[9] = i * r[1] + o * r[5] + a * r[9] + l * r[13],
            e[10] = i * r[2] + o * r[6] + a * r[10] + l * r[14],
            e[11] = i * r[3] + o * r[7] + a * r[11] + l * r[15],
            i = this.mat4[12],
            o = this.mat4[13],
            a = this.mat4[14],
            l = this.mat4[15],
            e[12] = i * r[0] + o * r[4] + a * r[8] + l * r[12],
            e[13] = i * r[1] + o * r[5] + a * r[9] + l * r[13],
            e[14] = i * r[2] + o * r[6] + a * r[10] + l * r[14],
            e[15] = i * r[3] + o * r[7] + a * r[11] + l * r[15],
            this.mat4 = e,
            this
          },
          n.Matrix.prototype.scale = function () {
            for (var t, e, r, i = new Array(arguments.length), o = 0; o < i.length; o++) i[o] = arguments[o];
            i[0] instanceof n.Vector ? (t = i[0].x, e = i[0].y, r = i[0].z)  : i[0] instanceof Array && (t = i[0][0], e = i[0][1], r = i[0][2]);
            var a = new s(16);
            return a[0] = this.mat4[0] * t,
            a[1] = this.mat4[1] * t,
            a[2] = this.mat4[2] * t,
            a[3] = this.mat4[3] * t,
            a[4] = this.mat4[4] * e,
            a[5] = this.mat4[5] * e,
            a[6] = this.mat4[6] * e,
            a[7] = this.mat4[7] * e,
            a[8] = this.mat4[8] * r,
            a[9] = this.mat4[9] * r,
            a[10] = this.mat4[10] * r,
            a[11] = this.mat4[11] * r,
            a[12] = this.mat4[12],
            a[13] = this.mat4[13],
            a[14] = this.mat4[14],
            a[15] = this.mat4[15],
            this.mat4 = a,
            this
          },
          n.Matrix.prototype.rotate = function (t, e) {
            var r,
            s,
            a,
            l,
            u;
            this.p5 ? this.p5._angleMode === o.DEGREES && (l = i.degreesToRadians(t))  : l = t,
            e instanceof n.Vector ? (r = e.x, s = e.y, a = e.z)  : e instanceof Array && (r = e[0], s = e[1], a = e[2]),
            u = Math.sqrt(r * r + s * s + a * a),
            r *= 1 / u,
            s *= 1 / u,
            a *= 1 / u;
            var h = this.mat4[0],
            c = this.mat4[1],
            p = this.mat4[2],
            f = this.mat4[3],
            d = this.mat4[4],
            m = this.mat4[5],
            g = this.mat4[6],
            y = this.mat4[7],
            v = this.mat4[8],
            _ = this.mat4[9],
            x = this.mat4[10],
            b = this.mat4[11],
            w = Math.sin(l),
            T = Math.cos(l),
            S = 1 - T,
            C = r * r * S + T,
            M = s * r * S + a * w,
            R = a * r * S - s * w,
            k = r * s * S - a * w,
            P = s * s * S + T,
            D = a * s * S + r * w,
            A = r * a * S + s * w,
            E = s * a * S - r * w,
            O = a * a * S + T;
            return this.mat4[0] = h * C + d * M + v * R,
            this.mat4[1] = c * C + m * M + _ * R,
            this.mat4[2] = p * C + g * M + x * R,
            this.mat4[3] = f * C + y * M + b * R,
            this.mat4[4] = h * k + d * P + v * D,
            this.mat4[5] = c * k + m * P + _ * D,
            this.mat4[6] = p * k + g * P + x * D,
            this.mat4[7] = f * k + y * P + b * D,
            this.mat4[8] = h * A + d * E + v * O,
            this.mat4[9] = c * A + m * E + _ * O,
            this.mat4[10] = p * A + g * E + x * O,
            this.mat4[11] = f * A + y * E + b * O,
            this
          },
          n.Matrix.prototype.translate = function (t) {
            var e = t[0],
            r = t[1],
            n = t[2] || 0;
            this.mat4[12] = this.mat4[0] * e + this.mat4[4] * r + this.mat4[8] * n + this.mat4[12],
            this.mat4[13] = this.mat4[1] * e + this.mat4[5] * r + this.mat4[9] * n + this.mat4[13],
            this.mat4[14] = this.mat4[2] * e + this.mat4[6] * r + this.mat4[10] * n + this.mat4[14],
            this.mat4[15] = this.mat4[3] * e + this.mat4[7] * r + this.mat4[11] * n + this.mat4[15]
          },
          n.Matrix.prototype.rotateX = function (t) {
            this.rotate(t, [
              1,
              0,
              0
            ])
          },
          n.Matrix.prototype.rotateY = function (t) {
            this.rotate(t, [
              0,
              1,
              0
            ])
          },
          n.Matrix.prototype.rotateZ = function (t) {
            this.rotate(t, [
              0,
              0,
              1
            ])
          },
          n.Matrix.prototype.perspective = function (t, e, r, n) {
            var i = 1 / Math.tan(t / 2),
            o = 1 / (r - n);
            return this.mat4[0] = i / e,
            this.mat4[1] = 0,
            this.mat4[2] = 0,
            this.mat4[3] = 0,
            this.mat4[4] = 0,
            this.mat4[5] = i,
            this.mat4[6] = 0,
            this.mat4[7] = 0,
            this.mat4[8] = 0,
            this.mat4[9] = 0,
            this.mat4[10] = (n + r) * o,
            this.mat4[11] = - 1,
            this.mat4[12] = 0,
            this.mat4[13] = 0,
            this.mat4[14] = 2 * n * r * o,
            this.mat4[15] = 0,
            this
          },
          n.Matrix.prototype.ortho = function (t, e, r, n, i, o) {
            var s = 1 / (t - e),
            a = 1 / (r - n),
            l = 1 / (i - o);
            return this.mat4[0] = - 2 * s,
            this.mat4[1] = 0,
            this.mat4[2] = 0,
            this.mat4[3] = 0,
            this.mat4[4] = 0,
            this.mat4[5] = - 2 * a,
            this.mat4[6] = 0,
            this.mat4[7] = 0,
            this.mat4[8] = 0,
            this.mat4[9] = 0,
            this.mat4[10] = 2 * l,
            this.mat4[11] = 0,
            this.mat4[12] = (t + e) * s,
            this.mat4[13] = (n + r) * a,
            this.mat4[14] = (o + i) * l,
            this.mat4[15] = 1,
            this
          },
          e.exports = n.Matrix
        },
        {
          '../core/constants': 48,
          '../core/core': 49,
          '../math/polargeometry': 79
        }
      ],
      35: [
        function (t, e, r) {
          'use strict';
          var n = t('../core/core'),
          i = t('../core/constants');
          n.Renderer3D.prototype.beginShape = function (t) {
            return this.immediateMode.shapeMode = void 0 !== t ? t : i.LINE_STRIP,
            void 0 === this.immediateMode.vertexPositions ? (this.immediateMode.vertexPositions = [
            ], this.immediateMode.vertexColors = [
            ], this.immediateMode.vertexBuffer = this.GL.createBuffer(), this.immediateMode.colorBuffer = this.GL.createBuffer())  : (this.immediateMode.vertexPositions.length = 0, this.immediateMode.vertexColors.length = 0),
            this.isImmediateDrawing = !0,
            this
          },
          n.Renderer3D.prototype.vertex = function (t, e, r) {
            this.immediateMode.vertexPositions.push(t, e, r);
            var n = this.curFillColor || [
              0.5,
              0.5,
              0.5,
              1
            ];
            return this.immediateMode.vertexColors.push(n[0], n[1], n[2], n[3]),
            this
          },
          n.Renderer3D.prototype.endShape = function (t, e, r, n, o, s) {
            var a = this.GL;
            if (this._bindImmediateBuffers(this.immediateMode.vertexPositions, this.immediateMode.vertexColors), t) if ('fill' === this.drawMode) switch (this.immediateMode.shapeMode) {
              case i.LINE_STRIP:
                this.immediateMode.shapeMode = i.TRIANGLE_FAN;
                break;
              case i.LINES:
                this.immediateMode.shapeMode = i.TRIANGLE_FAN;
                break;
              case i.TRIANGLES:
                this.immediateMode.shapeMode = i.TRIANGLE_FAN
            } else switch (this.immediateMode.shapeMode) {
              case i.LINE_STRIP:
                this.immediateMode.shapeMode = i.LINE_LOOP;
                break;
              case i.LINES:
                this.immediateMode.shapeMode = i.LINE_LOOP
            }
            if (this.immediateMode.shapeMode === i.QUADS || this.immediateMode.shapeMode === i.QUAD_STRIP) throw new Error('sorry, ' + this.immediateMode.shapeMode + ' not yet implemented in webgl mode.');
            return a.enable(a.BLEND),
            a.drawArrays(this.immediateMode.shapeMode, 0, this.immediateMode.vertexPositions.length / 3),
            this.immediateMode.vertexPositions.length = 0,
            this.immediateMode.vertexColors.length = 0,
            this.isImmediateDrawing = !1,
            this
        },
        n.Renderer3D.prototype._bindImmediateBuffers = function (t, e) {
          this._setDefaultCamera();
          var r = this.GL,
          n = this._getCurShaderId(),
          i = this.mHash[n];
          return i.vertexPositionAttribute = r.getAttribLocation(i, 'aPosition'),
          r.enableVertexAttribArray(i.vertexPositionAttribute),
          r.bindBuffer(r.ARRAY_BUFFER, this.immediateMode.vertexBuffer),
          r.bufferData(r.ARRAY_BUFFER, new Float32Array(t), r.DYNAMIC_DRAW),
          r.vertexAttribPointer(i.vertexPositionAttribute, 3, r.FLOAT, !1, 0, 0),
          i.vertexColorAttribute = r.getAttribLocation(i, 'aVertexColor'),
          r.enableVertexAttribArray(i.vertexColorAttribute),
          r.bindBuffer(r.ARRAY_BUFFER, this.immediateMode.colorBuffer),
          r.bufferData(r.ARRAY_BUFFER, new Float32Array(e), r.DYNAMIC_DRAW),
          r.vertexAttribPointer(i.vertexColorAttribute, 4, r.FLOAT, !1, 0, 0),
          this._setMatrixUniforms(n),
          this
      },
      n.Renderer3D.prototype._getColorVertexShader = function () {
        var t,
        e = this.GL,
        r = 'immediateVert|vertexColorFrag';
        return this.materialInHash(r) ? t = this.mHash[r] : (t = this._initShaders('immediateVert', 'vertexColorFrag', !0), this.mHash[r] = t, t.vertexColorAttribute = e.getAttribLocation(t, 'aVertexColor'), e.enableVertexAttribArray(t.vertexColorAttribute)),
        t
    },
    e.exports = n.Renderer3D
  },
  {
    '../core/constants': 48,
    '../core/core': 49
  }
  ],
  36: [
    function (t, e, r) {
      'use strict';
      function n(t) {
        return t.length > 0 ? t.reduce(function (t, e) {
          return t.concat(e)
        })  : [
        ]
      }
      function i(t) {
        return n(t.map(function (t) {
          return [t.x,
          t.y,
          t.z]
        }))
      }
      var o = t('../core/core'),
      s = 0;
      o.Renderer3D.prototype._initBufferDefaults = function (t) {
        if (s++, s > 1000) {
          var e = Object.keys(this.gHash) [0];
          delete this.gHash[e],
          s--
        }
        var r = this.GL;
        this.gHash[t] = {
        },
        this.gHash[t].vertexBuffer = r.createBuffer(),
        this.gHash[t].normalBuffer = r.createBuffer(),
        this.gHash[t].uvBuffer = r.createBuffer(),
        this.gHash[t].indexBuffer = r.createBuffer()
      },
      o.Renderer3D.prototype.createBuffers = function (t, e) {
        var r = this.GL;
        this._setDefaultCamera(),
        this._initBufferDefaults(t);
        var o = this.mHash[this._getCurShaderId()];
        this.gHash[t].numberOfItems = 3 * e.faces.length,
        r.bindBuffer(r.ARRAY_BUFFER, this.gHash[t].vertexBuffer),
        r.bufferData(r.ARRAY_BUFFER, new Float32Array(i(e.vertices)), r.STATIC_DRAW),
        o.vertexPositionAttribute = r.getAttribLocation(o, 'aPosition'),
        r.enableVertexAttribArray(o.vertexPositionAttribute),
        r.vertexAttribPointer(o.vertexPositionAttribute, 3, r.FLOAT, !1, 0, 0),
        r.bindBuffer(r.ARRAY_BUFFER, this.gHash[t].normalBuffer),
        r.bufferData(r.ARRAY_BUFFER, new Float32Array(i(e.vertexNormals)), r.STATIC_DRAW),
        o.vertexNormalAttribute = r.getAttribLocation(o, 'aNormal'),
        r.enableVertexAttribArray(o.vertexNormalAttribute),
        r.vertexAttribPointer(o.vertexNormalAttribute, 3, r.FLOAT, !1, 0, 0),
        r.bindBuffer(r.ARRAY_BUFFER, this.gHash[t].uvBuffer),
        r.bufferData(r.ARRAY_BUFFER, new Float32Array(n(e.uvs)), r.STATIC_DRAW),
        o.textureCoordAttribute = r.getAttribLocation(o, 'aTexCoord'),
        r.enableVertexAttribArray(o.textureCoordAttribute),
        r.vertexAttribPointer(o.textureCoordAttribute, 2, r.FLOAT, !1, 0, 0),
        r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.gHash[t].indexBuffer),
        r.bufferData(r.ELEMENT_ARRAY_BUFFER, new Uint16Array(n(e.faces)), r.STATIC_DRAW)
      },
      o.Renderer3D.prototype.drawBuffers = function (t) {
        this._setDefaultCamera();
        var e = this.GL,
        r = this._getCurShaderId(),
        n = this.mHash[r];
        return e.bindBuffer(e.ARRAY_BUFFER, this.gHash[t].vertexBuffer),
        e.vertexAttribPointer(n.vertexPositionAttribute, 3, e.FLOAT, !1, 0, 0),
        e.bindBuffer(e.ARRAY_BUFFER, this.gHash[t].normalBuffer),
        e.vertexAttribPointer(n.vertexNormalAttribute, 3, e.FLOAT, !1, 0, 0),
        e.bindBuffer(e.ARRAY_BUFFER, this.gHash[t].uvBuffer),
        e.vertexAttribPointer(n.textureCoordAttribute, 2, e.FLOAT, !1, 0, 0),
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.gHash[t].indexBuffer),
        this._setMatrixUniforms(r),
        e.drawElements(e.TRIANGLES, this.gHash[t].numberOfItems, e.UNSIGNED_SHORT, 0),
        this
      },
      e.exports = o.Renderer3D
    },
    {
      '../core/core': 49
    }
  ],
  37: [
    function (t, e, r) {
      'use strict';
      var n = t('../core/core'),
      i = t('./shader');
      t('../core/p5.Renderer'),
      t('./p5.Matrix');
      var o = [
      ],
      s = 1000,
      a = {
        alpha: !0,
        depth: !0,
        stencil: !0,
        antialias: !1,
        premultipliedAlpha: !1,
        preserveDrawingBuffer: !1
      };
      n.Renderer3D = function (t, e, r) {
        return n.Renderer.call(this, t, e, r),
        this._initContext(),
        this.isP3D = !0,
        this.GL = this.drawingContext,
        this.ambientLightCount = 0,
        this.directionalLightCount = 0,
        this.pointLightCount = 0,
        this._isSetCamera = !1,
        this.uMVMatrix = new n.Matrix,
        this.uPMatrix = new n.Matrix,
        this.uNMatrix = new n.Matrix('mat3'),
        this.gHash = {
        },
        this.mHash = {
        },
        this.isImmediateDrawing = !1,
        this.immediateMode = {
        },
        this.curFillColor = [
          0.5,
          0.5,
          0.5,
          1
        ],
        this.curStrokeColor = [
          0.5,
          0.5,
          0.5,
          1
        ],
        this.pointSize = 5,
        this
      },
      n.Renderer3D.prototype = Object.create(n.Renderer.prototype),
      n.Renderer3D.prototype._initContext = function () {
        try {
          if (this.drawingContext = this.canvas.getContext('webgl', a) || this.canvas.getContext('experimental-webgl', a), null === this.drawingContext) throw new Error('Error creating webgl context');
          console.log('p5.Renderer3D: enabled webgl context');
          var t = this.drawingContext;
          t.enable(t.DEPTH_TEST),
          t.depthFunc(t.LEQUAL),
          t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight)
        } catch (t) {
          throw new Error(t)
        }
      },
      n.Renderer3D.prototype._setDefaultCamera = function () {
        if (!this._isSetCamera) {
          var t = this.width,
          e = this.height;
          this.uPMatrix = n.Matrix.identity(),
          this.uPMatrix.perspective(60 / 180 * Math.PI, t / e, 0.1, 100),
          this._isSetCamera = !0
        }
      },
      n.Renderer3D.prototype._update = function () {
        this.uMVMatrix = n.Matrix.identity(),
        this.translate(0, 0, - 800),
        this.ambientLightCount = 0,
        this.directionalLightCount = 0,
        this.pointLightCount = 0
      },
      n.Renderer3D.prototype.background = function () {
        var t = this.GL,
        e = this._pInst.color.apply(this._pInst, arguments),
        r = e.levels[0] / 255,
        n = e.levels[1] / 255,
        i = e.levels[2] / 255,
        o = e.levels[3] / 255;
        t.clearColor(r, n, i, o),
        t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
      },
      n.Renderer3D.prototype._initShaders = function (t, e, r) {
        var n = this.GL,
        o = n.createShader(n.VERTEX_SHADER);
        if (n.shaderSource(o, i[t]), n.compileShader(o), !n.getShaderParameter(o, n.COMPILE_STATUS)) return alert('Yikes! An error occurred compiling the shaders:' + n.getShaderInfoLog(o)),
        null;
        var s = n.createShader(n.FRAGMENT_SHADER);
        if (n.shaderSource(s, i[e]), n.compileShader(s), !n.getShaderParameter(s, n.COMPILE_STATUS)) return alert('Darn! An error occurred compiling the shaders:' + n.getShaderInfoLog(s)),
        null;
        var a = n.createProgram();
        return n.attachShader(a, o),
        n.attachShader(a, s),
        n.linkProgram(a),
        n.getProgramParameter(a, n.LINK_STATUS) || alert('Snap! Error linking shader program'),
        this._getLocation(a, r),
        a
      },
      n.Renderer3D.prototype._getLocation = function (t, e) {
        var r = this.GL;
        r.useProgram(t),
        t.uResolution = r.getUniformLocation(t, 'uResolution'),
        r.uniform1f(t.uResolution, s),
        t.uPMatrixUniform = r.getUniformLocation(t, 'uProjectionMatrix'),
        t.uMVMatrixUniform = r.getUniformLocation(t, 'uModelViewMatrix'),
        void 0 === e && (t.uNMatrixUniform = r.getUniformLocation(t, 'uNormalMatrix'), t.samplerUniform = r.getUniformLocation(t, 'uSampler'))
      },
      n.Renderer3D.prototype._setUniform1f = function (t, e, r) {
        var n = this.GL,
        i = this.mHash[t];
        return n.useProgram(i),
        i[e] = n.getUniformLocation(i, e),
        n.uniform1f(i[e], r),
        this
      },
      n.Renderer3D.prototype._setMatrixUniforms = function (t) {
        var e = this.GL,
        r = this.mHash[t];
        e.useProgram(r),
        e.uniformMatrix4fv(r.uPMatrixUniform, !1, this.uPMatrix.mat4),
        e.uniformMatrix4fv(r.uMVMatrixUniform, !1, this.uMVMatrix.mat4),
        e.uniformMatrix3fv(r.uNMatrixUniform, !1, this.uNMatrix.mat3)
      },
      n.Renderer3D.prototype._getShader = function (t, e, r) {
        var n = t + '|' + e;
        if (!this.materialInHash(n)) {
          var i = this._initShaders(t, e, r);
          this.mHash[n] = i
        }
        return this.curShaderId = n,
        this.mHash[this.curShaderId]
      },
      n.Renderer3D.prototype._getCurShaderId = function () {
        var t,
        e;
        return 'fill' !== this.drawMode && void 0 === this.curShaderId ? (t = 'normalVert|normalFrag', e = this._initShaders('normalVert', 'normalFrag'), this.mHash[t] = e, this.curShaderId = t)  : this.isImmediateDrawing && 'fill' === this.drawMode && (t = 'immediateVert|vertexColorFrag', e = this._initShaders('immediateVert', 'vertexColorFrag'), this.mHash[t] = e, this.curShaderId = t),
        this.curShaderId
      },
      n.Renderer3D.prototype.fill = function (t, e, r, n) {
        var i,
        o = this.GL,
        s = this._applyColorBlend(t, e, r, n);
        return this.curFillColor = s,
        this.drawMode = 'fill',
        this.isImmediateDrawing ? (i = this._getShader('immediateVert', 'vertexColorFrag'), o.useProgram(i))  : (i = this._getShader('normalVert', 'basicFrag'), o.useProgram(i), i.uMaterialColor = o.getUniformLocation(i, 'uMaterialColor'), o.uniform4f(i.uMaterialColor, s[0], s[1], s[2], s[3])),
        this
      },
      n.Renderer3D.prototype.stroke = function (t, e, r, n) {
        var i = this._pInst.color.apply(this._pInst, arguments),
        o = i._array;
        return this.curStrokeColor = o,
        this.drawMode = 'stroke',
        this
      },
      n.Renderer3D.prototype._strokeCheck = function () {
        if ('stroke' === this.drawMode) throw new Error('stroke for shapes in 3D not yet implemented, use fill for now :(')
      },
      n.Renderer3D.prototype.strokeWeight = function (t) {
        return this.pointSize = t,
        this
      },
      n.Renderer3D.prototype.geometryInHash = function (t) {
        return void 0 !== this.gHash[t]
      },
      n.Renderer3D.prototype.materialInHash = function (t) {
        return void 0 !== this.mHash[t]
      },
      n.Renderer3D.prototype.resize = function (t, e) {
        var r = this.GL;
        n.Renderer.prototype.resize.call(this, t, e),
        r.viewport(0, 0, r.drawingBufferWidth, r.drawingBufferHeight)
      },
      n.Renderer3D.prototype.clear = function () {
        var t = this.GL;
        t.clearColor(arguments[0], arguments[1], arguments[2], arguments[3]),
        t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
      },
      n.Renderer3D.prototype.translate = function (t, e, r) {
        return t /= s,
        e = - e / s,
        r /= s,
        this.uMVMatrix.translate([t,
        e,
        r]),
        this
      },
      n.Renderer3D.prototype.scale = function (t, e, r) {
        return this.uMVMatrix.scale([t,
        e,
        r]),
        this
      },
      n.Renderer3D.prototype.rotate = function (t, e) {
        return this.uMVMatrix.rotate(t, e),
        this.uNMatrix.inverseTranspose(this.uMVMatrix),
        this
      },
      n.Renderer3D.prototype.rotateX = function (t) {
        return this.rotate(t, [
          1,
          0,
          0
        ]),
        this
      },
      n.Renderer3D.prototype.rotateY = function (t) {
        return this.rotate(t, [
          0,
          1,
          0
        ]),
        this
      },
      n.Renderer3D.prototype.rotateZ = function (t) {
        return this.rotate(t, [
          0,
          0,
          1
        ]),
        this
      },
      n.Renderer3D.prototype.push = function () {
        o.push(this.uMVMatrix.copy())
      },
      n.Renderer3D.prototype.pop = function () {
        if (0 === o.length) throw new Error('Invalid popMatrix!');
        this.uMVMatrix = o.pop()
      },
      n.Renderer3D.prototype._applyTextProperties = function () {
        console.error('text commands not yet implemented in webgl')
      },
      e.exports = n.Renderer3D
    },
    {
      '../core/core': 49,
      '../core/p5.Renderer': 55,
      './p5.Matrix': 34,
      './shader': 39
    }
  ],
  38: [
    function (t, e, r) {
      'use strict';
      var n = t('../core/core');
      t('./p5.Geometry'),
      n.prototype.plane = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        var r = t[0] || 50,
        i = t[1] || r,
        o = 'number' == typeof t[2] ? t[2] : 1,
        s = 'number' == typeof t[3] ? t[3] : 1,
        a = 'plane|' + r + '|' + i + '|' + o + '|' + s;
        if (!this._renderer.geometryInHash(a)) {
          var l = function () {
            for (var t, e, o, s = 0; s <= this.detailY; s++) {
              e = s / this.detailY;
              for (var a = 0; a <= this.detailX; a++) t = a / this.detailX,
              o = new n.Vector(r * t - r / 2, i * e - i / 2, 0),
              this.vertices.push(o),
              this.uvs.push([t,
              e])
            }
          },
          u = new n.Geometry(o, s, l);
          u.computeFaces().computeNormals(),
          this._renderer.createBuffers(a, u)
        }
        this._renderer.drawBuffers(a)
      },
      n.prototype.box = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        var r = t[0] || 50,
        i = t[1] || r,
        o = t[2] || r,
        s = 'number' == typeof t[3] ? t[3] : 4,
        a = 'number' == typeof t[4] ? t[4] : 4,
        l = 'box|' + r + '|' + i + '|' + o + '|' + s + '|' + a;
        if (!this._renderer.geometryInHash(l)) {
          var u = function () {
            for (var t = [
              [0,
              4,
              2,
              6],
              [
                1,
                3,
                5,
                7
              ],
              [
                0,
                1,
                4,
                5
              ],
              [
                2,
                6,
                3,
                7
              ],
              [
                0,
                2,
                1,
                3
              ],
              [
                4,
                5,
                6,
                7
              ]
            ], e = 0, s = 0; s < t.length; s++) {
              for (var a = t[s], l = 4 * s, u = 0; u < 4; u++) {
                var h = a[u],
                c = new n.Vector((2 * (1 & h) - 1) * r / 2, ((2 & h) - 1) * i / 2, ((4 & h) / 2 - 1) * o / 2);
                this.vertices.push(c),
                this.uvs.push([1 & u,
                (2 & u) / 2]),
                e++
              }
              this.faces.push([l,
              l + 1,
              l + 2]),
              this.faces.push([l + 2,
              l + 1,
              l + 3])
            }
          },
          h = new n.Geometry(s, a, u);
          h.computeNormals(),
          this._renderer.createBuffers(l, h)
        }
        return this._renderer.drawBuffers(l),
        this
      },
      n.prototype.sphere = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        var r = t[0] || 50,
        i = 'number' == typeof t[1] ? t[1] : 24,
        o = 'number' == typeof t[2] ? t[2] : 16,
        s = 'sphere|' + r + '|' + i + '|' + o;
        if (!this._renderer.geometryInHash(s)) {
          var a = function () {
            for (var t, e, i, o = 0; o <= this.detailY; o++) {
              e = o / this.detailY;
              for (var s = 0; s <= this.detailX; s++) {
                t = s / this.detailX;
                var a = 2 * Math.PI * t,
                l = Math.PI * e - Math.PI / 2;
                i = new n.Vector(r * Math.cos(l) * Math.sin(a), r * Math.sin(l), r * Math.cos(l) * Math.cos(a)),
                this.vertices.push(i),
                this.uvs.push([t,
                e])
              }
            }
          },
          l = new n.Geometry(i, o, a);
          l.computeFaces().computeNormals(),
          this._renderer.createBuffers(s, l)
        }
        return this._renderer.drawBuffers(s),
        this
      };
      var i = function (t, e, r, i, o, s, a) {
        i = i < 3 ? 3 : i,
        o = o < 1 ? 1 : o,
        s = void 0 === s || s,
        a = void 0 === a || a;
        var l,
        u,
        h = (s ? 2 : 0) + (a ? 2 : 0),
        c = i + 1,
        p = Math.atan2(t - e, r),
        f = s ? - 2 : 0,
        d = o + (a ? 2 : 0);
        for (l = f; l <= d; ++l) {
          var m,
          g = l / o,
          y = r * g;
          for (l < 0 ? (y = 0, g = 1, m = t)  : l > o ? (y = r, g = 1, m = e)  : m = t + (e - t) * (l / o), l !== - 2 && l !== o + 2 || (m = 0, g = 0), y -= r / 2, u = 0; u < c; ++u) this.vertices.push(new n.Vector(Math.sin(u * Math.PI * 2 / i) * m, y, Math.cos(u * Math.PI * 2 / i) * m)),
          this.vertexNormals.push(new n.Vector(l < 0 || l > o ? 0 : Math.sin(u * Math.PI * 2 / i) * Math.cos(p), l < 0 ? - 1 : l > o ? 1 : Math.sin(p), l < 0 || l > o ? 0 : Math.cos(u * Math.PI * 2 / i) * Math.cos(p))),
          this.uvs.push([u / i,
          g])
        }
        for (l = 0; l < o + h; ++l) for (u = 0; u < i; ++u) this.faces.push([c * (l + 0) + 0 + u,
        c * (l + 0) + 1 + u,
        c * (l + 1) + 1 + u]),
        this.faces.push([c * (l + 0) + 0 + u,
        c * (l + 1) + 1 + u,
        c * (l + 1) + 0 + u])
      };
      n.prototype.cylinder = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        var r = t[0] || 50,
        o = t[1] || r,
        s = 'number' == typeof t[2] ? t[2] : 24,
        a = 'number' == typeof t[3] ? t[3] : 16,
        l = 'cylinder|' + r + '|' + o + '|' + s + '|' + a;
        if (!this._renderer.geometryInHash(l)) {
          var u = new n.Geometry(s, a);
          i.call(u, r, r, o, s, a, !0, !0),
          u.computeNormals(),
          this._renderer.createBuffers(l, u)
        }
        return this._renderer.drawBuffers(l),
        this
      },
      n.prototype.cone = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        var r = t[0] || 50,
        o = t[1] || r,
        s = 'number' == typeof t[2] ? t[2] : 24,
        a = 'number' == typeof t[3] ? t[3] : 16,
        l = 'cone|' + r + '|' + o + '|' + s + '|' + a;
        if (!this._renderer.geometryInHash(l)) {
          var u = new n.Geometry(s, a);
          i.call(u, r, 0, o, s, a, !0, !0),
          u.computeNormals(),
          this._renderer.createBuffers(l, u)
        }
        return this._renderer.drawBuffers(l),
        this
      },
      n.prototype.ellipsoid = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        var r = 'number' == typeof t[2] ? t[2] : 24,
        i = 'number' == typeof t[3] ? t[3] : 24,
        o = t[0] || 50,
        s = t[1] || o,
        a = t[2] || o,
        l = 'ellipsoid|' + o + '|' + s + '|' + a + '|' + r + '|' + i;
        if (!this._renderer.geometryInHash(l)) {
          var u = function () {
            for (var t, e, r, i = 0; i <= this.detailY; i++) {
              e = i / this.detailY;
              for (var l = 0; l <= this.detailX; l++) {
                t = l / this.detailX;
                var u = 2 * Math.PI * t,
                h = Math.PI * e - Math.PI / 2;
                r = new n.Vector(o * Math.cos(h) * Math.sin(u), s * Math.sin(h), a * Math.cos(h) * Math.cos(u)),
                this.vertices.push(r),
                this.uvs.push([t,
                e])
              }
            }
          },
          h = new n.Geometry(r, i, u);
          h.computeFaces().computeNormals(),
          this._renderer.createBuffers(l, h)
        }
        return this._renderer.drawBuffers(l),
        this
      },
      n.prototype.torus = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        var r = 'number' == typeof t[2] ? t[2] : 24,
        i = 'number' == typeof t[3] ? t[3] : 16,
        o = t[0] || 50,
        s = t[1] || 10,
        a = 'torus|' + o + '|' + s + '|' + r + '|' + i;
        if (!this._renderer.geometryInHash(a)) {
          var l = function () {
            for (var t, e, r, i = 0; i <= this.detailY; i++) {
              e = i / this.detailY;
              for (var a = 0; a <= this.detailX; a++) {
                t = a / this.detailX;
                var l = 2 * Math.PI * t,
                u = 2 * Math.PI * e;
                r = new n.Vector((o + s * Math.cos(u)) * Math.cos(l), (o + s * Math.cos(u)) * Math.sin(l), s * Math.sin(u)),
                this.vertices.push(r),
                this.uvs.push([t,
                e])
              }
            }
          },
          u = new n.Geometry(r, i, l);
          u.computeFaces().computeNormals(),
          this._renderer.createBuffers(a, u)
        }
        return this._renderer.drawBuffers(a),
        this
      },
      n.Renderer3D.prototype.point = function (t, e, r) {
        return console.log('point not yet implemented in webgl'),
        this
      },
      n.Renderer3D.prototype.triangle = function (t) {
        var e = t[0],
        r = t[1],
        i = t[2],
        o = t[3],
        s = t[4],
        a = t[5],
        l = t[6],
        u = t[7],
        h = t[8],
        c = 'tri|' + e + '|' + r + '|' + i + '|' + o + '|' + s + '|' + a + l + '|' + u + '|' + h;
        if (!this.geometryInHash(c)) {
          var p = function () {
            var t = [
            ];
            t.push(new n.Vector(e, r, i)),
            t.push(new n.Vector(o, s, a)),
            t.push(new n.Vector(l, u, h)),
            this.vertices = t,
            this.faces = [
              [0,
              1,
              2]
            ],
            this.uvs = [
              [0,
              0],
              [
                0,
                1
              ],
              [
                1,
                1
              ]
            ]
          },
          f = new n.Geometry(1, 1, p);
          f.computeNormals(),
          this.createBuffers(c, f)
        }
        return this.drawBuffers(c),
        this
      },
      n.Renderer3D.prototype.ellipse = function (t) {
        var e = t[0],
        r = t[1],
        i = t[2],
        o = t[3],
        s = t[4],
        a = t[5] || 24,
        l = t[6] || 16,
        u = 'ellipse|' + t[0] + '|' + t[1] + '|' + t[2] + '|' + t[3] + '|' + t[4];
        if (!this.geometryInHash(u)) {
          var h = function () {
            for (var t, a, l, u = 0; u <= this.detailY; u++) {
              a = u / this.detailY;
              for (var h = 0; h <= this.detailX; h++) {
                t = h / this.detailX;
                var c = 2 * Math.PI * t;
                if (0 === a) l = new n.Vector(e, r, i);
                 else {
                  var p = e + o * Math.sin(c),
                  f = r + s * Math.cos(c),
                  d = i;
                  l = new n.Vector(p, f, d)
                }
                this.vertices.push(l),
                this.uvs.push([t,
                a])
              }
            }
          },
          c = new n.Geometry(a, l, h);
          c.computeFaces().computeNormals(),
          this.createBuffers(u, c)
        }
        return this.drawBuffers(u),
        this
      },
      n.Renderer3D.prototype.rect = function (t) {
        var e = 'rect|' + t[0] + '|' + t[1] + '|' + t[2] + '|' + t[3] + '|' + t[4],
        r = t[0],
        i = t[1],
        o = t[2],
        s = t[3],
        a = t[4],
        l = t[5] || 24,
        u = t[6] || 16;
        if (!this.geometryInHash(e)) {
          var h = function () {
            for (var t, e, l, u = 0; u <= this.detailY; u++) {
              e = u / this.detailY;
              for (var h = 0; h <= this.detailX; h++) t = h / this.detailX,
              l = new n.Vector((r + s) * t, (i + a) * e, o),
              this.vertices.push(l),
              this.uvs.push([t,
              e])
            }
          },
          c = new n.Geometry(l, u, h);
          c.computeFaces().computeNormals(),
          this.createBuffers(e, c)
        }
        return this.drawBuffers(e),
        this
      },
      n.Renderer3D.prototype.quad = function (t) {
        var e = t[0],
        r = t[1],
        i = t[2],
        o = t[3],
        s = t[4],
        a = t[5],
        l = t[6],
        u = t[7],
        h = t[8],
        c = t[9],
        p = t[10],
        f = t[11],
        d = 'quad|' + e + '|' + r + '|' + i + '|' + o + '|' + s + '|' + a + l + '|' + u + '|' + h + c + '|' + p + '|' + f;
        if (!this.geometryInHash(d)) {
          var m = function () {
            this.vertices.push(new n.Vector(e, r, i)),
            this.vertices.push(new n.Vector(o, s, a)),
            this.vertices.push(new n.Vector(l, u, h)),
            this.vertices.push(new n.Vector(c, p, f))
          },
          g = new n.Geometry(2, 2, m);
          g.computeNormals().computeUVs(),
          g.faces = [
            [0,
            1,
            2],
            [
              2,
              3,
              1
            ]
          ],
          this.createBuffers(d, g)
        }
        return this.drawBuffers(d),
        this
      },
      n.Renderer3D.prototype.bezier = function (t) {
        var e = t[12] || 20;
        this.beginShape();
        for (var r = [
          0,
          0,
          0,
          0
        ], n = [
          0,
          0,
          0
        ], i = 0; i <= e; i++) r[0] = Math.pow(1 - i / e, 3),
        r[1] = 3 * (i / e) * Math.pow(1 - i / e, 2),
        r[2] = 3 * Math.pow(i / e, 2) * (1 - i / e),
        r[3] = Math.pow(i / e, 3),
        n[0] = t[0] * r[0] + t[3] * r[1] + t[6] * r[2] + t[9] * r[3],
        n[1] = t[1] * r[0] + t[4] * r[1] + t[7] * r[2] + t[10] * r[3],
        n[2] = t[2] * r[0] + t[5] * r[1] + t[8] * r[2] + t[11] * r[3],
        this.vertex(n[0], n[1], n[2]);
        return this.endShape(),
        this
      },
      n.Renderer3D.prototype.curve = function (t) {
        var e = t[12];
        this.beginShape();
        for (var r = [
          0,
          0,
          0,
          0
        ], n = [
          0,
          0,
          0
        ], i = 0; i <= e; i++) r[0] = 0.5 * Math.pow(i / e, 3),
        r[1] = 0.5 * Math.pow(i / e, 2),
        r[2] = i / e * 0.5,
        r[3] = 0.5,
        n[0] = r[0] * ( - t[0] + 3 * t[3] - 3 * t[6] + t[9]) + r[1] * (2 * t[0] - 5 * t[3] + 4 * t[6] - t[9]) + r[2] * ( - t[0] + t[6]) + r[3] * (2 * t[3]),
        n[1] = r[0] * ( - t[1] + 3 * t[4] - 3 * t[7] + t[10]) + r[1] * (2 * t[1] - 5 * t[4] + 4 * t[7] - t[10]) + r[2] * ( - t[1] + t[7]) + r[3] * (2 * t[4]),
        n[2] = r[0] * ( - t[2] + 3 * t[5] - 3 * t[8] + t[11]) + r[1] * (2 * t[2] - 5 * t[5] + 4 * t[8] - t[11]) + r[2] * ( - t[2] + t[8]) + r[3] * (2 * t[5]),
        this.vertex(n[0], n[1], n[2]);
        return this.endShape(),
        this
      },
      e.exports = n
    },
    {
      '../core/core': 49,
      './p5.Geometry': 33
    }
  ],
  39: [
    function (t, e, r) {
      e.exports = {
        immediateVert: 'attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution *vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}',
        vertexColorVert: 'attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}',
        vertexColorFrag: 'precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}',
        normalVert: 'attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform float uResolution;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertTexCoord = aTexCoord;\n}',
        normalFrag: 'precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}',
        basicFrag: 'precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}',
        lightVert: 'attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform float uResolution;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvec3 ambientLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 directionalLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor2 = vec3(0.0, 0.0, 0.0);\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition / uResolution, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition / uResolution, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  for(int i = 0; i < 8; i++){\n    if(uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n  for(int j = 0; j < 8; j++){\n    if(uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n  for(int k = 0; k < 8; k++){\n    if(uPointLightCount == k) break;\n    vec3 loc = uPointLightLocation[k];\n    //loc = loc / uResolution;\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n    pointLightFactor += uPointLightColor[k] * directionalLightWeighting;\n\n    //factor2 for specular\n    vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n    float specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n\n    pointLightFactor2 += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      +  directionalLightWeighting * diffuseFactor);\n  }\n  \n  if(!uSpecular){\n    vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n  }else{\n    vLightWeighting = ambientLightFactor + directionalLightFactor + pointLightFactor2;\n  }\n\n}',
        lightTextureFrag: 'precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  if(!isTexture){\n    gl_FragColor = vec4(vec3(uMaterialColor.rgb * vLightWeighting), uMaterialColor.a);\n  }else{\n    vec4 textureColor = texture2D(uSampler, vVertTexCoord);\n    if(vLightWeighting == vec3(0., 0., 0.)){\n      gl_FragColor = textureColor;\n    }else{\n      gl_FragColor = vec4(vec3(textureColor.rgb * vLightWeighting), textureColor.a); \n    }\n  }\n}'
      }
    },
    {
    }
  ],
  40: [
    function (t, e, r) {
      'use strict';
      var n = t('./core/core');
      t('./color/p5.Color'),
      t('./core/p5.Element'),
      t('./typography/p5.Font'),
      t('./core/p5.Graphics'),
      t('./core/p5.Renderer2D'),
      t('./image/p5.Image'),
      t('./math/p5.Vector'),
      t('./io/p5.TableRow'),
      t('./io/p5.Table'),
      t('./io/p5.XML'),
      t('./color/creating_reading'),
      t('./color/setting'),
      t('./core/constants'),
      t('./utilities/conversion'),
      t('./utilities/array_functions'),
      t('./utilities/string_functions'),
      t('./core/environment'),
      t('./image/image'),
      t('./image/loading_displaying'),
      t('./image/pixels'),
      t('./io/files'),
      t('./events/keyboard'),
      t('./events/acceleration'),
      t('./events/mouse'),
      t('./utilities/time_date'),
      t('./events/touch'),
      t('./math/math'),
      t('./math/calculation'),
      t('./math/random'),
      t('./math/noise'),
      t('./math/trigonometry'),
      t('./core/rendering'),
      t('./core/2d_primitives'),
      t('./core/attributes'),
      t('./core/curves'),
      t('./core/vertex'),
      t('./core/structure'),
      t('./core/transform'),
      t('./typography/attributes'),
      t('./typography/loading_displaying'),
      t('./3d/p5.Renderer3D'),
      t('./3d/p5.Geometry'),
      t('./3d/p5.Renderer3D.Retained'),
      t('./3d/p5.Renderer3D.Immediate'),
      t('./3d/primitives'),
      t('./3d/loading'),
      t('./3d/p5.Matrix'),
      t('./3d/material'),
      t('./3d/light'),
      t('./3d/shader'),
      t('./3d/camera'),
      t('./3d/interaction');
      var i = function () {
        window.PHANTOMJS || window.mocha || (window.setup && 'function' == typeof window.setup || window.draw && 'function' == typeof window.draw) && new n
      };
      'complete' === document.readyState ? i()  : window.addEventListener('load', i, !1),
      e.exports = n
    },
    {
      './3d/camera': 28,
      './3d/interaction': 29,
      './3d/light': 30,
      './3d/loading': 31,
      './3d/material': 32,
      './3d/p5.Geometry': 33,
      './3d/p5.Matrix': 34,
      './3d/p5.Renderer3D': 37,
      './3d/p5.Renderer3D.Immediate': 35,
      './3d/p5.Renderer3D.Retained': 36,
      './3d/primitives': 38,
      './3d/shader': 39,
      './color/creating_reading': 42,
      './color/p5.Color': 43,
      './color/setting': 44,
      './core/2d_primitives': 45,
      './core/attributes': 46,
      './core/constants': 48,
      './core/core': 49,
      './core/curves': 50,
      './core/environment': 51,
      './core/p5.Element': 53,
      './core/p5.Graphics': 54,
      './core/p5.Renderer2D': 56,
      './core/rendering': 57,
      './core/structure': 59,
      './core/transform': 60,
      './core/vertex': 61,
      './events/acceleration': 62,
      './events/keyboard': 63,
      './events/mouse': 64,
      './events/touch': 65,
      './image/image': 67,
      './image/loading_displaying': 68,
      './image/p5.Image': 69,
      './image/pixels': 70,
      './io/files': 71,
      './io/p5.Table': 72,
      './io/p5.TableRow': 73,
      './io/p5.XML': 74,
      './math/calculation': 75,
      './math/math': 76,
      './math/noise': 77,
      './math/p5.Vector': 78,
      './math/random': 80,
      './math/trigonometry': 81,
      './typography/attributes': 82,
      './typography/loading_displaying': 83,
      './typography/p5.Font': 84,
      './utilities/array_functions': 85,
      './utilities/conversion': 86,
      './utilities/string_functions': 87,
      './utilities/time_date': 88
    }
  ],
  41: [
    function (t, e, r) {
      'use strict';
      var n = t('../core/core');
      n.ColorConversion = {
      },
      n.ColorConversion._hsbaToHSLA = function (t) {
        var e = t[0],
        r = t[1],
        n = t[2],
        i = (2 - r) * n / 2;
        return 0 !== i && (1 === i ? r = 0 : i < 0.5 ? r /= 2 - r : r = r * n / (2 - 2 * i)),
        [
          e,
          r,
          i,
          t[3]
        ]
      },
      n.ColorConversion._hsbaToRGBA = function (t) {
        var e = 6 * t[0],
        r = t[1],
        n = t[2],
        i = [
        ];
        if (0 === r) i = [
          n,
          n,
          n,
          t[3]
        ];
         else {
          var o,
          s,
          a,
          l = Math.floor(e),
          u = n * (1 - r),
          h = n * (1 - r * (e - l)),
          c = n * (1 - r * (1 + l - e));
          0 === l ? (o = n, s = c, a = u)  : 1 === l ? (o = h, s = n, a = u)  : 2 === l ? (o = u, s = n, a = c)  : 3 === l ? (o = u, s = h, a = n)  : 4 === l ? (o = c, s = u, a = n)  : (o = n, s = u, a = h),
          i = [
            o,
            s,
            a,
            t[3]
          ]
        }
        return i
      },
      n.ColorConversion._hslaToHSBA = function (t) {
        var e,
        r = t[0],
        n = t[1],
        i = t[2];
        return e = i < 0.5 ? (1 + n) * i : i + n - i * n,
        n = 2 * (e - i) / e,
        [
          r,
          n,
          e,
          t[3]
        ]
      },
      n.ColorConversion._hslaToRGBA = function (t) {
        var e = 6 * t[0],
        r = t[1],
        n = t[2],
        i = [
        ];
        if (0 === r) i = [
          n,
          n,
          n,
          t[3]
        ];
         else {
          var o;
          o = n < 0.5 ? (1 + r) * n : n + r - n * r;
          var s = 2 * n - o,
          a = function (t, e, r) {
            return t < 0 ? t += 6 : t >= 6 && (t -= 6),
            t < 1 ? e + (r - e) * t : t < 3 ? r : t < 4 ? e + (r - e) * (4 - t)  : e
          };
          i = [
            a(e + 2, s, o),
            a(e, s, o),
            a(e - 2, s, o),
            t[3]
          ]
        }
        return i
      },
      n.ColorConversion._rgbaToHSBA = function (t) {
        var e,
        r,
        n = t[0],
        i = t[1],
        o = t[2],
        s = Math.max(n, i, o),
        a = s - Math.min(n, i, o);
        return 0 === a ? (e = 0, r = 0)  : (r = a / s, n === s ? e = (i - o) / a : i === s ? e = 2 + (o - n) / a : o === s && (e = 4 + (n - i) / a), e < 0 ? e += 6 : e >= 6 && (e -= 6)),
        [
          e / 6,
          r,
          s,
          t[3]
        ]
      },
      n.ColorConversion._rgbaToHSLA = function (t) {
        var e,
        r,
        n = t[0],
        i = t[1],
        o = t[2],
        s = Math.max(n, i, o),
        a = Math.min(n, i, o),
        l = s + a,
        u = s - a;
        return 0 === u ? (e = 0, r = 0)  : (r = l < 1 ? u / l : u / (2 - u), n === s ? e = (i - o) / u : i === s ? e = 2 + (o - n) / u : o === s && (e = 4 + (n - i) / u), e < 0 ? e += 6 : e >= 6 && (e -= 6)),
        [
          e / 6,
          r,
          l / 2,
          t[3]
        ]
      },
      e.exports = n.ColorConversion
    },
    {
      '../core/core': 49
    }
  ],
  42: [
    function (t, e, r) {
      'use strict';
      var n = t('../core/core'),
      i = t('../core/constants');
      t('./p5.Color'),
      n.prototype.alpha = function (t) {
        if (t instanceof n.Color || t instanceof Array) return this.color(t)._getAlpha();
        throw new Error('Needs p5.Color or pixel array as argument.')
      },
      n.prototype.blue = function (t) {
        if (t instanceof n.Color || t instanceof Array) return this.color(t)._getBlue();
        throw new Error('Needs p5.Color or pixel array as argument.')
      },
      n.prototype.brightness = function (t) {
        if (t instanceof n.Color || t instanceof Array) return this.color(t)._getBrightness();
        throw new Error('Needs p5.Color or pixel array as argument.')
      },
      n.prototype.color = function () {
        return arguments[0] instanceof n.Color ? arguments[0] : arguments[0] instanceof Array ? this instanceof n.Renderer ? new n.Color(this, arguments[0])  : new n.Color(this._renderer, arguments[0])  : this instanceof n.Renderer ? new n.Color(this, arguments)  : new n.Color(this._renderer, arguments)
      },
      n.prototype.green = function (t) {
        if (t instanceof n.Color || t instanceof Array) return this.color(t)._getGreen();
        throw new Error('Needs p5.Color or pixel array as argument.')
      },
      n.prototype.hue = function (t) {
        if (t instanceof n.Color || t instanceof Array) return this.color(t)._getHue();
        throw new Error('Needs p5.Color or pixel array as argument.')
      },
      n.prototype.lerpColor = function (t, e, r) {
        var n,
        o,
        s,
        a,
        l,
        u,
        h = this._renderer._colorMode,
        c = this._renderer._colorMaxes;
        if (h === i.RGB) l = t.levels.map(function (t) {
          return t / 255
        }),
        u = e.levels.map(function (t) {
          return t / 255
        });
         else if (h === i.HSB) t._getBrightness(),
        e._getBrightness(),
        l = t.hsba,
        u = e.hsba;
         else {
          if (h !== i.HSL) throw new Error(h + 'cannot be used for interpolation.');
          t._getLightness(),
          e._getLightness(),
          l = t.hsla,
          u = e.hsla
        }
        return r = Math.max(Math.min(r, 1), 0),
        n = this.lerp(l[0], u[0], r),
        o = this.lerp(l[1], u[1], r),
        s = this.lerp(l[2], u[2], r),
        a = this.lerp(l[3], u[3], r),
        n *= c[h][0],
        o *= c[h][1],
        s *= c[h][2],
        a *= c[h][3],
        this.color(n, o, s, a)
      },
      n.prototype.lightness = function (t) {
        if (t instanceof n.Color || t instanceof Array) return this.color(t)._getLightness();
        throw new Error('Needs p5.Color or pixel array as argument.')
      },
      n.prototype.red = function (t) {
        if (t instanceof n.Color || t instanceof Array) return this.color(t)._getRed();
        throw new Error('Needs p5.Color or pixel array as argument.')
      },
      n.prototype.saturation = function (t) {
        if (t instanceof n.Color || t instanceof Array) return this.color(t)._getSaturation();
        throw new Error('Needs p5.Color or pixel array as argument.')
      },
      e.exports = n
    },
    {
      '../core/constants': 48,
      '../core/core': 49,
      './p5.Color': 43
    }
  ],
  43: [
    function (t, e, r) {
      var n = t('../core/core'),
      i = t('../core/constants'),
      o = t('./color_conversion');
      n.Color = function (t, e) {
        if (this.mode = t._colorMode, this.maxes = t._colorMaxes, this.mode !== i.RGB && this.mode !== i.HSL && this.mode !== i.HSB) throw new Error(this.mode + ' is an invalid colorMode.');
        return this._array = n.Color._parseInputs.apply(t, e),
        this.levels = this._array.map(function (t) {
          return Math.round(255 * t)
        }),
        this
      },
      n.Color.prototype.toString = function () {
        var t = this.levels;
        return t[3] = this._array[3],
        'rgba(' + t[0] + ',' + t[1] + ',' + t[2] + ',' + t[3] + ')'
      },
      n.Color.prototype._getAlpha = function () {
        return this._array[3] * this.maxes[this.mode][3]
      },
      n.Color.prototype._getBlue = function () {
        return this._array[2] * this.maxes[i.RGB][2]
      },
      n.Color.prototype._getBrightness = function () {
        return this.hsba || (this.hsba = o._rgbaToHSBA(this._array)),
        this.hsba[2] * this.maxes[i.HSB][2]
      },
      n.Color.prototype._getGreen = function () {
        return this._array[1] * this.maxes[i.RGB][1]
      },
      n.Color.prototype._getHue = function () {
        return this.mode === i.HSB ? (this.hsba || (this.hsba = o._rgbaToHSBA(this._array)), this.hsba[0] * this.maxes[i.HSB][0])  : (this.hsla || (this.hsla = o._rgbaToHSLA(this._array)), this.hsla[0] * this.maxes[i.HSL][0])
      },
      n.Color.prototype._getLightness = function () {
        return this.hsla || (this.hsla = o._rgbaToHSLA(this._array)),
        this.hsla[2] * this.maxes[i.HSL][2]
      },
      n.Color.prototype._getRed = function () {
        return this._array[0] * this.maxes[i.RGB][0]
      },
      n.Color.prototype._getSaturation = function () {
        return this.mode === i.HSB ? (this.hsba || (this.hsba = o._rgbaToHSBA(this._array)), this.hsba[1] * this.maxes[i.HSB][1])  : (this.hsla || (this.hsla = o._rgbaToHSLA(this._array)), this.hsla[1] * this.maxes[i.HSL][1])
      };
      var s = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
      },
      a = /\s*/,
      l = /(\d{1,3})/,
      u = /((?:\d+(?:\.\d+)?)|(?:\.\d+))/,
      h = new RegExp(u.source + '%'),
      c = {
        HEX3: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,
        HEX6: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
        RGB: new RegExp(['^rgb\\(',
        l.source,
        ',',
        l.source,
        ',',
        l.source,
        '\\)$'].join(a.source), 'i'),
        RGB_PERCENT: new RegExp(['^rgb\\(',
        h.source,
        ',',
        h.source,
        ',',
        h.source,
        '\\)$'].join(a.source), 'i'),
        RGBA: new RegExp(['^rgba\\(',
        l.source,
        ',',
        l.source,
        ',',
        l.source,
        ',',
        u.source,
        '\\)$'].join(a.source), 'i'),
        RGBA_PERCENT: new RegExp(['^rgba\\(',
        h.source,
        ',',
        h.source,
        ',',
        h.source,
        ',',
        u.source,
        '\\)$'].join(a.source), 'i'),
        HSL: new RegExp(['^hsl\\(',
        l.source,
        ',',
        h.source,
        ',',
        h.source,
        '\\)$'].join(a.source), 'i'),
        HSLA: new RegExp(['^hsla\\(',
        l.source,
        ',',
        h.source,
        ',',
        h.source,
        ',',
        u.source,
        '\\)$'].join(a.source), 'i'),
        HSB: new RegExp(['^hsb\\(',
        l.source,
        ',',
        h.source,
        ',',
        h.source,
        '\\)$'].join(a.source), 'i'),
        HSBA: new RegExp(['^hsba\\(',
        l.source,
        ',',
        h.source,
        ',',
        h.source,
        ',',
        u.source,
        '\\)$'].join(a.source), 'i')
      };
      n.Color._parseInputs = function () {
        var t = arguments.length,
        e = this._colorMode,
        r = this._colorMaxes,
        a = [
        ];
        if (t >= 3) return a[0] = arguments[0] / r[e][0],
        a[1] = arguments[1] / r[e][1],
        a[2] = arguments[2] / r[e][2],
        'number' == typeof arguments[3] ? a[3] = arguments[3] / r[e][3] : a[3] = 1,
        a = a.map(function (t) {
          return Math.max(Math.min(t, 1), 0)
        }),
        e === i.HSL ? o._hslaToRGBA(a)  : e === i.HSB ? o._hsbaToRGBA(a)  : a;
        if (1 === t && 'string' == typeof arguments[0]) {
          var l = arguments[0].trim().toLowerCase();
          if (s[l]) return n.Color._parseInputs.apply(this, [
            s[l]
          ]);
          if (c.HEX3.test(l)) return a = c.HEX3.exec(l).slice(1).map(function (t) {
            return parseInt(t + t, 16) / 255
          }),
          a[3] = 1,
          a;
          if (c.HEX6.test(l)) return a = c.HEX6.exec(l).slice(1).map(function (t) {
            return parseInt(t, 16) / 255;
          }),
          a[3] = 1,
          a;
          if (c.RGB.test(l)) return a = c.RGB.exec(l).slice(1).map(function (t) {
            return t / 255
          }),
          a[3] = 1,
          a;
          if (c.RGB_PERCENT.test(l)) return a = c.RGB_PERCENT.exec(l).slice(1).map(function (t) {
            return parseFloat(t) / 100
          }),
          a[3] = 1,
          a;
          if (c.RGBA.test(l)) return a = c.RGBA.exec(l).slice(1).map(function (t, e) {
            return 3 === e ? parseFloat(t)  : t / 255
          });
          if (c.RGBA_PERCENT.test(l)) return a = c.RGBA_PERCENT.exec(l).slice(1).map(function (t, e) {
            return 3 === e ? parseFloat(t)  : parseFloat(t) / 100
          });
          if (c.HSL.test(l) ? (a = c.HSL.exec(l).slice(1).map(function (t, e) {
            return 0 === e ? parseInt(t, 10) / 360 : parseInt(t, 10) / 100
          }), a[3] = 1)  : c.HSLA.test(l) && (a = c.HSLA.exec(l).slice(1).map(function (t, e) {
            return 0 === e ? parseInt(t, 10) / 360 : 3 === e ? parseFloat(t)  : parseInt(t, 10) / 100
          })), a.length) return o._hslaToRGBA(a);
          if (c.HSB.test(l) ? (a = c.HSB.exec(l).slice(1).map(function (t, e) {
            return 0 === e ? parseInt(t, 10) / 360 : parseInt(t, 10) / 100
          }), a[3] = 1)  : c.HSBA.test(l) && (a = c.HSBA.exec(l).slice(1).map(function (t, e) {
            return 0 === e ? parseInt(t, 10) / 360 : 3 === e ? parseFloat(t)  : parseInt(t, 10) / 100
          })), a.length) return o._hsbaToRGBA(a);
          a = [
            1,
            1,
            1,
            1
          ]
        } else {
          if (1 !== t && 2 !== t || 'number' != typeof arguments[0]) throw new Error(arguments + 'is not a valid color representation.');
          a[0] = arguments[0] / r[e][2],
          a[1] = arguments[0] / r[e][2],
          a[2] = arguments[0] / r[e][2],
          'number' == typeof arguments[1] ? a[3] = arguments[1] / r[e][3] : a[3] = 1,
          a = a.map(function (t) {
            return Math.max(Math.min(t, 1), 0)
          })
        }
        return a
      },
      e.exports = n.Color
    },
    {
      '../core/constants': 48,
      '../core/core': 49,
      './color_conversion': 41
    }
  ],
  44: [
    function (t, e, r) {
      'use strict';
      var n = t('../core/core'),
      i = t('../core/constants');
      t('./p5.Color'),
      n.prototype.background = function () {
        return arguments[0] instanceof n.Image ? this.image(arguments[0], 0, 0, this.width, this.height)  : this._renderer.background.apply(this._renderer, arguments),
        this
      },
      n.prototype.clear = function () {
        return this._renderer.clear(),
        this
      },
      n.prototype.colorMode = function () {
        if (arguments[0] === i.RGB || arguments[0] === i.HSB || arguments[0] === i.HSL) {
          this._renderer._colorMode = arguments[0];
          var t = this._renderer._colorMaxes[this._renderer._colorMode];
          2 === arguments.length ? (t[0] = arguments[1], t[1] = arguments[1], t[2] = arguments[1], t[3] = arguments[1])  : 4 === arguments.length ? (t[0] = arguments[1], t[1] = arguments[2], t[2] = arguments[3])  : 5 === arguments.length && (t[0] = arguments[1], t[1] = arguments[2], t[2] = arguments[3], t[3] = arguments[4])
        }
        return this
      },
      n.prototype.fill = function () {
        return this._renderer._setProperty('_fillSet', !0),
        this._renderer._setProperty('_doFill', !0),
        this._renderer.fill.apply(this._renderer, arguments),
        this
      },
      n.prototype.noFill = function () {
        return this._renderer._setProperty('_doFill', !1),
        this
      },
      n.prototype.noStroke = function () {
        return this._renderer._setProperty('_doStroke', !1),
        this
      },
      n.prototype.stroke = function () {
        return this._renderer._setProperty('_strokeSet', !0),
        this._renderer._setProperty('_doStroke', !0),
        this._renderer.stroke.apply(this._renderer, arguments),
        this
      },
      e.exports = n
    },
    {
      '../core/constants': 48,
      '../core/core': 49,
      './p5.Color': 43
    }
  ],
  45: [
    function (t, e, r) {
      'use strict';
      var n = t('./core'),
      i = t('./constants');
      t('./error_helpers'),
      n.prototype.arc = function (t, e, r, n, o, s, a) {
        for (var l = new Array(arguments.length), u = 0; u < l.length; ++u) l[u] = arguments[u];
        if (!this._renderer._doStroke && !this._renderer._doFill) return this;
        for (this._angleMode === i.DEGREES && (o = this.radians(o), s = this.radians(s)); o < 0; ) o += i.TWO_PI;
        for (; s < 0; ) s += i.TWO_PI;
        return o %= i.TWO_PI,
        s %= i.TWO_PI,
        s === o && (s += i.TWO_PI),
        o = o <= i.HALF_PI ? Math.atan(r / n * Math.tan(o))  : o > i.HALF_PI && o <= 3 * i.HALF_PI ? Math.atan(r / n * Math.tan(o)) + i.PI : Math.atan(r / n * Math.tan(o)) + i.TWO_PI,
        s = s <= i.HALF_PI ? Math.atan(r / n * Math.tan(s))  : s > i.HALF_PI && s <= 3 * i.HALF_PI ? Math.atan(r / n * Math.tan(s)) + i.PI : Math.atan(r / n * Math.tan(s)) + i.TWO_PI,
        o > s && (s += i.TWO_PI),
        r = Math.abs(r),
        n = Math.abs(n),
        this._renderer.arc(t, e, r, n, o, s, a),
        this
      },
      n.prototype.ellipse = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        return this._renderer.isP3D ? (t[3] < 0 && (t[3] = Math.abs(t[3])), t[4] < 0 && (t[4] = Math.abs(t[4])))  : (t[2] < 0 && (t[2] = Math.abs(t[2])), t[3] < 0 && (t[3] = Math.abs(t[3]))),
        this._renderer._doStroke || this._renderer._doFill ? (this._renderer.isP3D ? this._renderer.ellipse(t)  : this._renderer.ellipse(t[0], t[1], t[2], t[3]), this)  : this
      },
      n.prototype.line = function () {
        if (!this._renderer._doStroke) return this;
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        return this._renderer.isP3D ? this._renderer.line(t[0], t[1], t[2], t[3], t[4], t[5])  : this._renderer.line(t[0], t[1], t[2], t[3]),
        this
      },
      n.prototype.point = function () {
        if (!this._renderer._doStroke) return this;
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        return this._renderer.isP3D ? this._renderer.point(t[0], t[1], t[2])  : this._renderer.point(t[0], t[1]),
        this
      },
      n.prototype.quad = function () {
        if (!this._renderer._doStroke && !this._renderer._doFill) return this;
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        return this._renderer.isP3D ? this._renderer.quad(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11])  : this._renderer.quad(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]),
        this
      },
      n.prototype.rect = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        if (this._renderer.isP3D ? (t[3] < 0 && (t[3] = Math.abs(t[3])), t[4] < 0 && (t[4] = Math.abs(t[4])))  : (t[2] < 0 && (t[2] = Math.abs(t[2])), t[3] < 0 && (t[3] = Math.abs(t[3]))), this._renderer._doStroke || this._renderer._doFill) return this._renderer.rect(t),
        this
      },
      n.prototype.triangle = function () {
        if (!this._renderer._doStroke && !this._renderer._doFill) return this;
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        return this._renderer.isP3D ? this._renderer.triangle(t)  : this._renderer.triangle(t[0], t[1], t[2], t[3], t[4], t[5]),
        this
      },
      e.exports = n
    },
    {
      './constants': 48,
      './core': 49,
      './error_helpers': 52
    }
  ],
  46: [
    function (t, e, r) {
      'use strict';
      var n = t('./core'),
      i = t('./constants');
      n.prototype.ellipseMode = function (t) {
        return t !== i.CORNER && t !== i.CORNERS && t !== i.RADIUS && t !== i.CENTER || (this._renderer._ellipseMode = t),
        this
      },
      n.prototype.noSmooth = function () {
        return this._renderer.noSmooth(),
        this
      },
      n.prototype.rectMode = function (t) {
        return t !== i.CORNER && t !== i.CORNERS && t !== i.RADIUS && t !== i.CENTER || (this._renderer._rectMode = t),
        this
      },
      n.prototype.smooth = function () {
        return this._renderer.smooth(),
        this
      },
      n.prototype.strokeCap = function (t) {
        return t !== i.ROUND && t !== i.SQUARE && t !== i.PROJECT || this._renderer.strokeCap(t),
        this
      },
      n.prototype.strokeJoin = function (t) {
        return t !== i.ROUND && t !== i.BEVEL && t !== i.MITER || this._renderer.strokeJoin(t),
        this
      },
      n.prototype.strokeWeight = function (t) {
        return this._renderer.strokeWeight(t),
        this
      },
      e.exports = n
    },
    {
      './constants': 48,
      './core': 49
    }
  ],
  47: [
    function (t, e, r) {
      var n = t('./constants');
      e.exports = {
        modeAdjust: function (t, e, r, i, o) {
          return o === n.CORNER ? {
            x: t,
            y: e,
            w: r,
            h: i
          }
           : o === n.CORNERS ? {
            x: t,
            y: e,
            w: r - t,
            h: i - e
          }
           : o === n.RADIUS ? {
            x: t - r,
            y: e - i,
            w: 2 * r,
            h: 2 * i
          }
           : o === n.CENTER ? {
            x: t - 0.5 * r,
            y: e - 0.5 * i,
            w: r,
            h: i
          }
           : void 0
        },
        arcModeAdjust: function (t, e, r, i, o) {
          return o === n.CORNER ? {
            x: t + 0.5 * r,
            y: e + 0.5 * i,
            w: r,
            h: i
          }
           : o === n.CORNERS ? {
            x: t,
            y: e,
            w: r + t,
            h: i + e
          }
           : o === n.RADIUS ? {
            x: t,
            y: e,
            w: 2 * r,
            h: 2 * i
          }
           : o === n.CENTER ? {
            x: t,
            y: e,
            w: r,
            h: i
          }
           : void 0
        }
      }
    },
    {
      './constants': 48
    }
  ],
  48: [
    function (t, e, r) {
      var n = Math.PI;
      e.exports = {
        P2D: 'p2d',
        WEBGL: 'webgl',
        ARROW: 'default',
        CROSS: 'crosshair',
        HAND: 'pointer',
        MOVE: 'move',
        TEXT: 'text',
        WAIT: 'wait',
        HALF_PI: n / 2,
        PI: n,
        QUARTER_PI: n / 4,
        TAU: 2 * n,
        TWO_PI: 2 * n,
        DEGREES: 'degrees',
        RADIANS: 'radians',
        CORNER: 'corner',
        CORNERS: 'corners',
        RADIUS: 'radius',
        RIGHT: 'right',
        LEFT: 'left',
        CENTER: 'center',
        TOP: 'top',
        BOTTOM: 'bottom',
        BASELINE: 'alphabetic',
        POINTS: 0,
        LINES: 1,
        LINE_STRIP: 3,
        LINE_LOOP: 2,
        TRIANGLES: 4,
        TRIANGLE_FAN: 6,
        TRIANGLE_STRIP: 5,
        QUADS: 'quads',
        QUAD_STRIP: 'quad_strip',
        CLOSE: 'close',
        OPEN: 'open',
        CHORD: 'chord',
        PIE: 'pie',
        PROJECT: 'square',
        SQUARE: 'butt',
        ROUND: 'round',
        BEVEL: 'bevel',
        MITER: 'miter',
        RGB: 'rgb',
        HSB: 'hsb',
        HSL: 'hsl',
        AUTO: 'auto',
        ALT: 18,
        BACKSPACE: 8,
        CONTROL: 17,
        DELETE: 46,
        DOWN_ARROW: 40,
        ENTER: 13,
        ESCAPE: 27,
        LEFT_ARROW: 37,
        OPTION: 18,
        RETURN: 13,
        RIGHT_ARROW: 39,
        SHIFT: 16,
        TAB: 9,
        UP_ARROW: 38,
        BLEND: 'normal',
        ADD: 'lighter',
        DARKEST: 'darken',
        LIGHTEST: 'lighten',
        DIFFERENCE: 'difference',
        EXCLUSION: 'exclusion',
        MULTIPLY: 'multiply',
        SCREEN: 'screen',
        REPLACE: 'source-over',
        OVERLAY: 'overlay',
        HARD_LIGHT: 'hard-light',
        SOFT_LIGHT: 'soft-light',
        DODGE: 'color-dodge',
        BURN: 'color-burn',
        THRESHOLD: 'threshold',
        GRAY: 'gray',
        OPAQUE: 'opaque',
        INVERT: 'invert',
        POSTERIZE: 'posterize',
        DILATE: 'dilate',
        ERODE: 'erode',
        BLUR: 'blur',
        NORMAL: 'normal',
        ITALIC: 'italic',
        BOLD: 'bold',
        _DEFAULT_TEXT_FILL: '#000000',
        _DEFAULT_LEADMULT: 1.25,
        _CTX_MIDDLE: 'middle',
        LINEAR: 'linear',
        QUADRATIC: 'quadratic',
        BEZIER: 'bezier',
        CURVE: 'curve',
        _DEFAULT_STROKE: '#000000',
        _DEFAULT_FILL: '#FFFFFF'
      }
    },
    {
    }
  ],
  49: [
    function (t, e, r) {
      'use strict';
      t('./shim');
      var n = t('./constants'),
      i = function (t, e, r) {
        2 === arguments.length && 'boolean' == typeof e && (r = e, e = void 0),
        this._setupDone = !1,
        this._pixelDensity = Math.ceil(window.devicePixelRatio) || 1,
        this._userNode = e,
        this._curElement = null,
        this._elements = [
        ],
        this._requestAnimId = 0,
        this._preloadCount = 0,
        this._isGlobal = !1,
        this._loop = !0,
        this._styles = [
        ],
        this._defaultCanvasSize = {
          width: 100,
          height: 100
        },
        this._events = {
          mousemove: null,
          mousedown: null,
          mouseup: null,
          dragend: null,
          dragover: null,
          click: null,
          mouseover: null,
          mouseout: null,
          keydown: null,
          keyup: null,
          keypress: null,
          touchstart: null,
          touchmove: null,
          touchend: null,
          resize: null,
          blur: null
        },
        this._events.wheel = null,
        this._loadingScreenId = 'p5_loading',
        window.DeviceOrientationEvent && (this._events.deviceorientation = null),
        window.DeviceMotionEvent && !window._isNodeWebkit && (this._events.devicemotion = null),
        this._start = function () {
          this._userNode && 'string' == typeof this._userNode && (this._userNode = document.getElementById(this._userNode)),
          this.createCanvas(this._defaultCanvasSize.width, this._defaultCanvasSize.height, 'p2d', !0);
          var t = this.preload || window.preload;
          if (t) {
            var e = document.getElementById(this._loadingScreenId);
            if (!e) {
              e = document.createElement('div'),
              e.innerHTML = 'Loading...',
              e.style.position = 'absolute',
              e.id = this._loadingScreenId;
              var r = this._userNode || document.body;
              r.appendChild(e)
            }
            for (var n in this._preloadMethods) {
              this._preloadMethods[n] = this._preloadMethods[n] || i;
              var o = this._preloadMethods[n];
              o !== i.prototype && o !== i || (o = this._isGlobal ? window : this),
              this._registeredPreloadMethods[n] = o[n],
              o[n] = this._wrapPreload(o, n)
            }
            t(),
            this._runIfPreloadsAreDone()
          } else this._setup(),
          this._runFrames(),
          this._draw()
        }.bind(this),
        this._runIfPreloadsAreDone = function () {
          var t = this._isGlobal ? window : this;
          if (0 === t._preloadCount) {
            var e = document.getElementById(t._loadingScreenId);
            e && e.parentNode.removeChild(e),
            t._setup(),
            t._runFrames(),
            t._draw()
          }
        },
        this._decrementPreload = function () {
          var t = this._isGlobal ? window : this;
          t._setProperty('_preloadCount', t._preloadCount - 1),
          t._runIfPreloadsAreDone()
        },
        this._wrapPreload = function (t, e) {
          return function () {
            this._incrementPreload();
            var r = Array.prototype.slice.call(arguments);
            return r.push(this._decrementPreload.bind(this)),
            this._registeredPreloadMethods[e].apply(t, r)
          }.bind(this)
        },
        this._incrementPreload = function () {
          var t = this._isGlobal ? window : this;
          t._setProperty('_preloadCount', t._preloadCount + 1)
        },
        this._setup = function () {
          var t = this._isGlobal ? window : this;
          if ('function' == typeof t.preload) for (var e in this._preloadMethods) t[e] = this._preloadMethods[e][e],
          t[e] && this && (t[e] = t[e].bind(this));
          'function' == typeof t.setup && t.setup();
          for (var r = document.getElementsByTagName('canvas'), n = 0; n < r.length; n++) {
            var i = r[n];
            'true' === i.dataset.hidden && (i.style.visibility = '', delete i.dataset.hidden)
          }
          this._setupDone = !0
        }.bind(this),
        this._draw = function () {
          var t = window.performance.now(),
          e = t - this._lastFrameTime,
          r = 1000 / this._targetFrameRate,
          n = 5;
          (!this._loop || e >= r - n) && (this._renderer.isP3D && this._renderer._update(), this._setProperty('frameCount', this.frameCount + 1), this._updateMouseCoords(), this._updateTouchCoords(), this.redraw(), this._frameRate = 1000 / (t - this._lastFrameTime), this._lastFrameTime = t),
          this._loop && (this._requestAnimId = window.requestAnimationFrame(this._draw))
        }.bind(this),
        this._runFrames = function () {
          this._updateInterval && clearInterval(this._updateInterval)
        }.bind(this),
        this._setProperty = function (t, e) {
          this[t] = e,
          this._isGlobal && (window[t] = e)
        }.bind(this),
        this.remove = function () {
          if (this._curElement) {
            this._loop = !1,
            this._requestAnimId && window.cancelAnimationFrame(this._requestAnimId);
            for (var t in this._events) window.removeEventListener(t, this._events[t]);
            for (var e = 0; e < this._elements.length; e++) {
              var r = this._elements[e];
              r.elt.parentNode && r.elt.parentNode.removeChild(r.elt);
              for (var n in r._events) r.elt.removeEventListener(n, r._events[n])
            }
            var o = this;
            if (this._registeredMethods.remove.forEach(function (t) {
              'undefined' != typeof t && t.call(o)
            }), this._isGlobal) {
              for (var s in i.prototype) try {
                delete window[s]
              } catch (t) {
                window[s] = void 0
              }
              for (var a in this) if (this.hasOwnProperty(a)) try {
                delete window[a]
              } catch (t) {
                window[a] = void 0
              }
            }
          }
        }.bind(this),
        this._registeredMethods.init.forEach(function (t) {
          'undefined' != typeof t && t.call(this)
        }, this);
        var n = this._createFriendlyGlobalFunctionBinder();
        if (t) t(this);
         else {
          this._isGlobal = !0;
          for (var o in i.prototype) if ('function' == typeof i.prototype[o]) {
            var s = o.substring(2);
            this._events.hasOwnProperty(s) || n(o, i.prototype[o].bind(this))
          } else n(o, i.prototype[o]);
          for (var a in this) this.hasOwnProperty(a) && n(a, this[a])
        }
        for (var l in this._events) {
          var u = this['_on' + l];
          if (u) {
            var h = u.bind(this);
            window.addEventListener(l, h),
            this._events[l] = h
          }
        }
        var c = function () {
          this._setProperty('focused', !0)
        }.bind(this),
        p = function () {
          this._setProperty('focused', !1)
        }.bind(this);
        window.addEventListener('focus', c),
        window.addEventListener('blur', p),
        this.registerMethod('remove', function () {
          window.removeEventListener('focus', c),
          window.removeEventListener('blur', p)
        }),
        r ? this._start()  : 'complete' === document.readyState ? this._start()  : window.addEventListener('load', this._start.bind(this), !1)
      };
      for (var o in n) i.prototype[o] = n[o];
      i.prototype._preloadMethods = {
        loadJSON: i.prototype,
        loadImage: i.prototype,
        loadStrings: i.prototype,
        loadXML: i.prototype,
        loadShape: i.prototype,
        loadTable: i.prototype,
        loadFont: i.prototype
      },
      i.prototype._registeredMethods = {
        init: [
        ],
        pre: [
        ],
        post: [
        ],
        remove: [
        ]
      },
      i.prototype._registeredPreloadMethods = {
      },
      i.prototype.registerPreloadMethod = function (t, e) {
        i.prototype._preloadMethods.hasOwnProperty(t) || (i.prototype._preloadMethods[t] = e)
      },
      i.prototype.registerMethod = function (t, e) {
        i.prototype._registeredMethods.hasOwnProperty(t) || (i.prototype._registeredMethods[t] = [
        ]),
        i.prototype._registeredMethods[t].push(e)
      },
      i.prototype._createFriendlyGlobalFunctionBinder = function (t) {
        t = t || {
        };
        var e = t.globalObject || window,
        r = t.log || console.log.bind(console),
        n = {
          print: !0
        };
        return function (t, o) {
          if ('undefined' != typeof IS_MINIFIED || 'function' != typeof o || t in i.prototype._preloadMethods) e[t] = o;
           else try {
            if (t in e && !(t in n)) throw new Error('global "' + t + '" already exists');
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return o
              },
              set: function (n) {
                Object.defineProperty(e, t, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                  writable: !0
                }),
                r('You just changed the value of "' + t + '", which was a p5 function. This could cause problems later if you\'re not careful.')
              }
            })
          } catch (n) {
            r('p5 had problems creating the global function "' + t + '", possibly because your code is already using that name as a variable. You may want to rename your variable to something else.'),
            e[t] = o
          }
        }
      },
      e.exports = i
    },
    {
      './constants': 48,
      './shim': 58
    }
  ],
  50: [
    function (t, e, r) {
      'use strict';
      var n = t('./core');
      t('./error_helpers');
      var i = 20,
      o = 20;
      n.prototype.bezier = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        return this._renderer.isP3D ? this._validateParameters('bezier', t, [
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number'
        ])  : this._validateParameters('bezier', t, [
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number'
        ]),
        this._renderer._doStroke ? (this._renderer.isP3D ? (t.push(i), this._renderer.bezier(t))  : this._renderer.bezier(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]), this)  : this
      },
      n.prototype.bezierDetail = function (t) {
        return i = t,
        this
      },
      n.prototype.bezierPoint = function (t, e, r, n, i) {
        var o = 1 - i;
        return Math.pow(o, 3) * t + 3 * Math.pow(o, 2) * i * e + 3 * o * Math.pow(i, 2) * r + Math.pow(i, 3) * n
      },
      n.prototype.bezierTangent = function (t, e, r, n, i) {
        var o = 1 - i;
        return 3 * n * Math.pow(i, 2) - 3 * r * Math.pow(i, 2) + 6 * r * o * i - 6 * e * o * i + 3 * e * Math.pow(o, 2) - 3 * t * Math.pow(o, 2)
      },
      n.prototype.curve = function () {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        return this._renderer.isP3D ? this._validateParameters('curve', t, [
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number'
        ])  : this._validateParameters('curve', t, [
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number',
          'Number'
        ]),
        this._renderer._doStroke ? (this._renderer.isP3D ? (t.push(o), this._renderer.curve(t))  : this._renderer.curve(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]), this)  : this
      },
      n.prototype.curveDetail = function (t) {
        return o = t,
        this
      },
      n.prototype.curveTightness = function (t) {
        this._renderer._curveTightness = t
      },
      n.prototype.curvePoint = function (t, e, r, n, i) {
        var o = i * i * i,
        s = i * i,
        a = - 0.5 * o + s - 0.5 * i,
        l = 1.5 * o - 2.5 * s + 1,
        u = - 1.5 * o + 2 * s + 0.5 * i,
        h = 0.5 * o - 0.5 * s;
        return t * a + e * l + r * u + n * h
      },
      n.prototype.curveTangent = function (t, e, r, n, i) {
        var o = i * i,
        s = - 3 * o / 2 + 2 * i - 0.5,
        a = 9 * o / 2 - 5 * i,
        l = - 9 * o / 2 + 4 * i + 0.5,
        u = 3 * o / 2 - i;
        return t * s + e * a + r * l + n * u
      },
      e.exports = n
    },
    {
      './core': 49,
      './error_helpers': 52
    }
  ],
  51: [
    function (t, e, r) {
      'use strict';
      function n(t) {
        var e = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
        if (!e) throw new Error('Fullscreen not enabled in this browser.');
        t.requestFullscreen ? t.requestFullscreen()  : t.mozRequestFullScreen ? t.mozRequestFullScreen()  : t.webkitRequestFullscreen ? t.webkitRequestFullscreen()  : t.msRequestFullscreen && t.msRequestFullscreen()
      }
      function i() {
        document.exitFullscreen ? document.exitFullscreen()  : document.mozCancelFullScreen ? document.mozCancelFullScreen()  : document.webkitExitFullscreen ? document.webkitExitFullscreen()  : document.msExitFullscreen && document.msExitFullscreen()
      }
      var o = t('./core'),
      s = t('./constants'),
      a = [
        s.ARROW,
        s.CROSS,
        s.HAND,
        s.MOVE,
        s.TEXT,
        s.WAIT
      ];
      o.prototype._frameRate = 0,
      o.prototype._lastFrameTime = window.performance.now(),
      o.prototype._targetFrameRate = 60,
      window.console && console.log ? o.prototype.print = function (t) {
        try {
          var e = JSON.parse(JSON.stringify(t));
          console.log(e)
        } catch (e) {
          console.log(t)
        }
      }
       : o.prototype.print = function () {
      },
      o.prototype.println = o.prototype.print,
      o.prototype.frameCount = 0,
      o.prototype.focused = document.hasFocus(),
      o.prototype.cursor = function (t, e, r) {
        var n = 'auto',
        i = this._curElement.elt;
        if (a.indexOf(t) > - 1) n = t;
         else if ('string' == typeof t) {
          var o = '';
          e && r && 'number' == typeof e && 'number' == typeof r && (o = e + ' ' + r),
          n = 'http://' !== t.substring(0, 6) ? 'url(' + t + ') ' + o + ', auto' : /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(t) ? 'url(' + t + ') ' + o + ', auto' : t
        }
        i.style.cursor = n
      },
      o.prototype.frameRate = function (t) {
        return 'number' != typeof t || t <= 0 ? this._frameRate : (this._setProperty('_targetFrameRate', t), this._runFrames(), this)
      },
      o.prototype.getFrameRate = function () {
        return this.frameRate()
      },
      o.prototype.setFrameRate = function (t) {
        return this.frameRate(t)
      },
      o.prototype.noCursor = function () {
        this._curElement.elt.style.cursor = 'none'
      },
      o.prototype.displayWidth = screen.width,
      o.prototype.displayHeight = screen.height,
      o.prototype.windowWidth = window.innerWidth,
      o.prototype.windowHeight = window.innerHeight,
      o.prototype._onresize = function (t) {
        this._setProperty('windowWidth', window.innerWidth),
        this._setProperty('windowHeight', window.innerHeight);
        var e,
        r = this._isGlobal ? window : this;
        'function' == typeof r.windowResized && (e = r.windowResized(t), void 0 === e || e || t.preventDefault())
      },
      o.prototype.width = 0,
      o.prototype.height = 0,
      o.prototype.fullscreen = function (t) {
        return 'undefined' == typeof t ? document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement : void (t ? n(document.documentElement)  : i())
      },
      o.prototype.pixelDensity = function (t) {
        return 'number' != typeof t ? this._pixelDensity : (this._pixelDensity = t, void this.resizeCanvas(this.width, this.height, !0))
      },
      o.prototype.displayDensity = function () {
        return window.devicePixelRatio
      },
      o.prototype.getURL = function () {
        return location.href
      },
      o.prototype.getURLPath = function () {
        return location.pathname.split('/').filter(function (t) {
          return '' !== t
        })
      },
      o.prototype.getURLParams = function () {
        for (var t, e = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, r = {
        }; null != (t = e.exec(location.search)); ) t.index === e.lastIndex && e.lastIndex++,
        r[t[1]] = t[2];
        return r
      },
      e.exports = o
    },
    {
      './constants': 48,
      './core': 49
    }
  ],
  52: [
    function (t, e, r) {
      'use strict';
      function n(t, e, r) {
        if (t.match(/^p5\./)) {
          var n = t.split('.');
          return r instanceof l[n[1]]
        }
        return 'Boolean' === t || t.toLowerCase() === e || y.indexOf(t) > - 1 && g(r)
      }
      function i(t, e, r) {
        u && (o(), u = !1),
        'undefined' === d(r) ? r = '#B40033' : 'number' === d(r) && (r = w[r])
      }
      function o() {
        var t = 'transparent',
        e = '#ED225D',
        r = '#ED225D',
        n = 'white';
        console.log('%c    _ \n /\\| |/\\ \n \\ ` \' /  \n / , . \\  \n \\/|_|\\/ \n\n%c> p5.js says: Welcome! This is your friendly debugger. To turn me off switch to using “p5.min.js”.', 'background-color:' + t + ';color:' + e + ';', 'background-color:' + r + ';color:' + n + ';')
      }
      function s() {
        var e = {
        },
        r = function (t) {
          return Object.getOwnPropertyNames(t).filter(function (t) {
            return '_' !== t[0] && (!(t in e) && (e[t] = !0, !0))
          }).map(function (e) {
            var r;
            return r = 'function' == typeof t[e] ? 'function' : e === e.toUpperCase() ? 'constant' : 'variable',
            {
              name: e,
              type: r
            }
          })
        };
        S = [
        ].concat(r(l.prototype), r(t('./constants'))),
        S.sort(function (t, e) {
          return e.name.length - t.name.length
        })
      }
      function a(t, e) {
        e || (e = console.log.bind(console)),
        S || s(),
        S.some(function (r) {
          if (t.message && t.message.indexOf(r.name) !== - 1) return e('%cDid you just try to use p5.js\'s ' + r.name + ('function' === r.type ? '() ' : ' ') + r.type + '? If so, you may want to move it into your sketch\'s setup() function.\n\nFor more details, see: ' + C, 'color: #B40033'),
          !0
        })
      }
      for (var l = t('./core'), u = !1, h = {
      }, c = h.toString, p = [
        'Boolean',
        'Number',
        'String',
        'Function',
        'Array',
        'Date',
        'RegExp',
        'Object',
        'Error'
      ], f = 0; f < p.length; f++) h['[object ' + p[f] + ']'] = p[f].toLowerCase();
      var d = function (t) {
        return null == t ? t + '' : 'object' == typeof t || 'function' == typeof t ? h[c.call(t)] || 'object' : typeof t
      },
      m = Array.isArray || function (t) {
        return 'array' === d(t)
      },
      g = function (t) {
        return !m(t) && t - parseFloat(t) + 1 >= 0
      },
      y = [
        'Number',
        'Integer',
        'Number/Constant'
      ],
      v = 0,
      _ = 1,
      x = 2,
      b = 3,
      w = [
        '#2D7BB6',
        '#EE9900',
        '#4DB200',
        '#C83C00'
      ];
      l.prototype._validateParameters = function (t, e, r) {
        m(r[0]) || (r = [
          r
        ]);
        for (var o, s = Math.abs(e.length - r[0].length), a = 0, l = 1, u = r.length; l < u; l++) {
          var h = Math.abs(e.length - r[l].length);
          h <= s && (a = l, s = h)
        }
        var c = 'X';
        s > 0 && (o = 'You wrote ' + t + '(', e.length > 0 && (o += c + Array(e.length).join(',' + c)), o += '). ' + t + ' was expecting ' + r[a].length + ' parameters. Try ' + t + '(', r[a].length > 0 && (o += c + Array(r[a].length).join(',' + c)), o += ').', r.length > 1 && (o += ' ' + t + ' takes different numbers of parameters depending on what you want to do. Click this link to learn more: '), i(o, t, v));
        for (var p = 0; p < r.length; p++) for (var f = 0; f < r[p].length && f < e.length; f++) {
          var g = r[p][f],
          y = d(e[f]);
          'undefined' === y || null === y ? i('It looks like ' + t + ' received an empty variable in spot #' + (f + 1) + '. If not intentional, this is often a problem with scope: [link to scope].', t, _)  : '*' === g || n(g, y, e[f]) || (o = t + ' was expecting a ' + g.toLowerCase() + ' for parameter #' + (f + 1) + ', received ', o += 'string' === y ? '"' + e[f] + '"' : e[f], o += ' instead.', r.length > 1 && (o += ' ' + t + ' takes different numbers of parameters depending on what you want to do. Click this link to learn more:'), i(o, t, x))
        }
      },
      l.prototype._validateParameters = function () {
        return !0
      };
      var T = {
        0: {
          fileType: 'image',
          method: 'loadImage',
          message: ' hosting the image online,'
        },
        1: {
          fileType: 'XML file',
          method: 'loadXML'
        },
        2: {
          fileType: 'table file',
          method: 'loadTable'
        },
        3: {
          fileType: 'text file',
          method: 'loadStrings'
        }
      };
      l._friendlyFileLoadError = function (t, e) {
        var r = T[t],
        n = 'It looks like there was a problem loading your ' + r.fileType + '. Try checking if the file path%c [' + e + '] %cis correct,' + (r.message || '') + ' or running a local server.';
        i(n, r.method, b)
      };
      var S = null,
      C = 'https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup';
      l.prototype._helpForMisusedAtTopLevelCode = a,
      'complete' !== document.readyState && (window.addEventListener('error', a, !1), window.addEventListener('load', function () {
        window.removeEventListener('error', a, !1)
      })),
      e.exports = l
    },
    {
      './constants': 48,
      './core': 49
    }
  ],
  53: [
    function (t, e, r) {
      function n(t, e, r) {
        var n = e.bind(r);
        r.elt.addEventListener(t, n, !1),
        r._events[t] = n
      }
      var i = t('./core');
      i.Element = function (t, e) {
        this.elt = t,
        this._pInst = e,
        this._events = {
        },
        this.width = this.elt.offsetWidth,
        this.height = this.elt.offsetHeight
      },
      i.Element.prototype.parent = function (t) {
        return 0 === arguments.length ? this.elt.parentNode : ('string' == typeof t ? ('#' === t[0] && (t = t.substring(1)), t = document.getElementById(t))  : t instanceof i.Element && (t = t.elt), t.appendChild(this.elt), this)
      },
      i.Element.prototype.id = function (t) {
        return 0 === arguments.length ? this.elt.id : (this.elt.id = t, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this)
      },
      i.Element.prototype.class = function (t) {
        return 0 === arguments.length ? this.elt.className : (this.elt.className = t, this)
      },
      i.Element.prototype.mousePressed = function (t) {
        return n('mousedown', t, this),
        n('touchstart', t, this),
        this
      },
      i.Element.prototype.mouseWheel = function (t) {
        return n('wheel', t, this),
        this
      },
      i.Element.prototype.mouseReleased = function (t) {
        return n('mouseup', t, this),
        n('touchend', t, this),
        this
      },
      i.Element.prototype.mouseClicked = function (t) {
        return n('click', t, this),
        this
      },
      i.Element.prototype.mouseMoved = function (t) {
        return n('mousemove', t, this),
        n('touchmove', t, this),
        this
      },
      i.Element.prototype.mouseOver = function (t) {
        return n('mouseover', t, this),
        this
      },
      i.Element.prototype.changed = function (t) {
        return n('change', t, this),
        this
      },
      i.Element.prototype.input = function (t) {
        return n('input', t, this),
        this
      },
      i.Element.prototype.mouseOut = function (t) {
        return n('mouseout', t, this),
        this
      },
      i.Element.prototype.touchStarted = function (t) {
        return n('touchstart', t, this),
        n('mousedown', t, this),
        this
      },
      i.Element.prototype.touchMoved = function (t) {
        return n('touchmove', t, this),
        n('mousemove', t, this),
        this
      },
      i.Element.prototype.touchEnded = function (t) {
        return n('touchend', t, this),
        n('mouseup', t, this),
        this
      },
      i.Element.prototype.dragOver = function (t) {
        return n('dragover', t, this),
        this
      },
      i.Element.prototype.dragLeave = function (t) {
        return n('dragleave', t, this),
        this
      },
      i.Element.prototype.drop = function (t, e) {
        function r(e) {
          var r = new i.File(e);
          return function (e) {
            r.data = e.target.result,
            t(r)
          }
        }
        return window.File && window.FileReader && window.FileList && window.Blob ? (n('dragover', function (t) {
          t.stopPropagation(),
          t.preventDefault()
        }, this), n('dragleave', function (t) {
          t.stopPropagation(),
          t.preventDefault()
        }, this), arguments.length > 1 && n('drop', e, this), n('drop', function (t) {
          t.stopPropagation(),
          t.preventDefault();
          for (var e = t.dataTransfer.files, n = 0; n < e.length; n++) {
            var i = e[n],
            o = new FileReader;
            o.onload = r(i),
            i.type.indexOf('text') > - 1 ? o.readAsText(i)  : o.readAsDataURL(i)
          }
        }, this))  : console.log('The File APIs are not fully supported in this browser.'),
        this
      },
      i.Element.prototype._setProperty = function (t, e) {
        this[t] = e
      },
      e.exports = i.Element
    },
    {
      './core': 49
    }
  ],
  54: [
    function (t, e, r) {
      var n = t('./core'),
      i = t('./constants');
      n.Graphics = function (t, e, r, o) {
        var s = r || i.P2D,
        a = document.createElement('canvas'),
        l = this._userNode || document.body;
        l.appendChild(a),
        n.Element.call(this, a, o, !1),
        this._styles = [
        ],
        this.width = t,
        this.height = e,
        this._pixelDensity = o._pixelDensity,
        s === i.WEBGL ? this._renderer = new n.Renderer3D(a, this, (!1))  : this._renderer = new n.Renderer2D(a, this, (!1)),
        this._renderer.resize(t, e),
        this._renderer._applyDefaults(),
        o._elements.push(this);
        for (var u in n.prototype) this[u] || ('function' == typeof n.prototype[u] ? this[u] = n.prototype[u].bind(this)  : this[u] = n.prototype[u]);
        return this
      },
      n.Graphics.prototype = Object.create(n.Element.prototype),
      e.exports = n.Graphics
    },
    {
      './constants': 48,
      './core': 49
    }
  ],
  55: [
    function (t, e, r) {
      function n(t) {
        var e = 0,
        r = 0;
        if (t.offsetParent) {
          do e += t.offsetLeft,
          r += t.offsetTop;
          while (t = t.offsetParent)
        } else e += t.offsetLeft,
        r += t.offsetTop;
        return [e,
        r]
      }
      var i = t('./core'),
      o = t('../core/constants');
      i.Renderer = function (t, e, r) {
        i.Element.call(this, t, e),
        this.canvas = t,
        this._pInst = e,
        r ? (this._isMainCanvas = !0, this._pInst._setProperty('_curElement', this), this._pInst._setProperty('canvas', this.canvas), this._pInst._setProperty('width', this.width), this._pInst._setProperty('height', this.height))  : (this.canvas.style.display = 'none', this._styles = [
        ]),
        this._textSize = 12,
        this._textLeading = 15,
        this._textFont = 'sans-serif',
        this._textStyle = o.NORMAL,
        this._textAscent = null,
        this._textDescent = null,
        this._rectMode = o.CORNER,
        this._ellipseMode = o.CENTER,
        this._curveTightness = 0,
        this._imageMode = o.CORNER,
        this._tint = null,
        this._doStroke = !0,
        this._doFill = !0,
        this._strokeSet = !1,
        this._fillSet = !1,
        this._colorMode = o.RGB,
        this._colorMaxes = {
          rgb: [
            255,
            255,
            255,
            255
          ],
          hsb: [
            360,
            100,
            100,
            1
          ],
          hsl: [
            360,
            100,
            100,
            1
          ]
        }
      },
      i.Renderer.prototype = Object.create(i.Element.prototype),
      i.Renderer.prototype.resize = function (t, e) {
        this.width = t,
        this.height = e,
        this.elt.width = t * this._pInst._pixelDensity,
        this.elt.height = e * this._pInst._pixelDensity,
        this.elt.style.width = t + 'px',
        this.elt.style.height = e + 'px',
        this._isMainCanvas && (this._pInst._setProperty('width', this.width), this._pInst._setProperty('height', this.height))
      },
      i.Renderer.prototype.textLeading = function (t) {
        return arguments.length && arguments[0] ? (this._setProperty('_textLeading', t), this)  : this._textLeading
      },
      i.Renderer.prototype.textSize = function (t) {
        return arguments.length && arguments[0] ? (this._setProperty('_textSize', t), this._setProperty('_textLeading', t * o._DEFAULT_LEADMULT), this._applyTextProperties())  : this._textSize
      },
      i.Renderer.prototype.textStyle = function (t) {
        return arguments.length && arguments[0] ? (t !== o.NORMAL && t !== o.ITALIC && t !== o.BOLD || this._setProperty('_textStyle', t), this._applyTextProperties())  : this._textStyle
      },
      i.Renderer.prototype.textAscent = function () {
        return null === this._textAscent && this._updateTextMetrics(),
        this._textAscent
      },
      i.Renderer.prototype.textDescent = function () {
        return null === this._textDescent && this._updateTextMetrics(),
        this._textDescent
      },
      i.Renderer.prototype._applyDefaults = function () {
        return this
      },
      i.Renderer.prototype._isOpenType = function (t) {
        return t = t || this._textFont,
        'object' == typeof t && t.font && t.font.supported
      },
      i.Renderer.prototype._updateTextMetrics = function () {
        if (this._isOpenType()) return this._setProperty('_textAscent', this._textFont._textAscent()),
        this._setProperty('_textDescent', this._textFont._textDescent()),
        this;
        var t = document.createElement('span');
        t.style.fontFamily = this._textFont,
        t.style.fontSize = this._textSize + 'px',
        t.innerHTML = 'ABCjgq|';
        var e = document.createElement('div');
        e.style.display = 'inline-block',
        e.style.width = '1px',
        e.style.height = '0px';
        var r = document.createElement('div');
        r.appendChild(t),
        r.appendChild(e),
        r.style.height = '0px',
        r.style.overflow = 'hidden',
        document.body.appendChild(r),
        e.style.verticalAlign = 'baseline';
        var i = n(e),
        o = n(t),
        s = i[1] - o[1];
        e.style.verticalAlign = 'bottom',
        i = n(e),
        o = n(t);
        var a = i[1] - o[1],
        l = a - s;
        return document.body.removeChild(r),
        this._setProperty('_textAscent', s),
        this._setProperty('_textDescent', l),
        this
      },
      e.exports = i.Renderer
    },
    {
      '../core/constants': 48,
      './core': 49
    }
  ],
  56: [
    function (t, e, r) {
      var n = t('./core'),
      i = t('./canvas'),
      o = t('./constants'),
      s = t('../image/filters');
      t('./p5.Renderer');
      var a = 'rgba(0,0,0,0)';
      n.Renderer2D = function (t, e, r) {
        return n.Renderer.call(this, t, e, r),
        this.drawingContext = this.canvas.getContext('2d'),
        this._pInst._setProperty('drawingContext', this.drawingContext),
        this
      },
      n.Renderer2D.prototype = Object.create(n.Renderer.prototype),
      n.Renderer2D.prototype._applyDefaults = function () {
        this.drawingContext.fillStyle = o._DEFAULT_FILL,
        this.drawingContext.strokeStyle = o._DEFAULT_STROKE,
        this.drawingContext.lineCap = o.ROUND,
        this.drawingContext.font = 'normal 12px sans-serif'
      },
      n.Renderer2D.prototype.resize = function (t, e) {
        n.Renderer.prototype.resize.call(this, t, e),
        this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity)
      },
      n.Renderer2D.prototype.background = function () {
        if (this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), arguments[0] instanceof n.Image) this._pInst.image(arguments[0], 0, 0, this.width, this.height);
         else {
          var t = this.drawingContext.fillStyle,
          e = this._pInst.color.apply(this, arguments),
          r = e.toString();
          this.drawingContext.fillStyle = r,
          this.drawingContext.fillRect(0, 0, this.width, this.height),
          this.drawingContext.fillStyle = t
        }
        this.drawingContext.restore()
      },
      n.Renderer2D.prototype.clear = function () {
        this.drawingContext.clearRect(0, 0, this.width, this.height);
      },
      n.Renderer2D.prototype.fill = function () {
        var t = this.drawingContext,
        e = this._pInst.color.apply(this, arguments);
        t.fillStyle = e.toString()
      },
      n.Renderer2D.prototype.stroke = function () {
        var t = this.drawingContext,
        e = this._pInst.color.apply(this, arguments);
        t.strokeStyle = e.toString()
      },
      n.Renderer2D.prototype.image = function (t, e, r, i, o, s, a, l, u) {
        var h;
        try {
          this._tint && (n.MediaElement && t instanceof n.MediaElement && t.loadPixels(), t.canvas && (h = this._getTintedImageCanvas(t))),
          h || (h = t.canvas || t.elt),
          this.drawingContext.drawImage(h, e, r, i, o, s, a, l, u)
        } catch (t) {
          if ('NS_ERROR_NOT_AVAILABLE' !== t.name) throw t
        }
      },
      n.Renderer2D.prototype._getTintedImageCanvas = function (t) {
        if (!t.canvas) return t;
        var e = s._toPixels(t.canvas),
        r = document.createElement('canvas');
        r.width = t.canvas.width,
        r.height = t.canvas.height;
        for (var n = r.getContext('2d'), i = n.createImageData(t.canvas.width, t.canvas.height), o = i.data, a = 0; a < e.length; a += 4) {
          var l = e[a],
          u = e[a + 1],
          h = e[a + 2],
          c = e[a + 3];
          o[a] = l * this._tint[0] / 255,
          o[a + 1] = u * this._tint[1] / 255,
          o[a + 2] = h * this._tint[2] / 255,
          o[a + 3] = c * this._tint[3] / 255
        }
        return n.putImageData(i, 0, 0),
        r
      },
      n.Renderer2D.prototype.blendMode = function (t) {
        this.drawingContext.globalCompositeOperation = t
      },
      n.Renderer2D.prototype.blend = function () {
        var t = this.drawingContext.globalCompositeOperation,
        e = arguments[arguments.length - 1],
        r = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
        this.drawingContext.globalCompositeOperation = e,
        this._pInst ? this._pInst.copy.apply(this._pInst, r)  : this.copy.apply(this, r),
        this.drawingContext.globalCompositeOperation = t
      },
      n.Renderer2D.prototype.copy = function () {
        var t,
        e,
        r,
        i,
        o,
        s,
        a,
        l,
        u;
        if (9 === arguments.length) t = arguments[0],
        e = arguments[1],
        r = arguments[2],
        i = arguments[3],
        o = arguments[4],
        s = arguments[5],
        a = arguments[6],
        l = arguments[7],
        u = arguments[8];
         else {
          if (8 !== arguments.length) throw new Error('Signature not supported');
          t = this._pInst,
          e = arguments[0],
          r = arguments[1],
          i = arguments[2],
          o = arguments[3],
          s = arguments[4],
          a = arguments[5],
          l = arguments[6],
          u = arguments[7]
        }
        n.Renderer2D._copyHelper(t, e, r, i, o, s, a, l, u)
      },
      n.Renderer2D._copyHelper = function (t, e, r, n, i, o, s, a, l) {
        var u = t.canvas.width / t.width;
        this.drawingContext.drawImage(t.canvas, u * e, u * r, u * n, u * i, o, s, a, l)
      },
      n.Renderer2D.prototype.get = function (t, e, r, i) {
        if (void 0 === t && void 0 === e && void 0 === r && void 0 === i ? (t = 0, e = 0, r = this.width, i = this.height)  : void 0 === r && void 0 === i && (r = 1, i = 1), t + r < 0 || e + i < 0 || t > this.width || e > this.height) return [0,
        0,
        0,
        255];
        var o = this._pInst || this,
        s = o._pixelDensity;
        if (this.loadPixels.call(o), t = Math.floor(t), e = Math.floor(e), 1 === r && 1 === i) return [o.pixels[4 * s * (e * this.width + t)],
        o.pixels[s * (4 * (e * this.width + t) + 1)],
        o.pixels[s * (4 * (e * this.width + t) + 2)],
        o.pixels[s * (4 * (e * this.width + t) + 3)]];
        var a = t * s,
        l = e * s,
        u = Math.min(r, o.width),
        h = Math.min(i, o.height),
        c = u * s,
        p = h * s,
        f = new n.Image(u, h);
        return f.canvas.getContext('2d').drawImage(this.canvas, a, l, c, p, 0, 0, u, h),
        f
      },
      n.Renderer2D.prototype.loadPixels = function () {
        var t = this._pixelDensity || this._pInst._pixelDensity,
        e = this.width * t,
        r = this.height * t,
        n = this.drawingContext.getImageData(0, 0, e, r);
        this._pInst ? (this._pInst._setProperty('imageData', n), this._pInst._setProperty('pixels', n.data))  : (this._setProperty('imageData', n), this._setProperty('pixels', n.data))
      },
      n.Renderer2D.prototype.set = function (t, e, r) {
        if (t = Math.floor(t), e = Math.floor(e), r instanceof n.Image) this.drawingContext.save(),
        this.drawingContext.setTransform(1, 0, 0, 1, 0, 0),
        this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity),
        this.drawingContext.drawImage(r.canvas, t, e),
        this.loadPixels.call(this._pInst),
        this.drawingContext.restore();
         else {
          var i = this._pInst || this,
          o = 0,
          s = 0,
          a = 0,
          l = 0,
          u = 4 * (e * i._pixelDensity * (this.width * i._pixelDensity) + t * i._pixelDensity);
          if (i.imageData || i.loadPixels.call(i), 'number' == typeof r) u < i.pixels.length && (o = r, s = r, a = r, l = 255);
           else if (r instanceof Array) {
            if (r.length < 4) throw new Error('pixel array must be of the form [R, G, B, A]');
            u < i.pixels.length && (o = r[0], s = r[1], a = r[2], l = r[3])
          } else r instanceof n.Color && u < i.pixels.length && (o = r.levels[0], s = r.levels[1], a = r.levels[2], l = r.levels[3]);
          for (var h = 0; h < i._pixelDensity; h++) for (var c = 0; c < i._pixelDensity; c++) u = 4 * ((e * i._pixelDensity + c) * this.width * i._pixelDensity + (t * i._pixelDensity + h)),
          i.pixels[u] = o,
          i.pixels[u + 1] = s,
          i.pixels[u + 2] = a,
          i.pixels[u + 3] = l
        }
      },
      n.Renderer2D.prototype.updatePixels = function (t, e, r, n) {
        var i = this._pixelDensity || this._pInst._pixelDensity;
        void 0 === t && void 0 === e && void 0 === r && void 0 === n && (t = 0, e = 0, r = this.width, n = this.height),
        r *= i,
        n *= i,
        this._pInst ? this.drawingContext.putImageData(this._pInst.imageData, t, e, 0, 0, r, n)  : this.drawingContext.putImageData(this.imageData, t, e, 0, 0, r, n)
      },
      n.Renderer2D.prototype._acuteArcToBezier = function (t, e) {
        var r = e / 2,
        n = Math.cos(r),
        i = Math.sin(r),
        o = 1 / Math.tan(r),
        s = t + r,
        a = Math.cos(s),
        l = Math.sin(s),
        u = (4 - n) / 3,
        h = i + (n - u) * o;
        return {
          ax: Math.cos(t),
          ay: Math.sin(t),
          bx: u * a + h * l,
          by: u * l - h * a,
          cx: u * a - h * l,
          cy: u * l + h * a,
          dx: Math.cos(t + e),
          dy: Math.sin(t + e)
        }
      },
      n.Renderer2D.prototype.arc = function (t, e, r, n, s, a, l) {
        for (var u = this.drawingContext, h = i.arcModeAdjust(t, e, r, n, this._ellipseMode), c = h.w / 2, p = h.h / 2, f = 0.00001, d = 0, m = [
        ]; a - s > f; ) d = Math.min(a - s, o.HALF_PI),
        m.push(this._acuteArcToBezier(s, d)),
        s += d;
        return this._doFill && (u.beginPath(), m.forEach(function (t, e) {
          0 === e && u.moveTo(h.x + t.ax * c, h.y + t.ay * p),
          u.bezierCurveTo(h.x + t.bx * c, h.y + t.by * p, h.x + t.cx * c, h.y + t.cy * p, h.x + t.dx * c, h.y + t.dy * p)
        }), l !== o.PIE && null != l || u.lineTo(h.x, h.y), u.closePath(), u.fill()),
        this._doStroke && (u.beginPath(), m.forEach(function (t, e) {
          0 === e && u.moveTo(h.x + t.ax * c, h.y + t.ay * p),
          u.bezierCurveTo(h.x + t.bx * c, h.y + t.by * p, h.x + t.cx * c, h.y + t.cy * p, h.x + t.dx * c, h.y + t.dy * p)
        }), l === o.PIE ? (u.lineTo(h.x, h.y), u.closePath())  : l === o.CHORD && u.closePath(), u.stroke()),
        this
      },
      n.Renderer2D.prototype.ellipse = function (t, e, r, n) {
        var o = this.drawingContext,
        s = this._doFill,
        l = this._doStroke;
        if (s && !l) {
          if (o.fillStyle === a) return this
        } else if (!s && l && o.strokeStyle === a) return this;
        var u = i.modeAdjust(t, e, r, n, this._ellipseMode),
        h = 0.5522847498,
        c = u.w / 2 * h,
        p = u.h / 2 * h,
        f = u.x + u.w,
        d = u.y + u.h,
        m = u.x + u.w / 2,
        g = u.y + u.h / 2;
        o.beginPath(),
        o.moveTo(u.x, g),
        o.bezierCurveTo(u.x, g - p, m - c, u.y, m, u.y),
        o.bezierCurveTo(m + c, u.y, f, g - p, f, g),
        o.bezierCurveTo(f, g + p, m + c, d, m, d),
        o.bezierCurveTo(m - c, d, u.x, g + p, u.x, g),
        o.closePath(),
        s && o.fill(),
        l && o.stroke()
      },
      n.Renderer2D.prototype.line = function (t, e, r, n) {
        var i = this.drawingContext;
        return this._doStroke ? i.strokeStyle === a ? this : (i.lineWidth % 2 === 1 && i.translate(0.5, 0.5), i.beginPath(), i.moveTo(t, e), i.lineTo(r, n), i.stroke(), i.lineWidth % 2 === 1 && i.translate( - 0.5, - 0.5), this)  : this
      },
      n.Renderer2D.prototype.point = function (t, e) {
        var r = this.drawingContext,
        n = r.strokeStyle,
        i = r.fillStyle;
        return this._doStroke ? r.strokeStyle === a ? this : (t = Math.round(t), e = Math.round(e), r.fillStyle = n, r.lineWidth > 1 ? (r.beginPath(), r.arc(t, e, r.lineWidth / 2, 0, o.TWO_PI, !1), r.fill())  : r.fillRect(t, e, 1, 1), void (r.fillStyle = i))  : this
      },
      n.Renderer2D.prototype.quad = function (t, e, r, n, i, o, s, l) {
        var u = this.drawingContext,
        h = this._doFill,
        c = this._doStroke;
        if (h && !c) {
          if (u.fillStyle === a) return this
        } else if (!h && c && u.strokeStyle === a) return this;
        return u.beginPath(),
        u.moveTo(t, e),
        u.lineTo(r, n),
        u.lineTo(i, o),
        u.lineTo(s, l),
        u.closePath(),
        h && u.fill(),
        c && u.stroke(),
        this
      },
      n.Renderer2D.prototype.rect = function (t) {
        var e = t[0],
        r = t[1],
        n = t[2],
        o = t[3],
        s = t[4],
        l = t[5],
        u = t[6],
        h = t[7],
        c = this.drawingContext,
        p = this._doFill,
        f = this._doStroke;
        if (p && !f) {
          if (c.fillStyle === a) return this
        } else if (!p && f && c.strokeStyle === a) return this;
        var d = i.modeAdjust(e, r, n, o, this._rectMode);
        if (this._doStroke && c.lineWidth % 2 === 1 && c.translate(0.5, 0.5), c.beginPath(), 'undefined' == typeof s) c.rect(d.x, d.y, d.w, d.h);
         else {
          'undefined' == typeof l && (l = s),
          'undefined' == typeof u && (u = l),
          'undefined' == typeof h && (h = u);
          var m = d.x,
          g = d.y,
          y = d.w,
          v = d.h,
          _ = y / 2,
          x = v / 2;
          y < 2 * s && (s = _),
          v < 2 * s && (s = x),
          y < 2 * l && (l = _),
          v < 2 * l && (l = x),
          y < 2 * u && (u = _),
          v < 2 * u && (u = x),
          y < 2 * h && (h = _),
          v < 2 * h && (h = x),
          c.beginPath(),
          c.moveTo(m + s, g),
          c.arcTo(m + y, g, m + y, g + v, l),
          c.arcTo(m + y, g + v, m, g + v, u),
          c.arcTo(m, g + v, m, g, h),
          c.arcTo(m, g, m + y, g, s),
          c.closePath()
        }
        return this._doFill && c.fill(),
        this._doStroke && c.stroke(),
        this._doStroke && c.lineWidth % 2 === 1 && c.translate( - 0.5, - 0.5),
        this
      },
      n.Renderer2D.prototype.triangle = function (t, e, r, n, i, o) {
        var s = this.drawingContext,
        l = this._doFill,
        u = this._doStroke;
        if (l && !u) {
          if (s.fillStyle === a) return this
        } else if (!l && u && s.strokeStyle === a) return this;
        s.beginPath(),
        s.moveTo(t, e),
        s.lineTo(r, n),
        s.lineTo(i, o),
        s.closePath(),
        l && s.fill(),
        u && s.stroke()
      },
      n.Renderer2D.prototype.endShape = function (t, e, r, n, i, s, a) {
        if (0 === e.length) return this;
        if (!this._doStroke && !this._doFill) return this;
        var l,
        u = t === o.CLOSE;
        u && !s && e.push(e[0]);
        var h,
        c,
        p = e.length;
        if (!r || a !== o.POLYGON && null !== a) if (!n || a !== o.POLYGON && null !== a) if (!i || a !== o.POLYGON && null !== a) if (a === o.POINTS) for (h = 0; h < p; h++) l = e[h],
        this._doStroke && this._pInst.stroke(l[6]),
        this._pInst.point(l[0], l[1]);
         else if (a === o.LINES) for (h = 0; h + 1 < p; h += 2) l = e[h],
        this._doStroke && this._pInst.stroke(e[h + 1][6]),
        this._pInst.line(l[0], l[1], e[h + 1][0], e[h + 1][1]);
         else if (a === o.TRIANGLES) for (h = 0; h + 2 < p; h += 3) l = e[h],
        this.drawingContext.beginPath(),
        this.drawingContext.moveTo(l[0], l[1]),
        this.drawingContext.lineTo(e[h + 1][0], e[h + 1][1]),
        this.drawingContext.lineTo(e[h + 2][0], e[h + 2][1]),
        this.drawingContext.lineTo(l[0], l[1]),
        this._doFill && (this._pInst.fill(e[h + 2][5]), this.drawingContext.fill()),
        this._doStroke && (this._pInst.stroke(e[h + 2][6]), this.drawingContext.stroke()),
        this.drawingContext.closePath();
         else if (a === o.TRIANGLE_STRIP) for (h = 0; h + 1 < p; h++) l = e[h],
        this.drawingContext.beginPath(),
        this.drawingContext.moveTo(e[h + 1][0], e[h + 1][1]),
        this.drawingContext.lineTo(l[0], l[1]),
        this._doStroke && this._pInst.stroke(e[h + 1][6]),
        this._doFill && this._pInst.fill(e[h + 1][5]),
        h + 2 < p && (this.drawingContext.lineTo(e[h + 2][0], e[h + 2][1]), this._doStroke && this._pInst.stroke(e[h + 2][6]), this._doFill && this._pInst.fill(e[h + 2][5])),
        this._doFillStrokeClose();
         else if (a === o.TRIANGLE_FAN) {
          if (p > 2) for (this.drawingContext.beginPath(), this.drawingContext.moveTo(e[0][0], e[0][1]), this.drawingContext.lineTo(e[1][0], e[1][1]), this.drawingContext.lineTo(e[2][0], e[2][1]), this._doFill && this._pInst.fill(e[2][5]), this._doStroke && this._pInst.stroke(e[2][6]), this._doFillStrokeClose(), h = 3; h < p; h++) l = e[h],
          this.drawingContext.beginPath(),
          this.drawingContext.moveTo(e[0][0], e[0][1]),
          this.drawingContext.lineTo(e[h - 1][0], e[h - 1][1]),
          this.drawingContext.lineTo(l[0], l[1]),
          this._doFill && this._pInst.fill(l[5]),
          this._doStroke && this._pInst.stroke(l[6]),
          this._doFillStrokeClose()
        } else if (a === o.QUADS) for (h = 0; h + 3 < p; h += 4) {
          for (l = e[h], this.drawingContext.beginPath(), this.drawingContext.moveTo(l[0], l[1]), c = 1; c < 4; c++) this.drawingContext.lineTo(e[h + c][0], e[h + c][1]);
          this.drawingContext.lineTo(l[0], l[1]),
          this._doFill && this._pInst.fill(e[h + 3][5]),
          this._doStroke && this._pInst.stroke(e[h + 3][6]),
          this._doFillStrokeClose()
        } else if (a === o.QUAD_STRIP) {
          if (p > 3) for (h = 0; h + 1 < p; h += 2) l = e[h],
          this.drawingContext.beginPath(),
          h + 3 < p ? (this.drawingContext.moveTo(e[h + 2][0], e[h + 2][1]), this.drawingContext.lineTo(l[0], l[1]), this.drawingContext.lineTo(e[h + 1][0], e[h + 1][1]), this.drawingContext.lineTo(e[h + 3][0], e[h + 3][1]), this._doFill && this._pInst.fill(e[h + 3][5]), this._doStroke && this._pInst.stroke(e[h + 3][6]))  : (this.drawingContext.moveTo(l[0], l[1]), this.drawingContext.lineTo(e[h + 1][0], e[h + 1][1])),
          this._doFillStrokeClose()
        } else {
          for (this.drawingContext.beginPath(), this.drawingContext.moveTo(e[0][0], e[0][1]), h = 1; h < p; h++) l = e[h],
          l.isVert && (l.moveTo ? this.drawingContext.moveTo(l[0], l[1])  : this.drawingContext.lineTo(l[0], l[1]));
          this._doFillStrokeClose()
        } else {
          for (this.drawingContext.beginPath(), h = 0; h < p; h++) e[h].isVert ? e[h].moveTo ? this.drawingContext.moveTo([0], e[h][1])  : this.drawingContext.lineTo(e[h][0], e[h][1])  : this.drawingContext.quadraticCurveTo(e[h][0], e[h][1], e[h][2], e[h][3]);
          this._doFillStrokeClose()
        } else {
          for (this.drawingContext.beginPath(), h = 0; h < p; h++) e[h].isVert ? e[h].moveTo ? this.drawingContext.moveTo(e[h][0], e[h][1])  : this.drawingContext.lineTo(e[h][0], e[h][1])  : this.drawingContext.bezierCurveTo(e[h][0], e[h][1], e[h][2], e[h][3], e[h][4], e[h][5]);
          this._doFillStrokeClose()
        } else if (p > 3) {
          var f = [
          ],
          d = 1 - this._curveTightness;
          for (this.drawingContext.beginPath(), this.drawingContext.moveTo(e[1][0], e[1][1]), h = 1; h + 2 < p; h++) l = e[h],
          f[0] = [
            l[0],
            l[1]
          ],
          f[1] = [
            l[0] + (d * e[h + 1][0] - d * e[h - 1][0]) / 6,
            l[1] + (d * e[h + 1][1] - d * e[h - 1][1]) / 6
          ],
          f[2] = [
            e[h + 1][0] + (d * e[h][0] - d * e[h + 2][0]) / 6,
            e[h + 1][1] + (d * e[h][1] - d * e[h + 2][1]) / 6
          ],
          f[3] = [
            e[h + 1][0],
            e[h + 1][1]
          ],
          this.drawingContext.bezierCurveTo(f[1][0], f[1][1], f[2][0], f[2][1], f[3][0], f[3][1]);
          u && this.drawingContext.lineTo(e[h + 1][0], e[h + 1][1]),
          this._doFillStrokeClose()
        }
        return r = !1,
        n = !1,
        i = !1,
        s = !1,
        u && e.pop(),
        this
      },
      n.Renderer2D.prototype.noSmooth = function () {
        return 'imageSmoothingEnabled' in this.drawingContext ? this.drawingContext.imageSmoothingEnabled = !1 : 'mozImageSmoothingEnabled' in this.drawingContext ? this.drawingContext.mozImageSmoothingEnabled = !1 : 'webkitImageSmoothingEnabled' in this.drawingContext ? this.drawingContext.webkitImageSmoothingEnabled = !1 : 'msImageSmoothingEnabled' in this.drawingContext && (this.drawingContext.msImageSmoothingEnabled = !1),
        this
      },
      n.Renderer2D.prototype.smooth = function () {
        return 'imageSmoothingEnabled' in this.drawingContext ? this.drawingContext.imageSmoothingEnabled = !0 : 'mozImageSmoothingEnabled' in this.drawingContext ? this.drawingContext.mozImageSmoothingEnabled = !0 : 'webkitImageSmoothingEnabled' in this.drawingContext ? this.drawingContext.webkitImageSmoothingEnabled = !0 : 'msImageSmoothingEnabled' in this.drawingContext && (this.drawingContext.msImageSmoothingEnabled = !0),
        this
      },
      n.Renderer2D.prototype.strokeCap = function (t) {
        return t !== o.ROUND && t !== o.SQUARE && t !== o.PROJECT || (this.drawingContext.lineCap = t),
        this
      },
      n.Renderer2D.prototype.strokeJoin = function (t) {
        return t !== o.ROUND && t !== o.BEVEL && t !== o.MITER || (this.drawingContext.lineJoin = t),
        this
      },
      n.Renderer2D.prototype.strokeWeight = function (t) {
        return 'undefined' == typeof t || 0 === t ? this.drawingContext.lineWidth = 0.0001 : this.drawingContext.lineWidth = t,
        this
      },
      n.Renderer2D.prototype._getFill = function () {
        return this.drawingContext.fillStyle
      },
      n.Renderer2D.prototype._getStroke = function () {
        return this.drawingContext.strokeStyle
      },
      n.Renderer2D.prototype.bezier = function (t, e, r, n, i, o, s, a) {
        return this._pInst.beginShape(),
        this._pInst.vertex(t, e),
        this._pInst.bezierVertex(r, n, i, o, s, a),
        this._pInst.endShape(),
        this
      },
      n.Renderer2D.prototype.curve = function (t, e, r, n, i, o, s, a) {
        return this._pInst.beginShape(),
        this._pInst.curveVertex(t, e),
        this._pInst.curveVertex(r, n),
        this._pInst.curveVertex(i, o),
        this._pInst.curveVertex(s, a),
        this._pInst.endShape(),
        this
      },
      n.Renderer2D.prototype._doFillStrokeClose = function () {
        this._doFill && this.drawingContext.fill(),
        this._doStroke && this.drawingContext.stroke(),
        this.drawingContext.closePath()
      },
      n.Renderer2D.prototype.applyMatrix = function (t, e, r, n, i, o) {
        this.drawingContext.transform(t, e, r, n, i, o)
      },
      n.Renderer2D.prototype.resetMatrix = function () {
        return this.drawingContext.setTransform(1, 0, 0, 1, 0, 0),
        this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity),
        this
      },
      n.Renderer2D.prototype.rotate = function (t) {
        this.drawingContext.rotate(t)
      },
      n.Renderer2D.prototype.scale = function (t, e) {
        return this.drawingContext.scale(t, e),
        this
      },
      n.Renderer2D.prototype.shearX = function (t) {
        return this._pInst._angleMode === o.DEGREES && (t = this._pInst.degrees(t)),
        this.drawingContext.transform(1, 0, this._pInst.tan(t), 1, 0, 0),
        this
      },
      n.Renderer2D.prototype.shearY = function (t) {
        return this._pInst._angleMode === o.DEGREES && (t = this._pInst.degrees(t)),
        this.drawingContext.transform(1, this._pInst.tan(t), 0, 1, 0, 0),
        this
      },
      n.Renderer2D.prototype.translate = function (t, e) {
        return this.drawingContext.translate(t, e),
        this
      },
      n.Renderer2D.prototype.text = function (t, e, r, n, i) {
        var s,
        a,
        l,
        u,
        h,
        c,
        p,
        f,
        d,
        m,
        g = this._pInst,
        y = Number.MAX_VALUE;
        if (this._doFill || this._doStroke) {
          if ('string' != typeof t && (t = t.toString()), t = t.replace(/(\t)/g, '  '), s = t.split('\n'), 'undefined' != typeof n) {
            for (d = 0, l = 0; l < s.length; l++) for (h = '', f = s[l].split(' '), a = 0; a < f.length; a++) c = h + f[a] + ' ',
            p = this.textWidth(c),
            p > n ? (h = f[a] + ' ', d += g.textLeading())  : h = c;
            switch (this._rectMode === o.CENTER && (e -= n / 2, r -= i / 2), this.drawingContext.textAlign) {
              case o.CENTER:
                e += n / 2;
                break;
              case o.RIGHT:
                e += n
            }
            if ('undefined' != typeof i) {
              switch (this.drawingContext.textBaseline) {
                case o.BOTTOM:
                  r += i - d;
                  break;
                case o._CTX_MIDDLE:
                  r += (i - d) / 2;
                  break;
                case o.BASELINE:
                  m = !0,
                  this.drawingContext.textBaseline = o.TOP
              }
              y = r + i - g.textAscent()
            }
            for (l = 0; l < s.length; l++) {
              for (h = '', f = s[l].split(' '), a = 0; a < f.length; a++) c = h + f[a] + ' ',
              p = this.textWidth(c),
              p > n && h.length > 0 ? (this._renderText(g, h, e, r, y), h = f[a] + ' ', r += g.textLeading())  : h = c;
              this._renderText(g, h, e, r, y),
              r += g.textLeading()
            }
        } else {
          var v = (0.5 * s.length - 0.5) * g.textLeading();
          for (u = 0; u < s.length; u++) this._renderText(g, s[u], e, r - v, y),
          r += g.textLeading()
      }
      return m && (this.drawingContext.textBaseline = o.BASELINE),
      g
    }
  },
  n.Renderer2D.prototype._renderText = function (t, e, r, n, i) {
    if (!(n >= i)) return t.push(),
    this._isOpenType() ? this._textFont._renderPath(e, r, n, {
      renderer: this
    })  : (this._doStroke && this._strokeSet && this.drawingContext.strokeText(e, r, n), this._doFill && (this.drawingContext.fillStyle = this._fillSet ? this.drawingContext.fillStyle : o._DEFAULT_TEXT_FILL, this.drawingContext.fillText(e, r, n))),
    t.pop(),
    t
  },
  n.Renderer2D.prototype.textWidth = function (t) {
    return this._isOpenType() ? this._textFont._textWidth(t)  : this.drawingContext.measureText(t).width
  },
  n.Renderer2D.prototype.textAlign = function (t, e) {
    if (arguments.length) return t !== o.LEFT && t !== o.RIGHT && t !== o.CENTER || (this.drawingContext.textAlign = t),
    e !== o.TOP && e !== o.BOTTOM && e !== o.CENTER && e !== o.BASELINE || (e === o.CENTER ? this.drawingContext.textBaseline = o._CTX_MIDDLE : this.drawingContext.textBaseline = e),
    this._pInst;
    var r = this.drawingContext.textBaseline;
    return r === o._CTX_MIDDLE && (r = o.CENTER),
    {
      horizontal: this.drawingContext.textAlign,
      vertical: r
    }
  },
  n.Renderer2D.prototype._applyTextProperties = function () {
    var t,
    e = this._pInst;
    return this._setProperty('_textAscent', null),
    this._setProperty('_textDescent', null),
    t = this._textFont,
    this._isOpenType() && (t = this._textFont.font.familyName, this._setProperty('_textStyle', this._textFont.font.styleName)),
    this.drawingContext.font = this._textStyle + ' ' + this._textSize + 'px ' + t,
    e
  },
  n.Renderer2D.prototype.push = function () {
    this.drawingContext.save()
  },
  n.Renderer2D.prototype.pop = function () {
    this.drawingContext.restore()
  },
  e.exports = n.Renderer2D
},
{
  '../image/filters': 66,
  './canvas': 47,
  './constants': 48,
  './core': 49,
  './p5.Renderer': 55
}
],
57: [
  function (t, e, r) {
    var n = t('./core'),
    i = t('./constants');
    t('./p5.Graphics'),
    t('./p5.Renderer2D'),
    t('../3d/p5.Renderer3D');
    var o = 'defaultCanvas0';
    n.prototype.createCanvas = function (t, e, r) {
      var s,
      a,
      l = r || i.P2D;
      if (arguments[3] && (s = 'boolean' == typeof arguments[3] && arguments[3]), l === i.WEBGL) a = document.getElementById(o),
      a && a.parentNode.removeChild(a),
      a = document.createElement('canvas'),
      a.id = o;
       else if (s) {
        a = document.createElement('canvas');
        for (var u = 0; document.getElementById('defaultCanvas' + u); ) u++;
        o = 'defaultCanvas' + u,
        a.id = o
      } else a = this.canvas;
      return this._setupDone || (a.dataset.hidden = !0, a.style.visibility = 'hidden'),
      this._userNode ? this._userNode.appendChild(a)  : document.body.appendChild(a),
      l === i.WEBGL ? (this._setProperty('_renderer', new n.Renderer3D(a, this, (!0))), this._isdefaultGraphics = !0)  : this._isdefaultGraphics || (this._setProperty('_renderer', new n.Renderer2D(a, this, (!0))), this._isdefaultGraphics = !0),
      this._renderer.resize(t, e),
      this._renderer._applyDefaults(),
      s && this._elements.push(this._renderer),
      this._renderer
    },
    n.prototype.resizeCanvas = function (t, e, r) {
      if (this._renderer) {
        var n = {
        };
        for (var i in this.drawingContext) {
          var o = this.drawingContext[i];
          'object' != typeof o && 'function' != typeof o && (n[i] = o)
        }
        this._renderer.resize(t, e);
        for (var s in n) this.drawingContext[s] = n[s];
        r || this.redraw()
      }
    },
    n.prototype.noCanvas = function () {
      this.canvas && this.canvas.parentNode.removeChild(this.canvas)
    },
    n.prototype.createGraphics = function (t, e, r) {
      return new n.Graphics(t, e, r, this)
    },
    n.prototype.blendMode = function (t) {
      if (t !== i.BLEND && t !== i.DARKEST && t !== i.LIGHTEST && t !== i.DIFFERENCE && t !== i.MULTIPLY && t !== i.EXCLUSION && t !== i.SCREEN && t !== i.REPLACE && t !== i.OVERLAY && t !== i.HARD_LIGHT && t !== i.SOFT_LIGHT && t !== i.DODGE && t !== i.BURN && t !== i.ADD && t !== i.NORMAL) throw new Error('Mode ' + t + ' not recognized.');
      this._renderer.blendMode(t)
    },
    e.exports = n
  },

  {
    '../3d/p5.Renderer3D': 37,
    './constants': 48,
    './core': 49,
    './p5.Graphics': 54,
    './p5.Renderer2D': 56
  }
],

58: [
  function (t, e, r) {
    window.requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
        window.setTimeout(t, 1000 / 60)
      }
    }(),
    window.performance = window.performance || {
    },
    window.performance.now = function () {
      var t = Date.now();
      return window.performance.now || window.performance.mozNow || window.performance.msNow || window.performance.oNow || window.performance.webkitNow || function () {
        return Date.now() - t
      }
    }(),
    function () {
      'use strict';
      'undefined' == typeof Uint8ClampedArray || Uint8ClampedArray.prototype.slice || Object.defineProperty(Uint8ClampedArray.prototype, 'slice', {
        value: Array.prototype.slice,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }()
  },
  {
  }
],
59: [
  function (t, e, r) {
    'use strict';
    var n = t('./core');
    n.prototype.exit = function () {
      throw 'exit() not implemented, see remove()'
    },
    n.prototype.noLoop = function () {
      this._loop = !1
    },
    n.prototype.loop = function () {
      this._loop = !0,
      this._draw()
    },
    n.prototype.push = function () {
      this._renderer.push(),
      this._styles.push({
        _doStroke: this._renderer._doStroke,
        _strokeSet: this._renderer._strokeSet,
        _doFill: this._renderer._doFill,
        _fillSet: this._renderer._fillSet,
        _tint: this._renderer._tint,
        _imageMode: this._renderer._imageMode,
        _rectMode: this._renderer._rectMode,
        _ellipseMode: this._renderer._ellipseMode,
        _colorMode: this._renderer._colorMode,
        _textFont: this._renderer._textFont,
        _textLeading: this._renderer._textLeading,
        _textSize: this._renderer._textSize,
        _textStyle: this._renderer._textStyle
      })
    },
    n.prototype.pop = function () {
      this._renderer.pop();
      var t = this._styles.pop();
      for (var e in t) this._renderer[e] = t[e]
    },
    n.prototype.pushStyle = function () {
      throw new Error('pushStyle() not used, see push()')
    },
    n.prototype.popStyle = function () {
      throw new Error('popStyle() not used, see pop()')
    },
    n.prototype.redraw = function () {
      var t = this.setup || window.setup,
      e = this.draw || window.draw;
      if ('function' == typeof e) {
        this.resetMatrix.bind(this),
        'undefined' == typeof t && this.scale(this._pixelDensity, this._pixelDensity);
        var r = this;
        this._registeredMethods.pre.forEach(function (t) {
          t.call(r)
        }),
        e(),
        this._registeredMethods.post.forEach(function (t) {
          t.call(r)
        })
      }
    },
    n.prototype.size = function () {
      var t = 'size() is not a valid p5 function, to set the size of the ';
      throw t += 'drawing canvas, please use createCanvas() instead'
    },
    e.exports = n
  },
  {
    './core': 49
  }
],
60: [
  function (t, e, r) {
    'use strict';
    var n = t('./core'),
    i = t('./constants');
    n.prototype.applyMatrix = function (t, e, r, n, i, o) {
      return this._renderer.applyMatrix(t, e, r, n, i, o),
      this
    },
    n.prototype.popMatrix = function () {
      throw new Error('popMatrix() not used, see pop()')
    },
    n.prototype.printMatrix = function () {
      throw new Error('printMatrix() not implemented')
    },
    n.prototype.pushMatrix = function () {
      throw new Error('pushMatrix() not used, see push()')
    },
    n.prototype.resetMatrix = function () {
      return this._renderer.resetMatrix(),
      this
    },
    n.prototype.rotate = function () {
      var t = arguments[0];
      return this._angleMode === i.DEGREES && (t = this.radians(t)),
      arguments.length > 1 ? this._renderer.rotate(t, arguments[1])  : this._renderer.rotate(t),
      this
    },
    n.prototype.rotateX = function (t) {
      for (var e = new Array(arguments.length), r = 0; r < e.length; ++r) e[r] = arguments[r];
      if (!this._renderer.isP3D) throw 'not supported in p2d. Please use webgl mode';
      return this._validateParameters('rotateX', e, [
        ['Number']
      ]),
      this._renderer.rotateX(t),
      this
    },
    n.prototype.rotateY = function (t) {
      if (!this._renderer.isP3D) throw 'not supported in p2d. Please use webgl mode';
      for (var e = new Array(arguments.length), r = 0; r < e.length; ++r) e[r] = arguments[r];
      return this._validateParameters('rotateY', e, [
        ['Number']
      ]),
      this._renderer.rotateY(t),
      this
    },
    n.prototype.rotateZ = function (t) {
      if (!this._renderer.isP3D) throw 'not supported in p2d. Please use webgl mode';
      for (var e = new Array(arguments.length), r = 0; r < e.length; ++r) e[r] = arguments[r];
      return this._validateParameters('rotateZ', e, [
        ['Number']
      ]),
      this._renderer.rotateZ(t),
      this
    },
    n.prototype.scale = function () {
      for (var t, e, r, i = new Array(arguments.length), o = 0; o < i.length; o++) i[o] = arguments[o];
      return i[0] instanceof n.Vector ? (t = i[0].x, e = i[0].y, r = i[0].z)  : i[0] instanceof Array ? (t = i[0][0], e = i[0][1], r = i[0][2] || 1)  : 1 === i.length ? t = e = r = i[0] : (t = i[0], e = i[1], r = i[2] || 1),
      this._renderer.isP3D ? this._renderer.scale.call(this._renderer, t, e, r)  : this._renderer.scale.call(this._renderer, t, e),
      this
    },
    n.prototype.shearX = function (t) {
      return this._angleMode === i.DEGREES && (t = this.radians(t)),
      this._renderer.shearX(t),
      this
    },
    n.prototype.shearY = function (t) {
      return this._angleMode === i.DEGREES && (t = this.radians(t)),
      this._renderer.shearY(t),
      this
    },
    n.prototype.translate = function (t, e, r) {
      for (var n = new Array(arguments.length), i = 0; i < n.length; ++i) n[i] = arguments[i];
      return this._renderer.isP3D ? (this._validateParameters('translate', n, [
        ['Number',
        'Number',
        'Number']
      ]), this._renderer.translate(t, e, r))  : (this._validateParameters('translate', n, [
        ['Number',
        'Number']
      ]), this._renderer.translate(t, e)),
      this
    },
    e.exports = n
  },
  {
    './constants': 48,
    './core': 49
  }
],
61: [
  function (t, e, r) {
    'use strict';
    var n = t('./core'),
    i = t('./constants'),
    o = null,
    s = [
    ],
    a = [
    ],
    l = !1,
    u = !1,
    h = !1,
    c = !1,
    p = !0;
    n.prototype.beginContour = function () {
      return a = [
      ],
      c = !0,
      this
    },
    n.prototype.beginShape = function (t) {
      return o = t === i.POINTS || t === i.LINES || t === i.TRIANGLES || t === i.TRIANGLE_FAN || t === i.TRIANGLE_STRIP || t === i.QUADS || t === i.QUAD_STRIP ? t : null,
      this._renderer.isP3D ? this._renderer.beginShape(t)  : (s = [
      ], a = [
      ]),
      this
    },
    n.prototype.bezierVertex = function (t, e, r, n, i, o) {
      if (0 === s.length) throw 'vertex() must be used once before calling bezierVertex()';
      l = !0;
      for (var u = [
      ], h = 0; h < arguments.length; h++) u[h] = arguments[h];
      return u.isVert = !1,
      c ? a.push(u)  : s.push(u),
      this
    },
    n.prototype.curveVertex = function (t, e) {
      return u = !0,
      this.vertex(t, e),
      this
    },
    n.prototype.endContour = function () {
      var t = a[0].slice();
      t.isVert = a[0].isVert,
      t.moveTo = !1,
      a.push(t),
      p && (s.push(s[0]), p = !1);
      for (var e = 0; e < a.length; e++) s.push(a[e]);
      return this
    },
    n.prototype.endShape = function (t) {
      if (this._renderer.isP3D) this._renderer.endShape(t, u, l, h, c, o);
       else {
        if (0 === s.length) return this;
        if (!this._renderer._doStroke && !this._renderer._doFill) return this;
        var e = t === i.CLOSE;
        e && !c && s.push(s[0]),
        this._renderer.endShape(t, s, u, l, h, c, o),
        u = !1,
        l = !1,
        h = !1,
        c = !1,
        p = !0,
        e && s.pop()
      }
      return this
    },
    n.prototype.quadraticVertex = function (t, e, r, n) {
      if (this._contourInited) {
        var o = {
        };
        return o.x = t,
        o.y = e,
        o.x3 = r,
        o.y3 = n,
        o.type = i.QUADRATIC,
        this._contourVertices.push(o),
        this
      }
      if (!(s.length > 0)) throw 'vertex() must be used once before calling quadraticVertex()';
      h = !0;
      for (var l = [
      ], u = 0; u < arguments.length; u++) l[u] = arguments[u];
      return l.isVert = !1,
      c ? a.push(l)  : s.push(l),
      this
    },
    n.prototype.vertex = function (t, e, r) {
      for (var n = new Array(arguments.length), i = 0; i < n.length; ++i) n[i] = arguments[i];
      if (this._renderer.isP3D) this._validateParameters('vertex', n, [
        ['Number',
        'Number',
        'Number']
      ]),
      this._renderer.vertex(arguments[0], arguments[1], arguments[2]);
       else {
        this._validateParameters('vertex', n, [
          ['Number',
          'Number'],
          [
            'Number',
            'Number',
            'Number'
          ]
        ]);
        var o = [
        ];
        o.isVert = !0,
        o[0] = t,
        o[1] = e,
        o[2] = 0,
        o[3] = 0,
        o[4] = 0,
        o[5] = this._renderer._getFill(),
        o[6] = this._renderer._getStroke(),
        r && (o.moveTo = r),
        c ? (0 === a.length && (o.moveTo = !0), a.push(o))  : s.push(o)
      }
      return this
    },
    e.exports = n
  },
  {
    './constants': 48,
    './core': 49
  }
],
62: [
  function (t, e, r) {
    'use strict';
    var n = t('../core/core');
    n.prototype.deviceOrientation = void 0,
    n.prototype.accelerationX = 0,
    n.prototype.accelerationY = 0,
    n.prototype.accelerationZ = 0,
    n.prototype.pAccelerationX = 0,
    n.prototype.pAccelerationY = 0,
    n.prototype.pAccelerationZ = 0,
    n.prototype._updatePAccelerations = function () {
      this._setProperty('pAccelerationX', this.accelerationX),
      this._setProperty('pAccelerationY', this.accelerationY),
      this._setProperty('pAccelerationZ', this.accelerationZ)
    },
    n.prototype.rotationX = 0,
    n.prototype.rotationY = 0,
    n.prototype.rotationZ = 0,
    n.prototype.pRotationX = 0,
    n.prototype.pRotationY = 0,
    n.prototype.pRotationZ = 0;
    var i,
    o,
    s,
    a = 0,
    l = 0,
    u = 0,
    h = 'clockwise',
    c = 'clockwise',
    p = 'clockwise';
    n.prototype._updatePRotations = function () {
      this._setProperty('pRotationX', this.rotationX),
      this._setProperty('pRotationY', this.rotationY),
      this._setProperty('pRotationZ', this.rotationZ)
    },
    n.prototype.turnAxis = void 0;
    var f = 0.5,
    d = 30;
    n.prototype.setMoveThreshold = function (t) {
      'number' == typeof t && (f = t)
    },
    n.prototype.setShakeThreshold = function (t) {
      'number' == typeof t && (d = t)
    },
    n.prototype._ondeviceorientation = function (t) {
      this._updatePRotations(),
      this._setProperty('rotationX', t.beta),
      this._setProperty('rotationY', t.gamma),
      this._setProperty('rotationZ', t.alpha),
      this._handleMotion()
    },
    n.prototype._ondevicemotion = function (t) {
      this._updatePAccelerations(),
      this._setProperty('accelerationX', 2 * t.acceleration.x),
      this._setProperty('accelerationY', 2 * t.acceleration.y),
      this._setProperty('accelerationZ', 2 * t.acceleration.z),
      this._handleMotion()
    },
    n.prototype._handleMotion = function () {
      90 === window.orientation || window.orientation === - 90 ? this._setProperty('deviceOrientation', 'landscape')  : 0 === window.orientation ? this._setProperty('deviceOrientation', 'portrait')  : void 0 === window.orientation && this._setProperty('deviceOrientation', 'undefined');
      var t = this.deviceMoved || window.deviceMoved;
      'function' == typeof t && (Math.abs(this.accelerationX - this.pAccelerationX) > f || Math.abs(this.accelerationY - this.pAccelerationY) > f || Math.abs(this.accelerationZ - this.pAccelerationZ) > f) && t();
      var e = this.deviceTurned || window.deviceTurned;
      if ('function' == typeof e) {
        var r = this.rotationX + 180,
        n = this.pRotationX + 180,
        m = a + 180;
        r - n > 0 && r - n < 270 || r - n < - 270 ? h = 'clockwise' : (r - n < 0 || r - n > 270) && (h = 'counter-clockwise'),
        h !== i && (m = r),
        Math.abs(r - m) > 90 && Math.abs(r - m) < 270 && (m = r, this._setProperty('turnAxis', 'X'), e()),
        i = h,
        a = m - 180;
        var g = this.rotationY + 180,
        y = this.pRotationY + 180,
        v = l + 180;
        g - y > 0 && g - y < 270 || g - y < - 270 ? c = 'clockwise' : (g - y < 0 || g - this.pRotationY > 270) && (c = 'counter-clockwise'),
        c !== o && (v = g),
        Math.abs(g - v) > 90 && Math.abs(g - v) < 270 && (v = g, this._setProperty('turnAxis', 'Y'), e()),
        o = c,
        l = v - 180,
        this.rotationZ - this.pRotationZ > 0 && this.rotationZ - this.pRotationZ < 270 || this.rotationZ - this.pRotationZ < - 270 ? p = 'clockwise' : (this.rotationZ - this.pRotationZ < 0 || this.rotationZ - this.pRotationZ > 270) && (p = 'counter-clockwise'),
        p !== s && (u = this.rotationZ),
        Math.abs(this.rotationZ - u) > 90 && Math.abs(this.rotationZ - u) < 270 && (u = this.rotationZ, this._setProperty('turnAxis', 'Z'), e()),
        s = p,
        this._setProperty('turnAxis', void 0)
      }
      var _ = this.deviceShaken || window.deviceShaken;
      if ('function' == typeof _) {
        var x,
        b;
        null !== this.pAccelerationX && (x = Math.abs(this.accelerationX - this.pAccelerationX), b = Math.abs(this.accelerationY - this.pAccelerationY)),
        x + b > d && _()
      }
    },
    e.exports = n
  },
  {
    '../core/core': 49
  }
],
63: [
  function (t, e, r) {
    'use strict';
    var n = t('../core/core'),
    i = {
    };
    n.prototype.isKeyPressed = !1,
    n.prototype.keyIsPressed = !1,
    n.prototype.key = '',
    n.prototype.keyCode = 0,
    n.prototype._onkeydown = function (t) {
      if (!i[t.which]) {
        this._setProperty('isKeyPressed', !0),
        this._setProperty('keyIsPressed', !0),
        this._setProperty('keyCode', t.which),
        i[t.which] = !0;
        var e = String.fromCharCode(t.which);
        e || (e = t.which),
        this._setProperty('key', e);
        var r = this.keyPressed || window.keyPressed;
        if ('function' == typeof r && !t.charCode) {
          var n = r(t);
          n === !1 && t.preventDefault()
        }
      }
    },
    n.prototype._onkeyup = function (t) {
      var e = this.keyReleased || window.keyReleased;
      this._setProperty('isKeyPressed', !1),
      this._setProperty('keyIsPressed', !1),
      this._setProperty('_lastKeyCodeTyped', null),
      i[t.which] = !1;
      var r = String.fromCharCode(t.which);
      if (r || (r = t.which), this._setProperty('key', r), this._setProperty('keyCode', t.which), 'function' == typeof e) {
        var n = e(t);
        n === !1 && t.preventDefault()
      }
    },
    n.prototype._onkeypress = function (t) {
      if (t.which !== this._lastKeyCodeTyped) {
        this._setProperty('keyCode', t.which),
        this._setProperty('_lastKeyCodeTyped', t.which),
        this._setProperty('key', String.fromCharCode(t.which));
        var e = this.keyTyped || window.keyTyped;
        if ('function' == typeof e) {
          var r = e(t);
          r === !1 && t.preventDefault()
        }
      }
    },
    n.prototype._onblur = function (t) {
      i = {
      }
    },
    n.prototype.keyIsDown = function (t) {
      return i[t]
    },
    e.exports = n
  },
  {
    '../core/core': 49
  }
],
64: [
  function (t, e, r) {
    'use strict';
    function n(t, e) {
      var r = t.getBoundingClientRect();
      return {
        x: e.clientX - r.left,
        y: e.clientY - r.top
      }
    }
    var i = t('../core/core'),
    o = t('../core/constants');
    i.prototype._nextMouseX = 0,
    i.prototype._nextMouseY = 0,
    i.prototype.mouseX = 0,
    i.prototype.mouseY = 0,
    i.prototype.pmouseX = 0,
    i.prototype.pmouseY = 0,
    i.prototype.winMouseX = 0,
    i.prototype.winMouseY = 0,
    i.prototype.pwinMouseX = 0,
    i.prototype.pwinMouseY = 0,
    i.prototype.mouseButton = 0,
    i.prototype.mouseIsPressed = !1,
    i.prototype.isMousePressed = !1,
    i.prototype._updateNextMouseCoords = function (t) {
      if ('touchstart' === t.type || 'touchmove' === t.type || 'touchend' === t.type || t.touches) this._setProperty('_nextMouseX', this._nextTouchX),
      this._setProperty('_nextMouseY', this._nextTouchY);
       else if (null !== this._curElement) {
        var e = n(this._curElement.elt, t);
        this._setProperty('_nextMouseX', e.x),
        this._setProperty('_nextMouseY', e.y)
      }
      this._setProperty('winMouseX', t.pageX),
      this._setProperty('winMouseY', t.pageY)
    },
    i.prototype._updateMouseCoords = function () {
      this._setProperty('pmouseX', this.mouseX),
      this._setProperty('pmouseY', this.mouseY),
      this._setProperty('mouseX', this._nextMouseX),
      this._setProperty('mouseY', this._nextMouseY),
      this._setProperty('pwinMouseX', this.winMouseX),
      this._setProperty('pwinMouseY', this.winMouseY)
    },
    i.prototype._setMouseButton = function (t) {
      1 === t.button ? this._setProperty('mouseButton', o.CENTER)  : 2 === t.button ? this._setProperty('mouseButton', o.RIGHT)  : this._setProperty('mouseButton', o.LEFT)
    },
    i.prototype._onmousemove = function (t) {
      var e,
      r = this._isGlobal ? window : this;
      this._updateNextMouseCoords(t),
      this._updateNextTouchCoords(t),
      this.isMousePressed ? 'function' == typeof r.mouseDragged ? (e = r.mouseDragged(t), e === !1 && t.preventDefault())  : 'function' == typeof r.touchMoved && (e = r.touchMoved(t), e === !1 && t.preventDefault())  : 'function' == typeof r.mouseMoved && (e = r.mouseMoved(t), e === !1 && t.preventDefault())
    },
    i.prototype._onmousedown = function (t) {
      var e,
      r = this._isGlobal ? window : this;
      this._setProperty('isMousePressed', !0),
      this._setProperty('mouseIsPressed', !0),
      this._setMouseButton(t),
      this._updateNextMouseCoords(t),
      this._updateNextTouchCoords(t),
      'function' == typeof r.mousePressed ? (e = r.mousePressed(t), e === !1 && t.preventDefault())  : 'function' == typeof r.touchStarted && (e = r.touchStarted(t), e === !1 && t.preventDefault())
    },
    i.prototype._onmouseup = function (t) {
      var e,
      r = this._isGlobal ? window : this;
      this._setProperty('isMousePressed', !1),
      this._setProperty('mouseIsPressed', !1),
      'function' == typeof r.mouseReleased ? (e = r.mouseReleased(t), e === !1 && t.preventDefault())  : 'function' == typeof r.touchEnded && (e = r.touchEnded(t), e === !1 && t.preventDefault())
    },
    i.prototype._ondragend = i.prototype._onmouseup,
    i.prototype._ondragover = i.prototype._onmousemove,
    i.prototype._onclick = function (t) {
      var e = this._isGlobal ? window : this;
      if ('function' == typeof e.mouseClicked) {
        var r = e.mouseClicked(t);
        r === !1 && t.preventDefault()
      }
    },
    i.prototype._onwheel = function (t) {
      var e = this._isGlobal ? window : this;
      if ('function' == typeof e.mouseWheel) {
        t.delta = t.deltaY;
        var r = e.mouseWheel(t);
        r === !1 && t.preventDefault()
      }
    },
    e.exports = i
  },
  {
    '../core/constants': 48,
    '../core/core': 49
  }
],
65: [
  function (t, e, r) {
    'use strict';
    function n(t, e, r) {
      r = r || 0;
      var n = t.getBoundingClientRect(),
      i = e.touches[r] || e.changedTouches[r];
      return {
        x: i.clientX - n.left,
        y: i.clientY - n.top,
        id: i.identifier
      }
    }
    var i = t('../core/core');
    i.prototype._nextTouchX = 0,
    i.prototype._nextTouchY = 0,
    i.prototype.touchX = 0,
    i.prototype.touchY = 0,
    i.prototype.ptouchX = 0,
    i.prototype.ptouchY = 0,
    i.prototype.touches = [
    ],
    i.prototype.touchIsDown = !1,
    i.prototype._updateNextTouchCoords = function (t) {
      if ('mousedown' !== t.type && 'mousemove' !== t.type && 'mouseup' !== t.type && t.touches) {
        if (null !== this._curElement) {
          var e = n(this._curElement.elt, t, 0);
          this._setProperty('_nextTouchX', e.x),
          this._setProperty('_nextTouchY', e.y);
          for (var r = [
          ], i = 0; i < t.touches.length; i++) r[i] = n(this._curElement.elt, t, i);
          this._setProperty('touches', r)
        }
      } else this._setProperty('_nextTouchX', this._nextMouseX),
      this._setProperty('_nextTouchY', this._nextMouseY)
    },
    i.prototype._updateTouchCoords = function () {
      this._setProperty('ptouchX', this.touchX),
      this._setProperty('ptouchY', this.touchY),
      this._setProperty('touchX', this._nextTouchX),
      this._setProperty('touchY', this._nextTouchY)
    },
    i.prototype._ontouchstart = function (t) {
      var e,
      r = this._isGlobal ? window : this;
      this._updateNextTouchCoords(t),
      this._updateNextMouseCoords(t),
      this._setProperty('touchIsDown', !0),
      'function' == typeof r.touchStarted ? (e = r.touchStarted(t), e === !1 && t.preventDefault())  : 'function' == typeof r.mousePressed && (e = r.mousePressed(t), e === !1 && t.preventDefault())
    },
    i.prototype._ontouchmove = function (t) {
      var e,
      r = this._isGlobal ? window : this;
      this._updateNextTouchCoords(t),
      this._updateNextMouseCoords(t),
      'function' == typeof r.touchMoved ? (e = r.touchMoved(t), e === !1 && t.preventDefault())  : 'function' == typeof r.mouseDragged && (e = r.mouseDragged(t), e === !1 && t.preventDefault())
    },
    i.prototype._ontouchend = function (t) {
      this._updateNextTouchCoords(t),
      this._updateNextMouseCoords(t),
      0 === this.touches.length && this._setProperty('touchIsDown', !1);
      var e,
      r = this._isGlobal ? window : this;
      'function' == typeof r.touchEnded ? (e = r.touchEnded(t), e === !1 && t.preventDefault())  : 'function' == typeof r.mouseReleased && (e = r.mouseReleased(t), e === !1 && t.preventDefault())
    },
    e.exports = i
  },
  {
    '../core/core': 49
  }
],
66: [
  function (t, e, r) {
    'use strict';
    function n(t) {
      var e = 3.5 * t | 0;
      if (e = e < 1 ? 1 : e < 248 ? e : 248, s !== e) {
        s = e,
        a = 1 + s << 1,
        l = new Int32Array(a),
        u = new Array(a);
        for (var r = 0; r < a; r++) u[r] = new Int32Array(256);
        for (var n, i, o, h, c = 1, p = e - 1; c < e; c++) {
          l[e + c] = l[p] = i = p * p,
          o = u[e + c],
          h = u[p--];
          for (var f = 0; f < 256; f++) o[f] = h[f] = i * f
        }
        n = l[e] = e * e,
        o = u[e];
        for (var d = 0; d < 256; d++) o[d] = n * d
      }
    }
    function i(t, e) {
      for (var r = o._toPixels(t), i = t.width, h = t.height, c = i * h, p = new Int32Array(c), f = 0; f < c; f++) p[f] = o._getARGB(r, f);
      var d,
      m,
      g,
      y,
      v,
      _,
      x,
      b,
      w,
      T,
      S = new Int32Array(c),
      C = new Int32Array(c),
      M = new Int32Array(c),
      R = new Int32Array(c),
      k = 0;
      n(e);
      var P,
      D,
      A,
      E;
      for (D = 0; D < h; D++) {
        for (P = 0; P < i; P++) {
          if (y = g = m = v = d = 0, _ = P - s, _ < 0) T = - _,
          _ = 0;
           else {
            if (_ >= i) break;
            T = 0
          }
          for (A = T; A < a && !(_ >= i); A++) {
            var O = p[_ + k];
            E = u[A],
            v += E[(O & - 16777216) >>> 24],
            m += E[(16711680 & O) >> 16],
            g += E[(65280 & O) >> 8],
            y += E[255 & O],
            d += l[A],
            _++
          }
          x = k + P,
          S[x] = v / d,
          C[x] = m / d,
          M[x] = g / d,
          R[x] = y / d
        }
        k += i
      }
      for (k = 0, b = - s, w = b * i, D = 0; D < h; D++) {
        for (P = 0; P < i; P++) {
          if (y = g = m = v = d = 0, b < 0) T = x = - b,
          _ = P;
           else {
            if (b >= h) break;
            T = 0,
            x = b,
            _ = P + w
          }
          for (A = T; A < a && !(x >= h); A++) E = u[A],
          v += E[S[_]],
          m += E[C[_]],
          g += E[M[_]],
          y += E[R[_]],
          d += l[A],
          x++,
          _ += i;
          p[P + k] = v / d << 24 | m / d << 16 | g / d << 8 | y / d
        }
        k += i,
        w += i,
        b++
      }
      o._setPixels(r, p)
    }
    var o = {
    };
    o._toPixels = function (t) {
      return t instanceof ImageData ? t.data : t.getContext('2d').getImageData(0, 0, t.width, t.height).data
    },
    o._getARGB = function (t, e) {
      var r = 4 * e;
      return t[r + 3] << 24 & 4278190080 | t[r] << 16 & 16711680 | t[r + 1] << 8 & 65280 | 255 & t[r + 2]
    },
    o._setPixels = function (t, e) {
      for (var r = 0, n = 0, i = t.length; n < i; n++) r = 4 * n,
      t[r + 0] = (16711680 & e[n]) >>> 16,
      t[r + 1] = (65280 & e[n]) >>> 8,
      t[r + 2] = 255 & e[n],
      t[r + 3] = (4278190080 & e[n]) >>> 24
    },
    o._toImageData = function (t) {
      return t instanceof ImageData ? t : t.getContext('2d').getImageData(0, 0, t.width, t.height)
    },
    o._createImageData = function (t, e) {
      return o._tmpCanvas = document.createElement('canvas'),
      o._tmpCtx = o._tmpCanvas.getContext('2d'),
      this._tmpCtx.createImageData(t, e)
    },
    o.apply = function (t, e, r) {
      var n = t.getContext('2d'),
      i = n.getImageData(0, 0, t.width, t.height),
      o = e(i, r);
      o instanceof ImageData ? n.putImageData(o, 0, 0, 0, 0, t.width, t.height)  : n.putImageData(i, 0, 0, 0, 0, t.width, t.height)
    },
    o.threshold = function (t, e) {
      var r = o._toPixels(t);
      void 0 === e && (e = 0.5);
      for (var n = Math.floor(255 * e), i = 0; i < r.length; i += 4) {
        var s,
        a = r[i],
        l = r[i + 1],
        u = r[i + 2],
        h = 0.2126 * a + 0.7152 * l + 0.0722 * u;
        s = h >= n ? 255 : 0,
        r[i] = r[i + 1] = r[i + 2] = s
      }
    },
    o.gray = function (t) {
      for (var e = o._toPixels(t), r = 0; r < e.length; r += 4) {
        var n = e[r],
        i = e[r + 1],
        s = e[r + 2],
        a = 0.2126 * n + 0.7152 * i + 0.0722 * s;
        e[r] = e[r + 1] = e[r + 2] = a
      }
    },
    o.opaque = function (t) {
      for (var e = o._toPixels(t), r = 0; r < e.length; r += 4) e[r + 3] = 255;
      return e
    },
    o.invert = function (t) {
      for (var e = o._toPixels(t), r = 0; r < e.length; r += 4) e[r] = 255 - e[r],
      e[r + 1] = 255 - e[r + 1],
      e[r + 2] = 255 - e[r + 2]
    },
    o.posterize = function (t, e) {
      var r = o._toPixels(t);
      if (e < 2 || e > 255) throw new Error('Level must be greater than 2 and less than 255 for posterize');
      for (var n = e - 1, i = 0; i < r.length; i += 4) {
        var s = r[i],
        a = r[i + 1],
        l = r[i + 2];
        r[i] = 255 * (s * e >> 8) / n,
        r[i + 1] = 255 * (a * e >> 8) / n,
        r[i + 2] = 255 * (l * e >> 8) / n
      }
    },
    o.dilate = function (t) {
      for (var e, r, n, i, s, a, l, u, h, c, p, f, d, m, g, y, v, _ = o._toPixels(t), x = 0, b = _.length ? _.length / 4 : 0, w = new Int32Array(b); x < b; ) for (e = x, r = x + t.width; x < r; ) n = i = o._getARGB(_, x),
      l = x - 1,
      a = x + 1,
      u = x - t.width,
      h = x + t.width,
      l < e && (l = x),
      a >= r && (a = x),
      u < 0 && (u = 0),
      h >= b && (h = x),
      f = o._getARGB(_, u),
      p = o._getARGB(_, l),
      d = o._getARGB(_, h),
      c = o._getARGB(_, a),
      s = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n),
      g = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p),
      m = 77 * (c >> 16 & 255) + 151 * (c >> 8 & 255) + 28 * (255 & c),
      y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f),
      v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d),
      g > s && (i = p, s = g),
      m > s && (i = c, s = m),
      y > s && (i = f, s = y),
      v > s && (i = d, s = v),
      w[x++] = i;
      o._setPixels(_, w)
    },
    o.erode = function (t) {
      for (var e, r, n, i, s, a, l, u, h, c, p, f, d, m, g, y, v, _ = o._toPixels(t), x = 0, b = _.length ? _.length / 4 : 0, w = new Int32Array(b); x < b; ) for (e = x, r = x + t.width; x < r; ) n = i = o._getARGB(_, x),
      l = x - 1,
      a = x + 1,
      u = x - t.width,
      h = x + t.width,
      l < e && (l = x),
      a >= r && (a = x),
      u < 0 && (u = 0),
      h >= b && (h = x),
      f = o._getARGB(_, u),
      p = o._getARGB(_, l),
      d = o._getARGB(_, h),
      c = o._getARGB(_, a),
      s = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n),
      g = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p),
      m = 77 * (c >> 16 & 255) + 151 * (c >> 8 & 255) + 28 * (255 & c),
      y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f),
      v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d),
      g < s && (i = p, s = g),
      m < s && (i = c, s = m),
      y < s && (i = f, s = y),
      v < s && (i = d, s = v),
      w[x++] = i;
      o._setPixels(_, w)
    };
    var s,
    a,
    l,
    u;
    o.blur = function (t, e) {
      i(t, e)
    },
    e.exports = o
  },
  {
  }
],
67: [
  function (t, e, r) {
    'use strict';
    var n = t('../core/core'),
    i = [
    ];
    n.prototype.createImage = function (t, e) {
      return new n.Image(t, e)
    },
    n.prototype.saveCanvas = function () {
      var t,
      e,
      r;
      if (3 === arguments.length ? (t = arguments[0], e = arguments[1], r = arguments[2])  : 2 === arguments.length ? 'object' == typeof arguments[0] ? (t = arguments[0], e = arguments[1])  : (e = arguments[0], r = arguments[1])  : 1 === arguments.length && ('object' == typeof arguments[0] ? t = arguments[0] : e = arguments[0]), t instanceof n.Element && (t = t.elt), t instanceof HTMLCanvasElement || (t = null), r || (r = n.prototype._checkFileExtension(e, r) [1], '' === r && (r = 'png')), t || this._curElement && this._curElement.elt && (t = this._curElement.elt), n.prototype._isSafari()) {
        var i = 'Hello, Safari user!\n';
        i += 'Now capturing a screenshot...\n',
        i += 'To save this image,\n',
        i += 'go to File --> Save As.\n',
        alert(i),
        window.location.href = t.toDataURL()
      } else {
        var o;
        if ('undefined' == typeof r) r = 'png',
        o = 'image/png';
         else switch (r) {
          case 'png':
            o = 'image/png';
            break;
          case 'jpeg':
            o = 'image/jpeg';
            break;
          case 'jpg':
            o = 'image/jpeg';
            break;
          default:
            o = 'image/png'
        }
        var s = 'image/octet-stream',
        a = t.toDataURL(o);
        a = a.replace(o, s),
        n.prototype.downloadFile(a, e, r)
      }
    },
    n.prototype.saveFrames = function (t, e, r, o, s) {
      var a = r || 3;
      a = n.prototype.constrain(a, 0, 15),
      a = 1000 * a;
      var l = o || 15;
      l = n.prototype.constrain(l, 0, 22);
      var u = 0,
      h = n.prototype._makeFrame,
      c = this._curElement.elt,
      p = setInterval(function () {
        h(t + u, e, c),
        u++
      }, 1000 / l);
      setTimeout(function () {
        if (clearInterval(p), s) s(i);
         else for (var t = 0; t < i.length; t++) {
          var e = i[t];
          n.prototype.downloadFile(e.imageData, e.filename, e.ext)
        }
        i = [
        ]
      }, a + 0.01)
    },
    n.prototype._makeFrame = function (t, e, r) {
      var n;
      n = this ? this._curElement.elt : r;
      var o;
      if (e) switch (e.toLowerCase()) {
        case 'png':
          o = 'image/png';
          break;
        case 'jpeg':
          o = 'image/jpeg';
          break;
        case 'jpg':
          o = 'image/jpeg';
          break;
        default:
          o = 'image/png'
      } else e = 'png',
      o = 'image/png';
      var s = 'image/octet-stream',
      a = n.toDataURL(o);
      a = a.replace(o, s);
      var l = {
    };
    l.imageData = a,
    l.filename = t,
    l.ext = e,
    i.push(l)
  },
  e.exports = n
},
{
  '../core/core': 49
}
],
68: [
  function (t, e, r) {
    'use strict';
    function n(t, e) {
      return t > 0 && t < e ? t : e
    }
    var i = t('../core/core'),
    o = t('./filters'),
    s = t('../core/canvas'),
    a = t('../core/constants');
    t('../core/error_helpers'),
    i.prototype.loadImage = function (t, e, r) {
      var n = new Image,
      o = new i.Image(1, 1, this),
      s = i._getDecrementPreload.apply(this, arguments);
      return n.onload = function () {
        o.width = o.canvas.width = n.width,
        o.height = o.canvas.height = n.height,
        o.drawingContext.drawImage(n, 0, 0),
        'function' == typeof e && e(o),
        s && e !== s && s()
      },
      n.onerror = function (t) {
        i._friendlyFileLoadError(0, n.src),
        'function' == typeof r && r !== s && r(t)
      },
      0 !== t.indexOf('data:image/') && (n.crossOrigin = 'Anonymous'),
      n.src = t,
      o
    },
    i.prototype.image = function (t, e, r, i, o, a, l, u, h) {
      if (arguments.length <= 5) if (a = e || 0, l = r || 0, e = 0, r = 0, t.elt && t.elt.videoWidth && !t.canvas) {
        var c = t.elt.videoWidth,
        p = t.elt.videoHeight;
        u = i || t.elt.width,
        h = o || t.elt.width * p / c,
        i = c,
        o = p
      } else u = i || t.width,
      h = o || t.height,
      i = t.width,
      o = t.height;
       else {
        if (9 !== arguments.length) throw 'Wrong number of arguments to image()';
        e = e || 0,
        r = r || 0,
        i = n(i, t.width),
        o = n(o, t.height),
        a = a || 0,
        l = l || 0,
        u = u || t.width,
        h = h || t.height
      }
      var f = s.modeAdjust(a, l, u, h, this._renderer._imageMode);
      this._renderer.image(t, e, r, i, o, f.x, f.y, f.w, f.h)
    },
    i.prototype.tint = function () {
      var t = this.color.apply(this, arguments);
      this._renderer._tint = t.levels
    },
    i.prototype.noTint = function () {
      this._renderer._tint = null
    },
    i.prototype._getTintedImageCanvas = function (t) {
      if (!t.canvas) return t;
      var e = o._toPixels(t.canvas),
      r = document.createElement('canvas');
      r.width = t.canvas.width,
      r.height = t.canvas.height;
      for (var n = r.getContext('2d'), i = n.createImageData(t.canvas.width, t.canvas.height), s = i.data, a = 0; a < e.length; a += 4) {
        var l = e[a],
        u = e[a + 1],
        h = e[a + 2],
        c = e[a + 3];
        s[a] = l * this._renderer._tint[0] / 255,
        s[a + 1] = u * this._renderer._tint[1] / 255,
        s[a + 2] = h * this._renderer._tint[2] / 255,
        s[a + 3] = c * this._renderer._tint[3] / 255
      }
      return n.putImageData(i, 0, 0),
      r
    },
    i.prototype.imageMode = function (t) {
      t !== a.CORNER && t !== a.CORNERS && t !== a.CENTER || (this._renderer._imageMode = t)
    },
    e.exports = i
  },
  {
    '../core/canvas': 47,
    '../core/constants': 48,
    '../core/core': 49,
    '../core/error_helpers': 52,
    './filters': 66
  }
],
69: [
  function (t, e, r) {
    'use strict';
    var n = t('../core/core'),
    i = t('./filters');
    n.Image = function (t, e) {
      this.width = t,
      this.height = e,
      this.canvas = document.createElement('canvas'),
      this.canvas.width = this.width,
      this.canvas.height = this.height,
      this.drawingContext = this.canvas.getContext('2d'),
      this._pixelDensity = 1,
      this.isTexture = !1,
      this.pixels = [
      ]
    },
    n.Image.prototype._setProperty = function (t, e) {
      this[t] = e
    },
    n.Image.prototype.loadPixels = function () {
      n.Renderer2D.prototype.loadPixels.call(this)
    },
    n.Image.prototype.updatePixels = function (t, e, r, i) {
      n.Renderer2D.prototype.updatePixels.call(this, t, e, r, i)
    },
    n.Image.prototype.get = function (t, e, r, i) {
      return n.Renderer2D.prototype.get.call(this, t, e, r, i)
    },
    n.Image.prototype.set = function (t, e, r) {
      n.Renderer2D.prototype.set.call(this, t, e, r)
    },
    n.Image.prototype.resize = function (t, e) {
      0 === t && 0 === e ? (t = this.canvas.width, e = this.canvas.height)  : 0 === t ? t = this.canvas.width * e / this.canvas.height : 0 === e && (e = this.canvas.height * t / this.canvas.width);
      var r = document.createElement('canvas');
      r.width = t,
      r.height = e,
      r.getContext('2d').drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, r.width, r.height),
      this.canvas.width = this.width = t,
      this.canvas.height = this.height = e,
      this.drawingContext.drawImage(r, 0, 0, t, e, 0, 0, t, e),
      this.pixels.length > 0 && this.loadPixels()
    },
    n.Image.prototype.copy = function () {
      n.prototype.copy.apply(this, arguments)
    },
    n.Image.prototype.mask = function (t) {
      void 0 === t && (t = this);
      var e = this.drawingContext.globalCompositeOperation,
      r = 1;
      t instanceof n.Renderer && (r = t._pInst._pixelDensity);
      var i = [
        t,
        0,
        0,
        r * t.width,
        r * t.height,
        0,
        0,
        this.width,
        this.height
      ];
      this.drawingContext.globalCompositeOperation = 'destination-in',
      this.copy.apply(this, i),
      this.drawingContext.globalCompositeOperation = e
    },
    n.Image.prototype.filter = function (t, e) {
      i.apply(this.canvas, i[t.toLowerCase()], e)
    },
    n.Image.prototype.blend = function () {
      n.prototype.blend.apply(this, arguments)
    },
    n.Image.prototype.save = function (t, e) {
      var r;
      if (e) switch (e.toLowerCase()) {
        case 'png':
          r = 'image/png';
          break;
        case 'jpeg':
          r = 'image/jpeg';
          break;
        case 'jpg':
          r = 'image/jpeg';
          break;
        default:
          r = 'image/png'
      } else e = 'png',
      r = 'image/png';
      var i = 'image/octet-stream',
      o = this.canvas.toDataURL(r);
      o = o.replace(r, i),
      n.prototype.downloadFile(o, t, e)
    },
    n.Image.prototype.createTexture = function (t) {
      return this
    },
    e.exports = n.Image
  },
  {
    '../core/core': 49,
    './filters': 66
  }
  ],
  70: [
    function (t, e, r) {
      'use strict';
      var n = t('../core/core'),
      i = t('./filters');
      t('../color/p5.Color'),
      n.prototype.pixels = [
      ],
      n.prototype.blend = function () {
        this._renderer ? this._renderer.blend.apply(this._renderer, arguments)  : n.Renderer2D.prototype.blend.apply(this, arguments)
      },
      n.prototype.copy = function () {
        n.Renderer2D._copyHelper.apply(this, arguments)
      },
      n.prototype.filter = function (t, e) {
        i.apply(this.canvas, i[t.toLowerCase()], e)
      },
      n.prototype.get = function (t, e, r, n) {
        return this._renderer.get(t, e, r, n)
      },
      n.prototype.loadPixels = function () {
        this._renderer.loadPixels()
      },
      n.prototype.set = function (t, e, r) {
        this._renderer.set(t, e, r)
      },
      n.prototype.updatePixels = function (t, e, r, n) {
        0 !== this.pixels.length && this._renderer.updatePixels(t, e, r, n)
      },
      e.exports = n
    },
    {
      '../color/p5.Color': 43,
      '../core/core': 49,
      './filters': 66
    }
  ],
  71: [
    function (t, e, r) {
      'use strict';
      function n(t, e) {
        var r = {
        };
        if (e = e || [
        ], 'undefined' == typeof e) for (var n = 0; n < t.length; n++) e[n.toString()] = n;
        for (var i = 0; i < e.length; i++) {
          var o = e[i],
          s = t[i];
          r[o] = s
        }
        return r
      }
      function i(t) {
        return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
      }
      function o(t, e) {
        e && e !== !0 && 'true' !== e || (e = ''),
        t || (t = 'untitled');
        var r = '';
        return t && t.indexOf('.') > - 1 && (r = t.split('.').pop()),
        e && r !== e && (r = e, t = t + '.' + r),
        [
          t,
          r
        ]
      }
      function s(t) {
        document.body.removeChild(t.target)
      }
      var a = t('../core/core'),
      l = t('reqwest'),
      u = t('opentype.js');
      t('../core/error_helpers'),
      a._getDecrementPreload = function () {
        var t = arguments[arguments.length - 1];
        return (window.preload || this && this.preload) && 'function' == typeof t ? t : null
      },
      a.prototype.loadFont = function (t, e, r) {
        var n = new a.Font(this),
        i = a._getDecrementPreload.apply(this, arguments);
        return u.load(t, function (o, s) {
          if (o) {
            if ('undefined' != typeof r && r !== i) return r(o);
            throw o
          }
          n.font = s,
          'undefined' != typeof e && e(n),
          i && e !== i && i();
          var a,
          l,
          u = [
            'ttf',
            'otf',
            'woff',
            'woff2'
          ],
          h = t.split('\\').pop().split('/').pop(),
          c = h.lastIndexOf('.'),
          p = c < 1 ? null : h.substr(c + 1);
          u.indexOf(p) > - 1 && (a = h.substr(0, c), l = document.createElement('style'), l.appendChild(document.createTextNode('\n@font-face {\nfont-family: ' + a + ';\nsrc: url(' + t + ');\n}\n')), document.head.appendChild(l))
        }),
        n
      },
      a.prototype.createInput = function () {
        throw 'not yet implemented'
      },
      a.prototype.createReader = function () {
        throw 'not yet implemented'
      },
      a.prototype.loadBytes = function () {
        throw 'not yet implemented'
      },
      a.prototype.loadJSON = function () {
        for (var t, e = arguments[0], r = arguments[1], n = a._getDecrementPreload.apply(this, arguments), i = [
        ], o = 'json', s = 2; s < arguments.length; s++) {
          var u = arguments[s];
          'string' == typeof u ? 'jsonp' !== u && 'json' !== u || (o = u)  : 'function' == typeof u && (t = u)
        }
        return l({
          url: e,
          type: o,
          crossOrigin: !0,
          error: function (e) {
            t ? t(e)  : console.log(e.statusText)
          },
          success: function (t) {
            for (var e in t) i[e] = t[e];
            'undefined' != typeof r && r(t),
            n && r !== n && n()
          }
        }),
        i
      },
      a.prototype.loadStrings = function (t, e, r) {
        var n = [
        ],
        i = new XMLHttpRequest,
        o = a._getDecrementPreload.apply(this, arguments);
        return i.addEventListener('error', function (t) {
          r ? r(t)  : console.log(t.responseText)
        }),
        i.open('GET', t, !0),
        i.onreadystatechange = function () {
          if (4 === i.readyState) if (200 === i.status) {
            var t = i.responseText.match(/[^\r\n]+/g);
            for (var s in t) n[s] = t[s];
            'undefined' != typeof e && e(n),
            o && e !== o && o()
          } else r ? r(i)  : console.log(i.statusText)
        },
        i.send(null),
        n
      },
      a.prototype.loadTable = function (t) {
        for (var e = null, r = [
        ], i = !1, o = ',', s = !1, u = a._getDecrementPreload.apply(this, arguments), h = 1; h < arguments.length; h++) if ('function' == typeof arguments[h] && arguments[h] !== u) e = arguments[h];
         else if ('string' == typeof arguments[h]) if (r.push(arguments[h]), 'header' === arguments[h] && (i = !0), 'csv' === arguments[h]) {
          if (s) throw new Error('Cannot set multiple separator types.');
          o = ',',
          s = !0
        } else if ('tsv' === arguments[h]) {
          if (s) throw new Error('Cannot set multiple separator types.');
          o = '\t',
          s = !0
        }
        var c = new a.Table;
        return l({
          url: t,
          crossOrigin: !0,
          type: 'csv'
        }).then(function (t) {
          t = t.responseText;
          for (var r, s = {
          }, l = 0, p = 1, f = 2, d = 4, m = '"', g = '\r', y = '\n', v = [
          ], _ = 0, x = null, b = function () {
            s.escaped = !1,
            x = [
            ],
            T()
          }, w = function () {
            s.currentState = d,
            v.push(x),
            x = null
          }, T = function () {
            s.currentState = l,
            s.token = ''
          }, S = function () {
            x.push(s.token),
            T()
          }; ; ) {
            if (r = t[_++], null == r) {
              if (s.escaped) throw new Error('Unclosed quote in file.');
              if (x) {
                S(),
                w();
                break
              }
            }
            if (null === x && b(), s.currentState === l) {
              if (r === m) {
                s.escaped = !0,
                s.currentState = p;
                continue
              }
              s.currentState = p
            }
            s.currentState === p && s.escaped ? r === m ? t[_] === m ? (s.token += m, _++)  : (s.escaped = !1, s.currentState = f)  : s.token += r : r === g ? (t[_] === y && _++, S(), w())  : r === y ? (S(), w())  : r === o ? S()  : s.currentState === p && (s.token += r)
          }
          if (i) c.columns = v.shift();
           else for (h = 0; h < v[0].length; h++) c.columns[h] = 'null';
          var C;
          for (h = 0; h < v.length && (h !== v.length - 1 || 1 !== v[h].length || 'undefined' !== v[h][0]); h++) C = new a.TableRow,
          C.arr = v[h],
          C.obj = n(v[h], c.columns),
          c.addRow(C);
          null !== e && e(c),
          u && e !== u && u()
        }).fail(function (r, n) {
          a._friendlyFileLoadError(2, t),
          'undefined' != typeof e && e !== u && e(!1)
        }),
        c
      },
      a.prototype.parseXML = function (t) {
        var e,
        r = new a.XML;
        if (t.children.length) {
          for (e = 0; e < t.children.length; e++) {
            var n = parseXML(t.children[e]);
            r.addChild(n)
          }
          r.setName(t.nodeName),
          r._setCont(t.textContent),
          r._setAttributes(t);
          for (var i = 0; i < r.children.length; i++) r.children[i].parent = r;
          return r
        }
        return r.setName(t.nodeName),
        r._setCont(t.textContent),
        r._setAttributes(t),
        r
      },
      a.prototype.loadXML = function (t, e, r) {
        var n = {
        },
        i = a._getDecrementPreload.apply(this, arguments);
        return l({
          url: t,
          type: 'xml',
          crossOrigin: !0,
          error: function (t) {
            r ? r(t)  : console.log(t.statusText)
          }
        }).then(function (t) {
          var r = parseXML(t.documentElement);
          for (var o in r) n[o] = r[o];
          'undefined' != typeof e && e(n),
          i && e !== i && i()
        }),
        n
      },
      a.prototype.selectFolder = function () {
        throw 'not yet implemented'
      },
      a.prototype.selectInput = function () {
        throw 'not yet implemented'
      },
      a.prototype.httpGet = function () {
        var t = Array.prototype.slice.call(arguments);
        t.push('GET'),
        a.prototype.httpDo.apply(this, t)
      },
      a.prototype.httpPost = function () {
        var t = Array.prototype.slice.call(arguments);
        t.push('POST'),
        a.prototype.httpDo.apply(this, t)
      },
      a.prototype.httpDo = function () {
        if ('object' == typeof arguments[0]) l(arguments[0]);
         else {
          for (var t, e, r = 'GET', n = arguments[0], i = {
          }, o = '', s = 1; s < arguments.length; s++) {
            var a = arguments[s];
            'string' == typeof a ? 'GET' === a || 'POST' === a || 'PUT' === a ? r = a : o = a : 'object' == typeof a ? i = a : 'function' == typeof a && (t ? e = a : t = a)
          }
          '' === o && (o = n.indexOf('json') !== - 1 ? 'json' : n.indexOf('xml') !== - 1 ? 'xml' : 'text'),
          l({
            url: n,
            method: r,
            data: i,
            type: o,
            crossOrigin: !0,
            success: function (e) {
              'undefined' != typeof t && t('text' === o ? e.response : e)
            },
            error: function (t) {
              e ? e(t)  : console.log(t.statusText)
            }
          })
        }
      },
      window.URL = window.URL || window.webkitURL,
      a.prototype._pWriters = [
      ],
      a.prototype.beginRaw = function () {
        throw 'not yet implemented'
      },
      a.prototype.beginRecord = function () {
        throw 'not yet implemented'
      },
      a.prototype.createOutput = function () {
        throw 'not yet implemented'
      },
      a.prototype.createWriter = function (t, e) {
        var r;
        for (var n in a.prototype._pWriters) if (a.prototype._pWriters[n].name === t) return r = new a.PrintWriter(t + window.millis(), e),
        a.prototype._pWriters.push(r),
        r;
        return r = new a.PrintWriter(t, e),
        a.prototype._pWriters.push(r),
        r
      },
      a.prototype.endRaw = function () {
        throw 'not yet implemented'
      },
      a.prototype.endRecord = function () {
        throw 'not yet implemented'
      },
      a.PrintWriter = function (t, e) {
        var r = this;
        this.name = t,
        this.content = '',
        this.print = function (t) {
          this.content += t
        },
        this.println = function (t) {
          this.content += t + '\n'
        },
        this.flush = function () {
          this.content = ''
        },
        this.close = function () {
          var n = [
          ];
          n.push(this.content),
          a.prototype.writeFile(n, t, e);
          for (var i in a.prototype._pWriters) a.prototype._pWriters[i].name === this.name && a.prototype._pWriters.splice(i, 1);
          r.flush(),
          r = {
          }
        }
      },
      a.prototype.saveBytes = function () {
        throw 'not yet implemented'
      },
      a.prototype.save = function (t, e, r) {
        var n = arguments,
        i = this._curElement.elt;
        if (0 === n.length) return void a.prototype.saveCanvas(i);
        if (n[0] instanceof a.Renderer || n[0] instanceof a.Graphics) return void a.prototype.saveCanvas(n[0].elt, n[1], n[2]);
        if (1 === n.length && 'string' == typeof n[0]) a.prototype.saveCanvas(i, n[0]);
         else {
          var s = o(n[1], n[2]) [1];
          switch (s) {
            case 'json':
              return void a.prototype.saveJSON(n[0], n[1], n[2]);
            case 'txt':
              return void a.prototype.saveStrings(n[0], n[1], n[2]);
            default:
              n[0] instanceof Array ? a.prototype.saveStrings(n[0], n[1], n[2])  : n[0] instanceof a.Table ? a.prototype.saveTable(n[0], n[1], n[2], n[3])  : n[0] instanceof a.Image ? a.prototype.saveCanvas(n[0].canvas, n[1])  : n[0] instanceof a.SoundFile && a.prototype.saveSound(n[0], n[1], n[2], n[3])
          }
        }
      },
      a.prototype.saveJSON = function (t, e, r) {
        var n;
        n = r ? JSON.stringify(t)  : JSON.stringify(t, void 0, 2),
        console.log(n),
        this.saveStrings(n.split('\n'), e, 'json')
      },
      a.prototype.saveJSONObject = a.prototype.saveJSON,
      a.prototype.saveJSONArray = a.prototype.saveJSON,
      a.prototype.saveStream = function () {
        throw 'not yet implemented'
      },
      a.prototype.saveStrings = function (t, e, r) {
        for (var n = r || 'txt', i = this.createWriter(e, n), o = 0; o < t.length; o++) o < t.length - 1 ? i.println(t[o])  : i.print(t[o]);
        i.close(),
        i.flush()
      },
      a.prototype.saveXML = function () {
        throw 'not yet implemented'
      },
      a.prototype.selectOutput = function () {
        throw 'not yet implemented'
      },
      a.prototype.saveTable = function (t, e, r) {
        var n = this.createWriter(e, r),
        o = t.columns,
        s = ',';
        if ('tsv' === r && (s = '\t'), 'html' !== r) {
          if ('0' !== o[0]) for (var a = 0; a < o.length; a++) a < o.length - 1 ? n.print(o[a] + s)  : n.println(o[a]);
          for (var l = 0; l < t.rows.length; l++) {
            var u;
            for (u = 0; u < t.rows[l].arr.length; u++) u < t.rows[l].arr.length - 1 ? n.print(t.rows[l].arr[u] + s)  : l < t.rows.length - 1 ? n.println(t.rows[l].arr[u])  : n.print(t.rows[l].arr[u])
          }
        } else {
          n.println('<html>'),
          n.println('<head>');
          var h = '  <meta http-equiv="content-type" content';
          if (h += '="text/html;charset=utf-8" />', n.println(h), n.println('</head>'), n.println('<body>'), n.println('  <table>'), '0' !== o[0]) {
            n.println('    <tr>');
            for (var c = 0; c < o.length; c++) {
              var p = i(o[c]);
              n.println('      <td>' + p),
              n.println('      </td>')
            }
            n.println('    </tr>')
          }
          for (var f = 0; f < t.rows.length; f++) {
            n.println('    <tr>');
            for (var d = 0; d < t.columns.length; d++) {
              var m = t.rows[f].getString(d),
              g = i(m);
              n.println('      <td>' + g),
              n.println('      </td>')
            }
            n.println('    </tr>')
          }
          n.println('  </table>'),
          n.println('</body>'),
          n.print('</html>')
        }
        n.close(),
        n.flush()
      },
      a.prototype.writeFile = function (t, e, r) {
        var n = 'application/octet-stream';
        a.prototype._isSafari() && (n = 'text/plain');
        var i = new Blob(t, {
          type: n
        }),
        o = window.URL.createObjectURL(i);
        a.prototype.downloadFile(o, e, r)
      },
      a.prototype.downloadFile = function (t, e, r) {
        var n = o(e, r),
        i = n[0],
        l = n[1],
        u = document.createElement('a');
        if (u.href = t, u.download = i, u.onclick = s, u.style.display = 'none', document.body.appendChild(u), a.prototype._isSafari()) {
          var h = 'Hello, Safari user! To download this file...\n';
          h += '1. Go to File --> Save As.\n',
          h += '2. Choose "Page Source" as the Format.\n',
          h += '3. Name it with this extension: ."' + l + '"',
          alert(h)
        }
        u.click(),
        t = null
      },
      a.prototype._checkFileExtension = o,
      a.prototype._isSafari = function () {
        var t = Object.prototype.toString.call(window.HTMLElement);
        return t.indexOf('Constructor') > 0
      },
      e.exports = a
    },
    {
      '../core/core': 49,
      '../core/error_helpers': 52,
      'opentype.js': 8,
      reqwest: 27
    }
    ],
    72: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core');
        n.Table = function (t) {
          this.columns = [
          ],
          this.rows = [
          ]
        },
        n.Table.prototype.addRow = function (t) {
          var e = t || new n.TableRow;
          if ('undefined' == typeof e.arr || 'undefined' == typeof e.obj) throw 'invalid TableRow: ' + e;
          return e.table = this,
          this.rows.push(e),
          e
        },
        n.Table.prototype.removeRow = function (t) {
          this.rows[t].table = null;
          var e = this.rows.splice(t + 1, this.rows.length);
          this.rows.pop(),
          this.rows = this.rows.concat(e)
        },
        n.Table.prototype.getRow = function (t) {
          return this.rows[t]
        },
        n.Table.prototype.getRows = function () {
          return this.rows
        },
        n.Table.prototype.findRow = function (t, e) {
          if ('string' == typeof e) {
            for (var r = 0; r < this.rows.length; r++) if (this.rows[r].obj[e] === t) return this.rows[r]
          } else for (var n = 0; n < this.rows.length; n++) if (this.rows[n].arr[e] === t) return this.rows[n];
          return null
        },
        n.Table.prototype.findRows = function (t, e) {
          var r = [
          ];
          if ('string' == typeof e) for (var n = 0; n < this.rows.length; n++) this.rows[n].obj[e] === t && r.push(this.rows[n]);
           else for (var i = 0; i < this.rows.length; i++) this.rows[i].arr[e] === t && r.push(this.rows[i]);
          return r
        },
        n.Table.prototype.matchRow = function (t, e) {
          if ('number' == typeof e) {
            for (var r = 0; r < this.rows.length; r++) if (this.rows[r].arr[e].match(t)) return this.rows[r]
          } else for (var n = 0; n < this.rows.length; n++) if (this.rows[n].obj[e].match(t)) return this.rows[n];
          return null
        },
        n.Table.prototype.matchRows = function (t, e) {
          var r = [
          ];
          if ('number' == typeof e) for (var n = 0; n < this.rows.length; n++) this.rows[n].arr[e].match(t) && r.push(this.rows[n]);
           else for (var i = 0; i < this.rows.length; i++) this.rows[i].obj[e].match(t) && r.push(this.rows[i]);
          return r
        },
        n.Table.prototype.getColumn = function (t) {
          var e = [
          ];
          if ('string' == typeof t) for (var r = 0; r < this.rows.length; r++) e.push(this.rows[r].obj[t]);
           else for (var n = 0; n < this.rows.length; n++) e.push(this.rows[n].arr[t]);
          return e
        },
        n.Table.prototype.clearRows = function () {
          delete this.rows,
          this.rows = [
          ]
        },
        n.Table.prototype.addColumn = function (t) {
          var e = t || null;
          this.columns.push(e)
        },
        n.Table.prototype.getColumnCount = function () {
          return this.columns.length
        },
        n.Table.prototype.getRowCount = function () {
          return this.rows.length
        },
        n.Table.prototype.removeTokens = function (t, e) {
          for (var r = function (t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
          }, n = [
          ], i = 0; i < t.length; i++) n.push(r(t.charAt(i)));
          var o = new RegExp(n.join('|'), 'g');
          if ('undefined' == typeof e) for (var s = 0; s < this.columns.length; s++) for (var a = 0; a < this.rows.length; a++) {
            var l = this.rows[a].arr[s];
            l = l.replace(o, ''),
            this.rows[a].arr[s] = l,
            this.rows[a].obj[this.columns[s]] = l
          } else if ('string' == typeof e) for (var u = 0; u < this.rows.length; u++) {
            var h = this.rows[u].obj[e];
            h = h.replace(o, ''),
            this.rows[u].obj[e] = h;
            var c = this.columns.indexOf(e);
            this.rows[u].arr[c] = h
          } else for (var p = 0; p < this.rows.length; p++) {
            var f = this.rows[p].arr[e];
            f = f.replace(o, ''),
            this.rows[p].arr[e] = f,
            this.rows[p].obj[this.columns[e]] = f
          }
        },
        n.Table.prototype.trim = function (t) {
          var e = new RegExp(' ', 'g');
          if ('undefined' == typeof t) for (var r = 0; r < this.columns.length; r++) for (var n = 0; n < this.rows.length; n++) {
            var i = this.rows[n].arr[r];
            i = i.replace(e, ''),
            this.rows[n].arr[r] = i,
            this.rows[n].obj[this.columns[r]] = i
          } else if ('string' == typeof t) for (var o = 0; o < this.rows.length; o++) {
            var s = this.rows[o].obj[t];
            s = s.replace(e, ''),
            this.rows[o].obj[t] = s;
            var a = this.columns.indexOf(t);
            this.rows[o].arr[a] = s
          } else for (var l = 0; l < this.rows.length; l++) {
            var u = this.rows[l].arr[t];
            u = u.replace(e, ''),
            this.rows[l].arr[t] = u,
            this.rows[l].obj[this.columns[t]] = u
          }
        },
        n.Table.prototype.removeColumn = function (t) {
          var e,
          r;
          'string' == typeof t ? (e = t, r = this.columns.indexOf(t), console.log('string'))  : (r = t, e = this.columns[t]);
          var n = this.columns.splice(r + 1, this.columns.length);
          this.columns.pop(),
          this.columns = this.columns.concat(n);
          for (var i = 0; i < this.rows.length; i++) {
            var o = this.rows[i].arr,
            s = o.splice(r + 1, o.length);
            o.pop(),
            this.rows[i].arr = o.concat(s),
            delete this.rows[i].obj[e]
          }
        },
        n.Table.prototype.set = function (t, e, r) {
          this.rows[t].set(e, r)
        },
        n.Table.prototype.setNum = function (t, e, r) {
          this.rows[t].setNum(e, r)
        },
        n.Table.prototype.setString = function (t, e, r) {
          this.rows[t].setString(e, r)
        },
        n.Table.prototype.get = function (t, e) {
          return this.rows[t].get(e)
        },
        n.Table.prototype.getNum = function (t, e) {
          return this.rows[t].getNum(e)
        },
        n.Table.prototype.getString = function (t, e) {
          return this.rows[t].getString(e)
        },
        n.Table.prototype.getObject = function (t) {
          for (var e, r, n, i = {
          }, o = 0; o < this.rows.length; o++) if (e = this.rows[o].obj, 'string' == typeof t) {
            if (r = this.columns.indexOf(t), !(r >= 0)) throw 'This table has no column named "' + t + '"';
            n = e[t],
            i[n] = e
          } else i[o] = this.rows[o].obj;
          return i
        },
        n.Table.prototype.getArray = function () {
          for (var t = [
          ], e = 0; e < this.rows.length; e++) t.push(this.rows[e].arr);
          return t
        },
        e.exports = n.Table
      },
      {
        '../core/core': 49
      }
    ],
    73: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core');
        n.TableRow = function (t, e) {
          var r = [
          ],
          n = {
          };
          t && (e = e || ',', r = t.split(e));
          for (var i = 0; i < r.length; i++) {
            var o = i,
            s = r[i];
            n[o] = s
          }
          this.arr = r,
          this.obj = n,
          this.table = null
        },
        n.TableRow.prototype.set = function (t, e) {
          if ('string' == typeof t) {
            var r = this.table.columns.indexOf(t);
            if (!(r >= 0)) throw 'This table has no column named "' + t + '"';
            this.obj[t] = e,
            this.arr[r] = e
          } else {
            if (!(t < this.table.columns.length)) throw 'Column #' + t + ' is out of the range of this table';
            this.arr[t] = e;
            var n = this.table.columns[t];
            this.obj[n] = e
          }
        },
        n.TableRow.prototype.setNum = function (t, e) {
          var r = parseFloat(e, 10);
          this.set(t, r)
        },
        n.TableRow.prototype.setString = function (t, e) {
          var r = e.toString();
          this.set(t, r)
        },
        n.TableRow.prototype.get = function (t) {
          return 'string' == typeof t ? this.obj[t] : this.arr[t]
        },
        n.TableRow.prototype.getNum = function (t) {
          var e;
          if (e = 'string' == typeof t ? parseFloat(this.obj[t], 10)  : parseFloat(this.arr[t], 10), 'NaN' === e.toString()) throw 'Error: ' + this.obj[t] + ' is NaN (Not a Number)';
          return e
        },
        n.TableRow.prototype.getString = function (t) {
          return 'string' == typeof t ? this.obj[t].toString()  : this.arr[t].toString()
        },
        e.exports = n.TableRow
      },
      {
        '../core/core': 49
      }
    ],
    74: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core');
        n.XML = function () {
          this.name = null,
          this.attributes = {
          },
          this.children = [
          ],
          this.parent = null,
          this.content = null
        },
        n.XML.prototype.getParent = function () {
          return this.parent
        },
        n.XML.prototype.getName = function () {
          return this.name
        },
        n.XML.prototype.setName = function (t) {
          this.name = t
        },
        n.XML.prototype.hasChildren = function () {
          return this.children.length > 0
        },
        n.XML.prototype.listChildren = function () {
          return this.children.map(function (t) {
            return t.name
          })
        },
        n.XML.prototype.getChildren = function (t) {
          return t ? this.children.filter(function (e) {
            return e.name === t
          })  : this.children
        },
        n.XML.prototype.getChild = function (t) {
          return 'string' == typeof t ? this.children.find(function (e) {
            return e.name === t
          })  : this.children[t]
        },
        n.XML.prototype.addChild = function (t) {
          t instanceof n.XML && this.children.push(t)
        },
        n.XML.prototype.removeChild = function (t) {
          var e = - 1;
          if ('string' == typeof t) {
            for (var r = 0; r < this.children.length; r++) if (this.children[r].name === t) {
              e = r;
              break
            }
          } else e = t;
          e !== - 1 && this.children.splice(e, 1)
        },
        n.XML.prototype.getAttributeCount = function () {
          return Object.keys(this.attributes).length
        },
        n.XML.prototype.listAttributes = function () {
          return Object.keys(this.attributes)
        },
        n.XML.prototype.hasAttribute = function (t) {
          return !!this.attributes[t]
        },
        n.XML.prototype.getNumber = function (t, e) {
          return Number(this.attributes[t]) || e || 0
        },
        n.XML.prototype.getString = function (t, e) {
          return String(this.attributes[t]) || e || null
        },
        n.XML.prototype.setAttribute = function (t, e) {
          this.attributes[t] && (this.attributes[t] = e)
        },
        n.XML.prototype.getContent = function (t) {
          return this.content || t || null
        },
        n.XML.prototype.setContent = function (t) {
          this.children.length || (this.content = t)
        },
        n.XML.prototype._setCont = function (t) {
          var e;
          e = t,
          e = e.replace(/\s\s+/g, ','),
          this.content = e
        },
        n.XML.prototype._setAttributes = function (t) {
          var e,
          r = {
          };
          for (e = 0; e < t.attributes.length; e++) r[t.attributes[e].nodeName] = t.attributes[e].nodeValue;
          this.attributes = r
        },
        e.exports = n.XML
      },
      {
        '../core/core': 49
      }
    ],
    75: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core');
        n.prototype.abs = Math.abs,
        n.prototype.ceil = Math.ceil,
        n.prototype.constrain = function (t, e, r) {
          return Math.max(Math.min(t, r), e)
        },
        n.prototype.dist = function (t, e, r, n, i, o) {
          return 4 === arguments.length ? Math.sqrt((r - t) * (r - t) + (n - e) * (n - e))  : 6 === arguments.length ? Math.sqrt((n - t) * (n - t) + (i - e) * (i - e) + (o - r) * (o - r))  : void 0
        },
        n.prototype.exp = Math.exp,
        n.prototype.floor = Math.floor,
        n.prototype.lerp = function (t, e, r) {
          return r * (e - t) + t
        },
        n.prototype.log = Math.log,
        n.prototype.mag = function (t, e) {
          return Math.sqrt(t * t + e * e)
        },
        n.prototype.map = function (t, e, r, n, i) {
          return (t - e) / (r - e) * (i - n) + n
        },
        n.prototype.max = function () {
          return arguments[0] instanceof Array ? Math.max.apply(null, arguments[0])  : Math.max.apply(null, arguments)
        },
        n.prototype.min = function () {
          return arguments[0] instanceof Array ? Math.min.apply(null, arguments[0])  : Math.min.apply(null, arguments)
        },
        n.prototype.norm = function (t, e, r) {
          return this.map(t, e, r, 0, 1)
        },
        n.prototype.pow = Math.pow,
        n.prototype.round = Math.round,
        n.prototype.sq = function (t) {
          return t * t
        },
        n.prototype.sqrt = Math.sqrt,
        e.exports = n
      },
      {
        '../core/core': 49
      }
    ],
    76: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core');
        n.prototype.createVector = function (t, e, r) {
          return this instanceof n ? new n.Vector(this, arguments)  : new n.Vector(t, e, r)
        },
        e.exports = n
      },
      {
        '../core/core': 49
      }
    ],
    77: [
      function (t, e, r) {
        'use strict';
        var n,
        i = t('../core/core'),
        o = 4,
        s = 1 << o,
        a = 8,
        l = 1 << a,
        u = 4095,
        h = 4,
        c = 0.5,
        p = function (t) {
          return 0.5 * (1 - Math.cos(t * Math.PI))
        };
        i.prototype.noise = function (t, e, r) {
          if (e = e || 0, r = r || 0, null == n) {
            n = new Array(u + 1);
            for (var i = 0; i < u + 1; i++) n[i] = Math.random()
          }
          t < 0 && (t = - t),
          e < 0 && (e = - e),
          r < 0 && (r = - r);
          for (var f, d, m, g, y, v = Math.floor(t), _ = Math.floor(e), x = Math.floor(r), b = t - v, w = e - _, T = r - x, S = 0, C = 0.5, M = 0; M < h; M++) {
            var R = v + (_ << o) + (x << a);
            f = p(b),
            d = p(w),
            m = n[R & u],
            m += f * (n[R + 1 & u] - m),
            g = n[R + s & u],
            g += f * (n[R + s + 1 & u] - g),
            m += d * (g - m),
            R += l,
            g = n[R & u],
            g += f * (n[R + 1 & u] - g),
            y = n[R + s & u],
            y += f * (n[R + s + 1 & u] - y),
            g += d * (y - g),
            m += p(T) * (g - m),
            S += m * C,
            C *= c,
            v <<= 1,
            b *= 2,
            _ <<= 1,
            w *= 2,
            x <<= 1,
            T *= 2,
            b >= 1 && (v++, b--),
            w >= 1 && (_++, w--),
            T >= 1 && (x++, T--)
          }
          return S
        },
        i.prototype.noiseDetail = function (t, e) {
          t > 0 && (h = t),
          e > 0 && (c = e)
        },
        i.prototype.noiseSeed = function (t) {
          var e = function () {
            var t,
            e,
            r = 4294967296,
            n = 1664525,
            i = 1013904223;
            return {
              setSeed: function (n) {
                e = t = (null == n ? Math.random() * r : n) >>> 0
              },
              getSeed: function () {
                return t
              },
              rand: function () {
                return e = (n * e + i) % r,
                e / r
              }
            }
          }();
          e.setSeed(t),
          n = new Array(u + 1);
          for (var r = 0; r < u + 1; r++) n[r] = e.rand()
        },
        e.exports = i
      },
      {
        '../core/core': 49
      }
    ],
    78: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core'),
        i = t('./polargeometry'),
        o = t('../core/constants');
        n.Vector = function () {
          var t,
          e,
          r;
          arguments[0] instanceof n ? (this.p5 = arguments[0], t = arguments[1][0] || 0, e = arguments[1][1] || 0, r = arguments[1][2] || 0)  : (t = arguments[0] || 0, e = arguments[1] || 0, r = arguments[2] || 0),
          this.x = t,
          this.y = e,
          this.z = r
        },
        n.Vector.prototype.toString = function () {
          return 'p5.Vector Object : [' + this.x + ', ' + this.y + ', ' + this.z + ']'
        },
        n.Vector.prototype.set = function (t, e, r) {
          return t instanceof n.Vector ? (this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0, this)  : t instanceof Array ? (this.x = t[0] || 0, this.y = t[1] || 0, this.z = t[2] || 0, this)  : (this.x = t || 0, this.y = e || 0, this.z = r || 0, this)
        },
        n.Vector.prototype.copy = function () {
          return this.p5 ? new n.Vector(this.p5, [
            this.x,
            this.y,
            this.z
          ])  : new n.Vector(this.x, this.y, this.z)
        },
        n.Vector.prototype.add = function (t, e, r) {
          return t instanceof n.Vector ? (this.x += t.x || 0, this.y += t.y || 0, this.z += t.z || 0, this)  : t instanceof Array ? (this.x += t[0] || 0, this.y += t[1] || 0, this.z += t[2] || 0, this)  : (this.x += t || 0, this.y += e || 0, this.z += r || 0, this)
        },
        n.Vector.prototype.sub = function (t, e, r) {
          return t instanceof n.Vector ? (this.x -= t.x || 0, this.y -= t.y || 0, this.z -= t.z || 0, this)  : t instanceof Array ? (this.x -= t[0] || 0, this.y -= t[1] || 0, this.z -= t[2] || 0, this)  : (this.x -= t || 0, this.y -= e || 0, this.z -= r || 0, this)
        },
        n.Vector.prototype.mult = function (t) {
          return this.x *= t || 0,
          this.y *= t || 0,
          this.z *= t || 0,
          this
        },
        n.Vector.prototype.div = function (t) {
          return this.x /= t,
          this.y /= t,
          this.z /= t,
          this
        },
        n.Vector.prototype.mag = function () {
          return Math.sqrt(this.magSq())
        },
        n.Vector.prototype.magSq = function () {
          var t = this.x,
          e = this.y,
          r = this.z;
          return t * t + e * e + r * r
        },
        n.Vector.prototype.dot = function (t, e, r) {
          return t instanceof n.Vector ? this.dot(t.x, t.y, t.z)  : this.x * (t || 0) + this.y * (e || 0) + this.z * (r || 0)
        },
        n.Vector.prototype.cross = function (t) {
          var e = this.y * t.z - this.z * t.y,
          r = this.z * t.x - this.x * t.z,
          i = this.x * t.y - this.y * t.x;
          return this.p5 ? new n.Vector(this.p5, [
            e,
            r,
            i
          ])  : new n.Vector(e, r, i)
        },
        n.Vector.prototype.dist = function (t) {
          var e = t.copy().sub(this);
          return e.mag()
        },
        n.Vector.prototype.normalize = function () {
          return this.div(this.mag())
        },
        n.Vector.prototype.limit = function (t) {
          var e = this.magSq();
          return e > t * t && (this.div(Math.sqrt(e)), this.mult(t)),
          this
        },
        n.Vector.prototype.setMag = function (t) {
          return this.normalize().mult(t)
        },
        n.Vector.prototype.heading = function () {
          var t = Math.atan2(this.y, this.x);
          return this.p5 ? this.p5._angleMode === o.RADIANS ? t : i.radiansToDegrees(t)  : t
        },
        n.Vector.prototype.rotate = function (t) {
          this.p5 && this.p5._angleMode === o.DEGREES && (t = i.degreesToRadians(t));
          var e = this.heading() + t,
          r = this.mag();
          return this.x = Math.cos(e) * r,
          this.y = Math.sin(e) * r,
          this
        },
        n.Vector.prototype.lerp = function (t, e, r, i) {
          return t instanceof n.Vector ? this.lerp(t.x, t.y, t.z, e)  : (this.x += (t - this.x) * i || 0, this.y += (e - this.y) * i || 0, this.z += (r - this.z) * i || 0, this)
        },
        n.Vector.prototype.array = function () {
          return [this.x || 0,
          this.y || 0,
          this.z || 0]
        },
        n.Vector.prototype.equals = function (t, e, r) {
          var i,
          o,
          s;
          return t instanceof n.Vector ? (i = t.x || 0, o = t.y || 0, s = t.z || 0)  : t instanceof Array ? (i = t[0] || 0, o = t[1] || 0, s = t[2] || 0)  : (i = t || 0, o = e || 0, s = r || 0),
          this.x === i && this.y === o && this.z === s
        },
        n.Vector.fromAngle = function (t) {
          return this.p5 && this.p5._angleMode === o.DEGREES && (t = i.degreesToRadians(t)),
          this.p5 ? new n.Vector(this.p5, [
            Math.cos(t),
            Math.sin(t),
            0
          ])  : new n.Vector(Math.cos(t), Math.sin(t), 0)
        },
        n.Vector.random2D = function () {
          var t;
          return t = this.p5 ? this.p5._angleMode === o.DEGREES ? this.p5.random(360)  : this.p5.random(o.TWO_PI)  : Math.random() * Math.PI * 2,
          this.fromAngle(t)
        },
        n.Vector.random3D = function () {
          var t,
          e;
          this.p5 ? (t = this.p5.random(0, o.TWO_PI), e = this.p5.random( - 1, 1))  : (t = Math.random() * Math.PI * 2, e = 2 * Math.random() - 1);
          var r = Math.sqrt(1 - e * e) * Math.cos(t),
          i = Math.sqrt(1 - e * e) * Math.sin(t);
          return this.p5 ? new n.Vector(this.p5, [
            r,
            i,
            e
          ])  : new n.Vector(r, i, e)
        },
        n.Vector.add = function (t, e, r) {
          return r ? r.set(t)  : r = t.copy(),
          r.add(e),
          r
        },
        n.Vector.sub = function (t, e, r) {
          return r ? r.set(t)  : r = t.copy(),
          r.sub(e),
          r
        },
        n.Vector.mult = function (t, e, r) {
          return r ? r.set(t)  : r = t.copy(),
          r.mult(e),
          r
        },
        n.Vector.div = function (t, e, r) {
          return r ? r.set(t)  : r = t.copy(),
          r.div(e),
          r
        },
        n.Vector.dot = function (t, e) {
          return t.dot(e)
        },
        n.Vector.cross = function (t, e) {
          return t.cross(e)
        },
        n.Vector.dist = function (t, e) {
          return t.dist(e)
        },
        n.Vector.lerp = function (t, e, r, n) {
          return n ? n.set(t)  : n = t.copy(),
          n.lerp(e, r),
          n
        },
        n.Vector.angleBetween = function (t, e) {
          var r = Math.acos(t.dot(e) / (t.mag() * e.mag()));
          return this.p5 && this.p5._angleMode === o.DEGREES && (r = i.radiansToDegrees(r)),
          r
        },
        n.Vector.mag = function (t) {
          var e = t.x,
          r = t.y,
          n = t.z,
          i = e * e + r * r + n * n;
          return Math.sqrt(i)
        },
        e.exports = n.Vector
      },
      {
        '../core/constants': 48,
        '../core/core': 49,
        './polargeometry': 79
      }
    ],
    79: [
      function (t, e, r) {
        e.exports = {
          degreesToRadians: function (t) {
            return 2 * Math.PI * t / 360
          },
          radiansToDegrees: function (t) {
            return 360 * t / (2 * Math.PI)
          }
        }
      },
      {
      }
    ],
    80: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core'),
        i = !1,
        o = function () {
          var t,
          e,
          r = 4294967296,
          n = 1664525,
          i = 1013904223;
          return {
            setSeed: function (n) {
              e = t = (null == n ? Math.random() * r : n) >>> 0
            },
            getSeed: function () {
              return t
            },
            rand: function () {
              return e = (n * e + i) % r,
              e / r
            }
          }
        }();
        n.prototype.randomSeed = function (t) {
          o.setSeed(t),
          i = !0
        },
        n.prototype.random = function (t, e) {
          var r;
          if (r = i ? o.rand()  : Math.random(), 0 === arguments.length) return r;
          if (1 === arguments.length) return r * t;
          if (t > e) {
            var n = t;
            t = e,
            e = n
          }
          return r * (e - t) + t
        };
        var s,
        a = !1;
        n.prototype.randomGaussian = function (t, e) {
          var r,
          n,
          i,
          o;
          if (a) r = s,
          a = !1;
           else {
            do n = this.random(2) - 1,
            i = this.random(2) - 1,
            o = n * n + i * i;
            while (o >= 1);
            o = Math.sqrt( - 2 * Math.log(o) / o),
            r = n * o,
            s = i * o,
            a = !0
          }
          var l = t || 0,
          u = e || 1;
          return r * u + l
        },
        e.exports = n
      },
      {
        '../core/core': 49
      }
    ],
    81: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core'),
        i = t('./polargeometry'),
        o = t('../core/constants');
        n.prototype._angleMode = o.RADIANS,
        n.prototype.acos = function (t) {
          return this._angleMode === o.RADIANS ? Math.acos(t)  : i.radiansToDegrees(Math.acos(t))
        },
        n.prototype.asin = function (t) {
          return this._angleMode === o.RADIANS ? Math.asin(t)  : i.radiansToDegrees(Math.asin(t))
        },
        n.prototype.atan = function (t) {
          return this._angleMode === o.RADIANS ? Math.atan(t)  : i.radiansToDegrees(Math.atan(t))
        },
        n.prototype.atan2 = function (t, e) {
          return this._angleMode === o.RADIANS ? Math.atan2(t, e)  : i.radiansToDegrees(Math.atan2(t, e))
        },
        n.prototype.cos = function (t) {
          return this._angleMode === o.RADIANS ? Math.cos(t)  : Math.cos(this.radians(t))
        },
        n.prototype.sin = function (t) {
          return this._angleMode === o.RADIANS ? Math.sin(t)  : Math.sin(this.radians(t))
        },
        n.prototype.tan = function (t) {
          return this._angleMode === o.RADIANS ? Math.tan(t)  : Math.tan(this.radians(t))
        },
        n.prototype.degrees = function (t) {
          return i.radiansToDegrees(t)
        },
        n.prototype.radians = function (t) {
          return i.degreesToRadians(t)
        },
        n.prototype.angleMode = function (t) {
          t !== o.DEGREES && t !== o.RADIANS || (this._angleMode = t)
        },
        e.exports = n
      },
      {
        '../core/constants': 48,
        '../core/core': 49,
        './polargeometry': 79
      }
    ],
    82: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core');
        n.prototype.textAlign = function (t, e) {
          return this._renderer.textAlign.apply(this._renderer, arguments)
        },
        n.prototype.textLeading = function (t) {
          return this._renderer.textLeading.apply(this._renderer, arguments)
        },
        n.prototype.textSize = function (t) {
          return this._renderer.textSize.apply(this._renderer, arguments)
        },
        n.prototype.textStyle = function (t) {
          return this._renderer.textStyle.apply(this._renderer, arguments)
        },
        n.prototype.textWidth = function (t) {
          return this._renderer.textWidth.apply(this._renderer, arguments)
        },
        n.prototype.textAscent = function () {
          return this._renderer.textAscent()
        },
        n.prototype.textDescent = function () {
          return this._renderer.textDescent()
        },
        n.prototype._updateTextMetrics = function () {
          return this._renderer._updateTextMetrics()
        },
        e.exports = n
      },
      {
        '../core/core': 49
      }
    ],
    83: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core'),
        i = t('../core/constants');
        t('../core/error_helpers'),
        n.prototype.text = function (t, e, r, n, i) {
          for (var o = new Array(arguments.length), s = 0; s < o.length; ++s) o[s] = arguments[s];
          return this._validateParameters('text', o, [
            ['*',
            'Number',
            'Number'],
            [
              '*',
              'Number',
              'Number',
              'Number',
              'Number'
            ]
          ]),
          this._renderer._doFill || this._renderer._doStroke ? this._renderer.text.apply(this._renderer, arguments)  : this
        },
        n.prototype.textFont = function (t, e) {
          if (arguments.length) {
            if (!t) throw Error('null font passed to textFont');
            return this._renderer._setProperty('_textFont', t),
            e && (this._renderer._setProperty('_textSize', e), this._renderer._setProperty('_textLeading', e * i._DEFAULT_LEADMULT)),
            this._renderer._applyTextProperties()
          }
          return this
        },
        e.exports = n
      },
      {
        '../core/constants': 48,
        '../core/core': 49,
        '../core/error_helpers': 52
      }
    ],
    84: [
      function (t, e, r) {
        'use strict';
        function n(t, e) {
          for (var r = a(e, {
            sampleFactor: 0.1,
            simplifyThreshold: 0
          }), n = f(t, 0, 1), o = n / (n * r.sampleFactor), s = [
          ], l = 0; l < n; l += o) s.push(f(t, l));
          return r.simplifyThreshold && i(s, r.simplifyThreshold),
          s
        }
        function i(t, e) {
          e = 'undefined' == typeof e ? 0 : e;
          for (var r = 0, n = t.length - 1; t.length > 3 && n >= 0; --n) u(l(t, n - 1), l(t, n), l(t, n + 1), e) && (t.splice(n % t.length, 1), r++);
          return r
        }
        function o(t) {
          for (var e, r = [
          ], n = 0; n < t.length; n++) 'M' === t[n].type && (e && r.push(e), e = [
          ]),
          e.push(s(t[n]));
          return r.push(e),
          r
        }
        function s(t) {
          var e = [
            t.type
          ];
          return 'M' === t.type || 'L' === t.type ? e.push(t.x, t.y)  : 'C' === t.type ? e.push(t.x1, t.y1, t.x2, t.y2, t.x, t.y)  : 'Q' === t.type && e.push(t.x1, t.y1, t.x, t.y),
          e
        }
        function a(t, e) {
          if ('object' != typeof t) t = e;
           else for (var r in e) 'undefined' == typeof t[r] && (t[r] = e[r]);
          return t
        }
        function l(t, e) {
          var r = t.length;
          return t[e < 0 ? e % r + r : e % r]
        }
        function u(t, e, r, n) {
          if (!n) return 0 === h(t, e, r);
          'undefined' == typeof u.tmpPoint1 && (u.tmpPoint1 = [
          ], u.tmpPoint2 = [
          ]);
          var i = u.tmpPoint1,
          o = u.tmpPoint2;
          i.x = e.x - t.x,
          i.y = e.y - t.y,
          o.x = r.x - e.x,
          o.y = r.y - e.y;
          var s = i.x * o.x + i.y * o.y,
          a = Math.sqrt(i.x * i.x + i.y * i.y),
          l = Math.sqrt(o.x * o.x + o.y * o.y),
          c = Math.acos(s / (a * l));
          return c < n
        }
        function h(t, e, r) {
          return (e[0] - t[0]) * (r[1] - t[1]) - (r[0] - t[0]) * (e[1] - t[1])
        }
        function c(t, e, r, n, i, o, s, a, l) {
          var u = 1 - l,
          h = Math.pow(u, 3),
          c = Math.pow(u, 2),
          p = l * l,
          f = p * l,
          d = h * t + 3 * c * l * r + 3 * u * l * l * i + f * s,
          m = h * e + 3 * c * l * n + 3 * u * l * l * o + f * a,
          g = t + 2 * l * (r - t) + p * (i - 2 * r + t),
          y = e + 2 * l * (n - e) + p * (o - 2 * n + e),
          v = r + 2 * l * (i - r) + p * (s - 2 * i + r),
          _ = n + 2 * l * (o - n) + p * (a - 2 * o + n),
          x = u * t + l * r,
          b = u * e + l * n,
          w = u * i + l * s,
          T = u * o + l * a,
          S = 90 - 180 * Math.atan2(g - v, y - _) / Math.PI;
          return (g > v || y < _) && (S += 180),
          {
            x: d,
            y: m,
            m: {
              x: g,
              y: y
            },
            n: {
              x: v,
              y: _
            },
            start: {
              x: x,
              y: b
            },
            end: {
              x: w,
              y: T
            },
            alpha: S
          }
        }
        function p(t, e, r, n, i, o, s, a, l) {
          return null == l ? x(t, e, r, n, i, o, s, a)  : c(t, e, r, n, i, o, s, a, b(t, e, r, n, i, o, s, a, l))
        }
        function f(t, e, r) {
          t = m(t);
          for (var n, i, o, s, a, l = '', u = {
          }, h = 0, f = 0, d = t.length; f < d; f++) {
            if (o = t[f], 'M' === o[0]) n = + o[1],
            i = + o[2];
             else {
              if (s = p(n, i, o[1], o[2], o[3], o[4], o[5], o[6]), h + s > e && !r) return a = p(n, i, o[1], o[2], o[3], o[4], o[5], o[6], e - h),
              {
                x: a.x,
                y: a.y,
                alpha: a.alpha
              };
              h += s,
              n = + o[5],
              i = + o[6]
            }
            l += o.shift() + o
          }
          return u.end = l,
          a = r ? h : c(n, i, o[0], o[1], o[2], o[3], o[4], o[5], 1),
          a.alpha && (a = {
            x: a.x,
            y: a.y,
            alpha: a.alpha
          }),
          a
        }
        function d(t) {
          var e = [
          ],
          r = 0,
          n = 0,
          i = 0,
          o = 0,
          s = 0;
          'M' === t[0][0] && (r = + t[0][1], n = + t[0][2], i = r, o = n, s++, e[0] = [
            'M',
            r,
            n
          ]);
          for (var a, l, u, h = 3 === t.length && 'M' === t[0][0] && 'R' === t[1][0].toUpperCase() && 'Z' === t[2][0].toUpperCase(), c = s, p = t.length; c < p; c++) {
            if (e.push(l = [
            ]), u = t[c], u[0] !== String.prototype.toUpperCase.call(u[0])) switch (l[0] = String.prototype.toUpperCase.call(u[0]), l[0]) {
              case 'A':
                l[1] = u[1],
                l[2] = u[2],
                l[3] = u[3],
                l[4] = u[4],
                l[5] = u[5],
                l[6] = + (u[6] + r),
                l[7] = + (u[7] + n);
                break;
              case 'V':
                l[1] = + u[1] + n;
                break;
              case 'H':
                l[1] = + u[1] + r;
                break;
              case 'R':
                a = [
                  r,
                  n
                ].concat(u.slice(1));
                for (var f = 2, d = a.length; f < d; f++) a[f] = + a[f] + r,
                a[++f] = + a[f] + n;
                e.pop(),
                e = e.concat(y(a, h));
                break;
              case 'M':
                i = + u[1] + r,
                o = + u[2] + n;
                break;
              default:
                for (f = 1, d = u.length; f < d; f++) l[f] = + u[f] + (f % 2 ? r : n)
            } else if ('R' === u[0]) a = [
              r,
              n
            ].concat(u.slice(1)),
            e.pop(),
            e = e.concat(y(a, h)),
            l = [
              'R'
            ].concat(u.slice( - 2));
             else for (var m = 0, g = u.length; m < g; m++) l[m] = u[m];
            switch (l[0]) {
              case 'Z':
                r = i,
                n = o;
                break;
              case 'H':
                r = l[1];
                break;
              case 'V':
                n = l[1];
                break;
              case 'M':
                i = l[l.length - 2],
                o = l[l.length - 1];
                break;
              default:
                r = l[l.length - 2],
                n = l[l.length - 1]
            }
        }
        return e
      }
      function m(t, e) {
        for (var r = d(t), n = e && d(e), i = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, o = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, s = (function (t, e, r) {
          var n,
          i,
          o = {
            T: 1,
            Q: 1
          };
          if (!t) return ['C',
          e.x,
          e.y,
          e.x,
          e.y,
          e.x,
          e.y];
          switch (t[0] in o || (e.qx = e.qy = null), t[0]) {
            case 'M':
              e.X = t[1],
              e.Y = t[2];
              break;
            case 'A':
              t = [
                'C'
              ].concat(g.apply(0, [
                e.x,
                e.y
              ].concat(t.slice(1))));
              break;
            case 'S':
              'C' === r || 'S' === r ? (n = 2 * e.x - e.bx, i = 2 * e.y - e.by)  : (n = e.x, i = e.y),
              t = [
                'C',
                n,
                i
              ].concat(t.slice(1));
              break;
            case 'T':
              'Q' === r || 'T' === r ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy)  : (e.qx = e.x, e.qy = e.y),
              t = [
                'C'
              ].concat(_(e.x, e.y, e.qx, e.qy, t[1], t[2]));
              break;
            case 'Q':
              e.qx = t[1],
              e.qy = t[2],
              t = [
                'C'
              ].concat(_(e.x, e.y, t[1], t[2], t[3], t[4]));
              break;
            case 'L':
              t = [
                'C'
              ].concat(v(e.x, e.y, t[1], t[2]));
              break;
            case 'H':
              t = [
                'C'
              ].concat(v(e.x, e.y, t[1], e.y));
              break;
            case 'V':
              t = [
                'C'
              ].concat(v(e.x, e.y, e.x, t[1]));
              break;
            case 'Z':
              t = [
                'C'
              ].concat(v(e.x, e.y, e.X, e.Y))
          }
          return t
        }), a = function (t, e) {
          if (t[e].length > 7) {
            t[e].shift();
            for (var i = t[e]; i.length; ) u[e] = 'A',
            n && (h[e] = 'A'),
            t.splice(e++, 0, [
              'C'
            ].concat(i.splice(0, 6)));
            t.splice(e, 1),
            m = Math.max(r.length, n && n.length || 0)
          }
        }, l = function (t, e, i, o, s) {
          t && e && 'M' === t[s][0] && 'M' !== e[s][0] && (e.splice(s, 0, [
            'M',
            o.x,
            o.y
          ]), i.bx = 0, i.by = 0, i.x = t[s][1], i.y = t[s][2], m = Math.max(r.length, n && n.length || 0))
        }, u = [
        ], h = [
        ], c = '', p = '', f = 0, m = Math.max(r.length, n && n.length || 0); f < m; f++) {
          r[f] && (c = r[f][0]),
          'C' !== c && (u[f] = c, f && (p = u[f - 1])),
          r[f] = s(r[f], i, p),
          'A' !== u[f] && 'C' === c && (u[f] = 'C'),
          a(r, f),
          n && (n[f] && (c = n[f][0]), 'C' !== c && (h[f] = c, f && (p = h[f - 1])), n[f] = s(n[f], o, p), 'A' !== h[f] && 'C' === c && (h[f] = 'C'), a(n, f)),
          l(r, n, i, o, f),
          l(n, r, o, i, f);
          var y = r[f],
          x = n && n[f],
          b = y.length,
          w = n && x.length;
          i.x = y[b - 2],
          i.y = y[b - 1],
          i.bx = parseFloat(y[b - 4]) || i.x,
          i.by = parseFloat(y[b - 3]) || i.y,
          o.bx = n && (parseFloat(x[w - 4]) || o.x),
          o.by = n && (parseFloat(x[w - 3]) || o.y),
          o.x = n && x[w - 2],
          o.y = n && x[w - 1]
        }
        return n ? [
          r,
          n
        ] : r
      }
      function g(t, e, r, n, i, o, s, a, l, u) {
        var h,
        c,
        p,
        f,
        d,
        m = Math.PI,
        y = 120 * m / 180,
        v = m / 180 * ( + i || 0),
        _ = [
        ],
        x = function (t, e, r) {
          var n = t * Math.cos(r) - e * Math.sin(r),
          i = t * Math.sin(r) + e * Math.cos(r);
          return {
            x: n,
            y: i
          }
        };
        if (u) h = u[0],
        c = u[1],
        p = u[2],
        f = u[3];
         else {
          d = x(t, e, - v),
          t = d.x,
          e = d.y,
          d = x(a, l, - v),
          a = d.x,
          l = d.y;
          var b = (t - a) / 2,
          w = (e - l) / 2,
          T = b * b / (r * r) + w * w / (n * n);
          T > 1 && (T = Math.sqrt(T), r = T * r, n = T * n);
          var S = r * r,
          C = n * n,
          M = (o === s ? - 1 : 1) * Math.sqrt(Math.abs((S * C - S * w * w - C * b * b) / (S * w * w + C * b * b)));
          p = M * r * w / n + (t + a) / 2,
          f = M * - n * b / r + (e + l) / 2,
          h = Math.asin(((e - f) / n).toFixed(9)),
          c = Math.asin(((l - f) / n).toFixed(9)),
          h = t < p ? m - h : h,
          c = a < p ? m - c : c,
          h < 0 && (h = 2 * m + h),
          c < 0 && (c = 2 * m + c),
          s && h > c && (h -= 2 * m),
          !s && c > h && (c -= 2 * m)
        }
        var R = c - h;
        if (Math.abs(R) > y) {
          var k = c,
          P = a,
          D = l;
          c = h + y * (s && c > h ? 1 : - 1),
          a = p + r * Math.cos(c),
          l = f + n * Math.sin(c),
          _ = g(a, l, r, n, i, 0, s, P, D, [
            c,
            k,
            p,
            f
          ])
        }
        R = c - h;
        var A = Math.cos(h),
        E = Math.sin(h),
        O = Math.cos(c),
        N = Math.sin(c),
        I = Math.tan(R / 4),
        L = 4 / 3 * r * I,
        F = 4 / 3 * n * I,
        U = [
          t,
          e
        ],
        B = [
          t + L * E,
          e - F * A
        ],
        H = [
          a + L * N,
          l - F * O
        ],
        j = [
          a,
          l
        ];
        if (B[0] = 2 * U[0] - B[0], B[1] = 2 * U[1] - B[1], u) return [B,
        H,
        j].concat(_);
        _ = [
          B,
          H,
          j
        ].concat(_).join().split(',');
        for (var Y = [
        ], G = 0, q = _.length; G < q; G++) Y[G] = G % 2 ? x(_[G - 1], _[G], v).y : x(_[G], _[G + 1], v).x;
        return Y
      }
      function y(t, e) {
        for (var r = [
        ], n = 0, i = t.length; i - 2 * !e > n; n += 2) {
          var o = [
            {
              x: + t[n - 2],
              y: + t[n - 1]
            },
            {
              x: + t[n],
              y: + t[n + 1]
            },
            {
              x: + t[n + 2],
              y: + t[n + 3]
            },
            {
              x: + t[n + 4],
              y: + t[n + 5]
            }
          ];
          e ? n ? i - 4 === n ? o[3] = {
            x: + t[0],
            y: + t[1]
          }
           : i - 2 === n && (o[2] = {
            x: + t[0],
            y: + t[1]
          }, o[3] = {
            x: + t[2],
            y: + t[3]
          })  : o[0] = {
            x: + t[i - 2],
            y: + t[i - 1]
          }
           : i - 4 === n ? o[3] = o[2] : n || (o[0] = {
            x: + t[n],
            y: + t[n + 1]
          }),
          r.push(['C',
          ( - o[0].x + 6 * o[1].x + o[2].x) / 6,
          ( - o[0].y + 6 * o[1].y + o[2].y) / 6,
          (o[1].x + 6 * o[2].x - o[3].x) / 6,
          (o[1].y + 6 * o[2].y - o[3].y) / 6,
          o[2].x,
          o[2].y])
        }
        return r
      }
      function v(t, e, r, n) {
        return [t,
        e,
        r,
        n,
        r,
        n]
      }
      function _(t, e, r, n, i, o) {
        var s = 1 / 3,
        a = 2 / 3;
        return [s * t + a * r,
        s * e + a * n,
        s * i + a * r,
        s * o + a * n,
        i,
        o]
      }
      function x(t, e, r, n, i, o, s, a, l) {
        null == l && (l = 1),
        l = l > 1 ? 1 : l < 0 ? 0 : l;
        for (var u = l / 2, h = 12, c = [
          - 0.1252,
          0.1252,
          - 0.3678,
          0.3678,
          - 0.5873,
          0.5873,
          - 0.7699,
          0.7699,
          - 0.9041,
          0.9041,
          - 0.9816,
          0.9816
        ], p = 0, f = [
          0.2491,
          0.2491,
          0.2335,
          0.2335,
          0.2032,
          0.2032,
          0.1601,
          0.1601,
          0.1069,
          0.1069,
          0.0472,
          0.0472
        ], d = 0; d < h; d++) {
          var m = u * c[d] + u,
          g = w(m, t, r, i, s),
          y = w(m, e, n, o, a),
          v = g * g + y * y;
          p += f[d] * Math.sqrt(v)
        }
        return u * p
      }
      function b(t, e, r, n, i, o, s, a, l) {
        if (!(l < 0 || x(t, e, r, n, i, o, s, a) < l)) {
          var u,
          h = 1,
          c = h / 2,
          p = h - c,
          f = 0.01;
          for (u = x(t, e, r, n, i, o, s, a, p); Math.abs(u - l) > f; ) c /= 2,
          p += (u < l ? 1 : - 1) * c,
          u = x(t, e, r, n, i, o, s, a, p);
          return p
        }
      }
      function w(t, e, r, n, i) {
        var o = - 3 * e + 9 * r - 9 * n + 3 * i,
        s = t * o + 6 * e - 12 * r + 6 * n;
        return t * s - 3 * e + 3 * r
      }
      function T() {
        for (var t = new Array(arguments.length), e = 0; e < t.length; ++e) t[e] = arguments[e];
        e = t.length;
        for (var r = ''; e--; ) r += t[e] === Object(t[e]) ? JSON.stringify(t[e])  : t[e];
        return r
      }
      var S = t('../core/core'),
      C = t('../core/constants');
      S.Font = function (t) {
        this.parent = t,
        this.cache = {
        },
        this.font = void 0
      },
      S.Font.prototype.list = function () {
        throw 'not yet implemented'
      },
      S.Font.prototype.textBounds = function (t, e, r, n, i) {
        e = void 0 !== e ? e : 0,
        r = void 0 !== r ? r : 0,
        n = n || this.parent._renderer._textSize;
        var o = this.cache[T('textBounds', t, e, r, n)];
        if (!o) {
          var s,
          a,
          l,
          u,
          h = [
          ],
          c = [
          ],
          p = this,
          f = this._scale(n);
          this.font.forEachGlyph(t, e, r, n, i, function (t, e, r, i) {
            h.push(e),
            c.push(r);
            var o = t.getMetrics();
            'space' !== t.name ? (h.push(e + o.xMax * f), c.push(r + - o.yMin * f), c.push(r + - o.yMax * f))  : h.push(e + p.font.charToGlyph(' ').advanceWidth * p._scale(n))
          }),
          s = Math.max(0, Math.min.apply(null, h)),
          a = Math.max(0, Math.min.apply(null, c)),
          l = Math.max(0, Math.max.apply(null, h)),
          u = Math.max(0, Math.max.apply(null, c)),
          o = {
            x: s,
            y: a,
            h: u - a,
            w: l - s,
            advance: s - e
          },
          this.cache[T('textBounds', t, e, r, n)] = o
        }
        return o
      },
      S.Font.prototype.textToPoints = function (t, e, r, i, s) {
        var a = 0,
        l = [
        ],
        u = this._getGlyphs(t);
        i = i || this.parent._renderer._textSize;
        for (var h = 0; h < u.length; h++) {
          for (var c = u[h].getPath(e, r, i), p = o(c.commands), f = 0; f < p.length; f++) for (var d = n(p[f], s), m = 0; m < d.length; m++) d[m].x += a,
          l.push(d[m]);
          a += u[h].advanceWidth * this._scale(i)
        }
        return l
      },
      S.Font.prototype._getGlyphs = function (t) {
        return this.font.stringToGlyphs(t)
      },
      S.Font.prototype._getPath = function (t, e, r, n) {
        var i = this.parent,
        o = i._renderer.drawingContext,
        s = this._handleAlignment(i, o, t, e, r);
        return this.font.getPath(t, s.x, s.y, i._renderer._textSize, n)
      },
      S.Font.prototype._getPathData = function (t, e, r, n) {
        var i = 3;
        return 'string' == typeof t && arguments.length > 2 ? t = this._getPath(t, e, r, n)  : 'object' == typeof e && (n = e),
        n && 'number' == typeof n.decimals && (i = n.decimals),
        t.toPathData(i)
      },
      S.Font.prototype._getSVG = function (t, e, r, n) {
        var i = 3;
        return 'string' == typeof t && arguments.length > 2 ? t = this._getPath(t, e, r, n)  : 'object' == typeof e && (n = e),
        n && ('number' == typeof n.decimals && (i = n.decimals), 'number' == typeof n.strokeWidth && (t.strokeWidth = n.strokeWidth), 'undefined' != typeof n.fill && (t.fill = n.fill), 'undefined' != typeof n.stroke && (t.stroke = n.stroke)),
        t.toSVG(i)
      },
      S.Font.prototype._renderPath = function (t, e, r, n) {
        var i,
        o = n && n.renderer || this.parent._renderer,
        s = o.drawingContext;
        i = 'object' == typeof t && t.commands ? t.commands : this._getPath(t, e, r, o._textSize, n).commands,
        s.beginPath();
        for (var a = 0; a < i.length; a += 1) {
          var l = i[a];
          'M' === l.type ? s.moveTo(l.x, l.y)  : 'L' === l.type ? s.lineTo(l.x, l.y)  : 'C' === l.type ? s.bezierCurveTo(l.x1, l.y1, l.x2, l.y2, l.x, l.y)  : 'Q' === l.type ? s.quadraticCurveTo(l.x1, l.y1, l.x, l.y)  : 'Z' === l.type && s.closePath()
        }
        return o._doStroke && o._strokeSet && s.stroke(),
        o._doFill && (s.fillStyle = o._fillSet ? s.fillStyle : C._DEFAULT_TEXT_FILL, s.fill()),
        this
      },
      S.Font.prototype._textWidth = function (t, e) {
        if (' ' === t) return this.font.charToGlyph(' ').advanceWidth * this._scale(e);
        var r = this.textBounds(t, 0, 0, e);
        return r.w + r.advance
      },
      S.Font.prototype._textAscent = function (t) {
        return this.font.ascender * this._scale(t)
      },
      S.Font.prototype._textDescent = function (t) {
        return - this.font.descender * this._scale(t)
      },
      S.Font.prototype._scale = function (t) {
        return 1 / this.font.unitsPerEm * (t || this.parent._renderer._textSize)
      },
      S.Font.prototype._handleAlignment = function (t, e, r, n, i) {
        var o = this._textWidth(r),
        s = this._textAscent(),
        a = this._textDescent(),
        l = s + a;
        return e.textAlign === C.CENTER ? n -= o / 2 : e.textAlign === C.RIGHT && (n -= o),
        e.textBaseline === C.TOP ? i += l : e.textBaseline === C._CTX_MIDDLE ? i += l / 2 - a : e.textBaseline === C.BOTTOM && (i -= a),
        {
          x: n,
          y: i
        }
      },
      e.exports = S.Font
    },
    {
      '../core/constants': 48,
      '../core/core': 49
    }
    ],
    85: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core');
        n.prototype.append = function (t, e) {
          return t.push(e),
          t
        },
        n.prototype.arrayCopy = function (t, e, r, n, i) {
          var o,
          s;
          'undefined' != typeof i ? (s = Math.min(i, t.length), o = n, t = t.slice(e, s + e))  : ('undefined' != typeof r ? (s = r, s = Math.min(s, t.length))  : s = t.length, o = 0, r = e, t = t.slice(0, s)),
          Array.prototype.splice.apply(r, [
            o,
            s
          ].concat(t))
        },
        n.prototype.concat = function (t, e) {
          return t.concat(e)
        },
        n.prototype.reverse = function (t) {
          return t.reverse()
        },
        n.prototype.shorten = function (t) {
          return t.pop(),
          t
        },
        n.prototype.shuffle = function (t, e) {
          var r = ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(t);
          t = e || r ? t : t.slice();
          for (var n, i, o = t.length; o > 1; ) n = Math.random() * o | 0,
          i = t[--o],
          t[o] = t[n],
          t[n] = i;
          return t
        },
        n.prototype.sort = function (t, e) {
          var r = e ? t.slice(0, Math.min(e, t.length))  : t,
          n = e ? t.slice(Math.min(e, t.length))  : [
          ];
          return r = 'string' == typeof r[0] ? r.sort()  : r.sort(function (t, e) {
            return t - e
          }),
          r.concat(n)
        },
        n.prototype.splice = function (t, e, r) {
          return Array.prototype.splice.apply(t, [
            r,
            0
          ].concat(e)),
          t
        },
        n.prototype.subset = function (t, e, r) {
          return 'undefined' != typeof r ? t.slice(e, e + r)  : t.slice(e, t.length)
        },
        e.exports = n
      },
      {
        '../core/core': 49
      }
    ],
    86: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core');
        n.prototype.float = function (t) {
          return parseFloat(t)
        },
        n.prototype.int = function (t, e) {
          return 'string' == typeof t ? (e = e || 10, parseInt(t, e))  : 'number' == typeof t ? 0 | t : 'boolean' == typeof t ? t ? 1 : 0 : t instanceof Array ? t.map(function (t) {
            return n.prototype.int(t, e)
          })  : void 0
        },
        n.prototype.str = function (t) {
          return t instanceof Array ? t.map(n.prototype.str)  : String(t)
        },
        n.prototype.boolean = function (t) {
          return 'number' == typeof t ? 0 !== t : 'string' == typeof t ? 'true' === t.toLowerCase()  : 'boolean' == typeof t ? t : t instanceof Array ? t.map(n.prototype.boolean)  : void 0
        },
        n.prototype.byte = function (t) {
          var e = n.prototype.int(t, 10);
          return 'number' == typeof e ? (e + 128) % 256 - 128 : e instanceof Array ? e.map(n.prototype.byte)  : void 0
        },
        n.prototype.char = function (t) {
          return 'number' != typeof t || isNaN(t) ? t instanceof Array ? t.map(n.prototype.char)  : 'string' == typeof t ? n.prototype.char(parseInt(t, 10))  : void 0 : String.fromCharCode(t)
        },
        n.prototype.unchar = function (t) {
          return 'string' == typeof t && 1 === t.length ? t.charCodeAt(0)  : t instanceof Array ? t.map(n.prototype.unchar)  : void 0
        },
        n.prototype.hex = function (t, e) {
          if (e = void 0 === e || null === e ? e = 8 : e, t instanceof Array) return t.map(function (t) {
            return n.prototype.hex(t, e)
          });
          if ('number' == typeof t) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var r = Number(t).toString(16).toUpperCase(); r.length < e; ) r = '0' + r;
            return r.length >= e && (r = r.substring(r.length - e, r.length)),
            r
          }
        },
        n.prototype.unhex = function (t) {
          return t instanceof Array ? t.map(n.prototype.unhex)  : parseInt('0x' + t, 16)
        },
        e.exports = n
      },
      {
        '../core/core': 49
      }
    ],
    87: [
      function (t, e, r) {
        'use strict';
        function n() {
          var t = arguments[0],
          e = t < 0,
          r = e ? t.toString().substring(1)  : t.toString(),
          n = r.indexOf('.'),
          i = n !== - 1 ? r.substring(0, n)  : r,
          o = n !== - 1 ? r.substring(n + 1)  : '',
          s = e ? '-' : '';
          if (3 === arguments.length) {
            var a = '';
            (n !== - 1 || arguments[2] - o.length > 0) && (a = '.'),
            o.length > arguments[2] && (o = o.substring(0, arguments[2]));
            for (var l = 0; l < arguments[1] - i.length; l++) s += '0';
            s += i,
            s += a,
            s += o;
            for (var u = 0; u < arguments[2] - o.length; u++) s += '0';
            return s
          }
          for (var h = 0; h < Math.max(arguments[1] - i.length, 0); h++) s += '0';
          return s += r
        }
        function i() {
          var t = arguments[0].toString(),
          e = t.indexOf('.'),
          r = e !== - 1 ? t.substring(e)  : '',
          n = e !== - 1 ? t.substring(0, e)  : t;
          if (n = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','), 0 === arguments[1]) r = '';
           else if (void 0 !== arguments[1]) if (arguments[1] > r.length) {
            r += e === - 1 ? '.' : '';
            for (var i = arguments[1] - r.length + 1, o = 0; o < i; o++) r += '0'
          } else r = r.substring(0, arguments[1] + 1);
          return n + r
        }
        function o() {
          return parseFloat(arguments[0]) > 0 ? '+' + arguments[0].toString()  : arguments[0].toString()
        }
        function s() {
          return parseFloat(arguments[0]) > 0 ? ' ' + arguments[0].toString()  : arguments[0].toString()
        }
        var a = t('../core/core');
        a.prototype.join = function (t, e) {
          return t.join(e)
        },
        a.prototype.match = function (t, e) {
          return t.match(e)
        },
        a.prototype.matchAll = function (t, e) {
          for (var r = new RegExp(e, 'g'), n = r.exec(t), i = [
          ]; null !== n; ) i.push(n),
          n = r.exec(t);
          return i
        },
        a.prototype.nf = function () {
          if (arguments[0] instanceof Array) {
            var t = arguments[1],
            e = arguments[2];
            return arguments[0].map(function (r) {
              return n(r, t, e)
            })
          }
          var r = Object.prototype.toString.call(arguments[0]);
          return '[object Arguments]' === r ? 3 === arguments[0].length ? this.nf(arguments[0][0], arguments[0][1], arguments[0][2])  : 2 === arguments[0].length ? this.nf(arguments[0][0], arguments[0][1])  : this.nf(arguments[0][0])  : n.apply(this, arguments)
        },
        a.prototype.nfc = function () {
          if (arguments[0] instanceof Array) {
            var t = arguments[1];
            return arguments[0].map(function (e) {
              return i(e, t)
            })
          }
          return i.apply(this, arguments)
        },
        a.prototype.nfp = function () {
          var t = this.nf.apply(this, arguments);
          return t instanceof Array ? t.map(o)  : o(t)
        },
        a.prototype.nfs = function () {
          var t = this.nf.apply(this, arguments);
          return t instanceof Array ? t.map(s)  : s(t)
        },
        a.prototype.split = function (t, e) {
          return t.split(e)
        },
        a.prototype.splitTokens = function () {
          var t,
          e,
          r,
          n;
          return n = arguments[1],
          arguments.length > 1 ? (r = /\]/g.exec(n), e = /\[/g.exec(n), e && r ? (n = n.slice(0, r.index) + n.slice(r.index + 1), e = /\[/g.exec(n), n = n.slice(0, e.index) + n.slice(e.index + 1), t = new RegExp('[\\[' + n + '\\]]', 'g'))  : r ? (n = n.slice(0, r.index) + n.slice(r.index + 1), t = new RegExp('[' + n + '\\]]', 'g'))  : e ? (n = n.slice(0, e.index) + n.slice(e.index + 1), t = new RegExp('[' + n + '\\[]', 'g'))  : t = new RegExp('[' + n + ']', 'g'))  : t = /\s/g,
          arguments[0].split(t).filter(function (t) {
            return t
          })
        },
        a.prototype.trim = function (t) {
          return t instanceof Array ? t.map(this.trim)  : t.trim()
        },
        e.exports = a
      },
      {
        '../core/core': 49
      }
    ],
    88: [
      function (t, e, r) {
        'use strict';
        var n = t('../core/core');
        n.prototype.day = function () {
          return (new Date).getDate()
        },
        n.prototype.hour = function () {
          return (new Date).getHours()
        },
        n.prototype.minute = function () {
          return (new Date).getMinutes()
        },
        n.prototype.millis = function () {
          return window.performance.now()
        },
        n.prototype.month = function () {
          return (new Date).getMonth() + 1
        },
        n.prototype.second = function () {
          return (new Date).getSeconds()
        },
        n.prototype.year = function () {
          return (new Date).getFullYear()
        },
        e.exports = n
      },
      {
        '../core/core': 49
      }
    ]
  },
  {
  },
  [
    40
  ]) (40)
});

