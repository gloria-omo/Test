const express = require("express")
const port = 4040
const app = express()
app.use("express.json")
app.get("/",async (req,res)=>{
  res.send("hello world")
})

app.listen(port,()=>{
    console.log(`server listening to port:${port}`)
})