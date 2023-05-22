import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function filme(){

    const { id } = useParams()
    return(
        <div>
            <h1>BEM VINDO A PAGINA DETALHES DO FILME</h1>
        </div>
    )
}

export default filme;