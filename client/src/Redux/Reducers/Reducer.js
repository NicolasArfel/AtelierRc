import { combineReducers } from "redux";
import ProjetsReducer from './ProjetsReducer'

const rootReducer = combineReducers({
    Projets : ProjetsReducer
});

export default rootReducer;
