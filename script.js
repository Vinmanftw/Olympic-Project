//list of the current streaming providers
const streamingProviders = [`netflix`];
//returns ALL off the data from the current streaming providers
//forLoop(streamingProviders, fetchByProvider);
// create buttons for all streaming providers on homepage

document.addEventListener("DOMContentLoaded", (e) => {
  //e.preventDefault()
  navigation();
  fetchAndRender({
    provider: "netflix",
    page: curIndex,
  });
});
