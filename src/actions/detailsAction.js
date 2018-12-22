import { DETAIL_VIEW } from './types';



export const detailView = (details) => {
    const action = {
        type: DETAIL_VIEW,
        payload: details
    }

    console.log('action in detailView', action)
    return action
}



