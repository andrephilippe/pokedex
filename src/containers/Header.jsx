import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import * as pokemonService from 'services/pokemon';

import Header from 'components/Header';

const HeaderContainer = () => {
    const history = useHistory();
    const { t } = useTranslation();

    const [pokemonRequest, setPokemonRequest] = useState({
        loading: false
    });

    const handleSearch = async (query) => {
        try {
            setPokemonRequest(state => ({ ...state, loading: true }));
            const { data: { id } } = await pokemonService.fetchPokemon(query);
            history.push(`/${query}`, { id });
        } catch (ex) {
            toast.warn(t('header.search.notFound'));
        }
        finally {
            setPokemonRequest(state => ({ ...state, loading: false }));
        }
    };

    return (
        <Header
            loading={pokemonRequest.loading}
            onSearch={handleSearch}
        />
    );
};

export default HeaderContainer;
