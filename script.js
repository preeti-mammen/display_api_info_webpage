let divFilms = document.getElementById("films")
let divPeople = document.getElementById("people");
let divPlanets = document.getElementById("planets");
let divSpecies = document.getElementById("species");
let divStarShips = document.getElementById("starships");
let divVehicles = document.getElementById("vehicles");

const urls = [
	'https://swapi.dev/api/films/',
	'https://swapi.dev/api/people/',
	'https://swapi.dev/api/planets/',
	'https://swapi.dev/api/species/',
	'https://swapi.dev/api/starships/',
   	'https://swapi.dev/api/vehicles/'
];

const getAllData = async function () {
  try {
    const [films, people, planets, species, starships, vehicles] = await Promise.allSettled(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      }),
    );
    showData(divFilms, films);
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

const showData = (element, jsondata)  => {
	let ele = element;
	jsondata.forEach(data => { 
		const pEle = document.createElement(‘p’);
    	pEle.innerText = data.text();
    	ele.append(pEle);
	})
}

getAllData();


