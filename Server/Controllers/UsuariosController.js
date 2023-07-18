const Usuario = require('../Models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const CLAVE_SECRETA = 'crudsena';


exports.crearUsuario = (req , res , next)=>{
    const nuevoUsuario ={
        Nombre: req.body.Nombre,
        Correo: req.body.Correo,
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

exports.login = async (req, res , next)=>{
    try{
        const{Correo, Contrasena}= req.body;
        if(!Correo ||  !Contrasena){
            return res.status(400).json({error:'Correo electronico y contraseña requeridos'})
        }
        const user = await Usuario.findOne({Correo});
        if(!user){
            return res.status(409).json({error :'Email no existe'})
        }

        const isMatch = await bcrypt.compare(Contrasena, user.Contrasena);
        if(isMatch){
            const expireIn = 24*60*60;
            const accessToken = jwt.sign({id: user.id}, CLAVE_SECRETA,{
                expiresIn :expireIn
            });
            const dataUser ={
                Nombre: user.Nombre,
                Correo: user.Correo,
                Contrasena: user.Contrasena
            };
            res.json({dataUser , accessToken , expireIn})
        }else{
            res.status(409).json({error:'Contraseña incorrecta'});
        }
    }catch(err){
        res.status(500).json({error:'Error en el servidor'})
    }
}

exports.perfil = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const user = await Usuario.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      const dataUser = {
        Nombre: user.Nombre,
        Correo: user.Correo
      };
  
      res.json({ dataUser });
  
    } catch (err) {
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };
