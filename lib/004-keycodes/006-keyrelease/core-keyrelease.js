document.onkeyup = hideKey;

function hideKey() {
    // function to change the key_codes status from true to false
    let keycode
    if(window.event) {
        keycode = window.event.key;
    }

    console.log(keycode);

    key_codes[keycode] = false;
    console.log(key_codes[keycode]);
}