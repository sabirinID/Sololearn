//  Date Methods
//  Let's create a program that prints the current time to the browser once every second.

/*  The innerHTML property sets or returns the HTML content of an element.
    In our case, we are changing the HTML content of our document's body. This overwrites the content every second, instead of printing it repeatedly to the screen.
*/

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
