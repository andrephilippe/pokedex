import styled from 'styled-components';

export const Scaffold = styled.section`
    height: 100%;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors.backgrounds.primary.default};
`;
