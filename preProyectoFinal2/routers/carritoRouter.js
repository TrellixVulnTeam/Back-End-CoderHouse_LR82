const { Router } = require('express')
const carritoRouter = Router()
const { carrito: carritoStorage } = require('../daos')()
const { products: productsStorage } = require('../daos')()

carritoRouter.get('', (req, res) => {
    return carritoStorage.findAll(productsStorage)
    .then(carrito => {
        console.log(carrito)
        return res.json(carrito)
    })
})

carritoRouter.post('', (req, res) => {
    const newProduct = req.body
    
    return carritoStorage.create(newProduct)
    .then(newCarrito =>{
        console.log(newCarrito)
        return res.status(201).json(newCarrito)
    })
})

carritoRouter.put('', (req, res) => {
    const data = req.body
    return carritoStorage.update(data)
    .then(carrito => {
        console.log(carrito)
        return res.status(201).json(carrito)
    })
})

carritoRouter.delete('', (req, res) => {
    const data = req.body

    return carritoStorage.delete(data)
    .then(carrito => {
        console.log(carrito)
        return res.status(204).json(carrito)
    })
})

module.exports = carritoRouter

