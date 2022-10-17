const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

const sliderText = document.getElementById("sliderText");

const imageToSlide = document.getElementById("slider");

function loadSlide() {
    imageToSlide.addEventListener("click", function () {
			window.open("https://codeadiksuuweb.ml", "target=_blank");
		});
}

document.onload = loadSlide()

dot1.addEventListener("click", function () {
	document.getElementById("slider").src = "/src/assets/images/codeadiksuuweb.png";
    sliderText.innerHTML = '<i class="fas fa-link fs-24 mr-4"></i>codeadiksuuweb.ml'
    imageToSlide.addEventListener("click", function () {
	    window.open("https://codeadiksuuweb.ml", "target=_blank");
    })
    this.classList.add("active-dot");
    dot2.classList.remove("active-dot");
    dot3.classList.remove("active-dot");
});
dot2.addEventListener("click", function () {
    document.getElementById("slider").src = "/src/assets/images/inficloud.png";
    sliderText.innerHTML = '<i class="fas fa-link fs-24 mr-4"></i>infi-cloud.ml'
    imageToSlide.addEventListener("click", function () {
	    window.open("https://infi-cloud.ml", "target=_blank");
    })
    this.classList.add("active-dot");
    dot1.classList.remove("active-dot");
    dot3.classList.remove("active-dot");
});
dot3.addEventListener("click", function () {
	document.getElementById("slider").src = "/src/assets/images/greategames.png";
    sliderText.innerHTML = '<i class="fas fa-link fs-24 mr-4"></i>greategames.tk'
    imageToSlide.addEventListener("click", function () {
	    window.open("https://greategames.tk", "target=_blank");
    })
    this.classList.add("active-dot");
    dot1.classList.remove("active-dot");
    dot2.classList.remove("active-dot");
});
