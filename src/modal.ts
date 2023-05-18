import { loadCharacters } from "./loadCharacters.js";
import { loadLocations } from "./loadLocations.js";
import { Character } from "./java_files/characters/characters.js";

const modalWhole = document.querySelector("#modal-whole") as HTMLElement;
const overlay = document.querySelector("#overlay") as HTMLElement;
const url: string = "https://rickandmortyapi.com/api/";
const urlCharacters: string = `${url}/character`;

export function closeModal() {
    modalWhole.style.display = "none";
    overlay.style.display = "none";
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
        backdrop.remove();
    }
    loadCharacters();
}

async function loadLocationsAsync() {
    try {
    await loadLocations();
    buildModal(id)
} catch (error) {
    console.error(error)
}
}

export async function buildModal(id: number) {
    while (modalWhole.firstChild) {
        modalWhole.removeChild(modalWhole.firstChild);
    }
    const urlCharacterId: string = `${urlCharacters}/${id}`;
    const response = await fetch(`${urlCharacterId}`);
    const data = await response.json();

    const modalTour = document.createElement("div");
    modalTour.setAttribute("class", "modal modal-sheet position-static d-block modal-bg p-4 py-md-5");
    modalTour.setAttribute("tabindex", "-1");
    modalTour.setAttribute("role", "dialog");
    modalTour.setAttribute("id", "modalTour");
    modalWhole?.appendChild(modalTour);

    const modalBase = document.createElement("div");
    modalBase.setAttribute("class", "modal modal-sheet position-static d-block modal-bg p-4 py-md-5");
    modalBase.setAttribute("tabindex", "-1");
    modalBase.setAttribute("role", "dialog");
    modalTour?.appendChild(modalBase);

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
    modalPic.setAttribute("alt", `${'Picture of '}${data.name}`)
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

    const modalListSecondElement = document.createElement("li")
    modalListSecondElement.setAttribute("class", "mb-0")
    modalListSecondElement.innerText = "Status: " + data.status
    modalList.appendChild(modalListSecondElement)

    const modalListThirdElement = document.createElement("li")
    modalListThirdElement.setAttribute("class", "mb-0")
    modalListThirdElement.innerText = "Specie: " + data.species
    modalList.appendChild(modalListThirdElement)

    const modalListFourthElement = document.createElement("li")
    modalListFourthElement.setAttribute("class", "mb-0")
    modalListFourthElement.innerText = "Location: " + data.location.name
    modalList.appendChild(modalListFourthElement)

    // const episodes: Character[] = data.episode;
    const episodeNames = await Promise.all(data.episode.map(async (episodeUrl: string) => {
        const response = await fetch(episodeUrl);
        const episodeData = await response.json();
        return episodeData.name;
    }));

    const modalListFifthElement = document.createElement("li");
    modalListFifthElement.setAttribute("class", "mb-0");
    modalListFifthElement.innerText = "Episodes: " + episodeNames.join(", ");
    modalList.appendChild(modalListFifthElement);

    const modalButton = document.createElement("button")
    modalButton.setAttribute("type", "button")
    modalButton.setAttribute("class", "btn btn-lg btn-primary mt-5 w-100")
    modalButton.setAttribute("data-bs-dismiss", "modal")
    modalButton.innerText = "Close"
    modalBody.appendChild(modalButton)
    modalButton.addEventListener("click", closeModal)
    }