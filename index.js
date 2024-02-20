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

function scrollToTop() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
      }
      
      window.onscroll = function () {
	scrollFunction();
      };
      
      function scrollFunction() {
	const button = document.querySelector('button');
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  button.style.display = 'block';
	} else {
	  button.style.display = 'none';
	}
}
