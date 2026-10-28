import Alumnos from "./pages/Alumnos"
import Docentes from "./pages/Docentes"
import { FAQ } from "./pages/FAQ"
//import SelectorTema from "./componentes/SelectorTema"
import { Route, Routes } from "react-router-dom"
import LayoutPpal from "./layout/LayoutPpal"
import Inicio from "./pages/Inicio"



function App()
{  
  return(
   <Routes> 
        <Route path="/" element={<LayoutPpal />}> 
        <Route index element={<Inicio />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="docentes" element = {<Docentes/>} />
        <Route path="/ayuda" element={<FAQ />} />
        </Route>
    </Routes>    
  )  
}

export default App
  