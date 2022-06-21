import { ACTION_AXIOS_LABEL, ACTION_ERROR_PROJECT, ACTION_SUCCEED_PROJECT, CHANGE_BACK_INPUT_VALUE } from "../Actions/BackProjectsActions";

export const initialState = {
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
        case ACTION_SUCCEED_PROJECT:
            console.log('je suis dans ACTION_SUCCEED_PROJECT');
            return {
                ...state,
                isError: false,
                isSucceed: true,
            }
        case ACTION_ERROR_PROJECT:
            console.log('je suis dans ACTION_ERROR_PROJECT');
            return {
                ...state,
                isError: true,
                isSucceed: false,
            }
        default:
            return state;
    }
};

export default reducer;