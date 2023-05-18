var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clearBoard } from './loadEpisodes.js';
const url = "https://rickandmortyapi.com/api/";
const urlLocations = `${url}location`;
const sideList = document.querySelector("#side-list");
const boxPost = document.querySelector("#box-post");
export function fetchLocationData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${urlLocations}/${id}`);
            const data = yield response.json();
            const { name, type, dimension, residents } = data;
            const location = {
                name,
                type: type,
                dimension,
                residents
            };
            return location;
        }
        catch (error) {
            console.error('Error fetching character:', error);
            throw error;
        }
    });
}
export function loadLocations() {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            sideList.innerText = '';
            for (let i = 1; i <= 126; i++) {
                const location = yield fetchLocationData(`${i}`);
                const listLocations = document.createElement("li");
                listLocations.setAttribute("class", "episode pointer");
                listLocations.innerText = location.name;
                sideList === null || sideList === void 0 ? void 0 : sideList.appendChild(listLocations);
                listLocations.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                    clearBoard();
                    boxPost.classList.remove("row-cols-md-4");
                    boxPost.classList.add("row-cols-md-1");
                    const locationBox = document.createElement("div");
                    locationBox.setAttribute("class", "col");
                    boxPost.appendChild(locationBox);
                    const locationCard = document.createElement("div");
                    locationCard.setAttribute("class", "card shadow-sm card-location bg-card");
                    locationBox.appendChild(locationCard);
                    const locationBody = document.createElement("div");
                    locationBody.setAttribute("class", "card-body d-grid grid-custom");
                    locationCard.appendChild(locationBody);
                    const locationTitle = document.createElement("h3");
                    locationTitle.setAttribute("class", "card-text row-1");
                    locationTitle.textContent = location.name;
                    locationBody.appendChild(locationTitle);
                    const locationUl = document.createElement("ul");
                    locationUl.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small row-2");
                    locationBody.appendChild(locationUl);
                    const locationLiOne = document.createElement("li");
                    locationLiOne.setAttribute("class", "mb-0");
                    locationLiOne.innerText = "Type: " + location.type;
                    locationUl.appendChild(locationLiOne);
                    const locationLiTwo = document.createElement("li");
                    locationLiTwo.setAttribute("class", "mb-0");
                    locationLiTwo.innerText = "Dimension: " + location.dimension;
                    locationUl.appendChild(locationLiTwo);
                    const locationLiThree = document.createElement("h5");
                    locationLiThree.setAttribute("class", "mb-0");
                    locationLiThree.appendChild(document.createTextNode("RESIDENTS: "));
                    locationUl.appendChild(locationLiThree);
                    const residentBox = document.createElement("div");
                    residentBox.setAttribute("class", "row row-cols-4 gap-5 my-5 justify-content-center");
                    locationBody.appendChild(residentBox);
                    const residentsList = yield Promise.all(location.residents.map((urlResident) => __awaiter(this, void 0, void 0, function* () {
                        const response = yield fetch(urlResident);
                        const data = yield response.json();
                        return data;
                    })));
                    residentsList.forEach((resident) => {
                        const residentDiv = document.createElement("div");
                        residentDiv.setAttribute("class", "col mb-4");
                        residentBox.appendChild(residentDiv);
                        const residentImg = document.createElement("img");
                        residentImg.setAttribute("class", "img-fluid rounded");
                        residentImg.src = resident.image;
                        residentImg.setAttribute("alt", `${'Picture of '}${resident.name}`);
                        residentDiv.appendChild(residentImg);
                        const residentName = document.createElement("h5");
                        residentName.innerText = resident.name;
                        residentDiv.appendChild(residentName);
                    });
                }));
            }
            resolve();
        }
        catch (error) {
            reject(error);
        }
    }));
}
//# sourceMappingURL=loadLocations.js.map