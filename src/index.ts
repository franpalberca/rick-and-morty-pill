import { buildModal, closeModal } from './modal.js'
import { loadCharacters } from './loadCharacters.js'
import { removeElementsfromBoard } from './java_files/resetInfoBoard.js'

const url: string = "https://rickandmortyapi.com/api/"
const urlLocations: string = `${url}/location`
const boxPost = document.querySelector("#box-post")
const characterButton = document.querySelector("#characters")
const showCharacters = document.querySelector("#show-characters")
const homePage = document.querySelector("#home-page")
const urlEpisodes: string = `${url}/episode`


characterButton?.addEventListener("click", (event) => {
    event.preventDefault();
    loadCharacters();
    showCharacters?.classList.toggle("hidden")
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

const episodeList = document.querySelector("#episodes-list") as HTMLElement;
const seasonOne = document.querySelector("#season-one")
const seasonTwo = document.querySelector("#season-two")
const seasonThree = document.querySelector("#season-three")
const seasonFour = document.querySelector("#season-four")
const seasonFive = document.querySelector("#season-five")

function loadEpisodes(start:number, end:number) {

    episodeList.innerText = '';

    for (let i = start; i <= end; i++) {
        fetch(`${urlEpisodes}/${i}`)
            .then((episode) => episode.json())
            .then((dataEpisode) => {
                const listEpisodes = document.createElement("li");
                listEpisodes.setAttribute("class", "episode")
                listEpisodes.innerText = dataEpisode["episode"] +" - " + dataEpisode["name"];
                episodeList?.appendChild(listEpisodes);
                listEpisodes.addEventListener("click", () => {
                    const episodeBox = document.createElement("div")
                    episodeBox.setAttribute("class", "col")
                    boxPost.appendChild(episodeBox)

                    const episodeCard = document.createElement("div")
                    episodeCard.setAttribute("class", "card shadow-sm")
                    episodeCard.setAttribute("width", "100")
                    episodeCard.setAttribute("height", "100")
                    episodeBox.appendChild(episodeCard)

                    const episodeBody = document.createElement("div")
                    episodeBody.setAttribute("class", "card-body")
                    episodeCard.appendChild(episodeBody)

                    const episodeTitle = document.createElement("h3")
                    episodeTitle.setAttribute("class", "card-text")
                    episodeTitle.textContent = dataEpisode["name"]
                    episodeBody.appendChild(episodeTitle)

                    const episodeUl = document.createElement("ul")
                    episodeUl.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small")
                    episodeBody.appendChild(episodeUl)

                    const episodeLiOne = document.createElement("li")
                    episodeLiOne.setAttribute("class", "mb-0")
                    episodeLiOne.innerText = "Aired on " + dataEpisode["air_date"]
                    episodeUl.appendChild(episodeLiOne)

                    const episodeLiTwo = document.createElement("li")
                    episodeLiTwo.setAttribute("class", "mb-0")
                    episodeLiTwo.innerText = dataEpisode["episode"]
                    episodeUl.appendChild(episodeLiTwo)

                    const episodeLiThree = document.createElement("li")
                    episodeLiThree.setAttribute("class", "mb-0")
                    episodeLiThree.innerText = dataEpisode["characters"]
                    episodeUl.appendChild(episodeLiThree)

                    const characterImg = document.createElement("img");
                    characterImg.src = dataEpisode["characters"]["image"];
                    episodeLiThree.appendChild(characterImg)
                })

            });
    }
}

function clearBoard() {
    boxPost.innerHTML = ""
    boxPost?.removeAttribute("class", "overflow-y-scroll")
}

seasonOne?.addEventListener("click", () => {
    clearBoard();
    loadEpisodes(1, 11);
});

seasonTwo?.addEventListener("click", () => {
    clearBoard()
    loadEpisodes(12, 21);
});

seasonThree?.addEventListener("click", () => {
    clearBoard()
    loadEpisodes(22, 31);
});

seasonFour?.addEventListener("click", () => {
    clearBoard()
    loadEpisodes(32, 41);
});

seasonFive?.addEventListener("click", () => {
    clearBoard()
    loadEpisodes(42, 51);
});

