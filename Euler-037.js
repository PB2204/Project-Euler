function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function isTruncatablePrime(num) {
  let digits = num.toString().split('');
  for (let i = 1; i < digits.length; i++) {
    let leftTruncation = parseInt(digits.slice(i).join(''));
    let rightTruncation = parseInt(digits.slice(0, digits.length - i).join(''));
    if (!isPrime(leftTruncation) || !isPrime(rightTruncation)) {
      return false;
    }
  }
  return true;
}

let sum = 0;
let count = 0;
let num = 11;
while (count < 11) {
  if (isPrime(num) && isTruncatablePrime(num)) {
    sum += num;
    count++;
  }
  num++;
}
console.log(sum);
