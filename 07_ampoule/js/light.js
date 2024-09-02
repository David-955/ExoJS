// let on=0;

// let button = document.getElementById("toggle-button");


// button.addEventListener("click", function () {
//     on=0;
//     let img = document.querySelector("img");
// 	img.src = "./images/on.png";
// 	img.alt = "ampoule allumée";

//     let body = document.querySelector("body");

//     body.style.backgroundColor = "grey";
//     document.getElementById("toggle-button").innerHTML = "Eteindre la lumière";
//     });


    // button.addEventListener("click", function () {
    //     if (on=1) {
    //     let img = document.querySelector("img");
    //     img.src = "./images/off.png";
    
    //     let body = document.querySelector("body");
    
    //     // Fonction pour modifier les styles directement via JavaScript
    //     function modifier() {
    //         body.style.backgroundColor = "#edd37c";
    //         document.getElementById("toggle-button").innerHTML = "Allumer la lumière";
    //     }
    //     modifier(); // Appel de la fonction pour appliquer les styles
    //     on=0;
    // }  
    // });

// ---- VARIABLES ET CONSTANTES GLOBALES

let lightbulb = document.getElementById("lightbulb"); // L'objet DOM représentant la balise <img>
let toggleButton = document.getElementById("toggle-button"); // L'objet DOM représentant la balise <button>
let body = document.querySelector("body");

// ---- FONCTIONS

function onClickToggleLight() {
	// Est-ce que le bouton dit que la lumière est allumée ?
	if (toggleButton.textContent === "Allumer la lumière") {
		// Oui, le bouton indique d'éteindre la lumière.
		toggleButton.innerHTML = "Éteindre la lumière";

		// Changement de style du fond de la page
		body.style.backgroundColor = "#818181";

		// Remplacement par l'image de l'ampoule allumée.
		lightbulb.src = "./images/on.png";
	} else {
		// Non, le bouton indique d'allumer la lumière.
		toggleButton.innerHTML = "Allumer la lumière";

		// Changement de style du fond de la page
		body.style.backgroundColor = "#edd37c";

		// Remplacement par l'image de l'ampoule éteinte.
		lightbulb.src = "./images/off.png";
	}
}

// Installation du gestionnaire d'évènement de clic sur le bouton.
toggleButton.addEventListener("click", onClickToggleLight);
