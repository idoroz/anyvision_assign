import { FETCH_TOPTEN } from '../actions/types';

const initialState = {
    items: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
    case FETCH_TOPTEN:
        return {
            ...state,
            items: action.payload
        };
    default:
        return state;
    }
}