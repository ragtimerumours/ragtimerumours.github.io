// Audioplay2 by strangecube.com - visit https://strangecube.com/audioplay2/ for more
var yamph_audioplay2 = (function() {
    var m = false;
    var o = 50;

    function n() {
        return document.getElementsByClassName("audioplay-object")
    }

    function a(u) {
        players = n();
        for (var t = 0; t < players.length; t++) {
            player = players[t];
            u(player)
        }
    }

    function d(v, t, u) {
        t[u] = v.getAttribute(u)
    }

    function p(w) {
        var v = {};
        d(w, v, "data-apmode");
        d(w, v, "data-apskinspath");
        d(w, v, "data-apskin");
        d(w, v, "data-apwidth");
        d(w, v, "data-apheight");
        d(w, v, "data-apstarttime");
        d(w, v, "data-apendtime");
        d(w, v, "data-apfadeintime");
        d(w, v, "data-apfadeouttime");
        d(w, v, "data-apautoplay");
        d(w, v, "data-aploop");
        if (!v["data-apmode"]) {
            v["data-apmode"] = "playstop"
        }
        if (!v["data-apskinspath"]) {
            v["data-apskinspath"] = "https://strangecube.com/audioplay2/player/skins/"
        }
        if (!v["data-apskin"]) {
            v["data-apskin"] = "negative"
        }
        if (!v["data-apwidth"]) {
            v["data-apwidth"] = "30px"
        }
        if (!v["data-apheight"]) {
            v["data-apheight"] = "30px"
        }
        if (!v["data-apstarttime"]) {
            v["data-apstarttime"] = 0
        }
        if (!v["data-apfadeintime"]) {
            v["data-apfadeintime"] = 0
        }
        if (!v["data-aploop"]) {
            v["data-aploop"] = "no"
        }
        var u = new Array();

        function t() {
            for (i = 0; i < t.arguments.length; i++) {
                u[i] = new Image();
                u[i].src = t.arguments[i]
            }
        }
        t(v["data-apskinspath"] + "/" + v["data-apskin"] + "/stopup.png", v["data-apskinspath"] + "/" + v["data-apskin"] + "/playup.png", v["data-apskinspath"] + "/" + v["data-apskin"] + "/pauseup.png", v["data-apskinspath"] + "/" + v["data-apskin"] + "/stopover.png", v["data-apskinspath"] + "/" + v["data-apskin"] + "/playover.png", v["data-apskinspath"] + "/" + v["data-apskin"] + "/pauseover.png");
        return v
    }

    function l(t, u) {
        config = p(e(t));
        switch (u) {
            case "stopup":
                t.style.backgroundImage = "url('" + config["data-apskinspath"] + "/" + config["data-apskin"] + "/stopup.png')";
                break;
            case "playup":
                t.style.backgroundImage = "url('" + config["data-apskinspath"] + "/" + config["data-apskin"] + "/playup.png')";
                break;
            case "pauseup":
                t.style.backgroundImage = "url('" + config["data-apskinspath"] + "/" + config["data-apskin"] + "/pauseup.png')";
                break;
            case "stopover":
                t.style.backgroundImage = "url('" + config["data-apskinspath"] + "/" + config["data-apskin"] + "/stopover.png')";
                break;
            case "playover":
                t.style.backgroundImage = "url('" + config["data-apskinspath"] + "/" + config["data-apskin"] + "/playover.png')";
                break;
            case "pauseover":
                t.style.backgroundImage = "url('" + config["data-apskinspath"] + "/" + config["data-apskin"] + "/pauseover.png')";
                break
        }
    }

    function f(t) {
        t.style.visibility = "hidden";
        if (e(t).autoplay) {
            if (c(e(t)) == "playpause") {
                l(t, "pauseup")
            } else {
                if (c(e(t)) == "playstop") {
                    l(t, "stopup")
                }
            }
        } else {
            l(t, "playup")
        }
        t.style.visibility = "visible"
    }

    function s(t) {
        return t.target.parentNode.getElementsByTagName("audio")[0]
    }

    function e(t) {
        return t.parentNode.getElementsByTagName("audio")[0]
    }

    function b(t) {
        return t.parentNode.getElementsByClassName("audioplay-button")[0]
    }

    function j(t) {
        return t.target.parentNode.getElementsByClassName("audioplay-button")[0]
    }

    function q(u, t) {
        u.setAttribute("data-apstate", t)
    }

    function r(t) {
        return t.getAttribute("data-apstate")
    }

    function c(t) {
        config = p(t);
        return config["data-apmode"]
    }

    function h(t) {
        t.volume = 0.9;
        if (t.volume == 0.9) {
            return true
        } else {
            return false
        }
    }

    function k() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return true
        } else {
            return false
        }
    }
    a(function(t) {
        audio = t.getElementsByClassName("audioplay-player")[0];
        config = p(audio);
        b(audio).style.height = config["data-apheight"];
        b(audio).style.width = config["data-apwidth"];
        audio.fadeInRatio = o / config["data-apfadeintime"];
        audio.fadeOutRatio = o / config["data-apfadeouttime"];
        q(audio, "stop");
        f(b(audio));
        audio.addEventListener("ended", function(u) {
            q(u.target, "stop");
            l(j(u), "playup");
            clearInterval(u.target.interval);
            if (config["data-aploop"] == "yes" && !k()) {
                g(b(audio), "mousedown")
            }
        });
        b(audio).addEventListener("mousedown", function(u) {
            config = p(s(u));
            if (r(s(u)) == "stop") {
                l(u.target, "playdown");
                s(u).currentTime = s(u).getAttribute("data-apstarttime") / 1000;
                if (config["data-apfadeintime"] && h(s(u))) {
                    s(u).volume = 0
                } else {
                    s(u).volume = 1
                }
                s(u).play();
                q(s(u), "play");
                s(u).interval = setInterval(function() {
                    if (s(u).volume + s(u).fadeInRatio > 1) {
                        s(u).volume = 1
                    } else {
                        s(u).volume += s(u).fadeInRatio
                    }
                    if (m) {
                        console.log("Volume: " + s(u).volume)
                    }
                }, o);
                if (c(s(u)) == "playstop") {
                    l(u.target, "stopup")
                }
                if (c(s(u)) == "playpause") {
                    l(u.target, "pauseup")
                }
                return
            }
            if (r(s(u)) == "play") {
                if (c(s(u)) == "playstop") {
                    s(u).pause();
                    l(u.target, "playup");
                    s(u).currentTime = 0;
                    q(s(u), "stop")
                }
                if (c(s(u)) == "playpause") {
                    s(u).pause();
                    l(u.target, "playup");
                    q(s(u), "pause")
                }
                return
            }
            if (r(s(u)) == "pause") {
                l(u.target, "pauseup");
                s(u).play();
                q(s(u), "play");
                return
            }
        });
        b(audio).addEventListener("mouseup", function(u) {});
        b(audio).addEventListener("mouseover", function(u) {
            if (r(s(u)) == "stop") {
                l(u.target, "playover")
            }
            if (r(s(u)) == "pause") {
                l(u.target, "playover")
            }
            if (r(s(u)) == "play") {
                if (c(s(u)) == "playstop") {
                    l(u.target, "stopover")
                }
                if (c(s(u)) == "playpause") {
                    l(u.target, "pauseover")
                }
            }
        });
        b(audio).addEventListener("mouseout", function(u) {
            if (r(s(u)) == "stop") {
                l(u.target, "playup")
            }
            if (r(s(u)) == "pause") {
                l(u.target, "playup")
            }
            if (r(s(u)) == "play") {
                if (c(s(u)) == "playstop") {
                    l(u.target, "stopup")
                }
                if (c(s(u)) == "playpause") {
                    l(u.target, "pauseup")
                }
            }
        });
        if (config["data-apautoplay"] != undefined && !k()) {
            g(b(audio), "mousedown")
        }
        if (m) {
            console.log("Configuration: " + config);
            console.log("Autoplay: " + audio.autoplay)
        }
    });

    function g(v, u) {
        var t = document.createEvent("MouseEvents");
        t.initEvent(u, true, true);
        v.dispatchEvent(t)
    }
});
yamph_audioplay2();
