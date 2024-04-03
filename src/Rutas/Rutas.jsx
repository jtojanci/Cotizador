import {Home} from "../Home/Home"
import { Formulario } from "../Formulario/Formulario"

import {Routes,Route} from "react-router-dom"


export function Rutas(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Formulario></Formulario>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
            </Routes>
        </>
    )

}