let numberOne = document.getElementById("firstNumber");
let numberTwo = document.getElementById("secondNumber");
let anwser = document.getElementById("userInput");
let successMessage = "Congratulations! You are Right";
let failMessage = "Please Try Again!";
let total = parseInt(numberOne) + parseInt(numberTwo);


function checking() {
    let firstRNumber = parseInt(numberOne.textContent);
    let secondRNumber = parseInt(numberTwo.textContent);
    let total = firstRNumber + secondRNumber;
    let uservalue = parseInt(anwser.value);

    if (uservalue === total) {
        document.getElementById("gameResult").textContent = "Congratulations! You got it Right"
        document.getElementById("gameResult").style.backgroundColor = "#028a0f";
    } else {
        document.getElementById("gameResult").textContent = "Please Try Again!";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c";
    }

}

function restarting() {
    let firstRNumber = Math.ceil(Math.random() * 100);
    numberOne.textContent = firstRNumber;

    let secondRNumber = Math.ceil(Math.random() * 100);
    numberTwo.textContent = secondRNumber;

    anwser.value = "";
    document.getElementById("gameResult").textContent = "";

}

restarting();