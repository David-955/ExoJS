// let number = Math.floor(Math.random() * 11);

// // test
// // alert(`${number}`);

// let choice = prompt("Entrez un numéro entre 1 et 10")

// if (number == choice) {
//     alert("gagné");
// } else if (number == 0 || number != choice) {
//     document.write("perdu ou en dehors de (1 - 10) ou ce n'est pas un numéro");
// } else if (number < choice) {
//     document.write("plus grand");
// } else if (number > choice) {
//     document.write("plus petit");
// }

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Entrez un nombre entre 1 et 10 :"));

if (userGuess === secretNumber) {
alert("Bravo ! Vous avez deviné le bon nombre.");
// isNaN => is Not a Number on vérifie si l'utilisateur a bien rentré un chiffre
} else if (userGuess > 10 || userGuess < 1 || isNaN(userGuess)) {
alert("Veuillez entrer un nombre valide entre 1 et 10.");
} else if (userGuess > secretNumber) {
alert("Trop haut ! Essayez encore.");
} else if (userGuess < secretNumber) {
alert("Trop bas ! Essayez encore.");
} else {
alert("Looser !!");
}

console.log(Math.floor(Math.random() * 11));

console.log();

// Math.random() génère un chiffre aléatoire compris entre 0 et 1 sans jamais être 0 ni 1 pile
Math.random();
// Math.floor() arrondi a l'entier le plus proche
Math.floor();

//Résultat
Math.floor(Math.random());