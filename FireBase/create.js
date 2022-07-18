import query from './db.js'

                                // const id = 1                              ////////   le paso el id yo
                                // const doc = query.doc(id.toString())        /////////
try {
    // const user = await doc.set({
    //     nombre: "Valentin",
    //     dni: 40004150
    // })
     const user = await query.add({
        nombre: "Valentin",
        dni: 40004150
     })                        
    console.log(user)
} catch (error) {
    console.log(`Error: ${e.message}`)
}
