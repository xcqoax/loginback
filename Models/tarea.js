const { Schema, model} = require('mongoose');
const User = require('./user')

const tareaSchema = new Schema({
    descripcion: String,
    realizada:Boolean,
    autor:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{
    timestamps:true
})

module.exports = model('Tarea', tareaSchema)