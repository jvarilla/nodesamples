//use variables to dynamically generate server
//<!DOCTYPE html> helps browser interpret incoming 
//byte string is an html document without the need
//to specify a format type ie text/html or text/plain
//use variables to dynamically generate server
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    //exit server and log error
    return console.log('something bad happened', err);
  }
  
  console.log(`server is listening on ${port}`);
});