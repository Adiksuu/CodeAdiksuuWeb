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


const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", function () {
	hamburgerMenu.classList.toggle("active");
});
