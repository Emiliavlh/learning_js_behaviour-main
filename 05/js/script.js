"use strict";


const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");


// funktion() er en anonym funktion, men hvis der stod noget inden i parantesen, så er det en funktion med navn.
changeImgBtn.addEventListener("click", function() {

    if (this.textContent == "Give Treat"){
        getImage.src= "img/cutewithlollipop.jpg";
        this.textContent = "No Treat :(";
    }
    else {
        getImage.src= "img/cutecat.jpg";
        this.textContent = "Give Treat";
     }
});