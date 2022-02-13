const fs = require('fs')


try {
    fs.writeFileSync('fyh.txt', new Date().toLocaleString())
    let data = fs.readFileSync('fyh.txt', 'utf-8')
    console.log(data)
}
catch(error){
    console.log(error)
}
