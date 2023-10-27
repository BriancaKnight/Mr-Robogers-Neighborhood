// Buisness Logic

function beepBoop(number) {
  if ((isNaN(number) || number < 0) || number > 99999) {
    return "Please enter a number between 0 and 99999";
  }
  let result = [];
  for (let i = 0; i <= number; i++) {
    let numberString = i.toString();

    if (numberString.includes(3)) {
      result.push("'Won't you be my neighbor?'");
    } else if (numberString.includes(2)) {
      result.push("'Boop!'");
    } else if (numberString.includes(1)) {
      result.push("'Beep!'");
    } else {
      result.push(i);
    }
  }
  return result;
}

// User Interface Logic

window.addEventListener("load", function () {
  const numberInput = document.getElementById("numberInput");
  const resultDisplay = document.getElementById("displayResults");
  const errorDisplay = document.getElementById("displayError");
  const userResultDiv = document.getElementById("userResults");

  document.getElementById("userNumber").addEventListener("submit", function (e) {
    e.preventDefault();
    let number = parseInt(numberInput.value);
    let result = beepBoop(number);

    if (result === "Please enter a number between 0 and 99999") {
      errorDisplay.innerText = result;
      resultDisplay.innerText = "";
    } else {
      resultDisplay.innerText = result.join(", ");
      errorDisplay.innerText = "";
      userResultDiv.classList.remove("hidden");
    }
  });
});

