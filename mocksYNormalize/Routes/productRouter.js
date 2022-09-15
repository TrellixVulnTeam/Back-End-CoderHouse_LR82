const { Router } = require('express')
const db = require('../db/db')
const productsRouter = Router()
const faker = require('faker')

const getRandom = (cant) => {
    const arr = [];
    for (let i = 0; i < cant; i++) {
        const newObj = {};
        newObj.name = faker.commerce.productName(); 
        newObj.price = faker.commerce.price(); 
        newObj.image = faker.image.image();
        arr.push(newObj);
    }
    return arr;
};

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
        ////ACA VA EL FAKER.JS/////////////
        const cant = req.query.cant || 5
        const product = getRandom(cant)
        /////////////ACA TERMINA/////////////////
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