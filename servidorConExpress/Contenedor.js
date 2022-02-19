const fs = require('fs')


const pathToProducts = './files/products.json'
class Contenedor {
    createProduct = async (product) => {
        try {
            if(fs.existsSync(pathToProducts)){
                let data = await fs.promises.readFile(pathToProducts, 'utf-8')
                let products = JSON.parse(data)
                let id = products[products.length-1].id+1
                product.id = id
                products.push(product)
                await fs.promises.writeFile(pathToProducts, JSON.stringify(products, null, 2))
                return {status: "success", message: "Usuario Registrado!"}
            }else {
                product.id = 1
                await fs.promises.writeFile(pathToProducts,JSON.stringify([product], null, 2))
                return {status:"Completado",message: "Usuario Creado!"}
            }
        } catch (error) {
            return {status:"error", message:error}
        }
    }

    getProducts = async () =>{
        if(fs.existsSync(pathToProducts)){
        let data = await fs.promises.readFile(pathToProducts, 'utf-8')
        let products = JSON.parse(data)
        return {status: "terminado", data: products}
        }
    }

    productRandom = async () => {
        let products = await this.getProducts()
        let randomProduct = products.data[Math.floor(Math.random() * (0 + products.data.length))]
        return {status: "terminado", data: randomProduct}
    }
}

module.exports = Contenedor