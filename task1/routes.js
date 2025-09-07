const handler = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter a message</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="userName"><input type="submit" value=Send></form></body>');
        res.write('</html>');
        return res.end();
    }  

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Enter a message</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }  

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log(userName);
            res.statusCode = 302;
            res.setHeader('Location', '/')
            return res.end();
        })
    } 

    res.statusCode = 404;
    res.write('<html>');
    res.write('<head><title>404 Not Found</title></head>');
    res.write('<body><h1>Page not found</h1></body>');
    res.write('</html>');
    res.end();

}

exports.handler = handler;