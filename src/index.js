import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Dashboard from './dashboard/Dashboard';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './reducers'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Dashboard/>
    </Provider>, rootElement);
