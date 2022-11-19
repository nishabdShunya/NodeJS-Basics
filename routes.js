const fs = require('fs');

const requestHandler = (req, res) => {
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
};

module.exports = {
    handler: requestHandler,
    text: 'some hard coded text'
};