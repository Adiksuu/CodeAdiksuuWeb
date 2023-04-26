const route = window.location.search.substring(1);
if (route != "") {
    fetch(`./src/routes/${route}.html`)
        .then(function (response) {
        if (!response.ok) {
            window.location.search = "";
        }
        return response.text();
    })
        .then(function (html) {
        document.body.innerHTML = html;
        document.title = `${document.title} - ${route}`;
    });
}
const bodyElement = document.querySelector('body');
let toggleThemeButton = document.querySelector("#toggle");
let toggled = false;
window.setTimeout(() => {
    toggleThemeButton = document.querySelector("#toggle");
    load();
    toggleThemeButton.addEventListener('click', function () {
        if (bodyElement.classList.contains('dark')) {
            bodyElement.classList.remove('dark');
            toggled = false;
        }
        else {
            bodyElement.classList.add('dark');
            toggled = true;
        }
        save();
    });
}, 100);
function openLink(link) {
    window.open(`https://${link}`, "target=_blank");
}
function toSite(site) {
    window.location.hash = "";
    window.location.search = site;
}
const total_projects = document.querySelector('#total_projects');
const total_time = document.querySelector('#total_time');
const total_published = document.querySelector('#total_published');
let total_projects_count = parseInt(total_projects.textContent.replace('+', ''));
let total_time_count = parseInt(total_time.textContent.replace('+', ''));
let total_published_count = parseInt(total_published.textContent.replace('+', ''));
let tpc = 0;
let ttc = 0;
let tppc = 0;
window.setInterval(() => {
    if (tpc < total_projects_count) {
        tpc++;
        total_projects.innerHTML = `<i class="fa-solid fa-file-alt"></i> ${tpc} +`;
    }
}, 28);
window.setInterval(() => {
    if (ttc < total_time_count) {
        ttc++;
        total_time.innerHTML = `<i class="fa-solid fa-clock"></i> ${ttc}h +`;
    }
}, 5);
window.setInterval(() => {
    if (tppc < total_published_count) {
        tppc++;
        total_published.innerHTML = `<i class="fa-solid fa-share"></i> ${tppc} +`;
    }
}, 80);
function load() {
    var SaveGame = JSON.parse(localStorage.getItem("Saved"));
    if (SaveGame == null) {
        return;
    }
    if (typeof SaveGame.toggled !== "undefined")
        toggled = SaveGame.toggled;
    if (toggled == true) {
        bodyElement.classList.add('dark');
    }
    else {
        bodyElement.classList.remove('dark');
    }
}
function save() {
    let Save = {
        toggled: toggled
    };
    localStorage.setItem("Saved", JSON.stringify(Save));
}
//# sourceMappingURL=app.js.map