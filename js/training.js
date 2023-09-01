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
  animalsList.appendChild(animalsList.firstElementChild);
});

/* ------------------------------------ */
/* --- Exercice 4 --- */
// Au clic sur le bouton ci-dessous, changer sa couleur de fond.
// La première fois le bouton devient bleu.
// La deuxième il devient rouge, puis vert.
// Puis il redevient bleu.

// const BgColors = ["Btn-blue", "Btn-red", "Btn-gColorGreen"];
// const buttonEx4 = document.querySelector("#ex4 .button");
// let indexClass = 0;

// buttonEx4.addEventListener("click", function () {
//   buttonEx4.classList.remove(BgColors[indexClass]); // Suppr la classe actuelle
//   indexClass = (indexClass + 1) % BgColors.length; // Passe à la classe suivante
//   buttonEx4.classList.add(BgColors[indexClass]); // Ajoute la nouvelle classe
// });

const button4 = document.querySelector("#ex4 .button");
let clickCounter = 0;

const orgBtnClass = button4.className;

const classList = ["btn-blue", "btn-red", "btn-green"];

button4.addEventListener("click", function () {
  button4.className =
    orgBtnClass + " " + classList[clickCounter % classList.length];
  clickCounter++;

  // switch (clickCounter) {
  //     case 1:
  //         button4.className = orgBtnClass + ' btn-blue'; //BLEU
  //         break;
  //     case 2:
  //         button4.className = orgBtnClass + ' btn-red'; //BLEU
  //         break;
  //     default:
  //         button4.className = orgBtnClass + ' btn-green'; //BLEU
  //         clickCounter = 0;
  // }
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

// const buttons = document.querySelectorAll(".js-ex5-btn .button");
// for (let i in buttons) {
//   // buttons[i].addEventListener("mouseover", function () {
//     this.style.backgroundColor = randomColor();
//   });
// }

/* ------------------------------------ */
/* --- Exercice 6 --- */
// Faites que la phrase ci-desous s'écrive lettre par lettre à raison de 20 lettres par seconde.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro officia eos tenetur voluptate consectetur unde quo veritatis architecto ullam labore ea sit inventore saepe dolorem maxime nam, nisi quod.

const paragraph = document.querySelector("#ex6-paragraph");
let text6 = paragraph.innerText;
paragraph.innerText = "";
// let i = 0;
const t = setInterval(() => {
  paragraph.textContent += text6[0];
  text6 = text6.substring(1);
  if (text6.length < 1) clearInterval(t);
  // paragraph.textContent += text6[i];
  // i++;
  // if (i > text6.length - 1) clearInterval(t);
}, 50);

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

document.querySelector("#ex7-button").addEventListener("click", function () {
  // task List is empty
  if (taskList.length === 0) return;

  const li = document.createElement("li");
  li.textContent = taskList.pop();
  li.classList.add("task-list-task");
  document.querySelector("#ex7-list").appendChild(li);

  // li.addEventListener('click', function(){
  //   taskList.push(this.textContent);
  //   this.remove();
  //   console.log(taskList);
  // })
});
document.querySelector("#ex7-list").addEventListener("click", function (event) {
  if (!event.target.classList.contains("task-list-task")) return;
  taskList.push(event.target.textContent);

  event.target.remove();
});
/* ------------------------------------ */
/* --- Exercice 8 --- */
