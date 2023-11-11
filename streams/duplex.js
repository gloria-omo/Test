const { Duplex } = require ("stream");

const myDuplex = new Duplex({
    write (chunk, encoding, callback){

        console.log (`Received data: ${chunk.toString()}`);
        callback();
    },
    read(size) {

        if (this.currentCharCode > 90){
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

myDuplex.currentCharCode = 65;

myDuplex.on('data', (chunk)=> {
    console.log(`Received rom duplex: ${chunk.toString()}`);
});

myDuplex.write('Hello ')
myDuplex.write('World! ');
myDuplex.end();