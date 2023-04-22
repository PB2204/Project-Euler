function build_number(a) {
  let output = 0;
  let zeros = 0;
  for (let i = 0; i < a.length; i++) {
    const digit = a[i];
    if (digit === 0) zeros += 1;
    else if (digit > -1) {
      output *= 10;
      output += digit;
    }
  }
  return output * 10 ** zeros;
}

function increase_array(a) {
  let d = 1;
  for (d = 1; d <= a.length; d++) {
    if (a[a.length - d] < 9) {
      if (a[a.length - d] === -1) a[a.length - d] = 0;
      else a[a.length - d] += 1;
      break;
    }
  }
  for (let i = 1; i < d; i++) {
    a[a.length - (d - i)] = a[a.length - d];
  }
  return 0;
}

function compare(n1, n2) {
  if (n1.toString().split('').sort().join() === n2.toString().split('').sort().join()) {
    return true;
  }
  return false;
}

function sumpow(a) {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    const digit = a[i];
    if (digit === -1) continue;
    s += digit ** 5;
  }
  return s;
}

let s = 0;
const numbers = [-1, -1, -1, -1, -1, 2];
while (!numbers.every((digit, i) => digit === [2, 3, 4, 4, 5, 9][i])) {
  increase_array(numbers);
  if (compare(build_number(numbers), sumpow(numbers))) {
    s += sumpow(numbers);
  }
}
console.log(s);
