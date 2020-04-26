import styled from 'styled-components';

export const StyledButton = styled.button`
    border-radius: 4px;
    font-size: 14px;
    padding: 16px 24px;
    border: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.texts.secondary.default};
    background-color: ${({ theme }) => theme.colors.buttons.primary.default};

    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.buttons.primary.hover};
    }
`;
