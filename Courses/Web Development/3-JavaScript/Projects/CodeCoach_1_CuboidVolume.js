//  Cuboid Volume
//  Complete the program to calculate and output the volume of the given cuboid.

/*  The given class represents a cuboid (e.g. a rectangular prism) that contains the properties of length, width, and height.
    Complete the program to calculate and output the volume of the given cuboid to the console.
    
    Hint:
    To calculate the volume of cuboid use length*width*height formula.
*/

var cuboid = {
    length: 25,
    width: 50,
    height: 200
};

var volume = (
cuboid.length * cuboid.width * cuboid.height
);

console.log(volume);

// function calculateVolume(cuboid) {
//     return cuboid.length * cuboid.width * cuboid.height;
// }

// console.log(calculateVolume(cuboid));