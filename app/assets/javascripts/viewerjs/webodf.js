/*

 This is a generated file. DO NOT EDIT.

 Copyright (C) 2010-2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is the compiled version of the WebODF library.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
var webodf_version = "0.5.2";
function Runtime() {
}
Runtime.prototype.getVariable = function (f) {
};
Runtime.prototype.toJson = function (f) {
};
Runtime.prototype.fromJson = function (f) {
};
Runtime.prototype.byteArrayFromString = function (f, k) {
};
Runtime.prototype.byteArrayToString = function (f, k) {
};
Runtime.prototype.read = function (f, k, d, b) {
};
Runtime.prototype.readFile = function (f, k, d) {
};
Runtime.prototype.readFileSync = function (f, k) {
};
Runtime.prototype.loadXML = function (f, k) {
};
Runtime.prototype.writeFile = function (f, k, d) {
};
Runtime.prototype.isFile = function (f, k) {
};
Runtime.prototype.getFileSize = function (f, k) {
};
Runtime.prototype.deleteFile = function (f, k) {
};
Runtime.prototype.log = function (f, k) {
};
Runtime.prototype.setTimeout = function (f, k) {
};
Runtime.prototype.clearTimeout = function (f) {
};
Runtime.prototype.libraryPaths = function () {
};
Runtime.prototype.currentDirectory = function () {
};
Runtime.prototype.setCurrentDirectory = function (f) {
};
Runtime.prototype.type = function () {
};
Runtime.prototype.getDOMImplementation = function () {
};
Runtime.prototype.parseXML = function (f) {
};
Runtime.prototype.exit = function (f) {
};
Runtime.prototype.getWindow = function () {
};
Runtime.prototype.requestAnimationFrame = function (f) {
};
Runtime.prototype.cancelAnimationFrame = function (f) {
};
Runtime.prototype.assert = function (f, k, d) {
};
var IS_COMPILED_CODE = !0;
Runtime.byteArrayToString = function (f, k) {
    function d(d) {
        var b = "", l, p = d.length;
        for (l = 0; l < p; l += 1)b += String.fromCharCode(d[l] & 255);
        return b
    }

    function b(b) {
        var d = "", l, p = b.length, c = [], q, e, a, m;
        for (l = 0; l < p; l += 1)q = b[l], 128 > q ? c.push(q) : (l += 1, e = b[l], 194 <= q && 224 > q ? c.push((q & 31) << 6 | e & 63) : (l += 1, a = b[l], 224 <= q && 240 > q ? c.push((q & 15) << 12 | (e & 63) << 6 | a & 63) : (l += 1, m = b[l], 240 <= q && 245 > q && (q = (q & 7) << 18 | (e & 63) << 12 | (a & 63) << 6 | m & 63, q -= 65536, c.push((q >> 10) + 55296, (q & 1023) + 56320))))), 1E3 <= c.length && (d += String.fromCharCode.apply(null,
            c), c.length = 0);
        return d + String.fromCharCode.apply(null, c)
    }

    var c;
    "utf8" === k ? c = b(f) : ("binary" !== k && this.log("Unsupported encoding: " + k), c = d(f));
    return c
};
Runtime.getVariable = function (f) {
    try {
        return eval(f)
    } catch (k) {
    }
};
Runtime.toJson = function (f) {
    return JSON.stringify(f)
};
Runtime.fromJson = function (f) {
    return JSON.parse(f)
};
Runtime.getFunctionName = function (f) {
    return void 0 === f.name ? (f = /function\s+(\w+)/.exec(f)) && f[1] : f.name
};
function BrowserRuntime(f) {
    function k(q) {
        var e = q.length, a, m, g = 0;
        for (a = 0; a < e; a += 1)m = q.charCodeAt(a), g += 1 + (128 < m) + (2048 < m), 55040 < m && 57344 > m && (g += 1, a += 1);
        return g
    }

    function d(q, e, a) {
        var m = q.length, g, b;
        e = new Uint8Array(new ArrayBuffer(e));
        a ? (e[0] = 239, e[1] = 187, e[2] = 191, b = 3) : b = 0;
        for (a = 0; a < m; a += 1)g = q.charCodeAt(a), 128 > g ? (e[b] = g, b += 1) : 2048 > g ? (e[b] = 192 | g >>> 6, e[b + 1] = 128 | g & 63, b += 2) : 55040 >= g || 57344 <= g ? (e[b] = 224 | g >>> 12 & 15, e[b + 1] = 128 | g >>> 6 & 63, e[b + 2] = 128 | g & 63, b += 3) : (a += 1, g = (g - 55296 << 10 | q.charCodeAt(a) - 56320) + 65536,
            e[b] = 240 | g >>> 18 & 7, e[b + 1] = 128 | g >>> 12 & 63, e[b + 2] = 128 | g >>> 6 & 63, e[b + 3] = 128 | g & 63, b += 4);
        return e
    }

    function b(b) {
        var e = b.length, a = new Uint8Array(new ArrayBuffer(e)), m;
        for (m = 0; m < e; m += 1)a[m] = b.charCodeAt(m) & 255;
        return a
    }

    function c(b, e) {
        var a, m, g;
        void 0 !== e ? g = b : e = b;
        f ? (m = f.ownerDocument, g && (a = m.createElement("span"), a.className = g, a.appendChild(m.createTextNode(g)), f.appendChild(a), f.appendChild(m.createTextNode(" "))), a = m.createElement("span"), 0 < e.length && "<" === e[0] ? a.innerHTML = e : a.appendChild(m.createTextNode(e)),
            f.appendChild(a), f.appendChild(m.createElement("br"))) : console && console.log(e);
        "alert" === g && alert(e)
    }

    function h(q, e, a) {
        if (0 !== a.status || a.responseText)if (200 === a.status || 0 === a.status) {
            if (a.response && "string" !== typeof a.response)"binary" === e ? (a = a.response, a = new Uint8Array(a)) : a = String(a.response); else if ("binary" === e)if (null !== a.responseBody && "undefined" !== String(typeof VBArray)) {
                a = (new VBArray(a.responseBody)).toArray();
                var m = a.length, g = new Uint8Array(new ArrayBuffer(m));
                for (e = 0; e < m; e += 1)g[e] = a[e];
                a = g
            } else {
                (e = a.getResponseHeader("Content-Length")) && (e = parseInt(e, 10));
                if (e && e !== a.responseText.length)a:{
                    var m = a.responseText, g = !1, l = k(m);
                    if ("number" === typeof e) {
                        if (e !== l && e !== l + 3) {
                            m = void 0;
                            break a
                        }
                        g = l + 3 === e;
                        l = e
                    }
                    m = d(m, l, g)
                }
                void 0 === m && (m = b(a.responseText));
                a = m
            } else a = a.responseText;
            n[q] = a;
            q = {err: null, data: a}
        } else q = {err: a.responseText || a.statusText, data: null}; else q = {err: "File " + q + " is empty.", data: null};
        return q
    }

    function r(b, e, a) {
        var m = new XMLHttpRequest;
        m.open("GET", b, a);
        m.overrideMimeType && ("binary" !==
            e ? m.overrideMimeType("text/plain; charset=" + e) : m.overrideMimeType("text/plain; charset=x-user-defined"));
        return m
    }

    function l(b, e, a) {
        function m() {
            var m;
            4 === g.readyState && (m = h(b, e, g), a(m.err, m.data))
        }

        if (n.hasOwnProperty(b))a(null, n[b]); else {
            var g = r(b, e, !0);
            g.onreadystatechange = m;
            try {
                g.send(null)
            } catch (d) {
                a(d.message, null)
            }
        }
    }

    var p = this, n = {};
    this.byteArrayFromString = function (q, e) {
        var a;
        "utf8" === e ? a = d(q, k(q), !1) : ("binary" !== e && p.log("unknown encoding: " + e), a = b(q));
        return a
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.readFile = l;
    this.read = function (b, e, a, m) {
        l(b, "binary", function (g, b) {
            var d = null;
            if (b) {
                if ("string" === typeof b)throw"This should not happen.";
                d = b.subarray(e, e + a)
            }
            m(g, d)
        })
    };
    this.readFileSync = function (b, e) {
        var a = r(b, e, !1), m;
        try {
            a.send(null);
            m = h(b, e, a);
            if (m.err)throw m.err;
            if (null === m.data)throw"No data read from " + b + ".";
        } catch (g) {
            throw g;
        }
        return m.data
    };
    this.writeFile = function (b, e, a) {
        n[b] = e;
        var m = new XMLHttpRequest,
            g;
        m.open("PUT", b, !0);
        m.onreadystatechange = function () {
            4 === m.readyState && (0 !== m.status || m.responseText ? 200 <= m.status && 300 > m.status || 0 === m.status ? a(null) : a("Status " + String(m.status) + ": " + m.responseText || m.statusText) : a("File " + b + " is empty."))
        };
        g = e.buffer && !m.sendAsBinary ? e.buffer : p.byteArrayToString(e, "binary");
        try {
            m.sendAsBinary ? m.sendAsBinary(g) : m.send(g)
        } catch (d) {
            p.log("HUH? " + d + " " + e), a(d.message)
        }
    };
    this.deleteFile = function (b, e) {
        delete n[b];
        var a = new XMLHttpRequest;
        a.open("DELETE", b, !0);
        a.onreadystatechange =
            function () {
                4 === a.readyState && (200 > a.status && 300 <= a.status ? e(a.responseText) : e(null))
            };
        a.send(null)
    };
    this.loadXML = function (b, e) {
        var a = new XMLHttpRequest;
        a.open("GET", b, !0);
        a.overrideMimeType && a.overrideMimeType("text/xml");
        a.onreadystatechange = function () {
            4 === a.readyState && (0 !== a.status || a.responseText ? 200 === a.status || 0 === a.status ? e(null, a.responseXML) : e(a.responseText, null) : e("File " + b + " is empty.", null))
        };
        try {
            a.send(null)
        } catch (m) {
            e(m.message, null)
        }
    };
    this.isFile = function (b, e) {
        p.getFileSize(b, function (a) {
            e(-1 !==
                a)
        })
    };
    this.getFileSize = function (b, e) {
        if (n.hasOwnProperty(b) && "string" !== typeof n[b])e(n[b].length); else {
            var a = new XMLHttpRequest;
            a.open("HEAD", b, !0);
            a.onreadystatechange = function () {
                if (4 === a.readyState) {
                    var m = a.getResponseHeader("Content-Length");
                    m ? e(parseInt(m, 10)) : l(b, "binary", function (a, m) {
                        a ? e(-1) : e(m.length)
                    })
                }
            };
            a.send(null)
        }
    };
    this.log = c;
    this.assert = function (b, e, a) {
        if (!b)throw c("alert", "ASSERTION FAILED:\n" + e), a && a(), e;
    };
    this.setTimeout = function (b, e) {
        return setTimeout(function () {
            b()
        }, e)
    };
    this.clearTimeout =
        function (b) {
            clearTimeout(b)
        };
    this.libraryPaths = function () {
        return["lib"]
    };
    this.setCurrentDirectory = function () {
    };
    this.currentDirectory = function () {
        return""
    };
    this.type = function () {
        return"BrowserRuntime"
    };
    this.getDOMImplementation = function () {
        return window.document.implementation
    };
    this.parseXML = function (b) {
        return(new DOMParser).parseFromString(b, "text/xml")
    };
    this.exit = function (b) {
        c("Calling exit with code " + String(b) + ", but exit() is not implemented.")
    };
    this.getWindow = function () {
        return window
    };
    this.requestAnimationFrame =
        function (b) {
            var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, a = 0;
            if (e)e.bind(window), a = e(b); else return setTimeout(b, 15);
            return a
        };
    this.cancelAnimationFrame = function (b) {
        var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
        e ? (e.bind(window), e(b)) : clearTimeout(b)
    }
}
function NodeJSRuntime() {
    function f(b) {
        var d = b.length, l, e = new Uint8Array(new ArrayBuffer(d));
        for (l = 0; l < d; l += 1)e[l] = b[l];
        return e
    }

    function k(d, l, q) {
        function e(a, m) {
            if (a)return q(a, null);
            if (!m)return q("No data for " + d + ".", null);
            if ("string" === typeof m)return q(a, m);
            q(a, f(m))
        }

        d = c.resolve(h, d);
        "binary" !== l ? b.readFile(d, l, e) : b.readFile(d, null, e)
    }

    var d = this, b = require("fs"), c = require("path"), h = "", r, l;
    this.byteArrayFromString = function (b, d) {
        var l = new Buffer(b, d), e, a = l.length, m = new Uint8Array(new ArrayBuffer(a));
        for (e = 0; e < a; e += 1)m[e] = l[e];
        return m
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.readFile = k;
    this.loadXML = function (b, l) {
        k(b, "utf-8", function (c, e) {
            if (c)return l(c, null);
            if (!e)return l("No data for " + b + ".", null);
            l(null, d.parseXML(e))
        })
    };
    this.writeFile = function (d, l, q) {
        l = new Buffer(l);
        d = c.resolve(h, d);
        b.writeFile(d, l, "binary", function (e) {
            q(e || null)
        })
    };
    this.deleteFile = function (d, l) {
        d = c.resolve(h, d);
        b.unlink(d, l)
    };
    this.read = function (d, l, q, e) {
        d = c.resolve(h, d);
        b.open(d, "r+", 666, function (a, m) {
            if (a)e(a, null); else {
                var g = new Buffer(q);
                b.read(m, g, 0, q, l, function (a) {
                    b.close(m);
                    e(a, f(g))
                })
            }
        })
    };
    this.readFileSync = function (d, l) {
        var c;
        c = b.readFileSync(d, "binary" === l ? null : l);
        if (null === c)throw"File " + d + " could not be read.";
        "binary" === l && (c = f(c));
        return c
    };
    this.isFile = function (d, l) {
        d = c.resolve(h, d);
        b.stat(d, function (b, e) {
            l(!b && e.isFile())
        })
    };
    this.getFileSize = function (d, l) {
        d = c.resolve(h, d);
        b.stat(d, function (b, e) {
            b ? l(-1) : l(e.size)
        })
    };
    this.log = function (b, d) {
        var l;
        void 0 !== d ? l = b : d = b;
        "alert" === l && process.stderr.write("\n!!!!! ALERT !!!!!\n");
        process.stderr.write(d + "\n");
        "alert" === l && process.stderr.write("!!!!! ALERT !!!!!\n")
    };
    this.assert = function (b, d, l) {
        b || (process.stderr.write("ASSERTION FAILED: " + d), l && l())
    };
    this.setTimeout = function (b, d) {
        return setTimeout(function () {
            b()
        }, d)
    };
    this.clearTimeout = function (b) {
        clearTimeout(b)
    };
    this.libraryPaths = function () {
        return[__dirname]
    };
    this.setCurrentDirectory = function (b) {
        h =
            b
    };
    this.currentDirectory = function () {
        return h
    };
    this.type = function () {
        return"NodeJSRuntime"
    };
    this.getDOMImplementation = function () {
        return l
    };
    this.parseXML = function (b) {
        return r.parseFromString(b, "text/xml")
    };
    this.exit = process.exit;
    this.getWindow = function () {
        return null
    };
    this.requestAnimationFrame = function (b) {
        return setTimeout(b, 15)
    };
    this.cancelAnimationFrame = function (b) {
        clearTimeout(b)
    };
    r = new (require("xmldom").DOMParser);
    l = d.parseXML("<a/>").implementation
}
function RhinoRuntime() {
    function f(b, d) {
        var c;
        void 0 !== d ? c = b : d = b;
        "alert" === c && print("\n!!!!! ALERT !!!!!");
        print(d);
        "alert" === c && print("!!!!! ALERT !!!!!")
    }

    var k = this, d = {}, b = d.javax.xml.parsers.DocumentBuilderFactory.newInstance(), c, h, r = "";
    b.setValidating(!1);
    b.setNamespaceAware(!0);
    b.setExpandEntityReferences(!1);
    b.setSchema(null);
    h = d.org.xml.sax.EntityResolver({resolveEntity: function (b, c) {
        var h = new d.java.io.FileReader(c);
        return new d.org.xml.sax.InputSource(h)
    }});
    c = b.newDocumentBuilder();
    c.setEntityResolver(h);
    this.byteArrayFromString = function (b, d) {
        var c, q = b.length, e = new Uint8Array(new ArrayBuffer(q));
        for (c = 0; c < q; c += 1)e[c] = b.charCodeAt(c) & 255;
        return e
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.loadXML = function (b, h) {
        var f = new d.java.io.File(b), q = null;
        try {
            q = c.parse(f)
        } catch (e) {
            return print(e), h(e, null)
        }
        h(null, q)
    };
    this.readFile = function (b, c, h) {
        r && (b = r + "/" + b);
        var q = new d.java.io.File(b), e = "binary" === c ?
            "latin1" : c;
        q.isFile() ? ((b = readFile(b, e)) && "binary" === c && (b = k.byteArrayFromString(b, "binary")), h(null, b)) : h(b + " is not a file.", null)
    };
    this.writeFile = function (b, c, h) {
        r && (b = r + "/" + b);
        b = new d.java.io.FileOutputStream(b);
        var q, e = c.length;
        for (q = 0; q < e; q += 1)b.write(c[q]);
        b.close();
        h(null)
    };
    this.deleteFile = function (b, c) {
        r && (b = r + "/" + b);
        var h = new d.java.io.File(b), q = b + Math.random(), q = new d.java.io.File(q);
        h.rename(q) ? (q.deleteOnExit(), c(null)) : c("Could not delete " + b)
    };
    this.read = function (b, c, h, q) {
        r && (b = r + "/" +
            b);
        var e;
        e = b;
        var a = "binary";
        (new d.java.io.File(e)).isFile() ? ("binary" === a && (a = "latin1"), e = readFile(e, a)) : e = null;
        e ? q(null, this.byteArrayFromString(e.substring(c, c + h), "binary")) : q("Cannot read " + b, null)
    };
    this.readFileSync = function (b, d) {
        if (!d)return"";
        var c = readFile(b, d);
        if (null === c)throw"File could not be read.";
        return c
    };
    this.isFile = function (b, c) {
        r && (b = r + "/" + b);
        var h = new d.java.io.File(b);
        c(h.isFile())
    };
    this.getFileSize = function (b, c) {
        r && (b = r + "/" + b);
        var h = new d.java.io.File(b);
        c(h.length())
    };
    this.log =
        f;
    this.assert = function (b, d, c) {
        b || (f("alert", "ASSERTION FAILED: " + d), c && c())
    };
    this.setTimeout = function (b) {
        b();
        return 0
    };
    this.clearTimeout = function () {
    };
    this.libraryPaths = function () {
        return["lib"]
    };
    this.setCurrentDirectory = function (b) {
        r = b
    };
    this.currentDirectory = function () {
        return r
    };
    this.type = function () {
        return"RhinoRuntime"
    };
    this.getDOMImplementation = function () {
        return c.getDOMImplementation()
    };
    this.parseXML = function (b) {
        b = new d.java.io.StringReader(b);
        b = new d.org.xml.sax.InputSource(b);
        return c.parse(b)
    };
    this.exit = quit;
    this.getWindow = function () {
        return null
    };
    this.requestAnimationFrame = function (b) {
        b();
        return 0
    };
    this.cancelAnimationFrame = function () {
    }
}
Runtime.create = function () {
    return"undefined" !== String(typeof window) ? new BrowserRuntime(window.document.getElementById("logoutput")) : "undefined" !== String(typeof require) ? new NodeJSRuntime : new RhinoRuntime
};
var runtime = Runtime.create(), core = {}, gui = {}, xmldom = {}, odf = {}, ops = {}, webodf = {};
(function () {
    webodf.Version = "undefined" !== String(typeof webodf_version) ? webodf_version : "From Source"
})();
(function () {
    function f(b, d, c) {
        var h = b + "/manifest.json", e, a;
        runtime.log("Loading manifest: " + h);
        try {
            e = runtime.readFileSync(h, "utf-8")
        } catch (m) {
            if (c)runtime.log("No loadable manifest found."); else throw console.log(String(m)), m;
            return
        }
        c = JSON.parse(e);
        for (a in c)c.hasOwnProperty(a) && (d[a] = {dir: b, deps: c[a]})
    }

    function k(b, d, c) {
        function h(g) {
            if (!m[g] && !c(g)) {
                if (a[g])throw"Circular dependency detected for " + g + ".";
                a[g] = !0;
                if (!d[g])throw"Missing dependency information for class " + g + ".";
                var b = d[g], l = b.deps,
                    f, r = l.length;
                for (f = 0; f < r; f += 1)h(l[f]);
                a[g] = !1;
                m[g] = !0;
                e.push(b.dir + "/" + g.replace(".", "/") + ".js")
            }
        }

        var e = [], a = {}, m = {};
        b.forEach(h);
        return e
    }

    function d(b, d) {
        return d = d + ("\n//# sourceURL=" + b) + ("\n//@ sourceURL=" + b)
    }

    function b(b) {
        var c, h;
        for (c = 0; c < b.length; c += 1)h = runtime.readFileSync(b[c], "utf-8"), h = d(b[c], h), eval(h)
    }

    function c(b) {
        b = b.split(".");
        var d, c = r, h = b.length;
        for (d = 0; d < h; d += 1) {
            if (!c.hasOwnProperty(b[d]))return!1;
            c = c[b[d]]
        }
        return!0
    }

    var h, r = {core: core, gui: gui, xmldom: xmldom, odf: odf, ops: ops};
    runtime.loadClasses =
        function (d, r) {
            if (IS_COMPILED_CODE || 0 === d.length)return r && r();
            var n;
            if (!(n = h)) {
                n = [];
                var q = runtime.libraryPaths(), e;
                runtime.currentDirectory() && -1 === q.indexOf(runtime.currentDirectory()) && f(runtime.currentDirectory(), n, !0);
                for (e = 0; e < q.length; e += 1)f(q[e], n)
            }
            h = n;
            d = k(d, h, c);
            if (0 === d.length)return r && r();
            if ("BrowserRuntime" === runtime.type() && r) {
                n = d;
                q = document.currentScript || document.documentElement.lastChild;
                e = document.createDocumentFragment();
                var a, m;
                for (m = 0; m < n.length; m += 1)a = document.createElement("script"),
                    a.type = "text/javascript", a.charset = "utf-8", a.async = !1, a.setAttribute("src", n[m]), e.appendChild(a);
                r && (a.onload = r);
                q.parentNode.insertBefore(e, q)
            } else b(d), r && r()
        };
    runtime.loadClass = function (b, d) {
        runtime.loadClasses([b], d)
    }
})();
(function () {
    var f = function (f) {
        return f
    };
    runtime.getTranslator = function () {
        return f
    };
    runtime.setTranslator = function (k) {
        f = k
    };
    runtime.tr = function (k) {
        var d = f(k);
        return d && "string" === String(typeof d) ? d : k
    }
})();
(function (f) {
    function k(d) {
        if (d.length) {
            var b = d[0];
            runtime.readFile(b, "utf8", function (c, h) {
                function f() {
                    var b;
                    (b = eval(p)) && runtime.exit(b)
                }

                var l = "", l = b.lastIndexOf("/"), p = h, l = -1 !== l ? b.substring(0, l) : ".";
                runtime.setCurrentDirectory(l);
                c ? (runtime.log(c), runtime.exit(1)) : null === p ? (runtime.log("No code found for " + b), runtime.exit(1)) : f.apply(null, d)
            })
        }
    }

    f = f ? Array.prototype.slice.call(f) : [];
    "NodeJSRuntime" === runtime.type() ? k(process.argv.slice(2)) : "RhinoRuntime" === runtime.type() ? k(f) : k(f.slice(1))
})("undefined" !==
    String(typeof arguments) && arguments);
(function () {
    core.Async = function () {
        return{forEach: function (f, k, d) {
            function b(b) {
                r !== h && (b ? (r = h, d(b)) : (r += 1, r === h && d(null)))
            }

            var c, h = f.length, r = 0;
            for (c = 0; c < h; c += 1)k(f[c], b)
        }, destroyAll: function (f, k) {
            function d(b, c) {
                if (c)k(c); else if (b < f.length)f[b](function (c) {
                    d(b + 1, c)
                }); else k()
            }

            d(0, void 0)
        }}
    }()
})();
function makeBase64() {
    function f(a) {
        var g, m = a.length, e = new Uint8Array(new ArrayBuffer(m));
        for (g = 0; g < m; g += 1)e[g] = a.charCodeAt(g) & 255;
        return e
    }

    function k(a) {
        var g, m = "", e, b = a.length - 2;
        for (e = 0; e < b; e += 3)g = a[e] << 16 | a[e + 1] << 8 | a[e + 2], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g >>> 18], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g >>> 12 & 63], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g >>> 6 & 63], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g &
            63];
        e === b + 1 ? (g = a[e] << 4, m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g >>> 6], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g & 63], m += "==") : e === b && (g = a[e] << 10 | a[e + 1] << 2, m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g >>> 12], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g >>> 6 & 63], m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g & 63], m += "=");
        return m
    }

    function d(a) {
        a = a.replace(/[^A-Za-z0-9+\/]+/g,
            "");
        var m = a.length, e = new Uint8Array(new ArrayBuffer(3 * m)), b = a.length % 4, d = 0, c, H;
        for (c = 0; c < m; c += 4)H = (g[a.charAt(c)] || 0) << 18 | (g[a.charAt(c + 1)] || 0) << 12 | (g[a.charAt(c + 2)] || 0) << 6 | (g[a.charAt(c + 3)] || 0), e[d] = H >> 16, e[d + 1] = H >> 8 & 255, e[d + 2] = H & 255, d += 3;
        m = 3 * m - [0, 0, 2, 1][b];
        return e.subarray(0, m)
    }

    function b(a) {
        var g, m, e = a.length, b = 0, d = new Uint8Array(new ArrayBuffer(3 * e));
        for (g = 0; g < e; g += 1)m = a[g], 128 > m ? d[b++] = m : (2048 > m ? d[b++] = 192 | m >>> 6 : (d[b++] = 224 | m >>> 12 & 15, d[b++] = 128 | m >>> 6 & 63), d[b++] = 128 | m & 63);
        return d.subarray(0,
            b)
    }

    function c(a) {
        var g, m, e, b, d = a.length, H = new Uint8Array(new ArrayBuffer(d)), c = 0;
        for (g = 0; g < d; g += 1)m = a[g], 128 > m ? H[c++] = m : (g += 1, e = a[g], 224 > m ? H[c++] = (m & 31) << 6 | e & 63 : (g += 1, b = a[g], H[c++] = (m & 15) << 12 | (e & 63) << 6 | b & 63));
        return H.subarray(0, c)
    }

    function h(a) {
        return k(f(a))
    }

    function r(a) {
        return String.fromCharCode.apply(String, d(a))
    }

    function l(a) {
        return c(f(a))
    }

    function p(a) {
        a = c(a);
        for (var g = "", m = 0; m < a.length;)g += String.fromCharCode.apply(String, a.subarray(m, m + 45E3)), m += 45E3;
        return g
    }

    function n(a, g, m) {
        var e, b,
            d, H = "";
        for (d = g; d < m; d += 1)g = a.charCodeAt(d) & 255, 128 > g ? H += String.fromCharCode(g) : (d += 1, e = a.charCodeAt(d) & 255, 224 > g ? H += String.fromCharCode((g & 31) << 6 | e & 63) : (d += 1, b = a.charCodeAt(d) & 255, H += String.fromCharCode((g & 15) << 12 | (e & 63) << 6 | b & 63)));
        return H
    }

    function q(a, g) {
        function m() {
            var d = b + 1E5;
            d > a.length && (d = a.length);
            e += n(a, b, d);
            b = d;
            d = b === a.length;
            g(e, d) && !d && runtime.setTimeout(m, 0)
        }

        var e = "", b = 0;
        1E5 > a.length ? g(n(a, 0, a.length), !0) : ("string" !== typeof a && (a = a.slice()), m())
    }

    function e(a) {
        return b(f(a))
    }

    function a(a) {
        return String.fromCharCode.apply(String,
            b(a))
    }

    function m(a) {
        return String.fromCharCode.apply(String, b(f(a)))
    }

    var g = function (a) {
        var g = {}, m, e;
        m = 0;
        for (e = a.length; m < e; m += 1)g[a.charAt(m)] = m;
        return g
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), z, t, v = runtime.getWindow(), y, s;
    v && v.btoa ? (y = v.btoa, z = function (a) {
        return y(m(a))
    }) : (y = h, z = function (a) {
        return k(e(a))
    });
    v && v.atob ? (s = v.atob, t = function (a) {
        a = s(a);
        return n(a, 0, a.length)
    }) : (s = r, t = function (a) {
        return p(d(a))
    });
    core.Base64 = function () {
        this.convertByteArrayToBase64 = this.convertUTF8ArrayToBase64 =
            k;
        this.convertBase64ToByteArray = this.convertBase64ToUTF8Array = d;
        this.convertUTF16ArrayToByteArray = this.convertUTF16ArrayToUTF8Array = b;
        this.convertByteArrayToUTF16Array = this.convertUTF8ArrayToUTF16Array = c;
        this.convertUTF8StringToBase64 = h;
        this.convertBase64ToUTF8String = r;
        this.convertUTF8StringToUTF16Array = l;
        this.convertByteArrayToUTF16String = this.convertUTF8ArrayToUTF16String = p;
        this.convertUTF8StringToUTF16String = q;
        this.convertUTF16StringToByteArray = this.convertUTF16StringToUTF8Array = e;
        this.convertUTF16ArrayToUTF8String =
            a;
        this.convertUTF16StringToUTF8String = m;
        this.convertUTF16StringToBase64 = z;
        this.convertBase64ToUTF16String = t;
        this.fromBase64 = r;
        this.toBase64 = h;
        this.atob = s;
        this.btoa = y;
        this.utob = m;
        this.btou = q;
        this.encode = z;
        this.encodeURI = function (a) {
            return z(a).replace(/[+\/]/g,function (a) {
                return"+" === a ? "-" : "_"
            }).replace(/\\=+$/, "")
        };
        this.decode = function (a) {
            return t(a.replace(/[\-_]/g, function (a) {
                return"-" === a ? "+" : "/"
            }))
        };
        return this
    };
    return core.Base64
}
core.Base64 = makeBase64();
core.ByteArray = function (f) {
    this.pos = 0;
    this.data = f;
    this.readUInt32LE = function () {
        this.pos += 4;
        var f = this.data, d = this.pos;
        return f[--d] << 24 | f[--d] << 16 | f[--d] << 8 | f[--d]
    };
    this.readUInt16LE = function () {
        this.pos += 2;
        var f = this.data, d = this.pos;
        return f[--d] << 8 | f[--d]
    }
};
core.ByteArrayWriter = function (f) {
    function k(d) {
        d > c - b && (c = Math.max(2 * c, b + d), d = new Uint8Array(new ArrayBuffer(c)), d.set(h), h = d)
    }

    var d = this, b = 0, c = 1024, h = new Uint8Array(new ArrayBuffer(c));
    this.appendByteArrayWriter = function (b) {
        d.appendByteArray(b.getByteArray())
    };
    this.appendByteArray = function (d) {
        var c = d.length;
        k(c);
        h.set(d, b);
        b += c
    };
    this.appendArray = function (d) {
        var c = d.length;
        k(c);
        h.set(d, b);
        b += c
    };
    this.appendUInt16LE = function (b) {
        d.appendArray([b & 255, b >> 8 & 255])
    };
    this.appendUInt32LE = function (b) {
        d.appendArray([b &
            255, b >> 8 & 255, b >> 16 & 255, b >> 24 & 255])
    };
    this.appendString = function (b) {
        d.appendByteArray(runtime.byteArrayFromString(b, f))
    };
    this.getLength = function () {
        return b
    };
    this.getByteArray = function () {
        var d = new Uint8Array(new ArrayBuffer(b));
        d.set(h.subarray(0, b));
        return d
    }
};
core.CSSUnits = function () {
    var f = this, k = {"in": 1, cm: 2.54, mm: 25.4, pt: 72, pc: 12, px: 96};
    this.convert = function (d, b, c) {
        return d * k[c] / k[b]
    };
    this.convertMeasure = function (d, b) {
        var c, h;
        d && b && (c = parseFloat(d), h = d.replace(c.toString(), ""), c = f.convert(c, h, b));
        return c
    };
    this.getUnits = function (d) {
        return d.substr(d.length - 2, d.length)
    }
};
(function () {
    function f() {
        var b, c, h, f, l, p, k, q, e;
        void 0 === d && (c = (b = runtime.getWindow()) && b.document, p = c.documentElement, k = c.body, d = {rangeBCRIgnoresElementBCR: !1, unscaledRangeClientRects: !1, elementBCRIgnoresBodyScroll: !1}, c && (f = c.createElement("div"), f.style.position = "absolute", f.style.left = "-99999px", f.style.transform = "scale(2)", f.style["-webkit-transform"] = "scale(2)", l = c.createElement("div"), f.appendChild(l), k.appendChild(f), b = c.createRange(), b.selectNode(l), d.rangeBCRIgnoresElementBCR = 0 === b.getClientRects().length,
            l.appendChild(c.createTextNode("Rect transform test")), c = l.getBoundingClientRect(), h = b.getBoundingClientRect(), d.unscaledRangeClientRects = 2 < Math.abs(c.height - h.height), f.style.transform = "", f.style["-webkit-transform"] = "", c = p.style.overflow, h = k.style.overflow, q = k.style.height, e = k.scrollTop, p.style.overflow = "visible", k.style.overflow = "visible", k.style.height = "200%", k.scrollTop = k.scrollHeight, d.elementBCRIgnoresBodyScroll = b.getBoundingClientRect().top !== l.getBoundingClientRect().top, k.scrollTop = e, k.style.height =
            q, k.style.overflow = h, p.style.overflow = c, b.detach(), k.removeChild(f), b = Object.keys(d).map(function (a) {
            return a + ":" + String(d[a])
        }).join(", "), runtime.log("Detected browser quirks - " + b)));
        return d
    }

    function k(b, d, h) {
        for (b = b ? b.firstElementChild : null; b;) {
            if (b.localName === h && b.namespaceURI === d)return b;
            b = b.nextElementSibling
        }
        return null
    }

    var d;
    core.DomUtils = function () {
        function b(a, g) {
            for (var e = 0, b; a.parentNode !== g;)runtime.assert(null !== a.parentNode, "parent is null"), a = a.parentNode;
            for (b = g.firstChild; b !==
                a;)e += 1, b = b.nextSibling;
            return e
        }

        function d(a, g) {
            return 0 >= a.compareBoundaryPoints(Range.START_TO_START, g) && 0 <= a.compareBoundaryPoints(Range.END_TO_END, g)
        }

        function h(a, g) {
            return 0 >= a.compareBoundaryPoints(Range.END_TO_START, g) && 0 <= a.compareBoundaryPoints(Range.START_TO_END, g)
        }

        function r(a, g) {
            var e = null;
            a.nodeType === Node.TEXT_NODE && (0 === a.length ? (a.parentNode.removeChild(a), g.nodeType === Node.TEXT_NODE && (e = g)) : (g.nodeType === Node.TEXT_NODE && (a.appendData(g.data), g.parentNode.removeChild(g)), e = a));
            return e
        }

        function l(a) {
            for (var g = a.parentNode; a.firstChild;)g.insertBefore(a.firstChild, a);
            g.removeChild(a);
            return g
        }

        function p(a, g) {
            for (var e = a.parentNode, b = a.firstChild, d; b;)d = b.nextSibling, p(b, g), b = d;
            e && g(a) && l(a);
            return e
        }

        function n(a, g) {
            return a === g || Boolean(a.compareDocumentPosition(g) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        }

        function q(a, g) {
            return f().unscaledRangeClientRects ? a : a / g
        }

        function e(a, g, b) {
            Object.keys(g).forEach(function (d) {
                var c = d.split(":"), h = c[1], l = b(c[0]), c = g[d], f = typeof c;
                "object" === f ? Object.keys(c).length &&
                    (d = l ? a.getElementsByTagNameNS(l, h)[0] || a.ownerDocument.createElementNS(l, d) : a.getElementsByTagName(h)[0] || a.ownerDocument.createElement(d), a.appendChild(d), e(d, c, b)) : l && (runtime.assert("number" === f || "string" === f, "attempting to map unsupported type '" + f + "' (key: " + d + ")"), a.setAttributeNS(l, d, String(c)))
            })
        }

        var a = null;
        this.splitBoundaries = function (a) {
            var g, e = [], d, c, h;
            if (a.startContainer.nodeType === Node.TEXT_NODE || a.endContainer.nodeType === Node.TEXT_NODE) {
                d = a.endContainer;
                c = a.endContainer.nodeType !==
                    Node.TEXT_NODE ? a.endOffset === a.endContainer.childNodes.length : !1;
                h = a.endOffset;
                g = a.endContainer;
                if (h < g.childNodes.length)for (g = g.childNodes.item(h), h = 0; g.firstChild;)g = g.firstChild; else for (; g.lastChild;)g = g.lastChild, h = g.nodeType === Node.TEXT_NODE ? g.textContent.length : g.childNodes.length;
                g === d && (d = null);
                a.setEnd(g, h);
                h = a.endContainer;
                0 !== a.endOffset && h.nodeType === Node.TEXT_NODE && (g = h, a.endOffset !== g.length && (e.push(g.splitText(a.endOffset)), e.push(g)));
                h = a.startContainer;
                0 !== a.startOffset && h.nodeType ===
                    Node.TEXT_NODE && (g = h, a.startOffset !== g.length && (h = g.splitText(a.startOffset), e.push(g), e.push(h), a.setStart(h, 0)));
                if (null !== d) {
                    for (h = a.endContainer; h.parentNode && h.parentNode !== d;)h = h.parentNode;
                    c = c ? d.childNodes.length : b(h, d);
                    a.setEnd(d, c)
                }
            }
            return e
        };
        this.containsRange = d;
        this.rangesIntersect = h;
        this.rangeIntersection = function (a, g) {
            var e;
            h(a, g) && (e = a.cloneRange(), -1 === a.compareBoundaryPoints(Range.START_TO_START, g) && e.setStart(g.startContainer, g.startOffset), 1 === a.compareBoundaryPoints(Range.END_TO_END,
                g) && e.setEnd(g.endContainer, g.endOffset));
            return e
        };
        this.getNodesInRange = function (a, g, e) {
            var b = [], d = a.commonAncestorContainer, d = d.nodeType === Node.TEXT_NODE ? d.parentNode : d;
            e = a.startContainer.ownerDocument.createTreeWalker(d, e, g, !1);
            var c, h;
            a.endContainer.childNodes[a.endOffset - 1] ? (c = a.endContainer.childNodes[a.endOffset - 1], h = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY) : (c = a.endContainer, h = Node.DOCUMENT_POSITION_PRECEDING);
            a.startContainer.childNodes[a.startOffset] ? (a = a.startContainer.childNodes[a.startOffset],
                e.currentNode = a) : a.startOffset === (a.startContainer.nodeType === Node.TEXT_NODE ? a.startContainer.length : a.startContainer.childNodes.length) ? (a = a.startContainer, e.currentNode = a, e.lastChild(), a = e.nextNode()) : (a = a.startContainer, e.currentNode = a);
            if (a) {
                a = e.currentNode;
                if (a !== d)for (a = a.parentNode; a && a !== d;)g(a) === NodeFilter.FILTER_REJECT && (e.currentNode = a), a = a.parentNode;
                a = e.currentNode;
                switch (g(a)) {
                    case NodeFilter.FILTER_REJECT:
                        for (a = e.nextSibling(); !a && e.parentNode();)a = e.nextSibling();
                        break;
                    case NodeFilter.FILTER_SKIP:
                        a =
                            e.nextNode()
                }
                for (; a;) {
                    g = c.compareDocumentPosition(a);
                    if (0 !== g && 0 === (g & h))break;
                    b.push(a);
                    a = e.nextNode()
                }
            }
            return b
        };
        this.normalizeTextNodes = function (a) {
            a && a.nextSibling && (a = r(a, a.nextSibling));
            a && a.previousSibling && r(a.previousSibling, a)
        };
        this.rangeContainsNode = function (a, g) {
            var e = g.ownerDocument.createRange(), b = g.ownerDocument.createRange(), h;
            e.setStart(a.startContainer, a.startOffset);
            e.setEnd(a.endContainer, a.endOffset);
            b.selectNodeContents(g);
            h = d(e, b);
            e.detach();
            b.detach();
            return h
        };
        this.mergeIntoParent =
            l;
        this.removeUnwantedNodes = p;
        this.getElementsByTagNameNS = function (a, g, e) {
            var b = [];
            a = a.getElementsByTagNameNS(g, e);
            b.length = e = a.length;
            for (g = 0; g < e; g += 1)b[g] = a.item(g);
            return b
        };
        this.getElementsByTagName = function (a, g) {
            var e = [], b, d, c;
            b = a.getElementsByTagName(g);
            e.length = c = b.length;
            for (d = 0; d < c; d += 1)e[d] = b.item(d);
            return e
        };
        this.containsNode = function (a, e) {
            return a === e || a.contains(e)
        };
        this.comparePoints = function (a, e, d, c) {
            if (a === d)return c - e;
            var h = a.compareDocumentPosition(d);
            2 === h ? h = -1 : 4 === h ? h = 1 : 10 === h ?
                (e = b(a, d), h = e < c ? 1 : -1) : (c = b(d, a), h = c < e ? -1 : 1);
            return h
        };
        this.adaptRangeDifferenceToZoomLevel = q;
        this.translateRect = function (a, e, b) {
            return{top: q(a.top - e.top, b), left: q(a.left - e.left, b), bottom: q(a.bottom - e.top, b), right: q(a.right - e.left, b), width: q(a.width, b), height: q(a.height, b)}
        };
        this.getBoundingClientRect = function (e) {
            var g = e.ownerDocument, b = f(), d = g.body;
            if ((!1 === b.unscaledRangeClientRects || b.rangeBCRIgnoresElementBCR) && e.nodeType === Node.ELEMENT_NODE)return e = e.getBoundingClientRect(), b.elementBCRIgnoresBodyScroll ?
            {left: e.left + d.scrollLeft, right: e.right + d.scrollLeft, top: e.top + d.scrollTop, bottom: e.bottom + d.scrollTop, width: e.width, height: e.height} : e;
            var c;
            a ? c = a : a = c = g.createRange();
            b = c;
            b.selectNode(e);
            return b.getBoundingClientRect()
        };
        this.mapKeyValObjOntoNode = function (a, e, b) {
            Object.keys(e).forEach(function (d) {
                var c = d.split(":"), h = c[1], c = b(c[0]), l = e[d];
                c ? (h = a.getElementsByTagNameNS(c, h)[0], h || (h = a.ownerDocument.createElementNS(c, d), a.appendChild(h)), h.textContent = l) : runtime.log("Key ignored: " + d)
            })
        };
        this.removeKeyElementsFromNode =
            function (a, e, b) {
                e.forEach(function (e) {
                    var g = e.split(":"), d = g[1];
                    (g = b(g[0])) ? (d = a.getElementsByTagNameNS(g, d)[0]) ? d.parentNode.removeChild(d) : runtime.log("Element for " + e + " not found.") : runtime.log("Property Name ignored: " + e)
                })
            };
        this.getKeyValRepresentationOfNode = function (a, e) {
            for (var b = {}, d = a.firstElementChild, c; d;) {
                if (c = e(d.namespaceURI))b[c + ":" + d.localName] = d.textContent;
                d = d.nextElementSibling
            }
            return b
        };
        this.mapObjOntoNode = e;
        this.cloneEvent = function (a) {
            var e = Object.create(null);
            Object.keys(a).forEach(function (b) {
                e[b] =
                    a[b]
            });
            e.prototype = a.constructor.prototype;
            return e
        };
        this.getDirectChild = k;
        (function (a) {
            var e, b;
            b = runtime.getWindow();
            null !== b && (e = b.navigator.appVersion.toLowerCase(), b = -1 === e.indexOf("chrome") && (-1 !== e.indexOf("applewebkit") || -1 !== e.indexOf("safari")), e = e.indexOf("msie"), b || e) && (a.containsNode = n)
        })(this)
    }
})();
core.Cursor = function (f, k) {
    function d(e) {
        e.parentNode && (l.push(e.previousSibling), l.push(e.nextSibling), e.parentNode.removeChild(e))
    }

    function b(e, a, b) {
        if (a.nodeType === Node.TEXT_NODE) {
            runtime.assert(Boolean(a), "putCursorIntoTextNode: invalid container");
            var g = a.parentNode;
            runtime.assert(Boolean(g), "putCursorIntoTextNode: container without parent");
            runtime.assert(0 <= b && b <= a.length, "putCursorIntoTextNode: offset is out of bounds");
            0 === b ? g.insertBefore(e, a) : (b !== a.length && a.splitText(b), g.insertBefore(e,
                a.nextSibling))
        } else a.nodeType === Node.ELEMENT_NODE && a.insertBefore(e, a.childNodes.item(b));
        l.push(e.previousSibling);
        l.push(e.nextSibling)
    }

    var c = f.createElementNS("urn:webodf:names:cursor", "cursor"), h = f.createElementNS("urn:webodf:names:cursor", "anchor"), r, l = [], p = f.createRange(), n, q = new core.DomUtils;
    this.getNode = function () {
        return c
    };
    this.getAnchorNode = function () {
        return h.parentNode ? h : c
    };
    this.getSelectedRange = function () {
        n ? (p.setStartBefore(c), p.collapse(!0)) : (p.setStartAfter(r ? h : c), p.setEndBefore(r ?
            c : h));
        return p
    };
    this.setSelectedRange = function (e, a) {
        p && p !== e && p.detach();
        p = e;
        r = !1 !== a;
        (n = e.collapsed) ? (d(h), d(c), b(c, e.startContainer, e.startOffset)) : (d(h), d(c), b(r ? c : h, e.endContainer, e.endOffset), b(r ? h : c, e.startContainer, e.startOffset));
        l.forEach(q.normalizeTextNodes);
        l.length = 0
    };
    this.hasForwardSelection = function () {
        return r
    };
    this.remove = function () {
        d(c);
        l.forEach(q.normalizeTextNodes);
        l.length = 0
    };
    c.setAttributeNS("urn:webodf:names:cursor", "memberId", k);
    h.setAttributeNS("urn:webodf:names:cursor", "memberId",
        k)
};
core.Destroyable = function () {
};
core.Destroyable.prototype.destroy = function (f) {
};
core.EventNotifier = function (f) {
    function k(b) {
        runtime.assert(!d.hasOwnProperty(b), 'Duplicated event ids: "' + b + '" registered more than once.');
        d[b] = []
    }

    var d = {};
    this.emit = function (b, c) {
        var h, f;
        runtime.assert(d.hasOwnProperty(b), 'unknown event fired "' + b + '"');
        f = d[b];
        for (h = 0; h < f.length; h += 1)f[h](c)
    };
    this.subscribe = function (b, c) {
        runtime.assert(d.hasOwnProperty(b), 'tried to subscribe to unknown event "' + b + '"');
        d[b].push(c)
    };
    this.unsubscribe = function (b, c) {
        var h;
        runtime.assert(d.hasOwnProperty(b), 'tried to unsubscribe from unknown event "' +
            b + '"');
        h = d[b].indexOf(c);
        runtime.assert(-1 !== h, 'tried to unsubscribe unknown callback from event "' + b + '"');
        -1 !== h && d[b].splice(h, 1)
    };
    this.register = k;
    f && f.forEach(k)
};
core.LazyProperty = function (f) {
    var k, d = !1;
    this.value = function () {
        d || (k = f(), d = !0);
        return k
    };
    this.reset = function () {
        d = !1
    }
};
core.LoopWatchDog = function (f, k) {
    var d = Date.now(), b = 0;
    this.check = function () {
        var c;
        if (f && (c = Date.now(), c - d > f))throw runtime.log("alert", "watchdog timeout"), "timeout!";
        if (0 < k && (b += 1, b > k))throw runtime.log("alert", "watchdog loop overflow"), "loop overflow";
    }
};
core.PositionIterator = function (f, k, d, b) {
    function c() {
        this.acceptNode = function (a) {
            return!a || a.nodeType === m && 0 === a.length ? t : z
        }
    }

    function h(a) {
        this.acceptNode = function (e) {
            return!e || e.nodeType === m && 0 === e.length ? t : a.acceptNode(e)
        }
    }

    function r() {
        var a = q.currentNode, b = a.nodeType;
        e = b === m ? a.length - 1 : b === g ? 1 : 0
    }

    function l() {
        if (null === q.previousSibling()) {
            if (!q.parentNode() || q.currentNode === f)return q.firstChild(), !1;
            e = 0
        } else r();
        return!0
    }

    function p() {
        var g = q.currentNode, b;
        b = a(g);
        if (g !== f)for (g = g.parentNode; g &&
            g !== f;)a(g) === t && (q.currentNode = g, b = t), g = g.parentNode;
        b === t ? (e = 1, g = n.nextPosition()) : g = b === z ? !0 : n.nextPosition();
        g && runtime.assert(a(q.currentNode) === z, "moveToAcceptedNode did not result in walker being on an accepted node");
        return g
    }

    var n = this, q, e, a, m = Node.TEXT_NODE, g = Node.ELEMENT_NODE, z = NodeFilter.FILTER_ACCEPT, t = NodeFilter.FILTER_REJECT;
    this.nextPosition = function () {
        var a = q.currentNode, b = a.nodeType;
        if (a === f)return!1;
        if (0 === e && b === g)null === q.firstChild() && (e = 1); else if (b === m && e + 1 < a.length)e += 1; else if (null !==
            q.nextSibling())e = 0; else if (q.parentNode())e = 1; else return!1;
        return!0
    };
    this.previousPosition = function () {
        var a = !0, g = q.currentNode;
        0 === e ? a = l() : g.nodeType === m ? e -= 1 : null !== q.lastChild() ? r() : g === f ? a = !1 : e = 0;
        return a
    };
    this.previousNode = l;
    this.container = function () {
        var a = q.currentNode, g = a.nodeType;
        0 === e && g !== m && (a = a.parentNode);
        return a
    };
    this.rightNode = function () {
        var b = q.currentNode, d = b.nodeType;
        if (d === m && e === b.length)for (b = b.nextSibling; b && a(b) !== z;)b = b.nextSibling; else d === g && 1 === e && (b = null);
        return b
    };
    this.leftNode =
        function () {
            var b = q.currentNode;
            if (0 === e)for (b = b.previousSibling; b && a(b) !== z;)b = b.previousSibling; else if (b.nodeType === g)for (b = b.lastChild; b && a(b) !== z;)b = b.previousSibling;
            return b
        };
    this.getCurrentNode = function () {
        return q.currentNode
    };
    this.unfilteredDomOffset = function () {
        if (q.currentNode.nodeType === m)return e;
        for (var a = 0, g = q.currentNode, g = 1 === e ? g.lastChild : g.previousSibling; g;)a += 1, g = g.previousSibling;
        return a
    };
    this.getPreviousSibling = function () {
        var a = q.currentNode, e = q.previousSibling();
        q.currentNode =
            a;
        return e
    };
    this.getNextSibling = function () {
        var a = q.currentNode, e = q.nextSibling();
        q.currentNode = a;
        return e
    };
    this.setPositionBeforeElement = function (a) {
        runtime.assert(Boolean(a), "setPositionBeforeElement called without element");
        q.currentNode = a;
        e = 0;
        return p()
    };
    this.setUnfilteredPosition = function (a, g) {
        runtime.assert(Boolean(a), "PositionIterator.setUnfilteredPosition called without container");
        q.currentNode = a;
        if (a.nodeType === m)return e = g, runtime.assert(g <= a.length, "Error in setPosition: " + g + " > " + a.length),
            runtime.assert(0 <= g, "Error in setPosition: " + g + " < 0"), g === a.length && (q.nextSibling() ? e = 0 : q.parentNode() ? e = 1 : runtime.assert(!1, "Error in setUnfilteredPosition: position not valid.")), !0;
        g < a.childNodes.length ? (q.currentNode = a.childNodes.item(g), e = 0) : e = 1;
        return p()
    };
    this.moveToEnd = function () {
        q.currentNode = f;
        e = 1
    };
    this.moveToEndOfNode = function (a) {
        a.nodeType === m ? n.setUnfilteredPosition(a, a.length) : (q.currentNode = a, e = 1)
    };
    this.isBeforeNode = function () {
        return 0 === e
    };
    this.getNodeFilter = function () {
        return a
    };
    a = (d ? new h(d) : new c).acceptNode;
    a.acceptNode = a;
    k = k || NodeFilter.SHOW_ALL;
    runtime.assert(f.nodeType !== Node.TEXT_NODE, "Internet Explorer doesn't allow tree walker roots to be text nodes");
    q = f.ownerDocument.createTreeWalker(f, k, a, b);
    e = 0;
    null === q.firstChild() && (e = 1)
};
core.PositionFilter = function () {
};
core.PositionFilter.FilterResult = {FILTER_ACCEPT: 1, FILTER_REJECT: 2, FILTER_SKIP: 3};
core.PositionFilter.prototype.acceptPosition = function (f) {
};
core.PositionFilterChain = function () {
    var f = [], k = core.PositionFilter.FilterResult.FILTER_ACCEPT, d = core.PositionFilter.FilterResult.FILTER_REJECT;
    this.acceptPosition = function (b) {
        var c;
        for (c = 0; c < f.length; c += 1)if (f[c].acceptPosition(b) === d)return d;
        return k
    };
    this.addFilter = function (b) {
        f.push(b)
    }
};
(function () {
    core.RawInflate = function () {
        var f;
        (function (k) {
            f = k()
        })(function () {
            return function d(b, c, h) {
                function f(l, n) {
                    if (!c[l]) {
                        if (!b[l])throw Error("Cannot find module '" + l + "'");
                        var q = c[l] = {exports: {}};
                        b[l][0].call(q.exports, function (e) {
                            var a = b[l][1][e];
                            return f(a ? a : e)
                        }, q, q.exports, d, b, c, h)
                    }
                    return c[l].exports
                }

                for (var l = 0; l < h.length; l++)f(h[l]);
                return f
            }({1: [function (d, b, c) {
                function h(a, e) {
                    var b = new m(e);
                    b.push(a, !0);
                    if (b.err)throw b.msg;
                    return b.result
                }

                var f = d("./zlib/inflate.js"), l = d("./utils/common"),
                    p = d("./utils/strings"), n = d("./zlib/constants"), q = d("./zlib/messages"), e = d("./zlib/zstream"), a = d("./zlib/gzheader"), m = function (g) {
                        var b = this.options = l.assign({chunkSize: 16384, windowBits: 0, to: ""}, g || {});
                        b.raw && 0 <= b.windowBits && 16 > b.windowBits && (b.windowBits = -b.windowBits, 0 === b.windowBits && (b.windowBits = -15));
                        !(0 <= b.windowBits && 16 > b.windowBits) || g && g.windowBits || (b.windowBits += 32);
                        15 < b.windowBits && 48 > b.windowBits && 0 === (b.windowBits & 15) && (b.windowBits |= 15);
                        this.err = 0;
                        this.msg = "";
                        this.ended = !1;
                        this.chunks =
                            [];
                        this.strm = new e;
                        this.strm.avail_out = 0;
                        g = f.inflateInit2(this.strm, b.windowBits);
                        if (g !== n.Z_OK)throw Error(q[g]);
                        this.header = new a;
                        f.inflateGetHeader(this.strm, this.header)
                    };
                m.prototype.push = function (a, e) {
                    var b = this.strm, m = this.options.chunkSize, d, c, h, q, A;
                    if (this.ended)return!1;
                    c = e === ~~e ? e : !0 === e ? n.Z_FINISH : n.Z_NO_FLUSH;
                    b.input = "string" === typeof a ? p.binstring2buf(a) : a;
                    b.next_in = 0;
                    b.avail_in = b.input.length;
                    do {
                        0 === b.avail_out && (b.output = new l.Buf8(m), b.next_out = 0, b.avail_out = m);
                        d = f.inflate(b, n.Z_NO_FLUSH);
                        if (d !== n.Z_STREAM_END && d !== n.Z_OK)return this.onEnd(d), this.ended = !0, !1;
                        if (b.next_out && (0 === b.avail_out || d === n.Z_STREAM_END || 0 === b.avail_in && c === n.Z_FINISH))if ("string" === this.options.to)h = p.utf8border(b.output, b.next_out), q = b.next_out - h, A = p.buf2string(b.output, h), b.next_out = q, b.avail_out = m - q, q && l.arraySet(b.output, b.output, h, q, 0), this.onData(A); else this.onData(l.shrinkBuf(b.output, b.next_out))
                    } while ((0 < b.avail_in || 0 === b.avail_out) && d !== n.Z_STREAM_END);
                    d === n.Z_STREAM_END && (c = n.Z_FINISH);
                    return c ===
                        n.Z_FINISH ? (d = f.inflateEnd(this.strm), this.onEnd(d), this.ended = !0, d === n.Z_OK) : !0
                };
                m.prototype.onData = function (a) {
                    this.chunks.push(a)
                };
                m.prototype.onEnd = function (a) {
                    a === n.Z_OK && (this.result = "string" === this.options.to ? this.chunks.join("") : l.flattenChunks(this.chunks));
                    this.chunks = [];
                    this.err = a;
                    this.msg = this.strm.msg
                };
                c.Inflate = m;
                c.inflate = h;
                c.inflateRaw = function (a, e) {
                    e = e || {};
                    e.raw = !0;
                    return h(a, e)
                };
                c.ungzip = h
            }, {"./utils/common": 2, "./utils/strings": 3, "./zlib/constants": 5, "./zlib/gzheader": 7, "./zlib/inflate.js": 9,
                "./zlib/messages": 11, "./zlib/zstream": 12}], 2: [function (d, b, c) {
                d = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
                c.assign = function (b) {
                    for (var d = Array.prototype.slice.call(arguments, 1); d.length;) {
                        var c = d.shift();
                        if (c) {
                            if ("object" !== typeof c)throw new TypeError(c + "must be non-object");
                            for (var h in c)c.hasOwnProperty(h) && (b[h] = c[h])
                        }
                    }
                    return b
                };
                c.shrinkBuf = function (b, d) {
                    if (b.length === d)return b;
                    if (b.subarray)return b.subarray(0, d);
                    b.length = d;
                    return b
                };
                var h = {arraySet: function (b, d, c, h, e) {
                    if (d.subarray && b.subarray)b.set(d.subarray(c, c + h), e); else for (var a = 0; a < h; a++)b[e + a] = d[c + a]
                }, flattenChunks: function (b) {
                    var d, c, h, e, a;
                    d = h = 0;
                    for (c = b.length; d < c; d++)h += b[d].length;
                    a = new Uint8Array(h);
                    d = h = 0;
                    for (c = b.length; d < c; d++)e = b[d], a.set(e, h), h += e.length;
                    return a
                }}, f = {arraySet: function (b, d, c, h, e) {
                    for (var a = 0; a < h; a++)b[e + a] = d[c + a]
                }, flattenChunks: function (b) {
                    return[].concat.apply([], b)
                }};
                c.setTyped = function (b) {
                    b ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array,
                        c.assign(c, h)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, f))
                };
                c.setTyped(d)
            }, {}], 3: [function (d, b, c) {
                function h(a, e) {
                    if (65537 > e && (a.subarray && p || !a.subarray && l))return String.fromCharCode.apply(null, f.shrinkBuf(a, e));
                    for (var b = "", d = 0; d < e; d++)b += String.fromCharCode(a[d]);
                    return b
                }

                var f = d("./common"), l = !0, p = !0;
                try {
                    String.fromCharCode.apply(null, [0])
                } catch (n) {
                    l = !1
                }
                try {
                    String.fromCharCode.apply(null, new Uint8Array(1))
                } catch (q) {
                    p = !1
                }
                var e = new f.Buf8(256);
                for (d = 0; 256 > d; d++)e[d] = 252 <= d ? 6 : 248 <=
                    d ? 5 : 240 <= d ? 4 : 224 <= d ? 3 : 192 <= d ? 2 : 1;
                e[254] = e[254] = 1;
                c.string2buf = function (a) {
                    var e, b, d, c, h, l = a.length, q = 0;
                    for (c = 0; c < l; c++)b = a.charCodeAt(c), 55296 === (b & 64512) && c + 1 < l && (d = a.charCodeAt(c + 1), 56320 === (d & 64512) && (b = 65536 + (b - 55296 << 10) + (d - 56320), c++)), q += 128 > b ? 1 : 2048 > b ? 2 : 65536 > b ? 3 : 4;
                    e = new f.Buf8(q);
                    for (c = h = 0; h < q; c++)b = a.charCodeAt(c), 55296 === (b & 64512) && c + 1 < l && (d = a.charCodeAt(c + 1), 56320 === (d & 64512) && (b = 65536 + (b - 55296 << 10) + (d - 56320), c++)), 128 > b ? e[h++] = b : (2048 > b ? e[h++] = 192 | b >>> 6 : (65536 > b ? e[h++] = 224 | b >>> 12 : (e[h++] =
                        240 | b >>> 18, e[h++] = 128 | b >>> 12 & 63), e[h++] = 128 | b >>> 6 & 63), e[h++] = 128 | b & 63);
                    return e
                };
                c.buf2binstring = function (a) {
                    return h(a, a.length)
                };
                c.binstring2buf = function (a) {
                    for (var e = new f.Buf8(a.length), b = 0, d = e.length; b < d; b++)e[b] = a.charCodeAt(b);
                    return e
                };
                c.buf2string = function (a, b) {
                    var g, d, c, f, l = b || a.length, q = Array(2 * l);
                    for (g = d = 0; g < l;)if (c = a[g++], 128 > c)q[d++] = c; else if (f = e[c], 4 < f)q[d++] = 65533, g += f - 1; else {
                        for (c &= 2 === f ? 31 : 3 === f ? 15 : 7; 1 < f && g < l;)c = c << 6 | a[g++] & 63, f--;
                        1 < f ? q[d++] = 65533 : 65536 > c ? q[d++] = c : (c -= 65536, q[d++] =
                            55296 | c >> 10 & 1023, q[d++] = 56320 | c & 1023)
                    }
                    return h(q, d)
                };
                c.utf8border = function (a, b) {
                    var g;
                    b = b || a.length;
                    b > a.length && (b = a.length);
                    for (g = b - 1; 0 <= g && 128 === (a[g] & 192);)g--;
                    return 0 > g || 0 === g ? b : g + e[a[g]] > b ? g : b
                }
            }, {"./common": 2}], 4: [function (d, b, c) {
                b.exports = function (b, d, c, f) {
                    var n = b & 65535 | 0;
                    b = b >>> 16 & 65535 | 0;
                    for (var q = 0; 0 !== c;) {
                        q = 2E3 < c ? 2E3 : c;
                        c -= q;
                        do n = n + d[f++] | 0, b = b + n | 0; while (--q);
                        n %= 65521;
                        b %= 65521
                    }
                    return n | b << 16 | 0
                }
            }, {}], 5: [function (d, b, c) {
                b.exports = {Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3,
                    Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8}
            }, {}], 6: [function (d, b, c) {
                var h = function () {
                    for (var b, d = [], c = 0; 256 > c; c++) {
                        b = c;
                        for (var h = 0; 8 > h; h++)b = b & 1 ? 3988292384 ^ b >>> 1 : b >>> 1;
                        d[c] = b
                    }
                    return d
                }();
                b.exports = function (b, d, c, f) {
                    c = f + c;
                    for (b ^= -1; f < c; f++)b = b >>> 8 ^ h[(b ^ d[f]) & 255];
                    return b ^ -1
                }
            }, {}], 7: [function (d, b, c) {
                b.exports = function () {
                    this.os = this.xflags = this.time = this.text = 0;
                    this.extra = null;
                    this.extra_len = 0;
                    this.comment = this.name = "";
                    this.hcrc = 0;
                    this.done = !1
                }
            }, {}], 8: [function (d, b, c) {
                b.exports = function (b, d) {
                    var c, f, n, q, e, a, m, g, z, t, v, y, s, x, w, A, G, E, F, H, N, I, U, B;
                    c = b.state;
                    f = b.next_in;
                    U = b.input;
                    n = f + (b.avail_in - 5);
                    q = b.next_out;
                    B = b.output;
                    e = q - (d - b.avail_out);
                    a = q + (b.avail_out - 257);
                    m = c.dmax;
                    g = c.wsize;
                    z = c.whave;
                    t = c.wnext;
                    v = c.window;
                    y = c.hold;
                    s = c.bits;
                    x = c.lencode;
                    w = c.distcode;
                    A = (1 << c.lenbits) - 1;
                    G = (1 << c.distbits) - 1;
                    a:do b:for (15 > s && (y += U[f++] << s, s += 8, y += U[f++] << s, s += 8), E = x[y & A]; ;) {
                        F = E >>> 24;
                        y >>>= F;
                        s -= F;
                        F = E >>> 16 & 255;
                        if (0 === F)B[q++] = E & 65535; else if (F & 16) {
                            H = E & 65535;
                            if (F &= 15)s < F && (y += U[f++] << s, s += 8), H += y & (1 << F) - 1, y >>>= F, s -= F;
                            15 > s && (y += U[f++] << s, s += 8, y += U[f++] << s, s += 8);
                            E = w[y & G];
                            c:for (; ;) {
                                F = E >>> 24;
                                y >>>= F;
                                s -= F;
                                F = E >>> 16 & 255;
                                if (F & 16) {
                                    E &= 65535;
                                    F &= 15;
                                    s < F && (y += U[f++] << s, s += 8, s < F && (y += U[f++] << s, s += 8));
                                    E += y & (1 << F) - 1;
                                    if (E > m) {
                                        b.msg = "invalid distance too far back";
                                        c.mode = 30;
                                        break a
                                    }
                                    y >>>= F;
                                    s -= F;
                                    F = q - e;
                                    if (E > F) {
                                        F = E - F;
                                        if (F > z && c.sane) {
                                            b.msg = "invalid distance too far back";
                                            c.mode = 30;
                                            break a
                                        }
                                        N = 0;
                                        I = v;
                                        if (0 === t) {
                                            if (N += g - F, F < H) {
                                                H -= F;
                                                do B[q++] = v[N++]; while (--F);
                                                N = q - E;
                                                I = B
                                            }
                                        } else if (t < F) {
                                            if (N += g + t - F, F -= t, F < H) {
                                                H -= F;
                                                do B[q++] = v[N++]; while (--F);
                                                N = 0;
                                                if (t < H) {
                                                    F = t;
                                                    H -= F;
                                                    do B[q++] = v[N++]; while (--F);
                                                    N = q - E;
                                                    I = B
                                                }
                                            }
                                        } else if (N += t - F, F < H) {
                                            H -= F;
                                            do B[q++] = v[N++]; while (--F);
                                            N = q - E;
                                            I = B
                                        }
                                        for (; 2 < H;)B[q++] = I[N++], B[q++] = I[N++], B[q++] = I[N++], H -= 3;
                                        H && (B[q++] = I[N++], 1 < H && (B[q++] = I[N++]))
                                    } else {
                                        N = q - E;
                                        do B[q++] =
                                            B[N++], B[q++] = B[N++], B[q++] = B[N++], H -= 3; while (2 < H);
                                        H && (B[q++] = B[N++], 1 < H && (B[q++] = B[N++]))
                                    }
                                } else if (0 === (F & 64)) {
                                    E = w[(E & 65535) + (y & (1 << F) - 1)];
                                    continue c
                                } else {
                                    b.msg = "invalid distance code";
                                    c.mode = 30;
                                    break a
                                }
                                break
                            }
                        } else if (0 === (F & 64)) {
                            E = x[(E & 65535) + (y & (1 << F) - 1)];
                            continue b
                        } else {
                            F & 32 ? c.mode = 12 : (b.msg = "invalid literal/length code", c.mode = 30);
                            break a
                        }
                        break
                    } while (f < n && q < a);
                    H = s >> 3;
                    f -= H;
                    s -= H << 3;
                    b.next_in = f;
                    b.next_out = q;
                    b.avail_in = f < n ? 5 + (n - f) : 5 - (f - n);
                    b.avail_out = q < a ? 257 + (a - q) : 257 - (q - a);
                    c.hold = y & (1 << s) - 1;
                    c.bits =
                        s
                }
            }, {}], 9: [function (d, b, c) {
                function h(a) {
                    return(a >>> 24 & 255) + (a >>> 8 & 65280) + ((a & 65280) << 8) + ((a & 255) << 24)
                }

                function f() {
                    this.mode = 0;
                    this.last = !1;
                    this.wrap = 0;
                    this.havedict = !1;
                    this.total = this.check = this.dmax = this.flags = 0;
                    this.head = null;
                    this.wnext = this.whave = this.wsize = this.wbits = 0;
                    this.window = null;
                    this.extra = this.offset = this.length = this.bits = this.hold = 0;
                    this.distcode = this.lencode = null;
                    this.have = this.ndist = this.nlen = this.ncode = this.distbits = this.lenbits = 0;
                    this.next = null;
                    this.lens = new e.Buf16(320);
                    this.work =
                        new e.Buf16(288);
                    this.distdyn = this.lendyn = null;
                    this.was = this.back = this.sane = 0
                }

                function l(a) {
                    var b;
                    if (!a || !a.state)return v;
                    b = a.state;
                    a.total_in = a.total_out = b.total = 0;
                    a.msg = "";
                    b.wrap && (a.adler = b.wrap & 1);
                    b.mode = y;
                    b.last = 0;
                    b.havedict = 0;
                    b.dmax = 32768;
                    b.head = null;
                    b.hold = 0;
                    b.bits = 0;
                    b.lencode = b.lendyn = new e.Buf32(s);
                    b.distcode = b.distdyn = new e.Buf32(x);
                    b.sane = 1;
                    b.back = -1;
                    return t
                }

                function p(a) {
                    var b;
                    if (!a || !a.state)return v;
                    b = a.state;
                    b.wsize = 0;
                    b.whave = 0;
                    b.wnext = 0;
                    return l(a)
                }

                function n(a, b) {
                    var e, g;
                    if (!a || !a.state)return v;
                    g = a.state;
                    0 > b ? (e = 0, b = -b) : (e = (b >> 4) + 1, 48 > b && (b &= 15));
                    if (b && (8 > b || 15 < b))return v;
                    null !== g.window && g.wbits !== b && (g.window = null);
                    g.wrap = e;
                    g.wbits = b;
                    return p(a)
                }

                function q(a, b) {
                    var e;
                    if (!a)return v;
                    e = new f;
                    a.state = e;
                    e.window = null;
                    e = n(a, b);
                    e !== t && (a.state = null);
                    return e
                }

                var e = d("../utils/common"), a = d("./adler32"), m = d("./crc32"), g = d("./inffast"), z = d("./inftrees"), t = 0, v = -2, y = 1, s = 852, x = 592, w = !0, A, G;
                c.inflateReset = p;
                c.inflateReset2 = n;
                c.inflateResetKeep = l;
                c.inflateInit = function (a) {
                    return q(a,
                        15)
                };
                c.inflateInit2 = q;
                c.inflate = function (b, d) {
                    var c, f, q, l, r, p, n, u, s, $, x, D, P, X;
                    D = 0;
                    var C, T, L, S, J, O = new e.Buf8(4), V = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                    if (!b || !b.state || !b.output || !b.input && 0 !== b.avail_in)return v;
                    c = b.state;
                    12 === c.mode && (c.mode = 13);
                    r = b.next_out;
                    q = b.output;
                    n = b.avail_out;
                    l = b.next_in;
                    f = b.input;
                    p = b.avail_in;
                    u = c.hold;
                    s = c.bits;
                    $ = p;
                    x = n;
                    J = t;
                    a:for (; ;)switch (c.mode) {
                        case y:
                            if (0 === c.wrap) {
                                c.mode = 13;
                                break
                            }
                            for (; 16 > s;) {
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s += 8
                            }
                            if (c.wrap & 2 && 35615 === u) {
                                c.check =
                                    0;
                                O[0] = u & 255;
                                O[1] = u >>> 8 & 255;
                                c.check = m(c.check, O, 2, 0);
                                s = u = 0;
                                c.mode = 2;
                                break
                            }
                            c.flags = 0;
                            c.head && (c.head.done = !1);
                            if (!(c.wrap & 1) || (((u & 255) << 8) + (u >> 8)) % 31) {
                                b.msg = "incorrect header check";
                                c.mode = 30;
                                break
                            }
                            if (8 !== (u & 15)) {
                                b.msg = "unknown compression method";
                                c.mode = 30;
                                break
                            }
                            u >>>= 4;
                            s -= 4;
                            P = (u & 15) + 8;
                            if (0 === c.wbits)c.wbits = P; else if (P > c.wbits) {
                                b.msg = "invalid window size";
                                c.mode = 30;
                                break
                            }
                            c.dmax = 1 << P;
                            b.adler = c.check = 1;
                            c.mode = u & 512 ? 10 : 12;
                            s = u = 0;
                            break;
                        case 2:
                            for (; 16 > s;) {
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s += 8
                            }
                            c.flags =
                                u;
                            if (8 !== (c.flags & 255)) {
                                b.msg = "unknown compression method";
                                c.mode = 30;
                                break
                            }
                            if (c.flags & 57344) {
                                b.msg = "unknown header flags set";
                                c.mode = 30;
                                break
                            }
                            c.head && (c.head.text = u >> 8 & 1);
                            c.flags & 512 && (O[0] = u & 255, O[1] = u >>> 8 & 255, c.check = m(c.check, O, 2, 0));
                            s = u = 0;
                            c.mode = 3;
                        case 3:
                            for (; 32 > s;) {
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s += 8
                            }
                            c.head && (c.head.time = u);
                            c.flags & 512 && (O[0] = u & 255, O[1] = u >>> 8 & 255, O[2] = u >>> 16 & 255, O[3] = u >>> 24 & 255, c.check = m(c.check, O, 4, 0));
                            s = u = 0;
                            c.mode = 4;
                        case 4:
                            for (; 16 > s;) {
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s +=
                                    8
                            }
                            c.head && (c.head.xflags = u & 255, c.head.os = u >> 8);
                            c.flags & 512 && (O[0] = u & 255, O[1] = u >>> 8 & 255, c.check = m(c.check, O, 2, 0));
                            s = u = 0;
                            c.mode = 5;
                        case 5:
                            if (c.flags & 1024) {
                                for (; 16 > s;) {
                                    if (0 === p)break a;
                                    p--;
                                    u += f[l++] << s;
                                    s += 8
                                }
                                c.length = u;
                                c.head && (c.head.extra_len = u);
                                c.flags & 512 && (O[0] = u & 255, O[1] = u >>> 8 & 255, c.check = m(c.check, O, 2, 0));
                                s = u = 0
                            } else c.head && (c.head.extra = null);
                            c.mode = 6;
                        case 6:
                            if (c.flags & 1024 && (D = c.length, D > p && (D = p), D && (c.head && (P = c.head.extra_len - c.length, c.head.extra || (c.head.extra = Array(c.head.extra_len)), e.arraySet(c.head.extra,
                                f, l, D, P)), c.flags & 512 && (c.check = m(c.check, f, D, l)), p -= D, l += D, c.length -= D), c.length))break a;
                            c.length = 0;
                            c.mode = 7;
                        case 7:
                            if (c.flags & 2048) {
                                if (0 === p)break a;
                                D = 0;
                                do P = f[l + D++], c.head && P && 65536 > c.length && (c.head.name += String.fromCharCode(P)); while (P && D < p);
                                c.flags & 512 && (c.check = m(c.check, f, D, l));
                                p -= D;
                                l += D;
                                if (P)break a
                            } else c.head && (c.head.name = null);
                            c.length = 0;
                            c.mode = 8;
                        case 8:
                            if (c.flags & 4096) {
                                if (0 === p)break a;
                                D = 0;
                                do P = f[l + D++], c.head && P && 65536 > c.length && (c.head.comment += String.fromCharCode(P)); while (P && D <
                                    p);
                                c.flags & 512 && (c.check = m(c.check, f, D, l));
                                p -= D;
                                l += D;
                                if (P)break a
                            } else c.head && (c.head.comment = null);
                            c.mode = 9;
                        case 9:
                            if (c.flags & 512) {
                                for (; 16 > s;) {
                                    if (0 === p)break a;
                                    p--;
                                    u += f[l++] << s;
                                    s += 8
                                }
                                if (u !== (c.check & 65535)) {
                                    b.msg = "header crc mismatch";
                                    c.mode = 30;
                                    break
                                }
                                s = u = 0
                            }
                            c.head && (c.head.hcrc = c.flags >> 9 & 1, c.head.done = !0);
                            b.adler = c.check = 0;
                            c.mode = 12;
                            break;
                        case 10:
                            for (; 32 > s;) {
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s += 8
                            }
                            b.adler = c.check = h(u);
                            s = u = 0;
                            c.mode = 11;
                        case 11:
                            if (0 === c.havedict)return b.next_out = r, b.avail_out = n, b.next_in =
                                l, b.avail_in = p, c.hold = u, c.bits = s, 2;
                            b.adler = c.check = 1;
                            c.mode = 12;
                        case 12:
                            if (5 === d || 6 === d)break a;
                        case 13:
                            if (c.last) {
                                u >>>= s & 7;
                                s -= s & 7;
                                c.mode = 27;
                                break
                            }
                            for (; 3 > s;) {
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s += 8
                            }
                            c.last = u & 1;
                            u >>>= 1;
                            s -= 1;
                            switch (u & 3) {
                                case 0:
                                    c.mode = 14;
                                    break;
                                case 1:
                                    D = c;
                                    if (w) {
                                        P = void 0;
                                        A = new e.Buf32(512);
                                        G = new e.Buf32(32);
                                        for (P = 0; 144 > P;)D.lens[P++] = 8;
                                        for (; 256 > P;)D.lens[P++] = 9;
                                        for (; 280 > P;)D.lens[P++] = 7;
                                        for (; 288 > P;)D.lens[P++] = 8;
                                        z(1, D.lens, 0, 288, A, 0, D.work, {bits: 9});
                                        for (P = 0; 32 > P;)D.lens[P++] = 5;
                                        z(2, D.lens,
                                            0, 32, G, 0, D.work, {bits: 5});
                                        w = !1
                                    }
                                    D.lencode = A;
                                    D.lenbits = 9;
                                    D.distcode = G;
                                    D.distbits = 5;
                                    c.mode = 20;
                                    if (6 === d) {
                                        u >>>= 2;
                                        s -= 2;
                                        break a
                                    }
                                    break;
                                case 2:
                                    c.mode = 17;
                                    break;
                                case 3:
                                    b.msg = "invalid block type", c.mode = 30
                            }
                            u >>>= 2;
                            s -= 2;
                            break;
                        case 14:
                            u >>>= s & 7;
                            for (s -= s & 7; 32 > s;) {
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s += 8
                            }
                            if ((u & 65535) !== (u >>> 16 ^ 65535)) {
                                b.msg = "invalid stored block lengths";
                                c.mode = 30;
                                break
                            }
                            c.length = u & 65535;
                            s = u = 0;
                            c.mode = 15;
                            if (6 === d)break a;
                        case 15:
                            c.mode = 16;
                        case 16:
                            if (D = c.length) {
                                D > p && (D = p);
                                D > n && (D = n);
                                if (0 === D)break a;
                                e.arraySet(q,
                                    f, l, D, r);
                                p -= D;
                                l += D;
                                n -= D;
                                r += D;
                                c.length -= D;
                                break
                            }
                            c.mode = 12;
                            break;
                        case 17:
                            for (; 14 > s;) {
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s += 8
                            }
                            c.nlen = (u & 31) + 257;
                            u >>>= 5;
                            s -= 5;
                            c.ndist = (u & 31) + 1;
                            u >>>= 5;
                            s -= 5;
                            c.ncode = (u & 15) + 4;
                            u >>>= 4;
                            s -= 4;
                            if (286 < c.nlen || 30 < c.ndist) {
                                b.msg = "too many length or distance symbols";
                                c.mode = 30;
                                break
                            }
                            c.have = 0;
                            c.mode = 18;
                        case 18:
                            for (; c.have < c.ncode;) {
                                for (; 3 > s;) {
                                    if (0 === p)break a;
                                    p--;
                                    u += f[l++] << s;
                                    s += 8
                                }
                                c.lens[V[c.have++]] = u & 7;
                                u >>>= 3;
                                s -= 3
                            }
                            for (; 19 > c.have;)c.lens[V[c.have++]] = 0;
                            c.lencode = c.lendyn;
                            c.lenbits = 7;
                            D = {bits: c.lenbits};
                            J = z(0, c.lens, 0, 19, c.lencode, 0, c.work, D);
                            c.lenbits = D.bits;
                            if (J) {
                                b.msg = "invalid code lengths set";
                                c.mode = 30;
                                break
                            }
                            c.have = 0;
                            c.mode = 19;
                        case 19:
                            for (; c.have < c.nlen + c.ndist;) {
                                for (; ;) {
                                    D = c.lencode[u & (1 << c.lenbits) - 1];
                                    C = D >>> 24;
                                    T = D >>> 16 & 255;
                                    L = D & 65535;
                                    if (C <= s)break;
                                    if (0 === p)break a;
                                    p--;
                                    u += f[l++] << s;
                                    s += 8
                                }
                                if (16 > L)u >>>= C, s -= C, c.lens[c.have++] = L; else {
                                    if (16 === L) {
                                        for (D = C + 2; s < D;) {
                                            if (0 === p)break a;
                                            p--;
                                            u += f[l++] << s;
                                            s += 8
                                        }
                                        u >>>= C;
                                        s -= C;
                                        if (0 === c.have) {
                                            b.msg = "invalid bit length repeat";
                                            c.mode = 30;
                                            break
                                        }
                                        P =
                                            c.lens[c.have - 1];
                                        D = 3 + (u & 3);
                                        u >>>= 2;
                                        s -= 2
                                    } else if (17 === L) {
                                        for (D = C + 3; s < D;) {
                                            if (0 === p)break a;
                                            p--;
                                            u += f[l++] << s;
                                            s += 8
                                        }
                                        u >>>= C;
                                        s -= C;
                                        P = 0;
                                        D = 3 + (u & 7);
                                        u >>>= 3;
                                        s -= 3
                                    } else {
                                        for (D = C + 7; s < D;) {
                                            if (0 === p)break a;
                                            p--;
                                            u += f[l++] << s;
                                            s += 8
                                        }
                                        u >>>= C;
                                        s -= C;
                                        P = 0;
                                        D = 11 + (u & 127);
                                        u >>>= 7;
                                        s -= 7
                                    }
                                    if (c.have + D > c.nlen + c.ndist) {
                                        b.msg = "invalid bit length repeat";
                                        c.mode = 30;
                                        break
                                    }
                                    for (; D--;)c.lens[c.have++] = P
                                }
                            }
                            if (30 === c.mode)break;
                            if (0 === c.lens[256]) {
                                b.msg = "invalid code -- missing end-of-block";
                                c.mode = 30;
                                break
                            }
                            c.lenbits = 9;
                            D = {bits: c.lenbits};
                            J = z(1, c.lens,
                                0, c.nlen, c.lencode, 0, c.work, D);
                            c.lenbits = D.bits;
                            if (J) {
                                b.msg = "invalid literal/lengths set";
                                c.mode = 30;
                                break
                            }
                            c.distbits = 6;
                            c.distcode = c.distdyn;
                            D = {bits: c.distbits};
                            J = z(2, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, D);
                            c.distbits = D.bits;
                            if (J) {
                                b.msg = "invalid distances set";
                                c.mode = 30;
                                break
                            }
                            c.mode = 20;
                            if (6 === d)break a;
                        case 20:
                            c.mode = 21;
                        case 21:
                            if (6 <= p && 258 <= n) {
                                b.next_out = r;
                                b.avail_out = n;
                                b.next_in = l;
                                b.avail_in = p;
                                c.hold = u;
                                c.bits = s;
                                g(b, x);
                                r = b.next_out;
                                q = b.output;
                                n = b.avail_out;
                                l = b.next_in;
                                f = b.input;
                                p = b.avail_in;
                                u = c.hold;
                                s = c.bits;
                                12 === c.mode && (c.back = -1);
                                break
                            }
                            for (c.back = 0; ;) {
                                D = c.lencode[u & (1 << c.lenbits) - 1];
                                C = D >>> 24;
                                T = D >>> 16 & 255;
                                L = D & 65535;
                                if (C <= s)break;
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s += 8
                            }
                            if (T && 0 === (T & 240)) {
                                P = C;
                                X = T;
                                for (S = L; ;) {
                                    D = c.lencode[S + ((u & (1 << P + X) - 1) >> P)];
                                    C = D >>> 24;
                                    T = D >>> 16 & 255;
                                    L = D & 65535;
                                    if (P + C <= s)break;
                                    if (0 === p)break a;
                                    p--;
                                    u += f[l++] << s;
                                    s += 8
                                }
                                u >>>= P;
                                s -= P;
                                c.back += P
                            }
                            u >>>= C;
                            s -= C;
                            c.back += C;
                            c.length = L;
                            if (0 === T) {
                                c.mode = 26;
                                break
                            }
                            if (T & 32) {
                                c.back = -1;
                                c.mode = 12;
                                break
                            }
                            if (T & 64) {
                                b.msg = "invalid literal/length code";
                                c.mode = 30;
                                break
                            }
                            c.extra = T & 15;
                            c.mode = 22;
                        case 22:
                            if (c.extra) {
                                for (D = c.extra; s < D;) {
                                    if (0 === p)break a;
                                    p--;
                                    u += f[l++] << s;
                                    s += 8
                                }
                                c.length += u & (1 << c.extra) - 1;
                                u >>>= c.extra;
                                s -= c.extra;
                                c.back += c.extra
                            }
                            c.was = c.length;
                            c.mode = 23;
                        case 23:
                            for (; ;) {
                                D = c.distcode[u & (1 << c.distbits) - 1];
                                C = D >>> 24;
                                T = D >>> 16 & 255;
                                L = D & 65535;
                                if (C <= s)break;
                                if (0 === p)break a;
                                p--;
                                u += f[l++] << s;
                                s += 8
                            }
                            if (0 === (T & 240)) {
                                P = C;
                                X = T;
                                for (S = L; ;) {
                                    D = c.distcode[S + ((u & (1 << P + X) - 1) >> P)];
                                    C = D >>> 24;
                                    T = D >>> 16 & 255;
                                    L = D & 65535;
                                    if (P + C <= s)break;
                                    if (0 === p)break a;
                                    p--;
                                    u += f[l++] << s;
                                    s +=
                                        8
                                }
                                u >>>= P;
                                s -= P;
                                c.back += P
                            }
                            u >>>= C;
                            s -= C;
                            c.back += C;
                            if (T & 64) {
                                b.msg = "invalid distance code";
                                c.mode = 30;
                                break
                            }
                            c.offset = L;
                            c.extra = T & 15;
                            c.mode = 24;
                        case 24:
                            if (c.extra) {
                                for (D = c.extra; s < D;) {
                                    if (0 === p)break a;
                                    p--;
                                    u += f[l++] << s;
                                    s += 8
                                }
                                c.offset += u & (1 << c.extra) - 1;
                                u >>>= c.extra;
                                s -= c.extra;
                                c.back += c.extra
                            }
                            if (c.offset > c.dmax) {
                                b.msg = "invalid distance too far back";
                                c.mode = 30;
                                break
                            }
                            c.mode = 25;
                        case 25:
                            if (0 === n)break a;
                            D = x - n;
                            if (c.offset > D) {
                                D = c.offset - D;
                                if (D > c.whave && c.sane) {
                                    b.msg = "invalid distance too far back";
                                    c.mode = 30;
                                    break
                                }
                                D >
                                    c.wnext ? (D -= c.wnext, P = c.wsize - D) : P = c.wnext - D;
                                D > c.length && (D = c.length);
                                X = c.window
                            } else X = q, P = r - c.offset, D = c.length;
                            D > n && (D = n);
                            n -= D;
                            c.length -= D;
                            do q[r++] = X[P++]; while (--D);
                            0 === c.length && (c.mode = 21);
                            break;
                        case 26:
                            if (0 === n)break a;
                            q[r++] = c.length;
                            n--;
                            c.mode = 21;
                            break;
                        case 27:
                            if (c.wrap) {
                                for (; 32 > s;) {
                                    if (0 === p)break a;
                                    p--;
                                    u |= f[l++] << s;
                                    s += 8
                                }
                                x -= n;
                                b.total_out += x;
                                c.total += x;
                                x && (b.adler = c.check = c.flags ? m(c.check, q, x, r - x) : a(c.check, q, x, r - x));
                                x = n;
                                if ((c.flags ? u : h(u)) !== c.check) {
                                    b.msg = "incorrect data check";
                                    c.mode =
                                        30;
                                    break
                                }
                                s = u = 0
                            }
                            c.mode = 28;
                        case 28:
                            if (c.wrap && c.flags) {
                                for (; 32 > s;) {
                                    if (0 === p)break a;
                                    p--;
                                    u += f[l++] << s;
                                    s += 8
                                }
                                if (u !== (c.total & 4294967295)) {
                                    b.msg = "incorrect length check";
                                    c.mode = 30;
                                    break
                                }
                                s = u = 0
                            }
                            c.mode = 29;
                        case 29:
                            J = 1;
                            break a;
                        case 30:
                            J = -3;
                            break a;
                        case 31:
                            return-4;
                        default:
                            return v
                    }
                    b.next_out = r;
                    b.avail_out = n;
                    b.next_in = l;
                    b.avail_in = p;
                    c.hold = u;
                    c.bits = s;
                    if (c.wsize || x !== b.avail_out && 30 > c.mode && (27 > c.mode || 4 !== d))f = b.output, l = b.next_out, r = x - b.avail_out, n = b.state, null === n.window && (n.wsize = 1 << n.wbits, n.wnext = 0, n.whave =
                        0, n.window = new e.Buf8(n.wsize)), r >= n.wsize ? (e.arraySet(n.window, f, l - n.wsize, n.wsize, 0), n.wnext = 0, n.whave = n.wsize) : (p = n.wsize - n.wnext, p > r && (p = r), e.arraySet(n.window, f, l - r, p, n.wnext), (r -= p) ? (e.arraySet(n.window, f, l - r, r, 0), n.wnext = r, n.whave = n.wsize) : (n.wnext += p, n.wnext === n.wsize && (n.wnext = 0), n.whave < n.wsize && (n.whave += p)));
                    $ -= b.avail_in;
                    x -= b.avail_out;
                    b.total_in += $;
                    b.total_out += x;
                    c.total += x;
                    c.wrap && x && (b.adler = c.check = c.flags ? m(c.check, q, x, b.next_out - x) : a(c.check, q, x, b.next_out - x));
                    b.data_type = c.bits +
                        (c.last ? 64 : 0) + (12 === c.mode ? 128 : 0) + (20 === c.mode || 15 === c.mode ? 256 : 0);
                    (0 === $ && 0 === x || 4 === d) && J === t && (J = -5);
                    return J
                };
                c.inflateEnd = function (a) {
                    if (!a || !a.state)return v;
                    var b = a.state;
                    b.window && (b.window = null);
                    a.state = null;
                    return t
                };
                c.inflateGetHeader = function (a, b) {
                    var e;
                    if (!a || !a.state)return v;
                    e = a.state;
                    if (0 === (e.wrap & 2))return v;
                    e.head = b;
                    b.done = !1;
                    return t
                };
                c.inflateInfo = "pako inflate (from Nodeca project)"
            }, {"../utils/common": 2, "./adler32": 4, "./crc32": 6, "./inffast": 8, "./inftrees": 10}], 10: [function (d, b, c) {
                var f = d("../utils/common"), r = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], l = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], p = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], n = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                b.exports = function (b, e, a, c, g, d, t, v) {
                    for (var y = v.bits, s = 0, x =
                        0, w = 0, A = 0, G = 0, E = 0, F = 0, H = 0, N = 0, I = 0, U, B, Z = null, Q = 0, u, Y = new f.Buf16(16), E = new f.Buf16(16), $ = null, ea = 0, D, P, X, s = 0; 15 >= s; s++)Y[s] = 0;
                    for (x = 0; x < c; x++)Y[e[a + x]]++;
                    G = y;
                    for (A = 15; 1 <= A && 0 === Y[A]; A--);
                    G > A && (G = A);
                    if (0 === A)return g[d++] = 20971520, g[d++] = 20971520, v.bits = 1, 0;
                    for (w = 1; w < A && 0 === Y[w]; w++);
                    G < w && (G = w);
                    for (s = H = 1; 15 >= s; s++)if (H <<= 1, H -= Y[s], 0 > H)return-1;
                    if (0 < H && (0 === b || 1 !== A))return-1;
                    E[1] = 0;
                    for (s = 1; 15 > s; s++)E[s + 1] = E[s] + Y[s];
                    for (x = 0; x < c; x++)0 !== e[a + x] && (t[E[e[a + x]]++] = x);
                    switch (b) {
                        case 0:
                            Z = $ = t;
                            u = 19;
                            break;
                        case 1:
                            Z =
                                r;
                            Q -= 257;
                            $ = l;
                            ea -= 257;
                            u = 256;
                            break;
                        default:
                            Z = p, $ = n, u = -1
                    }
                    x = I = 0;
                    s = w;
                    y = d;
                    E = G;
                    F = 0;
                    B = -1;
                    N = 1 << G;
                    c = N - 1;
                    if (1 === b && 852 < N || 2 === b && 592 < N)return 1;
                    for (var C = 0; ;) {
                        C++;
                        D = s - F;
                        t[x] < u ? (P = 0, X = t[x]) : t[x] > u ? (P = $[ea + t[x]], X = Z[Q + t[x]]) : (P = 96, X = 0);
                        H = 1 << s - F;
                        w = U = 1 << E;
                        do U -= H, g[y + (I >> F) + U] = D << 24 | P << 16 | X | 0; while (0 !== U);
                        for (H = 1 << s - 1; I & H;)H >>= 1;
                        0 !== H ? (I &= H - 1, I += H) : I = 0;
                        x++;
                        if (0 === --Y[s]) {
                            if (s === A)break;
                            s = e[a + t[x]]
                        }
                        if (s > G && (I & c) !== B) {
                            0 === F && (F = G);
                            y += w;
                            E = s - F;
                            for (H = 1 << E; E + F < A;) {
                                H -= Y[E + F];
                                if (0 >= H)break;
                                E++;
                                H <<= 1
                            }
                            N += 1 << E;
                            if (1 === b && 852 <
                                N || 2 === b && 592 < N)return 1;
                            B = I & c;
                            g[B] = G << 24 | E << 16 | y - d | 0
                        }
                    }
                    0 !== I && (g[y + I] = s - F << 24 | 4194304);
                    v.bits = G;
                    return 0
                }
            }, {"../utils/common": 2}], 11: [function (d, b, c) {
                b.exports = {2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version"}
            }, {}], 12: [function (d, b, c) {
                b.exports = function () {
                    this.input = null;
                    this.total_in = this.avail_in = this.next_in = 0;
                    this.output = null;
                    this.total_out = this.avail_out = this.next_out = 0;
                    this.msg = "";
                    this.state = null;
                    this.data_type = 2;
                    this.adler = 0
                }
            }, {}]}, {}, [1])(1)
        });
        return{inflate: function (k, d) {
            return f.inflateRaw(k)
        }}
    }()
})();
core.ScheduledTask = function (f, k, d) {
    function b() {
        r && (d(h), r = !1)
    }

    function c() {
        b();
        f.apply(void 0, l);
        l = null
    }

    var h, r = !1, l = [], p = !1;
    this.trigger = function () {
        runtime.assert(!1 === p, "Can't trigger destroyed ScheduledTask instance");
        l = Array.prototype.slice.call(arguments);
        r || (r = !0, h = k(c))
    };
    this.triggerImmediate = function () {
        runtime.assert(!1 === p, "Can't trigger destroyed ScheduledTask instance");
        l = Array.prototype.slice.call(arguments);
        c()
    };
    this.processRequests = function () {
        r && c()
    };
    this.cancel = b;
    this.restart = function () {
        runtime.assert(!1 ===
            p, "Can't trigger destroyed ScheduledTask instance");
        b();
        r = !0;
        h = k(c)
    };
    this.destroy = function (c) {
        b();
        p = !0;
        c()
    }
};
core.StepDirection = {PREVIOUS: 1, NEXT: 2};
core.StepIterator = function (f, k) {
    function d() {
        q = null;
        a = e = void 0
    }

    function b() {
        void 0 === a && (a = f.acceptPosition(k) === n);
        return a
    }

    function c(a, b) {
        d();
        return k.setUnfilteredPosition(a, b)
    }

    function h() {
        q || (q = k.container());
        return q
    }

    function r() {
        void 0 === e && (e = k.unfilteredDomOffset());
        return e
    }

    function l() {
        for (d(); k.nextPosition();)if (d(), b())return!0;
        return!1
    }

    function p() {
        for (d(); k.previousPosition();)if (d(), b())return!0;
        return!1
    }

    var n = core.PositionFilter.FilterResult.FILTER_ACCEPT, q, e, a;
    this.isStep = b;
    this.setPosition =
        c;
    this.container = h;
    this.offset = r;
    this.nextStep = l;
    this.previousStep = p;
    this.advanceStep = function (a) {
        return a === core.StepDirection.NEXT ? l() : p()
    };
    this.roundToClosestStep = function () {
        var a, e, d = b();
        d || (a = h(), e = r(), d = p(), d || (c(a, e), d = l()));
        return d
    };
    this.roundToPreviousStep = function () {
        var a = b();
        a || (a = p());
        return a
    };
    this.roundToNextStep = function () {
        var a = b();
        a || (a = l());
        return a
    };
    this.leftNode = function () {
        return k.leftNode()
    };
    this.snapshot = function () {
        return new core.StepIterator.StepSnapshot(h(), r())
    };
    this.restore =
        function (a) {
            c(a.container, a.offset)
        }
};
core.StepIterator.StepSnapshot = function (f, k) {
    this.container = f;
    this.offset = k
};
(function () {
    var f;
    core.Task = {};
    core.Task.SUPPRESS_MANUAL_PROCESSING = !1;
    core.Task.processTasks = function () {
        core.Task.SUPPRESS_MANUAL_PROCESSING || f.performRedraw()
    };
    core.Task.createRedrawTask = function (k) {
        return new core.ScheduledTask(k, f.requestRedrawTask, f.cancelRedrawTask)
    };
    core.Task.createTimeoutTask = function (f, d) {
        return new core.ScheduledTask(f, function (b) {
            return runtime.setTimeout(b, d)
        }, runtime.clearTimeout)
    };
    f = new function () {
        var f = {};
        this.requestRedrawTask = function (d) {
            var b = runtime.requestAnimationFrame(function () {
                d();
                delete f[b]
            });
            f[b] = d;
            return b
        };
        this.performRedraw = function () {
            Object.keys(f).forEach(function (d) {
                f[d]();
                runtime.cancelAnimationFrame(parseInt(d, 10))
            });
            f = {}
        };
        this.cancelRedrawTask = function (d) {
            runtime.cancelAnimationFrame(d);
            delete f[d]
        }
    }
})();
core.UnitTest = function () {
};
core.UnitTest.prototype.setUp = function () {
};
core.UnitTest.prototype.tearDown = function () {
};
core.UnitTest.prototype.description = function () {
};
core.UnitTest.prototype.tests = function () {
};
core.UnitTest.prototype.asyncTests = function () {
};
core.UnitTest.provideTestAreaDiv = function () {
    var f = runtime.getWindow().document, k = f.getElementById("testarea");
    runtime.assert(!k, 'Unclean test environment, found a div with id "testarea".');
    k = f.createElement("div");
    k.setAttribute("id", "testarea");
    f.body.appendChild(k);
    return k
};
core.UnitTest.cleanupTestAreaDiv = function () {
    var f = runtime.getWindow().document, k = f.getElementById("testarea");
    runtime.assert(!!k && k.parentNode === f.body, 'Test environment broken, found no div with id "testarea" below body.');
    f.body.removeChild(k)
};
core.UnitTest.createXmlDocument = function (f, k, d) {
    var b = "<?xml version='1.0' encoding='UTF-8'?>", b = b + ("<" + f);
    Object.keys(d).forEach(function (c) {
        b += " xmlns:" + c + '="' + d[c] + '"'
    });
    b += ">";
    b += k;
    b += "</" + f + ">";
    return runtime.parseXML(b)
};
core.UnitTest.createOdtDocument = function (f, k) {
    return core.UnitTest.createXmlDocument("office:document", f, k)
};
core.UnitTestLogger = function () {
    var f = [], k = 0, d = 0, b = "", c = "";
    this.startTest = function (h, r) {
        f = [];
        k = 0;
        b = h;
        c = r;
        d = Date.now()
    };
    this.endTest = function () {
        var h = Date.now();
        return{description: c, suite: [b, c], success: 0 === k, log: f, time: h - d}
    };
    this.debug = function (b) {
        f.push({category: "debug", message: b})
    };
    this.fail = function (b) {
        k += 1;
        f.push({category: "fail", message: b})
    };
    this.pass = function (b) {
        f.push({category: "pass", message: b})
    }
};
core.UnitTestRunner = function (f, k) {
    function d(a) {
        p += 1;
        e ? k.debug(a) : k.fail(a)
    }

    function b(a, b) {
        var e;
        try {
            if (a.length !== b.length)return d("array of length " + a.length + " should be " + b.length + " long"), !1;
            for (e = 0; e < a.length; e += 1)if (a[e] !== b[e])return d(a[e] + " should be " + b[e] + " at array index " + e), !1
        } catch (c) {
            return!1
        }
        return!0
    }

    function c(a, b, e) {
        var f = a.attributes, h = f.length, l, q, p;
        for (l = 0; l < h; l += 1)if (q = f.item(l), "xmlns" !== q.prefix && "urn:webodf:names:steps" !== q.namespaceURI) {
            p = b.getAttributeNS(q.namespaceURI,
                q.localName);
            if (!b.hasAttributeNS(q.namespaceURI, q.localName))return d("Attribute " + q.localName + " with value " + q.value + " was not present"), !1;
            if (p !== q.value)return d("Attribute " + q.localName + " was " + p + " should be " + q.value), !1
        }
        return e ? !0 : c(b, a, !0)
    }

    function h(a, b) {
        var e, f;
        e = a.nodeType;
        f = b.nodeType;
        if (e !== f)return d("Nodetype '" + e + "' should be '" + f + "'"), !1;
        if (e === Node.TEXT_NODE) {
            if (a.data === b.data)return!0;
            d("Textnode data '" + a.data + "' should be '" + b.data + "'");
            return!1
        }
        runtime.assert(e === Node.ELEMENT_NODE,
            "Only textnodes and elements supported.");
        if (a.namespaceURI !== b.namespaceURI)return d("namespace '" + a.namespaceURI + "' should be '" + b.namespaceURI + "'"), !1;
        if (a.localName !== b.localName)return d("localName '" + a.localName + "' should be '" + b.localName + "'"), !1;
        if (!c(a, b, !1))return!1;
        e = a.firstChild;
        for (f = b.firstChild; e;) {
            if (!f)return d("Nodetype '" + e.nodeType + "' is unexpected here."), !1;
            if (!h(e, f))return!1;
            e = e.nextSibling;
            f = f.nextSibling
        }
        return f ? (d("Nodetype '" + f.nodeType + "' is missing here."), !1) : !0
    }

    function r(a, e, c) {
        if (0 === e)return a === e && 1 / a === 1 / e;
        if (a === e)return!0;
        if (null === a || null === e)return!1;
        if ("number" === typeof e && isNaN(e))return"number" === typeof a && isNaN(a);
        if ("number" === typeof e && "number" === typeof a) {
            if (a === e)return!0;
            void 0 === c && (c = 1E-4);
            runtime.assert("number" === typeof c, "Absolute tolerance not given as number.");
            runtime.assert(0 <= c, "Absolute tolerance should be given as positive number, was " + c);
            a = Math.abs(a - e);
            return a <= c
        }
        return Object.prototype.toString.call(e) === Object.prototype.toString.call([]) ?
            b(a, e) : "object" === typeof e && "object" === typeof a ? e.constructor === Element || e.constructor === Node ? h(a, e) : q(a, e) : !1
    }

    function l(a, b, e, c) {
        "string" === typeof b && "string" === typeof e || k.debug("WARN: shouldBe() expects string arguments");
        var f, h;
        try {
            h = eval(b)
        } catch (l) {
            f = l
        }
        a = eval(e);
        f ? d(b + " should be " + a + ". Threw exception " + f) : r(h, a, c) ? k.pass(b + " is " + e) : String(typeof h) === String(typeof a) ? (e = 0 === h && 0 > 1 / h ? "-0" : String(h), d(b + " should be " + a + ". Was " + e + ".")) : d(b + " should be " + a + " (of type " + typeof a + "). Was " +
            h + " (of type " + typeof h + ").")
    }

    var p = 0, n, q, e = !1;
    this.resourcePrefix = function () {
        return f
    };
    this.beginExpectFail = function () {
        n = p;
        e = !0
    };
    this.endExpectFail = function () {
        var a = n === p;
        e = !1;
        p = n;
        a && (p += 1, k.fail("Expected at least one failed test, but none registered."))
    };
    q = function (a, e) {
        var c = Object.keys(a), f = Object.keys(e);
        c.sort();
        f.sort();
        return b(c, f) && Object.keys(a).every(function (b) {
            var c = a[b], g = e[b];
            return r(c, g) ? !0 : (d(c + " should be " + g + " for key " + b), !1)
        })
    };
    this.areNodesEqual = h;
    this.shouldBeNull = function (a, b) {
        l(a, b, "null")
    };
    this.shouldBeNonNull = function (a, b) {
        var e, c;
        try {
            c = eval(b)
        } catch (f) {
            e = f
        }
        e ? d(b + " should be non-null. Threw exception " + e) : null !== c ? k.pass(b + " is non-null.") : d(b + " should be non-null. Was " + c)
    };
    this.shouldBe = l;
    this.testFailed = d;
    this.countFailedTests = function () {
        return p
    };
    this.name = function (a) {
        var b, e, c = [], d = a.length;
        c.length = d;
        for (b = 0; b < d; b += 1) {
            e = Runtime.getFunctionName(a[b]) || "";
            if ("" === e)throw"Found a function without a name.";
            c[b] = {f: a[b], name: e}
        }
        return c
    }
};
core.UnitTester = function () {
    function f(b, c) {
        return"<span style='color:blue;cursor:pointer' onclick='" + c + "'>" + b + "</span>"
    }

    function k(b) {
        d.reporter && d.reporter(b)
    }

    var d = this, b = 0, c = new core.UnitTestLogger, h = {}, r = "BrowserRuntime" === runtime.type();
    this.resourcePrefix = "";
    this.reporter = function (b) {
        var c, d;
        r ? runtime.log("<span>Running " + f(b.description, 'runTest("' + b.suite[0] + '","' + b.description + '")') + "</span>") : runtime.log("Running " + b.description);
        if (!b.success)for (c = 0; c < b.log.length; c += 1)d = b.log[c], runtime.log(d.category,
            d.message)
    };
    this.runTests = function (l, p, n) {
        function q(d) {
            function f() {
                r && a.endExpectFail();
                k(c.endTest());
                m.tearDown();
                g[l] = s === a.countFailedTests();
                q(d.slice(1))
            }

            var l, r;
            if (0 === d.length)h[e] = g, b += a.countFailedTests(), p(); else if (t = d[0].f, l = d[0].name, r = !0 === d[0].expectFail, s = a.countFailedTests(), n.length && -1 === n.indexOf(l))q(d.slice(1)); else {
                m.setUp();
                c.startTest(e, l);
                r && a.beginExpectFail();
                try {
                    t(f)
                } catch (z) {
                    a.testFailed("Unexpected exception encountered: " + z.toString() + "\n" + z.stack), f()
                }
            }
        }

        var e = Runtime.getFunctionName(l) ||
            "", a = new core.UnitTestRunner(d.resourcePrefix, c), m = new l(a), g = {}, z, t, v, y, s;
        if (h.hasOwnProperty(e))runtime.log("Test " + e + " has already run."); else {
            r ? runtime.log("<span>Running " + f(e, 'runSuite("' + e + '");') + ": " + m.description() + "</span>") : runtime.log("Running " + e + ": " + m.description);
            v = m.tests();
            for (z = 0; z < v.length; z += 1)if (t = v[z].f, l = v[z].name, y = !0 === v[z].expectFail, !n.length || -1 !== n.indexOf(l)) {
                s = a.countFailedTests();
                m.setUp();
                c.startTest(e, l);
                y && a.beginExpectFail();
                try {
                    t()
                } catch (x) {
                    a.testFailed("Unexpected exception encountered: " +
                        x.toString() + "\n" + x.stack)
                }
                y && a.endExpectFail();
                k(c.endTest());
                m.tearDown();
                g[l] = s === a.countFailedTests()
            }
            q(m.asyncTests())
        }
    };
    this.failedTestsCount = function () {
        return b
    };
    this.results = function () {
        return h
    }
};
core.Utils = function () {
    function f(k, d) {
        if (d && Array.isArray(d)) {
            k = k || [];
            if (!Array.isArray(k))throw"Destination is not an array.";
            k = k.concat(d.map(function (b) {
                return f(null, b)
            }))
        } else if (d && "object" === typeof d) {
            k = k || {};
            if ("object" !== typeof k)throw"Destination is not an object.";
            Object.keys(d).forEach(function (b) {
                k[b] = f(k[b], d[b])
            })
        } else k = d;
        return k
    }

    this.hashString = function (f) {
        var d = 0, b, c;
        b = 0;
        for (c = f.length; b < c; b += 1)d = (d << 5) - d + f.charCodeAt(b), d |= 0;
        return d
    };
    this.mergeObjects = function (k, d) {
        Object.keys(d).forEach(function (b) {
            k[b] =
                f(k[b], d[b])
        });
        return k
    }
};
core.Zip = function (f, k) {
    function d(a) {
        var b = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728,
            853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
            4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804,
            225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542,
            2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035,
            2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], e, c, g = a.length, d = 0, d = 0;
        e = -1;
        for (c = 0; c < g; c += 1)d = (e ^ a[c]) & 255, d = b[d], e = e >>> 8 ^ d;
        return e ^ -1
    }

    function b(a) {
        return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 15, a >> 5 & 63, (a & 31) << 1)
    }

    function c(a) {
        var b = a.getFullYear();
        return 1980 > b ? 0 : b - 1980 <<
            25 | a.getMonth() + 1 << 21 | a.getDate() << 16 | a.getHours() << 11 | a.getMinutes() << 5 | a.getSeconds() >> 1
    }

    function h(a, e) {
        var c, d, m, f, h, l, q, p = this;
        this.load = function (b) {
            if (null !== p.data)b(null, p.data); else {
                var e = h + 34 + d + m + 256;
                e + q > g && (e = g - q);
                runtime.read(a, q, e, function (e, c) {
                    if (e || null === c)b(e, c); else a:{
                        var g = c, d = new core.ByteArray(g), m = d.readUInt32LE(), q;
                        if (67324752 !== m)b("File entry signature is wrong." + m.toString() + " " + g.length.toString(), null); else {
                            d.pos += 22;
                            m = d.readUInt16LE();
                            q = d.readUInt16LE();
                            d.pos += m + q;
                            if (f) {
                                g =
                                    g.subarray(d.pos, d.pos + h);
                                if (h !== g.length) {
                                    b("The amount of compressed bytes read was " + g.length.toString() + " instead of " + h.toString() + " for " + p.filename + " in " + a + ".", null);
                                    break a
                                }
                                g = t(g, l)
                            } else g = g.subarray(d.pos, d.pos + l);
                            l !== g.length ? b("The amount of bytes read was " + g.length.toString() + " instead of " + l.toString() + " for " + p.filename + " in " + a + ".", null) : (p.data = g, b(null, g))
                        }
                    }
                })
            }
        };
        this.set = function (a, b, e, c) {
            p.filename = a;
            p.data = b;
            p.compressed = e;
            p.date = c
        };
        this.error = null;
        e && (c = e.readUInt32LE(), 33639248 !==
            c ? this.error = "Central directory entry has wrong signature at position " + (e.pos - 4).toString() + ' for file "' + a + '": ' + e.data.length.toString() : (e.pos += 6, f = e.readUInt16LE(), this.date = b(e.readUInt32LE()), e.readUInt32LE(), h = e.readUInt32LE(), l = e.readUInt32LE(), d = e.readUInt16LE(), m = e.readUInt16LE(), c = e.readUInt16LE(), e.pos += 8, q = e.readUInt32LE(), this.filename = runtime.byteArrayToString(e.data.subarray(e.pos, e.pos + d), "utf8"), this.data = null, e.pos += d + m + c))
    }

    function r(a, b) {
        if (22 !== a.length)b("Central directory length should be 22.",
            v); else {
            var e = new core.ByteArray(a), c;
            c = e.readUInt32LE();
            101010256 !== c ? b("Central directory signature is wrong: " + c.toString(), v) : (c = e.readUInt16LE(), 0 !== c ? b("Zip files with non-zero disk numbers are not supported.", v) : (c = e.readUInt16LE(), 0 !== c ? b("Zip files with non-zero disk numbers are not supported.", v) : (c = e.readUInt16LE(), z = e.readUInt16LE(), c !== z ? b("Number of entries is inconsistent.", v) : (c = e.readUInt32LE(), e = e.readUInt16LE(), e = g - 22 - c, runtime.read(f, e, g - e, function (a, e) {
                if (a || null === e)b(a, v); else a:{
                    var c =
                        new core.ByteArray(e), g, d;
                    m = [];
                    for (g = 0; g < z; g += 1) {
                        d = new h(f, c);
                        if (d.error) {
                            b(d.error, v);
                            break a
                        }
                        m[m.length] = d
                    }
                    b(null, v)
                }
            })))))
        }
    }

    function l(a, b) {
        var e = null, c, g;
        for (g = 0; g < m.length; g += 1)if (c = m[g], c.filename === a) {
            e = c;
            break
        }
        e ? e.data ? b(null, e.data) : e.load(b) : b(a + " not found.", null)
    }

    function p(a) {
        var b = new core.ByteArrayWriter("utf8"), e = 0;
        b.appendArray([80, 75, 3, 4, 20, 0, 0, 0, 0, 0]);
        a.data && (e = a.data.length);
        b.appendUInt32LE(c(a.date));
        b.appendUInt32LE(a.data ? d(a.data) : 0);
        b.appendUInt32LE(e);
        b.appendUInt32LE(e);
        b.appendUInt16LE(a.filename.length);
        b.appendUInt16LE(0);
        b.appendString(a.filename);
        a.data && b.appendByteArray(a.data);
        return b
    }

    function n(a, b) {
        var e = new core.ByteArrayWriter("utf8"), g = 0;
        e.appendArray([80, 75, 1, 2, 20, 0, 20, 0, 0, 0, 0, 0]);
        a.data && (g = a.data.length);
        e.appendUInt32LE(c(a.date));
        e.appendUInt32LE(a.data ? d(a.data) : 0);
        e.appendUInt32LE(g);
        e.appendUInt32LE(g);
        e.appendUInt16LE(a.filename.length);
        e.appendArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        e.appendUInt32LE(b);
        e.appendString(a.filename);
        return e
    }

    function q(a, b) {
        if (a === m.length)b(null); else {
            var e = m[a];
            null !== e.data ? q(a + 1, b) : e.load(function (e) {
                e ? b(e) : q(a + 1, b)
            })
        }
    }

    function e(a, b) {
        q(0, function (e) {
            if (e)b(e); else {
                var c, g, d = new core.ByteArrayWriter("utf8"), f = [0];
                for (c = 0; c < m.length; c += 1)d.appendByteArrayWriter(p(m[c])), f.push(d.getLength());
                e = d.getLength();
                for (c = 0; c < m.length; c += 1)g = m[c], d.appendByteArrayWriter(n(g, f[c]));
                c = d.getLength() - e;
                d.appendArray([80, 75, 5, 6, 0, 0, 0, 0]);
                d.appendUInt16LE(m.length);
                d.appendUInt16LE(m.length);
                d.appendUInt32LE(c);
                d.appendUInt32LE(e);
                d.appendArray([0, 0]);
                a(d.getByteArray())
            }
        })
    }

    function a(a, b) {
        e(function (e) {
            runtime.writeFile(a, e, b)
        }, b)
    }

    var m, g, z, t = core.RawInflate.inflate, v = this, y = new core.Base64;
    this.load = l;
    this.save = function (a, b, e, c) {
        var g, d;
        for (g = 0; g < m.length; g += 1)if (d = m[g], d.filename === a) {
            d.set(a, b, e, c);
            return
        }
        d = new h(f);
        d.set(a, b, e, c);
        m.push(d)
    };
    this.remove = function (a) {
        var b, e;
        for (b = 0; b < m.length; b += 1)if (e = m[b], e.filename === a)return m.splice(b, 1), !0;
        return!1
    };
    this.write = function (b) {
        a(f, b)
    };
    this.writeAs = a;
    this.createByteArray =
        e;
    this.loadContentXmlAsFragments = function (a, b) {
        v.loadAsString(a, function (a, e) {
            if (a)return b.rootElementReady(a);
            b.rootElementReady(null, e, !0)
        })
    };
    this.loadAsString = function (a, b) {
        l(a, function (a, e) {
            if (a || null === e)return b(a, null);
            var c = runtime.byteArrayToString(e, "utf8");
            b(null, c)
        })
    };
    this.loadAsDOM = function (a, b) {
        v.loadAsString(a, function (a, e) {
            if (a || null === e)b(a, null); else {
                var c = (new DOMParser).parseFromString(e, "text/xml");
                b(null, c)
            }
        })
    };
    this.loadAsDataURL = function (a, b, e) {
        l(a, function (a, c) {
            if (a || !c)return e(a,
                null);
            var g = 0, d;
            b || (b = 80 === c[1] && 78 === c[2] && 71 === c[3] ? "image/png" : 255 === c[0] && 216 === c[1] && 255 === c[2] ? "image/jpeg" : 71 === c[0] && 73 === c[1] && 70 === c[2] ? "image/gif" : "");
            for (d = "data:" + b + ";base64,"; g < c.length;)d += y.convertUTF8ArrayToBase64(c.subarray(g, Math.min(g + 45E3, c.length))), g += 45E3;
            e(null, d)
        })
    };
    this.getEntries = function () {
        return m.slice()
    };
    g = -1;
    null === k ? m = [] : runtime.getFileSize(f, function (a) {
        g = a;
        0 > g ? k("File '" + f + "' cannot be read.", v) : runtime.read(f, g - 22, 22, function (a, b) {
            a || null === k || null === b ? k(a, v) :
                r(b, k)
        })
    })
};
gui.CommonConstraints = {EDIT: {ANNOTATIONS: {ONLY_DELETE_OWN: "onlyDeleteOwn"}, REVIEW_MODE: "reviewMode"}};
gui.SessionConstraints = function () {
    function f(b) {
        k.hasOwnProperty(b) || (k[b] = !1, d.register(b))
    }

    var k = {}, d = new core.EventNotifier;
    this.registerConstraint = f;
    this.subscribe = function (b, c) {
        f(b);
        d.subscribe(b, c)
    };
    this.unsubscribe = function (b, c) {
        d.unsubscribe(b, c)
    };
    this.setState = function (b, c) {
        runtime.assert(!0 === k.hasOwnProperty(b), "No such constraint");
        k[b] !== c && (k[b] = c, d.emit(b, c))
    };
    this.getState = function (b) {
        runtime.assert(!0 === k.hasOwnProperty(b), "No such constraint");
        return k[b]
    }
};
xmldom.LSSerializerFilter = function () {
};
xmldom.LSSerializerFilter.prototype.acceptNode = function (f) {
};
odf.OdfNodeFilter = function () {
    this.acceptNode = function (f) {
        return"http://www.w3.org/1999/xhtml" === f.namespaceURI ? NodeFilter.FILTER_SKIP : f.namespaceURI && f.namespaceURI.match(/^urn:webodf:/) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    }
};
odf.Namespaces = {namespaceMap: {db: "urn:oasis:names:tc:opendocument:xmlns:database:1.0", dc: "http://purl.org/dc/elements/1.1/", dr3d: "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", draw: "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", chart: "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", fo: "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", form: "urn:oasis:names:tc:opendocument:xmlns:form:1.0", meta: "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", number: "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    office: "urn:oasis:names:tc:opendocument:xmlns:office:1.0", presentation: "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", style: "urn:oasis:names:tc:opendocument:xmlns:style:1.0", svg: "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", table: "urn:oasis:names:tc:opendocument:xmlns:table:1.0", text: "urn:oasis:names:tc:opendocument:xmlns:text:1.0", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace"}, prefixMap: {}, dbns: "urn:oasis:names:tc:opendocument:xmlns:database:1.0",
    dcns: "http://purl.org/dc/elements/1.1/", dr3dns: "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", drawns: "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", chartns: "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", fons: "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", formns: "urn:oasis:names:tc:opendocument:xmlns:form:1.0", metans: "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", numberns: "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", officens: "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    presentationns: "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", stylens: "urn:oasis:names:tc:opendocument:xmlns:style:1.0", svgns: "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", tablens: "urn:oasis:names:tc:opendocument:xmlns:table:1.0", textns: "urn:oasis:names:tc:opendocument:xmlns:text:1.0", xlinkns: "http://www.w3.org/1999/xlink", xmlns: "http://www.w3.org/XML/1998/namespace"};
(function () {
    var f = odf.Namespaces.namespaceMap, k = odf.Namespaces.prefixMap, d;
    for (d in f)f.hasOwnProperty(d) && (k[f[d]] = d)
})();
odf.Namespaces.forEachPrefix = function (f) {
    var k = odf.Namespaces.namespaceMap, d;
    for (d in k)k.hasOwnProperty(d) && f(d, k[d])
};
odf.Namespaces.lookupNamespaceURI = function (f) {
    var k = null;
    odf.Namespaces.namespaceMap.hasOwnProperty(f) && (k = odf.Namespaces.namespaceMap[f]);
    return k
};
odf.Namespaces.lookupPrefix = function (f) {
    var k = odf.Namespaces.prefixMap;
    return k.hasOwnProperty(f) ? k[f] : null
};
odf.Namespaces.lookupNamespaceURI.lookupNamespaceURI = odf.Namespaces.lookupNamespaceURI;
xmldom.XPathIterator = function () {
};
xmldom.XPathIterator.prototype.next = function () {
};
xmldom.XPathIterator.prototype.reset = function () {
};
function createXPathSingleton() {
    function f(b, e, a) {
        return-1 !== b && (b < e || -1 === e) && (b < a || -1 === a)
    }

    function k(b) {
        for (var e = [], a = 0, c = b.length, g; a < c;) {
            var d = b, h = c, l = e, p = "", r = [], k = d.indexOf("[", a), w = d.indexOf("/", a), A = d.indexOf("=", a);
            f(w, k, A) ? (p = d.substring(a, w), a = w + 1) : f(k, w, A) ? (p = d.substring(a, k), a = n(d, k, r)) : f(A, w, k) ? (p = d.substring(a, A), a = A) : (p = d.substring(a, h), a = h);
            l.push({location: p, predicates: r});
            if (a < c && "=" === b[a]) {
                g = b.substring(a + 1, c);
                if (2 < g.length && ("'" === g[0] || '"' === g[0]))g = g.slice(1, g.length - 1);
                else try {
                    g = parseInt(g, 10)
                } catch (G) {
                }
                a = c
            }
        }
        return{steps: e, value: g}
    }

    function d() {
        var b = null, e = !1;
        this.setNode = function (a) {
            b = a
        };
        this.reset = function () {
            e = !1
        };
        this.next = function () {
            var a = e ? null : b;
            e = !0;
            return a
        }
    }

    function b(b, e, a) {
        this.reset = function () {
            b.reset()
        };
        this.next = function () {
            for (var c = b.next(); c;) {
                c.nodeType === Node.ELEMENT_NODE && (c = c.getAttributeNodeNS(e, a));
                if (c)break;
                c = b.next()
            }
            return c
        }
    }

    function c(b, e) {
        var a = b.next(), c = null;
        this.reset = function () {
            b.reset();
            a = b.next();
            c = null
        };
        this.next = function () {
            for (; a;) {
                if (c)if (e &&
                    c.firstChild)c = c.firstChild; else {
                    for (; !c.nextSibling && c !== a;)c = c.parentNode;
                    c === a ? a = b.next() : c = c.nextSibling
                } else {
                    do(c = a.firstChild) || (a = b.next()); while (a && !c)
                }
                if (c && c.nodeType === Node.ELEMENT_NODE)return c
            }
            return null
        }
    }

    function h(b, e) {
        this.reset = function () {
            b.reset()
        };
        this.next = function () {
            for (var a = b.next(); a && !e(a);)a = b.next();
            return a
        }
    }

    function r(b, e, a) {
        e = e.split(":", 2);
        var c = a(e[0]), g = e[1];
        return new h(b, function (a) {
            return a.localName === g && a.namespaceURI === c
        })
    }

    function l(b, e, a) {
        var c = new d, g = p(c,
            e, a), f = e.value;
        return void 0 === f ? new h(b, function (a) {
            c.setNode(a);
            g.reset();
            return null !== g.next()
        }) : new h(b, function (a) {
            c.setNode(a);
            g.reset();
            return(a = g.next()) ? a.nodeValue === f : !1
        })
    }

    var p, n;
    n = function (b, e, a) {
        for (var c = e, g = b.length, d = 0; c < g;)"]" === b[c] ? (d -= 1, 0 >= d && a.push(k(b.substring(e, c)))) : "[" === b[c] && (0 >= d && (e = c + 1), d += 1), c += 1;
        return c
    };
    p = function (d, e, a) {
        var f, g, h, p;
        for (f = 0; f < e.steps.length; f += 1) {
            h = e.steps[f];
            g = h.location;
            if ("" === g)d = new c(d, !1); else if ("@" === g[0]) {
                g = g.substr(1).split(":", 2);
                p =
                    a(g[0]);
                if (!p)throw"No namespace associated with the prefix " + g[0];
                d = new b(d, p, g[1])
            } else"." !== g && (d = new c(d, !1), -1 !== g.indexOf(":") && (d = r(d, g, a)));
            for (g = 0; g < h.predicates.length; g += 1)p = h.predicates[g], d = l(d, p, a)
        }
        return d
    };
    return{getODFElementsWithXPath: function (b, e, a) {
        var c = b.ownerDocument, g = [], f = null;
        if (c && "function" === typeof c.evaluate)for (a = c.evaluate(e, b, a, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null), f = a.iterateNext(); null !== f;)f.nodeType === Node.ELEMENT_NODE && g.push(f), f = a.iterateNext(); else {
            g =
                new d;
            g.setNode(b);
            b = k(e);
            g = p(g, b, a);
            b = [];
            for (a = g.next(); a;)b.push(a), a = g.next();
            g = b
        }
        return g
    }}
}
xmldom.XPath = createXPathSingleton();
odf.StyleInfo = function () {
    function f(a, b) {
        var e, c, d, g, m, h = 0;
        if (e = E[a.localName])if (d = e[a.namespaceURI])h = d.length;
        for (e = 0; e < h; e += 1)c = d[e], g = c.ns, m = c.localname, (c = a.getAttributeNS(g, m)) && a.setAttributeNS(g, A[g] + m, b + c);
        for (d = a.firstElementChild; d;)f(d, b), d = d.nextElementSibling
    }

    function k(a, b) {
        var e, c, d, g, f, m = 0;
        if (e = E[a.localName])if (d = e[a.namespaceURI])m = d.length;
        for (e = 0; e < m; e += 1)if (c = d[e], g = c.ns, f = c.localname, c = a.getAttributeNS(g, f))c = c.replace(b, ""), a.setAttributeNS(g, A[g] + f, c);
        for (d = a.firstElementChild; d;)k(d,
            b), d = d.nextElementSibling
    }

    function d(a, b) {
        var e, c, d, g, f, m = 0;
        if (e = E[a.localName])if (d = e[a.namespaceURI])m = d.length;
        for (e = 0; e < m; e += 1)if (g = d[e], c = g.ns, f = g.localname, c = a.getAttributeNS(c, f))b = b || {}, g = g.keyname, b.hasOwnProperty(g) ? b[g][c] = 1 : (f = {}, f[c] = 1, b[g] = f);
        return b
    }

    function b(a, e) {
        var c, g;
        d(a, e);
        for (c = a.firstChild; c;)c.nodeType === Node.ELEMENT_NODE && (g = c, b(g, e)), c = c.nextSibling
    }

    function c(a, b, e) {
        this.key = a;
        this.name = b;
        this.family = e;
        this.requires = {}
    }

    function h(a, b, e) {
        var d = a + '"' + b, g = e[d];
        g || (g = e[d] =
            new c(d, a, b));
        return g
    }

    function r(a, b, e) {
        var c, d, g, f, m, l = 0;
        c = a.getAttributeNS(s, "name");
        f = a.getAttributeNS(s, "family");
        c && f && (b = h(c, f, e));
        if (b) {
            if (c = E[a.localName])if (g = c[a.namespaceURI])l = g.length;
            for (c = 0; c < l; c += 1)if (f = g[c], d = f.ns, m = f.localname, d = a.getAttributeNS(d, m))f = f.keyname, f = h(d, f, e), b.requires[f.key] = f
        }
        for (a = a.firstElementChild; a;)r(a, b, e), a = a.nextElementSibling;
        return e
    }

    function l(a, b) {
        var e = b[a.family];
        e || (e = b[a.family] = {});
        e[a.name] = 1;
        Object.keys(a.requires).forEach(function (e) {
            l(a.requires[e],
                b)
        })
    }

    function p(a, b) {
        var e = r(a, null, {});
        Object.keys(e).forEach(function (a) {
            a = e[a];
            var c = b[a.family];
            c && c.hasOwnProperty(a.name) && l(a, b)
        })
    }

    function n(a, b) {
        function e(b) {
            (b = g.getAttributeNS(s, b)) && (a[b] = !0)
        }

        var c = ["font-name", "font-name-asian", "font-name-complex"], d, g;
        for (d = b && b.firstElementChild; d;)g = d, c.forEach(e), n(a, g), d = d.nextElementSibling
    }

    function q(a, b) {
        function e(a) {
            var c = g.getAttributeNS(s, a);
            c && b.hasOwnProperty(c) && g.setAttributeNS(s, "style:" + a, b[c])
        }

        var c = ["font-name", "font-name-asian",
            "font-name-complex"], d, g;
        for (d = a && a.firstElementChild; d;)g = d, c.forEach(e), q(g, b), d = d.nextElementSibling
    }

    var e = odf.Namespaces.chartns, a = odf.Namespaces.dbns, m = odf.Namespaces.dr3dns, g = odf.Namespaces.drawns, z = odf.Namespaces.formns, t = odf.Namespaces.numberns, v = odf.Namespaces.officens, y = odf.Namespaces.presentationns, s = odf.Namespaces.stylens, x = odf.Namespaces.tablens, w = odf.Namespaces.textns, A = {"urn:oasis:names:tc:opendocument:xmlns:chart:1.0": "chart:", "urn:oasis:names:tc:opendocument:xmlns:database:1.0": "db:",
        "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0": "dr3d:", "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0": "draw:", "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0": "fo:", "urn:oasis:names:tc:opendocument:xmlns:form:1.0": "form:", "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": "number:", "urn:oasis:names:tc:opendocument:xmlns:office:1.0": "office:", "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0": "presentation:", "urn:oasis:names:tc:opendocument:xmlns:style:1.0": "style:", "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0": "svg:",
        "urn:oasis:names:tc:opendocument:xmlns:table:1.0": "table:", "urn:oasis:names:tc:opendocument:xmlns:text:1.0": "chart:", "http://www.w3.org/XML/1998/namespace": "xml:"}, G = {text: [
        {ens: s, en: "tab-stop", ans: s, a: "leader-text-style"},
        {ens: s, en: "drop-cap", ans: s, a: "style-name"},
        {ens: w, en: "notes-configuration", ans: w, a: "citation-body-style-name"},
        {ens: w, en: "notes-configuration", ans: w, a: "citation-style-name"},
        {ens: w, en: "a", ans: w, a: "style-name"},
        {ens: w, en: "alphabetical-index", ans: w, a: "style-name"},
        {ens: w, en: "linenumbering-configuration",
            ans: w, a: "style-name"},
        {ens: w, en: "list-level-style-number", ans: w, a: "style-name"},
        {ens: w, en: "ruby-text", ans: w, a: "style-name"},
        {ens: w, en: "span", ans: w, a: "style-name"},
        {ens: w, en: "a", ans: w, a: "visited-style-name"},
        {ens: s, en: "text-properties", ans: s, a: "text-line-through-text-style"},
        {ens: w, en: "alphabetical-index-source", ans: w, a: "main-entry-style-name"},
        {ens: w, en: "index-entry-bibliography", ans: w, a: "style-name"},
        {ens: w, en: "index-entry-chapter", ans: w, a: "style-name"},
        {ens: w, en: "index-entry-link-end", ans: w, a: "style-name"},
        {ens: w, en: "index-entry-link-start", ans: w, a: "style-name"},
        {ens: w, en: "index-entry-page-number", ans: w, a: "style-name"},
        {ens: w, en: "index-entry-span", ans: w, a: "style-name"},
        {ens: w, en: "index-entry-tab-stop", ans: w, a: "style-name"},
        {ens: w, en: "index-entry-text", ans: w, a: "style-name"},
        {ens: w, en: "index-title-template", ans: w, a: "style-name"},
        {ens: w, en: "list-level-style-bullet", ans: w, a: "style-name"},
        {ens: w, en: "outline-level-style", ans: w, a: "style-name"}
    ], paragraph: [
        {ens: g, en: "caption", ans: g, a: "text-style-name"},
        {ens: g,
            en: "circle", ans: g, a: "text-style-name"},
        {ens: g, en: "connector", ans: g, a: "text-style-name"},
        {ens: g, en: "control", ans: g, a: "text-style-name"},
        {ens: g, en: "custom-shape", ans: g, a: "text-style-name"},
        {ens: g, en: "ellipse", ans: g, a: "text-style-name"},
        {ens: g, en: "frame", ans: g, a: "text-style-name"},
        {ens: g, en: "line", ans: g, a: "text-style-name"},
        {ens: g, en: "measure", ans: g, a: "text-style-name"},
        {ens: g, en: "path", ans: g, a: "text-style-name"},
        {ens: g, en: "polygon", ans: g, a: "text-style-name"},
        {ens: g, en: "polyline", ans: g, a: "text-style-name"},
        {ens: g, en: "rect", ans: g, a: "text-style-name"},
        {ens: g, en: "regular-polygon", ans: g, a: "text-style-name"},
        {ens: v, en: "annotation", ans: g, a: "text-style-name"},
        {ens: z, en: "column", ans: z, a: "text-style-name"},
        {ens: s, en: "style", ans: s, a: "next-style-name"},
        {ens: x, en: "body", ans: x, a: "paragraph-style-name"},
        {ens: x, en: "even-columns", ans: x, a: "paragraph-style-name"},
        {ens: x, en: "even-rows", ans: x, a: "paragraph-style-name"},
        {ens: x, en: "first-column", ans: x, a: "paragraph-style-name"},
        {ens: x, en: "first-row", ans: x, a: "paragraph-style-name"},
        {ens: x, en: "last-column", ans: x, a: "paragraph-style-name"},
        {ens: x, en: "last-row", ans: x, a: "paragraph-style-name"},
        {ens: x, en: "odd-columns", ans: x, a: "paragraph-style-name"},
        {ens: x, en: "odd-rows", ans: x, a: "paragraph-style-name"},
        {ens: w, en: "notes-configuration", ans: w, a: "default-style-name"},
        {ens: w, en: "alphabetical-index-entry-template", ans: w, a: "style-name"},
        {ens: w, en: "bibliography-entry-template", ans: w, a: "style-name"},
        {ens: w, en: "h", ans: w, a: "style-name"},
        {ens: w, en: "illustration-index-entry-template", ans: w, a: "style-name"},
        {ens: w, en: "index-source-style", ans: w, a: "style-name"},
        {ens: w, en: "object-index-entry-template", ans: w, a: "style-name"},
        {ens: w, en: "p", ans: w, a: "style-name"},
        {ens: w, en: "table-index-entry-template", ans: w, a: "style-name"},
        {ens: w, en: "table-of-content-entry-template", ans: w, a: "style-name"},
        {ens: w, en: "table-index-entry-template", ans: w, a: "style-name"},
        {ens: w, en: "user-index-entry-template", ans: w, a: "style-name"},
        {ens: s, en: "page-layout-properties", ans: s, a: "register-truth-ref-style-name"}
    ], chart: [
        {ens: e, en: "axis", ans: e,
            a: "style-name"},
        {ens: e, en: "chart", ans: e, a: "style-name"},
        {ens: e, en: "data-label", ans: e, a: "style-name"},
        {ens: e, en: "data-point", ans: e, a: "style-name"},
        {ens: e, en: "equation", ans: e, a: "style-name"},
        {ens: e, en: "error-indicator", ans: e, a: "style-name"},
        {ens: e, en: "floor", ans: e, a: "style-name"},
        {ens: e, en: "footer", ans: e, a: "style-name"},
        {ens: e, en: "grid", ans: e, a: "style-name"},
        {ens: e, en: "legend", ans: e, a: "style-name"},
        {ens: e, en: "mean-value", ans: e, a: "style-name"},
        {ens: e, en: "plot-area", ans: e, a: "style-name"},
        {ens: e, en: "regression-curve",
            ans: e, a: "style-name"},
        {ens: e, en: "series", ans: e, a: "style-name"},
        {ens: e, en: "stock-gain-marker", ans: e, a: "style-name"},
        {ens: e, en: "stock-loss-marker", ans: e, a: "style-name"},
        {ens: e, en: "stock-range-line", ans: e, a: "style-name"},
        {ens: e, en: "subtitle", ans: e, a: "style-name"},
        {ens: e, en: "title", ans: e, a: "style-name"},
        {ens: e, en: "wall", ans: e, a: "style-name"}
    ], section: [
        {ens: w, en: "alphabetical-index", ans: w, a: "style-name"},
        {ens: w, en: "bibliography", ans: w, a: "style-name"},
        {ens: w, en: "illustration-index", ans: w, a: "style-name"},
        {ens: w, en: "index-title", ans: w, a: "style-name"},
        {ens: w, en: "object-index", ans: w, a: "style-name"},
        {ens: w, en: "section", ans: w, a: "style-name"},
        {ens: w, en: "table-of-content", ans: w, a: "style-name"},
        {ens: w, en: "table-index", ans: w, a: "style-name"},
        {ens: w, en: "user-index", ans: w, a: "style-name"}
    ], ruby: [
        {ens: w, en: "ruby", ans: w, a: "style-name"}
    ], table: [
        {ens: a, en: "query", ans: a, a: "style-name"},
        {ens: a, en: "table-representation", ans: a, a: "style-name"},
        {ens: x, en: "background", ans: x, a: "style-name"},
        {ens: x, en: "table", ans: x, a: "style-name"}
    ],
        "table-column": [
            {ens: a, en: "column", ans: a, a: "style-name"},
            {ens: x, en: "table-column", ans: x, a: "style-name"}
        ], "table-row": [
            {ens: a, en: "query", ans: a, a: "default-row-style-name"},
            {ens: a, en: "table-representation", ans: a, a: "default-row-style-name"},
            {ens: x, en: "table-row", ans: x, a: "style-name"}
        ], "table-cell": [
            {ens: a, en: "column", ans: a, a: "default-cell-style-name"},
            {ens: x, en: "table-column", ans: x, a: "default-cell-style-name"},
            {ens: x, en: "table-row", ans: x, a: "default-cell-style-name"},
            {ens: x, en: "body", ans: x, a: "style-name"},
            {ens: x, en: "covered-table-cell", ans: x, a: "style-name"},
            {ens: x, en: "even-columns", ans: x, a: "style-name"},
            {ens: x, en: "covered-table-cell", ans: x, a: "style-name"},
            {ens: x, en: "even-columns", ans: x, a: "style-name"},
            {ens: x, en: "even-rows", ans: x, a: "style-name"},
            {ens: x, en: "first-column", ans: x, a: "style-name"},
            {ens: x, en: "first-row", ans: x, a: "style-name"},
            {ens: x, en: "last-column", ans: x, a: "style-name"},
            {ens: x, en: "last-row", ans: x, a: "style-name"},
            {ens: x, en: "odd-columns", ans: x, a: "style-name"},
            {ens: x, en: "odd-rows", ans: x, a: "style-name"},
            {ens: x, en: "table-cell", ans: x, a: "style-name"}
        ], graphic: [
            {ens: m, en: "cube", ans: g, a: "style-name"},
            {ens: m, en: "extrude", ans: g, a: "style-name"},
            {ens: m, en: "rotate", ans: g, a: "style-name"},
            {ens: m, en: "scene", ans: g, a: "style-name"},
            {ens: m, en: "sphere", ans: g, a: "style-name"},
            {ens: g, en: "caption", ans: g, a: "style-name"},
            {ens: g, en: "circle", ans: g, a: "style-name"},
            {ens: g, en: "connector", ans: g, a: "style-name"},
            {ens: g, en: "control", ans: g, a: "style-name"},
            {ens: g, en: "custom-shape", ans: g, a: "style-name"},
            {ens: g, en: "ellipse", ans: g, a: "style-name"},
            {ens: g, en: "frame", ans: g, a: "style-name"},
            {ens: g, en: "g", ans: g, a: "style-name"},
            {ens: g, en: "line", ans: g, a: "style-name"},
            {ens: g, en: "measure", ans: g, a: "style-name"},
            {ens: g, en: "page-thumbnail", ans: g, a: "style-name"},
            {ens: g, en: "path", ans: g, a: "style-name"},
            {ens: g, en: "polygon", ans: g, a: "style-name"},
            {ens: g, en: "polyline", ans: g, a: "style-name"},
            {ens: g, en: "rect", ans: g, a: "style-name"},
            {ens: g, en: "regular-polygon", ans: g, a: "style-name"},
            {ens: v, en: "annotation", ans: g, a: "style-name"}
        ], presentation: [
            {ens: m, en: "cube", ans: y,
                a: "style-name"},
            {ens: m, en: "extrude", ans: y, a: "style-name"},
            {ens: m, en: "rotate", ans: y, a: "style-name"},
            {ens: m, en: "scene", ans: y, a: "style-name"},
            {ens: m, en: "sphere", ans: y, a: "style-name"},
            {ens: g, en: "caption", ans: y, a: "style-name"},
            {ens: g, en: "circle", ans: y, a: "style-name"},
            {ens: g, en: "connector", ans: y, a: "style-name"},
            {ens: g, en: "control", ans: y, a: "style-name"},
            {ens: g, en: "custom-shape", ans: y, a: "style-name"},
            {ens: g, en: "ellipse", ans: y, a: "style-name"},
            {ens: g, en: "frame", ans: y, a: "style-name"},
            {ens: g, en: "g", ans: y, a: "style-name"},
            {ens: g, en: "line", ans: y, a: "style-name"},
            {ens: g, en: "measure", ans: y, a: "style-name"},
            {ens: g, en: "page-thumbnail", ans: y, a: "style-name"},
            {ens: g, en: "path", ans: y, a: "style-name"},
            {ens: g, en: "polygon", ans: y, a: "style-name"},
            {ens: g, en: "polyline", ans: y, a: "style-name"},
            {ens: g, en: "rect", ans: y, a: "style-name"},
            {ens: g, en: "regular-polygon", ans: y, a: "style-name"},
            {ens: v, en: "annotation", ans: y, a: "style-name"}
        ], "drawing-page": [
            {ens: g, en: "page", ans: g, a: "style-name"},
            {ens: y, en: "notes", ans: g, a: "style-name"},
            {ens: s, en: "handout-master",
                ans: g, a: "style-name"},
            {ens: s, en: "master-page", ans: g, a: "style-name"}
        ], "list-style": [
            {ens: w, en: "list", ans: w, a: "style-name"},
            {ens: w, en: "numbered-paragraph", ans: w, a: "style-name"},
            {ens: w, en: "list-item", ans: w, a: "style-override"},
            {ens: s, en: "style", ans: s, a: "list-style-name"}
        ], data: [
            {ens: s, en: "style", ans: s, a: "data-style-name"},
            {ens: s, en: "style", ans: s, a: "percentage-data-style-name"},
            {ens: y, en: "date-time-decl", ans: s, a: "data-style-name"},
            {ens: w, en: "creation-date", ans: s, a: "data-style-name"},
            {ens: w, en: "creation-time",
                ans: s, a: "data-style-name"},
            {ens: w, en: "database-display", ans: s, a: "data-style-name"},
            {ens: w, en: "date", ans: s, a: "data-style-name"},
            {ens: w, en: "editing-duration", ans: s, a: "data-style-name"},
            {ens: w, en: "expression", ans: s, a: "data-style-name"},
            {ens: w, en: "meta-field", ans: s, a: "data-style-name"},
            {ens: w, en: "modification-date", ans: s, a: "data-style-name"},
            {ens: w, en: "modification-time", ans: s, a: "data-style-name"},
            {ens: w, en: "print-date", ans: s, a: "data-style-name"},
            {ens: w, en: "print-time", ans: s, a: "data-style-name"},
            {ens: w,
                en: "table-formula", ans: s, a: "data-style-name"},
            {ens: w, en: "time", ans: s, a: "data-style-name"},
            {ens: w, en: "user-defined", ans: s, a: "data-style-name"},
            {ens: w, en: "user-field-get", ans: s, a: "data-style-name"},
            {ens: w, en: "user-field-input", ans: s, a: "data-style-name"},
            {ens: w, en: "variable-get", ans: s, a: "data-style-name"},
            {ens: w, en: "variable-input", ans: s, a: "data-style-name"},
            {ens: w, en: "variable-set", ans: s, a: "data-style-name"}
        ], "page-layout": [
            {ens: y, en: "notes", ans: s, a: "page-layout-name"},
            {ens: s, en: "handout-master", ans: s,
                a: "page-layout-name"},
            {ens: s, en: "master-page", ans: s, a: "page-layout-name"}
        ]}, E, F = xmldom.XPath;
    this.collectUsedFontFaces = n;
    this.changeFontFaceNames = q;
    this.UsedStyleList = function (a, e) {
        var c = {};
        this.uses = function (a) {
            var b = a.localName, e = a.getAttributeNS(g, "name") || a.getAttributeNS(s, "name");
            a = "style" === b ? a.getAttributeNS(s, "family") : a.namespaceURI === t ? "data" : b;
            return(a = c[a]) ? 0 < a[e] : !1
        };
        b(a, c);
        e && p(e, c)
    };
    this.getStyleName = function (a, b) {
        var e, c, d = E[b.localName];
        if (d && (d = d[b.namespaceURI]))for (c = 0; c < d.length; c +=
            1)if (d[c].keyname === a && (d = d[c], b.hasAttributeNS(d.ns, d.localname))) {
            e = b.getAttributeNS(d.ns, d.localname);
            break
        }
        return e
    };
    this.hasDerivedStyles = function (a, b, e) {
        var c = e.getAttributeNS(s, "name");
        e = e.getAttributeNS(s, "family");
        return F.getODFElementsWithXPath(a, "//style:*[@style:parent-style-name='" + c + "'][@style:family='" + e + "']", b).length ? !0 : !1
    };
    this.prefixStyleNames = function (a, b, e) {
        var c;
        if (a) {
            for (c = a.firstChild; c;) {
                if (c.nodeType === Node.ELEMENT_NODE) {
                    var d = c, m = b, h = d.getAttributeNS(g, "name"), l = void 0;
                    h ? l = g : (h = d.getAttributeNS(s, "name")) && (l = s);
                    l && d.setAttributeNS(l, A[l] + "name", m + h)
                }
                c = c.nextSibling
            }
            f(a, b);
            e && f(e, b)
        }
    };
    this.removePrefixFromStyleNames = function (a, b, e) {
        var c = RegExp("^" + b);
        if (a) {
            for (b = a.firstChild; b;) {
                if (b.nodeType === Node.ELEMENT_NODE) {
                    var d = b, f = c, m = d.getAttributeNS(g, "name"), h = void 0;
                    m ? h = g : (m = d.getAttributeNS(s, "name")) && (h = s);
                    h && (m = m.replace(f, ""), d.setAttributeNS(h, A[h] + "name", m))
                }
                b = b.nextSibling
            }
            k(a, c);
            e && k(e, c)
        }
    };
    this.determineStylesForNode = d;
    E = function () {
        var a, b, e, c, d, g = {}, f, m,
            h, l;
        for (e in G)if (G.hasOwnProperty(e))for (c = G[e], b = c.length, a = 0; a < b; a += 1)d = c[a], h = d.en, l = d.ens, g.hasOwnProperty(h) ? f = g[h] : g[h] = f = {}, f.hasOwnProperty(l) ? m = f[l] : f[l] = m = [], m.push({ns: d.ans, localname: d.a, keyname: e});
        return g
    }()
};
"function" !== typeof Object.create && (Object.create = function (f) {
    var k = function () {
    };
    k.prototype = f;
    return new k
});
xmldom.LSSerializer = function () {
    function f(b) {
        var d = b || {}, f = function (b) {
            var e = {}, a;
            for (a in b)b.hasOwnProperty(a) && (e[b[a]] = a);
            return e
        }(b), l = [d], p = [f], k = 0;
        this.push = function () {
            k += 1;
            d = l[k] = Object.create(d);
            f = p[k] = Object.create(f)
        };
        this.pop = function () {
            l.pop();
            p.pop();
            k -= 1;
            d = l[k];
            f = p[k]
        };
        this.getLocalNamespaceDefinitions = function () {
            return f
        };
        this.getQName = function (b) {
            var e = b.namespaceURI, a = 0, c;
            if (!e)return b.localName;
            if (c = f[e])return c + ":" + b.localName;
            do {
                c || !b.prefix ? (c = "ns" + a, a += 1) : c = b.prefix;
                if (d[c] ===
                    e)break;
                if (!d[c]) {
                    d[c] = e;
                    f[e] = c;
                    break
                }
                c = null
            } while (null === c);
            return c + ":" + b.localName
        }
    }

    function k(b) {
        return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
    }

    function d(c, f) {
        var r = "", l = b.filter ? b.filter.acceptNode(f) : NodeFilter.FILTER_ACCEPT, p;
        if (l === NodeFilter.FILTER_ACCEPT && f.nodeType === Node.ELEMENT_NODE) {
            c.push();
            p = c.getQName(f);
            var n, q = f.attributes, e, a, m, g = "", z;
            n = "<" + p;
            e = q.length;
            for (a = 0; a < e; a += 1)m = q.item(a), "http://www.w3.org/2000/xmlns/" !==
                m.namespaceURI && (z = b.filter ? b.filter.acceptNode(m) : NodeFilter.FILTER_ACCEPT, z === NodeFilter.FILTER_ACCEPT && (z = c.getQName(m), m = "string" === typeof m.value ? k(m.value) : m.value, g += " " + (z + '="' + m + '"')));
            e = c.getLocalNamespaceDefinitions();
            for (a in e)e.hasOwnProperty(a) && ((q = e[a]) ? "xmlns" !== q && (n += " xmlns:" + e[a] + '="' + a + '"') : n += ' xmlns="' + a + '"');
            r += n + (g + ">")
        }
        if (l === NodeFilter.FILTER_ACCEPT || l === NodeFilter.FILTER_SKIP) {
            for (l = f.firstChild; l;)r += d(c, l), l = l.nextSibling;
            f.nodeValue && (r += k(f.nodeValue))
        }
        p && (r += "</" +
            p + ">", c.pop());
        return r
    }

    var b = this;
    this.filter = null;
    this.writeToString = function (b, h) {
        if (!b)return"";
        var k = new f(h);
        return d(k, b)
    }
};
(function () {
    function f(b) {
        var e, a = l.length;
        for (e = 0; e < a; e += 1)if ("urn:oasis:names:tc:opendocument:xmlns:office:1.0" === b.namespaceURI && b.localName === l[e])return e;
        return-1
    }

    function k(b, e) {
        var a = new c.UsedStyleList(b, e), d = new odf.OdfNodeFilter;
        this.acceptNode = function (b) {
            var c = d.acceptNode(b);
            c === NodeFilter.FILTER_ACCEPT && b.parentNode === e && b.nodeType === Node.ELEMENT_NODE && (c = a.uses(b) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT);
            return c
        }
    }

    function d(b, e) {
        var a = new k(b, e);
        this.acceptNode = function (b) {
            var e =
                a.acceptNode(b);
            e !== NodeFilter.FILTER_ACCEPT || !b.parentNode || b.parentNode.namespaceURI !== odf.Namespaces.textns || "s" !== b.parentNode.localName && "tab" !== b.parentNode.localName || (e = NodeFilter.FILTER_REJECT);
            return e
        }
    }

    function b(b, e) {
        if (e) {
            var a = f(e), c, d = b.firstChild;
            if (-1 !== a) {
                for (; d;) {
                    c = f(d);
                    if (-1 !== c && c > a)break;
                    d = d.nextSibling
                }
                b.insertBefore(e, d)
            }
        }
    }

    var c = new odf.StyleInfo, h = new core.DomUtils, r = odf.Namespaces.stylens, l = "meta settings scripts font-face-decls styles automatic-styles master-styles body".split(" "),
        p = Date.now() + "_webodf_", n = new core.Base64;
    odf.ODFElement = function () {
    };
    odf.ODFDocumentElement = function () {
    };
    odf.ODFDocumentElement.prototype = new odf.ODFElement;
    odf.ODFDocumentElement.prototype.constructor = odf.ODFDocumentElement;
    odf.ODFDocumentElement.prototype.fontFaceDecls = null;
    odf.ODFDocumentElement.prototype.manifest = null;
    odf.ODFDocumentElement.prototype.settings = null;
    odf.ODFDocumentElement.namespaceURI = "urn:oasis:names:tc:opendocument:xmlns:office:1.0";
    odf.ODFDocumentElement.localName = "document";
    odf.AnnotationElement = function () {
    };
    odf.OdfPart = function (b, e, a, c) {
        var d = this;
        this.size = 0;
        this.type = null;
        this.name = b;
        this.container = a;
        this.url = null;
        this.mimetype = e;
        this.onstatereadychange = this.document = null;
        this.EMPTY = 0;
        this.LOADING = 1;
        this.DONE = 2;
        this.state = this.EMPTY;
        this.data = "";
        this.load = function () {
            null !== c && (this.mimetype = e, c.loadAsDataURL(b, e, function (a, b) {
                a && runtime.log(a);
                d.url = b;
                if (d.onchange)d.onchange(d);
                if (d.onstatereadychange)d.onstatereadychange(d)
            }))
        }
    };
    odf.OdfPart.prototype.load = function () {
    };
    odf.OdfPart.prototype.getUrl = function () {
        return this.data ? "data:;base64," + n.toBase64(this.data) : null
    };
    odf.OdfContainer = function e(a, f) {
        function g(a) {
            for (var b = a.firstChild, e; b;)e = b.nextSibling, b.nodeType === Node.ELEMENT_NODE ? g(b) : b.nodeType === Node.PROCESSING_INSTRUCTION_NODE && a.removeChild(b), b = e
        }

        function l(a) {
            var b = {}, e, c, d = a.ownerDocument.createNodeIterator(a, NodeFilter.SHOW_ELEMENT, null, !1);
            for (a = d.nextNode(); a;)"urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && ("annotation" ===
                a.localName ? (e = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "name")) && (b.hasOwnProperty(e) ? runtime.log("Warning: annotation name used more than once with <office:annotation/>: '" + e + "'") : b[e] = a) : "annotation-end" === a.localName && ((e = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "name")) ? b.hasOwnProperty(e) ? (c = b[e], c.annotationEndElement ? runtime.log("Warning: annotation name used more than once with <office:annotation-end/>: '" + e + "'") : c.annotationEndElement =
                a) : runtime.log("Warning: annotation end without an annotation start, name: '" + e + "'") : runtime.log("Warning: annotation end without a name found"))), a = d.nextNode()
        }

        function t(a, b) {
            for (var e = a && a.firstChild; e;)e.nodeType === Node.ELEMENT_NODE && e.setAttributeNS("urn:webodf:names:scope", "scope", b), e = e.nextSibling
        }

        function v(a, b) {
            for (var e = J.rootElement.meta, e = e && e.firstChild; e && (e.namespaceURI !== a || e.localName !== b);)e = e.nextSibling;
            for (e = e && e.firstChild; e && e.nodeType !== Node.TEXT_NODE;)e = e.nextSibling;
            return e ?
                e.data : null
        }

        function y(a) {
            var b = {}, e;
            for (a = a.firstChild; a;)a.nodeType === Node.ELEMENT_NODE && a.namespaceURI === r && "font-face" === a.localName && (e = a.getAttributeNS(r, "name"), b[e] = a), a = a.nextSibling;
            return b
        }

        function s(a, b) {
            var e = null, c, d, g;
            if (a)for (e = a.cloneNode(!0), c = e.firstElementChild; c;)d = c.nextElementSibling, (g = c.getAttributeNS("urn:webodf:names:scope", "scope")) && g !== b && e.removeChild(c), c = d;
            return e
        }

        function x(a, b) {
            var e, d, g, f = null, m = {};
            if (a)for (b.forEach(function (a) {
                c.collectUsedFontFaces(m, a)
            }),
                           f = a.cloneNode(!0), e = f.firstElementChild; e;)d = e.nextElementSibling, g = e.getAttributeNS(r, "name"), m[g] || f.removeChild(e), e = d;
            return f
        }

        function w(a) {
            var b = J.rootElement.ownerDocument, e;
            if (a) {
                g(a.documentElement);
                try {
                    e = b.importNode(a.documentElement, !0)
                } catch (c) {
                }
            }
            return e
        }

        function A(a) {
            J.state = a;
            if (J.onchange)J.onchange(J);
            if (J.onstatereadychange)J.onstatereadychange(J)
        }

        function G(a) {
            aa = null;
            J.rootElement = a;
            a.fontFaceDecls = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls");
            a.styles = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "styles");
            a.automaticStyles = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles");
            a.masterStyles = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles");
            a.body = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "body");
            a.meta = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta");
            a.settings = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "settings");
            a.scripts = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "scripts");
            l(a)
        }

        function E(a) {
            var d = w(a), g = J.rootElement, f;
            d && "document-styles" === d.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === d.namespaceURI ? (g.fontFaceDecls = h.getDirectChild(d, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls"), b(g, g.fontFaceDecls), f = h.getDirectChild(d, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "styles"), g.styles = f || a.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "styles"), b(g, g.styles), f = h.getDirectChild(d, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles"), g.automaticStyles = f || a.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles"), t(g.automaticStyles, "document-styles"), b(g, g.automaticStyles), d = h.getDirectChild(d, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles"), g.masterStyles = d || a.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles"), b(g, g.masterStyles),
                c.prefixStyleNames(g.automaticStyles, p, g.masterStyles)) : A(e.INVALID)
        }

        function F(a) {
            a = w(a);
            var d, g, f, m;
            if (a && "document-content" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI) {
                d = J.rootElement;
                f = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls");
                if (d.fontFaceDecls && f) {
                    m = d.fontFaceDecls;
                    var l, p, k, n, E = {};
                    g = y(m);
                    n = y(f);
                    for (f = f.firstElementChild; f;) {
                        l = f.nextElementSibling;
                        if (f.namespaceURI === r && "font-face" === f.localName)if (p = f.getAttributeNS(r,
                            "name"), g.hasOwnProperty(p)) {
                            if (!f.isEqualNode(g[p])) {
                                k = p;
                                for (var s = g, z = n, U = 0, F = void 0, F = k = k.replace(/\d+$/, ""); s.hasOwnProperty(F) || z.hasOwnProperty(F);)U += 1, F = k + U;
                                k = F;
                                f.setAttributeNS(r, "style:name", k);
                                m.appendChild(f);
                                g[k] = f;
                                delete n[p];
                                E[p] = k
                            }
                        } else m.appendChild(f), g[p] = f, delete n[p];
                        f = l
                    }
                    m = E
                } else f && (d.fontFaceDecls = f, b(d, f));
                g = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles");
                t(g, "document-content");
                m && c.changeFontFaceNames(g, m);
                if (d.automaticStyles && g)for (m =
                                                    g.firstChild; m;)d.automaticStyles.appendChild(m), m = g.firstChild; else g && (d.automaticStyles = g, b(d, g));
                a = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "body");
                if (null === a)throw"<office:body/> tag is mising.";
                d.body = a;
                b(d, d.body)
            } else A(e.INVALID)
        }

        function H(a) {
            a = w(a);
            var e;
            a && "document-meta" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && (e = J.rootElement, e.meta = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta"),
                b(e, e.meta))
        }

        function N(a) {
            a = w(a);
            var e;
            a && "document-settings" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && (e = J.rootElement, e.settings = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "settings"), b(e, e.settings))
        }

        function I(a) {
            a = w(a);
            var b;
            if (a && "manifest" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" === a.namespaceURI)for (b = J.rootElement, b.manifest = a, a = b.manifest.firstElementChild; a;)"file-entry" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" ===
                a.namespaceURI && (V[a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "full-path")] = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "media-type")), a = a.nextElementSibling
        }

        function U(a, b, e) {
            a = h.getElementsByTagName(a, b);
            var c;
            for (c = 0; c < a.length; c += 1)b = a[c], e.hasOwnProperty(b.namespaceURI) || b.parentNode.removeChild(b)
        }

        function B(a) {
            U(a, "script", {"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": !0, "urn:oasis:names:tc:opendocument:xmlns:office:1.0": !0, "urn:oasis:names:tc:opendocument:xmlns:table:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:text:1.0": !0, "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0": !0});
            U(a, "style", {"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": !0, "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0": !0, "urn:oasis:names:tc:opendocument:xmlns:style:1.0": !0})
        }

        function Z(a) {
            var b = a.firstElementChild, e = [], c, d, g, f = a.attributes, m = f.length;
            for (c = 0; c < m; c += 1)g = f.item(c), d = g.localName.substr(0, 2).toLowerCase(), null === g.namespaceURI && "on" === d && e.push(g);
            m = e.length;
            for (c =
                     0; c < m; c += 1)a.removeAttributeNode(e[c]);
            for (; b;)Z(b), b = b.nextElementSibling
        }

        function Q(a) {
            var b = a.shift();
            b ? O.loadAsDOM(b.path, function (c, d) {
                d && (B(d), Z(d.documentElement));
                b.handler(d);
                J.state === e.INVALID ? c ? runtime.log("ERROR: Unable to load " + b.path + " - " + c) : runtime.log("ERROR: Unable to load " + b.path) : (c && runtime.log("DEBUG: Unable to load " + b.path + " - " + c), Q(a))
            }) : (l(J.rootElement), A(e.DONE))
        }

        function u(a) {
            var b = "";
            odf.Namespaces.forEachPrefix(function (a, e) {
                b += " xmlns:" + a + '="' + e + '"'
            });
            return'<?xml version="1.0" encoding="UTF-8"?><office:' +
                a + " " + b + ' office:version="1.2">'
        }

        function Y() {
            var a = new xmldom.LSSerializer, b = u("document-meta");
            a.filter = new odf.OdfNodeFilter;
            b += a.writeToString(J.rootElement.meta, odf.Namespaces.namespaceMap);
            return b + "</office:document-meta>"
        }

        function $(a, b) {
            var e = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "manifest:file-entry");
            e.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "manifest:full-path", a);
            e.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0",
                "manifest:media-type", b);
            return e
        }

        function ea() {
            var a = runtime.parseXML('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2"></manifest:manifest>'), b = a.documentElement, e = new xmldom.LSSerializer, c;
            for (c in V)V.hasOwnProperty(c) && b.appendChild($(c, V[c]));
            e.filter = new odf.OdfNodeFilter;
            return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' + e.writeToString(a, odf.Namespaces.namespaceMap)
        }

        function D() {
            var a, b, e, d = odf.Namespaces.namespaceMap,
                g = new xmldom.LSSerializer, f = u("document-styles");
            b = s(J.rootElement.automaticStyles, "document-styles");
            e = J.rootElement.masterStyles.cloneNode(!0);
            a = x(J.rootElement.fontFaceDecls, [e, J.rootElement.styles, b]);
            c.removePrefixFromStyleNames(b, p, e);
            g.filter = new k(e, b);
            f += g.writeToString(a, d);
            f += g.writeToString(J.rootElement.styles, d);
            f += g.writeToString(b, d);
            f += g.writeToString(e, d);
            return f + "</office:document-styles>"
        }

        function P() {
            var a, b, e = odf.Namespaces.namespaceMap, c = new xmldom.LSSerializer, g = u("document-content");
            b = s(J.rootElement.automaticStyles, "document-content");
            a = x(J.rootElement.fontFaceDecls, [b]);
            c.filter = new d(J.rootElement.body, b);
            g += c.writeToString(a, e);
            g += c.writeToString(b, e);
            g += c.writeToString(J.rootElement.body, e);
            return g + "</office:document-content>"
        }

        function X(a, b) {
            runtime.loadXML(a, function (a, c) {
                if (a)b(a); else if (c) {
                    B(c);
                    Z(c.documentElement);
                    var d = w(c);
                    d && "document" === d.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === d.namespaceURI ? (G(d), A(e.DONE)) : A(e.INVALID)
                } else b("No DOM was loaded.")
            })
        }

        function C(a, e) {
            var c;
            c = J.rootElement;
            var d = c.meta;
            d || (c.meta = d = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta"), b(c, d));
            c = d;
            a && h.mapKeyValObjOntoNode(c, a, odf.Namespaces.lookupNamespaceURI);
            e && h.removeKeyElementsFromNode(c, e, odf.Namespaces.lookupNamespaceURI)
        }

        function T(a) {
            function b(a, e) {
                var c;
                e || (e = a);
                c = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", e);
                g[a] = c;
                g.appendChild(c)
            }

            var c = new core.Zip("", null), d = runtime.byteArrayFromString("application/vnd.oasis.opendocument." +
                a, "utf8"), g = J.rootElement, f = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", a);
            c.save("mimetype", d, !1, new Date);
            b("meta");
            b("settings");
            b("scripts");
            b("fontFaceDecls", "font-face-decls");
            b("styles");
            b("automaticStyles", "automatic-styles");
            b("masterStyles", "master-styles");
            b("body");
            g.body.appendChild(f);
            V["/"] = "application/vnd.oasis.opendocument." + a;
            V["settings.xml"] = "text/xml";
            V["meta.xml"] = "text/xml";
            V["styles.xml"] = "text/xml";
            V["content.xml"] = "text/xml";
            A(e.DONE);
            return c
        }

        function L() {
            var a, b = new Date, e = "";
            J.rootElement.settings && J.rootElement.settings.firstElementChild && (a = new xmldom.LSSerializer, e = u("document-settings"), a.filter = new odf.OdfNodeFilter, e += a.writeToString(J.rootElement.settings, odf.Namespaces.namespaceMap), e += "</office:document-settings>");
            (a = e) ? (a = runtime.byteArrayFromString(a, "utf8"), O.save("settings.xml", a, !0, b)) : O.remove("settings.xml");
            e = runtime.getWindow();
            a = "WebODF/" + webodf.Version;
            e && (a = a + " " + e.navigator.userAgent);
            C({"meta:generator": a}, null);
            a = runtime.byteArrayFromString(Y(), "utf8");
            O.save("meta.xml", a, !0, b);
            a = runtime.byteArrayFromString(D(), "utf8");
            O.save("styles.xml", a, !0, b);
            a = runtime.byteArrayFromString(P(), "utf8");
            O.save("content.xml", a, !0, b);
            a = runtime.byteArrayFromString(ea(), "utf8");
            O.save("META-INF/manifest.xml", a, !0, b)
        }

        function S(a, b) {
            L();
            O.writeAs(a, function (a) {
                b(a)
            })
        }

        var J = this, O, V = {}, aa, ba = "";
        this.onstatereadychange = f;
        this.state = this.onchange = null;
        this.getMetadata = v;
        this.setRootElement = G;
        this.getContentElement = function () {
            var a;
            aa || (a = J.rootElement.body, aa = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "text") || h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "presentation") || h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "spreadsheet"));
            if (!aa)throw"Could not find content element in <office:body/>.";
            return aa
        };
        this.getDocumentType = function () {
            var a = J.getContentElement();
            return a && a.localName
        };
        this.getPart = function (a) {
            return new odf.OdfPart(a, V[a], J, O)
        };
        this.getPartData =
            function (a, b) {
                O.load(a, b)
            };
        this.setMetadata = C;
        this.incrementEditingCycles = function () {
            var a = v(odf.Namespaces.metans, "editing-cycles"), a = a ? parseInt(a, 10) : 0;
            isNaN(a) && (a = 0);
            C({"meta:editing-cycles": a + 1}, null);
            return a + 1
        };
        this.createByteArray = function (a, b) {
            L();
            O.createByteArray(a, b)
        };
        this.saveAs = S;
        this.save = function (a) {
            S(ba, a)
        };
        this.getUrl = function () {
            return ba
        };
        this.setBlob = function (a, b, e) {
            e = n.convertBase64ToByteArray(e);
            O.save(a, e, !1, new Date);
            V.hasOwnProperty(a) && runtime.log(a + " has been overwritten.");
            V[a] = b
        };
        this.removeBlob = function (a) {
            var b = O.remove(a);
            runtime.assert(b, "file is not found: " + a);
            delete V[a]
        };
        this.state = e.LOADING;
        this.rootElement = function (a) {
            var b = document.createElementNS(a.namespaceURI, a.localName), e;
            a = new a.Type;
            for (e in a)a.hasOwnProperty(e) && (b[e] = a[e]);
            return b
        }({Type: odf.ODFDocumentElement, namespaceURI: odf.ODFDocumentElement.namespaceURI, localName: odf.ODFDocumentElement.localName});
        a === odf.OdfContainer.DocumentType.TEXT ? O = T("text") : a === odf.OdfContainer.DocumentType.PRESENTATION ?
            O = T("presentation") : a === odf.OdfContainer.DocumentType.SPREADSHEET ? O = T("spreadsheet") : (ba = a, O = new core.Zip(ba, function (a, b) {
            O = b;
            a ? X(ba, function (b) {
                a && (O.error = a + "\n" + b, A(e.INVALID))
            }) : Q([
                {path: "styles.xml", handler: E},
                {path: "content.xml", handler: F},
                {path: "meta.xml", handler: H},
                {path: "settings.xml", handler: N},
                {path: "META-INF/manifest.xml", handler: I}
            ])
        }))
    };
    odf.OdfContainer.EMPTY = 0;
    odf.OdfContainer.LOADING = 1;
    odf.OdfContainer.DONE = 2;
    odf.OdfContainer.INVALID = 3;
    odf.OdfContainer.SAVING = 4;
    odf.OdfContainer.MODIFIED =
        5;
    odf.OdfContainer.getContainer = function (b) {
        return new odf.OdfContainer(b, null)
    }
})();
odf.OdfContainer.DocumentType = {TEXT: 1, PRESENTATION: 2, SPREADSHEET: 3};
odf.OdfUtils = function () {
    function f(a) {
        return"image" === (a && a.localName) && a.namespaceURI === Z
    }

    function k(a) {
        return null !== a && a.nodeType === Node.ELEMENT_NODE && "frame" === a.localName && a.namespaceURI === Z && "as-char" === a.getAttributeNS(B, "anchor-type")
    }

    function d(a) {
        var b;
        (b = "annotation" === (a && a.localName) && a.namespaceURI === odf.Namespaces.officens) || (b = "div" === (a && a.localName) && "annotationWrapper" === a.className);
        return b
    }

    function b(a) {
        return"a" === (a && a.localName) && a.namespaceURI === B
    }

    function c(a) {
        var b = a &&
            a.localName;
        return("p" === b || "h" === b) && a.namespaceURI === B
    }

    function h(a, b) {
        for (a && void 0 !== b && !c(a) && a.childNodes.item(b) && (a = a.childNodes.item(b)); a && !c(a);)a = a.parentNode;
        return a
    }

    function r(a, b) {
        for (; a && a !== b;) {
            if (a.namespaceURI === odf.Namespaces.officens && "annotation" === a.localName)return a;
            a = a.parentNode
        }
        return null
    }

    function l(a) {
        return/^[ \t\r\n]+$/.test(a)
    }

    function p(a) {
        if (null === a || a.nodeType !== Node.ELEMENT_NODE)return!1;
        var b = a.localName;
        return/^(span|p|h|a|meta)$/.test(b) && a.namespaceURI ===
            B || "span" === b && "webodf-annotationHighlight" === a.className
    }

    function n(a) {
        var b = a && a.localName, e = !1;
        b && (a = a.namespaceURI, a === B && (e = "s" === b || "tab" === b || "line-break" === b));
        return e
    }

    function q(a) {
        return n(a) || k(a) || d(a)
    }

    function e(a) {
        var b = a && a.localName, e = !1;
        b && (a = a.namespaceURI, a === B && (e = "s" === b));
        return e
    }

    function a(a) {
        return-1 !== Y.indexOf(a.namespaceURI)
    }

    function m(b) {
        if (n(b))return!1;
        if (p(b.parentNode) && b.nodeType === Node.TEXT_NODE)return 0 === b.textContent.length;
        for (b = b.firstChild; b;) {
            if (a(b) || !m(b))return!1;
            b = b.nextSibling
        }
        return!0
    }

    function g(a) {
        for (; null !== a.firstChild && p(a);)a = a.firstChild;
        return a
    }

    function z(a) {
        for (; null !== a.lastChild && p(a);)a = a.lastChild;
        return a
    }

    function t(a) {
        for (; !c(a) && null === a.previousSibling;)a = a.parentNode;
        return c(a) ? null : z(a.previousSibling)
    }

    function v(a) {
        for (; !c(a) && null === a.nextSibling;)a = a.parentNode;
        return c(a) ? null : g(a.nextSibling)
    }

    function y(a) {
        for (var b = !1; a;)if (a.nodeType === Node.TEXT_NODE)if (0 === a.length)a = t(a); else return!l(a.data.substr(a.length - 1, 1)); else q(a) ?
            (b = !1 === e(a), a = null) : a = t(a);
        return b
    }

    function s(a) {
        var b = !1, e;
        for (a = a && g(a); a;) {
            e = a.nodeType === Node.TEXT_NODE ? a.length : 0;
            if (0 < e && !l(a.data)) {
                b = !0;
                break
            }
            if (q(a)) {
                b = !0;
                break
            }
            a = v(a)
        }
        return b
    }

    function x(a, b) {
        return l(a.data.substr(b)) ? !s(v(a)) : !1
    }

    function w(a, b) {
        var e = a.data, c;
        if (!l(e[b]) || q(a.parentNode))return!1;
        0 < b ? l(e[b - 1]) || (c = !0) : y(t(a)) && (c = !0);
        return!0 === c ? x(a, b) ? !1 : !0 : !1
    }

    function A(a) {
        return(a = /(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px)|(%))/.exec(a)) ?
        {value: parseFloat(a[1]), unit: a[3]} : null
    }

    function G(a) {
        return(a = A(a)) && (0 > a.value || "%" === a.unit) ? null : a
    }

    function E(a) {
        return(a = A(a)) && "%" !== a.unit ? null : a
    }

    function F(a) {
        switch (a.namespaceURI) {
            case odf.Namespaces.drawns:
            case odf.Namespaces.svgns:
            case odf.Namespaces.dr3dns:
                return!1;
            case odf.Namespaces.textns:
                switch (a.localName) {
                    case "note-body":
                    case "ruby-text":
                        return!1
                }
                break;
            case odf.Namespaces.officens:
                switch (a.localName) {
                    case "annotation":
                    case "binary-data":
                    case "event-listeners":
                        return!1
                }
                break;
            default:
                switch (a.localName) {
                    case "cursor":
                    case "editinfo":
                        return!1
                }
        }
        return!0
    }

    function H(a, b) {
        for (; 0 < b.length && !u.rangeContainsNode(a, b[0]);)b.shift();
        for (; 0 < b.length && !u.rangeContainsNode(a, b[b.length - 1]);)b.pop()
    }

    function N(a, b, e) {
        var c;
        c = u.getNodesInRange(a, function (a) {
            var b = NodeFilter.FILTER_REJECT;
            if (n(a.parentNode) || d(a))b = NodeFilter.FILTER_REJECT; else if (a.nodeType === Node.TEXT_NODE) {
                if (e || Boolean(h(a) && (!l(a.textContent) || w(a, 0))))b = NodeFilter.FILTER_ACCEPT
            } else if (q(a))b = NodeFilter.FILTER_ACCEPT; else if (F(a) || p(a))b = NodeFilter.FILTER_SKIP;
            return b
        }, NodeFilter.SHOW_ELEMENT |
            NodeFilter.SHOW_TEXT);
        b || H(a, c);
        return c
    }

    function I(a, b, e) {
        for (; a;) {
            if (e(a)) {
                b[0] !== a && b.unshift(a);
                break
            }
            if (d(a))break;
            a = a.parentNode
        }
    }

    function U(a, b) {
        var e = a;
        if (b < e.childNodes.length - 1)e = e.childNodes[b + 1]; else {
            for (; !e.nextSibling;)e = e.parentNode;
            e = e.nextSibling
        }
        for (; e.firstChild;)e = e.firstChild;
        return e
    }

    var B = odf.Namespaces.textns, Z = odf.Namespaces.drawns, Q = odf.Namespaces.xlinkns, u = new core.DomUtils, Y = [odf.Namespaces.dbns, odf.Namespaces.dcns, odf.Namespaces.dr3dns, odf.Namespaces.drawns, odf.Namespaces.chartns,
        odf.Namespaces.formns, odf.Namespaces.numberns, odf.Namespaces.officens, odf.Namespaces.presentationns, odf.Namespaces.stylens, odf.Namespaces.svgns, odf.Namespaces.tablens, odf.Namespaces.textns];
    this.isImage = f;
    this.isCharacterFrame = k;
    this.isInlineRoot = d;
    this.isTextSpan = function (a) {
        return"span" === (a && a.localName) && a.namespaceURI === B
    };
    this.isHyperlink = b;
    this.getHyperlinkTarget = function (a) {
        return a.getAttributeNS(Q, "href") || ""
    };
    this.isParagraph = c;
    this.getParagraphElement = h;
    this.isWithinTrackedChanges = function (a, b) {
        for (; a && a !== b;) {
            if (a.namespaceURI === B && "tracked-changes" === a.localName)return!0;
            a = a.parentNode
        }
        return!1
    };
    this.getParentAnnotation = r;
    this.isWithinAnnotation = function (a, b) {
        return Boolean(r(a, b))
    };
    this.getAnnotationCreator = function (a) {
        return a.getElementsByTagNameNS(odf.Namespaces.dcns, "creator")[0].textContent
    };
    this.isListItem = function (a) {
        return"list-item" === (a && a.localName) && a.namespaceURI === B
    };
    this.isLineBreak = function (a) {
        return"line-break" === (a && a.localName) && a.namespaceURI === B
    };
    this.isODFWhitespace =
        l;
    this.isGroupingElement = p;
    this.isCharacterElement = n;
    this.isAnchoredAsCharacterElement = q;
    this.isSpaceElement = e;
    this.isODFNode = a;
    this.hasNoODFContent = m;
    this.firstChild = g;
    this.lastChild = z;
    this.previousNode = t;
    this.nextNode = v;
    this.scanLeftForNonSpace = y;
    this.lookLeftForCharacter = function (a) {
        var b, e = b = 0;
        a.nodeType === Node.TEXT_NODE && (e = a.length);
        0 < e ? (b = a.data, b = l(b.substr(e - 1, 1)) ? 1 === e ? y(t(a)) ? 2 : 0 : l(b.substr(e - 2, 1)) ? 0 : 2 : 1) : q(a) && (b = 1);
        return b
    };
    this.lookRightForCharacter = function (a) {
        var b = !1, e = 0;
        a && a.nodeType ===
            Node.TEXT_NODE && (e = a.length);
        0 < e ? b = !l(a.data.substr(0, 1)) : q(a) && (b = !0);
        return b
    };
    this.scanLeftForAnyCharacter = function (a) {
        var b = !1, e;
        for (a = a && z(a); a;) {
            e = a.nodeType === Node.TEXT_NODE ? a.length : 0;
            if (0 < e && !l(a.data)) {
                b = !0;
                break
            }
            if (q(a)) {
                b = !0;
                break
            }
            a = t(a)
        }
        return b
    };
    this.scanRightForAnyCharacter = s;
    this.isTrailingWhitespace = x;
    this.isSignificantWhitespace = w;
    this.isDowngradableSpaceElement = function (a) {
        return e(a) ? y(t(a)) && s(v(a)) : !1
    };
    this.parseLength = A;
    this.parseNonNegativeLength = G;
    this.parseFoFontSize = function (a) {
        var b;
        b = (b = A(a)) && (0 >= b.value || "%" === b.unit) ? null : b;
        return b || E(a)
    };
    this.parseFoLineHeight = function (a) {
        return G(a) || E(a)
    };
    this.isTextContentContainingNode = F;
    this.getTextNodes = function (a, b) {
        var e;
        e = u.getNodesInRange(a, function (a) {
            var b = NodeFilter.FILTER_REJECT;
            a.nodeType === Node.TEXT_NODE ? Boolean(h(a) && (!l(a.textContent) || w(a, 0))) && (b = NodeFilter.FILTER_ACCEPT) : F(a) && (b = NodeFilter.FILTER_SKIP);
            return b
        }, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        b || H(a, e);
        return e
    };
    this.getTextElements = N;
    this.getParagraphElements =
        function (a) {
            var b;
            b = u.getNodesInRange(a, function (a) {
                var b = NodeFilter.FILTER_REJECT;
                if (c(a))b = NodeFilter.FILTER_ACCEPT; else if (F(a) || p(a))b = NodeFilter.FILTER_SKIP;
                return b
            }, NodeFilter.SHOW_ELEMENT);
            I(a.startContainer, b, c);
            return b
        };
    this.getImageElements = function (a) {
        var b;
        b = u.getNodesInRange(a, function (a) {
            var b = NodeFilter.FILTER_SKIP;
            f(a) && (b = NodeFilter.FILTER_ACCEPT);
            return b
        }, NodeFilter.SHOW_ELEMENT);
        I(a.startContainer, b, f);
        return b
    };
    this.getHyperlinkElements = function (a) {
        var e = [], d = a.cloneRange();
        a.collapsed && a.endContainer.nodeType === Node.ELEMENT_NODE && (a = U(a.endContainer, a.endOffset), a.nodeType === Node.TEXT_NODE && d.setEnd(a, 1));
        N(d, !0, !1).forEach(function (a) {
            for (a = a.parentNode; !c(a);) {
                if (b(a) && -1 === e.indexOf(a)) {
                    e.push(a);
                    break
                }
                a = a.parentNode
            }
        });
        d.detach();
        return e
    };
    this.getNormalizedFontFamilyName = function (a) {
        /^(["'])(?:.|[\n\r])*?\1$/.test(a) || (a = a.replace(/^[ \t\r\n\f]*((?:.|[\n\r])*?)[ \t\r\n\f]*$/, "$1"), /[ \t\r\n\f]/.test(a) && (a = "'" + a.replace(/[ \t\r\n\f]+/g, " ") + "'"));
        return a
    }
};
gui.AnnotatableCanvas = function () {
};
gui.AnnotatableCanvas.prototype.refreshSize = function () {
};
gui.AnnotatableCanvas.prototype.getZoomLevel = function () {
};
gui.AnnotatableCanvas.prototype.getSizer = function () {
};
gui.AnnotationViewManager = function (f, k, d, b) {
    function c(b) {
        var e = b.annotationEndElement, c = n.createRange(), d = b.getAttributeNS(odf.Namespaces.officens, "name");
        e && (c.setStart(b, b.childNodes.length), c.setEnd(e, 0), b = q.getTextNodes(c, !1), b.forEach(function (b) {
            var e;
            a:{
                for (e = b.parentNode; e.namespaceURI !== odf.Namespaces.officens || "body" !== e.localName;) {
                    if (e.namespaceURI === a && "webodf-annotationHighlight" === e.className && e.getAttribute("annotation") === d) {
                        e = !0;
                        break a
                    }
                    e = e.parentNode
                }
                e = !1
            }
            e || (e = n.createElement("span"),
                e.className = "webodf-annotationHighlight", e.setAttribute("annotation", d), b.parentNode.replaceChild(e, b), e.appendChild(b))
        }));
        c.detach()
    }

    function h(a) {
        var b = f.getSizer();
        a ? (d.style.display = "inline-block", b.style.paddingRight = e.getComputedStyle(d).width) : (d.style.display = "none", b.style.paddingRight = 0);
        f.refreshSize()
    }

    function r() {
        p.sort(function (a, b) {
            return 0 !== (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1
        })
    }

    function l() {
        var a;
        for (a = 0; a < p.length; a += 1) {
            var b = p[a], e = b.parentNode,
                c = e.nextElementSibling, h = c.nextElementSibling, l = e.parentNode, q = 0, q = p[p.indexOf(b) - 1], k = void 0, b = f.getZoomLevel();
            e.style.left = (d.getBoundingClientRect().left - l.getBoundingClientRect().left) / b + "px";
            e.style.width = d.getBoundingClientRect().width / b + "px";
            c.style.width = parseFloat(e.style.left) - 30 + "px";
            q && (k = q.parentNode.getBoundingClientRect(), 20 >= (l.getBoundingClientRect().top - k.bottom) / b ? e.style.top = Math.abs(l.getBoundingClientRect().top - k.bottom) / b + 20 + "px" : e.style.top = "0px");
            h.style.left = c.getBoundingClientRect().width /
                b + "px";
            var c = h.style, l = h.getBoundingClientRect().left / b, q = h.getBoundingClientRect().top / b, k = e.getBoundingClientRect().left / b, n = e.getBoundingClientRect().top / b, r = 0, G = 0, r = k - l, r = r * r, G = n - q, G = G * G, l = Math.sqrt(r + G);
            c.width = l + "px";
            q = Math.asin((e.getBoundingClientRect().top - h.getBoundingClientRect().top) / (b * parseFloat(h.style.width)));
            h.style.transform = "rotate(" + q + "rad)";
            h.style.MozTransform = "rotate(" + q + "rad)";
            h.style.WebkitTransform = "rotate(" + q + "rad)";
            h.style.msTransform = "rotate(" + q + "rad)"
        }
    }

    var p = [], n = k.ownerDocument,
        q = new odf.OdfUtils, e = runtime.getWindow(), a = "http://www.w3.org/1999/xhtml";
    runtime.assert(Boolean(e), "Expected to be run in an environment which has a global window, like a browser.");
    this.rerenderAnnotations = l;
    this.rehighlightAnnotations = function () {
        p.forEach(function (a) {
            c(a)
        })
    };
    this.getMinimumHeightForAnnotationPane = function () {
        return"none" !== d.style.display && 0 < p.length ? (p[p.length - 1].parentNode.getBoundingClientRect().bottom - d.getBoundingClientRect().top) / f.getZoomLevel() + "px" : null
    };
    this.addAnnotation =
        function (a) {
            h(!0);
            p.push(a);
            r();
            var e = n.createElement("div"), d = n.createElement("div"), f = n.createElement("div"), k = n.createElement("div"), y;
            e.className = "annotationWrapper";
            e.setAttribute("creator", q.getAnnotationCreator(a));
            a.parentNode.insertBefore(e, a);
            d.className = "annotationNote";
            d.appendChild(a);
            b && (y = n.createElement("div"), y.className = "annotationRemoveButton", d.appendChild(y));
            f.className = "annotationConnector horizontal";
            k.className = "annotationConnector angular";
            e.appendChild(d);
            e.appendChild(f);
            e.appendChild(k);
            a.annotationEndElement && c(a);
            l()
        };
    this.forgetAnnotations = function () {
        for (; p.length;) {
            var a = p[0], b = p.indexOf(a), e = a.parentNode.parentNode;
            "div" === e.localName && (e.parentNode.insertBefore(a, e), e.parentNode.removeChild(e));
            for (var a = a.getAttributeNS(odf.Namespaces.officens, "name"), a = n.querySelectorAll('span.webodf-annotationHighlight[annotation="' + a + '"]'), c = e = void 0, e = 0; e < a.length; e += 1) {
                for (c = a.item(e); c.firstChild;)c.parentNode.insertBefore(c.firstChild, c);
                c.parentNode.removeChild(c)
            }
            -1 !==
                b && p.splice(b, 1);
            0 === p.length && h(!1)
        }
    }
};
(function () {
    function f(c, d, k, l, p) {
        var n, q = 0, e;
        for (e in c)if (c.hasOwnProperty(e)) {
            if (q === k) {
                n = e;
                break
            }
            q += 1
        }
        n ? d.getPartData(c[n].href, function (a, e) {
            if (a)runtime.log(a); else if (e) {
                var g = "@font-face { font-family: " + (c[n].family || n) + "; src: url(data:application/x-font-ttf;charset=binary;base64," + b.convertUTF8ArrayToBase64(e) + ') format("truetype"); }';
                try {
                    l.insertRule(g, l.cssRules.length)
                } catch (q) {
                    runtime.log("Problem inserting rule in CSS: " + runtime.toJson(q) + "\nRule: " + g)
                }
            } else runtime.log("missing font data for " +
                c[n].href);
            f(c, d, k + 1, l, p)
        }) : p && p()
    }

    var k = xmldom.XPath, d = new odf.OdfUtils, b = new core.Base64;
    odf.FontLoader = function () {
        this.loadFonts = function (b, h) {
            for (var r = b.rootElement.fontFaceDecls; h.cssRules.length;)h.deleteRule(h.cssRules.length - 1);
            if (r) {
                var l = {}, p, n, q, e;
                if (r)for (r = k.getODFElementsWithXPath(r, "style:font-face[svg:font-face-src]", odf.Namespaces.lookupNamespaceURI), p = 0; p < r.length; p += 1)n = r[p], q = n.getAttributeNS(odf.Namespaces.stylens, "name"), e = d.getNormalizedFontFamilyName(n.getAttributeNS(odf.Namespaces.svgns,
                    "font-family")), n = k.getODFElementsWithXPath(n, "svg:font-face-src/svg:font-face-uri", odf.Namespaces.lookupNamespaceURI), 0 < n.length && (n = n[0].getAttributeNS(odf.Namespaces.xlinkns, "href"), l[q] = {href: n, family: e});
                f(l, b, 0, h)
            }
        }
    }
})();
odf.Formatting = function () {
    function f(a) {
        return(a = A[a]) ? x.mergeObjects({}, a) : {}
    }

    function k() {
        for (var a = e.rootElement.fontFaceDecls, b = {}, c, d, a = a && a.firstElementChild; a;) {
            if (c = a.getAttributeNS(g, "name"))if ((d = a.getAttributeNS(m, "font-family")) || 0 < a.getElementsByTagNameNS(m, "font-face-uri").length)b[c] = d;
            a = a.nextElementSibling
        }
        return b
    }

    function d(a) {
        for (var b = e.rootElement.styles.firstElementChild; b;) {
            if (b.namespaceURI === g && "default-style" === b.localName && b.getAttributeNS(g, "family") === a)return b;
            b = b.nextElementSibling
        }
        return null
    }

    function b(a, b, c) {
        var d, f, m;
        c = c || [e.rootElement.automaticStyles, e.rootElement.styles];
        for (m = 0; m < c.length; m += 1)for (d = c[m], d = d.firstElementChild; d;) {
            f = d.getAttributeNS(g, "name");
            if (d.namespaceURI === g && "style" === d.localName && d.getAttributeNS(g, "family") === b && f === a || "list-style" === b && d.namespaceURI === z && "list-style" === d.localName && f === a || "data" === b && d.namespaceURI === t && f === a)return d;
            d = d.nextElementSibling
        }
        return null
    }

    function c(a) {
        for (var b, e, c, d, f = {}, m = a.firstElementChild; m;) {
            if (m.namespaceURI === g)for (c =
                                              f[m.nodeName] = {}, e = m.attributes, b = 0; b < e.length; b += 1)d = e.item(b), c[d.name] = d.value;
            m = m.nextElementSibling
        }
        e = a.attributes;
        for (b = 0; b < e.length; b += 1)d = e.item(b), f[d.name] = d.value;
        return f
    }

    function h(a, m) {
        for (var h = e.rootElement.styles, l, p = {}, q = a.getAttributeNS(g, "family"), k = a; k;)l = c(k), p = x.mergeObjects(l, p), k = (l = k.getAttributeNS(g, "parent-style-name")) ? b(l, q, [h]) : null;
        if (k = d(q))l = c(k), p = x.mergeObjects(l, p);
        !1 !== m && (l = f(q), p = x.mergeObjects(l, p));
        return p
    }

    function r(b, e) {
        function c(a) {
            Object.keys(a).forEach(function (b) {
                Object.keys(a[b]).forEach(function (a) {
                    m +=
                        "|" + b + ":" + a + "|"
                })
            })
        }

        for (var d = b.nodeType === Node.TEXT_NODE ? b.parentNode : b, g, f = [], m = "", h = !1; d;)!h && y.isGroupingElement(d) && (h = !0), (g = a.determineStylesForNode(d)) && f.push(g), d = d.parentNode;
        h && (f.forEach(c), e && (e[m] = f));
        return h ? f : void 0
    }

    function l(a) {
        var c = {orderedStyles: [], styleProperties: {}};
        a.forEach(function (a) {
            Object.keys(a).forEach(function (d) {
                var f = Object.keys(a[d])[0], m = {name: f, family: d, displayName: void 0, isCommonStyle: !1}, l;
                (l = b(f, d)) ? (d = h(l), c.styleProperties = x.mergeObjects(d, c.styleProperties),
                    m.displayName = l.getAttributeNS(g, "display-name") || void 0, m.isCommonStyle = l.parentNode === e.rootElement.styles) : runtime.log("No style element found for '" + f + "' of family '" + d + "'");
                c.orderedStyles.push(m)
            })
        });
        return c
    }

    function p(a, b) {
        var e = {}, c = [];
        b || (b = {});
        a.forEach(function (a) {
            r(a, e)
        });
        Object.keys(e).forEach(function (a) {
            b[a] || (b[a] = l(e[a]));
            c.push(b[a])
        });
        return c
    }

    function n(a) {
        for (var b = e.rootElement.masterStyles.firstElementChild; b && (b.namespaceURI !== g || "master-page" !== b.localName || b.getAttributeNS(g,
            "name") !== a);)b = b.nextElementSibling;
        return b
    }

    function q(a, b) {
        var e;
        a && (e = w.convertMeasure(a, "px"));
        void 0 === e && b && (e = w.convertMeasure(b, "px"));
        return e
    }

    var e, a = new odf.StyleInfo, m = odf.Namespaces.svgns, g = odf.Namespaces.stylens, z = odf.Namespaces.textns, t = odf.Namespaces.numberns, v = odf.Namespaces.fons, y = new odf.OdfUtils, s = new core.DomUtils, x = new core.Utils, w = new core.CSSUnits, A = {paragraph: {"style:paragraph-properties": {"fo:text-align": "left"}}};
    this.getSystemDefaultStyleAttributes = f;
    this.setOdfContainer =
        function (a) {
            e = a
        };
    this.getFontMap = k;
    this.getAvailableParagraphStyles = function () {
        for (var a = e.rootElement.styles, b, c, d = [], a = a && a.firstElementChild; a;)"style" === a.localName && a.namespaceURI === g && (b = a.getAttributeNS(g, "family"), "paragraph" === b && (b = a.getAttributeNS(g, "name"), c = a.getAttributeNS(g, "display-name") || b, b && c && d.push({name: b, displayName: c}))), a = a.nextElementSibling;
        return d
    };
    this.isStyleUsed = function (b) {
        var c, d = e.rootElement;
        c = a.hasDerivedStyles(d, odf.Namespaces.lookupNamespaceURI, b);
        b = (new a.UsedStyleList(d.styles)).uses(b) ||
            (new a.UsedStyleList(d.automaticStyles)).uses(b) || (new a.UsedStyleList(d.body)).uses(b);
        return c || b
    };
    this.getDefaultStyleElement = d;
    this.getStyleElement = b;
    this.getStyleAttributes = c;
    this.getInheritedStyleAttributes = h;
    this.getFirstCommonParentStyleNameOrSelf = function (a) {
        var c = e.rootElement.styles, d;
        if (d = b(a, "paragraph", [e.rootElement.automaticStyles]))if (a = d.getAttributeNS(g, "parent-style-name"), !a)return null;
        return(d = b(a, "paragraph", [c])) ? a : null
    };
    this.hasParagraphStyle = function (a) {
        return Boolean(b(a,
            "paragraph"))
    };
    this.getAppliedStyles = p;
    this.getAppliedStylesForElement = function (a, b) {
        return p([a], b)[0]
    };
    this.updateStyle = function (a, b) {
        var c, d;
        s.mapObjOntoNode(a, b, odf.Namespaces.lookupNamespaceURI);
        (c = b["style:text-properties"] && b["style:text-properties"]["style:font-name"]) && !k().hasOwnProperty(c) && (d = a.ownerDocument.createElementNS(g, "style:font-face"), d.setAttributeNS(g, "style:name", c), d.setAttributeNS(m, "svg:font-family", c), e.rootElement.fontFaceDecls.appendChild(d))
    };
    this.createDerivedStyleObject =
        function (a, d, g) {
            var f = b(a, d);
            runtime.assert(Boolean(f), "No style element found for '" + a + "' of family '" + d + "'");
            a = f.parentNode === e.rootElement.styles ? {"style:parent-style-name": a} : c(f);
            a["style:family"] = d;
            x.mergeObjects(a, g);
            return a
        };
    this.getDefaultTabStopDistance = function () {
        for (var a = d("paragraph"), a = a && a.firstElementChild, b; a;)a.namespaceURI === g && "paragraph-properties" === a.localName && (b = a.getAttributeNS(g, "tab-stop-distance")), a = a.nextElementSibling;
        b || (b = "1.25cm");
        return y.parseNonNegativeLength(b)
    };
    this.getMasterPageElement = n;
    this.getContentSize = function (a, c) {
        var d, f, m, h, l, p, k, r, z, t;
        a:{
            f = b(a, c);
            runtime.assert("paragraph" === c || "table" === c, "styleFamily must be either paragraph or table");
            if (f) {
                if (f = f.getAttributeNS(g, "master-page-name"))(d = n(f)) || runtime.log("WARN: No master page definition found for " + f);
                d || (d = n("Standard"));
                d || (d = e.rootElement.masterStyles.getElementsByTagNameNS(g, "master-page")[0]) || runtime.log("WARN: Document has no master pages defined");
                if (d)for (f = d.getAttributeNS(g, "page-layout-name"),
                               m = s.getElementsByTagNameNS(e.rootElement.automaticStyles, g, "page-layout"), h = 0; h < m.length; h += 1)if (d = m[h], d.getAttributeNS(g, "name") === f)break a
            }
            d = null
        }
        d || (d = s.getDirectChild(e.rootElement.styles, g, "default-page-layout"));
        (d = s.getDirectChild(d, g, "page-layout-properties")) ? ("landscape" === d.getAttributeNS(g, "print-orientation") ? (f = "29.7cm", m = "21.001cm") : (f = "21.001cm", m = "29.7cm"), f = q(d.getAttributeNS(v, "page-width"), f), m = q(d.getAttributeNS(v, "page-height"), m), h = q(d.getAttributeNS(v, "margin")), void 0 ===
            h ? (h = q(d.getAttributeNS(v, "margin-left"), "2cm"), l = q(d.getAttributeNS(v, "margin-right"), "2cm"), p = q(d.getAttributeNS(v, "margin-top"), "2cm"), k = q(d.getAttributeNS(v, "margin-bottom"), "2cm")) : h = l = p = k = h, r = q(d.getAttributeNS(v, "padding")), void 0 === r ? (r = q(d.getAttributeNS(v, "padding-left"), "0cm"), z = q(d.getAttributeNS(v, "padding-right"), "0cm"), t = q(d.getAttributeNS(v, "padding-top"), "0cm"), d = q(d.getAttributeNS(v, "padding-bottom"), "0cm")) : r = z = t = d = r) : (f = q("21.001cm"), m = q("29.7cm"), h = l = p = k = h = q("2cm"), r = z = t = d = r =
            q("0cm"));
        return{width: f - h - l - r - z, height: m - p - k - t - d}
    }
};
(function () {
    var f = odf.Namespaces.stylens, k = odf.Namespaces.textns, d = {graphic: "draw", "drawing-page": "draw", paragraph: "text", presentation: "presentation", ruby: "text", section: "text", table: "table", "table-cell": "table", "table-column": "table", "table-row": "table", text: "text", list: "text", page: "office"};
    odf.StyleTreeNode = function (b) {
        this.derivedStyles = {};
        this.element = b
    };
    odf.StyleTree = function (b, c) {
        function h(b) {
            var e, a, c, d = {};
            if (!b)return d;
            for (b = b.firstElementChild; b;) {
                if (a = b.namespaceURI !== f || "style" !== b.localName &&
                    "default-style" !== b.localName ? b.namespaceURI === k && "list-style" === b.localName ? "list" : b.namespaceURI !== f || "page-layout" !== b.localName && "default-page-layout" !== b.localName ? void 0 : "page" : b.getAttributeNS(f, "family"))(e = b.getAttributeNS(f, "name")) || (e = ""), d.hasOwnProperty(a) ? c = d[a] : d[a] = c = {}, c[e] = b;
                b = b.nextElementSibling
            }
            return d
        }

        function r(b, e) {
            if (b.hasOwnProperty(e))return b[e];
            var a = null, c = Object.keys(b), d;
            for (d = 0; d < c.length && !(a = r(b[c[d]].derivedStyles, e)); d += 1);
            return a
        }

        function l(b, e, a) {
            var c, d,
                h;
            if (!e.hasOwnProperty(b))return null;
            c = new odf.StyleTreeNode(e[b]);
            d = c.element.getAttributeNS(f, "parent-style-name");
            h = null;
            d && (h = r(a, d) || l(d, e, a));
            h ? h.derivedStyles[b] = c : a[b] = c;
            delete e[b];
            return c
        }

        function p(b, e) {
            b && Object.keys(b).forEach(function (a) {
                l(a, b, e)
            })
        }

        var n = {};
        this.getStyleTree = function () {
            return n
        };
        (function () {
            var f, e, a;
            e = h(b);
            a = h(c);
            Object.keys(d).forEach(function (b) {
                f = n[b] = {};
                p(e[b], f);
                p(a[b], f)
            })
        })()
    }
})();
(function () {
    function f(b, c) {
        try {
            b.insertRule(c, b.cssRules.length)
        } catch (d) {
            runtime.log("cannot load rule: " + c + " - " + d)
        }
    }

    function k(b, c) {
        this.listCounterCount = 0;
        this.contentRules = b;
        this.counterIdStack = [];
        this.continuedCounterIdStack = c
    }

    function d(b) {
        function c(a, d, l, k) {
            var r = d.namespaceURI === h && "list" === d.localName, q = d.namespaceURI === h && "list-item" === d.localName;
            if (r || q) {
                if (r) {
                    var r = l += 1, s, x, w;
                    k.listCounterCount += 1;
                    q = a + "-level" + r + "-" + k.listCounterCount;
                    d.setAttributeNS("urn:webodf:names:helper", "counter-id",
                        q);
                    s = k.continuedCounterIdStack.shift();
                    s || (s = q, e += q + " 1 ", x = 'text|list[webodfhelper|counter-id="' + q + '"] > text|list-item:first-child > :not(text|list):first-child:before', x += "{", x += "counter-increment: " + s + " 0;", x += "}", f(b, x));
                    for (; k.counterIdStack.length >= r;)k.counterIdStack.pop();
                    k.counterIdStack.push(s);
                    w = k.contentRules[r.toString()] || "";
                    for (x = 1; x <= r; x += 1)w = w.replace(x + "webodf-listLevel", k.counterIdStack[x - 1]);
                    x = 'text|list[webodfhelper|counter-id="' + q + '"] > text|list-item > :not(text|list):first-child:before';
                    x += "{";
                    x += w;
                    x += "counter-increment: " + s + ";";
                    x += "}";
                    f(b, x)
                }
                for (d = d.firstElementChild; d;)c(a, d, l, k), d = d.nextElementSibling
            } else k.continuedCounterIdStack = []
        }

        var d = 0, e = "", a = {};
        this.createCounterRules = function (b, e, f) {
            var h = e.getAttributeNS(r, "id"), l = [];
            f && (f = f.getAttributeNS("urn:webodf:names:helper", "counter-id"), l = a[f].slice(0));
            b = new k(b, l);
            h ? h = "Y" + h : (d += 1, h = "X" + d);
            c(h, e, 0, b);
            a[h + "-level1-1"] = b.counterIdStack
        };
        this.initialiseCreatedCounters = function () {
            var a;
            a = "office|document{" + ("counter-reset: " + e +
                ";");
            a += "}";
            f(b, a)
        }
    }

    var b = odf.Namespaces.fons, c = odf.Namespaces.stylens, h = odf.Namespaces.textns, r = odf.Namespaces.xmlns, l = {1: "decimal", a: "lower-latin", A: "upper-latin", i: "lower-roman", I: "upper-roman"};
    odf.ListStyleToCss = function () {
        function p(b) {
            var e = m.parseLength(b);
            return e ? a.convert(e.value, e.unit, "px") : (runtime.log("Could not parse value '" + b + "'."), 0)
        }

        function k(a) {
            return a.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
        }

        function q(a, b) {
            var e;
            a && (e = a.getAttributeNS(h, "style-name"));
            return e === b
        }

        function e(a, b, e) {
            b = b.getElementsByTagNameNS(h, "list");
            a = new d(a);
            var f, m, p, x, w, A, G = {}, E;
            for (E = 0; E < b.length; E += 1)if (f = b.item(E), A = f.getAttributeNS(h, "style-name")) {
                p = f.getAttributeNS(h, "continue-numbering");
                x = f.getAttributeNS(h, "continue-list");
                (w = f.getAttributeNS(r, "id")) && (G[w] = f);
                w = e[A].element.firstElementChild;
                for (var F = void 0, H = {}; w;) {
                    var F = (F = w.getAttributeNS(h, "level")) && parseInt(F, 10), N = H, I = w, U = "", B = void 0, Z = void 0, Q = B = void 0;
                    if ("list-level-style-number" === I.localName) {
                        var u = I, U = u.getAttributeNS(c, "num-format"),
                            B = u.getAttributeNS(c, "num-suffix") || "", Z = u.getAttributeNS(c, "num-prefix") || "", Y = "", $ = u.getAttributeNS(h, "level"), u = u.getAttributeNS(h, "display-levels");
                        Z && (Y += '"' + k(Z) + '"\n');
                        if (l.hasOwnProperty(U))for ($ = $ ? parseInt($, 10) : 1, u = u ? parseInt(u, 10) : 1; 0 < u;)Y += " counter(" + ($ - u + 1) + "webodf-listLevel," + l[U] + ")", 1 < u && (Y += '"."'), u -= 1; else Y = U ? Y + (' "' + U + '"') : Y + ' ""';
                        U = "content:" + Y + ' "' + k(B) + '"'
                    } else"list-level-style-image" === I.localName ? U = "content: none" : "list-level-style-bullet" === I.localName && (U = I.getAttributeNS(h,
                        "bullet-char"), U = 'content: "' + k(U) + '"');
                    if (B = I.getElementsByTagNameNS(c, "list-level-properties")[0])Z = B.getAttributeNS(h, "list-level-position-and-space-mode"), "label-alignment" === Z && ((B = B.getElementsByTagNameNS(c, "list-level-label-alignment")[0]) && (Q = B.getAttributeNS(h, "label-followed-by")), "space" === Q && (U += ' "\\a0"'));
                    N[F] = "\n" + U + ";\n";
                    w = w.nextElementSibling
                }
                w = H;
                p && !x && q(m, A) ? a.createCounterRules(w, f, m) : x && q(G[x], A) ? a.createCounterRules(w, f, G[x]) : a.createCounterRules(w, f);
                m = f
            }
            a.initialiseCreatedCounters()
        }

        var a = new core.CSSUnits, m = new odf.OdfUtils;
        this.applyListStyles = function (a, d, m) {
            var l, k;
            (l = d.list) && Object.keys(l).forEach(function (e) {
                k = l[e];
                for (var d = k.element.firstElementChild; d;) {
                    if (d.namespaceURI === h) {
                        for (var m = a, r = d, q = 'text|list[text|style-name="' + e + '"]', n = r.getAttributeNS(h, "level"), z = void 0, t = void 0, N = t = void 0, I = void 0, U = void 0, B = z = void 0, Z = void 0, Q = void 0, u = void 0, I = void 0, N = (t = r.getElementsByTagNameNS(c, "list-level-properties")[0]) && t.getAttributeNS(h, "list-level-position-and-space-mode"),
                                 I = t && t.getElementsByTagNameNS(c, "list-level-label-alignment")[0], z = n = n && parseInt(n, 10); 1 < z;)q += " > text|list-item > text|list", z -= 1;
                        z = t && t.getAttributeNS(b, "text-align") || "left";
                        switch (z) {
                            case "end":
                                z = "right";
                                break;
                            case "start":
                                z = "left"
                        }
                        "label-alignment" === N ? (U = I && I.getAttributeNS(b, "margin-left") || "0px", Q = I && I.getAttributeNS(b, "text-indent") || "0px", u = I && I.getAttributeNS(h, "label-followed-by"), I = p(U)) : (U = t && t.getAttributeNS(h, "space-before") || "0px", B = t && t.getAttributeNS(h, "min-label-width") || "0px",
                            Z = t && t.getAttributeNS(h, "min-label-distance") || "0px", I = p(U) + p(B));
                        t = q + " > text|list-item";
                        t += "{";
                        t += "margin-left: " + I + "px;";
                        t += "}";
                        f(m, t);
                        t = q + " > text|list-item > text|list";
                        t += "{";
                        t += "margin-left: " + -I + "px;";
                        t += "}";
                        f(m, t);
                        t = q + " > text|list-item > :not(text|list):first-child:before";
                        t += "{";
                        t += "text-align: " + z + ";";
                        t += "display: inline-block;";
                        "label-alignment" === N ? (t += "margin-left: " + Q + ";", "listtab" === u && (t += "padding-right: 0.2cm;")) : (t += "min-width: " + B + ";", t += "margin-left: " + (0 === parseFloat(B) ? "" :
                            "-") + B + ";", t += "padding-right: " + Z + ";");
                        t += "}";
                        f(m, t)
                    }
                    d = d.nextElementSibling
                }
            });
            e(a, m, l)
        }
    }
})();
odf.Style2CSS = function () {
    function f(a, b, e) {
        var c = [];
        e = e.derivedStyles;
        var d;
        var g = t[a], h;
        void 0 === g ? b = null : (h = b ? "[" + g + '|style-name="' + b + '"]' : "", "presentation" === g && (g = "draw", h = b ? '[presentation|style-name="' + b + '"]' : ""), b = g + "|" + v[a].join(h + "," + g + "|") + h);
        null !== b && c.push(b);
        for (d in e)e.hasOwnProperty(d) && (b = f(a, d, e[d]), c = c.concat(b));
        return c
    }

    function k(a, b) {
        var e = "", c, d, g;
        for (c = 0; c < b.length; c += 1)if (d = b[c], g = a.getAttributeNS(d[0], d[1])) {
            g = g.trim();
            if (I.hasOwnProperty(d[1])) {
                var f = g.indexOf(" "), h = void 0,
                    m = void 0;
                -1 !== f ? (h = g.substring(0, f), m = g.substring(f)) : (h = g, m = "");
                (h = B.parseLength(h)) && "pt" === h.unit && 0.75 > h.value && (g = "0.75pt" + m)
            }
            d[2] && (e += d[2] + ":" + g + ";")
        }
        return e
    }

    function d(a) {
        return(a = z.getDirectChild(a, q, "text-properties")) ? B.parseFoFontSize(a.getAttributeNS(p, "font-size")) : null
    }

    function b(a, b, e, c) {
        return b + b + e + e + c + c
    }

    function c(a, b) {
        var e = [a], d = b.derivedStyles;
        Object.keys(d).forEach(function (a) {
            a = c(a, d[a]);
            e = e.concat(a)
        });
        return e
    }

    function h(a, b, e, d) {
        function f(b, e) {
            var c = [], d;
            b.forEach(function (a) {
                h.forEach(function (b) {
                    c.push("draw|page[webodfhelper|page-style-name='" +
                        b + "'] draw|frame[presentation|class='" + a + "']")
                })
            });
            0 < c.length && (d = c.join(",") + "{visibility:" + e + ";}", a.insertRule(d, a.cssRules.length))
        }

        var h = c(b, d), m = [], l = [];
        ["page-number", "date-time", "header", "footer"].forEach(function (a) {
            var b;
            b = e.getAttributeNS(g, "display-" + a);
            "true" === b ? m.push(a) : "false" === b && l.push(a)
        });
        f(m, "visible");
        f(l, "hidden")
    }

    function r(e, c, t, I) {
        if ("page" === c) {
            var v = I.element, T = "", L, S;
            S = L = "";
            t = z.getDirectChild(v, q, "page-layout-properties");
            var J;
            if (t)if (J = v.getAttributeNS(q, "name"), T +=
                k(t, H), (L = z.getDirectChild(t, q, "background-image")) && (S = L.getAttributeNS(m, "href")) && (T = T + ("background-image: url('odfkit:" + S + "');") + k(L, s)), "presentation" === Z)for (v = (v = z.getDirectChild(v.parentNode.parentNode, n, "master-styles")) && v.firstElementChild; v;)v.namespaceURI === q && "master-page" === v.localName && v.getAttributeNS(q, "page-layout-name") === J && (S = v.getAttributeNS(q, "name"), L = "draw|page[draw|master-page-name=" + S + "] {" + T + "}", S = "office|body, draw|page[draw|master-page-name=" + S + "] {" + k(t, N) + " }", e.insertRule(L,
                e.cssRules.length), e.insertRule(S, e.cssRules.length)), v = v.nextElementSibling; else"text" === Z && (L = "office|text {" + T + "}", S = "office|body {width: " + t.getAttributeNS(p, "page-width") + ";}", e.insertRule(L, e.cssRules.length), e.insertRule(S, e.cssRules.length))
        } else {
            T = f(c, t, I).join(",");
            J = "";
            if (v = z.getDirectChild(I.element, q, "text-properties")) {
                var O = v, V, aa;
                L = V = "";
                S = 1;
                v = "" + k(O, y);
                aa = O.getAttributeNS(q, "text-underline-style");
                "solid" === aa && (V += " underline");
                aa = O.getAttributeNS(q, "text-line-through-style");
                "solid" ===
                    aa && (V += " line-through");
                V.length && (v += "text-decoration:" + V + ";");
                if (V = O.getAttributeNS(q, "font-name") || O.getAttributeNS(p, "font-family"))aa = U[V], v += "font-family: " + (aa || V) + ";";
                aa = O.parentNode;
                if (O = d(aa)) {
                    for (; aa;) {
                        if (O = d(aa)) {
                            if ("%" !== O.unit) {
                                L = "font-size: " + O.value * S + O.unit + ";";
                                break
                            }
                            S *= O.value / 100
                        }
                        O = aa;
                        V = aa = "";
                        aa = null;
                        "default-style" === O.localName ? aa = null : (aa = O.getAttributeNS(q, "parent-style-name"), V = O.getAttributeNS(q, "family"), aa = Y.getODFElementsWithXPath(Q, aa ? "//style:*[@style:name='" + aa + "'][@style:family='" +
                            V + "']" : "//style:default-style[@style:family='" + V + "']", odf.Namespaces.lookupNamespaceURI)[0])
                    }
                    L || (L = "font-size: " + parseFloat(u) * S + $.getUnits(u) + ";");
                    v += L
                }
                J += v
            }
            if (v = z.getDirectChild(I.element, q, "paragraph-properties"))L = v, v = "" + k(L, x), (S = z.getDirectChild(L, q, "background-image")) && (O = S.getAttributeNS(m, "href")) && (v = v + ("background-image: url('odfkit:" + O + "');") + k(S, s)), (L = L.getAttributeNS(p, "line-height")) && "normal" !== L && (L = B.parseFoLineHeight(L), v = "%" !== L.unit ? v + ("line-height: " + L.value + L.unit + ";") : v +
                ("line-height: " + L.value / 100 + ";")), J += v;
            if (v = z.getDirectChild(I.element, q, "graphic-properties"))O = v, v = "" + k(O, w), L = O.getAttributeNS(l, "opacity"), S = O.getAttributeNS(l, "fill"), O = O.getAttributeNS(l, "fill-color"), "solid" === S || "hatch" === S ? O && "none" !== O ? (L = isNaN(parseFloat(L)) ? 1 : parseFloat(L) / 100, S = O.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, b), (O = (S = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(S)) ? {r: parseInt(S[1], 16), g: parseInt(S[2], 16), b: parseInt(S[3], 16)} : null) && (v += "background-color: rgba(" + O.r +
                "," + O.g + "," + O.b + "," + L + ");")) : v += "background: none;" : "none" === S && (v += "background: none;"), J += v;
            if (v = z.getDirectChild(I.element, q, "drawing-page-properties"))L = v, S = "" + k(L, w), "true" === L.getAttributeNS(g, "background-visible") && (S += "background: none;"), J += S, h(e, t, v, I);
            if (v = z.getDirectChild(I.element, q, "table-cell-properties"))t = J, J = "" + k(v, A), J = t + J;
            if (v = z.getDirectChild(I.element, q, "table-row-properties"))t = J, J = "" + k(v, E), J = t + J;
            if (v = z.getDirectChild(I.element, q, "table-column-properties"))t = J, J = "" + k(v, G),
                J = t + J;
            if (v = z.getDirectChild(I.element, q, "table-properties"))t = J, J = "" + k(v, F), v = v.getAttributeNS(a, "border-model"), "collapsing" === v ? J += "border-collapse:collapse;" : "separating" === v && (J += "border-collapse:separate;"), J = t + J;
            0 !== J.length && e.insertRule(T + "{" + J + "}", e.cssRules.length)
        }
        for (var ba in I.derivedStyles)I.derivedStyles.hasOwnProperty(ba) && r(e, c, ba, I.derivedStyles[ba])
    }

    var l = odf.Namespaces.drawns, p = odf.Namespaces.fons, n = odf.Namespaces.officens, q = odf.Namespaces.stylens, e = odf.Namespaces.svgns, a = odf.Namespaces.tablens,
        m = odf.Namespaces.xlinkns, g = odf.Namespaces.presentationns, z = new core.DomUtils, t = {graphic: "draw", "drawing-page": "draw", paragraph: "text", presentation: "presentation", ruby: "text", section: "text", table: "table", "table-cell": "table", "table-column": "table", "table-row": "table", text: "text", list: "text", page: "office"}, v = {graphic: "circle connected control custom-shape ellipse frame g line measure page page-thumbnail path polygon polyline rect regular-polygon".split(" "), paragraph: "alphabetical-index-entry-template h illustration-index-entry-template index-source-style object-index-entry-template p table-index-entry-template table-of-content-entry-template user-index-entry-template".split(" "),
            presentation: "caption circle connector control custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "), "drawing-page": "caption circle connector control page custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "), ruby: ["ruby", "ruby-text"], section: "alphabetical-index bibliography illustration-index index-title object-index section table-of-content table-index user-index".split(" "), table: ["background",
                "table"], "table-cell": "body covered-table-cell even-columns even-rows first-column first-row last-column last-row odd-columns odd-rows table-cell".split(" "), "table-column": ["table-column"], "table-row": ["table-row"], text: "a index-entry-chapter index-entry-link-end index-entry-link-start index-entry-page-number index-entry-span index-entry-tab-stop index-entry-text index-title-template linenumbering-configuration list-level-style-number list-level-style-bullet outline-level-style span".split(" "),
            list: ["list-item"]}, y = [
            [p, "color", "color"],
            [p, "background-color", "background-color"],
            [p, "font-weight", "font-weight"],
            [p, "font-style", "font-style"]
        ], s = [
            [q, "repeat", "background-repeat"]
        ], x = [
            [p, "background-color", "background-color"],
            [p, "text-align", "text-align"],
            [p, "text-indent", "text-indent"],
            [p, "padding", "padding"],
            [p, "padding-left", "padding-left"],
            [p, "padding-right", "padding-right"],
            [p, "padding-top", "padding-top"],
            [p, "padding-bottom", "padding-bottom"],
            [p, "border-left", "border-left"],
            [p, "border-right",
                "border-right"],
            [p, "border-top", "border-top"],
            [p, "border-bottom", "border-bottom"],
            [p, "margin", "margin"],
            [p, "margin-left", "margin-left"],
            [p, "margin-right", "margin-right"],
            [p, "margin-top", "margin-top"],
            [p, "margin-bottom", "margin-bottom"],
            [p, "border", "border"]
        ], w = [
            [p, "background-color", "background-color"],
            [p, "min-height", "min-height"],
            [l, "stroke", "border"],
            [e, "stroke-color", "border-color"],
            [e, "stroke-width", "border-width"],
            [p, "border", "border"],
            [p, "border-left", "border-left"],
            [p, "border-right", "border-right"],
            [p, "border-top", "border-top"],
            [p, "border-bottom", "border-bottom"]
        ], A = [
            [p, "background-color", "background-color"],
            [p, "border-left", "border-left"],
            [p, "border-right", "border-right"],
            [p, "border-top", "border-top"],
            [p, "border-bottom", "border-bottom"],
            [p, "border", "border"]
        ], G = [
            [q, "column-width", "width"]
        ], E = [
            [q, "row-height", "height"],
            [p, "keep-together", null]
        ], F = [
            [q, "width", "width"],
            [p, "margin-left", "margin-left"],
            [p, "margin-right", "margin-right"],
            [p, "margin-top", "margin-top"],
            [p, "margin-bottom", "margin-bottom"]
        ],
        H = [
            [p, "background-color", "background-color"],
            [p, "padding", "padding"],
            [p, "padding-left", "padding-left"],
            [p, "padding-right", "padding-right"],
            [p, "padding-top", "padding-top"],
            [p, "padding-bottom", "padding-bottom"],
            [p, "border", "border"],
            [p, "border-left", "border-left"],
            [p, "border-right", "border-right"],
            [p, "border-top", "border-top"],
            [p, "border-bottom", "border-bottom"],
            [p, "margin", "margin"],
            [p, "margin-left", "margin-left"],
            [p, "margin-right", "margin-right"],
            [p, "margin-top", "margin-top"],
            [p, "margin-bottom", "margin-bottom"]
        ],
        N = [
            [p, "page-width", "width"],
            [p, "page-height", "height"]
        ], I = {border: !0, "border-left": !0, "border-right": !0, "border-top": !0, "border-bottom": !0, "stroke-width": !0}, U = {}, B = new odf.OdfUtils, Z, Q, u, Y = xmldom.XPath, $ = new core.CSSUnits;
    this.style2css = function (a, b, e, c, d) {
        function g(a, b) {
            f = "@namespace " + a + " url(" + b + ");";
            try {
                e.insertRule(f, e.cssRules.length)
            } catch (c) {
            }
        }

        var f, h, m;
        for (Q = b; e.cssRules.length;)e.deleteRule(e.cssRules.length - 1);
        odf.Namespaces.forEachPrefix(g);
        g("webodfhelper", "urn:webodf:names:helper");
        U = c;
        Z = a;
        u = runtime.getWindow().getComputedStyle(document.body, null).getPropertyValue("font-size") || "12pt";
        for (m in t)if (t.hasOwnProperty(m))for (h in a = d[m], a)a.hasOwnProperty(h) && r(e, m, h, a[h])
    }
};
(function () {
    function f(k, d) {
        var b = this;
        this.getDistance = function (c) {
            var d = b.x - c.x;
            c = b.y - c.y;
            return Math.sqrt(d * d + c * c)
        };
        this.getCenter = function (c) {
            return new f((b.x + c.x) / 2, (b.y + c.y) / 2)
        };
        b.x = k;
        b.y = d
    }

    gui.ZoomHelper = function () {
        function k(b, e, c, d) {
            b = d ? "translate3d(" + b + "px, " + e + "px, 0) scale3d(" + c + ", " + c + ", 1)" : "translate(" + b + "px, " + e + "px) scale(" + c + ")";
            a.style.WebkitTransform = b;
            a.style.MozTransform = b;
            a.style.msTransform = b;
            a.style.OTransform = b;
            a.style.transform = b
        }

        function d(a) {
            a ? k(-m.x, -m.y, t, !0) : (k(0,
                0, t, !0), k(0, 0, t, !1))
        }

        function b(a) {
            if (s && E) {
                var b = s.style.overflow, e = s.classList.contains("webodf-customScrollbars");
                a && e || !a && !e || (a ? (s.classList.add("webodf-customScrollbars"), s.style.overflow = "hidden", runtime.requestAnimationFrame(function () {
                    s.style.overflow = b
                })) : s.classList.remove("webodf-customScrollbars"))
            }
        }

        function c() {
            k(-m.x, -m.y, t, !0);
            s.scrollLeft = 0;
            s.scrollTop = 0;
            F = x.style.overflow;
            x.style.overflow = "visible";
            b(!1)
        }

        function h() {
            k(0, 0, t, !0);
            s.scrollLeft = m.x;
            s.scrollTop = m.y;
            x.style.overflow =
                F || "";
            b(!0)
        }

        function r(b) {
            return new f(b.pageX - a.offsetLeft, b.pageY - a.offsetTop)
        }

        function l(b) {
            g && (m.x -= b.x - g.x, m.y -= b.y - g.y, m = new f(Math.min(Math.max(m.x, a.offsetLeft), (a.offsetLeft + a.offsetWidth) * t - s.clientWidth), Math.min(Math.max(m.y, a.offsetTop), (a.offsetTop + a.offsetHeight) * t - s.clientHeight)));
            g = b
        }

        function p(a) {
            var b = a.touches.length, e = 0 < b ? r(a.touches[0]) : null;
            a = 1 < b ? r(a.touches[1]) : null;
            e && a ? (z = e.getDistance(a), v = t, g = e.getCenter(a), c(), G = A.PINCH) : e && (g = e, G = A.SCROLL)
        }

        function n(b) {
            var e = b.touches.length,
                g = 0 < e ? r(b.touches[0]) : null, e = 1 < e ? r(b.touches[1]) : null;
            if (g && e)if (b.preventDefault(), G === A.SCROLL)G = A.PINCH, c(), z = g.getDistance(e); else {
                b = g.getCenter(e);
                g = g.getDistance(e) / z;
                l(b);
                var e = t, f = Math.min(y, a.offsetParent.clientWidth / a.offsetWidth);
                t = v * g;
                t = Math.min(Math.max(t, f), y);
                g = t / e;
                m.x += (g - 1) * (b.x + m.x);
                m.y += (g - 1) * (b.y + m.y);
                d(!0)
            } else g && (G === A.PINCH ? (G = A.SCROLL, h()) : l(g))
        }

        function q() {
            G === A.PINCH && (w.emit(gui.ZoomHelper.signalZoomChanged, t), h(), d(!1));
            G = A.NONE
        }

        function e() {
            s && (s.removeEventListener("touchstart",
                p, !1), s.removeEventListener("touchmove", n, !1), s.removeEventListener("touchend", q, !1))
        }

        var a, m, g, z, t, v, y = 4, s, x, w = new core.EventNotifier([gui.ZoomHelper.signalZoomChanged]), A = {NONE: 0, SCROLL: 1, PINCH: 2}, G = A.NONE, E = runtime.getWindow().hasOwnProperty("ontouchstart"), F = "";
        this.subscribe = function (a, b) {
            w.subscribe(a, b)
        };
        this.unsubscribe = function (a, b) {
            w.unsubscribe(a, b)
        };
        this.getZoomLevel = function () {
            return t
        };
        this.setZoomLevel = function (b) {
            a && (t = b, d(!1), w.emit(gui.ZoomHelper.signalZoomChanged, t))
        };
        this.destroy =
            function (a) {
                e();
                b(!1);
                a()
            };
        this.setZoomableElement = function (c) {
            e();
            a = c;
            s = a.offsetParent;
            x = a.parentNode;
            d(!1);
            s && (s.addEventListener("touchstart", p, !1), s.addEventListener("touchmove", n, !1), s.addEventListener("touchend", q, !1));
            b(!0)
        };
        v = t = 1;
        m = new f(0, 0)
    };
    gui.ZoomHelper.signalZoomChanged = "zoomChanged"
})();
ops.Canvas = function () {
};
ops.Canvas.prototype.getZoomLevel = function () {
};
ops.Canvas.prototype.getElement = function () {
};
ops.Canvas.prototype.getSizer = function () {
};
ops.Canvas.prototype.getZoomHelper = function () {
};
(function () {
    function f() {
        function a(c) {
            e = !0;
            runtime.setTimeout(function () {
                try {
                    c()
                } catch (d) {
                    runtime.log(String(d) + "\n" + d.stack)
                }
                e = !1;
                0 < b.length && a(b.pop())
            }, 10)
        }

        var b = [], e = !1;
        this.clearQueue = function () {
            b.length = 0
        };
        this.addToQueue = function (c) {
            if (0 === b.length && !e)return a(c);
            b.push(c)
        }
    }

    function k(a) {
        function b() {
            for (; 0 < e.cssRules.length;)e.deleteRule(0);
            e.insertRule("#shadowContent draw|page {display:none;}", 0);
            e.insertRule("office|presentation draw|page {display:none;}", 1);
            e.insertRule("#shadowContent draw|page:nth-of-type(" +
                c + ") {display:block;}", 2);
            e.insertRule("office|presentation draw|page:nth-of-type(" + c + ") {display:block;}", 3)
        }

        var e = a.sheet, c = 1;
        this.showFirstPage = function () {
            c = 1;
            b()
        };
        this.showNextPage = function () {
            c += 1;
            b()
        };
        this.showPreviousPage = function () {
            1 < c && (c -= 1, b())
        };
        this.showPage = function (a) {
            0 < a && (c = a, b())
        };
        this.css = a;
        this.destroy = function (b) {
            a.parentNode.removeChild(a);
            b()
        }
    }

    function d(a) {
        for (; a.firstChild;)a.removeChild(a.firstChild)
    }

    function b(a) {
        a = a.sheet;
        for (var b = a.cssRules; b.length;)a.deleteRule(b.length -
            1)
    }

    function c(a, b, e) {
        var c = new odf.Style2CSS, d = new odf.ListStyleToCss;
        e = e.sheet;
        var g = (new odf.StyleTree(a.rootElement.styles, a.rootElement.automaticStyles)).getStyleTree();
        c.style2css(a.getDocumentType(), a.rootElement, e, b.getFontMap(), g);
        d.applyListStyles(e, g, a.rootElement.body)
    }

    function h(a, b) {
        (new odf.FontLoader).loadFonts(a, b.sheet)
    }

    function r(a, b, e) {
        var c = null;
        a = a.rootElement.body.getElementsByTagNameNS(H, e + "-decl");
        e = b.getAttributeNS(H, "use-" + e + "-name");
        var d;
        if (e && 0 < a.length)for (b = 0; b < a.length; b +=
            1)if (d = a[b], d.getAttributeNS(H, "name") === e) {
            c = d.textContent;
            break
        }
        return c
    }

    function l(a, b, e, c) {
        var g = a.ownerDocument;
        b = a.getElementsByTagNameNS(b, e);
        for (a = 0; a < b.length; a += 1)d(b[a]), c && (e = b[a], e.appendChild(g.createTextNode(c)))
    }

    function p(a, b, e) {
        b.setAttributeNS("urn:webodf:names:helper", "styleid", a);
        var c, d = b.getAttributeNS(E, "anchor-type"), g = b.getAttributeNS(A, "x"), f = b.getAttributeNS(A, "y"), h = b.getAttributeNS(A, "width"), m = b.getAttributeNS(A, "height"), l = b.getAttributeNS(s, "min-height"), k = b.getAttributeNS(s,
            "min-width");
        if ("as-char" === d)c = "display: inline-block;"; else if (d || g || f)c = "position: absolute;"; else if (h || m || l || k)c = "display: block;";
        g && (c += "left: " + g + ";");
        f && (c += "top: " + f + ";");
        h && (c += "width: " + h + ";");
        m && (c += "height: " + m + ";");
        l && (c += "min-height: " + l + ";");
        k && (c += "min-width: " + k + ";");
        c && (c = "draw|" + b.localName + '[webodfhelper|styleid="' + a + '"] {' + c + "}", e.insertRule(c, e.cssRules.length))
    }

    function n(a) {
        for (a = a.firstChild; a;) {
            if (a.namespaceURI === x && "binary-data" === a.localName)return"data:image/png;base64," +
                a.textContent.replace(/[\r\n\s]/g, "");
            a = a.nextSibling
        }
        return""
    }

    function q(a, b, e, c) {
        function d(b) {
            b && (b = 'draw|image[webodfhelper|styleid="' + a + '"] {' + ("background-image: url(" + b + ");") + "}", c.insertRule(b, c.cssRules.length))
        }

        function g(a) {
            d(a.url)
        }

        e.setAttributeNS("urn:webodf:names:helper", "styleid", a);
        var f = e.getAttributeNS(F, "href"), h;
        if (f)try {
            h = b.getPart(f), h.onchange = g, h.load()
        } catch (m) {
            runtime.log("slight problem: " + String(m))
        } else f = n(e), d(f)
    }

    function e(a) {
        var b = a.ownerDocument;
        I.getElementsByTagNameNS(a,
            E, "line-break").forEach(function (a) {
                a.hasChildNodes() || a.appendChild(b.createElement("br"))
            })
    }

    function a(a) {
        var b = a.ownerDocument;
        I.getElementsByTagNameNS(a, E, "s").forEach(function (a) {
            for (var e, c; a.firstChild;)a.removeChild(a.firstChild);
            a.appendChild(b.createTextNode(" "));
            c = parseInt(a.getAttributeNS(E, "c"), 10);
            if (1 < c)for (a.removeAttributeNS(E, "c"), e = 1; e < c; e += 1)a.parentNode.insertBefore(a.cloneNode(!0), a)
        })
    }

    function m(a) {
        I.getElementsByTagNameNS(a, E, "tab").forEach(function (a) {
            a.textContent = "\t"
        })
    }

    function g(a, b) {
        function e(a, c) {
            var f = h.documentElement.namespaceURI;
            "video/" === c.substr(0, 6) ? (d = h.createElementNS(f, "video"), d.setAttribute("controls", "controls"), g = h.createElementNS(f, "source"), a && g.setAttribute("src", a), g.setAttribute("type", c), d.appendChild(g), b.parentNode.appendChild(d)) : b.innerHtml = "Unrecognised Plugin"
        }

        function c(a) {
            e(a.url, a.mimetype)
        }

        var d, g, f, h = b.ownerDocument, m;
        if (f = b.getAttributeNS(F, "href"))try {
            m = a.getPart(f), m.onchange = c, m.load()
        } catch (l) {
            runtime.log("slight problem: " +
                String(l))
        } else runtime.log("using MP4 data fallback"), f = n(b), e(f, "video/mp4")
    }

    function z(a) {
        var b = a.getElementsByTagName("head")[0], e, c;
        e = a.styleSheets.length;
        for (c = b.firstElementChild; c && ("style" !== c.localName || !c.hasAttribute("webodfcss"));)c = c.nextElementSibling;
        if (c)return e = parseInt(c.getAttribute("webodfcss"), 10), c.setAttribute("webodfcss", e + 1), c;
        "string" === String(typeof webodf_css) ? e = webodf_css : (c = "webodf.css", runtime.currentDirectory && (c = runtime.currentDirectory(), 0 < c.length && "/" !== c.substr(-1) &&
            (c += "/"), c += "../webodf.css"), e = runtime.readFileSync(c, "utf-8"));
        c = a.createElementNS(b.namespaceURI, "style");
        c.setAttribute("media", "screen, print, handheld, projection");
        c.setAttribute("type", "text/css");
        c.setAttribute("webodfcss", "1");
        c.appendChild(a.createTextNode(e));
        b.appendChild(c);
        return c
    }

    function t(a) {
        var b = parseInt(a.getAttribute("webodfcss"), 10);
        1 === b ? a.parentNode.removeChild(a) : a.setAttribute("count", b - 1)
    }

    function v(a) {
        var b = a.getElementsByTagName("head")[0], e = a.createElementNS(b.namespaceURI,
            "style"), c = "";
        e.setAttribute("type", "text/css");
        e.setAttribute("media", "screen, print, handheld, projection");
        odf.Namespaces.forEachPrefix(function (a, b) {
            c += "@namespace " + a + " url(" + b + ");\n"
        });
        c += "@namespace webodfhelper url(urn:webodf:names:helper);\n";
        e.appendChild(a.createTextNode(c));
        b.appendChild(e);
        return e
    }

    var y = odf.Namespaces.drawns, s = odf.Namespaces.fons, x = odf.Namespaces.officens, w = odf.Namespaces.stylens, A = odf.Namespaces.svgns, G = odf.Namespaces.tablens, E = odf.Namespaces.textns, F = odf.Namespaces.xlinkns,
        H = odf.Namespaces.presentationns, N = xmldom.XPath, I = new core.DomUtils;
    odf.OdfCanvas = function (n) {
        function s(a, b, e) {
            function c(a, b, e, d) {
                ja.addToQueue(function () {
                    q(a, b, e, d)
                })
            }

            var d, g;
            d = b.getElementsByTagNameNS(y, "image");
            for (b = 0; b < d.length; b += 1)g = d.item(b), c("image" + String(b), a, g, e)
        }

        function F(a, b) {
            function e(a, b) {
                ja.addToQueue(function () {
                    g(a, b)
                })
            }

            var c, d, f;
            d = b.getElementsByTagNameNS(y, "plugin");
            for (c = 0; c < d.length; c += 1)f = d.item(c), e(a, f)
        }

        function A() {
            var a;
            a = L.firstChild;
            var b = da.getZoomLevel();
            a && (L.style.WebkitTransformOrigin =
                "0% 0%", L.style.MozTransformOrigin = "0% 0%", L.style.msTransformOrigin = "0% 0%", L.style.OTransformOrigin = "0% 0%", L.style.transformOrigin = "0% 0%", V && ((a = V.getMinimumHeightForAnnotationPane()) ? L.style.minHeight = a : L.style.removeProperty("min-height")), n.style.width = Math.round(b * L.offsetWidth) + "px", n.style.height = Math.round(b * L.offsetHeight) + "px", n.style.display = "inline-block")
        }

        function u(b, c) {
            var g = ha.sheet;
            d(n);
            L = P.createElementNS(n.namespaceURI, "div");
            L.style.display = "inline-block";
            L.style.background =
                "white";
            L.style.setProperty("float", "left", "important");
            L.appendChild(c);
            n.appendChild(L);
            S = P.createElementNS(n.namespaceURI, "div");
            S.id = "annotationsPane";
            ga = P.createElementNS(n.namespaceURI, "div");
            ga.id = "shadowContent";
            ga.style.position = "absolute";
            ga.style.top = 0;
            ga.style.left = 0;
            b.getContentElement().appendChild(ga);
            var f = c.body, h, k = [], q;
            for (h = f.firstElementChild; h && h !== f;)if (h.namespaceURI === y && (k[k.length] = h), h.firstElementChild)h = h.firstElementChild; else {
                for (; h && h !== f && !h.nextElementSibling;)h =
                    h.parentNode;
                h && h.nextElementSibling && (h = h.nextElementSibling)
            }
            for (q = 0; q < k.length; q += 1)h = k[q], p("frame" + String(q), h, g);
            k = N.getODFElementsWithXPath(f, ".//*[*[@text:anchor-type='paragraph']]", odf.Namespaces.lookupNamespaceURI);
            for (h = 0; h < k.length; h += 1)f = k[h], f.setAttributeNS && f.setAttributeNS("urn:webodf:names:helper", "containsparagraphanchor", !0);
            f = C;
            h = ga;
            var z, t, v, u, A = 0, Q;
            q = b.rootElement.ownerDocument;
            if ((k = c.body.firstElementChild) && k.namespaceURI === x && ("presentation" === k.localName || "drawing" === k.localName))for (k =
                                                                                                                                                 k.firstElementChild; k;) {
                if (z = (z = k.getAttributeNS(y, "master-page-name")) ? f.getMasterPageElement(z) : null) {
                    t = k.getAttributeNS("urn:webodf:names:helper", "styleid");
                    v = q.createElementNS(y, "draw:page");
                    Q = z.firstElementChild;
                    for (A = 0; Q;)"true" !== Q.getAttributeNS(H, "placeholder") && (u = Q.cloneNode(!0), v.appendChild(u)), Q = Q.nextElementSibling, A += 1;
                    Q = u = A = void 0;
                    for (var J = I.getElementsByTagNameNS(v, y, "frame"), A = 0; A < J.length; A += 1)u = J[A], (Q = u.getAttributeNS(H, "class")) && !/^(date-time|footer|header|page-number)$/.test(Q) &&
                        u.parentNode.removeChild(u);
                    u = v.getElementsByTagNameNS(y, "*");
                    for (A = 0; A < u.length; A += 1)p(t + "_" + A, u[A], g);
                    h.appendChild(v);
                    A = String(h.getElementsByTagNameNS(y, "page").length);
                    l(v, E, "page-number", A);
                    l(v, H, "header", r(b, k, "header"));
                    l(v, H, "footer", r(b, k, "footer"));
                    p(t, v, g);
                    v.setAttributeNS("urn:webodf:names:helper", "page-style-name", k.getAttributeNS(y, "style-name"));
                    v.setAttributeNS(y, "draw:master-page-name", z.getAttributeNS(w, "name"))
                }
                k = k.nextElementSibling
            }
            f = n.namespaceURI;
            k = c.body.getElementsByTagNameNS(G,
                "table-cell");
            for (h = 0; h < k.length; h += 1)q = k.item(h), q.hasAttributeNS(G, "number-columns-spanned") && q.setAttributeNS(f, "colspan", q.getAttributeNS(G, "number-columns-spanned")), q.hasAttributeNS(G, "number-rows-spanned") && q.setAttributeNS(f, "rowspan", q.getAttributeNS(G, "number-rows-spanned"));
            e(c.body);
            a(c.body);
            m(c.body);
            s(b, c.body, g);
            F(b, c.body);
            L.insertBefore(ga, L.firstChild);
            da.setZoomableElement(L)
        }

        function Y(a) {
            J ? (S.parentNode || L.appendChild(S), V && V.forgetAnnotations(), V = new gui.AnnotationViewManager(D,
                a.body, S, O), I.getElementsByTagNameNS(a.body, x, "annotation").forEach(V.addAnnotation), V.rerenderAnnotations(), A()) : S.parentNode && (L.removeChild(S), V.forgetAnnotations(), A())
        }

        function $(a) {
            function e() {
                b(ba);
                b(R);
                b(ha);
                d(n);
                n.style.display = "inline-block";
                var g = X.rootElement;
                n.ownerDocument.importNode(g, !0);
                C.setOdfContainer(X);
                h(X, ba);
                c(X, C, R);
                u(X, g);
                Y(g);
                a || ja.addToQueue(function () {
                    var a = [X];
                    if (ca.hasOwnProperty("statereadychange")) {
                        var b = ca.statereadychange, e;
                        for (e = 0; e < b.length; e += 1)b[e].apply(null,
                            a)
                    }
                })
            }

            X.state === odf.OdfContainer.DONE ? e() : (runtime.log("WARNING: refreshOdf called but ODF was not DONE."), fa = runtime.setTimeout(function ma() {
                X.state === odf.OdfContainer.DONE ? e() : (runtime.log("will be back later..."), fa = runtime.setTimeout(ma, 500))
            }, 100))
        }

        function ea(a) {
            ja.clearQueue();
            n.innerHTML = runtime.tr("Loading") + " " + a + "...";
            n.removeAttribute("style");
            X = new odf.OdfContainer(a, function (a) {
                X = a;
                $(!1)
            })
        }

        runtime.assert(null !== n && void 0 !== n, "odf.OdfCanvas constructor needs DOM element");
        runtime.assert(null !==
            n.ownerDocument && void 0 !== n.ownerDocument, "odf.OdfCanvas constructor needs DOM");
        var D = this, P = n.ownerDocument, X, C = new odf.Formatting, T, L = null, S = null, J = !1, O = !1, V = null, aa, ba, R, ha, ga, ca = {}, fa, na, la = !1, ia = !1, ja = new f, da = new gui.ZoomHelper;
        this.refreshCSS = function () {
            la = !0;
            na.trigger()
        };
        this.refreshSize = function () {
            na.trigger()
        };
        this.odfContainer = function () {
            return X
        };
        this.setOdfContainer = function (a, b) {
            X = a;
            $(!0 === b)
        };
        this.load = this.load = ea;
        this.save = function (a) {
            X.save(a)
        };
        this.addListener = function (a, b) {
            switch (a) {
                case "click":
                    var e =
                        n, c = a;
                    e.addEventListener ? e.addEventListener(c, b, !1) : e.attachEvent ? e.attachEvent("on" + c, b) : e["on" + c] = b;
                    break;
                default:
                    e = ca.hasOwnProperty(a) ? ca[a] : ca[a] = [], b && -1 === e.indexOf(b) && e.push(b)
            }
        };
        this.getFormatting = function () {
            return C
        };
        this.getAnnotationViewManager = function () {
            return V
        };
        this.refreshAnnotations = function () {
            Y(X.rootElement)
        };
        this.rerenderAnnotations = function () {
            V && (ia = !0, na.trigger())
        };
        this.getSizer = function () {
            return L
        };
        this.enableAnnotations = function (a, b) {
            a !== J && (J = a, O = b, X && Y(X.rootElement))
        };
        this.addAnnotation = function (a) {
            V && (V.addAnnotation(a), A())
        };
        this.forgetAnnotations = function () {
            V && (V.forgetAnnotations(), A())
        };
        this.getZoomHelper = function () {
            return da
        };
        this.setZoomLevel = function (a) {
            da.setZoomLevel(a)
        };
        this.getZoomLevel = function () {
            return da.getZoomLevel()
        };
        this.fitToContainingElement = function (a, b) {
            var e = da.getZoomLevel(), c = n.offsetHeight / e, e = a / (n.offsetWidth / e);
            b / c < e && (e = b / c);
            da.setZoomLevel(e)
        };
        this.fitToWidth = function (a) {
            var b = n.offsetWidth / da.getZoomLevel();
            da.setZoomLevel(a / b)
        };
        this.fitSmart = function (a, b) {
            var e, c;
            c = da.getZoomLevel();
            e = n.offsetWidth / c;
            c = n.offsetHeight / c;
            e = a / e;
            void 0 !== b && b / c < e && (e = b / c);
            da.setZoomLevel(Math.min(1, e))
        };
        this.fitToHeight = function (a) {
            var b = n.offsetHeight / da.getZoomLevel();
            da.setZoomLevel(a / b)
        };
        this.showFirstPage = function () {
            T.showFirstPage()
        };
        this.showNextPage = function () {
            T.showNextPage()
        };
        this.showPreviousPage = function () {
            T.showPreviousPage()
        };
        this.showPage = function (a) {
            T.showPage(a);
            A()
        };
        this.getElement = function () {
            return n
        };
        this.addCssForFrameWithImage =
            function (a) {
                var b = a.getAttributeNS(y, "name"), e = a.firstElementChild;
                p(b, a, ha.sheet);
                e && q(b + "img", X, e, ha.sheet)
            };
        this.destroy = function (a) {
            var b = P.getElementsByTagName("head")[0], e = [T.destroy, na.destroy];
            runtime.clearTimeout(fa);
            S && S.parentNode && S.parentNode.removeChild(S);
            da.destroy(function () {
                L && (n.removeChild(L), L = null)
            });
            t(aa);
            b.removeChild(ba);
            b.removeChild(R);
            b.removeChild(ha);
            core.Async.destroyAll(e, a)
        };
        aa = z(P);
        T = new k(v(P));
        ba = v(P);
        R = v(P);
        ha = v(P);
        na = core.Task.createRedrawTask(function () {
            la &&
            (c(X, C, R), la = !1);
            ia && (V && V.rerenderAnnotations(), ia = !1);
            A()
        });
        da.subscribe(gui.ZoomHelper.signalZoomChanged, A)
    }
})();
odf.StepUtils = function () {
    this.getContentBounds = function (f) {
        var k = f.container(), d, b;
        runtime.assert(f.isStep(), "Step iterator must be on a step");
        k.nodeType === Node.TEXT_NODE && 0 < f.offset() ? d = f.offset() : (k = f.leftNode()) && k.nodeType === Node.TEXT_NODE && (d = k.length);
        k && (k.nodeType === Node.TEXT_NODE ? (runtime.assert(0 < d, "Empty text node found"), b = {container: k, startOffset: d - 1, endOffset: d}) : b = {container: k, startOffset: 0, endOffset: k.childNodes.length});
        return b
    }
};
ops.MemberProperties = function () {
};
ops.Member = function (f, k) {
    var d = new ops.MemberProperties;
    this.getMemberId = function () {
        return f
    };
    this.getProperties = function () {
        return d
    };
    this.setProperties = function (b) {
        Object.keys(b).forEach(function (c) {
            d[c] = b[c]
        })
    };
    this.removeProperties = function (b) {
        Object.keys(b).forEach(function (b) {
            "fullName" !== b && "color" !== b && "imageUrl" !== b && d.hasOwnProperty(b) && delete d[b]
        })
    };
    runtime.assert(Boolean(f), "No memberId was supplied!");
    k.fullName || (k.fullName = runtime.tr("Unknown Author"));
    k.color || (k.color = "black");
    k.imageUrl ||
    (k.imageUrl = "avatar-joe.png");
    d = k
};
gui.SelectionMover = function (f, k) {
    function d() {
        q.setUnfilteredPosition(f.getNode(), 0);
        return q
    }

    function b(a, b) {
        var e, c = null;
        a && 0 < a.length && (e = b ? a.item(a.length - 1) : a.item(0));
        e && (c = {top: e.top, left: b ? e.right : e.left, bottom: e.bottom});
        return c
    }

    function c(a, e, d, f) {
        var h = a.nodeType;
        d.setStart(a, e);
        d.collapse(!f);
        f = b(d.getClientRects(), !0 === f);
        !f && 0 < e && (d.setStart(a, e - 1), d.setEnd(a, e), f = b(d.getClientRects(), !0));
        f || (h === Node.ELEMENT_NODE && 0 < e && a.childNodes.length >= e ? f = c(a, e - 1, d, !0) : a.nodeType === Node.TEXT_NODE &&
            0 < e ? f = c(a, e - 1, d, !0) : a.previousSibling ? f = c(a.previousSibling, a.previousSibling.nodeType === Node.TEXT_NODE ? a.previousSibling.textContent.length : a.previousSibling.childNodes.length, d, !0) : a.parentNode && a.parentNode !== k ? f = c(a.parentNode, 0, d, !1) : (d.selectNode(k), f = b(d.getClientRects(), !1)));
        runtime.assert(Boolean(f), "No visible rectangle found");
        return f
    }

    function h(a, b, c) {
        for (var f = d(), h = new core.LoopWatchDog(1E4), l = 0, k = 0; 0 < a && f.nextPosition();)h.check(), c.acceptPosition(f) === e && (l += 1, b.acceptPosition(f) ===
            e && (k += l, l = 0, a -= 1));
        return k
    }

    function r(a, b, c) {
        for (var f = d(), h = new core.LoopWatchDog(1E4), l = 0, k = 0; 0 < a && f.previousPosition();)h.check(), c.acceptPosition(f) === e && (l += 1, b.acceptPosition(f) === e && (k += l, l = 0, a -= 1));
        return k
    }

    function l(a, b) {
        var g = d(), f = 0, h = 0, l = 0 > a ? -1 : 1;
        for (a = Math.abs(a); 0 < a;) {
            for (var p = b, q = l, n = g, r = n.container(), A = 0, G = null, E = void 0, F = 10, H = void 0, N = 0, I = void 0, U = void 0, B = void 0, H = void 0, Z = k.ownerDocument.createRange(), Q = new core.LoopWatchDog(1E4), H = c(r, n.unfilteredDomOffset(), Z), I = H.top, U = H.left,
                     B = I; !0 === (0 > q ? n.previousPosition() : n.nextPosition());)if (Q.check(), p.acceptPosition(n) === e && (A += 1, r = n.container(), H = c(r, n.unfilteredDomOffset(), Z), H.top !== I)) {
                if (H.top !== B && B !== I)break;
                B = H.top;
                H = Math.abs(U - H.left);
                if (null === G || H < F)G = r, E = n.unfilteredDomOffset(), F = H, N = A
            }
            null !== G ? (n.setUnfilteredPosition(G, E), A = N) : A = 0;
            Z.detach();
            f += A;
            if (0 === f)break;
            h += f;
            a -= 1
        }
        return h * l
    }

    function p(a, b) {
        var g, f, h, l, p = d(), q = n.getParagraphElement(p.getCurrentNode()), r = 0, w = k.ownerDocument.createRange();
        0 > a ? (g = p.previousPosition,
            f = -1) : (g = p.nextPosition, f = 1);
        for (h = c(p.container(), p.unfilteredDomOffset(), w); g.call(p);)if (b.acceptPosition(p) === e) {
            if (n.getParagraphElement(p.getCurrentNode()) !== q)break;
            l = c(p.container(), p.unfilteredDomOffset(), w);
            if (l.bottom !== h.bottom && (h = l.top >= h.top && l.bottom < h.bottom || l.top <= h.top && l.bottom > h.bottom, !h))break;
            r += f;
            h = l
        }
        w.detach();
        return r
    }

    var n = new odf.OdfUtils, q, e = core.PositionFilter.FilterResult.FILTER_ACCEPT;
    this.getStepCounter = function () {
        return{convertForwardStepsBetweenFilters: h, convertBackwardStepsBetweenFilters: r,
            countLinesSteps: l, countStepsToLineBoundary: p}
    };
    (function () {
        q = gui.SelectionMover.createPositionIterator(k);
        var a = k.ownerDocument.createRange();
        a.setStart(q.container(), q.unfilteredDomOffset());
        a.collapse(!0);
        f.setSelectedRange(a)
    })()
};
gui.SelectionMover.createPositionIterator = function (f) {
    var k = new function () {
        this.acceptNode = function (d) {
            return d && "urn:webodf:names:cursor" !== d.namespaceURI && "urn:webodf:names:editinfo" !== d.namespaceURI ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        }
    };
    return new core.PositionIterator(f, 5, k, !1)
};
ops.Document = function () {
};
ops.Document.prototype.getMemberIds = function () {
};
ops.Document.prototype.removeCursor = function (f) {
};
ops.Document.prototype.getDocumentElement = function () {
};
ops.Document.prototype.getRootNode = function () {
};
ops.Document.prototype.getDOMDocument = function () {
};
ops.Document.prototype.cloneDocumentElement = function () {
};
ops.Document.prototype.setDocumentElement = function (f) {
};
ops.Document.prototype.subscribe = function (f, k) {
};
ops.Document.prototype.unsubscribe = function (f, k) {
};
ops.Document.prototype.getCanvas = function () {
};
ops.Document.prototype.createRootFilter = function (f) {
};
ops.Document.signalCursorAdded = "cursor/added";
ops.Document.signalCursorRemoved = "cursor/removed";
ops.Document.signalCursorMoved = "cursor/moved";
ops.Document.signalMemberAdded = "member/added";
ops.Document.signalMemberUpdated = "member/updated";
ops.Document.signalMemberRemoved = "member/removed";
ops.OdtCursor = function (f, k) {
    var d = this, b = {}, c, h, r, l = new core.EventNotifier([ops.OdtCursor.signalCursorUpdated]);
    this.removeFromDocument = function () {
        r.remove()
    };
    this.subscribe = function (b, c) {
        l.subscribe(b, c)
    };
    this.unsubscribe = function (b, c) {
        l.unsubscribe(b, c)
    };
    this.getStepCounter = function () {
        return h.getStepCounter()
    };
    this.getMemberId = function () {
        return f
    };
    this.getNode = function () {
        return r.getNode()
    };
    this.getAnchorNode = function () {
        return r.getAnchorNode()
    };
    this.getSelectedRange = function () {
        return r.getSelectedRange()
    };
    this.setSelectedRange = function (b, c) {
        r.setSelectedRange(b, c);
        l.emit(ops.OdtCursor.signalCursorUpdated, d)
    };
    this.hasForwardSelection = function () {
        return r.hasForwardSelection()
    };
    this.getDocument = function () {
        return k
    };
    this.getSelectionType = function () {
        return c
    };
    this.setSelectionType = function (d) {
        b.hasOwnProperty(d) ? c = d : runtime.log("Invalid selection type: " + d)
    };
    this.resetSelectionType = function () {
        d.setSelectionType(ops.OdtCursor.RangeSelection)
    };
    r = new core.Cursor(k.getDOMDocument(), f);
    h = new gui.SelectionMover(r,
        k.getRootNode());
    b[ops.OdtCursor.RangeSelection] = !0;
    b[ops.OdtCursor.RegionSelection] = !0;
    d.resetSelectionType()
};
ops.OdtCursor.RangeSelection = "Range";
ops.OdtCursor.RegionSelection = "Region";
ops.OdtCursor.signalCursorUpdated = "cursorUpdated";
(function () {
    var f = 0;
    ops.StepsCache = function (k, d, b) {
        function c(a, e) {
            var c = this;
            this.nodeId = a;
            this.steps = -1;
            this.node = e;
            this.previousBookmark = this.nextBookmark = null;
            this.setIteratorPosition = function (a) {
                a.setPositionBeforeElement(e);
                b(c.steps, a)
            }
        }

        function h(a, e, c) {
            var d = this;
            this.nodeId = a;
            this.steps = e;
            this.node = c;
            this.previousBookmark = this.nextBookmark = null;
            this.setIteratorPosition = function (a) {
                a.setUnfilteredPosition(c, 0);
                b(d.steps, a)
            }
        }

        function r(a, b) {
            var e = "[" + a.nodeId;
            b && (e += " => " + b.nodeId);
            return e +
                "]"
        }

        function l() {
            for (var a = v, b, e, c, d = new core.LoopWatchDog(0, 1E5), f = {}; a;) {
                d.check();
                (b = a.previousBookmark) ? runtime.assert(b.nextBookmark === a, "Broken bookmark link to previous @" + r(b, a)) : (runtime.assert(a === v, "Broken bookmark link @" + r(a)), runtime.assert(void 0 === y || v === v || v.steps <= y, "Base point is damaged @" + r(a)));
                (e = a.nextBookmark) && runtime.assert(e.previousBookmark === a, "Broken bookmark link to next @" + r(a, e));
                if (void 0 === y || a === v || a.steps <= y)runtime.assert(t.containsNode(k, a.node), "Disconnected node is being reported as undamaged @" +
                    r(a)), b && (c = a.node.compareDocumentPosition(b.node), runtime.assert(0 === c || 0 !== (c & x), "Bookmark order with previous does not reflect DOM order @" + r(b, a))), e && t.containsNode(k, e.node) && (c = a.node.compareDocumentPosition(e.node), runtime.assert(0 === c || 0 !== (c & s), "Bookmark order with next does not reflect DOM order @" + r(a, e)));
                a = a.nextBookmark
            }
            Object.keys(g).forEach(function (a) {
                var b = g[a];
                (void 0 === y || a <= y) && runtime.assert(b.steps <= a, "Bookmark step of " + b.steps + " exceeds cached step lookup for " + a + " @" + r(b));
                runtime.assert(!1 === f.hasOwnProperty(b.nodeId), "Bookmark " + r(b) + " appears twice in cached step lookup at steps " + f[b.nodeId] + " and " + a);
                f[b.nodeId] = a
            })
        }

        function p(a) {
            var b = "";
            a.nodeType === Node.ELEMENT_NODE && (b = a.getAttributeNS(m, "nodeId") || "");
            return b
        }

        function n(a) {
            var b = f.toString();
            a.setAttributeNS(m, "nodeId", b);
            f += 1;
            return b
        }

        function q(a) {
            var b, e, c = new core.LoopWatchDog(0, 1E4);
            void 0 !== y && a > y && (a = y);
            for (b = Math.floor(a / d) * d; !e && 0 <= b;)e = g[b], b -= d;
            for (e = e || v; e.nextBookmark && e.nextBookmark.steps <=
                a;)c.check(), e = e.nextBookmark;
            runtime.assert(-1 === a || e.steps <= a, "Bookmark @" + r(e) + " at step " + e.steps + " exceeds requested step of " + a);
            return e
        }

        function e(a) {
            a.previousBookmark && (a.previousBookmark.nextBookmark = a.nextBookmark);
            a.nextBookmark && (a.nextBookmark.previousBookmark = a.previousBookmark)
        }

        function a(a) {
            for (var b, e = null; !e && a && a !== k;)(b = p(a)) && (e = z[b]) && e.node !== a && (runtime.log("Cloned node detected. Creating new bookmark"), e = null, a.removeAttributeNS(m, "nodeId")), a = a.parentNode;
            return e
        }

        var m =
            "urn:webodf:names:steps", g = {}, z = {}, t = new core.DomUtils, v, y, s = Node.DOCUMENT_POSITION_FOLLOWING, x = Node.DOCUMENT_POSITION_PRECEDING, w;
        this.updateBookmark = function (a, b) {
            var f, h = Math.ceil(a / d) * d, l, m, r;
            if (void 0 !== y && y < a) {
                l = q(y);
                for (m = l.nextBookmark; m && m.steps <= a;)f = m.nextBookmark, r = Math.ceil(m.steps / d) * d, g[r] === m && delete g[r], t.containsNode(k, m.node) ? m.steps = a + 1 : (e(m), delete z[m.nodeId]), m = f;
                y = a
            } else l = q(a);
            m = p(b) || n(b);
            f = z[m];
            f ? f.node !== b && (runtime.log("Cloned node detected. Creating new bookmark"), m =
                n(b), f = z[m] = new c(m, b)) : f = z[m] = new c(m, b);
            m = f;
            m.steps !== a && (f = Math.ceil(m.steps / d) * d, f !== h && g[f] === m && delete g[f], m.steps = a);
            if (l !== m && l.nextBookmark !== m) {
                if (l.steps === m.steps)for (; 0 !== (m.node.compareDocumentPosition(l.node) & s) && l !== v;)l = l.previousBookmark;
                l !== m && l.nextBookmark !== m && (e(m), f = l.nextBookmark, m.nextBookmark = l.nextBookmark, m.previousBookmark = l, l.nextBookmark = m, f && (f.previousBookmark = m))
            }
            l = g[h];
            if (!l || m.steps > l.steps)g[h] = m;
            w()
        };
        this.setToClosestStep = function (a, b) {
            var e;
            w();
            e = q(a);
            e.setIteratorPosition(b);
            return e.steps
        };
        this.setToClosestDomPoint = function (b, e, c) {
            var d, f;
            w();
            if (b === k && 0 === e)d = v; else if (b === k && e === k.childNodes.length)for (f in d = v, g)g.hasOwnProperty(f) && (b = g[f], b.steps > d.steps && (d = b)); else if (d = a(b.childNodes.item(e) || b), !d)for (c.setUnfilteredPosition(b, e); !d && c.previousNode();)d = a(c.getCurrentNode());
            d = d || v;
            void 0 !== y && d.steps > y && (d = q(y));
            d.setIteratorPosition(c);
            return d.steps
        };
        this.damageCacheAfterStep = function (a) {
            0 > a && (a = -1);
            void 0 === y ? y = a : a < y && (y = a);
            w()
        };
        (function () {
            var a = p(k) ||
                n(k);
            v = new h(a, 0, k);
            w = ops.StepsCache.ENABLE_CACHE_VERIFICATION ? l : function () {
            }
        })()
    };
    ops.StepsCache.ENABLE_CACHE_VERIFICATION = !1;
    ops.StepsCache.Bookmark = function () {
    };
    ops.StepsCache.Bookmark.prototype.setIteratorPosition = function (f) {
    }
})();
(function () {
    ops.OdtStepsTranslator = function (f, k, d, b) {
        function c(a, b, e) {
            var c = b.getCurrentNode();
            b.isBeforeNode() && q.isParagraph(c) && (e || (a += 1), n.updateBookmark(a, c))
        }

        function h(a, b) {
            do {
                if (d.acceptPosition(b) === m) {
                    c(a, b, !0);
                    break
                }
                c(a - 1, b, !1)
            } while (b.nextPosition())
        }

        function r() {
            var e = f();
            e !== p && (p && runtime.log("Undo detected. Resetting steps cache"), p = e, n = new ops.StepsCache(p, b, h), a = k(p))
        }

        function l(a, b) {
            if (!b || d.acceptPosition(a) === m)return!0;
            for (; a.previousPosition();)if (d.acceptPosition(a) === m) {
                if (b(0,
                    a.container(), a.unfilteredDomOffset()))return!0;
                break
            }
            for (; a.nextPosition();)if (d.acceptPosition(a) === m) {
                if (b(1, a.container(), a.unfilteredDomOffset()))return!0;
                break
            }
            return!1
        }

        var p, n, q = new odf.OdfUtils, e = new core.DomUtils, a, m = core.PositionFilter.FilterResult.FILTER_ACCEPT;
        this.convertStepsToDomPoint = function (b) {
            var e, f;
            if (isNaN(b))throw new TypeError("Requested steps is not numeric (" + b + ")");
            if (0 > b)throw new RangeError("Requested steps is negative (" + b + ")");
            r();
            for (e = n.setToClosestStep(b, a); e < b &&
                a.nextPosition();)(f = d.acceptPosition(a) === m) && (e += 1), c(e, a, f);
            if (e !== b)throw new RangeError("Requested steps (" + b + ") exceeds available steps (" + e + ")");
            return{node: a.container(), offset: a.unfilteredDomOffset()}
        };
        this.convertDomPointToSteps = function (b, f, h) {
            var k;
            r();
            e.containsNode(p, b) || (f = 0 > e.comparePoints(p, 0, b, f), b = p, f = f ? 0 : p.childNodes.length);
            a.setUnfilteredPosition(b, f);
            l(a, h) || a.setUnfilteredPosition(b, f);
            h = a.container();
            f = a.unfilteredDomOffset();
            b = n.setToClosestDomPoint(h, f, a);
            if (0 > e.comparePoints(a.container(),
                a.unfilteredDomOffset(), h, f))return 0 < b ? b - 1 : b;
            for (; (a.container() !== h || a.unfilteredDomOffset() !== f) && a.nextPosition();)(k = d.acceptPosition(a) === m) && (b += 1), c(b, a, k);
            return b + 0
        };
        this.prime = function () {
            var b, e;
            r();
            for (b = n.setToClosestStep(0, a); a.nextPosition();)(e = d.acceptPosition(a) === m) && (b += 1), c(b, a, e)
        };
        this.handleStepsInserted = function (a) {
            r();
            n.damageCacheAfterStep(a.position)
        };
        this.handleStepsRemoved = function (a) {
            r();
            n.damageCacheAfterStep(a.position - 1)
        };
        r()
    };
    ops.OdtStepsTranslator.PREVIOUS_STEP =
        0;
    ops.OdtStepsTranslator.NEXT_STEP = 1
})();
ops.Operation = function () {
};
ops.Operation.prototype.init = function (f) {
};
ops.Operation.prototype.execute = function (f) {
};
ops.Operation.prototype.spec = function () {
};
ops.TextPositionFilter = function (f) {
    function k(b, c, f) {
        var k, e;
        if (c) {
            if (d.isInlineRoot(c) && d.isGroupingElement(f))return r;
            k = d.lookLeftForCharacter(c);
            if (1 === k || 2 === k && (d.scanRightForAnyCharacter(f) || d.scanRightForAnyCharacter(d.nextNode(b))))return h
        } else if (d.isInlineRoot(b.previousSibling) && d.isGroupingElement(b))return h;
        k = null === c && d.isParagraph(b);
        e = d.lookRightForCharacter(f);
        if (k)return e ? h : d.scanRightForAnyCharacter(f) ? r : h;
        if (!e)return r;
        c = c || d.previousNode(b);
        return d.scanLeftForAnyCharacter(c) ?
            r : h
    }

    var d = new odf.OdfUtils, b = Node.ELEMENT_NODE, c = Node.TEXT_NODE, h = core.PositionFilter.FilterResult.FILTER_ACCEPT, r = core.PositionFilter.FilterResult.FILTER_REJECT;
    this.acceptPosition = function (l) {
        var p = l.container(), n = p.nodeType, q, e, a;
        if (n !== b && n !== c)return r;
        if (n === c) {
            if (!d.isGroupingElement(p.parentNode) || d.isWithinTrackedChanges(p.parentNode, f()))return r;
            n = l.unfilteredDomOffset();
            q = p.data;
            runtime.assert(n !== q.length, "Unexpected offset.");
            if (0 < n) {
                l = q[n - 1];
                if (!d.isODFWhitespace(l))return h;
                if (1 < n)if (l =
                    q[n - 2], !d.isODFWhitespace(l))e = h; else {
                    if (!d.isODFWhitespace(q.substr(0, n)))return r
                } else a = d.previousNode(p), d.scanLeftForNonSpace(a) && (e = h);
                if (e === h)return d.isTrailingWhitespace(p, n) ? r : h;
                e = q[n];
                return d.isODFWhitespace(e) ? r : d.scanLeftForAnyCharacter(d.previousNode(p)) ? r : h
            }
            a = l.leftNode();
            e = p;
            p = p.parentNode;
            e = k(p, a, e)
        } else!d.isGroupingElement(p) || d.isWithinTrackedChanges(p, f()) ? e = r : (a = l.leftNode(), e = l.rightNode(), e = k(p, a, e));
        return e
    }
};
ops.OdtDocument = function (f) {
    function k() {
        var a = f.odfContainer().getContentElement(), b = a && a.localName;
        runtime.assert("text" === b, "Unsupported content element type '" + b + "' for OdtDocument");
        return a
    }

    function d() {
        return a.getDocumentElement().ownerDocument
    }

    function b(a) {
        for (; a && !(a.namespaceURI === odf.Namespaces.officens && "text" === a.localName || a.namespaceURI === odf.Namespaces.officens && "annotation" === a.localName);)a = a.parentNode;
        return a
    }

    function c(a) {
        this.acceptPosition = function (e) {
            e = e.container();
            var c;
            c = "string" === typeof a ? t[a].getNode() : a;
            return b(e) === b(c) ? s : x
        }
    }

    function h(a, b, e, c) {
        c = gui.SelectionMover.createPositionIterator(c);
        var d;
        1 === e.length ? d = e[0] : (d = new core.PositionFilterChain, e.forEach(d.addFilter));
        e = new core.StepIterator(d, c);
        e.setPosition(a, b);
        return e
    }

    function r(a) {
        var b = gui.SelectionMover.createPositionIterator(k());
        a = A.convertStepsToDomPoint(a);
        b.setUnfilteredPosition(a.node, a.offset);
        return b
    }

    function l(a) {
        return g.getParagraphElement(a)
    }

    function p(a, b) {
        return f.getFormatting().getStyleElement(a,
            b)
    }

    function n(a) {
        return p(a, "paragraph")
    }

    function q(a) {
        var b, e = [], c, d = 2;
        runtime.assert(a.isStep(), "positionIterator is not at a step");
        do {
            if (b = m.getContentBounds(a))if (b = b.container, g.isDowngradableSpaceElement(b)) {
                for (c = b.lastChild; b.firstChild;)e.push(b.firstChild), b.parentNode.insertBefore(b.firstChild, b);
                b.parentNode.removeChild(b);
                a.setPosition(c, c.nodeType === Node.TEXT_NODE ? c.length : c.childNodes.length);
                a.roundToPreviousStep()
            }
            d -= 1
        } while (0 < d && a.nextStep());
        e.forEach(z.normalizeTextNodes)
    }

    function e(a, b, e) {
        a = a.childNodes.item(b) || a;
        return(a = l(a)) && z.containsNode(e, a) ? a : e
    }

    var a = this, m, g, z, t = {}, v = {}, y = new core.EventNotifier([ops.Document.signalMemberAdded, ops.Document.signalMemberUpdated, ops.Document.signalMemberRemoved, ops.Document.signalCursorAdded, ops.Document.signalCursorRemoved, ops.Document.signalCursorMoved, ops.OdtDocument.signalParagraphChanged, ops.OdtDocument.signalParagraphStyleModified, ops.OdtDocument.signalCommonStyleCreated, ops.OdtDocument.signalCommonStyleDeleted, ops.OdtDocument.signalTableAdded,
        ops.OdtDocument.signalOperationStart, ops.OdtDocument.signalOperationEnd, ops.OdtDocument.signalProcessingBatchStart, ops.OdtDocument.signalProcessingBatchEnd, ops.OdtDocument.signalUndoStackChanged, ops.OdtDocument.signalStepsInserted, ops.OdtDocument.signalStepsRemoved, ops.OdtDocument.signalMetadataUpdated]), s = core.PositionFilter.FilterResult.FILTER_ACCEPT, x = core.PositionFilter.FilterResult.FILTER_REJECT, w, A, G;
    this.getDocumentElement = function () {
        return f.odfContainer().rootElement
    };
    this.getDOMDocument =
        function () {
            return this.getDocumentElement().ownerDocument
        };
    this.cloneDocumentElement = function () {
        var b = a.getDocumentElement(), e = f.getAnnotationViewManager();
        e && e.forgetAnnotations();
        b = b.cloneNode(!0);
        f.refreshAnnotations();
        return b
    };
    this.setDocumentElement = function (a) {
        var b = f.odfContainer();
        b.setRootElement(a);
        f.setOdfContainer(b, !0);
        f.refreshCSS()
    };
    this.getDOMDocument = d;
    this.getRootElement = b;
    this.createStepIterator = h;
    this.getIteratorAtPosition = r;
    this.convertCursorStepToDomPoint = function (a) {
        return A.convertStepsToDomPoint(a)
    };
    this.convertDomPointToCursorStep = function (a, b, e) {
        return A.convertDomPointToSteps(a, b, e)
    };
    this.convertDomToCursorRange = function (a) {
        var b;
        b = A.convertDomPointToSteps(a.anchorNode, a.anchorOffset);
        a = a.anchorNode === a.focusNode && a.anchorOffset === a.focusOffset ? b : A.convertDomPointToSteps(a.focusNode, a.focusOffset);
        return{position: b, length: a - b}
    };
    this.convertCursorToDomRange = function (a, b) {
        var e = d().createRange(), c, g;
        c = A.convertStepsToDomPoint(a);
        b ? (g = A.convertStepsToDomPoint(a + b), 0 < b ? (e.setStart(c.node, c.offset),
            e.setEnd(g.node, g.offset)) : (e.setStart(g.node, g.offset), e.setEnd(c.node, c.offset))) : e.setStart(c.node, c.offset);
        return e
    };
    this.getStyleElement = p;
    this.upgradeWhitespacesAtPosition = function (a) {
        var b = r(a), b = new core.StepIterator(w, b), e, c = 2;
        runtime.assert(b.isStep(), "positionIterator is not at a step (requested step: " + a + ")");
        do {
            if (e = m.getContentBounds(b))if (a = e.container, e = e.startOffset, a.nodeType === Node.TEXT_NODE && g.isSignificantWhitespace(a, e)) {
                runtime.assert(" " === a.data[e], "upgradeWhitespaceToElement: textNode.data[offset] should be a literal space");
                var d = a.ownerDocument.createElementNS(odf.Namespaces.textns, "text:s"), f = a.parentNode, h = a;
                d.appendChild(a.ownerDocument.createTextNode(" "));
                1 === a.length ? f.replaceChild(d, a) : (a.deleteData(e, 1), 0 < e && (e < a.length && a.splitText(e), h = a.nextSibling), f.insertBefore(d, h));
                a = d;
                b.setPosition(a, a.childNodes.length);
                b.roundToPreviousStep()
            }
            c -= 1
        } while (0 < c && b.nextStep())
    };
    this.downgradeWhitespaces = q;
    this.downgradeWhitespacesAtPosition = function (a) {
        a = r(a);
        a = new core.StepIterator(w, a);
        q(a)
    };
    this.getParagraphStyleElement =
        n;
    this.getParagraphElement = l;
    this.getParagraphStyleAttributes = function (a) {
        return(a = n(a)) ? f.getFormatting().getInheritedStyleAttributes(a, !1) : null
    };
    this.getTextNodeAtStep = function (b, e) {
        var c = r(b), g = c.container(), f, h = 0, m = null;
        g.nodeType === Node.TEXT_NODE ? (f = g, h = c.unfilteredDomOffset(), 0 < f.length && (0 < h && (f = f.splitText(h)), f.parentNode.insertBefore(d().createTextNode(""), f), f = f.previousSibling, h = 0)) : (f = d().createTextNode(""), h = 0, g.insertBefore(f, c.rightNode()));
        if (e) {
            if (t[e] && a.getCursorPosition(e) ===
                b) {
                for (m = t[e].getNode(); m.nextSibling && "cursor" === m.nextSibling.localName;)m.parentNode.insertBefore(m.nextSibling, m);
                0 < f.length && f.nextSibling !== m && (f = d().createTextNode(""), h = 0);
                m.parentNode.insertBefore(f, m)
            }
        } else for (; f.nextSibling && "cursor" === f.nextSibling.localName;)f.parentNode.insertBefore(f.nextSibling, f);
        for (; f.previousSibling && f.previousSibling.nodeType === Node.TEXT_NODE;)c = f.previousSibling, c.appendData(f.data), h = c.length, f = c, f.parentNode.removeChild(f.nextSibling);
        for (; f.nextSibling &&
                   f.nextSibling.nodeType === Node.TEXT_NODE;)c = f.nextSibling, f.appendData(c.data), f.parentNode.removeChild(c);
        return{textNode: f, offset: h}
    };
    this.fixCursorPositions = function () {
        Object.keys(t).forEach(function (c) {
            var d = t[c], f = b(d.getNode()), g = a.createRootFilter(f), m, l, k, p = !1;
            k = d.getSelectedRange();
            m = e(k.startContainer, k.startOffset, f);
            l = h(k.startContainer, k.startOffset, [w, g], m);
            k.collapsed ? f = l : (m = e(k.endContainer, k.endOffset, f), f = h(k.endContainer, k.endOffset, [w, g], m));
            l.isStep() && f.isStep() ? l.container() !==
                f.container() || l.offset() !== f.offset() || k.collapsed && d.getAnchorNode() === d.getNode() || (p = !0, k.setStart(l.container(), l.offset()), k.collapse(!0)) : (p = !0, runtime.assert(l.roundToClosestStep(), "No walkable step found for cursor owned by " + c), k.setStart(l.container(), l.offset()), runtime.assert(f.roundToClosestStep(), "No walkable step found for cursor owned by " + c), k.setEnd(f.container(), f.offset()));
            p && (d.setSelectedRange(k, d.hasForwardSelection()), a.emit(ops.Document.signalCursorMoved, d))
        })
    };
    this.getCursorPosition =
        function (a) {
            return(a = t[a]) ? A.convertDomPointToSteps(a.getNode(), 0) : 0
        };
    this.getCursorSelection = function (a) {
        a = t[a];
        var b = 0, e = 0;
        a && (b = A.convertDomPointToSteps(a.getNode(), 0), e = A.convertDomPointToSteps(a.getAnchorNode(), 0));
        return{position: e, length: b - e}
    };
    this.getPositionFilter = function () {
        return w
    };
    this.getOdfCanvas = function () {
        return f
    };
    this.getCanvas = function () {
        return f
    };
    this.getRootNode = k;
    this.addMember = function (a) {
        runtime.assert(void 0 === v[a.getMemberId()], "This member already exists");
        v[a.getMemberId()] =
            a
    };
    this.getMember = function (a) {
        return v.hasOwnProperty(a) ? v[a] : null
    };
    this.removeMember = function (a) {
        delete v[a]
    };
    this.getCursor = function (a) {
        return t[a]
    };
    this.getMemberIds = function () {
        var a = [], b;
        for (b in t)t.hasOwnProperty(b) && a.push(t[b].getMemberId());
        return a
    };
    this.addCursor = function (b) {
        runtime.assert(Boolean(b), "OdtDocument::addCursor without cursor");
        var e = b.getMemberId(), c = a.convertCursorToDomRange(0, 0);
        runtime.assert("string" === typeof e, "OdtDocument::addCursor has cursor without memberid");
        runtime.assert(!t[e],
            "OdtDocument::addCursor is adding a duplicate cursor with memberid " + e);
        b.setSelectedRange(c, !0);
        t[e] = b
    };
    this.removeCursor = function (b) {
        var e = t[b];
        return e ? (e.removeFromDocument(), delete t[b], a.emit(ops.Document.signalCursorRemoved, b), !0) : !1
    };
    this.moveCursor = function (b, e, c, d) {
        b = t[b];
        e = a.convertCursorToDomRange(e, c);
        b && (b.setSelectedRange(e, 0 <= c), b.setSelectionType(d || ops.OdtCursor.RangeSelection))
    };
    this.getFormatting = function () {
        return f.getFormatting()
    };
    this.emit = function (a, b) {
        y.emit(a, b)
    };
    this.subscribe =
        function (a, b) {
            y.subscribe(a, b)
        };
    this.unsubscribe = function (a, b) {
        y.unsubscribe(a, b)
    };
    this.createRootFilter = function (a) {
        return new c(a)
    };
    this.close = function (a) {
        a()
    };
    this.destroy = function (a) {
        a()
    };
    w = new ops.TextPositionFilter(k);
    g = new odf.OdfUtils;
    z = new core.DomUtils;
    m = new odf.StepUtils;
    A = new ops.OdtStepsTranslator(k, gui.SelectionMover.createPositionIterator, w, 500);
    y.subscribe(ops.OdtDocument.signalStepsInserted, A.handleStepsInserted);
    y.subscribe(ops.OdtDocument.signalStepsRemoved, A.handleStepsRemoved);
    y.subscribe(ops.OdtDocument.signalOperationEnd, function (b) {
        var e = b.spec(), c = e.memberid, d = (new Date(e.timestamp)).toISOString(), g = f.odfContainer(), h = {setProperties: {}, removedProperties: []};
        b.isEdit && ("UpdateMetadata" === e.optype && (h.setProperties = JSON.parse(JSON.stringify(e.setProperties)), e.removedProperties && (h.removedProperties = e.removedProperties.attributes.split(","))), e = a.getMember(c).getProperties().fullName, g.setMetadata({"dc:creator": e, "dc:date": d}, null), h.setProperties["dc:creator"] = e, h.setProperties["dc:date"] =
            d, G || (h.setProperties["meta:editing-cycles"] = g.incrementEditingCycles(), g.setMetadata(null, ["meta:editing-duration", "meta:document-statistic"])), G = b, a.emit(ops.OdtDocument.signalMetadataUpdated, h))
    });
    y.subscribe(ops.OdtDocument.signalProcessingBatchEnd, core.Task.processTasks)
};
ops.OdtDocument.signalParagraphChanged = "paragraph/changed";
ops.OdtDocument.signalTableAdded = "table/added";
ops.OdtDocument.signalCommonStyleCreated = "style/created";
ops.OdtDocument.signalCommonStyleDeleted = "style/deleted";
ops.OdtDocument.signalParagraphStyleModified = "paragraphstyle/modified";
ops.OdtDocument.signalOperationStart = "operation/start";
ops.OdtDocument.signalOperationEnd = "operation/end";
ops.OdtDocument.signalProcessingBatchStart = "router/batchstart";
ops.OdtDocument.signalProcessingBatchEnd = "router/batchend";
ops.OdtDocument.signalUndoStackChanged = "undo/changed";
ops.OdtDocument.signalStepsInserted = "steps/inserted";
ops.OdtDocument.signalStepsRemoved = "steps/removed";
ops.OdtDocument.signalMetadataUpdated = "metadata/updated";
ops.OpAddAnnotation = function () {
    function f(b, c, d) {
        var f = b.getTextNodeAtStep(d, k);
        f && (b = f.textNode, d = b.parentNode, f.offset !== b.length && b.splitText(f.offset), d.insertBefore(c, b.nextSibling), 0 === b.length && d.removeChild(b))
    }

    var k, d, b, c, h, r;
    this.init = function (f) {
        k = f.memberid;
        d = parseInt(f.timestamp, 10);
        b = parseInt(f.position, 10);
        c = parseInt(f.length, 10) || 0;
        h = f.name
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (l) {
        var p = l.getCursor(k), n, q;
        q = new core.DomUtils;
        r = l.getDOMDocument();
        var e = new Date(d),
            a, m, g, z;
        a = r.createElementNS(odf.Namespaces.officens, "office:annotation");
        a.setAttributeNS(odf.Namespaces.officens, "office:name", h);
        n = r.createElementNS(odf.Namespaces.dcns, "dc:creator");
        n.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", k);
        n.textContent = l.getMember(k).getProperties().fullName;
        m = r.createElementNS(odf.Namespaces.dcns, "dc:date");
        m.appendChild(r.createTextNode(e.toISOString()));
        e = r.createElementNS(odf.Namespaces.textns, "text:list");
        g = r.createElementNS(odf.Namespaces.textns,
            "text:list-item");
        z = r.createElementNS(odf.Namespaces.textns, "text:p");
        g.appendChild(z);
        e.appendChild(g);
        a.appendChild(n);
        a.appendChild(m);
        a.appendChild(e);
        c && (n = r.createElementNS(odf.Namespaces.officens, "office:annotation-end"), n.setAttributeNS(odf.Namespaces.officens, "office:name", h), a.annotationEndElement = n, f(l, n, b + c));
        f(l, a, b);
        l.emit(ops.OdtDocument.signalStepsInserted, {position: b});
        p && (n = r.createRange(), q = q.getElementsByTagNameNS(a, odf.Namespaces.textns, "p")[0], n.selectNodeContents(q), p.setSelectedRange(n,
            !1), p.setSelectionType(ops.OdtCursor.RangeSelection), l.emit(ops.Document.signalCursorMoved, p));
        l.getOdfCanvas().addAnnotation(a);
        l.fixCursorPositions();
        return!0
    };
    this.spec = function () {
        return{optype: "AddAnnotation", memberid: k, timestamp: d, position: b, length: c, name: h}
    }
};
ops.OpAddCursor = function () {
    var f, k;
    this.init = function (d) {
        f = d.memberid;
        k = d.timestamp
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (d) {
        var b = d.getCursor(f);
        if (b)return!1;
        b = new ops.OdtCursor(f, d);
        d.addCursor(b);
        d.emit(ops.Document.signalCursorAdded, b);
        return!0
    };
    this.spec = function () {
        return{optype: "AddCursor", memberid: f, timestamp: k}
    }
};
ops.OpAddMember = function () {
    var f, k, d;
    this.init = function (b) {
        f = b.memberid;
        k = parseInt(b.timestamp, 10);
        d = b.setProperties
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (b) {
        var c;
        if (b.getMember(f))return!1;
        c = new ops.Member(f, d);
        b.addMember(c);
        b.emit(ops.Document.signalMemberAdded, c);
        return!0
    };
    this.spec = function () {
        return{optype: "AddMember", memberid: f, timestamp: k, setProperties: d}
    }
};
ops.OpAddStyle = function () {
    var f, k, d, b, c, h, r = odf.Namespaces.stylens;
    this.init = function (l) {
        f = l.memberid;
        k = l.timestamp;
        d = l.styleName;
        b = l.styleFamily;
        c = "true" === l.isAutomaticStyle || !0 === l.isAutomaticStyle;
        h = l.setProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (f) {
        var k = f.getOdfCanvas().odfContainer(), n = f.getFormatting(), q = f.getDOMDocument().createElementNS(r, "style:style");
        if (!q)return!1;
        h && n.updateStyle(q, h);
        q.setAttributeNS(r, "style:family", b);
        q.setAttributeNS(r, "style:name", d);
        c ?
            k.rootElement.automaticStyles.appendChild(q) : k.rootElement.styles.appendChild(q);
        f.getOdfCanvas().refreshCSS();
        c || f.emit(ops.OdtDocument.signalCommonStyleCreated, {name: d, family: b});
        return!0
    };
    this.spec = function () {
        return{optype: "AddStyle", memberid: f, timestamp: k, styleName: d, styleFamily: b, isAutomaticStyle: c, setProperties: h}
    }
};
odf.ObjectNameGenerator = function (f, k) {
    function d(a, b) {
        var e = {};
        this.generateName = function () {
            var c = b(), d = 0, f;
            do f = a + d, d += 1; while (e[f] || c[f]);
            e[f] = !0;
            return f
        }
    }

    function b() {
        var a = {};
        [f.rootElement.automaticStyles, f.rootElement.styles].forEach(function (b) {
            for (b = b.firstElementChild; b;)b.namespaceURI === c && "style" === b.localName && (a[b.getAttributeNS(c, "name")] = !0), b = b.nextElementSibling
        });
        return a
    }

    var c = odf.Namespaces.stylens, h = odf.Namespaces.drawns, r = odf.Namespaces.xlinkns, l = new core.DomUtils, p = (new core.Utils).hashString(k),
        n = null, q = null, e = null, a = {}, m = {};
    this.generateStyleName = function () {
        null === n && (n = new d("auto" + p + "_", function () {
            return b()
        }));
        return n.generateName()
    };
    this.generateFrameName = function () {
        null === q && (l.getElementsByTagNameNS(f.rootElement.body, h, "frame").forEach(function (b) {
            a[b.getAttributeNS(h, "name")] = !0
        }), q = new d("fr" + p + "_", function () {
            return a
        }));
        return q.generateName()
    };
    this.generateImageName = function () {
        null === e && (l.getElementsByTagNameNS(f.rootElement.body, h, "image").forEach(function (a) {
            a = a.getAttributeNS(r,
                "href");
            a = a.substring(9, a.lastIndexOf("."));
            m[a] = !0
        }), e = new d("img" + p + "_", function () {
            return m
        }));
        return e.generateName()
    }
};
odf.TextStyleApplicator = function (f, k, d) {
    function b(b) {
        function c(a, b) {
            return"object" === typeof a && "object" === typeof b ? Object.keys(a).every(function (e) {
                return c(a[e], b[e])
            }) : a === b
        }

        var e = {};
        this.isStyleApplied = function (a) {
            a = k.getAppliedStylesForElement(a, e).styleProperties;
            return c(b, a)
        }
    }

    function c(b) {
        var c = {};
        this.applyStyleToContainer = function (e) {
            var a;
            a = e.getAttributeNS(l, "style-name");
            var h = e.ownerDocument;
            a = a || "";
            if (!c.hasOwnProperty(a)) {
                var g = a, r;
                r = a ? k.createDerivedStyleObject(a, "text", b) : b;
                h =
                    h.createElementNS(p, "style:style");
                k.updateStyle(h, r);
                h.setAttributeNS(p, "style:name", f.generateStyleName());
                h.setAttributeNS(p, "style:family", "text");
                h.setAttributeNS("urn:webodf:names:scope", "scope", "document-content");
                d.appendChild(h);
                c[g] = h
            }
            a = c[a].getAttributeNS(p, "name");
            e.setAttributeNS(l, "text:style-name", a)
        }
    }

    function h(b, c) {
        var e = b.ownerDocument, a = b.parentNode, d, f, h, k = new core.LoopWatchDog(1E4);
        f = [];
        f.push(b);
        for (h = b.nextSibling; h && r.rangeContainsNode(c, h);)k.check(), f.push(h), h = h.nextSibling;
        "span" !== a.localName || a.namespaceURI !== l ? (d = e.createElementNS(l, "text:span"), a.insertBefore(d, b), e = !1) : (b.previousSibling && !r.rangeContainsNode(c, a.firstChild) ? (d = a.cloneNode(!1), a.parentNode.insertBefore(d, a.nextSibling)) : d = a, e = !0);
        f.forEach(function (a) {
            a.parentNode !== d && d.appendChild(a)
        });
        if (h && e)for (f = d.cloneNode(!1), d.parentNode.insertBefore(f, d.nextSibling); h;)k.check(), e = h.nextSibling, f.appendChild(h), h = e;
        return d
    }

    var r = new core.DomUtils, l = odf.Namespaces.textns, p = odf.Namespaces.stylens;
    this.applyStyle =
        function (d, f, e) {
            var a = {}, m, g, l, k;
            runtime.assert(e && e.hasOwnProperty("style:text-properties"), "applyStyle without any text properties");
            a["style:text-properties"] = e["style:text-properties"];
            l = new c(a);
            k = new b(a);
            d.forEach(function (a) {
                m = k.isStyleApplied(a);
                !1 === m && (g = h(a, f), l.applyStyleToContainer(g))
            })
        }
};
ops.OpApplyDirectStyling = function () {
    function f(b, c, d) {
        var e = b.getOdfCanvas().odfContainer(), a = l.splitBoundaries(c), f = r.getTextNodes(c, !1);
        (new odf.TextStyleApplicator(new odf.ObjectNameGenerator(e, k), b.getFormatting(), e.rootElement.automaticStyles)).applyStyle(f, c, d);
        a.forEach(l.normalizeTextNodes)
    }

    var k, d, b, c, h, r = new odf.OdfUtils, l = new core.DomUtils;
    this.init = function (f) {
        k = f.memberid;
        d = f.timestamp;
        b = parseInt(f.position, 10);
        c = parseInt(f.length, 10);
        h = f.setProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (l) {
        var n = l.convertCursorToDomRange(b, c), q = r.getParagraphElements(n);
        f(l, n, h);
        n.detach();
        l.getOdfCanvas().refreshCSS();
        l.fixCursorPositions();
        q.forEach(function (b) {
            l.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: b, memberId: k, timeStamp: d})
        });
        l.getOdfCanvas().rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "ApplyDirectStyling", memberid: k, timestamp: d, position: b, length: c, setProperties: h}
    }
};
ops.OpApplyHyperlink = function () {
    function f(b) {
        for (; b;) {
            if (l.isHyperlink(b))return!0;
            b = b.parentNode
        }
        return!1
    }

    var k, d, b, c, h, r = new core.DomUtils, l = new odf.OdfUtils;
    this.init = function (f) {
        k = f.memberid;
        d = f.timestamp;
        b = f.position;
        c = f.length;
        h = f.hyperlink
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (p) {
        var n = p.getDOMDocument(), q = p.convertCursorToDomRange(b, c), e = r.splitBoundaries(q), a = [], m = l.getTextNodes(q, !1);
        if (0 === m.length)return!1;
        m.forEach(function (b) {
            var e = l.getParagraphElement(b);
            runtime.assert(!1 ===
                f(b), "The given range should not contain any link.");
            var c = h, d = n.createElementNS(odf.Namespaces.textns, "text:a");
            d.setAttributeNS(odf.Namespaces.xlinkns, "xlink:type", "simple");
            d.setAttributeNS(odf.Namespaces.xlinkns, "xlink:href", c);
            b.parentNode.insertBefore(d, b);
            d.appendChild(b);
            -1 === a.indexOf(e) && a.push(e)
        });
        e.forEach(r.normalizeTextNodes);
        q.detach();
        p.fixCursorPositions();
        p.getOdfCanvas().refreshSize();
        p.getOdfCanvas().rerenderAnnotations();
        a.forEach(function (a) {
            p.emit(ops.OdtDocument.signalParagraphChanged,
                {paragraphElement: a, memberId: k, timeStamp: d})
        });
        return!0
    };
    this.spec = function () {
        return{optype: "ApplyHyperlink", memberid: k, timestamp: d, position: b, length: c, hyperlink: h}
    }
};
ops.OpInsertImage = function () {
    var f, k, d, b, c, h, r, l, p = odf.Namespaces.drawns, n = odf.Namespaces.svgns, q = odf.Namespaces.textns, e = odf.Namespaces.xlinkns;
    this.init = function (a) {
        f = a.memberid;
        k = a.timestamp;
        d = a.position;
        b = a.filename;
        c = a.frameWidth;
        h = a.frameHeight;
        r = a.frameStyleName;
        l = a.frameName
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (a) {
        var m = a.getOdfCanvas(), g = a.getTextNodeAtStep(d, f), z, t;
        if (!g)return!1;
        z = g.textNode;
        t = a.getParagraphElement(z);
        var g = g.offset !== z.length ? z.splitText(g.offset) : z.nextSibling,
            v = a.getDOMDocument(), y = v.createElementNS(p, "draw:image"), v = v.createElementNS(p, "draw:frame");
        y.setAttributeNS(e, "xlink:href", b);
        y.setAttributeNS(e, "xlink:type", "simple");
        y.setAttributeNS(e, "xlink:show", "embed");
        y.setAttributeNS(e, "xlink:actuate", "onLoad");
        v.setAttributeNS(p, "draw:style-name", r);
        v.setAttributeNS(p, "draw:name", l);
        v.setAttributeNS(q, "text:anchor-type", "as-char");
        v.setAttributeNS(n, "svg:width", c);
        v.setAttributeNS(n, "svg:height", h);
        v.appendChild(y);
        z.parentNode.insertBefore(v, g);
        a.emit(ops.OdtDocument.signalStepsInserted,
            {position: d});
        0 === z.length && z.parentNode.removeChild(z);
        m.addCssForFrameWithImage(v);
        m.refreshCSS();
        a.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: t, memberId: f, timeStamp: k});
        m.rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "InsertImage", memberid: f, timestamp: k, filename: b, position: d, frameWidth: c, frameHeight: h, frameStyleName: r, frameName: l}
    }
};
ops.OpInsertTable = function () {
    function f(d, e) {
        var a;
        if (1 === n.length)a = n[0]; else if (3 === n.length)switch (d) {
            case 0:
                a = n[0];
                break;
            case b - 1:
                a = n[2];
                break;
            default:
                a = n[1]
        } else a = n[d];
        if (1 === a.length)return a[0];
        if (3 === a.length)switch (e) {
            case 0:
                return a[0];
            case c - 1:
                return a[2];
            default:
                return a[1]
        }
        return a[e]
    }

    var k, d, b, c, h, r, l, p, n;
    this.init = function (f) {
        k = f.memberid;
        d = f.timestamp;
        h = f.position;
        b = f.initialRows;
        c = f.initialColumns;
        r = f.tableName;
        l = f.tableStyleName;
        p = f.tableColumnStyleName;
        n = f.tableCellStyleMatrix
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (n) {
        var e = n.getTextNodeAtStep(h), a = n.getRootNode();
        if (e) {
            var m = n.getDOMDocument(), g = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table"), z = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-column"), t, v, y, s;
            l && g.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", l);
            r && g.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:name", r);
            z.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "table:number-columns-repeated", c);
            p && z.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", p);
            g.appendChild(z);
            for (y = 0; y < b; y += 1) {
                z = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-row");
                for (s = 0; s < c; s += 1)t = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-cell"), (v = f(y, s)) && t.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", v), v = m.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                    "text:p"), t.appendChild(v), z.appendChild(t);
                g.appendChild(z)
            }
            e = n.getParagraphElement(e.textNode);
            a.insertBefore(g, e.nextSibling);
            n.emit(ops.OdtDocument.signalStepsInserted, {position: h});
            n.getOdfCanvas().refreshSize();
            n.emit(ops.OdtDocument.signalTableAdded, {tableElement: g, memberId: k, timeStamp: d});
            n.getOdfCanvas().rerenderAnnotations();
            return!0
        }
        return!1
    };
    this.spec = function () {
        return{optype: "InsertTable", memberid: k, timestamp: d, position: h, initialRows: b, initialColumns: c, tableName: r, tableStyleName: l, tableColumnStyleName: p,
            tableCellStyleMatrix: n}
    }
};
ops.OpInsertText = function () {
    var f, k, d, b, c, h = new odf.OdfUtils;
    this.init = function (h) {
        f = h.memberid;
        k = h.timestamp;
        d = h.position;
        c = h.text;
        b = "true" === h.moveCursor || !0 === h.moveCursor
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (r) {
        var l, p, n, q = null, e = r.getDOMDocument(), a, m = 0, g, z = r.getCursor(f), t;
        r.upgradeWhitespacesAtPosition(d);
        if (l = r.getTextNodeAtStep(d)) {
            p = l.textNode;
            q = p.nextSibling;
            n = p.parentNode;
            a = r.getParagraphElement(p);
            for (t = 0; t < c.length; t += 1)if ("\t" === c[t] || "\t" !== c[t] && h.isODFWhitespace(c[t]) &&
                (0 === t || t === c.length - 1 || "\t" !== c[t - 1] && h.isODFWhitespace(c[t - 1])))0 === m ? (l.offset !== p.length && (q = p.splitText(l.offset)), 0 < t && p.appendData(c.substring(0, t))) : m < t && (m = c.substring(m, t), n.insertBefore(e.createTextNode(m), q)), m = t + 1, "\t" === c[t] ? (g = e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:tab"), g.appendChild(e.createTextNode("\t"))) : (" " !== c[t] && runtime.log("WARN: InsertText operation contains non-tab, non-space whitespace character (character code " + c.charCodeAt(t) + ")"),
                g = e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:s"), g.appendChild(e.createTextNode(" "))), n.insertBefore(g, q);
            0 === m ? p.insertData(l.offset, c) : m < c.length && (l = c.substring(m), n.insertBefore(e.createTextNode(l), q));
            n = p.parentNode;
            q = p.nextSibling;
            n.removeChild(p);
            n.insertBefore(p, q);
            0 === p.length && p.parentNode.removeChild(p);
            r.emit(ops.OdtDocument.signalStepsInserted, {position: d});
            z && b && (r.moveCursor(f, d + c.length, 0), r.emit(ops.Document.signalCursorMoved, z));
            r.downgradeWhitespacesAtPosition(d);
            r.downgradeWhitespacesAtPosition(d + c.length);
            r.getOdfCanvas().refreshSize();
            r.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: a, memberId: f, timeStamp: k});
            r.getOdfCanvas().rerenderAnnotations();
            return!0
        }
        return!1
    };
    this.spec = function () {
        return{optype: "InsertText", memberid: f, timestamp: k, position: d, text: c, moveCursor: b}
    }
};
odf.CollapsingRules = function (f) {
    function k(c) {
        return b.isODFNode(c) || "br" === c.localName && b.isLineBreak(c.parentNode) || c.nodeType === Node.TEXT_NODE && b.isODFNode(c.parentNode)
    }

    function d(h) {
        var r;
        h.nodeType === Node.TEXT_NODE ? (r = h.parentNode, r.removeChild(h)) : r = c.removeUnwantedNodes(h, k);
        return r && !b.isParagraph(r) && r !== f && b.hasNoODFContent(r) ? d(r) : r
    }

    var b = new odf.OdfUtils, c = new core.DomUtils;
    this.mergeChildrenIntoParent = d
};
ops.OpMergeParagraph = function () {
    function f(a) {
        a.collapsed || (q.splitBoundaries(a), a = n.getTextElements(a, !1, !0), a.forEach(function (a) {
            runtime.assert(a.nodeType === Node.TEXT_NODE, "Expected node type 3 (Node.TEXT_NODE), found node type " + a.nodeType);
            0 < a.length ? (runtime.assert(n.isODFWhitespace(a.data), "Non-whitespace node found between paragraph boundary and first or last step"), runtime.assert(!1 === n.isSignificantWhitespace(a, 0), "Significant whitespace node found between paragraph boundary and first or last step")) :
                runtime.log("WARN: Empty text node found during merge operation");
            a.parentNode.removeChild(a)
        }))
    }

    function k(a, b) {
        var e = b.ownerDocument.createRange();
        a.setPosition(b, 0);
        a.roundToNextStep();
        e.setStart(b, 0);
        e.setEnd(a.container(), a.offset());
        f(e);
        a.setPosition(b, b.childNodes.length);
        a.roundToPreviousStep();
        e.setStart(a.container(), a.offset());
        e.setEnd(b, b.childNodes.length);
        f(e)
    }

    function d(a, b) {
        var e = a.convertCursorStepToDomPoint(b), e = n.getParagraphElement(e.node, e.offset);
        runtime.assert(Boolean(e),
            "Paragraph not found at step " + b);
        return e
    }

    var b, c, h, r, l, p, n = new odf.OdfUtils, q = new core.DomUtils, e = odf.Namespaces.textns;
    this.init = function (a) {
        b = a.memberid;
        c = a.timestamp;
        h = a.moveCursor;
        r = a.paragraphStyleName;
        l = parseInt(a.sourceStartPosition, 10);
        p = parseInt(a.destinationStartPosition, 10)
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (a) {
        var f, g, z = a.getCursor(b);
        f = a.getRootNode();
        var t = new odf.CollapsingRules(f), v = a.createStepIterator(f, 0, [a.getPositionFilter()], f), y;
        runtime.assert(p < l, "Destination paragraph (" +
            p + ") must be before source paragraph (" + l + ")");
        g = d(a, p);
        f = d(a, l);
        v.setPosition(f, 0);
        v.previousStep();
        runtime.assert(q.containsNode(g, v.container()), "Destination paragraph must be adjacent to the source paragraph");
        k(v, g);
        y = g.childNodes.length;
        k(v, f);
        var s;
        for (s = f.firstChild; s;)"editinfo" === s.localName || n.isGroupingElement(s) && n.hasNoODFContent(s) ? f.removeChild(s) : g.appendChild(s), s = f.firstChild;
        t.mergeChildrenIntoParent(f);
        a.emit(ops.OdtDocument.signalStepsRemoved, {position: l - 1});
        v.setPosition(g,
            y);
        v.roundToClosestStep();
        v.previousStep() || v.roundToNextStep();
        a.downgradeWhitespaces(v);
        r ? g.setAttributeNS(e, "text:style-name", r) : g.removeAttributeNS(e, "style-name");
        z && h && (a.moveCursor(b, l - 1, 0), a.emit(ops.Document.signalCursorMoved, z));
        a.fixCursorPositions();
        a.getOdfCanvas().refreshSize();
        a.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: g, memberId: b, timeStamp: c});
        a.getOdfCanvas().rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "MergeParagraph", memberid: b, timestamp: c,
            moveCursor: h, paragraphStyleName: r, sourceStartPosition: l, destinationStartPosition: p}
    }
};
ops.OpMoveCursor = function () {
    var f, k, d, b, c;
    this.init = function (h) {
        f = h.memberid;
        k = h.timestamp;
        d = h.position;
        b = h.length || 0;
        c = h.selectionType || ops.OdtCursor.RangeSelection
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (h) {
        var k = h.getCursor(f), l;
        if (!k)return!1;
        l = h.convertCursorToDomRange(d, b);
        k.setSelectedRange(l, 0 <= b);
        k.setSelectionType(c);
        h.emit(ops.Document.signalCursorMoved, k);
        return!0
    };
    this.spec = function () {
        return{optype: "MoveCursor", memberid: f, timestamp: k, position: d, length: b, selectionType: c}
    }
};
ops.OpRemoveAnnotation = function () {
    var f, k, d, b, c;
    this.init = function (h) {
        f = h.memberid;
        k = h.timestamp;
        d = parseInt(h.position, 10);
        b = parseInt(h.length, 10);
        c = new core.DomUtils
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (b) {
        function f(b) {
            k.parentNode.insertBefore(b, k)
        }

        for (var l = b.getIteratorAtPosition(d).container(), k; l.namespaceURI !== odf.Namespaces.officens || "annotation" !== l.localName;)l = l.parentNode;
        if (null === l)return!1;
        k = l;
        l = k.annotationEndElement;
        b.getOdfCanvas().forgetAnnotations();
        c.getElementsByTagNameNS(k,
            "urn:webodf:names:cursor", "cursor").forEach(f);
        c.getElementsByTagNameNS(k, "urn:webodf:names:cursor", "anchor").forEach(f);
        k.parentNode.removeChild(k);
        l && l.parentNode.removeChild(l);
        b.emit(ops.OdtDocument.signalStepsRemoved, {position: 0 < d ? d - 1 : d});
        b.fixCursorPositions();
        b.getOdfCanvas().refreshAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveAnnotation", memberid: f, timestamp: k, position: d, length: b}
    }
};
ops.OpRemoveBlob = function () {
    var f, k, d;
    this.init = function (b) {
        f = b.memberid;
        k = b.timestamp;
        d = b.filename
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (b) {
        b.getOdfCanvas().odfContainer().removeBlob(d);
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveBlob", memberid: f, timestamp: k, filename: d}
    }
};
ops.OpRemoveCursor = function () {
    var f, k;
    this.init = function (d) {
        f = d.memberid;
        k = d.timestamp
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (d) {
        return d.removeCursor(f) ? !0 : !1
    };
    this.spec = function () {
        return{optype: "RemoveCursor", memberid: f, timestamp: k}
    }
};
ops.OpRemoveHyperlink = function () {
    var f, k, d, b, c = new core.DomUtils, h = new odf.OdfUtils;
    this.init = function (c) {
        f = c.memberid;
        k = c.timestamp;
        d = c.position;
        b = c.length
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (r) {
        var l = r.convertCursorToDomRange(d, b), p = h.getHyperlinkElements(l);
        runtime.assert(1 === p.length, "The given range should only contain a single link.");
        p = c.mergeIntoParent(p[0]);
        l.detach();
        r.fixCursorPositions();
        r.getOdfCanvas().refreshSize();
        r.getOdfCanvas().rerenderAnnotations();
        r.emit(ops.OdtDocument.signalParagraphChanged,
            {paragraphElement: h.getParagraphElement(p), memberId: f, timeStamp: k});
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveHyperlink", memberid: f, timestamp: k, position: d, length: b}
    }
};
ops.OpRemoveMember = function () {
    var f, k;
    this.init = function (d) {
        f = d.memberid;
        k = parseInt(d.timestamp, 10)
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (d) {
        if (!d.getMember(f))return!1;
        d.removeMember(f);
        d.emit(ops.Document.signalMemberRemoved, f);
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveMember", memberid: f, timestamp: k}
    }
};
ops.OpRemoveStyle = function () {
    var f, k, d, b;
    this.init = function (c) {
        f = c.memberid;
        k = c.timestamp;
        d = c.styleName;
        b = c.styleFamily
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (c) {
        var f = c.getStyleElement(d, b);
        if (!f)return!1;
        f.parentNode.removeChild(f);
        c.getOdfCanvas().refreshCSS();
        c.emit(ops.OdtDocument.signalCommonStyleDeleted, {name: d, family: b});
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveStyle", memberid: f, timestamp: k, styleName: d, styleFamily: b}
    }
};
ops.OpRemoveText = function () {
    var f, k, d, b, c, h;
    this.init = function (r) {
        runtime.assert(0 <= r.length, "OpRemoveText only supports positive lengths");
        f = r.memberid;
        k = r.timestamp;
        d = parseInt(r.position, 10);
        b = parseInt(r.length, 10);
        c = new odf.OdfUtils;
        h = new core.DomUtils
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (r) {
        var l, p, n, q = r.getCursor(f), e = new odf.CollapsingRules(r.getRootNode());
        r.upgradeWhitespacesAtPosition(d);
        r.upgradeWhitespacesAtPosition(d + b);
        l = r.convertCursorToDomRange(d, b);
        h.splitBoundaries(l);
        p = c.getTextElements(l, !1, !0);
        n = c.getParagraphElement(l.startContainer, l.startOffset);
        runtime.assert(void 0 !== n, "Attempting to remove text outside a paragraph element");
        l.detach();
        p.forEach(function (a) {
            a.parentNode ? (runtime.assert(h.containsNode(n, a), "RemoveText only supports removing elements within the same paragraph"), e.mergeChildrenIntoParent(a)) : runtime.log("WARN: text element has already been removed from it's container")
        });
        r.emit(ops.OdtDocument.signalStepsRemoved, {position: d});
        r.downgradeWhitespacesAtPosition(d);
        r.fixCursorPositions();
        r.getOdfCanvas().refreshSize();
        r.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: n, memberId: f, timeStamp: k});
        q && (q.resetSelectionType(), r.emit(ops.Document.signalCursorMoved, q));
        r.getOdfCanvas().rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveText", memberid: f, timestamp: k, position: d, length: b}
    }
};
ops.OpSetBlob = function () {
    var f, k, d, b, c;
    this.init = function (h) {
        f = h.memberid;
        k = h.timestamp;
        d = h.filename;
        b = h.mimetype;
        c = h.content
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (f) {
        f.getOdfCanvas().odfContainer().setBlob(d, b, c);
        return!0
    };
    this.spec = function () {
        return{optype: "SetBlob", memberid: f, timestamp: k, filename: d, mimetype: b, content: c}
    }
};
ops.OpSetParagraphStyle = function () {
    function f(b, c, d) {
        var f = [b.getPositionFilter()], k = d.container();
        d = d.unfilteredDomOffset();
        return!1 === b.createStepIterator(k, d, f, c).previousStep()
    }

    var k, d, b, c;
    this.init = function (f) {
        k = f.memberid;
        d = f.timestamp;
        b = f.position;
        c = f.styleName
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (h) {
        var r, l;
        r = h.getIteratorAtPosition(b);
        return(l = h.getParagraphElement(r.container())) ? (runtime.assert(f(h, l, r), "SetParagraphStyle position should be the first position in the paragraph"),
            c ? l.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:style-name", c) : l.removeAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "style-name"), h.getOdfCanvas().refreshSize(), h.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: l, timeStamp: d, memberId: k}), h.getOdfCanvas().rerenderAnnotations(), !0) : !1
    };
    this.spec = function () {
        return{optype: "SetParagraphStyle", memberid: k, timestamp: d, position: b, styleName: c}
    }
};
ops.OpSplitParagraph = function () {
    var f, k, d, b, c, h, r, l = odf.Namespaces.textns;
    this.init = function (l) {
        f = l.memberid;
        k = l.timestamp;
        b = l.position;
        d = l.sourceParagraphPosition;
        h = l.paragraphStyleName;
        c = "true" === l.moveCursor || !0 === l.moveCursor;
        r = new odf.OdfUtils
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (d) {
        var n, q, e, a, m, g, z, t = d.getCursor(f);
        d.upgradeWhitespacesAtPosition(b);
        n = d.getTextNodeAtStep(b);
        if (!n)return!1;
        q = d.getParagraphElement(n.textNode);
        if (!q)return!1;
        e = r.isListItem(q.parentNode) ? q.parentNode :
            q;
        0 === n.offset ? (z = n.textNode.previousSibling, g = null) : (z = n.textNode, g = n.offset >= n.textNode.length ? null : n.textNode.splitText(n.offset));
        for (a = n.textNode; a !== e;) {
            a = a.parentNode;
            m = a.cloneNode(!1);
            g && m.appendChild(g);
            if (z)for (; z && z.nextSibling;)m.appendChild(z.nextSibling); else for (; a.firstChild;)m.appendChild(a.firstChild);
            a.parentNode.insertBefore(m, a.nextSibling);
            z = a;
            g = m
        }
        r.isListItem(g) && (g = g.childNodes.item(0));
        h ? g.setAttributeNS(l, "text:style-name", h) : g.removeAttributeNS(l, "style-name");
        0 === n.textNode.length &&
        n.textNode.parentNode.removeChild(n.textNode);
        d.emit(ops.OdtDocument.signalStepsInserted, {position: b});
        t && c && (d.moveCursor(f, b + 1, 0), d.emit(ops.Document.signalCursorMoved, t));
        d.fixCursorPositions();
        d.getOdfCanvas().refreshSize();
        d.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: q, memberId: f, timeStamp: k});
        d.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: g, memberId: f, timeStamp: k});
        d.getOdfCanvas().rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "SplitParagraph",
            memberid: f, timestamp: k, position: b, sourceParagraphPosition: d, paragraphStyleName: h, moveCursor: c}
    }
};
ops.OpUpdateMember = function () {
    function f(c) {
        var d = "//dc:creator[@editinfo:memberid='" + k + "']";
        c = xmldom.XPath.getODFElementsWithXPath(c.getRootNode(), d, function (b) {
            return"editinfo" === b ? "urn:webodf:names:editinfo" : odf.Namespaces.lookupNamespaceURI(b)
        });
        for (d = 0; d < c.length; d += 1)c[d].textContent = b.fullName
    }

    var k, d, b, c;
    this.init = function (f) {
        k = f.memberid;
        d = parseInt(f.timestamp, 10);
        b = f.setProperties;
        c = f.removedProperties
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (d) {
        var r = d.getMember(k);
        if (!r)return!1;
        c && r.removeProperties(c);
        b && (r.setProperties(b), b.fullName && f(d));
        d.emit(ops.Document.signalMemberUpdated, r);
        return!0
    };
    this.spec = function () {
        return{optype: "UpdateMember", memberid: k, timestamp: d, setProperties: b, removedProperties: c}
    }
};
ops.OpUpdateMetadata = function () {
    var f, k, d, b;
    this.init = function (c) {
        f = c.memberid;
        k = parseInt(c.timestamp, 10);
        d = c.setProperties;
        b = c.removedProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (c) {
        c = c.getOdfCanvas().odfContainer();
        var f = null;
        b && (f = b.attributes.split(","));
        c.setMetadata(d, f);
        return!0
    };
    this.spec = function () {
        return{optype: "UpdateMetadata", memberid: f, timestamp: k, setProperties: d, removedProperties: b}
    }
};
ops.OpUpdateParagraphStyle = function () {
    function f(b, c) {
        var d, f, e = c ? c.split(",") : [];
        for (d = 0; d < e.length; d += 1)f = e[d].split(":"), b.removeAttributeNS(odf.Namespaces.lookupNamespaceURI(f[0]), f[1])
    }

    var k, d, b, c, h, r = odf.Namespaces.stylens;
    this.init = function (f) {
        k = f.memberid;
        d = f.timestamp;
        b = f.styleName;
        c = f.setProperties;
        h = f.removedProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (d) {
        var k = d.getFormatting(), n, q, e;
        return(n = "" !== b ? d.getParagraphStyleElement(b) : k.getDefaultStyleElement("paragraph")) ?
            (q = n.getElementsByTagNameNS(r, "paragraph-properties").item(0), e = n.getElementsByTagNameNS(r, "text-properties").item(0), c && k.updateStyle(n, c), h && (k = h["style:paragraph-properties"], q && k && (f(q, k.attributes), 0 === q.attributes.length && n.removeChild(q)), k = h["style:text-properties"], e && k && (f(e, k.attributes), 0 === e.attributes.length && n.removeChild(e)), f(n, h.attributes)), d.getOdfCanvas().refreshCSS(), d.emit(ops.OdtDocument.signalParagraphStyleModified, b), d.getOdfCanvas().rerenderAnnotations(), !0) : !1
    };
    this.spec =
        function () {
            return{optype: "UpdateParagraphStyle", memberid: k, timestamp: d, styleName: b, setProperties: c, removedProperties: h}
        }
};
ops.OperationFactory = function () {
    function f(d) {
        return function (b) {
            return new d
        }
    }

    var k;
    this.register = function (d, b) {
        k[d] = b
    };
    this.create = function (d) {
        var b = null, c = k[d.optype];
        c && (b = c(d), b.init(d));
        return b
    };
    k = {AddMember: f(ops.OpAddMember), UpdateMember: f(ops.OpUpdateMember), RemoveMember: f(ops.OpRemoveMember), AddCursor: f(ops.OpAddCursor), ApplyDirectStyling: f(ops.OpApplyDirectStyling), SetBlob: f(ops.OpSetBlob), RemoveBlob: f(ops.OpRemoveBlob), InsertImage: f(ops.OpInsertImage), InsertTable: f(ops.OpInsertTable),
        InsertText: f(ops.OpInsertText), RemoveText: f(ops.OpRemoveText), MergeParagraph: f(ops.OpMergeParagraph), SplitParagraph: f(ops.OpSplitParagraph), SetParagraphStyle: f(ops.OpSetParagraphStyle), UpdateParagraphStyle: f(ops.OpUpdateParagraphStyle), AddStyle: f(ops.OpAddStyle), RemoveStyle: f(ops.OpRemoveStyle), MoveCursor: f(ops.OpMoveCursor), RemoveCursor: f(ops.OpRemoveCursor), AddAnnotation: f(ops.OpAddAnnotation), RemoveAnnotation: f(ops.OpRemoveAnnotation), UpdateMetadata: f(ops.OpUpdateMetadata), ApplyHyperlink: f(ops.OpApplyHyperlink),
        RemoveHyperlink: f(ops.OpRemoveHyperlink)}
};
ops.OperationRouter = function () {
};
ops.OperationRouter.prototype.setOperationFactory = function (f) {
};
ops.OperationRouter.prototype.setPlaybackFunction = function (f) {
};
ops.OperationRouter.prototype.push = function (f) {
};
ops.OperationRouter.prototype.close = function (f) {
};
ops.OperationRouter.prototype.subscribe = function (f, k) {
};
ops.OperationRouter.prototype.unsubscribe = function (f, k) {
};
ops.OperationRouter.prototype.hasLocalUnsyncedOps = function () {
};
ops.OperationRouter.prototype.hasSessionHostConnection = function () {
};
ops.OperationRouter.signalProcessingBatchStart = "router/batchstart";
ops.OperationRouter.signalProcessingBatchEnd = "router/batchend";
ops.TrivialOperationRouter = function () {
    var f = new core.EventNotifier([ops.OperationRouter.signalProcessingBatchStart, ops.OperationRouter.signalProcessingBatchEnd]), k, d, b = 0;
    this.setOperationFactory = function (b) {
        k = b
    };
    this.setPlaybackFunction = function (b) {
        d = b
    };
    this.push = function (c) {
        b += 1;
        f.emit(ops.OperationRouter.signalProcessingBatchStart, {});
        c.forEach(function (c) {
            c = c.spec();
            c.timestamp = Date.now();
            c = k.create(c);
            c.group = "g" + b;
            d(c)
        });
        f.emit(ops.OperationRouter.signalProcessingBatchEnd, {})
    };
    this.close = function (b) {
        b()
    };
    this.subscribe = function (b, d) {
        f.subscribe(b, d)
    };
    this.unsubscribe = function (b, d) {
        f.unsubscribe(b, d)
    };
    this.hasLocalUnsyncedOps = function () {
        return!1
    };
    this.hasSessionHostConnection = function () {
        return!0
    }
};
ops.Session = function (f) {
    function k(b) {
        c.emit(ops.OdtDocument.signalProcessingBatchStart, b)
    }

    function d(b) {
        c.emit(ops.OdtDocument.signalProcessingBatchEnd, b)
    }

    var b = new ops.OperationFactory, c = new ops.OdtDocument(f), h = null;
    this.setOperationFactory = function (c) {
        b = c;
        h && h.setOperationFactory(b)
    };
    this.setOperationRouter = function (f) {
        h && (h.unsubscribe(ops.OperationRouter.signalProcessingBatchStart, k), h.unsubscribe(ops.OperationRouter.signalProcessingBatchEnd, d));
        h = f;
        h.subscribe(ops.OperationRouter.signalProcessingBatchStart,
            k);
        h.subscribe(ops.OperationRouter.signalProcessingBatchEnd, d);
        f.setPlaybackFunction(function (b) {
            c.emit(ops.OdtDocument.signalOperationStart, b);
            return b.execute(c) ? (c.emit(ops.OdtDocument.signalOperationEnd, b), !0) : !1
        });
        f.setOperationFactory(b)
    };
    this.getOperationFactory = function () {
        return b
    };
    this.getOdtDocument = function () {
        return c
    };
    this.enqueue = function (b) {
        h.push(b)
    };
    this.close = function (b) {
        h.close(function (d) {
            d ? b(d) : c.close(b)
        })
    };
    this.destroy = function (b) {
        c.destroy(b)
    };
    this.setOperationRouter(new ops.TrivialOperationRouter)
};
gui.AnnotationController = function (f, k, d) {
    function b() {
        var b = l.getCursor(d), b = b && b.getNode(), a = !1;
        b && (a = !q.isWithinAnnotation(b, l.getRootNode()));
        a !== p && (p = a, n.emit(gui.AnnotationController.annotatableChanged, p))
    }

    function c(e) {
        e.getMemberId() === d && b()
    }

    function h(e) {
        e === d && b()
    }

    function r(e) {
        e.getMemberId() === d && b()
    }

    var l = f.getOdtDocument(), p = !1, n = new core.EventNotifier([gui.AnnotationController.annotatableChanged]), q = new odf.OdfUtils;
    this.isAnnotatable = function () {
        return p
    };
    this.addAnnotation = function () {
        var b =
            new ops.OpAddAnnotation, a = l.getCursorSelection(d), c = a.length, a = a.position;
        p && (a = 0 <= c ? a : a + c, c = Math.abs(c), b.init({memberid: d, position: a, length: c, name: d + Date.now()}), f.enqueue([b]))
    };
    this.removeAnnotation = function (b) {
        var a, c;
        a = l.getMember(d).getProperties().fullName;
        if (!0 !== k.getState(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN) || a === q.getAnnotationCreator(b))a = l.convertDomPointToCursorStep(b, 0) + 1, c = l.convertDomPointToCursorStep(b, b.childNodes.length), b = new ops.OpRemoveAnnotation, b.init({memberid: d,
            position: a, length: c - a}), c = new ops.OpMoveCursor, c.init({memberid: d, position: 0 < a ? a - 1 : a, length: 0}), f.enqueue([b, c])
    };
    this.subscribe = function (b, a) {
        n.subscribe(b, a)
    };
    this.unsubscribe = function (b, a) {
        n.unsubscribe(b, a)
    };
    this.destroy = function (b) {
        l.unsubscribe(ops.Document.signalCursorAdded, c);
        l.unsubscribe(ops.Document.signalCursorRemoved, h);
        l.unsubscribe(ops.Document.signalCursorMoved, r);
        b()
    };
    k.registerConstraint(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN);
    l.subscribe(ops.Document.signalCursorAdded,
        c);
    l.subscribe(ops.Document.signalCursorRemoved, h);
    l.subscribe(ops.Document.signalCursorMoved, r);
    b()
};
gui.AnnotationController.annotatableChanged = "annotatable/changed";
gui.Avatar = function (f, k) {
    var d = this, b, c, h;
    this.setColor = function (b) {
        c.style.borderColor = b
    };
    this.setImageUrl = function (b) {
        d.isVisible() ? c.src = b : h = b
    };
    this.isVisible = function () {
        return"block" === b.style.display
    };
    this.show = function () {
        h && (c.src = h, h = void 0);
        b.style.display = "block"
    };
    this.hide = function () {
        b.style.display = "none"
    };
    this.markAsFocussed = function (c) {
        c ? b.classList.add("active") : b.classList.remove("active")
    };
    this.destroy = function (c) {
        f.removeChild(b);
        c()
    };
    (function () {
        var d = f.ownerDocument, h = d.documentElement.namespaceURI;
        b = d.createElementNS(h, "div");
        c = d.createElementNS(h, "img");
        c.width = 64;
        c.height = 64;
        b.appendChild(c);
        b.style.width = "64px";
        b.style.height = "70px";
        b.style.position = "absolute";
        b.style.top = "-80px";
        b.style.left = "-34px";
        b.style.display = k ? "block" : "none";
        b.className = "handle";
        f.appendChild(b)
    })()
};
gui.StepInfo = function () {
};
gui.StepInfo.VisualDirection = {LEFT_TO_RIGHT: 0, RIGHT_TO_LEFT: 1};
gui.StepInfo.prototype.container = function () {
};
gui.StepInfo.prototype.offset = function () {
};
gui.VisualStepScanner = function () {
};
gui.VisualStepScanner.prototype.process = function (f, k, d) {
};
gui.GuiStepUtils = function () {
    function f(c) {
        c = d.getContentBounds(c);
        var f, h = null;
        if (c)if (c.container.nodeType === Node.TEXT_NODE)f = c.container.ownerDocument.createRange(), f.setStart(c.container, c.startOffset), f.setEnd(c.container, c.endOffset), (h = 0 < f.getClientRects().length ? f.getBoundingClientRect() : null) && " " === c.container.data.substring(c.startOffset, c.endOffset) && 1 >= h.width && (h = null), f.detach(); else if (k.isCharacterElement(c.container) || k.isCharacterFrame(c.container))h = b.getBoundingClientRect(c.container);
        return h
    }

    var k = new odf.OdfUtils, d = new odf.StepUtils, b = new core.DomUtils, c = core.StepDirection.NEXT, h = gui.StepInfo.VisualDirection.LEFT_TO_RIGHT, r = gui.StepInfo.VisualDirection.RIGHT_TO_LEFT;
    this.getContentRect = f;
    this.moveToFilteredStep = function (b, d, k) {
        function q(a, b) {
            b.process(y, g, z) && (a = !0, !t && b.token && (t = b.token));
            return a
        }

        var e = d === c, a, m, g, z, t, v = b.snapshot();
        a = !1;
        var y;
        do a = f(b), y = {token: b.snapshot(), container: b.container, offset: b.offset, direction: d, visualDirection: d === c ? h : r}, m = b.nextStep() ? f(b) :
            null, b.restore(y.token), e ? (g = a, z = m) : (g = m, z = a), a = k.reduce(q, !1); while (!a && b.advanceStep(d));
        a || k.forEach(function (a) {
            !t && a.token && (t = a.token)
        });
        b.restore(t || v);
        return Boolean(t)
    }
};
gui.Caret = function (f, k, d) {
    function b() {
        n.style.opacity = "0" === n.style.opacity ? "1" : "0";
        s.trigger()
    }

    function c() {
        m.selectNodeContents(a);
        return m.getBoundingClientRect()
    }

    function h() {
        Object.keys(G).forEach(function (a) {
            E[a] = G[a]
        })
    }

    function r() {
        var a, b, m, l;
        if (!1 === G.isShown || f.getSelectionType() !== ops.OdtCursor.RangeSelection || !d && !f.getSelectedRange().collapsed)G.visibility = "hidden", n.style.visibility = "hidden", s.cancel(); else {
            G.visibility = "visible";
            n.style.visibility = "visible";
            if (!1 === G.isFocused)n.style.opacity =
                "1", s.cancel(); else {
                if (x || E.visibility !== G.visibility)n.style.opacity = "1", s.cancel();
                s.trigger()
            }
            if (A || w || E.visibility !== G.visibility) {
                a = f.getNode();
                var k;
                m = z.getBoundingClientRect(g.getSizer());
                l = !1;
                if (0 < a.getClientRects().length)k = c(), l = !0; else if (v.setPosition(a, 0), k = t.getContentRect(v), !k && v.nextStep() && (b = t.getContentRect(v)) && (k = b, l = !0), k || (a.setAttributeNS("urn:webodf:names:cursor", "caret-sizer-active", "true"), k = c(), l = !0), !k)for (runtime.log("WARN: No suitable client rectangle found for visual caret for " +
                    f.getMemberId()); a;) {
                    if (0 < a.getClientRects().length) {
                        k = z.getBoundingClientRect(a);
                        l = !0;
                        break
                    }
                    a = a.parentNode
                }
                k = z.translateRect(k, m, g.getZoomLevel());
                a = {top: k.top, height: k.height, right: l ? k.left : k.right};
                8 > a.height && (a = {top: a.top - (8 - a.height) / 2, height: 8, right: a.right});
                p.style.height = a.height + "px";
                p.style.top = a.top + "px";
                p.style.left = a.right + "px";
                e && (a = runtime.getWindow().getComputedStyle(f.getNode(), null), a.font ? e.style.font = a.font : (e.style.fontStyle = a.fontStyle, e.style.fontVariant = a.fontVariant, e.style.fontWeight =
                    a.fontWeight, e.style.fontSize = a.fontSize, e.style.lineHeight = a.lineHeight, e.style.fontFamily = a.fontFamily))
            }
            if (w) {
                k = f.getDocument().getCanvas().getElement().parentNode;
                var r;
                m = k.offsetWidth - k.clientWidth + 5;
                l = k.offsetHeight - k.clientHeight + 5;
                r = n.getBoundingClientRect();
                a = r.left - m;
                b = r.top - l;
                m = r.right + m;
                l = r.bottom + l;
                r = k.getBoundingClientRect();
                b < r.top ? k.scrollTop -= r.top - b : l > r.bottom && (k.scrollTop += l - r.bottom);
                a < r.left ? k.scrollLeft -= r.left - a : m > r.right && (k.scrollLeft += m - r.right)
            }
        }
        E.isFocused !== G.isFocused &&
        q.markAsFocussed(G.isFocused);
        h();
        A = w = x = !1
    }

    function l(b) {
        p.parentNode.removeChild(p);
        a.parentNode.removeChild(a);
        b()
    }

    var p, n, q, e, a, m, g = f.getDocument().getCanvas(), z = new core.DomUtils, t = new gui.GuiStepUtils, v, y, s, x = !1, w = !1, A = !1, G = {isFocused: !1, isShown: !0, visibility: "hidden"}, E = {isFocused: !G.isFocused, isShown: !G.isShown, visibility: "hidden"};
    this.handleUpdate = function () {
        A = !0;
        "hidden" !== G.visibility && (G.visibility = "hidden", n.style.visibility = "hidden", f.getNode().removeAttributeNS("urn:webodf:names:cursor",
            "caret-sizer-active"));
        y.trigger()
    };
    this.refreshCursorBlinking = function () {
        x = !0;
        y.trigger()
    };
    this.setFocus = function () {
        G.isFocused = !0;
        y.trigger()
    };
    this.removeFocus = function () {
        G.isFocused = !1;
        y.trigger()
    };
    this.show = function () {
        G.isShown = !0;
        y.trigger()
    };
    this.hide = function () {
        G.isShown = !1;
        y.trigger()
    };
    this.setAvatarImageUrl = function (a) {
        q.setImageUrl(a)
    };
    this.setColor = function (a) {
        n.style.borderColor = a;
        q.setColor(a)
    };
    this.getCursor = function () {
        return f
    };
    this.getFocusElement = function () {
        return n
    };
    this.toggleHandleVisibility =
        function () {
            q.isVisible() ? q.hide() : q.show()
        };
    this.showHandle = function () {
        q.show()
    };
    this.hideHandle = function () {
        q.hide()
    };
    this.setOverlayElement = function (a) {
        e = a;
        p.appendChild(a);
        A = !0;
        y.trigger()
    };
    this.ensureVisible = function () {
        w = !0;
        y.trigger()
    };
    this.getBoundingClientRect = function () {
        return z.getBoundingClientRect(p)
    };
    this.destroy = function (a) {
        core.Async.destroyAll([y.destroy, s.destroy, q.destroy, l], a)
    };
    (function () {
        var e = f.getDocument(), c = [e.createRootFilter(f.getMemberId()), e.getPositionFilter()], d = e.getDOMDocument();
        m = d.createRange();
        a = d.createElement("span");
        a.className = "webodf-caretSizer";
        a.textContent = "|";
        f.getNode().appendChild(a);
        p = d.createElement("div");
        p.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", f.getMemberId());
        p.className = "webodf-caretOverlay";
        n = d.createElement("div");
        n.className = "caret";
        p.appendChild(n);
        q = new gui.Avatar(p, k);
        g.getSizer().appendChild(p);
        v = e.createStepIterator(f.getNode(), 0, c, e.getRootNode());
        y = core.Task.createRedrawTask(r);
        s = core.Task.createTimeoutTask(b, 500);
        y.triggerImmediate()
    })()
};
odf.TextSerializer = function () {
    function f(b) {
        var c = "", h = k.filter ? k.filter.acceptNode(b) : NodeFilter.FILTER_ACCEPT, r = b.nodeType, l;
        if ((h === NodeFilter.FILTER_ACCEPT || h === NodeFilter.FILTER_SKIP) && d.isTextContentContainingNode(b))for (l = b.firstChild; l;)c += f(l), l = l.nextSibling;
        h === NodeFilter.FILTER_ACCEPT && (r === Node.ELEMENT_NODE && d.isParagraph(b) ? c += "\n" : r === Node.TEXT_NODE && b.textContent && (c += b.textContent));
        return c
    }

    var k = this, d = new odf.OdfUtils;
    this.filter = null;
    this.writeToString = function (b) {
        if (!b)return"";
        b = f(b);
        "\n" === b[b.length - 1] && (b = b.substr(0, b.length - 1));
        return b
    }
};
gui.MimeDataExporter = function () {
    var f;
    this.exportRangeToDataTransfer = function (k, d) {
        var b;
        b = d.startContainer.ownerDocument.createElement("span");
        b.appendChild(d.cloneContents());
        b = f.writeToString(b);
        try {
            k.setData("text/plain", b)
        } catch (c) {
            k.setData("Text", b)
        }
    };
    f = new odf.TextSerializer;
    f.filter = new odf.OdfNodeFilter
};
gui.Clipboard = function (f) {
    this.setDataFromRange = function (k, d) {
        var b, c = k.clipboardData;
        b = runtime.getWindow();
        !c && b && (c = b.clipboardData);
        c ? (b = !0, f.exportRangeToDataTransfer(c, d), k.preventDefault()) : b = !1;
        return b
    }
};
gui.SessionContext = function (f, k) {
    var d = f.getOdtDocument(), b = new odf.OdfUtils;
    this.isLocalCursorWithinOwnAnnotation = function () {
        var c = d.getCursor(k), f;
        if (!c)return!1;
        f = c && c.getNode();
        c = d.getMember(k).getProperties().fullName;
        return(f = b.getParentAnnotation(f, d.getRootNode())) && b.getAnnotationCreator(f) === c ? !0 : !1
    }
};
gui.StyleSummary = function (f) {
    function k(b, d) {
        var k = b + "|" + d, p;
        c.hasOwnProperty(k) || (p = [], f.forEach(function (c) {
            c = (c = c.styleProperties[b]) && c[d];
            -1 === p.indexOf(c) && p.push(c)
        }), c[k] = p);
        return c[k]
    }

    function d(b, c, d) {
        return function () {
            var f = k(b, c);
            return d.length >= f.length && f.every(function (b) {
                return-1 !== d.indexOf(b)
            })
        }
    }

    function b(b, c) {
        var d = k(b, c);
        return 1 === d.length ? d[0] : void 0
    }

    var c = {};
    this.getPropertyValues = k;
    this.getCommonValue = b;
    this.isBold = d("style:text-properties", "fo:font-weight", ["bold"]);
    this.isItalic =
        d("style:text-properties", "fo:font-style", ["italic"]);
    this.hasUnderline = d("style:text-properties", "style:text-underline-style", ["solid"]);
    this.hasStrikeThrough = d("style:text-properties", "style:text-line-through-style", ["solid"]);
    this.fontSize = function () {
        var c = b("style:text-properties", "fo:font-size");
        return c && parseFloat(c)
    };
    this.fontName = function () {
        return b("style:text-properties", "style:font-name")
    };
    this.isAlignedLeft = d("style:paragraph-properties", "fo:text-align", ["left", "start"]);
    this.isAlignedCenter =
        d("style:paragraph-properties", "fo:text-align", ["center"]);
    this.isAlignedRight = d("style:paragraph-properties", "fo:text-align", ["right", "end"]);
    this.isAlignedJustified = d("style:paragraph-properties", "fo:text-align", ["justify"]);
    this.text = {isBold: this.isBold, isItalic: this.isItalic, hasUnderline: this.hasUnderline, hasStrikeThrough: this.hasStrikeThrough, fontSize: this.fontSize, fontName: this.fontName};
    this.paragraph = {isAlignedLeft: this.isAlignedLeft, isAlignedCenter: this.isAlignedCenter, isAlignedRight: this.isAlignedRight,
        isAlignedJustified: this.isAlignedJustified}
};
gui.DirectFormattingController = function (f, k, d, b, c, h, r) {
    function l() {
        return T.value().styleSummary
    }

    function p(a) {
        var b;
        a.collapsed ? (b = a.startContainer, b.hasChildNodes() && a.startOffset < b.childNodes.length && (b = b.childNodes.item(a.startOffset)), a = [b]) : a = $.getTextElements(a, !0, !1);
        return a
    }

    function n() {
        var a = u.getCursor(b), a = a && a.getSelectedRange(), e = [], e = [], c = !0;
        a && (e = p(a), 0 === e.length && (e = [a.startContainer, a.endContainer], c = !1), e = u.getFormatting().getAppliedStyles(e));
        void 0 !== e[0] && X && (e[0] = Y.mergeObjects(e[0],
            X));
        return{containsText: c, appliedStyles: e, styleSummary: new gui.StyleSummary(e)}
    }

    function q(a, b) {
        var e = {};
        Object.keys(a).forEach(function (c) {
            var d = a[c](), f = b[c]();
            d !== f && (e[c] = f)
        });
        return e
    }

    function e() {
        var a, b, e = l();
        a = q(C.text, e.text);
        b = q(C.paragraph, e.paragraph);
        C = e;
        0 < Object.keys(a).length && ea.emit(gui.DirectFormattingController.textStylingChanged, a);
        0 < Object.keys(b).length && ea.emit(gui.DirectFormattingController.paragraphStylingChanged, b)
    }

    function a() {
        var a = {directTextStyling: !0, directParagraphStyling: !0};
        !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) && (a.directTextStyling = a.directParagraphStyling = d.isLocalCursorWithinOwnAnnotation());
        a.directTextStyling && (a.directTextStyling = T.value().containsText);
        if (a.directTextStyling !== L.directTextStyling || a.directParagraphStyling !== L.directParagraphStyling)L = a, ea.emit(gui.DirectFormattingController.enabledChanged, L)
    }

    function m(e) {
        ("string" === typeof e ? e : e.getMemberId()) === b && (T.reset(), a())
    }

    function g() {
        T.reset()
    }

    function z(a) {
        var e = u.getCursor(b);
        a =
            a.paragraphElement;
        e && u.getParagraphElement(e.getNode()) === a && T.reset()
    }

    function t(a, b) {
        b(!a());
        return!0
    }

    function v(a) {
        if (L.directTextStyling) {
            var e = u.getCursorSelection(b), c = {"style:text-properties": a};
            0 !== e.length ? (a = new ops.OpApplyDirectStyling, a.init({memberid: b, position: e.position, length: e.length, setProperties: c}), f.enqueue([a])) : (X = Y.mergeObjects(X || {}, c), T.reset())
        }
    }

    function y(a, b) {
        var e = {};
        e[a] = b;
        v(e)
    }

    function s(a) {
        a = a.spec();
        X && a.memberid === b && "SplitParagraph" !== a.optype && (X = null, T.reset())
    }

    function x(a) {
        y("fo:font-weight", a ? "bold" : "normal")
    }

    function w(a) {
        y("fo:font-style", a ? "italic" : "normal")
    }

    function A(a) {
        y("style:text-underline-style", a ? "solid" : "none")
    }

    function G(a) {
        y("style:text-line-through-style", a ? "solid" : "none")
    }

    function E(a) {
        return a === ops.OdtStepsTranslator.NEXT_STEP
    }

    function F(a) {
        if (L.directParagraphStyling) {
            var e = u.getCursor(b).getSelectedRange(), e = $.getParagraphElements(e), d = u.getFormatting(), g = [], h = {}, k;
            e.forEach(function (e) {
                var f = u.convertDomPointToCursorStep(e, 0, E), m =
                    e.getAttributeNS(odf.Namespaces.textns, "style-name"), l;
                e = m ? h.hasOwnProperty(m) ? h[m] : void 0 : k;
                e || (e = c.generateStyleName(), m ? (h[m] = e, l = d.createDerivedStyleObject(m, "paragraph", {})) : (k = e, l = {}), l = a(l), m = new ops.OpAddStyle, m.init({memberid: b, styleName: e.toString(), styleFamily: "paragraph", isAutomaticStyle: !0, setProperties: l}), g.push(m));
                m = new ops.OpSetParagraphStyle;
                m.init({memberid: b, styleName: e.toString(), position: f});
                g.push(m)
            });
            f.enqueue(g)
        }
    }

    function H(a) {
        F(function (b) {
            return Y.mergeObjects(b, a)
        })
    }

    function N(a) {
        H({"style:paragraph-properties": {"fo:text-align": a}})
    }

    function I(a, b) {
        var e = u.getFormatting().getDefaultTabStopDistance(), c = b["style:paragraph-properties"], d;
        c && (c = c["fo:margin-left"], d = $.parseLength(c));
        return Y.mergeObjects(b, {"style:paragraph-properties": {"fo:margin-left": d && d.unit === e.unit ? d.value + a * e.value + d.unit : a * e.value + e.unit}})
    }

    function U(a, b) {
        var e = p(a), c = u.getFormatting().getAppliedStyles(e)[0].styleProperties, d = u.getFormatting().getAppliedStylesForElement(b).styleProperties;
        if (!c || "text" !== c["style:family"] || !c["style:text-properties"])return!1;
        if (!d || !d["style:text-properties"])return!0;
        c = c["style:text-properties"];
        d = d["style:text-properties"];
        return!Object.keys(c).every(function (a) {
            return c[a] === d[a]
        })
    }

    function B() {
    }

    function Z() {
        return!1
    }

    var Q = this, u = f.getOdtDocument(), Y = new core.Utils, $ = new odf.OdfUtils, ea = new core.EventNotifier([gui.DirectFormattingController.enabledChanged, gui.DirectFormattingController.textStylingChanged, gui.DirectFormattingController.paragraphStylingChanged]),
        D = odf.Namespaces.textns, P = core.PositionFilter.FilterResult.FILTER_ACCEPT, X, C, T, L = {directTextStyling: !1, directParagraphStyling: !1};
    this.enabledFeatures = function () {
        return L
    };
    this.formatTextSelection = v;
    this.createCursorStyleOp = function (a, e, c) {
        var d = null;
        (c = c ? T.value().appliedStyles[0] : X) && c["style:text-properties"] && (d = new ops.OpApplyDirectStyling, d.init({memberid: b, position: a, length: e, setProperties: {"style:text-properties": c["style:text-properties"]}}), X = null, T.reset());
        return d
    };
    this.setBold = x;
    this.setItalic =
        w;
    this.setHasUnderline = A;
    this.setHasStrikethrough = G;
    this.setFontSize = function (a) {
        y("fo:font-size", a + "pt")
    };
    this.setFontName = function (a) {
        y("style:font-name", a)
    };
    this.getAppliedStyles = function () {
        return T.value().appliedStyles
    };
    this.toggleBold = t.bind(Q, function () {
        return l().isBold()
    }, x);
    this.toggleItalic = t.bind(Q, function () {
        return l().isItalic()
    }, w);
    this.toggleUnderline = t.bind(Q, function () {
        return l().hasUnderline()
    }, A);
    this.toggleStrikethrough = t.bind(Q, function () {
        return l().hasStrikeThrough()
    }, G);
    this.isBold =
        function () {
            return l().isBold()
        };
    this.isItalic = function () {
        return l().isItalic()
    };
    this.hasUnderline = function () {
        return l().hasUnderline()
    };
    this.hasStrikeThrough = function () {
        return l().hasStrikeThrough()
    };
    this.fontSize = function () {
        return l().fontSize()
    };
    this.fontName = function () {
        return l().fontName()
    };
    this.isAlignedLeft = function () {
        return l().isAlignedLeft()
    };
    this.isAlignedCenter = function () {
        return l().isAlignedCenter()
    };
    this.isAlignedRight = function () {
        return l().isAlignedRight()
    };
    this.isAlignedJustified = function () {
        return l().isAlignedJustified()
    };
    this.alignParagraphLeft = function () {
        N("left");
        return!0
    };
    this.alignParagraphCenter = function () {
        N("center");
        return!0
    };
    this.alignParagraphRight = function () {
        N("right");
        return!0
    };
    this.alignParagraphJustified = function () {
        N("justify");
        return!0
    };
    this.indent = function () {
        F(I.bind(null, 1));
        return!0
    };
    this.outdent = function () {
        F(I.bind(null, -1));
        return!0
    };
    this.createParagraphStyleOps = function (a) {
        if (!L.directParagraphStyling)return[];
        var e = u.getCursor(b), d = e.getSelectedRange(), f = [], g, h;
        e.hasForwardSelection() ? (g = e.getAnchorNode(),
            h = e.getNode()) : (g = e.getNode(), h = e.getAnchorNode());
        e = u.getParagraphElement(h);
        runtime.assert(Boolean(e), "DirectFormattingController: Cursor outside paragraph");
        var m;
        a:{
            m = e;
            var k = gui.SelectionMover.createPositionIterator(m), l = new core.PositionFilterChain;
            l.addFilter(u.getPositionFilter());
            l.addFilter(u.createRootFilter(b));
            for (k.setUnfilteredPosition(d.endContainer, d.endOffset); k.nextPosition();)if (l.acceptPosition(k) === P) {
                m = u.getParagraphElement(k.getCurrentNode()) !== m;
                break a
            }
            m = !0
        }
        if (!m)return f;
        h !== g && (e = u.getParagraphElement(g));
        if (!X && !U(d, e))return f;
        d = T.value().appliedStyles[0];
        if (!d)return f;
        if (g = e.getAttributeNS(D, "style-name"))d = {"style:text-properties": d["style:text-properties"]}, d = u.getFormatting().createDerivedStyleObject(g, "paragraph", d);
        e = c.generateStyleName();
        g = new ops.OpAddStyle;
        g.init({memberid: b, styleName: e, styleFamily: "paragraph", isAutomaticStyle: !0, setProperties: d});
        f.push(g);
        g = new ops.OpSetParagraphStyle;
        g.init({memberid: b, styleName: e, position: a});
        f.push(g);
        return f
    };
    this.subscribe = function (a, b) {
        ea.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        ea.unsubscribe(a, b)
    };
    this.destroy = function (b) {
        u.unsubscribe(ops.Document.signalCursorAdded, m);
        u.unsubscribe(ops.Document.signalCursorRemoved, m);
        u.unsubscribe(ops.Document.signalCursorMoved, m);
        u.unsubscribe(ops.OdtDocument.signalParagraphStyleModified, g);
        u.unsubscribe(ops.OdtDocument.signalParagraphChanged, z);
        u.unsubscribe(ops.OdtDocument.signalOperationEnd, s);
        u.unsubscribe(ops.OdtDocument.signalProcessingBatchEnd, e);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE,
            a);
        b()
    };
    (function () {
        u.subscribe(ops.Document.signalCursorAdded, m);
        u.subscribe(ops.Document.signalCursorRemoved, m);
        u.subscribe(ops.Document.signalCursorMoved, m);
        u.subscribe(ops.OdtDocument.signalParagraphStyleModified, g);
        u.subscribe(ops.OdtDocument.signalParagraphChanged, z);
        u.subscribe(ops.OdtDocument.signalOperationEnd, s);
        u.subscribe(ops.OdtDocument.signalProcessingBatchEnd, e);
        k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, a);
        T = new core.LazyProperty(n);
        C = l();
        a();
        h || (Q.formatTextSelection = B, Q.setBold =
            B, Q.setItalic = B, Q.setHasUnderline = B, Q.setHasStrikethrough = B, Q.setFontSize = B, Q.setFontName = B, Q.toggleBold = Z, Q.toggleItalic = Z, Q.toggleUnderline = Z, Q.toggleStrikethrough = Z);
        r || (Q.alignParagraphCenter = B, Q.alignParagraphJustified = B, Q.alignParagraphLeft = B, Q.alignParagraphRight = B, Q.createParagraphStyleOps = function () {
            return[]
        }, Q.indent = B, Q.outdent = B)
    })()
};
gui.DirectFormattingController.enabledChanged = "enabled/changed";
gui.DirectFormattingController.textStylingChanged = "textStyling/changed";
gui.DirectFormattingController.paragraphStylingChanged = "paragraphStyling/changed";
gui.KeyboardHandler = function () {
    function f(b, d) {
        d || (d = k.None);
        switch (b) {
            case gui.KeyboardHandler.KeyCode.LeftMeta:
            case gui.KeyboardHandler.KeyCode.RightMeta:
            case gui.KeyboardHandler.KeyCode.MetaInMozilla:
                d |= k.Meta;
                break;
            case gui.KeyboardHandler.KeyCode.Ctrl:
                d |= k.Ctrl;
                break;
            case gui.KeyboardHandler.KeyCode.Alt:
                d |= k.Alt;
                break;
            case gui.KeyboardHandler.KeyCode.Shift:
                d |= k.Shift
        }
        return b + ":" + d
    }

    var k = gui.KeyboardHandler.Modifier, d = null, b = {};
    this.setDefault = function (b) {
        d = b
    };
    this.bind = function (c, d, k, l) {
        c = f(c,
            d);
        runtime.assert(l || !1 === b.hasOwnProperty(c), "tried to overwrite the callback handler of key combo: " + c);
        b[c] = k
    };
    this.unbind = function (c, d) {
        var k = f(c, d);
        delete b[k]
    };
    this.reset = function () {
        d = null;
        b = {}
    };
    this.handleEvent = function (c) {
        var h = c.keyCode, r = k.None;
        c.metaKey && (r |= k.Meta);
        c.ctrlKey && (r |= k.Ctrl);
        c.altKey && (r |= k.Alt);
        c.shiftKey && (r |= k.Shift);
        h = f(h, r);
        h = b[h];
        r = !1;
        h ? r = h() : null !== d && (r = d(c));
        r && (c.preventDefault ? c.preventDefault() : c.returnValue = !1)
    }
};
gui.KeyboardHandler.Modifier = {None: 0, Meta: 1, Ctrl: 2, Alt: 4, CtrlAlt: 6, Shift: 8, MetaShift: 9, CtrlShift: 10, AltShift: 12};
gui.KeyboardHandler.KeyCode = {Backspace: 8, Tab: 9, Clear: 12, Enter: 13, Shift: 16, Ctrl: 17, Alt: 18, End: 35, Home: 36, Left: 37, Up: 38, Right: 39, Down: 40, Delete: 46, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, LeftMeta: 91, RightMeta: 93, MetaInMozilla: 224};
gui.HyperlinkClickHandler = function (f, k, d) {
    function b() {
        var a = f();
        runtime.assert(Boolean(a.classList), "Document container has no classList element");
        a.classList.remove("webodf-inactiveLinks")
    }

    function c() {
        var a = f();
        runtime.assert(Boolean(a.classList), "Document container has no classList element");
        a.classList.add("webodf-inactiveLinks")
    }

    function h() {
        e.removeEventListener("focus", c, !1);
        m.forEach(function (a) {
            k.unbind(a.keyCode, a.modifier);
            d.unbind(a.keyCode, a.modifier)
        });
        m.length = 0
    }

    function r(a) {
        h();
        if (a !== l.None) {
            e.addEventListener("focus", c, !1);
            switch (a) {
                case l.Ctrl:
                    m.push({keyCode: p.Ctrl, modifier: l.None});
                    break;
                case l.Meta:
                    m.push({keyCode: p.LeftMeta, modifier: l.None}), m.push({keyCode: p.RightMeta, modifier: l.None}), m.push({keyCode: p.MetaInMozilla, modifier: l.None})
            }
            m.forEach(function (a) {
                k.bind(a.keyCode, a.modifier, b);
                d.bind(a.keyCode, a.modifier, c)
            })
        }
    }

    var l = gui.KeyboardHandler.Modifier, p = gui.KeyboardHandler.KeyCode, n = xmldom.XPath, q = new odf.OdfUtils, e = runtime.getWindow(), a = l.None, m = [];
    runtime.assert(null !==
        e, "Expected to be run in an environment which has a global window, like a browser.");
    this.handleClick = function (b) {
        var c = b.target || b.srcElement, d, h;
        b.ctrlKey ? d = l.Ctrl : b.metaKey && (d = l.Meta);
        if (a === l.None || a === d) {
            a:{
                for (; null !== c;) {
                    if (q.isHyperlink(c))break a;
                    if (q.isParagraph(c))break;
                    c = c.parentNode
                }
                c = null
            }
            c && (c = q.getHyperlinkTarget(c), "" !== c && ("#" === c[0] ? (c = c.substring(1), d = f(), h = n.getODFElementsWithXPath(d, "//text:bookmark-start[@text:name='" + c + "']", odf.Namespaces.lookupNamespaceURI), 0 === h.length &&
                (h = n.getODFElementsWithXPath(d, "//text:bookmark[@text:name='" + c + "']", odf.Namespaces.lookupNamespaceURI)), 0 < h.length && h[0].scrollIntoView(!0)) : e.open(c), b.preventDefault ? b.preventDefault() : b.returnValue = !1))
        }
    };
    this.setModifier = function (e) {
        a !== e && (runtime.assert(e === l.None || e === l.Ctrl || e === l.Meta, "Unsupported KeyboardHandler.Modifier value: " + e), a = e, a !== l.None ? c() : b(), r(a))
    };
    this.getModifier = function () {
        return a
    };
    this.destroy = function (a) {
        c();
        h();
        a()
    }
};
gui.EventManager = function (f) {
    function k(a) {
        function b(a, e, c) {
            var d, f = !1;
            d = "on" + e;
            a.attachEvent && (a.attachEvent(d, c), f = !0);
            !f && a.addEventListener && (a.addEventListener(e, c, !1), f = !0);
            f && !x[e] || !a.hasOwnProperty(d) || (a[d] = c)
        }

        function e(a, b, c) {
            var d = "on" + b;
            a.detachEvent && a.detachEvent(d, c);
            a.removeEventListener && a.removeEventListener(b, c, !1);
            a[d] === c && (a[d] = null)
        }

        function c(b) {
            if (-1 === f.indexOf(b)) {
                f.push(b);
                if (d.filters.every(function (a) {
                    return a(b)
                }))try {
                    g.emit(a, b)
                } catch (e) {
                    runtime.log("Error occurred while processing " +
                        a + ":\n" + e.message + "\n" + e.stack)
                }
                runtime.setTimeout(function () {
                    f.splice(f.indexOf(b), 1)
                }, 0)
            }
        }

        var d = this, f = [], g = new core.EventNotifier([a]);
        this.filters = [];
        this.subscribe = function (b) {
            g.subscribe(a, b)
        };
        this.unsubscribe = function (b) {
            g.unsubscribe(a, b)
        };
        this.destroy = function () {
            e(s, a, c);
            e(E, a, c);
            e(F, a, c)
        };
        w[a] && b(s, a, c);
        b(E, a, c);
        b(F, a, c)
    }

    function d(a, b, e) {
        function c(b) {
            e(b, d, function (b) {
                b.type = a;
                f.emit(a, b)
            })
        }

        var d = {}, f = new core.EventNotifier([a]);
        this.subscribe = function (b) {
            f.subscribe(a, b)
        };
        this.unsubscribe =
            function (b) {
                f.unsubscribe(a, b)
            };
        this.destroy = function () {
            b.forEach(function (a) {
                H.unsubscribe(a, c)
            })
        };
        (function () {
            b.forEach(function (a) {
                H.subscribe(a, c)
            })
        })()
    }

    function b(a) {
        runtime.clearTimeout(a);
        delete N[a]
    }

    function c(a, e) {
        var c = runtime.setTimeout(function () {
            a();
            b(c)
        }, e);
        N[c] = !0;
        return c
    }

    function h(a, e, d) {
        var f = a.touches.length, g = a.touches[0], h = e.timer;
        "touchmove" === a.type || "touchend" === a.type ? h && b(h) : "touchstart" === a.type && (1 !== f ? runtime.clearTimeout(h) : h = c(function () {
            d({clientX: g.clientX, clientY: g.clientY,
                pageX: g.pageX, pageY: g.pageY, target: a.target || a.srcElement || null, detail: 1})
        }, 400));
        e.timer = h
    }

    function r(a, b, e) {
        var c = a.touches[0], d = a.target || a.srcElement || null, f = b.target;
        1 !== a.touches.length || "touchend" === a.type ? f = null : "touchstart" === a.type && "webodf-draggable" === d.getAttribute("class") ? f = d : "touchmove" === a.type && f && (a.preventDefault(), a.stopPropagation(), e({clientX: c.clientX, clientY: c.clientY, pageX: c.pageX, pageY: c.pageY, target: f, detail: 1}));
        b.target = f
    }

    function l(a, b, e) {
        var c = a.target || a.srcElement ||
            null, d = b.dragging;
        "drag" === a.type ? d = !0 : "touchend" === a.type && d && (d = !1, a = a.changedTouches[0], e({clientX: a.clientX, clientY: a.clientY, pageX: a.pageX, pageY: a.pageY, target: c, detail: 1}));
        b.dragging = d
    }

    function p() {
        F.classList.add("webodf-touchEnabled");
        H.unsubscribe("touchstart", p)
    }

    function n(a) {
        var b = a.scrollX, e = a.scrollY;
        this.restore = function () {
            a.scrollX === b && a.scrollY === e || a.scrollTo(b, e)
        }
    }

    function q(a) {
        var b = a.scrollTop, e = a.scrollLeft;
        this.restore = function () {
            if (a.scrollTop !== b || a.scrollLeft !== e)a.scrollTop =
                b, a.scrollLeft = e
        }
    }

    function e(a, b) {
        var e = G[a] || A[a] || null;
        !e && b && (e = G[a] = new k(a));
        return e
    }

    function a(a, b) {
        e(a, !0).subscribe(b)
    }

    function m(a, b) {
        var c = e(a, !1);
        c && c.unsubscribe(b)
    }

    function g() {
        return f.getDOMDocument().activeElement === E
    }

    function z() {
        g() && E.blur();
        E.setAttribute("disabled", "true")
    }

    function t() {
        E.removeAttribute("disabled")
    }

    function v(a) {
        for (var b = []; a;)(a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight) && b.push(new q(a)), a = a.parentNode;
        b.push(new n(s));
        return b
    }

    function y() {
        var a;
        g() || (a = v(E), t(), E.focus(), a.forEach(function (a) {
            a.restore()
        }))
    }

    var s = runtime.getWindow(), x = {beforecut: !0, beforepaste: !0, longpress: !0, drag: !0, dragstop: !0}, w = {mousedown: !0, mouseup: !0, focus: !0}, A = {}, G = {}, E, F = f.getCanvas().getElement(), H = this, N = {};
    this.addFilter = function (a, b) {
        e(a, !0).filters.push(b)
    };
    this.removeFilter = function (a, b) {
        var c = e(a, !0), d = c.filters.indexOf(b);
        -1 !== d && c.filters.splice(d, 1)
    };
    this.subscribe = a;
    this.unsubscribe = m;
    this.hasFocus = g;
    this.focus = y;
    this.getEventTrap = function () {
        return E
    };
    this.setEditing = function (a) {
        var b = g();
        b && E.blur();
        a ? E.removeAttribute("readOnly") : E.setAttribute("readOnly", "true");
        b && y()
    };
    this.destroy = function (a) {
        m("touchstart", p);
        Object.keys(N).forEach(function (a) {
            b(parseInt(a, 10))
        });
        N.length = 0;
        Object.keys(A).forEach(function (a) {
            A[a].destroy()
        });
        A = {};
        m("mousedown", z);
        m("mouseup", t);
        m("contextmenu", t);
        Object.keys(G).forEach(function (a) {
            G[a].destroy()
        });
        G = {};
        E.parentNode.removeChild(E);
        a()
    };
    (function () {
        var b = f.getOdfCanvas().getSizer(), e = b.ownerDocument;
        runtime.assert(Boolean(s),
            "EventManager requires a window object to operate correctly");
        E = e.createElement("input");
        E.id = "eventTrap";
        E.setAttribute("tabindex", "-1");
        E.setAttribute("readOnly", "true");
        b.appendChild(E);
        a("mousedown", z);
        a("mouseup", t);
        a("contextmenu", t);
        A.longpress = new d("longpress", ["touchstart", "touchmove", "touchend"], h);
        A.drag = new d("drag", ["touchstart", "touchmove", "touchend"], r);
        A.dragstop = new d("dragstop", ["drag", "touchend"], l);
        a("touchstart", p)
    })()
};
gui.IOSSafariSupport = function (f) {
    function k() {
        d.innerHeight !== d.outerHeight && (b.style.display = "none", runtime.requestAnimationFrame(function () {
            b.style.display = "block"
        }))
    }

    var d = runtime.getWindow(), b = f.getEventTrap();
    this.destroy = function (c) {
        f.unsubscribe("focus", k);
        b.removeAttribute("autocapitalize");
        b.style.WebkitTransform = "";
        c()
    };
    f.subscribe("focus", k);
    b.setAttribute("autocapitalize", "off");
    b.style.WebkitTransform = "translateX(-10000px)"
};
gui.HyperlinkController = function (f, k, d, b) {
    function c() {
        var b = !0;
        !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) && (b = d.isLocalCursorWithinOwnAnnotation());
        b !== n && (n = b, p.emit(gui.HyperlinkController.enabledChanged, n))
    }

    function h(d) {
        d.getMemberId() === b && c()
    }

    var r = new odf.OdfUtils, l = f.getOdtDocument(), p = new core.EventNotifier([gui.HyperlinkController.enabledChanged]), n = !1;
    this.isEnabled = function () {
        return n
    };
    this.subscribe = function (b, e) {
        p.subscribe(b, e)
    };
    this.unsubscribe = function (b, e) {
        p.unsubscribe(b,
            e)
    };
    this.addHyperlink = function (c, e) {
        if (n) {
            var a = l.getCursorSelection(b), d = new ops.OpApplyHyperlink, g = [];
            if (0 === a.length || e)e = e || c, d = new ops.OpInsertText, d.init({memberid: b, position: a.position, text: e}), a.length = e.length, g.push(d);
            d = new ops.OpApplyHyperlink;
            d.init({memberid: b, position: a.position, length: a.length, hyperlink: c});
            g.push(d);
            f.enqueue(g)
        }
    };
    this.removeHyperlinks = function () {
        if (n) {
            var c = gui.SelectionMover.createPositionIterator(l.getRootNode()), e = l.getCursor(b).getSelectedRange(), a = r.getHyperlinkElements(e),
                d = e.collapsed && 1 === a.length, g = l.getDOMDocument().createRange(), h = [], k, p;
            0 !== a.length && (a.forEach(function (a) {
                g.selectNodeContents(a);
                k = l.convertDomToCursorRange({anchorNode: g.startContainer, anchorOffset: g.startOffset, focusNode: g.endContainer, focusOffset: g.endOffset});
                p = new ops.OpRemoveHyperlink;
                p.init({memberid: b, position: k.position, length: k.length});
                h.push(p)
            }), d || (d = a[0], -1 === e.comparePoint(d, 0) && (g.setStart(d, 0), g.setEnd(e.startContainer, e.startOffset), k = l.convertDomToCursorRange({anchorNode: g.startContainer,
                anchorOffset: g.startOffset, focusNode: g.endContainer, focusOffset: g.endOffset}), 0 < k.length && (p = new ops.OpApplyHyperlink, p.init({memberid: b, position: k.position, length: k.length, hyperlink: r.getHyperlinkTarget(d)}), h.push(p))), a = a[a.length - 1], c.moveToEndOfNode(a), c = c.unfilteredDomOffset(), 1 === e.comparePoint(a, c) && (g.setStart(e.endContainer, e.endOffset), g.setEnd(a, c), k = l.convertDomToCursorRange({anchorNode: g.startContainer, anchorOffset: g.startOffset, focusNode: g.endContainer, focusOffset: g.endOffset}), 0 < k.length &&
                (p = new ops.OpApplyHyperlink, p.init({memberid: b, position: k.position, length: k.length, hyperlink: r.getHyperlinkTarget(a)}), h.push(p)))), f.enqueue(h), g.detach())
        }
    };
    this.destroy = function (b) {
        l.unsubscribe(ops.Document.signalCursorMoved, h);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, c);
        b()
    };
    l.subscribe(ops.Document.signalCursorMoved, h);
    k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, c);
    c()
};
gui.HyperlinkController.enabledChanged = "enabled/changed";
gui.ImageController = function (f, k, d, b, c) {
    function h() {
        var b = !0;
        !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) && (b = d.isLocalCursorWithinOwnAnnotation());
        b !== a && (a = b, e.emit(gui.ImageController.enabledChanged, a))
    }

    function r(a) {
        a.getMemberId() === b && h()
    }

    var l = {"image/gif": ".gif", "image/jpeg": ".jpg", "image/png": ".png"}, p = odf.Namespaces.textns, n = f.getOdtDocument(), q = n.getFormatting(), e = new core.EventNotifier([gui.HyperlinkController.enabledChanged]), a = !1;
    this.isEnabled = function () {
        return a
    };
    this.subscribe =
        function (a, b) {
            e.subscribe(a, b)
        };
    this.unsubscribe = function (a, b) {
        e.unsubscribe(a, b)
    };
    this.insertImage = function (e, d, h, k) {
        if (a) {
            runtime.assert(0 < h && 0 < k, "Both width and height of the image should be greater than 0px.");
            k = {width: h, height: k};
            if (h = n.getParagraphElement(n.getCursor(b).getNode()).getAttributeNS(p, "style-name")) {
                h = q.getContentSize(h, "paragraph");
                var r = 1, y = 1;
                k.width > h.width && (r = h.width / k.width);
                k.height > h.height && (y = h.height / k.height);
                h = Math.min(r, y);
                k = {width: k.width * h, height: k.height * h}
            }
            h = k.width +
                "px";
            k = k.height + "px";
            var s = n.getOdfCanvas().odfContainer().rootElement.styles, r = e.toLowerCase(), y = l.hasOwnProperty(r) ? l[r] : null, x, r = [];
            runtime.assert(null !== y, "Image type is not supported: " + e);
            y = "Pictures/" + c.generateImageName() + y;
            x = new ops.OpSetBlob;
            x.init({memberid: b, filename: y, mimetype: e, content: d});
            r.push(x);
            q.getStyleElement("Graphics", "graphic", [s]) || (e = new ops.OpAddStyle, e.init({memberid: b, styleName: "Graphics", styleFamily: "graphic", isAutomaticStyle: !1, setProperties: {"style:graphic-properties": {"text:anchor-type": "paragraph",
                "svg:x": "0cm", "svg:y": "0cm", "style:wrap": "dynamic", "style:number-wrapped-paragraphs": "no-limit", "style:wrap-contour": "false", "style:vertical-pos": "top", "style:vertical-rel": "paragraph", "style:horizontal-pos": "center", "style:horizontal-rel": "paragraph"}}}), r.push(e));
            e = c.generateStyleName();
            d = new ops.OpAddStyle;
            d.init({memberid: b, styleName: e, styleFamily: "graphic", isAutomaticStyle: !0, setProperties: {"style:parent-style-name": "Graphics", "style:graphic-properties": {"style:vertical-pos": "top", "style:vertical-rel": "baseline",
                "style:horizontal-pos": "center", "style:horizontal-rel": "paragraph", "fo:background-color": "transparent", "style:background-transparency": "100%", "style:shadow": "none", "style:mirror": "none", "fo:clip": "rect(0cm, 0cm, 0cm, 0cm)", "draw:luminance": "0%", "draw:contrast": "0%", "draw:red": "0%", "draw:green": "0%", "draw:blue": "0%", "draw:gamma": "100%", "draw:color-inversion": "false", "draw:image-opacity": "100%", "draw:color-mode": "standard"}}});
            r.push(d);
            x = new ops.OpInsertImage;
            x.init({memberid: b, position: n.getCursorPosition(b),
                filename: y, frameWidth: h, frameHeight: k, frameStyleName: e, frameName: c.generateFrameName()});
            r.push(x);
            f.enqueue(r)
        }
    };
    this.destroy = function (a) {
        n.unsubscribe(ops.Document.signalCursorMoved, r);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, h);
        a()
    };
    n.subscribe(ops.Document.signalCursorMoved, r);
    k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, h);
    h()
};
gui.ImageController.enabledChanged = "enabled/changed";
gui.ImageSelector = function (f) {
    function k() {
        var d = f.getSizer(), h = c.createElement("div");
        h.id = "imageSelector";
        h.style.borderWidth = "1px";
        d.appendChild(h);
        b.forEach(function (b) {
            var d = c.createElement("div");
            d.className = b;
            h.appendChild(d)
        });
        return h
    }

    var d = odf.Namespaces.svgns, b = "topLeft topRight bottomRight bottomLeft topMiddle rightMiddle bottomMiddle leftMiddle".split(" "), c = f.getElement().ownerDocument, h = !1;
    this.select = function (b) {
        var l, p, n = c.getElementById("imageSelector");
        n || (n = k());
        h = !0;
        l = n.parentNode;
        p = b.getBoundingClientRect();
        var q = l.getBoundingClientRect(), e = f.getZoomLevel();
        l = (p.left - q.left) / e - 1;
        p = (p.top - q.top) / e - 1;
        n.style.display = "block";
        n.style.left = l + "px";
        n.style.top = p + "px";
        n.style.width = b.getAttributeNS(d, "width");
        n.style.height = b.getAttributeNS(d, "height")
    };
    this.clearSelection = function () {
        var b;
        h && (b = c.getElementById("imageSelector")) && (b.style.display = "none");
        h = !1
    };
    this.isSelectorElement = function (b) {
        var d = c.getElementById("imageSelector");
        return d ? b === d || b.parentNode === d : !1
    }
};
(function () {
    function f(f) {
        function d(b) {
            r = b.which && String.fromCharCode(b.which) === h;
            h = void 0;
            return!1 === r
        }

        function b() {
            r = !1
        }

        function c(b) {
            h = b.data;
            r = !1
        }

        var h, r = !1;
        this.destroy = function (h) {
            f.unsubscribe("textInput", b);
            f.unsubscribe("compositionend", c);
            f.removeFilter("keypress", d);
            h()
        };
        f.subscribe("textInput", b);
        f.subscribe("compositionend", c);
        f.addFilter("keypress", d)
    }

    gui.InputMethodEditor = function (k, d) {
        function b(b) {
            a && (b ? a.getNode().setAttributeNS(e, "composing", "true") : (a.getNode().removeAttributeNS(e,
                "composing"), z.textContent = ""))
        }

        function c() {
            y && (y = !1, b(!1), x.emit(gui.InputMethodEditor.signalCompositionEnd, {data: s}), s = "")
        }

        function h() {
            c();
            a && a.getSelectedRange().collapsed ? m.value = "" : m.value = t;
            m.setSelectionRange(0, m.value.length)
        }

        function r() {
            d.hasFocus() && v.trigger()
        }

        function l() {
            w = void 0;
            v.cancel();
            b(!0);
            y || x.emit(gui.InputMethodEditor.signalCompositionStart, {data: ""})
        }

        function p(a) {
            a = w = a.data;
            y = !0;
            s += a;
            v.trigger()
        }

        function n(a) {
            a.data !== w && (a = a.data, y = !0, s += a, v.trigger());
            w = void 0
        }

        function q() {
            z.textContent =
                m.value
        }

        var e = "urn:webodf:names:cursor", a = null, m = d.getEventTrap(), g = m.ownerDocument, z, t = "b", v, y = !1, s = "", x = new core.EventNotifier([gui.InputMethodEditor.signalCompositionStart, gui.InputMethodEditor.signalCompositionEnd]), w, A = [], G;
        this.subscribe = x.subscribe;
        this.unsubscribe = x.unsubscribe;
        this.registerCursor = function (b) {
            b.getMemberId() === k && (a = b, a.getNode().appendChild(z), b.subscribe(ops.OdtCursor.signalCursorUpdated, r), d.subscribe("input", q), d.subscribe("compositionupdate", q))
        };
        this.removeCursor = function (b) {
            a &&
                b === k && (a.getNode().removeChild(z), a.unsubscribe(ops.OdtCursor.signalCursorUpdated, r), d.unsubscribe("input", q), d.unsubscribe("compositionupdate", q), a = null)
        };
        this.destroy = function (a) {
            d.unsubscribe("compositionstart", l);
            d.unsubscribe("compositionend", p);
            d.unsubscribe("textInput", n);
            d.unsubscribe("keypress", c);
            d.unsubscribe("focus", h);
            core.Async.destroyAll(G, a)
        };
        (function () {
            d.subscribe("compositionstart", l);
            d.subscribe("compositionend", p);
            d.subscribe("textInput", n);
            d.subscribe("keypress", c);
            d.subscribe("focus",
                h);
            A.push(new f(d));
            G = A.map(function (a) {
                return a.destroy
            });
            z = g.createElement("span");
            z.setAttribute("id", "composer");
            v = core.Task.createTimeoutTask(h, 1);
            G.push(v.destroy)
        })()
    };
    gui.InputMethodEditor.signalCompositionStart = "input/compositionstart";
    gui.InputMethodEditor.signalCompositionEnd = "input/compositionend"
})();
gui.MetadataController = function (f, k) {
    function d(b) {
        h.emit(gui.MetadataController.signalMetadataChanged, b)
    }

    function b(b) {
        var c = -1 === r.indexOf(b);
        c || runtime.log("Setting " + b + " is restricted.");
        return c
    }

    var c = f.getOdtDocument(), h = new core.EventNotifier([gui.MetadataController.signalMetadataChanged]), r = ["dc:creator", "dc:date", "meta:editing-cycles", "meta:editing-duration", "meta:document-statistic"];
    this.setMetadata = function (c, d) {
        var h = {}, r = "", e;
        c && Object.keys(c).filter(b).forEach(function (a) {
            h[a] = c[a]
        });
        d && (r = d.filter(b).join(","));
        if (0 < r.length || 0 < Object.keys(h).length)e = new ops.OpUpdateMetadata, e.init({memberid: k, setProperties: h, removedProperties: 0 < r.length ? {attributes: r} : null}), f.enqueue([e])
    };
    this.getMetadata = function (b) {
        var d;
        runtime.assert("string" === typeof b, "Property must be a string");
        d = b.split(":");
        runtime.assert(2 === d.length, "Property must be a namespace-prefixed string");
        b = odf.Namespaces.lookupNamespaceURI(d[0]);
        runtime.assert(Boolean(b), "Prefix must be for an ODF namespace.");
        return c.getOdfCanvas().odfContainer().getMetadata(b,
            d[1])
    };
    this.subscribe = function (b, c) {
        h.subscribe(b, c)
    };
    this.unsubscribe = function (b, c) {
        h.unsubscribe(b, c)
    };
    this.destroy = function (b) {
        c.unsubscribe(ops.OdtDocument.signalMetadataUpdated, d);
        b()
    };
    c.subscribe(ops.OdtDocument.signalMetadataUpdated, d)
};
gui.MetadataController.signalMetadataChanged = "metadata/changed";
gui.PasteController = function (f, k, d, b) {
    function c() {
        p = !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) ? d.isLocalCursorWithinOwnAnnotation() : !0
    }

    function h(d) {
        d.getMemberId() === b && c()
    }

    function r(b) {
        return b === ops.OdtStepsTranslator.NEXT_STEP
    }

    var l = f.getOdtDocument(), p = !1, n = odf.Namespaces.textns;
    this.isEnabled = function () {
        return p
    };
    this.paste = function (c) {
        if (p) {
            var e = l.getCursorPosition(b), a = l.getCursor(b).getNode(), a = l.getParagraphElement(a), d = a.getAttributeNS(n, "style-name") || "", g = e, h = [], k = l.convertDomPointToCursorStep(a,
                0, r);
            c.replace(/\r/g, "").split("\n").forEach(function (a) {
                var e = new ops.OpInsertText, c = new ops.OpSplitParagraph;
                e.init({memberid: b, position: g, text: a, moveCursor: !0});
                h.push(e);
                g += a.length;
                c.init({memberid: b, position: g, paragraphStyleName: d, sourceParagraphPosition: k, moveCursor: !0});
                h.push(c);
                k = g += 1
            });
            h.pop();
            f.enqueue(h)
        }
    };
    this.destroy = function (b) {
        l.unsubscribe(ops.Document.signalCursorMoved, h);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, c);
        b()
    };
    l.subscribe(ops.Document.signalCursorMoved, h);
    k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, c);
    c()
};
gui.ClosestXOffsetScanner = function (f) {
    function k(b) {
        return null !== b && void 0 !== c ? Math.abs(b - f) > c : !1
    }

    function d(b) {
        null !== b && !1 === k(b) && (c = Math.abs(b - f))
    }

    var b = this, c, h = gui.StepInfo.VisualDirection.LEFT_TO_RIGHT;
    this.token = void 0;
    this.process = function (c, f, p) {
        var n, q;
        c.visualDirection === h ? (n = f && f.right, q = p && p.left) : (n = f && f.left, q = p && p.right);
        if (k(n) || k(q))return!0;
        if (f || p)d(n), d(q), b.token = c.token;
        return!1
    }
};
gui.LineBoundaryScanner = function () {
    var f = this, k = null;
    this.token = void 0;
    this.process = function (d, b, c) {
        var h;
        if (h = c)if (k) {
            var r = k;
            h = Math.min(r.bottom - r.top, c.bottom - c.top);
            var l = Math.max(r.top, c.top), r = Math.min(r.bottom, c.bottom) - l;
            h = 0.4 >= (0 < h ? r / h : 0)
        } else h = !1;
        if (h)return!0;
        b && !c && (f.token = d.token);
        k = (d = k) && b ? {left: Math.min(d.left, b.left), right: Math.max(d.right, b.right), top: Math.min(d.top, b.top), bottom: Math.min(d.bottom, b.bottom)} : d || b;
        return!1
    }
};
gui.ParagraphBoundaryScanner = function () {
    var f = this, k = !1, d, b = new odf.OdfUtils;
    this.token = void 0;
    this.process = function (c) {
        var h = b.getParagraphElement(c.container());
        k || (d = h, k = !0);
        if (d !== h)return!0;
        f.token = c.token;
        return!1
    }
};
odf.WordBoundaryFilter = function (f, k) {
    function d(a, b, e) {
        for (var c = null, d = f.getRootNode(), h; a !== d && null !== a && null === c;)h = 0 > b ? a.previousSibling : a.nextSibling, e(h) === NodeFilter.FILTER_ACCEPT && (c = h), a = a.parentNode;
        return c
    }

    function b(a, b) {
        var e;
        return null === a ? m.NO_NEIGHBOUR : r.isCharacterElement(a) ? m.SPACE_CHAR : a.nodeType === c || r.isTextSpan(a) || r.isHyperlink(a) ? (e = a.textContent.charAt(b()), p.test(e) ? m.SPACE_CHAR : l.test(e) ? m.PUNCTUATION_CHAR : m.WORD_CHAR) : m.OTHER
    }

    var c = Node.TEXT_NODE, h = Node.ELEMENT_NODE,
        r = new odf.OdfUtils, l = /[!-#%-*,-\/:-;?-@\[-\]_{}\u00a1\u00ab\u00b7\u00bb\u00bf;\u00b7\u055a-\u055f\u0589-\u058a\u05be\u05c0\u05c3\u05c6\u05f3-\u05f4\u0609-\u060a\u060c-\u060d\u061b\u061e-\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0964-\u0965\u0970\u0df4\u0e4f\u0e5a-\u0e5b\u0f04-\u0f12\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u104a-\u104f\u10fb\u1361-\u1368\u166d-\u166e\u169b-\u169c\u16eb-\u16ed\u1735-\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944-\u1945\u19de-\u19df\u1a1e-\u1a1f\u1b5a-\u1b60\u1c3b-\u1c3f\u1c7e-\u1c7f\u2000-\u206e\u207d-\u207e\u208d-\u208e\u3008-\u3009\u2768-\u2775\u27c5-\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc-\u29fd\u2cf9-\u2cfc\u2cfe-\u2cff\u2e00-\u2e7e\u3000-\u303f\u30a0\u30fb\ua60d-\ua60f\ua673\ua67e\ua874-\ua877\ua8ce-\ua8cf\ua92e-\ua92f\ua95f\uaa5c-\uaa5f\ufd3e-\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a-\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a-\uff1b\uff1f-\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]|\ud800[\udd00-\udd01\udf9f\udfd0]|\ud802[\udd1f\udd3f\ude50-\ude58]|\ud809[\udc00-\udc7e]/,
        p = /\s/, n = core.PositionFilter.FilterResult.FILTER_ACCEPT, q = core.PositionFilter.FilterResult.FILTER_REJECT, e = odf.WordBoundaryFilter.IncludeWhitespace.TRAILING, a = odf.WordBoundaryFilter.IncludeWhitespace.LEADING, m = {NO_NEIGHBOUR: 0, SPACE_CHAR: 1, PUNCTUATION_CHAR: 2, WORD_CHAR: 3, OTHER: 4};
    this.acceptPosition = function (c) {
        var f = c.container(), l = c.leftNode(), r = c.rightNode(), p = c.unfilteredDomOffset, s = function () {
            return c.unfilteredDomOffset() - 1
        };
        f.nodeType === h && (null === r && (r = d(f, 1, c.getNodeFilter())), null === l && (l =
            d(f, -1, c.getNodeFilter())));
        f !== r && (p = function () {
            return 0
        });
        f !== l && null !== l && (s = function () {
            return l.textContent.length - 1
        });
        f = b(l, s);
        r = b(r, p);
        return f === m.WORD_CHAR && r === m.WORD_CHAR || f === m.PUNCTUATION_CHAR && r === m.PUNCTUATION_CHAR || k === e && f !== m.NO_NEIGHBOUR && r === m.SPACE_CHAR || k === a && f === m.SPACE_CHAR && r !== m.NO_NEIGHBOUR ? q : n
    }
};
odf.WordBoundaryFilter.IncludeWhitespace = {None: 0, TRAILING: 1, LEADING: 2};
gui.SelectionController = function (f, k) {
    function d(a) {
        var b = a.spec();
        if (a.isEdit || b.memberid === k)G = void 0, E.cancel()
    }

    function b() {
        var a = t.getCursor(k).getNode();
        return t.createStepIterator(a, 0, [s, w], t.getRootElement(a))
    }

    function c(a, b, e) {
        e = new odf.WordBoundaryFilter(t, e);
        var c = t.getRootElement(a) || t.getRootNode(), d = t.createRootFilter(c);
        return t.createStepIterator(a, b, [s, d, e], c)
    }

    function h(a, b) {
        return b ? {anchorNode: a.startContainer, anchorOffset: a.startOffset, focusNode: a.endContainer, focusOffset: a.endOffset} :
        {anchorNode: a.endContainer, anchorOffset: a.endOffset, focusNode: a.startContainer, focusOffset: a.startOffset}
    }

    function r(a, b, e) {
        var c = new ops.OpMoveCursor;
        c.init({memberid: k, position: a, length: b || 0, selectionType: e});
        return c
    }

    function l(a, b, e) {
        var c;
        c = t.getCursor(k);
        c = h(c.getSelectedRange(), c.hasForwardSelection());
        c.focusNode = a;
        c.focusOffset = b;
        e || (c.anchorNode = c.focusNode, c.anchorOffset = c.focusOffset);
        a = t.convertDomToCursorRange(c);
        f.enqueue([r(a.position, a.length)])
    }

    function p(a) {
        var b;
        b = c(a.startContainer,
            a.startOffset, F);
        b.roundToPreviousStep() && a.setStart(b.container(), b.offset());
        b = c(a.endContainer, a.endOffset, H);
        b.roundToNextStep() && a.setEnd(b.container(), b.offset())
    }

    function n(a) {
        var b = y.getParagraphElements(a), e = b[0], b = b[b.length - 1];
        e && a.setStart(e, 0);
        b && (y.isParagraph(a.endContainer) && 0 === a.endOffset ? a.setEndBefore(b) : a.setEnd(b, b.childNodes.length))
    }

    function q(a, b, e, c) {
        var d, f;
        c ? (d = e.startContainer, f = e.startOffset) : (d = e.endContainer, f = e.endOffset);
        v.containsNode(a, d) || (f = 0 > v.comparePoints(a,
            0, d, f) ? 0 : a.childNodes.length, d = a);
        a = t.createStepIterator(d, f, b, y.getParagraphElement(d) || a);
        a.roundToClosestStep() || runtime.assert(!1, "No step found in requested range");
        c ? e.setStart(a.container(), a.offset()) : e.setEnd(a.container(), a.offset())
    }

    function e(a, e) {
        var c = b();
        c.advanceStep(a) && l(c.container(), c.offset(), e)
    }

    function a(a, e) {
        var c, d = G, f = [new gui.LineBoundaryScanner, new gui.ParagraphBoundaryScanner];
        void 0 === d && A && (d = A());
        isNaN(d) || (c = b(), x.moveToFilteredStep(c, a, f) && c.advanceStep(a) && (f = [new gui.ClosestXOffsetScanner(d),
            new gui.LineBoundaryScanner, new gui.ParagraphBoundaryScanner], x.moveToFilteredStep(c, a, f) && (l(c.container(), c.offset(), e), G = d, E.restart())))
    }

    function m(a, e) {
        var c = b(), d = [new gui.LineBoundaryScanner, new gui.ParagraphBoundaryScanner];
        x.moveToFilteredStep(c, a, d) && l(c.container(), c.offset(), e)
    }

    function g(a, b) {
        var e = t.getCursor(k), e = h(e.getSelectedRange(), e.hasForwardSelection()), e = c(e.focusNode, e.focusOffset, F);
        e.advanceStep(a) && l(e.container(), e.offset(), b)
    }

    function z(a, b, e) {
        var c = !1, d = t.getCursor(k),
            d = h(d.getSelectedRange(), d.hasForwardSelection()), c = t.getRootElement(d.focusNode);
        runtime.assert(Boolean(c), "SelectionController: Cursor outside root");
        d = t.createStepIterator(d.focusNode, d.focusOffset, [s, w], c);
        d.roundToClosestStep();
        d.advanceStep(a) && (e = e(d.container())) && (a === N ? (d.setPosition(e, 0), c = d.roundToNextStep()) : (d.setPosition(e, e.childNodes.length), c = d.roundToPreviousStep()), c && l(d.container(), d.offset(), b))
    }

    var t = f.getOdtDocument(), v = new core.DomUtils, y = new odf.OdfUtils, s = t.getPositionFilter(),
        x = new gui.GuiStepUtils, w = t.createRootFilter(k), A = null, G, E, F = odf.WordBoundaryFilter.IncludeWhitespace.TRAILING, H = odf.WordBoundaryFilter.IncludeWhitespace.LEADING, N = core.StepDirection.PREVIOUS, I = core.StepDirection.NEXT;
    this.selectionToRange = function (a) {
        var b = 0 <= v.comparePoints(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset), e = a.focusNode.ownerDocument.createRange();
        b ? (e.setStart(a.anchorNode, a.anchorOffset), e.setEnd(a.focusNode, a.focusOffset)) : (e.setStart(a.focusNode, a.focusOffset), e.setEnd(a.anchorNode,
            a.anchorOffset));
        return{range: e, hasForwardSelection: b}
    };
    this.rangeToSelection = h;
    this.selectImage = function (a) {
        var b = t.getRootElement(a), e = t.createRootFilter(b), b = t.createStepIterator(a, 0, [e, t.getPositionFilter()], b), c;
        b.roundToPreviousStep() || runtime.assert(!1, "No walkable position before frame");
        e = b.container();
        c = b.offset();
        b.setPosition(a, a.childNodes.length);
        b.roundToNextStep() || runtime.assert(!1, "No walkable position after frame");
        a = t.convertDomToCursorRange({anchorNode: e, anchorOffset: c, focusNode: b.container(),
            focusOffset: b.offset()});
        a = r(a.position, a.length, ops.OdtCursor.RegionSelection);
        f.enqueue([a])
    };
    this.expandToWordBoundaries = p;
    this.expandToParagraphBoundaries = n;
    this.selectRange = function (a, b, e) {
        var c = t.getOdfCanvas().getElement(), d, g = [s];
        d = v.containsNode(c, a.startContainer);
        c = v.containsNode(c, a.endContainer);
        if (d || c)if (d && c && (2 === e ? p(a) : 3 <= e && n(a)), (e = b ? t.getRootElement(a.startContainer) : t.getRootElement(a.endContainer)) || (e = t.getRootNode()), g.push(t.createRootFilter(e)), q(e, g, a, !0), q(e, g, a, !1), a =
            h(a, b), b = t.convertDomToCursorRange(a), a = t.getCursorSelection(k), b.position !== a.position || b.length !== a.length)a = r(b.position, b.length, ops.OdtCursor.RangeSelection), f.enqueue([a])
    };
    this.moveCursorToLeft = function () {
        e(N, !1);
        return!0
    };
    this.moveCursorToRight = function () {
        e(I, !1);
        return!0
    };
    this.extendSelectionToLeft = function () {
        e(N, !0);
        return!0
    };
    this.extendSelectionToRight = function () {
        e(I, !0);
        return!0
    };
    this.setCaretXPositionLocator = function (a) {
        A = a
    };
    this.moveCursorUp = function () {
        a(N, !1);
        return!0
    };
    this.moveCursorDown =
        function () {
            a(I, !1);
            return!0
        };
    this.extendSelectionUp = function () {
        a(N, !0);
        return!0
    };
    this.extendSelectionDown = function () {
        a(I, !0);
        return!0
    };
    this.moveCursorBeforeWord = function () {
        g(N, !1);
        return!0
    };
    this.moveCursorPastWord = function () {
        g(I, !1);
        return!0
    };
    this.extendSelectionBeforeWord = function () {
        g(N, !0);
        return!0
    };
    this.extendSelectionPastWord = function () {
        g(I, !0);
        return!0
    };
    this.moveCursorToLineStart = function () {
        m(N, !1);
        return!0
    };
    this.moveCursorToLineEnd = function () {
        m(I, !1);
        return!0
    };
    this.extendSelectionToLineStart =
        function () {
            m(N, !0);
            return!0
        };
    this.extendSelectionToLineEnd = function () {
        m(I, !0);
        return!0
    };
    this.extendSelectionToParagraphStart = function () {
        z(N, !0, t.getParagraphElement);
        return!0
    };
    this.extendSelectionToParagraphEnd = function () {
        z(I, !0, t.getParagraphElement);
        return!0
    };
    this.moveCursorToParagraphStart = function () {
        z(N, !1, t.getParagraphElement);
        return!0
    };
    this.moveCursorToParagraphEnd = function () {
        z(I, !1, t.getParagraphElement);
        return!0
    };
    this.moveCursorToDocumentStart = function () {
        z(N, !1, t.getRootElement);
        return!0
    };
    this.moveCursorToDocumentEnd = function () {
        z(I, !1, t.getRootElement);
        return!0
    };
    this.extendSelectionToDocumentStart = function () {
        z(N, !0, t.getRootElement);
        return!0
    };
    this.extendSelectionToDocumentEnd = function () {
        z(I, !0, t.getRootElement);
        return!0
    };
    this.extendSelectionToEntireDocument = function () {
        var a = t.getCursor(k), a = t.getRootElement(a.getNode()), b, e, c;
        runtime.assert(Boolean(a), "SelectionController: Cursor outside root");
        c = t.createStepIterator(a, 0, [s, w], a);
        c.roundToClosestStep();
        b = c.container();
        e = c.offset();
        c.setPosition(a, a.childNodes.length);
        c.roundToClosestStep();
        a = t.convertDomToCursorRange({anchorNode: b, anchorOffset: e, focusNode: c.container(), focusOffset: c.offset()});
        f.enqueue([r(a.position, a.length)]);
        return!0
    };
    this.destroy = function (a) {
        t.unsubscribe(ops.OdtDocument.signalOperationStart, d);
        core.Async.destroyAll([E.destroy], a)
    };
    (function () {
        E = core.Task.createTimeoutTask(function () {
            G = void 0
        }, 2E3);
        t.subscribe(ops.OdtDocument.signalOperationStart, d)
    })()
};
gui.TextController = function (f, k, d, b, c, h) {
    function r() {
        t = !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) ? d.isLocalCursorWithinOwnAnnotation() : !0
    }

    function l(a) {
        a.getMemberId() === b && r()
    }

    function p(a) {
        return a === ops.OdtStepsTranslator.NEXT_STEP
    }

    function n(a, b, e) {
        var c = [m.getPositionFilter()];
        e && c.push(m.createRootFilter(a.startContainer));
        e = m.createStepIterator(a.startContainer, a.startOffset, c, b);
        e.roundToClosestStep() || runtime.assert(!1, "No walkable step found in paragraph element at range start");
        b = m.convertDomPointToCursorStep(e.container(), e.offset());
        a.collapsed ? a = b : (e.setPosition(a.endContainer, a.endOffset), e.roundToClosestStep() || runtime.assert(!1, "No walkable step found in paragraph element at range end"), a = m.convertDomPointToCursorStep(e.container(), e.offset()));
        return{position: b, length: a - b}
    }

    function q(a) {
        var e, c, d, f = g.getParagraphElements(a), h = a.cloneRange(), k = [];
        e = f[0];
        1 < f.length && (g.hasNoODFContent(e) && (e = f[f.length - 1]), c = e.getAttributeNS(odf.Namespaces.textns, "style-name") || "");
        f.forEach(function (e, f) {
            var g, m;
            h.setStart(e, 0);
            h.collapse(!0);
            g = n(h, e, !1).position;
            0 < f && (m = new ops.OpMergeParagraph, m.init({memberid: b, paragraphStyleName: c, destinationStartPosition: d, sourceStartPosition: g, moveCursor: 1 === f}), k.unshift(m));
            d = g;
            h.selectNodeContents(e);
            if (g = z.rangeIntersection(h, a))g = n(g, e, !0), 0 < g.length && (m = new ops.OpRemoveText, m.init({memberid: b, position: g.position, length: g.length}), k.unshift(m))
        });
        return k
    }

    function e(a) {
        0 > a.length && (a.position += a.length, a.length = -a.length);
        return a
    }

    function a(a) {
        if (!t)return!1;
        var c, d = m.getCursor(b).getSelectedRange().cloneRange(), g = e(m.getCursorSelection(b)), h;
        if (0 === g.length) {
            g = void 0;
            c = m.getCursor(b).getNode();
            h = m.getRootElement(c);
            var k = [m.getPositionFilter(), m.createRootFilter(h)];
            h = m.createStepIterator(c, 0, k, h);
            h.roundToClosestStep() && (a ? h.nextStep() : h.previousStep()) && (g = e(m.convertDomToCursorRange({anchorNode: c, anchorOffset: 0, focusNode: h.container(), focusOffset: h.offset()})), a ? (d.setStart(c, 0), d.setEnd(h.container(), h.offset())) : (d.setStart(h.container(),
                h.offset()), d.setEnd(c, 0)))
        }
        g && f.enqueue(q(d));
        return void 0 !== g
    }

    var m = f.getOdtDocument(), g = new odf.OdfUtils, z = new core.DomUtils, t = !1, v = odf.Namespaces.textns;
    this.isEnabled = function () {
        return t
    };
    this.enqueueParagraphSplittingOps = function () {
        if (!t)return!1;
        var a = m.getCursor(b), c = a.getSelectedRange(), d = e(m.getCursorSelection(b)), g = [], a = m.getParagraphElement(a.getNode()), k = a.getAttributeNS(v, "style-name") || "";
        0 < d.length && (g = g.concat(q(c)));
        c = new ops.OpSplitParagraph;
        c.init({memberid: b, position: d.position,
            paragraphStyleName: k, sourceParagraphPosition: m.convertDomPointToCursorStep(a, 0, p), moveCursor: !0});
        g.push(c);
        h && (d = h(d.position + 1), g = g.concat(d));
        f.enqueue(g);
        return!0
    };
    this.removeTextByBackspaceKey = function () {
        return a(!1)
    };
    this.removeTextByDeleteKey = function () {
        return a(!0)
    };
    this.removeCurrentSelection = function () {
        if (!t)return!1;
        var a = m.getCursor(b).getSelectedRange();
        f.enqueue(q(a));
        return!0
    };
    this.insertText = function (a) {
        if (t) {
            var d = m.getCursor(b).getSelectedRange(), g = e(m.getCursorSelection(b)), h = [],
                k = !1;
            0 < g.length && (h = h.concat(q(d)), k = !0);
            d = new ops.OpInsertText;
            d.init({memberid: b, position: g.position, text: a, moveCursor: !0});
            h.push(d);
            c && (a = c(g.position, a.length, k)) && h.push(a);
            f.enqueue(h)
        }
    };
    this.destroy = function (a) {
        m.unsubscribe(ops.Document.signalCursorMoved, l);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, r);
        a()
    };
    m.subscribe(ops.Document.signalCursorMoved, l);
    k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, r);
    r()
};
gui.UndoManager = function () {
};
gui.UndoManager.prototype.subscribe = function (f, k) {
};
gui.UndoManager.prototype.unsubscribe = function (f, k) {
};
gui.UndoManager.prototype.setDocument = function (f) {
};
gui.UndoManager.prototype.setInitialState = function () {
};
gui.UndoManager.prototype.initialize = function () {
};
gui.UndoManager.prototype.purgeInitialState = function () {
};
gui.UndoManager.prototype.setPlaybackFunction = function (f) {
};
gui.UndoManager.prototype.hasUndoStates = function () {
};
gui.UndoManager.prototype.hasRedoStates = function () {
};
gui.UndoManager.prototype.moveForward = function (f) {
};
gui.UndoManager.prototype.moveBackward = function (f) {
};
gui.UndoManager.prototype.onOperationExecuted = function (f) {
};
gui.UndoManager.signalUndoStackChanged = "undoStackChanged";
gui.UndoManager.signalUndoStateCreated = "undoStateCreated";
gui.UndoManager.signalUndoStateModified = "undoStateModified";
gui.SessionControllerOptions = function () {
    this.annotationsEnabled = this.directParagraphStylingEnabled = this.directTextStylingEnabled = !1
};
(function () {
    var f = core.PositionFilter.FilterResult.FILTER_ACCEPT;
    gui.SessionController = function (k, d, b, c) {
        function h(a) {
            return a.target || a.srcElement || null
        }

        function r(a, b) {
            var e = u.getDOMDocument(), c = null;
            e.caretRangeFromPoint ? (e = e.caretRangeFromPoint(a, b), c = {container: e.startContainer, offset: e.startOffset}) : e.caretPositionFromPoint && (e = e.caretPositionFromPoint(a, b)) && e.offsetNode && (c = {container: e.offsetNode, offset: e.offset});
            return c
        }

        function l(a) {
            var b = u.getCursor(d).getSelectedRange();
            b.collapsed ?
                a.preventDefault() : X.setDataFromRange(a, b) ? fa.removeCurrentSelection() : runtime.log("Cut operation failed")
        }

        function p() {
            return!1 !== u.getCursor(d).getSelectedRange().collapsed
        }

        function n(a) {
            var b = u.getCursor(d).getSelectedRange();
            b.collapsed ? a.preventDefault() : X.setDataFromRange(a, b) || runtime.log("Copy operation failed")
        }

        function q(a) {
            var b;
            Q.clipboardData && Q.clipboardData.getData ? b = Q.clipboardData.getData("Text") : a.clipboardData && a.clipboardData.getData && (b = a.clipboardData.getData("text/plain"));
            b && (fa.removeCurrentSelection(), ra.paste(b));
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }

        function e() {
            return!1
        }

        function a(a) {
            if (ba)ba.onOperationExecuted(a)
        }

        function m(a) {
            u.emit(ops.OdtDocument.signalUndoStackChanged, a)
        }

        function g() {
            var a;
            return ba ? (a = R.hasFocus(), ba.moveBackward(1), a && R.focus(), !0) : !1
        }

        function z() {
            var a;
            return ba ? (a = R.hasFocus(), ba.moveForward(1), a && R.focus(), !0) : !1
        }

        function t(a) {
            var e = u.getCursor(d).getSelectedRange(), c = h(a).getAttribute("end");
            e && c && (a = r(a.clientX, a.clientY)) &&
            (ia.setUnfilteredPosition(a.container, a.offset), V.acceptPosition(ia) === f && (e = e.cloneRange(), "left" === c ? e.setStart(ia.container(), ia.unfilteredDomOffset()) : e.setEnd(ia.container(), ia.unfilteredDomOffset()), b.setSelectedRange(e, "right" === c), u.emit(ops.Document.signalCursorMoved, b)))
        }

        function v() {
            W.selectRange(b.getSelectedRange(), b.hasForwardSelection(), 1)
        }

        function y() {
            var a = Q.getSelection(), e = 0 < a.rangeCount && W.selectionToRange(a);
            S && e && (O = !0, la.clearSelection(), ia.setUnfilteredPosition(a.focusNode,
                a.focusOffset), V.acceptPosition(ia) === f && (2 === oa ? W.expandToWordBoundaries(e.range) : 3 <= oa && W.expandToParagraphBoundaries(e.range), b.setSelectedRange(e.range, e.hasForwardSelection), u.emit(ops.Document.signalCursorMoved, b)))
        }

        function s(a) {
            var b = h(a), e = u.getCursor(d);
            if (S = null !== b && ea.containsNode(u.getOdfCanvas().getElement(), b))O = !1, b = u.getRootElement(b) || u.getRootNode(), V = u.createRootFilter(b), oa = 0 === a.button ? a.detail : 0, e && a.shiftKey ? Q.getSelection().collapse(e.getAnchorNode(), 0) : (a = Q.getSelection(),
                b = e.getSelectedRange(), a.extend ? e.hasForwardSelection() ? (a.collapse(b.startContainer, b.startOffset), a.extend(b.endContainer, b.endOffset)) : (a.collapse(b.endContainer, b.endOffset), a.extend(b.startContainer, b.startOffset)) : (a.removeAllRanges(), a.addRange(b.cloneRange()))), 1 < oa && y()
        }

        function x(a) {
            var b = u.getRootElement(a), e = u.createRootFilter(b), b = u.createStepIterator(a, 0, [e, u.getPositionFilter()], b);
            b.setPosition(a, a.childNodes.length);
            return b.roundToNextStep() ? {container: b.container(), offset: b.offset()} :
                null
        }

        function w(a) {
            var b;
            b = (b = Q.getSelection()) ? {anchorNode: b.anchorNode, anchorOffset: b.anchorOffset, focusNode: b.focusNode, focusOffset: b.focusOffset} : null;
            var e = Q.getSelection().isCollapsed, c, d;
            b.anchorNode || b.focusNode || !(c = r(a.clientX, a.clientY)) || (b.anchorNode = c.container, b.anchorOffset = c.offset, b.focusNode = b.anchorNode, b.focusOffset = b.anchorOffset);
            if (D.isImage(b.focusNode) && 0 === b.focusOffset && D.isCharacterFrame(b.focusNode.parentNode)) {
                if (d = b.focusNode.parentNode, c = d.getBoundingClientRect(),
                    a.clientX > c.left && (c = x(d)))b.focusNode = c.container, b.focusOffset = c.offset, e && (b.anchorNode = b.focusNode, b.anchorOffset = b.focusOffset)
            } else D.isImage(b.focusNode.firstChild) && 1 === b.focusOffset && D.isCharacterFrame(b.focusNode) && (c = x(b.focusNode)) && (b.anchorNode = b.focusNode = c.container, b.anchorOffset = b.focusOffset = c.offset);
            b.anchorNode && b.focusNode && (b = W.selectionToRange(b), W.selectRange(b.range, b.hasForwardSelection, 0 === a.button ? a.detail : 0));
            R.focus()
        }

        function A(a) {
            var b;
            if (b = r(a.clientX, a.clientY))a =
                b.container, b = b.offset, a = {anchorNode: a, anchorOffset: b, focusNode: a, focusOffset: b}, a = W.selectionToRange(a), W.selectRange(a.range, a.hasForwardSelection, 2), R.focus()
        }

        function G(a) {
            var e = h(a), c, d, f;
            ja.processRequests();
            S && (D.isImage(e) && D.isCharacterFrame(e.parentNode) && Q.getSelection().isCollapsed ? (W.selectImage(e.parentNode), R.focus()) : la.isSelectorElement(e) ? R.focus() : O ? (e = b.getSelectedRange(), d = e.collapsed, D.isImage(e.endContainer) && 0 === e.endOffset && D.isCharacterFrame(e.endContainer.parentNode) && (f =
                e.endContainer.parentNode, f = x(f)) && (e.setEnd(f.container, f.offset), d && e.collapse(!1)), W.selectRange(e, b.hasForwardSelection(), 0 === a.button ? a.detail : 0), R.focus()) : ua ? w(a) : (c = ea.cloneEvent(a), aa = runtime.setTimeout(function () {
                w(c)
            }, 0)), oa = 0, O = S = !1)
        }

        function E(a) {
            var b = u.getCursor(d).getSelectedRange();
            b.collapsed || P.exportRangeToDataTransfer(a.dataTransfer, b)
        }

        function F() {
            S && R.focus();
            oa = 0;
            O = S = !1
        }

        function H(a) {
            G(a)
        }

        function N(a) {
            var b = h(a), e = null;
            "annotationRemoveButton" === b.className ? (runtime.assert(ha,
                "Remove buttons are displayed on annotations while annotation editing is disabled in the controller."), e = ea.getElementsByTagNameNS(b.parentNode, odf.Namespaces.officens, "annotation")[0], ga.removeAnnotation(e), R.focus()) : "webodf-draggable" !== b.getAttribute("class") && G(a)
        }

        function I(a) {
            (a = a.data) && (-1 === a.indexOf("\n") ? fa.insertText(a) : ra.paste(a))
        }

        function U(a) {
            return function () {
                a();
                return!0
            }
        }

        function B(a) {
            return function (b) {
                return u.getCursor(d).getSelectionType() === ops.OdtCursor.RangeSelection ? a(b) :
                    !0
            }
        }

        function Z(b) {
            R.unsubscribe("keydown", C.handleEvent);
            R.unsubscribe("keypress", T.handleEvent);
            R.unsubscribe("keyup", L.handleEvent);
            R.unsubscribe("copy", n);
            R.unsubscribe("mousedown", s);
            R.unsubscribe("mousemove", ja.trigger);
            R.unsubscribe("mouseup", N);
            R.unsubscribe("contextmenu", H);
            R.unsubscribe("dragstart", E);
            R.unsubscribe("dragend", F);
            R.unsubscribe("click", ma.handleClick);
            R.unsubscribe("longpress", A);
            R.unsubscribe("drag", t);
            R.unsubscribe("dragstop", v);
            u.unsubscribe(ops.OdtDocument.signalOperationEnd,
                da.trigger);
            u.unsubscribe(ops.Document.signalCursorAdded, ka.registerCursor);
            u.unsubscribe(ops.Document.signalCursorRemoved, ka.removeCursor);
            u.unsubscribe(ops.OdtDocument.signalOperationEnd, a);
            b()
        }

        var Q = runtime.getWindow(), u = k.getOdtDocument(), Y = new gui.SessionConstraints, $ = new gui.SessionContext(k, d), ea = new core.DomUtils, D = new odf.OdfUtils, P = new gui.MimeDataExporter, X = new gui.Clipboard(P), C = new gui.KeyboardHandler, T = new gui.KeyboardHandler, L = new gui.KeyboardHandler, S = !1, J = new odf.ObjectNameGenerator(u.getOdfCanvas().odfContainer(),
            d), O = !1, V = null, aa, ba = null, R = new gui.EventManager(u), ha = c.annotationsEnabled, ga = new gui.AnnotationController(k, Y, d), ca = new gui.DirectFormattingController(k, Y, $, d, J, c.directTextStylingEnabled, c.directParagraphStylingEnabled), fa = new gui.TextController(k, Y, $, d, ca.createCursorStyleOp, ca.createParagraphStyleOps), na = new gui.ImageController(k, Y, $, d, J), la = new gui.ImageSelector(u.getOdfCanvas()), ia = gui.SelectionMover.createPositionIterator(u.getRootNode()), ja, da, ra = new gui.PasteController(k, Y, $, d), ka = new gui.InputMethodEditor(d,
            R), oa = 0, ma = new gui.HyperlinkClickHandler(u.getOdfCanvas().getElement, C, L), ta = new gui.HyperlinkController(k, Y, $, d), W = new gui.SelectionController(k, d), sa = new gui.MetadataController(k, d), K = gui.KeyboardHandler.Modifier, M = gui.KeyboardHandler.KeyCode, pa = -1 !== Q.navigator.appVersion.toLowerCase().indexOf("mac"), ua = -1 !== ["iPad", "iPod", "iPhone"].indexOf(Q.navigator.platform), qa;
        runtime.assert(null !== Q, "Expected to be run in an environment which has a global window, like a browser.");
        this.undo = g;
        this.redo = z;
        this.insertLocalCursor = function () {
            runtime.assert(void 0 === k.getOdtDocument().getCursor(d), "Inserting local cursor a second time.");
            var a = new ops.OpAddCursor;
            a.init({memberid: d});
            k.enqueue([a]);
            R.focus()
        };
        this.removeLocalCursor = function () {
            runtime.assert(void 0 !== k.getOdtDocument().getCursor(d), "Removing local cursor without inserting before.");
            var a = new ops.OpRemoveCursor;
            a.init({memberid: d});
            k.enqueue([a])
        };
        this.startEditing = function () {
            ka.subscribe(gui.InputMethodEditor.signalCompositionStart, fa.removeCurrentSelection);
            ka.subscribe(gui.InputMethodEditor.signalCompositionEnd, I);
            R.subscribe("beforecut", p);
            R.subscribe("cut", l);
            R.subscribe("beforepaste", e);
            R.subscribe("paste", q);
            ba && ba.initialize();
            R.setEditing(!0);
            ma.setModifier(pa ? K.Meta : K.Ctrl);
            C.bind(M.Backspace, K.None, U(fa.removeTextByBackspaceKey), !0);
            C.bind(M.Delete, K.None, fa.removeTextByDeleteKey);
            C.bind(M.Tab, K.None, B(function () {
                fa.insertText("\t");
                return!0
            }));
            pa ? (C.bind(M.Clear, K.None, fa.removeCurrentSelection), C.bind(M.B, K.Meta, B(ca.toggleBold)), C.bind(M.I,
                K.Meta, B(ca.toggleItalic)), C.bind(M.U, K.Meta, B(ca.toggleUnderline)), C.bind(M.L, K.MetaShift, B(ca.alignParagraphLeft)), C.bind(M.E, K.MetaShift, B(ca.alignParagraphCenter)), C.bind(M.R, K.MetaShift, B(ca.alignParagraphRight)), C.bind(M.J, K.MetaShift, B(ca.alignParagraphJustified)), ha && C.bind(M.C, K.MetaShift, ga.addAnnotation), C.bind(M.Z, K.Meta, g), C.bind(M.Z, K.MetaShift, z)) : (C.bind(M.B, K.Ctrl, B(ca.toggleBold)), C.bind(M.I, K.Ctrl, B(ca.toggleItalic)), C.bind(M.U, K.Ctrl, B(ca.toggleUnderline)), C.bind(M.L, K.CtrlShift,
                B(ca.alignParagraphLeft)), C.bind(M.E, K.CtrlShift, B(ca.alignParagraphCenter)), C.bind(M.R, K.CtrlShift, B(ca.alignParagraphRight)), C.bind(M.J, K.CtrlShift, B(ca.alignParagraphJustified)), ha && C.bind(M.C, K.CtrlAlt, ga.addAnnotation), C.bind(M.Z, K.Ctrl, g), C.bind(M.Z, K.CtrlShift, z));
            T.setDefault(B(function (a) {
                var b;
                b = null === a.which || void 0 === a.which ? String.fromCharCode(a.keyCode) : 0 !== a.which && 0 !== a.charCode ? String.fromCharCode(a.which) : null;
                return!b || a.altKey || a.ctrlKey || a.metaKey ? !1 : (fa.insertText(b), !0)
            }));
            T.bind(M.Enter, K.None, B(fa.enqueueParagraphSplittingOps))
        };
        this.endEditing = function () {
            ka.unsubscribe(gui.InputMethodEditor.signalCompositionStart, fa.removeCurrentSelection);
            ka.unsubscribe(gui.InputMethodEditor.signalCompositionEnd, I);
            R.unsubscribe("cut", l);
            R.unsubscribe("beforecut", p);
            R.unsubscribe("paste", q);
            R.unsubscribe("beforepaste", e);
            R.setEditing(!1);
            ma.setModifier(K.None);
            C.bind(M.Backspace, K.None, function () {
                return!0
            }, !0);
            C.unbind(M.Delete, K.None);
            C.unbind(M.Tab, K.None);
            pa ? (C.unbind(M.Clear,
                K.None), C.unbind(M.B, K.Meta), C.unbind(M.I, K.Meta), C.unbind(M.U, K.Meta), C.unbind(M.L, K.MetaShift), C.unbind(M.E, K.MetaShift), C.unbind(M.R, K.MetaShift), C.unbind(M.J, K.MetaShift), ha && C.unbind(M.C, K.MetaShift), C.unbind(M.Z, K.Meta), C.unbind(M.Z, K.MetaShift)) : (C.unbind(M.B, K.Ctrl), C.unbind(M.I, K.Ctrl), C.unbind(M.U, K.Ctrl), C.unbind(M.L, K.CtrlShift), C.unbind(M.E, K.CtrlShift), C.unbind(M.R, K.CtrlShift), C.unbind(M.J, K.CtrlShift), ha && C.unbind(M.C, K.CtrlAlt), C.unbind(M.Z, K.Ctrl), C.unbind(M.Z, K.CtrlShift));
            T.setDefault(null);
            T.unbind(M.Enter, K.None)
        };
        this.getInputMemberId = function () {
            return d
        };
        this.getSession = function () {
            return k
        };
        this.getSessionConstraints = function () {
            return Y
        };
        this.setUndoManager = function (a) {
            ba && ba.unsubscribe(gui.UndoManager.signalUndoStackChanged, m);
            if (ba = a)ba.setDocument(u), ba.setPlaybackFunction(k.enqueue), ba.subscribe(gui.UndoManager.signalUndoStackChanged, m)
        };
        this.getUndoManager = function () {
            return ba
        };
        this.getMetadataController = function () {
            return sa
        };
        this.getAnnotationController = function () {
            return ga
        };
        this.getDirectFormattingController = function () {
            return ca
        };
        this.getHyperlinkClickHandler = function () {
            return ma
        };
        this.getHyperlinkController = function () {
            return ta
        };
        this.getImageController = function () {
            return na
        };
        this.getSelectionController = function () {
            return W
        };
        this.getTextController = function () {
            return fa
        };
        this.getEventManager = function () {
            return R
        };
        this.getKeyboardHandlers = function () {
            return{keydown: C, keypress: T}
        };
        this.destroy = function (a) {
            var b = [ja.destroy, da.destroy, ca.destroy, ka.destroy, R.destroy, ma.destroy,
                ta.destroy, sa.destroy, W.destroy, fa.destroy, Z];
            qa && b.unshift(qa.destroy);
            runtime.clearTimeout(aa);
            core.Async.destroyAll(b, a)
        };
        ja = core.Task.createRedrawTask(y);
        da = core.Task.createRedrawTask(function () {
            var a = u.getCursor(d);
            if (a && a.getSelectionType() === ops.OdtCursor.RegionSelection && (a = D.getImageElements(a.getSelectedRange())[0])) {
                la.select(a.parentNode);
                return
            }
            la.clearSelection()
        });
        C.bind(M.Left, K.None, B(W.moveCursorToLeft));
        C.bind(M.Right, K.None, B(W.moveCursorToRight));
        C.bind(M.Up, K.None, B(W.moveCursorUp));
        C.bind(M.Down, K.None, B(W.moveCursorDown));
        C.bind(M.Left, K.Shift, B(W.extendSelectionToLeft));
        C.bind(M.Right, K.Shift, B(W.extendSelectionToRight));
        C.bind(M.Up, K.Shift, B(W.extendSelectionUp));
        C.bind(M.Down, K.Shift, B(W.extendSelectionDown));
        C.bind(M.Home, K.None, B(W.moveCursorToLineStart));
        C.bind(M.End, K.None, B(W.moveCursorToLineEnd));
        C.bind(M.Home, K.Ctrl, B(W.moveCursorToDocumentStart));
        C.bind(M.End, K.Ctrl, B(W.moveCursorToDocumentEnd));
        C.bind(M.Home, K.Shift, B(W.extendSelectionToLineStart));
        C.bind(M.End,
            K.Shift, B(W.extendSelectionToLineEnd));
        C.bind(M.Up, K.CtrlShift, B(W.extendSelectionToParagraphStart));
        C.bind(M.Down, K.CtrlShift, B(W.extendSelectionToParagraphEnd));
        C.bind(M.Home, K.CtrlShift, B(W.extendSelectionToDocumentStart));
        C.bind(M.End, K.CtrlShift, B(W.extendSelectionToDocumentEnd));
        pa ? (C.bind(M.Left, K.Alt, B(W.moveCursorBeforeWord)), C.bind(M.Right, K.Alt, B(W.moveCursorPastWord)), C.bind(M.Left, K.Meta, B(W.moveCursorToLineStart)), C.bind(M.Right, K.Meta, B(W.moveCursorToLineEnd)), C.bind(M.Home, K.Meta,
            B(W.moveCursorToDocumentStart)), C.bind(M.End, K.Meta, B(W.moveCursorToDocumentEnd)), C.bind(M.Left, K.AltShift, B(W.extendSelectionBeforeWord)), C.bind(M.Right, K.AltShift, B(W.extendSelectionPastWord)), C.bind(M.Left, K.MetaShift, B(W.extendSelectionToLineStart)), C.bind(M.Right, K.MetaShift, B(W.extendSelectionToLineEnd)), C.bind(M.Up, K.AltShift, B(W.extendSelectionToParagraphStart)), C.bind(M.Down, K.AltShift, B(W.extendSelectionToParagraphEnd)), C.bind(M.Up, K.MetaShift, B(W.extendSelectionToDocumentStart)), C.bind(M.Down,
            K.MetaShift, B(W.extendSelectionToDocumentEnd)), C.bind(M.A, K.Meta, B(W.extendSelectionToEntireDocument))) : (C.bind(M.Left, K.Ctrl, B(W.moveCursorBeforeWord)), C.bind(M.Right, K.Ctrl, B(W.moveCursorPastWord)), C.bind(M.Left, K.CtrlShift, B(W.extendSelectionBeforeWord)), C.bind(M.Right, K.CtrlShift, B(W.extendSelectionPastWord)), C.bind(M.A, K.Ctrl, B(W.extendSelectionToEntireDocument)));
        ua && (qa = new gui.IOSSafariSupport(R));
        R.subscribe("keydown", C.handleEvent);
        R.subscribe("keypress", T.handleEvent);
        R.subscribe("keyup",
            L.handleEvent);
        R.subscribe("copy", n);
        R.subscribe("mousedown", s);
        R.subscribe("mousemove", ja.trigger);
        R.subscribe("mouseup", N);
        R.subscribe("contextmenu", H);
        R.subscribe("dragstart", E);
        R.subscribe("dragend", F);
        R.subscribe("click", ma.handleClick);
        R.subscribe("longpress", A);
        R.subscribe("drag", t);
        R.subscribe("dragstop", v);
        u.subscribe(ops.OdtDocument.signalOperationEnd, da.trigger);
        u.subscribe(ops.Document.signalCursorAdded, ka.registerCursor);
        u.subscribe(ops.Document.signalCursorRemoved, ka.removeCursor);
        u.subscribe(ops.OdtDocument.signalOperationEnd,
            a)
    }
})();
gui.CaretManager = function (f) {
    function k(a) {
        return m.hasOwnProperty(a) ? m[a] : null
    }

    function d() {
        var a = k(f.getInputMemberId()), b;
        a && (b = a.getBoundingClientRect());
        return b ? b.right : void 0
    }

    function b() {
        return Object.keys(m).map(function (a) {
            return m[a]
        })
    }

    function c(a) {
        var b = m[a];
        b && (delete m[a], a === f.getInputMemberId() && f.getEventManager().unsubscribe("compositionupdate", b.handleUpdate), b.destroy(function () {
        }))
    }

    function h(a) {
        a = a.getMemberId();
        a === f.getInputMemberId() && (a = k(a)) && a.refreshCursorBlinking()
    }

    function r() {
        var a = k(f.getInputMemberId());
        t = !1;
        a && a.ensureVisible()
    }

    function l() {
        var a = k(f.getInputMemberId());
        a && (a.handleUpdate(), t || (t = !0, z = runtime.setTimeout(r, 50)))
    }

    function p(a) {
        a.memberId === f.getInputMemberId() && l()
    }

    function n() {
        var a = k(f.getInputMemberId());
        a && a.setFocus()
    }

    function q() {
        var a = k(f.getInputMemberId());
        a && a.removeFocus()
    }

    function e() {
        var a = k(f.getInputMemberId());
        a && a.show()
    }

    function a() {
        var a = k(f.getInputMemberId());
        a && a.hide()
    }

    var m = {}, g = runtime.getWindow(), z, t = !1;
    this.registerCursor =
        function (a, b, e) {
            var c = a.getMemberId();
            b = new gui.Caret(a, b, e);
            e = f.getEventManager();
            m[c] = b;
            c === f.getInputMemberId() ? (runtime.log("Starting to track input on new cursor of " + c), a.subscribe(ops.OdtCursor.signalCursorUpdated, l), e.subscribe("compositionupdate", b.handleUpdate), b.setOverlayElement(e.getEventTrap())) : a.subscribe(ops.OdtCursor.signalCursorUpdated, b.handleUpdate);
            return b
        };
    this.getCaret = k;
    this.getCarets = b;
    this.destroy = function (d) {
        var k = f.getSession().getOdtDocument(), l = f.getEventManager(),
            r = b().map(function (a) {
                return a.destroy
            });
        f.getSelectionController().setCaretXPositionLocator(null);
        runtime.clearTimeout(z);
        k.unsubscribe(ops.OdtDocument.signalParagraphChanged, p);
        k.unsubscribe(ops.Document.signalCursorMoved, h);
        k.unsubscribe(ops.Document.signalCursorRemoved, c);
        l.unsubscribe("focus", n);
        l.unsubscribe("blur", q);
        g.removeEventListener("focus", e, !1);
        g.removeEventListener("blur", a, !1);
        m = {};
        core.Async.destroyAll(r, d)
    };
    (function () {
        var b = f.getSession().getOdtDocument(), k = f.getEventManager();
        f.getSelectionController().setCaretXPositionLocator(d);
        b.subscribe(ops.OdtDocument.signalParagraphChanged, p);
        b.subscribe(ops.Document.signalCursorMoved, h);
        b.subscribe(ops.Document.signalCursorRemoved, c);
        k.subscribe("focus", n);
        k.subscribe("blur", q);
        g.addEventListener("focus", e, !1);
        g.addEventListener("blur", a, !1)
    })()
};
gui.EditInfoHandle = function (f) {
    var k = [], d, b = f.ownerDocument, c = b.documentElement.namespaceURI;
    this.setEdits = function (f) {
        k = f;
        var r, l, p, n;
        d.innerHTML = "";
        for (f = 0; f < k.length; f += 1)r = b.createElementNS(c, "div"), r.className = "editInfo", l = b.createElementNS(c, "span"), l.className = "editInfoColor", l.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", k[f].memberid), p = b.createElementNS(c, "span"), p.className = "editInfoAuthor", p.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", k[f].memberid),
            n = b.createElementNS(c, "span"), n.className = "editInfoTime", n.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", k[f].memberid), n.innerHTML = k[f].time, r.appendChild(l), r.appendChild(p), r.appendChild(n), d.appendChild(r)
    };
    this.show = function () {
        d.style.display = "block"
    };
    this.hide = function () {
        d.style.display = "none"
    };
    this.destroy = function (b) {
        f.removeChild(d);
        b()
    };
    d = b.createElementNS(c, "div");
    d.setAttribute("class", "editInfoHandle");
    d.style.display = "none";
    f.appendChild(d)
};
ops.EditInfo = function (f, k) {
    function d() {
        var b = [], d;
        for (d in c)c.hasOwnProperty(d) && b.push({memberid: d, time: c[d].time});
        b.sort(function (b, c) {
            return b.time - c.time
        });
        return b
    }

    var b, c = {};
    this.getNode = function () {
        return b
    };
    this.getOdtDocument = function () {
        return k
    };
    this.getEdits = function () {
        return c
    };
    this.getSortedEdits = function () {
        return d()
    };
    this.addEdit = function (b, d) {
        c[b] = {time: d}
    };
    this.clearEdits = function () {
        c = {}
    };
    this.destroy = function (c) {
        f.parentNode && f.removeChild(b);
        c()
    };
    b = k.getDOMDocument().createElementNS("urn:webodf:names:editinfo",
        "editinfo");
    f.insertBefore(b, f.firstChild)
};
gui.EditInfoMarker = function (f, k) {
    function d(b, e) {
        return runtime.setTimeout(function () {
            r.style.opacity = b
        }, e)
    }

    var b = this, c, h, r, l, p, n;
    this.addEdit = function (b, e) {
        var a = Date.now() - e;
        f.addEdit(b, e);
        h.setEdits(f.getSortedEdits());
        r.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", b);
        runtime.clearTimeout(p);
        runtime.clearTimeout(n);
        1E4 > a ? (l = d(1, 0), p = d(0.5, 1E4 - a), n = d(0.2, 2E4 - a)) : 1E4 <= a && 2E4 > a ? (l = d(0.5, 0), n = d(0.2, 2E4 - a)) : l = d(0.2, 0)
    };
    this.getEdits = function () {
        return f.getEdits()
    };
    this.clearEdits =
        function () {
            f.clearEdits();
            h.setEdits([]);
            r.hasAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid") && r.removeAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid")
        };
    this.getEditInfo = function () {
        return f
    };
    this.show = function () {
        r.style.display = "block"
    };
    this.hide = function () {
        b.hideHandle();
        r.style.display = "none"
    };
    this.showHandle = function () {
        h.show()
    };
    this.hideHandle = function () {
        h.hide()
    };
    this.destroy = function (b) {
        runtime.clearTimeout(l);
        runtime.clearTimeout(p);
        runtime.clearTimeout(n);
        c.removeChild(r);
        h.destroy(function (e) {
            e ? b(e) : f.destroy(b)
        })
    };
    (function () {
        var d = f.getOdtDocument().getDOMDocument();
        r = d.createElementNS(d.documentElement.namespaceURI, "div");
        r.setAttribute("class", "editInfoMarker");
        r.onmouseover = function () {
            b.showHandle()
        };
        r.onmouseout = function () {
            b.hideHandle()
        };
        c = f.getNode();
        c.appendChild(r);
        h = new gui.EditInfoHandle(c);
        k || b.hide()
    })()
};
gui.HyperlinkTooltipView = function (f, k) {
    var d = new core.DomUtils, b = new odf.OdfUtils, c = runtime.getWindow(), h, r, l;
    runtime.assert(null !== c, "Expected to be run in an environment which has a global window, like a browser.");
    this.showTooltip = function (p) {
        var n = p.target || p.srcElement, q = f.getSizer(), e = f.getZoomLevel(), a;
        a:{
            for (; n;) {
                if (b.isHyperlink(n))break a;
                if (b.isParagraph(n) || b.isInlineRoot(n))break;
                n = n.parentNode
            }
            n = null
        }
        if (n) {
            d.containsNode(q, l) || q.appendChild(l);
            a = r;
            var m;
            switch (k()) {
                case gui.KeyboardHandler.Modifier.Ctrl:
                    m =
                        runtime.tr("Ctrl-click to follow link");
                    break;
                case gui.KeyboardHandler.Modifier.Meta:
                    m = runtime.tr("\u2318-click to follow link");
                    break;
                default:
                    m = ""
            }
            a.textContent = m;
            h.textContent = b.getHyperlinkTarget(n);
            l.style.display = "block";
            a = c.innerWidth - l.offsetWidth - 15;
            n = p.clientX > a ? a : p.clientX + 15;
            a = c.innerHeight - l.offsetHeight - 10;
            p = p.clientY > a ? a : p.clientY + 10;
            q = q.getBoundingClientRect();
            n = (n - q.left) / e;
            p = (p - q.top) / e;
            l.style.left = n + "px";
            l.style.top = p + "px"
        }
    };
    this.hideTooltip = function () {
        l.style.display = "none"
    };
    this.destroy =
        function (b) {
            l.parentNode && l.parentNode.removeChild(l);
            b()
        };
    (function () {
        var b = f.getElement().ownerDocument;
        h = b.createElement("span");
        r = b.createElement("span");
        h.className = "webodf-hyperlinkTooltipLink";
        r.className = "webodf-hyperlinkTooltipText";
        l = b.createElement("div");
        l.className = "webodf-hyperlinkTooltip";
        l.appendChild(h);
        l.appendChild(r);
        f.getElement().appendChild(l)
    })()
};
gui.ShadowCursor = function (f) {
    var k = f.getDOMDocument().createRange(), d = !0;
    this.removeFromDocument = function () {
    };
    this.getMemberId = function () {
        return gui.ShadowCursor.ShadowCursorMemberId
    };
    this.getSelectedRange = function () {
        return k
    };
    this.setSelectedRange = function (b, c) {
        k = b;
        d = !1 !== c
    };
    this.hasForwardSelection = function () {
        return d
    };
    this.getDocument = function () {
        return f
    };
    this.getSelectionType = function () {
        return ops.OdtCursor.RangeSelection
    };
    k.setStart(f.getRootNode(), 0)
};
gui.ShadowCursor.ShadowCursorMemberId = "";
gui.SelectionView = function (f) {
};
gui.SelectionView.prototype.rerender = function () {
};
gui.SelectionView.prototype.show = function () {
};
gui.SelectionView.prototype.hide = function () {
};
gui.SelectionView.prototype.destroy = function (f) {
};
gui.SelectionViewManager = function (f) {
    function k() {
        return Object.keys(d).map(function (b) {
            return d[b]
        })
    }

    var d = {};
    this.getSelectionView = function (b) {
        return d.hasOwnProperty(b) ? d[b] : null
    };
    this.getSelectionViews = k;
    this.removeSelectionView = function (b) {
        d.hasOwnProperty(b) && (d[b].destroy(function () {
        }), delete d[b])
    };
    this.hideSelectionView = function (b) {
        d.hasOwnProperty(b) && d[b].hide()
    };
    this.showSelectionView = function (b) {
        d.hasOwnProperty(b) && d[b].show()
    };
    this.rerenderSelectionViews = function () {
        Object.keys(d).forEach(function (b) {
            d[b].rerender()
        })
    };
    this.registerCursor = function (b, c) {
        var h = b.getMemberId(), k = new f(b);
        c ? k.show() : k.hide();
        return d[h] = k
    };
    this.destroy = function (b) {
        function c(f, k) {
            k ? b(k) : f < d.length ? d[f].destroy(function (b) {
                c(f + 1, b)
            }) : b()
        }

        var d = k();
        c(0, void 0)
    }
};
gui.SessionViewOptions = function () {
    this.caretBlinksOnRangeSelect = this.caretAvatarsInitiallyVisible = this.editInfoMarkersInitiallyVisible = !0
};
(function () {
    gui.SessionView = function (f, k, d, b, c, h) {
        function r() {
            var a = document.getElementsByTagName("head").item(0), b = document.createElement("style");
            b.type = "text/css";
            b.media = "screen, print, handheld, projection";
            a.appendChild(b);
            return b
        }

        function l(a, b, e) {
            function c(b, e, d) {
                e = b + '[editinfo|memberid="' + a + '"]' + d + e;
                a:{
                    var f = v.firstChild;
                    for (b = b + '[editinfo|memberid="' + a + '"]' + d + "{"; f;) {
                        if (f.nodeType === Node.TEXT_NODE && 0 === f.data.indexOf(b)) {
                            b = f;
                            break a
                        }
                        f = f.nextSibling
                    }
                    b = null
                }
                b ? b.data = e : v.appendChild(document.createTextNode(e))
            }

            c("div.editInfoMarker", "{ background-color: " + e + "; }", "");
            c("span.editInfoColor", "{ background-color: " + e + "; }", "");
            c("span.editInfoAuthor", '{ content: "' + b + '"; }', ":before");
            c("dc|creator", "{ background-color: " + e + "; }", "");
            c(".webodf-selectionOverlay", "{ fill: " + e + "; stroke: " + e + ";}", "");
            a === k && (c(".webodf-touchEnabled .webodf-selectionOverlay", "{ display: block; }", " > .webodf-draggable"), a = gui.ShadowCursor.ShadowCursorMemberId, c(".webodf-selectionOverlay", "{ fill: " + e + "; stroke: " + e + ";}", ""),
                c(".webodf-touchEnabled .webodf-selectionOverlay", "{ display: block; }", " > .webodf-draggable"))
        }

        function p(a) {
            var b, e;
            for (e in x)x.hasOwnProperty(e) && (b = x[e], a ? b.show() : b.hide())
        }

        function n(a) {
            c.getCarets().forEach(function (b) {
                a ? b.showHandle() : b.hideHandle()
            })
        }

        function q(a) {
            var b = a.getMemberId();
            a = a.getProperties();
            l(b, a.fullName, a.color)
        }

        function e(a) {
            var b = a.getMemberId(), e = d.getOdtDocument().getMember(b).getProperties();
            c.registerCursor(a, F, H);
            h.registerCursor(a, !0);
            if (a = c.getCaret(b))a.setAvatarImageUrl(e.imageUrl),
                a.setColor(e.color);
            runtime.log("+++ View here +++ eagerly created an Caret for '" + b + "'! +++")
        }

        function a(a) {
            a = a.getMemberId();
            var b = h.getSelectionView(k), e = h.getSelectionView(gui.ShadowCursor.ShadowCursorMemberId), d = c.getCaret(k);
            a === k ? (e.hide(), b && b.show(), d && d.show()) : a === gui.ShadowCursor.ShadowCursorMemberId && (e.show(), b && b.hide(), d && d.hide())
        }

        function m(a) {
            h.removeSelectionView(a)
        }

        function g(a) {
            var b = a.paragraphElement, e = a.memberId;
            a = a.timeStamp;
            var c, f = "", g = b.getElementsByTagNameNS(s, "editinfo").item(0);
            g ? (f = g.getAttributeNS(s, "id"), c = x[f]) : (f = Math.random().toString(), c = new ops.EditInfo(b, d.getOdtDocument()), c = new gui.EditInfoMarker(c, E), g = b.getElementsByTagNameNS(s, "editinfo").item(0), g.setAttributeNS(s, "id", f), x[f] = c);
            c.addEdit(e, new Date(a));
            G.trigger()
        }

        function z() {
            var a;
            "" !== y.innerHTML && (y.innerHTML = "");
            !0 === b.getState(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN) && (a = d.getOdtDocument().getMember(k)) && (a = a.getProperties().fullName, y.appendChild(document.createTextNode(".annotationWrapper:not([creator = '" +
                a + "']) .annotationRemoveButton { display: none; }")))
        }

        function t(c) {
            var d = Object.keys(x).map(function (a) {
                return x[a]
            });
            w.unsubscribe(ops.Document.signalMemberAdded, q);
            w.unsubscribe(ops.Document.signalMemberUpdated, q);
            w.unsubscribe(ops.Document.signalCursorAdded, e);
            w.unsubscribe(ops.Document.signalCursorRemoved, m);
            w.unsubscribe(ops.OdtDocument.signalParagraphChanged, g);
            w.unsubscribe(ops.Document.signalCursorMoved, a);
            w.unsubscribe(ops.OdtDocument.signalParagraphChanged, h.rerenderSelectionViews);
            w.unsubscribe(ops.OdtDocument.signalTableAdded,
                h.rerenderSelectionViews);
            w.unsubscribe(ops.OdtDocument.signalParagraphStyleModified, h.rerenderSelectionViews);
            b.unsubscribe(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN, z);
            w.unsubscribe(ops.Document.signalMemberAdded, z);
            w.unsubscribe(ops.Document.signalMemberUpdated, z);
            v.parentNode.removeChild(v);
            y.parentNode.removeChild(y);
            (function B(a, b) {
                b ? c(b) : a < d.length ? d[a].destroy(function (b) {
                    B(a + 1, b)
                }) : c()
            })(0, void 0)
        }

        var v, y, s = "urn:webodf:names:editinfo", x = {}, w, A, G, E = void 0 !== f.editInfoMarkersInitiallyVisible ?
            Boolean(f.editInfoMarkersInitiallyVisible) : !0, F = void 0 !== f.caretAvatarsInitiallyVisible ? Boolean(f.caretAvatarsInitiallyVisible) : !0, H = void 0 !== f.caretBlinksOnRangeSelect ? Boolean(f.caretBlinksOnRangeSelect) : !0;
        this.showEditInfoMarkers = function () {
            E || (E = !0, p(E))
        };
        this.hideEditInfoMarkers = function () {
            E && (E = !1, p(E))
        };
        this.showCaretAvatars = function () {
            F || (F = !0, n(F))
        };
        this.hideCaretAvatars = function () {
            F && (F = !1, n(F))
        };
        this.getSession = function () {
            return d
        };
        this.getCaret = function (a) {
            return c.getCaret(a)
        };
        this.destroy =
            function (a) {
                core.Async.destroyAll([G.destroy, t], a)
            };
        w = d.getOdtDocument();
        A = w.getOdfCanvas();
        w.subscribe(ops.Document.signalMemberAdded, q);
        w.subscribe(ops.Document.signalMemberUpdated, q);
        w.subscribe(ops.Document.signalCursorAdded, e);
        w.subscribe(ops.Document.signalCursorRemoved, m);
        w.subscribe(ops.OdtDocument.signalParagraphChanged, g);
        w.subscribe(ops.Document.signalCursorMoved, a);
        w.subscribe(ops.OdtDocument.signalParagraphChanged, h.rerenderSelectionViews);
        w.subscribe(ops.OdtDocument.signalTableAdded,
            h.rerenderSelectionViews);
        w.subscribe(ops.OdtDocument.signalParagraphStyleModified, h.rerenderSelectionViews);
        b.subscribe(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN, z);
        w.subscribe(ops.Document.signalMemberAdded, z);
        w.subscribe(ops.Document.signalMemberUpdated, z);
        v = r();
        v.appendChild(document.createTextNode("@namespace editinfo url(urn:webodf:names:editinfo);"));
        v.appendChild(document.createTextNode("@namespace dc url(http://purl.org/dc/elements/1.1/);"));
        y = r();
        z();
        G = core.Task.createRedrawTask(function () {
            var a =
                A.getAnnotationViewManager();
            a && (a.rehighlightAnnotations(), w.fixCursorPositions())
        })
    }
})();
gui.SvgSelectionView = function (f) {
    function k() {
        var b = a.getRootNode();
        m !== b && (m = b, g = a.getCanvas().getSizer(), g.appendChild(t), t.setAttribute("class", "webodf-selectionOverlay"), y.setAttribute("class", "webodf-draggable"), s.setAttribute("class", "webodf-draggable"), y.setAttribute("end", "left"), s.setAttribute("end", "right"), y.setAttribute("r", 8), s.setAttribute("r", 8), t.appendChild(v), t.appendChild(y), t.appendChild(s))
    }

    function d(a) {
        a = a.getBoundingClientRect();
        return Boolean(a && 0 !== a.height)
    }

    function b(a) {
        var b =
            x.getTextElements(a, !0, !1), e = a.cloneRange(), c = a.cloneRange();
        a = a.cloneRange();
        if (!b.length)return null;
        var f;
        a:{
            f = 0;
            var g = b[f], h = e.startContainer === g ? e.startOffset : 0, k = h;
            e.setStart(g, h);
            for (e.setEnd(g, k); !d(e);) {
                if (g.nodeType === Node.ELEMENT_NODE && k < g.childNodes.length)k = g.childNodes.length; else if (g.nodeType === Node.TEXT_NODE && k < g.length)k += 1; else if (b[f])g = b[f], f += 1, h = k = 0; else {
                    f = !1;
                    break a
                }
                e.setStart(g, h);
                e.setEnd(g, k)
            }
            f = !0
        }
        if (!f)return null;
        a:{
            f = b.length - 1;
            g = b[f];
            k = h = c.endContainer === g ? c.endOffset :
                g.nodeType === Node.TEXT_NODE ? g.length : g.childNodes.length;
            c.setStart(g, h);
            for (c.setEnd(g, k); !d(c);) {
                if (g.nodeType === Node.ELEMENT_NODE && 0 < h)h = 0; else if (g.nodeType === Node.TEXT_NODE && 0 < h)h -= 1; else if (b[f])g = b[f], f -= 1, h = k = g.length || g.childNodes.length; else {
                    b = !1;
                    break a
                }
                c.setStart(g, h);
                c.setEnd(g, k)
            }
            b = !0
        }
        if (!b)return null;
        a.setStart(e.startContainer, e.startOffset);
        a.setEnd(c.endContainer, c.endOffset);
        return{firstRange: e, lastRange: c, fillerRange: a}
    }

    function c(a, b) {
        var e = {};
        e.top = Math.min(a.top, b.top);
        e.left =
            Math.min(a.left, b.left);
        e.right = Math.max(a.right, b.right);
        e.bottom = Math.max(a.bottom, b.bottom);
        e.width = e.right - e.left;
        e.height = e.bottom - e.top;
        return e
    }

    function h(a, b) {
        b && 0 < b.width && 0 < b.height && (a = a ? c(a, b) : b);
        return a
    }

    function r(b) {
        function e(a) {
            E.setUnfilteredPosition(a, 0);
            return t.acceptNode(a) === F && s.acceptPosition(E) === F ? F : H
        }

        function c(a) {
            var b = null;
            e(a) === F && (b = w.getBoundingClientRect(a));
            return b
        }

        var d = b.commonAncestorContainer, f = b.startContainer, g = b.endContainer, k = b.startOffset, m = b.endOffset,
            l, r, n = null, p, q = z.createRange(), s, t = new odf.OdfNodeFilter, v;
        if (f === d || g === d)return q = b.cloneRange(), n = q.getBoundingClientRect(), q.detach(), n;
        for (b = f; b.parentNode !== d;)b = b.parentNode;
        for (r = g; r.parentNode !== d;)r = r.parentNode;
        s = a.createRootFilter(f);
        for (d = b.nextSibling; d && d !== r;)p = c(d), n = h(n, p), d = d.nextSibling;
        if (x.isParagraph(b))n = h(n, w.getBoundingClientRect(b)); else if (b.nodeType === Node.TEXT_NODE)d = b, q.setStart(d, k), q.setEnd(d, d === r ? m : d.length), p = q.getBoundingClientRect(), n = h(n, p); else for (v = z.createTreeWalker(b,
            NodeFilter.SHOW_TEXT, e, !1), d = v.currentNode = f; d && d !== g;)q.setStart(d, k), q.setEnd(d, d.length), p = q.getBoundingClientRect(), n = h(n, p), l = d, k = 0, d = v.nextNode();
        l || (l = f);
        if (x.isParagraph(r))n = h(n, w.getBoundingClientRect(r)); else if (r.nodeType === Node.TEXT_NODE)d = r, q.setStart(d, d === b ? k : 0), q.setEnd(d, m), p = q.getBoundingClientRect(), n = h(n, p); else for (v = z.createTreeWalker(r, NodeFilter.SHOW_TEXT, e, !1), d = v.currentNode = g; d && d !== l;)if (q.setStart(d, 0), q.setEnd(d, m), p = q.getBoundingClientRect(), n = h(n, p), d = v.previousNode())m =
            d.length;
        return n
    }

    function l(a, b) {
        var e = a.getBoundingClientRect(), c = {width: 0};
        c.top = e.top;
        c.bottom = e.bottom;
        c.height = e.height;
        c.left = c.right = b ? e.right : e.left;
        return c
    }

    function p() {
        var a = f.getSelectedRange(), e;
        if (e = G && f.getSelectionType() === ops.OdtCursor.RangeSelection && !a.collapsed) {
            k();
            var d = w.getBoundingClientRect(g), h = A.getZoomLevel(), a = b(a), m, n, p, q, z, x;
            if (a) {
                e = a.firstRange;
                m = a.lastRange;
                n = a.fillerRange;
                p = w.translateRect(l(e, !1), d, h);
                z = w.translateRect(l(m, !0), d, h);
                q = (q = r(n)) ? w.translateRect(q,
                    d, h) : c(p, z);
                x = q.left;
                q = p.left + Math.max(0, q.width - (p.left - q.left));
                d = Math.min(p.top, z.top);
                h = z.top + z.height;
                x = [
                    {x: p.left, y: d + p.height},
                    {x: p.left, y: d},
                    {x: q, y: d},
                    {x: q, y: h - z.height},
                    {x: z.right, y: h - z.height},
                    {x: z.right, y: h},
                    {x: x, y: h},
                    {x: x, y: d + p.height},
                    {x: p.left, y: d + p.height}
                ];
                q = "";
                var E;
                for (E = 0; E < x.length; E += 1)q += x[E].x + "," + x[E].y + " ";
                v.setAttribute("points", q);
                y.setAttribute("cx", p.left);
                y.setAttribute("cy", d + p.height / 2);
                s.setAttribute("cx", z.right);
                s.setAttribute("cy", h - z.height / 2);
                e.detach();
                m.detach();
                n.detach()
            }
            e = Boolean(a)
        }
        t.style.display = e ? "block" : "none"
    }

    function n(a) {
        G && a === f && N.trigger()
    }

    function q(a) {
        a = 8 / a;
        y.setAttribute("r", a);
        s.setAttribute("r", a)
    }

    function e(a) {
        g.removeChild(t);
        g.classList.remove("webodf-virtualSelections");
        f.getDocument().unsubscribe(ops.Document.signalCursorMoved, n);
        A.unsubscribe(gui.ZoomHelper.signalZoomChanged, q);
        a()
    }

    var a = f.getDocument(), m, g, z = a.getDOMDocument(), t = z.createElementNS("http://www.w3.org/2000/svg", "svg"), v = z.createElementNS("http://www.w3.org/2000/svg",
        "polygon"), y = z.createElementNS("http://www.w3.org/2000/svg", "circle"), s = z.createElementNS("http://www.w3.org/2000/svg", "circle"), x = new odf.OdfUtils, w = new core.DomUtils, A = a.getCanvas().getZoomHelper(), G = !0, E = gui.SelectionMover.createPositionIterator(a.getRootNode()), F = NodeFilter.FILTER_ACCEPT, H = NodeFilter.FILTER_REJECT, N;
    this.rerender = function () {
        G && N.trigger()
    };
    this.show = function () {
        G = !0;
        N.trigger()
    };
    this.hide = function () {
        G = !1;
        N.trigger()
    };
    this.destroy = function (a) {
        core.Async.destroyAll([N.destroy, e],
            a)
    };
    (function () {
        var a = f.getMemberId();
        N = core.Task.createRedrawTask(p);
        k();
        t.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", a);
        g.classList.add("webodf-virtualSelections");
        f.getDocument().subscribe(ops.Document.signalCursorMoved, n);
        A.subscribe(gui.ZoomHelper.signalZoomChanged, q);
        q(A.getZoomLevel())
    })()
};
gui.UndoStateRules = function () {
    function f(b, d) {
        var f = b.length;
        this.previous = function () {
            for (f -= 1; 0 <= f; f -= 1)if (d(b[f]))return b[f];
            return null
        }
    }

    function k(b) {
        b = b.spec();
        var d;
        b.hasOwnProperty("position") && (d = b.position);
        return d
    }

    function d(b) {
        return b.isEdit
    }

    function b(b, d, f) {
        if (!f)return f = k(b) - k(d), 0 === f || 1 === Math.abs(f);
        b = k(b);
        d = k(d);
        f = k(f);
        return b - d === d - f
    }

    this.isEditOperation = d;
    this.isPartOfOperationSet = function (c, h) {
        var k = void 0 !== c.group, l;
        if (!c.isEdit || 0 === h.length)return!0;
        l = h[h.length - 1];
        if (k &&
            c.group === l.group)return!0;
        a:switch (c.spec().optype) {
            case "RemoveText":
            case "InsertText":
                l = !0;
                break a;
            default:
                l = !1
        }
        if (l && h.some(d)) {
            if (k) {
                var p;
                k = c.spec().optype;
                l = new f(h, d);
                var n = l.previous(), q = null, e, a;
                runtime.assert(Boolean(n), "No edit operations found in state");
                a = n.group;
                runtime.assert(void 0 !== a, "Operation has no group");
                for (e = 1; n && n.group === a;) {
                    if (k === n.spec().optype) {
                        p = n;
                        break
                    }
                    n = l.previous()
                }
                if (p) {
                    for (n = l.previous(); n;) {
                        if (n.group !== a) {
                            if (2 === e)break;
                            a = n.group;
                            e += 1
                        }
                        if (k === n.spec().optype) {
                            q =
                                n;
                            break
                        }
                        n = l.previous()
                    }
                    p = b(c, p, q)
                } else p = !1;
                return p
            }
            p = c.spec().optype;
            k = new f(h, d);
            l = k.previous();
            runtime.assert(Boolean(l), "No edit operations found in state");
            p = p === l.spec().optype ? b(c, l, k.previous()) : !1;
            return p
        }
        return!1
    }
};
gui.TrivialUndoManager = function (f) {
    function k(a) {
        0 < a.length && (x = !0, m(a), x = !1)
    }

    function d() {
        y.emit(gui.UndoManager.signalUndoStackChanged, {undoAvailable: p.hasUndoStates(), redoAvailable: p.hasRedoStates()})
    }

    function b() {
        z !== a && z !== t[t.length - 1] && t.push(z)
    }

    function c(a) {
        var b = a.previousSibling || a.nextSibling;
        a.parentNode.removeChild(a);
        q.normalizeTextNodes(b)
    }

    function h(a) {
        return Object.keys(a).map(function (b) {
            return a[b]
        })
    }

    function r(a) {
        function b(a) {
            var g = a.spec();
            if (d[g.memberid])switch (g.optype) {
                case "AddCursor":
                    e[g.memberid] ||
                    (e[g.memberid] = a, delete d[g.memberid], f -= 1);
                    break;
                case "MoveCursor":
                    c[g.memberid] || (c[g.memberid] = a)
            }
        }

        var e = {}, c = {}, d = {}, f, k = a.pop();
        g.getMemberIds().forEach(function (a) {
            d[a] = !0
        });
        for (f = Object.keys(d).length; k && 0 < f;)k.reverse(), k.forEach(b), k = a.pop();
        return h(e).concat(h(c))
    }

    function l() {
        var f = e = g.cloneDocumentElement();
        q.getElementsByTagNameNS(f, n, "cursor").forEach(c);
        q.getElementsByTagNameNS(f, n, "anchor").forEach(c);
        b();
        z = a = r([a].concat(t));
        t.length = 0;
        v.length = 0;
        d()
    }

    var p = this, n = "urn:webodf:names:cursor",
        q = new core.DomUtils, e, a = [], m, g, z = [], t = [], v = [], y = new core.EventNotifier([gui.UndoManager.signalUndoStackChanged, gui.UndoManager.signalUndoStateCreated, gui.UndoManager.signalUndoStateModified, gui.TrivialUndoManager.signalDocumentRootReplaced]), s = f || new gui.UndoStateRules, x = !1;
    this.subscribe = function (a, b) {
        y.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        y.unsubscribe(a, b)
    };
    this.hasUndoStates = function () {
        return 0 < t.length
    };
    this.hasRedoStates = function () {
        return 0 < v.length
    };
    this.setDocument = function (a) {
        g =
            a
    };
    this.purgeInitialState = function () {
        t.length = 0;
        v.length = 0;
        a.length = 0;
        z.length = 0;
        e = null;
        d()
    };
    this.setInitialState = l;
    this.initialize = function () {
        e || l()
    };
    this.setPlaybackFunction = function (a) {
        m = a
    };
    this.onOperationExecuted = function (e) {
        x || (s.isEditOperation(e) && (z === a || 0 < v.length) || !s.isPartOfOperationSet(e, z) ? (v.length = 0, b(), z = [e], t.push(z), y.emit(gui.UndoManager.signalUndoStateCreated, {operations: z}), d()) : (z.push(e), y.emit(gui.UndoManager.signalUndoStateModified, {operations: z})))
    };
    this.moveForward = function (a) {
        for (var b =
            0, e; a && v.length;)e = v.pop(), t.push(e), k(e), a -= 1, b += 1;
        b && (z = t[t.length - 1], d());
        return b
    };
    this.moveBackward = function (b) {
        for (var c = 0; b && t.length;)v.push(t.pop()), b -= 1, c += 1;
        c && (g.getMemberIds().forEach(function (a) {
            g.removeCursor(a)
        }), g.setDocumentElement(e.cloneNode(!0)), y.emit(gui.TrivialUndoManager.signalDocumentRootReplaced, {}), k(a), t.forEach(k), z = t[t.length - 1] || a, d());
        return c
    }
};
gui.TrivialUndoManager.signalDocumentRootReplaced = "documentRootReplaced";
odf.LazyStyleProperties = function (f, k) {
    var d = {};
    this.value = function (b) {
        var c;
        d.hasOwnProperty(b) ? c = d[b] : (c = k[b](), void 0 === c && f && (c = f.value(b)), d[b] = c);
        return c
    };
    this.reset = function (b) {
        f = b;
        d = {}
    }
};
odf.StyleParseUtils = function () {
    function f(d) {
        var b, c;
        d = (d = /(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px))/.exec(d)) ? {value: parseFloat(d[1]), unit: d[3]} : null;
        c = d && d.unit;
        "px" === c ? b = d.value : "cm" === c ? b = 96 * (d.value / 2.54) : "mm" === c ? b = 96 * (d.value / 25.4) : "in" === c ? b = 96 * d.value : "pt" === c ? b = d.value / 0.75 : "pc" === c && (b = 16 * d.value);
        return b
    }

    var k = odf.Namespaces.stylens;
    this.parseLength = f;
    this.parsePositiveLengthOrPercent = function (d, b, c) {
        var h;
        d && (h = parseFloat(d.substr(0,
            d.indexOf("%"))), isNaN(h) && (h = void 0));
        var k;
        void 0 !== h ? (c && (k = c.value(b)), h = void 0 === k ? void 0 : h * (k / 100)) : h = f(d);
        return h
    };
    this.getPropertiesElement = function (d, b, c) {
        for (b = c ? c.nextElementSibling : b.firstElementChild; null !== b && (b.localName !== d || b.namespaceURI !== k);)b = b.nextElementSibling;
        return b
    }
};
odf.GraphicProperties = function (f, k, d) {
    var b = this, c = odf.Namespaces.stylens, h = odf.Namespaces.svgns;
    this.verticalPos = function () {
        return b.data.value("verticalPos")
    };
    this.verticalRel = function () {
        return b.data.value("verticalRel")
    };
    this.horizontalPos = function () {
        return b.data.value("horizontalPos")
    };
    this.horizontalRel = function () {
        return b.data.value("horizontalRel")
    };
    this.strokeWidth = function () {
        return b.data.value("strokeWidth")
    };
    b.data = new odf.LazyStyleProperties(void 0 === d ? void 0 : d.data, {verticalPos: function () {
        var b =
            f.getAttributeNS(c, "vertical-pos");
        return"" === b ? void 0 : b
    }, verticalRel: function () {
        var b = f.getAttributeNS(c, "vertical-rel");
        return"" === b ? void 0 : b
    }, horizontalPos: function () {
        var b = f.getAttributeNS(c, "horizontal-pos");
        return"" === b ? void 0 : b
    }, horizontalRel: function () {
        var b = f.getAttributeNS(c, "horizontal-rel");
        return"" === b ? void 0 : b
    }, strokeWidth: function () {
        var b = f.getAttributeNS(h, "stroke-width");
        return k.parseLength(b)
    }})
};
odf.ComputedGraphicProperties = function () {
    var f;
    this.setGraphicProperties = function (k) {
        f = k
    };
    this.verticalPos = function () {
        return f && f.verticalPos() || "from-top"
    };
    this.verticalRel = function () {
        return f && f.verticalRel() || "page"
    };
    this.horizontalPos = function () {
        return f && f.horizontalPos() || "from-left"
    };
    this.horizontalRel = function () {
        return f && f.horizontalRel() || "page"
    }
};
odf.PageLayoutProperties = function (f, k, d) {
    var b = this, c = odf.Namespaces.fons;
    this.pageHeight = function () {
        return b.data.value("pageHeight") || 1123
    };
    this.pageWidth = function () {
        return b.data.value("pageWidth") || 794
    };
    b.data = new odf.LazyStyleProperties(void 0 === d ? void 0 : d.data, {pageHeight: function () {
        var b;
        f && (b = f.getAttributeNS(c, "page-height"), b = k.parseLength(b));
        return b
    }, pageWidth: function () {
        var b;
        f && (b = f.getAttributeNS(c, "page-width"), b = k.parseLength(b));
        return b
    }})
};
odf.PageLayout = function (f, k, d) {
    var b = null;
    f && (b = k.getPropertiesElement("page-layout-properties", f));
    this.pageLayout = new odf.PageLayoutProperties(b, k, d && d.pageLayout)
};
odf.PageLayoutCache = function () {
};
odf.PageLayoutCache.prototype.getPageLayout = function (f) {
};
odf.PageLayoutCache.prototype.getDefaultPageLayout = function () {
};
odf.ParagraphProperties = function (f, k, d) {
    var b = this, c = odf.Namespaces.fons;
    this.marginTop = function () {
        return b.data.value("marginTop")
    };
    b.data = new odf.LazyStyleProperties(void 0 === d ? void 0 : d.data, {marginTop: function () {
        var b = f.getAttributeNS(c, "margin-top");
        return k.parsePositiveLengthOrPercent(b, "marginTop", d && d.data)
    }})
};
odf.ComputedParagraphProperties = function () {
    var f = {}, k = [];
    this.setStyleChain = function (d) {
        k = d;
        f = {}
    };
    this.marginTop = function () {
        var d, b;
        if (f.hasOwnProperty("marginTop"))d = f.marginTop; else {
            for (b = 0; void 0 === d && b < k.length; b += 1)d = k[b].marginTop();
            f.marginTop = d
        }
        return d || 0
    }
};
odf.TextProperties = function (f, k, d) {
    var b = this, c = odf.Namespaces.fons;
    this.fontSize = function () {
        return b.data.value("fontSize")
    };
    b.data = new odf.LazyStyleProperties(void 0 === d ? void 0 : d.data, {fontSize: function () {
        var b = f.getAttributeNS(c, "font-size");
        return k.parsePositiveLengthOrPercent(b, "fontSize", d && d.data)
    }})
};
odf.ComputedTextProperties = function () {
    var f = {}, k = [];
    this.setStyleChain = function (d) {
        k = d;
        f = {}
    };
    this.fontSize = function () {
        var d, b;
        if (f.hasOwnProperty("fontSize"))d = f.fontSize; else {
            for (b = 0; void 0 === d && b < k.length; b += 1)d = k[b].fontSize();
            f.fontSize = d
        }
        return d || 12
    }
};
odf.MasterPage = function (f, k) {
    var d;
    f ? (d = f.getAttributeNS(odf.Namespaces.stylens, "page-layout-name"), this.pageLayout = k.getPageLayout(d)) : this.pageLayout = k.getDefaultPageLayout()
};
odf.MasterPageCache = function () {
};
odf.MasterPageCache.prototype.getMasterPage = function (f) {
};
odf.StylePileEntry = function (f, k, d, b) {
    this.masterPage = function () {
        var b = f.getAttributeNS(odf.Namespaces.stylens, "master-page-name"), h = null;
        b && (h = d.getMasterPage(b));
        return h
    };
    (function (c) {
        var d = f.getAttributeNS(odf.Namespaces.stylens, "family"), r = null;
        if ("graphic" === d || "chart" === d)c.graphic = void 0 === b ? void 0 : b.graphic, r = k.getPropertiesElement("graphic-properties", f, r), null !== r && (c.graphic = new odf.GraphicProperties(r, k, c.graphic));
        if ("paragraph" === d || "table-cell" === d || "graphic" === d || "presentation" ===
            d || "chart" === d)c.paragraph = void 0 === b ? void 0 : b.paragraph, r = k.getPropertiesElement("paragraph-properties", f, r), null !== r && (c.paragraph = new odf.ParagraphProperties(r, k, c.paragraph));
        if ("text" === d || "paragraph" === d || "table-cell" === d || "graphic" === d || "presentation" === d || "chart" === d)c.text = void 0 === b ? void 0 : b.text, r = k.getPropertiesElement("text-properties", f, r), null !== r && (c.text = new odf.TextProperties(r, k, c.text))
    })(this)
};
odf.StylePile = function (f, k) {
    function d(c, e) {
        var a, d;
        c.hasAttributeNS(b, "parent-style-name") && (d = c.getAttributeNS(b, "parent-style-name"), -1 === e.indexOf(d) && (a = n(d, e)));
        return new odf.StylePileEntry(c, f, k, a)
    }

    var b = odf.Namespaces.stylens, c = {}, h = {}, r, l = {}, p = {}, n;
    n = function (b, e) {
        var a = l[b], f;
        !a && (f = c[b]) && (e.push(b), a = d(f, e), l[b] = a);
        return a
    };
    this.getStyle = function (b) {
        var e = p[b] || l[b], a, f = [];
        e || (a = h[b], a || (a = c[b]) && f.push(b), a && (e = d(a, f)));
        return e
    };
    this.addCommonStyle = function (d) {
        var e;
        d.hasAttributeNS(b,
            "name") && (e = d.getAttributeNS(b, "name"), c.hasOwnProperty(e) || (c[e] = d))
    };
    this.addAutomaticStyle = function (c) {
        var e;
        c.hasAttributeNS(b, "name") && (e = c.getAttributeNS(b, "name"), h.hasOwnProperty(e) || (h[e] = c))
    };
    this.setDefaultStyle = function (b) {
        void 0 === r && (r = d(b, []))
    };
    this.getDefaultStyle = function () {
        return r
    }
};
odf.ComputedGraphicStyle = function () {
    this.text = new odf.ComputedTextProperties;
    this.paragraph = new odf.ComputedParagraphProperties;
    this.graphic = new odf.ComputedGraphicProperties
};
odf.ComputedParagraphStyle = function () {
    this.text = new odf.ComputedTextProperties;
    this.paragraph = new odf.ComputedParagraphProperties
};
odf.ComputedTextStyle = function () {
    this.text = new odf.ComputedTextProperties
};
odf.StyleCache = function (f) {
    function k(a, b, e, c) {
        b = e.getAttributeNS(b, "class-names");
        var d;
        if (b)for (b = b.split(" "), d = 0; d < b.length; d += 1)if (e = b[d])c.push(a), c.push(e)
    }

    function d(a, b) {
        var e = t.getStyleName("paragraph", a);
        void 0 !== e && (b.push("paragraph"), b.push(e));
        a.namespaceURI !== g || "h" !== a.localName && "p" !== a.localName || k("paragraph", g, a, b);
        return b
    }

    function b(a, b, e) {
        var c = [], d, f, g, h;
        for (d = 0; d < a.length; d += 2)g = a[d], h = a[d + 1], g = l[g], h = g.getStyle(h), void 0 !== h && (h = h[b], void 0 !== h && h !== f && (c.push(h), f = h));
        g = l[e];
        if (h = g.getDefaultStyle())h = h[b], void 0 !== h && h !== f && c.push(h);
        return c
    }

    function c(a, b) {
        var e = t.getStyleName("text", a), h = a.parentNode;
        void 0 !== e && (b.push("text"), b.push(e));
        "span" === a.localName && a.namespaceURI === g && k("text", g, a, b);
        if (!h || h === f)return b;
        h.namespaceURI !== g || "p" !== h.localName && "h" !== h.localName ? c(h, b) : d(h, b);
        return b
    }

    function h(a) {
        a = a.getAttributeNS(z, "family");
        return l[a]
    }

    var r = this, l, p, n, q, e, a, m, g = odf.Namespaces.textns, z = odf.Namespaces.stylens, t = new odf.StyleInfo, v = new odf.StyleParseUtils,
        y, s, x, w, A, G;
    this.getComputedGraphicStyle = function (a) {
        var e = [];
        a = t.getStyleName("graphic", a);
        void 0 !== a && (e.push("graphic"), e.push(a));
        a = e.join("/");
        var c = q[a];
        runtime.assert(0 === e.length % 2, "Invalid style chain.");
        void 0 === c && (c = new odf.ComputedGraphicStyle, c.graphic.setGraphicProperties(b(e, "graphic", "graphic")[0]), c.text.setStyleChain(b(e, "text", "graphic")), c.paragraph.setStyleChain(b(e, "paragraph", "graphic")), q[a] = c);
        return c
    };
    this.getComputedParagraphStyle = function (a) {
        a = d(a, []);
        var e = a.join("/"),
            c = n[e];
        runtime.assert(0 === a.length % 2, "Invalid style chain.");
        void 0 === c && (c = new odf.ComputedParagraphStyle, c.text.setStyleChain(b(a, "text", "paragraph")), c.paragraph.setStyleChain(b(a, "paragraph", "paragraph")), n[e] = c);
        return c
    };
    this.getComputedTextStyle = function (a) {
        a = c(a, []);
        var e = a.join("/"), d = p[e];
        runtime.assert(0 === a.length % 2, "Invalid style chain.");
        void 0 === d && (d = new odf.ComputedTextStyle, d.text.setStyleChain(b(a, "text", "text")), p[e] = d);
        return d
    };
    this.getPageLayout = function (a) {
        var b = G[a];
        b || ((b =
            A[a]) ? (b = new odf.PageLayout(b, v, w), G[a] = b) : b = w);
        return b
    };
    this.getDefaultPageLayout = function () {
        return w
    };
    this.getMasterPage = function (a) {
        var b = s[a];
        void 0 === b && ((b = y[a]) ? (b = new odf.MasterPage(b, r), s[a] = b) : b = null);
        return b
    };
    this.getDefaultMasterPage = function () {
        return x
    };
    this.update = function () {
        var b, c, d = null, g = null;
        p = {};
        n = {};
        q = {};
        y = {};
        s = {};
        G = {};
        A = {};
        e = new odf.StylePile(v, r);
        a = new odf.StylePile(v, r);
        m = new odf.StylePile(v, r);
        l = {text: e, paragraph: a, graphic: m};
        for (b = f.styles.firstElementChild; b;)b.namespaceURI ===
            z && ((c = h(b)) ? "style" === b.localName ? c.addCommonStyle(b) : "default-style" === b.localName && c.setDefaultStyle(b) : "default-page-layout" === b.localName && (d = b)), b = b.nextElementSibling;
        w = new odf.PageLayout(d, v);
        for (b = f.automaticStyles.firstElementChild; b;)b.namespaceURI === z && ((c = h(b)) && "style" === b.localName ? c.addAutomaticStyle(b) : "page-layout" === b.localName && (A[b.getAttributeNS(z, "name")] = b)), b = b.nextElementSibling;
        for (b = f.masterStyles.firstElementChild; b;)b.namespaceURI === z && "master-page" === b.localName && (g =
            g || b, c = b, d = c.getAttributeNS(z, "name"), 0 < d.length && !y.hasOwnProperty(d) && (y[d] = c)), b = b.nextElementSibling;
        x = new odf.MasterPage(g, r)
    }
};
ops.OperationTransformMatrix = function () {
    function f(b) {
        b.position += b.length;
        b.length *= -1
    }

    function k(b) {
        var a = 0 > b.length;
        a && f(b);
        return a
    }

    function d(b, a) {
        function c(f) {
            b[f] === a && d.push(f)
        }

        var d = [];
        b && ["style:parent-style-name", "style:next-style-name"].forEach(c);
        return d
    }

    function b(b, a) {
        function c(d) {
            b[d] === a && delete b[d]
        }

        b && ["style:parent-style-name", "style:next-style-name"].forEach(c)
    }

    function c(b) {
        var a = {};
        Object.keys(b).forEach(function (d) {
            a[d] = "object" === typeof b[d] ? c(b[d]) : b[d]
        });
        return a
    }

    function h(b, a, c, d) {
        var f, h = !1, k = !1, l, n = [];
        d && d.attributes && (n = d.attributes.split(","));
        b && (c || 0 < n.length) && Object.keys(b).forEach(function (a) {
            var d = b[a], f;
            "object" !== typeof d && (c && (f = c[a]), void 0 !== f ? (delete b[a], k = !0, f === d && (delete c[a], h = !0)) : -1 !== n.indexOf(a) && (delete b[a], k = !0))
        });
        if (a && a.attributes && (c || 0 < n.length)) {
            l = a.attributes.split(",");
            for (d = 0; d < l.length; d += 1)if (f = l[d], c && void 0 !== c[f] || n && -1 !== n.indexOf(f))l.splice(d, 1), d -= 1, k = !0;
            0 < l.length ? a.attributes = l.join(",") : delete a.attributes
        }
        return{majorChanged: h,
            minorChanged: k}
    }

    function r(b) {
        for (var a in b)if (b.hasOwnProperty(a))return!0;
        return!1
    }

    function l(b) {
        for (var a in b)if (b.hasOwnProperty(a) && ("attributes" !== a || 0 < b.attributes.length))return!0;
        return!1
    }

    function p(b, a, c, d, f) {
        var k = b ? b[f] : null, n = a ? a[f] : null, p = c ? c[f] : null, q = d ? d[f] : null, x;
        x = h(k, n, p, q);
        k && !r(k) && delete b[f];
        n && !l(n) && delete a[f];
        p && !r(p) && delete c[f];
        q && !l(q) && delete d[f];
        return x
    }

    function n(b, a) {
        return{opSpecsA: [b], opSpecsB: [a]}
    }

    var q;
    q = {AddCursor: {AddCursor: n, AddMember: n, AddStyle: n, ApplyDirectStyling: n,
        InsertText: n, MergeParagraph: n, MoveCursor: n, RemoveCursor: n, RemoveMember: n, RemoveStyle: n, RemoveText: n, SetParagraphStyle: n, SplitParagraph: n, UpdateMember: n, UpdateMetadata: n, UpdateParagraphStyle: n}, AddMember: {AddStyle: n, InsertText: n, MergeParagraph: n, MoveCursor: n, RemoveCursor: n, RemoveStyle: n, RemoveText: n, SetParagraphStyle: n, SplitParagraph: n, UpdateMetadata: n, UpdateParagraphStyle: n}, AddStyle: {AddStyle: n, ApplyDirectStyling: n, InsertText: n, MergeParagraph: n, MoveCursor: n, RemoveCursor: n, RemoveMember: n, RemoveStyle: function (e, a) {
        var c, f = [e], h = [a];
        e.styleFamily === a.styleFamily && (c = d(e.setProperties, a.styleName), 0 < c.length && (c = {optype: "UpdateParagraphStyle", memberid: a.memberid, timestamp: a.timestamp, styleName: e.styleName, removedProperties: {attributes: c.join(",")}}, h.unshift(c)), b(e.setProperties, a.styleName));
        return{opSpecsA: f, opSpecsB: h}
    }, RemoveText: n, SetParagraphStyle: n, SplitParagraph: n, UpdateMember: n, UpdateMetadata: n, UpdateParagraphStyle: n}, ApplyDirectStyling: {ApplyDirectStyling: function (b, a, d) {
        var f, h, k, l, n, q, x, w;
        l = [b];
        k = [a];
        if (!(b.position + b.length <= a.position || b.position >= a.position + a.length)) {
            f = d ? b : a;
            h = d ? a : b;
            if (b.position !== a.position || b.length !== a.length)q = c(f), x = c(h);
            a = p(h.setProperties, null, f.setProperties, null, "style:text-properties");
            if (a.majorChanged || a.minorChanged)k = [], b = [], l = f.position + f.length, n = h.position + h.length, h.position < f.position ? a.minorChanged && (w = c(x), w.length = f.position - h.position, b.push(w), h.position = f.position, h.length = n - h.position) : f.position < h.position && a.majorChanged && (w = c(q), w.length =
                h.position - f.position, k.push(w), f.position = h.position, f.length = l - f.position), n > l ? a.minorChanged && (q = x, q.position = l, q.length = n - l, b.push(q), h.length = l - h.position) : l > n && a.majorChanged && (q.position = n, q.length = l - n, k.push(q), f.length = n - f.position), f.setProperties && r(f.setProperties) && k.push(f), h.setProperties && r(h.setProperties) && b.push(h), d ? (l = k, k = b) : l = b
        }
        return{opSpecsA: l, opSpecsB: k}
    }, InsertText: function (b, a) {
        a.position <= b.position ? b.position += a.text.length : a.position <= b.position + b.length && (b.length +=
            a.text.length);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, MergeParagraph: function (b, a) {
        var c = b.position, d = b.position + b.length;
        c >= a.sourceStartPosition && (c -= 1);
        d >= a.sourceStartPosition && (d -= 1);
        b.position = c;
        b.length = d - c;
        return{opSpecsA: [b], opSpecsB: [a]}
    }, MoveCursor: n, RemoveCursor: n, RemoveStyle: n, RemoveText: function (b, a) {
        var c = b.position + b.length, d = a.position + a.length, f = [b], h = [a];
        d <= b.position ? b.position -= a.length : a.position < c && (b.position < a.position ? b.length = d < c ? b.length - a.length : a.position - b.position : (b.position =
            a.position, d < c ? b.length = c - d : f = []));
        return{opSpecsA: f, opSpecsB: h}
    }, SetParagraphStyle: n, SplitParagraph: function (b, a) {
        a.position < b.position ? b.position += 1 : a.position < b.position + b.length && (b.length += 1);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, UpdateMetadata: n, UpdateParagraphStyle: n}, InsertText: {InsertText: function (b, a, c) {
        b.position < a.position ? a.position += b.text.length : b.position > a.position ? b.position += a.text.length : c ? a.position += b.text.length : b.position += a.text.length;
        return{opSpecsA: [b], opSpecsB: [a]}
    }, MergeParagraph: function (b, a) {
        b.position >= a.sourceStartPosition ? b.position -= 1 : (b.position < a.sourceStartPosition && (a.sourceStartPosition += b.text.length), b.position < a.destinationStartPosition && (a.destinationStartPosition += b.text.length));
        return{opSpecsA: [b], opSpecsB: [a]}
    }, MoveCursor: function (b, a) {
        var c = k(a);
        b.position < a.position ? a.position += b.text.length : b.position < a.position + a.length && (a.length += b.text.length);
        c && f(a);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, RemoveCursor: n, RemoveMember: n, RemoveStyle: n, RemoveText: function (b, a) {
        var c;
        c = a.position + a.length;
        var d = [b], f = [a];
        c <= b.position ? b.position -= a.length : b.position <= a.position ? a.position += b.text.length : (a.length = b.position - a.position, c = {optype: "RemoveText", memberid: a.memberid, timestamp: a.timestamp, position: b.position + b.text.length, length: c - b.position}, f.unshift(c), b.position = a.position);
        return{opSpecsA: d, opSpecsB: f}
    }, SetParagraphStyle: function (b, a) {
        a.position > b.position && (a.position += b.text.length);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, SplitParagraph: function (b, a) {
        b.position < a.sourceParagraphPosition &&
        (a.sourceParagraphPosition += b.text.length);
        b.position <= a.position ? a.position += b.text.length : b.position += 1;
        return{opSpecsA: [b], opSpecsB: [a]}
    }, UpdateMember: n, UpdateMetadata: n, UpdateParagraphStyle: n}, MergeParagraph: {MergeParagraph: function (b, a, c) {
        var d = [b], f = [a], h;
        b.destinationStartPosition === a.destinationStartPosition ? (d = [], f = [], b.moveCursor && (h = {optype: "MoveCursor", memberid: b.memberid, timestamp: b.timestamp, position: b.sourceStartPosition - 1}, d.push(h)), a.moveCursor && (h = {optype: "MoveCursor", memberid: a.memberid,
            timestamp: a.timestamp, position: a.sourceStartPosition - 1}, f.push(h)), b = c ? b : a, b = {optype: "SetParagraphStyle", memberid: b.memberid, timestamp: b.timestamp, position: b.destinationStartPosition, styleName: b.paragraphStyleName}, c ? d.push(b) : f.push(b)) : b.destinationStartPosition < a.destinationStartPosition ? (a.destinationStartPosition -= 1, a.sourceStartPosition -= 1) : (b.destinationStartPosition -= 1, b.sourceStartPosition -= 1);
        return{opSpecsA: d, opSpecsB: f}
    }, MoveCursor: function (b, a) {
        var c = a.position, d = a.position + a.length,
            f = Math.min(c, d), c = Math.max(c, d);
        f >= b.sourceStartPosition && (f -= 1);
        c >= b.sourceStartPosition && (c -= 1);
        0 <= a.length ? (a.position = f, a.length = c - f) : (a.position = c, a.length = f - c);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, RemoveCursor: n, RemoveMember: n, RemoveStyle: n, RemoveText: function (b, a) {
        a.position >= b.sourceStartPosition ? a.position -= 1 : (a.position < b.destinationStartPosition && (b.destinationStartPosition -= a.length), a.position < b.sourceStartPosition && (b.sourceStartPosition -= a.length));
        return{opSpecsA: [b], opSpecsB: [a]}
    },
        SetParagraphStyle: function (b, a) {
            var c = [b], d = [a];
            if (a.position > b.sourceStartPosition)a.position -= 1; else if (a.position === b.destinationStartPosition || a.position === b.sourceStartPosition)a.position = b.destinationStartPosition, b.paragraphStyleName = a.styleName;
            return{opSpecsA: c, opSpecsB: d}
        }, SplitParagraph: function (b, a) {
            var c, d = [b], f = [a];
            a.position < b.destinationStartPosition ? (b.destinationStartPosition += 1, b.sourceStartPosition += 1) : a.position >= b.destinationStartPosition && a.position < b.sourceStartPosition ? (a.paragraphStyleName =
                b.paragraphStyleName, c = {optype: "SetParagraphStyle", memberid: b.memberid, timestamp: b.timestamp, position: b.destinationStartPosition, styleName: b.paragraphStyleName}, d.push(c), a.position === b.sourceStartPosition - 1 && b.moveCursor && (c = {optype: "MoveCursor", memberid: b.memberid, timestamp: b.timestamp, position: a.position, length: 0}, d.push(c)), b.destinationStartPosition = a.position + 1, b.sourceStartPosition += 1) : a.position >= b.sourceStartPosition && (a.position -= 1, a.sourceParagraphPosition -= 1);
            return{opSpecsA: d, opSpecsB: f}
        },
        UpdateMember: n, UpdateMetadata: n, UpdateParagraphStyle: n}, MoveCursor: {MoveCursor: n, RemoveCursor: function (b, a) {
        return{opSpecsA: b.memberid === a.memberid ? [] : [b], opSpecsB: [a]}
    }, RemoveMember: n, RemoveStyle: n, RemoveText: function (b, a) {
        var c = k(b), d = b.position + b.length, h = a.position + a.length;
        h <= b.position ? b.position -= a.length : a.position < d && (b.position < a.position ? b.length = h < d ? b.length - a.length : a.position - b.position : (b.position = a.position, b.length = h < d ? d - h : 0));
        c && f(b);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, SetParagraphStyle: n,
        SplitParagraph: function (b, a) {
            var c = k(b);
            a.position < b.position ? b.position += 1 : a.position < b.position + b.length && (b.length += 1);
            c && f(b);
            return{opSpecsA: [b], opSpecsB: [a]}
        }, UpdateMember: n, UpdateMetadata: n, UpdateParagraphStyle: n}, RemoveCursor: {RemoveCursor: function (b, a) {
        var c = b.memberid === a.memberid;
        return{opSpecsA: c ? [] : [b], opSpecsB: c ? [] : [a]}
    }, RemoveMember: n, RemoveStyle: n, RemoveText: n, SetParagraphStyle: n, SplitParagraph: n, UpdateMember: n, UpdateMetadata: n, UpdateParagraphStyle: n}, RemoveMember: {RemoveStyle: n, RemoveText: n,
        SetParagraphStyle: n, SplitParagraph: n, UpdateMetadata: n, UpdateParagraphStyle: n}, RemoveStyle: {RemoveStyle: function (b, a) {
        var c = b.styleName === a.styleName && b.styleFamily === a.styleFamily;
        return{opSpecsA: c ? [] : [b], opSpecsB: c ? [] : [a]}
    }, RemoveText: n, SetParagraphStyle: function (b, a) {
        var c, d = [b], f = [a];
        "paragraph" === b.styleFamily && b.styleName === a.styleName && (c = {optype: "SetParagraphStyle", memberid: b.memberid, timestamp: b.timestamp, position: a.position, styleName: ""}, d.unshift(c), a.styleName = "");
        return{opSpecsA: d, opSpecsB: f}
    },
        SplitParagraph: n, UpdateMember: n, UpdateMetadata: n, UpdateParagraphStyle: function (c, a) {
            var f, g = [c], h = [a];
            "paragraph" === c.styleFamily && (f = d(a.setProperties, c.styleName), 0 < f.length && (f = {optype: "UpdateParagraphStyle", memberid: c.memberid, timestamp: c.timestamp, styleName: a.styleName, removedProperties: {attributes: f.join(",")}}, g.unshift(f)), c.styleName === a.styleName ? h = [] : b(a.setProperties, c.styleName));
            return{opSpecsA: g, opSpecsB: h}
        }}, RemoveText: {RemoveText: function (b, a) {
        var c = b.position + b.length, d = a.position +
            a.length, f = [b], h = [a];
        d <= b.position ? b.position -= a.length : c <= a.position ? a.position -= b.length : a.position < c && (b.position < a.position ? (b.length = d < c ? b.length - a.length : a.position - b.position, c < d ? (a.position = b.position, a.length = d - c) : h = []) : (c < d ? a.length -= b.length : a.position < b.position ? a.length = b.position - a.position : h = [], d < c ? (b.position = a.position, b.length = c - d) : f = []));
        return{opSpecsA: f, opSpecsB: h}
    }, SetParagraphStyle: function (b, a) {
        b.position < a.position && (a.position -= b.length);
        return{opSpecsA: [b], opSpecsB: [a]}
    },
        SplitParagraph: function (b, a) {
            var c = b.position + b.length, d = [b], f = [a];
            a.position <= b.position ? b.position += 1 : a.position < c && (b.length = a.position - b.position, c = {optype: "RemoveText", memberid: b.memberid, timestamp: b.timestamp, position: a.position + 1, length: c - a.position}, d.unshift(c));
            b.position + b.length <= a.position ? a.position -= b.length : b.position < a.position && (a.position = b.position);
            b.position + b.length < a.sourceParagraphPosition && (a.sourceParagraphPosition -= b.length);
            return{opSpecsA: d, opSpecsB: f}
        }, UpdateMember: n,
        UpdateMetadata: n, UpdateParagraphStyle: n}, SetParagraphStyle: {SetParagraphStyle: function (b, a, c) {
        b.position === a.position && (c ? a.styleName = b.styleName : b.styleName = a.styleName);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, SplitParagraph: function (b, a) {
        var d = [b], f = [a], h;
        b.position > a.position ? b.position += 1 : b.position === a.sourceParagraphPosition && (a.paragraphStyleName = b.styleName, h = c(b), h.position = a.position + 1, d.push(h));
        return{opSpecsA: d, opSpecsB: f}
    }, UpdateMember: n, UpdateMetadata: n, UpdateParagraphStyle: n}, SplitParagraph: {SplitParagraph: function (b, a, c) {
        var d, f;
        b.position < a.position ? d = !0 : a.position < b.position ? f = !0 : b.position === a.position && (c ? d = !0 : f = !0);
        d ? (a.position += 1, a.sourceParagraphPosition = b.position < a.sourceParagraphPosition ? a.sourceParagraphPosition + 1 : b.position + 1) : f && (b.position += 1, b.sourceParagraphPosition = a.position < a.sourceParagraphPosition ? b.sourceParagraphPosition + 1 : a.position + 1);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, UpdateMember: n, UpdateMetadata: n, UpdateParagraphStyle: n}, UpdateMember: {UpdateMetadata: n, UpdateParagraphStyle: n}, UpdateMetadata: {UpdateMetadata: function (b, a, c) {
        var d, f = [b], k = [a];
        d = c ? b : a;
        b = c ? a : b;
        h(b.setProperties || null, b.removedProperties || null, d.setProperties || null, d.removedProperties || null);
        d.setProperties && r(d.setProperties) || d.removedProperties && l(d.removedProperties) || (c ? f = [] : k = []);
        b.setProperties && r(b.setProperties) || b.removedProperties && l(b.removedProperties) || (c ? k = [] : f = []);
        return{opSpecsA: f, opSpecsB: k}
    }, UpdateParagraphStyle: n}, UpdateParagraphStyle: {UpdateParagraphStyle: function (b, a, c) {
        var d, f = [b], k = [a];
        b.styleName === a.styleName && (d = c ? b : a, b = c ?
            a : b, p(b.setProperties, b.removedProperties, d.setProperties, d.removedProperties, "style:paragraph-properties"), p(b.setProperties, b.removedProperties, d.setProperties, d.removedProperties, "style:text-properties"), h(b.setProperties || null, b.removedProperties || null, d.setProperties || null, d.removedProperties || null), d.setProperties && r(d.setProperties) || d.removedProperties && l(d.removedProperties) || (c ? f = [] : k = []), b.setProperties && r(b.setProperties) || b.removedProperties && l(b.removedProperties) || (c ? k = [] : f = []));
        return{opSpecsA: f,
            opSpecsB: k}
    }}};
    this.passUnchanged = n;
    this.extendTransformations = function (b) {
        Object.keys(b).forEach(function (a) {
            var c = b[a], d, f = q.hasOwnProperty(a);
            runtime.log((f ? "Extending" : "Adding") + " map for optypeA: " + a);
            f || (q[a] = {});
            d = q[a];
            Object.keys(c).forEach(function (b) {
                var e = d.hasOwnProperty(b);
                runtime.assert(a <= b, "Wrong order:" + a + ", " + b);
                runtime.log("  " + (e ? "Overwriting" : "Adding") + " entry for optypeB: " + b);
                d[b] = c[b]
            })
        })
    };
    this.transformOpspecVsOpspec = function (b, a) {
        var c = b.optype <= a.optype, d;
        runtime.log("Crosstransforming:");
        runtime.log(runtime.toJson(b));
        runtime.log(runtime.toJson(a));
        c || (d = b, b = a, a = d);
        (d = (d = q[b.optype]) && d[a.optype]) ? (d = d(b, a, !c), c || null === d || (d = {opSpecsA: d.opSpecsB, opSpecsB: d.opSpecsA})) : d = null;
        runtime.log("result:");
        d ? (runtime.log(runtime.toJson(d.opSpecsA)), runtime.log(runtime.toJson(d.opSpecsB))) : runtime.log("null");
        return d
    }
};
ops.OperationTransformer = function () {
    function f(d, b) {
        for (var c, h, r = [], l = []; 0 < d.length && b;) {
            c = d.shift();
            c = k.transformOpspecVsOpspec(c, b);
            if (!c)return null;
            r = r.concat(c.opSpecsA);
            if (0 === c.opSpecsB.length) {
                r = r.concat(d);
                b = null;
                break
            }
            for (; 1 < c.opSpecsB.length;) {
                h = f(d, c.opSpecsB.shift());
                if (!h)return null;
                l = l.concat(h.opSpecsB);
                d = h.opSpecsA
            }
            b = c.opSpecsB.pop()
        }
        b && l.push(b);
        return{opSpecsA: r, opSpecsB: l}
    }

    var k = new ops.OperationTransformMatrix;
    this.getOperationTransformMatrix = function () {
        return k
    };
    this.transform =
        function (d, b) {
            for (var c, h = []; 0 < b.length;) {
                c = f(d, b.shift());
                if (!c)return null;
                d = c.opSpecsA;
                h = h.concat(c.opSpecsB)
            }
            return{opSpecsA: d, opSpecsB: h}
        }
};
var webodf_css = "/**\n * Copyright (C) 2010-2014 KO GmbH <copyright@kogmbh.com>\n *\n * @licstart\n * This file is part of WebODF.\n *\n * WebODF is free software: you can redistribute it and/or modify it\n * under the terms of the GNU Affero General Public License (GNU AGPL)\n * as published by the Free Software Foundation, either version 3 of\n * the License, or (at your option) any later version.\n *\n * WebODF is distributed in the hope that it will be useful, but\n * WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with WebODF.  If not, see <http://www.gnu.org/licenses/>.\n * @licend\n *\n * @source: http://www.webodf.org/\n * @source: https://github.com/kogmbh/WebODF/\n */\n\n@namespace draw url(urn:oasis:names:tc:opendocument:xmlns:drawing:1.0);\n@namespace fo url(urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0);\n@namespace office url(urn:oasis:names:tc:opendocument:xmlns:office:1.0);\n@namespace presentation url(urn:oasis:names:tc:opendocument:xmlns:presentation:1.0);\n@namespace style url(urn:oasis:names:tc:opendocument:xmlns:style:1.0);\n@namespace svg url(urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0);\n@namespace table url(urn:oasis:names:tc:opendocument:xmlns:table:1.0);\n@namespace text url(urn:oasis:names:tc:opendocument:xmlns:text:1.0);\n@namespace webodfhelper url(urn:webodf:names:helper);\n@namespace cursor url(urn:webodf:names:cursor);\n@namespace editinfo url(urn:webodf:names:editinfo);\n@namespace annotation url(urn:webodf:names:annotation);\n@namespace dc url(http://purl.org/dc/elements/1.1/);\n@namespace svgns url(http://www.w3.org/2000/svg);\n\noffice|document > *, office|document-content > * {\n  display: none;\n}\noffice|body, office|document {\n  display: inline-block;\n  position: relative;\n}\n\ntext|p, text|h {\n  display: block;\n  padding: 0;\n  margin: 0;\n  line-height: normal;\n  position: relative;\n  min-height: 1.3em; /* prevent empty paragraphs and headings from collapsing if they are empty */\n}\n*[webodfhelper|containsparagraphanchor] {\n  position: relative;\n}\ntext|s {\n    white-space: pre;\n}\ntext|tab {\n  display: inline;\n  white-space: pre;\n}\ntext|tracked-changes {\n  /*Consumers that do not support change tracking, should ignore changes.*/\n  display: none;\n}\noffice|binary-data {\n  display: none;\n}\noffice|text {\n  display: block;\n  text-align: left;\n  overflow: visible;\n  word-wrap: break-word;\n}\n\noffice|text::selection {\n  /** Let's not draw selection highlight that overflows into the office|text\n   * node when selecting content across several paragraphs\n   */\n  background: transparent;\n}\n\n.webodf-virtualSelections *::selection {\n  background: transparent;\n}\n.webodf-virtualSelections *::-moz-selection {\n  background: transparent;\n}\n\noffice|text * draw|text-box {\n/** only for text documents */\n    display: block;\n    border: 1px solid #d3d3d3;\n}\noffice|text draw|frame {\n  /** make sure frames are above the main text. */\n  z-index: 1;\n}\noffice|spreadsheet {\n  display: block;\n  border-collapse: collapse;\n  empty-cells: show;\n  font-family: sans-serif;\n  font-size: 10pt;\n  text-align: left;\n  page-break-inside: avoid;\n  overflow: hidden;\n}\noffice|presentation {\n  display: inline-block;\n  text-align: left;\n}\n#shadowContent {\n  display: inline-block;\n  text-align: left;\n}\ndraw|page {\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\npresentation|notes, presentation|footer-decl, presentation|date-time-decl {\n    display: none;\n}\n@media print {\n  draw|page {\n    border: 1pt solid black;\n    page-break-inside: avoid;\n  }\n  presentation|notes {\n    /*TODO*/\n  }\n}\noffice|spreadsheet text|p {\n  border: 0px;\n  padding: 1px;\n  margin: 0px;\n}\noffice|spreadsheet table|table {\n  margin: 3px;\n}\noffice|spreadsheet table|table:after {\n  /* show sheet name the end of the sheet */\n  /*content: attr(table|name);*/ /* gives parsing error in opera */\n}\noffice|spreadsheet table|table-row {\n  counter-increment: row;\n}\noffice|spreadsheet table|table-row:before {\n  width: 3em;\n  background: #cccccc;\n  border: 1px solid black;\n  text-align: center;\n  content: counter(row);\n  display: table-cell;\n}\noffice|spreadsheet table|table-cell {\n  border: 1px solid #cccccc;\n}\ntable|table {\n  display: table;\n}\ndraw|frame table|table {\n  width: 100%;\n  height: 100%;\n  background: white;\n}\ntable|table-header-rows {\n  display: table-header-group;\n}\ntable|table-row {\n  display: table-row;\n}\ntable|table-column {\n  display: table-column;\n}\ntable|table-cell {\n  width: 0.889in;\n  display: table-cell;\n  word-break: break-all; /* prevent long words from extending out the table cell */\n}\ndraw|frame {\n  display: block;\n}\ndraw|image {\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  -moz-background-size: 100% 100%;\n}\n/* only show the first image in frame */\ndraw|frame > draw|image:nth-of-type(n+2) {\n  display: none;\n}\ntext|list:before {\n    display: none;\n    content:\"\";\n}\ntext|list {\n    display: block;\n}\ntext|list-item {\n    display: block;\n}\ntext|number {\n    display:none;\n}\n\ntext|a {\n    color: blue;\n    text-decoration: underline;\n    cursor: pointer;\n}\n.webodf-inactiveLinks text|a {\n    cursor: text;\n}\ntext|note-citation {\n    vertical-align: super;\n    font-size: smaller;\n}\ntext|note-body {\n    display: none;\n}\ntext|note:hover text|note-citation {\n    background: #dddddd;\n}\ntext|note:hover text|note-body {\n    display: block;\n    left:1em;\n    max-width: 80%;\n    position: absolute;\n    background: #ffffaa;\n}\ntext|bibliography-source {\n  display: none;\n}\nsvg|title, svg|desc {\n    display: none;\n}\nvideo {\n    width: 100%;\n    height: 100%\n}\n\n/* below set up the cursor */\ncursor|anchor {\n    display: none;\n}\n\ncursor|cursor {\n    display: none;\n}\n\n.webodf-caretOverlay {\n    position: absolute;\n    top: 5%; /* push down the caret; 0px can do the job, 5% looks better, 10% is a bit over */\n    height: 1em;\n    margin-left: -1px;\n    z-index: 10;\n    pointer-events: none;\n}\n\n.webodf-caretOverlay .caret {\n    position: absolute;\n    border-left: 2px solid black;\n    top: 0;\n    bottom: 0;\n}\n\n.webodf-caretOverlay .handle {\n    margin-top: 5px;\n    padding-top: 3px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 64px !important;\n    height: 68px !important;\n    border-radius: 5px;\n    opacity: 0.3;\n    text-align: center;\n    background-color: black !important;\n    box-shadow: 0px 0px 5px rgb(90, 90, 90);\n    border: 1px solid black;\n\n    top: -85px !important;\n    left: -32px !important;\n}\n\n.webodf-caretOverlay .handle > img {\n    box-shadow: 0px 0px 5px rgb(90, 90, 90) inset;\n    background-color: rgb(200, 200, 200);\n    border-radius: 5px;\n    border: 2px solid;\n    height: 60px !important;\n    width: 60px !important;\n    display: block;\n    margin: auto;\n}\n\n.webodf-caretOverlay .handle.active {\n    opacity: 0.8;\n}\n\n.webodf-caretOverlay .handle:after {\n    content: ' ';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 43%;\n}\n\n.webodf-caretSizer {\n    display: inline-block; /* inline-block is necessary so the width can be set to 0 */\n    width: 0; /* the caret sizer shouldn't take up any horizontal space */\n    visibility: hidden; /* \"hidden\" means the client rects are still calculated, but the node content is not shown */\n}\n\n/** Input Method Editor input pane & behaviours */\n/* not within a cursor */\n#eventTrap {\n    height: auto;\n    display: block;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 1px;\n    outline: none;\n    opacity: 0;\n    color: rgba(255, 255, 255, 0); /* hide the blinking caret by setting the colour to fully transparent */\n    overflow: hidden; /* The overflow visibility is used to hide and show characters being entered */\n    pointer-events: none;\n}\n\n/* within a cursor */\ncursor|cursor > #composer {\n    text-decoration: underline;\n}\n\ncursor|cursor[cursor|caret-sizer-active=\"true\"],\ncursor|cursor[cursor|composing=\"true\"] {\n    display: inline;\n}\n\neditinfo|editinfo {\n    /* Empty or invisible display:inline elements respond very badly to mouse selection.\n       Inline blocks are much more reliably selectable in Chrome & friends */\n    display: inline-block;\n}\n\n.editInfoMarker {\n    position: absolute;\n    width: 10px;\n    height: 100%;\n    left: -20px;\n    opacity: 0.8;\n    top: 0;\n    border-radius: 5px;\n    background-color: transparent;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n}\n.editInfoMarker:hover {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);\n}\n\n.editInfoHandle {\n    position: absolute;\n    background-color: black;\n    padding: 5px;\n    border-radius: 5px;\n    opacity: 0.8;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    bottom: 100%;\n    margin-bottom: 10px;\n    z-index: 3;\n    left: -25px;\n}\n.editInfoHandle:after {\n    content: ' ';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 5px;\n}\n.editInfo {\n    font-family: sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    color: white;\n    width: 100%;\n    height: 12pt;\n}\n.editInfoColor {\n    float: left;\n    width: 10pt;\n    height: 10pt;\n    border: 1px solid white;\n}\n.editInfoAuthor {\n    float: left;\n    margin-left: 5pt;\n    font-size: 10pt;\n    text-align: left;\n    height: 12pt;\n    line-height: 12pt;\n}\n.editInfoTime {\n    float: right;\n    margin-left: 30pt;\n    font-size: 8pt;\n    font-style: italic;\n    color: yellow;\n    height: 12pt;\n    line-height: 12pt;\n}\n\n.annotationWrapper {\n    display: inline;\n    position: relative;\n}\n\n.annotationRemoveButton:before {\n    content: '\u00d7';\n    color: white;\n    padding: 5px;\n    line-height: 1em;\n}\n\n.annotationRemoveButton {\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    background-color: black;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    z-index: 3;\n    text-align: center;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: none;\n    font-size: 15px;\n}\n.annotationRemoveButton:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);\n}\n\n.annotationNote {\n    width: 4cm;\n    position: absolute;\n    display: inline;\n    z-index: 10;\n    top: 0;\n}\n.annotationNote > office|annotation {\n    display: block;\n    text-align: left;\n}\n\n.annotationConnector {\n    position: absolute;\n    display: inline;\n    top: 0;\n    z-index: 2;\n    border-top: 1px dashed brown;\n}\n.annotationConnector.angular {\n    -moz-transform-origin: left top;\n    -webkit-transform-origin: left top;\n    -ms-transform-origin: left top;\n    transform-origin: left top;\n}\n.annotationConnector.horizontal {\n    left: 0;\n}\n.annotationConnector.horizontal:before {\n    content: '';\n    display: inline;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: brown transparent transparent transparent;\n    top: -1px;\n    left: -5px;\n}\n\noffice|annotation {\n    width: 100%;\n    height: 100%;\n    display: none;\n    background: rgb(198, 238, 184);\n    background: -moz-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -webkit-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -o-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -ms-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: linear-gradient(180deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    box-shadow: 0 3px 4px -3px #ccc;\n}\n\noffice|annotation > dc|creator {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    color: white;\n    background-color: brown;\n    padding: 4px;\n}\noffice|annotation > dc|date {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    border: 4px solid transparent;\n    color: black;\n}\noffice|annotation > text|list {\n    display: block;\n    padding: 5px;\n}\n\n/* This is very temporary CSS. This must go once\n * we start bundling webodf-default ODF styles for annotations.\n */\noffice|annotation text|p {\n    font-size: 10pt;\n    color: black;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    font-family: sans-serif;\n}\n\n#annotationsPane {\n    background-color: #EAEAEA;\n    width: 4cm;\n    height: 100%;\n    display: none;\n    position: absolute;\n    outline: 1px solid #ccc;\n}\n\n.webodf-annotationHighlight {\n    background-color: yellow;\n    position: relative;\n}\n\n.webodf-selectionOverlay {\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 15;\n}\n.webodf-selectionOverlay > polygon {\n    fill-opacity: 0.3;\n    stroke-opacity: 0.8;\n    stroke-width: 1;\n    fill-rule: evenodd;\n}\n\n.webodf-selectionOverlay > .webodf-draggable {\n    fill-opacity: 0.8;\n    stroke-opacity: 0;\n    stroke-width: 8;\n    pointer-events: all;\n    display: none;\n\n    -moz-transform-origin: center center;\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n}\n\n#imageSelector {\n    display: none;\n    position: absolute;\n    border-style: solid;\n    border-color: black;\n}\n\n#imageSelector > div {\n    width: 5px;\n    height: 5px;\n    display: block;\n    position: absolute;\n    border: 1px solid black;\n    background-color: #ffffff;\n}\n\n#imageSelector > .topLeft {\n    top: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topRight {\n    top: -4px;\n    right: -4px;\n}\n\n#imageSelector > .bottomRight {\n    right: -4px;\n    bottom: -4px;\n}\n\n#imageSelector > .bottomLeft {\n    bottom: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topMiddle {\n    top: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .rightMiddle {\n    top: 50%;\n    right: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n\n#imageSelector > .bottomMiddle {\n    bottom: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .leftMiddle {\n    top: 50%;\n    left: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n\ndiv.webodf-customScrollbars::-webkit-scrollbar\n{\n    width: 8px;\n    height: 8px;\n    background-color: transparent;\n}\n\ndiv.webodf-customScrollbars::-webkit-scrollbar-track\n{\n    background-color: transparent;\n}\n\ndiv.webodf-customScrollbars::-webkit-scrollbar-thumb\n{\n    background-color: #444;\n    border-radius: 4px;\n}\n\n.webodf-hyperlinkTooltip {\n    display: none;\n    color: white;\n    background-color: black;\n    border-radius: 5px;\n    box-shadow: 2px 2px 5px gray;\n    padding: 3px;\n    position: absolute;\n    max-width: 210px;\n    text-align: left;\n    word-break: break-all;\n    z-index: 16;\n}\n\n.webodf-hyperlinkTooltipText {\n    display: block;\n    font-weight: bold;\n}\n";
