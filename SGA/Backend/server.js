const express = require("express") //llamar al paquete instalado
const app = express()

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
    
