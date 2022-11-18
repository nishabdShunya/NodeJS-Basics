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
                </html>`);
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');   // writing a new file
        res.statusCode=302;                         // 302 stands for redirection
        res.setHeader('Location', '/');
        return res.end();
    }
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