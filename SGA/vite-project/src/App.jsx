// import Titulo from "./componentes/Titulo"
// import {Navbar} from "./componentes/Navbar"
// import {Piepagina} from "./componentes/Piepagina"
// import TarjetaAlumno from "./componentes/TarjetaAlumnos"
//import { Cambiarmsj } from "./componentes/ejemplos/Cambiarmsj"
//import { Adivina } from "./componentes/ejemplos/Adivina"
//import { Cambiartitulo } from "./componentes/ejemplos/Cambiartitulo"
//import Incrementar from "./componentes/ejemplos/Incrementar"
//import { Tamanotexto } from "./componentes/ejemplos/Tamanotexto"
//import { FormularioA } from "./componentes/FormularioA"
import { useEffect, useState } from "react"
//import { Pantalla } from "./componentes/Pantalla"





function App()
{
  const [nombre, setNombre] = useState("")
  
  useEffect(() => {
    if (nombre){
      document.title = `Hola ${nombre}`
    }else{
      document.title = "Mi aplicacion"
    }
  }, [nombre])
  return(
    <>
    <input
    value = {nombre}
    onChange = {(e) => setNombre(e.target.value)}
    placeholder="Escribir tu nombre"
    />
    <h2>Hola {nombre}</h2>
    </>
  )
}

export default App

{/* <Navbar />
    <Titulo texto="Docentes"  color="magenta" />
    <h2>Administracion de Alumnos</h2>
    <TarjetaAlumno 
    nombre="Ana Lopez"
    carrera="Programacion" 
    edad= "20"
    />
    <br />
     <TarjetaAlumno 
    nombre="Juan Lopez"
    carrera="Cocinero" 
    edad= "30"
    />
    <br />
    <Piepagina /> */}
    {/*</Incrementar> */}

    {/* <Cambiartitulo /> */}

    {/* <Adivina /> */}
    {/* <Cambiarmsj  /> 
    <Tamanotexto /> */}
    {/* <FormularioA /> */}
    {/* <Pantalla /> */}

  //const [contador, setContador] = useState(0)
  // const [alumno] = useState({
  //   nombre: "Ana",
  //   curso: "Programacion IV"
  // })
  // useEffect(()=>{
  //   document.title = `Alumno: ${alumno.nombre}`
  // }, [alumno])

  // useEffect(()=>{
  //   document.title = `Contador: ${contador}`
  // }, [contador])
  
  // return(
  //   <>
  //     <h2>{contador}</h2>
  //     <button onClick={() => setContador (contador + 1)}></button>
  //   </>
  // )
