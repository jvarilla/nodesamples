/*Server Serves a sampleForm and returns the JSON object
it received from the form to the user*/

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let app = express();
const portNumber = 3000;

//New Syntax with Express 4
//Thanks https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', (req, res) => {
	res.status(200).sendFile(path.join( __dirname + '/sampleForm.html'));
});

app.post('/registerHalloween', (req, res) => {
	let registrant = req.body;
	//log registrant to console
	console.log(registrant);
	//return registrant form JSON submission to client
	res.status(200).json(registrant);
})
app.listen(portNumber, () => {
	console.log(`Server listening on port ${portNumber}`);
});