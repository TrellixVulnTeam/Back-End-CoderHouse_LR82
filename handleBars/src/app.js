const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const server = app.listen(8080, ()=>console.log("Listening to hardlebars"))


app.engine('handlebars', handlebars.engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/users', (req,res)=>{
    res.render('users', {
        name:"Valentin"
    })
})