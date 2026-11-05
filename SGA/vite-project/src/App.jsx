import Alumnos from "./pages/Alumnos"
import Docentes from "./pages/Docentes"
import Materias from "./pages/Materias"
import { FAQ } from "./pages/FAQ"
//import SelectorTema from "./componentes/SelectorTema"
import { Route, Routes } from "react-router-dom"
import LayoutPpal from "./layout/LayoutPpal"
import Inicio from "./pages/Inicio"
//import { Login } from "./pages/Login"


function App()
{  
  return(
   <Routes> 
        <Route path="/" element={<LayoutPpal />}> 
        <Route index element={<Inicio />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="docentes" element = {<Docentes/>} />
        <Route path="materias" element = {<Materias/>} />
        <Route path="/ayuda" element={<FAQ />} />
        </Route> 
    </Routes>    
    //<Login />
  )  
}

export default App
  