function renderMovie(movie) {
  console.log(movie);
  const movieContainer = document.querySelector("#movie-container");
  //create new div for movie
  const movieDiv = document.createElement("div");
  movieDiv.innerText = movie.title;

  const flicks = document.createElement("div");
  flicks.className = "card";

  const h4 = document.createElement("h4");
  h4.innerText = movie.title;

  const img = document.createElement("img");
  img.src = movie.posterURLs["500"];
  img.className = "movie-poster";

  const url = `https://www.imdb.com/title/${movie.imdbID}/`;
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.append(img);

  flicks.append(h4);
  flicks.append(link);
  movieContainer.append(flicks);
}
