var debug = false;
var frameCount = 0;

function runGame() {
    try {
        init();

        window.setInterval("runLoop()", 1);
    }catch(Err) {
        console.log("the init or loop functions not active");
    }
}