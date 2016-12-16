const circle  = require('./circle.js');
console.log('The area of circle of radius 4 is ' + circle.area(4)+'.');

//console.log(require.main === module);

// Let's try to print the value of __filename
console.log( __filename );

// Let's try to print the value of __dirname
console.log( __dirname );
 	
console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
// 
console.timeEnd('Getting data');

console.info("Program Ended")