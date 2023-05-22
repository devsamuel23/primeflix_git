import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function filme(){

    const { id } = useParams();
    return(
        <div>
            <h1>ACESSANDO FILME {ID}</h1>
        </div>
    )
}

export default filme;