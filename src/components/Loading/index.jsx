import React from 'react';
import PropTypes from 'prop-types';

import {
    Scaffold,
    Pokeball
} from './styles';

const Loading = ({ className }) => (
    <Scaffold data-testid="loading" className={className || ''}>
        <Pokeball src="/icons/pokeball.svg" />
    </Scaffold>
);

Loading.propTypes = {
    className: PropTypes.string
};

export default Loading;
