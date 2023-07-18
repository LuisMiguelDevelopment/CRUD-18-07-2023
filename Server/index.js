const express = require('express');
const conectarDB = require('./Config/db')
const cors = require ('cors');

const app = express();
const PORT = 4000;

conectarDB();

app.use(express.json());
app.use(cors());


app.use('/api/usuarios', require('./Routes/UsuariosRoutes'))

app.listen(PORT, ()=>{
    console.log('Server corriendo')
})