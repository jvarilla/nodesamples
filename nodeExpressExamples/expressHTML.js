/*Simple server using Express to serve
a hello world HTML Document*/
//Source: https://scotch.io/tutorials/use-expressjs-to-deliver-html-files
const express = require('express');
const path = require('path');
let app = express();
const portNumber = 3000;

app.get('/', (req, res) => {
	res.status(200).sendFile(path.join( __dirname + '/helloWorld.html'));
});

app.listen(portNumber, () => {
	console.log(`Server listening on port ${portNumber}`);
});