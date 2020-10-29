let divFilms = document.querySelector(".films");
let divPeople = document.querySelector(".people");
let divPlanets = document.querySelector(".planets");
let divSpecies = document.querySelector(".species");
let divStarShips = document.querySelector(".starships");
let divVehicles = document.querySelector(".vehicles");


const urls = [
	'https://swapi.dev/api/films/1',
	'https://swapi.dev/api/people/1',
	'https://swapi.dev/api/planets/1',
	'https://swapi.dev/api/species/1',
	'https://swapi.dev/api/starships/1',
   	'https://swapi.dev/api/vehicles/1'
];

const getAllData = async function () {
  try {
    const [films, people, planets, species, starships, vehicles] = await Promise.allSettled(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      }),
    );
    console.log("films", films);
    console.log("people", people);
    console.log("planets", planets);
    console.log("species", species);
    console.log("starships", starships);
    console.log("vehicles", vehicles);
  } catch (err) {
    console.log("Error Encountered !! ", err);
  }
};

const showDataFilms = (data)  => {
	data.forEach(dt => {
		var pElement = document.createElement("p");
		pElement.appendChild(document.createTextNode(dt));
		divFilms.append(pElement);
	}
}


