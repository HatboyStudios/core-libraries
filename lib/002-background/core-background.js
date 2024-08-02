function background(color) {
    if(debug === true) {
        console.log("background:", color);
    }
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //ctx.stroke();
}