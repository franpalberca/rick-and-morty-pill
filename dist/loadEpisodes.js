var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sideList = document.querySelector("#side-list");
const url = "https://rickandmortyapi.com/api/";
const urlEpisodes = `${url}/episode`;
const boxPost = document.querySelector("#box-post");
const showBody = document.querySelector("#show-body");
export function fetchEpisodes(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://rickandmortyapi.com/api/episode/${id}`);
            const data = yield response.json();
            const { name, air_date, episode } = data;
            const characters = data.characters;
            const charactersData = yield Promise.all(characters.map((characterUrl) => __awaiter(this, void 0, void 0, function* () {
                const characterResponse = yield fetch(characterUrl);
                const characterData = yield characterResponse.json();
                return characterData;
            })));
            const episodeObj = { name, air_date, episode, characters: charactersData };
            return episodeObj;
        }
        catch (error) {
            console.error('Error fetching Episode:', error);
            throw error;
        }
    });
}
export function loadEpisodes(start, end) {
    sideList.innerText = '';
    for (let i = start; i <= end; i++) {
        fetchEpisodes(i)
            .then((dataEpisode) => {
            const listEpisodes = document.createElement("li");
            listEpisodes.setAttribute("class", "episode");
            listEpisodes.innerText = dataEpisode["episode"] + " - " + dataEpisode["name"];
            sideList === null || sideList === void 0 ? void 0 : sideList.appendChild(listEpisodes);
            listEpisodes.addEventListener("click", () => {
                showBody === null || showBody === void 0 ? void 0 : showBody.classList.toggle("hidden");
                const episodeBox = document.createElement("div");
                episodeBox.setAttribute("class", "col-9");
                episodeBox.style.maxWidth = "calc(100% - 300px)";
                episodeBox.style.margin = "0 150px";
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
    boxPost.innerHTML = "";
    boxPost === null || boxPost === void 0 ? void 0 : boxPost.classList.remove("overflow-y-scroll");
}
//# sourceMappingURL=loadEpisodes.js.map