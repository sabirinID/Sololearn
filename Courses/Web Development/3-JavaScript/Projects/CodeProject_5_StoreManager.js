//  Store Manager
/*  You are working on a Store Manager program, which stores the
    prices in an array. You need to add functionality to increase
    the prices by the given amount.
    The increase variable is taken from user input. You need to
    increase all the prices in the given array by that amount &
    output to the console the resulting array.

    Hint: Use a loop to iterate through the array & increase all
    items.
*/

function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];

    var increasedPrices = prices.map(function(price) {
        return price + increase;
    });

    console.log(increasedPrices);
}