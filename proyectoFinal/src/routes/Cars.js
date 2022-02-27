const express = require('express')
const router = express.Router()
const CarManager = require('../Managers/Cars')
const uploader = require('../services/Upload')

const carService = new CarManager()

router.get('/', (req,res)=>{
    carService.get().then(result=>res.send(result))
})

router.post('/',uploader.single('file'),(req,res)=>{
    let car = req.body
    let file = req.file
    if(!file) return res.status(500).send({error:"Couldn't upload file"})
    car.thumbnail = req.protocol+"://"+req.hostname+":8080/img/"+file.filename
    carService.add(car).then(result=>res.send(result))
})

module.exports = router