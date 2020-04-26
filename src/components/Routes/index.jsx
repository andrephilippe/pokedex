import React from 'react';
import { Router, Route } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import history from 'utils/history';

import Pokedex from 'containers/Pokedex';
import PokeDetails from 'containers/PokeDetails';

const Routes = () => (
    <Router history={history}>
        <AnimatedRoute
            path="/:name"
            component={PokeDetails}
            atEnter={{ offset: 100 }}
            atLeave={{ offset: 100 }}
            atActive={{ offset: 0 }}
            mapStyles={styles => ({
                zIndex: 2,
                position: 'fixed',
                transform: `translateY(${styles.offset}%)`,
            })}
        />
        <Route path="/" component={Pokedex} />
    </Router>
);

export default Routes;
