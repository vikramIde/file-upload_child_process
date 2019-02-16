var x =''
var piglatin = require('piglatin');
const fs = require('fs');
var wstream = fs.createWriteStream('myOutput.txt');
process.on('message', (msg) => {
	x = piglatin(msg)
	wstream.write(x);
});

process.send(x);
