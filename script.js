// const { addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let targetPlanet = pickPlanet(listedPlanets)
        addDestinationInfo(document, targetPlanet.name, targetPlanet.diameter, targetPlanet.star, targetPlanet.distance, targetPlanet.moons, targetPlanet.image)

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })



    let gather = document.querySelector("form");

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    gather.addEventListener("submit", function (event) {
        event.preventDefault()

        let nameOfCopilot = document.querySelector("input[name = copilotName]")
        let copilot = nameOfCopilot.value
        let nameOfPilot = document.querySelector("input[name = pilotName]")
        let pilot = nameOfPilot.value
        let gasLevel = document.querySelector("input[name = fuelLevel]")
        let fuelLevel = gasLevel.value
        let packages = document.querySelector("input[name = cargoMass]")
        let cargoLevel = packages.value

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });
});