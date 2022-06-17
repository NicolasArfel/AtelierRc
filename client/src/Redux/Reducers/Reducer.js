import { combineReducers } from "redux";
<<<<<<< HEAD
import ProjectsReducer from './ProjectsReducer';
import UserReducer from './UserReducer';
import ContactReducer from './ContactReducer';

const rootReducer = combineReducers({
    ProjectsReducer, UserReducer, ContactReducer
=======
import ProjectsReducer from './ProjectsReducer'
import BackProjectsReducer from './BackProjectsReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
    ProjectsReducer, UserReducer, BackProjectsReducer,
>>>>>>> front-form-projet
});

export default rootReducer;
