'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let addIngredient = document.getElementById("addIngd");
    let openRecipePage = document.getElementById("createRecipe");

    openRecipePage.addEventListener("submit", event => {
        event.preventDefault();
        window.location = "./newRecipe.html";
    });   
});
document.addEventListener('DOMContentLoaded', () => {
    let addIngredient = document.getElementById("addIngd");

    addIngredient.addEventListener("click", event => {
        event.preventDefault();

        let inputbtn = document.createElement('INPUT');
        let text = document.createTextNode('');
        inputbtn.appendChild(text);
        document.getElementById("ingdBox").appendChild(inputbtn);
    });
});
document.addEventListener('DOMContentLoaded', () =>{
    let returnToMain = document.getElementById("recipeDone");

    returnToMain.addEventListener("submit", event => {
        event.preventDefault();
        window.location = "./index.html";
    });
});