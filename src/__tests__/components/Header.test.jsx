import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Wrapper from 'components/Wrapper';
import Header from 'components/Header';

describe('Header', () => {
    let props = {
        loading: false,
        onSearch: jest.fn()
    };

    beforeEach(() => {
        render(
            <Wrapper>
                <Header {...props} />
            </Wrapper>
        );
    });

    it('search input should hidden', () => {
        expect(screen.queryByTestId('search-input')).toBeNull();
    });

    it('search input should visible', () => {
        fireEvent.click(screen.getByTestId('search'));
        expect(screen.queryByTestId('search-input')).not.toBeNull();
    });

    it('search emit name in lower case', () => {
        fireEvent.click(screen.getByTestId('search'));
        const searchInput = screen.getByTestId('search-input');
        fireEvent.change(searchInput, {
            target: { value: 'ChariZard' }
        });
        fireEvent.keyDown(searchInput, {
            key: 'Enter',
        });
        expect(props.onSearch).toHaveBeenCalledTimes(1);
        expect(props.onSearch).toHaveBeenCalledWith('charizard');
    });
});
