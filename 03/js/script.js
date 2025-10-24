"use strict"


const body = document.body;

// Innerwidth bruges til at få vinduets bredde 

function updateBackground() {
const width = window.innerWidth;
    if (width < 480){
        body.style.background = "red";
    }
    else if (width < 640){
        body.style.background = "orange";
    }
    
    else if (width < 760){
        body.style.background = "yellow";
    }
    else if (width < 900) {
      body.style.background = "lightgreen";
    } 
    
    else if (width < 960) {
      body.style.background = "green";
    } 
    
    else if (width < 1024) {
      body.style.background = "lightblue";
    } 
    
    else if (width < 1100) {
      body.style.background = "blue";
    } 
    
    else if (width < 1300) {
      body.style.background = "purple";
    } 
    
    else {
      body.style.background = "pink";
    }
}
// Kør ved load
updateBackground();

// Kør igen når vinduet ændres
window.addEventListener("resize", updateBackground);


