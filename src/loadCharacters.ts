import { buildModal } from './modal.js'
import { Character } from './java_files/characters/characters.js'
const modalWhole = document.querySelector("#modal-whole") as HTMLElement
const overlay = document.querySelector("#overlay") as HTMLElement
const url: string = "https://rickandmortyapi.com/api/"
const urlCharacters: string = `${url}/character`
const boxPost = document.querySelector("#box-post") as HTMLElement
const showBody = document.querySelector("#show-body")

export async function fetchCharacter(id: string): Promise<Character> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();

        const { name, status, species, gender, origin, image, episode } = data;

        return { name, status, species, gender, origin, image, episode } as Character;
    } catch (error) {
        console.error(error);
        throw new Error("Character cannot be displayed");
    }
}

export async function loadCharacters() {
    try {
        const response = await fetch(`${urlCharacters}?page=1`);
        const data = await response.json();
        const totalPages = data.info.pages

        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            pages.push(`${urlCharacters}?page=${i}`)
        }

        const requests = pages.map(url => fetch(url).then(response => response.json()))
        const responses = await Promise.all(requests)

        const characterAll = responses.reduce((acc, response) => [...acc, ...response.results], [])

        characterAll.forEach((element: {id: number, image:string, name:string, gender: string, status:string, species:string}) => {


            const postBox = document.createElement("div")
            postBox.setAttribute("class", "col")
            boxPost.appendChild(postBox)

            const postCard = document.createElement("div")
            postCard.setAttribute("class", "card shadow-sm card-characters")
            postCard.setAttribute("height", "100%")
            postBox.appendChild(postCard)

            const postBody = document.createElement("div")
            postBody.setAttribute("class", "card-body")
            postCard.appendChild(postBody)

            const divPic = document.createElement("div")
            divPic.setAttribute("class", "col-auto d-lg-block")
            postBody.appendChild(divPic)

            const pictureInside = document.createElement("img")
            pictureInside.setAttribute("class", "img-fluid rounded justify-content-center")
            pictureInside.src = element["image"]
            divPic.appendChild(pictureInside)

            const postTitle = document.createElement("p")
            postTitle.setAttribute("class", "card-text text-truncate")
            postTitle.textContent = element["name"]
            postBody.appendChild(postTitle)

            const postPlacingBtn = document.createElement("div")
            postPlacingBtn.setAttribute("class", "d-flex justify-content-end")
            postBody.appendChild(postPlacingBtn)

            const postGroupBtn = document.createElement("div")
            postGroupBtn.setAttribute("class", "btn-group")
            postPlacingBtn.appendChild(postGroupBtn)

            const postBtnOne = document.createElement("button")
            postBtnOne.setAttribute("type", "button")
            postBtnOne.setAttribute("class", "btn btn-sm btn-outline-secondary")
            postBtnOne.setAttribute("data-target", "modal-whole")
            postBtnOne.setAttribute("data-toggle", "modal")
            postGroupBtn.appendChild(postBtnOne)
            postBtnOne.addEventListener('click', () => {
                overlay.style.display = "block";
                modalWhole.style.display = "block";
                boxPost.innerHTML = ""
                boxPost?.classList.remove("overflow-y-scroll")
                buildModal(element.id);
                });

            const postBtnOneText = document.createElement("p")
            postBtnOneText.setAttribute("class", "card-text")
            postBtnOneText.setAttribute("data-bs-toggle", "modal")
            postBtnOneText.setAttribute("data-bs-target", "#modalTour")
            postBtnOneText.textContent = "View"
            postBtnOne.appendChild(postBtnOneText)
        })
        // );
    } catch (error) {
        console.error(error)
    }
}
