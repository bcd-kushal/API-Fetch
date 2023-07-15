const https = require('https');
const fs = require('fs');

const PORT = 8080;

fs.readFile('./index.html', (error, data) => {
    if (error) {
        throw error;
    }
    https.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    }).listen(PORT);
})