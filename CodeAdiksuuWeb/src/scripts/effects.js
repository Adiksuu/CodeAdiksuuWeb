window.addEventListener("scroll", rotate);
window.addEventListener("scroll", drop);
window.addEventListener("scroll", reveal);

function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 50;

		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add("active");
		}
	}
}

function drop() {
	var reveals = document.querySelectorAll(".drop");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 50;

		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add("active");
		}
	}
}
function rotate() {
	var reveals = document.querySelectorAll(".rotate");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 50;

		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add("active");
		}
	}
}