function noverk(n, k) {

    if (n < k || k < 0)
        return 0;

    k = Math.min(k, n - k);
    n = n - k;

    for (var i = 1, c = 1; i <= k; i++)
        c = c * (n + i) / i;

    return c;
}
function solution(n) {

    for (var i = 1, c = 1; i <= n; i++)
        c = c * (n + i) / i;
    return c;
}
console.log(solution(20));
