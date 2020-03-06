import {
   getCharactersByGender, getCharactersByStatus, getCharactersBySpecies
//  getCharactersByEpisode
} from './data.js';


//  Nodos
const gends = document.querySelectorAll('.gen');
const specs = document.querySelectorAll('.spec');
const stats = document.querySelectorAll('.stat');
const credenciales = document.querySelector('#Credenciales');

// Función callback para crear la tarjeta de cada personaje

function createTablePerCharacter(array) {
  credenciales.innerHTML = '';
  for (let item of array) {
  credenciales.innerHTML += `
    <table>
      <tr>
        <th>
          <img class= "" width=300 src=" ${item.image} " alt="">
          <h2 class="table content" id="name">Name: ${item.name} </h2>
          <p class="table content" id="species"> Especie: ${item.species} </p>
          <p class="table content" id="gender">Género: ${item.gender} </p>
          <p  class="table content" id="status"> Status: ${item.status}</p>
          <p class="table content" id="origin"> Origen:${item.origin} </p>
          <p class="table content" id="location"> Ubicación: ${item.location} </p>
          <p class="table content" id="episode"> Episodios:${item.episode} </p>
        </th>
      </tr>
      </table>
  `
}
}


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
