const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: String, required: true, max: 100 },
  desciption: { type: String, required: true, max: 100 }
})

module.exports = model('carrito', userSchema)