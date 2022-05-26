const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
  const data = {
    comision: 30965
  }
  return res.render('index', data)
})


const PORT =8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))