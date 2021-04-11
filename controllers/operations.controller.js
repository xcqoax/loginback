const nodemailer = require("nodemailer")
const jwt = require('jsonwebtoken')

const User =require('../Models/user')
const Tarea =  require('../Models/tarea');
const tarea = require("../Models/tarea");

const operationCtrl = {};

operationCtrl.newUser = async(req, res) => {
const emailOutlook= process.env.user;
const passOutlook = process.env.pass

const {nombre,email, telefono, password}=req.body;
try{
   const  nuevoUsuario = new User({
       nombre,
        email,
        telefono,
        password
    })

    const buscarEmail = await User.findOne({email})
    if(buscarEmail){
        return res.status(401).send('correo encontrado')
    }
    await nuevoUsuario.save()

}catch(error){
    console.log(error)
}

}

operationCtrl.login = async(req, res)=>{
    const {email, password} = req.body;
    const usuario = await User.findOne({email})

    if(!usuario)return res.send({'mensaje':'Correo no registrado'})
    if(usuario.password !== password) return res.send({'mensaje':'contraseña incorrecta'})


    const token = jwt.sign({_id: usuario._id},'llaveSecreta')

    res.status(200).json({token})
}

operationCtrl.obtenerTareas = async(req,res)=>{

    const _id=req.usuario
    console.log('obtener tarea',_id)
    tareas = await Tarea.find({autor:_id})
    console.log(tareas)
    res.json(tareas)
}

operationCtrl.eliminarTarea = async(req,res)=>{
  
    const {id} = req.params
    console.log(id)
    tareaEliminar = await Tarea.remove({_id:id})
}

 operationCtrl.guardarTarea =  async(req,res)=>{
console.log(req.usuario)

 try{
    const {descripcion, realizada} = req.body;
    const tarea = new Tarea({descripcion,realizada})
    tarea.autor = req.usuario

    await tarea.save()
    res.json({tarea})
 }catch(error){
     console.log(error)
 }
}

operationCtrl.actualizarTarea= async(req, res)=>{
    
      const id = req.body._id;
      const tareaActualizada = req.body
        console.log(id)
        console.log('tarea nueva:', tareaActualizada)
   
    tareaYaActualziada = await tarea.updateOne({_id:id},tareaActualizada)
}

operationCtrl.obtenerUsuario = async(req,res)=>{
    const _id = req.usuario
    console.log('id usuario', _id)
    usuario = await User.findById({_id})
    res.json(usuario.nombre)
}

module.exports = operationCtrl 
