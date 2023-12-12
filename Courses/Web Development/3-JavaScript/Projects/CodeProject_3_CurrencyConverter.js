//  Currency Converter
/*  You are making a currency converter app.
    Create a function called convert, which takes two
    parameters: the amount to convert, and the rate,
    and returns the resulting amount.
    The code to take the parameters as input and call
    the function is already present in the Playground.
    Create the function to make the code work.

    Hint:
    Converting 100 at the rate of 1.1 is
    equal to 100 * 1.1 = 110.
*/

function convert(amount, rate) {
    return amount * rate;
}

// Define the variables
var amount = parseInt(readLine(), 10);
var rate = parseFloat(readLine());
// Call the function
var result = convert(amount, rate);
// Log the result
console.log(result);