/*const alumnos = [
    {
        id: 1,
        nombre: "Ana"
    },

    {
        id: 2,
        nombre: "Juan"
    }
];

function obtenerAlumnos(){
    return new Promise ((resolve) => {
        setTimeout(() => {
           resolve(alumnos) 
        }, 2000);
    })
}

async function iniciar() {
    const datos = await obtenerAlumnos()
    console.table(datos)
}

iniciar()*/

// crear obtenerMaterias()
// crear obtenerDocentes()

/*async function obtenerAlumnos(){
    const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users")
    const alumnos = await respuesta.json()
    return(alumnos)
}

function mostrarAlumnos(alumnos){
    console.table(alumnos)
    localStorage.setItem("alumnos", JSON.stringify(alumnos))
    const datos = localStorage.getItem("alumnos")
    //console.log(typeof datos)
    //console.log(datos)
    //const alumnosRecuperados = JSON.parse(datos)
    /*console.log(alumnos)
    for (const alumno of alumnos){
    console.log(alumno.name, alumno.email)

}

async function iniciar() {
    const alumnos = await obtenerAlumnos()
    mostrarAlumnos(alumnos)
}

iniciar()*/

const formulario = document.querySelector("#formAlumno")

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value
    const carrera = document.querySelector("#carrera").value
    const correo = document.querySelector("#correo").value

    const alumno = {
        id: Date.now(),
        nombre: nombre,
        carrera: carrera,
        correo: correo
    }
    const alumnos = obtenerAlumnos()
    alumnos.push(alumno)

    localStorage.setItem("alumnos", JSON.stringify(alumnos))

    mostrarAlumnos(alumnos)

    formulario.reset()
});

function obtenerAlumnos(){
    const datos = localStorage.getItem("alumnos")
    if (datos){
        return JSON.parse(datos)
    }
    return []
}

const listaAlumnos = document.querySelector("#listaAlumnos") 

function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos){
        listaAlumnos.innerHTML += `
        <li>
            ${alumno.nombre} -
            ${alumno.carrera} -
            ${alumno.correo}
        </li>`;
    }
}