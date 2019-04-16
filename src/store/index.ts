import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    // Connects Redux Dev Tools to app store 
    applyMiddleware(thunk)
);

export default store;