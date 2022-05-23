var btnTranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



function clickEventHandler() {
    outputDiv.innerText = "translate: " + txtinput.value
}

btnTranslate.addEventListener("click", clickEventHandler)