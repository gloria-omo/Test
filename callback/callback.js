         // callback sytnex
// setTimeout(()=>{
// console.log("callback")
// },3000)
            // example
// setTimeout(myName,5000)
// function myName (){
//     console.log("My name is gloria")
// }
            // function to show when your email is not correct
// let input= prompt("input email")
// let email= Nwejeebuka@gmail.co
// if (input !=email){
//  alert('error')

// } else{
//     alert("you are corect")
// }





//     // read operator with callback
// const fs = require('fs');

// // import ther document path
// let myDocument = "./callback.txt"

// // implement with a callback
// const readfile = fs.readFile(myDocument,"utf8", (error,data)=>{
//   if (error){
//     console.log("message:"+error)
//     console.log("message: this error happened" + myDocument)
//   }else{
//     console.log(data)
//   }
// })







        // write operator with callback
        const fs = require('fs');

// import ther document path
let myWriteDocument = "./wcallback.txt"

// implement with a callback

const writefile = fs.writeFile(myWriteDocument,"this is tyhe write file",(error,)=>{
  if (error){
    console.log("message:"+error)
  }else{
    
    console.log("done")
  }
})
