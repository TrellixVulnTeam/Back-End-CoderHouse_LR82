const express = require('express')
const Contenedor = require('./Contenedor.js')
const productService = new Contenedor()

const server = express()

const connectedServer = server.listen(8080,()=>{
    console.log("Listening on port 8080")
})

const product = {
            name: "Mochila",
            category: "Mochila",
            brand: "Nike",
            color: "Marron",
            price: 8000,
            size: "XL"
}


server.get('/productos', async (req,res) =>{
    let products = await productService.getProducts()
     res.send(products.data)
})

server.get('/productoRandom', async (req,res) => {
    let randomProduct = await productService.productRandom()
    res.send(randomProduct.data)
})

