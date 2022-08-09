// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let targetMission = document.getElementById("missionTarget");
    targetMission.innerHTML+= 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>`;
    

}

function validateInput(testInput) {

    if (testInput === ''){
        return "Empty";
    }
    if (isNaN(Number(testInput))) {
        return "Is a Number";
    } else if (isNaN(Number(testInput)) === false){
        return "Not a Number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
        alert("All Fields Required.");
    }

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ){
        alert("Wrong Data Type Entered.");
    } else {

        list.style.visibility = "visible";

        pilotStatus.innerHTML = `${pilot} Ready`;
        copilotStatus.innerHTML = `${copilot} Ready`;

        if (fuelLevel < 10000){
            fuelStatus.innerHTML = `${fuelLevel} liters is not enough fuel!`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = 'red';
        };

        if (cargoLevel > 10000){
            cargoStatus.innerHTML = `${cargoLevel} kgs is too much cargo!`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = 'red';
        };

        if(cargoLevel < 10000 && fuelLevel > 10000){
            document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch.`;
            document.getElementById("launchStatus").style.color = 'green';
        }
    }
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json;
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.floor(Math.random()*planets.length);
    return planets[i];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
