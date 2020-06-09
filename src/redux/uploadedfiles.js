import * as ActionTypes from './ActionTypes';

export const Files = (state = {
        errMess: null,
        files: []
    }, action) => {
    switch(action.type) {

        // Load items
        case ActionTypes.GET_FILES:
            return {...state, errMess: null, files: files.push(action.payload)};

        default:
            return state;
    }
}