/*
Project Euler

https://projecteuler.net/problem=1

Multiples Of 3 & 5

by : Pabitra Banerjee [https://pabitrabanerjee.newsgoogle.org]
*/

function solution(n) {

   var r = n / 3 | 0;
   var s = n / 5 | 0;
   var t = n / 15 | 0;

   return 3 * r * ++r + 5 * s * ++s - 15 * t * ++t >> 1;
}
console.log(solution(999));


// https://replit.com/@RockstarPabitra/Euler-001
