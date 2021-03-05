function getWeather() {
    let weatherUrl = 'http://api.openweathermap.org/data/2.5/find?q=Columbus&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a';

    fetch(weatherUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //add to page here
        console.log(data.list[0].main.temp);
    })
}