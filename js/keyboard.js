

    let clickBtn = document.getElementById("square");
    

    // function clickBTN() {
    //     clickBtn.style.width = "30rem";
    //     clickBtn.style.height = "30rem";

    // }
    // clickBtn.addEventListener("click", clickBTN);

    // function dbclickBTN() {
    //     clickBtn.style.width = "15rem";
    //     clickBtn.style.height = "15rem";
    // }
    // clickBtn.addEventListener("dblclick", dbclickBTN);

    // clickBtn.addEventListener("mouseover", function () {
    //     let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    //     clickBtn.style.backgroundColor = "#" + randomColor;
    // });

    document.addEventListener("keydown", function () {
        clickBtn.style.height += "17rem";
    });
