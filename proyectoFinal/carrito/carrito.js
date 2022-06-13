const express = require('express')
const { Router } = express

const carrito = Router()

let carroDeCompras = []

carrito.post('/', (req,res) => {
    
    const newCarrito = req.body

    newCarrito.id = carroDeCompras.length + 1

    carroDeCompras.push(newCarrito)

    return res.status(201).json(newCarrito)

})

carrito.delete('/', (req,res) => {

    const id = Number(req.params.id)
    const carritoIndex = carroDeCompras.findIndex(product => product.id === id)
    if (carritoIndex === -1) {
        return res.status(404).json({
            error: 'Carrito no encontrado'
        })
    }
    carroDeCompras = carroDeCompras.filter(product => product.id !== id)
    return res.status(204).json({
        message: "Este carrito a sido eliminado "
    })
})

carrito.get('/:id/productos', (req,res) => {
    const id = Number(req.params.id)
    let arr = carroDeCompras.filter(product => product.id == id)
    if (arr.length > 0) {
        return res.status(200).json(arr)
    }
    else {
        return res.status(404).json({
            error: 'Producto no encontrado'
        })
    }

})

carrito.post('/:id/productos', (req,res) => {
    const newProducto = req.body
    let today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = dd + '/' + mm + '/' + yyyy;
    newProducto.id = carroDeCompras.length + 1
    newProducto.timeStamp = today

    carroDeCompras.push(newProducto)
  
    return res.status(201).json(newProducto)
})

carrito.delete('/:id/productos/:id_prod', (req,res) => {

    const id_prod = Number(req.params.id_prod)
    const carritoIndex = carroDeCompras.findIndex(product => product.id === id_prod)
    if (carritoIndex === -1) {
        return res.status(404).json({
            error: 'Carrito no encontrado'
        })
    }
    carroDeCompras = carroDeCompras.filter(product => product.id !== id_prod)
    return res.status(204).json({
        message: "Este producto a sido eliminado"
    })

})
















module.exports = carrito