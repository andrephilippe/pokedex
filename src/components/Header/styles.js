import styled from 'styled-components';
import Button from 'components/__ui__/Button';
import Input from 'components/__ui__/Input';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';
import {
    Container as GridContainer,
    Col as GridCol
} from 'react-grid-system';

export const Scaffold = styled.section`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-bottom: 100px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: calc(100% - 100px);
        border-bottom: 10px solid ${({ theme }) => theme.colors.divisions.primary.default};
        background: ${({ theme }) => theme.colors.linears.primary.default}
    }
`;

export const Container = styled(GridContainer)`
    width: 100%;
    padding: 30px 0;
`;

export const About = styled(GridCol)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 1;
`;

About.Logos = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

About.Logos.Nintendo = styled.img`
    height: 20px;
`;

About.Logos.Pokemon = styled.img`
    margin-right: 20px;
    height: 100px;
`;

About.Texts = styled.article`
    padding: 0 20px;
`;

About.Texts.Title = styled.h1`
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.texts.secondary.default};
`;

About.Texts.Description = styled.p`
    text-align: justify;
    max-width: 500px;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.texts.secondary.default};
`;

About.Texts.Github = styled(Button)`
    display: flex;
    align-items: center;
`;

About.Texts.Github.Icon = styled(AiOutlineGithub)`
    margin-left: 10px;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.icons.secondary.default};
`;

export const Model = styled(GridCol)`
    display: flex;
    justify-content: center;
`;

Model.Charizard = styled.img`
    height: 450px;
`;

export const Search = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -50px;
    margin: auto;
    height: 100px;
    padding: 32px;
    border-radius: 50px;
    transition: width .5s;
    width: ${({ show }) => show ? '95%' : '100px'};
    background-color: ${({ theme }) => theme.colors.backgrounds.secondary.default};

    &:hover {
        cursor: pointer;
    }
`;

Search.Icon = styled(IoIosSearch)`
    font-size: 40px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.icons.tertiary.default};
`;

Search.Input = styled(Input)`
    text-align: center;
`;
