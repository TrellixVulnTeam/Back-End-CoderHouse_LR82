const fs = require('fs')

// fs.promises.writeFile('archivo.txt', 'Hola Mundo')
// .then(result =>{console.log('Finalizado')})
// .catch(error => console.log(error))

const readFile = async path => {

    try { 

        let data = await fs.promises.readFile(path, 'utf-8')
        let object = JSON.parse(data)
        object.contenidoObj.author="CoderHouse"
        await fs.promises.writeFile('copiaJson.json',JSON.stringify(object,null,2))
    } catch (error) {
        console.log(error)
    }
}
readFile('info.json')