import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import {
    Scaffold,
    Title,
    Ability
} from './styles';

const Abilities = ({ abilities }) => {
    const { t } = useTranslation();

    const getAbilityName = useCallback(ability => (
        ability.names.find(({ language }) => language.name === i18n.language)
    ), []);

    const getAbilityDescription = useCallback(ability => (
        ability.flavor_text_entries.find(({ language }) => language.name === i18n.language)
    ), []);

    return (
        <Scaffold>
            <Title>{t('pokeDetails.abilities')}</Title>
            {abilities.map(({ ability }) => {
                return (
                    <Ability key={ability.name}>
                        <Ability.Name>
                            {getAbilityName(ability)?.name}
                        </Ability.Name>
                        <Ability.Description>
                            {getAbilityDescription(ability)?.flavor_text}
                        </Ability.Description>
                    </Ability>
                );
            })}
        </Scaffold>
    );
};

Abilities.propTypes = {
    abilities: PropTypes.array.isRequired
};

export default Abilities;
