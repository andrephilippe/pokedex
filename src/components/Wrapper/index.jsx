import React from 'react';
import { Router } from 'react-router-dom';
import theme from 'theme';
import { ThemeProvider } from 'styled-components';
import history from 'utils/history';
import 'translates';

const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Router history={history}>
            {children}
        </Router>
    </ThemeProvider>
);

export default Wrapper;
