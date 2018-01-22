import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css'

import Main from './containers/Main'
import reducer from './reducers/index'
import './config/axiosConfig'

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);
