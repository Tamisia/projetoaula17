const apiKey = "6b92d594110474546814224526d5ab74";
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");
const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`;

function fetchMovieDetails() {
  fetch(detailsUrl)
    .then((response) => response.json())
    .then((data) => displayMovieDetails(data))
    .catch((error) => console.error("Erro:", error));
}

function displayMovieDetails(movie) {
  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById(
    "movie-poster"
  ).src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  document.getElementById("movie-overview").textContent = movie.overview;
}

fetchMovieDetails();