



//pour play la video en meme temps que l'on scroll
let lastPosition = -1;
var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 200, 
    // get page height from video duration
    setHeight = document.getElementById("videoContainer"), 
    // select video element         
    vid = document.getElementById('scroll-video'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// fonction pour eviter d'appeler scrollPlay trop souvent
function throttle(func, limit) {
	let lastFunc;
	let lastRan;
	return function() {
	  const context = this;
	  const args = arguments;
	  if (!lastRan) {
		func.apply(context, args);
		lastRan = Date.now();
	  } else {
		clearTimeout(lastFunc);
		lastFunc = setTimeout(function() {
		  if ((Date.now() - lastRan) >= limit) {
			func.apply(context, args);
			lastRan = Date.now();
		  }
		}, limit - (Date.now() - lastRan));
	  }
	}
  }
  
  var scrollPlayThrottled = throttle(function() {
	var frameNumber  = window.pageYOffset / playbackConst;
	vid.currentTime  = frameNumber;
  }, 100); // Exécute `scrollPlay` toutes les 100ms
  
  window.addEventListener('scroll', scrollPlayThrottled);
  


  //mettre le nom de la stars choisie dans les emplacements
  const starNameStorage = localStorage.getItem('starName');
  const starName = starNameStorage.replace(/([a-z])([A-Z])/g, '$1 $2'); // Ajoute un espace entre les lettres minuscules et majuscules


  if (starName){
	const elements = document.querySelectorAll('.star-name');
	// Boucler sur chaque élément et mettre à jour son contenu
	elements.forEach(function(element) {
		element.textContent = starName;
	});
  }
  else{
	console.log("Aucune celebrite trouve !");
  }


// photo de profil a recuperer de la page d'avant dans le local
// storage

let profileImage = localStorage.getItem("profileImage");
document.querySelector(".profileImage").src = profileImage;