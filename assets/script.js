const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélectionner les images des flèches par leurs classes
const flecheGaucheImg = document.querySelector('.arrow_left');
const flecheDroiteImg = document.querySelector('.arrow_right');

// Ajouter un event listener pour la flèche gauche
flecheGaucheImg.addEventListener('click', (event) => {
  // Vérifier si le clic provient du bouton gauche de la souris (valeur 0)
  if (event.button === 0) {
    console.log("Flèche Gauche cliquée !");
    alert("Flèche Gauche cliquée !");
  }
});

// Ajouter un event listener pour la flèche droite
flecheDroiteImg.addEventListener('click', (event) => {
  // Vérifier si le clic provient du bouton gauche de la souris (valeur 2)
  if (event.button === 0) {
    console.log("Flèche Droite cliquée !");
    alert("Flèche Droite cliquée !");
  }
});




// Sélectionner les images du carrousel par leurs balises img
const images = document.querySelectorAll('#banner img');

// Sélectionner les bullet points par leurs classes
const bullets = document.querySelectorAll('.dot');

// Sélectionner le texte correspondant à l'image
const imageText = document.getElementById('image-text');

// Index de l'image actuellement affichée
let currentImageIndex = 0;


// Ajouter un event listener pour la flèche gauche
document.querySelector('.arrow_left').addEventListener('click', () => {
	// Cacher l'image actuellement affichée
	images[currentImageIndex].style.display = 'none';
  
	// Mettre à jour l'index de l'image actuellement affichée et gérer les débordements
	currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  
	// Afficher la nouvelle image
	images[currentImageIndex].style.display = 'block';
  
	// Mettre à jour le bullet point actif
	bullets.forEach((bullet, index) => {
	  bullet.classList.toggle('dot_selected', index === currentImageIndex);
	});
  
	// Mettre à jour le texte correspondant à l'image
	updateImageText();
  });
  

// Ajouter un event listener pour la flèche droite
document.querySelector('.arrow_right').addEventListener('click', () => {
  // Cacher l'image actuellement affichée
  images[currentImageIndex].style.display = 'none';

  // Mettre à jour l'index de l'image actuellement affichée et gérer les débordements
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Afficher la nouvelle image
  images[currentImageIndex].style.display = 'block';

  // Mettre à jour le bullet point actif
  bullets.forEach((bullet, index) => {
    bullet.classList.toggle('dot_selected', index === currentImageIndex);
  });

  // Mettre à jour le texte correspondant à l'image
  updateImageText();
});

// Fonction pour mettre à jour le texte correspondant à l'image
function updateImageText() {
  const tagLine = images[currentImageIndex].getAttribute('tagLine');
  imageText.innerHTML = `<p>${tagLine}</p>`;
}
