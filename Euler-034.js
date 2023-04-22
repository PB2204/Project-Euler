function compute() {
  const factorials = [1];
  for (let i = 1; i <= 9; i++) {
    factorials.push(factorials[i - 1] * i);
  }
  let sum = 0;
  for (let n = 10; n < 1000000; n++) {
    let digitFactorialSum = 0;
    let x = n;
    while (x > 0) {
      digitFactorialSum += factorials[x % 10];
      x = Math.floor(x / 10);
    }
    if (digitFactorialSum === n) {
      sum += n;
    }
  }
  return sum;
}
console.log(compute());
