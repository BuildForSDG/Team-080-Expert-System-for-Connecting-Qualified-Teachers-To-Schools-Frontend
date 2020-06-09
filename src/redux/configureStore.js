import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Files } from './uploadedfiles';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialUser } from './createAccountForm';
import { InitialEducation } from './education';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        	files: Files,
            ...createForms({
                reguser: InitialUser,
                education: InitialEducation
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}