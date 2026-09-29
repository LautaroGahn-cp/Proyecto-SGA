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


app.listen(PORT, () =>{      
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
}) 
    
