/* ------------------------------------ */
/* --- Exercice 1 --- */
// Au clic sur le bouton ci-dessous, masquez le paragraphe de texte à côté de lui s'il est affiché. S'il est masqué, affichez-le.
const text1 = document.querySelector("#ex1 .text");
const button1 = document.querySelector("#ex1 .button");
// function hideP() {
//   text.classList.toggle("hidden");
// }
button1.addEventListener("click", function () {
  text1.classList.toggle("hidden");
});

/* ------------------------------------ */
/* --- Exercice 2 --- */
// Lorsque l'on fait défiler cette page dans le navigateur, affichez la valeur du défilement vertical en complétant la phrase ci-dessous.

// let scrollCounter = document.getElementById("ex2-scroll-value");
let scrollCounter = document.querySelector("#ex2-scroll-value");

window.addEventListener("scroll", function () {
  // let scrollValue = window.scrollY;
  // scrollCounter.textContent = `${scrollValue}`;
  scrollCounter.textContent = Math.floor(window.scrollY);
});

/* ------------------------------------ */
/* --- Exercice 3 --- */
// Au clic sur le bouton ci-dessous, faites changer l'ordre des animaux en déplaçant le premier en dernier.

// const animals = document.getElementById("ex3-animals");
// const button2 = document.querySelector("#ex1 .button");
// console.log(button2)

// button2.addEventListener("click", function () {
//   animals.classList.toggle("hidden");
// });

document.querySelector("#ex3 .button").addEventListener("click", function () {
  let animalsList = document.querySelector("#ex3-animals");
  let firstAnimal = animalsList.firstElementChild;
  animalsList.removeChild(firstAnimal);
  animalsList.appendChild(firstAnimal);
});

/* ------------------------------------ */
/* --- Exercice 4 --- */
// Au clic sur le bouton ci-dessous, changer sa couleur de fond.
// La première fois le bouton devient bleu.
// La deuxième il devient rouge, puis vert.
// Puis il redevient bleu.

const BgColors = ["BgColorBlue", "BgColorRed", "BgColorGreen"];
const buttonEx4 = document.querySelector("#ex4 .button");
let indexClass = 0;

buttonEx4.addEventListener("click", function () {
  buttonEx4.classList.remove(BgColors[indexClass]); // Suppr la classe actuelle
  indexClass = (indexClass + 1) % BgColors.length; // Passe à la classe suivante
  buttonEx4.classList.add(BgColors[indexClass]); // Ajoute la nouvelle classe
});

/* ------------------------------------ */
/* --- Exercice 5 --- */
// Changez la couleur de chacun des boutons ci-dessous en lui affectant une couleur totalement aléatoire à chaque fois qu'il est survolé.
// const buttons = document.querySelectorAll("#ex5 .button");

// buttons.addEventListener("click", function(){
//   buttons.classList.toggle("BgColorBue");
// });

function randomColor() {
  const char = "0123456789abcdef";
  let color = "#";
  for (let k = 0; k < 6; k++) {
    color += char[Math.floor(Math.random() * 16)];
  }
  return color;
}

const buttons = document.querySelectorAll("#ex5 .flex-list .button");
for (let i in buttons) {
  buttons[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = randomColor();
  });
}

/* ------------------------------------ */
/* --- Exercice 6 --- */
// Faites que la phrase ci-desous s'écrive lettre par lettre à raison de 20 lettres par seconde.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro officia eos tenetur voluptate consectetur unde quo veritatis architecto ullam labore ea sit inventore saepe dolorem maxime nam, nisi quod.

let textLorem = document.querySelector("ex6-paragraph");
textLorem.addEventListener("click", function () {
  this.classList.toggle("hidden");
});

/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
  "🥖 Acheter du pain",
  "🗑️ Descendre la poubelle",
  "🐶 Sortir le chien",
  "🍽️ Faire la vaisselle",
  "🧹 Passer l'aspirateur",
  "🌳 Tondre la pelouse",
];

/* ------------------------------------ */
/* --- Exercice 8 --- */
