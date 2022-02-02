
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");


  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
  });



  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
   }
  }




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

