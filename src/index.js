import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import App from './App';
import store from './store/AppStore';

// styles
import './styles/App.scss';
import './styles/Auth.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
