function renderMovie(movie) {
  console.log(movie);
  const movieContainer = document.querySelector("#movie-container");
  //create new div for movie
  const movieDiv = document.createElement("div");
  movieDiv.innerText = movie.title;

  movieContainer.append(movieDiv);
}
