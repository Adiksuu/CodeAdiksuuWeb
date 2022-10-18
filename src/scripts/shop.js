const basicButton = document.querySelector("#basic");
const advancedButton = document.querySelector("#advanced");
const proButton = document.querySelector("#pro");
const avatarButton = document.querySelector("#avatar");
const thumbnailButton = document.querySelector("#thumbnail");

basicButton.addEventListener("click", function () {
	window.open(
		"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=X2F5Y9PL2CJMA",
		"target=_blank"
	);
});
advancedButton.addEventListener("click", function () {
	window.open(
		"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BZ3Y7ZLNTM9KY",
		"target=_blank"
	);
});
proButton.addEventListener("click", function () {
	window.open(
		"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B46ZYRCGAVFWE",
		"target=_blank"
	);
});
avatarButton.addEventListener("click", function () {
	window.open(
		"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NRYALZSL8KC4U",
		"target=_blank"
	);
});
thumbnailButton.addEventListener("click", function () {
	window.open(
		"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KLPK3UR7N8U5N"
	);
});
