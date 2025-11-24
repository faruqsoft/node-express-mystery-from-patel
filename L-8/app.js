const http = require('http');

const server = http.createServer((req, res) => {

  // ------------------------------
  // GET routes
  // ------------------------------
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page\n');

  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page\n');

  } else if (req.method === 'GET' && req.url === '/api/user') {
    const user = {
      id: 1,
      name: 'John Doe',
      age: 30,
      email: "john@gmail.com"
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));

  // ------------------------------
  // POST routes
  // ------------------------------
  } else if (req.method === 'POST' && ['/login','/register','/signup','/submit'].includes(req.url)) {
    let body = '';

    // Listen for data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // When all data is received
    req.on('end', () => {
      // Try parsing body if it exists
      let parsedData = {};
      if (body) {
        try {
          parsedData = JSON.parse(body);
        } catch (err) {
          console.log("Invalid JSON received");
        }
      }

      console.log(`Received data for ${req.url}:`, parsedData);

      // Respond with JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 
        success: true, 
        route: req.url, 
        message: `${req.url.replace('/','')} submitted successfully`, 
        data: parsedData 
      }));
    });

  // ------------------------------
  // Route not found
  // ------------------------------
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: "Route not found" }));
  }

});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
