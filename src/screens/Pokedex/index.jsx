import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import { useHistory } from 'react-router-dom';

import Header from 'containers/Header';
import PokeCard from 'components/PokeCard';
import Loading from 'components/Loading';

import {
    Scaffold,
} from './styles';

const Pokedex = ({ loading, pokemons, onScrollEnd }) => {
    const history = useHistory();

    const handleScroll = event => {
        const bottom = event.target.scrollHeight - event.target.scrollTop <= event.target.clientHeight + 700;
        if (bottom) {
            onScrollEnd();
        }
    };

    const handleClickPokeCard = (name, id) => {
        history.push(`/${name}`, { id });
    };

    return (
        <Scaffold data-testid="pokedex" onScroll={handleScroll}>
            <Header />
            <Container>
                <Row>
                    {pokemons.map(pokemon => (
                        <Col data-testid="pokemon-card" key={pokemon.name} xs={12} md={6} xl={4}>
                            <PokeCard
                                pokemon={pokemon}
                                onClick={handleClickPokeCard}
                            />
                        </Col>
                    ))}
                </Row>
                {loading && <Loading />}
            </Container>
        </Scaffold>
    );
};

Pokedex.propTypes = {
    loading: PropTypes.bool.isRequired,
    pokemons: PropTypes.array.isRequired,
    onScrollEnd: PropTypes.func.isRequired
};

export default Pokedex;
