import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../Reducers/Reducer'

import ProjetsMiddleware from '../Middlewares/ProjetsMiddleware'
import UserMiddleware from '../Middlewares/UserMiddleware';
<<<<<<< HEAD
import ContactMiddleware from '../Middlewares/ContactMiddleware';
=======
import BackProjectsMiddleware from '../Middlewares/BackProjectsMiddleware';
>>>>>>> front-form-projet

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
<<<<<<< HEAD
    applyMiddleware(ProjetsMiddleware, UserMiddleware, ContactMiddleware),
=======
    applyMiddleware(ProjetsMiddleware, UserMiddleware, BackProjectsMiddleware),
>>>>>>> front-form-projet
);

const store = createStore(reducer, enhancers);

export default store;