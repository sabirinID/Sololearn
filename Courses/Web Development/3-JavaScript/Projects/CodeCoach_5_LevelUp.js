//  Level Up!
//  Write a program to create the corresponding array of points and output the sum of all gained points.

/*  The player receives points after passing each level of a game.
    The program given takes the number of passed levels as input, followed by the points gained for each level, and creates the corresponding array of points.
    Complete the program to calculate and output to the console the sum of all gained points.

    Explanation:
    The first input represents the number of passed levels, -- in this case, 3 (the size of an array to be created). The next 3 inputs are the points awarded to the player for passing each level. The player gained 1+4+8 points for 3 passed levels, which is then output.

    Hint:
    Notice that the first inputted number can be used as the length of an array.
*/

function main() {
    //take the number of passed levels
    var levels = parseInt(readLine(),10);
    var points = new Array();
    
    var count = 0;
    while(count < levels) {
        var elem = parseInt(readLine(),10);
        points[count] = elem;
        count++;
    }
    
    var sum = 0;
    //calculate the sum of points 
    for (var i = 0; i < points.length; i++) {
        sum += points[i];
    }
    
    // var sum = points.reduce(function(a, b) {
    //     return a + b;
    // }, 0);

    //output
    console.log(sum);
}
