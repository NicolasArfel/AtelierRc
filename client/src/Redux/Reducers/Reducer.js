import { combineReducers } from "redux";
import ProjectsReducer from './ProjectsReducer'
import BackProjectsReducer from './BackProjectsReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
    ProjectsReducer, UserReducer, BackProjectsReducer,
});

export default rootReducer;
