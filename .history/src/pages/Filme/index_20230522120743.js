/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./filme-info.css";

function filme() {
  const { id } = useParams();
  const navigation = useNavigate();
  const [filme, setFilmes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "7add4681ffb4849375f1ea15840f0d3a",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilmes(response.data);
        })
        .catch(() => {
          setLoading(false);
          navigation("/", { replace: true });
          return;
        });
    }
    loadFilme();

    return () => {
      console.log("componente desmontado");
    };

    // eslint-disable-next-line no-unreachable
    if (loading) {
      return (
        <div className="filme-info">
          <h1>Carregando detalhes...</h1>
        </div>
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, id]);

  function salverFilme(){
    const minhaLista = localStorage.getitem("@primeflix")

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvo) =)

  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />

      <h3>sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} /10</strong>

      <div className="area-buttons">
        <button onClick={salverFilme}>Salvar</button>
        <button>
          <a
            target="blanck"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default filme;
