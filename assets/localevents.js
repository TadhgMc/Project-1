// Constants for Events in Ohio and Events in Columbus buttons
const pickOhioButton = document.querySelector("#pickOhio");
const pickColumbusButton = document.querySelector("#pickColumbus");
const localActivitiesContainer = document.querySelector("#localActivitiesContainer");
const stateActivitiesContainer = document.querySelector("#stateActivitiesContainer");


function ohioScreen() {
    localActivitiesContainer.classList.add("hide");
    stateActivitiesContainer.classList.remove("hide");
    localStorage.setItem("savedScreen", "Ohio");
}

// Click to hide Columbus and show Ohio
pickOhioButton.addEventListener("click", ohioScreen);

// Click to hide Ohio and show Columbus
function columbusScreen() {
    stateActivitiesContainer.classList.add("hide");
    localActivitiesContainer.classList.remove("hide");
    localStorage.setItem("savedScreen", "Columbus");
}

pickColumbusButton.addEventListener("click", columbusScreen);

// Check 
if (localStorage.getItem("savedScreen") === "Ohio") {
    ohioScreen();
}

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
var columbusEvent4Name = document.querySelector("#columbusEvent4Name");
var columbusEvent4Date = document.querySelector("#columbusEvent4Date");
var columbusEvent4Time = document.querySelector("#columbusEvent4Time");
var columbusEvent5Name = document.querySelector("#columbusEvent5Name");
var columbusEvent5Date = document.querySelector("#columbusEvent5Date");
var columbusEvent5Time = document.querySelector("#columbusEvent5Time");
var columbusEvent6Name = document.querySelector("#columbusEvent6Name");
var columbusEvent6Date = document.querySelector("#columbusEvent6Date");
var columbusEvent6Time = document.querySelector("#columbusEvent6Time");
var columbusEvent7Name = document.querySelector("#columbusEvent7Name");
var columbusEvent7Date = document.querySelector("#columbusEvent7Date");
var columbusEvent7Time = document.querySelector("#columbusEvent7Time");
var columbusEvent8Name = document.querySelector("#columbusEvent8Name");
var columbusEvent8Date = document.querySelector("#columbusEvent8Date");
var columbusEvent8Time = document.querySelector("#columbusEvent8Time");

