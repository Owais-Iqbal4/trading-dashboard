// store/rootReducer.js
import { combineReducers } from 'redux';
import chartReducer from './reducers/chartReducer'; // Your individual reducers

const rootReducer = combineReducers({
    chartData: chartReducer,
});

export default rootReducer;
