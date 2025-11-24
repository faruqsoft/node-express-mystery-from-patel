const http = require('http');
const fs = require('fs');
const path = require('path'); 

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const filePath = path.join(__dirname, 'index.html');
    console.log(filePath);
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    res.end(htmlContent);
})


port = 3000;
server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});