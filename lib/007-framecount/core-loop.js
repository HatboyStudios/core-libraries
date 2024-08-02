function runLoop() {
    frameCount++;

    if(debug === true) {
        console.log(frameCount);
    }

    loop();
}