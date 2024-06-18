
// pour margin du header
var header = document.querySelector('header');
let	overlayVid = document.querySelector('.vignette-overlay');
let	textVid = document.querySelector('.text-vid');

window.addEventListener('scroll', function() {
	var scrollY = window.scrollY;
    var maxScroll = 100; // La valeur de défilement maximale où l'effet atteint son maximum
    var progress = Math.min(scrollY / maxScroll, 1);

    // Ajuster les propriétés CSS du header
    if (scrollY > 0) {
		header.style.marginTop = '0';
		header.style.borderBottom = '1px solid #d2d2d7';
		if (overlayVid)
			overlayVid.style.backdropFilter = `blur(0px)`;
		if (textVid)
			textVid.classList.add("active");
    } else {
		header.style.marginTop = '10px';
		header.style.borderBottom = '';
		if (overlayVid)
			overlayVid.style.backdropFilter = `blur(5px)`;
		if (textVid)
			textVid.classList.remove("active");
    }

	// Ajuster dynamiquement le background de l'overlay
	var gradientStart = 0 + (progress * 100); // Début du gradient
	var gradientEnd = 100 - (progress / 100); // Fin du gradient
	if (overlayVid)
		overlayVid.style.background = `radial-gradient(circle, rgba(0, 0, 0, 0) ${gradientStart}%, rgba(0, 0, 0, 0.8) ${gradientEnd}%)`;
});

// rajouter la classe active a menu icon et .normal
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);


function toggleMenu() {
	console.log("button cliked");
	document.querySelector('.menu-icon').classList.toggle('active');
	document.querySelector('.navbar').classList.toggle('active');
	document.querySelector('.background-nav').classList.toggle('active');
}









