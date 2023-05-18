var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadCharacters } from "./loadCharacters.js";
import { loadLocations } from "./loadLocations.js";
const modalWhole = document.querySelector("#modal-whole");
const overlay = document.querySelector("#overlay");
const url = "https://rickandmortyapi.com/api/";
const urlCharacters = `${url}/character`;
export function closeModal() {
    modalWhole.style.display = "none";
    overlay.style.display = "none";
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
        backdrop.remove();
    }
    loadCharacters();
}
function loadLocationsAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield loadLocations();
            buildModal(id);
        }
        catch (error) {
            console.error(error);
        }
    });
}
export function buildModal(id) {
    return __awaiter(this, void 0, void 0, function* () {
        while (modalWhole.firstChild) {
            modalWhole.removeChild(modalWhole.firstChild);
        }
        const urlCharacterId = `${urlCharacters}/${id}`;
        const response = yield fetch(`${urlCharacterId}`);
        const data = yield response.json();
        const modalTour = document.createElement("div");
        modalTour.setAttribute("class", "modal modal-sheet position-static d-block modal-bg p-4 py-md-5");
        modalTour.setAttribute("tabindex", "-1");
        modalTour.setAttribute("role", "dialog");
        modalTour.setAttribute("id", "modalTour");
        modalWhole === null || modalWhole === void 0 ? void 0 : modalWhole.appendChild(modalTour);
        const modalBase = document.createElement("div");
        modalBase.setAttribute("class", "modal modal-sheet position-static d-block modal-bg p-4 py-md-5");
        modalBase.setAttribute("tabindex", "-1");
        modalBase.setAttribute("role", "dialog");
        modalTour === null || modalTour === void 0 ? void 0 : modalTour.appendChild(modalBase);
        const modalDialog = document.createElement("div");
        modalDialog.setAttribute("class", "modal-dialog");
        modalDialog.setAttribute("role", "document");
        modalBase.appendChild(modalDialog);
        const modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content rounded-4 shadow modal-card");
        modalDialog.appendChild(modalContent);
        const modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body p-5");
        modalContent.appendChild(modalBody);
        const modalPicDiv = document.createElement("div");
        modalPicDiv.setAttribute("class", "col-auto d-lg-block d-flex justify-content-center");
        modalBody.appendChild(modalPicDiv);
        const modalPic = document.createElement("img");
        modalPic.setAttribute("class", "img-fluid rounded mx-auto my-3");
        modalPic.src = data.image;
        modalPic.setAttribute("alt", `${'Picture of '}${data.name}`);
        modalPicDiv.appendChild(modalPic);
        const modalTitle = document.createElement("h2");
        modalTitle.setAttribute("class", "fw-bold mb-0");
        modalTitle.textContent = data.name;
        modalBody.appendChild(modalTitle);
        const modalList = document.createElement("ul");
        modalList.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small");
        modalBody.appendChild(modalList);
        const modalListFirstElement = document.createElement("li");
        modalListFirstElement.setAttribute("class", "mb-0");
        modalListFirstElement.innerText = "Gender: " + data.gender;
        modalList.appendChild(modalListFirstElement);
        const modalListSecondElement = document.createElement("li");
        modalListSecondElement.setAttribute("class", "mb-0");
        modalListSecondElement.innerText = "Status: " + data.status;
        modalList.appendChild(modalListSecondElement);
        const modalListThirdElement = document.createElement("li");
        modalListThirdElement.setAttribute("class", "mb-0");
        modalListThirdElement.innerText = "Specie: " + data.species;
        modalList.appendChild(modalListThirdElement);
        const modalListFourthElement = document.createElement("li");
        modalListFourthElement.setAttribute("class", "mb-0");
        modalListFourthElement.innerText = "Location: " + data.location.name;
        modalList.appendChild(modalListFourthElement);
        const episodeNames = yield Promise.all(data.episode.map((episodeUrl) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(episodeUrl);
            const episodeData = yield response.json();
            return episodeData.name;
        })));
        const modalListFifthElement = document.createElement("li");
        modalListFifthElement.setAttribute("class", "mb-0");
        modalListFifthElement.innerText = "Episodes: " + episodeNames.join(", ");
        modalList.appendChild(modalListFifthElement);
        const modalButton = document.createElement("button");
        modalButton.setAttribute("type", "button");
        modalButton.setAttribute("class", "btn btn-lg btn-primary mt-5 w-100");
        modalButton.setAttribute("data-bs-dismiss", "modal");
        modalButton.innerText = "Close";
        modalBody.appendChild(modalButton);
        modalButton.addEventListener("click", closeModal);
    });
}
//# sourceMappingURL=modal.js.map