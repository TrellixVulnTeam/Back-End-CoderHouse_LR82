const db = require('./db')
const userModel = require('./models/user')

const data = {
  name: 'Lautaro',
  lastname: 'Colombini',
  email: 'lau.colombini@gmail.com',
  username: 'negro',
  password: 'soynegro'
}

const user = new userModel(data)

db
  .then(_ => user.save())
  .then(document => console.log('User saved', document))
  .catch(err => console.error(`Error: ${err.message}`))
  .finally(_ => process.exit())