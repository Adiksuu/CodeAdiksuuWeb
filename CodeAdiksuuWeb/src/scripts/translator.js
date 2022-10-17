const english = document.getElementById("english");
const polish = document.getElementById("polish");
const homeNav = document.getElementById("homeNav");
const usedNav = document.getElementById("usedNav");
const skillsNav = document.getElementById("skillsNav");
const pricingNav = document.getElementById("pricingNav");
const projectsNav = document.getElementById("projectsNav");
const homeNavShort = document.getElementById("homeNavShort");
const usedNavShort = document.getElementById("usedNavShort");
const skillsNavShort = document.getElementById("skillsNavShort");
const pricingNavShort = document.getElementById("pricingNavShort");
const projectsNavShort = document.getElementById("projectsNavShort");
const basicText = document.getElementById("basic");
const advancedText = document.getElementById("advanced");
const proText = document.getElementById("pro");
const avatarText = document.getElementById("avatar");
const thumbnailText = document.getElementById("thumbnail");
const englishTr = document.getElementById("englishTr");
const polishTr = document.getElementById("polishTr");
const infoButton = document.getElementById("more");
const BasicWebsiteCost = document.getElementById("BasicWebsiteCost");
const AdvancedWebsiteCost = document.getElementById("AdvancedWebsiteCost");
const ProWebsiteCost = document.getElementById("ProWebsiteCost");
const AvatarCost = document.getElementById("AvatarCost");
const ThumbnailCost = document.getElementById("ThumbnailCost");
const footerText = document.getElementById("footerName");
const homeTitles = document.getElementById("homeTitles");
const usedTitle = document.getElementById("usedTitle");
const sliderTitle = document.getElementById("sliderTitle");

let translated = 0;


function englishTranslate() {
    homeNav.innerHTML = "Home";
	skillsNav.innerHTML = "Skills";
	usedNav.innerHTML = "Used";
	pricingNav.innerHTML = "Pricing";
	projectsNav.innerHTML = "Projects";
	homeNavShort.innerHTML = "Home";
	usedNavShort.innerHTML = "Used";
	skillsNavShort.innerHTML = "Skills";
	pricingNavShort.innerHTML = "Pricing";
	projectsNavShort.innerHTML = "Projects";
    basicText.innerHTML = 'Basic Website <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>';
	avatarText.innerHTML = 'Avatar Graphic <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>'
	advancedText.innerHTML = 'Advanced Website <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>';
	thumbnailText.innerHTML = 'Thumbnail Graphic <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>'
    proText.innerHTML = 'Professional Website <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>'
    englishTr.innerHTML = "ENGLISH";
    polishTr.innerHTML = "POLISH";
	infoButton.innerText = "MORE INFO";
	BasicWebsiteCost.innerHTML = '2 <i class="fas fa-dollar"></i>';
	AvatarCost.innerHTML = '2 <i class="fas fa-dollar"></i>';
	ThumbnailCost.innerHTML = '4 <i class="fas fa-dollar"></i>';
	AdvancedWebsiteCost.innerHTML = '5 <i class="fas fa-dollar"></i>';
	ProWebsiteCost.innerHTML = '10 <i class="fas fa-dollar"></i>';
	footerText.innerHTML = '&#169; 2022 copyright <span class="fc-blue-900">CodeAdiksuu</span>.';
	usedTitle.innerHTML = "I'm Currently Using This"
	sliderTitle.innerHTML = "My 3 Latest Projects";
    homeTitles.innerHTML = 'Welcome On <span class="gradient">My</span> <br />Personal <span class="gradient" id="changedText">PortfoLio</span> Website'

    translated = 0;

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
}
    
function polishTranslate() {
	homeNav.innerHTML = "Główna";
	skillsNav.innerHTML = "Umiejętności";
	pricingNav.innerHTML = "Płatności";
	usedNav.innerHTML = "Narzędzia";
	projectsNav.innerHTML = "Projekty";
	homeNavShort.innerHTML = "Główna";
	usedNavShort.innerHTML = "Narzędzia";
	skillsNavShort.innerHTML = "Umiejętności";
	pricingNavShort.innerHTML = "Płatności";
	projectsNavShort.innerHTML = "Projekty";
	basicText.innerHTML = 'Podstawowa Strona <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>'
	avatarText.innerHTML = 'Grafika Avataru <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>'
	thumbnailText.innerHTML = 'Grafika Miniaturki <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>'
    advancedText.innerHTML = 'Zaawansowana Strona <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>'
    proText.innerHTML = 'Profesjonalna Strona <span class="opacity-0"><i class="fas fa-angle-double-right"></i></span>'
    englishTr.innerHTML = "ANGIELSKI";
    polishTr.innerHTML = "POLSKI";
	infoButton.innerText = "WIĘCEJ INFORMACJI";
	BasicWebsiteCost.innerHTML = "10 PLN";
	AvatarCost.innerHTML = "10 PLN";
	ThumbnailCost.innerHTML = "20 PLN";
	AdvancedWebsiteCost.innerHTML = "25 PLN";
	ProWebsiteCost.innerHTML = "50 PLN";
	footerText.innerHTML = '&#169; 2022 prawa autorskie <span class="fc-blue-900">CodeAdiksuu</span>.';
	usedTitle.innerHTML = "Aktualnie Wykorzystuje To";
	sliderTitle.innerHTML = "Moje 3 Ostatnie Projekty";
    homeTitles.innerHTML = 'Witaj Na <span class="gradient">Mojej</span> <br />Personalnej stronie <span class="gradient" id="changedTextPOL">PortfoLio</span>'

    translated = 1;

    const textToChangePOL = document.getElementById("changedTextPOL");

		const changePOL = () => {
			setTimeout(() => {
				textToChangePOL.innerHTML = "PortfoLio";
			}, 0);
			setTimeout(() => {
				textToChangePOL.innerHTML = "Sklepu";
			}, 3000);
		};
		changePOL();
		setInterval(changePOL, 6000);

}

english.addEventListener("click", function () {
	this.classList.add("active");
	polish.classList.remove("active");
	englishTranslate();
});
polish.addEventListener("click", function () {
	this.classList.add("active");
	english.classList.remove("active");
	polishTranslate();
});


// SAVING
function save() {
    var Save = {
        translated: translated
    };
    localStorage.setItem("Saved", JSON.stringify(Save));
}
// LOADING
function load() {
    var SaveGame = JSON.parse(localStorage.getItem("Saved"));

    if (typeof SaveGame.translated !== "undefined") translated = SaveGame.translated;
    if (translated == 0) {
			englishTranslate();
			english.classList.add("active");
			polish.classList.remove("active");
		} else if (translated == 1) {
			polishTranslate();
			polish.classList.add("active");
			english.classList.remove("active");
		}
}
// STARTING 
function start() {
	load();
}
// AUTOMATICS
window.setInterval(function () {
    save();
}, 1000)