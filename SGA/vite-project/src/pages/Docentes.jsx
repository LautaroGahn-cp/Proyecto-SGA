import {ListaDocentes} from "../componentes/ListaDocente"
import { useState} from "react"
import {FormularioD} from "../componentes/FormularioD"

export default function Docentes() {
  const [actualizar, setActualizar] = useState(0)
  const [docenteEditar, setDocenteEditar] = useState(null)
  
  function docenteCreado(){
    setActualizar(valor => valor+1)
    setDocenteEditar(null)
  }
  
  function seleccionarDocente(docente){
      setDocenteEditar(docente)
  }

return(
<>
  <main>
    <FormularioD key={docenteEditar?.dni ?? "nuevo"}
    onDocenteCreado={docenteCreado}
    docenteEditar={docenteEditar}
    onCancelar={() => setDocenteEditar(null)}/> 
    <ListaDocentes actualizar={actualizar}
    onDocenteCreado={docenteCreado}
    onEditarDocente={seleccionarDocente}/> 
    </main>
</>
)

}