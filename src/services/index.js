import axios from 'axios';

export const pokeApi = axios.create({
    baseURL: process.env.REACT_APP_POKE_API,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
