const express = require('express')
const productsRouter = require('./routers/productsRouter')
const usersRouter = require('./routers/usersRouter')
const carritoRouter = require('./routers/carritoRouter')

const app = express()
// console.log(process.env.STORAGE)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)
app.use('./api/carrito', carritoRouter)
const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))