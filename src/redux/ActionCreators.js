
import * as ActionTypes from './ActionTypes';





export const getfiles = (files) => {
    return {
        type: ActionTypes.GET_FILES,
        payload: files
    }
}


export const getFiles = (files) => (dispatch) => {
	dispatch(getfiles(files));
}


// Set correct answer for comparison
export const setanswer  = (correct_answer) => {
    return {
        type: ActionTypes.SET_CORRECT_ANSWER,
        payload: correct_answer
    }
}

export const setCorrectAnswer = (correct_answer) => (dispatch) => {
	dispatch(setanswer(correct_answer));
}



// Fetch quiz from api

export const quizLoading = () => {
    return {
        type: ActionTypes.GET_QUIZ_LOADING,
    }
}

export const quizLoaded = (data) => {
    return {
        type: ActionTypes.GET_QUIZ_LOADED,
        payload: data
    }
}
  
export const quizFailed = (errmess) => {
    return {
        type: ActionTypes.GET_QUIZ_FAILED,
        payload: errmess
    }
}

export const fetchQuiz = (url) => (dispatch) => {
    dispatch(quizLoading(true));

    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response;
            }
            
        })
        .then(response => response.json())
        .then(response => dispatch(quizLoaded(response.results)))
        .catch(() => {
            //console.log('errmess', error.message)
            dispatch(quizFailed("Sorry we've lost connection, please check your internet connection and try again."))
        });
}