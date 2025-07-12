const http = require('http');
// function requestListener(req, res){
//         console.log(req);
//     }

//     http.createServer(requestListener);

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);

    res.setHeader('Content-Type', 'text/html'); // Use 'text/html' not 'text.html'
    res.write('<html>');

    if (req.url === '/') {
        res.write('<head><title>Bimbi can do it</title></head>');
        res.write('<body><h1>enter ur details</h1></body>');
        res.write('<form>');
        res.write(<input type="text" name="username" placeholder='enter ur name'></input>)
        res.write('</form>');

        res.write('</html>');
        return res.end();
    } 
    else if (req.url === '/products') {
        res.write('<head><title>Bimbi can do it</title></head>');
        res.write('<body><h1>Check out our products</h1></body>');
        res.write('</html>');
        return res.end();
    }

    // Fallback route
    res.write('<head><title>Bimbi can do it</title></head>');
    res.write('<body><h1>Like / Share / Subscribe</h1></body>');
    res.write('</html>');
    res.end();
});

const port = 3001;

server.listen(port, () => {
    console.log(`Server running on address http://localhost:${port}/`);
});
