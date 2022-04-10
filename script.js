const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
		});
	}
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	navLink.forEach((n) => n.classList.remove("active"));
	this.classList.add("active");

	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

const cookieBox = document.querySelector(".wrapper"),
	acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = () => {
	document.cookie = "CookieBy=CodeAdiksuu; max-age" + 60 * 60 * 24 * 30;

	if (document.cookie) {
		cookieBox.classList.add("hide");
	} else {
		alert("Cookies can't be set!");
	}
};

let checkCookie = document.cookie.indexOf("CookieBy=CodeAdiksuu");
checkCookie != -1
	? cookieBox.classList.add("hide")
	: cookieBox.classList.remove("hide");

var icon = document.getElementById("dark-mode");

icon.onclick = function () {
	document.body.classList.toggle("dark-theme");
	document.getElementById("dark-mode").classList.toggle("dark");
};

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
	scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

const text = document.querySelector(".sec-text");

const textLoad = () => {
	setTimeout(() => {
		text.textContent = "Web Designer";
	}, 0);
	
};

textLoad();
setInterval(textLoad, 12000);
