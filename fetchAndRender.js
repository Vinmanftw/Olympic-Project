function fetchAndRender(params) {
  const { provider = "netflix", page = 1, keyword = "" } = params;
  fetchByProvider(provider, page).then((res) => {
    console.log(res.results);
    res.results.forEach(renderMovie);
  });
}
