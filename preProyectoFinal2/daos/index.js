const ProductosDAOArchivo = require('../daos/productos/ProductosDAOArchivo')
const UsersDAOArchivo = require('./usuarios/UsersDAOArchivo')
const ProductosDAOMysql = require('./productos/ProductsDAOMysql')
const UsersDAOMysql = require('./usuarios/UsersDAOMysql')
const ProductosDAOMongoDB = require('./productos/productosDAOMongoDB')
const ProductosDAOFirebase = require('./productos/productsDAOFirebase')


const getStorage = () => {
  const storage = process.env.STORAGE || 'archivo'
  switch (storage) {
    case 'archivo':
      return {
        products: new ProductosDAOArchivo(),
        users: new UsersDAOArchivo()
      }
      break
    case 'mysql':
      return {
        products: new ProductosDAOMysql(),
        users: new UsersDAOMysql()
      }
      break
    case 'mongodb':
      return {
        products: new ProductosDAOMongoDB(),
      }
      break
      case 'firebase':
      return {
        products: new ProductosDAOFirebase(),
      }
      break
    default:
      return {
        products: new ProductosDAOMongoDB(),
        users: new UsersDAOArchivo()
      }
      break
  }

}


module.exports = getStorage