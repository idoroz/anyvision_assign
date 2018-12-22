import { GET_USER } from './types';



export const userDetails = (creds) => {
    const action = {
        type: GET_USER,
        payload: creds
    }

    console.log('action in detailView', action)
    return action
}

