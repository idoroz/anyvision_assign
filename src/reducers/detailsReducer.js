import { DETAIL_VIEW } from '../actions/types';

const initialState = {
    details: [],
};

const getDetailView = (state = initialState, action) => {
    let details = []
    switch (action.type) {
    case DETAIL_VIEW:
        return {
            ...state,
            details: action.payload
        }
    default:
        return state;
    }
}

export default getDetailView;