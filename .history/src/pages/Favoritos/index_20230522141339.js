/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../Favoritos/favoritos.css"


function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse) || 

    })

    return(
        <div>
            <h1>TELA FAVORITOS</h1>
        </div>
    )
}
export default Favoritos;