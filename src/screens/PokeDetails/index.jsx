import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import { capitalizeFirstLetter } from 'utils/string';

import * as pokemonService from 'services/pokemon';

import Loading from 'components/Loading';
import Characteristics from './components/Characteristics';
import Forms from './components/Forms';
import Abilities from './components/Abilities';

import {
    Scaffold,
    Details,
    Content,
    Header,
    Sprite,
    Name,
    Close
} from './styles';

const PokeDetails = ({ id, loading, details }) => {
    const history = useHistory();

    const onBack = () => {
        history.push('/');
    };

    return (
        <Scaffold onClick={onBack}>
            <Content onClick={e => e.stopPropagation()}>
                <>
                    {id && <Sprite src={pokemonService.getPokemonImg(id)} />}
                    {!loading ? (
                        <Details>
                            <Header type={details.types[0].type.name}>
                                <Container>
                                    <Name>
                                        {capitalizeFirstLetter(details.name)}
                                    </Name>
                                    <Characteristics details={details} />
                                </Container>
                            </Header>
                            <Container>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Abilities abilities={details.abilities} />
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Forms forms={details.forms} />
                                    </Col>
                                </Row>
                            </Container>
                        </Details>
                    ) : <Loading />}
                    <Close onClick={onBack} />
                </>
            </Content>
        </Scaffold>
    );
};

PokeDetails.propTypes = {
    id: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    details: PropTypes.object
};

export default PokeDetails;
