function triangle(n) {
  return n * (n + 1) / 2;
}

function pentagonal(n) {
  return n * (3 * n - 1) / 2;
}

function hexagonal(n) {
  return n * (2 * n - 1);
}

let t = 286;
let p = 166;
let h = 144;
let nextNumber = 0;

while (!nextNumber) {
  let T = triangle(t);
  let P = pentagonal(p);
  let H = hexagonal(h);
  
  if (T === P && P === H) {
    nextNumber = T;
  } else if (T <= P && T <= H) {
    t++;
  } else if (P <= T && P <= H) {
    p++;
  } else {
    h++;
  }
  
}

console.log(nextNumber);
