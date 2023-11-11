// call the modules
const http = require("http")
const fs = require("fs")
const path = require("path")

// create server
const port = 4040
const server = http.createServer((req,res)=>{
    const filepath= path.join(__dirname,"static",req.url)
 fs.exists(filepath,(fileExist)=>{
    if (fileExist){
    fs.readFile(filepath,"utf8",(err,data)=>{
    if(err){
  res.writeHead(500,{"content-type":"text/plain"})
  res.end("server error")
    }else{
const contentType = getContentType(filepath)
res.writeHead(200,{"content-type": contentType})
res.end(data)
    }
    })
    }else{
 res.writeHead(404,{"content-type":"textplain"})
 res.end("file don't exist")
    }
 })
})
// create a dynamic function using
const getContentType = (filepath)=>{
    // get the extension name
const extensionName =path.extname(filepath)
switch(extensionName){
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
// listen to server
server.listen(port,()=>{
    console.log(`server is listen to:http://localhost:${port}`)
})