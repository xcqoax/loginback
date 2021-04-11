const jwt = require('jsonwebtoken')
const User =require('../Models/user')

const validarTok = async(req,res,next)=>{
    let token = req.headers.authorization.split(' ')[1]
        
    const payload = jwt.verify(token,'llaveSecreta')

    req.usuario = payload._id;

    next()

}

module.exports = validarTok