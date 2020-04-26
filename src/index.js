import React from 'react';
import ReactDOM from 'react-dom';
import theme from 'theme';
import * as serviceWorker from 'serviceWorker';
import GlobalStyle from 'globalStyle';

import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import Routes from 'components/Routes';

import 'translates';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
