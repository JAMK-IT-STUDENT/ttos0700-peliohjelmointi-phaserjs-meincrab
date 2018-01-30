demo.state3 = function(){};
demo.state3.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#66a3ff';

        addChangeStateEventListeners();
    },
    update: function() {}
};