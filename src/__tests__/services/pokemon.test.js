import mockAxios from '__mocks__/axios';
import * as pokemon from 'services/pokemon';

describe('pokemon - services', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('getPokemonImg', () => {
        expect(pokemon.getPokemonImg(5)).toBe('/images/pokemons/005.png');
        expect(pokemon.getPokemonImg(15)).toBe('/images/pokemons/015.png');
    });

    it('fetchPokemons', async () => {
        pokemon.fetchPokemons(0);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(`pokemon?offset=${0}&limit=${42}`);

        pokemon.fetchPokemons(42);
        expect(mockAxios.get).toHaveBeenCalledTimes(2);
        expect(mockAxios.get).toHaveBeenCalledWith(`pokemon?offset=${42}&limit=${42}`);
    });

    it('fetchPokemonAbility', async () => {
        pokemon.fetchPokemonAbility(5);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith('ability/5');
    });

    it('fetchPokemonForm', async () => {
        pokemon.fetchPokemonForm('charizard');
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith('pokemon-form/charizard');
    });

    it('fetchPokemon', async () => {
        pokemon.fetchPokemon('charizard');
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith('pokemon/charizard');
    });

    it('fetchPokemonWithDetails', async () => {
        pokemon.fetchPokemonWithDetails('charizard');
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith('pokemon/charizard');
    });
});
