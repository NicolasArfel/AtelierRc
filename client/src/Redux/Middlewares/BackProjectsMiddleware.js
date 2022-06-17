import { DELETE_PROJECT, POST_PROJECT } from "../Actions/BackProjectsActions";
import { actionDispatchProjects } from "../Actions/ProjetsActions";
import { postNewProject } from "../Requests/BackAdminProjectRequests";
import { getAllProjects } from "../Requests/Requests";


const BackProjectsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case DELETE_PROJECT : {

            const responseProjects = await getAllProjects();
                // console.log('projects middleware response', responseProjects);
                store.dispatch(
                    actionDispatchProjects(responseProjects)
                );
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