/* --- creation of the state --- */

import { CHANGE_BACK_INPUT_VALUE } from "../Actions/BackFurnituresActions";

export const initialState = {
    furniture_name: '',
    type: '',
    editor: '',
    designer: '',
    date: '',
    dimensions: '',
    conditions: '',
    description: '',
    availability: true,
    photo_credit: '',
}

/* --- reducer contain all the action switch case --- */

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_BACK_INPUT_VALUE:
            // console.log('je suis dans CHANGE_BACK_INPUT_VALUE');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }


        default:
            return state;
    }
};

export default reducer;