const { Router } = require('express')
//const storage = require('../daos')
const { products: productsStorage } = require('../daos')()
const mongodb = require('../mongodb')
const productsRouter = Router()



const ContenedorMongoDB = require('../contenedores/ContenedorMongoDB')
const contenedorMongoDBProductos = new ContenedorMongoDB(mongodb)
//const productsStorage = storage().products

productsRouter.get('', (req, res) => {
  return contenedorMongoDBProductos.findAll()
    .then(products => {
      console.log(products)

      return res.json(products)
    })
  
})

productsRouter.post('', (req, res) => {
  const data = req.body
  
  return contenedorMongoDBProductos
    .create(data)
    .then(newProduct => {
      console.log(newProduct)
      return res.status(201).json(newProduct)
    })

  
})

module.exports = productsRouter