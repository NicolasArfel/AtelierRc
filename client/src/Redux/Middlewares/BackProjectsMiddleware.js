import {actionDispatchProjects} from '../Actions/ProjetsActions'
import {  DELETE_PROJECT, POST_PROJECT } from "../Actions/BackProjectsActions";
import { deleteProject, postNewProject } from "../Requests/BackAdminProjectRequests";
import { filteredProjects } from "../Selectors/projectsSelectors";



const BackProjectsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case DELETE_PROJECT : {

            const responseProjects = await deleteProject(action.payload.id);
            console.log('response delete',responseProjects.status)

            if(responseProjects.status === 204) {
                const responseProjectReducer = store.getState();
                // console.log(responseProjectReducer.ProjectsReducer.projects)
                const newState = filteredProjects(responseProjectReducer.ProjectsReducer.projects, action.payload.id);
                console.log(newState)
                store.dispatch(
                    actionDispatchProjects(newState)
                    );
            }
                // console.log('projects middleware response', responseProjects);

            break;
        }

        case POST_PROJECT: {
            console.log('je suis dans POST_PROJECT');
            const stateBackProject = store.getState();
            // console.log(stateBackProject);
            const { project_name,
                slug,
                location,
                date,
                program,
                surface_area,
                type,
                client,
                design,
                project_photo_credit } = stateBackProject.BackProjectsReducer;
                console.log({project_name,
                    slug,
                    location,
                    date,
                    program,
                    surface_area,
                    type,
                    client,
                    design,
                    project_photo_credit});
                try {
                    const response = await postNewProject( project_name,
                        slug,
                        location,
                        date,
                        program,
                        surface_area,
                        type,
                        client,
                        design,
                        project_photo_credit );
                        console.log('reponse back', response)
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