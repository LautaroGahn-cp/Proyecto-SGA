import { useState } from "react";

export function Cambiarmsj(){
    const[mensaje, setMensaje] = useState("Hola, alumno")

    function cambiarMensje(){
        setMensaje(mensaje === "Hola, alumno"
        ? "Bienvenido a Programacion IV"
        : "Hola, alumno"
        )
    }

    return(
        <>
        <p>{mensaje}</p>
        <div style={{display: "flex", justifyContent: "center", gap: 10}}>
            <button onClick={cambiarMensje}style={{fontSize: "20px", color: "Blcak", padding: "5px"}}>Cambiar Mensaje</button>
        </div>
        </>
    )
}