
const express = require('express')

const app = express()

const connectedServer = app.listen(8080,()=>{
    console.log("Listening on port 8080")
})

//GET POST PUT DELETE HEAD

app.get('/', (request, response) =>{
    response.send("hola")
})
app.get('/user', (request,response) => {
    response.send({
        name: "Valentin",
        apellido: "Tixeira",
        age: 25,
        mail: "valen.tixeira@gmail.com"
    })
})