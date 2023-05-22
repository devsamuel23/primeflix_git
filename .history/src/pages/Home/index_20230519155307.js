import { useEffect, useState }  from "react";

function home(){
const [filmes, setFilmes] = useState([]);

useEffect(()=>{

    async function loadfilmes(){
        const response = 

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