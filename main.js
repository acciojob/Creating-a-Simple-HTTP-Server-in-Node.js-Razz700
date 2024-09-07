const http = require('http');
const port = 3000;
const res={data:"Hello, World!"};
const fs=require('fs');

const server = http.createServer((req, res1) => {
  // TODO: Send the ""Hello, world!"" response
res1.end('Hello, World!');
//console.log(`res.data: ${res.data}`);
});
server.listen(port, () => {
  // TODO: Log a message to the console when the server starts listening on the port
  console.log('Server running on port 3000 ');
});
const func=async()=>{
  console.log(`res.data: ${res.data} `);
}
func();
// DO NOT EDIT BELOW THIS LINE

module.exports = { server }
