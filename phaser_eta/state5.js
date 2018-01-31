var accel = 400, platform, platformGroup;

demo.state5 = function(){};
demo.state5.prototype = {
    preload: function() {
        game.load.image('platform', 'assets/sprites/platform.png');
        game.load.spritesheet('doge', 'assets/sprites/wolf_anim.png', 127, 65)
    },
    create: function() {
        game.stage.backgroundColor = '#ff9999';

        addChangeStateEventListeners();

        doge = game.add.sprite(centerX, 500, 'doge');
        doge.animations.add('walk', [0, 1, 2,3, 4]);


        platform = game.add.sprite(0, 800, 'platform');
        platformGroup = game.add.group();
        platformGroup.create(650, 400, 'platform');
        platformGroup.create(1300, 400, 'platform');
        
        

        game.physics.enable([doge, platform, platformGroup]);
        doge.body.gravity.y = 500;
        doge.body.bounce.y = 0.3;
        doge.body.collideWorldBounds = true;

        platform.body.immovable = true;
        platformGroup.setAll('body.immovable', true);
    },
    update: function() {
        game.physics.arcade.collide(doge, [platform, platformGroup]);
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            doge.body.acceleration.x = accel;
            doge.scale.setTo(1, 1);
            doge.animations.play('walk', 14, true);
            
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            doge.body.acceleration.x = -accel;
            
            doge.scale.setTo(-1, 1);
            doge.animations.play('walk', 14, true);
            
        }
        else {
            doge.body.acceleration.x = 0;
            doge.animations.stop('walk');
            doge.frame = 0;
        } if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            doge.body.velocity.y = -300;
            doge.animations.stop('walk');
            doge.frame = 0;
        }

    }
};