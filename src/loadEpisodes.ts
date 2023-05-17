import { Result } from './java_files/Episodes/episodes.js';

const sideList = document.querySelector("#side-list") as HTMLElement;
const url: string = "https://rickandmortyapi.com/api/"
const urlEpisodes: string = `${url}episode`
const boxPost = document.querySelector("#box-post") as HTMLElement

export async function fetchEpisodes(id: string): Promise<Result> {
    try {
        const response = await fetch(`${urlEpisodes}/${id}`);
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

export function clearBoard() {
    boxPost.innerHTML = ""
    boxPost?.classList.remove("overflow-y-scroll")
}

export function removeSidelist {
    sideList.innerHTML = ""
}

export function loadEpisodes(start: number, end: number) {

    for (let i = start; i <= end; i++) {
        fetchEpisodes(i)
            .then((dataEpisode) => {
                const listEpisodes = document.createElement("li");
                listEpisodes.setAttribute("class", "pointer")
                listEpisodes.innerText = dataEpisode["episode"] +" - " + dataEpisode["name"];
                sideList?.appendChild(listEpisodes);
                listEpisodes.addEventListener("click", () => {
                    clearBoard()

                    boxPost.classList.remove("row-cols-md-4")
                    boxPost.classList.add("row-cols-md-1")
                    const episodeBox = document.createElement("div")
                    episodeBox.setAttribute("class", "col-9")
                    boxPost.appendChild(episodeBox)

                    const episodeCard = document.createElement("div")
                    episodeCard.setAttribute("class", "card shadow-sm")
                    episodeCard.setAttribute("width", "100")
                    episodeCard.setAttribute("height", "100")
                    episodeBox.appendChild(episodeCard)

                    const episodeBody = document.createElement("div")
                    episodeBody.setAttribute("class", "card-body card-screen d-grid grid-custom")
                    episodeCard.appendChild(episodeBody)

                    const episodeTitle = document.createElement("h3")
                    episodeTitle.setAttribute("class", "card-text row-1")
                    episodeTitle.textContent = dataEpisode["name"]
                    episodeBody.appendChild(episodeTitle)

                    const episodeUl = document.createElement("ul")
                    episodeUl.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small row-2")
                    episodeBody.appendChild(episodeUl)

                    const episodeLiOne = document.createElement("li")
                    episodeLiOne.setAttribute("class", "mb-0")
                    episodeLiOne.innerText = "Aired on " + dataEpisode["air_date"]
                    episodeUl.appendChild(episodeLiOne)

                    const episodeLiTwo = document.createElement("li")
                    episodeLiTwo.setAttribute("class", "mb-0")
                    episodeLiTwo.innerText = dataEpisode["episode"]
                    episodeUl.appendChild(episodeLiTwo)

                    const episodeLiThree = document.createElement("h5");
                    episodeLiThree.setAttribute("class", "mb-0");
                    episodeLiThree.appendChild(document.createTextNode("CHARACTERS: "));
                    episodeUl.appendChild(episodeLiThree);

                    const charactersList = document.createElement("ul");
                    charactersList.setAttribute("class", "row row-cols-4 gap-5 my-5 d-flex justify-content-center");
                    episodeLiThree.appendChild(charactersList);

                    dataEpisode["characters"].forEach((character) => {
                        const characterDiv = document.createElement("div");
                        characterDiv.setAttribute("class", "col-md-3 row-3");
                        charactersList.appendChild(characterDiv);

                        const characterImg = document.createElement("img");
                        characterImg.setAttribute("class", "img-fluid rounded");
                        characterImg.src = character.image;
                        characterDiv.appendChild(characterImg);

                        const characterName = document.createElement("span");
                        characterName.innerText = character.name;
                        characterDiv.appendChild(characterName);

                    });
                    });
        });
        };
    }





