function sieve(n) {
  let prime = [2, 3];
  let i = 3;

  while (true) {
    i += 2;
    if (i * i > n) break;
    for (let j of prime) {
      if (j * j > i) {
        prime.push(i);
        break;
      } else if (i % j == 0) {
        break;
      } else if (j == prime[prime.length - 1]) {
        prime.push(i);
        break;
      }
    }
  }
  return prime;
}
function sumdiv(n) {
  let s = 1;
  for (let div = 2; div < n; div++) {
    if (div ** 2 > n) break;
    if (div ** 2 == n) return s + div;
    if (n % div == 0) {
      s += div;
      s += n / div;
    }
  }
  return s;
}

let primes = sieve(28123);
let abundant = [];
let ab_sums = [];
for (let i = 12; i <= 28123 - 11; i++) {
  if (sumdiv(i) > i) abundant.push(i);
}

for (let ab1 = 0; ab1 < abundant.length; ab1++) {
  for (let ab2 = ab1; ab2 < abundant.length; ab2++) {
    let value = abundant[ab1] + abundant[ab2];
    if (value > 28123) break;
    ab_sums.push(value);
  }
}
ab_sums = [...new Set(ab_sums)];
console.log(28123 * 28124 / 2 - ab_sums.reduce((a, b) => a + b, 0));
