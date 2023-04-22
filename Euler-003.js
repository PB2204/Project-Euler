function solution(n) {

  for (var i = 2; i * i <= n; i++) {
    while(n % i === 0 /* && i * i <= n */) {
      n/= i;
    }
  }
  return n;
}
console.log(solution(600851475143));

// https://replit.com/@RockstarPabitra/Euler-003
