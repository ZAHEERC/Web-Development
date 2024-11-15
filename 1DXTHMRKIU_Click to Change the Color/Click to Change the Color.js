let theBackgroundColor = document.getElementById("colorPickerContainer");
let theCode = document.getElementById("selectedColorHexCode");

function change1() {
    theBackgroundColor.style.backgroundColor = "#e0e0e0";
    theCode.textContent = "#e0e0e0";
}

function change2() {
    theBackgroundColor.style.backgroundColor = "#6fcf97";
    theCode.textContent = "#6fcf97";
}

function change3() {
    theBackgroundColor.style.backgroundColor = "#56ccf2";
    theCode.textContent = "#56ccf2";
}

function change4() {
    theBackgroundColor.style.backgroundColor = "#bb6bd9";
    theCode.textContent = "#bb6bd9";
}