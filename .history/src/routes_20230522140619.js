import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home'
import Favoritos from "./pages/Favoritos";
import Filme from "./pages/Filme";
import Header from "./components/Header";
import Erro from './pages/Erro'
function RoutesApp(){
    return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />
          <route path="/favoritos"

          <Route path="*" element={ <Erro/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default RoutesApp;