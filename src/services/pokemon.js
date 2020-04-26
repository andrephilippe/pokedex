import { pokeApi } from './index';

export const getPokemonImg = id => (
    `/images/pokemons/${id.toString().padStart(3, 0)}.png`
);

export const fetchPokemons = offset => {
    const limit = process.env.REACT_APP_POKEMONS_REQUEST_LIMIT;
    return pokeApi.get(`pokemon?offset=${offset}&limit=${limit}`);
};

export const fetchPokemonAbility = abilityNameOrId => (
    pokeApi.get(`ability/${abilityNameOrId}`)
);

export const fetchPokemonForm = nameOrId => (
    pokeApi.get(`pokemon-form/${nameOrId}`)
);

export const fetchPokemon = nameOrId => (
    pokeApi.get(`pokemon/${nameOrId}`)
);

export const fetchPokemonWithDetails = async (nameOrId) => {
    const { data: pokemon } = await pokeApi.get(`pokemon/${nameOrId}`);

    pokemon.abilities = await Promise.all(
        pokemon.abilities.map(async ({ ability }) => {
            const { data } = await fetchPokemonAbility(ability.name);
            return {
                ...ability,
                ability: data
            };
        })
    );

    pokemon.forms = await Promise.all(
        pokemon.forms.map(async (form) => {
            const { data } = await fetchPokemonForm(form.name);
            return {
                ...form,
                form: data
            };
        })
    );

    return pokemon;
};
