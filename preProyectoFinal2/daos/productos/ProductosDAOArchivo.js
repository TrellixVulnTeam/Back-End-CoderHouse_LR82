const ContenedorArchivo = require("../../contenedores/ContenedorArchivo");

class ProductsDAOArchivo extends ContenedorArchivo {
    constructor() {
        super('./products.json')
    }
}

module.exports = ProductsDAOArchivo