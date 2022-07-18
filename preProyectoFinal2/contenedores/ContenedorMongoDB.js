
class ContenedorMongoDB {
    constructor (mongodb, productos) {
        this.mongodb = require('../mongodb')
        this.productsModel = require('../models/productos')
    }
  
    findAll(data) {
        return this.mongodb
        .then(_ => this.productsModel.find({}))
        .then(producto => console.log(producto))
        .catch(err => console.error(`Error: ${err.message}`))
    }
  
    find(id) {
  
    }
  
    create(data) {
        const product = new this.productsModel(data)
        return this.mongodb
        .then(_ => product.save())
        .then(document => console.log('Product saved', document))
        .catch(err => console.error(`Error: ${err.message}`))

    }
  
    update() {
  
    }
  
    delete() {
  
    }
  }
  
  module.exports = ContenedorMongoDB