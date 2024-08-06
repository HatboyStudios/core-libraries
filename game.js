var player;
var player2;

function init() {
    if(debug === true) {
        console.log("init is active");
    }
    generateCanvas(400,400);

    player = new Sprite(200,200,50,50);
    player.color = "purple";

    player2 = new Sprite(100,100,50,50);
}

function loop() {
    background("green");
    if(debug === true) {
        console.log("loop function active");
    }

    player.movement();
    player.drawObject();
    player2.drawObject();

    if(playKey("w")) {
        console.log("w is pressed");
    }
}