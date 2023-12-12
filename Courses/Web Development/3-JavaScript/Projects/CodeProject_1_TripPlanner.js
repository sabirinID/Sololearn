//  Trip Planner
/*  You need to plan a road trip. You are traveling at an
    average speed of 40 miles an hour.
    Given a distance in miles as input (the code to take
    input is already present), output to the console the
    time it will take you to cover it in minutes.

    Explanation:
    It will take 150/40 = 3.75 hours to coverthe distance,
    which is equivalent to 3.75*60 = 225 minutes.
*/

var distance = parseInt(readLine(), 10);

// Define average speed
var avgSpeed = 40
// Calculate time in hours
var timeInHours = distance / avgSpeed;
// Convert time to minutes
var timeInMinutes = timeInHours * 60;
// Log the timeInMinutes
console.log(timeInMinutes);