function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function isGoldbach(n) {
  for (let i = 1; 2 * i * i < n; i++) {
    if (isPrime(n - 2 * i * i)) {
      return true;
    }
  }
  return false;
}
function findSmallestOddComposite() {
  let n = 9;
  while (true) {
    if (!isPrime(n) && !isGoldbach(n)) {
      return n;
    }
    n += 2;
  }
}

console.log(findSmallestOddComposite());
