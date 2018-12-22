import { combineReducers } from 'redux';
import topTenReducer from './topTenReducer';
import searchReducer from './searchReducer';
import detailsReducer from './detailsReducer';



export default combineReducers({
    list: topTenReducer,
    results: searchReducer,
    details: detailsReducer,


});