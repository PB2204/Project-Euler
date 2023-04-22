let n = 100;
let fact = BigInt(1);
for(let i = 2; i <= n; i++) {
  fact *= BigInt(i);
}
let result = 0;
for(let digit of fact.toString()) {
  result += parseInt(digit);
}
console.log(result);
