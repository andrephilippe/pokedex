import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { capitalizeFirstLetter } from 'utils/string';
import { getPokemonIdFromUrl } from 'utils/pokemon';

import * as pokemonService from 'services/pokemon';

import {
    Scaffold,
    Card,
    Sprite,
    Name,
    Icon
} from './styles';

const PokeCard = ({ pokemon, onClick }) => {
    const { name, url } = pokemon;

    const id = useMemo(() => (
        getPokemonIdFromUrl(url)
    ), [url]);

    const handleClickCard = () => {
        onClick(name, id);
    };

    return (
        <Scaffold>
            <Card onClick={handleClickCard}>
                <Sprite src={pokemonService.getPokemonImg(id)} />
                <Name>
                    {capitalizeFirstLetter(name)}
                </Name>
                <Icon src="/icons/pokeball.svg" />
            </Card>
        </Scaffold>
    );
};

PokeCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default PokeCard;
