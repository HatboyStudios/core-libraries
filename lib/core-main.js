function runGame() {
    try {
        init();

        window.setInterval("loop()", 5000);
    }catch(Err) {
        console.log("the init or loop functions not active");
    }
}