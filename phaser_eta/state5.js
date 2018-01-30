demo.state5 = function(){};
demo.state5.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#ff9999';

        addChangeStateEventListeners();
    },
    update: function() {}
};