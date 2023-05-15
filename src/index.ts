const url: string = "https://rickandmortyapi.com/api/"
const urlEpisodes: string = `${url}/episode`
const urlCharacters: string = `${url}/character`
const urlLocations: string = `${url}/location`
const boxPost = document.querySelector("#box-post")
const characterButton = document.querySelector("#characters")
const showCharacters = document.querySelector("#show-characters")
const homePage = document.querySelector("#home-page")
const modalWhole = document.querySelector("#modal-whole")
const overlay = document.querySelector("#overlay")

//Here we start with the modal

function closeModal() {
    modalWhole.style.display = "none"
}

function buildModal(name, image, gender, status, species) {
    const modalTour = document.createElement("div")
    modalTour.setAttribute("class", "modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5")
    modalTour.setAttribute("tabindex", "-1")
    modalTour.setAttribute("role", "dialog")
    modalTour.setAttribute("id", "modalTour")
    modalWhole?.appendChild(modalTour)

    const modalBase = document.createElement("div")
    modalBase.setAttribute("class", "modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5")
    modalBase.setAttribute("tabindex", "-1")
    modalBase.setAttribute("role", "dialog")
    modalTour?.appendChild(modalBase)

    const modalDialog = document.createElement("div")
    modalDialog.setAttribute("class", "modal-dialog")
    modalDialog.setAttribute("role", "document")
    modalBase.appendChild(modalDialog)

    const modalContent = document.createElement("div")
    modalContent.setAttribute("class","modal-content rounded-4 shadow")
    modalDialog.appendChild(modalContent)

    const modalBody = document.createElement("div")
    modalBody.setAttribute("class", "modal-body p-5")
    modalContent.appendChild(modalBody)

    const modalPicDiv = document.createElement("div")
    modalPicDiv.setAttribute("class", "col-auto d-lg-block d-flex")
    modalBody.appendChild(modalPicDiv)

    const modalPic = document.createElement("img")
    modalPic.setAttribute("class", "bd-placeholder-img justify-content-center")
    modalPic.src = image
    modalPicDiv.appendChild(modalPic)

    const modalTitle = document.createElement("h2")
    modalTitle.setAttribute("class", "fw-bold mb-0")
    modalTitle.textContent = name
    modalBody.appendChild(modalTitle)

    const modalList = document.createElement("ul")
    modalList.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small")
    modalBody.appendChild(modalList)

    const modalListFirstElement = document.createElement("li")
    modalListFirstElement.setAttribute("class", "mb-0")
    modalListFirstElement.innerText = gender
    modalList.appendChild(modalListFirstElement)

    const modalListSecondElement = document.createElement("li")
    modalListSecondElement.setAttribute("class", "mb-0")
    modalListSecondElement.innerText = status
    modalList.appendChild(modalListSecondElement)

    const modalListThirdElement = document.createElement("li")
    modalListThirdElement.setAttribute("class", "mb-0")
    modalListThirdElement.innerText = species
    modalList.appendChild(modalListThirdElement)

    const modalButton = document.createElement("button")
    modalButton.setAttribute("type", "button")
    modalButton.setAttribute("class", "btn btn-lg btn-primary mt-5 w-100")
    modalButton.setAttribute("data-bs-dismiss", "modal")
    modalButton.innerText = "Close"
    modalBody.appendChild(modalButton)
    modalButton.addEventListener("click", closeModal())
}

    function loadCharacters() {
    for (let i = 1; i < 42; i++) {
fetch(`${urlCharacters}?page=${i}`)
    .then(element => element.json())
    .then(data => {
        data.results.forEach(element => {
            const postBox = document.createElement("div")
            postBox.setAttribute("class", "col")
            postBox.setAttribute("class", "col")
            boxPost.appendChild(postBox)

            const postCard = document.createElement("div")
            postCard.setAttribute("class", "card shadow-sm")
            postCard.setAttribute("width", "230")
            postCard.setAttribute("height", "275")
            postBox.appendChild(postCard)

            const postBody = document.createElement("div")
            postBody.setAttribute("class", "card-body")
            postCard.appendChild(postBody)

            const divPic = document.createElement("div")
            divPic.setAttribute("class", "col-auto d-lg-block d-flex")
            postBody.appendChild(divPic)

            const pictureInside = document.createElement("img")
            pictureInside.setAttribute("class", "bd-placeholder-img justify-content-center")
            pictureInside.setAttribute("width", "100%")
            pictureInside.setAttribute("height", "100%")
            pictureInside.setAttribute("aria-label", "Placeholder: Thumbnail")
            pictureInside.setAttribute("preserveAspectRatio", "xMidYMid slice")
            pictureInside.setAttribute("focusable", "false")
            pictureInside.src = element.image
            divPic.appendChild(pictureInside)

            const postTitle = document.createElement("p")
            postTitle.setAttribute("class", "card-text")
            postTitle.textContent = element["name"]
            postBody.appendChild(postTitle)

            const postPlacingBtn = document.createElement("div")
            postPlacingBtn.setAttribute("class", "d-flex justify-content-between align-items-center")
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

            const postBtnOneText = document.createElement("p")
            postBtnOneText.setAttribute("class", "card-text")
            postBtnOneText.setAttribute("data-bs-toggle", "modal")
            postBtnOneText.setAttribute("data-bs-target", "#modal-whole")
            postBtnOneText.textContent = "View"
            postBtnOne.appendChild(postBtnOneText)
            postBtnOne.addEventListener('click', () => {
                overlay.style.display = "block";
                modalWhole.style.display = "block";
                buildModal(element.name, element.image, element.gender, element.status, element.species);
                });
        });
    })
}
}



