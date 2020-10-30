let filmData = document.getElementById("filmData")
let peopleData = document.getElementById("peopleData");
let planetsData = document.getElementById("planetsData");
let speciesData = document.getElementById("speciesData");
let starshipsData = document.getElementById("starshipsData");
let vehiclesData = document.getElementById("vehiclesData");

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
   
    showfilmdata(films.value.results);
    showpeopledata(peoples.value.results);
    showplanetsdata(planets.value.results);
    showspeciesdata(species.value.results);
    showstarshipsdata(starships.value.results);
    showvehiclesdata(vehicles.value.results);
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

function showplanetsdata(data) { 
  let tab =  
      `<tr> 
        <th>Name</th> 
        <th>Climate</th> 
        <th>Terrain</th> 
       </tr>`; 
  
  // Loop to access all rows  
  for (let r of data) { 
      tab += `<tr>  
  <td>${r.name} </td> 
  <td>${r.climate}</td> 
  <td>${r.terrain}</td>     
</tr>`; 
  } 
  // Setting innerHTML as tab variable 
  planetsData.innerHTML = tab; 
} 

function showspeciesdata(data) { 
  let tab =  
      `<tr> 
        <th>Name</th> 
        <th>Language</th> 
        <th>Classification</th> 
       </tr>`; 
  
  // Loop to access all rows  
  for (let r of data) { 
      tab += `<tr>  
  <td>${r.name} </td> 
  <td>${r.language}</td> 
  <td>${r.classification}</td>     
</tr>`; 
  } 
  // Setting innerHTML as tab variable 
  speciesData.innerHTML = tab; 
} 

function showstarshipsdata(data) { 
  let tab =  
      `<tr> 
        <th>Name</th> 
        <th>Model</th> 
        <th>Manufacturer</th> 
       </tr>`; 
  
  // Loop to access all rows  
  for (let r of data) { 
      tab += `<tr>  
  <td>${r.name} </td> 
  <td>${r.model}</td> 
  <td>${r.manufacturer}</td>     
</tr>`; 
  } 
  // Setting innerHTML as tab variable 
  starshipsData.innerHTML = tab; 
}

function showvehiclesdata(data) { 
  let tab =  
      `<tr> 
        <th>Name</th> 
        <th>Model</th> 
        <th>Manufacturer</th> 
       </tr>`; 
  
  // Loop to access all rows  
  for (let r of data) { 
      tab += `<tr>  
  <td>${r.name} </td> 
  <td>${r.model}</td> 
  <td>${r.manufacturer}</td>     
</tr>`; 
  } 
  // Setting innerHTML as tab variable 
  vehiclesData.innerHTML = tab; 
}

getAllData(urls);



