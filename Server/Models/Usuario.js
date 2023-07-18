const  mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    Nombre:{
        type:String,
        require:true,
        trim: true
    },
    Correo:{
        type:String,
        require:true,
        trim: true
    },
    Contrasena:{
        type:String,
        require:true,
        trim: true
    }
})

module.exports = mongoose.model('Usuario', UsuariosSchema)