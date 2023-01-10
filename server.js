const logEvents = require('./logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

// object
const myEmitter = new MyEmitter();


// add listerner

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(()=>{
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);
