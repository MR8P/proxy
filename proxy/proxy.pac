/*
  Installing/using this software, you agree that this software is
  only for study purposes and its authors and service providers  
  take no responsibilities for any consequences.
*/
function _check_regex_list(i, c) {
    ":80/" === c.slice(0, 4) && (c = c.slice(3));
    for (var o = 0; o < i.length; o++)
        if (i[o].test(c)) return !0;
    return !1;
}

function _check_patterns(i, c, o, m) {
    return !(!i.hasOwnProperty(c) || !_check_regex_list(i[c], o.slice(m + c.length))) || !!_check_regex_list(i.any, o.slice(m));
}

function _find_proxy(i, c, o, m) {
    return _check_patterns(i.white, c, o, m) ? "DIRECT" : _check_patterns(i.proxy, c, o, m) ? _proxy_str : "DIRECT";
}

function FindProxyForURL(i, c) {
    var o = i.slice(0, 6);
    return "http:/" === o ? _find_proxy(_http_map, c, i, 7) : "https:" === o ? _find_proxy(_https_map, c, i, 8) : "DIRECT";
}

var _http_map = {
        white: {
            any: []
        },
        proxy: {
            any: [/^[^\/]*\.video\.qq\.com\//i],
            "s.plcloud.music.qq.com": [/^\//i],
            "i.y.qq.com": [/^\//i, /^\//i],
            "c.y.qq.com": [/^\//i, /^\//i],
            "acc.music.qq.com": [/^\//i],
            "vv.video.qq.com": [/^\//i],
            "qzs.qq.com": [/^\//i],
            "zb.s.qq.com": [/^\//i],
            "ac.qq.com": [/^\//i, /^\//i, /^\//i],
            "aid.video.qq.com": [/^\//i],
            "aidbak.video.qq.com": [/^\//i],
            "pay.video.qq.com": [/^\//i],
            "paybak.video.qq.com": [/^\//i],
            "3g.music.qq.com": [/^\//i],
            "mqqplayer.3g.qq.com": [/^\//i],
            "proxy.music.qq.com": [/^\//i],
            "proxymc.qq.com": [/^\//i],
            "sns.video.qq.com": [/^\//i],
            "182.254.116.117": [/^\//i],
            "122.72.82.31": [/^\//i],
            "211.151.158.155": [/^\//i],
            "211.151.157.15": [/^\//i],
            "36.110.222.105": [/^\//i],
            "36.110.222.119": [/^\//i],
            "36.110.222.146": [/^\//i],
            "36.110.222.156": [/^\//i],
            "123.125.89.6": [/^\//i],
            "123.125.89.101": [/^\//i],
            "123.125.89.102": [/^\//i],
            "123.125.89.103": [/^\//i],
            "123.125.89.157": [/^\//i],
            "123.125.89.159": [/^\//i],
            "123.126.32.134": [/^\//i],
            "123.59.122.75": [/^\//i],
            "123.59.122.76": [/^\//i],
            "123.59.122.77": [/^\//i],
            "123.59.122.104": [/^\//i],
            "111.206.208.36": [/^\//i],
            "111.206.208.37": [/^\//i],
            "111.206.208.38": [/^\//i],
            "111.206.208.61": [/^\//i],
            "111.206.208.62": [/^\//i],
            "111.206.208.163": [/^\//i],
            "111.206.208.164": [/^\//i],
            "111.206.208.166": [/^\//i],
            "111.206.211.145": [/^\//i],
            "111.206.211.146": [/^\//i],
            "111.206.211.147": [/^\//i],
            "111.206.211.148": [/^\//i],
            "111.206.211.129": [/^\//i],
            "111.206.211.130": [/^\//i],
            "111.206.211.131": [/^\//i],
            "220.181.153.113": [/^\//i],
            "14.152.77.32": [/^\//i],
            "14.152.77.26": [/^\//i],
            "14.152.77.25": [/^\//i],
            "14.152.77.22": [/^\//i]
		}
    },
    _https_map = {
        white: {
            any: []
        },
        proxy: {
            any: []
        }
    },
    _proxy_str = "PROXY proxy.uku.im:443; DIRECT;";