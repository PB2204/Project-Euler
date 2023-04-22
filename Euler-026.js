function recur(x, output = "") {
  if (x == 0) return NaN;
  if (x == 1) return 0;
  x = Math.floor(Math.abs(x));
  let dec = [];
  let rem = [];
  let i = 1;
  let r = 10;
  rem[0] = r;
  while (true) {
    dec[i] = Math.floor(r / x);
    r = 10 * (r % x);
    if (r == 0 || rem.indexOf(r) !== -1) break;
    rem[i] = r;
    i++;
  }
  let rep = r != 0 ? rem.length - rem.indexOf(r) + 1 : 0;
  if (output == "len") {
    return rep;
  } else {
    if (rep != 0) {
      let l = rep == dec.length ? "(" : dec.slice(0, dec.length - rep).concat("(");
      dec = l.concat(dec.slice(dec.length - rep, dec.length), ")");
    }
    return "0." + dec.join("");
  }
}
let A051626 = Array.from({length: 1000}, (_, i) => recur(i + 1, "len"));
let answer = A051626.indexOf(Math.max(...A051626)) + 1;
console.log(answer);
