const http = require('http');
const port = 3000;

const server = http.createServer((req, res1) => {
  // TODO: Send the ""Hello, world!"" response
res1.end('Hello, World!');
});
server.listen(port, () => {
  // TODO: Log a message to the console when the server starts listening on the port
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(`Server is listening on port ${port}`);
});
// DO NOT EDIT BELOW THIS LINE

module.exports = { server }
