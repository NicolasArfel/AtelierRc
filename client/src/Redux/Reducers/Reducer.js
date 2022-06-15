import { combineReducers } from "redux";
import ProjectsReducer from './ProjectsReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
    ProjectsReducer, UserReducer
});

export default rootReducer;
