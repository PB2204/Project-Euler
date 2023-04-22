function isPrime(n) {
  
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let answer = 1;
let n = 1; // Start counter
while (n < 10001) { // Find 10001 prime numbers
  answer += 2; // Next number
  if (isPrime(answer)) { 
    n++; // Increment counter
  }
}

console.log(answer);
