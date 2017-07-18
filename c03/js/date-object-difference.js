// Creates a variable to hold a new Date object (defaults to now)
var today = new Date();
// Gets the year this year
var year = today.getFullYear();
// Sets the date that the company was established
var est = new Date('Apr 16, 1996 15:45:55');
// Gets difference between then & now in milliseconds
var difference = today.getTime() - est.getTime();
// Divides by number of milliseconds to get years
difference = (difference / 31556900000);

// Creates a variable called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById('message');
// Writes the message into that element.
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';
