import { Outlet } from "react-router-dom"
import Header from "../componentes/Header"
import Footer from "../componentes/Piepagina"

export default function LayoutPpal() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}