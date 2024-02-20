document
	.getElementById("contactMethod")
	.addEventListener(
		"change",
		toggleInput
	);

function toggleInput() {
	var selectedMethod =
		document.getElementById(
			"contactMethod"
		).value;

	if (selectedMethod === "email") {
		document
			.getElementById("emailInput")
			.classList.remove("hidden");
		document
			.getElementById("phoneInput")
			.classList.add("hidden");
	} else if (
		selectedMethod === "phone"
	) {
		document
			.getElementById("phoneInput")
			.classList.remove("hidden");
		document
			.getElementById("emailInput")
			.classList.add("hidden");
	} else {
                // If "Make a choice" is selected, hide both input fields
                document.getElementById("emailInput").classList.add("hidden");
                document.getElementById("phoneInput").classList.add("hidden");
        }
}
