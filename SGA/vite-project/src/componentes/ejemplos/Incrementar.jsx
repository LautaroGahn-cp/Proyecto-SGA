import { useState } from "react"
function Incrementar (){
    const [contador, setContador] = useState(0)
    const [mostrar, setMostrar] = useState(false)

    function incremento (){
        setContador(contador + 1)
    }

    function decremento(){
        setContador(contador - 1)
    }
    return (
        <>
        <h1>Contador: {contador}</h1>
        <div style={{display: "flex", justifyContent: "center", gap: 10}}>
        <button onClick={incremento} style ={{width: "50px", height: "40px", fontSize: ""}}>+</button>
        <button onClick={decremento} style ={{width: "50px", height: "40px", fontSize: ""}}>-</button>
        </div>
        <br />
        <button onClick={() => setMostrar(!mostrar)}>Mostrar / Ocultar</button>
        {mostrar && <p>Informacion Vicible</p>}
        </>
    )
}

export default Incrementar