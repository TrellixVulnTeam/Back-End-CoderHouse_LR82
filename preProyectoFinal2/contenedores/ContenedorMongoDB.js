
class ContenedorMongoDB {
    constructor (mongodb, productos) {
        this.mongodb = require('../mongodb')
        this.productsModel = require('../models/productos')
    }
  
    findAll() {
        return this.mongodb
        .then(_ => this.productsModel.find({}))
        .then(producto => console.log(producto))
        .catch(err => console.error(`Error: ${err.message}`))
    }
  
    find(id) {
        return this.mongodb
        .then(_ => this.productsModel.findOne({ _id: (id) }))
        .then(producto => console.log(producto))
        .catch(err => console.error(`Error: ${err.message}`))
    }
  
    create(data) {
        const product = new this.productsModel(data)
        return this.mongodb
        .then(_ => product.save())
        .then(document => console.log('Product saved', document))
        .catch(err => console.error(`Error: ${err.message}`))

    }
  
    update(name, price) {
        return this.mongodb
        .then(_ => {
            return this.productsModel.updateOne({
              name: (name)
            }, {
              $set: { price: (price) }
            })
          })
          .then(result => console.log(result))
          .catch(err => console.error(`Error: ${err.message}`))
    }
  
    delete(name) {
        return this.mongodb
        .then(_ => {
            return this.productsModel.deleteOne({
              name: (name)
            })
          })
          .then(result => console.log(result))
          .catch(err => console.error(`Error: ${err.message}`))
    }
  }
  
  module.exports = ContenedorMongoDB