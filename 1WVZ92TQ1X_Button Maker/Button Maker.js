let theApplyButton = document.getElementById("applyButton");
let theCustomButton = document.getElementById("customButton");
let theBackgroundColor = document.getElementById("bgColorInput");
let theFontColor = document.getElementById("fontColorInput");
let theFontSize = document.getElementById("fontSizeInput");
let theFontWeight = document.getElementById("fontWeightInput");
let thePadding = document.getElementById("paddingInput");
let theBorderRadius = document.getElementById("borderRadiusInput");


theApplyButton.onclick = function() {
    let theBgC = theBackgroundColor.value;
    let theFC = theFontColor.value;
    let theFS = theFontSize.value;
    let theFW = theFontWeight.value;
    let theP = thePadding.value;
    let theBR = theBorderRadius.value;

    theCustomButton.style.backgroundColor = theBgC;
    theCustomButton.style.color = theFC;
    theCustomButton.style.fontSize = theFS;
    theCustomButton.style.fontWeight = theFW;
    theCustomButton.style.padding = theP;
    theCustomButton.style.borderRadius = theBR;
}