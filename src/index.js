import { App } from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import WebFont from 'webfontloader';
import './styles/reset.css';

WebFont.load({
    google: {
        families: ['Oswald', 'Quattrocentro']
    }
})


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);

