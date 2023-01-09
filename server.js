const path = require('path');

const fs = require('fs');

fs.readFile(path.join(__dirname, 'data', 'starter.txt'), 'utf-8', (err, data) =>{
    if (err) throw err;
    console.log(data);
})

fs.writeFile(path.join(__dirname, 'data', 'reply.txt'), 'Nice!', (err) =>{
    if (err) throw err;
    console.log('Write done!');
})

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})