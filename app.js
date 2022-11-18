// Importing the core modules "http" and "fs"
const http = require('http');
const fs = require('fs');

// Creating server and storing it in a variable
const server = http.createServer((req, res) => {
    console.log('Learning Node and Express');    
});

/* NOTE:
~> http.createServer -> creates a new instance of Server class (defined in declaration TypeScript file that comes along with the http module) and returns it. Here we have stored the server it returns into the constant variable server.

~> http.createServer takes as an argument a callback function called requestListener, which is automatically added to a 'request' event, i.e. this function will run for every request that reaches our server.

~> The requestListener callback takes two objects as parameters, these are-
1. Request Object - represents the incoming request and allows us to read data from that request.
2. Response Object - it gives us an object response which we can use to return a response to whoever sent that request.
*/

// Now, that we have created the server we can do something with it. One thing that node allows us to do is to listen to the incoming requests using the .listen() method. See Below-
server.listen(3000);
// This will start the server to listen for connections.
/* NOTE:
.listen() method takes in 4 optional parameters - port, hostname, backlog, listeningListener
.listen() method starts a process that keeps on listening for incoming requests. It will stop to do so only when we forcefully stop it using the process.exit command.
*/