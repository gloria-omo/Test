//   import the event module
const eventEmitter = require('events');

//   extend the class to the emmitter
class myEmitter extends eventEmitter{}


// create a object to myEmitter
const emitteeObject = new myEmitter();

emitteeObject.on('light up',()=>{
    console.log("up nepa")
})
emitteeObject.emit("light up")