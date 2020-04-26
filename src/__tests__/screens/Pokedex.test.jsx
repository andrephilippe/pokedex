import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Wrapper from 'components/Wrapper';
import Pokedex from 'screens/Pokedex';
import '__mocks__/router';

import pokemons from '../__jsons__/pokemons.json';

describe('Pokedex', () => {
    let props = {
        loading: false,
        pokemons: pokemons.results,
        onScrollEnd: jest.fn()
    };

    beforeEach(() => {
        render(
            <Wrapper>
                <Pokedex {...props} />
            </Wrapper>
        );
    });

    it('should list all pokemons', () => {
        expect(screen.queryAllByTestId('pokemon-card').length).toBe(20);
    });

    it('should request more pokemons', () => {
        fireEvent.scroll(screen.getByTestId('pokedex'), { target: { scrollY: 1000 } });
        expect(props.onScrollEnd).toHaveBeenCalledTimes(1);
    });
});
