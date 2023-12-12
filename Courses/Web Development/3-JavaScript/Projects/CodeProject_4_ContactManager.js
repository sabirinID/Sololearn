//  Contact Manager
/*  You are working on a Contact Manager app.
    You have created the contact object constructor, which has
    two arguments, name & number.
    You need to add a print() method to the object, which will
    output the contact data to the console in
    the following format: name: number
    The given code declares two objects & calls
    their print() methods. Complete the code by
    defining the print() method for the objects.

    Hint: Notice the space after the colon, when
    outputting the contact data.
*/

function Contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function() {
        console.log(this.name + ": " + this.number);
    }
}

// Create new contacts 
var a = new Contact("David", 12345);
var b = new Contact("Amy", 987654321);
// Call the print method
a.print();
b.print();