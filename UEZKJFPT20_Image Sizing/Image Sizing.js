let imageElement = document.getElementById("image");

let originalImageWidth = "200px";
let number = originalImageWidth.slice(0, 3);
imageElement.style.width = originalImageWidth;

let warningElement = document.getElementById("warningMessage");
let spanElement = document.getElementById("imageWidth");

function increase_width() {

    if (parseInt(number) >= 300) {
        warningElement.textContent = "Too big,Decrease size of the image";
    } else {
        number = parseInt(number) + 5;
        spanElement.textContent = String(number + "px");
        imageElement.style.width = String(number + "px");
        warningElement.textContent = "";
    }

}

function decrease_width() {

    if (parseInt(number) <= 100) {
        warningElement.textContent = "Can't visible,Increase the size of image";
    } else {
        number = parseInt(number) - 5;
        spanElement.textContent = String(number + "px");
        imageElement.style.width = String(number + "px");
        warningElement.textContent = "";
    }



}