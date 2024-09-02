let bank = 1000;
let month = 1;

document.write(`<p>Je suis à ${bank} le mois ${month}</p>`);

while (bank <= 1950) {
    month++;
    bank+=50;
    document.write(`<p>Je suis à ${bank} le mois ${month}</p>`);
}

// console.log(month);
document.write("Total: " + month + " mois.");
