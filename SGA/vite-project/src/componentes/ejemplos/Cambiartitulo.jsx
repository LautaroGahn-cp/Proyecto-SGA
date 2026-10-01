import { useState } from "react";

export function Cambiartitulo(){
    const[titulo, setTitulo] = useState("Inicio")

    return(
        <>
        <h2>{titulo}</h2>
        <div style={{display: "flex", justifyContent: "center", gap: 10}}>
            <button onClick={() => setTitulo("Alumnos")} style={{fontSize: "20px", color: "lightblue", padding: "5px"}}>Alumnos</button>
            <button onClick={() => setTitulo("Docentes")} style={{fontSize: "20px", color: "lightblue", padding: "5px"}}>Docentes</button>
        </div>
        </>
    )
}