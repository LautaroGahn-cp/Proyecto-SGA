import { useEffect, useState } from "react"
const API_ALUMNOS = "http://localhost:3000/alumnos"

export function ListaAlumnos({actualizar}){
    const [alumnos, setAlumnos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function cargarAlumno(){
            setCargando (true)
            setError("")
            try {
                const respuesta = await fetch(API_ALUMNOS)
                if(!respuesta.ok){
                  throw new Error ("No se pudo obtener la lista", respuesta.status)  
                }
                const datos = await respuesta.json()
                setAlumnos(datos)
            }catch (error){
                console.error("Error de conexion", error)
                setError ("No se puede cargar la lista de alumnos")
            } finally {
                setCargando(false)
            }
        }

        cargarAlumno()
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
        {alumnos.length ===0 ?(
            <p>No hay alumnos registrados</p>    
        ):  (
            <ul style = {{listStyle:"none"}}>
                {alumnos.map(alumno => (
                <li key = {alumno.legajo}> 
                    {alumno.legajo} - {alumno.nombre} - {alumno.carrera}
                </li>
                ))}
            </ul> 
        )}
        </section>

    )
}