// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    let arrayResult = {};

    if (currency / 50 >= 1) {
        arrayResult.H = Math.floor(currency / 50);
        currency = currency % 50;
    }

    if (currency / 25 >= 1) {
        arrayResult.Q = Math.floor(currency / 25);
        currency = currency % 25;
    }

    if (currency / 10 >= 1) {
        arrayResult.D = Math.floor(currency / 10);
        currency = currency % 10;
    }

    if (currency / 5 >= 1) {
        arrayResult.N = Math.floor(currency / 5);
        currency = currency % 5;
    }

    if (currency / 1 >= 1) {
        arrayResult.P = Math.floor(currency / 1);
    }

    return arrayResult;
}
