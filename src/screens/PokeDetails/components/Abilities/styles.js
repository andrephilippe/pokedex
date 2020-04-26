import styled from 'styled-components';

export const Scaffold = styled.ul`
    margin-top: 30px;
`;

export const Title = styled.h4`
    margin-bottom: 20px;
`;

export const Ability = styled.li`
    margin-bottom: 12px;
`;

Ability.Name = styled.h5`
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.texts.tertiary.default};
`;

Ability.Description = styled.p`
    font-size: 14px;
`;
