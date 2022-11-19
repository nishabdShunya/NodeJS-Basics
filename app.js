const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
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
                </html>`); // This form will make post request to localhost:3000/message
        return res.end();
    };
    /* 
    Now, whenever a post request is made to localhost:3000/message we want to do two things-
        1. Write the input provide by the user into a new file on the server
        2. Redirect back to localhost:3000 (NOTE: 302 is the status code for redirection)
    Below, we will see logic for these two things.
    */
    if (url === '/message' && method === 'POST') {
        // First we need to parse the incoming request and get the data entered by the user, which is a part of the request. For this, we will register an event listener as shown below.
        const requestBody = [];
        req.on('data', (chunk) => {
            requestBody.push(chunk);
        });
        // Now we need to register another event listener for the incoming requests. And this is the "end" listener, which gets fired once we are done parsing the incoming requests.
        return req.on('end', () => {
            const parsedBody = Buffer.concat(requestBody).toString();   // NOTE: To interact with the chunks of data we need to buffer them.
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.writeHead(302, { 'Location': '/' });    // redirecting to localhost:3000
                return res.end();                           // ending the response and returning it 
                // NOTE: The responses above will occur after we are done writing the file, because these are contained inside an event listener which gets fired after the file is written.)
            });
        });
    };
    // This is our default response, response when none of the "if" conditions are met
    res.setHeader('Content-Type', 'text/html');
    res.write(` <html>
                    <head>
                        <title>My First Page</title>
                    </head>
                    <body>
                        <h1>Hello from My Node JS Server</h1>
                    </body>
                </html>`);
    res.end();
});

server.listen(3000);

/* NOTE
When form sends a request, it takes all the input data and puts it into the request body as key value pairs where the names assigned to the inputs are the keys and the values are what the user entered.
*/