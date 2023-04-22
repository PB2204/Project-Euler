function countDistinctPrimeFactors(n) {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      while (n % i === 0) {
        n /= i;
      }
    }
  }
  if (n > 1) {
    count++;
  }
  return count;
}

let numConsecutive = 0;
let n = 1;

while (numConsecutive < 4) {
  if (
    countDistinctPrimeFactors(n) === 4 &&
    countDistinctPrimeFactors(n + 1) === 4 &&
    countDistinctPrimeFactors(n + 2) === 4 &&
    countDistinctPrimeFactors(n + 3) === 4
  ) {
    numConsecutive = 4;
    console.log(n);
  } else {
    n++;
  }
}
