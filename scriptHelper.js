// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name}  </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`
    //    console.log(addDestinationInfo())
}

function validateInput(testInput) {
    let num = Number(testInput);
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(num)) {
        return "Not a Number";
    } else if (!isNaN(num)) {
        return "Is a Number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let lauchStatus = document.getElementById("launchStatus")
    //let faultyItem = document.getElementById("faultyItems")
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Invalied Input!");
    } else {
        list.style.visibility = "visible"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-polit ${copilot} is ready to launch`
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`
            cargoStatus.innerHTML = `Cargo mass too heavy for launch `
            lauchStatus.innerHTML = `Shuttle Not Ready for Launch`
            lauchStatus.style.color = "#C7254E"

        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = `Fuel level is high enough for launch`
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`
            lauchStatus.innerHTML = `Shuttle Not Ready for Launch`
            lauchStatus.style.color = "#C7254E"
        } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = `Fuel level is too low for launch`
            cargoStatus.innerHTML = `Cargo mass low enough for launch`
            lauchStatus.innerHTML = `Shuttle Not Ready for Launch`
            lauchStatus.style.color = "#C7254E"
        } else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = `Fuel level is high enough for launch`
            cargoStatus.innerHTML = `Cargo mass low enough for launch`
            lauchStatus.innerHTML = `Shuttle Ready for Launch`
            lauchStatus.style.color = "#419F6A"
        }
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
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
