import React from 'react';
import PropTypes from 'prop-types';

import {
    Scaffold,
    StyledInput,
    Loading
} from './styles';

const Input = ({ loading, className, ...props }) => (
    <Scaffold className={className || ''}>
        <StyledInput {...props} />
        {loading && <Loading />}
    </Scaffold>
);

Input.defaultProps = {
    type: 'text'
};

Input.propTypes = {
    loading: PropTypes.bool,
    className: PropTypes.string,
};

export default Input;
