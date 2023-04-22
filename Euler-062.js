function cubicPermutations(n) {
  function getDigits(num) {
    const digits = [];
    while (num > 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    return digits;
  }

  function getCube(num) {
    return num ** 3;
  }

  const digitsToCubeCounts = {};
  let curNum = 1;
  let digits;

  while (!digitsToCubeCounts[digits] || digitsToCubeCounts[digits].count < n) {
    const cube = getCube(curNum);
    digits = getDigits(cube).sort().join();
    if (!digitsToCubeCounts[digits]) {
      digitsToCubeCounts[digits] = {
        count: 1,
        smallestCube: cube
      };
    } else {
      digitsToCubeCounts[digits].count += 1;
    }

    curNum++;
  }
  return digitsToCubeCounts[digits].smallestCube;
}
console.log(cubicPermutations(5));
