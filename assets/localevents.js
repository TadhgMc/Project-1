const localEventsDiv = $('#localActivitiesContainer');
const localEventsInfo = $('#localActivities');
var tmApiKey = '3uaJfxHrGuBFeFN7pSjJEALAzNssmWGc';

//check if city=columbus in url is correct & works
function getLocalEvents() {
    let localEventsUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?city=columbus&apikey=3uaJfxHrGuBFeFN7pSjJEALAzNssmWGc';

    fetch(localEventsUrl)
    .then(function(response) {
        return response.json();
    })

}
