function renderMovie(movie) {
  console.log(movie);
  const movieContainer = document.querySelector("#movie-container");
  //create new div for movie
  const movieDiv = document.createElement("div");
  movieDiv.innerText = movie.title;

  const flicks = document.createElement("div");
  flicks.className = "card";

  const h2 = document.createElement("h2");
  h2.innerText = movie.title;

  const img = document.createElement("img");
  img.src = movie.posterURLs["500"];
  img.className = "movie-poster";

  flicks.append(h2);
  flicks.append(img);
  movieContainer.append(flicks);
}
