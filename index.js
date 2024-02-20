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

var nav = document.querySelector('nav');
window.onscroll = function() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.classList.add('collapsed');
        } else {
        nav.classList.remove('collapsed');
        }
};

function scrollFunction() {
	const button = document.querySelector('.back-to-top-button'); // Updated selector
      
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  button.style.display = 'block';
	} else {
	  button.style.display = 'none';
	}
}
      


