const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

io.on('connection', socket => {
    socket.emit('welcome', 'Bienvenido al sv')
})


const productsRouterFn = require('./Routes/productRouter')

const productRouter = productsRouterFn(io)

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/api/productos-test', productRouter)

const PORT = 8080

httpServer.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

let users = []
const productos = []
const messages = []
// Rutas del inicio

app.get('/', (req,res)=>{
    const data = {
      productos
  }
  return res.render('productos', data)
  })