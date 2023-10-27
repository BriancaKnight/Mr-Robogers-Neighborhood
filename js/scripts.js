function beepBoop(number) {
  if (number < 0) {
  return "Please enter a number greater than 0"
  }
  let result = []
  for (let i= 0; i <= number; i ++ ) {
    result.push(i);
  }
  return result;
  }