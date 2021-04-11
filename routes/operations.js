const routers = require('express').Router()
const {newUser,login, obtenerTareas, guardarTarea,eliminarTarea, actualizarTarea, obtenerUsuario} = require('../controllers/operations.controller')
const validarTok = require('../middlewares/validarToken')

routers.post('/registro', newUser)
routers.post('/login',login)
routers.get('/tareas', validarTok ,obtenerTareas)
routers.post('/guardar',validarTok,  guardarTarea)
routers.delete('/eliminar/:id',validarTok, eliminarTarea)
routers.put('/realizada/:id',validarTok,actualizarTarea)
routers.get('/usuario',validarTok,obtenerUsuario)

module.exports = routers