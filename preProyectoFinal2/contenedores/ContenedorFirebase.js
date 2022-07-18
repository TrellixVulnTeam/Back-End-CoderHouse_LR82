class ContenedorFirebase {
  constructor () {
    this.firebase = require('../firebase')
    this.parseProducts = require('../utils/parseProducts')
  }

  findAll() {
    try {
        const response =  this.firebase.select('nombre').get()
        const docs = response.docs
    
      const products = docs.map(this.parseProducts)
    
        console.log(products)
    } catch (e) {
        console.log(`Error: ${e.message}`)
    }
  }

  find(id) {
    const doc = this.firebase.doc(id)
    try {
        const response =  doc.get()
        const product = this.parseProducts(response)
    
        console.log(product)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
  }

  create(data) {
    try {
        const product =  this.firebase.add(data)
        console.log(product)
    } catch (e) {
        console.log(`Error: ${e.message}`)
    }
  }

  update(id, name, price) {
    const doc = this.firebase.doc(id)
    try {
        const product =  doc.update(
            {
                name: (name), price: (price)
            }
        )
        console.log(product)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
  }

  delete(id) {
    const doc = this.firebase.doc(id)
    try {
        const product = doc.delete()
        console.log(product)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
  }
}

module.exports = ContenedorFirebase