import { DISPATCH_PROJECTS } from "../Actions/ProjetsActions";

export const initialState = {
    projects: []
};

const reducer = (state = initialState, action = {}) => {
    // console.log('payload projects =' ,action.payload);
    switch (action.type) {
        case DISPATCH_PROJECTS:
            return {
                ...state,
                projects: action.payload.projects,
            }

        default:
            return state;
    }
};


export default reducer;