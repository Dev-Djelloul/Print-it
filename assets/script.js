// Tableau d'index courant
const slides = [
  {
    image: "slide1.jpeg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpeg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpeg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection des éléments des flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Fonction de gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener("click", () => {
  console.log("Flèche gauche cliquée");
});

// Fonction de gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener("click", () => {
  console.log("Flèche droite cliquée");
});

// Variable de l'index de la diapositive actuelle
let currentSlideIndex = 0;

// Fonction pour mettre à jour la diapositive en cours
function updateSlide(index) {
  const bannerImg = document.querySelector(".banner-img");
  const tagLine = document.querySelector("#banner p");

  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  tagLine.innerHTML = slides[index].tagLine;
}

// Fonction pour gérer les changements de diapositives
function changeSlide(direction) {
  if (direction === "next") {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  } else if (direction === "prev") {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  }

  // Mettre à jour l'affichage en fonction du nouvel index
  updateSlide(currentSlideIndex);

  // Mettre à jour le point actif
  updateActiveDot(currentSlideIndex);
}

// Sélection des éléments bullets points
const dots = document.querySelectorAll(".dot");

// Fonction pour gérer l'affichage du bullet point actif
function updateActiveDot(currentSlideIndex) {
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Écouteur d'événement pour la flèche droite
arrowRight.addEventListener("click", () => {
  changeSlide("next");
});

// Écouteur d'événement pour la flèche gauche
arrowLeft.addEventListener("click", () => {
  changeSlide("prev");
});
