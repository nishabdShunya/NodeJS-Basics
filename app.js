/* SUMMARY SO FAR
The req object contains all the data of the incoming request when we visited the localhost:3000, which we in turn can do because we listen to requests on that port.
NOTE: Headers are metadata, meta information added to requests and responses. */

// Importing the core modules "http" and "fs"
const http = require('http');
const fs = require('fs');

// Creating server and storing it in a variable
const server = http.createServer((req, res) => {
    // Filling the response object with some data
    res.setHeader('Content-Type', 'text/html'); // NOTE: Content-Type is a default header that browser understands
    res.write(` <html>
                    <head>
                        <title>My First Page</title>
                    </head>
                    <body>
                        <h1>Hello from My Node JS Server</h1>
                    </body>
                </html>`);
    res.end();  // response ends here
});

// Listening to the incoming requests
server.listen(3000);
