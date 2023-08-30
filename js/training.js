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

/* ------------------------------------ */
/* --- Exercice 4 --- */

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
