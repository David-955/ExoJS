// function calcul(num1, num2) {
//     num1 = parseInt(num1);
//     num2 = parseInt(num2);
// 	let calc = num1 + num2;
// 	document.write(`<p>Résultat de ${num1} + ${num2} = ${calc}</p>`);
// }

// let ask1 = prompt("num 1:");
// let ask2 = prompt("num 2:");

// calcul(ask1, ask2);



// VERSION 1
function addition(nb1, nb2) {
    let somme = nb1 + nb2;
    return somme;
    }
    let result = addition(1, 2);
    console.log(result);
    document.write(`Le premier résultat est: ${result}`);
    
    // VERSION 2
    let userNb1 = parseInt(prompt("Donne moi un nombre :"));
    let userNb2 = parseInt(prompt("Donne moi un second nombre :"));
    let resultUser = addition(userNb1, userNb2);
    document.write(
    `<p style='color:red'>Le résultat de ${userNb1} + ${userNb2} = ${resultUser} </p>`,
    );