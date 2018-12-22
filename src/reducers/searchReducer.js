import { SEARCH_TERM } from '../actions/types';

const initialState = {
    results: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
    case SEARCH_TERM:
        return {
            ...state,
            results: action.payload
        };
    default:
        return state;
    }
}