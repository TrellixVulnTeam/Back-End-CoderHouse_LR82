const UserManager = require('./UserManager.js')
const userService = new UserManager()


let user ={
    first_name: "Valentin",
    last_name: "Tixeira",
    username: "LordSyrs",
    age:25,
    mail: "valen.tixeira@gmail.com"
}

//userService.createUser(user).then(result=>console.log(result))

//userService.findAll().then(result=>console.log(result))

//userService.findById(2).then(result=>console.log(result))

userService.updateUser(2, user).then(result=>console.log(result))

//userService.deleteUser(2).then(result=>console.log(result))
