var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://rickandmortyapi.com/api/";
const urlLocations = `${url}/location`;
const sideList = document.querySelector("#side-list");
const boxPost = document.querySelector("#box-post");
const showBody = document.querySelector("#show-body");
export function fetchLocationData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://rickandmortyapi.com/api/location/${id}`);
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
    return __awaiter(this, void 0, void 0, function* () {
        sideList.innerText = '';
        for (let i = 1; i <= 126; i++) {
            try {
                const location = yield fetchLocationData(`${i}`);
                const listLocations = document.createElement("li");
                listLocations.setAttribute("class", "episode");
                listLocations.innerText = location.name;
                sideList === null || sideList === void 0 ? void 0 : sideList.appendChild(listLocations);
                listLocations.addEventListener("click", () => {
                    showBody === null || showBody === void 0 ? void 0 : showBody.classList.toggle("hidden");
                    const locationBox = document.createElement("div");
                    locationBox.setAttribute("class", "col");
                    boxPost.appendChild(locationBox);
                    const locationCard = document.createElement("div");
                    locationCard.setAttribute("class", "card shadow-sm");
                    locationCard.setAttribute("width", "100");
                    locationCard.setAttribute("height", "100");
                    locationBox.appendChild(locationCard);
                    const locationBody = document.createElement("div");
                    locationBody.setAttribute("class", "card-body");
                    locationCard.appendChild(locationBody);
                    const locationTitle = document.createElement("h3");
                    locationTitle.setAttribute("class", "card-text");
                    locationTitle.textContent = location.name;
                    locationBody.appendChild(locationTitle);
                    const locationUl = document.createElement("ul");
                    locationUl.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small");
                    locationBody.appendChild(locationUl);
                    const locationLiOne = document.createElement("li");
                    locationLiOne.setAttribute("class", "mb-0");
                    locationLiOne.innerText = "Type: " + location.type;
                    locationUl.appendChild(locationLiOne);
                    const locationLiTwo = document.createElement("li");
                    locationLiTwo.setAttribute("class", "mb-0");
                    locationLiTwo.innerText = "Dimension: " + location.dimension;
                    locationUl.appendChild(locationLiTwo);
                    const locationLiThree = document.createElement("li");
                    locationLiThree.setAttribute("class", "mb-0");
                    locationLiThree.innerText = "Residents: " + location.residents;
                    locationUl.appendChild(locationLiThree);
                });
            }
            catch (error) {
                console.error(error);
            }
        }
    });
}
//# sourceMappingURL=loadLocations.js.map