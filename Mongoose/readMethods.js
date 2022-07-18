const db = require('./db')
const userModel = require('./models/user')

;(async () => {

  await db

  const users = await userModel
    .find({ }, { name: 1, lastname: 1, _id: 0 })
    .sort({ name: -1 })

  console.log(users)
})()