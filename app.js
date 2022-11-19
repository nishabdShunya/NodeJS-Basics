/* SUMMARY SO FAR
When we enter the url localhost:3000, we are basically making a get request to the server from this url and what we are providing as responses is a form page with title My Form. 
Now, when we submit this form we are directed to localhost:3000/message and a post request is made to the server from this url. Here, in response we are writing the user form input into a new text file and redirecting back to the localhost:3000, i.e. My Form page. */

/* ADDITIONAL SHARPENER ASSIGNMENT
Read from the file and show data contained inside it above the form. */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        return fs.readFile('message.txt', (err, data) => {
            res.write(` <html>
                    <head>
                        <title>My Form</title>
                    </head>
                    <body>
                        <h3>${data}</h3>
                        <form action="/message" method="POST">
                            <input type="text" name="message">
                            <button type="submit">SEND</button>
                        </form>
                    </body>
                </html>`);
            return res.end();
        })
    };
    if (url === '/message' && method === 'POST') {
        const requestBody = [];
        req.on('data', (chunk) => {
            requestBody.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(requestBody).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.writeHead(302, { 'Location': '/' });
                return res.end();
            });
        });
    };
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