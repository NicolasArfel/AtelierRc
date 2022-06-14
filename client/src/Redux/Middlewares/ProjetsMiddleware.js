import { getAllProjects } from '../Requests/Requests';
import { AXIOS_PROJECTS, actionDispatchProjects } from '../Actions/ProjetsActions';

const ProjetsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case AXIOS_PROJECTS:

            try {
                const responseProjects = await getAllProjects();
                // console.log('projects middleware response', responseProjects);
                store.dispatch(
                    actionDispatchProjects(responseProjects)
                );

            }
            catch (err) {
                console.error(err)
            }

            break;
        default:
            next(action);
    }
};

export default ProjetsMiddleware;