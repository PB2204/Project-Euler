let start_time = Date.now();

function sieve(n, prime) {
let i = prime[prime.length - 1];
while (prime[prime.length - 1] < n) {
    i += 2;
    if (i > n) break;
    let isPrime = true;
    for (let j of prime) {
        if (j * j > i) {
            prime.push(i);
            break;
        } else if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) prime.push(i);
}
return 0;
}

function inprimes(n, a, b, primes) {
let test = n * n + a * n + b;
if (test > primes[primes.length - 1]) sieve(test, primes);
return primes.includes(test);
}

let primes = [2, 3];
sieve(1000, primes);
let maxconsec = 0;
let maxprod = 0;

for (let a = -999; a <= 999; a++) {
for (let b of primes.filter(p => p < 1000)) {
let n = 1;
let consec = 1;
while (inprimes(n, a, b, primes)) {
consec++;
n++;
}
if (consec > maxconsec) {
maxconsec = consec;
maxprod = a * b;
}
}
}
console.log(maxprod);

console.log(`--- ${Date.now() - start_time} milliseconds ---`);
