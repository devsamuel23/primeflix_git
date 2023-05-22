/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../Favoritos/favoritos.css"


function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse (minhaLista) || []) 

    }, [])

    return(
        <div className="meus-filmes">
            <h1>Meus filmes</h1>
        </div>
    )
}
export default Favoritos;