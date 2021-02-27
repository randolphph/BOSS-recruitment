;
(function(win) {
    let doc = win.document;
    let docEl = doc.documentElement;
    var tid;

    function refreshRem(){
        let width = docEl.getBoundingClientRect().width;
        if (width > 640) {
            width = 640;
        }
        var rem = width / 6.4;// 超过640宽度时默认设置rem为100px
        docEl.style.fontSize = rem + 'px';
    }

    win.addEventListener('resize',()=>{
        clearTimeout(tid);
        tid = setTimeout(refreshRem,300);
    },false);
    refreshRem();
    
})(window);