demo.state9 = function(){};
demo.state9.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#ffd9b3';
        console.log('state9');
        addChangeStateEventListeners();
    },
    update: function() {}
};