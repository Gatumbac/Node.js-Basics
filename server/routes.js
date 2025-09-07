const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter a message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="name"><input type="submit" value=Enviar></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }

    res.write('<html>');
    res.write('<head><title>Mi first Node page</title></head>');
    res.write('<body><h1>Hello from Node</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handler: requestHandler,
    text: "Some text"
};

// exports.handler = requestHandler;
// exports.text = "Some hard coded text";