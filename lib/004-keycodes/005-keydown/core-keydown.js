document.onkeydown = showKey;

function showKey() {
    let keycode
    if(window.event) {
        keycode = window.event.key;
    }

    console.log(keycode);

    key_codes[keycode] = true;
    console.log(key_codes[keycode]);
}