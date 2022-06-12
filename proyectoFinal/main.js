const express = require('express')
const { Server: HttpServer } = require('http')
const app = express()
const httpServer = new HttpServer(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

const PORT = 8080

httpServer.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))