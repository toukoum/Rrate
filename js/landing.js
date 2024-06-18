const MAX_SALARY = 1000000

// rajouter la classe active a menu icon et .normal
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
function toggleMenu() {
	document.querySelector('.menu-icon').classList.toggle('active');
	document.querySelector('.navbar').classList.toggle('active');
	document.querySelector('.background-nav').classList.toggle('active');
}


// For border when input focus
const salaryInput = document.getElementById("salary");

salaryInput.addEventListener("focus", function () {
	this.parentNode.classList.add("focused");
});

salaryInput.addEventListener("blur", function () {
	this.parentNode.classList.remove("focused");
});


//pour stocker le salaire dans le local storage

function handleSalaryInput() {
	let salary = salaryInput.value.replace(/,/g, ''); // Get the raw number without commas
	let currency = document.getElementById('currency-check-box');
	if (currency.checked){
		salary *= 1.09;
		Math.floor(salary);
	}
	if (isNaN(salary) || salary <= 0) {
		alert('Please enter a valid positive number for your salary.');
		return; // Stoppe la fonction si l'entrée est invalide
	}
	else if (salary >= MAX_SALARY) {
		alert('Please give me some of your money 😅\n you are too rich for this website...');
		return; // Stoppe la fonction si l'entrée est invalide
	}
	localStorage.setItem('userSalary', salary);
	window.location.href = 'pages/selection.html'; // Ajustez cette URL selon vos besoins
}

const buttonCompare = document.getElementById('button-compare');
// Ajout de l'écouteur pour le clic
buttonCompare.addEventListener('click', function () {
	handleSalaryInput();
});

// Ajout de l'écouteur pour la touche "Entrée"
salary.addEventListener('keypress', function (event) {
	if (event.keyCode === 13 || event.which === 13) {
		handleSalaryInput();
	}
});


salaryInput.addEventListener('input', (event) => {
    const value = salaryInput.value.replace(/,/g, ''); // Remove existing commas
    if (!isNaN(value) && value !== '') {
        if (value.length <= 7) { // Allow up to 7 digits before formatting to stay within 10 chars with commas
            let formatted = Number(value).toLocaleString('en');
            salaryInput.value = formatted;
            salaryInput.parentNode.classList.remove("wrong-input");
        } else {
            salaryInput.value = value.slice(0, 7); // Limit to 7 digits
            salaryInput.parentNode.classList.add("wrong-input");
        }
    }
});


