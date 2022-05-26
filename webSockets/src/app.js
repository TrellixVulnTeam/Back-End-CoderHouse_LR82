const express = require('express')
const {Server} = require('socket.io')

const app = express()
const server = app.listen(8080, ()=> console.log(`Listening on port 8080`))
const io = new Server(server)