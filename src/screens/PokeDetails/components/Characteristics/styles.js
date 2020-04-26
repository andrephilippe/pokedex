import styled from 'styled-components';
import {
    Row as GridRow,
    Col as GridCol
} from 'react-grid-system';

export const Scaffold = styled(GridRow)`
    padding: 20px 0;
`;

export const Characteristic = styled(GridCol)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid ${({ theme }) => theme.colors.divisions.secondary.default};

    &:last-child {
        border-right: none;
    }
`;

export const Value = styled.h5`
    text-align: center;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.texts.secondary.default};
`;

export const Name = styled.span`
    text-align: center;
    color: ${({ theme }) => theme.colors.texts.secondary.default};
`;
