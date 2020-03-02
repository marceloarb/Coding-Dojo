
console.log('suck');

function coinChange(coin) {
    var dollar = 0;
    var quarters= 0;
    var dimes= 0;
    var nickels= 0;
    var penny= 0;
    while (coin > 0) {
        if (coin > 1) {
            coin -= 1;
            dollar++;
        }
        if (coin < 1 && coin >= .25) {
            coin -= .25;
            quarters++;
        }
        if (coin < .25 && coin > .10) {
            coin -= .10;
            dimes++;
        }
        if (coin < .10 && coin > .05) {
            coin -= .05;
            nickels++;
        }
        if (coin < .05 && coin > .01) {
            coin -= .01;
            penny++;
        }
    }
    console.log(dollar, quarters, dimes, nickels, penny)
    return [dollar, quarters, dimes, nickels, penny];
}
console.log(coinChange(2.54));