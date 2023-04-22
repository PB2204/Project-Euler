function tau(num) {

    var n = num;
    var i = 2;
    var p = 1;

    if (num === 1) return 1;

    while (i * i <= n) {
        var c = 1;
        while (n % i === 0) {
            n/= i;
            c++;
        }
        i++;
        p*= c;
    }

    if (n === num || n > 1)
        p*= 1 + 1;

    return p;
}
function solution(x) {

    var n = 1;
    var d = 1;

    while (tau(d) <= x) {
        n++;
        d+= n;
    }
    return d;
}
console.log(solution(500));
