
const monthlySalary = localStorage.getItem('userSalary');
const annualsalary = monthlySalary * 12;
const nameStar =  starNameStorage.replace(/([a-z])([A-Z])/g, '$1 $2');
const percentageMin = 0.57;
const gdpKenya = 50000000000;
const gdpCroatia = 107000000000;

const gdpNewYork = 2163208;
const gdpParis = 934168;



// pour pas avoir une trop grande difference entre le salaire de l'user et de la star
if (netWorthUser * 100 / netWorthStar < percentageMin){
	netWorthUser = percentageMin * netWorthStar / 100;
	console.log("User salary upgrade !");
}

console.log("User Worth: ", netWorthUser);
console.log("Star Worth: ", netWorthStar);


//=====================================
// donnut chart
//=====================================

const canvas = document.getElementById('donnut');
const ctx = canvas.getContext('2d'); // Définissez ctx directement après avoir obtenu le canvas
const img = new Image();
img.src = '../images/chart.png'; // Assurez-vous que le chemin est correct

img.onload = () => {
	const fillPattern = ctx.createPattern(img, 'repeat'); // Créez le motif après le chargement de l'image

	const data = {
		labels: ['You', nameStar],
		datasets: [{
			data: [netWorthUser, netWorthStar],
			backgroundColor: [
				'#2D2D2D',
				fillPattern // Utilisez le motif ici
			],
			hoverBackgroundColor: [
				'#2D2D2D',
				fillPattern
			],
			borderColor: "transparent",
			borderRadius: 10,
			hoverBorderJoinStyle: "miter",
			rotation: -60,
			borderJoinStyle: "bevel",
		}]
	};

	const config = {
		type: 'doughnut',
		data: data,
		options: {
			plugins: {
				tooltip: {
					enabled: false // Désactive correctement les tooltips
				}
			},
			animation: {
				animateRotate: true,
				animateScale: false,
				duration: 2000,
			},
			cutout: '60%',
			responsive: true,
			maintainAspectRatio: true
		}
	};

	// Initialisation du graphique ici, après que tout soit prêt
	var myChart = new Chart(ctx, config);
};










//  const ctx = document.getElementById('canvas').getContext('2d');

//  const chart = new Chart(ctx, {
//    data: {
//      labels: ['Item 1', 'Item 2', 'Item 3'],
//      datasets: [{
//        data: [10, 20, 30],
//        backgroundColor: fillPattern
//      }]
//    }
//  });
//};


//=====================================
// bar chart
//=====================================

var barchart = document.getElementById('barchart');
var bar = barchart.getContext('2d'); // Obtenir le contexte du canvas
var img3 = new Image(); // image black gradient
img3.src = '../images/chart3.png';
var img2 = new Image(); // Créer une nouvelle instance d'Image
img2.src = '../images/chart2.png'; // Définir la source de l'image


netWorthStar = Number(netWorthStar);
netWorthUser = Number(netWorthUser);

let gdp1 = gdpKenya;
let gdp2 = gdpCroatia;

let gdpString1 = 'GDP Kenya 🇰🇪';
let gdpString2 = 'GDP Croatia 🇭🇷';
if (netWorthStar < 20000000000){
	console.log("Star is not that rich !");
	gdp1 = gdpParis;
	gdp2 = gdpNewYork;
	gdpString1 = 'GDP Paris 🇫🇷';
	gdpString2 = 'GDP New York 🇺🇸';
	netWorthUser = gdpNewYork / 2;
}

img2.onload = function() {
	var fillPattern = bar.createPattern(img2, 'repeat'); // Créer le motif après que l'image est chargée
	var fillPatternBlack = bar.createPattern(img3, 'repeat'); // Créer le motif après que l'image est chargée

	var myChart = new Chart(bar, {
		type: 'bar',
		data: {
			labels: ['You', gdpString1, gdpString2, nameStar],
			datasets: [{
				data: [netWorthUser, gdp1, gdp2, netWorthStar],
				backgroundColor: [
					fillPatternBlack,
					fillPatternBlack,
					fillPatternBlack,
					fillPattern // Utiliser le motif pour la dernière barre
				],
				borderRadius: 50,
				categoryPercentage: .7, // 80% de l'espace de la catégorie est utilisé
				barPercentage: 1
			}]
		},
		options: {
			animation: {
				animateRotate: true,
				animateScale: true,
				duration: 2000,
			},
			indexAxis: 'y', // Pour rendre les barres horizontales
			plugins: {
				legend: {
					display: false // Masquer la légende
				},
				tooltip: {
					enabled: false // Désactiver les tooltips
				}
			},
			scales: {
				x: {
					display: false, // Masquer l'axe X
					grid: {
						display: false
					}
				},
				y: {
					position: 'right',
					grid: {
						display: false
					}
				},
			}
		}
	});
};










































