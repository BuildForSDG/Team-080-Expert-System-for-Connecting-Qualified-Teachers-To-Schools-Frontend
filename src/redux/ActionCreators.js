import * as ActionTypes from './ActionTypes';


// Login 

export const requestLogin = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}
  
export const receiveLogin = () => {
    return {
        type: ActionTypes.LOGIN_SUCCESS
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}



export const loginUser = (email, password) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin())

    // If login was successful, set the token in local storage
    const storage = localStorage.setItem('email', email);
    // Dispatch the success action
    dispatch(receiveLogin());
};

// Login user ends






// Logs the user out

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}


export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout())
}

// Logs the user out ends






export const getfiles = (files) => {
    return {
        type: ActionTypes.GET_FILES,
        payload: files
    }
}


export const getFiles = (files) => (dispatch) => {
	dispatch(getfiles(files));
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