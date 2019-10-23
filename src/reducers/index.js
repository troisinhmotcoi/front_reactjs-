import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
export const rootReducer = combineReducers({
    errors: errorReducer,
    auth: authReducer
});