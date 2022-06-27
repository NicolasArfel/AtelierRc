/* --- creation of the state --- */

import { ACTION_DISPATCH_FURNITURE_FORM_AUTO_COMPLET, CHANGE_BACK_INPUT_VALUE } from "../Actions/BackFurnituresActions";

export const initialState = {
    furniture_name: '',
    type: '',
    editor: '',
    designer: '',
    date: '',
    dimensions: '',
    condition: 'Bon état',
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

        case ACTION_DISPATCH_FURNITURE_FORM_AUTO_COMPLET:
            // console.log('je suis dans DISPATCH_ONLY_PROJECTS');
            return {
                ...state,
                furniture_name: action.payload.furniture.furniture_name,
                type: action.payload.furniture.type,
                editor: action.payload.furniture.editor,
                designer: action.payload.furniture.designer,
                date: action.payload.furniture.date,
                dimensions: action.payload.furniture.dimension,
                condition: action.payload.furniture.condition,
                description: action.payload.furniture.description,
                availability: action.payload.furniture.availability,
                photo_credit: action.payload.furniture.photo_credit,
            }


        default:
            return state;
    }
};

export default reducer;