let filmData = document.getElementById("filmData")
let peopleData = document.getElementById("peopleData");
let divPlanets = document.getElementById("planetsData");
let divSpecies = document.getElementById("speciesData");
let divStarShips = document.getElementById("starshipsData");
let divVehicles = document.getElementById("vehiclesData");

const urls = [
	'https://swapi.dev/api/films/',
	'https://swapi.dev/api/people/',
	'https://swapi.dev/api/planets/',
	'https://swapi.dev/api/species/',
	'https://swapi.dev/api/starships/',
  'https://swapi.dev/api/vehicles/'
];


const getAllData = async function (allUrls) {
  try {
    const [films, peoples, planets, species, starships, vehicles] = await Promise.allSettled(
      allUrls.map(async function (url) {
        const response = await fetch(url);
        var data = await response.json();
        return data;
      }),
    );
    console.log(films.value.results);
    console.log(peoples.value.results);
    console.log(planets.value.results);
    console.log(species.value.results);
    console.log(starships.value.results);
    console.log(vehicles.value.results);
    showfilmdata(films.value.results);
    showpeopledata(peoples.value.results);
  } catch (err) {
    console.log("Error Encountered !! ", err);
  }
};


function showfilmdata(data) { 
  let tab =  
      `<tr> 
        <th>Title</th> 
        <th>Producer</th> 
        <th>Director</th> 
       </tr>`; 
  
  // Loop to access all rows  
  for (let r of data) { 
      tab += `<tr>  
  <td>${r.title} </td> 
  <td>${r.producer}</td> 
  <td>${r.director}</td>     
</tr>`; 
  } 
  // Setting innerHTML as tab variable 
  filmData.innerHTML = tab; 
} 

function showpeopledata(data) { 
  let tab =  
      `<tr> 
        <th>Name</th> 
        <th>Gender</th> 
        <th>HomeWorld</th> 
       </tr>`; 
  
  // Loop to access all rows  
  for (let r of data) { 
      tab += `<tr>  
  <td>${r.name} </td> 
  <td>${r.gender}</td> 
  <td>${r.homeworld}</td>     
</tr>`; 
  } 
  // Setting innerHTML as tab variable 
  peopleData.innerHTML = tab; 
} 

getAllData(urls);



