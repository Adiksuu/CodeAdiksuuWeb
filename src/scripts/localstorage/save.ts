function save() {
    let Save = {
        toggled: toggled
    };
    localStorage.setItem("Saved", JSON.stringify(Save));
}