const ContenedorMongoDB = require("../../contenedores/ContenedorMongoDB")
const mongodb = require('../../mongodb')

class ProductosDAOMongoDB extends ContenedorMongoDB {
  constructor() {
    super(mongodb, 'productos')
  }
}

module.exports = ProductosDAOMongoDB