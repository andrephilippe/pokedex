import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  ${reset}
  
  html, body, #root {
    font-family: 'Open Sans';
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    
    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5 {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.texts.primary.default};
  }

  h1 {
    font-size: 38px;
  }
  
  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  p, span {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.texts.primary.default};
  }

  p {
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }

  b {
    font-weight: bold;
  }
`;
