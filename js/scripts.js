function beepBoop(number) {
  if (number < 0) {
    return "Please enter a number greater than 0"
  }

  let result = [];
  for (let i = 0; i <= number; i++) {
    if (i === 1) {
      result.push("Beep!");
    } else if (i === 2) {
      result.push("Boop!");
    } else if (i === 3) {
      result.push("Won't you be my neighbor?");
    } else {
      result.push(i);
    }
  }
  return result;
}

