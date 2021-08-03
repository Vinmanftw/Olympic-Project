const GET = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
    },
};

//creates a url that thats parameters changes what streaming service and type the data is for
function url(streamingService, type,pg) {
    return `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${streamingService}&type=${type}&genre=18&page=${pg}&language=en`;
}
//fetches all data from a certain(SINGLE) streaming provider (Takes a string ` ` ) HTTP tag parameter can be added here in the future
function fetchByProvider(streamingService,pg) {
    return fetch(url(streamingService, `movie`, pg), GET)
        .then((response) => {
            return response.json();
        })
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
let curIndex = 1;

    


// creates an eventlistener at a given location
function navigation(){
    document.querySelector('#next').addEventListener('click', ()=>{
        curIndex ++
        console.log(fetchByProvider(`netflix`,`${curIndex}`))
        console.log('righht')
        
    })
   
    document.querySelector('#back').addEventListener('click', ()=>{
        if(curIndex>1){
            curIndex --
            console.log(fetchByProvider(`netflix`,`${curIndex}`))
            console.log('left')
        }
        
    })
    
    
    

}

//list of the current streaming providers
const streamingProviders = [`netflix`];
//returns ALL off the data from the current streaming providers
//forLoop(streamingProviders, fetchByProvider);
// create buttons for all streaming providers on homepage



document.addEventListener('DOMContentLoaded', (e)=>{
    //e.preventDefault()
    navigation()
    fetchByProvider(`netflix`,`${curIndex}`)

})


