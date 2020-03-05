import {
   getCharactersByGender, getCharactersByStatus, getCharactersBySpecies
//  getCharactersByEpisode
} from './data.js';



//  Nodos
const gends = document.querySelectorAll('.gen');
const specs = document.querySelectorAll(".spec");
const stats = document.querySelectorAll(".stat");
// const name = document.querySelector("#name")
// const img = document.querySelector("img");
// const gender = document.querySelector("#gender")
// const species = document.querySelector("#species")
// <p class="" id="status">`Status: ${status}`</p>
// <p class="" id="origin"> `Lugar de origen: ${origin}`</p>
// <p class="" id="location"> `Lugar: ${location}`</p>
// <p class="" id="episode"> `Episodios: ${Episode}`</p>
// let results = document.querySelector(".content");

//Funciones con callbacks
let nuevoLink



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
