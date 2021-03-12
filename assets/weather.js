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


//need to make a button that activates this.. can probably put this function into that addeventlistener
$('#foreBtn').on('click', function(event){
    event.preventDefault();
    console.log($('#numOfFore').val());

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=columbus&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a")
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then( function (data) {
        //taking data from weather api and putting it onto the page
        console.log(data);

        const foreDays = $('#numOfFore').val();
        console.log(foreDays);
        for (i=0; i < foreDays ; i++) {
            console.log("test");
            
        }
        
    });
    
})
