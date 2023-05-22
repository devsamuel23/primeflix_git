import { useEffect, useState }  from "react";
import api from '../'

function home(){
const [filmes, setFilmes] = useState([]);

useEffect(()=>{

    async function loadfilmes(){
        const response = await 

}
    loadfilmes()
},[])
    return(
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default home;