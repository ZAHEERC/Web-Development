let titleInputEl = document.getElementById("titleInput");
let textAreaEl = document.getElementById("reviewTextarea");
let addBtnEl = document.getElementById("addBtn");

addBtnEl.onclick = function() {
    if (titleInputEl.value === "") {
        alert("enter the movie title");
        return;
    } else {
        localStorage.setItem("movie title", titleInputEl.value);
        localStorage.setItem("your review", textAreaEl.value);
        let reviewContainerEl = document.getElementById("reviewsContainer");
        let heading = document.createElement("h1");
        let title = localStorage.getItem("movie title");
        heading.textContent = "Movie Title: " + title;
        heading.classList.add("reviewHeading");
        reviewContainerEl.appendChild(heading);
        let paragraphEl = document.createElement("p");
        let review = localStorage.getItem("your review");
        paragraphEl.textContent = "Review:" + review;
        paragraphEl.classList.add("reviewParagraph");
        reviewContainerEl.appendChild(paragraphEl);

        titleInputEl.value = "";
        textAreaEl.value = "";
    }
}