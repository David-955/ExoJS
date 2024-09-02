function poulet(nbpoulet) {
    let pattesp=2, res;
    for (let i=0; i < nbpoulet; i++) {
        res = pattesp * nbpoulet;
    }
    document.write(`<p>Pattes poulets: ${res} car ${nbpoulet} poulets</p>`);
}

function vache(nbvache) {
    let pattesv=4, res2;
    for (let j=0; j < nbvache; j++) {
        res2 = pattesv * nbvache;
    }
    document.write(`<p>Pattes vaches: ${res2} car ${nbvache} vaches</p>`);
}

function chevaux(nbchevaux) {
    let pattesc=4, res3;
    for (let k=0; k < nbchevaux; k++) {
        res3 = pattesc * nbchevaux;
    }
    document.write(`<p>Pattes chevaux: ${res3} car ${nbchevaux} chevaux</p>`);
}


let a = prompt("combien de poulets ?");
let b = prompt("combien de vaches ?");
let c = prompt("combien de chevaux ?");

poulet(a);
vache(b);
chevaux(c);

