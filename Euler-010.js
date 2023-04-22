function solution(n) {

  var sum = 0;
  var bound = (Math.sqrt(n + 1) - 1) >> 1;
  n = n >> 1;
  var data = new Uint8Array(n + 1);

  for (var i = 1; i <= bound; i++) {

    for (var j = i * 2 * (i + 1); j <= n; j+= 2 * i + 1) {

      if (data[j] === 0) {
        data[j] = 1;
        sum+= j * 2 + 1;
      }
    }
  }
  return 2 + n * (n + 1) + n - sum;
}
console.log(solution(2e6 - 1));
