var tmApiKey = '3uaJfxHrGuBFeFN7pSjJEALAzNssmWGc';

function getLocalEvents() {
    let localEventsUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?city=columbus&apikey=3uaJfxHrGuBFeFN7pSjJEALAzNssmWGc';

    fetch(localEventsUrl)
    .then(function(response) {
        return response.json();
    })

}