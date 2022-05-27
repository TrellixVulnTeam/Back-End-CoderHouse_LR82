const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')

const productos = []

app.get('', (req, res) => {
    const data = {
        productos
    }
  return res.render('form', data)
})

app.post('/productos', (req, res) => {
    const producto = {
      nombre: req.body.nombre,
      precio: req.body.precio,
      foto: req.body.foto
    }
    productos.push(producto)
  
    return res.redirect('/')
  })


const PORT =8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))