import { combineReducers } from "redux";
import ProjectsReducer from './ProjectsReducer';
import UserReducer from './UserReducer';
import ContactReducer from './ContactReducer';

const rootReducer = combineReducers({
    ProjectsReducer, UserReducer, ContactReducer
});

export default rootReducer;
