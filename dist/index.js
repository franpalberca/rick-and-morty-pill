import { loadCharacters } from './loadCharacters.js';
import { loadEpisodes, clearBoard } from './loadEpisodes.js';
import { loadLocations } from './loadLocations.js';
import { removeSidelist } from './loadEpisodes.js';
const url = "https://rickandmortyapi.com/api/";
const characterButton = document.querySelector("#characters");
const homePage = document.querySelector("#home-page");
const seasonOne = document.querySelector("#season-one");
const seasonTwo = document.querySelector("#season-two");
const seasonThree = document.querySelector("#season-three");
const seasonFour = document.querySelector("#season-four");
const seasonFive = document.querySelector("#season-five");
const locationButton = document.querySelector("#location-button");
characterButton === null || characterButton === void 0 ? void 0 : characterButton.addEventListener("click", (event) => {
    clearBoard();
    removeSidelist();
    event.preventDefault();
    loadCharacters();
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
    removeSidelist();
    loadEpisodes(1, 11);
});
seasonTwo === null || seasonTwo === void 0 ? void 0 : seasonTwo.addEventListener("click", () => {
    clearBoard();
    removeSidelist();
    loadEpisodes(12, 21);
});
seasonThree === null || seasonThree === void 0 ? void 0 : seasonThree.addEventListener("click", () => {
    clearBoard();
    removeSidelist();
    loadEpisodes(22, 31);
});
seasonFour === null || seasonFour === void 0 ? void 0 : seasonFour.addEventListener("click", () => {
    clearBoard();
    removeSidelist();
    loadEpisodes(32, 41);
});
seasonFive === null || seasonFive === void 0 ? void 0 : seasonFive.addEventListener("click", () => {
    clearBoard();
    removeSidelist();
    loadEpisodes(42, 51);
});
locationButton === null || locationButton === void 0 ? void 0 : locationButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearBoard();
    removeSidelist();
    loadLocations();
});
homePage === null || homePage === void 0 ? void 0 : homePage.addEventListener("click", () => {
    location.reload();
});
//# sourceMappingURL=index.js.map