function solution(exp) {
    var order = 0;
    var digits = Math.floor(1 + exp * Math.LN2 / Math.LN10);
    var number = new Uint8Array(digits);

    number[0] = 1;

    for (var i = 0; i < exp; i++) {

        var carry = 0;

        for (var j = 0; j <= order; j++) {

            var product = 2 * number[j] + carry;
            number[j] = product % 10;
            carry = product / 10 | 0;

            if (j === order && carry > 0) {
                order++;
            }
        }
    }
    return number.reduce((p, x) => x + p, 0);
}
console.log(solution(1000));
