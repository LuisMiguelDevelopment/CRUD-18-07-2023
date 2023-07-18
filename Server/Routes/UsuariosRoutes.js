const express = require('express');
const router = express.Router();
const usuariosController = require('../Controllers/UsuariosController');

router.post('/crear', usuariosController.crearUsuario);
router.post('/login', usuariosController.login)
router.get('/perfil/:id', usuariosController.perfil)

module.exports = router;