const http = require('http');
const port = 3000;
const fs=require('fs');

const server = http.createServer((req, res) => {
  // TODO: Send the ""Hello, world!"" response
fs.readFile('./output.txt','utf8',(err,data)=>{
  if(err){
    console.log(err.message);
  }
  console.log(`res.data: ${data}`);
});
res.end('Hello, World!');
});

server.listen(port, () => {
  // TODO: Log a message to the console when the server starts listening on the port
  console.log('Server running on port 3000');
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }
