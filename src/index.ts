import { loadCharacters } from './loadCharacters.js'
import { loadEpisodes, clearBoard } from './loadEpisodes.js'
import { loadLocations } from './loadLocations.js'
import { removeSidelist } from './loadEpisodes.js'

const url: string = "https://rickandmortyapi.com/api/"

const characterButton = document.querySelector("#characters")
const homePage = document.querySelector("#home-page")
const seasonOne = document.querySelector("#season-one")
const seasonTwo = document.querySelector("#season-two")
const seasonThree = document.querySelector("#season-three")
const seasonFour = document.querySelector("#season-four")
const seasonFive = document.querySelector("#season-five")
const locationButton = document.querySelector("#location-button")

characterButton?.addEventListener("click", (event) => {
    clearBoard();
    removeSidelist();
    event.preventDefault();
    loadCharacters();
    })

//Here we adjust the date for the footer
const date = document.querySelector("#date") as HTMLElement;

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

let newDate = day + "/" + month + "/" + year;

date.innerText = newDate

//Seasons

seasonOne?.addEventListener("click", () => {
    clearBoard();
    removeSidelist()
    loadEpisodes(1, 11);
});

seasonTwo?.addEventListener("click", () => {
    clearBoard()
    removeSidelist()
    loadEpisodes(12, 21);
});

seasonThree?.addEventListener("click", () => {
    clearBoard()
    removeSidelist()
    loadEpisodes(22, 31);
});

seasonFour?.addEventListener("click", () => {
    clearBoard()
    removeSidelist()
    loadEpisodes(32, 41);
});

seasonFive?.addEventListener("click", () => {
    clearBoard()
    removeSidelist()
    loadEpisodes(42, 51);
});

locationButton?.addEventListener("click", (event) => {
    event.preventDefault();
    clearBoard()
    removeSidelist()
    loadLocations()
})

homePage?.addEventListener("click", () => {
    location.reload()
})