import { ACTION_AXIOS_LABEL, ACTION_ERROR_UPLOAD_COVER_PHOTO_PROJECT, CHANGE_BACK_INPUT_VALUE, DISPATCH_ONLY_PROJECTS, RESET_INPUT_FORM_ADD_PROJECT, ACTION_DISPATCH_PROJECT_FORM_AUTO_COMPLET, ACTION_RESET_FORM_ADD_PROJECT, ACTION_SUCCEED_UPDATE_PROJECT, ACTION_RESET_UPDATE_PROJECT } from "../Actions/BackProjectsActions";

export const initialState = {
    // onlyProjects: [],
    project_name: '',
    location: '',
    date: '',
    program: '',
    surface_area: '',
    type: '',
    client: '',
    design: '',
    photo_credit: '',
    label: [],
    isError: false,
    isSucceed: false,
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case DISPATCH_ONLY_PROJECTS:
            // console.log('je suis dans DISPATCH_ONLY_PROJECTS');
            return {
                ...state,
                onlyProjects: action.payload.responseProjects,
            }
        case ACTION_RESET_UPDATE_PROJECT:
            // console.log('je suis dans ACTION_RESET_UPDATE_PROJECT');
            return {
                ...state,
                isError: false,
                isSucceed: false,
            }
        case ACTION_SUCCEED_UPDATE_PROJECT:
            // console.log('je suis dans ACTION_SUCCEED_UPDATE_PROJECT');
            return {
                ...state,
                isError: false,
                isSucceed: true,
            }
        case ACTION_RESET_FORM_ADD_PROJECT:
            // console.log('je suis dans ACTION_RESET_FORM_ADD_PROJECT');
            return {
                ...state,
                project_name: '',
                location: '',
                date: '',
                program: '',
                surface_area: '',
                type: '',
                client: '',
                design: '',
                photo_credit: '',
            }
        case ACTION_DISPATCH_PROJECT_FORM_AUTO_COMPLET:
            // console.log('je suis dans DISPATCH_ONLY_PROJECTS');
            return {
                ...state,
                project_name: action.payload.project.project_name,
                location: action.payload.project.location,
                date: action.payload.project.date,
                program: action.payload.project.program,
                surface_area: action.payload.project.surface_area,
                type: action.payload.project.type,
                client: action.payload.project.client,
                design: action.payload.project.design,
                photo_credit: action.payload.project.photo_credit,
            }
        case CHANGE_BACK_INPUT_VALUE:
            // console.log('je suis dans CHANGE_BACK_INPUT_VALUE');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case ACTION_AXIOS_LABEL:
            // console.log('je suis dans ACTION_AXIOS_LABEL');
            return {
                ...state,
                label: action.payload.responseLabel,
            }
        case ACTION_ERROR_UPLOAD_COVER_PHOTO_PROJECT:
            // console.log('je suis dans ACTION_ERROR_UPLOAD_COVER_PHOTO_PROJECT');
            return {
                ...state,
                isError: true,
            }
        case RESET_INPUT_FORM_ADD_PROJECT:
            // console.log('je suis dans RESET_INPUT_FORM_ADD_PROJECT');
            return {
                ...state,
                project_name: '',
                location: '',
                date: '',
                program: '',
                surface_area: '',
                type: '',
                client: '',
                design: '',
                photo_credit: '',
                isError: true,
                isSucceed: false,
            }
        default:
            return state;
    }
};

export default reducer;