const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello Karan! Your Node.js server is running 🚀");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
