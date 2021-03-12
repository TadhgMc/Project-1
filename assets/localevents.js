// Constants for Events in Ohio and Events in Columbus buttons
const pickOhioButton = document.querySelector("#pickOhio");
const pickColumbusButton = document.querySelector("#pickColumbus");
const localActivitiesContainer = document.querySelector("#localActivitiesContainer");
const stateActivitiesContainer = document.querySelector("#stateActivitiesContainer");

// Click to hide Columbus and show Ohio
pickOhioButton.addEventListener("click", () => {
    localActivitiesContainer.classList.add("hide");
    stateActivitiesContainer.classList.remove("hide");
});

// Click to hide Ohio and show Columbus
pickColumbusButton.addEventListener("click", () => {
    stateActivitiesContainer.classList.add("hide");
    localActivitiesContainer.classList.remove("hide");
});


// Variables for Columbus events
var columbusEvent1Name = document.querySelector("#columbusEvent1Name");
var columbusEvent1Date = document.querySelector("#columbusEvent1Date");
var columbusEvent1Time = document.querySelector("#columbusEvent1Time");
var columbusEvent2Name = document.querySelector("#columbusEvent2Name");
var columbusEvent2Date = document.querySelector("#columbusEvent2Date");
var columbusEvent2Time = document.querySelector("#columbusEvent2Time");
var columbusEvent3Name = document.querySelector("#columbusEvent3Name");
var columbusEvent3Date = document.querySelector("#columbusEvent3Date");
var columbusEvent3Time = document.querySelector("#columbusEvent3Time");

// Retrieve data for Columbus events
fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=Columbus&apikey=EAwhjPFguOMlx2wGq5Uw1hujpkkBbPYN")

    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Event 1
        var columbusEvent1NameValue = data["_embedded"]["events"]["0"]["name"];
        columbusEvent1Name.innerHTML = columbusEvent1NameValue + ":  ";
        var columbusEvent1DateValue = data["_embedded"]["events"]["0"]["dates"]["start"]["localDate"];
        columbusEvent1Date.innerHTML = columbusEvent1DateValue + " at ";
        var columbusEvent1TimeValue = data["_embedded"]["events"]["0"]["dates"]["start"]["localTime"];
        columbusEvent1Time.innerHTML = columbusEvent1TimeValue;

        // Event 2
        var columbusEvent2NameValue = data["_embedded"]["events"]["1"]["name"];
        columbusEvent2Name.innerHTML = columbusEvent2NameValue + ":  ";
        var columbusEvent2DateValue = data["_embedded"]["events"]["1"]["dates"]["start"]["localDate"];
        columbusEvent2Date.innerHTML = columbusEvent2DateValue + " at ";
        var columbusEvent2TimeValue = data["_embedded"]["events"]["1"]["dates"]["start"]["localTime"];
        columbusEvent2Time.innerHTML = columbusEvent2TimeValue;
        
        // Event 3
        var columbusEvent3NameValue = data["_embedded"]["events"]["2"]["name"];
        columbusEvent3Name.innerHTML = columbusEvent3NameValue + ":  ";
        var columbusEvent3DateValue = data["_embedded"]["events"]["2"]["dates"]["start"]["localDate"];
        columbusEvent3Date.innerHTML = columbusEvent3DateValue + " at ";
        var columbusEvent3TimeValue = data["_embedded"]["events"]["2"]["dates"]["start"]["localTime"];
        columbusEvent3Time.innerHTML = columbusEvent3TimeValue;
    });

    // Connect Columbus data to html ids
    var columbusEvent1Name = document.querySelector("#columbusEvent1Name");
    var columbusEvent1Date = document.querySelector("#columbusEvent1Date");
    var columbusEvent1Time = document.querySelector("#columbusEvent1Time");
    var columbusEvent2Name = document.querySelector("#columbusEvent2Name");
    var columbusEvent2Date = document.querySelector("#columbusEvent2Date");
    var columbusEvent2Time = document.querySelector("#columbusEvent2Time");
    var columbusEvent3Name = document.querySelector("#columbusEvent3Name");
    var columbusEvent3Date = document.querySelector("#columbusEvent3Date");
    var columbusEvent3Time = document.querySelector("#columbusEvent3Time");


// Variables for Ohio Events
var ohioEvent1Name = document.querySelector("#ohioEvent1Name");
var ohioEvent1Date = document.querySelector("#ohioEvent1Date");
var ohioEvent1Time = document.querySelector("#ohioEvent1Time");
var ohioEvent2Name = document.querySelector("#ohioEvent2Name");
var ohioEvent2Date = document.querySelector("#ohioEvent2Date");
var ohioEvent2Time = document.querySelector("#ohioEvent2Time");
var ohioEvent3Name = document.querySelector("#ohioEvent3Name");
var ohioEvent3Date = document.querySelector("#ohioEvent3Date");
var ohioEvent3Time = document.querySelector("#ohioEvent3Time");

// Retrieve data for Columbus events
fetch("https://app.ticketmaster.com/discovery/v2/events.json?stateCode=OH&apikey=EAwhjPFguOMlx2wGq5Uw1hujpkkBbPYN")

    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Event 1
        var ohioEvent1NameValue = data["_embedded"]["events"]["0"]["name"];
        ohioEvent1Name.innerHTML = ohioEvent1NameValue + ":  ";
        var ohioEvent1DateValue = data["_embedded"]["events"]["0"]["dates"]["start"]["localDate"];
        ohioEvent1Date.innerHTML = ohioEvent1DateValue + " at ";
        var ohioEvent1TimeValue = data["_embedded"]["events"]["0"]["dates"]["start"]["localTime"];
        ohioEvent1Time.innerHTML = ohioEvent1TimeValue;

        // Event 2
        var ohioEvent2NameValue = data["_embedded"]["events"]["1"]["name"];
        ohioEvent2Name.innerHTML = ohioEvent2NameValue + ":  ";
        var ohioEvent2DateValue = data["_embedded"]["events"]["1"]["dates"]["start"]["localDate"];
        ohioEvent2Date.innerHTML = ohioEvent2DateValue + " at ";
        var ohioEvent2TimeValue = data["_embedded"]["events"]["1"]["dates"]["start"]["localTime"];
        ohioEvent2Time.innerHTML = ohioEvent2TimeValue;
        
        // Event 3
        var ohioEvent3NameValue = data["_embedded"]["events"]["2"]["name"];
        ohioEvent3Name.innerHTML = ohioEvent3NameValue + ":  ";
        var ohioEvent3DateValue = data["_embedded"]["events"]["2"]["dates"]["start"]["localDate"];
        ohioEvent3Date.innerHTML = ohioEvent3DateValue + " at ";
        var ohioEvent3TimeValue = data["_embedded"]["events"]["2"]["dates"]["start"]["localTime"];
        ohioEvent3Time.innerHTML = ohioEvent3TimeValue;
    });