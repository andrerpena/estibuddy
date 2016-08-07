import React from 'react';
import App from './containers/App';
import Home from './containers/Home';

import { Route } from 'react-router';

export default (
    <Route component={App}>
        <Route path="/" component={Home}/>
    </Route>
);
