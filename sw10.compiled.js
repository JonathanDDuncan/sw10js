﻿/**
* SignWriting 2010 JavaScript Library v1.6.1
* https://github.com/Slevinski/sw10js
* Copyright (c) 2007-2015, Stephen E Slevinski Jr
* sw10.js is released under the MIT License.
* modified and compiled with Closure Compiler by Jonathan Duncan
*/
sw10 = signwriting_2010 = function () {
    function E(c, b) {
        c = F(c); if (!c) return ""; var d, a, e; b || (b = 20); var f; c = F(c); if (!c) return ""; if ("Q" === c) return ["(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*"]; if ("QT" === c) return ["(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*"]; var g = [], l = c.indexOf("T") + 1; if (l) if (f = "(A", d = c.slice(0, l), c = c.replace(d, ""), "QT" === d) f += "(S[123][0-9a-f]{2}[0-5][0-9a-f])+)";
        else if (d = d.match(RegExp("(S[123][0-9a-f]{2}[0-5u][0-9a-fu]|R[123][0-9a-f]{2}t[123][0-9a-f]{2})", "g"))) { var k; for (k = 0; k < d.length; k++) { var h = d[k].match(/S[123][0-9a-f]{2}[0-5u][0-9a-fu]/); h ? (a = h[0].slice(0, 4), e = h[0].slice(4, 5), a = "u" === e ? a + "[0-5]" : a + e, e = h[0].slice(5, 6), a = "u" === e ? a + "[0-9a-f]" : a + e) : (a = d[k].slice(1, 4), e = d[k].slice(5, 8), a = u(a, e, "hex"), a = "S" + a + "[0-5][0-9a-f]"); f += a } f += "(S[123][0-9a-f]{2}[0-5][0-9a-f])*)" } (d = c.match(RegExp("(V[0-9]+)", "g"))) && (b = 1 * d.toString().slice(1)); if (k = c.match(new RegExp("S[123][0-9a-f]{2}[0-5u][0-9a-fu]([0-9]{3}x[0-9]{3})?",
        "g"))) for (h = 0; h < k.length; h++) d = k[h].toString(), a = d.slice(1, 4), a = "S" + a, e = d.slice(4, 5), a = "u" === e ? a + "[0-5]" : a + e, e = d.slice(5, 6), a = "u" === e ? a + "[0-9a-f]" : a + e, 6 < d.length ? (e = 1 * d.slice(6, 9), d = 1 * d.slice(10, 13), a += u(e - b, e + b), a += "x", a += u(d - b, d + b)) : a += "[0-9]{3}x[0-9]{3}", a = "[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*" + a + "(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*", a = l ? f + a : "(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?" + a, g.push(a); if (k = c.match(new RegExp("R[123][0-9a-f]{2}t[123][0-9a-f]{2}([0-9]{3}x[0-9]{3})?",
        "g"))) for (h = 0; h < k.length; h++) d = k[h].toString(), a = d.slice(1, 4), e = d.slice(5, 8), a = u(a, e, "hex"), a = "S" + a + "[0-5][0-9a-f]", 8 < d.length ? (e = 1 * d.slice(8, 11), d = 1 * d.slice(12, 15), a += u(e - b, e + b), a += "x", a += u(d - b, d + b)) : a += "[0-9]{3}x[0-9]{3}", a = "[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*" + a + "(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*", a = l ? f + a : "(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?" + a, g.push(a); g.length || g.push(f + "[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*");
        return g
    } function u(c, b, d) {
        var a, e, f, g, l, k; d || (d = ""); c = ("000" + c).slice(-3); b = "" + b; if (c === b) return c; e = []; if ((c[0] !== b[0] || c[1] !== b[1]) && "0" != c[2]) {
            a = c[0] + c[1]; if (d) { switch (c[2]) { case "f": a += "f"; break; case "e": a += "[ef]"; break; case "d": case "c": case "b": case "a": a += "[" + c[2] + "-f]"; break; default: switch (c[2]) { case "9": a += "[9a-f]"; break; case "8": a += "[89a-f]"; break; default: a += "[" + c[2] + "-9a-f]" } } f = 15 - parseInt(c[2], 16) + 1; c = "" + (parseInt(c, 16) + f).toString(16) } else {
                switch (c[2]) {
                    case "9": a += "9"; break; case "8": a +=
                    "[89]"; break; default: a += "[" + c[2] + "-9]"
                } f = 9 - c[2] + 1; c = "" + (1 * c + f)
            } e.push(a)
        } if (c[0] != b[0] && "0" != c[1]) {
            if (d) { a = c[0]; switch (c[1]) { case "f": a += "f"; break; case "e": a += "[ef]"; break; case "d": case "c": case "b": case "a": a += "[" + c[1] + "-f]"; break; case "9": a += "[9a-f]"; break; case "8": a += "[89a-f]"; break; default: a += "[" + c[1] + "-9a-f]" } a += "[0-9a-f]"; f = 15 - parseInt(c[1], 16) + 1; c = "" + (parseInt(c, 16) + 16 * f).toString(16) } else {
                a = c[0]; switch (c[1]) { case "9": a += "9"; break; case "8": a += "[89]"; break; default: a += "[" + c[1] + "-9]" } a += "[0-9]";
                f = 9 - c[1] + 1; c = "" + (1 * c + 10 * f)
            } e.push(a)
        } a = ""; if (c[0] != b[0]) {
            if (d) {
                f = parseInt(b[0], 16) - parseInt(c[0], 16); g = (parseInt(c[0], 16) + f - 1).toString(16); switch (f) {
                    case 1: a = c[0]; break; case 2: a = "[" + c[0] + g + "]"; break; default: switch (l = 9 < parseInt(c[0], 16) ? "h" : "d", k = 9 < parseInt(g, 16) ? "h" : "d", l + k) {
                        case "dd": a += "[" + c[0] + "-" + g + "]"; break; case "dh": f = 9 - c[0]; switch (f) { case 0: a += "[9"; break; case 1: a += "[89"; break; default: a += "[" + c[0] + "-9" } switch (g[0]) { case "a": a += "a]"; break; case "b": a += "ab]"; break; default: a += "a-" + g + "]" } break; case "hh": a +=
                        "[" + c[0] + "-" + g + "]"
                    }
                } a += "[0-9a-f][0-9a-f]"; f = parseInt(b[0], 16) - parseInt(c[0], 16); c = "" + (parseInt(c, 16) + 256 * f).toString(16)
            } else { f = b[0] - c[0]; g = 1 * c[0] + f - 1; switch (f) { case 1: a = c[0]; break; case 2: a = "[" + c[0] + g + "]"; break; default: a = "[" + c[0] + "-" + g + "]" } a += "[0-9][0-9]"; c = "" + (1 * c + 100 * f) } e.push(a)
        } if (c[1] != b[1]) {
            if (d) {
                f = parseInt(b[1], 16) - parseInt(c[1], 16); g = (parseInt(c[1], 16) + f - 1).toString(16); a = c[0]; switch (f) {
                    case 1: a += c[1]; break; case 2: a += "[" + c[1] + g + "]"; break; default: switch (l = 9 < parseInt(c[1], 16) ? "h" : "d", k = 9 < parseInt(g,
                    16) ? "h" : "d", l + k) { case "dd": a += "[" + c[1]; 1 < f && (a += "-"); a += g + "]"; break; case "dh": f = 9 - c[1]; switch (f) { case 0: a += "[9"; break; case 1: a += "[89"; break; default: a += "[" + c[1] + "-9" } switch (b[1]) { case "a": a += "]"; break; case "b": a += "a]"; break; default: a += "a-" + (parseInt(b[1], 16) - 1).toString(16) + "]" } break; case "hh": a += "[" + c[1], 1 < f && (a += "-"), a += (parseInt(b[1], 16) - 1).toString(16) + "]" }
                } a += "[0-9a-f]"; f = parseInt(b[1], 16) - parseInt(c[1], 16); c = "" + (parseInt(c, 16) + 16 * f).toString(16)
            } else {
                f = b[1] - c[1]; g = 1 * c[1] + f - 1; a = c[0]; switch (f) {
                    case 1: a +=
                    c[1]; break; case 2: a += "[" + c[1] + g + "]"; break; default: a += "[" + c[1] + "-" + g + "]"
                } a += "[0-9]"; c = "" + (1 * c + 10 * f)
            } e.push(a)
        } if (c[2] != b[2]) {
            if (d) {
                a = c[0] + c[1]; f = parseInt(b[2], 16) - parseInt(c[2], 16); l = 9 < parseInt(c[2], 16) ? "h" : "d"; k = 9 < parseInt(b[2], 16) ? "h" : "d"; switch (l + k) {
                    case "dd": a += "[" + c[2]; 1 < f && (a += "-"); a += b[2] + "]"; break; case "dh": f = 9 - c[2]; switch (f) { case 0: a += "[9"; break; case 1: a += "[89"; break; default: a += "[" + c[2] + "-9" } switch (b[2]) { case "a": a += "a]"; break; case "b": a += "ab]"; break; default: a += "a-" + b[2] + "]" } break; case "hh": a +=
                    "[" + c[2], 1 < f && (a += "-"), a += b[2] + "]"
                } f = parseInt(b[2], 16) - parseInt(c[2], 16); c = "" + (parseInt(c, 16) + f).toString(16)
            } else { f = b[2] - c[2]; a = c[0] + c[1]; switch (f) { case 0: a += c[2]; break; case 1: a += "[" + c[2] + b[2] + "]"; break; default: a += "[" + c[2] + "-" + b[2] + "]" } c = "" + (1 * c + f) } e.push(a)
        } "0" === c[2] && "0" === b[2] && e.push(b); 1 === e.length ? a = e[0] : (a = e.join(")|("), a = "((" + a + "))"); return a
    } function F(c) {
        return (c = c.match(/Q((A(S[123][0-9a-f]{2}[0-5u][0-9a-fu]|R[123][0-9a-f]{2}t[123][0-9a-f]{2})+)?T)?((R[123][0-9a-f]{2}t[123][0-9a-f]{2}([0-9]{3}x[0-9]{3})?)|(S[123][0-9a-f]{2}[0-5u][0-9a-fu]([0-9]{3}x[0-9]{3})?))*(V[0-9]+)?/)) ?
        c[0] : ""
    } function I(c, b) {
        var d = document.createElement("canvas"), a = v(c, !0), e = z(c), f; if (!a) { a = t(c); f = q(a); if (!a) return ""; a = 6 === a.length ? a + "500x500" : a } b || (b = {}); b.size = b.size ? parseFloat(b.size) : 1; b.f = b.f ? !0 : !1; b.b = b.b ? parseInt(b.b, void 0) : 0; b.c = b.c ? /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(b.c) ? "#" + b.c : b.c : "black"; b.fill = b.fill ? /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(b.fill) ? "#" + b.fill : b.fill : "white"; b.back = b.back ? /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(b.back) ? "#" + b.back : b.back : ""; b.E = []; b.a = [];
        if (e) {
            var g; g = e.match(/C/); b.f = g ? !0 : !1; if (g = e.match(/P[0-9]{2}/)) b.b = parseInt(g[0].substring(1, g[0].length), void 0); if (g = e.match(/G\(([0-9a-fA-F]{3}([0-9a-fA-F]{3})?|[a-zA-Z]+)\)/)) g = g[0].substring(2, g[0].length - 1), b.back = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(g) ? "#" + g : g; e = e.split("+"); if (g = e[0].match(/D\(([0-9a-f]{3}([0-9a-f]{3})?|[a-zA-Z]+)(,([0-9a-f]{3}([0-9a-f]{3})?|[a-zA-Z]+))?\)/)) g = g[0].substring(2, g[0].length - 1).split(","), g[0] && (b.c = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(g[0]) ? "#" +
            g[0] : g[0]), g[1] && (b.fill = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(g[1]) ? "#" + g[1] : g[1]); if (g = e[0].match(/Z[0-9]+(\.[0-9]+)?/)) b.size = g[0].substring(1, g[0].length); e[1] || (e[1] = ""); if (g = e[1].match(/D[0-9]{2}\(([0-9a-f]{3}([0-9a-f]{3})?|[a-wyzA-Z]+)(,([0-9a-f]{3}([0-9a-f]{3})?|[a-wyzA-Z]+))?\)/g)) {
                var l; for (l = 0; l < g.length; l++) {
                    var k = parseInt(g[l].substring(1, 3), void 0), h = g[l].substring(4, g[l].length - 1).split(","); h[0] && (h[0] = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(h[0]) ? "#" + h[0] : h[0]); h[1] && (h[1] =
                    /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(h[1]) ? "#" + h[1] : h[1]); b.E[k] = h
                }
            } if (g = e[1].match(/Z[0-9]{2},[0-9]+(\.[0-9]+)?(,[0-9]{3}x[0-9]{3})?/g)) for (e = 0; e < g.length; e++) l = parseInt(g[e].substring(1, 3), void 0), k = g[e].substring(4, g[e].length).split(","), k[0] = parseFloat(k[0]), b.a[l] = k
        } var m, k = /S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3}/g, n, e = g = 500, r, h = l = 500; n = a.charAt(0); h = y(a); h = h.split(" "); g = parseInt(h[0], void 0); e = parseInt(h[1], void 0); l = parseInt(h[2], void 0); h = parseInt(h[3], void 0); "S" === n && (500 ===
        g && 500 === l ? (f = f.split("x"), e = 500 + parseInt(f[0], void 0), h = 500 + parseInt(f[1], void 0)) : (e = 1E3 - g, h = 1E3 - l)); f = a.match(k); var p; for (p = 0; p < f.length; p++) if (m = f[p].slice(0, 6), n = f[p].slice(6, 9), r = f[p].slice(10, 13), b.a[p + 1] && (b.a[p + 1][1] && (n = parseInt(n, void 0) + parseInt(b.a[p + 1][1].slice(0, 3), void 0) - 500, r = parseInt(r, void 0) + parseInt(b.a[p + 1][1].slice(4, 7), void 0) - 500, g = Math.min(g, n), l = Math.min(l, r)), m = q(m))) m = m.split("x"), e = Math.max(e, parseInt(n, void 0) + b.a[p + 1][0] * parseInt(m[0], void 0)), h = Math.max(h, parseInt(r,
        void 0) + b.a[p + 1][0] * parseInt(m[1], void 0)); g -= b.b; e += b.b; l -= b.b; h += b.b; f = (e - g) * b.size; n = (h - l) * b.size; d.width = f; d.height = n; p = d.getContext("2d"); b.back && (p.rect(0, 0, f, n), p.fillStyle = b.back, p.fill()); f = a.match(k); for (a = 0; a < f.length; a++) m = f[a].slice(0, 6), n = f[a].slice(6, 9), r = f[a].slice(10, 13), b.a[a + 1] && (b.a[a + 1][1] && (n = parseInt(n, void 0) + parseInt(b.a[a + 1][1].slice(0, 3), void 0) - 500, r = parseInt(r, void 0) + parseInt(b.a[a + 1][1].slice(4, 7), void 0) - 500, g = Math.min(g, n), l = Math.min(l, r)), k = q(m)) && (k = k.split("x"),
        e = Math.max(e, parseInt(n, void 0) + b.a[a + 1][0] * parseInt(k[0], void 0)), h = Math.max(h, parseInt(r, void 0) + b.a[a + 1][0] * parseInt(k[1], void 0))), p.font = (b.a[a + 1] ? 30 * b.size * b.a[a + 1][0] : 30 * b.size) + "px 'SignWriting 2010 Filling'", p.fillStyle = b.E[a + 1] ? b.E[a + 1][1] ? b.E[a + 1][1] : b.fill : b.fill, p.fillText(x(m), (n - g) * b.size, (r - l) * b.size), p.font = (b.a[a + 1] ? 30 * b.size * b.a[a + 1][0] : 30 * b.size) + "px 'SignWriting 2010'", p.fillStyle = b.E[a + 1] ? b.E[a + 1][0] : b.f ? "#" + G(m) : b.c, p.fillText(x(m), (n - g) * b.size, (r - l) * b.size); return d
    } function D(c,
    b) { var d = A(b), d = "S" + u(d[0], d[1], "1") + "[0-5][0-9a-f][0-9]{3}x[0-9]{3}"; if (d = c.match(new RegExp(d, "g"))) { var a, e, f, g, l = "", k; for (k = 0; k < d.length; k++) a = d[k].slice(0, 6), e = parseInt(d[k].slice(6, 9), void 0), f = parseInt(d[k].slice(10, 13), void 0), g = q(a).split("x"), l += a + e + "x" + f + (e + parseInt(g[0], void 0)) + "x" + (f + parseInt(g[1], void 0)); return l } return "" } function q(c) {
        var b, d = v(c); if (d) return c = y(d), c = c.split(" "), b = c[1] - c[0] + "x" + (c[3] - c[2]), "0x0" === b ? "" : b; c = t(c); if (!c) return ""; if (H[c]) return H[c]; b || (b = document.createElement("canvas"),
        b.width = 152, b.height = 152); b = b.getContext("2d"); b.clearRect(0, 0, 152, 152); b.font = "60px 'SignWriting 2010'"; b.fillText(x(c), 0, 0); b = b.getImageData(0, 0, 152, 152).data; var a; a = 151; a: for (; 0 <= a; a--) for (var e = 0; 152 > e; e++) for (var f = 0; 4 > f; f++) if (d = 4 * a + 608 * e + f, b[d]) break a; e = 151; a: for (; 0 <= e; e--) for (f = 0; f < a; f++) for (var g = 0; 4 > g; g++) if (d = 4 * f + 608 * e + g, b[d]) break a; a = "" + Math.ceil(a / 2); b = "" + Math.ceil((e + 1) / 2); -1 < "S1710d S1711d S1712d S17311 S17321 S17733 S1773f S17743 S1774f S17753 S1775f S16d33 S1713d S1714d S17301 S17329 S1715d".indexOf(c) &&
        (a = "20"); -1 < "S24c15 S24c30".indexOf(c) && (a = "22"); -1 < "S2903b".indexOf(c) && (a = "23"); -1 < "S1d203 S1d233".indexOf(c) && (a = "25"); -1 < "S24c15".indexOf(c) && (a = "28"); -1 < "S2e629".indexOf(c) && (a = "29"); -1 < "S16541 S23425".indexOf(c) && (a = "30"); -1 < "S2d316".indexOf(c) && (a = "40"); -1 < "S2541a".indexOf(c) && (a = "50"); -1 < "S1732f S17731 S17741 S17751".indexOf(c) && (b = "20"); -1 < "S1412c".indexOf(c) && (b = "21"); -1 < "S2a903".indexOf(c) && (b = "31"); -1 < "S2b002".indexOf(c) && (b = "36"); b = a + "x" + b; if ("0x0" === b) {
            b = "S1000815x30 S1000921x30 S1000a30x15 S1000b30x21 S1000c15x30 S1000d21x30 ".indexOf(c);
            if (-1 === b) return ""; b = "S1000815x30 S1000921x30 S1000a30x15 S1000b30x21 S1000c15x30 S1000d21x30 ".slice(b + 6, "S1000815x30 S1000921x30 S1000a30x15 S1000b30x21 S1000c15x30 S1000d21x30 ".indexOf(" ", b))
        } return H[c] = b
    } function J(c, b, d) { var a, e, f = c.match(RegExp("[0-9]{3}x[0-9]{3}", "g")); if (f) { var g; for (g = 0; g < f.length; g++) a = parseInt(f[g].slice(0, 3), void 0) + b, e = parseInt(f[g].slice(4, 7), void 0) + d, c = c.replace(f[g], a + "X" + e); c = c.replace(/X/g, "x") } return c } function y(c) {
        var b, d = Number.MAX_VALUE, a = Number.MIN_VALUE,
        e = Number.MAX_VALUE, f = Number.MIN_VALUE, g = c.match(/[0-9]{3}x[0-9]{3}/g); if (g) { var l; for (l = 0; l < g.length; l++) c = parseInt(g[l].slice(0, 3), void 0), b = parseInt(g[l].slice(4, 7), void 0), 0 === l ? (a = d = c, f = e = b) : (d = Math.min(d, c), a = Math.max(a, c), e = Math.min(e, b), f = Math.max(f, b)); return "" + d + " " + a + " " + e + " " + f } return ""
    } function B(c, b) {
        var d = v(c); if (d) {
            var a, e, f, d = d.replace("A", b ? (1038336).toString(16).toUpperCase() : String.fromCharCode(56246, 56320)), d = d.replace("B", b ? (1038337).toString(16).toUpperCase() : String.fromCharCode(56246,
            56321)), d = d.replace("L", b ? (1038338).toString(16).toUpperCase() : String.fromCharCode(56246, 56322)), d = d.replace("M", b ? (1038339).toString(16).toUpperCase() : String.fromCharCode(56246, 56323)), d = d.replace("R", b ? (1038340).toString(16).toUpperCase() : String.fromCharCode(56246, 56324)), g = d.match(new RegExp("[0-9]{3}x[0-9]{3}", "g")), l; for (l = 0; l < g.length; l++) a = g[l], e = a.split("x"), e[0] = parseInt(e[0], void 0) + 1039628, e[1] = parseInt(e[1], void 0) + 1039628, f = b ? e[0].toString(16).toUpperCase() : String.fromCharCode(55296 +
            (e[0] - 65536 >> 10), 56320 + (e[0] - 65536 & 1023)), f += b ? e[1].toString(16).toUpperCase() : String.fromCharCode(55296 + (e[1] - 65536 >> 10), 56320 + (e[1] - 65536 & 1023)), d = d.replace(a, f); g = d.match(new RegExp("S[123][0-9a-f]{2}[0-5][0-9a-f]", "g")); for (l = 0; l < g.length; l++) a = g[l], d = d.replace(a, B(a, b)); return d
        } d = t(c); if (!d) return ""; g = parseInt(d.substr(1, 3), 16) + 1038128; g = b ? g.toString(16).toUpperCase() : String.fromCharCode(55296 + (g - 65536 >> 10), 56320 + (g - 65536 & 1023)); l = d.substr(4, 1); l = parseInt(l, 16) + 1038352; g += b ? l.toString(16).toUpperCase() :
        String.fromCharCode(55296 + (l - 65536 >> 10), 56320 + (l - 65536 & 1023)); d = d.substr(5, 1); d = parseInt(d, 16) + 1038368; return g += b ? d.toString(16).toUpperCase() : String.fromCharCode(55296 + (d - 65536 >> 10), 56320 + (d - 65536 & 1023))
    } function C(c, b) {
        var d, a = v(c); if (a) { var e = a.match(RegExp("S[123][0-9a-f]{2}[0-5][0-9a-f]", "g")), f; for (f = 0; f < e.length; f++) d = e[f], a = a.replace(d, C(d, b)); return a } d = t(c); if (!d) return ""; a = parseInt(d.substr(1, 3), 16) + 120576; a = b ? a.toString(16).toUpperCase() : String.fromCharCode(55296 + (a - 65536 >> 10), 56320 +
        (a - 65536 & 1023)); e = d.substr(4, 1); "0" != e && (e = parseInt(e, 16) + 121498, a += b ? e.toString(16).toUpperCase() : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023))); d = d.substr(5, 1); "0" != d && (d = parseInt(d, 16) + 121504, a += b ? d.toString(16).toUpperCase() : String.fromCharCode(55296 + (d - 65536 >> 10), 56320 + (d - 65536 & 1023))); return a
    } function x(c, b) {
        var d, a = v(c); if (a) { var e = a.match(RegExp("S[123][0-9a-f]{2}[0-5][0-9a-f]", "g")), f; for (f = 0; f < e.length; f++) d = e[f], a = a.replace(d, x(d, b)); return a } d = t(c); if (!d) return ""; d = 1048576 +
        96 * (parseInt(d.slice(1, 4), 16) - 256) + 16 * parseInt(d.slice(4, 5), 16) + parseInt(d.slice(5, 6), 16) + 1; return b ? d.toString(16).toUpperCase() : String.fromCharCode(55296 + (d - 65536 >> 10), 56320 + (d - 65536 & 1023))
    } function G(c) { var b = "000000"; w(c, "hand") && (b = "0000CC"); w(c, "movement") && (b = "CC0000"); w(c, "dynamic") && (b = "FF0099"); w(c, "head") && (b = "006600"); w(c, "location") && (b = "884411"); w(c, "punctuation") && (b = "FF9900"); return b } function K(c) {
        var b = A(c), d = b[0], b = b[1], d = Math.floor(Math.random() * (parseInt(b, 16) - parseInt(d, 16) +
        1) + parseInt(d, 16)), b = Math.floor(6 * Math.random()), a = Math.floor(16 * Math.random()), d = "S" + d.toString(16) + b.toString(16) + a.toString(16); return q(d) ? d : K(c)
    } function L(c, b) { var d = A(b), d = "S" + u(d[0], d[1], "1") + "[0-5][0-9a-f][0-9]{3}x[0-9]{3}"; return (d = c.match(new RegExp(d, "g"))) ? d.join("") : "" } function w(c, b) { if (6 === c.length && !q(c)) return !1; var d = A(b), a = d[1], e = c.slice(1, 4); return parseInt(d[0], 16) <= parseInt(e, 16) && parseInt(a, 16) >= parseInt(e, 16) } function A(c) {
        var b; switch (c) {
            case "writing": c = "100"; b = "37e"; break;
            case "hand": c = "100"; b = "204"; break; case "movement": c = "205"; b = "2f6"; break; case "dynamic": c = "2f7"; b = "2fe"; break; case "head": case "hcenter": c = "2ff"; b = "36c"; break; case "vcenter": c = "2ff"; b = "375"; break; case "trunk": c = "36d"; b = "375"; break; case "limb": c = "376"; b = "37e"; break; case "location": c = "37f"; b = "386"; break; case "punctuation": c = "387"; b = "38b"; break; default: c = "100", b = "38b"
        } return [c, b]
    } function M(c, b, d) {
        c = { kind: ["S100", "S37f", "S387"], o: "S100 S205 S2f7 S2ff S36d S37f S387".split(" "), group: "S100 S10e S11e S144 S14c S186 S1a4 S1ba S1cd S1f5 S205 S216 S22a S255 S265 S288 S2a6 S2b7 S2d5 S2e3 S2f7 S2ff S30a S32a S33b S359 S36d S376 S37f S387".split(" ") }[c];
        if (!c) return b ? "is" === d ? !1 : "" : []; if (!b && !d) return c; d || (d = ""); switch (d) { case "is": return -1 === c.indexOf(b.slice(0, 4)) ? !1 : !0; case "first": return c[0]; case "last": return c.slice(-1)[0]; case "prev": d = -2; break; case "": d = -1; break; case "next": d = 0; break; default: return "" } var a = c.length, e; for (e = 0; e < c.length; e++) if (parseInt(b.slice(1, 4), 16) < parseInt(c[e].slice(1, 4), 16)) { a = e; break } a += d; a = 0 > a ? 0 : a >= c.length ? c.length - 1 : a; return c[a]
    } function z(c) {
        return (c = c.match(/-C?(P[0-9]{2})?(G\(([0-9a-fA-F]{3}([0-9a-fA-F]{3})?|[a-zA-Z]+)\))?(D\(([0-9a-fA-F]{3}([0-9a-fA-F]{3})?|[a-zA-Z]+)(,([0-9a-fA-F]{3}([0-9a-fA-F]{3})?|[a-zA-Z]+))?\))?(Z[0-9]+(\.[0-9]+)?)?(\+(D[0-9]{2}\(([0-9a-fA-F]{3}([0-9a-fA-F]{3})?|[a-zA-Z]+)(,([0-9a-fA-F]{3}([0-9a-fA-F]{3})?|[a-zA-Z]+))?\))*(Z[0-9]{2},[0-9]+(\.[0-9]+)?(,[0-9]{3}x[0-9]{3})?)*)?/)) ?
        c[0] : ""
    } function v(c, b) { var d = c.match(/(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*|S38[7-9ab][0-5][0-9a-f][0-9]{3}x[0-9]{3}/); return d ? d[0] + (b ? z(c) : "") : "" } function t(c, b) { var d = c.match(/S[123][0-9a-f]{2}[0-5][0-9a-f]([0-9]{3}x[0-9]{3})?/g); return d ? d[0] + (b ? z(c) : "") : "" } var H = {}, m = {}; m.key = t; m.v = v; m.L = z; m.B = function (c) {
        c = t(c); if (!q(c)) return ""; var b = c.slice(0, 4), d = c.slice(4, 5), a = parseInt(c.slice(5, 6), 16); c = b + "18"; var e = 0; if (q(b + "08") ||
        q(c)) e = 8; else { if (0 === a || 4 === a) e = 0; if (1 === a || 5 === a) e = 6; if (2 === a || 6 === a) e = 4; if (3 === a || 7 === a) e = 2 } for (c = ""; !q(c) ;) a += e, 7 < a && 8 > e && (a -= 8), 15 < a && (a -= 16), c = b + d + a.toString(16); return c
    }; m.fill = function (c, b) { c = t(c); if (!q(c)) return ""; -1 != b && (b = 1); var d = c.slice(0, 4), a = parseInt(c.slice(4, 5), void 0), e = c.slice(5, 6); for (c = ""; !q(c) ;) a += b, 5 < a && (a = 0), 0 > a && (a = 5), c = d + a + e; return c }; m.rotate = function (c, b) {
        c = t(c); if (!q(c)) return ""; -1 != b && (b = 1); var d = c.slice(0, 4), a = c.slice(4, 5), e = parseInt(c.slice(5, 6), 16); for (c = ""; !q(c) ;) 7 <
        e ? (e += b, 15 < e && (e = 8), 8 > e && (e = 15), c = d + a + e.toString(16)) : (e -= b, 7 < e && (e = 0), 0 > e && (e = 7), c = d + a + e); return c
    }; m.scroll = function (c, b) { c = t(c); if (!q(c)) return ""; -1 != b && (b = 1); var d = "S" + (parseInt(c.slice(1, 4), 16) + b).toString(16) + c.slice(4, 5) + c.slice(5, 6); return q(d) ? d : c }; m.K = M; m.type = A; m.is = w; m.filter = L; m.random = K; m.f = G; m.view = function (c, b) { if (!w(c)) return ""; var d = c.slice(0, 4); return b ? d + (q(d + "00") ? "0" : "1") + "0" : d + (w(d, "hand") && !M("group", d, "is") ? "1" : "0") + "0" }; m.M = function (c, b) {
        var d = v(c), a = z(c), e; if (!d) {
            d = t(c);
            e = q(d); if (!e) return ""; d = 6 === d.length ? d + "500x500" : d
        } b || (b = {}); b.size = b.size ? parseFloat(b.size) || "x" : 1; b.f = b.f ? !0 : !1; b.b = b.b ? parseInt(b.b, void 0) : 0; b.c = b.c ? /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(b.c) ? "#" + b.c : b.c : "black"; b.fill = b.fill ? /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(b.fill) ? "#" + b.fill : b.fill : "white"; b.back = b.back ? /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(b.back) ? "#" + b.back : b.back : ""; b.E = []; b.a = []; b.view = "key" === b.view ? "key" : "uni8" === b.view ? "uni8" : "pua" === b.view ? "pua" : "code"; b.g = "code" ===
        b.g ? "code" : "uni8" === b.g ? "uni8" : "pua" === b.g ? "pua" : "key"; if (a) {
            var f; f = a.match(/C/); b.f = f ? !0 : !1; if (f = a.match(/P[0-9]{2}/)) b.b = parseInt(f[0].substring(1, f[0].length), void 0); if (f = a.match(/G\(([0-9a-fA-F]{3}([0-9a-fA-F]{3})?|[a-zA-Z]+)\)/)) f = f[0].substring(2, f[0].length - 1), b.back = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(f) ? "#" + f : f; a = a.split("+"); if (f = a[0].match(/D\(([0-9a-f]{3}([0-9a-f]{3})?|[a-zA-Z]+)(,([0-9a-f]{3}([0-9a-f]{3})?|[a-zA-Z]+))?\)/)) f = f[0].substring(2, f[0].length - 1).split(","), f[0] && (b.c =
            /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(f[0]) ? "#" + f[0] : f[0]), f[1] && (b.fill = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(f[1]) ? "#" + f[1] : f[1]); if (f = a[0].match(/Z[0-9]+(\.[0-9]+)?/)) b.size = f[0].substring(1, f[0].length); a[1] || (a[1] = ""); if (f = a[1].match(/D[0-9]{2}\(([0-9a-f]{3}([0-9a-f]{3})?|[a-wyzA-Z]+)(,([0-9a-f]{3}([0-9a-f]{3})?|[a-wyzA-Z]+))?\)/g)) {
                var g; for (g = 0; g < f.length; g++) {
                    var l = parseInt(f[g].substring(1, 3), void 0), k = f[g].substring(4, f[g].length - 1).split(","); k[0] && (k[0] = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(k[0]) ?
                    "#" + k[0] : k[0]); k[1] && (k[1] = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(k[1]) ? "#" + k[1] : k[1]); b.E[l] = k
                }
            } if (f = a[1].match(/Z[0-9]{2},[0-9]+(\.[0-9]+)?(,[0-9]{3}x[0-9]{3})?/g)) for (a = 0; a < f.length; a++) g = parseInt(f[a].substring(1, 3), void 0), l = f[a].substring(4, f[a].length).split(","), l[0] = parseFloat(l[0]), b.a[g] = l
        } var h, l = f = 500, m, k = a = 500; g = d.charAt(0); k = y(d); k = k.split(" "); f = parseInt(k[0], void 0); l = parseInt(k[1], void 0); a = parseInt(k[2], void 0); k = parseInt(k[3], void 0); "S" === g && (500 === f && 500 === a ? (e = e.split("x"),
        l = 500 + parseInt(e[0], void 0), k = 500 + parseInt(e[1], void 0)) : (l = 1E3 - f, k = 1E3 - a)); var d = d.match(/S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3}/g), n; for (n = 0; n < d.length; n++) {
            e = d[n].slice(0, 6); h = d[n].slice(6, 9); m = d[n].slice(10, 13); if (b.a[n + 1]) {
                b.a[n + 1][1] && (h = parseInt(h, void 0) + parseInt(b.a[n + 1][1].slice(0, 3), void 0) - 500, m = parseInt(m, void 0) + parseInt(b.a[n + 1][1].slice(4, 7), void 0) - 500, f = Math.min(f, h), a = Math.min(a, m)); var r = q(e); r && (r = r.split("x"), l = Math.max(l, parseInt(h, void 0) + b.a[n + 1][0] * parseInt(r[0],
                void 0)), k = Math.max(k, parseInt(m, void 0) + b.a[n + 1][0] * parseInt(r[1], void 0)))
            } h = '<g transform="translate(' + h + "," + m + ')">'; h += "<text "; h += 'class="sym-fill" '; b.i || (h += "style=\"pointer-events:none;font-family:'SignWriting 2010 Filling';font-size:" + (b.a[n + 1] ? 30 * b.a[n + 1][0] : 30) + "px;fill:" + (b.E[n + 1] ? b.E[n + 1][1] ? b.E[n + 1][1] : b.fill : b.fill) + ";", h += "code" === b.view ? "" : "-webkit-font-feature-settings:'liga';font-feature-settings:'liga';", h += '"'); h += ">"; h += "key" === b.view ? e : "uni8" === b.view ? C(e) : "pua" === b.view ? B(e) :
            x(e); h += "</text>"; h += "<text "; h += 'class="sym-line" '; b.i || (h += 'style="', h += b.view === b.g ? "" : "pointer-events:none;", h += "font-family:'SignWriting 2010';font-size:" + (b.a[n + 1] ? 30 * b.a[n + 1][0] : 30) + "px;fill:" + (b.E[n + 1] ? b.E[n + 1][0] : b.f ? "#" + G(e) : b.c) + ";", h += "code" === b.view ? "" : "-webkit-font-feature-settings:'liga';font-feature-settings:'liga';", h += '"'); h += ">"; h += "key" === b.view ? e : "uni8" === b.view ? C(e) : "pua" === b.view ? B(e) : x(e); h += "</text>"; h += "</g>"; d[n] = h
        } f -= b.b; l += b.b; a -= b.b; k += b.b; e = l - f; l = k - a; g = { j: -1, l: 1 }[g] ||
        0; g = 75 * g + f - 400; k = '<svg xmlns="http://www.w3.org/2000/svg" '; b.h && (k += 'class="' + b.h + '" '); "x" != b.size && (k += 'width="' + e * b.size + '" height="' + l * b.size + '" '); k += 'viewBox="' + f + " " + a + " " + e + " " + l + '">'; b.view != b.g && (k = k + '<text style="font-size:0%;">' + ("code" === b.g ? x(c) : "uni8" === b.g ? C(c) : "pua" === b.g ? B(c) : c), k += "</text>"); b.back && (k += '  <rect x="' + f + '" y="' + a + '" width="' + e + '" height="' + l + '" style="fill:' + b.back + ';" />'); k += d.join("") + "</svg>"; b.w && (k = '<div style="padding:10px;position:relative;width:' + e + "px;height:" +
        l + "px;left:" + g + 'px;">' + k + "</div>"); return k
    }; m.code = x; m.N = C; m.F = B; m.m = y; m.u = J; m.size = q; m.max = D; m.C = function (c) {
        var b, d, a, e; e = y(D(c, "hcenter")); a = y(D(c, "vcenter")); var f = y(D(c)); if (!f) return ""; a ? (b = parseInt(a.slice(0, 3), void 0), d = parseInt(a.slice(4, 7), void 0)) : (b = parseInt(f.slice(0, 3), void 0), d = parseInt(f.slice(4, 7), void 0)); e ? (a = parseInt(e.slice(8, 11), void 0), e = parseInt(e.slice(12, 15), void 0)) : (a = parseInt(f.slice(8, 11), void 0), e = parseInt(f.slice(12, 15), void 0)); b = 500 - parseInt((b + d) / 2, void 0); a = 500 -
        parseInt((a + e) / 2, void 0); d = (d = c.match(/(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]/)) ? d[0] : "M"; c = d + parseInt(f.slice(4, 7), void 0) + "x" + parseInt(f.slice(12, 15), void 0) + L(c); return J(c, b, a)
    }; m.canvas = I; m.D = function (c, b) { if (v(c, !0) || t(c, !0)) { var d = I(c, b), a = d.toDataURL("image/png"); d.remove(); return a } return "" }; m.G = F; m.H = u; m.I = E; m.J = function (c, b, d) {
        if (!b) return []; if (-1 === "BLMR".indexOf(d) || 1 < d.length) d = ""; var a; c = E(c); if (!c) return []; var e; for (e = 0; e < c.length; e++) a = c[e], b = (b = b.match(new RegExp(a, "g"))) ? b.join(" ") :
        ""; b ? (d && (b = b.replace(/B/g, d), b = b.replace(/L/g, d), b = b.replace(/M/g, d), b = b.replace(/R/g, d)), d = b.split(" "), d = d.filter(function (a) { return a in this ? !1 : this[a] = !0 }, {})) : d = []; return d
    }; m.A = function (c, b, d) {
        if (!b) return []; if (-1 === "BLMR".indexOf(d) || 1 < d.length) d = ""; var a; c = E(c); if (!c) return []; var e; for (e = 0; e < c.length; e++) a = c[e], a = "^" + a + ".*", b = (b = b.match(new RegExp(a, "mg"))) ? b.join("\n") : ""; b ? (d && (b = b.replace(/B/g, d), b = b.replace(/L/g, d), b = b.replace(/M/g, d), b = b.replace(/R/g, d)), d = b.split("\n"), d = d.filter(function (a) {
            return a in
            this ? !1 : this[a] = !0
        }, {})) : d = []; return d
    }; m.s = function (c, b) {
        var d = ""; if (v(c) && /^[eg]?([EG]L?)?$/.test(b)) {
            var a; if (-1 < b.indexOf("e") || -1 < b.indexOf("g")) if (a = c.match(RegExp("A(S[123][0-9a-f]{2}[0-5][0-9a-f])*", "g"))) if (a = a[0], -1 < b.indexOf("e")) d += a + "T"; else { a = a.match(RegExp("S[123][0-9a-f]{2}", "g")); var d = d + "A", e; for (e = 0; e < a.length; e++) d += a[e] + "uu"; d += "T" } if (-1 < b.indexOf("E") || -1 < b.indexOf("G")) if (a = c.match(RegExp("S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3}", "g"))) for (e = 0; e < a.length; e++) d = -1 < b.indexOf("E") ?
            d + a[e].slice(0, 6) : d + (a[e].slice(0, 4) + "uu"), -1 < b.indexOf("L") && (d += a[e].slice(6, 13))
        } return d ? "Q" + d : ""
    }; return m
}();