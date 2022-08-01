// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {

    if (testInput === ''){
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";
    } else if (isNaN(testInput) === false){
        return "Is a Number"
    }

}
    //){
    //     window.alert("HUMAN: ALL. FIELDS. ARE. REQUIRED!");
    // };
    
    // if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
    //     window.alert("HUMAN: ALL. FIELDS. ARE. REQUIRED!");
    // };

    // if (pilotInput === ''){
    //     return("Empty");
    // };
    // if(typeof pilotInput === Number){
    //     return("Is a Number");
    // };

    // if (copilotInput === ''){
    //     return("Empty");
    // };
    // if(typeof copilotInput === Number){
    //     return("Is a Number");
    // };

    // if (fuelLevelInput === ''){
    //     return("Empty");
    // };
    // if(typeof fuelLevelInput === String){
    //     return("Not a Number");
    // };

    // if (cargoMassInput === ''){
    //     return("Empty");
    // };
    // if(typeof cargoMassInput === String){
    //     return("Not a Number");
    // };

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
        alert("HUMAN: ALL. FIELDS. ARE. REQUIRED!");
    }

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ){
        alert("HUMAN: Wrong Data Type!");
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
            document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
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
