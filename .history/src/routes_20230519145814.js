import { BrowserRouter, Routes, route } from "react-router-dom"; 


import Home from './pages/Home'

import Filme from "./pages/Filme";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <route path ="/" elemente={ <Home/>}/>
            
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;