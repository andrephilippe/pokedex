import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Row } from 'react-grid-system';

import useOutsideClick from 'hooks/useOutsideClick';

import {
    Scaffold,
    Container,
    About,
    Model,
    Search
} from './styles';

const Header = ({ loading, onSearch }) => {
    const { t } = useTranslation();

    const searchRef = useRef();

    const [showSearch, setShowSearch] = useState(false);
    const [currentSearchQuery, setCurrentSearchQuery] = useState('');

    const handleChangeSearch = ({ target: { value } }) => {
        setCurrentSearchQuery(value);
    };

    const handleKeyDownSearch = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSearch(currentSearchQuery.toLowerCase());
        }
    };

    const handleClickGithub = () => {
        window.open('https://github.com/andrephilippe');
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    useOutsideClick(searchRef, () => {
        if (showSearch) {
            toggleSearch();
        }
    });

    return (
        <Scaffold>
            <Container>
                <Row>
                    <About sm={12} md={7} lg={7}>
                        <About.Logos>
                            <About.Logos.Pokemon src="/images/pokemon-logo.png" />
                            <About.Logos.Nintendo src="/images/nintendo-logo.png" />
                        </About.Logos>
                        <About.Texts>
                            <About.Texts.Title>
                                {t('header.title')}
                            </About.Texts.Title>
                            <About.Texts.Description>
                                {t('header.description')}
                            </About.Texts.Description>
                            <About.Texts.Github onClick={handleClickGithub}>
                                GITHUB
                                <About.Texts.Github.Icon />
                            </About.Texts.Github>
                        </About.Texts>
                    </About>
                    <Model sm={12} md={5} lg={5}>
                        <Model.Charizard src="/images/hero.png" />
                    </Model>
                </Row>
                <Search
                    data-testid="search"
                    ref={searchRef}
                    show={showSearch}
                    onClick={toggleSearch}
                >
                    <Search.Icon />
                    {showSearch && (
                        <Search.Input
                            data-testid="search-input"
                            loading={loading}
                            value={currentSearchQuery}
                            placeholder={t('header.search.placeHolder')}
                            onChange={handleChangeSearch}
                            onKeyDown={handleKeyDownSearch}
                            onClick={e => e.stopPropagation()}
                        />
                    )}
                </Search>
            </Container>
        </Scaffold>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired
};

export default Header;
