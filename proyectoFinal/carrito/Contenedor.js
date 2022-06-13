const fs = require('fs')

const pathToProducts = './files/products.json'

class Contenedor {

    
    createProduct = async (producto) => {
        try {
            if(fs.existsSync(pathToProducts)){
                let data = await fs.promises.readFile(pathToProducts, 'utf-8')
                let products = JSON.parse(data)
                let id = products[products.length-1].id+1
                producto.id = id
                products.push(producto)
                await fs.promises.writeFile(pathToProducts, JSON.stringify(products, null, 2))
                return {status: "success", message: "Producto Creado!"}
            }else {
                producto.id = 1
                await fs.promises.writeFile(pathToProducts,JSON.stringify([producto], null, 2))
                return {status:"Completado",message: "Usuario Creado!"}
            }
        } catch (error) {
            return {status:"error", message:error}
        }
    }
}

module.exports = Contenedor