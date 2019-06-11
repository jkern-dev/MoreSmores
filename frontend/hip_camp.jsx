import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');
    let store = configureStore();

    // remove after testing 
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // end of testing

    if (window.currentUser) {
        const preloadedState = {
            session: {id: window.currentUser.id},
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    ReactDOM.render(<Root store = { store }/>, root);
})