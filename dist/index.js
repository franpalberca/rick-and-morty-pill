"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadCharacters_js_1 = require("./loadCharacters.js");
const url = "https://rickandmortyapi.com/api/";
const urlLocations = `${url}/location`;
const boxPost = document.querySelector("#box-post");
const characterButton = document.querySelector("#characters");
const showCharacters = document.querySelector("#show-characters");
const homePage = document.querySelector("#home-page");
const urlEpisodes = `${url}/episode`;
characterButton === null || characterButton === void 0 ? void 0 : characterButton.addEventListener("click", (event) => {
    event.preventDefault();
    (0, loadCharacters_js_1.loadCharacters)();
    showCharacters === null || showCharacters === void 0 ? void 0 : showCharacters.classList.toggle("hidden");
});
const date = document.querySelector("#date");
let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let newDate = day + "/" + month + "/" + year;
date.innerText = newDate;
const episodeList = document.querySelector("#episodes-list");
const seasonOne = document.querySelector("#season-one");
const seasonTwo = document.querySelector("#season-two");
const seasonThree = document.querySelector("#season-three");
const seasonFour = document.querySelector("#season-four");
const seasonFive = document.querySelector("#season-five");
function loadEpisodes(start, end) {
    episodeList.innerText = '';
    for (let i = start; i <= end; i++) {
        fetch(`${urlEpisodes}/${i}`)
            .then((episode) => episode.json())
            .then((dataEpisode) => {
            const listEpisodes = document.createElement("li");
            listEpisodes.setAttribute("class", "episode");
            listEpisodes.innerText = dataEpisode["episode"] + " - " + dataEpisode["name"];
            episodeList === null || episodeList === void 0 ? void 0 : episodeList.appendChild(listEpisodes);
            listEpisodes.addEventListener("click", () => {
                const episodeBox = document.createElement("div");
                episodeBox.setAttribute("class", "col");
                boxPost.appendChild(episodeBox);
                const episodeCard = document.createElement("div");
                episodeCard.setAttribute("class", "card shadow-sm");
                episodeCard.setAttribute("width", "100");
                episodeCard.setAttribute("height", "100");
                episodeBox.appendChild(episodeCard);
                const episodeBody = document.createElement("div");
                episodeBody.setAttribute("class", "card-body");
                episodeCard.appendChild(episodeBody);
                const episodeTitle = document.createElement("h3");
                episodeTitle.setAttribute("class", "card-text");
                episodeTitle.textContent = dataEpisode["name"];
                episodeBody.appendChild(episodeTitle);
                const episodeUl = document.createElement("ul");
                episodeUl.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small");
                episodeBody.appendChild(episodeUl);
                const episodeLiOne = document.createElement("li");
                episodeLiOne.setAttribute("class", "mb-0");
                episodeLiOne.innerText = "Aired on " + dataEpisode["air_date"];
                episodeUl.appendChild(episodeLiOne);
                const episodeLiTwo = document.createElement("li");
                episodeLiTwo.setAttribute("class", "mb-0");
                episodeLiTwo.innerText = dataEpisode["episode"];
                episodeUl.appendChild(episodeLiTwo);
                const episodeLiThree = document.createElement("li");
                episodeLiThree.setAttribute("class", "mb-0");
                episodeLiThree.innerText = dataEpisode["characters"];
                episodeUl.appendChild(episodeLiThree);
                const characterImg = document.createElement("img");
                characterImg.src = dataEpisode["characters"]["image"];
                episodeLiThree.appendChild(characterImg);
            });
        });
    }
}
function clearBoard() {
    boxPost.innerHTML = "";
    boxPost === null || boxPost === void 0 ? void 0 : boxPost.removeAttribute("class", "overflow-y-scroll");
}
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
//# sourceMappingURL=index.js.map