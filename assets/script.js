const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let i = 0;

// sélectionner les flèches dans le document
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// sélectionner l'image de la bannière
let slide = document.querySelector(".banner-img");

// sélectionner le texte de la bannière
let p = document.querySelector("#banner > p");

// sélectionnner la div .dots et ajouter les 4 points du carrousel
let dots = document.querySelector(".dots");
let dot;

for (let i = 0; i < slides.length; i++) {
  dot = document.createElement("span");
  dots.append(dot);
  dot.className = "dot";
}

//   on change le point actif au suivant ;
//   on change l’image ;
//   on change le texte correspondant à l’image.

// ajouter un addEventlistener sur la flèche droite
arrowRight.addEventListener("click", () => {
  if (i > slides.length - 2) {
    i = 0;
  } else {
    i++;
  }
  for (let i = 0; i < slides.length; i++) {
    dot.className = "dot dot_selected";
  }
  slide.src = "./assets/images/slideshow/" + slides[i].image; // la source de l'image change à chaque click
  p.innerHTML = "<p>" + slides[i].tagLine + "</p>"; // Le texte accompagnant l'image change en suivant l'index i de l'image
});

// ajouter un addEventlistener sur la flèche gauche
arrowLeft.addEventListener("click", () => {
  if (i >= 1) {
    i--;
  } else {
    i = slides.length - 1;
  }

  slide.src = "./assets/images/slideshow/" + slides[i].image; // la source de l'image change à chaque click
  p.innerHTML = "<p>" + slides[i].tagLine + "</p>"; // Le texte accompagnant l'image change en suivant l'index i de l'image
});
