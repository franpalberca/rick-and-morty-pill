export function removeElementsfromBoard (): void {
    const boxPost = document.querySelector("#box-post")
    boxPost.forEach((element) => {element.remove()})
}