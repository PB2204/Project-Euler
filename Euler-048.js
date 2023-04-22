function modpow(b, e, m) {
  let r = 1n;
  while (e > 0n) {
    if (e & 1n) {
      r = (r * b) % m;
    }
    b = (b * b) % m;
    e = e >> 1n;
  }
  return r;
}
function powersum(n, m) {
  let s = 0n;
  for (let i = 1n; i <= n; i++) {
    s += modpow(i, i, m);
    s %= m;
  }
  return s;
}
console.log(powersum(1000n, 10000000000n));
