function irrationalFraction(digits) {
  let num = '';
  let i = 1;
  while (num.length < digits) {
    num += i.toString();
    i++;
  }  
  return num;
}
const fraction = irrationalFraction(1000000);
const d1 = parseInt(fraction.charAt(0));
const d10 = parseInt(fraction.charAt(9));
const d100 = parseInt(fraction.charAt(99));
const d1000 = parseInt(fraction.charAt(999));
const d10000 = parseInt(fraction.charAt(9999));
const d100000 = parseInt(fraction.charAt(99999));
const d1000000 = parseInt(fraction.charAt(999999));
const result = d1 * d10 * d100 * d1000 * d10000 * d100000 * d1000000;

console.log(result);
