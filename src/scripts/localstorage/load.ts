function load() {
    var SaveGame = JSON.parse(localStorage.getItem("Saved"));
    if (SaveGame == null) {
        return;
    }
    if (typeof SaveGame.toggled !== "undefined")
        toggled = SaveGame.toggled;

    if (toggled == true) {
        bodyElement.classList.add('dark')
    } else {
        bodyElement.classList.remove('dark')
    }
}