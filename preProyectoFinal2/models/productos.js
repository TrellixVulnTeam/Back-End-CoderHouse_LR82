const { Schema, model } = require('mongoose')

const productsSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: String, required: true, max: 100 },
    description: { type: String, required: true, max: 100 }
})

module.exports = model('productos', productsSchema)