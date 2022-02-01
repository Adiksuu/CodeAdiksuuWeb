const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");

    acceptBtn.onclick = () => {
         document.cookie = "CookieBy=CodeAdiksuu; max-age" + 60 * 60 * 24 * 30;

        if (document.cookie) {
        cookieBox.classList.add("hide");
        } else {
         alert("Cookies can't be set!");
    }
}

let checkCookie = document.cookie.indexOf("CookieBy=CodeAdiksuu");
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");



const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


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



const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});


scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}