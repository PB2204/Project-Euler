console.time('timer');

// Initialisation
const target = 100;
const terms = [];
let i = 0;

// Loop through values of a and b and store powers in vector
for (let a = 2; a <= target; a++) {
  for (let b = 2; b <= target; b++) {
    terms[i] = Math.pow(a, b);
    i++;
  }
}

// Determine the number of distinct powers
const answer = [...new Set(terms)].length;
console.log(answer);
console.timeEnd('timer');


console.time('timer');
const answer2 = [...new Set([...Array(99)].map((_, i) => {
  return [...Array(99)].map((_, j) => {
    return Math.pow(i + 2, j + 2);
  });
}).flat())].length;

console.log(answer2);
console.timeEnd('timer');
