import React from 'react';

import { StyledButton } from './styles';

const Button = props => (
    <StyledButton {...props} />
);

Button.defaultProps = {
    type: 'button'
};

export default Button;
