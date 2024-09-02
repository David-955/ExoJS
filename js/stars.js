document.addEventListener("DOMContentLoaded", function () {

    let newElement = document.createElement('div');
    newElement.setAttribute("class", "star");
    document.body.appendChild(newElement);

    const step = 10;
    let posX = 0; // Position initiale sur l'axe X
    let posY = 0; // Position initiale sur l'axe Y

    document.addEventListener("click", function () {
		newElement.style.width = "2rem";
		newElement.style.height = "2rem";
    posY -= step;
    newElement.style.marginTop = `${-posY}px`;
	});

});