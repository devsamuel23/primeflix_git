import axios from "axios";

//Base da url: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=7add4681ffb4849375f1ea15840f0d3a&language=pt-BR


const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
export default api;