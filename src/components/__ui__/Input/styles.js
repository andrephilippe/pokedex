import styled from 'styled-components';
import PokeLoading from 'components/Loading';

export const Scaffold = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    border-radius: 20px;
    margin-left: 20px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.texts.primary.default};
    background-color: ${({ theme }) => theme.colors.backgrounds.primary.default};
`;

export const StyledInput = styled.input`
    border: none;
    width: 100%;
    font-size: 18px;
    padding: 0 12px;
    user-select: text !important;
`;

export const Loading = styled(PokeLoading)`
    flex-shrink: 0;
    padding: 5px;
`;
