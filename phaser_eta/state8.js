demo.state8 = function(){};
demo.state8.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#eb99ff';

        addChangeStateEventListeners();
    },
    update: function() {}
};