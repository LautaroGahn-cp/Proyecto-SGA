import { useState } from "react";
const API_DOCENTE = "http://localhost:3000/docentes"


export function FormularioD({onDocenteCreado, docenteEditar, onCancelar}){
    const [formulario, setFormulario] = useState({
        legajo: String(docenteEditar?.legajo ?? ""),
        nombre: docenteEditar?.nombre ?? "",
        carrera: docenteEditar?.especialidad ?? "",
        correo: docenteEditar?.correo ?? ""
    })

    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)

    function manejarCambio(e) {
        const { name, value} = e.target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    async function guardar(e) {
        e.preventDefault()
        setError("")
        setGuardando(true)
    const editando = Boolean(docenteEditar)
    const url = editando?`${API_DOCENTE}/${docenteEditar.legajo}` : API_DOCENTE

        try{
            const alumno ={
                ...formulario,
                legajo: Number(formulario.legajo)
            }
            const respuesta = await fetch(url, {
                method: editando ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(alumno)
            })
            if(!respuesta.ok){
                throw new Error(`No se puedo guardar el docente. Estado HTTP: ${respuesta.status}`)
            } 
            setFormulario({
                legajo:"",
                nombre: "",
                carrera: "",
                correo: ""
            })
            onDocenteCreado()
        } catch(error){
            console.error("Error al guardar el docente:", error)
            setError(error.message || "No se puedo conectar con el servidor")
        } finally{
            setGuardando(false)
        }
    }

    return(
        <>
        <h2></h2>
        <form onSubmit={guardar}>
            <label htmlFor="dni">DNI</label>
            <input 
                id="dni"
                name="DNI"
                value={formulario.dni}
                onChange={manejarCambio}
                required
            />
            <label htmlFor="nombre">Nombre</label>
            <input 
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                required
            />

            <label htmlFor="especialidad">Especialidad</label>
            <input 
                id="carrera"
                name="Especialidad"
                value={formulario.especialidad}
                onChange={manejarCambio}
                required
            />

            <label htmlFor="correo">Correo</label>
            <input 
                id="correo"
                name="correo"
                value={formulario.correo}
                onChange={manejarCambio}
                required
            />
            <button type="submit" disabled={guardando}>
                {guardando ? "Guardando..." : docenteEditar ? "Guardar cambios" : "Guardar"}
            </button>
            {docenteEditar && (
                <button type="button" onClick={onCancelar} disabled={guardando}>
                    Cancelar
                </button>
            )}
            <br />
            {error && <p role="alert">{error}</p>}
        </form> 
        </>
       
        
    )
}