const ContenedorMongoDB = require("../../contenedores/ContenedorMongoDB")
const mongodb = require('../../mongodb')

class CarritoDAOMongoDB extends ContenedorMongoDB {
  constructor() {
    super(mongodb, 'carrito')
  }
}

module.exports = CarritoDAOMongoDB