const max = 1000000;
const arr = new Array(max).fill(0);

function set_arr() {
  for (let i = 2; i < max; i++) {
    if (is_prime(i)) {
      arr[i] = 1;
    }
  }
}

function is_prime(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  if (n % 2 === 0) {
    return 0;
  }
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return 0;
    }
  }
  return 1;
}

function count_digits(n) {
  let counter = 0;
  while (n) {
    counter++;
    n = Math.floor(n / 10);
  }
  return counter;
}

function is_conPrime(a, b) {
  const num1 = a + b * 10 ** count_digits(a);
  const num2 = b + a * 10 ** count_digits(b);
  if (is_prime(num1) && is_prime(num2)) {
    return 1;
  }
  return 0;
}

function main() {
  let sum = 0;
  let min = 2147483647;
  set_arr();
  for (let a = 3; a < 10000; a += 2) {
    if (arr[a]) {
      for (let b = 3; b < 10000; b += 2) {
        if (arr[b] && is_conPrime(a, b)) {
          for (let c = 3; c < 10000; c += 2) {
            if (arr[c] && is_conPrime(a, c) && is_conPrime(b, c)) {
              for (let d = 3; d < 10000; d += 2) {
                if (
                  arr[d] &&
                  is_conPrime(a, d) &&
                  is_conPrime(b, d) &&
                  is_conPrime(c, d)
                ) {
                  for (let e = 3; e < 10000; e += 2) {
                    if (
                      arr[e] &&
                      is_conPrime(a, e) &&
                      is_conPrime(b, e) &&
                      is_conPrime(c, e) &&
                      is_conPrime(d, e)
                    ) {
                      console.log(
                        `${
                          a + b + c + d + e
                        }`
                      );
                      process.exit(1);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

main();
