function init() {

! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Tendrils = t() : e.Tendrils = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        e.exports = n(191)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        n(2);
        var u = n(3),
            c = i(u),
            l = n(5),
            f = i(l),
            d = n(6),
            h = i(d),
            p = n(17),
            v = i(p),
            m = n(18),
            g = i(m),
            y = n(30),
            b = i(y),
            _ = n(31),
            w = i(_),
            E = n(44),
            A = i(E),
            x = n(51),
            M = i(x),
            T = n(52),
            S = n(20),
            R = i(S),
            C = n(53),
            O = i(C),
            P = n(80),
            k = i(P),
            I = n(81),
            F = i(I),
            L = n(83),
            N = n(84),
            j = i(N),
            D = n(85),
            U = i(D),
            B = n(86),
            V = n(132),
            z = r(V),
            q = n(133),
            Y = i(q),
            G = n(134),
            X = i(G),
            H = n(135),
            W = i(H),
            K = n(136),
            J = i(K),
            Z = n(137),
            Q = i(Z),
            $ = n(141),
            ee = i($),
            te = n(145),
            ne = i(te),
            re = n(160),
            ie = i(re),
            ae = n(156),
            oe = n(163),
            se = i(oe),
            ue = n(177),
            ce = i(ue),
            le = n(119),
            fe = i(le),
            de = n(185),
            he = i(de),
            pe = n(121),
            ve = i(pe),
            me = n(187),
            ge = i(me),
            ye = n(188),
            be = i(ye),
            _e = n(190),
            we = n(159),
            Ee = i(we),
            Ae = n(158),
            xe = i(Ae),
            Me = n(146),
            Te = i(Me);
        t.default = function(e, t) {
            function n() {
                var e = v.default.apply(void 0, arguments),
                    t = e.gain = e.ctx.createGain(),
                    n = e.splitter || e.analyser;
                return e.source.disconnect(), e.source.connect(t).connect(n), e
            }

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G.spawnFlow;
                T.vec2.div(Fe.spawnSize, Le[je.scale], q.viewSize), Fe.spawn(q, void 0, e)
            }

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G.spawnFastest;
                De.buffer = q.particles.buffers[0], De.spawnSize = q.particles.shape, De.spawn(q, void 0, e)
            }

            function u(e, t, n) {
                ze.shader = e, ze.speed = t;
                var r = qe.image,
                    i = He;
                le.useMedia && le.useCamera && Ye && (r = qe.video, i = Ge), Math.min.apply(Math, a(r)) > 0 ? (ze.buffer.shape = q.colorMap.shape = r, ze.setPixels(i), ze.spawn(q, void 0, n)) : console.warn("`spawnRaster`: image not ready.")
            }

            function l() {
                G.spawnImage = q.targets, We(q.targets), We(null)
            }

            function d() {
                le.useMedia = !0, (0, h.default)({
                    video: le.useCamera,
                    audio: le.useMic
                }, function(e, t) {
                    e ? console.warn(e) : (le.useCamera || le.useMic) && (it = t, le.useCamera && ("srcObject" in Ye ? Ye.srcObject = t : Ye.src = self.URL.createObjectURL(t)), le.useMic && (Re = Re || n(t, me, {
                        audible: !1
                    }), Re.analyser.fftSize = Math.pow(2, 8), Ce = Ce || new ne.default(Re, 4), et = new ie.default(D, Re.analyser.frequencyBinCount), rt.views[nt.indexOf("mic")] = et.texture))
                })
            }

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it;
                le.useMedia = !1, e && (0, Te.default)(function(e) {
                    return e.stop()
                }, e.getTracks()), et = null, rt.views[nt.indexOf("mic")] = $e.texture
            }

            function m(t) {
                t || (t = e.classList.contains("epok-dark") ? "light" : "dark"), e.classList.remove("epok-light"), e.classList.remove("epok-dark"), e.classList.add("epok-" + t)
            }

            function y() {
                var e = V.app.tick().dt;
                bt.app.play(V.app.time), pe && pe.currentTime >= 0 && (V.track.tick(1e3 * pe.currentTime), le.animate && bt.track.play(V.track.time), we && we.tick(V.track.time, pe.paused)), Se && ($e && $e.frequencies(Se.dataOrder(0)).apply(), Me.gain.gain.linearRampToValueAtTime((0, M.default)(Ae.track, 0, 1), Me.ctx.currentTime + .5), Se.sample(e)), Ce && (et && et.frequencies(Ce.dataOrder(0)).apply(), Re.gain.gain.linearRampToValueAtTime((0, M.default)(Ae.mic, 0, 1e4), Re.ctx.currentTime + .5), Ce.sample(e)), ht();
                var t = le.useMedia && le.useCamera && Ye.readyState > 1;
                rt.views[nt.indexOf("video")] = t ? Je.buffers[0] : ze.buffer, rt.draw(q.colorMap), q.step().draw(), q.buffers.length && (D.bindFramebuffer(D.FRAMEBUFFER, null), q.drawFade(), vt.bind(), Object.assign(vt.uniforms, {
                    view: q.buffers[0].color[0].bind(1),
                    resolution: q.viewRes,
                    time: q.timer.time
                }, gt), pt.render(), q.stepBuffers()), D.viewport.apply(D, [0, 0].concat(a(q.flow.shape))), q.flow.bind(), ke.trim(1 / q.state.flowDecay, V.app.time), le.pointerFlow && (0, Te.default)(function(e) {
                    Object.assign(e.line.uniforms, q.state), e.update().draw()
                }, ke.active), t && Math.max.apply(Math, a(qe.video)) > 0 && (Ge.width = Ye.videoWidth, Ge.height = Ye.videoHeight, Xe.translate(le.flipVideoX ? Ye.videoWidth : 0, le.flipVideoY ? Ye.videoHeight : 0), Xe.scale(le.flipVideoX ? -1 : 1, le.flipVideoY ? -1 : 1), Xe.drawImage(Ye, 0, 0), Je.resize(qe.video), Je.setPixels(Ge), Ze.speed && (Je.update(s({
                    speedLimit: ue.speedLimit,
                    time: V.app.time,
                    viewSize: q.viewSize
                }, Ze)), pt.render()), Je.step())
            }

            function _() {
                e.width = self.innerWidth, e.height = self.innerHeight, q.resize()
            }

            function E() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tt.main;
                e.__controllers && e.__controllers.forEach(function(e) {
                    return e.updateDisplay()
                });
                for (var t in e.__folders) E(e.__folders[t])
            }

            function x(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tt.main,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (e ? t.open() : t.close(), n)
                    for (var r in t.__folders) x(e, t.__folders[r])
            }

            function S() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !Tt.showing;
                St.classList[e ? "remove" : "add"]("epok-hide"), Tt.showing = e
            }

            function C() {
                var e = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe.paused;
                        return e ? pe.play() : pe.pause()
                    },
                    t = function(t) {
                        pe.currentTime += .001 * t, e(!0)
                    },
                    n = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        kt(null, t), (0, Te.default)(function(e) {
                            return e()
                        }, t)
                    },
                    a = function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return function() {
                            return n.apply(void 0, t)
                        }
                    },
                    o = function(e) {
                        (0, Te.default)(function(e) {
                            return e.reset && e.reset()
                        }, e), E()
                    },
                    u = (0, _e.curry)(function(e, t) {
                        (0, Te.default)(function(t) {
                            return t.adjust && t.adjust(e)
                        }, t), E()
                    }),
                    c = function(e, t, n) {
                        return e[n] = t[n]
                    },
                    l = (0, _e.curry)(c, c.length + 1),
                    d = function(e, t, n, r) {
                        return e[t] += n * r
                    },
                    h = (0, _e.curry)(d),
                    p = function(e, t) {
                        return e[t] = !e[t]
                    },
                    v = (0, _e.curry)(p, p.length + 1),
                    m = l(ue, N),
                    g = h(ue),
                    y = v(ue),
                    b = function(e) {
                        return {
                            reset: m(e),
                            go: y(e)
                        }
                    },
                    _ = function(e, t) {
                        return {
                            reset: m(e),
                            adjust: g(e, t)
                        }
                    },
                    w = {},
                    A = le.editorKeys ? {
                        "`": {
                            reset: function() {
                                q.setup(N.rootNum), $()
                            },
                            adjust: function(e) {
                                q.setup(ue.rootNum * Math.pow(2, e)), $()
                            }
                        },
                        P: b("autoClearView"),
                        Q: _("forceWeight", .01),
                        A: _("flowWeight", .02),
                        W: _("noiseWeight", 2e-4),
                        S: _("flowDecay", .005),
                        D: _("flowWidth", 1),
                        E: _("noiseScale", 1),
                        R: _("noiseSpeed", .002),
                        Z: _("damping", .001),
                        X: _("speedLimit", 1e-4),
                        N: _("speedAlpha", .002),
                        M: _("lineWidth", .1),
                        "<control>": function(e, t) {
                            delete A[e], delete x[e], x[e] = a(function() {
                                return Object.assign(ue, t)
                            })
                        }
                    } : {},
                    x = le.editorKeys ? {
                        H: function() {
                            return S()
                        },
                        O: a(function() {
                            return q.clear()
                        }),
                        0: a(Qt.Flow),
                        1: a(Qt.Wings),
                        2: a(Qt.Fluid),
                        3: a(Qt.Ghostly),
                        4: a(Qt["Noise only"]),
                        5: a(Qt.Sea),
                        6: a(Qt.Rave),
                        7: a(Qt.Turbulence),
                        8: a(Qt.Rorschach),
                        9: a(Qt.Funhouse),
                        "-": u(-.1),
                        "=": u(.1),
                        "<down>": u(-1),
                        "<up>": u(1),
                        "<left>": u(-5),
                        "<right>": u(5),
                        "<escape>": function() {
                            o(A), kt.apply(void 0, arguments)
                        },
                        "<caps-lock>": o,
                        "<space>": function() {
                            return e()
                        },
                        "[": function() {
                            return t(-2e3)
                        },
                        "]": function() {
                            return t(2e3)
                        },
                        "<enter>": kt,
                        "<backspace>": function() {
                            return bt.track.trackAt(V.track.time).spliceAt(V.track.time)
                        },
                        "\\": a(function() {
                            return Z()
                        }),
                        "'": a(function() {
                            return r()
                        }),
                        ";": a(function() {
                            return i()
                        }),
                        ",": a(function() {
                            return Be()
                        }),
                        "<shift>": a(function() {
                            return $()
                        }),
                        "/": a(function() {
                            return Ke()
                        }),
                        ".": a(Jt.spawnImageTargets)
                    } : {
                        H: function() {
                            return S()
                        },
                        0: Qt.Flow,
                        1: Qt.Wings,
                        2: Qt.Fluid,
                        3: Qt["Flow only"],
                        4: Qt["Noise only"],
                        5: Qt.Sea,
                        6: Qt.Ghostly,
                        7: Qt.Rave,
                        8: Qt.Blood,
                        9: Qt.Turbulence,
                        "-": Qt.Rorschach,
                        "=": Qt.Funhouse,
                        W: Qt.Minimal,
                        E: Qt["Kelp Forest"],
                        R: Qt.Starlings,
                        T: Qt.Folding,
                        Y: Qt["Tornado Alley"],
                        U: Qt["Pop Tide"],
                        I: Qt["Narcissus Pool"],
                        O: Qt.Frequencies,
                        P: Qt.Pissarides,
                        "<space>": function() {
                            return $()
                        },
                        X: function() {
                            return r()
                        },
                        C: function() {
                            return i()
                        },
                        V: function() {
                            return Be()
                        },
                        B: function() {
                            return $()
                        },
                        N: function() {
                            return Ke()
                        },
                        M: function() {
                            return Jt.spawnImageTargets()
                        },
                        "'": function() {
                            return r()
                        },
                        ";": function() {
                            return i()
                        },
                        ",": function() {
                            return Be()
                        },
                        "<shift>": function() {
                            return $()
                        },
                        "/": function() {
                            return Ke()
                        },
                        ".": function() {
                            return Jt.spawnImageTargets()
                        }
                    };
                Mt && (x.F = Mt.request), document.body.addEventListener("keydown", function(e) {
                    var t = w["<control>"],
                        n = f.default[e.keyCode],
                        r = A[n],
                        i = x[n];
                    t ? t(n, s({}, ue)) : r && !w[n] ? (w[n] = r, r.go && r.go(w, ue)) : i && i(w, ue), E(), (r || i) && (e.preventDefault(), e.stopPropagation())
                }, !1), document.body.addEventListener("keyup", function(e) {
                    var t = f.default[e.keyCode],
                        n = A[t],
                        r = x[t];
                    n && w[t] && ("<control>" === t || w["<control>"] || kt(s({}, ue)), w[t] = null, delete w[t]), (n || r) && (e.preventDefault(), e.stopPropagation())
                }, !1)
            }
            if (!(0, j.default)()) {
                var P = Object.assign(R.default.parse(location.search.slice(1)), t),
                    I = (0, B.defaults)(),
                    N = I.state,
                    D = (0, c.default)(e, B.glSettings, y),
                    V = {
                        app: I.timer,
                        track: new U.default(0)
                    },
                    q = new B.Tendrils(D, {
                        timer: V.app,
                        numBuffers: 1
                    }),
                    G = {},
                    H = (0, Q.default)(D);
                H.shader.bind();
                var K = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G.respawn;
                        return H.spawn(q, e)
                    },
                    Z = function() {
                        return q.reset()
                    },
                    $ = function() {
                        q.clear(), K(), K(q.targets), V.app.time = 0
                    },
                    te = function() {
                        return q.clear()
                    },
                    re = function() {
                        return q.clearView()
                    },
                    oe = function() {
                        return q.clearFlow()
                    },
                    ue = q.state,
                    le = {
                        trackURL: ("" + P.track).match(/(false|undefined)/gi) ? "" : decodeURIComponent(P.track),
                        animate: "" + P.animate != "false",
                        editorKeys: "" + P.editor_keys != "false",
                        useMedia: "" + P.use_media != "false",
                        useCamera: "" + P.use_camera != "false",
                        useMic: "" + P.use_mic != "false",
                        flipVideoX: "" + P.flip_video_x == "true",
                        flipVideoY: "" + P.flip_video_y == "true",
                        loopTime: Math.max(0, parseInt(P.loop_time || 6e5, 10) || 0),
                        loopPresets: Math.max(0, parseInt(P.loop_presets || 18e4, 10) || 0),
                        pointerFlow: "" + P.pointer_flow != "false",
                        staticImage: P.static_image ? decodeURIComponent(P.static_image) : L.rootPath + "build/images/unit31-unfolded.jpg"
                    };
                Object.assign(V.app, {
                    end: le.loopTime,
                    loop: !!le.loopTime
                }), "" + P.cursor == "false" && e.classList.add("epok-no-cursor");
                var de = s({
                        audible: "" + P.mute != "true",
                        track: parseFloat(P.track_in || 1, 10),
                        trackFlowAt: .2,
                        trackFastAt: .03,
                        trackFormAt: .015,
                        trackSampleAt: .035,
                        trackCamAt: .002,
                        trackSpawnAt: .045,
                        mic: parseFloat(P.mic_in || 1, 10)
                    }, "" + P.mic_track != "true" ? {
                        micFlowAt: .5,
                        micFastAt: .8,
                        micFormAt: .5,
                        micSampleAt: .74,
                        micCamAt: .06,
                        micSpawnAt: .09
                    } : {
                        micFlowAt: .2,
                        micFastAt: .03,
                        micFormAt: .015,
                        micSampleAt: .035,
                        micCamAt: .002,
                        micSpawnAt: .045
                    }),
                    pe = Object.assign(new Audio, {
                        crossOrigin: "anonymous",
                        className: "track"
                    }),
                    me = new(self.AudioContext || self.webkitAudioContext);
                document.addEventListener("click", function() {
                    return "suspended" === me.state && me.resume()
                });
                var ye = document.querySelector(".epok-audio-controls"),
                    we = ye && {
                        els: {
                            main: ye,
                            toggle: ye.querySelector(".epok-play-toggle"),
                            progress: ye.querySelector(".epok-progress"),
                            current: ye.querySelector(".epok-current"),
                            total: ye.querySelector(".epok-total")
                        },
                        times: {
                            current: new Date(0),
                            total: new Date(0)
                        },
                        timeFormat: {
                            second: "numeric"
                        },
                        seeking: !1,
                        trackTimeChanged: function() {
                            we.els.progress.max = pe.duration;
                            var e = 1e3 * pe.duration;
                            we.times.total.setTime(e), we.timeFormat.minute = e >= 6e4 ? "numeric" : void 0, we.timeFormat.hour = e >= 36e5 ? "numeric" : void 0, we.els.current.innerText = 0, we.els.total.innerText = we.times.total.toLocaleTimeString("en-gb", we.timeFormat)
                        },
                        tick: function(e, t) {
                            we.times.current.setTime(e), we.els.current.innerText = we.times.current.toLocaleTimeString("en-gb", we.timeFormat), we.seeking || (we.els.progress.value = .001 * e), we.els.toggle.checked = !t
                        }
                    };
                we && (we.els.main.parentElement.removeChild(we.els.main), we.els.main.appendChild(pe), we.els.main.classList.add("epok-show"), pe.addEventListener("durationchange", we.trackTimeChanged), we.els.toggle.addEventListener("change", function() {
                    return we.els.toggle.checked ? pe.play() : pe.pause()
                }), we.els.progress.addEventListener("pointerdown", function() {
                    return we.seeking = !0
                }), we.els.progress.addEventListener("change", function() {
                    we.seeking && (pe.currentTime = we.els.progress.value, we.seeking = !1)
                }));
                var Ae = s({}, de),
                    Me = n(pe, me, {
                        audible: Ae.audible
                    });
                Me.analyser.fftSize = Math.pow(2, 8);
                var Se = new ne.default(Me, 4),
                    Re = void 0,
                    Ce = void 0,
                    Oe = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.parentElement,
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (pe.src !== t && (pe.src = t, pe.currentTime = 0), we) {
                            var i = we.els.main;
                            i.parentElement !== n && n.appendChild(i), i.classList[r ? "add" : "remove"]("epok-on-window")
                        }
                        return pe
                    },
                    Pe = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le.trackURL,
                            n = document.querySelector(".epok-soundcloud");
                        n && n.parentElement.removeChild(n), t && (t.match(/^(https?)?(\:\/\/)?(www\.)?soundcloud\.com\//gi) ? (0, g.default)({
                            client_id: "75aca2e2b815f9f5d4e92916c7b80846",
                            song: t,
                            dark: !1
                        }, function(e, t, n, r) {
                            e ? console.warn("Error loading track", e) : (Oe(t, r.querySelector(".npm-scb-info")), r.classList.add("epok-soundcloud"))
                        }) : t.match(/^(https)?(:\/\/)?(www\.)?dropbox\.com\/s\//gi) ? Oe(t.replace(/^((https)?(:\/\/)?(www\.)?)dropbox\.com\/s\/(.*)\?dl=(0)$/gi, "https://dl.dropboxusercontent.com/s/$5?dl=1&raw=1"), e.parentElement, !0) : Oe(t, e.parentElement, !0))
                    };
                Pe();
                var ke = new se.default(D),
                    Ie = function(t) {
                        if (le.pointerFlow) {
                            var n = (0, b.default)(t, e);
                            n[0] = (0, A.default)(n[0], 0, q.viewRes[0], -1, 1), n[1] = (0, A.default)(n[1], 0, q.viewRes[1], 1, -1), ke.get(t.pointerId).add(V.app.time, n), t.preventDefault()
                        }
                    };
                e.addEventListener("pointermove", Ie, !1);
                var Fe = new z.PixelSpawner(D, {
                        shader: [z.defaults().shader[0], W.default],
                        buffer: q.flow
                    }),
                    Le = {
                        normal: [1, -1],
                        "mirror x": [-1, -1],
                        "mirror y": [1, 1],
                        "mirror xy": [-1, 1]
                    },
                    Ne = {
                        scale: "normal"
                    },
                    je = s({}, Ne),
                    De = new z.PixelSpawner(D, {
                        shader: [z.defaults().shader[0], J.default],
                        buffer: null
                    }),
                    Ue = new ee.default(D, {
                        speed: .005,
                        bias: 2e4
                    }),
                    Be = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G.spawnForm;
                        return Ue.shuffle().spawn(q, void 0, e)
                    },
                    Ve = {
                        direct: (0, O.default)(D, z.defaults().shader[0], Y.default),
                        sample: (0, O.default)(D, z.defaults().shader[0], X.default)
                    },
                    ze = new z.PixelSpawner(D, {
                        shader: null
                    });
                T.mat3.scale(ze.spawnMatrix, T.mat3.identity(ze.spawnMatrix), [-1, 1]);
                var qe = {
                        image: [0, 0],
                        video: [0, 0]
                    },
                    Ye = Object.assign(document.createElement("video"), {
                        controls: !0,
                        muted: !0,
                        autoplay: !1
                    }),
                    Ge = document.createElement("canvas"),
                    Xe = Ge.getContext("2d");
                Ye.addEventListener("canplay", function() {
                    qe.video = [Ye.videoWidth, Ye.videoHeight], Ye.play()
                });
                var He = new Image;
                He.src = le.staticImage, He.addEventListener("load", function() {
                    return qe.image = [He.width, He.height]
                });
                var We = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G.spawnImage;
                        return u(Ve.direct, .3, e)
                    },
                    Ke = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G.spawnSamples;
                        return u(Ve.sample, 1, e)
                    },
                    Je = new be.default(D, void 0, {
                        speed: parseFloat(P.optical_speed || .08, 10),
                        offset: .1,
                        scaleUV: [-1, -1]
                    }),
                    Ze = {
                        speed: Je.uniforms.speed,
                        lambda: Je.uniforms.lambda,
                        offset: Je.uniforms.offset
                    },
                    Qe = s({}, Ze),
                    $e = new ie.default(D, Me.analyser.frequencyBinCount),
                    et = null,
                    tt = {
                        mic: $e.texture,
                        track: $e.texture,
                        video: Je.buffers[0]
                    },
                    nt = Object.keys(tt),
                    rt = new he.default(D, {
                        views: Object.values(tt),
                        alphas: [.1, .3, .8]
                    }),
                    it = void 0,
                    at = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le.useMedia;
                        return (e ? d : p)()
                    };
                le.useMedia && d();
                var ot = new Map,
                    st = function(e, t, n) {
                        return function(r) {
                            var i = e();
                            if (i) {
                                var a = ot.get(t);
                                if (a) return a;
                                var o = n(r, i);
                                return ot.set(t, o), o
                            }
                            return i
                        }
                    },
                    ut = [
                        [function() {
                            return r()
                        }, st(function() {
                            return Ae.trackFlowAt
                        }, "trackFlowAt | Low end - velocity | meanWeight(track, 1, 0.25)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(1), .25) > t
                        })],
                        [function() {
                            return i()
                        }, st(function() {
                            return Ae.trackFastAt
                        }, "trackFastAt | High end - acceleration | meanWeight(track, 2, 0.8)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(2), .8) > t
                        })],
                        [function() {
                            return Be()
                        }, st(function() {
                            return Ae.trackFormAt
                        }, "trackFormAt | Sudden click/hit - force/attack | abs(peak(track, 3))", function(e, t) {
                            return Math.abs((0, ae.peak)(e.dataOrder(3))) > t
                        })],
                        [function() {
                            return Ke()
                        }, st(function() {
                            return Ae.trackSampleAt
                        }, "trackSampleAt | Low end - acceleration | meanWeight(track, 2, 0.25)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(2), .25) > t
                        })],
                        [function() {
                            return l()
                        }, st(function() {
                            return Ae.trackCamAt
                        }, "trackCamAt | Mid - force/attack | meanWeight(track, 3, 0.5)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(3), .5) > t
                        })],
                        [function() {
                            return $()
                        }, st(function() {
                            return Ae.trackSpawnAt
                        }, "trackSpawnAt | Low end - acceleration | meanWeight(track, 3, 0.25)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(2), .25) > t
                        })]
                    ],
                    ct = "" + P.mic_track == "true" ? [
                        [function() {
                            return r()
                        }, st(function() {
                            return Ae.micFlowAt
                        }, "micFlowAt | Low end - velocity | meanWeight(mic, 1, 0.25)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(1), .25) > t
                        })],
                        [function() {
                            return i()
                        }, st(function() {
                            return Ae.micFastAt
                        }, "micFastAt | High end - acceleration | meanWeight(mic, 2, 0.8)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(2), .8) > t
                        })],
                        [function() {
                            return Be()
                        }, st(function() {
                            return Ae.micFormAt
                        }, "micFormAt | Sudden click/hit - force/attack | abs(peak(mic, 3))", function(e, t) {
                            return Math.abs((0, ae.peak)(e.dataOrder(3))) > t
                        })],
                        [function() {
                            return Ke()
                        }, st(function() {
                            return Ae.micSampleAt
                        }, "micSampleAt | Low end - acceleration | meanWeight(mic, 2, 0.25)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(2), .25) > t
                        })],
                        [function() {
                            return l()
                        }, st(function() {
                            return Ae.micCamAt
                        }, "micCamAt | Mid - force/attack | meanWeight(mic, 3, 0.5)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(3), .5) > t
                        })],
                        [function() {
                            return $()
                        }, st(function() {
                            return Ae.micSpawnAt
                        }, "micSpawnAt | Low end - acceleration | meanWeight(mic, 3, 0.25)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(2), .25) > t
                        })]
                    ] : [
                        [function() {
                            return r()
                        }, st(function() {
                            return Ae.micFlowAt
                        }, "micFlowAt | Low end - velocity | meanWeight(mic, 1, 0.3)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(1), .3) > t
                        })],
                        [function() {
                            return i()
                        }, st(function() {
                            return Ae.micFastAt
                        }, "micFastAt | High end - velocity | meanWeight(mic, 1, 0.7)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(1), .7) > t
                        })],
                        [function() {
                            return Be()
                        }, st(function() {
                            return Ae.micFormAt
                        }, "micFormAt | Sudden click/hit - acceleration | abs(peak(mic, 2))", function(e, t) {
                            return Math.abs((0, ae.peak)(e.dataOrder(2))) > t
                        })],
                        [function() {
                            return Ke()
                        }, st(function() {
                            return Ae.micSampleAt
                        }, "micSampleAt | Mid - velocity | meanWeight(mic, 1, 0.4)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(1), .4) > t
                        })],
                        [function() {
                            return l()
                        }, st(function() {
                            return Ae.micCamAt
                        }, "micCamAt | Mid - acceleration | meanWeight(mic, 2, 0.6)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(2), .6) > t
                        })],
                        [function() {
                            return $()
                        }, st(function() {
                            return Ae.micSpawnAt
                        }, "micSpawnAt | Low end - acceleration | meanWeight(mic, 2, 0.3)", function(e, t) {
                            return (0, ae.meanWeight)(e.dataOrder(2), .3) > t
                        })]
                    ],
                    lt = function(e) {
                        return function(t) {
                            return e.fire.apply(e, a(t))
                        }
                    },
                    ft = void 0,
                    dt = void 0,
                    ht = function() {
                        var e = !1;
                        return Ae.track > 0 && !pe.paused && (e = ut.some(ft || (ft = lt(Se)))), !e && Ae.mic > 0 && Ce && (e = ct.some(dt || (dt = lt(Ce)))), ot.clear(), e
                    },
                    pt = new fe.default(D),
                    vt = (0, O.default)(D, ve.default, ge.default),
                    mt = {
                        radius: 3,
                        limit: .5
                    },
                    gt = {
                        radius: 5,
                        limit: .4
                    };
                vt.bind(), Object.assign(vt.uniforms, gt), m("dark");
                var yt = {
                        tendrils: q.state,
                        tendrils2: q.state,
                        tendrils3: q.state,
                        baseColor: q.state.baseColor,
                        flowColor: q.state.flowColor,
                        fadeColor: q.state.fadeColor,
                        spawn: H.uniforms,
                        opticalFlow: Ze,
                        audio: Ae,
                        blend: rt.alphas,
                        blur: gt,
                        calls: {}
                    },
                    bt = {
                        track: new ce.default((0, xe.default)(function() {
                            return []
                        }, yt, {}), yt),
                        app: new ce.default({
                            main: []
                        }, {
                            main: q.state
                        })
                    };
                pe.addEventListener("seeked", function() {
                    return le.animate && bt.track.playFrom(1e3 * pe.currentTime, 0)
                });
                var _t = {
                        tendrils: {
                            autoClearView: !1,
                            autoFade: !0,
                            forceWeight: .017,
                            varyForce: -.25,
                            flowWeight: 1,
                            varyFlow: .3,
                            flowDecay: .003,
                            flowWidth: 5,
                            speedAlpha: 5e-4,
                            colorMapAlpha: .5
                        },
                        tendrils2: {
                            noiseWeight: 3e-4,
                            varyNoise: .3,
                            noiseScale: 1.5,
                            varyNoiseScale: 1,
                            noiseSpeed: 6e-4,
                            varyNoiseSpeed: .05
                        },
                        tendrils3: {
                            target: 5e-6,
                            varyTarget: 1,
                            lineWidth: 1
                        },
                        baseColor: [0.8, 0.2, 0, .9],  // HERE!
                        flowColor: [1, 1, 0, .1],
                        fadeColor: [0.2, 0, 0.1, .05],
                        spawn: {
                            radius: .6,
                            speed: .1
                        },
                        opticalFlow: s({}, Qe),
                        audio: s({}, de),
                        blend: [0, 0, 1],
                        blur: s({}, gt),
                        calls: null
                    },
                    wt = 60;
                bt.track.tracks.calls.to({
                    call: [function() {
                        return Z()
                    }],
                    time: wt
                }).to({
                    call: [function() {
                        $(), m("dark")
                    }],
                    time: 200
                }), bt.track.apply(function(e, t) {
                    var n = _t[t];
                    return e.to({
                        to: n,
                        time: wt
                    }), {
                        apply: n
                    }
                });
                var Et = {
                    togglers: Array.from(document.querySelectorAll(".epok-info-more-button")),
                    more: document.querySelector(".epok-info-more"),
                    toggle: function(e) {
                        var t = "undefined" != typeof e ? e : Et.more.classList.contains("epok-hide");
                        t ? Et.more.classList.remove("epok-hide") : Et.more.classList.add("epok-hide")
                    }
                };
                Et.togglers.forEach(function(e) {
                    return e.addEventListener("click", function() {
                        return Et.toggle()
                    })
                });
                var At = {
                    options: [{
                        rootNum: N.rootNum,
                        damping: N.damping
                    }, {
                        rootNum: 2 * N.rootNum,
                        damping: N.damping - .001
                    }, {
                        rootNum: 4 * N.rootNum,
                        damping: N.damping - .002
                    }],
                    level: parseInt(P.quality || (Math.max(window.innerWidth, window.innerHeight) < 800 ? 0 : 1), 10),
                    change: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (At.level + 1) % At.options.length,
                            t = At.options[e];
                        q.setup(t.rootNum), Object.assign(ue, t), $(), At.level = e
                    },
                    step: function() {
                        return At.change()
                    }
                };
                At.change(At.level);
                var xt = (0, k.default)("requestFullscreen", e),
                    Mt = xt && xt.name && {
                        request: function() {
                            return e[xt.name]()
                        }
                    };
                self.addEventListener("resize", (0, w.default)(_, 200), !1), _(), q.setup(), K();
                var Tt = {
                        main: new F.default.GUI({
                            autoPlace: !1
                        }),
                        showing: "" + P.edit != "false",
                        toggle: document.querySelector(".epok-editor-button")
                    },
                    St = Object.assign(document.createElement("div"), {
                        className: "epok-edit-controls"
                    }),
                    Rt = function(e) {
                        return e.stopPropagation()
                    };
                    St.style.display = 'none';  // hide controls
                Tt.main.domElement.addEventListener("keydown", Rt), Tt.main.domElement.addEventListener("keyup", Rt), Tt.toggle && Tt.toggle.addEventListener("click", function() {
                    return S()
                });
                var Ct = /^(object|array|undefined|null)$/gi,
                    Ot = {
                        info: Et.toggle
                    };
                Tt.main.add(Ot, "info");
                var Pt = {
                    changeQuality: At.step
                };
                Mt && (Pt.fullscreen = Mt.request);
                var kt = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s({}, ue),
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return bt.track.tracks.tendrils.smoothTo({
                            to: e,
                            call: t,
                            time: V.track.time,
                            ease: [0, .95, 1]
                        })
                    },
                    It = "" + P.prompt_show != "false" ? function() {
                        var e;
                        return (e = self).prompt.apply(e, arguments)
                    } : function() {
                        var e;
                        return (e = console).log.apply(e, arguments)
                    };
                Object.assign(Pt, {
                    showLink: function() {
                        return It("Link:", location.href.replace(location.search || /$/gi, "?" + R.default.encode(s({}, P, {
                            track: encodeURIComponent(le.trackURL),
                            mute: !Ae.audible,
                            track_in: Ae.track,
                            mic_in: Ae.mic,
                            use_media: le.useMedia,
                            use_camera: le.useCamer,
                            use_mic: le.useMic,
                            animate: le.animate
                        }))))
                    },
                    keyframe: kt
                }), Tt.main.add(le, "trackURL").onFinishChange(Pe), Tt.main.add(le, "animate"), Tt.main.add(le, "useMedia").onFinishChange(function() {
                    return at()
                }), Tt.main.add(le, "staticImage").onFinishChange(function() {
                    return He.src = le.staticImage
                }), (0, Te.default)(function(e, t) {
                    return Tt.main.add(Pt, t)
                }, Pt), Tt.settings = Tt.main.addFolder("settings");
                for (var Ft in ue)
                    if (!o(ue[Ft]).match(Ct)) {
                        var Lt = Tt.settings.add(ue, Ft);
                        "rootNum" === Ft && Lt.onFinishChange(function(e) {
                            q.setup(e), $()
                        })
                    } var Nt = {
                        baseColor: ue.baseColor.slice(0, 3).map(function(e) {
                            return 255 * e
                        }),
                        baseAlpha: ue.baseColor[3],
                        flowColor: ue.flowColor.slice(0, 3).map(function(e) {
                            return 255 * e
                        }),
                        flowAlpha: ue.flowColor[3],
                        fadeColor: ue.fadeColor.slice(0, 3).map(function(e) {
                            return 255 * e
                        }),
                        fadeAlpha: ue.fadeColor[3]
                    },
                    jt = s({}, Nt),
                    Dt = function() {
                        ue.baseColor[3] = jt.baseAlpha, Object.assign(ue.baseColor, jt.baseColor.map(function(e) {
                            return e / 255
                        })), ue.flowColor[3] = jt.flowAlpha, Object.assign(ue.flowColor, jt.flowColor.map(function(e) {
                            return e / 255
                        })), ue.fadeColor[3] = jt.fadeAlpha, Object.assign(ue.fadeColor, jt.fadeColor.map(function(e) {
                            return e / 255
                        }))
                    };
                Tt.settings.addColor(jt, "flowColor").onChange(Dt), Tt.settings.add(jt, "flowAlpha").onChange(Dt), Tt.settings.addColor(jt, "baseColor").onChange(Dt), Tt.settings.add(jt, "baseAlpha").onChange(Dt), Tt.settings.addColor(jt, "fadeColor").onChange(Dt), Tt.settings.add(jt, "fadeAlpha").onChange(Dt), Dt(), Tt.blend = Tt.main.addFolder("color blend");
                for (var Ut = (0, Ee.default)(function(e, t, n) {
                        return e[t] = rt.alphas[n], e
                    }, nt, {}), Bt = s({}, Ut), Vt = function() {
                        return (0, Ee.default)(function(e, t, n, r, i) {
                            return e[i] = t, e
                        }, Ut, rt.alphas)
                    }, zt = 0; zt < nt.length; ++zt) Tt.blend.add(Ut, nt[zt]).onChange(Vt);
                Tt.spawn = Tt.main.addFolder("spawn");
                for (var qt in H.uniforms) o(H.uniforms[qt]).match(Ct) || Tt.spawn.add(H.uniforms, qt);
                var Yt = {
                    radius: .3,
                    speed: .005
                };
                Tt.opticalFlow = Tt.main.addFolder("optical flow");
                for (var Gt in Ze) o(Ze[Gt]).match(Ct) || Tt.opticalFlow.add(Ze, Gt);
                Tt.reflow = Tt.main.addFolder("reflow"), Tt.reflow.add(je, "scale", Object.keys(Le)), Tt.time = Tt.main.addFolder("time");
                var Xt = ["paused", "step", "rate", "end", "loop"];
                Xt.forEach(function(e) {
                    return Tt.time.add(V.app, e)
                }), Tt.audio = Tt.main.addFolder("audio");
                for (var Ht in Ae) {
                    var Wt = Tt.audio.add(Ae, Ht);
                    "audible" === Ht && Wt.onChange(function(e) {
                        var t = Me.merger || Me.analyser;
                        e ? t.connect(Me.ctx.destination) : t.disconnect()
                    })
                }
                Tt.blur = Tt.main.addFolder("blur");
                for (var Kt in mt) o(gt[Kt]).match(Ct) || Tt.blur.add(gt, Kt);
                var Jt = {
                    clear: te,
                    clearView: re,
                    clearFlow: oe,
                    respawn: K,
                    spawnSamples: Ke,
                    spawnImage: We,
                    spawnFlow: r,
                    spawnFastest: i,
                    spawnForm: Be,
                    reset: Z,
                    restart: $,
                    toggleBase: m,
                    spawnImageTargets: l
                };
                Tt.controls = Tt.main.addFolder("controls");
                for (var Zt in Jt) Tt.controls.add(Jt, Zt);
                Tt.presets = Tt.main.addFolder("presets");
                var Qt = {
                        Flow: function() {
                            Object.assign(ue, {
                                flowWidth: 5,
                                colorMapAlpha: 0
                            }), Object.assign(H.uniforms, {
                                radius: .25,
                                speed: .01
                            }), Object.assign(jt, {
                                baseAlpha: 0,
                                baseColor: [0, 0, 0],
                                flowAlpha: 1,
                                flowColor: [255, 255, 255],
                                fadeAlpha: Math.max(ue.flowDecay, .05),
                                fadeColor: [0, 0, 0]
                            }), m("dark"), Object.assign(Ae, {
                                micSpawnAt: 0,
                                micFormAt: .5 * de.micFormAt,
                                micFlowAt: 0,
                                micFastAt: 0,
                                micCamAt: 0,
                                micSampleAt: .9 * de.micSampleAt
                            })
                        },
                        Wings: function() {
                            Object.assign(ue, {
                                flowDecay: 0,
                                colorMapAlpha: 0
                            }), Object.assign(H.uniforms, {
                                radius: .05,
                                speed: .05
                            }), Object.assign(jt, {
                                flowAlpha: .01,
                                baseAlpha: .8,
                                baseColor: [255, 255, 255],
                                fadeAlpha: 0
                            }), Object.assign(Ae, {
                                micSpawnAt: .55 * de.micSpawnAt,
                                micFormAt: 0,
                                micFlowAt: 0,
                                micFastAt: 0,
                                micCamAt: 0,
                                micSampleAt: 0
                            }), m("dark"), $()
                        },
                        Fluid: function() {
                            Object.assign(ue, {
                                autoClearView: !0,
                                colorMapAlpha: .4
                            }), Object.assign(jt, {
                                flowAlpha: .15,
                                baseAlpha: .7,
                                baseColor: [255, 255, 255],
                                fadeAlpha: 0
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), Object.assign(Ae, {
                                micFastAt: .8 * de.micFastAt,
                                micCamAt: 0
                            }), m("dark"), te()
                        },
                        "Flow only": function() {
                            Object.assign(ue, {
                                flowDecay: .001,
                                forceWeight: .014,
                                noiseWeight: 0,
                                speedAlpha: 0
                            }), Object.assign(H.uniforms, {
                                radius: .4,
                                speed: .15
                            }), Object.assign(jt, {
                                baseAlpha: .8,
                                baseColor: [100, 200, 255],
                                fadeAlpha: .1,
                                fadeColor: [0, 0, 0]
                            }), m("dark")
                        },
                        "Noise only": function() {
                            Object.assign(ue, {
                                flowWeight: 0,
                                noiseWeight: .003,
                                noiseScale: 1.5,
                                varyNoiseScale: -30,
                                noiseSpeed: 25e-5,
                                varyNoiseSpeed: -.3,
                                speedAlpha: .08,
                                colorMapAlpha: .27
                            }), Object.assign(jt, {
                                flowAlpha: .4,
                                flowColor: [255, 45, 146],
                                baseAlpha: .6,
                                baseColor: [255, 150, 0],
                                fadeAlpha: .05,
                                fadeColor: [54, 0, 48]
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), Object.assign(Ae, {
                                micFastAt: .4 * de.micFastAt,
                                micSampleAt: 0,
                                micFormAt: 0,
                                micCamAt: .8 * de.micCamAt,
                                micSpawnAt: .6 * de.micSpawnAt
                            }), m("dark")
                        },
                        Sea: function() {
                            Object.assign(ue, {
                                flowWidth: 5,
                                forceWeight: .013,
                                noiseWeight: .002,
                                flowDecay: .01,
                                target: 1e-4,
                                speedAlpha: .01,
                                colorMapAlpha: .2,
                                flowColor: [119, 190, 255],
                                flowAlpa: .01,
                                baseColor: [132, 166, 255],
                                baseAlpha: .7,
                                fadeColor: [0, 44, 110],
                                fadeAlpha: .1
                            }), Object.assign(H.uniforms, {
                                radius: 1.5,
                                speed: 0
                            }), Object.assign(jt, {
                                baseAlpha: .8,
                                baseColor: [55, 155, 255],
                                fadeAlpha: .3,
                                fadeColor: [0, 58, 90]
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: .3
                            }), Object.assign(Ae, {
                                micSampleAt: 0,
                                micFormAt: .8 * de.micFormAt,
                                micCamAt: .8 * de.micCamAt,
                                micSpawnAt: .5 * de.micSpawnAt
                            }), m("dark")
                        },
                        Ghostly: function() {
                            Object.assign(ue, {
                                flowDecay: .001,
                                colorMapAlpha: .2
                            }), Object.assign(jt, {
                                baseAlpha: .3,
                                baseColor: [255, 255, 255],
                                flowAlpha: .04,
                                fadeAlpha: .03,
                                fadeColor: [0, 0, 0]
                            }), Object.assign(Ae, {
                                micSpawnAt: .5 * de.micSpawnAt,
                                micFastAt: .8 * de.micFastAt,
                                micFlowAt: 1.2 * de.micFlowAt
                            }), Object.assign(Ut, {
                                mic: .6,
                                track: .6,
                                video: .4
                            }), m("dark")
                        },
                        Rave: function() {
                            Object.assign(ue, {
                                noiseScale: 12,
                                forceWeight: .016,
                                noiseWeight: .003,
                                speedAlpha: .2,
                                target: .001,
                                colorMapAlpha: .35
                            }), Object.assign(jt, {
                                baseAlpha: .6,
                                baseColor: [0, 255, 30],
                                flowAlpha: .5,
                                flowColor: [128, 255, 0],
                                fadeAlpha: .1,
                                fadeColor: [255, 0, 61]
                            }), Object.assign(Ae, {
                                micSpawnAt: 0,
                                micFormAt: .5 * de.micFormAt,
                                micFlowAt: 0,
                                micFastAt: 0,
                                micCamAt: 0,
                                micSampleAt: .9 * de.micSampleAt
                            }), Object.assign(H.uniforms, {
                                radius: .3,
                                speed: 2
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), m("dark"), $()
                        },
                        Blood: function() {
                            Object.assign(ue, {
                                forceWeight: .015,
                                noiseWeight: .001,
                                noiseSpeed: 5e-4,
                                speedAlpha: .001,
                                colorMapAlpha: .11
                            }), Object.assign(jt, {
                                baseAlpha: 1,
                                baseColor: [128, 0, 0],
                                flowAlpha: .15,
                                flowColor: [255, 0, 0],
                                fadeAlpha: Math.max(ue.flowDecay, .05),
                                fadeColor: [255, 255, 255]
                            }), Object.assign(H.uniforms, {
                                radius: .1,
                                speed: 4
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: .5
                            }), Object.assign(Ae, {
                                micSpawnAt: .8 * de.micSpawnAt,
                                micFlowAt: .5 * de.micFlowAt,
                                micFastAt: .5 * de.micFastAt,
                                micCamAt: 0,
                                micSampleAt: .9 * de.micSampleAt
                            }), m("dark"), te(), $()
                        },
                        Turbulence: function() {
                            Object.assign(ue, {
                                noiseSpeed: 5e-5,
                                noiseScale: 10,
                                forceWeight: .014,
                                noiseWeight: .003,
                                speedAlpha: .01,
                                colorMapAlpha: .13
                            }), Object.assign(jt, {
                                baseAlpha: .3,
                                baseColor: [194, 30, 30],
                                flowAlpha: .4,
                                flowColor: [255, 0, 0],
                                fadeAlpha: .1,
                                fadeColor: [54, 0, 10]
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: .5
                            }), Object.assign(Ae, {
                                micSpawnAt: .8 * de.micSpawnAt,
                                micFormAt: .7 * de.micFormAt,
                                micFlowAt: .8 * de.micFlowAt,
                                micCamAt: 0,
                                micSampleAt: .9 * de.micSampleAt
                            }), m("dark"), $()
                        },
                        Rorschach: function() {
                            Object.assign(ue, {
                                noiseScale: 40,
                                varyNoiseScale: 0,
                                noiseSpeed: 3e-4,
                                varyNoiseSpeed: .01,
                                forceWeight: .014,
                                noiseWeight: .0021,
                                speedAlpha: 2e-6,
                                colorMapAlpha: .1
                            }), Object.assign(je, {
                                scale: "mirror xy"
                            }), Object.assign(jt, {
                                baseAlpha: .9,
                                baseColor: [0, 0, 0],
                                flowAlpha: .2,
                                fadeAlpha: .05,
                                fadeColor: [255, 255, 255]
                            }), Object.assign(Ae, {
                                micSpawnAt: .8 * de.micSpawnAt,
                                micFormAt: .8 * de.micFormAt,
                                micFastAt: .8 * de.micFastAt,
                                micCamAt: 0,
                                micSampleAt: 1 * de.micSampleAt
                            }), m("dark")
                        },
                        Funhouse: function() {
                            Object.assign(ue, {
                                forceWeight: .0165,
                                varyForce: .3,
                                flowWeight: .5,
                                varyFlow: 1,
                                noiseWeight: .0016,
                                varyNoise: 1,
                                noiseScale: 60,
                                varyNoiseScale: -4,
                                noiseSpeed: 3e-4,
                                varyNoiseSpeed: -1,
                                target: .005,
                                varyTarget: 5,
                                flowDecay: .001,
                                flowWidth: 8,
                                speedAlpha: 2e-5,
                                colorMapAlpha: 1
                            }), Object.assign(je, {
                                scale: "normal"
                            }), Object.assign(jt, {
                                baseAlpha: .2,
                                baseColor: [0, 0, 0],
                                flowAlpha: .05,
                                fadeAlpha: .05,
                                fadeColor: [0, 0, 0]
                            }), Object.assign(Ae, {
                                micSpawnAt: 1.5 * de.micSpawnAt,
                                micFormAt: 1.3 * de.micFormAt,
                                micFlowAt: 0,
                                micFastAt: 0,
                                micCamAt: .6 * de.micCamAt,
                                micSampleAt: 0
                            }), Object.assign(Ut, {
                                mic: 0,
                                track: 0,
                                video: 1
                            }), m("dark"), We(null), G.spawnImage = q.targets, We(q.targets)
                        },
                        Minimal: function() {
                            Object.assign(ue, {
                                autoClearView: !0,
                                colorMapAlpha: 1,
                                speedAlpha: 1,
                                varyNoiseScale: 3,
                                varyNoiseSpeed: 3
                            }), Object.assign(je, {
                                scale: "mirror xy"
                            }), Object.assign(jt, {
                                baseAlpha: .7,
                                baseColor: [255, 255, 255],
                                flowAlpha: 0,
                                fadeColor: [255, 255, 255],
                                fadeAlpha: 0
                            }), Object.assign(Ae, {
                                micSpawnAt: 1 * de.micSpawnAt,
                                micFormAt: .6 * de.micFormAt,
                                micFlowAt: .6 * de.micFlowAt,
                                micFastAt: .6 * de.micFastAt,
                                micCamAt: 0,
                                micSampleAt: 0
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), m("dark")
                        },
                        "Kelp Forest": function() {
                            Object.assign(ue, {
                                noiseWeight: .004,
                                varyNoise: .3,
                                flowDecay: .003,
                                flowWidth: 10,
                                noiseScale: 1,
                                varyNoiseScale: -6,
                                noiseSpeed: 1e-4,
                                varyNoiseSpeed: -4,
                                speedAlpha: .001,
                                colorMapAlpha: .25
                            }), Object.assign(je, {
                                scale: "mirror xy"
                            }), Object.assign(jt, {
                                baseAlpha: .3,
                                baseColor: [0, 122, 27],
                                flowAlpha: .4,
                                flowColor: [0, 250, 175],
                                fadeAlpha: .1,
                                fadeColor: [0, 36, 51]
                            }), Object.assign(Ae, {
                                micSpawnAt: 1 * de.micSpawnAt,
                                micFormAt: .6 * de.micFormAt,
                                micFlowAt: 0,
                                micFastAt: 0,
                                micCamAt: 1 * de.micCamAt,
                                micSampleAt: 1 * de.micSampleAt
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), m("dark")
                        },
                        Starlings: function() {
                            Object.assign(ue, {
                                flowWeight: 1.5,
                                noiseWeight: .003,
                                varyNoise: .3,
                                flowDecay: .004,
                                noiseScale: .5,
                                varyNoiseScale: 10,
                                noiseSpeed: 1e-4,
                                varyNoiseSpeed: .1,
                                speedAlpha: .01,
                                colorMapAlpha: .17
                            }), Object.assign(je, {
                                scale: "mirror xy"
                            }), Object.assign(jt, {
                                baseAlpha: 1,
                                baseColor: [0, 0, 0],
                                flowAlpha: .1,
                                flowColor: [255, 20, 255],
                                fadeAlpha: .02,
                                fadeColor: [160, 120, 40]
                            }), Object.assign(Ae, {
                                micSpawnAt: 0,
                                micFormAt: 0,
                                micFlowAt: .5 * de.micFlowAt,
                                micFastAt: 1.1 * de.micFastAt,
                                micCamAt: 0,
                                micSampleAt: .9 * de.micSampleAt
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), m("dark"), Ke()
                        },
                        Folding: function() {
                            Object.assign(ue, {
                                noiseWeight: .005,
                                varyNoise: .3,
                                flowDecay: .003,
                                noiseScale: 1,
                                varyNoiseScale: -30,
                                noiseSpeed: 5e-5,
                                varyNoiseSpeed: 3,
                                target: .002,
                                speedAlpha: .005,
                                colorMapAlpha: .3
                            }), Object.assign(je, {
                                scale: "mirror xy"
                            }), Object.assign(jt, {
                                baseAlpha: .5,
                                baseColor: [230, 198, 255],
                                flowAlpha: .8,
                                flowColor: [173, 0, 255],
                                fadeAlpha: .15,
                                fadeColor: [0, 20, 51]
                            }), Object.assign(Ae, {
                                micSpawnAt: .8 * de.micSpawnAt,
                                micFormAt: .6 * de.micFormAt,
                                micFlowAt: 0,
                                micFastAt: 0,
                                micCamAt: 0,
                                micSampleAt: .8 * de.micSampleAt
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), Object.assign(H.uniforms, {
                                radius: .15,
                                speed: 2e4
                            }), m("dark"), $()
                        },
                        "Tornado Alley": function() {
                            Object.assign(ue, {
                                noiseWeight: .01,
                                varyNoise: 0,
                                flowDecay: .005,
                                noiseScale: 1.2,
                                varyNoiseScale: 8,
                                noiseSpeed: 9e-5,
                                varyNoiseSpeed: 0,
                                target: .003,
                                speedAlpha: .005,
                                colorMapAlpha: 1
                            }), Object.assign(jt, {
                                baseAlpha: .05,
                                baseColor: [255, 255, 255],
                                flowAlpha: 0,
                                flowColor: [0, 0, 0],
                                fadeAlpha: .1,
                                fadeColor: [46, 8, 31]
                            }), Object.assign(Ae, {
                                micSpawnAt: 1.1 * de.micSpawnAt,
                                micFormAt: 0,
                                micFlowAt: 0,
                                micFastAt: 0,
                                micCamAt: .7 * de.micCamAt,
                                micSampleAt: 0
                            }), Object.assign(Ut, {
                                mic: .25,
                                track: .25,
                                video: .7
                            }), Object.assign(H.uniforms, {
                                radius: 1,
                                speed: 0
                            }), m("dark"), l()
                        },
                        "Pop Tide": function() {
                            Object.assign(ue, {
                                noiseWeight: .01,
                                varyNoise: 0,
                                flowDecay: .005,
                                noiseScale: .1,
                                varyNoiseScale: -50,
                                noiseSpeed: 1e-4,
                                varyNoiseSpeed: 0,
                                target: .0025,
                                speedAlpha: .02,
                                colorMapAlpha: .5
                            }), Object.assign(jt, {
                                baseAlpha: .65,
                                baseColor: [0, 36, 166],
                                flowAlpha: .3,
                                flowColor: [128, 0, 255],
                                fadeAlpha: .1,
                                fadeColor: [255, 230, 0]
                            }), Object.assign(Ae, {
                                micSpawnAt: .8 * de.micSpawnAt,
                                micFormAt: 0,
                                micFlowAt: 0,
                                micFastAt: 0,
                                micCamAt: .8 * de.micCamAt,
                                micSampleAt: 0
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), Object.assign(H.uniforms, {
                                radius: 1,
                                speed: 0
                            }), m("dark"), $()
                        },
                        "Narcissus Pool": function() {
                            Object.assign(ue, {
                                noiseWeight: .01,
                                varyNoise: 0,
                                flowDecay: .005,
                                noiseScale: 1.2,
                                varyNoiseScale: -4,
                                noiseSpeed: 2e-4,
                                varyNoiseSpeed: 0,
                                target: .003,
                                varyTarget: 10,
                                speedAlpha: .008,
                                colorMapAlpha: 1
                            }), Object.assign(jt, {
                                baseAlpha: 0,
                                baseColor: [255, 255, 255],
                                flowAlpha: 0,
                                flowColor: [0, 0, 0],
                                fadeAlpha: .1,
                                fadeColor: [36, 18, 18]
                            }), Object.assign(Ae, {
                                micSpawnAt: 0,
                                micFormAt: 0,
                                micFlowAt: 0,
                                micFastAt: 0,
                                micCamAt: .7 * de.micCamAt,
                                micSampleAt: 0
                            }), Object.assign(Ut, {
                                mic: .1,
                                track: .1,
                                video: .9
                            }), Object.assign(Ze, {
                                speed: .06,
                                offset: 0
                            }), m("dark"), l()
                        },
                        Frequencies: function() {
                            Object.assign(ue, {
                                forceWeight: .015,
                                flowWeight: -.2,
                                speedAlpha: .1,
                                colorMapAlpha: .9,
                                noiseWeight: .005,
                                noiseScale: 1.2,
                                varyNoiseScale: 2,
                                noiseSpeed: 3e-4,
                                varyNoiseSpeed: .01
                            }), Object.assign(jt, {
                                baseAlpha: .7,
                                baseColor: [255, 215, 111],
                                flowAlpha: 0,
                                flowColor: [255, 255, 255],
                                fadeAlpha: .06,
                                fadeColor: [30, 20, 0]
                            }), Object.assign(Ae, {
                                micSpawnAt: .8 * de.micSpawnAt,
                                micFormAt: 0,
                                micFlowAt: 0,
                                micFastAt: .9 * de.micFastAt,
                                micCamAt: 0,
                                micSampleAt: 0
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), Object.assign(H.uniforms, {
                                radius: .22,
                                speed: 0
                            }), Object.assign(Ze, {
                                speed: .03,
                                offset: 0
                            }), m("dark"), $()
                        },
                        Pissarides: function() {
                            Object.assign(ue, {
                                speedLimit: .003,
                                speedAlpha: .1,
                                flowWidth: 20,
                                colorMapAlpha: .3333,
                                noiseWeight: 4e-4,
                                target: 2e-4,
                                varyTarget: 0
                            }), Object.assign(H.uniforms, {
                                radius: 1,
                                speed: 0
                            }), Object.assign(gt, {
                                radius: 12,
                                limit: .3
                            }), Object.assign(jt, {
                                baseAlpha: .3333,
                                baseColor: [230, 198, 255],
                                flowAlpha: 1,
                                flowColor: [255, 0, 50],
                                fadeAlpha: 0
                            }), Object.assign(Ut, {
                                mic: 1,
                                track: 1,
                                video: 0
                            }), Object.assign(Ae, {
                                micSpawnAt: .8 * de.micSpawnAt,
                                micFormAt: 0,
                                micFlowAt: .8 * de.micFlowAt,
                                micFastAt: 1 * de.micFastAt,
                                micCamAt: 0,
                                micSampleAt: .6 * de.micSampleAt
                            }), Object.assign(Ze, {
                                speed: .1
                            }), m("dark"), te(), K()
                        }
                    },
                    $t = {
                        interval: null,
                        current: 0,
                        loop: le.loopPresets
                    },
                    en = function(e, t) {
                        Object.assign(ue, N), Object.assign(H.uniforms, Yt), Object.assign(je, Ne), Object.assign(Ze, Qe), Object.assign(jt, Nt), Object.assign(Ut, Bt), Object.assign(gt, mt), Object.assign(Ae, de), e(), E(), Dt(), Vt(), $t.current = t
                    },
                    tn = Object.keys(Qt);
                tn.forEach(function(e, t) {
                    Qt[e] = en.bind(null, Qt[e], t), Tt.presets.add(Qt, e)
                });
                var nn = function(e) {
                    $t.loop = e, clearInterval($t.interval), $t.interval = null, $t.loop && ($t.interval = setInterval(function() {
                        var e = ($t.current + 1) % tn.length;
                        Qt[tn[e]]()
                    }, $t.loop))
                };
                Tt.presets.add($t, "loop").onFinishChange(nn), nn($t.loop), x(!0), x(!1, void 0, !1), S(Tt.showing), St.appendChild(Tt.main.domElement), e.parentElement.appendChild(St), "" + P.keyboard != "false" && C();
                var rn = s({}, Jt, {
                    tendrils: q,
                    tracks: yt,
                    defaultState: N,
                    audioDefaults: de,
                    audioState: Ae,
                    toggleMedia: at,
                    timer: V
                });
                return window.tendrils = rn, rn
            }
        }
    }, function(e, t, n) {
        /*!
         * PEP v0.4.3 | https://github.com/jquery/PEP
         * Copyright jQuery Foundation and other contributors | http://jquery.org/license
         */
        ! function(t, n) {
            e.exports = n()
        }(this, function() {
            "use strict";

            function e(e, t) {
                t = t || Object.create(null);
                var n = document.createEvent("Event");
                n.initEvent(e, t.bubbles || !1, t.cancelable || !1);
                for (var r, i = 2; i < d.length; i++) r = d[i], n[r] = t[r] || h[i];
                n.buttons = t.buttons || 0;
                var a = 0;
                return a = t.pressure && n.buttons ? t.pressure : n.buttons ? .5 : 0, n.x = n.clientX, n.y = n.clientY, n.pointerId = t.pointerId || 0, n.width = t.width || 0, n.height = t.height || 0, n.pressure = a, n.tiltX = t.tiltX || 0, n.tiltY = t.tiltY || 0, n.twist = t.twist || 0, n.tangentialPressure = t.tangentialPressure || 0, n.pointerType = t.pointerType || "", n.hwTimestamp = t.hwTimestamp || 0, n.isPrimary = t.isPrimary || !1, n
            }

            function t() {
                this.array = [], this.size = 0
            }

            function n(e, t, n, r) {
                this.addCallback = e.bind(r), this.removeCallback = t.bind(r), this.changedCallback = n.bind(r), T && (this.observer = new T(this.mutationWatcher.bind(this)))
            }

            function r(e) {
                return "body /shadow-deep/ " + i(e)
            }

            function i(e) {
                return '[touch-action="' + e + '"]'
            }

            function a(e) {
                return "{ -ms-touch-action: " + e + "; touch-action: " + e + "; }"
            }

            function o() {
                if (P) {
                    C.forEach(function(e) {
                        String(e) === e ? (O += i(e) + a(e) + "\n", k && (O += r(e) + a(e) + "\n")) : (O += e.selectors.map(i) + a(e.rule) + "\n", k && (O += e.selectors.map(r) + a(e.rule) + "\n"))
                    });
                    var e = document.createElement("style");
                    e.textContent = O, document.head.appendChild(e)
                }
            }

            function s() {
                if (!window.PointerEvent) {
                    if (window.PointerEvent = e, window.navigator.msPointerEnabled) {
                        var t = window.navigator.msMaxTouchPoints;
                        Object.defineProperty(window.navigator, "maxTouchPoints", {
                            value: t,
                            enumerable: !0
                        }), _.registerSource("ms", Q)
                    } else Object.defineProperty(window.navigator, "maxTouchPoints", {
                        value: 0,
                        enumerable: !0
                    }), _.registerSource("mouse", D), void 0 !== window.ontouchstart && _.registerSource("touch", X);
                    _.register(document)
                }
            }

            function u(e) {
                if (!_.pointermap.has(e)) {
                    var t = new Error("InvalidPointerId");
                    throw t.name = "InvalidPointerId", t
                }
            }

            function c(e) {
                for (var t = e.parentNode; t && t !== e.ownerDocument;) t = t.parentNode;
                if (!t) {
                    var n = new Error("InvalidStateError");
                    throw n.name = "InvalidStateError", n
                }
            }

            function l(e) {
                var t = _.pointermap.get(e);
                return 0 !== t.buttons
            }

            function f() {
                window.Element && !Element.prototype.setPointerCapture && Object.defineProperties(Element.prototype, {
                    setPointerCapture: {
                        value: H
                    },
                    releasePointerCapture: {
                        value: W
                    },
                    hasPointerCapture: {
                        value: K
                    }
                })
            }
            var d = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "pageX", "pageY"],
                h = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0],
                p = window.Map && window.Map.prototype.forEach,
                v = p ? Map : t;
            t.prototype = {
                set: function(e, t) {
                    return void 0 === t ? this.delete(e) : (this.has(e) || this.size++, void(this.array[e] = t))
                },
                has: function(e) {
                    return void 0 !== this.array[e]
                },
                delete: function(e) {
                    this.has(e) && (delete this.array[e], this.size--)
                },
                get: function(e) {
                    return this.array[e]
                },
                clear: function() {
                    this.array.length = 0, this.size = 0
                },
                forEach: function(e, t) {
                    return this.array.forEach(function(n, r) {
                        e.call(t, n, r, this)
                    }, this)
                }
            };
            var m = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "buttons", "pointerId", "width", "height", "pressure", "tiltX", "tiltY", "pointerType", "hwTimestamp", "isPrimary", "type", "target", "currentTarget", "which", "pageX", "pageY", "timeStamp"],
                g = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0, 0, 0, 0, 0, 0, "", 0, !1, "", null, null, 0, 0, 0, 0],
                y = {
                    pointerover: 1,
                    pointerout: 1,
                    pointerenter: 1,
                    pointerleave: 1
                },
                b = "undefined" != typeof SVGElementInstance,
                _ = {
                    pointermap: new v,
                    eventMap: Object.create(null),
                    captureInfo: Object.create(null),
                    eventSources: Object.create(null),
                    eventSourceList: [],
                    registerSource: function(e, t) {
                        var n = t,
                            r = n.events;
                        r && (r.forEach(function(e) {
                            n[e] && (this.eventMap[e] = n[e].bind(n))
                        }, this), this.eventSources[e] = n, this.eventSourceList.push(n))
                    },
                    register: function(e) {
                        for (var t, n = this.eventSourceList.length, r = 0; r < n && (t = this.eventSourceList[r]); r++) t.register.call(t, e)
                    },
                    unregister: function(e) {
                        for (var t, n = this.eventSourceList.length, r = 0; r < n && (t = this.eventSourceList[r]); r++) t.unregister.call(t, e)
                    },
                    contains: function(e, t) {
                        try {
                            return e.contains(t)
                        } catch (e) {
                            return !1
                        }
                    },
                    down: function(e) {
                        e.bubbles = !0, this.fireEvent("pointerdown", e)
                    },
                    move: function(e) {
                        e.bubbles = !0, this.fireEvent("pointermove", e)
                    },
                    up: function(e) {
                        e.bubbles = !0, this.fireEvent("pointerup", e)
                    },
                    enter: function(e) {
                        e.bubbles = !1, this.fireEvent("pointerenter", e)
                    },
                    leave: function(e) {
                        e.bubbles = !1, this.fireEvent("pointerleave", e)
                    },
                    over: function(e) {
                        e.bubbles = !0, this.fireEvent("pointerover", e)
                    },
                    out: function(e) {
                        e.bubbles = !0, this.fireEvent("pointerout", e)
                    },
                    cancel: function(e) {
                        e.bubbles = !0, this.fireEvent("pointercancel", e)
                    },
                    leaveOut: function(e) {
                        this.out(e), this.propagate(e, this.leave, !1)
                    },
                    enterOver: function(e) {
                        this.over(e), this.propagate(e, this.enter, !0)
                    },
                    eventHandler: function(e) {
                        if (!e._handledByPE) {
                            var t = e.type,
                                n = this.eventMap && this.eventMap[t];
                            n && n(e), e._handledByPE = !0
                        }
                    },
                    listen: function(e, t) {
                        t.forEach(function(t) {
                            this.addEvent(e, t)
                        }, this)
                    },
                    unlisten: function(e, t) {
                        t.forEach(function(t) {
                            this.removeEvent(e, t)
                        }, this)
                    },
                    addEvent: function(e, t) {
                        e.addEventListener(t, this.boundHandler)
                    },
                    removeEvent: function(e, t) {
                        e.removeEventListener(t, this.boundHandler)
                    },
                    makeEvent: function(t, n) {
                        this.captureInfo[n.pointerId] && (n.relatedTarget = null);
                        var r = new e(t, n);
                        return n.preventDefault && (r.preventDefault = n.preventDefault), r._target = r._target || n.target, r
                    },
                    fireEvent: function(e, t) {
                        var n = this.makeEvent(e, t);
                        return this.dispatchEvent(n)
                    },
                    cloneEvent: function(e) {
                        for (var t, n = Object.create(null), r = 0; r < m.length; r++) t = m[r], n[t] = e[t] || g[r], !b || "target" !== t && "relatedTarget" !== t || n[t] instanceof SVGElementInstance && (n[t] = n[t].correspondingUseElement);
                        return e.preventDefault && (n.preventDefault = function() {
                            e.preventDefault()
                        }), n
                    },
                    getTarget: function(e) {
                        var t = this.captureInfo[e.pointerId];
                        return t ? e._target !== t && e.type in y ? void 0 : t : e._target
                    },
                    propagate: function(e, t, n) {
                        for (var r = e.target, i = []; r !== document && !r.contains(e.relatedTarget);)
                            if (i.push(r), r = r.parentNode, !r) return;
                        n && i.reverse(), i.forEach(function(n) {
                            e.target = n, t.call(this, e)
                        }, this)
                    },
                    setCapture: function(t, n, r) {
                        this.captureInfo[t] && this.releaseCapture(t, r), this.captureInfo[t] = n, this.implicitRelease = this.releaseCapture.bind(this, t, r), document.addEventListener("pointerup", this.implicitRelease), document.addEventListener("pointercancel", this.implicitRelease);
                        var i = new e("gotpointercapture");
                        i.pointerId = t, i._target = n, r || this.asyncDispatchEvent(i)
                    },
                    releaseCapture: function(t, n) {
                        var r = this.captureInfo[t];
                        if (r) {
                            this.captureInfo[t] = void 0, document.removeEventListener("pointerup", this.implicitRelease), document.removeEventListener("pointercancel", this.implicitRelease);
                            var i = new e("lostpointercapture");
                            i.pointerId = t, i._target = r, n || this.asyncDispatchEvent(i)
                        }
                    },
                    dispatchEvent: function(e) {
                        var t = this.getTarget(e);
                        if (t) return t.dispatchEvent(e)
                    },
                    asyncDispatchEvent: function(e) {
                        requestAnimationFrame(this.dispatchEvent.bind(this, e))
                    }
                };
            _.boundHandler = _.eventHandler.bind(_);
            var w = {
                    shadow: function(e) {
                        if (e) return e.shadowRoot || e.webkitShadowRoot
                    },
                    canTarget: function(e) {
                        return e && Boolean(e.elementFromPoint)
                    },
                    targetingShadow: function(e) {
                        var t = this.shadow(e);
                        if (this.canTarget(t)) return t
                    },
                    olderShadow: function(e) {
                        var t = e.olderShadowRoot;
                        if (!t) {
                            var n = e.querySelector("shadow");
                            n && (t = n.olderShadowRoot)
                        }
                        return t
                    },
                    allShadows: function(e) {
                        for (var t = [], n = this.shadow(e); n;) t.push(n), n = this.olderShadow(n);
                        return t
                    },
                    searchRoot: function(e, t, n) {
                        if (e) {
                            var r, i, a = e.elementFromPoint(t, n);
                            for (i = this.targetingShadow(a); i;) {
                                if (r = i.elementFromPoint(t, n)) {
                                    var o = this.targetingShadow(r);
                                    return this.searchRoot(o, t, n) || r
                                }
                                i = this.olderShadow(i)
                            }
                            return a
                        }
                    },
                    owner: function(e) {
                        for (var t = e; t.parentNode;) t = t.parentNode;
                        return t.nodeType !== Node.DOCUMENT_NODE && t.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && (t = document), t
                    },
                    findTarget: function(e) {
                        var t = e.clientX,
                            n = e.clientY,
                            r = this.owner(e.target);
                        return r.elementFromPoint(t, n) || (r = document), this.searchRoot(r, t, n)
                    }
                },
                E = Array.prototype.forEach.call.bind(Array.prototype.forEach),
                A = Array.prototype.map.call.bind(Array.prototype.map),
                x = Array.prototype.slice.call.bind(Array.prototype.slice),
                M = Array.prototype.filter.call.bind(Array.prototype.filter),
                T = window.MutationObserver || window.WebKitMutationObserver,
                S = "[touch-action]",
                R = {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    attributeFilter: ["touch-action"]
                };
            n.prototype = {
                watchSubtree: function(e) {
                    this.observer && w.canTarget(e) && this.observer.observe(e, R)
                },
                enableOnSubtree: function(e) {
                    this.watchSubtree(e), e === document && "complete" !== document.readyState ? this.installOnLoad() : this.installNewSubtree(e)
                },
                installNewSubtree: function(e) {
                    E(this.findElements(e), this.addElement, this)
                },
                findElements: function(e) {
                    return e.querySelectorAll ? e.querySelectorAll(S) : []
                },
                removeElement: function(e) {
                    this.removeCallback(e)
                },
                addElement: function(e) {
                    this.addCallback(e)
                },
                elementChanged: function(e, t) {
                    this.changedCallback(e, t)
                },
                concatLists: function(e, t) {
                    return e.concat(x(t))
                },
                installOnLoad: function() {
                    document.addEventListener("readystatechange", function() {
                        "complete" === document.readyState && this.installNewSubtree(document)
                    }.bind(this))
                },
                isElement: function(e) {
                    return e.nodeType === Node.ELEMENT_NODE
                },
                flattenMutationTree: function(e) {
                    var t = A(e, this.findElements, this);
                    return t.push(M(e, this.isElement)), t.reduce(this.concatLists, [])
                },
                mutationWatcher: function(e) {
                    e.forEach(this.mutationHandler, this)
                },
                mutationHandler: function(e) {
                    if ("childList" === e.type) {
                        var t = this.flattenMutationTree(e.addedNodes);
                        t.forEach(this.addElement, this);
                        var n = this.flattenMutationTree(e.removedNodes);
                        n.forEach(this.removeElement, this)
                    } else "attributes" === e.type && this.elementChanged(e.target, e.oldValue)
                }
            };
            var C = ["none", "auto", "pan-x", "pan-y", {
                    rule: "pan-x pan-y",
                    selectors: ["pan-x pan-y", "pan-y pan-x"]
                }],
                O = "",
                P = window.PointerEvent || window.MSPointerEvent,
                k = !window.ShadowDOMPolyfill && document.head.createShadowRoot,
                I = _.pointermap,
                F = 25,
                L = [1, 4, 2, 8, 16],
                N = !1;
            try {
                N = 1 === new MouseEvent("test", {
                    buttons: 1
                }).buttons
            } catch (e) {}
            var j, D = {
                    POINTER_ID: 1,
                    POINTER_TYPE: "mouse",
                    events: ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout"],
                    register: function(e) {
                        _.listen(e, this.events)
                    },
                    unregister: function(e) {
                        _.unlisten(e, this.events)
                    },
                    lastTouches: [],
                    isEventSimulatedFromTouch: function(e) {
                        for (var t, n = this.lastTouches, r = e.clientX, i = e.clientY, a = 0, o = n.length; a < o && (t = n[a]); a++) {
                            var s = Math.abs(r - t.x),
                                u = Math.abs(i - t.y);
                            if (s <= F && u <= F) return !0
                        }
                    },
                    prepareEvent: function(e) {
                        var t = _.cloneEvent(e),
                            n = t.preventDefault;
                        return t.preventDefault = function() {
                            e.preventDefault(), n()
                        }, t.pointerId = this.POINTER_ID, t.isPrimary = !0, t.pointerType = this.POINTER_TYPE, t
                    },
                    prepareButtonsForMove: function(e, t) {
                        var n = I.get(this.POINTER_ID);
                        0 !== t.which && n ? e.buttons = n.buttons : e.buttons = 0, t.buttons = e.buttons
                    },
                    mousedown: function(e) {
                        if (!this.isEventSimulatedFromTouch(e)) {
                            var t = I.get(this.POINTER_ID),
                                n = this.prepareEvent(e);
                            N || (n.buttons = L[n.button], t && (n.buttons |= t.buttons), e.buttons = n.buttons), I.set(this.POINTER_ID, e), t && 0 !== t.buttons ? _.move(n) : _.down(n)
                        }
                    },
                    mousemove: function(e) {
                        if (!this.isEventSimulatedFromTouch(e)) {
                            var t = this.prepareEvent(e);
                            N || this.prepareButtonsForMove(t, e), t.button = -1, I.set(this.POINTER_ID, e), _.move(t)
                        }
                    },
                    mouseup: function(e) {
                        if (!this.isEventSimulatedFromTouch(e)) {
                            var t = I.get(this.POINTER_ID),
                                n = this.prepareEvent(e);
                            if (!N) {
                                var r = L[n.button];
                                n.buttons = t ? t.buttons & ~r : 0, e.buttons = n.buttons
                            }
                            I.set(this.POINTER_ID, e), n.buttons &= ~L[n.button], 0 === n.buttons ? _.up(n) : _.move(n)
                        }
                    },
                    mouseover: function(e) {
                        if (!this.isEventSimulatedFromTouch(e)) {
                            var t = this.prepareEvent(e);
                            N || this.prepareButtonsForMove(t, e), t.button = -1, I.set(this.POINTER_ID, e), _.enterOver(t)
                        }
                    },
                    mouseout: function(e) {
                        if (!this.isEventSimulatedFromTouch(e)) {
                            var t = this.prepareEvent(e);
                            N || this.prepareButtonsForMove(t, e), t.button = -1, _.leaveOut(t)
                        }
                    },
                    cancel: function(e) {
                        var t = this.prepareEvent(e);
                        _.cancel(t), this.deactivateMouse()
                    },
                    deactivateMouse: function() {
                        I.delete(this.POINTER_ID)
                    }
                },
                U = _.captureInfo,
                B = w.findTarget.bind(w),
                V = w.allShadows.bind(w),
                z = _.pointermap,
                q = 2500,
                Y = 200,
                G = "touch-action",
                X = {
                    events: ["touchstart", "touchmove", "touchend", "touchcancel"],
                    register: function(e) {
                        j.enableOnSubtree(e)
                    },
                    unregister: function() {},
                    elementAdded: function(e) {
                        var t = e.getAttribute(G),
                            n = this.touchActionToScrollType(t);
                        n && (e._scrollType = n, _.listen(e, this.events), V(e).forEach(function(e) {
                            e._scrollType = n, _.listen(e, this.events)
                        }, this))
                    },
                    elementRemoved: function(e) {
                        e._scrollType = void 0, _.unlisten(e, this.events), V(e).forEach(function(e) {
                            e._scrollType = void 0, _.unlisten(e, this.events)
                        }, this)
                    },
                    elementChanged: function(e, t) {
                        var n = e.getAttribute(G),
                            r = this.touchActionToScrollType(n),
                            i = this.touchActionToScrollType(t);
                        r && i ? (e._scrollType = r, V(e).forEach(function(e) {
                            e._scrollType = r
                        }, this)) : i ? this.elementRemoved(e) : r && this.elementAdded(e)
                    },
                    scrollTypes: {
                        EMITTER: "none",
                        XSCROLLER: "pan-x",
                        YSCROLLER: "pan-y",
                        SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
                    },
                    touchActionToScrollType: function(e) {
                        var t = e,
                            n = this.scrollTypes;
                        return "none" === t ? "none" : t === n.XSCROLLER ? "X" : t === n.YSCROLLER ? "Y" : n.SCROLLER.exec(t) ? "XY" : void 0
                    },
                    POINTER_TYPE: "touch",
                    firstTouch: null,
                    isPrimaryTouch: function(e) {
                        return this.firstTouch === e.identifier
                    },
                    setPrimaryTouch: function(e) {
                        (0 === z.size || 1 === z.size && z.has(1)) && (this.firstTouch = e.identifier, this.firstXY = {
                            X: e.clientX,
                            Y: e.clientY
                        }, this.scrolling = !1, this.cancelResetClickCount())
                    },
                    removePrimaryPointer: function(e) {
                        e.isPrimary && (this.firstTouch = null, this.firstXY = null, this.resetClickCount())
                    },
                    clickCount: 0,
                    resetId: null,
                    resetClickCount: function() {
                        var e = function() {
                            this.clickCount = 0, this.resetId = null
                        }.bind(this);
                        this.resetId = setTimeout(e, Y)
                    },
                    cancelResetClickCount: function() {
                        this.resetId && clearTimeout(this.resetId)
                    },
                    typeToButtons: function(e) {
                        var t = 0;
                        return "touchstart" !== e && "touchmove" !== e || (t = 1), t
                    },
                    touchToPointer: function(e) {
                        var t = this.currentTouchEvent,
                            n = _.cloneEvent(e),
                            r = n.pointerId = e.identifier + 2;
                        n.target = U[r] || B(n), n.bubbles = !0, n.cancelable = !0, n.detail = this.clickCount, n.button = 0, n.buttons = this.typeToButtons(t.type), n.width = 2 * (e.radiusX || e.webkitRadiusX || 0), n.height = 2 * (e.radiusY || e.webkitRadiusY || 0), n.pressure = e.force || e.webkitForce || .5, n.isPrimary = this.isPrimaryTouch(e), n.pointerType = this.POINTER_TYPE, n.altKey = t.altKey, n.ctrlKey = t.ctrlKey, n.metaKey = t.metaKey, n.shiftKey = t.shiftKey;
                        var i = this;
                        return n.preventDefault = function() {
                            i.scrolling = !1, i.firstXY = null, t.preventDefault()
                        }, n
                    },
                    processTouches: function(e, t) {
                        var n = e.changedTouches;
                        this.currentTouchEvent = e;
                        for (var r, i = 0; i < n.length; i++) r = n[i], t.call(this, this.touchToPointer(r))
                    },
                    shouldScroll: function(e) {
                        if (this.firstXY) {
                            var t, n = e.currentTarget._scrollType;
                            if ("none" === n) t = !1;
                            else if ("XY" === n) t = !0;
                            else {
                                var r = e.changedTouches[0],
                                    i = n,
                                    a = "Y" === n ? "X" : "Y",
                                    o = Math.abs(r["client" + i] - this.firstXY[i]),
                                    s = Math.abs(r["client" + a] - this.firstXY[a]);
                                t = o >= s
                            }
                            return this.firstXY = null, t
                        }
                    },
                    findTouch: function(e, t) {
                        for (var n, r = 0, i = e.length; r < i && (n = e[r]); r++)
                            if (n.identifier === t) return !0
                    },
                    vacuumTouches: function(e) {
                        var t = e.touches;
                        if (z.size >= t.length) {
                            var n = [];
                            z.forEach(function(e, r) {
                                if (1 !== r && !this.findTouch(t, r - 2)) {
                                    var i = e.out;
                                    n.push(i)
                                }
                            }, this), n.forEach(this.cancelOut, this)
                        }
                    },
                    touchstart: function(e) {
                        this.vacuumTouches(e), this.setPrimaryTouch(e.changedTouches[0]), this.dedupSynthMouse(e), this.scrolling || (this.clickCount++, this.processTouches(e, this.overDown))
                    },
                    overDown: function(e) {
                        z.set(e.pointerId, {
                            target: e.target,
                            out: e,
                            outTarget: e.target
                        }), _.enterOver(e), _.down(e)
                    },
                    touchmove: function(e) {
                        this.scrolling || (this.shouldScroll(e) ? (this.scrolling = !0, this.touchcancel(e)) : (e.preventDefault(), this.processTouches(e, this.moveOverOut)))
                    },
                    moveOverOut: function(e) {
                        var t = e,
                            n = z.get(t.pointerId);
                        if (n) {
                            var r = n.out,
                                i = n.outTarget;
                            _.move(t), r && i !== t.target && (r.relatedTarget = t.target, t.relatedTarget = i, r.target = i, t.target ? (_.leaveOut(r), _.enterOver(t)) : (t.target = i, t.relatedTarget = null, this.cancelOut(t))), n.out = t, n.outTarget = t.target
                        }
                    },
                    touchend: function(e) {
                        this.dedupSynthMouse(e), this.processTouches(e, this.upOut)
                    },
                    upOut: function(e) {
                        this.scrolling || (_.up(e), _.leaveOut(e)), this.cleanUpPointer(e)
                    },
                    touchcancel: function(e) {
                        this.processTouches(e, this.cancelOut)
                    },
                    cancelOut: function(e) {
                        _.cancel(e), _.leaveOut(e), this.cleanUpPointer(e)
                    },
                    cleanUpPointer: function(e) {
                        z.delete(e.pointerId), this.removePrimaryPointer(e)
                    },
                    dedupSynthMouse: function(e) {
                        var t = D.lastTouches,
                            n = e.changedTouches[0];
                        if (this.isPrimaryTouch(n)) {
                            var r = {
                                x: n.clientX,
                                y: n.clientY
                            };
                            t.push(r);
                            var i = function(e, t) {
                                var n = e.indexOf(t);
                                n > -1 && e.splice(n, 1)
                            }.bind(null, t, r);
                            setTimeout(i, q)
                        }
                    }
                };
            j = new n(X.elementAdded, X.elementRemoved, X.elementChanged, X);
            var H, W, K, J = _.pointermap,
                Z = window.MSPointerEvent && "number" == typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,
                Q = {
                    events: ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerOut", "MSPointerOver", "MSPointerCancel", "MSGotPointerCapture", "MSLostPointerCapture"],
                    register: function(e) {
                        _.listen(e, this.events)
                    },
                    unregister: function(e) {
                        _.unlisten(e, this.events)
                    },
                    POINTER_TYPES: ["", "unavailable", "touch", "pen", "mouse"],
                    prepareEvent: function(e) {
                        var t = e;
                        return Z && (t = _.cloneEvent(e), t.pointerType = this.POINTER_TYPES[e.pointerType]), t
                    },
                    cleanup: function(e) {
                        J.delete(e)
                    },
                    MSPointerDown: function(e) {
                        J.set(e.pointerId, e);
                        var t = this.prepareEvent(e);
                        _.down(t)
                    },
                    MSPointerMove: function(e) {
                        var t = this.prepareEvent(e);
                        _.move(t)
                    },
                    MSPointerUp: function(e) {
                        var t = this.prepareEvent(e);
                        _.up(t), this.cleanup(e.pointerId)
                    },
                    MSPointerOut: function(e) {
                        var t = this.prepareEvent(e);
                        _.leaveOut(t)
                    },
                    MSPointerOver: function(e) {
                        var t = this.prepareEvent(e);
                        _.enterOver(t)
                    },
                    MSPointerCancel: function(e) {
                        var t = this.prepareEvent(e);
                        _.cancel(t), this.cleanup(e.pointerId)
                    },
                    MSLostPointerCapture: function(e) {
                        var t = _.makeEvent("lostpointercapture", e);
                        _.dispatchEvent(t)
                    },
                    MSGotPointerCapture: function(e) {
                        var t = _.makeEvent("gotpointercapture", e);
                        _.dispatchEvent(t)
                    }
                },
                $ = window.navigator;
            $.msPointerEnabled ? (H = function(e) {
                u(e), c(this), l(e) && (_.setCapture(e, this, !0), this.msSetPointerCapture(e))
            }, W = function(e) {
                u(e), _.releaseCapture(e, !0), this.msReleasePointerCapture(e)
            }) : (H = function(e) {
                u(e), c(this), l(e) && _.setCapture(e, this)
            }, W = function(e) {
                u(e), _.releaseCapture(e)
            }), K = function(e) {
                return !!_.captureInfo[e]
            }, o(), s(), f();
            var ee = {
                dispatcher: _,
                Installer: n,
                PointerEvent: e,
                PointerMap: v,
                targetFinding: w
            };
            return ee
        })
    }, function(e, t, n) {
        function r(e, t, n) {
            function r() {
                n(a), i(r)
            }
            "function" == typeof t ? (n = t, t = {}) : t = t || {};
            var a = e.getContext("webgl", t) || e.getContext("webgl-experimental", t) || e.getContext("experimental-webgl", t);
            if (!a) throw new Error("Unable to initialize WebGL");
            return n && i(r), a
        }
        var i = n(4);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = (new Date).getTime(),
                n = Math.max(0, 16 - (t - r)),
                i = setTimeout(e, n);
            return r = t, i
        }
        t = e.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || n;
        var r = (new Date).getTime(),
            i = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;
        t.cancel = function(e) {
            i.call(window, e)
        }
    }, function(e, t) {
        "use strict";
        var n, r = "undefined" != typeof window ? window.navigator.userAgent : "",
            i = /OS X/.test(r),
            a = /Opera/.test(r),
            o = !/like Gecko/.test(r) && !a,
            s = e.exports = {
                0: i ? "<menu>" : "<UNK>",
                1: "<mouse 1>",
                2: "<mouse 2>",
                3: "<break>",
                4: "<mouse 3>",
                5: "<mouse 4>",
                6: "<mouse 5>",
                8: "<backspace>",
                9: "<tab>",
                12: "<clear>",
                13: "<enter>",
                16: "<shift>",
                17: "<control>",
                18: "<alt>",
                19: "<pause>",
                20: "<caps-lock>",
                21: "<ime-hangul>",
                23: "<ime-junja>",
                24: "<ime-final>",
                25: "<ime-kanji>",
                27: "<escape>",
                28: "<ime-convert>",
                29: "<ime-nonconvert>",
                30: "<ime-accept>",
                31: "<ime-mode-change>",
                32: "<space>",
                33: "<page-up>",
                34: "<page-down>",
                35: "<end>",
                36: "<home>",
                37: "<left>",
                38: "<up>",
                39: "<right>",
                40: "<down>",
                41: "<select>",
                42: "<print>",
                43: "<execute>",
                44: "<snapshot>",
                45: "<insert>",
                46: "<delete>",
                47: "<help>",
                91: "<meta>",
                92: "<meta>",
                93: i ? "<meta>" : "<menu>",
                95: "<sleep>",
                106: "<num-*>",
                107: "<num-+>",
                108: "<num-enter>",
                109: "<num-->",
                110: "<num-.>",
                111: "<num-/>",
                144: "<num-lock>",
                145: "<scroll-lock>",
                160: "<shift-left>",
                161: "<shift-right>",
                162: "<control-left>",
                163: "<control-right>",
                164: "<alt-left>",
                165: "<alt-right>",
                166: "<browser-back>",
                167: "<browser-forward>",
                168: "<browser-refresh>",
                169: "<browser-stop>",
                170: "<browser-search>",
                171: "<browser-favorites>",
                172: "<browser-home>",
                173: i && o ? "-" : "<volume-mute>",
                174: "<volume-down>",
                175: "<volume-up>",
                176: "<next-track>",
                177: "<prev-track>",
                178: "<stop>",
                179: "<play-pause>",
                180: "<launch-mail>",
                181: "<launch-media-select>",
                182: "<launch-app 1>",
                183: "<launch-app 2>",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                223: "<meta>",
                224: "<meta>",
                226: "<alt-gr>",
                229: "<ime-process>",
                231: a ? "`" : "<unicode>",
                246: "<attention>",
                247: "<crsel>",
                248: "<exsel>",
                249: "<erase-eof>",
                250: "<play>",
                251: "<zoom>",
                252: "<no-name>",
                253: "<pa-1>",
                254: "<clear>"
            };
        for (n = 58; n < 65; ++n) s[n] = String.fromCharCode(n);
        for (n = 48; n < 58; ++n) s[n] = n - 48 + "";
        for (n = 65; n < 91; ++n) s[n] = String.fromCharCode(n);
        for (n = 96; n < 106; ++n) s[n] = "<num-" + (n - 96) + ">";
        for (n = 112; n < 136; ++n) s[n] = "F" + (n - 111)
    }, function(e, t, n) {
        n(7);
        e.exports = function(e, t) {
            var n, r = 2 === arguments.length,
                i = {
                    video: !0,
                    audio: !0
                },
                a = "PermissionDeniedError",
                o = "PERMISSION_DENIED",
                s = "ConstraintNotSatisfiedError";
            return r || (t = e, e = i), "undefined" != typeof navigator && navigator.getUserMedia ? e.audio || e.video ? (localStorage && "true" === localStorage.useFirefoxFakeDevice && (e.fake = !0), void navigator.mediaDevices.getUserMedia(e).then(function(e) {
                t(null, e)
            }).catch(function(e) {
                var n;
                "string" == typeof e ? (n = new Error("MediaStreamError"), e === a || e === o ? n.name = a : n.name = s) : (n = e, n.name || (n[a] ? e.name = a : e.name = s)), t(n)
            })) : (n = new Error("MediaStreamError"), n.name = "NoMediaRequestedError", setTimeout(function() {
                t(n)
            }, 0)) : (n = new Error("MediaStreamError"), n.name = "NotSupportedError", setTimeout(function() {
                t(n)
            }, 0))
        }
    }, function(e, t, n) {
        "use strict";
        ! function() {
            var t = n(8).log,
                r = n(8).browserDetails;
            e.exports.browserDetails = r, e.exports.extractVersion = n(8).extractVersion, e.exports.disableLog = n(8).disableLog;
            var i = n(9) || null,
                a = n(11) || null,
                o = n(14) || null,
                s = n(16) || null;
            switch (r.browser) {
                case "opera":
                case "chrome":
                    if (!i || !i.shimPeerConnection) return void t("Chrome shim is not included in this adapter release.");
                    t("adapter.js shimming chrome."), e.exports.browserShim = i, i.shimGetUserMedia(), i.shimMediaStream(), i.shimSourceObject(), i.shimPeerConnection(), i.shimOnTrack();
                    break;
                case "firefox":
                    if (!o || !o.shimPeerConnection) return void t("Firefox shim is not included in this adapter release.");
                    t("adapter.js shimming firefox."), e.exports.browserShim = o, o.shimGetUserMedia(), o.shimSourceObject(), o.shimPeerConnection(), o.shimOnTrack();
                    break;
                case "edge":
                    if (!a || !a.shimPeerConnection) return void t("MS edge shim is not included in this adapter release.");
                    t("adapter.js shimming edge."), e.exports.browserShim = a, a.shimGetUserMedia(), a.shimPeerConnection();
                    break;
                case "safari":
                    if (!s) return void t("Safari shim is not included in this adapter release.");
                    t("adapter.js shimming safari."), e.exports.browserShim = s, s.shimGetUserMedia();
                    break;
                default:
                    t("Unsupported browser!")
            }
        }()
    }, function(e, t) {
        "use strict";
        var n = !0,
            r = {
                disableLog: function(e) {
                    return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (n = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
                },
                log: function() {
                    if ("object" == typeof window) {
                        if (n) return;
                        "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
                    }
                },
                extractVersion: function(e, t, n) {
                    var r = e.match(t);
                    return r && r.length >= n && parseInt(r[n], 10)
                },
                detectBrowser: function() {
                    var e = {};
                    if (e.browser = null, e.version = null, e.minVersion = null, "undefined" == typeof window || !window.navigator) return e.browser = "Not a browser.", e;
                    if (navigator.mozGetUserMedia) e.browser = "firefox", e.version = this.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), e.minVersion = 31;
                    else if (navigator.webkitGetUserMedia)
                        if (window.webkitRTCPeerConnection) e.browser = "chrome", e.version = this.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), e.minVersion = 38;
                        else {
                            if (!navigator.userAgent.match(/Version\/(\d+).(\d+)/)) return e.browser = "Unsupported webkit-based browser with GUM support but no WebRTC support.", e;
                            e.browser = "safari", e.version = this.extractVersion(navigator.userAgent, /AppleWebKit\/([0-9]+)\./, 1), e.minVersion = 602
                        }
                    else {
                        if (!navigator.mediaDevices || !navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) return e.browser = "Not a supported browser.", e;
                        e.browser = "edge", e.version = this.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), e.minVersion = 10547
                    }
                    return e.version < e.minVersion && r.log("Browser: " + e.browser + " Version: " + e.version + " < minimum supported version: " + e.minVersion + "\n some things might not work!"), e
                }
            };
        e.exports = {
            log: r.log,
            disableLog: r.disableLog,
            browserDetails: r.detectBrowser(),
            extractVersion: r.extractVersion
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(8).log,
            i = n(8).browserDetails,
            a = {
                shimMediaStream: function() {
                    window.MediaStream = window.MediaStream || window.webkitMediaStream
                },
                shimOnTrack: function() {
                    "object" != typeof window || !window.RTCPeerConnection || "ontrack" in window.RTCPeerConnection.prototype || Object.defineProperty(window.RTCPeerConnection.prototype, "ontrack", {
                        get: function() {
                            return this._ontrack
                        },
                        set: function(e) {
                            var t = this;
                            this._ontrack && (this.removeEventListener("track", this._ontrack), this.removeEventListener("addstream", this._ontrackpoly)), this.addEventListener("track", this._ontrack = e), this.addEventListener("addstream", this._ontrackpoly = function(e) {
                                e.stream.addEventListener("addtrack", function(n) {
                                    var r = new Event("track");
                                    r.track = n.track, r.receiver = {
                                        track: n.track
                                    }, r.streams = [e.stream], t.dispatchEvent(r)
                                }), e.stream.getTracks().forEach(function(t) {
                                    var n = new Event("track");
                                    n.track = t, n.receiver = {
                                        track: t
                                    }, n.streams = [e.stream], this.dispatchEvent(n)
                                }.bind(this))
                            }.bind(this))
                        }
                    })
                },
                shimSourceObject: function() {
                    "object" == typeof window && (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype || Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
                        get: function() {
                            return this._srcObject
                        },
                        set: function(e) {
                            var t = this;
                            return this._srcObject = e, this.src && URL.revokeObjectURL(this.src), e ? (this.src = URL.createObjectURL(e), e.addEventListener("addtrack", function() {
                                t.src && URL.revokeObjectURL(t.src), t.src = URL.createObjectURL(e)
                            }), void e.addEventListener("removetrack", function() {
                                t.src && URL.revokeObjectURL(t.src), t.src = URL.createObjectURL(e)
                            })) : void(this.src = "")
                        }
                    }))
                },
                shimPeerConnection: function() {
                    window.RTCPeerConnection = function(e, t) {
                        r("PeerConnection"), e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
                        var n = new webkitRTCPeerConnection(e, t),
                            i = n.getStats.bind(n);
                        return n.getStats = function(e, t, n) {
                            var r = this,
                                a = arguments;
                            if (arguments.length > 0 && "function" == typeof e) return i(e, t);
                            var o = function(e) {
                                    var t = {},
                                        n = e.result();
                                    return n.forEach(function(e) {
                                        var n = {
                                            id: e.id,
                                            timestamp: e.timestamp,
                                            type: e.type
                                        };
                                        e.names().forEach(function(t) {
                                            n[t] = e.stat(t)
                                        }), t[n.id] = n
                                    }), t
                                },
                                s = function(e, t) {
                                    var n = new Map(Object.keys(e).map(function(t) {
                                        return [t, e[t]]
                                    }));
                                    return t = t || e, Object.keys(t).forEach(function(e) {
                                        n[e] = t[e]
                                    }), n
                                };
                            if (arguments.length >= 2) {
                                var u = function(e) {
                                    a[1](s(o(e)))
                                };
                                return i.apply(this, [u, arguments[0]])
                            }
                            return new Promise(function(t, n) {
                                1 === a.length && "object" == typeof e ? i.apply(r, [function(e) {
                                    t(s(o(e)))
                                }, n]) : i.apply(r, [function(e) {
                                    t(s(o(e), e.result()))
                                }, n])
                            }).then(t, n)
                        }, n
                    }, window.RTCPeerConnection.prototype = webkitRTCPeerConnection.prototype, webkitRTCPeerConnection.generateCertificate && Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
                        get: function() {
                            return webkitRTCPeerConnection.generateCertificate
                        }
                    }), ["createOffer", "createAnswer"].forEach(function(e) {
                        var t = webkitRTCPeerConnection.prototype[e];
                        webkitRTCPeerConnection.prototype[e] = function() {
                            var e = this;
                            if (arguments.length < 1 || 1 === arguments.length && "object" == typeof arguments[0]) {
                                var n = 1 === arguments.length ? arguments[0] : void 0;
                                return new Promise(function(r, i) {
                                    t.apply(e, [r, i, n])
                                })
                            }
                            return t.apply(this, arguments)
                        }
                    }), i.version < 51 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(e) {
                        var t = webkitRTCPeerConnection.prototype[e];
                        webkitRTCPeerConnection.prototype[e] = function() {
                            var e = arguments,
                                n = this,
                                r = new Promise(function(r, i) {
                                    t.apply(n, [e[0], r, i])
                                });
                            return e.length < 2 ? r : r.then(function() {
                                e[1].apply(null, [])
                            }, function(t) {
                                e.length >= 3 && e[2].apply(null, [t])
                            })
                        }
                    });
                    var e = RTCPeerConnection.prototype.addIceCandidate;
                    RTCPeerConnection.prototype.addIceCandidate = function() {
                        return null === arguments[0] ? Promise.resolve() : e.apply(this, arguments)
                    }, ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(e) {
                        var t = webkitRTCPeerConnection.prototype[e];
                        webkitRTCPeerConnection.prototype[e] = function() {
                            return arguments[0] = new("addIceCandidate" === e ? RTCIceCandidate : RTCSessionDescription)(arguments[0]), t.apply(this, arguments)
                        }
                    })
                },
                attachMediaStream: function(e, t) {
                    r("DEPRECATED, attachMediaStream will soon be removed."), i.version >= 43 ? e.srcObject = t : "undefined" != typeof e.src ? e.src = URL.createObjectURL(t) : r("Error attaching stream to element.")
                },
                reattachMediaStream: function(e, t) {
                    r("DEPRECATED, reattachMediaStream will soon be removed."), i.version >= 43 ? e.srcObject = t.srcObject : e.src = t.src
                }
            };
        e.exports = {
            shimMediaStream: a.shimMediaStream,
            shimOnTrack: a.shimOnTrack,
            shimSourceObject: a.shimSourceObject,
            shimPeerConnection: a.shimPeerConnection,
            shimGetUserMedia: n(10),
            attachMediaStream: a.attachMediaStream,
            reattachMediaStream: a.reattachMediaStream
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(8).log;
        e.exports = function() {
            var e = function(e) {
                    if ("object" != typeof e || e.mandatory || e.optional) return e;
                    var t = {};
                    return Object.keys(e).forEach(function(n) {
                        if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                            var r = "object" == typeof e[n] ? e[n] : {
                                ideal: e[n]
                            };
                            void 0 !== r.exact && "number" == typeof r.exact && (r.min = r.max = r.exact);
                            var i = function(e, t) {
                                return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                            };
                            if (void 0 !== r.ideal) {
                                t.optional = t.optional || [];
                                var a = {};
                                "number" == typeof r.ideal ? (a[i("min", n)] = r.ideal, t.optional.push(a), a = {}, a[i("max", n)] = r.ideal, t.optional.push(a)) : (a[i("", n)] = r.ideal, t.optional.push(a))
                            }
                            void 0 !== r.exact && "number" != typeof r.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[i("", n)] = r.exact) : ["min", "max"].forEach(function(e) {
                                void 0 !== r[e] && (t.mandatory = t.mandatory || {}, t.mandatory[i(e, n)] = r[e])
                            })
                        }
                    }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
                },
                t = function(t, n) {
                    if (t = JSON.parse(JSON.stringify(t)), t && t.audio && (t.audio = e(t.audio)), t && "object" == typeof t.video) {
                        var i = t.video.facingMode;
                        if (i = i && ("object" == typeof i ? i : {
                                ideal: i
                            }), i && ("user" === i.exact || "environment" === i.exact || "user" === i.ideal || "environment" === i.ideal) && (!navigator.mediaDevices.getSupportedConstraints || !navigator.mediaDevices.getSupportedConstraints().facingMode) && (delete t.video.facingMode, "environment" === i.exact || "environment" === i.ideal)) return navigator.mediaDevices.enumerateDevices().then(function(a) {
                            a = a.filter(function(e) {
                                return "videoinput" === e.kind
                            });
                            var o = a.find(function(e) {
                                return e.label.toLowerCase().indexOf("back") !== -1
                            }) || a.length && a[a.length - 1];
                            return o && (t.video.deviceId = i.exact ? {
                                exact: o.deviceId
                            } : {
                                ideal: o.deviceId
                            }), t.video = e(t.video), r("chrome: " + JSON.stringify(t)), n(t)
                        });
                        t.video = e(t.video)
                    }
                    return r("chrome: " + JSON.stringify(t)), n(t)
                },
                n = function(e) {
                    return {
                        name: {
                            PermissionDeniedError: "NotAllowedError",
                            ConstraintNotSatisfiedError: "OverconstrainedError"
                        } [e.name] || e.name,
                        message: e.message,
                        constraint: e.constraintName,
                        toString: function() {
                            return this.name + (this.message && ": ") + this.message
                        }
                    }
                },
                i = function(e, r, i) {
                    t(e, function(e) {
                        navigator.webkitGetUserMedia(e, r, function(e) {
                            i(n(e))
                        })
                    })
                };
            navigator.getUserMedia = i;
            var a = function(e) {
                return new Promise(function(t, n) {
                    navigator.getUserMedia(e, t, n)
                })
            };
            if (navigator.mediaDevices || (navigator.mediaDevices = {
                    getUserMedia: a,
                    enumerateDevices: function() {
                        return new Promise(function(e) {
                            var t = {
                                audio: "audioinput",
                                video: "videoinput"
                            };
                            return MediaStreamTrack.getSources(function(n) {
                                e(n.map(function(e) {
                                    return {
                                        label: e.label,
                                        kind: t[e.kind],
                                        deviceId: e.id,
                                        groupId: ""
                                    }
                                }))
                            })
                        })
                    }
                }), navigator.mediaDevices.getUserMedia) {
                var o = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                navigator.mediaDevices.getUserMedia = function(e) {
                    return t(e, function(e) {
                        return o(e).catch(function(e) {
                            return Promise.reject(n(e))
                        })
                    })
                }
            } else navigator.mediaDevices.getUserMedia = function(e) {
                return a(e)
            };
            "undefined" == typeof navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function() {
                r("Dummy mediaDevices.addEventListener called.")
            }), "undefined" == typeof navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function() {
                r("Dummy mediaDevices.removeEventListener called.")
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(12),
            i = n(8).log,
            a = {
                shimPeerConnection: function() {
                    window.RTCIceGatherer && (window.RTCIceCandidate || (window.RTCIceCandidate = function(e) {
                        return e
                    }), window.RTCSessionDescription || (window.RTCSessionDescription = function(e) {
                        return e
                    })), window.RTCPeerConnection = function(e) {
                        var t = this,
                            n = document.createDocumentFragment();
                        if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function(e) {
                                t[e] = n[e].bind(n)
                            }), this.onicecandidate = null, this.onaddstream = null, this.ontrack = null, this.onremovestream = null, this.onsignalingstatechange = null, this.oniceconnectionstatechange = null, this.onnegotiationneeded = null, this.ondatachannel = null, this.localStreams = [], this.remoteStreams = [], this.getLocalStreams = function() {
                                return t.localStreams
                            }, this.getRemoteStreams = function() {
                                return t.remoteStreams
                            }, this.localDescription = new RTCSessionDescription({
                                type: "",
                                sdp: ""
                            }), this.remoteDescription = new RTCSessionDescription({
                                type: "",
                                sdp: ""
                            }), this.signalingState = "stable", this.iceConnectionState = "new", this.iceGatheringState = "new", this.iceOptions = {
                                gatherPolicy: "all",
                                iceServers: []
                            }, e && e.iceTransportPolicy) switch (e.iceTransportPolicy) {
                            case "all":
                            case "relay":
                                this.iceOptions.gatherPolicy = e.iceTransportPolicy;
                                break;
                            case "none":
                                throw new TypeError('iceTransportPolicy "none" not supported')
                        }
                        if (this.usingBundle = e && "max-bundle" === e.bundlePolicy, e && e.iceServers) {
                            var r = JSON.parse(JSON.stringify(e.iceServers));
                            this.iceOptions.iceServers = r.filter(function(e) {
                                if (e && e.urls) {
                                    var t = e.urls;
                                    return "string" == typeof t && (t = [t]), t = t.filter(function(e) {
                                        return 0 === e.indexOf("turn:") && e.indexOf("transport=udp") !== -1
                                    })[0], !!t
                                }
                                return !1
                            })
                        }
                        this.transceivers = [], this._localIceCandidatesBuffer = []
                    }, window.RTCPeerConnection.prototype._emitBufferedCandidates = function() {
                        var e = this,
                            t = r.splitSections(e.localDescription.sdp);
                        this._localIceCandidatesBuffer.forEach(function(n) {
                            var r = !n.candidate || 0 === Object.keys(n.candidate).length;
                            if (r)
                                for (var i = 1; i < t.length; i++) t[i].indexOf("\r\na=end-of-candidates\r\n") === -1 && (t[i] += "a=end-of-candidates\r\n");
                            else n.candidate.candidate.indexOf("typ endOfCandidates") === -1 && (t[n.candidate.sdpMLineIndex + 1] += "a=" + n.candidate.candidate + "\r\n");
                            if (e.localDescription.sdp = t.join(""), e.dispatchEvent(n), null !== e.onicecandidate && e.onicecandidate(n), !n.candidate && "complete" !== e.iceGatheringState) {
                                var a = e.transceivers.every(function(e) {
                                    return e.iceGatherer && "completed" === e.iceGatherer.state
                                });
                                a && (e.iceGatheringState = "complete")
                            }
                        }), this._localIceCandidatesBuffer = []
                    }, window.RTCPeerConnection.prototype.addStream = function(e) {
                        this.localStreams.push(e.clone()), this._maybeFireNegotiationNeeded()
                    }, window.RTCPeerConnection.prototype.removeStream = function(e) {
                        var t = this.localStreams.indexOf(e);
                        t > -1 && (this.localStreams.splice(t, 1), this._maybeFireNegotiationNeeded())
                    }, window.RTCPeerConnection.prototype.getSenders = function() {
                        return this.transceivers.filter(function(e) {
                            return !!e.rtpSender
                        }).map(function(e) {
                            return e.rtpSender
                        })
                    }, window.RTCPeerConnection.prototype.getReceivers = function() {
                        return this.transceivers.filter(function(e) {
                            return !!e.rtpReceiver
                        }).map(function(e) {
                            return e.rtpReceiver
                        })
                    }, window.RTCPeerConnection.prototype._getCommonCapabilities = function(e, t) {
                        var n = {
                            codecs: [],
                            headerExtensions: [],
                            fecMechanisms: []
                        };
                        return e.codecs.forEach(function(e) {
                            for (var r = 0; r < t.codecs.length; r++) {
                                var i = t.codecs[r];
                                if (e.name.toLowerCase() === i.name.toLowerCase() && e.clockRate === i.clockRate && e.numChannels === i.numChannels) {
                                    n.codecs.push(i);
                                    break
                                }
                            }
                        }), e.headerExtensions.forEach(function(e) {
                            for (var r = 0; r < t.headerExtensions.length; r++) {
                                var i = t.headerExtensions[r];
                                if (e.uri === i.uri) {
                                    n.headerExtensions.push(i);
                                    break
                                }
                            }
                        }), n
                    }, window.RTCPeerConnection.prototype._createIceAndDtlsTransports = function(e, t) {
                        var n = this,
                            i = new RTCIceGatherer(n.iceOptions),
                            a = new RTCIceTransport(i);
                        i.onlocalcandidate = function(o) {
                            var s = new Event("icecandidate");
                            s.candidate = {
                                sdpMid: e,
                                sdpMLineIndex: t
                            };
                            var u = o.candidate,
                                c = !u || 0 === Object.keys(u).length;
                            c ? (void 0 === i.state && (i.state = "completed"), s.candidate.candidate = "candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates") : (u.component = "RTCP" === a.component ? 2 : 1, s.candidate.candidate = r.writeCandidate(u));
                            var l = r.splitSections(n.localDescription.sdp);
                            s.candidate.candidate.indexOf("typ endOfCandidates") === -1 ? l[s.candidate.sdpMLineIndex + 1] += "a=" + s.candidate.candidate + "\r\n" : l[s.candidate.sdpMLineIndex + 1] += "a=end-of-candidates\r\n", n.localDescription.sdp = l.join("");
                            var f = n.transceivers.every(function(e) {
                                return e.iceGatherer && "completed" === e.iceGatherer.state
                            });
                            switch (n.iceGatheringState) {
                                case "new":
                                    n._localIceCandidatesBuffer.push(s), c && f && n._localIceCandidatesBuffer.push(new Event("icecandidate"));
                                    break;
                                case "gathering":
                                    n._emitBufferedCandidates(), n.dispatchEvent(s), null !== n.onicecandidate && n.onicecandidate(s), f && (n.dispatchEvent(new Event("icecandidate")), null !== n.onicecandidate && n.onicecandidate(new Event("icecandidate")), n.iceGatheringState = "complete");
                                    break;
                                case "complete":
                            }
                        }, a.onicestatechange = function() {
                            n._updateConnectionState()
                        };
                        var o = new RTCDtlsTransport(a);
                        return o.ondtlsstatechange = function() {
                            n._updateConnectionState()
                        }, o.onerror = function() {
                            o.state = "failed", n._updateConnectionState()
                        }, {
                            iceGatherer: i,
                            iceTransport: a,
                            dtlsTransport: o
                        }
                    }, window.RTCPeerConnection.prototype._transceive = function(e, t, n) {
                        var i = this._getCommonCapabilities(e.localCapabilities, e.remoteCapabilities);
                        t && e.rtpSender && (i.encodings = e.sendEncodingParameters, i.rtcp = {
                            cname: r.localCName
                        }, e.recvEncodingParameters.length && (i.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(i)), n && e.rtpReceiver && (i.encodings = e.recvEncodingParameters, i.rtcp = {
                            cname: e.cname
                        }, e.sendEncodingParameters.length && (i.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(i))
                    }, window.RTCPeerConnection.prototype.setLocalDescription = function(e) {
                        var t, n, i = this;
                        if ("offer" === e.type) this._pendingOffer && (t = r.splitSections(e.sdp), n = t.shift(), t.forEach(function(e, t) {
                            var n = r.parseRtpParameters(e);
                            i._pendingOffer[t].localCapabilities = n
                        }), this.transceivers = this._pendingOffer, delete this._pendingOffer);
                        else if ("answer" === e.type) {
                            t = r.splitSections(i.remoteDescription.sdp), n = t.shift();
                            var a = r.matchPrefix(n, "a=ice-lite").length > 0;
                            t.forEach(function(e, t) {
                                var o = i.transceivers[t],
                                    s = o.iceGatherer,
                                    u = o.iceTransport,
                                    c = o.dtlsTransport,
                                    l = o.localCapabilities,
                                    f = o.remoteCapabilities,
                                    d = "0" === e.split("\n", 1)[0].split(" ", 2)[1];
                                if (!d) {
                                    var h = r.getIceParameters(e, n);
                                    if (a) {
                                        var p = r.matchPrefix(e, "a=candidate:").map(function(e) {
                                            return r.parseCandidate(e)
                                        }).filter(function(e) {
                                            return "1" === e.component
                                        });
                                        p.length && u.setRemoteCandidates(p)
                                    }
                                    var v = r.getDtlsParameters(e, n);
                                    a && (v.role = "server"), i.usingBundle && 0 !== t || (u.start(s, h, a ? "controlling" : "controlled"), c.start(v));
                                    var m = i._getCommonCapabilities(l, f);
                                    i._transceive(o, m.codecs.length > 0, !1)
                                }
                            })
                        }
                        switch (this.localDescription = {
                                type: e.type,
                                sdp: e.sdp
                            }, e.type) {
                            case "offer":
                                this._updateSignalingState("have-local-offer");
                                break;
                            case "answer":
                                this._updateSignalingState("stable");
                                break;
                            default:
                                throw new TypeError('unsupported type "' + e.type + '"')
                        }
                        var o = arguments.length > 1 && "function" == typeof arguments[1];
                        if (o) {
                            var s = arguments[1];
                            window.setTimeout(function() {
                                s(), "new" === i.iceGatheringState && (i.iceGatheringState = "gathering"), i._emitBufferedCandidates()
                            }, 0)
                        }
                        var u = Promise.resolve();
                        return u.then(function() {
                            o || ("new" === i.iceGatheringState && (i.iceGatheringState = "gathering"), window.setTimeout(i._emitBufferedCandidates.bind(i), 500))
                        }), u
                    }, window.RTCPeerConnection.prototype.setRemoteDescription = function(e) {
                        var t = this,
                            n = new MediaStream,
                            i = [],
                            a = r.splitSections(e.sdp),
                            o = a.shift(),
                            s = r.matchPrefix(o, "a=ice-lite").length > 0;
                        switch (this.usingBundle = r.matchPrefix(o, "a=group:BUNDLE ").length > 0, a.forEach(function(a, u) {
                                var c, l, f, d, h, p, v, m, g, y, b, _, w = r.splitLines(a),
                                    E = w[0].substr(2).split(" "),
                                    A = E[0],
                                    x = "0" === E[1],
                                    M = r.getDirection(a, o),
                                    T = r.parseRtpParameters(a);
                                x || (b = r.getIceParameters(a, o), _ = r.getDtlsParameters(a, o), _.role = "client"), m = r.parseRtpEncodingParameters(a);
                                var S = r.matchPrefix(a, "a=mid:");
                                S = S.length ? S[0].substr(6) : r.generateIdentifier();
                                var R, C = r.matchPrefix(a, "a=ssrc:").map(function(e) {
                                    return r.parseSsrcMedia(e)
                                }).filter(function(e) {
                                    return "cname" === e.attribute
                                })[0];
                                C && (R = C.value);
                                var O = r.matchPrefix(a, "a=end-of-candidates").length > 0,
                                    P = r.matchPrefix(a, "a=candidate:").map(function(e) {
                                        return r.parseCandidate(e)
                                    }).filter(function(e) {
                                        return "1" === e.component
                                    });
                                if ("offer" !== e.type || x) "answer" !== e.type || x || (c = t.transceivers[u], l = c.iceGatherer, f = c.iceTransport, d = c.dtlsTransport, h = c.rtpSender, p = c.rtpReceiver, v = c.sendEncodingParameters, g = c.localCapabilities, t.transceivers[u].recvEncodingParameters = m, t.transceivers[u].remoteCapabilities = T, t.transceivers[u].cname = R, (s || O) && P.length && f.setRemoteCandidates(P), t.usingBundle && 0 !== u || (f.start(l, b, "controlling"), d.start(_)), t._transceive(c, "sendrecv" === M || "recvonly" === M, "sendrecv" === M || "sendonly" === M), !p || "sendrecv" !== M && "sendonly" !== M ? delete c.rtpReceiver : (y = p.track, i.push([y, p]), n.addTrack(y)));
                                else {
                                    var k = t.usingBundle && u > 0 ? {
                                        iceGatherer: t.transceivers[0].iceGatherer,
                                        iceTransport: t.transceivers[0].iceTransport,
                                        dtlsTransport: t.transceivers[0].dtlsTransport
                                    } : t._createIceAndDtlsTransports(S, u);
                                    if (O && k.iceTransport.setRemoteCandidates(P), g = RTCRtpReceiver.getCapabilities(A), v = [{
                                            ssrc: 1001 * (2 * u + 2)
                                        }], p = new RTCRtpReceiver(k.dtlsTransport, A), y = p.track, i.push([y, p]), n.addTrack(y), t.localStreams.length > 0 && t.localStreams[0].getTracks().length >= u) {
                                        var I = t.localStreams[0].getTracks()[u];
                                        h = new RTCRtpSender(I, k.dtlsTransport)
                                    }
                                    t.transceivers[u] = {
                                        iceGatherer: k.iceGatherer,
                                        iceTransport: k.iceTransport,
                                        dtlsTransport: k.dtlsTransport,
                                        localCapabilities: g,
                                        remoteCapabilities: T,
                                        rtpSender: h,
                                        rtpReceiver: p,
                                        kind: A,
                                        mid: S,
                                        cname: R,
                                        sendEncodingParameters: v,
                                        recvEncodingParameters: m
                                    }, t._transceive(t.transceivers[u], !1, "sendrecv" === M || "sendonly" === M)
                                }
                            }), this.remoteDescription = {
                                type: e.type,
                                sdp: e.sdp
                            }, e.type) {
                            case "offer":
                                this._updateSignalingState("have-remote-offer");
                                break;
                            case "answer":
                                this._updateSignalingState("stable");
                                break;
                            default:
                                throw new TypeError('unsupported type "' + e.type + '"')
                        }
                        return n.getTracks().length && (t.remoteStreams.push(n), window.setTimeout(function() {
                            var e = new Event("addstream");
                            e.stream = n, t.dispatchEvent(e), null !== t.onaddstream && window.setTimeout(function() {
                                t.onaddstream(e)
                            }, 0), i.forEach(function(r) {
                                var i = r[0],
                                    a = r[1],
                                    o = new Event("track");
                                o.track = i, o.receiver = a, o.streams = [n], t.dispatchEvent(e), null !== t.ontrack && window.setTimeout(function() {
                                    t.ontrack(o)
                                }, 0)
                            })
                        }, 0)), arguments.length > 1 && "function" == typeof arguments[1] && window.setTimeout(arguments[1], 0), Promise.resolve()
                    }, window.RTCPeerConnection.prototype.close = function() {
                        this.transceivers.forEach(function(e) {
                            e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop()
                        }), this._updateSignalingState("closed")
                    }, window.RTCPeerConnection.prototype._updateSignalingState = function(e) {
                        this.signalingState = e;
                        var t = new Event("signalingstatechange");
                        this.dispatchEvent(t), null !== this.onsignalingstatechange && this.onsignalingstatechange(t)
                    }, window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
                        var e = new Event("negotiationneeded");
                        this.dispatchEvent(e), null !== this.onnegotiationneeded && this.onnegotiationneeded(e)
                    }, window.RTCPeerConnection.prototype._updateConnectionState = function() {
                        var e, t = this,
                            n = {
                                new: 0,
                                closed: 0,
                                connecting: 0,
                                checking: 0,
                                connected: 0,
                                completed: 0,
                                failed: 0
                            };
                        if (this.transceivers.forEach(function(e) {
                                n[e.iceTransport.state]++, n[e.dtlsTransport.state]++
                            }), n.connected += n.completed, e = "new", n.failed > 0 ? e = "failed" : n.connecting > 0 || n.checking > 0 ? e = "connecting" : n.disconnected > 0 ? e = "disconnected" : n.new > 0 ? e = "new" : (n.connected > 0 || n.completed > 0) && (e = "connected"), e !== t.iceConnectionState) {
                            t.iceConnectionState = e;
                            var r = new Event("iceconnectionstatechange");
                            this.dispatchEvent(r), null !== this.oniceconnectionstatechange && this.oniceconnectionstatechange(r)
                        }
                    }, window.RTCPeerConnection.prototype.createOffer = function() {
                        var e = this;
                        if (this._pendingOffer) throw new Error("createOffer called while there is a pending offer.");
                        var t;
                        1 === arguments.length && "function" != typeof arguments[0] ? t = arguments[0] : 3 === arguments.length && (t = arguments[2]);
                        var n = [],
                            i = 0,
                            a = 0;
                        if (this.localStreams.length && (i = this.localStreams[0].getAudioTracks().length, a = this.localStreams[0].getVideoTracks().length), t) {
                            if (t.mandatory || t.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                            void 0 !== t.offerToReceiveAudio && (i = t.offerToReceiveAudio), void 0 !== t.offerToReceiveVideo && (a = t.offerToReceiveVideo)
                        }
                        for (this.localStreams.length && this.localStreams[0].getTracks().forEach(function(e) {
                                n.push({
                                    kind: e.kind,
                                    track: e,
                                    wantReceive: "audio" === e.kind ? i > 0 : a > 0
                                }), "audio" === e.kind ? i-- : "video" === e.kind && a--
                            }); i > 0 || a > 0;) i > 0 && (n.push({
                            kind: "audio",
                            wantReceive: !0
                        }), i--), a > 0 && (n.push({
                            kind: "video",
                            wantReceive: !0
                        }), a--);
                        var o = r.writeSessionBoilerplate(),
                            s = [];
                        n.forEach(function(t, n) {
                            var i, a, o = t.track,
                                u = t.kind,
                                c = r.generateIdentifier(),
                                l = e.usingBundle && n > 0 ? {
                                    iceGatherer: s[0].iceGatherer,
                                    iceTransport: s[0].iceTransport,
                                    dtlsTransport: s[0].dtlsTransport
                                } : e._createIceAndDtlsTransports(c, n),
                                f = RTCRtpSender.getCapabilities(u),
                                d = [{
                                    ssrc: 1001 * (2 * n + 1)
                                }];
                            o && (i = new RTCRtpSender(o, l.dtlsTransport)), t.wantReceive && (a = new RTCRtpReceiver(l.dtlsTransport, u)), s[n] = {
                                iceGatherer: l.iceGatherer,
                                iceTransport: l.iceTransport,
                                dtlsTransport: l.dtlsTransport,
                                localCapabilities: f,
                                remoteCapabilities: null,
                                rtpSender: i,
                                rtpReceiver: a,
                                kind: u,
                                mid: c,
                                sendEncodingParameters: d,
                                recvEncodingParameters: null
                            }
                        }), this.usingBundle && (o += "a=group:BUNDLE " + s.map(function(e) {
                            return e.mid
                        }).join(" ") + "\r\n"), n.forEach(function(t, n) {
                            var i = s[n];
                            o += r.writeMediaSection(i, i.localCapabilities, "offer", e.localStreams[0])
                        }), this._pendingOffer = s;
                        var u = new RTCSessionDescription({
                            type: "offer",
                            sdp: o
                        });
                        return arguments.length && "function" == typeof arguments[0] && window.setTimeout(arguments[0], 0, u), Promise.resolve(u)
                    }, window.RTCPeerConnection.prototype.createAnswer = function() {
                        var e = this,
                            t = r.writeSessionBoilerplate();
                        this.usingBundle && (t += "a=group:BUNDLE " + this.transceivers.map(function(e) {
                            return e.mid
                        }).join(" ") + "\r\n"), this.transceivers.forEach(function(n) {
                            var i = e._getCommonCapabilities(n.localCapabilities, n.remoteCapabilities);
                            t += r.writeMediaSection(n, i, "answer", e.localStreams[0])
                        });
                        var n = new RTCSessionDescription({
                            type: "answer",
                            sdp: t
                        });
                        return arguments.length && "function" == typeof arguments[0] && window.setTimeout(arguments[0], 0, n), Promise.resolve(n)
                    }, window.RTCPeerConnection.prototype.addIceCandidate = function(e) {
                        if (null === e) this.transceivers.forEach(function(e) {
                            e.iceTransport.addRemoteCandidate({})
                        });
                        else {
                            var t = e.sdpMLineIndex;
                            if (e.sdpMid)
                                for (var n = 0; n < this.transceivers.length; n++)
                                    if (this.transceivers[n].mid === e.sdpMid) {
                                        t = n;
                                        break
                                    } var i = this.transceivers[t];
                            if (i) {
                                var a = Object.keys(e.candidate).length > 0 ? r.parseCandidate(e.candidate) : {};
                                if ("tcp" === a.protocol && 0 === a.port) return;
                                if ("1" !== a.component) return;
                                "endOfCandidates" === a.type && (a = {}), i.iceTransport.addRemoteCandidate(a);
                                var o = r.splitSections(this.remoteDescription.sdp);
                                o[t + 1] += (a.type ? e.candidate.trim() : "a=end-of-candidates") + "\r\n", this.remoteDescription.sdp = o.join("")
                            }
                        }
                        return arguments.length > 1 && "function" == typeof arguments[1] && window.setTimeout(arguments[1], 0), Promise.resolve()
                    }, window.RTCPeerConnection.prototype.getStats = function() {
                        var e = [];
                        this.transceivers.forEach(function(t) {
                            ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function(n) {
                                t[n] && e.push(t[n].getStats())
                            })
                        });
                        var t = arguments.length > 1 && "function" == typeof arguments[1] && arguments[1];
                        return new Promise(function(n) {
                            var r = new Map;
                            Promise.all(e).then(function(e) {
                                e.forEach(function(e) {
                                    Object.keys(e).forEach(function(t) {
                                        r.set(t, e[t]), r[t] = e[t]
                                    })
                                }), t && window.setTimeout(t, 0, r), n(r)
                            })
                        })
                    }
                },
                attachMediaStream: function(e, t) {
                    i("DEPRECATED, attachMediaStream will soon be removed."), e.srcObject = t
                },
                reattachMediaStream: function(e, t) {
                    i("DEPRECATED, reattachMediaStream will soon be removed."), e.srcObject = t.srcObject
                }
            };
        e.exports = {
            shimPeerConnection: a.shimPeerConnection,
            shimGetUserMedia: n(13),
            attachMediaStream: a.attachMediaStream,
            reattachMediaStream: a.reattachMediaStream
        }
    }, function(e, t) {
        "use strict";
        var n = {};
        n.generateIdentifier = function() {
            return Math.random().toString(36).substr(2, 10)
        }, n.localCName = n.generateIdentifier(), n.splitLines = function(e) {
            return e.trim().split("\n").map(function(e) {
                return e.trim()
            })
        }, n.splitSections = function(e) {
            var t = e.split("\nm=");
            return t.map(function(e, t) {
                return (t > 0 ? "m=" + e : e).trim() + "\r\n"
            })
        }, n.matchPrefix = function(e, t) {
            return n.splitLines(e).filter(function(e) {
                return 0 === e.indexOf(t)
            })
        }, n.parseCandidate = function(e) {
            var t;
            t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" ");
            for (var n = {
                    foundation: t[0],
                    component: t[1],
                    protocol: t[2].toLowerCase(),
                    priority: parseInt(t[3], 10),
                    ip: t[4],
                    port: parseInt(t[5], 10),
                    type: t[7]
                }, r = 8; r < t.length; r += 2) switch (t[r]) {
                case "raddr":
                    n.relatedAddress = t[r + 1];
                    break;
                case "rport":
                    n.relatedPort = parseInt(t[r + 1], 10);
                    break;
                case "tcptype":
                    n.tcpType = t[r + 1];
                    break;
                default:
                    n[t[r]] = t[r + 1]
            }
            return n
        }, n.writeCandidate = function(e) {
            var t = [];
            t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.ip), t.push(e.port);
            var n = e.type;
            return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), "candidate:" + t.join(" ")
        }, n.parseIceOptions = function(e) {
            return e.substr(14).split(" ")
        }, n.parseRtpMap = function(e) {
            var t = e.substr(9).split(" "),
                n = {
                    payloadType: parseInt(t.shift(), 10)
                };
            return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.numChannels = 3 === t.length ? parseInt(t[2], 10) : 1, n
        }, n.writeRtpMap = function(e) {
            var t = e.payloadType;
            return void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType), "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== e.numChannels ? "/" + e.numChannels : "") + "\r\n"
        }, n.parseExtmap = function(e) {
            var t = e.substr(9).split(" ");
            return {
                id: parseInt(t[0], 10),
                direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                uri: t[1]
            }
        }, n.writeExtmap = function(e) {
            return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
        }, n.parseFmtp = function(e) {
            for (var t, n = {}, r = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < r.length; i++) t = r[i].trim().split("="), n[t[0].trim()] = t[1];
            return n
        }, n.writeFmtp = function(e) {
            var t = "",
                n = e.payloadType;
            if (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
                var r = [];
                Object.keys(e.parameters).forEach(function(t) {
                    r.push(t + "=" + e.parameters[t])
                }), t += "a=fmtp:" + n + " " + r.join(";") + "\r\n"
            }
            return t
        }, n.parseRtcpFb = function(e) {
            var t = e.substr(e.indexOf(" ") + 1).split(" ");
            return {
                type: t.shift(),
                parameter: t.join(" ")
            }
        }, n.writeRtcpFb = function(e) {
            var t = "",
                n = e.payloadType;
            return void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function(e) {
                t += "a=rtcp-fb:" + n + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
            }), t
        }, n.parseSsrcMedia = function(e) {
            var t = e.indexOf(" "),
                n = {
                    ssrc: parseInt(e.substr(7, t - 7), 10)
                },
                r = e.indexOf(":", t);
            return r > -1 ? (n.attribute = e.substr(t + 1, r - t - 1), n.value = e.substr(r + 1)) : n.attribute = e.substr(t + 1), n
        }, n.getMid = function(e) {
            var t = n.matchPrefix(e, "a=mid:")[0];
            if (t) return t.substr(6)
        }, n.parseFingerprint = function(e) {
            var t = e.substr(14).split(" ");
            return {
                algorithm: t[0].toLowerCase(),
                value: t[1]
            }
        }, n.getDtlsParameters = function(e, t) {
            var r = n.matchPrefix(e + t, "a=fingerprint:");
            return {
                role: "auto",
                fingerprints: r.map(n.parseFingerprint)
            }
        }, n.writeDtlsParameters = function(e, t) {
            var n = "a=setup:" + t + "\r\n";
            return e.fingerprints.forEach(function(e) {
                n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
            }), n
        }, n.getIceParameters = function(e, t) {
            var r = n.splitLines(e);
            r = r.concat(n.splitLines(t));
            var i = {
                usernameFragment: r.filter(function(e) {
                    return 0 === e.indexOf("a=ice-ufrag:")
                })[0].substr(12),
                password: r.filter(function(e) {
                    return 0 === e.indexOf("a=ice-pwd:")
                })[0].substr(10)
            };
            return i
        }, n.writeIceParameters = function(e) {
            return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
        }, n.parseRtpParameters = function(e) {
            for (var t = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: [],
                    rtcp: []
                }, r = n.splitLines(e), i = r[0].split(" "), a = 3; a < i.length; a++) {
                var o = i[a],
                    s = n.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
                if (s) {
                    var u = n.parseRtpMap(s),
                        c = n.matchPrefix(e, "a=fmtp:" + o + " ");
                    switch (u.parameters = c.length ? n.parseFmtp(c[0]) : {}, u.rtcpFeedback = n.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(n.parseRtcpFb), t.codecs.push(u), u.name.toUpperCase()) {
                        case "RED":
                        case "ULPFEC":
                            t.fecMechanisms.push(u.name.toUpperCase())
                    }
                }
            }
            return n.matchPrefix(e, "a=extmap:").forEach(function(e) {
                t.headerExtensions.push(n.parseExtmap(e))
            }), t
        }, n.writeRtpDescription = function(e, t) {
            var r = "";
            r += "m=" + e + " ", r += t.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += t.codecs.map(function(e) {
                return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
            }).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach(function(e) {
                r += n.writeRtpMap(e), r += n.writeFmtp(e), r += n.writeRtcpFb(e)
            });
            var i = 0;
            return t.codecs.forEach(function(e) {
                e.maxptime > i && (i = e.maxptime)
            }), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", t.headerExtensions.forEach(function(e) {
                r += n.writeExtmap(e)
            }), r
        }, n.parseRtpEncodingParameters = function(e) {
            var t, r = [],
                i = n.parseRtpParameters(e),
                a = i.fecMechanisms.indexOf("RED") !== -1,
                o = i.fecMechanisms.indexOf("ULPFEC") !== -1,
                s = n.matchPrefix(e, "a=ssrc:").map(function(e) {
                    return n.parseSsrcMedia(e)
                }).filter(function(e) {
                    return "cname" === e.attribute
                }),
                u = s.length > 0 && s[0].ssrc,
                c = n.matchPrefix(e, "a=ssrc-group:FID").map(function(e) {
                    var t = e.split(" ");
                    return t.shift(), t.map(function(e) {
                        return parseInt(e, 10)
                    })
                });
            c.length > 0 && c[0].length > 1 && c[0][0] === u && (t = c[0][1]), i.codecs.forEach(function(e) {
                if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                    var n = {
                        ssrc: u,
                        codecPayloadType: parseInt(e.parameters.apt, 10),
                        rtx: {
                            ssrc: t
                        }
                    };
                    r.push(n), a && (n = JSON.parse(JSON.stringify(n)), n.fec = {
                        ssrc: t,
                        mechanism: o ? "red+ulpfec" : "red"
                    }, r.push(n))
                }
            }), 0 === r.length && u && r.push({
                ssrc: u
            });
            var l = n.matchPrefix(e, "b=");
            return l.length && (0 === l[0].indexOf("b=TIAS:") ? l = parseInt(l[0].substr(7), 10) : 0 === l[0].indexOf("b=AS:") && (l = parseInt(l[0].substr(5), 10)), r.forEach(function(e) {
                e.maxBitrate = l
            })), r
        }, n.parseRtcpParameters = function(e) {
            var t = {},
                r = n.matchPrefix(e, "a=ssrc:").map(function(e) {
                    return n.parseSsrcMedia(e)
                }).filter(function(e) {
                    return "cname" === e.attribute
                })[0];
            r && (t.cname = r.value, t.ssrc = r.ssrc);
            var i = n.matchPrefix(e, "a=rtcp-rsize");
            t.reducedSize = i.length > 0, t.compound = 0 === i.length;
            var a = n.matchPrefix(e, "a=rtcp-mux");
            return t.mux = a.length > 0, t
        }, n.parseMsid = function(e) {
            var t, r = n.matchPrefix(e, "a=msid:");
            if (1 === r.length) return t = r[0].substr(7).split(" "), {
                stream: t[0],
                track: t[1]
            };
            var i = n.matchPrefix(e, "a=ssrc:").map(function(e) {
                return n.parseSsrcMedia(e)
            }).filter(function(e) {
                return "msid" === e.attribute
            });
            return i.length > 0 ? (t = i[0].value.split(" "), {
                stream: t[0],
                track: t[1]
            }) : void 0
        }, n.writeSessionBoilerplate = function() {
            return "v=0\r\no=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
        }, n.writeMediaSection = function(e, t, r, i) {
            var a = n.writeRtpDescription(e.kind, t);
            if (a += n.writeIceParameters(e.iceGatherer.getLocalParameters()), a += n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), a += "a=mid:" + e.mid + "\r\n", a += e.direction ? "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? "a=sendrecv\r\n" : e.rtpSender ? "a=sendonly\r\n" : e.rtpReceiver ? "a=recvonly\r\n" : "a=inactive\r\n", e.rtpSender) {
                var o = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
                a += "a=" + o, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + o, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + o, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
            }
            return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"), a
        }, n.getDirection = function(e, t) {
            for (var r = n.splitLines(e), i = 0; i < r.length; i++) switch (r[i]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                    return r[i].substr(2)
            }
            return t ? n.getDirection(t) : "sendrecv"
        }, n.getKind = function(e) {
            var t = n.splitLines(e),
                r = t[0].split(" ");
            return r[0].substr(2)
        }, n.isRejected = function(e) {
            return "0" === e.split(" ", 2)[1]
        }, e.exports = n
    }, function(e, t) {
        "use strict";
        e.exports = function() {
            var e = function(e) {
                    return {
                        name: {
                            PermissionDeniedError: "NotAllowedError"
                        } [e.name] || e.name,
                        message: e.message,
                        constraint: e.constraint,
                        toString: function() {
                            return this.name
                        }
                    }
                },
                t = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
            navigator.mediaDevices.getUserMedia = function(n) {
                return t(n).catch(function(t) {
                    return Promise.reject(e(t))
                })
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(8).log,
            i = n(8).browserDetails,
            a = {
                shimOnTrack: function() {
                    "object" != typeof window || !window.RTCPeerConnection || "ontrack" in window.RTCPeerConnection.prototype || Object.defineProperty(window.RTCPeerConnection.prototype, "ontrack", {
                        get: function() {
                            return this._ontrack
                        },
                        set: function(e) {
                            this._ontrack && (this.removeEventListener("track", this._ontrack), this.removeEventListener("addstream", this._ontrackpoly)), this.addEventListener("track", this._ontrack = e), this.addEventListener("addstream", this._ontrackpoly = function(e) {
                                e.stream.getTracks().forEach(function(t) {
                                    var n = new Event("track");
                                    n.track = t, n.receiver = {
                                        track: t
                                    }, n.streams = [e.stream], this.dispatchEvent(n)
                                }.bind(this))
                            }.bind(this))
                        }
                    })
                },
                shimSourceObject: function() {
                    "object" == typeof window && (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype || Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
                        get: function() {
                            return this.mozSrcObject
                        },
                        set: function(e) {
                            this.mozSrcObject = e
                        }
                    }))
                },
                shimPeerConnection: function() {
                    if ("object" == typeof window && (window.RTCPeerConnection || window.mozRTCPeerConnection)) {
                        window.RTCPeerConnection || (window.RTCPeerConnection = function(e, t) {
                            if (i.version < 38 && e && e.iceServers) {
                                for (var n = [], r = 0; r < e.iceServers.length; r++) {
                                    var a = e.iceServers[r];
                                    if (a.hasOwnProperty("urls"))
                                        for (var o = 0; o < a.urls.length; o++) {
                                            var s = {
                                                url: a.urls[o]
                                            };
                                            0 === a.urls[o].indexOf("turn") && (s.username = a.username, s.credential = a.credential), n.push(s)
                                        } else n.push(e.iceServers[r])
                                }
                                e.iceServers = n
                            }
                            return new mozRTCPeerConnection(e, t)
                        }, window.RTCPeerConnection.prototype = mozRTCPeerConnection.prototype, mozRTCPeerConnection.generateCertificate && Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
                            get: function() {
                                return mozRTCPeerConnection.generateCertificate
                            }
                        }), window.RTCSessionDescription = mozRTCSessionDescription, window.RTCIceCandidate = mozRTCIceCandidate), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(e) {
                            var t = RTCPeerConnection.prototype[e];
                            RTCPeerConnection.prototype[e] = function() {
                                return arguments[0] = new("addIceCandidate" === e ? RTCIceCandidate : RTCSessionDescription)(arguments[0]), t.apply(this, arguments)
                            }
                        });
                        var e = RTCPeerConnection.prototype.addIceCandidate;
                        RTCPeerConnection.prototype.addIceCandidate = function() {
                            return null === arguments[0] ? Promise.resolve() : e.apply(this, arguments)
                        };
                        var t = function(e) {
                                var t = new Map;
                                return Object.keys(e).forEach(function(n) {
                                    t.set(n, e[n]), t[n] = e[n]
                                }), t
                            },
                            n = RTCPeerConnection.prototype.getStats;
                        RTCPeerConnection.prototype.getStats = function(e, r, i) {
                            return n.apply(this, [e || null]).then(function(e) {
                                return t(e)
                            }).then(r, i)
                        }
                    }
                },
                attachMediaStream: function(e, t) {
                    r("DEPRECATED, attachMediaStream will soon be removed."), e.srcObject = t
                },
                reattachMediaStream: function(e, t) {
                    r("DEPRECATED, reattachMediaStream will soon be removed."), e.srcObject = t.srcObject
                }
            };
        e.exports = {
            shimOnTrack: a.shimOnTrack,
            shimSourceObject: a.shimSourceObject,
            shimPeerConnection: a.shimPeerConnection,
            shimGetUserMedia: n(15),
            attachMediaStream: a.attachMediaStream,
            reattachMediaStream: a.reattachMediaStream
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(8).log,
            i = n(8).browserDetails;
        e.exports = function() {
            var e = function(e) {
                    return {
                        name: {
                            SecurityError: "NotAllowedError",
                            PermissionDeniedError: "NotAllowedError"
                        } [e.name] || e.name,
                        message: {
                            "The operation is insecure.": "The request is not allowed by the user agent or the platform in the current context."
                        } [e.message] || e.message,
                        constraint: e.constraint,
                        toString: function() {
                            return this.name + (this.message && ": ") + this.message
                        }
                    }
                },
                t = function(t, n, a) {
                    var o = function(e) {
                        if ("object" != typeof e || e.require) return e;
                        var t = [];
                        return Object.keys(e).forEach(function(n) {
                            if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                                var r = e[n] = "object" == typeof e[n] ? e[n] : {
                                    ideal: e[n]
                                };
                                if (void 0 === r.min && void 0 === r.max && void 0 === r.exact || t.push(n), void 0 !== r.exact && ("number" == typeof r.exact ? r.min = r.max = r.exact : e[n] = r.exact, delete r.exact), void 0 !== r.ideal) {
                                    e.advanced = e.advanced || [];
                                    var i = {};
                                    "number" == typeof r.ideal ? i[n] = {
                                        min: r.ideal,
                                        max: r.ideal
                                    } : i[n] = r.ideal, e.advanced.push(i), delete r.ideal, Object.keys(r).length || delete e[n]
                                }
                            }
                        }), t.length && (e.require = t), e
                    };
                    return t = JSON.parse(JSON.stringify(t)), i.version < 38 && (r("spec: " + JSON.stringify(t)), t.audio && (t.audio = o(t.audio)), t.video && (t.video = o(t.video)), r("ff37: " + JSON.stringify(t))), navigator.mozGetUserMedia(t, n, function(t) {
                        a(e(t))
                    })
                },
                n = function(e) {
                    return new Promise(function(n, r) {
                        t(e, n, r)
                    })
                };
            if (navigator.mediaDevices || (navigator.mediaDevices = {
                    getUserMedia: n,
                    addEventListener: function() {},
                    removeEventListener: function() {}
                }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function() {
                    return new Promise(function(e) {
                        var t = [{
                            kind: "audioinput",
                            deviceId: "default",
                            label: "",
                            groupId: ""
                        }, {
                            kind: "videoinput",
                            deviceId: "default",
                            label: "",
                            groupId: ""
                        }];
                        e(t)
                    })
                }, i.version < 41) {
                var a = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
                navigator.mediaDevices.enumerateDevices = function() {
                    return a().then(void 0, function(e) {
                        if ("NotFoundError" === e.name) return [];
                        throw e
                    })
                }
            }
            if (i.version < 49) {
                var o = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                navigator.mediaDevices.getUserMedia = function(t) {
                    return o(t).catch(function(t) {
                        return Promise.reject(e(t))
                    })
                }
            }
            navigator.getUserMedia = function(e, n, r) {
                return i.version < 44 ? t(e, n, r) : (console.warn("navigator.getUserMedia has been replaced by navigator.mediaDevices.getUserMedia"), void navigator.mediaDevices.getUserMedia(e).then(n, r))
            }
        }
    }, function(e, t) {
        "use strict";
        var n = {
            shimGetUserMedia: function() {
                navigator.getUserMedia = navigator.webkitGetUserMedia
            }
        };
        e.exports = {
            shimGetUserMedia: n.shimGetUserMedia
        }
    }, function(e, t) {
        function n(e, t, i) {
            if (!(this instanceof n)) return new n(e, t, i);
            if (t instanceof r || (i = t, t = null), i = i || {}, this.ctx = t = t || new r, e instanceof AudioNode || (e = e instanceof Audio || e instanceof HTMLAudioElement ? t.createMediaElementSource(e) : t.createMediaStreamSource(e)), this.analyser = t.createAnalyser(), this.stereo = !!i.stereo, this.audible = i.audible !== !1, this.wavedata = null, this.freqdata = null, this.splitter = null, this.merger = null, this.source = e, this.stereo) {
                this.analyser = [this.analyser], this.analyser.push(t.createAnalyser()), this.splitter = t.createChannelSplitter(2), this.merger = t.createChannelMerger(2), this.output = this.merger, this.source.connect(this.splitter);
                for (var a = 0; a < 2; a++) this.splitter.connect(this.analyser[a], a, 0), this.analyser[a].connect(this.merger, 0, a);
                this.audible && this.merger.connect(t.destination)
            } else this.output = this.source, this.source.connect(this.analyser), this.audible && this.analyser.connect(t.destination)
        }
        var r = window.AudioContext || window.webkitAudioContext;
        e.exports = n, n.prototype.waveform = function(e, t) {
            e || (e = this.wavedata || (this.wavedata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount)));
            var n = this.stereo ? this.analyser[t || 0] : this.analyser;
            return n.getByteTimeDomainData(e), e
        }, n.prototype.frequencies = function(e, t) {
            e || (e = this.freqdata || (this.freqdata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount)));
            var n = this.stereo ? this.analyser[t || 0] : this.analyser;
            return n.getByteFrequencyData(e), e
        }
    }, function(e, t, n) {
        function r(e) {
            if (e) throw e
        }

        function i(e, t) {
            l || (u(".npm-scb-wrap {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.npm-scb-wrap a {\n  text-decoration: none;\n  color: #000;\n}\n.npm-scb-white\n.npm-scb-wrap a {\n  color: #fff;\n}\n\n.npm-scb-inner {\n  position: absolute;\n  top: -120px; left: 0;\n  padding: 8px;\n  width: 100%;\n  height: 150px;\n  z-index: 2;\n  -webkit-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n     -moz-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n      -ms-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n       -o-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n          transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n}\n.npm-scb-wrap:hover\n.npm-scb-inner {\n  top: 0;\n}\n\n.npm-scb-artwork {\n  position: absolute;\n  top: 16px; left: 16px;\n  width: 104px; height: 104px;\n  box-shadow: 0 0 8px -3px #000;\n  outline: 1px solid rgba(0,0,0,0.1);\n  z-index: 2;\n}\n.npm-scb-white\n.npm-scb-artwork {\n  outline: 1px solid rgba(255,255,255,0.1);\n  box-shadow: 0 0 10px -2px rgba(255,255,255,0.9);\n}\n\n.npm-scb-info {\n  position: absolute;\n  top: 16px;\n  left: 120px;\n  width: 300px;\n  z-index: 1;\n}\n\n.npm-scb-info > a {\n  display: block;\n}\n\n.npm-scb-now-playing {\n  font-size: 12px;\n  line-height: 12px;\n  position: absolute;\n  width: 500px;\n  z-index: 1;\n  padding: 15px 0;\n  top: 0; left: 138px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s;\n     -moz-transition: opacity 0.25s;\n      -ms-transition: opacity 0.25s;\n       -o-transition: opacity 0.25s;\n          transition: opacity 0.25s;\n}\n\n.npm-scb-wrap:hover\n.npm-scb-now-playing {\n  opacity: 0;\n}\n\n.npm-scb-white\n.npm-scb-now-playing {\n  color: #fff;\n}\n.npm-scb-now-playing > a {\n  font-weight: bold;\n}\n\n.npm-scb-info > a > p {\n  margin: 0;\n  padding-bottom: 0.25em;\n  line-height: 1.35em;\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.npm-scb-title {\n  font-weight: bold;\n}\n\n.npm-scb-icon {\n  position: absolute;\n  top: 120px;\n  padding-top: 0.75em;\n  left: 16px;\n}\n"), l = !0), d || (d = s.compile('<div class="npm-scb-wrap">\n  <div class="npm-scb-inner">\n    <a target="_blank" href="{{!urls.song}}">\n      <img class="npm-scb-icon" src="{{!icon}}">\n      <img class="npm-scb-artwork" src="{{!artwork}}">\n    </a>\n    <div class="npm-scb-info">\n      <a target="_blank" href="{{!urls.song}}">\n        <p class="npm-scb-title">{{!title}}</p>\n      </a>\n      <a target="_blank" href="{{!urls.artist}}">\n        <p class="npm-scb-artist">{{!artist}}</p>\n      </a>\n    </div>\n  </div>\n  <div class="npm-scb-now-playing">\n    Now Playing:\n    <a href="{{!urls.song}}">{{!title}}</a>\n    by\n    <a href="{{!urls.artist}}">{{!artist}}</a>\n  </div>\n</div>')), !f && e.getFonts && (o.add({
                "Open Sans": [300, 600]
            }), f = !0), e = e || {}, t = t || r;
            var n = e.el || document.createElement("div"),
                i = "dark" in e && !e.dark ? "white" : "black",
                h = e.client_id,
                p = e.song;
            return a(h, p, function(e, r) {
                if (e) return t(e);
                if ("track" !== r.kind) throw new Error("soundcloud-badge only supports individual tracks at the moment");
                n.classList["black" === i ? "remove" : "add"]("npm-scb-white"), n.innerHTML = d({
                    artwork: r.artwork_url || r.user.avatar_url,
                    artist: r.user.username,
                    title: r.title,
                    icon: c[i],
                    urls: {
                        song: r.permalink_url,
                        artist: r.user.permalink_url
                    }
                }), document.body.appendChild(n), t(null, r.stream_url + "?client_id=" + h, r, n)
            }), n
        }
        var a = n(19),
            o = n(26),
            s = n(27),
            u = n(28),
            c = (n(29), {
                black: "https://developers.soundcloud.com/assets/logo_black.png",
                white: "https://developers.soundcloud.com/assets/logo_white.png"
            });
        e.exports = i;
        var l = !1,
            f = !1,
            d = null
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = "https://api.soundcloud.com/resolve.json?" + i.stringify({
                url: t,
                client_id: e
            });
            a({
                uri: r,
                method: "GET"
            }, function(t, r, i) {
                if (t) return n(t);
                try {
                    i = JSON.parse(i)
                } catch (e) {
                    return n(e)
                }
                if (i.errors) return n(new Error(i.errors[0].error_message));
                var a = "track" === i.kind && i.stream_url + "?client_id=" + e;
                return n(null, i, a)
            })
        }
        var i = n(20),
            a = n(23);
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        t.decode = t.parse = n(21), t.encode = t.stringify = n(22)
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        e.exports = function(e, t, r, i) {
            t = t || "&", r = r || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length) return a;
            var o = /\+/g;
            e = e.split(t);
            var s = 1e3;
            i && "number" == typeof i.maxKeys && (s = i.maxKeys);
            var u = e.length;
            s > 0 && u > s && (u = s);
            for (var c = 0; c < u; ++c) {
                var l, f, d, h, p = e[c].replace(o, "%20"),
                    v = p.indexOf(r);
                v >= 0 ? (l = p.substr(0, v), f = p.substr(v + 1)) : (l = p, f = ""), d = decodeURIComponent(l), h = decodeURIComponent(f), n(a, d) ? Array.isArray(a[d]) ? a[d].push(h) : a[d] = [a[d], h] : a[d] = h
            }
            return a
        }
    }, function(e, t) {
        "use strict";
        var n = function(e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        e.exports = function(e, t, r, i) {
            return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function(i) {
                var a = encodeURIComponent(n(i)) + r;
                return Array.isArray(e[i]) ? e[i].map(function(e) {
                    return a + encodeURIComponent(n(e))
                }).join(t) : a + encodeURIComponent(n(e[i]))
            }).join(t) : i ? encodeURIComponent(n(i)) + r + encodeURIComponent(n(e)) : ""
        }
    }, function(e, t, n) {
        function r(e, t) {
            function n() {
                4 === l.readyState && r()
            }

            function r() {
                var e = null,
                    n = l.statusCode = l.status,
                    r = l.body = l.response || l.responseText || l.responseXML;
                if (0 === n || n >= 400 && n < 600) {
                    var i = l.responseText || s[String(l.status).charAt(0)];
                    e = new Error(i), e.statusCode = l.status
                }
                if (v) try {
                    r = l.body = JSON.parse(r)
                } catch (e) {}
                t(e, l, r)
            }

            function a(e) {
                t(e, l)
            }
            "string" == typeof e && (e = {
                uri: e
            }), e = e || {}, t = o(t);
            var l;
            l = e.cors ? new c : new u;
            var f = l.url = e.uri,
                d = l.method = e.method || "GET",
                h = e.body || e.data,
                p = l.headers = e.headers || {},
                v = !1;
            return "json" in e && (v = !0, p["Content-Type"] = "application/json", h = JSON.stringify(e.json)), l.onreadystatechange = n, l.onload = r, l.onerror = a, l.onprogress = function() {}, l.ontimeout = i, l.open(d, f), e.cors && (l.withCredentials = !0), l.timeout = "timeout" in e ? e.timeout : 5e3, l.setRequestHeader && Object.keys(p).forEach(function(e) {
                l.setRequestHeader(e, p[e])
            }), l.send(h), l
        }

        function i() {}
        var a = n(24),
            o = n(25),
            s = {
                0: "Internal XMLHttpRequest Error",
                4: "4xx Client Error",
                5: "5xx Server Error"
            },
            u = a.XMLHttpRequest || i,
            c = "withCredentials" in new u ? a.XMLHttpRequest : a.XDomainRequest;
        e.exports = r
    }, function(e, t) {
        (function(t) {
            "undefined" != typeof window ? e.exports = window : "undefined" != typeof t ? e.exports = t : e.exports = {}
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        function n(e) {
            var t = !1;
            return function() {
                if (!t) return t = !0, e.apply(this, arguments)
            }
        }
        e.exports = n, n.proto = n(function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return n(this)
                },
                configurable: !0
            })
        })
    }, function(e, t) {
        function n(e) {
            var t = i(e);
            return '<link href="' + t + '" rel="stylesheet" type="text/css">'
        }

        function r(e) {
            var t = i(e),
                n = document.createElement("link");
            return n.setAttribute("href", t), n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n
        }

        function i(e) {
            var t = Object.keys(e).map(function(t) {
                var n = e[t];
                return t = t.replace(/\s+/, "+"), "boolean" == typeof n ? t : t + ":" + o(n).join(",")
            }).join("|");
            return "http://fonts.googleapis.com/css?family=" + t
        }

        function a(e) {
            var t = r(e);
            return document.head.appendChild(t), t
        }

        function o(e) {
            return Array.isArray(e) ? e : [e]
        }
        e.exports = n, e.exports.add = a
    }, function(e, t) {
        function n(e, t) {
            t = t || {};
            var n = r(e);
            return n(t)
        }

        function r(e) {
            for (var t, n = [], r = a(e), c = 0; c < r.length; ++c)
                if (t = r[c], c % 2 == 0) n.push('"' + t.replace(/"/g, '\\"') + '"');
                else switch (t[0]) {
                    case "/":
                        t = t.slice(1), n.push(") + ");
                        break;
                    case "^":
                        t = t.slice(1), i(t), n.push(' + section(obj, "' + t + '", true, ');
                        break;
                    case "#":
                        t = t.slice(1), i(t), n.push(' + section(obj, "' + t + '", false, ');
                        break;
                    case "!":
                        t = t.slice(1), i(t), n.push(" + obj." + t + " + ");
                        break;
                    default:
                        i(t), n.push(" + escape(obj." + t + ") + ")
                }
            return n = "\n" + o(u.toString()) + ";\n\n" + o(s.toString()) + ";\n\n  return " + n.join("").replace(/\n/g, "\\n"), new Function("obj", n)
        }

        function i(e) {
            if (!e.match(/^[\w.]+$/)) throw new Error('invalid property "' + e + '"')
        }

        function a(e) {
            return e.split(/\{\{|\}\}/)
        }

        function o(e) {
            return e.replace(/^/gm, "  ")
        }

        function s(e, t, n, r) {
            var i = e[t];
            return "function" == typeof i ? i.call(e, r) : (n && (i = !i), i ? r : "")
        }

        function u(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        t = e.exports = n, t.compile = r
    }, function(e, t) {
        var n = [];
        e.exports = function(e) {
            if (!(n.indexOf(e) >= 0)) {
                n.push(e);
                var t = document.createElement("style"),
                    r = document.createTextNode(e);
                t.appendChild(r), document.head.childNodes.length ? document.head.insertBefore(t, document.head.childNodes[0]) : document.head.appendChild(t)
            }
        }
    }, function(e, t) {}, function(e, t) {
        function n(e, t, n) {
            t = t || e.currentTarget || e.srcElement, Array.isArray(n) || (n = [0, 0]);
            var i = e.clientX || 0,
                a = e.clientY || 0,
                o = r(t);
            return n[0] = i - o.left, n[1] = a - o.top, n
        }

        function r(e) {
            return e === window || e === document || e === document.body ? i : e.getBoundingClientRect()
        }
        var i = {
            left: 0,
            top: 0
        };
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = !0,
                s = !0;
            if ("function" != typeof e) throw new TypeError(o);
            return a(n) && (r = "leading" in n ? !!n.leading : r, s = "trailing" in n ? !!n.trailing : s), i(e, t, {
                leading: r,
                maxWait: t,
                trailing: s
            })
        }
        var i = n(32),
            a = n(33),
            o = "Expected a function";
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            function r(t) {
                var n = y,
                    r = b;
                return y = b = void 0, x = t, w = e.apply(r, n)
            }

            function l(e) {
                return x = e, E = setTimeout(h, t), M ? r(e) : w
            }

            function f(e) {
                var n = e - A,
                    r = e - x,
                    i = t - n;
                return T ? c(i, _ - r) : i
            }

            function d(e) {
                var n = e - A,
                    r = e - x;
                return void 0 === A || n >= t || n < 0 || T && r >= _
            }

            function h() {
                var e = a();
                return d(e) ? p(e) : void(E = setTimeout(h, f(e)))
            }

            function p(e) {
                return E = void 0, S && y ? r(e) : (y = b = void 0, w)
            }

            function v() {
                void 0 !== E && clearTimeout(E), x = 0, y = A = b = E = void 0
            }

            function m() {
                return void 0 === E ? w : p(a())
            }

            function g() {
                var e = a(),
                    n = d(e);
                if (y = arguments, b = this, A = e, n) {
                    if (void 0 === E) return l(A);
                    if (T) return clearTimeout(E), E = setTimeout(h, t), r(A)
                }
                return void 0 === E && (E = setTimeout(h, t)), w
            }
            var y, b, _, w, E, A, x = 0,
                M = !1,
                T = !1,
                S = !0;
            if ("function" != typeof e) throw new TypeError(s);
            return t = o(t) || 0, i(n) && (M = !!n.leading, T = "maxWait" in n, _ = T ? u(o(n.maxWait) || 0, t) : _, S = "trailing" in n ? !!n.trailing : S), g.cancel = v, g.flush = m, g
        }
        var i = n(33),
            a = n(34),
            o = n(37),
            s = "Expected a function",
            u = Math.max,
            c = Math.min;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(35),
            i = function() {
                return r.Date.now()
            };
        e.exports = i
    }, function(e, t, n) {
        var r = n(36),
            i = "object" == typeof self && self && self.Object === Object && self,
            a = r || i || Function("return this")();
        e.exports = a
    }, function(e, t) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        function r(e) {
            if ("number" == typeof e) return e;
            if (a(e)) return o;
            if (i(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = i(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, "");
            var n = c.test(e);
            return n || l.test(e) ? f(e.slice(2), n ? 2 : 8) : u.test(e) ? o : +e
        }
        var i = n(33),
            a = n(38),
            o = NaN,
            s = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            f = parseInt;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return "symbol" == typeof e || a(e) && i(e) == o
        }
        var i = n(39),
            a = n(43),
            o = "[object Symbol]";
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return null == e ? void 0 === e ? u : s : c && c in Object(e) ? a(e) : o(e)
        }
        var i = n(40),
            a = n(41),
            o = n(42),
            s = "[object Null]",
            u = "[object Undefined]",
            c = i ? i.toStringTag : void 0;
        e.exports = r
    }, function(e, t, n) {
        var r = n(35),
            i = r.Symbol;
        e.exports = i
    }, function(e, t, n) {
        function r(e) {
            var t = o.call(e, u),
                n = e[u];
            try {
                e[u] = void 0;
                var r = !0
            } catch (e) {}
            var i = s.call(e);
            return r && (t ? e[u] = n : delete e[u]), i
        }
        var i = n(40),
            a = Object.prototype,
            o = a.hasOwnProperty,
            s = a.toString,
            u = i ? i.toStringTag : void 0;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return i.call(e)
        }
        var r = Object.prototype,
            i = r.toString;
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return null != e && "object" == typeof e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            a(typeof e === t, "range-fit expects typeof(" + n + ") to be " + t)
        }

        function i(e, t) {
            r(e, "number", t)
        }
        var a = n(45);
        e.exports = function(e, t, n, r, o) {
            i(e, "value"), i(t, "lowerInitial"), i(n, "upperInitial"), i(r, "lowerNew"), i(o, "upperNew");
            var s = n - t;
            if (0 === s) return r;
            a(t <= e, "range-fit expects lowerInitial<=value"), a(n >= e, "range-fit expects upperInitial>=value");
            var u = o - r;
            return (e - t) * u / s + r
        }
    }, function(e, t, n) {
        (function(t) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            function r(e, t) {
                if (e === t) return 0;
                for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)
                    if (e[i] !== t[i]) {
                        n = e[i], r = t[i];
                        break
                    } return n < r ? -1 : r < n ? 1 : 0
            }

            function i(e) {
                return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
            }

            function a(e) {
                return Object.prototype.toString.call(e)
            }

            function o(e) {
                return !i(e) && ("function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
            }

            function s(e) {
                if (E.isFunction(e)) {
                    if (M) return e.name;
                    var t = e.toString(),
                        n = t.match(S);
                    return n && n[1]
                }
            }

            function u(e, t) {
                return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
            }

            function c(e) {
                if (M || !E.isFunction(e)) return E.inspect(e);
                var t = s(e),
                    n = t ? ": " + t : "";
                return "[Function" + n + "]"
            }

            function l(e) {
                return u(c(e.actual), 128) + " " + e.operator + " " + u(c(e.expected), 128)
            }

            function f(e, t, n, r, i) {
                throw new T.AssertionError({
                    message: n,
                    actual: e,
                    expected: t,
                    operator: r,
                    stackStartFunction: i
                })
            }

            function d(e, t) {
                e || f(e, !0, t, "==", T.ok)
            }

            function h(e, t, n, s) {
                if (e === t) return !0;
                if (i(e) && i(t)) return 0 === r(e, t);
                if (E.isDate(e) && E.isDate(t)) return e.getTime() === t.getTime();
                if (E.isRegExp(e) && E.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
                if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
                    if (o(e) && o(t) && a(e) === a(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === r(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                    if (i(e) !== i(t)) return !1;
                    s = s || {
                        actual: [],
                        expected: []
                    };
                    var u = s.actual.indexOf(e);
                    return u !== -1 && u === s.expected.indexOf(t) || (s.actual.push(e), s.expected.push(t), v(e, t, n, s))
                }
                return n ? e === t : e == t
            }

            function p(e) {
                return "[object Arguments]" == Object.prototype.toString.call(e)
            }

            function v(e, t, n, r) {
                if (null === e || void 0 === e || null === t || void 0 === t) return !1;
                if (E.isPrimitive(e) || E.isPrimitive(t)) return e === t;
                if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
                var i = p(e),
                    a = p(t);
                if (i && !a || !i && a) return !1;
                if (i) return e = x.call(e), t = x.call(t), h(e, t, n);
                var o, s, u = R(e),
                    c = R(t);
                if (u.length !== c.length) return !1;
                for (u.sort(), c.sort(), s = u.length - 1; s >= 0; s--)
                    if (u[s] !== c[s]) return !1;
                for (s = u.length - 1; s >= 0; s--)
                    if (o = u[s], !h(e[o], t[o], n, r)) return !1;
                return !0
            }

            function m(e, t, n) {
                h(e, t, !0) && f(e, t, n, "notDeepStrictEqual", m)
            }

            function g(e, t) {
                if (!e || !t) return !1;
                if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
                try {
                    if (e instanceof t) return !0
                } catch (e) {}
                return !Error.isPrototypeOf(t) && t.call({}, e) === !0
            }

            function y(e) {
                var t;
                try {
                    e()
                } catch (e) {
                    t = e
                }
                return t
            }

            function b(e, t, n, r) {
                var i;
                if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
                "string" == typeof n && (r = n, n = null), i = y(t), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), e && !i && f(i, n, "Missing expected exception" + r);
                var a = "string" == typeof r,
                    o = !e && E.isError(i),
                    s = !e && i && !n;
                if ((o && a && g(i, n) || s) && f(i, n, "Got unwanted exception" + r), e && i && n && !g(i, n) || !e && i) throw i
            }

            function _(e, t) {
                e || f(e, !0, t, "==", _)
            }
            var w = n(46),
                E = n(47),
                A = Object.prototype.hasOwnProperty,
                x = Array.prototype.slice,
                M = function() {
                    return "foo" === function() {}.name
                }(),
                T = e.exports = d,
                S = /\s*function\s+([^\(\s]*)\s*/;
            T.AssertionError = function(e) {
                this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = l(this), this.generatedMessage = !0);
                var t = e.stackStartFunction || f;
                if (Error.captureStackTrace) Error.captureStackTrace(this, t);
                else {
                    var n = new Error;
                    if (n.stack) {
                        var r = n.stack,
                            i = s(t),
                            a = r.indexOf("\n" + i);
                        if (a >= 0) {
                            var o = r.indexOf("\n", a + 1);
                            r = r.substring(o + 1)
                        }
                        this.stack = r
                    }
                }
            }, E.inherits(T.AssertionError, Error), T.fail = f, T.ok = d, T.equal = function(e, t, n) {
                e != t && f(e, t, n, "==", T.equal)
            }, T.notEqual = function(e, t, n) {
                e == t && f(e, t, n, "!=", T.notEqual)
            }, T.deepEqual = function(e, t, n) {
                h(e, t, !1) || f(e, t, n, "deepEqual", T.deepEqual)
            }, T.deepStrictEqual = function(e, t, n) {
                h(e, t, !0) || f(e, t, n, "deepStrictEqual", T.deepStrictEqual)
            }, T.notDeepEqual = function(e, t, n) {
                h(e, t, !1) && f(e, t, n, "notDeepEqual", T.notDeepEqual)
            }, T.notDeepStrictEqual = m, T.strictEqual = function(e, t, n) {
                e !== t && f(e, t, n, "===", T.strictEqual)
            }, T.notStrictEqual = function(e, t, n) {
                e === t && f(e, t, n, "!==", T.notStrictEqual)
            }, T.throws = function(e, t, n) {
                b(!0, e, t, n)
            }, T.doesNotThrow = function(e, t, n) {
                b(!1, e, t, n)
            }, T.ifError = function(e) {
                if (e) throw e
            }, T.strict = w(_, T, {
                equal: T.strictEqual,
                deepEqual: T.deepStrictEqual,
                notEqual: T.notStrictEqual,
                notDeepEqual: T.notDeepStrictEqual
            }), T.strict.strict = T.strict;
            var R = Object.keys || function(e) {
                var t = [];
                for (var n in e) A.call(e, n) && t.push(n);
                return t
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
        "use strict";

        function n(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }

        function r() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                var r = Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                });
                if ("0123456789" !== r.join("")) return !1;
                var i = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    i[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
            } catch (e) {
                return !1
            }
        }
        var i = Object.getOwnPropertySymbols,
            a = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
        e.exports = r() ? Object.assign : function(e, t) {
            for (var r, s, u = n(e), c = 1; c < arguments.length; c++) {
                r = Object(arguments[c]);
                for (var l in r) a.call(r, l) && (u[l] = r[l]);
                if (i) {
                    s = i(r);
                    for (var f = 0; f < s.length; f++) o.call(r, s[f]) && (u[s[f]] = r[s[f]])
                }
            }
            return u
        }
    }, function(e, t, n) {
        (function(e, r) {
            function i(e, n) {
                var r = {
                    seen: [],
                    stylize: o
                };
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), v(n) ? r.showHidden = n : n && t._extend(r, n), w(r.showHidden) && (r.showHidden = !1), w(r.depth) && (r.depth = 2), w(r.colors) && (r.colors = !1), w(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = a), u(r, e, r.depth)
            }

            function a(e, t) {
                var n = i.styles[t];
                return n ? "[" + i.colors[n][0] + "m" + e + "[" + i.colors[n][1] + "m" : e
            }

            function o(e, t) {
                return e
            }

            function s(e) {
                var t = {};
                return e.forEach(function(e, n) {
                    t[e] = !0
                }), t
            }

            function u(e, n, r) {
                if (e.customInspect && n && T(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var i = n.inspect(r, e);
                    return b(i) || (i = u(e, i, r)), i
                }
                var a = c(e, n);
                if (a) return a;
                var o = Object.keys(n),
                    v = s(o);
                if (e.showHidden && (o = Object.getOwnPropertyNames(n)), M(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return l(n);
                if (0 === o.length) {
                    if (T(n)) {
                        var m = n.name ? ": " + n.name : "";
                        return e.stylize("[Function" + m + "]", "special")
                    }
                    if (E(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (x(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                    if (M(n)) return l(n)
                }
                var g = "",
                    y = !1,
                    _ = ["{", "}"];
                if (p(n) && (y = !0, _ = ["[", "]"]), T(n)) {
                    var w = n.name ? ": " + n.name : "";
                    g = " [Function" + w + "]"
                }
                if (E(n) && (g = " " + RegExp.prototype.toString.call(n)), x(n) && (g = " " + Date.prototype.toUTCString.call(n)), M(n) && (g = " " + l(n)), 0 === o.length && (!y || 0 == n.length)) return _[0] + g + _[1];
                if (r < 0) return E(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
                e.seen.push(n);
                var A;
                return A = y ? f(e, n, r, v, o) : o.map(function(t) {
                    return d(e, n, r, v, t, y)
                }), e.seen.pop(), h(A, g, _)
            }

            function c(e, t) {
                if (w(t)) return e.stylize("undefined", "undefined");
                if (b(t)) {
                    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(n, "string")
                }
                return y(t) ? e.stylize("" + t, "number") : v(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0
            }

            function l(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function f(e, t, n, r, i) {
                for (var a = [], o = 0, s = t.length; o < s; ++o) P(t, String(o)) ? a.push(d(e, t, n, r, String(o), !0)) : a.push("");
                return i.forEach(function(i) {
                    i.match(/^\d+$/) || a.push(d(e, t, n, r, i, !0))
                }), a
            }

            function d(e, t, n, r, i, a) {
                var o, s, c;
                if (c = Object.getOwnPropertyDescriptor(t, i) || {
                        value: t[i]
                    }, c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), P(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = m(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n"))) : s = e.stylize("[Circular]", "special")), w(o)) {
                    if (a && i.match(/^\d+$/)) return s;
                    o = JSON.stringify("" + i), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"))
                }
                return o + ": " + s
            }

            function h(e, t, n) {
                var r = 0,
                    i = e.reduce(function(e, t) {
                        return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0);
                return i > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
            }

            function p(e) {
                return Array.isArray(e)
            }

            function v(e) {
                return "boolean" == typeof e
            }

            function m(e) {
                return null === e
            }

            function g(e) {
                return null == e
            }

            function y(e) {
                return "number" == typeof e
            }

            function b(e) {
                return "string" == typeof e
            }

            function _(e) {
                return "symbol" == typeof e
            }

            function w(e) {
                return void 0 === e
            }

            function E(e) {
                return A(e) && "[object RegExp]" === R(e)
            }

            function A(e) {
                return "object" == typeof e && null !== e
            }

            function x(e) {
                return A(e) && "[object Date]" === R(e)
            }

            function M(e) {
                return A(e) && ("[object Error]" === R(e) || e instanceof Error)
            }

            function T(e) {
                return "function" == typeof e
            }

            function S(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
            }

            function R(e) {
                return Object.prototype.toString.call(e)
            }

            function C(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }

            function O() {
                var e = new Date,
                    t = [C(e.getHours()), C(e.getMinutes()), C(e.getSeconds())].join(":");
                return [e.getDate(), L[e.getMonth()], t].join(" ")
            }

            function P(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var k = /%[sdj%]/g;
            t.format = function(e) {
                if (!b(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(i(arguments[n]));
                    return t.join(" ")
                }
                for (var n = 1, r = arguments, a = r.length, o = String(e).replace(k, function(e) {
                        if ("%%" === e) return "%";
                        if (n >= a) return e;
                        switch (e) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                                default:
                                    return e
                        }
                    }), s = r[n]; n < a; s = r[++n]) o += m(s) || !A(s) ? " " + s : " " + i(s);
                return o
            }, t.deprecate = function(n, i) {
                function a() {
                    if (!o) {
                        if (r.throwDeprecation) throw new Error(i);
                        r.traceDeprecation ? console.trace(i) : console.error(i), o = !0
                    }
                    return n.apply(this, arguments)
                }
                if (w(e.process)) return function() {
                    return t.deprecate(n, i).apply(this, arguments)
                };
                if (r.noDeprecation === !0) return n;
                var o = !1;
                return a
            };
            var I, F = {};
            t.debuglog = function(e) {
                if (w(I) && (I = r.env.NODE_DEBUG || ""), e = e.toUpperCase(), !F[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(I)) {
                        var n = r.pid;
                        F[e] = function() {
                            var r = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, n, r)
                        }
                    } else F[e] = function() {};
                return F[e]
            }, t.inspect = i, i.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, i.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, t.isArray = p, t.isBoolean = v, t.isNull = m, t.isNullOrUndefined = g, t.isNumber = y, t.isString = b, t.isSymbol = _, t.isUndefined = w, t.isRegExp = E, t.isObject = A, t.isDate = x, t.isError = M, t.isFunction = T, t.isPrimitive = S, t.isBuffer = n(49);
            var L = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            t.log = function() {
                console.log("%s - %s", O(), t.format.apply(t, arguments))
            }, t.inherits = n(50), t._extend = function(e, t) {
                if (!t || !A(t)) return e;
                for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
                return e
            }
        }).call(t, function() {
            return this
        }(), n(48))
    }, function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(e) {
            if (l === setTimeout) return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function a(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function o() {
            v && h && (v = !1, h.length ? p = h.concat(p) : m = -1, p.length && s())
        }

        function s() {
            if (!v) {
                var e = i(o);
                v = !0;
                for (var t = p.length; t;) {
                    for (h = p, p = []; ++m < t;) h && h[m].run();
                    m = -1, t = p.length
                }
                h = null, v = !1, a(e)
            }
        }

        function u(e, t) {
            this.fun = e, this.array = t
        }

        function c() {}
        var l, f, d = e.exports = {};
        ! function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                f = r
            }
        }();
        var h, p = [],
            v = !1,
            m = -1;
        d.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            p.push(new u(e, t)), 1 !== p.length || v || i(s)
        }, u.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.prependListener = c, d.prependOnceListener = c, d.listeners = function(e) {
            return []
        }, d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    }, function(e, t) {
        e.exports = function(e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
        }
    }, function(e, t) {
        "function" == typeof Object.create ? e.exports = function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, function(e, t) {
        function n(e, t, n) {
            return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e
        }
        e.exports = n
    }, function(e, t, n) {
        /*!
            @fileoverview gl-matrix - High performance matrix and vector operations
            @author Brandon Jones
            @author Colin MacKenzie IV
            @version 2.7.0
            
            Copyright (c) 2015-2018, Brandon Jones, Colin MacKenzie IV.
            
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in
            all copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
            THE SOFTWARE.
            
            */
        ! function(t, n) {
            e.exports = n()
        }("undefined" != typeof self ? self : this, function() {
            return function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var i = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.d = function(e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: r
                    })
                }, t.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, t.t = function(e, n) {
                    if (1 & n && (e = t(e)), 8 & n) return e;
                    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (t.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & n && "string" != typeof e)
                        for (var i in e) t.d(r, i, function(t) {
                            return e[t]
                        }.bind(null, i));
                    return r
                }, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 10)
            }([function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setMatrixArrayType = function(e) {
                    t.ARRAY_TYPE = e
                }, t.toRadian = function(e) {
                    return e * i
                }, t.equals = function(e, t) {
                    return Math.abs(e - t) <= r * Math.max(1, Math.abs(e), Math.abs(t))
                };
                var r = t.EPSILON = 1e-6;
                t.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, t.RANDOM = Math.random;
                var i = Math.PI / 180
            }, function(e, t, n) {
                "use strict";

                function r() {
                    var e = new f.ARRAY_TYPE(4);
                    return f.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e
                }

                function i(e, t, n) {
                    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e
                }

                function a(e, t, n) {
                    return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e[3] = t[3] * n[3], e
                }

                function o(e, t, n) {
                    return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e[3] = t[3] / n[3], e
                }

                function s(e, t) {
                    var n = t[0] - e[0],
                        r = t[1] - e[1],
                        i = t[2] - e[2],
                        a = t[3] - e[3];
                    return Math.sqrt(n * n + r * r + i * i + a * a)
                }

                function u(e, t) {
                    var n = t[0] - e[0],
                        r = t[1] - e[1],
                        i = t[2] - e[2],
                        a = t[3] - e[3];
                    return n * n + r * r + i * i + a * a
                }

                function c(e) {
                    var t = e[0],
                        n = e[1],
                        r = e[2],
                        i = e[3];
                    return Math.sqrt(t * t + n * n + r * r + i * i)
                }

                function l(e) {
                    var t = e[0],
                        n = e[1],
                        r = e[2],
                        i = e[3];
                    return t * t + n * n + r * r + i * i
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.forEach = t.sqrLen = t.len = t.sqrDist = t.dist = t.div = t.mul = t.sub = void 0, t.create = r, t.clone = function(e) {
                    var t = new f.ARRAY_TYPE(4);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
                }, t.fromValues = function(e, t, n, r) {
                    var i = new f.ARRAY_TYPE(4);
                    return i[0] = e, i[1] = t, i[2] = n, i[3] = r, i
                }, t.copy = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
                }, t.set = function(e, t, n, r, i) {
                    return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e
                }, t.add = function(e, t, n) {
                    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e
                }, t.subtract = i, t.multiply = a, t.divide = o, t.ceil = function(e, t) {
                    return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e[3] = Math.ceil(t[3]), e
                }, t.floor = function(e, t) {
                    return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e[3] = Math.floor(t[3]), e
                }, t.min = function(e, t, n) {
                    return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e[3] = Math.min(t[3], n[3]), e
                }, t.max = function(e, t, n) {
                    return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e[3] = Math.max(t[3], n[3]), e
                }, t.round = function(e, t) {
                    return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e[3] = Math.round(t[3]), e
                }, t.scale = function(e, t, n) {
                    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e
                }, t.scaleAndAdd = function(e, t, n, r) {
                    return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e
                }, t.distance = s, t.squaredDistance = u, t.length = c, t.squaredLength = l, t.negate = function(e, t) {
                    return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e
                }, t.inverse = function(e, t) {
                    return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e
                }, t.normalize = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = n * n + r * r + i * i + a * a;
                    return o > 0 && (o = 1 / Math.sqrt(o), e[0] = n * o, e[1] = r * o, e[2] = i * o, e[3] = a * o), e
                }, t.dot = function(e, t) {
                    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
                }, t.lerp = function(e, t, n, r) {
                    var i = t[0],
                        a = t[1],
                        o = t[2],
                        s = t[3];
                    return e[0] = i + r * (n[0] - i), e[1] = a + r * (n[1] - a), e[2] = o + r * (n[2] - o), e[3] = s + r * (n[3] - s), e
                }, t.random = function(e, t) {
                    var n, r, i, a, o, s;
                    t = t || 1;
                    do n = 2 * f.RANDOM() - 1, r = 2 * f.RANDOM() - 1, o = n * n + r * r; while (o >= 1);
                    do i = 2 * f.RANDOM() - 1, a = 2 * f.RANDOM() - 1, s = i * i + a * a; while (s >= 1);
                    var u = Math.sqrt((1 - o) / s);
                    return e[0] = t * n, e[1] = t * r, e[2] = t * i * u, e[3] = t * a * u, e
                }, t.transformMat4 = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3];
                    return e[0] = n[0] * r + n[4] * i + n[8] * a + n[12] * o, e[1] = n[1] * r + n[5] * i + n[9] * a + n[13] * o, e[2] = n[2] * r + n[6] * i + n[10] * a + n[14] * o, e[3] = n[3] * r + n[7] * i + n[11] * a + n[15] * o, e
                }, t.transformQuat = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = n[0],
                        s = n[1],
                        u = n[2],
                        c = n[3],
                        l = c * r + s * a - u * i,
                        f = c * i + u * r - o * a,
                        d = c * a + o * i - s * r,
                        h = -o * r - s * i - u * a;
                    return e[0] = l * c + h * -o + f * -u - d * -s, e[1] = f * c + h * -s + d * -o - l * -u, e[2] = d * c + h * -u + l * -s - f * -o, e[3] = t[3], e
                }, t.str = function(e) {
                    return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
                }, t.exactEquals = function(e, t) {
                    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
                }, t.equals = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        a = e[3],
                        o = t[0],
                        s = t[1],
                        u = t[2],
                        c = t[3];
                    return Math.abs(n - o) <= f.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - s) <= f.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(i - u) <= f.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(a - c) <= f.EPSILON * Math.max(1, Math.abs(a), Math.abs(c))
                };
                var f = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0));
                t.sub = i, t.mul = a, t.div = o, t.dist = s, t.sqrDist = u, t.len = c, t.sqrLen = l, t.forEach = function() {
                    var e = r();
                    return function(t, n, r, i, a, o) {
                        var s = void 0,
                            u = void 0;
                        for (n || (n = 4), r || (r = 0), u = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < u; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], e[3] = t[s + 3], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2], t[s + 3] = e[3];
                        return t
                    }
                }()
            }, function(e, t, n) {
                "use strict";

                function r() {
                    var e = new p.ARRAY_TYPE(3);
                    return p.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e
                }

                function i(e) {
                    var t = e[0],
                        n = e[1],
                        r = e[2];
                    return Math.sqrt(t * t + n * n + r * r)
                }

                function a(e, t, n) {
                    var r = new p.ARRAY_TYPE(3);
                    return r[0] = e, r[1] = t, r[2] = n, r
                }

                function o(e, t, n) {
                    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e
                }

                function s(e, t, n) {
                    return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e
                }

                function u(e, t, n) {
                    return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e
                }

                function c(e, t) {
                    var n = t[0] - e[0],
                        r = t[1] - e[1],
                        i = t[2] - e[2];
                    return Math.sqrt(n * n + r * r + i * i)
                }

                function l(e, t) {
                    var n = t[0] - e[0],
                        r = t[1] - e[1],
                        i = t[2] - e[2];
                    return n * n + r * r + i * i
                }

                function f(e) {
                    var t = e[0],
                        n = e[1],
                        r = e[2];
                    return t * t + n * n + r * r
                }

                function d(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = n * n + r * r + i * i;
                    return a > 0 && (a = 1 / Math.sqrt(a), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a), e
                }

                function h(e, t) {
                    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.forEach = t.sqrLen = t.len = t.sqrDist = t.dist = t.div = t.mul = t.sub = void 0, t.create = r, t.clone = function(e) {
                    var t = new p.ARRAY_TYPE(3);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
                }, t.length = i, t.fromValues = a, t.copy = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
                }, t.set = function(e, t, n, r) {
                    return e[0] = t, e[1] = n, e[2] = r, e
                }, t.add = function(e, t, n) {
                    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e
                }, t.subtract = o, t.multiply = s, t.divide = u, t.ceil = function(e, t) {
                    return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e
                }, t.floor = function(e, t) {
                    return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e
                }, t.min = function(e, t, n) {
                    return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e
                }, t.max = function(e, t, n) {
                    return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e
                }, t.round = function(e, t) {
                    return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e
                }, t.scale = function(e, t, n) {
                    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e
                }, t.scaleAndAdd = function(e, t, n, r) {
                    return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e
                }, t.distance = c, t.squaredDistance = l, t.squaredLength = f, t.negate = function(e, t) {
                    return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
                }, t.inverse = function(e, t) {
                    return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e
                }, t.normalize = d, t.dot = h, t.cross = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = n[0],
                        s = n[1],
                        u = n[2];
                    return e[0] = i * u - a * s, e[1] = a * o - r * u, e[2] = r * s - i * o, e
                }, t.lerp = function(e, t, n, r) {
                    var i = t[0],
                        a = t[1],
                        o = t[2];
                    return e[0] = i + r * (n[0] - i), e[1] = a + r * (n[1] - a), e[2] = o + r * (n[2] - o), e
                }, t.hermite = function(e, t, n, r, i, a) {
                    var o = a * a,
                        s = o * (2 * a - 3) + 1,
                        u = o * (a - 2) + a,
                        c = o * (a - 1),
                        l = o * (3 - 2 * a);
                    return e[0] = t[0] * s + n[0] * u + r[0] * c + i[0] * l, e[1] = t[1] * s + n[1] * u + r[1] * c + i[1] * l, e[2] = t[2] * s + n[2] * u + r[2] * c + i[2] * l, e
                }, t.bezier = function(e, t, n, r, i, a) {
                    var o = 1 - a,
                        s = o * o,
                        u = a * a,
                        c = s * o,
                        l = 3 * a * s,
                        f = 3 * u * o,
                        d = u * a;
                    return e[0] = t[0] * c + n[0] * l + r[0] * f + i[0] * d, e[1] = t[1] * c + n[1] * l + r[1] * f + i[1] * d, e[2] = t[2] * c + n[2] * l + r[2] * f + i[2] * d, e
                }, t.random = function(e, t) {
                    t = t || 1;
                    var n = 2 * p.RANDOM() * Math.PI,
                        r = 2 * p.RANDOM() - 1,
                        i = Math.sqrt(1 - r * r) * t;
                    return e[0] = Math.cos(n) * i, e[1] = Math.sin(n) * i, e[2] = r * t, e
                }, t.transformMat4 = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = n[3] * r + n[7] * i + n[11] * a + n[15];
                    return o = o || 1, e[0] = (n[0] * r + n[4] * i + n[8] * a + n[12]) / o, e[1] = (n[1] * r + n[5] * i + n[9] * a + n[13]) / o, e[2] = (n[2] * r + n[6] * i + n[10] * a + n[14]) / o, e
                }, t.transformMat3 = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2];
                    return e[0] = r * n[0] + i * n[3] + a * n[6], e[1] = r * n[1] + i * n[4] + a * n[7], e[2] = r * n[2] + i * n[5] + a * n[8], e
                }, t.transformQuat = function(e, t, n) {
                    var r = n[0],
                        i = n[1],
                        a = n[2],
                        o = n[3],
                        s = t[0],
                        u = t[1],
                        c = t[2],
                        l = i * c - a * u,
                        f = a * s - r * c,
                        d = r * u - i * s,
                        h = i * d - a * f,
                        p = a * l - r * d,
                        v = r * f - i * l,
                        m = 2 * o;
                    return l *= m, f *= m, d *= m, h *= 2, p *= 2, v *= 2, e[0] = s + l + h, e[1] = u + f + p, e[2] = c + d + v, e
                }, t.rotateX = function(e, t, n, r) {
                    var i = [],
                        a = [];
                    return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], a[0] = i[0], a[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r), a[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r), e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e
                }, t.rotateY = function(e, t, n, r) {
                    var i = [],
                        a = [];
                    return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], a[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r), a[1] = i[1], a[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r), e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e
                }, t.rotateZ = function(e, t, n, r) {
                    var i = [],
                        a = [];
                    return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], a[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), a[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), a[2] = i[2], e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e
                }, t.angle = function(e, t) {
                    var n = a(e[0], e[1], e[2]),
                        r = a(t[0], t[1], t[2]);
                    d(n, n), d(r, r);
                    var i = h(n, r);
                    return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i)
                }, t.str = function(e) {
                    return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
                }, t.exactEquals = function(e, t) {
                    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2]
                }, t.equals = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        a = t[0],
                        o = t[1],
                        s = t[2];
                    return Math.abs(n - a) <= p.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - o) <= p.EPSILON * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(i - s) <= p.EPSILON * Math.max(1, Math.abs(i), Math.abs(s))
                };
                var p = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0));
                t.sub = o, t.mul = s, t.div = u, t.dist = c, t.sqrDist = l, t.len = i, t.sqrLen = f, t.forEach = function() {
                    var e = r();
                    return function(t, n, r, i, a, o) {
                        var s = void 0,
                            u = void 0;
                        for (n || (n = 3), r || (r = 0), u = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < u; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2];
                        return t
                    }
                }()
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }

                function i() {
                    var e = new c.ARRAY_TYPE(4);
                    return c.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e
                }

                function a(e, t, n) {
                    n *= .5;
                    var r = Math.sin(n);
                    return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = Math.cos(n), e
                }

                function o(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = n[0],
                        u = n[1],
                        c = n[2],
                        l = n[3];
                    return e[0] = r * l + o * s + i * c - a * u, e[1] = i * l + o * u + a * s - r * c, e[2] = a * l + o * c + r * u - i * s, e[3] = o * l - r * s - i * u - a * c, e
                }

                function s(e, t, n, r) {
                    var i = t[0],
                        a = t[1],
                        o = t[2],
                        s = t[3],
                        u = n[0],
                        l = n[1],
                        f = n[2],
                        d = n[3],
                        h = void 0,
                        p = void 0,
                        v = void 0,
                        m = void 0,
                        g = void 0;
                    return (p = i * u + a * l + o * f + s * d) < 0 && (p = -p, u = -u, l = -l, f = -f, d = -d), 1 - p > c.EPSILON ? (h = Math.acos(p), v = Math.sin(h), m = Math.sin((1 - r) * h) / v, g = Math.sin(r * h) / v) : (m = 1 - r, g = r), e[0] = m * i + g * u, e[1] = m * a + g * l, e[2] = m * o + g * f, e[3] = m * s + g * d, e
                }

                function u(e, t) {
                    var n = t[0] + t[4] + t[8],
                        r = void 0;
                    if (n > 0) r = Math.sqrt(n + 1), e[3] = .5 * r, r = .5 / r, e[0] = (t[5] - t[7]) * r, e[1] = (t[6] - t[2]) * r, e[2] = (t[1] - t[3]) * r;
                    else {
                        var i = 0;
                        t[4] > t[0] && (i = 1), t[8] > t[3 * i + i] && (i = 2);
                        var a = (i + 1) % 3,
                            o = (i + 2) % 3;
                        r = Math.sqrt(t[3 * i + i] - t[3 * a + a] - t[3 * o + o] + 1), e[i] = .5 * r, r = .5 / r, e[3] = (t[3 * a + o] - t[3 * o + a]) * r, e[a] = (t[3 * a + i] + t[3 * i + a]) * r, e[o] = (t[3 * o + i] + t[3 * i + o]) * r
                    }
                    return e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setAxes = t.sqlerp = t.rotationTo = t.equals = t.exactEquals = t.normalize = t.sqrLen = t.squaredLength = t.len = t.length = t.lerp = t.dot = t.scale = t.mul = t.add = t.set = t.copy = t.fromValues = t.clone = void 0, t.create = i, t.identity = function(e) {
                    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
                }, t.setAxisAngle = a, t.getAxisAngle = function(e, t) {
                    var n = 2 * Math.acos(t[3]),
                        r = Math.sin(n / 2);
                    return r > c.EPSILON ? (e[0] = t[0] / r, e[1] = t[1] / r, e[2] = t[2] / r) : (e[0] = 1, e[1] = 0, e[2] = 0), n
                }, t.multiply = o, t.rotateX = function(e, t, n) {
                    n *= .5;
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = Math.sin(n),
                        u = Math.cos(n);
                    return e[0] = r * u + o * s, e[1] = i * u + a * s, e[2] = a * u - i * s, e[3] = o * u - r * s, e
                }, t.rotateY = function(e, t, n) {
                    n *= .5;
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = Math.sin(n),
                        u = Math.cos(n);
                    return e[0] = r * u - a * s, e[1] = i * u + o * s, e[2] = a * u + r * s, e[3] = o * u - i * s, e
                }, t.rotateZ = function(e, t, n) {
                    n *= .5;
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = Math.sin(n),
                        u = Math.cos(n);
                    return e[0] = r * u + i * s, e[1] = i * u - r * s, e[2] = a * u + o * s, e[3] = o * u - a * s, e
                }, t.calculateW = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2];
                    return e[0] = n, e[1] = r, e[2] = i, e[3] = Math.sqrt(Math.abs(1 - n * n - r * r - i * i)), e
                }, t.slerp = s, t.random = function(e) {
                    var t = c.RANDOM(),
                        n = c.RANDOM(),
                        r = c.RANDOM(),
                        i = Math.sqrt(1 - t),
                        a = Math.sqrt(t);
                    return e[0] = i * Math.sin(2 * Math.PI * n), e[1] = i * Math.cos(2 * Math.PI * n), e[2] = a * Math.sin(2 * Math.PI * r), e[3] = a * Math.cos(2 * Math.PI * r), e
                }, t.invert = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = n * n + r * r + i * i + a * a,
                        s = o ? 1 / o : 0;
                    return e[0] = -n * s, e[1] = -r * s, e[2] = -i * s, e[3] = a * s, e
                }, t.conjugate = function(e, t) {
                    return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e
                }, t.fromMat3 = u, t.fromEuler = function(e, t, n, r) {
                    var i = .5 * Math.PI / 180;
                    t *= i, n *= i, r *= i;
                    var a = Math.sin(t),
                        o = Math.cos(t),
                        s = Math.sin(n),
                        u = Math.cos(n),
                        c = Math.sin(r),
                        l = Math.cos(r);
                    return e[0] = a * u * l - o * s * c, e[1] = o * s * l + a * u * c, e[2] = o * u * c - a * s * l, e[3] = o * u * l + a * s * c, e
                }, t.str = function(e) {
                    return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
                };
                var c = r(n(0)),
                    l = r(n(5)),
                    f = r(n(2)),
                    d = r(n(1));
                t.clone = d.clone, t.fromValues = d.fromValues, t.copy = d.copy, t.set = d.set, t.add = d.add, t.mul = o, t.scale = d.scale, t.dot = d.dot, t.lerp = d.lerp;
                var h = t.length = d.length,
                    p = (t.len = h, t.squaredLength = d.squaredLength),
                    v = (t.sqrLen = p, t.normalize = d.normalize);
                t.exactEquals = d.exactEquals, t.equals = d.equals, t.rotationTo = function() {
                    var e = f.create(),
                        t = f.fromValues(1, 0, 0),
                        n = f.fromValues(0, 1, 0);
                    return function(r, i, o) {
                        var s = f.dot(i, o);
                        return s < -.999999 ? (f.cross(e, t, i), f.len(e) < 1e-6 && f.cross(e, n, i), f.normalize(e, e), a(r, e, Math.PI), r) : s > .999999 ? (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r) : (f.cross(e, i, o), r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = 1 + s, v(r, r))
                    }
                }(), t.sqlerp = function() {
                    var e = i(),
                        t = i();
                    return function(n, r, i, a, o, u) {
                        return s(e, r, o, u), s(t, i, a, u), s(n, e, t, 2 * u * (1 - u)), n
                    }
                }(), t.setAxes = function() {
                    var e = l.create();
                    return function(t, n, r, i) {
                        return e[0] = r[0], e[3] = r[1], e[6] = r[2], e[1] = i[0], e[4] = i[1], e[7] = i[2], e[2] = -n[0], e[5] = -n[1], e[8] = -n[2], v(t, u(t, e))
                    }
                }()
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                }

                function i(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = t[4],
                        u = t[5],
                        c = t[6],
                        l = t[7],
                        f = t[8],
                        d = t[9],
                        h = t[10],
                        p = t[11],
                        v = t[12],
                        m = t[13],
                        g = t[14],
                        y = t[15],
                        b = n[0],
                        _ = n[1],
                        w = n[2],
                        E = n[3];
                    return e[0] = b * r + _ * s + w * f + E * v, e[1] = b * i + _ * u + w * d + E * m, e[2] = b * a + _ * c + w * h + E * g, e[3] = b * o + _ * l + w * p + E * y, b = n[4], _ = n[5], w = n[6], E = n[7], e[4] = b * r + _ * s + w * f + E * v, e[5] = b * i + _ * u + w * d + E * m, e[6] = b * a + _ * c + w * h + E * g, e[7] = b * o + _ * l + w * p + E * y, b = n[8], _ = n[9], w = n[10], E = n[11], e[8] = b * r + _ * s + w * f + E * v, e[9] = b * i + _ * u + w * d + E * m, e[10] = b * a + _ * c + w * h + E * g, e[11] = b * o + _ * l + w * p + E * y, b = n[12], _ = n[13], w = n[14], E = n[15], e[12] = b * r + _ * s + w * f + E * v, e[13] = b * i + _ * u + w * d + E * m, e[14] = b * a + _ * c + w * h + E * g, e[15] = b * o + _ * l + w * p + E * y, e
                }

                function a(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = r + r,
                        u = i + i,
                        c = a + a,
                        l = r * s,
                        f = r * u,
                        d = r * c,
                        h = i * u,
                        p = i * c,
                        v = a * c,
                        m = o * s,
                        g = o * u,
                        y = o * c;
                    return e[0] = 1 - (h + v), e[1] = f + y, e[2] = d - g, e[3] = 0, e[4] = f - y, e[5] = 1 - (l + v), e[6] = p + m, e[7] = 0, e[8] = d + g, e[9] = p - m, e[10] = 1 - (l + h), e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
                }

                function o(e, t, n) {
                    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e[9] = t[9] - n[9], e[10] = t[10] - n[10], e[11] = t[11] - n[11], e[12] = t[12] - n[12], e[13] = t[13] - n[13], e[14] = t[14] - n[14], e[15] = t[15] - n[15], e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sub = t.mul = void 0, t.create = function() {
                    var e = new s.ARRAY_TYPE(16);
                    return s.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e
                }, t.clone = function(e) {
                    var t = new s.ARRAY_TYPE(16);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
                }, t.copy = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                }, t.fromValues = function(e, t, n, r, i, a, o, u, c, l, f, d, h, p, v, m) {
                    var g = new s.ARRAY_TYPE(16);
                    return g[0] = e, g[1] = t, g[2] = n, g[3] = r, g[4] = i, g[5] = a, g[6] = o, g[7] = u, g[8] = c, g[9] = l, g[10] = f, g[11] = d, g[12] = h, g[13] = p, g[14] = v, g[15] = m, g
                }, t.set = function(e, t, n, r, i, a, o, s, u, c, l, f, d, h, p, v, m) {
                    return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e[4] = a, e[5] = o, e[6] = s, e[7] = u, e[8] = c, e[9] = l, e[10] = f, e[11] = d, e[12] = h, e[13] = p, e[14] = v, e[15] = m, e
                }, t.identity = r, t.transpose = function(e, t) {
                    if (e === t) {
                        var n = t[1],
                            r = t[2],
                            i = t[3],
                            a = t[6],
                            o = t[7],
                            s = t[11];
                        e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = r, e[9] = a, e[11] = t[14], e[12] = i, e[13] = o, e[14] = s
                    } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
                    return e
                }, t.invert = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = t[4],
                        s = t[5],
                        u = t[6],
                        c = t[7],
                        l = t[8],
                        f = t[9],
                        d = t[10],
                        h = t[11],
                        p = t[12],
                        v = t[13],
                        m = t[14],
                        g = t[15],
                        y = n * s - r * o,
                        b = n * u - i * o,
                        _ = n * c - a * o,
                        w = r * u - i * s,
                        E = r * c - a * s,
                        A = i * c - a * u,
                        x = l * v - f * p,
                        M = l * m - d * p,
                        T = l * g - h * p,
                        S = f * m - d * v,
                        R = f * g - h * v,
                        C = d * g - h * m,
                        O = y * C - b * R + _ * S + w * T - E * M + A * x;
                    return O ? (O = 1 / O, e[0] = (s * C - u * R + c * S) * O, e[1] = (i * R - r * C - a * S) * O, e[2] = (v * A - m * E + g * w) * O, e[3] = (d * E - f * A - h * w) * O, e[4] = (u * T - o * C - c * M) * O, e[5] = (n * C - i * T + a * M) * O, e[6] = (m * _ - p * A - g * b) * O, e[7] = (l * A - d * _ + h * b) * O, e[8] = (o * R - s * T + c * x) * O, e[9] = (r * T - n * R - a * x) * O, e[10] = (p * E - v * _ + g * y) * O, e[11] = (f * _ - l * E - h * y) * O, e[12] = (s * M - o * S - u * x) * O, e[13] = (n * S - r * M + i * x) * O, e[14] = (v * b - p * w - m * y) * O, e[15] = (l * w - f * b + d * y) * O, e) : null
                }, t.adjoint = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = t[4],
                        s = t[5],
                        u = t[6],
                        c = t[7],
                        l = t[8],
                        f = t[9],
                        d = t[10],
                        h = t[11],
                        p = t[12],
                        v = t[13],
                        m = t[14],
                        g = t[15];
                    return e[0] = s * (d * g - h * m) - f * (u * g - c * m) + v * (u * h - c * d), e[1] = -(r * (d * g - h * m) - f * (i * g - a * m) + v * (i * h - a * d)), e[2] = r * (u * g - c * m) - s * (i * g - a * m) + v * (i * c - a * u), e[3] = -(r * (u * h - c * d) - s * (i * h - a * d) + f * (i * c - a * u)), e[4] = -(o * (d * g - h * m) - l * (u * g - c * m) + p * (u * h - c * d)), e[5] = n * (d * g - h * m) - l * (i * g - a * m) + p * (i * h - a * d), e[6] = -(n * (u * g - c * m) - o * (i * g - a * m) + p * (i * c - a * u)), e[7] = n * (u * h - c * d) - o * (i * h - a * d) + l * (i * c - a * u), e[8] = o * (f * g - h * v) - l * (s * g - c * v) + p * (s * h - c * f), e[9] = -(n * (f * g - h * v) - l * (r * g - a * v) + p * (r * h - a * f)), e[10] = n * (s * g - c * v) - o * (r * g - a * v) + p * (r * c - a * s), e[11] = -(n * (s * h - c * f) - o * (r * h - a * f) + l * (r * c - a * s)), e[12] = -(o * (f * m - d * v) - l * (s * m - u * v) + p * (s * d - u * f)), e[13] = n * (f * m - d * v) - l * (r * m - i * v) + p * (r * d - i * f), e[14] = -(n * (s * m - u * v) - o * (r * m - i * v) + p * (r * u - i * s)), e[15] = n * (s * d - u * f) - o * (r * d - i * f) + l * (r * u - i * s), e
                }, t.determinant = function(e) {
                    var t = e[0],
                        n = e[1],
                        r = e[2],
                        i = e[3],
                        a = e[4],
                        o = e[5],
                        s = e[6],
                        u = e[7],
                        c = e[8],
                        l = e[9],
                        f = e[10],
                        d = e[11],
                        h = e[12],
                        p = e[13],
                        v = e[14],
                        m = e[15];
                    return (t * o - n * a) * (f * m - d * v) - (t * s - r * a) * (l * m - d * p) + (t * u - i * a) * (l * v - f * p) + (n * s - r * o) * (c * m - d * h) - (n * u - i * o) * (c * v - f * h) + (r * u - i * s) * (c * p - l * h)
                }, t.multiply = i, t.translate = function(e, t, n) {
                    var r = n[0],
                        i = n[1],
                        a = n[2],
                        o = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0,
                        l = void 0,
                        f = void 0,
                        d = void 0,
                        h = void 0,
                        p = void 0,
                        v = void 0,
                        m = void 0,
                        g = void 0;
                    return t === e ? (e[12] = t[0] * r + t[4] * i + t[8] * a + t[12], e[13] = t[1] * r + t[5] * i + t[9] * a + t[13], e[14] = t[2] * r + t[6] * i + t[10] * a + t[14], e[15] = t[3] * r + t[7] * i + t[11] * a + t[15]) : (o = t[0], s = t[1], u = t[2], c = t[3], l = t[4], f = t[5], d = t[6], h = t[7], p = t[8], v = t[9], m = t[10], g = t[11], e[0] = o, e[1] = s, e[2] = u, e[3] = c, e[4] = l, e[5] = f, e[6] = d, e[7] = h, e[8] = p, e[9] = v, e[10] = m, e[11] = g, e[12] = o * r + l * i + p * a + t[12], e[13] = s * r + f * i + v * a + t[13], e[14] = u * r + d * i + m * a + t[14], e[15] = c * r + h * i + g * a + t[15]), e
                }, t.scale = function(e, t, n) {
                    var r = n[0],
                        i = n[1],
                        a = n[2];
                    return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * a, e[9] = t[9] * a, e[10] = t[10] * a, e[11] = t[11] * a, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                }, t.rotate = function(e, t, n, r) {
                    var i = r[0],
                        a = r[1],
                        o = r[2],
                        u = Math.sqrt(i * i + a * a + o * o),
                        c = void 0,
                        l = void 0,
                        f = void 0,
                        d = void 0,
                        h = void 0,
                        p = void 0,
                        v = void 0,
                        m = void 0,
                        g = void 0,
                        y = void 0,
                        b = void 0,
                        _ = void 0,
                        w = void 0,
                        E = void 0,
                        A = void 0,
                        x = void 0,
                        M = void 0,
                        T = void 0,
                        S = void 0,
                        R = void 0,
                        C = void 0,
                        O = void 0,
                        P = void 0,
                        k = void 0;
                    return u < s.EPSILON ? null : (i *= u = 1 / u, a *= u, o *= u, c = Math.sin(n), l = Math.cos(n), f = 1 - l, d = t[0], h = t[1], p = t[2], v = t[3], m = t[4], g = t[5], y = t[6], b = t[7], _ = t[8], w = t[9], E = t[10], A = t[11], x = i * i * f + l, M = a * i * f + o * c, T = o * i * f - a * c, S = i * a * f - o * c, R = a * a * f + l, C = o * a * f + i * c, O = i * o * f + a * c, P = a * o * f - i * c, k = o * o * f + l, e[0] = d * x + m * M + _ * T, e[1] = h * x + g * M + w * T, e[2] = p * x + y * M + E * T, e[3] = v * x + b * M + A * T, e[4] = d * S + m * R + _ * C, e[5] = h * S + g * R + w * C, e[6] = p * S + y * R + E * C, e[7] = v * S + b * R + A * C, e[8] = d * O + m * P + _ * k, e[9] = h * O + g * P + w * k, e[10] = p * O + y * P + E * k, e[11] = v * O + b * P + A * k, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e)
                }, t.rotateX = function(e, t, n) {
                    var r = Math.sin(n),
                        i = Math.cos(n),
                        a = t[4],
                        o = t[5],
                        s = t[6],
                        u = t[7],
                        c = t[8],
                        l = t[9],
                        f = t[10],
                        d = t[11];
                    return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = a * i + c * r, e[5] = o * i + l * r, e[6] = s * i + f * r, e[7] = u * i + d * r, e[8] = c * i - a * r, e[9] = l * i - o * r, e[10] = f * i - s * r, e[11] = d * i - u * r, e
                }, t.rotateY = function(e, t, n) {
                    var r = Math.sin(n),
                        i = Math.cos(n),
                        a = t[0],
                        o = t[1],
                        s = t[2],
                        u = t[3],
                        c = t[8],
                        l = t[9],
                        f = t[10],
                        d = t[11];
                    return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * i - c * r, e[1] = o * i - l * r, e[2] = s * i - f * r, e[3] = u * i - d * r, e[8] = a * r + c * i, e[9] = o * r + l * i, e[10] = s * r + f * i, e[11] = u * r + d * i, e
                }, t.rotateZ = function(e, t, n) {
                    var r = Math.sin(n),
                        i = Math.cos(n),
                        a = t[0],
                        o = t[1],
                        s = t[2],
                        u = t[3],
                        c = t[4],
                        l = t[5],
                        f = t[6],
                        d = t[7];
                    return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * i + c * r, e[1] = o * i + l * r, e[2] = s * i + f * r, e[3] = u * i + d * r, e[4] = c * i - a * r, e[5] = l * i - o * r, e[6] = f * i - s * r, e[7] = d * i - u * r, e
                }, t.fromTranslation = function(e, t) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e
                }, t.fromScaling = function(e, t) {
                    return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                }, t.fromRotation = function(e, t, n) {
                    var r = n[0],
                        i = n[1],
                        a = n[2],
                        o = Math.sqrt(r * r + i * i + a * a),
                        u = void 0,
                        c = void 0,
                        l = void 0;
                    return o < s.EPSILON ? null : (r *= o = 1 / o, i *= o, a *= o, u = Math.sin(t), c = Math.cos(t), l = 1 - c, e[0] = r * r * l + c, e[1] = i * r * l + a * u, e[2] = a * r * l - i * u, e[3] = 0, e[4] = r * i * l - a * u, e[5] = i * i * l + c, e[6] = a * i * l + r * u, e[7] = 0, e[8] = r * a * l + i * u, e[9] = i * a * l - r * u, e[10] = a * a * l + c, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e)
                }, t.fromXRotation = function(e, t) {
                    var n = Math.sin(t),
                        r = Math.cos(t);
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = n, e[7] = 0, e[8] = 0, e[9] = -n, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                }, t.fromYRotation = function(e, t) {
                    var n = Math.sin(t),
                        r = Math.cos(t);
                    return e[0] = r, e[1] = 0, e[2] = -n, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = n, e[9] = 0, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                }, t.fromZRotation = function(e, t) {
                    var n = Math.sin(t),
                        r = Math.cos(t);
                    return e[0] = r, e[1] = n, e[2] = 0, e[3] = 0, e[4] = -n, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                }, t.fromRotationTranslation = a, t.fromQuat2 = function(e, t) {
                    var n = new s.ARRAY_TYPE(3),
                        r = -t[0],
                        i = -t[1],
                        o = -t[2],
                        u = t[3],
                        c = t[4],
                        l = t[5],
                        f = t[6],
                        d = t[7],
                        h = r * r + i * i + o * o + u * u;
                    return h > 0 ? (n[0] = 2 * (c * u + d * r + l * o - f * i) / h, n[1] = 2 * (l * u + d * i + f * r - c * o) / h, n[2] = 2 * (f * u + d * o + c * i - l * r) / h) : (n[0] = 2 * (c * u + d * r + l * o - f * i), n[1] = 2 * (l * u + d * i + f * r - c * o), n[2] = 2 * (f * u + d * o + c * i - l * r)), a(e, t, n), e
                }, t.getTranslation = function(e, t) {
                    return e[0] = t[12], e[1] = t[13], e[2] = t[14], e
                }, t.getScaling = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[4],
                        o = t[5],
                        s = t[6],
                        u = t[8],
                        c = t[9],
                        l = t[10];
                    return e[0] = Math.sqrt(n * n + r * r + i * i), e[1] = Math.sqrt(a * a + o * o + s * s), e[2] = Math.sqrt(u * u + c * c + l * l), e
                }, t.getRotation = function(e, t) {
                    var n = t[0] + t[5] + t[10],
                        r = 0;
                    return n > 0 ? (r = 2 * Math.sqrt(n + 1), e[3] = .25 * r, e[0] = (t[6] - t[9]) / r, e[1] = (t[8] - t[2]) / r, e[2] = (t[1] - t[4]) / r) : t[0] > t[5] && t[0] > t[10] ? (r = 2 * Math.sqrt(1 + t[0] - t[5] - t[10]), e[3] = (t[6] - t[9]) / r, e[0] = .25 * r, e[1] = (t[1] + t[4]) / r, e[2] = (t[8] + t[2]) / r) : t[5] > t[10] ? (r = 2 * Math.sqrt(1 + t[5] - t[0] - t[10]), e[3] = (t[8] - t[2]) / r, e[0] = (t[1] + t[4]) / r, e[1] = .25 * r, e[2] = (t[6] + t[9]) / r) : (r = 2 * Math.sqrt(1 + t[10] - t[0] - t[5]), e[3] = (t[1] - t[4]) / r, e[0] = (t[8] + t[2]) / r, e[1] = (t[6] + t[9]) / r, e[2] = .25 * r), e
                }, t.fromRotationTranslationScale = function(e, t, n, r) {
                    var i = t[0],
                        a = t[1],
                        o = t[2],
                        s = t[3],
                        u = i + i,
                        c = a + a,
                        l = o + o,
                        f = i * u,
                        d = i * c,
                        h = i * l,
                        p = a * c,
                        v = a * l,
                        m = o * l,
                        g = s * u,
                        y = s * c,
                        b = s * l,
                        _ = r[0],
                        w = r[1],
                        E = r[2];
                    return e[0] = (1 - (p + m)) * _, e[1] = (d + b) * _, e[2] = (h - y) * _, e[3] = 0, e[4] = (d - b) * w, e[5] = (1 - (f + m)) * w, e[6] = (v + g) * w, e[7] = 0, e[8] = (h + y) * E, e[9] = (v - g) * E, e[10] = (1 - (f + p)) * E, e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
                }, t.fromRotationTranslationScaleOrigin = function(e, t, n, r, i) {
                    var a = t[0],
                        o = t[1],
                        s = t[2],
                        u = t[3],
                        c = a + a,
                        l = o + o,
                        f = s + s,
                        d = a * c,
                        h = a * l,
                        p = a * f,
                        v = o * l,
                        m = o * f,
                        g = s * f,
                        y = u * c,
                        b = u * l,
                        _ = u * f,
                        w = r[0],
                        E = r[1],
                        A = r[2],
                        x = i[0],
                        M = i[1],
                        T = i[2],
                        S = (1 - (v + g)) * w,
                        R = (h + _) * w,
                        C = (p - b) * w,
                        O = (h - _) * E,
                        P = (1 - (d + g)) * E,
                        k = (m + y) * E,
                        I = (p + b) * A,
                        F = (m - y) * A,
                        L = (1 - (d + v)) * A;
                    return e[0] = S, e[1] = R, e[2] = C, e[3] = 0, e[4] = O, e[5] = P, e[6] = k, e[7] = 0, e[8] = I, e[9] = F, e[10] = L, e[11] = 0, e[12] = n[0] + x - (S * x + O * M + I * T), e[13] = n[1] + M - (R * x + P * M + F * T), e[14] = n[2] + T - (C * x + k * M + L * T), e[15] = 1, e
                }, t.fromQuat = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = n + n,
                        s = r + r,
                        u = i + i,
                        c = n * o,
                        l = r * o,
                        f = r * s,
                        d = i * o,
                        h = i * s,
                        p = i * u,
                        v = a * o,
                        m = a * s,
                        g = a * u;
                    return e[0] = 1 - f - p, e[1] = l + g, e[2] = d - m, e[3] = 0, e[4] = l - g, e[5] = 1 - c - p, e[6] = h + v, e[7] = 0, e[8] = d + m, e[9] = h - v, e[10] = 1 - c - f, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                }, t.frustum = function(e, t, n, r, i, a, o) {
                    var s = 1 / (n - t),
                        u = 1 / (i - r),
                        c = 1 / (a - o);
                    return e[0] = 2 * a * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * a * u, e[6] = 0, e[7] = 0, e[8] = (n + t) * s, e[9] = (i + r) * u, e[10] = (o + a) * c, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = o * a * 2 * c, e[15] = 0, e
                }, t.perspective = function(e, t, n, r, i) {
                    var a = 1 / Math.tan(t / 2),
                        o = void 0;
                    return e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, null != i && i !== 1 / 0 ? (o = 1 / (r - i), e[10] = (i + r) * o, e[14] = 2 * i * r * o) : (e[10] = -1, e[14] = -2 * r), e
                }, t.perspectiveFromFieldOfView = function(e, t, n, r) {
                    var i = Math.tan(t.upDegrees * Math.PI / 180),
                        a = Math.tan(t.downDegrees * Math.PI / 180),
                        o = Math.tan(t.leftDegrees * Math.PI / 180),
                        s = Math.tan(t.rightDegrees * Math.PI / 180),
                        u = 2 / (o + s),
                        c = 2 / (i + a);
                    return e[0] = u, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = c, e[6] = 0, e[7] = 0, e[8] = -(o - s) * u * .5, e[9] = (i - a) * c * .5, e[10] = r / (n - r), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = r * n / (n - r), e[15] = 0, e
                }, t.ortho = function(e, t, n, r, i, a, o) {
                    var s = 1 / (t - n),
                        u = 1 / (r - i),
                        c = 1 / (a - o);
                    return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * u, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * c, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * u, e[14] = (o + a) * c, e[15] = 1, e
                }, t.lookAt = function(e, t, n, i) {
                    var a = void 0,
                        o = void 0,
                        u = void 0,
                        c = void 0,
                        l = void 0,
                        f = void 0,
                        d = void 0,
                        h = void 0,
                        p = void 0,
                        v = void 0,
                        m = t[0],
                        g = t[1],
                        y = t[2],
                        b = i[0],
                        _ = i[1],
                        w = i[2],
                        E = n[0],
                        A = n[1],
                        x = n[2];
                    return Math.abs(m - E) < s.EPSILON && Math.abs(g - A) < s.EPSILON && Math.abs(y - x) < s.EPSILON ? r(e) : (d = m - E, h = g - A, p = y - x, v = 1 / Math.sqrt(d * d + h * h + p * p), a = _ * (p *= v) - w * (h *= v), o = w * (d *= v) - b * p, u = b * h - _ * d, (v = Math.sqrt(a * a + o * o + u * u)) ? (a *= v = 1 / v, o *= v, u *= v) : (a = 0, o = 0, u = 0), c = h * u - p * o, l = p * a - d * u, f = d * o - h * a, (v = Math.sqrt(c * c + l * l + f * f)) ? (c *= v = 1 / v, l *= v, f *= v) : (c = 0, l = 0, f = 0), e[0] = a, e[1] = c, e[2] = d, e[3] = 0, e[4] = o, e[5] = l, e[6] = h, e[7] = 0, e[8] = u, e[9] = f, e[10] = p, e[11] = 0, e[12] = -(a * m + o * g + u * y), e[13] = -(c * m + l * g + f * y), e[14] = -(d * m + h * g + p * y), e[15] = 1, e)
                }, t.targetTo = function(e, t, n, r) {
                    var i = t[0],
                        a = t[1],
                        o = t[2],
                        s = r[0],
                        u = r[1],
                        c = r[2],
                        l = i - n[0],
                        f = a - n[1],
                        d = o - n[2],
                        h = l * l + f * f + d * d;
                    h > 0 && (h = 1 / Math.sqrt(h), l *= h, f *= h, d *= h);
                    var p = u * d - c * f,
                        v = c * l - s * d,
                        m = s * f - u * l;
                    return (h = p * p + v * v + m * m) > 0 && (h = 1 / Math.sqrt(h), p *= h, v *= h, m *= h), e[0] = p, e[1] = v, e[2] = m, e[3] = 0, e[4] = f * m - d * v, e[5] = d * p - l * m, e[6] = l * v - f * p, e[7] = 0, e[8] = l, e[9] = f, e[10] = d, e[11] = 0, e[12] = i, e[13] = a, e[14] = o, e[15] = 1, e
                }, t.str = function(e) {
                    return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")"
                }, t.frob = function(e) {
                    return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2) + Math.pow(e[9], 2) + Math.pow(e[10], 2) + Math.pow(e[11], 2) + Math.pow(e[12], 2) + Math.pow(e[13], 2) + Math.pow(e[14], 2) + Math.pow(e[15], 2))
                }, t.add = function(e, t, n) {
                    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e[9] = t[9] + n[9], e[10] = t[10] + n[10], e[11] = t[11] + n[11], e[12] = t[12] + n[12], e[13] = t[13] + n[13], e[14] = t[14] + n[14], e[15] = t[15] + n[15], e
                }, t.subtract = o, t.multiplyScalar = function(e, t, n) {
                    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12] * n, e[13] = t[13] * n, e[14] = t[14] * n, e[15] = t[15] * n, e
                }, t.multiplyScalarAndAdd = function(e, t, n, r) {
                    return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e[4] = t[4] + n[4] * r, e[5] = t[5] + n[5] * r, e[6] = t[6] + n[6] * r, e[7] = t[7] + n[7] * r, e[8] = t[8] + n[8] * r, e[9] = t[9] + n[9] * r, e[10] = t[10] + n[10] * r, e[11] = t[11] + n[11] * r, e[12] = t[12] + n[12] * r, e[13] = t[13] + n[13] * r, e[14] = t[14] + n[14] * r, e[15] = t[15] + n[15] * r, e
                }, t.exactEquals = function(e, t) {
                    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15]
                }, t.equals = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        a = e[3],
                        o = e[4],
                        u = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        d = e[9],
                        h = e[10],
                        p = e[11],
                        v = e[12],
                        m = e[13],
                        g = e[14],
                        y = e[15],
                        b = t[0],
                        _ = t[1],
                        w = t[2],
                        E = t[3],
                        A = t[4],
                        x = t[5],
                        M = t[6],
                        T = t[7],
                        S = t[8],
                        R = t[9],
                        C = t[10],
                        O = t[11],
                        P = t[12],
                        k = t[13],
                        I = t[14],
                        F = t[15];
                    return Math.abs(n - b) <= s.EPSILON * Math.max(1, Math.abs(n), Math.abs(b)) && Math.abs(r - _) <= s.EPSILON * Math.max(1, Math.abs(r), Math.abs(_)) && Math.abs(i - w) <= s.EPSILON * Math.max(1, Math.abs(i), Math.abs(w)) && Math.abs(a - E) <= s.EPSILON * Math.max(1, Math.abs(a), Math.abs(E)) && Math.abs(o - A) <= s.EPSILON * Math.max(1, Math.abs(o), Math.abs(A)) && Math.abs(u - x) <= s.EPSILON * Math.max(1, Math.abs(u), Math.abs(x)) && Math.abs(c - M) <= s.EPSILON * Math.max(1, Math.abs(c), Math.abs(M)) && Math.abs(l - T) <= s.EPSILON * Math.max(1, Math.abs(l), Math.abs(T)) && Math.abs(f - S) <= s.EPSILON * Math.max(1, Math.abs(f), Math.abs(S)) && Math.abs(d - R) <= s.EPSILON * Math.max(1, Math.abs(d), Math.abs(R)) && Math.abs(h - C) <= s.EPSILON * Math.max(1, Math.abs(h), Math.abs(C)) && Math.abs(p - O) <= s.EPSILON * Math.max(1, Math.abs(p), Math.abs(O)) && Math.abs(v - P) <= s.EPSILON * Math.max(1, Math.abs(v), Math.abs(P)) && Math.abs(m - k) <= s.EPSILON * Math.max(1, Math.abs(m), Math.abs(k)) && Math.abs(g - I) <= s.EPSILON * Math.max(1, Math.abs(g), Math.abs(I)) && Math.abs(y - F) <= s.EPSILON * Math.max(1, Math.abs(y), Math.abs(F))
                };
                var s = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0));
                t.mul = i, t.sub = o
            }, function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = t[4],
                        u = t[5],
                        c = t[6],
                        l = t[7],
                        f = t[8],
                        d = n[0],
                        h = n[1],
                        p = n[2],
                        v = n[3],
                        m = n[4],
                        g = n[5],
                        y = n[6],
                        b = n[7],
                        _ = n[8];
                    return e[0] = d * r + h * o + p * c, e[1] = d * i + h * s + p * l, e[2] = d * a + h * u + p * f, e[3] = v * r + m * o + g * c, e[4] = v * i + m * s + g * l, e[5] = v * a + m * u + g * f, e[6] = y * r + b * o + _ * c, e[7] = y * i + b * s + _ * l, e[8] = y * a + b * u + _ * f, e
                }

                function i(e, t, n) {
                    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sub = t.mul = void 0, t.create = function() {
                    var e = new a.ARRAY_TYPE(9);
                    return a.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e
                }, t.fromMat4 = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
                }, t.clone = function(e) {
                    var t = new a.ARRAY_TYPE(9);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
                }, t.copy = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
                }, t.fromValues = function(e, t, n, r, i, o, s, u, c) {
                    var l = new a.ARRAY_TYPE(9);
                    return l[0] = e, l[1] = t, l[2] = n, l[3] = r, l[4] = i, l[5] = o, l[6] = s, l[7] = u, l[8] = c, l
                }, t.set = function(e, t, n, r, i, a, o, s, u, c) {
                    return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e[4] = a, e[5] = o, e[6] = s, e[7] = u, e[8] = c, e
                }, t.identity = function(e) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
                }, t.transpose = function(e, t) {
                    if (e === t) {
                        var n = t[1],
                            r = t[2],
                            i = t[5];
                        e[1] = t[3], e[2] = t[6], e[3] = n, e[5] = t[7], e[6] = r, e[7] = i
                    } else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8];
                    return e
                }, t.invert = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = t[4],
                        s = t[5],
                        u = t[6],
                        c = t[7],
                        l = t[8],
                        f = l * o - s * c,
                        d = -l * a + s * u,
                        h = c * a - o * u,
                        p = n * f + r * d + i * h;
                    return p ? (p = 1 / p, e[0] = f * p, e[1] = (-l * r + i * c) * p, e[2] = (s * r - i * o) * p, e[3] = d * p, e[4] = (l * n - i * u) * p, e[5] = (-s * n + i * a) * p, e[6] = h * p, e[7] = (-c * n + r * u) * p, e[8] = (o * n - r * a) * p, e) : null
                }, t.adjoint = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = t[4],
                        s = t[5],
                        u = t[6],
                        c = t[7],
                        l = t[8];
                    return e[0] = o * l - s * c, e[1] = i * c - r * l, e[2] = r * s - i * o, e[3] = s * u - a * l, e[4] = n * l - i * u, e[5] = i * a - n * s, e[6] = a * c - o * u, e[7] = r * u - n * c, e[8] = n * o - r * a, e
                }, t.determinant = function(e) {
                    var t = e[0],
                        n = e[1],
                        r = e[2],
                        i = e[3],
                        a = e[4],
                        o = e[5],
                        s = e[6],
                        u = e[7],
                        c = e[8];
                    return t * (c * a - o * u) + n * (-c * i + o * s) + r * (u * i - a * s)
                }, t.multiply = r, t.translate = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = t[4],
                        u = t[5],
                        c = t[6],
                        l = t[7],
                        f = t[8],
                        d = n[0],
                        h = n[1];
                    return e[0] = r, e[1] = i, e[2] = a, e[3] = o, e[4] = s, e[5] = u, e[6] = d * r + h * o + c, e[7] = d * i + h * s + l, e[8] = d * a + h * u + f, e
                }, t.rotate = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = t[4],
                        u = t[5],
                        c = t[6],
                        l = t[7],
                        f = t[8],
                        d = Math.sin(n),
                        h = Math.cos(n);
                    return e[0] = h * r + d * o, e[1] = h * i + d * s, e[2] = h * a + d * u, e[3] = h * o - d * r, e[4] = h * s - d * i, e[5] = h * u - d * a, e[6] = c, e[7] = l, e[8] = f, e
                }, t.scale = function(e, t, n) {
                    var r = n[0],
                        i = n[1];
                    return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = i * t[3], e[4] = i * t[4], e[5] = i * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
                }, t.fromTranslation = function(e, t) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = t[0], e[7] = t[1], e[8] = 1, e
                }, t.fromRotation = function(e, t) {
                    var n = Math.sin(t),
                        r = Math.cos(t);
                    return e[0] = r, e[1] = n, e[2] = 0, e[3] = -n, e[4] = r, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
                }, t.fromScaling = function(e, t) {
                    return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = t[1], e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
                }, t.fromMat2d = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4], e[7] = t[5], e[8] = 1, e
                }, t.fromQuat = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = n + n,
                        s = r + r,
                        u = i + i,
                        c = n * o,
                        l = r * o,
                        f = r * s,
                        d = i * o,
                        h = i * s,
                        p = i * u,
                        v = a * o,
                        m = a * s,
                        g = a * u;
                    return e[0] = 1 - f - p, e[3] = l - g, e[6] = d + m, e[1] = l + g, e[4] = 1 - c - p, e[7] = h - v, e[2] = d - m, e[5] = h + v, e[8] = 1 - c - f, e
                }, t.normalFromMat4 = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = t[4],
                        s = t[5],
                        u = t[6],
                        c = t[7],
                        l = t[8],
                        f = t[9],
                        d = t[10],
                        h = t[11],
                        p = t[12],
                        v = t[13],
                        m = t[14],
                        g = t[15],
                        y = n * s - r * o,
                        b = n * u - i * o,
                        _ = n * c - a * o,
                        w = r * u - i * s,
                        E = r * c - a * s,
                        A = i * c - a * u,
                        x = l * v - f * p,
                        M = l * m - d * p,
                        T = l * g - h * p,
                        S = f * m - d * v,
                        R = f * g - h * v,
                        C = d * g - h * m,
                        O = y * C - b * R + _ * S + w * T - E * M + A * x;
                    return O ? (O = 1 / O, e[0] = (s * C - u * R + c * S) * O, e[1] = (u * T - o * C - c * M) * O, e[2] = (o * R - s * T + c * x) * O, e[3] = (i * R - r * C - a * S) * O, e[4] = (n * C - i * T + a * M) * O, e[5] = (r * T - n * R - a * x) * O, e[6] = (v * A - m * E + g * w) * O, e[7] = (m * _ - p * A - g * b) * O, e[8] = (p * E - v * _ + g * y) * O, e) : null
                }, t.projection = function(e, t, n) {
                    return e[0] = 2 / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = -2 / n, e[5] = 0, e[6] = -1, e[7] = 1, e[8] = 1, e
                }, t.str = function(e) {
                    return "mat3(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ")"
                }, t.frob = function(e) {
                    return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2))
                }, t.add = function(e, t, n) {
                    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e
                }, t.subtract = i, t.multiplyScalar = function(e, t, n) {
                    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e
                }, t.multiplyScalarAndAdd = function(e, t, n, r) {
                    return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e[4] = t[4] + n[4] * r, e[5] = t[5] + n[5] * r, e[6] = t[6] + n[6] * r, e[7] = t[7] + n[7] * r, e[8] = t[8] + n[8] * r, e
                }, t.exactEquals = function(e, t) {
                    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8]
                }, t.equals = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        s = e[4],
                        u = e[5],
                        c = e[6],
                        l = e[7],
                        f = e[8],
                        d = t[0],
                        h = t[1],
                        p = t[2],
                        v = t[3],
                        m = t[4],
                        g = t[5],
                        y = t[6],
                        b = t[7],
                        _ = t[8];
                    return Math.abs(n - d) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(d)) && Math.abs(r - h) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(i - p) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(p)) && Math.abs(o - v) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(s - m) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(u - g) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(g)) && Math.abs(c - y) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(y)) && Math.abs(l - b) <= a.EPSILON * Math.max(1, Math.abs(l), Math.abs(b)) && Math.abs(f - _) <= a.EPSILON * Math.max(1, Math.abs(f), Math.abs(_))
                };
                var a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0));
                t.mul = r, t.sub = i
            }, function(e, t, n) {
                "use strict";

                function r() {
                    var e = new f.ARRAY_TYPE(2);
                    return f.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0), e
                }

                function i(e, t, n) {
                    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
                }

                function a(e, t, n) {
                    return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e
                }

                function o(e, t, n) {
                    return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e
                }

                function s(e, t) {
                    var n = t[0] - e[0],
                        r = t[1] - e[1];
                    return Math.sqrt(n * n + r * r)
                }

                function u(e, t) {
                    var n = t[0] - e[0],
                        r = t[1] - e[1];
                    return n * n + r * r
                }

                function c(e) {
                    var t = e[0],
                        n = e[1];
                    return Math.sqrt(t * t + n * n)
                }

                function l(e) {
                    var t = e[0],
                        n = e[1];
                    return t * t + n * n
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.forEach = t.sqrLen = t.sqrDist = t.dist = t.div = t.mul = t.sub = t.len = void 0, t.create = r, t.clone = function(e) {
                    var t = new f.ARRAY_TYPE(2);
                    return t[0] = e[0], t[1] = e[1], t
                }, t.fromValues = function(e, t) {
                    var n = new f.ARRAY_TYPE(2);
                    return n[0] = e, n[1] = t, n
                }, t.copy = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e
                }, t.set = function(e, t, n) {
                    return e[0] = t, e[1] = n, e
                }, t.add = function(e, t, n) {
                    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
                }, t.subtract = i, t.multiply = a, t.divide = o, t.ceil = function(e, t) {
                    return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e
                }, t.floor = function(e, t) {
                    return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e
                }, t.min = function(e, t, n) {
                    return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e
                }, t.max = function(e, t, n) {
                    return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e
                }, t.round = function(e, t) {
                    return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e
                }, t.scale = function(e, t, n) {
                    return e[0] = t[0] * n, e[1] = t[1] * n, e
                }, t.scaleAndAdd = function(e, t, n, r) {
                    return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e
                }, t.distance = s, t.squaredDistance = u, t.length = c, t.squaredLength = l, t.negate = function(e, t) {
                    return e[0] = -t[0], e[1] = -t[1], e
                }, t.inverse = function(e, t) {
                    return e[0] = 1 / t[0], e[1] = 1 / t[1], e
                }, t.normalize = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = n * n + r * r;
                    return i > 0 && (i = 1 / Math.sqrt(i), e[0] = t[0] * i, e[1] = t[1] * i), e
                }, t.dot = function(e, t) {
                    return e[0] * t[0] + e[1] * t[1]
                }, t.cross = function(e, t, n) {
                    var r = t[0] * n[1] - t[1] * n[0];
                    return e[0] = e[1] = 0, e[2] = r, e
                }, t.lerp = function(e, t, n, r) {
                    var i = t[0],
                        a = t[1];
                    return e[0] = i + r * (n[0] - i), e[1] = a + r * (n[1] - a), e
                }, t.random = function(e, t) {
                    t = t || 1;
                    var n = 2 * f.RANDOM() * Math.PI;
                    return e[0] = Math.cos(n) * t, e[1] = Math.sin(n) * t, e
                }, t.transformMat2 = function(e, t, n) {
                    var r = t[0],
                        i = t[1];
                    return e[0] = n[0] * r + n[2] * i, e[1] = n[1] * r + n[3] * i, e
                }, t.transformMat2d = function(e, t, n) {
                    var r = t[0],
                        i = t[1];
                    return e[0] = n[0] * r + n[2] * i + n[4], e[1] = n[1] * r + n[3] * i + n[5], e
                }, t.transformMat3 = function(e, t, n) {
                    var r = t[0],
                        i = t[1];
                    return e[0] = n[0] * r + n[3] * i + n[6], e[1] = n[1] * r + n[4] * i + n[7], e
                }, t.transformMat4 = function(e, t, n) {
                    var r = t[0],
                        i = t[1];
                    return e[0] = n[0] * r + n[4] * i + n[12], e[1] = n[1] * r + n[5] * i + n[13], e
                }, t.rotate = function(e, t, n, r) {
                    var i = t[0] - n[0],
                        a = t[1] - n[1],
                        o = Math.sin(r),
                        s = Math.cos(r);
                    return e[0] = i * s - a * o + n[0], e[1] = i * o + a * s + n[1], e
                }, t.angle = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = t[0],
                        a = t[1],
                        o = n * n + r * r;
                    o > 0 && (o = 1 / Math.sqrt(o));
                    var s = i * i + a * a;
                    s > 0 && (s = 1 / Math.sqrt(s));
                    var u = (n * i + r * a) * o * s;
                    return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u)
                }, t.str = function(e) {
                    return "vec2(" + e[0] + ", " + e[1] + ")"
                }, t.exactEquals = function(e, t) {
                    return e[0] === t[0] && e[1] === t[1]
                }, t.equals = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = t[0],
                        a = t[1];
                    return Math.abs(n - i) <= f.EPSILON * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(r - a) <= f.EPSILON * Math.max(1, Math.abs(r), Math.abs(a))
                };
                var f = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0));
                t.len = c, t.sub = i, t.mul = a, t.div = o, t.dist = s, t.sqrDist = u, t.sqrLen = l, t.forEach = function() {
                    var e = r();
                    return function(t, n, r, i, a, o) {
                        var s = void 0,
                            u = void 0;
                        for (n || (n = 2), r || (r = 0), u = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < u; s += n) e[0] = t[s], e[1] = t[s + 1], a(e, e, o), t[s] = e[0], t[s + 1] = e[1];
                        return t
                    }
                }()
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }

                function i(e, t, n) {
                    var r = .5 * n[0],
                        i = .5 * n[1],
                        a = .5 * n[2],
                        o = t[0],
                        s = t[1],
                        u = t[2],
                        c = t[3];
                    return e[0] = o, e[1] = s, e[2] = u, e[3] = c, e[4] = r * c + i * u - a * s, e[5] = i * c + a * o - r * u, e[6] = a * c + r * s - i * o, e[7] = -r * o - i * s - a * u, e
                }

                function a(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e
                }

                function o(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = n[4],
                        u = n[5],
                        c = n[6],
                        l = n[7],
                        f = t[4],
                        d = t[5],
                        h = t[6],
                        p = t[7],
                        v = n[0],
                        m = n[1],
                        g = n[2],
                        y = n[3];
                    return e[0] = r * y + o * v + i * g - a * m, e[1] = i * y + o * m + a * v - r * g, e[2] = a * y + o * g + r * m - i * v, e[3] = o * y - r * v - i * m - a * g, e[4] = r * l + o * s + i * c - a * u + f * y + p * v + d * g - h * m, e[5] = i * l + o * u + a * s - r * c + d * y + p * m + h * v - f * g, e[6] = a * l + o * c + r * u - i * s + h * y + p * g + f * m - d * v, e[7] = o * l - r * s - i * u - a * c + p * y - f * v - d * m - h * g, e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sqrLen = t.squaredLength = t.len = t.length = t.dot = t.mul = t.setReal = t.getReal = void 0, t.create = function() {
                    var e = new s.ARRAY_TYPE(8);
                    return s.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[3] = 1, e
                }, t.clone = function(e) {
                    var t = new s.ARRAY_TYPE(8);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t
                }, t.fromValues = function(e, t, n, r, i, a, o, u) {
                    var c = new s.ARRAY_TYPE(8);
                    return c[0] = e, c[1] = t, c[2] = n, c[3] = r, c[4] = i, c[5] = a, c[6] = o, c[7] = u, c
                }, t.fromRotationTranslationValues = function(e, t, n, r, i, a, o) {
                    var u = new s.ARRAY_TYPE(8);
                    u[0] = e, u[1] = t, u[2] = n, u[3] = r;
                    var c = .5 * i,
                        l = .5 * a,
                        f = .5 * o;
                    return u[4] = c * r + l * n - f * t, u[5] = l * r + f * e - c * n, u[6] = f * r + c * t - l * e, u[7] = -c * e - l * t - f * n, u
                }, t.fromRotationTranslation = i, t.fromTranslation = function(e, t) {
                    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = .5 * t[0], e[5] = .5 * t[1], e[6] = .5 * t[2], e[7] = 0, e
                }, t.fromRotation = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e
                }, t.fromMat4 = function(e, t) {
                    var n = u.create();
                    c.getRotation(n, t);
                    var r = new s.ARRAY_TYPE(3);
                    return c.getTranslation(r, t), i(e, n, r), e
                }, t.copy = a, t.identity = function(e) {
                    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e
                }, t.set = function(e, t, n, r, i, a, o, s, u) {
                    return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e[4] = a, e[5] = o, e[6] = s, e[7] = u, e
                }, t.getDual = function(e, t) {
                    return e[0] = t[4], e[1] = t[5], e[2] = t[6], e[3] = t[7], e
                }, t.setDual = function(e, t) {
                    return e[4] = t[0], e[5] = t[1], e[6] = t[2], e[7] = t[3], e
                }, t.getTranslation = function(e, t) {
                    var n = t[4],
                        r = t[5],
                        i = t[6],
                        a = t[7],
                        o = -t[0],
                        s = -t[1],
                        u = -t[2],
                        c = t[3];
                    return e[0] = 2 * (n * c + a * o + r * u - i * s), e[1] = 2 * (r * c + a * s + i * o - n * u), e[2] = 2 * (i * c + a * u + n * s - r * o), e
                }, t.translate = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = .5 * n[0],
                        u = .5 * n[1],
                        c = .5 * n[2],
                        l = t[4],
                        f = t[5],
                        d = t[6],
                        h = t[7];
                    return e[0] = r, e[1] = i, e[2] = a, e[3] = o, e[4] = o * s + i * c - a * u + l, e[5] = o * u + a * s - r * c + f, e[6] = o * c + r * u - i * s + d, e[7] = -r * s - i * u - a * c + h, e
                }, t.rotateX = function(e, t, n) {
                    var r = -t[0],
                        i = -t[1],
                        a = -t[2],
                        o = t[3],
                        s = t[4],
                        c = t[5],
                        l = t[6],
                        f = t[7],
                        d = s * o + f * r + c * a - l * i,
                        h = c * o + f * i + l * r - s * a,
                        p = l * o + f * a + s * i - c * r,
                        v = f * o - s * r - c * i - l * a;
                    return u.rotateX(e, t, n), r = e[0], i = e[1], a = e[2], o = e[3], e[4] = d * o + v * r + h * a - p * i, e[5] = h * o + v * i + p * r - d * a, e[6] = p * o + v * a + d * i - h * r, e[7] = v * o - d * r - h * i - p * a, e
                }, t.rotateY = function(e, t, n) {
                    var r = -t[0],
                        i = -t[1],
                        a = -t[2],
                        o = t[3],
                        s = t[4],
                        c = t[5],
                        l = t[6],
                        f = t[7],
                        d = s * o + f * r + c * a - l * i,
                        h = c * o + f * i + l * r - s * a,
                        p = l * o + f * a + s * i - c * r,
                        v = f * o - s * r - c * i - l * a;
                    return u.rotateY(e, t, n), r = e[0], i = e[1], a = e[2], o = e[3], e[4] = d * o + v * r + h * a - p * i, e[5] = h * o + v * i + p * r - d * a, e[6] = p * o + v * a + d * i - h * r, e[7] = v * o - d * r - h * i - p * a, e
                }, t.rotateZ = function(e, t, n) {
                    var r = -t[0],
                        i = -t[1],
                        a = -t[2],
                        o = t[3],
                        s = t[4],
                        c = t[5],
                        l = t[6],
                        f = t[7],
                        d = s * o + f * r + c * a - l * i,
                        h = c * o + f * i + l * r - s * a,
                        p = l * o + f * a + s * i - c * r,
                        v = f * o - s * r - c * i - l * a;
                    return u.rotateZ(e, t, n), r = e[0], i = e[1], a = e[2], o = e[3], e[4] = d * o + v * r + h * a - p * i, e[5] = h * o + v * i + p * r - d * a, e[6] = p * o + v * a + d * i - h * r, e[7] = v * o - d * r - h * i - p * a, e
                }, t.rotateByQuatAppend = function(e, t, n) {
                    var r = n[0],
                        i = n[1],
                        a = n[2],
                        o = n[3],
                        s = t[0],
                        u = t[1],
                        c = t[2],
                        l = t[3];
                    return e[0] = s * o + l * r + u * a - c * i, e[1] = u * o + l * i + c * r - s * a, e[2] = c * o + l * a + s * i - u * r, e[3] = l * o - s * r - u * i - c * a, s = t[4], u = t[5], c = t[6], l = t[7], e[4] = s * o + l * r + u * a - c * i, e[5] = u * o + l * i + c * r - s * a, e[6] = c * o + l * a + s * i - u * r, e[7] = l * o - s * r - u * i - c * a, e
                }, t.rotateByQuatPrepend = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = n[0],
                        u = n[1],
                        c = n[2],
                        l = n[3];
                    return e[0] = r * l + o * s + i * c - a * u, e[1] = i * l + o * u + a * s - r * c, e[2] = a * l + o * c + r * u - i * s, e[3] = o * l - r * s - i * u - a * c, s = n[4], u = n[5], c = n[6], l = n[7], e[4] = r * l + o * s + i * c - a * u, e[5] = i * l + o * u + a * s - r * c, e[6] = a * l + o * c + r * u - i * s, e[7] = o * l - r * s - i * u - a * c, e
                }, t.rotateAroundAxis = function(e, t, n, r) {
                    if (Math.abs(r) < s.EPSILON) return a(e, t);
                    var i = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
                    r *= .5;
                    var o = Math.sin(r),
                        u = o * n[0] / i,
                        c = o * n[1] / i,
                        l = o * n[2] / i,
                        f = Math.cos(r),
                        d = t[0],
                        h = t[1],
                        p = t[2],
                        v = t[3];
                    e[0] = d * f + v * u + h * l - p * c, e[1] = h * f + v * c + p * u - d * l, e[2] = p * f + v * l + d * c - h * u, e[3] = v * f - d * u - h * c - p * l;
                    var m = t[4],
                        g = t[5],
                        y = t[6],
                        b = t[7];
                    return e[4] = m * f + b * u + g * l - y * c, e[5] = g * f + b * c + y * u - m * l, e[6] = y * f + b * l + m * c - g * u, e[7] = b * f - m * u - g * c - y * l, e
                }, t.add = function(e, t, n) {
                    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e
                }, t.multiply = o, t.scale = function(e, t, n) {
                    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e
                }, t.lerp = function(e, t, n, r) {
                    var i = 1 - r;
                    return l(t, n) < 0 && (r = -r), e[0] = t[0] * i + n[0] * r, e[1] = t[1] * i + n[1] * r, e[2] = t[2] * i + n[2] * r, e[3] = t[3] * i + n[3] * r, e[4] = t[4] * i + n[4] * r, e[5] = t[5] * i + n[5] * r, e[6] = t[6] * i + n[6] * r, e[7] = t[7] * i + n[7] * r, e
                }, t.invert = function(e, t) {
                    var n = d(t);
                    return e[0] = -t[0] / n, e[1] = -t[1] / n, e[2] = -t[2] / n, e[3] = t[3] / n, e[4] = -t[4] / n, e[5] = -t[5] / n, e[6] = -t[6] / n, e[7] = t[7] / n, e
                }, t.conjugate = function(e, t) {
                    return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e[4] = -t[4], e[5] = -t[5], e[6] = -t[6], e[7] = t[7], e
                }, t.normalize = function(e, t) {
                    var n = d(t);
                    if (n > 0) {
                        n = Math.sqrt(n);
                        var r = t[0] / n,
                            i = t[1] / n,
                            a = t[2] / n,
                            o = t[3] / n,
                            s = t[4],
                            u = t[5],
                            c = t[6],
                            l = t[7],
                            f = r * s + i * u + a * c + o * l;
                        e[0] = r, e[1] = i, e[2] = a, e[3] = o, e[4] = (s - r * f) / n, e[5] = (u - i * f) / n, e[6] = (c - a * f) / n, e[7] = (l - o * f) / n
                    }
                    return e
                }, t.str = function(e) {
                    return "quat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ")"
                }, t.exactEquals = function(e, t) {
                    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7]
                }, t.equals = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        a = e[3],
                        o = e[4],
                        u = e[5],
                        c = e[6],
                        l = e[7],
                        f = t[0],
                        d = t[1],
                        h = t[2],
                        p = t[3],
                        v = t[4],
                        m = t[5],
                        g = t[6],
                        y = t[7];
                    return Math.abs(n - f) <= s.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(r - d) <= s.EPSILON * Math.max(1, Math.abs(r), Math.abs(d)) && Math.abs(i - h) <= s.EPSILON * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(a - p) <= s.EPSILON * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(o - v) <= s.EPSILON * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(u - m) <= s.EPSILON * Math.max(1, Math.abs(u), Math.abs(m)) && Math.abs(c - g) <= s.EPSILON * Math.max(1, Math.abs(c), Math.abs(g)) && Math.abs(l - y) <= s.EPSILON * Math.max(1, Math.abs(l), Math.abs(y))
                };
                var s = r(n(0)),
                    u = r(n(3)),
                    c = r(n(4));
                t.getReal = u.copy, t.setReal = u.copy, t.mul = o;
                var l = t.dot = u.dot,
                    f = t.length = u.length,
                    d = (t.len = f, t.squaredLength = u.squaredLength);
                t.sqrLen = d
            }, function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = t[4],
                        u = t[5],
                        c = n[0],
                        l = n[1],
                        f = n[2],
                        d = n[3],
                        h = n[4],
                        p = n[5];
                    return e[0] = r * c + a * l, e[1] = i * c + o * l, e[2] = r * f + a * d, e[3] = i * f + o * d, e[4] = r * h + a * p + s, e[5] = i * h + o * p + u, e
                }

                function i(e, t, n) {
                    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sub = t.mul = void 0, t.create = function() {
                    var e = new a.ARRAY_TYPE(6);
                    return a.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[4] = 0, e[5] = 0), e[0] = 1, e[3] = 1, e
                }, t.clone = function(e) {
                    var t = new a.ARRAY_TYPE(6);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
                }, t.copy = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
                }, t.identity = function(e) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
                }, t.fromValues = function(e, t, n, r, i, o) {
                    var s = new a.ARRAY_TYPE(6);
                    return s[0] = e, s[1] = t, s[2] = n, s[3] = r, s[4] = i, s[5] = o, s
                }, t.set = function(e, t, n, r, i, a, o) {
                    return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e[4] = a, e[5] = o, e
                }, t.invert = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = t[4],
                        s = t[5],
                        u = n * a - r * i;
                    return u ? (u = 1 / u, e[0] = a * u, e[1] = -r * u, e[2] = -i * u, e[3] = n * u, e[4] = (i * s - a * o) * u, e[5] = (r * o - n * s) * u, e) : null
                }, t.determinant = function(e) {
                    return e[0] * e[3] - e[1] * e[2]
                }, t.multiply = r, t.rotate = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = t[4],
                        u = t[5],
                        c = Math.sin(n),
                        l = Math.cos(n);
                    return e[0] = r * l + a * c, e[1] = i * l + o * c, e[2] = r * -c + a * l, e[3] = i * -c + o * l, e[4] = s, e[5] = u, e
                }, t.scale = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = t[4],
                        u = t[5],
                        c = n[0],
                        l = n[1];
                    return e[0] = r * c, e[1] = i * c, e[2] = a * l, e[3] = o * l, e[4] = s, e[5] = u, e
                }, t.translate = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = t[4],
                        u = t[5],
                        c = n[0],
                        l = n[1];
                    return e[0] = r, e[1] = i, e[2] = a, e[3] = o, e[4] = r * c + a * l + s, e[5] = i * c + o * l + u, e
                }, t.fromRotation = function(e, t) {
                    var n = Math.sin(t),
                        r = Math.cos(t);
                    return e[0] = r, e[1] = n, e[2] = -n, e[3] = r, e[4] = 0, e[5] = 0, e
                }, t.fromScaling = function(e, t) {
                    return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e[4] = 0, e[5] = 0, e
                }, t.fromTranslation = function(e, t) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0], e[5] = t[1], e
                }, t.str = function(e) {
                    return "mat2d(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ")"
                }, t.frob = function(e) {
                    return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + 1)
                }, t.add = function(e, t, n) {
                    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e
                }, t.subtract = i, t.multiplyScalar = function(e, t, n) {
                    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e
                }, t.multiplyScalarAndAdd = function(e, t, n, r) {
                    return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e[4] = t[4] + n[4] * r, e[5] = t[5] + n[5] * r, e
                }, t.exactEquals = function(e, t) {
                    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5]
                }, t.equals = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        s = e[4],
                        u = e[5],
                        c = t[0],
                        l = t[1],
                        f = t[2],
                        d = t[3],
                        h = t[4],
                        p = t[5];
                    return Math.abs(n - c) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(c)) && Math.abs(r - l) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(i - f) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(f)) && Math.abs(o - d) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(s - h) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(h)) && Math.abs(u - p) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(p))
                };
                var a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0));
                t.mul = r, t.sub = i
            }, function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = n[0],
                        u = n[1],
                        c = n[2],
                        l = n[3];
                    return e[0] = r * s + a * u, e[1] = i * s + o * u, e[2] = r * c + a * l, e[3] = i * c + o * l, e
                }

                function i(e, t, n) {
                    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sub = t.mul = void 0, t.create = function() {
                    var e = new a.ARRAY_TYPE(4);
                    return a.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0), e[0] = 1, e[3] = 1, e
                }, t.clone = function(e) {
                    var t = new a.ARRAY_TYPE(4);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
                }, t.copy = function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
                }, t.identity = function(e) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e
                }, t.fromValues = function(e, t, n, r) {
                    var i = new a.ARRAY_TYPE(4);
                    return i[0] = e, i[1] = t, i[2] = n, i[3] = r, i
                }, t.set = function(e, t, n, r, i) {
                    return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e
                }, t.transpose = function(e, t) {
                    if (e === t) {
                        var n = t[1];
                        e[1] = t[2], e[2] = n
                    } else e[0] = t[0], e[1] = t[2], e[2] = t[1], e[3] = t[3];
                    return e
                }, t.invert = function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = n * a - i * r;
                    return o ? (o = 1 / o, e[0] = a * o, e[1] = -r * o, e[2] = -i * o, e[3] = n * o, e) : null
                }, t.adjoint = function(e, t) {
                    var n = t[0];
                    return e[0] = t[3], e[1] = -t[1], e[2] = -t[2], e[3] = n, e
                }, t.determinant = function(e) {
                    return e[0] * e[3] - e[2] * e[1]
                }, t.multiply = r, t.rotate = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = Math.sin(n),
                        u = Math.cos(n);
                    return e[0] = r * u + a * s, e[1] = i * u + o * s, e[2] = r * -s + a * u, e[3] = i * -s + o * u, e
                }, t.scale = function(e, t, n) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = n[0],
                        u = n[1];
                    return e[0] = r * s, e[1] = i * s, e[2] = a * u, e[3] = o * u, e
                }, t.fromRotation = function(e, t) {
                    var n = Math.sin(t),
                        r = Math.cos(t);
                    return e[0] = r, e[1] = n, e[2] = -n, e[3] = r, e
                }, t.fromScaling = function(e, t) {
                    return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e
                }, t.str = function(e) {
                    return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
                }, t.frob = function(e) {
                    return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2))
                }, t.LDU = function(e, t, n, r) {
                    return e[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - e[2] * n[1], [e, t, n]
                }, t.add = function(e, t, n) {
                    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e
                }, t.subtract = i, t.exactEquals = function(e, t) {
                    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
                }, t.equals = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        s = t[0],
                        u = t[1],
                        c = t[2],
                        l = t[3];
                    return Math.abs(n - s) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(r - u) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(i - c) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(c)) && Math.abs(o - l) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(l))
                }, t.multiplyScalar = function(e, t, n) {
                    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e
                }, t.multiplyScalarAndAdd = function(e, t, n, r) {
                    return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e
                };
                var a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0));
                t.mul = r, t.sub = i
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.vec4 = t.vec3 = t.vec2 = t.quat2 = t.quat = t.mat4 = t.mat3 = t.mat2d = t.mat2 = t.glMatrix = void 0;
                var i = r(n(0)),
                    a = r(n(9)),
                    o = r(n(8)),
                    s = r(n(5)),
                    u = r(n(4)),
                    c = r(n(3)),
                    l = r(n(7)),
                    f = r(n(6)),
                    d = r(n(2)),
                    h = r(n(1));
                t.glMatrix = i, t.mat2 = a, t.mat2d = o, t.mat3 = s, t.mat4 = u, t.quat = c, t.quat2 = l, t.vec2 = f, t.vec3 = d, t.vec4 = h
            }])
        })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            this.gl = e, this.gl.lastAttribCount = 0, this._vref = this._fref = this._relink = this.vertShader = this.fragShader = this.program = this.attributes = this.uniforms = this.types = null
        }

        function i(e, t) {
            return e.name < t.name ? -1 : 1
        }

        function a(e, t, n, i, a) {
            var o = new r(e);
            return o.update(t, n, i, a), o
        }
        var o = n(54),
            s = n(57),
            u = n(55),
            c = n(58),
            l = n(79),
            f = n(56),
            d = r.prototype;
        d.bind = function() {
            this.program || this._relink();
            var e, t = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES),
                n = this.gl.lastAttribCount;
            if (t > n)
                for (e = n; e < t; e++) this.gl.enableVertexAttribArray(e);
            else if (n > t)
                for (e = t; e < n; e++) this.gl.disableVertexAttribArray(e);
            this.gl.lastAttribCount = t, this.gl.useProgram(this.program)
        }, d.dispose = function() {
            for (var e = this.gl.lastAttribCount, t = 0; t < e; t++) this.gl.disableVertexAttribArray(t);
            this.gl.lastAttribCount = 0, this._fref && this._fref.dispose(), this._vref && this._vref.dispose(), this.attributes = this.types = this.vertShader = this.fragShader = this.program = this._relink = this._fref = this._vref = null
        }, d.update = function(e, t, n, r) {
            function a() {
                h.program = c.program(p, h._vref, h._fref, w, E);
                for (var e = 0; e < n.length; ++e) R[e] = p.getUniformLocation(h.program, n[e].name)
            }
            if (!t || 1 === arguments.length) {
                var d = e;
                e = d.vertex, t = d.fragment, n = d.uniforms, r = d.attributes
            }
            var h = this,
                p = h.gl,
                v = h._vref;
            h._vref = c.shader(p, p.VERTEX_SHADER, e), v && v.dispose(), h.vertShader = h._vref.shader;
            var m = this._fref;
            if (h._fref = c.shader(p, p.FRAGMENT_SHADER, t), m && m.dispose(), h.fragShader = h._fref.shader, !n || !r) {
                var g = p.createProgram();
                if (p.attachShader(g, h.fragShader), p.attachShader(g, h.vertShader), p.linkProgram(g), !p.getProgramParameter(g, p.LINK_STATUS)) {
                    var y = p.getProgramInfoLog(g);
                    throw new f(y, "Error linking program:" + y)
                }
                n = n || l.uniforms(p, g), r = r || l.attributes(p, g), p.deleteProgram(g)
            }
            r = r.slice(), r.sort(i);
            var b, _ = [],
                w = [],
                E = [];
            for (b = 0; b < r.length; ++b) {
                var A = r[b];
                if (A.type.indexOf("mat") >= 0) {
                    for (var x = 0 | A.type.charAt(A.type.length - 1), M = new Array(x), T = 0; T < x; ++T) M[T] = E.length, w.push(A.name + "[" + T + "]"), "number" == typeof A.location ? E.push(A.location + T) : Array.isArray(A.location) && A.location.length === x && "number" == typeof A.location[T] ? E.push(0 | A.location[T]) : E.push(-1);
                    _.push({
                        name: A.name,
                        type: A.type,
                        locations: M
                    })
                } else _.push({
                    name: A.name,
                    type: A.type,
                    locations: [E.length]
                }), w.push(A.name), "number" == typeof A.location ? E.push(0 | A.location) : E.push(-1)
            }
            var S = 0;
            for (b = 0; b < E.length; ++b)
                if (E[b] < 0) {
                    for (; E.indexOf(S) >= 0;) S += 1;
                    E[b] = S
                } var R = new Array(n.length);
            a(), h._relink = a, h.types = {
                uniforms: u(n),
                attributes: u(r)
            }, h.attributes = s(p, h, _, E), Object.defineProperty(h, "uniforms", o(p, h, n, R))
        }, e.exports = a
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = new Function("y", "return function(){return y}");
            return t(e)
        }

        function i(e, t) {
            for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t;
            return n
        }

        function a(e, t, n, a) {
            function u(n) {
                var r = new Function("gl", "wrapper", "locations", "return function(){return gl.getUniform(wrapper.program,locations[" + n + "])}");
                return r(e, t, a)
            }

            function c(e, t, n) {
                switch (n) {
                    case "bool":
                    case "int":
                    case "sampler2D":
                    case "samplerCube":
                        return "gl.uniform1i(locations[" + t + "],obj" + e + ")";
                    case "float":
                        return "gl.uniform1f(locations[" + t + "],obj" + e + ")";
                    default:
                        var r = n.indexOf("vec");
                        if (!(0 <= r && r <= 1 && n.length === 4 + r)) {
                            if (0 === n.indexOf("mat") && 4 === n.length) {
                                var i = n.charCodeAt(n.length - 1) - 48;
                                if (i < 2 || i > 4) throw new s("", "Invalid uniform dimension type for matrix " + name + ": " + n);
                                return "gl.uniformMatrix" + i + "fv(locations[" + t + "],false,obj" + e + ")"
                            }
                            throw new s("", "Unknown uniform data type for " + name + ": " + n)
                        }
                        var i = n.charCodeAt(n.length - 1) - 48;
                        if (i < 2 || i > 4) throw new s("", "Invalid data type");
                        switch (n.charAt(0)) {
                            case "b":
                            case "i":
                                return "gl.uniform" + i + "iv(locations[" + t + "],obj" + e + ")";
                            case "v":
                                return "gl.uniform" + i + "fv(locations[" + t + "],obj" + e + ")";
                            default:
                                throw new s("", "Unrecognized data type for vector " + name + ": " + n)
                        }
                }
            }

            function l(e, t) {
                if ("object" != typeof t) return [
                    [e, t]
                ];
                var n = [];
                for (var r in t) {
                    var i = t[r],
                        a = e;
                    a += parseInt(r) + "" === r ? "[" + r + "]" : "." + r, "object" == typeof i ? n.push.apply(n, l(a, i)) : n.push([a, i])
                }
                return n
            }

            function f(t) {
                for (var r = ["return function updateProperty(obj){"], i = l("", t), o = 0; o < i.length; ++o) {
                    var s = i[o],
                        u = s[0],
                        f = s[1];
                    a[f] && r.push(c(u, f, n[f].type))
                }
                r.push("return obj}");
                var d = new Function("gl", "locations", r.join("\n"));
                return d(e, a)
            }

            function d(e) {
                switch (e) {
                    case "bool":
                        return !1;
                    case "int":
                    case "sampler2D":
                    case "samplerCube":
                        return 0;
                    case "float":
                        return 0;
                    default:
                        var t = e.indexOf("vec");
                        if (0 <= t && t <= 1 && e.length === 4 + t) {
                            var n = e.charCodeAt(e.length - 1) - 48;
                            if (n < 2 || n > 4) throw new s("", "Invalid data type");
                            return "b" === e.charAt(0) ? i(n, !1) : i(n, 0)
                        }
                        if (0 === e.indexOf("mat") && 4 === e.length) {
                            var n = e.charCodeAt(e.length - 1) - 48;
                            if (n < 2 || n > 4) throw new s("", "Invalid uniform dimension type for matrix " + name + ": " + e);
                            return i(n * n, 0)
                        }
                        throw new s("", "Unknown uniform data type for " + name + ": " + e)
                }
            }

            function h(e, t, i) {
                if ("object" == typeof i) {
                    var o = p(i);
                    Object.defineProperty(e, t, {
                        get: r(o),
                        set: f(i),
                        enumerable: !0,
                        configurable: !1
                    })
                } else a[i] ? Object.defineProperty(e, t, {
                    get: u(i),
                    set: f(i),
                    enumerable: !0,
                    configurable: !1
                }) : e[t] = d(n[i].type)
            }

            function p(e) {
                var t;
                if (Array.isArray(e)) {
                    t = new Array(e.length);
                    for (var n = 0; n < e.length; ++n) h(t, n, e[n])
                } else {
                    t = {};
                    for (var r in e) h(t, r, e[r])
                }
                return t
            }
            var v = o(n, !0);
            return {
                get: r(p(v)),
                set: f(v),
                enumerable: !0,
                configurable: !0
            }
        }
        var o = n(55),
            s = n(56);
        e.exports = a
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            for (var n = {}, r = 0; r < e.length; ++r)
                for (var i = e[r].name, a = i.split("."), o = n, s = 0; s < a.length; ++s) {
                    var u = a[s].split("[");
                    if (u.length > 1) {
                        u[0] in o || (o[u[0]] = []), o = o[u[0]];
                        for (var c = 1; c < u.length; ++c) {
                            var l = parseInt(u[c]);
                            c < u.length - 1 || s < a.length - 1 ? (l in o || (c < u.length - 1 ? o[l] = [] : o[l] = {}), o = o[l]) : t ? o[l] = r : o[l] = e[r].type
                        }
                    } else s < a.length - 1 ? (u[0] in o || (o[u[0]] = {}), o = o[u[0]]) : t ? o[u[0]] = r : o[u[0]] = e[r].type
                }
            return n
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t, n) {
            this.shortMessage = t || "", this.longMessage = n || "", this.rawError = e || "", this.message = "gl-shader: " + (t || e || "") + (n ? "\n" + n : ""), this.stack = (new Error).stack
        }
        n.prototype = new Error, n.prototype.name = "GLError", n.prototype.constructor = n, e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n, r, i, a) {
            this._gl = e, this._wrapper = t, this._index = n, this._locations = r, this._dimension = i, this._constFunc = a
        }

        function i(e, t, n, i, a, o, s) {
            for (var u = ["gl", "v"], c = [], l = 0; l < a; ++l) u.push("x" + l), c.push("x" + l);
            u.push("if(x0.length===void 0){return gl.vertexAttrib" + a + "f(v," + c.join() + ")}else{return gl.vertexAttrib" + a + "fv(v,x0)}");
            var f = Function.apply(null, u),
                d = new r(e, t, n, i, a, f);
            Object.defineProperty(o, s, {
                set: function(t) {
                    return e.disableVertexAttribArray(i[n]), f(e, i[n], t), t
                },
                get: function() {
                    return d
                },
                enumerable: !0
            })
        }

        function a(e, t, n, r, a, o, s) {
            for (var u = new Array(a), c = new Array(a), l = 0; l < a; ++l) i(e, t, n[l], r, a, u, l), c[l] = u[l];
            Object.defineProperty(u, "location", {
                set: function(e) {
                    if (Array.isArray(e))
                        for (var t = 0; t < a; ++t) c[t].location = e[t];
                    else
                        for (var t = 0; t < a; ++t) c[t].location = e + t;
                    return e
                },
                get: function() {
                    for (var e = new Array(a), t = 0; t < a; ++t) e[t] = r[n[t]];
                    return e
                },
                enumerable: !0
            }), u.pointer = function(t, i, o, s) {
                t = t || e.FLOAT, i = !!i, o = o || a * a, s = s || 0;
                for (var u = 0; u < a; ++u) {
                    var c = r[n[u]];
                    e.vertexAttribPointer(c, a, t, i, o, s + u * a), e.enableVertexAttribArray(c)
                }
            };
            var f = new Array(a),
                d = e["vertexAttrib" + a + "fv"];
            Object.defineProperty(o, s, {
                set: function(t) {
                    for (var i = 0; i < a; ++i) {
                        var o = r[n[i]];
                        if (e.disableVertexAttribArray(o), Array.isArray(t[0])) d.call(e, o, t[i]);
                        else {
                            for (var s = 0; s < a; ++s) f[s] = t[a * i + s];
                            d.call(e, o, f)
                        }
                    }
                    return t
                },
                get: function() {
                    return u
                },
                enumerable: !0
            })
        }

        function o(e, t, n, r) {
            for (var o = {}, u = 0, c = n.length; u < c; ++u) {
                var l = n[u],
                    f = l.name,
                    d = l.type,
                    h = l.locations;
                switch (d) {
                    case "bool":
                    case "int":
                    case "float":
                        i(e, t, h[0], r, 1, o, f);
                        break;
                    default:
                        if (d.indexOf("vec") >= 0) {
                            var p = d.charCodeAt(d.length - 1) - 48;
                            if (p < 2 || p > 4) throw new s("", "Invalid data type for attribute " + f + ": " + d);
                            i(e, t, h[0], r, p, o, f)
                        } else {
                            if (!(d.indexOf("mat") >= 0)) throw new s("", "Unknown data type for attribute " + f + ": " + d);
                            var p = d.charCodeAt(d.length - 1) - 48;
                            if (p < 2 || p > 4) throw new s("", "Invalid data type for attribute " + f + ": " + d);
                            a(e, t, h, r, p, o, f)
                        }
                }
            }
            return o
        }
        e.exports = o;
        var s = n(56),
            u = r.prototype;
        u.pointer = function(e, t, n, r) {
            var i = this,
                a = i._gl,
                o = i._locations[i._index];
            a.vertexAttribPointer(o, i._dimension, e || a.FLOAT, !!t, n || 0, r || 0), a.enableVertexAttribArray(o)
        }, u.set = function(e, t, n, r) {
            return this._constFunc(this._locations[this._index], e, t, n, r)
        }, Object.defineProperty(u, "location", {
            get: function() {
                return this._locations[this._index]
            },
            set: function(e) {
                return e !== this._locations[this._index] && (this._locations[this._index] = 0 | e, this._wrapper.program = null), 0 | e
            }
        })
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n, r, i, a, o) {
            this.id = e, this.src = t, this.type = n, this.shader = r, this.count = a, this.programs = [], this.cache = o
        }

        function i(e) {
            this.gl = e, this.shaders = [{}, {}], this.programs = {}
        }

        function a(e, t, n) {
            var r = e.createShader(t);
            if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
                var i = e.getShaderInfoLog(r);
                try {
                    var a = f(i, n, t)
                } catch (e) {
                    throw console.warn("Failed to format compiler error: " + e), new l(i, "Error compiling shader:\n" + i)
                }
                throw new l(i, a.short, a.long)
            }
            return r
        }

        function o(e, t, n, r, i) {
            var a = e.createProgram();
            e.attachShader(a, t), e.attachShader(a, n);
            for (var o = 0; o < r.length; ++o) e.bindAttribLocation(a, i[o], r[o]);
            if (e.linkProgram(a), !e.getProgramParameter(a, e.LINK_STATUS)) {
                var s = e.getProgramInfoLog(a);
                throw new l(s, "Error linking program: " + s)
            }
            return a
        }

        function s(e) {
            var t = h.get(e);
            return t || (t = new i(e), h.set(e, t)), t
        }

        function u(e, t, n) {
            return s(e).getShaderReference(t, n)
        }

        function c(e, t, n, r, i) {
            return s(e).getProgram(t, n, r, i)
        }
        t.shader = u, t.program = c;
        var l = n(56),
            f = n(59),
            d = "undefined" == typeof WeakMap ? n(76) : WeakMap,
            h = new d,
            p = 0;
        r.prototype.dispose = function() {
            if (0 === --this.count) {
                for (var e = this.cache, t = e.gl, n = this.programs, r = 0, i = n.length; r < i; ++r) {
                    var a = e.programs[n[r]];
                    a && (delete e.programs[r], t.deleteProgram(a))
                }
                t.deleteShader(this.shader), delete e.shaders[this.type === t.FRAGMENT_SHADER | 0][this.src]
            }
        };
        var v = i.prototype;
        v.getShaderReference = function(e, t) {
            var n = this.gl,
                i = this.shaders[e === n.FRAGMENT_SHADER | 0],
                o = i[t];
            if (o && n.isShader(o.shader)) o.count += 1;
            else {
                var s = a(n, e, t);
                o = i[t] = new r(p++, t, e, s, [], 1, this)
            }
            return o
        }, v.getProgram = function(e, t, n, r) {
            var i = [e.id, t.id, n.join(":"), r.join(":")].join("@"),
                a = this.programs[i];
            return a && this.gl.isProgram(a) || (this.programs[i] = a = o(this.gl, e.shader, t.shader, n, r), e.programs.push(i), t.programs.push(i)), a
        }
    }, function(e, t, n) {
        function r(e, t, n) {
            "use strict";
            var r = o(t) || "of unknown name (see npm glsl-shader-name)",
                u = "unknown type";
            void 0 !== n && (u = n === a.FRAGMENT_SHADER ? "fragment" : "vertex");
            for (var c = i("Error compiling %s shader %s:\n", u, r), l = i("%s%s", c, e), f = e.split("\n"), d = {}, h = 0; h < f.length; h++) {
                var p = f[h];
                if ("" !== p && "\0" !== p) {
                    var v = parseInt(p.split(":")[2]);
                    if (isNaN(v)) throw new Error(i("Could not parse error: %s", p));
                    d[v] = p
                }
            }
            for (var m = s(t).split("\n"), h = 0; h < m.length; h++)
                if (d[h + 3] || d[h + 2] || d[h + 1]) {
                    var g = m[h];
                    if (c += g + "\n", d[h + 1]) {
                        var y = d[h + 1];
                        y = y.substr(y.split(":", 3).join(":").length + 1).trim(), c += i("^^^ %s\n\n", y)
                    }
                } return {
                long: c.trim(),
                short: l.trim()
            }
        }
        var i = n(60).sprintf,
            a = n(62),
            o = n(64),
            s = n(73);
        e.exports = r
    }, function(e, t, n) {
        var r;
        ! function() {
            "use strict";

            function i(e) {
                return o(s(e), arguments)
            }

            function a(e, t) {
                return i.apply(null, [e].concat(t || []))
            }

            function o(e, t) {
                var n, r, a, o, s, c, l, f, d, h = 1,
                    p = e.length,
                    v = "";
                for (r = 0; r < p; r++)
                    if ("string" == typeof e[r]) v += e[r];
                    else if ("object" == typeof e[r]) {
                    if (o = e[r], o.keys)
                        for (n = t[h], a = 0; a < o.keys.length; a++) {
                            if (void 0 == n) throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"', o.keys[a], o.keys[a - 1]));
                            n = n[o.keys[a]]
                        } else n = o.param_no ? t[o.param_no] : t[h++];
                    if (u.not_type.test(o.type) && u.not_primitive.test(o.type) && n instanceof Function && (n = n()), u.numeric_arg.test(o.type) && "number" != typeof n && isNaN(n)) throw new TypeError(i("[sprintf] expecting number but found %T", n));
                    switch (u.number.test(o.type) && (f = n >= 0), o.type) {
                        case "b":
                            n = parseInt(n, 10).toString(2);
                            break;
                        case "c":
                            n = String.fromCharCode(parseInt(n, 10));
                            break;
                        case "d":
                        case "i":
                            n = parseInt(n, 10);
                            break;
                        case "j":
                            n = JSON.stringify(n, null, o.width ? parseInt(o.width) : 0);
                            break;
                        case "e":
                            n = o.precision ? parseFloat(n).toExponential(o.precision) : parseFloat(n).toExponential();
                            break;
                        case "f":
                            n = o.precision ? parseFloat(n).toFixed(o.precision) : parseFloat(n);
                            break;
                        case "g":
                            n = o.precision ? String(Number(n.toPrecision(o.precision))) : parseFloat(n);
                            break;
                        case "o":
                            n = (parseInt(n, 10) >>> 0).toString(8);
                            break;
                        case "s":
                            n = String(n), n = o.precision ? n.substring(0, o.precision) : n;
                            break;
                        case "t":
                            n = String(!!n), n = o.precision ? n.substring(0, o.precision) : n;
                            break;
                        case "T":
                            n = Object.prototype.toString.call(n).slice(8, -1).toLowerCase(), n = o.precision ? n.substring(0, o.precision) : n;
                            break;
                        case "u":
                            n = parseInt(n, 10) >>> 0;
                            break;
                        case "v":
                            n = n.valueOf(), n = o.precision ? n.substring(0, o.precision) : n;
                            break;
                        case "x":
                            n = (parseInt(n, 10) >>> 0).toString(16);
                            break;
                        case "X":
                            n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase()
                    }
                    u.json.test(o.type) ? v += n : (!u.number.test(o.type) || f && !o.sign ? d = "" : (d = f ? "+" : "-", n = n.toString().replace(u.sign, "")), c = o.pad_char ? "0" === o.pad_char ? "0" : o.pad_char.charAt(1) : " ", l = o.width - (d + n).length, s = o.width && l > 0 ? c.repeat(l) : "", v += o.align ? d + n + s : "0" === c ? d + s + n : s + d + n)
                }
                return v
            }

            function s(e) {
                if (c[e]) return c[e];
                for (var t, n = e, r = [], i = 0; n;) {
                    if (null !== (t = u.text.exec(n))) r.push(t[0]);
                    else if (null !== (t = u.modulo.exec(n))) r.push("%");
                    else {
                        if (null === (t = u.placeholder.exec(n))) throw new SyntaxError("[sprintf] unexpected placeholder");
                        if (t[2]) {
                            i |= 1;
                            var a = [],
                                o = t[2],
                                s = [];
                            if (null === (s = u.key.exec(o))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                            for (a.push(s[1]);
                                "" !== (o = o.substring(s[0].length));)
                                if (null !== (s = u.key_access.exec(o))) a.push(s[1]);
                                else {
                                    if (null === (s = u.index_access.exec(o))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                    a.push(s[1])
                                } t[2] = a
                        } else i |= 2;
                        if (3 === i) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                        r.push({
                            placeholder: t[0],
                            param_no: t[1],
                            keys: t[2],
                            sign: t[3],
                            pad_char: t[4],
                            align: t[5],
                            width: t[6],
                            precision: t[7],
                            type: t[8]
                        })
                    }
                    n = n.substring(t[0].length)
                }
                return c[e] = r
            }
            var u = {
                    not_string: /[^s]/,
                    not_bool: /[^t]/,
                    not_type: /[^T]/,
                    not_primitive: /[^v]/,
                    number: /[diefg]/,
                    numeric_arg: /[bcdiefguxX]/,
                    json: /[j]/,
                    not_json: /[^j]/,
                    text: /^[^\x25]+/,
                    modulo: /^\x25{2}/,
                    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
                    key: /^([a-z_][a-z_\d]*)/i,
                    key_access: /^\.([a-z_][a-z_\d]*)/i,
                    index_access: /^\[(\d+)\]/,
                    sign: /^[+-]/
                },
                c = Object.create(null);
            t.sprintf = i, t.vsprintf = a, "undefined" != typeof window && (window.sprintf = i, window.vsprintf = a, n(61).amd && (r = function() {
                return {
                    sprintf: i,
                    vsprintf: a
                }
            }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))))
        }()
    }, function(e, t) {
        e.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    }, function(e, t, n) {
        var r = n(63);
        e.exports = function(e) {
            return r[e]
        }
    }, function(e, t) {
        e.exports = {
            0: "NONE",
            1: "ONE",
            2: "LINE_LOOP",
            3: "LINE_STRIP",
            4: "TRIANGLES",
            5: "TRIANGLE_STRIP",
            6: "TRIANGLE_FAN",
            256: "DEPTH_BUFFER_BIT",
            512: "NEVER",
            513: "LESS",
            514: "EQUAL",
            515: "LEQUAL",
            516: "GREATER",
            517: "NOTEQUAL",
            518: "GEQUAL",
            519: "ALWAYS",
            768: "SRC_COLOR",
            769: "ONE_MINUS_SRC_COLOR",
            770: "SRC_ALPHA",
            771: "ONE_MINUS_SRC_ALPHA",
            772: "DST_ALPHA",
            773: "ONE_MINUS_DST_ALPHA",
            774: "DST_COLOR",
            775: "ONE_MINUS_DST_COLOR",
            776: "SRC_ALPHA_SATURATE",
            1024: "STENCIL_BUFFER_BIT",
            1028: "FRONT",
            1029: "BACK",
            1032: "FRONT_AND_BACK",
            1280: "INVALID_ENUM",
            1281: "INVALID_VALUE",
            1282: "INVALID_OPERATION",
            1285: "OUT_OF_MEMORY",
            1286: "INVALID_FRAMEBUFFER_OPERATION",
            2304: "CW",
            2305: "CCW",
            2849: "LINE_WIDTH",
            2884: "CULL_FACE",
            2885: "CULL_FACE_MODE",
            2886: "FRONT_FACE",
            2928: "DEPTH_RANGE",
            2929: "DEPTH_TEST",
            2930: "DEPTH_WRITEMASK",
            2931: "DEPTH_CLEAR_VALUE",
            2932: "DEPTH_FUNC",
            2960: "STENCIL_TEST",
            2961: "STENCIL_CLEAR_VALUE",
            2962: "STENCIL_FUNC",
            2963: "STENCIL_VALUE_MASK",
            2964: "STENCIL_FAIL",
            2965: "STENCIL_PASS_DEPTH_FAIL",
            2966: "STENCIL_PASS_DEPTH_PASS",
            2967: "STENCIL_REF",
            2968: "STENCIL_WRITEMASK",
            2978: "VIEWPORT",
            3024: "DITHER",
            3042: "BLEND",
            3088: "SCISSOR_BOX",
            3089: "SCISSOR_TEST",
            3106: "COLOR_CLEAR_VALUE",
            3107: "COLOR_WRITEMASK",
            3317: "UNPACK_ALIGNMENT",
            3333: "PACK_ALIGNMENT",
            3379: "MAX_TEXTURE_SIZE",
            3386: "MAX_VIEWPORT_DIMS",
            3408: "SUBPIXEL_BITS",
            3410: "RED_BITS",
            3411: "GREEN_BITS",
            3412: "BLUE_BITS",
            3413: "ALPHA_BITS",
            3414: "DEPTH_BITS",
            3415: "STENCIL_BITS",
            3553: "TEXTURE_2D",
            4352: "DONT_CARE",
            4353: "FASTEST",
            4354: "NICEST",
            5120: "BYTE",
            5121: "UNSIGNED_BYTE",
            5122: "SHORT",
            5123: "UNSIGNED_SHORT",
            5124: "INT",
            5125: "UNSIGNED_INT",
            5126: "FLOAT",
            5386: "INVERT",
            5890: "TEXTURE",
            6401: "STENCIL_INDEX",
            6402: "DEPTH_COMPONENT",
            6406: "ALPHA",
            6407: "RGB",
            6408: "RGBA",
            6409: "LUMINANCE",
            6410: "LUMINANCE_ALPHA",
            7680: "KEEP",
            7681: "REPLACE",
            7682: "INCR",
            7683: "DECR",
            7936: "VENDOR",
            7937: "RENDERER",
            7938: "VERSION",
            9728: "NEAREST",
            9729: "LINEAR",
            9984: "NEAREST_MIPMAP_NEAREST",
            9985: "LINEAR_MIPMAP_NEAREST",
            9986: "NEAREST_MIPMAP_LINEAR",
            9987: "LINEAR_MIPMAP_LINEAR",
            10240: "TEXTURE_MAG_FILTER",
            10241: "TEXTURE_MIN_FILTER",
            10242: "TEXTURE_WRAP_S",
            10243: "TEXTURE_WRAP_T",
            10497: "REPEAT",
            10752: "POLYGON_OFFSET_UNITS",
            16384: "COLOR_BUFFER_BIT",
            32769: "CONSTANT_COLOR",
            32770: "ONE_MINUS_CONSTANT_COLOR",
            32771: "CONSTANT_ALPHA",
            32772: "ONE_MINUS_CONSTANT_ALPHA",
            32773: "BLEND_COLOR",
            32774: "FUNC_ADD",
            32777: "BLEND_EQUATION_RGB",
            32778: "FUNC_SUBTRACT",
            32779: "FUNC_REVERSE_SUBTRACT",
            32819: "UNSIGNED_SHORT_4_4_4_4",
            32820: "UNSIGNED_SHORT_5_5_5_1",
            32823: "POLYGON_OFFSET_FILL",
            32824: "POLYGON_OFFSET_FACTOR",
            32854: "RGBA4",
            32855: "RGB5_A1",
            32873: "TEXTURE_BINDING_2D",
            32926: "SAMPLE_ALPHA_TO_COVERAGE",
            32928: "SAMPLE_COVERAGE",
            32936: "SAMPLE_BUFFERS",
            32937: "SAMPLES",
            32938: "SAMPLE_COVERAGE_VALUE",
            32939: "SAMPLE_COVERAGE_INVERT",
            32968: "BLEND_DST_RGB",
            32969: "BLEND_SRC_RGB",
            32970: "BLEND_DST_ALPHA",
            32971: "BLEND_SRC_ALPHA",
            33071: "CLAMP_TO_EDGE",
            33170: "GENERATE_MIPMAP_HINT",
            33189: "DEPTH_COMPONENT16",
            33306: "DEPTH_STENCIL_ATTACHMENT",
            33635: "UNSIGNED_SHORT_5_6_5",
            33648: "MIRRORED_REPEAT",
            33901: "ALIASED_POINT_SIZE_RANGE",
            33902: "ALIASED_LINE_WIDTH_RANGE",
            33984: "TEXTURE0",
            33985: "TEXTURE1",
            33986: "TEXTURE2",
            33987: "TEXTURE3",
            33988: "TEXTURE4",
            33989: "TEXTURE5",
            33990: "TEXTURE6",
            33991: "TEXTURE7",
            33992: "TEXTURE8",
            33993: "TEXTURE9",
            33994: "TEXTURE10",
            33995: "TEXTURE11",
            33996: "TEXTURE12",
            33997: "TEXTURE13",
            33998: "TEXTURE14",
            33999: "TEXTURE15",
            34e3: "TEXTURE16",
            34001: "TEXTURE17",
            34002: "TEXTURE18",
            34003: "TEXTURE19",
            34004: "TEXTURE20",
            34005: "TEXTURE21",
            34006: "TEXTURE22",
            34007: "TEXTURE23",
            34008: "TEXTURE24",
            34009: "TEXTURE25",
            34010: "TEXTURE26",
            34011: "TEXTURE27",
            34012: "TEXTURE28",
            34013: "TEXTURE29",
            34014: "TEXTURE30",
            34015: "TEXTURE31",
            34016: "ACTIVE_TEXTURE",
            34024: "MAX_RENDERBUFFER_SIZE",
            34041: "DEPTH_STENCIL",
            34055: "INCR_WRAP",
            34056: "DECR_WRAP",
            34067: "TEXTURE_CUBE_MAP",
            34068: "TEXTURE_BINDING_CUBE_MAP",
            34069: "TEXTURE_CUBE_MAP_POSITIVE_X",
            34070: "TEXTURE_CUBE_MAP_NEGATIVE_X",
            34071: "TEXTURE_CUBE_MAP_POSITIVE_Y",
            34072: "TEXTURE_CUBE_MAP_NEGATIVE_Y",
            34073: "TEXTURE_CUBE_MAP_POSITIVE_Z",
            34074: "TEXTURE_CUBE_MAP_NEGATIVE_Z",
            34076: "MAX_CUBE_MAP_TEXTURE_SIZE",
            34338: "VERTEX_ATTRIB_ARRAY_ENABLED",
            34339: "VERTEX_ATTRIB_ARRAY_SIZE",
            34340: "VERTEX_ATTRIB_ARRAY_STRIDE",
            34341: "VERTEX_ATTRIB_ARRAY_TYPE",
            34342: "CURRENT_VERTEX_ATTRIB",
            34373: "VERTEX_ATTRIB_ARRAY_POINTER",
            34466: "NUM_COMPRESSED_TEXTURE_FORMATS",
            34467: "COMPRESSED_TEXTURE_FORMATS",
            34660: "BUFFER_SIZE",
            34661: "BUFFER_USAGE",
            34816: "STENCIL_BACK_FUNC",
            34817: "STENCIL_BACK_FAIL",
            34818: "STENCIL_BACK_PASS_DEPTH_FAIL",
            34819: "STENCIL_BACK_PASS_DEPTH_PASS",
            34877: "BLEND_EQUATION_ALPHA",
            34921: "MAX_VERTEX_ATTRIBS",
            34922: "VERTEX_ATTRIB_ARRAY_NORMALIZED",
            34930: "MAX_TEXTURE_IMAGE_UNITS",
            34962: "ARRAY_BUFFER",
            34963: "ELEMENT_ARRAY_BUFFER",
            34964: "ARRAY_BUFFER_BINDING",
            34965: "ELEMENT_ARRAY_BUFFER_BINDING",
            34975: "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",
            35040: "STREAM_DRAW",
            35044: "STATIC_DRAW",
            35048: "DYNAMIC_DRAW",
            35632: "FRAGMENT_SHADER",
            35633: "VERTEX_SHADER",
            35660: "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
            35661: "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
            35663: "SHADER_TYPE",
            35664: "FLOAT_VEC2",
            35665: "FLOAT_VEC3",
            35666: "FLOAT_VEC4",
            35667: "INT_VEC2",
            35668: "INT_VEC3",
            35669: "INT_VEC4",
            35670: "BOOL",
            35671: "BOOL_VEC2",
            35672: "BOOL_VEC3",
            35673: "BOOL_VEC4",
            35674: "FLOAT_MAT2",
            35675: "FLOAT_MAT3",
            35676: "FLOAT_MAT4",
            35678: "SAMPLER_2D",
            35680: "SAMPLER_CUBE",
            35712: "DELETE_STATUS",
            35713: "COMPILE_STATUS",
            35714: "LINK_STATUS",
            35715: "VALIDATE_STATUS",
            35716: "INFO_LOG_LENGTH",
            35717: "ATTACHED_SHADERS",
            35718: "ACTIVE_UNIFORMS",
            35719: "ACTIVE_UNIFORM_MAX_LENGTH",
            35720: "SHADER_SOURCE_LENGTH",
            35721: "ACTIVE_ATTRIBUTES",
            35722: "ACTIVE_ATTRIBUTE_MAX_LENGTH",
            35724: "SHADING_LANGUAGE_VERSION",
            35725: "CURRENT_PROGRAM",
            36003: "STENCIL_BACK_REF",
            36004: "STENCIL_BACK_VALUE_MASK",
            36005: "STENCIL_BACK_WRITEMASK",
            36006: "FRAMEBUFFER_BINDING",
            36007: "RENDERBUFFER_BINDING",
            36048: "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",
            36049: "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",
            36050: "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",
            36051: "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",
            36053: "FRAMEBUFFER_COMPLETE",
            36054: "FRAMEBUFFER_INCOMPLETE_ATTACHMENT",
            36055: "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",
            36057: "FRAMEBUFFER_INCOMPLETE_DIMENSIONS",
            36061: "FRAMEBUFFER_UNSUPPORTED",
            36064: "COLOR_ATTACHMENT0",
            36096: "DEPTH_ATTACHMENT",
            36128: "STENCIL_ATTACHMENT",
            36160: "FRAMEBUFFER",
            36161: "RENDERBUFFER",
            36162: "RENDERBUFFER_WIDTH",
            36163: "RENDERBUFFER_HEIGHT",
            36164: "RENDERBUFFER_INTERNAL_FORMAT",
            36168: "STENCIL_INDEX8",
            36176: "RENDERBUFFER_RED_SIZE",
            36177: "RENDERBUFFER_GREEN_SIZE",
            36178: "RENDERBUFFER_BLUE_SIZE",
            36179: "RENDERBUFFER_ALPHA_SIZE",
            36180: "RENDERBUFFER_DEPTH_SIZE",
            36181: "RENDERBUFFER_STENCIL_SIZE",
            36194: "RGB565",
            36336: "LOW_FLOAT",
            36337: "MEDIUM_FLOAT",
            36338: "HIGH_FLOAT",
            36339: "LOW_INT",
            36340: "MEDIUM_INT",
            36341: "HIGH_INT",
            36346: "SHADER_COMPILER",
            36347: "MAX_VERTEX_UNIFORM_VECTORS",
            36348: "MAX_VARYING_VECTORS",
            36349: "MAX_FRAGMENT_UNIFORM_VECTORS",
            37440: "UNPACK_FLIP_Y_WEBGL",
            37441: "UNPACK_PREMULTIPLY_ALPHA_WEBGL",
            37442: "CONTEXT_LOST_WEBGL",
            37443: "UNPACK_COLORSPACE_CONVERSION_WEBGL",
            37444: "BROWSER_DEFAULT_WEBGL"
        }
    }, function(e, t, n) {
        function r(e) {
            for (var t = Array.isArray(e) ? e : i(e), n = 0; n < t.length; n++) {
                var r = t[n];
                if ("preprocessor" === r.type) {
                    var o = r.data.match(/\#define\s+SHADER_NAME(_B64)?\s+(.+)$/);
                    if (o && o[2]) {
                        var s = o[1],
                            u = o[2];
                        return (s ? a(u) : u).trim()
                    }
                }
            }
        }
        var i = n(65),
            a = n(72);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = i(t),
                r = [];
            return r = r.concat(n(e)), r = r.concat(n(null))
        }
        var i = n(66);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            function t(e) {
                e.length && z.push({
                    type: A[B],
                    data: e,
                    position: G,
                    line: q,
                    column: Y
                })
            }

            function n(e) {
                D = 0, e.toString && (e = e.toString()), W += e.replace(/\r\n/g, "\n"), j = W.length;
                for (var t; L = W[D], D < j;) {
                    switch (t = D, B) {
                        case f:
                            D = R();
                            break;
                        case d:
                            D = S();
                            break;
                        case h:
                            D = T();
                            break;
                        case p:
                            D = C();
                            break;
                        case v:
                            D = k();
                            break;
                        case E:
                            D = P();
                            break;
                        case m:
                            D = I();
                            break;
                        case l:
                            D = F();
                            break;
                        case _:
                            D = M();
                            break;
                        case c:
                            D = x()
                    }
                    if (t !== D) switch (W[t]) {
                        case "\n":
                            Y = 0, ++q;
                            break;
                        default:
                            ++Y
                    }
                }
                return U += D, W = W.slice(D), z
            }

            function r(e) {
                return V.length && t(V.join("")), B = w, t("(eof)"), z
            }

            function x() {
                return V = V.length ? [] : V, "/" === N && "*" === L ? (G = U + D - 1, B = f, N = L, D + 1) : "/" === N && "/" === L ? (G = U + D - 1, B = d, N = L, D + 1) : "#" === L ? (B = h, G = U + D, D) : /\s/.test(L) ? (B = _, G = U + D, D) : (X = /\d/.test(L), H = /[^\w_]/.test(L), G = U + D, B = X ? v : H ? p : l, D)
            }

            function M() {
                return /[^\s]/g.test(L) ? (t(V.join("")), B = c, D) : (V.push(L), N = L, D + 1)
            }

            function T() {
                return "\r" !== L && "\n" !== L || "\\" === N ? (V.push(L), N = L, D + 1) : (t(V.join("")), B = c, D)
            }

            function S() {
                return T()
            }

            function R() {
                return "/" === L && "*" === N ? (V.push(L), t(V.join("")), B = c, D + 1) : (V.push(L), N = L, D + 1)
            }

            function C() {
                if ("." === N && /\d/.test(L)) return B = m, D;
                if ("/" === N && "*" === L) return B = f, D;
                if ("/" === N && "/" === L) return B = d, D;
                if ("." === L && V.length) {
                    for (; O(V););
                    return B = m, D
                }
                if (";" === L || ")" === L || "(" === L) {
                    if (V.length)
                        for (; O(V););
                    return t(L), B = c, D + 1
                }
                var e = 2 === V.length && "=" !== L;
                if (/[\w_\d\s]/.test(L) || e) {
                    for (; O(V););
                    return B = c, D
                }
                return V.push(L), N = L, D + 1
            }

            function O(e) {
                for (var n, r, i = 0;;) {
                    if (n = a.indexOf(e.slice(0, e.length + i).join("")), r = a[n], n === -1) {
                        if (i-- + e.length > 0) continue;
                        r = e.slice(0, 1).join("")
                    }
                    return t(r), G += r.length, V = V.slice(r.length), V.length
                }
            }

            function P() {
                return /[^a-fA-F0-9]/.test(L) ? (t(V.join("")), B = c, D) : (V.push(L), N = L, D + 1)
            }

            function k() {
                return "." === L ? (V.push(L), B = m, N = L, D + 1) : /[eE]/.test(L) ? (V.push(L), B = m, N = L, D + 1) : "x" === L && 1 === V.length && "0" === V[0] ? (B = E, V.push(L), N = L, D + 1) : /[^\d]/.test(L) ? (t(V.join("")), B = c, D) : (V.push(L), N = L, D + 1)
            }

            function I() {
                return "f" === L && (V.push(L), N = L, D += 1), /[eE]/.test(L) ? (V.push(L), N = L, D + 1) : ("-" !== L && "+" !== L || !/[eE]/.test(N)) && /[^\d]/.test(L) ? (t(V.join("")), B = c, D) : (V.push(L), N = L, D + 1)
            }

            function F() {
                if (/[^\d\w_]/.test(L)) {
                    var e = V.join("");
                    return B = Q[e] ? b : Z[e] ? y : g, t(V.join("")), B = c, D
                }
                return V.push(L), N = L, D + 1
            }
            var L, N, j, D = 0,
                U = 0,
                B = c,
                V = [],
                z = [],
                q = 1,
                Y = 0,
                G = 0,
                X = !1,
                H = !1,
                W = "";
            e = e || {};
            var K = o,
                J = i;
            "300 es" === e.version && (K = u, J = s);
            for (var Z = {}, Q = {}, D = 0; D < K.length; D++) Z[K[D]] = !0;
            for (var D = 0; D < J.length; D++) Q[J[D]] = !0;
            return function(e) {
                return z = [], null !== e ? n(e) : r()
            }
        }
        e.exports = r;
        var i = n(67),
            a = n(68),
            o = n(69),
            s = n(70),
            u = n(71),
            c = 999,
            l = 9999,
            f = 0,
            d = 1,
            h = 2,
            p = 3,
            v = 4,
            m = 5,
            g = 6,
            y = 7,
            b = 8,
            _ = 9,
            w = 10,
            E = 11,
            A = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"]
    }, function(e, t) {
        e.exports = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "uint", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]
    }, function(e, t) {
        e.exports = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"]
    }, function(e, t) {
        e.exports = ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT"]
    }, function(e, t, n) {
        var r = n(67);
        e.exports = r.slice().concat(["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray"])
    }, function(e, t, n) {
        var r = n(69);
        r = r.slice().filter(function(e) {
            return !/^(gl\_|texture)/.test(e)
        }), e.exports = r.concat(["gl_VertexID", "gl_InstanceID", "gl_Position", "gl_PointSize", "gl_FragCoord", "gl_FrontFacing", "gl_FragDepth", "gl_PointCoord", "gl_MaxVertexAttribs", "gl_MaxVertexUniformVectors", "gl_MaxVertexOutputVectors", "gl_MaxFragmentInputVectors", "gl_MaxVertexTextureImageUnits", "gl_MaxCombinedTextureImageUnits", "gl_MaxTextureImageUnits", "gl_MaxFragmentUniformVectors", "gl_MaxDrawBuffers", "gl_MinProgramTexelOffset", "gl_MaxProgramTexelOffset", "gl_DepthRangeParameters", "gl_DepthRange", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"])
    }, function(e, t) {
        e.exports = function(e) {
            return atob(e)
        }
    }, function(e, t, n) {
        function r(e, t, n) {
            t = "number" == typeof t ? t : 1, n = n || ": ";
            var r = e.split(/\r?\n/),
                a = String(r.length + t - 1).length;
            return r.map(function(e, r) {
                var o = r + t,
                    s = String(o).length,
                    u = i(o, a - s);
                return u + n + e
            }).join("\n")
        }
        var i = n(74);
        e.exports = r
    }, function(e, t, n) {
        /*!
         * pad-left <https://github.com/jonschlinkert/pad-left>
         *
         * Copyright (c) 2014-2015, Jon Schlinkert.
         * Licensed under the MIT license.
         */
        "use strict";
        var r = n(75);
        e.exports = function(e, t, n) {
            return n = "undefined" != typeof n ? n + "" : " ", r(n, t) + e
        }
    }, function(e, t) {
        /*!
         * repeat-string <https://github.com/jonschlinkert/repeat-string>
         *
         * Copyright (c) 2014-2015, Jon Schlinkert.
         * Licensed under the MIT License.
         */
        "use strict";

        function n(e, t) {
            if ("string" != typeof e) throw new TypeError("expected a string");
            if (1 === t) return e;
            if (2 === t) return e + e;
            var n = e.length * t;
            if (r !== e || "undefined" == typeof r) r = e, i = "";
            else if (i.length >= n) return i.substr(0, n);
            for (; n > i.length && t > 1;) 1 & t && (i += e), t >>= 1, e += e;
            return i += e, i = i.substr(0, n)
        }
        var r, i = "";
        e.exports = n
    }, function(e, t, n) {
        function r() {
            var e = i();
            return {
                get: function(t, n) {
                    var r = e(t);
                    return r.hasOwnProperty("value") ? r.value : n
                },
                set: function(t, n) {
                    return e(t).value = n, this
                },
                has: function(t) {
                    return "value" in e(t)
                },
                delete: function(t) {
                    return delete e(t).value
                }
            }
        }
        var i = n(77);
        e.exports = r
    }, function(e, t, n) {
        function r() {
            var e = {};
            return function(t) {
                if (("object" != typeof t || null === t) && "function" != typeof t) throw new Error("Weakmap-shim: Key must be object");
                var n = t.valueOf(e);
                return n && n.identity === e ? n : i(t, e)
            }
        }
        var i = n(78);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            var n = {
                    identity: t
                },
                r = e.valueOf;
            return Object.defineProperty(e, "valueOf", {
                value: function(e) {
                    return e !== t ? r.apply(this, arguments) : n
                },
                writable: !0
            }), n
        }
        e.exports = n
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!o) {
                var n = Object.keys(a);
                o = {};
                for (var r = 0; r < n.length; ++r) {
                    var i = n[r];
                    o[e[i]] = a[i]
                }
            }
            return o[t]
        }

        function r(e, t) {
            for (var r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), i = [], a = 0; a < r; ++a) {
                var o = e.getActiveUniform(t, a);
                if (o) {
                    var s = n(e, o.type);
                    if (o.size > 1)
                        for (var u = 0; u < o.size; ++u) i.push({
                            name: o.name.replace("[0]", "[" + u + "]"),
                            type: s
                        });
                    else i.push({
                        name: o.name,
                        type: s
                    })
                }
            }
            return i
        }

        function i(e, t) {
            for (var r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), i = [], a = 0; a < r; ++a) {
                var o = e.getActiveAttrib(t, a);
                o && i.push({
                    name: o.name,
                    type: n(e, o.type)
                })
            }
            return i
        }
        t.uniforms = r, t.attributes = i;
        var a = {
                FLOAT: "float",
                FLOAT_VEC2: "vec2",
                FLOAT_VEC3: "vec3",
                FLOAT_VEC4: "vec4",
                INT: "int",
                INT_VEC2: "ivec2",
                INT_VEC3: "ivec3",
                INT_VEC4: "ivec4",
                BOOL: "bool",
                BOOL_VEC2: "bvec2",
                BOOL_VEC3: "bvec3",
                BOOL_VEC4: "bvec4",
                FLOAT_MAT2: "mat2",
                FLOAT_MAT3: "mat3",
                FLOAT_MAT4: "mat4",
                SAMPLER_2D: "sampler2D",
                SAMPLER_CUBE: "samplerCube"
            },
            o = null
    }, function(e, t) {
        (function(t) {
            "use strict";

            function n(e, r) {
                if (r = r || t, e in r) return r[e];
                for (var i, a = 0; a < n.vendor.length; a++)
                    if (i = n.vendor[a] + e.charAt(0).toUpperCase() + e.slice(1), i in r) return r[i]
            }
            n.vendor = "webkit,moz,ms,o,khtml,WebKit,Moz,MS,O,Khtml".split(","), e.exports = n
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        var r, i, a;
        (function(e) {
            "use strict";
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            ! function(o, s) {
                "object" === n(t) && "object" === n(e) ? e.exports = s() : (i = [], r = s, a = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== a && (e.exports = a)))
            }(void 0, function() {
                return function(e) {
                    function t(r) {
                        if (n[r]) return n[r].exports;
                        var i = n[r] = {
                            exports: {},
                            id: r,
                            loaded: !1
                        };
                        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.p = "", t(0)
                }([function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.__esModule = !0;
                    var i = n(1),
                        a = r(i);
                    t.default = a.default, e.exports = t.default
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.__esModule = !0;
                    var i = n(2),
                        a = r(i),
                        o = n(6),
                        s = r(o),
                        u = n(3),
                        c = r(u),
                        l = n(7),
                        f = r(l),
                        d = n(8),
                        h = r(d),
                        p = n(10),
                        v = r(p),
                        m = n(11),
                        g = r(m),
                        y = n(12),
                        b = r(y),
                        _ = n(13),
                        w = r(_),
                        E = n(14),
                        A = r(E),
                        x = n(15),
                        M = r(x),
                        T = n(16),
                        S = r(T),
                        R = n(9),
                        C = r(R),
                        O = n(17),
                        P = r(O);
                    t.default = {
                        color: {
                            Color: a.default,
                            math: s.default,
                            interpret: c.default
                        },
                        controllers: {
                            Controller: f.default,
                            BooleanController: h.default,
                            OptionController: v.default,
                            StringController: g.default,
                            NumberController: b.default,
                            NumberControllerBox: w.default,
                            NumberControllerSlider: A.default,
                            FunctionController: M.default,
                            ColorController: S.default
                        },
                        dom: {
                            dom: C.default
                        },
                        gui: {
                            GUI: P.default
                        },
                        GUI: P.default
                    }, e.exports = t.default
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function a(e, t, n) {
                        Object.defineProperty(e, t, {
                            get: function() {
                                return "RGB" === this.__state.space ? this.__state[t] : (v.recalculateRGB(this, t, n), this.__state[t])
                            },
                            set: function(e) {
                                "RGB" !== this.__state.space && (v.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
                            }
                        })
                    }

                    function o(e, t) {
                        Object.defineProperty(e, t, {
                            get: function() {
                                return "HSV" === this.__state.space ? this.__state[t] : (v.recalculateHSV(this), this.__state[t])
                            },
                            set: function(e) {
                                "HSV" !== this.__state.space && (v.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e
                            }
                        })
                    }
                    t.__esModule = !0;
                    var s = n(3),
                        u = r(s),
                        c = n(6),
                        l = r(c),
                        f = n(4),
                        d = r(f),
                        h = n(5),
                        p = r(h),
                        v = function() {
                            function e() {
                                if (i(this, e), this.__state = u.default.apply(this, arguments), this.__state === !1) throw new Error("Failed to interpret color arguments");
                                this.__state.a = this.__state.a || 1
                            }
                            return e.prototype.toString = function() {
                                return (0, d.default)(this)
                            }, e.prototype.toHexString = function() {
                                return (0, d.default)(this, !0)
                            }, e.prototype.toOriginal = function() {
                                return this.__state.conversion.write(this)
                            }, e
                        }();
                    v.recalculateRGB = function(e, t, n) {
                        if ("HEX" === e.__state.space) e.__state[t] = l.default.component_from_hex(e.__state.hex, n);
                        else {
                            if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
                            p.default.extend(e.__state, l.default.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
                        }
                    }, v.recalculateHSV = function(e) {
                        var t = l.default.rgb_to_hsv(e.r, e.g, e.b);
                        p.default.extend(e.__state, {
                            s: t.s,
                            v: t.v
                        }), p.default.isNaN(t.h) ? p.default.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h
                    }, v.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], a(v.prototype, "r", 2), a(v.prototype, "g", 1), a(v.prototype, "b", 0), o(v.prototype, "h"), o(v.prototype, "s"), o(v.prototype, "v"), Object.defineProperty(v.prototype, "a", {
                        get: function() {
                            return this.__state.a
                        },
                        set: function(e) {
                            this.__state.a = e
                        }
                    }), Object.defineProperty(v.prototype, "hex", {
                        get: function() {
                            return "HEX" !== !this.__state.space && (this.__state.hex = l.default.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
                        },
                        set: function(e) {
                            this.__state.space = "HEX", this.__state.hex = e
                        }
                    }), t.default = v, e.exports = t.default
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.__esModule = !0;
                    var i = n(4),
                        a = r(i),
                        o = n(5),
                        s = r(o),
                        u = [{
                            litmus: s.default.isString,
                            conversions: {
                                THREE_CHAR_HEX: {
                                    read: function(e) {
                                        var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                                        return null !== t && {
                                            space: "HEX",
                                            hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0)
                                        }
                                    },
                                    write: a.default
                                },
                                SIX_CHAR_HEX: {
                                    read: function(e) {
                                        var t = e.match(/^#([A-F0-9]{6})$/i);
                                        return null !== t && {
                                            space: "HEX",
                                            hex: parseInt("0x" + t[1].toString(), 0)
                                        }
                                    },
                                    write: a.default
                                },
                                CSS_RGB: {
                                    read: function(e) {
                                        var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                        return null !== t && {
                                            space: "RGB",
                                            r: parseFloat(t[1]),
                                            g: parseFloat(t[2]),
                                            b: parseFloat(t[3])
                                        }
                                    },
                                    write: a.default
                                },
                                CSS_RGBA: {
                                    read: function(e) {
                                        var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                        return null !== t && {
                                            space: "RGB",
                                            r: parseFloat(t[1]),
                                            g: parseFloat(t[2]),
                                            b: parseFloat(t[3]),
                                            a: parseFloat(t[4])
                                        }
                                    },
                                    write: a.default
                                }
                            }
                        }, {
                            litmus: s.default.isNumber,
                            conversions: {
                                HEX: {
                                    read: function(e) {
                                        return {
                                            space: "HEX",
                                            hex: e,
                                            conversionName: "HEX"
                                        }
                                    },
                                    write: function(e) {
                                        return e.hex
                                    }
                                }
                            }
                        }, {
                            litmus: s.default.isArray,
                            conversions: {
                                RGB_ARRAY: {
                                    read: function(e) {
                                        return 3 === e.length && {
                                            space: "RGB",
                                            r: e[0],
                                            g: e[1],
                                            b: e[2]
                                        }
                                    },
                                    write: function(e) {
                                        return [e.r, e.g, e.b]
                                    }
                                },
                                RGBA_ARRAY: {
                                    read: function(e) {
                                        return 4 === e.length && {
                                            space: "RGB",
                                            r: e[0],
                                            g: e[1],
                                            b: e[2],
                                            a: e[3]
                                        }
                                    },
                                    write: function(e) {
                                        return [e.r, e.g, e.b, e.a]
                                    }
                                }
                            }
                        }, {
                            litmus: s.default.isObject,
                            conversions: {
                                RGBA_OBJ: {
                                    read: function(e) {
                                        return !!(s.default.isNumber(e.r) && s.default.isNumber(e.g) && s.default.isNumber(e.b) && s.default.isNumber(e.a)) && {
                                            space: "RGB",
                                            r: e.r,
                                            g: e.g,
                                            b: e.b,
                                            a: e.a
                                        }
                                    },
                                    write: function(e) {
                                        return {
                                            r: e.r,
                                            g: e.g,
                                            b: e.b,
                                            a: e.a
                                        }
                                    }
                                },
                                RGB_OBJ: {
                                    read: function(e) {
                                        return !!(s.default.isNumber(e.r) && s.default.isNumber(e.g) && s.default.isNumber(e.b)) && {
                                            space: "RGB",
                                            r: e.r,
                                            g: e.g,
                                            b: e.b
                                        }
                                    },
                                    write: function(e) {
                                        return {
                                            r: e.r,
                                            g: e.g,
                                            b: e.b
                                        }
                                    }
                                },
                                HSVA_OBJ: {
                                    read: function(e) {
                                        return !!(s.default.isNumber(e.h) && s.default.isNumber(e.s) && s.default.isNumber(e.v) && s.default.isNumber(e.a)) && {
                                            space: "HSV",
                                            h: e.h,
                                            s: e.s,
                                            v: e.v,
                                            a: e.a
                                        }
                                    },
                                    write: function(e) {
                                        return {
                                            h: e.h,
                                            s: e.s,
                                            v: e.v,
                                            a: e.a
                                        }
                                    }
                                },
                                HSV_OBJ: {
                                    read: function(e) {
                                        return !!(s.default.isNumber(e.h) && s.default.isNumber(e.s) && s.default.isNumber(e.v)) && {
                                            space: "HSV",
                                            h: e.h,
                                            s: e.s,
                                            v: e.v
                                        }
                                    },
                                    write: function(e) {
                                        return {
                                            h: e.h,
                                            s: e.s,
                                            v: e.v
                                        }
                                    }
                                }
                            }
                        }],
                        c = void 0,
                        l = void 0,
                        f = function() {
                            l = !1;
                            var e = arguments.length > 1 ? s.default.toArray(arguments) : arguments[0];
                            return s.default.each(u, function(t) {
                                if (t.litmus(e)) return s.default.each(t.conversions, function(t, n) {
                                    if (c = t.read(e), l === !1 && c !== !1) return l = c, c.conversionName = n, c.conversion = t, s.default.BREAK
                                }), s.default.BREAK
                            }), l
                        };
                    t.default = f, e.exports = t.default
                }, function(e, t) {
                    t.__esModule = !0, t.default = function(e, t) {
                        var n = e.__state.conversionName.toString(),
                            r = Math.round(e.r),
                            i = Math.round(e.g),
                            a = Math.round(e.b),
                            o = e.a,
                            s = Math.round(e.h),
                            u = e.s.toFixed(1),
                            c = e.v.toFixed(1);
                        if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
                            for (var l = e.hex.toString(16); l.length < 6;) l = "0" + l;
                            return "#" + l
                        }
                        return "CSS_RGB" === n ? "rgb(" + r + "," + i + "," + a + ")" : "CSS_RGBA" === n ? "rgba(" + r + "," + i + "," + a + "," + o + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + r + "," + i + "," + a + "]" : "RGBA_ARRAY" === n ? "[" + r + "," + i + "," + a + "," + o + "]" : "RGB_OBJ" === n ? "{r:" + r + ",g:" + i + ",b:" + a + "}" : "RGBA_OBJ" === n ? "{r:" + r + ",g:" + i + ",b:" + a + ",a:" + o + "}" : "HSV_OBJ" === n ? "{h:" + s + ",s:" + u + ",v:" + c + "}" : "HSVA_OBJ" === n ? "{h:" + s + ",s:" + u + ",v:" + c + ",a:" + o + "}" : "unknown format"
                    }, e.exports = t.default
                }, function(e, t) {
                    t.__esModule = !0;
                    var n = Array.prototype.forEach,
                        r = Array.prototype.slice,
                        i = {
                            BREAK: {},
                            extend: function(e) {
                                return this.each(r.call(arguments, 1), function(t) {
                                    var n = this.isObject(t) ? Object.keys(t) : [];
                                    n.forEach(function(n) {
                                        this.isUndefined(t[n]) || (e[n] = t[n])
                                    }.bind(this))
                                }, this), e
                            },
                            defaults: function(e) {
                                return this.each(r.call(arguments, 1), function(t) {
                                    var n = this.isObject(t) ? Object.keys(t) : [];
                                    n.forEach(function(n) {
                                        this.isUndefined(e[n]) && (e[n] = t[n])
                                    }.bind(this))
                                }, this), e
                            },
                            compose: function() {
                                var e = r.call(arguments);
                                return function() {
                                    for (var t = r.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                                    return t[0]
                                }
                            },
                            each: function(e, t, r) {
                                if (e)
                                    if (n && e.forEach && e.forEach === n) e.forEach(t, r);
                                    else if (e.length === e.length + 0) {
                                    var i = void 0,
                                        a = void 0;
                                    for (i = 0, a = e.length; i < a; i++)
                                        if (i in e && t.call(r, e[i], i) === this.BREAK) return
                                } else
                                    for (var o in e)
                                        if (t.call(r, e[o], o) === this.BREAK) return
                            },
                            defer: function(e) {
                                setTimeout(e, 0)
                            },
                            debounce: function(e, t, n) {
                                var r = void 0;
                                return function() {
                                    function i() {
                                        r = null, n || e.apply(a, o)
                                    }
                                    var a = this,
                                        o = arguments,
                                        s = n || !r;
                                    clearTimeout(r), r = setTimeout(i, t), s && e.apply(a, o)
                                }
                            },
                            toArray: function(e) {
                                return e.toArray ? e.toArray() : r.call(e)
                            },
                            isUndefined: function(e) {
                                return void 0 === e
                            },
                            isNull: function(e) {
                                return null === e
                            },
                            isNaN: function(e) {
                                function t(t) {
                                    return e.apply(this, arguments)
                                }
                                return t.toString = function() {
                                    return e.toString()
                                }, t
                            }(function(e) {
                                return isNaN(e)
                            }),
                            isArray: Array.isArray || function(e) {
                                return e.constructor === Array
                            },
                            isObject: function(e) {
                                return e === Object(e)
                            },
                            isNumber: function(e) {
                                return e === e + 0
                            },
                            isString: function(e) {
                                return e === e + ""
                            },
                            isBoolean: function(e) {
                                return e === !1 || e === !0
                            },
                            isFunction: function(e) {
                                return "[object Function]" === Object.prototype.toString.call(e)
                            }
                        };
                    t.default = i, e.exports = t.default
                }, function(e, t) {
                    t.__esModule = !0;
                    var n = void 0,
                        r = {
                            hsv_to_rgb: function(e, t, n) {
                                var r = Math.floor(e / 60) % 6,
                                    i = e / 60 - Math.floor(e / 60),
                                    a = n * (1 - t),
                                    o = n * (1 - i * t),
                                    s = n * (1 - (1 - i) * t),
                                    u = [
                                        [n, s, a],
                                        [o, n, a],
                                        [a, n, s],
                                        [a, o, n],
                                        [s, a, n],
                                        [n, a, o]
                                    ][r];
                                return {
                                    r: 255 * u[0],
                                    g: 255 * u[1],
                                    b: 255 * u[2]
                                }
                            },
                            rgb_to_hsv: function(e, t, n) {
                                var r = Math.min(e, t, n),
                                    i = Math.max(e, t, n),
                                    a = i - r,
                                    o = void 0,
                                    s = void 0;
                                return 0 === i ? {
                                    h: NaN,
                                    s: 0,
                                    v: 0
                                } : (s = a / i, o = e === i ? (t - n) / a : t === i ? 2 + (n - e) / a : 4 + (e - t) / a, o /= 6, o < 0 && (o += 1), {
                                    h: 360 * o,
                                    s: s,
                                    v: i / 255
                                })
                            },
                            rgb_to_hex: function(e, t, n) {
                                var r = this.hex_with_component(0, 2, e);
                                return r = this.hex_with_component(r, 1, t), r = this.hex_with_component(r, 0, n)
                            },
                            component_from_hex: function(e, t) {
                                return e >> 8 * t & 255
                            },
                            hex_with_component: function(e, t, r) {
                                return r << (n = 8 * t) | e & ~(255 << n)
                            }
                        };
                    t.default = r, e.exports = t.default
                }, function(e, t) {
                    function n(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    t.__esModule = !0;
                    var r = function() {
                        function e(t, r) {
                            n(this, e), this.initialValue = t[r], this.domElement = document.createElement("div"), this.object = t, this.property = r, this.__onChange = void 0, this.__onFinishChange = void 0
                        }
                        return e.prototype.onChange = function(e) {
                            return this.__onChange = e, this
                        }, e.prototype.onFinishChange = function(e) {
                            return this.__onFinishChange = e, this
                        }, e.prototype.setValue = function(e) {
                            return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
                        }, e.prototype.getValue = function() {
                            return this.object[this.property]
                        }, e.prototype.updateDisplay = function() {
                            return this
                        }, e.prototype.isModified = function() {
                            return this.initialValue !== this.getValue()
                        }, e
                    }();
                    t.default = r, e.exports = t.default
                }, function(e, t, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t ? e : t
                    }

                    function s(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : n(t)));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }
                    t.__esModule = !0;
                    var u = r(7),
                        c = i(u),
                        l = r(9),
                        f = i(l),
                        d = function(e) {
                            function t(n, r) {
                                function i() {
                                    u.setValue(!u.__prev)
                                }
                                a(this, t);
                                var s = o(this, e.call(this, n, r)),
                                    u = s;
                                return s.__prev = s.getValue(), s.__checkbox = document.createElement("input"), s.__checkbox.setAttribute("type", "checkbox"), f.default.bind(s.__checkbox, "change", i, !1), s.domElement.appendChild(s.__checkbox), s.updateDisplay(), s
                            }
                            return s(t, e), t.prototype.setValue = function(t) {
                                var n = e.prototype.setValue.call(this, t);
                                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n
                            }, t.prototype.updateDisplay = function() {
                                return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), e.prototype.updateDisplay.call(this)
                            }, t
                        }(c.default);
                    t.default = d, e.exports = t.default
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function i(e) {
                        if ("0" === e || o.default.isUndefined(e)) return 0;
                        var t = e.match(c);
                        return o.default.isNull(t) ? 0 : parseFloat(t[1])
                    }
                    t.__esModule = !0;
                    var a = n(5),
                        o = r(a),
                        s = {
                            HTMLEvents: ["change"],
                            MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                            KeyboardEvents: ["keydown"]
                        },
                        u = {};
                    o.default.each(s, function(e, t) {
                        o.default.each(e, function(e) {
                            u[e] = t
                        })
                    });
                    var c = /(\d+(\.\d+)?)px/,
                        l = {
                            makeSelectable: function(e, t) {
                                void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function() {
                                    return !1
                                } : function() {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
                            },
                            makeFullscreen: function(e, t, n) {
                                var r = n,
                                    i = t;
                                o.default.isUndefined(i) && (i = !0), o.default.isUndefined(r) && (r = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), r && (e.style.top = 0, e.style.bottom = 0)
                            },
                            fakeEvent: function(e, t, n, r) {
                                var i = n || {},
                                    a = u[t];
                                if (!a) throw new Error("Event type " + t + " not supported.");
                                var s = document.createEvent(a);
                                switch (a) {
                                    case "MouseEvents":
                                        var c = i.x || i.clientX || 0,
                                            l = i.y || i.clientY || 0;
                                        s.initMouseEvent(t, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, c, l, !1, !1, !1, !1, 0, null);
                                        break;
                                    case "KeyboardEvents":
                                        var f = s.initKeyboardEvent || s.initKeyEvent;
                                        o.default.defaults(i, {
                                            cancelable: !0,
                                            ctrlKey: !1,
                                            altKey: !1,
                                            shiftKey: !1,
                                            metaKey: !1,
                                            keyCode: void 0,
                                            charCode: void 0
                                        }), f(t, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
                                        break;
                                    default:
                                        s.initEvent(t, i.bubbles || !1, i.cancelable || !0)
                                }
                                o.default.defaults(s, r), e.dispatchEvent(s)
                            },
                            bind: function(e, t, n, r) {
                                var i = r || !1;
                                return e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), l
                            },
                            unbind: function(e, t, n, r) {
                                var i = r || !1;
                                return e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), l
                            },
                            addClass: function(e, t) {
                                if (void 0 === e.className) e.className = t;
                                else if (e.className !== t) {
                                    var n = e.className.split(/ +/);
                                    n.indexOf(t) === -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                                }
                                return l
                            },
                            removeClass: function(e, t) {
                                if (t)
                                    if (e.className === t) e.removeAttribute("class");
                                    else {
                                        var n = e.className.split(/ +/),
                                            r = n.indexOf(t);
                                        r !== -1 && (n.splice(r, 1), e.className = n.join(" "))
                                    }
                                else e.className = void 0;
                                return l
                            },
                            hasClass: function(e, t) {
                                return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
                            },
                            getWidth: function(e) {
                                var t = getComputedStyle(e);
                                return i(t["border-left-width"]) + i(t["border-right-width"]) + i(t["padding-left"]) + i(t["padding-right"]) + i(t.width)
                            },
                            getHeight: function(e) {
                                var t = getComputedStyle(e);
                                return i(t["border-top-width"]) + i(t["border-bottom-width"]) + i(t["padding-top"]) + i(t["padding-bottom"]) + i(t.height)
                            },
                            getOffset: function(e) {
                                var t = e,
                                    n = {
                                        left: 0,
                                        top: 0
                                    };
                                if (t.offsetParent)
                                    do n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent; while (t);
                                return n
                            },
                            isActive: function(e) {
                                return e === document.activeElement && (e.type || e.href)
                            }
                        };
                    t.default = l, e.exports = t.default
                }, function(e, t, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t ? e : t
                    }

                    function s(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : n(t)));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }
                    t.__esModule = !0;
                    var u = r(7),
                        c = i(u),
                        l = r(9),
                        f = i(l),
                        d = r(5),
                        h = i(d),
                        p = function(e) {
                            function t(n, r, i) {
                                a(this, t);
                                var s = o(this, e.call(this, n, r)),
                                    u = i,
                                    c = s;
                                if (s.__select = document.createElement("select"), h.default.isArray(u)) {
                                    var l = {};
                                    h.default.each(u, function(e) {
                                        l[e] = e
                                    }), u = l
                                }
                                return h.default.each(u, function(e, t) {
                                    var n = document.createElement("option");
                                    n.innerHTML = t, n.setAttribute("value", e), c.__select.appendChild(n)
                                }), s.updateDisplay(), f.default.bind(s.__select, "change", function() {
                                    var e = this.options[this.selectedIndex].value;
                                    c.setValue(e)
                                }), s.domElement.appendChild(s.__select), s
                            }
                            return s(t, e), t.prototype.setValue = function(t) {
                                var n = e.prototype.setValue.call(this, t);
                                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n
                            }, t.prototype.updateDisplay = function() {
                                return f.default.isActive(this.__select) ? this : (this.__select.value = this.getValue(), e.prototype.updateDisplay.call(this))
                            }, t
                        }(c.default);
                    t.default = p, e.exports = t.default
                }, function(e, t, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t ? e : t
                    }

                    function s(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : n(t)));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }
                    t.__esModule = !0;
                    var u = r(7),
                        c = i(u),
                        l = r(9),
                        f = i(l),
                        d = function(e) {
                            function t(n, r) {
                                function i() {
                                    c.setValue(c.__input.value)
                                }

                                function s() {
                                    c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
                                }
                                a(this, t);
                                var u = o(this, e.call(this, n, r)),
                                    c = u;
                                return u.__input = document.createElement("input"), u.__input.setAttribute("type", "text"), f.default.bind(u.__input, "keyup", i), f.default.bind(u.__input, "change", i), f.default.bind(u.__input, "blur", s), f.default.bind(u.__input, "keydown", function(e) {
                                    13 === e.keyCode && this.blur()
                                }), u.updateDisplay(), u.domElement.appendChild(u.__input), u
                            }
                            return s(t, e), t.prototype.updateDisplay = function() {
                                return f.default.isActive(this.__input) || (this.__input.value = this.getValue()), e.prototype.updateDisplay.call(this)
                            }, t
                        }(c.default);
                    t.default = d, e.exports = t.default
                }, function(e, t, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t ? e : t
                    }

                    function s(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : n(t)));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }

                    function u(e) {
                        var t = e.toString();
                        return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
                    }
                    t.__esModule = !0;
                    var c = r(7),
                        l = i(c),
                        f = r(5),
                        d = i(f),
                        h = function(e) {
                            function t(n, r, i) {
                                a(this, t);
                                var s = o(this, e.call(this, n, r)),
                                    c = i || {};
                                return s.__min = c.min, s.__max = c.max, s.__step = c.step, d.default.isUndefined(s.__step) ? 0 === s.initialValue ? s.__impliedStep = 1 : s.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(s.initialValue)) / Math.LN10)) / 10 : s.__impliedStep = s.__step, s.__precision = u(s.__impliedStep), s
                            }
                            return s(t, e), t.prototype.setValue = function(t) {
                                var n = t;
                                return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step !== 0 && (n = Math.round(n / this.__step) * this.__step), e.prototype.setValue.call(this, n)
                            }, t.prototype.min = function(e) {
                                return this.__min = e, this
                            }, t.prototype.max = function(e) {
                                return this.__max = e, this
                            }, t.prototype.step = function(e) {
                                return this.__step = e, this.__impliedStep = e, this.__precision = u(e), this
                            }, t
                        }(l.default);
                    t.default = h, e.exports = t.default
                }, function(e, t, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t ? e : t
                    }

                    function s(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : n(t)));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }

                    function u(e, t) {
                        var n = Math.pow(10, t);
                        return Math.round(e * n) / n
                    }
                    t.__esModule = !0;
                    var c = r(12),
                        l = i(c),
                        f = r(9),
                        d = i(f),
                        h = r(5),
                        p = i(h),
                        v = function(e) {
                            function t(n, r, i) {
                                function s() {
                                    var e = parseFloat(m.__input.value);
                                    p.default.isNaN(e) || m.setValue(e)
                                }

                                function u() {
                                    m.__onFinishChange && m.__onFinishChange.call(m, m.getValue())
                                }

                                function c() {
                                    u()
                                }

                                function l(e) {
                                    var t = g - e.clientY;
                                    m.setValue(m.getValue() + t * m.__impliedStep), g = e.clientY
                                }

                                function f() {
                                    d.default.unbind(window, "mousemove", l), d.default.unbind(window, "mouseup", f), u()
                                }

                                function h(e) {
                                    d.default.bind(window, "mousemove", l), d.default.bind(window, "mouseup", f), g = e.clientY
                                }
                                a(this, t);
                                var v = o(this, e.call(this, n, r, i));
                                v.__truncationSuspended = !1;
                                var m = v,
                                    g = void 0;
                                return v.__input = document.createElement("input"), v.__input.setAttribute("type", "text"), d.default.bind(v.__input, "change", s), d.default.bind(v.__input, "blur", c), d.default.bind(v.__input, "mousedown", h), d.default.bind(v.__input, "keydown", function(e) {
                                    13 === e.keyCode && (m.__truncationSuspended = !0, this.blur(), m.__truncationSuspended = !1, u())
                                }), v.updateDisplay(), v.domElement.appendChild(v.__input), v
                            }
                            return s(t, e), t.prototype.updateDisplay = function() {
                                return this.__input.value = this.__truncationSuspended ? this.getValue() : u(this.getValue(), this.__precision), e.prototype.updateDisplay.call(this)
                            }, t
                        }(l.default);
                    t.default = v, e.exports = t.default
                }, function(e, t, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t ? e : t
                    }

                    function s(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : n(t)));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }

                    function u(e, t, n, r, i) {
                        return r + (i - r) * ((e - t) / (n - t))
                    }
                    t.__esModule = !0;
                    var c = r(12),
                        l = i(c),
                        f = r(9),
                        d = i(f),
                        h = function(e) {
                            function t(n, r, i, s, c) {
                                function l(e) {
                                    document.activeElement.blur(), d.default.bind(window, "mousemove", f), d.default.bind(window, "mouseup", h), f(e)
                                }

                                function f(e) {
                                    e.preventDefault();
                                    var t = v.__background.getBoundingClientRect();
                                    return v.setValue(u(e.clientX, t.left, t.right, v.__min, v.__max)), !1
                                }

                                function h() {
                                    d.default.unbind(window, "mousemove", f), d.default.unbind(window, "mouseup", h), v.__onFinishChange && v.__onFinishChange.call(v, v.getValue())
                                }
                                a(this, t);
                                var p = o(this, e.call(this, n, r, {
                                        min: i,
                                        max: s,
                                        step: c
                                    })),
                                    v = p;
                                return p.__background = document.createElement("div"), p.__foreground = document.createElement("div"), d.default.bind(p.__background, "mousedown", l), d.default.addClass(p.__background, "slider"), d.default.addClass(p.__foreground, "slider-fg"), p.updateDisplay(), p.__background.appendChild(p.__foreground), p.domElement.appendChild(p.__background), p
                            }
                            return s(t, e), t.prototype.updateDisplay = function() {
                                var t = (this.getValue() - this.__min) / (this.__max - this.__min);
                                return this.__foreground.style.width = 100 * t + "%", e.prototype.updateDisplay.call(this)
                            }, t
                        }(l.default);
                    t.default = h, e.exports = t.default
                }, function(e, t, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t ? e : t
                    }

                    function s(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : n(t)));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }
                    t.__esModule = !0;
                    var u = r(7),
                        c = i(u),
                        l = r(9),
                        f = i(l),
                        d = function(e) {
                            function t(n, r, i) {
                                a(this, t);
                                var s = o(this, e.call(this, n, r)),
                                    u = s;
                                return s.__button = document.createElement("div"), s.__button.innerHTML = void 0 === i ? "Fire" : i, f.default.bind(s.__button, "click", function(e) {
                                    return e.preventDefault(), u.fire(), !1
                                }), f.default.addClass(s.__button, "button"), s.domElement.appendChild(s.__button), s
                            }
                            return s(t, e), t.prototype.fire = function() {
                                this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                            }, t
                        }(c.default);
                    t.default = d, e.exports = t.default
                }, function(e, t, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t ? e : t
                    }

                    function s(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : n(t)));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }

                    function u(e, t, n, r) {
                        e.style.background = "", b.default.each(w, function(i) {
                            e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + r + " 100%); "
                        })
                    }

                    function c(e) {
                        e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
                    }
                    t.__esModule = !0;
                    var l = r(7),
                        f = i(l),
                        d = r(9),
                        h = i(d),
                        p = r(2),
                        v = i(p),
                        m = r(3),
                        g = i(m),
                        y = r(5),
                        b = i(y),
                        _ = function(e) {
                            function t(n, r) {
                                function i(e) {
                                    p(e), h.default.bind(window, "mousemove", p), h.default.bind(window, "mouseup", s)
                                }

                                function s() {
                                    h.default.unbind(window, "mousemove", p), h.default.unbind(window, "mouseup", s), d()
                                }

                                function l() {
                                    var e = (0, g.default)(this.value);
                                    e !== !1 ? (_.__color.__state = e, _.setValue(_.__color.toOriginal())) : this.value = _.__color.toString()
                                }

                                function f() {
                                    h.default.unbind(window, "mousemove", m), h.default.unbind(window, "mouseup", f), d()
                                }

                                function d() {
                                    _.__onFinishChange && _.__onFinishChange.call(_, _.__color.toOriginal())
                                }

                                function p(e) {
                                    e.preventDefault();
                                    var t = _.__saturation_field.getBoundingClientRect(),
                                        n = (e.clientX - t.left) / (t.right - t.left),
                                        r = 1 - (e.clientY - t.top) / (t.bottom - t.top);
                                    return r > 1 ? r = 1 : r < 0 && (r = 0), n > 1 ? n = 1 : n < 0 && (n = 0), _.__color.v = r, _.__color.s = n, _.setValue(_.__color.toOriginal()), !1
                                }

                                function m(e) {
                                    e.preventDefault();
                                    var t = _.__hue_field.getBoundingClientRect(),
                                        n = 1 - (e.clientY - t.top) / (t.bottom - t.top);
                                    return n > 1 ? n = 1 : n < 0 && (n = 0), _.__color.h = 360 * n, _.setValue(_.__color.toOriginal()), !1
                                }
                                a(this, t);
                                var y = o(this, e.call(this, n, r));
                                y.__color = new v.default(y.getValue()), y.__temp = new v.default(0);
                                var _ = y;
                                y.domElement = document.createElement("div"), h.default.makeSelectable(y.domElement, !1), y.__selector = document.createElement("div"), y.__selector.className = "selector", y.__saturation_field = document.createElement("div"), y.__saturation_field.className = "saturation-field", y.__field_knob = document.createElement("div"), y.__field_knob.className = "field-knob", y.__field_knob_border = "2px solid ", y.__hue_knob = document.createElement("div"), y.__hue_knob.className = "hue-knob", y.__hue_field = document.createElement("div"), y.__hue_field.className = "hue-field", y.__input = document.createElement("input"), y.__input.type = "text", y.__input_textShadow = "0 1px 1px ", h.default.bind(y.__input, "keydown", function(e) {
                                    13 === e.keyCode && l.call(this)
                                }), h.default.bind(y.__input, "blur", l), h.default.bind(y.__selector, "mousedown", function() {
                                    h.default.addClass(this, "drag").bind(window, "mouseup", function() {
                                        h.default.removeClass(_.__selector, "drag")
                                    })
                                });
                                var w = document.createElement("div");
                                return b.default.extend(y.__selector.style, {
                                    width: "122px",
                                    height: "102px",
                                    padding: "3px",
                                    backgroundColor: "#222",
                                    boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                                }), b.default.extend(y.__field_knob.style, {
                                    position: "absolute",
                                    width: "12px",
                                    height: "12px",
                                    border: y.__field_knob_border + (y.__color.v < .5 ? "#fff" : "#000"),
                                    boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                                    borderRadius: "12px",
                                    zIndex: 1
                                }), b.default.extend(y.__hue_knob.style, {
                                    position: "absolute",
                                    width: "15px",
                                    height: "2px",
                                    borderRight: "4px solid #fff",
                                    zIndex: 1
                                }), b.default.extend(y.__saturation_field.style, {
                                    width: "100px",
                                    height: "100px",
                                    border: "1px solid #555",
                                    marginRight: "3px",
                                    display: "inline-block",
                                    cursor: "pointer"
                                }), b.default.extend(w.style, {
                                    width: "100%",
                                    height: "100%",
                                    background: "none"
                                }), u(w, "top", "rgba(0,0,0,0)", "#000"), b.default.extend(y.__hue_field.style, {
                                    width: "15px",
                                    height: "100px",
                                    border: "1px solid #555",
                                    cursor: "ns-resize",
                                    position: "absolute",
                                    top: "3px",
                                    right: "3px"
                                }), c(y.__hue_field), b.default.extend(y.__input.style, {
                                    outline: "none",
                                    textAlign: "center",
                                    color: "#fff",
                                    border: 0,
                                    fontWeight: "bold",
                                    textShadow: y.__input_textShadow + "rgba(0,0,0,0.7)"
                                }), h.default.bind(y.__saturation_field, "mousedown", i), h.default.bind(y.__field_knob, "mousedown", i), h.default.bind(y.__hue_field, "mousedown", function(e) {
                                    m(e), h.default.bind(window, "mousemove", m), h.default.bind(window, "mouseup", f)
                                }), y.__saturation_field.appendChild(w), y.__selector.appendChild(y.__field_knob), y.__selector.appendChild(y.__saturation_field), y.__selector.appendChild(y.__hue_field), y.__hue_field.appendChild(y.__hue_knob), y.domElement.appendChild(y.__input), y.domElement.appendChild(y.__selector), y.updateDisplay(), y
                            }
                            return s(t, e), t.prototype.updateDisplay = function() {
                                var e = (0, g.default)(this.getValue());
                                if (e !== !1) {
                                    var t = !1;
                                    b.default.each(v.default.COMPONENTS, function(n) {
                                        if (!b.default.isUndefined(e[n]) && !b.default.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {}
                                    }, this), t && b.default.extend(this.__color.__state, e)
                                }
                                b.default.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                                var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                                    r = 255 - n;
                                b.default.extend(this.__field_knob.style, {
                                    marginLeft: 100 * this.__color.s - 7 + "px",
                                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                                    backgroundColor: this.__temp.toHexString(),
                                    border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")"
                                }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, u(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), b.default.extend(this.__input.style, {
                                    backgroundColor: this.__color.toHexString(),
                                    color: "rgb(" + n + "," + n + "," + n + ")",
                                    textShadow: this.__input_textShadow + "rgba(" + r + "," + r + "," + r + ",.7)"
                                })
                            }, t
                        }(f.default),
                        w = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
                    t.default = _, e.exports = t.default
                }, function(e, t, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t, n) {
                        var r = document.createElement("li");
                        return t && r.appendChild(t), n ? e.__ul.insertBefore(r, n) : e.__ul.appendChild(r), e.onResize(), r
                    }

                    function o(e, t) {
                        var n = e.__preset_select[e.__preset_select.selectedIndex];
                        t ? n.innerHTML = n.value + "*" : n.innerHTML = n.value
                    }

                    function s(e, t, n) {
                        if (n.__li = t, n.__gui = e, G.default.extend(n, {
                                options: function(t) {
                                    if (arguments.length > 1) {
                                        var r = n.__li.nextElementSibling;
                                        return n.remove(), c(e, n.object, n.property, {
                                            before: r,
                                            factoryArgs: [G.default.toArray(arguments)]
                                        })
                                    }
                                    if (G.default.isArray(t) || G.default.isObject(t)) {
                                        var i = n.__li.nextElementSibling;
                                        return n.remove(), c(e, n.object, n.property, {
                                            before: i,
                                            factoryArgs: [t]
                                        })
                                    }
                                },
                                name: function(e) {
                                    return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
                                },
                                listen: function() {
                                    return n.__gui.listen(n), n
                                },
                                remove: function() {
                                    return n.__gui.remove(n), n
                                }
                            }), n instanceof L.default) {
                            var r = new I.default(n.object, n.property, {
                                min: n.__min,
                                max: n.__max,
                                step: n.__step
                            });
                            G.default.each(["updateDisplay", "onChange", "onFinishChange", "step"], function(e) {
                                var t = n[e],
                                    i = r[e];
                                n[e] = r[e] = function() {
                                    var e = Array.prototype.slice.call(arguments);
                                    return i.apply(r, e), t.apply(n, e)
                                }
                            }), q.default.addClass(t, "has-slider"), n.domElement.insertBefore(r.domElement, n.domElement.firstElementChild)
                        } else if (n instanceof I.default) {
                            var i = function(t) {
                                if (G.default.isNumber(n.__min) && G.default.isNumber(n.__max)) {
                                    var r = n.__li.firstElementChild.firstElementChild.innerHTML,
                                        i = n.__gui.__listening.indexOf(n) > -1;
                                    n.remove();
                                    var a = c(e, n.object, n.property, {
                                        before: n.__li.nextElementSibling,
                                        factoryArgs: [n.__min, n.__max, n.__step]
                                    });
                                    return a.name(r), i && a.listen(), a
                                }
                                return t
                            };
                            n.min = G.default.compose(i, n.min), n.max = G.default.compose(i, n.max)
                        } else n instanceof C.default ? (q.default.bind(t, "click", function() {
                            q.default.fakeEvent(n.__checkbox, "click")
                        }), q.default.bind(n.__checkbox, "click", function(e) {
                            e.stopPropagation()
                        })) : n instanceof P.default ? (q.default.bind(t, "click", function() {
                            q.default.fakeEvent(n.__button, "click")
                        }), q.default.bind(t, "mouseover", function() {
                            q.default.addClass(n.__button, "hover")
                        }), q.default.bind(t, "mouseout", function() {
                            q.default.removeClass(n.__button, "hover")
                        })) : n instanceof j.default && (q.default.addClass(t, "color"), n.updateDisplay = G.default.compose(function(e) {
                            return t.style.borderLeftColor = n.__color.toString(), e
                        }, n.updateDisplay), n.updateDisplay());
                        n.setValue = G.default.compose(function(t) {
                            return e.getRoot().__preset_select && n.isModified() && o(e.getRoot(), !0), t
                        }, n.setValue)
                    }

                    function u(e, t) {
                        var n = e.getRoot(),
                            r = n.__rememberedObjects.indexOf(t.object);
                        if (r !== -1) {
                            var i = n.__rememberedObjectIndecesToControllers[r];
                            if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[r] = i), i[t.property] = t, n.load && n.load.remembered) {
                                var a = n.load.remembered,
                                    o = void 0;
                                if (a[e.preset]) o = a[e.preset];
                                else {
                                    if (!a[Z]) return;
                                    o = a[Z]
                                }
                                if (o[r] && void 0 !== o[r][t.property]) {
                                    var s = o[r][t.property];
                                    t.initialValue = s, t.setValue(s)
                                }
                            }
                        }
                    }

                    function c(e, t, n, r) {
                        if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');
                        var i = void 0;
                        if (r.color) i = new j.default(t, n);
                        else {
                            var o = [t, n].concat(r.factoryArgs);
                            i = M.default.apply(e, o)
                        }
                        r.before instanceof S.default && (r.before = r.before.__li), u(e, i), q.default.addClass(i.domElement, "c");
                        var c = document.createElement("span");
                        q.default.addClass(c, "property-name"), c.innerHTML = i.property;
                        var l = document.createElement("div");
                        l.appendChild(c), l.appendChild(i.domElement);
                        var f = a(e, l, r.before);
                        return q.default.addClass(f, ie.CLASS_CONTROLLER_ROW), i instanceof j.default ? q.default.addClass(f, "color") : q.default.addClass(f, b(i.getValue())), s(e, f, i), e.__controllers.push(i), i
                    }

                    function l(e, t) {
                        return document.location.href + "." + t
                    }

                    function f(e, t, n) {
                        var r = document.createElement("option");
                        r.innerHTML = t, r.value = t, e.__preset_select.appendChild(r), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
                    }

                    function d(e, t) {
                        t.style.display = e.useLocalStorage ? "block" : "none"
                    }

                    function h(e) {
                        var t = e.__save_row = document.createElement("li");
                        q.default.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), q.default.addClass(t, "save-row");
                        var n = document.createElement("span");
                        n.innerHTML = "&nbsp;", q.default.addClass(n, "button gears");
                        var r = document.createElement("span");
                        r.innerHTML = "Save", q.default.addClass(r, "button"), q.default.addClass(r, "save");
                        var i = document.createElement("span");
                        i.innerHTML = "New", q.default.addClass(i, "button"), q.default.addClass(i, "save-as");
                        var a = document.createElement("span");
                        a.innerHTML = "Revert", q.default.addClass(a, "button"), q.default.addClass(a, "revert");
                        var o = e.__preset_select = document.createElement("select");
                        if (e.load && e.load.remembered ? G.default.each(e.load.remembered, function(t, n) {
                                f(e, n, n === e.preset)
                            }) : f(e, Z, !1), q.default.bind(o, "change", function() {
                                for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                                e.preset = this.value
                            }), t.appendChild(o), t.appendChild(n), t.appendChild(r), t.appendChild(i), t.appendChild(a), Q) {
                            var s = document.getElementById("dg-local-explain"),
                                u = document.getElementById("dg-local-storage"),
                                c = document.getElementById("dg-save-locally");
                            c.style.display = "block", "true" === localStorage.getItem(l(e, "isLocal")) && u.setAttribute("checked", "checked"), d(e, s), q.default.bind(u, "change", function() {
                                e.useLocalStorage = !e.useLocalStorage, d(e, s)
                            })
                        }
                        var h = document.getElementById("dg-new-constructor");
                        q.default.bind(h, "keydown", function(e) {
                            !e.metaKey || 67 !== e.which && 67 !== e.keyCode || $.hide()
                        }), q.default.bind(n, "click", function() {
                            h.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), $.show(), h.focus(), h.select()
                        }), q.default.bind(r, "click", function() {
                            e.save()
                        }), q.default.bind(i, "click", function() {
                            var t = prompt("Enter a new preset name.");
                            t && e.saveAs(t)
                        }), q.default.bind(a, "click", function() {
                            e.revert()
                        })
                    }

                    function p(e) {
                        function t(t) {
                            return t.preventDefault(), e.width += i - t.clientX, e.onResize(), i = t.clientX, !1
                        }

                        function n() {
                            q.default.removeClass(e.__closeButton, ie.CLASS_DRAG), q.default.unbind(window, "mousemove", t), q.default.unbind(window, "mouseup", n)
                        }

                        function r(r) {
                            return r.preventDefault(), i = r.clientX, q.default.addClass(e.__closeButton, ie.CLASS_DRAG), q.default.bind(window, "mousemove", t), q.default.bind(window, "mouseup", n), !1
                        }
                        var i = void 0;
                        e.__resize_handle = document.createElement("div"), G.default.extend(e.__resize_handle.style, {
                            width: "6px",
                            marginLeft: "-3px",
                            height: "200px",
                            cursor: "ew-resize",
                            position: "absolute"
                        }), q.default.bind(e.__resize_handle, "mousedown", r), q.default.bind(e.__closeButton, "mousedown", r), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
                    }

                    function v(e, t) {
                        e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
                    }

                    function m(e, t) {
                        var n = {};
                        return G.default.each(e.__rememberedObjects, function(r, i) {
                            var a = {},
                                o = e.__rememberedObjectIndecesToControllers[i];
                            G.default.each(o, function(e, n) {
                                a[n] = t ? e.initialValue : e.getValue()
                            }), n[i] = a
                        }), n
                    }

                    function g(e) {
                        for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t)
                    }

                    function y(e) {
                        0 !== e.length && U.default.call(window, function() {
                            y(e)
                        }), G.default.each(e, function(e) {
                            e.updateDisplay()
                        })
                    }
                    t.__esModule = !0;
                    var b = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(e) {
                            return "undefined" == typeof e ? "undefined" : n(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : n(e)
                        },
                        _ = r(18),
                        w = i(_),
                        E = r(19),
                        A = i(E),
                        x = r(20),
                        M = i(x),
                        T = r(7),
                        S = i(T),
                        R = r(8),
                        C = i(R),
                        O = r(15),
                        P = i(O),
                        k = r(13),
                        I = i(k),
                        F = r(14),
                        L = i(F),
                        N = r(16),
                        j = i(N),
                        D = r(21),
                        U = i(D),
                        B = r(22),
                        V = i(B),
                        z = r(9),
                        q = i(z),
                        Y = r(5),
                        G = i(Y),
                        X = r(23),
                        H = i(X);
                    w.default.inject(H.default);
                    var W = "dg",
                        K = 72,
                        J = 20,
                        Z = "Default",
                        Q = function() {
                            try {
                                return "localStorage" in window && null !== window.localStorage
                            } catch (e) {
                                return !1
                            }
                        }(),
                        $ = void 0,
                        ee = !0,
                        te = void 0,
                        ne = !1,
                        re = [],
                        ie = function e(t) {
                            function n() {
                                var e = r.getRoot();
                                e.width += 1, G.default.defer(function() {
                                    e.width -= 1
                                })
                            }
                            var r = this,
                                i = t || {};
                            this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), q.default.addClass(this.domElement, W), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], i = G.default.defaults(i, {
                                closeOnTop: !1,
                                autoPlace: !0,
                                width: e.DEFAULT_WIDTH
                            }), i = G.default.defaults(i, {
                                resizable: i.autoPlace,
                                hideable: i.autoPlace
                            }), G.default.isUndefined(i.load) ? i.load = {
                                preset: Z
                            } : i.preset && (i.load.preset = i.preset), G.default.isUndefined(i.parent) && i.hideable && re.push(this), i.resizable = G.default.isUndefined(i.parent) && i.resizable, i.autoPlace && G.default.isUndefined(i.scrollable) && (i.scrollable = !0);
                            var o = Q && "true" === localStorage.getItem(l(this, "isLocal")),
                                s = void 0;
                            if (Object.defineProperties(this, {
                                    parent: {
                                        get: function() {
                                            return i.parent
                                        }
                                    },
                                    scrollable: {
                                        get: function() {
                                            return i.scrollable
                                        }
                                    },
                                    autoPlace: {
                                        get: function() {
                                            return i.autoPlace
                                        }
                                    },
                                    closeOnTop: {
                                        get: function() {
                                            return i.closeOnTop
                                        }
                                    },
                                    preset: {
                                        get: function() {
                                            return r.parent ? r.getRoot().preset : i.load.preset
                                        },
                                        set: function(e) {
                                            r.parent ? r.getRoot().preset = e : i.load.preset = e, g(this), r.revert()
                                        }
                                    },
                                    width: {
                                        get: function() {
                                            return i.width
                                        },
                                        set: function(e) {
                                            i.width = e, v(r, e)
                                        }
                                    },
                                    name: {
                                        get: function() {
                                            return i.name
                                        },
                                        set: function(e) {
                                            i.name = e, titleRowName && (titleRowName.innerHTML = i.name)
                                        }
                                    },
                                    closed: {
                                        get: function() {
                                            return i.closed
                                        },
                                        set: function(t) {
                                            i.closed = t, i.closed ? q.default.addClass(r.__ul, e.CLASS_CLOSED) : q.default.removeClass(r.__ul, e.CLASS_CLOSED), this.onResize(), r.__closeButton && (r.__closeButton.innerHTML = t ? e.TEXT_OPEN : e.TEXT_CLOSED)
                                        }
                                    },
                                    load: {
                                        get: function() {
                                            return i.load
                                        }
                                    },
                                    useLocalStorage: {
                                        get: function() {
                                            return o
                                        },
                                        set: function(e) {
                                            Q && (o = e, e ? q.default.bind(window, "unload", s) : q.default.unbind(window, "unload", s), localStorage.setItem(l(r, "isLocal"), e))
                                        }
                                    }
                                }), G.default.isUndefined(i.parent)) {
                                if (i.closed = !1, q.default.addClass(this.domElement, e.CLASS_MAIN), q.default.makeSelectable(this.domElement, !1), Q && o) {
                                    r.useLocalStorage = !0;
                                    var u = localStorage.getItem(l(this, "gui"));
                                    u && (i.load = JSON.parse(u))
                                }
                                this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, q.default.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), i.closeOnTop ? (q.default.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (q.default.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), q.default.bind(this.__closeButton, "click", function() {
                                    r.closed = !r.closed
                                })
                            } else {
                                void 0 === i.closed && (i.closed = !0);
                                var c = document.createTextNode(i.name);
                                q.default.addClass(c, "controller-name");
                                var f = a(r, c),
                                    d = function(e) {
                                        return e.preventDefault(), r.closed = !r.closed, !1
                                    };
                                q.default.addClass(this.__ul, e.CLASS_CLOSED), q.default.addClass(f, "title"), q.default.bind(f, "click", d), i.closed || (this.closed = !1)
                            }
                            i.autoPlace && (G.default.isUndefined(i.parent) && (ee && (te = document.createElement("div"), q.default.addClass(te, W), q.default.addClass(te, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(te), ee = !1), te.appendChild(this.domElement), q.default.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || v(r, i.width)), this.__resizeHandler = function() {
                                r.onResizeDebounced()
                            }, q.default.bind(window, "resize", this.__resizeHandler), q.default.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), q.default.bind(this.__ul, "transitionend", this.__resizeHandler), q.default.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), i.resizable && p(this), s = function() {
                                Q && "true" === localStorage.getItem(l(r, "isLocal")) && localStorage.setItem(l(r, "gui"), JSON.stringify(r.getSaveObject()))
                            }, this.saveToLocalStorageIfPossible = s, i.parent || n()
                        };
                    ie.toggleHide = function() {
                        ne = !ne, G.default.each(re, function(e) {
                            e.domElement.style.display = ne ? "none" : ""
                        })
                    }, ie.CLASS_AUTO_PLACE = "a", ie.CLASS_AUTO_PLACE_CONTAINER = "ac", ie.CLASS_MAIN = "main", ie.CLASS_CONTROLLER_ROW = "cr", ie.CLASS_TOO_TALL = "taller-than-window", ie.CLASS_CLOSED = "closed", ie.CLASS_CLOSE_BUTTON = "close-button", ie.CLASS_CLOSE_TOP = "close-top", ie.CLASS_CLOSE_BOTTOM = "close-bottom", ie.CLASS_DRAG = "drag", ie.DEFAULT_WIDTH = 245, ie.TEXT_CLOSED = "Close Controls", ie.TEXT_OPEN = "Open Controls", ie._keydownHandler = function(e) {
                        "text" === document.activeElement.type || e.which !== K && e.keyCode !== K || ie.toggleHide()
                    }, q.default.bind(window, "keydown", ie._keydownHandler, !1), G.default.extend(ie.prototype, {
                        add: function(e, t) {
                            return c(this, e, t, {
                                factoryArgs: Array.prototype.slice.call(arguments, 2)
                            })
                        },
                        addColor: function(e, t) {
                            return c(this, e, t, {
                                color: !0
                            })
                        },
                        remove: function(e) {
                            this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
                            var t = this;
                            G.default.defer(function() {
                                t.onResize()
                            })
                        },
                        destroy: function() {
                            this.autoPlace && te.removeChild(this.domElement), q.default.unbind(window, "keydown", ie._keydownHandler, !1), q.default.unbind(window, "resize", this.__resizeHandler), this.saveToLocalStorageIfPossible && q.default.unbind(window, "unload", this.saveToLocalStorageIfPossible)
                        },
                        addFolder: function(e) {
                            if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
                            var t = {
                                name: e,
                                parent: this
                            };
                            t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
                            var n = new ie(t);
                            this.__folders[e] = n;
                            var r = a(this, n.domElement);
                            return q.default.addClass(r, "folder"), n
                        },
                        open: function() {
                            this.closed = !1
                        },
                        close: function() {
                            this.closed = !0
                        },
                        onResize: function() {
                            var e = this.getRoot();
                            if (e.scrollable) {
                                var t = q.default.getOffset(e.__ul).top,
                                    n = 0;
                                G.default.each(e.__ul.childNodes, function(t) {
                                    e.autoPlace && t === e.__save_row || (n += q.default.getHeight(t))
                                }), window.innerHeight - t - J < n ? (q.default.addClass(e.domElement, ie.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - J + "px") : (q.default.removeClass(e.domElement, ie.CLASS_TOO_TALL), e.__ul.style.height = "auto")
                            }
                            e.__resize_handle && G.default.defer(function() {
                                e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
                            }), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
                        },
                        onResizeDebounced: G.default.debounce(function() {
                            this.onResize()
                        }, 50),
                        remember: function() {
                            if (G.default.isUndefined($) && ($ = new V.default, $.domElement.innerHTML = A.default), this.parent) throw new Error("You can only call remember on a top level GUI.");
                            var e = this;
                            G.default.each(Array.prototype.slice.call(arguments), function(t) {
                                0 === e.__rememberedObjects.length && h(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t)
                            }), this.autoPlace && v(this, this.width)
                        },
                        getRoot: function() {
                            for (var e = this; e.parent;) e = e.parent;
                            return e
                        },
                        getSaveObject: function() {
                            var e = this.load;
                            return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = m(this)), e.folders = {}, G.default.each(this.__folders, function(t, n) {
                                e.folders[n] = t.getSaveObject()
                            }), e
                        },
                        save: function() {
                            this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = m(this), o(this, !1), this.saveToLocalStorageIfPossible()
                        },
                        saveAs: function(e) {
                            this.load.remembered || (this.load.remembered = {}, this.load.remembered[Z] = m(this, !0)), this.load.remembered[e] = m(this), this.preset = e, f(this, e, !0), this.saveToLocalStorageIfPossible()
                        },
                        revert: function(e) {
                            G.default.each(this.__controllers, function(t) {
                                this.getRoot().load.remembered ? u(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue())
                            }, this), G.default.each(this.__folders, function(e) {
                                e.revert(e)
                            }), e || o(this.getRoot(), !1)
                        },
                        listen: function(e) {
                            var t = 0 === this.__listening.length;
                            this.__listening.push(e), t && y(this.__listening)
                        },
                        updateDisplay: function() {
                            G.default.each(this.__controllers, function(e) {
                                e.updateDisplay()
                            }), G.default.each(this.__folders, function(e) {
                                e.updateDisplay()
                            })
                        }
                    }), t.default = ie, e.exports = t.default
                }, function(e, t) {
                    e.exports = {
                        load: function(e, t) {
                            var n = t || document,
                                r = n.createElement("link");
                            r.type = "text/css", r.rel = "stylesheet", r.href = e, n.getElementsByTagName("head")[0].appendChild(r)
                        },
                        inject: function(e, t) {
                            var n = t || document,
                                r = document.createElement("style");
                            r.type = "text/css", r.innerHTML = e;
                            var i = n.getElementsByTagName("head")[0];
                            try {
                                i.appendChild(r)
                            } catch (e) {}
                        }
                    }
                }, function(e, t) {
                    e.exports = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.__esModule = !0;
                    var i = n(10),
                        a = r(i),
                        o = n(13),
                        s = r(o),
                        u = n(14),
                        c = r(u),
                        l = n(11),
                        f = r(l),
                        d = n(15),
                        h = r(d),
                        p = n(8),
                        v = r(p),
                        m = n(5),
                        g = r(m),
                        y = function(e, t) {
                            var n = e[t];
                            return g.default.isArray(arguments[2]) || g.default.isObject(arguments[2]) ? new a.default(e, t, arguments[2]) : g.default.isNumber(n) ? g.default.isNumber(arguments[2]) && g.default.isNumber(arguments[3]) ? g.default.isNumber(arguments[4]) ? new c.default(e, t, arguments[2], arguments[3], arguments[4]) : new c.default(e, t, arguments[2], arguments[3]) : g.default.isNumber(arguments[4]) ? new s.default(e, t, {
                                min: arguments[2],
                                max: arguments[3],
                                step: arguments[4]
                            }) : new s.default(e, t, {
                                min: arguments[2],
                                max: arguments[3]
                            }) : g.default.isString(n) ? new f.default(e, t) : g.default.isFunction(n) ? new h.default(e, t, "") : g.default.isBoolean(n) ? new v.default(e, t) : null
                        };
                    t.default = y, e.exports = t.default
                }, function(e, t) {
                    function n(e) {
                        setTimeout(e, 1e3 / 60)
                    }
                    t.__esModule = !0, t.default = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || n, e.exports = t.default
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    t.__esModule = !0;
                    var a = n(9),
                        o = r(a),
                        s = n(5),
                        u = r(s),
                        c = function() {
                            function e() {
                                i(this, e), this.backgroundElement = document.createElement("div"), u.default.extend(this.backgroundElement.style, {
                                    backgroundColor: "rgba(0,0,0,0.8)",
                                    top: 0,
                                    left: 0,
                                    display: "none",
                                    zIndex: "1000",
                                    opacity: 0,
                                    WebkitTransition: "opacity 0.2s linear",
                                    transition: "opacity 0.2s linear"
                                }), o.default.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), u.default.extend(this.domElement.style, {
                                    position: "fixed",
                                    display: "none",
                                    zIndex: "1001",
                                    opacity: 0,
                                    WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                                    transition: "transform 0.2s ease-out, opacity 0.2s linear"
                                }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
                                var t = this;
                                o.default.bind(this.backgroundElement, "click", function() {
                                    t.hide()
                                })
                            }
                            return e.prototype.show = function() {
                                var e = this;
                                this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), u.default.defer(function() {
                                    e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
                                })
                            }, e.prototype.hide = function e() {
                                var t = this,
                                    e = function e() {
                                        t.domElement.style.display = "none", t.backgroundElement.style.display = "none", o.default.unbind(t.domElement, "webkitTransitionEnd", e), o.default.unbind(t.domElement, "transitionend", e), o.default.unbind(t.domElement, "oTransitionEnd", e)
                                    };
                                o.default.bind(this.domElement, "webkitTransitionEnd", e), o.default.bind(this.domElement, "transitionend", e), o.default.bind(this.domElement, "oTransitionEnd", e), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
                            }, e.prototype.layout = function() {
                                this.domElement.style.left = window.innerWidth / 2 - o.default.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - o.default.getHeight(this.domElement) / 2 + "px"
                            }, e
                        }();
                    t.default = c, e.exports = t.default
                }, function(e, t, n) {
                    t = e.exports = n(24)(), t.push([e.id, ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */\n  /** allow overflow for color selector */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button.close-top {\n        position: relative; }\n      .dg.main .close-button.close-bottom {\n        position: absolute; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-y: visible; }\n    .dg.a.has-save > ul.close-top {\n      margin-top: 0; }\n    .dg.a.has-save > ul.close-bottom {\n      margin-top: 27px; }\n    .dg.a.has-save > ul.closed {\n      margin-top: 0; }\n    .dg.a .save-row {\n      top: 0;\n      z-index: 1002; }\n      .dg.a .save-row.close-top {\n        position: relative; }\n      .dg.a .save-row.close-bottom {\n        position: fixed; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out;\n    -webkit-transition: overflow 0.1s linear;\n    -o-transition: overflow 0.1s linear;\n    -moz-transition: overflow 0.1s linear;\n    transition: overflow 0.1s linear; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid transparent; }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px;\n    overflow: hidden; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%;\n    position: relative; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 7px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .cr.color {\n    overflow: visible; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: #000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.color {\n    border-left: 3px solid; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2FA1D6; }\n    .dg .cr.number input[type=text] {\n      color: #2FA1D6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2FA1D6;\n    max-width: 100%; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", ""])
                }, function(e, t) {
                    e.exports = function() {
                        var e = [];
                        return e.toString = function() {
                            for (var e = [], t = 0; t < this.length; t++) {
                                var n = this[t];
                                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                            }
                            return e.join("")
                        }, e.i = function(t, n) {
                            "string" == typeof t && (t = [
                                [null, t, ""]
                            ]);
                            for (var r = {}, i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                "number" == typeof a && (r[a] = !0)
                            }
                            for (i = 0; i < t.length; i++) {
                                var o = t[i];
                                "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
                            }
                        }, e
                    }
                }])
            })
        }).call(t, n(82)(e))
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }, function(e, t) {
        "use strict";

        function n(e) {
            var t = Array.prototype.pop.call(e);
            return Array.prototype.unshift.call(e, t), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.step = n;
        var r = (t.wrapIndex = function(e, t) {
            return t[(t.length + Math.round(e)) % t.length]
        }, 1 / Math.log(2));
        t.nextPow2 = function(e) {
            return Math.pow(2, Math.ceil(Math.log(e) * r))
        }, t.rootPath = ("/" + ((location.href.match(/:\/\/.+?\/([^\/\?]+?(?=[\/\?]|$))?/i) || [])[1] || "") + "/").replace(/\/+/gi, "/")
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.defaultExcept = ["127.0.0.1", "0.0.0.0", "localhost"],
            r = t.redirect = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "https",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                    r = e + ":";
                document.location.protocol !== r && t.indexOf(document.location.hostname) < 0 && (document.location.protocol = r)
            };
        t.default = r
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function() {
                function e(t, r) {
                    n(this, e), this.time = 0, this.since = 0, this.offset = 0, this.rate = 1, this.step = -1, this.dt = 0, this.paused = !1, this.end = -1, this.loop = !1, this.reset(t, r)
                }
                return r(e, [{
                    key: "now",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                        return (e - this.offset) * this.rate
                    }
                }, {
                    key: "tick",
                    value: function(e) {
                        var t = this.time,
                            n = 0;
                        if (this.step >= 0) n = this.step * this.rate, t += n;
                        else {
                            var r = t;
                            t = this.now(e), n = t - r
                        }
                        return this.paused ? (this.offset += n, n = 0) : this.end < 0 ? this.time = t : this.loop ? this.time = t % this.end : (this.time = (this.rate > 0 ? Math.min : Math.max)(t, this.end), this.time !== t && (this.paused = !0)), this.dt = n, this
                    }
                }, {
                    key: "seek",
                    value: function(e) {
                        return this.offset = -e, this
                    }
                }, {
                    key: "scrub",
                    value: function(e) {
                        return this.offset -= e, this
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                        return this.since = this.offset = t, this.time = this.now(e), this
                    }
                }]), e
            }();
        t.Timer = i, t.default = i
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Tendrils = t.glSettings = t.defaults = void 0;
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(53),
            c = r(u),
            l = n(87),
            f = r(l),
            d = n(104),
            h = r(d),
            p = n(85),
            v = r(p),
            m = n(83),
            g = n(122),
            y = r(g),
            b = n(124),
            _ = n(119),
            w = r(_),
            E = n(125),
            A = r(E),
            x = n(126),
            M = r(x),
            T = n(127),
            S = r(T),
            R = n(128),
            C = r(R),
            O = n(129),
            P = r(O),
            k = n(121),
            I = r(k),
            F = n(130),
            L = r(F),
            N = n(131),
            j = r(N),
            D = t.defaults = function() {
                return {
                    state: {
                        rootNum: Math.pow(2, 9),
                        autoClearView: !1,
                        autoFade: !0,
                        damping: .043,
                        speedLimit: .01,
                        forceWeight: .016,
                        varyForce: -.1,
                        flowWeight: 1,
                        varyFlow: .2,
                        noiseWeight: .002,
                        varyNoise: .3,
                        flowDecay: .003,
                        flowWidth: 5,
                        noiseScale: 2.125,
                        varyNoiseScale: .5,
                        noiseSpeed: 25e-5,
                        varyNoiseSpeed: .1,
                        target: 0,
                        varyTarget: 1,
                        lineWidth: 1,
                        speedAlpha: 1e-6,
                        colorMapAlpha: .4,
                        baseColor: [1, 1, 1, .5],
                        flowColor: [1, 1, 1, .04],
                        fadeColor: [.1333, .1333, .1333, 0]
                    },
                    timer: Object.assign(new v.default, {
                        step: 1e3 / 60
                    }),
                    numBuffers: 0,
                    logicShader: null,
                    renderShader: [M.default, S.default],
                    flowShader: [C.default, P.default],
                    fillShader: [I.default, L.default],
                    copyShader: [I.default, j.default],
                    colorMap: null
                }
            },
            U = (t.glSettings = {
                preserveDrawingBuffer: !0,
                antialias: !0
            }, t.Tendrils = function() {
                function e(t, n) {
                    a(this, e);
                    var r = o({}, D(), n);
                    this.gl = t, this.state = r.state, (this.colorMap = r.colorMap) || (this.colorMap = (0, f.default)(this.gl, [1, 1], {
                        float: !0
                    })), this.screen = new w.default(this.gl), this.flow = (0, f.default)(this.gl, [1, 1], {
                        float: !0
                    }), this.targets = (0, f.default)(this.gl, [1, 1], {
                        float: !0
                    }), this.buffers = [], this.setupBuffers(r.numBuffers), this.logicShader = null, this.renderShader = Array.isArray(r.renderShader) ? c.default.apply(void 0, [this.gl].concat(i(r.renderShader))) : r.renderShader, this.flowShader = Array.isArray(r.flowShader) ? c.default.apply(void 0, [this.gl].concat(i(r.flowShader))) : r.flowShader, this.copyShader = Array.isArray(r.copyShader) ? c.default.apply(void 0, [this.gl].concat(i(r.copyShader))) : r.copyShader, this.fillShader = Array.isArray(r.fillShader) ? c.default.apply(void 0, [this.gl].concat(i(r.fillShader))) : r.fillShader, this.uniforms = {
                        render: {},
                        update: {}
                    }, this.particles = null, this.viewRes = [0, 0], this.viewSize = [0, 0], this.timer = r.timer, this.tempData = []
                }
                return s(e, [{
                    key: "setup",
                    value: function() {
                        return this.setupParticles.apply(this, arguments), this.reset(), this
                    }
                }, {
                    key: "reset",
                    value: function() {
                        return this.spawn(), this
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        return this.particles.dispose(), delete this.particles, this
                    }
                }, {
                    key: "setupBuffers",
                    value: function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; this.buffers.length < e;) this.buffers.push((0, f.default)(this.gl, [1, 1]));
                        for (; this.buffers.length > e;) this.buffers.pop().dispose();
                        return this
                    }
                }, {
                    key: "setupParticles",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.rootNum,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                        this.state.rootNum = e;
                        var n = [e, e];
                        return this.particles = new h.default(this.gl, {
                            shape: n,
                            geomShape: [n[0], 2 * n[1]],
                            logicFrag: A.default,
                            render: this.renderShader
                        }), this.logicShader = this.particles.logic, this.particles.setup(t), this.targets.shape = n, this
                    }
                }, {
                    key: "clear",
                    value: function() {
                        return this.clearView(), this.clearFlow(), this
                    }
                }, {
                    key: "clearView",
                    value: function() {
                        var e = this;
                        return this.buffers.forEach(function(t) {
                            t.bind(), e.gl.clear(e.gl.COLOR_BUFFER_BIT)
                        }), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this
                    }
                }, {
                    key: "clearFlow",
                    value: function() {
                        return this.flow.bind(), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this
                    }
                }, {
                    key: "restart",
                    value: function() {
                        return this.clear(), this.reset(), this
                    }
                }, {
                    key: "step",
                    value: function() {
                        return this.timer.paused || (this.particles.logic = this.logicShader, this.gl.disable(this.gl.BLEND), Object.assign(this.uniforms.update, this.state, {
                            dt: this.timer.dt,
                            time: this.timer.time,
                            start: this.timer.since,
                            flow: this.flow.color[0].bind(1),
                            targets: this.targets.color[0].bind(2),
                            viewSize: this.viewSize,
                            viewRes: this.viewRes
                        }), this.particles.step(this.uniforms.update), this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)), this
                    }
                }, {
                    key: "draw",
                    value: function() {
                        return this.viewport(), Object.assign(this.uniforms.render, this.state, {
                            time: this.timer.time,
                            previous: this.particles.buffers[1].color[0].bind(1),
                            viewSize: this.viewSize,
                            viewRes: this.viewRes,
                            colorMap: (this.colorMap.color && this.colorMap.color[0] ? this.colorMap.color[0] : this.colorMap).bind(2),
                            colorMapRes: this.colorMap.shape
                        }), this.particles.render = this.flowShader, this.flow.bind(), this.gl.lineWidth(Math.max(0, this.state.flowWidth)), this.particles.draw(this.uniforms.render, this.gl.LINES), 0 === this.buffers.length ? this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null) : this.buffers[0].bind(), this.state.autoClearView && this.clearView(), this.state.autoFade && this.drawFade(), this.particles.render = this.renderShader, this.gl.lineWidth(Math.max(0, this.state.lineWidth)), this.particles.draw(this.uniforms.render, this.gl.LINES), this
                    }
                }, {
                    key: "drawFade",
                    value: function() {
                        return this.state.fadeColor[3] > 0 && this.drawFill(this.state.fadeColor), this
                    }
                }, {
                    key: "drawFill",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.fadeColor;
                        return this.fillShader.bind(), this.fillShader.uniforms.color = e, this.screen.render(), this
                    }
                }, {
                    key: "drawBuffer",
                    value: function(e) {
                        return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.state.autoClearView && this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.copyBuffer(e).stepBuffers()
                    }
                }, {
                    key: "copyBuffer",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return e < this.buffers.length && (this.copyShader.bind(), Object.assign(this.copyShader.uniforms, {
                            view: this.buffers[e].color[0].bind(0),
                            viewRes: this.viewRes
                        }), this.screen.render()), this
                    }
                }, {
                    key: "stepBuffers",
                    value: function() {
                        return this.buffers.length > 1 && (0, m.step)(this.buffers), this
                    }
                }, {
                    key: "resize",
                    value: function() {
                        var e = this;
                        return this.viewRes[0] = this.gl.drawingBufferWidth, this.viewRes[1] = this.gl.drawingBufferHeight, (0, b.coverAspect)(this.viewSize, this.viewRes), this.buffers.forEach(function(t) {
                            return t.shape = e.viewRes
                        }), this.flow.shape = this.viewRes, this
                    }
                }, {
                    key: "viewport",
                    value: function() {
                        return this.gl.viewport(0, 0, this.viewRes[0], this.viewRes[1]), this
                    }
                }, {
                    key: "spawn",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.default;
                        return this.particles.spawn(e), this
                    }
                }, {
                    key: "spawnShader",
                    value: function(e, t) {
                        var n;
                        this.timer.tick(), this.particles.logic = e, this.gl.disable(this.gl.BLEND);
                        for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) i[a - 2] = arguments[a];
                        return (n = this.particles).step.apply(n, [h.default.applyUpdate(o({}, this.state, {
                            time: this.timer.time,
                            viewSize: this.viewSize,
                            viewRes: this.viewRes
                        }), t)].concat(i)), this.particles.logic = this.logicShader, this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this
                    }
                }]), e
            }());
        t.default = U
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.getParameter(e.FRAMEBUFFER_BINDING),
                n = e.getParameter(e.RENDERBUFFER_BINDING),
                r = e.getParameter(e.TEXTURE_BINDING_2D);
            return [t, n, r]
        }

        function i(e, t) {
            e.bindFramebuffer(e.FRAMEBUFFER, t[0]), e.bindRenderbuffer(e.RENDERBUFFER, t[1]), e.bindTexture(e.TEXTURE_2D, t[2])
        }

        function a(e, t) {
            var n = e.getParameter(t.MAX_COLOR_ATTACHMENTS_WEBGL);
            y = new Array(n + 1);
            for (var r = 0; r <= n; ++r) {
                for (var i = new Array(n), a = 0; a < r; ++a) i[a] = e.COLOR_ATTACHMENT0 + a;
                for (var a = r; a < n; ++a) i[a] = e.NONE;
                y[r] = i
            }
        }

        function o(e) {
            switch (e) {
                case p:
                    throw new Error("gl-fbo: Framebuffer unsupported");
                case v:
                    throw new Error("gl-fbo: Framebuffer incomplete attachment");
                case m:
                    throw new Error("gl-fbo: Framebuffer incomplete dimensions");
                case g:
                    throw new Error("gl-fbo: Framebuffer incomplete missing attachment");
                default:
                    throw new Error("gl-fbo: Framebuffer failed for unspecified reason")
            }
        }

        function s(e, t, n, r, i, a) {
            if (!r) return null;
            var o = h(e, t, n, i, r);
            return o.magFilter = e.NEAREST, o.minFilter = e.NEAREST, o.mipSamples = 1, o.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, a, e.TEXTURE_2D, o.handle, 0), o
        }

        function u(e, t, n, r, i) {
            var a = e.createRenderbuffer();
            return e.bindRenderbuffer(e.RENDERBUFFER, a), e.renderbufferStorage(e.RENDERBUFFER, r, t, n), e.framebufferRenderbuffer(e.FRAMEBUFFER, i, e.RENDERBUFFER, a), a
        }

        function c(e) {
            var t = r(e.gl),
                n = e.gl,
                a = e.handle = n.createFramebuffer(),
                c = e._shape[0],
                l = e._shape[1],
                f = e.color.length,
                d = e._ext,
                h = e._useStencil,
                p = e._useDepth,
                v = e._colorType;
            n.bindFramebuffer(n.FRAMEBUFFER, a);
            for (var m = 0; m < f; ++m) e.color[m] = s(n, c, l, v, n.RGBA, n.COLOR_ATTACHMENT0 + m);
            0 === f ? (e._color_rb = u(n, c, l, n.RGBA4, n.COLOR_ATTACHMENT0), d && d.drawBuffersWEBGL(y[0])) : f > 1 && d.drawBuffersWEBGL(y[f]);
            var g = n.getExtension("WEBGL_depth_texture");
            g ? h ? e.depth = s(n, c, l, g.UNSIGNED_INT_24_8_WEBGL, n.DEPTH_STENCIL, n.DEPTH_STENCIL_ATTACHMENT) : p && (e.depth = s(n, c, l, n.UNSIGNED_SHORT, n.DEPTH_COMPONENT, n.DEPTH_ATTACHMENT)) : p && h ? e._depth_rb = u(n, c, l, n.DEPTH_STENCIL, n.DEPTH_STENCIL_ATTACHMENT) : p ? e._depth_rb = u(n, c, l, n.DEPTH_COMPONENT16, n.DEPTH_ATTACHMENT) : h && (e._depth_rb = u(n, c, l, n.STENCIL_INDEX, n.STENCIL_ATTACHMENT));
            var b = n.checkFramebufferStatus(n.FRAMEBUFFER);
            if (b !== n.FRAMEBUFFER_COMPLETE) {
                e._destroyed = !0, n.bindFramebuffer(n.FRAMEBUFFER, null), n.deleteFramebuffer(e.handle), e.handle = null, e.depth && (e.depth.dispose(), e.depth = null), e._depth_rb && (n.deleteRenderbuffer(e._depth_rb), e._depth_rb = null);
                for (var m = 0; m < e.color.length; ++m) e.color[m].dispose(), e.color[m] = null;
                e._color_rb && (n.deleteRenderbuffer(e._color_rb), e._color_rb = null), i(n, t), o(b)
            }
            i(n, t)
        }

        function l(e, t, n, r, i, a, o, s) {
            this.gl = e, this._shape = [0 | t, 0 | n], this._destroyed = !1, this._ext = s, this.color = new Array(i);
            for (var u = 0; u < i; ++u) this.color[u] = null;
            this._color_rb = null, this.depth = null, this._depth_rb = null, this._colorType = r, this._useDepth = a, this._useStencil = o;
            var l = this,
                f = [0 | t, 0 | n];
            Object.defineProperties(f, {
                0: {
                    get: function() {
                        return l._shape[0]
                    },
                    set: function(e) {
                        return l.width = e
                    }
                },
                1: {
                    get: function() {
                        return l._shape[1]
                    },
                    set: function(e) {
                        return l.height = e
                    }
                }
            }), this._shapeVector = f, c(this)
        }

        function f(e, t, n) {
            if (e._destroyed) throw new Error("gl-fbo: Can't resize destroyed FBO");
            if (e._shape[0] !== t || e._shape[1] !== n) {
                var a = e.gl,
                    s = a.getParameter(a.MAX_RENDERBUFFER_SIZE);
                if (t < 0 || t > s || n < 0 || n > s) throw new Error("gl-fbo: Can't resize FBO, invalid dimensions");
                e._shape[0] = t, e._shape[1] = n;
                for (var u = r(a), c = 0; c < e.color.length; ++c) e.color[c].shape = e._shape;
                e._color_rb && (a.bindRenderbuffer(a.RENDERBUFFER, e._color_rb), a.renderbufferStorage(a.RENDERBUFFER, a.RGBA4, e._shape[0], e._shape[1])), e.depth && (e.depth.shape = e._shape), e._depth_rb && (a.bindRenderbuffer(a.RENDERBUFFER, e._depth_rb), e._useDepth && e._useStencil ? a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, e._shape[0], e._shape[1]) : e._useDepth ? a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, e._shape[0], e._shape[1]) : e._useStencil && a.renderbufferStorage(a.RENDERBUFFER, a.STENCIL_INDEX, e._shape[0], e._shape[1])), a.bindFramebuffer(a.FRAMEBUFFER, e.handle);
                var l = a.checkFramebufferStatus(a.FRAMEBUFFER);
                l !== a.FRAMEBUFFER_COMPLETE && (e.dispose(), i(a, u), o(l)), i(a, u)
            }
        }

        function d(e, t, n, r) {
            p || (p = e.FRAMEBUFFER_UNSUPPORTED, v = e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT, m = e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS, g = e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT);
            var i = e.getExtension("WEBGL_draw_buffers");
            if (!y && i && a(e, i), Array.isArray(t) && (r = n, n = 0 | t[1], t = 0 | t[0]), "number" != typeof t) throw new Error("gl-fbo: Missing shape parameter");
            var o = e.getParameter(e.MAX_RENDERBUFFER_SIZE);
            if (t < 0 || t > o || n < 0 || n > o) throw new Error("gl-fbo: Parameters are too large for FBO");
            r = r || {};
            var s = 1;
            if ("color" in r) {
                if (s = Math.max(0 | r.color, 0), s < 0) throw new Error("gl-fbo: Must specify a nonnegative number of colors");
                if (s > 1) {
                    if (!i) throw new Error("gl-fbo: Multiple draw buffer extension not supported");
                    if (s > e.getParameter(i.MAX_COLOR_ATTACHMENTS_WEBGL)) throw new Error("gl-fbo: Context does not support " + s + " draw buffers")
                }
            }
            var u = e.UNSIGNED_BYTE,
                c = e.getExtension("OES_texture_float");
            if (r.float && s > 0) {
                if (!c) throw new Error("gl-fbo: Context does not support floating point textures");
                u = e.FLOAT
            } else r.preferFloat && s > 0 && c && (u = e.FLOAT);
            var f = !0;
            "depth" in r && (f = !!r.depth);
            var d = !1;
            return "stencil" in r && (d = !!r.stencil), new l(e, t, n, u, s, f, d, i)
        }
        var h = n(88);
        e.exports = d;
        var p, v, m, g, y = null,
            b = l.prototype;
        Object.defineProperties(b, {
            shape: {
                get: function() {
                    return this._destroyed ? [0, 0] : this._shapeVector
                },
                set: function(e) {
                    if (Array.isArray(e) || (e = [0 | e, 0 | e]), 2 !== e.length) throw new Error("gl-fbo: Shape vector must be length 2");
                    var t = 0 | e[0],
                        n = 0 | e[1];
                    return f(this, t, n), [t, n]
                },
                enumerable: !1
            },
            width: {
                get: function() {
                    return this._destroyed ? 0 : this._shape[0]
                },
                set: function(e) {
                    return e |= 0, f(this, e, this._shape[1]), e
                },
                enumerable: !1
            },
            height: {
                get: function() {
                    return this._destroyed ? 0 : this._shape[1]
                },
                set: function(e) {
                    return e |= 0, f(this, this._shape[0], e), e
                },
                enumerable: !1
            }
        }), b.bind = function() {
            if (!this._destroyed) {
                var e = this.gl;
                e.bindFramebuffer(e.FRAMEBUFFER, this.handle), e.viewport(0, 0, this._shape[0], this._shape[1])
            }
        }, b.dispose = function() {
            if (!this._destroyed) {
                this._destroyed = !0;
                var e = this.gl;
                e.deleteFramebuffer(this.handle), this.handle = null, this.depth && (this.depth.dispose(), this.depth = null), this._depth_rb && (e.deleteRenderbuffer(this._depth_rb), this._depth_rb = null);
                for (var t = 0; t < this.color.length; ++t) this.color[t].dispose(), this.color[t] = null;
                this._color_rb && (e.deleteRenderbuffer(this._color_rb), this._color_rb = null)
            }
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            g = [e.LINEAR, e.NEAREST_MIPMAP_LINEAR, e.LINEAR_MIPMAP_NEAREST, e.LINEAR_MIPMAP_NEAREST], y = [e.NEAREST, e.LINEAR, e.NEAREST_MIPMAP_NEAREST, e.NEAREST_MIPMAP_LINEAR, e.LINEAR_MIPMAP_NEAREST, e.LINEAR_MIPMAP_LINEAR], b = [e.REPEAT, e.CLAMP_TO_EDGE, e.MIRRORED_REPEAT]
        }

        function i(e) {
            return "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLVideoElement && e instanceof HTMLVideoElement || "undefined" != typeof ImageData && e instanceof ImageData
        }

        function a(e, t, n) {
            var r = e.gl,
                i = r.getParameter(r.MAX_TEXTURE_SIZE);
            if (t < 0 || t > i || n < 0 || n > i) throw new Error("gl-texture2d: Invalid texture size");
            return e._shape = [t, n], e.bind(), r.texImage2D(r.TEXTURE_2D, 0, e.format, t, n, 0, e.format, e.type, null), e._mipLevels = [0], e
        }

        function o(e, t, n, r, i, a) {
            this.gl = e, this.handle = t, this.format = i, this.type = a, this._shape = [n, r], this._mipLevels = [0], this._magFilter = e.NEAREST, this._minFilter = e.NEAREST, this._wrapS = e.CLAMP_TO_EDGE, this._wrapT = e.CLAMP_TO_EDGE, this._anisoSamples = 1;
            var o = this,
                s = [this._wrapS, this._wrapT];
            Object.defineProperties(s, [{
                get: function() {
                    return o._wrapS
                },
                set: function(e) {
                    return o.wrapS = e
                }
            }, {
                get: function() {
                    return o._wrapT
                },
                set: function(e) {
                    return o.wrapT = e
                }
            }]), this._wrapVector = s;
            var u = [this._shape[0], this._shape[1]];
            Object.defineProperties(u, [{
                get: function() {
                    return o._shape[0]
                },
                set: function(e) {
                    return o.width = e
                }
            }, {
                get: function() {
                    return o._shape[1]
                },
                set: function(e) {
                    return o.height = e
                }
            }]), this._shapeVector = u
        }

        function s(e, t) {
            return 3 === e.length ? 1 === t[2] && t[1] === e[0] * e[2] && t[0] === e[2] : 1 === t[0] && t[1] === e[0]
        }

        function u(e, t, n, r, i, a, o, u) {
            var c = u.dtype,
                l = u.shape.slice();
            if (l.length < 2 || l.length > 3) throw new Error("gl-texture2d: Invalid ndarray, must be 2d or 3d");
            var f = 0,
                d = 0,
                h = s(l, u.stride.slice());
            "float32" === c ? f = e.FLOAT : "float64" === c ? (f = e.FLOAT, h = !1, c = "float32") : "uint8" === c ? f = e.UNSIGNED_BYTE : (f = e.UNSIGNED_BYTE, h = !1, c = "uint8");
            var g = 1;
            if (2 === l.length) d = e.LUMINANCE, l = [l[0], l[1], 1], u = p(u.data, l, [u.stride[0], u.stride[1], 1], u.offset);
            else {
                if (3 !== l.length) throw new Error("gl-texture2d: Invalid shape for texture");
                if (1 === l[2]) d = e.ALPHA;
                else if (2 === l[2]) d = e.LUMINANCE_ALPHA;
                else if (3 === l[2]) d = e.RGB;
                else {
                    if (4 !== l[2]) throw new Error("gl-texture2d: Invalid shape for pixel coords");
                    d = e.RGBA
                }
                g = l[2]
            }
            if (d !== e.LUMINANCE && d !== e.ALPHA || i !== e.LUMINANCE && i !== e.ALPHA || (d = i), d !== i) throw new Error("gl-texture2d: Incompatible texture format for setPixels");
            var y = u.size,
                b = o.indexOf(r) < 0;
            if (b && o.push(r), f === a && h) 0 === u.offset && u.data.length === y ? b ? e.texImage2D(e.TEXTURE_2D, r, i, l[0], l[1], 0, i, a, u.data) : e.texSubImage2D(e.TEXTURE_2D, r, t, n, l[0], l[1], i, a, u.data) : b ? e.texImage2D(e.TEXTURE_2D, r, i, l[0], l[1], 0, i, a, u.data.subarray(u.offset, u.offset + y)) : e.texSubImage2D(e.TEXTURE_2D, r, t, n, l[0], l[1], i, a, u.data.subarray(u.offset, u.offset + y));
            else {
                var w;
                w = a === e.FLOAT ? m.mallocFloat32(y) : m.mallocUint8(y);
                var E = p(w, l, [l[2], l[2] * l[0], 1]);
                f === e.FLOAT && a === e.UNSIGNED_BYTE ? _(E, u) : v.assign(E, u), b ? e.texImage2D(e.TEXTURE_2D, r, i, l[0], l[1], 0, i, a, w.subarray(0, y)) : e.texSubImage2D(e.TEXTURE_2D, r, t, n, l[0], l[1], i, a, w.subarray(0, y)), a === e.FLOAT ? m.freeFloat32(w) : m.freeUint8(w)
            }
        }

        function c(e) {
            var t = e.createTexture();
            return e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), t
        }

        function l(e, t, n, r, i) {
            var a = e.getParameter(e.MAX_TEXTURE_SIZE);
            if (t < 0 || t > a || n < 0 || n > a) throw new Error("gl-texture2d: Invalid texture shape");
            if (i === e.FLOAT && !e.getExtension("OES_texture_float")) throw new Error("gl-texture2d: Floating point textures not supported on this platform");
            var s = c(e);
            return e.texImage2D(e.TEXTURE_2D, 0, r, t, n, 0, r, i, null), new o(e, s, t, n, r, i)
        }

        function f(e, t, n, r, i, a) {
            var s = c(e);
            return e.texImage2D(e.TEXTURE_2D, 0, i, i, a, t), new o(e, s, n, r, i, a)
        }

        function d(e, t) {
            var n = t.dtype,
                r = t.shape.slice(),
                i = e.getParameter(e.MAX_TEXTURE_SIZE);
            if (r[0] < 0 || r[0] > i || r[1] < 0 || r[1] > i) throw new Error("gl-texture2d: Invalid texture size");
            var a = s(r, t.stride.slice()),
                u = 0;
            "float32" === n ? u = e.FLOAT : "float64" === n ? (u = e.FLOAT, a = !1, n = "float32") : "uint8" === n ? u = e.UNSIGNED_BYTE : (u = e.UNSIGNED_BYTE, a = !1, n = "uint8");
            var l = 0;
            if (2 === r.length) l = e.LUMINANCE, r = [r[0], r[1], 1], t = p(t.data, r, [t.stride[0], t.stride[1], 1], t.offset);
            else {
                if (3 !== r.length) throw new Error("gl-texture2d: Invalid shape for texture");
                if (1 === r[2]) l = e.ALPHA;
                else if (2 === r[2]) l = e.LUMINANCE_ALPHA;
                else if (3 === r[2]) l = e.RGB;
                else {
                    if (4 !== r[2]) throw new Error("gl-texture2d: Invalid shape for pixel coords");
                    l = e.RGBA
                }
            }
            u !== e.FLOAT || e.getExtension("OES_texture_float") || (u = e.UNSIGNED_BYTE, a = !1);
            var f, d, h = t.size;
            if (a) f = 0 === t.offset && t.data.length === h ? t.data : t.data.subarray(t.offset, t.offset + h);
            else {
                var g = [r[2], r[2] * r[0], 1];
                d = m.malloc(h, n);
                var y = p(d, r, g, 0);
                "float32" !== n && "float64" !== n || u !== e.UNSIGNED_BYTE ? v.assign(y, t) : _(y, t), f = d.subarray(0, h)
            }
            var b = c(e);
            return e.texImage2D(e.TEXTURE_2D, 0, l, r[0], r[1], 0, l, u, f), a || m.free(d), new o(e, b, r[0], r[1], l, u)
        }

        function h(e) {
            if (arguments.length <= 1) throw new Error("gl-texture2d: Missing arguments for texture2d constructor");
            if (g || r(e), "number" == typeof arguments[1]) return l(e, arguments[1], arguments[2], arguments[3] || e.RGBA, arguments[4] || e.UNSIGNED_BYTE);
            if (Array.isArray(arguments[1])) return l(e, 0 | arguments[1][0], 0 | arguments[1][1], arguments[2] || e.RGBA, arguments[3] || e.UNSIGNED_BYTE);
            if ("object" == typeof arguments[1]) {
                var t = arguments[1],
                    n = i(t) ? t : t.raw;
                if (n) return f(e, n, 0 | t.width, 0 | t.height, arguments[2] || e.RGBA, arguments[3] || e.UNSIGNED_BYTE);
                if (t.shape && t.data && t.stride) return d(e, t)
            }
            throw new Error("gl-texture2d: Invalid arguments for texture2d constructor")
        }
        var p = n(89),
            v = n(92),
            m = n(97);
        e.exports = h;
        var g = null,
            y = null,
            b = null,
            _ = function(e, t) {
                v.muls(e, t, 255)
            },
            w = o.prototype;
        Object.defineProperties(w, {
            minFilter: {
                get: function() {
                    return this._minFilter
                },
                set: function(e) {
                    this.bind();
                    var t = this.gl;
                    if (this.type === t.FLOAT && g.indexOf(e) >= 0 && (t.getExtension("OES_texture_float_linear") || (e = t.NEAREST)), y.indexOf(e) < 0) throw new Error("gl-texture2d: Unknown filter mode " + e);
                    return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, e), this._minFilter = e
                }
            },
            magFilter: {
                get: function() {
                    return this._magFilter
                },
                set: function(e) {
                    this.bind();
                    var t = this.gl;
                    if (this.type === t.FLOAT && g.indexOf(e) >= 0 && (t.getExtension("OES_texture_float_linear") || (e = t.NEAREST)), y.indexOf(e) < 0) throw new Error("gl-texture2d: Unknown filter mode " + e);
                    return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, e), this._magFilter = e
                }
            },
            mipSamples: {
                get: function() {
                    return this._anisoSamples
                },
                set: function(e) {
                    var t = this._anisoSamples;
                    if (this._anisoSamples = 0 | Math.max(e, 1), t !== this._anisoSamples) {
                        var n = this.gl.getExtension("EXT_texture_filter_anisotropic");
                        n && this.gl.texParameterf(this.gl.TEXTURE_2D, n.TEXTURE_MAX_ANISOTROPY_EXT, this._anisoSamples)
                    }
                    return this._anisoSamples
                }
            },
            wrapS: {
                get: function() {
                    return this._wrapS
                },
                set: function(e) {
                    if (this.bind(), b.indexOf(e) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + e);
                    return this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, e), this._wrapS = e
                }
            },
            wrapT: {
                get: function() {
                    return this._wrapT
                },
                set: function(e) {
                    if (this.bind(), b.indexOf(e) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + e);
                    return this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, e), this._wrapT = e
                }
            },
            wrap: {
                get: function() {
                    return this._wrapVector
                },
                set: function(e) {
                    if (Array.isArray(e) || (e = [e, e]), 2 !== e.length) throw new Error("gl-texture2d: Must specify wrap mode for rows and columns");
                    for (var t = 0; t < 2; ++t)
                        if (b.indexOf(e[t]) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + e);
                    this._wrapS = e[0], this._wrapT = e[1];
                    var n = this.gl;
                    return this.bind(), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, this._wrapS), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, this._wrapT), e
                }
            },
            shape: {
                get: function() {
                    return this._shapeVector
                },
                set: function(e) {
                    if (Array.isArray(e)) {
                        if (2 !== e.length) throw new Error("gl-texture2d: Invalid texture shape")
                    } else e = [0 | e, 0 | e];
                    return a(this, 0 | e[0], 0 | e[1]), [0 | e[0], 0 | e[1]]
                }
            },
            width: {
                get: function() {
                    return this._shape[0]
                },
                set: function(e) {
                    return e |= 0, a(this, e, this._shape[1]), e
                }
            },
            height: {
                get: function() {
                    return this._shape[1]
                },
                set: function(e) {
                    return e |= 0, a(this, this._shape[0], e), e
                }
            }
        }), w.bind = function(e) {
            var t = this.gl;
            return void 0 !== e && t.activeTexture(t.TEXTURE0 + (0 | e)), t.bindTexture(t.TEXTURE_2D, this.handle), void 0 !== e ? 0 | e : t.getParameter(t.ACTIVE_TEXTURE) - t.TEXTURE0
        }, w.dispose = function() {
            this.gl.deleteTexture(this.handle)
        }, w.generateMipmap = function() {
            this.bind(), this.gl.generateMipmap(this.gl.TEXTURE_2D);
            for (var e = Math.min(this._shape[0], this._shape[1]), t = 0; e > 0; ++t, e >>>= 1) this._mipLevels.indexOf(t) < 0 && this._mipLevels.push(t)
        }, w.setPixels = function(e, t, n, r) {
            var a = this.gl;
            this.bind(), Array.isArray(t) ? (r = n, n = 0 | t[1], t = 0 | t[0]) : (t = t || 0, n = n || 0), r = r || 0;
            var o = i(e) ? e : e.raw;
            if (o) {
                var s = this._mipLevels.indexOf(r) < 0;
                s ? (a.texImage2D(a.TEXTURE_2D, 0, this.format, this.format, this.type, o), this._mipLevels.push(r)) : a.texSubImage2D(a.TEXTURE_2D, r, t, n, this.format, this.type, o)
            } else {
                if (!(e.shape && e.stride && e.data)) throw new Error("gl-texture2d: Unsupported data type");
                if (e.shape.length < 2 || t + e.shape[1] > this._shape[1] >>> r || n + e.shape[0] > this._shape[0] >>> r || t < 0 || n < 0) throw new Error("gl-texture2d: Texture dimensions are out of bounds");
                u(a, t, n, r, this.format, this.type, this._mipLevels, e)
            }
        }
    }, function(e, t, n) {
        function r(e, t) {
            return e[0] - t[0]
        }

        function i() {
            var e, t = this.stride,
                n = new Array(t.length);
            for (e = 0; e < n.length; ++e) n[e] = [Math.abs(t[e]), e];
            n.sort(r);
            var i = new Array(n.length);
            for (e = 0; e < i.length; ++e) i[e] = n[e][1];
            return i
        }

        function a(e, t) {
            var n = ["View", t, "d", e].join("");
            t < 0 && (n = "View_Nil" + e);
            var r = "generic" === e;
            if (t === -1) {
                var a = "function " + n + "(a){this.data=a;};\tvar proto=" + n + ".prototype;\tproto.dtype='" + e + "';\tproto.index=function(){return -1};\tproto.size=0;\tproto.dimension=-1;\tproto.shape=proto.stride=proto.order=[];\tproto.lo=proto.hi=proto.transpose=proto.step=\tfunction(){return new " + n + "(this.data);};\tproto.get=proto.set=function(){};\tproto.pick=function(){return null};\treturn function construct_" + n + "(a){return new " + n + "(a);}",
                    o = new Function(a);
                return o()
            }
            if (0 === t) {
                var a = "function " + n + "(a,d) {\tthis.data = a;\tthis.offset = d\t};\tvar proto=" + n + ".prototype;\tproto.dtype='" + e + "';\tproto.index=function(){return this.offset};\tproto.dimension=0;\tproto.size=1;\tproto.shape=\tproto.stride=\tproto.order=[];\tproto.lo=\tproto.hi=\tproto.transpose=\tproto.step=function " + n + "_copy() {\treturn new " + n + "(this.data,this.offset)\t};\tproto.pick=function " + n + "_pick(){\treturn TrivialArray(this.data);\t};\tproto.valueOf=proto.get=function " + n + "_get(){\treturn " + (r ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};\tproto.set=function " + n + "_set(v){\treturn " + (r ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "\t};\treturn function construct_" + n + "(a,b,c,d){return new " + n + "(a,d)}",
                    o = new Function("TrivialArray", a);
                return o(f[e][0])
            }
            var a = ["'use strict'"],
                s = u(t),
                c = s.map(function(e) {
                    return "i" + e
                }),
                l = "this.offset+" + s.map(function(e) {
                    return "this.stride[" + e + "]*i" + e
                }).join("+"),
                d = s.map(function(e) {
                    return "b" + e
                }).join(","),
                h = s.map(function(e) {
                    return "c" + e
                }).join(",");
            a.push("function " + n + "(a," + d + "," + h + ",d){this.data=a", "this.shape=[" + d + "]", "this.stride=[" + h + "]", "this.offset=d|0}", "var proto=" + n + ".prototype", "proto.dtype='" + e + "'", "proto.dimension=" + t), a.push("Object.defineProperty(proto,'size',{get:function " + n + "_size(){\treturn " + s.map(function(e) {
                return "this.shape[" + e + "]"
            }).join("*"), "}})"), 1 === t ? a.push("proto.order=[0]") : (a.push("Object.defineProperty(proto,'order',{get:"), t < 4 ? (a.push("function " + n + "_order(){"), 2 === t ? a.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === t && a.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\tif(s0>s1){\tif(s1>s2){\treturn [2,1,0];\t}else if(s0>s2){\treturn [1,2,0];\t}else{\treturn [1,0,2];\t}\t}else if(s0>s2){\treturn [2,0,1];\t}else if(s2>s1){\treturn [0,1,2];\t}else{\treturn [0,2,1];\t}}})")) : a.push("ORDER})")), a.push("proto.set=function " + n + "_set(" + c.join(",") + ",v){"), r ? a.push("return this.data.set(" + l + ",v)}") : a.push("return this.data[" + l + "]=v}"), a.push("proto.get=function " + n + "_get(" + c.join(",") + "){"), r ? a.push("return this.data.get(" + l + ")}") : a.push("return this.data[" + l + "]}"), a.push("proto.index=function " + n + "_index(", c.join(), "){return " + l + "}"), a.push("proto.hi=function " + n + "_hi(" + c.join(",") + "){return new " + n + "(this.data," + s.map(function(e) {
                return ["(typeof i", e, "!=='number'||i", e, "<0)?this.shape[", e, "]:i", e, "|0"].join("")
            }).join(",") + "," + s.map(function(e) {
                return "this.stride[" + e + "]"
            }).join(",") + ",this.offset)}");
            var p = s.map(function(e) {
                    return "a" + e + "=this.shape[" + e + "]"
                }),
                v = s.map(function(e) {
                    return "c" + e + "=this.stride[" + e + "]"
                });
            a.push("proto.lo=function " + n + "_lo(" + c.join(",") + "){var b=this.offset,d=0," + p.join(",") + "," + v.join(","));
            for (var m = 0; m < t; ++m) a.push("if(typeof i" + m + "==='number'&&i" + m + ">=0){\td=i" + m + "|0;\tb+=c" + m + "*d;\ta" + m + "-=d}");
            a.push("return new " + n + "(this.data," + s.map(function(e) {
                return "a" + e
            }).join(",") + "," + s.map(function(e) {
                return "c" + e
            }).join(",") + ",b)}"), a.push("proto.step=function " + n + "_step(" + c.join(",") + "){var " + s.map(function(e) {
                return "a" + e + "=this.shape[" + e + "]"
            }).join(",") + "," + s.map(function(e) {
                return "b" + e + "=this.stride[" + e + "]"
            }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
            for (var m = 0; m < t; ++m) a.push("if(typeof i" + m + "==='number'){\td=i" + m + "|0;\tif(d<0){\tc+=b" + m + "*(a" + m + "-1);\ta" + m + "=ceil(-a" + m + "/d)\t}else{\ta" + m + "=ceil(a" + m + "/d)\t}\tb" + m + "*=d\t}");
            a.push("return new " + n + "(this.data," + s.map(function(e) {
                return "a" + e
            }).join(",") + "," + s.map(function(e) {
                return "b" + e
            }).join(",") + ",c)}");
            for (var g = new Array(t), y = new Array(t), m = 0; m < t; ++m) g[m] = "a[i" + m + "]", y[m] = "b[i" + m + "]";
            a.push("proto.transpose=function " + n + "_transpose(" + c + "){" + c.map(function(e, t) {
                return e + "=(" + e + "===undefined?" + t + ":" + e + "|0)"
            }).join(";"), "var a=this.shape,b=this.stride;return new " + n + "(this.data," + g.join(",") + "," + y.join(",") + ",this.offset)}"), a.push("proto.pick=function " + n + "_pick(" + c + "){var a=[],b=[],c=this.offset");
            for (var m = 0; m < t; ++m) a.push("if(typeof i" + m + "==='number'&&i" + m + ">=0){c=(c+this.stride[" + m + "]*i" + m + ")|0}else{a.push(this.shape[" + m + "]);b.push(this.stride[" + m + "])}");
            a.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), a.push("return function construct_" + n + "(data,shape,stride,offset){return new " + n + "(data," + s.map(function(e) {
                return "shape[" + e + "]"
            }).join(",") + "," + s.map(function(e) {
                return "stride[" + e + "]"
            }).join(",") + ",offset)}");
            var o = new Function("CTOR_LIST", "ORDER", a.join("\n"));
            return o(f[e], i)
        }

        function o(e) {
            if (c(e)) return "buffer";
            if (l) switch (Object.prototype.toString.call(e)) {
                case "[object Float64Array]":
                    return "float64";
                case "[object Float32Array]":
                    return "float32";
                case "[object Int8Array]":
                    return "int8";
                case "[object Int16Array]":
                    return "int16";
                case "[object Int32Array]":
                    return "int32";
                case "[object Uint8Array]":
                    return "uint8";
                case "[object Uint16Array]":
                    return "uint16";
                case "[object Uint32Array]":
                    return "uint32";
                case "[object Uint8ClampedArray]":
                    return "uint8_clamped"
            }
            return Array.isArray(e) ? "array" : "generic"
        }

        function s(e, t, n, r) {
            if (void 0 === e) {
                var i = f.array[0];
                return i([])
            }
            "number" == typeof e && (e = [e]), void 0 === t && (t = [e.length]);
            var s = t.length;
            if (void 0 === n) {
                n = new Array(s);
                for (var u = s - 1, c = 1; u >= 0; --u) n[u] = c, c *= t[u]
            }
            if (void 0 === r) {
                r = 0;
                for (var u = 0; u < s; ++u) n[u] < 0 && (r -= (t[u] - 1) * n[u])
            }
            for (var l = o(e), d = f[l]; d.length <= s + 1;) d.push(a(l, d.length - 1));
            var i = d[s + 1];
            return i(e, t, n, r)
        }
        var u = n(90),
            c = n(91),
            l = "undefined" != typeof Float64Array,
            f = {
                float32: [],
                float64: [],
                int8: [],
                int16: [],
                int32: [],
                uint8: [],
                uint16: [],
                uint32: [],
                array: [],
                uint8_clamped: [],
                buffer: [],
                generic: []
            };
        e.exports = s
    }, function(e, t) {
        "use strict";

        function n(e) {
            for (var t = new Array(e), n = 0; n < e; ++n) t[n] = n;
            return t
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        function r(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function(e) {
            return null != e && (n(e) || r(e) || !!e._isBuffer)
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (!e) return s;
            for (var t = 0; t < e.args.length; ++t) {
                var n = e.args[t];
                0 === t ? e.args[t] = {
                    name: n,
                    lvalue: !0,
                    rvalue: !!e.rvalue,
                    count: e.count || 1
                } : e.args[t] = {
                    name: n,
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }
            }
            return e.thisVars || (e.thisVars = []), e.localVars || (e.localVars = []), e
        }

        function i(e) {
            return o({
                args: e.args,
                pre: r(e.pre),
                body: r(e.body),
                post: r(e.proc),
                funcName: e.funcName
            })
        }

        function a(e) {
            for (var t = [], n = 0; n < e.args.length; ++n) t.push("a" + n);
            var r = new Function("P", ["return function ", e.funcName, "_ndarrayops(", t.join(","), ") {P(", t.join(","), ");return a0}"].join(""));
            return r(i(e))
        }
        var o = n(93),
            s = {
                body: "",
                args: [],
                thisVars: [],
                localVars: []
            },
            u = {
                add: "+",
                sub: "-",
                mul: "*",
                div: "/",
                mod: "%",
                band: "&",
                bor: "|",
                bxor: "^",
                lshift: "<<",
                rshift: ">>",
                rrshift: ">>>"
            };
        ! function() {
            for (var e in u) {
                var n = u[e];
                t[e] = a({
                    args: ["array", "array", "array"],
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=b" + n + "c"
                    },
                    funcName: e
                }), t[e + "eq"] = a({
                    args: ["array", "array"],
                    body: {
                        args: ["a", "b"],
                        body: "a" + n + "=b"
                    },
                    rvalue: !0,
                    funcName: e + "eq"
                }), t[e + "s"] = a({
                    args: ["array", "array", "scalar"],
                    body: {
                        args: ["a", "b", "s"],
                        body: "a=b" + n + "s"
                    },
                    funcName: e + "s"
                }), t[e + "seq"] = a({
                    args: ["array", "scalar"],
                    body: {
                        args: ["a", "s"],
                        body: "a" + n + "=s"
                    },
                    rvalue: !0,
                    funcName: e + "seq"
                })
            }
        }();
        var c = {
            not: "!",
            bnot: "~",
            neg: "-",
            recip: "1.0/"
        };
        ! function() {
            for (var e in c) {
                var n = c[e];
                t[e] = a({
                    args: ["array", "array"],
                    body: {
                        args: ["a", "b"],
                        body: "a=" + n + "b"
                    },
                    funcName: e
                }), t[e + "eq"] = a({
                    args: ["array"],
                    body: {
                        args: ["a"],
                        body: "a=" + n + "a"
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: e + "eq"
                })
            }
        }();
        var l = {
            and: "&&",
            or: "||",
            eq: "===",
            neq: "!==",
            lt: "<",
            gt: ">",
            leq: "<=",
            geq: ">="
        };
        ! function() {
            for (var e in l) {
                var n = l[e];
                t[e] = a({
                    args: ["array", "array", "array"],
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=b" + n + "c"
                    },
                    funcName: e
                }), t[e + "s"] = a({
                    args: ["array", "array", "scalar"],
                    body: {
                        args: ["a", "b", "s"],
                        body: "a=b" + n + "s"
                    },
                    funcName: e + "s"
                }), t[e + "eq"] = a({
                    args: ["array", "array"],
                    body: {
                        args: ["a", "b"],
                        body: "a=a" + n + "b"
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: e + "eq"
                }), t[e + "seq"] = a({
                    args: ["array", "scalar"],
                    body: {
                        args: ["a", "s"],
                        body: "a=a" + n + "s"
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: e + "seq"
                })
            }
        }();
        var f = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan"];
        ! function() {
            for (var e = 0; e < f.length; ++e) {
                var n = f[e];
                t[n] = a({
                    args: ["array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(b)",
                        thisVars: ["this_f"]
                    },
                    funcName: n
                }), t[n + "eq"] = a({
                    args: ["array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a"],
                        body: "a=this_f(a)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: n + "eq"
                })
            }
        }();
        var d = ["max", "min", "atan2", "pow"];
        ! function() {
            for (var e = 0; e < d.length; ++e) {
                var n = d[e];
                t[n] = a({
                    args: ["array", "array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=this_f(b,c)",
                        thisVars: ["this_f"]
                    },
                    funcName: n
                }), t[n + "s"] = a({
                    args: ["array", "array", "scalar"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=this_f(b,c)",
                        thisVars: ["this_f"]
                    },
                    funcName: n + "s"
                }), t[n + "eq"] = a({
                    args: ["array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(a,b)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: n + "eq"
                }), t[n + "seq"] = a({
                    args: ["array", "scalar"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(a,b)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: n + "seq"
                })
            }
        }();
        var h = ["atan2", "pow"];
        ! function() {
            for (var e = 0; e < h.length; ++e) {
                var n = h[e];
                t[n + "op"] = a({
                    args: ["array", "array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=this_f(c,b)",
                        thisVars: ["this_f"]
                    },
                    funcName: n + "op"
                }), t[n + "ops"] = a({
                    args: ["array", "array", "scalar"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=this_f(c,b)",
                        thisVars: ["this_f"]
                    },
                    funcName: n + "ops"
                }), t[n + "opeq"] = a({
                    args: ["array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(b,a)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: n + "opeq"
                }), t[n + "opseq"] = a({
                    args: ["array", "scalar"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + n,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(b,a)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: n + "opseq"
                })
            }
        }(), t.any = o({
            args: ["array"],
            pre: s,
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "if(a){return true}",
                localVars: [],
                thisVars: []
            },
            post: {
                args: [],
                localVars: [],
                thisVars: [],
                body: "return false"
            },
            funcName: "any"
        }), t.all = o({
            args: ["array"],
            pre: s,
            body: {
                args: [{
                    name: "x",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "if(!x){return false}",
                localVars: [],
                thisVars: []
            },
            post: {
                args: [],
                localVars: [],
                thisVars: [],
                body: "return true"
            },
            funcName: "all"
        }), t.sum = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "this_s+=a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "sum"
        }), t.prod = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=1"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "this_s*=a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "prod"
        }), t.norm2squared = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                body: "this_s+=a*a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "norm2squared"
        }), t.norm2 = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                body: "this_s+=a*a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return Math.sqrt(this_s)"
            },
            funcName: "norm2"
        }), t.norminf = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 4
                }],
                body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "norminf"
        }), t.norm1 = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 3
                }],
                body: "this_s+=a<0?-a:a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "norm1"
        }), t.sup = o({
            args: ["array"],
            pre: {
                body: "this_h=-Infinity",
                args: [],
                thisVars: ["this_h"],
                localVars: []
            },
            body: {
                body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
                args: [{
                    name: "_inline_1_arg0_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                thisVars: ["this_h"],
                localVars: []
            },
            post: {
                body: "return this_h",
                args: [],
                thisVars: ["this_h"],
                localVars: []
            }
        }), t.inf = o({
            args: ["array"],
            pre: {
                body: "this_h=Infinity",
                args: [],
                thisVars: ["this_h"],
                localVars: []
            },
            body: {
                body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
                args: [{
                    name: "_inline_1_arg0_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                thisVars: ["this_h"],
                localVars: []
            },
            post: {
                body: "return this_h",
                args: [],
                thisVars: ["this_h"],
                localVars: []
            }
        }), t.argmin = o({
            args: ["index", "array", "shape"],
            pre: {
                body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
                args: [{
                    name: "_inline_0_arg0_",
                    lvalue: !1,
                    rvalue: !1,
                    count: 0
                }, {
                    name: "_inline_0_arg1_",
                    lvalue: !1,
                    rvalue: !1,
                    count: 0
                }, {
                    name: "_inline_0_arg2_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                thisVars: ["this_i", "this_v"],
                localVars: []
            },
            body: {
                body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
                args: [{
                    name: "_inline_1_arg0_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }, {
                    name: "_inline_1_arg1_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                thisVars: ["this_i", "this_v"],
                localVars: ["_inline_1_k"]
            },
            post: {
                body: "{return this_i}",
                args: [],
                thisVars: ["this_i"],
                localVars: []
            }
        }), t.argmax = o({
            args: ["index", "array", "shape"],
            pre: {
                body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
                args: [{
                    name: "_inline_0_arg0_",
                    lvalue: !1,
                    rvalue: !1,
                    count: 0
                }, {
                    name: "_inline_0_arg1_",
                    lvalue: !1,
                    rvalue: !1,
                    count: 0
                }, {
                    name: "_inline_0_arg2_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                thisVars: ["this_i", "this_v"],
                localVars: []
            },
            body: {
                body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
                args: [{
                    name: "_inline_1_arg0_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }, {
                    name: "_inline_1_arg1_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                thisVars: ["this_i", "this_v"],
                localVars: ["_inline_1_k"]
            },
            post: {
                body: "{return this_i}",
                args: [],
                thisVars: ["this_i"],
                localVars: []
            }
        }), t.random = a({
            args: ["array"],
            pre: {
                args: [],
                body: "this_f=Math.random",
                thisVars: ["this_f"]
            },
            body: {
                args: ["a"],
                body: "a=this_f()",
                thisVars: ["this_f"]
            },
            funcName: "random"
        }), t.assign = a({
            args: ["array", "array"],
            body: {
                args: ["a", "b"],
                body: "a=b"
            },
            funcName: "assign"
        }), t.assigns = a({
            args: ["array", "scalar"],
            body: {
                args: ["a", "b"],
                body: "a=b"
            },
            funcName: "assigns"
        }), t.equals = o({
            args: ["array", "array"],
            pre: s,
            body: {
                args: [{
                    name: "x",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }, {
                    name: "y",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "if(x!==y){return false}",
                localVars: [],
                thisVars: []
            },
            post: {
                args: [],
                localVars: [],
                thisVars: [],
                body: "return true"
            },
            funcName: "equals"
        })
    }, function(e, t, n) {
        "use strict";

        function r() {
            this.argTypes = [], this.shimArgs = [], this.arrayArgs = [], this.arrayBlockIndices = [], this.scalarArgs = [], this.offsetArgs = [], this.offsetArgIndex = [], this.indexArgs = [], this.shapeArgs = [], this.funcName = "", this.pre = null, this.body = null, this.post = null, this.debug = !1
        }

        function i(e) {
            var t = new r;
            t.pre = e.pre, t.body = e.body, t.post = e.post;
            var n = e.args.slice(0);
            t.argTypes = n;
            for (var i = 0; i < n.length; ++i) {
                var o = n[i];
                if ("array" === o || "object" == typeof o && o.blockIndices) {
                    if (t.argTypes[i] = "array", t.arrayArgs.push(i), t.arrayBlockIndices.push(o.blockIndices ? o.blockIndices : 0), t.shimArgs.push("array" + i), i < t.pre.args.length && t.pre.args[i].count > 0) throw new Error("cwise: pre() block may not reference array args");
                    if (i < t.post.args.length && t.post.args[i].count > 0) throw new Error("cwise: post() block may not reference array args")
                } else if ("scalar" === o) t.scalarArgs.push(i), t.shimArgs.push("scalar" + i);
                else if ("index" === o) {
                    if (t.indexArgs.push(i), i < t.pre.args.length && t.pre.args[i].count > 0) throw new Error("cwise: pre() block may not reference array index");
                    if (i < t.body.args.length && t.body.args[i].lvalue) throw new Error("cwise: body() block may not write to array index");
                    if (i < t.post.args.length && t.post.args[i].count > 0) throw new Error("cwise: post() block may not reference array index")
                } else if ("shape" === o) {
                    if (t.shapeArgs.push(i), i < t.pre.args.length && t.pre.args[i].lvalue) throw new Error("cwise: pre() block may not write to array shape");
                    if (i < t.body.args.length && t.body.args[i].lvalue) throw new Error("cwise: body() block may not write to array shape");
                    if (i < t.post.args.length && t.post.args[i].lvalue) throw new Error("cwise: post() block may not write to array shape")
                } else {
                    if ("object" != typeof o || !o.offset) throw new Error("cwise: Unknown argument type " + n[i]);
                    t.argTypes[i] = "offset", t.offsetArgs.push({
                        array: o.array,
                        offset: o.offset
                    }), t.offsetArgIndex.push(i)
                }
            }
            if (t.arrayArgs.length <= 0) throw new Error("cwise: No array arguments specified");
            if (t.pre.args.length > n.length) throw new Error("cwise: Too many arguments in pre() block");
            if (t.body.args.length > n.length) throw new Error("cwise: Too many arguments in body() block");
            if (t.post.args.length > n.length) throw new Error("cwise: Too many arguments in post() block");
            return t.debug = !!e.printCode || !!e.debug, t.funcName = e.funcName || "cwise", t.blockSize = e.blockSize || 64, a(t)
        }
        var a = n(94);
        e.exports = i
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = ["'use strict'", "var CACHED={}"],
                n = [],
                r = e.funcName + "_cwise_thunk";
            t.push(["return function ", r, "(", e.shimArgs.join(","), "){"].join(""));
            for (var a = [], o = [], s = [
                    ["array", e.arrayArgs[0], ".shape.slice(", Math.max(0, e.arrayBlockIndices[0]), e.arrayBlockIndices[0] < 0 ? "," + e.arrayBlockIndices[0] + ")" : ")"].join("")
                ], u = [], c = [], l = 0; l < e.arrayArgs.length; ++l) {
                var f = e.arrayArgs[l];
                n.push(["t", f, "=array", f, ".dtype,", "r", f, "=array", f, ".order"].join("")), a.push("t" + f), a.push("r" + f), o.push("t" + f), o.push("r" + f + ".join()"), s.push("array" + f + ".data"), s.push("array" + f + ".stride"), s.push("array" + f + ".offset|0"), l > 0 && (u.push("array" + e.arrayArgs[0] + ".shape.length===array" + f + ".shape.length+" + (Math.abs(e.arrayBlockIndices[0]) - Math.abs(e.arrayBlockIndices[l]))), c.push("array" + e.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, e.arrayBlockIndices[0]) + "]===array" + f + ".shape[shapeIndex+" + Math.max(0, e.arrayBlockIndices[l]) + "]"))
            }
            e.arrayArgs.length > 1 && (t.push("if (!(" + u.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"), t.push("for(var shapeIndex=array" + e.arrayArgs[0] + ".shape.length-" + Math.abs(e.arrayBlockIndices[0]) + "; shapeIndex-->0;) {"), t.push("if (!(" + c.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')"), t.push("}"));
            for (var l = 0; l < e.scalarArgs.length; ++l) s.push("scalar" + e.scalarArgs[l]);
            n.push(["type=[", o.join(","), "].join()"].join("")), n.push("proc=CACHED[type]"), t.push("var " + n.join(",")), t.push(["if(!proc){", "CACHED[type]=proc=compile([", a.join(","), "])}", "return proc(", s.join(","), ")}"].join("")), e.debug && console.log("-----Generated thunk:\n" + t.join("\n") + "\n----------");
            var d = new Function("compile", t.join("\n"));
            return d(i.bind(void 0, e))
        }
        var i = n(95);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            var r, i, a = e.length,
                o = t.arrayArgs.length,
                s = t.indexArgs.length > 0,
                u = [],
                c = [],
                l = 0,
                f = 0;
            for (r = 0; r < a; ++r) c.push(["i", r, "=0"].join(""));
            for (i = 0; i < o; ++i)
                for (r = 0; r < a; ++r) f = l, l = e[r], 0 === r ? c.push(["d", i, "s", r, "=t", i, "p", l].join("")) : c.push(["d", i, "s", r, "=(t", i, "p", l, "-s", f, "*t", i, "p", f, ")"].join(""));
            for (c.length > 0 && u.push("var " + c.join(",")), r = a - 1; r >= 0; --r) l = e[r], u.push(["for(i", r, "=0;i", r, "<s", l, ";++i", r, "){"].join(""));
            for (u.push(n), r = 0; r < a; ++r) {
                for (f = l, l = e[r], i = 0; i < o; ++i) u.push(["p", i, "+=d", i, "s", r].join(""));
                s && (r > 0 && u.push(["index[", f, "]-=s", f].join("")), u.push(["++index[", l, "]"].join(""))), u.push("}")
            }
            return u.join("\n")
        }

        function i(e, t, n, i) {
            for (var a = t.length, o = n.arrayArgs.length, s = n.blockSize, u = n.indexArgs.length > 0, c = [], l = 0; l < o; ++l) c.push(["var offset", l, "=p", l].join(""));
            for (var l = e; l < a; ++l) c.push(["for(var j" + l + "=SS[", t[l], "]|0;j", l, ">0;){"].join("")), c.push(["if(j", l, "<", s, "){"].join("")), c.push(["s", t[l], "=j", l].join("")), c.push(["j", l, "=0"].join("")), c.push(["}else{s", t[l], "=", s].join("")), c.push(["j", l, "-=", s, "}"].join("")), u && c.push(["index[", t[l], "]=j", l].join(""));
            for (var l = 0; l < o; ++l) {
                for (var f = ["offset" + l], d = e; d < a; ++d) f.push(["j", d, "*t", l, "p", t[d]].join(""));
                c.push(["p", l, "=(", f.join("+"), ")"].join(""))
            }
            c.push(r(t, n, i));
            for (var l = e; l < a; ++l) c.push("}");
            return c.join("\n")
        }

        function a(e) {
            for (var t = 0, n = e[0].length; t < n;) {
                for (var r = 1; r < e.length; ++r)
                    if (e[r][t] !== e[0][t]) return t;
                ++t
            }
            return t
        }

        function o(e, t, n) {
            for (var r = e.body, i = [], a = [], o = 0; o < e.args.length; ++o) {
                var s = e.args[o];
                if (!(s.count <= 0)) {
                    var u = new RegExp(s.name, "g"),
                        c = "",
                        l = t.arrayArgs.indexOf(o);
                    switch (t.argTypes[o]) {
                        case "offset":
                            var f = t.offsetArgIndex.indexOf(o),
                                d = t.offsetArgs[f];
                            l = d.array, c = "+q" + f;
                        case "array":
                            c = "p" + l + c;
                            var h = "l" + o,
                                p = "a" + l;
                            if (0 === t.arrayBlockIndices[l]) 1 === s.count ? "generic" === n[l] ? s.lvalue ? (i.push(["var ", h, "=", p, ".get(", c, ")"].join("")), r = r.replace(u, h), a.push([p, ".set(", c, ",", h, ")"].join(""))) : r = r.replace(u, [p, ".get(", c, ")"].join("")) : r = r.replace(u, [p, "[", c, "]"].join("")) : "generic" === n[l] ? (i.push(["var ", h, "=", p, ".get(", c, ")"].join("")), r = r.replace(u, h), s.lvalue && a.push([p, ".set(", c, ",", h, ")"].join(""))) : (i.push(["var ", h, "=", p, "[", c, "]"].join("")), r = r.replace(u, h), s.lvalue && a.push([p, "[", c, "]=", h].join("")));
                            else {
                                for (var v = [s.name], m = [c], g = 0; g < Math.abs(t.arrayBlockIndices[l]); g++) v.push("\\s*\\[([^\\]]+)\\]"), m.push("$" + (g + 1) + "*t" + l + "b" + g);
                                if (u = new RegExp(v.join(""), "g"), c = m.join("+"), "generic" === n[l]) throw new Error("cwise: Generic arrays not supported in combination with blocks!");
                                r = r.replace(u, [p, "[", c, "]"].join(""))
                            }
                            break;
                        case "scalar":
                            r = r.replace(u, "Y" + t.scalarArgs.indexOf(o));
                            break;
                        case "index":
                            r = r.replace(u, "index");
                            break;
                        case "shape":
                            r = r.replace(u, "shape")
                    }
                }
            }
            return [i.join("\n"), r, a.join("\n")].join("\n").trim()
        }

        function s(e) {
            for (var t = new Array(e.length), n = !0, r = 0; r < e.length; ++r) {
                var i = e[r],
                    a = i.match(/\d+/);
                a = a ? a[0] : "", 0 === i.charAt(0) ? t[r] = "u" + i.charAt(1) + a : t[r] = i.charAt(0) + a, r > 0 && (n = n && t[r] === t[r - 1])
            }
            return n ? t[0] : t.join("")
        }

        function u(e, t) {
            for (var n = t[1].length - Math.abs(e.arrayBlockIndices[0]) | 0, u = new Array(e.arrayArgs.length), l = new Array(e.arrayArgs.length), f = 0; f < e.arrayArgs.length; ++f) l[f] = t[2 * f], u[f] = t[2 * f + 1];
            for (var d = [], h = [], p = [], v = [], m = [], f = 0; f < e.arrayArgs.length; ++f) {
                e.arrayBlockIndices[f] < 0 ? (p.push(0), v.push(n), d.push(n), h.push(n + e.arrayBlockIndices[f])) : (p.push(e.arrayBlockIndices[f]), v.push(e.arrayBlockIndices[f] + n), d.push(0), h.push(e.arrayBlockIndices[f]));
                for (var g = [], y = 0; y < u[f].length; y++) p[f] <= u[f][y] && u[f][y] < v[f] && g.push(u[f][y] - p[f]);
                m.push(g)
            }
            for (var b = ["SS"], _ = ["'use strict'"], w = [], y = 0; y < n; ++y) w.push(["s", y, "=SS[", y, "]"].join(""));
            for (var f = 0; f < e.arrayArgs.length; ++f) {
                b.push("a" + f), b.push("t" + f), b.push("p" + f);
                for (var y = 0; y < n; ++y) w.push(["t", f, "p", y, "=t", f, "[", p[f] + y, "]"].join(""));
                for (var y = 0; y < Math.abs(e.arrayBlockIndices[f]); ++y) w.push(["t", f, "b", y, "=t", f, "[", d[f] + y, "]"].join(""))
            }
            for (var f = 0; f < e.scalarArgs.length; ++f) b.push("Y" + f);
            if (e.shapeArgs.length > 0 && w.push("shape=SS.slice(0)"), e.indexArgs.length > 0) {
                for (var E = new Array(n), f = 0; f < n; ++f) E[f] = "0";
                w.push(["index=[", E.join(","), "]"].join(""))
            }
            for (var f = 0; f < e.offsetArgs.length; ++f) {
                for (var A = e.offsetArgs[f], x = [], y = 0; y < A.offset.length; ++y) 0 !== A.offset[y] && (1 === A.offset[y] ? x.push(["t", A.array, "p", y].join("")) : x.push([A.offset[y], "*t", A.array, "p", y].join("")));
                0 === x.length ? w.push("q" + f + "=0") : w.push(["q", f, "=", x.join("+")].join(""))
            }
            var M = c([].concat(e.pre.thisVars).concat(e.body.thisVars).concat(e.post.thisVars));
            w = w.concat(M), w.length > 0 && _.push("var " + w.join(","));
            for (var f = 0; f < e.arrayArgs.length; ++f) _.push("p" + f + "|=0");
            e.pre.body.length > 3 && _.push(o(e.pre, e, l));
            var T = o(e.body, e, l),
                S = a(m);
            S < n ? _.push(i(S, m[0], e, T)) : _.push(r(m[0], e, T)), e.post.body.length > 3 && _.push(o(e.post, e, l)), e.debug && console.log("-----Generated cwise routine for ", t, ":\n" + _.join("\n") + "\n----------");
            var R = [e.funcName || "unnamed", "_cwise_loop_", u[0].join("s"), "m", S, s(l)].join(""),
                C = new Function(["function ", R, "(", b.join(","), "){", _.join("\n"), "} return ", R].join(""));
            return C()
        }
        var c = n(96);
        e.exports = u
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            for (var n = 1, r = e.length, i = e[0], a = e[0], o = 1; o < r; ++o)
                if (a = i, i = e[o], t(i, a)) {
                    if (o === n) {
                        n++;
                        continue
                    }
                    e[n++] = i
                } return e.length = n, e
        }

        function r(e) {
            for (var t = 1, n = e.length, r = e[0], i = e[0], a = 1; a < n; ++a, i = r)
                if (i = r, r = e[a], r !== i) {
                    if (a === t) {
                        t++;
                        continue
                    }
                    e[t++] = r
                } return e.length = t, e
        }

        function i(e, t, i) {
            return 0 === e.length ? e : t ? (i || e.sort(t), n(e, t)) : (i || e.sort(), r(e))
        }
        e.exports = i
    }, function(e, t, n) {
        (function(e, r) {
            "use strict";

            function i(e) {
                if (e) {
                    var t = e.length || e.byteLength,
                        n = y.log2(t);
                    E[n].push(e)
                }
            }

            function a(e) {
                i(e.buffer)
            }

            function o(e) {
                var e = y.nextPow2(e),
                    t = y.log2(e),
                    n = E[t];
                return n.length > 0 ? n.pop() : new ArrayBuffer(e)
            }

            function s(e) {
                return new Uint8Array(o(e), 0, e)
            }

            function u(e) {
                return new Uint16Array(o(2 * e), 0, e)
            }

            function c(e) {
                return new Uint32Array(o(4 * e), 0, e)
            }

            function l(e) {
                return new Int8Array(o(e), 0, e)
            }

            function f(e) {
                return new Int16Array(o(2 * e), 0, e)
            }

            function d(e) {
                return new Int32Array(o(4 * e), 0, e)
            }

            function h(e) {
                return new Float32Array(o(4 * e), 0, e)
            }

            function p(e) {
                return new Float64Array(o(8 * e), 0, e)
            }

            function v(e) {
                return _ ? new Uint8ClampedArray(o(e), 0, e) : s(e)
            }

            function m(e) {
                return new DataView(o(e), 0, e)
            }

            function g(e) {
                e = y.nextPow2(e);
                var t = y.log2(e),
                    n = A[t];
                return n.length > 0 ? n.pop() : new r(e)
            }
            var y = n(102),
                b = n(103);
            e.__TYPEDARRAY_POOL || (e.__TYPEDARRAY_POOL = {
                UINT8: b([32, 0]),
                UINT16: b([32, 0]),
                UINT32: b([32, 0]),
                INT8: b([32, 0]),
                INT16: b([32, 0]),
                INT32: b([32, 0]),
                FLOAT: b([32, 0]),
                DOUBLE: b([32, 0]),
                DATA: b([32, 0]),
                UINT8C: b([32, 0]),
                BUFFER: b([32, 0])
            });
            var _ = "undefined" != typeof Uint8ClampedArray,
                w = e.__TYPEDARRAY_POOL;
            w.UINT8C || (w.UINT8C = b([32, 0])), w.BUFFER || (w.BUFFER = b([32, 0]));
            var E = w.DATA,
                A = w.BUFFER;
            t.free = function(e) {
                if (r.isBuffer(e)) A[y.log2(e.length)].push(e);
                else {
                    if ("[object ArrayBuffer]" !== Object.prototype.toString.call(e) && (e = e.buffer), !e) return;
                    var t = e.length || e.byteLength,
                        n = 0 | y.log2(t);
                    E[n].push(e)
                }
            }, t.freeUint8 = t.freeUint16 = t.freeUint32 = t.freeInt8 = t.freeInt16 = t.freeInt32 = t.freeFloat32 = t.freeFloat = t.freeFloat64 = t.freeDouble = t.freeUint8Clamped = t.freeDataView = a, t.freeArrayBuffer = i, t.freeBuffer = function(e) {
                A[y.log2(e.length)].push(e)
            }, t.malloc = function(e, t) {
                if (void 0 === t || "arraybuffer" === t) return o(e);
                switch (t) {
                    case "uint8":
                        return s(e);
                    case "uint16":
                        return u(e);
                    case "uint32":
                        return c(e);
                    case "int8":
                        return l(e);
                    case "int16":
                        return f(e);
                    case "int32":
                        return d(e);
                    case "float":
                    case "float32":
                        return h(e);
                    case "double":
                    case "float64":
                        return p(e);
                    case "uint8_clamped":
                        return v(e);
                    case "buffer":
                        return g(e);
                    case "data":
                    case "dataview":
                        return m(e);
                    default:
                        return null
                }
                return null
            }, t.mallocArrayBuffer = o, t.mallocUint8 = s, t.mallocUint16 = u, t.mallocUint32 = c, t.mallocInt8 = l, t.mallocInt16 = f, t.mallocInt32 = d, t.mallocFloat32 = t.mallocFloat = h, t.mallocFloat64 = t.mallocDouble = p, t.mallocUint8Clamped = v, t.mallocDataView = m, t.mallocBuffer = g, t.clearCache = function() {
                for (var e = 0; e < 32; ++e) w.UINT8[e].length = 0, w.UINT16[e].length = 0, w.UINT32[e].length = 0, w.INT8[e].length = 0, w.INT16[e].length = 0, w.INT32[e].length = 0, w.FLOAT[e].length = 0, w.DOUBLE[e].length = 0, w.UINT8C[e].length = 0, E[e].length = 0, A[e].length = 0
            }
        }).call(t, function() {
            return this
        }(), n(98).Buffer)
    }, function(e, t, n) {
        (function(e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            "use strict";

            function r() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }

            function i() {
                return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(e, t) {
                if (i() < t) throw new RangeError("Invalid typed array length");
                return o.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = o.prototype) : (null === e && (e = new o(t)), e.length = t), e
            }

            function o(e, t, n) {
                if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, e)
                }
                return s(this, e, t, n)
            }

            function s(e, t, n, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? h(e, t, n, r) : "string" == typeof t ? f(e, t, n) : p(e, t)
            }

            function u(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function c(e, t, n, r) {
                return u(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
            }

            function l(e, t) {
                if (u(t), e = a(e, t < 0 ? 0 : 0 | v(t)), !o.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n) e[n] = 0;
                return e
            }

            function f(e, t, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | g(t, n);
                e = a(e, r);
                var i = e.write(t, n);
                return i !== r && (e = e.slice(0, i)), e
            }

            function d(e, t) {
                var n = t.length < 0 ? 0 : 0 | v(t.length);
                e = a(e, n);
                for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                return e
            }

            function h(e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), o.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = o.prototype) : e = d(e, t), e
            }

            function p(e, t) {
                if (o.isBuffer(t)) {
                    var n = 0 | v(t.length);
                    return e = a(e, n), 0 === e.length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || J(t.length) ? a(e, 0) : d(e, t);
                    if ("Buffer" === t.type && $(t.data)) return d(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function v(e) {
                if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                return 0 | e
            }

            function m(e) {
                return +e != e && (e = 0), o.alloc(+e)
            }

            function g(e, t) {
                if (o.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var r = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return G(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return W(e).length;
                    default:
                        if (r) return G(e).length;
                        t = ("" + t).toLowerCase(), r = !0
                }
            }

            function y(e, t, n) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if (n >>>= 0, t >>>= 0, n <= t) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return I(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return C(this, t, n);
                    case "ascii":
                        return P(this, t, n);
                    case "latin1":
                    case "binary":
                        return k(this, t, n);
                    case "base64":
                        return R(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return F(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }

            function b(e, t, n) {
                var r = e[t];
                e[t] = e[n], e[n] = r
            }

            function _(e, t, n, r, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (i) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!i) return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = o.from(t, r)), o.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, n, r, i);
                if ("number" == typeof t) return t &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : w(e, [t], n, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function w(e, t, n, r, i) {
                function a(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                var o = 1,
                    s = e.length,
                    u = t.length;
                if (void 0 !== r && (r = String(r).toLowerCase(), "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    o = 2, s /= 2, u /= 2, n /= 2
                }
                var c;
                if (i) {
                    var l = -1;
                    for (c = n; c < s; c++)
                        if (a(e, c) === a(t, l === -1 ? 0 : c - l)) {
                            if (l === -1 && (l = c), c - l + 1 === u) return l * o
                        } else l !== -1 && (c -= c - l), l = -1
                } else
                    for (n + u > s && (n = s - u), c = n; c >= 0; c--) {
                        for (var f = !0, d = 0; d < u; d++)
                            if (a(e, c + d) !== a(t, d)) {
                                f = !1;
                                break
                            } if (f) return c
                    }
                return -1
            }

            function E(e, t, n, r) {
                n = Number(n) || 0;
                var i = e.length - n;
                r ? (r = Number(r), r > i && (r = i)) : r = i;
                var a = t.length;
                if (a % 2 !== 0) throw new TypeError("Invalid hex string");
                r > a / 2 && (r = a / 2);
                for (var o = 0; o < r; ++o) {
                    var s = parseInt(t.substr(2 * o, 2), 16);
                    if (isNaN(s)) return o;
                    e[n + o] = s
                }
                return o
            }

            function A(e, t, n, r) {
                return K(G(t, e.length - n), e, n, r)
            }

            function x(e, t, n, r) {
                return K(X(t), e, n, r)
            }

            function M(e, t, n, r) {
                return x(e, t, n, r)
            }

            function T(e, t, n, r) {
                return K(W(t), e, n, r)
            }

            function S(e, t, n, r) {
                return K(H(t, e.length - n), e, n, r)
            }

            function R(e, t, n) {
                return 0 === t && n === e.length ? Z.fromByteArray(e) : Z.fromByteArray(e.slice(t, n))
            }

            function C(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], i = t; i < n;) {
                    var a = e[i],
                        o = null,
                        s = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                    if (i + s <= n) {
                        var u, c, l, f;
                        switch (s) {
                            case 1:
                                a < 128 && (o = a);
                                break;
                            case 2:
                                u = e[i + 1], 128 === (192 & u) && (f = (31 & a) << 6 | 63 & u, f > 127 && (o = f));
                                break;
                            case 3:
                                u = e[i + 1], c = e[i + 2], 128 === (192 & u) && 128 === (192 & c) && (f = (15 & a) << 12 | (63 & u) << 6 | 63 & c, f > 2047 && (f < 55296 || f > 57343) && (o = f));
                                break;
                            case 4:
                                u = e[i + 1], c = e[i + 2], l = e[i + 3], 128 === (192 & u) && 128 === (192 & c) && 128 === (192 & l) && (f = (15 & a) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & l, f > 65535 && f < 1114112 && (o = f))
                        }
                    }
                    null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), i += s
                }
                return O(r)
            }

            function O(e) {
                var t = e.length;
                if (t <= ee) return String.fromCharCode.apply(String, e);
                for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += ee));
                return n
            }

            function P(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                return r
            }

            function k(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                return r
            }

            function I(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", a = t; a < n; ++a) i += Y(e[a]);
                return i
            }

            function F(e, t, n) {
                for (var r = e.slice(t, n), i = "", a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);
                return i
            }

            function L(e, t, n) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function N(e, t, n, r, i, a) {
                if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range")
            }

            function j(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, a = Math.min(e.length - n, 2); i < a; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
            }

            function D(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, a = Math.min(e.length - n, 4); i < a; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
            }

            function U(e, t, n, r, i, a) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function B(e, t, n, r, i) {
                return i || U(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Q.write(e, t, n, r, 23, 4), n + 4
            }

            function V(e, t, n, r, i) {
                return i || U(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Q.write(e, t, n, r, 52, 8), n + 8
            }

            function z(e) {
                if (e = q(e).replace(te, ""), e.length < 2) return "";
                for (; e.length % 4 !== 0;) e += "=";
                return e
            }

            function q(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function Y(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function G(e, t) {
                t = t || 1 / 0;
                for (var n, r = e.length, i = null, a = [], o = 0; o < r; ++o) {
                    if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === r) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && a.push(239, 191, 189), i = n;
                            continue
                        }
                        n = (i - 55296 << 10 | n - 56320) + 65536
                    } else i && (t -= 3) > -1 && a.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        a.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        a.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return a
            }

            function X(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }

            function H(e, t) {
                for (var n, r, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
                return a
            }

            function W(e) {
                return Z.toByteArray(z(e))
            }

            function K(e, t, n, r) {
                for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                return i
            }

            function J(e) {
                return e !== e
            }
            var Z = n(99),
                Q = n(100),
                $ = n(101);
            t.Buffer = o, t.SlowBuffer = m, t.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : r(), t.kMaxLength = i(), o.poolSize = 8192, o._augment = function(e) {
                return e.__proto__ = o.prototype, e
            }, o.from = function(e, t, n) {
                return s(null, e, t, n)
            }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0
            })), o.alloc = function(e, t, n) {
                return c(null, e, t, n)
            }, o.allocUnsafe = function(e) {
                return l(null, e)
            }, o.allocUnsafeSlow = function(e) {
                return l(null, e)
            }, o.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, o.compare = function(e, t) {
                if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)
                    if (e[i] !== t[i]) {
                        n = e[i], r = t[i];
                        break
                    } return n < r ? -1 : r < n ? 1 : 0
            }, o.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, o.concat = function(e, t) {
                if (!$(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return o.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var r = o.allocUnsafe(t),
                    i = 0;
                for (n = 0; n < e.length; ++n) {
                    var a = e[n];
                    if (!o.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(r, i), i += a.length
                }
                return r
            }, o.byteLength = g, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) b(this, t, t + 1);
                return this
            }, o.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
                return this
            }, o.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
                return this
            }, o.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : y.apply(this, arguments)
            }, o.prototype.equals = function(e) {
                if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === o.compare(this, e)
            }, o.prototype.inspect = function() {
                var e = "",
                    n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
            }, o.prototype.compare = function(e, t, n, r, i) {
                if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && t >= n) return 0;
                if (r >= i) return -1;
                if (t >= n) return 1;
                if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
                for (var a = i - r, s = n - t, u = Math.min(a, s), c = this.slice(r, i), l = e.slice(t, n), f = 0; f < u; ++f)
                    if (c[f] !== l[f]) {
                        a = c[f], s = l[f];
                        break
                    } return a < s ? -1 : s < a ? 1 : 0
            }, o.prototype.includes = function(e, t, n) {
                return this.indexOf(e, t, n) !== -1
            }, o.prototype.indexOf = function(e, t, n) {
                return _(this, e, t, n, !0)
            }, o.prototype.lastIndexOf = function(e, t, n) {
                return _(this, e, t, n, !1)
            }, o.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var i = this.length - t;
                if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var a = !1;;) switch (r) {
                    case "hex":
                        return E(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return A(this, e, t, n);
                    case "ascii":
                        return x(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return M(this, e, t, n);
                    case "base64":
                        return T(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return S(this, e, t, n);
                    default:
                        if (a) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), a = !0
                }
            }, o.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var ee = 4096;
            o.prototype.slice = function(e, t) {
                var n = this.length;
                e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
                var r;
                if (o.TYPED_ARRAY_SUPPORT) r = this.subarray(e, t), r.__proto__ = o.prototype;
                else {
                    var i = t - e;
                    r = new o(i, void 0);
                    for (var a = 0; a < i; ++a) r[a] = this[a + e]
                }
                return r
            }, o.prototype.readUIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || L(e, t, this.length);
                for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
                return r
            }, o.prototype.readUIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || L(e, t, this.length);
                for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                return r
            }, o.prototype.readUInt8 = function(e, t) {
                return t || L(e, 1, this.length), this[e]
            }, o.prototype.readUInt16LE = function(e, t) {
                return t || L(e, 2, this.length), this[e] | this[e + 1] << 8
            }, o.prototype.readUInt16BE = function(e, t) {
                return t || L(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, o.prototype.readUInt32LE = function(e, t) {
                return t || L(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, o.prototype.readUInt32BE = function(e, t) {
                return t || L(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, o.prototype.readIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || L(e, t, this.length);
                for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
                return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r
            }, o.prototype.readIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || L(e, t, this.length);
                for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256);) a += this[e + --r] * i;
                return i *= 128, a >= i && (a -= Math.pow(2, 8 * t)), a
            }, o.prototype.readInt8 = function(e, t) {
                return t || L(e, 1, this.length), 128 & this[e] ? (255 - this[e] + 1) * -1 : this[e]
            }, o.prototype.readInt16LE = function(e, t) {
                t || L(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, o.prototype.readInt16BE = function(e, t) {
                t || L(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, o.prototype.readInt32LE = function(e, t) {
                return t || L(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, o.prototype.readInt32BE = function(e, t) {
                return t || L(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, o.prototype.readFloatLE = function(e, t) {
                return t || L(e, 4, this.length), Q.read(this, e, !0, 23, 4)
            }, o.prototype.readFloatBE = function(e, t) {
                return t || L(e, 4, this.length), Q.read(this, e, !1, 23, 4)
            }, o.prototype.readDoubleLE = function(e, t) {
                return t || L(e, 8, this.length), Q.read(this, e, !0, 52, 8)
            }, o.prototype.readDoubleBE = function(e, t) {
                return t || L(e, 8, this.length), Q.read(this, e, !1, 52, 8)
            }, o.prototype.writeUIntLE = function(e, t, n, r) {
                if (e = +e, t |= 0, n |= 0, !r) {
                    var i = Math.pow(2, 8 * n) - 1;
                    N(this, e, t, n, i, 0)
                }
                var a = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < n && (a *= 256);) this[t + o] = e / a & 255;
                return t + n
            }, o.prototype.writeUIntBE = function(e, t, n, r) {
                if (e = +e, t |= 0, n |= 0, !r) {
                    var i = Math.pow(2, 8 * n) - 1;
                    N(this, e, t, n, i, 0)
                }
                var a = n - 1,
                    o = 1;
                for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) this[t + a] = e / o & 255;
                return t + n
            }, o.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, o.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : j(this, e, t, !0), t + 2
            }, o.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : j(this, e, t, !1), t + 2
            }, o.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : D(this, e, t, !0), t + 4
            }, o.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4
            }, o.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    N(this, e, t, n, i - 1, -i)
                }
                var a = 0,
                    o = 1,
                    s = 0;
                for (this[t] = 255 & e; ++a < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
                return t + n
            }, o.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    N(this, e, t, n, i - 1, -i)
                }
                var a = n - 1,
                    o = 1,
                    s = 0;
                for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
                return t + n
            }, o.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, o.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : j(this, e, t, !0), t + 2
            }, o.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : j(this, e, t, !1), t + 2
            }, o.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : D(this, e, t, !0), t + 4
            }, o.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || N(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4
            }, o.prototype.writeFloatLE = function(e, t, n) {
                return B(this, e, t, !0, n)
            }, o.prototype.writeFloatBE = function(e, t, n) {
                return B(this, e, t, !1, n)
            }, o.prototype.writeDoubleLE = function(e, t, n) {
                return V(this, e, t, !0, n)
            }, o.prototype.writeDoubleBE = function(e, t, n) {
                return V(this, e, t, !1, n)
            }, o.prototype.copy = function(e, t, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                var i, a = r - n;
                if (this === e && n < t && t < r)
                    for (i = a - 1; i >= 0; --i) e[i + t] = this[i + n];
                else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < a; ++i) e[i + t] = this[i + n];
                else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
                return a
            }, o.prototype.fill = function(e, t, n, r) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);
                var a;
                if ("number" == typeof e)
                    for (a = t; a < n; ++a) this[a] = e;
                else {
                    var s = o.isBuffer(e) ? e : G(new o(e, r).toString()),
                        u = s.length;
                    for (a = 0; a < n - t; ++a) this[a + t] = s[a % u]
                }
                return this
            };
            var te = /[^+\/0-9A-Za-z-_]/g
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function n(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            n === -1 && (n = t);
            var r = n === t ? 0 : 4 - n % 4;
            return [n, r]
        }

        function r(e) {
            var t = n(e),
                r = t[0],
                i = t[1];
            return 3 * (r + i) / 4 - i
        }

        function i(e, t, n) {
            return 3 * (t + n) / 4 - n
        }

        function a(e) {
            var t, r, a = n(e),
                o = a[0],
                s = a[1],
                u = new f(i(e, o, s)),
                c = 0,
                d = s > 0 ? o - 4 : o;
            for (r = 0; r < d; r += 4) t = l[e.charCodeAt(r)] << 18 | l[e.charCodeAt(r + 1)] << 12 | l[e.charCodeAt(r + 2)] << 6 | l[e.charCodeAt(r + 3)], u[c++] = t >> 16 & 255, u[c++] = t >> 8 & 255, u[c++] = 255 & t;
            return 2 === s && (t = l[e.charCodeAt(r)] << 2 | l[e.charCodeAt(r + 1)] >> 4, u[c++] = 255 & t), 1 === s && (t = l[e.charCodeAt(r)] << 10 | l[e.charCodeAt(r + 1)] << 4 | l[e.charCodeAt(r + 2)] >> 2, u[c++] = t >> 8 & 255, u[c++] = 255 & t), u
        }

        function o(e) {
            return c[e >> 18 & 63] + c[e >> 12 & 63] + c[e >> 6 & 63] + c[63 & e]
        }

        function s(e, t, n) {
            for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(o(r));
            return i.join("")
        }

        function u(e) {
            for (var t, n = e.length, r = n % 3, i = [], a = 16383, o = 0, u = n - r; o < u; o += a) i.push(s(e, o, o + a > u ? u : o + a));
            return 1 === r ? (t = e[n - 1], i.push(c[t >> 2] + c[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i.push(c[t >> 10] + c[t >> 4 & 63] + c[t << 2 & 63] + "=")), i.join("")
        }
        t.byteLength = r, t.toByteArray = a, t.fromByteArray = u;
        for (var c = [], l = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, p = d.length; h < p; ++h) c[h] = d[h], l[d.charCodeAt(h)] = h;
        l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
    }, function(e, t) {
        t.read = function(e, t, n, r, i) {
            var a, o, s = 8 * i - r - 1,
                u = (1 << s) - 1,
                c = u >> 1,
                l = -7,
                f = n ? i - 1 : 0,
                d = n ? -1 : 1,
                h = e[t + f];
            for (f += d, a = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; a = 256 * a + e[t + f], f += d, l -= 8);
            for (o = a & (1 << -l) - 1, a >>= -l, l += r; l > 0; o = 256 * o + e[t + f], f += d, l -= 8);
            if (0 === a) a = 1 - c;
            else {
                if (a === u) return o ? NaN : (h ? -1 : 1) * (1 / 0);
                o += Math.pow(2, r), a -= c
            }
            return (h ? -1 : 1) * o * Math.pow(2, a - r)
        }, t.write = function(e, t, n, r, i, a) {
            var o, s, u, c = 8 * a - i - 1,
                l = (1 << c) - 1,
                f = l >> 1,
                d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = r ? 0 : a - 1,
                p = r ? 1 : -1,
                v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = l) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), t += o + f >= 1 ? d / u : d * Math.pow(2, 1 - f), t * u >= 2 && (o++, u /= 2), o + f >= l ? (s = 0, o = l) : o + f >= 1 ? (s = (t * u - 1) * Math.pow(2, i), o += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + h] = 255 & s, h += p, s /= 256, i -= 8);
            for (o = o << i | s, c += i; c > 0; e[n + h] = 255 & o, h += p, o /= 256, c -= 8);
            e[n + h - p] |= 128 * v
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }, function(e, t) {
        "use strict";
        "use restrict";

        function n(e) {
            var t = 32;
            return e &= -e, e && t--, 65535 & e && (t -= 16), 16711935 & e && (t -= 8), 252645135 & e && (t -= 4), 858993459 & e && (t -= 2), 1431655765 & e && (t -= 1), t
        }
        var r = 32;
        t.INT_BITS = r, t.INT_MAX = 2147483647, t.INT_MIN = -1 << r - 1, t.sign = function(e) {
            return (e > 0) - (e < 0)
        }, t.abs = function(e) {
            var t = e >> r - 1;
            return (e ^ t) - t
        }, t.min = function(e, t) {
            return t ^ (e ^ t) & -(e < t)
        }, t.max = function(e, t) {
            return e ^ (e ^ t) & -(e < t)
        }, t.isPow2 = function(e) {
            return !(e & e - 1 || !e)
        }, t.log2 = function(e) {
            var t, n;
            return t = (e > 65535) << 4, e >>>= t, n = (e > 255) << 3, e >>>= n, t |= n, n = (e > 15) << 2, e >>>= n, t |= n, n = (e > 3) << 1, e >>>= n, t |= n, t | e >> 1
        }, t.log10 = function(e) {
            return e >= 1e9 ? 9 : e >= 1e8 ? 8 : e >= 1e7 ? 7 : e >= 1e6 ? 6 : e >= 1e5 ? 5 : e >= 1e4 ? 4 : e >= 1e3 ? 3 : e >= 100 ? 2 : e >= 10 ? 1 : 0
        }, t.popCount = function(e) {
            return e -= e >>> 1 & 1431655765, e = (858993459 & e) + (e >>> 2 & 858993459), 16843009 * (e + (e >>> 4) & 252645135) >>> 24
        }, t.countTrailingZeros = n, t.nextPow2 = function(e) {
            return e += 0 === e, --e, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e + 1
        }, t.prevPow2 = function(e) {
            return e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e - (e >>> 1)
        }, t.parity = function(e) {
            return e ^= e >>> 16, e ^= e >>> 8, e ^= e >>> 4, e &= 15, 27030 >>> e & 1
        };
        var i = new Array(256);
        ! function(e) {
            for (var t = 0; t < 256; ++t) {
                var n = t,
                    r = t,
                    i = 7;
                for (n >>>= 1; n; n >>>= 1) r <<= 1, r |= 1 & n, --i;
                e[t] = r << i & 255
            }
        }(i), t.reverse = function(e) {
            return i[255 & e] << 24 | i[e >>> 8 & 255] << 16 | i[e >>> 16 & 255] << 8 | i[e >>> 24 & 255]
        }, t.interleave2 = function(e, t) {
            return e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e | t << 1
        }, t.deinterleave2 = function(e, t) {
            return e = e >>> t & 1431655765, e = 858993459 & (e | e >>> 1), e = 252645135 & (e | e >>> 2), e = 16711935 & (e | e >>> 4), e = 65535 & (e | e >>> 16), e << 16 >> 16
        }, t.interleave3 = function(e, t, n) {
            return e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e |= t << 1, n &= 1023, n = 4278190335 & (n | n << 16), n = 251719695 & (n | n << 8), n = 3272356035 & (n | n << 4), n = 1227133513 & (n | n << 2), e | n << 2
        }, t.deinterleave3 = function(e, t) {
            return e = e >>> t & 1227133513, e = 3272356035 & (e | e >>> 2), e = 251719695 & (e | e >>> 4), e = 4278190335 & (e | e >>> 8), e = 1023 & (e | e >>> 16), e << 22 >> 22
        }, t.nextCombination = function(e) {
            var t = e | e - 1;
            return t + 1 | (~t & -~t) - 1 >>> n(e) + 1
        }
    }, function(e, t) {
        "use strict";

        function n(e, t, r) {
            var i = 0 | e[r];
            if (i <= 0) return [];
            var a, o = new Array(i);
            if (r === e.length - 1)
                for (a = 0; a < i; ++a) o[a] = t;
            else
                for (a = 0; a < i; ++a) o[a] = n(e, t, r + 1);
            return o
        }

        function r(e, t) {
            var n, r;
            for (n = new Array(e), r = 0; r < e; ++r) n[r] = t;
            return n
        }

        function i(e, t) {
            switch ("undefined" == typeof t && (t = 0), typeof e) {
                case "number":
                    if (e > 0) return r(0 | e, t);
                    break;
                case "object":
                    if ("number" == typeof e.length) return n(e, t, 0)
            }
            return []
        }
        e.exports = i
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Particles = t.defaults = void 0;
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(105),
            c = r(u),
            l = n(53),
            f = r(l),
            d = n(87),
            h = r(d),
            p = n(89),
            v = r(p),
            m = n(118),
            g = r(m),
            y = n(83),
            b = n(119),
            _ = r(b),
            w = n(121),
            E = r(w),
            A = t.defaults = function() {
                return {
                    shape: [64, 64],
                    geomShape: null,
                    logic: null,
                    logicVert: E.default,
                    logicFrag: null,
                    render: null,
                    renderVert: null,
                    renderFrag: null
                }
            },
            x = t.Particles = function() {
                function e(t, n) {
                    a(this, e);
                    var r = o({}, A(), n);
                    this.gl = t, this.screen = new _.default(this.gl), this.shape = r.shape, this.geomShape = r.geomShape || [].concat(i(this.shape));
                    var s = r.logic || [r.logicVert, r.logicFrag];
                    this.logic = Array.isArray(s) ? f.default.apply(void 0, [t].concat(i(s))) : s;
                    var u = r.render || [r.renderVert, r.renderFrag];
                    this.render = Array.isArray(u) ? f.default.apply(void 0, [t].concat(i(u))) : u, this.geom = (0, c.default)(t), this.geom.attr("uv", e.generateLUT(this.geomShape), {
                        size: 2
                    }), this.buffers = [], this.pixels = (0, v.default)(new Float32Array(this.shape[0] * this.shape[1] * 4), [this.shape[0], this.shape[1], 4])
                }
                return s(e, [{
                    key: "setup",
                    value: function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; this.buffers.length < e;) this.buffers.push((0, h.default)(this.gl, [this.shape[0], this.shape[1]], {
                            float: !0
                        }));
                        for (; this.buffers.length > e;) this.buffers.pop().dispose()
                    }
                }, {
                    key: "spawn",
                    value: function(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.pixels, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0], r = new Float32Array(4), i = t.shape, a = t.data, o = 0, s = 0; s < i[0]; ++s)
                            for (var u = 0; u < i[1]; ++u) r[0] = r[1] = r[2] = r[3] = 0, e(r, s, u), a[o++] = r[0], a[o++] = r[1], a[o++] = r[2], a[o++] = r[3];
                        this.buffers.forEach(function(e) {
                            return e.color[0].setPixels(t, n)
                        })
                    }
                }, {
                    key: "step",
                    value: function(t, n) {
                        n ? n.bind() : ((0, y.step)(this.buffers), this.buffers[0].bind()), this.gl.viewport(0, 0, this.shape[0], this.shape[1]), this.logic.bind(), e.applyUpdate(Object.assign(this.logic.uniforms, {
                            dataRes: this.shape,
                            geomRes: this.geomShape,
                            particles: this.buffers[1].color[0].bind(0)
                        }), t), this.screen.render(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
                    }
                }, {
                    key: "draw",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.gl.POINTS;
                        this.geom.bind(this.render), e.applyUpdate(Object.assign(this.render.uniforms, {
                            dataRes: this.shape,
                            geomRes: this.geomShape,
                            particles: this.buffers[0].color[0].bind(0)
                        }), t), this.geom.draw(n)
                    }
                }, {
                    key: "updateLogic",
                    value: function(e) {
                        this.logic.update(E.default, e)
                    }
                }, {
                    key: "updateRender",
                    value: function(e, t) {
                        this.render.update(t, e)
                    }
                }, {
                    key: "dispose",
                    value: function() {}
                }], [{
                    key: "generateLUT",
                    value: function(e) {
                        for (var t = e[0] * e[1] * 2, n = new Float32Array(t), r = 0, i = Math.max(e[0], 2), a = Math.max(e[1], 2), o = 1 / (i - 1), s = 1 / (a - 1), u = 0; u < i; ++u)
                            for (var c = 0; c < a; ++c) n[r++] = u * o, n[r++] = c * s;
                        return n
                    }
                }, {
                    key: "applyUpdate",
                    value: function(e, t) {
                        return (0, g.default)(t) ? t(e) : Object.assign(e, t)
                    }
                }]), e
            }();
        t.default = x
    }, function(e, t, n) {
        function r(e) {
            return this instanceof r ? (this._elementsType = 5123, this._elementsBytes = 2, this._attributes = [], this._dirty = !0, this._attrLength = 0, this._facesLength = 0, this._index = null, this._vao = null, this._keys = [], void(this.gl = e)) : new r(e)
        }
        var i = n(106),
            a = n(113),
            o = n(114),
            s = n(112);
        e.exports = r, r.prototype.dispose = function() {
            for (var e = 0; e < this._attributes.length; e++) this._attributes[e].buffer.dispose();
            this._attributes = [], this._keys = [], this._attrLength = 0, this._facesLength = 0, this._dirty = !0, this._index && (this._index.dispose(), this._index = null), this._vao && (this._vao.dispose(), this._vao = null)
        }, r.prototype.faces = function(e, t) {
            var n = t && t.size || 3;
            return e = e.cells ? e.cells : e, this._dirty = !0, this._index && this._index.dispose(), this._index = i.create(this.gl, e, n, this.gl.ELEMENT_ARRAY_BUFFER, "uint16"), this._facesLength = this._index.length * n, this._index = this._index.buffer, this
        }, r.prototype.attr = function(e, t, n) {
            if (t.cells && t.positions) return this.attr(e, t.positions).faces(t.cells, n);
            n = n || {};
            var r = n.size || 3,
                a = this._keys.indexOf(e);
            if (a > -1) {
                var o = this._attributes[a].buffer,
                    s = n.offset || void 0;
                return i.update(o, t, r, "float32", s), this._attrLength = o.length / r / 4, this
            }
            this._dirty = !0;
            var u = this.gl,
                c = !this._attributes.length,
                l = i.create(u, t, r, u.ARRAY_BUFFER, "float32");
            if (!l) throw new Error("Unexpected attribute format: needs an ndarray, array, typed array, gl-buffer or simplicial complex");
            var f = l.buffer,
                d = l.length;
            return this._keys.push(e), this._attributes.push({
                size: r,
                buffer: f
            }), c && (this._attrLength = d), this
        }, r.prototype.bind = function(e) {
            if (this.update(), this._vao.bind(), this._keys && e) {
                for (var t = 0; t < this._keys.length; t++) {
                    var n = e.attributes[this._keys[t]];
                    n && (n.location = t)
                }
                e.bind()
            }
        }, r.prototype.draw = function(e, t, n) {
            t = "undefined" == typeof t ? 0 : t, e = "undefined" == typeof e ? this.gl.TRIANGLES : e, this.update(), this._vao._useElements ? (n = "undefined" == typeof n ? this._facesLength : n, this.gl.drawElements(e, n - t, this._elementsType, t * this._elementsBytes)) : (n = "undefined" == typeof n ? this._attrLength : n, this.gl.drawArrays(e, t, n - t))
        }, r.prototype.unbind = function() {
            this.update(), this._vao.unbind()
        }, r.prototype.update = function() {
            this._dirty && (this._dirty = !1, this._vao && this._vao.dispose(), this._vao = o(this.gl, this._attributes, this._index), this._elementsType = this._vao._elementsType, this._elementsBytes = s(a(this._elementsType) || "array").BYTES_PER_ELEMENT || 2)
        }
    }, function(e, t, n) {
        function r(e, t, n, r, i) {
            if (t.handle instanceof WebGLBuffer) return {
                buffer: t,
                length: t.length / n / 4
            };
            var o = a(t, n, i);
            return {
                buffer: l(e, o.data, r),
                length: o.length
            }
        }

        function i(e, t, n, r, i) {
            if (t.handle instanceof WebGLBuffer) throw new Error("Unhandled update case: WebGLBuffer");
            var o = a(t, n, r);
            e.update(o.data, i)
        }

        function a(e, t, n) {
            return Array.isArray(e) && Array.isArray(e[0]) ? {
                data: u(e, n),
                length: e.length
            } : Array.isArray(e) && c(e[0]) ? {
                data: u(e, n),
                length: e.length * e[0].length / t
            } : Array.isArray(e) ? {
                data: new(d(n))(e),
                length: e.length / t
            } : f(e) ? {
                data: e,
                length: o(e.shape) / t
            } : c(e) ? (!n || e instanceof d(n) || (e = s(e, d(n))), {
                data: e,
                length: e.length / t
            }) : void 0
        }

        function o(e) {
            for (var t = 1, n = 0; n < e.length; n++) t *= e[n];
            return t
        }

        function s(e, t) {
            for (var n = new t(e.length), r = 0; r < e.length; r++) n[r] = e[r];
            return n
        }
        var u = n(107),
            c = n(109),
            l = n(110),
            f = n(111),
            d = n(112);
        e.exports.create = r, e.exports.update = i
    }, function(e, t, n) {
        function r(e, t) {
            if (t = t || "float32", !e[0] || !e[0].length) return e;
            for (var n = "string" == typeof t ? i(t) : t, r = e[0].length, a = new n(e.length * r), o = 0, s = 0; s < e.length; s++)
                for (var u = 0; u < r; u++) a[o++] = e[s][u];
            return a
        }
        var i = n(108);
        e.exports = r;
    }, function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                switch (e) {
                    case "int8":
                        return Int8Array;
                    case "int16":
                        return Int16Array;
                    case "int32":
                        return Int32Array;
                    case "uint8":
                        return Uint8Array;
                    case "uint16":
                        return Uint16Array;
                    case "uint32":
                        return Uint32Array;
                    case "float32":
                        return Float32Array;
                    case "float64":
                        return Float64Array;
                    case "array":
                        return Array;
                    case "uint8_clamped":
                        return Uint8ClampedArray;
                    case "generic":
                    case "data":
                    case "dataview":
                        return ArrayBuffer;
                    case "buffer":
                        return "undefined" == typeof t ? ArrayBuffer : t
                }
            }
        }).call(t, n(98).Buffer)
    }, function(e, t) {
        function n(e) {
            return r(e) || i(e)
        }

        function r(e) {
            return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
        }

        function i(e) {
            return o[a.call(e)]
        }
        e.exports = n, n.strict = r, n.loose = i;
        var a = Object.prototype.toString,
            o = {
                "[object Int8Array]": !0,
                "[object Int16Array]": !0,
                "[object Int32Array]": !0,
                "[object Uint8Array]": !0,
                "[object Uint16Array]": !0,
                "[object Uint32Array]": !0,
                "[object Float32Array]": !0,
                "[object Float64Array]": !0
            }
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n, r, i) {
            this.gl = e, this.type = t, this.handle = n, this.length = r, this.usage = i
        }

        function i(e, t, n, r, i, a) {
            var o = i.length * i.BYTES_PER_ELEMENT;
            if (a < 0) return e.bufferData(t, i, r), o;
            if (o + a > n) throw new Error("gl-buffer: If resizing buffer, must not specify offset");
            return e.bufferSubData(t, a, i), n
        }

        function a(e, t) {
            for (var n = u.malloc(e.length, t), r = e.length, i = 0; i < r; ++i) n[i] = e[i];
            return n
        }

        function o(e, t) {
            for (var n = 1, r = t.length - 1; r >= 0; --r) {
                if (t[r] !== n) return !1;
                n *= e[r]
            }
            return !0
        }

        function s(e, t, n, i) {
            if (n = n || e.ARRAY_BUFFER, i = i || e.DYNAMIC_DRAW, n !== e.ARRAY_BUFFER && n !== e.ELEMENT_ARRAY_BUFFER) throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER");
            if (i !== e.DYNAMIC_DRAW && i !== e.STATIC_DRAW && i !== e.STREAM_DRAW) throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW");
            var a = e.createBuffer(),
                o = new r(e, n, a, 0, i);
            return o.update(t), o
        }
        var u = n(97),
            c = n(92),
            l = n(89),
            f = ["uint8", "uint8_clamped", "uint16", "uint32", "int8", "int16", "int32", "float32"],
            d = r.prototype;
        d.bind = function() {
            this.gl.bindBuffer(this.type, this.handle)
        }, d.unbind = function() {
            this.gl.bindBuffer(this.type, null)
        }, d.dispose = function() {
            this.gl.deleteBuffer(this.handle)
        }, d.update = function(e, t) {
            if ("number" != typeof t && (t = -1), this.bind(), "object" == typeof e && "undefined" != typeof e.shape) {
                var n = e.dtype;
                if (f.indexOf(n) < 0 && (n = "float32"), this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
                    var r = gl.getExtension("OES_element_index_uint");
                    n = r && "uint16" !== n ? "uint32" : "uint16"
                }
                if (n === e.dtype && o(e.shape, e.stride)) 0 === e.offset && e.data.length === e.shape[0] ? this.length = i(this.gl, this.type, this.length, this.usage, e.data, t) : this.length = i(this.gl, this.type, this.length, this.usage, e.data.subarray(e.offset, e.shape[0]), t);
                else {
                    var s = u.malloc(e.size, n),
                        d = l(s, e.shape);
                    c.assign(d, e), t < 0 ? this.length = i(this.gl, this.type, this.length, this.usage, s, t) : this.length = i(this.gl, this.type, this.length, this.usage, s.subarray(0, e.size), t), u.free(s)
                }
            } else if (Array.isArray(e)) {
                var h;
                h = this.type === this.gl.ELEMENT_ARRAY_BUFFER ? a(e, "uint16") : a(e, "float32"), t < 0 ? this.length = i(this.gl, this.type, this.length, this.usage, h, t) : this.length = i(this.gl, this.type, this.length, this.usage, h.subarray(0, e.length), t), u.free(h)
            } else if ("object" == typeof e && "number" == typeof e.length) this.length = i(this.gl, this.type, this.length, this.usage, e, t);
            else {
                if ("number" != typeof e && void 0 !== e) throw new Error("gl-buffer: Invalid data type");
                if (t >= 0) throw new Error("gl-buffer: Cannot specify offset when resizing buffer");
                e |= 0, e <= 0 && (e = 1), this.gl.bufferData(this.type, 0 | e, this.usage), this.length = e
            }
        }, e.exports = s
    }, function(e, t) {
        e.exports = function(e) {
            if (!e) return !1;
            if (!e.dtype) return !1;
            var t = new RegExp("function View[0-9]+d(:?" + e.dtype + ")+");
            return t.test(String(e.constructor))
        }
    }, function(e, t) {
        e.exports = function(e) {
            switch (e) {
                case "int8":
                    return Int8Array;
                case "int16":
                    return Int16Array;
                case "int32":
                    return Int32Array;
                case "uint8":
                    return Uint8Array;
                case "uint16":
                    return Uint16Array;
                case "uint32":
                    return Uint32Array;
                case "float32":
                    return Float32Array;
                case "float64":
                    return Float64Array;
                case "array":
                    return Array
            }
        }
    }, function(e, t) {
        function n(e) {
            switch (e) {
                case 5126:
                    return "float32";
                case 5125:
                    return "uint32";
                case 5124:
                    return "int32";
                case 5123:
                    return "uint16";
                case 32819:
                    return "uint16";
                case 32820:
                    return "uint16";
                case 33635:
                    return "uint16";
                case 5122:
                    return "int16";
                case 5121:
                    return "uint8";
                case 5120:
                    return "int8";
                default:
                    return null
            }
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            this.bindVertexArrayOES = e.bindVertexArray.bind(e), this.createVertexArrayOES = e.createVertexArray.bind(e), this.deleteVertexArrayOES = e.deleteVertexArray.bind(e)
        }

        function i(e, t, n, i) {
            var s, u = e.createVertexArray ? new r(e) : e.getExtension("OES_vertex_array_object");
            return s = u ? a(e, u) : o(e), s.update(t, n, i), s
        }
        var a = n(115),
            o = n(117);
        e.exports = i
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n, r, i, a) {
            this.location = e, this.dimension = t, this.a = n, this.b = r, this.c = i, this.d = a
        }

        function i(e, t, n) {
            this.gl = e, this._ext = t, this.handle = n, this._attribs = [], this._useElements = !1, this._elementsType = e.UNSIGNED_SHORT
        }

        function a(e, t) {
            return new i(e, t, t.createVertexArrayOES())
        }
        var o = n(116);
        r.prototype.bind = function(e) {
            switch (this.dimension) {
                case 1:
                    e.vertexAttrib1f(this.location, this.a);
                    break;
                case 2:
                    e.vertexAttrib2f(this.location, this.a, this.b);
                    break;
                case 3:
                    e.vertexAttrib3f(this.location, this.a, this.b, this.c);
                    break;
                case 4:
                    e.vertexAttrib4f(this.location, this.a, this.b, this.c, this.d)
            }
        }, i.prototype.bind = function() {
            this._ext.bindVertexArrayOES(this.handle);
            for (var e = 0; e < this._attribs.length; ++e) this._attribs[e].bind(this.gl)
        }, i.prototype.unbind = function() {
            this._ext.bindVertexArrayOES(null)
        }, i.prototype.dispose = function() {
            this._ext.deleteVertexArrayOES(this.handle)
        }, i.prototype.update = function(e, t, n) {
            if (this.bind(), o(this.gl, t, e), this.unbind(), this._attribs.length = 0, e)
                for (var i = 0; i < e.length; ++i) {
                    var a = e[i];
                    "number" == typeof a ? this._attribs.push(new r(i, 1, a)) : Array.isArray(a) && this._attribs.push(new r(i, a.length, a[0], a[1], a[2], a[3]))
                }
            this._useElements = !!t, this._elementsType = n || this.gl.UNSIGNED_SHORT
        }, i.prototype.draw = function(e, t, n) {
            n = n || 0;
            var r = this.gl;
            this._useElements ? r.drawElements(e, t, this._elementsType, n) : r.drawArrays(e, n, t)
        }, e.exports = a
    }, function(e, t) {
        "use strict";

        function n(e, t, n) {
            t ? t.bind() : e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
            var r = 0 | e.getParameter(e.MAX_VERTEX_ATTRIBS);
            if (n) {
                if (n.length > r) throw new Error("gl-vao: Too many vertex attributes");
                for (var i = 0; i < n.length; ++i) {
                    var a = n[i];
                    if (a.buffer) {
                        var o = a.buffer,
                            s = a.size || 4,
                            u = a.type || e.FLOAT,
                            c = !!a.normalized,
                            l = a.stride || 0,
                            f = a.offset || 0;
                        o.bind(), e.enableVertexAttribArray(i), e.vertexAttribPointer(i, s, u, c, l, f)
                    } else {
                        if ("number" == typeof a) e.vertexAttrib1f(i, a);
                        else if (1 === a.length) e.vertexAttrib1f(i, a[0]);
                        else if (2 === a.length) e.vertexAttrib2f(i, a[0], a[1]);
                        else if (3 === a.length) e.vertexAttrib3f(i, a[0], a[1], a[2]);
                        else {
                            if (4 !== a.length) throw new Error("gl-vao: Invalid vertex attribute");
                            e.vertexAttrib4f(i, a[0], a[1], a[2], a[3])
                        }
                        e.disableVertexAttribArray(i)
                    }
                }
                for (; i < r; ++i) e.disableVertexAttribArray(i)
            } else {
                e.bindBuffer(e.ARRAY_BUFFER, null);
                for (var i = 0; i < r; ++i) e.disableVertexAttribArray(i)
            }
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            this.gl = e, this._elements = null, this._attributes = null, this._elementsType = e.UNSIGNED_SHORT
        }

        function i(e) {
            return new r(e)
        }
        var a = n(116);
        r.prototype.bind = function() {
            a(this.gl, this._elements, this._attributes)
        }, r.prototype.update = function(e, t, n) {
            this._elements = t, this._attributes = e, this._elementsType = n || this.gl.UNSIGNED_SHORT
        }, r.prototype.dispose = function() {}, r.prototype.unbind = function() {}, r.prototype.draw = function(e, t, n) {
            n = n || 0;
            var r = this.gl;
            this._elements ? r.drawElements(e, t, this._elementsType, n) : r.drawArrays(e, n, t)
        }, e.exports = i
    }, function(e, t, n) {
        function r(e) {
            if (!a(e)) return !1;
            var t = i(e);
            return t == s || t == u || t == o || t == c
        }
        var i = n(39),
            a = n(33),
            o = "[object AsyncFunction]",
            s = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Proxy]";
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Screen = void 0;
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r)
                }
                if ("value" in i) return i.value;
                var o = i.get;
                if (void 0 !== o) return o.call(r)
            },
            c = n(120),
            l = r(c),
            f = t.Screen = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), s(t, [{
                    key: "render",
                    value: function() {
                        u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "bind", this).call(this), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "draw", this).call(this), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "unbind", this).call(this)
                    }
                }]), t
            }(l.default);
        t.default = f
    }, function(e, t, n) {
        function r(e) {
            return this instanceof r ? (this.gl = e, void(this.vao = a(e, [{
                size: 2,
                type: e.FLOAT,
                buffer: i(e, new Float32Array([-1, -1, -1, 4, 4, -1]))
            }]))) : new r(e)
        }
        var i = n(110),
            a = n(114);
        e.exports = r, r.prototype.bind = function() {
            this.vao.bind()
        }, r.prototype.draw = function() {
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 3)
        }, r.prototype.unbind = function() {
            this.vao.unbind()
        }
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\nvarying vec2 uv;\n\nvoid main() {\n    uv = position.xy;\n\n    gl_Position = vec4(position, 1.0, 1.0);\n}\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(123),
            a = r(i);
        t.default = function(e) {
            return e[0] = e[1] = a.default, e[2] = e[3] = 0, e
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = -1e6
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.coverAspect = t.containAspect = t.aspect = void 0;
        var r = n(52),
            i = t.aspect = function(e, t, n) {
                return r.vec2.scale(e, r.vec2.inverse(e, t), n)
            };
        t.containAspect = function(e, t) {
            return i(e, t, Math.min(t[0], t[1]))
        }, t.coverAspect = function(e, t) {
            return i(e, t, Math.max(t[0], t[1]))
        };
        t.default = i
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D flow;\nuniform sampler2D targets;\n\nuniform vec2 dataRes;\n\nuniform vec2 viewSize;\n\nuniform float time;\nuniform float dt;\n\nuniform float speedLimit;\nuniform float damping;\n\nuniform float forceWeight;\nuniform float flowWeight;\nuniform float noiseWeight;\n\nuniform float flowDecay;\n\nuniform float noiseSpeed;\nuniform float noiseScale;\n\nuniform float target;\n\n// These are scaled by the values they correspond to\nuniform float varyForce;\nuniform float varyFlow;\nuniform float varyNoise;\nuniform float varyNoiseScale;\nuniform float varyNoiseSpeed;\nuniform float varyTarget;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nconst vec2 inert = vec2(-1000000.0);\n\n/**\n * @requires {float} levels The number of samples to take at different LODs\n * @requires {float} stride The step up to take between each LOD\n */\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nvec2 posToUV(vec2 pos) {\n    return map(pos, posRange.xy, posRange.zw, uvRange.xy, uvRange.zw);\n}\n\n// Time/decay\n\nvec2 get(vec3 data, float time, float decay) {\n    return data.xy*max(0.0, 1.0-((time-data.z)*decay));\n}\n\nvec2 get(vec4 data, float time, float decay) {\n    return get(data.xyz, time, decay);\n}\n\n// No time/decay\n\nvec2 get(vec2 data) {\n    return data.xy;\n}\n\nvec2 get(vec3 data) {\n    return get(data.xy);\n}\n\nvec2 get(vec4 data) {\n    return get(data.xy);\n}\n\n/**\n * @return The flow velocity and age for a given screen position, sampling\n *         several scales.\n */\nvec2 flowAtScreenPos(vec2 pos, sampler2D flow, float time, float flowDecay) {\n    vec2 uv = posToUV(pos);\n    vec2 flowForce = vec2(0.0);\n    float flowMax = 0.0;\n\n    for(float level = 0.0; level < 1.0*1.0; level += 1.0) {\n        vec4 flowData = texture2D(flow, uv, level);\n        float factor = 1.0/(level+1.0);\n\n        flowForce += get(flowData, time, flowDecay)*factor;\n        flowMax += factor;\n    }\n\n    return flowForce/flowMax;\n}\n\nfloat vary(float base, float offset, float variance) {\n    return base+(offset*variance*base);\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy/dataRes;\n\n    vec4 state = texture2D(particles, uv);\n    vec2 pos = state.xy;\n    vec2 vel = state.zw;\n\n    vec2 newPos = pos;\n    vec2 newVel = vel;\n\n    if(pos != inert) {\n        // The 1D index offset of this pixel\n        float i = (gl_FragCoord.x+(gl_FragCoord.y*dataRes.x))/\n                (dataRes.x*dataRes.y);\n\n        // Wander force\n\n        vec2 noisePos = pos*vary(noiseScale, i, varyNoiseScale);\n\n        // @todo This doesn't progress linearly - the speed grows with time...\n        float noiseTime = time*vary(noiseSpeed, i, varyNoiseSpeed);\n\n        vec2 wanderForce = vec2(snoise(vec3(noisePos, uv.x+noiseTime)),\n                snoise(vec3(noisePos, uv.y+noiseTime+1234.5678)));\n\n        // Flow force - left by preceeding particles\n        // (Ensure this is checked before the next flow step is rendered, to avoid\n        // self-influence.)\n\n        vec2 flowForce = flowAtScreenPos(pos*viewSize, flow, time, flowDecay);\n\n        // Accumulate weighted forces and damping\n        newVel = (vel*damping*dt)+\n            (vary(forceWeight, i, varyForce)*\n                ((flowForce*dt*vary(flowWeight, i, varyFlow))+\n                (wanderForce*dt*vary(noiseWeight, i, varyNoise))));\n\n        // Tend towards targets\n        newVel += (texture2D(targets, uv).xy-pos)*vary(target, i, varyTarget);\n\n        // Normalize and clamp the velocity\n        /**\n         * @todo This seems to cause some problems when dealing with larger max\n         *       speeds - the particles no longer follow flow forces somehow...\n         */\n        float speed = length(newVel);\n\n        newVel *= min(speed, speedLimit)/speed;\n\n        // Integrate motion\n        newPos = pos+newVel;\n    }\n\n    gl_FragColor = vec4(newPos, newVel);\n}\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D previous;\nuniform sampler2D particles;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\n\nuniform vec2 viewSize;\n\nuniform sampler2D colorMap;\nuniform float colorMapAlpha;\n\nuniform vec4 flowColor;\nuniform vec4 baseColor;\n\nuniform float time;\nuniform float speedLimit;\nuniform float flowDecay;\n\nuniform float speedAlpha;\n\nattribute vec2 uv;\n\nvarying vec4 color;\n\n/**\n * Pre-generated constants, equivalent to:\n *     flowAxisR: `angleToVec(0)`\n *     flowAxisG: `angleToVec(tau/3.0)`\n *     flowAxisB: `angleToVec(tau*2.0/3.0)`\n */\nconst vec2 flowAxisR = vec2(1.0, 0.0);\nconst vec2 flowAxisG = vec2(-0.5000000000000004, -0.8660254037844385);\nconst vec2 flowAxisB = vec2(-0.4999999999999998, 0.8660254037844387);\n\nconst vec4 minColor = vec4(0.0);\nconst vec4 maxColor = vec4(1.0);\n\nconst vec4 minAlign = vec4(-1.0);\nconst vec4 maxAlign = vec4(1.0);\n\n// @todo Turn some of these `const`s into `uniform`s\nconst vec2 center = vec2(0.0);\nconst vec2 fadeRange = vec2(0.2, 1.0);\nconst vec3 falloff = vec3(fadeRange.x, fadeRange.y, fadeRange.y);\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec2 inert = vec2(-1000000.0);\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nvec4 preAlpha(vec3 color, float alpha) {\n    return vec4(color.rgb*alpha, alpha);\n}\n\nvec4 preAlpha(vec4 color) {\n    return preAlpha(color.rgb, color.a);\n}\n\nconst float frameOffset = 0.25;\n\n/**\n * For every data point, we have two vertices - current and previous state.\n * Every other vertex looks up previous data. In this way, (vertical)\n * neighbours alternate from previous to current state.\n * (Vertical neighbours, because WebGL iterates column-major.)\n *\n * @return State data for the vertex, either current or previous.\n */\n\nvec4 stateAtFrame(vec2 uv, vec2 shape, sampler2D previous, sampler2D current) {\n    float nearIndex = uv.y*shape.y;\n    float offset = fract(nearIndex);\n    vec2 lookup = vec2(uv.x, floor(nearIndex)/shape.y);\n\n    // @note Some systems comlain about this form of texture lookup:\n    // return texture2D(((offset > frameOffset)? current : previous), lookup);\n    return ((offset > frameOffset)?\n            texture2D(current, lookup)\n        :   texture2D(previous, lookup));\n}\n\nvoid main() {\n    vec4 state = stateAtFrame(uv, dataRes, previous, particles);\n\n    if(state.xy != inert) {\n        vec2 pos = state.xy;\n        vec2 vel = state.zw/speedLimit;\n        float speedRate = min(length2(vel)/speedAlpha, 1.0);\n\n        // Color map\n\n        vec4 mappedColor = texture2D(colorMap, uv*geomRes/dataRes);\n\n        mappedColor *= colorMapAlpha;\n\n        // Flow color\n        \n        vec3 alignRGB = vec3(dot(vel, flowAxisR),\n                dot(vel, flowAxisG), dot(vel, flowAxisB));\n\n        vec3 flowAlign = map(mix(alignRGB, alignRGB.gbr*(1.0-flowDecay),\n                    sin(time*flowDecay)),\n                minAlign.rgb, maxAlign.rgb, minColor.rgb, maxColor.rgb);\n\n        vec4 flowAlignedColor = vec4(flowColor.rgb*flowAlign, flowColor.a);\n\n        // Color summation, clamping and pre-multiplying alpha so they don't\n        // cross over\n\n        color = clamp(preAlpha(baseColor), minColor, maxColor)+\n            clamp(preAlpha(mappedColor), minColor, maxColor)+\n            clamp(preAlpha(flowAlignedColor), minColor, maxColor);\n\n        color.a *= speedRate*clamp(vignette(pos, center, 1.0, falloff),\n                        fadeRange.x, fadeRange.y);\n\n        // Position\n        gl_Position = vec4(pos*viewSize, 0.0, 1.0);\n    }\n}\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nvarying vec4 color;\n\nvoid main() {\n    gl_FragColor = color;\n}\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D previous;\nuniform sampler2D data;\n\nuniform vec2 dataRes;\n\nuniform vec2 viewSize;\n\nuniform float time;\nuniform float speedLimit;\nuniform float flowDecay;\n\nattribute vec2 uv;\n\nvarying vec4 color;\n\n/**\n * @requires {float} time The current time in ms\n */\n\nvec4 flow(vec2 vel) {\n    // Faster particles leave a greater influence (opacity).\n    // Linear interpolation - inaccurate for vectors, will it be OK without\n    // sudden turns, or do we need a per-fragment lookup?\n    return vec4(vel, time, length(vel));\n}\n\nvec4 flow(vec2 vel, float speedLimit) {\n    vec4 values = flow(vel);\n\n    return vec4(values.xyz, min(values.a/speedLimit, 1.0));\n}\n\n/**\n * @requires `./head.vert`\n * @requires {function} apply A function applying a `vec4` state into a `vec3`\n *                            color to be drawn.\n */\n\nconst vec2 inert = vec2(-1000000.0);\n\nconst float frameOffset = 0.25;\n\n/**\n * For every data point, we have two vertices - current and previous state.\n * Every other vertex looks up previous data. In this way, (vertical)\n * neighbours alternate from previous to current state.\n * (Vertical neighbours, because WebGL iterates column-major.)\n *\n * @return State data for the vertex, either current or previous.\n */\n\nvec4 stateAtFrame(vec2 uv, vec2 shape, sampler2D previous, sampler2D current) {\n    float nearIndex = uv.y*shape.y;\n    float offset = fract(nearIndex);\n    vec2 lookup = vec2(uv.x, floor(nearIndex)/shape.y);\n\n    // @note Some systems comlain about this form of texture lookup:\n    // return texture2D(((offset > frameOffset)? current : previous), lookup);\n    return ((offset > frameOffset)?\n            texture2D(current, lookup)\n        :   texture2D(previous, lookup));\n}\n\nvoid main() {\n    vec4 state = stateAtFrame(uv, dataRes, previous, data);\n\n    if(state.xy != inert) {\n        gl_Position = vec4(state.xy*viewSize, 1.0, 1.0);\n        color = flow(state.zw, speedLimit);\n    }\n}\n\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nvarying vec4 color;\n\nvoid main() {\n    // @todo SDF from line, to weaken force further away\n    gl_FragColor = color.rgba;\n}\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec4 color;\n\nvoid main() {\n    gl_FragColor = color.rgba;\n}\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D view;\nuniform vec2 viewRes;\n\n// #pragma glslify: fxaa = require(glsl-fxaa)\n\nvoid main() {\n    gl_FragColor = texture2D(view, gl_FragCoord.xy/viewRes);\n    // gl_FragColor = fxaa(view, gl_FragCoord.xy, viewRes);\n}\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PixelSpawner = t.defaults = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(87),
            u = r(s),
            c = n(53),
            l = r(c),
            f = n(52),
            d = n(124),
            h = r(d),
            p = n(121),
            v = r(p),
            m = n(133),
            g = r(m),
            y = t.defaults = function() {
                return {
                    shader: [v.default, g.default],
                    buffer: [
                        [1, 1], {
                            float: !0
                        }
                    ],
                    spawnSize: [1, 1],
                    jitterRad: 2,
                    speed: 1,
                    bias: 1
                }
            },
            b = t.PixelSpawner = function() {
                function e(t, n) {
                    a(this, e), this.gl = t;
                    var r = Object.assign(y(), n);
                    this.shader = Array.isArray(r.shader) ? l.default.apply(void 0, [this.gl].concat(i(r.shader))) : r.shader, this.buffer = Array.isArray(r.buffer) ? u.default.apply(void 0, [this.gl].concat(i(r.buffer))) : r.buffer, this.speed = r.speed, this.bias = r.bias, this.jitterRad = r.jitterRad, this.jitter = f.vec2.create(), this.spawnSize = r.spawnSize, this.spawnMatrix = f.mat3.create()
                }
                return o(e, [{
                    key: "update",
                    value: function(e) {
                        return Object.assign(e, {
                            spawnData: this.buffer.color[0].bind(1),
                            spawnSize: this.spawnSize,
                            spawnMatrix: this.spawnMatrix,
                            speed: this.speed,
                            jitter: (0, h.default)(this.jitter, e.viewRes, this.jitterRad),
                            bias: this.bias
                        })
                    }
                }, {
                    key: "spawn",
                    value: function(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.update.bind(this), n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                        return e.spawnShader.apply(e, [this.shader, t].concat(r))
                    }
                }, {
                    key: "setPixels",
                    value: function(e) {
                        return this.buffer.color[0].setPixels(e)
                    }
                }]), e
            }();
        t.default = b
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\n// `import`-able convenience for setting up a vignette - should be replaced with\n// a proper `uniform`-ed version.\n\nconst vec3 curve = vec3(0.1, 1.0, 1.0);\nconst vec2 mid = vec2(0.5);\nconst float limit = 0.6;\n\n// #pragma glslify: vignette = require(../../filter/pass/vignette, curve = curve, mid = mid, limit = limit)\n\n/**\n * Directly uses a normal image - brightness being speed in a direction defined\n * by the `rgba` channels.\n *\n * @requires {float} time The current time\n */\n\nconst vec4 k = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);\nconst float e = 1.0e-10;\n\nvec3 rgb2hsv(vec3 c) {\n    vec4 p = ((c.g < c.b)? vec4(c.bg, k.wz) : vec4(c.gb, k.xy));\n    vec4 q = ((c.r < p.x)? vec4(p.xyw, c.r) : vec4(c.r, p.yzx));\n\n    float d = q.x-min(q.w, q.y);\n\n    return vec3(abs(q.z+(q.w-q.y)/(6.0*d+e)), d/(q.x+e), q.x);\n}\n\nconst float tau = 6.28318530717958647692;\n\nvec2 angleToVec(float rad) {\n    return vec2(cos(rad), sin(rad));\n}\n\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    vec3 hsv = rgb2hsv(pixel.rgb);\n\n    return vec4(pos, angleToVec((hsv.r+(time*0.00003))*tau)*hsv.g*hsv.b*pixel.a);\n}\n\n// #pragma glslify: applier = require(./apply/brightest)\n/**\n * @requires {vec2} mid The center of the vignette\n * @requires {float} limit The radius of the vignette\n * @requires {(float|vec2|vec3|vec4)} curve Bezier curve points, shaping falloff\n */\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nvec4 pass(vec2 uv, vec4 pixel) {\n    return pixel*vignette(uv, mid, limit, curve);\n}\n\n/**\n * A way to easily compose filter passes on the pixel before applying it.\n *\n * @see `../../../filter/`\n * @see `./`\n * @requires {function} pass The filter pass function, given the pixel.\n * @requires {function} apply The apply function, given the result of `pass`.\n */\n\nvec4 compose(vec2 uv, vec2 pos, vec4 pixel) {\n    return apply(uv, pos, pass(uv, pixel));\n}\n\n// #pragma glslify: apply = require(./apply/color, time = time)\n// #pragma glslify: apply = require(./apply/brightest)\n\n/**\n * Directly spawns a particle according to its euivalent position/values in the\n * given texture.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n */\n\nvoid main() {\n    /**\n     * @todo I have no idea why this seems to be required here and not in the\n     *       main logic shader... seems to do with the data/geometry size ratio.\n     */\n    // vec2 uv = gl_FragCoord.xy/dataRes;\n    vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n\n    vec4 state = compose(uv, spawnToPos(uv), texture2D(spawnData, uv));\n\n    gl_FragColor = vec4(state.xy, state.zw*speed);\n}\n\n";
    }, function(e, t) {
        e.exports = "/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\n// `import`-able convenience for setting up a vignette - should be replaced with\n// a proper `uniform`-ed version.\n\nconst vec3 curve = vec3(0.1, 1.0, 1.0);\nconst vec2 mid = vec2(0.5);\nconst float limit = 0.6;\n\n// #pragma glslify: vignette = require(../../filter/pass/vignette, curve = curve, mid = mid, limit = limit)\n\n/**\n * Directly uses a normal image - brightness being speed in a direction defined\n * by the `rgba` channels.\n *\n * @requires {float} time The current time\n */\n\nconst vec4 k = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);\nconst float e = 1.0e-10;\n\nvec3 rgb2hsv(vec3 c) {\n    vec4 p = ((c.g < c.b)? vec4(c.bg, k.wz) : vec4(c.gb, k.xy));\n    vec4 q = ((c.r < p.x)? vec4(p.xyw, c.r) : vec4(c.r, p.yzx));\n\n    float d = q.x-min(q.w, q.y);\n\n    return vec3(abs(q.z+(q.w-q.y)/(6.0*d+e)), d/(q.x+e), q.x);\n}\n\nconst float tau = 6.28318530717958647692;\n\nvec2 angleToVec(float rad) {\n    return vec2(cos(rad), sin(rad));\n}\n\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    vec3 hsv = rgb2hsv(pixel.rgb);\n\n    return vec4(pos, angleToVec((hsv.r+(time*0.00003))*tau)*hsv.g*hsv.b*pixel.a);\n}\n\n// #pragma glslify: applier = require(./apply/brightest)\n/**\n * @requires {vec2} mid The center of the vignette\n * @requires {float} limit The radius of the vignette\n * @requires {(float|vec2|vec3|vec4)} curve Bezier curve points, shaping falloff\n */\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nvec4 pass(vec2 uv, vec4 pixel) {\n    return pixel*vignette(uv, mid, limit, curve);\n}\n\n/**\n * A way to easily compose filter passes on the pixel before applying it.\n *\n * @see `../../../filter/`\n * @see `./`\n * @requires {function} pass The filter pass function, given the pixel.\n * @requires {function} apply The apply function, given the result of `pass`.\n */\n\nvec4 compose(vec2 uv, vec2 pos, vec4 pixel) {\n    return apply(uv, pos, pass(uv, pixel));\n}\n\n// #pragma glslify: apply = require(./apply/color, time = time)\n// #pragma glslify: apply = require(./apply/brightest)\n\n/**\n * Pick the Highest velocity.\n * Uses the same data structure as the particles.\n */\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\nfloat test(vec4 data) {\n    return length2(data.zw);\n}\n\nconst float samples = 6.0;\n\n/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n * @requires {function} test A function that returns a float value for a given\n *                           `vec4` state; greater values win the comparison.\n */\n\n// Over 1 favours changing to new data; under 1 favours current data.\nuniform float bias;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\n\nvec4 pick(vec4 current, vec4 next) {\n    return ((test(current) > bias*test(next))? current : next);\n}\n\nvoid main() {\n    /**\n     * @todo This was needed in `./direct-main.frag` - is it needed here too?\n     */\n    vec2 uv = gl_FragCoord.xy/dataRes;\n    // vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n    \n    vec4 state = texture2D(particles, uv);\n\n    vec4 baseSeed = state+vec4(uv, uv)+vec4(1.2345+(time*0.001));\n\n    for(float n = 0.0; n < samples; n += 1.0) {\n        vec4 seed = baseSeed+vec4(n);\n        vec2 spawnUV = mod(vec2(random(seed.xy), random(seed.zw)), 1.0);\n        vec4 other = compose(spawnUV, spawnToPos(spawnUV),\n                texture2D(spawnData, spawnUV));\n\n        state = pick(state, vec4(other.xy, other.zw*speed));\n    }\n\n    gl_FragColor = state;\n}\n\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\nuniform float flowDecay;\n\n/**\n * Use the pixel position, and the particle velocity.\n * Same data structure as the flow.\n *\n * @requires {float} time The current time\n * @requires {float} decay The rate of decay of the flow over time\n */\n\n// Time/decay\n\nvec2 get(vec3 data, float time, float decay) {\n    return data.xy*max(0.0, 1.0-((time-data.z)*decay));\n}\n\nvec2 get(vec4 data, float time, float decay) {\n    return get(data.xyz, time, decay);\n}\n\n// No time/decay\n\nvec2 get(vec2 data) {\n    return data.xy;\n}\n\nvec2 get(vec3 data) {\n    return get(data.xy);\n}\n\nvec2 get(vec4 data) {\n    return get(data.xy);\n}\n\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    return vec4(pos, get(pixel, time, flowDecay));\n}\n\n/**\n * Pick the Highest velocity.\n * Uses the same data structure as the particles.\n */\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\nfloat test(vec4 data) {\n    return length2(data.zw);\n}\n\nconst float samples = 5.0;\n\n/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n * @requires {function} test A function that returns a float value for a given\n *                           `vec4` state; greater values win the comparison.\n */\n\n// Over 1 favours changing to new data; under 1 favours current data.\nuniform float bias;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\n\nvec4 pick(vec4 current, vec4 next) {\n    return ((test(current) > bias*test(next))? current : next);\n}\n\nvoid main() {\n    /**\n     * @todo This was needed in `./direct-main.frag` - is it needed here too?\n     */\n    vec2 uv = gl_FragCoord.xy/dataRes;\n    // vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n    \n    vec4 state = texture2D(particles, uv);\n\n    vec4 baseSeed = state+vec4(uv, uv)+vec4(1.2345+(time*0.001));\n\n    for(float n = 0.0; n < samples; n += 1.0) {\n        vec4 seed = baseSeed+vec4(n);\n        vec2 spawnUV = mod(vec2(random(seed.xy), random(seed.zw)), 1.0);\n        vec4 other = apply(spawnUV, spawnToPos(spawnUV),\n                texture2D(spawnData, spawnUV));\n\n        state = pick(state, vec4(other.xy, other.zw*speed));\n    }\n\n    gl_FragColor = state;\n}\n\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\n// `import`-able convenience for setting up a vignette - should be replaced with\n// a proper `uniform`-ed version.\n\nconst vec3 curve = vec3(0.1, 1.0, 1.0);\nconst vec2 mid = vec2(0.5);\nconst float limit = 0.6;\n\n// #pragma glslify: vignette = require(../../filter/pass/vignette, curve = curve, mid = mid, limit = limit)\n\n/**\n * Identity\n */\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    return pixel;\n}\n\n/**\n * @requires {vec2} mid The center of the vignette\n * @requires {float} limit The radius of the vignette\n * @requires {(float|vec2|vec3|vec4)} curve Bezier curve points, shaping falloff\n */\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nvec4 pass(vec2 uv, vec4 pixel) {\n    return pixel*vignette(uv, mid, limit, curve);\n}\n\n/**\n * A way to easily compose filter passes on the pixel before applying it.\n *\n * @see `../../../filter/`\n * @see `./`\n * @requires {function} pass The filter pass function, given the pixel.\n * @requires {function} apply The apply function, given the result of `pass`.\n */\n\nvec4 compose(vec2 uv, vec2 pos, vec4 pixel) {\n    return apply(uv, pos, pass(uv, pixel));\n}\n\n/**\n * Pick the Highest velocity.\n * Uses the same data structure as the particles.\n */\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\nfloat test(vec4 data) {\n    return length2(data.zw);\n}\n\nconst float samples = 2.0;\n\n/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n * @requires {function} test A function that returns a float value for a given\n *                           `vec4` state; greater values win the comparison.\n */\n\n// Over 1 favours changing to new data; under 1 favours current data.\nuniform float bias;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\n\nvec4 pick(vec4 current, vec4 next) {\n    return ((test(current) > bias*test(next))? current : next);\n}\n\nvoid main() {\n    /**\n     * @todo This was needed in `./direct-main.frag` - is it needed here too?\n     */\n    vec2 uv = gl_FragCoord.xy/dataRes;\n    // vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n    \n    vec4 state = texture2D(particles, uv);\n\n    vec4 baseSeed = state+vec4(uv, uv)+vec4(1.2345+(time*0.001));\n\n    for(float n = 0.0; n < samples; n += 1.0) {\n        vec4 seed = baseSeed+vec4(n);\n        vec2 spawnUV = mod(vec2(random(seed.xy), random(seed.zw)), 1.0);\n        vec4 other = compose(spawnUV, spawnToPos(spawnUV),\n                texture2D(spawnData, spawnUV));\n\n        state = pick(state, vec4(other.xy, other.zw*speed));\n    }\n\n    gl_FragColor = state;\n}\n\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.spawnBall = t.defaults = void 0;
        var a = n(138),
            o = i(a),
            s = n(140),
            u = r(s),
            c = t.defaults = function() {
                return {
                    shader: [o.defaults().shader[0], u.default],
                    uniforms: {
                        radius: 1,
                        speed: 0
                    }
                }
            },
            l = c(),
            f = t.spawnBall = function(e, t) {
                return o.spawner(e, Object.assign(l, t))
            };
        t.default = f
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.spawner = t.defaults = void 0;
        var a = n(53),
            o = r(a),
            s = n(121),
            u = r(s),
            c = n(139),
            l = r(c),
            f = t.defaults = function() {
                return {
                    shader: [u.default, l.default],
                    uniforms: null
                }
            },
            d = t.spawner = function(e, t) {
                var n = Object.assign(f(), t);
                return {
                    gl: e,
                    uniforms: n.uniforms,
                    shader: Array.isArray(n.shader) ? o.default.apply(void 0, [e].concat(i(n.shader))) : n.shader,
                    spawn: function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        e.spawnShader.apply(e, [this.shader, this.uniforms].concat(n))
                    }
                }
            };
        t.default = d
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nconst vec2 inert = vec2(-1000000.0);\n\nconst vec2 pos = vec2(inert);\nconst vec2 vel = vec2(0.0);\n\nvoid main() {\n    gl_FragColor = vec4(pos, vel);\n}\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform float radius;\nuniform float speed;\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec2 angleToVec(float rad) {\n    return vec2(cos(rad), sin(rad));\n}\n\nconst float tau = 6.28318530717958647692;\n\nvoid main() {\n    vec4 randoms = vec4(random((gl_FragCoord.xy*1.7654)+2.3675),\n        random((gl_FragCoord.xy*1.23494)+0.36434),\n        random((gl_FragCoord.xy*0.327789)+3.498787),\n        random((gl_FragCoord.xy*9.0374)+0.2773));\n\n    gl_FragColor = vec4(angleToVec(randoms.x*tau)*randoms.y*radius,\n        angleToVec(randoms.z*tau)*randoms.w*speed);\n}\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GeometrySpawner = t.defaults = void 0;
        var c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r)
                }
                if ("value" in i) return i.value;
                var o = i.get;
                if (void 0 !== o) return o.call(r)
            },
            f = n(105),
            d = i(f),
            h = n(53),
            p = i(h),
            v = n(52),
            m = n(132),
            g = r(m),
            y = n(142),
            b = i(y),
            _ = n(143),
            w = i(_),
            E = n(144),
            A = i(E),
            x = t.defaults = function() {
                return {
                    shader: [g.defaults().shader[0], b.default],
                    drawShader: [w.default, A.default],
                    color: [1, 1, 1, 1],
                    positions: Array(6).fill(0)
                }
            },
            M = t.GeometrySpawner = function(e) {
                function t(e, n) {
                    o(this, t);
                    var r = Object.assign(x(), n),
                        i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, Object.assign(x(), n)));
                    return i.geometry = (0, d.default)(e), i.drawShader = Array.isArray(r.drawShader) ? p.default.apply(void 0, [i.gl].concat(a(r.drawShader))) : r.drawShader, i.color = r.color, i.positions = r.positions, i
                }
                return u(t, e), c(t, [{
                    key: "shuffle",
                    value: function() {
                        for (var e = 2, t = 3, n = e * t, r = 2 * Math.PI, i = void 0, a = function() {
                                return .25 + 1.3 * Math.random()
                            }, o = this.positions.length - 1; o >= 0; o -= n) {
                            var s = r * Math.random(),
                                u = r * (.01 + .25 * Math.round(Math.random()) + .03 * Math.random());
                            i = a(), this.positions[o - 3] = Math.cos(s - u) * i, this.positions[o - 2] = Math.sin(s - u) * i, i = a(), this.positions[o - 1] = Math.cos(s + u) * i, this.positions[o - 0] = Math.sin(s + u) * i
                        }
                        return this.geometry.attr("position", this.positions, {
                            size: e
                        }), this
                    }
                }, {
                    key: "spawn",
                    value: function(e) {
                        var n;
                        v.vec2.scale(this.buffer.shape, e.viewRes, .2), this.buffer.bind(), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.drawShader.bind(), this.drawShader.uniforms.color = this.color, this.drawShader.uniforms.viewSize = e.viewSize, this.geometry.bind(this.drawShader), this.geometry.draw(), this.geometry.unbind();
                        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                        return (n = l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "spawn", this)).call.apply(n, [this, e].concat(i))
                    }
                }]), t
            }(g.PixelSpawner);
        t.default = M
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\n/**\n * Directly uses a normal image - brightness being speed in a random direction.\n */\n\nfloat luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nfloat luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n\nconst float tau = 6.28318530717958647692;\n\nvec2 angleToVec(float rad) {\n    return vec2(cos(rad), sin(rad));\n}\n\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    return vec4(pos,\n        angleToVec(mod(random(uv*dot(pixel.rg, pixel.ba)), 1.0)*tau)*\n            luma(pixel)*pixel.a);\n}\n\n/**\n * Pick the Highest velocity.\n * Uses the same data structure as the particles.\n */\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\nfloat test(vec4 data) {\n    return length2(data.zw);\n}\n\nconst float samples = 6.0;\n\n/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n * @requires {function} test A function that returns a float value for a given\n *                           `vec4` state; greater values win the comparison.\n */\n\n// Over 1 favours changing to new data; under 1 favours current data.\nuniform float bias;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\n\nvec4 pick(vec4 current, vec4 next) {\n    return ((test(current) > bias*test(next))? current : next);\n}\n\nvoid main() {\n    /**\n     * @todo This was needed in `./direct-main.frag` - is it needed here too?\n     */\n    vec2 uv = gl_FragCoord.xy/dataRes;\n    // vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n    \n    vec4 state = texture2D(particles, uv);\n\n    vec4 baseSeed = state+vec4(uv, uv)+vec4(1.2345+(time*0.001));\n\n    for(float n = 0.0; n < samples; n += 1.0) {\n        vec4 seed = baseSeed+vec4(n);\n        vec2 spawnUV = mod(vec2(random(seed.xy), random(seed.zw)), 1.0);\n        vec4 other = apply(spawnUV, spawnToPos(spawnUV),\n                texture2D(spawnData, spawnUV));\n\n        state = pick(state, vec4(other.xy, other.zw*speed));\n    }\n\n    gl_FragColor = state;\n}\n\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\n\nuniform vec2 viewSize;\n\nvoid main() {\n    gl_Position = vec4(position*viewSize, 0.0, 1.0);\n}\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec4 color;\n\nvoid main() {\n    gl_FragColor = color;\n}\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AudioTrigger = t.defaultTest = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(83),
            s = n(146),
            u = r(s),
            c = n(148),
            l = r(c),
            f = n(149),
            d = n(156),
            h = t.defaultTest = function(e) {
                return (0, d.peak)(e.dataOrder(-1)) > e.limit
            },
            p = t.AudioTrigger = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
                        a = this,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    i(this, e), this.analyser = t, this.orderLog = (0, f.makeOrderLog)(n, function(e) {
                        return (0, f.makeLog)(e, function() {
                            return (0, l.default)(a.analyser, e === n ? Uint8Array : Float32Array)
                        })
                    }), this.limit = r, this.test = o, this.react = s
                }
                return a(e, [{
                    key: "sample",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "frequencies";
                        return this.analyser[t]((0, o.step)(this.orderLog[0])), (0, d.orderLogRates)(this.orderLog, e), this
                    }
                }, {
                    key: "dataOrder",
                    value: function(e) {
                        return (0, o.wrapIndex)(e, this.orderLog)[0]
                    }
                }, {
                    key: "fire",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.react,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.test || h,
                            n = !!t(this);
                        return n && e(this), n
                    }
                }, {
                    key: "clear",
                    value: function() {
                        (0, u.default)(function(e) {
                            return (0, u.default)(function(e) {
                                return (0, u.default)(function(t, n) {
                                    return e[n] = 0
                                }, e)
                            }, e)
                        }, this.orderLog)
                    }
                }]), e
            }();
        t.default = p
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.each = t.eachList = void 0;
        var i = n(147),
            a = r(i),
            o = t.eachList = function(e, t) {
                return Array.prototype.forEach.call(t, e), t
            },
            s = t.each = function(e, t) {
                return o(function(n, r, i) {
                    return e(t[n], n, t, r, i)
                }, (0, a.default)(t)), t
            };
        t.default = s
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.iterable = function(e) {
            return e ? Object.keys(e) : []
        };
        t.default = n
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.makeData = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint8Array;
            return new t((e.analyser ? e.analyser[0] || e.analyser : e[0] || e).frequencyBinCount)
        };
        t.default = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.makeOrderLog = t.makeLog = void 0;
        var i = n(150),
            a = r(i),
            o = t.makeLog = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                    return []
                };
                return (0, a.default)(e, t)
            },
            s = t.makeOrderLog = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                return (0, a.default)(e, function(n) {
                    return t(e - n)
                })
            };
        t.default = s
    }, function(e, t, n) {
        function r(e, t) {
            if (e = o(e), e < 1 || e > s) return [];
            var n = u,
                r = c(e, u);
            t = a(t), e -= u;
            for (var l = i(r, t); ++n < e;) t(n);
            return l
        }
        var i = n(151),
            a = n(152),
            o = n(154),
            s = 9007199254740991,
            u = 4294967295,
            c = Math.min;
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : i
        }
        var i = n(153);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = i(e),
                n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        var i = n(155);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if (!e) return 0 === e ? e : 0;
            if (e = i(e), e === a || e === -a) {
                var t = e < 0 ? -1 : 1;
                return t * o
            }
            return e === e ? e : 0
        }
        var i = n(37),
            a = 1 / 0,
            o = 1.7976931348623157e308;
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = 1, r = e.length; n < r; ++n) u(e[n - 1][1], e[n - 1][0], t, (0, s.step)(e[n]));
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.meanWeight = t.mean = t.sumWeight = t.sum = t.peakPos = t.peak = t.logRates = void 0, t.orderLogRates = r;
        var i = n(157),
            a = n(158),
            o = n(159),
            s = n(83),
            u = t.logRates = function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Uint8Array(e.length);
                return (0, a.mapList)(function(e, r) {
                    return (0, i.eulerDyDt)(e, t[r], n)
                }, e, r)
            },
            c = (t.peak = function(e) {
                return (0, o.reduceList)(function(e, t) {
                    return Math.abs(t) > Math.abs(e) ? t : e
                }, e, 0)
            }, t.peakPos = function(e) {
                return (0, o.reduceList)(function(e, t, n) {
                    return Math.abs(t) > Math.abs(e.peak) && (e.peak = t, e.pos = n), e
                }, e, {
                    peak: 0,
                    pos: -1
                })
            }, t.sum = function(e) {
                return (0, o.reduceList)(function(e, t) {
                    return e + Math.abs(t)
                }, e, 0)
            }),
            l = t.sumWeight = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
                return (0, o.reduceList)(function(n, r, i) {
                    return n + Math.abs(r * (1 - Math.abs(i / (e.length - 1) - t)))
                }, e, 0)
            };
        t.mean = function(e) {
            return c(e) / e.length
        }, t.meanWeight = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
            return l(e, t) / e.length
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.euler = function(e, t, n) {
            return t + e * n
        };
        t.eulerDyDt = function(e, t, n) {
            return (t - e) / n
        };
        t.default = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.map = t.mapList = void 0;
        var i = n(159),
            a = n(147),
            o = r(a),
            s = (t.mapList = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return (0, i.reduceList)(function(n, r, i) {
                    return n[i] = e(r, i, t), n
                }, t, n)
            }, t.map = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return (0, i.reduceList)(function(n, r, i, a) {
                    return n[r] = e(t[r], r, t, i, a), n
                }, (0, o.default)(t), n)
            });
        t.default = s
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.reduce = t.reduceList = void 0;
        var i = n(147),
            a = r(i),
            o = t.reduceList = function(e, t, n) {
                return void 0 === n ? Array.prototype.reduce.call(t, e) : Array.prototype.reduce.call(t, e, n)
            },
            s = t.reduce = function(e, t, n) {
                return o(void 0 === n ? function(n, r, i, a) {
                    return e(i ? n : t[n], t[r], r, t, i, a)
                } : function(n, r, i, a) {
                    return e(n, t[r], r, t, i, a)
                }, (0, a.default)(t), n)
            };
        t.default = s
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AudioTexture = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(88),
            s = r(o),
            u = n(89),
            c = r(u),
            l = n(161),
            f = r(l),
            d = n(158),
            h = n(162),
            p = function(e) {
                return e
            },
            v = t.AudioTexture = function() {
                function e(t, n, r) {
                    i(this, e), this.gl = t, this.array = n && n.length ? (0, c.default)(n, [n.length, 1]) : (0, f.default)(n) ? (0, c.default)(new Float32Array(n), [n, 1]) : n, this.texture = r || (0, s.default)(t, this.array, {
                        float: !0
                    })
                }
                return a(e, [{
                    key: "apply",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.array;
                        return this.texture.setPixels(e), this
                    }
                }, {
                    key: "assign",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.array.data;
                        return (0, d.mapList)(p, e, this.array.data), this
                    }
                }, {
                    key: "waveform",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.array.data;
                        return (0, d.mapList)(h.waveformMap, e, this.array.data), this
                    }
                }, {
                    key: "frequencies",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.array.data;
                        return (0, d.mapList)(h.frequencyMap, e, this.array.data), this
                    }
                }]), e
            }();
        t.default = v
    }, function(e, t, n) {
        function r(e) {
            return "number" == typeof e || a(e) && i(e) == o
        }
        var i = n(39),
            a = n(43),
            o = "[object Number]";
        e.exports = r
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.waveformScale = 1 / 128,
            r = (t.waveformMap = function(e) {
                return (e - 128) * n
            }, t.frequencyScale = 1 / 256);
        t.frequencyMap = function(e) {
            return e * r
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FlowLines = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(164),
            s = r(o),
            u = n(159),
            c = r(u),
            l = t.FlowLines = function() {
                function e(t) {
                    i(this, e), this.gl = t, this.active = {}
                }
                return a(e, [{
                    key: "get",
                    value: function(e, t) {
                        return this.active[e] || (this.active[e] = new s.default(this.gl, t))
                    }
                }, {
                    key: "trim",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return (0, c.default)(function(e, n, r, i) {
                            return 0 === n.trim.apply(n, t) && delete i[r] ? e : e + 1
                        }, this.active, 0)
                    }
                }]), e
            }();
        t.default = l
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FlowLine = void 0;
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(165),
            u = r(s),
            c = n(175),
            l = r(c),
            f = n(176),
            d = r(f),
            h = function(e, t) {
                return e < 0 ? t + e : e % t
            },
            p = t.FlowLine = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e), this.line = new u.default(t, a({
                        shader: [l.default, d.default],
                        uniforms: a({}, (0, s.defaults)().uniforms, {
                            speed: 3,
                            speedLimit: .01,
                            rad: .1,
                            crestShape: .6
                        }),
                        attributes: a({}, (0, s.defaults)().attributes, {
                            previous: {
                                getSize: function(e) {
                                    return e.vertSize
                                }
                            },
                            time: {
                                size: 1
                            },
                            dt: {
                                size: 1
                            }
                        })
                    }, n)), this.times = n.times || []
                }
                return o(e, [{
                    key: "update",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.setAttributes,
                            t = this.line.closed && this.line.path.length ? this.times.concat(this.times[0]) : this.times;
                        return this.line.update(function() {
                            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return e.apply(void 0, [t].concat(r))
                        }), this
                    }
                }, {
                    key: "draw",
                    value: function() {
                        var e;
                        return (e = this.line).draw.apply(e, arguments), this
                    }
                }, {
                    key: "setAttributes",
                    value: function(e, t, n, r, i) {
                        i.setAttributes(t, n, r, i);
                        var a = i.closed ? h(n.path - 1, i.path.length) : Math.max(0, n.path - 1);
                        r.previous.data.set(i.path[a], n.data * r.previous.size);
                        var o = e[n.path];
                        r.time.data[n.data] = o, r.dt.data[n.data] = o - e[a]
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        return this.times.push(e), this.line.path.push(t), this
                    }
                }, {
                    key: "insert",
                    value: function(e, t) {
                        var n = this.findIndex(e);
                        return this.times.splice(n, 0, e), this.line.path.splice(n, 0, t), this
                    }
                }, {
                    key: "at",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return t.time = this.times[e], t.point = this.line.path[e], t
                    }
                }, {
                    key: "findIndex",
                    value: function(e) {
                        var t = this.times.findIndex(function(t) {
                            return t > e
                        });
                        return t < 0 ? this.times.length : t
                    }
                }, {
                    key: "trim",
                    value: function(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(), n = this.times, r = this.line.path, i = t - e; n[0] < i;) n.shift(), r.shift();
                        return this.length
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this.times.length
                    }
                }]), e
            }();
        t.default = p
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Line = t.defaults = void 0;
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(105),
            c = r(u),
            l = n(166),
            f = r(l),
            d = n(53),
            h = r(d),
            p = n(146),
            v = r(p),
            m = n(173),
            g = r(m),
            y = n(174),
            b = r(y),
            _ = t.defaults = function() {
                return {
                    shader: [g.default, b.default],
                    uniforms: {
                        color: [1, 1, 1, 1],
                        rad: .1,
                        viewSize: [1, 1]
                    },
                    attributes: null,
                    vertNum: 2,
                    vertSize: 2,
                    path: [],
                    closed: !1
                }
            },
            w = t.Line = function() {
                function e(t, n) {
                    var r = this;
                    a(this, e);
                    var s = o({}, _(), n);
                    this.gl = t, this.uniforms = s.uniforms, this.shader = Array.isArray(s.shader) ? h.default.apply(void 0, [t].concat(i(s.shader))) : s.shader, this.vertNum = s.vertNum, this.vertSize = s.vertSize, this.path = s.path || [], this.closed = s.closed, this.attributes = o({
                        position: {
                            data: null,
                            getSize: function() {
                                return r.vertSize
                            }
                        },
                        normal: {
                            data: null,
                            getSize: function() {
                                return r.vertSize
                            }
                        },
                        miter: {
                            data: null,
                            size: 1
                        }
                    }, s.attributes), this.drawnPath = this.drawnNormals = null, this.geometry = (0, c.default)(t)
                }
                return s(e, [{
                    key: "update",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.setAttributes;
                        this.drawnPath = this.path, this.drawnNormals = (0, f.default)(this.drawnPath, this.closed), this.closed && this.path.length && (this.drawnPath = this.drawnPath.concat(this.drawnPath[0]), this.drawnNormals.push(this.drawnNormals[0])), this.initAttributes();
                        for (var n = this.drawnPath, r = this.drawnNormals, i = this.attributes, a = this.vertNum, o = {}, s = {}, u = 0, c = r.length; u < c; ++u) {
                            var l = r[u];
                            o.point = n[u], o.normal = l[0], o.miter = l[1], s.path = u, s.point = u * a;
                            for (var d = 0; d < a; ++d) s.vert = d, s.data = s.point + d, t(o, s, i, this)
                        }
                        return (0, v.default)(function(t, n) {
                            return e.geometry.attr(n, t.data, {
                                size: t.size
                            })
                        }, i), this
                    }
                }, {
                    key: "draw",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.gl.TRIANGLE_STRIP;
                        if (this.path.length > 0) {
                            var t;
                            this.geometry.bind(this.shader), Object.assign(this.shader.uniforms, this.uniforms);
                            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            (t = this.geometry).draw.apply(t, [e].concat(r))
                        }
                        return this
                    }
                }, {
                    key: "initAttributes",
                    value: function() {
                        var e = this,
                            t = this.drawnPath.length * this.vertNum;
                        return (0, v.default)(function(n) {
                            n.getSize && (n.size = n.getSize(e));
                            var r = t * n.size;
                            n.data && n.data.length === r || (n.data = new Float32Array(r))
                        }, this.attributes), this
                    }
                }, {
                    key: "setAttributes",
                    value: function(e, t, n) {
                        n.position.data.set(e.point, t.data * n.position.size), n.normal.data.set(e.normal, t.data * n.normal.size), n.miter.data[t.data] = e.miter * (t.data % 2 * 2 - 1)
                    }
                }]), e
            }();
        t.default = w
    }, function(e, t, n) {
        function r(e, t, n) {
            e.push([
                [t[0], t[1]], n
            ])
        }
        var i = n(167),
            a = [0, 0],
            o = [0, 0],
            s = [0, 0],
            u = [0, 0];
        e.exports = function(e, t) {
            var n = null,
                c = [];
            t && (e = e.slice(), e.push(e[0]));
            for (var l = e.length, f = 1; f < l; f++) {
                var d = e[f - 1],
                    h = e[f],
                    p = f < e.length - 1 ? e[f + 1] : null;
                if (i.direction(a, h, d), n || (n = [0, 0], i.normal(n, a)), 1 === f && r(c, n, 1), p) {
                    i.direction(o, p, h);
                    var v = i.computeMiter(s, u, a, o, 1);
                    r(c, u, v)
                } else i.normal(n, a), r(c, n, 1)
            }
            if (e.length > 2 && t) {
                var m = e[l - 2],
                    g = e[0],
                    y = e[1];
                i.direction(a, g, m), i.direction(o, y, g), i.normal(n, a);
                var b = i.computeMiter(s, u, a, o, 1);
                c[0][0] = u.slice(), c[l - 1][0] = u.slice(), c[0][1] = b, c[l - 1][1] = b, c.pop()
            }
            return c
        }
    }, function(e, t, n) {
        var r = n(168),
            i = n(169),
            a = n(170),
            o = n(171),
            s = n(172),
            u = [0, 0];
        e.exports.computeMiter = function(e, t, n, o, c) {
            return r(e, n, o), a(e, e), i(t, -e[1], e[0]), i(u, -n[1], n[0]), c / s(t, u)
        }, e.exports.normal = function(e, t) {
            return i(e, -t[1], t[0]), e
        }, e.exports.direction = function(e, t, n) {
            return o(e, t, n), a(e, e), e
        }
    }, function(e, t) {
        function n(e, t, n) {
            return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t, n) {
            return e[0] = t, e[1] = n, e
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t) {
            var n = t[0],
                r = t[1],
                i = n * n + r * r;
            return i > 0 && (i = 1 / Math.sqrt(i), e[0] = t[0] * i, e[1] = t[1] * i), e
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t, n) {
            return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t) {
            return e[0] * t[0] + e[1] * t[1]
        }
        e.exports = n
    }, function(e, t) {
        e.exports = "/**\n * Drawing lines in a vertex shader, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2\n * Pushes a point along its normal by its radius.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\n\nuniform vec2 viewSize;\n\nattribute vec2 normal;\nattribute float miter;\n\nuniform float rad;\n\nvarying float sdf;\n\n/**\n * Drawing lines, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2\n * Pushes a point along its normal by its radius, in the direction of miter.\n */\n\nvec2 expand(vec2 position, vec2 normal, float rad, float miter) {\n    return position+(normal*rad*miter);\n}\n\nvoid main() {\n    vec2 pos = expand(position, normal, rad, miter);\n\n    sdf = sign(miter);\n\n    gl_Position = vec4(pos*viewSize, 0.0, 1.0);\n}\n"
    }, function(e, t) {
        e.exports = "/**\n * For a smooth line, check distance from line per-fragment.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec4 color;\n\nvarying float sdf;\n\nvoid main() {\n    gl_FragColor = vec4(color.rgb, color.a-abs(sdf));\n}\n"
    }, function(e, t) {
        e.exports = "/**\n * Drawing lines in a vertex shader, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2\n * Pushes a point along its normal by its radius.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\n\nuniform vec2 viewSize;\n\nattribute vec2 normal;\nattribute float miter;\n\nuniform float rad;\n\nuniform float speed;\nuniform float speedLimit;\n// uniform float time;\n\nattribute vec2 previous;\nattribute float time;\nattribute float dt;\n\nvarying vec4 values;\nvarying vec2 crest;\nvarying float sdf;\n\n/**\n * @requires {float} time The current time in ms\n */\n\nvec4 flow(vec2 vel) {\n    // Faster particles leave a greater influence (opacity).\n    // Linear interpolation - inaccurate for vectors, will it be OK without\n    // sudden turns, or do we need a per-fragment lookup?\n    return vec4(vel, time, length(vel));\n}\n\nvec4 flow(vec2 vel, float speedLimit) {\n    vec4 values = flow(vel);\n\n    return vec4(values.xyz, min(values.a/speedLimit, 1.0));\n}\n\n// #pragma glslify: flow = require(../flow/apply/screen, time = time, flowDecay = 0.001)\n\nvec2 perp(vec2 vec) {\n    return vec2(-vec.y, vec.x);\n}\n\nvec2 perp(vec2 vec, bool anti) {\n    return ((anti)? vec2(vec.y, -vec.x) : perp(vec));\n}\n\n/**\n * Drawing lines, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2\n * Pushes a point along its normal by its radius, in the direction of miter.\n */\n\nvec2 expand(vec2 position, vec2 normal, float rad, float miter) {\n    return position+(normal*rad*miter);\n}\n\nvoid main() {\n    sdf = sign(miter);\n\n    float rate = speed/max(dt, 1.0);\n\n    // @note For some reason, using these have different effects.\n    vec2 vel = (position-previous)*rate;\n    // vec2 vel = perp(normal, true)*length(position-previous)*rate;\n\n    values = flow(vel, speedLimit);\n\n    crest = normal*miter;\n\n    vec2 vert = expand(position, normal, rad*values.a, miter);\n\n    gl_Position = vec4(vert*viewSize, 0.0, 1.0);\n}\n"
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\n// Where the crest limit is (0 is the path direction, 1 is perpendicular/away).\nuniform float crestShape;\n\nvarying vec4 values;\nvarying vec2 crest;\nvarying float sdf;\n\nvoid main() {\n    float d = abs(sdf);\n    float speed = length(values.rg)*(1.0-d);\n\n    vec2 vel = normalize(mix(values.rg, crest, d*crestShape))*speed;\n\n    gl_FragColor = vec4(vel, values.b, values.a-d);\n}\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e && (Object.assign(t, e.apply), (0, l.default)(e, t), (0, d.default)(function(n) {
                return n(t, e)
            }, e.call)), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Player = t.apply = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(178),
            u = r(s),
            c = n(182),
            l = r(c),
            f = n(146),
            d = r(f),
            h = n(159),
            p = r(h),
            v = n(158),
            m = r(v);
        t.apply = a;
        var g = t.Player = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, e), this.tracks = t, this.outputs = n, this.add(this.tracks)
            }
            return o(e, [{
                key: "add",
                value: function(e) {
                    return (0, m.default)(function(e) {
                        return e instanceof u.default ? e : new u.default(e)
                    }, e, this.tracks), this
                }
            }, {
                key: "import",
                value: function(e) {
                    var t = this;
                    return (0, d.default)(function(e) {
                        return (0, d.default)(function(e) {
                            return t.add(e)
                        }, e.tracks)
                    }, e), this
                }
            }, {
                key: "each",
                value: function(e) {
                    return (0, d.default)(e, this.tracks), this
                }
            }, {
                key: "apply",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.outputs;
                    return this.each(function(n, r) {
                        for (var i = arguments.length, o = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) o[s - 2] = arguments[s];
                        var u = t[r] || (t[r] = {});
                        return a(e.apply(void 0, [n, r].concat(o, [u])), u)
                    }), this
                }
            }, {
                key: "seek",
                value: function(e, t) {
                    return this.apply(function(t) {
                        return t.seek(e)
                    }, t)
                }
            }, {
                key: "play",
                value: function(e, t) {
                    return this.apply(function(t) {
                        return t.play(e)
                    }, t)
                }
            }, {
                key: "playFrom",
                value: function(e, t, n) {
                    return this.apply(function(n) {
                        return n.playFrom(e, t)
                    }, n)
                }
            }, {
                key: "frames",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return (0, m.default)(function(e) {
                        return e.frames
                    }, this.tracks, e)
                }
            }, {
                key: "start",
                value: function() {
                    return (0, p.default)(function(e, t) {
                        return Math.min(t.start(), e)
                    }, this.tracks, null)
                }
            }, {
                key: "end",
                value: function() {
                    return (0, p.default)(function(e, t) {
                        return Math.min(t.end(), e)
                    }, this.tracks, null)
                }
            }, {
                key: "duration",
                value: function() {
                    return (this.end() || 0) - (this.start() || 0)
                }
            }]), e
        }();
        t.default = g
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Timeline = t.changed = t.within = t.offset = t.sort = t.order = void 0;
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(51),
            c = r(u),
            l = n(179),
            f = r(l),
            d = n(180),
            h = r(d),
            p = n(146),
            v = r(p),
            m = n(181),
            g = r(m),
            y = n(147),
            b = r(y),
            _ = t.order = function(e, t) {
                return e.time > t.time ? 1 : -1
            },
            w = t.sort = function(e) {
                return e.sort(_)
            },
            E = t.offset = function(e, t, n) {
                var r = Math.min(e.time, t.time);
                return (0, c.default)((n - r) / (Math.max(e.time, t.time) - r) || 0, 0, 1)
            },
            A = t.within = function(e, t, n) {
                return Math.min(e.time, t.time) < n && n <= Math.max(e.time, t.time)
            },
            x = t.changed = function(e, t) {
                return e === t ? null : (0, b.default)(e).length && (0, b.default)(t).length ? (0, g.default)(function(t, n) {
                    return t !== e[n]
                }, t) : t
            },
            M = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (t.apply = Object.assign(t.apply || {}, e.to), e.call && e.call.length) {
                    var n;
                    (n = t.call || (t.call = [])).push.apply(n, a(e.call))
                }
                return t
            },
            T = t.Timeline = function() {
                function e(t) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    i(this, e), this.frames = this.setup(t, n), this.time = 0, this.gap = -1, this.span = void 0, this.symmetric = a, this.infinite = n, this.rewind = r
                }
                return s(e, [{
                    key: "setup",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return this.frames = w(t ? [{
                            time: -(1 / 0)
                        }].concat(a(e), [{
                            time: 1 / 0
                        }]) : [].concat(a(e)))
                    }
                }, {
                    key: "merge",
                    value: function(e) {
                        var t = this;
                        return (0, v.default)(function(e) {
                            return t.add(e)
                        }, e)
                    }
                }, {
                    key: "insertFrame",
                    value: function(e, t) {
                        return this.frames.splice(e, 0, t), this
                    }
                }, {
                    key: "add",
                    value: function() {
                        var e = f.default.apply(void 0, arguments),
                            t = this.indexOf(e);
                        return this.insertFrame(t, e), t
                    }
                }, {
                    key: "addSpan",
                    value: function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        var i = this.add.apply(this, n),
                            a = this.frames[i].time - e,
                            o = this.frames[i - 1];
                        return e && (!o || o.time < a) && this.add(null, a), i
                    }
                }, {
                    key: "seek",
                    value: function(e) {
                        return this.valid() && A(this.span.past, this.span.next, e) ? this.span.t = E(this.span.past, this.span.next, e) : this.setTime(e), this.span
                    }
                }, {
                    key: "play",
                    value: function(e) {
                        var t = Math.max(this.gap, .5),
                            n = this.seek(e);
                        if (this.valid()) {
                            var r = {},
                                i = this.gap - t,
                                a = Math.abs(i),
                                s = Math.sign(i),
                                u = (this.reverse ? -s : s) > 0;
                            if (a > 0 && u)
                                for (var c = s < 0 ? Math.floor : Math.ceil, l = 0; l < a; ++l) M(this.frames[c(t + l * s)], r);
                            n = o({}, n, r)
                        }
                        return n
                    }
                }, {
                    key: "playFrom",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.time,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return this.seek(t), this.play(e)
                    }
                }, {
                    key: "setTime",
                    value: function(e) {
                        var t = this.gapAt(e);
                        return this.span = this.spanGapAt(e, t, this.span), this.gap = t, this.time = e, this
                    }
                }, {
                    key: "indexOf",
                    value: function(e) {
                        var t = this.frames.findIndex(function(t) {
                            return _(t, e) > 0
                        });
                        return t < 0 ? this.frames.length : t
                    }
                }, {
                    key: "gapAt",
                    value: function(e) {
                        if (this.frames.length < 2) return -1;
                        var t = this.frames.findIndex(function(t) {
                            return t.time >= e
                        });
                        return (t < 0 ? this.frames.length - 1 : Math.max(t, 1)) - .5
                    }
                }, {
                    key: "spanGapAt",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.gapAt(e),
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (t >= 0) {
                            var r = this.frames[Math.floor(t)],
                                i = this.frames[Math.ceil(t)],
                                a = i.ease;
                            if (this.rewind) {
                                this.symmetric || (a = r.ease);
                                var o = r;
                                r = i, i = o
                            }
                            n.past = r, n.next = i, n.a = r.to, n.b = i.to, n.t = E(r, i, e), n.ease = a
                        } else n = void 0;
                        return n
                    }
                }, {
                    key: "splice",
                    value: function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            r = t,
                            i = n;
                        if (this.infinite) {
                            var a = Math.max(0, this.frames.length - 2),
                                o = t < 0 ? a + t : t;
                            r = Math.min(a, Math.max(1, o)), i = Math.min(n - Math.max(r - o, 0), a - r)
                        }
                        for (var s = arguments.length, u = Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) u[c - 2] = arguments[c];
                        return (e = this.frames).splice.apply(e, [r, i].concat(u))
                    }
                }, {
                    key: "spliceIndex",
                    value: function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return this.splice.apply(this, [e, 1].concat(n))[0]
                    }
                }, {
                    key: "spliceAt",
                    value: function(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, n = this.gapAt(e), r = (this.reverse ? -1 : 1) * t, i = (r > 0 ? Math.ceil : Math.floor)(n), a = arguments.length, o = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) o[s - 2] = arguments[s];
                        return this.splice.apply(this, [i, 1].concat(o))[0]
                    }
                }, {
                    key: "spliceSpan",
                    value: function(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = this.gapAt(t), r = this.gapAt(t + e), i = Math.min(n, r), a = arguments.length, o = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) o[s - 2] = arguments[s];
                        return this.splice.apply(this, [Math.ceil(i), Math.floor(Math.max(n, r) - i)].concat(o))
                    }
                }, {
                    key: "to",
                    value: function() {
                        return this.add.apply(this, arguments), this
                    }
                }, {
                    key: "easeTo",
                    value: function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return this.easeJoin(this.add.apply(this, n), e), this
                    }
                }, {
                    key: "smoothTo",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.easeTo.apply(this, [1].concat(t))
                    }
                }, {
                    key: "flipTo",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.easeTo.apply(this, [-1].concat(t))
                    }
                }, {
                    key: "over",
                    value: function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return this.addSpan.apply(this, [e].concat(n)), this
                    }
                }, {
                    key: "easeOver",
                    value: function(e, t) {
                        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                        return this.easeJoin(this.addSpan.apply(this, [e].concat(r)), t), this
                    }
                }, {
                    key: "smoothOver",
                    value: function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return this.easeOver.apply(this, [e, 1].concat(n))
                    }
                }, {
                    key: "flipOver",
                    value: function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return this.easeOver.apply(this, [e, -1].concat(n))
                    }
                }, {
                    key: "easeJoin",
                    value: function(e, t) {
                        var n = null;
                        if (e > 0) {
                            var r = this.frames[e];
                            n = r.ease && r.ease.length ? r.ease : [0, 1], n.splice(1, 0, (0, h.default)(this.frames[e - 1].ease, t)), r.ease = n
                        }
                        return n
                    }
                }, {
                    key: "valid",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.gap,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.span;
                        return e > 0 && t
                    }
                }, {
                    key: "minFrame",
                    value: function() {
                        var e = f.default.apply(void 0, arguments),
                            t = this.indexOf(e),
                            n = this.frames[t - 1],
                            r = n && n.to ? x(n, e.to) : null,
                            i = this.frames[t + 1],
                            a = i && i.to ? x(i, e.to) : null,
                            s = (0, b.default)(r).length || (0, b.default)(a).length ? o({}, r, a) : r;
                        return o({}, e, {
                            to: s
                        })
                    }
                }, {
                    key: "start",
                    value: function() {
                        return this.frames.length ? this.frames[0].time : null
                    }
                }, {
                    key: "end",
                    value: function() {
                        return this.frames.length ? this.frames[this.frames.length - 1].time : null
                    }
                }, {
                    key: "duration",
                    value: function() {
                        return (this.end() || 0) - (this.start() || 0)
                    }
                }]), e
            }();
        t.default = T
    }, function(e, t) {
        "use strict";

        function n(e, t, n, r) {
            return arguments.length > 1 ? {
                to: e,
                time: t,
                ease: n,
                call: r
            } : e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.frame = n, t.default = n
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.join = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return e && 0 !== e.length ? 1 === e.length ? e[0] : (e[e.length - 1] - e[e.length - 2]) * t : 0
        };
        t.default = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.filter = t.filterList = void 0;
        var i = n(159),
            a = n(147),
            o = r(a),
            s = (t.filterList = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return (0, i.reduceList)(function(n, r, i) {
                    return e(r, i, t) && n.push(r), n
                }, t, n)
            }, t.filter = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return (0, i.reduceList)(function(n, r, i, a) {
                    var o = t[r];
                    return e(o, r, t, i, a) && ((n || (n = {}))[r] = o), n
                }, (0, o.default)(t), n)
            });
        t.default = s
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.tween = t.tweenProps = t.tweenValue = void 0;
        var i = n(183),
            a = r(i),
            o = n(184),
            s = r(o),
            u = n(161),
            c = r(u),
            l = n(158),
            f = function(e, t, n) {
                var r = t && t[e];
                return (0, c.default)(r) ? r : n && n[e]
            },
            d = t.tweenValue = function(e, t, n, r) {
                return e !== t && (0, c.default)(e) ? (0, a.default)(e, t, r ? (0, s.default)(r, n) : n) : t
            },
            h = t.tweenProps = function(e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                return t ? (0, l.map)(function(a, o) {
                    var s = f(o, e, i),
                        u = f(o, t, i);
                    return (0, c.default)(s) && (0, c.default)(u) ? d(s, u, n, r) : n < 1 ? s : u
                }, t, i) : i
            },
            p = t.tween = function e(t, n) {
                for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) i[a - 2] = arguments[a];
                return i.length ? ((0, c.default)(n) ? d : h).apply(void 0, [t, n].concat(i)) : e(t.a, t.b, t.t, t.ease, n)
            };
        t.default = p
    }, function(e, t) {
        function n(e, t, n) {
            return e * (1 - n) + t * n
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t) {
            return r(e.length)(e, t)
        }

        function r(e) {
            if (e = 0 | +e, !e) throw new Error("Cannot create a interpolator with no elements");
            if (u[e]) return u[e];
            for (var t = ["var ut = 1 - t", ""], n = e; n--;) {
                for (var r = 0; r < n; r += 1) n + 1 === e ? t.push("var p" + r + " = arr[" + r + "] * ut + arr[" + (r + 1) + "] * t") : n > 1 ? t.push("p" + r + " = p" + r + " * ut + p" + (r + 1) + " * t") : t.push("return p" + r + " * ut + p" + (r + 1) + " * t");
                n > 1 && t.push("")
            }
            return t = ["return function bezier" + e + "(arr, t) {", t.map(function(e) {
                return "  " + e
            }).join("\n"), "}"].join("\n"), Function(t)()
        }

        function i(e) {
            return e[0]
        }

        function a(e, t) {
            return e[0] + (e[1] - e[0]) * t
        }

        function o(e, t) {
            var n = 1 - t;
            return (e[0] * n + e[1] * t) * n + (e[1] * n + e[2] * t) * t
        }

        function s(e, t) {
            var n = 1 - t,
                r = e[1] * n + e[2] * t;
            return ((e[0] * n + e[1] * t) * n + r * t) * n + (r * n + (e[2] * n + e[3] * t) * t) * t
        }
        var u = {
            1: i,
            2: a,
            3: o,
            4: s
        };
        e.exports = n, e.exports.prepare = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Blend = t.defaults = void 0;
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(53),
            c = r(u),
            l = n(158),
            f = n(119),
            d = r(f),
            h = n(121),
            p = r(h),
            v = n(186),
            m = r(v),
            g = t.defaults = function() {
                return {
                    shader: [p.default, m.default],
                    views: [],
                    alphas: [],
                    resolution: [1, 1]
                }
            },
            y = t.Blend = function() {
                function e(t, n) {
                    a(this, e), this.gl = t, this.uniforms = {};
                    var r = g(),
                        s = o({}, r, n);
                    this.views = s.views, this.alphas = s.alphas, this.resolution = s.resolution, this.screen = new d.default(t), s.shader === r.shader && (s.shader[1] = s.shader[1].replace(/(@<hook\W.*?)(\d+)/gim, "$1" + this.views.length)), this.shader = Array.isArray(s.shader) ? c.default.apply(void 0, [this.gl].concat(i(s.shader))) : s.shader
                }
                return s(e, [{
                    key: "draw",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e && e.shape,
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        e && e.bind(), t && (this.gl.viewport(0, 0, t[0], t[1]), this.resolution = t), n && this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.shader.bind(), Object.assign(this.shader.uniforms, this.uniforms, {
                            views: (0, l.mapList)(function(e, t) {
                                return (e.color ? e.color[0] : e).bind(t)
                            }, this.views, this.uniforms.views),
                            alphas: this.alphas,
                            resolution: this.resolution
                        }), this.screen.render(), e && this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
                    }
                }]), e
            }();
        t.default = y
    }, function(e, t) {
        e.exports = "precision highp float;\n#define GLSLIFY 1\n\n// Replaced with the correct number of views.\nconst int numViews = /* @<hook */2/* @hook> */;\n\nvec4 preAlpha(vec3 color, float alpha) {\n    return vec4(color.rgb*alpha, alpha);\n}\n\nvec4 preAlpha(vec4 color) {\n    return preAlpha(color.rgb, color.a);\n}\n\nvec4 blend(vec4 sum, vec4 color, float alpha) {\n    return sum+preAlpha(color.rgb, color.a*alpha);\n}\n\n/**\n * Color summation from multiple views, each blending with a global alpha.\n *\n * @requires {float} numViews The number of source views to blend together\n * @requires {function} blend A function blending a source buffer into a sum\n */\n\nuniform sampler2D views[numViews];\nuniform float alphas[numViews];\nuniform vec2 resolution;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy/resolution;\n\n    // Accumulate colors\n    \n    vec4 sum = vec4(0.0);\n\n    for(int i = 0; i < numViews; ++i) {\n        vec4 color = texture2D(views[i], uv);\n\n        // Pre-multiplied alpha so they don't cross over\n        sum = blend(sum, color, alphas[i]);\n    }\n\n    gl_FragColor = sum;\n}\n\n";
    }, function(e, t) {
        e.exports = "/**\n * A vignette hash blur\n * @todo Make the `const`s here into `uniform`s.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D view;\nuniform vec2 resolution;\nuniform float time;\nuniform float radius;\nuniform float limit;\n\nvec3 sampler(vec2 uv) {\n    return texture2D(view, uv).rgb;\n}\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n#ifndef TAU\n  #define TAU 6.28318530718\n#endif\n\n//Use last part of hash function to generate new random radius and angle\nvec2 mult(inout vec2 r) {\n  r = fract(r * vec2(12.9898,78.233));\n  return sqrt(r.x + .001) * vec2(sin(r.y * TAU), cos(r.y * TAU));\n}\n\nvec3 blur(vec2 uv, float radius, float aspect, float offset) {\n  vec2 circle = vec2(radius);\n  circle.x *= aspect;\n  vec2 rnd = vec2(random(vec2(uv + offset)));\n\n  vec3 acc = vec3(0.0);\n  for (int i = 0; i < 20; i++) {\n    acc += sampler(uv + circle * mult(rnd)).xyz;\n  }\n  return acc / float(20);\n}\n\nvec3 blur(vec2 uv, float radius, float aspect) {\n  return blur(uv, radius, aspect, 0.0);\n}\n\nvec3 blur(vec2 uv, float radius) {\n  return blur(uv, radius, 1.0);\n}\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount_0(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount_0(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount_0(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount_0(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount_0(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount_0(point, mid, limit)));\n}\n\nconst vec3 falloff = vec3(0.0, 1.0, 1.0);\nconst vec2 mid = vec2(0.5);\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy/resolution;\n    float texel = 1.0/min(resolution.x, resolution.y);\n    float amount = (1.0-vignette(uv, mid, limit, falloff))*texel;\n    float aspect = resolution.x/resolution.y;\n    float jitter = mod(time, 20.0);\n\n    gl_FragColor = vec4(blur(uv, radius*amount, aspect, jitter),\n            texture2D(view, uv).a);\n}\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OpticalFlow = t.defaults = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(87),
            u = r(s),
            c = n(53),
            l = r(c),
            f = n(158),
            d = r(f),
            h = n(146),
            p = r(h),
            v = n(83),
            m = n(121),
            g = r(m),
            y = n(189),
            b = r(y),
            _ = t.defaults = function() {
                return {
                    options: {
                        shader: [g.default, b.default],
                        buffers: [
                            [
                                [1, 1]
                            ],
                            [
                                [1, 1]
                            ]
                        ]
                    },
                    uniforms: {
                        viewSize: [1, 1],
                        scaleUV: [1, -1],
                        offset: 1,
                        lambda: .001,
                        speed: 1,
                        speedLimit: 1,
                        time: 1
                    }
                }
            },
            w = t.OpticalFlow = function() {
                function e(t, n, r) {
                    var o = this;
                    a(this, e), this.gl = t;
                    var s = _(),
                        c = Object.assign(s.options, n);
                    this.shader = Array.isArray(c.shader) ? l.default.apply(void 0, [this.gl].concat(i(c.shader))) : c.shader, this.buffers = (0, d.default)(function(e) {
                        return Array.isArray(e) ? u.default.apply(void 0, [o.gl].concat(i(e))) : e
                    }, c.buffers), this.uniforms = Object.assign(s.uniforms, r)
                }
                return o(e, [{
                    key: "update",
                    value: function(e) {
                        this.shader.bind(), Object.assign(this.shader.uniforms, {
                            view: this.buffers[0].color[0].bind(1),
                            last: this.buffers[1].color[0].bind(2)
                        }, this.uniforms, e)
                    }
                }, {
                    key: "step",
                    value: function() {
                        (0, v.step)(this.buffers)
                    }
                }, {
                    key: "setPixels",
                    value: function(e) {
                        return this.buffers[0].color[0].setPixels(e)
                    }
                }, {
                    key: "resize",
                    value: function(e) {
                        (0, p.default)(function(t) {
                            return t.shape = e
                        }, this.buffers)
                    }
                }]), e
            }();
        t.default = w
    }, function(e, t) {
        e.exports = "/**\n * @see https://forum.openframeworks.cc/t/ofxflowtools-optical-flow-fluid-dynamics-and-particles-in-glsl/15470\n * @see https://github.com/moostrik/ofxFlowTools\n * @see https://github.com/diwi/PixelFlow\n * @see http://thomasdiewald.com/blog/?p=2766\n * @see https://adamferriss.com/gush/\n * @see https://github.com/princemio/ofxMIOFlowGLSL/blob/master/src/FlowShader.cpp\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D view;\nuniform sampler2D last;\n\nuniform vec2 viewSize;\nuniform vec2 scaleUV;\n\nuniform float offset;\nuniform float lambda;\n\nuniform float time;\nuniform float speed;\nuniform float speedLimit;\n\nvarying vec2 uv;\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\nvec4 grayScale(vec4 color) {\n\treturn vec4(vec3(dot(color.rgb, vec3(0.3, 0.59, 0.11))), 1.0);\n}\n\n/**\n * @requires {float} time The current time in ms\n */\n\nvec4 flow(vec2 vel) {\n    // Faster particles leave a greater influence (opacity).\n    // Linear interpolation - inaccurate for vectors, will it be OK without\n    // sudden turns, or do we need a per-fragment lookup?\n    return vec4(vel, time, length(vel));\n}\n\nvec4 flow(vec2 vel, float speedLimit) {\n    vec4 values = flow(vel);\n\n    return vec4(values.xyz, min(values.a/speedLimit, 1.0));\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nvec2 posToUV(vec2 pos) {\n    return map(pos, posRange.xy, posRange.zw, uvRange.xy, uvRange.zw);\n}\n\nconst vec2 zero = vec2(0.0);\nconst vec3 falloff = vec3(0.0, 0.0, 1.0);\n/*\nvec4 mapColor(vec2 vec, vec2 scale) {\n    vec2 x = vec2(max(vec.x, 0.0), abs(min(vec.x, 0.0)))*scale.x;\n    vec2 y = vec2(max(vec.y, 0.0), abs(min(vec.y, 0.0)))*scale.y;\n\n    float dirY = ((y.x > y.y)? 0.9 : 1.0);\n\n    return vec4(x.xy, max(y.x, y.y), dirY);\n}*/\n\n#if 1\n    vec4 pixel(sampler2D texture, vec2 uv) {\n        return grayScale(texture2D(texture, uv));\n    }\n#else\n    vec4 pixel(sampler2D texture, vec2 uv) {\n        return texture2D(texture, uv);\n    }\n#endif\n\nvoid main() {\n    vec2 st = posToUV(uv*scaleUV/viewSize);\n\n    vec2 offsetX = vec2(offset, 0.0);\n    vec2 offsetY = vec2(0.0, offset);\n\n    // Gradient\n\n    vec4 gradX = (pixel(view, st+offsetX)-pixel(view, st-offsetX))+\n        (pixel(last, st+offsetX)-pixel(last, st-offsetX));\n\n    vec4 gradY = (pixel(view, st+offsetY)-pixel(view, st-offsetY))+\n        (pixel(last, st+offsetY)-pixel(last, st-offsetY));\n\n    vec4 gradMag = sqrt((gradX*gradX)+(gradY*gradY)+vec4(lambda));\n\n    // Difference\n    vec4 diff = pixel(view, st)-pixel(last, st);\n\n    // vec2 vec = vec2((diff*(gradX/gradMag)).x, (diff*(gradY/gradMag)).x);\n\n    // gl_FragColor = mapColor(vec, scale);\n\n    vec2 vec = vec2((diff*(gradX/gradMag)).x, (diff*(gradY/gradMag)).x)*speed;\n\n    gl_FragColor = flow(bezier(falloff, length(vec)/speedLimit)*vec, speedLimit);\n}\n"
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.part = function e(t) {
            return function() {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return r.length ? e(function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return t.apply(void 0, r.concat(n))
                }) : t()
            }
        };
        t.curry = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length;
            return function() {
                for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                return n > i.length ? e(function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return t.apply(void 0, i.concat(n))
                }, n - i.length) : t.apply(void 0, i)
            }
        };
        t.default = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            for (var e = s.indexOf(document.readyState); c <= e; ++c) {
                var t = u[s[c]];
                if (t) try {
                    t()
                } catch (e) {
                    console.error(e)
                }
            }
        }
        var a = n(1),
            o = r(a),
            s = ["loading", "interactive", "complete"],
            u = {
                loading: function() {
                    document.addEventListener("readystatechange", i)
                },
                interactive: function() {
                    var e = document.querySelector("canvas");
                    (0, o.default)(e), e.classList.add("epok-dark"), document.removeEventListener("readystatechange", i)
                }
            },
            c = 0;
        i()
    }])
});
}
init();

setInterval(() => {
    init();
}, 60 * 1000 * 5);
