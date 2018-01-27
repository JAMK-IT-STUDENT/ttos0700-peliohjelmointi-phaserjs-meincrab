demo.state2 = function(){};
demo.state2.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#ff80b3';
        console.log('state2');
        addChangeStateEventListeners();
    },
    update: function() {}
};