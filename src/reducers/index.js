import { combineReducers } from 'redux';
import topTenReducer from './topTenReducer';
import searchReducer from './searchReducer';
import detailsReducer from './detailsReducer';
import userReducer from './userReducer';



export default combineReducers({
    list: topTenReducer,
    results: searchReducer,
    details: detailsReducer,
    user: userReducer

});