var debug = false;
var frameCount = 0;

function runGame() {
    try {
        init();
        window.setInterval("loop()", 60);
    }catch(Err) {
        console.log("the init or loop functions not active");
    }
}