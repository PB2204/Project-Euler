var SR5 = Math.sqrt(5);
var PHI = (1 + SR5) / 2;
var PSI = (1 - SR5) / 2;

function F(n) {
  return (Math.pow(PHI, n) - Math.pow(PSI, n)) / SR5;
}

function index(F) {
  return Math.floor(Math.log(F * SR5 + 0.5) / Math.log(PHI));
}

function sum(n) {
  return F(n + 2) - 1;
}

function solution(n) {
  return Math.round(sum(index(n)) / 2);
}
console.log(solution(4e6));

// https://replit.com/@RockstarPabitra/Euler-002
