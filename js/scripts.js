// Buisness Logic

window.addEventListener("load", function () {
  document.getElementById("userNumber").addEventListener("submit", beepBoop);
});

function beepBoop(number) {
  if (number < 0) {
    return "Please enter a number greater than 0";
  }

  let result = [];
  for (let i = 0; i <= number; i++) {
    let numberString = i.toString();

    if (numberString.includes(3)) {
      result.push("Won't you be my neighbor?");
    } else if (numberString.includes(2)) {
      result.push("Boop!");
    } else if (numberString.includes(1)) {
      result.push("Beep!");
    } else {
      result.push(i);
    }
  }
  return result;
}

// User Interface Logic

function getNumber(e) {
  e.preventDefault();
  let number = document.getElementById("numberInput");
}

