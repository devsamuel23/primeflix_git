/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";


function filme(){
    const { id } = useParams();

    useEffect(()=> {
        async function loadFilme(){
        await 
        }

    },[])

    return(
        <div>
            <h1>ACESSANDO FILME {id}</h1>
        </div>
    )
}

export default filme;