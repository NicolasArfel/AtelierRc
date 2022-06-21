import { actionAxiosProjects, actionDispatchProjects } from '../Actions/ProjetsActions'
import {  actionAxiosLabel, DELETE_PROJECT, DISPATCH_STATUS, POST_PROJECT } from "../Actions/BackProjectsActions";
import { deleteProject, getLabelProject, postNewProject } from "../Requests/BackAdminProjectRequests";
import { filteredProjects } from "../Selectors/projectsSelectors";

const BackProjectsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case DELETE_PROJECT: {

            const responseProjects = await deleteProject(action.payload.id);
            // console.log('response delete', responseProjects.status)

            if (responseProjects.status === 204) {
                const responseProjectReducer = store.getState();
                // console.log(responseProjectReducer.ProjectsReducer.projects)
                const newState = filteredProjects(responseProjectReducer.ProjectsReducer.projects, action.payload.id);
                // console.log(newState)
                store.dispatch(
                    actionDispatchProjects(newState)
                );
            }
            // console.log('projects middleware response', responseProjects);

            break;
        }

        case POST_PROJECT: {
            // console.log('je suis dans POST_PROJECT');

            const { formData, config } = action.payload
            // console.log('stateBackProject = ', formData);

            try {
                const response = await postNewProject(formData, config);
                // console.log('reponse back', response)
                if (response.status === 200) {
                    store.dispatch(
                        actionAxiosProjects()
                    );
                }
            } catch (err) {
                console.error(err)
            }
        }
            break;
        case DISPATCH_STATUS: {
            // console.log('je suis dans DISPATCH_STATUS');
            try {
                const responseLabel = await getLabelProject()
                // console.log('responseLabel', responseLabel);
                store.dispatch(
                    actionAxiosLabel(responseLabel)
                );
            } catch (err) {
                console.error(err)
            }
            break;
        }
        default:
            next(action);
    }
};

export default BackProjectsMiddleware;