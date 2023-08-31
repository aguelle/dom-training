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

let scrollCounter = document.getElementById("ex2-scroll-value");

window.addEventListener("scroll", function () {
  let scrollValue = window.scrollY;
  scrollCounter.textContent = `${scrollValue}`;
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

const buttonEx4 = document.querySelector("#ex4 .button");

buttonEx4.addEventListener("click", function () {
  this.classList.toggle("BgColorBlue", "BgColorRed", "BgColorGreen");
});
/* ------------------------------------ */
/* --- Exercice 5 --- */

/* ------------------------------------ */
/* --- Exercice 6 --- */

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
