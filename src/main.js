import {
   getCharactersByGender, getCharactersByStatus, getCharactersBySpecies, array
//  getCharactersByEpisode
} from './data.js';


//  Nodos
const gends = document.querySelectorAll('.gen');
const specs = document.querySelectorAll('.spec');
const stats = document.querySelectorAll('.stat');
const credenciales = document.querySelector ("#Credenciales");

// Funciones con callbacks

function createTablePerCharacter(array){
  credenciales.innerHTML =""
  for(let item of data.results){
    credenciales.innerHTML += `
    <table>
      <tr>
        <th>
          <img class= "flex" src=" ${item.image}" alt="">
          <h2 class="table content" id="name">"Name: " ${item.name} </h2>
          <p class="table content" id="species">"Especie: " ${item.species} </p>
          <p class="table content" id="gender"> "Género: " ${item.gender} </p>
          <p  class="table content" id="status"> "Status: " ${item.status} </p>
          <p class="table content" id="origin"> "Origen: "${item.origin} </p>
          <p class="table content" id="location"> "Ubicación: "${item.location} </p>
          <p class="table content" id="episode"> "Episodios: "${item.episode} </p>
        </th>
      </tr>
      </table>
  `
  }
}

// //  Pasos para crear elementos en JS
// //  1. crear el elementos
// const table = document.createElement('table');
//
// //  2. Modificar el elemento, darle atributos
//
//
// //  3. Colocar el elemento en algún lugar
// //  3.1 Seleccionar el padre
// const section = document.querySelector("#Credenciales");
//
// //  3.2 Le asignamos un hijo nuevo al padre
// section.appendChild(table);





//  Listeners-botones con funciones anónimas
gends.forEach(btn=>btn.addEventListener('click', e=>{
  console.log(getCharactersByGender(e.target.id))
}
))

specs.forEach(btn=>btn.addEventListener('click', e=>{
  console.log(getCharactersBySpecies(e.target.id))
}
))

stats.forEach(btn=>btn.addEventListener('click', e=>{
  console.log(getCharactersByStatus(e.target.id))
}
))

// Ejemplo Bliss crear opcion dentro del selector
// let results = document.createElement("item")
// item.name="Name"
// item.gender="Gender"
// content.appendChild(item)
