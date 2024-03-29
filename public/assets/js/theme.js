/*!
 * Jumpstart HTML template
 * Copyright 2018-2020 Medium Rare (undefined)
 */
! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("aos"), require("jquery"), require("jquery-countdown"), require("scrollmonitor"), require("flatpickr"), require("flickity"), require("ion-rangeslider"), require("isotope-layout"), require("jarallax"), require("plyr"), require("prismjs"), require("smooth-scroll"), require("@tanem/svg-injector"), require("twitter-fetcher"), require("typed.js")) : "function" == typeof define && define.amd ? define(["exports", "aos", "jquery", "jquery-countdown", "scrollmonitor", "flatpickr", "flickity", "ion-rangeslider", "isotope-layout", "jarallax", "plyr", "prismjs", "smooth-scroll", "@tanem/svg-injector", "twitter-fetcher", "typed.js"], e) : e((t = t || self).theme = {}, t.AOS, t.jQuery, null, t.scrollMonitor, t.flatpickr, t.Flickity, null, t.Isotope, t.jarallax, t.Plyr, t.Prism, t.SmoothScroll, t.SVGInjector, t.twitterFetcher, t.Typed)
}(this, function (t, e, j, n, b, s, E, i, O, r, a, o, l, u, A, c) {
  "use strict";
  var h;

  function f(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }

  function G(t, e, n) {
    return e && f(t.prototype, e), n && f(t, n), t
  }
  e = e && e.hasOwnProperty("default") ? e.default : e, j = j && j.hasOwnProperty("default") ? j.default : j, b = b && b.hasOwnProperty("default") ? b.default : b, s = s && s.hasOwnProperty("default") ? s.default : s, E = E && E.hasOwnProperty("default") ? E.default : E, O = O && O.hasOwnProperty("default") ? O.default : O, r = r && r.hasOwnProperty("default") ? r.default : r, a = a && a.hasOwnProperty("default") ? a.default : a, o = o && o.hasOwnProperty("default") ? o.default : o, l = l && l.hasOwnProperty("default") ? l.default : l, A = A && A.hasOwnProperty("default") ? A.default : A, c = c && c.hasOwnProperty("default") ? c.default : c, $(window).on("load", function () {
    e.init({
      once: !0
    })
  }), h = j, "objectFit" in document.documentElement.style == 0 && h(".bg-image").each(function () {
    var t = h(this),
      e = t.attr("src"),
      n = t.get(0).classList;
    t.before(h('<div class="' + n + '" style="background: url(' + e + '); background-size: cover; background-position: 50% 50%;"></div>')), t.remove()
  });
  var d = function (i) {
      if ("function" != typeof i.fn.countdown) throw new Error("mrCountdown requires jquery.countdown.js (https://github.com/hilios/jQuery.countdown/)");
      var t = "mrCountdown",
        r = "mr.countdown",
        e = i.fn[t],
        n = {
          LOAD_DATA_API: "load.mr.countdown.data-api"
        },
        a = "days",
        o = "Timer Done",
        s = "%Y",
        l = "%m",
        u = "%w",
        c = "%D",
        h = "%H",
        f = "%M",
        d = "%S",
        m = "%!Y:Year,Years;",
        p = "%!m:Month,Months;",
        g = "%!w:Week,Weeks;",
        y = "%!d:Day,Days;",
        v = "%!H:Hour,Hours;",
        w = "%!M:Minute,Minutes;",
        b = "%!S:Second,Seconds;",
        E = "d-none",
        A = "[data-countdown-date]",
        S = "[data-active-state]",
        T = "[data-elapsed-state]",
        I = "data-countdown-date",
        k = "data-days-text",
        O = "data-date-format",
        j = "data-date-fallback",
        C = "[data-years]",
        P = "[data-months]",
        x = "[data-weeks]",
        D = "[data-days]",
        F = "[data-hours]",
        V = "[data-minutes]",
        L = "[data-seconds]",
        _ = "[data-years-label]",
        R = "[data-months-label]",
        M = "[data-weeks-label]",
        N = "[data-days-label]",
        q = "[data-hours-label]",
        Q = "[data-minutes-label]",
        H = "[data-seconds-label]",
        z = "format",
        B = "detailed",
        W = function () {
          function n(t) {
            this.element = t;
            var e = i(t);
            this.date = e.attr(I), this.daysText = e.attr(k) || a, this.countdownText = "%D " + this.daysText + " %H:%M:%S", this.dateFormat = e.attr(O) || this.countdownText, this.fallback = e.attr(j) || o, this.detailed = null !== this.element.getAttribute("data-" + B), this.detailed && (this.years = {
              show: e.find(C).length,
              element: e.find(C),
              format: e.find(C).data(z) || s,
              label: {
                show: e.find(_).length,
                element: e.find(_),
                format: e.find(_).data(z) || m
              }
            }, this.months = {
              show: e.find(P).length,
              element: e.find(P),
              format: e.find(P).data(z) || l,
              label: {
                show: e.find(R).length,
                element: e.find(R),
                format: e.find(R).data(z) || p
              }
            }, this.weeks = {
              show: e.find(x).length,
              element: e.find(x),
              format: e.find(x).data(z) || u,
              label: {
                show: e.find(M).length,
                element: e.find(M),
                format: e.find(M).data(z) || g
              }
            }, this.days = {
              show: e.find(D).length,
              element: e.find(D),
              format: e.find(D).data(z) || c,
              label: {
                show: e.find(N).length,
                element: e.find(N),
                format: e.find(N).data(z) || y
              }
            }, this.hours = {
              show: e.find(F).length,
              element: e.find(F),
              format: e.find(F).data(z) || h,
              label: {
                show: e.find(q).length,
                element: e.find(q),
                format: e.find(q).data(z) || v
              }
            }, this.minutes = {
              show: e.find(V).length,
              element: e.find(V),
              format: e.find(V).data(z) || f,
              label: {
                show: e.find(Q).length,
                element: e.find(Q),
                format: e.find(Q).data(z) || w
              }
            }, this.seconds = {
              show: e.find(L).length,
              element: e.find(L),
              format: e.find(L).data(z) || d,
              label: {
                show: e.find(H).length,
                element: e.find(H),
                format: e.find(H).data(z) || b
              }
            }), this.initCountdown()
          }
          return n.prototype.initCountdown = function () {
            var e = this,
              n = i(this.element);
            this.detailed ? n.countdown(this.date, function (t) {
              t.elapsed ? (n.find(T).removeClass(E), n.find(S).addClass(E)) : (e.years.show && e.years.element.text(t.strftime(e.years.format)), e.years.label.show && e.years.label.element.text(t.strftime(e.years.label.format)), e.months.show && e.months.element.text(t.strftime(e.months.format)), e.months.label.show && e.months.label.element.text(t.strftime(e.months.label.format)), e.weeks.show && e.weeks.element.text(t.strftime(e.weeks.format)), e.weeks.label.show && e.weeks.label.element.text(t.strftime(e.weeks.label.format)), e.days.show && e.days.element.text(t.strftime(e.days.format)), e.days.label.show && e.days.label.element.text(t.strftime(e.days.label.format)), e.hours.show && e.hours.element.text(t.strftime(e.hours.format)), e.hours.label.show && e.hours.label.element.text(t.strftime(e.hours.label.format)), e.minutes.show && e.minutes.element.text(t.strftime(e.minutes.format)), e.minutes.label.show && e.minutes.label.element.text(t.strftime(e.minutes.label.format)), e.seconds.show && e.seconds.element.text(t.strftime(e.seconds.format)), e.seconds.label.show && e.seconds.label.element.text(t.strftime(e.seconds.label.format)))
            }) : i(this.element).countdown(this.date, function (t) {
              t.elapsed ? n.text(e.fallback) : n.text(t.strftime(e.dateFormat))
            })
          }, n.jQueryInterface = function () {
            return this.each(function () {
              var t = i(this),
                e = t.data(r);
              e || (e = new n(this), t.data(r, e))
            })
          }, G(n, null, [{
            key: "VERSION",
            get: function () {
              return "1.1.0"
            }
          }]), n
        }();
      return i(window).on(n.LOAD_DATA_API, function () {
        for (var t = i.makeArray(i(A)), e = t.length; e--;) {
          var n = i(t[e]);
          W.jQueryInterface.call(n, n.data())
        }
      }), i.fn[t] = W.jQueryInterface, i.fn[t].Constructor = W, i.fn[t].noConflict = function () {
        return i.fn[t] = e, W.jQueryInterface
      }, W
    }(j),
    m = function () {
      return (m = Object.assign || function (t) {
        for (var e, n = 1, i = arguments.length; n < i; n++)
          for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t
      }).apply(this, arguments)
    },
    v = (p.prototype.determineDirectionAndSmartEasing = function () {
      var t = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t;
      var e = t - this.startVal;
      if (Math.abs(e) > this.options.smartEasingThreshold) {
        this.finalEndVal = t;
        var n = this.countDown ? 1 : -1;
        this.endVal = t + n * this.options.smartEasingAmount, this.duration = this.duration / 2
      } else this.endVal = t, this.finalEndVal = null;
      this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
    }, p.prototype.start = function (t) {
      this.error || (this.callback = t, 0 < this.duration ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
    }, p.prototype.pauseResume = function () {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
    }, p.prototype.reset = function () {
      cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
    }, p.prototype.update = function (t) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
    }, p.prototype.printValue = function (t) {
      var e = this.formattingFn(t);
      "INPUT" === this.el.tagName ? this.el.value = e : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = e : this.el.innerHTML = e
    }, p.prototype.ensureNumber = function (t) {
      return "number" == typeof t && !isNaN(t)
    }, p.prototype.validateValue = function (t) {
      var e = Number(t);
      return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: " + t, null)
    }, p.prototype.resetDuration = function () {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
    }, p);

  function p(t, e, n) {
    var u = this;
    this.target = t, this.endVal = e, this.options = n, this.version = "2.0.4", this.defaults = {
      startVal: 0,
      decimalPlaces: 0,
      duration: 2,
      useEasing: !0,
      useGrouping: !0,
      smartEasingThreshold: 999,
      smartEasingAmount: 333,
      separator: ",",
      decimal: ".",
      prefix: "",
      suffix: ""
    }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.count = function (t) {
      u.startTime || (u.startTime = t);
      var e = t - u.startTime;
      u.remaining = u.duration - e, u.useEasing ? u.countDown ? u.frameVal = u.startVal - u.easingFn(e, 0, u.startVal - u.endVal, u.duration) : u.frameVal = u.easingFn(e, u.startVal, u.endVal - u.startVal, u.duration) : u.countDown ? u.frameVal = u.startVal - (u.startVal - u.endVal) * (e / u.duration) : u.frameVal = u.startVal + (u.endVal - u.startVal) * (e / u.duration), u.countDown ? u.frameVal = u.frameVal < u.endVal ? u.endVal : u.frameVal : u.frameVal = u.frameVal > u.endVal ? u.endVal : u.frameVal, u.frameVal = Math.round(u.frameVal * u.decimalMult) / u.decimalMult, u.printValue(u.frameVal), e < u.duration ? u.rAF = requestAnimationFrame(u.count) : null !== u.finalEndVal ? u.update(u.finalEndVal) : u.callback && u.callback()
    }, this.formatNumber = function (t) {
      var e, n, i, r, a, o = t < 0 ? "-" : "";
      if (e = Math.abs(t).toFixed(u.options.decimalPlaces), i = (n = (e += "").split("."))[0], r = 1 < n.length ? u.options.decimal + n[1] : "", u.options.useGrouping) {
        a = "";
        for (var s = 0, l = i.length; s < l; ++s) 0 !== s && s % 3 == 0 && (a = u.options.separator + a), a = i[l - s - 1] + a;
        i = a
      }
      return u.options.numerals && u.options.numerals.length && (i = i.replace(/[0-9]/g, function (t) {
        return u.options.numerals[+t]
      }), r = r.replace(/[0-9]/g, function (t) {
        return u.options.numerals[+t]
      })), o + u.options.prefix + i + r + u.options.suffix
    }, this.easeOutExpo = function (t, e, n, i) {
      return n * (1 - Math.pow(2, -10 * t / i)) * 1024 / 1023 + e
    }, this.options = m({}, this.defaults, n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(e), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.decimalMult = Math.pow(10, this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof t ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined"
  }
  var g, y, w, S, T, I, k, C, P, x, D, F, V, L, _, R, M, N, q, Q, H, z = function (i) {
      if (void 0 === b) throw new Error("mrCountup requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)");
      var t = "mrCountup",
        r = "mr.countup",
        e = "." + r,
        n = i.fn[t],
        a = "start",
        o = "end",
        s = "duration",
        l = "grouping",
        u = "separator",
        c = "decimal-character",
        h = "decimal-places",
        f = "prefix",
        d = "suffix",
        m = "easing",
        p = {
          LOAD_DATA_API: "load" + e + ".data-api",
          RESIZE: "resize" + e
        },
        g = "[data-countup]",
        y = function () {
          function n(t) {
            var e = i(t);
            this.start = parseFloat(e.data(a), 10) || 0, this.end = parseFloat(e.data(o), 10) || parseFloat(e.text(), 10), this.duration = parseFloat(e.data(s), 10) || 2.5, this.grouping = !0 === e.data(l) || !1, this.separator = e.data(u) || ",", this.decimalCharacter = e.data(c) || ".", this.decimalPlaces = parseInt(e.data(h), 10) || 0, this.prefix = e.data(f) || "", this.suffix = e.data(d) || "";
            var n = e.data(m);
            this.easing = !1 !== n || n, this.element = t, this.initWatcher(t), this.startCounting()
          }
          var t = n.prototype;
          return t.initWatcher = function (t) {
            var e = this;
            this.CountUp = new v(t, this.end, {
              startVal: this.start,
              decimalPlaces: this.decimalPlaces,
              duration: this.duration,
              useEasing: this.easing,
              useGrouping: this.grouping,
              separator: this.separator,
              decimal: this.decimalCharacter,
              prefix: this.prefix,
              suffix: this.suffix
            });
            var n = b.create(t);
            (this.watcher = n).stateChange(function () {
              e.startCounting()
            })
          }, t.startCounting = function () {
            if (this.watcher.isFullyInViewport) {
              if (this.CountUp.error) throw new Error(this.CountUp.error);
              this.CountUp.start()
            }
          }, n.jQueryInterface = function () {
            return this.each(function () {
              var t = i(this),
                e = t.data(r);
              e || (e = new n(this), t.data(r, e))
            })
          }, G(n, null, [{
            key: "VERSION",
            get: function () {
              return "1.1.0"
            }
          }]), n
        }();
      return i(window).on(p.LOAD_DATA_API, function () {
        for (var t = i.makeArray(i(g)), e = t.length; e--;) {
          var n = i(t[e]);
          y.jQueryInterface.call(n, n.data())
        }
      }), i.fn[t] = y.jQueryInterface, i.fn[t].Constructor = y, i.fn[t].noConflict = function () {
        return i.fn[t] = n, y.jQueryInterface
      }, y
    }(j),
    B = (y = "script", (g = j)("body").tooltip({
      selector: '[data-toggle="tooltip"]',
      container: "body"
    }), g("body").popover({
      selector: '[data-toggle="popover"]',
      container: "body"
    }), g(".toast").toast(), {
      version: "1.2.0",
      selector: {
        RECAPTCHA: "[data-recaptcha]"
      },
      activateIframeSrc: function (t) {
        var e = g(t);
        e.attr("data-src") && e.attr("src", e.attr("data-src"))
      },
      idleIframeSrc: function (t) {
        var e = g(t);
        e.attr("data-src", e.attr("src")).attr("src", "")
      },
      forEach: function (t, e, n) {
        if (t)
          if (t.length)
            for (var i = 0; i < t.length; i += 1) e.call(n, i, t[i]);
          else(t[0] || B.isElement(t)) && e.call(n, 0, t)
      },
      dedupArray: function (t) {
        return t.reduce(function (t, e) {
          var n = JSON.stringify(e);
          return -1 === t.temp.indexOf(n) && (t.out.push(e), t.temp.push(n)), t
        }, {
          temp: [],
          out: []
        }).out
      },
      isElement: function (t) {
        return !(!t || 1 !== t.nodeType)
      },
      getFuncFromString: function (t, e) {
        var n = t || null;
        if ("function" == typeof n) return t;
        if ("string" == typeof n) {
          if (!n.length) return null;
          for (var i = e || window, r = n.split("."); r.length;) {
            var a = r.shift();
            if (void 0 === i[a]) return null;
            i = i[a]
          }
          if ("function" == typeof i) return i
        }
        return null
      },
      getScript: function (t, n) {
        var i = document.createElement(y),
          e = document.getElementsByTagName(y)[0];
        i.async = 1, i.defer = 1, i.onreadystatechange = function (t, e) {
          !e && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = null, i.onreadystatechange = null, i = void 0, !e && n && "function" == typeof n && n())
        }, i.onload = i.onreadystatechange, i.src = t, e.parentNode.insertBefore(i, e)
      }
    }),
    W = (S = "mrDropdownGrid", I = "." + (T = "mr.dropdownGrid"), k = ".data-api", C = (w = j).fn[S], P = new RegExp("38|40|27"), x = {
      SHOW: "show"
    }, D = {
      LOAD_DATA_API: "load" + I + k,
      RESIZE: "resize" + I,
      HIDE: "hide" + I,
      HIDDEN: "hidden" + I,
      SHOW: "show" + I,
      SHOWN: "shown" + I,
      CLICK: "click" + I,
      MOUSE_ENTER: "mouseenter" + I,
      MOUSE_LEAVE: "mouseleave" + I,
      CLICK_DATA_API: "click" + I + k,
      KEYDOWN_DATA_API: "keydown" + I + k,
      KEYUP_DATA_API: "keyup" + I + k
    }, F = '[data-toggle="dropdown-grid"]', V = ".dropdown form", _ = L = ".dropdown-menu", R = "[data-dropdown-content]", M = ".navbar-nav", N = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", q = "data-hover", Q = "data-dropdown-grid-hover", H = function () {
      function l(t) {
        this.ticking = !1, this.isActive = !1, this.element = t, this.getOptions(), this.parent = l.getParentFromElement(this.element), this.menu = this.getMenuElement(), this.container = this.getContainerElement(), this.content = this.getContentElement(), this.isSubmenu = this.hasParentMenu(), this.isSubmenu && (this.siblingMenus = this.getSiblingMenus()), this.submenus = this.getSubmenus(), this.hover = this.options.hover, this.addEventListeners(), this.setResizeEvent()
      }
      var t = l.prototype;
      return t.getOptions = function () {
        this.options || (this.options = {}, this.options.hover = ("true" === this.element.getAttribute(q) || "true" === document.body.getAttribute(Q)) && "false" !== this.element.getAttribute(q))
      }, t.toggle = function (t) {
        if (this.getParentMenu(), !this.element.disabled && !w(this.element).hasClass(x.DISABLED)) {
          this.isActive = w(this.menu).hasClass(x.SHOW);
          var e = this.isActive,
            n = !this.isActive;
          if (this.isSubmenu || l.clearMenus(), (this.isSubmenu || !e) && (this.isSubmenu || !n || !t || t.type !== D.MOUSE_LEAVE)) {
            if (this.isSubmenu && this.isActive) return l.clearMenus(null, this.element), void l.clearMenus(null, this.submenus);
            this.isSubmenu && !this.isActive && l.clearMenus(null, this.siblingMenus);
            var i = {
                relatedTarget: this.element
              },
              r = w.Event(D.SHOW, i);
            w(this.parent).trigger(r), r.isDefaultPrevented() || ("ontouchstart" in document.documentElement && 0 === w(this.parent).closest(M).length && w(document.body).children().on("mouseover", null, w.noop), this.element.focus(), this.element.setAttribute("aria-expanded", !0), w(this.menu).toggleClass(x.SHOW), this.updatePosition(), this.isActive = !0, w(this.parent).toggleClass(x.SHOW).trigger(w.Event(D.SHOWN, i)))
          }
        }
      }, t.updatePosition = function (t) {
        var e = t || window.innerWidth,
          n = W.getDimensionsFromElement(this.element);
        this.positionContainer(n.offsetLeft), this.positionContent(e, n.offsetLeft)
      }, t.positionContainer = function (t) {
        if (!this.container) throw new TypeError("No element matching .dropdown-menu.container found.");
        this.container.style.left = "-" + t + "px"
      }, t.positionContent = function (t, e) {
        if (!this.content) throw new TypeError("No [data-dropdown-content] element was found.");
        var n, i = W.getDimensionsFromElement(this.content).width;
        if (this.isSubmenu) {
          this.getParentMenu();
          var r = W.getDimensionsFromElement(this.parentMenu.content);
          n = r.offsetLeft + r.width + i <= t ? r.offsetLeft + r.width : r.offsetLeft >= i ? r.offsetLeft - i : 0
        } else n = t <= i + e ? t - i : e;
        var a = Math.round(n) + "px";
        this.content.style.left = a
      }, t.setResizeEvent = function () {
        var t = this;
        w(window).on(D.RESIZE, function () {
          t.ticking || (window.requestAnimationFrame(function () {
            t.updatePosition(), t.ticking = !1
          }), t.ticking = !0)
        })
      }, t.getMenuElement = function () {
        return this.menu || this.parent && (this.menu = this.parent.querySelector(L)), this.menu
      }, t.getContainerElement = function () {
        return this.container || this.parent && (this.container = this.parent.querySelector("" + L + _)), this.container
      }, t.getContentElement = function () {
        return this.content || this.parent && (this.content = this.container.querySelector(R)), this.content
      }, t.hasParentMenu = function () {
        return 0 < w(this.element).closest(R).length
      }, t.getParentMenu = function () {
        this.isSubmenu && !this.parentMenu && (this.parentMenu = w(this.parent).closest(L).siblings(F).data(T))
      }, t.getSiblingMenus = function () {
        return w(this.element).closest(R).get(0).querySelectorAll(F)
      }, t.getSubmenus = function () {
        var t = this.content.querySelectorAll(F);
        return this.isParent = 0 !== t.length, t
      }, t.addEventListeners = function () {
        var e = this;
        w(this.element).on(D.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle()
        }), this.hover && w(this.parent).on(D.MOUSE_ENTER + " " + D.MOUSE_LEAVE, function (t) {
          t.preventDefault(), t.stopPropagation(), t.type + I === D.MOUSE_ENTER && e.isActive || t.type + I === D.MOUSE_LEAVE && !e.isActive || e.toggle(t)
        })
      }, l.getDimensionsFromElement = function (t) {
        if (t && B.isElement(t)) {
          var e = t.getBoundingClientRect();
          return e.offsetLeft = Math.round(e.left + window.pageXOffset - document.documentElement.clientLeft), e
        }
        throw new TypeError("Can't get a measurement from a non-element")
      }, l.getParentFromElement = function (t) {
        return t.parentNode
      }, l.clearMenus = function (s, t) {
        var e;
        s && (3 === s.which || "keyup" === s.type) && 9 !== s.which || (e = t && "object" == typeof t ? t : document.querySelectorAll(F), B.forEach(e, function (t, e) {
          var n = l.getParentFromElement(e),
            i = w(e).data(T),
            r = {
              relatedTarget: e
            };
          if (s && "click" === s.type && (r.clickEvent = s), i) {
            var a = i.menu;
            if (w(n).hasClass(x.SHOW) && !(s && ("click" === s.type && /input|textarea/i.test(s.target.tagName) || "keyup" === s.type && 9 === s.which) && w.contains(n, s.target) || s && "click" === s.type && (w.contains(i.content, s.target) || i.content.isSameNode(s.target)))) {
              var o = w.Event(D.HIDE, r);
              w(n).trigger(o), o.isDefaultPrevented() || ("ontouchstart" in document.documentElement && w(document.body).children().off("mouseover", null, w.noop), e.setAttribute("aria-expanded", "false"), i.isActive = !1, w(a).removeClass(x.SHOW), w(n).removeClass(x.SHOW).trigger(w.Event(D.HIDDEN, r)))
            }
          }
        }))
      }, l.jQueryInterface = function (n) {
        return this.each(function () {
          var t = w(this),
            e = t.data(T);
          if (e || (e = new l(this), t.data(T, e)), "string" == typeof n) {
            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]()
          }
        })
      }, l.dataApiKeydownHandler = function (t) {
        if ((/input|textarea/i.test(t.target.tagName) ? 32 !== t.which && 27 === t.which || !(40 !== t.which && 38 !== t.which || w(t.target).closest(L).length) : P.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !w(this).hasClass(x.DISABLED))) {
          var e = l.getParentFromElement(this),
            n = w(e).hasClass(x.SHOW);
          if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
            var i = [].slice.call(e.querySelectorAll(N));
            if (0 !== i.length) {
              var r = i.indexOf(t.target);
              38 === t.which && 0 < r && (r -= 1), 40 === t.which && r < i.length - 1 && (r += 1), r < 0 && (r = 0), i[r].focus()
            }
          } else {
            if (27 === t.which) {
              var a = e.querySelector(F);
              w(a).trigger("focus")
            }
            w(this).trigger("click")
          }
        }
      }, G(l, null, [{
        key: "VERSION",
        get: function () {
          return "1.0.0"
        }
      }]), l
    }(), w(document).on(D.KEYDOWN_DATA_API, F, H.dataApiKeydownHandler).on(D.KEYDOWN_DATA_API, L, H.dataApiKeydownHandler).on(D.CLICK_DATA_API + " " + D.KEYUP_DATA_API, H.clearMenus).on(D.CLICK_DATA_API, V, function (t) {
      t.stopPropagation()
    }), w(document).ready(function () {
      for (var t = w.makeArray(w(F)), e = t.length; e--;) {
        var n = w(t[e]);
        H.jQueryInterface.call(n, n.data())
      }
    }), w.fn[S] = H.jQueryInterface, w.fn[S].Constructor = H, w.fn[S].noConflict = function () {
      return w.fn[S] = C, H.jQueryInterface
    }, H);
  ! function () {
    var n = "href",
      i = "fade-page",
      r = 500,
      t = document.getElementsByClassName(i);

    function e(t) {
      if (!(t.ctrlKey || t.shiftKey || t.metaKey || t.button && 1 === t.button)) {
        t.preventDefault(), t.stopPropagation(), document.body.classList.add(i);
        var e = this.getAttribute(n);
        setTimeout(function () {
          "" !== e && "#" !== e && (window.location.href = e)
        }, r)
      }
    }
    for (var a = 0; a < t.length; a += 1) t[a].addEventListener("click", e, !1)
  }();
  var U = function (i) {
    if (void 0 === s) throw new Error("mrFlatpickr requires flatpickr.js (https://github.com/flatpickr/flatpickr)");
    var t = "mrFlatpickr",
      r = "mr.flatpickr",
      e = i.fn[t],
      n = {
        LOAD_DATA_API: "load.mr.flatpickr.data-api"
      },
      a = "[data-flatpickr]",
      o = function () {
        function n(t) {
          this.element = t, this.initflatpickr()
        }
        return n.prototype.initflatpickr = function () {
          var t = i(this.element).data();
          this.instance = s(this.element, t)
        }, n.jQueryInterface = function () {
          return this.each(function () {
            var t = i(this),
              e = t.data(r);
            e || (e = new n(this), t.data(r, e))
          })
        }, G(n, null, [{
          key: "VERSION",
          get: function () {
            return "1.0.0"
          }
        }]), n
      }();
    return i(window).on(n.LOAD_DATA_API, function () {
      for (var t = i.makeArray(i(a)), e = t.length; e--;) {
        var n = i(t[e]);
        o.jQueryInterface.call(n, n.data())
      }
    }), i.fn[t] = o.jQueryInterface, i.fn[t].Constructor = o, i.fn[t].noConflict = function () {
      return i.fn[t] = e, o.jQueryInterface
    }, o
  }(j);
  $(document).on("shown.bs.modal layoutComplete", function (t) {
    $(t.target).find("[data-flickity]").each(function (t, e) {
      var n = $(e);
      n.data().flickity.isInitActivated && n.flickity("resize")
    })
  });
  var K = function (i) {
      if (!(B && "1.2.0" <= B.version)) throw new Error("mrUtil >= version 1.2.0 is required.");
      var t = "mrRecaptchav2",
        r = "mr.recaptchav2",
        e = i.fn[t],
        a = {
          RECAPTCHAV2: "https://www.google.com/recaptcha/api.js?onload=mrRecaptchav2Init&render=explicit"
        },
        o = "[data-recaptcha]",
        s = "form",
        l = "invisible",
        u = [],
        c = !1,
        h = function () {
          function n(t) {
            this.element = t, this.form = this.getForm(), this.isReady = !1, this.isValid = !1, this.options = i(this.element).data(), this.invisible = this.options.size === l, this.id = null, u.push(this)
          }
          var t = n.prototype;
          return t.init = function () {
            var t = this;
            "" === this.element.innerHTML.replace(/[\s\xA0]+/g, "") && (this.id = grecaptcha.render(this.element, {
              sitekey: this.options.sitekey,
              theme: this.options.theme,
              size: this.options.size,
              badge: this.options.badge,
              tabindex: this.options.tabindex,
              callback: function () {
                t.validate()
              },
              "expired-callback": function () {
                t.invalidate()
              }
            }), this.isReady = !0)
          }, t.validate = function () {
            this.isValid = !0, this.invisible && this.form && i(this.form).trigger("submit")
          }, t.invalidate = function () {
            this.isValid = !1
          }, t.checkValidity = function () {
            return !(!this.isReady || !this.isValid)
          }, t.execute = function () {
            this.isReady && this.invisible && grecaptcha.execute(this.id)
          }, t.reset = function () {
            this.isReady && (grecaptcha.reset(this.id), this.isValid = !1)
          }, t.getForm = function () {
            var t = i(this.element).closest(s);
            return t.length ? t.get(0) : null
          }, n.getRecaptchaFromForm = function (t) {
            if (B.isElement(t)) {
              var e = t.querySelector(o);
              return e && i(e).data(r) || null
            }
            throw new TypeError("Form argument passed to getRecaptchaFromForm is not an element.")
          }, n.jQueryInterface = function () {
            return this.each(function () {
              var t = i(this),
                e = t.data(r);
              e || (e = new n(this), t.data(r, e))
            })
          }, G(n, null, [{
            key: "VERSION",
            get: function () {
              return "1.0.0"
            }
          }, {
            key: "ready",
            get: function () {
              return c
            }
          }, {
            key: "instances",
            get: function () {
              return u
            }
          }, {
            key: "apiReady",
            set: function (t) {
              !0 === t && !1 === c && B.forEach(n.instances, function (t, e) {
                e.init()
              }), c = !0
            }
          }]), n
        }();
      return window.mrRecaptchav2Init = function () {
        K.apiReady = !0
      }, i(document).ready(function () {
        var t = i.makeArray(i(o));
        if (0 < t.length) {
          B.getScript(a.RECAPTCHAV2);
          for (var e = t.length; e--;) {
            var n = i(t[e]);
            h.jQueryInterface.call(n, n.data())
          }
        }
      }), i.fn[t] = h.jQueryInterface, i.fn[t].Constructor = h, i.fn[t].noConflict = function () {
        return i.fn[t] = e, h.jQueryInterface
      }, h
    }(jQuery),
    Y = function (r) {
      if (!(B && "1.2.0" <= B.version)) throw new Error("mrUtil >= version 1.2.0 is required.");
      var t = "mrFormEmail",
        i = "mr.formEmail",
        e = "." + i,
        n = r.fn[t],
        a = "btn-loading-animate",
        o = "was-validated",
        s = "d-none",
        l = "action",
        u = "disabled",
        c = "data-feedback-delay",
        h = "data-success-redirect",
        f = "[data-form-email]",
        d = "[data-success-message]",
        m = "[data-error-message]",
        p = 'button[type="submit"]',
        g = "span",
        y = "input,textarea,select",
        v = "initially-disabled",
        w = {
          SENT: "sent" + e,
          LOAD_DATA_API: "load" + e + ".data-api",
          SUBMIT: "submit"
        },
        b = "data-loading-text",
        E = "Sending",
        A = "forms/mail.php",
        S = 5e3,
        T = "Form submission error",
        I = "success",
        k = "error",
        O = function () {
          function n(t) {
            this.form = t, this.action = this.form.getAttribute(l) || A, this.feedback = this.getFeedbackElements(), this.getRecaptcha(), this.initSubmitButton(), this.setSubmitEvent()
          }
          var t = n.prototype;
          return t.submitForm = function () {
            this.hideAllFeedback(), this.validateForm() && this.ajaxSubmit()
          }, t.validateForm = function () {
            var t = this.form.checkValidity();
            if (this.recaptcha)
              if (this.recaptcha.invisible) {
                if (t && !this.recaptcha.checkValidity()) return this.recaptcha.execute(), !1
              } else !1 === this.recaptcha.checkValidity() && (t = !1);
            return t ? (this.form.classList.remove(o), !0) : (clearTimeout(this.feedbackTimeout), this.form.classList.add(o), this.showFeedback(k, this.validationErrorMessage), !1)
          }, t.ajaxSubmit = function () {
            var t = r(this.form).serializeArray();
            t.push({
              name: "url",
              value: window.location.href
            }), j.ajax({
              context: this,
              data: t,
              dataType: "json",
              error: this.showFeedback,
              success: this.processResponse,
              type: "POST",
              url: this.action
            }), this.toggleFormLoading(!0)
          }, t.initSubmitButton = function () {
            return this.submitButton || (this.submitButton = this.form.querySelector(p)), this.submitButtonSpan = this.submitButton.querySelector(g), this.loadingText = this.submitButton.getAttribute(b) || E, this.originalSubmitText = this.submitButtonSpan.textContent, this.submitButton
          }, t.processResponse = function (t) {
            var e = this,
              n = t.status === I;
            this.toggleFormLoading(!1), this.recaptcha && this.recaptcha.reset(), r(this.form).trigger(r.Event(w.SENT));
            var i = this.form.getAttribute(h);
            n && i && "" !== i ? window.location = i : n && (this.form.reset(), this.feedbackTimeout = setTimeout(function () {
              return e.hideAllFeedback()
            }, this.feedbackDelay)), i || this.showFeedback(t.status, t.message), t.errorDetail && console.error(t.errorName || T, 0 === t.errorDetail.indexOf("{") ? JSON.parse(t.errorDetail) : t.errorDetail)
          }, t.showFeedback = function (t, e, n) {
            this.toggleFormLoading(!1), "object" == typeof t && t.statusText ? (clearTimeout(this.feedbackTimeout), this.feedback.error.innerHTML = (n || e) + ': <em>"' + this.action + '"</em> (' + t.status + " " + e + ")", this.feedback.error.classList.remove(s)) : (this.feedback[t].innerHTML = e, this.feedback[t].classList.remove(s))
          }, t.hideAllFeedback = function () {
            this.feedback.success.classList.add(s), this.feedback.error.classList.add(s)
          }, t.getFeedbackElements = function () {
            if (!this.feedback) {
              this.feedback = {
                success: this.form.querySelector(d),
                error: this.form.querySelector(m)
              }, this.validationErrorMessage = this.feedback.error.innerHTML;
              var t = this.form.getAttribute(c) || S;
              this.feedbackDelay = parseInt(t, 10), this.feedbackTimeout = null
            }
            return this.feedback
          }, t.getRecaptcha = function () {
            if (this.form.querySelector(B.selector.RECAPTCHA)) {
              if (!K) throw new Error("mrRecaptcha.js is required to handle the reCAPTCHA element in this form.");
              this.recaptcha = K.getRecaptchaFromForm(this.form)
            }
          }, t.toggleFormLoading = function (t) {
            this.toggleSubmitButtonLoading(t), n.toggleDisabled(this.form.querySelectorAll(y), t)
          }, t.toggleSubmitButtonLoading = function (t) {
            this.toggleSubmitButtonText(t), this.toggleSubmitButtonAnimation(t), n.toggleDisabled(this.submitButton, t)
          }, t.toggleSubmitButtonAnimation = function (t) {
            this.submitButton.classList[t ? "add" : "remove"](a)
          }, t.toggleSubmitButtonText = function (t) {
            this.submitButtonSpan.textContent = t ? this.loadingText : this.originalSubmitText
          }, n.toggleDisabled = function (t, n) {
            B.forEach(t, function (t, e) {
              n && (null !== e.getAttribute(u) ? e.classList.add(v) : e.setAttribute(u, "")), n || e.classList.contains(v) || e.removeAttribute(u)
            })
          }, n.getInstanceFromForm = function (t) {
            if (B.isElement(t)) return r(t).data(i) || null;
            throw new TypeError("Form argument passed to getInstanceFromForm is not an element.")
          }, t.setSubmitEvent = function () {
            var e = this;
            r(this.form).on(w.SUBMIT, function (t) {
              t.preventDefault(), e.submitForm()
            })
          }, n.jQueryInterface = function () {
            return this.each(function () {
              var t = r(this),
                e = t.data(i);
              e || (e = new n(this), t.data(i, e))
            })
          }, G(n, null, [{
            key: "VERSION",
            get: function () {
              return "1.0.1"
            }
          }]), n
        }();
      return r(window).on(w.LOAD_DATA_API, function () {
        for (var t = r.makeArray(r(f)), e = t.length; e--;) {
          var n = r(t[e]);
          O.jQueryInterface.call(n, n.data())
        }
      }), r.fn[t] = O.jQueryInterface, r.fn[t].Constructor = O, r.fn[t].noConflict = function () {
        return r.fn[t] = n, O.jQueryInterface
      }, O
    }(j),
    Z = function (i) {
      if ("function" != typeof i.fn.ionRangeSlider) throw new Error("mrIonRangeSlider requires ion.rangeSlider.js (https://github.com/IonDen/ion.rangeSlider)");
      if (!(B && "1.2.0" <= B.version)) throw new Error("mrUtil >= version 1.2.0 is required.");
      var t = "mrIonRangeSlider",
        r = "mr.ionRangeSlider",
        e = i.fn[t],
        a = {
          LOAD_DATA_API: "load.mr.ionRangeSlider.data-api",
          CHANGE: "input"
        },
        o = "[data-ion-rangeslider]",
        s = "INPUT",
        l = "text",
        u = "theme",
        c = function () {
          function n(t) {
            var e = i(t);
            this.options = e.data(), this.element = t, this.fromElement = null, this.toElement = null, this.unitElement = null, this.initRangeSlider()
          }
          var t = n.prototype;
          return t.initRangeSlider = function () {
            var t = this.options;
            t.fromSelector && (this.fromElement = document.querySelectorAll(t.fromSelector), this.setFromUpdateEvent(this.fromElement)), t.toSelector && (this.toElement = document.querySelectorAll(t.toSelector), this.setToUpdateEvent(this.toElement)), t.unitSelector && t.unitSingle && t.unitPlural && (this.unitElement = document.querySelectorAll(t.unitSelector)), i(this.element).ionRangeSlider({
              skin: u,
              onStart: B.getFuncFromString(t.onStart),
              onFinish: B.getFuncFromString(t.onFinish),
              onChange: this.handleChange,
              scope: this,
              onUpdate: B.getFuncFromString(t.onUpdate)
            }), this.rangeSlider = i(this.element).data("ionRangeSlider")
          }, t.handleChange = function (t) {
            if (this.fromElement && 0 < this.fromElement.length && Z.updateValue(this.fromElement, t.from_value || t.from), this.toElement && 0 < this.toElement.length && Z.updateValue(this.toElement, t.to_value || t.to), this.unitElement && 0 < this.unitElement.length) {
              var e = parseInt(t.from_value, 10) || t.value;
              Z.updateValue(this.unitElement, 1 < e ? this.options.unitPlural : this.options.unitSingle)
            }
            var n = B.getFuncFromString(this.options.onChange);
            n && n(t)
          }, t.setToUpdateEvent = function (t) {
            var n = this;
            B.forEach(t, function (t, e) {
              e.tagName.toUpperCase() === s && e.type === l && e.addEventListener(a.CHANGE, function () {
                n.rangeSlider.update({
                  to: e.value
                })
              })
            })
          }, t.setFromUpdateEvent = function (t) {
            var n = this;
            B.forEach(t, function (t, e) {
              e.tagName.toUpperCase() === s && e.type === l && e.addEventListener(a.CHANGE, function () {
                n.rangeSlider.update({
                  from: e.value
                })
              })
            })
          }, n.updateValue = function (t, n) {
            B.forEach(t, function (t, e) {
              e[e.tagName.toUpperCase() === s ? "value" : "textContent"] = n
            })
          }, n.jQueryInterface = function () {
            return this.each(function () {
              var t = i(this),
                e = t.data(r);
              e || (e = new n(this), t.data(r, e))
            })
          }, G(n, null, [{
            key: "VERSION",
            get: function () {
              return "1.0.0"
            }
          }]), n
        }();
      return i(window).on(a.LOAD_DATA_API, function () {
        for (var t = i.makeArray(i(o)), e = t.length; e--;) {
          var n = i(t[e]);
          c.jQueryInterface.call(n, n.data())
        }
      }), i.fn[t] = c.jQueryInterface, i.fn[t].Constructor = c, i.fn[t].noConflict = function () {
        return i.fn[t] = e, c.jQueryInterface
      }, c
    }(j),
    J = function (d) {
      if (void 0 === O) throw new Error("mrIsotope requires isotope.pkgd.js (https://github.com/metafizzy/isotope)");
      var t = "mrIsotope",
        i = "mr.isotope",
        e = d.fn[t],
        r = "active",
        m = {
          LOAD_DATA_API: "load.mr.isotope.data-api",
          FILTER_CLICK: "click touchstart",
          SORTER_CLICK: "click touchstart"
        },
        a = "masonry",
        p = "original-order",
        o = ".js-filter-inited",
        s = "data-isotope-id",
        l = "[data-isotope-collection]",
        u = "[data-isotope-item]",
        c = "[data-isotope-filters]",
        h = "[data-isotope-sorters]",
        n = "data-category",
        f = "data-filter",
        g = "data-sort",
        y = "data-primary-sort",
        v = "data-secondary-sort",
        w = "data-sort-selector",
        b = "data-sort-ascending",
        E = "*";

      function A(t) {
        return t && t !== E ? "[" + n + '*="' + t + '"]' : E
      }

      function S(t, e) {
        return document.querySelectorAll(h + "[" + s + '="' + t + '"] [' + g + '="' + e + '"]')
      }

      function T(t, e) {
        return document.querySelectorAll(c + "[" + s + '="' + t + '"] [' + f + '="' + e + '"]')
      }

      function I(t, n) {
        t && B.forEach(t, function (t, e) {
          e && void 0 !== e.classList && (n ? e.classList.add(r) : e.classList.remove(r))
        })
      }
      var k = function () {
        function n(t) {
          var e = d(t).data();
          this.element = t, this.attributes = e, this.filters = {}, this.sorters = {}, this.activeFilter = null, this.activeSorter = null, this.isotope = null, this.options = {}, this.options.getSortData = {}, this.options.sortAscending = {}, this.initIsotope(), this.initSorters(), this.initFilters()
        }
        var t = n.prototype;
        return t.initFilters = function () {
          var i = this,
            r = function (t, e) {
              var n = e ? ":not(" + e + ")" : "";
              return document.querySelectorAll(c + "[" + s + '="' + t + '"] [' + f + "]" + n)
            }(this.attributes.isotopeId, o);
          B.forEach(r, function (t, e) {
            var n = e.attributes[f] && e.attributes[f].value;
            i.filters[n] = T(i.attributes.isotopeId, n), d(e).on(m.FILTER_CLICK, function (t) {
              t.preventDefault && t.preventDefault(), I(i.activeFilter, !1), I(i.filters[n], !0), i.activeFilter = r, i.options.filter = "*" === n ? n : A(n), i.isotope.arrange(i.options)
            }), e.classList.add(o)
          })
        }, t.initSorters = function () {
          var f = this,
            t = function (t) {
              return document.querySelectorAll(h + "[" + s + '="' + t + '"] [' + g + "][" + w + "],\n      " + h + "[" + s + '="' + t + '"] [' + g + "][" + y + "][" + v + "]")
            }(this.attributes.isotopeId),
            e = this.attributes.defaultSort || p;
          B.forEach(t, function (t, e) {
            var n = e.attributes,
              i = n[g],
              r = n[w],
              a = n[b],
              o = n[y],
              s = n[v],
              l = i && i.value,
              u = r && r.value,
              c = o && o.value && s && s.value ? [o.value, s.value] : null,
              h = !(a && a.value && "false" === a.value);
            f.sorters[l] = S(f.attributes.isotopeId, l), d(e).on(m.SORTER_CLICK, function (t) {
              t.preventDefault && t.preventDefault(), I(f.activeSorter, !1), I(f.sorters[l], !0), f.activeSorter = f.sorters[l], f.options.sortBy = c || l, f.isotope.arrange(f.options)
            }), f.options.sortAscending[l] = h, l === p || c || (f.options.getSortData[l] = u)
          }), this.options.sortBy = e, this.activeSorter = S(this.attributes.isotopeId, e), I(this.activeSorter, !0), this.isotope.updateSortData(), this.isotope.arrange(this.options)
        }, t.initIsotope = function () {
          var t = window.location.hash.replace("#", ""),
            e = (t = "" === t || this.attributes.ignoreHash ? null : t) || this.attributes.defaultFilter || E,
            n = A(e),
            i = !1 == !this.attributes.sortAscending;
          this.options.itemSelector = u, this.options.layoutMode = this.attributes.layoutMode || a, this.options.filter = n, this.options.sortAscending[p] = i, this.isotope = new O(this.element, this.options), this.activeFilter = T(this.attributes.isotopeId, e), I(this.activeFilter, !0)
        }, n.jQueryInterface = function () {
          return this.each(function () {
            var t = d(this),
              e = t.data(i);
            e || (e = new n(this), t.data(i, e))
          })
        }, G(n, null, [{
          key: "VERSION",
          get: function () {
            return "1.0.0"
          }
        }]), n
      }();
      return d(window).on(m.LOAD_DATA_API, function () {
        for (var t = d.makeArray(d(l)), e = t.length; e--;) {
          var n = d(t[e]);
          k.jQueryInterface.call(n, n.data())
        }
      }), d.fn[t] = k.jQueryInterface, d.fn[t].Constructor = k, d.fn[t].noConflict = function () {
        return d.fn[t] = e, k.jQueryInterface
      }, k
    }(j);
  ! function (t) {
    if ("function" == typeof r) {
      t(".alert-dismissible").on("closed.bs.alert", function () {
        r(document.querySelectorAll("[data-jarallax],[data-jarallax-video]"), "onScroll")
      }), t(document).on("resized.mr.overlayNav", function () {
        r(document.querySelectorAll("[data-jarallax],[data-jarallax-video]"), "onResize")
      }), document.addEventListener("injected.mr.SVGInjector", function () {
        r(document.querySelectorAll("[data-jarallax],[data-jarallax-video]"), "onResize")
      });
      var e = {
        disableParallax: /iPad|iPhone|iPod|Android/,
        disableVideo: /iPad|iPhone|iPod|Android/
      };
      t(window).on("load", function () {
        r(document.querySelectorAll("[data-jarallax]"), e);
        var t = document.querySelectorAll("[data-jarallax-video-delay]");
        B.forEach(t, function (t, e) {
          var n = e.getAttribute("data-jarallax-video-delay");
          e.removeAttribute("data-jarallax-video-delay"), e.setAttribute("data-jarallax-video", n)
        }), r(document.querySelectorAll("[data-jarallax-delay],[data-jarallax-video]"), e)
      })
    }
  }(j);
  var X, tt, et, nt, it, rt, at, ot, st, lt, ut, ct, ht, ft, dt, mt, pt, gt, yt, vt, wt, bt = [{
      featureType: "administrative.country",
      elementType: "labels.text",
      stylers: [{
        lightness: "29"
      }]
    }, {
      featureType: "administrative.province",
      elementType: "labels.text.fill",
      stylers: [{
        lightness: "-12"
      }, {
        color: "#796340"
      }]
    }, {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{
        lightness: "15"
      }, {
        saturation: "15"
      }]
    }, {
      featureType: "landscape.man_made",
      elementType: "geometry",
      stylers: [{
        visibility: "on"
      }, {
        color: "#fbf5ed"
      }]
    }, {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{
        visibility: "on"
      }, {
        color: "#fbf5ed"
      }]
    }, {
      featureType: "poi",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "poi.attraction",
      elementType: "all",
      stylers: [{
        visibility: "on"
      }, {
        lightness: "30"
      }, {
        saturation: "-41"
      }, {
        gamma: "0.84"
      }]
    }, {
      featureType: "poi.attraction",
      elementType: "labels",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.business",
      elementType: "all",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "poi.medical",
      elementType: "geometry",
      stylers: [{
        color: "#fbd3da"
      }]
    }, {
      featureType: "poi.medical",
      elementType: "labels",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{
        color: "#b0e9ac"
      }, {
        visibility: "on"
      }]
    }, {
      featureType: "poi.park",
      elementType: "labels",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{
        hue: "#68ff00"
      }, {
        lightness: "-24"
      }, {
        gamma: "1.59"
      }]
    }, {
      featureType: "poi.sports_complex",
      elementType: "all",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.sports_complex",
      elementType: "geometry",
      stylers: [{
        saturation: "10"
      }, {
        color: "#c3eb9a"
      }]
    }, {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{
        visibility: "on"
      }, {
        lightness: "30"
      }, {
        color: "#e7ded6"
      }]
    }, {
      featureType: "road",
      elementType: "labels",
      stylers: [{
        visibility: "on"
      }, {
        saturation: "-39"
      }, {
        lightness: "28"
      }, {
        gamma: "0.86"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{
        color: "#ffe523"
      }, {
        visibility: "on"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{
        visibility: "on"
      }, {
        saturation: "0"
      }, {
        gamma: "1.44"
      }, {
        color: "#fbc28b"
      }]
    }, {
      featureType: "road.highway",
      elementType: "labels",
      stylers: [{
        visibility: "on"
      }, {
        saturation: "-40"
      }]
    }, {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{
        color: "#fed7a5"
      }]
    }, {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [{
        visibility: "on"
      }, {
        gamma: "1.54"
      }, {
        color: "#fbe38b"
      }]
    }, {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [{
        color: "#ffffff"
      }, {
        visibility: "on"
      }, {
        gamma: "2.62"
      }, {
        lightness: "10"
      }]
    }, {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [{
        visibility: "on"
      }, {
        weight: "0.50"
      }, {
        gamma: "1.04"
      }]
    }, {
      featureType: "transit.station.airport",
      elementType: "geometry.fill",
      stylers: [{
        color: "#dee3fb"
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        saturation: "46"
      }, {
        color: "#a4e1ff"
      }]
    }],
    Et = function (f) {
      var t = "mrMaps",
        n = "mr.maps",
        e = f.fn[t],
        i = "[data-maps-api-key]",
        r = "div.map-marker",
        a = "div.map-style",
        d = "data-address",
        m = "data-latlong",
        p = "data-marker-image",
        g = "data-marker-title",
        y = "div.info-window",
        o = "",
        v = {
          MAP_LOADED: "loaded.mr.maps"
        },
        w = {
          MARKER_IMAGE_URL: "assets/img/map-marker.png",
          MAP: {
            disableDefaultUI: !0,
            draggable: !0,
            scrollwheel: !1,
            zoom: 17,
            zoomControl: !1
          }
        };
      w.MAP.styles = void 0 !== bt ? bt : void 0;
      var s = function () {
        function h(t) {
          this.element = t, this.$element = f(t), this.markers = [], this.geocoder = new google.maps.Geocoder, this.markerElements = this.$element.find(r), this.styleElement = this.$element.find(a).first(), this.initMap(), this.createMarkers()
        }
        h.init = function () {
          for (var t = f.makeArray(f(i)), e = t.length; e--;) {
            var n = f(t[e]);
            h.jQueryInterface.call(n, n.data())
          }
        };
        var t = h.prototype;
        return t.initMap = function () {
          var t, e = this,
            n = this.element,
            i = this.$element,
            r = void 0 !== i.attr("data-zoom-controls"),
            a = void 0 !== i.attr("data-zoom-controls") && i.attr("data-zoom-controls"),
            o = void 0 !== i.attr("data-latlong") && i.attr("data-latlong"),
            s = !!o && parseFloat(o.substr(0, o.indexOf(","))),
            l = !!o && parseFloat(o.substr(o.indexOf(",") + 1)),
            u = i.attr("data-address") || "",
            c = {};
          try {
            c.styles = this.styleElement.length ? JSON.parse(this.styleElement.html().trim()) : void 0
          } catch (t) {
            throw new Error(t)
          }
          if (c.zoom = i.attr("data-map-zoom") ? parseInt(i.attr("data-map-zoom"), 10) : void 0, c.zoomControl = r, c.zoomControlOptions = !1 !== a ? {
              position: google.maps.ControlPosition[a]
            } : void 0, t = jQuery.extend({}, w.MAP, c), this.map = new google.maps.Map(n, t), google.maps.event.addListenerOnce(this.map, "center_changed", function () {
              var t = f.Event(v.MAP_LOADED, {
                map: e.map
              });
              i.trigger(t)
            }), void 0 !== s && "" !== s && !1 !== s && void 0 !== l && "" !== l && !1 !== l) this.map.setCenter(new google.maps.LatLng(s, l));
          else {
            if ("" === u) throw new Error("No valid address or latitude/longitude pair provided for map.");
            this.geocodeAddress(u, h.centerMap, this, this.map)
          }
        }, t.geocodeAddress = function (n, i, r, a) {
          this.geocoder.geocode({
            address: n
          }, function (t, e) {
            if (e !== google.maps.GeocoderStatus.OK) throw new Error('There was a problem geocoding the address "' + n + '".');
            i(t, r, a)
          })
        }, h.centerMap = function (t, e) {
          e.map.setCenter(t[0].geometry.location)
        }, h.moveMarker = function (t, e, n) {
          n.setPosition(t[0].geometry.location)
        }, t.createMarkers = function () {
          var c = this;
          w.MARKER = {
            icon: {
              url: this.$element.attr(p) || w.MARKER_IMAGE_URL,
              scaledSize: new google.maps.Size(50, 50)
            },
            title: o,
            optimised: !1
          }, this.markerElements.each(function (t, e) {
            var n, i = f(e),
              r = i.attr(d),
              a = i.attr(m),
              o = i.find(y),
              s = {
                title: i.attr(g)
              };
            s.icon = void 0 !== i.attr(p) ? {
              url: i.attr(p),
              scaledSize: new google.maps.Size(50, 50)
            } : void 0;
            var l = jQuery.extend({}, w.MARKER, s);
            if (n = new google.maps.Marker(jQuery.extend({}, l, {
                map: c.map
              })), o.length) {
              var u = new google.maps.InfoWindow({
                content: o.first().html(),
                maxWidth: parseInt(o.attr("data-max-width") || "250", 10)
              });
              n.addListener("click", function () {
                u.open(c.map, n)
              })
            }
            if (a) /(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/.test(a) && (n.setPosition(new google.maps.LatLng(parseFloat(a.substr(0, a.indexOf(","))), parseFloat(a.substr(a.indexOf(",") + 1)))), c.markers[t] = n);
            else {
              if (!r) throw n = null, new Error("Invalid data-address or data-latlong provided for marker " + (t + 1));
              c.geocodeAddress(r, h.moveMarker, c, n), c.markers[t] = n
            }
          })
        }, h.jQueryInterface = function () {
          return this.each(function () {
            var t = f(this),
              e = t.data(n);
            e || (e = new h(this), t.data(n, e))
          })
        }, G(h, null, [{
          key: "VERSION",
          get: function () {
            return "1.1.0"
          }
        }]), h
      }();
      if (document.querySelector("[data-maps-api-key]") && !document.querySelector(".gMapsAPI") && f("[data-maps-api-key]").length) {
        var l = f("[data-maps-api-key]:first").attr("data-maps-api-key") || "";
        if ("" !== l) {
          var u = document.createElement("script");
          u.type = "text/javascript", u.src = "https://maps.googleapis.com/maps/api/js?key=" + l + "&callback=theme.mrMaps.init", u.className = "gMapsAPI", document.body.appendChild(u)
        }
      }
      return f.fn[t] = s.jQueryInterface, f.fn[t].Constructor = s, f.fn[t].noConflict = function () {
        return f.fn[t] = e, s.jQueryInterface
      }, s
    }(jQuery),
    At = (tt = "mrOverlayNav", nt = "." + (et = "mr.overlayNav"), it = (X = j).fn[tt], rt = {
      RESIZE: "resize" + nt,
      RESIZED: "resized" + nt,
      IMAGE_LOAD: "load",
      TOGGLE_SHOW: "show.bs.collapse",
      TOGGLE_HIDDEN: "hidden.bs.collapse",
      NOTIFICATION_CLOSE: "",
      ALERT_CLOSE: "close.bs.alert"
    }, at = "body > div.navbar-container", ot = "body > div.navbar-container > nav[data-overlay]", st = "nav", lt = "[data-overlay]", ut = "img", ct = function () {
      function n(t) {
        this.ticking = !1, this.element = t, this.navHeight = this.getNavHeight(), this.navToggled = !1, this.container = n.getContainerElement(), this.overlayElement = n.getFirstOverlayElement(), this.setImageLoadEvent(), this.updateValues(), this.setResizeEvent(), this.setNavToggleEvents()
      }
      var t = n.prototype;
      return t.getNavHeight = function () {
        this.navHeight = this.element.getBoundingClientRect().height
      }, t.updateValues = function () {
        this.getNavHeight(), this.updateContainer(), this.updateOverlayElement(), X(this.element).trigger(X.Event(rt.RESIZED))
      }, t.updateContainer = function () {
        this.container && !this.navToggled && (this.container.style.minHeight = this.navHeight + "px", this.container.style.marginBottom = "-" + this.navHeight + "px")
      }, t.updateOverlayElement = function () {
        this.overlayElement && !this.navToggled && this.overlayElement.style.setProperty("padding-top", this.navHeight + "px", "important")
      }, t.setResizeEvent = function () {
        var t = this;
        X(window).on(rt.RESIZE + " " + rt.ALERT_CLOSE, function () {
          t.ticking || (window.requestAnimationFrame(function () {
            t.updateValues(), t.ticking = !1
          }), t.ticking = !0)
        })
      }, t.setNavToggleEvents = function () {
        var t = this;
        X(this.element).on("" + rt.TOGGLE_SHOW, function () {
          t.navToggled = !0
        }), X(this.element).on("" + rt.TOGGLE_HIDDEN, function () {
          t.navToggled = !1
        })
      }, t.setImageLoadEvent = function () {
        var n = this,
          t = this.container.querySelectorAll(ut);
        B.forEach(t, function (t, e) {
          e.addEventListener(rt.IMAGE_LOAD, function () {
            return n.updateValues()
          })
        })
      }, n.getContainerElement = function () {
        return this.container || (this.container = document.querySelector(at)), this.container
      }, n.getFirstOverlayElement = function () {
        return document.querySelector(lt + ":not(" + st + ")")
      }, n.jQueryInterface = function () {
        return this.each(function () {
          var t = X(this),
            e = t.data(et);
          e || (e = new n(this), t.data(et, e))
        })
      }, G(n, null, [{
        key: "VERSION",
        get: function () {
          return "1.1.0"
        }
      }]), n
    }(), X(document).ready(function () {
      for (var t = X.makeArray(X(ot)), e = t.length; e--;) {
        var n = X(t[e]);
        ct.jQueryInterface.call(n, n.data())
      }
    }), X.fn[tt] = ct.jQueryInterface, X.fn[tt].Constructor = ct, X.fn[tt].noConflict = function () {
      return X.fn[tt] = it, ct.jQueryInterface
    }, ct);
  ht = j, ft = "show.bs.collapse", dt = "hide.bs.collapse", mt = "body > div.navbar-container", pt = ".navbar-container > .navbar", gt = "navbar-toggled-show", yt = document.querySelector(mt), vt = document.querySelector(pt), ht(yt).on(ft + " " + dt, function (t) {
    var e = t.type + "." + t.namespace === ft ? "add" : "remove";
    vt.classList[e](gt)
  }), a.setup("[data-provider],.plyr"), (wt = j)(document).on("hide.bs.tab", function (t) {
    wt(wt(t.target).attr("href")).find('[data-toggle="popover"]').popover("hide")
  }), wt(document).on("hide.bs.collapse", function (t) {
    wt(t.target).find('[data-toggle="popover"]').popover("hide")
  }), o.highlightAll();

  function St(t) {
    return isNaN(t = +t) ? 0 : (0 < t ? Pt : Ct)(t)
  }

  function Tt(t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t
  }

  function It(s) {
    return function (t, e) {
      var n, i, r = String(Tt(t)),
        a = St(e),
        o = r.length;
      return a < 0 || o <= a ? s ? "" : void 0 : (n = r.charCodeAt(a)) < 55296 || 56319 < n || a + 1 === o || (i = r.charCodeAt(a + 1)) < 56320 || 57343 < i ? s ? r.charAt(a) : n : s ? r.slice(a, a + 2) : i - 56320 + (n - 55296 << 10) + 65536
    }
  }
  var kt = function (i) {
      if (void 0 === b) throw new Error("mrReadingPosition requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)");

      function r() {
        return (0 === document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop) || 0
      }
      var t = "mrReadingPosition",
        a = "mr.readingPosition",
        e = i.fn[t],
        o = "reading-position-hidden",
        s = {
          LOAD_DATA_API: "load.mr.readingPosition.data-api",
          RESIZE: "resize",
          SCROLL: "scroll"
        },
        n = "progress.reading-position",
        l = "[data-reading-position]",
        u = "value",
        c = "max",
        h = 100,
        f = document.querySelectorAll(n),
        d = function () {
          function n(t) {
            this.progressBars = f, this.element = t, this.top = 0, this.bottom = 0, this.height = 0, this.scrollLength = 0, this.articlePositionPercent = 0, this.ticking = !1, this.inView = !1, this.reading = !1, this.initWatcher(t), this.initBarValues(), this.setValue(r()), this.setScrollEvent(), this.setResizeEvent()
          }
          var t = n.prototype;
          return t.initWatcher = function (t) {
            var e = this,
              n = b.create(t);
            this.watcher = n, this.recalculateAll(), n.stateChange(function () {
              e.inView = n.isInViewport, e.reading = n.isAboveViewport && n.isFullyInViewport, e.toggleBars(e.reading)
            })
          }, t.initBarValues = function () {
            B.forEach(this.progressBars, function (t, e) {
              e.setAttribute(c, h)
            })
          }, t.setValue = function (t) {
            var n = this;
            this.recalculatePercentage(t), B.forEach(this.progressBars, function (t, e) {
              e.setAttribute(u, n.articlePositionPercent)
            })
          }, t.toggleBars = function (n) {
            B.forEach(this.progressBars, function (t, e) {
              n ? e.classList.remove(o) : e.classList.add(o)
            })
          }, t.setScrollEvent = function () {
            var e = this;
            window.addEventListener(s.SCROLL, function () {
              var t = r();
              !e.ticking && e.inView && e.reading && (window.requestAnimationFrame(function () {
                e.setValue(t), e.ticking = !1
              }), e.ticking = !0)
            })
          }, t.setResizeEvent = function () {
            var t = this;
            window.addEventListener(s.RESIZE, function () {
              return t.recalculateAll()
            })
          }, t.recalculateAll = function () {
            this.watcher.recalculateLocation(), this.top = this.watcher.top, this.bottom = this.watcher.bottom, this.height = this.watcher.height, this.scrollLength = this.height - Math.max(document.documentElement.clientHeight, window.innerHeight || 0), this.recalculatePercentage(r())
          }, t.recalculatePercentage = function (t) {
            this.articlePositionPercent = t ? (t - this.top) / this.scrollLength * 100 : 0
          }, n.jQueryInterface = function () {
            return this.each(function () {
              var t = i(this),
                e = t.data(a);
              e || (e = new n(this), t.data(a, e))
            })
          }, G(n, null, [{
            key: "VERSION",
            get: function () {
              return "1.0.0"
            }
          }]), n
        }();
      return i(window).on(s.LOAD_DATA_API, function () {
        if (0 !== f.length)
          for (var t = i.makeArray(i(l)), e = t.length; e--;) {
            var n = i(t[e]);
            d.jQueryInterface.call(n, n.data())
          }
      }), i.fn[t] = d.jQueryInterface, i.fn[t].Constructor = d, i.fn[t].noConflict = function () {
        return i.fn[t] = e, d.jQueryInterface
      }, d
    }(jQuery),
    Ot = new l("a[data-smooth-scroll]", {
      speedAsDuration: !0,
      offset: j("body").attr("data-smooth-scroll-offset") || 0
    }),
    jt = function (s) {
      if (void 0 === b) throw new Error("mrSticky requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)");
      var t = "mrSticky",
        i = "mr.sticky",
        e = s.fn[t],
        l = "position-fixed",
        u = "sticky-bottom",
        r = "sticky-viewport-bottom",
        a = "scrolled",
        o = "min-height",
        c = "max-width",
        h = "top",
        f = {
          LOAD_DATA_API: "load.mr.sticky.data-api",
          WINDOW_RESIZE: "resize",
          ALERT_CLOSED: "closed.bs.alert",
          TOGGLE_SHOW: "show.bs.collapse",
          TOGGLE_HIDDEN: "hidden.bs.collapse"
        },
        d = "below-nav",
        m = "bottom",
        p = "sticky",
        g = "[data-sticky]",
        y = 'body > div.navbar-container [data-sticky="top"]',
        v = ".alert-dismissible",
        w = function () {
          function n(t) {
            var e = s(t),
              n = e.data(p),
              i = e.closest("section") || null;
            this.element = t, this.stickBelowNav = n === d, this.stickBottom = n === m, this.stickyUntil = i, this.navToggled = !1, this.updateNavProperties(), this.isNavElement = e.is(this.navElement), this.initWatcher(e), this.updateCss(), this.setResizeEvent(), this.onWatcherChange(e), this.ticking = !1, this.isNavElement && this.setNavToggleEvents()
          }
          var t = n.prototype;
          return t.initWatcher = function (t) {
            var e = this,
              n = s(t),
              i = !this.isNavElement,
              r = this.stickBelowNav && this.navIsSticky && i ? {
                top: this.navHeight
              } : 0;
            r = this.stickBottom && i ? {
              bottom: -n.outerHeight
            } : r;
            var a = b.create(t, r);
            a.lock();
            var o = null !== this.stickyUntil ? b.create(this.stickyUntil, {
              bottom: -(a.height + r.top)
            }) : null;
            this.watcher = a, this.untilWatcher = o, this.navHeight = this.navHeight, this.isNavElement && 0 === a.top && !this.navIsAbsolute && n.addClass(l), a.stateChange(function () {
              e.onWatcherChange(n)
            }), null !== o && (o.exitViewport(function () {
              n.addClass(u)
            }), o.enterViewport(function () {
              n.removeClass(u)
            }))
          }, t.onWatcherChange = function (t) {
            t.toggleClass(l, this.watcher.isAboveViewport || !this.navIsAbsolute && !this.stickBottom && this.isNavElement && 0 === this.watcher.top), t.toggleClass(a, this.watcher.isAboveViewport && this.isNavElement && !this.stickBottom), t.toggleClass(r, (this.watcher.isFullyInViewport || this.watcher.isAboveViewport) && this.stickBottom), this.stickBottom || t.css(h, this.watcher.isAboveViewport && this.navIsSticky && this.stickBelowNav ? this.navHeight : 0)
          }, t.setResizeEvent = function () {
            var t = this;
            s(v).on(f.ALERT_CLOSED, function () {
              t.watcher.isInViewport && (t.watcher.unlock(), t.watcher.recalculateLocation(), t.watcher.lock()), t.onResize()
            }), s(window).on(f.WINDOW_RESIZE, function () {
              t.onResize()
            })
          }, t.onResize = function () {
            var t = this;
            this.ticking || (window.requestAnimationFrame(function () {
              t.updateCss(), t.ticking = !1
            }), this.ticking = !0)
          }, t.setNavToggleEvents = function () {
            var t = this;
            s(this.element).on("" + f.TOGGLE_SHOW, function () {
              t.navToggled = !0
            }), s(this.element).on("" + f.TOGGLE_HIDDEN, function () {
              t.navToggled = !1
            })
          }, t.updateCss = function () {
            var t = s(this.element);
            t.css(c, t.parent().width()), this.updateNavProperties();
            var e = t.outerHeight(),
              n = !this.isNavElement;
            (!this.navIsAbsolute && this.isNavElement || n) && (this.navToggled || t.parent().css(o, e)), this.navIsSticky && n && t.css(o, e)
          }, t.updateNavProperties = function () {
            var t = this.navElement || s(y).first();
            this.navElement = t, this.navHeight = t.outerHeight(), this.navIsAbsolute = "absolute" === t.css("position"), this.navIsSticky = 0 < t.length
          }, n.jQueryInterface = function () {
            return this.each(function () {
              var t = s(this),
                e = t.data(i);
              e || (e = new n(this), t.data(i, e))
            })
          }, G(n, null, [{
            key: "VERSION",
            get: function () {
              return "1.4.0"
            }
          }]), n
        }();
      return s(window).on(f.LOAD_DATA_API, function () {
        for (var t = s.makeArray(s(g)), e = t.length; e--;) {
          var n = s(t[e]);
          w.jQueryInterface.call(n, n.data())
        }
      }), s.fn[t] = w.jQueryInterface, s.fn[t].Constructor = w, s.fn[t].noConflict = function () {
        return s.fn[t] = e, w.jQueryInterface
      }, w
    }(j),
    Ct = Math.ceil,
    Pt = Math.floor,
    xt = {
      codeAt: It(!1),
      charAt: It(!0)
    },
    Dt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function Ft(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports
  }

  function Vt(t) {
    return t && t.Math == Math && t
  }

  function Lt(t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  }

  function _t(t) {
    return "object" == typeof t ? null !== t : "function" == typeof t
  }

  function Rt(t) {
    return Wt ? Bt.createElement(t) : {}
  }

  function Mt(t) {
    if (!_t(t)) throw TypeError(String(t) + " is not an object");
    return t
  }

  function Nt(t, e) {
    if (!_t(t)) return t;
    var n, i;
    if (e && "function" == typeof (n = t.toString) && !_t(i = n.call(t))) return i;
    if ("function" == typeof (n = t.valueOf) && !_t(i = n.call(t))) return i;
    if (!e && "function" == typeof (n = t.toString) && !_t(i = n.call(t))) return i;
    throw TypeError("Can't convert object to primitive value")
  }

  function qt(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }

  function Qt(e, n) {
    try {
      Yt(Ht, e, n)
    } catch (t) {
      Ht[e] = n
    }
    return n
  }
  var Ht = Vt("object" == typeof globalThis && globalThis) || Vt("object" == typeof window && window) || Vt("object" == typeof self && self) || Vt("object" == typeof Dt && Dt) || Function("return this")(),
    zt = !Lt(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    }),
    Bt = Ht.document,
    Wt = _t(Bt) && _t(Bt.createElement),
    Gt = !zt && !Lt(function () {
      return 7 != Object.defineProperty(Rt("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    }),
    Ut = Object.defineProperty,
    Kt = {
      f: zt ? Ut : function (t, e, n) {
        if (Mt(t), e = Nt(e, !0), Mt(n), Gt) try {
          return Ut(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
      }
    },
    Yt = zt ? function (t, e, n) {
      return Kt.f(t, e, qt(1, n))
    } : function (t, e, n) {
      return t[e] = n, t
    },
    Zt = "__core-js_shared__",
    $t = Ht[Zt] || Qt(Zt, {}),
    Jt = Function.toString;
  "function" != typeof $t.inspectSource && ($t.inspectSource = function (t) {
    return Jt.call(t)
  });

  function Xt(t, e) {
    return le.call(t, e)
  }

  function te(t) {
    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++ce + he).toString(36)
  }

  function ee(t) {
    return fe[t] || (fe[t] = te(t))
  }
  var ne, ie, re, ae = $t.inspectSource,
    oe = Ht.WeakMap,
    se = "function" == typeof oe && /native code/.test(ae(oe)),
    le = {}.hasOwnProperty,
    ue = Ft(function (t) {
      (t.exports = function (t, e) {
        return $t[t] || ($t[t] = void 0 !== e ? e : {})
      })("versions", []).push({
        version: "3.4.8",
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      })
    }),
    ce = 0,
    he = Math.random(),
    fe = ue("keys"),
    de = {},
    me = Ht.WeakMap;
  if (se) {
    var pe = new me,
      ge = pe.get,
      ye = pe.has,
      ve = pe.set;
    ne = function (t, e) {
      return ve.call(pe, t, e), e
    }, ie = function (t) {
      return ge.call(pe, t) || {}
    }, re = function (t) {
      return ye.call(pe, t)
    }
  } else {
    var we = ee("state");
    de[we] = !0, ne = function (t, e) {
      return Yt(t, we, e), e
    }, ie = function (t) {
      return Xt(t, we) ? t[we] : {}
    }, re = function (t) {
      return Xt(t, we)
    }
  }

  function be(t) {
    return Ne.call(t).slice(8, -1)
  }

  function Ee(t) {
    return Qe(Tt(t))
  }

  function Ae(t) {
    return "function" == typeof t ? t : void 0
  }

  function Se(t, e) {
    return arguments.length < 2 ? Ae(We[t]) || Ae(Ht[t]) : We[t] && We[t][e] || Ht[t] && Ht[t][e]
  }

  function Te(t) {
    return 0 < t ? Ge(St(t), 9007199254740991) : 0
  }

  function Ie(s) {
    return function (t, e, n) {
      var i, r = Ee(t),
        a = Te(r.length),
        o = function (t, e) {
          var n = St(t);
          return n < 0 ? Ue(n + e, 0) : Ke(n, e)
        }(n, a);
      if (s && e != e) {
        for (; o < a;)
          if ((i = r[o++]) != i) return !0
      } else
        for (; o < a; o++)
          if ((s || o in r) && r[o] === e) return s || o || 0;
      return !s && -1
    }
  }

  function ke(t, e) {
    var n, i = Ee(t),
      r = 0,
      a = [];
    for (n in i) !Xt(de, n) && Xt(i, n) && a.push(n);
    for (; e.length > r;) Xt(i, n = e[r++]) && (~Ye(a, n) || a.push(n));
    return a
  }

  function Oe(t, e) {
    for (var n = tn(e), i = Kt.f, r = ze.f, a = 0; a < n.length; a++) {
      var o = n[a];
      Xt(t, o) || i(t, o, r(e, o))
    }
  }

  function je(t, e) {
    var n = rn[nn(t)];
    return n == on || n != an && ("function" == typeof e ? Lt(e) : !!e)
  }

  function Ce(t, e) {
    var n, i, r, a, o, s = t.target,
      l = t.global,
      u = t.stat;
    if (n = l ? Ht : u ? Ht[s] || Qt(s, {}) : (Ht[s] || {}).prototype)
      for (i in e) {
        if (a = e[i], r = t.noTargetGet ? (o = ln(n, i)) && o.value : n[i], !sn(l ? i : s + (u ? "." : "#") + i, t.forced) && void 0 !== r) {
          if (typeof a == typeof r) continue;
          Oe(a, r)
        }(t.sham || r && r.sham) && Yt(a, "sham", !0), Be(n, i, a, t)
      }
  }

  function Pe(t) {
    return Object(Tt(t))
  }

  function xe(t) {
    return Xt(pn, t) || (dn && Xt(gn, t) ? pn[t] = gn[t] : pn[t] = yn("Symbol." + t)), pn[t]
  }
  var De, Fe, Ve, Le = {
      set: ne,
      get: ie,
      has: re,
      enforce: function (t) {
        return re(t) ? ie(t) : ne(t, {})
      },
      getterFor: function (n) {
        return function (t) {
          var e;
          if (!_t(t) || (e = ie(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
          return e
        }
      }
    },
    _e = {}.propertyIsEnumerable,
    Re = Object.getOwnPropertyDescriptor,
    Me = {
      f: Re && !_e.call({
        1: 2
      }, 1) ? function (t) {
        var e = Re(this, t);
        return !!e && e.enumerable
      } : _e
    },
    Ne = {}.toString,
    qe = "".split,
    Qe = Lt(function () {
      return !Object("z").propertyIsEnumerable(0)
    }) ? function (t) {
      return "String" == be(t) ? qe.call(t, "") : Object(t)
    } : Object,
    He = Object.getOwnPropertyDescriptor,
    ze = {
      f: zt ? He : function (t, e) {
        if (t = Ee(t), e = Nt(e, !0), Gt) try {
          return He(t, e)
        } catch (t) {}
        if (Xt(t, e)) return qt(!Me.f.call(t, e), t[e])
      }
    },
    Be = Ft(function (t) {
      var e = Le.get,
        s = Le.enforce,
        l = String(String).split("String");
      (t.exports = function (t, e, n, i) {
        var r = !!i && !!i.unsafe,
          a = !!i && !!i.enumerable,
          o = !!i && !!i.noTargetGet;
        "function" == typeof n && ("string" != typeof e || Xt(n, "name") || Yt(n, "name", e), s(n).source = l.join("string" == typeof e ? e : "")), t !== Ht ? (r ? !o && t[e] && (a = !0) : delete t[e], a ? t[e] = n : Yt(t, e, n)) : a ? t[e] = n : Qt(e, n)
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && e(this).source || ae(this)
      })
    }),
    We = Ht,
    Ge = Math.min,
    Ue = Math.max,
    Ke = Math.min,
    Ye = {
      includes: Ie(!0),
      indexOf: Ie(!1)
    }.indexOf,
    Ze = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    $e = Ze.concat("length", "prototype"),
    Je = {
      f: Object.getOwnPropertyNames || function (t) {
        return ke(t, $e)
      }
    },
    Xe = {
      f: Object.getOwnPropertySymbols
    },
    tn = Se("Reflect", "ownKeys") || function (t) {
      var e = Je.f(Mt(t)),
        n = Xe.f;
      return n ? e.concat(n(t)) : e
    },
    en = /#|\.prototype\./,
    nn = je.normalize = function (t) {
      return String(t).replace(en, ".").toLowerCase()
    },
    rn = je.data = {},
    an = je.NATIVE = "N",
    on = je.POLYFILL = "P",
    sn = je,
    ln = ze.f,
    un = !Lt(function () {
      function t() {}
      return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }),
    cn = ee("IE_PROTO"),
    hn = Object.prototype,
    fn = un ? Object.getPrototypeOf : function (t) {
      return t = Pe(t), Xt(t, cn) ? t[cn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? hn : null
    },
    dn = !!Object.getOwnPropertySymbols && !Lt(function () {
      return !String(Symbol())
    }),
    mn = dn && !Symbol.sham && "symbol" == typeof Symbol(),
    pn = ue("wks"),
    gn = Ht.Symbol,
    yn = mn ? gn : te,
    vn = xe("iterator"),
    wn = !1;
  [].keys && ("next" in (Ve = [].keys()) ? (Fe = fn(fn(Ve))) !== Object.prototype && (De = Fe) : wn = !0), null == De && (De = {}), Xt(De, vn) || Yt(De, vn, function () {
    return this
  });

  function bn() {}
  var En = {
      IteratorPrototype: De,
      BUGGY_SAFARI_ITERATORS: wn
    },
    An = Object.keys || function (t) {
      return ke(t, Ze)
    },
    Sn = zt ? Object.defineProperties : function (t, e) {
      Mt(t);
      for (var n, i = An(e), r = i.length, a = 0; a < r;) Kt.f(t, n = i[a++], e[n]);
      return t
    },
    Tn = Se("document", "documentElement"),
    In = ee("IE_PROTO"),
    kn = "prototype",
    On = function () {
      var t, e = Rt("iframe"),
        n = Ze.length,
        i = "script";
      for (e.style.display = "none", Tn.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</" + i + ">"), t.close(), On = t.F; n--;) delete On[kn][Ze[n]];
      return On()
    },
    jn = Object.create || function (t, e) {
      var n;
      return null !== t ? (bn[kn] = Mt(t), n = new bn, bn[kn] = null, n[In] = t) : n = On(), void 0 === e ? n : Sn(n, e)
    };
  de[In] = !0;

  function Cn(t, e, n) {
    t && !Xt(t = n ? t : t.prototype, Fn) && Dn(t, Fn, {
      configurable: !0,
      value: e
    })
  }

  function Pn() {
    return this
  }

  function xn() {
    return this
  }
  var Dn = Kt.f,
    Fn = xe("toStringTag"),
    Vn = {},
    Ln = En.IteratorPrototype,
    _n = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var n, i = !1,
        t = {};
      try {
        (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), i = t instanceof Array
      } catch (t) {}
      return function (t, e) {
        return Mt(t),
          function (t) {
            if (!_t(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
          }(e), i ? n.call(t, e) : t.__proto__ = e, t
      }
    }() : void 0),
    Rn = En.IteratorPrototype,
    Mn = En.BUGGY_SAFARI_ITERATORS,
    Nn = xe("iterator"),
    qn = "values",
    Qn = "entries",
    Hn = xt.charAt,
    zn = "String Iterator",
    Bn = Le.set,
    Wn = Le.getterFor(zn);
  ! function (t, e, n, i, r, a, o) {
    ! function (t, e, n) {
      var i = e + " Iterator";
      t.prototype = jn(Ln, {
        next: qt(1, n)
      }), Cn(t, i, !1), Vn[i] = Pn
    }(n, e, i);

    function s(t) {
      if (t === r && p) return p;
      if (!Mn && t in d) return d[t];
      switch (t) {
        case "keys":
        case qn:
        case Qn:
          return function () {
            return new n(this, t)
          }
      }
      return function () {
        return new n(this)
      }
    }
    var l, u, c, h = e + " Iterator",
      f = !1,
      d = t.prototype,
      m = d[Nn] || d["@@iterator"] || r && d[r],
      p = !Mn && m || s(r),
      g = "Array" == e && d.entries || m;
    if (g && (l = fn(g.call(new t)), Rn !== Object.prototype && l.next && (fn(l) !== Rn && (_n ? _n(l, Rn) : "function" != typeof l[Nn] && Yt(l, Nn, xn)), Cn(l, h, !0))), r == qn && m && m.name !== qn && (f = !0, p = function () {
        return m.call(this)
      }), d[Nn] !== p && Yt(d, Nn, p), Vn[e] = p, r)
      if (u = {
          values: s(qn),
          keys: a ? p : s("keys"),
          entries: s(Qn)
        }, o)
        for (c in u) !Mn && !f && c in d || Be(d, c, u[c]);
      else Ce({
        target: e,
        proto: !0,
        forced: Mn || f
      }, u)
  }(String, "String", function (t) {
    Bn(this, {
      type: zn,
      string: String(t),
      index: 0
    })
  }, function () {
    var t, e = Wn(this),
      n = e.string,
      i = e.index;
    return i >= n.length ? {
      value: void 0,
      done: !0
    } : (t = Hn(n, i), e.index += t.length, {
      value: t,
      done: !1
    })
  });

  function Gn(i, r, t) {
    if (function (t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function")
      }(i), void 0 === r) return i;
    switch (t) {
      case 0:
        return function () {
          return i.call(r)
        };
      case 1:
        return function (t) {
          return i.call(r, t)
        };
      case 2:
        return function (t, e) {
          return i.call(r, t, e)
        };
      case 3:
        return function (t, e, n) {
          return i.call(r, t, e, n)
        }
    }
    return function () {
      return i.apply(r, arguments)
    }
  }

  function Un(e, t, n, i) {
    try {
      return i ? t(Mt(n)[0], n[1]) : t(n)
    } catch (t) {
      var r = e.return;
      throw void 0 !== r && Mt(r.call(e)), t
    }
  }

  function Kn(t, e, n) {
    var i = Nt(e);
    i in t ? Kt.f(t, i, qt(0, n)) : t[i] = n
  }
  var Yn = xe("iterator"),
    Zn = Array.prototype,
    $n = {};
  $n[xe("toStringTag")] = "z";
  var Jn = "[object z]" === String($n),
    Xn = xe("toStringTag"),
    ti = "Arguments" == be(function () {
      return arguments
    }()),
    ei = Jn ? be : function (t) {
      var e, n, i;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e]
        } catch (t) {}
      }(e = Object(t), Xn)) ? n : ti ? be(e) : "Object" == (i = be(e)) && "function" == typeof e.callee ? "Arguments" : i
    },
    ni = xe("iterator"),
    ii = xe("iterator"),
    ri = !1;
  try {
    var ai = 0,
      oi = {
        next: function () {
          return {
            done: !!ai++
          }
        },
        return: function () {
          ri = !0
        }
      };
    oi[ii] = function () {
      return this
    }, Array.from(oi, function () {
      throw 2
    })
  } catch (t) {}
  var si = ! function (t, e) {
    if (!e && !ri) return !1;
    var n = !1;
    try {
      var i = {};
      i[ii] = function () {
        return {
          next: function () {
            return {
              done: n = !0
            }
          }
        }
      }, t(i)
    } catch (t) {}
    return n
  }(function (t) {
    Array.from(t)
  });
  Ce({
    target: "Array",
    stat: !0,
    forced: si
  }, {
    from: function (t, e, n) {
      var i, r, a, o, s, l = Pe(t),
        u = "function" == typeof this ? this : Array,
        c = arguments.length,
        h = 1 < c ? e : void 0,
        f = void 0 !== h,
        d = 0,
        m = function (t) {
          if (null != t) return t[ni] || t["@@iterator"] || Vn[ei(t)]
        }(l);
      if (f && (h = Gn(h, 2 < c ? n : void 0, 2)), null == m || u == Array && function (t) {
          return void 0 !== t && (Vn.Array === t || Zn[Yn] === t)
        }(m))
        for (r = new u(i = Te(l.length)); d < i; d++) Kn(r, d, f ? h(l[d], d) : l[d]);
      else
        for (s = (o = m.call(l)).next, r = new u; !(a = s.call(o)).done; d++) Kn(r, d, f ? Un(o, h, [a.value, d], !0) : a.value);
      return r.length = d, r
    }
  });
  We.Array.from;
  u.SVGInjector(document.querySelectorAll("[data-inject-svg]"), {
    afterEach: function (t, e) {
      "function" == typeof jarallax && e.dispatchEvent(new CustomEvent("injected.mr.SVGInjector", {
        bubbles: !0
      }))
    }
  });
  var li = function (c) {
      if (void 0 === A) throw new Error("mrTwitterFetcher requires twitterFetcher.js (https://github.com/jasonmayes/Twitter-Post-Fetcher)");
      var t = "mrTwitterFetcher",
        i = "mr.twitterFetcher",
        e = "." + i,
        n = c.fn[t],
        h = {
          LOAD_DATA_API: "load" + e + ".data-api",
          RESIZE: "resize" + e,
          READY: "ready" + e,
          APPEND: "tweetAppended" + e
        },
        r = "[data-twitter-fetcher]",
        a = "data-twitter",
        f = ".user",
        d = ".tweet",
        m = ".timePosted",
        p = ".interact",
        o = "twitter",
        s = 6,
        l = "username",
        u = "max-tweets",
        g = "flickity",
        y = "twitterFlickity",
        v = "isotope",
        w = function () {
          function n(t) {
            var e = c(t);
            this.element = t, this.element.id = "tweets-" + (new Date).getTime(), this.username = e.data(l).replace("@", "") || o, this.maxTweets = parseInt(e.data(u), 10) || s, this.slider = null !== this.element.getAttribute(a + "-" + g), this.slider = this.slider && "object" == typeof e.data(y) ? e.data(y) : this.slider, this.isotope = null !== this.element.getAttribute(a + "-" + v), this.initTwitterFeed()
          }
          return n.prototype.initTwitterFeed = function () {
            var u = this;
            this.config = {
              profile: {
                screenName: this.username
              },
              domId: this.element.id,
              maxTweets: this.maxTweets,
              enableLinks: !0,
              showUser: !0,
              showTime: !0,
              dateFunction: "",
              showRetweet: !1,
              customCallback: function (t) {
                for (var e = c(u.element), n = e.children().first().detach(), i = t.length, r = 0; r < i;) {
                  var a = c("<div>").append(c(t[r])),
                    o = n.clone();
                  o.find(d).html(a.find(d).html()), o.find(f).html(a.find(f).html()), o.find(m).html(a.find(m).html()), o.find(p).html(a.find(p).html()), e.append(o), r += 1;
                  var s = c.Event(h.APPEND);
                  s.appendedElement = o, s.mrTwitterFetcher = u, c(u.element).trigger(s)
                }
                if (!0 === u.slider || "object" == typeof u.slider) {
                  if (void 0 === E) throw new Error("mrTwitterFetcher requires flickity.js (https://github.com/metafizzy/flickity)");
                  e.data("flickity", new E(u.element, u.slider))
                } else if (!0 === u.isotope) {
                  if ("undefined" == typeof Isotope) throw new Error("mrTwitterFetcher requires isotope.js (https://github.com/metafizzy/isotope)");
                  c(u.element).mrIsotope()
                }
                var l = c.Event(h.READY);
                l.mrTwitterFetcher = u, c(u.element).trigger(l)
              }
            }, A.fetch(this.config)
          }, n.jQueryInterface = function () {
            return this.each(function () {
              var t = c(this),
                e = t.data(i);
              e || (e = new n(this), t.data(i, e))
            })
          }, G(n, null, [{
            key: "VERSION",
            get: function () {
              return "1.0.0"
            }
          }]), n
        }();
      return c(window).on(h.LOAD_DATA_API, function () {
        for (var t = c.makeArray(c(r)), e = t.length; e--;) {
          var n = c(t[e]);
          w.jQueryInterface.call(n, n.data())
        }
      }), c.fn[t] = w.jQueryInterface, c.fn[t].Constructor = w, c.fn[t].noConflict = function () {
        return c.fn[t] = n, w.jQueryInterface
      }, w
    }(j),
    ui = function (i) {
      if ("function" != typeof c) throw new Error("mrTypedText requires typed.js (https://github.com/mattboldt/typed.js/)");
      if (void 0 === b) throw new Error("mrTypedText requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)");
      var t = "mrTypedText",
        r = "mr.typedText",
        e = i.fn[t],
        n = {
          LOAD_DATA_API: "load.mr.typedText.data-api"
        },
        a = "[data-typed-text]",
        o = function () {
          function n(t) {
            this.element = t;
            var e = i(t);
            this.Typed = new c(this.element, e.data()), this.initWatcher(t)
          }
          return n.jQueryInterface = function () {
            return this.each(function () {
              var t = i(this),
                e = t.data(r);
              e || (e = new n(this), t.data(r, e))
            })
          }, n.prototype.initWatcher = function (t) {
            var e = this,
              n = b.create(t);
            n.stateChange(function () {
              n.isInViewport ? e.Typed.start() : e.Typed.stop()
            })
          }, G(n, null, [{
            key: "VERSION",
            get: function () {
              return "1.0.0"
            }
          }]), n
        }();
      return i(window).on(n.LOAD_DATA_API, function () {
        for (var t = i.makeArray(i(a)), e = t.length; e--;) {
          var n = i(t[e]);
          o.jQueryInterface.call(n, n.data())
        }
      }), i.fn[t] = o.jQueryInterface, i.fn[t].Constructor = o, i.fn[t].noConflict = function () {
        return i.fn[t] = e, o.jQueryInterface
      }, o
    }(j);
  ! function () {
    if ("undefined" == typeof $) throw new TypeError("Medium Rare JavaScript requires jQuery. jQuery must be included before theme.js.")
  }(), t.mrCountdown = d, t.mrCountup = z, t.mrDropdownGrid = W, t.mrFlatpickr = U, t.mrFormEmail = Y, t.mrIonRangeSlider = Z, t.mrIsotope = J, t.mrMaps = Et, t.mrMapsStyle = bt, t.mrOverlayNav = At, t.mrReadingPosition = kt, t.mrSmoothScroll = Ot, t.mrSticky = jt, t.mrTwitterFetcher = li, t.mrTypedText = ui, t.mrUtil = B, Object.defineProperty(t, "__esModule", {
    value: !0
  })
});
//# sourceMappingURL=theme.js.map