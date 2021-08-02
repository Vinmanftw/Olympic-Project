

fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&language=en",
    {
        method: "GET",
        headers: {
            "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    }
)
    .then((response) => {
        return response.json()
    })
    .then(console.log)


fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=series&genre=18&page=1&language=en",
    {
        method: "GET",
        headers: {
            "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    }
)
    .then((response) => {
        return response.json()
    }).then(console.log)


fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=prime&type=movie&genre=18&page=1&language=en",
    {
        method: "GET",
        headers: {
            "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    }
)
    .then((response) => {
        return response.json()
    }).then(console.log)
fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=prime&type=series&genre=18&page=1&language=en",
    {
        method: "GET",
        headers: {
            "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    }
)
    .then((response) => {
        return response.json()
    }).then(console.log)
fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hulu&type=movie&genre=18&page=1&language=en",
    {
        method: "GET",
        headers: {
            "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    }
)
    .then((response) => {
        return response.json()
    }).then(console.log)
fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hulu&type=series&genre=18&page=1&language=en",
    {
        method: "GET",
        headers: {
            "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    }
)
    .then((response) => {
        return response.json()
    }).then(console.log)

