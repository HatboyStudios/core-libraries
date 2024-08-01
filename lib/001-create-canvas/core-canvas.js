var canvas;
var ctx;

function generateCanvas(width, height) {
    if(debug === true) {
        console.log("width:", width, "height:", height);
    }
    let body = document.getElementById("game");

    body.innerHTML = "<canvas id='gameScreen' width='"+width+"' height='"+height+"'></canvas>";

    canvas = document.getElementById('gameScreen');
    ctx = canvas.getContext("2d");
}