const mongoose = require('mongoose')

const URL = 'mongodb://localhost:27017/preProyectoFinal2'

const connection = mongoose.connect(URL, {
  useNewUrlParser: true
})

module.exports = connection