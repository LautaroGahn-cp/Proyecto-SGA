import { useEffect, useState } from "react"
const API_DOCENTES = "http://localhost:3000/alumnos"

export function ListaDocentes({actualizar, onDocenteCreado, onEditarDocente}){
    const [docente, setDocente] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    async function eliminarDocente(dni) {
        const confirmar = window.confirm("¿Estas seguro de querer eliminar el recurso?")
        if (!confirmar) {
            return
        } 
        try{
            const respuesta = await fetch(`${API_DOCENTES}/${dni}`, {
                method: "DELETE"
            })
            if (!respuesta.ok) {
                throw new Error(`Error al eliminar el docente. Estado http: ${respuesta.status}`)
            }
            onDocenteCreado()
        } catch(error){
            console.error("Error al eliminar el alumno:", error)
            alert(error.message || "No se puedo eliminar el alumno")
            setError("No se puedo actualizar la lista")
        }
        finally{
            setCargando(false)
        }
    }

    useEffect(() => {
        async function cargarDocente(){
            setCargando (true)
            setError("")
            try {
                const respuesta = await fetch(API_DOCENTES)
                if(!respuesta.ok){
                  throw new Error ("No se pudo obtener la lista", respuesta.status)  
                }
                const datos = await respuesta.json()
                setDocente(datos)
            }catch (error){
                console.error("Error de conexion", error)
                setError ("No se puede cargar la lista de alumnos")
            } finally {
                setCargando(false)
            }
        }

        cargarDocente()
    }, [actualizar])
    if (cargando){
        return <p>Cargando alumnos...</p>
    }
    if (error){
        return <p role="alert">{error}</p>
    }
    return(
        <section>
        <h2>Alumnos</h2>
        {docente.length ===0 ?(
            <p>No hay alumnos registrados</p>    
        ):  (
            <ul style = {{listStyle:"none"}}>
                {docente.map(alumno => (
                <li key = {alumno.legajo}> 
                    {alumno.legajo} - {alumno.nombre} - {alumno.carrera}
                    <br />
                    <button type="button" onClick={() => onEditarDocente(docente)}>Editar</button>
                    <button type="button" onClick={() => eliminarDocente(docente.dni)}>Eliminar</button>
                </li>
                ))}
            </ul> 
        )}
        </section>

    )
}