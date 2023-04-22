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

function getCircularPermutations(num) {
  const digits = num.toString().split('');
  const result = [];
  for (let i = 0; i < digits.length; i++) {
    const permutation = parseInt(digits.slice(i).concat(digits.slice(0, i)).join(''));
    result.push(permutation);
  }
  return result;
}

function countCircularPrimesBelow(limit) {
  let count = 0;
  for (let i = 2; i < limit; i++) {
    const circularPermutations = getCircularPermutations(i);
    const isCircularPrime = circularPermutations.every(num => isPrime(num));
    if (isCircularPrime) {
      count++;
    }
  }
  return count;
}

console.log(countCircularPrimesBelow(1000000));
