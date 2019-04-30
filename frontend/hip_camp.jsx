import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');
    let store = configureStore();

    // remove after testing 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // end of testing


    ReactDOM.render(<Root store = { store }/>, root);
})