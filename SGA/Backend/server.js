const express = require("express") //llamar al paquete instalado
const app = express()
app.use(express.json())

const alumnos = [
    {
        id: 1,
        nombre: "Ana",
        carrera: "Programacion"
    },

    {
        id: 2,
        nombre: "José",
        carrera: "Sistema"
    },

    {
        id: "3",
        nombre: "Lucia",
        carrera: "Perito Mercantil"
    }

]



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




app.get("/alumnos", (req, res) => {   //Ruta donde se tomara la informacion  //req = request/pregunta/solicitud, res = respond/responder
    res.json(alumnos)
})   


app.get("/alumnos/:id", (req, res) => { 
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno)
})   

app.post("/alumnos", (req, res) => {
    const nuevoAlumno = req.body
    alumnos.push(nuevoAlumno)
    res.json({mensaje: "alumno registrado correctamente"})
})

app.put("/alumnos/:id", (req, res) =>{
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id) //compara alumno id con el id del params
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})
})


app.get ("/docentes", (req, res) => {
    res.json(docentes)
})

app.get("/docentes/:id", (req, res) => {
    const id = Number(req.params.id)
    const docente = docentes.find(d => d.id === id)   // ahora "docentes" refiere al array de arriba
    res.json(docente)
})

app.listen(3000, () =>{      //el que escucha las solicitudes. (numero donde empieza a escuchar las solicitudes)
    console.log("Servidor funcionando en http://localhost:3000")
}) 
    
