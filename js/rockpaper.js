let rock, paper, scissors;

let number = Math.floor(Math.random() * 3);
// alert(`${number}`); // test
let choice = prompt("Pierre, feuille ou ciseaux ?");

if (number == 0) {
    rock = "pierre";
} else if (number == 1) {
    paper = "feuille";
} else if (number == 2) {
    scissors = "ciseaux";
} 


// cas égalité
if (choice == "pierre" && number == 0) {
    alert("égalité");
} else if (choice == "feuille" && number == 1) {
    alert("égalité");
} else if (choice == "ciseaux" && number == 2) {
    alert("égalité");
}

// cas pierre
if (choice == "pierre" && number == 1) {
    alert("perdu, la feuille gagne contre la pierre");
} else if (choice == "pierre" && number == 2) {
    alert("gagné, ciseaux perd contre pierre");
}

// cas feuille
if (choice == "feuille" && number == 0) {
    alert("gagné, la feuille gagne contre la pierre");
} else if (choice == "feuille" && number == 2) {
    alert("perdu, les ciseaux te coupe");
}

// cas ciseaux
if (choice == "ciseaux" && number == 0) {
    alert("perdu, la pierre casse les ciseaux");
} else if (choice == "ciseaux" && number == 1) {
    alert("gagné, ciseaux coupe feuilles");
}
