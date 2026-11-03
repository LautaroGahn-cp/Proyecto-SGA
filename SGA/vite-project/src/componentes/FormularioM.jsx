import { useState } from "react";
const API_MATERIA = "http://localhost:3000/materias"


export function FormularioM({onMateriaCreado, materiaEditar, onCancelar}){
    const [formulario, setFormulario] = useState({
        codigo: String(materiaEditar?.codigo ?? ""),
        nombre: materiaEditar?.nombre ?? "",
        descripcion: materiaEditar?.descripcion ?? "",
        cargaHoraria: materiaEditar?.cargaHoraria ?? "",
        estado: materiaEditar?.estado??"",
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
    const editando = Boolean(materiaEditar)
    const url = editando?`${API_MATERIA}/${materiaEditar.codigo}` : API_MATERIA

        try{
            const alumno ={
                ...formulario,
                codigo: String(formulario.codigo),
                cargaHoraria: Number(formulario.cargaHoraria)
            }
            const respuesta = await fetch(url, {
                method: editando ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(alumno)
            })
            if(!respuesta.ok){
                throw new Error(`No se puedo guardar el materia. Estado HTTP: ${respuesta.status}`)
            } 
            setFormulario({
                codigo:"",
                nombre: "",
                descripcion: "",
                cargaHoraria: "",
                estado: "",
            })
            onMateriaCreado()
        } catch(error){
            console.error("Error al guardar el materia:", error)
            setError(error.message || "No se puedo conectar con el servidor")
        } finally{
            setGuardando(false)
        }
    }

    return(
        <>
        <h2></h2>
        <form className="sga-form sga-form--materia" onSubmit={guardar}>
            <label htmlFor="codigo">Codigo</label>
            <input 
                id="codigo"
                name="codigo"
                value={formulario.codigo}
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

            <label htmlFor="descripcion">Descripcion</label>
            <input 
                id="descripcion"
                name="descripcion"
                value={formulario.descripcion}
                onChange={manejarCambio}
                required
            />

            <label htmlFor="cargaHoraria">Carga Horaria</label>
            <input 
                id="cargaHoraria"
                name="cargaHoraria"
                value={formulario.cargaHoraria}
                onChange={manejarCambio}
                required
            />

            <label htmlFor="estado">Estado</label>
            <select
                id="estado"
                name="estado"
                value={formulario.estado}
                onChange={manejarCambio}
                required
                >
                <option value="">Seleccionar...</option>
                <option value="activa">Activa</option>
                <option value="inactiva">Inactiva</option>
            </select>
            <button type="submit" disabled={guardando}>
                {guardando ? "Guardando..." : materiaEditar ? "Guardar cambios" : "Guardar"}
            </button>
            {materiaEditar && (
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