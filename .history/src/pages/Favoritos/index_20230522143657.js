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

    function excluirFilme(id){
        let filtroFimes = filmes.filter((item)=> {
            return(item.id !== id)
        })

        setFilmes(filtroFimes);
        localStorage.setItem("@primeflix", JSON)
    }
    return(
        <div className="meus-filmes">
            <h1>Meus filmes</h1>
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                           <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={()=>excluirFilme(item.id)}>Excluir</button>
                           </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favoritos;