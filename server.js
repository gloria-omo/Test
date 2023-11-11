const http = require('http')

const port = 2000

const host = "localhost"

const server = http.createServer((req,res)=>{
res.writeHead(200,{"content-Type":"text/plain"})
res.write('hello world')
res.end()
})
server.listen(port,host,()=>{
    console.log(`my server listening to ${host}:${port}`)
})