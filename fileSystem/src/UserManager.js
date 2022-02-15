const fs = require('fs')
/*

    user={
        first_name: String (requiered),
        last_name: String,
        username: String (unique) (requiered),
        age:Number,
        mail: String (unique) (requiered)
    }
*/

const pathToUsers = './files/users.json'
class UserManager{
    createUser = async (user) =>{
        //Validations
        if(!user.first_name||!user.username||!user.mail) return {status:"error", error: "Falta completar datos." }
        try {
            if(fs.existsSync(pathToUsers)){
                let data = await fs.promises.readFile(pathToUsers, 'utf-8')
                let users = JSON.parse(data)
                let id = users[users.length-1].id+1
                user.id = id
                users.push(user)
                await fs.promises.writeFile(pathToUsers, JSON.stringify(users, null, 2))
                return {status: "success", message: "Usuario Registrado!"}
            }else{//el archivo no existe
                user.id = 1
                await fs.promises.writeFile(pathToUsers,JSON.stringify([user], null, 2))
                return {status:"Completado",message: "Usuario Creado!"}
            }
        }catch (error) {
            return {status:"error", message:error}
        }
    }

    findAll = async () =>{
        if(fs.existsSync(pathToUsers)){
        let data = await fs.promises.readFile(pathToUsers, 'utf-8')
        let users = JSON.parse(data)
        return {status: "terminado", data: users}
        }
    }
    findById = async (id) =>{
        if(!id) return {status:"error", error:"Necesito la ID."}
        if(fs.existsSync(pathToUsers)){
            let data = await fs.promises.readFile(pathToUsers, 'utf-8')
            let users = JSON.parse(data)
            //Metodo filter
            // let user = users.filter(u => u.id===id)
            // if (user.length>0) return {status:"terminado", data:user}
            // else return {status:"error", error:"usuario no encontrado"}
            //METODO FINE
            let  user = users.filter(u=>u.id===id)
            if(user) return {status:"completado", user:user}
            else return {status:"error", error:"usuario no encontrado"}
    
        }
    }
    updateUser = async (id, updateUser) =>{
        if(!id) return {status:"error", error:"Necesito la ID."}
        if(fs.existsSync(pathToUsers)){
            let data = await fs.promises.readFile(pathToUsers, 'utf-8')
            let users = JSON.parse(data)
            let newUsers = users.map((user) => {
                if (user.id===id){
                    //Este es al que tengo que modificar
                    updateUser.id=id
                    return updateUser
                }
                else{
                    return user
                }
            })
            await fs.promises.writeFile(pathToUsers, JSON.stringify(newUsers, null, 2))
            return {status: "terminado", message: "Usuario actualizado"}
        }
    }
    deleteUser = async (id) =>{
        try {
            if(!id) return {status:"error", error:"Necesito la ID."}
            if(fs.existsSync(pathToUsers)){
                let data = await fs.promises.readFile(pathToUsers, 'utf-8')
                let users = JSON.parse(data)
                let newUsers = users.filter(user=>user.id!==id)
                await fs.promises.writeFile(pathToUsers, JSON.stringify(newUsers, null, 2))
                return {status:"terminado", message:"Usuario Eliminado"}
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = UserManager