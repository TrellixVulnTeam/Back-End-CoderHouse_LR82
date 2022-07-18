const mongoose = require('mongoose')

const URL = 'mongodb://localhost:27017/Mongoose'

const connection = mongoose.connect(URL, {
  useNewUrlParser: true
})

module.exports = connection