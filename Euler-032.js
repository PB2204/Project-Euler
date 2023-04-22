class EulerSolution {
  run() {}
}

class P032 extends EulerSolution {
  run() {
    let sum = 0;
    for (let i = 1; i < 10000; i++) {
      if (this.hasPandigitalProduct(i)) {
        sum += i;
      }
    }
    return sum.toString();
  }

  hasPandigitalProduct(n) {
    // Find and examine all factors of n
    for (let i = 1; i <= n; i++) {
      if (n % i === 0 && this.isPandigital("" + n + i + n / i)) {
        return true;
      }
    }
    return false;
  }

  isPandigital(s) {
    if (s.length !== 9) {
      return false;
    }
    const temp = s.split("").sort();
    return temp.join("") === "123456789";
  }
}

console.log(new P032().run());
