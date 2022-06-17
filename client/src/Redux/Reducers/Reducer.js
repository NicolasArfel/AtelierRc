import { combineReducers } from "redux";
import ProjectsReducer from './ProjectsReducer'
import BackProjectsReducer from './BackProjectsReducer'
import ContactReducer from './ContactReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
    ProjectsReducer, UserReducer, BackProjectsReducer, ContactReducer
});

export default rootReducer;
