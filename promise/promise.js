// const { resolve } = require("path")
// // promise synax
// const promise = newpromise(resolve,rejects)=>{
//     return resolve
//     return reject
// }



                  // love calculator functions
//     const doSomething = new Promise((resolve)=>{
//         const man = Math.floor(Math.random()*100)
//         resolve(man)
//         });

//     const doSomethingElse = (a )=> {
//         const man = a
//     const woman = Math.floor(Math.random()*100)
//     const average = (man + woman)/2;
//     const result = {man: a, woman:woman, average: average}
//     return result

//     }
// const calculator = (man, woman)=>{
//     const doThirdThing = (a)=>{
//       switch (true) {
//     case (a.average >= 70):
//            return ( `${man} is: ${a.man},${woman} is: ${a.woman}, average is: ${a.average} You are compatible`) 
//     case (a.average >= 60):
//            return (`${man} is: ${a.man}, ${woman} is: ${a.woman}, average is: ${a.average}, You are slightly compatible`) 
//     case (a.average >= 50):
//            return (` ${man} is: ${a.man}, ${woman} is: ${a.woman} average is: ${a.average} manageable`)
//      case (a.average >= 40):
//           return (`${man} is: ${a.man}, ${woman} is: ${a.woman}, average is: ${a.average} don't marry`)

//     default:
//     return (`${man} is: ${a.man}, ${woman} is: ${a.woman}, average is: ${a.average} run for your life`)

//     }
// }
// }
// function failureCallback(error){
//  console.error(`This error happened:${error}`)
// }
// doSomething.then((result) => doSomethingElse(result))
// .then((newResult) => doThirdThing(newResult,))
// .then ((finalResult) => {
// console.log(`This is our verdict: ${finalResult}`);
// })
// .catch(failureCallback)

// calculator()


//         // read operator function
//    const fs = require('fs').promises

//    const myDoc = "./promiseTest.txt"

//    fs.readFile(myDoc,"utf-8")
//    .then((data) => {
//   console.log(data)
//    })
//    .catch((e) => {
//     console.log("message")
//    });
   

           // write operator with promises
           const fs = require('fs').promises;

           // import ther document path
           let myWriteDoc = "./wpromise.txt"
           
           // implement with a callback
           const content = "hello world"
           const writefile = fs.writeFile(myWriteDoc,content)
           .then((data) => {
          console.log("done writing")
           })
           .catch((err) =>{
            console.log(e.message)
           })
           











