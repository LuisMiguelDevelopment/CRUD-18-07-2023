const Usuario = require('../Models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const CLAVE_SECRETA = 'crudsena';


exports.crearUsuario = (req , res , next)=>{
    const nuevoUsuario ={
        Usuario: req.body.Usuario,
        Nombre: req.body.Nombre,
        Contrasena: bcrypt.hashSync(req.body.Contrasena)
    };

    Usuario.create(nuevoUsuario)
    .then(user=>{
        const expireIn = 24*60*60;
        const accessToken = jwt.sign({id: user.id},CLAVE_SECRETA,{
            expiresIn: expireIn
        });
        res.json({user , accessToken});
    })
    .catch(err=>{
        res.status(500).json({error:'El correo ya existe'})
    })
}