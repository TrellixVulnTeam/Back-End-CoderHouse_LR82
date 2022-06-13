const express = require('express')
const productos = require('./carrito/productos')
const carrito = require("./carrito/carrito")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const publicPath = `${__dirname}/public`

app.use('/static', express.static(publicPath))

app.get('/', (req, res) => {
    return res.json({ 
        status: 'ok'
    })
})

app.use('/api/productos', productos)
app.use('/api/carrito', carrito)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`server on in port ${PORT}`)
})

server.on('error', error => console.log(`Error server: ${error}`))

// ADMIN
const Admin = false


