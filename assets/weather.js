const weatherDiv = $('#weatherContainer');
const weatherInfo = $('#weatherInfo');
const tempSpot = $('#temp');
const feelsLike = $('#feelsLike');

// fetch request to get current weather data
function getWeather() {
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/find?q=Columbus&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a';

    fetch(weatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //adding current weather data to page
        tempSpot.text(Math.floor(data.list[0].main.temp));
        feelsLike.text(Math.floor(data.list[0].main.feels_like));
        $('#icon').attr('src', `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`);
        $('#wConditions').text(data.list[0].weather[0].description);
        $('#windSpeed').text(Math.floor(data.list[0].wind.speed));

    }) //end of second .then()

}; //end of getWeather function

//call the function to get current weather data and render to page, upon initial page load
getWeather();

/* adds event listener to forecast button that when clicked, the function gets the value from the select element and fetches forecast data,
 then creates elements with weather info within the elements*/
$('#foreBtn').on('click', function(event){
    event.preventDefault();

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=columbus&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a")
    .then(function (response) {
        return response.json();
    })
    .then( function (data) {
        //number that indicates which data set of forecasted weather info to use
        let foreListItem = 7;
        const foreDays = $('#numOfFore').val();
        
        $('div.forecastContainer').html("<div class='forecastCards'></div>");

        for (i=0; i < foreDays ; i++) {
            //get data first, then store in variables that also create the elements and content that go with each piece of weather info
            let foreIcon = $("<img>").attr('src', `https://openweathermap.org/img/wn/${data.list[foreListItem].weather[0].icon}@2x.png`);
            let foreDate = $("<p class='forecastDate'></p>").text(moment(data.list[foreListItem].dt_txt).format('dddd, M/D/YYYY'));
            let foreTemp = $("<p class='foreTemp'>&#8457</p>").prepend('Forecasted Temp: ' + Math.floor(data.list[foreListItem].main.temp));
            let foreConditions = $("<p class='foreCond'>Forecasted Conditions: </p>").append(data.list[foreListItem].weather[0].description);

            //add weather info elements to its respective forecast day div
            $('.forecastCards').append(`<div class='foreDay${i}'></div>`).append(foreIcon,foreDate,foreTemp,foreConditions,"<hr>");

            // adding to number to have it choose the next days forecasted weather data upon next loop
            foreListItem = foreListItem + 7;

        } //end "for" loop
        
    }); //end of second .then()
    
}); //end button listener and its function
