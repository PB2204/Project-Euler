function isPalindrome(num) {
  const stringifiedNum = num.toString();

  return (
    Array.from(stringifiedNum).toString() ===
    Array.from(stringifiedNum)
      .reverse()
      .toString()
  );
}

function findLargestPalindrome() {
  const start = 100;
  const end = 999;

  let largestPalindrome = 0;

  for (let i = start; i <= end; i += 1) {
    for (let j = start; j <= end; j += 1) {
      const product = i * j;
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}

console.log(findLargestPalindrome());
