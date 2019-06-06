import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    let middleWare = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleWare = [...middleWare];
        // middleWare = [...middleWare, logger];
    }
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middleWare)
    );
};

export default configureStore;