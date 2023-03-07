// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
    document.querySelector("#missionTarget").innerHTML=    `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `;
}

function validateInput(testInput) { //input a string //returns "Empty", "Not a Number", or "Is a Number"
    let num = Number(testInput);
    if (testInput === "" || (typeof testInput) === "undefined" || (testInput) === null) { //null is an object
        return "Empty";
    }
    if (num % num === 0 || num === 0) {
        return "Is a Number";
    }
    if (num % num !== 0) {
        return "Not a Number";
    }
}

function formSubmission(form, pilotName, copilotName, fuelLevel, cargoMass) {
    let pilotStatus = document.querySelector("#pilotStatus");
    let copilotStatus = document.querySelector("#copilotStatus");
    let fuelStatus = document.querySelector("#fuelStatus");
    let cargoStatus = document.querySelector("#cargoStatus");
    let faultyItems = document.querySelector("#faultyItems");
    let launchStatus = document.querySelector("#launchStatus");

    pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;
    if (fuelLevel.value < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        fuelStatus.style.color = "rgb(199, 37, 78)";
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = "rgb(199, 37, 78)"
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        fuelStatus.style.color = "black";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        faultyItems.style.visibility = "hidden";
    }
    if (cargoMass.value > 10000) {
        cargoStatus.innerHTML = "Cargo mass too high for launch";
        cargoStatus.style.color = "rgb(199, 37, 78)";
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = "rgb(199, 37, 78)"
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        cargoStatus.style.color = "black";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        faultyItems.style.visibility = "hidden";
    }
}

async function myFetch() {

    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let num = Math.floor(Math.random()*planets.length);
    return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
