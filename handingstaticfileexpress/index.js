const express = require("express")
const fs = require("fs")
// const { url } = require("inspector")
const path = require("path")
const port = 4040
const app = express()

//  app.use(express.static("statics"))

app.get("*", (req,res)=>{
// res.send("hello world")
const filepath = path.join(__dirname,"statics",req.url)
fs.exists(filepath, (fileExist)=>{
 if (fileExist){
fs.readFile(filepath,(err,data)=>{
if(err){
res.status(404).send("server error")
}else{
const contenttype = getContent(filepath)
res.status(200).send(data).send(contenttype)
}
})
 }else{
  res.status(500).send("file not found")
 }
})
})

// write the dynamic function
const getContent = (filepath)=>{
    // get extension name
    const extensionN = path.extname(filepath)
switch(extensionN){
   case "html":
    return "text/html";
    case "css":
    return "text/css";
case "txt":
    return "text/plain";
case "jpg":
    return"text/jpeg";
case "js": 
   return"application/javascript"
default:
    return"application/octet-stream";
   
}
}

app.listen(port,()=>{
    console.log(`server is listening to: http://localhost:${port}`)
})