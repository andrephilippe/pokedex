import styled from 'styled-components';

export const Scaffold = styled.section`
    padding-left: 50px;
    margin-bottom: 40px;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    height: 90px;
    width: 100%;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0px 0px 6px 2px ${({ theme }) => theme.colors.shadows.primary.default};
    background-color: ${({ theme }) => theme.colors.backgrounds.primary.default};

    &:hover {
        background-color: ${({ theme }) => theme.colors.backgrounds.primary.hover};
    }
`;

export const Sprite = styled.img`
    flex-shrink: 0;
    height: 175%;
    min-width: 100px;
    margin-left: -65px;
`;

export const Name = styled.span`
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.texts.primary.default};
`;

export const Icon = styled.img`
    height: 50%;
    margin-left: auto;
    box-sizing: content-box;
    padding: 0 20px;
`;
