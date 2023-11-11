const { Transform } = require('stream');

const toUpperCaseTransform = new Transform({
transform(chunk, encoding, callback) {
//convert the chunk (data) to uppercase
const uppercasedChunk = chunk.toString().toUpperCase();
this.push(uppercasedChunk);
callback();
}
});

//Using the transform stream
toUpperCaseTransform.on('data', (chunk) =>{
    console.log(`Transformed data: ${chunk.toString()}`);
});

toUpperCaseTransform.write('Just a simple, ');
toUpperCaseTransform.write('transform stream');
toUpperCaseTransform.end();