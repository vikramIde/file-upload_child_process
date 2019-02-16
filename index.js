const { fork } = require('child_process');
const fs = require('fs');
const _retrieveChild = fork("./child.js");
var _setting = {highWaterMark:45000,encoding:'utf8'}
const stream = fs.createReadStream('./file1.txt', _setting);
                stream.on('data', data => {
                         _retrieveChild.on('message', (msg) => {
                            console.log('Child mesg',msg)
                        });
                         _retrieveChild.send(data);
                });