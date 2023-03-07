// Write your JavaScript code here!

window.addEventListener("load", function () {
    let form = document.querySelector("#launchForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        let formArrayString = [pilotName, copilotName];
        let formArrayNumber = [fuelLevel, cargoMass];
        let sendAlert = false;
        for (let item of formArrayString) {
            if (validateInput(item.value) !== "Not a Number") {
                sendAlert = true;
            };
        }
        for (let item of formArrayNumber) {
            if (validateInput(item.value) !== "Is a Number") {
                sendAlert = true;
            };
        }
        if (sendAlert) {
            alert("Please enter information in all fields.");
            event.preventDefault();
        } else {
            formSubmission(document, form, pilotName, copilotName, fuelLevel, cargoMass);
        }
    });



    let listedPlanets;
    let listedPlanetsResponse= myFetch(); // call fetch and return response.json()
    listedPlanetsResponse.then(function (result) { // waits for Promise to fulfill
        listedPlanets = result;
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets) //returns random object from array
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image) //select object values
    })

});
