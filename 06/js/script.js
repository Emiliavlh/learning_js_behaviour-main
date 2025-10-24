"use strict";


const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");



getZoomBtn.addEventListener("click", function() {

    if (this.textContent == "Zoom ind"){
        getWordElem.style.fontSize = "15rem";
        getWordElem.style.color = "pink";
        getWordElem.style.fontFamily = "serif";
        this.textContent = "Zoom ud";
    }
    else {
        getWordElem.style.fontSize = "3.0rem";
        getWordElem.style.color = "teal";
        getWordElem.style.fontFamily = "sans-serif";
        this.textContent = "Zoom ind";
     }
});