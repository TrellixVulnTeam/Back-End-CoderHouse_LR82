use ecommerce

const products = [
  {
    name: 'Televisor',
    precio: 15000,
    stock: 340
  },
  {
    name: 'Máquina de café',
    precio: 7000,
    stock: 80
  },
  {
    name: 'Máquina para barba',
    precio: 1000,
    stock: 200
  },
  {
    name: 'Cepillo Electrico',
    precio: 1500,
    stock: 30
  },
  {
    name: 'Tablet',
    precio: 300,
    stock: 100
  }
]
const mensajes = [
    {Pepe: "El producto llego bien"},
    {Nico: "El producto llego mal"},
    {Enzo: "El producto llego bien"},
    {Lauti: "El producto llego mal"},
    {Edu: "El producto llego bien"}
]

db.products.insertMany(products)
db.mensajes.insertMany(mensajes)

const notbook = {
    name: 'Notbook',
    precio: 80000,
    stock: 10
}
db.products.insertOne(notbook)
db.products.find({ precio: { $lt: 1000 }  })
db.products.find({ $or: [{precio: 1000}, {precio: 3000}]}) //Como me trae uno solo, se lo actualizo el precio asi trae 2
db.products.updateOne({precio: {$eq:7000}}, {$set: {precio: 3000}}) // y ahora si trae mas de 1
db.products.find({ precio: { $gt: 3000 }  })
db.products.find({}, { precio: true, name: true, _id: false}).sort({precio: 1}).limit(1).skip(2)
db.products.updateMany({},{$set: {stock: 100}})
db.products.updateMany({precio: { $gt: 4000 }}, { $set: {stock: 0} } )
db.products.deleteMany({precio: {$lt: 1000}}) 

use admin 

db.createUser({user: 'pepe', pwd: 'asd456', roles: [{ role: 'read', db:'ecommerce'}]})
