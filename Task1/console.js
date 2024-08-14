// The console module for node provides a similar debugging console to the JavaScript console mechanism native to web browsers
// The module supports two main components:
//         A console class containing a bunch of methods like console.log(), console.warn(), and console.error()
//         A global console instance configured to write to process.stdout and process.stderr
// There are many additional methods included in the console module!

// Some examples;

console.log('Hello World!');
// This statement will print "Hello World!" to the console

console.error(new Error('Oops! Try again.'));
// Prints an error message

const name = 'Will Graham';
console.warn(`Weewoo ${name} Weewoo!`);
// Prints a warning for Will Graham to stderr