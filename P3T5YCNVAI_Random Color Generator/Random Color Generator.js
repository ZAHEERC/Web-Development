let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let backGroundDisplay = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");


buttonElement.onclick = function() {
    let numberOfColors = bgColorsArray.length;
    let randomNumber = Math.ceil(Math.random() * numberOfColors);
    if (randomNumber === numberOfColors) {
        randomNumber = numberOfColors - 1;
    }
    backGroundDisplay.style.backgroundColor = bgColorsArray[randomNumber];
}