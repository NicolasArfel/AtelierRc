import { POST_PROJECT } from "../Actions/BackProjectsActions";
import { postNewProject } from "../Requests/Requests";

const BackProjectsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case POST_PROJECT: {
            console.log('je suis dans POST_PROJECT');
            const stateBackProject = store.getState();
            // console.log(stateBackProject);
            const { project_name,
                location,
                date,
                program,
                surface,
                type,
                client,
                design,
                photo_credit } = stateBackProject.BackProjectsReducer;
                console.log({project_name,
                    location,
                    date,
                    program,
                    surface,
                    type,
                    client,
                    design,
                    photo_credit});
                try {
                    const response = await postNewProject( project_name,
                        location,
                        date,
                        program,
                        surface,
                        type,
                        client,
                        design,
                        photo_credit );
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