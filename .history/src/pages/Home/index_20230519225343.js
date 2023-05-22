import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react'
import api from 'axios'
function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filmes, setFilmes] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function loadfilmes() {
      const response = await api.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=7add4681ffb4849375f1ea15840f0d3a&language=pt-BR",
        {
          params: {
            api_key: "7add4681ffb4849375f1ea15840f0d3a",
            language: "pt-BR",
            page: 1,
          },
        }
      );
      setFilmes(response.data.results.slice(0, 15));
    }
    loadfilmes();
  }, []);
  return (
    <div className='container'>
      <div className='lista-filmes'>
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt='filme.title'/>
              < Link to={`/filme/`}></Link>
            </article>

          )
        })}

      </div>
      
    </div>
  );
}

export default home;
