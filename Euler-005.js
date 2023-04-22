    function smallestMult(n) {
      let inc = 2;
      let step = 2;
      let smallestNum = 2;
      while (smallestNum <= Number.MAX_SAFE_INTEGER) {
        for (let i = 2; i <= n; i++) {
          const divisible = smallestNum % i === 0;
          if (!divisible) {
            break;
          }
          if (i === inc) {
            step = smallestNum;
            inc++;
          }
          if (i === n) {
            return smallestNum;
          }
        }
        smallestNum += step;
      }
    }
console.log(smallestMult(20));
