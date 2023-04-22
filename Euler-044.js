function isPentagonal(num) {
  return (1 + Math.sqrt(1 + 24*num)) % 6 === 0;
}
let flag = true;
let i = 1;
const start = Date.now();
while (flag) {
  for (let j = 1; j < i; j++) {
    const a = i * (3*i - 1) / 2;
    const b = j * (3*j - 1) / 2;
    if (isPentagonal(a + b) && isPentagonal(a - b)) {
      console.log(a - b);
      flag = false;
      break;
    }
  }
  i++;
}
