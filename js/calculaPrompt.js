let a, b, res;

a = prompt("Numéro 1 : ");
b = prompt("Numéro 2 : ");

res = a + b;
document.write(`Avant conversion : ${res}`);

// a et b s'affichent à la suite car ils sont en string, faut donc convertir en number

a = parseInt(a);
b = parseInt(b);
res = a + b;

document.write(` puis après : ${res}`);