import * as ActionTypes from './ActionTypes';

export const Files = (state = {
        files: []
    }, action) => {
    switch(action.type) {

        // Load items
        case ActionTypes.GET_FILES:
            return {...state, files: state.files.concat(action.payload)};

        default:
            return state;
    }
}