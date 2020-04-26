import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
    Scaffold,
    Characteristic,
    Name,
    Value
} from './styles';

const Characteristics = ({ details }) => {
    const { t } = useTranslation();

    return (
        <Scaffold>
            <Characteristic xs={4} sm={4} md={4}>
                <Value>
                    {`${details.weight / 10}kg`}
                </Value>
                <Name>
                    {t('pokeDetails.weight')}
                </Name>
            </Characteristic>
            <Characteristic xs={4} sm={4} md={4}>
                <Value>
                    {details.types.map(({ type }) => (
                        type.name
                    )).join(' ')}
                </Value>
                <Name>
                    {t('pokeDetails.type', { count: details.types.length })}
                </Name>
            </Characteristic>
            <Characteristic xs={4} sm={4} md={4}>
                <Value>
                    {`${details.height / 10}m`}
                </Value>
                <Name>
                    {t('pokeDetails.height')}
                </Name>
            </Characteristic>
        </Scaffold>
    );
};

Characteristics.propTypes = {
    details: PropTypes.object.isRequired
};

export default Characteristics;
