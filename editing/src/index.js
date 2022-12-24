import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom/client';

import reducer from './reducers/reducer';
import App from './App';

import './index.css';

const store= createStore(reducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

