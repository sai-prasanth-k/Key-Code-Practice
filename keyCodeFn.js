let userInputElement = document.getElementById("userInput");
let keyCodeListElement = document.getElementById("keyCodeList");

function createAndAppendKeyCode(keyCode) {
    let listKeyCodeElement = document.createElement("li");
    listKeyCodeElement.textContent = keyCode;
    listKeyCodeElement.classList.add("key-code-list");
    keyCodeListElement.appendChild(listKeyCodeElement);
}

function onKeyPressed(event) {
    let keyCode = event.keyCode;
    createAndAppendKeyCode(keyCode);
}

userInputElement.addEventListener("keydown", onKeyPressed);