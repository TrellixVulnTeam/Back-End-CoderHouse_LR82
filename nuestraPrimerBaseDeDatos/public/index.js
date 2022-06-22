const socket = io()

socket.on('welcome', data => {
    console.log(data)
})

socket.on('NewProduct', product =>{
    console.log('Nuevo producto creado', product)
})