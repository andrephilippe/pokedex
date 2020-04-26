export const getPokemonIdFromUrl = url => (
    Number(url.split('/')[6])
);
