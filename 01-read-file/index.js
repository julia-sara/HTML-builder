const fs = require('fs');
const { stdout } = require('process');
const path = require('path');

const input = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
input.on('data', text => stdout.write(text));
// input.on('data', text => console.log(text));// или второй вариант
