'use strict';

// var recipe1 = new Object;
// var recipe2 = new Object;
// var recipe3 = new Object;
// var recipe4 = new Object;
// var recipe5 = new Object;

document.addEventListener('DOMContentLoaded', () =>{
    let exit = document.getElementById('exit');
    exit.addEventListener('submit', event => {
        event.preventDefault();
        window.location = "./index.html";
    });
});
document.addEventListener('DOMContentLoaded', () => {
    let save_recipe = document.getElementById("recipeDone");
    let update = document.getElementById("update");
    save_recipe.addEventListener("click", event => {
        event.preventDefault();
        
        localStorage.setItem("name",document.getElementById("recipe_name").value);
        localStorage.setItem("creator",document.getElementById("creator_name").value);
        localStorage.setItem("type",document.getElementById("food_type").value);
        localStorage.setItem("ingd1",document.getElementById("ingd1").value);
        localStorage.setItem("ingd2",document.getElementById("ingd2").value);
        localStorage.setItem("ingd3",document.getElementById("ingd3").value);
        localStorage.setItem("ingd4",document.getElementById("ingd4").value);
        localStorage.setItem("ingd5",document.getElementById("ingd5").value);
        localStorage.setItem("ingd6",document.getElementById("ingd6").value);
        localStorage.setItem("ingd7",document.getElementById("ingd7").value);
        localStorage.setItem("ingd8",document.getElementById("ingd8").value);
        localStorage.setItem("ingd9",document.getElementById("ingd9").value);
        localStorage.setItem("ingd10",document.getElementById("ingd10").value);
        localStorage.setItem("ingd11",document.getElementById("ingd11").value);
        localStorage.setItem("ingd12",document.getElementById("ingd12").value);
        localStorage.setItem("prep",document.getElementById("prep").value);
        localStorage.setItem("cook",document.getElementById("cook").value);
        localStorage.setItem("ready",document.getElementById("ready").value);
        localStorage.setItem("nutr",document.getElementById("nutr").value);
        window.location = "./userRecipes.html";        
    });
});
document.addEventListener('DOMContentLoaded', () => {
    let upload = document.getElementById("exit");

    upload.addEventListener('click', event => {
        event.preventDefault();
        window.location = "./index.html";
    });
});