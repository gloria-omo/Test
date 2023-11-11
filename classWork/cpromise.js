  // write operator with promises
  const fs = require('fs').promises;

  // import ther document path
  let myWriteDoc = "./wpromise.txt"
  
  // implement with a callback
  const content = "hello world"
fs.writeFile(myWriteDoc,content)
  .then(() => {
 console.log("done writing")
  })
  .catch((err) =>{
   console.log(err.message)
  })