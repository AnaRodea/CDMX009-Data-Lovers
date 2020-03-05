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

let results= [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
    }]

function createTablePerCharacter(array){
  credenciales.innerHTML =""
  for(let item of array){
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

console.log(createTablePerCharacter(results));
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
