import {createStore} from 'redux';
import rootReducer from './reducers';
import { IAppState } from '../shared/types';

const store = createStore(
    rootReducer,
    // Connects Redux Dev Tools to app store 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;