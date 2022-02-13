// class Cliente{
//     constructor(name, fecha, direccion){
//         this.name=name
//         this.fecha=fecha
//         this.direccion=direccion
//     }
//     comprar(){
//         console.log("estoy comprando")
//     }
//     levantarQueja(){
//         console.log(`Yo, ${this.name}, me estoy quejando`)
//     }
// }

// let cliente1 = new Cliente("Pepe", 20, "asdasdsd")
// let cliente2 = new Cliente('maria', 3, 'asfadas')
// cliente1.levantarQueja()
// cliente2.levantarQueja()

// class Contador{
//     constructor(responsable){
//     this.responsable=responsable
//     this.contador=0
//     }
//     static contadorGeneral = 0
//     obtenerResponsable(){
//         console.log(this.responsable)
//     }
//     obtenerCuentaIndividual(){
//         console.log(this.contador)
//     }
//     obtenerCuentaGlobal(){
//         console.log(Contador.contadorGeneral)
//     }
//     contar(){
//         this.contador++
//         Contador.contadorGeneral++
//     }
// }
// let contador1 = new Contador("Lucas")
// let contador2 = new Contador("David")

// contador1.contar()
// contador1.obtenerCuentaIndividual()

// contador2.obtenerCuentaIndividual()

// contador2.obtenerCuentaGlobal()

class Usuario{
    constructor(nombre,apellido,libros, mascotas){
    this.nombre=nombre
    this.apellido=apellido
    this.libros=libros
    this.mascotas=mascotas
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre,autor){
        this.libros.push({nombre,autor})
    }
    getBookNames(){
        let arr = []
        for (let i = 0; i < this.libros.length; i++){
            arr.push(this.libros[i].nombre)
        }
        return arr
    }

}

let usuario1 = new Usuario ('Valentin', 'Tixeira', [{nombre:'Harry Potter', autor: 'ella'}], ['Perro'])

// console.log(usuario1.getFullName())
// usuario1.addMascota('gatito')
// console.log(usuario1.countMascotas())
// usuario1.addBook('El Principito', 'vos sabes quien es')
// console.log(usuario1.libros)
console.log(usuario1.getBookNames())