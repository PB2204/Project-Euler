function factorial(n, memo = {}) {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = n * factorial(n-1, memo);
  return memo[n];
}

function countValues(limit) {
  let count = 0;
  for (let n = 1; n <= 100; n++) {
    for (let r = 0; r <= n; r++) {
      const nCr = factorial(n) / (factorial(r) * factorial(n-r));
      if (nCr > limit) {
        count++;
      }
    }
  }
  return count;
}

console.log(countValues(1000000));
