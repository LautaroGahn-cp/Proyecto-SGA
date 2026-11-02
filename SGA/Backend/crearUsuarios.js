const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require("dotenv").config();
const Usuario = require('./models/Usuario');

async function crearUsuarios(req, res) {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const email = "admin@sga.com"
        const password = "ClaveDePrueba123!"

        const hash = await bcrypt.hash(password, 10)

        const usuario = new Usuario({
            nombre: "administrador de prueba",
            email: email,
            password: hash,
            rol: "admin"
        })
        await usuario.save()
        console.log ("Usuario de prueba creado exitosamente");
    } catch(error){
        console.error('Error creando usuario:', error);
    } finally {
        await mongoose.disconnect()
    }
}


crearUsuarios();
