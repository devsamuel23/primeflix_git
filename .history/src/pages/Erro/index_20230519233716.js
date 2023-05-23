import { LINK, Link } from 'react-router-dom'

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            < Link> Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro;