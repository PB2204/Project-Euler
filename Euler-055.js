function isPalindrome(num) {
  const str = String(num);
  return str === str.split('').reverse().join('');
}

function isLychrel(num, maxIterations = 50) {
  let result = num;
  for (let i = 0; i < maxIterations; i++) {
    result += Number(result.toString().split('').reverse().join(''));
    if (isPalindrome(result)) {
      return false;
    }
  }
  return true;
}

let count = 0;
for (let num = 1; num < 10000; num++) {
  if (isLychrel(num)) {
    count++;
  }
  
}

console.log(count);
