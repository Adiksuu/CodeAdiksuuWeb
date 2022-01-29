const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


var icon = document.getElementById("dark-mode");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (!document.body.classList.contains("dark-theme")) {
        icon.src = "Images/moon.png";
    } else {
        icon.src = "Images/sun.png";
    }
}