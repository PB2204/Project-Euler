// the total and available coins
let total = 200;
let coins = [1, 2, 5, 10, 20, 50, 100, 200];

// implement the coin change algorithm
function count(n, m) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  } else if (m <= 0 && n >= 1) {
    return 0;
  } else {
    return count(n, m - 1) + count(n - coins[m - 1], m);
  }
}

let answer = count(total, coins.length);

console.log(answer);
