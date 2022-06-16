import { CHANGE_INPUT_VALUE } from "../Actions/ContactActions";


export const initialState = {
    lastname: '',
    firstname: '',
    from: '',
    subject: '',
    text: ''
};

const ContactReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            console.log('je suis dans CHANGE_INPUT_VALUE de ContactReducer');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        default:
            return state;
    }
};

export default ContactReducer;