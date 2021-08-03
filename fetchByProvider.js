const GET = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  },
};

//creates a url that thats parameters changes what streaming service and type the data is for
function url(streamingService, type, pg) {
  return `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${streamingService}&type=${type}&genre=18&page=${pg}&language=en`;
}
//fetches all data from a certain(SINGLE) streaming provider (Takes a string ` ` ) HTTP tag parameter can be added here in the future
function fetchByProvider(streamingService, pg) {
  return fetch(url(streamingService, `movie`, pg), GET).then((response) => {
    return response.json();
  });
}
