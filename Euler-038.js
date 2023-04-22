function isPandigital(num) {
  const digits = num.toString().split('');
  return digits.length === 9 && !digits.includes('0') && new Set(digits).size === 9;
}
function largestPandigitalConcatenatedProduct() {
  let largestPandigital = 0;
  for (let i = 1; i <= 9876; i++) {
    let concatenatedProduct = '';
    for (let n = 1; ; n++) {
      concatenatedProduct += (i * n).toString();
      if (concatenatedProduct.length > 9) break;
      if (concatenatedProduct.length === 9 && isPandigital(concatenatedProduct)) {
        largestPandigital = Math.max(largestPandigital, parseInt(concatenatedProduct));
      }
    }
  }
  return largestPandigital;
}

console.log(largestPandigitalConcatenatedProduct());
