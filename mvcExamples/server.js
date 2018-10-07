
/*Server Serves an MVC example, just specify the directory of the MVC
Application as a command line argument
IE: node server.js react*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const directory = process.argv[2];
let app = express();
const portNumber = 3000;

//New Syntax with Express 4
//Thanks https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + `/${directory}`));

app.get('/', (req, res) => {
	res.status(200).sendFile(path.join( __dirname + `/${directory}`));
});

app.listen(portNumber, () => {
	console.log(`Serving ${directory} MVC example on port ${portNumber}`);
});