const { Router } = require('express')
const db = require('../db/db')
const productsRouter = Router()
const faker = require('faker')

const getRandom = (cant) => {
    const arr = []
    for (let i = 0; i < cant; i++) {
        const newObj = {};
        newObj.nombre = faker.commerce.productName();
        newObj.precio = faker.commerce.price();
        newObj.foto = faker.image.imageUrl()
    }
}


const productsRouterFn = (io) => {
    productsRouter.get('/', (req,res) => {
        return db.from('products').select('*')
          .then(products => {
              const filteredProducts = products.map(product => {
                  delete product.stock
                  return product
              })
              return res.json(filteredProducts)
          })
          .catch(err =>{
              return res.status(500).json({
              error: err.message})
              })
      })
      
      productsRouter.post('/', (req,res) => {
          const product = {
              name: req.body.name,
              price: req.body.price,
              description: req.body.description,
              stock: req.body.stock,
              category_id: req.body.category_id
          }
          return db.from('products').insert(product)
              .then((productIds) => {
                  const [ productId ]  = productIds
                  console.log(`Products insertados`, productId)
                  product.id = productId

                  io.sockets.emit('NewProduct', product)
                  return res.status(201).json(product)
              })
              .catch(err =>{
                  return res.status(500).json({
                  error: err.message})
                  })
      })

      return productsRouter
    
}




module.exports = productsRouterFn