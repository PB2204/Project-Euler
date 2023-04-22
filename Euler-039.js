let maxSolutions = 0;
let maxP = 0;
for (let p = 1; p <= 1000; p++) {
  let solutions = 0; 
  for (let a = 1; a < p/2; a++) {
    for (let b = a; b < p/2; b++) {
      const c = p - a - b;
      if (a*a + b*b === c*c) {
        solutions++;
      }
    }
  }
  
  if (solutions > maxSolutions) {
    maxSolutions = solutions;
    maxP = p;
  }
}

console.log(maxP);
