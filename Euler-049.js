function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

function permutations(str) {
  if (str.length <= 1) return [str];
  let perms = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    let subperms = permutations(remaining);
    for (let j = 0; j < subperms.length; j++) {
      perms.push(char + subperms[j]);
    }
  }
  return perms;
}

function findSequence() {
  for (let n = 1000; n <= 9999; n++) {
    if (!isPrime(n)) continue;
    let perms = permutations(n.toString());
    for (let i = 0; i < perms.length; i++) {
      let p1 = parseInt(perms[i]);
      if (p1 <= 1487 || !isPrime(p1)) continue;
      for (let j = i + 1; j < perms.length; j++) {
        let p2 = parseInt(perms[j]);
        if (p2 <= p1 || !isPrime(p2)) continue;
        let diff = p2 - p1;
        let p3 = p2 + diff;
        if (p3 > 9999 || !isPrime(p3)) continue;
        let p3perms = permutations(p3.toString());
        if (p3perms.includes(perms[i]) && p3perms.includes(perms[j])) {
          return "" + p1 + p2 + p3;
        }
      }
    }
  }
  return "No sequence found";
}

console.log(findSequence());
