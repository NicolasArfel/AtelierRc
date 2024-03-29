import { combineReducers } from "redux";
import ProjectsReducer from './ProjectsReducer'
import BackProjectsReducer from './BackProjectsReducer'
import BackFurnituresReducer from './BackFurnituresReducer'
import ContactReducer from './ContactReducer'
import UserReducer from './UserReducer'
import FurnituresReducer from './FurnituresReducer'

const rootReducer = combineReducers({
    ProjectsReducer, 
    UserReducer, 
    BackProjectsReducer, 
    ContactReducer, 
    FurnituresReducer,
    BackFurnituresReducer
});

export default rootReducer;
