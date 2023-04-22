const start = Date.now();

// variable to store the value of sum
let solution = 0;

// function to generate permutations
function* permutations(string) {
if (string.length <= 1) yield string;
else
for (let i = 0; i < string.length; i++) {
const chr = string[i];
const remainder = string.slice(0, i) + string.slice(i + 1);
for (const permutation of permutations(remainder))
yield chr + permutation;
}
}

// generator for 0-9 pandigital permutations
const pandigitals = permutations("0123456789");

// loop through permutations and check for sub-string divisibility property
for (const pandigital of pandigitals) {
if (
parseInt(pandigital.slice(7, 10)) % 17 === 0 &&
parseInt(pandigital.slice(6, 9)) % 13 === 0 &&
parseInt(pandigital.slice(5, 8)) % 11 === 0 &&
parseInt(pandigital.slice(4, 7)) % 7 === 0 &&
parseInt(pandigital.slice(3, 6)) % 5 === 0 &&
parseInt(pandigital.slice(2, 5)) % 3 === 0 &&
parseInt(pandigital.slice(1, 4)) % 2 === 0
) {
solution += parseInt(pandigital);
}
}
console.log(solution);
