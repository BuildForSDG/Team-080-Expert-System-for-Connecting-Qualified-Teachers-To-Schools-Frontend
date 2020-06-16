import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Files } from './uploadedfiles';
import { Quizes } from './quiz';
import { Answer } from './setCorrectAnswer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialUser } from './createAccountForm';
import { InitialEducation } from './education';
import { InitialSubjectLevel } from './subjectlevel';
import { InitialQuiz } from './checkedOption';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        	files: Files,
            quizes: Quizes,
            answer: Answer,
            ...createForms({
                reguser: InitialUser,
                education: InitialEducation,
                subjectlevel: InitialSubjectLevel,
                checked: InitialQuiz
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}