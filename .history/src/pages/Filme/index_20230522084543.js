/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";


function filme() {
  const { id } = useParams();
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
        });
    }
    loadFilme();

    return () => {
      console.log("componente desmontado");
    };

    if (loading) {
      return (
        <div className="filme-info">
          <h1>Carregando detalhes...</h1>
        </div>
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>ACESSANDO FILME {id}</h1>
    </div>
  );
}

export default filme;