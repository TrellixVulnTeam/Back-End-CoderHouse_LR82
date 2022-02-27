const fs = require('fs')

const pathToCars = __dirname+'/../files/cars'

class CarsManager{

    add = async(car) => {
        if(fs.existsSync(pathToCars)){
            try {
                let data = await fs.promises.readFile(pathToCars, 'utf-8')
                let cars = JSON.parse(data)
                if(cars.length===0){
                    //is the first car
                    car.id=1
                    cars.push(car)
                    await fs.promises.writeFile(pathToCars, JSON.stringify(cars, null, 2))
                    return {status:"Success", message:"Added 1 Car"}
                }
                car.id = cars[cars.length-1].id+1
                cars.push(car)
                await fs.promises.writeFile(pathToCars, JSON.stringify(cars, null, 2))
                return {status: "Success", message: "Added 1 Car"}
            } 
            catch (error) {
                return {status:"Error", error:error}
            }
        }
        else{
           try {
            car.id=1
            await fs.promises.writeFile(pathToCars, JSON.stringify([car], null, 2))
            return {status:"Success", message: "Added 1 Car"}
           } 
           catch (error) {
               return {status: "Error", erorr:error}
           }

        }
    }

    get = async() =>{
        if(fs.existsSync(pathToCars)){
            try {
                let data = await fs.promises.readFile(pathToCars, 'utf-8')
                let cars = JSON.parse(data)
                return {status: "Success", payload:cars}
            } catch (error) {
                return {status:"Error", error:error}
            }
        }else{
            return {status: "Success", payload: []}
        }
    }

}

module.exports = CarsManager