function compute() {
  let numer = 1;
  let denom = 1;
  for (let d = 10; d < 100; d++) {
    for (let n = 10; n < d; n++) {
      let n0 = n % 10;
      let n1 = Math.floor(n / 10);
      let d0 = d % 10;
      let d1 = Math.floor(d / 10);
      if ((n1 === d0 && n0 * d === n * d1) || (n0 === d1 && n1 * d === n * d0)) {
        numer *= n;
        denom *= d;
      }
    }
  }
  
  return String(Math.floor(denom / gcd(numer, denom)));
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(compute());
