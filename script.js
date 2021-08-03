//After Practicing Dry
//sets the http GET object
const GET = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  },
};
//creates a url that thats parameters changes what streaming service and type the data is for
function url(streamingService, type) {
  return `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${streamingService}&type=${type}&genre=18&page=1&language=en`;
}
//fetches all data from a certain(SINGLE) streaming provider (Takes a string ` ` ) HTTP tag parameter can be added here in the future
function fetchByProvider(streamingService) {
  fetch(url(streamingService, `movie`), GET)
    .then((response) => {
      return response.json();
    })
    .then(console.log);
  fetch(url(streamingService, `series`), GET)
    .then((response) => {
      return response.json();
    })
    .then(console.log);
}
//creates a for loop that runs a parsed function for each element in the Array
function forLoop(array, fun) {
  for (let i = 0; i < array.length; i++) {
    fun(array[i]);
  }
}
//list of the current streaming providers
const streamingProviders = [`netflix`, `prime`, `hulu`];
//returns ALL off the data from the current streaming providers
forLoop(streamingProviders, fetchByProvider);