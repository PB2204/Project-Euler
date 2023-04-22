function nextPerm(a) {
let i = a.length;
while (i > 1 && a[i - 2] >= a[i - 1]) i--;
if (i <= 1) return null;
let j = a.length;
while (a[j - 1] <= a[i - 2]) j--;
let temp = a[i - 2];
a[i - 2] = a[j - 1];
a[j - 1] = temp;
let suffix = a.slice(i - 1);
suffix.reverse();
a.splice(i - 1, a.length - i + 1, ...suffix);
return a;
}

let numbers = [...Array(10).keys()];
for (let i = 1; i < 1000000; i++) {
numbers = nextPerm(numbers);
}
let answer = numbers.join("");
console.log(answer);

let n = 10;
let remain = 999999;
let numbers2 = [...Array(n).keys()];
let answer2 = Array(n);
for (let i = 1; i <= n; i++) {
let j = Math.floor(remain / factorial(n - i));
answer2[i - 1] = numbers2[j];
remain = remain % factorial(n - i);
numbers2.splice(j, 1);
}
answer2 = answer2.join("");
console.log(answer2);

function factorial(num) {
if (num === 0 || num === 1) return 1;
else return num * factorial(num - 1);
}
