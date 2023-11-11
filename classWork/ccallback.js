   // write operator with callback
   const fs = require('fs');

   // import ther document path
   let myWriteDocument = "./wcallback.txt"
   
   // implement with a callback
   
   fs.writeFile(myWriteDocument,"this is the write file", (error)=>{
     if (error){
       console.log("message:"+error)
     }else{
       console.log("done")
     }
   })