function arePermutations(a, b) {
  // Convert both numbers to strings and sort their characters
  const sortedA = a.toString().split('').sort().join('');
  const sortedB = b.toString().split('').sort().join('');
  
  // Compare the sorted strings
  return sortedA === sortedB;
}

function findSmallest() {
  let x = 1;
  
  while (true) {
    // Check if all multiples of x have the same digits
    if (
      arePermutations(x, 2 * x) &&
      arePermutations(x, 3 * x) &&
      arePermutations(x, 4 * x) &&
      arePermutations(x, 5 * x) &&
      arePermutations(x, 6 * x)
    ) {
      return x;
    }
    
    x++;
  }
  
}

console.log(findSmallest());
