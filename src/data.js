import data from './data/rickandmorty/rickandmorty.js';

//  Filters by gender
export const femaleCharacters = () => data.results.filter((item) => item.gender === 'Female');
export const maleCharacters = () => data.results.filter((item) => item.gender === 'Male');
export const genderlessCharacters = () => data.results.filter((item) => item.gender === 'Genderless');

//  Filters by episode
export const episodeOne = () => data.results.filter((item) => item.episode == "https://rickandmortyapi.com/api/episode/1");

//Filters by status
export const aliveCharacters = () => data.results.filter((item) => item.status == 'Alive');
export const deadCharacters = () => data.results.filter((item) => item.status == 'Dead');
export const unknownStatus = () => data.results.filter((item) => item.status === 'unknown');

//  Filters by species
export const humanCharacters = () => data.results.filter((item) => item.species === 'Human');
export const humanoidCharacters = () => data.results.filter((item) => item.species === 'Humanoid');
export const alienCharacters = () => data.results.filter((item) => item.species === 'Alien');
export const cronenbergCharacters = () => data.results.filter((item) => item.species === 'Cronenberg');
export const animalCharacters = () => data.results.filter((item) => item.species === 'Animal');
export const humanoidCharacters = () => data.results.filter((item) => item.species === 'Humanoid');
export const mythologCharacters = () => data.results.filter((item) => item.species === 'Mytholog');
export const robotCharacters = () => data.results.filter((item) => item.species === 'Robot');

//species:
unknown
//Vampire
//Poopybutthole
//Superhuman
//Cyborg
