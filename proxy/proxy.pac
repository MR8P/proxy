function _check_regex_list(a, b) {
    ":80/" === b.slice(0, 4) && (b = b.slice(3));
    for (var c = 0; c < a.length; c++) if (a[c].test(b)) return !0;
    return !1;
}

function _check_patterns(a, b, c, d) {
    return !(!a.hasOwnProperty(b) || !_check_regex_list(a[b], c.slice(d + b.length))) || !!_check_regex_list(a.any, c.slice(d));
}

function _find_proxy(a, b, c, d) {
    return _check_patterns(a.white, b, c, d) ? "DIRECT" : _check_patterns(a.proxy, b, c, d) ? _proxy_str : "DIRECT";
}

function FindProxyForURL(a, b) {
    var c = a.slice(0, 6);
    return "http:/" === c ? _find_proxy(_http_map, b, a, 7) : "https:" === c ? _find_proxy(_https_map, b, a, 8) : "DIRECT";
}

var _http_map = {
    white: {
        any: []
    },
    proxy: {
        any: [ /^[^\/]*\.video\.qq\.com\//i ],
        "s.plcloud.music.qq.com": [ /^\//i ],
        "i.y.qq.com": [ /^\//i, /^\//i ],
        "c.y.qq.com": [ /^\//i, /^\//i ],
        "acc.music.qq.com": [ /^\//i ],
        "vv.video.qq.com": [ /^\//i ],
        "qzs.qq.com": [ /^\//i ],
        "zb.s.qq.com": [ /^\//i ],
        "ac.qq.com": [ /^\//i, /^\//i, /^\//i ],
        "aid.video.qq.com": [ /^\//i ],
        "aidbak.video.qq.com": [ /^\//i ],
        "pay.video.qq.com": [ /^\//i ],
        "paybak.video.qq.com": [ /^\//i ],
        "3g.music.qq.com": [ /^\//i ],
        "mqqplayer.3g.qq.com": [ /^\//i ],
        "proxy.music.qq.com": [ /^\//i ],
        "proxymc.qq.com": [ /^\//i ],
        "sns.video.qq.com": [ /^\//i ]
    }
}, _https_map = {
    white: {
        any: []
    },
    proxy: {
        any: []
    }
}, _proxy_str = "PROXY proxy.uku.im:443; DIRECT;";