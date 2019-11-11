import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import secretReducer from './secretReducer';
export const rootReducer = combineReducers({
    errors: errorReducer,
    auth: authReducer,
    secret:secretReducer
    
});