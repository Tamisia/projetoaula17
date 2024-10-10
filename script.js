const apiKey = "6b92d594110474546814224526d5ab74";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
const movieContainer = document.getElementById("movie-container");

function fetchMovies() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMovies(data.results))
    .catch((error) => console.error("Erro:", error));
}

function displayMovies(movies) {
  movieContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    movieDiv.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p>${movie.release_date}</p>
        `;
    movieContainer.appendChild(movieDiv);

    movieDiv.addEventListener("click", () => {
      window.location.href = `details.html?id=${movie.id}`;
    });
  });
}

fetchMovies();