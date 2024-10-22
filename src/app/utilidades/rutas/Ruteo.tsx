import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/Inicio";

export const Ruteo = () =>{
    return(
        <Routes>
           <Route path="/" element={<Inicio/>} />
        </Routes>
    )
}