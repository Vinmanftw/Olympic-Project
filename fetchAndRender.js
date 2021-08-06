function fetchAndRender(params) {
  const { provider = "netflix", page = 1, keyword = "" } = params;
  const movieContainer = document.querySelector("#movie-container");
  movieContainer.innerText = "";
  fetchByProvider(provider, page, keyword).then((res) => {
    console.log(res.results);
    res.results.forEach(renderMovie);
  });
}
