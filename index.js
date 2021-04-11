const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'})

const port = ( process.env.PORT || 3200)
const myRoute = require('./routes/operations')

//parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(cors())

app.use('/api', myRoute)

app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto ${port}`)
})


//conectar con base de datos mongo
const uri = process.env.DB_MONGO;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>console.log("Conectado a la base de datos"))
        .catch(e => console.log(e))

