const express = require('express')

const personasRouter = require('./personasRouter')
const mascotasRouter = require('./mascotasRouter')


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



app.use('/v1/api/personas', personasRouter)
app.use('/v1/api/mascotas', mascotasRouter)




const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`server on in port ${PORT}`)
})

server.on('error', error => console.log(`Error server: ${error}`))