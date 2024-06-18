
//=======================================
// function for search specific card
//=======================================
const searchInput = document.getElementById('search-box');

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();

    // Obtenez tous les éléments de carte
    const cards = document.querySelectorAll('.link-result-page');

    // Bouclez sur les éléments de carte
    cards.forEach(card => {
        const name = card.querySelector('.name').textContent.toLowerCase();
        console.log(name);
        if (name.includes(searchTerm)) {
            card.style.display = ''; // Affiche la carte si elle correspond
        } else {
            card.style.display = 'none'; // Cache la carte si elle ne correspond pas
        }
    });
});


//=======================================
// function pour trier les card
//=======================================


function sortCards() {
    const sortBy = document.getElementById('sort-select').value;

    const cardsContainer = document.querySelector('.cards');

    const cards = Array.from(cardsContainer.querySelectorAll('.link-result-page'));

	
    const sortedCards = cards.sort((a, b) => {
        // Récupérez la valeur nette en retirant le symbole $ et les virgules, puis convertissez en nombre
        const netWorthA = parseInt(a.querySelector('.net-worth').textContent.replace(/[\$\,]/g, ''));
        const netWorthB = parseInt(b.querySelector('.net-worth').textContent.replace(/[\$\,]/g, ''));

        // Comparez les valeurs nettes pour déterminer l'ordre
        if (sortBy === 'high-to-low') {
            return netWorthB - netWorthA; // Pour un tri décroissant
        } else {
            return netWorthA - netWorthB; // Pour un tri croissant
        }
    });

    cardsContainer.innerHTML = '';

    sortedCards.forEach(card => cardsContainer.appendChild(card));
}

document.getElementById('sort-select').addEventListener('change', sortCards);


//pour le focus de l'input
// For border when input focus
var salaryInput = document.getElementById("search-box");

salaryInput.addEventListener("focus", function() {
	this.classList.add("focused");
});

salaryInput.addEventListener("blur", function() {
	this.classList.remove("focused");
});

searchInput.addEventListener('keypress', function(event) {
    // Vérifiez si la touche "Entrée" est pressée
    if (event.keyCode === 13 || event.which === 13) { // 'which' pour la compatibilité
        // Retirez le focus de l'input
        searchInput.blur();
    }
});

//pour le select cette fois
var selectSort = document.getElementById("sort-select");
selectSort.addEventListener("focus", function() {
	this.classList.add("focused");
});
selectSort.addEventListener("blur", function() {
	this.classList.remove("focused");
});

selectSort.addEventListener('change', function() {
    // Retirez le focus du select
    selectSort.blur();
});


// pour stocker le nom de la celibrite choisi
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
	card.addEventListener('click', function() {
		console.log("click !");
		const name = card.querySelector('.name').textContent;
		localStorage.setItem('starName', name);

		const netW = card.querySelector('.net-worth').textContent.replace(/[\$\,]/g, '');
		localStorage.setItem('netWorth', netW);
		
		const imageUrl = card.querySelector('.card-image img').src;
		localStorage.setItem('profileImage', imageUrl);
	
	});
});






