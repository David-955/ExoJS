let produits = [
	{
		nom: "ordinateur",
        prix: 1000,
        type: "Electronique",
	},
    {
		nom: "Téléphone",
        prix: 600,
        type: "Electronique",
	},
	{
		nom: "T-shirt",
        prix: 20,
        type: "Vêtements",
	},
    
];



for (let i = 0; i < produits.length; i++) {
    document.write(`<ul><li>${produits[i].nom} - ${produits[i].prix}€ - ${produits[i].type} </li></ul>`);

    
}