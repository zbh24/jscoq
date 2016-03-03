(function () {
    var options = {
        //height: 10,
        cell_height: Math.floor(document.documentElement.clientHeight / 15),
        resizable: {
            handles: 'e, se, s, sw, w'
        },
        vertical_margin: 2,
        handle: '.jscoq-panel-wrapper .handle',
    };
    var grid = $('.grid-stack').gridstack(options);

}());