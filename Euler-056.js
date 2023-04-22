let maxSum = 0;

for (let a = 0; a < 100; a++) {
  for (let b = 0; b < 100; b++) {
    let num = BigInt(Math.pow(a, b)).toString();
    let sum = -2;
    for (let i = 2; i < num.length; i++) {
      sum += parseInt(num.charAt(i));
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
}
console.log(maxSum);
