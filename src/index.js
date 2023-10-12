import React from 'react';
import * as ReactDOMClient from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/app';
import './components/index.css';
import { Provider } from "react-redux"
import { store } from "./state/store"

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);