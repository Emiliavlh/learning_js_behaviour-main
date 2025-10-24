"use strict";


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("bounce");
//     setTimeout(()=>this.classList.remove("bounce"),600);
// });


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("shake");
//     setTimeout(()=>this.classList.remove("shake"),400);
// });


const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function() {
    this.classList.add("jello");
    setTimeout(()=>this.classList.remove("jello"),600);
});

const getWordElem2 = document.getElementById("flip");

getWordElem2.addEventListener("click", function() {
    this.classList.add("flip");
    setTimeout(()=>this.classList.remove("flip"),1000);
});


