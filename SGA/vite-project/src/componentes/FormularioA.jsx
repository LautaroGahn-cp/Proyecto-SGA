import { useState } from "react";
const API_ALUMNOS = "http://localhost:3000/alumnos"


export function FormularioA({onAlumnoCreado, alumnoEditar, onCancelar}){
    const [formulario, setFormulario] = useState({
        legajo: String(alumnoEditar?.legajo ?? ""),
        nombre: alumnoEditar?.nombre ?? "",
        carrera: alumnoEditar?.carrera ?? "",
        correo: alumnoEditar?.correo ?? ""
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
    const editando = Boolean(alumnoEditar)
    const url = editando?`${API_ALUMNOS}/${alumnoEditar.legajo}` : API_ALUMNOS

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
                throw new Error(`No se puedo guardar el alumno. Estado HTTP: ${respuesta.status}`)
            } 
            setFormulario({
                legajo:"",
                nombre: "",
                carrera: "",
                correo: ""
            })
            onAlumnoCreado()
        } catch(error){
            console.error("Error al guardar el alumno:", error)
            setError(error.message || "No se puedo conectar con el servidor")
        } finally{
            setGuardando(false)
        }
    }

    return(
        <>
        <h2></h2>
        <form onSubmit={guardar}>
            <label htmlFor="legajo">legajo</label>
            <input 
                id="legajo"
                name="legajo"
                value={formulario.legajo}
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

            <label htmlFor="carrera">Carrera</label>
            <input 
                id="carrera"
                name="carrera"
                value={formulario.carrera}
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
                {guardando ? "Guardando..." : alumnoEditar ? "Guardar cambios" : "Guardar"}
            </button>
            {alumnoEditar && (
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