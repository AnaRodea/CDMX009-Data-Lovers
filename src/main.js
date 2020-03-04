import {
   getCharactersByGender, getCharactersByStatus, getCharactersBySpecies
//  getCharactersByEpisode
} from './data.js';



//  Nodos
let gends = document.querySelectorAll('.gen');
let specs = document.querySelectorAll(".spec");
let stats = document.querySelectorAll(".stat");
// let results = document.querySelector(".content");


//  Listeners con funciones anónimas
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
