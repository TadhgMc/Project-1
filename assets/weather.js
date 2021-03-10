const weatherDiv = $('#weatherContainer');
const weatherInfo = $('#weatherInfo');
const tempSpot = $('#temp');
const feelsLike = $('#feelsLike');

// fetch request to get weather data
function getWeather() {
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/find?q=Columbus&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a';

    fetch(weatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //add to page here
        tempSpot.text(Math.floor(data.list[0].main.temp));
        feelsLike.text(Math.floor(data.list[0].main.feels_like));
        $('#icon').attr('src', `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`);
        $('#wConditions').text(data.list[0].weather[0].description);
        $('#windSpeed').text(Math.floor(data.list[0].wind.speed));
    })
}

getWeather();