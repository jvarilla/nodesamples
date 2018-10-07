/*Simple server using Express to serve
a hello world text message*/

const express = require ('express');
let app = express();
const portNumber = 3000;
app.get('/', (req, res) => {
	res.status(200).end("Hello");
});

app.listen(portNumber, () => {
	console.log(`Server listening on port ${portNumber}`);
});