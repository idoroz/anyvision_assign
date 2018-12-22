import { FETCH_TOPTEN } from './types';

export const fetchTopTen = () => dispatch => {
    fetch('/getTopTen')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_TOPTEN,
            payload: posts
        })
    );
};

