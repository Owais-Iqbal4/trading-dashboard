
import { createStore } from 'redux';
import rootReducer from './rootReducer'; // Create this file to combine reducers

const store = createStore(rootReducer);

export default store;
