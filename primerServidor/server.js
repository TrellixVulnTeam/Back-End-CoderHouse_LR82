const http= require('http')

const server = http.createServer((request,response)=>{
    let currentTime = new Date().getHours()
    currentTime=14
    if(currentTime>=6&&currentTime<=12) response.end('Buenos Dias')
    if(currentTime>=13&&currentTime<=19) response.end("Buenas Tardes")
    else response.end('Buenas Noches')
    console.log(currentTime)
    
})
const connectedServer = server.listen(8080,()=>{
    console.log("server listening on port 8080")
})