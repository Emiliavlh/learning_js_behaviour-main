"use strict";

const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function() {

    if (this.textContent == "Livet er dyrt..."){
        this.innerHTML = "<strong>Gå i Netto.</strong>";
    }
    else {
        this.innerHTML = "Livet er dyrt...";
     }
});

const getWordElem2 = document.getElementById("nike");

getWordElem2.addEventListener("click", function() {

    if (this.textContent == "Just Do It"){
        this.innerHTML = "<strong>Nike</strong>";
    }
    else {
        this.innerHTML = "Just Do It";
     }
});