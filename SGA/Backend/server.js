const express = require("express") //llamar al paquete instalado
const app = express()
app.use(express.json())
const alumnosRoutes = require("./routes/alumnos.routes")
const docentesRoutes = require("./routes/docentes.routes")
app.use("/alumnos", alumnosRoutes)
app.use("/docentes", docentesRoutes)
const conectarBD = require("./confing/database")

conectarDB()

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


app.listen(3000, () =>{      //el que escucha las solicitudes. (numero donde empieza a escuchar las solicitudes)
    console.log("Servidor funcionando en http://localhost:3000")
}) 
    
