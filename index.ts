const urlEpisodes = "https://rickandmortyapi.com/api/episode"
const urlCharacters = ${urlEpisodes}/character
const urlLocations = ${urlEpisodes}/location

fetch(urlEpisodes)
    .then(element => element.json())
    .then(data => {
        data.forEach(element => {
            
        });
    })
//Here we adjust the date for the footer
const date = document.querySelector("#date")

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

let newDate = day + "/" + month + "/" + year;

date.innerText = newDate
