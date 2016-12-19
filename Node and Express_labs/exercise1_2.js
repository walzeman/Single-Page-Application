

const fs = require('fs');

var http = require("http");

const rstream = fs.createReadStream('greet.txt');
//console.log(url.pathName);

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain

   response.writeHead(200, {'Content-Type': 'text/plain'});

 rstream.on('data', (chunk) => response.write(chunk));
 rstream.on('end', (chunk) => response.end());
   
   // Send the response body as "Hello World"
  // response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');