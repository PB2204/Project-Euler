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

function getPrimes(limit) {
  const primes = [];
  for (let num = 2; num < limit; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}

function getLongestSumOfConsecutivePrimes(limit) {
  const primes = getPrimes(limit);
  let maxLength = 0;
  let maxSum = 0;
  for (let i = 0; i < primes.length; i++) {
    let sum = primes[i];
    let length = 1;
    for (let j = i + 1; j < primes.length; j++) {
      sum += primes[j];
      length++;
      if (sum >= limit) {
        break;
      }
      if (isPrime(sum) && length > maxLength) {
        maxLength = length;
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

console.log(getLongestSumOfConsecutivePrimes(1000000));
