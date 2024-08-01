document.onkeyup = hideKey;

function hideKey() {
    let keycode
    if(window.event) {
        keycode = window.event.key;
    }

    console.log(keycode);

    key_codes[keycode] = false;
    console.log(key_codes[keycode]);
}