import React, { useEffect, useState } from 'react';

import * as pokemonService from 'services/pokemon';

import Pokedex from 'screens/Pokedex';

const PokedexContainer = () => {
    const [pokemonsRequest, setPokemonsRequest] = useState({
        loading: true,
        count: 0,
        results: []
    });

    useEffect(() => {
        const getPokemons = async () => {
            const { data: { count, results } } = await pokemonService.fetchPokemons(0);

            setPokemonsRequest(state => ({
                ...state,
                count,
                results,
                loading: false
            }));
        };
        getPokemons();
    }, []);

    const handleScrollEnd = async () => {
        if (pokemonsRequest.loading) return;

        setPokemonsRequest(state => ({
            ...state,
            loading: true
        }));

        const { data: { results } } = await pokemonService.fetchPokemons(pokemonsRequest.results.length);

        setPokemonsRequest(state => ({
            ...state,
            results: [...state.results, ...results],
            loading: false
        }));
    };

    return (
        <Pokedex
            loading={pokemonsRequest.loading}
            pokemons={pokemonsRequest.results}
            onScrollEnd={handleScrollEnd}
        />
    );
};

export default PokedexContainer;
