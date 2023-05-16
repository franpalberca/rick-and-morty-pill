import { loadCharacters } from './loadCharacters.js';
import { loadEpisodes, clearBoard } from './loadEpisodes.js';
import { loadLocations } from './loadLocations.js';
const url = "https://rickandmortyapi.com/api/";
const characterButton = document.querySelector("#characters");
const showBody = document.querySelector("#show-body");
const homePage = document.querySelector("#home-page");
const seasonOne = document.querySelector("#season-one");
const seasonTwo = document.querySelector("#season-two");
const seasonThree = document.querySelector("#season-three");
const seasonFour = document.querySelector("#season-four");
const seasonFive = document.querySelector("#season-five");
const locationButton = document.querySelector("#location-button");
characterButton === null || characterButton === void 0 ? void 0 : characterButton.addEventListener("click", (event) => {
    event.preventDefault();
    loadCharacters();
    showBody === null || showBody === void 0 ? void 0 : showBody.classList.toggle("hidden");
});
const date = document.querySelector("#date");
let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let newDate = day + "/" + month + "/" + year;
date.innerText = newDate;
seasonOne === null || seasonOne === void 0 ? void 0 : seasonOne.addEventListener("click", () => {
    clearBoard();
    loadEpisodes(1, 11);
});
seasonTwo === null || seasonTwo === void 0 ? void 0 : seasonTwo.addEventListener("click", () => {
    clearBoard();
    loadEpisodes(12, 21);
});
seasonThree === null || seasonThree === void 0 ? void 0 : seasonThree.addEventListener("click", () => {
    clearBoard();
    loadEpisodes(22, 31);
});
seasonFour === null || seasonFour === void 0 ? void 0 : seasonFour.addEventListener("click", () => {
    clearBoard();
    loadEpisodes(32, 41);
});
seasonFive === null || seasonFive === void 0 ? void 0 : seasonFive.addEventListener("click", () => {
    clearBoard();
    loadEpisodes(42, 51);
});
locationButton === null || locationButton === void 0 ? void 0 : locationButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearBoard();
    loadLocations();
});
//# sourceMappingURL=index.js.map