require("dotenv").config()
const express = require("express") //llamar al paquete instalado
const cors = require("cors")
const conectarBD = require("./confing/database")
const alumnosRoutes = require("./routes/alumnos.routes")
const docentesRoutes = require("./routes/docentes.routes")
const materiasRoutes = require("./routes/materias.routes")

const app = express()

app.use(express.json())
app.use(cors())
app.use("/alumnos", alumnosRoutes)
app.use("/docentes", docentesRoutes)
app.use("/materias", materiasRoutes)

const PORT = process.env.PORT
conectarBD()
console.log ("Ejecutado nodemon")


app.listen(PORT, () =>{      
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
}) 
    
