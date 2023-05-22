import { BrowserRouter, Routes, Route } from "react-router-dom"; 


import Home from './pages/Home'

import Filme from "./pages/Filme";

function RoutesApp(){
    return (
      <BrowserRouter>
        <Routes>
          <route path="/" element={<Home />} />
          <route path="/filme/:id" element={<Filme />} />
        </Routes>
      </BrowserRouter>
    );
}

export default RoutesApp;