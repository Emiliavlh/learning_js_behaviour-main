"use strict"


const nightColorBtn = document.getElementById("nightColorBtn");
const lightColorBtn = document.getElementById("lightColorBtn");
const body = document.body;


nightColorBtn.addEventListener("click", () => {
    body.style = "background: #121212";
})

lightColorBtn.addEventListener("click", () => {
   body.style = "background: #FFFFFF"; 
})

partyModeBtn.addEventListener("click", () => {
body.style.background = "linear-gradient(90deg, #b07bc7, #7bc7ab, #c77b92, #a1c77b, #c7837b)";
});


//Lav en tredje knap, som sætter baggrundsfarven til lightgreen
