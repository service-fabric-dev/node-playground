// Using global
global.helloWorld = 'Hello world!';

// Using console
console.log(global.helloWorld);

// Creating events
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', () => {
    console.log('Grabbing lunch real quick.');
});

eventEmitter.emit('lunch')

// Using built-in events
process.on('exit', () => {
    console.log('\nChanging global message to platform on exit.');
    global.helloWorld = process.platform;
    console.log(global.helloWorld);
});

// Using file system
const { readFile, readFileSync } = require('fs');

// Blocking read
console.log('\nExecuting blocking file read.');
const output = readFileSync('./output.txt', 'utf8');
console.log('Blocking read: ' + output);
console.log('Post-read output');

// Non-blocking read
console.log('\nExecuting non-blocking file read.');
readFile('./output.txt', 'utf8', (err, output) => {
    console.log('\nNon-blocking read: ' + output)
});
console.log('Post-read output');

// Promised read
const { readFile: readFileAsync } = require('fs').promises;

async function readAsync() {
    return await readFileAsync('./output.txt', 'utf8');
}

console.log('\nExecuting promised file read.');
const readPromise = readAsync().then((promisedText) => {
    console.log('\nPromised read: ' + promisedText)
//    setTimeout(() => { console.log('Promised read: ' + promisedText) }, 2000); 
});

// Using custom modules
const myModule = require('./my-module');

console.log('\nUsing custom modules');
console.log(myModule);

// Building full-stack web app using express
const express = require('express');
const app = express();
app.get('/', async (request, response) => {
    response.send(await readFileAsync('./home.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));