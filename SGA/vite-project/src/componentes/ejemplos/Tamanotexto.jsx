import { useState } from "react";

export function Tamanotexto (){
    const [tamanio, setTamanio] = useState ("20px")

    return(
        <>
        <p style={{fontSize: tamanio}}>
            Binevenido a Programacion IV
        </p>
        <div style={{display: "flex", justifyContent: "center", gap:"10px", marginTop:"10px"}}>
            <button onClick={() => setTamanio("10px")}>Pequeño</button>
            <button onClick={() => setTamanio("20px")}>Mediano</button>
            <button onClick={() => setTamanio("30px")}>Grande</button>
        </div>
        </>
    )
}