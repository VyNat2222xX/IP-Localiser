// Information
const $positionSpan = document.querySelector("#ip-address-isp");
const $timezoneSpan = document.querySelector("#ip-address-timezone");
const $localisationSpan = document.querySelector("#ip-address-location");
const $IPadresseSpan = document.querySelector("#ip-address-value");

// Formulaire
const $form = document.querySelector(".ip-address-form");

document.addEventListener("DOMContentLoaded", () => {
	$IPadresseSpan.textContent = "???";
	$localisationSpan.textContent = "???";
	$positionSpan.textContent = "???";
	$timezoneSpan.textContent = "???";
});

$form.addEventListener("submit", (e) => {
	e.preventDefault();
});
