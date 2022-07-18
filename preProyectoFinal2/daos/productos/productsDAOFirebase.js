const ContenedorFirebase = require("../../contenedores/ContenedorFirebase")
const firebase = require('../../firebase')

class ProductosDAOFirebase extends ContenedorFirebase {
  constructor() {
    super(firebase, 'productos')
  }
}

module.exports = ProductosDAOFirebase