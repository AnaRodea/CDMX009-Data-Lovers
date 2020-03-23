import {
  getCharactersByGender, getCharactersByStatus, getCharactersBySpecies, getCharactersByEpisode
} from './data.js';

describe('getCharactersByGender', () => {

  it("should be a function", () => {
    expect(typeof getCharactersByGender).toBe('function');
  });

  it("should return an array", () => {
    expect(typeof getCharactersByGender()).toBe('array');
  });


  describe('getCharactersByStatus', () => {

    it("should be a function", () => {
      expect(typeof getCharactersByStatus).toBe('function');
    });
  
    it("should return an array", () => {
      expect(typeof getCharactersByStatus()).toBe('array');
    });


  describe('getCharactersBySpecies', () => {

    it("should be a function", () => {
      expect(typeof getCharactersBySpecies).toBe('function');
    });
  
    it("should return an array", () => {
      expect(typeof getCharactersBySpecies()).toBe('array');
    });

    describe('getCharactersByEpisode', () => {

      it("should be a function", () => {
        expect(typeof getCharactersByEpisode).toBe('function');
      });
    
      it("should return an array", () => {
        expect(typeof getCharactersByEpisode()).toBe('array');
      });
    });
    