import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialUser } from './createAccountForm';




export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ...createForms({
                reguser: InitialUser
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}