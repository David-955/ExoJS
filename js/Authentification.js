let name = prompt("Prénom ?");

if (name == "David" || name =="david" || name == "DAVID") {
    let age = prompt("Age ?");
    if (age == 28) {
        alert("Bienvenue David");
    }
    else {
        alert("erreur age");
    }
}
else {
    alert("erreur prénom");
}