demo.state4 = function(){};
demo.state4.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#ffffb3';
        console.log('state4');
        addChangeStateEventListeners();
    },
    update: function() {}
};