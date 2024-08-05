var debug = false;

function runGame() {
    try {
        init();
      
        window.setInterval("loop()", 1000);
    }catch(Err) {
        console.log("the init or loop functions not active");
    }
}