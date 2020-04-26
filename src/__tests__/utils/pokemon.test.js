import * as pokemon from 'utils/pokemon';

describe('pokemon - utils', () => {
    it('getPokemonIdFromUrl', () => {
        expect(pokemon.getPokemonIdFromUrl('https://pokeapi.co/api/v2/pokemon/15/')).toBe(15);
    });
});
