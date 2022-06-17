import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../Reducers/Reducer'

import ProjetsMiddleware from '../Middlewares/ProjetsMiddleware'
import UserMiddleware from '../Middlewares/UserMiddleware';
import BackProjectsMiddleware from '../Middlewares/BackProjectsMiddleware';
import ContactMiddleware from '../Middlewares/ContactMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(ProjetsMiddleware, UserMiddleware, ContactMiddleware,BackProjectsMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;