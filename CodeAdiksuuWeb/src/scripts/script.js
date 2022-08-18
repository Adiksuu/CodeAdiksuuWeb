const basicButton = document.querySelector("#basic");
const advancedButton = document.querySelector("#advanced");
const proButton = document.querySelector("#pro");

basicButton.addEventListener("click", function () {
	window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=X2F5Y9PL2CJMA", "target=_blank");
});
advancedButton.addEventListener("click", function () {
	window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BZ3Y7ZLNTM9KY", "target=_blank");
});
proButton.addEventListener("click", function () {
	window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B46ZYRCGAVFWE", "target=_blank");
});

const textToChange = document.getElementById("changedText");

const change = () => {
	setTimeout(() => {
		textToChange.innerHTML = "PortfoLio";
	}, 0);
	setTimeout(() => {
		textToChange.innerHTML = "Shop";
	}, 3000);
};
change();
setInterval(change, 6000);


const sectionAll = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
	const scrollY = window.pageYOffset;
	sectionAll.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 100;
		const sectionId = current.getAttribute("id");
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('li a[href*="' + sectionId + '"]').classList.add("active");
		} else {
			document.querySelector('li a[href*="' + sectionId + '"]').classList.remove("active");
		}
	});
});

const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", function () {
	hamburgerMenu.classList.toggle("active");
});

function toggleTrans() {
	const translator = document.getElementById("translator");

	translator.classList.toggle("show");
}
