import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/Inicio";
import { Componentes } from "../../componentes/Componentes";
import { Dispositivos } from "../../componentes/Dispositivos";
import { Soporte } from "../../componentes/Soporte";

export const Ruteo = () =>{
    return(
        <Routes>
           <Route path="/" element={<Inicio/>} />
           <Route path="/comp" element={<Componentes/>} />
           <Route path="/dips" element={<Dispositivos/>} />
           <Route path="/supp" element={<Soporte/>} />
        </Routes>
    )
}