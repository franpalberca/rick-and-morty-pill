import { Location, LocationType } from './java_files/Locations/locations.js'

const url: string = "https://rickandmortyapi.com/api/"
const urlLocations: string = `${url}/location`
const sideList = document.querySelector("#side-list") as HTMLElement;
const boxPost = document.querySelector("#box-post") as HTMLElement
const showBody = document.querySelector("#show-body")

export async function fetchLocationData(id: string): Promise<Location>{
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
        const data = await response.json();
        const { name , type , dimension , residents } = data;

        const location: Location = {
            name,
            type: type as LocationType,
            dimension,
            residents
        };
        return location;
    } catch (error) {
        console.error('Error fetching character:', error);
        throw error;
    }
}

export async function loadLocations() {
    sideList.innerText = '';

    for (let i = 1; i <= 126; i++) {
        try {
            const location = await fetchLocationData(`${i}`);

            const listLocations = document.createElement("li");
            listLocations.setAttribute("class", "episode");
            listLocations.innerText = location.name;
            sideList?.appendChild(listLocations);

            listLocations.addEventListener("click", () => {
                showBody?.classList.toggle("hidden")
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
        } catch (error) {
        console.error(error);
        }
    }
}
// export function loadLocations() {

//     sideList.innerText = '';

//     for (let i = 1; i <= 126; i++) {
//         fetch(`${urlLocations}/${i}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 const listLocations = document.createElement("li");
//                 listLocations.setAttribute("class", "episode")
//                 listLocations.innerText = data["name"];
//                 sideList?.appendChild(listLocations);
//                 console.log(listLocations)
//                 listLocations.addEventListener("click", () => {
//                     const locationBox = document.createElement("div")
//                     locationBox.setAttribute("class", "col")
//                     boxPost.appendChild(locationBox)

//                     const locationCard = document.createElement("div")
//                     locationCard.setAttribute("class", "card shadow-sm")
//                     locationCard.setAttribute("width", "100")
//                     locationCard.setAttribute("height", "100")
//                     locationBox.appendChild(locationCard)

//                     const locationBody = document.createElement("div")
//                     locationBody.setAttribute("class", "card-body")
//                     locationCard.appendChild(locationBody)

//                     const locationTitle = document.createElement("h3")
//                     locationTitle.setAttribute("class", "card-text")
//                     locationTitle.textContent = data["name"]
//                     locationBody.appendChild(locationTitle)

//                     const locationUl = document.createElement("ul")
//                     locationUl.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small")
//                     locationBody.appendChild(locationUl)

//                     const locationLiOne = document.createElement("li")
//                     locationLiOne.setAttribute("class", "mb-0")
//                     locationLiOne.innerText = "Aired on " + data["air_date"]
//                     locationUl.appendChild(locationLiOne)

//                     const locationLiTwo = document.createElement("li")
//                     locationLiTwo.setAttribute("class", "mb-0")
//                     locationLiTwo.innerText = data["episode"]
//                     locationUl.appendChild(locationLiTwo)

//                     const locationLiThree = document.createElement("li")
//                     locationLiThree.setAttribute("class", "mb-0")
//                     locationLiThree.innerText = data["characters"]
//                     locationUl.appendChild(locationLiThree)

//                     const characterImg = document.createElement("img");
//                     characterImg.src = data["characters"]["image"];
//                     locationLiThree.appendChild(characterImg)
//                 })

//             });
//     }
// }

