import React from 'react';
import {Router} from 'react-router'
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router'
import {render} from 'react-dom';
import './sass/styles.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('#app_container')
);