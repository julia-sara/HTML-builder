const fs = require('fs');
const path = require('path');
const readline = require('node:readline');


const createWriteStream = fs.createWriteStream(path.join(__dirname, 'write.txt'), 'utf-8'); //создаем поток записи и файл

const {
    stdin: input,
    stdout: output,
} = require('node:process');
const { escape } = require('querystring');

const rl = readline.createInterface({ input, output });

rl.question('Hello! Пиши текст: ', (answer) => {

    rl.on('line', (input) => {
        //console.log(`Received: ${input}`);
        fs.appendFile(path.join(__dirname, 'write.txt'), `${input}`, (err) => {
            if (err) throw err;
            console.log(' add!');
        });
    });

    rl.on('SIGINT', () => {
        console.log('поки((');
        rl.close();
    });

    //добавление теста в файл
    fs.appendFile(path.join(__dirname, 'write.txt'), answer, (err) => {
        if (err) throw err;
        console.log(' added!');
    });

});









