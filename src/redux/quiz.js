import * as ActionTypes from './ActionTypes';

export const Quizes = (state = {
        isLoading: true,
        errMess: null,
        quizes: null
    }, action) => {
    switch(action.type) {

        // Load items
        
        case ActionTypes.GET_QUIZ_LOADING:
            return {...state, isLoading: true, errMess: null, quizes: null};

        case ActionTypes.GET_QUIZ_LOADED:
            return {...state, isLoading: false, errMess: null, quizes: action.payload };

        case ActionTypes.GET_QUIZ_FAILED:
            return {...state, isLoading: false, errMess: action.payload, quizes: null };

        default:
            return state;
    }
}