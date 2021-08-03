const GET = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  },
};
//creates a url that thats parameters changes what streaming service and type the data is for
function url(streamingService, type) {
  return `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${streamingService}&type=${type}&genre=18&page=${pg}&language=en`;
}
//fetches all data from a certain(SINGLE) streaming provider (Takes a string ` ` ) HTTP tag parameter can be added here in the future
function fetchByProvider(streamingService) {
  fetch(url(streamingService, `movie`), GET)
    .then((response) => {
      return response.json();
    })
    .then(console.log);
  // fetch(url(streamingService, `series`), GET)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then(console.log);
}
//creates a for loop that runs a parsed function for each element in the Array
function forLoop(array, fun) {
  for (let i = 0; i < array.length; i++) {
    fun(array[i]);
  }
}
//allow you to run a for loop that parses a function with 2 parameters
function forLoop2(array, fun, secondPara) {
  for (let i = 0; i < array.length; i++) {
    fun(array[i], secondPara);
  }
}
// creates button in requested location gives an id = to name 'div .streamTabs'
function createButtons(stringName, location) {
  const div = document.createElement(`div`);
  const bttn = document.createElement("button");
  bttn.id = `${stringName}`;
  bttn.textContent = `${stringName}`;
  div.appendChild(bttn);
  document.querySelector(`${location}`).appendChild(div);
}
// creates an eventlistener at a given location
function eventlistener(type, location) {}
//list of the current streaming providers
const streamingProviders = [`netflix`, `prime`, `hulu`];
//returns ALL off the data from the current streaming providers
//forLoop(streamingProviders, fetchByProvider);
// create buttons for all streaming providers on homepage
forLoop2(streamingProviders, createButtons, `.streamTabs`);
