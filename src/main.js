import {
   getCharactersByGender, getCharactersByStatus, getCharactersBySpecies
//  getCharactersByEpisode
} from './data.js';


//  console.log(unknownStatus());
//  console.log(episodeOne());
// console.log(vampireCharacters());
// console.log(animalCharacters());
//  console.log(deadCharacters());
//  console.log(unknownStatus());
//  console.log(aliveCharacters());
//  console.log(maleCharacters());
//  console.log(genderlessCharacters());
//  console.log(episodeOne());
//Selectores con los siguientes valores:
// gend="Female"
// gend="Male"
// gend="Genderless"
// stat="Alive", "Dead", "unknown"
//epi='https://rickandmortyapi.com/api/episode/1'
// spec="Human", "Poopybutthole", "Superhuman"
// "Robot", "Mytholog"
// "Vampire"
// "Animal"
// "Cronenberg"
// "Alien"
// "Humanoid"
//

//  Nodos
let gends = document.querySelectorAll('.gen');
let specs = document.querySelectorAll(".spec");
let stats = document.querySelectorAll(".stat");

// // //Listeners
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
