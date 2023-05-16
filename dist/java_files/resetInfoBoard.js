"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElementsfromBoard = void 0;
function removeElementsfromBoard() {
    const boxPost = document.querySelector("#box-post");
    boxPost.forEach((element) => { element.remove(); });
}
exports.removeElementsfromBoard = removeElementsfromBoard;
//# sourceMappingURL=resetInfoBoard.js.map