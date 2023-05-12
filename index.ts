const url = "https://rickandmortyapi.com/api/"
const urlEpisodes = `${url}/episode`
const urlCharacters = `${url}/character`
const urlLocations = `${url}/location`
const boxPost = document.querySelector("#box-post")
const characterButton = document.querySelector("#characters")

characterButton?.addEventListener("click", function(){
    return for (let i = 1; i < 42; i++) {
fetch(`${urlCharacters}?page=${i}`)
    .then(element => element.json())
    .then(data => {
        data.results.forEach(element => {
            const postBox = document.createElement("div")
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
            divPic.setAttribute("class", "col-auto d-lg-block")
            divPic.setAttribute("class", "d-flex")
            postBody.appendChild(divPic)

            const pictureInside = document.createElement("img")
            pictureInside.setAttribute("class", "bd-placeholder-img")
            pictureInside.setAttribute("width", "100%")
            pictureInside.setAttribute("height", "100%")
            pictureInside.setAttribute("class", "justify-content-center")
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
            postBtnOne.setAttribute("data-target", "myModal")
            postBtnOne.setAttribute("data-toggle", "modal");
            postGroupBtn.appendChild(postBtnOne)

            const postBtnOneText = document.createElement("p")
            postBtnOneText.setAttribute("class", "card-text")
            postBtnOneText.setAttribute("data-bs-toggle", "modal")
            postBtnOneText.setAttribute("data-bs-target", "#exampleModal")
            const view = "View"
            postBtnOneText.textContent = view
            postBtnOne.appendChild(postBtnOneText)
            // postBtnOne.addEventListener('click', function() {
            //     modalWhole.style.display = 'block';
            //     });

            const postBtnTwo = document.createElement("button")
            postBtnTwo.setAttribute("type", "button")
            postBtnTwo.setAttribute("class", "btn btn-sm btn-outline-secondary")
            postGroupBtn.appendChild(postBtnTwo)

            const postBtnTwoText = document.createElement("p")
            postBtnTwoText.setAttribute("class", "card-text")
            const remove = "Delete"
            postBtnTwoText.textContent = remove
            postBtnTwo.appendChild(postBtnTwoText)
        });
    })
}
})
//Here we adjust the date for the footer
const date = document.querySelector("#date")

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

let newDate = day + "/" + month + "/" + year;

date.innerText = newDate
