const http = require('http');
const port = 3000;

const server = http.createServer(async(req, res) => {
  // TODO: Send the ""Hello, world!"" response
res.end('Hello, World!');
});

server.listen(port, () => {
  // TODO: Log a message to the console when the server starts listening on the port
  console.log('Server running on port 3000');
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }
