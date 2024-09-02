// let choice = prompt("TVA: 5%, 10% ou 20% ?")
// let price = prompt("Prix HT ?");

// let tva5 = price * 1.05;
// let tva10 = price * 1.10;
// let tva20 = price * 1.20;

// if (choice == 5 || choice == "5%") {
//     document.write(`Prix HT: ${price}, montant tva: 5% et donc prix avec tva : ${tva5}`);
// } else if (choice == 10 || choice == "10%") {
//     document.write(`Prix HT: ${price}, montant tva: 10% et donc prix avec tva : ${tva10}`);
// } else if (choice == 20 || choice == "20%") {
//     document.write(`Prix HT: ${price}, montant tva: 20% et donc prix avec tva : ${tva20}`);
// } else {
//     document.write(`Erreur, réessayez`);
// }

// CORRIGÉ

// Déclaration des variables :
let TAUX_DE_TVA;
let montantHT;
let montantTTC;
let montantTVA;

// Demander le montant HT à l'utilisateur
montantHT = window.prompt("quel est le montant HT svp ?");
montantHT = parseFloat(montantHT);

montantTVA = window.prompt("Choisissez un montant de TVA : 5, 10 ou 20 %");
montantTVA = parseInt(montantTVA);

/*
 * Les deux lignes du dessus peuvent être réduites également en une seule :
 * montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
 */

// BONUS
// création de la condition :
if (montantTVA === 20) {
	TAUX_DE_TVA = 20;
} else if (montantTVA === 10) {
	TAUX_DE_TVA = 10;
} else {
	TAUX_DE_TVA = 5;
}
// fin de condition
// FIN BONUS

// la donnée renvoyé par le prompt est une chaine de caractères, même si c'est un chiffre ou nombre
// parsefloat transform la chaine "string" (chaine de caractère) en nombre utilisable pour faire les calcules
//montantHT = parseFloat(montantHT);

// Calcul du montant de TVA et du montant TTC final.
montantTVA = (montantHT * TAUX_DE_TVA) / 100;
montantTTC = montantHT + montantTVA;

// Affichage du résultat directement dans la page HTML.
document.write(
	"<p>Pour un montant HT de " +
		montantHT +
		" € il y a " +
		montantTVA +
		" € de TVA.</p>",
);

document.write("<p>le montant TTC est de " + montantTTC + " €. </p>");