characterButton?.addEventListener("click", (event) => {
    event.preventDefault();
    loadCharacters();
    showCharacters?.classList.toggle("hidden")
})



//Here we adjust the date for the footer
const date = document.querySelector("#date") as HTMLElement;

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

let newDate = day + "/" + month + "/" + year;

date.innerText = newDate



//Seasons

const episodeList = document.querySelector("#episodes-list") as HTMLElement;
const seasonOne = document.querySelector("#season-one")
const seasonTwo = document.querySelector("#season-two")
const seasonThree = document.querySelector("#season-three")
const seasonFour = document.querySelector("#season-four")
const seasonFive = document.querySelector("#season-five")

function loadEpisodes(start, end) {

    episodeList.innerText = '';

    for (let i = start; i <= end; i++) {
        fetch(`${urlEpisodes}/${i}`)
            .then((episode) => episode.json())
            .then((dataEpisode) => {
                dataEpisode["characters"].forEach((character) => {
                    console.log(character)
                })
                const listEpisodes = document.createElement("li");
                listEpisodes.setAttribute("class", "episode")
                listEpisodes.innerText = dataEpisode["episode"] +" - " + dataEpisode["name"];
                episodeList?.appendChild(listEpisodes);
                listEpisodes.addEventListener("click", () => {
                    const episodeBox = document.createElement("div")
                    episodeBox.setAttribute("class", "col")
                    boxPost.appendChild(episodeBox)

                    const episodeCard = document.createElement("div")
                    episodeCard.setAttribute("class", "card shadow-sm")
                    episodeCard.setAttribute("width", "230")
                    episodeCard.setAttribute("height", "275")
                    episodeBox.appendChild(episodeCard)

                    const episodeBody = document.createElement("div")
                    episodeBody.setAttribute("class", "card-body")
                    episodeCard.appendChild(episodeBody)

                    const episodeTitle = document.createElement("h3")
                    episodeTitle.setAttribute("class", "card-text")
                    episodeTitle.textContent = dataEpisode["name"]
                    episodeBody.appendChild(episodeTitle)

                    const episodeUl = document.createElement("ul")
                    episodeUl.setAttribute("class", "d-grid gap-4 my-5 list-unstyled small")
                    episodeBody.appendChild(episodeUl)

                    const episodeLiOne = document.createElement("li")
                    episodeLiOne.setAttribute("class", "mb-0")
                    episodeLiOne.innerText = dataEpisode["air_date"]
                    episodeUl.appendChild(episodeLiOne)

                    const episodeLiTwo = document.createElement("li")
                    episodeLiTwo.setAttribute("class", "mb-0")
                    episodeLiTwo.innerText = dataEpisode["episode"]
                    episodeUl.appendChild(episodeLiTwo)

                    const episodeLiThree = document.createElement("li")
                    episodeLiThree.setAttribute("class", "mb-0")
                    episodeLiThree.innerText = dataEpisode["characters"]
                    const characterImg = document.createElement("img");
                    characterImg.setAttribute("src", dataEpisode["characters.image"]);
                    episodeLiThree.appendChild(characterImg)
                    episodeUl.appendChild(episodeLiThree)
                })

            });
    }
}

function clearBoard() {
    boxPost.innerHTML = ""
    boxPost?.removeAttribute("class", "overflow-y-scroll")
}

seasonOne?.addEventListener("click", () => {
    clearBoard();
    loadEpisodes(1, 11);
});

seasonTwo?.addEventListener("click", () => {
    clearBoard()
    loadEpisodes(12, 21);
});

seasonThree?.addEventListener("click", () => {
    clearBoard()
    loadEpisodes(22, 31);
});

seasonFour?.addEventListener("click", () => {
    clearBoard()
    loadEpisodes(32, 41);
});

seasonFive?.addEventListener("click", () => {
    clearBoard()
    loadEpisodes(42, 51);
});

