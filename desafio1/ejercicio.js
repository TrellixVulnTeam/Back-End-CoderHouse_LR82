// function mostrarLista (lista=[]) {
//     if(lista.length===0) { 
//         return console.log("esta vacia")
//     }
//     for (const element of lista) console.log(element);

// }
// mostrarLista([2,4,1,32])

// (function (lista=[]) {
//     if(lista.length===0) { 
//         return console.log("esta vacia")
//     }
//     for (const element of lista) console.log(element);

// })([1,2,3,4])

function crearMultiplicador (numeroBase){
    return function(numeroAMultiplicar){
        console.log(numeroBase*numeroAMultiplicar)
    }
}

let duplicador = crearMultiplicador(2)
let triplicador = crearMultiplicador(3)
