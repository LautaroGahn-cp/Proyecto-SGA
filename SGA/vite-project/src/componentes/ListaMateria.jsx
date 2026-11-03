import { useEffect, useState } from "react"
const API_MATERIAS = "http://localhost:3000/materias"

export function ListaMaterias({actualizar, onMateriaCreado, onEditarMateria}){
    const [materia, setMateria] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    async function eliminarMateria(codigo) {
        const confirmar = window.confirm("¿Estas seguro de querer eliminar el recurso?")
        if (!confirmar) {
            return
        } 
        try{
            const respuesta = await fetch(`${API_MATERIAS}/${codigo}`, {
                method: "DELETE"
            })
            if (!respuesta.ok) {
                throw new Error(`Error al eliminar el materia. Estado http: ${respuesta.status}`)
            }
            onMateriaCreado()
        } catch(error){
            console.error("Error al eliminar el materia:", error)
            alert(error.message || "No se puedo eliminar el materia")
            setError("No se puedo actualizar la lista")
        }
        finally{
            setCargando(false)
        }
    }

    useEffect(() => {
        async function cargarMateria(){
            setCargando (true)
            setError("")
            try {
                const respuesta = await fetch(API_MATERIAS)
                if(!respuesta.ok){
                  throw new Error ("No se pudo obtener la lista", respuesta.status)  
                }
                const datos = await respuesta.json()
                setMateria(datos)
            }catch (error){
                console.error("Error de conexion", error)
                setError ("No se puede cargar la lista de materiass")
            } finally {
                setCargando(false)
            }
        }

        cargarMateria()
    }, [actualizar])
    if (cargando){
        return <p>Cargando Materias...</p>
    }
    if (error){
        return <p role="alert">{error}</p>
    }
    return(
        <section className="sga-lista sga-lista--materias">
        <h2>Materias</h2>
        {materia.length ===0 ?(
            <p>No hay materias registradas</p>    
        ):  (
            <ul style = {{listStyle:"none"}}>
                {materia.map(materia=> (
                <li key = {materia.codigo}> 
                    {materia.codigo} - {materia.nombre} - {materia.cargaHoraria} - {materia.estado}
                    <br />
                    <button type="button" onClick={() => onEditarMateria(materia)}>Editar</button>
                    <button type="button" onClick={() => eliminarMateria(materia.codigo)}>Eliminar</button>
                </li>
                ))}
            </ul> 
        )}
        </section>

    )
}