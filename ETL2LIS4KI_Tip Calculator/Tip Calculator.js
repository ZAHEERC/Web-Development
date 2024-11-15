let theBillAmount = document.getElementById("billAmount");
let thePercentageTip = document.getElementById("percentageTip");
let theTipAmount = document.getElementById("tipAmount");
let theTotalAmount = document.getElementById("totalAmount");
let theErrorMessage = document.getElementById("errorMessage");
let theDisplayErrorMessage = "Please Enter a Valid Input.";

function tipCalculator() {
    let theBillAmountValue = theBillAmount.value;
    let thePercentageTipValue = thePercentageTip.value;
    if (theBillAmountValue === "") {
        theErrorMessage.textContent = theDisplayErrorMessage;
    } else if (thePercentageTipValue === "") {
        theErrorMessage.textContent = theDisplayErrorMessage;
    } else {
        theErrorMessage.textContent = "";

        let billAmount = parseInt(theBillAmountValue);
        let percentageTip = parseInt(thePercentageTipValue);


        let calculatedTip = (billAmount / 100) * percentageTip;
        let calcualtedTotal = billAmount + calculatedTip;

        theTipAmount.value = calculatedTip;
        theTotalAmount.value = calcualtedTotal;
    }

}