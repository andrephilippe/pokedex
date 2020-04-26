import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

export const Scaffold = styled.section`
    padding-top: 200px;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;

    &:hover {
        cursor: pointer;
    }
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100%;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.divisions.primary.default};
    box-shadow: 0 0 40px 40px ${({ theme }) => theme.colors.shadows.primary.default};
    background-color: ${({ theme }) => theme.colors.backgrounds.primary.default};
    
    &:hover {
        cursor: default;
    }
`;

export const Sprite = styled.img`
    position: absolute;
    top: -200px;
    left: 0;
    right: 0;
    height: 300px;
    width: 300px;
    margin: auto;
`;

export const Details = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 140px;

    & > div {
        width: 100%;
    }
`;

export const Header = styled.div`
    padding: 80px 12px 32px 12px;
    background:  ${({ theme, type }) => theme.colors.linears[type]?.default || theme.colors.linears.primary.default};
`;

export const Name = styled.h1`
    text-align: center;
    font-weight: 300;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.texts.secondary.default};
`;

export const Close = styled(FiPlus)`
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 30px;
    border-radius: 100%;
    padding: 15px;
    box-sizing: content-box;
    transform: rotateZ(45deg);
    color: ${({ theme }) => theme.colors.texts.secondary.default};
    background-color: ${({ theme }) => theme.colors.buttons.primary.default};
    
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.buttons.primary.hover};
    }
`;
