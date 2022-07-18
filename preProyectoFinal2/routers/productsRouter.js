const { Router } = require('express')
//const storage = require('../daos')
const { products: productsStorage } = require('../daos')()
const productsRouter = Router()


//const productsStorage = storage().products

productsRouter.get('', (req, res) => {
  return productsStorage.findAll()
    .then(products => {
      console.log(products)

      return res.json(products)
    })
  
})


productsRouter.post('', (req, res) => {
  const data = req.body
  
  return productsStorage.create(data)
    .then(newProduct => {
      console.log(newProduct)
      return res.status(201).json(newProduct)
    })

  
})

productsRouter.put('', (req, res) => {
  const data = req.body

  return productsStorage.update(data)
  .then(product => {
    console.log(product)
    return res.status(201).json(product)
  })
})

productsRouter.delete('', (req, res) => {
  const data = req.body

  return productsStorage.delete(data)
  .then(product => {
    console.log(product)
    return res.status(204).json(product)
  })
})

module.exports = productsRouter