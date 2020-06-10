import { combineReducers } from 'redux';
import layoutReducer from './layout/layoutReducer';

const rootReducer = combineReducers({
    layoutReducer
});

export default rootReducer;