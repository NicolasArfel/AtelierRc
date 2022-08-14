import { actionAxiosProjects } from '../Actions/ProjetsActions'
import { actionAxiosLabel, ACTION_AXIOS_GET_ONLY_PROJECTS, DELETE_PROJECT, dispatchGetOnlyProjects, DISPATCH_STATUS, POST_COVER_PHOTO_PROJECT, POST_MULTY_PHOTO_PROJECT, POST_PROJECT, UPDATE_PROJECT, ACTION_DELETE_PHOTO_PROJECT, actionSucceedUpdateProjects } from "../Actions/BackProjectsActions";
import { deletePhotoProject, deleteProject, findAllProjects, getLabelProject, postNewProject, updateCoverPhotoProject, UpdateProject, uploadMorePhotoProject } from "../Requests/BackAdminProjectRequests";
import { filteredProjects } from "../Selectors/projectsSelectors";

const BackProjectsMiddleware = (store) => (next) => async (action) => {

    const getTokenOnReducer = store.getState()
    // console.log('getTokenOnReducer',getTokenOnReducer);
    const token = getTokenOnReducer.UserReducer.token

    switch (action.type) {
        case ACTION_AXIOS_GET_ONLY_PROJECTS: {

            const responseProjects = await findAllProjects();

            store.dispatch(
                dispatchGetOnlyProjects(responseProjects.data)
            );

            break;
        }
        case ACTION_DELETE_PHOTO_PROJECT: {

            const responseDeletePhotoProject = await deletePhotoProject(action.payload.id, token);
            // console.log('responseDeletePhotoProject =',responseDeletePhotoProject)

            store.dispatch(
                actionAxiosProjects()
            );

            break;
        }
        case DELETE_PROJECT: {

            const responseProjects = await deleteProject(action.payload.id, token);
            // console.log('response delete', responseProjects.status)

            if (responseProjects.status === 204) {
                const responseProjectReducer = store.getState();
                // console.log(responseProjectReducer.ProjectsReducer.projects)
                const newState = filteredProjects(responseProjectReducer.ProjectsReducer.projects, action.payload.id);
                // console.log('newState = ',newState)
                store.dispatch(
                    actionAxiosProjects(newState)
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
                const response = await postNewProject(formData, config, token);
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
        case POST_COVER_PHOTO_PROJECT: {
            // console.log('je suis dans POST_PROJECT');

            const { id } = action.payload
            // console.log('stateBackProject = ', formData);

            try {
                const response = await updateCoverPhotoProject(id, token);
                // console.log('reponse back', AxiosError)
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
        case POST_MULTY_PHOTO_PROJECT: {
            // console.log('je suis dans POST_MULTY_PHOTO_PROJECT');

            const { project_id, formData, config } = action.payload
            // console.log('stateBackProject = ', formData);

            try {
                const response = await uploadMorePhotoProject(project_id, formData, config, token);
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
        case UPDATE_PROJECT: {
            // console.log('je suis dans UPDATE_PROJECT');

            const { project_id, labelValue } = action.payload
            const responseBackReducer = store.getState();
            const data = responseBackReducer.BackProjectsReducer;
            // console.log('data', data);
            const newData = { ...data, labelValue: labelValue }
            // console.log(newData);

            try {
                const response = await UpdateProject(project_id, newData, token);
                // console.log('reponse back', response)
                if (response.status === 200) {
                    store.dispatch(actionAxiosProjects())
                    store.dispatch(actionSucceedUpdateProjects())
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