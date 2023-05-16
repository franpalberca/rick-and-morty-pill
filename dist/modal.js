var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const modalWhole = document.querySelector("#modal-whole");
const overlay = document.querySelector("#overlay");
const url = "https://rickandmortyapi.com/api/";
const urlCharacters = `${url}/character`;
export function closeModal() {
    modalWhole.style.display = "none";
    overlay.style.display = "none";
    modalWhole.innerHTML = "";
}
export function buildModal(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const urlCharacterId = `${urlCharacters}/${id}`;
        const response = yield fetch(`${urlCharacterId}`);
        const data = yield response.json();
        const modalTour = document.createElement("div");
        modalTour.setAttribute("class", "modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5");
        modalTour.setAttribute("tabindex", "-1");
        modalTour.setAttribute("role", "dialog");
        modalTour.setAttribute("id", "modalTour");
        modalWhole === null || modalWhole === void 0 ? void 0 : modalWhole.appendChild(modalTour);
        const modalBase = document.createElement("div");
        modalBase.setAttribute("class", "modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5");
        modalBase.setAttribute("tabindex", "-1");
        modalBase.setAttribute("role", "dialog");
        modalTour === null || modalTour === void 0 ? void 0 : modalTour.appendChild(modalBase);
        const modalDialog = document.createElement("div");
        modalDialog.setAttribute("class", "modal-dialog");
        modalDialog.setAttribute("role", "document");
        modalBase.appendChild(modalDialog);
        const modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content rounded-4 shadow");
        modalDialog.appendChild(modalContent);
        const modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body p-5");
        modalContent.appendChild(modalBody);
        const modalPicDiv = document.createElement("div");
        modalPicDiv.setAttribute("class", "col-auto d-lg-block d-flex");
        modalBody.appendChild(modalPicDiv);
        const modalPic = document.createElement("img");
        modalPic.setAttribute("class", "bd-placeholder-img justify-content-center");
        modalPic.src = data.image;
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
        modalListFirstElement.innerText = data.gender;
        modalList.appendChild(modalListFirstElement);
        const modalListSecondElement = document.createElement("li");
        modalListSecondElement.setAttribute("class", "mb-0");
        modalListSecondElement.innerText = data.status;
        modalList.appendChild(modalListSecondElement);
        const modalListThirdElement = document.createElement("li");
        modalListThirdElement.setAttribute("class", "mb-0");
        modalListThirdElement.innerText = data.species;
        modalList.appendChild(modalListThirdElement);
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