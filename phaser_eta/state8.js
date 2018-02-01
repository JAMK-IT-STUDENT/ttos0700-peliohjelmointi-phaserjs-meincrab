var text;

demo.state8 = function(){};
demo.state8.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#eb99ff';

        addChangeStateEventListeners();


        text = "orem ipsum dolor sit amet, consectetuer adipiscing elit." + 
        "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, " + 
        "lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. " +
        "Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. " +
        "Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. "+
        "Donec ultricies nisl ut felis, suspendisse potenti. " + 
        "Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit "; 

 
        this.spellOutText(100, 100, 1000, text, 30, 40, '#fff');
    },
    spellOutText: function(x, y, width, text, fontSize, speed, fill, font){
        var sentence = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font:font});
        var currentLine = game.add.text(10, 10, '', {fontSize: fontSize + 'px', font:font})
        currentLine.alpha = 0;
        var loop = game.time.events.loop(speed, addChar);

        var index = 0;

        function addChar() {
            sentence.text += text[index];
            currentLine.text += text[index];

            if (currentLine.width > width) {
                sentence.text += '\n';
                currentLine.text = '';
            }
            if (index >= text.length - 1) {
                game.time.events.remove(loop);
                console.log('stop');
            }

            index++;
        }
    }
    
};