// Write your JavaScript code here!

window.addEventListener("load", function () {
    let form = document.querySelector("#launchForm");
    document.querySelector("#faultyItems").style.visibility = "hidden";
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        let message;
        let sendAlert = false;
        
        if (validateInput(pilotName.value) !== "Not a Number") {
                message += `Please enter a pilot name. <br>`
                sendAlert = true;
            };
         if (validateInput(copilotName.value) !== "Not a Number") {
                message += `Please enter a co-pilot name. <br>`
                sendAlert = true;
            };
        if (validateInput(fuelLevel.value) !== "Is a Number") {
                message += `Please enter the amount of fuel. <br>`
                sendAlert = true;
            };
        if (validateInput(cargoMass.value) !== "Is a Number") {
                message += `Please enter the mass of the cargo <br>`
                sendAlert = true;
            };

        if (sendAlert) {
            alert(message);
            event.preventDefault();
        } else {
            formSubmission(document, form, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
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
