const mongoose = require('mongoose')

const URL = 'mongodb+srv://valentin:eix2LjxgsipVXsdE@cluster0.hyf5aet.mongodb.net/30965?retryWrites=true&w=majority'

const connection = mongoose.connect(URL, {
  useNewUrlParser: true
})
.then(_ => console.log('Conectado a la base de datos de MONGODB Atlas'))

module.exports = connection