const cardEl = document.getElementById("creditCard");
const flipCard = (flip) => {
    if (flip === "flipToRear" && !cardEl.classList.contains("rearIsVsible")) {
        cardEl.classList.add("rearIsVsible");
    }
    if (flip === "flipToFront" && cardEl.classList.contains("rearIsVsible")) {
        cardEl.classList.remove("rearIsVsible");
    }
    if (flip === "flip") {
        if (cardEl.classList.contains("rearIsVsible")) {
            cardEl.classList.remove("rearIsVsible");
        } else {
            cardEl.classList.add("rearIsVsible");
        }
    }
};

// Handle Card Number update
const inputCardNumber = document.getElementById("cardNumber");
const imageCardNumber = document.getElementById("imageCardNumber");

inputCardNumber.addEventListener("input", (event) => {
    //   Remove all non-numeric characters from the input
    const input = event.target.value.replace(/\D/g, "");

    // Add a space after every 4 digits
    let formattedInput = "";
    for (let i = 0; i < input.length; i++) {
        if (i % 4 === 0 && i > 0) {
            formattedInput += " ";
        }
        formattedInput += input[i];
    }

    inputCardNumber.value = formattedInput;
    imageCardNumber.innerHTML = formattedInput;
});

// Handle CCV update
const inputCCVNumber = document.getElementById("ccvNumber");
const imageCCVNumber = document.getElementById("imageCCVNumber");

inputCCVNumber.addEventListener("input", (event) => {
    // Remove all non-numeric characters from the input
    const input = event.target.value.replace(/\D/g, "");
    inputCCVNumber.value = input;
    imageCCVNumber.innerHTML = input;
});

// Handle Exp Date update
const expirationDate = document.getElementById("expDate");
const imageExpDate = document.getElementById("imageExpDate");

expirationDate.addEventListener("input", (event) => {
    // Remove all non-numeric characters from the input
    const input = event.target.value.replace(/\D/g, "");

    // Add a '/' after the first 2 digits
    let formattedInput = "";
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0 && i > 0) {
            formattedInput += "/";
        }
        formattedInput += input[i];
    }

    expirationDate.value = formattedInput;
    imageExpDate.innerHTML = formattedInput;
});

// Handle Card Name update
const inputCardName = document.getElementById("cardName");
const imageCardName = document.getElementById("imageCardName");

inputCardName.addEventListener("input", (event) => {
    imageCardName.innerHTML = event.target.value;
});