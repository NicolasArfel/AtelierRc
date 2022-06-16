import { CHANGE_BACK_INPUT_VALUE } from "../Actions/BackProjectsActions";

export const initialState = {
    project_name: '',
    slug:'',
    location: '',
    date: '',
    program: '',
    surface_area: '',
    type: '',
    client: '',
    design: '',
    project_photo_credit: '',
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case CHANGE_BACK_INPUT_VALUE:
            console.log('je suis dans CHANGE_BACK_INPUT_VALUE');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
  
        default:
            return state;
    }
};

export default reducer;