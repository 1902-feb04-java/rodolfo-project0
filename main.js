'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let openRecipePage = document.getElementById("createRecipe");
    openRecipePage.addEventListener("submit", event => {
        event.preventDefault(); 
        window.location = "./newRecipe.html";
    });   
});
document.addEventListener('DOMContentLoaded', () => {
    let user_recipes = document.getElementById("user_recipes");
    user_recipes.addEventListener('submit', event => {
        event.preventDefault();
        window.location = "./userRecipes.html";
    });
});
document.addEventListener('DOMContentLoaded', () => {
    let home = document.getElementById("home");
    home.addEventListener("submit", event => {
        event.preventDefault();
        window.location = "./home.html";
    });
});