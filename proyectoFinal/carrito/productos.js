const express = require('express')
const Contenedor = require('./Contenedor')
const productService = new Contenedor()

const { Router } = express

const productos= Router()

let producto = []

productos.get('/:id', (req,res) => {
    const id = Number(req.params.id)
    let arr = producto.filter(product => product.id === id)

    if (arr.length > 0) {
        return res.status(200).json(arr)
    }
    else {
        return res.status(404).json({
            error: 'Producto no encontrado'
        })
    }
})

productos.post('/', (req, res) => {
    const newProducto = req.body
    let today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = dd + '/' + mm + '/' + yyyy;
    newProducto.id = producto.length + 1
    newProducto.timeStamp = today

  
    producto.push(newProducto)
  
    return res.status(201).json(newProducto)
  })

productos.put('/:id', (req,res) => {

    const id = Number(req.params.id)
    const productoIndex = producto.findIndex(product => product.id === id)
    
    if (productoIndex === -1) {
        return res.status(404).json({
            error: 'Producto no encontrado'
        })
    }

    producto[productoIndex].Name = req.body.Name
    producto[productoIndex].Description = req.body.Description
    producto[productoIndex].Code = req.body.Code
    producto[productoIndex].Foto = req.body.Foto    
    producto[productoIndex].Price = req.body.Price
    producto[productoIndex].Stock = req.body.Stock

    return res.json(producto[productoIndex])

})

productos.delete('/:id', (req,res) => {
    
    const id = Number(req.params.id)
    const productoIndex = producto.findIndex(product => product.id === id)
    if (productoIndex === -1) {
        return res.status(404).json({
            error: 'Producto no encontrado'
        })
    }

    producto = producto.filter(product => product.id !== id)

    return res.status(204).json({
        message: "Este producto a sido eliminado"
    })
})
module.exports = productos