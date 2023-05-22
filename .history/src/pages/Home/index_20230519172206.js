import React, { UseEffect, UseState } from "react";
import api from "../../services/api";

function home() {
  const [filmes, setFilmes] = UseState([]);

  UseEffect(() => {
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
      console.log(response);
    }
    loadfilmes();
  }, []);
  return (
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  );
}

export default home;
