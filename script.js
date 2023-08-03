// Add your code to this file
let background = document.querySelector("body");
let color = "darkblue";
background.style["background-color"] = color; /* change the background color into darkblue */

let heading = document.querySelector("h1");
heading.style["text-decoration"] = "underline"; /* add an underline under the text pokemon with "text-decoration" */

let heading2 = document.querySelector("h2");
heading2.innerHTML = "Here are Pokemon's incrdible Gen 1 starters!";
heading2.style["text-align"] = "center";

let imgBorder = document.getElementById("starters_image_div");
imgBorder.style["border"] = "5px dotted yellow";

let pokeImageBorder = document.getElementsByClassName('pokemon_images');
for(let i = 0; i < pokeImageBorder.length; i++){
    pokeImageBorder[i].style['border'] = '5px dotted yellow';
}

let PokemonNames = document.getElementsByClassName('pokemon_names');
for(let i = 0; i < PokemonNames.length; i++){
    PokemonNames[i].style["color"] = "gold";
    PokemonNames[i].innerHTML += "!";
}

let footer = document.querySelector('footer');
footer.style["border-style"] = "solid none solid none";
footer.style["padding"] = "10px";
footer.style["margin-top"] = "20vh";