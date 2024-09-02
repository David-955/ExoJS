let message = "";

function choose(arg) {
    switch (arg) {
        case 'un':
            document.getElementById("message").textContent="pizza";
        break;
        case 'deux':
            document.getElementById("message").textContent="pates";
        break;
        case 'trois':
            document.getElementById("message").textContent="salade";
        break;
        case 'quatre':
            document.getElementById("message").textContent="sushi";
        break;
        default: 
        document.getElementById("message").textContent="";
    }
}

