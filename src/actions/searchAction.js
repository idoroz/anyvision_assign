import { SEARCH_TERM } from './types';

export const searchTerm = (query) => dispatch => {
    console.log(query)
    fetch('/search/' + query)
        .then(res => res.json())
        .then(results => dispatch({
            type: SEARCH_TERM,
            payload: results
        })
    );
};
