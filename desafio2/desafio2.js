const fs = require('fs')

try {
    fs.readFile('package.json','utf-8',(error, data)=>{
        if(error) throw 'error';
        const info ={
            contenidoString:data,
            contenidoObj:JSON.parse(data)
        }
        fs.writeFile('info.txt', JSON.stringify(info,null,2),(error)=>{
            if(error)throw 'error'
        })
    })
    
} catch (error) {
    console.log(error)    
}
