import { Result } from './java_files/Episodes/episodes.js';

const sideList = document.querySelector("#side-list") as HTMLElement;
const url: string = "https://rickandmortyapi.com/api/"
const urlEpisodes: string = `${url}/episode`
const boxPost = document.querySelector("#box-post") as HTMLElement
const showBody = document.querySelector("#show-body")

export async function fetchEpisodes(id: string): Promise<Result> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
        const data = await response.json();

        const { name, air_date, episode } = data;
        const characters = data.characters
        const charactersData = await Promise.all(characters.map(async (characterUrl: string) => {
            const characterResponse = await fetch(characterUrl);
            const characterData = await characterResponse.json();
            return characterData;
        }))

        const episodeObj: Result = { name, air_date, episode, characters: charactersData };

        return episodeObj;
        } catch (error) {
        console.error('Error fetching Episode:', error);
        throw error;
        }
    }

export function loadEpisodes(start: number, end: number) {

    sideList.innerText = '';

    for (let i = start; i <= end; i++) {
        fetchEpisodes(i)
            .then((dataEpisode) => {
                const listEpisodes = document.createElement("li");
                listEpisodes.setAttribute("class", "episode")
                listEpisodes.innerText = dataEpisode["episode"] +" - " + dataEpisode["name"];
                sideList?.appendChild(listEpisodes);
                listEpisodes.addEventListener("click", () => {

                    showBody?.classList.toggle("hidden")
                    const episodeBox = document.createElement("div")
                    episodeBox.setAttribute("class", "col-9")
                    episodeBox.style.maxWidth = "calc(100% - 300px)"; 
                    episodeBox.style.margin = "0 150px"
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

                    const episodeLiThree = document.createElement("li");
                    episodeLiThree.setAttribute("class", "mb-0");
                    episodeLiThree.appendChild(document.createTextNode("Characters: "));
                    episodeUl.appendChild(episodeLiThree);

                    const charactersList = document.createElement("ul");
                    charactersList.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small");
                    episodeLiThree.appendChild(charactersList);

                    dataEpisode["characters"].forEach((character) => {
                        const characterLi = document.createElement("li");
                        characterLi.setAttribute("class", "mb-0");
                        charactersList.appendChild(characterLi);

                        const characterImg = document.createElement("img");
                        characterImg.src = character.image;
                        characterLi.appendChild(characterImg);

                        const characterName = document.createElement("span");
                        characterName.innerText = character.name;
                        characterLi.appendChild(characterName);
                    });
        });
        });
    }
}

export function clearBoard() {
    boxPost.innerHTML = ""
    boxPost?.classList.remove("overflow-y-scroll")
}



