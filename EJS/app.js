const express = require('express')
const app = express()
const server = app.listen(8080, ()=>console.log('Listening on 8080'))

app.set('views', './views')
app.set('view engine','ejs')

app.get("/", (req,res)=>{
    res.render('hello',{
        message:"Hola a todos"
    })
})