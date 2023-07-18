const express = require('express');
const router = express.Router();
const usuariosController = require('../Controllers/UsuariosController');

router.post('/crear', usuariosController.crearUsuario);


module.exports = router;