// Retrieve data for Columbus events
fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=Columbus&apikey=EAwhjPFguOMlx2wGq5Uw1hujpkkBbPYN")

    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Columbus Event 1
        var columbusEvent1NameValue = data["_embedded"]["events"]["0"]["name"];
        columbusEvent1Name.innerHTML = columbusEvent1NameValue + ":  ";
        var columbusEvent1DateValue = data["_embedded"]["events"]["0"]["dates"]["start"]["localDate"];
        columbusEvent1Date.innerHTML = columbusEvent1DateValue + " at ";
        var columbusEvent1TimeValue = data["_embedded"]["events"]["0"]["dates"]["start"]["localTime"];
        columbusEvent1Time.innerHTML = columbusEvent1TimeValue;

        // Columbus Event 2
        var columbusEvent2NameValue = data["_embedded"]["events"]["1"]["name"];
        columbusEvent2Name.innerHTML = columbusEvent2NameValue + ":  ";
        var columbusEvent2DateValue = data["_embedded"]["events"]["1"]["dates"]["start"]["localDate"];
        columbusEvent2Date.innerHTML = columbusEvent2DateValue + " at ";
        var columbusEvent2TimeValue = data["_embedded"]["events"]["1"]["dates"]["start"]["localTime"];
        columbusEvent2Time.innerHTML = columbusEvent2TimeValue;
        
        // Columbus Event 3
        var columbusEvent3NameValue = data["_embedded"]["events"]["2"]["name"];
        columbusEvent3Name.innerHTML = columbusEvent3NameValue + ":  ";
        var columbusEvent3DateValue = data["_embedded"]["events"]["2"]["dates"]["start"]["localDate"];
        columbusEvent3Date.innerHTML = columbusEvent3DateValue + " at ";
        var columbusEvent3TimeValue = data["_embedded"]["events"]["2"]["dates"]["start"]["localTime"];
        columbusEvent3Time.innerHTML = columbusEvent3TimeValue;

        // Columbus Event 4
        var columbusEvent4NameValue = data["_embedded"]["events"]["3"]["name"];
        columbusEvent4Name.innerHTML = columbusEvent4NameValue + ":  ";
        var columbusEvent4DateValue = data["_embedded"]["events"]["3"]["dates"]["start"]["localDate"];
        columbusEvent4Date.innerHTML = columbusEvent4DateValue + " at ";
        var columbusEvent4TimeValue = data["_embedded"]["events"]["3"]["dates"]["start"]["localTime"];
        columbusEvent4Time.innerHTML = columbusEvent4TimeValue;

        // Columbus Event 5
        var columbusEvent5NameValue = data["_embedded"]["events"]["4"]["name"];
        columbusEvent5Name.innerHTML = columbusEvent5NameValue + ":  ";
        var columbusEvent5DateValue = data["_embedded"]["events"]["4"]["dates"]["start"]["localDate"];
        columbusEvent5Date.innerHTML = columbusEvent5DateValue + " at ";
        var columbusEvent5TimeValue = data["_embedded"]["events"]["4"]["dates"]["start"]["localTime"];
        columbusEvent5Time.innerHTML = columbusEvent5TimeValue;
        
        // Columbus Event 6
        var columbusEvent6NameValue = data["_embedded"]["events"]["5"]["name"];
        columbusEvent6Name.innerHTML = columbusEvent6NameValue + ":  ";
        var columbusEvent6DateValue = data["_embedded"]["events"]["5"]["dates"]["start"]["localDate"];
        columbusEvent6Date.innerHTML = columbusEvent6DateValue + " at ";
        var columbusEvent6TimeValue = data["_embedded"]["events"]["5"]["dates"]["start"]["localTime"];
        columbusEvent6Time.innerHTML = columbusEvent6TimeValue;        

        // Columbus Event 7
        var columbusEvent7NameValue = data["_embedded"]["events"]["6"]["name"];
        columbusEvent7Name.innerHTML = columbusEvent7NameValue + ":  ";
        var columbusEvent7DateValue = data["_embedded"]["events"]["6"]["dates"]["start"]["localDate"];
        columbusEvent7Date.innerHTML = columbusEvent7DateValue + " at ";
        var columbusEvent7TimeValue = data["_embedded"]["events"]["6"]["dates"]["start"]["localTime"];
        columbusEvent7Time.innerHTML = columbusEvent7TimeValue;
        
        // Columbus Event 8
        var columbusEvent8NameValue = data["_embedded"]["events"]["7"]["name"];
        columbusEvent8Name.innerHTML = columbusEvent8NameValue + ":  ";
        var columbusEvent8DateValue = data["_embedded"]["events"]["7"]["dates"]["start"]["localDate"];
        columbusEvent8Date.innerHTML = columbusEvent8DateValue + " at ";
        var columbusEvent8TimeValue = data["_embedded"]["events"]["7"]["dates"]["start"]["localTime"];
        columbusEvent8Time.innerHTML = columbusEvent8TimeValue;        


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
var columbusEvent4Name = document.querySelector("#columbusEvent4Name");
var columbusEvent4Date = document.querySelector("#columbusEvent4Date");
var columbusEvent4Time = document.querySelector("#columbusEvent4Time");
var columbusEvent5Name = document.querySelector("#columbusEvent5Name");
var columbusEvent5Date = document.querySelector("#columbusEvent5Date");
var columbusEvent5Time = document.querySelector("#columbusEvent5Time");
var columbusEvent6Name = document.querySelector("#columbusEvent6Name");
var columbusEvent6Date = document.querySelector("#columbusEvent6Date");
var columbusEvent6Time = document.querySelector("#columbusEvent6Time");
var columbusEvent7Name = document.querySelector("#columbusEvent7Name");
var columbusEvent7Date = document.querySelector("#columbusEvent7Date");
var columbusEvent7Time = document.querySelector("#columbusEvent7Time");
var columbusEvent8Name = document.querySelector("#columbusEvent8Name");
var columbusEvent8Date = document.querySelector("#columbusEvent8Date");
var columbusEvent8Time = document.querySelector("#columbusEvent8Time");


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
var ohioEvent4Name = document.querySelector("#ohioEvent4Name");
var ohioEvent4Date = document.querySelector("#ohioEvent4Date");
var ohioEvent4Time = document.querySelector("#ohioEvent4Time");
var ohioEvent5Name = document.querySelector("#ohioEvent5Name");
var ohioEvent5Date = document.querySelector("#ohioEvent5Date");
var ohioEvent5Time = document.querySelector("#ohioEvent5Time");
var ohioEvent6Name = document.querySelector("#ohioEvent6Name");
var ohioEvent6Date = document.querySelector("#ohioEvent6Date");
var ohioEvent6Time = document.querySelector("#ohioEvent6Time");
var ohioEvent7Name = document.querySelector("#ohioEvent7Name");
var ohioEvent7Date = document.querySelector("#ohioEvent7Date");
var ohioEvent7Time = document.querySelector("#ohioEvent7Time");
var ohioEvent8Name = document.querySelector("#ohioEvent8Name");
var ohioEvent8Date = document.querySelector("#ohioEvent8Date");
var ohioEvent8Time = document.querySelector("#ohioEvent8Time");

