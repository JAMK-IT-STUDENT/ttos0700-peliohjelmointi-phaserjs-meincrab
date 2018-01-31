demo.state1 = function(){};
var cursors, vel = 500, rocks, grass;
demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
        game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
        game.load.spritesheet('doge', 'assets/sprites/wolf_anim.png', 127, 65)
      },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');

        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');

        map.setCollisionBetween(1,9,true, 'rocks');
        map.setCollision(11, true, 'grass');

        doge = game.add.sprite(200, 200, 'doge');
        doge.scale.setTo(0.4, 0.4);
        game.physics.enable(doge);

        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update: function() {
        game.physics.arcade.collide(doge, rocks, function(){ console.log('hitting rocks!'); });
        game.physics.arcade.collide(doge, grass, function(){ console.log('hitting grass!'); });
        if(cursors.up.isDown){
            doge.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            doge.body.velocity.y = vel;
        }
        else {
            doge.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            doge.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            doge.body.velocity.x = vel;
        }
        else {
            doge.body.velocity.x = 0;
        }
    }
};