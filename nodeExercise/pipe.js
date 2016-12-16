const fs = require('fs');

const rstream = fs.createReadStream('greet.txt');
const wstream = fs.createWriteStream('greet_1.txt');

 //option 1
//  rstream.pipe(wstream);

 // option 2

 rstream.on('data', (chunk) => wstream.write(chunk));
 rstream.on('end', (chunk) => wstream.end('.!'));
// // wstream.on('data', data);