// Retrieve data for Columbus events
fetch("https://app.ticketmaster.com/discovery/v2/events.json?stateCode=OH&apikey=EAwhjPFguOMlx2wGq5Uw1hujpkkBbPYN")

    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Ohio Event 1
        var ohioEvent1NameValue = data["_embedded"]["events"]["0"]["name"];
        ohioEvent1Name.innerHTML = ohioEvent1NameValue + ":  ";
        var ohioEvent1DateValue = data["_embedded"]["events"]["0"]["dates"]["start"]["localDate"];
        ohioEvent1Date.innerHTML = ohioEvent1DateValue + " at ";
        var ohioEvent1TimeValue = data["_embedded"]["events"]["0"]["dates"]["start"]["localTime"];
        ohioEvent1Time.innerHTML = ohioEvent1TimeValue;

        // Ohio Event 2
        var ohioEvent2NameValue = data["_embedded"]["events"]["1"]["name"];
        ohioEvent2Name.innerHTML = ohioEvent2NameValue + ":  ";
        var ohioEvent2DateValue = data["_embedded"]["events"]["1"]["dates"]["start"]["localDate"];
        ohioEvent2Date.innerHTML = ohioEvent2DateValue + " at ";
        var ohioEvent2TimeValue = data["_embedded"]["events"]["1"]["dates"]["start"]["localTime"];
        ohioEvent2Time.innerHTML = ohioEvent2TimeValue;
        
        // Ohio Event 3
        var ohioEvent3NameValue = data["_embedded"]["events"]["2"]["name"];
        ohioEvent3Name.innerHTML = ohioEvent3NameValue + ":  ";
        var ohioEvent3DateValue = data["_embedded"]["events"]["2"]["dates"]["start"]["localDate"];
        ohioEvent3Date.innerHTML = ohioEvent3DateValue + " at ";
        var ohioEvent3TimeValue = data["_embedded"]["events"]["2"]["dates"]["start"]["localTime"];
        ohioEvent3Time.innerHTML = ohioEvent3TimeValue;

        // Ohio Event 4
        var ohioEvent4NameValue = data["_embedded"]["events"]["3"]["name"];
        ohioEvent4Name.innerHTML = ohioEvent4NameValue + ":  ";
        var ohioEvent4DateValue = data["_embedded"]["events"]["3"]["dates"]["start"]["localDate"];
        ohioEvent4Date.innerHTML = ohioEvent4DateValue + " at ";
        var ohioEvent4TimeValue = data["_embedded"]["events"]["3"]["dates"]["start"]["localTime"];
        ohioEvent4Time.innerHTML = ohioEvent4TimeValue;

        // Ohio Event 5
        var ohioEvent5NameValue = data["_embedded"]["events"]["4"]["name"];
        ohioEvent5Name.innerHTML = ohioEvent5NameValue + ":  ";
        var ohioEvent5DateValue = data["_embedded"]["events"]["4"]["dates"]["start"]["localDate"];
        ohioEvent5Date.innerHTML = ohioEvent5DateValue + " at ";
        var ohioEvent5TimeValue = data["_embedded"]["events"]["4"]["dates"]["start"]["localTime"];
        ohioEvent5Time.innerHTML = ohioEvent5TimeValue;

        // Ohio Event 6
        var ohioEvent6NameValue = data["_embedded"]["events"]["5"]["name"];
        ohioEvent6Name.innerHTML = ohioEvent6NameValue + ":  ";
        var ohioEvent6DateValue = data["_embedded"]["events"]["5"]["dates"]["start"]["localDate"];
        ohioEvent6Date.innerHTML = ohioEvent6DateValue + " at ";
        var ohioEvent6TimeValue = data["_embedded"]["events"]["5"]["dates"]["start"]["localTime"];
        ohioEvent6Time.innerHTML = ohioEvent6TimeValue;

        // Ohio Event 7
        var ohioEvent7NameValue = data["_embedded"]["events"]["6"]["name"];
        ohioEvent7Name.innerHTML = ohioEvent7NameValue + ":  ";
        var ohioEvent7DateValue = data["_embedded"]["events"]["6"]["dates"]["start"]["localDate"];
        ohioEvent7Date.innerHTML = ohioEvent7DateValue + " at ";
        var ohioEvent7TimeValue = data["_embedded"]["events"]["6"]["dates"]["start"]["localTime"];
        ohioEvent7Time.innerHTML = ohioEvent7TimeValue;

        // Ohio Event 8
        var ohioEvent8NameValue = data["_embedded"]["events"]["7"]["name"];
        ohioEvent8Name.innerHTML = ohioEvent8NameValue + ":  ";
        var ohioEvent8DateValue = data["_embedded"]["events"]["7"]["dates"]["start"]["localDate"];
        ohioEvent8Date.innerHTML = ohioEvent8DateValue + " at ";
        var ohioEvent8TimeValue = data["_embedded"]["events"]["7"]["dates"]["start"]["localTime"];
        ohioEvent8Time.innerHTML = ohioEvent8TimeValue;
    });

