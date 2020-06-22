import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Files } from './uploadedfiles';
import { Quizes } from './quiz';
import { Auth } from './auth';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialUser } from './createAccountForm';
import { InitialEducation } from './education';
import { InitialSubjectLevel } from './subjectlevel';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
        	files: Files,
            quizes: Quizes,
            ...createForms({
                reguser: InitialUser,
                education: InitialEducation,
                subjectlevel: InitialSubjectLevel
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}