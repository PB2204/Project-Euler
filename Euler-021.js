function divisors(x) {
  let divisors = [];
  let d = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(x)); i++) {
    if (x % i == 0) {
      divisors[d] = i;
      if (i != x / i) {
        d += 1;
        divisors[d] = x / i;
      }
      d += 1;
      
    }
    
  }
  return divisors;
}

let answer = 0;
let n = 220;
while (n <= 10000) {
  let divSum = divisors(n).reduce((a, b) => a + b) - n;
  if (n == divisors(divSum).reduce((a, b) => a + b) - divSum && n != divSum) {
    answer += n;
    console.log(`(${n}, ${divSum})`);
  }
  n += 1;
  
}
console.log(answer);
