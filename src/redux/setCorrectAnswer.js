import * as ActionTypes from './ActionTypes';

export const Answer = (state = {
        answer: ''
    }, action) => {
    switch(action.type) {

        // Set answer
        
        case ActionTypes.SET_CORRECT_ANSWER:
            return {...state, answer: action.payload };

        default:
            return state;
    }
}