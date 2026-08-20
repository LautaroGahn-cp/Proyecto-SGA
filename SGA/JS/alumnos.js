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

let alumnoEditandoId = null;
const formulario = document.querySelector("#formAlumno")
const mensaje = document.querySelector("#mensaje")
const listaAlumnos = document.querySelector("#listaAlumnos") 


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim()
    const carrera = document.querySelector("#carrera").value.trim()
    const correo = document.querySelector("#correo").value.trim()

    if(nombre === "" || carrera === "" || correo === ""){
        mostrarMensaje("Todos los campos son obligatorios", "mje-error")
        return
    }

    if(!correo.includes ("@")) {
        mostrarMensaje("Ingresar un correo electronico valido", "mje-error")
        return
    }

    if (nombre.length < 3) {
        mostrarMensaje("El nombre debe tener como minimo tres caracteres", "mje-error")
        return
    }

    const alumnos = obtenerAlumnos()
    if (alumnoEditandoId === null) {

    const alumno = {
        id: Date.now(),
        nombre: nombre,
        carrera: carrera,
        correo: correo
    }
    alumnos.push(alumno)
    mostrarMensaje("Alumno guardado correctamente")
}else {
    const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
    alumno.nombre = nombre
    alumno.carrera = carrera
    alumno.correo = correo
    alumnoEditandoId = null
    formulario.querySelector("button").textContent = "Guardar Alumno"

    mostrarMensaje("Alumno actualizado correctamente")
}  
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

function mostrarMensaje(texto, tipo){
    mensaje.textContent = texto;
    mensaje.className = tipo;
    setTimeout(() => {
       mensaje.textContent = "";
       mensaje.className = "oculto"; 
    }, 3000);
}

function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos){
        listaAlumnos.innerHTML += `
        <tr>
            <td>${alumno.id}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
                <button 
                class="btn-editar" 
                data-id="${alumno.id}"
                title="Editar alumno">
                <i class="fa-solid fa-pen"></i>
                </button>
                <button 
                class="btn-eliminar" 
                data-id="${alumno.id}"
                title="Eliminar alumno">
                <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }
}
function eliminarAlumno(id){
    const alumnos = obtenerAlumnos()
    const alumnosActualizados = alumnos.filter(alumno => alumno.id !== id);  //genera un nuevo array sin el alumno que queramos eliminar
    localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))
    mostrarAlumnos(alumnosActualizados)
    if (alumnoEditandoId === id){
        formulario.reset()
        alumnoEditandoId = null
        formulario.querySelector("button").textContent = "Guardar alumno"
    }
    mostrarMensaje("Alumno eliminado correctamente")
}

listaAlumnos.addEventListener("click", (e) =>{
    const boton_el = e.target.closest(".btn-eliminar")
    if (boton_el) {
        const id = Number(boton_el.dataset.id)
        const confirmar = confirm("¿Está seguro de eliminar este alumno?")
        if (confirmar) {
        eliminarAlumno(id)
    }
}
const boton_ed = e.target.closest(".btn-editar")
    if (boton_ed) {
        const id = Number(boton_ed.dataset.id)
        eidtarAlumno(id)
    }
})

function eidtarAlumno(id){
    const alumnos = obtenerAlumnos()
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar Alumno"
    document.querySelector("#nombre").focus()
}

const alumnos = obtenerAlumnos()
mostrarAlumnos(alumnos)