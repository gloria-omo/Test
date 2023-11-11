const fs = require('fs');

// //Create a writable stream to a file
// const writableStream = fs.cconst fs = require('fs');

//Create a writable stream to a file
const writableStream = fs.createWriteStream('output.txt');

//Write data to the stream
writableStream.write('Hello, there!');
writableStream.write('this is a simple example.');
writableStream.end();

//You can also use the 'end' event to detect when the writing is finished
writableStream.on('finish', ()=> {
    console.log('This is an example of writable stream.');
});reateWriteStream('output.txt');

//Write data to the stream
writableStream.write('Hello, there!');
writableStream.write('this is a simple example.');
writableStream.end();
3
//You can also use the 'end' event to detect when the writing is finished
writableStream.on('finish', ()=> {
    console.log('This is an example of writable stream.');
});