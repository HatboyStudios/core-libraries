var player;

function init() {
    if(debug === true) {
        console.log("init is active");
    }
    generateCanvas(400,400);
    background("green");

    player = new Object(200,200,50,50);
}

function loop() {
    if(debug === true) {
        console.log("loop function active");
    }

    player.drawObject();

    if(playKey("w")) {
        console.log("w is pressed");
    }
}