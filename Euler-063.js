function powerfulDigitCounts(n) {
  function countDigits(num) {
    let counter = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      counter++;
    }
    return counter;
  }

  let numbersCount = 0;

  let curNum = 1;
  while (curNum < 10) {
    let power = n;
    if (power === countDigits(curNum ** power)) {
      numbersCount++;
    }
    curNum++;
  }

  return numbersCount;
}

console.log("4"+powerfulDigitCounts(1));
