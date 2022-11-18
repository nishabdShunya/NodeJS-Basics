/* SUMMARY SO FAR
The req object contains all the data of the incoming request when we visited the localhost:3000, which we in turn can do because we listen to requests on that port.
NOTE: Headers are metadata, meta information added to requests and responses. */

// Importing the core modules "http" and "fs"
const http = require('http');
const fs = require('fs');

// Creating server and storing it in a variable
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write(` <html>
                    <head>
                        <title>Message Page</title>
                    </head>
                    <body>
                        <form action="/message" method="POST">
                            <input type="text" name="message">
                            <button type="submit">SEND</button>
                        </form>
                    </body>
                </html>`);
        return res.end();  // response ends here    
        // Here, return is important because we want to quit out of the function if we have entered the "if" block.
    }

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
