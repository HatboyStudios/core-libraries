var debug = false;

function runGame() {
    try {
        init();

        window.setInterval("loop()", 60);
    }catch(Err) {
        console.log("the init or loop functions not active");
    }
}