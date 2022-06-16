import { SUBMIT_PROJECT } from "../Actions/BackProjectsActions";

const BackProjectsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case SUBMIT_PROJECT: {
            console.log('je suis dans SUBMIT_PROJECT');
            const stateBackProject = store.getState();
            console.log(stateBackProject);
        }
        break;
        default:
            next(action);
    }
};

export default BackProjectsMiddleware;