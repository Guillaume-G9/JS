let image = getElementById("onclick")


onclick.addEventListener("click", function() {


    if (document.getElementById("imgClickAndChange").src == "./images/initial.jpg") {
        document.getElementById("imgClickAndChange").src = "./images/final.png";
    } else {
        (document.getElementById("imgClickAndChange").src = "./images/final.png");
    }
})