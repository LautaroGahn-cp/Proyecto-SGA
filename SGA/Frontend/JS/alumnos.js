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

const formulario = document.querySelector("#formulario")
const mensaje = document.querySelector("#mensaje")
const listaAlumnos = document.querySelector("#listaAlumnos")
const btnCancelar = document.querySelector("#btnCancelar")
const btnGuardar = document.querySelector("#btnGuardar")
btnCancelar.style.display = "none";
const API_ALUMNOS = "http://localhost:3000/alumnos"
let alumnoEditandoLegajo = null;
let alumnoEditar = null; 

formulario.addEventListener("submit", async function(event){
    event.preventDefault();

    const legajo = document.querySelector("#legajo").value.trim()
    const nombre = document.querySelector("#nombre").value.trim()
    const carrera = document.querySelector("#carrera").value.trim()
    const correo = document.querySelector("#correo").value.trim()

    if(legajo === "" ||nombre === "" || carrera === "" || correo === ""){
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

    //POST
    if (alumnoEditandoLegajo === null) {
    const alumno = {
        legajo: Number(legajo),
        nombre: nombre,
        carrera: carrera,
        correo: correo
    }
    const respuesta = await fetch (API_ALUMNOS, {
        method: "POST",
        headers: {
            "Content-type": "application/jason"
        },
        body: JSON.stringify(alumno)
    })
    if (!respuesta.ok){
     mostrarMensaje("No se pudo guardar el alumno", "mje-error")
     return
    }
    mostrarMensaje("Alumno guardado correctamente", "mje-exito")  
}else { //put
    const datosActuales = {
        nombre: nombre,
        carrera: carrera,
        correo: correo,
    }

    if (JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){
        mostrarMensaje("No se realizaron cambios", "mje-adv")
    }

    const respuesta = await fetch (`${API_ALUMNOS}/${alumnoEditandoLegajo}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            carrera: carrera,
            correo: correo,
        })
    })
    
    if (!respuesta.ok){
     mostrarMensaje("No se pudo actualizar alumno", "mje-error")
     return
    }
    alumnoEditandoLegajo = null
    alumnoEditar = null
    btnGuardar.textContent = "Guardar Alumno"
    document.querySelector("#legajo").disabled = false
    mostrarMensaje("Alumno actualizado correctamente", "mje-exito")
}  
    await actualizarListaAlumnos()
    formulario.reset()
});

async function obtenerAlumnos(){
    const respuesta = await fetch(API_ALUMNOS)
    const alumnos = await respuesta.json()
    return alumnos 
}



function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos){
        listaAlumnos.innerHTML += `
        <tr>
            <td>${alumno.legajo}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
                <button 
                class="btn-editar" 
                data-legajo="${alumno.legajo}"
                title="Editar alumno">
                <i class="fa-solid fa-pen"></i>
                </button>
                <button 
                class="btn-eliminar" 
                data-legajo="${alumno.legajo}"
                title="Eliminar alumno">
                <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }
}
async function eliminarAlumno(legajo){
    const respuesta = await fetch (`${API_ALUMNOS}/${legajo}`, {
        method: "DELETE",
    })
    if (!respuesta.ok){
        mostrarMensaje ("No se pudo eliminar el alumno", "mje-error")
        return
    }
    if (alumnoEditandoLegajo === legajo){
        formulario.reset()
        alumnoEditar = null
        alumnoEditandoLegajo = null
        btnGuardar.textContent = "Guardar alumno"
        document.querySelector("#legajo").disabled = false
        btnCancelar.style.display = "none"
    
    }
    mostrarMensaje("Alumno eliminado correctamente", "mje-exito")
}

async function actualizarListaAlumnos() {
    const alumnos = await obtenerAlumnos()
    mostrarAlumnos(alumnos)
}

listaAlumnos.addEventListener("click", (e) =>{
    const boton_el = e.target.closest(".btn-eliminar")
    if (boton_el) {
        const legajo = Number(boton_el.dataset.legajo)
        const confirmar = confirm("¿Está seguro de eliminar este alumno?")
        if (confirmar) {
        eliminarAlumno(legajo)
    }
}
const boton_ed = e.target.closest(".btn-editar")
    if (boton_ed) {
        const legajo = Number(boton_ed.dataset.legajo)
        eidtarAlumno(legajo)
    }
})

async function eidtarAlumno(legajo){
    const alumnos = await obtenerAlumnos()
    const alumno = alumnos.find(alumno => alumno.legajo === legajo)
    
    if(!alumno){
        mostrarMensaje("Alumno no encontrado", "mje-error")
        return
    }
    document.querySelector("#legajo").value = alumno.legajo;
    document.querySelector("#legajo").disabled = true;
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;

    alumnoEditar = {
        nombre: alumno.nombre,
        carrera: alumno.carrera,
        correo: alumno.correo
    }

    alumnoEditandoLegajo = legajo;
    btnCancelar.style.display = "inline-block"
    btnGuardar.textContent = "Actualizar Alumno"
    document.querySelector("#nombre").focus()
}

function cancelarEdicion(){
    formulario.reset()
    alumnoEditandoLegajo = null
    alumnoEditar = null
    btnGuardar.textContent = "Guardar Alumno"
    document.querySelector("#legajo").disabled = false
    btnCancelar.style.display = "none"
    document.querySelector("#legajo").focus()
}

btnCancelar.addEventListener("click", cancelarEdicion)

async function iniciar(){
    await actualizarListaAlumnos()
}

iniciar()