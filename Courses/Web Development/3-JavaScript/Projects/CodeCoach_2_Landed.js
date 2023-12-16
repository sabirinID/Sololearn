//  Landed!
//  Let's help Bob to create status messages for flights.

/*  Bob was hired as an airport information officer and needs to generate status messages for each flight․ Let’s help him!
    Complete the given program by fixing the constructor, making a flight object, and assign it to the given variable to correctly execute the corresponding message.
    Flight ID and the flight status(landed, on time, delayed, etc.) are taken as input.

    Hint:
    Use the new keyword to create a new object using constructor.
*/

function main() {
    //take flight number and its status
    var flightNumber = readLine();
    var flightStatus = readLine();
    
    //assign a flight object to flight1 variable
    var flight1 = new Flight(flightNumber, flightStatus);
    //output
    console.log('The flight ' + flight1.flightNumber + ' is ' + flight1.flightStatus);
}

function Flight(flightNumber, flightStatus) {
    //fix the constructor
    this.flightNumber = flightNumber;
    this.flightStatus = flightStatus;
};
