"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCharacters = void 0;
const url = "https://rickandmortyapi.com/api/";
const urlCharacters = `${url}/character`;
const boxPost = document.querySelector("#box-post");
function loadCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 1; i < 42; i++) {
            try {
                const response = yield fetch(`${urlCharacters}?page=${i}`);
                const data = yield response.json();
                data.results.forEach(element => {
                    const postBox = document.createElement("div");
                    postBox.setAttribute("class", "col");
                    postBox.setAttribute("class", "col");
                    boxPost.appendChild(postBox);
                    const postCard = document.createElement("div");
                    postCard.setAttribute("class", "card shadow-sm");
                    postCard.setAttribute("width", "230");
                    postCard.setAttribute("height", "275");
                    postBox.appendChild(postCard);
                    const postBody = document.createElement("div");
                    postBody.setAttribute("class", "card-body");
                    postCard.appendChild(postBody);
                    const divPic = document.createElement("div");
                    divPic.setAttribute("class", "col-auto d-lg-block d-flex");
                    postBody.appendChild(divPic);
                    const pictureInside = document.createElement("img");
                    pictureInside.setAttribute("class", "bd-placeholder-img justify-content-center");
                    pictureInside.setAttribute("width", "100%");
                    pictureInside.setAttribute("height", "100%");
                    pictureInside.setAttribute("aria-label", "Placeholder: Thumbnail");
                    pictureInside.setAttribute("preserveAspectRatio", "xMidYMid slice");
                    pictureInside.setAttribute("focusable", "false");
                    pictureInside.src = element.image;
                    divPic.appendChild(pictureInside);
                    const postTitle = document.createElement("p");
                    postTitle.setAttribute("class", "card-text");
                    postTitle.textContent = element["name"];
                    postBody.appendChild(postTitle);
                    const postPlacingBtn = document.createElement("div");
                    postPlacingBtn.setAttribute("class", "d-flex justify-content-between align-items-center");
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
                        boxPost === null || boxPost === void 0 ? void 0 : boxPost.removeAttribute("class", "overflow-y-scroll");
                        buildModal(element.name, element.image, element.gender, element.status, element.species);
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
            }
        }
    });
}
exports.loadCharacters = loadCharacters;
//# sourceMappingURL=loadCharacters.js.map