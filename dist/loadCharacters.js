var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { buildModal } from './modal.js';
const modalWhole = document.querySelector("#modal-whole");
const overlay = document.querySelector("#overlay");
const url = "https://rickandmortyapi.com/api/";
const urlCharacters = `${url}character`;
const boxPost = document.querySelector("#box-post");
export function fetchCharacter(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${urlCharacters}/${id}`);
            const data = yield response.json();
            const { name, status, species, gender, origin, image, episode } = data;
            return { name, status, species, gender, origin, image, episode };
        }
        catch (error) {
            console.error(error);
            throw new Error("Character cannot be displayed");
        }
    });
}
export function loadCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${urlCharacters}?page=1`);
            const data = yield response.json();
            const totalPages = data.info.pages;
            const pages = [];
            for (let i = 1; i <= totalPages; i++) {
                pages.push(`${urlCharacters}?page=${i}`);
            }
            const requests = pages.map(url => fetch(url).then(response => response.json()));
            const responses = yield Promise.all(requests);
            const characterAll = responses.reduce((acc, response) => [...acc, ...response.results], []);
            characterAll.forEach((element) => {
                boxPost.classList.remove("row-cols-md-1");
                boxPost.classList.add("row-cols-md-4");
                const postBox = document.createElement("div");
                boxPost.appendChild(postBox);
                const postBoxSingle = document.createElement("div");
                postBoxSingle.setAttribute("class", "col");
                postBox.appendChild(postBoxSingle);
                const postCard = document.createElement("div");
                postCard.setAttribute("class", "card shadow-sm card-characters");
                postCard.setAttribute("height", "100%");
                postBox.appendChild(postCard);
                const postBody = document.createElement("div");
                postBody.setAttribute("class", "card-body");
                postCard.appendChild(postBody);
                const divPic = document.createElement("div");
                divPic.setAttribute("class", "col-auto d-lg-block");
                postBody.appendChild(divPic);
                const pictureInside = document.createElement("img");
                pictureInside.setAttribute("class", "img-fluid rounded justify-content-center");
                pictureInside.src = element["image"];
                divPic.appendChild(pictureInside);
                const postTitle = document.createElement("p");
                postTitle.setAttribute("class", "card-text text-truncate");
                postTitle.textContent = element["name"];
                postBody.appendChild(postTitle);
                const postPlacingBtn = document.createElement("div");
                postPlacingBtn.setAttribute("class", "d-flex justify-content-end");
                postBody.appendChild(postPlacingBtn);
                const postGroupBtn = document.createElement("div");
                postGroupBtn.setAttribute("class", "btn-group");
                postPlacingBtn.appendChild(postGroupBtn);
                const postBtnOne = document.createElement("button");
                postBtnOne.setAttribute("type", "button");
                postBtnOne.setAttribute("class", "btn btn-sm btn-outline-secondary");
                postBtnOne.setAttribute("data-target", "modal-whole");
                postBtnOne.setAttribute("data-toggle", "modal");
                postGroupBtn.appendChild(postBtnOne);
                postBtnOne.addEventListener('click', () => {
                    overlay.style.display = "block";
                    modalWhole.style.display = "block";
                    boxPost.innerHTML = "";
                    boxPost === null || boxPost === void 0 ? void 0 : boxPost.classList.remove("overflow-y-scroll");
                    buildModal(element.id);
                });
                const postBtnOneText = document.createElement("p");
                postBtnOneText.setAttribute("class", "card-text");
                postBtnOneText.setAttribute("data-bs-toggle", "modal");
                postBtnOneText.setAttribute("data-bs-target", "#modalTour");
                postBtnOneText.textContent = "View";
                postBtnOne.appendChild(postBtnOneText);
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
//# sourceMappingURL=loadCharacters.js.map