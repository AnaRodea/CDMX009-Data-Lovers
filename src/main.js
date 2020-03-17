import {
   getCharactersByGender, getCharactersByStatus, getCharactersBySpecies, getCharactersByEpisode
} from './data.js';


//  Nodos
const gends = document.querySelectorAll('.gen');
const specs = document.querySelectorAll('.spec');
const stats = document.querySelectorAll('.stat');
const epis = document.querySelectorAll(".epi");
const credenciales = document.querySelector('#Credenciales');
const slider = document.querySelector("#Slider");

// Función callback para crear la tarjeta de cada personaje

function createTablePerCharacter(array) {
  credenciales.innerHTML = '';
  for (let item of array) {
  credenciales.innerHTML +=
  `<div class="flip-card">
    <div class="flip-card-inner">
      <div class= "front">
        <img class= "" width=300px src="${item.image}" alt="">
        <h2 class="" id="name">${item.name} </h2> </div>
          <div class="back">
            <p id="name"> Name:${item.name}</p> 
            <p id="species"> Especie:${item.species},${item.type}</p>
            <p id="gender">Género:${item.gender}</p>
            <p id="status"> Status:${item.status}</p>
            <p id="origin"> Origen:${item.origin.name} </p>
            <p id="location"> Ubicación:${item.location.name} </p>
          </div>
      </div>
  </div>`
}
slider.style = "display:none";
}
//TO DO => <p id="episode"> Episodios:"${item.episode}"</p>

//  Listeners-botones con funciones anónimas
gends.forEach(btn=>btn.addEventListener('click', e=>{
  createTablePerCharacter(getCharactersByGender(e.target.id));}))

specs.forEach(btn=>btn.addEventListener('click', e=>{
  createTablePerCharacter(getCharactersBySpecies(e.target.id))
}
))

stats.forEach(btn=>btn.addEventListener('click', e=>{
  createTablePerCharacter(getCharactersByStatus(e.target.id))
}
))

epis.forEach(btn=>btn.addEventListener('click', e=>{
  createTablePerCharacter(getCharactersByEpisode(e.target.id))
}
))
