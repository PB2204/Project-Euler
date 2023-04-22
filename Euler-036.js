function isPalindrome(num, base) {
  var numString = num.toString(base);
  return numString === numString.split("").reverse().join("");
}
var sum = 0;
for (var i = 1; i < 1000000; i++) {
  if (isPalindrome(i, 10) && isPalindrome(i, 2)) {
    sum += i;
  }
}
console.log(sum);
