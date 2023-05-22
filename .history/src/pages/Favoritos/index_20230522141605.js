/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../Favoritos/favoritos.css"
import { Link } from "react-router-dom";


function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse (minhaLista) || []) 

    }, [])

    return(
        <div className="meus-filmes">
            <h1>Meus filmes</h1>
            <ul>
                {filmes.map((item)=>{
                    return{
                        <li>
                    }
                })}
            </ul>
        </div>
    )
}
export default Favoritos;