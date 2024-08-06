document.onkeydown = showKey;

function showKey() {
    //function to change the key_codes's status from false to true
    let keycode
    if(window.event) {
        keycode = window.event.key;
    }

    console.log(keycode);

    key_codes[keycode] = true;
    console.log(key_codes[keycode]);
}