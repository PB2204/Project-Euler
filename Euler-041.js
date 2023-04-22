function isPandigital(n) {
  let digits = 0;
  let count = 0;
  while (n > 0) {
    let tmp = digits;
    digits = digits | 1 << ((n % 10) - 1);
    if (tmp == digits) {
      return false;
    }
    count++;
    n = Math.floor(n / 10);
  }
  return digits == (1 << count) - 1;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

function largestPandigitalPrime() {
  let largest = 0;
  for (let n = 7654321; n >= 1234567; n -= 2) {
    if (isPandigital(n) && isPrime(n)) {
      largest = n;
      break;
    }
  }
  return largest;
}

console.log(largestPandigitalPrime());
