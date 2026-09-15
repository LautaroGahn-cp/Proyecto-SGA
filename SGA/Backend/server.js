require("dotenv").config()
const express = require("express") //llamar al paquete instalado
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const alumnosRoutes = require("./routes/alumnos.routes")
const docentesRoutes = require("./routes/docentes.routes")
app.use("/alumnos", alumnosRoutes)
app.use("/docentes", docentesRoutes)

const conectarBD = require("./confing/database")
const PORT = process.env.PORT
conectarBD()
console.log ("Ejecutado nodemon")

const docentes = [
    {
        id: 1,
        nombre: "Irina",
        materia: "Programacion"
    },

    {
        id: 2,
        nombre: "Marcela",
        materia: "Gestion"
    },

    {
        id: 3,
        nombre: "Fabiana",
        materia: "Economia"
    },

    {
        id: 4, 
        nombre: "Juan",
        materia: "Ingenieria"
    },

    {
        id: 5,
        nombre: "Raul",
        materia: "Agronomia"
    }
    
]

//creo un middleware
/*app.use((req, res, next) =>{
    console.log(req.method);
    console.log(req.url);
    next();
})*/


app.listen(PORT, () =>{      
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
}) 
    
