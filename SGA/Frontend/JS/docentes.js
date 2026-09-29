const formulario = document.querySelector("#formDocente")
const mensaje = document.querySelector("#mensajeDocente")
const listaDocentes = document.querySelector("#listaDocentes")
let docenteEditandoLegajo = null;
let docenteEditar = null; 
const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.style.display = "none";
const btnGuardar = document.querySelector("#btnGuardar")
const API_DOCENTES = "http://localhost:3000/docentes"

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    const legajo = document.querySelector("#legajo").value.trim()
    const nombre = document.querySelector("#nombreDocente").value.trim()
    const especialidad = document.querySelector("#especialidad").value.trim()
    const correo = document.querySelector("#correo").value.trim()

    if (legajo === ""||nombre === "" || especialidad === "" || correo === "") {
        mostrarMensaje("Todos los campos son obligatorios", "mje-error")
        return
    }

    if (!correo.includes("@")) {
        mostrarMensaje("Ingrese un correo electrónico válido", "mje-error")
        return
    }

    if (nombre.length < 3) {
        mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error")
        return
    }

    try{
        //POST
        if (docenteEditandoLegajo === null) {
        const docente = {
            legajo: Number(legajo),
            nombre: nombre,
            especialidad: especialidad,
            correo: correo
        }
        const respuesta = await fetch (API_DOCENTES, {
            method: "POST",
            headers: {
            "Content-type": "application/json"
            },
            body: JSON.stringify(docente)
        })
        if (!respuesta.ok){
            throw new Error ("La API respondio con un error")
        }
        mostrarMensaje("Docente guardado correctamente", "mje-exito")  
        }else { //put
        const datosActuales = {
            nombre: nombre,
            especialidad: especialidad,
            correo: correo,
        }

        if (JSON.stringify(datosActuales) === JSON.stringify(docenteEditar)){
            mostrarMensaje("No se realizaron cambios", "mje-adv")
        }

        const respuesta = await fetch (`${API_DOCENTES}/${docenteEditandoLegajo}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                especialidad: especialidad,
                correo: correo,
            })
        })
    
        if (!respuesta.ok){
            throw new Error ("La API respondio con un error")
        }
        docenteEditandoLegajo = null
        docenteEditar = null
        btnGuardar.textContent = "Guardar docente"
        document.querySelector("#legajo").disabled = false
        mostrarMensaje("docente actualizado correctamente", "mje-exito")
        }  
        await actualizarListaDocentes()
        formulario.reset()
    } catch (error){
        console.error(error.message)
        mostrarMensaje("No fue realizada la operacion", "mje-error")
    }
    
});


async function obtenerDocentes(){
    try{
        const respuesta = await fetch(API_DOCENTES)
        const docentes = await respuesta.json()
        return docentes 
    } catch (error){
        console.error(error.message)
        throw error
    }
}


async function mostraDocentes(docentes) {
    listaDocentes.innerHTML = ""
    for (const docente of docentes) {
        listaDocentes.innerHTML += `
        <tr>
            <td>${docente.legajo}</td>
            <td>${docente.nombre}</td>
            <td>${docente.especialidad}</td>
            <td>${docente.correo}</td>
            <td>
                <button 
                class="btn-editar" 
                data-legajo="${docente.legajo}"
                title="Editar docente">
                <i class="fa-solid fa-pen"></i>
                </button>
                <button 
                class="btn-eliminar" 
                data-legajo="${docente.legajo}"
                title="Eliminar docente">
                <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }
}

async function eliminarDocente(legajo){
    const respuesta = await fetch (`${API_DOCENTES}/${legajo}`, {
        method: "DELETE",
    })
    if (!respuesta.ok){
        mostrarMensaje ("No se pudo eliminar el docente", "mje-error")
        return
    }
    if (docenteEditandoLegajo === legajo){
        formulario.reset()
        docenteEditar = null
        docenteEditandoLegajo = null
        btnGuardar.textContent = "Guardar docente"
        document.querySelector("#legajo").disabled = false
        btnCancelar.style.display = "none"
    
    }
    mostrarMensaje("Docente eliminado correctamente", "mje-exito")
    await actualizarListaDocentes()
}

async function actualizarListaDocentes() {
    const docentes = await obtenerDocentes()
    mostraDocentes(docentes)
}

listaDocentes.addEventListener("click", (e) => {
    const boton_el = e.target.closest(".btn-eliminar")
    if (boton_el) {
        const legajo = Number(boton_el.dataset.legajo)
        const confirmar = confirm("¿Está seguro de eliminar este docente?")
        if (confirmar) {
        eliminarDocente(legajo)
        }
    }
    const boton_ed = e.target.closest(".btn-editar")
    if (boton_ed) {
        const legajo = Number(boton_ed.dataset.legajo)
        editarDocente(legajo)
    }
})

async function editarDocente(legajo){
    const docentes = await obtenerDocentes()
    const docente = docentes.find(docente => docente.legajo === legajo)
    
    if(!docente){
        mostrarMensaje("Docente no encontrado", "mje-error")
        return
    }
    document.querySelector("#legajo").value = docente.legajo;
    document.querySelector("#legajo").disabled = true;
    document.querySelector("#nombreDocente").value = docente.nombre;
    document.querySelector("#especialidad").value = docente.especialidad;
    document.querySelector("#correo").value = docente.correo;

    docenteEditar = {
        nombre: docente.nombre,
        especialidad: docente.especialidad,
        correo: docente.correo
    }

    docenteEditandoLegajo = legajo;
    btnCancelar.style.display = "inline-block"
    btnGuardar.textContent = "Actualizar Docente"
    document.querySelector("#nombreDocente").focus()
}

function cancelarEdicion(){
    formulario.reset()
    docenteEditandoLegajo = null
    docenteEditar = null
    btnGuardar.textContent = "Guardar docente"
    document.querySelector("#legajo").disabled = false
    btnCancelar.style.display = "none"
    document.querySelector("#legajo").focus()
}

btnCancelar.addEventListener("click", cancelarEdicion)

async function iniciar(){
    await actualizarListaDocentes()
}

iniciar()