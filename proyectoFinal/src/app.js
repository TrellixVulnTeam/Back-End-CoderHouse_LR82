const express = require('express')
const CarsManager = require('./Managers/Cars')
const carsRouter = require('./routes/Cars')




const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/cars',carsRouter)
app.use(express.static(__dirname+'/public'))
const PORT = 8080

const server = app.listen(PORT, ()=> console.log(`Listening on ${PORT}`))

