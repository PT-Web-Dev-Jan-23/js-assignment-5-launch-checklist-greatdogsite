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
    if (num % num !== 0) {
        return "Not a Number";
    }
    if (num % num === 0) {
        return "Is a Number";
    }
}

function formSubmission(document, form, pilotName, copilotName, fuelLevel, cargoMass) {
    let pilotStatus = document.querySelector("#pilotStatus");
    let copilotStatus = document.querySelector("#copilotStatus");
    let fuelStatus = document.querySelector("#fuelStatus");
    let cargoStatus = document.querySelector("#cargoStatus");

    pilotStatus.innerHTML = `${pilotName.value} Ready.`;
    copilotStatus.innerHTML = `${copilotName.value} Ready.`;
    let ready = true;
    if (fuelLevel.value < 10000) {
        fuelStatus.innerHTML = "There is not enough fuel for the journey.";
        fuelStatus.style.color = "red";
        ready = false;
    } else {
        fuelStatus.innerHTML = "There is enough fuel for the journey.";
        fuelStatus.style.color = "black";
    }
    if (cargoMass.value > 10000) {
        cargoStatus.innerHTML = "Fuel level high enough for launch.";
        cargoStatus.style.color = "red";
        ready = false;
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch.";
        cargoStatus.style.color = "black";
    }
    if (!ready) {
        document.querySelector("#faultyItems").style.visibility = "visible";
        document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch.";
        document.querySelector("#launchStatus").style.color = "red";
    } else {
        document.querySelector("#launchStatus").innerHTML = "Shuttle  ready for launch.";
        document.querySelector("#launchStatus").style.color = "green";
        document.querySelector("#faultyItems").style.visibility = "hidden";
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
