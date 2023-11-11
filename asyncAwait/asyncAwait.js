       // // working with async
      //    function declarations
    //  call a file
// const fs = require('fs')
         
// async function readfromfile(){
//     try{
//     await fs.readFile("./testfile.txt",(error,date)=>{
//      if (error) {
//         console.log('there is an error')
//      }  else{
//         console.log(date)
//      } 
//     });

//     }catch(e){  
//         console.log(e.message)
// }
// }
// readfromfile();


             // // arrow function

 // const readfromfile = async()=>{
 //     try{
//     await fs.readFile("./testfile.txt", "utf8",(error,date)=>{
 //      if (error) {
 //         console.log('there is an error')
 //      }  else{
 //         console.log(date)
 //      } 
 //     });

// //     }catch(e){  
// //         console.log(e.message)
// // }
// // }

// // readfromfile();



      //  // function that read a file to the browser
// const http = require('http');
// const fs = require('fs');

// const port = 2003

// const host = "localhost"

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {"Content-Type":"text/plain"})

// const readStream = fs.createReadStream("./testfile.txt","utf8")

// readStream.pipe(res)
// })
// server.listen(port,host,()=>{
//  console.log(`listening on ${host}:${port}`)
// })


         // //  write file

      // const fs = require('fs').promises

      // async function newinfo (){
      //    try{
      //        const content = "this is a write file"
      //       await fs.writeFile("./testfile.txt",content)
      //       console.log("successfully")

      //    }
      //    catch(e){
      //     console.log(e.message)
      //    }
      // }
      // newinfo()
   

