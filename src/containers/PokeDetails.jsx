import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as pokemonService from 'services/pokemon';

import PokeDetails from 'screens/PokeDetails';

const PokeDetailsContainer = () => {
    const { t } = useTranslation();
    const { name } = useParams();
    const { location: { state }, ...history } = useHistory();

    const [pokemonRequest, setPokemonRequest] = useState({
        loading: true,
        details: undefined
    });

    const id = state?.id || pokemonRequest.details?.id;

    useEffect(() => {
        const getPokemon = async () => {
            try {
                setPokemonRequest(state => ({
                    ...state,
                    details: undefined,
                    loading: true
                }));
                const details = await pokemonService.fetchPokemonWithDetails(name);
                setPokemonRequest(state => ({
                    ...state,
                    details,
                    loading: false
                }));
            } catch (ex) {
                toast.warn(t('pokeDetails.notFound'));
                history.push('/');
            }
        };
        getPokemon();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, t]);

    return (
        <PokeDetails
            id={id}
            loading={pokemonRequest.loading}
            details={pokemonRequest.details}
        />
    );
};

export default PokeDetailsContainer;
