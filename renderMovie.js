function renderMovie(movie) {
  console.log(movie);
  const movieContainer = document.querySelector("#movie-container");
  //create new div for movie
  const movieDiv = document.createElement("div");
  movieDiv.innerText = movie.title;
  //creates a card for a single movie 
  const flicks = document.createElement("div");
  flicks.className = "card";
  //creates and sets title for current movie 
  const h4 = document.createElement("h4");
  h4.innerText = movie.title;
  //creates and sets Image for current movie
  const img = document.createElement("img");
  img.src = movie.posterURLs["500"];
  img.className = "movie-poster";
  //creates and sets Url link to current movie and appends the image to it
  const url = `https://www.imdb.com/title/${movie.imdbID}/`;
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.append(img);
  //appends title and link to the card then appends the card to the movieContainer
  flicks.append(h4);
  flicks.append(link);
  movieContainer.append(flicks);
}
