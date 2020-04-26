import styled, { css } from 'styled-components';

const animation = css`
    @keyframes spin { 
        100% {
            transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
    }
`;

export const Scaffold = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 20px;
`;

export const Pokeball = styled.img`
    ${animation}
    margin: auto;
    height: 100%;
    max-height: 100px;
    animation: spin 2s forwards infinite;
`;
